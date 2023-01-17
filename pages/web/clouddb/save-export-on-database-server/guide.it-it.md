---
title: Salvare ed esportare un database sul tuo server di database
slug: salvare-esportare-un-database
excerpt: Come salvare ed esportare il tuo database
section: Configurazione
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/03/2023**

## Obiettivo

Il tuo database può contenere molte informazioni essenziali per il tuo sito. E' quindi essenziale poter salvaguardare o esportare la merce.

**Questa guida ti mostra come salvare ed esportare il tuo database dal tuo server di database.**

## Prerequisiti

- Disporre di una [istanza Web Cloud Databases](https://www.ovh.it/cloud/cloud-databases/){.external} (inclusa in un'offerta di[hosting web Performance](https://www.ovhcloud.com/fr/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

> [!primary]
>
> Attenzione: le soluzioni [Web Cloud Databases](https://www.ovh.it/cloud/cloud-databases/){.external} non danno accesso al sistema di gestione dei database, ma ai database ospitati su di esso.
> <br> - Attenzione: non sono presenti accessi "root".
> <br> - I comandi SQL generici funzionano normalmente e software come HeidiSQL, SQuirreL o Adminer sono completamente compatibili.
>

### Salvare ed esportare un database dallo Spazio Cliente

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca sulla scheda `Web Cloud` e poi su `Database`{.action}. Seleziona il nome del tuo database server. Clicca sulla scheda `Database`.

Al livello della colonna **Backup**, la cifra corrisponde al numero di backup disponibili per il tuo database.

> [!primary]
>
> - I backup vengono effettuati automaticamente una volta al giorno
> su tutti i tuoi database.
> - I backup automatici e manuali sono conservati per 30 giorni.
> Trascorso questo termine, saranno automaticamente eliminate.

#### 1\. Effettua un backup manuale 

Clicca sui tre puntini `...`{.action} in corrispondenza del database e seleziona `Salva adesso`{.action}.

![Web Cloud Databases](images/private-sql-save01.png){.thumbnail}

#### 2\. Esporta un backup

Clicca sui tre puntini `...`{.action} a destra del database e seleziona `Mostra i backup`{.action}

![Web Cloud Databases](images/private-sql-dl01.png){.thumbnail}

Visualizzi la lista dei backup disponibili, clicca sul pulsante `...`{.action} a destra del backup scelto e poi su `Scarica il backup`{.action} per recuperare questo backup.

### Salvare ed esportare un database al di fuori dello Spazio Cliente

#### 1\. Esportazione di database MySQL o MariaDB

 In alcuni casi, la RAM disponibile sul tuo server di database potrebbe non consentire di effettuare l'esportazione desiderata. In questo caso, ti consigliamo di utilizzare il tool OVHcloud nello Spazio Cliente. che permetterà l'utilizzo di risorse esterne alla tua offerta per effettuare questa operazione. Consulta la sezione "[Salva ed esportare un database dallo Spazio Cliente](./#salvare-ed-esportare-un-database-dallo-spazio-cliente)" di questa guida.

##### 1\.1 Esportare il mio database MySQL o MariaDB da phpMyAdmin OVHcloud 

Per esportare il tuo database direttamente da phpMyAdmin, è necessario effettuare l'accesso. Per effettuare questa operazione, consulta la guida ["Connettersi a un database"](../connessione-database-server-bdd).

Una volta connesso a phpMyAdmin, clicca sul nome del database da esportare e poi sulla scheda `Esporta`{.action} in alto.

Avete due possibili modalità di esportazione. Se non hai necessità specifiche, ti consigliamo di utilizzare la modalità **rapida** in formato **SQL**.

![Web Cloud Databases](images/private-sql-export01.png){.thumbnail}

##### 1\.2 Esporta il tuo database MySQL o MariaDB da riga di comando

```bash
mysqldump —host=server —user=utente —port=port —password=password nome_database > nome_database.sql
```

##### 1\.3 Esportare il mio database MySQL o MariaDB da uno script PHP

```php
1. Il backup del tuo database è in corso.......";
2. system("mysqldump —host=server —user=utente —port=port —password=password nome_database > nome_database.sql");
3. echo "E' finita. È possibile recuperare il database tramite FTP";
4. ?>
```

> [!warning]
>
> - Per evitare che un terzo acceda al file con dati sensibili, consulta questa guida per rendere [sicuro l'accesso](https://docs.ovh.com/it/hosting/condividi-htaccess-come-proteggere-laccesso-a-una-cartella-tramite-autenticazione/)
> - Questa azione è possibile solo da un hosting OVHcloud condiviso.
>

#### 2\. Esportazione e importazione di database PostgreSQL dallo Spazio Cliente

 In alcuni casi, la RAM disponibile sul tuo server di database potrebbe non consentire di effettuare l'esportazione desiderata. In questo caso, ti consigliamo di utilizzare il tool OVHcloud nello Spazio Cliente. che permetterà l'utilizzo di risorse esterne alla tua offerta per effettuare questa operazione. Consulta la sezione ["Salva ed esportare un database dallo Spazio Cliente](./#salvare-ed-esportare-un-database-dallo-spazio-cliente)" di questa guida.
 
##### 2\.1 Esporta il tuo database PostgreSQL da riga di comando

```bash
pg_dump —host=server —port=port —user=utente —password=password nome_database > nome_database.sql
```

##### 2\.2 Esporta il tuo database PostgreSQL da uno script PHP

```php
1. Il backup del tuo database è in corso.......";
2. system("PGPASSWORD=password pg_dump —host=server —port=port—user=utente —password=password nome_database > nome_database.sql");
3. echo "E' finita. È possibile recuperare il database tramite FTP";
4. ?>
```

> [!warning]
>
> - Per evitare che un terzo acceda al file con dati sensibili, consulta questa guida per rendere [sicuro l'accesso](https://docs.ovh.com/it/hosting/condividi-htaccess-come-proteggere-laccesso-a-una-cartella-tramite-autenticazione/)
> - Questa azione è possibile solo da un hosting OVHcloud condiviso.
>

## Per saperne di più

[Ripristinare e importare un database sul tuo server di database](../ripristinare-importare-database)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.