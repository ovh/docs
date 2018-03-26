---
title: 'Hosting www: umieszczenie strony w Internecie'
description: Przewodnik na temat umieszczania strony www w Internecie
slug: hosting_www_umieszczenie_strony_w_internecie
section: Pierwsze kroki
---


## Informacje ogólne
Strona internetowa działa i wyświetla się prawidłowo, jeśli jest umieszczona w odpowiednim katalogu. 
Pliki strony internetowej należy umieścić w katalogu "www" na hostingu.
Aby przenieść pliki, należy skorzystać z programu obsługującego protokół transferu plików (File Transfert Protocole).
My korzystamy z darmowego programu [FileZilla](http://www.filezilla.pl).


## Dane FTP

### E-mail dotyczący instalacji hostingu
Po zainstalowaniu hostingu www OVH otrzymasz e-mail z informacjami na temat hostingu. 
E-mail ten zawiera między innymi dane do logowania FTP. 
E-mail ten wygląda jak poniżej:


```
/* Przykład oferty Perso zamówionej dla domeny "twoja-domena.tld" */

[OVH-perso] Hosting Perso dla domeny twoja-domena.tld został zainstalowany
```


Treść:


```
[...]
DOSTĘP FTP
-------------

Dane te umożliwiają skopiowanie zawartości strony na serwer i umieszczenie jej w katalogu "www" za pomocą programu FTP.

Serwer ftp: ftp.twoja-domena.tld lub ftp.cluster0XX.ovh.net
Login lub użytkownik: loginftp
Hasło: mDpFtP

[...]
```


W e-mailu znajduje się login i hasło niezbędne do logowania. 

Hasło można zmienić w panelu klienta. Login jest niezmienny.


### W panelu klienta
Po zalogowaniu do panelu klienta wybierz domenę przypisaną do hostingu i kliknij na "FTP". 
Kliknij na ikonkę koła zębatego i wybierz opcję "Zmień hasło".
Interfejs pozwoli Ci na zmianę hasła do FTP. 
Login jest widoczny w polu "Login".
Wpisz nowe hasło, potwierdź je i kliknij na "Zatwierdź". Hasło musi zawierać od 8 do 12 znaków alfanumerycznych. 

Nowe hasło zostanie wzięte pod uwagę w ciągu kilku minut.


### Program FileZilla

Przewodnik na temat korzystania z programu FileZilla:[]({legacy}1380)

Elementy, którymi musisz dysponować:

- pliki strony internetowej
- plik z kopią bazy danych (jeśli to konieczne)

Dane do FTP:

- host: ftp.twoja-domena.tld lub ftp.cluster0XX.ovh.net lub newftp.cluster0XX.ovh.net
- login: login FTP
- hasło: hasło do ftp (sprawdź poprzednie paragrafy)
- port: 21 (w przypadku połączenia przez SSH: 22 - od oferty Pro)



![](images/img_1858.jpg){.thumbnail}


## Dane FTP

### Przez panel klienta
W panelu klienta można automatycznie przywrócić kopie zapasową FTP.

W panelu klienta wybierz nazwę domeny.

Przejdź do zakładki "FTP" i wybierz "Przywróć kopię zapasową".

![](images/img_2690.jpg){.thumbnail}
Możesz wybrać datę kopii zapasowej.

Uwaga: przywrócone dane zastąpią aktualne dane znajdujące się na hostingu.

Kliknij na "Zatwierdź", aby zatwierdzić operację. Przywracanie plików może trwać kilka godzin.


- W tym przypadku przywracana jest cała kopia FTP.



### Konfiguracja programu FileZilla
Skorzystaj z przewodnika na ten temat:[]({legacy}1380)

## Baza danych

### Informacje ogólne
Baza danych pozwala na przechowywanie danych związanych ze stroną internetową lub z aplikacjami. 

Baza danych pozwala na przechowywanie różnych typów danych, treści strony, adresów url stron, informacji o użytkownikach. 

Na hostingach www OVH dostępne są różne silniki baz danych: MySQL, PostgreSQL.


### Zakładanie bazy danych
Baza danych nie jest automatycznie tworzona podczas instalowania hostingu.
Nie otrzymasz więc w e-mailu informacji na temat bazy danych.
Najpierw należy utworzyć bazę danych.
Zaloguj się do panelu klienta i wybierz swój hosting z menu Hosting.

W sekcji "Baza danych" wybierz "Stwórz bazę danych".

![](images/img_2743.jpg){.thumbnail}
Wybierz silnik bazy danych: "Mysql lub PostgreSQL".

Wybierz rodzaj bazy danych i kliknij na "Dalej".

Zostaniesz poproszony o wpisanie nazwy użytkownika i hasła.

Otrzymasz e-mail z danymi do logowania dla bazy danych.

![](images/img_2694.jpg){.thumbnail}


### Dane do logowania do bazy SQL

- Uwaga: Baza danych nie jest tworzona automatycznie podczas instalacji hostingu.


Po założeniu bazy danych w panelu klienta otrzymasz e-mail z danymi do logowania.
E-mail ten jest również dostępny w panelu klienta. Po zalogowaniu kliknij na Moje konto i na Otrzymane e-maile.

![](images/img_2747.jpg){.thumbnail}
Otrzymany e-mail wygląda tak:


```
[MySQL] Baza MySQL nazwa_bazy
```


Treść:


```
[...]

Nowa baza MySQL została zainstalowana na naszym serwerze.

Oto dane techniczne:
-----------------------------

MySQL:
Serwer : mysql51-66.pro
Użytkownik: nazwa_bazy
Nazwa bazy: nazwa_bazy
Hasło: ************

[...]
```


Możesz zmienić hasło do bazy danych w panelu klienta. 


- Uwaga: zmiana hasła do bazy danych może spowodować przerwę w działaniu strony www lub usług korzystających z tej bazy danych.


Jeśli chcesz zmienić hasło do bazy danych zaloguj się do panelu klienta, wybierz domenę i kliknij na ikonkę "SQL" ->  koło zębate -> "Zmień hasło".

W tej sekcji będziesz miał możliwość zaktualizowania hasła do bazy danych.

Zaktualizuj plik konfiguracyjny swojej strony tak, aby łączył się on z bazą danych za pomocą nowego hasła.


### Logowanie do interfejsu PhpMyAdmin
Przejdź na stronę [interfejsu PhpMyAdmin](https://phpmyadmin.ovh.net/).

Wypełnij wymagane pola:


- Serwer: użytkownik.mysql.db (nazwa użytkownika znajduje się w e-mailu otrzymanym po założeniu bazy danych).

- Użytkownik: nazwa użytkownika znajduje się w e-mailu otrzymanym po założeniu bazy danych
- Hasło: hasło do bazy danych

- Wersja: możesz zalogować się do aktualnej bazy danych lub do kopii bazy sprzed 1 lub 7 dni. 


Wpisz parametry i kliknij na "Wykonaj", aby się zalogować.

![](images/img_1960.jpg){.thumbnail}

- W przypadku baz danych MYSQL4 prosimy o korzystanie z linka podanego w dolnej część interfejsu.




### Eksportowanie
Jak wyeksportować bazę danych? Jakie są sposoby wykonania kopii zapasowej bazy danych?

Skorzystaj z przewodnika na temat eksportu bazy danych:[]({legacy}1394)

![](images/img_1932.jpg){.thumbnail}


### Importowanie
Jak zaimportować kopię zapasową bazy danych MySQL? 

Skorzystaj z przewodnika na temat importowania bazy danych MySql:[]({legacy}1393)

![](images/img_1933.jpg){.thumbnail}


### Popraw - Optymalizuj - Analizuj
Możesz naprawiać, optymalizować i analizować tabele bazy danych. 

Połącz się z bazą danych z poziomu url="https://phpmyadmin.ovh.net/"]interfejsu PhpMyAdmin[/url].

Następnie wybierz tabelę, dla której chcesz wykonać jedna z tych operacji.

Kliknij na "Operacje".

![](images/img_1961.jpg){.thumbnail}


### Prywatny serwer SQL
Chcesz wiedzieć, jak używać Prywatnego Serwera SQL? Jak importować i eksportować dane?

Skorzystaj z tego przewodnika:[Przewodnik dotyczący korzystania z Prywatnego Serwera SQL](http://pomoc.ovh.pl/SzybkiWstepDoPrywatnegoSerweraSql)

![](images/img_1866.jpg){.thumbnail}


## Przewodnik dotyczący instalacji
Chcesz szybko założyć stronę internetową i nie posiadasz technicznej wiedzy na temat tworzenia stron www?

Skorzystaj z przewodnika na temat instalowania modułów za 1 kliknięciem w OVH:[]({legacy}1402)

![](images/img_1930.jpg){.thumbnail}


### WordPress - nowa instalacja

WordPress to system zarządzania treścią (CMS), który pozwala na tworzenie i proste zarządzanie stroną www lub blogiem. 

WordPress to darmowy moduł możliwy do personalizacji za pomocą licznych motywów i rozszerzeń. 


- Blog & Strona

Skorzystaj z przewodnika na temat ręcznej instalacji modułu WordPress :[]({legacy}1375)


![](images/img_1873.jpg){.thumbnail}


### Joomla - nowa instalacja

Joonla to system zarządzania treścią (CMS). Jest to darmowy moduł możliwy do personalizacji za pomocą licznych motywów i rozszerzeń. 

CMS ten pozwala na proste zarządzanie dynamiczną stroną internetową.


- Strona www

Skorzystaj z przewodnika na temat ręcznej instalacji modułu Joomla :[]({legacy}1375)


![](images/img_1874.jpg){.thumbnail}


### PrestaShop - nowa instalacja

PrestaShop to aplikacja www open source pozwalająca na założenie sklepu internetowego. 


- Sklep internetowy

Skorzystaj z przewodnika na temat ręcznej instalacji modułu PrestaShop :[]({legacy}1375)


![](images/img_1862.jpg){.thumbnail}


## Plik .ovhconfig
Chcesz zmienić wersję PHP na hostingu www? Chcesz włączyć phpfpm?

Skorzystaj z przewodnika dotyczącego konfiguracji pliku .ovhconfig:


- []({legacy}1175)

- []({legacy}1207)



![](images/img_1867.jpg){.thumbnail}


## Biblioteki dostępne na hostingu www
Informacja na temat dostępnych bibliotek:

|Biblioteka|Dostępność|
|---|---|
|ffmepg|nie aktywna|
|GD|aktywna|
|imagemagik|aktywna|
|zend (opcache)|aktywna|
|PDO|aktywna|
|Zip - Gzip|aktywna|


![](images/img_1867.jpg){.thumbnail}
Uwaga: w przypadku korzystania z PHP-FPM, poniższe opcje są wyłączone (ze względów bezpieczeństwa): 


- register_globals
- magic_quotes_gpc




## Optymalizacja wydajności strony www
Chcesz sprawdzić, dlaczego Twoja strona internetowa działa wolno? A może chcesz zoptymalizować jej wydajność?

Skorzystaj z przewodnika dotyczącego diagnozowania spowolnień na stronie www i optymalizowania wydajności strony:[]({legacy}1396)

![](images/img_1865.jpg){.thumbnail}

