---
title: Managing tokens
excerpt: Managing tokens
slug: managing_tokens
legacy_guide_number: g1872
section: API reference/CLI
---


## 

## Warning!
The information in this guide applies to version 2.0 of the Keystone API.


## Definitions

- Endpoint: HTTP address pointing directly to a service's API. For example https://auth.cloud.ovh.net/v2.0 for the authentication endpoint or https://image.compute.gra1.cloud.ovh.net/ for the GRA zone image management endpoint. 


- Token: A unique string of characters used to authenticate and access resources. The user requests the token by entering his/her credentials (login details) to the authentication API. The token is generated and it is valid for 24 hours. A token can be "scoped" or "unscoped", by which we mean that it can be tied to a particular tenant or not.




## Outline of a request
Most requests sent to the OpenStack API must follow an authorisation procedure, which involves generating a token and validating it.

Here is an outline of how a request works from authentication to completion.

- Request token creation from authentication endpoint, using credentials
- Send request to the endpoint of the service required (storage, compute, network...) providing the token
- The service API retrieves the token and requests validation from authentication service
- If valid, the call is executed 


Tokens are finite, they expire and must be renewed when necessary. 

You can also use the API to revoke a token before it expires. 

For more information, see the [OpenStack API](http:http://developer.openstack.org/api-guide/quick-start/) documentation.


## 
Manual operations are typically used for educational or debugging purposes.

To run them, you must set your environment using the OpenStack RC file. 

In our example we will retrieve the meta-data information for an object that is stored using your Public Cloud Storage solution:


- Request token creation
- Retrieve the token ID variables and publicURL endpoint
- Make a request on the object using the information retrieved


Any request can be built using the cURL command line tool.


## Request token creation

```
$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```



- -X POST: HTTP method used to send data

- $OS_AUTH_URL/tokens: action on token elements 

- -H "Content-Type: application/json": format of the request in JSON

- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}': body of the request ie. the authentication information 

- python -mjson.tool: python tool that allows you to view the result in a readable format


The server response will look like this:


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




## Getting the "token ID" and "endpoint publicURL" variables
These two pieces of information are available in the results obtained by the above command.

To retrieve the publicURL endpoint, you need to look in the "endpoints" section and the corresponding "Region" (in this example, "SBG1").


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


It is the endpoint address of the Object Storage service that lets you to retrieve information about the object.


```
$ export token=a4331ec98754472032f031e18b16bd00
```


This token is the authentication element to use for the next request


## Send an object request with the information retrieved

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```



- -X GET: method HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: object address
- -H "X-Auth-Token: $token": authentication element
- -I: curl option for retrieving the metadata only 


You will get the following response:


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
We strongly recommend using libraries that allow for transparent token management. In this way, you can simply provide credentials to access the library and the tokens are automatically generated, used and renewed without you having to manage them at application level. 

There are many libraries in different languages. For more information, see the official list.


## Example in Python
You can install the library using pip.

```
$ pip install python-openstacksdk
```


After starting the connection, the tokens are generated in the background.

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




## Example in PHP
You need php-curl and compose to install the library


```
$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud
```


The script also works with a "plug" that will handle tokens.


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
 

