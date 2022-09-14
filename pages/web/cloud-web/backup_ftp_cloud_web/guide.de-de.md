---
title: "Backup des FTP-Speicherplatzes Ihres Cloud Web Hostings abrufen"
slug: backup_ftp_cloud_web
section: Backups
order: 01
---

**Letzte Aktualisierung am 13.09.2022**

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Ihr Cloud Web Hosting verfügt über einen Speicherplatz, in dem Sie Ihre Websites oder Anwendungen hosten können.

**Hier erfahren Sie, wie Sie ein Backup des FTP-Speicherplatzes Ihres Cloud Web Hostings abrufen.**

> [!primary]
> 
> Die von OVHcloud angebotenen Backups für Cloud Web Hostings sind nicht vertraglich festgelegt. Diese werden zur Ergänzung Ihrer eigenen Backup-Ressourcen in Notsituationen bereitgestellt. Wir empfehlen Ihnen daher, regelmäßig Ihre eigenen Sicherheitsbackups durchzuführen, um eventuelle Datenverluste zu vermeiden.
> 
> Wenn Sie ein Sicherheitsbackup für Ihre Website erstellen und eine Datenbank verwenden, erstellen Sie auch ein Backup dieser Datenbank. Bitte lesen Sie unsere Anleitung, um [ein Backup Ihrer Datenbank abzurufen](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/).
> 

**In dieser Anleitung erfahren Sie, wie Sie ein FTP-Backup Ihres Cloud Web Hostings abrufen und wiederherstellen.**

## Voraussetzungen

- Sie verfügen über ein [Cloud Web Hosting](https://www.ovhcloud.com/de/web-hosting/cloud-web-offer/){.external}
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.
- Sie haben Zugriff auf die Kontakt-E-Mail-Adresse Ihrer Kundenkennung.

## In der praktischen Anwendung

Ein Cloud Web Hosting verfügt über automatische Backups, die mit folgenden Frequenzen ausgelöst werden:

- am selben Tag, durchgeführt nach 0.00 Uhr.
- am Tag zuvor, nach 0.00 Uhr.
- vor dem Tag, der nach 0.00 Uhr erfolgt.
- am vorhergehenden Sonntag, der nach 01.00 Uhr erfolgt.

Nur die oben genannten Backups können von OVHcloud angeboten werden, sofern Ihr Cloud Web Hosting bereits zu den angegebenen Zeitpunkten existierte und die Infrastruktur zum Zeitpunkt der Anfrage für das Backup verfügbar war.

### Backup exportieren

Im Gegensatz zu den Shared Hosting Paketen von OVHcloud ist es unmöglich, den FTP-Bereich mit einem Klick über das [OVHcloud-Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} wiederherzustellen.

Es wird ein Link zum Download des Backups erstellt und per E-Mail an die E-Mail-Adresse versandt, die der Administrator-Kundenkennung des Cloud Web Hostings zugeordnet ist.

#### Schritt 1 - Den per E-Mail versandten Link zur Wiederherstellung erstellen

Um den Link zur Wiederherstellung zu erstellen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, gehen Sie in den Bereich `Cloud`{.action}, klicken Sie auf `Hosting`{.action} und dann auf die betreffende Cloud Web. 

Wählen Sie den Tab `FTP - SSH`{.action} aus und klicken Sie auf `Backup rechts`{.action} erstellen.

![backupftpcw](images/GenerateABackup.png){.thumbnail}

Wählen Sie im angezeigten Fenster eines der verfügbaren Backups aus und klicken Sie dann auf `Weiter`{.action}.

![backupftpcw](images/GenerateABackup2.png){.thumbnail}

Es erscheint ein zweites Fenster, in dem Sie darauf hingewiesen werden, dass Ihnen der Link zur Wiederherstellung der Backup-Datei per E-Mail zugesandt wird und dass OVHcloud keine automatische Wiederherstellung auf Ihrem Cloud Web Hosting durchführen wird.

![backupftpcw](images/GenerateABackup3.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um Ihre Anfrage zu bestätigen.

Wenn die Erstellung des Backups erfolgreich gestartet wurde, erscheint in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} folgende Nachricht :

![backupftpcw](images/BackupInProgress.png){.thumbnail}

Die Erstellung des Backups dauert zwischen 10 und 15 Minuten, um durchgeführt zu werden.

#### Schritt 2 - Backup wiederherstellen

Sobald das Backup erstellt wurde erhalten Sie eine E-Mail an die E-Mail-Adresse, die der Administrator-Kennung Ihres Cloud Web Hostings zugewiesen ist.<br>
Diese E-Mail enthält einen Download-Link, der **9 Tage** nach Eingang der E-Mail gültig ist:

![backupftpcw](images/mailBackup.png){.thumbnail}

Die so heruntergeladene Datei ist im .tar.gz *Format*.

### Backup wiederherstellen

Sobald Ihre Dateien heruntergeladen wurden, [können Sie sich mit einem FTP](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/)-Programm wie [Filezilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/) mit Ihrem FTP-Bereich verbinden und die gewünschten Dateien durch die abgerufenen ersetzen.

> [!primary]
>
> Verwenden Sie die in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angegebenen Ports für SFTP- und SSH-Verbindungen, da Port 22 für Ihr Cloud Web Hosting nicht funktioniert.
>

## Weiterführende Informationen 

[Mit dem Speicherplatz Ihres Webhostings verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/){.external}

[Mit Filezilla verbinden](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/) einsehen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.

