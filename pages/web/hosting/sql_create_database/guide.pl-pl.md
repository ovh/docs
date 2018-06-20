---
title: 'Tworzenie bazy danych na hostingu'
slug: tworzenie-bazy-danych
excerpt: 'Dowiedz się, jak utworzyć bazę danych na hostingu'
section: 'Bazy danych'
order: 1
---

**Ostatnia aktualizacja dnia 2018-06-20**

## Wprowadzenie

Baza danych (z ang.*database* lub w skrócie „DB”) umożliwia przechowywanie elementów dynamicznych, takich jak komentarze czy artykuły. Bazy danych są obecnie wykorzystywane przez niemal wszystkie systemy zarządzania treścią (*Content Management System* lub CMS), takie jak WordPress czy Joomla!.

**Dowiedz się, jak utworzyć bazę danych na hostingu OVH.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovh.pl/hosting/){.external}
- Możliwość tworzenia baz danych w ramach usługi
- Dostęp do interfejsu zarządzania hostingiem w [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## W praktyce

### Etap 1: zarządzanie bazami danych na hostingu

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz nazwę odpowiedniego hostingu. Teraz przejdź do zakładki `Bazy danych`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich baz danych utworzonych w ramach Twojego pakietu hostingowego.

![zakładanie bazy danych ovh](images/database-creation-step1.png){.thumbnail}

### Etap 2: tworzenie bazy danych

Aby rozpocząć tworzenie nowej bazy danych, masz do dyspozycji możliwości:

- **jeśli jeszcze nie utworzyłeś bazy danych**: kliknij przycisk `Stwórz bazę danych`{.action};

- **jeśli już utworzyłeś bazę danych**: kliknij przycisk `Operacje`{.action} następnie `Stwórz bazę danych`{.action}.

W oknie, które się wyświetli zaznacz odpowiednie informacje, następnie kliknij `Dalej`{.action}.

|Informacja|Opis|  
|---|---|  
|Silnik bazy danych|Wybierz silnik, który będzie używany przez bazę danych. Bazy danych zawarte w usłudze [hostingu OVH](https://www.ovh.pl/hosting/){.external} oferują tylko silnik MySQL.|  
|Wersja bazy danych|Wybierz wersję używaną przez silnik bazy danych.  Upewnij się, czy Twoja strona WWW jest kompatybilna z wybraną wersją. |  
|Typ bazy danych|Wybierz pojemność bazy danych. Pojemność bazy danych jest rozumiana jako przestrzeń przeznaczona do przechowywania danych.|   

Uzupełnij następnie informacje, o które zostaniesz poproszony i kliknij `Dalej`{.action}.

|Informacja|Opis |   
|---|---|   
|Użytkownik|Ustal nazwę użytkownika, która będzie przypisana do Twojej bazy danych.|   
|Hasło|Wybierz hasło dla tego użytkownika i potwierdź je.|   

Sprawdź informacje, które wyświetlają się w podsumowaniu. Jeśli są poprawne, kliknij Dalej, aby rozpocząć proces tworzenia bazy danych. Powtórz tę operację tyle razy, ile będzie to konieczne, aby utworzyć kilka baz danych.

> [!primary]
>
> Przy wyborze nowego hasła zalecamy zastosowanie zwyczajowych zasad bezpieczeństwa. Prosimy również:
>
> - nie używać dwa razy tego samego hasła; 
>
> - wybrać hasło, które nie ma żadnego związku z Twoimi danymi osobistymi (takimi jak nazwisko, imię czy data urodzenia);
>
> - regularnie zmieniać hasła;
>
> - nie zapisywać haseł na kartce ani nie przesyłać ich na Twój adres e-mail;
>
> - nie zapisywać haseł w przeglądarce internetowej, nawet jeśli wyświetli się taka sugestia.
>

![zakładanie bazy danych ovh](images/database-creation-step2.png){.thumbnail}

### Etap 3: korzystanie z bazy danych

Zacznij używać Twojej bazy danych. W tym celu przygotuj dane potrzebne do zalogowania: nazwę użytkownika i wybrane hasło oraz nadaną przez Ciebie nazwę bazy danych i adres serwera. 

Informacje te są niezbędne do powiązania Twojej strony WWW z bazą danych. W zależności od typu używanej strony WWW połączenie to musi zostać przeprowadzone ręcznie lub przez interfejs wygenerowany przez stronę. Ponieważ operacja ta wymaga konfiguracji Twojej strony WWW, a nie samego rozwiązania OVH, w razie wątpliwości zalecamy skontaktowanie się z administratorem strony lub wyspecjalizowanym w tym zakresie webmasterem.

OVH udostępnia aplikację online: phpMyAdmin. Link dostępowy do aplikacji znajdziesz w zakładce `Bazy danych`{.action}. W tym celu kliknij trzy kropki w tabeli po prawej stronie odpowiedniej bazy danych, a następnie kliknij `Dostęp do phpMyAdmin`{.action}. Wprowadź dane dostępowe do bazy danych utworzonej w OVH.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.