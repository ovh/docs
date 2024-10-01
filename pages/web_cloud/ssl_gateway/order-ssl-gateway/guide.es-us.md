---
title: 'Contratar un SSL Gateway'
excerpt: 'Proteja las conexiones a su sitio web'
updated: 2024-10-01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

La solución SSL Gateway está diseñada para ofrecerle un certificado SSL para su dominio y su servicio de alojamiento (VPS, servidor de correo, servidor dedicado, etc.).

> [!warning]
>
> Los SSL Gateways son incompatibles con los [planes de hosting de OVHcloud](/links/web/hosting). Si desea disfrutar de un certificado SSL para este tipo de servicio, consulte nuestra guía "[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".
>

**Descubra cómo contratar un SSL Gateway.**

## Requisitos

- Tener un [dominio](/links/web/domains) o subdominio activo.
- Tener acceso a la zona DNS del dominio.

## Procedimiento

### Pedido

Para contratar nuestra solución SSL Gateway, [haga clic aquí](/links/web/ssl-gateway).

Seleccione su producto y haga clic en `Contratar`{.action}.

![order ssl gateway](images/configure-my-ssl-gateway.png){.thumbnail}

A continuación, introduzca el nombre de dominio o subdominio en el formulario `Busque su dominio`{.action} y haga clic en el icono con forma de lupa situado a la derecha.

> [!warning]
>
> - Oferta Gratuito : solo están autorizados los dominios de hasta 3 niveles (www.domain.tld).
>
> - Oferta Advanced: se permiten los dominios de cuarto nivel (blog.www.domain.tld) y más.
>

A continuación, nuestro sistema detectará automáticamente la dirección o direcciones IP de su sitio web configuradas en su dominio o subdominio. Si tiene varias IP, elija una.

> [!warning]
>
> - Si dispone de varias direcciones IP para su sitio web, solo podrá elegir una IP al contratar el servicio.
> - Si dispone de la solución Advanced, podrá añadir hasta 2 IP adicionales desde su [área de cliente de OVHcloud](/links/manager).
>

Seleccione a continuación la localización del datacenter en el que quiere instalar el SSL Gateway, de los 2 disponibles.

Si lo desea y si esta está disponible al realizar el pedido, marque la casilla `Gestiono la zona DNS de este dominio y autorizo a OVHcloud a modificar automáticamente el registro DNS requerido`{.action}. La zona DNS asociada al dominio o subdominio se actualizará automáticamente con la dirección IP del servicio SSL Gateway.

> [!warning]
>
> Cualquier modificación de la zona DNS puede tardar hasta 24 horas en funcionar, debido a la caché de los proveedores de acceso a internet.
>

Compruebe que todas sus opciones son correctas en la página de pedido y haga clic en `Continuar`{.action}.

Por último, déjese guiar hasta la validación / pago de su orden de pedido.

### Configuración de su zona DNS

Una vez validada la orden de pedido, si no ha marcado la casilla `Gestiono la zona DNS de este dominio y autorizo a OVHcloud a modificar automáticamente el registro DNS requerido`{.action}, le enviaremos un mensaje de correo electrónico pidiéndole que haga apuntar su dominio o subdominio a la infraestructura de OVHcloud en un plazo de 3 días.

> [!warning]
>
> Sin cambios en la zona DNS en un plazo de 3 días, el pedido será cancelado.
>

> [!faq]
>
> Caso 1: Su zona DNS es gestionada por los servidores DNS compartidos de OVHcloud.
>>>
>> - Si su identificador es contacto *administrador* o *técnico* de esta zona DNS, deberá modificarlo en su [área de cliente de OVHcloud](/links/manager).
>> - Si no es contacto *administrador* o *técnico* de esta zona DNS, póngase en contacto con la persona encargada de la misma para cambiarla.
>>>
>> Consulte las instrucciones de la guía "[Crear una zona DNS de OVHcloud para un dominio](/pages/web_cloud/domains/dns_zone_create)", en su caso.
>>>
>
> Caso 2: Su zona DNS no está gestionada por los servidores DNS compartidos de OVHcloud.
>>>
>> - En este caso, solo tiene que modificar la IP en su zona DNS accediendo a la interfaz de su proveedor o de su servidor dedicado.
>>>
>

Una vez introducidos los cambios en nuestra infraestructura, recibirá un mensaje de confirmación.

> [!warning]
>
> Cualquier modificación de la zona DNS puede tardar hasta 24 horas en funcionar, debido a la caché de los proveedores de acceso a internet.
>

## Más información
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).