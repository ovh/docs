---
title: 'Eine Datenbank Ihres Datenbankservers sichern und exportieren'
excerpt: 'Erfahren Sie, wie Sie eine Datenbank auf Ihrem Web Cloud Databases Server über das OVHcloud Kundencenter oder phpMyAdmin sichern und exportieren'
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

Ihre Datenbank kann eine Vielzahl von Informationen enthalten, die für Ihre Website unverzichtbar sind. Es ist daher wichtig, sie sichern oder exportieren zu können.

**Diese Anleitung erklärt, wie Sie Ihre Datenbank auf Ihrem Datenbankserver sichern und exportieren.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](/links/web/databases) (in einem [Performance Webhosting](/links/web/hosting) Angebot enthalten).

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
> - Es gibt keinen Superuser-Zugang ("root").
> - Generische SQL-Befehle funktionieren normal und Software wie HeidiSQL, SQuirreL SQL oder Adminer ist vollständig kompatibel.
>

### Datenbank über das Kundencenter sichern und exportieren

> [!primary]
>
> - Backups werden automatisch einmal täglich für alle Ihre Datenbanken durchgeführt.
> - Automatische und manuelle Backups werden 30 Tage lang aufbewahrt.
> Nach Ablauf dieser Frist werden sie automatisch gelöscht.

#### Manuelles Backup erstellen

<!-- CP-STEPS-START:backup-manual -->
Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

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
>> In der Spalte **Sicherungen** zeigt die Zahl die Anzahl der für Ihre Datenbank verfügbaren Sicherungen an.
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} rechts neben der Datenbank und dann auf `Jetzt sichern`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}
<!-- CP-STEPS-END:backup-manual -->

#### Backup exportieren

<!-- CP-STEPS-START:backup-export -->
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
>> In der Spalte **Sicherungen** zeigt die Zahl die Anzahl der für Ihre Datenbank verfügbaren Sicherungen an.
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} rechts neben der Datenbank und dann auf `Die Sicherungen anzeigen`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Die Liste der verfügbaren Backups wird angezeigt. Klicken Sie auf den Button `...`{.action} rechts neben dem ausgewählten Backup und dann auf `Sicherung herunterladen`{.action}.
<!-- CP-STEPS-END:backup-export -->

### Datenbank außerhalb des Kundencenters sichern und exportieren

Wenn der verfügbare RAM auf Ihrem Server den gewünschten Export nicht ermöglicht, verwenden Sie das OVHcloud-Tool im Kundencenter, das Ressourcen außerhalb Ihres Angebots nutzt. Weitere Informationen finden Sie im Abschnitt "[Datenbank über das Kundencenter sichern und exportieren](./#datenbank-uber-das-kundencenter-sichern-und-exportieren)" dieser Anleitung.

**Klicken Sie auf die Exportmethode Ihrer Wahl, um den Inhalt anzuzeigen.**

/// details | MySQL- oder MariaDB-Datenbank über OVHcloud phpMyAdmin exportieren

Um Ihre Datenbank direkt über phpMyAdmin zu exportieren, müssen Sie sich zuerst einloggen. Folgen Sie dazu der Anleitung "[Mit einer Datenbank verbinden](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)".

Wenn Sie in phpMyAdmin eingeloggt sind, klicken Sie auf den Namen der Datenbank, die Sie exportieren möchten, und anschließend auf den Tab `Exportieren`{.action} oben.

Es gibt zwei Exportmodi. Wenn Sie keine besonderen Anforderungen haben, empfehlen wir den Modus **Schnell** im Format **SQL**.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

///

/// details | MySQL- oder MariaDB-Datenbank über die Kommandozeile exportieren

```bash
mysqldump --host=server --user=benutzername --port=port --password=passwort datenbankname > datenbankname.sql
```

///

/// details | MySQL- oder MariaDB-Datenbank über ein PHP-Skript exportieren

```php
1. <?php echo "Ihre Datenbank wird gesichert.......";
2. system("mysqldump --host=server --user=benutzername --port=port --password=passwort datenbankname > datenbankname.sql");
3. echo "Abgeschlossen. Sie können die Datenbank per FTP abrufen.";
4. ?>
```

> [!warning]
>
> - Um zu verhindern, dass Dritte auf diese Datei mit sensiblen Daten zugreifen, sichern Sie den Zugang mithilfe der Anleitung: [Verzeichnis mit .htaccess schützen](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Diese Aktion ist nur über ein OVHcloud Shared Hosting möglich.

///

/// details | PostgreSQL-Datenbank über die Kommandozeile exportieren

```bash
pg_dump --host=server --port=port --user=benutzername --password=passwort datenbankname > datenbankname.sql
```

///

/// details | PostgreSQL-Datenbank über ein PHP-Skript exportieren

```php
1. <?php echo "Ihre Datenbank wird gesichert.......";
2. system("PGPASSWORD=passwort pg_dump --host=server --port=port --user=benutzername --password=passwort datenbankname > datenbankname.sql");
3. echo "Abgeschlossen. Sie können die Datenbank per FTP abrufen.";
4. ?>
```

> [!warning]
>
> - Um zu verhindern, dass Dritte auf diese Datei mit sensiblen Daten zugreifen, sichern Sie den Zugang mithilfe der Anleitung: [Verzeichnis mit .htaccess schützen](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Diese Aktion ist nur über ein OVHcloud Shared Hosting möglich.

///

## Weiterführende Informationen

[Datenbank über das Kundencenter sichern und exportieren](./#datenbank-uber-das-kundencenter-sichern-und-exportieren)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
