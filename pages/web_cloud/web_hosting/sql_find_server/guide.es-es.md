---
title: "Cómo identificar el servidor de su base de datos"
excerpt: "Descubra cómo encontrar el nombre del servidor que aloja su base de datos compartida, accesible con su alojamiento web"
updated: 2026-02-12
---

## Objetivo

Durante el uso de sus servicios, puede que necesite conocer el nombre del servidor SQL en el que se encuentra su base de datos (incluida o adquirida como complemento a través de su [alojamiento web](/links/web/hosting)).

> [!warning]
>
> Esta guía no se aplica a las bases de datos presentes en una solución [Web Cloud Databases](/links/web/databases).

**Descubra cómo encontrar el nombre del servidor que aloja su base de datos compartida, accesible con su alojamiento web.**

## Requisitos

- Disponer de una [oferta de alojamiento web OVHcloud](/links/web/hosting).
- Utilizar una base de datos incluida o [adquirida como complemento](/links/web/hosting-options-startsql) a través de su alojamiento web.

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Hosting plans](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Hosting plans](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Bases de datos`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla, localice la columna **Servidor**.
>>
>> ![database-server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> Para la base de datos correspondiente, encontrará en esta columna el nombre del servidor SQL (por ejemplo: **mysqlXXX.euXXX**) en el que se aloja su base de datos compartida.
>>
>> > [!warning]
>> >
>> > No confunda el **Servidor** con la **Dirección del servidor** :
>> >
>> > - La **Dirección del servidor** forma parte de las credenciales de conexión específicas de su base de datos y permite conectar su sitio web a esta última.
>> > - El **Servidor** representa la infraestructura que aloja su base de datos, así como otras bases. El nombre del servidor permite verificar si está afectado por una operación de mantenimiento o un incidente declarado en nuestra página [Web Cloud Status](https://web-cloud.status-ovhcloud.com/).

## Más información <a name="go-further"></a>

[Resolver los errores más frecuentes asociados a las bases de datos](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).