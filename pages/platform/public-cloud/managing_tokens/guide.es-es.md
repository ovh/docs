---
title: 'Gestión de los tokens'
excerpt: 'Cómo utilizar los token a través de la API Keystone'
legacy_guide_number: g1872
updated: 2023-06-15
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

**Descubra cómo configurar las conexiones a las API keystone en su servicio utilizando los tokens.**

> [!primary]
>
> La siguiente información es válida para la versión 3.0 de la API de
> Keystone.
> 

## Procedimiento

### Definiciones

- Endpoint : Dirección HTTP que apunta directamente a una API de un servicio. por ejemplo, [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) para el punto de autenticación o [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/) para el punto de gestión de imágenes de la zona GRA1.

- Token: Cadena de carácter única vinculada a la autenticación y a los derechos de acceso. El usuario solicita un token proporcionando sus credentials (información de login) a la API de autenticación. Se genera y proporciona con una validez limitada de 24 horas. Un token puede ser "scoped" o "unscoped", es decir, puede estar directamente relacionado a un tenant o no estar vinculado a ningún tenant.


### Principio global

La mayoría de las solicitudes presentadas a las API de OpenStack deben responder a un mecanismo de autorización. Este mecanismo funciona mediante la obtención de token (jeon en francés) y validación de este. A continuación explicamos cómo funciona una llamada desde la autenticación hasta la ejecución de la llamada.

- Solicitud de creación de token en el punto de autenticación con los credentials
- Consulta sobre el punto del servicio deseado (almacenamiento, compute, network...) proporcionando el token como parámetro
- La API del servicio recupera el token y solicita la verificación de validez ante el servicio de autenticación
- Si se verifica la validez, la llamada se toma en cuenta y se ejecuta

Como los tokens tienen un período de validez definido, expiran y deben renovarse siempre que sea necesario.

De la misma forma, si debe revocarse un token antes de su fecha de expiración, puede hacerlo a través de la API.

Para más información, consulte la documentación de [OpenStack de la API](https://docs.openstack.org/keystone/train/api_curl_examples.html){.external}.


### Operaciones manuales

Las siguientes operaciones pueden realizarse manualmente, generalmente se utilizan con fines pedagógicos o de debuging.

Es necesario cargar el entorno utilizando el archivo openRC. Para ello, le recomendamos que descargue y utilice el archivo openrc.sh que encontrará en la interfaz Horizon. que le permitirá acceder a todas las variables de entorno necesarias para realizar los siguientes comandos.

Para conectarse a Horizon y descargar el archivo, consulte [esta guía](/pages/platform/public-cloud/introducing_horizon/).

En nuestro ejemplo, queremos obtener la información de metadata de un objeto almacenado gracias a la solución Public Cloud Storage. Los pasos son:

- Solicitud de creación de un token
- Obteniendo el ID de la variable y el punto públicoURL
- Consulta del objeto con la información obtenida

La herramienta en línea de comandos cURL permite construir peticiones de todas las piezas.


#### Etapa 1: Solicitud de creación de un token

```bash
curl -X POST ${OS_AUTH_URL}v${OS_IDENTITY_API_VERSION}/auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | python -mjson.tool
```

La respuesta del servidor es:


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
      "name": "NAME OF THE PROJECT"
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
        "name": "neutrón"
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
      "name": "NAME OF THE USER"
    },
    "audit_ids": [
      "IuNOR-lKQ9GJGQd8taWBnQ"
    ],
    "issued_at": "2020-01-16T14:53:32.000000Z"
  }
}
```


#### Etapa 2: Recopilación de las variables token ID y lugar públicoURL

Ambas informaciones están disponibles en la salida del comando anterior.

Para el dominio públicoURL, debe buscar en la sección "object-store" y la región adecuada, en este caso "SBG".


```bash
export endpoint="https://storage.sbg.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

Es la dirección del punto del servicio de object storage que permite buscar información sobre el objeto.


```bash
export token=$(curl -is -X POST ${OS_AUTH_URL}v${OS_IDENTITY_API_VERSION}/auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "name": "'$OS_TENANT_NAME'", "domain": { "id": "default" } } } } }' | grep -i '^X-Subject-Token' | cut -d" " -f2)
```

Este token es ahora el elemento de autenticación que se utilizará para la siguiente petición.


#### Etapa 3: Consulta del objeto con la información obtenida

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- -X GET: Método HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: dirección del objeto
- -H "X-Auth-Token": $token": elemento de autenticación
- -I: opción curl para obtener solo las metadatas

La respuesta es:


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


### Gestión automática: librería y SDK
Es altamente recomendable utilizar librerías que permitan la gestión transparente de los tokens. De esta forma, al proporcionar simplemente los credenciales de conexión a la librería, los tokens se generarán, utilizarán y renovarán automáticamente sin tener que gestionar los tokens a nivel aplicativo.

Existen numerosas librerías en los diferentes lenguajes. Consulte [la lista oficial para más información](https://wiki.openstack.org/wiki/SDKs){.external}.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
