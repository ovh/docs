---
title: 'Configurare IPv6 su un’istanza Public Cloud'
slug: configurare-ipv6
excerpt: 'Configurare un indirizzo IPv6 su un’istanza Public Cloud'
---

**Ultimo aggiornamento: 11/07/2019**

## Obiettivo
Internet Protocol version 6 (IPv6) è la versione più recente dell’Internet Protocol (IP), sviluppato per risolvere il problema (a lungo anticipato) dell'esaurimento degli indirizzi IPv4. Infatti, mentre IPv4 utilizza indirizzi IP a 32 bit, IPv6 utilizza indirizzi a 128-bit.

Tutte le istanze Public Cloud vengono consegnate  con un indirizzo IPv4 e un indirizzo IPv6.

Di default è configurato soltanto l’IPv4 perciò, questa guida ti mostra come configurare un indirizzo IPv6 su un’istanza Public Cloud.

## Prerequisiti

* Disporre di un qualsiasi modello di istanza Public Cloud
* Possedere conoscenze di SSH
* Possedere conoscenze base di rete

## Procedura

### Lessico

Ecco una lista di termini impiegati in questa guida:

|Lessico|Descrizione|
|---|---|
|IPV6_BLOCK|Blocco IPv6 assegnato al servizio|
|YOUR_IPV6|Indirizzo IPv6 assegnato al servizio|
|IPv6_PREFIX|Il prefisso del tuo blocco IPv6 (esempio: 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPv6_GATEWAY|Gateway del blocco IPv6|


### Recupera le informazioni di rete

Accedi al tuo Spazio Cliente, seleziona il menu `Istanze`{.action} e clicca su `Dettagli dell’istanza`{.action}.

![public-cloud ipv6](images/pcipv61.png){.thumbnail}

Tutte le informazioni necessarie saranno visibili nella sezione **Reti**.

![public-cloud ipv6](images/pcipv62.png){.thumbnail}

### Esempi di configurazioni persistenti

> [!primary]**Esempi**
> 
>Le informazioni fornite qui di seguito sono a titolo di esempio.
>
>In qualità di amministratore dei tuoi servizi, spetta a te adeguarli alla tua distribuzione.
>

Per prima cosa, accedi alla tua istanza in SSH.

#### **Su Debian / Ubuntu**

Considerando che la tua interfaccia è eth0 e che ti trovi su un OS Debian, la configurazione da aggiungere dovrebbe essere questa:

File da modificare (con privilegi su): /etc/network/interfaces

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Per esempio:

```
iface eth0 inet6 static
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```
#### **Su RedHat / CentOS**

Se la tua interfaccia è eth0, la configurazione dovrebbe essere questa:

File da modificare (con provilegi sudo): /etc/sysconfig/network-scripts/ifcfg-eth0

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Per esempio:

```
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

#### **Per Windows**

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

```
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Fai un test della tua connessione tramite un ping6, ad esempio:

```
ping6 ipv6.google.com
```
Se la tua istanza risponde, significa che uno degli step della configurazione iniziale non è stato seguito accuratamente.

In ogni caso, se necessario, invia una richiesta di assistenza con gli elementi testati di cui sopra per ottenere un’analisi da parte nostra.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>