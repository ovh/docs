---
title: Kodų (token) valdymas
excerpt: Kodų (token) valdymas
slug: kodu_token_valdymas
legacy_guide_number: g1872
---


## 

## Dėmesio!
Čia pateiktos instrukcijos skirtos Keystone API 2.0 versijai.


## Terminai

- Endpoint: HTTP adresas, nukreipiantis į paslaugos API. Pavyzdžiui, autorizacijos endpoint yra https://auth.cloud.ovh.net/v2.0, o GRA1 zonos atvaizdų valdymo endpoint yra https://image.compute.gra1.cloud.ovh.net/.

- Token: Simbolių seka, susijusi su autentifikacija ir prieigos teisėmis. Kodas (token) yra sugeneruojamas vartotojo jam prisijungiant per API autentifikaciją. Kodas yra sugeneruojamas ir galioja 24 val. Kodas gali būti „scoped“ arba „unsocped“, t.y. jis gali būti tiesiogiai susijęs su valdytoju (tenant) arba nesusijęs su jokiu valdytoju.




## Bendras principas
Daugelis OpenStack API užklausų turi atsakyti autorizacijos mechanizmui. Šis mechanizmas veikia naudojant kodus (token) ir jais patvirtinant užklausas. Pateikiame užklausos išklotinę, nuo jos pateikimo iki įvykdymo:

- Prašymas sukurti kodą (token) autentifikacijos endpoint naudojant autentifikacijos duomenis;
- Užklausa į paslaugos endpoint (storage, compute, network, ...) pateikiant kodą (token) kaip parametrą;
- Paslaugos API pasiima kodą ir prašo autentifikacijos komponento patikrinti jo galiojimą;
- Jeigu kodas galioja, tuomet užklausa yra įvykdoma.


Kodai turi ribotą galiojimo laiką, jiems nustojus galioti juos būtina atnaujinti.

Taip pat, norint nutraukti kodo galiojimą iki jam nustojant galioti, tai atlikti galima per API.

Išsamiau skaitykite[OpenStack API](http://docs.openstack.org/api/quick-start/content/) ir [autentifikacijos mechanizmo](http://docs.openstack.org/kilo/install-guide/install/apt/content/keystone-concepts.html) dokumentacijose.


## 
Šios operacijos gali būti įvykdytos rankiniu būdu. Jos gali būti naudingos apmokant, ar atliekant klaidų šalinimą.

Būtina įkelti aplinką naudojant openrc failą (skaitykite gidą).

Mūsų pavyzdyje norime gauti Public Cloud Storage objektų talpykos metadata duomenis. Atliksime šiuos žingsnius:


- Pateiksime kodo sukūrimo užklausą;
- Gausime kintamuosius token ID ir endpoint publicURL;
- Pateiksime užklausą apie objekto duomenis.


Užklausų kūrimui naudosime programėlę cURL.


## Kodo sukūrimo užklausa

```
$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```



- -X POST: metodas, kurį naudoja HTTP duomenų pateikimui

- $OS_AUTH_URL/tokens: veiksmai su kodais

- -H "Content-Type: application/json": JSON išvesties formatas

- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}': užklausos dalis, autentifikacijos duomenys

- python -mjson.tool : python priemonė, leidžianti perskaityti išvestį


Serverio atsakymas bus panašus į šį:


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




## Token ID ir endpoint publicURL kintamųjų gavimas
Įvykdžius šią komandą yra gaunama dvejopa informacija.

Endpoint publicURL vertė yra skyriuje object-store ir taikomas regionas yra SBG1.


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


Tai yra object storage endpoint adresas, per kurį galima siųsti užklausą dėl duomenų apie objektą.


```
$ export token=a4331ec98754472032f031e18b16bd00
```


Šis kodas bus autentifikacijos elementas, kurį naudosime kitoje užklausoje.


## Užklausa į objektą su gautais duomenimis

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```



- -X GET: HTTP metofas GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: objekto adresas
- -H "X-Auth-Token: $token": autentifikacijos elementas
- -I: curl parinktis metadata


Atsakymas bus panašus į šį:


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
Labai rekomenduojama naudoti bibliotekas, kurios leistų skaidriai valdyti kodus. Tokiu būdu tiesiog paprastai pateikiant bibliotekai prisijungimo duomenis, kodai yra automatiškai sugeneruojami, naudojami, be būtinybės valdyti tai programos lygyje.

Yra daug bibliotekų, parašytų įvairiomis kalbomis. Papildomai informacijai skaitykite oficialų sąrašą.


## Python pavyzdys
Biblioteka yra diegiama naudojant pip.

```
$ pip install python-openstacksdk
```


Po jungties konfigūracijos, kodai yra valdomi pačios bibliotekos


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




## PHP pavyzdys
Bibliotekos diegimui būtini php-curl ir composer.


```
$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud
```


Naudojamas kartu su jungtimi, kuri valdo kodus.


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
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

