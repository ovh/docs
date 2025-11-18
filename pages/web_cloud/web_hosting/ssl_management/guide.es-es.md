---
title: "Web hosting - Nueva gestión de certificados SSL"
excerpt: "Descubra cómo gestionar un certificado SSL en un alojamiento web de OVHcloud desde nuestra nueva interfaz de gestión"
updated: 2025-10-01
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

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios efectuados desde o hacia su sitio web. Esto evita que una persona o un robot malicioso venga a "escuchar" claramente las peticiones enviadas desde su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en nuestros planes de [hosting OVHcloud](/links/web/hosting). Más adelante en esta guía, explicamos cómo hacerlo. Los certificados SSL son indispensables para la seguridad de su sitio web.

Existen tres tipos de certificados SSL:

- Domain Validation (DV).
- Organization validation (OV).
- Extended Validation (EV).

Los niveles de cifrado SSL son idénticos entre los tres tipos de certificado.

La principal diferencia reside en el nivel de comprobaciones que realizará la Autoridad de Certificación (AC) que emite el certificado SSL y certifica su autenticidad.

Para que el sitio web esté accesible en HTTPS, es necesario disponer de un certificado SSL.

**Descubra cómo gestionar un certificado SSL en un alojamiento web de OVHcloud desde nuestra nueva interfaz de gestión.**

## Requisitos

- Tener acceso al [área de cliente de OVHcloud](/links/manager).
- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Haber registrado al menos un [dominio](/links/web/domains).

> [!warning]
>
> **Antes de continuar**, compruebe que cada **dominio y/o subdominio** correspondiente a su futuro certificado SSL:
>
> - Apunta a la dirección IP de su alojamiento web.
> - Está declarado en multisitio en su alojamiento web.
>
> En caso de duda, consulte las siguientes guías:
>
> - [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

## Procedimiento

### Acceder a la gestión de los certificados SSL desde su alojamiento web

> [!primary]
>
> **Información sobre la migración a la nueva interfaz de gestión de certificados SSL:**
>
> El resto de esta guía se dirige a los clientes cuyos servicios de alojamiento web ya hayan migrado a la nueva interfaz de gestión de certificados SSL.
> Para comprobar si se ha realizado la migración, acceda a su alojamiento en el área de cliente de OVHcloud y compruebe la presencia de la pestaña `Certificados SSL`.
> Si la pestaña `Certificados SSL` no está presente, el servicio no ha migrado aún a la nueva interfaz de gestión. En ese caso, consulte directamente [esta guía](/pages/web_cloud/web_hosting/ssl_on_webhosting) para gestionar su certificado SSL.
>
> Por razones técnicas, todos los servicios de alojamiento web de todos nuestros clientes no pueden migrarse de una sola vez. Esta migración se realiza de forma automática, a lo largo de varias semanas, sin que afecte al funcionamiento de los servicios de alojamiento web y sin que usted tenga que realizar ninguna intervención o acción.
>
> A largo plazo, todos los servicios de alojamiento web funcionarán con la nueva interfaz de gestión de certificados SSL.

Para acceder a la gestión de los certificados SSL desde su alojamiento web, Haga clic en las fichas siguientes para ver cada uno de los **3** pasos:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}

Desde ahí podrá gestionar íntegramente sus certificados SSL para todos los dominios y subdominios asociados a su alojamiento web.

### Activar un certificado SSL en un alojamiento web <a name="ssl-enable"></a>

OVHcloud ofrece 4 soluciones para activar o instalar un certificado SSL en un alojamiento web.

**Haga clic a continuación en el certificado SSL de su elección para ver las explicaciones.**

/// details | Activar el certificado SSL gratuito Let's Encrypt (DV)

El certificado SSL gratuito Let's Encrypt (DV) puede incluir hasta **99** nombres de dominio y subdominios declarados en un alojamiento web.

Haga clic en las fichas siguientes para ver cada uno de los **4** pasos:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca el contenido de la pestaña, seleccione el nombre de dominio o subdominio para el que quiera activar el certificado SSL gratuito Let's Encrypt (DV), bajo la indicación `Activar el certificado SSL`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Haga clic en el botón `Activar SSL Let's Encrypt`{.action}.

> [!success]
>
> Se genera automáticamente un certificado SSL Let's Encrypt por cada dominio y subdominio recientemente declarado en multisitio en su alojamiento web. Para asegurarse de que el dominio o subdominio aparece en la tabla que aparece en la parte inferior de la página `Certificados SSL`{.action}.

///

/// details | Activar el certificado SSL de pago Sectigo (DV)

El certificado SSL de pago Sectigo (DV) es válido para un único dominio y su subdominio en "www" (por ejemplo: `domain.tld` y `www.domain.tld`) o **únicamente** un subdominio (por ejemplo: `sub.domain.tld`).

Haga clic en las fichas siguientes para ver cada uno de los **5** etapas:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca la pestaña, haga clic en el botón `Contratar un certificado SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> En la nueva ventana, seleccione el dominio o subdominio correspondiente en el menú desplegable y haga clic en `Confirmar`{.action} para redirigirlo a la orden de pedido de su certificado SSL Sectigo DV.
>>
>> ![SSL Sectigo domain selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Continúe con el pedido hasta el pago para validar la solicitud de creación del certificado SSL Sectigo DV para su dominio y/o subdominio en su alojamiento web.

> [!alert]
>
> Una vez validado el pedido, la solicitud de certificado SSL Sectigo DV se envía a la entidad de certificación Sectigo.
>
> A partir de ese momento, no es posible reembolsar el SSL Sectigo DV.

///

/// details | Activar el certificado SSL de pago Sectigo (EV)

El certificado SSL de pago Sectigo (EV) es válido para un único dominio y su subdominio en "www" (por ejemplo, `domain.tld` y `www.domain.tld`) o **únicamente** un subdominio (por ejemplo, `sub.domain.tld`).

> [!warning]
>
> El certificado SSL de pago Sectigo (EV) tiene condiciones de elegibilidad específicas:
>
> - Contratar o disponer de un [nombre de dominio](/links/web/domains) y disponer de los derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.
> - Ser una organización (empresa, agencia gubernamental, etc.) registrada en un registro oficial.
> - La autorización de su organización para contratar un certificado SSL Sectigo EV.
> - Estar en condiciones de justificar con exactitud la información y los datos relativos a su organización.
>
> Para comprobar si puede contratar un certificado SSL Sectigo EV, acceda a [este enlace](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.

Haga clic en las fichas siguientes para ver cada uno de los **6** etapas:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca la pestaña, haga clic en el botón `Contratar un certificado SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> En la nueva ventana, seleccione el dominio o subdominio correspondiente en el menú desplegable y haga clic en `Confirmar`{.action} para redirigirlo a la orden de pedido de su certificado SSL Sectigo EV.
>>
>> ![SSL Sectigo domain selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Etapa 6**
>>
>> Seleccione el **Certificado SSL Sectigo EV** una vez llegado al túnel del pedido y continúe con el pedido.
>>
>> Introduzca con exactitud la información solicitada por **Sectigo** antes de que se le emita el certificado SSL Sectigo EV. 
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Haga clic en `Continuar`{.action} una vez **todos los elementos** correctamente introducidos.
>>
>> Continúe con el pedido hasta que abone el importe pendiente para validar la solicitud de creación del certificado SSL.

> [!alert]
>
> Una vez validado el pedido, la solicitud de certificado SSL Sectigo EV se envía a la autoridad de certificación **Sectigo**.
>
> Asegúrese de que cumple los requisitos para contratar un certificado SSL Sectigo EV **antes de abonar el certificado**.
>
> En efecto, no será posible ninguna devolución del SSL Sectigo EV, **aunque el procedimiento de verificación ante Sectigo no haya finalizado**.

///

/// details | Instalar un certificado SSL personalizado

Esta solución le permite instalar su propio certificado SSL para su nombre de dominio, si ninguna de las 3 soluciones anteriores se corresponde con sus necesidades y quiere utilizar un certificado SSL del que ya dispone.

Haga clic en las fichas siguientes para ver cada uno de los **5** etapas:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca la pestaña, haga clic en el botón `Importación de su propio certificado SSL`{.action}.
>>
>> ![SSL personalizado](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> En la siguiente ventana se muestra un formulario con 3 campos para completar:
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Copiar el contenido de su certificado (solo RSA)`{.action}: introduzca el contenido del archivo **certificate.crt** emitido por su proveedor SSL, incluidos los términos `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----` (o sus equivalentes). El cifrado RSA corresponde al cifrado estándar de los certificados SSL.
>> - `Copiar el contenido de su clave privada (no cifrada)`{.action}: introduzca el contenido del archivo **private.key** emitido por su proveedor SSL, incluidos los términos `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----` (o sus equivalentes). La mención *no cifrada* significa que la clave privada no debe estar protegida con una contraseña o una contraseña. En caso contrario, la instalación del certificado no se realizará correctamente.
>> - `Copiar el contenido de su cadena de certificados`{.action}: introduzca el contenido del archivo **ca_bundle.crt** emitido por su proveedor SSL, incluidos los términos `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----` (o sus equivalentes).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Una vez que haya completado los 3 formularios, haga clic en `Aceptar`{.action} para finalizar la importación del certificado SSL personalizado en su alojamiento web.

> [!success]
>
> Para más información sobre los tres campos, consulte los pasos **1** y **2** de nuestra guía "[Web hosting - Instalar un certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom)".

///

### Desactivar un certificado SSL en un alojamiento web <a name="delete-ssl"></a>

> [!warning]
>
> **Antes de continuar**, asegúrese de que la eliminación del certificado SSL no desactivará el acceso a sus sitios web. En ese caso, los usuarios encontrarán un error de seguridad al intentar acceder a su sitio web en HTTPS.

Esta comprobación es inherente a la configuración de su sitio web. Si necesita ayuda, le recomendamos que contacte con un proveedor de servicios especializado. No podremos asistirle.

Para eliminar el certificado SSL instalado en el alojamiento web, haga clic en las fichas siguientes para ver cada uno de los **5** etapas:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la tabla que aparece en la parte inferior de la nueva página, haga clic en el botón `⁝`{.action}, situado a la derecha de la línea correspondiente al dominio en cuestión, y seleccione `Desactivar SSL`{.action}.
>>
>> ![Desactivar SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Etapa 5**
>>
>> En la nueva ventana, confirme la desactivación haciendo clic en `Confirmar`{.action}.
>>
>> ![Eliminar SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

La desactivación del certificado SSL será efectiva en unas horas como máximo.

> [!warning]
>
> La supresión de un certificado SSL de pago **Sectigo** (DV o EV) es definitiva, incluso si el certificado no había expirado todavía. No se realizará ninguna devolución por la parte proporcional al tiempo restante. Si quiere reinstalar un certificado SSL **Sectigo** (DV o EV), deberá realizar obligatoriamente un nuevo pedido y abonar la totalidad del nuevo certificado SSL suscrito.

## Más información <a name="go-further"></a>

[Web hosting - Habilitar HTTPS en un sitio web](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).