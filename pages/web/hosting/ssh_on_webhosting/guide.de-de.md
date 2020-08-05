---
title: 'Verwendung von SSH mit einem Webhosting'
excerpt: 'Webhosting: SSH auf Ihren Webhostings'
id: '1962'
slug: webhosting_ssh_auf_ihren_webhostings
legacy_guide_number: g1962
section: 'FTP und SSH'
order: 4
---


## Was ist SSH und welche Vorteile bietet es?
Die Nutzung von SSH ist ab den PRO Angeboten möglich (für die [alten Hosting Angebote](https://www.ovh.de/hosting/alte_hosting_angebote.xml) ab PLAN).

ACHTUNG: Bei den alten Angeboten ist der Zugriff nur über das primäre FTP-Konto möglich, zusätzliche FTP-Nutzer haben also keinen Zugriff auf SSH.

Über SSH können Sie sich mit Ihrem Hosting verbinden und die Dateien bearbeiten (wie über FTP).
Mehr Informationen über das SSH-Protokoll finden Sie [hier](https://de.wikipedia.org/wiki/Secure_Shell).


## Voraussetzungen

- Die Option SSH ist verfügbar für:

alle Hostings ab dem [Hosting PRO](https://www.ovh.de/hosting/hosting-pro.xml).


- Eine Software, die SSH-Zugriffe ermöglicht.

- Port 22 muss auf Ihrer Firewall und Ihrem Router freigegeben sein.




## SSH für einen Benutzer aktivieren / deaktivieren
Sie können Ihre SSH-Logins über das Kundencenter verwalten. Hierfür müssen Sie nur im Menü links auf den Namen des gewünschten Hostings klicken und dann das Tab "FTP - SSH" auswählen.

Wenn Sie neue FTP-Benutzer erstellen, aktiviert dies automatisch auch die SSH-Option für diese Benutzer.

![](images/img_3945.jpg){.thumbnail}
Sie können SSH auch für einen Benutzer deaktivieren. Klicken Sie hierfür auf das kleine Zahnrad neben dem entsprechenden Login und dann auf "Ändern".

Die Änderung wird innerhalb weniger Minuten wirksam.

![](images/img_3946.jpg){.thumbnail}


## Die Eingabeaufforderung
Unter Linux:

- Unter KDE: Öffnen Sie das Hauptmenü (standardmäßig links unten auf Ihrem Bildschirm), geben Sie in die Suchleiste "konsole" ein und klicken Sie anschließend auf das erste Ergebnis der Suche.

Unter Mac:
- Klicken Sie auf die Festplatte auf Ihrem Desktop, klicken Sie dann auf das Anwendungsverzeichnis, dann das Verzeichnis Dienstprogramm und schließlich auf die Anwendung "Terminal".

Unter Windows:


- Unter Windows gibt es keinen nativen SSH-Client, daher müssen Sie einen herunterladen.

Der bekannteste Client ist wohl Putty: [zum Download](http://www.putty.org/).


## SSH-Verbindung zu Ihrem Hosting
Unter Linux und Mac :

- Um eine SSH-Verbindung zu Ihrem Hosting herzustellen, verfahren Sie wie oben beschrieben und geben Sie dann
SSH IhrFtpLogin@IhrFtpServer ein.


Alles zu Ihren FTP-Daten erfahren Sie in [dieser Anleitung](https://www.ovh.de/g1909.mutualise_gerer_et_acceder_a_ses_mots_de_passe#les_differents_mots_de_passe_lies_au_service_mutualise_dovh_la_connexion_ftp).

![](images/img_3093.jpg){.thumbnail}
Unter Windows :

- Wenn Sie Windows verwenden, hilft Ihnen [diese Anleitung zu Putty](https://www.ovh.de/g1964.mutualise_utilisation_de_putty_sur_windows) weiter.




## Liste der wichtigsten Befehle
Sie müssen nur den jeweiligen Ausdruck arg durch den Namen der gewünschten Datei oder des gewünschten Verzeichnisses ersetzen.

|Befehl|Übersetzung (Englisch)|Erklärung|
|---|---|---|
|pwd|print working directory|Zeigt das Arbeitsverzeichnis an|
|cd arg|change directory|Wechselt das Arbeitsverzeichnis; arg ist dieses neue Verzeichnis. Der Befehl  cd ohne arg führt zum Verzeichnis  home.|
|cd ..|change directory to ..|Wechselt das Arbeitsverzeichnis, indem in Ihrem Verzeichnisbaum eine Ebene höher gegangen wird.|
|ls arg|list|Listet den Inhalt von arg, wenn es sich hierbei um ein Verzeichnis handelt. Ohne arg listet ls den Inhalt des Arbeitsverzeichnisses.|
|ll arg|long list|Zeigt detaillierte Informationen zum Ordner arg.|
|ls -a arg|list all|Zeigt alle Dateien in arg, auch die mit .. beginnenden, wenn es sich dabei um ein Verzeichnis handelt. Die Optionen von ls können auch kombiniert werden: ls -al.|
|chmod droit arg|change droits|Ändert die Rechte der Datei arg, conformément à droit.|
|mkdir arg|make directory|Erstellt das Verzeichnis arg.|
|rmdir arg|remove directory|Löscht das Verzeichnis arg, wenn es leer ist.|
|rm arg|remove|Löscht die Referenz arg.|
|rm -r arg|remove recursively|Löscht arg und alle enthaltenen Dateien.|
|mv arg1 arg2|move|Ändert den Namen oder verschiebt arg1 in arg2.|
|touch arg|touch|Erstellt ein leeres Verzeichnis arg, wenn es noch nicht existiert. Andernfalls Aktualisierung mit dem aktuellen Datum, dem Datum der letzten Änderung.|




## Ein Skript mit einer bestimmten PHP-Version starten
Um Ihre Skripte mit einem SSH-Befehl auszuführen und dabei eine bestimmte PHP-Version zu verwenden, brauchen Sie ganz bestimmte Befehle.

|Befehl|Version|
|---|---|
|php.ORIG.4 (cgi)|4.4.9|
|php.ORIG.5_2 (cgi)|5.2.17|
|php.ORIG.5_3 (cgi-fcgi)|5.3.29|
|/usr/local/php5.3/bin/php (cli)|5.3.29|
|php.ORIG.5_4 (cgi-fcgi)|5.4.38|
|/usr/local/php5.4/bin/php (cli)|5.4.38|
|/usr/local/php5.5/bin/php (cli)|5.5.22|
|/usr/local/php5.6/bin/php (cli)|5.6.6|


Um das Skript "meinScript.php" mit PHP-Version 5.3 auszuführen, brauchen Sie folgenden Befehl:

```sh
php.ORIG.5_3 meinScript.php
```


Außer dem Namen des Skripts müssen Sie auch angeben, wo es gespeichert ist.
Wenn also z. B. Ihre Datei "meinScript.php" im "WWW" Verzeichnis liegt und Sie es in PHP-Version 5.3 ausführen wollen, brauchen Sie folgenden Befehl:

```sh
php.ORIG.5_3 www/meinScript.php
oder
php.ORIG.5_3 /www/meinScript.php
```




## Unsere öffentlichen Schlüssel (Validierung bei der ersten SSH-Verbindung erforderlich)
Wenn Sie sich zum ersten Mal mit dem Server verbinden, müssen Sie den öffentlichen Schlüssel validieren.

