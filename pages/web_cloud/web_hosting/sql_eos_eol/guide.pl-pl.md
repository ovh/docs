---
title: "Powiadomienia o zakończeniu sprzedaży/utrzymanie bazy danych SQL"
excerpt: "Powiadomienia o zakończeniu sprzedaży/utrzymanie bazy danych SQL"
updated: 2024-09-06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

Produkty objęte ogłoszeniami o zakończeniu sprzedaży i wycofaniu z eksploatacji to usługi bazy danych SQL Web Hosting dostępne poprzez sieć Web Hosting. Więcej informacji znajdziesz w [Polityka wycofania zarządzanych baz danych](/pages/web_cloud/web_cloud_databases/eol-policy).

|Wersja DBMS|Powiadomienie o zakończeniu cyklu życia|Zakończenie sprzedaży|Zakończenie obsługi|
|---|---|---|---|
|MySQL 5.7|2023-11-16|2024-02-16|2024-05-17|
|MySQL 8.0|Do określenia|Do określenia|Do określenia|

> [!primary]
>
> Usługi bazy danych SQL zawarte w pakietach hostingowych OVHcloud nie mogą być aktualizowane bezpośrednio z poziomu Panelu klienta OVHcloud ani za pośrednictwem bazy danych po zakończeniu cyklu sprzedaży/wygaśnięcia.
>

Jeśli chcesz przewidzieć ten koniec sprzedaży/wygaśnięcia lub wykonać czynności ręcznie, musisz obowiązkowo wykonać następujące czynności:

- Przypadek nr 1: Dysponujesz jedną bazą danych zawartą w cenie Twojego hostingu:
    - Upewnij się, że zawartość bazy danych jest zgodna z nowszym systemem DBMS.
    - [Eksportuj zawartość bazy danych](/pages/web_cloud/web_hosting/sql_database_export).
    - Usuń starą bazę danych.
    - [Utwórz nową bazę danych](/pages/web_cloud/web_hosting/sql_create_database) w nowszej wersji DBMS.
    - [Zaimportuj zawartość starej bazy danych do nowej bazy danych](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
    - Przypisz nową bazę danych do swojej strony www.

- Przypadek nr 2: Masz do swojej dyspozycji kilka baz danych zawartych w ofercie hostingu:
    - Upewnij się, że zawartość bazy danych jest zgodna z nowszym systemem DBMS.
    - Jako środek ostrożności [eksportuj zawartość bazy danych](/pages/web_cloud/web_hosting/sql_database_export).
    - [Utwórz nową bazę danych](/pages/web_cloud/web_hosting/sql_create_database) w nowszej wersji DBMS.
    - [Zduplikuj zawartość starej bazy danych w nowej bazie danych](/pages/web_cloud/web_hosting/copy_database).
    - Przypisz nową bazę danych do swojej strony www.
    - Usuń starą bazę danych.

## Sprawdź również

[Zaloguj się do Panelu klienta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login).

[Tworzenie bazy danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database).

[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export).

[Duplikuj zawartość jednej bazy danych do innej](/pages/web_cloud/web_hosting/copy_database).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).