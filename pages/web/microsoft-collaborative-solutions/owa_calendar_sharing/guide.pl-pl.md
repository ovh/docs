---
title: 'Exchange 2016: współdzielenie kalendarza w interfejsie OWA'
excerpt: 'Dowiedz się, jak współdzielić kalendarze w programie Exchange'
slug: exchange_2016_wspoldzielenie_kalendarza_poprzez_webmail_owa
section: 'Outlook Web Application (Aplikacja WWW)'
legacy_guide_number: g1923
---

**Ostatnia aktualizacja: 19-02-2020**

## Wprowadzenie

Ta funkcja programu Exchange umożliwia udzielanie dostępu do Twoich kalendarzy innym osobom.

**Dowiedz się, jak udostępnić kalendarze i pobierać je przy użyciu aplikacji OWA (Outlook Web App).**


## Wymagania początkowe

- skonfigurowane [rozwiązanie OVHcloud Exchange](https://www.ovh.pl/emaile/hosted-exchange/)
- dostęp do konta Exchange (adres e-mail i hasło)


## W praktyce


### Krok 1: wybór kalendarza do udostępnienia

Zaloguj się na konto Exchange przy użyciu interfejsu [OVHcloud webmail](https://www.ovh.pl/mail/). Przejdź do interfejsu „Kalendarz”, klikając symbol „uruchamiania aplikacji” w lewym górnym rogu i wybierając ikonę `Kalendarz`{.action}.

![sharecalendar](images/exchange-calendars-step1.png){.thumbnail}

Po lewej będzie widoczna lista kalendarzy dostępnych na koncie. Kliknij prawym przyciskiem myszy kalendarz do udostępnienia i wybierz z menu kontekstowego pozycję `Uprawnienia do udostępniania`{.action}.

![sharecalendar](images/exchange-calendars-step2.png){.thumbnail}


### Krok 2: zaproszenie i autoryzacja użytkowników kalendarza

W nowym oknie dodaj użytkowników, którym chcesz udostępnić kalendarz. Zacznij wpisywać ich nazwy w celu wyświetlenia propozycji ze swoich kontaktów, wpisz cały adres e-mail lub użyj funkcji wyszukiwania `Wyszukaj w katalogu`{.action}. 

![sharecalendar](images/exchange-calendars-step3.png){.thumbnail}

Poniżej możesz zdefiniować wiersz tematu e-maila, który zostanie wysłany w celu zaakceptowania udostępniania kalendarza.

![sharecalendar](images/exchange-calendars-step4.png){.thumbnail}

Dla każdego użytkownika można określić następujące uprawnienia dostępu:

|Nazwa|Opis|
|---|---|
|Tylko dostępność|Widoczna będzie dostępność, ale bez szczegółów wydarzeń w kalendarzu.|
|Ograniczone informacje|Widoczne będą dostępność, tytuły i lokalizacje wydarzeń.|
|Wszystkie informacje|Widoczne będą wszystkie informacje o wydarzeniu.|
|Redaktor|Możliwość edytowania kalendarza.|
|Pełnomocnik|Możliwość edytowania kalendarza i dalszego jego udostępniania.|

W przypadku kontaktów zewnętrznych będą dostępne tylko trzy pierwsze opcje. Po dodaniu adresatów potwierdź ustawienia, klikając przycisk `Wyślij`{.action}. Zostaną wysłane zaproszenia do udostępniania.


### Krok 3: pobieranie udostępnionego kalendarza

Zaproszenia do udostępniania kalendarza można zaakceptować bezpośrednio z poziomu e-maila z potwierdzeniem, klikając niebieski przycisk `Zaakceptuj`{.action}.

![sharecalendar](images/exchange-calendars-step5.png){.thumbnail}

Udostępniony kalendarz będzie dostępny w interfejsie „Kalendarz” w sekcji „Inne kalendarze” danego konta.

> [!primary]
>
W zasadzie jest możliwe udostępnianie kalendarzy użytkownikom zewnętrznym, ale mogą wystąpić problemy z ich zgodnością w zależności od używanych klientów poczty lub usług WWW. Więcej informacji na ten temat zawiera oficjalna [dokumentacja firmy Microsoft](https://support.microsoft.com/pl-pl/help/10106/how-to-open-a-shared-calendar-from-an-outlook-sharing-invitation).
>


### Zmiana uprawnień do kalendarza

Można zmienić Istniejące uprawnienia do udostępnionych kalendarzy lub nawet odwołać dostęp. Aby to zrobić, przejdź do sekcji „Kalendarz", kliknij dany kalendarz prawym przyciskiem myszy i wybierz pozycję `Uprawnienia...`{.action} z menu kontekstowego. W nowym oknie po prostu usuń użytkowników z listy lub zmień ich uprawnienia dostępu. Potwierdź zmiany, klikając przycisk `Zapisz`{.action}.

![sharecalendar](images/exchange-calendars-step6.png){.thumbnail}


### Korzystanie z kalendarzy w interfejsie OWA

Oto przykład sekcji „Kalendarz” w interfejsie OWA z widocznymi wieloma kalendarzami.

![sharecalendar](images/exchange-calendars-step7.png){.thumbnail}

Kliknięcie kalendarza na liście powoduje jego dodanie do przeglądu widocznego na środku ekranu lub usunięcie z niego. Kalendarze dostępności osób ze swojej organizacji można też dodać przy użyciu pola wyszukiwania. Po dodaniu kalendarza można go oznaczyć jako „ulubiony”, klikając symbol gwiazdki.


## Sprawdź również

[Przewodnik dotyczący korzystania z Outlook Web App (OWA)](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_przewodnik_dotyczacy_korzystania_z_outlook_web_app/)

[Exchange 2016: współdzielenie katalogu w interfejsie OWA](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_wspoldzielenie_katalogu_poprzez_webmail_owa/)

[Tworzenie grup kontaktów](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_20132016_korzystanie_z_grup_wewnetrzne_grupy_dyskusyjne/)


Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.