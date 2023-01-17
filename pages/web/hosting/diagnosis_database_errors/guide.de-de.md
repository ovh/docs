---
title: Die häufigsten Datenbankfehler beheben
excerpt: Erfahren Sie hier, wie Sie Fehler in Zusammenhang mit Datenbanken beheben
slug: datenbanken-fehler-beheben
section: Diagnose
order: 04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 01.03.2023**

## Ziel 

Bei der Nutzung von Datenbanken können Unregelmäßigkeiten auftreten. Fehler beim Datenbankzugriff werden entweder direkt auf Ihrer Website oder in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) sowie im [phpMyAdmin Interface](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen) angezeigt.

**Diese Anleitung erklärt, wie Sie Fehler bei der Verwendung von Datenbanken mit OVHcloud Webhostings beheben können.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- Sie verwenden einen unserer Datenbankdienste: [Web Cloud](https://www.ovhcloud.com/de/web-hosting/options/start-sql/) oder [Web Cloud Databases](https://www.ovh.de/cloud/cloud-databases/).

## In der praktischen Anwendung

### Verbindungsfehler "Error establishing a database connection"

#### Auf aktuelle Störungen überprüfen

Überprüfen Sie zunächst auf [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/), ob Ihr Rechenzentrum, Hosting-Cluster oder Web Cloud Databases Server von einer Störung auf der OVHcloud Infrastruktur betroffen sind.

> [!primary]
>
> Um die dazu nötigen Informationen einzusehen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie zum Bereich `Web Cloud`{.action}.
>
> - Das **Rechenzentrum** und den *Filer* Ihres Webhostings finden Sie im Tab `Allgemeine Informationen`{.action}: Wählen Sie das Hosting unter `Hosting-Pakete`{.action} aus und wechseln zum Tab `Allgemeine Informationen`{.action}.
> - Das **Cluster** Ihres Webhostings kann im Tab `FTP-SSH`{.action} eingesehen werden. Die Cluster-Kennung erscheint als Teil des Servernamens unter `FTP-Server`.
> - Um den Namen des **Web Cloud Databases** zu finden, klicken Sie unter `Datenbanken`{.action} auf den betreffenden Datenbankdienst. Die Server-Bezeichung (`Hostname`) befindet sich unter `SQL` im Feld `Verbindungsinformationen` des Tabs `Allgemeine Informationen`{.action}.
>

#### Verbindungsdaten Ihrer Datenbank überprüfen <a name="config_file"></a>

Verbinden Sie sich über [FTP](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) mit dem Hosting-Speicherplatz und bearbeiten Sie die Konfigurationsdatei Ihrer Website (bei einer WordPress-Seite wäre es beispielsweise die Datei **wp-config.php** in dem Verzeichnis Ihrer Website).

> [!warning]
>
> Der Name und der Inhalt der für die Datenbankverbindungsinformationen relevanten Datei hängt von dem für die Website verwendeten CMS ab. Dies liegt nicht im Verantwortungsbereich von OVHcloud.
>
> Wir empfehlen Ihnen daher, die Ressourcen des [CMS-Anbieters](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/) heranzuziehen oder bei Bedarf einen [[spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/)](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

Stellen Sie anschließend die **exakte** Übereinstimmung zwischen den Zugangsdaten zu [phpMyAdmin](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen) und denen der Konfigurationsdatei Ihrer Website sicher.

Ändern Sie bei Bedarf das [Passwort Ihrer Datenbank](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/).

#### Beispiel für WordPress

Wenn Ihre Website einen Fehler des Typs **"Error establishing a database connection"** ausgibt und die zugehörige Infrastruktur nicht von einer [Störung](https://web-cloud.status-ovhcloud.com/) betroffen ist, loggen Sie sich mit [FTP](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) ein und öffnen Sie dann das Verzeichnis in dem sich die Website befindet ("www" im Standardfall).

Wenn es sich um eine WordPress Website handelt, öffnen Sie die Datei `wp-config.php`.

```php
define('DB_NAME', 'my_database');
 
/** MySQL database username */
define('DB_USER', 'my_user');
 
/** MySQL database password */
define('DB_PASSWORD', 'my_password');
 
/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

In Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) klicken Sie im Bereich `Hosting-Pakete`{.action} auf Ihren Dienst und prüfen im Tab `Datenbanken`{.action} die Übereinstimmung der hier angezeigten Elemente mit den Daten in der Datei `wp-config.php`:

- **my_database** muss dem `Namen der Datenbank` entsprechen;
- **my_user** muss dem `Benutzernamen` entsprechen;
- **my_password** entspricht dem [Passwort Ihrer Datenbank](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/);
- **my_server.mysql.db** muss dem entsprechen, was unter `Server-Adresse` angegeben ist.

> [!primary]
>
> Wenn Sie mit diesen Änderungen den Zugriff auf Ihre Website nicht wiederherstellen können, legen Sie ein [Datenbank-Backup an](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/) und setzen Sie dann in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) die Datenbank [auf einen früheren Zeitpunkt zurück](https://docs.ovh.com/de/hosting/datenbank-importieren/#datenbank-uber-das-kundencenter-wiederherstellen-und-importieren).
>
> Kontaktieren Sie gegebenenfalls einen [[spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/)](https://partner.ovhcloud.com/de/directory/). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Überschreitung der Datenbank-Quota

Sie haben eine E-Mail darüber erhalten, dass die Datenmenge Ihrer Datenbank die erlaubte Grenze überschreitet. Ihre Datenbank wurde deshalb auf Read-only gesetzt, was Änderungen an der Website verhindert.

![overquota](images/mail_overquota.png){.thumbnail}

Sie können Ihre Datenbank mit drei Methoden entsperren:

#### Methode 1: Ihren Dienst upgraden

Wenn Sie über ein Webhosting **Basic** oder **Pro** verfügen, empfehlen wir Ihnen, auf das [nächsthöhere Hosting-Angebot](https://www.ovhcloud.com/de/web-hosting/) umzusteigen. Diese Erweiterung erhöht auch die Größe Ihrer Datenbank, was sie automatisch wieder öffnet. Diese Methode ist die einfachste und erfordert keine besondere technische Kompetenz.

> [!warning]
>
> Die Vergrößerung Ihrer Datenbank kann auf eine Fehlfunktion im internen Code Ihrer Website zurückzuführen sein.
>
> Eine solche Anomalie kann zu einem dauerhaften Anschwellen Ihrer Datenbank führen. Ein Wechsel des Webhosting-Abos wird dies nicht beheben.
>
> Daher empfehlen wir Ihnen, falls Sie eine plötzliche Vergrößerung Ihrer Datenbank feststellen oder wenn Sie beispielsweise nur einen Blog betreiben, der nicht viel Datenvolumen verbraucht, sobald möglich einen [[spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/)](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Wir werden Sie in diesem Fall nicht unterstützen können.
>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, klicken Sie auf `Hosting-Pakete`{.action} und anschließend auf das betreffende Hosting. Klicken Sie auf den Button `...`{.action} rechts im Bereich `Abo`{.action} unter `Angebot`{.action}, dann auf `Upgraden`{.action}.

Wenn Sie ein Webhosting **Performance** verwenden, gehen Sie zu [Methode 2](#method2).

#### Methode 2: Ihre Daten auf eine größere Datenbank übertragen <a name="method2"></a>

Sie können Ihre Daten auch auf eine neue Datenbank migrieren:

- Wenn nötig, bestellen Sie einen [Datenbank-Dienst](https://www.ovhcloud.com/de/web-hosting/options/start-sql/) mit höherer Kapazität und [erstellen Sie die neue Datenbank](https://docs.ovh.com/de/hosting/datenbank-erstellen/).
- Führen Sie einen [Export Ihrer Daten](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/) durch und [importieren Sie diese](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/) in die neue Datenbank.
- Integrieren Sie die Login-Daten der neuen Datenbank in die [Konfigurationsdatei](#config_file) Ihrer Website.

> [!primary]
>
> Wenn Sie über ein **Performance** Hosting-Paket verfügen, können Sie auch [kostenlos einen Web Cloud Databases Server aktivieren](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/#aktivierung-des-in-ihrem-webhosting-angebot-enthaltenen-clouddb-servers).
>

#### Methode 3: Unnötige Daten löschen

Loggen Sie sich nach einer [Sicherung Ihrer Datenbank](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/) über [phpMyAdmin](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen) ein, um unnötige Daten mithilfe der Befehle Drop, Delete und Truncate zu löschen.

Lassen Sie dann die Quota im Tab `Datenbanken`{.action} des betreffenden Hostings neu berechnen: Klicken Sie auf `...`{.action} und dann auf `Das Quota neu berechnen`{.action}.

> [!warning]
>
> Dieser Vorgang erfordert fortgeschrittene Kenntnisse. Wir empfehlen Ihnen, falls nötig einen [[spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/)](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Wir werden Ihnen in dieser Angelegenheit nicht weiterhelfen können.
>

#### Methode 4: Ihre Datenbank optimieren

Um Ihre Datenbank zu optimieren, folgen Sie den Anweisungen in unserer Anleitung “[Konfigurieren Ihres Datenbankservers](https://docs.ovh.com/de/hosting/konfigurieren-ihres-datenbank-servers/#ihre-datenbanken-optimieren_1)“. Lassen Sie dann die Quota im Tab `Datenbanken`{.action} des betreffenden Hostings neu berechnen: Klicken Sie auf `...`{.action} und dann auf `Das Quota neu berechnen`{.action}.

> [!warning]
>
> Wenn die Optimierung Ihrer Datenbank nicht ausreicht, um den Zugriff auf Ihre Website zu entsperren, empfehlen wir Ihnen, unsere [User Community](https://community.ovh.com/en/) oder die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Überschreitungen der RAM-Kapazität

In der unten abgebildeten Nachricht im Bereich `Datenbanken`{.action} in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) wird darauf hingewiesen, dass Ihre [Web Cloud Databases](https://www.ovh.de/cloud/cloud-databases/) zu viele Ressourcen auf der OVHcloud Infrastruktur verbraucht hat:

![quota_exceeding](images/quota_exceeding.png){.thumbnail}

In diesem Fall können Sie die [RAM-Kapazität](https://docs.ovh.com/de/hosting/konfigurieren-ihres-datenbank-servers/#wechseln-des-datenbank-angebots_1) im Bereich `Datenbanken`{.action} Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erhöhen. Klicken Sie im Tab `Allgemeine Informationen`{.action} auf die Schaltfläche `...`{.action} im Bereich `RAM`.

> [!warning]
>
> Diese Erweiterung des RAM funktioniert nur bei einer Web Cloud Databases, die nicht Teil eines Performance Webhostings ist. Wenn Sie die RAM-Kapazität einer in den [Performance Angeboten](https://www.ovhcloud.com/de/web-hosting/performance-offer/){.external} enthaltenen Datenbank erhöhen möchten, müssen Sie diese zuerst abtrennen.
> 
> Loggen Sie sich zum Abtrennen der Datenbank in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und öffnen Sie `Web Cloud`{.action}. Klicken Sie links auf `Hosting-Pakete`{.action} und wählen Sie das Webhosting mit der aktiven Web Cloud Databases aus.
>
> Klicken Sie im Bereich `Konfiguration` auf den Button `...`{.action} rechts neben `Private Datenbank`. Klicken Sie dann auf `Abtrennen`{.action}.
>

Sie können Ihre Datenbank auch weiter optimieren, indem Sie die Anweisungen in unserer Anleitung "[Ihren Datenbankserver konfigurieren](https://docs.ovh.com/de/hosting/konfigurieren-ihres-datenbank-servers/#uberprufung-der-ram-nutzung)" befolgen.

> [!primary]
>
> Wenn Sie Schwierigkeiten haben, die Ressourcennutzung auf Ihrem Datenbankserver zu reduzieren, und diese nicht erhöhen möchten, kontaktieren Sie unsere [User Community](https://community.ovh.com/en/) oder die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Fehler beim Import von Datenbanken

#### “Access denied for user to database“

>
> **"#1044 - Access denied for user to database"**
>

Diese Fehlermeldung bedeutet, dass die Datenbank, die Sie zu importieren versuchen, Elemente enthält, die auf der Shared Hosting Infrastruktur von OVHcloud nicht zulässig sind. 

Vergewissern Sie sich zunächst, dass Ihre Datenbank leer ist. Klicken Sie auf `...`{.action} und dann auf `Das Quota neu berechnen`{.action} im Tab `Datenbanken`{.action}. (Falls Sie zunächst die Daten sichern möchten, folgen Sie den Instruktionen zum [Datenbank-Backup](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/).)

Sie können beim [Datenbank-Import](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/#eigene-backup-datei-uber-das-kundencenter-importieren) auch die Option `Datenbank leeren`{.action} anhaken. 

![database-import](images/database-import-empty.png){.thumbnail}

Kontaktieren Sie gegebenenfalls unsere [Community](https://community.ovh.com/en/) oder einen [[spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/)](https://partner.ovhcloud.com/de/directory/). Wir werden Sie in diesem Fall nicht unterstützen können.

> [!success]
>
> Sie können keinen **Trigger** im Importskript Ihrer Datenbank verwenden. Importieren Sie in diesem Fall Ihre Datenbank auf einen [Web Cloud Databases Dienst](https://www.ovh.de/cloud/cloud-databases/).
>

Außerdem ist folgende Abfrage nicht zulässig:

```mysql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```
Ersetzen Sie sie mit der Zeile:

```mysql
USE `Database-Name`;
```

Ersetzen Sie `Database-Name` mit dem Namen der Datenbank aus Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


#### “MySQL server has gone away“

>
> **"404 ERROR MySQL server has gone away"**
>


Diese Fehlermeldung wird beim [Import einer Datenbank](https://docs.ovh.com/de/hosting/datenbank-importieren/#eine-lokale-sicherung-importieren) auf [Web Cloud Databases](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/) angezeigt. Dies hängt meist mit der Menge der zu importierenden Daten oder mit einer mangelnden Optimierung der SQL-Abfragen im Importskript zusammen.

Um dieses Problem zu beheben können Sie Maßnahmen anwenden:

- Erhöhung der [Arbeitsspeicherkapazität (RAM)](https://docs.ovh.com/de/hosting/konfigurieren-ihres-datenbank-servers/#wechseln-des-datenbank-angebots_1). Gehen Sie hierzu zum [Web Cloud Databases](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/) im Bereich `Datenbanken`{.action} Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Klicken Sie dann auf die Schaltfläche `...`{.action} im Bereich `RAM` und wählen Sie `RAM-Menge ändern`{.action}.

- Splitten Sie Ihre Datenbank, um sie dann über mehrere Operationen zu importieren. (Für Fragen zu den durchzuführenden Operationen kontaktieren Sie unsere [User Community](https://community.ovh.com/en/) oder die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.)

- [Optimieren](https://docs.ovh.com/de/hosting/konfigurieren-ihres-datenbank-servers/#ihre-datenbanken-optimieren_1) Sie die Datenbank und wiederholen Sie die Export/Import-Operationen.

### Kein Zugriff auf phpMyAdmin

#### “Access denied for user“

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Diese Fehlermeldung kann bei der Verbindung zu Ihrer Datenbank mit [phpMyAdmin](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen) angezeigt werden. Sie gibt an, dass die eingegebenen Login-Daten falsch sind.

![access_denied_for_user](images/access_denied_for_user.png){.thumbnail}

Überprüfen Sie in diesem Fall die [Login-Daten](https://docs.ovh.com/de/hosting/datenbank-verbindung-auf-bdd/#in-der-praktischen-anwendung) und ändern Sie bei Bedarf das [Passwort Ihrer Datenbank](https://docs.ovh.com/de/hosting/datenbank-passwort-aendern/).

#### “Too many connections“

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

Die maximale Anzahl an aktiven Verbindungen für die mit den Shared Hosting Angeboten gelieferten Datenbanken ([StartSQL](https://www.ovhcloud.com/de/web-hosting/options/start-sql/)) beträgt **30**.

Diese Zahl erhöht sich auf **200** für Datenbanken auf [Web Cloud Databases](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/). (Diese Einstellung kann im Bereich `Konfiguration`{.action} Ihres Datenbankdienstes geändert werden).

Diese Nachricht erscheint bei der [Verbindung über phpMyAdmin](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen), wenn diese maximale Anzahl an Verbindungen überschritten wird.

In dieser Situation müssen Sie [Ihre Datenbanken optimieren](https://docs.ovh.com/de/hosting/konfigurieren-ihres-datenbank-servers/#ihre-datenbanken-optimieren_1), um die Anzahl der aktiven Verbindungen zu reduzieren.

> [!warning]
>
> Wenn Sie Fragen zu den notwendigen Schritten zur Reduzierung der Anzahl aktiver Verbindungen auf Ihrer Datenbank haben, kontaktieren Sie unsere [User Community](https://community.ovh.com/en/) oder die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

#### “Name or service not known“

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Diese Fehlermeldung wird bei der [Verbindung über phpMyAdmin](https://docs.ovh.com/de/hosting/datenbank-erstellen/#auf-das-phpmyadmin-interface-zugreifen) angezeigt, wenn der angegebene Servername nicht korrekt ist.

![name_or_service_not_known](images/name_or_service_not_known.png){.thumbnail}

Überprüfen Sie den Servernamen des betroffenen Dienstes in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!success]
>
> Wenn sich die Datenbank, mit der Sie sich verbinden möchten, unter `Web Cloud`{.action} im Tab `Datenbanken`{.action} Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) befindet, finden Sie den anzugebenen Namen in der Spalte `Server-Adresse`.
>
> Wenn Sie sich mit einer Datenbank auf [Web Cloud Databases](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/) verbinden möchten, finden Sie den einzugebenden Servernamen im Tab `Allgemeine Informationen`{.action} im Bereich `Verbindungsinformationen`{.action} unter `SQL`{.action}, hier bezeichnet als `Hostname`{.action}.
>

## Weiterführende Informationen <a name="gofurther"></a>

[Erste Schritte mit Web Cloud Databases](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
