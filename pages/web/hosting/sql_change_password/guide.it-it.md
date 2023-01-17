---
title: Modificare la password del database di un hosting Web
slug: modificare-password-database
excerpt: Scopri come modificare la password di un database creata nell'ambito di un piano di hosting Web
section: Database
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/03/2023**

## Obiettivo

La maggior parte dei siti Web utilizza un **database** per archiviare articoli, commenti e indirizzi email dei propri utenti.

La connessione a questo database è possibile tramite un **file di configurazione** contenuto nello [spazio di archiviazione dei file](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) del tuo hosting. che contiene le informazioni che permettono al tuo sito di "identificarsi" presso il suo **server di database**.

La modifica della password di un database deve quindi essere sempre effettuata:

- Nel [file di configurazione](https://docs.ovh.com/it/hosting/1-click-module-management/#step-1-identifica-il-database-associato-al-tuo-modulo) del tuo sito tramite lo [spazio FTP del tuo hosting](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/);

- **E** nel server che contiene il suo database attraverso lo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Finché la modifica non sarà effettuata **in entrambi i punti**, il tuo sito mostrerà un "[errore di connessione al database](https://docs.ovh.com/it/hosting/errori-frequenti-database/#error-establishing-a-database-connection)".

Per modificare la password del database è quindi necessario eseguire **tutte le operazioni** indicate in questa guida. In caso di dubbi sulle operazioni da effettuare, contatta il tuo webmaster o rivolgiti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/).

La modifica della password del database del tuo sito avviene in quattro step:

- [Step 1: identificare il file di configurazione del tuo sito](#step1);
- [Step 2: identificare il database del tuo sito](#step2);
- [Step 3: modificare la password del database del tuo sito nel file di configurazione](#step3);
- [Step 4: modificare la password del database del tuo sito sul server di database](#step4).

**Questa guida ti mostra come modificare la password di un database in modo sicuro.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Utilizza un [database associato alla tua offerta di hosting condiviso](https://www.ovhcloud.com/it/web-hosting/options/start-sql/) o [Web Cloud Databases](https://www.ovh.it/cloud/cloud-databases/).
- Disporre delle credenziali FTP per accedere allo [spazio di storage dell'hosting](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) 

## Procedura

### Step 1: identifica il file di configurazione del tuo sito <a name="step1"></a>

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action} e su `Hosting`{.action} e infine sull'hosting interessato. Clicca sulla scheda `Multisito`{.action}. Identifica il nome della `Cartella di root` del tuo sito (la directory in cui si trovano file e cartelle).

![root_folder](images/root_folder.png){.thumbnail}

Clicca sulla scheda `FTP-SSH`{.action} e poi clicca sul pulsante `FTP Explorer`{.action} per accedere allo spazio contenente i file e le cartelle del tuo sito (*spazio FTP*).

> [!primary]
>
> Per modificare la password del tuo spazio FTP, consulta questa [guida](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/).
>
> Per connetterti con un altro metodo, consulta questa [guida](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/).
>

Apri la `Cartella di root` identificata sopra.

Ricerca e apri il file di configurazione del tuo sito:

- Per un sito WORDPRESS si tratta di **"wp-config.php"**;
- Per un sito JOOMLA, si tratta di **"configuration.php"**;
- Per un sito DRUPAL, clicca sulla cartella "**sites"** e **"default"**. Il file di configurazione è **"settings.php"**;
- Per un sito PRESTASHOP, clicca sulla cartella **"app"** e **"config"**. Il file di configurazione è **"parameters.php"**.

### Step 2: identificare il database del tuo sito <a name="step2"></a>

Sono possibili due casi:

- Caso 1: il database del tuo sito fa parte della tua offerta di hosting;
- Caso 2: è inclusa in un'offerta *Web Cloud Databases*, nel qual caso dovrai trovare il **nome del server** e il **nome utente** del tuo database per identificarlo senza rischio di errore.

Per verificare quale caso si applica al tuo sito, nel file di configurazione identificato allo [Step 1](#step1), inserisci il nome del database:

- Per WORDPRESS: il nome appare sotto la dicitura **"DB_NAME"**;
- Per JOOMLA: il nome appare sotto **"public $db"**;
- Per DRUPAL: il nome appare sotto **"database"**;
- Per PRESTASHOP: il nome appare sotto **"database_name"**.

Dopodiché torna allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), sezione `Web Cloud`{.action}:

- Accedi alla sezione `Hosting`{.action} e poi all'hosting interessato.
- Clicca sulla scheda `Database`{.action} **a destra** dello schermo.
- Cerca il nome del database trovato precedentemente nella colonna `Nome del database`;

Se hai ritrovato in questa sezione del tuo Spazio Cliente il nome del database indicato nel file di configurazione, passa allo [Step 3](#step3).

In caso contrario, il database del tuo sito è associato a un'offerta [Web Cloud Databases](https://www.ovh.it/cloud/cloud-databases/).

Per registrare il *nome del server* e il *nome utente* del database, è necessario ritornare al file di configurazione del tuo sito:

- Per WORDPRESS: il *nome del server* compare con la dicitura **"DB_HOST"** e il *nome utente* con la dicitura **"DB_USER"**;
- Per JOOMLA: il *nome del server* appare sotto **"public $host"** e il *nome utente* con la menzione **"public $user"**;
- Per DRUPAL: il *nome del server* appare sotto **"host"** e il *nome utente* sotto la dicitura **"username"**;
- Per PRESTASHOP: il *nome del server* appare sotto **"database_host"** e il *nome utente* sotto la voce **"database_user"**.

Clicca su `Database`{.action} nella sezione `Web Cloud`{.action}. 

Nella scheda `Informazioni generali`{.action}, indica nelle tue offerte [Web Cloud Databases](https://www.ovh.it/cloud/cloud-databases/) quella che contiene, con la voce `Nome host`{.action}, il nome del server del tuo database trovato precedentemente.

Sempre in questa sezione del tuo Spazio Cliente OVHcloud, clicca sulla scheda `Utente e diritti`{.action}, per visualizzare anche il `Nome utente`{.action} del tuo database.

### Step 3: Modifica la password del database del tuo sito nel file di configurazione <a name="step3"></a>

> [!primary]
>
> Per maggiori informazioni sulle best practice di gestione delle password, segui le indicazioni di questa [guida](https://docs.ovh.com/it/customer/gestire-la-password/).
>

Scegli la nuova password del tuo database e annotiamolo. Esso dovrà rispettare le seguenti condizioni:

- Minimo 8 caratteri;
- Massimo 30 caratteri;
- almeno una lettera maiuscola;
- almeno una lettera minuscola;
- almeno una cifra;
- Essere composto esclusivamente da cifre e lettere.

Allo stesso modo del [Step 1](#step1), torna allo spazio di storage dei file del tuo hosting e modifica il file di configurazione del tuo sito.

**Prima di apportare qualsiasi modifica**, registra localmente il contenuto di questo file in un documento di testo per conservarne una copia in caso di errore di manipolazione.

Sostituisci manualmente la password del tuo database **evitando di modificare o eliminare qualsiasi altro elemento del file di configurazione** (Negli estratti qui sotto, sarà necessario sostituire solo la password dell'esempio "*0VhCloudPa55w0rdDB123*"):

- Nel file di configurazione di un sito WORDPRESS, modifica il **"DB_PASSWORD"**:

```php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbname123');
 
/** MySQL database username */
define('DB_USER', 'dbname123');
 
/** MySQL database password */
define('DB_PASSWORD', '0VhCloudPa55w0rdDB123');
 
/** MySQL hostname */
define('DB_HOST', 'dbname123.mysql.db:3306');
```

- Nel file di configurazione di un sito JOOMLA, modifica il **"public $password"** (alla fine del file di configurazione):

```php
public $host = 'dbname123.mysql.db:3306';
public $user = 'dbname123';
public $password = '0VhCloudPa55w0rdDB123';
public $db = 'dbname123';
```

- Nel file di configurazione di un sito DRUPAL, modifica la **"password"**:

```php
$databases['default']['default'] = array (
  'database' => 'dbname123',
  'username' => 'dbname123',
  'password' => '0VhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306',
```

- Nel file di configurazione di un sito PRESTASHOP, modifica la **"database_password"**:

```php
'database_host' => 'dbname123.mysql.db',
'database_port' => '3306',
'database_name' => 'dbname123',
'database_user' => 'dbname123',
'database_password' => '0VhCloudPa55w0rdDB123',
```

Salva questa modifica.

### Step 4: Modifica la password del database del tuo sito sul server di database <a name="step4"></a>

> [!primary]
>
> Questa operazione richiederà alcuni minuti prima di diventare effettiva. Una volta avviata la procedura, controlla lo stato nella scheda `Operazioni in corso`{.action}.
>

Di nuovo, sono possibili due casi: 

- Se il database si trova nella sezione dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) dedicata al tuo [hosting Web](https://www.ovhcloud.com/it/web-hosting/), segui queste [istruzioni](#case1).

- Se il tuo database si trova nella sezione dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) dedicata alle tue offerte [Web Cloud Databases](https://docs.ovh.com/it/clouddb/), segui queste [istruzioni](#case2).

#### Caso 1: il database del tuo sito fa parte della tua offerta di hosting <a name="case1"></a>

Accedi alla sezione `Hosting`{.action} dello Spazio Cliente OVHcloud, clicca sulla scheda `Database`{.action} in corrispondenza del tuo schermo:

![database-password-step1](images/database-password-step1.png){.thumbnail}

Clicca sui tre puntini in corrispondenza del database del tuo sito e poi su `Modifica la password`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

Nella nuova finestra, inserisci la nuova password del tuo database (definita allo [Step 3](#step3)), confermala e clicca su `Conferma`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

#### Caso 2: il database del tuo sito fa parte di un'offerta Web Cloud Databases <a name="case2"></a>

Accedi alla sezione `Database`{.action} del tuo Spazio Cliente e clicca sulla scheda `Utenti e diritti`{.action}:

![userDBpassword-step1](images/userDBpassword-step1.png){.thumbnail}

Per modificare la password del tuo database sul server, clicca sui tre puntini in corrispondenza del `Nome utente`{.action} identificato allo [Step 2](#step2) e seleziona `Modifica la password`{.action}.

![userDBpassword-step2](images/userDBpassword-step2.png){.thumbnail}

Nella nuova finestra, inserisci la nuova password del tuo database (definita allo [Step 3](#step3)), confermala e clicca su `Conferma`{.action}.

![userDBpassword-step3](images/userDBpassword-step3.png){.thumbnail}

## Per saperne di più <a name="gofurther"></a>

[Hosting Condiviso: guida all’utilizzo di FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/)

[Impostare e gestire la password di un account OVHcloud](https://docs.ovh.com/it/customer/gestire-la-password/)

[Risolvi gli errori più frequenti associati ai database](https://docs.ovh.com/it/hosting/errori-frequenti-database/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.