---
title: Gestión de una cuenta SMS SMPP
excerpt: Cómo gestionar los parámetros de una cuenta SMPP desde el área de cliente de OVHcloud
slug: smpp-control-panel
section: SMPP
order: 01
updated: 2023-02-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 09/02/2023**

## Objetivo

Desde el área de cliente de OVHcloud podrá encontrar las claves SMPP, cambiar la contraseña, gestionar los accesos al servicio y transferir créditos de SMS.

**Descubra cómo gestionar los parámetros de una cuenta SMS SMPP desde el área de cliente de OVHcloud.**

> [!primary]
>
> Le recomendamos que se familiarice con las [especificaciones técnicas de la solución SMPP de OVHcloud](https://docs.ovh.com/es/sms/smpp-specifications/).

## Requisitos

- Disponer de [una cuenta SMS SMPP OVHcloud](https://www.ovhcloud.com/es-es/sms/api-sms/).
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) en la sección `Telecom`{.action} > `SMS`{.action}.

## Procedimiento

Seleccione su cuenta SMPP. Por su nombre, se diferencia de las demás cuentas de SMS de OVHcloud. En efecto, empieza por `smpp-` en lugar de `sms-` para las cuentas SMS clásicas.

![SMPP account](images/smpp-account.png){.thumbnail}

### Datos de identificación

El recuadro `Información general` le permite consultar las claves necesarias para utilizar el servicio. Utilice el botón situado a la derecha de cada campo para copiar su contenido.

![SMPP account](images/smpp-account-ID.png){.thumbnail}

Si ha olvidado la contraseña SMPP, utilice el botón `Generar una nueva contraseña`{.action}. A continuación, se enviará una nueva contraseña a la dirección de correo electrónico de contacto de su cuenta de OVHcloud, que le mostrará.<br>

Haga clic en `Enviar`{.action} para confirmar esta acción.

![SMPP account](images/smpp-account-password.png){.thumbnail}

### Gestión de los accesos

Haga clic en la pestaña `Opciones`{.action} y, seguidamente, en `Parámetros SMPP`{.action}.

![SMPP account](images/smpp-acl0.png){.thumbnail}

El recuadro `IP autorizadas` enumera las direcciones IP de sus clientes SMPP que están autorizados a acceder al servidor SMPP.

Haga clic en el botón `Añadir una IP`{.action} para añadir direcciones IP a esta lista.

![SMPP account](images/smpp-acl1.png){.thumbnail}

### Gestión de remitentes y créditos

Consulte nuestras guías sobre [gestión de remitentes](https://docs.ovh.com/es/sms/enviar-sms-desde-el-area-de-cliente/#3-elegir-el-remitente-del-sms) y [gestión de créditos de SMS y recarga automática](https://docs.ovh.com/es/sms/activar-la-recarga-automatica-de-credito-sms/).

## Más información

Consulte [nuestra guía relativa a la gestión del historial de envíos de SMS](https://docs.ovh.com/es/sms/historial-de-envios/).

[Las especificaciones técnicas del producto SMPP OVHcloud](https://docs.ovh.com/es/sms/smpp-specifications/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
