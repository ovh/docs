---
title: 'Gestionar el Object Storage con Cyberduck'
excerpt: 'Gestionar el Object Storage con Cyberduck'
slug: gestionar_el_object_storage_con_cyberduck
section: 'Object Storage'
legacy_guide_number: g1868
---

**Última actualización: 31/03/2021**

## Objetivo

El Object Storage es una solución de almacenamiento qui se gestiona principalmente mediante la API de OpenStack.

Es posible que usted no esté familiarizado con esta forma de gestionar un espacio de almacenamiento a través de líneas de comandos. Por ese motivo, existen soluciones gráficas que utilizan de manera invisible las API de OpenStack por usted.

Cyberduck es una de esas soluciones, y es fácil de configurar. En internet podrá encontrar otras interfaces disponibles cuya configuración se realiza de manera similar a la que vamos a mostrar.

Esta guía explica cómo configurar Cyberduck para gestionar el Object Storage desde una interfaz gráfica basada en las API de OpenStack.

## Requisitos

Para seguir todos los pasos de esta guía es necesario disponer de:

- un usuario de Horizon configurado ([cómo crear un acceso a Horizon](https://docs.ovh.com/us/es/public-cloud/crear-y-eliminar-un-usuario-de-openstack/){.ref};
- el identificador de su proyecto y su usuario, que puede obtener en el menú [«Acceso y seguridad»](https://docs.ovh.com/us/en/public-cloud/access_and_security_in_horizon/){.ref} de Horizon, descargando el archivo OpenRC.

## Procedimiento

Descargue [Cyberduck](https://cyberduck.io/) en su equipo.

Conéctese a una cuenta de tipo «Swift (OpenStack Object Storage)».

![objectstorage-cyberduck](images/Cyberduck.png){.thumbnail}

Cumplimente el formulario:

- Servidor: El servidor de autenticación auth.cloud.ovh.net
- Project:Domain:Username : OS_TENANT_NAME:default:OS_USERNAME
- Secret Key: La contraseña de su usuario de Horizon

Despligue las opciones haciendo clic en «More Options»:

- Carpeta: v3.0

Haga clic en el botón «Conectar».

![objectstorage-cyberduck](images/img_2756.jpg){.thumbnail}

## Más información

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
