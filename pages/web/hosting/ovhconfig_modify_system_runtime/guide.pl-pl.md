---
title: Zmiana środowiska uruchomieniowego dla hostingu www
excerpt: Zmiana środowiska uruchomieniowego dla hostingu www
id: '2149'
slug: zmiana_srodowiska_uruchomieniowego_dla_hostingu_www
section: PHP
---


## Jak zmienić środowisko uruchomieniowe?

## W panelu klienta
Wybierz swój hosting i kliknij na "Zmień konfigurację".

![](images/img_4127.jpg){.thumbnail}
Następnie należy zmienić aktualną konfigurację.

![](images/img_4128.jpg){.thumbnail}
Wystarczy wybrać z listy jedno ze środowisk uruchomieniowych opisanych poniżej.

![](images/img_4129.jpg){.thumbnail}

## W pliku .ovhconfig
Aktualizację wykonuje się w pliku .ovhconfig w katalogu głównym hostingu.
Zmiany można wykonać w panelu klienta lub bezpośrednio w pliku .ovhconfig.

W tym przewodniku znajdują się informacje na temat pliku .ovhconfig:
[]({legacy}1207)


## Różne środowiska uruchomieniowe

## Środowisko "legacy"
Jest to dawne środowisko proponowane na hostingach www. Wcześniej tylko taka konfiguracja była dostępna.


- Środowisko to jest nadal utrzymywane. Zaleca się przejście na środowisko "stable", aby móc korzystać automatycznie z najnowszych stabilnych aktualizacji. Środowisko "legacy" może być użyteczne dla starszych stron używających starych wersji PHP lub oprogramowania, które nie jest już wspierane.


Należy dodać taką linię w pliku .ovhconfig*:


```
container.image=legacy
```



## Środowisko "stable"
To środowisko pozwala na automatyczne korzystanie z  najnowszych stabilnych aktualizacji.

Należy dodać taką linię w pliku .ovhconfig*:


```
container.image=stable
```



## Środowisko "jessie.i386"
To środowisko pozwala na korzystanie z Debian Jessie jako z bazy oprogramowania. 


- Aktualnie ta wersja jest proponowana, jeśli wybierasz środowisko uruchomieniowe "stable".


Należy dodać taką linię w pliku .ovhconfig*:


```
container.image=jessie.i386
```


Wybranie jessie.i386 zamiast środowiska stable nie jest zalecane, ale pozwala na upewnienie się, że gdy środowisko "stable" zmieni obraz, aktualizacja nie uszkodzi strony. Taka sytuacja pojawia się tylko, gdy strona używa oprogramowania innego niż skrypty php.

## Środowisko "testing"
To środowisko pozwala na wcześniejsze korzystanie z nowych patchy, obrazów, nowych technologii, ale bez gwarancji. 

Należy dodać taką linię w pliku .ovhconfig*:


```
container.image=testing
```


* Chodzi o plik .ovhconfig znajdujący się w katalogu głównym Twojego hostingu www "/".


## Różnice między obrazami
|Środowiska|legacy|stable|testing|jessie.i386|
|---|---|---|---|
|Środowiska|legacy|stable|testing|jessie.i386|
|Obraz|legacy|jessie.i386|jessie.i386|jessie.i386|
|Minimalna wersja PHP|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|
|Rozszerzenie php imagick||x|x|x|
|Rozszerzenie php memcache|x|x|x|x|
|Rozszerzenie php memcached||x|x|x|
|Rozszerzenie php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|
|Rozszerzenie mysqlnd (tylko w utf-8)||x|x|x|
|Rozszerzenie redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 et 3.4|2.7 et 3.4|2.7 et 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|


** Aktywacja PHP-FPM jest niezbędna: []({legacy}1175)


## Czy zmiana środowiska uruchomieniowego dotyczy całego hostingu?
Zmiana środowiska uruchomieniowego ma wpływ na cały hosting.
Nie można mieć dwóch różnych środowisk uruchomieniowych jednocześnie.


## W jakiej ofercie hostingu można zmienić środowisko uruchomieniowe?
Zmiana środowiska uruchomieniowego jest możliwa w ramach każdej oferty hostingu www.


## Czy sesje PHP są zachowywane podczas zmiany środowiska uruchomieniowego?
Zmiana środowiska uruchomieniowego automatycznie resetuje sesje PHP.

