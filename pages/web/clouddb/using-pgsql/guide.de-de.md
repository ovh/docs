---
title: Erste Schritte mit PostgreSQL
slug: erste-schritte-mit-postgresql
excerpt: Verwendung Ihrer Datenbanken
section: Erste Schritte
order: 03
---

Sie möchten mit PostgreSQL arbeiten? Dann lesen Sie hier, wie Sie Ihre Datenbanken ganz einfach erstellen und verwalten.


## Allgemeine Informationen

### Voraussetzungen

- Benötigen Sie eine Web Cloud Databases Instanz
- Lesen Sie bitte zunächst die [Anleitung zu Web Cloud Databases](../erste-schritte-mit-clouddb/)


### Was ist eine PostgreSQL Datenbank?
PostgreSQL ist ein Verwaltungssystem für relationale Datenbanken (RDBMS, Relational Database Management System). Es ist ein stabiles System und leicht erweiterbar und bietet eine hohe Datenqualität auch bei sehr großen Datenmengen. Außerdem besitzt PostgreSQL eine äußerst aktive Open Source Community.


## Die Verbindung mit der Datenbank herstellen


> [!primary]
>
> Bitte beachten Sie, dass dieses Angebot keinen Zugang zum Host-Server selbst ermöglicht, sondern zu den Datenbanken, die auf dem Server gehostet werden. Allgemeine SQL-Befehle funktionieren einwandfrei und Clients wie HeidiSQL oder SQuirreL SQL sind voll kompatibel.
> 

Um sich mit Ihrer Datenbank zu verbinden, benötigen Sie:

- Die Adresse Ihrer Datenbankinstanz
- Den Port Ihrer Datenbank
- Den Benutzernamen fûr Ihrer Datenbank
- Das Passwort Ihrer Datenbank
- Den Namen Ihrer Datenbank

Diese Informationen sind über Ihr [Kundencenter](https://www.ovh.com/manager/web/){.external} einsehbar.

Eine Anleitung finden Sie unter: [Erste Schritte mit Web Cloud Databases](../starting_with_clouddb/guide.de-de.md){.ref}


### Per Kommandozeile verbinden

```bash
psql --host=server --port=port --user=user --password=password database_name
```


### Per PHP-Skript verbinden

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Per Software (SQuirreL SQL) verbinden
- Starten Sie SQuirreL SQL und klicken Sie auf `Aliases`{.action}, danach auf `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Füllen Sie die untenstehenden Felder aus und klicken Sie dann auf `OK`{.action}
    - **Name**: Geben Sie einen Namen ein
    - **Driver**: Wählen Sie „PostgreSQL“
    - **URL**: Geben Sie die Server-Adresse und den Port wie folgt an jdbc:postgresql://server:port/database
    - **User Name**: Geben Sie den Benutzernamen ein
    - **Password**: Geben Sie das Passwort ein


![config connection](images/2.PNG){.thumbnail}

- Bestätigen Sie erneut, indem Sie auf den Button `Connect`{.action} klicken


![valid connection](images/3.PNG){.thumbnail}

Sie sind jetzt mit Ihrer Datenbank verbunden:


![config connection](images/4.PNG){.thumbnail}


### Per phpPgAdmin verbinden
*In Kürze in einer anderen Anleitung verfügbar*


## Eine PostgreSQL Datenbank exportieren

### Meine Datenbank uber die Kommandozeile exportieren

```bash
pg_dump --host=server --port=port --user=user --password=password database_name > database_name.sql
```


## Eine PostgreSQL Datenbank importieren

### Meine Datenbank uber die Kommandozeile importieren

```bash
psql --host=server --port=port --user=user --password=password database_name < database_name.sql
```
## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.