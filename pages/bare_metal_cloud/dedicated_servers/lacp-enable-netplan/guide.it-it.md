---
title: "Come configurare l'aggregazione di link con LACP in Debian 12 o Ubuntu 24.04"
excerpt: "Attivate l'aggregazione di link sul vostro server Debian 12 o Ubuntu 24.04 (Netplan) per aumentare la disponibilità del server e migliorare l'efficienza delle connessioni di rete"
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

La tecnologia LACP (Link Aggregation Control Protocol) è progettata per aumentare la disponibilità del server e migliorare l'efficienza delle connessioni di rete. È possibile aggregare le schede di rete e rendere i collegamenti di rete ridondanti. Ciò significa che se un collegamento si interrompe, il traffico viene automaticamente reindirizzato verso un altro collegamento disponibile. La banda passante disponibile viene inoltre raddoppiata grazie all'aggregazione.

**Questa guida spiega come associare le interfacce per utilizzarle con l'aggregazione di link in Debian 12 (*o versioni successive*) / Ubuntu 24.04 (configurazione Netplan).**

> [!warning]
> Sebbene le immagini Debian 12 (o più recenti) fornite da OVHcloud utilizzino `Netplan` di default, esistono due eccezioni importanti in cui viene utilizzato `ifupdown` (/etc/network/interfaces):
>
> - **Modalità rescue**: Sebbene basato su Debian 12, l'ambiente di ripristino si basa sull'utility `ifupdown`.
> - **Immagini personalizzate**: Le installazioni di Debian eseguite con una propria immagine potrebbero utilizzare ancora `ifupdown` per la configurazione di rete.
>
> Per configurare l'aggregazione di link in modalità rescue o su un sistema operativo personalizzato che utilizza `ifupdown`, fate riferimento a [questa guida](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Prerequisiti

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Server dedicati](/links/control-panel/baremetal-dedicated-servers)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server dedicati`{.action} > Selezionate il vostro server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedura

> [!primary]
> I valori (indirizzi MAC, indirizzi IP, ecc.) indicati nelle configurazioni e negli esempi seguenti sono forniti a titolo di esempio. È necessario sostituire questi valori con i propri.
>

### Recupero degli indirizzi MAC

Cliccate sulla scheda `Interfacce di rete`{.action} e prendete nota degli indirizzi MAC di ciascuna interfaccia (pubblica/privata) visualizzati in fondo al menu.

![Spazio Cliente OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> L'indirizzo MAC dell'interfaccia **pubblica principale** è quello che riceve le offerte DHCP, sia nel sistema operativo del server che in modalità rescue. Questa interfaccia gestisce la connettività pubblica nella configurazione predefinita.
>

Ora che sapete quali indirizzi MAC sono associati a ciascun tipo di interfaccia (pubblica/privata), è necessario recuperare i nomi delle interfacce.

### Recupero dei nomi delle interfacce

> [!primary]
>
> Se perdete la connessione di rete al vostro server, seguite i passaggi "**Apri un KVM**" di [questa guida](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Per recuperare i nomi delle interfacce, eseguite il comando seguente:

```bash
ip a
```

> [!primary]
>
> Questo comando restituirà numerose interfacce. Se avete difficoltà a determinare quali siano le interfacce fisiche, l'indirizzo IP pubblico del server è associato per impostazione predefinita alla prima interfaccia.
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

Una volta determinati i nomi delle interfacce, è possibile configurare l'aggregazione delle interfacce nel sistema operativo.

### Configurazione dell'aggregazione delle interfacce

Selezionate la scheda seguente corrispondente alla configurazione del vostro server:

- **Due interfacce**: server Advance con due schede di rete fisiche.
- **Quattro interfacce - Double LAG**: server Scale e High Grade con OLA in modalità **Active - Double LAG** (aggregati pubblico + privato). È necessario che [OLA sia attivato](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) nello Spazio Cliente OVHcloud.
- **Quattro interfacce - Fully Private**: server Scale e High Grade con OLA in modalità **Active - Fully Private** (aggregato privato singolo per il vRack). È necessario che [OLA sia attivato](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) nello Spazio Cliente OVHcloud.

> [!tabs]
> Due interfacce
>> Sostituite il contenuto di `/etc/netplan/50-cloud-init.yaml` con quanto segue:
>>
>> **IP statico**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Quattro interfacce - Double LAG
>> Questa configurazione associa le interfacce pubbliche in `bond0` (con l'IP pubblico) e le interfacce private in `bond1` (per il vRack).
>>
>> Sostituite il contenuto di `/etc/netplan/50-cloud-init.yaml` con quanto segue:
>>
>> **IP statico**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Quattro interfacce - Fully Private
>> Questa configurazione aggrega tutte le interfacce fisiche in un unico aggregato destinato esclusivamente all'utilizzo con il vRack. Non è prevista connettività IP pubblica.
>>
>> > [!warning]
>> >
>> > In seguito all'implementazione di OLA in modalità Fully Private, l'IP pubblico non è più accessibile. Assicuratevi di disporre di un mezzo di accesso alternativo (ad esempio tramite un altro server nel vRack o tramite KVM/IPMI) prima di applicare questa configurazione.
>> >
>>
>> Sostituite il contenuto di `/etc/netplan/50-cloud-init.yaml` con quanto segue:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > In modalità Fully Private, l'aggregato utilizza l'indirizzo MAC dell'interfaccia **privata principale**. Per assegnare un indirizzo IP a questo aggregato per la comunicazione vRack, aggiungete un blocco `addresses` sotto `bond0` con il vostro IP privato vRack.
>> >

### Applicazione della configurazione

> [!primary]
> Il comando `netplan try` non può essere utilizzato durante la configurazione degli aggregati.

Applicate la configurazione con il comando seguente:

```bash
sudo netplan apply
```

Potrebbero essere necessari alcuni secondi prima che le interfacce aggregate siano operative.

## Per saperne di più

[Configurazione dell'aggregazione di link OVHcloud nello Spazio Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Contatta la nostra [Community di utenti](/links/community).
