---
title: 'Configurare un DNS dinamico per un dominio'
slug: hosting_condiviso_dynhost
excerpt: 'Come impostare un record DNS dinamico (DynHost) sul tuo dominio OVH'
section: 'DNS e zona DNS'
order: 6
---

**Ultimo aggiornamento: 08/03/2019**

## Obiettivo

La zona Domain Name System (DNS) contiene la configurazione di un dominio ed è composta da informazioni tecniche chiamate <i>record</i>. Per diversi motivi, ad esempio nel caso si ospiti un server di gioco su una rete domestica che non usufruisce di indirizzi IP statici, aggiornare in modo dinamico un record DNS potrebbe rivelarsi fondamentale per evitare lunghe interruzioni di servizio. 

**Questa guida ti mostra la procedura da seguire per impostare un record DNS dinamico (DynHost) per il tuo dominio OVH.**

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
- Utilizzare i server DNS di OVH per la configurazione del dominio in questione
- Il DynHost da creare non deve essere già presente nella zona DNS OVH del dominio come record di tipo A

> \[!warning]
>
> - Se il dominio non utilizza i server DNS di OVH, è necessario rivolgersi al provider che ne gestisce la configurazione per conoscere la procedura da seguire.
> 
> - Se il dominio è registrato in OVH, verifica che utilizzi la nostra configurazione accedendo allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} > `Server DNS`{.action} e selezionando il dominio interessato.
>

## Procedura

### Step 1: crea un utente DynHost

Il primo step consiste nel creare un utente Dynhost: questa operazione permetterà infatti di effettuare l’aggiornamento del record DNS dinamico. Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Domini`{.action} della colonna a sinistra. e clicca sulla scheda `DynHost`{.action}.

![dynhost![

Clicca sul pulsante `Gestisci gli accessi`{.action} e poi su `Crea un identificativo`{.action}. Nella nuova finestra, inserisci le informazioni richieste:

|Campo|Descrizione|
|---|---|
|Suffisso dell’identificativo|Inserisci un suffisso all’identificativo DynHost che stai creando.|
|Sottodominio|Specifica il sottodominio per il quale si vuole creare il record DNS dinamico.|
|Password|Associa una password all’identificativo DynHost e confermala.|

Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. L’identificativo compare nella tabella della pagina corrente. Ripeti questa operazione per ogni identificativo DynHost da aggiungere.

![dynhost![

### Step 2: crea il record DNS dinamico (DynHost)

A questo punto è necessario creare il record DNS che dovrà essere aggiornato dinamicamente. Ti ricordiamo che per eseguire questa operazione il record non deve essere già presente nella zona DNS OVH del dominio come record A. Per verificarlo ed eventualmente rimuoverlo, consulta la guida [Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}.

Una volta che tutto è pronto per creare il record, torna alla pagina principale della scheda `DynHost`{.action} e clicca sul pulsante `Aggiungi un DynHost`{.action}. Nella nuova finestra, inserisci le informazioni richieste:

|Campo|Descrizione|
|---|---|
|Sottodominio|Inserisci il nome del sottodominio a cui è associato il record DNS da aggiornare dinamicamente. Questo sottodominio deve coincidere con quello inserito durante la creazione dell’utente DynHost.|
|IP di destinazione|Inserisci l’indirizzo IP che deve essere utilizzato dal record DNS. Secondo il funzionamento del DynHost, l’IP verrà aggiornato in un secondo momento.|

Dopo aver completato tutti i campi, clicca su `Conferma`{.action}. Il record DynHost dovrebbe comparire nella tabella della pagina corrente.  Ripeti questa operazione per ogni record DynHost che da aggiungere.

![dynhost![

### Step 3: automatizza la modifica del DynHost

A questo punto non resta che rendere automatico l’aggiornamento del record DNS, in modo che possa essere eseguito dinamicamente. Per effettuare questa operazione è necessario utilizzare un client che verificherà regolarmente se l’indirizzo IP di destinazione è cambiato e ne eseguirà l’aggiornamento.

> \[!warning]
>
> OVH non si occupa dell’installazione e configurazione del client, che quindi di responsabilità dell’utente. In questa guida puoi trovare informazioni utili per effettuare l’operazione ma, in caso di necessità, ti consigliamo di rivolgerti a uno specialista del settore. OVH non potrà fornirti alcuna assistenza. 
>

La scelta dei tool disponibili è molto ampia: il client può infatti essere installato sul proprio server o computer oppure essere già disponibile nell’interfaccia del proprio router, se compatibile. Una volta scelto e installato lo strumento da utilizzare, configuralo utilizzando le informazioni dell’utente DynHost creato precedentemente.

In base al client utilizzato è possibile che, oltre ai dati relativi all’utente DynHost e al sottodominio in questione, venga richiesto un URL di aggiornamento. In questo caso utilizza l’indirizzo fornito qui sotto sostituendo le informazioni generiche:

> http://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Campo|Sostituire con...|
|---|---|
|$HOSTNAME|Il sottodominio interessato dalla modifica|
|$IP|Il nuovo indirizzo IP di destinazione|

Per assicurarti che l’indirizzo IP di destinazione sia stato aggiornato correttamente, accedi allo Spazio Cliente OVH: l’informazione è disponibile nella scheda `DynHost`{.action}, nella colonna `Destinazione`{.action}.

![dynhost![

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.