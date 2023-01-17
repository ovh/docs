---
title: Gestionar un grupo de licencias Office 365 Reseller (CSP2) de OVHcloud
slug: contratar-y-gestionar-un-grupo-de-licencias-office-365-revendedor-csp2-ovh
excerpt: Cómo contratar y administrar un servicio Office 365 Reseller (CSP2) de OVHcloud
section: Office
order: 03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 17/01/2023**

## Objetivo

Office 365 Reseller (CSP2) es un servicio que permite disfrutar de diferentes tipos de licencias Microsoft 365 a precios preferentes para que pueda revenderlas a sus clientes.

**Esta guía explica cómo contratar y administrar un servicio Office 365 Reseller (CSP2) de OVHcloud.**

## Requisitos

- Estar conectado al [área de cliente de OVHcloud.](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- Tener un  [MPN ID](https://learn.microsoft.com/partner-center/mpn-create-a-partner-center-account) (Microsoft Partner Network IDentifier). 
- Estar inscrito en el programa CSP (Cloud Solution Provider) de Microsoft como revendedor indirecto en la región en la que ejerza su actividad (p. ej.: "UE" para Europa)

> [!warning]
>
> Desde el 01/07/2022, Microsoft desactivará todos los servicios Office 365 Reseller (CSP2) que no dispongan de un MN ID inscrito en el programa CSP revendedor indirecto.
>
> Ahora es obligatorio disponer de un MN ID para nuevas contrataciones.
>

Si todavía no tiene un ID MPN, puede crear uno (si cumple los requisitos de Microsoft) siguiendo la documentación oficial de Microsoft ["¿Qué es el Programa de Partner de Microsoft? "](https://docs.microsoft.com/partner-center/mpn-create-a-partner-center-account){.external}.

Para inscribirse como revendedor indirecto, consulte la documentación de Microsoft ["Suscribirse al programa proveedor de soluciones cloud"](https://docs.microsoft.com/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

El ID del MPN le permitirá obtener un descuento en las suscripciones que contrate desde el área de cliente de OVHcloud. Este descuento está sujeto a las reglas establecidas por Microsoft, en función del volumen de suscripciones que genere.

## Procedimiento

### Contratar un servicio Office 365 Reseller

Para contratar un servicio Office 365 Reseller, acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Una vez conectado, seleccione `Sunrise`{.action} en la barra superior y haga clic en `Office 365 Reseller`{.action}.

- *Opcional*: puede definir un **subdominio personalizado** al crear una nueva plataforma marcando la casilla prevista a tal efecto (siempre que se disponga de los nombres disponibles).
- Introduzca su ID MPN previamente creado en Microsoft.
- Complete la información de contacto del cliente final, que se solicita para definir el gestor del grupo de licencias (*Tenant*) que va a crear.
- Añada las licencias que quiera integrar a su grupo en la lista inferior.
- Haga clic en `Contratar`{.action} para finalizar.

> [!warning]
> Asegúrese de que la dirección de correo electrónico indicada al crear el grupo de licencias es correcta, ya que se utilizará para recibir las claves de acceso de la plataforma Microsoft.
>

![Office 365](images/csp2-01.png){.thumbnail}

> [!warning]
> En el caso de los productos con licencia, no es posible cambiar entre un *Tenant* Office 365 revendedor de un ID de cliente de OVHcloud a otro. Es necesario detener la suscripción a la cuenta de OVHcloud de origen y contratar el mismo tipo de licencia en la nueva cuenta de OVHcloud.
> 

![Office 365](images/csp2-01.png){.thumbnail}

### Gestionar el servicio Office 365 Reseller

Una vez que el servicio Office 365 haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

Para ello, acceda al apartado `Sunrise`{.action}. En el menú de la izquierda, seleccione `Office 365 Reseller`{.action} y seleccione el servicio.

Aparecerá la siguiente información:

- **Nombre interno del servicio**: indica el nombre del servicio. Solo es visible desde el área de cliente. También corresponde al *Tenant* (que contiene su grupo de licencias) de Microsoft.
- **Nombre mostrado del servicio**: permite personalizar el nombre de visualización del servicio en el área de cliente.
- **Creado el**: indica la fecha de creación del servicio.
- **Centro de administración de Microsoft**: enlace del portal Office que permite administrar las suscripciones.
- La gestión de la contraseña de administrador de su *Tenant* Microsoft se realiza directamente desde el panel de administración de Microsoft. Consulte [la documentación de Microsoft](https://support.microsoft.com/account-billing/reset-a-forgotten-microsoft-account-password-eff4f067-5042-c1a3-fe72-b04d60556c37).
- También puede gestionar dominios adicionales desde el panel de administración de Microsoft. Consulte [la documentación de Microsoft](https://support.microsoft.com/office/connect-your-domain-to-office-365-cd74b4fa-6d34-4669-9937-ed178ac84515).

![Office 365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Gestionar las suscripciones

La gestión de sus suscripciones le permite aumentar o cancelar las licencias asociadas a su grupo de suscripciones. Una tabla le permite visualizar los detalles:

- **ID**: cada tipo de licencia ha contratado un identificador único (ID).
- **Status** : es el estado de la licencia.
- **Nombre de la licencia**: indica el tipo de licencia contratada.
- **Número de licencias**: indica el número de licencias disponibles.
- **Fecha de creación**: indica la fecha de creación de la suscripción al tipo de licencia seleccionado.
- **Última actualización**: indica la fecha en la que se actualizó por última vez la suscripción (por ejemplo, añadir una licencia).

El icono <i class="icons-pen"></i> permite modificar el número total de licencias de la suscripción. El icono <i class="icons-bin"></i> permite dar de baja la suscripción y todas sus licencias.

> [!primary]
>
> Si contrata licencias académicas, deberá aceptar las condiciones particulares de uso establecidas por Microsoft. Puede consultar dichas condiciones en función de su idioma y región [aquí](https://www.microsoft.com/licensing/docs){.external}.
>

![Office 365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Administrar los usuarios

Una vez que disponga de un número suficiente de licencias, deberá administrar los usuarios que vayan a utilizarlas. Puede hacerlo directamente desde el [Centro de administración de Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Para conectarse, introduzca el usuario y la contraseña que habrá recibido por correo electrónico en el mensaje de confirmación de la instalación del grupo de licencias de OVHcloud. Esta información se envía a la dirección indicada al crear el grupo de licencias.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
