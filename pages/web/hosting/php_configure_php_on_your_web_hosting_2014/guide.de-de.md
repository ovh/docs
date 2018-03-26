---
title: Konfiguration von PHP für ein OVH Webhosting 2014
excerpt: In dieser Hilfe wird die PHP-Konfiguration Ihres OVH Webhostings beschrieben.
id: '1207'
slug: konfiguration_von_php_fur_ein_ovh_webhosting_2014
legacy_guide_number: g1207
---


## Wie kann ich eine PHP-Version auswählen?

## In Ihrem Kundencenter
In dieser Anleitung wird beschrieben, wie Sie mit Hilfe der .ovhconfig Datei PHP FPM aktivieren und die verwendete PHP Version festlegen können. Sie können diese Einstellungen wenn gewünscht auch direkt über Ihr Kundencenter durchführen, die Vorgehensweise dazu finden Sie in folgender Hilfe: []({legacy}1999)
Dazu genügt es, per FTP die .ovhconfig Datei im Wurzelverzeichnis Ihres FTP-Speicherplatzes abzulegen.

Damit zum Beispiel PHP 5.6 verwendet wird, muss die .ovhconfig Datei folgende Einträge enthalten:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```




## Welche PHP-Versionen sind verfügbar?
Sie können folgende PHP-Versionen verwenden:


- PHP 7.0
- PHP 5.6 (Standardversion)
- PHP 5.5 (wird in Kürze eingestellt, sollte nicht mehr verwendet werden)
- PHP 5.4 (veraltet, sollte nicht mehr verwendet werden)
- PHP 5.3 (veraltet, sollte nicht mehr verwendet werden)


Hinweis: Ältere Versionen werden vom Herausgeber nicht mehr weiter gepflegt, und wir werden deren Unterstützung nach und nach einstellen. Wir werden die von unserem System unterstützten PHP Versionen weiterhin abhängig vom Start neuer Versionen und der Einstellung des Supports alter Versionen anpassen. Wir empfehlen deshalb, die verfügbaren PHP Versionen regelmäßig zu überprüfen und bei Bedarf anzupassen.

Achtung: sobald die .ovhconfig Datei hinterlegt wurde, wird die in app.engine.version festgelegte PHP Version verwendet. Einträge in der .htaccess wie zum Beispiel "SetEnv PHP_VER ..." werden dann ignoriert.


## Ich habe meine .ovhconfig Datei erstellt und erhalte eine "Not Implemented" Fehlermeldung?
Dies bedeutet, dass die in Ihrer .ovhconfig Datei angegebene Engine oder Version nicht existiert.
Prüfen Sie die error.log Datei Ihrer Seite, um mehr Informationen zu dem Fehler zu erhalten.


## Wozu dient der Parameter "environment"?
Mit diesem Parameter wird der Cache für statische Dateien sowie das Verhalten bei PHP Fehlern festgelegt.

Im development (Entwicklungs-) Modus:

- Es wird kein Cache verwendet
- Die PHP Logs erscheinen auf Ihrer Seite (display_errors=On)


Im production (Produktiv-) Modus - dies ist die standardmäßig verwendete Option:

- Die statischen Dateien wie wie zum Beispiel Bild-, Ton- oder Videodateien sind mit einem längeren Ablaufdatum ("expiration") versehen, was die Aufnahme in den Cache der Browser der Besucher maximiert.
- Die PHP Logs erscheinen nicht auf Ihrer Seite (display_errors=Off)




## Wozu dient der Parameter "http.firewall"?
Mit diesem Parameter kann eine Anwendungsfirewall vom Typ mod_security aktiviert werden, tragen Sie dazu security ein. 
Die Standardeinstellung von http.firewall ist none.


## Die Laufzeitumgebung ändern dank container.image
Bei den OVH Webhostings können Sie die Laufzeitumgebung Ihrer Webseite ändern.
So können Sie sich entweder für eine langfristig stabile Konfiguration entscheiden oder immer die neuesten Software-Updates mitnehmen.

Fügen Sie hierfür folgende Zeile hinzu:


```
; __container.image__
;
; values:
; stable: current recommended and up-to-date environment
; legacy: former stable environment, only receiving security updates, being feature-freezed
; testing: "experimental" environment dedicated to functionalities beta testing before being merged into stable
;
container.image=stable
```


Diese Richtlinie wird auf Ihr gesamtes Webhosting angewendet und muss sich in der .ovhconfig-Datei im Wurzelverzeichnis Ihres Webhostings befinden. 

Falls Sie auf einem einzigen Hosting mehrere .ovhconfig-Dateien in verschiedenen Verzeichnissen verwenden, muss die Richtlinie "container.image" immer im Wurzelverzeichnis definiert werden*.

Eine Beschreibung der verschiedenen Laufzeitumgebungen finden Sie in folgender Anleitung:
[]({legacy}2149)

* Definieren Sie in diesem Fall nur die Richtlinie "container.image" in der .ovhconfig-Datei im Wurzelverzeichnis. Die übrigen Richtlinien werden in den jeweiligen Unterordnern definiert.


## Details zur .ovhconfig Datei
Hier ein detaillierter Überblick über den Inhalt der Konfigurationsdatei:


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php options .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback or previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly or in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```




## Welche PHP-Versionen sind verfügbar?
Wenn Ihre Seite ein CMS System (z.B. WordPress, Joomla, PrestaShop...) verwendet, finden Sie die notwendigen Informationen in der Dokumentation auf der offiziellen Webseite des Projekts oder im Admininstrationsbereich des jeweiligen Systems.
Wenn das von Ihnen genutzte CMS System weiterhin vom Herausgeber gepflegt wird und Sie dessen neueste Version nutzen, sollte es keine Probleme bei der Verwendung der aktuellsten PHP Versionen geben. Die Mehrheit der CMS Systeme verfügt über ein Update-Tool, das Ihnen eine einfache Umstellung erlaubt. Einige CMS verwalten dies auch vollständig selbst, zum Beispiel WordPress seit der Ende 2013 veröffentlichten Version 3.7.

Wenn Ihre Seite eine Eigenentwicklung oder eine personalisierte Lösung verwendet, müssen Sie zuerst überprüfen, welche PHP Version(en) damit kompatibel sind.

Eine Liste der inkompatiblen Änderungen zwischen den verschiedenen PHP Versionen finden Sie unter folgenden Links:

> Von PHP 4 auf PHP 5: http://php.net/manual/de/migration5.incompatible.php
> Von PHP 5.1 auf PHP 5.2: http://www.php.net/manual/de/migration52.incompatible.php
> Von PHP 5.2 auf PHP 5.3: http://www.php.net/manual/de/migration53.incompatible.php
> Von PHP 5.3 auf PHP 5.4: http://www.php.net/manual/de/migration54.incompatible.php
> Von PHP 5.4 auf PHP 5.5: http://www.php.net/manual/de/migration55.incompatible.php
> Von PHP 5.5 auf PHP 5.6: http://www.php.net/manual/de/migration56.incompatible.php
> Von PHP 5.6 auf PHP 7.0: http://www.php.net/manual/de/migration70.deprecated.php


## Wie kann ich eine PHP-Version auswählen?
Wenn Sie wissen, welche PHP-Version Sie verwenden sollten, können Sie in der folgenden Anleitung nachlesen, wie die Änderung funktioniert:
[]({legacy}1999)


## Wo muss ich meine .ovhconfig Datei ablegen?

## Sie verfügen über ein Webhosting mit einer einzigen Webseite:
Im einfachsten Fall betreiben Sie nur eine einzige Webseite auf ihrem Webhosting.

Die .ovhconfig Datei können Sie direkt von Ihrem Kundencenter aus editieren und konfigurieren. Mehr dazu erfahren Sie in der Hilfe: []({legacy}1999)

Wenn Sie die .ovhconfig Datei dennoch manuell platzieren wollen, muss sie unbedingt im Wurzelverzeichnis ("/") Ihres Hostings abgelegt werden.


- Die untergeordneten Verzeichnisse verwenden dann ebenfalls die Einstellungen dieser Datei.



![](images/img_3764.jpg){.thumbnail}

## Sie haben mehrere "Assoziierte Domains" eingetragen, die keine abweichende Konfiguration erfordern:
In diesem Fall ist die Vorgehensweise die Gleiche wie im vorherigen Absatz.


- Alle assoziierten Domains verwenden dann die Einstellungen der .ovhconfig Datei im Wurzelverzeichnis Ihres Webhostings.



## Sie haben mehrere "assoziierte Domains" definiert, die unterschiedliche Konfigurationen benötigen.
Sie können für jede assoziierte Domain eine andere PHP Version definieren. Hierfür müssen Sie in jedes der Zielverzeichnisse ihrer assoziierten Domains eine .ovhconfig Datei platzieren.

Wenn im Zielverzeichnis einer assoziierten Domain keine .ovhconfig Datei vorhanden ist, verwendet die Domain die .ovhconfig Datei im Wurzelverzeichnis Ihres Hostings.

Wir raten aber dringend davon ab, auf einem einzigen Hosting in den verschiedenen .ovhconfig Dateien unterschiedliche Umgebungen einzusetzen. Wegen des Cache kann es hierbei zu Inkompatibilitäten zwischen PHP Versionen und Umgebungen kommen. Wir empfehlen Ihnen, Ihre Seiten in einem solchen Fall auf unterschiedlichen Hostings zu verteilen, um solche Probleme zu vermeiden.


## Kann ich die PHP-Konfiguration meines Webhostings ändern?
Für Ihr Webhosting haben Sie die Wahl zwischen verschiedenen Konfigurationen. Eine Beschreibung der verschiedenen Ausführungsumgebungen finden Sie in folgender Anleitung: []({legacy}2149)

