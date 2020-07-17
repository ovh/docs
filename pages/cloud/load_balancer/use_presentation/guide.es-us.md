---
title: Presentación del Load Balancer de OVHcloud
slug: presentacion-load-balancer
excerpt: Descubra el nuevo Load Balancer de OVHcloud
section: Primeros pasos
order: 1
---

**Última actualización: 05/03/2018**

## Objetivo

El nuevo [Load Balancer de OVHcloud](https://www.ovh.com/world/es/soluciones/load-balancer/){.external} es un balanceador de carga (*load balancer*) que combina fiabilidad y una gran flexibilidad en la configuración. Usted solo tiene que configurar sus productos con el Load Balancer de OVHcloud y nosotros nos encargamos del resto.

**Esta guía explica brevemente el funcionamiento del nuevo Load Balancer de OVHcloud.**

## Requisitos

- No hay requisitos específicos.


## Procedimiento

 
Este nuevo producto está basado en tecnologías *open source* muy robustas: HAProxy para el tráfico TCP y Nginx para el tráfico UDP.

¡Se acabaron las limitaciones! El nuevo [Load Balancer de OVHcloud](https://www.ovh.com/world/es/soluciones/load-balancer/){.external} se puede utilizar con diferentes protocolos:

|Tipo|Descripción|Ventajas|Tecnología|
|---|---|---|---|
|HTTP|Todo tipo de servicios web HTTP/HTTPS|Optimizado para tratamiento L7 (aplicaciones)|HAProxy|
|TCP|Para cualquier servicio de red que no sea HTTP|Compatible con todas las aplicaciones TCP|HAProxy|
|UDP|Para todo tipo de tráfico UDP|Compatible con todas las aplicaciones UDP|Nginx|

Este nuevo servicio incluye:

- protección anti-DDoS de OVHcloud
- soporte de zonas múltiples (Anycast)
- soporte HTTP/HTTPS avanzado (redireccionamiento, cabeceras, ACL...)
- compatibilidad con una IP Failover
- compatibilidad con el vRack
- redundancia: el Load Balancer funciona en instancias separadas, que a su vez funcionan en equipos separados y redundantes

### Principales elementos

El nuevo Load Balancer de OVHcloud está formado principalmente por tres elementos, que se describen a continuación.

![General](images/diag_gen.png){.thumbnail}

|Principales elementos|Función|
|---|---|
|Frontend|El frontend determina el tipo de protocolo (HTTP, TCP o UDP) del servicio Load Balancer de OVHcloud. Es el elemento que expone el puerto de escucha del servicio.|
|Granja|La granja recibe el tráfico procedente del frontend. Es el que se ocupa de balancear la carga.|
|Servidor|Los servidores son los que reciben el tráfico final y responden a través de la aplicación.|

Con estos tres elementos fundamentales que componen el Load Balancer, se pueden configurar casi todos los tipos de balanceo de carga posibles.


### ¿Para qué utilizar el Load Balancer de OVHcloud?

#### Balancear la carga

Es la principal función de un balanceador de carga, pero el Load Balancer de OVHcloud puede hacer mucho más.  

![Distribuir la carga](images/distribute_load.png){.thumbnail}

#### Eliminar el riesgo de *downtime*

El servicio Load Balancer de OVHcloud es capaz de detectar automáticamente si un servidor no responde y, en ese caso, redirige el tráfico que tiene como destino ese servidor hacia otro, siempre que sea posible. Esto permite resolver el problema sin que afecte a los servicios en producción. 

![Eliminar el downtime](images/eliminate_downtimes.png){.thumbnail}

#### Escalar una infraestructura fácilmente

Es posible añadir o quitar una granja, frontend o servidor del Load Balancer de OVHcloud sin interrumpir el servicio.

![Escalar una infraestructura fácilmente](images/facilitate_maintenance.png){.thumbnail}


#### Facilitar las operaciones de mantenimiento

En caso de mantenimiento planificado en su infraestructura, es posible deshabilitar fácilmente los servidores de una granja para que dejen de recibir tráfico temporalmente. De esa forma, puede realizar la intervención y, una vez finalizado el mantenimiento, volver a añadir los servidores.

![Facilitar las operaciones de mantenimiento](images/scale_easily.png){.thumbnail}


#### Combinar los servicios

Es posible combinar diferentes servicios de OVHcloud en el Load Balancer, como por ejemplo:

- instancias de Public Cloud con IP Failover
- VPS con IP Failover
- servidores dedicados con IP Failover
- vRack

![Combinar servicios](images/mix_and_match.png){.thumbnail}

#### Anycast

Es posible balancear la carga en diferentes zonas geográficas.

![Anycast](images/anycast.png){.thumbnail}


#### Balancear cualquier tipo de tráfico

El Load Balancer de OVHcloud ya no está limitado al tráfico HTTP. Ahora puede utilizarlo con cualquier tipo de tráfico TCP o UDP.


#### Servidores de correo

Balancee la carga entre sus servidores de correo.

![Correo electrónico](images/mail.png){.thumbnail}


#### Bases de datos

Equilibre y redunde sus bases de datos. 

![Bases de datos](images/database.png){.thumbnail}


## Más información

[Más información sobre el balanceo de carga](https://es.wikipedia.org/wiki/Balanceador_de_carga){.external}

[Más información sobre HAProxy](http://www.haproxy.org/#desc){.external}

[Más información sobre Nginx](https://es.wikipedia.org/wiki/Nginx){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.
