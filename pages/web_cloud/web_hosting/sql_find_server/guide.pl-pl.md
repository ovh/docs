---
title: "Jak zidentyfikować serwer bazy danych"
excerpt: "Dowiedz się, jak odnaleźć nazwę serwera, na którym znajduje się Twoja współdzielona baza danych, dostępna za pośrednictwem Twojej oferty hostingu"
updated: 2026-02-12
---

## Wprowadzenie

W trakcie korzystania z Twoich usług może się zdarzyć, że będziesz musiał poznać nazwę serwera SQL, na którym znajduje się Twoja baza danych (wliczona w ofertę lub dodatkowo zamówiona za pośrednictwem Twojego [hostingu](/links/web/hosting)).

> [!warning]
>
> Ten przewodnik nie dotyczy baz danych znajdujących się w rozwiązaniu [Web Cloud Databases](/links/web/databases).

**Dowiedz się, jak odnaleźć nazwę serwera, na którym znajduje się Twoja współdzielona baza danych, dostępna za pośrednictwem Twojej oferty hostingu.**

## Wymagania początkowe

- Posiadanie [oferty hostingu OVHcloud](/links/web/hosting).
- Zalogowanie się do [Panelu klienta OVHcloud](/links/manager).
- Użycie bazy danych wliczonej w ofertę lub [zamówionej dodatkowo](/links/web/hosting-options-startsql) za pośrednictwem Twojego hostingu.

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting plans](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

<!-- CP-STEPS-START:find-database-server -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting plans](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Bazy danych`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli zwróć uwagę na kolumnę **Serwer**.
>>
>> ![database-server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> W tej kolumnie znajdziesz nazwę serwera SQL (np. **mysqlXXX.euXXX**), na którym znajduje się Twoja współdzielona baza danych.
>>
>> > [!warning]
>> >
>> > Nie myśl między **Serwer** a **Adres serwera** :
>> >
>> > - **Adres serwera** to część danych logowania specyficznych dla Twojej bazy danych i umożliwia łączenie Twojej strony internetowej z tą bazą.
>> > - **Serwer** to infrastruktura, na której znajduje się Twoja baza danych, a także inne bazy. Nazwa serwera pozwala sprawdzić, czy jest on objęty pracami konserwacyjnymi lub awarią ogłoszoną na naszej stronie [Web Cloud Status](https://web-cloud.status-ovhcloud.com/).
<!-- CP-STEPS-END:find-database-server -->

## Sprawdź również <a name="go-further"></a>

[Rozwiąż najczęstsze błędy związane z bazami danych](/pages/web_cloud/web_hosting/diagnosis_database_errors)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).