---
title: SSL-Probleme mit einer Webseite vermeiden
excerpt: SSL-Probleme mit einer Webseite vermeiden
slug: ssl-probleme_mit_meiner_webseite_vermeiden
section: SSL
order: 04
---

 
## Mixed Content
Ihre Webseite kann externe Elemente, etwa Facebook- oder Twitter-Buttons, nicht laden? Die Datenkommunikation auf Ihrer Webseite funktioniert nicht mehr wie mit HTTP? Dann liegt das vermutlich an "Mixed Content".

Seit einigen Jahren verhindern Browser wie Google Chrome, Mozilla Firefox oder Internet Explorer, dass HTTPS-Seiten Elemente laden, die auf einer HTTP-URL liegen. So soll vermieden werden, dass die Sicherheit des HTTPS duch HTTP-Elemente kompromittiert wird.

In den meisten Fällen handelt es sich um externe Skripte von anderen Webseiten, etwa sozialen Netzwerken. Um diese Skripte zu verwenden, genügt es meist, das http durch https zu ersetzen.

Achtung: Manche Webseiten verwenden CDNs für das Hosting ihrer JavaScript-Bibliotheken (etwa JQuery). Wenn diese CDNs die Bibliothek mit einer http-URL bereitstellen, kann das die Funktion der Webseite beeinträchtigen.

Wie finde ich heraus, ob meine Webseite betroffen ist?

Die Debugging-Tools von Mozilla Firefox und Google Chrome zeigen an, wenn sich auf der Webseite als Mixed Content blockiert Elemente befinden. In der Dokumentation des [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content) erfahren Sie mehr darüber, was bei Mixed Content zu tun ist.


## Duplicate Content
Als "Duplicate Content" wird es bezeichnet, wenn Sie denselben Inhalt über verschiedene URLs anbieten. Von Suchmaschinen wird dieses Phänomen als Versuch eingestuft, die eigenen Rankings zu verbessern. Entsprechend werden die betroffenen Webseiten abgestraft.

Solche Probleme lassen sich aber vermeiden: Wenn Ihre Website über HTTPS ordnungsgemäß funktioniert, richten Sie eine Umleitung von HTTP auf HTTPS ein. So werden Ihre Besucher automatisch an die HTTPS-Adresse weitergeleitet, und nur eine Seite verwendet einen Inhalt.

Hier finden Sie nun ein Beispiel, wie Sie eine Umleitung in der .htaccess-Datei im Wurzelbverzeichnis Ihrer Webseite einrichten:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.ihredomain.de/$1 [R,L]
```




## Von HTTPS zurück auf HTTP
Wenn Sie Ihre Webseite auf HTTP beschränken und nicht das HTTPS-Protokoll verwenden möchten, können Sie das über die .htaccess-Datei entsprechend festlegen.

Ihre Besucher werden dann automatisch auf die HTTP-Adresse geleitet, und nur eine einzige Seite wird für einen Inhalt verwendet, auch wenn zuvor HTTPS aufgerufen wurde.

Hier ein kurzes Beispiel, wie Sie diese Weiterleitung in der .htaccess-Datei im Wurzelverzeichnis Ihrer Seite einrichten, um von HTTPS auf HTTP umzuleiten:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.ihredomain.de/$1 [R,L]
```



