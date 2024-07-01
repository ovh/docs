---
title: 'Transferir un dominio GoDaddy a OVHcloud'
excerpt: 'Descubra diferentes datos relativos a la transferencia de un dominio GoDaddy a OVHcloud'
updated: 2024-07-01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
> 

## Objetivo

Para transferir un dominio GoDaddy es necesario seguir un procedimiento específico.

**Descubra cómo transferir un dominio GoDaddy a OVHcloud**

> [!warning]
>
> El [agente registrador](/links/web/domains-what-is-registrar) de un dominio representa la organización/proveedor autorizado con el que el dominio está registrado o suscrito por un particular, una asociación o una organización. Renueve la suscripción de su dominio (generalmente una vez al año) con este mismo agente registrador.
>
> Si OVHcloud ya es el agente registrador del dominio **antes** de iniciar el procedimiento que se indica a continuación, la transferencia entrante del dominio no es el procedimiento adecuado. El procedimiento de transferencia entrante del dominio se aplica **únicamente** a los dominios registrados en un agente registrador que no sea OVHcloud.
>
> Para transferir la gestión de su dominio a otra cuenta de cliente de OVHcloud, el método adecuado es un **cambio de contactos**. El procedimiento se describe en [esta guía](/pages/account_and_service_management/account_information/managing_contacts).
> Si también debe cambiar el **propietario** del dominio, deberá hacerlo **antes** de cambiar los contactos del dominio. Para ello, siga las instrucciones de la guía relativa al [cambio de propietario de los dominios](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- El dominio está registrado en el agente registrador GoDaddy.
- El dominio existe desde hace más de 60 días.
- El dominio no ha sido transferido o no ha cambiado de propietario en los últimos 60 días.
- El estado del dominio es "OK" o "Transferible".
- El nombre de dominio no ha expirado y tiene una fecha de expiración que permite finalizar el proceso de transferencia en el plazo indicado (recomendado: más de 60 días).

También debe:

- Estar en condiciones de desbloquear el dominio.
- Tener el código de transferencia o estar en condiciones de recuperarlo.
- Estar facultado para solicitar la transferencia del dominio.
- Haber informado al propietario del dominio y/o a sus administradores de la solicitud de transferencia.

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con su actual agente registrador. Nosotros no podremos asistirle. Para más información, consulte la sección [Más información](#go-further) de esta guía.
>

## Procedimiento

> [!primary]
>
> La zona DNS activa de un dominio contiene la configuración DNS aplicada al dominio. Es la que asocia el dominio a servicios como las direcciones de correo o el sitio web.
>
> Si, además del dominio, dispone de una zona DNS activa para el mismo en su actual agente registrador, compruebe con sus servicios que la zona DNS aplicada al dominio no se eliminará una vez realizada la transferencia.
>
> Algunos agentes registradores eliminan la zona DNS que se encuentra en ellos una vez finalizada la transferencia del dominio. En ese caso, vuelva a crear su zona DNS en OVHcloud antes de iniciar las acciones asociadas a la transferencia del dominio.
>
> Para ello, consulte las siguientes guías:
>
> - [Crear una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Asimismo, asegúrese de que su actual agente registrador no vaya a cerrar otros servicios, como las direcciones de correo asociadas al dominio.
>
> Si, además de la transferencia del dominio, quiere migrar los servicios asociados al mismo (sitio web, correo electrónico...), consulte en primer lugar nuestra guía "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" antes de continuar.
> Esta guía explica en detalle cómo migrar todos sus servicios sin cortes del servicio.
>
> Si solo va a transferir su dominio sin trasladar los demás servicios, deberá obtener los servidores DNS activos para su dominio de su actual **registrar** para informarlos directamente en el paso 3 de la guía "[Transferir su dominio a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".
> De este modo, no tendrá que interrumpir la asociación entre su dominio y los servicios externos asociados.
>

### Etapa 1 - Desbloquear el dominio en GoDaddy

El bloqueo de un dominio lo protege contra los intentos de transferencia no autorizados.
GoDaddy habilita esta protección de forma predeterminada. Para transferir su dominio a OVHcloud, deberá desactivar esta opción.

Siga los pasos descritos en la [documentación dedicada de GoDaddy](https://es.godaddy.com/help/bloquear-o-desbloquear-mi-dominio-410){.external}.

### Etapa 2 - Obtener el código de autorización 

OVHcloud le solicitará el código de autorización o «Auth code» antes de iniciar el procedimiento de transferencia del dominio. Puede obtenerlo abriendo la página de su cartera de dominios`{.action} en GoDaddy.

Siga los pasos descritos en la [documentación dedicada de GoDaddy](https://es.godaddy.com/help/transferir-mi-dominio-fuera-de-godaddy-3560){.external}.

### Etapa 3 - Iniciar la transferencia del dominio a OVHcloud

Una vez obtenido el código de autorización, puede proceder a la transferencia del dominio siguiendo las etapas de la guía "[Transferir un dominio a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

## Más información <a name="go-further"></a>

[Transferir un dominio a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migrar un sitio web y el correo a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).