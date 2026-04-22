---
title: "Configurar un registro MX para la gestión del correo"
excerpt: "Descubra cómo configurar un registro MX en un nombre de dominio en OVHcloud"
updated: 2026-03-27
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objetivo

El registro MX permite asociar un nombre de dominio al servidor de su plataforma de correo. Es indispensable para que el servicio de correo electrónico del remitente pueda llegar al del destinatario.

**Esta guía explica cómo configurar un registro MX para un nombre de dominio en OVHcloud.**

## Requisitos

- El nombre de dominio debe utilizar la configuración de OVHcloud (es decir, los servidores DNS de OVHcloud).
- Tener una solución MX Plan (incluida en el plan de [alojamiento web](/links/web/hosting), el [alojamiento gratuito 100M](/links/web/domains-free-hosting) o la solución MX Plan contratada por separado), una de nuestras [soluciones de correo de OVHcloud](/links/web/emails) o un servicio de correo externo.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

> [!primary]
>
> - Si el nombre de dominio no utiliza los servidores DNS de OVHcloud, deberá editar los registros MX desde el panel que le ofrezca el proveedor que gestione la configuración del nombre de dominio.
>
> - Si el nombre de dominio está registrado en OVHcloud, puede comprobar si utiliza nuestra configuración. Para ello y si es necesario, consulte nuestra guía « [Modificar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

## Procedimiento

### Comprender la función de los registros MX

El registro MX (**M**ail e**X**change) es un tipo de registro DNS que determina qué servidores de correo de recepción están asociados a su nombre de dominio.

Para comprender su funcionamiento, vamos a utilizar un ejemplo:

- La dirección **sender@otherdomain.ovh** envía un correo electrónico a **contact@mydomain.ovh**.
- El servidor de envío de correo (**Outgoing mail server**) consulta la zona DNS del nombre de dominio **mydomain.ovh** y lee los registros **MX**.
- El correo electrónico se transmite a la URL del registro **MX** leído.
- El correo electrónico se envía al destino **mx0.mail.ovh.net**, precedido del valor **0**. Este valor corresponde a la prioridad: el valor más bajo se consulta primero y el más alto después. Esto significa que la presencia de varios registros MX permite compensar la falta de respuesta del servidor designado por el registro con la prioridad más baja, pasando a los siguientes servidores en orden de prioridad.

![Correo electrónico](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail .w-600}

Puede configurar varios registros MX para un mismo nombre de dominio. Es necesario definir un número de prioridad para cada uno de ellos. Los registros MX se consultan en orden ascendente, desde el número más bajo hasta el más alto, hasta que el servidor receptor responde.

> [!warning]
>
> En general, **modificar los registros MX en la zona DNS de un nombre de dominio es una operación delicada**: una manipulación incorrecta puede hacer imposible recibir mensajes de correo en sus direcciones. Preste especial atención al realizar esta operación.
> En caso de duda, le recomendamos que contacte con un [proveedor especializado](/links/partner).

### Valores de la configuración MX de OVHcloud <a name="mxovhcloud"></a>

A continuación ofrecemos la configuración MX de OVHcloud que deberá utilizar para nuestros MX Plan (solo o incluido en un plan de [hosting de OVHcloud](/links/web/hosting)), [Email Pro](/links/web/email-pro), [Exchange](/links/web/emails-exchange) y [Zimbra](/links/web/zimbra). Nuestros servidores de correo disponen de antispam y antivirus integrado.

Estos valores son comunes a todos los productos, excepto [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) y Dedicated Exchange.

|Dominio|TTL|Registro|Prioridad|Destino|
|---|---|---|---|---|
|*Dejar el campo vacío*|3600|MX|1|mx0.mail.ovh.net.|
|*Dejar el campo vacío*|3600|MX|5|mx1.mail.ovh.net.|
|*Dejar el campo vacío*|3600|MX|50|mx2.mail.ovh.net.|
|*Dejar el campo vacío*|3600|MX|100|mx3.mail.ovh.net.|
|*Dejar el campo vacío*|3600|MX|200|mx4.mail.ovh.net.|

Estos registros MX deben estar configurados en la zona DNS del nombre de dominio.

<!-- CP-STEPS-START:configure-mx-record -->
### Configurar un registro MX en una zona DNS de OVHcloud

Haga clic en las pestañas de abajo para ver sucesivamente cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> La tabla muestra la configuración de OVHcloud del nombre de dominio. Cada línea corresponde a un registro DNS.
>>
>> Compruebe si ya existen registros MX seleccionando el tipo **MX** en la lista de filtros situada encima de la tabla y, a continuación, acepte.
>>
>> ![Registro MX en la zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail .w-600}
>>
> **Paso 3**
>>
>> - Si ya existen registros MX y desea modificarlos, haga clic en el botón `...`{.action} a la derecha de cada fila de la tabla y seleccione `Modificar el registro`{.action}.
>> - Si no hay ningún registro MX, haga clic en el botón `Añadir un registro`{.action} a la derecha de la tabla y seleccione `MX`{.action}.
>>
> **Paso 4**
>>
>> Introduzca la información solicitada en función de la solución de correo elegida.
>>
>> **Si tiene contratada una solución de correo electrónico de OVHcloud**, consulte la información que encontrará en el apartado « [Conocer la configuración MX de OVHcloud](#mxovhcloud) ».
>>
>> ![Registro MX en la zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail .w-600}
>>
> **Paso 5**
>>
>> Una vez que haya introducido toda la información, siga los pasos que se indican y haga clic en `Aceptar`{.action}.

**Si dispone de otra solución de correo**, consulte la información que le haya proporcionado su proveedor de servicios de correo.

> [!primary]
>
> Los cambios tardan entre 4 y 24 horas en propagarse y ser efectivos.
<!-- CP-STEPS-END:configure-mx-record -->

## Más información

[Información general sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Mejorar la seguridad del correo electrónico mediante el registro SPF](/pages/web_cloud/domains/dns_zone_spf)

[Mejorar la seguridad del correo electrónico mediante el registro DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).