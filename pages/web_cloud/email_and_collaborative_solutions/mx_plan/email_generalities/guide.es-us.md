---
title: 'Primeros pasos con la solución de correo electrónico OVHcloud'
excerpt: 'Cómo empezar a utilizar la solución de correo electrónico OVHcloud'
updated: 2023-11-15
---

## Objetivo

La solución de alojamiento web permite disfrutar de direcciones de correo electrónico para enviar y recibir mensajes desde cualquier dispositivo. 

**Esta guía explica cómo empezar a utilizar la solución de correo electrónico OVHcloud.**

## Requisitos

- Tener una solución MX Plan, incluida en un [plan de hosting de OVHcloud](/links/web/hosting).
- Estar conectado al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

## Procedimiento

Una vez que el MX Plan haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVHcloud](/links/manager). En función de cuándo haya activado su MX Plan o de si el servicio ha sido migrado recientemente, tendrá una versión diferente. Antes de continuar, compruebe de qué versión dispone. 

Para ello, conéctese al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}. Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente. Siga leyendo esta guía en función de su versión:

|Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
|---|---|
|![Correo electrónico](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> El nombre del producto aparece en el recuadro **Suscripción**, en el epígrafe **Producto**.|![Correo electrónico](images/mxplan-starter-new-step1.png){.thumbnail}<br>El nombre del producto aparece en el recuadro **Resumen**, en el epígrafe **Referencia del servidor**.|
|Siga leyendo esta guía en el apartado [Versión histórica de la solución MX Plan](./#version-historica-de-la-solucion-mx-plan).|Siga leyendo esta guía en el apartado [Nueva versión de la solución MX Plan](./#nueva-version-de-la-solucion-mx-plan).|

### Nueva versión de la solución MX Plan

#### 1. Acceder a la gestión del servicio

Si dispone de la nueva versión de la solución MX Plan, la pestaña `Información general`{.action} del servicio debería tener la distribución que se muestra en la imagen de abajo. De lo contrario, [vuelva al apartado anterior](./#procedimiento) y asegúrese de que esta es su versión de la solución.  

![Correo electrónico](images/mxplan-starter-new-step1.png){.thumbnail}

#### 2. Crear una dirección de correo electrónico

Para crear una dirección de correo electrónico, abra la pestaña `Cuentas de correo`{.action}. Se mostrarán las cuentas de correo ya creadas y el número de cuentas que puede crear. Para crear una nueva, haga clic en el botón `Añadir una cuenta`{.action}.

![Correo electrónico](images/mxplan-starter-new-step2.png){.thumbnail}

A continuación, introduzca la información solicitada:

|Campo|Descripción|  
|---|---|  
|Cuenta de correo|Este campo se autocompletará con un nombre temporal. Bórrelo e introduzca el nombre que quiera asignar a la dirección de correo (por ejemplo, «nombre.apellido»). El dominio que formará la dirección de correo completa aparecerá preseleccionado en la lista.|  
|Nombre|Introduzca un nombre.|  
|Apellidos|Introduzca los apellidos.|  
|Nombre mostrado|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Contraseña|Introduzca una contraseña y luego confírmela en el último campo. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite mencionar su nombre, apellidos o fecha de nacimiento, por ejemplo) y que la cambie periódicamente.|

Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action} y compruebe que la información indicada en el resumen es correcta. Si lo es, haga clic en `Aceptar`{.action}. Realice esta acción para todas las cuentas de que disponga.

![Correo electrónico](images/mxplan-starter-new-step3.png){.thumbnail}

#### 3. Utilizar las direcciones de correo

Una vez que haya creado las direcciones de correo, ya puede empezar a usarlas. Para ello, puede utilizar el webmail o configurar la cuenta en un dispositivo.

##### 3.1. Utilizar el webmail Outlook Web App (OWA)

Vaya a la [página de conexión al webmail](/links/web/email) e introduzca su dirección de correo y contraseña. Haga clic en el botón `Conexión`{.action}.

La primera vez que se conecte al webmail deberá seleccionar el idioma de la interfaz y la zona horaria en la que se encuentra. A continuación se abrirá la bandeja de entrada. Para más información, consulte nuestra guía [Utilizar una dirección de correo desde Outlook en la Web](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

![Correo electrónico](images/mxplan-starter-new-step4.png){.thumbnail}

##### 3.2. Configurar la dirección de correo en un dispositivo

Puede configurar su dirección de correo en el dispositivo que desee (smartphone o tablet, por ejemplo). Si lo necesita, consulte la guía correspondiente:

|Windows|Outlook|Apple|Android|Otros|
|---|---|---|---|---|
|[Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)|[Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)|[Mail de macOS (última versión)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)|[Android (última versión)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)|[Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)|

A continuación se indican los parámetros necesarios para configurar una cuenta MX Plan:

- **Configuración en IMAP (recomendada)**

|Tipo de servidor|Nombre del servidor|Puerto (con SSL)|Puerto (sin SSL)|
|---|---|---|---|
|Entrante|imap.mail.ovh.ca|993|143|
|Saliente|smtp.mail.ovh.ca|465|587|

- **Configuración en POP**

|Tipo de servidor|Nombre del servidor|Puerto (con SSL)|Puerto (sin SSL)|
|---|---|---|---|
|Entrante|pop.mail.ovh.ca|995|110|
|Saliente|smtp.mail.ovh.ca|465|587|

> [!warning]
>
> Si necesita ayuda para configurar la dirección de correo en su dispositivo, consulte nuestras [guías de configuración](/products/web-cloud-email-collaborative-solutions-mx-plan) o contacte con el editor de la aplicación que utilice.
>

### Versión histórica de la solución MX Plan

#### 1. Acceder a la gestión del servicio

Si dispone de la versión histórica de la solución MX Plan, la pestaña `Información general`{.action} del servicio debería tener la distribución que se muestra en la imagen de abajo. De lo contrario, [vuelva al apartado anterior](./#procedimiento) y asegúrese de que esta es su versión de la solución. 

![Correo electrónico](images/mxplan-starter-legacy-step1.png){.thumbnail}

#### 2. Crear una dirección de correo electrónico

Para crear una dirección de correo, abra la pestaña `Correo electrónico`{.action}. Se mostrará una tabla con todas las direcciones de correo electrónico creadas en el MX Plan. Haga clic en el botón `Crear una dirección de correo`{.action}.

![Correo electrónico](images/mxplan-starter-legacy-step2.png){.thumbnail}

A continuación, introduzca la información solicitada:

|Campo|Descripción|  
|---|---|  
|Nombre de la cuenta|Introduzca el nombre que quiera asignar a la dirección de correo (por ejemplo, «nombre.apellido»). El dominio aparecerá ya completado.|  
|Descripción de la cuenta|Introduzca una descripción que le permita diferenciar esta cuenta de las otras cuentas de su área de cliente de OVHcloud.|  
|Tamaño de la cuenta|Seleccione el tamaño de la cuenta de correo, es decir, su capacidad para almacenar mensajes de correo electrónico.|  
|Contraseña|Introduzca una contraseña y luego confírmela en el último campo. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite mencionar su nombre, apellidos o fecha de nacimiento, por ejemplo) y que la cambie periódicamente.|

Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action} y compruebe que la información indicada en el resumen es correcta. Si lo es, haga clic en `Aceptar`{.action}. Realice esta acción para todas las cuentas de que disponga.

![Correo electrónico](images/mxplan-starter-legacy-step3.png){.thumbnail}

#### 3. Utilizar las direcciones de correo

Una vez que haya creado las direcciones de correo, ya puede empezar a usarlas. Para ello, puede utilizar el webmail o configurar la cuenta en un dispositivo.

##### 3.1. Utilizar el webmail Roundcube

Vaya a la [página de conexión al webmail](/links/web/email) e introduzca su dirección de correo y contraseña. Haga clic en el botón `Conexión`{.action}.

A continuación, podrá consultar su bandeja de entrada. Para más información, consulte nuestra [Guía de uso de Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

![Correo electrónico](images/mxplan-starter-legacy-step4.png){.thumbnail}

##### 3.2. Configurar la dirección de correo en un dispositivo

Puede configurar su dirección de correo en el dispositivo que desee (smartphone o tablet, por ejemplo). Si lo necesita, consulte la guía correspondiente:

|Windows|Outlook|Apple|Android|Otros|
|---|---|---|---|---|
|[Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)|[Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)|[Mail de macOS (última versión)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)|[Android (última versión)](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)|[Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)|

A continuación se indican los parámetros necesarios para configurar una cuenta MX Plan:

- **Configuración en IMAP (recomendada)**

|Tipo de servidor|Nombre del servidor|Puerto (con SSL)|Puerto (sin SSL)|
|---|---|---|---|
|Entrante|imap.mail.ovh.ca|993|143|
|Saliente|smtp.mail.ovh.ca|465|587|

- **Configuración en POP**

|Tipo de servidor|Nombre del servidor|Puerto (con SSL)|Puerto (sin SSL)|
|---|---|---|---|
|Entrante|pop.mail.ovh.ca|995|110|
|Saliente|smtp.mail.ovh.ca|465|587|

> [!warning]
>
> Si necesita ayuda para configurar la dirección de correo en su dispositivo, consulte nuestras [guías de configuración](/products/web-cloud-email-collaborative-solutions-mx-plan) o contacte con el editor de la aplicación que utilice.
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
