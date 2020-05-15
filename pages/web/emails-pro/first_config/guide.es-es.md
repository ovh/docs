---
title: 'Primeros pasos con la solución Email Pro'
slug: primera-configuracion
excerpt: 'Cómo configurar por primera vez la solución Email Pro'
section: 'Primeros pasos'
order: 1
---

**Última actualización: 7/4/2020**

## Objetivo

La solución E-mail Pro le permite disfrutar de direcciones de correo electrónico profesionales al precio más razonable con vistas a impulsar o comenzar su negocio.

**Esta guía explica cómo configurar por primera vez la solución E-mail Pro.**

## Requisitos

- Tener una cuenta [E-mail Pro]({ovh_www}/emails/email-pro/){.external}.
- Haber recibido el mensaje de correo electrónico de confirmación de la instalación de la solución E-mail Pro.
- Tener un nombre de dominio.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Acceder a la gestión del servicio

Una vez creado y activado el servicio E-mail Pro, puede administrarlo desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Para ello, inicie sesión en el área de cliente. En la barra de servicios a la izquierda, haga clic en `E-mail Pro`{.action} y seleccione el nombre del servicio correspondiente.

> [!primary]
>
> El nombre de un servicio E-mail Pro en el área de cliente de OVHcloud comienza por «*emailpro-*», además, contiene una parte de su referencia de cliente y termina por una cifra (1 para el primer servicio E-mail Pro instalado, 2 para el segundo y así sucesivamente).
>

### 2. Añadir su nombre de dominio

Después de contratar el servicio E-mail Pro, se abrirá automáticamente una ventana en la que se le invita a `añadir un dominio`{.action}. Si la ventana no aparece, acceda a la pestaña `Dominios asociados`{.action} y haga clic en el botón `Añadir un dominio`{.action}.

Puede elegir entre dos opciones:

- **Seleccionar un dominio en la lista**\: solo se muestran los nombres de dominio que gestiona en el área de cliente de OVHcloud.
- **Introducir un nombre de dominio no gestionado en su cuenta OVHcloud**\: si elige esta opción, deberá estar en condiciones de modificar la configuración del nombre de dominio (su zona DNS) para que el servicio E-mail Pro pueda funcionar correctamente.

A continuación, haga clic en `Siguiente`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

Se mostrará un mensaje con la información relativa a la configuración de un modo.

- **En cuanto a los nombres de dominio no gestionados por OVHcloud**, estos se configurarán por defecto en modo no autónomo.
- **En cuanto a los dominios gestionados por OVHcloud**, tendrá que elegir entre dos modos.

|Modo|Descripción|
|---|---|
|Autónomo|Es conveniente si solo utiliza la solución E-mail Pro con su nombre de dominio. No permite utilizar otra solución de correo conjuntamente con E-mail Pro.|
|No autónomo|Es conveniente si utiliza con su nombre de dominio la solución E-mail Pro conjuntamente con otra solución de correo electrónico.| 

> [!primary]
>
> La elección de un modo no es definitiva y puede modificarse más adelante desde el área de cliente de OVHcloud.
>

Haga clic en el botón `Siguiente`{.action} para continuar con la adición del dominio.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Si ha seleccionado un nombre de dominio gestionado por OVHcloud**, su configuración se puede llevar a cabo de forma automática. Para ello, marque las casillas deseadas y haga clic en el botón `Siguiente`{.action} para continuar con la adición del dominio.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

- **SRV**: registro DNS que permite la configuración automática de su cliente de correo al añadir su dirección de correo electrónico.
- **MX**: registro DNS de los servidores de correo electrónico necesarios para recibir mensajes de correo electrónico con el nombre de dominio correspondiente.

**Para un dominio no gestionado por OVHcloud**, realice el paso 3.

Una vez realizada la configuración, compruebe que la información mostrada sea la correcta y haga clic en `Confirmar`{.action} para añadir el dominio.

### 3. Configurar el nombre de dominio

Una vez añadido el nombre de dominio como dominio asociado, compruebe su configuración usando la tabla que aparece.

En la columna `Diagnóstico`{.action}, podrá ver si la configuración DNS del nombre de dominio es correcta. Si debe modificarla, se mostrará una señal roja. Existen dos posibilidades:

- **Configuración automática al añadir un nombre de dominio de OVHcloud**\: si acaba de realizar el cambio, pueden pasar algunas horas antes de que se muestre en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

- **Configuración manual de un nombre dominio no gestionado por OVHcloud**\: haga clic en la señal roja para ver los cambios que debe realizar. <br>*Para un registro CNAME*, consulte nuestra guía <br>*Para un registro MX*, consulte nuestra guía <br>*Para un registro SRV*, complete la zona DNS con la ayuda de la información proporcionada al hacer clic en la señal roja. Puede consultar la guía «[Editar una zona DNS de OVHcloud](../../domains/web_hosting_como_editar_mi_zona_dns/)» para añadir este registro.

![emailpro](images/first_config_email_pro_configure_domain_update.png){.thumbnail}

### 4. Configurar las cuentas E-mail Pro

Para configurar las direcciones de correo, abra la pestaña `Cuentas de correo`{.action}. La tabla muestra las cuentas que haya contratado con el formato «*@configureme.me*».

Para configurarlas, haga clic en el icono con forma de lápiz.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Complete la información solicitada.

|Campo|Descripción|
|---|---|
|Cuenta de correo electrónico|Introduzca el nombre que quiera asignarle a la cuenta de correo electrónico (por ejemplo, nombre.apellido) y seleccione un dominio de la lista.|
|Nombre|Introduzca un nombre.|
|Apellidos|Introduzca los apellidos.|
|Nombre mostrado|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Contraseña y confirmación|Cree una contraseña segura que tenga un mínimo de ocho caracteres e incluya al menos una mayúscula, una minúscula y un número.| 

Una vez introducida toda la información, haga clic en el botón `Siguiente`{.action}. Compruebe que la información mostrada es correcta y haga clic en `Confirmar`{.action} para iniciar la configuración de la cuenta.

> [!primary]
>
> Repita el procedimiento descrito en este apartado para crear las cuentas que desee, en función del número de cuentas a su disposición. Si necesita más cuentas, puede realizar el pedido utilizando el botón `Contratar cuentas`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### 5. Utilizar las direcciones de correo electrónico

Una vez configuradas las cuentas, ¡ya puede utilizarlas! Para ello, OVHcloud pone a su disposición una aplicación en internet (*webmail*). Puede acceder a ella en la dirección [webmail](https://www.ovh.com/es/mail/){.external}, donde deberá introducir las credenciales de su dirección de correo electrónico.

Para configurar su dirección de correo electrónico en un cliente de correo o en un dispositivo (_teléfono inteligente_ o tableta), consulte nuestras [guías de configuración](../). A continuación, se indican los parámetros necesarios para configurar una cuenta E-mail Pro:

|Tipo de servidor|Nombre del servidor|Tipo de seguridad|Puerto|
|---|---|---|---|
|Entrante|pro**X**.mail.ovh.net|SSL/TLS|993|
|Saliente|pro**X**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> En nuestro ejemplo, utilizamos el nombre de servidor pro**X**.mail.ovh.net. Deberá sustituir la «X» por el número que designa el servidor del servicio E-mail Pro.
> 
> Encontrará este número en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en el apartado `Web`{.action} de la sección `E-mail Pro`{.action},
>  en la columna de la izquierda. El nombre del servidor puede verse en el recuadro **«Conexión»** de la pestaña `Información General`{.action}.
> 

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.