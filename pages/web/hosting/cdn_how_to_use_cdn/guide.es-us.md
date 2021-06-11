---
title: 'Acelerar un sitio web utilizando la CDN'
excerpt: 'Cómo acelerar la carga de un sitio web en el alojamiento utilizando el servicio CDN'
slug: guia_de_uso_del_acelerador_geocache_en_un_alojamiento_web
legacy_guide_number: g1290
section: 'Optimización del sitio web'
---

**Última actualización: 26/04/2021**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Si desea mejorar la experiencia de sus usuarios acelerando la carga de su sitio web, la técnica más eficaz es activar una CDN <i>(</i>siglas en inglés de Content Delivery Network que significan red de entrega de contenidos<i>)</i>. Esta permite guardar en caché los archivos estáticos, como imágenes, CSS y JavaScript en los servidores que se encuentran más cerca de sus clientes.

**Cómo gestionar la opción CDN de su alojamiento web.**

## Definición

**¿Cómo funciona una CDN?**

La CDN<i> (</i>siglas en inglés de Content Delivery Network que significan red de entrega de contenidos<i>)</i> es literalmente una red dedicada a la entrega de contenidos. Para mostrar el contenido de su sitio web, la CDN utiliza varios servidores repartidos por todo el mundo. Cuanto más cerca estén los servidores de los usuarios, más rápida será la carga de su sitio web en sus dispositivos.

Para funcionar, cada servidor guarda en memoria caché una parte de su sitio web. Siempre se recomienda incluir en ellos los archivos llamados estáticos, como las imágenes, los archivos JavaScript y CSS que permiten el buen funcionamiento de su sitio web, pero rara vez se modifican.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
- Tener contratado un [plan de alojamiento web](https://www.ovh.com/world/es/hosting/){.external}.

## Procedimiento

###  Activar la opción CDN

> [!primary]
> 
> La opción CDN ya está incluida en los planes de alojamiento web Performance.

####  Si la opción CDN no está contratada o activada en su alojamiento web

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione `Web Cloud`{.action}. En la barra de servicios a la izquierda, haga clic en `Alojamientos`{.action} y seleccione el plan correspondiente. Haga clic en `...`{.action} a la derecha de "Opción CDN" y, seguidamente, en `Contratar una CDN`{.action} o `Activar la opción`{.action} si la opción CDN ya está incluida en el alojamiento.

> [!primary]
> 
> Si tiene una opción CDN anterior al 19/11/2020, puede contratar la nueva solución Shared CDN haciendo clic en `Actualizar la CDN a la versión superior`{.action}.

![CDN](images/manage_CDN_01.png){.thumbnail}

Se le redirigirá a la generación del pedido. Unos minutos después de haber abonado el pedido, su servicio estará disponible.

#### Si la opción CDN ya está activada en su alojamiento web

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione `Web Cloud`{.action}. En la barra de servicios a la izquierda, haga clic en `Alojamientos`{.action} y seleccione el plan correspondiente. En la pestaña `Multisitio`{.action}, haga clic en el icono con forma de rueda dentada a la derecha de la entrada multisitio y, seguidamente, pulse `Modificar`{.action}.

Marque la opción «Activar la CDN», haga clic en `Siguiente`{.action} y, seguidamente, en `Validar`{.action}.

![CDN](images/manage_CDN_01_02.gif){.thumbnail}

> [!warning]
> 
> Si añade un nombre de dominio externo a OVHcloud en multisitio al alojamiento web, debe indicar la dirección IP de la CDN de su alojamiento en la zona DNS del nombre de dominio.<br>
> Consulte la [lista de direcciones IP de los clústeres y alojamientos web](../lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/){.external} para saber qué dirección IP corresponde a la CDN de su clúster.

 
**¿Por qué no puedo disfrutar de la IP geolocalizada con la opción CDN?** <br>
<br>
La CDN utiliza el principio de las direcciones IP Anycast. Según su geolocalización, hará peticiones a diferentes servidores, lo que reducirá el tiempo de carga de sus archivos estáticos de forma eficaz. Por ello, de nada sirve la geolocalización de la dirección IP. <br>
En cuanto al SEO (posicionamiento en los motores de búsqueda), la velocidad de carga de su sitio web es más importante que la geolocalización de la dirección IP de su alojamiento.

### Gestionar su CDN compartido 

> [!primary]
> 
> La opción Shared CDN ya está incluida en los planes de hosting Performance o está disponible para contratar desde el 19/11/20. Para las versiones más antiguas, consulte el apartado [Gestionar su CDN (versión histórica)](./#gestionar-su-cdn-version-historica_2).

#### Vaciar la caché del Shared CDN

En ocasiones, resulta útil vaciar la caché de la CDN, principalmente cuando se actualizan los archivos estáticos. Por ejemplo, cuando pone en línea una nueva versión de su sitio web. Es posible vaciar la caché para cada registro multisitio.

Acceda a la pestaña `Multisitio`{.action} de su alojamiento, haga clic en `...`{.action} a la derecha de la entrada multisitio y luego `Purgar la CDN`{.action}.

![CDN](images/manage_sharedCDN_01.png){.thumbnail}

#### Configurar las opciones del Shared CDN

Acceda a la pestaña `Multisitio`{.action} de su alojamiento, haga clic en `...`{.action} a la derecha de la entrada multisitio y luego `Editar la CDN`{.action}.

> [!warning]
> 
> Algunas opciones están bloqueadas en la solución Basic.

![CDN](images/manage_sharedCDN_02.png){.thumbnail}

- **Sigue en línea**: Permite mantener en línea los datos de la CDN en caso de avería del servidor.

- **HTTP/2**: Protocolo que permite mejorar el rendimiento de su sitio web en materia de seguridad y latencia.

- **Dev-mode** : permite desactivar la caché durante el desarrollo del sitio web.

- **Brotli**:  tipo de compresión que permite optimizar el tamaño de los archivos en caché.

- **Regla de caché**: Cree hasta 5 reglas. Dichas indicaciones determinan la frecuencia de actualización del cacheado para determinados recursos del sitio web. ([seguir el siguiente paso](./#crear-una-regla-de-almacenamiento-en-cache)).

Una vez seleccionadas las opciones, haga clic en `Aplicar la configuración`{.action} y seleccione `Aceptar la configuración`{.action} en la siguiente ventana.

![CDN](images/manage_sharedCDN_03.png){.thumbnail}

##### Crear una regla de almacenamiento en caché

Para añadir una regla de caché a uno de los elementos de su sitio, acceda a la pestaña `Multisitio`{.action} de su alojamiento, haga clic en `...`{.action} a la derecha de la entrada multisitio y seleccione `Configurar la CDN`{.action}.

Bajo la mención **Reglas de caché**, haga clic en el botón `Añadir una regla`{.action}.

![CDN](images/manage_sharedCDN_04.png){.thumbnail}

- **Nombre de la regla**: Asigne un nombre a la regla.

- **URI** : Introduzca el subconjunto de recursos de su sitio web en el directorio de su sitio web. Para la solución CDN-Basic, solo es posible introducir una extensión de archivo.

- **Duración**: especifique la vida útil de la regla para el recurso seleccionado.

- **Clasificación**:  Clasifique sus reglas por orden de ejecución (desde el más bajo hasta el más alto).

A continuación, haga clic en el botón `crear la regla`{.action}.

Las reglas aparecen en una lista.  Puede modificarla haciendo clic en `...`{.action} a la derecha de la regla y luego en `Modificar la regla`{.action} o eliminarla haciendo clic en `Eliminar la regla`{.action}.

![CDN](images/manage_sharedCDN_05.png){.thumbnail}

Una vez que haya configurado las reglas y las opciones, haga clic en `Aplicar la configuración`{.action} y seleccione `Aceptar la configuración`{.action} en la siguiente ventana.

#### Configurar las opciones de la CDN Security

> [!primary]
>  las opciones que se presentan a continuación requieren la suscripción a la [CDN Security](https://www.ovh.es/hosting/cdn.xml) o a la [CDN Advanced](https://www.ovh.es/hosting/cdn.xml)

Acceda a la pestaña `Multisitio`{.action} de su alojamiento, haga clic en `...`{.action} a la derecha de la entrada multisitio y luego `Editar la CDN`{.action}. 

También puede hacer clic en el icono de lápiz situado a la derecha de una entrada multisitio, cuando la opción CDN esté activada. Haga clic en `Editar su CDN`{.action}.

- **Cross-Origin Resource Sharing (CORS)** : Indique en la lista los dominios externos que estarán autorizados a acceder a los recursos de su sitio web para compartirlos. 

Una vez activada la función, haga clic en `Editar la lista de recursos externos`{.action} para añadir los dominios autorizados a compartir sus recursos.

![CDN](images/manage_CDNsecurity_01.png){.thumbnail}

Una vez que haya completado la lista, haga clic en `Confirmar`{.action}.

> [!primary]
> Si activa la opción CORS sin especificar ningún dominio en la lista, significa que todos los dominios están autorizados a utilizar los recursos de su sitio web.

- **HTTPS-redirect**: Proteja la globalidad del tráfico de su sitio web redirigiéndolo hacia el protocolo HTTPS de forma temporal o permanente.

Una vez activada la función, haga clic en el menú desplegable para elegir entre `Redirección permanente (301)` o `Redirección temporal (302)`.

![CDN](images/manage_CDNsecurity_02.png){.thumbnail}

- **HTTP Strict Transport Security (HSTS)** : Imponga el acceso a su sitio web únicamente en HTTPS. De este modo, su solución web estará protegida contra los ataques de degradado (o de tipo "ataque por replicación").

Una vez activada la función, deberá determinar la duración en la que el navegador aplicará la función HSTS en su sitio web. 

![CDN](images/manage_CDNsecurity_03.png){.thumbnail}

> [!primary]
> 
> Cuando active la función HSTS en su sitio web, forzará el protocolo HTTPS en su navegador hasta el final del período denominado "edad máxima", incluso después de desactivar la función en su área de cliente. No obstante, cuando la caché se vacie en el navegador que ya haya realizado una visita al sitio web, este último aplicará el nuevo estado de la función HSTS.

- **Mixed content**: Force todo el contenido de sus páginas web. Se cargarán de forma segura, participando así en una experiencia de usuario óptima. Todos los recursos del sitio web, tanto internos como externos, deben estar disponibles en HTTPS para evitar un error del navegador.

- **Firewall de aplicación**: El **W**eb **A**pplation **F**irewall (WAF) protege su sitio web de ataques fraudulentos, como inyección de código, peticiones ilegítimas o robo de datos. Este solución cubre los principales fallos conocidos de la web filtrando las peticiones y los paquetes transmitidos (la lista de fallos es administrada por OVHcloud y se actualiza regularmente).  

> [!warning]
> 
> Para a instalação de um [módulo 1 clique da OVHcloud](../modulos-en-un-clic/), o WAF deve ser desativado para evitar que a instalação do módulo seja bloqueada.

> [!primary]
>  
> El WAF está íntegramente administrado por OVHcloud. La lista de fallos se actualiza regularmente.

### Ver las estadísticas de la CDN

En la pestaña `Multisitios`{.action} de su alojamiento, bajo la tabla, podrá consultar las estadísticas de su CDN, indicando el número de peticiones por minutos medidas sobre el mismo.

![CDN](images/manage_CDNstat_01.png){.thumbnail}

### Gestionar su CDN (versión histórica)

> [!primary]
> 
> La opción CDN ya está incluida en los planes de hosting Performance o en los planes contratados antes del 19/11/20.

#### Vaciar la caché de la CDN

En ocasiones, resulta útil vaciar la caché de la CDN, principalmente cuando se actualizan los archivos estáticos. Por ejemplo, cuando pone en línea una nueva versión de su sitio web. En dicho caso, vacíe por completo la caché de la CDN.

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione `Web Cloud`{.action}. En la barra de servicios a la izquierda, haga clic en `Alojamientos`{.action} y seleccione el plan correspondiente. Haga clic en `...`{.action} a la derecha de «Opción CDN» y, seguidamente, en `Vaciar la caché`{.action}.

![CDN](images/manage_CDN_02.png){.thumbnail}

### ¿Cómo guardar en caché los archivos en la CDN?

**Con un CMS**

Los principales CMS ofrecen numerosos complementos que permiten configurar el almacenamiento en caché de los archivos estáticos para que la CDN los guarde automáticamente. Hay otros que permiten la configuración automática de los archivos estáticos activando el almacenamiento en caché integrado al sistema de gestión de contenidos. Para más información, consulte la documentación oficial del sistema de gestión de contenidos que utilice o del editor del complemento.

**Sin CMS**

En caso de no utilizar ningún sistema de gestión de contenidos, puede disponer de la caché de la CDN. Para ello, debe añadir encabezados en las peticiones HTTP. Existen numerosas técnicas que permiten añadir encabezados. Una de las más sencillas es establecer reglas dentro de un fichero .htaccess, en función de las extensiones de ficheros.

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

### Desactivar la opción CDN

Esta acción permite desactivar la CDN para uno o más de sus registros multisitio, sin eliminar la opción CDN de su alojamiento web.

Acceda al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione `Web Cloud`{.action}. En la barra de servicios a la izquierda, haga clic en `Alojamientos`{.action} y seleccione el plan correspondiente. En la pestaña `Multisitio`{.action}, haga clic en `...`{.action} a la derecha de la entrada multisitio y luego en `Editar`{.action}.

Desmarque la opción «Activar la CDN», haga clic en `Siguiente`{.action} y, a continuación, en `Validar`{.action}.

![CDN](images/manage_CDN_03.png){.thumbnail}

### Eliminar la opción CDN

Esta acción permite eliminar la opción CDN en todo su alojamiento web.

Acceda al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y seleccione `Web Cloud`{.action}. En la barra de servicios a la izquierda, haga clic en `Alojamientos`{.action} y seleccione el plan correspondiente. Haga clic en `...`{.action} a la derecha de «Opción CDN» y, seguidamente, en `Anular la CDN`{.action}.

![CDN](images/manage_CDN_04.png){.thumbnail}F

Pulse `Validar`{.action} para confirmar la anulación.

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
Las indicaciones *X-CDN* confirman que el tráfico de su sitio web se transmite correctamente a través de la CDN.

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

La ausencia de la indicación *X-CDN* confirma que el tráfico de su sitio web no se transmite a través de la CDN.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.

