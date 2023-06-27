---
title: 'Primera configuración de un dominio en la CDN'
excerpt: 'Cómo configurar un dominio por primera vez en el servicio CDN de OVH'
updated: 2018-02-21
---

**Última actualización: 26/11/2018**

## Objetivo

Para empezar a utilizar la solución Content Delivery Network (CDN) de OVH, es necesario declarar los dominios desde el área de cliente y configurar ciertos parámetros para poder utilizar este servicio de manera óptima.

**Esta guía explica qué acciones debe realizar en el área de cliente para poder utilizar la CDN de OVH e incluye buenas prácticas de uso.**


## Requisitos

- Tener contratada la solución [CDN de OVH](https://www.ovh.es/cdn/){.external}.
- Tener acceso a la gestión de la zona DNS del dominio.
- Tener acceso al [área de cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.


## Procedimiento

### Añadir el dominio a la CDN

En primer lugar, es necesario añadir el subdominio a la CDN para que esta última acepte las peticiones HTTP(S) relativas al mismo.

Para ello, en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} acceda a la sección `Dedicado`{.action}. En la columna izquierda, haga clic en `NAS y CDN`{.action} y seleccione el servicio CDN correspondiente.

Haga clic en el atajo `Añadir un dominio a la CDN`{.action}.

![Área de cliente CDN](images/cdn_customer_panel.png){.thumbnail}

En el cuadro de diálogo, introduzca el subdominio que quiera añadir a la CDN.

![Añadir un subdominio a la CDN](images/add_cdn_domain_step_1.png){.thumbnail}

A continuación, seleccione un **backend** que ya exista (si no es la primera vez que añade un dominio) o introduzca la dirección IP de un nuevo backend.

![Añadir un backend](images/add_cdn_domain_step_2.png){.thumbnail}


Al cabo de un momento, el dominio estará disponible en el área de cliente y podrá configurarlo.

Para que las peticiones pasen por nuestra infraestructura CDN correctamente, debe modificar la zona DNS del subdominio y crear un registro CNAME que apunte hacia **cdn.YourDomainName.ovh.web.cdn.anycast.me** (sustituya «cdn.YourDomainName.ovh» por su subdominio).


> [!warning]
>
> La creación del registro CNAME es importante, ya que permite que la función *bypass* funcione correctamente. Si utiliza un registro de tipo A, el servicio CDN funcionará, pero no podrá disfrutar de la función *bypass*.
>


Si la zona DNS de su dominio está alojada en OVH, puede añadir el registro desde el área de cliente del siguiente modo (no olvide sustituir el subdominio indicado en la imagen por el suyo):

![Registro CNAME](images/cname_field.png){.thumbnail}

 

### Comprobar que un archivo está en caché
Para comprobar que un archivo esté almacenado en la caché, ejecute el siguiente comando:

```sh
curl -I http://sub.dominio/
```

Obtendrá un resultado similar al siguiente:

```bash
HTTP/1.1 200 OK
Date: Tue, 09 Jan 2018 10:30:57 GMT
Content-Type: text/plain
Last-Modified: Fri, 29 Dec 2017 13:30:42 GMT
ETag: W/"(5a464382-4ddf"
Expires: Wed, 09 Jan 2019 10:30:58 GMT
X-IPLB-Instance: 5905
Vary: Accept-Encoding
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 51.254.41.128/26
X-Cacheable: Matched cache
Accept-Ranges: bytes
Connection: keep-alive
```

Si el archivo se envía desde la caché, podrá ver **Matched cache** en la respuesta del comando.

También puede ver el punto de presencia (PoP) desde el que se envía el archivo (**rbx1** en el ejemplo).

Esta información también puede obtenerse utilizando el navegador. Por ejemplo, en Firefox se encuentra en las herramientas de desarrollo, seleccionando `Red`{.action} (atajo de teclado: F12). Al hacer clic en el archivo que quiera comprobar, podrá ver la respuesta HTTP y sus cabeceras.


### Razones para utilizar un subdominio específico para la CDN en lugar del dominio principal

No es posible añadir un registro CNAME a un dominio principal. Se trata de una limitación impuesta por las normas RFC, que no es posible eludir a nivel de la zona DNS.

Además, atribuir un dominio específico a los archivos que quiera almacenar en caché le facilitará la gestión tanto de los archivos como de la facturación:

- **Archivos:** Solo se guardarán en caché los archivos cuya petición se envíe desde el subdominio. De este modo, podrá conservar en el dominio principal los archivos dinámicos o aquellos que no quiera guardar en caché. Por otro lado, así también podrá determinar rápidamente el origen de un problema de visualización en su sitio web.
- **Facturación:** Todo el tráfico (almacenado en caché o no) que pasa por la CDN se factura. De esta forma es posible limitar el número de peticiones no útiles que se realizan hacia la CDN para optimizar su uso.


### Otras acciones necesarias para configurar un nuevo subdominio en la CDN

Si quiere configurar un nuevo subdominio para utilizar la CDN, seguramente deberá modificar determinados parámetros en el sitio web y el servicio web.

En primer lugar, asegúrese de que su servicio web responde correctamente al subdominio. Para ello, configure un *vhost* para dicho dominio, ya sea con su propia carpeta de destino o como alias de otro dominio.

Si el dominio responde correctamente en su servicio web, solo tendrá que editar el código HTML para modificar el origen de los archivos que deben pasar por la CDN y, por último, asegurarse de que reciben las peticiones enviadas a través del subdominio.

 
## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.