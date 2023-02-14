---
title: 'Configurar una cuenta Email Pro en iPhone o iPad'
slug: configuracion-ios-iphone-ipad
excerpt: 'Cómo configurar una cuenta Email Pro en iPhone o iPad utilizando la aplicación Mail'
section: 'Configuración del cliente de correo'
order: 3
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 21/05/2020**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en iPhone o iPad utilizando la aplicación Mail.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Disponer de una [cuenta Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external}.
- Tener la aplicación Mail instalada en su dispositivo iOS.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

## Procedimiento

### 1. Añadir la cuenta

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**?**.mail.ovh.net. Sustituya la «?» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Web Cloud`{.action} y `Email Pro`{.action}. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

En la pantalla de bienvenida de su dispositivo, acceda a `Ajustes`{.action} (icono de rueda dentada). Según la versión de iOS, puede añadir una cuenta de diferentes formas:

- **Para iOS 7, 8, 9 y 10**: pulse `Correo electrónico, contactos, Calendario`{.action} y luego `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} y pulse `Añadir cuenta de correo`{.action}. Continúe en el paso 5 de la tabla siguiente.

- **Para iOS 11**: pulse `Cuentas y contraseñas`{.action} y luego `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} y pulse `Añadir cuenta de correo`{.action}. Continúe en el paso 5 de la tabla siguiente.

- **Para las versiones actuales**: siga las instrucciones de la tabla siguiente.

| | |
|---|---|
|![exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. En `Ajustes`, vaya a `Mail`. <br><br> 2. Pulse `Cuentas`.<br><br> 3. Pulse `Añadir cuenta`.<br><br> 3.4. Seleccione `Otro` abajo.|
|5. Pulse `Añadir cuenta de correo`.<br><br>6. Introduzca su **nombre**, dirección **de correo electrónico**, **contraseña** y una **descripción** de su cuenta.<br><br>7. Pulse `Siguiente`.|![exchange](images/configuration-mailpro-ios-step02.png){.thumbnail}|
|![exchange](images/configuration-mailpro-ios-step03.png){.thumbnail}|8. Seleccione el tipo de servidor de recepción `IMAP` (recomendado) o `POP`.<br><br>En las secciones `SERVIDOR DE RECEPCIÓN` y `SERVIDOR DE ENVÍO`, a pesar de la indicación "opcional", escriba: <br>- el nombre del host **pro?.mail.ovh.net** (¿sustituir el **?** por el número de servidor de su Email Pro) <br>- su **dirección de correo electrónico completa** en nombre de usuario <br>- la contraseña de su dirección de correo electrónico|

Al finalizar la configuración, asegúrese de dejar `Mail`{.action} marcado para que la aplicación pueda utilizar la cuenta y haga clic en `Guardar`{.action}.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté bien configurada.

Si la aplicación le pide que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución Email Pro:

|Tipo de servidor|Nombre del servidor|SSL|Puerto|
|---|---|---|---|
|Entrante|pro**?**.mail.ovh.net|Sí|993|
|Saliente|pro**?**.mail.ovh.net|Sí|587|

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovhcloud.com/es-es/emails/){.external} y está disponible en la dirección <https://www.ovh.es/mail/>. Puede acceder con el nombre de usuario y la contraseña de su dirección de correo electrónico.

> [!primary]
>
> Si necesita ayuda para recibir o enviar mensajes de correo, consulte nuestras [FAQ en los servicios de correo de OVHcloud](https://docs.ovh.com/es/emails/correo-electronico-faq/).
>

## Más información

[Configurar una cuenta de correo electrónico en iPhone o iPad](https://docs.ovh.com/es/emails/correo_guia_de_configuracion_en_iphone_ios_91/)

[Configurar una cuenta Exchange en iPhone o iPad](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-ios-iphone-ipad/)

[FAQ e-mails](https://docs.ovh.com/es/emails/correo-electronico-faq/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.