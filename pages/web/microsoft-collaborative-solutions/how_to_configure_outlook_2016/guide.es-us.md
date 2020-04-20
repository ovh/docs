---
title: 'Configurar una cuenta Exchange en Outlook 2016 para Windows'
slug: configuracion-outlook-2016
excerpt: 'Cómo configurar una cuenta Exchange en Outlook 2016 para Windows'
section: 'Configuración del cliente de correo Exchange'
---

**Última actualización: 15/06/2018**

## Objetivo

Es posible configurar sus cuentas Exchange en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Exchange en Outlook 2016 para Windows.**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVH pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener un servicio [Exchange](https://www.ovh.es/emails/){.external}.
- Tener Microsoft Outlook 2016 instalado en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.
- El registro SRV de OVH debe estar correctamente configurado en la zona DNS del dominio.

> [!primary]
>
> Si utiliza Outlook 2016 para Mac, consulte nuestra guía [Configurar una cuenta Exchange en Outlook 2016 para Mac](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-outlook-2016-mac/){.external}
>

## Procedimiento

### 1. Añadir la cuenta

Abra la aplicación Outlook en su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya tiene una cuenta configurada**, haga clic en `Archivo`{.action} en el menú superior y luego en `Agregar cuenta`{.action}.

![Exchange](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y haga clic en `Opciones avanzadas`{.action}. Marque la casilla `Permitirme configurar manualmente mi cuenta`{.action} y haga clic en `Conectar`{.action}. A continuación, entre los distintos tipos de cuenta, seleccione **Exchange**.

Se abrirá una ventana en la que deberá introducir la **contraseña** de su cuenta de correo. Marque la casilla para recordar sus credenciales y haga clic en `Aceptar`{.action}.

> [!primary]
>
> Si aparece un mensaje indicándole que Outlook no ha podido configurar su cuenta, es posible que el registro SRV de OVH no esté correctamente configurado en la zona DNS del dominio.
>
> Compruebe la configuración del dominio en su servicio Exchange en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la pestaña `Dominios asociados`{.action}, en la columna **Diagnóstico** de la tabla.
>

![Exchange](images/configuration-outlook-2016-windows-exchange-step2.png){.thumbnail}

Si la configuración del dominio es correcta, aparecerá un mensaje pidiéndole que autorice la conexión hacia el servidor de OVH. Acepte dicha conexión para que su cuenta Exchange se configure automáticamente.

Una vez configurada la cuenta, puede realizar una prueba de envío para comprobar que funcione correctamente.


### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovh.es/emails/){.external} y está disponible en la dirección <https://www.ovh.es/mail/>. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta de correo electrónico en Outlook 2016 para Windows](https://docs.ovh.com/es/emails/configuracion-outlook-2016/){.external}

[Configurar una cuenta Email Pro en Outlook 2016 para Windows](https://docs.ovh.com/es/emails-pro/configuracion-outlook-2016/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.