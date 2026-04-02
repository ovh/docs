---
title: 'Datenbank auf Ihrem Datenbankserver wiederherstellen und importieren'
excerpt: 'Erfahren Sie, wie Sie eine Datenbank auf Ihrem Web Cloud Databases Server über das OVHcloud Kundencenter oder phpMyAdmin wiederherstellen und importieren'
updated: 2026-03-24
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

Nach einem Fehler auf Ihrer Datenbank müssen Sie in der Lage sein, ein Backup wiederherzustellen oder eine lokale Datenbank zu importieren.

**Diese Anleitung erklärt, wie Sie Ihre Datenbank auf Ihrem Datenbankserver wiederherstellen und importieren.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](/links/web/databases) (auch in einem [Performance Webhosting](/links/web/hosting) Angebot enthalten).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

> [!primary]
>
> Die [Web Cloud Databases](/links/web/databases) Dienste gewähren keinen Zugriff auf das Datenbankmanagementsystem, sondern auf die darauf gehosteten Datenbanken.
>
> - Es gibt keinen Superuser-Zugang "root".
> - Generische SQL-Befehle funktionieren normal, und Software wie HeidiSQL, SQuirreL SQL oder Adminer ist vollständig kompatibel.

### Datenbank über das Kundencenter wiederherstellen und importieren

#### Ein bestehendes Backup wiederherstellen

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}.
>>
>> In der Spalte **"Sicherungen"** gibt die Zahl die Anzahl der verfügbaren Sicherungen für Ihre Datenbank an.
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} rechts neben der Datenbank und dann auf `Die Sicherungen anzeigen`{.action}.
>>
> **Schritt 4**
>>
>> Die Liste der verfügbaren Backups wird angezeigt. Klicken Sie auf den Button `...`{.action} rechts neben dem ausgewählten Backup und dann auf `Sicherung wiederherstellen`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Die Wiederherstellung bedeutet, dass der Inhalt der Datenbank überschrieben wird, was zu Datenverlust führen kann. Wenn Sie sich nicht sicher sind, empfehlen wir, zunächst ein Backup zu erstellen.

#### Eine lokale Sicherung importieren

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} rechts neben der Datenbank und dann auf `Datei importieren`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}
>>
> **Schritt 4**
>>
>> ***Sie haben zwei Möglichkeiten:***
>>
>> **1 - Neue Datei importieren**
>>
>> Klicken Sie auf **"Neue Datei importieren"** und dann auf `Weiter`{.action}.
>>
>> Geben Sie einen Namen für Ihre importierte Datei ein, klicken Sie auf `Durchsuchen`{.action}, um sie auszuwählen, dann auf `Absenden`{.action} und anschließend auf `Weiter`{.action}.
>>
>> > [!warning]
>> >
>> > Die Datei muss im Format ".sql", ".txt" oder ".gz" vorliegen.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}
>>
>> Aktivieren Sie bei Bedarf **"Aktuelle Datenbank leeren"** vor dem Import und **"E-Mail am Ende des Imports senden"**, um über den Abschluss des Vorgangs an die Referenz-E-Mail-Adresse Ihres OVHcloud Kunden-Accounts informiert zu werden, und klicken Sie dann auf `Bestätigen`{.action}.
>>
>> **2 - Bestehende Datei verwenden**
>>
>> Wenn Sie bereits zuvor eine Datei importiert haben, können Sie die Option **"Bestehende Datei importieren"** wählen.
>>
>> Wählen Sie die Datei im Drop-down-Menü aus und klicken Sie auf `Weiter`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}
>>
>> Aktivieren Sie bei Bedarf **"Aktuelle Datenbank leeren"** vor dem Import und **"E-Mail am Ende des Imports senden"**, um über den Abschluss des Vorgangs an die Referenz-E-Mail-Adresse Ihres OVHcloud Kunden-Accounts informiert zu werden, und klicken Sie dann auf `Bestätigen`{.action}.

### Datenbank außerhalb des Kundencenters importieren

In einigen Fällen reicht der auf Ihrem Datenbankserver verfügbare RAM möglicherweise nicht für den gewünschten Import außerhalb des Kundencenters aus. In diesem Fall empfehlen wir, das OVHcloud Tool im Kundencenter zu verwenden. Lesen Sie dazu den Abschnitt "[Datenbank über das Kundencenter wiederherstellen und importieren](./#datenbank-uber-das-kundencenter-wiederherstellen-und-importieren)" dieser Anleitung.

**Klicken Sie auf die Importmethode Ihrer Wahl, um den Inhalt anzuzeigen.**

/// details | MySQL oder MariaDB Datenbank über phpMyAdmin importieren

Um Ihre Datenbank direkt über phpMyAdmin zu importieren, müssen Sie sich zuerst einloggen. Folgen Sie hierzu dem Abschnitt "[Mit einer MySQL oder MariaDB Datenbank verbinden](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#mit-einer-mysql-oder-mariadb-datenbank-verbinden)".

Wenn Sie in phpMyAdmin eingeloggt sind, wählen Sie die Datenbank aus, indem Sie auf ihren Namen klicken.

Klicken Sie anschließend auf den Tab `Importieren`{.action}.

Wählen Sie Ihre Backup-Datei aus, indem Sie auf `Durchsuchen`{.action} klicken (die Datei darf 100 MB nicht überschreiten).

> [!primary]
>
> Wir empfehlen Ihnen, Ihre Datenbank in mehrere Dateien aufzuteilen, wenn sie mehr als 100 MB groß ist, und mehrere Importe über phpMyAdmin durchzuführen.
> Der Import von Dateien über 100 MB kann über das Kundencenter erfolgen, indem Sie dem Abschnitt "[Datenbank über das Kundencenter wiederherstellen und importieren](./#datenbank-uber-das-kundencenter-wiederherstellen-und-importieren)" folgen.

Lassen Sie die Standardoptionen aktiviert und klicken Sie auf `Ausführen`{.action}, um den Import zu starten.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

///

/// details | MySQL oder MariaDB Datenbank über die Kommandozeile importieren

Diese Aktion ist nur über [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) von einem OVHcloud Shared Hosting aus möglich.

```bash
cat datenbankname.sql | mysql --host=server --user=benutzername --port=port --password=passwort datenbankname
```

///

/// details | MySQL oder MariaDB Datenbank über eine PHP-Datei importieren

```php
1. <?php
2. echo "Ihre Datenbank wird wiederhergestellt.......<br>";
3. system("cat datenbankname.sql | mysql --host=server --user=benutzername --port=port --password=passwort datenbankname");
4. echo "Abgeschlossen. Ihre Datenbank ist auf diesem Hosting eingerichtet.";
5. ?>
```

> [!warning]
>
> - Um zu vermeiden, dass jemand auf diese Datei mit sensiblen Daten zugreift, sichern Sie den Zugang mithilfe der Anleitung: [Wie kann ich den Zugang zu einem Verzeichnis mit einem Passwort schützen?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Diese Aktion ist nur von einem OVHcloud Shared Hosting aus möglich.

///

/// details | PostgreSQL Datenbank über die Kommandozeile importieren

Diese Aktion ist nur über [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) von einem OVHcloud Shared Hosting aus möglich (ab Version "stable").

```bash
psql --host=server --port=port --user=benutzername --password=passwort datenbankname < datenbankname.sql
```

///

/// details | PostgreSQL Datenbank über eine PHP-Datei importieren

```php
1. <?php
2. echo "Ihre Datenbank wird wiederhergestellt.......<br>";
3. system("PGPASSWORD=passwort psql --host=server --port=port --user=benutzername --password=passwort datenbankname < datenbankname.sql");
4. echo "Abgeschlossen. Ihre Datenbank ist auf diesem Hosting eingerichtet.";
5. ?>
```

> [!warning]
>
> - Um zu vermeiden, dass jemand auf diese Datei mit sensiblen Daten zugreift, sichern Sie den Zugang mithilfe der Anleitung: [Wie kann ich den Zugang zu einem Verzeichnis mit einem Passwort schützen?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Diese Aktion ist nur von einem OVHcloud Shared Hosting aus möglich.

///

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
