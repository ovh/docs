---
title: "Todo sobre los servidores DNS"
excerpt: "Descubra el papel de los servidores DNS, su contenido y cómo funcionan con un dominio"
updated: 2024-06-17
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Las siglas **DNS**, que significan **D**omain **N**ame **S**ystem, son un conjunto de elementos (servidores DNS, zonas DNS, etc.) que permiten asociar un dominio a una dirección IP.

**Descubra el papel de los servidores DNS, su contenido y cómo funcionan con un dominio.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Procedimiento

### Función de los servidores DNS

Todos los **servidores DNS** forman juntos lo que se denomina red DNS.

Esta red DNS permite facilitar a los usuarios el acceso a Internet y a los distintos servicios asociados (sitios web, servicios de mensajería en línea, etc.).

Permiten, entre otras cosas, el uso de los [dominios](/links/web/domains) para acceder a su sitio web preferido sin tener que conservar la dirección IP del servidor en el que está alojado este sitio web.

![DNS resolution](/pages/assets/schemas/dns/dns-resolution.png){.thumbnail}

Hay 4 tipos de servidores DNS.

A continuación, se muestra una tabla con los cuatro tipos de servidores DNS y sus interacciones. Los ejemplos que se ofrecen en la tabla se basan en una consulta DNS enviada desde un navegador web para conocer la dirección IP del sitio web *domain.tld*.

|Tipo de servidor DNS|Descripción|Ejemplo|
|---|---|---|
|Resolución DNS (resolución DNS o DNS recursiva)|Primer servidor que recibe la consulta DNS de un cliente (explorador de Internet, software de mensajería, etc.). Este paso se representa mediante el paso **1** del diagrama anterior. Este servidor actúa como puerta de enlace entre el cliente y el resto de la red DNS. Consulta los otros tres tipos de servidores DNS hasta que recupera la dirección IP solicitada por la consulta DNS del servidor DNS de referencia. El cliente envía la consulta DNS para conocer la dirección IP del dominio *domain.tld*. |El navegador web envía una petición DNS para conocer la dirección IP del dominio *domain.tld*. Esto permite conocer el servidor en el que está alojado el sitio web asociado al dominio *domain.tld*.|
|Servidor DNS raíz (DNS root)|Contiene un directorio para todos los TLD (dominios de nivel superior como *.com*, *.net*, *.es*, etc.). Va a indicar a la resolución DNS la dirección del servidor DNS TLD correspondiente a la extensión presente en la consulta DNS solicitada por el cliente (pasos **2** y **3** del esquema anterior).|La resolución DNS pasa la consulta DNS que ha recibido para *domain.tld* al servidor DNS raíz y recibe en respuesta la dirección del servidor DNS TLD que gestiona la extensión *.tld*.|
|Servidores DNS de extensión/nombres de dominio de nivel superior (DNS TLD)|Contiene un directorio de nombres de dominio para una extensión dada. Va a indicar a la resolución DNS la dirección del servidor DNS de referencia correspondiente al nombre de dominio presente en la consulta DNS solicitada por el cliente (pasos **4** y **5** del esquema anterior).|A continuación, la resolución DNS pasa la consulta DNS que ha recibido para *domain.tld* al servidor DNS TLD que gestiona las extensiones en *.tld* y recibe en respuesta la dirección del servidor DNS de referencia que gestiona la zona DNS del nombre de dominio *domain.tld*.|
|Servidores DNS autoritativos (referencia)|Último servidor DNS consultado por la resolución DNS (pasos **6** y **7** del esquema anterior). Contiene la zona DNS activa para el nombre de dominio presente en la consulta DNS solicitada por el cliente. A continuación explicamos el contenido de este tipo de servidor DNS.|La resolución DNS transmite la consulta DNS que ha recibido para *domain.tld* al servidor DNS de referencia que gestiona la zona DNS del dominio *domain.tld* y recibe en respuesta la dirección IP (ejemplo 203.0.113.0) del servidor que aloja el sitio web del dominio *domain.tld*.|

Una vez que la resolución DNS haya recuperado la dirección IP del servidor que se buscaba a través de la consulta DNS solicitada por el cliente, devolverá dicha dirección IP al cliente (paso **8** del esquema anterior).

A continuación, el cliente envía otra petición directamente al servidor asociado a la dirección IP recuperada mediante la resolución DNS (paso **9** del esquema anterior). Esto le permite conectarse o recuperar los elementos que necesita para resolver esta segunda consulta (paso **10** del esquema anterior). En nuestro ejemplo, el cliente (navegador web) consulta al servidor con la dirección IP 203.0.113.0 para obtener el contenido que quiere mostrar para el sitio web *domain.tld*.

Si necesita realizar esta acción para un dominio registrado con OVHcloud, consulte nuestra guía "[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

### Contenido de un servidor DNS (Authoritative)

Un **servidor DNS (Authoritative)** contiene un directorio de nombres de dominio que pueden tener extensiones (TLD) diferentes.

Para cada dominio incluido en el directorio hay una **zona DNS** que contiene la configuración DNS que se aplicará al dominio.

Una zona DNS contiene información técnica, denominada *registros DNS*. La zona DNS es como un puesto de referencia.

> [!success]
>
> - Para más información sobre las zonas DNS, consulte nuestra guía "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".
> - Consulte nuestra guía sobre Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records) para una mejor comprensión del conjunto.
>

Por lo tanto, los **servidores DNS (Authoritative)** deben estar declarados (en el registrador del dominio) para utilizar la zona DNS que alojan.

![DNS](/pages/assets/schemas/dns/dns-server.png){.thumbnail}

### Funcionamiento de un servidor DNS (Authoritative) con un dominio

#### Declaración de los servidores DNS (Authoritative) ante el agente registrador

Para que la zona DNS asociada a un nombre de dominio presente en el directorio de un servidor DNS esté activa, es necesario que dicho servidor DNS esté declarado ante el agente registrador del nombre de dominio.

Por precaución, se declara como mínimo 2 **servidores DNS (Authoritative)** (un servidor DNS primario y un servidor DNS secundario) ante el agente registrador de un dominio. Ambos funcionan de la misma manera. Sin embargo, si uno de ellos responde más rápidamente, los solucionadores DNS lo consultarán primero. Si uno de los dos no responde o más, el otro servidor DNS estará allí para responder a la consulta DNS.

A veces, algunos proveedores DNS ofrecen más de 2 **servidores DNS (Authoritative)** para declarar en su dominio. En ese caso, introduzca todos los servidores DNS ofrecidos por su proveedor DNS.

## Más información

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information).

Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records).

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit).

[Modificar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).