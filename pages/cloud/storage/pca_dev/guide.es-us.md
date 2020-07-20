---
title: Guía para el desarrollador
slug: pca/dev
excerpt: Manual de Public Cloud Archive de OVH para desarrolladores.
section: Public Cloud Archive
---


## Que es Public Cloud Archive de OVH?
[Public Cloud Archive](https://www.ovh.es/public-cloud/storage/cloud-archive/){.external} es una solución de almacenamiento a un precio increíblemente bajo destinada al archivado de datos de larga duración.

Public Cloud Archive de OVH está basado en [OpenStack Swift](https://docs.openstack.org/developer/swift/){.external}, un almacén de objetos *open source* de alta disponibilidad, distribuido y robusto, que permite a los desarrolladores acceder a una infraestructura de almacenamiento de datos altamente escalable, fiable y barata que OVH utiliza para implementar algunas de sus soluciones internas.

Public Cloud Archive está diseñado para datos que se consultan de forma muy ocasional: cuanto menor sea la frecuencia con la que se solicite la operación de desbloqueo de un archivo, menor será la latencia para recuperarlo. Esto convierte a Public Cloud Archive de OVH en una solución ideal cuando se necesita almacenamiento duradero y barato sin tener que esperar muchas horas para recuperar datos importantes cuando los necesite.

Si debe acceder a sus datos con frecuencia, le recomendamos que utilice nuestra solución [Public Cloud Storage](https://www.ovh.es/public-cloud/storage/object-storage/){.external}.



> [!primary]
>
> Si necesita un kit de desarrollo de software (SDK), consulte la lista oficial de OpenStack.
> 

Esta guía ofrece explicaciones en profundidad de los principales conceptos de la solución Public Cloud Archive de OVH, tales como regiones, cuentas, contenedores, archivos y cómo trabajar con esos recursos utilizando la API OpenStack Swift.


## Autenticacion
Como Public Cloud Archive de OVH está basado en OpenStack Swift, la autenticación se realiza como los demás servicios de OpenStack: utilizando la capa de gestión de usuarios [Keystone](https://docs.openstack.org/developer/keystone/){.external}.



> [!primary]
>
> Viste la web oficial de la API OpenStack Keystone aquí.
> 

Al autenticarse recibirá un **token de autenticación** (*authentication token*), un **ID de proyecto** (*project id*) y un **catálogo de servicios** (*service catalog*) que le permitirán utilizar más servicios de OpenStack.

El token se transmitirá en todas las interacciones con las API de un determinado servicio. Un token es válido para un **ámbito** (*scope*) determinado y un período de tiempo, especificado por el servicio de autenticación remota. La generación de tokens es una operación sujeta a restricciones: un usuario no puede obtener más de 60 tokens por minuto.

A continuación se ofrece la sintaxis de una autorización *unscoped*, lo que significa que el token será válido para el ID de proyecto por defecto. Consulte la API Keystone si quiere utilizar una autorización *scoped*.

**Sintaxis:**

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
**Ejemplo de respuesta:**

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

## Regiones
Public Cloud Archive de OVH está disponible en distintas regiones geográficas. Las regiones están formadas por zonas, que a su vez están formadas por un conjunto de recursos que pueden estar lozalizados en distintos datacenters. Cada región tiene un *service endpoint*. En el catálogo de servicios de la etapa de «[Autenticación](#autenticacion){.internal}» encontrará una lista exhaustiva de las regiones de Public Cloud Archive y Public Cloud Storage de OVH.


## Politicas de almacenamiento
Los datos almacenados tanto en Object Storage como en Public Cloud Archive de OVH son asignados por una capa de almacenamiento que es susceptible de utilizar diversas políticas. Como norma general, las políticas de almacenamiento se diferencian entre sí en los medios de almacenamiento que utilizan o en el algoritmo de redundancia responsable de colocar los datos para maximizar la durabilidad global.

Las políticas de almacenamiento son las siguientes:

Política para la solución Public Cloud Archive de OVH. Optimizada para almacenamiento de larga duración, con acceso poco frecuente. Los datos se almacenan utilizando un [código de borrado](http://searchdatacenter.techtarget.com/es/definicion/Codigo-de-borrado){.external}, caracterizado por un *code rate* de 0,8, formado por 12 fragmentos de datos y 3 fragmentos de paridad. Su acceso está regulado por una latencia de recuperación que puede variar desde varios minutos hasta horas, en función de las operaciones previas.

Política para la solución Public Cloud Storage de OVH. Optimizada para almacenamiento en caliente con acceso frecuente. Los datos se replican tres veces, escribiendo 3 copias de cada objeto, y el acceso a ellos es inmediato.


## Cuentas
Cada proyecto de Public Cloud de OVH está identificado con un ID único. Para que usted pueda administrar sus datos de manera organizada, Public Cloud Archive y Public Cloud Storage de OVH proporcionan un concepto fundamental llamado **cuenta**. Una cuenta es como un proyecto de almacenamiento cloud; es capaz de contener conjuntos de datos llamados contenedores. Una cuenta tiene el formato AUTH_<project_id>, donde el ID del proyecto procede de la [Autenticación](#autenticacion){.internal} del usuario.


## Contenedores
Public Cloud Archive de OVH es un servicio de almacenamiento cloud. Para poder transferir sus archivos, es necesario crear previamente un contenedor en una de las regiones de Public Cloud de OVH.

En este apartado explicamos cómo trabajar con contenedores utilizando la [API Swift de OpenStack](https://developer.openstack.org/api-ref/object-storage/){.external}.


### Crear un contenedor
Para crear un contenedor, es necesario indicar un nombre y una política de almacenamiento. Deberá también elegir una región seleccionando el *service endpoint* al que haya enviado la petición de creación. Puede crear tantos contenedores como desee y, dentro de ellos, tantos archivos como necesite.

Puede crear contenedores de cualquiera de las formas que se indican a continuación:

- En la sección «Cloud» del área de cliente de OVH.
- A través de pasarelas para protocolos de transferencia basados en SSH.
- Mediante la API de OVH.
- Mediante la API de OpenStack.

Si utiliza la API Swift de OpenStack, la política de almacenamiento por defecto (si no se especifica una distinta al crear un contenedor) es **PCS**. Para crear un contenedor de Public Cloud Archive de OVH, es obligatorio indicar la política correspondiente.



> [!warning]
>
> La política de almacenamiento de un contenedor no se puede modificar posteriormente.
> 

**Sintaxis:**

```
 PUT /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 X-Storage-Policy: PCA
 ```
**Ejemplo de petición:**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 X-Storage-Policy: PCA
 ```
**Ejemplo de respuesta:**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 X-Trans-Id: tx2acf06eb506d441ab605a-0058c15384
 X-Openstack-Request-Id: tx2acf06eb506d441ab605a-0058c15384
 Date: Thu, 09 Mar 2017 13:07:17 GMT
 ```

### Consultar el inventario de un contenedor
Cuando se sube un archivo a Public Cloud Archive de OVH, el inventario del contenedor se actualiza con información sobre ese archivo. Dicho inventario está disponible para su lectura en cuanto se reciben todos los datos del archivo.

Para poder soportar las particularidades del almacenamiento de larga duración, OVH ha modificado ligeramente la generación de dicho inventario en comparación con las infraestructuras convencionales de OpenStack Swift, con el objetivo de incluir información adicional relativa a su procedimiento de almacenamiento concreto. De esta manera, usted dispondrá de información importante sobre su archivo, como su estado de desbloqueo y el período de recuperación necesario para poder descargarlo.

**Sintaxis:**

```
 GET /v1/<account>/<container>?policy_extra=true HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: <token>
 ```
**Ejemplo de petición:**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives?policy_extra=true HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Ejemplo de respuesta:**

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

### Eliminar un contenedor
Para eliminar un contenedor, es necesario eliminar previamente todos los archivos que contiene. Una vez esté vacío, podrá eliminar el contenedor de forma muy fácil. Para ello, solo necesitará el nombre del contenedor.

**Sintaxis:**

```
 DELETE /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Ejemplo de petición:**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Ejemplo de respuesta:**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txc578ec094c764908a9feb-0058c153cc
 X-Openstack-Request-Id: txc578ec094c764908a9feb-0058c153cc
 Date: Thu, 09 Mar 2017 13:08:28 GMT
 ```

## Archivos
Public Cloud Archive de OVH permite transferir objetos genéricos llamados archivos. Un archivo puede tener cualquier tamaño, y su contenido puede ser de cualquier tipo. Los archivos se diferencian de los objetos convencionales de OpenStack Swift en que tienen un atributo adicional: el **estado de recuperación** o *retrieval state*, debido a que los archivos pueden estar bloqueados o desbloqueados.


### Subir un archivo
Los archivos subidos a Public Cloud Archive de OVH son bloqueados de inmediato por la capa de almacenamiento. Para poder recuperarlos, deberá desbloquearlos previamente.

Puede subir archivos de hasta 5 GB en una sola operación. Los archivos mayores se dividirán en segmentos de tamaño inferior a 5 GiB, que aparecerán recogidos en un **manifiesto** (*manifest*). Un manifiesto es un concepto importante de OpenStack Swift que permite soportar objetos grandes. [Aquí](https://docs.openstack.org/developer/swift/overview_large_objects.html){.external} encontrará más información. El tamaño mínimo de un segmento es de 1 byte. Los objetos SLO (*Static Large Objects*) están limitados a 1000 segmentos, y el tamaño máximo de un manifiesto es de 2 MiB.

Cuando suba archivos a Public Cloud Archive de OVH, es muy importante que compruebe que la copia de los datos local y la remota son idénticas. Esto garantiza que los datos recibidos en remoto son correctos y que nadie ha alterado su contenido.

- Cuando suba archivos segmentados, deberá calcular el checksum md5 de cada segmento y luego formar una cadena con la concatenación de cada checksum md5 en el orden correcto. El checksum md5 de dicha cadena deberá transmitirse en la petición de creación del manifiesto.
- Cuando suba archivos no segmentados, deberá calcular su checksum md5 e incluirlo en la petición de creación del archivo.

**Sintaxis:**

```
 PUT /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 Content-Length: <archive_size>
 Etag: <archive_md5sum>
 ```
**Ejemplo de petición:**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 1024
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
 ```
**Ejemplo de respuesta:**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 Last-Modified: Thu, 09 Mar 2017 15:02:12 GMT
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 X-Trans-Id: txa1e833e835c749a883ff4-0058c16e71
 X-Openstack-Request-Id: txa1e833e835c749a883ff4-0058c16e71
 Date: Thu, 09 Mar 2017 15:02:18 GMT
 ```

### Desbloquear un archivo
Public Cloud Archive de OVH permite almacenar datos a un coste mínimo. Como contrapartida, la latencia en el período de recuperación aumenta.

Para acceder a sus archivos, deberá enviar una petición de desbloqueo con el nombre del contenedor y del archivo correspondientes.

Las peticiones de desbloqueo de archivos son idénticas a las peticiones de descarga de archivos. La única diferencia reside en la respuesta enviada por Public Cloud Archive de OVH, y es una particularidad de la infraestructura subyacente de OpenStack Swift implementada por OVH. Una vez se ha recibido una petición de desbloqueo, esta no puede cancelarse. Las peticiones de desbloqueo sucesivas solo permitirán obtener la duración estimada de la operación.

**Sintaxis:**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Ejemplo de petición:**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Ejemplo de respuesta:**

```
 HTTP/1.1 429 Too Many Requests
 Retry-After: 637
 Content-Length: 64
 X-Trans-Id: txe9fad9afaf7b4950a16af-0058c17f11
 X-Openstack-Request-Id: txe9fad9afaf7b4950a16af-0058c17f11
 Date: Thu, 09 Mar 2017 16:13:05 GMT
 
 <html><h1>Too Many Requests</h1><p>Too Many Requests.</p></html>
 ```

### Descargar un archivo
Una vez que el archivo esté desbloqueado en Public Cloud Archive de OVH, podrá descargarlo durante un plazo de 24 horas, con transferencia y frecuencia de acceso ilimitadas. Una vez transcurrido el período de recuperación, el archivo volverá a bloquearse.



> [!primary]
>
> Debido a que Public Cloud Archive de OVH está optimizado para el almacenamiento de larga duración, si se recibe una nueva petición de desbloqueo poco después de la expiración del período de recuperación, esta tardará mucho más tiempo en realizarse.
> 

**Sintaxis:**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Ejemplo de petición:**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Ejemplo de respuesta:**

```
 HTTP/1.1 200 OK
 Content-Length: 1024
 Content-Type: application/octet-stream
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
 ```

### Eliminar un archivo
Al contrario que la descarga de archivos, que conlleva una latencia, la eliminación de archivos es una operación de un solo paso que Public Cloud Archive procesa de forma de inmediata.



> [!alert]
>
> Tenga en cuenta que esta operación es irreversible y no se puede cancelar.
> 

Para eliminar un archivo, deberá indicar su nombre y el contenedor en el que está almacenada.

**Sintaxis:**

```
 DELETE /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Ejemplo de petición:**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive1.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Ejemplo de respuesta:**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txcf8e98d30f714c85a323d-0058c16813
 X-Openstack-Request-Id: txcf8e98d30f714c85a323d-0058c16813
 Date: Thu, 09 Mar 2017 14:35:00 GMT
 ```