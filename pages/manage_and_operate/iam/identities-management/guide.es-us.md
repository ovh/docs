---
title: "Presentación de las identidades que pueden interactuar en el seno de una cuenta de OVHcloud"
excerpt: "Descubra los distintos tipos de identidades que permiten interactuar con un producto de OVHcloud"
updated: 2024-10-21
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El objetivo de esta guía es presentar los distintos tipos de identidades que pueden gestionarse en la cuenta de OVHcloud.

## Requisitos

- Tener una [cuenta de cliente de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## Procedimiento

### Presentación de identidades

Existen varios tipos de identidades que pueden interactuar con los productos de OVHcloud:

![identities-types](images/identities_types.png){.thumbnail}

### Cuenta OVHcloud

Identidad principal utilizada para conectarse al área de cliente de OVHcloud. Utilice la cuenta de OVHcloud cuando inicie sesión con su dirección de correo electrónico en el área de cliente.

Esta identidad actúa como una cuenta root y no puede ver restringidos sus derechos, independientemente de las políticas de acceso aplicadas.

En la documentación puede hacer referencia a la cuenta de OVHcloud con el nombre de NIC o NIC-handle.

### Usuarios locales

Los usuarios locales son identidades asociadas a su cuenta de OVHcloud. Estas cuentas están diseñadas para las **interacciones humanas** con los productos de OVHcloud, ya que están basadas en una autenticación de tipo login/password, y cuyos permisos de acceso dependen de las [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui) aplicadas.

La configuración de los usuarios locales se detalla en la [documentación dedicada](/pages/account_and_service_management/account_information/ovhcloud-users-management).

También es posible utilizarlos para la conexión en las API de OVHcloud [generando un token asociado al usuario](/pages/manage_and_operate/api/first-steps). Los permisos de este token pueden restringirse a un perímetro específico como complemento de las políticas IAM.

Para que una aplicación basada en un token asociado a un usuario local pueda utilizar una API de OVHcloud, es necesario que el token lo integre en su perímetro **y** que el usuario que haya creado el token disponga de permisos sobre la API.

También se puede hacer referencia a los usuarios locales como *sub-user* en la documentación.

Por motivos de trazabilidad, le recomendamos que cree usuarios locales tan pronto como más de una persona deba conectarse a su cuenta de OVHcloud.

### Cuentas de servicio

Las cuentas de servicio son identidades asociadas a su cuenta de OVHcloud. Estas cuentas están diseñadas para **interactuar con las máquinas** con los productos de OVHcloud, ya que están basados en una autenticación de tipo cliente/token y cuyos permisos de acceso dependen de las [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui) aplicadas.

La creación de las cuentas de servicio se trata en la [documentación dedicada](/pages/manage_and_operate/api/manage-service-account).

A continuación, podrá utilizar una cuenta de servicio para la [conexión a las API de OVHcloud](/pages/account_and_service_management/account_information/authenticate-api-with-service-account), así como para las API de terceros expuestas por [OpenStack](/pages/manage_and_operate/iam/authenticate-api-openstack-with-service-account).

La conexión con cuentas de servicio todavía no es compatible con los SDK y el proveedor de Terraform.

### Usuarios federados

Son cuentas de usuario de una [federación de identidades](/products/manage-operate-user-federation). Estos usuarios proceden de un directorio de terceros y, por lo tanto, no son gestionados directamente por OVHcloud. Sus derechos de acceso dependen de las [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui) aplicadas.

Los usuarios federados están representados por grupos de usuarios en el nivel de administración de derechos.

Le recomendamos que cree una federación de identidades cuando el número de personas que se conectan a su cuenta de OVHcloud sea suficiente, o si desea centralizar los accesos en un directorio de terceros utilizado para servicios distintos de OVHcloud.

### Grupos de usuarios

Las distintas identidades pueden asociarse en grupos de usuarios para facilitar su manipulación.
La configuración de los grupos de usuarios se describe en la documentación de administración de [usuarios locales](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Usuarios de los productos OVHcloud

Algunos productos puestos a disposición por OVHcloud pueden ofrecer sus propios usuarios como complemento, como OpenStack, VMware vSphere u Object Storage.
Estos usuarios son independientes de la cuenta de OVHcloud y se gestionan directamente a través de los productos correspondientes.

Para los productos que permitan utilizar una identidad de OVHcloud (usuario local, cuenta de servicio, usuario federado) o un usuario específico del producto, le recomendamos que utilice dichos usuarios específicos si desea mantener la reversibilidad de su producto y limitar la dependencia de OVHcloud.
Si, por el contrario, quiere disponer de una gestión centralizada en todos sus productos, le recomendamos que utilice identidades de OVHcloud.

## Más información <a name="go-further"></a>

La gestión de identidades puede automatizarse a través de las [API OVHcloud](/pages/manage_and_operate/api/first-steps) o a través del [provider Terraform OVHcloud](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

Interactúe con [nuestra comunidad de usuarios](/links/community).
