---
title: 'Configurar una dirección de correo electrónico en la interfaz web de Gmail'
excerpt: 'Cómo configurar una cuenta MX Plan en la interfaz web de Gmail'
updated: 2023-11-20
---

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes desde su dispositivo sin necesidad de una nueva aplicación o interfaz web.

**Esta guía explica cómo configurar una dirección de correo MX Plan en la interfaz web de Gmail.**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external}).
- Disponer del nombre de usuario y la contraseña de la dirección de correo de OVHcloud que quiera configurar.
- Disponer de las claves de la cuenta Gmail (Personal o Profesional) en la que quiera configurar la dirección de correo de OVHcloud.

> [!primary]
>
> Esta guía toma como referencia la nueva interfaz de Gmail. Es posible que las imágenes que aquí aparecen sean ligeramente diferentes de las de su versión, pero los pasos que debe seguir son los mismos.
>

## Procedimiento

### 1. Añadir una cuenta de correo de OVHcloud en la interfaz de Gmail

En primer lugar, acceda a la interfaz web de Gmail desde su navegador de internet. Introduzca la información de su cuenta Gmail y conéctese.

Haga clic en el icono con forma de rueda dentada y seleccione `Ver todos los ajustes`{.action}. A continuación, haga clic en `Cuentas e importación`{.action}. 

![MX Plan](images/configuration-gmail-web-step1.png){.thumbnail}

En el apartado **Consultar el correo de otras cuentas**, haga clic en `Añadir una cuenta de correo`{.action}. Se abrirá una ventana en la que deberá introducir su dirección de correo electrónico de OVHcloud y hacer clic en `Siguiente`{.action}. Seleccione la opción `Importar correos electrónicos de mi otra cuenta (POP3)`{.action} y haga clic en `Siguiente`{.action}.

![MX Plan](images/configuration-gmail-web-step2.png){.thumbnail}

Introduzca a continuación la configuración del servidor POP (servidor de entrada) de su dirección de correo de OVHcloud.

|Campo|Descripción| 
|---|---| 
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|  
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Servidor POP|Introduzca el servidor **pop.mail.ovh.ca**.|
|Puerto|Seleccione el puerto **995**.|

Estas son las opciones que puede elegir:

- **Dejar una copia del mensaje recuperado en el servidor**: Le recomendamos que marque esta casilla si quiere conservar en nuestros servidores una copia de los mensajes recibidos en su dirección de correo de OVHcloud.

- **Utilizar siempre una conexión segura (SSL) para recuperar mensajes de correo electrónico**: Asegúrese de marcar esta casilla para que la aplicación pueda conectarse a su dirección de correo de OVHcloud.

- **Etiquetar los mensajes entrantes**: Esta opción le permite añadir una etiqueta a los mensajes de correo electrónico importados desde su dirección de correo de OVHcloud hacia su cuenta de Gmail.

- **Archivar los mensajes entrantes (omitir Recibidos)**: Si selecciona esta opción, los mensajes importados desde su dirección de correo de OVHcloud no aparecerán en la bandeja de entrada de su cuenta de Gmail.

Una vez introducidos los datos, haga clic en el botón `Añadir cuenta`{.action}. Si son correctos, la aplicación se conectará a la cuenta. 

![MX Plan](images/configuration-gmail-web-step3-ca.png){.thumbnail}

A continuación, si quiere enviar mensajes con su dirección de correo de OVHcloud desde la interfaz web de Gmail, marque la casilla `Sí, deseo poder enviar mensajes como`{.action} y haga clic en `Paso siguiente`{.action}. 

Introduzca el nombre que quiere que aparezca en los mensajes que envíe desde esa dirección de correo, marque la casilla `Tratarlo como un alias`{.action} y haga clic en `Siguiente paso`{.action}.

![MX Plan](images/configuration-gmail-web-step4.png){.thumbnail}

Introduzca a continuación la configuración del servidor SMTP (servidor de salida) de su dirección de correo de OVHcloud.

|Campo|Descripción| 
|---|---| 
|Servidor SMTP|Introduzca el servidor **smtp.mail.ovh.ca**.|
|Puerto|Seleccione el puerto **587**.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|  
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|

Una vez introducidos los datos, marque la casilla `Conexión segura mediante TLS`{.action} y haga clic en `Añadir cuenta`{.action}. Si son correctos, la aplicación se conectará a la cuenta. 

![MX Plan](images/configuration-gmail-web-step5-ca.png){.thumbnail}

Por último, debe validar la operación mediante un código de confirmación que recibirá en su dirección de correo de OVHcloud. Para solicitar este código, conéctese a su dirección de correo desde nuestra interfaz web disponible en <https://www.ovh.com/world/es/mail/>. 

Después de validar la operación, la dirección de correo de OVHcloud aparecerá en la pestaña `Cuentas e importación`{.action}.

### 2. Utilizar la dirección de correo desde la interfaz de Gmail

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes desde la interfaz de Gmail.

Para enviar un mensaje con su dirección de correo de OVHcloud desde la interfaz web de Gmail, al redactar un nuevo mensaje deberá elegir la dirección con la que quiere realizar el envío. Puede elegir la dirección en el campo `De`{.action} de la ventana de redacción.

![MX Plan](images/configuration-gmail-web-step6.png){.thumbnail}

No olvide que también puede utilizar nuestra interfaz web en la dirección <https://www.ovh.com/world/es/mail/> para acceder a su dirección de correo de OVHcloud. Para conectarse solo necesitará las claves de acceso.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
