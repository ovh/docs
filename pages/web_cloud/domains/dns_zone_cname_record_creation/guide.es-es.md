---
title: "Cómo añadir un registro DNS de tipo CNAME para un subdominio"
excerpt: "Descubra cómo añadir un registro DNS de tipo CNAME en una zona DNS gestionada en OVHcloud para el subdominio de un dominio"
updated: 2025-06-25
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

Un registro CNAME permite asociar un subdominio a un dominio o subdominio sin tener que especificar una dirección IP. Esto significa que el subdominio será redirigido a la dirección IP del dominio o subdominio de destino, sin necesidad de configuración adicional.

Por ejemplo, si crea un registro CNAME para *www.domain.tld* que apunta a *domain.tld*, *www.domain.tld* utilizará la misma dirección IP que *domain.tld*.

Los registros CNAME son útiles para evitar tener que modificar las direcciones IP de sus subdominios. También pueden utilizarse para configurar servicios como los servidores de correo.

**Descubra cómo añadir un registro CNAME a la zona DNS de OVHcloud.**

> **¿Ya tiene un registro de tipo CNAME en su zona DNS?** Siga nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Requisitos

- Tener un [dominio](/links/web/domains).
- Tener una zona DNS asociada al dominio en OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

> [!warning]
> 
> **Añadir, modificar o eliminar registros DNS en una zona DNS activa es una operación delicada.**
> En caso de duda, contacte con un [proveedor especializado](/links/partner).

## Procedimiento

### Añadir un registro DNS de tipo CNAME para el subdominio de un dominio

1. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
2. En la nueva página, haga clic en el botón `Añadir un registro`{.action}.
3. En la ventana que se abre, seleccione el tipo de registro `CNAME`{.action}.
4. Introduzca a continuación en el campo `Subdominio` el subdominio de que se trate (por ejemplo: `www` para el subdominio `www.domain.tld`) y, en el campo `Destino *`, el nombre de dominio o subdominio (por ejemplo: `domain.tld`) que desee identificar mediante el registro de tipo CNAME. Haga clic en `Siguiente`{.action}.
5. Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.

/// details | Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
- [¿Cómo crear un subdominio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web hosting - Modificar un dominio ya asociado a un alojamiento](/pages/web_cloud/web_hosting/multisites_modify_domain)

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

/// details | CNAME en un dominio de su propia zona DNS

Por convención, **los registros de tipo CNAME no pueden utilizarse en un dominio de su propia zona DNS**. En efecto, el nombre de dominio debe apuntar obligatoriamente directamente a una dirección IP con un registro de tipo [A](/pages/web_cloud/domains/dns_zone_a_record_creation) para una IPv4, o [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) para una IPv6.

Siguiendo el ejemplo anterior, no podrá crear un registro de tipo CNAME para el dominio *domain.tld* en la zona DNS que haya creado para este dominio.
No obstante, podrá crear registros de tipo CNAME para todos los subdominios (por ejemplo, *subdomain.domain.tld* o *www.domain.tld*) del nombre de dominio *domain.tld* en la zona DNS creada para *domain.tld*.

///

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).