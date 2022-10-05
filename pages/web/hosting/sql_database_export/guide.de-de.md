---
title: 'Backup einer Webhosting-Datenbank exportieren'
excerpt: 'Hier erfahren Sie, wie Sie ein Backup einer Datenbank Ihres OVH Webhostings exportieren.'
slug: webhosting_hilfe_zum_export_von_datenbanken
legacy_guide_number: g1394
section: 'Datenbanken'
order: 03
---

**Stand 27.11.2018**

## Einleitung

Fast alle Content Management Systeme (CMS) wie WordPress oder Joomla! verwenden heutzutage Datenbanken, um sogenannte dynamische Inhalte wie beispielsweise Kommentare oder Artikel zu speichern. Es kann aus verschiedenen Gründen erforderlich sein, ein Backup Ihrer Datenbank zu erstellen, um deren Inhalt zu exportieren.

**In dieser Anleitung erfahren Sie, wie Sie ein Backup der Datenbank Ihres OVH Webhostings erstellen.**

## Voraussetzungen

- Sie haben ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Ihr [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot beinhaltet eine Datenbank.
- Je nach der verwendeten Backup-Methode benötigen Sie Zugriff auf die Verwaltung Ihres Webhosting Angebots über das [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} oder die erforderlichen Login-Daten, um sich mit der Datenbank zu verbinden.

## Beschreibung

Bevor Sie beginnen, wählen Sie die Methode aus, die Sie für den Export des Backups der Datenbank anwenden möchten. Entsprechend Ihrer technischen Kenntnisse zu diesem Thema stehen Ihnen mehrere Möglichkeiten zur Verfügung.

- **Backup über das OVH Backup-Tool**: Erstellen Sie die Backups Ihrer Datenbanken über das [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Hierfür sind keine besonderen technischen Kenntnisse erforderlich.

- **Backup über das phpMyAdmin-Webinterface**: Loggen Sie sich im phpMyAdmin-Interface ein, um dort die Aktion durchzuführen. Sie sollten für diese Methode mit dem phpMyAdmin-Webinterface vertraut sein.

- **Backup über ein Skript erstellen**: Hierzu muss zunächst ein Skript geschrieben und auf Ihrem OVH Webhosting gespeichert werden. Für das Schreiben des Skripts sind spezifische technische Kenntnisse erforderlich.

- **Backup über einen SSH-Befehl erstellen**: Verbinden Sie sich hierfür via SSH mit Ihrem Speicherplatz und verwenden Sie die entsprechenden Befehle für die Erstellung des Backups. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein passendes [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot erforderlich.

Einige der oben aufgeführten Methoden lassen sich nicht über ein OVH Interface ausführen. Daher können wir Ihnen nicht sagen, wie diese umzusetzen sind. Im Folgenden geben wir Ihnen hierzu einige Informationen, sie ersetzen jedoch nicht die Unterstützung eines Webmasters. 

Folgen Sie dieser Anleitung nun entsprechend der von Ihnen ausgewählten Backup-Methode.

> [!warning]
>
> OVH stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVH leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

### Backup mit dem OVH Backup-Tool exportieren

Loggen Sie sich für den Zugriff auf das Backup-Tool in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Hier können Sie auswählen, ob Sie ein neues Backup erstellen und/oder ein bereits erstelltes Backup exportieren möchten.

#### Schritt 1: Neues Datenbank-Backup erstellen

Bleiben Sie im Tab `Datenbanken`{.action} und klicken Sie auf die drei Punkte rechts neben der Datenbank, von der Sie ein Backup erstellen möchten. Wählen Sie dann `Sicherung erstellen`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

Wählen Sie im angezeigten Fenster das gewünschte Backup-Datum und klicken Sie dann auf den Button `Weiter`{.action}. Vergewissern Sie sich, dass die Informationen in der Übersicht korrekt sind, und klicken Sie anschließend auf `Bestätigen`{.action}, um das Backup zu starten.

Warten Sie, bis das Backup ausgeführt wurde. Sobald es verfügbar ist, können Sie es exportieren.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Schritt 2: Datenbank-Backup exportieren

Bleiben Sie im Tab `Datenbanken`{.action} und klicken Sie auf die drei Punkte rechts neben der Datenbank, für die Sie ein Backup exportieren möchten. Wählen Sie dann `Sicherung wiederherstellen`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

Es werden Ihnen nun alle verfügbaren Backups der ausgewählten Datenbank angezeigt. In der Tabelle finden Sie das genaue Erstellungsdatum des jeweiligen Backups sowie das Datum, zu dem dieses vom OVH Backup-Tool wieder gelöscht wird.

Klicken Sie auf die drei Punkte rechts neben dem Backup, das Sie exportieren möchten, und gehen Sie dann auf `Sicherung herunterladen`{.action}, um das Backup herunterzuladen. Es öffnet sich ein Fenster, in dem Sie dazu aufgefordert werden, das Backup auf Ihrem Rechner zu speichern. Bestätigen Sie und warten Sie, bis das Backup heruntergeladen wurde.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Backup über das phpMyAdmin-Webinterface exportieren

Loggen Sie sich auf phpMyAdmin ein, um den Vorgang durchzuführen. Loggen Sie sich hierfür zunächst in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Klicken Sie auf die drei Punkte rechts neben der betreffenden Datenbank und gehen Sie dann auf `Zugang zu phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Geben Sie im phpMyAdmin-Webinterface die Informationen zu Ihrer Datenbank ein, wählen Sie über das Drop-down-Menü aus, ob Sie die aktuellen Daten der Datenbank (Current) oder Daten eines älteren Backups anzeigen möchten, und loggen Sie sich ein. Gehen Sie dann auf den Tab `Exportieren`{.action}. Ihnen werden zwei Exportmethoden vorgeschlagen.

- **Schnell**: Sie können das Exportformat für das Backup festlegen. Das gängigste Format ist SQL. Bei Bedarf können Sie auch ein anderes Format auswählen.

- **Angepasst**: Sie können Export-Einstellungen des Backups selbst im Detail festlegen.

> [!warning]
>
> Da das phpMyAdmin-Webinterface nicht von OVH entwickelt wurde, können wir Ihnen nicht sagen, wie das Backup durchzuführen ist. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder sich auf der Website des Herausgebers zu informieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Backup über ein Skript exportieren

Für diese Methode sind mehrere Schritte notwendig. Vergewissern Sie sich, dass Sie über die Login-Informationen für die Datenbank verfügen, für die ein Backup erstellt werden soll: Benutzername, das zugehörige Passwort, Name der Datenbank und Serveradresse.

> [!warning]
>
> Für diese Methode sind Programmierkenntnisse erforderlich. Im Folgenden haben wir einige Informationen zur Vorgehensweise zusammengetragen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

#### Schritt 1: Backup-Skript schreiben

Im ersten Schritt wird ein Skript geschrieben, um das Datenbank-Backup zu erstellen. Im Folgenden finden Sie ein Beispielskript, um Ihnen hierbei zu helfen. Es ersetzt allerdings nicht die Hilfe eines Webmasters.

```php
<?
system("mysqldump --host=server_adresse --user=name_benutzer --password=benutzer_passwort name_datenbank > name_backupdatei.sql");
?>
```

Achten Sie darauf, die allgemeinen Informationen im Beispielskript mit den Informationen der betreffenden Datenbank zu ersetzen. Die folgende Tabelle listet die zu ersetzenden Elemente auf. Wir empfehlen Ihnen, das Skript am Ende zum Beispiel „backup.php“ zu nennen.

|Informationen|Ersetzen durch|
|---|---|
|server_adresse|Serveradresse der betreffenden Datenbank.|
|name_benutzer|Name des Benutzers, der Zugriff auf die betreffende Datenbank hat.|
|benutzer_passwort|Zugehöriges Passwort zum oben genannten Benutzernamen.|
|name_datenbank|Name der betreffenden Datenbank.|
|name_backupdatei|Name der zu erstellenden Backup-Datei.|

> [!primary]
>
> Sie können auch ein Backup von einem früheren Datum erstellen, indem Sie in Ihrem Skript einen Port hinzufügen. Mit dem Port „3307“ erstellen Sie ein Backup mit dem Inhalt vom vorherigen Tag. Mit dem Port „3317“ wird ein Backup von vor einer Woche erstellt. 
> 
> Durch Angabe des Ports „3306“ können Sie ein Backup der Daten erstellen, die sich aktuell in der Datenbank befinden.
>

#### Schritt 2: Skript auf Ihren Speicherplatz hochladen

Nachdem Sie das Backup-Skript erstellt haben, laden Sie es auf den Speicherplatz Ihres Webhostings hoch. Loggen Sie sich hierfür in Ihren Speicherplatz ein. Sollten Sie nicht wissen, wie der Login funktioniert, lesen Sie Schritt 2 der Anleitung „[In den Speicherplatz einloggen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/#2-in-den-speicherplatz-einloggen){.external}“.

Laden Sie das Skript in den „www“-Ordner, um die folgenden Schritte durchzuführen. **Achten Sie bitte besonders auf den Dateinamen des Backup-Skripts.** Stellen Sie sicher, dass Sie beim Hochladen des Skripts keine bereits im Speicherplatz vorhandene Datei löschen, die denselben Namen trägt. Erscheint ein entsprechender Warnhinweis, ändern Sie den Skriptnamen und laden Sie es anschließend erneut hoch.

#### Schritt 3: Skript aufrufen

Nachdem das Skript auf den Speicherplatz hochgeladen wurde, können Sie den darin enthaltenen Code ausführen. Hierzu muss zunächst das Skript aufgerufen werden.

Um das Skript aufzurufen, geben Sie die vollständige Skript-URL in Ihrem Webbrowser ein (zum Beispiel: mypersonaldomain.ovh/backup.php, wenn Sie Ihr Skript „backup.php“ genannt haben). Wenn die im Skript eingegebenen Informationen korrekt sind, startet das Backup. Warten Sie nun noch einen Moment, bis das Backup abgeschlossen ist. Sollte das Backup nicht starten, überprüfen Sie die im Skript eingegeben Informationen und starten Sie den Vorgang erneut.

#### Schritt 4: Backup aus dem Speicherplatz exportieren

Nachdem das Backup erstellt wurde, können Sie es aus dem Ordner, in den das Backup-Skript hochgeladen wurde, exportieren. Sie finden das Datenbank-Backup unter dem Namen, der zuvor im Skript festgelegt wurde. Jetzt muss das Backup nur noch auf Ihrem Rechner gespeichert werden.

Wir empfehlen Ihnen dringend, anschließend die Backup-Datei sowie das zugehörige Skript aus dem „www“-Verzeichnis zu löschen.

> [!primary]
>
> Mithilfe eines Backup-Skripts und geplanter Aufgaben (sogenannten „Cronjobs“) können Sie automatische Backups zu von Ihnen definierten Intervallen durchführen. Weitere Informationen zu geplanten Aufgaben finden Sie hier: [Webhosting: Automatisierte Aufgaben / Cron](https://docs.ovh.com/de/hosting/webhosting_automatisierte_aufgaben_cron/){.external}.
>

### Backup via SSH exportieren

Bei dieser Methode werden Befehle über ein Terminal eingegeben, um mit Ihrem Speicherplatz zu interagieren.

> [!warning]
>
> Für diese Art des Zugriffs sind fortgeschrittene Kenntnisse erforderlich. Im Folgenden geben wir Ihnen einige Informationen zur Vorgehensweise, empfehlen Ihnen aber dennoch, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, falls Sie Hilfe brauchen. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

Wenn Sie sich via SSH in Ihren Speicherplatz eingeloggt haben, geben Sie einen Befehl ein, um das Backup der Datenbank durchzuführen. Im Folgenden finden Sie ein Beispiel, um Ihnen dabei zu helfen. Bevor Sie den Befehl über das Terminal ausführen, stellen Sie bitte sicher, dass Sie sich in dem Verzeichnis befinden, in dem die Backup-Datei erstellt werden soll.

```sh
mysqldump --host=server_adresse --user=name_benutzer --password=benutzer_passwort name_datenbank > name_backup_datei.sql
```

Achten Sie außerdem darauf, die allgemeinen Informationen des Beispielbefehls mit den spezifischen Informationen der betreffenden Datenbank zu ersetzen. Wenn das Backup abgeschlossen ist, muss es nur noch auf Ihrem Rechner gespeichert werden.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
