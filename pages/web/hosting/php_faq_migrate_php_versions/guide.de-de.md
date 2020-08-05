---
title: 'Webhosting: FAQ zur Migration auf die aktuellen PHP Versionen'
excerpt: FAQ zur Migration auf die aktuellen PHP Versionen
slug: webhosting_faq_zur_migration_auf_die_aktuellen_php_versionen
legacy_guide_number: g1758
section: 'PHP'
hidden: true
---


## Informationen zu PHP
Was ist PHP?
PHP ist eine freie Programmiersprache, die vor allem zur Erstellung dynamischer Webseiten genutzt wird.
PHP ist die derzeit am häufigsten im Internet verwendete Programmiersprache und wird von zahlreichen Content Management Systemen (CMS) wie Wordpress, Joomla, Drupal usw. verwendet.
Warum werden einige PHP Versionen von OVH deaktiviert?
Wie alle Programmiersprachen wird auch PHP ständig weiter entwickelt, neue Versionen korrigieren Bugs und fügen neue Funktionen hinzu. Die alten PHP Versionen werden für eine festgelegte Lebensdauer weiter gepflegt und dann eingestellt.
Diese alten, nicht mehr gewarteten PHP Versionen weisen Sicherheitsrisiken für OVH und die Benutzer auf, deshalb werden wir sie deaktivieren.
Welche Vorteile bietet die Migration auf eine neue PHP Version für mich als Benutzer?
Durch die Migration Ihrer Seite auf eine der aktuellen PHP Versionen, die weiterhin gepflegt werden, reduzieren Sie die Sicherheitsrisiken in Zusammenhang mit Hacks und profitieren von Neuerungen in PHP.
Außerdem bietet Ihnen OVH ab der PHP Version 5.3 die kostenlose PHP-FPM Optimierung zur Verbesserung der Performance Ihres Hostings. Klicken Sie [hier](https://www.ovh.de/hosting/php-fpm-optimierung.xml) für mehr Informationen zu PHP-FPM.
Welche PHP Versionen sind betroffen und wann werden diese deaktiviert?
Die betroffenen PHP Versionen sind:

|Version|Offizielles Supportende|Also bereits beendet seit mehr als...|
|4.X|7. August 2008|6 Jahren und 8 Monaten|
|5.2|6. Januar 2011|4 Jahren und 3 Monaten|
|5.3|14. August 2014|8 Monaten|


Quelle: http://php.net/eol.php

Diese Versionen werden ab dem 24. September 2015 deaktiviert. Sie können den Fortschritt dieser Arbeiten unter folgender Adresse einsehen: [http://travaux.ovh.net/?do=details&id=12795](http://travaux.ovh.net/?do=details&id=12795)
Welche Webhosting-Pakete sind betroffen?
Es sind alle unsere Webhosting-Pakete auf Linux-Basis (mit Ausnahme der 60Free und Demo1G Angebote) betroffen.
Meine Seite oder ein Teil meiner Seite verwenden ältere PHP Versionen, was soll ich tun?
Ab dem 24. September 2015 werden Ihre Seiten und die dazugehörigen Cron-Jobs standardmäßig auf PHP 5.4 umgestellt.
Wir empfehlen Ihnen, Ihre Seiten und Cron-Jobs schon jetzt mit dieser neuen PHP Version zu testen. Wir erklären Ihnen weiter unten in diesen FAQ, wie Sie dies tun können.
Warum migriert OVH meine Skripte nicht automatisch?
Die Deaktivierung der alten PHP Versionen und die Umstellung auf PHP 5.4 als Standardversion erfolgen automatisch.
Aufgrund der Einzigartigkeit jeder Webseite ist es jedoch leider für OVH nicht möglich, die weiteren notwendigen Operationen für seine Kunden durchzuführen.


## SCHRITT 1: Stellen Sie sicher, dass Ihre Seite kompatibel ist
A) Wenn Sie ein Content Management System wie Wordpress, Joomla, Drupal, Prestashop usw. verwenden, führen Sie zuerst ein Update der verwendeten Software anhand der offiziellen Anleitungen durch:


- Wordpress: [https://codex.wordpress.org/Upgrading_WordPress](https://codex.wordpress.org/Upgrading_WordPress)
- Joomla: [https://docs.joomla.org/Portal:Upgrading_Versions/en](https://docs.joomla.org/Portal:Upgrading_Versions/en)
- Drupal: [https://www.drupal.org/upgrade](https://www.drupal.org/upgrade)
- Prestashop: [url="http://doc.prestashop.com/display/PS15/Updating+PrestaShop"]http://doc.prestashop.com/display/PS15/Updating+PrestaShop[/url]
- ...


B) Wenn Ihre Seite eine personalisierte Lösung verwendet, ziehen Sie die offizielle Migrationsanleitung von PHP zu Rate: http://php.net/manual/en/appendices.php
Wenn Sie nicht der Entwickler Ihrer Webseite sind, kontaktieren Sie Ihren Webmaster.


## SCHRITT 2: Stellen Sie schon heute die PHP Version Ihres Hostings um
Verbinden Sie sich per FTP mit dem Speicherplatz Ihres Webhostings und begeben Sie sich in das Wurzelverzeichnis. Eine Anleitung zur Verwendung von FTP finden Sie [hier](https://www.ovh.de/g1380.verwendung-von-filezilla).


- Wenn noch keine .ovhconfig Datei vorhanden ist, muss diese zuerst erstellt werden. Fügen Sie in einem beliebigen Texteditor folgende 4 Code-Zeilen in eine leere Datei ein (in diesem Beispiel wird die PHP Version 5.6 ausgewählt):


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```



Speichern Sie die Datei unter dem Namen .ovhconfig ab. Sie können diese Datei bei Bedarf auch jederzeit in einem Texteditor abändern und deren Inhalt überprüfen.

Mehr Informationen zu den Einstellmöglichkeiten in der .ovhconfig Datei finden Sie [hier](http://www.ovh.de/g1207.konfiguration_von_php_fur_ein_ovh_webhosting_2014).


## Häufige Fragen
Wie kann ich die von meiner Seite verwendete PHP Version überprüfen?
Sie können einfach die hier verlinkte Datei herunterladen (Rechtsklick und dann "Speichern unter..."): [info.php](https://www.ovh.com/fr/documents/info.php)
Wenn Sie diese Datei lieber selbst erstellen möchten, tragen Sie folgenden Code in eine Textdatei ein: <?php phpinfo(); ?>
Speichern Sie die Datei anschließend unter dem Namen info.php ab.

Übertragen Sie dann die Datei per FTP in das Wurzelverzeichnis Ihrer Webseite (oder Webseiten, falls mehrere Seiten mit Subdomains verwenden), zum Beispiel /www/meinwordpress/
Rufen Sie danach diese info.php Datei mit Ihrem Browser auf, Beispiellink: www.ihre-seite.tld/meinwordpress/info.php

![](images/img_2601.jpg){.thumbnail}
OVH hat den betroffenen Benutzern im März und April 2015 auch eine E-Mail mit einer Auflistung der verwendeten PHP Versionen zugesandt.
Ich verfüge über Subdomains oder ein Multi-Domain Angebot, kann ich verschiedene PHP Versionen parallel aktivieren?
Ja, sie können eine andere PHP Version für jede Ihrer Subdomains verwenden (Multi-Domains werden dabei wie Subdomains behandelt).
Erstellen Sie dazu einfach eine eigene .ovhconfig Datei im Wurzelverzeichnis der gewünschten Subdomain. Die .ovhconfig Datei wird wie folgt geladen:


- Die Datei wird vom Wurzelverzeichnis der Domain aus geladen. Wenn zum Beispiel "www.beispiel.tld" auf den Ordner "/www" verweist und "beta.beispiel.tld" auf den Ordner "/beta", wird die Datei "/www/.ovhconfig" bei der Anfrage von http://www.beispiel.tld/index.php berücksichtigt, und die Datei "/beta/.ovhconfig" wird bei einer Anfrage an http://beta.beispiel.tld/index.php geladen.
- Wenn keine eigene .ovhconfig Datei für die in Schritt 1 aufgerufene Subdomain gefunden wird, wird die Datei "/.ovhconfig" geladen.
- Wenn keine dieser Dateien existiert, wird die Standardkonfiguration des Accounts angewandt (PHP 5.4 mit FPM).


Ich habe eine .htaccess Datei konfiguriert, um eine bestimmte Version von PHP zu erzwingen, was geschieht damit?
Diese Einstellung wird ab dem 24.09.2015 nicht mehr berücksichtigt. Ihre Webseiten werden dann standardmäßig auf PHP 5.4 umgestellt. Wenn Sie eine verfügbare neuere Version verwenden möchten (zum Beispiel PHP 5.6), erfolgt diese Einstellung dann über die auf Ihrem FTP Speicherplatz vorhandene .ovhconfig Datei.
Wenn Ihre .htaccess Datei noch weitere Einstellungen enthält (URL Rewriting, Weiterleitungen...), so bleiben diese weiterhin aktiv.
Ich habe Schwierigkeiten mit der Migration, wie muss ich vorgehen?
Unser Support kann die Migration Ihrer Seite nicht für Sie durchführen, er kann Sie jedoch bei der Änderung der PHP Version mit Hilfe der .ovhconfig Datei unterstützen. Unser Support übernimmt dabei keine Haftung für eventuell auftretende Fehlfunktionen.

Sie benötigen Hilfe? Finden Sie einen Dienstleister aus unserem Partnernetzwerk, der Sie bei der Migration Ihrer Seite begleitet: [http://www.ovh.biz/de/](http://www.ovh.biz/de/)

