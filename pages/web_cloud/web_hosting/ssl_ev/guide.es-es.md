---
title: "Web hosting - Activar un certificado SSL Sectigo EV"
excerpt: "Descubra cómo contratar e instalar un certificado SSL Sectigo EV en un alojamiento web de OVHcloud"
updated: 2025-06-16
---

## Objetivo

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios realizados desde o hacia su sitio web. Esto evita que una persona o robot malintencionado venga a "escuchar" claramente las peticiones enviadas o enviadas a su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en nuestros [planes de hosting de OVHcloud](/links/web/hosting). Estos datos se presentan en la guía [Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting). Los certificados SSL son imprescindibles para la seguridad de su sitio web.

Existen tres tipos de certificados SSL:

- Dominio Validación (DV)
- Organization validation (OV)
- Extended Validation (EV)

Los niveles de cifrado SSL son idénticos entre estos tres tipos de certificado.

La principal diferencia radica en el nivel de verificaciones que realizará la Autoridad de Certificación (AC), que emite el certificado SSL y atestigua su autenticidad.

Los certificados SSL EV son aquellos en los que los niveles de verificación y seguridad son más elevados. Por lo general, el certificado SSL EV se utiliza para sitios web muy grandes o sensibles. Este certificado proporcionará el nivel de identificación más alto disponible.

Para los alojamientos compartidos de OVHcloud, la autoridad de certificación que emite los certificados SSL EV es [Sectigo](https://sectigostore.com).

> [!warning]
>
> Los certificados SSL EV no están disponibles para todo el mundo. Compruebe si puede optar a la suscripción **antes** de contratar este último, utilizando los elementos indicados en los [requisitos](#requirements) de esta guía.
>
> Tenga en cuenta que, una vez iniciado el pedido y enviado a nuestro proveedor de certificados/autoridad de certificación Sectigo, **no será posible realizar ninguna devolución**.
>

**Descubra cómo contratar e instalar un certificado SSL Sectigo EV en su alojamiento web de OVHcloud**
    
## Requisitos <a name="requirements"></a>

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Contratar o disponer de un [hosting OVHcloud](/links/web/hosting) en el que no haya ningún certificado SSL instalado.
- Contratar o disponer de un [nombre de dominio](/links/web/domains) y disponer de los derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.
- Ser una organización (empresa, agencia gubernamental, etc.) registrada en un registro oficial.
- La autorización de su organización para contratar un certificado SSL Sectigo EV.
- Estar en condiciones de justificar con exactitud la información y los datos relativos a su organización.

Para comprobar si puede contratar un certificado SSL Sectigo EV, acceda a [este enlace](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-).
  
## Procedimiento

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](/links/partner). En efecto, no podremos asistirle en **todas las etapas de verificación directamente efectuada con la autoridad de certificación Sectigo**. Más información en la sección [Más información](#go-further) de esta guía.
>

### Etapa 1: contratar el certificado SSL Sectigo EV

Los certificados SSL Sectigo EV que ofrece OVHcloud solo son válidos para uno de los siguientes casos en su alojamiento web:

- un único dominio + su subdominio en "www" (por ejemplo, `domain.tld` y `www.domain.tld`);
- un único subdominio (por ejemplo, `sub.domain.tld`).

Esto significa que si tiene otros dominios o subdominios declarados en multisitio en su alojamiento web, estos no podrán beneficiarse de un certificado SSL.

Solo es posible instalar un certificado SSL por cada alojamiento web.

Si necesita activar un certificado SSL para varios dominios o subdominios declarados en su alojamiento web, puede optar por instalar un [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) o instalar su propio [certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

#### 1.1 - Para un dominio y un alojamiento ya existentes en OVHcloud

> [!warning]
>
> **Antes de continuar**, compruebe que **el dominio y/o subdominio** correspondiente a su futuro certificado SSL Sectigo EV:
>
> - apunta a la dirección IP de su alojamiento web;
> - está declarado en multisitio en su alojamiento web.
>
> Para más información, consulte nuestras guías:
>
> - [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>
> En caso de que quiera contratar un certificado SSL Sectigo EV para un dominio (por ejemplo, `domain.tld`), compruebe que su subdominio en "www" (por ejemplo, `www.domain.tld`) apunte también a la dirección IP de su alojamiento web y esté correctamente declarado en multisitio.
>
> En su caso, si contrata el certificado SSL Sectigo EV sin asegurarse de los puntos anteriores, deberá realizar una corrección a posteriori. A continuación, deberá eliminar el certificado SSL Sectigo EV anteriormente suscrito **sin poder beneficiarse de un reembolso** y contratar uno nuevo. El objetivo es que el nuevo certificado SSL Sectigo EV incluya al mismo tiempo su dominio `domain.tld` y su subdominio en "www" `www.domain.tld`.
>
> Le recordamos que, si contrata un certificado SSL Sectigo EV directamente para un subdominio (por ejemplo, `sub.domain.tld`), no se verá afectado.

> [!primary]
>
> **Información sobre la migración a la nueva interfaz de gestión de certificados SSL:**
>
> Continuación de la parte 1.1 se dirige a los clientes cuyos servicios de alojamiento web aún no hayan migrado a la nueva interfaz de gestión de certificados SSL.
> Para consultar si se ha realizado la migración, conéctese al área de cliente de OVHcloud, y compruebe si la pestaña `Certificados SSL` está presente.
> Si la pestaña `Certificados SSL` está presente, su servicio ya ha migrado a la nueva interfaz de gestión. En ese caso, consulte directamente [esta guía](/pages/web_cloud/web_hosting/ssl_management) para gestionar su certificado SSL.
>
> Por razones técnicas, todos los servicios de alojamiento web de todos nuestros clientes no pueden migrarse de una sola vez. Esta migración se realiza de forma automática, a lo largo de varias semanas, sin que afecte al funcionamiento de los servicios de alojamiento web y sin que usted tenga que realizar ninguna intervención o acción.
>
> A largo plazo, todos los servicios de alojamiento web funcionarán con la nueva interfaz de gestión de certificados SSL.

Para contratar el certificado SSL Sectigo EV, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Acceda a la sección `Web Cloud`{.action} de la página.
3. En la columna izquierda, haga clic en el menú `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.
7. A la derecha de la mención `Certificado SSL`, haga clic en el botón `...`{.action} y luego en `Contratar un certificado SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

En la nueva ventana, seleccione `Certificado de pago`{.action} entre las opciones disponibles.

A continuación, seleccione el dominio o subdominio correspondiente en la lista desplegable que aparece y haga clic en `Siguiente`{.action}.

En la nueva ventana, haga clic en `Aceptar`{.action} para ser redirigido a la orden de pedido de su certificado SSL Sectigo EV.

Seleccione el **Certificado SSL Sectigo EV** una vez llegado al túnel del pedido y continúe con el pedido.

Introduzca con exactitud la información solicitada por **Sectigo** antes de que se le emita el certificado SSL Sectigo EV. 

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Haga clic en `Continuar`{.action} una vez **todos los elementos** correctamente introducidos.

Continúe con el pedido hasta que abone el importe pendiente para validar la solicitud de creación del certificado SSL.

> [!alert]
>
> Una vez validado el pedido, la solicitud de certificado SSL Sectigo EV se envía a la autoridad de certificación **Sectigo**.
>
> Asegúrese de que cumple los requisitos para contratar un certificado SSL Sectigo EV **antes de abonar el certificado**.
>
> En efecto, no será posible ninguna devolución del SSL Sectigo EV, **aunque el procedimiento de verificación ante Sectigo no haya finalizado**.
>

#### 1.2 - Para un nuevo dominio y alojamiento

Si todavía no ha contratado su dominio y el alojamiento asociado, acceda a nuestra [página de inicio de OVHcloud](/links/website), introduzca un dominio en el **formulario de búsqueda previsto a tal efecto** y haga clic en `Buscar`{.action} para iniciar el pedido.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

Seleccione el dominio y elija el alojamiento y las opciones hasta que se abra la pestaña `Configure su alojamiento web`.

Seleccione su elección de instalación de `módulo en 1 clic`{.action} y de `CDN`{.action} y descienda al final de la página hasta la sección `Proteja su sitio web con nuestros certificados SSL`{.action}.

![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Seleccione `Sectigo EV SSL`{.action} y haga clic en `Siguiente`{.action}.

Introduzca la información solicitada por **Sectigo** antes de expedir el certificado SSL Sectigo EV en la nueva página.

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Haga clic en `Siguiente`{.action} una vez **todos los elementos** correctamente introducidos.

Continúe con el pedido hasta que se abone el importe pendiente para iniciar la instalación de sus servicios.

> [!alert]
>
> Una vez validado el pedido, la solicitud de certificado SSL Sectigo EV se envía a la autoridad de certificación **Sectigo**. 
>
> Asegúrese de que cumple los requisitos para contratar un certificado SSL Sectigo EV **antes de abonar el certificado**.
>
> En efecto, no será posible ninguna devolución del SSL Sectigo EV, **aunque el procedimiento de verificación ante Sectigo no haya finalizado**.
>

### Etapa 2: verificaciones con la Autoridad de Certificación (AC) Sectigo

Todas las acciones descritas en esta etapa se pueden realizar en varios días. Los plazos **dependerán** de las comprobaciones realizadas por Sectigo.

> [!warning]
>
> En esta etapa, todo el proceso depende del proveedor de certificado **Sectigo** y de la información que se haya introducido al contratar el certificado SSL Sectigo EV. 
>
> Solo **Sectigo** podrá intervenir en esta etapa y OVHcloud no podrá actuar en este sentido.
>
> En efecto, la función del AC Sectigo es certificar, independientemente y con total imparcialidad, los datos de su organización para integrarlos en el certificado SSL Sectigo EV.
>
> Es **Sectigo** quien decide expedir un certificado SSL Sectigo EV y no OVHcloud. Sectigo es por definición el único que tiene autoridad sobre la certificación.
>

#### 2.1 - Recepción del email de confirmación por Sectigo

Una vez realizado el pedido, Sectigo le enviará un mensaje de correo electrónico con un enlace de validación y un procedimiento a seguir.
Compruebe que la información y la solicitud son correctos siguiendo las indicaciones que se ofrecen en este email. 

Para asegurarse de que la comunicación con Sectigo se realiza correctamente, compruebe también la validez de la dirección de correo electrónico que se indica en el formulario al contratar el SSL Sectigo EV y la dirección de correo electrónico de contacto asociada a su [área de cliente de OVHcloud](/links/manager).

> [!primary]
>
> Paralelamente y con el fin de certificar la propiedad de su dominio en Sectigo, un fichero en formato *.txt* se instala automáticamente en el espacio FTP de su alojamiento web. Este se eliminará cuando ya no sea necesario en Sectigo.
>
> Tenga en cuenta que algunas restricciones aplicadas por su parte (por ejemplo, en un archivo ".htaccess") pueden impedir esta verificación.
Si los permisos de acceso FTP CHMOD también están restringidos o son insuficientes, la verificación también puede bloquearse.
>
> También le recomendamos que **no** active o deje activo el[firewall de aplicación](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), disponible con nuestros alojamientos web durante toda la instalación de su certificado SSL Sectigo EV.
>

#### 2.2 - Verificaciones realizadas por la Autoridad de Certificación Sectigo

Sectigo comprobará que su organización existe y que está registrada en los registros oficiales.

> [!primary]
>
> Sectigo puede no poder verificar toda la información con los registros oficiales. Los servicios de Sectigo pueden entonces contactar por teléfono con el número que haya indicado al realizar su pedido, o con el número de teléfono oficial de su organización.
>

A continuación, Sectigo comprobará si tiene la exclusividad/autoridad sobre la propiedad y el uso del dominio con el que va a utilizar el certificado SSL Sectigo EV.

#### 2.3 - Últimas comprobaciones por teléfono con Sectigo

Una vez realizadas las comprobaciones realizadas por Sectigo, sus servicios le contactarán por teléfono para finalizar la contratación de su certificado SSL Sectigo EV.

> [!success]
>
> Para más información sobre las operaciones descritas en **el Etapa 2** anterior, consulte la [documentación oficial de Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-) sobre el asunto.
>

### Etapa 3: instalación del certificado SSL Sectigo EV con su dominio y su alojamiento OVHcloud

Una vez que Sectigo haya procedido a todas las verificaciones, sus servicios generan el certificado SSL Sectigo EV y nos transmiten los elementos necesarios para su instalación en su alojamiento.

Solo tendrá que [pasar su sitio web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website) para utilizar plenamente su certificado SSL Sectigo EV.

## Más información <a name="go-further"></a>

[Sitio Oficial Sectigo](https://sectigostore.com)

[Descripción de las verificaciones realizadas por Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-)

[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Habilitar HTTPS en el sitio web](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).