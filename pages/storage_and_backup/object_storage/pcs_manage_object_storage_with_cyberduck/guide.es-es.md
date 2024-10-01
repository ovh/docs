---
title: Object Storage Swift - Gestionar el Object Storage con Cyberduck
excerpt: 'Gestionar el Object Storage con Cyberduck'
updated: 2021-06-18
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

El Object Storage es una solución de almacenamiento qui se gestiona principalmente mediante la API de OpenStack.

Es posible que usted no esté familiarizado con esta forma de gestionar un espacio de almacenamiento a través de líneas de comandos. Por ese motivo, existen soluciones gráficas que utilizan de manera invisible las API de OpenStack por usted.

Cyberduck es una de esas soluciones, y es fácil de configurar. En internet podrá encontrar otras interfaces disponibles cuya configuración se realiza de manera similar a la que vamos a mostrar.

**Esta guía explica cómo configurar Cyberduck para gestionar el Object Storage desde una interfaz gráfica basada en las API de OpenStack.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Descargar e instalar [Cyberduck](https://cyberduck.io/).
- Disponer de las claves de usuario (*OS_USERNAME*) y del proyecto (*OS_PROJECT_NAME* o *OS_TENANT_NAME*), que puede obtener descargando el archivo OpenRC en el menú [Users and Roles](/pages/public_cloud/compute/loading_openstack_environment_variables#paso-1-obtener-las-variables) de su [área de cliente Public Cloud de OVHcloud](/links/manager).
- Disponer de su contraseña de usuario de OpenStack.

Si ya no conoce la contraseña de usuario de OpenStack, puede cambiarla siguiendo [esta guía](/pages/public_cloud/compute/change_openstack_user_password_in_horizon).

## Procedimiento

**Esta guía se ha actualizado sobre la base de la versión 7.9.2 de Cyberduck para MacOS.**

> [!primary]
>
> Según la fuente de descarga de su archivo OpenRC (desde Horizon o desde el área de cliente de OVHcloud), el identificador del proyecto puede llamarse *OS_PROJECT_NAME* o *OS_TENANT_NAME*.
>

En Cyberduck, abra una conexión "OpenStack Swift (Keystone 3)".

![pca-cyberduck](images/login.png){.thumbnail}

Introduzca la siguiente información:

- Servidor: auth.cloud.ovh.net
- Project:Dominio:Username: OS_PROJECT_NAME:default:OS_USERNAME
- Contraseña: la contraseña de su usuario OpenStack.

Haga clic en `Conectar`{.action}. Una vez que se haya conectado, podrá acceder al árbol de carpetas y archivos.

![pca-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> Si tiene problemas de conexión, puede descargar el perfil de conexión Cyberduck para OpenStack Swift (Keystone 3) y abrirlo con Cyberduck.
> <br><br>Haga clic derecho <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>aquí y haga clic en "Guardar el destino del enlace como"</a> para descargar el perfil.
>

## Más información

[Documentación de Cyberduck](https://trac.cyberduck.io/wiki/help/en){.external}

[Empezar con la API Swift](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es-es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
