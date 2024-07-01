---
title: 'Transferir un dominio Gandi a OVHcloud'
excerpt: 'Descubra diferentes datos relativos a la transferencia de un dominio Gandi a OVHcloud'
updated: 2024-06-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
> 

## Objetivo

Para transferir un dominio Gandi es necesario seguir un procedimiento específico.

> [!warning]
>
> El [agente registrador](/links/web/domains-what-is-registrar) de un dominio representa la organización/proveedor autorizado con el que el dominio está registrado o suscrito por un particular, una asociación o una organización. Renueve la suscripción de su dominio (generalmente una vez al año) con este mismo agente registrador.
>
> Si OVHcloud ya es el agente registrador del dominio **antes** de iniciar el procedimiento que se indica a continuación, la transferencia entrante del dominio no es el procedimiento adecuado. El procedimiento de transferencia entrante del dominio se aplica **únicamente** a los dominios registrados en un agente registrador que no sea OVHcloud.
>
> Para transferir la gestión de su dominio a otra cuenta de cliente de OVHcloud, el método adecuado es un **cambio de contactos**. El procedimiento se describe en [esta guía](/pages/account_and_service_management/account_information/managing_contacts).
> Si también debe cambiar el **propietario** del dominio, deberá hacerlo **antes** de cambiar los contactos del dominio. Para ello, siga las instrucciones de la guía relativa al [cambio de propietario de los dominios](/pages/web_cloud/domains/trade_domain).
>

**Descubra cómo transferir un dominio Gandi a OVHcloud**

> [!warning]
>
> El servicio Gandimail está asociado a su dominio. Dejará de funcionar cuando el dominio se transfiera fuera de Gandi. 
>
> Las direcciones de correo asociadas a este dominio se eliminarán definitivamente 7 días después, **incluyendo todo lo que contienen**.
>
> Por lo tanto, es fundamental realizar una copia de seguridad de sus contenidos antes de iniciar la transferencia del dominio.
>

## Requisitos

- El dominio está registrado en el agente registrador Gandi.
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

### Etapa 1 - Desactivar el bloqueo de la transferencia

> [!warning]
>
> La mayoría de las extensiones ofrecen una función de bloqueo contra la transferencia, identificable por un estado especial en el [Whois](/links/web/domains-whois), denominado "transferProhibited".
>
> Este bloqueo evita la transferencia no deseada.
>
> Mientras el bloqueo esté activo, no será posible transferir el dominio.
>

Para desbloquear su dominio en Gandi, siga los pasos que se describen en la [documentación dedicada de Gandi](https://docs.gandi.net/en/domain_names/transfer_out/transfer_lock.html){.external}.

### Etapa 2 - Obtener el código de autorización

El código de autorización protege su nombre de dominio contra las transferencias no autorizadas realizadas por terceros. Este código es necesario para autorizar la transferencia del dominio a un nuevo agente registrador.

Para obtener el código de transferencia del dominio, siga los pasos que se describen en la [documentación dedicada de Gandi](https://docs.gandi.net/en/domain_names/transfer_out/auth_info.html){.external}.

### Etapa 3 - Iniciar la transferencia del dominio a OVHcloud
  
Una vez obtenido el código de autorización, puede proceder a la transferencia del dominio siguiendo las etapas de la guía "[Transferir un dominio a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

> [!warning]
>
> En las 24 horas siguientes al inicio de la transferencia, Gandi le enviará un email de notificación para informarle del lanzamiento del dominio.
> Este mensaje de correo electrónico también puede incluir un enlace que le permitirá aceptar la transferencia en lugar de Gandi, lo que reducirá el plazo de reserva.
> El período de reserva corresponde a un período de 5 días (8 días para los dominios gestionados por la AFNIC) que permite cancelar la transferencia.
> Transcurrido este plazo (5 días completos), la transferencia finalizará automáticamente.
>

## Más información <a name="go-further"></a>

[Migrar un sitio web y el correo a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).