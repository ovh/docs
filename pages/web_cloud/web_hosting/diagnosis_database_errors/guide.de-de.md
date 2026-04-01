---
title: "Die häufigsten Datenbankfehler beheben"
excerpt: "Erfahren Sie hier, wie Sie Fehler in Zusammenhang mit Datenbanken beheben"
updated: 2026-03-31
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

## Ziel

Bei der Nutzung von Datenbanken können Unregelmäßigkeiten auftreten. Fehler beim Datenbankzugriff werden entweder direkt auf Ihrer Website oder in Ihrem [OVHcloud Kundencenter](/links/manager) sowie im [phpMyAdmin Interface](/pages/web_cloud/web_hosting/sql_create_database) angezeigt.

**Diese Anleitung erklärt, wie Sie Fehler bei der Verwendung von Datenbanken mit OVHcloud Webhostings beheben können.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen, falls Sie Hilfe brauchen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie verwenden einen unserer Datenbankdienste: [Web Cloud](/links/web/hosting-options-startsql) oder [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### Verbindungsfehler "Error establishing a database connection"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Auf aktuelle Störungen überprüfen

Überprüfen Sie zunächst auf der Seite [Web Cloud Status](https://web-cloud.status-ovhcloud.com/), ob Ihr Rechenzentrum, Ihr Web-Cluster, Ihr Web Cloud Databases Server oder Ihre Datenbank von einem Zwischenfall in der OVHcloud Infrastruktur betroffen ist.

**Klicken Sie auf die gewünschte Information, um den Inhalt anzuzeigen.**

/// details | Rechenzentrum Ihres Webhostings finden

Klicken Sie auf die Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Tab `Allgemeine Informationen`{.action} finden Sie das `Rechenzentrum`.

///

/// details | Cluster und Filer Ihres Webhostings finden

Lesen Sie unsere Anleitung "[Cluster und Filer Ihres Webhostings ermitteln](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer)".

///

/// details | Den Namen des Web Cloud Databases Servers finden

Klicken Sie auf die Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases) und wählen Sie den betreffenden Dienst aus.
>>
>> ![Auswahl eines Web Cloud Databases Servers im OVHcloud Kundencenter](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Bereich `Verbindungsinformationen`, unter `SQL`, finden Sie den `Hostname`.

///

/// details | Den Server Ihrer Webhosting-Datenbank finden

Lesen Sie unsere Anleitung "[Den Server Ihrer Datenbank ermitteln](/pages/web_cloud/web_hosting/sql_find_server)".

///

#### Verbindungsdaten Ihrer Datenbank überprüfen <a name="config_file"></a>

Verbinden Sie sich über [FTP](/pages/web_cloud/web_hosting/ftp_connection) mit dem Hosting-Speicherplatz und bearbeiten Sie die Konfigurationsdatei Ihrer Website (bei einer WordPress-Seite wäre es beispielsweise die Datei **wp-config.php** in dem Verzeichnis Ihrer Website).

> [!warning]
>
> Der Name und der Inhalt der für die Datenbankverbindungsinformationen relevanten Datei hängt von dem für die Website verwendeten CMS ab. Dies liegt nicht im Verantwortungsbereich von OVHcloud.
>
> Wir empfehlen Ihnen daher, die Ressourcen des [CMS-Anbieters](/pages/web_cloud/web_hosting/cms_install_1_click_modules) heranzuziehen oder bei Bedarf einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

Stellen Sie anschließend die **exakte** Übereinstimmung zwischen den Verbindungsinformationen zu [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#auf-das-phpmyadmin-interface-zugreifen) und denen der Konfigurationsdatei Ihrer Website sicher.

Ändern Sie bei Bedarf das [Passwort Ihrer Datenbank](/pages/web_cloud/web_hosting/sql_change_password).

#### Beispiel für WordPress

Wenn Ihre Website einen Fehler des Typs **"Error establishing a database connection"** ausgibt und die zugehörige Infrastruktur nicht von einer [Störung](https://web-cloud.status-ovhcloud.com/) betroffen ist, loggen Sie sich mit [FTP](/pages/web_cloud/web_hosting/ftp_connection) ein und öffnen Sie dann das Verzeichnis in dem sich die Website befindet (`www` im Standardfall).

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

Klicken Sie auf die Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action} und prüfen Sie die Übereinstimmung der hier angezeigten Elemente mit den Daten in der Datei `wp-config.php`:
>>
>> - **my_database** muss dem `Namen der Datenbank` entsprechen;
>> - **my_user** muss dem `Benutzernamen` entsprechen;
>> - **my_password** entspricht dem [Passwort Ihrer Datenbank](/pages/web_cloud/web_hosting/sql_change_password);
>> - **my_server.mysql.db** muss dem entsprechen, was unter `Server-Adresse` angegeben ist.

> [!primary]
>
> Wenn Sie mit diesen Änderungen den Zugriff auf Ihre Website nicht wiederherstellen können, legen Sie ein [Datenbank-Backup an](/pages/web_cloud/web_hosting/sql_database_export) und setzen Sie dann in Ihrem [OVHcloud Kundencenter](/links/manager) die Datenbank [auf einen früheren Zeitpunkt zurück](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#datenbank-uber-das-kundencenter-wiederherstellen-und-importieren).
>
> Kontaktieren Sie gegebenenfalls einen [spezialisierten Dienstleister](/links/partner). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Überschreitung der Datenbank-Quota

Sie haben eine E-Mail darüber erhalten, dass die Datenmenge Ihrer Datenbank die erlaubte Grenze überschreitet. Ihre Datenbank wurde deshalb auf Read-only gesetzt, was Änderungen an der Website verhindert.

![overquota](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

Sie können Ihre Datenbank mit drei Methoden entsperren:

#### Methode 1: Ihren Dienst upgraden

Wenn Sie über ein Webhosting **Starter** oder **Basic** verfügen, empfehlen wir Ihnen, auf das [nächsthöhere Hosting-Angebot](/links/web/hosting) umzusteigen. Diese Erweiterung erhöht auch die Größe Ihrer Datenbank, was sie automatisch wieder öffnet. Diese Methode ist die einfachste und erfordert keine besondere technische Kompetenz.

> [!warning]
>
> Die Vergrößerung Ihrer Datenbank kann auf eine Fehlfunktion im internen Code Ihrer Website zurückzuführen sein.
>
> Eine solche Anomalie kann zu einem dauerhaften Anschwellen Ihrer Datenbank führen. Ein Wechsel des Webhosting-Abos wird dies nicht beheben.
>
> Daher empfehlen wir Ihnen, falls Sie eine plötzliche Vergrößerung Ihrer Datenbank feststellen oder wenn Sie beispielsweise nur einen Blog betreiben, der nicht viel Datenvolumen verbraucht, sobald möglich einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren.
>

Um diese Änderung durchzuführen, klicken Sie auf die Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Button `...`{.action} im Bereich `Angebot` auf der rechten Seite des Bildschirms.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Angebot wechseln`{.action}.

Wenn Sie ein Webhosting **Performance** verwenden, gehen Sie zu [Methode 2](#method2).

#### Methode 2: Ihre Daten auf eine größere Datenbank übertragen <a name="method2"></a>

Sie können Ihre Daten auch auf eine neue Datenbank migrieren:

- Wenn nötig, bestellen Sie einen [Datenbank-Dienst](/links/web/hosting-options-startsql) mit höherer Kapazität und [erstellen Sie die neue Datenbank](/pages/web_cloud/web_hosting/sql_create_database).
- [Duplizieren Sie den Inhalt der alten Datenbank](/pages/web_cloud/web_hosting/copy_database) in die neue **oder** führen Sie einen [Export Ihrer Daten](/pages/web_cloud/web_hosting/sql_database_export) durch und [importieren Sie diese](/pages/web_cloud/web_hosting/sql_importing_mysql_database) in die neue Datenbank.
- Integrieren Sie die Login-Daten der neuen Datenbank in die [Konfigurationsdatei](#config_file) Ihrer Website.

> [!primary]
>
> Wenn Sie über ein **Performance** Hosting-Paket verfügen, können Sie auch [kostenlos einen Web Cloud Databases Server aktivieren](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Methode 3: Unnötige Daten löschen

Loggen Sie sich nach einer [Sicherung Ihrer Datenbank](/pages/web_cloud/web_hosting/sql_database_export) über [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#auf-das-phpmyadmin-interface-zugreifen) ein, um unnötige Daten mithilfe der Befehle Drop, Delete und Truncate zu löschen.

Um die Quota neu zu berechnen, klicken Sie auf die Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}, dann auf den Button `...`{.action} neben der betreffenden Datenbank.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Quota neu berechnen`{.action}.

> [!warning]
>
> Dieser Vorgang erfordert fortgeschrittene Kenntnisse. Wir empfehlen Ihnen, falls nötig einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren. Wir werden Ihnen in dieser Angelegenheit nicht weiterhelfen können.
>

#### Methode 4: Ihre Datenbank optimieren

Um Ihre Datenbank zu optimieren, folgen Sie den Anweisungen in unserer Anleitung "[Konfigurieren Ihres Datenbankservers](/pages/web_cloud/web_cloud_databases/configure-database-server#ihre-datenbanken-optimieren)".

Um die Quota neu zu berechnen, klicken Sie auf die Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}, dann auf den Button `...`{.action} neben der betreffenden Datenbank.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Quota neu berechnen`{.action}.

> [!warning]
>
> Wenn die Optimierung Ihrer Datenbank nicht ausreicht, um den Zugriff auf Ihre Website zu entsperren, empfehlen wir Ihnen, unsere [User Community](/links/community) oder die [OVHcloud Partner](/links/partner) zu kontaktieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Überschreitungen der RAM-Kapazität (nur Web Cloud Databases)

Die folgende Nachricht weist darauf hin, dass Ihr [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) Server zu viele Ressourcen auf der OVHcloud Infrastruktur verbraucht hat:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

Um die [RAM-Kapazität](/pages/web_cloud/web_cloud_databases/configure-database-server#wechseln-des-datenbank-angebots) zu erhöhen, klicken Sie auf die Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases) und wählen Sie den betreffenden Dienst aus.
>>
>> ![Auswahl eines Web Cloud Databases Servers im OVHcloud Kundencenter](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Tab `Allgemeine Informationen`{.action} finden Sie den Bereich `RAM`.
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} im Bereich `RAM`, dann auf `RAM-Menge ändern`{.action}.

> [!warning]
>
> Diese Erweiterung des RAM funktioniert nur bei einer Web Cloud Databases, die nicht Teil eines Performance Webhostings ist. Wenn Sie die RAM-Kapazität einer in den [Performance Angeboten](/links/web/hosting-performance-offer) enthaltenen Datenbank erhöhen möchten, müssen Sie diese zuerst abtrennen.
>
> Lesen Sie dazu unsere Anleitung "[Eine Web Cloud Databases von Ihrem Webhosting abtrennen](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>

Sie können Ihre Datenbank auch weiter optimieren, indem Sie die Anweisungen in unserer Anleitung "[Ihren Datenbankserver konfigurieren](/pages/web_cloud/web_cloud_databases/configure-database-server#ihre-datenbanken-optimieren)" befolgen.

> [!primary]
>
> Wenn Sie Schwierigkeiten haben, die Ressourcennutzung auf Ihrem Datenbankserver zu reduzieren, und diese nicht erhöhen möchten, kontaktieren Sie unsere [User Community](/links/community) oder die [OVHcloud Partner](/links/partner). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Fehler beim Import von Datenbanken

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Diese Fehlermeldung bedeutet, dass die Datenbank, die Sie zu importieren versuchen, Elemente enthält, die auf der Shared Hosting Infrastruktur von OVHcloud nicht zulässig sind.

Vergewissern Sie sich zunächst, dass Ihre Datenbank leer ist. Klicken Sie dazu auf die Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}, dann auf den Button `...`{.action} neben der betreffenden Datenbank und auf `Quota neu berechnen`{.action}.
>>
> **Schritt 3**
>>
>> Wenn die Datenbank nicht leer ist, [sichern Sie die vorhandenen Daten](/pages/web_cloud/web_hosting/sql_database_export) und löschen Sie diese, bevor Sie den Import erneut starten.
>>
>> Sie können beim [Datenbank-Import](/pages/web_cloud/web_hosting/sql_importing_mysql_database#eigene-backup-datei-uber-das-kundencenter-importieren) auch die Option `Aktuelle Datenbank leeren`{.action} anhaken:
>>
>> ![database-import](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}

Kontaktieren Sie gegebenenfalls unsere [Community](/links/community) oder einen [spezialisierten Dienstleister](/links/partner). Wir werden Sie in diesem Fall nicht unterstützen können.

> [!primary]
>
> **Welche Elemente im Importskript meiner Datenbank können einen Fehler "#1044 - Access denied for user to database" verursachen?**

Sie können keinen **Trigger** im Importskript Ihrer Datenbank verwenden. Importieren Sie in diesem Fall Ihre Datenbank auf einen [Web Cloud Databases Dienst](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Außerdem ist folgende Abfrage nicht zulässig:

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
```
Ersetzen Sie sie mit der Zeile:

```sql
USE `Database-Name`;
```

Ersetzen Sie `Database-Name` mit dem Namen der Datenbank aus Ihrem [OVHcloud Kundencenter](/links/manager).

#### "MySQL server has gone away"

>
> **"ERROR 2006 : MySQL server has gone away"**
>

Diese Fehlermeldung wird beim [Import einer Datenbank](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#eine-lokale-sicherung-importieren) auf [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) angezeigt. Dies hängt meist mit der Menge der zu importierenden Daten oder mit einer mangelnden Optimierung der SQL-Abfragen im Importskript zusammen.

Um dieses Problem zu beheben können Sie Maßnahmen anwenden:

- Erhöhung der [Arbeitsspeicherkapazität (RAM)](/pages/web_cloud/web_cloud_databases/configure-database-server#wechseln-des-datenbank-angebots). Klicken Sie dazu auf die Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases) und wählen Sie den betreffenden Dienst aus.
>>
>> ![Auswahl eines Web Cloud Databases Servers im OVHcloud Kundencenter](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Tab `Allgemeine Informationen`{.action} finden Sie den Bereich `RAM`.
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} im Bereich `RAM`, dann auf `RAM-Menge ändern`{.action}.

- Splitten Sie Ihre Datenbank, um sie dann über mehrere Operationen zu importieren. (Für Fragen zu den durchzuführenden Operationen kontaktieren Sie unsere [User Community](/links/community) oder die [OVHcloud Partner](/links/partner). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.)

- [Optimieren](/pages/web_cloud/web_cloud_databases/configure-database-server#ihre-datenbanken-optimieren) Sie die Datenbank und wiederholen Sie die Export/Import-Operationen.

### Kein Zugriff auf phpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Diese Fehlermeldung kann bei der Verbindung zu Ihrer Datenbank mit [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#auf-das-phpmyadmin-interface-zugreifen) angezeigt werden. Sie gibt an, dass die eingegebenen Login-Daten falsch sind.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

Überprüfen Sie in diesem Fall die [Login-Daten](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#in-der-praktischen-anwendung) und ändern Sie bei Bedarf das [Passwort Ihrer Datenbank](/pages/web_cloud/web_hosting/sql_change_password).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

Die maximale Anzahl an aktiven Verbindungen für die mit den Shared Hosting Angeboten gelieferten Datenbanken ([StartSQL](/links/web/hosting-options-startsql)) beträgt **30**.

Diese Zahl erhöht sich auf **200** für Datenbanken auf [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (Diese Einstellung kann im Bereich `Konfiguration`{.action} Ihres Datenbankdienstes geändert werden).

Diese Nachricht erscheint bei der [Verbindung über phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#auf-das-phpmyadmin-interface-zugreifen), wenn diese maximale Anzahl an Verbindungen überschritten wird.

In dieser Situation müssen Sie [Ihre Datenbanken optimieren](/pages/web_cloud/web_cloud_databases/configure-database-server#ihre-datenbanken-optimieren), um die Anzahl der aktiven Verbindungen zu reduzieren.

> [!warning]
>
> Wenn Sie Fragen zu den notwendigen Schritten zur Reduzierung der Anzahl aktiver Verbindungen auf Ihrer Datenbank haben, kontaktieren Sie unsere [User Community](/links/community) oder die [OVHcloud Partner](/links/partner). Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Diese Fehlermeldung wird bei der [Verbindung über phpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) angezeigt, wenn der angegebene Servername nicht korrekt ist.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Überprüfen Sie den Servernamen des betroffenen Dienstes.

**Klicken Sie auf die zutreffende Situation, um den Inhalt anzuzeigen.**

/// details | Datenbank auf einem Webhosting

Klicken Sie auf die Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}. Den einzugebenden Servernamen finden Sie in der Spalte `Server-Adresse`.

///

/// details | Datenbank auf einem Web Cloud Databases Server

Klicken Sie auf die Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases) und wählen Sie den betreffenden Dienst aus.
>>
>> ![Auswahl eines Web Cloud Databases Servers im OVHcloud Kundencenter](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Tab `Allgemeine Informationen`{.action} finden Sie den einzugebenden Servernamen im Bereich `Verbindungsinformationen`, unter `SQL`, bezeichnet als `Hostname`.

///

### Anmeldung bei einer Cloud Databases-Datenbank nicht möglich

Ein [Web Cloud Databases](/products/web-cloud-clouddb) Server erlaubt es, sich von Ihrem Computer oder einem Server außerhalb der Infrastruktur von OVHcloud mit Ihren Datenbanken zu [verbinden](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server).

Wenn diese Verbindung nicht möglich ist, überprüfen Sie zunächst, dass [Ihre öffentliche IP-Adresse autorisiert ist](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), die Verbindung zum Datenbankserver herzustellen.

Wenn dies der Fall ist, wenden Sie sich an Ihren Internetdienstanbieter oder [OVHcloud Partner](/links/partner). In dieser Situation können wir Ihnen leider keine Unterstützung anbieten.

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.
