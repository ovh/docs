---
title: "Web Cloud Databases - Connettersi a un database"
excerpt: "Scopri come connetterti a un database sulla tua soluzione Web Cloud Databases"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

È possibile consultare il contenuto del tuo database tramite un'interfaccia. Esistono diversi modi per connettersi.

**Scopri come connetterti al database sulla tua soluzione database server.**

## Prerequisiti

- Una [istanza Web Cloud Databases](/links/web/databases) (inclusa in un piano di [hosting web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleziona il tuo servizio di database

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedura

> [!primary]
>
> Le soluzioni [Web Cloud Databases](/links/web/databases) non danno accesso al sistema di gestione dei database, ma ai database ospitati su di esso.
>
> - Non sono presenti accessi super utente "root".
> - I comandi SQL generici funzionano normalmente e software come HeidiSQL, SQuirreL SQL o Adminer sono completamente compatibili.
>

### Connettersi a un database MySQL o MariaDB

> [!primary]
>
> Poiché MariaDB è un derivato di MySQL, i comandi sono esattamente gli stessi per entrambi i tipi di database.
>

#### Connessione tramite phpMyAdmin OVHcloud

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Recupera le seguenti informazioni di connessione:
>>
>> - **Server (hostname) e porta:** visibili nella scheda `Informazioni generali`{.action}, sezione "Informazioni di login".
>> - **Nome utente:** visibile nella scheda `Utenti e diritti`{.action}.
>> - **Password:** la password associata all'utente. Se l'hai dimenticata, accedi alla scheda `Utenti e diritti`{.action}, clicca su `...`{.action} a destra dell'utente interessato, poi su `Modifica la password`{.action}.
>>
>> > [!warning]
>> >
>> > Se modifichi la password di un utente di database, tutte le applicazioni/siti Web che accedono a questo database devono essere aggiornati di conseguenza.
>>
> **Passaggio 3**
>>
>> Nella scheda `Informazioni generali`{.action}, individua la sezione **"Gestione database"** e clicca sul link phpMyAdmin sotto **"Interfaccia utente"**.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella pagina di login di phpMyAdmin, inserisci le informazioni recuperate allo step 2:
>>
>> ![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}
>>
>> - **Server:** inserisci l'"hostname" seguito dal "numero di porta", separati da "**:**" o da uno "**spazio**". Ad esempio: **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**.
>> - **Username:** inserisci il "nome utente".
>> - **Password:** inserisci la "password".

Se la connessione ha esito positivo, verrà visualizzata la pagina seguente.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **In caso di errore:**
>
> - Errore #1045 significa che le credenziali non sono corrette. Verifica il nome utente e/o la password.
> - Errore #2005 significa che il nome del server deve essere verificato, così come il suo corretto funzionamento.

#### Connessione al database al di fuori dello Spazio Cliente

> [!warning]
>
> Se utilizzi una soluzione "Web Cloud Databases"/"SQL Privato", ricorda di autorizzare il tuo IP seguendo la guida sulla [configurazione del tuo database server](/pages/web_cloud/web_cloud_databases/configure-database-server#gerer-vos-acces).

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Recupera le seguenti informazioni di connessione:
>>
>> - **Server (hostname):** visibile nella scheda `Informazioni generali`{.action}, sezione **"Gestione database"**, voce "Hostname" nella parte **SQL**.
>> - **Porta:** visibile nella stessa posizione, voce "Porta" nella parte **SQL**.
>> - **Nome utente:** visibile nella scheda `Utenti e diritti`{.action}.
>> - **Password:** la password associata all'utente interessato.
>> - **Nome del database:** visibile nella scheda `Databases`{.action}.

**Clicca sul metodo di connessione che preferisci per visualizzare il contenuto.**

/// details | Connessione da riga di comando

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

///

/// details | Connessione tramite script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Connessione tramite software (SQuirreL SQL)

> [!primary]
>
> Nel nostro esempio utilizziamo il software open source SQuirreL, ma altre interfacce come HeidiSQL o Adminer sono completamente compatibili.

- Avvia SQuirreL SQL e clicca su `Aliases`{.action}, poi su `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Compila i campi seguenti e conferma con il pulsante `OK`{.action}:
    - **Name**: Scegli un nome
    - **Driver**: Scegli "MySQL Driver"
    - **URL**: Inserisci l'indirizzo del server e la porta nel formato jdbc:mysql://server:port
    - **User Name**: Inserisci il nome utente
    - **Password**: Inserisci la password

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Conferma nuovamente con il pulsante `Connetti`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Sei ora connesso al tuo database:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

/// details | Connessione tramite phpMyAdmin

Puoi utilizzare la tua interfaccia phpMyAdmin per esplorare il contenuto del tuo database. Per farlo, installa phpMyAdmin sul tuo server o hosting Web. Durante l'installazione, assicurati di configurare correttamente le informazioni del tuo database server e del database desiderato affinché phpMyAdmin possa connettersi.

///

### Connettersi a un database PostgreSQL

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Recupera le seguenti informazioni di connessione:
>>
>> - **Server (hostname):** visibile nella scheda `Informazioni generali`{.action}, sezione **"Gestione database"**, voce "Hostname" nella parte **SQL**.
>> - **Porta:** visibile nella stessa posizione, voce "Porta" nella parte **SQL**.
>> - **Nome utente:** visibile nella scheda `Utenti e diritti`{.action}.
>> - **Password:** la password associata all'utente interessato.
>> - **Nome del database:** visibile nella scheda `Databases`{.action}.

**Clicca sul metodo di connessione che preferisci per visualizzare il contenuto.**

/// details | Connessione da riga di comando

```bash
psql --host=server --port=port --user=user --password=password database_name
```

///

/// details | Connessione tramite script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Connessione tramite software (SQuirreL SQL)

> [!primary]
>
> Nel nostro esempio utilizziamo il software open source SQuirreL, ma altre interfacce come HeidiSQL o Adminer sono completamente compatibili.

- Avvia SQuirreL SQL e clicca su `Aliases`{.action}, poi su `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Compila i campi seguenti e conferma con il pulsante `OK`{.action}:
    - **Name**: Scegli un nome
    - **Driver**: Scegli "PostgreSQL"
    - **URL**: Inserisci l'indirizzo del server e la porta nel formato jdbc:postgresql://server:port/database
    - **User Name**: Inserisci il nome utente
    - **Password**: Inserisci la password

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Conferma nuovamente con il pulsante `Connetti`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Sei ora connesso al tuo database:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

## Per saperne di più

[Hosting Web - Il mio database è saturo, cosa fare?](/pages/web_cloud/web_hosting/sql_overquota_database)

Per prestazioni specializzate (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
