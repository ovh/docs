---
title: "Modificar los servidores DNS de un dominio en OVHcloud"
excerpt: "Descubra cómo modificar los servidores DNS de su dominio registrado en OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

El acrónimo **DNS** (**D**omain **N**ame **S**ystem) es un conjunto de elementos (servidores DNS, zonas DNS, etc.) que permiten hacer corresponder un nombre de dominio con una dirección IP.

Consulte nuestras guías "[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" y "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)" para más información.

**Descubra cómo modificar los servidores DNS de su dominio OVHcloud en 3 pasos.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Ser titular de un [dominio](/links/web/domains) registrado en OVHcloud.
- Disponer de los permisos [necesarios para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el dominio.

<!-- CP-NAV-START:web-domains -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Dominios](/links/control-panel/web-domains)
- **Ruta de navegación:** `Web Cloud`{.action} > `Dominios`{.action} > Seleccione su dominio

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Un **agente registrador** es una organización autorizada a vender dominios. OVHcloud es uno de estos **agentes registradores**.
>
> Si su dominio no está registrado en OVHcloud, deberá modificar los servidores DNS en el **agente registrador** en el que esté registrado actualmente su dominio.

## Procedimiento

> [!alert]
>
> **Tenga cuidado al modificar los servidores DNS de un dominio.**
>
> Un error de configuración puede hacer que su sitio web sea inaccesible o impedir que sus direcciones de correo electrónico reciban nuevos mensajes. Comprender las consecuencias de dicha modificación le ayudará a entender mejor los cambios que va a realizar.

Al modificar los servidores DNS de su dominio, estará cambiando su configuración DNS. La nueva configuración DNS sustituye a la antigua y se almacena en los servidores DNS recién definidos. Técnicamente, el dominio utilizará entonces una nueva zona DNS.

Sin embargo, es esencial tener en cuenta los siguientes puntos:

- Al cambiar de servidor DNS (por ejemplo, de un DNS externo a un DNS de OVHcloud), el contenido de la antigua configuración/zona DNS no se replica automáticamente en la nueva. Asegúrese de que su nueva zona DNS contiene todos los registros DNS necesarios para que los servicios asociados a su dominio funcionen correctamente (por ejemplo, su sitio web y sus direcciones de correo electrónico).
- Si no desea modificar los servidores DNS sino uno o varios registros de su configuración/zona DNS actual, consulte nuestra guía: "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
- Algunas organizaciones (registros) que gestionan las extensiones de dominio tienen requisitos específicos en cuanto a los servidores DNS (número de servidores de nombres, valor de los registros, etc.). En caso de duda, consulte con el registro responsable del dominio.

### 1 - Modificar los servidores DNS <a name="modify-dns-servers"></a>

Puede ser necesario modificar los servidores DNS de su dominio en las siguientes situaciones:

- Desea utilizar los servidores DNS propuestos por OVHcloud.
- Desea utilizar sus propios servidores DNS (o los proporcionados por un proveedor DNS externo).
- Desea combinar los servidores DNS propuestos por OVHcloud con sus propios servidores DNS.

> [!primary]
>
> Cuando utiliza los servidores DNS de OVHcloud, los números presentes en los nombres de los servidores no tienen ninguna relación con el servicio o servicios que utiliza. Solo la opción [DNS anycast](/links/web/domains-options) utiliza servidores DNS específicos (`ns200.anycast.me` y `dns200.anycast.me`). Cuando los contrata, se le asignan automáticamente.

**Haga clic en las opciones de abajo para ver su contenido.**

/// details | Opción 1 - Utilizar los DNS por defecto de OVHcloud

Esta opción permite aplicar automáticamente la configuración de la zona DNS de OVHcloud existente para su dominio. Previamente, asegúrese de que existe una zona DNS en OVHcloud para su dominio.

> [!primary]
>
> Si es necesario, consulte las guías "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" y/o "[Crear una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_create)" para comprobar si existe una zona DNS de OVHcloud para su dominio.

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} una vez situado en el dominio.
>>
> **Paso 3**
>>
>> La tabla que aparece contiene los servidores DNS actualmente definidos por OVHcloud para su dominio. Pueden aparecer varios servidores DNS, cada uno con su propia línea en la tabla.
>>
>> ![Servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Haga clic en el botón `Modificar los servidores DNS`{.action} situado a la derecha de la tabla "servidores DNS". Según la resolución de su pantalla, el botón puede encontrarse debajo de la tabla.
>>
> **Paso 4**
>>
>> ![Modificar servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}
>>
>> Para utilizar los servidores DNS por defecto de OVHcloud, haga clic en `Aplicar la configuración`{.action}. Aparecerá la siguiente ventana:
>>
>> ![Modificar servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}
>>
>> Muestra los nombres de los 2 servidores DNS que se aplicarán a su dominio. Deben tener una de las 3 formas siguientes:
>>
>> - `nsXX.ovh.net` y `dnsXX.ovh.net` o `nsXXX.ovh.net` y `dnsXXX.ovh.net` (donde cada `X` representa un dígito entre **0** y **9**)
>> - `nsXX.ovh.ca` y `dnsXX.ovh.ca` o `nsXXX.ovh.ca` y `dnsXXX.ovh.ca` (donde cada `X` representa un dígito entre **0** y **9**)
>> - `ns200.anycast.me` y `dns200.anycast.me` (si ha contratado la opción [DNS anycast](/links/web/domains-options))
>>
>> Si corresponden a los que desea aplicar, haga clic en `Aplicar`{.action}.
>>
>> Los 2 servidores DNS declarados (en los registros de tipo NS de la zona DNS de OVHcloud) se utilizarán entonces para su dominio.

Los antiguos servidores DNS declarados y la configuración DNS que aplicaban se desactivarán para su dominio. La zona DNS de OVHcloud se convertirá en la zona DNS activa para su dominio.

///

/// details | Opción 2 - Utilizar mis propios DNS

Esta opción permite declarar los servidores DNS de una zona DNS no gestionada desde el área de cliente de OVHcloud.

Puede tratarse, por ejemplo, de:

- servidores DNS externos proporcionados por uno de nuestros competidores;
- sus propios servidores DNS si aloja su zona DNS en uno de sus servidores. Estos servidores DNS también pueden estar alojados en una infraestructura de OVHcloud (servidor dedicado, VPS, etc.).

> [!success]
>
> Antes de añadir un servidor DNS, compruebe que este **es accesible** y contiene una zona DNS para su dominio. Asegúrese también de que esta zona DNS contiene todos los registros de tipo "NS" hacia todos los servidores DNS que va a declarar para su dominio.
>
> Por ejemplo: desea declarar los servidores DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* y *ns3.dns-server.tld* para su dominio. Deberá entonces comprobar que los tres registros de tipo "NS" siguientes están presentes en las 3 zonas DNS alojadas en estos 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.

Haga clic en las pestañas de abajo para ver cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} una vez situado en el dominio.
>>
> **Paso 3**
>>
>> La tabla que aparece contiene los servidores DNS actualmente definidos por OVHcloud para su dominio. Pueden aparecer varios servidores DNS, cada uno con su propia línea en la tabla.
>>
>> ![Servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Haga clic en el botón `Modificar los servidores DNS`{.action} situado a la derecha de la tabla "servidores DNS". Según la resolución de su pantalla, el botón puede encontrarse debajo de la tabla.
>>
> **Paso 4**
>>
>> ![Modificar servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}
>>
>> Para introducir uno de sus propios servidores DNS, rellene los 2 campos del formulario del recuadro como se indica a continuación:
>>
>> - `Servidor DNS`: nombre del servidor DNS que desea aplicar a su dominio.
>> - `IP asociada (opcional)`: dirección IP (IPv4 o IPv6) del servidor DNS indicado. Solo puede indicar **una dirección IP** en este formulario.
>>
>> > [!warning]
>> >
>> > Cada recuadro de entrada (visible en la captura de pantalla anterior) solo puede contener **un** servidor DNS a la vez. Un servidor DNS corresponde, por tanto, a un recuadro.
>> >
>> > Además, una nota informativa en fondo azul, situada encima del primer recuadro, indica el rango de servidores DNS que puede declarar para su dominio. Estos valores varían según la extensión del dominio.
>>
> **Paso 5**
>>
>> Una vez introducida la información, haga clic en el botón `+`{.action} situado a la derecha de los 2 campos del formulario. Esto añade el servidor DNS y muestra un nuevo recuadro de entrada debajo del anterior.
>>
>> Repita la operación para cada servidor DNS que desee añadir, respetando los límites indicados en la nota informativa.
>> Haga clic en el botón `+`{.action} para cada servidor DNS con el fin de validar su entrada y adición.
>>
>> Una vez añadidos todos sus servidores DNS, haga clic en `Aplicar la configuración`{.action}. Aparecerá la siguiente ventana:
>>
>> ![Modificar servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}
>>
>> Muestra los nombres de los servidores DNS que se aplicarán a su dominio.
>> Si corresponden a los que desea aplicar, haga clic en `Aplicar`{.action}.

Los antiguos servidores DNS declarados y la configuración DNS que aplicaban se desactivarán para su dominio. La zona DNS declarada en sus propios servidores DNS se convertirá en la zona DNS activa para su dominio.

///

/// details | Opción 3 - Utilizar los DNS de OVHcloud y mis propios DNS

Esta opción permite combinar el uso de sus propios servidores DNS manteniendo los servidores DNS de OVHcloud activos para su dominio. Esta combinación permite, por ejemplo, garantizar una mayor disponibilidad para los diferentes servicios asociados a su dominio (alojamiento web, servidores de correo electrónico, etc.). En efecto, si un grupo de servidores DNS deja de estar disponible durante unos minutos, los otros servidores DNS declarados pueden tomar el relevo.

Sin embargo, asegúrese de que las configuraciones de las zonas DNS presentes en los diferentes servidores DNS implicados están correctamente configuradas para funcionar conjuntamente. La mayoría de las veces, todos los servidores DNS estarán operativos. Todos ellos estarán en condiciones de responder a las peticiones que se les realicen de forma aleatoria en la red DNS.

> [!warning]
>
> 1. Tenga cuidado si decide utilizar esta última opción. En efecto, requiere conocimientos avanzados sobre el funcionamiento de la red DNS, los servidores DNS y las zonas DNS.
> 2. La opción [DNSSEC](/pages/web_cloud/domains/dns_dnssec) debe estar desactivada para combinar el uso de sus propios servidores DNS con los DNS de OVHcloud.
> 3. No mezcle un grupo de servidores DNS de OVHcloud con otro grupo de servidores DNS de OVHcloud. Por ejemplo, *dns19.ovh.net* y *ns19.ovh.net* corresponden a un grupo de servidores DNS de OVHcloud, van a la par y están sincronizados. En OVHcloud, los grupos de servidores DNS se identifican por el número presente en los nombres de los servidores. Dos servidores DNS de OVHcloud forman parte del mismo grupo de servidores DNS cuando comparten el mismo número. Por ejemplo, *dns19.ovh.net* y *ns19.ovh.net*.

> [!success]
>
> Antes de añadir un servidor DNS, compruebe que este **es accesible** y contiene una zona DNS para su dominio. Asegúrese también de que esta zona DNS contiene todos los registros de tipo "NS" hacia todos los servidores DNS que va a declarar para su dominio.
>
> Por ejemplo: desea declarar los servidores DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* y *nsXX.ovh.net* para su dominio. Deberá entonces comprobar que los tres registros de tipo "NS" siguientes están presentes en las 3 zonas DNS alojadas en estos 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.

Haga clic en las pestañas de abajo para ver cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} una vez situado en el dominio.
>>
> **Paso 3**
>>
>> La tabla que aparece contiene los servidores DNS actualmente definidos por OVHcloud para su dominio. Pueden aparecer varios servidores DNS, cada uno con su propia línea en la tabla.
>>
>> ![Servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Haga clic en el botón `Modificar los servidores DNS`{.action} situado a la derecha de la tabla "servidores DNS". Según la resolución de su pantalla, el botón puede encontrarse debajo de la tabla.
>>
>> ![Modificar servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}
>>
> **Paso 4**
>>
>> Para introducir uno de sus propios servidores DNS, rellene los 2 campos del formulario del recuadro como se indica a continuación:
>>
>> - `Servidor DNS`: nombre del servidor DNS que desea aplicar a su dominio.
>> - `IP asociada (opcional)`: dirección IP (IPv4 o IPv6) del servidor DNS indicado. Solo puede indicar **una dirección IP** en este formulario.
>>
>> > [!warning]
>> >
>> > Cada recuadro de entrada (visible en la captura de pantalla anterior) solo puede contener **un** servidor DNS a la vez. Un servidor DNS corresponde, por tanto, a un recuadro.
>> >
>> > Además, una nota informativa en fondo azul, situada encima del primer recuadro, indica el rango de servidores DNS que puede declarar para su dominio. Estos valores varían según la extensión del dominio.
>>
>> Una vez introducida la información, haga clic en el botón `+`{.action} situado a la derecha de los 2 campos del formulario. Esto añade el servidor DNS y muestra un nuevo recuadro de entrada debajo del anterior.
>>
>> Repita la operación para cada servidor DNS que desee añadir, respetando los límites indicados en la nota informativa.
>> Haga clic en el botón `+`{.action} para cada servidor DNS con el fin de validar su entrada y adición.
>>
> **Paso 5**
>>
>> Una vez añadidos todos sus servidores DNS, haga clic en `Aplicar la configuración`{.action}. Aparecerá la siguiente ventana:
>>
>> ![Modificar servidores DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}
>>
>> Muestra los nombres de los servidores DNS que se aplicarán a su dominio.
>> Si corresponden a los que desea aplicar, haga clic en `Aplicar`{.action}.

Los antiguos servidores DNS declarados y la configuración DNS que aplicaban se desactivarán para su dominio. Las zonas DNS presentes en sus propios servidores DNS y en los servidores DNS de OVHcloud se convertirán en las zonas activas para su dominio.

///

### 2 - Propagación de la modificación de los servidores DNS

Una vez realizadas las modificaciones, deben tenerse en cuenta dos periodos sucesivos:

- El *registro* que gestiona la extensión de su dominio (por ejemplo, el registro de las extensiones *.fr*) debe ser informado de la modificación DNS realizada en OVHcloud. Siga la progresión de esta operación en la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
- Una vez actualizada la información del *registro*, espere un máximo de **48 horas** para que los cambios realizados se propaguen completamente y sean efectivos.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones en materia de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
