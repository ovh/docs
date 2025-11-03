---
title: FAQ sobre la solución Zimbra OVHcloud
excerpt: "Encuentre las preguntas sobre la migración a Zimbra para la solución MX Plan de OVHcloud"
updated: 2025-11-04
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
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objetivo

Esta página responde a las preguntas relativas a la solución Zimbra de OVHcloud

### Preguntas generales sobre los productos Zimbra de OVHcloud

/// details | Zimbra, ¿qué es?

Zimbra es una popular solución colaborativa de código abierto. Zimbra ofrece numerosas funcionalidades en el catálogo de OVHcloud.

Para contextualizar la solución Zimbra en OVHcloud, esta se utiliza para 2 productos de correo.

- **MX Plan**: Zimbra se utiliza como parte de una transición tecnológica del webmail Outlook Web Access (OWA) al webmail de Zimbra para la histórica solución MX Plan.
- **Zimbra**: Zimbra aparece en el catálogo de OVHcloud como solución de pleno derecho con el producto [Zimbra Starter](/links/web/zimbra).

Para entender mejor, la siguiente imagen muestra las tecnologías que utiliza actualmente cada uno de los productos de OVHcloud. El webmail Outlook Web Access (OWA) va desapareciendo progresivamente de la solución MX Plan.

![FAQ Zimbra](images/technology_email.png){.thumbnail .w-600 .h-600}

> [!warning]
>
> Existen diferencias de funcionalidad entre la solución Zimbra utilizada en la solución MX Plan y la solución Zimbra utilizada en la solución Zimbra Starter. Para más información sobre las funcionalidades que se han mantenido durante la transición hacia la solución Zimbra para la solución MX Plan, consulte la [tabla al final de esta FAQ](#features)

///

/// details | ¿Dónde puedo encontrar guías?

Ya está disponible una guía del usuario de Zimbra en [esta dirección](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

///

/// details | ¿Cómo puedo configurar mi dirección de correo electrónico en un cliente de correo?

Consulte nuestra página "[Configurar una dirección de correo electrónico de Zimbra en un cliente de correo](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)".

///

/// details | ¿Cómo cambiar mi oferta Zimbra?

Sus necesidades cambian: desea beneficiarse de más funcionalidades en su cuenta Zimbra, o por el contrario, ya no las necesita. Las ofertas Zimbra son flexibles, siga las instrucciones que se detallan a continuación según su situación:

**¿Desea cambiar a una oferta superior?**

1. Inicie sesión en su [área de cliente de OVHcloud](/links/manager).
1. Vaya a la sección `Web Cloud`{.action}.
1. Haga clic en `Zimbra Mail`{.action}.
1. Haga clic en `Cuenta de correo`{.action}.
1. A la derecha de la cuenta de correo para la que desea cambiar a una oferta superior, haga clic en `⁝`{.action}.
1. Haga clic en `Cambiar de oferta`{.action}.

![Zimbra](images/zimbra-change-offer.png){.thumbnail .w-500}

**¿Desea cambiar a una oferta inferior?**

Los pasos son los mismos que para el cambio a una oferta superior (detallado anteriormente).

> [!warning]
>
> Antes de cambiar a una oferta inferior, asegúrese de los siguientes puntos:
>
> - No hay ningún archivo almacenado en su volumen de almacenamiento « Breifcase » si cambia a la oferta STARTER.
> - El contenido de su cuenta de correo debe ser inferior a 15 Go si cambia a la oferta STARTER.

///

### Preguntas sobre la migración MX Plan hacia la solución Zimbra

Como parte de la evolución de la solución MX Plan, se ha planificado una migración desde la solución actual que utiliza el webmail Outlook Web Access (OWA) hacia la solución Zimbra y su webmail.

Si esta migración le afecta, encontrará aquí las preguntas más frecuentes.

///

/// details | ¿En qué se diferencian los webmail Outlook Web App (OWA) y Zimbra?

Zimbra ofrece las mismas funcionalidades y una usabilidad cercana a OWA. Ya está disponible una guía del usuario de Zimbra en [esta dirección](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

///

/// details | ¿La migración abre nuevas funcionalidades?

La migración al nuevo webmail mantiene el mismo nivel de servicios que el anterior.

///

/// details | ¿Cuándo se realizará la migración de mis servicios?

Recibirá notificaciones por correo electrónico para cada servicio **2 semana** y **1 día** antes de la migración.

Los servicios se migrarán de forma progresiva, por lo que es posible que los distintos servicios se migren con varias semanas de diferencia.

///

/// details | ¿Cómo preparar mi migración a Zimbra?

La migración no requiere ninguna acción por su parte en relación con el contenido de las cuentas de correo.

Sin embargo, es necesario realizar una breve interrupción del servicio durante la migración. Por lo tanto, le recomendamos encarecidamente que informe a sus usuarios cuando llegue la fecha de migración de sus cuentas de correo.

///

/// details | ¿Es necesario realizar alguna manipulación en el marco de la migración a Zimbra?

Esta migración está pensada para minimizar el impacto sobre nuestros clientes. No se espera ninguna modificación por su parte.

No se espera ninguna modificación por su parte.

///

/// details | ¿Se prevén cambios en el área de cliente de OVHcloud?

No se prevén cambios en el área de cliente. Debido a que la migración se realiza en una nueva solución, es posible que algunas funcionalidades menores no estén disponibles en las primeras semanas posteriores a la migración.

Consulte la lista de funcionalidades y sus estados para esta migración [al final de esta FAQ](#features).

///

/// details | ¿Tendré que volver a configurar mi cliente de correo?

No, la migración no requiere reconfiguración en su cliente de correo .

En caso de cambiar la contraseña, es necesario introducir la nueva contraseña en su cliente de correo.

///

/// details | ¿La migración cambia la facturación de mi servicio?

No, la migración al nuevo webmail Zimbra está incluida en su solución. No hay cambios en la parte de facturación ni en el contrato del servicio MX Plan.

///

/// details | ¿Dónde se alojarán mis mensajes de correo tras la migración?

La migración se realiza en nuestros datacenters franceses. Sus datos permanecen en Francia.

///

/// details | ¿Habrá cambios en el tratamiento de mis datos?

No se prevén cambios en el tratamiento de los datos ni en su utilización. Puede consultar toda esta información en el contrato de su servicio MX Plan.

///

/// details | ¿Cómo permanecer en el webmail actual (OWA)?

Si lo desea, puede migrar en cualquier momento a un servicio que utilice el webmail OWA, es decir, Email Pro o Exchange. Para ello, consulte nuestra guía « [Migrar una dirección de correo MX Plan a una cuenta Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel) ».

///

/// details | ¿Puedo oponerme a la migración?

No, OVHcloud se compromete a ofrecer un servicio con la mejor relación calidad-precio para sus soluciones MX Plan. Por ese motivo, hemos optado por migrar las ofertas actuales a la solución Zimbra.

No obstante, podrá seguir disfrutando de la interfaz OWA [migrando sus cuentas de correo a una solución Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

///

/// details | ¿Puedo dar de baja mi servicio MX Plan?

Para dar de baja un servicio en la sección « Mis servicios » de su área de OVHcloud, consulte la sección MX Plan de nuestra guía « [Cómo dar de baja un servicio de OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services#mxplan) ».

///

/// details | Las funcionalidades mantenidas , suspendidas o retiradas durante la migración a Zimbra. <a name="features"></a>

| Función | Descripción | Estado |
|-|-|-|
|**Gestión de la cuenta de correo desde el área de cliente**<br>(Contraseña, alias, cuota)|Mantenida|✅|
|**Ofertas y facturación**|Mantenidas|✅|
|**Redirección / Alias / Lista de difusión desde el área de cliente**|Mantenidas|✅|
|**Configuración DNS**<br>(SPF/MX/SRV)|Mantenida|✅|
|**Delegaciones de cuentas de correo**|Mantenidas, a través del webmail|✅|
|**Conexión a los programas de correo electrónico**<br>(IMAP/POP)|Mantenida, no es necesario modificar la configuración.|✅|
|**Contenido de la cuenta de correo**<br>(correo, carpetas, contactos)|Migrado|✅|
|**Mensajes recibidos durante el proceso de migración**|Entregados|✅|
|**Respuesta automática / Contestador**|Mantenida|✅|
|**Regla de la bandeja de entrada**|- Las reglas configuradas desde su cliente de correo no se modificarán.<br>- Las reglas configuradas desde el webmail OWA serán migradas al webmail Zimbra. Sólo una proporción muy pequeña de reglas no podrá migrarse debido a incompatibilidades. Estas direcciones se enviarán en forma de mensaje de correo electrónico a la cuenta de correo del usuario y podrán volver a crearse manualmente.<br>- *Regla incompatible*: Regla que utiliza dos tipos de condiciones, como Y y O, al mismo tiempo. Por ejemplo, si el mensaje se recibe de (**john@mydomain.ovh** O **mary@mydomain.ovh**) Y el asunto contiene "factura", muévase a la carpeta "Importante"|⚠️|
|**Firma personal**|- Las firmas configuradas desde su cliente de correo no se modificarán.<br>- Las firmas configuradas desde el webmail OWA no se migrarán debido al formato.|⚠️|
|**Bloquear / Autorizar**|Esta funcionalidad, que permite bloquear los emails procedentes de un nombre de dominio o de una dirección de correo electrónico específicos, no estará presente en Zimbra. Sin embargo, este comportamiento se puede volver a crear fácilmente a través de una regla de la Bandeja de entrada de Zimbra.|❌|
|**Pie de página**<br>(firma de nombre de dominio que puede configurarse desde el área de cliente)|Esta funcionalidad no estará presente en la nueva infraestructura Zimbra. Sin embargo, todavía es posible configurar una firma en el nivel de la cuenta de correo.|❌|
|**Política de seguridad**|Esta funcionalidad del área de cliente que permite cambiar la política de gestión de las contraseñas no estará presente, en un primer momento, en la solución Zimbra.<br>La política de seguridad aplicada por defecto a las contraseñas requiere un mínimo de 10 caracteres alfanuméricos, 1 carácter especial, 1 mayúscula.|❌|
|**Spoofing**|La función Spoofing consiste en enviar un mensaje de correo electrónico desde una identidad distinta de la de la cuenta de correo en la que se ha autenticado. Esta práctica es incompatible con los protocolos de seguridad SPF y DKIM necesarios para la correcta entrega de los mensajes de correo.<br>Desde Zimbra, puede configurar una identidad diferente de la cuenta de correo utilizada, siempre que se haya delegado en ella.|❌|
|**Compatibilidad con Seguridad de la capa de transporte (TLS) 1.0 y 1.1.**|Se considera que las versiones 1.0 y 1.1 son vulnerables a los ataques y no cumplen con los estándares de seguridad actuales.<br>Si su navegador de Internet no admite **TLS 1.2** como mínimo**, le recomendamos que instale las últimas actualizaciones de seguridad y características.|❌|

///

## Más información

[MX Plan - Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).