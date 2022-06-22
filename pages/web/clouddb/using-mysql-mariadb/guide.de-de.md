---
title: Erste Schritte mit MySQL und MariaDB
slug: erste-schritte-mit-mysql-und-mariadb
excerpt: Verwendung Ihrer Datenbanken
section: Erste Schritte
order: 02
---

Sie möchten mit MySQL oder MariaDB arbeiten? Dann lesen Sie hier, wie Sie Ihre Datenbanken ganz einfach erstellen und verwalten.


## Allgemeine Informationen

### Voraussetzungen

- Benötigen Sie eine CloudDB Instanz
- Lesen Sie bitte zunächst die [Anleitung zu CloudDB](../erste-schritte-mit-clouddb/)

### Was ist eine MySQL Datenbank?
MySQL ist ein Verwaltungssystem für relationale Datenbanken und im Gegensatz zu anderen Systemen speziell für eine höhere Performance beim Lesen der Daten entwickelt.

Das System ist eine Open-Source-Software und stammt aus dem Hause Oracle.


### Was ist eine MariaDB Datenbank?
MariaDB ist durch eine Abspaltung (Fork) von dem Datenbankverwaltungssystem MySQL entstanden.

Das System ist 100 % kompatibel und gilt insgesamt als „freier“ als seine große Schwester MySQL. Im Gegensatz zu dem Verwaltungssystem von Oracle sind alle Bug Fixes und Roadmaps frei erhältlich. Außerdem wurde das Storage-Engine InnoDB durch XtraDB ersetzt, was neben anderen Verbesserungen die Performance weiter erhöht.


## Die Verbindung mit der Datenbank herstellen


> [!primary]
>
> Bitte beachten Sie, dass dieses Angebot keinen Zugang zum Host-Server selbst ermöglicht, sondern zu den Datenbanken, die auf dem Server gehostet werden. Allgemeine SQL-Befehle funktionieren einwandfrei und Clients wie HeidiSQL oder SQuirreL SQL sind voll kompatibel.
> 



> [!primary]
>
> MariaDB ist aus MySQL heraus entstanden und die Befehle für beide Datenbanken sind genau dieselben.
> 

Um sich mit Ihrer Datenbank zu verbinden, benötigen Sie:

- Die Adresse Ihrer Datenbankinstanz
- Den Port Ihrer Datenbank
- Den Benutzernamen Ihrer Datenbank
- Das Passwort Ihrer Datenbank
- Den Namen Ihrer Datenbank

Diese Informationen sind über Ihr [Kundencenter](https://www.ovh.com/manager/web/){.external} einsehbar.

Eine Anleitung finden Sie unter: [Erste Schritte mit CloudDB](../starting_with_clouddb/guide.de-de.md){.ref}


### Per Kommandozeile verbinden

```bash
mysql --host=server --user=user --port=port --password=password database_name
```


### Per PHP-Skript verbinden

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Per Software (SQuirreL SQL) verbinden
- Starten Sie SQuirreL SQL und klicken Sie auf `Aliases`{.action}, danach auf `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Füllen Sie die untenstehenden Felder aus und klicken Sie dann auf `OK`{.action}
    - **Name**: Geben Sie einen Namen ein
    - **Driver**: Wählen Sie „MySQL Driver“
    - **URL**: Geben Sie die Server-Adresse und den Port wie folgt an jdbc:mysql://server:port
    - **User Name**: Geben Sie den Benutzernamen ein
    - **Password**: Geben Sie das Passwort ein


![config connection](images/2.PNG){.thumbnail}

- Bestätigen Sie erneut, indem Sie auf den Button `Connect`{.action} klicken


![valid connection](images/3.PNG){.thumbnail}

Sie sind jetzt mit Ihrer Datenbank verbunden:


![config connection](images/4.PNG){.thumbnail}


### Per phpMyAdmin verbinden
*In Kürze in einer anderen Anleitung verfügbar*


## Eine MySQL oder MariaDB Datenbank exportieren

### Meine Datenbank uber die Kommandozeile exportieren

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```


## Eine MySQL oder MariaDB Datenbank importieren

### Meine Datenbank uber die Kommandozeile importieren

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password databse_name
```
