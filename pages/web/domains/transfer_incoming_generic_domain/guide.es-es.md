---
title: 'Transferir un dominio a OVHcloud'
slug: transferir-un-dominio-generico
excerpt: 'Cómo realizar la transferencia de un dominio a OVHcloud'
section: 'Operaciones en los dominios'
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 24/10/2022**

## Objetivo

Si tiene un dominio registrado con otro proveedor y quiere transferirlo a OVHcloud, puede transferirlo a OVHcloud.

La transferencia de un dominio permite cambiar el agente registrador que lo gestiona. Puede transferir su dominio a OVHcloud creando un pedido. Esta operación suele tardar entre uno y diez días.

**Esta guía explica cómo transferir un dominio genérico a OVHcloud.**

> [!warning]
>
> Si el dominio que está siendo modificado se encuentra registrado en OVHcloud, la transferencia entrante de dominio no es el procedimiento adecuado. Este procedimiento solo se aplica al cambio de dominio registrado (OVHcloud).
>
> Para transferir la gestión de su dominio a otra cuenta de cliente de OVHcloud, el método adecuado es un *cambio de contactos*. El procedimiento se describe en [esta guía](https://docs.ovh.com/es/customer/gestion-de-los-contactos/).
>
Si también debe cambiar el **propietario** del dominio, debe hacerlo **antes** de cambiar los contactos del dominio. Para ello, siga las indicaciones que le indicamos en la guía sobre el [cambio de propietario de los dominios](https://docs.ovh.com/es/domains/cambio-propietario-dominio/).
>

## Requisitos

- El dominio está registrado en otro agente registrador.
- El nombre de dominio existe desde hace más de 60 días.
- El nombre de dominio no ha sido transferido o no ha cambiado de propietario en los últimos 60 días.
- El estado del dominio es "OK" o "Transferible".
- El dominio no ha caducado y tiene una fecha de expiración que permite finalizar la transferencia a su debido tiempo (se recomienda: más de 60 días).
- Poder desbloquear el dominio.
- Poseer el código de transferencia o tener la posibilidad de obtenerlo.
- Estar facultado para solicitar la transferencia del dominio.
- Haber informado al propietario del dominio y a sus administradores de la solicitud de transferencia.

## Procedimiento

El procedimiento de transferencia se desarrolla en varias etapas e involucra a varias entidades, entre ellas su actual agente registrador, OVHcloud y otras partes. La siguiente tabla resume las etapas de una transferencia.

|Etapa|Descripción|Quién realiza la acción|Dónde|Plazo|
|---|---|---|---|---|
|1|Comprobar la información relativa al dominio|El administrador del dominio|En el actual agente registrador|-|
|2|Desbloquear el dominio y obtener el código de transferencia|El administrador del dominio, con la autorización del propietario|En el actual agente registrador|-|
|3|Solicitar la transferencia del dominio|Cualquiera que posea el código de transferencia, también con el permiso del propietario|Con el nuevo agente registrador (por ejemplo, OVHcloud)|-|
|4|Validación de la transferencia|El actual agente registrador|A través de una solicitud enviada por la entidad que gestiona la extensión del dominio|Máximo 5 días|

> [!warning]
>
> El procedimiento exacto de transferencia de dominio puede variar, especialmente en el caso de determinados TLD de código de país (ccTLD, como .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, etc.) y de algunos TLD especiales (.am, .fm, etc.). Según la extensión del dominio, es posible que sea necesario cumplir requisitos adicionales. Le recomendamos que compruebe en primer lugar la información mostrada para la extensión en cuestión, en nuestro sitio web: <https://www.ovhcloud.com/es-es/domains/tld/>.
>

### 1. Comprobar la información relativa al dominio

**En primer lugar, es importante comprobar que la información relativa al dominio esté actualizada.** Desde la introducción del RGPD, los datos visibles en el ["Whois"](https://www.ovh.es/soporte/herramientas/check_whois.pl) se han vuelto muy limitados. Por lo tanto, le recomendamos que consulte la información relativa al dominio en su agente registrador actual.

- ** Si los datos son correctos: vaya al siguiente paso de esta guía.**

- ** Si los datos son incorrectos o invisibles: contacte con su actual agente registrador para comprobarlo y/o modificarlo.**

> [!primary]
>
> Si no sabe qué agente registrador es responsable del dominio, las líneas Registrar, que aparecerán en el resultado de la búsqueda de la [herramienta Whois](https://www.ovh.es/soporte/herramientas/check_whois.pl){.external}, le facilitarán información sobre su identidad.
>

### 2. Desbloquear el dominio y obtener el código de transferencia

Una vez que haya comprobado la información, es necesario desbloquear el dominio. Esta operación solo puede realizarse en el actual agente registrador. Por lo tanto, le invitamos a que se ponga en contacto con él para conocer el procedimiento que este haya establecido.

Una vez desbloqueado el dominio, el agente registrador deberá enviarle el código de transferencia correspondiente. A veces este código se hace referencia con diferentes nombres, como por ejemplo: "código de transferencia", "Código Auth", "InfosAuth" o "Código EPP".

Tenga en cuenta que OVHcloud no es el agente registrador del dominio al iniciar la transferencia, por lo que no podemos desbloquearlo ni proporcionarle el código de transferencia.

> [!warning]
>
> Una vez desbloqueado el dominio, tendrá 7 (7) días para realizar la transferencia a OVHcloud. Después de este período, el dominio se bloqueará automáticamente si no solicita la modificación del agente registrador.
>

### 3. solicitar la transferencia del dominio a OVHcloud

Una vez desbloqueado el dominio, y con el código obtenido, puede solicitar la transferencia a OVHcloud desde [nuestro sitio web](https://www.ovhcloud.com/es-es/domains/){.external}. Para ello, introduzca el dominio en el campo de registro de un dominio y continúe con el pedido.

Cuando se le pida el código de transferencia, introdúzcalo en el campo situado junto al dominio. Si todavía no tiene el código de transferencia, puede marcar la casilla `Introducir código de transferencia más adelante`{.action}. No obstante, le recomendamos que, antes de continuar, se asegure previamente de que podrá obtener el código. Tenga en cuenta que la transferencia no se iniciará hasta que se haya proporcionado un código válido.

También puede completar el pedido con un [alojamiento web](https://www.ovhcloud.com/es-es/web-hosting/){.external} y otras soluciones de OVHcloud. Esto le puede interesar si quiere migrar sus servicios a OVHcloud. Nuestra guía [Migrar un sitio web y el correo a OVHcloud ](../../hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external} explica cómo hacerlo.

> [!warning]
>
> Durante el proceso de contratación, le recomendamos que tenga en cuenta los siguientes aspectos:
>
> - **datos sobre el propietario del dominio.** Particularmente desde la entrada en vigor del RGPD, es fundamental asegurarse de que la información sobre el propietario del dominio se corresponde con la almacenada por su actual agente registrador. para evitar cualquier sospecha de robo de dominios.
>
> - **introduciendo los servidores DNS para su dominio.** Si está utilizando su dominio para mantener un sitio web o un servicio de correo en internet, deberá indicar sus servidores DNS para evitar interrupciones del servicio.
>

#### Gestión del propietario y detalles de los servidores DNS

- Al hacer clic en `Cambiar la configuración`{.action}, puede introducir los nombres de los servidores DNS que el dominio utiliza actualmente. De este modo, el dominio ya estará asociado a estos servidores DNS en la configuración de OVHcloud.

- Si continúa sin realizar esta operación, el dominio se añadirá a los servidores DNS de OVHcloud con una nueva zona DNS. En ese caso, puede ser necesario [modificar manualmente la zona DNS](../web_hosting_como_editar_mi_zona_dns/).

- En algunos casos, es posible que sea necesario disponer de información adicional sobre el propietario del dominio. Para añadir esta información, haga clic en la opción `Gestionar los contactos o el propietario`{.action}.

![dominio](images/Order_summary.png){.thumbnail}

#### Seguimiento de la transferencia tras el pedido

Una vez validado el pedido, recibirá una orden de pedido. La transferencia no se iniciará hasta que se reciba el pago. Una vez realizada esta operación, puede consultar el progreso de la transferencia desde [el área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Para consultar el progreso, haga clic en `Dominios`{.action} y seleccione `Operaciones en curso`{.action}.

> [!primary]
>
> Si el código de transferencia no se ha introducido durante el pedido, podrá introducirlo en la ventana `Operaciones en curso`{.action} para validar la transferencia.

### 4. validación de la transferencia por el actual agente registrador

Una vez validados el pedido y el código de transferencia, el actual agente registrador (que todavía no es OVHcloud) recibirá una solicitud de validación. Aquí también pueden darse varias situaciones.

|Escenarios posibles|Resultado|
|---|---|
|Validación del actual agente registrador.|La transferencia se realiza en un plazo de **24 horas**.|
|El actual agente registrador no responde a la solicitud.|La transferencia se realiza al cabo de **5 días**.|
|El actual agente registrador rechaza la solicitud.|La transferencia se **anula** en cuanto se rechaza.|

Si el actual agente registrador rechaza la solicitud, contacte con él para conocer el motivo por el que la rechazó.

El proceso de transferencia puede reanudarse desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Seleccione `Web Cloud`{.action} y acceda a la sección `Dominios`{.action} y haga clic en `Operaciones en curso`{.action}.

> [!Primary]
>
> La transferencia de un dominio con la extensión ".fr" difiere ligeramente del proceso arriba descrito. Desbloquee el dominio y obtenga el código de transferencia del actual agente registrador.
> Inicie el pedido de la transferencia e introduzca el código de transferencia como se ha descrito anteriormente.
>
> Una vez iniciada la transferencia, el plazo total de **transferencia de un nombre de dominio a ".fr" tarda al menos 8 días incompresibles**.
>
> En caso de **oposición a la transferencia por el actual agente registrador**, la transferencia **se realizará de todas formas**, pero tardará un **mínimo de 22 días en completarse**.
>

### 5. gestionar su dominio con OVHcloud

Una vez finalizado el procedimiento de transferencia, podrá administrar su dominio desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Para ello, seleccione `Web Cloud`{.action}, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente.

## Más información

[Migración de un sitio web y el correo a OVHcloud](../../hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/)

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
