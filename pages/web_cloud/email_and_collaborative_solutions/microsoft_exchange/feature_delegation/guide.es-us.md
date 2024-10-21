---
title: 'Delegar permisos en una cuenta de correo'
excerpt: 'Cómo delegar permisos de su cuenta de correo en otra cuenta'
updated: 2024-06-19
---

## Objetivo

Los servicios Exchange permiten disfrutar de direcciones de correo profesionales, que facilitan el trabajo colaborativo gracias a sus diferentes funcionalidades. Una de ellas permite delegar permisos específicos (como permisos de envío o de acceso) entre diferentes cuentas de correo.

**Esta guía explica cómo delegar permisos de su cuenta de correo en otra cuenta.**

## Requisitos

- Tener una solución [Exchange](/links/web/emails-hosted-exchange) ya configuradas.
- Tener al menos dos cuentas de correo activas configuradas en una misma plataforma de correo de OVHcloud.
- Estar conectado al [área de cliente de OVHcloud](/links/manager).
- Tener las claves de la cuenta de correo que disfrutará de los nuevos permisos delegados.

## Procedimiento

Antes de empezar, debe decidir qué permisos quiere delegar. Le recordamos que una delegación consiste en conceder a una o varias cuentas de correo permisos adicionales sobre una determinada cuenta de correo.

|Permisos|Descripción|
|---|---|
|**Permiso de "enviar como"**|Permite realizar un envío como si se tratase de otra persona. El que aparece como remitente del mensaje no es la cuenta que realiza el envío, sino la cuenta sobre la que se tienen permisos de "enviar como". El destinatario no sabrá que el mensaje se ha enviado desde otra cuenta, ya que no hay ninguna indicación al respecto.|
|**Permiso de "enviar en nombre de"**|Permite realizar un envío en nombre de otra persona. El que aparece como remitente del mensaje es la cuenta que efectivamente realiza el envío, en la que han delegado permisos de "enviar en nombre de". Se incluye una mención indicando que el mensaje se ha enviado en nombre de otra persona.|
|**Permiso de acceso completo**|Otorga acceso de solo lectura a la cuenta en la que se ha delegado este permiso. Este acceso permite consultar el contenido, pero no realizar envíos.|

> [!warning]
>
> No es posible combinar el permiso de «enviar como» con el permiso de «enviar en nombre de». Las demás combinaciones sí son posibles.
> 

Una vez que haya identificado la cuenta cuyos permisos quiere delegar y que haya decidido qué permisos concretos quiere otorgar y a qué cuentas quiere hacerlo, puede continuar en el primer paso de esta guía.

### 1. Activar la delegación

Para acceder a la gestión del servicio, conéctese al [área de cliente de OVHcloud](/links/manager). Haga clic en `Microsoft`{.action} y seleccione `Exchange`{.action}.

Haga clic en el nombre del servicio de correo al que pertenezca la cuenta cuyos permisos quiera delegar. A continuación, abra la pestaña `Cuentas de correo`{.action}.

Se mostrará una tabla que contiene las cuentas creadas en el servicio de correo. Haga clic en los tres puntos situados al final de la línea correspondiente a la cuenta y seleccione `Gestionar las delegaciones`{.action}.

![Delegación de permisos](images/delegation-step1.png){.thumbnail}

En la nueva página, marque las casillas correspondientes a los permisos que quiera delegar en cada cuenta, en su caso. Haga clic en `Siguiente`{.action} para continuar.

![Delegación de permisos](images/delegation-step2.png){.thumbnail}

Compruebe que los cambios que va a realizar son correctos y, si lo son, haga clic en `Aceptar`{.action}. La delegación tardará unos minutos en crearse en nuestros servidores.

Una vez configurada la delegación del ejemplo anterior, **test@mypersonaldomainname.ovh** podrá realizar las acciones correspondientes en la cuenta **test2@mypersonaldomainname.ovh**.

### 2. Utilizar los permisos delegados

Una vez configurada la delegación, ya puede empezar a utilizarla. Compruebe que tiene las claves de acceso de la cuenta de correo en la que haya delegado los nuevos permisos.

El procedimiento es distinto según el permiso, y depende también de la aplicación (cliente de correo local o web) que utilice para conectarse a su cuenta de correo. Continúe leyendo esta guía en el apartado correspondiente al permiso o permisos que haya delegado.

- [Utilizar el permiso de acceso completo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#21-utilizar-el-permiso-de-acceso-completo)
- [Utilizar el permiso de «enviar como»](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#22-utilizar-el-permiso-de-enviar-como)
- [Utilizar el permiso de «enviar en nombre de»](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#23-utilizar-el-permiso-de-enviar-en-nombre-de)

> [!warning]
>
> Para realizar las siguientes acciones, debe tener conocimientos sobre el programa o la interfaz que vaya a utilizar. A continuación ofrecemos algunas indicaciones. Sin embargo, le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del programa o la interfaz. Nosotros no podremos asistirle.
>

#### 2.1. Utilizar el permiso de acceso completo

**Desde Outlook Web App (OWA)**

Vaya a la dirección [Webmail](/links/web/email) e introduzca las claves de la cuenta de correo que dispone del permiso delegado. Una vez que se haya conectado, haga clic derecho en el nombre de la cuenta en el menú de la izquierda y seleccione `Agregar carpeta compartida`{.action}.

En la nueva ventana, indique el nombre de la cuenta para la que tiene el permiso delegado y haga clic en `Agregar`{.action}. La cuenta aparecerá en el menú de la izquierda, y podrá explorar su contenido.

![Delegación de permisos](images/delegation-step3.png){.thumbnail}

**Desde Outlook para Windows**

En Outlook, haga clic en `Archivo`{.action} en el menú situado en la parte superior de la pantalla y luego en `Configuración de la cuenta`{.action}. En el menú desplegable, seleccione `Configuración de la cuenta`{.action}. Seleccione la cuenta que disfruta del permiso delegado y haga clic en `Cambiar`{.action}.

![Delegación de permisos](images/delegation-step4.png){.thumbnail}

A continuación, haga clic en `Más configuraciones`{.action}. En la nueva ventana, abra la pestaña `Avanzadas`{.action} y haga clic en `Agregar`{.action}. Introduzca el nombre de la cuenta de la que tiene permisos delegados y siga los pasos que se indican para añadirla. La cuenta aparecerá en el menú de la izquierda, y podrá explorar su contenido.

![Delegación de permisos](images/delegation-step5.png){.thumbnail}

#### 2.2. Utilizar el permiso de «enviar como»

**Desde Outlook Web App (OWA)**

Vaya a la dirección [Webmail](/links/web/email) e introduzca las claves de la cuenta de correo que dispone del permiso delegado. Una vez que se haya conectado, puede empezar a redactar un nuevo mensaje haciendo clic en el botón `+ Nuevo`{.action}.

En la ventana de redacción, haga clic en el botón `···`{.action} (Más acciones) y seleccione `Mostrar De`{.action}. A continuación, haga clic en `De`{.action} y seleccione la dirección que quiera que aparezca como remitente (y para la que usted debe disponer del permiso delegado). Si dicha dirección no aparece, elimine la dirección predeterminada e introduzca la nueva dirección.

Ya puede redactar su mensaje y enviarlo.

![Delegación de permisos](images/delegation-step6.png){.thumbnail}

**Desde Outlook para Windows**

En Outlook, abra la ventana de redacción de un nuevo mensaje. Compruebe si aparece el botón `De`{.action}. Si no aparece, abra la pestaña `Opciones`{.action} y seleccione `De`{.action} en el grupo **Mostrar campos**.

A continuación, haga clic en `De`{.action} y seleccione la dirección que quiera que aparezca como remitente (y para la que usted debe disponer del permiso delegado). Si la dirección no aparece, haga clic en `Otra dirección de correo electrónico`{.action}, introduzca la dirección deseada y acepte.

Ya puede redactar su mensaje y enviarlo.

![Delegación de permisos](images/delegation-step7.png){.thumbnail}

#### 2.3. Utilizar el permiso de «enviar en nombre de»

**Desde Outlook Web App (OWA)**

Vaya a la dirección [Webmail](/links/web/email) e introduzca las claves de la cuenta de correo que dispone del permiso delegado. Una vez que se haya conectado, puede empezar a redactar un nuevo mensaje haciendo clic en el botón `+ Nuevo`{.action}.

En la ventana de redacción, haga clic en el botón `···`{.action} (Más acciones) y seleccione `Mostrar De`{.action}. A continuación, haga clic en `De`{.action} y seleccione la dirección que quiera que aparezca como remitente (y para la que usted debe disponer del permiso delegado). Si dicha dirección no aparece, elimine la dirección predeterminada e introduzca la nueva dirección.

Ya puede redactar su mensaje y enviarlo.

![Delegación de permisos](images/delegation-step6.png){.thumbnail}

**Desde Outlook para Windows**

En Outlook, abra la ventana de redacción de un nuevo mensaje. Compruebe si aparece el botón `De`{.action}. Si no aparece, abra la pestaña `Opciones`{.action} y seleccione `De`{.action} en el grupo **Mostrar campos**.

A continuación, haga clic en `De`{.action} y seleccione la dirección que quiera que aparezca como remitente (y para la que usted debe disponer del permiso delegado). Si la dirección no aparece, haga clic en `Otra dirección de correo electrónico`{.action}, introduzca la dirección deseada y acepte.

Ya puede redactar su mensaje y enviarlo.

![Delegación de permisos](images/delegation-step7.png){.thumbnail}

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

[Utilizar una dirección de correo desde Outlook en la Web](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Compartir carpetas en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Crear grupos de contactos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Interactúe con nuestra [comunidad de usuarios](/links/community).