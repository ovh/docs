---
title: CMS - ręczna instalacja modułu Joomla
excerpt: Jak ręcznie zainstalować moduł Joomla?
id: '1978'
slug: cms_-_reczna_instalacja_modulu_joomla
section: CMS
---


## Część 1: przygotowanie instalacji

## Niezbędne narzędzia
Aby móc zainstalować platformę Joomla! na hostingu www, skorzystaj z programu FTP takiego jak FileZilla (program darmowy).

## Dane niezbędne do instalacji
Sprawdź, czy posiadasz identyfikator klienta (nic-handle) i hasło, aby móc się zalogować do panelu klienta.


- Musisz posiadać dane do logowania do FTP, aby zalogować się do hostingu.
Zapoznaj się z przewodnikiem na temat odzyskania danych do FTP:[]({legacy}1374)

- Musisz również posiadać dane do bazy danych SQL, dzięki którym będziesz mógł się połączyć z bazą danych.
Zapoznaj się z przewodnikiem na temat odzyskania danych do SQL:[]({legacy}1374)


![](images/img_3141.jpg){.thumbnail}


## Część 2: pobranie plików źródłowych

- Przejdź na stronę producenta modułu [Joomla!](http://www.joomla.pl/).

Na stronie tej znajduje się link pozwalający na pobranie najnowszej stabilnej wersji modułu.


Pobrane pliki są spakowane. Należy je rozpakować na swoim komputerze. W Internecie odnajdziesz pomoc na ten temat.

![](images/img_3142.jpg){.thumbnail}


## Część 3: umieszczenie plików na FTP

## Rozpakowywanie plików
Otwórz katalog, w którym umieściłeś spakowane pliki w postaci katalogu. 

Kliknij prawym przyciskiem na ten katalog i wybierz "Extract to".

Wskaż lokalizację, w której chcesz rozpakować pliki. 

W Internecie dostępne są liczne przewodniki związane z tą operacją. Skorzystaj z nich, jeśli na tym etapie napotkasz problem. 

Katalog docelowy będzie nosił nazwę "Joomla".

![](images/img_3143.jpg){.thumbnail}

## Logowanie na hosting www przez FTP
Aby umieścić pliki modułu Joomla! na hostingu, należy najpierw zalogować się na ten hosting. 

Udostępniamy przewodnik na temat połączenia FTP w ofercie hostingu www:
[]({legacy}1374)

![](images/img_3144.jpg){.thumbnail}

## Transfer plików przez FTP
Postępuj zgodnie z opisanymi poniżej etapami, aby umieścić pliki na serwerze FTP.

## Etap 1
Po zalogowaniu do programu FileZilla:

W części "Adres lokalny", która zawiera listę plików znajdujących się na Twoim komputerze, otówrz rozpakowany katalog o nazwie "Joomla", w którym znajdują się pliki modułu.

W części "Serwer zdalny", która odnosi się do hostingu www OVH, otwórz katalog "www". W tym katalogu zostaną umieszczone wszystkie pliki modułu. 

Jeśli taki katalog nie istnieje, możesz go utworzyć.

Pliki muszą zostać obowiązkowo umieszczone w katalogu "www". W przeciwnym razie procedura instalacji nie będzie dostępna z poziomu nazwy domeny.

![](images/img_3145.jpg){.thumbnail}

## Etap 2
Po otwarciu tych katalogów:

W części "Adres lokalny" odnajdziesz wszystkie pliki niezbędne do instalacji modułu CMS Joomla!.

Aby zaznaczyć wszystkie pliki, skorzystaj z połączenia klawiszy CTRL+A.

Następnie skorzystaj z funkcji przeciągnij i upuść do części "Serwer zdalny" do katalogu "www".

Możliwe, że katalog "www" nie jest pusty. Nie trzeba usuwać plików z tego katalogu. Powrócimy do tego tematu w dalszej części tego przewodnika.

![](images/img_3146.jpg){.thumbnail}

## Etap 3
Trwa przenoszenie plików.

Poczekaj, aż wszystkie pliki zostaną umieszczone na zdalnym serwerze FTP. Operacja ta może zająć kilka minut. 

Po przeniesieniu plików, upewnij się, że wszystkie pliki i katalogi zostały poprawnie przeniesione. 

Ta operacja kończy część poświęconą umieszczaniu plików na FTP.

![](images/img_3147.jpg){.thumbnail}


## Część 4: połączenie z bazą danych

- Przed kontynuowaniem instalacji wyczyść cache swojej przeglądarki internetowej, aby uniknąć ewentualnych błędów. 


Aby połączyć bazę danych z modułem Joomla!, należy przejść przez etapy instalacji modułu.

## Etap 1
Wpisz w przeglądarce nazwę swojej domeny. Uruchomi się asystent instalacji.

W pierwszej kolejności należy podać dane konfiguracyjne modułu Joomla!: 

Wybierz język: Wybierz język instalacji modułu Joomla!.

Nazwa witryny: Zdefiniuj nazwę strony (może to mieć wpływ na pozycjonowanie).

Opis witryny: Wpisz opis strony (może to mieć wpływ na pozycjonowanie).

Witryna wyłączona: Pozwala na zablokowanie dostępu do strony. 

E-mail administratora: Wpisz prawidłowy adres e-mail. 

Nazwa administratora: Wpisz nazwę używaną do do logowania do panelu administracyjnego. 

Hasło administratora: Zdefiniuj hasło dostępu do części administracyjnej strony.

Powtórz hasło administratora: Wpisz ponownie hasło.

Kliknij na "Dalej", aby przejść do kolejnego etapu.

![](images/img_3148.jpg){.thumbnail}

## Etap 2
Wpisz dane dotyczące bazy danych:

Typ bazy danych: Wybierz typ bazy MySQL.

Nazwa serwera bazy danych: Wpisz nazwę serwera bazy danych wskazaną w e-mailu instalacyjnym i w panelu klienta. 

Nazwa użytkownika: Wpisz nazwę bazy danych, wskazaną w e-mailu instalacyjnym.

Hasło: Zostało wysłane w e-mailu po utworzeniu bazy danych. Możliwe, że je zmieniłeś. 

Nazwa bazy danych: Wybrana podczas zakładania bazy danych w panelu klienta.

Przedrostek dla tabel bazy danych: Opcja użyteczna w przypadku chęci zainstalowania kilku modułów Joomla! na jednej bazie danych. W takim przypadku należy wpisać inny prefiks dla każdej instalacji. 

Przetwarzanie starej bazy danych: Jeśli w bazie danych znajdują się tabele, te które mają taki sam prefiks jak wskazny podczas instalacji, zmienią nazwę i będą mieć prefiks "bak_".

Kliknij na "Dalej", aby kontynuować.

![](images/img_3149.jpg){.thumbnail}


## Zakończenie

## Zakończenie instalacji
Aby dokończyć instalowanie modułu Joomla, kontynuuj etapy instalacji.

## Etap 1
Pojawi się przypomnienie wybranych parametrów.

Zostaniesz zapytany o dwie informacje:


- Typ strony

- E-mail z konfiguracją


Wskaż, czy chcesz otrzymać na e-mail dane instalacyjne, takie jak hasło do części administracyjnej zdefiniowane wcześniej. 

Kliknij na "Instaluj", aby kontynuować.

![](images/img_3150.jpg){.thumbnail}

## Etap 2
Instalacja może potrwać kilka minut.

![](images/img_3151.jpg){.thumbnail}

## Etap 3
Ze względów bezpieczeństwa Joomla! zaleca usunięcie katalogu instalacyjnego. 

Kliknij na "Usuń folder instalacyjny".

![](images/img_3152.jpg){.thumbnail}

## Etap  4
Pojawi się komunikat z potwierdzeniem usunięcia katalogu. 

Możesz teraz się zalogować do części administracyjnej modułu b]Joomla!. Wprowadź dane do logowania w oknie, które się pojawi.

![](images/img_3153.jpg){.thumbnail}

## Część administracyjna modułu Joomla!
Tak wygląda panel administracyjny modułu Joomla!.

![](images/img_3154.jpg){.thumbnail}


## Użyteczne informacje
Pomoc OVH nie będzie w stanie zapewnić Ci wsparcia w zakresie konfiguracji modułu Joomla!.
Udostępniamy przewodnik na ten temat: []({legacy}2053).

Zachęcamy do korzystania z forum rozwiązania Joomla!.


- Oto link do [forum](http://forum.joomla.pl/) tego modułu.



## Klasyczny błąd: strona w budowie
Umieściłeś pliki na FTP, ale nadal wyświetla się informacja "strona w budowie".

Po zainstalowaniu hostingu, OVH umieszcza na nim stronę tymczasową.

Jeśli umieścisz pliki w katalogu "www" i nie usuniesz treści umieszczonych przez OVH, pojawi się ten problem. 

Aby to poprawić, usuń plik "index.html" umieszczony przez OVH lub zmień jego nazwę.

Zmień nazwę tego pliku. Będziesz mógł później aktywować ten plik jako tymczasową stronę główną.

Inna użyteczna informacja: pliki strony muszą zostać umieszczone w katalogu "www", aby były brane pod uwagę.

![](images/img_3155.jpg){.thumbnail}

## Klasyczny błąd: wersja PHP
Chodzi o błąd dotyczący wersji PHP serwera. 

Przyczyna jest prosta: najnowsza wersja PHP nie została włączona.

Udostępniamy przewodnik na temat zmiany wersji PHP na hostingu www:[Zmiana wersji PHP na hostingu]({legacy}1207)

![](images/img_3156.jpg){.thumbnail}

## Klasyczny błąd: Magic Quotes
Chodzi o nieprawidłowo zdefiniowaną zmienną, która przeszkadza w zainstalowaniu modułu Joomla!.

Zmienna Magic Quotes musi być ustawiona na Off i na 0 w Twoim pliku konfiguracyjnym. 

W nowej ofercie 2014, jeśli PHP-FPM jest włączone, zmienna Magic Quotes jest domyślnie wyłączona. W starszych ofertach hostingu www, możesz wyłączyć tę zmienną w pliku .htaccess.

Udostępniamy przewodnik dotyczący zmiany zmiennych PHP na hostingu www 2014:
[Zmiana wersji PHP na hostingu www]({legacy}1207)

Udostępniamy również przewodnik dotyczący zmiany zmiennych PHP na starszym hostingu www:[Zmiana zmiennych PHP na starych hostingach OVH](http://pomoc.ovh.pl/KonfiguracjaPhp)

![](images/img_3157.jpg){.thumbnail}

