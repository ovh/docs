---
title: "Configurare un blocco IPv6 nella vRack su un server dedicato"
excerpt: "Configura un blocco di indirizzi IPv6 pubblici per la rete privata vRack OVHcloud sul tuo server dedicato."
updated: 2026-03-13
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

La rete vRack è una rete privata globale che collega diversi prodotti OVHcloud e consente la creazione di soluzioni di rete sofisticate. Oltre a facilitare le connessioni private, supporta anche il routing degli indirizzi IP pubblici.

**Questa guida si concentra sulla configurazione dei blocchi di indirizzi Additional IPv6 all'interno di una rete vRack.**

> [!primary]
>
> Il vRack supporta il routing pubblico IPv4 e IPv6 con blocchi di indirizzi Additional IP. Per le istruzioni sulla configurazione dei blocchi IPv4, consulta questa guida: [Configurare un blocco IP nel vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
>

> [!primary]
>
> Questo articolo descrive la configurazione degli indirizzi Additional IP su una rete vRack. Se stai cercando istruzioni per configurare indirizzi Additional IP con un indirizzo IP principale (sull'interfaccia di rete pubblica), consulta i seguenti articoli:
>
> - IPv4:
>     - [Configurare un indirizzo IP in alias su un server dedicato](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configurare un indirizzo IP in alias su un VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Configurare IPv6 su un server dedicato](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configurare IPv6 su un VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configurare IPv6 su un'istanza Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Introduzione

L'IPv6 rivoluziona le reti all'interno del vRack di OVHcloud, offrendo una soluzione ai limiti dell'IPv4 e funzionalità adatte a Internet moderna. Il suo deployment è una risposta diretta alla necessità di architetture Internet più estese, sicure e sofisticate. Ecco i principali vantaggi dell'integrazione di IPv6 nel vRack:

- **Flessibilità per reti avanzate**: l'IPv6 aumenta considerevolmente lo spazio di indirizzamento, fornendo la flessibilità necessaria per scalare l'infrastruttura, gestire scenari di failover e supportare soluzioni più grandi. Ciò consente alle reti di crescere e adattarsi senza i vincoli di indirizzamento dell'IPv4.

- **Routing gerarchico e segmentazione**: IPv6 consente un routing gerarchico efficiente e una segmentazione logica dell'infrastruttura. Questo migliora la gestione e la sicurezza della rete, ideale per la rivendita di macchine virtuali con subnet dedicate o per la segmentazione dell'infrastruttura di rete.

- **Bassa latenza**: la connettività IPv6 nativa end-to-end può facilitare l'implementazione di servizi sensibili alla latenza, come lo streaming multimediale, poiché molte reti di provider recenti sono costruite con IPv6 nativo. In tali reti, l'utilizzo di servizi IPv4 crea latenza (e costi) aggiuntivi.

Sfruttando l'IPv6 all'interno del vRack, gli utenti di OVHcloud possono beneficiare di un ambiente di rete più sicuro, efficiente e scalabile, pronto a soddisfare le esigenze degli usi moderni di Internet.

## Prerequisiti

- Un servizio [vRack](/links/network/vrack) attivo sul tuo account
- Un [server compatibile con vRack](/links/network/vrack) connesso alla tua rete vRack

<!-- CP-NAV-START:network-vrack -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [vRack](/links/control-panel/network-vrack)
- **Percorso di navigazione:** `Network`{.action} > `Rete privata vRack`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> Questa funzionalità potrebbe essere limitata o non disponibile sui server della [gamma **Eco**](/links/bare-metal/eco-about).
>
> Consulta la nostra [pagina di confronto dei server Eco](/links/bare-metal/eco-compare) per ulteriori informazioni.

## Procedura

### Ottenere un nuovo blocco Additional IPv6

Quando richiedi un nuovo blocco Additional IPv6, è importante notare che l'allocazione è regionale. Ciò significa che il blocco IPv6 che ricevi sarà legato a una regione specifica, definendo il punto di ingresso del traffico pubblico nella tua rete vRack (ovvero la posizione del gateway).

/// details | Richiedere un nuovo blocco Additional IPv6

Puoi ordinare il tuo nuovo blocco IPv6 aggiuntivo [qui](https://www.ovh.com/manager/#/dedicated/ip/agoraOrder/ipv6?catalogName=ip).

![pagina di configurazione](images/500.png){.thumbnail}

Successivamente, segui le istruzioni passo dopo passo.

Il tuo Additional IPv6 sarà quindi disponibile nella pagina di configurazione del tuo vRack.

///

### Configurare l'IPv6 in un vRack (modalità semplice)

In questa sezione presentiamo la configurazione IPv6 di base per i tuoi host connessi al vRack.

![Configurare un IPv6 in un vRack](images/20240418-03.png){.thumbnail}

L'esempio precedente mostra due host con le relative interfacce lato vRack configurate con indirizzi IPv6 pubblici. Un host ha una configurazione manuale, mentre l'altro ha un indirizzo IP assegnato automaticamente tramite SLAAC. Tutti gli indirizzi IP appartengono alla prima subnet /64 di un dato blocco /56 di Additional IPv6 pubbliche. Entrambi utilizzano l'interfaccia vRack per la connettività IPv6 pubblica.

Il gateway predefinito per la prima subnet /64 (quella in bridge) è il primo indirizzo del blocco /56. In questo esempio, il gateway è `2001:41d0:abcd:ef00::1`. Questo viene distribuito tramite SLAAC, ma deve essere configurato manualmente (come route predefinita) se SLAAC è disabilitato (vedi la sezione **Configurazione IP statica** di seguito).

/// details | Tramite lo Spazio Cliente OVHcloud

![gestione vRack](images/700.png){.thumbnail}

Sul lato sinistro sono elencate le opzioni disponibili (servizi idonei alla configurazione).

Sul lato destro puoi vedere cosa è già configurato nel tuo vRack.

Seleziona il tuo nuovo Additional IPv6 e aggiungilo al tuo vRack.

![selezione vRack](images/701.png){.thumbnail}

Il tuo nuovo Additional IPv6 è stato aggiunto al tuo vRack.

### Configurazione IP statica

Una volta che il blocco Additional IPv6 /56 è assegnato a una rete vRack, la prima subnet /64 viene messa in bridge con esso.

Ciò significa che puoi facilmente utilizzare tali IP sui tuoi host con una configurazione IP statica sulle interfacce vRack (vedi la sezione successiva per un esempio di configurazione lato host).

### Configurazione IP automatica (SLAAC)

Per semplificare l'indirizzamento IP all'interno della tua rete, puoi utilizzare SLAAC. Può essere abilitato solo per subnet in bridge e può essere attivato per la prima subnet /64 del tuo blocco (sempre in bridge) in qualsiasi momento tramite questo pulsante cursore:

![abilitazione SLAAC](images/702.png){.thumbnail}

Non dimenticare di configurare SLAAC sulla tua macchina host.

///


/// details | Tramite l'APIv6 (metodo alternativo)

Quando richiedi un IPv6 aggiuntivo, viene automaticamente assegnato al tuo vRack.

Se hai rimosso questo nuovo Additional IPv6 dal tuo vRack, puoi riassegnarlo utilizzando il seguente metodo POST:

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ipv6
>

Come nell'esempio seguente:

![api post add block](images/post-ipv6.png){.thumbnail}

Usa la seguente chiamata per verificare che l'IPv6 sia stato assegnato:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}
>

Come nell'esempio seguente:

![GET ipv6 call](images/20240418-04.png){.thumbnail}

Ora vediamo il nostro blocco configurato con un vRack. Il passo successivo è configurare l'host o gli host virtuali.

### Configurazione IP statica

Una volta che il blocco Additional IPv6 /56 è assegnato a una rete vRack, la prima subnet /64 viene messa in bridge con esso. Ciò significa che puoi facilmente utilizzare tali IP sui tuoi host.

Verifichiamo quali subnet sono in bridge:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange
>

Come nell'esempio seguente:

![GET subrange bridged into your vRack](images/20240418-05.png){.thumbnail}

Per ottenere maggiori dettagli, usa la seguente chiamata:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Come nell'esempio seguente:

![GET subrange bridged into your vRack](images/20240418-06.png){.thumbnail}

Nota che la configurazione IP automatica (SLAAC) è disabilitata per impostazione predefinita.

### Configurazione IP automatica (SLAAC)

Per semplificare l'indirizzamento IP all'interno della tua rete, puoi utilizzare SLAAC. Può essere abilitato solo per subnet in bridge e può essere attivato con il seguente metodo PUT:

> [!api]
>
> @api {v1} /vrack PUT /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Come nell'esempio seguente:

![API call POST enable SLAAC](images/20240418-07.png){.thumbnail}

Non dimenticare di configurare SLAAC sulla tua macchina host.

///

### Gestire la larghezza di banda degli IP pubblici sul vRack

Per impostazione predefinita, i blocchi di Additional IP instradati tramite un vRack beneficiano di una larghezza di banda pubblica standard di 5 Gbps in Europa e America del Nord, o di 100 Mbps nelle regioni APAC. Per maggiori dettagli sulle opzioni disponibili, consulta le opzioni di routing pubblico sulla nostra [pagina del prodotto vRack](/links/network/vrack).

Per rispondere all'aumento del carico delle infrastrutture e alle esigenze dei servizi ad alto traffico, OVHcloud propone opzioni di larghezza di banda a pagamento. Nota che queste opzioni si applicano **per vRack e per regione**. Poiché gli Additional IP sono legati a una regione specifica, qualsiasi modifica della larghezza di banda avrà impatto su tutti gli indirizzi (IPv4 e IPv6) instradati verso quel vRack nella regione interessata.

/// details | Al momento dell'ordine di un Additional IP

#### Scegliere la larghezza di banda pubblica durante l'ordine

Puoi modificare la larghezza di banda predefinita al momento di ordinare un nuovo blocco di Additional IP, a condizione che una rete vRack sia selezionata come servizio backend.

Per ordinare un nuovo blocco di Additional IPv6:

- Accedi allo [Spazio Cliente OVHcloud](/links/manager).
- Nella barra laterale sinistra, accedi alla sezione `Network`{.action}.
- Seleziona `Indirizzi IP Pubblici`{.action}.
- Clicca sul pulsante `Ordina degli IP`{.action} in cima alla pagina.
- Scegli la versione IP, quindi il vRack a cui associare l'Additional IP.
- Seleziona la regione del tuo Additional IP.
- Scegli la larghezza di banda pubblica da applicare al tuo vRack per quella regione.
- Configura le altre opzioni in base alle tue esigenze, quindi finalizza l'ordine.

///

/// details | Dalla pagina di gestione del vRack

#### Modificare la larghezza di banda pubblica dalla pagina di gestione

Per i blocchi di Additional IP già associati a un vRack, la larghezza di banda viene gestita direttamente dalla pagina di configurazione del servizio.

Per accedere all'interfaccia di gestione:

- Nella barra laterale sinistra dello Spazio Cliente, apri `Network`{.action}.
- Seleziona `Rete privata vRack`{.action}.
- Nella colonna "IP pubblico e larghezza di banda", clicca sul pulsante `Gestisci`{.action} corrispondente al vRack desiderato.

L'interfaccia di gestione è suddivisa in due schede:

- **Tutti i servizi associati**: Al momento reindirizza alla pagina di gestione classica del vRack. Prossimamente, questa scheda elencherà in modo ottimizzato tutti i prodotti (server, progetti Cloud, ecc.) collegati al vRack.
- **Connettività IP pubblica**: Consente di gestire le opzioni di routing pubblico del tuo vRack, inclusa la larghezza di banda.

Per modificare la larghezza di banda:

- Vai alla scheda `Connettività IP pubblica`{.action}.
- L'interfaccia mostra finestre di gestione per regione (es.: `eu-west-par`) associate al vRack, con l'elenco degli IP associati.
- Nel riquadro della regione interessata, clicca su `Modifica la larghezza di banda`{.action}.
- Seleziona l'opzione desiderata nel pannello a destra, quindi clicca su `Ordina`{.action} per confermare.
- Una volta effettuato il pagamento, la nuova larghezza di banda sarà attiva sul tuo vRack nella regione scelta dopo alcuni minuti.

> [!primary]
>
> Il primo mese sottoscritto viene fatturato in proporzione ai giorni rimanenti. La tariffa completa si applicherà nel ciclo di fatturazione successivo.
>

L'aumento della larghezza di banda si applicherà a tutti gli indirizzi IP di quella regione per il vRack selezionato.

///

#### Comandi sull'host

/// details | Configurazione IP statica

In una configurazione di base, potresti voler configurare un indirizzo IP e il routing manualmente. Questo è anche il metodo consigliato quando la tua macchina è configurata come router (vedi la sezione [configurare la subnet instradata](#routedmode)) e la modalità ipv6.forwarding è abilitata.

Prima di tutto, aggiungiamo un indirizzo IP sull'interfaccia vRack (nel nostro esempio "eth1"):

```bash
$ sudo ip address add 2001:41d0:abcd:ef00::2/64 dev eth1
```

(Nota che il primo indirizzo IP di un blocco, in questo caso `2001:41d0:abcd:ef00::1/64`, è l'indirizzo del gateway e non deve essere utilizzato per l'indirizzamento degli host).

Se desideri utilizzare l'interfaccia vRack come interfaccia principale per il traffico IPv6, la route predefinita può essere configurata nel seguente modo:

```bash
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1/64 dev eth1
```

Infine, avvia l'interfaccia (e verifica l'IP configurato su di essa):

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00::2/64 scope global static
```

///

/// details | Configurazione IP automatica (SLAAC)

Per utilizzare la configurazione automatica, assicurati di aver configurato la tua interfaccia come segue:

Prima di tutto, permettiamo al nostro host di accettare gli annunci del router (per la configurazione automatica) sull'interfaccia vRack (nel nostro esempio "eth1"):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=1
```

È importante notare che questa configurazione non funzionerà se la modalità ipv6.forwarding è abilitata nel tuo sistema. In tal caso, fai riferimento alla [Configurazione IP automatica per una subnet instradata](#host-side) per maggiori dettagli.


Quindi, avvia l'interfaccia:

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 scope global dynamic mngtmpaddr
       valid_lft 2322122sec preferred_lft 334922sec
```

Dopo un breve periodo (il tempo di propagazione della configurazione), un indirizzo IPv6 specifico (con i flag *global* e *dynamic*) dovrebbe apparire sull'interfaccia.

///

#### Verifica dell'installazione

/// details | Locale

Il test più semplice è eseguire un ping verso un indirizzo IP locale da un host:

```bash
debian@host:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.043 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.034 ms
```

///

/// details | Remoto

Successivamente, verifichiamo la connettività da un indirizzo remoto:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=55 time=7.23 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=55 time=6.90 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=3 ttl=55 time=6.92 ms
```

///

### Configurare un IPv6 in un vRack per la modalità instradata <a name="routedmode"></a>

In questa sezione presentiamo una configurazione IPv6 più avanzata, in cui i tuoi host connessi al vRack agiscono come router per le macchine virtuali ospitate. Tali VM dispongono di subnet delegate dal blocco IPv6 principale (rappresentate in arancione nello schema seguente).

![Configurare un IPv6 in un vRack per la modalità instradata](images/routed-mode-20240513.png){.thumbnail}

Il percorso del traffico è il seguente: il traffico in entrata verso una determinata VM (con la subnet specificata) viene instradato attraverso il vRack del cliente, prima verso un host specifico (con un indirizzo next-hop), poi tramite un collegamento locale (o vSwitch - collegamento nero fd00::/64 nel diagramma) verso la VM specifica.
Il traffico proveniente da tale VM deve utilizzare la route predefinita attraverso la prima parte del collegamento locale (quello nero, fd00::1), poi la route (eventualmente predefinita) dall'host al suo gateway.

Per la definizione di una subnet instradata, si può utilizzare qualsiasi dimensione di prefisso tra /57 e /64.

Il gateway predefinito dell'host è il primo indirizzo del blocco /56, che in questo esempio è: `2001:41d0:abcd:ef00::1`. I gateway predefiniti utilizzati dalle VM sono gli indirizzi configurati dell'host (qui fd00::1).

#### Definire una subnet instradata

/// details | Spazio Cliente OVHcloud

Dopo aver aggiunto l'Additional IP al tuo vRack, puoi gestire la subnet instradata cliccando sul pulsante `Aggiungere una sottorete`{.action}.

![selezione vRack](images/600.png){.thumbnail}

Per creare una subnet instradata, dobbiamo prima definire:

- **subnet in notazione CIDR** (dimensione compresa tra /57 e /64)
- **indirizzo next-hop** (indirizzo IPv6 dell'host)

Nota che una determinata subnet non può sovrapporsi a un'altra subnet definita e che l'indirizzo next-hop deve appartenere alla prima parte (subnet /64 in bridge) del tuo prefisso Additional IPv6.

![continua](images/800.png){.thumbnail}

La subnet instradata `2001:41d0:abcd::ef10::/60` è raggiungibile tramite il next hop `2001:41d0:abcd::ef00::2`.

![continua](images/801.png){.thumbnail}

///

/// details | Comandi APIv6

Per creare una subnet instradata, dobbiamo prima definire:

- **subnet in notazione CIDR** (dimensione compresa tra /57 e /64)
- **indirizzo next-hop** (quindi l'indirizzo IPv6 dell'host)

Nota che una determinata subnet non può sovrapporsi a un'altra subnet definita e che l'indirizzo next-hop deve appartenere alla prima parte (subnet /64 in bridge) del tuo prefisso Additional IPv6.

L'esempio seguente mostra come definire tale subnet:

![continua](images/20240418-02.png){.thumbnail}

Qui abbiamo definito la subnet instradata `2001:41d0:abcd:ef10::/60`, che verrà delegata alla VM ospitata all'indirizzo `2001:41d0:abcd:ef00::2`.

///

#### Configurazione dell'host <a name="host-side"></a>

/// details | Configurazione IP statica di un host (consigliata)

Quando ospiti VM, ti consigliamo vivamente di utilizzare una configurazione statica sul tuo host.

Configura un indirizzo IPv6, avvia l'interfaccia e (facoltativamente) aggiungi la route predefinita sull'interfaccia vRack:

```bash
$ sudo ip addr add 2001:41d0:abcd:ef00::2/64 dev eth1
$ sudo ip link set dev eth1 up
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1 dev eth1
```

///

/// details | Configurazione IP automatica (SLAAC) per un host

In alcuni casi, potresti voler configurare le tue interfacce con SLAAC e l'inoltro IP insieme.

Nota che questo comporta rischi aggiuntivi (come la perdita di accesso non solo all'host ma anche a tutte le VM) e non è consigliato.

Verifica che l'inoltro IPv6 sia abilitato:

```bash
$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
```

Configurazione degli annunci del router per essere accettati (sull'interfaccia vRack eth1 nel nostro esempio):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=2
```

///

/// details | Configurazione della subnet instradata su un host e all'interno di una macchina virtuale

Per garantire che il nostro host sappia come gestire i pacchetti indirizzati alla nuova subnet instradata (che sarà su una VM), dobbiamo aggiungere una route specifica per essa.

Nel nostro esempio, si tratta del collegamento vEth con l'indirizzo fd00::2/64, all'interno di una VM che utilizzeremo per l'instradamento.

Nota che questo è molto specifico per l'hypervisor installato (può trattarsi di vSwitch o interfacce vEth). Fai riferimento alla guida di configurazione di rete specifica dell'hypervisor per questa configurazione.

```bash
$ sudo ip -6 route add 2001:41d0:abcd:ef10::/60 via fd00::2
```

///


/// details | Configurazione di una subnet instradata all'interno di una VM

Ancora una volta, nota che il collegamento utilizzato tra l'host e le VM è molto specifico per l'hypervisor installato (può trattarsi di vSwitch o interfacce vEth). Fai riferimento alle guide di configurazione di rete del tuo hypervisor per questa configurazione.

Aggiungi il blocco IP instradato all'interno di una VM per garantire che possa accettare pacchetti:

```bash
debian@vm-1:~$ sudo ip address add 2001:41d0:abcd:ef10::1/60 dev lo
```

Aggiungi la route predefinita su una VM per garantire che il traffico possa uscire da essa:

```bash
debian@vm-1:~$ sudo ip -6 route add default via fd00::1
```

///


#### Verifica della configurazione

/// details | Locale, su un host

Esegui un ping dall'host al container (usando il collegamento locale):

```bash
debian@host:~$ ping fd00::2
PING fd00::2(fd00::2) 56 data bytes
64 bytes from fd00::2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from fd00::2: icmp_seq=2 ttl=64 time=0.071 ms
```

Esegui un ping dall'host al container (usando la subnet instradata):

```bash
debian@host:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=64 time=0.073 ms
```

Verifica la route verso la nostra subnet /60 su un host:

```bash
debian@host:~$ ip -6 route get 2001:41d0:abcd:ef10::1
2001:41d0:abcd:ef10::1 from :: via fd00::2 dev veth1a src fd00::1 metric 1024 pref medium
```

///

/// details | Locale, su una VM

Prima di tutto, verifica la tabella di routing:

```bash
debian@vm-1:~$ ip -6 route show
2001:41d0:abcd:ef10::/60 dev lo proto kernel metric 256 pref medium
fd00::/64 dev veth1b proto kernel metric 256 pref medium
default via fd00::1 dev veth1b src 2001:41d0:abcd:ef10::1 metric 1024 pref medium
```

Esegui un ping verso l'interfaccia di collegamento locale dell'host:

```bash
debian@vm-1:~$ ping fd00::1
PING fd00::1(fd00::1) 56 data bytes
64 bytes from fd00::1: icmp_seq=1 ttl=64 time=0.051 ms
64 bytes from fd00::1: icmp_seq=2 ttl=64 time=0.070 ms
```

Esegui un ping verso l'interfaccia globale dell'host:

```bash
debian@vm-1:~$ ping 2001:41d0:abcd:ef00::2
PING 2001:41d0:abcd:ef00::2(2001:41d0:abcd:ef00::2) 56 data bytes
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=1 ttl=64 time=0.050 ms
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=2 ttl=64 time=0.080 ms
```

Infine, esegui un ping verso un indirizzo IPv6 esterno da una VM:

```bash
debian@vm-1:~$ ping 2001:41d0:242:d300::
PING 2001:41d0:242:d300::(2001:41d0:242:d300::) 56 data bytes
64 bytes from 2001:41d0:242:d300::: icmp_seq=1 ttl=57 time=0.388 ms
64 bytes from 2001:41d0:242:d300::: icmp_seq=2 ttl=57 time=0.417 ms
```

Oppure, utilizzando un nome di dominio:

```bash
debian@vm-1:~$ ping -6 proof.ovh.net
PING proof.ovh.net(2001:41d0:242:d300:: (2001:41d0:242:d300::)) 56 data bytes
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=1 ttl=57 time=0.411 ms
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=2 ttl=57 time=0.415 ms
```

///

/// details | Da un host remoto

Verifichiamo la connettività alla nostra VM dall'esterno della rete OVHcloud:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=55 time=5.84 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=55 time=2.98 ms
```

E un traceroute da un host remoto (su Internet):

```bash
ubuntu@remote-test:~$ mtr -rc1 2001:41d0:abcd:ef10::1
Start: 2024-03-26T09:26:45+0000
HOST: remote-test                  				Loss%   Snt   Last   Avg  Best  Wrst StDev
...
...
  9.|-- 2001:41d0:abcd::2:5d        				0.0%     1    1.9   1.9   1.9   1.9   0.0
 10.|-- 2001:41d0:abcd:ef00::2      				0.0%     1    2.2   2.2   2.2   2.2   0.0
 11.|-- 2001:41d0:abcd:ef10::1      				0.0%     1    2.2   2.2   2.2   2.2   0.0
```

In questo esempio:

- hop 10 - Indirizzo IP dell'host
- hop 11 - Indirizzo IP della VM

///

## Ubicazioni multi-regione vs. vRack globale

La tecnologia vRack di OVHcloud consente alle aziende di connettere server in diverse ubicazioni come se fossero situati nello stesso datacenter.
D'altra parte, i servizi come Additional IPv6 sono regionali, il che significa che il loro funzionamento è legato a una particolare ubicazione.

Di seguito viene presentata un'architettura a scopo didattico con due regioni diverse e blocchi Additional IPv6 diversi annunciati da ciascuna di esse. Inoltre, è presentato un host configurato con indirizzi IP di entrambe le reti e un esempio di route non ottimale: un host in una regione con un indirizzo IPv6 annunciato in un'altra regione:

![image](images/20240418-08.png){.thumbnail}

Nota che in tali configurazioni (con Additional IPv6 provenienti da più di una regione), il SLAAC **deve essere disabilitato sull'intero vRack** (poiché ciò potrebbe portare a risultati imprevedibili e perdita di connettività casuale).

### Vantaggi

- **Connettività migliorata:** Sfruttando una rete vRack insieme a blocchi IP pubblici instradati in più ubicazioni, le aziende possono garantire una comunicazione fluida in tutto il mondo, indipendentemente dalle ubicazioni fisiche dei server backend.
- **Migrazione al cloud:** La tecnologia vRack può essere un grande facilitatore dei primi passi verso una strategia organizzativa di "migrazione al cloud", sbloccando alcune applicazioni legacy che richiedono ancora la comunicazione di rete locale.

### Rischi e considerazioni

- **Nessun supporto SLAAC nelle configurazioni con più ubicazioni:** Quando è coinvolta più di una ubicazione nell'instradamento del traffico IP pubblico (IPv4 e IPv6) nello stesso vRack, la configurazione automatica degli indirizzi senza stato (SLAAC) **non deve essere utilizzata**. Come esempio di tale situazione, consideriamo host esistenti che utilizzano indirizzi IPv4. Tali host vengono riconfigurati automaticamente da SLAAC con un gateway IPv6 configurato da un'altra regione. Insieme alla prioritizzazione di IPv6 rispetto a IPv4 da parte di alcuni sistemi operativi, questa situazione può portare a un routing non ottimale o addirittura alla perdita totale di connettività per tali host.

## Limitazioni note

Comprendere i vincoli legati all'utilizzo di **Additional IPv6** nell'ambiente **vRack** è essenziale per una pianificazione efficace della rete. Ecco le principali limitazioni da considerare:

- **Additional IPv6 è disponibile solo con vRack**: Nota che gli indirizzi Additional IPv6 possono essere configurati solo con backend connessi al vRack.
- **Limitazioni SLAAC nelle configurazioni con più ubicazioni**: La configurazione automatica degli indirizzi senza stato (SLAAC) non è supportata quando c'è traffico IP pubblico (IPv6 e IPv4) instradato nel vRack in più regioni.
- **Fino a 128 host all'interno della subnet in bridge**: Puoi utilizzare fino a 128 indirizzi IP direttamente sul vRack.
- **Fino a 128 route next-hop**: Puoi utilizzare fino a 128 route per subnet instradate all'interno di un vRack.
- **Limite della larghezza di banda pubblica**: Il traffico in uscita da OVHcloud verso Internet è limitato a 5 Gbps per regione.
- **Limiti di allocazione dei blocchi IPv6**: Un singolo blocco Additional IPv6 per vRack in una regione. Massimo 3 blocchi (/56) per ubicazione di regione.
- **Mobilità dei blocchi Additional IPv6**: A causa del design gerarchico dello spazio di indirizzamento IPv6, i blocchi Additional IPv6 sono specifici per ogni regione. Ciò significa che i blocchi non possono essere trasferiti tra regioni, anche se possono essere riassegnati a qualsiasi backend connesso al vRack.
- **Nessun supporto diretto VLAN 802.1Q nel vRack tramite Additional IPv6**: La configurazione può essere effettuata solo con la VLAN nativa della tua rete vRack. Per l'inoltro di pacchetti all'interno di una VLAN specifica (in un vRack), sarà necessario un host dedicato lato cliente.
- **Al momento, l'instradamento di Additional IPv6 nel vRack non è supportato nelle regioni APAC.**

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).
