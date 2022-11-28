---
title: 'Manuelle Installation von Drupal'
excerpt: Wie funktioniert die manuelle Installation von Drupal?
slug: cms_manuelle_installation_von_drupal
section: CMS
order: 07
---


## Teil 1: Installation vorbereiten 
Benötigte Tools

Bevor Sie das CMS Drupal auf Ihrem Webhosting installieren, empfehlen wir Ihnen den Download einer FTP-Software, etwa FileZilla (kostenlos).

## Für die Installation benötigte Daten
Sie sollten Ihre Kundenkennung (nic-handle) und Ihr Passwort bereithalten, um sich nötigenfalls in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) einloggen zu können.


- Halten Sie auch Ihr FTP-Login und das Passwort bereit, mit denen Sie sich in Ihr Webhosting einloggen können.

- Außerdem brauchen Sie auch die Kennung und das Passwort für Ihre SQL-Datenbank.
Die Hilfe zu Login/Passwort für SQL finden Sie hier:[]({legacy}1909)



## Teil 2: Download des Programmpakets

- Gehen Sie auf die Seite von [Drupal](http://www.drupalcenter.de/).



![drupal](images/3234.png){.thumbnail}
Hier steht die neueste stabile Version des Programms zum Download bereit.
In unserem Beispiel handelt es sich um Version 7.41.
In der Regel handelt es sich dabei um komprimierte (gezippte) Dateien, die Sie dekomprimieren (extrahieren) müssen. Im Internet finden Sie zahlreiche Hilfen zum Thema.


## Teil 3: Upload von Drupal auf das Webhosting per FTP

- Ordner dekomprimieren


Öffnen Sie den Ordner, in dem Sie den Download gespeichert haben.

Machen Sie einen Rechtsklick auf den heruntergeladenen Ordner und wählen Sie "Alle extrahieren..." (oder Hier extrahieren).

Wählen Sie einen Zielordner aus, in den die Dateien extrahiert werden sollen.

Im Internet finden Sie zahlreiche Hilfen und Programme zur Dekomprimierung, die Ihnen im Falle von Problemen weiterhelfen.

Der Zielordner wird "Drupal-xxx" heißen (anstatt xxx steht in der Regel die Versionsbezeichnung).

![drupal](images/3233.png){.thumbnail}

- FTP-Verbindung zum Webhosting


Um die Drupal Ordner auf Ihrem Webhosting ablegen zu können, müssen Sie sich zunächst mit diesem verbinden.

Eine Anleitung zur Herstellung einer FTP-Verbindung zu Ihrem Webhosting finden Sie hier:[]({legacy}1374)

- Dateiübertragung per FTP


Übertragen Sie Ihre Dateien per FTP in nur drei Schritten:

## Schritt 1
Öffnen Sie FileZilla.

Unter "Lokal" (linker Bereich) finden Sie alle Dateien auf Ihrem Rechner. Öffnen Sie hier den dekomprimierten Ordner "Drupal-xxx", in dem sich alle Dateien Ihres CMS befinden.

Unter "Server" (rechter Bereich) finden Sie die Dateien Ihres OVH Webhostings. Öffnen Sie hier das "www" Verzeichnis. In dieses Verzeichnis müssen Sie alle Dateien des CMS ablegen.
Falls dieses Verzeichnis noch nicht existiert, können Sie es jetzt erstellen.
Die Dateien müssen in jedem Fall im "www" Verzeichnis abgelegt werden. Andernfalls kann die Installation von Ihrem Domainnamen aus nicht gestartet werden.

## Schritt 2
Wenn diese Ordner geöffnet sind:

Unter "Lokal" (linker Bereich) finden Sie alle für die Installation des CMS Drupal notwendigen Dateien.

Mit Strg+A können Sie alle Dateien auswählen.

Verschieben Sie anschließend alle Dateien per Drag&Drop in das "www" Verzeichnis auf dem "Server" (rechter Bereich).

![drupal](images/3199.png){.thumbnail}
Höchstwahrscheinlich ist das "www" Verzeichnis nicht leer. Die darin enthaltenen Dateien müssen aber nicht unbedingt gelöscht werden. Auf diesen Punkt kommen wir später noch einmal zurück.

## Schritt 3
Die Dateien werden nun übertragen.

Warten Sie, bis alle Dateien auf den FTP-Server verschoben sind. Das kann einige Minuten dauern.

Wenn die Dateiübertragung abgeschlossen ist, überprüfen Sie, ob alle Dateien und Ordner korrekt verschoben wurden.

Damit ist der Upload der Drupal-Dateien auf Ihr Webhosting beendet.

![drupal](images/3200.png){.thumbnail}


## Schritt 1 - Installation von Drupal
Öffnen Sie einen Browser und geben Sie den Namen Ihrer Domain ein.

Wenn Sie auf Ihrer Webseite sind,
wählen Sie "Standard
Install with commonly used features pre-configured." und klicken Sie dann auf "Save and continue".

![drupal](images/3219.png){.thumbnail}


## Schritt 2 - Sprachwahl
Wählen Sie die gewünschte Sprache für die Installation und klicken Sie auf "Save and continue".

![drupal](images/3218.png){.thumbnail}


## Schritt 3 - Verbindung zur Datenbank
Halten Sie Login und Passwort für Ihre Datenbank bereit (eine Hilfe zum Thema finden Sie hier: []({legacy}1374)).

Machen Sie alle erforderliche Angaben zur Datenbank:

Wählen Sie "MySQL, MariaDB oder equivalent".


- Datenbankname: bei der Erstellung im Kundencenter ausgewählt.

- Datenbankbenutzer: identisch mit dem Datenbanknamen.

- Datenbankpasswort: wurde Ihnen nach der Erstellung Ihrer Datenbank per E-Mail zugeschickt. Falls Sie das Passwort seitdem geändert haben, denken Sie daran, dieses zu verwenden.

- Klicken Sie dann auf "ERWEITERTE OPTIONEN".



![drupal](images/3202.png){.thumbnail}

- Datenbankhost: Geben Sie hier den Server an, auf dem Ihre Datenbank läuft. Sie finden die Angabe in der Installationsmail Ihrer Datenbank oder in Ihrem Kundencenter. Der Hostname endet meist auf ".mysql.db".

- Datenbankport: Lassen Sie dieses Feld leer.

- Tabellenpräfix: Wenn die Datenbank für mehrere Anwendungen genutzt wird, müssen Sie für jede Installation ein anderes Präfix angeben. Wenn Sie unsicher sind, lassen Sie dieses Feld leer.



![drupal](images/3203.png){.thumbnail}
Bitte beachten Sie: Login und Passwort für die Datenbank werden Ihnen nicht automatisch bei der Installation eines Hostings zugeschickt. Sie müssen zuerst die Datenbank in Ihrem Kundencenter aktivieren.
Klicken Sie dann auf "Speichern und fortfahren", um die Verbindung zur Datenbank herzustellen.


## Schritt 4 - Überprüfung und Abschluss der Installation
Wenn alle Angaben zur Datenbank korrekt waren, wird die Installation nun gestartet. Andernfalls müssen Sie alle Daten erneut eingeben.


- Nun müssen Sie nur noch abwarten, bis die Installation abgeschlossen ist.



![drupal](images/3190.png){.thumbnail}


## Schritt 5 - Konfiguration von Drupal
Dann tragen Sie Daten für die Verwaltung Ihres Drupal ein.

- Name der Website: Geben Sie hier Ihren Domainnamen an.

- E-Mail-Adresse der Webseite: Geben Sie die E-Mail-Adresse an, über die Ihre Webseite automatische Nachrichten verschicken soll.

- Benutzername: Geben Sie hier den Namen des Admin-Kontos Ihrer Webseite an. In unserem Beispiel ist das "admin".

- E-Mail-Adresse: Geben Sie hier die E-Mail-Adresse für das Admin-Konto an.

- Passwort: Geben Sie hier das Passwort für das Admin-Konto an.

- Passwort bestätigen: Wiederholen Sie das Passwort.


Scrollen Sie nach unten.

![drupal](images/3206.png){.thumbnail}

- Standardland: Wählen Sie Land/Sprache der Webseite.
- Standard-Zeizone: Wählen Sie die Zeitzone der Webseite.

- Automatisch auf Aktualisierungen überprüfen & E-Mail Benachrichtigung empfangen: Wir empfehlen Ihnen, diese Optionen zu aktivieren, um die Stabilität und Sicherheit Ihrer Seite zu verbessern.

- Klicken Sie anschließend auf "Speichern und fortfahren"



![drupal](images/3207.png){.thumbnail}


## Schritt 6 - Fertigstellung
Ihr CMS Drupal ist nun vollständig installiert.
Klicken Sie auf "Besuchen Sie Ihre neue Website".

![drupal](images/3208.png){.thumbnail}
Jetzt müssen Sie Drupal nur noch einsetzen und Ihre Webseite ganz nach Ihren Wünschen gestalten.

![drupal](images/3209.png){.thumbnail}


## Drupal Support
Wir empfehlen Ihnen, bei Problemen jeglicher Art das [Drupal Forum](http://www.drupalcenter.de/) zu besuchen.
Der Kundendienst von OVH ist leider nicht berechtigt, Anfragen bezüglich der Konfiguration Ihres Drupal zu bearbeiten.
Unter folgendem Link finden Sie aber eine Nutzungsanleitung: []({legacy}2053).


## Häufige Fehler

- Fehler "OVH - Seite wird erstellt"


Sie haben alle Dateien auf den FTP-Server verschoben, aber trotzdem wird weiterhin angezeigt "Seite wird erstellt".

Bei der Installation Ihres Hosting richtet OVH eine vorläufige Seite ein, bis Sie Ihre Webseite selbst gestalten.

Wenn Sie Ihre Dateien im "www" Verzeichnis ablegen, ohne zuvor die von OVH hinterlegten Inhalte zu löschen, kann es zu diesem Fehler kommen.

Um diesen Fehler zu beheben, müssen Sie die von OVH auf Ihrem Hosting erstellte Datei "index.html" löschen oder umbenennen.

Es kann sinnvoll sein, die Datei lediglich umzubennen. So können Sie sie später jederzeit erneut als vorläufige Seite verwenden.

Noch ein Hinweis: Die Dateien Ihrer Webseite müssen immer im "www" Verzeichnis abgelegt werden. Andernfalls werden Sie nicht erfasst.

![drupal](images/3217.png){.thumbnail}

- Fehler bei der PHP-Version


Hier handelt es sich um einen Fehler bei der PHP-Version Ihres Servers.

Der Grund ist einfach: Die neueste Version von PHP ist nicht aktiviert.

Wie Sie die PHP-Version auf Ihrem Webhosting ändern können, erfahren Sie hier:[Konfiguration von PHP für ein OVH Webhosting 2014]({legacy}1207)

