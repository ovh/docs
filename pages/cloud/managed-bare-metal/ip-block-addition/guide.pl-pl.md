---
title: Dodawanie bloku IP
slug: dodawanie-bloku-ip
routes:
    canonical: 'https://docs.ovh.com/pl/private-cloud/dodawanie-bloku-ip/'
excerpt: Jak zamówić blok IP dla swojej usługi Managed Bare Metal
legacy_guide_number: '7766457'
section: Funkcjonalności OVHcloud
order: 01
---

**Ostatnia aktualizacja z dnia 18-11-2020**

## Wprowadzenie

Blok IP umożliwia udostępnianie witryn w Internecie. 

**Niniejszy przewodnik wyjaśnia, jak zamawiać, dodawać i przenosić blok IP powiązany z Twoją usługą Managed Bare Metal.**

## Wymagania początkowe

* Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
* Posiadanie [infrastruktury Managed Bare Metal](https://www.ovhcloud.com/pl/public-cloud/){.external} na koncie OVHcloud.

## W praktyce

### Zamówienie bloku IP

Aby zamówić dodatkowy blok IP dla Twojej usługi **Managed Bare Metal**, przejdź do Panelu klienta OVHcloud. W sekcji `Bare Metal Cloud` kliknij rubrykę `IP` w lewej kolumnie, a następnie wybierz opcję `Zamów dodatkowe IP`{.action}. Teraz wybierz Twoją usługę **Managed Bare Metal** w rozwijanym menu, aby móc przejść do następnego etapu.


Utworzenie bloku IP wymaga wypełnienia następujących pól

- Wielkość bloku IP (od /28 do /24)

> [!primary]
>
> Dla przypomnienia, oto tabela podsumowująca liczbę IP obecnych w bloku i liczbę adresów IP do wykorzystania.
> 

|Wielkość bloku|IP w bloku|IP do wykorzystania w OVHcloud|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> Zapoznaj się z naszym przewodnikiem dotyczącym [wtyczki OVHcloud Network](../wtyczka-ovh-network/){.external-link}, aby dowiedzieć się, jakie IP zarezerwowano dla Twojego bloku oraz jak są wykorzystywane.
>

- Kraj bloku IP, ważny w niektórych przypadkach dla pozycjonowania Twoich witryn (strona internetowa skierowana do Polaków będzie lepiej pozycjonowana, jeśli ma polski adres IP).
- Nazwa sieci (informacja widoczna w bazie WHOIS bloku IP).
- Szacowana liczba klientów (ile klientów będzie docelowo hostowanych pod tymi adresami IP).
- Opis sieci (informacja widoczna w bazie WHOIS bloku IP).
- Wykorzystanie \[informacje dotyczące wykorzystania (WWW, SSL, Cloud itp.)].

Po potwierdzeniu ostatniego etapu otrzymasz formularz zamówienia na blok IP. Jeśli odpowiada on Twoim oczekiwaniom, wystarczy go opłacić za pomocą środków płatności oferowanych na dole strony, aby otrzymać zamówione adresy.

### Przenoszenie bloku IP między dwiema usługami Managed Bare Metal

Migracja bloku IP wymaga ręcznego przeniesienia bloków za pośrednictwem APIv6 OVHcloud.

Należy zastosować następujące wywołanie API:

> [!api]
>
> @api {POST} /ip/{ip}/move
>

Pola należy wypełnić w następujący sposób:

- ip: blok IP z /maską
- nexthop “newPrimaryIp” (wielkość liter jest rozróżniana)
- to: docelowa usługa Managed Bare Metal w formie pcc-XXX-XXX-XXX-XXX

![champ nexthop](images/move-api.png){.thumbnail}


Wynik będzie następujący:

![champ nexthop](images/api-result.png){.thumbnail}

Następnie użyj tego wywołania API, aby przenieść IP na “parking adresów IP”:

> [!api]
>
> @api {POST} /ip/{ip}/park
> 

> [!warning]
>
> To wywołanie odcina dostęp do sieci maszynom wirtualnym, które wykorzystują dane adresy IP.
>

Możesz śledzić przenoszenie bloku IP z poziomu Twojego [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w sekcji `Bare Metal Cloud`{.action}, a następnie `Managed Bare Metal`{.action}. Kliknij Twoją usługę Managed Bare Metal, a następnie kartę `Operacje`{.action}.

Odnośnik do operacji to “removeIpRipeBlock”.

![operations manager](images/operations.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
