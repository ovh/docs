---
title: Cambiar los permisos de un usuario
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights'
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

El servicio Managed Bare Metal de OVHcloud permite gestionar los permisos de usuario que autorizan a realizar operaciones específicas.

**Esta guía explica cómo gestionar los permisos de usuario en su infraestructura.**

## Requisitos

* Tener contratado un servicio [Managed Bare Metal](https://www.ovhcloud.com/es-es/managed-bare-metal/){.external}.
* Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

Para gestionar los permisos de un usuario, acceda al menú **Servidores** y, en la sección **Managed Bare Metal**, seleccione la infraestructura en la que quiere modificar los permisos del usuario.

Acceda a la pestaña **Usuarios** y haga clic en los puntos que aparecen al final de la línea correspondiente al usuario.

![Ver y modificar los permisos por DC](images/user_rights_1.png){.thumbnail}

Desde este menú, podrá modificar los permisos de sus usuarios vSphere por datacenter:

![Modificar los permisos](images/user_rights_2.png){.thumbnail}

| Acceso  | Permiso | Descripción |
|---|---|---|
| Acceso vSphere | Ninguno / Solo lectura / Lectura y escritura | Permisos generales del usuario en vSphere |
| Acceso a vmNetwork | Ninguno / Solo lectura / Lectura y escritura | Permisos de gestión relativos a la parte de red pública (denominada «VM Network» en la interfaz vSphere) |
| Adición de recursos | Sí / No | Permisos para añadir recursos adicionales a través del plugin OVHcloud en vSphere Client (Host, Datastore, Veeam Backup) |

![Modificar los permisos](images/user_rights_3.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
