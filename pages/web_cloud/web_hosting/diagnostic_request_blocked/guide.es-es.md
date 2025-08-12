---
title: "¿Qué hacer si aparece la página «Your request has been blocked»?"
excerpt: "Descubra cómo actuar si su sitio web muestra una página «Your request has been blocked»"
updated: 2025-07-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

La infraestructura compartida en la que se alojan los alojamientos web de OVHcloud dispone de varios sistemas de seguridad.
Si su sitio web muestra una página «Your request has been blocked», significa que una de las peticiones que intenta realizar hacia su sitio web ha sido bloqueada por nuestros sistemas de seguridad.

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

**Descubra cómo actuar si su sitio web muestra una página «Your request has been blocked».**

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting) de OVHcloud.
- Disponer de las [claves de conexión](/pages/web_cloud/web_hosting/ftp_connection) al espacio FTP de almacenamiento del alojamiento.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

La página «Your request has been blocked» puede aparecer por diversos motivos (lista no exhaustiva):

- La solicitud se realiza desde un navegador de internet (Firefox, Chrome, Safari, Edge, etc.) no actualizado.
- Un gran número de peticiones, similares o no, se realizan en un plazo extremadamente corto.
- La consulta intenta realizar acciones no autorizadas en la infraestructura compartida en la que se encuentra el alojamiento web.

### 1 - Compruebe que su navegador de Internet está actualizado

Acceda a la configuración de su navegador de Internet y compruebe si hay una actualización disponible.

/// details | Haga clic aquí para obtener más información sobre cómo actualizar su navegador de Internet

A continuación se describen los procedimientos para actualizar los principales exploradores de Internet (documentación proporcionada por sus editores):

- [Firefox](https://support.mozilla.org/es/kb/actualizar-firefox-la-ultima-version).
- [Chrome](https://support.google.com/chrome/answer/95414?hl=es&co=GENIE.Platform%3DDesktop&oco=0).
- [Safari](https://support.apple.com/es-es/102665).
- [Edge](https://support.microsoft.com/es-es/topic/configuraci%C3%B3n-de-actualizaci%C3%B3n-de-microsoft-edge-af8aaca2-1b69-4870-94fe-18822dbb7ef1).

Si su navegador de Internet no aparece en la lista anterior, consulte la documentación en línea o póngase en contacto con el soporte técnico del editor.

///

Una vez que su navegador esté actualizado, vuelva a intentar acceder a su sitio web. Si la situación persiste, lea esta guía.

### 2 - Obtenga la información de la página «Your request has been blocked» y póngase en contacto con el soporte

El sistema de seguridad que bloquea las peticiones se encuentra delante del alojamiento web. Por lo tanto, no tendrá acceso a los logs de este sistema de seguridad desde el área de cliente de OVHcloud.

#### 2.1 - Obtenga la información de la página «Your request has been blocked»

En primer lugar, consulte la siguiente información en la página «Your request has been blocked»:

- `IP address` (por ejemplo: 203.0.113.0).
- `Date` (por ejemplo: 2025-07-01T16:30:45:150Z).
- `Request ID` (por ejemplo: AbCdEf-your-request-ID-GhIjKlM).

#### 2.2 - Contacte con el soporte

Una vez recopilados estos datos, cree un [tíquet de asistencia](https://help.ovhcloud.com/csm?id=csm_get_help) desde el centro de ayuda de OVHcloud, indicando:

- El mensaje encontrado en la página («Your request has been blocked»).
- Los tres elementos recuperados anteriormente (`IP address`, `Date` y `Request ID`).
- URL desde la que se muestra la página (por ejemplo: `https://www.domain.tld/index.php`).
- El navegador de Internet utilizado.

El soporte se pondrá en contacto con usted lo antes posible para informarle del origen de este bloqueo.

## Más información <a name="go-further"></a>

[Casos de uso - Asesoramiento sobre la piratería de su sitio web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).