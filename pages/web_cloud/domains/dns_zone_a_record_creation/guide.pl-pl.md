---
title: "Dodaj rekord DNS typu A dla domeny"
excerpt: "Dowiedz się, jak dodać rekord DNS typu A w strefie DNS zarządzanej przez OVHcloud w przypadku Twojej domeny"
updated: 2025-05-12
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

Czy chcesz, aby Twoja strona WWW była dostępna za pośrednictwem Twojej domeny? W tym celu Twoja domena musi wskazywać na adres IP usługi, w której znajduje się Twoja strona WWW (hosting, serwer dedykowany, VPS, itp.). Skonfiguruj wówczas aktywną strefę DNS Twojej domeny za pomocą rekordu DNS typu A.

**Dowiedz się, jak dodać rekord DNS typu A w strefie DNS zarządzanej przez OVHcloud w przypadku Twojej domeny.**

> [!primary]
>
> Aby zmodyfikować lub usunąć rekord DNS typu A ze strefy DNS OVHcloud, skorzystaj z [tego przewodnika](/pages/web_cloud/domains/dns_zone_edit).

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains).
- Posiadanie strefy DNS powiązanej z tą domeną w OVHcloud.
- Dostęp do [panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

## W praktyce

> [!warning]
>
> Dodawanie, modyfikowanie lub usuwanie rekordów DNS w aktywnej strefie DNS jest operacją wymagającą odpowiedniej wiedzy. W razie wątpliwości skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner).

### Dodawanie rekord DNS typu A dla domeny

1. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
2. Na stronie, która się wyświetli kliknij przycisk `Dodaj rekord`{.action}.
3. W wyświetlonym oknie wybierz typ rekordu `A`{.action}.
4. Następnie wpisz w polu `Adres docelowy *` adres IP (na przykład: `203.0.113.0`) usługi, na której znajduje się Twoja strona WWW (hosting, serwer dedykowany, VPS, itp.), a następnie kliknij `Dalej`{.action}.
5. Sprawdź podsumowanie i kliknij `Zatwierdź`{.action}. Odczekaj maksymalnie **24** godziny, aby dodanie w sieci DNS stało się w pełni skuteczne.

/// details | Kliknij tutaj, aby uzyskać więcej informacji.

Zapoznaj się ze szczegółowymi przewodnikami:

- [Informacje o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records).
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit).
- [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting WWW - Zmiana nazwy domeny powiązanej z hostingiem](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

### Dodawanie rekord DNS typu A dla subdomeny domeny

1. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
2. Na stronie, która się wyświetli kliknij przycisk `Dodaj rekord`{.action}.
3. W wyświetlonym oknie wybierz pole typ rekordu `A`{.action}.
4. Następnie w polu `Subdomena` wpisz odpowiednią subdomenę (na przykład: `www` dla subdomeny `www.domain.tld`), a w polu `Adres docelowy *` - adres IP (na przykład: `203.0.113.0`) usługi, na której znajduje się Twoja strona WWW (hosting, serwer dedykowany, VPS, itp.). Następnie kliknij przycisk `Dalej`{.action}.
5. Sprawdź podsumowanie i kliknij `Zatwierdź`{.action}. Odczekaj maksymalnie **24** godziny, aby dodanie w sieci DNS stało się w pełni skuteczne.

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