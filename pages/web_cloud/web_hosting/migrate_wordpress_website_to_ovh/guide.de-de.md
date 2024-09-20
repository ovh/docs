---
title: "Migration Ihrer WordPress Website zu OVHcloud"
excerpt: "Erfahren Sie hier, wie Sie Ihre WordPress Website und zugehörige Dienste zu OVHcloud migrieren"
updated: 2024-06-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In dieser Anleitung erfahren Sie Schritt für Schritt, wie Sie Ihre WordPress Website und alle zugehörigen Dienste zu OVHcloud migrieren.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der [WordPress Community](https://wordpress.com/support/){.external} zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

**Diese Anleitung erklärt, wie Sie Ihre WordPress Website und zugehörige Dienste zu OVHcloud migrieren.**

## Voraussetzungen

- Sie sind im Verwaltungsinterface von WordPress eingeloggt.

## In der praktischen Anwendung

### Schritt 1: Backup der Dateien und Datenbanken Ihrer WordPress Website

Der erste Schritt besteht darin, alle Dateien zu Ihrer WordPress Website abzurufen. Dazu gehören die Dateien von WordPress und Ihre Datenbank. Folgen Sie unserer Anleitung "[Backup Ihrer WordPress Website](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress)".

### Schritt 2: Ihre WordPress Website zu OVHcloud übertragen

Nachdem Sie die Dateien und die Datenbank Ihrer WordPress Website gesichert haben, übertragen Sie sie auf Ihr OVHcloud Webhosting. Wenn Sie noch kein OVHcloud Webhosting besitzen, folgen Sie Schritt 1 der Anleitung „[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“.

#### Schritt 2.1: Dateien von Ihrer WordPress Website übertragen

> [!primary]
>
> Wir empfehlen Ihnen, die Software [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) zu verwenden, um Ihre WordPress-Dateien auf Ihr Webhosting zu übertragen.
>

Um die zu Ihrer WordPress Website gehörigen Dateien zu übertragen, loggen Sie sich zunächst im [FTP-Speicherplatz Ihres OVHcloud Webhostings](/pages/web_cloud/web_hosting/ftp_connection) ein.

Wenn Sie auf dem FTP-Speicherplatz Ihres OVHcloud Webhostings eingeloggt sind, navigieren Sie zum Wurzelverzeichnis "www" (oder einem anderen Wurzelverzeichnis, das Sie zuvor erstellt haben). Wenn Ihre Backup-Dateien komprimiert sind, entpacken Sie sie in einen leeren Ordner auf Ihrem Computer, bevor Sie sie in das Wurzelverzeichnis Ihres OVHcloud Webhostings hochladen.

#### Schritt 2.2: Datenbank Ihrer WordPress Website importieren

Wenn Sie noch keine Datenbank haben, [erstellen Sie eine neue Datenbank](/pages/web_cloud/web_hosting/sql_create_database) und [importieren Sie Ihr Backup in Ihre neue Datenbank](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud bietet Web Cloud Databases Datenbankserver an. Wenn Sie dieses Angebot für Ihre Website nutzen möchten, finden Sie die Produktdokumentation auf unserer [dedizierten Seite](/links/web/databases).
>

### Schritt 3: Datenbankinformationen aktualisieren

Nun müssen Sie Ihre WordPress Website mit Ihrer Datenbank verknüpfen. Diese Änderungen müssen in der Konfigurationsdatei **"wp-config.php"** vorgenommen werden. Sie finden alle notwendigen Aktionen in der Anleitung "[Passwort einer Webhosting-Datenbank ändern](/pages/web_cloud/web_hosting/sql_change_password)".

### Weitere Dienste im Zusammenhang mit Ihrer WordPress Website migrieren

Sie haben gerade Ihre Dateien und Datenbanken für WordPress migriert. Wenn Sie weitere Dienste wie E-Mails, Domainnamen oder DNS-Zonen migrieren möchten, folgen Sie den Schritten in der Anleitung "[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" für die Dienste, die Sie migrieren möchten. Mehrere Schritte sind in dieser Anleitung bereits ausgeführt worden.

## Weiterführende Informationen <a name="go-further"></a>

[Webhosting-E-Mails - Übersicht](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[MySQL-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database).
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
