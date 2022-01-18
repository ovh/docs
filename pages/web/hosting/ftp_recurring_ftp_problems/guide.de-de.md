---
title: Häufige FTP-Probleme
excerpt: Webhosting: Häufige FTP-Probleme
slug: webhosting_haufige_ftp-probleme
legacy_guide_number: 1996
section: FTP und SSH
order: 3
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 05.01.2022**

## Ziel

Die Verwendung von FTP-Software beim Login auf Ihr [Hosting-Pakete](https://www.ovhcloud.com/de/web-hosting/) kann zu verschiedenen Anomalien führen. In dieser Anleitung können Sie die gängigsten Lösungen auswählen.

**Diese Anleitung erklärt, wie Sie Fehler im Zusammenhang mit FTP-Programmen beheben.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#gofurther).
>

## Voraussetzungen

- Sie verfügen über ein [Hosting-Pakete](https://www.ovhcloud.com/de/web-hosting/).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### “Dieser Server unterstützt FTP auf TLS nicht“ (FileZilla)

![filezilla_error](images/filezilla_error.png){.thumbnail}

Diese Nachricht im [FileZilla-Programm](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/) zeigt an, dass Sie die SFTP- oder SSH-Option in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) nicht aktiviert haben. Daher werden die zwischen Ihrem OVHcloud Hosting-Server und Ihrem Computer ausgetauschten Informationen nicht verschlüsselt.

Wenn die Daten, die Sie über dieses Zahlungsmittel austauschen möchten, nicht vertraulich sind, klicken Sie auf `OK`{.action}.

Ist das nicht der Fall, gehen Sie in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), dann auf `Web Cloud`{.action} und `HostingPakete`{.action}. Wählen Sie das betreffende Hosting aus und wählen Sie den Tab `FTP-SSH`{.action}.

Klicken Sie auf `...`{.action} rechts neben dem betreffenden FTP-Benutzer und dann auf `Ändern`{.action}.<br>
Wählen Sie `SFTP`{.action} oder `Aktiviert`{.action} in `SSH-Verbindung` aus (wenn Sie über ein [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) oder [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) Hosting verfügen), klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

> [!primary]
>
> Für weitere Fehlermeldungen lesen Sie die Rubrik `Diagnose` unserer [Webhosting Anleitungen](../).
>

### Ich habe meine Dateien mit einem FTP-Programm übertragen, aber meine Seite wird nicht angezeigt

Überprüfen Sie zunächst, dass die Dateien und Ordner Ihrer Website im [Wurzelverzeichnis](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/#3-dateien-auf-ihren-speicherplatz-hochladen) Ihres Hostings enthalten sind.

Wenn Sie vor weniger als 48 Stunden eine Änderung an Ihren [DNS-Servern oder DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) vorgenommen haben, warten Sie ab und starten Sie Ihre Geräte regelmäßig neu, um deren Cache zu leeren.

### Meine FTP-Zugangsdaten funktionieren nicht.

Wenn Sie sich nicht authentifizieren können, ändern Sie Ihr FTP-Passwort entsprechend den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/).

### Auf meiner Website sind zufällige Fehler aufgetreten

Wenn Sie versuchen, den Speicherplatz auf Ihrem Shared Hosting zu ändern oder zu aktualisieren, kann es zu Fehlfunktionen auf Ihrer Seite kommen.

Um den verbleibenden Speicherplatz auf Ihrem Hosting zu überprüfen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie auf `Web Cloud`{.action} und dann `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus.

Die auf Ihrem Hosting-Server gespeicherte Datenmenge (ausgenommen Datenbanken) erscheint im Bereich `Allgemeine Informationen`{.action} > `Speicherplatz`.

![disk_space](images/disk_space.png){.thumbnail}

### Ich kann meine Dateien nicht auf den FTP Server übertragen

Überprüfen Sie, dass Ihr FTP-Programm im “Passivmodus“ (Konfigurationsmodus eines FTP-Servers, in dem der Server den Verbindungsport bestimmt) verbunden ist.

Klicken Sie zum Beispiel für [Filezilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/) auf `Bearbeiten`{.action}, dann auf `Einstellungen`{.action}. Öffnen Sie `Verbindung`{.action}, dann klicken Sie auf `FTP`{.action} und wählen Sie dann `Passiv (empfohlen)`{.action} aus.

Begrenzen Sie auch die Größe Ihrer Datentransfers (Sie können nicht mehr als **5000 Dateien und Ordner** auf den Shared Hosting Servern von OVHcloud in einem einzigen Transfer versenden). Führen Sie Ihren Import mehrmals durch, wenn nötig unter Verwendung komprimierter Ordner.

Wenn Sie über eine [Pro](https://www.ovhcloud.com/de/web-hosting/professional-offer/) oder [Performance](https://www.ovhcloud.com/de/web-hosting/performance-offer/) Lösung verfügen, verwenden Sie vorzugsweise das [SSH-Protokoll](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/), um Ihre Dateien auf dem Dateispeicher Ihres Hostings zu speichern.

### Der symbolische Link “index.html“ kann nicht in meinem FTP-Bereich gelöscht werden

Dieser Link ist standardmäßig auf den Shared Hosting Paketen von OVHcloud installiert. Es zeigt:

![site_under_construction](images/site_under_construction.png){.thumbnail}

Wenn Sie die Funktion “[1-Klick-Modul](https://docs.ovh.com/fr/hosting/modules-en-1-clic/)“ nicht für Ihre Website verwendet haben, müssen Sie das über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zugängliche [Net2FTP-Programm](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/#1-via-ftp-explorer-verbinden) verwenden, um von Hand die Seite “Site under construction“ zu löschen.

## Weiterführende Informationen <a name="gofurther"></a>

[Verwendung des FileZilla Programms mit Ihrem Hosting](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
