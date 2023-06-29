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

Il primo step consiste nel creare un utente Dynhost: questa operazione permetterà infatti di effettuare l’aggiornamento del record DNS dinamico. Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Domini`{.action}. e clicca sulla scheda `DynHost`{.action}.

Clicca sul pulsante `Gestisci gli accessi`{.action} e poi su `Crea un identificativo`{.action}. Nella nuova finestra, inserisci le informazioni richieste:

|Campo|Descrizione|
|---|---|
|Suffisso dell’identificativo|Inserisci un suffisso all’identificativo DynHost che stai creando.|
|Sottodominio|Specifica il sottodominio per il quale si vuole creare il record DNS dinamico.|
|Password|Associa una password all’identificativo DynHost e confermala.|

Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. L’identificativo compare nella tabella della pagina corrente. Ripeti questa operazione per ogni identificativo DynHost da aggiungere.

### Step 2: crea il record DNS dinamico (DynHost)

A questo punto è necessario creare il record DNS che dovrà essere aggiornato dinamicamente. Ti ricordiamo che per eseguire questa operazione il record non deve essere già presente nella zona DNS OVHcloud del dominio come record A. Per verificarlo ed eventualmente rimuoverlo, consulta la guida [Modificare una zona DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external}.

Una volta che tutto è pronto per creare il record, torna alla pagina principale della scheda `DynHost`{.action} e clicca sul pulsante `Aggiungi un DynHost`{.action}. Nella nuova finestra, inserisci le informazioni richieste:

|Campo|Descrizione|
|---|---|
|Sottodominio|Inserisci il nome del sottodominio a cui è associato il record DNS da aggiornare dinamicamente. Questo sottodominio deve coincidere con quello inserito durante la creazione dell’utente DynHost.|
|IP di destinazione|Inserisci l’indirizzo IP che deve essere utilizzato dal record DNS. Secondo il funzionamento del DynHost, l’IP verrà aggiornato in un secondo momento.|

Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. Il record DynHost dovrebbe comparire nella tabella della pagina corrente.  Ripeti questa operazione per ogni record DynHost che da aggiungere.

### Step 3: automatizza la modifica del DynHost

A questo punto non resta che rendere automatico l’aggiornamento del record DNS, in modo che possa essere eseguito dinamicamente. Per effettuare questa operazione è necessario utilizzare un client che verificherà regolarmente se l’indirizzo IP di destinazione è cambiato e ne eseguirà l’aggiornamento.

> [!warning]
>
> OVHcloud non si occupa dell’installazione e configurazione del client, che quindi di responsabilità dell’utente. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore. OVHcloud non potrà fornirti alcuna assistenza. 
>

La scelta dei tool disponibili è molto ampia: il client può infatti essere installato sul proprio server o computer oppure essere già disponibile nell’interfaccia del proprio router, se compatibile. Una volta scelto e installato lo strumento da utilizzare, configuralo utilizzando le informazioni dell’utente DynHost creato precedentemente.

In base al client utilizzato è possibile che, oltre ai dati relativi all’utente DynHost e al sottodominio in questione, venga richiesto un URL di aggiornamento. In questo caso utilizza l’indirizzo fornito qui sotto sostituendo le informazioni generiche:

> https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Campo|Sostituire con...|
|---|---|
|$HOSTNAME|Il sottodominio interessato dalla modifica|
|$IP|Il nuovo indirizzo IP di destinazione|

Per assicurarti che l’indirizzo IP di destinazione sia stato aggiornato correttamente, accedi allo Spazio Cliente OVHcloud: l’informazione è disponibile nella scheda `DynHost`{.action}, nella colonna `Destinazione`{.action}.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.