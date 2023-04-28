---
title: "Configurar el registro DNS inverso de una instancia de Public Cloud"
excerpt: Cómo activar la resolución inversa DNS
slug: configurar-el-inverso-dns-de-una-instancia
section: "Gestión de las instancias desde el área de cliente"
order: 07
updated: 2021-11-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 12/11/2021**

## Objetivo

El registro **inverso** (*rDNS*) es el complemento de la resolución "clásica" de los DNS que permite convertir un dominio en una dirección IP (registro de tipo **A**). Una solicitud de este tipo permite resolver una dirección IP en el dominio (registro de tipo **PTR**). Esto significa que las peticiones DNS a la dirección IP correspondiente devolverán un dominio.

La configuración de la resolución **inversa DNS** de una instancia resulta especialmente útil para el envío de mensajes de correo. Si la dirección IP de su servidor de envío se resuelve correctamente en su nombre de dominio, se reducirá el riesgo de que sus mensajes sean rechazados por un sistema de protección contra el spam.

**Esta guía explica cómo configurar el registro DNS inverso para la dirección o direcciones IP de una instancia de Public Cloud.**

## Requisitos

- Tener una [instancia de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud.
- Un dominio con un registro `A` que apunta a la instancia.
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

Conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Bare Metal Cloud`{.action} y haga clic en `IP`{.action} en el menú de la izquierda.

En la tabla de esta página se enumeran los servicios compatibles. Puede filtrar el ID de su proyecto de Public Cloud utilizando el menú desplegable **Service**.

![Registro inverso](images/reversecp01.png){.thumbnail}

Haga clic en `...`{.action} en la línea de la dirección IP correspondiente y seleccione `Cambiar el registro inverso`{.action}.

![Registro inverso](images/reversecp02.png){.thumbnail}

En la nueva ventana, introduzca el registro inverso y haga clic en `Confirmar`{.action}.

También puede editar el registro inverso directamente a través del icono de la columna **inversa** de la tabla.

> [!primary]
>
Si la modificación no funciona como se esperaba, compruebe que el registro `A` esté bien configurado en la zona DNS del dominio. Atención: La modificación de la [zona DNS](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/) puede tardar hasta 24 horas si solo ha cambiado recientemente el registro `A`.
>

## Más información <a name="gofurther"></a>

[Crear una primera instancia de Public Cloud y conectarse a ella](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
