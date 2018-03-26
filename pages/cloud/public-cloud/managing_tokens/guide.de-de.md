---
title: Token-Verwaltung
excerpt: Token-Verwaltung
slug: token-verwaltung
legacy_guide_number: g1872
---


## 

## Achtung!
Alle Angaben in dieser Hilfe beziehen sich auf Version 2.0 der Keystone API.


## Definitionen

- Endpoint: HTTP-Adresse, die direkt auf die API eines Service zeigt, wie etwa https://auth.cloud.ovh.net/v2.0 für den Authentifizierungs-Endpoint oder https://image.compute.gra1.cloud.ovh.net/ für den Endpoint zur Image-Verwaltung der Zone GRA1.

- Token: Einmalige Zeichenkette für Authentifizierung und Zugriffsrechte. Ein Token wird vom Benutzer unter Angabe seiner Login-Daten über die Authentifizierungs-API angefordert. Das Token wird erstellt und ist dann 24 Stunden lang gültig. Ein Token kann "scoped" oder "unsocped" sein, also entweder an einen bestimmten Tenant gebunden oder eben nicht.




## Kurzüberblick
Der Großteil der Anfragen an die OpenStack APIs muss über einen Authentifizierungs-Prozess ablaufen. Dies funktioniert über die Erstellung von Tokens und deren Validierung.

Im Kurzüberblick läuft der gesamte Prozess folgendermaßen ab:

- Anfrage zu Erstellung eines Tokens über den Authentifizierungs-Endpoint mithilfe der Login-Daten:
- Anfrage an den Endpoint des gewünschten Service (Storage, Compute, Network, ...) unter Verwendung des zuvor erstellten Tokens:
- die API des betreffenden Service ruft das Token ab und fordert die Validierung durch den Authentifizierungs-Service an;
- wenn die Gültigkeit des Tokens bestätigt wurde, wird der Befehl ausgeführt.


Die Tokens haben jeweils nur eine begrenzte Gültigkeitsdauer; nach Ablauf muss entsprechend ein neues Token erstellt werden.

Ebenso können Sie ein nicht benötigtes Token über die API selbst ungültig machen.

Weitere Informationen finden Sie auch in der Dokumentation zur [OpenStack API](http://docs.openstack.org/api/quick-start/content/) und zum [Authentifizierungs-Mechanismus](http://docs.openstack.org/kilo/install-guide/install/apt/content/keystone-concepts.html).


## 
Die folgenden Operationen können manuell ausgeführt werden und werden meist zu pädagogischen Zwecken oder zum Debugging eingesetzt.

Sie müssen zunächst die Umgebung mithilfe der OpenRC-Datei laden.

In unserem Beispiel möchten wir die Metadaten-Informationen eines auf unserem Public Cloud Storage-Angebot gespeicherten Objekts abrufen. Hierfür sind folgende Schritte erforderlich:


- Anfrage zur Token-Erstellung;
- Abruf von Token-ID und publicURL Endpoint;
- Anfrage zum Objekt unter Verwendung der abgerufenen Informationen.


Alle Anfragen können über das Kommandozeilen-Programm cURL erstellt werden.


## Anfrage zur Token-Erstellung

```
$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```



- -X POST: HTTP-Methode zur Übermittlung der Daten

- $OS_AUTH_URL/tokens: Aktionen für Tokens

- -H "Content-Type: application/json": Ausgabeformat in JSON

- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}': Anfrage, m. a. W. die Authentifizierungs-Informationen

- python -mjson.tool: Python-Tool zur Anzeige der Ausgabe in lesbarem Format


Die Server-Antwort sieht dann etwa folgendermaßen aus:


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




## Abruf von Token-ID und publicURL Endpoint
Beide Informationen finden Sie in der Ausgabe auf den vorangegangenen Befehl.

Für den publicURL Endpoint müssen Sie im Abschnitt "object-store" und unter der passenden Region (hier "SBG1") nachschauen.


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


Es handelt sich dabei um die Endpoint-Adresse zu dem Object Storage Service, mit der Sie Informationen zum Objekt abrufen können.


```
$ export token=a4331ec98754472032f031e18b16bd00
```


Dieses Token ist das Authentifizierungs-Element, das Sie für die Anfrage im nächsten Schritt benötigen.


## Anfrage zum Objekt unter Verwendung der abgerufenen Informationen

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```



- -X GET: HTTP-Methode GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: Adresse des Objekts
- -H "X-Auth-Token: $token": Authentifizierungs-Element
- -I: Option curl, um nur die Metadaten abzurufen


Die Server-Antwort sieht dann etwa folgendermaßen aus:


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
Die Verwendung von Programmbibliotheken wird für eine transparente Verwaltung Ihrer Tokens dringend empfohlen. Auf diese Art liefern Sie der Library lediglich die Verbindungsdaten und die Tokens werden automatisch erstellt und erneuert, ohne dass Sie sich auf Applikationsebene damit befassen müssen.

Es gibt viele verschiedene Libraries in unterschiedlichen Sprachen. Weitere Informationen entnehmen Sie bitte der offiziellen Liste.


## Beispiel in Python
Die Installation der Library erfolgt mithilfe von pip.


```
$ pip install python-openstacksdk
```


Wenn die Verbindung hergestellt ist, werden die Tokens im Hintergrund verwaltet.


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




## Beispiel in PHP
Die Installation der Library erfordert php-curl und composer.


```
$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud
```


Möglich ist auch die Verwendung eines Konnektors zur Verwaltung der Tokens.


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
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

