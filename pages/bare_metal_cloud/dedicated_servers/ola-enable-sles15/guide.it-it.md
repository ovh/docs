---
title: "Configurare OVHcloud Link Aggregation su un server dedicato (SLES 15)"
excerpt: "Attiva OVHcloud Link Aggregation sul tuo server dedicato SLES 15."
updated: 2026-04-20
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

La tecnologia OVHcloud Link Aggregation (OLA) è stata progettata dai team OVHcloud per aumentare la disponibilità dei server e potenziare le connessioni di rete. L'attivazione dell'opzione permette di aggregare in pochi click le schede di rete e rendere i collegamenti ridondati in modo che, in caso di malfunzionamenti, il traffico venga reindirizzato automaticamente verso il collegamento disponibile. La larghezza di banda disponibile viene anche raddoppiata grazie all'aggregazione.
L'aggregazione si basa sulla tecnologia IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Questa guida spiega come configurare le interfacce in aggregazione per utilizzarle con OLA in SLES 15.**

## Prerequisiti

- [Configurare OVHcloud Link Aggregation nello Spazio Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Server dedicati](/links/control-panel/baremetal-dedicated-servers)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server dedicati`{.action} > Seleziona il tuo server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedura

Poiché la configurazione dei NIC in OLA è di tipo privato-privato, non sarà possibile accedere al server in SSH. Sarà quindi necessario utilizzare lo strumento IPMI per accedere al server.

Clicca sulla scheda `IPMI`{.action} (1) e poi sul pulsante `Da una applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Verrà scaricato un software JNLP. Avvialo per accedere all'IPMI. Accedi utilizzando le informazioni di identificazione associate al server.

Di default, utilizzando un modello OVHcloud, i NIC saranno denominati *eth0* e *eth1*. Se non utilizzi un modello OVHcloud, puoi recuperare i nomi delle interfacce utilizzando il seguente comando:

```bash
ip a
```

> [!primary]
> I valori (indirizzi MAC, indirizzi IP, ecc.) indicati nelle configurazioni e negli esempi seguenti sono forniti a titolo di esempio. Naturalmente è necessario sostituirli con i propri valori.
>

### Recupero degli indirizzi MAC

Vai alla scheda `Interfacce di rete`{.action} e prendi nota degli indirizzi MAC di ciascuna interfaccia (pubblica/privata) visualizzati in fondo al menu.

![Spazio Cliente OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> L'indirizzo MAC dell'interfaccia **pubblica principale** è quello che riceve le offerte DHCP, sia nel sistema operativo del server che in modalità rescue. Questa interfaccia gestisce la connettività pubblica nella configurazione predefinita.
>
> Inoltre, l'indirizzo MAC dell'interfaccia **privata principale** è quello con il valore più basso. Nell'immagine di esempio sopra, si tratta dell'indirizzo `a1:b2:c3:d4:e5:d6`.
>

Una volta che sai quali indirizzi MAC sono associati a ciascun tipo di interfaccia (pubblica/privata), devi recuperare i nomi delle interfacce.

### Recupero dei nomi delle interfacce

> [!primary]
>
> Se perdi la connessione di rete al server, segui i passaggi "**Apri KVM**" di [questa guida](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Per recuperare i nomi delle interfacce, esegui il seguente comando:

```bash
ip a
```

> [!primary]
>
> Questo comando mostrerà numerose interfacce. In caso di difficoltà nel determinare quali siano le interfacce fisiche, l'indirizzo IP pubblico del server è ancora associato di default alla prima interfaccia.
>

Ecco un esempio di output:

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: ens22f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c6 brd ff:ff:ff:ff:ff:ff
    inet 203.0.113.1/32 metric 100 scope global dynamic ens22f0np0
       valid_lft 71613sec preferred_lft 71613sec
    inet6 2001:db8:1:1b00:203:0:112:0/56 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::a6b2:c3ff:fed4:e5c6/64 scope link
       valid_lft forever preferred_lft forever
3: ens22f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c7 brd ff:ff:ff:ff:ff:ff
4: ens33f0np0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d6 brd ff:ff:ff:ff:ff:ff
5: ens33f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d7 brd ff:ff:ff:ff:ff:ff
```

Una volta determinati i nomi delle interfacce, è possibile configurare l'aggregazione nel sistema operativo.

### Configurazione dell'aggregazione delle interfacce

Seleziona la scheda seguente corrispondente alla configurazione del tuo server:

- **Due interfacce**: server Advance con due NIC fisiche.
- **Quattro interfacce - Double LAG**: server Scale e High-Grade con OLA in modalità **Active - Double LAG** (aggregati pubblico + privato). Richiede l'[attivazione di OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) nello Spazio Cliente OVHcloud.
- **Quattro interfacce - Fully Private**: server Scale e High-Grade con OLA in modalità **Active - Fully Private** (unico aggregato privato per vRack). Richiede l'[attivazione di OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) nello Spazio Cliente OVHcloud.

> [!tabs]
> Due interfacce
>> Crea il file di configurazione dell'aggregato `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **IP statico**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configura poi ogni interfaccia fisica. Modifica `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Crea `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> I file di configurazione delle interfacce fisiche rimangono invariati come sopra.
>>
>> ///
>>
> Quattro interfacce - Double LAG
>> Questa configurazione raggruppa le interfacce pubbliche in `bond0` (con IP pubblico) e le interfacce private in `bond1` (per vRack).
>>
>> Crea il file di configurazione dell'aggregato pubblico `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **IP statico**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Crea il file di configurazione dell'aggregato privato `/etc/sysconfig/network/ifcfg-bond1`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens33f0np0'
>> BONDING_SLAVE_1='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configura poi ogni interfaccia fisica. Modifica `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Crea `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Crea `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Crea `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> /// details | DHCP (solo bond0)
>>
>> Per l'aggregato pubblico, utilizza DHCP:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> L'aggregato privato (`ifcfg-bond1`) e tutti i file di configurazione delle interfacce fisiche rimangono invariati come sopra.
>>
>> ///
>>
> Quattro interfacce - Fully Private
>> Questa configurazione aggrega tutte le interfacce fisiche in un unico aggregato esclusivamente per l'utilizzo con vRack. Non è prevista connettività IP pubblica.
>>
>> > [!warning]
>> >
>> > In seguito all'implementazione di OLA in modalità Fully Private, l'IP pubblico non è più accessibile. Assicurati di disporre di un mezzo di accesso alternativo (ad esempio tramite un altro server nel vRack o via KVM/IPMI) prima di applicare questa configurazione.
>> >
>>
>> Crea il file di configurazione dell'aggregato `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_SLAVE_2='ens33f0np0'
>> BONDING_SLAVE_3='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configura poi ogni interfaccia fisica. Modifica `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Crea `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Crea `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Crea `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> > [!primary]
>> >
>> > In modalità Fully Private, l'aggregato utilizza l'indirizzo MAC dell'interfaccia **privata principale**. Il campo `IPADDR` deve essere impostato sul tuo indirizzo IP privato vRack.
>> >

### Applicazione della configurazione

Applica la configurazione ricaricando tutte le interfacce con wicked:

```bash
wicked ifreload all
```

Questa operazione potrebbe richiedere alcuni secondi per costruire l'interfaccia di aggregazione. Per verificare che l'aggregato funzioni correttamente, effettua il ping di un altro server nella stessa vRack. Se funziona, la procedura è conclusa. In caso contrario, verifica nuovamente le configurazioni o prova a riavviare il server.

Puoi anche verificare le impostazioni dell'aggregato con il seguente comando:

```bash
cat /proc/net/bonding/bond0
```

## Per saperne di più

[Configurare OVHcloud Link Aggregation nello Spazio Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Come configurare la NIC per OVHcloud Link Aggregation in Debian 12 o Ubuntu 24.04 con Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Configurare un NIC per il servizio OVHcloud Link Aggregation in Debian 9 a 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Configurare un NIC per il servizio OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Contatta la nostra [Community di utenti](/links/community).
