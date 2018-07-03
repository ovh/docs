---
title: 'Primeros pasos con el servicio Hosted Exchange'
excerpt: 'Cómo configurar por primera vez el servicio Hosted Exchange'
slug: exchange_20132016_primera_configuracion_del_servicio
section: 'Configuración de Exchange'
order: 1
---

**Última actualización: 27/03/2018**

## Objetivo

El servicio Hosted Exchange le permite disfrutar de direcciones de correo electrónico profesionales que facilitan el trabajo colaborativo gracias a funciones como la sincronización del calendario o de los contactos.

**Esta guía explica cómo configurar por primera vez el servicio Hosted Exchange.**

## Requisitos

- Tener contratado un plan [Hosted Exchange](https://www.ovh.es/emails/hosted-exchange/){.external}.
- Haber recibido el email de confirmación de la instalación de la solución Hosted Exchange.
- Tener un dominio.
- Estar conectado al [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external}.

## Procedimiento

### 1. Acceder a la gestión del servicio

Una vez que el servicio Hosted Exchange haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external}.

Para ello, en la columna izquierda, haga clic en `Microsoft`{.action}, luego en `Exchange`{.action}  y seleccione el servicio Hosted Exchange correspondiente.

> [!primary]
>
> El nombre de los servicios Hosted Exchange comienza por «**hosted-**», contiene una parte del ID de cliente y termina por una cifra (1 para el primer servicio Hosted Exchange instalado, 2 para el segundo y así sucesivamente).
>

### 2. Configurar el servicio por primera vez

Si todavía no ha utilizado el servicio, deberá configurarlo por primera vez para poder disfrutar de sus nuevas cuentas de correo Exchange.

Para ello, la primera vez que acceda al panel de gestión de su servicio Hosted Exchange, aparecerá un asistente de configuración. Haga clic en `Empezar`{.action} para configurar el servicio.

Este asistente de configuración le permitirá realizar diversas acciones. En función de su caso particular, algunos pasos de esta guía serán opcionales.

|Acción|Descripción|
|---|---|
|Elección del dominio|Introduzca el dominio que vaya a utilizar en sus direcciones de correo Exchange. El dominio es una de las partes que componen la dirección de correo electrónico (p. ej., contact@mypersonaldomain.ovh).|
|Configuración del dominio|Si el dominio está registrado en OVH y es gestionado por el mismo ID de cliente que el servicio Exchange, se configurará automáticamente. En caso contrario, deberá configurarlo manualmente.|
|Configuración de las cuentas Exchange|Asigne un nombre a sus direcciones de correo Exchange y añada información adicional.|
|Migración de datos (si procede)|Si desea migrar sus cuentas de correo desde otra solución de OVH (MX Plan o Email Pro), puede realizar la migración desde este asistente. Si utiliza un cliente de correo, deberá volver a configurar sus cuentas.|

### 3. Añadir dominios adicionales (opcional)

Una vez configurado el dominio, también puede configurar dominios adicionales, en caso de que no lo haya hecho a través del asistente de configuración.

> [!warning]
>
> Todas las direcciones creadas en el servicio Exchange podrán ver en el directorio el resto de direcciones asociadas al servicio, incluidas aquellas que posean un dominio diferente. Si desea crear directorios separados, deberá contratar un nuevo servicio Hosted Exchange para el o los dominios en cuestión.
>

Para añadir un nuevo dominio, seleccione el servicio Hosted Exchange correspondiente en el [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external} y abra la pestaña `Dominios asociados`{.action}. Se mostrará una tabla con los dominios ya configurados o que estén siendo configurados en el servicio. Haga clic en el botón `Añadir un dominio`{.action} y siga los pasos que se le indican para añadir el dominio. 

Para más información, consulte la guía [Añadir un dominio a un servicio Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/anadir-dominio-exchange/){.external}.

> [!primary]
>
> Si es necesario realizar alguna acción concreta para configurar el dominio, se mostrará una etiqueta roja en la columna `Diagnóstico`{.action}. Al hacer clic, se mostrarán las operaciones necesarias. Si el dominio no utiliza la configuración de OVH (es decir, si no utiliza los servidores DNS de OVH), deberá realizar los cambios necesarios desde el panel que le ofrezca su proveedor para gestionar sus servidores DNS. 
>

![Añadir un dominio](images/first-steps-hosted-exchange-add-domain.png){.external}


### 4. Configurar cuentas Exchange adicionales (opcional)

También puede configurar cuentas adicionales, en caso de que no lo haya hecho a través del asistente de configuración.

Para ello, seleccione el servicio Hosted Exchange correspondiente en el [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external} y abra la pestaña `Cuentas de correo`{.action}. Se mostrará una tabla con las cuentas de correo ya configuradas o que estén siendo configuradas en el servicio.

La tabla mostrará las cuentas pendientes de configurar con el formato **@configureme.me**. Para configurarlas, haga clic en el icono con forma de lápiz y siga los pasos que se le indican.

> [!primary]
>
> Realice esta acción para todas las cuentas de que disponga. Para añadir nuevas cuentas de correo, haga clic en el botón `Añadir cuentas de correo`{.action}.
>

![Añadir una cuenta de correo](images/first-steps-hosted-exchange-add-account.png){.external}

### 5. Utilizar las direcciones de correo

Una vez que haya configurado las cuentas, ¡ya puede utilizarlas! Para ello, OVH pone a su disposición el webmail **Outlook Web Application** (OWA). Puede acceder a él en la dirección <https://www.ovh.es/mail/>, introduciendo las claves de su dirección de correo electrónico. Para más información, consulte las guías de OVH sobre las [Soluciones colaborativas Microsoft](https://docs.ovh.com/es/microsoft-collaborative-solutions/){.external}, en el apartado relativo a Outlook Web Application (OWA).

Si desea configurar su cuenta de correo electrónico en un cliente de correo o un dispositivo externo (smartphone o tablet), consulte las guías de OVH sobre las [soluciones colaborativas Microsoft](https://docs.ovh.com/es/microsoft-collaborative-solutions/){.external}. Para un uso óptimo de su cuenta Exchange, asegúrese de que su software sea compatible con el servicio.

OVH ofrece licencias de Outlook, que podrá contratar en el [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external}, así como licencias de Office 365, disponibles en la página de [Office 365 de OVH](https://www.ovh.es/office-365/){.external}. Si desea disfrutar del cliente de correo Outlook o de otros programas de la suite Office, le recomendamos una de estas soluciones.

> [!primary]
>
> Tanto si utiliza un cliente de correo web como uno de escritorio compatible, Exchange sincroniza todos los parámetros de configuración (filtros, firmas, carpetas...).
> 
> Así pues, si utiliza Exchange en tres dispositivos y a través de tres modos de conexión distintos (webmail, distintos clientes de correo compatibles), toda su información estará disponible simultáneamente.
>

### 6. Configurar las funciones de colaboración (opcional)

Una vez que el servicio Hosted Exchange haya sido configurado y esté operativo, puede activar las funciones de colaboración en su [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external}. Estas funciones permiten crear recursos (salas de reuniones, equipamiento...) y grupos, entre otros. 

Para activarlas, seleccione su servicio Hosted Exchange en el [área de cliente de OVH](https://ovh.com/auth?action=gotomanager){.external} y abra la pestaña correspondiente a la acción que quiera realizar.

Para más información sobre estas funciones, consulte las guías de OVH sobre las [soluciones colaborativas Microsoft](https://docs.ovh.com/es/microsoft-collaborative-solutions/){.external}.

![Funciones colaborativas](images/first-steps-hosted-exchange-intro-to-functions.png){.external}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.