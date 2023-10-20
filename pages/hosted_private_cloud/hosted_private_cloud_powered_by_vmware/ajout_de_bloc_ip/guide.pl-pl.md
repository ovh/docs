---
title: Dodawanie bloku IP
excerpt: Jak zamówić blok IP dla swojej usługi Private Cloud
updated: 2022-04-06
---

## Wprowadzenie

Blok IP umożliwia udostępnianie witryn w Internecie. 

**Niniejszy przewodnik wyjaśnia, jak zamawiać, dodawać i przenosić blok IP powiązany z Twoją usługą Hosted Private Cloud.**

## Wymagania początkowe

- Posiadanie statusu kontaktu administratora infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymywać dane do logowania.
- Posiadanie aktywnego identyfikatora użytkownika [utworzonego w Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Zamówienie bloku IP

Aby zamówić dodatkowy blok IP dla Twojej usługi **Private Cloud**, przejdź do Panelu klienta OVHcloud. W sekcji `Serwer` kliknij rubrykę `IP` w lewej kolumnie, a następnie wybierz opcję `Zamów dodatkowe IP`{.action}. Teraz wybierz Twoją usługę **Private Cloud** w rozwijanym menu, aby móc przejść do następnego etapu.

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
> Zapoznaj się z naszym przewodnikiem dotyczącym [wtyczki OVHcloud Network](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/plugin_ovh_network){.external-link}, aby dowiedzieć się, jakie IP zarezerwowano dla Twojego bloku oraz jak są wykorzystywane.
>

- Kraj bloku IP, ważny w niektórych przypadkach dla pozycjonowania Twoich witryn (strona internetowa skierowana do Polaków będzie lepiej pozycjonowana, jeśli ma polski adres IP).
- Nazwa sieci (informacja widoczna w bazie WHOIS bloku IP).
- Szacowana liczba klientów (ile klientów będzie docelowo hostowanych pod tymi adresami IP).
- Opis sieci (informacja widoczna w bazie WHOIS bloku IP).
- Wykorzystanie (informacje dotyczące wykorzystania (WWW, SSL, Cloud itp.)).

> [!success]
>
> Opłać koszty aktywacji bloku IP przed dostawą.
>

Po potwierdzeniu ostatniego etapu otrzymasz formularz zamówienia na blok IP. Jeśli odpowiada on Twoim oczekiwaniom, wystarczy go opłacić za pomocą środków płatności oferowanych na dole strony, aby otrzymać zamówione adresy.

### Przenoszenie bloku IP między dwiema usługami Hosted Private Cloud

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Migracja bloku IP wymaga ręcznego przeniesienia bloków za pośrednictwem APIv6 OVHcloud.

Należy zastosować następujące wywołanie API:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

Pola należy wypełnić w następujący sposób:

- ip: blok IP z /maską
- nexthop „newPrimaryIp” (wielkość liter jest rozróżniana)
- to: docelowa usługa Hosted Private Cloud w formie pcc-XXX-XXX-XXX-XXX

![champ nexthop](images/move-api.png){.thumbnail}

Wynik będzie następujący:

![champ nexthop](images/api-result.png){.thumbnail}

Jeśli po odłączeniu bloku IP będziesz mógł użyć tego połączenia API do przeniesienia IP na „parking adresów IP”:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> To wywołanie odcina dostęp do sieci maszynom wirtualnym, które wykorzystują dane adresy IP.
>

Możesz śledzić przenoszenie bloku IP z poziomu Twojego [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w sekcji `Serwer`{.action}, a następnie `Private Cloud`{.action}. Kliknij Twoją usługę Hosted Private Cloud, a następnie kartę `Operacje`{.action}.

Odnośnik do operacji to „removeIpRipeBlock”.

![operations manager](images/operations.png){.thumbnail}

Następnie IP pojawi się w `Parking adresów IP`{.action}.

![IP parking](images/ip-parking.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
