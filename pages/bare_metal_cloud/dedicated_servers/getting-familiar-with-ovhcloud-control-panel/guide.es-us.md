---
title: "Clientes Kimsufi y So you Start: familiarizarse con el área de cliente de OVHcloud"
excerpt: Esta guía explica cómo navegar por el área de cliente de OVHcloud.
updated: 2024-04-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

OVHcloud anuncia la agrupación de todos los servidores dedicados Kimsufi, So you Start y Rise en una línea de productos llamada Eco, para ofrecerle una mejor visión de conjunto de nuestras configuraciones. Estos cambios le permitirán gestionar todos sus servicios, independientemente de su gama, desde el área de cliente de OVHcloud. Si ha optado por un servidor de la línea de productos Eco, hemos creado esta guía para ofrecerle información sobre el área de cliente de OVHcloud y sus opciones.

**Esta guía le ayudará a familiarizarse con el área de cliente de OVHcloud.**

> [!warning]
> Tenga en cuenta que, a pesar del cambio de interfaz de cliente, algunas opciones pueden no estar disponibles para servidores Kimsufi y So you Start.
>

## Procedimiento

### Panel de control

![Dashboard](images/OVHclouddashboard.png){.thumbnail}

Si ha adquirido un servidor de la línea de producto Eco, el panel de control será ahora el del área de cliente de OVHcloud. Este panel de control de OVHcloud contiene un resumen de todos sus servicios. Esta interfaz presenta varias secciones que le permiten acceder instantáneamente a un servicio.<br>
En la columna de la derecha podrá acceder a sus datos personales, su identificador de cliente y su nivel de soporte (en su caso).<br>
También ofrece una serie de atajos y enlaces útiles.

### Acceder al servidor

![list servers](images/listserversOVHcloud.png){.thumbnail}

En las interfaces Kimsufi y So you Start, el panel de control le permite ver su servidor/lista de servidores.<br>
En el área de cliente de OVHcloud, haga clic en el menú `Bare Metal Cloud`{.action} y seleccione `Servidores dedicados`{.action} para ver los servidores.<br>
Si tiene varios servidores, el botón `Todos mis servidores`{.action} le permite mostrarlos para un acceso fácil.

### Interfaz del servidor

![server interface](images/serverinterface01.png){.thumbnail}

![server interface](images/serverinterface02.png){.thumbnail}

**Información general**: en esta sección encontrará toda la información relativa al servidor.

- Nombre: haga clic en los `...`{.action} junto a esta opción para cambiar el nombre de su servidor.
- Boot: haga clic en los `...`{.action} junto a esta opción para cambiar el netboot de su servidor a *modo de rescate*, *modo normal* (en el disco duro) o *modo network*.
- Último sistema operativo (SO) instalado por OVHcloud: haga clic en los `...`{.action} al lado de esta opción para instalar o reinstalar su servidor.

**Estado de los servicios**

- Estado: haga clic en los `...`{.action} junto a esta esta opción para reiniciar o eliminar su servidor.
- Monitorización: haga clic en `Configurar`{.action} para cambiar la [configuración de supervisión de su servidor](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#monitoring-server).

**Red**

- IPV4: haga clic en los `...`{.action} junto a esta opción para gestionar su IP.
- Registro inverso: haga clic en los `...`{.action} al lado de esta sección para entrar o modificar su registro DNS inverso.

**DNS secundario**: configure su DNS secundario aquí. Para más información, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/adding-secondary-dns-on-dedicated-server).

**Backup Storage** (disponible únicamente en los servidores de OVHcloud y los servidores So you Start, incluidos los de la línea Eco): contrate y configure su backup storage aquí. Para más información, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

**Intervenciones**: consulte las intervenciones en curso y pasadas al servidor.

**IPMI** (solo disponible en los servidores de OVHcloud y en algunos servidores So you Start, incluidos los de la línea Eco): acceda aquí a la herramienta IPMI o al KVM IP de su servidor. Para más información sobre el uso de esta herramienta, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).

**Tareas**: vea aquí las tareas realizadas recientemente en su servidor.

Para más información sobre la gestión de su servidor dedicado desde el área de cliente de OVHcloud, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

### Sección IP

Para acceder a la sección **IP** del área de cliente de OVHcloud, haga clic en el menú `Bare Metal Cloud`{.action} y abra `Network`{.action}. A continuación, haga clic en `IP`{.action}.

![Sección ip](images/manageIP2023.png){.thumbnail}

### Pestaña Licencias (no disponible en Kimsufi)

Para acceder a la pestaña **Licencias** del área de cliente de OVHcloud, haga clic en el menú `Bare Metal Cloud`{.action} y seleccione `Licencias`{.action}.

![license](images/managelicencesOVHcloud.png){.thumbnail}

### Soporte, facturación y gestión de cuenta

En el área de cliente Kimsufi o So you Start, estas opciones están disponibles en la parte superior derecha, bajo las pestañas individuales.<br>
Estas opciones se agrupan en un área de cliente de OVHcloud. Haga clic en su nombre en la esquina superior derecha y seleccione sus iniciales para acceder a la sección `Gestionar mi cuenta`.

![factu](images/accountOVHcloud.png){.thumbnail}

- **Información general**: en esta sección puede consultar la información de su cuenta, su última factura y acceder a distintos accesos rápidos.
- **Seguridad**: desde esta sección podrá administrar los parámetros de seguridad de su cuenta. Para más información, consulte [esta guía](/pages/account_and_service_management/account_information/all_about_username).
- **Mensajes recibidos**: en esta sección encontrará todos los mensajes de correo que OVHcloud le ha enviado, excepto las solicitudes de asistencia.
- **Mi nivel de soporte** (solo disponible para los servicios de OVHcloud): para más información sobre el nivel de soporte de OVHcloud, consulte esta sección.
- **Gestión de los usuarios**: esta sección le permite gestionar sus usuarios. Para más información, consulte [esta guía](/pages/account_and_service_management/account_information/ovhcloud-users-management).
- **Mis facturas**: desde esta sección podrá consultar sus facturas, seguir los pagos realizados con su forma de pago por defecto y consultar sus activos. Más información sobre [esta guía](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management).
- **Mis servicios**: En esta sección podrá consultar todos sus servicios y contratos.
- **Formas de pago**: en esta sección, tiene acceso a su forma de pago actual, a su cuenta de prepago y a sus códigos promocionales de OVHcloud. También incluye la opción de añadir o eliminar una forma de pago. Para más información sobre la gestión de sus formas de pago, consulte [esta guía](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods).
- **Mis pedidos**: consulte sus pedidos desde esta página. Más información sobre [esta guía](/pages/account_and_service_management/managing_billing_payments_and_services/managing_ovh_orders).
- **Mis solicitudes de asistencia**: en esta sección podrá abrir/visualizar todas sus solicitudes de asistencia.

## Más información

A continuación le ofrecemos algunas guías adicionales que le ayudarán en sus primeros pasos:

[Conectarse al área de cliente de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login).<br>
[Establecer y gestionar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password).<br>
[Proteger mi cuenta de OVHcloud y gestionar mis datos personales](/pages/account_and_service_management/account_information/all_about_username).<br>
[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts).<br>
[Crear claves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).<br>
[¿Cuáles son las direcciones IP del monitoring de OVHcloud?](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.