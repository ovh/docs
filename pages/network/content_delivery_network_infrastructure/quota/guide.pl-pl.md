---
title: 'Zarządzanie limitem transferu w usłudze CDN'
excerpt: 'Dowiedz się, jak zarządzać limitem transferu w usłudze CDN'
updated: 2018-02-22
---

**Ostatnia aktualizacja dnia 10-12-2018**

## Wprowadzenie

CDN (Content Delivery Network) umożliwia optymalizację czasu odpowiedzi Twoich stron WWW dla wszystkich Twoich użytkowników. Każde połączenie z Twoją stroną WWW zużyje pewną ilość transferu danych dostępnego w ramach sieci CDN (limit całkowitej ilości danych, która może zostać przesłana do i z Twojej sieci CDN).

**Niniejszy przewodnik zawiera informacje dotyczące zarządzania limitem transferu w ramach Twojej sieci CDN.**


## Wymagania początkowe

- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}


## W praktyce

### Zamawianie dodatkowego transferu 

W momencie zamówienia przyznany zostaje Ci limit transferu wynoszący **1 TB**. Pamiętaj, że limit ten **nie jest odnawiany** co miesiąc wraz z odnowieniem Twojej usługi. Po zużyciu całego limitu (niezależnie od czasu, w jakim został on wykorzystany), możesz zamówić nowy pakiet transferu danych.

Jeśli potrzebujesz dodatkowego transferu, możesz zamówić go bezpośrednio w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}:

![Dodatnie limitu transferu](images/add_quota.png){.thumbnail}


Zapoznaj się z cennikiem pakietów transferu na [stronie WWW OVH](https://www.ovh.pl/cdn/){.external}.

W momencie gdy pozostaje Ci **100 GB** z bieżącego limitu transferu, otrzymujesz automatyczne powiadomienie, abyś mógł zaplanować zakup kolejnego pakietu. Jeśli wyczerpałeś cały limit, włączona zostaje automatycznie funkcja `Bypass` do momentu, gdy na Twoim koncie dostępny będzie nowy pakiet transferu danych.


### Obliczanie zużycia transferu ramach usługi CDN

> [!primary]
>
> Całość ruchu wychodzącego za pośrednictwem usługi CDN jest fakturowana.
>

Pokazuje to poniższy przykład:

![Zużycie limitu transferu](images/quota_used.png){.thumbnail}


- 21,74 MB to pliki znajdujące się w pamięci cache. Sieć CDN odpowiada zatem bezpośrednio na zapytania dotyczące tych plików.

- 72,96 MB to pliki wywołane bezpośrednio z *backendu*, poza CDN. Od reguł pamięci cache zastosowanych w Twojej domenie będzie zależało, które elementy strony umieszczone będą w pamięci podręcznej, a które wywoływane będą bezpośrednio z Twojego *backendu*. 


Niezależnie od tego, czy pliki umieszczone są w pamięci cache czy wywoływane z *backendu* za pośrednictwem sieci CDN, **obydwa rodzaje transferu zmniejszają dostępny limit**. W związku z powyższym zalecamy utworzenie specjalnej subdomeny, która będzie wywoływana dla plików umieszczanych w pamięci cache i zachowanie domen wskazujących na *backend* dla pozostałych plików.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.