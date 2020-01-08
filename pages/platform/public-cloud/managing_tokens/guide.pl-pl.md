---
title: 'Zarządzanie tokenami'
excerpt: 'Zarządzanie tokenami'
slug: zarzadzanie_tokenami
legacy_guide_number: g1872
section: 'Zarządzanie w OpenStack CLI'
---

## 

## Uwaga!
Poniższe informacje dotyczą tylko wersji 3.0 API Keystone.


## Definicje

- Endpoint: Adres HTTP wskazujący na API danej usługi. Na przykład https://auth.cloud.ovh.net/v2.0 dla endpoint uwierzytelniania i https://image.compute.gra1.cloud.ovh.net/ dla endpoint zarządzania obrazami w strefie GRA1.

- Token: Unikalny ciąg znaków związany z uwierzytelnianiem i z uprawnieniami dostępu. Token jest ważny 24 godziny.




## Ogólna zasada
Większość zapytań podlegających API OpenStack musi odpowiadać na mechanizm autoryzacji. Mechanizm ten działa na zasadzie otrzymania tokena i potwierdzenia go. Poniżej najważniejsze informacje na temat działania zapytania od uwierzytelniania aż do wykonania zapytania.

- Zlecenie utworzenia tokena w punkcie końcowym uwierzytelniania z potwierdzeniami
- Zapytanie do punktu końcowego wybranej usługi (storage, serwer, sieć,...) poprzez dostarczenie tokena
- API usługi pobiera token i zleca weryfikację ważności narzędziom uwierzytelniania.
- Po potwierdzeniu ważności zapytanie jest wykonywane.


Tokeny mają określony czas ważności, w związku z czym wygasają i muszą być odnawiane. 

Token można usunąć przed datą jego wygaśnięcia za pomocą API. 

Więcej informacji znajduje się w dokumentacji [OpenStack API](http://docs.openstack.org/api/quick-start/content/) oraz [mechanizmu uwierzytelniania](http://docs.openstack.org/kilo/install-guide/install/apt/content/keystone-concepts.html).


## 
Operacje, które opiszemy, można wykonać ręcznie. Są one używane do celów edukacyjnych lub do debugowania. 

Należy pobrać środowisko za pomocą pliku openrc (sprawdź przewodnik).

W naszym przykładzie chcemy otrzymać informacje na temat metadanych usługi object storage w ofercie Public Cloud Storage. Etapy to:


- Zlecenie utworzenia tokena
- Pobranie zmiennych token ID i endpoint publicURL
- Zapytanie do obiektu z uzyskanymi informacjami


Narzędzie z linii poleceń cURL pozwala na zbudowanie zapytań każdego rodzaju.


## Zlecenie utworzenia tokena

```
$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```



- -X POST: metoda HTTP używana do przekazywania danych

- $OS_AUTH_URL/tokens: operacja na tokenach

- -H "Content-Type: application/json": format oczekiwany w JSON

- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}': treść zapytania, są to informacje dotyczące uwierzytelniania

- python -mjson.tool: narzędzie python pozwalające na wyświetlenie wyjścia w sposób czytelny


Odpowiedź serwera:


```
{
"access": {
"metadata": {
"is_admin": 0,
"roles": [
"9fe...fd4"
]
},
"serviceCatalog": [
[...]
{
"endpoints": [
{
"adminURL": "https://image.compute.sbg1.cloud.ovh.net/",
"internalURL": "http://127.0.0.1:8888/v1/AUTH_9ea...ff0",
"publicURL": "https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0",
"region": "SBG1"
}
],
"endpoints_links": [],
"name": "swift",
"type": "object-store"
},

[...]
],
"token": {
"audit_ids": [
"Mka...cmTw"
],
"expires": "2015-10-02T14:53:15Z",
"id": "a4331ec98754472032f031e18b16bd00",
"issued_at": "2015-10-01T14:53:15.072501",
"tenant": {
"description": null,
"enabled": true,
"id": "9ea...ff0",
"name": "361...868"
}
},

[...]
}
}
```




## Pobieranie zmiennych token ID i endpoint publicURL
Informacje te są dostępne na wyjściu poprzedniego polecenia.

W przypadku endpoint publicURL należy szukać w sekcji "object-store" i region, który pasuje, czyli tutaj "SBG1".


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


Adres endpoint usługi object storage pozwoli na odpytanie informacji na temat obiektu. 


```
$ export token=a4331ec98754472032f031e18b16bd00
```


Token ten jest elementem uwierzytelniania, który będzie wykorzystywany dla następnego zapytania.


## Zapytanie do obiektu z uzyskanymi informacjami

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```



- -X GET : méthode HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: adres obiektu
- -H "X-Auth-Token: $token": element uwierzytelniania
- -I: opcja curl do pobierania jedynie metadanych


Odpowiedź:


```
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




## 
Zaleca się korzystać z bibliotek pozwalających na transparentne zarządzanie tokenami. Dzięki temu po dostarczeniu bibliotece potwierdzeń dotyczących logowania, tokeny będą automatycznie generowane, wykorzystywane i odnawiane bez potrzeby zarządzania nimi po stronie aplikacji.

Dostępne są liczne biblioteki w różnych językach. Sprawdź oficjalną listę, aby uzyskać więcej informacji.


## Przykład w Pythonie
Biblioteka jest instalowana za pomocą pip. 

```
$ pip install python-openstacksdk
```


Po zainicjowaniu połączenia w tle generowane są tokeny. 

```
from openstack import connection
conn = connection.Connection(auth_url="https://auth.cloud.ovh.net/v2.0",
project_name="361...868",
username="vvQ...VBW",
password="jCr...RGj")
for cont in conn.object_store.containers():
if(cont.name == "photos"):
for obj in conn.object_store.objects(cont):
if(obj.name == "fullsize/ovh-summit-2014-backstage-DS.jpg"):
print conn.object_store.get_object_metadata(obj)
```




## Przykład w PHP
Instalacja biblioteki require php-curl i composer.



```
$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud
```


Zastosowanie działa również z łącznikiem, który będzie zarządzał tokenami.


```
<?php
require '/var/www/vendor/autoload.php';
use OpenCloud\OpenStack;
$client = new OpenStack("https://auth.cloud.ovh.net/v2.0", array(
'username' => "vvQ...VBW",
'password' => "jCr...RGj",
'tenantName' => "361...868",
));
$objectStoreService = $client->objectStoreService('swift', "GRA1");
$cont = $objectStoreService->getContainer("photos");
$obj = $cont->getPartialObject('fullsize/ovh-summit-2014-backstage-DS.jpg');
print_r($obj->getMetadata());
?>
```




## 
[Przewodniki Cloud]({legacy}1785)

