---
title: "Come configurare l'aggregazione di link con LACP in Debian 12 o Ubuntu 24.04"
excerpt: "Attiva l'aggregazione di link sul tuo server Debian 12 o Ubuntu 24.04 (Netplan) per aumentare la disponibilità del tuo server e migliorare l'efficienza delle tue connessioni di rete"
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

La tecnologia LACP (Link Aggregation Control Protocol) è progettata per aumentare la disponibilità del server e migliorare l'efficienza delle connessioni di rete. Puoi aggregare le schede di rete e rendere i link di rete ridondanti. In questo modo, se un link si interrompe, il traffico viene reindirizzato automaticamente verso un altro link disponibile. La larghezza di banda disponibile viene anche raddoppiata grazie all'aggregazione.

**Questa guida spiega come configurare le interfacce in aggregazione per utilizzarle in Debian 12 (*o successivo*) / Ubuntu 24.04 (configurazione Netplan).**

> [!warning]
> Sebbene le immagini di Debian 12 (e versioni successive) fornite da OVHcloud utilizzino Netplan di default, esistono due eccezioni chiave in cui viene utilizzato `ifupdown` (/etc/network/interfaces):
>
> - **Modalità rescue**: Sebbene basato su Debian 12, l'ambiente rescue utilizza lo strumento `ifupdown`.
> - **Immagini personalizzate**: Le installazioni di Debian eseguite con la propria immagine possono continuare a utilizzare `ifupdown` per la configurazione di rete.
>
> Se desideri configurare l'aggregazione di link in modalità rescue, o su un sistema operativo personalizzato che utilizza `ifupdown`, consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Prerequisiti

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Server dedicati](/links/control-panel/baremetal-dedicated-servers)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server dedicati`{.action} > Seleziona il tuo server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedura

> [!primary]
> I valori (indirizzi MAC, indirizzi IP, ecc.) che compaiono nelle configurazioni e negli esempi seguenti sono forniti come esempi. Naturalmente, è necessario sostituirli con i propri.
>

### Recupero degli indirizzi MAC

Vai alla scheda `Interfacce di rete`{.action} e prendi nota degli indirizzi MAC di ciascuna interfaccia (pubblica/privata) visualizzati nella parte inferiore del menu.

![Spazio Cliente OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Si noti che l'indirizzo MAC dell'interfaccia **pubblica principale** è quella che riceve le offerte DHCP, sia nel sistema operativo del server che in modalità rescue. Questa interfaccia gestisce la connettività pubblica nella configurazione predefinita.
>

Una volta saputo quali indirizzi MAC sono associati a ciascun tipo di interfaccia (pubblica/privata), è necessario ottenere i nomi delle interfacce.

### Recupero dei nomi delle interfacce

> [!primary]
>
> Se perdi la connessione di rete con il tuo server, segui i passaggi "**Apri KVM**" di [questa guida](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Per recuperare i nomi delle interfacce, esegui il seguente comando:

```bash
ip a
```

> [!primary]
>
> Questo comando mostrerà diverse interfacce. Se hai difficoltà a determinare quali sono le tue interfacce fisiche, la prima interfaccia avrà ancora l'indirizzo IP pubblico del server assegnato di default.
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

Una volta determinati i nomi delle interfacce, puoi configurare l'aggregazione delle interfacce nel sistema operativo.

### Configurazione dell'aggregazione delle interfacce

Seleziona la scheda seguente corrispondente alla configurazione del tuo server:

- **Due interfacce**: server Advance con due NIC fisiche.
- **Quattro interfacce - Double LAG**: server Scale e High-Grade con OLA in modalità **Active - Double LAG** (aggregati pubblico + privato). Richiede [l'attivazione di OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) nello Spazio Cliente OVHcloud.
- **Quattro interfacce - Fully Private**: server Scale e High-Grade con OLA in modalità **Active - Fully Private** (unico aggregato privato per vRack). Richiede [l'attivazione di OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) nello Spazio Cliente OVHcloud.

> [!tabs]
> Due interfacce
>> Sostituisci il contenuto di `/etc/netplan/50-cloud-init.yaml` con il seguente:
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
>>             # Indirizzo MAC dell'interfaccia pubblica principale del server
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
>>             # Indirizzo MAC dell'interfaccia pubblica principale del server
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
>> Questa configurazione raggruppa le interfacce pubbliche in `bond0` (con IP pubblico) e le interfacce private in `bond1` (per vRack).
>>
>> Sostituisci il contenuto di `/etc/netplan/50-cloud-init.yaml` con il seguente:
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
>>             # Indirizzo MAC dell'interfaccia pubblica principale del server
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
>>         # Opzionale: configurazione dell'aggregato privato
>>         bond1:
>>             # Indirizzo MAC della prima interfaccia privata
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
>>             # Indirizzo MAC dell'interfaccia pubblica principale del server
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
>>         # Opzionale: configurazione dell'aggregato privato
>>         bond1:
>>             # Indirizzo MAC della prima interfaccia privata
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
>> Questa configurazione aggrega tutte le interfacce fisiche in un unico aggregato esclusivamente per l'uso con vRack. Non è disponibile alcuna connettività IP pubblica.
>>
>> > [!warning]
>> >
>> > Dopo l'implementazione di OLA in modalità Fully Private, l'IP pubblico non è più accessibile. Assicurati di disporre di un mezzo di accesso alternativo (ad es. tramite un altro server nel vRack o tramite KVM/IPMI) prima di applicare questa configurazione.
>> >
>>
>> Sostituisci il contenuto di `/etc/netplan/50-cloud-init.yaml` con il seguente:
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
>>             # Indirizzo MAC dell'interfaccia privata principale del server
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
>> > In modalità Fully Private, l'aggregato utilizza l'indirizzo MAC dell'interfaccia **privata principale**. Per assegnare un indirizzo IP a questo aggregato per la comunicazione nel vRack, aggiungi un blocco `addresses` sotto `bond0` con il tuo IP privato vRack.
>> >

### Applicazione della configurazione

> [!primary]
> Il comando `netplan try` non può essere utilizzato durante la configurazione degli aggregati.

Applica la configurazione con il seguente comando:

```bash
sudo netplan apply
```

Potrebbero essere necessari alcuni secondi prima che le interfacce di aggregazione siano disponibili.

## Per saperne di più

[Configurare OVHcloud Link Aggregation nello Spazio Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Contatta la nostra [Community di utenti](/links/community).
