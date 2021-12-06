---
title: Przewodnik programisty
slug: pca/dev
excerpt: OVH Public Cloud Archive dla programistow
section: Public Cloud Archive
order: 10
---


## Czym jest usuga OVH Public Cloud Archive?
[OVH Public Cloud Archive](https://www.ovhcloud.com/pl/public-cloud/cloud-archive/){.external} to bardzo tanie rozwiązanie przestrzeni dyskowej przeznaczone do długoterminowej archiwizacji danych.

Usługa OVH Public Cloud Archive jest wspierana przez [Openstack Swift](https://swift.openstack.org){.external}, rozwiązanie open source, o wysokiej dostępności, rozproszone, do przechowywania spójnych obiektów. Programiści mają dostęp do wysoce skalowalnej, niezawodnej i niedrogiej infrastruktury do przechowywania danych, której OVH używa do uruchamiania niektórych własnych wewnętrznych rozwiązań.

OVH Public Cloud Archive to usługa przeznaczona do przechowywania danych, do których dostęp jest okazjonalny. Im częstotliwość zlecania operacji odblokowywania jest mniejsza, tym krótszy jest czas odzyskiwania. Public Cloud Archive firmy OVH to rewelacyjne rozwiązanie, gdy szukasz trwałej i niedrogiej przestrzeni dyskowej, w przypadku której nie trzeba czekać wielu godzin, aby pobrać ważne dane, których w danym momencie potrzebujesz.

Jeśli potrzebujesz częstego dostępu do swoich danych, wybierz usługę [OVH Public Cloud
Storage](https://www.ovhcloud.com/pl/public-cloud/object-storage/){.external}.



> [!primary]
>
> Poszukujesz narzędzi do programowania? Sprawdź Oficjalną listę Openstack SDK.
> 

Przewodnik ten dostarcza szczegółowych informacji na temat podstawowych pojęć dotyczących usługi OVH Public Cloud Archive takich jak regiony, konta, kontenery, archiwa oraz sposób wykorzystania tych zasobów przy użyciu API Openstack Swift.


## Uwierzytelnianie
Oferta OVH Public Cloud Archive jest wspierana przez Openstack Swift. Uwierzytelnianie jest realizowane tak, jak w przypadku innych usług Openstack za pomocą narzędzia [Keystone](https://docs.openstack.org/developer/keystone/){.external}.



> [!primary]
>
> Odwiedź oficjalną stronę Openstack Keystone API
> tutaj.
> 

Udane uwierzytelnianie zwróci dane takie jak **token do uwierzytelniania**, **id projektu** i **katalog usługi** pozwalające na korzystanie z usług Openstack. Token służy do wykonywania operacji za pomocą API dla danej usługi. Token jest ważny dla danego zakresu i przez czas określony dla zdalnej usługi uwierzytelniania. Generowanie tokena to operacja ograniczona. Użytkownik może uzyskać maksymalnie 60 tokenów na minutę.

Uwaga: Poniżej przedstawiamy składnię dotyczącą nieograniczonego uwierzytelniania. Token będzie ważny dla domyślnego id projektu. Skorzystaj z API keystone, jeśli chcesz korzystać z ograniczonego uwierzytelniania.

**Składnia**

```
 POST /v3/auth/tokens HTTP/1.1
 Host: auth.cloud.ovh.net
 Content-Length: <length>
 Content-Type: application/json
 
 {
     "auth": {
         "identity": {
             "methods": [
                 "password"
             ],
             "password": {
                 "user": {
                     "name": "<username>",
                     "domain": {
                         "name": "Default"
                     },
                     "password": "<password>"
                 }
             }
         }
     }
 }
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 201 Created
 Vary: X-Auth-Token
 X-Subject-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 2299
 Content-Type: application/json
 Date: Thu, 09 Mar 2017 11:21:04 GMT
 
 {
    "token" : {
       "methods" : [
          "password"
       ],
       "expires_at" : "2017-03-10T12:38:46.046846Z",
       "issued_at" : "2017-03-09T12:38:46.046871Z",
       "catalog" : [
          {
             "type" : "object-store",
             "id" : "9afff7a684eb4830b08366fce2b94c57",
             "endpoints" : [
                {
                   "url" : "https://storage.bhs1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "35ed7954cd8241b384da3c2d6c7277bb",
                   "interface" : "public",
                   "region_id" : "BHS1"
                },
                {
                   "region_id" : "SBG1",
                   "interface" : "public",
                   "id" : "3ccc82bbd33d4cdfbc5f03aef2724ab0",
                   "url" : "https://storage.sbg1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f"
                },
                {
                   "url" : "https://storage.gra1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "c96f61d071a74e36bd3c07e53d241ce3",
                   "region_id" : "GRA1",
                   "interface" : "public"
                }
             ]
          },
       ],
       "roles" : [
          {
             "name" : "_member_",
             "id" : "9fe3fd9ee4291b1895a90975d3e92baf"
          }
       ],
       "extras" : {},
       "user" : {
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "ktZeF8Uqluqm",
          "id" : "200ba261af11471db447526575dcb9fb"
       },
       "audit_ids" : [
          "BN_StzM0SFmGB5uYiIhA7Q"
       ],
       "project" : {
          "id" : "e80c212388cd4d509abc959643993b9f",
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "3635872342124167"
       }
    }
 }
 ```

## Regiony
Oferta OVH Public Cloud Archive jest dostępna w różnych regionach geograficznych. Regiony składają się ze stref, które z kolei składają się z określonych zasobów potencjalnie umieszczonych w różnych centrach danych. Każdy region posiada punkt końcowy usługi. Lista regionów dostępnych dla usługi OVH Public Cloud Archive i OVH Public Cloud Storage jest dostępna w katalogu usług na etapie uwierzytelniania.


## Zasady przechowywania danych
Dane przechowywane w ramach usługi OVH Object Storage lub OVH Public Cloud Archive są zainstalowane na przestrzeni dyskowej posiadającej różne zasady. Zasady przechowywania danych mogą się różnić w zależności od nośnika danych lub od algorytmu redundancji odpowiedzialnego za umieszczanie danych w celu zmaksymalizowania trwałości.

Zasady przechowywania danych dla poszczególnych usług:

Zasady dla oferty OVH **P**ublic **C**loud **A**rchive. Oferta przeznaczona do długotrwałego przechowywania danych, z rzadkim dostępem do nich. Dane są przechowywane przy użyciu [Erasure Code](https://en.wikipedia.org/wiki/Erasure_code){.external}, który charakteryzuje się współczynnikiem kodowania na poziomie 0,8, składającym się z 12 fragmentów danych i 3 fragmentów parzystych. Czas pobierania tych danych może się wahać od kilku minut do kilku godzin w zależności od wcześniejszych operacji.

Zasady dla oferty OVH **P**ublic **C**loud **S**torage. Oferta przeznaczona do częstego dostępu do danych. Dane są kopiowane 3 razy. Dostęp do danych jest natychmiastowy.


## Konta
Każdy projekt OVH Public Cloud posiada unikalne id. Jednym z podstawowych pojęć usług OVH Public Cloud Archive i OVH Public Cloud Storage jest Konto. Konto to projekt cloud storage, który może przechowywać zbiory danych nazwane kontenerami. Konto to *AUTH_<Id_projektu>*, gdzie Id projektu jest pobierane podczas uwierzytelniania.


## Kontenery
OVH Public Cloud Archive to usługa przechowywania danych w chmurze. Aby móc przenieść na tę usługę swoje archiwa, należy w pierwszej kolejności utworzyć kontener w jednym z regionów.

W tej części wyjaśnimy, jak pracować z kontenerami za pomocą [API Openstack Swift](https://developer.openstack.org/api-ref/object-storage/){.external}.


### Tworzenie kontenera
Podczas tworzenia kontenera, należy podać nazwę oraz zasady przechowywania. Określasz region wybierając punkt końcowy usługi. Możesz utworzyć wybraną liczbę kontenerów, a na nich wybraną liczbę archiwów.

Kontenery mogą zostać uwtorzone za pomocą poniższych procedur:

- Utworzenie kontenera w sekcji cloud w panelu klienta OVH
- Utworzenie kontenera za pomocą protokołów opartych na SSH
- Utworzenie kontenera za pomocą API OVH
- Utworzenie kontenera za pomocą API Openstack

W przypadku korzystania z API Openstack Swift domyślna zasada przechowywania danych to  *PCS*, jeśli nie została ona określona podczas tworzenia kontenera. Aby utworzyć kontener dla usługi OVH Public Cloud Archive, należ określić odpowiednią zasadę przechowywania.

Zasada przechowywania dla kontenera jest niezmienna.

**Składnia**

```
 PUT /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 X-Storage-Policy: PCA
 ```
**Przykład zapytania**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 X-Storage-Policy: PCA
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 X-Trans-Id: tx2acf06eb506d441ab605a-0058c15384
 X-Openstack-Request-Id: tx2acf06eb506d441ab605a-0058c15384
 Date: Thu, 09 Mar 2017 13:07:17 GMT
 ```

### Pobieranie zawartosci kontenera
Gdy wgrywasz archiwum, usługa OVH Public Cloud Archive aktualizuje spis zawartości kontenera za pomocą informacji o tym archiwum. Spis zawartości jest tworzony i dostępny do odczytu bezpośrednio po otrzymaniu danych archiwum.

W celu wprowadzenia obsługi funkcji dla przestrzeni dyskowej do archiwizacji, OVH nieznacznie zmodyfikowało generowanie spisu zawartości w porówaniu z infrastrukturami Openstack Swift, w celu zawarcia dodatkowych informacji związanych z procesem przechowywania danych. Dzięki temu posiadasz najważniejsze informacje o swoim archiwum, takie jak status odblokowywania oraz czas odzyskiwania.

Więcej informacji [tutaj](https://docs.ovh.com/pl/storage/pca/api/).

**Składnia**

```
 GET /v1/<account>/<container>?policy_extra=true HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: <token>
 ```
**Przykład zapytania**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives?policy_extra=true HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 200 OK
 Content-Length: 913
 Accept-Ranges: bytes
 X-Container-Object-Count: 3
 X-Storage-Policy: PCA
 Last-Modified: Fri, 24 Feb 2017 10:06:54 GMT
 X-Timestamp: 1487930813.23049
 X-Container-Bytes-Used: 3072
 Content-Type: application/json; charset=utf-8
 X-Trans-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 X-Openstack-Request-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 Date: Thu, 09 Mar 2017 13:48:10 GMT
 
 [
    {
       "hash" : "l0dad6ursvjudy1ea4xyfftbwdsfqhqq",
       "policy_retrieval_state" : "sealed",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.026940",
       "policy_retrieval_delay" : null,
       "name" : "archive1.zip",
       "content_type" : "application/octet-stream"
    },
    {
       "hash" : "d69eegihauxczrutglltkkz4k9xwwfsp",
       "policy_retrieval_state" : "unsealing",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.031512",
       "policy_retrieval_delay" : 1851,
       "name" : "archive2.tar.gz",
       "content_type" : "application/octet-stream"
    },
    {
       "policy_retrieval_delay" : null,
       "content_type" : "application/octet-stream",
       "name" : "archive3.xz",
       "bytes" : 1024,
       "policy_retrieval_state" : "unsealed",
       "hash" : "k9pzyglnvupkqbrniqoo16kb95y68vms",
       "last_modified" : "2017-03-07T15:13:42.624310"
    }
 ]
 ```

### Usuwanie kontenera
Jeśli chcesz usunąć kontener, najpierw musisz usunąć wszystkie archiwa, które się na nim znajdują. Gdy kontener jest pusty, możesz usunąć kontener podając jego nazwę.

**Składnia**

```
 DELETE /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Przykład zapytania**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txc578ec094c764908a9feb-0058c153cc
 X-Openstack-Request-Id: txc578ec094c764908a9feb-0058c153cc
 Date: Thu, 09 Mar 2017 13:08:28 GMT
 ```

## Archiwa
OVH Public Cloud Archive pozwala na przechowywanie obiektów zwanych archiwami. Archiwum może mieć wybrany rozmiar i może zawierać treści każdego typu. Archiwum różni się od tradycyjnego obiektu Openstack Swift, ponieważ posiada ono dodatkowy atrybut: *status odzyskiwania*. Archiwum może być zablokowane lub odblokowane.


### Wgrywanie archiwum
Archiwum zainstalowane w ramach usług OVH Public Cloud Archive jest natychmiast blokowane na przestrzeni dyskowej. Aby je odzyskać, należy je najpierw odblokować.

Podczas jednej operacji możesz zainstalować archiwa o rozmiarze do 5 GB. Większe archiwa muszą zostać podzielone na segmenty o maksymalnym rozmiarze 5 GiB każdy, do których odwołuje się manifest. Manifest to ważne pojęcie w oprogramowaniu Openstack Swift, które pozwala na obsługiwanie większych obiektów. Więcej na ten temat możesz przeczytać [tutaj](https://docs.openstack.org/developer/swift/overview_large_objects.html){.external}. Minimalny rozmiar segmentu to 1 bajt. Obiekty SLO posiadają ograniczenie do 1000 segmentów, a maksymalny rozmiar manifestu to 2 MiB.

Podczas instalowania archiwum w ramach usługi OVH Public Cloud Archive, należy sprawdzić, czy lokalna i zdalna kopia danych jest identyczna. Dzięki temu mamy gwarancję, że dane uzyskane zdalnie są poprawne i że nikt nie miał możliwości zmienić ich zawartości.

- Podczas instalowania archiwów w postaci segmentów musisz obliczyć sumę kontrolną md5 każdego segmentu, który wchodzi w skład łańcucha podając sumę kontrolną każdego md5 w odpowiedniej kolejności. Suma kontrolna md5 tego łańcucha powinna zostać przekazana w zapytaniu dotyczącym utworzenia manifestu.
- Podczas instalowania archiwów niesegmentowanych musisz obliczyć sumę kontrolną md5 i podać te dane w zapytaniu dotyczącym tworzenia archiwum.

**Składnia**

```
 PUT /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 Content-Length: <archive_size>
 Etag: <archive_md5sum>
 ```
**Przykład zapytania**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 1024
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 Last-Modified: Thu, 09 Mar 2017 15:02:12 GMT
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 X-Trans-Id: txa1e833e835c749a883ff4-0058c16e71
 X-Openstack-Request-Id: txa1e833e835c749a883ff4-0058c16e71
 Date: Thu, 09 Mar 2017 15:02:18 GMT
 ```

### Odblokowywanie archiwum
OVH Public Cloud Archive pozwala na przechowywanie danych w atrakcyjnej cenie, kosztem dłuższego czasu odzyskiwania danych. Aby uzyskać dostęp do archiwum, należy zlecić odblokowanie archiwum na kontenerze.

Zapytanie dotyczące odblokowania archiwum jest identyczne do zapytania o pobranie archiwum. Jedynie odpowiedź wysłana przez OVH Public Cloud Archive się różni i jest to charakterystyczne dla infrastruktury Openstack Swift uruchomionej przez OVH. Wysłane zapytanie o odblokowanie archiwum nie może zostać anulowane. Kolejne zapytania o odblokowanie będą się odnosić do operacji w trakcie.

Więcej informacji na ten [temat](https://docs.ovh.com/pl/storage/pca/api/).

**Składnia**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Przykład zapytania**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 429 Too Many Requests
 Retry-After: 637
 Content-Length: 64
 X-Trans-Id: txe9fad9afaf7b4950a16af-0058c17f11
 X-Openstack-Request-Id: txe9fad9afaf7b4950a16af-0058c17f11
 Date: Thu, 09 Mar 2017 16:13:05 GMT
 
 <html><h1>Too Many Requests</h1><p>Too Many Requests.</p></html>
 ```

### Pobieranie archiwum
Po odblokowaniu archiwum masz 24 godziny na jego pobranie. Nie ma ograniczenia częstotliwości dostępu. Po upływie tego czasu archiwum zostanie ponownie zablokowane.

W związku z tym, że usługa OVH Public Cloud Archive jest przeznaczona do zamrażania danych, w przypadku gdy nowe zlecenie odblokowania pojawi się relatywnie niedługo po zakończeniu okresu odzyskiwania, odblokowywanie może trwać **znacznie dłużej**.

**Składnia**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Przykład zapytania**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 200 OK
 Content-Length: 1024
 Content-Type: application/octet-stream
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
 ```

### Usuwanie archiwum
Usuwanie archiwum to operacja wykonywana natychmiast. Operacja ta jest nieodwracalna i nie można jej anulować. Aby usunąć archiwum, należy podać jego nazwę oraz kontener, na którym archiwum to jest przechowywane.

**Składnia**

```
 DELETE /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Przykład zapytania**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive1.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Przykład odpowiedzi**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txcf8e98d30f714c85a323d-0058c16813
 X-Openstack-Request-Id: txcf8e98d30f714c85a323d-0058c16813
 Date: Thu, 09 Mar 2017 14:35:00 GMT
 ```