---
title: CMS - ręczna instalacja modułu PrestaShop
excerpt: Jak ręcznie zainstalować moduł PrestaShop?
slug: cms_-_reczna_instalacja_modulu_prestashop
section: CMS
order: 06
---


## Część 1: przygotowanie instalacji 

## Niezbędne narzędzia
Aby móc zainstalować platformę PrestaShop na hostingu www, skorzystaj z programu FTP takiego jak FileZilla (program darmowy).

## Dane niezbędne do instalacji
Sprawdź, czy posiadasz identyfikator klienta (nic-handle) i hasło, aby móc się zalogować do panelu klienta.


- Musisz posiadać dane do logowania do FTP, aby zalogować się do hostingu.
Zapoznaj się z przewodnikiem na temat odzyskania danych do FTP:[prestashop]({legacy}1374)

- Musisz również posiadać dane do bazy danych SQL, dzięki którym będziesz mógł się połączyć z bazą danych.
Zapoznaj się z przewodnikiem na temat odzyskania danych do SQL:[prestashop]({legacy}1374)


![prestashop](images/3158.png){.thumbnail}


## Część 2: pobranie plików źródłowych

- Przejdź na stronę producenta modułu [PrestaShop](http://www.prestashop.com/).

Na stronie tej znajduje się link pozwalający na pobranie najnowszej stabilnej wersji modułu.


Pobrane pliki są spakowane. Należy je rozpakować na swoim komputerze. W Internecie odnajdziesz pomoc na ten temat.

![prestashop](images/3159.png){.thumbnail}


## Część 3: umieszczenie plików na FTP

## Rozpakowywanie plików
Otwórz katalog, w którym umieściłeś spakowane pliki w postaci katalogu. 

Kliknij prawym przyciskiem na ten katalog i wybierz "Extract to".

Wskaż lokalizację, w której chcesz rozpakować pliki. 

W Internecie dostępne są liczne przewodniki związane z tą operacją. Skorzystaj z nich, jeśli na tym etapie napotkasz problem. 

Katalog docelowy będzie nosił nazwę "prestashop".

![prestashop](images/3160.png){.thumbnail}

## Logowanie na hosting www przez FTP
Aby umieścić pliki modułu PrestaShop na hostingu, należy najpierw zalogować się na ten hosting. 

Udostępniamy przewodnik na temat połączenia FTP w ofercie hostingu www:
[prestashop]({legacy}1374)

![prestashop](images/3161.png){.thumbnail}

## Transfer plików przez FTP
Postępuj zgodnie z opisanymi poniżej etapami, aby umieścić pliki na serwerze FTP.

## Etap 1
Po zalogowaniu do programu FileZilla:

W części "Adres lokalny", która zawiera listę plików znajdujących się na Twoim komputerze, otówrz rozpakowany katalog o nazwie "prestashop", w którym znajdują się pliki modułu.

W części "Serwer zdalny", która odnosi się do hostingu www OVHcloud, otwórz katalog "www". W tym katalogu zostaną umieszczone wszystkie pliki modułu. 

Jeśli taki katalog nie istnieje, możesz go utworzyć.

Pliki muszą zostać obowiązkowo umieszczone w katalogu "www". W przeciwnym razie procedura instalacji nie będzie dostępna z poziomu nazwy domeny.

![prestashop](images/3162.png){.thumbnail}

## Etap 2
Po otwarciu tych katalogów:

W części "Adres lokalny" odnajdziesz wszystkie pliki niezbędne do instalacji modułu CMS PrestaShop.

Aby zaznaczyć wszystkie pliki, skorzystaj z połączenia klawiszy CTRL+A.

Następnie skorzystaj z funkcji przeciągnij i upuść do części "Serwer zdalny" do katalogu "www".

Możliwe, że katalog "www" nie jest pusty. Nie trzeba usuwać plików z tego katalogu. Powrócimy do tego tematu w dalszej części tego przewodnika.

![prestashop](images/3163.png){.thumbnail}

## Etap 3
Trwa przenoszenie plików.

Poczekaj, aż wszystkie pliki zostaną umieszczone na zdalnym serwerze FTP. Operacja ta może zająć kilka minut. 

Po przeniesieniu plików, upewnij się, że wszystkie pliki i katalogi zostały poprawnie przeniesione. 

Ta operacja kończy część poświęconą umieszczaniu plików na FTP.

![prestashop](images/3164.png){.thumbnail}


## Część 4: połączenie z bazą danych

## Etapy instalacji modułu PrestaShop

- Przed kontynuowaniem instalacji wyczyść cache swojej przeglądarki internetowej, aby uniknąć ewentualnych błędów. 


Aby połączyć bazę danych z modułem  PrestaShop, należy przejść przez etapy instalacji modułu.

## Etap 1
W przeglądarce wpisz nazwę swojej domeny. 

Wybierz język "Polski (Polish)" dla instalacji sklepu PrestaShop.

Kliknij na "Następny", aby kontynuować.

![prestashop](images/3165.png){.thumbnail}

## Etap 2
Zaznacz  "Zgadzam się z powyższymi warunkami".

Kliknij na "Następny", aby przejść do kolejnego etapu.

![prestashop](images/3166.png){.thumbnail}

## Etap 3
Zostaniesz poproszony o dodatkowe informacje na temat sklepu. Wypełnij poniższe pola:

Nazwa sklepu: Nazwa sklepu, może mieć wpływ na pozycjonowanie.

Główna działalność: Główna działalność sklepu.

Kraj: Wybierz kraj, w którym działa sklep.

Imię: Imię administratora.

Nazwisko: Nazwisko administratora.

Adres e-mail: Wpisz prawidłowy adres e-mail, aby mieć dostęp do administrowania sklepem.

Hasło: Wpisz hasło dostępowe do administrowania sklepem (minimum 8 znaków). 

Potwierdzenie hasła: Ponownie wpisz hasło.

Zapisz się do newslettera PrestaShop: Zaznacz to pole, jeśli chcesz otrzymywać biuletyny wysyłane przez PrestaShop.

Kliknij na "Następny", aby zatwierdzić te informacje.

![prestashop](images/3167.png){.thumbnail}

## Etap 4
Pobierz dane do połączenia z bazą danych (informacje na ten temat są dostępne na początku tego przewodnika). 

Wpisz informacje dotyczące bazy danych;

Adres serwera bazy danych: Wpisz nazwę serwera bazy danych wskazany w e-mailu instalacyjnym oraz w panelu klienta.

Nazwa bazy danych: Wybrana podczas zakładania w panelu klienta.

Użytkownik bazy danych: Identyczny z nazwą bazy danych.

Hasło bazy danych: Zostało wysłane w e-mailu po założeniu bazy danych. Można je zmienić. 

Prefix tabel: Opcja użyteczna w przypadku instalowania kilku modułów PrestaShop na jednej bazie danych. W tym przypadku należy podać inny prefiks dla każdej instalacji. 

Ważne: Dane do bazy danych nie są wysyłane automatycznie po zainstalowaniu hostingu. Aby je otrzymać, należy założyć bazę danych w panelu klienta.

Po uzupełnieniu tych informacji możesz przetestować połączenie z bazą danych. 

Kliknij na przycisk "Następny", aby zatwierdzić wpisane informacje.


- Etapy te kończą tworzenie powiązania między bazą danych i modułem PrestaShop. Wystarczy dokończyć instalację.



![prestashop](images/3168.png){.thumbnail}


## Zakończenie

## Zakończenie instalacji
Aby dokończyć instalowanie sklepu PrestaShop, kontynuuj etapy instalacji.

## Etap 1
Po zakończeniu instalacji pojawi się nowe okno.

![prestashop](images/3169.png){.thumbnail}

## Etap 2
Instalacja została zakończona!

Możesz teraz się zalogować i rozpocząć pracę ze sklepem klikając na "Zarządzaj sklepem". 


- Uwaga: Ze względów bezpieczeństwa należy ręcznie usunąć katalog 
"install" znajdujący się w katalogu "www".


![prestashop](images/3170.png){.thumbnail}

## Część administracyjna sklepu PrestaShop
Tak wygląda panel administracyjny sklepu PrestaShop.

![prestashop](images/3171.png){.thumbnail}


## Użyteczne informacje
Pomoc OVHcloud nie będzie w stanie zapewnić Ci wsparcia w zakresie konfiguracji sklepu PrestaShop.
Udostępniamy przewodnik na ten temat: [prestashop]({legacy}2053).

Zachęcamy do korzystania z forum rozwiązania PrestaShop.


- Oto link do [forum](http://www.prestashop.com/forums/) tego modułu.



## Klasyczny błąd: strona w budowie
Umieściłeś pliki na FTP, ale nadal wyświetla się informacja "strona w budowie".

Po zainstalowaniu hostingu, OVHcloud umieszcza na nim stronę tymczasową.

Jeśli umieścisz pliki w katalogu "www" i nie usuniesz treści umieszczonych przez OVHcloud, pojawi się ten problem. 

Aby to poprawić, usuń plik "index.html" umieszczony przez OVHcloud lub zmień jego nazwę.

Zmień nazwę tego pliku. Będziesz mógł później aktywować ten plik jako tymczasową stronę główną.

Inna użyteczna informacja: pliki strony muszą zostać umieszczone w katalogu "www", aby były brane pod uwagę.

![prestashop](images/3172.png){.thumbnail}

## Klasyczny błąd: katalog "install" nie został usunięty.

- Uwaga: Ze względów bezpieczeństwa należy ręcznie usunąć katalog 
"install" znajdujący się w katalogu "www".


![prestashop](images/3173.png){.thumbnail}

