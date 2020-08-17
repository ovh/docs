---
title: 'Automatische Tasks mit einem Webhosting verwenden'
excerpt: 'Erfahren Sie hier, wie automatisierte Aufgaben (CRON) eingesetzt werden können'
slug: webhosting_automatisierte_aufgaben_cron
section: 'Automatische Tasks (CRON)'
---


## Eine automatisierte Aufgabe erstellen
Wählen Sie im Menü links das gewünschte Hosting aus (1), klicken Sie dann auf den Tab "Mehr +" und wählen Sie dort "Geplante Aufgaben - Cron" (2). Anschließend klicken Sie rechts auf "Eine Planung hinzufügen" (3).

![](images/3261.png){.thumbnail}
In einem ersten Schritt müssen Sie den Pfad zu Ihrem Skript und die verwendete Programmiersprache angeben.
Die beiden anderen Felder sind optional. Wenn Sie "Logs per E-Mail" anfordern, werden die Ausführungsberichte Ihres Cronjobs an eine voreingestellte oder eine E-Mail-Adresse Ihrer Wahl geschickt.


- Diese E-Mail wird nur an Sie versandt, wenn ein Fehler auftritt.


Außerdem können Sie auch eine Beschreibung Ihres Cronjobs angeben.

![](images/3262.png){.thumbnail}
Im zweiten Schritt müssen Sie die Ausführungsfrequenz für den Task festlegen.

![](images/3264.png){.thumbnail}
Hier haben Sie die Wahl zwischen dem einfachen Modus und dem Experten-Modus.

![](images/3265.png){.thumbnail}
Wenn Sie die Parameter des Cronjobs festgelegt haben, erscheinen in einem neuen Fenster noch einmal alle Daten im Überblick.


- Wenn alle Angaben korrekt sind, bestätigen Sie die Erstellung Ihrer automatisierten Aufgabe.



![](images/3266.png){.thumbnail}
Es erscheint eine Meldung, dass Ihre Aufgabe erstellt wird.

![](images/3267.png){.thumbnail}


## Änderung einer automatisierten Aufgabe
Wählen Sie im Menü links das gewünschte Hosting aus (1), klicken Sie dann auf den Tab "Mehr +" und wählen Sie dort "Geplante Aufgaben - Cron" (2). Klicken Sie dann auf den kleinen Stift neben der Aufgabe, die Sie gerne ändern möchten (3).

![](images/3268.png){.thumbnail}
Sie können dann den Pfad oder die Sprache ändern, Logs per E-Mail aktivieren und eine Beschreibung für Ihren Cronjob hinzufügen.

![](images/3269.png){.thumbnail}


## Eine automatisierte Aufgabe löschen
Wählen Sie im Menü links das gewünschte Hosting aus (1), klicken Sie dann auf den Tab "Mehr +" und wählen Sie dort "Geplante Aufgaben - Cron" (2). Klicken Sie dann auf den kleinen Papierkorb neben der Aufgabe, die Sie gerne löschen möchten (3).

![](images/3270.png){.thumbnail}
Es erscheint eine kurze Zusammenfassung der automatisierten Aufgabe, die Sie löschen möchten.
Wenn Sie den Taks wirklich löschen möchten, bestätigen Sie.

![](images/3271.png){.thumbnail}


## Im Internetbrowser die Ausführung der automatisierten Aufgabe testen
Sie können Ihr Skript direkt vom Internetbrowser aus testen, um zu überprüfen, ob es einen Fehler verursachte.
Wenn sich beispielsweise Ihr Cronjob im Verzeichnis www/cron.php befindet und Ihr Domain test.com heißt, geben Sie die URL http://test.com/cron.php im Browser ein.
Damit der Test bestmöglich funktioniert, sollte Ihr Hosting genau die PHP-Version verwenden, die Sie bei der Erstellung der automatisierten Aufgabe angegeben haben.
Wenn eine Fehlermeldung erscheint, müssen Sie das Skript korrigieren.
Wenn kein Fehler gefunden wurde, empfehlen wir Ihnen, sich die Logs Ihrer Tasks anzusehen.


## Logs Ihrer automatisierten Aufgaben einsehen
Wählen Sie im Menü links das gewünschte Hosting aus und klicken Sie auf den Tab "Mehr +".

![](images/4012.png){.thumbnail}
Wählen Sie dann "Statistiken und Logs" aus.

![](images/4013.png){.thumbnail}
Wenn Ihre automatisierte Aufgabe innerhalb der letzten 24h ausgeführt wurde, können Sie die Logs direkt im OVH Speed Log einsehen (1).

-> Wenn der Task vor mehr als 24h ausgeführt wurde, wählen Sie die Logdatei desjenigen Monats, den Sie einsehen möchten (im Beispiel die Datei für Juni) (2).

![](images/3274.png){.thumbnail}
Beispiel für das Log einer automatisierten Aufgabe:


```
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```


In unserem Beispiel wurde die automatisierte Aufgabe nicht korrekt ausgeführt, weil der angegebene Pfad falsch ist oder nicht existiert. Diese Information können Sie folgender Zeile entnehmen:


```
Could not open input file: /homez.600/loginftp/www/cron.php
```




## Begrenzungen

- Beim Webhosting können Sie den Ausführungszeitpunkt der automatisierten Aufgabe nicht minutengenau festlegen. Außerdem können die Tasks maximal einmal pro Stunde ausgeführt werden.

- Die maximale Ausführungsdauer beträgt 60 Minuten.

- Die erzeugte Datenmenge (stdin/stderr) ist auf 5 MB begrenzt.




## Automatisierte Aufgaben mit Variablen
Im Pfad Ihrer automatisierten Aufgabe dürfen keine Variablen angegeben werden.

Exemple :

```
/www/cron.php?variable=test
```



- Sie können aber sehr wohl Variablen in Ihrem Skript definieren.




## Verwendung absoluter Pfade
Damit Ihr Cronjob funktioniert, müssen Sie in Ihrem Skript absolute Pfadangaben verwenden.
Um den derzeitigen Pfad zu erhalten können Sie die Konstante "_DIR_" verwenden:
[PHP Dokumentation](http://php.net/manual/de/language.constants.predefined.php)


## Ausführungsbericht
Es wird nur einmal täglich eine E-Mail mit den Ausführungberichten Ihres Cronjobs verschickt.


## Zugriff auf andere Skripte
Wenn das für Ihren Cronjob verwendete Skript auf andere Skripte zugreift, müssen Sie einen absoluten (keinen relativen) Pfad angeben, damit es funktioniert. Der absolute Pfad zu Ihrem Hosting beginnt mit:


```
/home/loginFTP/
```




## Ausführungsfehler
Wenn Ihre geplante Aufgabe (Cron) zu einem Fehler führt, wird sie nach 10 erfolglosen Ausführungsversuchen deaktiviert.


## Beispiele verschiedener Log-Ausgaben:
Korrekte Ausführung des Skripts:

```
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```


Fehler bei der Ausführung des Skripts, da die aufgerufene Datei nicht gefunden wurde:

```
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```


Fehler bei der Ausführung des Skripts aufgrund eines Timeouts:

```
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh
mardi 23 décembre 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```


Fehler bei der Ausführung des Skripts aufgrund einer Überschreitung des Limits für die erzeugte Datenmenge:

```
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```


Fehler bei der Ausführung des Skripts aufgrund falsch gesetzter Dateirechte (chmod) oder einer fehlerhaften Konfiguration der .ovhconfig Datei:

```
[2015-01-08 18:07:10]
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```



