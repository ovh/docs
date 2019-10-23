---
title: 'Den Speicherplatz Ihres Webhostings wiederherstellen'
slug: webhosting-speicherplatz-wiederherstellen
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie eine Datei oder den gesamten Speicherplatz Ihres Webhostings wiederherstellen.'
section: 'FTP und SSH'
---

**Stand 11.07.2019**

## Einleitung

Über Ihr OVH Webhosting Angebot haben Sie Zugriff auf einen Speicherplatz, auf dem Sie Ihre Websites hosten können. Aus verschiedenen Gründen kann es vorkommen, dass die gesamten Daten Ihres Speicherplatzes oder auch nur eine darin gespeicherte Datei wiederhergestellt werden müssen. Das ist beispielsweise der Fall, wenn eine Datei gelöscht oder bearbeitet wurde und die Website nicht mehr erreichbar ist.

**Hier erfahren Sie, wie Sie eine Datei oder den gesamten Speicherplatz Ihres Webhostings wiederherstellen.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovh.com/de/hosting/){.external} Angebot (mit Ausnahme von Cloud Web).
- Je nach der verwendeten Methode benötigen Sie Zugriff auf die Verwaltung des Webhostings über das [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} oder das Passwort des FTP-Benutzers, um sich mit Ihrem Speicherplatz zu verbinden. 

## Beschreibung

Vergewissern Sie sich zunächst, dass ein Backup für den Zeitpunkt zur Verfügung steht, zu dem Sie den Speicherplatz Ihres Webhostings wiederherstellen möchten:

- am selben Tag, um 00:01 Uhr morgens
- am Tag zuvor, um 00:01 Uhr morgens
- zwei Tage zuvor, um 00:01 Uhr morgens
- am Sonntag zuvor, um 01:00 Uhr morgens
- am Sonntag zwei Wochen vorher, um 01:00 Uhr morgens

Ein früheres Backup kann OVH Ihnen leider nicht zur Verfügung stellen. Wir empfehlen, regelmäßig selbst Backups Ihrer Website zu erstellen, wenn Sie frühere Backups verwenden möchten. 

Legen Sie ebenfalls die Wiederherstellungsmethode fest, die Sie verwenden möchten:

|Wiederherstellungsmethode|Beschreibung|
|---|---|
|Wiederherstellung über das Kundencenter|Mit dieser Methode stellen Sie den gesamten Speicherplatz wieder her. Der aktuelle Inhalt wird dabei komplett mit dem Inhalt des ausgewählten Backups ersetzt.|
|Wiederherstellung mithilfe einer Software oder über ein Interface|Bei dieser Methode erhalten Sie Leserechte für ein Backup des Speicherplatzes. Diese Methode ist zwar etwas technischer, dafür können Sie jedoch eine oder mehrere Dateien zu einem früheren Zeitpunkt wiederherstellen und müssen nicht den gesamten Inhalt Ihres Speicherplatzes überschreiben.|

Folgen Sie dieser Anleitung nun entsprechend der ausgewählten Wiederherstellungsmethode:

- [Speicherplatz über das Kundencenter wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/#speicherplatz-uber-das-kundecenter-wiederherstellen){.external}

- [Datei mithilfe einer Software oder über ein Interface wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/#datei-mithilfe-einer-software-oder-uber-ein-interface-wiederherstellen){.external}

### Speicherplatz über das Kundencenter wiederherstellen

Loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action} und klicken Sie auf den Button `Backup wiederherstellen`{.action}.

![FTP-Backup](images/backupftp-step1.png){.thumbnail}

Wählen Sie im angezeigten Fenster über das Drop-down-Menü mithilfe folgender Informationen das gewünschte Backup-Datum aus:

|Angezeigtes Datum|Backup-Datum|
|---|---|
|T-1|am selben Tag, um 00:01 Uhr morgens|
|T-2|am Tag zuvor, um 00:01 Uhr morgens|
|T-3|zwei Tage zuvor, um 00:01 Uhr morgens|
|1 Woche|am Sonntag zuvor, um 01:00 Uhr morgens|
|2 Wochen|am Sonntag zwei Wochen vorher, um 01:00 Uhr morgens|

Klicken Sie nach der Auswahl auf den Button `Weiter`{.action}. 

![FTP-Backup](images/backupftp-step2.png){.thumbnail}

Vergewissern Sie sich, dass bei der Wiederherstellung keine Datei verloren geht. Das könnte beispielsweise mit einer Datei passieren, die nach dem ausgewählten Datum in Ihren Speicherplatz hochgeladen wurde. Wie bereits erwähnt, werden bei der Wiederherstellung die gesamten, aktuellen Daten mit den Backup-Daten überschrieben.

Klicken Sie auf den Button `Bestätigen`{.action}, um die Wiederherstellung zu starten.

### Datei mithilfe einer Software oder über ein Interface wiederherstellen

Für diese Methode sind mehrere Schritte notwendig. Vergewissern Sie sich, dass Sie über das Passwort des FTP-Benutzers verfügen, um auf Ihren Speicherplatz zuzugreifen. 

> [!warning]
>
> Hierfür sind Kenntnisse über die verwendete Software bzw. das Interface erforderlich. Im Folgenden haben wir einige Informationen zur Vorgehensweise zusammengetragen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber der Software bzw. des Interface zu kontaktieren. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>

#### Schritt 1: Software oder Interface auswählen

Entscheiden Sie sich zunächst, welche Software oder welches Interface Sie verwenden möchten, um auf den Backup-Speicher zuzugreifen. Wenn Sie sich bereits entschieden haben, können Sie direkt zu Schritt 2 übergehen. Andernfalls empfehlen wir Ihnen eine der folgenden drei Lösungen:

- **FileZilla**: Laden Sie FileZilla zunächst über die Website des Herausgebers herunter. OVH stellt Ihnen für die Verwendung von FileZilla folgende Anleitung zur Verfügung: „[Webhosting: Hilfe zur Verwendung von FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/){.external}“. Diese Anleitung ersetzt jedoch nicht die offizielle Dokumentation des Herausgebers.

- **Cyberduck**: Laden Sie Cyberduck zunächst über die Website des Herausgebers herunter. OVH stellt Ihnen für die Verwendung von Cyberduck folgende Anleitung zur Verfügung: „[Web hosting: Cyberduck user guide (on Mac)](https://docs.ovh.com/gb/en/hosting/web_hosting_cyberduck_user_guide_on_mac/){.external}“ (Englisch). Diese Anleitung ersetzt jedoch nicht die offizielle Dokumentation des Herausgebers.

- **Interface des FTP-Explorers**: Zugriff auf das Interface des FTP-Explorers erhalten Sie über das [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external}. Klicken Sie nach dem Login links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action} und klicken Sie auf den Button `FTP-Explorer`{.action}.

Gehen Sie zum nächsten Schritt über, um mit der Wiederherstellung fortzufahren.

![FTP-Backup](images/backupftp-step3.png){.thumbnail}

#### Schritt 2: Auf das Backup zugreifen

Mithilfe der ausgewählten Software bzw. über das Interface können Sie sich nun auf Ihrem Speicherplatz einloggen, um auf die gewünschten Backup-Daten zuzugreifen. Sie benötigen hierfür den FTP-Benutzernamen, das zugehörige Passwort sowie den Hostnamen Ihres FTP-Servers.

Diese Login-Informationen finden Sie über den Tab `FTP - SSH`{.action} Ihres Webhostings. Wenn Sie kein FTP-Passwort besitzen, lesen Sie bitte die Anleitung [„Passwort eines FTP-Benutzers ändern“](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/){.external}.

![FTP-Backup](images/backupftp-step4.png){.thumbnail}

Ergänzen Sie Ihren Haupt-FTP-Benutzernamen (oder „FTP-Login“) mit einem Suffix, das sich auf das betreffende Backup bezieht. Verwenden Sie die folgenden Informationen, um auf das gewünschte Backup zuzugreifen:

|Backup-Datum|Hinzuzufügendes Suffix|Beispiel für einen ergänzten FTP-Benutzernamen|
|---|---|---|
|am selben Tag, um 00:01 Uhr morgens|-snap0|ftpbenutzer**-snap0**|
|am Tag zuvor, um 00:01 Uhr morgens|-snap1|ftpbenutzer**-snap1**|
|zwei Tage zuvor, um 00:01 Uhr morgens|-snap2|ftpbenutzer**-snap2**|
|am Sonntag zuvor, um 01:00 Uhr morgens|-snap3|ftpbenutzer**-snap3**|
|am Sonntag zwei Wochen zuvor, um 01:00 Uhr morgens|-snap4|ftpbenutzer**-snap4**|

Denken Sie daran, die generische Information „ftpbenutzer“ mit Ihrem eigenen FTP-Benutzernamen zu ersetzen. Notieren Sie sich das Suffix für das Backup, auf das Sie zugreifen möchten.

Wie Sie sich in Ihren Speicherplatz einloggen, hängt von der verwendeten Software bzw. dem Interface ab. Die folgende Abbildung zeigt den Login über das Interface des FTP-Explorers.

![FTP-Backup](images/backupftp-step5.png){.thumbnail}

#### Schritt 3: Eine oder mehrere Backup-Dateien wiederherstellen

Wählen Sie nach dem Login die Dateien aus, die Sie wiederherstellen möchten. Gehen Sie hierfür den Inhalt Ihres Speicherplatzes durch, bis Sie die gewünschten Dateien finden, und laden Sie diese herunter. Die Vorgehensweise richtet sich nach der verwendeten Software bzw. dem Interface.

Vergewissern Sie sich, bevor Sie zum nächsten Schritt übergehen, dass Sie alle Dateien für die Wiederherstellung heruntergeladen haben, und loggen Sie sich dann aus Ihrem Speicherplatz aus.

#### Schritt 4: Die gewünschten Dateien wiederherstellen

Wenn Sie alle Dateien heruntergeladen haben, loggen Sie sich erneut auf Ihrem Speicherplatz ein. Verwenden Sie für diesen Login allerdings nicht den FTP-Benutzernamen mit der hinzugefügten Endung. Indem Sie das Suffix nicht verwenden, loggen Sie sich in die aktuelle Version Ihres Speicherplatzes ein und nicht in eine frühere Backup-Version.

Nach dem Login können Sie die gewünschten Dateien wiederherstellen. Gehen Sie hierfür den Inhalt Ihres Speicherplatzes durch, bis Sie die Dateien finden, und ersetzen Sie diese mit den zuvor heruntergeladenen Dateien.

## Weiterführende Informationen

[Webhosting: Hilfe zur Verwendung von FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/){.external}

[Web hosting: Cyberduck user guide (on Mac)](https://docs.ovh.com/gb/en/hosting/web_hosting_cyberduck_user_guide_on_mac/){.external} (Englisch)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.