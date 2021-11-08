---
title: Iniziare a utilizzare il servizio SQL Privato
slug: iniziare-a-utilizzare-sql-privato
excerpt: Come eseguire le prime operazioni sul tuo SQL Privato
section: SQL Privato
---

**Ultimo aggiornamento: 22/02/2018**

## Obiettivo

Il servizio SQL Privato consente di utilizzare un'istanza SQL che funziona parallelamente a un hosting Web OVH e dispone di risorse dedicate e garantite. Questo consente di ottenere migliori prestazioni e una flessibilità maggiore sui sistemi di database disponibili e su quelli che possono essere creati. Il servizio è generalmente destinato ai clienti con esigenze specifiche.

**Questa guida ti mostra le operazioni di base da effettuare per utilizzare un SQL Privato.**

## Prerequisiti

- Disporre di un'istanza SQL Privato (inclusa nelle soluzioni di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} o attivata tramite un’[opzione SQL](https://www.ovhcloud.com/it/web-hosting/options/start-sql/){.external}).
- Disporre di un piano di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attivo e ospitato nello stesso datacenter dell'istanza SQL Privato (questa informazione è disponibile nello Spazio Cliente OVH)
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

### Attiva il tuo server SQL Privato incluso con la tua offerta di hosting Web

Se la tua offerta di hosting include l'opzione SQL Privato, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Dalla sezione `Web Cloud`{.action}, clicca su `Hosting`{.action} nella colonna di sinistra.

Nella scheda `Informazioni generali`, riquadro `Configurazione`, clicca sul pulsante `...`{.action} a destra del **Database privato**. Clicca su `Attiva`{.action} per avviare il processo di attivazione.

![Informazioni generali](images/privatesql00-SQLactivation.png){.thumbnail}

Per completare l'operazione segui le istruzioni riportate qui di seguito per determinare il tipo e la versione del tuo server SQL privato. e sarà accessibile dalla colonna di sinistra nel `Database`{.action}.

### Visualizza le informazioni generali dell'istanza

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e, nel menu a sinistra, clicca su `Database`{.action} e poi seleziona la tua istanza SQL. Assicurati di trovarti nella scheda `Informazioni generali`{.action}.

> [!primary]
>
> Nello Spazio Cliente OVH il nome del servizio SQL Privato può essere visualizzato in due modi:
>
> - può contenere parte del tuo identificativo cliente e terminare con tre cifre (001 per il primo servizio SQL Privato installato, 002 per il secondo, ecc…)
> - iniziare con *sqlprivato-*, seguito da parte del tuo identificativo cliente e tre cifre (001 per il primo servizio SQL Privato installato, 002 per il secondo, ecc…)
>

In questa interfaccia vengono mostrate anche le informazioni principali della tua istanza SQL. Ti consigliamo di verificarne la correttezza e assicurarti che corrispondano alle descrizioni indicate qui sotto:

|Informazione|Descrizione|
|---|---|
|Stato del servizio|Indica se l’istanza è attiva, in stato di riavvio o sospesa. Per poter eseguire operazioni, l’istanza deve essere attiva.|
|Tipo|Indica il sistema di database utilizzato dal server. MySQL è il più diffuso, ma ne esistono anche altri (come PostgreSQL e MariaDB). |
|Versione|Indica la versione del sistema di database utilizzato dal server. Ti ricordiamo di verificare la compatibilità del tuo sito con la versione scelta.|
|RAM|Indica la memoria disponibile sulla tua istanza e segnala l’eventuale raggiungimento della soglia limite. La RAM costituisce la risorsa dedicata e garantita del tuo SQL Privato. Se necessario, è possibile aumentarla e ricevere una notifica in caso di utilizzo di tutte le risorse disponibili.|
|Infrastruttura|Indica l’infrastruttura utilizzata dall’istanza. Questa informazione è relativa alla piattaforma di OVH.|
|Datacenter|Indica il datacenter in cui è stata creata l’istanza. Assicurati che corrisponda a quello dell’hosting Web OVH in cui è (o sarà) ospitato il tuo sito. |
|Host|Indica il server OVH in cui è stata creata l’istanza. Questa informazione è relativa all'infrastruttura OVH e, in caso di [incidenti](http://travaux.ovh.net/){.external}, può essere presente nelle nostre comunicazioni.|

![Informazioni generali](images/privatesql01-General-information.png){.thumbnail}

### Crea un database

Per creare il primo database in cui verranno salvati tutti i dati del tuo sito (per un blog, ad esempio, post e commenti), clicca sulla scheda `Database`{.action} e poi sul pulsante `Aggiungi un database`{.action}.

![Aggiungi un database](images/privatesql02-Adding-a-database.png){.thumbnail}

Si apre una finestra in cui è possibile creare un utente. Questa operazione è fondamentale: l’utente può accedere all'istanza e, in base ai permessi assegnati, effettuare richieste al database (come lettura, inserimento e cancellazione dei dati).

Seleziona la casella `Crea un utente`{.action} per creare l’utente insieme al database o lasciala deselezionata per eseguire l’operazione in un secondo momento. 

Inserisci le informazioni richieste seguendo le indicazioni e poi clicca su `Conferma`{.action}.

- **Nome del database** (obbligatorio): il nome del tuo futuro database
- **Nome utente** (facoltativo se la casella non è selezionata): l'utente che potrà accedere al database ed effettuare le richieste
- **Diritti** (facoltativo se la casella non è selezionata): i permessi che saranno associati all’utente sul database. Per un utilizzo standard, scegli **Amministratore**. Sarà comunque possibile modificare i diritti assegnati in un secondo momento
- **Password**/**Conferma la password** (facoltativo se la casella non è selezionata): scegli una password e confermala

> [!warning]
>
> Per motivi di sicurezza, durante l’inserimento dei dati ti invitiamo a rispettare i requisiti richiesti.
>

![Aggiungi un database](images/privatesql03-Adding-a-database-part2.png){.thumbnail}

### Crea un utente (facoltativo)

Se hai creato l'utente insieme al database, questo step è opzionale. Per un utilizzo standard, un singolo utente è sufficiente. Per un progetto più complesso, invece, potrebbe essere necessario autorizzare più utenti a lavorare sullo stesso database. Ad esempio, uno potrebbe disporre dei permessi di lettura e scrittura e un altro quelli di sola lettura.

Se hai già creato il primo utente e per il tuo progetto non ne sono necessari altri, puoi passare allo step successivo. Per creare un utente, clicca sulla scheda `Utenti e diritti`{.action} e poi sul pulsante `Aggiungi un utente`{.action}.

![Aggiunta di un utente](images/privatesql04-Adding-a-user.png){.thumbnail}

Inserisci le informazioni richieste seguendo le indicazioni e poi clicca su `Conferma`{.action}.

- **Nome utente**: l'utente che potrà accedere alla tua istanza e a cui potrai assegnare i permessi nello step successivo 
- **Password**/**Conferma password**: scegli una password e confermala

> [!warning]
>
> Per motivi di sicurezza, durante l’inserimento dei dati ti invitiamo a rispettare i requisiti richiesti.
>

![Aggiunta di un utente](images/privatesql05-Adding-a-user-part2.png){.thumbnail}

Una volta creato l’utente è necessario assegnargli i permessi per autorizzarlo a effettuare operazioni sul database (come lettura, inserimento e cancellazione dei dati): clicca sull’icona a forma di ingranaggio e seleziona `Gestisci i diritti`{.action}.

![Aggiunta dei diritti](images/privatesql06-Adding-a-right.png){.thumbnail}

Si apre una nuova pagina in cui puoi scegliere i permessi da assegnare. Per un utilizzo standard, scegli `Amministratore`{.action}.

![Aggiunta dei diritti](images/privatesql07-Adding-a-right-part2.png){.thumbnail}

### Importa un database (facoltativo)

Questa procedura è valida solo per importare il backup di un database già esistente (indispensabile, ad esempio, per migrare il tuo sito in OVH o i tuoi database su una nuova istanza SQL Privato). Se non devi effettuare questa operazione, passa direttamente allo step successivo.

Esistono diverse tecniche per importare un database. Nello Spazio Cliente OVH è disponibile un tool specifico, che approfondiremo in questa guida.  Per utilizzare un altro metodo, consulta le nostre guide.

#### Step 1: importa un database

Seleziona la scheda `Database`{.action}, clicca sull’icona a forma di ingranaggio e poi su `Importa un file`{.action}.

![Aggiunta di un file](images/privatesql08-import-a-file.png){.thumbnail}

Nella nuova finestra, seleziona l’opzione `Importa un nuovo file`{.action} e clicca su `Continua`{.action}.

![Aggiunta di un file](images/privatesql09-import-a-file-part2.png){.thumbnail}

#### Step 2: seleziona e invia il file di backup

Assegna un nome al file di backup (che ti consentirà di identificarlo più facilmente per ripristinarlo in un secondo momento), clicca su **Sfoglia** per selezionare il file sul tuo computer e poi su **Invia**.

Attendi la conferma di invio del file e poi clicca sul pulsante `Continua`{.action}.

![Aggiunta di un file](images/privatesql10-import-a-file-part3.png){.thumbnail}

#### Step 3: avvia l'importazione

Scegli se applicare le opzioni aggiuntive proposte:

- **Elimina tutti i file dal tuo database attuale**: selezionando questa opzione tutti i contenuti presenti nel database verranno cancellati e sostituiti da quelli del tuo backup. Nel nostro esempio il database è vuoto, quindi è possibile lasciare questa casella deselezionata
- **Invia un'email alla fine dell'importazione**: selezionando questa opzione, al termine dell'importazione riceverai una notifica via email

![Aggiunta di un file](images/privatesql11-import-a-file-part4.png){.thumbnail}

### Collega il tuo sito al database

Ora che il tuo database è stato creato e che uno o più utenti dispongono dei permessi necessari per accedervi, non resta che collegare il sito al database. Questa operazione può essere eseguita in diversi modi, a seconda del sito e del CMS utilizzato (WordPress, Joomla!, ecc…) o, se stai installando il tuo sito, dello step in cui ti trovi.

In ogni caso è necessario disporre di queste cinque informazioni:

- **nome del database**: il nome assegnato in fase di creazione
- **nome dell'utente**: il nome utente definito durante la creazione del database o degli eventuali utenti aggiuntivi
- **password dell'utente**: la password associata all'utente definita negli step precedenti
- **hostname del server**: l’indirizzo del server utilizzato dal tuo sito per connettersi al tuo database. Questa informazione è disponibile nello Spazio Cliente OVH, scheda **Informazioni generali** > **Informazioni di login**
- **porta del server**: la porta di connessione all'istanza SQL Privato, che permette l’accesso del tuo sito al database. Questa informazione è disponibile nello Spazio Cliente OVH, scheda **Informazioni generali** > **Informazioni di login**

> [!warning]
>
> Il campo `Porta`{.action} potrebbe non essere disponibile nella configurazione del tuo sito. In questo caso, è necessario aggiungerlo dopo l’hostname del server, separandolo con il simbolo *:* (ad esempio hostname:porta).
>

![Connessione SQL](images/privatesql12-sql_connection.png){.thumbnail}

Da questo momento è possibile completare l'installazione del sito o la migrazione del database sulla nuova istanza SQL.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/]( https://www.ovh.it/community/)
