---
title: Erste Schritte mit MySQL und MariaDB
excerpt: Verwendung Ihrer Datenbanken
updated: 2023-07-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie möchten MySQL oder MariaDB für Ihre Datenbanken verwenden?

### Was ist eine MySQL Datenbank?

MySQL ist ein Verwaltungssystem für relationale Datenbanken und im Gegensatz zu anderen Systemen speziell für eine höhere Performance beim Lesen der Daten entwickelt.

Das System ist eine Open-Source-Software von Oracle.

### Was ist eine MariaDB Datenbank?

MariaDB ist durch eine Abspaltung (Fork) von dem Datenbankverwaltungssystem MySQL entstanden.

Das System ist 100% kompatibel und gilt insgesamt als „freier“ als das originäre MySQL. Im Gegensatz zu dem Verwaltungssystem von Oracle sind alle Bug Fixes und Roadmaps frei erhältlich.

**Diese Anleitung erklärt, wie Sie Ihre MySQL oder MariaDB Datenbanken erstellen und verwalten.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](https://www.ovh.de/cloud/cloud-databases/){.external} (auch enthalten in einem [Performance Webhosting](/links/web/hosting)).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben die [Anleitung zum Start mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) befolgt.

## In der praktischen Anwendung

### Die Verbindung mit der Datenbank herstellen

> [!primary]
>
> Bitte beachten Sie, dass dieses Angebot keinen Zugang zum Datenbankserver selbst ermöglicht, sondern zu den Datenbanken, die auf dem Server gehostet werden. Allgemeine SQL-Befehle funktionieren problemlos und Clients wie HeidiSQL oder SQuirreL SQL sind voll kompatibel.
> 

> [!primary]
>
> MariaDB ist aus MySQL heraus entstanden und die Befehle für beide Datenbanken sind identisch.
> 

Um sich mit Ihrer Datenbank zu verbinden, benötigen Sie:

- Die Adresse Ihrer Web Cloud Databases Instanz
- Den Port Ihrer Web Cloud Databases Instanz
- Den Benutzernamen Ihrer Web Cloud Databases Instanz
- Das Passwort des Benutzers
- Den Namen Ihrer Datenbank

Diese Informationen sind über Ihr [Kundencenter](/links/manager) einsehbar.

Die Anleitung finden Sie unter: [Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

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

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Füllen Sie die untenstehenden Felder aus und klicken Sie dann auf `OK`{.action}.
    - **Name**: Geben Sie einen Namen ein.
    - **Driver**: Wählen Sie `MySQL Driver`.
    - **URL**: Geben Sie die Server-Adresse und den Port wie folgt an `jdbc:mysql://server:port`.
    - **User Name**: Geben Sie den Benutzernamen ein.
    - **Password**: Geben Sie das Passwort ein.

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Bestätigen Sie erneut, indem Sie auf den Button `Connect`{.action} klicken.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Sie sind jetzt mit Ihrer Datenbank verbunden.

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

#### Per phpMyAdmin verbinden

Sie können phpMyAdmin verwenden, um den Inhalt Ihrer Datenbank zu analysieren. Installieren Sie hierfür phpMyAdmin auf Ihrem eigenen Server oder Webhosting. Achten Sie bei dieser Installation darauf, die Zugangsdaten Ihres Web Cloud Databases Servers und der gewünschten Datenbank so einzurichten, dass phpMyAdmin sich damit verbinden kann.

### Export und Import einer MySQL oder MariaDB Datenbank

- Datenbank uber die Kommandozeile exportieren

```bash
mysqldump --host=server --user=user --port=port --password=password database_name > database_name.sql
```

- Datenbank uber die Kommandozeile importieren

```bash
cat database_name.sql | mysql --host=server --user=user --port=port --password=password databse_name
```

> [!primary]
>
> In manchen Fällen kann es sein, dass das in Ihrer Web Cloud Databases Instanz verfügbare RAM nicht den gewünschten Export oder Import durchführen kann. Ist das der Fall, empfehlen wir Ihnen die Verwendung des OVHcloud Tools im Kundencenter. Folgen Sie dazu der Anleitung "[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb#datenbank-importieren)", falls erforderlich.
>

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.