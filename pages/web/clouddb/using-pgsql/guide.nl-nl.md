---
deprecated: true
title: Aan de slag met PostgreSQL
slug: aan-de-slag-met-postgresql
excerpt: Using Your Databases
---

Wilt u gebruikmaken van PostgreSQL? Leer hoe u uw databases met gemak kunt beheren!


## Overzicht

### Vereisten vooraf&#58;


> [!primary]
>
> On deze handleiding te volgen heeft u nodig:
> - Een CloudDB instance
> - Kennis van de CloudDB handleiding: docs/cloud/clouddb/debuter-avec-clouddb
>

### What is een PostgreSQL database?
PostgreSQL is een object-relational database management system (ORDBMS). Het is een betrouwbaar en uitbreidbaar systeem, welke grote volumes aan data kan bewerken. Ook heeft het een zeer actieve community.


## Inloggen op de database


> [!primary]
>
> Let op: deze dienst geeft geen toegang tot de Host maar tot de databases die gehost worden op de Host. Algemene SQL commands functioneren prima, en HeidiSQL of SQuirreL SQL software is geheel compatibel.
> 

Om in te loggen tot uw database moet u de volgende informatie bij de hand hebben:

- Het adres van uw database instance
- Uw database port
- Uw database gebruikersnaam
- Uw database wachtwoord
- Uw database naam

Al deze informatie is beschikbaar in het [Web Control Panel](https://www.ovh.com/manager/web/){.external}.

Deze handleiding is ook beschikbaar: [](debuter-avec-clouddbguide.nl-nl.md){.ref}


### Verbinden via de command line

```bash
psql --host=server --port=port --user=user --password=password database_name
```


### Verbinden vanaf een PHP script

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Verbinden vanaf software (SQuirreL SQL)
- Start SQuirreL SQL en klik op `Aliases`{.action}, en vervolgend op `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Vul de onderstaande velden in en bevestig door te klikken op `OK`{.action} :
    - **Name**: Kies een naam
    - **Driver**: Kies "PostgreSQL"
    - **URL**: Voer serveradres en port in, in jdbc:postgresql://server:port/database
    - **User Name**: Voer gebruikersnaam in
    - **Password**: Voer wachtwoord in


![config connection](images/2.PNG){.thumbnail}

- Bevestig opnieuw door te klikken op de knop `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

U zult nu verbonden zijn met uw database:


![config connection](images/4.PNG){.thumbnail}


### Verbinden via phppgAdmin
*Binnenkort beschikbaar in een andere handleiding.*


## Exporteer een PostgreSQL database

### Exporteer uw database via de command line

```bash
pg_dump --host=server --port=port --user=username --password=password database_name > database_name.sql
```


## Importeer een PostgreSQL database

### Importeer uw database via de command line

```bash
psql --host=server --port=port --user=user --password=password database_name < database_name.sql
```