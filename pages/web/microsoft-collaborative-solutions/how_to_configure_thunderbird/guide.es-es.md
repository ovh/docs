---
title: 'Configurar una cuenta Exchange en Thunderbird para Windows'
slug: exchange-configuracion-de-thunderbird
excerpt: 'Cómo añadir una cuenta Exchange en Thunderbird'
section: 'Configuración del cliente de correo Exchange'
order: 6
---

**Última actualización: 17/1/2020**

## Objetivo

Es posible configurar sus cuentas Exchange en el cliente de correo electrónico que usted utilice, siempre que sea compatible. Thunderbird no es compatible con el protocolo Exchange MAPI, pero puede configurarse mediante los protocolos POP e IMAP. En nuestro ejemplo, abordamos la configuración de una cuenta Hosted Exchange mediante el protocolo IMAP.

**Cómo configurar una cuenta Exchange en el cliente de correo electrónico Thunderbird para Windows.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, le recomendamos que recurra a un proveedor especializado y/o
> ponerse en contacto con el editor del servicio si tiene algún problema. Nosotros no podremos asistirle al respecto. Para ahondar en el tema, consulte el apartado [«Más información»](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange-configuracion-de-thunderbird/#mas-informacion_1)
> de esta guía
> 

## Requisitos

- Estar suscrito a un plan de [Exchange](https://www.ovh.es/emails/){.external}.
- Tener la aplicación Thunderbird instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

## Procedimiento

### Etapa 1: abrir la aplicación
Acceda a la aplicación Thunderbird instalada en su dispositivo.

Añada una nueva cuenta a través del siguiente menú. Seleccione `«Correo electrónico»`{.action} para continuar.

![emails](images/configuration-thunderbird-exchange-step1.png){.thumbnail}


### Etapa 2: crear la cuenta
Rellene los campos que aparecen:

- Su nombre y apellido/s: *Aquí, introduzca el nombre para mostrar deseado.*
- Dirección de correo electrónico: *Su dirección de correo electrónico completa.*
- Contraseña: *La contraseña establecida en su [área de cliente](https://www.ovh.com/manager/web/login.html){.external} para la cuenta Exchange.*
- Recordar la contraseña: *Debe marcar esta opción.*

Haga clic en `«Configuración manual»`{.action} y continúe con las distintas etapas de instalación.


![emails](images/configuration-thunderbird-exchange-step2.png){.thumbnail}


### Etapa 3: configurar manualmente

> [!primary]
>
> En nuestro ejemplo, utilizamos el nombre de servidor ex**X**.mail.ovh.net.
> 
> Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, acceda a la sección `«Web»`{.action}y, seguidamente, en la sección `«Microsoft»`{.action}
>  en la columna izquierda. Seleccione `Exchange`{.action} y, a continuación, su plataforma. El servidor puede verse en el recuadro **«Conexión»** de la pestaña `«Información General»`{.action}.
> 

Haga clic en `«Configuración manual`{.action}» y compruebe que se hayan introducido correctamente los elementos siguientes:

- Servidor de entrada: **IMAP** 
- Nombre del host del servidor: *Indique el servidor en el que está alojado su servicio Exchange.*
- Puerto:  **993**
- Método de cifrado:   **SSL**
- Autenticación:  **Contraseña normal**
- Servidor de salida: **SMTP**
- Nombre del host del servidor: *Indique el servidor en el que está alojado su servicio Exchange.* 
- Puerto:  **587** 
- Método de cifrado:  **STARTTLS** 
- Autenticación:  **Contraseña normal** 
- Usuario: *Su dirección de correo electrónico completa.*

> [!primary]
>
> En el caso de las cuentas [Private Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_primeros_pasos_con_un_servidor_private/){.external}, introduzca el servidor que seleccionó al hacer el pedido.
>

Si la autenticación **«Contraseña normal»** no está operativa, puede introducir **NTLM**.

Haga clic en `«Finalizado»`{.action} para terminar la instalación.


![emails](images/configuration-thunderbird-exchange-step3.png){.thumbnail}


### Etapa 4: finalizar

A partir de ahí, su cuenta Exchange está configurada correctamente con el protocolo IMAP y podrá enviar y recibir mensajes.

OVHcloud también propone una aplicación web que cuenta con >. Puede conectarse con las credenciales de acceso de su dirección de correo electrónico.


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.