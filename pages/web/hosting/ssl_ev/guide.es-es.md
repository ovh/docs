---
title: "Utilizar un certificado SSL EV para su sitio web"
slug: ssl-ev
excerpt: "Cómo contratar e instalar un certificado SSL EV en un alojamiento web de OVHcloud"
section: SSL
order: 03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 13/12/2022**
  
## Objetivo

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios realizados desde o hacia su sitio web. Esto evita que una persona o robot malintencionado venga a "escuchar" claramente las peticiones enviadas o enviadas a su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en nuestros [planes de hosting de OVHcloud](https://www.ovhcloud.com/fr/web-hosting/). Estos datos se presentan en la guía [Gestionar un certificado SSL en un alojamiento web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/). Los certificados SSL son imprescindibles para la seguridad de su sitio web.

Existen tres tipos de certificados SSL:

- Dominio Validación (DV)
- Organization validation (OV)
- Extended Validation (EV)

Los niveles de cifrado SSL son idénticos entre estos tres tipos de certificado.

La principal diferencia radica en el nivel de verificaciones que realizará la Autoridad de Certificación (AC), que emite el certificado SSL y atestigua su autenticidad.

Los certificados SSL EV son aquellos en los que los niveles de verificación y seguridad son más elevados. Por lo general, el certificado SSL EV se utiliza para sitios web muy grandes o sensibles. Este certificado proporcionará el nivel de identificación más alto disponible.

Para los alojamientos compartidos de OVHcloud, la autoridad de certificación que emite los certificados SSL EV es [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Los certificados SSL EV no están disponibles para todo el mundo. Compruebe si puede optar a la suscripción **antes** de contratar este último, utilizando los elementos indicados en los [requisitos](#requirements) de esta guía.
>
> Tenga en cuenta que, una vez iniciado el pedido y enviado a nuestro proveedor de certificados/autoridad de certificación Sectigo, **no será posible realizar ninguna devolución**.
>

**Descubra cómo contratar e instalar un certificado SSL EV en su alojamiento web de OVHcloud**
    
## Requisitos <a name="requirements"></a>

- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Contratar o disponer de un [hosting OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) en el que no haya ningún certificado SSL instalado.
- Contratar o disponer de un [nombre de dominio](https://www.ovhcloud.com/fr/domains/) y disponer de los derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.
- Ser una organización (empresa, agencia gubernamental...) registrada en un registro oficial.
- La autorización de su organización para contratar un certificado SSL EV.
- Estar en condiciones de justificar con exactitud la información y los datos relativos a su organización.

Para comprobar si puede contratar un certificado SSL EV, acceda a [este enlace](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
  
## Procedimiento

## Más información <a name="go-further"></a>

[Sitio Oficial Sectigo](https://sectigostore.com){.external}

[Descripción de las verificaciones realizadas por Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[Gestionar un certificado SSL en un alojamiento web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/)

[Habilitar HTTPS en el sitio web](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.