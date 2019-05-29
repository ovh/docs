---
title: 'Creare un database su un hosting Web'
slug: creare-database
excerpt: 'Come creare un database sul tuo hosting Web OVH'
section: Database
order: 1
---

**Ultimo aggiornamento: 03/04/2019**

## Obiettivo

Utilizzati dalla maggior parte dei sistemi di gestione dei contenuti (Content Management System o CMS) come WordPress e Joomla!, i database permettono di salvare gli elementi detti dinamici (ad esempio, commenti o articoli). 

**Questa guida ti mostra come creare un database sul tuo hosting Web OVH.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovh.it/hosting-web/){.external}
- Poter creare uno o più database sul servizio attivato
- Avere accesso alla gestione dell’hosting Web dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Step 1: accedi alla gestione dei database dell’hosting

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Step 2: crea il database

Per effettuare questa operazione, puoi scegliere tra due possibilità:

- **se non hai ancora creato database**, clicca sul pulsante `Crea un database`{.action}

- **se hai già creato database**, clicca sul pulsante `Azioni`{.action} sopra la tabella e seleziona `Crea un database`{.action}.

Nella nuova finestra, completa questi campi:

|Campo|Descrizione|  
|---|---|  
|Motore del database|Seleziona il motore che verrà utilizzato dal database (i database inclusi con gli [hosting Web OVH](https://www.ovh.it/hosting-web/){.external} propongono solo il motore MySQL). |  
|Versione del database|Seleziona la versione utilizzata dal motore del database (verifica la compatibilità del tuo sito con l’opzione scelta). |  
|Tipo di database|Seleziona la capacità del database, cioè lo spazio a disposizione per salvare i dati.|   

Una volta selezionate tutte le informazioni, clicca su `Seguente`{.action}. 

|Campo|Descrizione|   
|---|---|   
|Utente|Personalizza il nome dell’utente associato al database.|   
|Password|Definisci una password per l’utente e confermala.|   

Verifica la correttezza delle informazioni inserite e clicca su `Conferma`{.action} per avviare il processo di creazione del database. Ripeti questa procedura per ogni database che vuoi creare. 

> [!primary]
>
> Per motivi di sicurezza, la password inserita dovrà rispettare alcuni requisiti.  Inoltre, ti consigliamo di: 
>
> - non utilizzare due volte la stessa password
>
> - scegliere una password che non contenga informazioni personali (ad esempio nome, cognome o data di nascita)
>
> - modificare regolarmente la password
>
> - non trascrivere la password e non inviarla al proprio indirizzo email
>
> - non salvare la password sul browser, anche se proposto
>

![databasecreation](images/database-creation-step2.png){.thumbnail}

### Step 3: utilizza il tuo database

A questo punto non ti resta che utilizzare il database. Per accedervi, sono necessari alcuni dati che permettono di stabilire la connessione tra il sito Internet e il database: nome utente e password appena configurati, nome del database appena personalizzato e indirizzo del server.

In base al sito utilizzato, la connessione dovrà essere effettuata manualmente o tramite un’interfaccia messa a disposizione dal sito stesso. Queste impostazioni sono legate alla configurazione del sito Internet e non a servizi OVH, pertanto non forniamo assistenza relativamente ai parametri da utilizzare. In caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o il fornitore del servizio.

Per gestire in modo semplice il tuo database, OVH mette inoltre a disposizione il tool phpMyAdmin. Dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} è possibile recuperare il link di accesso a questa applicazione Web: nella scheda `Database`{.action}, clicca sui tre puntini in corrispondenza del tuo servizio, seleziona `Accedi a phpMyAdmin`{.action} e inserisci le credenziali associate al database creato in OVH. 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.