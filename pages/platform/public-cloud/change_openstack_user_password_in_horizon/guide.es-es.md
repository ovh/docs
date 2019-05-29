---
title: 'Cambiar la contraseña de un usuario de OpenStack en Horizon'
slug: cambiar-la-contrasena-de-usuario-openstack
excerpt: 'Cómo cambiar una contraseña de usuario en Horizon'
section: Horizon
---

**Última actualización: 13/06/2018**


## Objetivo

Una vez que haya creado un usuario OpenStack y haya generado una contraseña de acceso siguiendo la guía [Crear un acceso a Horizon](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/){.external}, puede cambiar dicha contraseña desde el panel Horizon. 

Atención: El cambio de contraseña de una cuenta de usuario inhabilita las claves de acceso activas hasta ese momento.

**Esta guía explica cómo cambiar la contraseña de un usuario desde Horizon.**


## Requisitos

- Haber creado una cuenta de usuario de OpenStack Horizon.


## Procedimiento

Una vez conectado a [OpenStack Horizon](https://horizon.cloud.ovh.net){.external}, es posible cambiar la contraseña de OpenStack.

![Conexión a Horizon](images/1_H_login_window.png){.thumbnail}

Haga clic en su nombre de usuario de Horizon, situado en la esquina superior derecha del panel, para desplegar un menú con las opciones disponibles,
y seleccione `Settings`{.action}. En la columna izquierda, haga clic en `Change Password`{.action}.

![Cambio de la contraseña](images/2_H_pass_change_option.png){.thumbnail}

Introduzca la contraseña actual en el primer campo y una nueva contraseña en los dos campos siguientes.

> [!primary]
>
> Es recomendable que la contraseña cumpla los siguientes criterios:
>
> - la contraseña debe tener al menos 8 caracteres;
> - la contraseña debe tener un máximo de 30 caracteres;
> - la contraseña debe contener al menos una letra mayúscula;
> - la contraseña debe contener al menos una letra minúscula;
> - la contraseña debe contener al menos un número;
> - la contraseña debe estar compuesta únicamente por números y letras.
>

A continuación, haga clic en el botón `Modificar`{.action} para confirmar el cambio de contraseña.

![Configuración de la contraseña](images/3_H_set_new_passord.png){.thumbnail}

Tenga en cuenta que, al cambiar la contraseña de una cuenta de usuario, se cancelan inmediatamente las claves anteriormente utilizadas.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.