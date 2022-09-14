---
title: 'Verwendung von FileZilla'
slug: webhosting_hilfe_zur_verwendung_von_filezilla
excerpt: 'In dieser Hilfe wird die Verwendung des FileZilla FTP-Programms beschrieben.'
legacy_guide_number: g1380
section: 'FTP und SSH'
---

## Vorstellung
FileZilla ist ein für verschiedene Betriebssysteme (Linux, Windows, MacOS...) verfügbares freies FTP Programm.

Mit FileZilla können Sie sich über das FTP Protokoll mit dem Speicherplatz Ihres Webhostings verbinden, um Ihre Webseite online zu stellen.

FileZilla ist Open Source, Sie können das Programm auf der offiziellen Webseite des Projekts herunterladen: [filezilla-project.org/](https://filezilla-project.org/)

![FileZilla](images/2400.png){.thumbnail}


## Interface

## Überblick über die Anzeigen in FileZilla:
Der Bereich 1 enthält Informationen zum Zustand der Verbindung, den Dateitransfers, Verbindungsfehlern usw.
Die dort aufgeführten Informationen sind im Allgemeinen nur für technisch interessierte Benutzer interessant.

Der Bereich 2 zeigt die Verzeichnisstruktur auf Ihrem Computer, in der Sie den Ordner mit Ihrer Webseite bzw. den zu übertragenden Dateien auswählen.

Der Bereich 3 zeigt die Verzeichnisstruktur auf dem Server.

Der Bereich 4 listet den Inhalt des ausgewählten Ordners auf Ihrem Computer auf. Angezeigt werden der Name, die Größe, der Typ und das letzte Änderungsdatum der Dateien.

Der Bereich 5 listet den Inhalt des ausgewählten Ordners auf dem Server auf. Angezeigt werden der Name, die Größe, der Typ, das letzte Änderungsdatum, die Rechte und der Inhaber der Dateien.

Der Bereich 6 zeigt die Warteliste der Dateien an, die übertragen werden.

Im oberen Bereich des Interfaces (unterhalb des grünen Rahmens) stehen der Hostname des Servers, mit dem Sie verbunden sind, der FTP-Benutzername, das Passwort und der verwendete Port.

![FileZilla](images/1818.png){.thumbnail}

## Menüleiste
Die Menüleiste enthält nützliche Icons für den Zugriff auf die Basisfunktionen des Programms. Für die Übertragung von Dateien werden diese jedoch nicht alle benötigt. Ein Überblick:

 Den Servermanager öffnen
 Anzeige des Nachrichtenprotokolls an-/ausschalten (1)
 Anzeige des lokalen Verzeichnisbaums an-/ausschalten (2)
 Anzeige des Server-Verzeichnisbaums an-/ausschalten (3)
 Anzeige der Warteschlange an-/ausschalten (6)
 Datei- und Verzeichnislisten aktualisieren
 Abarbeiten der Warteschlange starten/stoppen
 Bricht die aktuelle Operation ab
 Trennt Verbindung zu aktuellem Server
 Stellt Verbindung mit dem zuletzt benutzten Server wieder her
 Öffnet den Datei-/Verzeichnisfilter-Dialog
 Verzeichnisvergleich an-/ausschalten
 Synchronisierten Verzeichniswechsel an-/ausschalten
 Rekursiv nach Dateien suchen


## FTP Verbindung
Um die Verbindung mit dem Server herzustellen, müssen Sie in dem grünen Rahmen oben folgende Angaben eintragen:

|Anzugebende Information:|Beschreibung|
|---|---|
|FTP-Server:|Hierbei handelt es sich um die Serveradresse, die Sie benötigen, um auf Ihren Speicherplatz zuzugreifen.<br><br> Je nach verwendetem Client sind verschiedene Bezeichnungen möglich: „Server“, „Serveradresse“, „Host“. „Hostname“ etc.|
|FTP-Login|Hierbei handelt es sich um die Kennung bzw. den Login, den Sie benötigen, um auf Ihren Speicherplatz zuzugreifen.<br><br> Je nach verwendetem Client sind verschiedene Bezeichnungen möglich: „Benutzer“, „Benutzername“, „Kennung“, „Login“, „Username“ etc.|
|FTP-Benutzerpasswort|Hierbei handelt es sich um das Passwort des FTP-Benutzers.<br><br> Je nach verwendetem Client sind verschiedene Bezeichnungen wie „Passwort“ oder „Password“ möglich.|
|Verbindungsport|Der Verbindungsport wird meistens automatisch angegeben. Falls Sie diesen jedoch selbst eingeben müssen:<br><br>\- verwenden Sie den Port „21“ für eine Verbindung via FTP.<br>\- verwenden Sie den Port „22“ für eine Verbindung via SFTP (falls das Protokoll aktiviert ist).|

Wenn Sie nicht mehr im Besitz dieser Daten sind, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action}. Hier werden alle zum Speicherplatz gehörigen Informationen sowie eine Tabelle angezeigt, in der die für Ihr Webhosting angelegten FTP- und SSH-Benutzer aufgelistet werden.

Sobald alle Angaben eingetragen wurden klicken Sie auf Verbinden, um die Verbindung mit dem Server aufzubauen.

![FileZilla](images/1819.png){.thumbnail}


## SFTP Verbindung
Bei SFTP (SSH File Transfer Protocol) wird über das FTP Protokoll auf Port 22 eine gesicherte Verbindung hergestellt. Dieser Verbindungstyp ist erst ab dem [Pro](http://www.ovh.de/hosting/) Angebot aufwärts verfügbar. Über dieses Protokoll können Sie zum Beispiel die Rechte von Dateien ändern, die Sie nicht ausführen können, wenn Sie per FTP auf dem Port 21 verbunden sind.

Um die Verbindung mit dem Server herzustellen, müssen Sie in dem grünen Rahmen oben folgende Angaben eintragen:


- Server: ftp.ihre-domain.tld oder ftp.cluster0XX.ovh.net oder newftp.cluster0XX.ovh.net
- Benutzername: Ihr FTP-Login
- Passwort: Das zu dem FTP-Login gehörende Passwort
- Port: 22


Sobald alle Angaben eingetragen wurden klicken Sie auf Verbinden, um die Verbindung mit dem Server aufzubauen. Es öffnet sich dann ein Dialogfenster (siehe oben) zur Überprüfung der Verbindung mit dem Server.
Wenn Sie sich mit einem OVHcloud Server verbinden, können Sie ein Häkchen bei "Diesem Server immer vertrauen, diesen Schlüssel speichern" setzen, damit diese Bestätigung zukünftig nicht mehr angefordert wird.

![FileZilla](images/1834.png){.thumbnail}


## Verbindungsfehler
Die angezeigte Fehlermeldung wird durch einen Fehler bei der Identifikation während des Aufbaus der FTP Verbindung mit dem Webhosting verursacht.

Die Ursache dafür ist ein Fehler bei der Angabe des Benutzernamens und/oder Passworts.

Überprüfen Sie, dass die von Ihnen gemachten Angaben korrekt sind. Bei Bedarf können Sie auch das FTP Passwort Ihres Webhostings direkt in Ihrem Kundencenter ändern.

Mehr Informationen zur Änderung des FTP Passworts bei den Webhosting-Angeboten finden Sie in folgender Hilfe:[]({legacy}1374)

![FileZilla](images/1820.png){.thumbnail}
In diesem Fall wird der Fehler durch einen falschen Hostnamen verursacht.

Diese Fehlermeldung wird durch einen falschen Hostname (Server) verursacht.

![FileZilla](images/1824.png){.thumbnail}


## Übertragen von Dateien
Um Ihre Dateien per FTP zu übertragen, wählen Sie sie einfach aus und ziehen sie per Drag and Drop vom linken Fenster (mit den lokalen Dateien auf Ihrem Computer) in das rechte Fenster (mit den Dateien auf Ihrem Webhosting).


- Achten Sie darauf, dass im rechten Fenster der richtige Zielordner ausgewählt ist.


Die ausgewählten Dateien werden dann automatisch in die Warteschlange für die Übertragung auf den Server aufgenommen.

![FileZilla](images/drag-drop-en.png){.thumbnail}


## Anzeige der Warteschlange
Im unteren Bereich des Programmfensters wird die Warteschlange für die Dateiübertragung angezeigt.

Dort sehen Sie:


- Die Dateien in der Warteschlange, die noch darauf warten, auf den Server übertragen zu werden.

- Die Dateien, bei denen die Übertragung gescheitert ist.

- Die Dateien, die erfolgreich auf das Webhosting übertragen wurden.



![FileZilla](images/1822.png){.thumbnail}


## Kontextmenü Server
Wenn Sie einen Rechtsklick auf eine der Dateien auf dem Server (Bereich 5) machen, wird ein Kontextmenü mit mehreren Auswahlmöglichkeiten angezeigt:

Herunterladen: Führt einen Download der Datei in den derzeit ausgewählten lokalen Ordner auf Ihrem Computer durch.

Dateien zur Warteschlange hinzufügen: Fügt die Datei zur Warteschlange hinzu, um beispielsweise die Übertragung der Dateien zeitlich zu verzögern.

Ansehen/Bearbeiten: Mit dieser Option kann die Datei direkt auf dem Webhosting angezeigt oder bearbeitet werden. Sie benötigen dazu auf Ihrem Computer ein Programm, das die Datei auf dem Server anzeigen bzw. verarbeiten kann.

Verzeichnis erstellen: Hiermit können Sie direkt einen neuen Ordner auf dem Webhosting erstellen.

Aktualisieren: Lädt die Anzeige neu, um diese auf den neuesten Stand zu bringen.

Löschen: Löschen der ausgewählten Datei.

Umbenennen: Umbenennen der ausgewählten Datei.

URL(s) in die Zwischenablage kopieren: Hiermit wird ein Direktlink zur ausgewählten Datei erzeugt und in die Zwischenablage kopiert.
Beispiel einer so erzeugten URL: ftp://ftplogin@ftp.cluster0XX.ovh.net/www/meinordner1/meinedatei.jpg

Dateiberechtigungen.../blue]: Hiermit können Sie die Rechte der Dateien (CHMOD) ändern

![FileZilla](images/1830.png){.thumbnail}


## Datei- und Ordnerrechte
Um auf dieses Interface zuzugreifen führen Sie einen Rechtsklick auf eine der Dateien auf dem Server durch und klicken dann auf "Dateiberechtigungen...".

Auf dieser Seite können Sie nun die Rechte (CHMOD) der Dateien und Ordner auf dem Webhosting ändern.

Tragen Sie die Berechtigungen ein, die Sie erteilen möchten, der CHMOD Wert wird dann automatisch entsprechend angepasst.

Wenn gewünscht, können Sie ein Häkchen bei "Unterverzeichnisse einbeziehen" setzen. Dadurch werden nicht nur die Rechte des ausgewählten Ordners, sondern auch die Rechte der eventuell darin befindlichen Ordner und Dateien geändert.

![FileZilla](images/1831.png){.thumbnail}


## Seite wieder öffnen
Öffnen Sie FileZilla, klicken Sie auf "Server" und dann auf "Benutzerdefinierten Befehl eingeben...".

Je nach verwendeter Version von FileZilla kann diese Option statt "Benutzerdefinierten Befehl eingeben..." auch "Einen FTP Befehl eingeben" heißen.

Geben Sie folgenden Befehl an:


```
SITE CHMOD 705 /
```


Sollten Sie dabei folgende Fehlermeldung erhalten:

550 would not chance perms on /. not such file or directory

Verwenden Sie stattdessen den Befehl:


```
SITE CHMOD 705 .
```


Um zu überprüfen, dass die Seite erfolgreich wieder geöffnet wurde, rufen Sie sie einfach in Ihrem Browser auf.

Dieser Befehl steht bei der Verwendung von SFTP nicht zur Verfügung.

![FileZilla](images/1829.png){.thumbnail}
Nachdem die Änderung der Rechte auf 705 angefordert wurde, dauert es bis zu 3 Stunden, bis dies aktiv ist. Unsere Robots überprüfen alle 3 Stunden die angeforderten Zustandsänderungen. Abhängig davon, wann die Anfrage getätigt wurde, kann es also mehr oder weniger lange dauern, bis Ihre Seite wieder angezeigt wird.

Wenn mehr als 3 Stunden vergangen sind und Ihre Seite immer noch nicht online ist, kontaktieren Sie bitte unseren Support.


## Transfer von Binärdateien
Bei Binärdateien wie beispielsweise CGI Dateien kann es interessant sein, die Übertragungsart explizit auszuwählen.

Klicken Sie dazu in der FileZilla Menüleiste auf "Transfer" und dann auf "Transfertyp".

![FileZilla](images/1832.png){.thumbnail}


## Verzeichnisvergleich
Diese Option hinterlegt die Bereiche 3 und 4 farblich, um den Vergleich der Dateien und Ordner auf dem Computer und dem Server zu erleichtern.
Mit einem Rechtsklick auf das Icon  können Sie die Kriterien für den Vergleich ändern.
Dort können Sie die Funktion aktivieren oder deaktivieren sowie folgende Optionen auswählen:

- Dateigröße vergleichen
- Änderungszeitpunkt vergleichen
- Identische Dateien ausblenden


Die verwendeten Farben:

- Gelb: Die Datei existiert lediglich auf einer Seite
- Grün: Die Datei ist neuer als die nicht markierte Datei auf der anderen Seite
- Rot: Die Dateigrößen sind unterschiedlich



![FileZilla](images/1823.png){.thumbnail}


## Weitergehende Einstellungen

## Verbindung
Sie können bei Bedarf die Einstellungen für die erneute Verbindung mit dem Server anpassen.

Seien Sie jedoch mit dieser Einstellung vorsichtig, da dies von verschiedenen Servern als Missbrauch eingestuft wird, der zu einem Bann Ihrer IP-Adresse führen kann.

Um diese Einstellungen zu ändern klicken Sie in der FileZilla Menüleiste auf "Bearbeiten" und wählen dann "Einstellungen" und "Verbindung" aus.

![FileZilla](images/1825.png){.thumbnail}

## Übertragungen
Sie können auch verschiedene Parameter für die Übertragung von Dateien (Anzahl gleichzeitiger Übertragungen, maximale Geschwindigkeit...) beeinflussen.

Um diese Einstellungen zu ändern klicken Sie in der FileZilla Menüleiste auf "Bearbeiten" und wählen dann "Einstellungen" und "Übertragungen" aus.

![FileZilla](images/1826.png){.thumbnail}


## Den Verbindungsserver bestimmen
In einigen Fällen kann es erforderlich sein, dass Sie unserem Support den Server nennen, mit dem sich FileZilla verbunden hat, zum Beispiel wenn Sie feststellen, dass Ihr FTP Speicherplatz langsam ist.

Den Verbindungsserver finden Sie wie folgt heraus:

- Klicken Sie auf den Bereich 1 mit den Verbindungs-Logs
- Scrollen Sie bis an den Anfang des Logs
- Der dort aufgeführte webmXXX ist der verwendete Verbindungsserver



![FileZilla](images/2399.png){.thumbnail}

