---
title: "Dodaj rekord DNS typu AAAA dla domeny"
excerpt: "Dowiedz się, jak dodać rekord DNS typu AAAA w strefie DNS zarządzanej przez OVHcloud w przypadku Twojej domeny"
updated: 2026-03-24
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

Czy chcesz, aby Twoja strona WWW była dostępna za pośrednictwem Twojej domeny? W tym celu Twoja domena musi wskazywać na adres IP usługi, w której znajduje się Twoja strona WWW (hosting, serwer dedykowany, VPS, itp.). Skonfiguruj wówczas aktywną strefę DNS Twojej domeny za pomocą rekordu DNS typu AAAA.

**Dowiedz się, jak dodać rekord DNS typu AAAA w strefie DNS zarządzanej przez OVHcloud w przypadku Twojej domeny.**

> [!primary]
>
> Aby zmodyfikować lub usunąć rekord DNS typu AAAA ze strefy DNS OVHcloud, skorzystaj z [tego przewodnika](/pages/web_cloud/domains/dns_zone_edit).

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains).
- Posiadanie strefy DNS powiązanej z tą domeną w OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Strefy DNS](/links/control-panel/web-dns-zone)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Strefy DNS`{.action} > Wybierz nazwę domeny

---
<!-- CP-NAV-END:web-dns-zone -->

## W praktyce

> [!warning]
>
> Dodawanie, modyfikowanie lub usuwanie rekordów DNS w aktywnej strefie DNS jest operacją wymagającą odpowiedniej wiedzy. W razie wątpliwości skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner).

### Dodawanie rekordu DNS typu AAAA dla domeny

<!-- CP-STEPS-START:add-aaaa-record -->
Kliknij poniższe karty, aby wyświetlić kolejno każdy z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij przycisk `Dodaj rekord`{.action}.
>>
> **Krok 3**
>>
>> W wyświetlonym oknie wybierz typ rekordu `AAAA`{.action}.
>>
> **Krok 4**
>>
>> Wpisz w polu `Adres docelowy *` adres IP (na przykład: `2001:db8:1:1b00:203:0:113:0`) usługi, na której znajduje się Twoja strona WWW (hosting, serwer dedykowany, VPS, itp.), a następnie kliknij `Dalej`{.action}.
>>
> **Krok 5**
>>
>> Sprawdź podsumowanie i kliknij `Zatwierdź`{.action}. Odczekaj maksymalnie **24** godziny, aby dodanie w sieci DNS stało się w pełni skuteczne.
<!-- CP-STEPS-END:add-aaaa-record -->

/// details | Kliknij tutaj, aby uzyskać więcej informacji.

Zapoznaj się ze szczegółowymi przewodnikami:

- [Informacje o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records).
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
- [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting WWW - Zmiana nazwy domeny powiązanej z hostingiem](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

### Dodawanie rekordu DNS typu AAAA dla subdomeny domeny

<!-- CP-STEPS-START:add-aaaa-record-subdomain -->
Kliknij poniższe karty, aby wyświetlić kolejno każdy z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Strefy DNS](/links/control-panel/web-dns-zone), następnie wybierz odpowiednią domenę.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij przycisk `Dodaj rekord`{.action}.
>>
> **Krok 3**
>>
>> W wyświetlonym oknie wybierz typ rekordu `AAAA`{.action}.
>>
> **Krok 4**
>>
>> Wpisz w polu `Subdomena` odpowiednią subdomenę (na przykład: `www` dla subdomeny `www.domain.tld`), a w polu `Adres docelowy *` adres IP (na przykład: `2001:db8:1:1b00:203:0:113:0`) usługi, na której znajduje się Twoja strona WWW (hosting, serwer dedykowany, VPS, itp.). Kliknij `Dalej`{.action}.
>>
> **Krok 5**
>>
>> Sprawdź podsumowanie i kliknij `Zatwierdź`{.action}. Odczekaj maksymalnie **24** godziny, aby dodanie w sieci DNS stało się w pełni skuteczne.
<!-- CP-STEPS-END:add-aaaa-record-subdomain -->

/// details | Kliknij tutaj, aby uzyskać więcej informacji.

Zapoznaj się ze szczegółowymi przewodnikami:

- [Informacje o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records).
- [Jak utworzyć subdomenę?](/pages/web_cloud/domains/domain_create_subdomains).
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
- [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting WWW - Zmiana nazwy domeny powiązanej z hostingiem](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

## Sprawdź również

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information).

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records).
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).
