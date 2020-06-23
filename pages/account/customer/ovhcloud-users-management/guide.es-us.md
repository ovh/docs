---
title: 'Gestionar los usuarios'
slug: gestion-de-usuarios
excerpt: 'Cómo añadir usuarios desde su cuenta de OVHcloud'
section: 'Primeros pasos'
---

**Última actualización: 23/06/2020**

## Objetivo

OVHcloud le ofrece la posibilidad de crear usuarios con permisos de lectura o escritura en su área de cliente. De este modo, podrá conceder acceso a sus servicios de OVHcloud a los miembros de su empresa. Y esto, sin tener que recurrir a prácticas poco seguras como compartir la contraseña o el código de doble autenticación.

> [!primary]
>
> La gestión de usuarios difiere de la gestión de contactos. Un usuario tendrá por lo menos acceso de lectura a todas las secciones de su área de cliente.
>
> La gestión de contactos tiene como fin delegar la administración completa de los aspectos administrativos, técnicos o de facturación de uno o varios servicios en su cuenta de OVHcloud. Para más información sobre la gestión de contactos, consulte [esta guía](../gestion-de-los-contactos/).
>

**Esta guía explica los diferentes privilegios que puede tener un usuario, así como el método para añadir y gestionar sus usuarios.**

## Requisitos

- Tener una cuenta de OVHcloud activa.
- Haber iniciado sesión en el área de cliente.

## Procedimiento

### 1. Conocer los diferentes privilegios de los usuarios

Puede elegir entre tres niveles de privilegios para cada uno de sus usuarios.

| Privilegios | Detalles |
|----------------|----------------------------------------------------------------------------------------------------------------------|
| Ninguno | Concede acceso de lectura al área de cliente y todas sus secciones. |
| Usuario | Concede acceso de escritura al área de cliente y todas sus secciones, **a excepción de** la gestión de usuarios. |
| Administrador | Concede acceso de escritura al área de cliente y todas sus secciones, **incluida** la gestión de usuarios. |

#### Ejemplo de gestión de usuarios

El propietario de la cuenta xx11111-ovh crea dos usuarios:

- Jane tiene el privilegio **«Usuario»**, por lo que tiene acceso de escritura a todas las secciones de la cuenta, a excepción de la gestión de usuarios.
- Martin tiene el privilegio **«Ninguno»**, por lo que únicamente tiene acceso de lectura a todas las secciones de la cuenta.

El propietario de la cuenta xx11111-ovh tiene siempre el privilegio **«Administrador»**, por lo que tiene permisos de escritura en toda el área de cliente. También puede añadir usuarios nuevos y/o eliminar usuarios existentes.

![users-management](images/umv4.png){.thumbnail}

### 2. Añadir un usuario

Inicie sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, haga clic en `su nombre`{.action} (1) en la parte superior derecha y en sus iniciales (2).
A continuación, haga clic en la pestaña `«Gestión de usuarios»`{.action} (3) y, seguidamente, en `«Añadir un usuario»`{.action} (4).

![users-management](images/hubusers.png){.thumbnail}

Se abrirá una ventana, donde deberá completar los campos obligatorios. Haga clic en `«Aceptar»`{.action} para crear el usuario.

![users-management](images/usersmanagement2.png){.thumbnail}

| Campo | Detalles |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Usuario | Introduzca, por ejemplo, el nombre de usuario o su función. |
| Correo electrónico | Introduzca la dirección de correo electrónico del usuario. |
| Contraseña | Especifique la contraseña del usuario. El usuario podrá cambiarla una vez creado su acceso. <br>Para establecer esta contraseña, también le recomendamos consultar [la guía sobre la gestión de contraseñas](../gestionar-su-contraseña){.external}. |
| Privilegios | Seleccione entre Ninguno/Usuario/Administrador. |
| Descripción | Puede añadir una descripción del usuario. Por ejemplo, su función en la empresa. |

A continuación, el usuario obtendrá su identificador conformado por el id. numérico de su cuenta (que se indica en el menú «Gestión de usuarios») y su nombre de usuario, con los dos valores separados por una barra (/).

Por ejemplo: **1234-567-89/john.smith**.

![users-management](images/usersmanagement3.png){.thumbnail}

A partir de ese momento, el usuario creado podrá iniciar sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} con este identificador. 

También podrá cambiar su contraseña y proteger el acceso a su cuenta activando la doble autenticación (esta última medida solo se aplicará a su acceso como usuario). A tal fin, puede consultar [la guía sobre la instrumentación de la doble autenticación](../proteger-su-cuenta-con-una-2FA/){.external}.

### 3\. Gestionar los usuarios

Para modificar, desactivar/activar o eliminar un usuario, haga clic en `…`{.action} a la derecha de este.

![users-management](images/usersmanagement4.png){.thumbnail}

La modificación del usuario permite actualizar su dirección de correo electrónico, sus privilegios y su descripción.

![users-management](images/usersmanagement6.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
