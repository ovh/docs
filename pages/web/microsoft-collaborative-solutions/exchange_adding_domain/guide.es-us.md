---
title: 'Añadir un dominio a un servicio Exchange'
slug: anadir-dominio-exchange
excerpt: 'Cómo añadir un dominio a un servicio Exchange'
section: 'Configuración de Exchange'
---

**Última actualización: 27/03/2018**

## Objetivo

Añadir un dominio a un servicio Exchange es un requisito indispensable para poder utilizar las cuentas de dicho servicio. Es posible añadir varios dominios a un servicio Exchange. 

**Esta guía explica cómo añadir un dominio a un servicio Exchange.**

## Requisitos

- Tener contratada una [solución Exchange](https://www.ovhcloud.com/es/emails/hosted-exchange/){.external}.
- Tener uno o más dominios.
- Estar en condiciones de modificar la configuración (la zona DNS) del dominio.
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

### 1. Acceder a la gestión del servicio

Una vez que el servicio Exchange haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

Para ello, en la columna izquierda, haga clic en `Microsoft`{.action}, luego en `Exchange`{.action}  y seleccione el servicio Exchange correspondiente.

> [!primary]
>
> El nombre de los servicios Hosted Exchange comienza por «**hosted-**» o «**private-**», contiene una parte del ID de cliente y termina por una cifra (1 para el primer servicio Hosted Exchange instalado, 2 para el segundo y así sucesivamente).
>

### 2. Añadir el dominio

Para añadir un dominio, abra la pestaña `Dominios asociados`{.action}. Se mostrará una tabla con los dominios asociados a su servicio Exchange. Haga clic en el botón `Añadir un dominio`{.action} y siga los pasos que se le indican para añadir el dominio.

> [!warning]
>
> Todas las direcciones creadas en el servicio Exchange podrán ver en el directorio el resto de direcciones asociadas al servicio, incluidas aquellas que posean un dominio diferente. Si desea crear directorios separados, deberá contratar una nueva [solución Exchange](https://www.ovhcloud.com/es/emails/hosted-exchange/){.external} para el o los dominios en cuestión.
>

![Añadir dominio a Exchange](images/add_domain_exchange_step1.png){.thumbnail}

A continuación, se le ofrecerán dos opciones:

- **Seleccionar un dominio de la lista**: Solo se mostrarán los dominios que utilicen la configuración de OVHcloud y que se encuentren bajo el mismo ID de cliente.

- **Introducir un nombre de dominio no gestionado por su cuenta OVHcloud**: Si elige esta opción, deberá estar en condiciones de modificar la configuración del dominio (su zona DNS) para que el servicio Exchange pueda funcionar correctamente.

A continuación, haga clic en `Siguiente`{.action}.

![Seleccionar un dominio de la lista](images/add_domain_exchange_step2.png){.thumbnail}

Se mostrará un mensaje informativo relativo al modo de configuración del dominio.

- **Si ha introducido un dominio no gestionado por OVHcloud**, este se configurará por defecto en modo no autoritario.

- **Si ha seleccionado en la lista un dominio gestionado por OVHcloud**, deberá elegir uno de los dos modos que se describen a continuación.

|Modo|Descripción|
|---|---|
|Autoritario|Es el modo adecuado cuando solo utiliza con el dominio la solución Exchange. No permite utilizar otra solución de correo conjuntamente con Exchange.|
|No autoritario|Es el modo adecuado cuando utiliza con el dominio la solución Exchange conjuntamente con otra solución de correo. Debe indicar el servidor de su otra solución de correo.|

> [!primary]
>
> La elección de un modo no es definitiva y puede modificarse más adelante desde el área de cliente.
>

Haga clic en el botón `Siguiente`{.action} para continuar.

![Elegir el modo del dominio](images/add_domain_exchange_step3.png){.thumbnail}

**Si ha seleccionado en la lista un dominio gestionado por OVHcloud**, podrá configurarlo automáticamente. Para ello, marque las casillas y haga clic en el botón `Siguiente`{.action} para continuar.

**Si ha introducido un dominio no gestionado por OVHcloud**, deberá realizar la configuración en la siguiente etapa.

![Configuración automática del dominio](images/add_domain_exchange_step4.png){.thumbnail}

Una vez realizada la configuración, compruebe que la información mostrada es correcta y haga clic en `Confirmar`{.action} para añadir el dominio. Realice esta misma operación para todos los dominios que quiera añadir.

### 3. Configurar el dominio (DNS)

Una vez asociado el dominio, asegúrese de que su configuración es correcta comprobando la información indicada en la tabla. La etiqueta verde indica que la configuración del dominio es correcta. Si debe modificarla, se mostrará una etiqueta roja.

- **Si ha elegido la configuración automática al añadir el dominio**, puede tardar unos minutos en mostrarse en el área de cliente de OVHcloud.

- **Si ha introducido un dominio no gestionado por OVHcloud**, haga clic en la etiqueta roja para consultar los cambios que debe realizar. Si el dominio no utiliza la configuración de OVHcloud (es decir, si no utiliza los servidores DNS de OVHcloud), deberá realizar los cambios necesarios desde el panel que le ofrezca su proveedor para gestionar sus servidores DNS. 

> [!primary]
>
> El tiempo de propagación necesario para que la modificación de la configuración de un dominio sea plenamente efectiva es de un máximo de 4 a 24 horas.
>

Puede comprobar si la configuración del dominio es correcta en la pestaña `Dominios asociados`{.action} de su servicio Exchange. La etiqueta verde indica que el dominio está correctamente configurado. Si sigue estando roja, es posible que la propagación todavía no haya finalizado.

![Diagnóstico del dominio](images/add_domain_exchange_step5.png){.thumbnail}

### 4. Configurar y utilizar las cuentas

Una vez que haya añadido los dominios, ya puede configurar sus cuentas Exchange con dichos dominios. Para ello, abra la pestaña `Cuentas de correo`{.action} de su servicio Exchange. Desde ese mismo lugar podrá también contratar cuentas adicionales con el botón `Añadir cuentas de correo`{.action} o `Añadir una cuenta`{.action}.

Recuerde que todas las direcciones creadas en el servicio Exchange podrán ver en el directorio el resto de direcciones asociadas al servicio, incluidas aquellas que posean un dominio diferente.

Una vez que haya configurado las cuentas, ¡ya puede utilizarlas! Para ello, OVHcloud pone a su disposición el webmail **Outlook Web Application** (OWA), al que podrá acceder en la dirección <https://www.ovh.com/world/es/mail/>. Para un uso óptimo de su cuenta Exchange en un cliente de correo de escritorio, asegúrese de que este sea compatible con el servicio. Si desea configurar su cuenta en un cliente de correo o un dispositivo externo (smartphone o tablet), o necesita ayuda sobre las funcionalidades de Exchange, consulte las guías de OVHcloud.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.