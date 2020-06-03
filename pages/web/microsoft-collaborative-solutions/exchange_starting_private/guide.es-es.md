---
title: 'Primeros pasos con el servidor Private Exchange'
slug: exchange_primeros_pasos_con_un_servidor_private
legacy_guide_number: 2074
excerpt: 'Cómo configurar el servidor Private Exchange'
section: 'Primeros pasos con Exchange'
order: 2
---

**Última actualización: 25/3/2020**

## Objetivo

Usted acaba de realizar el pedido de una plataforma Private Exchange. Esta guía explica los pasos que debe seguir para llevar a cabo la primera configuración.

**Cómo configurar la plataforma Private Exchange**

## Requisitos

- Haber contratado el [plan Private Exchange de OVHcloud](https://www.ovh.es/emails/){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager).

## Procedimiento

### Paso 1: recepción del mensaje de correo electrónico de configuración de su plataforma

Una vez realizado el pedido, le enviaremos la información necesaria para configurar la plataforma Private Exchange a la dirección de correo electrónico de contacto indicada en su área de cliente. 

También puede consultar este mensaje de correo electrónico iniciando sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager), haciendo clic en su perfil en la esquina superior derecha y seleccionando `«Mi cuenta»`{.action}. Acceda a la pestaña `«Mensajes recibidos»`{.action} y busque el mensaje de correo electrónico con el siguiente asunto:

> **\[xx-11111-ovh] ¡Su servicio Private Exchange 20_xxx_ está en proceso de entrega!**


![first-use-private-exchange](images/first-use-private-exchange-01.png){.thumbnail}

Dicho mensaje de correo electrónico incluye un enlace que le permitirá realizar las dos acciones necesarias para configurar la plataforma:

- Personalizar el enlace de acceso a su correo electrónico basado en la web (certificado SSL dedicado).
- Introducir una dirección de correo electrónico de contacto para validar su certificado (tenga en cuenta que debe ser una dirección de correo electrónico existente a la que pueda acceder).

Para ello, haga clic en el enlace que figura en el mensaje de correo electrónico y siga con el [paso 2 ](./#paso-2-inicializacion-de-su-plataforma){.external} a continuación.

### Paso 2: inicialización de su plataforma

Tras hacer clic en el enlace del mensaje de correo electrónico correspondiente al [paso 1](./#paso-1-recepcion-del-mensaje-de-correo-electronico-de-configuracion-de-su-plataforma){.external}, identifíquese en la página que se abre.

Será redirigido a la siguiente página de configuración:
![first-use-private-exchange](images/first-use-private-exchange-02.png){.thumbnail}

Complétela observando las indicaciones de la siguiente tabla.

| Elemento          	| Descripción                                                                                                                                                                                                                             	|
|----------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Nombre del servidor 	| En el menú desplegable, seleccione el subdominio asociado a su dominio. <br> En el campo libre, introduzca el dominio que desea asociar.                                                                   	|
| Dirección de correo electrónico               	| Seleccione una dirección de correo electrónico en la lista propuesta. A través de ella, recibirá el mensaje de correo electrónico de validación del certificado SSL de su plataforma, por lo tanto, es imprescindible que sea una dirección de correo válida o que redirija a una dirección de correo electrónico a la que pueda acceder para recibirlo.
| DNS Assist           	| Al marcar esta casilla, usted autoriza la configuración automática de su zona DNS para el nombre de dominio de su plataforma. El dominio se debe gestionar con la misma cuenta de OVHcloud que su plataforma. Si no marca la casilla, le enviaremos un mensaje de correo electrónico con la información necesaria para que configure su zona DNS. 	|

Tras validar este paso, recibirá un mensaje indicándole que la configuración se ha realizado satisfactoriamente. También le indicará la dirección de correo electrónico de validación del certificado SSL y la dirección de acceso al correo electrónico basado en la web de su plataforma.

### Paso 3: configuración manual de la zona DNS del nombre de dominio de su plataforma

> [!primary]
>
> Este paso es opcional si ha marcado «**DNS Assist**» en [el paso 2 ](./#paso-2-inicializacion-de-su-plataforma){.external}.
> 

Si su dominio no está gestionado con la misma cuenta de cliente o no está alojado en OVHcloud, recibirá un segundo mensaje de correo electrónico con toda la información necesaria para configurar manualmente la zona DNS.

El mensaje de correo electrónico incluye las direcciones IPv4 e IPv6 de su plataforma. Introduzca estas direcciones en la zona DNS del subdominio que creó previamente en [el paso 2](./#paso-2-inicializacion-de-su-plataforma){.external}, con los formatos respectivos de un registro de tipo «A» y de un registro de tipo «AAAA». Para obtener más información en cuanto a un nombre de dominio de OVHcloud, consulte nuestra guía [«Editar una zona DNS de OVH»](../../domains/web_hosting_como_editar_mi_zona_dns/).



### Paso 4: validación del certificado SSL

Una vez que haya completado [el paso 2 ](./#etape-2-initialisation-de-votre-plateforme){.external}, recibirá un mensaje de correo electrónico en la dirección que haya elegido para validar el certificado SSL.

El organismo que expide el certificado SSL enviará dicho mensaje de correo electrónico con el siguiente asunto:

> **ORDER #1111111 - Domain Control Validation for exchange.votredomaine.com**

Copie el código que incluye el mensaje de correo electrónico y haga clic en el enlace de validación del certificado SSL.

Cuando aparezca la siguiente ventana, pegue el código en la casilla y, seguidamente, haga clic en `«Next»`{.action}.

![first-use-private-exchange](images/first-use-private-exchange-03.png){.thumbnail}

Un mensaje le informará si el código introducido es válido. En caso afirmativo, haga clic en `«Close window»`{.action}.

### Finalización

Una vez que haya validado el certificado SSL, puede ser necesario un plazo de 4 horas para la activación del servicio. Durante este tiempo, su plataforma Private Exchange no estará visible en el área de cliente.

Una vez que el servidor esté listo y disponible, recibirá un mensaje de correo electrónico de confirmación con el siguiente asunto:

> **\[xx-11111-ovh] ¡Su servicio Private Exchange 20_xxx_ está listo!**

Para añadir su primer nombre de dominio a su plataforma y configurar las cuentas, consulte nuestra guía [«Añadir un dominio a un servicio Exchange»](../anadir-dominio-exchange/) 

## Más información

[Editar una zona DNS de OVH](../../domains/web_hosting_como_editar_mi_zona_dns/)

[Añadir un dominio a un servicio Exchange](../anadir-dominio-exchange/) 

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
