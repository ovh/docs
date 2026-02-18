---
title: "Crear una zona DNS de OVHcloud para un subdominio"
excerpt: "Descubra cómo crear una zona DNS en OVHcloud para un subdominio de un nombre de dominio desde su área de cliente"
updated: 2025-04-28
---

## Objetivo

¿Desea crear una zona DNS para un subdominio?

La zona **D**omain **N**ame **S**ystem (**DNS**) de un nombre de dominio constituye su archivo de configuración. Se compone de información técnica, llamada *registros DNS*. La zona DNS actúa como un centro de enrutamiento.

Para más información, consulte nuestras guías siguientes :

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Normalmente, los registros DNS de un subdominio se configuran directamente desde la zona DNS activa del nombre de dominio del que depende.
Sin embargo, también es posible crear una zona DNS específica para un subdominio.

Por diversas razones, puede que necesite crear una zona DNS para un subdominio en OVHcloud.
Este dispondrá entonces de su propia zona para configurar sus registros DNS.

> [!success]
>
> Para recordar :
>
> - Un nombre de dominio tiene normalmente esta forma : **domain.tld**. Por ejemplo : ovhcloud.com.
> - Un subdominio tiene normalmente esta forma : **sub.domain.tld**. Por ejemplo : help.ovhcloud.com.
>
> Por defecto, un subdominio depende de un nombre de dominio para funcionar.
> En la práctica, no podrá utilizar el subdominio **sub.domain.tld** si no tiene acceso a la gestión del nombre de dominio **domain.tld**.
>
> Si desea crear una zona DNS para un nombre de dominio, consulte directamente [esta guía](/pages/web_cloud/domains/dns_zone_create).

**Descubra cómo crear una zona DNS en OVHcloud para el subdominio de un nombre de dominio desde su área de cliente de OVHcloud.**

## Requisitos

- Disponer del nombre de dominio del que dependerá el subdominio elegido.
- El subdominio en cuestión no debe disponer ya de una zona DNS (activa o no) en OVHcloud o estar siendo objeto de una operación o un pedido en curso en OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### 1 - Crear la zona DNS desde el área de cliente de OVHcloud

> **Paso 2**
>>
>> Pulse en el menú `Zonas DNS`{.action}, y luego en el botón `Comprar`{.action}.
>>
>> ![Nombres de dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la página que aparece, indique el subdominio (por ejemplo : *sub.domain.tld*) para el que desea crear una zona DNS de OVHcloud. Espere unos instantes mientras la herramienta realiza comprobaciones sobre el subdominio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Si aparece un mensaje que indica que la zona DNS no puede crearse, verifique que el subdominio cumple los requisitos necesarios o contacte con la persona que lo gestiona. Una vez que todo sea correcto, intente de nuevo la operación.
>>
> **Paso 4**
>>
>> Una vez finalizada la verificación, elija si desea activar o no las entradas mínimas para la zona DNS que va a crear. Esta elección no es definitiva, siempre podrá [editar los registros de la zona DNS](/pages/web_cloud/domains/dns_zone_edit) más adelante.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |¿Activar las entradas mínimas?|Detalles|
>> |---|---|
>> |Sí|Seleccione **Sí** si desea personalizar usted mismo la zona DNS más adelante.<br>![entradas-dns-minimales](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |No|Seleccione **No** si prevé utilizar servicios de OVHcloud como un [alojamiento web](/links/web/hosting), ya que la zona DNS se configurará automáticamente para estos servicios.<br>![no-entradas-dns-minimales](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Una vez que haya realizado su elección, siga los pasos que se muestran en su área de cliente de OVHcloud hasta la creación de la zona DNS.

### 2 - Editar la zona DNS (opcional)

Ahora que la zona DNS para su subdominio ya está creada, puede editarla desde ahora. Esta operación es opcional, pero puede resultar necesaria si desea garantizar la continuidad de la disponibilidad de los servicios relacionados con este subdominio (como un sitio web y/o correos electrónicos).

Para editar esta zona DNS, consulte nuestra guía « [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ». 

> [!primary]
>
> Si acaba de crear la zona DNS y el subdominio aún no aparece en la lista de sus servicios (en la parte `Web Cloud`{.action} del área de cliente de OVHcloud y luego en la sección `Zonas DNS`{.action}), espere entre 15 y 20 minutos y actualice la página.

### 3 - Declarar los servidores DNS en la zona DNS activa del nombre de dominio del que depende el subdominio elegido

La activación de una zona DNS para un subdominio es diferente a la de un nombre de dominio, ya que un subdominio depende obligatoriamente de un nombre de dominio para funcionar.

Primero, debe recuperar el nombre de los **servidores DNS** de OVHcloud asociados a la zona DNS creada para su subdominio.

Para encontrarlos, pulse en las pestañas siguientes para mostrar sucesivamente cada una de las **3** etapas.

**Paso 2**
>>
>> Pulse en el menú `Zonas DNS`{.action}, y luego seleccione el subdominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la tabla que aparece en la página, identifique las 2 columnas **Tipo** y **Destino**.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Busque las 2 líneas de tipo **NS** y recupere las 2 valores presentes en la columna **Destino**.
>> Los nombres de los servidores DNS deben tener una de las 3 formas siguientes :
>>
>> - `nsXX.ovh.net` y `dnsXX.ovh.net` o, `nsXXX.ovh.net` y `dnsXXX.ovh.net` (donde cada `X` representa un número entre **0** y **9**).
>> - `nsXX.ovh.ca` y `dnsXX.ovh.ca` o, `nsXXX.ovh.ca` y `dnsXXX.ovh.ca` (donde cada `X` representa un número entre **0** y **9**).
>> - `ns200.anycast.me` y `dns200.anycast.me` (si ha contratado la opción [DNS anycast](/links/web/domains-Opciones)).

Una vez recuperados los 2 nombres de servidor DNS, 2 situaciones son posibles :

**Pulse en una de las 2 situaciones para mostrar el contenido.**

/// details | El nombre de dominio del que depende su subdominio tiene su zona DNS activa en OVHcloud

Pulse en las pestañas siguientes para mostrar sucesivamente cada una de las **5** etapas.

> **Paso 3**
>>
>> A la derecha o debajo de la tabla, pulse en `Añadir una entrada`{.action}.
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Paso 4**
>>
>> En la ventana que aparece, seleccione el registro DNS de tipo `NS`{.action}, y luego pulse en `Siguiente`{.action}
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Paso 5**
>>
>> A continuación, introduzca en el campo `Subdominio *` el subdominio correspondiente (por ejemplo : `sub` para el subdominio `sub.domain.tld`), y en el campo `Destino *`, uno de los 2 servidores DNS recuperados anteriormente (por ejemplo : `nsXX.ovh.net`).
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Pulse finalmente en `Siguiente`{.action}.
>>
>> Verifique el resumen, y luego pulse en `Validar`{.action}.
>>
>> **Repita todo el proceso para el segundo servidor DNS.**
>>
>> Si es necesario, consulte también nuestra guía « [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

/// details | El nombre de dominio del que depende su subdominio tiene su zona DNS activa en otro proveedor

En este caso concreto, contacte con su proveedor DNS y le indique que desea añadir 2 registros DNS de tipo NS para su subdominio. 

Este es un ejemplo de solicitud que puede formular a su proveedor DNS :

<pre class="bgwhite"><code>
Buenos días,

Deseo añadir en la zona DNS activa del nombre de dominio <b>domain.tld</b> los siguientes registros DNS de tipo NS para mi subdominio <b>sub.domain.tld</b> :

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Con el fin de activar una zona DNS específica para mi subdominio <b>sub.domain.tld</b>.

Atentamente,
</code></pre>

En el ejemplo anterior, reemplace los valores **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** y **dnsXX.ovh.net** por sus propios valores.

///

> [!warning]
>
> **La observación siguiente no concierne a los 2 registros DNS de tipo NS que acaba de añadir.** 
>
> Si había otros registros DNS presentes en la zona DNS activa del nombre de dominio del que depende su subdominio :
>
> 1. No olvide duplicarlos en la zona DNS creada para su subdominio.
> 2. Una vez duplicados, elimínelos de la zona DNS activa de su nombre de dominio.
>
> De lo contrario, podría haber un conflicto en la resolución DNS.

Después de modificar la zona DNS del nombre de dominio del que depende su subdominio, la propagación de los cambios puede tardar hasta **48 horas**.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)