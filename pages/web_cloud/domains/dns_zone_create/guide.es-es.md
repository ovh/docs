---
title: 'Crear una zona DNS de OVHcloud para un dominio'
excerpt: 'Descubra cómo crear una zona DNS en OVHcloud para su dominio desde el área de cliente'
updated: 2026-03-10
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
pre {
    font-size: 14px !important;
}
pre.bgwhite {
    background-color: #fff !important;
    color: #000 !important;
    font-family: monospace !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
}
pre.bgwhite code {
    background-color: #fff !important;
    border: solid 0px transparent !important;
    font-family: monospace !important;
    font-size: 0.90em !important;
    color: #000 !important;
}
.small {
   font-size: 0.90em !important;
}
</style>

## Objetivo

La zona **D**omain **N**ame **S**ystem (**DNS**) de un dominio constituye el fichero de configuración de este último. y se compone de información técnica llamada *registro DNS*. La zona DNS es, en cierto modo, un centro de distribución.

Para más información, consulte nuestras guías:

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Existen diversos motivos por los que podría necesitar crear una zona DNS para su dominio en OVHcloud.

**Descubra cómo crear una zona DNS en OVHcloud para su dominio desde el área de cliente de OVHcloud.**

## Requisitos

- Tener un dominio.
- El dominio no debe tener ya una zona DNS (activa o no) en OVHcloud ni estar sujeto a una operación o un pedido en curso en OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedimiento

> [!warning]
>
> Puede crear varias zonas DNS (en diferentes proveedores, proveedores o proveedores de alojamiento DNS) para un mismo dominio. No obstante, solo puede tener una zona DNS activa para su dominio. Esta restricción tiene por objeto evitar los *conflictos DNS*.
>
> La activación/desactivación de una zona DNS se realiza a partir de la declaración de los **servidores DNS** ante su nombre de dominio. Puede modificar esta declaración y cambiar los **servidores DNS** de un dominio a: 
>
> - del *registrar* donde ha registrado directamente su nombre de dominio ;
> - del proveedor que lo gestiona si pasa por un proveedor especializado para gestionar su dominio.
>
> Al modificar los **servidores DNS** de un dominio, desactiva la configuración de la antigua zona DNS aplicada en beneficio de la configuración de la nueva zona DNS (presente en los nuevos **servidores DNS** declarados).
>
> Por lo tanto, antes de cambiar los **servidores DNS** declarados con su dominio, compruebe que la configuración de la nueva zona DNS se ajusta a sus expectativas.
>

### 1 - Crear la zona DNS desde el área de cliente de OVHcloud

<!-- CP-STEPS-START:create-dns-zone -->
Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone), y luego en el botón `Contratar`{.action}.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la página que aparece, indique el dominio (por ejemplo: *domain.tld*) para el que desea crear una zona DNS de OVHcloud. Espere unos instantes mientras la herramienta realiza comprobaciones sobre el dominio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Si aparece un mensaje que indica que la zona DNS no puede crearse, verifique que el dominio cumple los requisitos necesarios o contacte con la persona que lo gestiona. Una vez que todo sea correcto, intente de nuevo la operación.
>>
> **Etapa 3**
>>
>> Una vez realizada la comprobación, seleccione si quiere activar los registros mínimos para la zona DNS que va a crear. Esta elección no es definitiva, ya que siempre podrá [editar los registros de la zona DNS](/pages/web_cloud/domains/dns_zone_edit) después.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Activar los registros mínimos ?|Detalles|
>> |---|---|
>> |Sí|Seleccione esta opción si desea personalizar usted mismo la zona DNS más adelante.<br>![mínimo-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |No|Seleccione esta opción si tiene previsto utilizar servicios de OVHcloud como un [alojamiento web](/links/web/hosting), ya que la zona está preconfigurada a tal efecto.<br>![no-mínimo-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Una vez que haya realizado su elección, siga los pasos que se muestran en su área de cliente de OVHcloud hasta la creación de la zona DNS.
<!-- CP-STEPS-END:create-dns-zone -->

### 2 - Editar la zona DNS (opcional)

Una vez que haya creado la zona DNS para el dominio, ya puede editarla. Esta operación es opcional, pero puede ser necesaria para garantizar la disponibilidad de los servicios asociados al dominio (como un sitio web o los mensajes de correo electrónico).

Para editar esta zona DNS, consulte nuestra guía [Editar una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!primary]
>
> Si acaba de crear la zona DNS y el dominio no aparece aún en la lista de sus servicios, espere entre 15 y 20 minutos y vuelva a cargar la página.
>

### 3 - Cambiar los servidores DNS del dominio

Una vez que la zona DNS de OVHcloud esté lista para utilizarse, comuníquela a su dominio para aplicar la configuración que contiene a dicho dominio. 

Por lo tanto, deberá obtener los **servidores DNS** de OVHcloud en los que se ha creado la zona DNS de OVHcloud para su dominio.

<!-- CP-STEPS-START:find-dns-servers -->
Para encontrarlos, haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y elija el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la tabla que aparece en la página, identifique las 2 columnas **Tipo** y **Destino**.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Busque las 2 líneas de tipo **NS** y recupere los 2 valores presentes en la columna **Destino**.
>> Los nombres de los servidores DNS deben tener una de las 3 formas siguientes:
>>
>> - `nsXX.ovh.net` y `dnsXX.ovh.net` o, `nsXXX.ovh.net` y `dnsXXX.ovh.net` (donde cada `X` representa un número entre **0** y **9**).
>> - `nsXX.ovh.ca` y `dnsXX.ovh.ca` o, `nsXXX.ovh.ca` y `dnsXXX.ovh.ca` (donde cada `X` representa un número entre **0** y **9**).
>> - `ns200.anycast.me` y `dns200.anycast.me` (si ha contratado la opción [DNS anycast](/links/web/domains-options)).
<!-- CP-STEPS-END:find-dns-servers -->

Una vez recuperados los 2 nombres de servidor DNS, 2 situaciones son posibles.

> [!primary]
>
> Le recordamos que antes de cambiar los **servidores DNS** declarados con su dominio, compruebe que la configuración de la nueva zona DNS se ajusta a sus expectativas.

**Pulse en una de las 2 situaciones para mostrar el contenido.**

/// details | El nombre de dominio tiene su zona DNS activa en OVHcloud

Consulte [esta guía](/pages/web_cloud/domains/dns_server_edit) para verificar o modificar los servidores DNS declarados para su nombre de dominio.

///

/// details | El nombre de dominio tiene su zona DNS activa en otro proveedor

En este caso concreto, contacte con su proveedor DNS indicándole que desea sustituir los registros DNS de tipo NS para su nombre de dominio.

A continuación se muestra un ejemplo de solicitud para enviar a su proveedor DNS:

<pre class="bgwhite"><code>
Buenos días,

Para mi nombre de dominio <b>domain.tld</b>, deseo sustituir los servidores DNS actuales por los siguientes servidores DNS:

 - nsXX.ovh.net.
 - dnsXX.ovh.net.

Un cordial saludo,
</code></pre>

En el ejemplo anterior, sustituya los valores **domain.tld**, **nsXX.ovh.net** y **dnsXX.ovh.net** por sus propios valores.

///

Después de modificar los servidores DNS del nombre de dominio, la propagación de los cambios puede tardar hasta **48 horas**.

> [!success]
>
> Si desea personalizar los nombres de los servidores DNS asociados a la zona DNS activa de su dominio, consulte nuestra guía "[Personalizar los servidores DNS de un dominio (Glue Records)](/pages/web_cloud/domains/glue_registry)".
>

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).