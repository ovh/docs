---
title: Configurar una cuenta Exchange en Mail de macOS
slug: configuracion-mail-macos
excerpt: Cómo configurar una cuenta Exchange en Mail de macOS El Capitan, Sierra y High Sierra
section: Configuración del cliente de correo Exchange
---

**Última actualización: 16/03/2018**

## Objetivo

Es posible configurar sus cuentas Exchange en el cliente de correo que usted utilice, siempre que sea compatible, para utilizarlas y disfrutar de las funciones colaborativas sin necesidad de una nueva aplicación.

**Esta guía explica cómo configurar una cuenta Exchange en Mail de macOS El Capitan, Sierra y High Sierra.**

## Requisitos

- Tener un servicio [Exchange](https://www.ovh.es/emails/){.external}.
- Tener la aplicación Mail instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía es aplicable a las siguientes versiones de macOS: El Capitan, Sierra y High Sierra.
>

## Procedimiento

Existen dos maneras diferentes de añadir la cuenta Exchange a Mail:

- **Utilizando nuestra herramienta Apple Devices**: Haga clic en el siguiente enlace y siga los pasos de configuración: <https://autodiscover.mail.ovh.net/AppleDevices/>.

- **Utilizando el asistente de configuración de la aplicación Mail**: Ejecute la aplicación Mail en su dispositivo.

Esta guía solo hace referencia a la configuración desde la aplicación Mail.

### 1. Añadir la cuenta

Una vez que ejecute la aplicación Mail en su dispositivo, puede añadir una cuenta de dos formas diferentes:

- **La primera vez que inicie la aplicación**, se abrirá una ventana donde deberá elegir el proveedor de su cuenta de correo. Seleccione `Exchange`{.action} y haga clic en `Continuar`{.action}.

- **Si ya tiene alguna cuenta configurada**, haga clic en `Mail`{.action} en el menú superior y luego en `Añadir cuenta`{.action}. Seleccione `Exchange`{.action} y haga clic en `Continuar`{.action}.

![Exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Cumplimente la información de su cuenta:

|Campo|Descripción| 
|---|---| 
|Nombre|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Correo electrónico|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|  

A continuación, haga clic en el botón `Iniciar sesión`{.action}. Si los datos introducidos son correctos, y si el dominio está correctamente configurado en su servicio Exchange, la aplicación se conectará a la cuenta.

![Exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Al elegir las aplicaciones que quiera usar con la cuenta, asegúrese de dejar al menos `Mail`{.action} marcado. Las demás aplicaciones pueden utilizar otras funciones colaborativas inherentes a Exchange. Una vez que haya elegido, haga clic en `Aceptar`{.action}.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

![Exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Si la aplicación Mail no logra conectarse a la cuenta, le recomendamos que realice las siguientes comprobaciones:

- Compruebe la configuración del dominio en su servicio Exchange en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la pestaña `Dominios asociados`{.action}, en la columna **Diagnóstico** de la tabla.

- Intente introducir manualmente las URL de conexión al servicio Exchange. Continúe con la operación, aunque aparezca un mensaje de alerta de seguridad del certificado, y complete los campos **URL interna** y **URL externa** con los datos del servidor en el que esté alojado su servicio Exchange.

Para conocer dichos datos, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} y acceda al servicio Exchange correspondiente. Abra la pestaña `Información general`{.action}. El servidor se indica en el apartado **Conexión**.

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovh.es/emails/){.external} y está disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/){.external}. Puede acceder con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una dirección de correo electrónico incluida con un plan de hosting o un MX Plan en Mail de macOS](https://docs.ovh.com/es/emails/correo_guia_de_configuracion_en_mail_de_mac_-_el_capitan/){.external}

[Configurar una cuenta Email Pro en Mail de macOS](https://docs.ovh.com/es/emails-pro/configurar-email-pro-mail-macos/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.