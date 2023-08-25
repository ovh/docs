---
title: "Backup einer Webhosting-Datenbank exportieren"
excerpt: "Diese Anleitung erklärt, wie Sie ein Backup einer Datenbank Ihres OVHcloud Webhostings exportieren."
updated: 2023-08-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>
 
## Ziel

Datenbanken werden von den meisten Websites verwendet, und **C**ustomer **M**anagement **S**ystem (**CMS***) wie *WordPress*, *Joomla!*, *PrestaShop* ou *Drupal*. In der Regel speichern Sie dynamische Elemente wie zum Beispiel Kommentare, Benutzer / Passwörter, den Lagerbestand, wenn Sie eine E-Commerce-Seite haben, oder Artikel. Aus verschiedenen Gründen müssen Sie ein Backup Ihrer Datenbank erstellen, um deren Inhalt wiederherzustellen.

**Diese Anleitung erklärt, wie Sie ein Backup einer Datenbank Ihres OVHcloud Webhostings erstellen.**

## Voraussetzungen

- Sie haben ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Ihr [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot beinhaltet eine Datenbank.
- Je nach der verwendeten Backup-Methode benötigen Sie Zugriff auf die Verwaltung Ihres Webhosting Angebots über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} oder die erforderlichen Login-Daten, um sich mit der Datenbank zu verbinden.

## In der praktischen Anwendung

Legen Sie zunächst fest, wie Sie das Backup der Datenbank wiederherstellen möchten. Sie haben mehrere Möglichkeiten:

- **Backup-Tool von OVHcloud verwenden**: Mit dieser Lösung können Sicherungen Ihrer Datenbanken über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} abgerufen werden. Für diese Methode sind keine besonderen technischen Kenntnisse erforderlich.

- **Backup über das phpMyAdmin-Webinterface**: Loggen Sie sich für diese Methode im *phpMyAdmin*-Interface ein, um die Operation durchzuführen. Dazu ist es notwendig, das *phpMyAdmin* Interface zu beherrschen.

- **Backup über ein Skript erstellen**: Für diese Methode muss ein Skript erstellt werden, das auf Ihrem OVHcloud Webhosting gespeichert ist, um das Backup durchzuführen. Für diese Erstellung sind spezielle Kenntnisse erforderlich.

- **Backup über einen SSH-Befehl erstellen** : Loggen Sie sich hierfür via SSH in Ihren FTP-Speicherbereich ein und verwenden Sie Befehle, um mit diesem zu interagieren. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein spezielles [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot erforderlich.

> [!success]
>
> Wenn Sie ein Backup Ihrer Datenbank erstellen, weil diese voll ist, lesen Sie unsere Anleitung „[Was tun, wenn meine Datenbank voll ist?](/pages/web/hosting/sql_overquota_database)“.
>

Einige der oben genannten Methoden sind keiner OVHcloud-Schnittstelle inhärent. Daher sollten Sie bei diesen Ihren Vorstellungen entsprechend vorgehen. Im Folgenden geben wir Ihnen einige Informationen, die jedoch nicht die Unterstützung durch einen Webmaster ersetzen können, wenn Sie Schwierigkeiten haben, diese allein zu realisieren.

Folgen Sie dieser Anleitung nun entsprechend der von Ihnen ausgewählten Backup-Methode.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt daher in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
>

### Backup über das Tool von OVHcloud abrufen

Um auf das Backup-Tool von OVHcloud zuzugreifen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Sie können nun wählen, ob Sie ein neues Backup erstellen oder ein bereits existierendes Backup wiederherstellen möchten.

#### Schritt 1: Neues Backup der Datenbank durchführen

Bleiben Sie im Tab `Datenbanken`{.action} und klicken Sie auf den Button `...`{.action} rechts neben der zu sichernden Datenbank und dann auf `Backup erstellen`{.action}.

![databaseDump](images/database-dump-step2.png){.thumbnail}

Wählen Sie im angezeigten Fenster das gewünschte Backup-Datum aus und klicken Sie auf den Button `Weiter`{.action}. Stellen Sie sicher, dass die Informationen in der Übersicht korrekt sind, und klicken Sie auf `Bestätigen`{.action}, um den Vorgang zu starten.

Warten Sie, bis die Sicherung abgeschlossen ist. Sobald diese verfügbar ist, können Sie sie abrufen.

![databaseDump](images/database-dump-step3.png){.thumbnail}

#### Schritt 2: Backup der Datenbank abrufen

Bleiben Sie im Tab `Datenbanken`{.action} und klicken Sie auf den Button `...`{.action} rechts neben der zu sichernden Datenbank und dann auf `Backup wiederherstellen`{.action}.

![databaseDump](images/database-dump-step4.png){.thumbnail}

Die angezeigte Tabelle enthält alle verfügbaren Backups der ausgewählten Datenbank. Dort sehen Sie das genaue Datum, an dem die Backups erstellt wurden, sowie das Datum, an dem diese aus dem Tool von OVHcloud gelöscht werden.

Um ein Backup herunterzuladen klicken Sie auf den Button `...`{.action} rechts von dem Backup, das Sie wiederherstellen möchten, und dann auf `Backup herunterladen`{.action}. Es erscheint ein Fenster, in dem Sie dazu aufgefordert werden, das Backup auf Ihrem Rechner zu speichern. Akzeptieren und warten, bis die Sicherung heruntergeladen wurde.

![databaseDump](images/database-dump-step5.png){.thumbnail}

### Backup über das phpMyAdmin-Webinterface exportieren

Loggen Sie sich hierzu auf *phpMyAdmin* ein. Um den Link für den Zugriff darauf zu erfahren, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Klicken Sie auf den Button `...`{.action} rechts neben der betreffenden Datenbank und dann auf `Zugang zu phpMyAdmin`{.action}.

![databaseDump](images/database-dump-step6.png){.thumbnail}

Geben Sie im Login-Interface für *phpMyAdmin* die Informationen der Datenbank ein, und loggen Sie sich ein. Gehen Sie nach dem Login auf den Tab `Exportieren`{.action} und wählen Sie zwei Exportmethoden aus:

- **Schnelle Methode**: Sie können das Exportformat des Backups festlegen. Das gängigste Format ist SQL. Andere werden jedoch nach Bedarf angeboten;

- **Benutzerdefinierte Methode**: Sie können die Exporteinstellungen für das Backup im Detail festlegen.

> [!warning]
>
> Da das *phpMyAdmin* Interface nicht von OVHcloud erstellt wurde, müssen Sie die Operation nach Ihren eigenen Kenntnissen durchführen. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder die Website des Herausgebers des Interfaces aufzurufen. Für externe Dienstleistungen bieten wir leider keine Unterstützung.
>

### Backup mit Skript exportieren

Die Änderung erfolgt in mehreren Schritten. Vergewissern Sie sich, dass Sie über die Login-Daten für die Datenbank verfügen, für die Sie ein Backup erstellen möchten: Benutzername, zugehöriges Passwort, Name der Datenbank und Serveradresse.

> [!warning]
>
> Für diese Lösung sind Programmierkenntnisse erforderlich. Im Folgenden geben wir Ihnen einige Informationen zur Vorgehensweise. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung.
>

#### Schritt 1: Backup-Skript erstellen

Im ersten Schritt erstellen Sie das Skript, um das Datenbank-Backup durchzuführen. Im Folgenden finden Sie ein Beispielskript, das Ihnen dabei helfen kann. Sollten Sie jedoch Schwierigkeiten haben, kann dieses Beispiel nicht die Unterstützung ersetzen, die Ihnen ein Webmaster bieten könnte.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql");
?>
```

Achten Sie darauf, die generischen Informationen in diesem Skript mit den Informationen aus der betreffenden Datenbank zu ersetzen. Wir empfehlen Ihnen, das Skript am Ende zum Beispiel „backup.php“ zu nennen.

|Informationen|Ersetzen durch|
|---|---|
|server_address|Die Serveradresse der betreffenden Datenbank.|
|user_name|Der Benutzername mit Datenbankzugriff.|
|user_password|Das Kennwort für den oben angegebenen Benutzernamen.|
|name_of_database|Der Name der betreffenden Datenbank.|
|backup_file_name|Der Name der Sicherungsdatei, nachdem die Sicherung ausgeführt wurde.|

#### Schritt 2: Skript auf den FTP-Speicherplatz hochladen

Nachdem Sie das Backup-Skript erstellt haben, müssen Sie es auf den FTP-Speicherplatz Ihres Webhostings hochladen. Weitere Informationen hierzu finden Sie in Schritt 2 der Dokumentation „[Mit Speicherplatz verbinden](/pages/web/hosting/hosting_how_to_get_my_website_online)“.

Laden Sie das Skript in den Ordner herunter, der die Website enthält, die die Datenbank verwendet, um die folgenden Schritte auszuführen. **Achten Sie beim Herunterladen des Skripts besonders auf den Dateinamen des Backup-Skripts.** Überschreiben Sie beim Herunterladen des Skripts keine bereits vorhandene Datei mit demselben Namen auf dem FTP-Speicherplatz. Wenn eine solche Warnmeldung angezeigt wird, ändern Sie den Namen des neu erstellten Skripts in, und versuchen Sie dann erneut, das Skript herunterzuladen.

#### Schritt 3: Skript aufrufen

Sobald das Skript auf den FTP-Speicherplatz hochgeladen wurde, initiieren Sie den Code im Skript, indem Sie das Skript aufrufen.

Greifen Sie hierzu über Ihren Webbrowser auf die vollständige Skript-URL zu (zum Beispiel: mypersonaldomain.ovh/backup.php, wenn Sie Ihr Skript „backup.php“ genannt haben). Wenn die im Skript eingegebenen Informationen korrekt sind, startet das Backup. Warten Sie einen Moment, bis der Vorgang abgeschlossen ist. Ist das nicht der Fall, überprüfen Sie die im Skript eingegebenen Informationen und versuchen Sie es erneut.

#### Schritt 4: Backup aus dem FTP-Speicherplatz exportieren

Nachdem das Backup erstellt wurde, laden Sie es in den Ordner zurück, in den das Backup-Skript hochgeladen wurde. Die Datenbanksicherung muss den Namen haben, der zuvor im Skript definiert wurde. Sie müssen nur noch das Backup auf Ihrem eigenen Gerät wiederherstellen.

Wir empfehlen Ihnen dringend, die Backup-Datei und das Skript aus dem Verzeichnis zu löschen, in dem sie sich befinden, bevor Sie den Vorgang abschließen.

> [!primary]
>
> Die Verwendung eines Backup-Skripts mit unserem System geplanter Tasks („CRON“ Tasks) kann es Ihnen ermöglichen, Backups in der von Ihnen gewünschten Häufigkeit zu automatisieren. Weitere Informationen zu geplanten Tasks finden Sie in unserer Dokumentation: „[Einen geplanten Task (CRON) auf dem Webhosting einrichten](/pages/web/hosting/cron_tasks)“.
>

### Backup per SSH-Befehl abrufen

Für diese Aktion müssen Sie Befehle über ein Terminal ausführen, um mit Ihrem FTP-Speicherplatz zu interagieren.

> [!warning]
>
> Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse erforderlich. Im Folgenden geben wir Ihnen einige Informationen zur Vorgehensweise, empfehlen Ihnen jedoch, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung.
>

Wenn Sie via SSH in Ihren FTP-Speicherplatz eingeloggt sind, geben Sie einen Befehl ein, um ein Backup der Datenbank zu erstellen. Im Folgenden finden Sie eine Beschreibung, die Ihnen dabei helfen kann. Bitte beachten Sie, dass das Backup im aktuellen Verzeichnis erstellt wird, wenn Sie den Befehl an Ihr Terminal senden.

```sh
mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql
```

Ersetzen Sie die allgemeinen Informationen für diesen Befehl durch die Informationen der betreffenden Datenbank. Wenn das Backup abgeschlossen ist, muss es nur noch auf Ihrem Rechner gespeichert werden.


|Informationen|Ersetzen durch|
|---|---|
|server_address|Die Serveradresse der betreffenden Datenbank.|
|user_name|Der Benutzername mit Datenbankzugriff.|
|user_password|Das Kennwort für den oben angegebenen Benutzernamen.|
|name_of_database|Der Name der betreffenden Datenbank.|
|backup_file_name|Der Name der Sicherungsdatei, nachdem die Sicherung ausgeführt wurde.|

## Weiterführende Informationen <a name="go-further"></a>

[Tutorial - Was tun, wenn meine Datenbank voll ist?](/pages/web/hosting/sql_overquota_database)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
