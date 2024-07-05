---
title: "Backup einer Webhosting-Datenbank exportieren"
excerpt: "Erfahren Sie hier, wie Sie ein Backup einer Datenbank Ihres OVHcloud Webhostings exportieren"
updated: 2023-08-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>
 
## Ziel

Datenbanken werden von den meisten Websites und **C**ontent **M**anagement **S**ystemen (**CMS**) wie *WordPress*, *Joomla!*, *PrestaShop* ou *Drupal* eingesetzt. In der Regel speichern Sie dynamische Elemente wie zum Beispiel Kommentare, Benutzerkennungen, Bestände von E-Commerce-Seiten oder Artikel. Es kann aus verschiedenen Gründen erforderlich sein, ein Backup Ihrer Datenbank zu erstellen, um deren Inhalt zu exportieren.

**Diese Anleitung erklärt, wie Sie ein Backup einer Datenbank Ihres OVHcloud Webhostings erstellen.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting){.external}, das eine Datenbank enthält.
- Je nach der verwendeten Backup-Methode benötigen Sie Zugriff auf die Verwaltung Ihres Webhostings über das [OVHcloud Kundencenter](/links/manager){.external} oder die Login-Daten der Datenbank.

## In der praktischen Anwendung

Entscheiden Sie zunächst, mit welcher Methode Sie das Backup der Datenbank wiederherstellen möchten:

- **Backup über das OVHcloud Backup-Tool**: Erstellen Sie die Backups Ihrer Datenbanken im [OVHcloud Kundencenter](/links/manager){.external}. Für diese Methode sind keine besonderen technischen Kenntnisse erforderlich.

- **Backup über das *phpMyAdmin*-Webinterface**: Loggen Sie sich im *phpMyAdmin*-Interface ein, um dort die Aktion durchzuführen. Sie sollten für diese Methode mit dem *phpMyAdmin*-Webinterface vertraut sein.

- **Backup über ein Skript erstellen**: Hierzu muss zunächst ein Skript geschrieben und auf Ihrem OVHcloud Webhosting gespeichert werden. Für das Schreiben des Skripts sind spezifische technische Kenntnisse erforderlich.

- **Backup über SSH-Zugang erstellen**: Loggen Sie sich hierfür via SSH in Ihren FTP-Speicherbereich ein und verwenden Sie die Kommandozeile, um mit diesem zu interagieren. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein kompatibles [OVHcloud Webhosting](/links/web/hosting){.external} erforderlich.

> [!success]
>
> Wenn Sie ein Backup Ihrer Datenbank erstellen, weil diese voll ist, lesen Sie unsere Anleitung „[Was tun, wenn meine Datenbank voll ist?](/pages/web_cloud/web_hosting/sql_overquota_database)“.
>

Einige der oben aufgeführten Methoden lassen sich nicht über ein OVHcloud Interface ausführen, weshalb deren exakte Verwendung hier nicht aufgeführt werden kann. Im Folgenden geben wir Ihnen einige Informationen, die jedoch nicht die Unterstützung eines Webmasters ersetzen können.

Folgen Sie dieser Anleitung nun entsprechend der von Ihnen ausgewählten Backup-Methode.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

### Backup mit dem OVHcloud Backup-Tool exportieren

Loggen Sie sich für den Zugriff auf das Backup-Tool in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Sie können nun wählen, ob Sie ein neues Backup erstellen oder ein bereits existierendes Backup exportieren möchten.

#### Schritt 1: Neues Backup der Datenbank durchführen

Bleiben Sie im Tab `Datenbanken`{.action} und klicken Sie auf den Button `...`{.action} rechts neben der zu sichernden Datenbank und dann auf `Backup erstellen`{.action}.

![databaseDump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-backup.png){.thumbnail}

Wählen Sie im angezeigten Fenster das gewünschte Backup-Datum aus und klicken Sie auf den Button `Weiter`{.action}. Stellen Sie sicher, dass die Informationen in der Übersicht korrekt sind, und klicken Sie auf `Bestätigen`{.action}, um den Vorgang zu starten.

Warten Sie, bis die Sicherung abgeschlossen ist. Sobald diese verfügbar ist, können Sie sie abrufen.

![databaseDump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-backup-step-1.png){.thumbnail}

#### Schritt 2: Datenbank-Backup exportieren

Bleiben Sie im Tab `Datenbanken`{.action} und klicken Sie auf den Button `...`{.action} rechts neben der zu sichernden Datenbank und dann auf `Backup wiederherstellen`{.action}.

![databaseDump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/restore-backup.png){.thumbnail}

Die angezeigte Tabelle enthält alle verfügbaren Backups der ausgewählten Datenbank. Dort sehen Sie das genaue Datum, an dem die Backups erstellt wurden, sowie das Datum, an dem diese aus dem Tool von OVHcloud gelöscht werden.

Um ein Backup herunterzuladen klicken Sie auf den Button `...`{.action} rechts von dem Backup, das Sie wiederherstellen möchten, und dann auf `Backup herunterladen`{.action}. Es erscheint ein Fenster, in dem Sie dazu aufgefordert werden, das Backup auf Ihrem Rechner zu speichern. Akzeptieren und warten, bis die Sicherung heruntergeladen wurde.

![databaseDump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/download-the-backup.png){.thumbnail}

### Backup über das phpMyAdmin-Webinterface exportieren

Loggen Sie sich hierzu auf *phpMyAdmin* ein. Um den Link für den Zugriff darauf zu erfahren, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Klicken Sie auf den Button `...`{.action} rechts neben der betreffenden Datenbank und dann auf `Zugang zu phpMyAdmin`{.action}.

![databaseDump](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/go-to-phpmyadmin.png){.thumbnail}

Geben Sie im Login-Interface von *phpMyAdmin* die Informationen zu Ihrer Datenbank ein, um sich einzuloggen. Gehen Sie nach dem Login auf den Tab `Exportieren`{.action} und wählen Sie eine Exportmethode aus:

- **Schnelle Methode**: Sie können das Exportformat des Backups festlegen. Das gängigste Format ist SQL. Bei Bedarf können Sie auch ein anderes Format auswählen.

- **Benutzerdefinierte Methode**: Sie können Export-Einstellungen des Backups selbst im Detail festlegen.

> [!warning]
>
> Da *phpMyAdmin* kein Interface von OVHcloud ist, müssen Sie die Operation nach Ihren eigenen Kenntnissen durchführen. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren und/oder die Website des Herausgebers des Interfaces aufzurufen. Für externe Dienstleistungen bieten wir leider keine Unterstützung.
>

### Backup über ein Skript exportieren

Die Änderung erfolgt in mehreren Schritten. Vergewissern Sie sich, dass Sie über die Login-Daten für die Datenbank verfügen, für die ein Backup erstellt werden soll: Benutzername, das zugehörige Passwort, Name der Datenbank und Serveradresse.

> [!warning]
>
> Für diese Lösung sind Programmierkenntnisse erforderlich. Im Folgenden geben wir Ihnen einige Informationen zur Vorgehensweise. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung.
>

#### Schritt 1: Backup-Skript erstellen

Im ersten Schritt erstellen Sie das Skript, um das Datenbank-Backup durchzuführen. Im Folgenden finden Sie ein Beispielskript, das Ihnen dabei helfen kann. Es ersetzt allerdings nicht die Hilfe eines Webmasters.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql");
?>
```

Achten Sie darauf, die generischen Daten im Beispielskrip mit den Informationen der betreffenden Datenbank zu ersetzen. Wir empfehlen, das Skript am Ende zum Beispiel „backup.php“ zu benennen.

|Informationen|Ersetzen mit|
|---|---|
|server_address|Die Serveradresse der Datenbank|
|user_name|Name des Benutzers, der Zugriff auf die betreffende Datenbank hat|
|user_password|Passwort zum betreffenden Benutzernamen|
|name_of_database|Der Name der Datenbank|
|backup_file_name|Name der zu erstellenden Backup-Datei|

#### Schritt 2: Skript auf den FTP-Speicherplatz hochladen

Nachdem Sie das Backup-Skript erstellt haben, plazieren Sie es auf dem Speicherplatz Ihres Webhostings. Weitere Informationen hierzu finden Sie in Schritt 2 der [Anleitung zur Nutzung von FTP](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

Legen Sie das Skript im Ordner ab, der die Website enthält, die die Datenbank verwendet, um die folgenden Schritte auszuführen. **Achten Sie bei der Verwendung des Skripts besonders auf dessen Dateinamen.** Stellen Sie sicher, dass Sie beim Hochladen des Skripts keine bereits im Speicherplatz vorhandene Datei löschen, die denselben Namen trägt. Erscheint ein entsprechender Warnhinweis, ändern Sie den Skriptnamen und laden Sie es anschließend erneut hoch.

#### Schritt 3: Skript ausführen

Nachdem das Skript auf den Speicherplatz hochgeladen wurde, können Sie den darin enthaltenen Code ausführen. Hierzu muss zunächst das Skript aufgerufen werden.

Um das Skript aufzurufen, geben Sie die vollständige Skript-URL in Ihrem Webbrowser ein (zum Beispiel: mypersonaldomain.ovh/backup.php, wenn Sie Ihr Skript „backup.php“ genannt haben). Wenn die im Skript eingegebenen Informationen korrekt sind, startet das Backup. Warten Sie einen Moment, bis der Vorgang abgeschlossen ist. Sollte das Backup nicht starten, überprüfen Sie die im Skript eingegeben Informationen und starten Sie den Vorgang erneut.

#### Schritt 4: Backup aus dem FTP-Speicherplatz exportieren

Nachdem das Backup erstellt wurde, können Sie es aus dem Ordner, in den das Backup-Skript hochgeladen wurde, exportieren. Sie finden das Datenbank-Backup unter dem Namen, der zuvor im Skript festgelegt wurde. Jetzt muss das Backup nur noch auf Ihrem Rechner gespeichert werden.

Wir empfehlen, die Backup-Datei und das Skript aus dem Webseiten-Verzeichnis zu löschen, bevor Sie den Vorgang abschließen.

> [!primary]
>
> Mithilfe eines Backup-Skripts und geplanter Tasks (*Cronjob*) können Sie automatische Backups zu von Ihnen definierten Intervallen durchführen. Weitere Informationen zu geplanten Tasks finden Sie in unserer Dokumentation: [Automatische Tasks mit einem Webhosting verwenden](/pages/web_cloud/web_hosting/cron_tasks).
>

### Backup via SSH exportieren

Bei dieser Methode werden Befehle über ein Terminal eingegeben, um mit Ihrem FTP-Speicherplatz zu interagieren.

> [!warning]
>
> Für diese Art des Zugriffs sind fortgeschrittene Kenntnisse erforderlich. Im Folgenden geben wir Ihnen einige Informationen zur Vorgehensweise, empfehlen Ihnen aber dennoch, bei Bedarf einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung.
>

Wenn Sie via SSH in Ihren FTP-Speicherplatz eingeloggt sind, können Sie den Befehl zur Sicherung der Datenbank eingeben. Im Folgenden finden Sie ein Beispiel, um Ihnen dabei zu helfen. Bevor Sie den Befehl über das Terminal ausführen, stellen Sie sicher, dass Sie sich in dem Verzeichnis befinden, in dem die Backup-Datei erstellt werden soll.

```sh
mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql
```

Ersetzen Sie die generischen Daten in diesem Befehl durch die Informationen der betreffenden Datenbank. Wenn das Backup abgeschlossen ist, muss die erstellte Datei nur noch auf Ihrem lokalen Gerät gespeichert werden.

|Informationen|Ersetzen mit|
|---|---|
|server_address|Die Serveradresse der Datenbank|
|user_name|Name des Benutzers, der Zugriff auf die betreffende Datenbank hat|
|user_password|Passwort zum betreffenden Benutzernamen|
|name_of_database|Der Name der Datenbank|
|backup_file_name|Name der zu erstellenden Backup-Datei|

## Weiterführende Informationen <a name="go-further"></a>

[Tutorial - Was tun, wenn meine Datenbank voll ist?](/pages/web_cloud/web_hosting/sql_overquota_database)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.