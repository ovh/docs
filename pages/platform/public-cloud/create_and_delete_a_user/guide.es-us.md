---
title: "Creación y eliminación de usuarios OpenStack"
slug: crear-y-eliminar-un-usuario-de-openstack
section: OpenStack
excerpt: Cómo crear y eliminar un usuario OpenStack desde el área de cliente de OVHcloud
order: 9
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 17/03/2022**

## Objetivo

El acceso a Horizon y a las API de OpenStack se realiza a través de combinaciones de usuario y contraseña denominadas "*OpenStack users*". Puede crear tantos usuarios OpenStack como sea necesario y asignarles distintos permisos de acceso.

**Esta guía explica cómo gestionar los usuarios de OpenStack desde el área de cliente de OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Un proyecto de [Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

> [!primary]
>
> Si el proyecto de Public Cloud es el **primer proyecto** creado en su área de cliente, la creación de usuarios de OpenStack solo será posible después de 7 días contados desde la fecha de creación del proyecto.
>
> Puede solicitar la eliminación de esta medida de seguridad creando un tique de asistencia desde el área de cliente.
>

## Procedimiento

### Creación de un usuario de OpenStack

Conéctese al área de cliente de OVHcloud y abra su proyecto de `Public Cloud`{.action}. Haga clic en `Users & Roles`{.action} en el menú de la izquierda, en "Project management". 

Haga clic en el botón `Crear un usuario`{.action}.

![User roles](images/users_roles.png){.thumbnail}

La descripción del usuario no es el nombre de usuario de OpenStack, sino una descripción que deberá introducir para ayudarle a organizar los usuarios y sus permisos. Introduzca una descripción y haga clic en `Siguiente`{.action}.

![Add user](images/adduser.png){.thumbnail}

Ahora puede seleccionar roles que representen las autorizaciones que recibirá el usuario. Para cada casilla de verificación, el usuario obtendrá privilegios de acceso según la tabla de abajo.

![Permisos](images/permissions.png){.thumbnail}

Haga clic en `Confirmar`{.action} para crear el usuario OpenStack. El usuario y la contraseña se generan automáticamente y se muestran en el área de cliente.

![User_pw](images/user_pw.png){.thumbnail}

En este momento, guarde la contraseña en un gestor de contraseñas. La contraseña no podrá recuperarse más adelante. Sin embargo, es posible crear una nueva contraseña haciendo clic en `...`{.action} y seleccionando `Regenerar una contraseña`{.action}.

![Generate](images/generatepw.png){.thumbnail}

Una vez que haya creado el usuario de OpenStack, podrá utilizar sus claves de acceso a [la interfaz Horizon](https://docs.ovh.com/us/es/public-cloud/horizon/) haciendo clic en `Horizon`{.action} en el menú de la izquierda.

### Eliminación del usuario OpenStack

La eliminación del usuario de OpenStack se realiza desde el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Haga clic en `Users & Roles`{.action} en el menú de la izquierda, en "Project management". 

![public-cloud](images/delete.png){.thumbnail}

Haga clic en `...`{.action} y seleccione `Eliminar`{.action}.

> [!warning]
>
> La eliminación de un usuario es definitiva e invalidará todos los tokens asociados, incluidos aquellos cuya fecha de expiración aún no se haya superado.
> 

## Más información

[Presentación de Horizon](https://docs.ovh.com/us/es/public-cloud/horizon/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.