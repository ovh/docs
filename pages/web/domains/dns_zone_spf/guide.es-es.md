---
title: 'Añadir un registro SPF a la configuración del dominio'
excerpt: 'Cómo añadir un registro SPF a la configuración de un dominio en OVH'
slug: web_hosting_el_registro_spf
section: 'DNS (servidor y zona)'
---

**Última actualización: 27/03/2018**

## Objetivo

El SPF (Sender Policy Framework) permite que un servidor que recibe un mensaje de correo electrónico se asegure de que este último ha sido enviado por un servidor legítimo. El SPF se añade como registro en una zona DNS en la que se indican los servidores y las direcciones IP autorizadas a enviar correo electrónico hacia el dominio en cuestión.

**Esta guía explica cómo añadir un registro SPF a la configuración de un dominio en OVH.**

## Requisitos

- Tener acceso a la gestión del dominio desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- El dominio debe utilizar la configuración de OVH (es decir, los servidores DNS de OVH).

> [!warning]
>
> Si el dominio no utiliza los servidores DNS de OVH, deberá editar el SPF desde la interfaz que ponga a su disposición el proveedor que gestione su configuración.
> 
> Si el dominio está registrado en OVH, puede comprobar si utiliza nuestra configuración desde el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external}. Para ello, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio. A continuación, abra la pestaña `Servidores DNS`{.action}.
>

## Procedimiento

### 1. El registro SPF

Antes de añadir o modificar un registro SPF en la configuración de su dominio, es importante entender para qué sirve. El registro SPF permite evitar posibles usurpaciones de identidad con las direcciones de correo electrónico que utilizan su nombre de dominio. 

Esto es posible gracias a la información introducida en el propio SPF, que incluye los siguientes datos:

- **servidores o direcciones IP** para poder identificarlos como origen legítimo del envío;
- **un calificador** para indicar al servidor que reciba los mensajes de correo una reacción específica en respuesta al mensaje considerado como no legítimo, es decir, procedente de un origen que represente un riesgo potencial.

Así pues, usted deberá asegurarse de indicar en el SPF los orígenes de envíos que utilice para enviar emails con su nombre de dominio. Dichos orígenes pueden ser su propio servidor, el de su proveedor o una de las soluciones de correo electrónico de OVH.

> [!primary]
>
> El SPF solo es una indicación proporcionada a los servidores de recepción de correo electrónico, incluyendo los suyos. Corresponde a estos últimos aplicar o no lo que se indica en el SPF de los dominios de los que reciben mensajes.
>

### 2. Conocer la configuración de OVH 

Las siguientes soluciones aplican la configuración de OVH:

- MX Plan solo o incluido en un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}
- [Email Pro](https://www.ovh.es/emails/email-pro/){.external}
- [Hosted Exchange](https://www.ovh.es/emails/hosted-exchange/){.external}

Le recomendamos que, cuando contrate una de estas soluciones, utilice un SPF que incluya la información de OVH en la configuración de su dominio, como en el siguiente ejemplo:

```
example.com IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Si su dominio utiliza la configuración de OVH, puede comprobar si ya tiene un SPF configurado. Para ello, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio. A continuación abra la pestaña `Zona DNS`{.action}. 

Se mostrará una tabla con toda la configuración del dominio en OVH. Cada línea de la tabla contiene un registro DNS.

> [!primary]
>
> Si el dominio está registrado en OVH, puede comprobar si utiliza la configuración de OVH en la pestaña `Servidores DNS`{.action}.
>

Puede utilizar el menú desplegable para filtrar la entrada de la tabla correspondiente al SPF, que podría ser de dos tipos: **TXT** o **SPF**. En la tabla, puede encontrar lo siguiente:

- **"v=spf1 include:mx.ovh.com ~all" en la columna «Destino»**: El dominio ya utiliza la configuración de OVH. Si no quiere utilizarla, más adelante explicamos cómo modificar la configuración.

- **Un SPF que contiene otra información en la columna «Destino»**: El dominio ya utiliza un SPF personalizado. Más adelante explicamos cómo modificarlo o elegir la configuración de OVH.

- **Ningún SPF indicado en la columna «Destino»**: Compruebe que el campo no exista tampoco como TXT cambiando el filtrado. Si no aparece el registro, ni como SPF ni como TXT, es que el dominio no utiliza ninguno. Más adelante explicamos cómo añadirlo.

> [!primary]
>
> El registro SPF tiene el siguiente formato: **"v=spf1 orígenes calificador"**. Por ejemplo, el SPF de OVH es **"v=spf1 include:mx.ovh.com ~all"**.
>

![Dominio](images/spf_records_check_OVH_configuration.png){.thumbnail}

### 3. Modificar el registro SPF

Para modificar el registro SPF en la configuración de su dominio en OVH, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

La tabla mostrará la configuración del dominio en OVH. Cada línea corresponde a un registro DNS.

Para modificar o añadir un SPF, deberá añadir un nuevo registro en la configuración (zona DNS) del dominio. Para ello, haga clic en `Añadir un registro`{.action}.

![Dominio](images/spf_records_add_entry_step1.png){.thumbnail}

Se abrirá una ventana en la que podrá elegir diversos registros DNS. En lo que respecta a la creación de un registro SPF, existen dos posibilidades:

- **Añadir el SPF manualmente**: Para usuarios experimentados o que dispongan de la información que deban introducir (comunicada por el proveedor que gestione su correo, por ejemplo).
- **Utilizar nuestro asistente de configuración SPF**: Para usuarios no expertos o que no dispongan de la información necesaria.

El procedimiento varía en función de la opción elegida.

![Dominio](images/spf_records_add_entry.png){.thumbnail}

#### Añadir el SPF manualmente

De todos los posibles registros que se ofrecen, haga clic en `TXT`{.action} y complete la información solicitada. En el campo `Valor`{.action}, introduzca el SPF que quiera utilizar.

Para finalizar, haga clic en `Siguiente`{.action}. Asegúrese de que la información es correcta y haga clic en `Confirmar`{.action}.

> [!primary]
>
> La modificación tarda entre 4 y 24 horas en propagarse y ser efectiva.
>

![Dominio](images/spf_records_add_TXT_entry.png){.thumbnail}

#### Utilizar el asistente de configuración SPF de OVH

De todos los posibles registros, haga clic en `SPF`{.action}. A continuación, se le ofrecerán dos posibilidades:

- utilizar el SPF para las soluciones de OVH (MX Plan, Email Pro y Hosted Exchange);
- personalizar el SPF usando nuestro asistente.

##### Utilizar el SPF de OVH

Haga clic en el botón `Utilizar el SPF para hosting compartido OVH`{.action}. Se mostrará la información relativa al SPF de OVH. Haga clic en `Aceptar`{.action} para aplicar los cambios.

> [!primary]
>
> La modificación tarda entre 4 y 24 horas en propagarse y ser efectiva.

![Dominio](images/spf_records_add_entry_step2.png){.thumbnail}

##### Personalizar el SPF

El asistente de configuración le ayudará a personalizar el SPF. Para ello, deberá responder a las preguntas y proporcionar la información necesaria. Algunos elementos solicitados pueden dirigirse a usuarios experimentados.

A continuación, los explicamos en detalle:

|Campo|Descripción|
|---|---|
|Subdominio|Complételo si el SPF debe aplicarse a un subdominio de su dominio. Solo es aplicable si envía correo desde un subdominio.|
|TTL|Tiempo de propagación que se aplicará cuando vuelva a modificar este registro DNS (tiempo que tarda en ser efectivo el cambio).|
|¿Autorizar a la IP para que envíe correo?|Puede ser pertinente si su sitio web y sus direcciones de correo electrónico están alojados en un servidor que utilice la misma IP (por ejemplo, en su servidor dedicado).|
|¿Autorizar a los servidores MX para que envíen correo?|Puede ser pertinente si los servidores que reciben el correo también pueden enviarlo.|
|¿Autorizar a todos los servidores cuyo nombre termine en el dominio para que envíen correo?|No se recomienda esta opción, ya que puede añadir al SPF orígenes legítimos demasiado genéricos.|

![Dominio](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

En lo relativo a la pregunta «**¿Hay otros servidores que envíen correo del dominio?**», puede completar los siguientes campos:

|Campo|Descripción|
|---|---|
|a|Introduzca aquí los dominios. Eso autorizará a los servidores que alojen los sitios web de los dominios indicados a enviar correo con sus direcciones.|
|mx|Introduzca aquí los servidores que reciban el correo (servidores MX) si también pueden enviar correo, para identificarlos como origen de envío legítimo.|
|ptr|Introduzca aquí el nombre de los hosts, que deben tener una inversa válida (mediante un registro PTR en la zona DNS), para identificarlos como origen de envío legítimo.|
|ip4|Indique la IP o rango de IP (IPv4) autorizados a enviar correo con sus direcciones.|
|ip6|Indique la IP o rango de IP (IPv6) autorizados a enviar correo con sus direcciones.|
|include|Introduzca aquí los dominios cuyo SPF quiera utilizar con su propio dominio. Por ejemplo, OVH utiliza este método en su configuración SPF: "v=spf1 include:mx.ovh.com ~all", lo que permite a OVH gestionar el SPF de **mx.ovh.com** y que así sus clientes puedan utilizarlo.|

Por último, en lo relativo a la pregunta «**¿La información que ha indicado describe todos los hosts que envían correo del dominio?**», dispone de tres opciones:

|Campo|Descripción|
|---|---|
|Sí, estoy seguro|Pide a los servidores que reciban mensajes de correo procedentes de su dominio que los rechacen si provienen de un origen no legítimo  (no indicado en su SPF).|
|Sí, pero utilizar el modo seguro|Pide a los servidores que reciban mensajes de correo procedentes de su dominio que los acepten si provienen de un origen no legítimo (no indicado en su SPF), pero etiquetándolos para que puedan identificarse como susceptibles de no ser legítimos (como spam, por ejemplo).|
|No|Pide a los servidores que reciban mensajes de correo procedentes de su dominio que los acepten si provienen de un origen no legítimo (no indicado en su SPF), sin realizar ninguna otra acción. La cabecera del email se incrementará si elige esta opción.|

Le recordamos que el SPF es una indicación ofrecida a los servidores de recepción del correo, incluidos los suyos. Corresponde a estos últimos aplicar o no lo que se indica en el SPF de los dominios de los que reciben mensajes.

Una vez completada la información, haga clic en `Siguiente`{.action}, asegúrese de que la información mostrada sea correcta y haga clic en `Confirmar`{.action}.

> [!primary]
>
> La modificación tarda entre 4 y 24 horas en propagarse y ser efectiva.
>

## Más información

[Información general sobre los servidores DNS](https://docs.ovh.com/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.