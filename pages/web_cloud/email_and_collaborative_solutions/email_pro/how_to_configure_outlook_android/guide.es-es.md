---
title: "Configurar una cuenta Email Pro en Android con la aplicación Microsoft Outlook"
excerpt: "Descubra cómo configurar una cuenta Email Pro en Adroid con la aplicación Microsoft Outlook"
updated: 2023-07-25
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Descubra cómo configurar una cuenta Email Pro en Android con la aplicación Microsoft Outlook.**

## Requisitos

- Disponer de una solución [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external}.
- Haber instalado la aplicación Microsoft Outlook en su dispositivo Android. Puede descargarla desde el *Google Play Store*.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [Más información](#go-further) de esta guía.
> 

## Procedimiento

### Etapa 1: recuperar los datos de la cuenta Email Pro <a name="step1"></a>

Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `E-mail Pro`{.action} y seleccione la plataforma Email Pro en la que se encuentra la dirección de correo electrónico que desea configurar.

En la nueva página, abra la pestaña `Cuentas de correo`{.action}.

![Outlook-android-emailpro-login](images/ol-android-ep-login.png){.thumbnail}

Descargue el nombre del servidor Email Pro, que aparece bajo la mención `Webmail`{.action}. En nuestro ejemplo ilustrado anteriormente, se trata de `proX.mail.ovh.net`.

> [!warning]
>
> Consulte el **buen nombre** del servidor Email Pro, en el que se encuentra la dirección de correo que desea configurar. Esta operación puede variar en función de la antigüedad de su solución Email Pro (pro1.mail.ovh.net, pro2.mail.ovh.net, etc.).
> 

En la pestaña `Cuentas de correo`{.action} de su plataforma *Email Pro*, se mostrará una tabla con su(s) dirección(es) Email Pro.

Si no recuerda la contraseña de acceso a la dirección de correo electrónico que desea configurar, puede cambiarla utilizando el botón `...`{.action} situado en la misma línea a la derecha de la cuenta de correo.

Seleccione la opción `Editar`{.action}, elija una nueva contraseña y luego confírmela introduciéndola de nuevo. Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action} en la segunda ventana.

El cambio de la contraseña se aplicará en los siguientes 15 minutos, aproximadamente.

> [!warning]
>
Si cambia la contraseña de su dirección de correo electrónico y esta ya es utilizada por otro dispositivo (cliente de correo, ordenador, tablet, smartphone, fotocopiadora, etc.), deberá actualizar la contraseña en estos otros dispositivos.
ya no podrá conectarse con su dirección de correo electrónico a través de la antigua contraseña.
>

Una vez finalizada esta primera etapa, deberá disponer de los siguientes elementos:

- el nombre del servidor Email Pro (pro1.mail.ovh.net, pro2.mail.ovh.net, etc.);
la dirección de correo electrónico que desea configurar.
- la contraseña de la dirección de correo electrónico que desea configurar.

### Etapa 2: configurar su dirección en Android utilizando la aplicación Microsoft Outlook <a name="step2"></a>

Ejecute la aplicación Microsoft Outlook en su dispositivo Android. Si todavía no la ha instalado, descargárela desde el Google Play Store*.

|||
|---|---|
|![Outlook-android-emailpro-login](images/Screenshot_Outlook_1.png){.thumbnail}|![Outlook-android-emailpro-login](images/Screenshot_Outlook_3.png){.thumbnail}|

Una vez abierta, haga clic en `Añadir una cuenta`{.action}, introduzca su dirección de correo electrónico completa en el campo `Introduzca su dirección de correo`{.action} y haga clic en `Continuar`{.action}.

En la parte inferior de la pantalla encontrará dos opciones de configuración: `IMAP`{.action} y `POP3`{.action}.

|||
|---|---|
| ![Outlook-android-emailpro-login](images/Screenshot_Outlook_4.png){.thumbnail} | ![Outlook-android-emailpro-login](images/Screenshot_Outlook_2.png){.thumbnail} |

> [!success]
>
> El protocolo de sincronización **IMAP** permite obtener una "imagen" de los emails presentes en su dirección Email Pro del servidor para mostrarlos en su aplicación Microsoft Outlook, **sin** suprimir el email del servidor Email Pro donde se encuentra su dirección de correo electrónico. Este protocolo es muy útil, especialmente si tiene varios dispositivos configurados con su dirección de correo electrónico.
>
> El protocolo **POP3** recogerá por defecto el email recibido en el servidor Email Pro, en el que está su dirección de correo electrónico, para guardarlo en la aplicación o el programa configurado con esta última. Por consiguiente, el mensaje de correo electrónico ya no está presente en el servidor Email Pro, sino únicamente en el dispositivo configurado con su dirección de correo electrónico a través del protocolo POP.
> Este protocolo no es recomendable si tiene varios dispositivos configurados con su dirección de correo electrónico. Solo podrá consultar el mensaje de correo electrónico en uno de los dispositivos configurados en **POP3** y no en todos los dispositivos configurados con su dirección de correo electrónico.
>
> Sin embargo, y a pesar de estar configurado en **POP3**, algunos programas de correo y aplicaciones envían una copia del correo al servidor en el que se encuentra su dirección de correo electrónico. Esta copia puede permanecer de forma temporal o permanente.
> Para saber si su aplicación/software forma parte de ella, contacte con el editor del programa directamente.
>

#### Caso n°1: configuración de la aplicación Microsoft Outlook en Android con el protocolo IMAP

Seleccione `IMAP`{.action} en la parte inferior de su pantalla.

Se abrirá una nueva página en la que deberá introducir previamente la dirección de correo electrónico.

Introduzca la contraseña de su dirección Email Pro en el formulario `Contraseña`{.action} justo debajo del lugar en el que su dirección de correo electrónico ya está pre-indicada.

En los dos formularios siguientes, y de forma totalmente **opcional**, puede indicar un `Nombre completo`{.action} y una `Descripción`{.action}.

Para continuar, marque el botón `CONFIGURACIÓN AVANZADA`{.action} para mostrar el resto del menú de configuración.

Rellene los distintos formularios con la siguiente información:

Para la sección **Servidor de correo electrónico entrante IMAP**:

 - **Nombre del host IMAP**: indique el nombre del servidor Email Pro obtenido anteriormente en el [etapa 1](#step1): (ejemplos: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.);
 - **Port** : introduzca el número de puerto **993**.
 - **Tipo de seguridad**: elija entre la lista desplegable Seguridad **SSL/TLS**.
 - **Nombre de usuario de IMAP**: indique la dirección de correo electrónico que quiera configurar.
 - **Contraseña IMAP** : introduzca la contraseña de acceso a la dirección de correo electrónico que quiera configurar.

Para la sección **Servidor de correo saliente SMTP**:

 - **Nombre del host SMTP**: indique el nombre del servidor Email Pro obtenido anteriormente en el [etapa 1](#step1): (ejemplos: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.);
 - **Port** : introduzca el número de puerto **587**.
 - **Tipo de seguridad**: elija entre la lista desplegable Seguridad **StartTls** ;
 - **Nombre de usuario SMTP**: indique la dirección de correo electrónico que quiera configurar.
 - **Contraseña SMTP**: introduzca la contraseña de acceso a la dirección de correo electrónico que quiera configurar.

Compruebe que todos los parámetros introducidos corresponden a los elementos arriba indicados y haga clic en el icono con forma de `V`{.action} situado en la parte superior derecha de la pantalla.

#### Caso n°2: configuración de la aplicación Microsoft Outlook en Android con el protocolo "POP3"

Haga clic en `POP3`{.action} en la parte inferior de su pantalla. 

Se abrirá una nueva página en la que deberá introducir previamente la dirección de correo electrónico.

Introduzca la contraseña de su dirección Email Pro en el formulario `Contraseña`{.action} justo debajo del lugar en el que su dirección de correo electrónico ya está pre-indicada.

En los dos formularios siguientes, y de forma totalmente **opcional**, puede indicar un `Nombre completo`{.action} y una `Descripción`{.action}.

Para continuar, marque el botón `CONFIGURACIÓN AVANZADA`{.action} para mostrar el resto del menú de configuración.

Rellene los distintos formularios con la siguiente información:

Para la sección **Servidor de correo entrante POP**:

 - **Nombre de host POP** : indique el nombre del servidor Email Pro obtenido anteriormente en el [etapa 1](#step1): (ejemplos: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.);
 - **Port** : introduzca el número de puerto **995**.
 - **Tipo de seguridad**: elija entre la lista desplegable Seguridad **SSL/TLS**.
 - **Nombre de usuario POP**: indique la dirección de correo electrónico que quiera configurar.
 - **Contraseña POP** : introduzca la contraseña de acceso a la dirección de correo electrónico que quiera configurar.

Para la sección **Servidor de correo saliente SMTP**:

 - **Nombre del host SMTP**: indique el nombre del servidor Email Pro obtenido anteriormente en el [etapa 1](#step1): (ejemplos: *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.);
 - **Port** : introduzca el número de puerto **587**.
 - **Tipo de seguridad**: elija entre la lista desplegable Seguridad **StartTls** ;
 - **Nombre de usuario SMTP**: indique la dirección de correo electrónico que quiera configurar.
 - **Contraseña SMTP**: introduzca la contraseña de acceso a la dirección de correo electrónico que quiera configurar.

Compruebe que todos los parámetros introducidos corresponden a los elementos arriba indicados y haga clic en el icono con forma de `V`{.action} situado en la parte superior derecha de la pantalla.

### Etapa 3: finalizar la configuración en Android de la aplicación Microsoft Outlook

Haga clic en el icono con forma de `V`{.action}. La aplicación probará los parámetros y se conectará al servidor Email Pro, en el que se encuentra su dirección de correo electrónico.
Esta última sincroniza o recupera el contenido de su dirección de correo para mostrarlo en su dispositivo.

A continuación, pruebe el envío y la recepción de mensajes de correo desde su aplicación Microsoft Outlook para finalizar la configuración.

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.