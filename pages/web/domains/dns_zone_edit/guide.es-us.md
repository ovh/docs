---
title: 'Editar una zona DNS de OVHcloud'
excerpt: 'Cómo editar una zona DNS desde el área de cliente de OVHcloud'
slug: web_hosting_como_editar_mi_zona_dns
section: 'DNS (servidor y zona)'
---

**Última actualización: 05/05/2020**

## Objetivo

La zona DNS (Domain Name System) de un dominio es el archivo de configuración en el que se almacena su información técnica en forma de registros. Convencionalmente, estos registros sirven de enlace entre el dominio y el servidor o servidores en los que están alojados el sitio web y las cuentas de correo electrónico.

**Esta guía explica cómo editar una zona DNS desde el área de cliente de OVHcloud.**

## Requisitos

- Tener acceso a la gestión del dominio desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Utilizar la configuración de OVHcloud (es decir, sus servidores DNS) para el dominio en cuestión. 

> [!warning]
>
> - Si el dominio no utiliza los servidores DNS de OVHcloud, deberá realizar los cambios necesarios desde el panel que le ofrezca el proveedor que gestione la configuración de su dominio.
> - Si el dominio está registrado con OVH, compruebe que utiliza nuestra configuración. Para ello, en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccione el dominio en la columna izquierda y abra la pestaña `Servidores DNS`{.action}.
>

## Procedimiento

**Editar una zona DNS es una operación delicada.** Una modificación errónea podría, por ejemplo, deshabilitar el acceso al sitio web o la recepción de nuevos mensajes en las direcciones de correo electrónico.

Conocer los distintos tipos de registros le permitirá entender mejor los cambios que debe realizar al editar la zona DNS del dominio. La siguiente tabla describe la función de cada registro:

|Registro|Descripción|  
|---|---|
|A|Permite asociar un dominio a una dirección IP (IPv4) como, por ejemplo, la dirección IP del servidor en la que está alojado el sitio web.|
|AAAA|Permite asociar un dominio a una dirección IP (IPv6) como, por ejemplo, la dirección IP del servidor en la que está alojado el sitio web.|
|CNAME|Permite que un dominio utilice la dirección o direcciones IP de otro dominio, al asociarlas mediante la creación de un alias. Por ejemplo, si **www.example.com** es un alias de **example.com**, significa que www.example.com utiliza la dirección o direcciones IP de example.com.|
|MX|Permite asociar un dominio a un servidor de correo indicando la dirección del servidor en el que está alojada la solución de correo. Es probable que el proveedor disponga de varios servidores de correo, en cuyo caso será necesario crear varios registros MX.|
|SRV|Indica la dirección del servidor que gestiona un servicio como, por ejemplo, la dirección de un servidor SIP o la de un servidor que permite que un cliente de correo se configure automáticamente mediante el *autodiscover*.|
|TXT|Permite añadir el valor que desee (en formato de texto) a los parámetros DNS del dominio. Este registro suele utilizarse en procesos de verificación.|
|SPF|Permite evitar posibles usurpaciones de identidad con las direcciones de correo electrónico que utilizan el dominio, por ejemplo, identificando el servidor de su proveedor de solución de correo electrónico como único origen de envío legítimo. Encontrará más información en nuestra guía sobre [cómo añadir un registro SPF a la configuración del dominio](../web_hosting_el_registro_spf/){.external}.|
|CAA|Permite indicar las autoridades de certificación autorizadas a emitir certificados SSL para un dominio.|

### 1. Acceder a la gestión de la zona DNS del dominio

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con la configuración del dominio en OVHcloud. Cada línea de la tabla contiene un registro DNS. Puede filtrar el contenido por tipo de registro o por dominio.

![Zona DNS](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### 2. Editar la zona DNS del dominio

Para añadir, modificar o eliminar un registro DNS, es posible editar la zona DNS del dominio  de dos maneras distintas:

- **Editando manualmente la zona en modo de texto** (solo para usuarios avanzados): En la pestaña `Zona DNS`{.action} del dominio, haga clic en el botón `Editar en modo de texto`{.action} situado a la derecha y siga los pasos que se indican.
- **Utilizando nuestros asistentes de configuración**.

Esta guía solo hace referencia a la configuración a través de nuestros asistentes.

> [!primary]
>
> Compruebe que dispone de toda la información que desea modificar en la zona DNS de OVH. Si realiza la operación a petición de un proveedor de servicios, este último deberá proporcionarle la lista de elementos que deba modificar.
>

#### Añadir un nuevo registro DNS

Para añadir un nuevo registro DNS, en la pestaña `Zona DNS`{.action} del área de cliente, haga clic en el botón `Añadir un registro`{.action}, situado a la derecha de la tabla. Seleccione el tipo de registro DNS y siga los pasos que se indican.

No obstante, le recomendamos que antes se asegure de que el registro no exista ya y no apunte hacia un destino diferente. Para ello, puede filtrar el contenido de la tabla por tipo de registro o por dominio. Si el registro ya existe, modifíquelo mediante el procedimiento que se indica a continuación.

![Zona DNS](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

#### Modificar un registro DNS existente

Para modificar un registro DNS, en la pestaña `Zona DNS`{.action} del área de cliente, haga clic en el icono con forma de rueda dentada situado al final de la línea correspondiente al registro que quiera modificar. A continuación, seleccione `Modificar el registro`{.action} y siga los pasos que se indican.

![Zona DNS](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### Eliminar un registro DNS

Para eliminar un registro DNS, en la pestaña `Zona DNS`{.action} del área de cliente, haga clic en el icono con forma de rueda dentada situado al final de la línea correspondiente al registro que quiera eliminar. A continuación, seleccione `Eliminar el registro`{.action} y siga los pasos que se indican.

Es posible eliminar varios registros al mismo tiempo. Para ello, marque las casillas correspondientes a los registros que quiera eliminar y haga clic en el botón `Eliminar`{.action} que aparecerá en la parte superior de la tabla.

![Zona DNS](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### 3. Esperar a que se propaguen los cambios

Una vez que haya editado la zona DNS del dominio, la modificación tardará un máximo de 24 horas en propagarse y ser efectiva.

Si quiere reducir este intervalo de tiempo en sucesivas ediciones de la zona DNS, puede modificarlo hasta cierto punto editando el TTL (*Time To Live*) aplicable a todos los registros de la zona DNS.
Para ello, en la pestaña `Zona DNS`{.action} del área de cliente, haga clic en el botón `Modificar el TTL por defecto`{.action} y siga los pasos que se indican. 

También es posible modificar el TTL de un registro DNS concreto. Esta operación solo puede realizarse en los registros uno a uno, al añadirlos o modificándolos como se indica más arriba.

## Más información

[Información general sobre los servidores DNS](../web_hosting_informacion_general_sobre_los_servidores_dns/){.external}

[Añadir un registro SPF a la configuración del dominio](../web_hosting_el_registro_spf/){.external}

[Proteja su dominio contra el «cache poisoning» con el servicio DNSSEC](https://www.ovh.es/dominios/servicio-dnssec.xml){.external}

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
