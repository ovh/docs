---
title: "¿Qué hacer si aparece la página «Your IP has been banned»?"
excerpt: "Descubra cómo desbloquear una dirección IP si el sitio web muestra una página con la opción «Your IP has been banned»"
updated: 2025-07-11
---

## Objetivo

La infraestructura compartida en la que se alojan los alojamientos web de OVHcloud dispone de varios sistemas de seguridad.
Si su sitio web muestra la página «Your IP has been banned», significa que la dirección IP desde la que intenta acceder a su sitio web ha sido bloqueada temporalmente por nuestros sistemas de seguridad.

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

**Descubra cómo desbloquear una dirección IP si el sitio web muestra una página con la opción «Your IP has been banned».**

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting) de OVHcloud.
- Disponer de las [claves de conexión](/pages/web_cloud/web_hosting/ftp_connection) al espacio FTP de almacenamiento del alojamiento.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

La página «Your IP has been banned» puede aparecer por diversos motivos (lista no exhaustiva):

- Un gran número de peticiones, similares o no, se realizan en un plazo extremadamente corto desde la misma dirección IP.
- Las peticiones realizadas desde la dirección IP en cuestión son sospechosas.

### 1 - Obtenga la información de la página «Your IP has been banned»

En primer lugar, consulte la siguiente información en la página «Your IP has been banned»:

- `IP address` (por ejemplo: 203.0.113.0).
- `Date` (por ejemplo: 2025-07-01T16:30:45:150Z).
- `Request ID` (por ejemplo: AbCdEf-your-request-ID-GhIjKlM).

### 2 - Contacte con el soporte

Una vez recopilados estos datos, cree un [tíquet de asistencia](https://help.ovhcloud.com/csm?id=csm_get_help) desde el centro de ayuda de OVHcloud, indicando:

- El mensaje encontrado en la página («Your IP has been banned»).
- Los tres elementos recuperados anteriormente (`IP address`, `Date` y `Request ID`).
- URL desde la que se muestra la página (por ejemplo: `https://www.domain.tld/index.php`).
- El navegador de Internet utilizado.

El soporte se pondrá en contacto con usted lo antes posible para informarle del origen de este bloqueo.

## Más información <a name="go-further"></a>

[Casos de uso - Asesoramiento sobre la piratería de su sitio web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).