---
title: 'Creare e gestire un database su un hosting Web'
slug: creare-database
excerpt: 'Come creare un database sul tuo hosting Web OVHcloud'
section: Database
order: 01
---

**Ultimo aggiornamento 03/02/2022**

## Obiettivo

Utilizzati dalla maggior parte dei sistemi di gestione dei contenuti (Content Management System o CMS) come WordPress e Joomla!, i database permettono di salvare gli elementi detti dinamici (ad esempio, commenti o articoli). 

**Questa guida ti mostra come creare e gestire un database sul tuo hosting Web OVHcloud.**

## Prerequisiti

- Una [soluzione Web Hosting OVHcloud](https://www.ovhcloud.com/it/web-hosting/)
- un database disponibile tra quelli inclui nel tuo piano di hosting Web
- Avere accesso alla gestione dell’hosting Web dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) 

## Procedura

### Step 1: accedi alla gestione dei database dell’hosting

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), seleziona `Web Cloud`{.action} nella barra di navigazione in alto. Clicca su `piani Hosting`{.action} e seleziona il tuo servizio. Quindi, clicca sulla scheda `Database`{.action}.

Visualizzi una tabella con tutti i database creati per la tua soluzione di hosting.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Step 2: crea il database

Per effettuare questa operazione, puoi scegliere tra due possibilità:

- **se non hai ancora creato database**, clicca sul pulsante `Crea un database`{.action}

- **se hai già creato database**, clicca sul pulsante` Azioni`{.action} sopra la tabella e seleziona `Crea un database`{.action}.

Nella nuova finestra, completa i campi richiesti e poi clicca su `Seguente`{.action}.

|Campo|Descrizione|  
|---|---|  
|Motore del database|Seleziona il motore che verrà utilizzato dal database (i database inclusi con gli [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) propongono solo il motore MySQL).|  
|Versione del database|Seleziona la versione utilizzata dal motore del database  (verifica la compatibilità del tuo sito con l’opzione scelta).|  
|Tipo di database|Seleziona la capacità del database, cioè lo spazio a disposizione per salvare i dati.|   

Una volta selezionate tutte le informazioni, clicca su `Seguente`{.action}. 

|Campo|Descrizione|   
|---|---|   
|Utente|Personalizza il nome dell’utente associato al database.|   
|Password|Definisci una password per l’utente e confermala.|   

Verifica la correttezza delle informazioni inserite e clicca su `Conferma`{.action}per avviare il processo di creazione del database. Ripeti questa procedura per ogni database che vuoi creare, a seconda del numero massimo di database inclusi.

> [!primary]
>
> Per motivi di sicurezza, la password inserita dovrà rispettare alcuni requisiti. Inoltre, ti consigliamo di: 
>
> - non utilizzare due volte la stessa password
>
> - scegliere una password che non contenga informazioni personali (ad esempio nome, cognome o data di nascita)
>
> - modificare regolarmente la password
>
> - non trascrivere la password e non inviarla ad altre persone dal proprio indirizzo email
>
> - non salvare la password sul browser, anche se proposto
>

> [!warning]
>Ricorda che se modifichi la password di un database, è necessario aggiornare questa informazione in tutte le applicazioni che accedono a questo database.
>


![databasecreation](images/database-creation-step2.png){.thumbnail}

### Step 3: gestisci il tuo database 

> [!warning]
>Questa guida non sostituisce il supporto di uno specialista del settore, ad esempio un webmaster. In caso di difficoltà o dubbi, ti consigliamo di contattare uno specialista del settore o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni, consulta la sezione “Per saperne di più” della guida.
>

A questo punto non ti resta che utilizzare il database. Per accedervi, sono necessari alcuni dati che permettono di stabilire la connessione tra il sito Internet e il database:  nome utente e password appena configurati, nome del database appena personalizzato e indirizzo del server.

In base al sito utilizzato, la connessione dovrà essere effettuata manualmente o tramite un’interfaccia messa a disposizione dal sito stesso. Queste impostazioni sono legate alla configurazione del sito Internet e non a servizi OVHcloud, pertanto ti consigliamo di utilizzare le adeguate risorse disponibili online. 

#### Accedi all’interfaccia phpMyAdmin 

OVHcloud mette inoltre a disposizione il tool phpMyAdmin. Dallo Spazio Cliente OVHcloud è possibile recuperare il link di accesso a questa applicazione Web: nella scheda `Database`{.action}, clicca sui tre puntini `(...)`{.action} in corrispondenza del tuo servizio, seleziona `Accedi a phpMyAdmin`{.action}.

Le credenziali di accesso sono pre-compilate, quindi basta soltanto inserire la password del database. Questo è anche un buon metodo per verificare la password attuale, ad esempio se ricevi un messaggio di “autorizzazione negata” nel CMS.

![databasecreation](images/database-creation-step3.png){.thumbnail}


#### Utilizza i backup dei database

Per ogni database di hosting Web, gli Snapshots verranno creati ogni giorno in modo automatico (massimo 32 entità). Il che significa che puoi semplicemente ripristinare una versione precedente dal tuo Spazio Cliente OVHcloud. 

Per verificare gli Snapshot disponibili e la relativa data di creazione, clicca sul simbolo situato accanto al cerchio verde nella tabella del tuo database  Inoltre, da qui è possibile scaricare i backup dei database. Per maggiori dettagli su questo argomenti, consulta la nostra guida [Recuperare il backup del database di un hosting Web](../web_hosting_come_esportare_un_database).

#### Problemi frequenti

**Troppe connessioni**

I database di Web Hosting hanno un limite di 30 connessioni simultanee (variabile del sistema *max_connections*). È necessario ottimizzare le richieste SQL per prevenire questo tipo di errore. Se il problema persiste, è necessario prendere in considerazione altre misure, ad esempio passare a un database [Web Cloud Databases](https://www.ovh.de/cloud/cloud-databases/) o effettuare l’[upgrade di un piano di hosting](https://www.ovhcloud.com/it/web-hosting/uc-best-web-hosting/). 

**Errori di connessione o “not found”**

È il metodo migliore per utilizzare sempre il nome del database attuale per script e file di configurazione, al posto degli indirizzi IP o _localhost_.

**Database overquota**

Se il database di un Hosting Web supera lo spazio di storage consigliato, passerà automaticamente in modalità “read only” / ”select only”. L’amministratore riceverà una notifica via email.

Una volta ottimizzato il database, è possibile ricalcolarne le dimensioni dallo Spazio Cliente OVHcloud per sbloccarlo di nuovo. Ti consigliamo di scaricare il database, effettuarne la revisione localmente e poi sostituirlo tramite importazione. Per maggiori informazioni, consulta [questa guida](../web_hosting_ottimizza_le_performance_del_tuo_sito/#step-7-ottimizza-il-tuo-database).


## Per saperne di più

[Modificare la password del database di un hosting Web](../modificare-password-database)

[Recuperare il backup del database di un hosting Web](../web_hosting_come_esportare_un_database)

[Importare un backup nel database di un hosting Web](../web_hosting_come_importare_un_database_mysql)

[Web Hosting: ottimizza le performance del tuo sito](../web_hosting_ottimizza_le_performance_del_tuo_sito)

Partecipa alla nostra community di utenti all’indirizzo <https://community.ovh.com/en/>.
