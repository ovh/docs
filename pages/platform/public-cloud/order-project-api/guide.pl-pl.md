---
title: "Zamów projekt Public Cloud za pośrednictwem API OVHcloud"
excerpt: "Dowiedz się, jak zamówić projekt Public Cloud przy użyciu API OVHcloud"
slug: zamów-projekt-public-cloud-api
section: Pierwsze kroki
order: 9
---

**Ostatnia aktualizacja z dnia 22/12/2020**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Utworzenie projektu jest pierwszym etapem wdrażania [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/).

**Niniejszy przewodnik wyjaśnia, jak zamówić projekt Public Cloud za pomocą APIv6 OVHcloud.**

## Wymagania początkowe

- Posiadanie ważnych identyfikatorów OVHcloud
- Posiadanie ważnego [sposobu płatności](https://docs.ovh.com/pl/billing/zarzadzanie-sposobami-platnosci/) zarejestrowanego na Twoim koncie OVHcloud
- Poznaj [działanie APIv6 OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/).

## W praktyce

Zaloguj się do [interfejsu API OVHcloud](https://api.ovh.com/console/) i postępuj zgodnie z poniższymi instrukcjami.

### Etap 1: buduj koszyk

Pierwszy etap zamówienia polega na utworzeniu "koszyka" (cart). Następnie możesz dodać projekt Public Cloud.

#### Utwórz koszyk

Użyj tego połączenia, aby utworzyć koszyk:

> [!api]
>
> @api {POST} /order/cart
>

Wybierz swój oddział API OVHcloud. W odpowiedzi zapisz numer koszyka ("cartId"); konieczne będzie zidentyfikowanie tego koszyka.

Następnie jako artykuł dodaj projekt Public Cloud. Skorzystaj z tego połączenia przy użyciu funkcji cartId, aby sprawdzić dostępność usługi:

> [!api]
>
> @api {GET} /order/cart/{cartId}/cloud
>

W odpowiedzi możesz sprawdzić parametry projektu Public Cloud:

>
>**code_plan**: "project.2018"
>
>**productName**: "Projekt Public Cloud"
>

#### Dodaj projekt do koszyka

Skorzystaj z tego połączenia, aby dodać artykuł do koszyka:

> [!api]
>
> @api {POST} /order/cart/{cartId}/cloud
>

Należy dostarczyć następujące informacje uzyskane w poprzednich etapach:

|Pole|Wartość|
|---|---|
|cartId|*ID Twojego koszyka*|
|czas trwania|P1M|
|planCode|project.2018|
|priceMode|default|
|ilość|1|

Odpowiedź będzie obejmować "itemId", który może być używany (wraz z "cartId") do identyfikacji artykułu w koszyku:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}
>

Możesz sprawdzić listę parametrów konfiguracji dostępnych dla tego artykułu za pomocą tego połączenia:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/requiredConfiguration
>

Użyj następującego punktu, aby nazwać Twój projekt (`label: "opis"`):

> [!api]
>
> @api {POST} /order/cart/{cartId}/item/{itemId}/configuration
>

|Pole|Wartość|
|---|---|
|cartId|*ID Twojego koszyka*|
|itemId|*ID artykułu*|
|label|opis|
|value|*Nazwa projektu*|

Aby skorzystać z vouchera, skorzystaj z tego samego wywołania przy użyciu oznaczenia "voucher" itp.

Odpowiedzi obejmują "konfiguracjęId", która może być użyta (z "cartId" i "itemId") do pobrania lub usunięcia konfiguracji (GET), na przykład:

> [!api]
>
> @api {DELETE} /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
>


### Etap 2: zatwierdź koszyk

Możesz sprawdzić zawartość koszyka za pomocą "cartId":

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout
>

Poniższe połączenie pozwoli Ci utworzyć link do zamówienia. Najpierw należy zaznaczyć odpowiednie pole, aby zrezygnować z prawa do odstąpienia od umowy.

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout
>


## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
