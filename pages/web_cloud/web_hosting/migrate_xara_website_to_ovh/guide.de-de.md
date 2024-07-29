---
title: "Migration Ihrer Xara Website zu OVHcloud"
excerpt: "Erfahren Sie hier, wie Sie Ihre Xara Website und zugehörige Dienste zu OVHcloud migrieren"
updated: 2024-07-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In dieser Anleitung erfahren Sie Schritt für Schritt, wie Sie Ihre Xara Website und alle zugehörigen Dienste zu OVHcloud migrieren.

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in die [offizielle Website von Xara Web Designer](https://www.xara.com/de/webdesigner-plus/){.external} zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

**Diese Anleitung erklärt, wie Sie Ihre Xara Website und zugehörige Dienste zu OVHcloud migrieren.**

## Voraussetzungen

- Sie sind im Verwaltungsinterface von Xara eingeloggt.

## In der praktischen Anwendung

### Schritt 1: Backup der Dateien und Datenbanken Ihrer Xara Website

Der erste Schritt besteht darin, alle Dateien zu Ihrer Xara Website abzurufen. Dazu gehören die Xara-Dateien sowie Ihre Datenbank, falls vorhanden. Weitere Informationen finden Sie auf der Seite „[Exporting a Website](https://webdesigner.xara.com/bhavtest/test1/xara_desktop/product_support/web_features/exporting_website.html?rhhlterm=website){.external}“ oder in Schritt 3 der Anleitung „[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“.

### Schritt 2: Ihre Xara Website zu OVHcloud übertragen

Nachdem Sie die Dateien und die Datenbank Ihrer Xara Website gesichert haben, übertragen Sie sie auf Ihr OVHcloud Webhosting. Wenn Sie noch kein OVHcloud Webhosting besitzen, folgen Sie Schritt 1 der Anleitung „[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“.

#### Schritt 2.1: Dateien von Ihrer Xara Website übertragen

> [!primary]
>
> Wir empfehlen Ihnen, die Software [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) zu verwenden, um Ihre Xara-Dateien auf Ihr Webhosting zu übertragen.
>

Um die zu Ihrer Xara Website gehörigen Dateien zu übertragen, loggen Sie sich zunächst im [FTP-Speicherplatz Ihres OVHcloud Webhostings](/pages/web_cloud/web_hosting/ftp_connection) ein.

Wenn Sie auf dem FTP-Speicherplatz Ihres OVHcloud Webhostings eingeloggt sind, navigieren Sie zum Wurzelverzeichnis "www" (oder einem anderen Wurzelverzeichnis, das Sie zuvor erstellt haben). Wenn Ihre Backup-Dateien komprimiert sind, entpacken Sie sie in einen leeren Ordner auf Ihrem Computer, bevor Sie sie in das Wurzelverzeichnis Ihres OVHcloud Webhostings hochladen.

#### Schritt 2.2: Datenbank Ihrer Xara Website importieren

Wenn Sie noch keine Datenbank haben, [erstellen Sie eine neue Datenbank](/pages/web_cloud/web_hosting/sql_create_database) und [importieren Sie Ihr Backup in Ihre neue Datenbank](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud bietet Web Cloud Databases Datenbankserver an. Wenn Sie dieses Angebot für Ihre Website nutzen möchten, finden Sie die Produktdokumentation auf unserer [dedizierten Seite](/links/web/databases).
>

### Schritt 3: Datenbankinformationen aktualisieren

Nun müssen Sie Ihre Xara Website mit Ihrer Datenbank verknüpfen. Diese Änderungen müssen in der Konfigurationsdatei vorgenommen werden. Sie finden alle notwendigen Aktionen in der Anleitung "[Passwort einer Webhosting-Datenbank ändern](/pages/web_cloud/web_hosting/sql_change_password)".

### Weitere Dienste im Zusammenhang mit Ihrer Xara Website migrieren

Sie haben gerade Ihre Dateien und Datenbanken für Xara migriert. Wenn Sie weitere Dienste wie E-Mails, Domainnamen oder DNS-Zonen migrieren möchten, folgen Sie den Schritten in der Anleitung "[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" für die Dienste, die Sie migrieren möchten. Mehrere Schritte sind in dieser Anleitung bereits ausgeführt worden.

> [!warning]
>
> Wenn Sie Ihre Xara-Domain zu OVHcloud migrieren möchten, lesen Sie Abschnitt 3 dieser [offiziellen Website von Xara](https://www.xara-online.com/de/domain-faq.37.html){.external}. Dort finden Sie detaillierte Informationen zu den notwendigen administrativen Schritten, wie zum Beispiel das Entsperren Ihres Domainnamens und das Erhalten des Transfercodes.
>

## Weiterführende Informationen <a name="go-further"></a>

[Webhosting-E-Mails - Übersicht](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[MySQL-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database).
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.