---
title: 'Ihre Webseite exportieren'
slug: website-exportieren
excerpt: 'Eine OVHcloud Webseite exportieren'
section: 'Erste Schritte'
order: 2
---

**Letzte Aktualisierung am 14.01.2020**

## Ziel

In dieser Anleitung werden die Schritte zum Exportieren aller Elemente einer Webseite im Standardformat von einem unserer Webhosting-Dienste beschrieben.

**Erfahren Sie hier, wie Sie Ihre OVHcloud Webseite exportieren können.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovh.de/hosting).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

### Schritt 1: Dateien von Ihrem FTP-Speicherplatz abrufen

#### 1.1 In den Speicherplatz einloggen

Um sich in Ihren Speicherplatz einzuloggen, benötigen Sie:

- einen aktiven FTP- oder SSH-Benutzer
- das Passwort für diesen Nutzeraccount
- die Server-Adresse
- den Verbindungsport des Servers

Diese Informationen wurden Ihnen per E-Mail bei der Installation Ihres Webhostings mitgeteilt. Wenn Sie nicht mehr im Besitz dieser Daten sind, loggen Sie sich in Ihr [OVHcloud-Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. 

![export-website](images/export-website-step1-1.png){.thumbnail}

Es werden nun die Informationen Ihres Speicherplatzes angezeigt. Sie sollten hier alle Elemente finden, die Sie für das Einloggen in Ihren FTP-Speicherplatz brauchen. Falls nötig, konsultieren Sie unsere Anleitung: [Mit dem Speicherplatz eines Webhostings verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting). Wenn Sie das Passwort nicht kennen, lesen Sie bitte die Anleitung [Passwort eines FTP-Benutzers ändern](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern).

Wenn Sie alle nötigen Informationen bereit haben, können Sie Ihre Dateien auf dem Speicherplatz abrufen. Hierfür haben Sie zwei Möglichkeiten:

- **FTP- oder SFTP-kompatibles Programm verwenden**: Installieren Sie einen FTP-Client auf Ihrem Computer, wie [FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla). Kontaktieren Sie den Herausgeber der eingesetzten Anwendung, falls Sie für deren Verwendung Hilfe brauchen, da OVHcloud keine Unterstützung zu externer Software anbieten kann.


- **SSH-Zugang verwenden**: Um auf Ihren Speicherplatz zuzugreifen, müssen die entsprechenden Befehle in einem Terminal ausgeführt werden. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein kompatibles [OVHcloud Webhosting](https://www.ovh.de/hosting) erforderlich. Weitere Informationen hierzu finden Sie in unserer [Anleitung](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings). 

#### 1.2 Dateien von Ihrem Speicherplatz herunterladen

Nachdem Sie sich in Ihren Speicherplatz eingeloggt haben, können Sie die Dateien Ihrer Webseite herunterladen. **Achten Sie bitte besonders auf das Verzeichnis, in dem Sie Ihre Seite installiert haben.** Standardmäßig werden diese im „www“-Ordner abgelegt. Sollten Sie über Ihr Webhosting mehrere Webseiten betreiben, haben Sie mit Sicherheit mehrere **Multisites** angelegt.

Gehen Sie in Ihrem OVHcloud-Kundencenter auf den Tab `Multisite`{.action}, um herauszufinden, in welchem Ordner Ihre Webseite gespeichert ist. In der angezeigten Tabelle wird das Wurzelverzeichnis für die gewünschte Domain angegeben.

![export-website](images/export-website-step1-2.png){.thumbnail}

### Schritt 2: Backup Ihrer Datenbank abrufen (optional)

> [!primary]
>
> Dieser Schritt ist optional, wenn Ihre Webseite keine Datenbank verwendet.
>

Informationen zum Abrufen eines Backups Ihrer Datenbank finden Sie in unserer Anleitung:
[Backup einer Webhosting-Datenbank exportieren](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken).

### Schritt 3: Logs Ihres OVHcloud Webhostings abrufen

Wenn Sie den Protokollverlauf Ihrer Webseite aufbewahren möchten, haben Sie die Möglichkeit, die Logs im OVHcloud Kundencenter herunterzuladen.

Klicken Sie im linken Menü auf `Hosting-Pakete`{.action} und wählen Sie den gewünschten Dienst aus. Klicken Sie auf den Tab `Mehr +`{.action}, danach auf `Statistiken und Logs`{.action}.

![export-website](images/export-website-step3-1.png){.thumbnail}

Klicken Sie dann auf den Link unter **Logs**:

![export-website](images/export-website-step3-2.png){.thumbnail}

Ein Fenster mit den verschiedenen verfügbaren Logtypen wird angezeigt. Sie sind nach Monaten unterteilt:

| Typ  	| Beschreibung                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Hier finden Sie die verschiedenen Logs zum Zugriff auf Ihre Webseite sowie die verschiedenen Aktionen, die von Ihrer Seite ausgeführt wurden. Auf diese Weise können Sie beispielsweise versuchte Hacks erkennen. 	|
| FTP   	| Die verschiedenen FTP-Verbindungen werden aufgezeichnet und in diesen Logs gespeichert.                                                                                                                     	|
| Error 	| Die verschiedenen Fehler, die von Ihrer Site generiert werden.                                                                                                                                                    	|
| CGI   	| Die verschiedenen Aufrufe der cgi.bin-Skripte.                                                                                                                                     	|
| Out   	| Die Statistiken Ihres Hostings zu den verschiedenen externen Aufrufen.                                                                                                                  	|
| SSH   	| Diese Logs zeigen die Verbindungen an, die mit dem SSH-Protokoll durchgeführt wurden.                                                                                                                      	|
| Cron  	| Das Ergebnis der Ausführung Ihrer geplanten Aufgaben.                                                                                                                                                	|

![export-website](images/export-website-step3-3.png){.thumbnail}

Nachdem Sie den Logtyp und Monat ausgewählt haben, sind die Logs nach Tag archiviert abrufbar:

![export-website](images/export-website-step3-4.png){.thumbnail}

## Weiterführende Informationen

[Mit dem Speicherplatz eines Webhostings verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting)

[Passwort eines FTP-Benutzers ändern](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern)

[Verwendung von FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla)

[SSH auf Ihren Webhostings verwenden](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings)

[Backup einer Webhosting-Datenbank exportieren](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken)

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en](https://community.ovh.com/en).
