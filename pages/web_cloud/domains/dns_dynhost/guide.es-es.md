---
title: "Configurar un DNS dinámico (DynHost/DynDNS) para un dominio"
excerpt: "Descubra cómo configurar un registro DNS dinámico para un dominio de OVHcloud"
updated: 2025-04-28
---

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

- Tener un dominio.
- Tener una zona DNS de OVHcloud para el dominio en cuestión.
- Utilizar la configuración de OVHcloud (es decir, sus servidores DNS) para el dominio en cuestión. 
- El registro DynHost que vaya a crear no debe existir en la zona DNS de OVHcloud del dominio como registro "A" o "AAAA".

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

**Si el dominio no utiliza los servidores DNS proporcionados por OVHcloud**, contacte con el proveedor que gestione su configuración DNS para conocer el procedimiento a seguir.

<!-- CP-STEPS-START:verificar-servidores-dns -->
**Si el dominio está registrado en OVHcloud**, compruebe que utiliza nuestra configuración. Para ello, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Abra la pestaña `Servidores DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se mostrará una tabla con los servidores DNS actualmente definidos por OVHcloud para su dominio. Es posible mostrar varios servidores DNS, cada uno con su propia fila en la tabla.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
<!-- CP-STEPS-END:verificar-servidores-dns -->

> [!success]
>
> Para saber si utiliza o no los servidores DNS de OVHcloud, estos tienen una de las dos formas siguientes:
>
> - `nsXX.ovh.net` y `dnsXX.ovh.net` **o** `nsXXX.ovh.net` y `dnsXXX.ovh.net` (donde cada `X` representa un número comprendido entre **0** y **9**)
> - `ns200.anycast.me` y `dns200.anycast.me` (si ha contratado la opción [DNS anycast](/links/web/domains-options))
> 
> Si lo necesita, consulte nuestra guía relativa a [servidores DNS](/pages/web_cloud/domains/dns_server_general_information) para más información.

## Procedimiento

### 1 - Crear un usuario DynHost <a name="step1"></a>

<!-- CP-STEPS-START:crear-usuario-dynhost -->
Para crear un usuario DynHost, haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Abra la pestaña `DynHost`{.action} y seleccione el dominio correspondiente.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Haga clic en el botón `Gestionar los accesos`{.action} y luego en el botón `Crear un usuario`{.action}.
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Introduzca la información solicitada:
>>
>> |Campo|Descripción|
>> |---|---|
>> |Sufijo del usuario|Establezca un sufijo para el usuario DynHost.|
>> |Subdominio|Indique el subdominio al que quiere crear el registro DNS dinámico. Si desea gestionar todos los subdominios con un único identificador, escriba el formulario de entrada `*`.|
>> |Contraseña|Establezca una contraseña para el usuario DynHost y confírmela.|
>>
>> > [!success]
>> >
>> > Para instalar un DynHost directamente para su dominio, introduzca únicamente `*` en el formulario de entrada denominado `Subdominio`{.action}.
>> >
>>
>> ![Create a DynHost username](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost-username.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. El usuario aparecerá en la tabla.
>>
>> ![DynHost tab](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab.png){.thumbnail}
>>
<!-- CP-STEPS-END:crear-usuario-dynhost -->

Repita esta operación para cada usuario DynHost que quiera crear.

### 2 - Crear un registro DNS dinámico (DynHost) <a name="step2"></a>

En segundo lugar, debe crear el registro DNS que se actualizará automáticamente. Le recordamos que el registro DynHost no debe existir en la zona DNS de OVHcloud del dominio como registro A o AAAA. Para comprobarlo y, en su caso, eliminar dicho registro, consulte nuestra guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-STEPS-START:crear-registro-dynhost -->
Para crear el registro DynHost, haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Abra la pestaña `DynHost`{.action} y seleccione el dominio correspondiente.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Haga clic en el botón `Añadir un DynHost`{.action}.
>>
>> ![DynHost tab empty](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/tab-empty.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Introduzca la información solicitada:
>>
>> |Campo|Descripción|
>> |---|---|
>> |Subdominio|Introduzca el subdominio al que pertenezca el registro DNS que deberá actualizarse dinámicamente. Este subdominio debe ser el mismo que haya indicado anteriormente al crear el usuario DynHost.<br><br>**Si desea implementar un DynHost directamente para su dominio, deje este formulario de entrada vacío**|
>> |IP de destino|Introduzca la dirección IP (IPv4 o IPv6) que vaya a utilizar el registro DNS. Es generalmente la dirección IP pública de su *box* Internet o de su servidor alojado.<br><br>Según el principio DynHost, esta se actualizará automáticamente más adelante.<br><br>Este formulario solo debe incluir una dirección IP.|
>>
>> > [!warning]
>> >
>> > Para la creación de un registro DNS dinámico (DynHost), el uso de un *wildcard* (colocando únicamente el carácter `*`) en el formulario `Subdominio`{.action} no está disponible.
>>
>> ![Create a DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/create-a-dynhost.png){.thumbnail}
>>
>> Una vez que haya completado todos los campos, haga clic en `Aceptar`{.action}. El registro aparecerá en la tabla.
<!-- CP-STEPS-END:crear-registro-dynhost -->

Repita esta operación para cada registro DynHost que quiera crear.

> [!primary]
>
> Si su dominio o subdominio necesita configurarse dinámicamente con, por ejemplo, una IPv4 y una IPv6, puede crear dos registros DNS dinámicos para el mismo dominio o subdominio. El primer registro DNS dinámico será para la IPv4 y el segundo para la IPv6.
>

### 3 - Automatizar la actualización del DynHost

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

Puede comprobar si la dirección IP de destino se ha actualizado correctamente.

<!-- CP-STEPS-START:comprobar-actualizacion-dynhost -->
Para ello, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Abra la pestaña `DynHost`{.action} y seleccione el dominio correspondiente.
>>
>> ![DynHost](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Compruebe la dirección IP que aparece en la columna `Destino`{.action}.
>>
>> ![DynHost target](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dynhost/target.png){.thumbnail}
>>
<!-- CP-STEPS-END:comprobar-actualizacion-dynhost -->

> [!warning]
>
> Cualquier modificación en la zona DNS activa de un dominio a través de DynDNS puede provocar un retraso de propagación de la actualización de varios minutos.
>

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).