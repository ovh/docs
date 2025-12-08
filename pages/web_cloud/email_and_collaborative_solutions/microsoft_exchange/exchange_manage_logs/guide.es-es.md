---
title: Exchange - Cómo gestionar los logs
excerpt: Aprenda a visualizar y gestionar los logs en su oferta Private Exchange o Trusted Exchange
updated: 2025-10-28
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objetivo 

Los logs corresponden a los eventos ocurridos en un sistema informático (servidor, ordenador, aplicación, sitio web, base de datos, red informática, etc.). Por ejemplo, los logs pueden registrar y contener uno o varios de los siguientes elementos:

- La marca de tiempo (fecha, hora, minuto, segundo) del evento.
- La naturaleza del evento (conexión, desconexión, error, descarga, carga, alerta, etc.).
- Información complementaria sobre el evento (páginas o archivos consultados, aplicaciones iniciadas, servidores remotos llamados, nombre de un archivo cargado o descargado, etc.).
- El origen del evento (identificador del usuario, dirección IP de origen, programa de origen, etc.).
- El estado del sistema en el momento del evento (recursos disponibles, memoria restante, uso del CPU, etc.).

Normalmente, los logs se generan directamente por los sistemas informáticos en los que ocurren los eventos. Se almacenan e historializan en archivos de texto también llamados archivos de registro.

Los archivos de registro permiten realizar las siguientes acciones:

- Analizar el comportamiento del sistema informático que genera los logs.
- Identificar los errores ocurridos en el sistema informático.
- Resolver los errores encontrados en el sistema informático.
- Optimizar el funcionamiento y el rendimiento del sistema informático.

Su oferta Private Exchange o Trusted Exchange genera sus propios logs. Puede que necesite consultar/recuperar los logs para analizar el acceso a sus buzones de correo o seguir los flujos de correo electrónico.

**Aprenda a visualizar y gestionar los logs en su oferta Private Exchange o Trusted Exchange**

## Requisitos

- Tener contratada una oferta [Private Exchange](/links/web/emails-hosted-exchange) o [Trusted Exchange](/links/web/emails-trusted-exchange).
- Un cuenta Logs Data Platform (LDP). Este guía le guiará a través de todos los pasos necesarios: [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Visualizar los logs de su plataforma Exchange en tiempo real

Para acceder a los logs en tiempo real en su oferta Private o Trusted Exchange, siga las instrucciones siguientes:

1. Inicie sesión en su [área de cliente de OVHcloud](/links/manager).
1. Vaya a la sección `Web Cloud`{.action}.
1. En la sección `MICROSOFT`, haga clic en `Exchange`{.action}.
1. Seleccione la plataforma correspondiente.
1. A la derecha de la serie de pestañas, haga clic en la pestaña `Más +`{.action} y luego en `Logs`{.action}.

![exchange - logs](images/exchange-logs01.png){.thumbnail}

> [!warning]
>
> Dado que se trata de una consola en tiempo real, los logs solo aparecen cuando se encuentra en la pestaña `Logs`{.action}. Si abandona la pestaña `Logs`{.action} y vuelve a ella, el historial anterior habrá desaparecido.

Los servicios Exchange ofrecen 2 tipos de logs:

- **Access** : Permite consultar la actividad de conexiones en su servicio Exchange.
- **Messagetracking** : Permite consultar los logs detallados del flujo de correos electrónicos que atraviesan su servicio Exchange. Encontrará las siguientes informaciones:
    - el estado de entrega de correos electrónicos en sus cuentas Exchange;
    - el estado de envío de correos electrónicos desde su servicio Exchange;
    - el tamaño de los correos electrónicos transmitidos;
    - etc.

### Integrar los logs de su solución Exchange en Logs Data Platform

La solución Logs Data Platform puede ser útil si dispone de una infraestructura importante o si sus servicios generan una gran cantidad de logs. De hecho, esta plataforma está diseñada para facilitar la agregación y gestión de los logs.

Funciona recuperando los logs generados por su infraestructura, sus sitios web o sus aplicaciones para, por ejemplo:

- almacenarlos;
- mostrarlos en paneles de control en tiempo real;
- permitir a los usuarios realizar consultas complejas;
- filtrarlos por fecha, aplicación, tipo o contenido.

> [!primary]
>
> Para más detalles sobre Logs Data Platform, consulte nuestro guía de introducción a [Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

Las soluciones Exchange son compatibles con diversos servicios como el alojamiento compartido, los VPS y los servidores dedicados. También pueden complementarse con flujos de datos en Logs Data Platform, además de los logs en tiempo real ya disponibles.

Para suscribir los logs de su solución Exchange a un flujo de datos en Logs Data Platform, realice las siguientes acciones:

1. Inicie sesión en su [área de cliente de OVHcloud](/links/manager).
1. Vaya a la sección `Web Cloud`{.action}.
1. En la sección `MICROSOFT`, haga clic en `Exchange`{.action}.
1. Seleccione la plataforma correspondiente.
1. A la derecha de la serie de pestañas, haga clic en la pestaña `Más +`{.action} y luego en `Logs`{.action}.
1. A la derecha del recuadro donde aparecen sus logs en tiempo real, haga clic en el botón `Suscribirse`{.action}.

![exchange - logs](images/exchange-logs02.png){.thumbnail}

Desde la página que se muestra, seleccione la cuenta Logs Data Platform deseada en el menú desplegable situado encima de la tabla.

![exchange - logs](images/exchange-logs03.png){.thumbnail}

Se presentan dos casos para suscribir su solución Exchange:

> [!tabs]
> **Caso n°1**
>> **Suscribirse a un flujo ya existente en su solución Logs Data Platform**
>>
>> Si el flujo ya existe, aparece en forma de línea en la tabla. En este caso concreto y para suscribir su solución Exchange a este flujo existente, simplemente haga clic en el botón `Suscribirse`{.action} situado a la derecha de la línea correspondiente al flujo.
>>
>> Después de unos momentos y si permanece en la misma página, aparecerá un mensaje en su área de cliente para indicarle que la suscripción se ha creado con éxito.
>>
> **Caso n°2**
>> **Suscribirse a un nuevo flujo de datos en su solución Logs Data Platform**
>>
>> Si el flujo aún no existe, haga clic en el botón `Añadir un flujo de datos`{.action}. Será redirigido a una nueva página de su área de cliente OVHcloud, en la que podrá crear un nuevo flujo de datos en su solución Logs Data Platform.
>>
>> Consulte nuestros guías [Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) y [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) para realizar esta acción.
>>
>> Una vez completado el formulario, haga clic en el botón `Guardar`{.action}.
>>
>> ![exchange - logs](images/exchange-logs04.png){.thumbnail}
>>
>> Será redirigido a la pestaña `Flujos de datos`{.action} de su solución Logs Data Platform.
>>
>> Ahora puede suscribir su solución Exchange a su nuevo flujo Logs Data Platform siguiendo las instrucciones del comienzo del capítulo.

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

[Primeros pasos con el servicio Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

[Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Si desea beneficiarse de una asistencia en el uso y la configuración de sus soluciones OVHcloud, le proponemos consultar nuestras diferentes [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).