---
title: Gestionar un grupo de licencias Office 365 Reseller (CSP2) de OVHcloud
slug: contratar-y-gestionar-un-grupo-de-licencias-office-365-revendedor-csp2-ovh
excerpt: Cómo contratar y administrar un servicio Office 365 Reseller (CSP2) de OVHcloud
section: Office
order: 3
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 17/06/2022**

## Objetivo

Office 365 Reseller (CSP2) es un servicio que permite disfrutar de diferentes tipos de licencias Microsoft 365 a precios preferentes para que pueda revenderlas a sus clientes.

**Esta guía explica cómo contratar y administrar un servicio Office 365 Reseller (CSP2) de OVHcloud.**

## Requisitos

- Estar conectado al [área de cliente de OVHcloud.](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- Disponer de un MPN ID (Microsoft Partner Network IDentifico)
- Estar inscrito en el programa CSP (Cloud Solution Provider) de Microsoft como revendedor indirecto en la región en la que ejerza su actividad (por ejemplo: "UE" para Europa)

> [!warning]
>
> A partir del 01/07/2022, Microsoft desactivará todos los servicios Office 365 Reseller (CSP2) que no dispongan de un MPN ID inscrito en el programa "CSP revendedor indirecto".
>
> Disponer de un MPN ID es ahora obligatorio para toda nueva suscripción.
>
Si todavía no tiene un MPN ID, puede crear uno (si cumple los requisitos de Microsoft) siguiendo la [documentación oficial de Microsoft](https://docs.microsoft.com/es-es/partner-center/mpn-create-a-partner-center-account){.external}.

Para inscribirse como revendedor indirecto, consulte esta otra [documentación oficial de Microsoft](https://docs.microsoft.com/es-es/partner-center/enrolling-in-the-csp-program#enroll-as-an-indirect-reseller){.external}.

> [!success]
>
> El MPN ID le permitirá obtener un descuento en las suscripciones que contrate desde el área de cliente de OVHcloud. Este descuento está sujeto a las reglas establecidas por Microsoft, en función del volumen de suscripciones que genere.
>

## Procedimiento

### Contratar un servicio Office 365 Reseller

Para contratar un servicio Office 365 Reseller, acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Una vez conectado, seleccione `Sunrise`{.action} en la barra superior y haga clic en `Office 365 Reseller`{.action}.

- Introduzca su ID MPN previamente creado en Microsoft.
- Complete la información de contacto del cliente final, que se solicita para definir el gestor del grupo de licencias (Tenant) que va a crear.

> [!primary]
>
> Si desea crear una nueva plataforma, puede elegir un **subdominio personalizado* marcando la pequeña casilla (con los nombres disponibles).
>

- En la lista inferior, indique las licencias que quiere añadir a su grupo.
- Haga clic en `Contratar`{.action} para finalizar el pedido.

> [!warning]
>
> Asegúrese de que la dirección de correo electrónico indicada al crear el grupo de licencias es válida, ya que esta recibirá las claves de acceso a la plataforma Microsoft.
>

![Office 365](images/csp2-01.png){.thumbnail}

#### Caso particular de las delegaciones

Si ya tiene un servicio Office 365 CSP2 con Microsoft, puede delegar su administración en OVHcloud. De este modo, podrá añadir suscripciones adicionales directamente desde el área de cliente de OVHcloud. Al contratar un nuevo grupo de licencias, deberá elegir la opción `Delegación de una plataforma previamente creada en Microsoft` y especificar con precisión el **Tenant Office 365 existente** que podrá encontrar en su portal Microsoft, así como su MPN ID.

- Si ya tiene que pasar por OVHcloud para su Office 365 revendedores, también podrá delegar la administración en OVHcloud, pero deberá cortar previamente la conexión con su anterior proveedor.

- Será necesaria una doble validación para finalizar la aparición del tenant en el área de cliente de OVHcloud.

- Una vez que se hayan contratado las licencias del tenant, estas estarán disponibles en su [portal de administración de Microsoft](https://portal.office.com/Admin/Default.aspx){.external}. A continuación, deberá sustituir sus antiguas licencias en su [portal de administración de Microsoft](https://portal.office.com/Admin/Default.aspx){.external} por las licencias de OVHcloud y dar de baja sus antiguas licencias para no seguir pagando por duplicado.

- No se preocupe, si tiene licencias no disponibles para su compra en OVHcloud, puede conservar estas licencias activas en Microsoft.

> [!warning]
Dado que se trata de productos con licencia, no es posible cambiar un tenant Office 365 revendedores de un identificador de cliente de OVHcloud a otro.
>

### Gestionar el servicio Office 365 Reseller

Una vez que el servicio Office 365 haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

Para ello, acceda al apartado `Sunrise`{.action}. En el menú de la izquierda, seleccione `Office 365 Reseller`{.action} y seleccione el servicio.

Aparecerá la siguiente información:

- **Nombre interno del servicio**: indica el nombre del servicio. Solo es visible desde el área de cliente. También corresponde al *Tenant* (que contiene su grupo de licencias) de Microsoft.
- **Nombre mostrado del servicio**: permite personalizar el nombre de visualización del servicio en el área de cliente.
- **Creado el**: indica la fecha de creación del servicio.
- **Centro de administración de Microsoft**: enlace del portal Office que permite administrar las suscripciones.
- **Restaurar la contraseña de administrador**: permite cambiar la contraseña de conexión al Centro de administración de Microsoft.

![Office 365](images/sunrise_office365_CSP2_services_details.png){.thumbnail}

### Configurar automáticamente un dominio alojado en OVHcloud

OVHcloud pone a su disposición una herramienta que facilita la configuración de la zona DNS de su dominio. Puede configurar automáticamente los dominios que utilicen la zona DNS de OVHcloud para que funcionen con las siguientes soluciones:

- Exchange Online;
- Skype;
- Intune

Para ello, elija el dominio en la lista desplegable y, a continuación, seleccione las soluciones que quiera configurar. OVHcloud se encargará de crear los registros DNS correspondientes en la zona DNS del dominio en OVHcloud.

> [!warning]
> Para que la configuración funcione, debe asegurarse de que utiliza correctamente los servidores DNS de OVHcloud para los dominios correspondientes. No dude en consultar nuestra guía [Cambiar los servidores DNS de un dominio de OVHcloud](https://docs.ovh.com/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/).
>

![Office 365](images/sunrise_office365_CSP2_automatic_domain_configuration.png){.thumbnail}

### Gestionar las suscripciones

La gestión de sus suscripciones le permite aumentar o cancelar las licencias asociadas a su grupo de suscripciones. Una tabla le permite visualizar los detalles:

- **ID**: cada tipo de licencia ha contratado un identificador único (ID).
- **Status** : es el estado de la licencia.
- **Nombre de la licencia**: indica el tipo de licencia contratada.
- **Número de licencias**: indica el número de licencias disponibles.
- **Fecha de creación**: indica la fecha de creación de la suscripción al tipo de licencia seleccionado.
- **Última actualización**: indica la fecha en la que se actualizó por última vez la suscripción (por ejemplo, añadir una licencia).

`El icono con forma de lápiz` permite modificar el número total de licencias de la suscripción. `El icono con forma de papelera` permite dar de baja la suscripción y todas sus licencias.

> [!primary]
>
> Si contrata licencias académicas, deberá aceptar las condiciones particulares de uso establecidas por Microsoft. Puede consultar dichas condiciones en función de su idioma y región [aquí](http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=2&Keyword=AcademicQualEdUserDef){.external}.
>

![Office 365](images/sunrise_office365_CSP2_Subscribers.png){.thumbnail}

### Administrar los usuarios

Una vez que disponga de un número suficiente de licencias, deberá administrar los usuarios que vayan a utilizarlas. Puede hacerlo directamente desde el [Centro de administración de Microsoft](https://portal.office.com/Admin/Default.aspx){.external}.

Para conectarse, introduzca el usuario y la contraseña que habrá recibido por correo electrónico en el mensaje de confirmación de la instalación del grupo de licencias de OVHcloud. Esta información se envía a la dirección indicada al crear el grupo de licencias.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
