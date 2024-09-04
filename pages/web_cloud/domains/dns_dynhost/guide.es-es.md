---
title: "Configurar un DNS dinámico (DynHost/DynDNS) para un dominio"
excerpt: "Descubra cómo configurar un registro DNS dinámico para un dominio de OVHcloud"
updated: 2024-09-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La zona **D**omain **N**ame **S**ystem (**DNS**) de un dominio constituye el fichero de configuración de este último. y se compone de información técnica llamada *enregistrement DNS*. La zona DNS es, en cierto modo, un centro de afilamiento. 

Para más información, consulte nuestras guías:

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

La actualización de forma "dinámica" de un registro DNS puede evitar una interrupción prolongada de uno de sus servicios si no dispone de una dirección IP denominada "fija" (que no cambia).

Por ejemplo, el **DynHost** se puede utilizar si *se aloja* (en los locales de su empresa o en su domicilio, pasando por la *box* de su **P**roveedor de**A**cceso a **I**nternet (**PAI**)) un servidor de videojuegos sin tener una dirección IP "fija".

> [!primary]
>
> Cualquier registro "A" o "AAAA" con un TTL (**T**ime **T**o **L**ive) de 60 segundos se considerará DynHost. El TTL es un valor que indica el tiempo que los servidores DNS almacenan en caché un registro DNS antes de actualizarlo.
>

**Descubra cómo configurar un registro DNS dinámico (DynHost) para su dominio de OVHcloud.**

## Requisitos

- Tener acceso a la gestión del dominio desde el [área de cliente de OVHcloud](/links/manager){.external}.
- Utilizar la configuración de OVHcloud (es decir, sus servidores DNS) para el dominio en cuestión. 
- El registro DynHost que vaya a crear no debe existir en la zona DNS de OVHcloud del dominio como registro "A" o "AAAA".

> [!warning]
>
> - Si el dominio no utiliza los servidores DNS de OVHcloud, contacte con el proveedor que gestione su configuración DNS para conocer el procedimiento a seguir.
> 
> - Si el dominio está registrado en OVHcloud, compruebe que utiliza nuestra configuración. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda al apartado `Web cloud`{.action}. En la columna izquierda, abra la pestaña `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Servidores DNS`{.action} para ver los servidores DNS utilizados por su dominio. 
>
> Para saber si utiliza o no los servidores DNS de OVHcloud, estos últimos tienen el siguiente formato: 
>
> - **dnsXX.ovh.net.** y **nsXX.ovh.net.** (donde los "**X**" son cifras que se deben sustituir por los que se refieren a los servidores de su nombre de dominio) si no utiliza la opción *DNS Anycast*
> - **dns200.anycast.me.** y **ns200.anycast.me** si utiliza la opción *DNS Anycast*
> 
> Si lo necesita, consulte nuestra guía relativa a [servidores DNS](/pages/web_cloud/domains/dns_server_general_information) para más información.
>

## Procedimiento

### Etapa 1 : crear un usuario DynHost <a name="step1"></a>

Para crear un usuario DynHost, conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web cloud`{.action}. En la columna izquierda, abra la pestaña `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `DynHost`{.action}.

![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}

Haga clic en el botón `Gestionar los accesos`{.action} y luego en el botón `Crear un usuario`{.action}. Introduzca la información solicitada:

|Campo|Descripción|
|---|---|
|Sufijo del usuario|Establezca un sufijo para el usuario DynHost.|
|Subdominio|Indique el subdominio al que quiere crear el registro DNS dinámico. Si desea gestionar todos los subdominios con un único identificador, escriba el formulario de entrada `*`.|
|Contraseña|Establezca una contraseña para el usuario DynHost y confírmela.|

> [!success]
>
> Para instalar un DynHost directamente para su dominio, introduzca únicamente `*` en el formulario de entrada denominado `Subdominio`{.action}.
>

Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. El usuario aparecerá en la tabla.
 Repita esta operación para cada usuario DynHost que quiera crear.

![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}

### Etapa 2 : crear un registro DNS dinámico (DynHost) <a name="step2"></a>

En segundo lugar, debe crear el registro DNS que se actualizará automáticamente. Le recordamos que el registro DynHost no debe existir en la zona DNS de OVHcloud del dominio como registro A o AAAA. Para comprobarlo y, en su caso, eliminar dicho registro, consulte nuestra guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit){.external}.

Para crear el registro DynHost, vuelva a la página principal de la pestaña `DynHost`{.action} y haga clic en el botón `Añadir un DynHost`{.action}. Introduzca la información solicitada:

|Campo|Descripción|
|---|---|
|Subdominio|Introduzca el subdominio al que pertenezca el registro DNS que deberá actualizarse dinámicamente. Este subdominio debe ser el mismo que haya indicado anteriormente al crear el usuario DynHost. **Si desea implementar un DynHost directamente para su dominio, deje este formulario de entrada vacío**|
|IP de destino|Introduzca la dirección IP (IPv4 o IPv6) que vaya a utilizar el registro DNS. Es generalmente la dirección IP pública de su *box* Internet o de su servidor alojado. Según el principio DynHost, esta se actualizará automáticamente más adelante.|

> [!warning]
>
> Para la creación de un registro DNS dinámico (DynHost), el uso de un *wildcard* (colocando únicamente el carácter `*`) en el formulario `Subdominio`{.action} no está disponible.
>

![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}

Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. El registro aparecerá en la tabla.
 Repita esta operación para cada registro DynHost que quiera crear.

### Etapa 3 : automatizar la actualización del DynHost

Una vez que haya creado el [usuario](#step1) y el [registro DynHost](#step2), deberá automatizar la actualización del registro DNS para que se realice dinámicamente. Para ello, debe utilizar un programa o cliente que le permita comprobar regularmente si la dirección IP de destino ha cambiado para actualizarla automáticamente.

> [!warning]
>
> La instalación y la configuración del software/cliente deben realizarse según sus propios conocimientos. A continuación ofrecemos algunas indicaciones sobre cómo hacerlo. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. 
> Más información en la sección ["Más información"](#go-further) de esta guía.
>

Existen diversas posibilidades en lo que respecta al programa o cliente: 

- puede instalarse en el servidor o en el ordenador;
- ya puede estar disponible en la interfaz de su router/*box* Internet si este es compatible. Si necesita ayuda, puede ponerse en contacto con el equipo de soporte de su **PAI** para realizar la configuración.

Una vez que haya elegido e instalado el cliente, deberá configurarlo utilizando la información del usuario DynHost que haya creado anteriormente en el área de cliente de OVHcloud.

Según el cliente utilizado, además de los elementos del usuario DynHost y del subdominio correspondiente, puede ser necesaria una URL de actualización. En ese caso, utilice la siguiente URL sustituyendo la información genérica:

```bash
https://dns.eu.ovhapis.com/nic/update?system=dyndns&hostname=$HOSTNAME&myip=$IP
```

|Valor|Sustituir por...|
|---|---|
|$HOSTNAME|El subdominio afectado por la actualización.|
|$IP|La nueva dirección IPv4 o IPv6 de destino.|

Puede comprobar si la dirección IP de destino se ha actualizado correctamente. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda al apartado `Web cloud`{.action}. En la columna izquierda, abra la pestaña `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `DynHost`{.action}. Compruebe la dirección IP que aparece en la columna `Destino`{.action}.

> [!warning]
>
> Cualquier modificación en la zona DNS activa de un dominio a través de DynDNS puede provocar un retraso de propagación de la actualización de varios minutos.
>

![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).