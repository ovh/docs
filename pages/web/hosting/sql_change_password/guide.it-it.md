---
title: 'Modificare la password del database di un hosting Web'
slug: modificare-password-database
excerpt: 'Come impostare una nuova password per un database creato in una soluzione di hosting Web OVH'
section: Database
order: 2
---

**Ultimo aggiornamento: 02/04/2019**

## Obiettivo

Utilizzati dalla maggior parte dei sistemi di gestione dei contenuti (Content Management System o CMS) come WordPress e Joomla!, i database permettono di salvare gli elementi detti dinamici (ad esempio, commenti o articoli). 

**Questa guida ti mostra come modificare la password per accedere a un database associato a una soluzione di hosting Web.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovhcloud.com/it/web-hosting/){.external}
- Avere accesso alla gestione dell’hosting Web dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!warning]
>
> Se imposti una nuova password per il tuo database, sarà necessario apportare la stessa modifica anche nel file di configurazione del sito Internet che lo utilizza.
>

## Procedura

### Step 1: valuta la situazione

**Modificare la password di un database è un’operazione delicata**: un’azione errata potrebbe rendere irraggiungibili tutti i siti che lo utilizzano. Comprendere i possibili effetti di una modifica è importante per effettuare l’operazione con la massima consapevolezza. 

Quasi tutti gli attuali sistemi di gestione dei contenuti utilizzano un database per salvare gli elementi dinamici, ad esempio commenti e articoli. Per funzionare correttamente, i siti basati su CMS devono quindi essere necessariamente connessi al database. Questo tipo di connessione è possibile grazie a un file di configurazione contenente le informazioni del database. Ecco perché, quando si modifica la password del database in OVH, è necessario cambiarla anche nel file di configurazione per garantire la connessione tra il sito e il database. 

> [!primary]
>
> Prima di apportare qualsiasi modifica, verifica se il sito è connesso a un database o meno. In caso affermativo, accertati di sapere come applicare la modifica in modo da non rendere inaccessibile il tuo sito. 
>
> Queste impostazioni sono legate alla configurazione del sito Internet e non a servizi OVH, pertanto non forniamo assistenza relativamente ai parametri da utilizzare. In caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o il fornitore del servizio.
>

### Step 2: accedi alla gestione dei database dell’hosting

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra e clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting.

![password database](images/database-password-step1.png){.thumbnail}

### Step 3: modifica la password del database 

Per impostare una nuova password, clicca sui tre puntini in corrispondenza del database interessato e seleziona `Modifica la password`{.action}. 

![password database](images/database-password-step2.png){.thumbnail}

Nella nuova finestra, inserisci la nuova password e clicca su`Conferma`{.action}. 

**La nuova password sarà attiva dopo alcuni minuti. **

> [!primary]
>
> Per motivi di sicurezza, la nuova password dovrà rispettare alcuni requisiti. Inoltre, ti consigliamo di:
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

![password database](images/database-password-step3.png){.thumbnail}

### Step 4: ripristinare la connessione tra il sito e il database

> [!primary]
>
> Se il tuo sito Internet non è associato a un database, questo step è facoltativo.
>

Se accedendo al tuo sito viene mostrato un messaggio che indica problemi di connessione al database significa che il file di configurazione non è stato aggiornato con la nuova password.

Questo file disponibile nello spazio di storage, infatti, contiene le informazioni che consentono la connessione al database: nome utente, password, nome del database e indirizzo del server. L’operazione di modifica effettuata dallo Spazio Cliente OVH ha interrotto questa connessione: per ristabilirla è sufficiente inserire la nuova password nel file con le informazioni del database.

Queste impostazioni sono legate alla configurazione del sito Internet e non a servizi OVH, pertanto non forniamo assistenza relativamente ai parametri da utilizzare. In caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o il fornitore del servizio.

## Per saperne di più

Per saperne di più sulle misure di sicurezza delle password, consulta [questa pagina](https://www.commissariatodips.it/area-riservata/scelta-password.html){.external}. 

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.