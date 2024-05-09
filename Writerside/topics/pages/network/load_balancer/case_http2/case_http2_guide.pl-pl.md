---
title: Konfiguracja HTTP/2 w usłudze Load Balancer
excerpt: Dowiedz się, jak skonfigurować HTTP/2 w usłudze Load Balancer
updated: 2018-01-15
---

## Wprowadzenie

Obecnie Load Balancer nie wspiera protokołu HTTP/2. Istnieje jednak możliwość ominięcia tego ograniczenia dzięki łącznemu użyciu trybu TCP i rozszerzenia ALPN protokołu TLS.

ALPN (Application-Layer Protocol Negotiation) jest rozszerzeniem TLS, które umożliwia warstwie aplikacyjnej negocjowanie, który protokół zostanie użyty (w tym przypadku h2).

**Dzięki niniejszemu przewodnikowi nauczysz się, jak utworzyć usługę HTTP/2 kompatybilną z Load Balancerem. Znajdziesz w nim opis konfiguracji usługi pozwalającej równoważyć obciążenie między kilkoma serwerami wykorzystującymi HTTP/2.**

## Wymagania początkowe

- Utworzenie front-endu TCP
- Utworzenie farmy TCP i dodanie serwerów

## W praktyce

> [!warning]
>
> Ważna jest kolejność tworzenia elementów: najpierw muszą zostać utworzone trasy, aby potem można było do nich przypisać reguły.
> 

### Dodawanie trasy

Dodaj trasę do Twojej usługi.

#### Za pomocą API OVH

> [!faq]
>
> Metoda API:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> `<identyfikator Load Balancera>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<ID farmy TCP zarządzającej HTTP/2>`
>> >
>> > **frontendId**
>> >
>> >> `<ID front-endu TCP 443>`
>

### Dodawanie reguły

Dodaj regułę do trasy.

#### Za pomocą API OVH

> [!faq]
>
> Metoda API:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> `<identyfikator Load Balancera>`
>> >
>> > **routeId**
>> >
>> >> `<ID trasy utworzonej powyżej>`
>> >
>> > **field**
>> >
>> >> `"protocol"`
>> >
>> > **match**
>> >
>> >> `"is"`
>> >
>> > **pattern**
>> >
>> >> `"http/2.0"`
>

### Wdrażanie modyfikacji

Modyfikacje wprowadzone w Load Balancerze muszą zostać *wyraźnie zatwierdzone* w każdej ze stref skonfigurowanych dla Twojej usługi. Dopiero po zatwierdzeniu staną się widoczne dla Twoich użytkowników. Dzięki temu możesz przeprowadzić wszystkie zmiany konfiguracji za jednym razem.

W przypadku kilku stref, musisz zastosować tę samą konfigurację dla każdej z nich.

#### Za pomocą API OVH

Odświeżanie strefy:

> [!faq]
>
> Metoda API:
>
>> > [!api]
>> >
>> > @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> `<identyfikator Load Balancera>`
>> >
>> > **zone**
>> >
>> >> `<strefa do konfiguracji >`
>

### Weryfikacja

Po zakończeniu wszystkich powyższych etapów usługa równoważenia obciążenia serwerów wykorzystujących HTTP/2 jest aktywna. Możesz wówczas zatwierdzić stan usługi. W tym celu wyślij zapytanie do Load Balancera, a następnie sprawdź wersję w otrzymanej odpowiedzi: 

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.