---
title: 'Dostęp przez SSH na hostingu'
excerpt: 'Hosting www: SSH na hostingu'
id: '1962'
slug: hosting_www_ssh_na_hostingu
section: 'FTP i SSH'
---

## Czy jest SSH i jak korzystać z tej funkcjonalności?
Z SSH na hostingu www można korzystać od oferty Pro (w przypadku starych ofert od hostingu z gamy plan).

Uwaga: W starych ofertach dostęp jest możliwy tylko za pomocą głównego konta FTP. Oznacza to, że dodatkowi użytkownicy FTP nie mają dostępu przez SSH.

SSH pozwala na logowanie się na hosting i na wykonywanie operacji na plikach (jak przez FTP). 

Aby uzyskać więcej informacji na temat protokołu SSH, [kliknij tutaj](https://pl.wikipedia.org/wiki/Secure_Shell).


## Wymagania

- Opcja SSH jest dostępna na:

Hostingach www od [oferty PRO](https://www.ovh.pl/hosting/hosting-pro.xml).


- Program umożliwiający logowanie się przez SSH

- Otwarty na firewallu lub na routerze port 22




## Włączanie / Wyłączanie SSH dla danego użytkownika
W panelu klienta możesz zarządzać loginami SSH. Wystarczy wybrać hosting z menu po lewej stronie i przejść do zakładki "FTP - SSH".

Nowi użytkownicy FTP mają również dostęp przez SSH.

![](images/img_3945.jpg){.thumbnail}
Możesz wyłączyć dostęp SSH dla wybranego użytkownika klikając na koło zębate z prawej strony loginu i wybierając opcję "Zmień".

Zmiana zostanie wykonana w ciągu kilku minut.

![](images/img_3946.jpg){.thumbnail}


## Linia poleceń
W systemie Linux:

- W KDE: Otwórz główne menu (domyślnie na dole z lewej strony ekranu), w pasku wyszukiwania wpisz "konsole" i kliknij na pierwszy wynik wyszukiwania.

W systemie Mac:
- Kliknij na dysk twardy na pulpicie, wybierz folder aplikacji, następnie folder użytkowy i aplikację "Terminal".

W systemie Windows:


- W systemie Windows nie ma domyślnie zainstalowanego klienta SSH. Należy pobrać taki program. Najpopularniejszym tego typu programem jest Putty. Do pobrania [tutaj](http://www.putty.org/).




## Logowanie do hostingu za pomocą SSH
W systemach Linux i Mac:

- Aby zalogować się na hosting przez SSH, otwórz konsolę i wpisz takie polecenie:
SSH LoginFtp@SerwerFtp


Informacje na temat uzyskania danych do FTP znajdziesz w tym [przewodniku](https://www.ovh.pl/g1909.uslugi_www_zarzadzanie_haslami_i_dostep_do_nich#hasla_przypisane_do_hostingu_www_ovh_logowanie_do_ftp).

![](images/img_3093.jpg){.thumbnail}
W systemie Windows:

- W przypadku systemu Windows zapoznaj się z przewodnikiem na temat [Putty](https://www.ovh.pl/g1964.hosting_www_korzystanie_z_programu_putty_w_systemie_windows).




## Lista najważniejszych poleceń
Wystarczy zastąpić słowo arg nazwą katalogu lub pliku, dla którego chcesz wykonać operację. 

|Polecenie|Tłumaczenie (w języku angielskim)|Wyjaśnienie|
|pwd|print working directory|Wyświetla katalog roboczy|
|cd arg|change directory|Zmienia katalog roboczy; arg odnosi się do nowego katalogu. Polecenie cd bez dodawania arg otwiera katalog home.|
|cd ..|change directory to ..|Zmienia katalog roboczy przechodząc do wyższego poziomu w strukturze katalogów.|
|ls arg|list|Listuje zawartość arg, jeśli jest to katalog. Bez wpisu arg, ls listuje zawartość katalogu roboczego.|
|ll arg|long list|Wyświetla szczegółowe informacje na temat pliku arg.|
|ls -a arg|list all|Wyświetla wszystkie pliki katalogu arg, nawet te rozpoczynające się od .., jeśli jest to katalog. Opcje ls mogą się łączyć: ls -al.|
|chmod droit arg|change droits|Zmienia uprawnienia plików arg, zgodnie z uprawnieniem.|
|mkdir arg|make directory|Tworzy katalog  arg.|
|rmdir arg|remove directory|Usuwa katalog arg, jeśli jest pusty.|
|rm arg|remove|Usuwa plik arg.|
|rm -r arg|remove recursively|Usuwa arg i wszystkie zawarte w nim pliki.|
|mv arg1 arg2|move|Zmienia nazwę lub przenosi arg1 na arg2.|
|touch arg|touch|Tworzy pusty plik o nazwie arg, jeśli taki plik nie istnieje. W przeciwnym razie aktualizuje datę ostatniej modyfikacji na aktualną datę.|




## Uruchomienie skryptu ze specyficzną wersją PHP
Aby wykonywać skrypty z poziomu polecenia SSH i korzystać ze specyficznej wersji PHP, należy użyć określonych poleceń.

|Polecenie|Wersja|
|php.ORIG.4 (cgi)|4.4.9|
|php.ORIG.5_2 (cgi)|5.2.17|
|php.ORIG.5_3 (cgi-fcgi)|5.3.29|
|/usr/local/php5.3/bin/php (cli)|5.3.29|
|php.ORIG.5_4 (cgi-fcgi)|5.4.38|
|/usr/local/php5.4/bin/php (cli)|5.4.38|
|/usr/local/php5.5/bin/php (cli)|5.5.22|
|/usr/local/php5.6/bin/php (cli)|5.6.6|


Przykładowo, aby wykonać skrypt "mojskrypt.php" z PHP w wersji 5.3, należy uruchomić to polecenie:

```
php.ORIG.5_3 mojskrypt.php
```


Przed nazwą skryptu należy wpisać jego lokalizację. Jeśli plik "mojskrypt" znajduje się w katalogu "WWW" i chcesz go wykonać w wersji PHP 5.3, należy uruchomić to polecenie:


```
php.ORIG.5_3 www/mojskrypt.php
lub
php.ORIG.5_3 /www/mojskrypt.php
```




## Informacje na temat naszych kluczy publicznych (do zaakceptowania podczas pierwszego logowania przez SSH)
Podczas pierwszego logowania na serwer będziesz musiał zatwierdzić klucz publiczny.

