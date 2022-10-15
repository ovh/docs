---
title: Object Storage Swift - Odblokuj dane przechowywane w systemie Public Cloud Archive
slug: pca/unlock
excerpt: Sprawdź, jak odblokować archiwa
section: OpenStack Swift Archive Storage Class Specifics
order: 030
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 12-04-2022**

## Wprowadzenie

Public Cloud Archive to rozwiązanie do archiwizacji danych o niskiej pojemności. Jest to rozwiązanie do przechowywania danych na zimno o dużej pojemności.

W przypadku rzadko używanych danych wymagane jest odblokowanie, co oznacza konieczność opóźnienia w odzyskiwaniu danych. Czas ten jest zmienny w zależności od czasu trwania i częstotliwości dostępu do Twoich danych.

## Wymagania początkowe

- Odblokowanie w Panelu klienta:
    - Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Odblokowanie za pomocą python-swiftclient:
    - [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/) poprzez instalację python-swiftclient.
    - [Pobranie zmiennych środowiskowych OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/).

## W praktyce

### Odblokuj obiekty w Panelu klienta

W [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) kliknij zakładkę `Public Cloud`{.action}, wybierz Twój projekt Public Cloud i kliknij sekcję `Cloud Archive`{.action} w menu po lewej stronie.

Aby odblokować archiwum, kliknij przycisk `...`{.action} po prawej stronie, a następnie `Odblokuj`{.action}, aby rozpocząć proces odzyskiwania.

![odwadnianie](images/unfreeze.png){.thumbnail}

Po rozpoczęciu procesu w kolumnie `Dostępność` wyświetli się data i godzina udostępnienia archiwum.

![okres przed odblokowaniem](images/unfreeze_result.png){.thumbnail}

Twój plik będzie dostępny do pobrania po tym czasie. Pobieranie można wówczas rozpocząć bezpośrednio przez przeglądarkę lub przez [klienta Swift/SFTP/SCP](https://docs.ovh.com/pl/storage/pca/sftp/).

### Odblokuj swoje obiekty poprzez python-swiftclient

Sprawdź status obiektu do pobrania:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: sealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txbb0eff9ebf9442eab0d02-0061123b5a
X-Openstack-Request-Id: txbb0eff9ebf9442eab0d02-0061123b5a
     X-Iplb-Request-Id: 6DBEFE1E:942A_3626E64B:01BB_61123B59_649EACF:8F28
       X-Iplb-Instance: 12308
```

Poniższy wiersz wskazuje, że obiekt jest zamrożony:

```
X-Ovh-Retrieval-State: sealed
```

W związku z tym zamówienie `swift download` zwróci błąd 429:

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

Po ponownym uruchomieniu komendy `swift stat`:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealing
           X-Timestamp: 1628584780.95458
 X-Ovh-Retrieval-Delay: 14313
            X-Trans-Id: tx9012d12434a447bd81528-0061123c54
X-Openstack-Request-Id: tx9012d12434a447bd81528-0061123c54
     X-Iplb-Request-Id: 6DBEFE1E:94D0_3626E64B:01BB_61123C54_6823B54:10ABF
       X-Iplb-Instance: 12309
```

Poniższy wiersz wskazuje, że obiekt jest odblokowany:

```
X-Ovh-Retrieval-State: unsealing
```

W następnym wierszu czas (w sekundach) na pobranie obiektu:

```
X-Ovh-Retrieval-Delay: 14313
```

Po upłynięciu terminu:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txaf1eac9ceb8a45efb36e1-0061127482
X-Openstack-Request-Id: txaf1eac9ceb8a45efb36e1-0061127482
     X-Iplb-Request-Id: 6DBEFE1E:ACCC_3626E64B:01BB_61127482_E75B0:1B979
       X-Iplb-Instance: 38343
```

Poniższy wiersz wskazuje, że obiekt jest odmrożony:

```
X-Ovh-Retrieval-State: unsealed
```

Pobieranie obiektu działa wówczas:

```bash
swift download <pca_container> <object>
```

```bash
swift download <pca_container> <object>
<object> [auth 0.961s, headers 1.767s, total 1.768s, 0.001 MB/s]
```

#### Automatyzacja pobierania obiektu

> [!primary]
>
> Ta funkcjonalność wymaga pakietu `at`.
>

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

```bash
X_OVH_RETRIEVAL_DELAY=$(swift download <pca_container> <object> | awk -F ": " '/X-Ovh-Retrieval-Delay/ {print $2}'
RETRIEVAL_DELAY=$((${X_OVH_RETRIEVAL_DELAY} / 60 + 2))
swift download <pca_container> <object> | at now + ${RETRIEVAL_DELAY} minutes
```

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.