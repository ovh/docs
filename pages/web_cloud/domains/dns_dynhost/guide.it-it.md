---
title: "Impostare un DNS dinamico (DynHost/DynDNS) per il tuo dominio"
excerpt: "Questa guida ti mostra come configurare un record DNS dinamico per il tuo dominio OVHcloud"
updated: 2025-04-28
---

## Obiettivo

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio costituisce il file di configurazione di quest'ultimo. È composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, come un centro di deviazioni. 

Per maggiori informazioni, consulta le nostre guide:

- [Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

L'aggiornamento "dinamico" di un record DNS può evitare un'interruzione prolungata di uno dei tuoi servizi se non disponi di un indirizzo IP detto "fisso" (che non cambia).

Ad esempio, il **DynHost** può essere utilizzato se *auto-hosting* (nei locali della tua azienda o a casa, passando per la *box* del tuo **F**ourneur d'**A**ccesso a **I**nternet (**FAI**)) un server di videogiochi senza beneficiare di un indirizzo IP "fisso".

> [!primary]
>
> Qualsiasi record "A" o "AAAA" con un TTL (**T**ime **T**o **L**ive) di 60 secondi è considerato DynHost. Il TTL è un valore che indica il periodo di tempo durante il quale un record DNS viene memorizzato nella cache dai server DNS prima di essere aggiornato.
>

**Questa guida ti mostra come configurare un record DNS dinamico (DynHost) per il tuo dominio OVHcloud.**

## Prerequisiti

- Disporre di un dominio.
- Disporre di una zona DNS OVHcloud per il dominio in questione.
- Utilizzare i server DNS di OVHcloud per la configurazione del dominio in questione
- Il DynHost da creare non deve essere già presente nella zona DNS OVHcloud del dominio come record di tipo A o AAAA

**Se il dominio non utilizza i server DNS forniti da OVHcloud**, contatta il provider che ne gestisce la configurazione DNS per conoscere la procedura da seguire.

**Se il dominio è registrato in OVHcloud**, verifica che utilizzi la nostra configurazione. Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 3**
>>
>> Seleziona la scheda `Server DNS`{.action} una volta posizionato sul dominio interessato.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers.png){.thumbnail}
>>
> **Step 4**
>>
>> Visualizzi una tabella con tutti i server DNS configurati da OVHcloud per il tuo dominio. A ogni riga corrisponde un server DNS.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

> [!success]
>
> Per sapere se utilizzi o meno i server DNS di OVHcloud, questi ultimi hanno una delle 2 forme seguenti:
>
> - `nsXX.ovh.net` e `dnsXX.ovh.net` **o** `nsXXX.ovh.net` e `dnsXXX.ovh.net` (dove ogni `X` rappresenta una cifra compresa tra **0** e **9**)
> - `ns200.anycast.me` e `dns200.anycast.me` (se avete attivato l’opzione [DNS anycast](/links/web/domains-options))
> 
> Se necessario, consulta la guida relativa ai [server DNS](/pages/web_cloud/domains/dns_server_general_information) per maggiori informazioni.

## Procedura

### 1 - Crea un utente DynHost <a name="step1"></a>

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **6** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 3**
>>
>> Seleziona la scheda `DynHost`{.action} una volta posizionato sul dominio interessato.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Step 4**
>>
>> Clicca sul pulsante `Gestisci gli accessi`{.action} e poi su `Crea un identificativo`{.action}.
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Step 5**
>> 
>> Nella nuova finestra, inserisci le informazioni richieste:
>>
>> |Campo|Descrizione|
>> |---|---|
>> |Suffisso dell’identificativo|Inserisci un suffisso all’identificativo DynHost che stai creando.|
>> |Sottodominio|Specifica il sottodominio per cui vuoi creare il record DNS dinamico. Per gestire tutti i sottodomini con un solo identificativo, indica just `*` nel modulo di registrazione|
>> |Password|Associa una password all’identificativo DynHost e confermala.|
>>
>> > [!success]
>> >
>> > Per installare un DynHost direttamente per il tuo dominio, inserisci solo `*` nel modulo di inserimento intitolato `Sottodominio`{.action}.
>> >
>>
>> ![Create a DynHost username](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}
>>
> **Etape 6**
>>
>> Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. L’identificativo compare nella tabella della pagina corrente.
>>
>> ![DynHost tab](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}
>>

Ripeti questa operazione per ogni identificativo DynHost da aggiungere.

### 2 - Crea il record DNS dinamico (DynHost) <a name="step2"></a>

A questo punto è necessario creare il record DNS che dovrà essere aggiornato dinamicamente. Ti ricordiamo che per eseguire questa operazione il record non deve essere già presente nella zona DNS OVHcloud del dominio come record A o AAAA. Per verificarlo ed eventualmente rimuoverlo, consulta la guida [Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}.

Una volta che tutto è pronto per creare il record, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **5** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 3**
>>
>> Seleziona la scheda `DynHost`{.action} una volta posizionato sul dominio interessato.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Step 4**
>>
>> Clicca sul pulsante `Aggiungi un DynHost`{.action}.
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Step 5**
>>
>> Nella nuova finestra, inserisci le informazioni richieste:
>>
>> |Campo|Descrizione|
>> |---|---|
>> |Sottodominio|Inserisci il nome del sottodominio a cui è associato il record DNS da aggiornare dinamicamente. Questo sottodominio deve coincidere con quello inserito durante la creazione dell’utente DynHost.<br><br>**Se vuoi installare un DynHost direttamente per il tuo dominio, lascia vuoto questo modulo di inserimento**|
>> |IP di destinazione|Inserisci l'indirizzo IP (IPv4 o IPv6) che deve essere utilizzato dal record DNS. È generalmente l'indirizzo IP pubblico del tuo *box* Internet o del tuo server auto-ospitato.<br><br>In base al principio del DynHost, verrà aggiornato automaticamente in seguito.<br><br>In questo modulo deve essere inserito un solo indirizzo IP.|
>>
>> > [!warning]
>> >
>> > Per creare un record DNS dinamico (DynHost), l’utilizzo di una *wildcard* (inserendo solo il carattere `*`) nel modulo `Sottodominio`{.action} non è disponibile.
>>
>> ![Create a DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}
>>
>> Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. Il record DynHost dovrebbe comparire nella tabella della pagina corrente.

Ripeti questa operazione per ogni record DynHost che da aggiungere.

> [!primary]
>
> Se il dominio o sottodominio deve essere configurato in modo dinamico, ad esempio con un IPv4 e un IPv6, è possibile creare due record DNS dinamici per lo stesso dominio o sottodominio. Il primo record DNS dinamico sarà il record IPv4 e il secondo il record IPv6.
>

### 3 - Automatizza la modifica del DynHost

Una volta creato l'[utente](#step1) e l'[record DynHost](#step2), è necessario automatizzare l'aggiornamento del record DNS affinché sia realizzato in modo dinamico. Per effettuare questa operazione è necessario utilizzare un client/software che verificherà regolarmente se l'indirizzo IP di destinazione è cambiato per poterlo aggiornare automaticamente.

> [!warning]
>
> L'installazione e la configurazione del software/client devono essere realizzati con le proprie conoscenze. Di seguito ti forniamo alcune informazioni su come procedere. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner). OVH non sarà infatti in grado di fornirti assistenza. 
> Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

Il software/cliente può essere utilizzato in diversi modi: 

- può essere installato sul tuo server o sul tuo computer
- potrebbe essere già disponibile nell'interfaccia del tuo router/*box* Internet, se compatibile. In caso di difficoltà o dubbi, contatta il supporto del tuo **FAI** per effettuare la configurazione.

Una volta scelto e installato il client, è necessario configurarlo utilizzando le informazioni dell'utente DynHost creato precedentemente nello Spazio Cliente OVHcloud.

In base al client utilizzato, oltre agli elementi dell'utente DynHost e del sottodominio in questione può essere necessario un URL di aggiornamento. In questo caso, utilizza l'indirizzo URL qui sotto sostituendo le informazioni generiche:

```bash
https://dns.eu.ovhapis.com/nic/update?system=dyndns&hostname=$HOSTNAME&myip=$IP
```

|Campo|Sostituire con...|
|---|---|
|$HOSTNAME|Il sottodominio interessato dalla modifica|
|$IP|Il nuovo indirizzo IPv4 o IPv6 di destinazione|

Verifica che l'indirizzo IP di destinazione sia stato aggiornato correttamente. Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 3**
>>
>> Seleziona la scheda `DynHost`{.action} una volta posizionato sul dominio interessato.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Step 4**
>>
>> Nella colonna `Destinazione`{.action}, verifica l'indirizzo IP indicato.
>>
>> ![DynHost target](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}
>>

> [!warning]
>
> Le modifiche apportate nella zona DNS attiva di un dominio tramite DynDNS possono provocare un ritardo di alcuni minuti nella propagazione dell'aggiornamento.
>

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).