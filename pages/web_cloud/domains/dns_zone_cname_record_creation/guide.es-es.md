---
title: "Cómo añadir un registro DNS de tipo CNAME para un subdominio"
excerpt: "Descubra cómo añadir un registro DNS de tipo CNAME en una zona DNS gestionada en OVHcloud para el subdominio de un nombre de dominio"
updated: 2026-03-24
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

Un registro CNAME permite asociar un subdominio a un nombre de dominio o subdominio sin tener que especificar una dirección IP. Esto significa que el subdominio será redirigido a la dirección IP del nombre de dominio o subdominio de destino, sin necesidad de configuración adicional.

Por ejemplo, si crea un registro CNAME para *www.domain.tld* que apunta a *domain.tld*, *www.domain.tld* utilizará la misma dirección IP que *domain.tld*.

Los registros CNAME son útiles para evitar tener que modificar las direcciones IP de sus subdominios. También pueden utilizarse para configurar servicios como los servidores de correo.

**Descubra cómo añadir un registro CNAME a la zona DNS de OVHcloud.**

> **¿Ya tiene un registro de tipo CNAME en su zona DNS?** Siga nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Requisitos

- Tener un [nombre de dominio](/links/web/domains).
- Tener una zona DNS asociada al nombre de dominio en OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->


> [!warning]
> 
> **Añadir, modificar o eliminar registros DNS en una zona DNS activa es una operación delicada.**
> En caso de duda, contacte con un [proveedor especializado](/links/partner).

## Procedimiento

### Añadir un registro DNS de tipo CNAME para el subdominio de un nombre de dominio

<!-- CP-STEPS-START:add-cname-record -->
Haga clic en las pestañas de abajo para ver cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en el botón `Añadir un registro`{.action}.
>>
> **Paso 3**
>>
>> En la ventana que se abre, seleccione el tipo de registro `CNAME`{.action}.
>>
> **Paso 4**
>>
>> Introduzca en el campo `Subdominio` el subdominio correspondiente (por ejemplo: `www` para el subdominio `www.domain.tld`) y, en el campo `Destino *`, el nombre de dominio o subdominio (por ejemplo: `domain.tld`) que desee identificar mediante el registro de tipo CNAME. Haga clic en `Siguiente`{.action}.
>>
> **Paso 5**
>>
>> Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.
<!-- CP-STEPS-END:add-cname-record -->

/// details | Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
- [¿Cómo crear un subdominio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web hosting - Modificar un nombre de dominio ya asociado a un alojamiento](/pages/web_cloud/web_hosting/multisites_modify_domain)

///


### Casos especiales

Haga clic en los siguientes enlaces para obtener más información:

/// details | Registros CNAME y TXT para un mismo subdominio

No configure al mismo tiempo un registro CNAME y un registro TXT para el mismo subdominio. Esto puede dar lugar a resultados aleatorios en la resolución DNS, ya que sólo se puede devolver una respuesta por consulta DNS.

Por ejemplo, si tiene los siguientes registros para *www.domain.tld*:

- Un registro CNAME que apunta a *domain.tld*.
- Un registro TXT con un valor específico.

Una consulta DNS para *www.domain.tld* devolverá el destino del registro CNAME o el valor del registro TXT de forma aleatoria.

///

/// details | CNAME en un nombre de dominio de su propia zona DNS

Por convención, **los registros de tipo CNAME no pueden utilizarse en un nombre de dominio de su propia zona DNS**. En efecto, el nombre de dominio debe apuntar obligatoriamente directamente a una dirección IP con un registro de tipo [A](/pages/web_cloud/domains/dns_zone_a_record_creation) para una IPv4, o [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) para una IPv6.

Siguiendo el ejemplo anterior, no podrá crear un registro de tipo CNAME para el nombre de dominio *domain.tld* en la zona DNS que haya creado para este nombre de dominio.
No obstante, podrá crear registros de tipo CNAME para todos los subdominios (por ejemplo, *subdomain.domain.tld* o *www.domain.tld*) del nombre de dominio *domain.tld* en la zona DNS creada para *domain.tld*.

///

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
