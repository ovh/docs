---
title: "Zarządzanie historią strefy DNS"
excerpt: "Dowiedz się, jak sprawdzać, porównywać, pobierać i przywracać kopie zapasowe strefy DNS"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Strefa **D**omain **N**ame **S**ystem (**DNS**) domeny jest jej plikiem konfiguracyjnym. Składa się z informacji technicznych nazywanych *rekordami DNS*. Strefa DNS pełni w pewnym sensie funkcję centrum przekierowań.

Więcej informacji znajdziesz w następujących przewodnikach:

- [Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

Z różnych powodów może zaistnieć potrzeba zastosowania starszej konfiguracji DNS dla Twojej domeny.

Zarządzanie DNS jest teraz łatwiejsze dzięki historii Twoich stref DNS.

**Dowiedz się, jak sprawdzać, porównywać, pobierać i przywracać kopie zapasowe strefy DNS.**

## Wymagania początkowe

- Dostęp do zarządzania daną domeną.

<!-- CP-NAV-START:web-dns-zone -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Strefy DNS](/links/control-panel/web-dns-zone)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Strefy DNS`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-dns-zone -->

## W praktyce

> [!primary]
>
> Kopie zapasowe Twojej strefy DNS podlegają następującym ograniczeniom:
>
> - Przechowujemy maksymalnie 200 kopii zapasowych dla jednej strefy DNS.
> - Gdy kopia zapasowa ma więcej niż 31 dni, jest automatycznie usuwana, z wyjątkiem **5 najnowszych kopii zapasowych**.

**Kliknij wybraną akcję, aby wyświetlić jej zawartość.**

/// details | Wyświetlanie strefy DNS

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wyświetlona tabela przedstawia strefę DNS Twojej domeny. Zawiera ona listę rekordów DNS. Po prawej stronie tabeli znajduje się kilka przycisków umożliwiających wykonywanie operacji w strefie DNS.
>>
>> ![Narzędzie historii DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Kliknij `Wyświetl historię strefy DNS`{.action}.
>>
> **Krok 3**
>>
>> Na nowej stronie wyświetla się tabela z historią kopii zapasowych Twojej strefy DNS, od najnowszej do najstarszej. Na początku tej tabeli znajduje się aktualna wersja Twojej strefy DNS.
>>
>> Aby wyświetlić wybraną strefę DNS, zidentyfikuj odpowiedni wiersz w tabeli, a następnie kliknij ikonę w kolumnie `Wyświetl`{.action}.
>>
>> ![Wyświetlanie strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wyświetlą się dane wybranej strefy DNS.
>>
>> ![Szczegóły strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}
>>
>> Kliknij `Zamknij`{.action}, aby wrócić do strony głównej "Historia strefy DNS".

///

/// details | Pobieranie strefy DNS

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wyświetlona tabela przedstawia strefę DNS Twojej domeny. Zawiera ona listę rekordów DNS. Po prawej stronie tabeli znajduje się kilka przycisków umożliwiających wykonywanie operacji w strefie DNS.
>>
>> ![Narzędzie historii DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Kliknij `Wyświetl historię strefy DNS`{.action}.
>>
> **Krok 3**
>>
>> Na nowej stronie wyświetla się tabela z historią kopii zapasowych Twojej strefy DNS, od najnowszej do najstarszej. Na początku tej tabeli znajduje się aktualna wersja Twojej strefy DNS.
>>
>> Aby pobrać wybraną strefę DNS, zidentyfikuj odpowiedni wiersz w tabeli, a następnie kliknij ikonę w kolumnie `Pobierz`{.action}.
>>
>> ![Pobieranie strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}
>>
>> Strefa DNS zostanie pobrana w formacie .txt.

///

/// details | Przywracanie strefy DNS

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wyświetlona tabela przedstawia strefę DNS Twojej domeny. Zawiera ona listę rekordów DNS. Po prawej stronie tabeli znajduje się kilka przycisków umożliwiających wykonywanie operacji w strefie DNS.
>>
>> ![Narzędzie historii DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Kliknij `Wyświetl historię strefy DNS`{.action}.
>>
> **Krok 3**
>>
>> Na nowej stronie wyświetla się tabela z historią kopii zapasowych Twojej strefy DNS, od najnowszej do najstarszej. Na początku tej tabeli znajduje się aktualna wersja Twojej strefy DNS.
>>
>> Jeśli chcesz zastąpić aktualną strefę DNS starszą wersją, wystarczy ją przywrócić. W tabeli z historią stref DNS zidentyfikuj wiersz odpowiadający strefie DNS, którą chcesz przywrócić (sprawdź datę po lewej stronie wiersza), a następnie kliknij ikonę w kolumnie `Przywróć`{.action}.
>>
>> ![Przywracanie strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}
>>
> **Krok 4**
>>
>> Pojawi się następujące okno.
>>
>> ![Potwierdzenie przywrócenia strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}
>>
>> Sprawdź, czy data wyświetlona w komunikacie odpowiada strefie DNS, którą chcesz przywrócić. Jak wskazuje żółty baner, aktualna strefa DNS (znajdująca się na szczycie listy historii stref DNS) zostanie usunięta i zastąpiona strefą DNS, którą chcesz przywrócić.
>>
>> Kliknij `Przywróć`{.action}, aby potwierdzić przywrócenie, lub `Anuluj`{.action}.

> [!primary]
>
> Modyfikacja lub przywrócenie strefy DNS powoduje opóźnienie propagacji wynoszące od **4** do **24** godzin, zanim zmiana zostanie w pełni uwzględniona w sieci DNS.

///

/// details | Porównywanie dwóch stref DNS

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią nazwę domeny.
>>
>> ![Strefy DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Wyświetlona tabela przedstawia strefę DNS Twojej domeny. Zawiera ona listę rekordów DNS. Po prawej stronie tabeli znajduje się kilka przycisków umożliwiających wykonywanie operacji w strefie DNS.
>>
>> ![Narzędzie historii DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Kliknij `Wyświetl historię strefy DNS`{.action}.
>>
> **Krok 3**
>>
>> Na nowej stronie wyświetla się tabela z historią kopii zapasowych Twojej strefy DNS, od najnowszej do najstarszej. Na początku tej tabeli znajduje się aktualna wersja Twojej strefy DNS.
>>
>> Możesz porównać zawartość dwóch stref DNS. W tabeli z historią strefy DNS zidentyfikuj dwa wiersze odpowiadające dwóm strefom DNS, które chcesz porównać (sprawdź datę po lewej stronie każdego wiersza), a następnie zaznacz je. Aby porównać te dwie wersje strefy DNS, kliknij w lewym górnym rogu `Porównaj wersje`{.action}.
>>
>> ![Porównywanie dwóch stref DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wyświetli się nowa strona z zawartością obu stref DNS. Nad każdą wersją widnieje odpowiednia data. Domyślnie najnowsza wersja strefy DNS znajduje się po lewej stronie, a najstarsza po prawej. Kolorowe oznaczenia pomagają zidentyfikować różnice w zawartości.
>>
>> Po lewej stronie zawartość podświetlona na czerwono została zmodyfikowana lub usunięta w nowszej wersji.
>>
>> Po prawej stronie zawartość podświetlona na zielono została zmodyfikowana lub dodana w porównaniu ze starszą wersją.
>>
>> Możesz również zaktualizować daty wersji, które chcesz porównać, korzystając z dwóch list rozwijanych.
>>
>> ![Szczegóły porównania dwóch stref DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

///

## Sprawdź również

[Wszystko o serwerach DNS](/pages/web_cloud/domains/dns_server_general_information)

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)

[Logowanie do Panelu klienta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Utworzenie strefy DNS w OVHcloud](/pages/web_cloud/domains/dns_zone_create)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
