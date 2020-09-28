---
title: 'Crear y eliminar un usuario de OpenStack'
slug: crear-y-eliminar-un-usuario-de-openstack
section: OpenStack
---

**Última actualización: 6/12/2019**

## Objetivo
Deberá crear un usuario de OpenStack para poder utilizar las APIs de Horizon o de OpenStack. Esta guía muestra cómo crear y eliminar un usuario.

El número de usuarios de OpenStack no está limitado.


## Requisitos
Un proyecto Public Cloud que tenga más de 7 días de antigüedad en el caso de que sea su primer proyecto. Alternativamente, puede ponerse en contacto con el equipo de asistencia para comprobar si puede desbloquear antes el proyecto. Otros proyectos no tendrán esta limitación.

## Procedimiento

### Crear un usuario de OpenStack
Para conectarse a Horizon, debe crear primeramente una cuenta de usuario de OpenStack. Para hacerlo, inicie sesión y, en el panel de control, acceda a la sección `«Public Cloud»`{.action} en la esquina superior izquierda de la página. Seguidamente, en la pantalla siguiente, haga clic en la `flecha`{.action} junto al nombre del proyecto en la esquina superior izquierda de la pantalla.

![Add user](images/select_project.png){.thumbnail}

A continuación de «Gestión de proyectos» en la barra lateral de la izquierda, seleccione `«Usuarios y funciones»`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Haga clic en el botón `«Crear usuario»`{.action} para generar el siguiente elemento emergente:

![Add user](images/adduser.png){.thumbnail}

La descripción del usuario no es el nombre de usuario del usuario. Solo es un término descriptivo para ayudarle a recordar el tipo de usuario. La siguiente pantalla le va a permitir conceder permisos de usuario. Por cada casilla de permisos que marque, el usuario obtendrá los privilegios correspondientes como se muestra en la tabla siguiente:

![Permissions](images/permissions.png){.thumbnail}

Haga clic en `«Confirmar»`{.action} cuando haya terminado y aparecerá la siguiente pantalla:

![User_pw](images/user_pw.png){.thumbnail}

Asegúrese de guardar su contraseña en ese momento, ya que será la única oportunidad para recuperarla. No obstante, si la pierde, siempre puede crear una nueva haciendo clic en los tres puntos (...) del siguiente menú y seleccionar `«Generar una contraseña»:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Una vez creado su usuario, puede utilizar estas credenciales de acceso para iniciar sesión en la interfaz de Horizon utilizando el botón` «Horizon»`{.action} en la barra lateral de la izquierda.

### Eliminar un usuario de OpenStack
Puede eliminar directamente un usuario de OpenStack en el panel de control de OVHcloud (Cloud → Servidores → Nombre de su proyecto Public Cloud). En la sección «OpenStack», encontrará un pequeño icono de papelera de reciclaje a la derecha:


![public-cloud](images/delete.png){.thumbnail}

Simplemente haga clic en él y el usuario será eliminado en unos segundos.

> [!alert]
>
> Cualquier eliminación de usuario es permanente e invalidará todos los tokens asociados, incluso los que aún no hayan sobrepasado su fecha de validez.
> 

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
