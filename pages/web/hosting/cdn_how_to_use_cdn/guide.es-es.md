---
title: 'Acelerar un sitio web utilizando la CDN'
excerpt: 'Cómo acelerar la carga de un sitio web en el alojamiento utilizando el servicio CDN'
slug: guia_de_uso_del_acelerador_geocache_en_un_alojamiento_web
legacy_guide_number: g1290
section: 'Optimización del sitio web'
---

**Última actualización: 19/3/2020**

## Objetivo

Si desea mejorar la experiencia de sus usuarios acelerando la carga de su sitio web, la técnica más eficaz es activar una CDN <i>(</i>siglas en inglés de Content Delivery Network que significan red de entrega de contenidos<i>)</i>. Esta permite guardar en caché los archivos estáticos, como imágenes, CSS y JavaScript en los servidores que se encuentran más cerca de sus clientes.

**Cómo gestionar la opción CDN de su alojamiento web.**

## Definición

**¿Cómo funciona una CDN?**

La CDN<i> (</i>siglas en inglés de Content Delivery Network que significan red de entrega de contenidos<i>)</i> es literalmente una red dedicada a la entrega de contenidos. Para mostrar el contenido de su sitio web, la CDN utiliza varios servidores repartidos por todo el mundo. Cuanto más cerca estén los servidores de los usuarios, más rápida será la carga de su sitio web en sus dispositivos.

Para funcionar, cada servidor guarda en memoria caché una parte de su sitio web. Siempre se recomienda incluir en ellos los archivos llamados estáticos, como las imágenes, los archivos JavaScript y CSS que permiten el buen funcionamiento de su sitio web, pero rara vez se modifican.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Tener contratado un [plan de alojamiento web](https://www.ovh.es/hosting/){.external}.

## Procedimiento

###  Activar la opción CDN

> [!primary]
> 
> La opción CDN ya está incluida en los planes de alojamiento web Performance.

####  Si su alojamiento web no cuenta con una CDN

Inicie sesión en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external} y seleccione `«Web»`{.action}. En la barra de servicios a la izquierda, haga clic en `«Alojamientos»`{.action} y seleccione el alojamiento correspondiente. Haga clic en `«...»`{.action} a la derecha de «Opción CDN» y, seguidamente, en `«Contratar una CDN»`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Se le redirigirá a la generación del pedido. Unos minutos después de haber abonado el pedido, su servicio estará disponible.

#### Si la CDN ya está activada en su alojamiento web

Inicie sesión en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external} y seleccione `«Web»`{.action}. En la barra de servicios a la izquierda, haga clic en `«Alojamientos»`{.action} y seleccione el alojamiento correspondiente. En la pestaña `«Multisitio»`{.action}, haga clic en el icono con forma de rueda dentada a la derecha de la entrada multisitio y, seguidamente, pulse `«Modificar»`{.action}.

Marque la opción «Activar la CDN», haga clic en `«Siguiente»`{.action} y, seguidamente, en `«Validar»`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> Si añade un nombre de dominio externo a OVHcloud en multisitio al alojamiento web, debe indicar la dirección IP de la CDN de su alojamiento en la zona DNS del nombre de dominio.<br>
> Consulte la [lista de direcciones IP de los clústeres y alojamientos web](../lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/){.external} para saber qué dirección IP corresponde a la CDN de su clúster.

 
**¿Por qué no puedo disponer de una IP geolocalizada con la opción CDN?** <br>
<br>
La CDN utiliza el principio de las direcciones IP Anycast. Según su geolocalización, hará peticiones a diferentes servidores, lo que reducirá el tiempo de carga de sus archivos estáticos de forma eficaz. Por ello, de nada sirve la geolocalización de la dirección IP. <br>
En lo relativo al SEO (posicionamiento en los motores de búsqueda), la velocidad de carga de su sitio web reviste mayor importancia que la geolocalización de la dirección IP de su alojamiento.


### ¿Cómo guardar en caché los archivos en la CDN?

**Con un CMS**

Los principales sistemas de gestión de contenidos (CMS) distribuyen numerosos complementos que permiten configurar el almacenamiento en caché de los archivos estáticos para que la CDN los guarde automáticamente. Hay otros que permiten la configuración automática de los archivos estáticos activando el almacenamiento en caché integrado al sistema de gestión de contenidos. Para más información, consulte la documentación oficial del sistema de gestión de contenidos que utilice o del editor del complemento.

**Sin CMS**

En caso de no utilizar ningún sistema de gestión de contenidos, puede disponer de la caché de la CDN. Para ello, debe añadir encabezados en las peticiones HTTP. Existen numerosas técnicas que permiten añadir encabezados. Una de las más sencillas es establecer reglas en un fichero .htaccess en función de las extensiones de los archivos.

```htaccess
1. # Caché de las imágenes durante una semana
2. <FilesMatch "\.(jpg|jpeg|png|gif)$">
3. Header set Cache-Control "max-age=604800, public"
4. </FilesMatch>
5. 
6. # Caché de los JavaScript y CSS durante un mes
7. <FilesMatch "\.(js|css)$">
8. Header set Cache-Control "max-age=2592000"
9. </FilesMatch>
```
> [!warning]
>
> El almacenamiento en caché a través de los encabezados HTTP permite almacenar en caché tanto en la CDN como en el navegador de sus usuarios. Así, para que sus visitantes no visualicen una versión en caché muy antigua, se recomienda modificar los nombres de los archivos en cada nueva versión.
> 



### Vaciar la caché de la CDN

En ocasiones, resulta útil vaciar la caché de la CDN, principalmente cuando se actualizan los archivos estáticos. Por ejemplo, cuando pone en línea una nueva versión de su sitio web. En dicho caso, vacíe por completo la caché de la CDN.

Inicie sesión en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external} y seleccione `«Web»`{.action}. En la barra de servicios a la izquierda, haga clic en `«Alojamientos»`{.action} y seleccione el alojamiento correspondiente. Haga clic en `«...»`{.action} a la derecha de «Opción CDN» y, seguidamente, en `«Vaciar la caché»`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### Desactivar la opción CDN

Esta acción permite desactivar la CDN en una o varias de sus entradas multisitio sin eliminar la opción CDN de su alojamiento web.

Inicie sesión en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external} y seleccione `«Web»`{.action}. En la barra de servicios a la izquierda, haga clic en `«Alojamientos»`{.action} y seleccione el plan correspondiente. En la pestaña `«Multisitio»`{.action}, pulse el icono con forma de rueda dentada a la derecha de la entrada multisitio y, seguidamente, en `«Modificar»`{.action}.

Desmarque la opción «Activar la CDN», haga clic en `«Siguiente»`{.action} y, a continuación, en `«Validar»`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Eliminar la opción CDN

Esta acción permite eliminar la opción CDN en todo su alojamiento web.

Inicie sesión en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external} y seleccione `«Web»`{.action}. En la barra de servicios a la izquierda, haga clic en `«Alojamientos»`{.action} y seleccione el plan correspondiente. Haga clic en `«...»`{.action} a la derecha de «Opción CDN» y, seguidamente, en `«Anular la CDN»`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}

Pulse `«Validar»`{.action} para confirmar la anulación.

> [!warning]
>
> Cuando reciba el mensaje de correo electrónico con el procedimiento de cierre de su CDN, siga las instrucciones para confirmar o cancelar la solicitud. 
> 


### Comprobar que la CDN esté operativa

Puede comprobar que la CDN está activa en su nombre de dominio a través de un terminal y el siguiente comando:

```
curl -i http://yourpersonnaldomain.ovh/
```

Si su nombre de dominio está correctamente asociado a la CDN, obtendrá un resultado como el que se muestra a continuación:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Vary: Accept-Encoding
X-Request-ID: 123456789
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 00.111.22.333/44
X-Cacheable: Cacheable
Accept-Ranges: bytes
Transfer-Encoding: chunked
X-IPLB-Instance: 12345
```
Las indicaciones «*X-CDN*» confirman que el tráfico de su sitio web se transmite correctamente a través de la CDN.

En caso de que el dominio no se transmita por la CDN, obtendrá el siguiente resultado:

```
HTTP/1.1 200 OK
Date: Mon, 01 Jan 2020 00:00:00 GMT
Content-Type: text/html; charset=UTF-8
Set-Cookie: SERVERID12345=123456; path=/; max-age=900
Server: Apache
X-Powered-By: PHP/7.1
Vary: Accept-Encoding
X-IPLB-Instance: 12345
```

La ausencia de la indicación «*X-CDN*» confirma que el tráfico de su sitio web no se transmite a través de la CDN.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
