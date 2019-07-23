---
title: 'Crear un registro CNAME para asociar un dominio'
slug: exchange_20132016_anadir_un_registro_cname
excerpt: 'Cómo y por qué añadir un registro CNAME a un dominio'
section: 'Primeros pasos con Exchange'
order: 5
---

**Última actualización: 26/03/2019**

## Objetivo

Al asociar un dominio a su servicio de correo, es posible que deba configurar un registro CNAME en la zona DNS de dicho dominio. Este registro permite garantizar que el dominio añadido es legítimo.

**Esta guía explica por qué puede ser necesario crear un registro CNAME al asociar un dominio y cómo hacerlo.**

## Requisitos

- Tener una solución de correo electrónico en OVH.
- Haber añadido al servicio de correo un dominio que requiera la creación de un registro CNAME.
- Poder modificar la configuración (la zona DNS) del dominio.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action}.

## Procedimiento

### 1. El diagnóstico CNAME de OVH

En determinados casos, al declarar un dominio en su servicio de correo aparece la etiqueta de diagnóstico **CNAME** (de Canonical Name).

Esta etiqueta le permite demostrar que usted es el administrador del dominio que desea declarar.

Puede aparecer por los siguientes motivos:

- El dominio no está registrado en OVH.
- El dominio no está administrado por el mismo ID de cliente que el servicio de correo.
- El dominio no utiliza la configuración de OVH (es decir, sus servidores DNS).

![CNAME](images/cname_exchange_diagnostic.png){.thumbnail}

### 2. Obtener la configuración CNAME de OVH

Abra la pestaña `Dominios asociados`{.action} de su servicio Exchange y haga clic en la etiqueta roja `CNAME`{.action} para obtener la información necesaria.

El contenido que deberá tener el registro CNAME se muestra de la siguiente forma:

![CNAME](images/cname_exchange_informations.png){.thumbnail}

Existen dos posibilidades:

- **Si el dominio utiliza la configuración de OVH**, puede realizar las operaciones que se describen a continuación directamente desde el área de cliente de OVH.

- **Si el dominio no utiliza la configuración de OVH** (es decir, si no utiliza los servidores DNS de OVH), deberá realizar los cambios necesarios desde el panel que le ofrezca su proveedor para gestionar sus servidores DNS.

> [!primary]
>
> Si el dominio está registrado en OVH, puede comprobar si utiliza nuestra configuración desde el área de cliente. Para ello, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio. A continuación, abra la pestaña `Servidores DNS`{.action}.
>

### 3. Crear el registro CNAME en la zona DNS de OVH

Haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con la configuración del dominio en OVH. Cada línea de la tabla contiene un registro DNS.

Para añadir un registro CNAME, haga clic en el botón `Añadir un registro`{.action}.

![CNAME](images/cname_exchange_add_entry_step1.png){.thumbnail}

Se abrirá una ventana en la que podrá elegir diversos registros DNS. Haga clic en `CNAME`{.action} e introduzca la información obtenida durante el diagnóstico.

![CNAME](images/cname_add_entry_dns_zone.png){.thumbnail}

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}. Asegúrese de que la información es correcta y haga clic en `Confirmar`{.action}.

> [!primary]
>
> La modificación tarda entre 4 y 24 horas en propagarse y ser efectiva.
>

Puede comprobar si la configuración del registro CNAME es correcta en la pestaña `Dominios asociados`{.action} de su servicio de correo. La etiqueta verde indica que el dominio se ha añadido correctamente. Si sigue estando roja, es posible que la propagación todavía no haya finalizado.

![CNAME](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.