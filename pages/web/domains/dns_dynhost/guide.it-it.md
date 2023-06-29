---
title: "Impostare un DNS dinamico (DynHost/DynDNS) per il tuo dominio"
excerpt: "Questa guida ti mostra come configurare un record DNS dinamico per il tuo dominio OVHcloud"
updated: 2023-06-29
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio costituisce il file di configurazione di quest'ultimo. È composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, come un centro di deviazioni. 

Puoi, ad esempio, precisare:

- L'indirizzo IP (record DNS di tipo *A* e *AAAA*) del tuo hosting web per visualizzare il tuo sito web con il tuo dominio.
- I server di posta (record DNS di tipo *MX*) verso cui il tuo dominio deve reindirizzare le email che riceve. Per consultare i tuoi indirizzi email personalizzati con il tuo dominio.
- Informazioni relative alla sicurezza/autenticazione dei servizi associati (hosting Web, server Web, server di posta, ecc...) al tuo dominio (record DNS di tipo *SPF*, *DKIM*, *DMARC*, ecc...).

Se necessario, consulta [la nostra documentazione sui record DNS e sulla modifica di una zona DNS](/pages/web/domains/dns_zone_edit) dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

L'aggiornamento "dinamico" di un record DNS può evitare un'interruzione prolungata di uno dei tuoi servizi se non disponi di un indirizzo IP detto "fisso" (che non cambia).

Ad esempio, il **DynHost** può essere utilizzato se *auto-hosting* (nei locali della tua azienda o a casa, passando per la *box* del tuo **F**ourneur d'**A**ccesso a **I**nternet (**FAI**)) un server di videogiochi senza beneficiare di un indirizzo IP "fisso".

**Questa guida ti mostra come configurare un record DNS dinamico (DynHost) per il tuo dominio OVHcloud.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Utilizzare i server DNS di OVHcloud per la configurazione del dominio in questione
- Il DynHost da creare non deve essere già presente nella zona DNS OVHcloud del dominio come record di tipo A

> [!warning]
>
> - Se il dominio non utilizza i server DNS di OVHcloud, contatta il provider che ne gestisce la configurazione per conoscere la procedura da seguire al suo livello.
> 
> - Se il tuo dominio è registrato in OVHcloud, verifica che utilizzi la nostra configurazione. accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e cliccando sulla sezione `Web cloud`{.action}. Nella colonna di sinistra, clicca sulla scheda `Domini`{.action} e seleziona il dominio interessato. Nella nuova pagina clicca sulla scheda `Server DNS`{.action} per visualizzare i server DNS utilizzati dal tuo dominio. 
>
> Per sapere se utilizzi o meno i server DNS di OVHcloud, questi ultimi hanno la forma seguente: 
>
> - **dnsXX.ovh.net** e **nsXX.ovh.net** (dove i "**X**" sono cifre da sostituire con quelli che riguardano i server del tuo dominio) se non utilizzi l'opzione *DNS Anycast*
> - **ns200.anycast.me.** e **ns200.anycast.me** se utilizzi l'opzione *DNS Anycast*
> 
> Se necessario, consulta la guida relativa ai [server DNS](/pages/web/domains/dns_server_general_information) per maggiori informazioni.
>

## Procedura

### Step 1: crea un utente DynHost <a name="step1"></a>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona la sezione `Web cloud`{.action}. Nella colonna di sinistra, clicca sulla scheda `Domini`{.action} e seleziona il dominio interessato. Nella nuova pagina clicca sulla scheda `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Clicca sul pulsante `Gestisci gli accessi`{.action} e poi su `Crea un identificativo`{.action}. Nella nuova finestra, inserisci le informazioni richieste:

|Campo|Descrizione|
|---|---|
|Suffisso dell’identificativo|Inserisci un suffisso all’identificativo DynHost che stai creando.|
|Sottodominio|Specifica il sottodominio per cui vuoi creare il record DNS dinamico. Per gestire tutti i sottodomini con un solo identificativo, indica just `*` nel modulo di registrazione|
|Password|Associa una password all’identificativo DynHost e confermala.|

Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. L’identificativo compare nella tabella della pagina corrente. Ripeti questa operazione per ogni identificativo DynHost da aggiungere.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Step 2: crea il record DNS dinamico (DynHost) <a name="step2"></a>

A questo punto è necessario creare il record DNS che dovrà essere aggiornato dinamicamente. Ti ricordiamo che per eseguire questa operazione il record non deve essere già presente nella zona DNS OVHcloud del dominio come record A. Per verificarlo ed eventualmente rimuoverlo, consulta la guida [Modificare una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external}.

Una volta che tutto è pronto per creare il record, torna alla pagina principale della scheda `DynHost`{.action} e clicca sul pulsante `Aggiungi un DynHost`{.action}. Nella nuova finestra, inserisci le informazioni richieste:

|Campo|Descrizione|
|---|---|
|Sottodominio|Inserisci il nome del sottodominio a cui è associato il record DNS da aggiornare dinamicamente. Questo sottodominio deve coincidere con quello inserito durante la creazione dell’utente DynHost.|
|IP di destinazione|Inserisci l'indirizzo IP (solo IPv4) che deve essere utilizzato dal record DNS. È generalmente l'indirizzo IP pubblico del tuo *box* Internet o del tuo server auto-ospitato. In base al principio del DynHost, verrà aggiornato automaticamente in seguito.|

> [!primary]
>
> Per l'installazione di un DynHost è possibile utilizzare solo una **IPv4**. I **IPv6** non sono disponibili
>

![dynhost](images/use-dynhost-step3.png){.thumbnail}

Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. Il record DynHost dovrebbe comparire nella tabella della pagina corrente.  Ripeti questa operazione per ogni record DynHost che da aggiungere.

### Step 3: automatizza la modifica del DynHost

Una volta creato l'[utente](#step1) e l'[record DynHost](#step2), è necessario automatizzare l'aggiornamento del record DNS affinché sia realizzato in modo dinamico. Per effettuare questa operazione è necessario utilizzare un client/software che verificherà regolarmente se l'indirizzo IP di destinazione è cambiato per poterlo aggiornare automaticamente.

> [!warning]
>
> L'installazione e la configurazione del software/client devono essere realizzati con le proprie conoscenze. Di seguito ti forniamo alcune informazioni su come procedere. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/directory/). OVH non sarà infatti in grado di fornirti assistenza. 
> Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

Il software/cliente può essere utilizzato in diversi modi: 

- può essere installato sul tuo server o sul tuo computer
- potrebbe essere già disponibile nell'interfaccia del tuo router/*box* Internet, se compatibile. In caso di difficoltà o dubbi, contatta il supporto del tuo **FAI** per effettuare la configurazione.

Una volta scelto e installato il client, è necessario configurarlo utilizzando le informazioni dell'utente DynHost creato precedentemente nello Spazio Cliente OVHcloud.

In base al client utilizzato, oltre agli elementi dell'utente DynHost e del sottodominio in questione può essere necessario un URL di aggiornamento. In questo caso, utilizza l'indirizzo URL qui sotto sostituendo le informazioni generiche:

`https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**`

|Campo|Sostituire con...|
|---|---|
|$HOSTNAME|Il sottodominio interessato dalla modifica|
|$IP|Il nuovo indirizzo IPv4 di destinazione|

Verifica che l'indirizzo IP di destinazione sia stato aggiornato correttamente. accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e cliccando sulla sezione `Web cloud`{.action}. Nella colonna di sinistra, clicca sulla scheda `Domini`{.action} e seleziona il dominio interessato. Nella nuova pagina clicca sulla scheda `DynHost`{.action}. Nella colonna `Destinazione`{.action}, verifica l'indirizzo IP indicato.

> [!warning]
>
> Qualsiasi modifica della zona DNS attiva di un dominio può comportare un ritardo nella propagazione dell'aggiornamento di 4-24 ore.
>

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.