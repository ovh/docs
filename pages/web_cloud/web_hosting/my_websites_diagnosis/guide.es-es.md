---
title: "¿Cómo comprobar la asociación 'nombre de dominio / sitio web'?"
excerpt: "Utilice nuestra herramienta de diagnóstico para comprobar que su nombre de dominio o subdominio está correctamente declarado con su sitio web en su alojamiento web"
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

Puede alojar varios sitios web en la misma oferta de alojamiento web, incluso si los nombres de dominio no están registrados en OVHcloud. Además, puede asociar uno o varios nombres de dominio o subdominios a un mismo sitio web.

**Utilice nuestra herramienta de diagnóstico para comprobar que su nombre de dominio o subdominio está correctamente declarado con su sitio web en su alojamiento web.**

## Requisitos

- Disponer de una oferta de [alojamiento web OVHcloud](/links/web/hosting-multisite) compatible.
- Disponer de uno o varios [nombres de dominio](/links/web/domains).
- Poder modificar la configuración de sus nombres de dominio desde la [zona DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## En práctica

### Acceder a la herramienta de diagnóstico

<!-- CP-STEPS-START:diagnose-website -->
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
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los nombres de dominio o subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Los nombres de dominio o subdominios asociados a su sitio web aparecen. 
>>
>> ![Domains associated websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab-with-domains-associated-displayed.png){.thumbnail}
>>
>> La columna `Diagnóstico` le informa si su nombre de dominio apunta correctamente al alojamiento web asociado. Esta columna le permite comprobar rápidamente que la configuración DNS de su nombre de dominio está correctamente realizada con su alojamiento web. Así, esta columna le ayuda a identificar y resolver posibles problemas de apuntado. Para cada nombre de dominio, hay tres resultados posibles de diagnóstico:
>>
>> - `A/AAAA` verde.
>> - `A/AAAA` amarillo.
>> - `A/AAAA` gris.
>>
>> Consulte la sección "[Interpretación de los colores de la herramienta de diagnóstico](#interpretation)" de esta guía para conocer el significado de estos 3 colores.
<!-- CP-STEPS-END:diagnose-website -->

<!-- CP-STEPS-START:diagnostic-status-interpretation -->
### Interpretación de los colores de la herramienta de diagnóstico <a name="interpretation"></a>

**Haga clic en los indicadores de estado correspondientes a continuación para ver sus explicaciones.**

/// details | A/AAAA verde

![A and AAAA green](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-green-info.png){.thumbnail}

Cuando el icono `A/AAAA` es verde en la columna `Diagnóstico`, esto significa que el registro **A** (para direcciones IPv4) y/o el registro **AAAA** (para direcciones IPv6) de su nombre de dominio apunta correctamente a la dirección IP de su alojamiento web. Por tanto, la configuración DNS de su nombre de dominio es coherente para funcionar con el sitio web de su alojamiento web.

///

/// details | A/AAAA amarillo

![A and AAAA yellow](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-yellow-info.png){.thumbnail}

Cuando el icono `A/AAAA` es amarillo en la columna `Diagnóstico`, esto significa que el registro **A** (IPv4) y/o **AAAA** (IPv6) de su nombre de dominio apunta a una dirección IP, pero no es la del alojamiento web desde el cual está consultando la columna `Diagnóstico`.

Para resolver los problemas de apuntado DNS de su nombre de dominio y asegurarse de que apunta correctamente al alojamiento web deseado, siga los pasos descritos en nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | A/AAAA gris

![A and AAAA grey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-grey-info.png){.thumbnail}

Cuando el icono `A/AAAA` es gris en la columna `Diagnóstico`, esto significa que el nombre de dominio no apunta actualmente a ninguna dirección IP y que no hay ningún registro **A** (IPv4) o **AAAA** (IPv6) configurado para este nombre de dominio.

Para añadir los registros **A** y/o **AAAA** y configurar correctamente su nombre de dominio, siga los pasos descritos en nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

<!-- CP-STEPS-END:diagnostic-status-interpretation -->

## Más información

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
