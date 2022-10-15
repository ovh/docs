---
title: Object Storage Swift - Colocar un contenedor de Object Storage detrás de un nombre de dominio
excerpt: Colocar un contenedor de Object Storage detrás de un nombre de dominio
slug: pcs/link-domain
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g2006
order: 120
---

## Objetivo

Si crea un contenedor de tipo público, todo el mundo podrá acceder a sus datos, lo cual es una buena opción para compartir sus archivos en internet.

Sin embargo, para poder compartir sus archivos con sus amigos, por ejemplo, deberá proporcionarles una larga URL que suele ser difícil de retener. Además, también es posible que quiera utilizar esos objetos en su sitio web sin tener que utilizar por ello un dominio distinto.

Esta guía explica cómo configurar un dominio en sus contenedores para facilitar el acceso a ellos proporcionando una URL personalizada.

## Requisitos

Para seguir todos los pasos de esta guía, es necesario:

- [Añadir espacios de almacenamiento](https://docs.ovh.com/gb/en/storage/pcs/create-container/) (EN)
- Tener un dominio registrado

## La teoría
Cuando llega una petición HTTP al Object Storage de OpenStack, se realiza una comprobación en la cabecera «host»: si esta es distinta del nombre real del host, el sistema lo considera como un registro mapeado y envía una petición DNS para obtener el registro DNS completo que corresponde al host.

Si se encuentra un registro DNS, la respuesta se dividirá para encontrarlo y extraer el contenedor, la cuenta y el objeto buscado, y se reescribirá la petición.

El cliente debe haber colocado correctamente la cabecera «host». Si no, el Object Storage no podrá detectarla y procesar la petición.


## HTTP y HTTPS
Esta funcionalidad funciona correctamente con HTTP. En cambio, obtendrá un error de certificado si utiliza HTTPS, ya que nosotros no tenemos su certificado privado.

Seguirá pudiendo utilizar HTTPS, pero recibirá alertas relativas al certificado en la mayoría de los navegadores recientes.


## Registro CNAME o TXT
De estos dos registros, solo puede utilizarse uno al mismo tiempo:


- CNAME: Es el registro histórico y por defecto. Utilícelo si puede gestionar la zona DNS. Seguirá a nuestro punto de acceso automáticamente, aunque cambie la dirección IP.

- TXT: Utilícelo solo si necesita configurar el dominio en un soporte diferente, como una CDN. En este caso, deberá controlar si cambia la dirección IP del punto de acceso. También puede utilizar un CNAME «virtual» si lo permite su proveedor de CDN.




## Con CNAME
Elija un subdominio (por ejemplo, static.mypersonaldomain.ovh), añada un registro de tipo CNAME e indique el destino como se indica a continuación.

Para que sea entendido por el Object Storage, el CNAME debe respetar las siguientes reglas (no olvide sustituir las variables, indicadas entre corchetes y en mayúsculas, por el valor correspondiente):


```
[NOMBRE_DEL_CONTENEDOR].auth-[PROJECT_ID].storage.[REGIÓN].cloud.ovh.net.
```


Por ejemplo, para un contenedor llamado «staticct» y un proyecto «123xxxx456» localizado en SBG:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Así pues, el registro DNS en este caso será:


```
static IN CNAME staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```




## Con TXT
Añada un registro de tipo TXT como se indica a continuación.

Para que sea entendido por el Object Storage, el TXT se construye con «_swift-remap.» seguido del subdominio. Por ejemplo, para el subdominio static.mypersonaldomain.ovh:


```
_swift-remap.static
```


Al igual que el CNAME, debe respetar las siguientes reglas (no olvide sustituir las variables, indicadas entre corchetes y en mayúsculas, por el valor correspondiente):


```
[NOMBRE_DEL_CONTENEDOR].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


Por ejemplo, para un contenedor llamado «staticct» y un proyecto «123xxxx456» localizado en SBG:


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Así pues, el registro DNS en este caso será:


```
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Si no quiere utilizar un subdominio, puede hacer lo siguiente:


```
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Por último, hay que añadir un registro A para el (sub)dominio apuntando a la dirección IP del Object Storage de Public Cloud. Puede obtenerla con los siguientes comandos:


```
dig storage.sbg.cloud.ovh.net
dig storage.gra.cloud.ovh.net
dig storage.bhs.cloud.ovh.net
```



## Atención
El nombre del contenedor no permite los siguientes caracteres:


- [ . ]
- [ _ ] (según el proveedor de DNS)
- letras mayúsculas


Además, es necesario sustituir «auth-ProjectID» por «auth_ProjectID».


## 
 

