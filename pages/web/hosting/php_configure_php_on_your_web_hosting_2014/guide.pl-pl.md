---
title: Konfiguracja PHP na hostingu www OVH 2014
excerpt: Przewodnik ten opisuje konfigurację PHP na hostingu www w OVH.
id: '1207'
slug: konfiguracja_php_na_hostingu_www_ovh_2014
section: PHP
---


## Jak wybrać wersję PHP?

## W panelu klienta
W tym przewodniku znajdują się informacje na temat aktywacji PHP FPM i zdefiniowania wersji PHP w pliku .ovhconfig. Czynności te można wykonać w panelu klienta: []({legacy}1999)
Aby ręcznie skonfigurować PHP w pliku .ovhconfig, należy umieścić plik ".ovhconfig" w katalogu głównym przestrzeni dyskowej, przez FTP. 

Na przykład aby korzystać z PHP 5.6, plik ".ovhconfig" powinien zawierać taki kod:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```




## Jakie wersje PHP są dostępne?
Możesz używać następujących wersji PHP:

- PHP 7.0
- PHP 5.6 (domyślna wersja)
- PHP 5.5  (ta wersja wkrótce będzie przestarzała, nie jest zalecana)
- PHP 5.4  (przestarzała)
- PHP 5.3 (przestarzała)



Niższe wersje nie są już utrzymywane przez producenta i stopniowo będziemy je wycofywać. Będziemy kontynuować aktualizacje w zależności od pojawiania się nowych wersji PHP i wycofywania obsługi starych wersji. Zaleca się regularne aktualizowanie stron. Możesz monitorować plany i status tych operacji na stronie z opisem wykonywanych prac.

Uwaga: po umieszczeniu pliku ".ovhconfig" używana wersja PHP to wersja zdefiniowana przez app.engine.version. Wytyczne zapisane w pliku .htaccess takie jak SetEnv PHP_VER ... są ignorowane.


## Utworzyłem plik .ovhconfig i pojawił się błąd "Not Implemented".
Oznacza to, że silnik lub wersja określona w pliku ".ovhconfig" nie istnieje. 
Sprawdź error.log strony www, aby uzyskać więcej informacji na temat błędu.


## Co oznacza dyrektywa environment?
Pozwala ona na określenie funkcji cache dla plików statycznych oraz na zdefiniowanie zachowania błędów PHP.

W trybie development:

- brak zastosowania funkcji cache
- logi PHP pojawiają się na stronie (display_errors=On)


W trybie production: (opcja domyślna)

- pliki statyczne takie jak obrazy, filmy, pliki audio mają większą ważność, co maksymalizuje umieszczenie w pamięci cache plików w przeglądarce

-logi PHP nie pojawiają się na stronie (display_errors=Off)


## Co oznacza dyrektywa http.firewall?
Dyrektywa ta pozwala na włączenie firewalla typu mod_security. W tym celu umieść: security
http.firewall jest domyślnie ustawiony na none


## Zmiana środowiska uruchomieniowego za pomocą dyrektywy container.image
Hosting www OVH pozwala na modyfikację środowiska uruchomieniowego, na którym działa strona www. 
Dzięki temu można korzystać ze stabilnej konfiguracji w zakresie długoterminowym lub z najnowszych aktualizacji dla oprogramowania dostarczanego przez OVH.

W tym celu możesz dodac poniższą linię:


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


Dyrektywa ta jest stosowana dla całego hostingu www i można ją dodać tylko w pliku .ovhconfig znajdującym się w katalogu głównym hostingu.

Jesli masz kilka plików .ovhconfig w różnych katalogach na tym samym hostingu, dyrektywa "container.image" może zostać zdefiniowana tylko w katalogu głównym hostingu*.

Opis poszczególnych środowisk uruchomieniowych znajduje się w tym przewodniku:
[]({legacy}2149)

* W tym przypadku możesz zdefiniować jedynie dyrektywę "container.image" w pliku .ovhconfig w katalogu głównym. Pozostałe dyrektywy będą skonfigurowane w każdym z podkatalogów.


## Szczegółowe informacje dotyczące pliku .ovhconfig
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




## Jakie wersje PHP są dostępne?
Jeśli Twoja strona korzysta z modułu CMS (na przykład WordPress, Joomla, PrestaShop, itp.), użyteczne informacje znajdziesz w dokumentacji na oficjalnej stronie modułu lub w interfejsie administracyjnym modułu. 
Jeśli CMS, z którego korzystasz jest nadal utrzymywany przez producenta i jeśli wersja modułu jest zaktualizowana, nie powinno być problemów z obsługą najnowszych wersji PHP. Większość modułów CMS posiada narzędzie do aktualizacji. Niektóre moduły same zarządzają tym aspektem, jak na przykład WordPress od wersji 3.7 od końca 2013 roku. 

Jeśli korzystasz z własnego rozwiązania, należy określić dostosowane do niego wersje PHP.

Poniżej znajduje się lista zmian niekompatybilnych między wersjami PHP:

> z PHP 4 na PHP 5 : http://www.php.net/manual/en/migration5.incompatible.php
> z PHP 5.1 na PHP 5.2 : http://www.php.net/manual/en/migration52.incompatible.php
> z PHP 5.2 na PHP 5.3 : http://www.php.net/manual/en/migration53.incompatible.php
> z PHP 5.3 na PHP 5.4 : http://www.php.net/manual/en/migration54.incompatible.php
> z PHP 5.4 na PHP 5.5 : http://www.php.net/manual/en/migration55.incompatible.php
> z PHP 5.5 na PHP 5.6 : http://www.php.net/manual/en/migration56.incompatible.php
> z PHP 5.6 na PHP 7.0 : http://php.net/manual/en/migration70.deprecated.php


## Jak wybrać wersję PHP?
Po określeniu wersji PHP skorzystaj z tego przewodnika, aby dokonać zmiany:
[]({legacy}1999)


## Gdzie umieścić plik .ovhconfig?

## Dysponujesz hostingiem www z jedną stroną www.
W większości przypadków na hostingu www znajduje się jedna strona www. 

Przypominamy, że można edytować i wygenerować plik .ovhconfig bezpośrednio w panelu klienta. Udostępniamy przewodnik na ten temat:
[]({legacy}1999)

Plik .ovhconfig musi zostać umieszczony w katalogu głównym hostingu, czyli w pierwszym katalogu ("/").


- Podkatalogi będą korzystać z ustawień tego pliku.



![](images/img_3764.jpg){.thumbnail}

## Przypisałeś do hostingu kilka domen, które nie wymagają różnej konfiguracji.
Skorzystaj z informacji znajdujących się powyżej. 


- Wszystkie przypisane domeny będą korzystać z pliku .ovhconfig obecnego w katalogu głównym hostingu.



## Przypisałeś do hostingu kilka domen, które wymagają różnej konfiguracji.
Można zdefiniować inną wersję PHP dla każdej przypisanej domeny. W tym celu należy umieścić plik .ovhconfig w każdym katalogu docelowym, do którego jest przypisana domena. 

Jeśli w katalogu przypisanym do danej domeny nie ma pliku .ovhconfig, katalog ten będzie korzystać z pliku .ovhconfig obecnego w katalogu głównym hostingu.

Nie zaleca się korzystania z różnych środowisk na tym samym hostingu w różnych plikach .ovhconfig. Jest to związane z brakiem kompatybilności między wersjami PHP i środowiskami z powodu pamięci cache. Sugerujemy segmentowanie stron na różnych hostingach, aby uniknąć tego typu problemów.


## Czy można zmienić konfigurację PHP na hostingu www?
Dla hostingu www dostępne są różne konfiguracje. Opis poszczególnych środowisk uruchomieniowych znajduje się w tym przewodniku:
[]({legacy}2149)

