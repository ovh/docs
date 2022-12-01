---
title: 'Backup in eine Webhosting-Datenbank importieren'
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie ein Backup in die Datenbank Ihres OVHcloud Webhostings importieren.'
slug: webhosting_import_einer_mysql-datenbank
section: 'Datenbanken'
order: 04
---
 
**Stand 14.09.2018**

## Einleitung

Fast alle Content-Management-Systeme (CMS) wie WordPress oder Joomla! verwenden heutzutage Datenbanken, um sogenannte dynamischen Inhalte wie beispielsweise Kommentare oder Artikel zu speichern. Aus verschiedenen Gründen kann es vorkommen, dass Sie Daten in eine Ihrer Datenbanken importieren möchten, um deren Inhalt zu ändern oder zu ersetzen.

**Hier erfahren Sie, wie Sie ein Backup in die Datenbank Ihres OVHcloud Webhostings importieren.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Ihr [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot beinhaltet eine Datenbank.
- Sie haben Zugriff auf das Backup, das Sie in Ihre Datenbanken importieren möchten.
- Je nach der verwendeten Import-Methode benötigen Sie Zugriff auf die Verwaltung Ihres Webhosting Angebots über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, oder die erforderlichen Login-Daten, um sich mit der Datenbank zu verbinden.

## Beschreibung

Bevor Sie beginnen, wählen Sie die Methode aus, die Sie für den Import des Backups in die betreffende Datenbank anwenden möchten. Entsprechend Ihrer technischen Kenntnisse zu diesem Thema stehen Ihnen mehrere Möglichkeiten zur Verfügung.

- **Eine ältere Version Ihrer Datenbank mit wenigen Klicks wiederherstellen**: Dank der regelmäßigen Sicherungen des Backup-Tools von OVHcloud können Sie den Inhalt Ihrer Datenbanken wiederherstellen. Hierzu sind keine besonderen technischen Kenntnisse erforderlich und Sie können das Backup über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ausführen.

- **Ihre eigene Backup-Datei mit wenigen Klicks importieren**: Sie können Ihre eigene, von Ihnen zuvor erstellte Backup-Datei in eine Ihrer Datenbanken importieren. Loggen Sie sich hierfür in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein.

- **Backup über das phpMyAdmin-Webinterface importieren**: Loggen Sie sich im phpMyAdmin-Interface ein, um dort den Import durchzuführen. Für diese Methode benötigen Sie Grundkenntnisse im Umgang mit phpMyAdmin. Außerdem darf Ihre Backup-Datei eine bestimmte Größe nicht überschreiten.

- **Backup über ein Skript importieren**: Hierzu muss zunächst ein Skript geschrieben und auf Ihrem OVHcloud Webhosting gespeichert werden. Für das Schreiben des Skripts sind spezifische technische Kenntnisse erforderlich.

- **Backup über einen SSH-Befehl importieren**: Verbinden Sie sich hierfür via SSH mit Ihrem Speicherplatz und verwenden Sie die entsprechenden Befehle für den Import. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein passendes [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot erforderlich.

Einige der oben aufgeführten Methoden lassen sich nicht über ein OVHcloud Interface ausführen. Daher können wir Ihnen nicht sagen, wie diese umzusetzen sind. Im Folgenden geben wir Ihnen hierzu zwar einige Informationen, sie ersetzen jedoch nicht die Unterstützung eines Webmasters.

Folgen Sie dieser Anleitung nun entsprechend der von Ihnen gewählten Import-Methode.

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

### Backup über das Kundencenter wiederherstellen

Loggen Sie sich hierfür im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Klicken Sie nun auf die drei Punkte rechts neben der Datenbank, die Sie wieder auf eine ältere Version zurücksetzen möchten, und wählen Sie dann `Eine Sicherung wiederherstellen`{.action}. Bitte beachten Sie, dass der aktuelle Inhalt der Datenbank durch den Inhalt des ausgewählten Backups ersetzt wird.

![Datenbankimport](images/database-import-step5.png){.thumbnail}

Es werden Ihnen nun alle verfügbaren Backups der ausgewählten Datenbank angezeigt. In der Tabelle finden Sie das genaue Erstellungsdatum des jeweiligen Backups sowie das Datum, zu dem dieses vom OVHcloud Backup-Tool wieder gelöscht wird.

Klicken Sie auf die drei Punkte rechts neben dem Backup, das Sie wiederherstellen möchten, und gehen Sie dann auf `Sicherung wiederherstellen`{.action}. Vergewissern Sie sich, dass die Informationen im angezeigten Fenster korrekt sind, und klicken Sie dann auf `Bestätigen`{.action}. Warten Sie, bis die Wiederherstellung abgeschlossen ist.

![Datenbankimport](images/database-import-step6.png){.thumbnail}

### Eigene Backup-Datei über das Kundencenter importieren

Loggen Sie sich hierfür im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Klicken Sie nun auf die drei Punkte rechts neben der Datenbank, in die Sie die Daten importieren möchten, und wählen Sie dann `Datei importieren`{.action}.

![Datenbankimport](images/database-import-step1.png){.thumbnail}

Wählen Sie im angezeigten Fenster `Eine neue Datei importieren`{.action} und klicken Sie anschließend auf `Weiter`{.action}.

> [!primary]
>
> Über den Button `Bestehende Datei verwenden`{.action} können Sie die Daten einer bereits an das Import-Tool versendeten Datei erneut importieren.
>

![Datenbankimport](images/database-import-step2.png){.thumbnail}

Geben Sie einen Dateinamen ein (über den Sie das Backup zu einem späteren Zeitpunkt finden und wiederherstellen können). Wählen Sie dann unter `Datei` die Backup-Datei der Datenbank auf Ihrem Computer aus. Klicken Sie auf `Absenden`{.action}.

Warten Sie, bis die Meldung erscheint, dass die Datei erfolgreich übermittelt wurde, und klicken Sie dann auf `Weiter`{.action}.

![Datenbankimport](images/database-import-step3.png){.thumbnail}

Wenn Sie möchten, können Sie nun die angezeigten Zusatzoptionen auswählen:

- **Aktuelle Datenbank leeren**: Setzen Sie hier einen Haken, um den gesamten aktuellen Inhalt Ihrer Datenbank zu löschen und durch den Inhalt Ihres Backups zu ersetzen. Setzen Sie den Haken wirklich nur, wenn Sie den aktuellen Inhalt Ihrer Datenbank vollständig mit dem Inhalt der Backup-Datei ersetzen möchten.

- **E-Mail-Benachrichtigung, wenn der Import abgeschlossen ist**: Setzen Sie hier einen Haken, um per E-Mail über den Abschluss des Datenbankimports benachrichtigt zu werden.

Nachdem Sie Ihre Auswahl getroffen haben, klicken Sie auf `Bestätigen`{.action} und warten Sie, bis der Import abgeschlossen ist.

![Datenbankimport](images/database-import-step4.png){.thumbnail}

### Backup über das phpMyAdmin-Webinterface importieren

Loggen Sie sich auf phpMyAdmin ein, um den Import durchzuführen. Loggen Sie sich hierfür zunächst im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die angezeigte Tabelle enthält alle Datenbanken, die im Rahmen Ihres Webhosting Angebots erstellt wurden. Klicken Sie auf die drei Punkte rechts neben der betreffenden Datenbank und gehen Sie dann auf `Zugang zu phpMyAdmin`{.action}.

![Datenbankimport](images/database-import-step7.png){.thumbnail}

Geben Sie im phpMyAdmin-Webinterface die Informationen zu Ihrer Datenbank ein, wählen Sie über das Drop-down-Menü die aktuellen Daten der Datenbank (Current) und loggen Sie sich ein. Gehen Sie nach dem Login auf den Tab `Importieren`{.action} und vervollständigen Sie die angeforderten Informationen. Zur Erinnerung: Die Backup-Datei darf eine bestimmte Größe nicht überschreiten.

> [!warning]
>
> Da das phpMyAdmin-Webinterface nicht von OVHcloud entwickelt wurde, können wir Ihnen nicht sagen, wie der Import durchzuführen ist. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder sich auf der Website des Herausgebers zu informieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

### Backup über ein Skript importieren

Für diese Methode sind mehrere Schritte notwendig. Vergewissern Sie sich, dass Sie über die Backup-Datei verfügen, die Sie importieren möchten. Außerdem benötigen Sie die Login-Informationen für die Datenbank, in die importiert werden soll: Benutzername, das zugehörige Passwort, Name der Datenbank und Serveradresse.

> [!warning]
>
> Für diese Methode sind Programmierkenntnisse erforderlich. Im Folgenden geben wir Ihnen einige Informationen zur Vorgehensweise, empfehlen Ihnen aber dennoch, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, falls Sie Hilfe brauchen. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung.
>

#### Schritt 1: Importskript schreiben

Im ersten Schritt wird ein Skript geschrieben, um den Import in die Datenbank durchzuführen. Im Folgenden finden Sie ein Beispielskript, um Ihnen hierbei zu helfen. Es ersetzt allerdings nicht die Hilfe eines Webmasters.

```php
<?php
system("cat name_backup_datei.sql | mysql --host=server_adresse --user=name_benutzer --password=benutzer_passwort name_datenbank");
?>
```

Achten Sie darauf, die allgemeinen Informationen im Beispielskript mit den Informationen der betreffenden Datenbank zu ersetzen. Die folgende Tabelle listet die zu ersetzenden Elemente auf. Wir empfehlen Ihnen, das Skript am Ende zum Beispiel „import.php“ zu nennen.

|Information|Ersetzen durch|
|---|---|
|name_backup_datei|Name der Backup-Datei, die Sie importieren möchten.|
|server_adresse|Serveradresse der Datenbank, in die Sie die Daten importieren möchten.|
|name_benutzer|Name des Benutzers, der Zugriff auf die betreffende Datenbank hat.|
|benutzer_passwort|Zugehöriges Passwort zum oben genannten Benutzernamen.|
|name_datenbank|Name der betreffenden Datenbank.|

#### Schritt 2: Skript und Backup auf Ihren Speicherplatz hochladen

Nachdem Sie das Importskript erstellt haben, laden Sie es zusammen mit der Backup-Datei hoch, die Sie in den Speicherplatz Ihres Webhostings importieren möchten. Loggen Sie sich hierfür in Ihren Speicherplatz ein. Sollten Sie nicht wissen, wie der Login funktioniert, lesen Sie Schritt 2 der Anleitung „[Log in to your storage space](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/#2-log-in-to-your-storage-space){.external}“ (Englisch).

Laden Sie das Importskript und die Backup-Datei in den „www“-Ordner, um die folgenden Schritte durchzuführen. **Achten Sie bitte besonders auf den Dateinamen des Importskripts.** Stellen Sie sicher, dass Sie beim Hochladen des Skripts keine bereits im Speicherplatz vorhandene Datei löschen, die denselben Namen trägt. Erscheint ein entsprechender Warnhinweis, ändern Sie den Skriptnamen und laden Sie es anschließend erneut hoch.

#### Schritt 3: Skript aufrufen

Nachdem das Importskript und die Backup-Datei auf den Speicherplatz hochgeladen wurden, kann der Import gestartet werden. Hierzu muss zunächst das Skript aufgerufen werden.

Um das Skript aufzurufen, geben Sie die vollständige Skript-URL in Ihrem Webbrowser ein (zum Beispiel: mypersonaldomain.ovh/import.php, wenn Sie Ihr Skript „import.php“ genannt haben). Wenn die im Skript eingegebenen Informationen korrekt sind, startet der Import. Warten Sie nun noch einen Moment, bis der Import abgeschlossen ist. Sollte der Import nicht starten, überprüfen Sie die im Skript eingegeben Informationen und starten Sie den Vorgang erneut.

Wir empfehlen Ihnen dringend, nach dem Import die Backup-Datei und das Skript aus dem „www“-Verzeichnis zu löschen.

### Backup via SSH importieren

Bei dieser Methode werden Befehle über ein Terminal eingegeben, um mit Ihrem Speicherplatz zu interagieren.

> [!warning]
>
> Für diese Art des Zugriffs sind fortgeschrittene Kenntnisse erforderlich. Im Folgenden geben wir Ihnen einige Informationen zur Vorgehensweise, empfehlen Ihnen aber dennoch, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, falls Sie Hilfe brauchen. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.
>

Wenn Sie sich via SSH in Ihren Speicherplatz eingeloggt haben, geben Sie einen Befehl für den Import der Datenbank ein. Im Folgenden finden Sie ein Beispiel, um Ihnen dabei zu helfen. Bevor Sie den Befehl über das Terminal ausführen, stellen Sie bitte sicher, dass Sie das Backup, das Sie importieren möchten, bereits auf den Speicherplatz hochgeladen haben und dass Sie sich in dem Verzeichnis befinden, in dem die Backup-Datei liegt.

```sh
cat name_backup_datei.sql | mysql --host=server_adresse --user=name_benutzer--password=benutzer_passwort name_datenbank
```

Achten Sie außerdem darauf, die allgemeinen Informationen des Beispielbefehls mit den spezifischen Informationen der betreffenden Datenbank zu ersetzen. Wir empfehlen Ihnen, nach dem Import die Backup-Datei aus dem Verzeichnis, in das Sie sie hochgeladen haben, zu löschen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
