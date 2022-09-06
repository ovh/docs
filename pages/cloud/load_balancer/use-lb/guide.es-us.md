---
title: Gestionar el servicio Load Balancer desde el área de cliente
slug: uso-iplb
excerpt: Principales funcionalidades y toma de contacto con el servicio Load Balancer en el área de cliente
section: Primeros pasos
---

## Objetivo
Esta guía explica los primeros pasos con el servicio Load Balancer y presenta sus principales funcionalidades.

## Requisitos
- Tener acceso al [área de cliente](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Haber contratado un [Load Balancer](https://www.ovh.com/world/es/soluciones/load-balancer/).

## Procedimiento

### Administrar el Load Balancer en el área de cliente
Para administrar el Load Balancer desde el área de cliente, acceda a la sección `Cloud`{.action}. En la columna izquierda, haga clic en `Load Balancer`{.action} y seleccione su Load Balancer. Se abrirá la página principal del servicio.

![Load Balancer](images/lbip-main.png){.thumbnail}

En dicha página, encontrará la siguiente información:

|Elemento|Función|
|---|---|
|Estado|Resumen del Load Balancer, con el nombre asignado al servicio, los frontends, las granjas operativas y los servidores añadidos|
|Uso|Resumen del uso del Load Balancer|
|Gráficas|Gráficas del servicio, en conexiones simultáneas o peticiones por minuto|
|Información|IPv4 y las IP Failover asociadas, así como el número de IPv4 salientes (para ver el detalle, haga clic en los tres puntos)|
|Configuración|Personalización del nombre del servicio (que puede ver en la parte superior y en la columna izquierda) y de los ciphers, y datacenter en el que está localizado el Load Balancer|
|Suscripción|Información administrativa del servicio|


A continuación se explica cómo realizar las principales operaciones de administración del Load Balancer, relativas a los frontends, las granjas, los servidores y los certificados.


### Administrar los frontends

Para añadir un frontend abra la pestaña `Frontends`{.action} y haga clic en `Añadir un frontend`{.action}. Se mostrará el siguiente formulario:


![Añadir un frontend](images/iplb-add-front-end.png){.thumbnail}

Estos son los parámetros que pueden configurarse en un frontend:


|Elemento|Función|
|---|---|
|Nombre|Puede asignarle un nombre a su frontend para poder identificarlo rápidamente|
|Protocolo|Elija entre HTTP, HTTPS, TCP, SSL TCP (o TLS) o UDP|
|Puerto|Seleccione el puerto de escucha|
|Datacenter|Seleccione entre su datacenter o todos para la creación del frontend|
|Granja por defecto |Si tiene varias granjas configuradas, podrá elegir una por defecto para cada frontend|

En función de la configuración anterior, aparecerán algunas de las siguientes posibilidades de configuración avanzada:


![Parámetros avanzados](images/advanced_frontend.png){.thumbnail}

|Elemento|Función|
|---|---|
|IP Failover dedicada|Lista de las IP Failover de los servidores remotos|
|Permite restringir el acceso a determinadas IP|Lista que permite restringir el acceso remoto al Load Balancer (solo IPv4)|
|Redirección HTTP|Permite añadir una URL de redirección HTTP|
|Cabecera HTTP|Permite añadir una cabecera HTTP|

En función del protocolo seleccionado, también podrá activar el soporte de HTTP Strict Transport Security.


### Administrar las granjas
Para añadir una granja de servidores, abra la pestaña `Granjas de servidores`{.action} y haga clic en `Añadir una granja de servidores`{.action}. Las opciones principales son las mismas que en la creación de frontends. Sin embargo, los parámetros avanzados son diferentes:


![Añadir una granja de servidores](images/iplb-cluster-adv.png){.thumbnail}

|Elemento|Función|
|---|---|
|Modo de balanceo|Elegir entre Round-robin, First, Last, Origen o URI para el balanceo de IP|
|Seguimiento de sesión|Aquí puede elegir si el seguimiento de la sesión se hace utilizando las cookies o la IP de origen|
|Sonda|Elección y activación de la sonda, y configuración de la misma|


### Administrar los servidores
Una vez haya creado la granja, solo tendrá que añadir los servidores haciendo clic en `Añadir un servidor`{.action}. A continuación se explican en detalle los distintos elementos que deben indicarse, así como los parámetros avanzados:


![Añadir servidor](images/iplb-cluster-add-server.png){.thumbnail}
![Añadir servidor](images/iplb-cluster-add-server-1.png){.thumbnail}
![Añadir servidor](images/iplb-cluster-add-server-2.png){.thumbnail}


|Elemento|Función|
|---|---|
|Nombre|Puede asignarle un nombre al servidor para poder identificarlo rápidamente|
|Dirección IPv4|Añada la IP del servicio que funcionará como servidor|
|Puerto|Puerto del servidor|
|Servidor de respaldo|Especifique si el servidor es de respaldo|
|Utilizar la sonda de disponibilidad de la granja|Usar la sonda indicada al crear la granja|
|Cifrar las peticiones con SSL|Permite cifrar las peticiones con un certificado SSL|
|Cookie|Añada una cookie de sesión personalizada|
|Cadena de certificación|Añada una cadena de certificación|
|Peso de balanceo|Elija el peso del balanceo para el reparto de la carga|


### Administrar los certificados SSL
En la pestaña `Certificados SSL`{.action}, puede añadir un SSL al Load Balancer, eligiendo entre dos opciones: contratar un certificado SSL en OVH o añadir un certificado externo.

#### Certificado SSL de OVH
Para contratar un certificado SSL, abra la pestaña `Certificado SSL`{.action} y haga clic en `Contratar un certificado SSL`{.action}. Introduzca los datos solicitados en el formulario.


![Contratar un certificado SSL](images/iplb-order-ssl.png){.thumbnail}


|Elemento|Función|
|---|---|
|Tipo de certificado|Gratuito (Let's Encrypt), Comodo DV o Comodo EV (más información en la [web de ovh](https://www.ovhcloud.com/es/web-hosting/options/ssl/))|
|Fully Qualified Domain Name (FQDN)|Indique el dominio o dominios correspondientes|

Si opta por un certificado Comodo EV, también deberá introducir la información de contacto y jurisdiccional.

#### Añadir un certificado SSL externo
Si ya tiene su propio certificado SSL, puede añadirlo directamente:


![Añadir un certificado SSL](images/iplb-add-ssl.png){.thumbnail}


|Elemento|Función|
|---|---|
|Nombre|Puede asignarle un nombre a su certificado para poder identificarlo rápidamente|
|Clave privada|Indique la clave privada que desea añadir al servicio|
|Certificado|Introduzca el certificado|
|Cadena|Introduzca el certificado raíz, si es necesario|


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.