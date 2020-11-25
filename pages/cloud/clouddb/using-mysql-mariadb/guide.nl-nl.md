---
deprecated: true
title: Aan de slag met MySQL en MariaDB
slug: aan-de-slag-met-mysql-en-mariadb
excerpt: Gebruik van uw databases
---

Wilt u gebruikmaken van MySQL of MariaDB ? Leer hoe u met gemak uw databases kunt creëren en beheren!


## Overzicht

### Vereisten vooraf&#58;


> [!primary]
>
> Om deze handleiding te volgen heeft u nodig:
> - Een CloudDB instance
> - Kennis van de CloudDB handleiding: docs/cloud/clouddb/debuter-avec-clouddb
>

### What is een MySQL database?
MySQL is een relational database management system, ontwikkeld voor betere read performance.

Dit is een open-source engine, met Oracle als parent company.


### What is een MariaDB database?
MariaDB is afgeleid van MySQL.

Deze engine is 100% compatibel en is 'vrijer' dan MySQL. Alle bugs en roadmaps hebben vrije toegang, in tegenstelling tot de Oracle versie. Bovendien is de storage database InnoDB vervangen met XtraDB en andere optimalisaties; dit belooft betere performance.


## Inloggen op de database


> [!primary]
>
> Let op: deze dienst geeft u geen toegang tot de Host maar tot de de databases die worden gehost op de Host. Algemene SQL commands functioneren prima, en HeidiSQL of SQuirreL SQL software is geheel compatibel.
> 



> [!primary]
>
> Aangezien MariaDB een zijtak is van MySQL zijn de commands hetzelfde voor de 2 soorten database.
> 

Voor het inloggen op uw database moet u de volgende informatie bij de hand hebben:

- Het adres van uw database instance
- Uw database port
- Uw database gebruikersnaam
- Uw database wachtwoord
- Uw database naam

Al deze informatie is te vinden vanaf het [Web Control Panel](https://www.ovh.com/manager/web/){.external}.

De volgende handleiding is ook beschikbaar: [](debuter-avec-clouddbguide.nl-nl.md){.ref}


### Verbinden vanaf de command line

```bash
mysql --host=server --user=user --port=port --password=password database_name
```


### Verbinden vanaf een PHP script

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Verbinden vanaf software (SQuirreL SQL)
- Open SQuirreL SQL en klik op `Aliases`{.action}, vervolgens op on `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Vul de onderstaande velden in en bevestig dan door te klikken op `OK`{.action} :
    - **Name**: Kies een naam
    - **Driver**: Kies "PostgreSQL"
    - **URL**: Voer het serveradres en de port in, in jdbc:postgresql://server:port/database
    - **User Name**: Voer de gebruikersnaam in
    - **Password**: Voer het wachtwoord in


![config connection](images/2.PNG){.thumbnail}

- Bevestig opnieuw door te klikken op de knop `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

U zult nu verbonden zijn met uw database:


![config connection](images/4.PNG){.thumbnail}


### Verbinden via phpMyAdmin
*Binnenkort beschikbaar in een andere handleiding.*


## Exporteer een MySQL of MariaDB database

### Exporteer uw database via de command line

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```


## Importeer een MySQL of MariaDB database

### Importeer uw database via de command line

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password database_name
```