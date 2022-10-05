---
title: Fortgeschrittene Operationen mit .htaccess Dateien
excerpt: In dieser Hilfe erfahren Sie, welche anderen Operationen mit .htaccess-Dateien möglich sind
slug: webhosting_welche_anderen_operationen_sind_mit_htaccess-dateien_moglich
section: 'Weiterleitung und Authentifizierung'
order: 04
---


## Verzeichnis-Browsing verhindern
Wenn Sie nicht wollen, dass Internetuser den Inhalt eines Verzeichnisses ohne Index-Datei (index.cgi, index.html, index.php, etc.) "durchstöbern" können, erstellen Sie eine .htaccess-Datei mit folgender Zeile:


```
Options -Indexes
```




## Fehlermeldungen weiterleiten
Wenn Sie personalsierte Fehlermeldungen verwenden oder bei Fehlern eine Weiterleitung auf eine bestimmte Webseite einrichten wollen, erstellen Sie eine .htaccess-Datei mit folgender Zeile:


```
ErrorDocument Nummer_des_Fehlers Nachricht_oder_Ziel
```


Ersetzen Sie "Nummer_des_Fehlers" durch den entsprechenden Fehlercode. Die häufigsten Fehlermeldungen sind folgende:


- 401: Authorization required. Die Anfrage erfordert eine gültige Authentifizierung mit Login und Passwort.
- 403: Access denied. Der Zugriff auf ein Verzeichnis ohne Index-Datei (index.html, index.cgi, etc.), dessen Serverkonfiguration die Anzeige der enthaltenen Dateien nicht erlaubt, wird verweigert.
- 404: Not Found. Die vom Nutzer angeforderte Datei existiert nicht.
- 500: Server Error. Zu diesem Fehler kommt es typischerweise dann, wenn ein CGI nicht korrekt ausgeführt wird oder die Rechte des Skripts nicht korrekt gesetzt sind.


Ersetzen Sie "Nachricht_oder_Ziel" durch die gewünschte Aktion. Wenn Sie eine einfache Nachricht anzeigen möchten, geben Sie diese in Anführungszeichen ein. Um eine Weiterleitung einzurichten, geben Sie den Pfad der gewünschten Seite an. Hier zwei Beispiele:


- Sie möchten, dass bei einem Fehler 403 folgende Nachricht erscheint: "Leider haben Sie kein Zugriffsrecht für diese Datei". Sie schreiben also folgende Zeile in Ihre .htaccess-Datei: 


```
ErrorDocument 403 "Leider haben Sie kein Zugriffsrecht für diese Datei"
```


- Sie möchten alle Fehler 404 auf Ihre persönliche Seite 404.html weiterleiten (für Ihre Domain: domain.com) : 


```
ErrorDocument 404 http://www.domain.com/404.php
```



Sie können den Fehler auch zu einem CGI-Skript weiterleiten, das dann eine Nachricht anzeigt, den Besucher je nach anfangs angegebener URL (über die Variable REQUEST_URI) auf eine andere Datei leitet und/oder Ihnen eine Mail schickt, etc. Um dies einzurichten, ergänzen Sie folgende Zeile in Ihrer .htaccess-Datei:


```
Errordocument 404 /cgi-bin/error.cgi?type=404
```


Die Zeile muss etwas anders aussehen, wenn Ihre Seite eine SSL-Verschlüsselung verwendet:


```
Errordocument 401 /~login/error.html
```


Sollte das nicht funktionieren, überprüfen Sie in den Erweiterten Einstellungen Ihres Internet Explorer, ob die Option "Kurze HTTP-Fehlermeldungen anzeigen" deaktiviert ist.


## Eine abweichende Index-Datei angeben
Standardmäßig ist die Index-Datei eines Verzeichnisses index.html, index.htm oder index.php. Wenn Sie eine andere Datei als Index-Datei festlegen möchten, ergänzen Sie folgende Zeile in Ihrer .htaccess-Datei:


```
DirectoryIndex Name_der_Datei
```


Wenn Sie beispielsweise die Seite willkommen.html als Index-Seite verwenden möchten, muss die Zeile folgendermaßen lauten:


```
DirectoryIndex willkommen.html
```
