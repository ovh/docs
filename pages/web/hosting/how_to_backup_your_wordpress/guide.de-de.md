---
title: "Tutorial - Backup Ihrer WordPress Installation"
slug: realize-backup-wordpress
excerpt: "Erfahren Sie hier, wie Sie Dateien und Datenbank Ihrer WordPress Website sichern"
section: 'Tutorials'
order: 021
updated: 2023-02-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 22.02.2023**

## Ziel

Auch mit allen Vorsichtsmaßnahmen kann Ihre Website von Fehlfunktionen betroffen sein (versehentliches Überschreiben von Dateien, Konfigurationsfehler, Sicherheitslücken, Hacks). Dies kann teilweise oder vollständig zu Datenverlusten führen.<br>
Die regelmäßige Sicherung Ihrer Website ist eine gute Vorgehensweise. So können Sie zu einem früheren Zustand Ihrer Website zurückkehren, wenn eine Störung auftritt.

Sie sind für Backups von auf Webhostings gehosteten Websites alleine verantwortlich. Neben den von OVHcloud automatisch erzeugten Backups (nicht garantiert) empfehlen wir, eigene Sicherungen regelmäßig anzulegen und mithilfe geeigneter Backup-Medien (Festplatte, USB-Laufwerk etc.) zu verwalten.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der [WordPress Community](https://wordpress.com/support/){.external} zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

**Dieses Tutorial erklärt, wie Sie Ihre WordPress Website und deren Datenbank sichern.**

## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/) mit einer [WordPress Installation](https://docs.ovh.com/de/hosting/wordpress-first-steps/).

## In der praktischen Anwendung

Sie können ein Backup auf zwei Arten durchführen: **Manuell** oder über ein **Plugin**.

OVHcloud Webhostings beinhalten [automatische Sicherungen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/) (außervertraglich) und stellen einen Zugang zu diesen Backups zur Verfügung. Es liegt jedoch in Ihrer Verantwortung, eine sinnvolle Sicherungsplanung mit Ihren eigenen Wiederherstellungspunkten einzurichten.

### Methode 1: Manuelle Sicherung durchführen

Das manuelle Backup muss in zwei Schritten erfolgen. Speichern Sie zuerst die PHP-Dateien Ihrer Website und exportieren Sie Ihre Datenbank.

#### 1.1 Dateien Ihrer Website sichern

Der Datentransfer erfolgt über einen FTP-Client, z.B. FileZilla. Weitere Informationen finden Sie in unserem Tutorial "[FileZilla mit Ihrem OVHcloud Hosting verwenden](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/)".

Wenn Sie mit Ihrem Server über FTP verbunden sind, kopieren Sie den Inhalt des Verzeichnisses `www` (per Drag & Drop) zu einem lokalen Ordner. Dieses Verzeichnis enthält alle Dateien und Verzeichnisse Ihrer WordPress Installation (Einstellungen, Themes, Medien, etc.).

![Übersicht der WordPress Dateien und Ordner](images/how_to_backup_your_wordpress_1.png){.thumbnail}

Klicken Sie auf das Verzeichnis `www` und ziehen Sie es zum linken Fenster auf das Verzeichnis Ihrer Wahl. Der Dateitransfer beginnt automatisch.

Bei einer Fehlfunktion Ihrer Website müssen Sie die umgekehrte Operation durchführen, indem Sie die Zieldateien überschreiben.

#### 1.2 Datenbank exportieren

Um Ihre Datenbank zu exportieren, loggen Sie sich Sie sich über die URL, die Sie bei der Installation Ihres Webhostings erhalten haben, in das *PHPMyAdmin* Interface ein.

> [!success]
>
> Folgen Sie unserer Anleitung zum [Export einer Datenbank](https://docs.ovh.com/de/hosting/webhosting_hilfe_zum_export_von_datenbanken/).

![PHPMyAdmin Zugang - Empfang](images/how_to_backup_your_wordpress_2.png){.thumbnail}

Klicken Sie oben auf `Export`{.action}:

![PHPMyAdmin-Zugang - Exportieren](images/how_to_backup_your_wordpress_3.png){.thumbnail}

Übernehmen Sie die Voreinstellungen zum schnellen Export und SQL-Format.

Klicken Sie auf `Go`{.action}, um die gesamte Datenbank im SQL-Format (Structured Query Language) herunterzuladen.

![PHPMyAdmin Zugang - Exportieren - Download](images/how_to_backup_your_wordpress_4.png){.thumbnail}

### Methode 2: Backups über Plugin erstellen

Es gibt viele Plugins für WordPress zur Verwaltung von Backups. Das meistgenutzte ist [UpdraftPlus](https://wordpress.org/plugins/updraftplus/){.external} mit mehreren Millionen aktiven Installationen. Die kostenlose Version reicht aus, um Ihre Website zu sichern. Die Premium Version bietet mehr Optionen wie inkrementelle Backups, Migrationstools, Multisite-Backups, mehr Auswahl an Datenspeicher-Diensten, etc. .

Laden Sie das Plugin im Format `.zip` herunter. Die heruntergeladene Datei wurde in diesem Beispiel zu **updraftplus.zip** umbenannt.

#### 2.1 Zur Installation des Plugin im Admin-Bereich einloggen

Standardmäßig handelt es sich um Ihren Domainnamen gefolgt von `/wp-admin`:

![Administrator-Anbindung an wp-admin](images/how_to_backup_your_wordpress_5.png){.thumbnail}

Gehen Sie auf der Startseite in den Bereich `Plugins`{.action} und klicken Sie dann auf `Installieren`{.action}:

![Plugin hinzufügen](images/how_to_backup_your_wordpress_6.png){.thumbnail}

Wählen Sie das Plugin aus, indem Sie auf den Button `Durchsuchen`{.action} klicken:

![Plugin hochladen](images/how_to_backup_your_wordpress_7.png){.thumbnail}

Klicken Sie auf `Jetzt installieren`{.action}:

![Plugin installieren](images/how_to_backup_your_wordpress_8.png){.thumbnail}

Nach der Installation können Sie das Plugin aktivieren:

![Installationsbestätigung](images/how_to_backup_your_wordpress_9.png){.thumbnail}

Sobald die Erweiterung aktiviert ist, erscheint sie in der Liste der Plugins:

![Liste der installierten Domainendungen](images/how_to_backup_your_wordpress_10.png){.thumbnail}

#### 2.2 Backups konfigurieren

Klicken Sie auf der oben genannten Seite auf `Einstellungen`{.action} und dann auf der Seite `UpdraftPlus Backup/Restore` auf den Tab `Einstellungen`{.action}:

![Seite UpdraftPlus Backup/Restore](images/how_to_backup_your_wordpress_11.png){.thumbnail}

Legen Sie das tägliche Backup für Ihre Dateien und Datenbanken fest:

![UpdraftPlus Einstellungen Seite](images/how_to_backup_your_wordpress_12.png){.thumbnail}

Wählen Sie E-Mail als Methode aus.

Die Backups werden an die E-Mail-Adresse des Administrator-Accounts (den von Ihnen verwendeten Account) versendet:

![Sicherung per E-Mail](images/how_to_backup_your_wordpress_13.png){.thumbnail}

Klicken Sie am Ende der Seite auf `Änderungen speichern`{.action}, um zu bestätigen.

### 2.3 Erstes Backup ausführen

Gehen Sie auf den Tab `Sichern/Wiederherstellen`{.action} und klicken Sie auf den Button `Jetzt sichern`{.action}:

![Seite UpdraftPlus Sichern/Wiederherstellen](images/how_to_backup_your_wordpress_14.png){.thumbnail}

Klicken Sie im neuen Fenster auf `Jetzt sichern`{.action}:

![Seite Sicherung/Wiederherstellung](images/how_to_backup_your_wordpress_15.png){.thumbnail}

Sobald Ihre Backups abgeschlossen sind, erhalten Sie eine E-Mail mit den Dateien Ihres WordPress und eine mit der Datenbank Ihrer Website.
Wenn Sie die E-Mails nicht erhalten, überprüfen Sie die E-Mail-Adresse des von Ihnen verwendeten Accounts (im Bereich `Benutzer`{.action}). Überprüfen Sie auch Ihre Ordner "Spam" oder "Junk".

### Planung von Sicherungen

Die Häufigkeit Ihrer Backups hängt davon ab, wie oft Sie Ihre Seiten aktualisieren. Eine tägliche Sicherung ist nützlich, wenn Sie jeden Tag Inhalte auf Ihrer Website veröffentlichen. Passen Sie die Frequenz an Ihre Veröffentlichungen an. Sie können das Update manuell durchführen (dies ist die standardmäßig angebotene Option). Es wird auch empfohlen, ein Backup durchzuführen, bevor Sie ein Theme oder eine Endung installieren oder ändern.

## Zusammenfassung

- Die Integration einer regelmäßigen Backup-Routine ist eine gute Methode, um den Inhalt Ihrer Website zu sichern.
- Achten Sie darauf, dass Ihre Backups selbst gesichert sind.
- Erstellen Sie ein Backup, bevor Sie Updates durchführen, und überprüfen Sie anschließend, dass alles korrekt auf Ihrer Website funktioniert.

Wenn Sie diese bewährten Verfahren anwenden, können Sie Ihre Website stets zu einem funktionalen früheren Zustand wiederherstellen.

## Weiterführende Informationen <a name="go-further"></a>

- [Offizielle Website von WordPress](https://wordpress.org){.external}
- [Mehr Informationen zu den Sicherungen Ihres Webhostings](https://docs.ovh.com/de/hosting/technische-eigenschaften-web-hosting/#informationen-zu-den-automatischen-backups)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
