---
title: 'Primeros pasos con la solución Email Pro'
slug: primera-configuracion
excerpt: 'Cómo configurar por primera vez la solución Email Pro'
section: 'Primeros pasos'
order: 1
---

**Última actualización: 26/03/2019**

## Objetivo

La solución Email Pro le permite disfrutar de direcciones de correo electrónico profesionales a un precio precio muy ajustado para impulsar su negocio.

**Esta guía explica cómo configurar por primera vez la solución Email Pro.**

## Requisitos

- Tener una cuenta [Email Pro](https://www.ovh.es/emails/email-pro/){.external}.
- Haber recibido el email de confirmación de la instalación de la solución Email Pro.
- Tener un dominio.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Acceder a la gestión del servicio

Una vez que el servicio Email Pro haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Para ello, en la columna izquierda, haga clic en `Email Pro`{.action} y seleccione el servicio.

> [!primary]
>
> El nombre de los servicios Email Pro comienza por «**emailpro-**», contiene una parte del ID de cliente, y termina por una cifra (1 para el primer servicio Email Pro instalado, 2 para el segundo y así sucesivamente).
>

### 2. Añadir el dominio

Si acaba de contratar el servicio Email Pro, se abrirá automáticamente una ventana en la que podrá añadir un dominio. En los demás casos, abra la pestaña `Dominios asociados`{.action} y haga clic en el botón `Añadir un dominio`{.action}.

A continuación, se le ofrecerán dos opciones:

- **Seleccionar un dominio de la lista**: Solo se mostrarán los dominios que utilicen la configuración de OVH y que se encuentren bajo el mismo ID de cliente.
- **Introducir un nombre de dominio no gestionado por su cuenta OVH**: Si elige esta opción, deberá estar en condiciones de modificar la configuración del dominio (su zona DNS) para que el servicio Email Pro pueda funcionar correctamente.

A continuación, haga clic en `Siguiente`{.action}.

![Email Pro](images/first_config_email_pro_add_domain.png){.thumbnail}

Se mostrará un mensaje informativo relativo al modo de configuración del dominio.

- **Si ha seleccionado en la lista un dominio gestionado por OVH**, deberá elegir uno de los dos modos que se describen a continuación.
- **Si ha introducido un dominio no gestionado por OVH**, este se configurará por defecto en modo no autoritario.


|Modo|Descripción|
|---|---|
|Autoritario|Es el modo adecuado cuando solo utiliza con el dominio la solución Email Pro. No permite utilizar otra solución de correo conjuntamente con Email Pro.|
|No autoritario|Es el modo adecuado cuando utiliza con el dominio la solución Email Pro conjuntamente con otra solución de correo.| 

> [!primary]
>
> La elección de un modo no es definitiva y puede modificarse más adelante desde el área de cliente.
>

Haga clic en el botón `Siguiente`{.action} para continuar.

![Email Pro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

- **Si ha seleccionado en la lista un dominio gestionado por OVH**, podrá configurarlo automáticamente. Para ello, marque las casillas y haga clic en el botón `Siguiente`{.action} para continuar.
- **Si ha introducido un dominio no gestionado por OVH**, deberá realizar la configuración en la siguiente etapa.

![Email Pro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

Una vez realizada la configuración, compruebe que la información mostrada es correcta y haga clic en `Confirmar`{.action} para añadir el dominio.

### 3. Configurar el dominio

Una vez asociado el dominio, asegúrese de que su configuración es correcta comprobando la información indicada en la tabla.

En la columna «**Diagnóstico**» podrá ver si la configuración DNS del dominio es correcta. Si debe modificarla, se mostrará una etiqueta roja.

- **Si ha elegido la configuración automática al añadir el dominio**, puede tardar varias horas en mostrarse en el área de cliente de OVH.
- **Si ha introducido un dominio no gestionado por OVH**, haga clic en la etiqueta roja para ver los cambios que debe realizar. Si se trata de un registro CNAME, consulte la guía [Crear un registro CNAME para asociar un dominio](../../microsoft-collaborative-solutions/exchange_20132016_anadir_un_registro_cname/). Si se trata de un registro MX, consulte la guía [Añadir un registro MX a la configuración del dominio](../../domains/anadir-registro-mx-configuracion-dominio/). Una vez que haya hecho los cambios, estos pueden tardar varias horas en mostrarse en el área de cliente de OVH.

![Email Pro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### 4. Configurar las cuentas Email Pro

Para configurar las direcciones de correo, abra la pestaña `Cuentas de correo`{.action}. La tabla mostrará las cuentas que haya contratado con el formato **@configureme.me**.

Para configurarlas, haga clic en el icono con forma de lápiz situado al final de la línea correspondiente.

![Email Pro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Complete la información solicitada.

|Campo|Descripción|
|---|---|
|Cuenta de correo|Introduzca el nombre que quiera asignarle a la cuenta de correo (por ejemplo, nombre.apellido) y seleccione un dominio de la lista.|
|Nombre|Introduzca un nombre.|
|Apellidos|Introduzca los apellidos.|
|Nombre mostrado|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Contraseña y confirmar|Introduzca una contraseña y luego confírmela en el último campo.| 

Una vez que haya introducido toda la información, haga clic en el botón `Siguiente`{.action}. Compruebe que la información mostrada es correcta y haga clic en `Confirmar`{.action} para iniciar la configuración de la cuenta.

> [!primary]
>
> Realice esta acción para todas las cuentas de que disponga. Si necesita más cuentas, puede realizar el pedido utilizando el botón `Contratar cuentas`{.action}.
>

![Email Pro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### 5. Utilizar las direcciones de correo

Una vez que haya configurado las cuentas, ¡ya puede utilizarlas! Para ello, OVH pone a su disposición una aplicación web (webmail). Puede acceder a ella desde [esta dirección](https://www.ovh.es/mail/){.external}, introduciendo las claves de su dirección de correo electrónico.

Si desea configurar su cuenta de correo electrónico en un cliente de correo o un dispositivo (smartphone o tablet), consulte nuestras [guías de configuración](../). A continuación se indican los parámetros necesarios para configurar una cuenta Email Pro:

|Tipo de servidor|Nombre del servidor|Tipo de seguridad|Puerto|
|---|---|---|---|
|Entrante|pro1.mail.ovh.net|SSL/TLS|993|
|Saliente|pro1.mail.ovh.net|STARTTLS|587|

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.