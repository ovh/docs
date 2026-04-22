---
title: 'Ripristinare e importare un database sul tuo server di database'
excerpt: 'Scopri come ripristinare e importare un database sul tuo server Web Cloud Databases dallo Spazio Cliente OVHcloud o tramite phpMyAdmin'
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

In caso di errore sul database, è necessario essere in grado di ripristinare un backup o importare un database locale.

**Questa guida ti mostra come ripristinare e importare il database sul tuo server di database.**

## Prerequisiti

- Disporre di una [istanza Web Cloud Databases](/links/web/databases) (inclusa in un'offerta di [hosting web Performance](/links/web/hosting))

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
> - Non è presente un accesso superutente "root".
> - I comandi SQL generici funzionano normalmente e software come HeidiSQL, SQuirreL SQL o Adminer sono completamente compatibili.

### Ripristinare e importare un database dallo Spazio Cliente

#### Ripristinare un backup esistente

<!-- CP-STEPS-START:restore-existing-backup -->
Clicca sulle schede qui sotto per visualizzare ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}.
>>
>> Nella colonna **"Backup"**, la cifra corrisponde al numero di backup disponibili per il tuo database.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra del database, poi su `Visualizza i backup`{.action}.
>>
> **Passaggio 4**
>>
>> Viene mostrata la lista dei backup disponibili. Clicca sul pulsante `...`{.action} a destra del backup scelto, poi su `Ripristina il backup`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Il ripristino comporta la sovrascrittura del contenuto del database e quindi una possibile perdita di dati. Se non sei sicuro di ciò che stai facendo, ti consigliamo di effettuare un backup prima.
<!-- CP-STEPS-END:restore-existing-backup -->

#### Importare un backup locale

<!-- CP-STEPS-START:import-local-backup -->
Clicca sulle schede qui sotto per visualizzare ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra del database, poi su `Importa un file`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> ***Hai due possibilità:***
>>
>> **1 - Importare un nuovo file**
>>
>> Clicca su **"Importa un nuovo file"**, poi su `Continua`{.action}.
>>
>> Inserisci un nome per il file importato, clicca su `Sfoglia`{.action} per selezionarlo, poi su `Invia`{.action} e infine su `Continua`{.action}.
>>
>> > [!warning]
>> >
>> > Il file deve essere in formato ".sql", ".txt" o ".gz".
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}
>>
>> Se lo desideri, seleziona **"Svuota il database attuale"** prima dell'importazione e **"Invia un'email alla fine dell'importazione"** per essere informato del completamento dell'operazione sull'indirizzo e-mail di riferimento del tuo account OVHcloud, poi clicca su `Invia`{.action}.
>>
>> **2 - Utilizzare un file esistente**
>>
>> Se hai già importato un file in precedenza, puoi scegliere l'opzione **"Importa un file esistente"**.
>>
>> Seleziona il file nel menu a tendina e clicca su `Continua`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}
>>
>> Se lo desideri, seleziona **"Svuota il database attuale"** prima dell'importazione e **"Invia un'email alla fine dell'importazione"** per essere informato del completamento dell'operazione sull'indirizzo e-mail di riferimento del tuo account OVHcloud, poi clicca su `Invia`{.action}.
<!-- CP-STEPS-END:import-local-backup -->

### Importare un database al di fuori dello Spazio Cliente

In alcuni casi, la RAM disponibile sul tuo server di database potrebbe non essere sufficiente per effettuare l'importazione desiderata al di fuori dello Spazio Cliente. In questo caso, ti consigliamo di utilizzare lo strumento OVHcloud nello Spazio Cliente. Consulta la sezione "[Ripristinare e importare un database dallo Spazio Cliente](./#ripristinare-e-importare-un-database-dallo-spazio-cliente)" di questa guida.

**Clicca sul metodo di importazione che preferisci per visualizzare il contenuto.**

/// details | Importare un database MySQL o MariaDB da phpMyAdmin

Per importare il database direttamente da phpMyAdmin, è necessario prima effettuare l'accesso seguendo la sezione "[Connettersi a un database MySQL o MariaDB](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#connettersi-a-un-database-mysql-o-mariadb)".

Una volta connesso a phpMyAdmin, seleziona il database cliccando sul suo nome.

Clicca sulla scheda `Importa`{.action}.

Seleziona il file di backup cliccando su `Sfoglia`{.action} (il file non può superare i 100 MB).

> [!primary]
>
> Ti consigliamo di frazionare il database in più file quando supera i 100 MB ed effettuare diverse importazioni da phpMyAdmin.
> L'importazione di file superiori a 100 MB può essere effettuata dallo Spazio Cliente seguendo il passaggio "[Ripristinare e importare un database dallo Spazio Cliente](./#ripristinare-e-importare-un-database-dallo-spazio-cliente)".

Lascia le opzioni predefinite e clicca su `Esegui`{.action} per avviare l'importazione.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

///

/// details | Importare un database MySQL o MariaDB da riga di comando

Questa azione è possibile solo in [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) da un hosting condiviso OVHcloud.

```bash
cat nome_database.sql | mysql --host=server --user=utente --port=port --password=password nome_database
```

///

/// details | Importare un database MySQL o MariaDB da un file PHP

```php
1. <?php
2. echo "Il tuo database è in corso di ripristino.......<br>";
3. system("cat nome_database.sql | mysql --host=server --user=utente --port=port --password=password nome_database");
4. echo "Completato. Il tuo database è attivo su questo hosting.";
5. ?>
```

> [!warning]
>
> - Per evitare che qualcuno acceda a questo file contenente dati sensibili, proteggi l'accesso seguendo la guida: [Come proteggere l'accesso a una directory tramite password?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Questa azione è possibile solo da un hosting condiviso OVHcloud.

///

/// details | Importare un database PostgreSQL da riga di comando

Questa azione è possibile solo in [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) da un hosting condiviso OVHcloud in versione stabile o superiore.

```bash
psql --host=server --port=port --user=utente --password=password nome_database < nome_database.sql
```

///

/// details | Importare un database PostgreSQL da un file PHP

```php
1. <?php
2. echo "Il tuo database è in corso di ripristino.......<br>";
3. system("PGPASSWORD=password psql --host=server --port=port --user=utente --password=password nome_database < nome_database.sql");
4. echo "Completato. Il tuo database è attivo su questo hosting.";
5. ?>
```

> [!warning]
>
> - Per evitare che qualcuno acceda a questo file contenente dati sensibili, proteggi l'accesso seguendo la guida: [Come proteggere l'accesso a una directory tramite password?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Questa azione è possibile solo da un hosting condiviso OVHcloud.

///

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
