---
title: "¿Cómo crear un subdominio?"
excerpt: "Descubra cómo crear un subdominio en OVHcloud"
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

Al utilizar el nombre de dominio, deberá crear y configurar **subdominios**. Los subdominios corresponden al tercer nivel (*Third Level Domain*) de un nombre de dominio. El subdominio más conocido por los internautas es, a día de hoy, el subdominio **W**orld **W**ide **W**eb (**www**). En efecto, muchos sitios web todavía utilizan este subdominio para ser consultado en Internet.

Por ejemplo, *www.ovhcloud.com* es un subdominio del nombre de dominio *ovhcloud.com*.

Puede crear infinidad de subdominios a partir de un único nombre de dominio.
  
**Descubra los subdominios y cómo crearlos en OVHcloud.**

## Requisitos

- Tener al menos un [nombre de dominio](/links/web/domains);
- Tener una zona DNS activa para el nombre de dominio. Si lo necesita, consulte nuestra guía "[Crear una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_create)".
- Disponer de los derechos necesarios sobre todos los servicios afectados. Para más información, consulte nuestra guía [Gestionar los contactos de sus servicios](/pages/account_and_service_management/account_information/managing_contacts).
  
<!-- CP-NAV-START:web-domains -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Dominios](/links/control-panel/web-domains)
- **Ruta de navegación:** `Web Cloud`{.action} > `Dominios`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-domains -->

## Procedimiento

**Índice**

- [Introducción](#introduction)
- [¿Cómo crear un subdominio?](#subdomain-creation)
    - [1 - Identificar la ubicación de la zona DNS activa del nombre de dominio](#identification)
    - [2 - Crear los registros DNS para sus subdominios](#dns-records-creation)
- [Asociar, autorizar y configurar su subdominio con un servicio de OVHcloud](#link-subdomain)
    - [Caso 1: Ver un sitio web en mi alojamiento web de OVHcloud con un subdominio](#link-subdomain-case-1)
    - [Caso 2 - Crear direcciones de correo Exchange con un subdominio](#link-subdomain-case-2)

### Introducción <a name="introduction"></a>

![URL content](/pages/assets/schemas/domains/url-composition.png){.thumbnail}

**Haga clic en las dos preguntas siguientes para ver las explicaciones.**

/// details | ¿Cuál es la composición de un nombre de dominio?

Un **nombre de dominio** se compone de niveles. Estos niveles suelen estar separados por un `.` (a excepción de algunas **extensiones** del *primer nivel* como *.co.uk*, *.gouv.fr* o *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): representa los nombres de dominio de *primer nivel*. Más comúnmente las denominamos **extensiones**. Actualmente hay 4 tipos de nombre de dominio de primer nivel: 

    - Los **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): compuestos de dos caracteres, corresponden a los distintos países del globo. Por ejemplo, las extensiones *.fr*, *.es*, *.it* o *.pl* son ccTLDs;
    - Los **g**eneric **T**op **L**evel **D**omains (**gTLDs**): compuestos por al menos tres caracteres, representan temas o sectores de actividad más generales. Por ejemplo, las extensiones *.com*, *.net*, *.org* o *.info* son gTLDs;
    - Los **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    Nuevas extensiones creadas a partir de 2012 por el **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) para dar respuesta al fuerte aumento de las solicitudes de creación de nombres de dominio. Pueden ser temas genéricos, marcas, regiones o ciudades. Por ejemplo, las extensiones *.love*, *.ovh* o *.paris* son new gTLDs;
    - Los **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): en realidad se trata de una subcategoría de los new GTLDs. A petición de la **ICANN**, las empresas u organizaciones podrán solicitar la creación de su propio TLD. Por ejemplo, la extensión *.ovh* es un CorpTLD creado por OVHcloud hace unos años.

- **S**econd **L**evel **D**omain (**SLD**): representa los nombres de dominio de *segundo nivel*. Más comúnmente los llamamos **labels**. Al contratar un nombre de dominio, puede elegir libremente el **label** (siempre que no haya sido ya registrado por otro usuario con la misma extensión y con un límite de 63 caracteres). Por ejemplo, *ovhcloud* corresponde al sello del nombre de dominio *ovhcloud.com*.

- Third Level Domain (**subdomain**): A partir de este tercer nivel, hablamos de **subdominio**. Esta guía explica en detalle su definición y cómo utilizarla con los distintos servicios.

///

/// details | ¿Qué es un subdominio?

Un [nombre de dominio](/links/web/domains) puede asociarse a varios tipos de servicios (correo electrónico, sitio web, etc.).

No obstante, un nombre de dominio solo puede asociarse a un sitio web cada vez.

Sin embargo, algunos usuarios u organizaciones necesitan segmentar sus sitios web o servicios de correo electrónico y mantener el mismo nombre de dominio.

Los subdominios (a veces denominados **prefijos**) responden a la necesidad de segmentar un nombre de dominio. Ofrecen al titular la posibilidad de clasificar los servicios web asociados a su nombre de dominio en subcategorías, sin tener que suscribirse a un nuevo nombre de dominio.

En otras palabras, los subdominios permiten estructurar fácilmente el conjunto de servicios web (servidores DNS, sitio web, intranet, e-mail, etc.) asociados al mismo nombre de dominio.

Como ya hemos indicado, los subdominios corresponden al tercer nivel (*Third Level Domain*) de un nombre de dominio. El subdominio más conocido por los internautas es, a día de hoy, el subdominio **W**orld **W**ide **W**eb (**www**). En efecto, muchos sitios web todavía utilizan este subdominio para ser consultado en Internet.

*www.ovhcloud.com* es un subdominio del nombre de dominio *ovhcloud.com*.

Por ejemplo, si tiene el nombre de dominio *example.com*, puede crear los siguientes subdominios:

- *dns1.example.com* y *dns2.example.com* para personalizar sus servidores DNS utilizando los [Glue Records](/pages/web_cloud/domains/glue_registry);
- *www.example.com* para mostrar su sitio web;
- *preprod.example.com* para probar su sitio web en nuevas versiones. sin cortar el acceso de sus usuarios a su sitio web actual;
- *intranet.example.com* para que sus empleados puedan intercambiar información en su sitio web interno;
- *forum.example.com* o *community.example.com* para que su comunidad de usuarios pueda intercambiar y compartir su experiencia;
- *app.example.com* para acceder a su aplicación en línea o para descargarla directamente;
- *recruitment.example.com* para permitir a los candidatos en búsqueda de empleo presentar su candidatura en su propia interfaz de contratación;
- *sav.example.com*, *sales.example.com*, *legal.example.com* para permitir a sus clientes contactar con diferentes estructuras internas de su empresa o incluso para priorizar a sus empleados en función de los servicios internos a los que pertenecen;
- etc.

Más allá del tercer nivel de nombre de dominio, se considera que se trata también de **subdominios**. Para seguir uno de los ejemplos anteriores, puede crear el subdominio *preprod.app.example.com* para probar la nueva versión de su aplicación web. Esto sin cortar el acceso a la versión actual de su aplicación en *app.example.com*.

///

### ¿Cómo crear un subdominio? <a name="subdomain-creation"></a>

Los [nombres de dominio](/links/web/domains) necesitan una **zona DNS** para funcionar. La zona DNS se compone de informaciones técnicas, llamadas *registros DNS*. Es como un centro de cambio de agujas.

Para más información sobre las zonas DNS, consulte nuestra guía "[Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create) " y "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ".

**Todos los subdominios se configuran en la zona DNS activa del nombre de dominio. Añadiendo registros DNS**

#### 1 - Identificar la ubicación de la zona DNS activa del nombre de dominio <a name="identification"></a>

Existen dos situaciones posibles:

- La zona DNS activa de su nombre de dominio está presente en OVHcloud;
- La zona DNS activa de su nombre de dominio está alojada en otro proveedor.

> [!warning]
>
> La zona DNS activa de su nombre de dominio no está obligatoriamente gestionada con el mismo proveedor que su nombre de dominio.
>
> 1: Para identificar la zona DNS activa de un nombre de dominio registrado en OVHcloud, consulte nuestra guía "[Cambiar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>
> 2: Si su nombre de dominio no está registrado con OVHcloud, contacte con el actual agente registrador* para conocer el lugar en el que está alojada su zona DNS activa. Puede consultar nuestra guía "[Transferir un nombre de dominio a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)" si desea realizar esta acción.
>

Si los servidores DNS declarados para el nombre de dominio tienen una de las dos formas siguientes:

- `dnsXX.ovh.net` y `nsXX.ovh.net` (donde cada una de las "X" representa una cifra);
- `dnsXX.ovh.ca` y `nsXX.ovh.ca` (donde cada una de las "X" representa una cifra);
- `dns200.anycast.me` y `ns200.anycast.me`.

Esto significa que la zona DNS activa de su nombre de dominio está activada en OVHcloud.

En caso contrario, póngase en contacto con su proveedor DNS para crear subdominios con su nombre de dominio.

#### 2 - Crear los registros DNS para sus subdominios <a name="dns-records-creation"></a>

Para añadir sus subdominios a la zona DNS activa de su nombre de dominio, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ".

Por ejemplo, puede añadir:

- La dirección IP (registros DNS de tipo *A* y *AAAA*) de su alojamiento web para mostrar uno de sus sitios web con un subdominio.
- Los servidores de correo (registros DNS de tipo *MX*) a los que su subdominio debe redirigir los emails que recibe. Esto le permite consultarlas en su dirección de correo personalizada con su subdominio.
- Información relativa a la seguridad y la autenticación de los servicios (alojamiento web, servidor web, correo electrónico...) asociados a uno de sus subdominios (registros DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

> [!primary]
>
> La modificación de una zona DNS asociada a un nombre de dominio conlleva un retraso de propagación de **4** a **24** horas como máximo para que sea efectiva.
>
> Además, como en el caso de un nombre de dominio en sí mismo, la creación de un registro DNS para un subdominio por sí sola no suele ser suficiente para que funcione con el servicio "destino" que le haya indicado en el registro DNS. 
>
> Efectivamente, por motivos de seguridad, también deberá autorizar al subdominio a acceder al servicio "destino" (alojamiento web, correo, etc.).
>

En la siguiente sección, explicamos cómo autorizar a un subdominio a que acceda a los distintos servicios del universo "Web Cloud" (alojamiento web, servidor Exchange...) que ofrece OVHcloud.

> [!warning]
>
> Si quiere configurar un subdominio para un servicio alojado fuera de OVHcloud, no podremos asistirle. Póngase en contacto con el proveedor de su servicio externo para continuar con la configuración. 
>

### Asociar, autorizar y configurar su subdominio con un servicio de OVHcloud <a name="link-subdomain"></a>

Con un subdominio se pueden utilizar varios servicios del universo "Web Cloud". Los procedimientos de asociación son similares a los que debería realizar con un nombre de dominio. Vamos a exponer solo los casos más comunes.

Para los servicios que no se mencionan, consulte la documentación relativa al servicio en cuestión. para identificar si el nombre de dominio puede utilizarse con un subdominio.

#### Caso 1: Ver un sitio web en mi alojamiento web de OVHcloud con un subdominio <a name="link-subdomain-case-1"></a>

Al igual que con un nombre de dominio, para autorizar a un subdominio a mostrar el contenido de una carpeta "destino" declarada para un sitio web alojado en un alojamiento web, conéctese al [área de cliente de OVHcloud](/links/manager) y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} en la columna de la izquierda, seleccione el alojamiento correspondiente donde se encuentra su sitio web y elija la pestaña `Mis sitios`{.action}.

Aquí es donde autoriza el acceso de su subdominio a su sitio web presente en su alojamiento web.

Para obtener más detalles sobre la configuración de un dominio o subdominio en un alojamiento web, consulte nuestro guía "[¿Cómo asociar un nombre de dominio a un sitio web existente ?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)". Tanto si se trata de un nombre de dominio como de un subdominio, el procedimiento es el mismo.

> [!warning]
>
> La adición de un nombre de dominio o subdominio en uno de los sitios web de su alojamiento web puede requerir la configuración de un **token de validación**.
> Para un subdominio, este mismo token no se tiene en cuenta y debe añadirse no para el subdominio sino para el nombre de dominio. En este caso, añada el token como un registro DNS de tipo TXT para el nombre de dominio en la zona DNS activa del nombre de dominio.

#### Caso 2 - Crear direcciones de correo Exchange con un subdominio <a name="link-subdomain-case-2"></a>

Para desbloquear la creación de direcciones de correo Exchange personalizadas con un subdominio, conéctese al [área de cliente de OVHcloud](/links/manager) y seleccione `Web Cloud`{.action}. Haga clic en `Microsoft`{.action} en la columna de la izquierda y, a continuación, en `Exchange`{.action}. A continuación, seleccione la plataforma Exchange que quiera utilizar con su subdominio. A continuación, abra la pestaña `Dominios asociados`{.action} y haga clic en el botón `Añadir un dominio`{.action} situado a la derecha.

Así podrá declarar su subdominio en su plataforma Exchange.

Para más información sobre la configuración de una plataforma Exchange, consulte las siguientes guías:

- [Primeros pasos con el servicio Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)
- [Añadir un dominio a una plataforma de correo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Añadir un registro CNAME para validar su dominio en su servicio de correo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

## Más información <a name="go-further"></a>

[Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificar los servidores DNS de un nombre de dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Primeros pasos con el servicio Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Añadir un nombre de dominio a una plataforma de correo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

[Añadir un registro CNAME para validar su nombre de dominio en su solución de correo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
