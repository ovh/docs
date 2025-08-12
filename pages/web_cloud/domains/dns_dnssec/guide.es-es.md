---
title: "Proteger su dominio con DNSSEC"
excerpt: "Descubra cómo proteger un dominio del cache poisoning activando DNSSEC"
updated: 2025-03-04
---

## Objetivo 

Un servidor DNS aloja una o más zonas DNS. Una zona DNS contiene la configuración DNS de un dominio. Esta configuración conecta el dominio con los distintos servicios asociados (servidor de alojamiento para su sitio web, servidores para sus direcciones de correo personalizadas con su nombre de dominio, etc.).

En algunos casos, los flujos de datos que transitan por los servidores DNS pueden ser utilizados por personas malintencionadas.
Para ello, estas personas envenenan la caché de los servidores DNS con la configuración DNS que desean aplicar a su dominio: es lo que se llama "cache poisoning".
De este modo, pueden redirigir los flujos entrantes de su dominio hacia sus propios sitios web y hacia sus propias direcciones de correo.

El **D**omain **N**ame **S**ystem **SEC**urity extensions (**DNSSEC**) permite proteger la configuración DNS de su nombre de dominio contra el "cache poisoning" verificando y autentificando las respuestas DNS.

**Descubra cómo activar DNSSEC para su dominio para protegerlo contra el "cache poisoning".**

> [!primary]
>
> La opción DNSSEC no está disponible actualmente para los dominios registrados con OVHcloud y cuya extensión es **.it**.
>

Para más información sobre el funcionamiento del **DNSSEC**, consulte nuestra página "[Comprender DNSSEC](/links/web/domains-dnssec)".

Si desea más información sobre estos temas, no dude en consultar nuestras guías sobre [los servidores DNS OVHcloud](/pages/web_cloud/domains/dns_server_general_information) y sobre la [edición de una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

## Requisitos

- Tener un dominio.
- El dominio debe tener una extensión compatible con DNSSEC.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), en la parte `Web Cloud`{.action}.

## Procedimiento

Para comprobar si su dominio utiliza la configuración DNS de OVHcloud, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!warning]
>
> **Estos tres pasos solo son válidos si el dominio está registrado en OVHcloud.** En caso contrario, deberá comprobarlo en el agente registrador del dominio.
>
> Si los nombres de los servidores DNS acaban en *ovh.net* (excepto el servidor *snds2.ovh.net*), *ovh.ca* o *anycast.me*, el dominio utiliza los servidores DNS de OVHcloud.
>

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Abra la pestaña `Servidores DNS`{.action} y seleccione el dominio correspondiente.
>>
>> Si los nombres de los servidores DNS acaban en *ovh.net* (excepto el servidor *snds2.ovh.net*), *ovh.ca* o *anycast.me*, el dominio utiliza los servidores DNS de OVHcloud.

> [!primary]
>
> La activación y desactivación del **DNSSEC** tarda **24** horas en ser efectiva.
>
> Si posteriormente desea cambiar los servidores DNS asociados a su dominio, la modificación de los servidores DNS no será efectiva por parte de OVHcloud hasta que desactive el **DNSSEC**. A partir de entonces, la propagación DNS del cambio tardará entre **24** y **48** horas.
>
> En total, la modificación de los servidores DNS de un dominio con la solución **DNSSEC** activa será plenamente efectiva al cabo de **48** a **72** horas.
>

Existen tres posibilidades para activar el servicio **DNSSEC**.

### Caso 1 - Su dominio está registrado con OVHcloud y utiliza los servidores DNS de OVHcloud

Para activar (o desactivar) la solución **DNSSEC** para su dominio, haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se abrirá una página en la que podrá consultar la información general del dominio. Puede consultar el estado de activación del **DNSSEC** en dicho dominio.
>>
>> En el recuadro `Seguridad`, compruebe el estado que aparece junto a `Delegación segura (DNSSEC)`.
>>
>> ![Secured Delegation DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Con el botón de activación situado sobre la opción `Delegación segura (DNSSEC)`{.action}, puede activar o desactivar el **DNSSEC** en su dominio. Al realizar esta acción, se abrirá una nueva ventana desde la que podrá confirmar el cambio.
>>
>> ![Enable DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec-confirmation.png){.thumbnail}

### Caso 2 - Su dominio está registrado con OVHcloud y no utiliza los servidores DNS de OVHcloud

En ese caso, póngase en contacto con el proveedor que gestione la configuración DNS de su dominio y pídale que active el servicio DNSSEC "Key Tag", "Flag", "Algoritmo", "Clave pública (codificada en base 64)".

Una vez recuperados estos 4 parámetros, haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 3**
>>
>> A continuación, haga clic en la pestaña `Registros DS`{.action}. **Esta ficha sólo aparece si el dominio utiliza servidores DNS externos**.
>>
>
>>
>> En la nueva página que aparece, haga clic en el botón `Editar`{.action} a la derecha y seleccione el botón `+`{.action}.
>>
>
>>
>> Rellene los 4 formularios `Key Tag`, `Flag`, `Algoritmo` y `Clave pública (codificada en base 64)` con los datos comunicados por su actual proveedor.
>>
>> ![DS records](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ds-records/edit-plus-dashboard.png){.thumbnail}
>>
>> Una vez completados los 4 formularios, haga clic en el botón azul `Aceptar`{.action} situado a la derecha de la tabla.

### Caso 3 - Su dominio no está registrado en OVHcloud y utiliza los servidores DNS de OVHcloud

> [!warning]
>
> Antes de continuar, compruebe con el actual agente registrador del dominio que no tiene ninguna opción DNSSEC activa.

A diferencia del **caso n° 2**, en este caso deberá cargar en OVHcloud los parámetros de activación de DNSSEC ("Key Tag", "Flag", "Algoritmo", "Clave pública (codificada en base 64)").

Para ello, utilice las [API de OVHcloud](/pages/manage_and_operate/api/first-steps) y realice las siguientes acciones:

- Visite nuestro sitio web [API OVHcloud](/links/api) (compruebe que está en `https://eu.api.ovh.com` si sus servicios están alojados en Europa y en `https://ca.api.ovh.com` si están alojados fuera de Europa).
- En la nueva página, haga clic en `Explore the OVHcloud API`{.action}.
- En la nueva página que aparece, en el lado izquierdo de la página, utilice el menú desplegable situado a la derecha del formulario `v1`{.action} y seleccione o introduzca la opción `/domain`.
- En la columna izquierda, debajo de la lista de API, busque y haga clic en la siguiente API: **POST /domain/zone/{zoneName}/dnssec**. También puede hacer clic directamente en este enlace para acceder:

> [!api]
>
> @api {v1} /domain POST /domain/zone/{zoneName}/dnssec
>

- En la parte derecha de la página se muestra la API con sus diferentes formularios a rellenar.
- Haga clic en el botón situado en la esquina superior derecha, titulado `Authenticate`{.action}, y luego en el botón `Login with OVHcloud SSO`{.action}.
- Se abrirá la interfaz de conexión a su [área de cliente de OVHcloud](/links/manager).
- Conéctese a su cuenta y haga clic en `Authorize`{.action} para utilizar las API de OVHcloud con los servicios presentes en su área de cliente.
- A continuación, el sistema le redirigirá automáticamente a la página anterior de la API **POST /domain/zone/{zoneName}/dnssec**, donde ya estará autenticado.
- En la parte derecha de la página se muestra la API con un formulario a rellenar.
- Rellene el formulario de la sección `PATH PARAMETERS` del siguiente modo:
- `zoneName`: introduzca aquí el nombre de dominio correspondiente (por ejemplo, `domain.tld`).

![API](/pages/assets/screens/api/post-domain-zone-zonename-dnssec.png){.thumbnail}

Una vez que haya completado el formulario, haga clic en el botón azul `EXECUTE`{.action} situado en la parte inferior derecha de la sección que haya completado.

Al cabo de unos minutos, OVHcloud le enviará un mensaje de correo electrónico a la dirección de contacto de su zona DNS de OVHcloud.
Este mensaje de correo electrónico contendrá los 4 parámetros ("Key Tag", "Flag", "Algoritmo", "Clave pública (codificada en base 64)") necesarios para activar DNSSEC en el agente registrador del dominio.

> [!success]
>
> Revise el correo no deseado si no lo ha recibido en una hora.

Por último, póngase en contacto con el actual agente registrador del dominio con los 4 parámetros para activar la opción DNSSEC por su parte.

## Más información

[Información general sobre los servidores DNS de OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).