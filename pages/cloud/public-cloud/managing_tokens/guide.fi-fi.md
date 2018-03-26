---
title: Tunnisteiden hallinta
excerpt: Tunnisteiden hallinta
slug: tunnisteiden_hallinta
legacy_guide_number: g1872
---


## 

## Huom!
Tämän ohjeen tiedot pätevät API Keystone 2.0 versiossa.


## Määritelmät

- Endpoint: HTTP-osoite, joka osoittaa suoraan jonkin palvelun API-sovellukseen, esimerkiksi https://auth.cloud.ovh.net/v2.0 on tunnistautumismääritys tai https://image.compute.gra1.cloud.ovh.net/ GRA-alueen imagenhallinnan endpoint.

- Token: Ketju yksittäisiä merkkejä, joiden avulla tunnistaudutaan ja päästään resursseihin. Käyttäjä pyytää tunnistetta syöttämällä tunnuksensa tunnistautumis API:iin. Tunniste muodostetaan ja se on voimassa 24h. Tunniste voi olla "scoped" tai "unscoped", eli se saattaa liittyä tiettyyn haltijaan tai ei.




## Pääasiallinen tarkoitus
Useimpien OpenStack API:iin tulevien pyyntöjen on seurattava autorisointimekanismia, joka kostuu tunnisteen (token) mudostamisesta sekä sen vahvistamisesta.

Tässä on pääpiirteissään kuinka  pyynnöt toimivat tunnistamisesta viimeistelyyn asti.

- Pyydä tunnisteen luomista halutun palvelun tunnistautumismäärityksessä tunnuksiasi käyttäen
- Lähetä pyyntö halutun palvelun endpointtiin (storage, compute, network,...) syöttämällä tunniste
- API-palvelu hakee tunnisteen ja pyytää vahvistuksen tunnistautumispalvelulta
- Jos tunnistautuminen vahvistetaan, pyyntö suoritetaan


Koska tunnisteet ovat voimassa vain rajallisen ajan, ne vanhentuvat ja niitä on uusittava tarvittaessa. 

Voit käyttää myös API:a tunnisteen purkamiseen ennen sen vanhentumista.

Lisätietoa löydät [OpenStack API](http:http://developer.openstack.org/api-guide/quick-start/) -dokumentaatiosta.


## 
Seuraavat toimenpiteet voidaan tehdä käsin, niitä käytetään usein opetustarkoituksissa tai bugien korjaamiseen.

Toimenpiteiden suorittamiseksi sinun on ladattava ympäristösi openrc-tiedoston avulla.

Esimerkissä keräämme metadatadataa Public Cloud Storage -palvelulla säilötystä objektista: 


- Tee tunnisteen luomispyyntö
- Kerää Token ID -muuttujat  sekä endpoint publicURL
- Tee Objektiin pyyntö saaduilla tiedoilla 


Mikä tahansa pyyntö voidaan rakentaa käyttämällä cURL komentotyökalua.


## Tunnisteen luomispyyntö
code]$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool[/code]

code]$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool[/code]


- -X POST: tietojen lähettämiseen käytetty HTTP-moodi

- $OS_AUTH_URL/tokens: toiminta tunniste-elementeillä

- -H "Content-Type: application/json": pyynnön formaatti JSON-muodossa


 -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' : pyynnön vartalo, eli tunnistautumistiedot


- python -mjson.tool : python-tuokalu näyttää tuloksen luettavassa muodossa


Palvelimen vastaus näyttää tältä: 


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




## Token ID ja endpoint publicURL -tietojen hakeminen
Nämä kaksi tietoa löytyvät äskeisen komennon tuloksesta.

Endpoint publicURL löytyy osiosta "object-store" ja sitä vastaavalta alueelta ("region"), tässä esimerkissä "SBG1".


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


Tämä on object storage -palvelun endpoint-osoite, jonka avulla objektista voidaan pyytää tietoja. 



```
$ export token=a4331ec98754472032f031e18b16bd00
```


Tämä on taas tunnistautumiselementti, jota käytetään seuraavassa pyynnössä.


## Pyynnön tekeminen objektiin saatujen tietojen avulla

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```



- -X GET : HTTP GET -metodi
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg : objektin osoite
- -H "X-Auth-Token: $token" : tunnistautumiselementti 
- -I : curl-vaihtoehto pelkästään metadatan hakemiseen



Saat seuraavanlaisen vastauksen:


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
On erittäin suositeltavaa käyttää kirjastoja, jotka mahdollistavat tunnisteiden läpinäkyvän hallinnan. Näin voit yksinkertaisesti syöttää tunnuksesi kirjastoon pääsyä varten, ja tunnisteet muodostetaan, käytetään ja uusitaan automaattisesti ilman tarvetta hallita niitä sovellustasolla.

Kirjastoja on olemassa monia eri kielisinä. Lue lisää virallisesta listasta.


## Esimerkki Pythonilla
Voit asentaa kirjaston pip:iä käyttämällä.

```
$ pip install python-openstacksdk
```


Kun olet aloittanut kirjautumisen, tunnisteet muodostetaan taustalla.

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




## Esimerkki PHP:llä
Kirjaston asentamiseen tarvitaan php-curl ja compose

code]$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud[/code]

Skripti toimii myös konnektorilla, joka hallitsee tunnisteita. 


```
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
[Paluu Cloud-tuotteiden ohjeiden valikkoon Cloud]({legacy}1785)

