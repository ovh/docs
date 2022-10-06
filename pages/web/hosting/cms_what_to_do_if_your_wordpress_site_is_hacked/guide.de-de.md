---
title: 'Was tun, wenn Ihre WordPress Seite gehackt wurde?'
excerpt: ''
slug: was_tun_wenn_ihre_wordpress_seite_gehackt_wurde
section: 'Anwendungsbeispiele'
order: 01
---

## 
Sie haben eine bei OVH gehostete Webseite und stellen fest, dass Ihre Webseite nicht mehr angezeigt wird, dass sie auf eine andere Webseite weitergeleitet wird oder dass auf Ihrer Seite unerwünschte Werbung angezeigt wird.

Für WordPress übernimmt OVH keinen Support, weder per E-Mail noch telefonisch. In dieser Hilfe erklären wir Ihnen aber, welche Maßnahmen Sie ergreifen können, wenn Ihre Seite gehackt wurde.


## Warum wurde meine Webseite gehackt?
Warum wurde meine Webseite gehackt? Und was soll ich jetzt tun?

Wenn Webseiten gehackt werden, liegt das meist an fehlenden Updates, der Verwendung inoffizieller Plugins, zu simplen Passwörtern ...

KEIN Risiko ist unrealistisch. Aber es ist doch möglich, das Risiko zu minimieren.

Es gibt einige ganz konkrete Maßnahmen, die Sie ergreifen können, wenn der Worst Case dann doch eingetroffen ist und/oder um eine Wiederholung zu verbinden (regelmäßige Updates von WordPress, Themes, Plugins, ...).

Mit dieser Hilfe möchten wir Ihnen helfen, Ihre Webseite möglichst schnell wieder online zu stellen.

Wenn Ihre Seite von OVH gesperrt wurden, erfahren Sie in [dieser Hilfe](https://www.ovh.de/g1392.ovh-vorgang-schliessung-wegen-hack), wie Sie weiter vorgehen müssen.


## Überprüfung Ihres Rechners
Es ist immer sinnvoll, in der lokalen Umgebung mit der Ursachenforschung zu beginnen. In vielen Fällen lassen sich der Angriff oder die Infektion hierher zurückverfolgen (Laptop, Desktop-Rechner, ...).

Stellen Sie sicher, dass auf Ihrem lokalen Rechner ein aktuelles Antiviren-/Antimalware-Programm läuft. Manche Viren sind gegen bestimmte Antivirenprogramme "immun". Deshalb kann es sinnvoll sein, mehrere Programm zu verwenden (lokal und online). Das gilt sowohl für Windows als auch für Mac und Linux.


## Kritische Einschätzung der Situation
Sobald Sie merken, dass Ihre Seite gehackt wurde, müssen Sie entsprechende Maßnahmen ergreifen. Zunächst ist es wichtig, den Zeitpunkt des Hacks zu ermitteln, um dann zu überprüfen, ob eine Wiederherstellung der Daten durch OVH möglich ist.


## 
Es ist wichtig, vor der Restaurierung das Datum der letzten Änderung Ihrer Web-Dateien (FTP) zu überprüfen, um dann die Sicherheitslücken zu erkennen und zu schließen.
Es gibt kein spezifisches Vorgehen, um die genaue Quelle des Eindringens zu ermitteln, aber normalerweise nutzen Hacker Fehler im Skript aus, um eine HTTP-Anfrage zu starten.

Alle HTTP-Anfragen finden Sie in Ihren Logs (https://logs.cluster0XX.hosting.ovh.net/ihre_domain).
Ersetzen Sie "ihre_domain" einfach durch den Namen Ihrer Domain mitsamt Domainendung, z. B. ovh.com.

- 1 Ermitteln Sie Datum und Uhrzeit (anhand der E-Mail, die Sie erhalten haben)*
- 2 Recherchieren Sie in Ihren Logs. Gehen Sie dabei von dem ermittelten Zeitpunkt aus und erweitern Sie nach und nach Ihren Suchbereich, bis Sie auf den inkorrekten Eintrag stoßen (ungewöhnlich, von den anderen abweichend, etc.). Dies kann ein bißchen Übung oder auch Kenntnis des Anfrageformats je nach Situation verlangen. Achten Sie besonders auf POST Anfragen, die häufigste Quelle von Hacks;
- 3 Identifizieren Sie das durch Anfrage angegriffene Skript;
- 4 Analysieren Sie das Skript, um die Sicherheitslücke zu identifizieren;
- 5 Schließen Sie die Sicherheitslücke.


*Diese E-Mail erhalten Sie nur, wenn Ihr Hosting blockiert wurde. Ist dies nicht der Fall, so müssen Sie die Daten der letzen Änderung in Ihrem FTP-Bereich überprüfen.

Es ist nicht ausreichend, nur den vom Hacker hinzugefügten Code zu entfernen. Sie müssen das Problem vollumfänglich beheben..

Wir empfehlen Ihnen, einen erfahrenen [Webmaster](https://partners.ovh.com) zu Rate zu ziehen und/oder sich an das offizielle WordPress Forum zu wenden.
Bei einer solchen Anfrage kann Ihnen unser Support leider nicht behilflich sein.


## Wiederherstellung der Webseite
WordPress besteht aus verschiedenen Dateien und einer Datenbank. Es ist möglich, Dateien älteren Datums wiederherzustellen. Bei OVH haben Sie für die Dateien auf Ihrem Hosting Zugriff auf eine History der letzten zwei Wochen. Für die Datenbank haben Sie Zugriff auf die letzten sieben Tage.
Bitte beachten Sie, dass durch eine Wiederherstellung keine Sicherheitslücken geschlossen werden. Diese müssen Sie also dennoch ermitteln und schließen.

Durch die Wiederherstellung werden die Dateien durch das Backup ersetzt.


## Wiederherstellung der Dateien via FTP
Über das OVHcloud Kundencenter können Sie Ihren gesamten FTP-Bereich wiederherstellen. Dies kann aber kompliziert sein, wenn mehrere Domains mit demselben Hosting verbunden sind.

In solchen Fällen ist es sinnvoller, nur das betroffene Verzeichnis wiederherzustellen. Eine Hilfe dazu finden Sie [hier](https://www.ovh.de/g1593.webhosting_abruf_einer_vollstandigen_sicherung_oder_einer_bestimmten_datei_per_ftp_mit_filezilla).


## Wiederherstellung der SQL-Datenbank
Zur Wiederherstellung Ihrer Datenbank finden Sie bei uns zwei Hilfen, eine zum [Export](https://www.ovh.de/g1394.webhosting_hilfe_zum_export_von_datenbanken) und eine zum [Import](https://www.ovh.de/g1393.webhosting_import_einer_mysql-datenbank).

Wenn Sie Ihre Dtaenbank gesichert haben (dump), müssen Sie über [phpMyAdmin](https://docs.ovh.com/de/hosting/datenbank-verbindung-auf-bdd/) alle Tabellen löschen, um anschließend das Backup zu importieren.


## Nach der Wiederherstellung
Wenn die Wiederherstellung abgeschlossen ist, müssen Sie überprüfen, ob für WordPress, Themes und Plugins Updates verfügbar sind, und diese gegebenenfalls durchführen.

Denken Sie auch daran, nciht (mehr) verwendete Plugins zu deinstallieren. Bei einer einfachen Deaktivierung können dennoch Sicherheitslücken bestehen bleiben.

Wenn der Hack länger zurückliegt und eine Wiederherstellung nicht möglich ist, müssen Sie folgendermaßen vorgehen:

## Sie können sich nicht auf Ihrem WordPress Admin-Panel anmelden
In diesem Fall müssen Sie Ihr [Administrator-Passwort](https://codex.wordpress.org/) zurücksetzen. Wie das geht, erfahren Sie im offiziellen WordPress Guide.

Wenn Ihnen das zu kompliziert ist, können Sie auch über [phpMyAdmin](https://docs.ovh.com/de/hosting/datenbank-verbindung-auf-bdd/) Ihre E-Mail-Adresse in der Tabelle User aktualisieren. Wenn Sie dann auf die Login-Seite gehen und auf Passwort vergessen klicken, wird Ihnen eine entsprechende E-Mail zugesandt.


## Ersetzen Sie Ihre WordPress Dateien durch neu heruntergeladene Dateien
Indem Sie alle Dateien ersetzen, stellen Sie sicher, dass Sie nicht-infizierten Content verwenden.

- Gehen Sie auf die offizielle [WordPress](https://de.wordpress.org/)-Webseite.


Dort finden Sie einen Link, um die neueste stabile Version herunterzuladen.

Die Datei ist in der Regel komprimiert (gezippt), Sie müssen sie also dekomprimieren (extrahieren) können. Im Internet finden Sie zahlreiche Hilfen und Anleitungen hierzu.

Anschließend müssen Sie die Dateien auf Ihren FTP-Bereich hochladen. Wie das geht, erfahren Sie in [dieser Hilfe](https://www.ovh.de/g1374.webhosting_meine_seite_online_stellen).

Wenn mehrere Webseiten auf demselben Hosting platziert sind, muss der Dateitransfer in das richtige Verzeichnis durchgeführt werden.

Die wp-config.php-Datei muss ebenfalls geändert werden, damit die Verbindung zur Datenbank funktioniert.

Rufen Sie hierfür die E-Mail wieder auf, die Sie nach Erstellung Ihrer Datenbank erhalten haben. Sie finden diese E-Mail in Ihrem OVHcloud Kundencenter, Bereich "Mein Account" > "Empfangene E-Mails". Darin sind alle notwendigen Informationen enthalten, mit Ausnahme des Passworts, das nur Sie alleine kennen.

Wenn Sie das Passwort Ihrer Datenbank vergessen haben, können Sie es über das OVHcloud Kundencenter ändern. Wie das geht, erfahren Sie in [dieser Hilfe](https://www.ovh.de/g1374.webhosting_meine_seite_online_stellen).
Denken Sie daran, anschließend über Ihr WordPress Admin-Interface nach möglichen Updates zu suchen.


## Nützliche Informationen
Wir empfehlen Ihnen, stets nur offizielle WordPress-Plugins zu verwenden. Inoffizielle Plugins werden vom Herausgeber nicht notwendigerweise aktuell gehalten. Außerdem können auch die Plugins selbst schädlichen Code enthalten.

