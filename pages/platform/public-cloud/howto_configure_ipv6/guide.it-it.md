---
title: 'Configurare IPv6 su un’istanza Public Cloud'
slug: configurare-ipv6
excerpt: 'Configurare un indirizzo IPv6 su un’istanza Public Cloud'
section: Rete
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22/07/2022**

## Obiettivo

Internet Protocol version 6 (IPv6) è la versione più recente dell’Internet Protocol (IP), sviluppato per risolvere il problema (a lungo anticipato) dell'esaurimento degli indirizzi IPv4. Infatti, mentre IPv4 utilizza indirizzi IP a 32 bit, IPv6 utilizza indirizzi a 128-bit.

Tutte le istanze Public Cloud vengono consegnate  con un indirizzo IPv4 e un indirizzo IPv6.

Di default è configurato soltanto l’IPv4 perciò.

**Questa guida ti mostra come configurare un indirizzo IPv6 su un’istanza Public Cloud.**

> [!warning]
>
> Si noti che nelle versioni recenti dei sistemi operativi Linux, l'indirizzo IPv6 è configurato di default sulle istanze Public Cloud. Assicurarsi di verificare il file di configurazione del sistema operativo prima di apportare qualsiasi modifica.
>

## Prerequisiti

* Disporre di un qualsiasi modello di istanza Public Cloud
* *Avere accesso amministrativo (root) via SSH o desktop remoto (Windows) al server
* Possedere conoscenze base di rete
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Lessico

Ecco una lista di termini impiegati in questa guida:

|Lessico|Descrizione|
|---|---|
|YOUR_IPV6|Indirizzo IPv6 assegnato al servizio|
|IPv6_PREFIX|Il prefisso del tuo blocco IPv6 (esempio: 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPv6_GATEWAY|Gateway del blocco IPv6|


### Recupera le informazioni di rete

Accedi al tuo Spazio Cliente, vai alla sezione `Public Cloud`{.action}, seleziona il tuo progetto Public Cloud e clicca su `Instances`{.action} nella barra di navigazione a sinistra. Poi clicca su `...`{.action} accanto all'istanza corrispondente e clicca su `Dettagli dell’istanza`{.action}.

![public-cloud ipv6](images/pci2022.png){.thumbnail}

Tutte le informazioni necessarie saranno visibili nella sezione **Reti**.

![public-cloud ipv6](images/pci2022.1.png){.thumbnail}

### Esempi di configurazioni persistenti

> [!primary]
> **Esempi**
> 
>Le informazioni fornite qui di seguito sono a titolo di esempio.
>
>In qualità di amministratore dei tuoi servizi, spetta a te adeguarli alla tua distribuzione.
>

> [!warning]
>
> Prima di modificare un file di configurazione, crea sempre un backup dell'originale in caso di problemi.
>

<br>Per prima cosa, accedi alla tua istanza in SSH.

#### Su Debian

Considerando che la tua interfaccia è eth0, la configurazione da aggiungere dovrebbe essere questa:

File da modificare (con privilegi su): `/etc/network/interfaces`

```console
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Per esempio:

```console
iface eth0 inet6 static
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```

#### Su Ubuntu

I file di configurazione di rete si trovano nella directory `/etc/netplan/`. Per prima cosa, crea una copia del file di configurazione IPv6:

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

In questo modo è possibile separare la configurazione IPv6 e annullare facilmente le modifiche in caso di errore.

Considerando che la tua interfaccia è eth0, la configurazione da aggiungere dovrebbe essere questa:

File da modificare (con privilegi su): `/etc/netplan/51-cloud-init-ipv6.yaml`

```yaml
network:
    ethernets:
        eth0:
            dhcp6: false
            match:
                macaddress: fb:17:3r:39:56:75
            set-name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
            routes:
              - to: "IPv6_GATEWAY"
                scope: link
    version: 2
```

> [!warning]
>
> È importante rispettare l'allineamento di ciascun elemento del file, come indicato nell'esempio di cui sopra. Non utilizzare il tasto di tabulazione per creare la tua spaziatura. E' necessario solo il tasto spazio.
>

Per testare la tua configurazione utilizza questo comando:

```bash
netplan try
```

Se è corretta, applicala utilizzando il seguente comando:

```bash
netplan apply
```

#### Su RedHat / CentOS

Se la tua interfaccia è eth0, la configurazione dovrebbe essere questa:

File da modificare (con provilegi sudo): `/etc/sysconfig/network-scripts/ifcfg-eth0`

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Per esempio:

```console
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

#### Per Windows

Vai alla sezione `Connessione di rete`{.action} di Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

Quindi vai alla scheda di rete e clicca con il tasto destro su `Proprietà`{.action}.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Clicca su `IPv6`{.action} e poi su `Proprietà`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Inserisci le informazioni del tuo IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

## Diagnostica

Hai configurato il tuo IPv6 ma non funziona? 

Esiste una semplice operazione per stabilire se l’errore si trova nella configurazione effettuata oppure sulla rete di OVHcloud.

In un primo momento [riavvia la tua istanza in modalità di ripristino Rescue-pro](https://docs.ovh.com/it/public-cloud/riavvia_la_tua_istanza_in_modalita_di_ripristino_rescue_mode/).

Prendi spunto dai comandi mostrati qui di seguito per configurare il tuo IP in maniera non-persistente:

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Fai un test della tua connessione tramite un ping6, ad esempio:

```bash
ping6 ipv6.google.com
```
Se la tua istanza risponde, significa che uno degli step della configurazione iniziale non è stato seguito accuratamente.

In ogni caso, se necessario, invia una richiesta di assistenza con gli elementi testati di cui sopra per ottenere un’analisi da parte nostra.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>