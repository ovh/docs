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
Außerdem bietet Ihnen OVH ab der PHP Version 5.3 die kostenlose PHP-FPM Optimierung zur Verbesserung der Performance Ihres Hostings. Klicken Sie [hier](https://www.ovhcloud.com/de/web-hosting/php-fpm-optimierung.xml) für mehr Informationen zu PHP-FPM.
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

