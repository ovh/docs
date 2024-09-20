---
title: 'Datenbank auf Ihrem Datenbankserver wiederherstellen und importieren'
excerpt: 'Erfahren Sie hier, wie Sie Ihre Datenbank wiederherstellen und importieren'
updated: 2023-10-26
---

## Ziel

Nach einem Fehler auf Ihrer Datenbank müssen Sie in der Lage sein, ein Backup wiederherzustellen oder eine lokale Datenbank importieren zu können. 

**Diese Anleitung erklärt, wie Sie eine Datenbank auf Ihrem Datenbankserver wiederherstellen oder importieren können.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](https://www.ovh.de/cloud-databases/) (auch in einem [Performance Webhosting](/links/web/hosting) Angebot enthalten)
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!primary]
>
> Beachten Sie, dass die [Web Cloud Databases Dienste](https://www.ovh.de/cloud-databases/) keinen Zugriff auf den Datenbankserver gewähren, sondern auf die darauf gehosteten Datenbanken. 
> <br> - Es gibt keinen "root"-Zugang. 
> <br> - Generische SQL-Befehle funktionieren normal, und Programme wie HeidiSQL, SQuirreL oder Adminer sind vollständig kompatibel.

### Datenbank über das Kundencenter wiederherstellen und importieren

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Web Cloud Databases`{.action}. Wählen Sie den Datenbanknamen aus und gehen Sie dann auf den Tab `Datenbanken`{.action}.

In der Spalte **Sicherungen** indiziert die Zahl die für Ihre Datenbank verfügbaren Sicherungen.

#### Eine Sicherung wiederherstellen

Klicken Sie auf `...`{.action} rechts neben der Datenbank und dann auf `Die Sicherungen anzeigen`{.action}.

Die Liste der verfügbaren Backups erscheint. Klicken Sie auf den Button `...`{.action} rechts neben dem ausgewählten Backup und dann auf `Sicherung wiederherstellen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}

> [!warning]
>
> Die Wiederherstellung bedeutet, dass der Inhalt der Datenbank überschrieben wird, was zu Datenverlust führen kann. Wenn Sie sich nicht sicher sind, legen Sie unbedingt ein Backup an.
> 

#### Eine lokale Sicherung importieren

Klicken Sie auf den Button `...`{.action}. rechts neben der Datenbank und dann auf `Datei importieren`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}

Hierzu haben Sie zwei Möglichkeiten:

##### 1\. Neue Datei importieren

Klicken Sie anschließend auf **Neue Datei importieren** und dann auf `Weiter`{.action}.

Geben Sie einen Namen für Ihre importierte Datei ein, klicken Sie auf `Durchsuchen`{.action}, um diese auszuwählen, bestätigen mit `Absenden`{.action} und klicken dann auf `Weiter`{.action}.

> [!warning]
>
> Die Datei muss im Format ".sql", ".txt" oder ".gz" vorliegen.
> 

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}

Haken Sie, wenn Sie möchten, **Aktuelle Datenbank leeren** und **E-Mail am Ende des Imports senden** vor dem Import an, um über den Abschluss der Operation auf der E-Mail-Adresse Ihres OVHcloud Kunden-Accounts informiert zu werden, und klicken Sie dann auf `Bestätigen`{.action}.

##### 2\. Bestehende Datei verwenden

Wenn Sie bereits zuvor eine Datei importiert haben, können Sie die Option **Bestehende Datei verwenden** nutzen.

Wählen Sie dann die Datei im Drop-down-Menü aus und klicken Sie auf `Weiter`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}

Haken Sie, wenn Sie möchten, **Aktuelle Datenbank leeren** und **E-Mail am Ende des Imports senden** vor dem Import an, um über den Abschluss der Operation auf der E-Mail-Adresse Ihres OVHcloud Kunden-Accounts informiert zu werden, und klicken Sie dann auf `Bestätigen`{.action}.

### MySQL oder MariaDB Datenbank-Import außerhalb des Kundencenters

In einigen Fällen reicht der auf Ihrem Datenbankserver verfügbare RAM möglicherweise nicht für die Ausführung des gewünschten Imports außerhalb des Kundencenters aus. Ist das der Fall, empfehlen wir Ihnen, das [Tool von OVHcloud im Kundencenter zu verwenden](./#datenbank-uber-das-kundencenter-wiederherstellen-und-importieren).

#### MySQL oder MariaDB Datenbank über phpMyAdmin importieren

Um Ihre Datenbank direkt über phpMyAdmin zu importieren, müssen Sie sich zuerst mit ihr verbinden. Folgen Sie hierzu den Schritten im Abschnitt ["Mit einer MySQL oder MariaDB Datenbank verbinden"](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#mit-einer-mysql-oder-mariadb-datenbank-verbinden).

Wenn Sie in phpMyAdmin eingeloggt sind, wählen Sie die Datenbank aus, indem Sie auf ihren Namen klicken.

Klicken Sie anschließend auf den Tab `Importieren`{.action}.

Wählen Sie Ihre Backup-Datei aus, indem Sie `Durchsuchen`{.action} klicken. (Die Datei darf 100 MB nicht überschreiten.)

> [!primary]
>
> Wir empfehlen Ihnen, Ihre Datenbank in mehrere Dateien aufzuteilen, wenn sie mehr als 100 MB groß ist, und mehrere Importe über phpMyAdmin durchzuführen.<br>
> Der Import von Dateien über 100 MB kann über das Kundencenter erfolgen, indem Sie den Schritten im Abschnitt ["Datenbank über das Kundencenter wiederherstellen und importieren"](./#datenbank-uber-das-kundencenter-wiederherstellen-und-importieren) folgen.

Lassen Sie die Standardoptionen aktiviert und klicken Sie auf `Ausführen`{.action}, um den Import zu starten.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

#### MySQL oder MariaDB Datenbank über die Kommandozeile importieren

Diese Aktion ist nur über [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) von einem [OVHcloud Webhosting](/links/web/hosting) aus möglich.

```bash
cat datenbankname.sql | mysql --host=server --user=benutzername --port=port --password=passwort datenbankname
```

#### MySQL oder MariaDB Datenbank über eine PHP Datei importieren

```php
1. <?php
2. echo "Ihre Datenbank wird wiederhergestellt.......<br>"
3. system("cat datenbankname.sql | mysql --host=server --user=benutzername --port=port --password=passwort datenbankname");
4. echo: "Ihre Datenbank ist auf diesem Hosting eingerichtet."
5
```

> [!warning]
>
> - Um zu vermeiden, dass jemand auf diese Datei mit sensiblen Daten zugreift, können Sie sie [entsprechend absichern](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Diese Aktion ist nur von einem [OVHcloud Webhosting](/links/web/hosting) aus möglich.
>

### Import von PostgreSQL Datenbanken außerhalb des Kundencenters

In einigen Fällen reicht der auf Ihrem Datenbankserver verfügbare RAM möglicherweise nicht für die Ausführung des gewünschten Imports außerhalb des Kundencenters aus. Ist das der Fall, empfehlen wir Ihnen, das [Tool von OVHcloud im Kundencenter zu verwenden](./#datenbank-uber-das-kundencenter-wiederherstellen-und-importieren).

#### PostgreSQL Datenbank über die Kommandozeile importieren

Diese Aktion ist nur über [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) von einem [OVHcloud Webhosting](/links/web/hosting) aus möglich (ab Version "stable").

```bash
psql --host=server --port=port --user=benutzername --password=passwort datenbankname < datenbankname.sql
```

#### PostgreSQL Datenbank über eine PHP Datei importieren

```php
1. <?php
2. echo "Ihre Datenbank wird wiederhergestellt.......<br>"
3. system("PGPASSWORD=passwort psql --host=server --port=port --user=benutzername --password=passwort datenbankname < datenbankname.sql");
4. echo: "Ihre Datenbank ist auf diesem Hosting eingerichtet."
5
```

> [!warning]
>
> - Um zu vermeiden, dass jemand auf diese Datei mit sensiblen Daten zugreift, können Sie sie [entsprechend absichern](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Diese Aktion ist nur von einem [OVHcloud Webhosting](/links/web/hosting) aus möglich.
>

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.