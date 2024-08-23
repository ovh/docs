---
title: "Backup des FTP-Speicherplatzes Ihres Cloud Web Hostings abrufen"
excerpt: "Diese Anleitung erklärt, wie Sie ein Backup des FTP-Speicherplatzes Ihres Cloud Web Hostings abrufen"
updated: 2023-11-16
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Ihr Cloud Web Hosting verfügt über einen Speicherplatz, in dem Sie Ihre Websites oder Anwendungen hosten können.

**Diese Anleitung erklärt, wie Sie ein Backup des FTP-Speicherplatzes Ihres Cloud Web Hostings abrufen.**

> [!primary]
> 
> Die von OVHcloud angebotenen Backups für Cloud Web Hostings sind nicht vertraglich festgelegt. Sie werden zur Ergänzung Ihrer eigenen Backup-Ressourcen für Notsituationen bereitgestellt. Wir empfehlen Ihnen, regelmäßig Ihre eigenen Sicherheitsbackups durchzuführen, um Datenverluste zu vermeiden.
> 
> Wenn Sie ein Sicherheitsbackup für eine Website erstellen, die eine Datenbank verwendet, erstellen Sie auch ein Backup dieser Datenbank. Lesen Sie dazu unsere Anleitung zum [Abrufen eines Backups Ihrer Datenbank](/pages/web_cloud/web_hosting/sql_database_export).
> 

**In dieser Anleitung erfahren Sie, wie Sie ein FTP-Backup Ihres Cloud Web Hostings abrufen und wiederherstellen.**

## Voraussetzungen

- Sie verfügen über ein [Cloud Web Hosting](/links/web/hosting-cloud-web-offer){.external}.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben Zugriff auf die Kontakt-E-Mail-Adresse Ihres Kunden-Accounts.

## In der praktischen Anwendung

Ein Cloud Web Hosting verfügt über automatische Backups von den folgenden relativen Zeitpunkten (24-Stunden-Format):

- Am selben Tag, durchgeführt nach 0.00 Uhr
- Am Tag zuvor, durchgeführt nach 0.00 Uhr
- Zwei Tage zuvor, durchgeführt nach 0.00 Uhr
- Am letzten Sonntag, durchgeführt nach 01.00 Uhr

Nur die oben genannten Backups können von OVHcloud angeboten werden, sofern Ihr Cloud Web Hosting bereits zu den angegebenen Zeitpunkten existierte und die Infrastruktur zum Zeitpunkt des angefragten Backups verfügbar war.

### Backup exportieren

Im Gegensatz zu den Shared Hosting Paketen von OVHcloud ist es unmöglich, den FTP-Bereich mit einem Klick über das [OVHcloud Kundencenter](/links/manager) wiederherzustellen.

Es wird ein Link zum Download des Backups erstellt und per E-Mail an die Adresse gesendet, die der Administrator-Kundenkennung des Cloud Web Hostings zugeordnet ist.

#### Schritt 1 - Den per E-Mail versandten Link zur Wiederherstellung erstellen

Um den Link zur Wiederherstellung zu erstellen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein. Gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und dann auf das betreffende Hosting. 

Wählen Sie den Tab `FTP - SSH`{.action} aus und klicken Sie rechts auf `Backup erstellen`{.action}.

![backupftpcw](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup.png){.thumbnail}

Wählen Sie im neu angezeigten Fenster eines der verfügbaren Backups aus und klicken Sie dann auf `Weiter`{.action}.

![backupftpcw](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-1.png){.thumbnail}

Es erscheint ein zweites Fenster, in dem Sie darauf hingewiesen werden, dass Ihnen der Link zur Wiederherstellung der Backup-Datei per E-Mail gesendet wird und dass OVHcloud keine automatische Wiederherstellung auf Ihrem Cloud Web Hosting durchführen wird.

![backupftpcw](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-2.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um Ihre Anfrage zu bestätigen.

Wenn die Erstellung des Backups erfolgreich gestartet wurde, erscheint in Ihrem [OVHcloud Kundencenter](/links/manager) folgende Nachricht:

![backupftpcw](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/message-backup-progress.png){.thumbnail}

Die Erstellung des Backups dauert zwischen 10 und 15 Minuten.

#### Schritt 2 - Backup wiederherstellen

Wenn das Backup bereit ist, erhalten Sie eine E-Mail an die E-Mail-Adresse, die der Administrator-Kundenkennung Ihres Cloud Web Hostings zugewiesen ist.<br>
Diese E-Mail enthält einen Download-Link, der **9 Tage** ab Eingang der E-Mail gültig ist:

![backupftpcw](/pages/assets/screens/email-sending-to-customer/cloud-web/backup-information.png){.thumbnail}

Die heruntergeladene Datei ist im Format *.tar.gz*.

### Backup wiederherstellen

Sobald Ihre Dateien heruntergeladen wurden, können Sie sich [auf Ihrem FTP-Speicherplatz einloggen](/pages/web_cloud/web_hosting/ftp_connection), zum Beispiel mit der FTP-Software [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide), und dann die betreffenden Dateien des Hostings mit denen aus dem Backup ersetzen.

> [!primary]
>
> Verwenden Sie die in Ihrem [OVHcloud Kundencenter](/links/manager) angegebenen Ports für SFTP- und SSH-Verbindungen, da Port 22 für Ihr Cloud Web Hosting nicht funktioniert.
>

## Weiterführende Informationen 

[Mit dem Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[Verwendung von Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.