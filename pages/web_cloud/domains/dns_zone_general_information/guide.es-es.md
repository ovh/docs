---
title: "Todo sobre la zona DNS"
excerpt: "Descubra el rol de una zona DNS y los registros que contiene para un dominio"
updated: 2024-06-17
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Las siglas **DNS**, que significan **D**omain **N**ame **S**ystem, son un conjunto de elementos (servidores DNS, zonas DNS, etc.) que permiten asociar un dominio a una dirección IP.

Es fundamental diferenciar entre los **servidores DNS** y la **zona DNS**. Una zona DNS** se configura a nivel del **servidor DNS**.

Para una mejor comprensión del conjunto, le recomendamos que consulte previamente nuestra guía "[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)".

Por ejemplo, si desea acceder al sitio web *domain.tld* a través de un navegador de internet, su petición será tratada inicialmente por este conjunto DNS. A continuación, este conjunto DNS le proporcionará a su navegador de internet la dirección IP del servidor que aloja el sitio web *domain.tld*.

De este modo, cuando introduzca *domain.tld*, se consultarán los **servidores DNS** asociados al dominio. Estos últimos contienen la **zona DNS** del nombre de dominio *domain.tld*, en la que se indica la dirección IP del alojamiento de *domain.tld*. A continuación, su navegador podrá ver el sitio web *domain.tld* contenido en el alojamiento web. Esto se denomina resolución DNS.

**Descubra el papel de una zona DNS, su contenido y cómo funciona con un dominio.**

## Procedimiento

### Rol de una zona DNS

La zona DNS de un dominio contiene una configuración aplicable al mismo. Consta de información técnica, denominada «registros DNS»*. La zona DNS es, en cierto modo, un centro de referencia para un dominio.

Por ejemplo, puede especificar lo siguiente:

- La dirección IP (registros DNS de tipo *A* y *AAAA*) de su alojamiento web para mostrar su sitio web con su nombre de dominio.
- Los servidores de correo (registros DNS de tipo *MX*) a los que el dominio debe redirigir los emails que recibe.
- Información relativa a la seguridad o la autenticación de los servicios (alojamiento web, servidor web, servidor de correo, etc.) asociados a su dominio (registros DNS de tipo SPF, DKIM, DMARC, etc.).

Una zona DNS está alojada/registrada en **servidores DNS**. Para utilizar la zona DNS que alojan, es necesario declarar los **servidores DNS** (ante el agente registrador del dominio).

Para más información, consulte nuestra página web en la que se explica [cómo funciona un servidor DNS](/links/web/domains-dns-server).

### Los registros DNS

Existen numerosos registros DNS. Todos ellos tienen un propósito específico en la resolución DNS. En OVHcloud, se distinguen en tres partes:

- Registros de punteo (A, AAAA, CNAME, DNAME, NS)
- Registros de correo (MX, SPF, DKIM, DMARC)
- Registros extendidos (TXT, SRV, CAA, NAPTR, LOC, SSHFP, TLSA)

Para más información sobre los distintos tipos de registro mencionados anteriormente, consulte nuestra guía Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records). En él encontrará, por ejemplo, los elementos que le permitirán entender mejor la [edición de una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Ejemplo de zona DNS

A continuación ofrecemos un ejemplo de zona DNS alojada en OVHcloud para el dominio *domain.tld*. Esta configuración se realiza en los servidores DNS *dns200.anycast.me* y *ns200.anycast.me* de OVHcloud:

![DNS zone dashboard](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-dashboard.png){.thumbnail}

En comparación, este es su equivalente en «modo textual»:

```bash
$TTL 3600
@	IN SOA dns200.anycast.me. tech.ovh.net. (2024051800 86400 3600 3600000 60)
                 IN NS     ns200.anycast.me.
                 IN NS     dns200.anycast.me.
                 IN MX     1 mx1.mail.ovh.net.
                 IN MX     5 mx2.mail.ovh.net.
                 IN MX     10 mx3.mail.ovh.net.
                 IN A      203.0.113.0
www              IN A      203.0.113.0
```

En este ejemplo, la zona DNS especifica, entre otros, la siguiente información para las consultas DNS que recibe:

- Los servidores DNS declarados para el dominio *domain.tld* son los servidores DNS *dns200.anycast.me* y *ns200.anycast.me*.
- El servidor debe devolver la dirección IP 203.0.113.0 si se realiza una consulta DNS al dominio *domain.tld* o al subdominio *www.domain.tld*. Por ejemplo, detrás de la dirección IP 203.0.113.0 puede encontrar el sitio web *domain.tld*.
- Para los mensajes de correo, la zona DNS indica que las consultas DNS realizadas para las direcciones de correo en *@domain.tld* deben enviarse al servidor *mx1.mail.ovh.net* con prioridad. Si este tarda demasiado en responder o no está disponible, la solicitud será reenviada al servidor *mx2.mail.ovh.net* y así sucesivamente hasta el último servidor declarado *mx3.mail.ovh.net*.
- El SOA (**S**tart **O**f **A**uthority) de la zona DNS de OVHcloud indica que la fecha de última actualización de la zona DNS es el 18/05/2024 y que el plazo de actualización de la zona DNS es de 3600 segundos. En las zonas DNS alojadas fuera de OVHcloud, los SOA pueden contener otros elementos como la dirección de correo electrónico del administrador de la zona DNS. Por motivos de seguridad, OVHcloud ha optado por no mostrar esta información en el SOA.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Gestionar el historial de una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_history)

[Eliminar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).