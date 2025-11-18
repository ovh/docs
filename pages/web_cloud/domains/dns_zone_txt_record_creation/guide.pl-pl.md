---
title: "Dodaj rekord DNS typu TXT dla domeny"
excerpt: "Dowiedz się, jak dodać rekord DNS typu TXT w strefie DNS zarządzanej przez OVHcloud w przypadku Twojej domeny"
updated: 2025-06-23
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

Czy musisz zatwierdzić proces weryfikacji lub bezpieczeństwa dla Twojej domeny (powiązanie usług za pomocą tokena weryfikacyjnego, klucza weryfikacyjnego, etc.) korzystając ze strefy DNS? Czy chcesz dodać wartość niestandardową w formacie tekstowym w strefie DNS Twojej domeny?
W tym celu utwórz rekord DNS typu TXT w aktywnej strefie DNS Twojej domeny.

**Dowiedz się, jak dodać rekord DNS typu TXT w strefie DNS zarządzanej przez OVHcloud w przypadku Twojej domeny.**

> [!primary]
>
> Aby zmodyfikować lub usunąć rekord DNS typu TXT strefy DNS OVHcloud, zapoznaj się z naszym przewodnikiem "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains).
- Posiadanie strefy DNS powiązanej z tą domeną w OVHcloud.
- Dostęp do [panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

## W praktyce

> [!warning]
>
> Dodawanie, modyfikowanie lub usuwanie rekordów DNS w aktywnej strefie DNS jest operacją wymagającą odpowiedniej wiedzy. W razie wątpliwości skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner).

### Dodawanie rekord DNS typu TXT dla domeny

1. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
2. Na stronie, która się wyświetli kliknij przycisk `Dodaj rekord`{.action}.
3. W wyświetlonym oknie wybierz rozszerzone pole typu `TXT`{.action}.
4. Następnie w polu `Wartość *` wpisz ciąg TXT, który chcesz dodać (na przykład: `AbCdE-Value-of-TXT-fGhIjK`), po czym kliknij `Dalej`{.action}.
5. Sprawdź podsumowanie i kliknij `Zatwierdź`{.action}. Odczekaj maksymalnie **24** godziny, aby dodanie w sieci DNS stało się w pełni skuteczne.

/// details | Kliknij tutaj, aby uzyskać więcej informacji.

Zapoznaj się ze szczegółowymi przewodnikami:

- [Informacje o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

///

### Dodawanie rekord DNS typu TXT dla subdomeny domeny

1. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
2. Na stronie, która się wyświetli kliknij przycisk `Dodaj rekord`{.action}.
3. W wyświetlonym oknie wybierz rozszerzone pole typu `TXT`{.action}.
4. W polu `Subdomena` wpisz odpowiednią subdomenę (na przykład: `www` dla subdomeny `www.domain.tld`), a w polu `Wartość *` wpisz ciąg TXT, który chcesz dodać (na przykład: `AbCdE-Value-of-TXT-fGhIjK`). Następnie kliknij przycisk `Dalej`{.action}.
5. Sprawdź podsumowanie i kliknij `Zatwierdź`{.action}. Odczekaj maksymalnie **24** godziny, aby dodanie w sieci DNS stało się w pełni skuteczne.

/// details | Kliknij tutaj, aby uzyskać więcej informacji.

Zapoznaj się ze szczegółowymi przewodnikami:

- [Informacje o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
- [Jak utworzyć subdomenę?](/pages/web_cloud/domains/domain_create_subdomains)
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)

///

## Sprawdź również

[Wszystko o strefie DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).