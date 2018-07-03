---
title: 'Configurar una cuenta Exchange en Android utilizando la aplicación Gmail'
slug: configuracion-android
excerpt: 'Cómo configurar una cuenta Exchange en Android utilizando la aplicación Gmail'
section: 'Configuración en un smartphone o tablet compatible con Exchange'
---

**Última actualización: 31/05/2018**

## Objetivo

Es posible configurar sus cuentas Exchange en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

Esta guía explica cómo configurar una cuenta Exchange en Android utilizando la aplicación Gmail.

## Requisitos

- Tener un servicio [Exchange](https://www.ovh.es/emails/){.external}.
- Tener la aplicación Gmail instalada en su dispositivo. Puede instalarla desde Google Play Store.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía se ha elaborado utilizando un dispositivo Nexus 6 con la versión 7.1.1 de Android. Por ser la aplicación de uso más generalizado, hemos utilizado Gmail, que puede instalarse desde Google Play Store. Si utiliza otra aplicación, el procedimiento para configurar la cuenta podría variar.
>

## Procedimiento

### 1. Añadir la cuenta

Abra la aplicación `Gmail`{.action} desde la pantalla de inicio de su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si todavía no ha configurado ninguna cuenta**, acepte el mensaje de bienvenida y pulse `Añadir una dirección de correo electrónico`{.action}. Seleccione `Exchange y Office 365`{.action}. 

- **Si ya tiene una cuenta configurada**, pulse el botón formado por tres líneas horizontales situado en la esquina superior izquierda y luego pulse la flecha situada a la derecha del nombre de la cuenta de correo ya configurada. A continuación, pulse `Añadir cuenta`{.action} y seleccione `Exchange y Office 365`{.action}. 

![Añadir cuenta Exchange](images/configuration-exchange-gmail-application-android-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y pulse `Siguiente`{.action}.

A continuación, introduzca la contraseña de su cuenta de correo electrónico, no seleccione ningún certificado de cliente y pulse `Siguiente`{.action} para seguir configurando la cuenta de correo. Es posible que la aplicación tenga que conectarse al servidor de OVH para terminar de configurar la cuenta. En ese caso, aparecerá un mensaje de aviso en su dispositivo. Pluse `Aceptar`{.action} para autorizar la conexión.

Introduzca los ajustes del servidor de entrada. Algunos campos podrían autocompletarse.

|Campo|Descripción| 
|---|---| 
|Dominio/Nombre de usuario|Introduzca la dirección de correo electrónico completa.|  
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Certificado de cliente|No seleccione ningún certificado.|
|Servidor|Indique el servidor en el que está alojado su servicio Exchange. Puede consultar esta información en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la pestaña `Información general`{.action} de su servicio Exchange, en el recuadro **Conexión**.|
|Puerto|Introduzca el puerto **443**.|  
|Tipo de seguridad|Seleccione **SSL/TLS**.|

A continuación, pulse `Siguiente`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Conexión a la cuenta Exchange](images/configuration-exchange-gmail-application-android-step2.png){.thumbnail}

Para terminar de configurar la cuenta, deberá autorizar al servidor de OVH a que controle de forma remota algunas funciones relacionada con la seguridad de su dispositivo. Pulse `Aceptar`{.action}, lea la información que se muestra en la pantalla y pulse `Activar este administrador de dispositivos`{.action}.

Por último, puede asignarle un nombre a la cuenta para diferenciarla de las otras cuentas que tenga en la aplicación. Pulse `Siguiente`{.action} para finalizar.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovh.es/emails/){.external} y está disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/){.external}. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta de correo electrónico en Android utilizando la aplicación Gmail](https://docs.ovh.com/es/emails/configuracion-android/){.external}

[Configurar una cuenta Email Pro en Android utilizando la aplicación Gmail](https://docs.ovh.com/es/emails-pro/configuracion-android/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.