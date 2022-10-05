---
title: CMS - ręczna instalacja modułu Drupal
excerpt: Jak ręcznie zainstalować moduł Drupal?
slug: cms_-_reczna_instalacja_modulu_drupal
section: CMS
order: 04
---


## Część 1: przygotowanie instalacji  
Niezbędne narzędzia

Aby móc zainstalować platformę Drupal na hostingu www, skorzystaj z programu FTP takiego jak FileZilla (program darmowy).

## Dane niezbędne do instalacji
Sprawdź, czy posiadasz identyfikator klienta (nic-handle) i hasło, aby móc się zalogować do panelu klienta.


- Musisz posiadać dane do logowania do FTP, aby zalogować się do hostingu.

- Musisz również posiadać dane do bazy danych SQL, dzięki którym będziesz mógł się połączyć z bazą danych.
Zapoznaj się z przewodnikiem na temat odzyskania danych do SQL:[]({legacy}1909)



## Część 2: pobranie plików źródłowych

- Przejdź na stronę modułu [Drupal](https://www.drupal.org/).



![drupal](images/3234.png){.thumbnail}
Na stronie tej znajduje się link pozwalający na pobranie najnowszej stabilnej wersji modułu.
W naszym przykładzie jest to wersja 7.41.
Pobrane pliki są spakowane. Należy je rozpakować na swoim komputerze. W Internecie odnajdziesz pomoc na ten temat.


## Część 3: umieszczenie plików na FTP
Rozpakowywanie plików

Otwórz katalog, w którym umieściłeś spakowane pliki w postaci katalogu. 

Kliknij prawym przyciskiem na ten katalog i wybierz "Extract here".

Wskaż lokalizację, w której chcesz rozpakować pliki. 

W Internecie dostępne są liczne przewodniki związane z tą operacją. Skorzystaj z nich, jeśli na tym etapie napotkasz problem. 

Katalog docelowy będzie nosił nazwę "Drupal-xxx".

![drupal](images/3233.png){.thumbnail}
Logowanie na hosting www przez FTP

Aby umieścić pliki modułu Drupal na hostingu, należy najpierw zalogować się na ten hosting. 

Udostępniamy przewodnik na temat połączenia FTP w ofercie hostingu www:
[]({legacy}1374)
Transfer plików przez FTP

Postępuj zgodnie z opisanymi poniżej etapami, aby umieścić pliki na serwerze FTP.

## Etap 1
Po zalogowaniu do programu FileZilla:

W części "Adres lokalny", która zawiera listę plików znajdujących się na Twoim komputerze, otówrz rozpakowany katalog o nazwie "Drupal-xxx", w którym znajdują się pliki modułu.

W części "Serwer zdalny", która odnosi się do hostingu www OVH, otwórz katalog "www". W tym katalogu zostaną umieszczone wszystkie pliki modułu.
Jeśli taki katalog nie istnieje, możesz go utworzyć.
Pliki muszą zostać obowiązkowo umieszczone w katalogu "www". W przeciwnym razie procedura instalacji nie będzie dostępna z poziomu nazwy domeny.

## Etap 2
Po otwarciu tych katalogów:

W części "Adres lokalny" odnajdziesz wszystkie pliki niezbędne do instalacji modułu CMS Drupal.

Aby zaznaczyć wszystkie pliki, skorzystaj z połączenia klawiszy CTRL+A.

Następnie skorzystaj z funkcji przeciągnij i upuść do części "Serwer zdalny" do katalogu "www".

![drupal](images/3199.png){.thumbnail}
Możliwe, że katalog "www" nie jest pusty. Nie trzeba usuwać plików z tego katalogu. Powrócimy do tego tematu w dalszej części tego przewodnika.

## Etap 3
Trwa przenoszenie plików.

Poczekaj, aż wszystkie pliki zostaną umieszczone na zdalnym serwerze FTP. Operacja ta może zająć kilka minut. 

Po przeniesieniu plików, upewnij się, że wszystkie pliki i katalogi zostały poprawnie przeniesione. 

Ta operacja kończy część poświęconą umieszczaniu plików na FTP.

![drupal](images/3200.png){.thumbnail}


## Etap 1 - Instalacja modułu Drupal
Otwórz przeglądarkę internetową i wpisz nazwę swojej domeny. 

Pojawi się taka strona.

Zaznacz "Standard
Install with commonly used features pre-configured." i kliknij na "Save and continue", aby kontynuować.

![drupal](images/3219.png){.thumbnail}


## Etap 2 - Wybór języka
Wybierz język instalacji "Polski" i kliknij na "Save and continue".

![drupal](images/3218.png){.thumbnail}


## Etap 3 - Połączenie z bazą danych
Przygotuj dane do logowania do bazy danych (pomoc w tym zakresie jest dostępna tutaj: []({legacy}1374)).

Wpisz dane dotyczące bazy danych:

Zaznacz "MySQL, MariaDB lub równoważne".


- Nazwa bazy danych: Wybrana w panelu klienta podczas zakładania bazy danych.

- Nazwa użytkownika bazy: Taka sama jak nazwa bazy danych.

- Hasło użytkownika bazy: Zostało wysłane e-mailem po utworzeniu bazy danych - możliwe, że już je zmieniłeś. 

- Kliknij na "ZAAWANSOWANE USTAWIENIA".



![drupal](images/3202.png){.thumbnail}

- Host bazy danych: Wpisz nazwę serwera bazy danych wskazaną w e-mailu instalacyjnym i w panelu klienta. Nazwa ta kończy się zazwyczaj ".mysql.db".

- Port bazy danych: Pozostaw puste.

- Prefiks tabeli: Opcja użyteczna w przypadku chęci zainstalowania kilku modułów Drupal na jednej bazie danych. W takim przypadku należy wpisać inny prefiks dla każdej instalacji. W przypadku wątpliwości, pozostaw puste.



![drupal](images/3203.png){.thumbnail}
Ważne:  Dane do bazy danych nie są wysyłane automatycznie po zainstalowaniu hostingu. Aby je otrzymać, należy założyć bazę danych w panelu klienta.
Kliknij na "Zachowaj i kontynuuj", aby kontynuować.


## Etap 4 - Postępy
Jeśli wpisałeś prawidłowo dane dotyczące bazy danych, rozpocznie się instalacja. W przeciwnym razie należy wpisać prawidłowe dane.


- Poczekaj na zakończenie instalacji.



![drupal](images/3190.png){.thumbnail}


## Etap 5 - Konfiguracja aspektów administracyjnych
Wpisz ustawienia administracyjne modułu CMS Drupal.


- Nazwa witryny: Wskaż nazwę domeny.

- Adres e-mail witryny: Wskaż adres e-mail, który będzie wykorzystywany do wysyłania wiadomości do Twoich abonentów. 

- Nazwa użytkownika: Wskaż nazwę konta administratora Twojej strony. W naszym przykładzie jest to "admin".

- Adres e-mail: Wskaż adres e-mail przypisany do konta administratora.

- Hasło: Wskaż hasło do konta administratora.

- Potwierdzenie hasła: Wpisz to samo hasło.



![drupal](images/3206.png){.thumbnail}

- Domyślny kraj: Wybierz kraj/język dla strony.
- Domyślna sterfa czasowa: Wybierz strefę czasową dla strony.

- Powiadomienia o nowych wersjach: Zalecamy włączenie tych opcji, w celu zwiększenia stabilności i bezpieczeństwa strony.

- Kliknij na "Zachowaj i kontynuuj".



![drupal](images/3207.png){.thumbnail}


## Etap 6 - Zakończenie
CMS Drupal został zainstalowany. Kliknij na "Odwiedź swoją nową stronę".

![drupal](images/3208.png){.thumbnail}
Teraz wystarczy korzystać z modułu Drupal i zbudować stronę.

![drupal](images/3209.png){.thumbnail}


## Wsparcie dla modułu Drupal
Odwiedź forum modułu Drupal.

- Oto strona [pomocy dla modułu ](https://www.drupal.org/support).


Pomoc OVH nie będzie w stanie zapewnić Ci wsparcia w zakresie konfiguracji modułu Drupal.
Udostępniamy przewodnik na ten temat: []({legacy}2053).


## Klasyczne błędy

- Błąd "OVH - strona w budowie"


Umieściłeś pliki na FTP, ale nadal wyświetla się informacja "strona w budowie".

Po zainstalowaniu hostingu, OVH umieszcza na nim stronę tymczasową.

Jeśli umieścisz pliki w katalogu "www" i nie usuniesz treści umieszczonych przez OVH, pojawi się ten problem. 

Aby to poprawić, usuń plik "index.html" umieszczony przez OVH lub zmień jego nazwę.

Zmień nazwę tego pliku. Będziesz mógł później aktywować ten plik jako tymczasową stronę główną.

Inna użyteczna informacja: pliki strony muszą zostać umieszczone w katalogu "www", aby były brane pod uwagę.

![drupal](images/3217.png){.thumbnail}

- Błąd dotyczący wersji PHP


Chodzi o błąd dotyczący wersji PHP serwera. 

Przyczyna jest prosta: najnowsza wersja PHP nie została włączona.

Udostępniamy przewodnik na temat zmiany wersji PHP na hostingu www:[Zmiana wersji PHP na hostingu]({legacy}1207)

