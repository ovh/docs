---
title: Aktywacja optymalizacji PHP na hostingu OVH
excerpt: Ten przewodnik pomoże Ci w aktywacji funkcji PHP-FPM na hostingu www OVH, w celu ulepszenia czasu odpowiedzi PHP.
slug: aktywacja_optymalizacji_php_na_hostingu_ovh
section: PHP
order: 03
---
 

## Czym jest PHP-FPM?
Dostosowaliśmy PHP-FPM do naszej infrastruktury www, abyś mógł korzystać z tej funkcji do przyspieszenia odpowiedzi PHP. 

PHP-FPM jest skompilowane za pomocą opcode-caching, co pozwala na zminimalizowanie odwołań do dysku i na przetwarzanie kodu PHP. 

Otrzymujemy w ten sposób wydajność aż do 7 razy szybszą w naszych testowych laboratoriach w porównaniu ze starym mechanizmem.

## W panelu klienta
W tym przewodniku znajdują się informacje na temat aktywacji PHP FPM i zdefiniowania wersji PHP w pliku .ovhconfig. Czynności te można wykonać w panelu klienta: []({legacy}1999)

Uwaga: w przypadku PHP-FPM, ze względów bezpieczeństwa, poniższe opcje są wyłączone (niezalecane przez PHP):


```
register_globals
magic_quotes_gpc
```



Jeśli chodzi o magic_quote_gpc:


- Bez PHP-FPM 


PHP 5.4: magic_quotes_gpc wyłączone


- Z PHP-FPM:


PHP 5.4 : magic_quotes_gpc wyłączone
PHP 5.5 : magic_quotes_gpc wyłączone

## Uwaga
Zaleca się używanie najnowszych wersji PHP (5.5 lub 5.6), ponieważ starsze wersje nie są już aktualizowane przez producenta i mogą zawierać luki w bezpieczeństwie.


## Jak włączyć PHP-FPM?
Wystarczy umieścić plik .ovhconfig w katalogu głównym przestrzeni dyskowej, przez FTP. 

UWAGA: Plik .ovhconfig jest domyślnie dostępny od hostingów www 2014. W przypadku wcześniejszych ofert należy utworzyć i umieścić ten plik w katalogu głównym. 
Nie jest on automatycznie dodawany na hostingach z wcześniejszych ofert ani w przypadku zmiany oferty hostingowej, ponieważ niektóre parametry mogą być niekompatybilne w zależności od używanej wersji PHP. 

Plik .ovhconfig może być umieszczony tylko w katalogu głównym lub w katalogu pierwszego poziomu. Nie można używać kilku plików, aby łączyć różne konfiguracje PHP na jednym hostingu (poza[poprawnie skonfigurowaną opcją multi-domena](https://www.ovh.pl/g1332.przypisanie-domeny-lub-subdomeny-do-hostingu-www)).

Plik .ovhconfig powinien zawierać ten kod:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


Jeśli PHP-FPM ulegnie awarii, silnik będzie korzystał ze starego silnika PHP.


## Jakie wersje PHP są dostępne?
Możesz używać wersji PHP:

- PHP 7.0
- PHP 5.6 (domyślna wersja)
- PHP 5.5  (ta wersja wkrótce będzie przestarzała, nie jest zalecana)
- PHP 5.4  (przestarzała)
- PHP 5.3 (przestarzała)

- ionCube jest również dostępny

Uwaga, po umieszczeniu pliku .ovhconfig wersja PHP będzie określana przez app.engine.version. Reguły z pliku .htaccess takie jak SetEnv PHP_VER ... będą ignorowane.



## Utworzyłem plik .ovhconfig i mam błąd "Not Implemented".
Oznacza to, że silnik lub wersja określona w pliku .ovhconfig nie istnieje. 
Możesz sprawdzić error.log strony, aby otrzymać więcej informacji na temat błędu.


## Czym jest dyrektywa environment?
Pozwala ona na określenie pamięci cache plików statycznych oraz zachowania błędów PHP
w trybie development:

- żaden cache nie jest stosowany
- logi PHP pojawiają się na stronie (display_errors=On)


w trybie production: (opcja domyślna)

- pliki statyczne takie jak obrazki, filmy, pliki dźwiękowe wygasają później, co maksymalizuje umieszczenie plików w pamięci cache w przeglądarkach.
- logi PHP nie pojawiają się na stronie (display_errors=Off)




## Czym jest dyrektywa http.firewall?
Ta dyrektywa pozwala na aktywację firewalla typu mod_security. A
by go włączyć, należy umieścić security

http.firewall domyślnie jest ustawiony na none


## Czy IonCube jest dostępny z PHP-FPM?
Tak, IonCube jest dostępny z wersjami

- 5.6
- 5.5
- 5.4


Aby z niego skorzystać, trzeba użyć kodera IonCube do zakodowania skryptów PHP, aby mogły one działać na hostingu www. Więcej informacji znajduje się w [FAQu IonCube](http://www.ioncube.com/faq.php)


## Jak wyłączyć PHP-FPM?
Wystarczy umieścić w pliku .ovhconfig:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Szczegółowe informacje na temat pliku .ovhconfig
Oto szczegółowe informacje na temat pliku konfiguracyjnego:


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



