---
title: 'Tworzenie baz danych i użytkowników na serwerze baz danych'
excerpt: 'Dowiedz się, jak utworzyć bazę danych na serwerze baz danych'
updated: 2026-03-24
---

## Wprowadzenie

Baza danych (DB) pozwala na przechowywanie elementów dynamicznych, takich jak komentarze czy artykuły. Bazy danych są obecnie wykorzystywane przez niemal wszystkie systemy zarządzania treścią (CMS), takie jak WordPress lub Joomla!.

**Dowiedz się, jak utworzyć bazę danych na serwerze baz danych i przyznać dostęp użytkownikom.**

## Wymagania początkowe

- Posiadanie [instancji Web Cloud Databases](/links/web/databases) (zawartej w ofercie [hostingu www Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

### Tworzenie bazy danych

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Bazy danych`{.action}.
>>
> **Krok 3**
>>
>> Kliknij `Dodaj bazę danych`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Tworzenie schematów PostgreSQL jest obecnie niedostępne na serwerach Web Cloud Databases.
>>
> **Krok 4**
>>
>> Wypełnij pola zgodnie z podanymi kryteriami. Możesz utworzyć użytkownika bezpośrednio, zaznaczając pole **"Utwórz użytkownika"**:
>>
>> - **Nazwa bazy danych** (obowiązkowe): nazwa Twojej przyszłej bazy danych.
>> - **Nazwa użytkownika** (tylko jeśli pole `Utwórz użytkownika` jest zaznaczone): użytkownik, który będzie mógł się zalogować do bazy danych i wykonywać zapytania.
>> - **Uprawnienia** (tylko jeśli pole `Utwórz użytkownika` jest zaznaczone): uprawnienia przypisane użytkownikowi w bazie danych. W przypadku standardowego użycia wybierz `Administrator`{.action}. Uprawnienia można zmienić później.
>> - **Hasło**/**Potwierdź hasło** (tylko jeśli pole `Utwórz użytkownika` jest zaznaczone): wybierz hasło, a następnie je potwierdź.
>>
>> Kliknij `Zatwierdź`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Tworzenie użytkownika

Aby korzystać z serwera baz danych OVHcloud, utwórz użytkowników z odpowiednimi uprawnieniami do łączenia się z bazą danych.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Użytkownicy i uprawnienia`{.action}.
>>
> **Krok 3**
>>
>> Kliknij `Dodaj użytkownika`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wpisz "nazwę użytkownika" i "hasło", a następnie kliknij `Zatwierdź`{.action}.

### Zarządzanie uprawnieniami użytkowników

Aby użytkownik mógł wykonywać operacje na bazie danych, konieczne jest przypisanie mu uprawnień.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Użytkownicy i uprawnienia`{.action}.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie odpowiedniego użytkownika, a następnie `Zarządzaj uprawnieniami`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}
>>
> **Krok 4**
>>
>> W kolumnie po lewej stronie **Baza danych** znajdziesz listę baz danych na Twoim serwerze.
>>
>> Dostępne są 3 typy uprawnień:
>>
>> - `Administrator`: autoryzacja zapytań typu **Select / Insert / Update / Delete / Create / Alter / Drop**.
>> - `Odczyt / Zapis`: autoryzacja zapytań typu **Select / Insert / Update / Delete**.
>> - `Odczyt`: autoryzacja zapytań typu **Select**.
>> - `Żaden`: brak uprawnień do bazy danych.
>>
>> > [!primary]
>> >
>> > Podział uprawnień wymienionych powyżej jest właściwy dla OVHcloud. Użytkownik z uprawnieniami `Administrator` może korzystać z **DDL** (Data Definition Language) i **DML** (Data Manipulation Language), podczas gdy użytkownik z uprawnieniami `Odczyt / Zapis` może korzystać tylko z **DML** (Data Manipulation Language).
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}

### Usuwanie bazy danych

> [!warning]
>
> Przed usunięciem bazy danych na serwerze baz danych nie jest
> przeprowadzana żadna weryfikacja zawartości bazy. Zostanie ona usunięta,
> nawet jeśli zawiera dane. Dlatego zaleca się utworzenie
> kopii zapasowej i pobranie jej przed każdym usunięciem.
>

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Bazy danych`{.action}.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie odpowiedniej bazy danych, a następnie `Usuń bazę`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}

## Sprawdź również

Kontaktuj się z [partnerami OVHcloud](/links/partner), jeśli szukasz zaawansowanych rozwiązań (pozycjonowanie, rozwój, itp.).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
