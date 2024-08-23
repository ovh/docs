---
title: "Accedere al database del tuo database server"
excerpt: "Questa guida ti mostra come connettersi al database"
updated: 2023-10-31
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

È possibile consultare il contenuto del tuo database tramite un'interfaccia. Per effettuare questa operazione, è possibile connettersi in diversi modi.

**Questa guida ti mostra come connettersi al database sul tuo database server.**

## Prerequisiti

- Disporre di una [istanza Web Cloud Databases](/links/web/databases){.external} (inclusa in un'offerta di[hosting web Performance](/links/web/hosting)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}

## Procedura

> [!primary]
>
> Attenzione: le soluzioni [Web Cloud Databases](/links/web/databases){.external} non danno accesso al sistema di gestione dei database, ma ai database ospitati su di esso.
> <br> - Attenzione: non sono presenti accessi "root".
> <br> - I comandi SQL generici funzionano normalmente e software come HeidiSQL, SQuirreL o Adminer sono completamente compatibili.
>

### Connettersi a un database MySQL o MariaDB 

> [!primary]
>
> MariaDB è un derivato di MySQL e i diversi comandi sono esattamente gli stessi per questi 2 tipi di database.
> 

####  Per phpMyAdmin OVHcloud 

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`. Clicca sulla scheda `Web Cloud Databases`{.action} nella colonna di sinistra e seleziona il nome del tuo database server.

Nella scheda `Informazioni generali`, trovi il link di accesso a phpMyAdmin nel riquadro **"Gestione database"** alla voce "Interfaccia utente".

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}

Si aprirà la pagina di connessione di phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}

Per accedere al database, inserisci quanto segue:

- **Server:** inserire il *Nome host* del database server seguito dal *numero di porta*. Il *numero di porta* deve essere separato dal *nome host* da un "**spazio**" o da "**:**". Ad esempio, se il *Nome host* è **aaXXXXX-XXX.eu.clouddb.ovh.net** e il *numero di porta* è **12345**, è necessario inserire **aaXXXXX-XXX.eu.clouddb.ovh.net:12345** o **aaXXXXX-XXX.eu.clouddb.ovh.net 12345**. Per recuperare il *Nome host* e il *numero di porta* del tuo server Web Cloud Databases, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e accedi alla sezione `Web Cloud`. Clicca sulla scheda `Web Cloud Databases`{.action} nella colonna di sinistra e seleziona il nome del tuo database server. Nella pagina `Informazioni generali` che appare, troverai il *Nome host* e il *numero di porta* nel riquadro `Informazioni di login`.

- **Utente:** Inserisci il *nome utente* del tuo database server. Per recuperare il *nome utente* del tuo database, accedi al tuo [Spazio Cliente OVHcloud](/links/manager){.external}, clicca su `Web Cloud`. Clicca sulla scheda `Web Cloud Databases`{.action} nella colonna di sinistra e seleziona il nome del tuo database server. Clicca sulla scheda `Utenti e diritti`{.action}. Troverai una tabella con tutti gli utenti creati sulla tua soluzione Web Cloud Databases.

- **Password:** Inserisci la *password* associata al *nome utente* pertinente. Se non ricordi più la *password* associata al tuo *nome utente*, accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e clicca su `Web Cloud`. Clicca sulla scheda `Web Cloud Databases`{.action} nella colonna di sinistra e seleziona il nome del tuo database server. Clicca sulla scheda `Utenti e diritti`{.action}. Clicca sul pulsante `...`{.action} a destra di *l’utente* interessato per `Modifica la password`{.action}.

> [!warning]
>
> Se si modifica la password di un utente di database, tutte le applicazioni o i siti Web che accedono al database devono essere aggiornati.
>

Se la connessione avrà successo, comparirà la pagina successiva di phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **In caso di errore**:
> <br> - Errore #1045, significa che le credenziali non sono corrette. È quindi necessario verificare il nome utente e/o la password.
> <br> - Errore #2005, ti consigliamo di verificare il nome del server e il suo corretto funzionamento.

#### Accedi al database al di fuori dello Spazio Cliente OVHcloud

> [!warning]
>
> Se utilizzi un'offerta "Web Cloud Databases"/"SQL Privato", non dimenticare di autorizzare il tuo IP utilizzando la guida sulla [configurazione del tuo server database](/pages/web_cloud/web_cloud_databases/configure-database-server).
>

Per connetterti al tuo database, assicurati di recuperare queste informazioni:

- **Server:**: l'hostname del tuo server è visibile nella scheda `Informazioni `generali del tuo server database, nel quadro **"Amministrazione del database"** con la voce "Nome host" nella parte **SQL**.
- **Utente:**: il nome utente creato nella scheda `Utenti e diritti` del tuo database server.
- **Password**: la password associata all'utente
- **Porta**: la porta è visibile nella scheda `Informazioni `generali del tuo database server, nel quadro **"Amministrazione del database"** con la voce "Porta" della parte **SQL**.
- **Nome del database**: i database sono elencati nella scheda `Database` del tuo database server.

##### 1. Connessione online di comando

```bash
mysql --host=server --user=username --port=port --password=password database_name
```

##### 2. Connessione tramite script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. >
```

##### 3. Connessione tramite software (SQuirreL SQL)

> [!primary]
>
> Nel nostro esempio utilizziamo il software open source SQquirreL, ma altre interfacce come HeidiSQL o Adminer sono totalmente compatibili. 

- Lanciate SQuirreL SQL e cliccate su `Aliases`{.action}, poi su `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Completa i campi qui sotto e conferma con il pulsante `OK`{.action}:
    - **Name**: Scegli un nome
    - **Driver**: Scegli "MySQL Driver"
    - **URL**: Indica l'indirizzo del server e la porta nella forma jdbc:mysql://server:port
    - **User Name**: Inserisci il nome utente
    - **Password**: Indica la password

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Conferma di nuovo con il pulsante `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Da questo momento sei connesso correttamente al tuo database:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

##### 4. Connessione via phpMyAdmin

È possibile utilizzare la propria interfaccia phpMyAdmin per esplorare il contenuto del database. installa phpMyAdmin sul tuo server o hosting Web. Durante l'installazione, assicurati di configurare correttamente le informazioni del tuo database server e del tuo database in modo che phpMyAdmin possa connettersi.

### Connettersi a un database PostgreSQL 

Per connetterti al tuo database, assicurati di recuperare queste informazioni:

- **Server**: l'hostname del tuo server è visibile nella scheda `Informazioni `generali del tuo server database, nel quadro **"Amministrazione del database"** con la voce "Nome host" nella parte **SQL**.
- **Utente**: il nome utente creato nella scheda `Utenti e diritti` del tuo database server.
- **Password**: la password associata all'utente
- **Porta**: la porta è visibile nella scheda `Informazioni `generali del tuo database server, nel quadro **"Amministrazione del database"** con la voce "Porta" della parte **SQL**.
- **Nome del database**: i database sono elencati nella scheda `Database` del tuo database server.

#### Connessione online di comando

```bash
psql —host=server —port=port —user=utente —password=password nome_database
```

#### Connessione tramite script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3
```

#### Connessione tramite software (SQuirreL SQL)

> [!primary]
>
> Nel nostro esempio utilizziamo il software open source SQquirreL, ma altre interfacce come HeidiSQL o Adminer sono totalmente compatibili.

- Lanciate SQuirreL SQL e cliccate su `Aliases`{.action}, poi su `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Completa i campi qui sotto e conferma con il pulsante `OK`{.action}:
    - **Name**: Scegli un nome
    - **Driver**: Scegli "PostgreSQL"
    - **URL**: Indica l'indirizzo del server e la porta nella forma jdbc:postgresql://server:port/database
    - **User Name**: Inserisci il nome utente
    - **Password**: Indica la password

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Conferma di nuovo con il pulsante `Connect`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Da questo momento sei connesso correttamente al tuo database:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).