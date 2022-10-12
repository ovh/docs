---
title: Interfaz segura
slug: interfaz-segura
excerpt: Cómo utilizar la interfaz segura en infraestructuras HDS o PCI-DSS
section: Servicios y opciones de OVHcloud
order: 04
---

**Última actualización: 12/10/2022**

## Objetivo

La interfaz segura puede utilizarse para confirmar operaciones sensibles (como cambiar la contraseña o añadir un usuario) realizadas por usuarios o por terceros en un servicio Private Cloud HDS o PCI-DSS.

**Esta guía explica el funcionamiento de la interfaz para validar estas operaciones.**

## Requisitos

- Tener una infraestructura con la opción de **seguridad avanzada** (incluida en las soluciones [PCI-DSS](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/safety-compliance/sddc/) y [HDS](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/safety-compliance/hds/)). Este permiso permite la validación.
- Tener acceso a la interfaz segura del Private Cloud, por ejemplo: https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ (no olvide la barra al final de la dirección).

## Procedimiento

Los usuarios que disponen del permiso «**token validator**» son los únicos que pueden confirmar las operaciones sensibles desde la interfaz segura. El administrador ya tiene este permiso (imprescindible para activar la opción **Seguridad avanzada**), 

Es posible asignárselo también a otros usuarios desde el área de cliente de OVHcloud. Para ello, consulte la guía [Presentación del área de cliente del Private Cloud de OVHcloud](../manager-ovh-private-cloud/#usuarios).

Desde la interfaz segura puede realizar tres operaciones. Consulte la sección correspondiente a cada tarea en esta guía:

- [Confirmar una operación con un token](./#confirmar-una-operacion-con-un-token)
- [Cambiar la contraseña del usuario](./#cambiar-la-contrasena-del-usuario)
- [Restaurar una contraseña](./#restaurar-una-contrasena)

### Confirmar una operación con un token

Cuando recibe un token por SMS, debe introducirse en la interfaz segura para confirmar la tarea en espera.

> [!warning]
>
> El token generado tiene una validez de 15 minutos. Si, transcurrido este tiempo, la tarea no ha sido confirmada, se eliminará.
>
> Se generará de nuevo (si se trata de un mantenimiento), o habrá que generarlo de nuevo (si lo necesita para realizar una operación concreta).
>

Veamos a continuación un ejemplo de SMS enviado:

![Primer SMS](images/SMS1.png){.thumbnail}

Este mensaje contiene:

- El usuario con permiso **token validator** que ha recibido el SMS. Esto le ayudará a gestionar los tokens que debe confirmar si ha introducido su número de teléfono en varias cuentas de usuario.
- El nombre de la operación que requiere confirmación
- El ID de la operación
- El token de confirmación
- Una URL que le permitirá confirmar la operación (atención: si su teléfono no está conectado a una red [cuya IP haya sido autorizada](../manager-ovh-private-cloud/#seguridad), la página no se cargará).

Para confirmar la operación, conéctese a la URL que se indica en el mensaje recibido. A continuación, acceda a la sección `Operation calidation`{.action}

![Confirmación de la operación](images/operationValidation.png){.thumbnail}

Se abrirá una ventana de conexión, en la que solo podrán confirmar la operación los usuarios con permiso **token validator**.

Cargue la operación introduciendo su ID en el campo «ID de la operación» y haciendo clic en `Cargar la operación`{.action}. Introduzca el token recibido por SMS y haga clic en el botón Confirm operation.

![Token de operación](images/operationIdAndToken.png){.thumbnail}

A continuación, los usuarios que dispongan del permiso **token validator** recibirán un SMS de confirmación de la operación Por ejemplo:

![Segundo SMS](images/SMS2.png){.thumbnail}

Como podrá comprobar, el mensaje contiene:

- El usuario con permiso **token validator** que ha recibido el SMS.
- El nombre y el ID de la operación;
- El usuario con permiso **token validator** que ha confirmado la tarea.

### Cambiar la contraseña del usuario

Cualquier usuario puede modificar su contraseña, incluso sin disponer del permiso **token validator**. En cualquier caso, debe conocer la contraseña actual para poder cambiarla.

> [!primary]
>
> Si el usuario ya no dispone de su contraseña, debe pedirle a otro usuario con permiso **token validator** que la modifique en su lugar, por medio de [password reset](./#restaurar-una-contrasena).
> 

Para cambiar la contraseña de un usuario, conéctese a la interfaz segura (por ejemplo, `https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) y haga clic en `Cambiar la contraseña`{.action}.

![Cambiar la contraseña](images/changePassword.png){.thumbnail}

A continuación, seleccione el usuario y establezca una nueva contraseña.

Los usuarios con permiso [token validator](./#confirmar-una-operacion-con-un-token) recibirán un token para poder **confirmar la operación**.

![Establecer la contraseña](images/defineNewPassword.png){.thumbnail}

### Restaurar una contraseña

Esta operación solo está disponible para los usuarios que dispongan del permiso **token validator**. Un usuario que no disponga de esta autorización recibirá un error 400.

> [!primary]
>
> Si un usuario que no tiene permiso **token validator** pierde su contraseña, deberá pedir a un usuario que sí tenga este permiso que se la restaure.
> 

Para restaurar una contraseña, conéctese a la interfaz segura (`https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) y haga clic en el botón `Password lost`{.action}.

![Contraseña perdida](images/passwordLost.png){.thumbnail}

Un mensaje le indicará que, para continuar, debe poder recibir SMS. Si ese es su caso, introduzca la información solicitada (incluyendo el usuario cuya contraseña vaya a restaurar) y haga clic en `Next step`{.action}.

![Datos del usuario](images/infoUser.png){.thumbnail}

Introduzca los dos tokens recibidos por SMS y por correo electrónico, y establezca la nueva contraseña.

> [!primary]
>
> Si ha realizado el procedimiento de restauración para otro usuario, deberá comunicarle la nueva contraseña. Es altamente recomendable que el usuario que reciba dicha contraseña [vuelva a cambiarla](./#cambiar-la-contrasena-del-usuario) lo antes posible.
> 

![Token y contraseña](images/tokenAndPassword.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
