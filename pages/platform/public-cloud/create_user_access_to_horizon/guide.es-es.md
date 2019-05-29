---
title: 'Conectarse a Horizon'
excerpt: 'Cómo conectarse al panel de control Horizon'
slug: crear_un_acceso_a_horizon
section: Horizon
---

**Última actualización: 18/06/2018**

## Objetivo

Horizon es el panel de control de OpenStack. Algunas funciones de administración solo están disponibles desde esta interfaz gráfica.

**Esta guía explica cómo conectarse a Horizon.**


## Requisitos

- Haber creado un proyecto de Public Cloud.


## Procedimiento

### Crear un usuario de OpenStack

Para conectarse a Horizon, primero hay que crear un usuario de OpenStack. Para ello, en la sección `Cloud`{.action} del área de cliente, haga clic en `Servidores`{.action} en la columna izquierda y seleccione el proyecto. A continuación, haga clic en `OpenStack`{.action}, también en la columna izquierda.

![Añadir un usuario](images/1_H_add_user.png){.thumbnail}

Haga clic en el botón `Añadir un usuario`{.action} e introduzca una descripción del usuario. A continuación, se generará automáticamente el nombre de usuario y la contraseña. Una vez finalizada la operación, se mostrará un mensaje confirmando la creación de la cuenta.

En el área del cliente podrá ver la contraseña, pero solo hasta que la página se actualice. Si lo desea, puede conservarla para volver a usarla la próxima vez que se conecte, o también puede generar una nueva contraseña haciendo clic en el icono `Regenerar la contraseña`{.action}, situado junto a la contraseña actual.

![Menú proyecto](images/2_H_user_manage.png){.thumbnail}

### Conectarse a OpenStack Horizon

Para mostrar el menú, haga clic en el botón  `...`{.action}, situado al final de la línea, y seleccione `Abrir Openstack Horizon`{.action}. Se abrirá la página de conexión a [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}. Introduzca su nombre de usuario y su contraseña, y haga clic en el botón `Connect`{.action}.

![Menú proyecto](images/3_H_open_menu.png){.thumbnail}

![Pantalla de conexión](images/4_H_login_window.png){.thumbnail}

Una vez conectado, podrá ver el panel de control de OpenStack, Horizon.

![Panel de control Horizon](images/5_H_view.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.