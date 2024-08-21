---
title: Come utilizzare MySQL e MariaDB
excerpt: Guida all'utilizzo dei tuoi database
updated: 2023-07-26
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Vuoi utilizzare MySQL o MariaDB per i tuoi database?

### Cose un database MySQL?

MySQL è un modello di database relazionale sviluppato per ottimizzare le prestazioni in lettura.

Questo motore è open source e la sua casa madre è Oracle.

### Cose un database MariaDB?

MariaDB è un derivato (fork) del modello di database MySQL.

Questo motore è compatibile al 100% ed è stato progettato per essere più "libero" del suo fratello maggiore MySQL. Contrariamente alla versione di Oracle, tutti i bug e la roadmap sono pubblicamente accessibili.

**Scopri come creare e gestire i tuoi database MySQL o MariaDB**

## Prerequisiti

- Disporre di una [istanza Web Cloud Databases](/links/web/databases){.external} (inclusa in un'offerta di[hosting web performance](/links/web/hosting)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Consulta la guida [all'avvio di Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

## Procedura

### Connettiti al database

> [!primary]
>
> Ricordiamo che questa offerta non dà accesso all’host ma ai database ospitati su di esso. È possibile utilizzare tutti i comandi SQL generici e i software come HeidiSQL o SQuirreL SQL sono totalmente compatibili.
> 

> [!primary]
>
> MariaDB è un derivato di MySQL, è quindi possibile utilizzare gli stessi comandi per entrambi i database.
> 

Per accedere al tuo database, sono necessarie queste informazioni:

- Disporre dell'indirizzo della tua istanza Web Cloud Databases
- Aver attivato la porta della tua istanza Web Cloud Databases
- Disporre del nome utente della tua istanza Web Cloud Databases
- Disporre della password associata all'utente
- Disporre del nome del tuo database

Questi dati sono disponibili nella sezione Web del tuo [Spazio Cliente OVHcloud](/links/manager).

Se necessario, consulta la guida: [Inziare a utilizzare Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

#### Connessione da riga di comando

```bash
mysql --host=server --user=utente --port=porta --password=password nome_database
```

#### Connessione con script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=porta;dbname= nome_database', 'utente', 'password');
3. ?>
```

#### Connessione da software (SQuirreL SQL)

- Avvia SQuirreL SQL, clicca su `Aliases`{.action} e poi su `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Completa i campi qui sotto e clicca su `OK`{.action} per confermare:
    - **Name**: scegli un nome
    - **Driver**: scegli `MySQL Driver`
    - **URL**: inserisci l’indirizzo del server e la porta in formato `jdbc:mysql://server:porta`
    - **User Name**: inserisci il nome utente
    - **Password**: inserisci la password

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Clicca su `Connect`{.action} per confermare.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

A questo punto, sei connesso al tuo database:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

#### Connessione con phpMyAdmin

Puoi utilizzare phpMyAdmin per esplorare il contenuto del tuo database. installa phpMyAdmin sul tuo server o hosting Web. Durante l'installazione, assicurati di configurare correttamente le informazioni del tuo server Web Cloud Databases e del database desiderato in modo che phpMyAdmin possa connettersi.

### Esporta e importa un database MySQL o MariaDB

- **Esportare il tuo database da riga di comando**

```bash
mysqldump --host=server --user=utente --port=porta --password=password nome_database > nome_database.sql
```

- **Importare il tuo database da riga di comando**

```bash
cat nome_database.sql | mysql --host=server --user=utente --port=porta --password=password nome_database
```

> [!primary]
>
> In alcuni casi, è possibile che la RAM disponibile nella tua istanza Web Cloud Databases non permetta di realizzare l'esportazione o l'importazione desiderata. In questo caso, ti consigliamo di utilizzare il tool OVHcloud nello Spazio Cliente. Se necessario, consulta la documentazione ["Iniziare a utilizzare il servizio Web Cloud Databases"](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).