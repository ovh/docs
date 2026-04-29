---
title: Activación del firewall de aplicación
excerpt: Cómo activar el firewall de aplicación en un plan de hosting.
updated: 2026-05-04
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

*ModSecurity* es un módulo Apache complementario que filtra todas las peticiones entrantes en su servidor web. Refuerza la seguridad contra las vulnerabilidades conocidas interceptando y filtrando las solicitudes antes de que sean tratadas por scripts.

El conjunto preconfigurado de reglas básicas, el "Core Rule Set" (CRS) de nuestra *ModSecurity* protege sus sitios web contra los ataques más habituales, por ejemplo:

- Trojans,
- inyección de correo,
- Fallo de los archivos PDF,
- inyección de archivos en su alojamiento,
- inyección de tipo SQL o XSS,
- la compra de una caja registradora, entre otros.

**Descubra cómo activar el firewall de aplicación desde su área de cliente de OVHcloud, para obtener una protección mejorada.** 

> [!primary]
>
> Debido a que su alojamiento web está presente en una infraestructura compartida, no es posible modificar los parámetros de configuración del firewall.

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](/links/web/hosting).
- Tener al menos un [dominio](/links/web/domains) asociado al alojamiento.

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

**Haga clic en los títulos de abajo para ver las explicaciones.**

/// details | Activar el firewall de aplicación en todo su alojamiento web en la configuración PHP

<!-- CP-STEPS-START:enable-firewall -->
Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En el cuadro **Configuración**, encontrará la mención **Versión PHP global**.
>>
>> ![Global PHP version](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}
>>
>> Haga clic en el botón `...`{.action} a la derecha de la mención **Versión PHP global**, y luego en `Editar la configuración`{.action}.
>>
> **Etapa 3**
>>
>> En la ventana que se abre, seleccione el elemento `Modificar la configuración actual`{.action} y haga clic en el botón `Siguiente`{.action}.
>>
>> ![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}
>>
>> En la nueva ventana, asegúrese de que la opción **Firewall de aplicación** esté definida en `Activado`{.action}. Haga clic después en el botón `Aceptar`{.action}.
<!-- CP-STEPS-END:enable-firewall -->

///

/// details | Activar el firewall de aplicación únicamente en un dominio o subdominio específico

<!-- CP-STEPS-START:disable-firewall -->
Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los dominios o subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del dominio o subdominio correspondiente, y luego en `Modificar el dominio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la ventana de configuración, marque la casilla `Activar el firewall`{.action}. También puede incluir el subdominio `www` en esta configuración marcando la casilla correspondiente en la parte superior (si también está declarado en el mismo sitio web).
>>
>> ![Modify a domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}
>>
>> Haga clic en `Siguiente`{.action}, y luego en `Aceptar`{.action} para validar la modificación de los parámetros.
>>
>> Una vez activado el firewall para su dominio o subdominio, la mención **Activado** aparece en la columna **Firewall**.
>>
>> Si la mención **Activado** no aparece al cabo de unos minutos en la línea correspondiente al dominio o subdominio en cuestión, recargue la página.
<!-- CP-STEPS-END:disable-firewall -->

///

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
