---
title: "Ihre Webseite exportieren"
excerpt: "Eine OVHcloud Webseite exportieren"
updated: 2026-05-04
---

## Ziel 

In dieser Anleitung werden die Schritte zum Exportieren aller Elemente einer Webseite im Standardformat von einem unserer Webhosting-Dienste beschrieben.

**Erfahren Sie hier, wie Sie Ihre OVHcloud Webseite exportieren können.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### 1 - Dateien von Ihrem FTP-Speicherplatz abrufen

#### 1.1 In den Speicherplatz einloggen

Um sich in Ihren Speicherplatz einzuloggen, benötigen Sie:

- Einen aktiven FTP- oder SSH-Benutzer.
- Das Passwort für diesen Benutzer-Account.
- Die Server-Adresse.
- Den Verbindungsport des Servers.

Diese Informationen wurden Ihnen per E-Mail bei der Installation Ihres Webhostings mitgeteilt.

<!-- CP-STEPS-START:export-retrieve-ftp-credentials -->
Wenn Sie nicht mehr im Besitz dieser Daten sind, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Es werden nun die Informationen Ihres Speicherplatzes angezeigt. Sie sollten hier alle Elemente zum Einloggen in Ihren FTP-Speicherplatz finden.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Falls nötig, konsultieren Sie unsere Anleitung: [Mit dem Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Wenn Sie das Passwort nicht kennen, nutzen Sie die Anleitung [Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password).
<!-- CP-STEPS-END:export-retrieve-ftp-credentials -->

Wenn Sie alle nötigen Informationen bereit haben, können Sie Ihre Dateien auf dem Speicherplatz abrufen. Hierfür haben Sie zwei Möglichkeiten:

- **FTP- oder SFTP-kompatibles Programm verwenden**: Installieren Sie einen FTP-Client auf Ihrem Computer, wie [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Kontaktieren Sie den Herausgeber der eingesetzten Anwendung, falls Sie für deren Verwendung Hilfe benötigen, da OVHcloud keine Unterstützung zu externer Software anbieten kann.

- **SSH-Zugang verwenden**: Um auf Ihren Speicherplatz zuzugreifen, müssen die entsprechenden Befehle in einem Terminal ausgeführt werden. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein kompatibles [OVHcloud Webhosting](/links/web/hosting) erforderlich. Weitere Informationen hierzu finden Sie in unserer [Anleitung](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 1.2 Dateien von Ihrem Speicherplatz herunterladen

Sobald Sie sich bei Ihrem Speicherbereich angemeldet haben und je nach Anzahl der darauf gehosteten Webseiten, können mehrere Ordner angezeigt werden.

<!-- CP-STEPS-START:find-root-folder -->
Falls erforderlich, identifizieren Sie vorab im Webhosting den Namen des Stammordners, in dem Ihre Webseite gespeichert ist. Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> In der angezeigten Tabelle für die gewünschte Webseite, beachten Sie das `Wurzelverzeichnis`{.action}, das angezeigt wird.
>>
>> ![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}
<!-- CP-STEPS-END:find-root-folder -->

Solange Sie weiterhin bei Ihrem Speicherbereich angemeldet sind, müssen Sie lediglich die Dateien Ihrer Webseite herunterladen, indem Sie auf den zuvor identifizierten Stammordner zugreifen.

### 2 - Backup Ihrer Datenbank abrufen (optional)

> [!primary]
>
> Dieser Schritt ist optional, wenn Ihre Webseite keine Datenbank verwendet.
>

Informationen zum Abrufen eines Backups Ihrer Datenbank finden Sie in unserer Anleitung:
[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export).

Wenn Sie eine Datenbank **Web Cloud Databases** für Ihre Website verwenden, lesen Sie den Abschnitt "Backup" in unserer Anleitung:
[Eine Datenbank Ihres Datenbankservers sichern und exportieren](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).

### 3 - Logs Ihres OVHcloud Webhostings abrufen

Lesen Sie unsere dedizierte Anleitung: [Webhosting - Die Statistiken und Logs einer Website einsehen](/pages/web_cloud/web_hosting/logs_and_statistics).

## Weiterführende Informationen

[Mit dem Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)

[Verwendung von FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[SSH auf Ihren Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
