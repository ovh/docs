---
title: 'Zarządzanie tokenami'
excerpt: 'Dowiedz się, jak używać tokenów za pomocą API Keystone'
slug: zarzadzanie_tokenami
legacy_guide_number: g1872
section: 'Zarządzanie w OpenStack CLI'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 16-04-2020**

## Wprowadzenie

**Dowiedz się, jak skonfigurować połączenia z keystone API w Twojej usłudze za pomocą tokenów.**

> [!primary]
>
> Szczegółowe informacje znajdują zastosowanie w wersji 3.0 API
> Keystone.
> 

## W praktyce

### Definicje

- Endpoint: Adres HTTP wskazujący bezpośrednio na API usługi. na przykład [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/){.external} dla punktu uwierzytelniania lub [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/){.external} dla punktu zarządzania obrazami w strefie GRA1.

- Token: Kanał o unikalnym charakterze związany z uwierzytelnianiem i prawami dostępu. Użytkownik żąda tokena, przekazując swoje dane identyfikacyjne (dane logowania) do API uwierzytelniania. Jest generowany i dostarczany z ograniczonym okresem ważności wynoszącym 24 godziny. Token może być "scoped" lub "unscoped", czyli może być bezpośrednio związany z posiadaczem lub nie może być powiązany z żadnym posiadaczem.


### Zasada ogólna

Większość zapytań składanych przez API OpenStack musi odpowiadać na mechanizm autoryzacji. Mechanizm ten działa poprzez otrzymywanie tokena (tokenu w języku francuskim) i jego zatwierdzanie. Poniżej zamieszczamy ogólne zasady działania połączenia od uwierzytelnienia aż do wykonania połączenia.

- Wniosek o utworzenie tokena w punkcie uwierzytelniania za pomocą identyfikatorów
- Zapytanie o endpoint usługi (storage, compute, network, ...) poprzez dostarczenie tokena jako parametru
- API usługi odzyskuje token i zwraca się o sprawdzenie jego ważności w jednostce uwierzytelniającej
- Jeśli ważność jest sprawdzana, zaproszenie jest brane pod uwagę i wykonane

Ponieważ tokeny mają określony okres ważności, wygasają i są odnawiane w razie potrzeby.

Podobnie, jeśli token ma zostać usunięty przed datą wygaśnięcia, możliwe jest jego usunięcie za pomocą API.

Więcej informacji znajdziesz w dokumentacji OpenStack [API](https://docs.openstack.org/keystone/train/api_curl_examples.html){.external}.


### Operacje ręczne

Następujące czynności mogą być wykonywane ręcznie, są zazwyczaj wykorzystywane do celów edukacyjnych lub debugging.

Konieczne jest załadowanie środowiska za pomocą pliku openrc (patrz przewodnik).

W poniższym przykładzie chcemy uzyskać informacje o metadata obiektu przechowywanego w ramach oferty Public Cloud Storage. Etapy są następujące:

- Zlecenie utworzenia tokena
- Pobranie zmiennych token ID i endpoint publicURL
- Zapytanie o obiekt z odzyskanymi informacjami

Narzędzie wiersza poleceń cURL umożliwia tworzenie zapytań z każdego elementu.


#### Etap 1: Żądanie utworzenia tokena

```bash
curl -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type" application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD' }, "scope": { "project": { "name": "'$OS_tenant_NAME'", "domain": { "id": "default" } } }' | python -mjson.tool
```

Odpowiedź serwera wygląda następująco:


```json
 {
  "token": {
    "is_domain": false,
    "methods": [
      "password"
    ],
    "roles": [
      {
        "id": "9543e89aeb484aee8ec7d01e87223b16",
        "name": "objectstore_operator"
      }
    ],
    "is_admin_project": false,
    "project": {
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE PROJECT>",
      "name": "<NAME OF THE PROJECT>"
    },
    "catalog": [
      {
        "endpoints": [
          {
            "url": "https://network.compute.sbg1.cloud.ovh.net/",
            "interface": "internal",
            "region": "SBG1",
            "region_id": "SBG1",
            "id": "075839111e7a41f1bb458926e5f04cec"
          },
          [...]
        ],
        "type": "network",
        "id": "0be6ed3dce244b8295ff643739a86809",
        "name": "neutron"
      },
      [...]
    ],
    "expires_at": "2020-01-17T14:53:32.000000Z",
    "user": {
      "password_expires_at": null,
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE USER>",
      "name": "<NAME OF THE USER>"
    },
    "audit_ids": [
      "IuNOR-lKQ9GJGQd8taWBnQ"
    ],
    "issued_at": "2020-01-16T14:53:32.000000Z"
  }
}
```


#### Etap 2: Odzyskiwanie zmiennych token ID i endpoint publicURL

Oba informacje są dostępne w momencie składania poprzedniego zamówienia.

W przypadku punktu publicznegoURL należy przeprowadzić badania w sekcji "object-store" i w odpowiednim regionie, w tym miejscu "SBG".


```bash
export endpoint="https://storage.sbg.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

Adres docelowy usługi object storage pozwala na zapytanie informacji o obiekt.


```bash
export token=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type" application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD' }, "scope": { "project": { "name": "'$OS_tenant_NAME'", "domain": { "id": "default" } } }' | grep '^X-Subject-Token' | cut -d" " -f2)
```

Ten token jest teraz elementem uwierzytelniającym, który będzie używany dla następnego zapytania.


#### Etap 3: Zapytanie o obiekt z odzyskanymi informacjami

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- -X GET: metoda HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg adres obiektu
- -H "X-Auth-Token: $token": element uwierzytelniania
- -I: opcja curl w celu uzyskania wyłącznie metadanych

Odpowiedź brzmi:


```bash
HTTP/1.1 200 OK
Content-Length: 190046
Content-Type: image/jpeg
Accept-Ranges: bytes
Last-Modified: Thu, 24 Sep 2015 14:20:11 GMT
Etag: c93e12530b66f121d4bd5a6ae096ee77
X-Timestamp: 1443104410.15437
X-Object-Meta-Mtime: 1424095540.000000
X-Trans-Id: 95CAB26E:D200_052711B1:01BB_560D4CE7_1631931:2BB4
Date: Thu, 01 Oct 2015 15:10:31 GMT
Connection: close
```


### Automatyczne zarządzanie: księgarnia i SDK

Zalecamy korzystanie z bibliotek umożliwiających przejrzyste zarządzanie tokenami. W ten sposób, poprzez prosty dostęp do przechowywanych danych, tokeny będą automatycznie generowane, używane i odnawiane bez konieczności zarządzania nimi na poziomie aplikacji.

Istnieje wiele bibliotek w różnych językach. Aby uzyskać więcej informacji, [zapoznaj się z oficjalną listą](https://wiki.openstack.org/wiki/SDKs){.external}.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com>