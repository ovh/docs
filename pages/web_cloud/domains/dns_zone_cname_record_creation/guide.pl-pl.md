---
title: "Jak dodać rekord DNS typu CNAME dla subdomeny"
excerpt: "Dowiedz się, jak dodać rekord DNS typu CNAME w strefie DNS zarządzanej przez OVHcloud dla subdomeny domeny"
updated: 2025-06-25
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

Rekord CNAME umożliwia powiązanie subdomeny z nazwą domeny lub subdomeny bez konieczności podawania adresu IP. Oznacza to, że subdomena zostanie przekierowana na adres IP domeny docelowej lub subdomeny, bez konieczności dalszej konfiguracji.

Na przykład, jeśli utworzysz rekord CNAME dla *www.domain.tld*, który wskazuje na *domain.tld*, wówczas *www.domain.tld* użyje tego samego adresu IP co *domain.tld*.

Rekordy CNAME są użyteczne, jeśli chcesz uniknąć konieczności zmiany adresów IP dla subdomen. Można ich również używać do konfigurowania usług, takich jak serwery e-mail.

**Dowiedz się, jak dodać rekord CNAME w strefie DNS OVHcloud.**

> **Czy w strefie DNS posiadasz już rekord CNAME?** Zapoznaj się z naszym przewodnikiem "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)".

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains).
- Posiadanie strefy DNS powiązanej z tą domeną w OVHcloud.
- Dostęp do [panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

> [!warning]
>
> **Dodawanie, modyfikowanie lub usuwanie rekordów DNS w aktywnej strefie DNS jest operacją wymagającą odpowiedniej wiedzy.**
> W razie wątpliwości skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner).

## W praktyce

### Dodaj rekord DNS typu CNAME dla subdomeny domeny

1. Kliknij menu `Strefy DNS`{.action}, następnie wybierz odpowiednią domenę.
2. Na stronie, która się wyświetli kliknij przycisk `Dodaj rekord`{.action}.
3. W wyświetlonym oknie wybierz pole typ rekordu `CNAME`{.action}.
4. Następnie w polu `Subdomena` wpisz odpowiednią subdomenę (na przykład: `www` dla subdomeny `www.domain.tld`), a w polu `Adres docelowy *` nazwę domeny lub subdomeny (na przykład: `domain.tld`), do której chcesz przypisać rekord typu CNAME. Następnie kliknij przycisk `Dalej`{.action}.
5. Sprawdź podsumowanie i kliknij `Zatwierdź`{.action}. Odczekaj maksymalnie **24** godziny, aby dodanie w sieci DNS stało się w pełni skuteczne.

/// details | Zapoznaj się ze szczegółowymi przewodnikami:

- [Informacje o strefach DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Wszystko o rekordach DNS](/pages/web_cloud/domains/dns_zone_records)
- [Jak utworzyć subdomenę?](/pages/web_cloud/domains/domain_create_subdomains)
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)
- [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Hosting WWW - Zmiana nazwy domeny powiązanej z hostingiem](/pages/web_cloud/web_hosting/multisites_modify_domain)

///


### Przypadki szczególne

Kliknij poniższe łącza, aby uzyskać więcej informacji:

/// details | Rekordy CNAME i TXT dla tej samej subdomeny

Nie konfiguruj jednocześnie rekordu CNAME i rekordu TXT dla tej samej subdomeny. Może to spowodować losowe wyniki podczas rozpoznawania DNS, ponieważ tylko jedna odpowiedź może zostać zwrócona przez zapytanie DNS.

Na przykład, jeśli masz następujące rekordy dla *www.domain.tld*:

- Rekord CNAME wskazujący na *domain.tld*.
- Rekord TXT z określoną wartością.

Zapytanie DNS dla *www.domain.tld* zwróci losowo wartość docelową rekordu CNAME lub wartość rekordu TXT.

///

/// details | CNAME dla domeny w jej własnej strefie DNS

Konwencjonalnie, **rekordy CNAME nie mogą być używane dla nazwy domeny w jej własnej strefie DNS**. Nazwa domeny musi wskazywać bezpośrednio na adres IP z rekordem typu [A](/pages/web_cloud/domains/dns_zone_a_record_creation) w przypadku adresu IPv4 lub [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) w przypadku adresu IPv6.

Aby postępować zgodnie z powyższym przykładem, nie będziesz mógł utworzyć rekordu CNAME dla domeny *domain.tld* w strefie DNS, którą utworzyłeś dla domeny.
Będziesz mógł jednak tworzyć rekordy CNAME dla wszystkich subdomen (na przykład: *subdomain.domain.tld* lub *www.domain.tld*) dla domeny *domain.tld* w strefie DNS utworzonej dla *domain.tld*.

///

## Sprawdź również
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).