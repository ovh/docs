---
title: Zarzadzanie baza danych na hostingu www
slug: zarzadzanie-baza-danych-na-hostingu-www
section: Bazy danych
hidden: true
---


## Informacje ogolne
Baza danych (w skrócie "BD") to zorganizowany zbiór dużych ilości danych pozwalający na ich dodawanie, aktualizowanie i wyszukiwanie.

Liczba baz danych oraz ich maksymalny rozmiar zależy od oferty hostingu www. Nasza oferta jest dostępna  [tutaj](https://www.ovhcloud.com/pl/web-hosting/){.external}.

OVH nie pozwala na łączenie się z zewnątrz z bazą danych utworzoną na hostingu www. Można się z nią łączyć tylko z hostingu www OVH.

OVH proponuje 2 typy baz danych: MySQL lub PostgreSQL.


## Zarzadzanie baza danych na hostingu www

### Tworzenie bazy danych
Zaloguj się do [panelu klienta](https://www.ovh.com/manager/web){.external} za pomocą identyfikatora klienta i hasła.


![hosting](images/3035.png){.thumbnail}

W naszym przykładzie korzystamy z hostingu www z kilkoma bazami danych. Utworzymy bazę danych MySQL. Wybierz swój hosting w sekcji "Hosting" i kliknij na zakładkę Baza danych.


![hosting](images/3854.png){.thumbnail}

- Kliknij na Stwórz bazę danych .
- Możesz również zamówić bazę danych , jeśli nie posiadasz już dostępnych baz danych.


![hosting](images/3855.png){.thumbnail}

Na tym poziomie będziesz mógł określić:

- Silnik bazy danych: MySQL lub PostgreSQL
- Wersję bazy danych
- Typ bazy danych (wybór możliwy od oferty Pro)


![hosting](images/3040.png){.thumbnail}

Po wypełnieniu formularza kliknij na "Dalej". Na tym poziomie należy wpisać:

- Nazwę użytkownika ( maksymalnie 6 znaków alfanumerycznych )
- Hasło (musi on spełniać warunki podane w formularzu)


![hosting](images/3041.png){.thumbnail}

Kliknij na "Dalej", aby przejść do ostatniego etapu.

Pojawi się podsumowanie dotyczące bazy danych. Jeśli wszystko się zgadza, możesz "zatwierdzić".


![hosting](images/3042.png){.thumbnail}

Jeśli wszystko przebiegło prawidłowo, pojawi się komunikat z taką informacją. Baza danych powinna działać po kilku minutach. Po jej aktywacji otrzymasz e-mail.


![hosting](images/3043.png){.thumbnail}

Baza danych została utworzona.


## Opcje zarzadzania dostepne w panelu klienta OVH
Po utworzeniu bazy danych, w panelu klienta pojawią się różne funkcje pozwalające na zarządzanie nią.


![hosting](images/3847.png){.thumbnail}


### Zmiana hasa
Opcja ta pozwala na zmianę hasła do bazy danych w panelu klienta.

- Uwaga: Zmiana hasła do bazy danych może spowodować przerwę w działaniu strony lub usług korzystających z bazy danych .

Jeśli zmieniłeś hasło a Twoja strona korzysta z bazy danych, należy  **obowiązkowo**  zaktualizować hasło w pliku konfiguracyjnym na serwerze FTP.


### Utworzenie kopii zapasowej (dump)
Można utworzyć kopię zapasową bazy danych bezpośrednio w panelu klienta.

Można pobrać kopię zapasową z różnych dat:

- Teraz: dane aktualnie przechowywane w bazie danych
- Wczoraj: dane sprzed 24 godzin
- Ostatni tydzień: dane sprzed 7 dni

Ta funkcjonalność pozwala na odzyskanie danych w przypadku usunięcia lub nadpisania danych.


![hosting](images/3045.png){.thumbnail}

Po dokonaniu wyboru kliknij na "Dalej" i zatwierdź podsumowanie. Po kilku minutach otrzymasz e-mail z kopią zapasową. E-mail zostanie wysłany na adres e-mail przypisany do konta klienta.


### Przywrocenie kopii zapasowej (dump)
Jeśli chcesz przywrócić daneh na podstawie kopii zapasowej za pomocą metody opisanej powyżej, możesz to zrobic tutaj.

W menu przywracania z prawej strony kopii zapasowej możesz wybrać opcję:

- Pobrania kopii zapasowej na swój komputer/blue]
- Przywrócenia bazy danych na podstawie tej kopii zapasowej


![hosting](images/3848.png){.thumbnail}


### Usuniecie bazy danych
Możesz usunąć bazę danych z poziomu panelu klienta.

Operacja ta jest nieodwracalna i spowoduje utratę wszystkich danych zawartych w bazie danych.

Okno pop-up przypomni Ci, że usunięcie jest definitywne. Niezbędne będzie potwierdzenie.


![hosting](images/3046.png){.thumbnail}


### Przeliczenie rozmiaru
**Informacje na temat limitów przestrzeni** :

Informacje te są odświeżane automatycznie co  **24 godziny** .

Możesz również uruchomić ręczne odświeżanie w panelu klienta.

Jeśli przekroczysz zalecaną przestrzeń dyskową, Twoje uprawnienia zostaną ograniczone i będziesz mieć jedynie dostęp do odczytu.

Aby uniknąć przekroczenia limitu przestrzeni, zalecamy wyczyszczenie bazy danych i przeliczenie rozmiaru przestrzeni, tak aby baza danych zajmowała mniej miejsca niż zalecana przestrzeń. Baza danych zostanie automatycznie odblokowana w ciągu kilku minut.


### Dostep do  phpMyAdmin
Należy wpisać tylko hasło do bazy danych. Pozostałe informacje zostaną wprowadzone automatycznie.

- Hasło: hasło do bazy danych

Wersja: Możesz zalogować się do aktualnej bazy danych lub do kopii zapasowej sprzed 1 lub 7 dni.


![hosting](images/3047.png){.thumbnail}



> [!success]
>
> https://phpmyadmin.ovh.net/
> 


## Najczestsze bedy

### Can't connect to local MySQL
Jest to błąd połączenia z serwerem MySQL. Komunikat informuje, że skrypt próbuje połączyć się lokalnie z MySQL ale połączenie nie udaje się. MySQL w OVH (na hostingu www) nie działa lokalnie lecz w sieci. W konfiguracji swoich skryptów umieściłeś prawdopodobnie wpis localhost, co nie jest poprawne. Jako nazwę serwera w pliku konfiguracyjnym strony należy wpisać "nazwa_bazy_danych.mysql.db".


### Too Many Connection
Jeśli próbując się połączyć z MySQL, otrzymujesz błąd " **Too many connections** ", oznacza to, że z serwerem mysql łączy się już maksymalna liczba klientów. W tym przypadku osiągnąłeś maksymalną liczbę jednoczesnych połączeń (ograniczoną do 30). Sprawdź w swojej konfiguracji, czy wszystkie połączenia SQL są poprawnie zamykane po każdym zapytaniu.


## Inne operacje

### Importowanie zrzutu (kopii zapasowej)
Jak zaimportować kopię zapasową bazy danych MySQL?

Przewodnik na temat importowania bazy danych MySQL jest dostępny [tutaj](https://www.ovh.pl/g1393.import-bazy-danych-mysql){.external}.


### Eksportowanie bazy danych
Jak wyeksportować bazę danych?

Przewodnik na temat eksportowania bazy danych MySQL jest dostępny [tutaj](https://www.ovh.pl/g1394.eksport-bazy-danych){.external}.
