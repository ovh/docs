---
title: Die PHP-Optimierung eines Webhostings aktivieren
excerpt: In dieser Hilfe wird beschrieben, wie Sie PHP-FPM für Ihr Webhosting aktivieren können, um die Antwortzeiten von PHP zu verbessern
slug: die_php-optimierung_beim_ovh_webhosting_aktivieren
section: PHP
order: 03
---

 
## Was ist PHP-FPM?
Wir haben PHP-FPM an unsere Web-Infrastruktur angepasst, damit Sie es nutzen können, um die Antwortzeiten von PHP zu verbessern.

PHP-FPM wurde mit Opcode-Caching kompiliert, was es erlaubt, die Festplattenaufrufe zu minimieren und die Verarbeitung Ihres PHP-Codes zu beschleunigen.

Dadurch haben wir bei unseren Labortests im Vergleich zu dem alten Mechanismus eine bis zu siebenfache Steigerung der Performance beobachten können.

## In Ihrem Kundencenter
In dieser Anleitung erfahren Sie, wie Sie PHP-FPM aktivieren und die PHP-Version mithilfe der .ovhconfig Datei definieren. Noch einfacher geht das über Ihr Kundencenter - wie, das erfahren Sie in folgender Anleitung: []({legacy}1999)

Achtung: Wenn Sie PHP-FPM verwenden, sind folgende Optionen aus Sicherheitsgründen deaktiviert:


```
register_globals
magic_quotes_gpc
```



Für magic_quotes_gpc:


- Ohne PHP-FPM:


PHP 5.4: magic_quotes_gpc deaktiviert


- Mit PHP-FPM:


PHP 5.4: magic_quotes_gpc deaktiviert
PHP 5.5: magic_quotes_gpc deaktiviert

## Achtung
Wir empfehlen Ihnen, stets die aktuellsten PHP-Versionen zu verwenden, da die alten Versionen von den Herausgebern nicht mehr gepflegt werden und daher Sicherheitslücken aufweisen können.


## Wie aktiviere ich PHP-FPM?
Legen Sie die .ovhconfig Datei via FTP im Root-Verzeichnis Ihrer Festplatte ab.

ACHTUNG: Die .ovhconfig Datei existiert bei den 2014 Webhosting-Paketen defaultmäßig. Wenn Sie ein älteres Angebot nutzen, müssen Sie die Datei selbst erstellen und im Root-Verzeichnis Ihrer Festplatte ablegen.
Sie wird bei den älteren Angeboten oder bei einem Angebotswechsel nicht automatisch hinzugefügt, weil in Abhängigkeit von der verwendeten PHP-Version manche Einstellungen nicht kompatibel sein könnten.

NB: Die .ovhconfig Datei kann nur im Root-Verzeichnis oder in einem Verzeichnis der obersten Ebene abgelegt werden. Auf demselben Hosting können niemals mehrere Dateien mit verschiedenen PHP-Versionen verwendet werden (die einzige Ausnahme hiervon bilden [url ="https://www.ovh.de/g1332.hosting_multi-domain_setup_guide"]korrekt konfigurierte Multi-Domains[/url]).

Diese .ovhconfig Datei sollte folgenden Code enthalten:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


Sollte die Aktivierung von PHP-FPM nicht erfolgreich abgeschlossen werden, wird die alte PHP Engine als Ausweichlösung aktiviert.


## Welche PHP-Versionen sind verfügbar?
Sie können folgende PHP-Versionen verwenden:

- PHP 7.0 
- PHP 5.6  (Default-Version)
- PHP 5.5  (bald veraltet, Verwendung nicht empfohlen)
- PHP 5.4  (veraltet)
- PHP 5.3  (veraltet)

ionCube ist ebenfalls verfügbar.

Achtung: Sobald die .ovhconfig Datei hinterlegt wurde, wird die in app.engine.version festgelegte PHP-Version verwendet. Einträge in der .htaccess wie zum Beispiel "SetEnv PHP_VER ..." werden dann ignoriert.



## Ich habe meine .ovhconfig Datei erstellt und erhalte nun die Fehlermeldung "Not Implemented"
Dies bedeutet, dass die in Ihrer .ovhconfig angegebene Engine oder Version nicht existiert.
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


## Ist IonCube mit PHP-FPM verfügbar?
Ja, IonCube ist derzeit mit folgenden Versionen verfügbar:

- 5.6
- 5.5
- 5.4


Sie müssen den IonCube Encoder verwenden, um Ihre PHP-Skripte zu kodieren. Dann funktionieren Ihre Skripte auf Ihrem Webhosting. Weitere Informationen finden Sie in den [IonCube FAQs](http://www.ioncube.com/faq.php).


## Wie kann ich PHP-FPM deaktivieren?
Dazu genügt es, folgenden Eintrag in der .ovhconfig Datei einzufügen:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Details zur .ovhconfig Datei
Hier sehen Sie die Details der Konfigurationsdatei: 


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
; php optiones .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback to previous system
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
; you can override it changing expiration explicitly in your .htaccess
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



