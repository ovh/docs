---
title: 'Configurar una cuenta Exchange en Thunderbird para macOS'
slug: exchange-configuracion-de-thunderbird-mac
excerpt: 'Cómo configurar una cuenta Exchange en Thunderbird para macOS'
section: 'Configuración en el ordenador'
order: 05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 26/08/2021**

## Objetivo

Es posible configurar sus cuentas Exchange en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos. Thunderbird es un cliente de correo libre y gratuito.

**Esta guía explica cómo configurar una cuenta Exchange en Thunderbird de macOS.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Disponer de una cuenta [Exchange](https://www.ovhcloud.com/es/emails/hosted-exchange/).
- Tener Thunderbird instalado en su macOS.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.
 
## Procedimiento

> [!warning]
>
> En nuestro ejemplo, utilizamos el nombre del servidor: ex**?**.mail.ovh.ca. Debe reemplazar el "? " por el número que designa el servidor del servicio Exchange.
> 
> Encontrará esta cifra en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, en la sección `Web Cloud`{.action} y, seguidamente, en el apartado `Microsoft`{.action}/`Exchange`{.action}. El nombre del servidor puede verse en el recuadro **Conexión** de la pestaña `Información General`{.action}.
> 

### Añadir la cuenta

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya ha configurado** una cuenta: haga clic en `Archivo`{.action} en el menú situado en la parte superior de la pantalla, luego en `Nuevo`{.action} y luego en `Obtener una nueva cuenta de correo..`{.action}.

| | |
|---|---|
|![Thunderbird](images/thunderbird-mac-exchange01.png){.thumbnail}|En la nueva ventana, introduzca los siguientes 3 datos: <br>- Su nombre completo (Nombre mostrado)<br>- Dirección de correo electrónico <br>- Contraseña.|
|Haga clic en `Configurar manualmente...`{.action} para introducir la configuración del servidor **ENTRANT**: <br>- Protocolo **IMAP** <br>- Servidor **ex?.mail.ovh.ca** (sustituya "**?**" por el número del servidor)<br>- Puerto **993** <br>- SSL **SSL/TLS** <br>- Autenticación **Contraseña normal** <br>- Identificador de **su dirección de correo electrónico completa**|![Thunderbird](images/thunderbird-mac-exchange02.png){.thumbnail}|
|![Thunderbird](images/thunderbird-mac-exchange03.png){.thumbnail}|Introduzca la configuración del servidor **SALIENTE**: <br>- Protocolo **SMTP** <br>- Servidor **ex?.mail.ovh.ca** (sustituya "**?**" por el número del servidor)<br>- Puerto **587** <br>- SSL **STARTTLS** <br>- Autenticación **Contraseña normal** <br>- Identificador de **su dirección de correo electrónico completa**<br><br>Para finalizar la configuración, haga clic en `Finalizado.`{.action}|

En una configuración en **POP**, los valores son los siguientes:

|Tipo de servidor|Nombre del servidor|Método de cifrado|Puerto|
|---|---|---|---|
|Entrante|ex**?***.mail.ovh.ca (la mención **"?"** debe sustituirse por el número de su servidor)|SSL/TLS|995|
|Saliente|ex**?***.mail.ovh.ca (la mención **"?"** debe sustituirse por el número de su servidor)|STARTTLS|587|

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de internet. y está disponible en la dirección <https://www.ovh.com/world/es/mail/>. Puede conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, consulte nuestra guía [Consultar su cuenta Exchange desde la interfaz OWA](https://docs.ovh.com/us/es/microsoft-collaborative-solutions/exchange_2016_guia_de_uso_de_outlook_web_app/).

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar**" de la sección "**Thunderbird**" de nuestra guía [Migrar manualmente su dirección de correo electrónico](https://docs.ovh.com/us/es/emails/migrar-sus-direcciones-de-correo-manualmente/#exportar_1).

### Modificar los parámetros existentes

> [!warning]
>
> En nuestro ejemplo, utilizamos el nombre del servidor: ex**?**.mail.ovh.ca. Debe reemplazar el "? " por el número que designa el servidor del servicio Exchange.
> 
> Encontrará esta cifra en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, en la sección `Web Cloud`{.action} y, seguidamente, en el apartado `Microsoft`{.action}/`Exchange`{.action}. El nombre del servidor puede verse en el recuadro **Conexión** de la pestaña `Información General`{.action}.
> 

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- Vaya a `Herramientas`{.action} desde la barra de menú situada en la parte superior de su pantalla.
- Haga clic en `Configuración de las cuentas`{.action}.

![Thunderbird](images/thunderbird-mac-exchange04.png){.thumbnail}

- Para cambiar los parámetros de **recepción** de los mensajes de correo, haga clic en `Configuración del servidor`{.action} en la columna izquierda, bajo su dirección de correo electrónico.

![Thunderbird](images/thunderbird-mac-exchange05.png){.thumbnail}

- Para cambiar la configuración **del envío** de mensajes de correo, haga clic en `Servidor de salida (SMTP)`{.action} situado en la columna izquierda.
- Haga clic en la dirección de correo electrónico correspondiente en la lista y, seguidamente, en `Modificar`{.action}.

![Thunderbird](images/thunderbird-mac-exchange06.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.