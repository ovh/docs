---
title: 'Gestión de los tokens'
excerpt: 'Gestión de los tokens'
slug: gestion_de_los_tokens
legacy_guide_number: g1872
section: OpenStack
---

## 

## Atención:
La información que contiene esta guía es válida para la versión 3.0 de la API de Keystone.


## Definiciones

- Endpoint: Dirección HTTP que apunta directamente a una API de un servicio, por ejemplo https://auth.cloud.ovh.net/v2.0 para el endpoint de autenticación, o https://image.compute.gra1.cloud.ovh.net/ para el endpoint de gestión de las imágenes de la zona GRA1.

- Token: Cadena de caracteres única asociada a una autenticación y a permisos de acceso. El usuario solicita un token proporcionando sus credenciales (usuario y contraseña) a la API de autenticación. El token generado se pone a disposición del usuario con una validez limitada de 24 horas. Un token puede ser «scoped» o «unscoped», es decir, que puede estar asociado a un «tenant» concreto o no estar asociado a ninguno.




## Principio de funcionamiento
La mayor parte de las peticiones enviadas a las API de OpenStack deben responder a un mecanismo de autorización. Este mecanismo funciona mediante la obtención de un token y su validación. A grandes rasgos, una petición funciona del siguiente modo, desde la autenticación hasta su ejecución:


- Solicitud de creación de token al endpoint de autenticación con las credenciales.
- Petición al endpoint del servicio deseado (storage, compute, network...) proporcionando el token como parámetro.
- La API del servicio obtiene el token y pregunta al servicio de autenticación si es válido.
- Si se confirma que es válido, la petición se tiene en cuenta y se ejecuta.


Como los tokens expiran una vez transcurrido su período de validez, deben renovarse cuantas veces sea necesario.

De igual manera, si es necesario revocar un token antes de que expire, puede hacerse desde la API.

Para más información, consulte la documentación de la [API de OpenStack](http://docs.openstack.org/api/quick-start/content/) y de los [tokens](http://docs.openstack.org/security-guide/identity/tokens.html).


## 
Las siguientes operaciones pueden realizarse manualmente. Por lo general se utilizan con fines pedagógicos o de depuración.

Es necesario cargar el entorno con un archivo openRC.

En este ejemplo, queremos obtener los metadatos de un objeto almacenado en el Public Cloud Storage. Las etapas son:


- 1. Solicitud de creación de un token.
- 2. Obtención de las variables «token ID» y «endpoint publicURL».
- 3. Consulta al objeto con la información obtenida.


La herramienta de línea de comandos cURL permite construir peticiones a partir de estos elementos.


## Solicitud de creación de un token

```
$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```



- -X POST: Método HTTP utilizado para enviar los datos.
- $OS_AUTH_URL/tokens: Acción sobre el elemento «tokens».
- -H "Content-Type: application/json": Formato de salida esperado en JSON.
- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}': Cuerpo de la consulta, que contiene la información de autenticación.
- python -mjson.tool: Herramienta Python que permite mostrar la salida de manera legible.


La respuesta del servidor tendrá el siguiente formato:


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




## Obtención de las variables «token ID» y «endpoint publicURL»
Estos dos datos aparecen en la salida del comando anterior.

El endpoint publicURL se indica en la sección «object-store» y la región correspondiente, en este caso «SBG1».


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


La dirección del endpoint del servicio de Object Storage permitirá preguntar la información sobre el objeto.


```
$ export token=a4331ec98754472032f031e18b16bd00
```


Ahora este token es el elemento de autenticación que se utilizará para la siguiente consulta.


## Petición al objeto con la información obtenida

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```


-X GET: Método HTTP GET
$endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: Dirección del objeto
-H "X-Auth-Token: $token": Elemento de autenticación
-I: Opción de curl para obtener solo los metadatos

La respuesta tendrá este formato:


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
Es altamente recomendable utilizar las librerías que permiten la gestión transparente de los tokens. De esa forma, simplemente proporcionando las credenciales de conexión a la librería, los tokens se generarán, utilizarán y renovarán automáticamente, sin tener que gestionarlos a nivel de aplicación.

Existen numerosas librerías en distintos lenguajes. Para más información, consulte la lista oficial.


## Ejemplo en Python
La librería se instala con pip:


```
$ pip install python-openstacksdk
```


Una vez establecida la conexión, los tokens se gestionan en segundo plano.


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




## Ejemplo en PHP
La instalación de la librería requiere php-curl y Composer.


```
$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud
```


También funciona con un conector que gestione los tokens.


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
 

