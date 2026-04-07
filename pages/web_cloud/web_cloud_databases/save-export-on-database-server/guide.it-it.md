---
title: 'Salvare ed esportare un database sul server di database'
excerpt: 'Scopri come salvare ed esportare un database dal tuo server Web Cloud Databases dallo Spazio Cliente OVHcloud o tramite phpMyAdmin'
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

Il tuo database può contenere numerose informazioni essenziali per il tuo sito Web. Per questo motivo, è fondamentale poterlo salvare o esportare.

**Questa guida ti mostra come salvare ed esportare il tuo database dal server di database.**

## Prerequisiti

- Disporre di un'[istanza Web Cloud Databases](/links/web/databases) (inclusa in un'offerta di [hosting web Performance](/links/web/hosting)).

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
> - Non è disponibile l'accesso superutente "root".
> - I comandi SQL generici funzionano normalmente e software come HeidiSQL, SQuirreL SQL o Adminer sono completamente compatibili.
>

### Salvare ed esportare un database dallo Spazio Cliente

> [!primary]
>
> - I backup vengono effettuati automaticamente una volta al giorno
> su tutti i tuoi database.
> - I backup automatici e manuali sono conservati per 30 giorni.
> Trascorso questo termine, saranno automaticamente eliminati.

#### Effettuare un backup manuale

Clicca sulle schede qui di seguito per visualizzare ciascuno dei **3** passaggi.

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
>> Nella colonna **Backup**, il numero corrisponde al numero di backup disponibili per il tuo database.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra del database, poi su `Esegui un backup adesso`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}

#### Esportare un backup

Clicca sulle schede qui di seguito per visualizzare ciascuno dei **4** passaggi.

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
>> Nella colonna **Backup**, il numero corrisponde al numero di backup disponibili per il tuo database.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra del database, poi su `Visualizza i backup`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Viene mostrata la lista dei backup disponibili. Clicca sul pulsante `...`{.action} a destra del backup scelto, poi su `Scarica il backup`{.action}.

### Salvare ed esportare un database al di fuori dello Spazio Cliente

Se la RAM disponibile sul server non consente di effettuare l'esportazione desiderata, utilizza lo strumento OVHcloud nello Spazio Cliente, che utilizza risorse esterne alla tua soluzione. Consulta la sezione "[Salvare ed esportare un database dallo Spazio Cliente](./#salvare-ed-esportare-un-database-dallo-spazio-cliente)" di questa guida.

**Clicca sul metodo di esportazione che preferisci per visualizzare il contenuto.**

/// details | Esportare un database MySQL o MariaDB da phpMyAdmin OVHcloud

Per esportare il tuo database direttamente da phpMyAdmin, è necessario effettuare prima l'accesso. Per farlo, consulta la guida "[Connettersi a un database](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)".

Una volta connesso a phpMyAdmin, clicca sul nome del database da esportare e poi sulla scheda `Esporta`{.action} in alto.

Sono disponibili due modalità di esportazione. Se non hai necessità specifiche, ti consigliamo di utilizzare la modalità **rapida** in formato **SQL**.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

///

/// details | Esportare un database MySQL o MariaDB da riga di comando

```bash
mysqldump --host=server --user=utente --port=port --password=password nome_database > nome_database.sql
```

///

/// details | Esportare un database MySQL o MariaDB da uno script PHP

```php
1. <?php echo "Il backup del database è in corso.......";
2. system("mysqldump --host=server --user=utente --port=port --password=password nome_database > nome_database.sql");
3. echo "Completato. Puoi recuperare il database tramite FTP.";
4. ?>
```

> [!warning]
>
> - Per evitare che terzi accedano a questo file contenente dati sensibili, proteggi l'accesso utilizzando la guida: [Proteggere una directory con .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Questa azione è possibile solo da un hosting condiviso OVHcloud.

///

/// details | Esportare un database PostgreSQL da riga di comando

```bash
pg_dump --host=server --port=port --user=utente --password=password nome_database > nome_database.sql
```

///

/// details | Esportare un database PostgreSQL da uno script PHP

```php
1. <?php echo "Il backup del database è in corso.......";
2. system("PGPASSWORD=password pg_dump --host=server --port=port --user=utente --password=password nome_database > nome_database.sql");
3. echo "Completato. Puoi recuperare il database tramite FTP.";
4. ?>
```

> [!warning]
>
> - Per evitare che terzi accedano a questo file contenente dati sensibili, proteggi l'accesso utilizzando la guida: [Proteggere una directory con .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Questa azione è possibile solo da un hosting condiviso OVHcloud.

///

## Per saperne di più

[Salvare ed esportare un database dallo Spazio Cliente](./#salvare-ed-esportare-un-database-dallo-spazio-cliente)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
