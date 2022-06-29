---
title: Erste Schritte mit MySQL und MariaDB
slug: erste-schritte-mit-mysql-und-mariadb
excerpt: Verwendung Ihrer Datenbanken
section: Erste Schritte
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 29.06.2022**

## Ziel

Sie möchten MySQL oder MariaDB für Ihre Datenbanken verwenden?

### Was ist eine MySQL Datenbank?

MySQL ist ein Verwaltungssystem für relationale Datenbanken und im Gegensatz zu anderen Systemen speziell für eine höhere Performance beim Lesen der Daten entwickelt.

Das System ist eine Open-Source-Software und stammt aus dem Hause Oracle.

### Was ist eine MariaDB Datenbank?

MariaDB ist durch eine Abspaltung (Fork) von dem Datenbankverwaltungssystem MySQL entstanden.

Das System ist 100 % kompatibel und gilt insgesamt als „freier“ als seine große Schwester MySQL. Im Gegensatz zu dem Verwaltungssystem von Oracle sind alle Bug Fixes und Roadmaps frei erhältlich. Außerdem wurde das Storage-Engine InnoDB durch XtraDB ersetzt, was neben anderen Verbesserungen die Performance weiter erhöht.

**Erfahren Sie, wie Sie Ihre MySQL oder MariaDB Datenbanken erstellen und verwalten**

## Voraussetzungen

- Sie verfügen über eine [CloudDB Instanz](https://www.ovh.de/cloud/cloud-databases/){.external} (in einem [Performance Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot enthalten)
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt
- Sie haben die [Anleitung für den Start von CloudDB](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/)

## In der praktischen Anwendung

### Die Verbindung mit der Datenbank herstellen

> [!primary]
>
> Bitte beachten Sie, dass dieses Angebot keinen Zugang zum Host-Server selbst ermöglicht, sondern zu den Datenbanken, die auf dem Server gehostet werden. Allgemeine SQL-Befehle funktionieren einwandfrei und Clients wie HeidiSQL oder SQuirreL SQL sind voll kompatibel.
> 

> [!primary]
>
> MariaDB ist aus MySQL heraus entstanden und die Befehle für beide Datenbanken sind genau dieselben.
> 

Um sich mit Ihrer Datenbank zu verbinden, benötigen Sie:

- Die Adresse Ihrer CloudDB Instanz
- Den Port Ihrer CloudDB Instanz
- Den Benutzernamen Ihrer CloudDB Instanz
- Sie verfügen über das dem Benutzer zugewiesene Passwort
- Den Namen Ihrer Datenbank

Diese Informationen sind über Ihr [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) einsehbar.

Eine Anleitung finden Sie unter: [Erste Schritte mit CloudDB](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/).

#### Per Kommandozeile verbinden

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

#### Per PHP-Skript verbinden

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Per Software (SQuirreL SQL) verbinden

- Starten Sie SQuirreL SQL und klicken Sie auf `Aliases`{.action}, danach auf `+`{.action}.

![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Füllen Sie die untenstehenden Felder aus und klicken Sie dann auf `OK`{.action}:
    - **Name**: Geben Sie einen Namen ein
    - **Driver**: Wählen Sie `MySQL Driver`
    - **URL**: Geben Sie die Server-Adresse und den Port wie folgt an `jdbc:mysql://server:port`
    - **User Name**: Geben Sie den Benutzernamen ein
    - **Password**: Geben Sie das Passwort ein

![config connection](images/2.PNG){.thumbnail}

- Bestätigen Sie erneut, indem Sie auf den Button `Connect`{.action} klicken.

![valid connection](images/3.PNG){.thumbnail}

Sie sind jetzt mit Ihrer Datenbank verbunden:

![config connection](images/4.PNG){.thumbnail}

#### Per phpMyAdmin verbinden

Sie können phpMyAdmin verwenden, um den Inhalt Ihrer Datenbank zu analysieren. Installieren Sie hierfür phpMyAdmin auf Ihrem eigenen Server oder Webhosting. Achten Sie bei dieser Installation darauf, die Informationen Ihres CloudDB Servers und der gewünschten Datenbank so einzurichten, dass phpMyAdmin sich damit verbinden kann.


### Export und Import einer MySQL oder MariaDB Datenbank

- Meine Datenbank uber die Kommandozeile exportieren

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```

- Meine Datenbank uber die Kommandozeile importieren

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password databse_name
```

> [!primary]
>
> In manchen Fällen kann es sein, dass das in Ihrer CloudDB Instanz verfügbare RAM nicht den gewünschten Export oder Import durchführen kann. Ist das der Fall, empfehlen wir Ihnen die Verwendung des OVHcloud Tools im Kundencenter. Lesen Sie die Anleitung ["Erste Schritte mit CloudDB "](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/#datenbank-importieren){.external}, falls erforderlich.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
