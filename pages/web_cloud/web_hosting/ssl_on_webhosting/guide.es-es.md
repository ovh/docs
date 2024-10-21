---
title: "Gestionar un certificado SSL en un alojamiento web"
excerpt: "Operaciones relativas a los certificados SSL en los alojamientos web de OVHcloud"
updated: 2023-12-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los alojamientos web de OVHcloud son compatibles con los certificados SSL. Puede contratar un certificado SSL con OVHcloud u obtenerlo de otro proveedor e importarlo en el alojamiento. Una vez que haya configurado e instalado el certificado, sus sitios web podrán disponer de una conexión SSL segura y, por consiguiente, podrán funcionar en HTTPS.

**Esta guía explica las distintas operaciones relativas a los certificados SSL en los alojamientos web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting){.external}.
- Tener al menos un [dominio](/links/web/domains){.external}.
- Tener acceso al [área de cliente de OVHcloud](/links/manager){.external}, en la sección `Web Cloud`{.action}.

## Procedimiento

Es necesario seguir varios pasos para generar un certificado SSL en un alojamiento web de OVHcloud. Le recomendamos que siga los pasos que se describen a continuación **en el orden**.

[1.Activar un certificado SSL en un multisitio](#multisite): si su solución o su certificado SSL lo permiten, puede hacer beneficiarse de una conexión segura SSL en varios multisitios.

[2. Activar un certificado SSL en un alojamiento web](#enablessl): le ayuda a activar un certificado SSL en su alojamiento web. Puede tratarse de un certificado gratuito o de pago contratado con OVHcloud. También puede importar su propio certificado SSL contratado a otro proveedor.

[3.Regenerar un certificado SSL en un alojamiento web](#regeneratessl): permite regenerar un certificado SSL Let's Encrypt en un alojamiento web al activar el SSL en uno o más multisitios.

También puede [eliminar el certificado SSL de un alojamiento web](#deletessl). **Tenga en cuenta que puede plantear riesgos si uno de sus sitios web utiliza actualmente el certificado que tiene previsto eliminar**.

### 1. Activar un certificado SSL en un multisitio <a name="multisite"></a>

Según el [certificado SSL](/links/web/hosting-options-ssl){.external} que quiera contratar, puede activar una conexión SSL segura en uno o más multisitios. Para ello, conéctese al [área de cliente de OVHcloud](/links/manager){.external} y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Multisitio`{.action}.

Se mostrará una tabla que contiene todos los dominios añadidos al alojamiento web. La columna SSL muestra el estado de activación de las conexiones SSL seguras en los multisitios.

![Contratar un certificado SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

Pueden aparecer tres estados:

|Estado|Descripción|
|---|---|
|Activado|Indica que ya hay un certificado SSL activado en el multisitio. Si su sitio web no está disponible en HTTPS, consulte las indicaciones ofrecidas en la guía [Habilitar HTTPS en un sitio web con certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website){.external}.|
|Por generar|Indica que ya se ha activado un certificado SSL en el multisitio, pero que dicho certificado todavía no está técnicamente activo. Para activarlo, deberá regenerarlo para que incluya los nuevos dominios del multisitio.|
|Desactivado|Indica que no hay ningún certificado SSL activo en el multisitio. Para activarlo, siga los pasos que se indican a continuación.|

Para activar el SSL en un multisitio, haga clic en el botón `...`{.action} situado al final de la línea correspondiente al multisitio y seleccione `Cambiar el dominio`{.action}. En la nueva ventana, marque la casilla `SSL`{.action}. También puede activar la opción para cambiar el subdominio www junto con el dominio asociado. Siga los pasos que se le indican para confirmar el cambio.

> [!warning]
>
> La atribución de un certificado SSL a una entrada multisitio a través de la tabla "multisitio" solo puede realizarse si ha contratado el certificado SSL gratuito **Let's Encrypt** proporcionado por OVHcloud.
>
> Los certificados SSL de pago **Sectigo** (DV y EV) solo son válidos para un único dominio (y su subdominio en *www*). La mención *Activado* no podrá aparecer a la derecha de los otros multisitios declarados en el alojamiento web.
>
> Algunos certificados SSL **Externos** pueden ser válidos para varios dominios al mismo tiempo. Si utiliza uno de ellos, la mención *Activado* no aparecerá para todos sus dominios declarados en la tabla "multisitio". No obstante, su certificado SSL seguirá siendo válido para los nombres de dominio que *engloba*.
>

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Una vez enviada la solicitud de activación, el estado de la conexión segura SSL para el multisitio debe actualizarse al cabo de unos segundos, sustituyéndose el estado por "Por generar". Repita esta operación para todos los multisitios en los que quiera activar el SSL.

> [!primary]
>
> Puede haber dos situaciones en este estado:
>
> - **No hay certificados.**
> Continúe leyendo esta guía en el apartado [Activar un certificado SSL en su alojamiento web](#enablessl) y seleccione el certificado gratuito ("Let's Encrypt") que permite crear un sitio web multisitio.
>
> - **El certificado SSL está activo, pero ha añadido otros sitios multisitio.**
> Continúe leyendo esta guía en el apartado [Regenerar un certificado SSL en un alojamiento web](#regeneratessl) para regenerar el certificado SSL en el multisitio restante.
>

### 2. Activar un certificado SSL en un alojamiento <a name="enablessl"></a>

Antes de realizar esta configuración, asegúrese de que ha realizado correctamente el paso anterior de [activar un certificado SSL en un sitio multisitio](#multisite). Al menos un dominio debe tener la opción SSL `Activada` o el estado `A generar` para activar el certificado SSL.<br>
**Esta información no es pertinente si selecciona `Certificado de pago`{.action} o `Importar su certificado SSL`{.action}.**

> [!warning]
>
> Antes de continuar, asegúrese también de que el registro o registros multisitio para los que está activando la opción SSL apuntan a la dirección IP del alojamiento web. Esta configuración se ofrece automáticamente al añadir o modificar una entrada multisitio, pero debe realizarse manualmente para un dominio que no esté gestionado en el área de cliente.
> - Localice la dirección IP de su alojamiento en la pestaña `Información general`{.action}, debajo de `IPv4`.
> ![manager](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4.png){.thumbnail}
> - Configure la zona DNS del nombre de dominio declarado en multisitio, en la sección `Dominios`{.action}, pestaña `Zona DNS`{.action}. Modifique o añada un registro `A` correspondiente al registro multisitio e indique la dirección IP de su alojamiento en el campo `Destino`.
> ![manager](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-an-entry.png){.thumbnail}
>
> Para más información, consulte nuestras guías [sobre la configuración de un registro multisitio](/pages/web_cloud/web_hosting/multisites_configure_multisite) o [sobre la configuración de una zona DNS](/pages/web_cloud/domains/dns_zone_edit).

Existen diversas fórmulas para disponer de un [certificado SSL](/links/web/hosting-options-ssl){.external} en un alojamiento web de OVHcloud:

- certificado SSL gratuito Let's Encrypt, [incluido con los planes de hosting compatibles](/links/web/hosting-options-ssl){.external};
- certificado SSL de pago, [disponible como opción en los planes de hosting compatibles](/links/web/hosting-options-ssl){.external};
- importación de un certificado SSL contratado con otro proveedor.

Para activar el certificado, conéctese al [área de cliente de OVHcloud](/links/manager){.external} y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}. En la pestaña Certificado SSL, aparecerá la indicación "No", indicando que no hay ningún certificado SSL configurado ni instalado en el alojamiento web.

Haga clic en el botón `···`{.action} situado junto a **Certificado SSL** y seleccione `Contratar un certificado SSL`{.action}.

Si, por el contrario, se indica "Sí", significa que ya hay un certificado SSL instalado y configurado en el alojamiento web. No es posible contratar un nuevo certificado mientras tenga uno instalado.

![Contratar un certificado SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

En el cuadro de diálogo, seleccione el tipo de certificado SSL que quiera contratar. Es posible que, en función del [plan de hosting](/links/web/hosting){.external} o de su configuración, algunas de las opciones que explicamos a continuación no estén disponibles. Una vez que haya seleccionado el tipo de certificado, haga clic en `Siguiente`{.action}.

![Contratar un certificado SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

En función del tipo de certificado seleccionado, puede ser necesario realizar más acciones:

- **Si ha seleccionado un certificado SSL gratuito**, no será necesaria ninguna otra acción, a menos que algún problema técnico impida activar el certificado SSL (en cuyo caso aparecerá un mensaje en el área de cliente indicándole los elementos que debe comprobar) o validar el dominio para la entrega del certificado SSL. Si eso ocurre, siga las indicaciones que aparezcan en el mensaje de aviso.

- **Si ha seleccionado un certificado SSL de pago**, deberá finalizar el pedido para obtener el certificado. Para determinados tipos de certificado SSL, puede ser necesaria una validación específica. Es posible, pues, que reciba uno o más mensajes de correo electrónico relativos a la validación. En ese caso, lea la información que contienen dichos mensajes y siga sus indicaciones hasta finalizar la configuración.

- **Si ha seleccionado la importación de un certificado SSL**, deberá introducir los datos del certificado en los campos de texto. Si tiene cualquier duda, consulte la información que le haya proporcionado el proveedor del certificado. Normalmente proporcionan 3 archivos: `certificate.crt`, `private.key` y `ca_bundle.crt`. Después de seleccionar `Importar su certificado SSL`{.action} haga clic en `Siguiente`{.action}. En la primera sección "Copiar el contenido de su certificado (solo RSA):", copie el contenido del archivo "certificate.crt", en la segunda sección "Copiar el contenido de su clave privada (no cifrada):", copie el contenido del archivo "private.key" y en la tercera sección "Copiar el contenido de su cadena de certificados:", copie el contenido del archivo "ca_bundle.crt" y haga clic en `Confirmar`{.action}.

La configuración del certificado podría tardar desde unos minutos hasta varios días en función del tipo de certificado elegido. Para comprobar si el certificado SSL está configurado en el alojamiento web, vaya a la pestaña **Información general** del área de cliente de OVHcloud. Bajo el epígrafe **Certificado SSL** debería aparecer la indicación "Sí". 

![Contratar un certificado SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

### 3. Regenerar el certificado SSL de un alojamiento <a name="regeneratessl"></a>

> [!primary]
>
> Esta operación solo se aplica a los certificados SSL gratuitos Let's Encrypt [incluidos con un plan de hosting compatible](/links/web/hosting-options-ssl) que permiten activar una conexión SSL segura para varios multisitios.
>

Una vez que haya activado la conexión segura SSL en uno o más multisitios, su estado cambiará a "Por generar". Es necesario generar (o regenerar) el certificado SSL de un alojamiento web para poder añadir dominios a dicho certificado.

Para ello, conéctese al [área de cliente de OVHcloud](/links/manager){.external} y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}. Haga clic en el botón `···`{.action} situado junto a **Certificado SSL** y seleccione `Regenerar el certificado SSL`{.action}.

![Contratar un certificado SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

En el cuadro de diálogo, lea la información que se muestra y haga clic en `Aceptar`{.action} para confirmar la operación. Espere hasta que se regenere su certificado SSL. La operación podría tardar varias horas.

Tenga en cuenta que Let's Encrypt, la autoridad que emite el certificado SSL incluido con el alojamiento web, impone un [límite de cinco regeneraciones por semana](https://letsencrypt.org/docs/rate-limits/){.external}. Así pues, preste atención al número de veces que regenera su certificado para evitar un posible bloqueo temporal.

![Contratar un certificado SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

### Eliminar el certificado SSL de un alojamiento <a name="deletessl"></a>

También es posible eliminar el certificado SSL instalado en un alojamiento web. Antes de realizar esta operación, **le recomendamos encarecidamente que se asegure previamente de que la eliminación del certificado no afectará al acceso a sus sitios web**. Por otro lado, tenga en cuenta que los internautas verán una advertencia de seguridad cuando accedan a un sitio web que funcione en HTTPS pero carezca de una conexión SSL segura.

Esta comprobación se realiza directamente en la configuración del propio sitio web. Si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle.

Una vez que esté listo para eliminar el certificado SSL, conéctese al [área de cliente de OVHcloud](/links/manager){.external} y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}. Haga clic en el botón `···`{.action} situado junto a **Certificado SSL** y seleccione `Eliminar el SSL`{.action}.

En el cuadro de diálogo, confirme que desea eliminar el certificado haciendo clic en `Aceptar`{.action}. La eliminación tardará unas horas en aplicarse.

![Contratar un certificado SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

> [!warning]
>
> La supresión de un certificado SSL de pago **Sectigo** (DV o EV) es definitiva, incluso si el certificado no había expirado todavía. No se realizará ninguna devolución por la parte proporcional al tiempo restante. Si quiere reinstalar un certificado SSL **Sectigo** (DV o EV), deberá realizar obligatoriamente un nuevo pedido y abonar la totalidad del nuevo certificado SSL suscrito.
>

### Corregir los errores más frecuentes de los certificados SSL ofrecidos en los alojamientos web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Este mensaje indica que ya es propietario de un certificado SSL. Por lo tanto, no es necesario activar un nuevo certificado SSL (Let's Encrypt) en su alojamiento web.

Para más información, consulte la sección "[activación de un certificado SSL en un sitio multisitio](#multisite)" de esta guía.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Existen tres casos que pueden explicar esta notificación.

- 1: El nombre de dominio asociado a su sitio web apunta a la dirección IP de la CDN de su alojamiento web, sin opción CDN activa en su alojamiento web:

Para resolver esta situación, asigne a su dominio la dirección IP del alojamiento web sin CDN a través de la zona DNS activa del dominio.

Para consultar la dirección IP de un alojamiento web, consulte nuestra guía "[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar la zona DNS activa de su dominio, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 2: El dominio asociado a su sitio web no apunta a la dirección IP de su alojamiento web:

Para resolver esta situación, asigne la dirección IP del alojamiento web al dominio a través de la zona DNS activa del dominio.
Si ha activado una opción CDN en su alojamiento web, también puede utilizar la dirección IP del alojamiento web con CDN.

Para consultar la dirección IP de un alojamiento web, consulte nuestra guía "[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar la zona DNS activa de su dominio, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 3: Ninguno de los dominios presentes en la pestaña "multisitio" dispone de una opción SSL "activa":

Para solucionar este problema, active el certificado SSL para el dominio o dominios. Si lo necesita, consulte la sección "[activación de un certificado SSL en un sitio multisitio](#multisite)" de esta guía para continuar.

#### El certificado SSL está activo en su alojamiento web, pero aparece el mensaje "Your connection is not private" en su sitio web

Este mensaje aparece en los siguientes casos:

- 1: La regla de redirección a su URL en HTTPS está mal configurada o no existe en el archivo ".htaccess" :

Para solucionarlo, consulte nuestro tutorial "[Reescribir la URL de acceso a mi sitio web con mod_rewrite a través del archivo .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" o contacte con un [proveedor especializado](/links/partner) si tiene alguna dificultad.

- 2: Algunos elementos de la página web no se redirigen correctamente a elementos cifrados en HTTPS:

Para corregirlo, asegúrese de que todo su sitio web esté cifrado mediante el protocolo HTTPS.
Si lo necesita, consulte nuestro tutorial "[Web hosting: cambiar su sitio web a HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)" o contacte con un [proveedor especializado](/links/partner) en caso de que tenga problemas.

> [!success]
>
> Los elementos afectados en la página web pueden ser vistos directamente desde la información SSL del navegador de internet, consultando los *detalles del Certificado*.
>

#### Ha contratado un SSL Sectigo EV al mismo tiempo que su alojamiento web, pero el certificado todavía no está activo y el alojamiento web no funciona correctamente

Esta situación está relacionada con los pasos que debe realizar para activar el SSL EV en su alojamiento web.

Si lo necesita, consulte nuestra guía "[Utilizar un certificado SSL EV para su sitio web](/pages/web_cloud/web_hosting/ssl_ev)" para solucionar esta situación.

> [!primary]
>
> Si el certificado SSL EV no está totalmente activo, el pedido no se cerrará nunca y no generará ninguna factura. Como resultado, el servicio de alojamiento web no funcionará correctamente.
>

#### Tras la expiración del certificado SSL Sectigo (DV o EV), se produce el error "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Este error se produce cada vez que el certificado SSL Sectigo (activado directamente desde el alojamiento web) expira y que cambia la dirección IP del alojamiento web. Por lo tanto, debe hacer que su dominio apunte a la dirección IP correcta (registro de tipo A), directamente desde la zona DNS activa de su dominio.

Para consultar la dirección IP de un alojamiento web, consulte nuestra guía "[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar la zona DNS activa de su dominio, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).