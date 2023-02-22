---
title: "Tutorial - Sicherung Ihrer WordPress-Seite"
slug: realize-backup-wordpress
excerpt: "Diese Anleitung erklärt, wie Sie den Inhalt Ihrer WordPress-Website und deren Datenbank sichern"
section: 'Tutorials'
order: 021
updated: 2023-02-22
---

**Letzte Aktualisierung am 22.02.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>
  
## Ziel

Selbst wenn alle Vorsichtsmaßnahmen für die Nutzung getroffen werden, ist Ihre Website weiterhin möglichen Fehlfunktionen (Fehler bei der Manipulation, versehentliches Überschreiben von Dateien, Konfigurationsfehler, Sicherheitslücken oder Hacken) ausgesetzt, die zum teilweisen oder vollständigen Verlust Ihrer Daten führen können .<br>
Die regelmäßige Sicherung der Informationen Ihrer Website ist eine gute Vorgehensweise. So können Sie zu einem früheren Zustand Ihrer Website zurückkehren, wenn eine Störung auftritt.

Auf einem Shared Hosting sind Sie für die Backups Ihrer Website verantwortlich. Auch wenn OVHcloud (außervertragliche) Backups anbietet, empfehlen wir Ihnen, auch regelmäßige Backups durchzuführen und Ihre eigenen Backup-Medien (Festplatte, USB-Stick etc.) für weitere Vorsichtsmaßnahmen zu verwalten.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/fr/) oder [Herausgeber des CMS WordPress](https://wordpress.com/fr/support/){.external} zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Mehr Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

**Diese Anleitung erklärt, wie Sie den Inhalt Ihrer WordPress-Website und deren Datenbank sichern.**

## Voraussetzungen

- Über ein [Webhosting](https://www.ovhcloud.com/fr/web-hosting/) verfügen und WordPress installiert haben

## In der praktischen Anwendung

Sie können ein Backup auf zwei Arten durchführen: **manuell** oder über eine **Domainendung**.

OVHcloud stellt einen [nicht vertraglich festgelegten Dienst für die automatische Sicherung von Daten](https://docs.ovh.com/fr/hosting/restauration-ftp-filezilla-espace-client/) zur Verfügung und stellt diese Backups zur Verfügung. Es liegt jedoch in Ihrer Verantwortung, Ihre eigene Restaurationspolitik zu entwickeln und Wiederherstellungspunkte zu Zeiten zu bestimmen, die Sie für angebracht halten.

### Methode Nr. 1 - manuelle Sicherung durchführen

Das manuelle Backup muss in zwei Schritten erfolgen. Speichern Sie zuerst die PHP-Dateien Ihrer Website und exportieren Sie Ihre Datenbank.

#### 1.1 - Sichern Sie die Dateien Ihrer Webseite

Der Abruf erfolgt über einen FTP-Client wie FileZilla. Weitere Informationen finden Sie in unserer Anleitung "[FileZilla mit Ihrem OVHcloud Hosting verwenden](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)".

Wenn Sie sich per FTP mit Ihrem Server verbinden, müssen Sie den Inhalt des Verzeichnisses `www` auf dem rechten Teil abrufen (per Drag & Drop). Dieses Verzeichnis enthält alle Dateien und Verzeichnisse Ihrer WordPress-Website (Konfiguration, Themes, Medien...).

![Übersicht der WordPress Dateien und Ordner an der Wurzel](images/how_to_backup_your_wordpress_1.png){.thumbnail}

Klicken Sie auf das Verzeichnis `www` und klicken Sie im linken Fenster auf das Verzeichnis Ihrer Wahl. Der Dateitransfer beginnt automatisch.

Bei einer Fehlfunktion Ihrer Website müssen Sie die umgekehrte Operation durchführen, indem Sie die Zieldateien überschreiben.

#### 1.2 - Exportieren Sie Ihre Datenbank

Um Ihre Datenbank zu exportieren, begeben Sie sich über die URL, die Sie bei Bestellung Ihres Webhosting Angebots erhalten haben, in das _PHPMyAdmin_ Interface.

> [!success]
>
> Lesen Sie bitte unsere Anleitung zu [Export einer Datenbank](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/).

![PHPMyAdmin Zugang - Empfang](images/how_to_backup_your_wordpress_2.png){.thumbnail}

Klicken Sie oben auf `exportieren`{.action}:

![PHPMyAdmin-Zugang - Exportieren](images/how_to_backup_your_wordpress_3.png){.thumbnail}

Lassen Sie die standardmäßig verfügbaren Optionen: Schnellausfuhrmethode und SQL-Format.

Klicken Sie auf `ausführen`{.action}, dann laden Sie Ihre gesamte Datenbank im SQL-Format (Structured Query Language) herunter.

![PHPMyAdmin Zugang - Exportieren - Download](images/how_to_backup_your_wordpress_4.png){.thumbnail}

### Methode Nr. 2 - Backup mit einer Endung erstellen

Mit vielen WordPress-Erweiterungen können Sie Ihre Backups verwalten. Die beliebteste ist [UdraftPlus](https://wordpress.org/plugins/updraftplus/){.external} mit mehreren Millionen aktiven Anlagen. Die kostenlose Version reicht aus, um Ihre Website zu sichern. Die Premium Version bietet mehr Optionen wie inkrementelle Backups, Migrationstools, Multisite-Backups, mehr Auswahl für Clouds zur Speicherung von Daten usw.

Laden Sie die Erweiterung im Format `.zip` auf Ihren Computer herunter. Aus Gründen der Klarheit wird die heruntergeladene Datei der Endung **updraftplus.zip** in diesem Tutorial umbenannt.

#### 2.1 - Loggen Sie sich für die Installation der Erweiterung mit dem Verwaltungsinterface ein

Standardmäßig handelt es sich um Ihren Domainnamen gefolgt von `/wp-admin`:

![Administrator-Anbindung an wp-admin](images/how_to_backup_your_wordpress_5.png){.thumbnail}

Gehen Sie auf der Startseite in den Bereich `Erweiterungen`{.action} und klicken Sie dann auf `Hinzufügen`{.action}:

![Eine Endung hinzufügen](images/how_to_backup_your_wordpress_6.png){.thumbnail}

Verdrehen Sie die Erweiterung, indem Sie auf den Button `Durchsuchen`{.action} klicken:

![Erweiterung hochladen](images/how_to_backup_your_wordpress_7.png){.thumbnail}

Klicken Sie auf `Jetzt installieren`{.action}:

![Erweiterung installieren](images/how_to_backup_your_wordpress_8.png){.thumbnail}

Nach der Installation können Sie folgende Erweiterung aktivieren:

![Installationsbestätigung](images/how_to_backup_your_wordpress_9.png){.thumbnail}

Sobald die Domain aktiviert ist, erscheint sie in der Liste der Domainendungen:

![Liste der installierten Domainendungen](images/how_to_backup_your_wordpress_10.png){.thumbnail}

#### 2.2 - Konfigurieren Sie Ihre Backups

Klicken Sie auf der oben genannten Seite auf `Einstellungen`{.action} und dann auf der Seite `UpdraftPlus Backup/Restore` auf den Tab `Einstellungen`{.action}:

![Seite UpdraftPlus Backup/Restore](images/how_to_backup_your_wordpress_11.png){.thumbnail}

Legen Sie das tägliche Backup Ihrer Dateien und Datenbanken fest:

![UpdraftPlus Einstellungen Seite](images/how_to_backup_your_wordpress_12.png){.thumbnail}

Wählen Sie das Backup per E-Mail aus.

Die Backups werden an die E-Mail-Adresse des Administrator-Accounts (den von Ihnen verwendeten Account) versendet:

![Sicherung per E-Mail](images/how_to_backup_your_wordpress_13.png){.thumbnail}

Klicken Sie am Ende der Seite auf `Änderungen speichern`{.action}, um zu bestätigen.

### 2.3 - Führen Sie Ihr erstes Backup durch

Gehen Sie auf den Tab `Sichern/Wiederherstellen`{.action} und klicken Sie auf den Button `Sichern`{.action}:

![Seite UpdraftPlus Sichern/Wiederherstellen](images/how_to_backup_your_wordpress_14.png){.thumbnail}

Klicken Sie im angezeigten Fenster erneut auf `Sichern`{.action}:

![Seite Sicherung/Wiederherstellung von UpdraftModal](images/how_to_backup_your_wordpress_15.png){.thumbnail}

Sobald Ihre Backups abgeschlossen sind, erhalten Sie zwei E-Mails: eines mit dem Inhalt Ihres WordPress, das andere mit der Datenbank Ihrer Website.
Wenn Sie die E-Mails nicht erhalten, überprüfen Sie bitte die E-Mail-Adresse des von Ihnen verwendeten Accounts (im Bereich `Accounts`{.action}). Überprüfen Sie auch Ihre Ordner "SPAM".

### Wie oft werden Sicherungen durchgeführt?

Die Häufigkeit Ihrer Backups hängt davon ab, wie viel Sie Ihren Inhalt ändern. Ein tägliches Backup ist nützlich, wenn Sie täglich Inhalte auf Ihrer Website veröffentlichen. Passen Sie die Frequenz an Ihre Publikationen an. Sie können das Update manuell durchführen (dies ist die standardmäßig angebotene Option). Es wird auch empfohlen, ein Backup durchzuführen, sobald Sie ein Thema oder eine Endung installieren oder ändern.

## Was Sie behalten müssen

- Die Integration einer regelmäßigen Backup-Routine ist eine gute Methode, um den Inhalt Ihrer Website zu sichern.
- Achten Sie darauf, dass Ihre Backups selbst gesichert sind.
- Erstellen Sie ein Backup, bevor Sie ein Update durchführen, und überprüfen Sie anschließend, dass alles korrekt auf Ihrer Website funktioniert. 

Wenn Sie diese bewährten Verfahren anwenden, haben Sie die Möglichkeit, zu einer gesunden früheren Version zurückzukehren.

## Weiterführende Informationen <a name="go-further"></a>

- [offizielle Website von WordPress](https://wordpress.org){.external}
- [Mehr Informationen zu den Sicherungen Ihres Webhostings](https://docs.ovh.com/fr/hosting/specificites-techniques-hebergements-mutualises/#informations-sur-les-sauvegardes-automatiques)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.