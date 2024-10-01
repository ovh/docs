---
title: 'Crear y gestionar usuarios locales en una cuenta de OVHcloud'
excerpt: 'Cómo añadir usuarios locales desde su cuenta de OVHcloud'
updated: 2024-06-25
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

OVHcloud le ofrece la posibilidad de crear usuarios locales con permisos de lectura o escritura en su área de cliente. De este modo, podrá conceder acceso a sus servicios de OVHcloud a los miembros de su empresa. Y esto, sin tener que recurrir a prácticas poco seguras como compartir la contraseña o el código de doble autenticación.

> [!primary]
>
> La gestión de usuarios difiere de la gestión de contactos. Un usuario tendrá acceso a todas las secciones del área de cliente en función del nivel de derechos que se le conceda.
>
> La gestión de contactos tiene como fin delegar la administración completa de los aspectos administrativos, técnicos o de facturación de uno o varios servicios en su cuenta de OVHcloud. Para más información sobre la gestión de contactos, consulte [esta guía](/pages/account_and_service_management/account_information/managing_contacts).
>

**Esta guía explica los diferentes privilegios que puede tener un usuario local, así como el método para añadir y gestionar sus usuarios.**

## Requisitos

- Tener una cuenta de OVHcloud activa.
- Haber iniciado sesión en el área de cliente.

## Procedimiento

### Presentación de identidades

Los usuarios locales son uno de los tipos de identidad que pueden configurarse en su cuenta de OVHcloud. Los otros tipos de cuentas se describen en la [documentación asociada](/pages/manage_and_operate/iam/identities-management).

### Gestión de usuarios

#### Añadir un usuario

Haga clic en el nombre de su cuenta en la esquina superior derecha y, a continuación, vuelva a hacer clic en su nombre en la barra lateral.

![Acceso al menú IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Puede acceder al menú IAM desde la entrada dedicada del área de cliente.

![Acceso al menú IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

A continuación, haga clic en la pestaña `Identidades`{.action} para acceder a la gestión de los usuarios locales.

![Acceso al menú IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

A continuación, haga clic en `Añadir un usuario`{.action}.

Se abrirá una ventana, donde deberá completar los campos obligatorios. Haga clic en `Aceptar`{.action} para crear el usuario.

![users-management](images/usersmanagement2.png){.thumbnail}

| Campo | Detalles |
|--|--|
| Usuario | Introduzca, por ejemplo, el nombre de usuario o su función. |
| Correo electrónico | Introduzca la dirección de correo electrónico del usuario. |
| Contraseña | Especifique la contraseña del usuario. El usuario podrá cambiarla una vez creado su acceso. <br>Para establecer esta contraseña, también le recomendamos consultar [la guía sobre la gestión de contraseñas](/pages/account_and_service_management/account_information/manage-ovh-password){.external}. |
| Grupo | Seleccione uno de los grupos disponibles (ver la tabla a continuación). |
| Descripción | Puede añadir una descripción del usuario. Por ejemplo, su función en la empresa. |

**Detalles de grupos predeterminados:**

| Rol | Detalles |
|--|--|
| UNPRIVILEGED (Solo Lectura) | Proporciona acceso de lectura al área de cliente de OVHcloud y a todas sus secciones. |
| DEFAULT (Administrador restringido) | Concede acceso de escritura al área de cliente de OVHcloud y a todas sus secciones,**excepto para la gestión de los** usuarios. |
| ADMIN (Administrador) | Proporciona acceso de escritura al área de cliente de OVHcloud y a todas sus secciones, **incluyendo** la gestión de usuarios. |

A continuación, el usuario obtendrá su identificador conformado por el id. numérico de su cuenta (que se indica en el menú «Gestión de usuarios») y su nombre de usuario, con los dos valores separados por una barra (/).

Por ejemplo: **1234-567-89/johnsmith**.

![users-management](images/usersmanagement3.png){.thumbnail}

A partir de ese momento, el usuario creado podrá iniciar sesión en el [área de cliente de OVHcloud](/links/manager){.external} con este identificador. 

También podrá cambiar su contraseña y proteger el acceso a su cuenta activando la doble autenticación (esta última medida solo se aplicará a su acceso como usuario). A tal fin, puede consultar [la guía sobre la instrumentación de la doble autenticación](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa){.external}.

#### Gestionar los usuarios

Para modificar, desactivar/activar o eliminar un usuario, haga clic en `...`{.action} a la derecha de este.

![users-management](images/usersmanagement4.png){.thumbnail}

La modificación del usuario permite actualizar su dirección de correo electrónico, sus privilegios y su descripción.

![users-management](images/usersmanagement6.png){.thumbnail}

### Gestión de grupos

#### Añadir un grupo

En la pestaña `Identidades`{.action}, haga clic en `Declarar un grupo`{.action}.

![users-management](images/usersmanagement7.png){.thumbnail}

Se abrirá una ventana en la que deberá completar los campos necesarios. Haga clic en `Validar`{.action} para crear el grupo.

![users-management](images/usersmanagement8.png){.thumbnail}

Los grupos asignan un nivel de privilegio por defecto a los usuarios que contienen, en función del rol que elija:

| Rol | Detalles |
|--|--|
| Ninguno | No concede acceso al área de cliente de OVHcloud si no se ha establecido ninguna política de IAM. |
| Solo Lectura | Proporciona acceso de lectura al área de cliente de OVHcloud y a todas sus secciones. |
| Administrador restringido | Concede acceso de escritura al área de cliente de OVHcloud y a todas sus secciones,**excepto para la gestión de los** usuarios. |
| Administrador | Proporciona acceso de escritura al área de cliente de OVHcloud y a todas sus secciones, **incluyendo** la gestión de usuarios. |

#### Administrar grupos

Para actualizar o eliminar un grupo, haga clic en el botón `...`{.action} situado a la derecha del nombre del grupo.

![users-management](images/usersmanagement9.png){.thumbnail}

Al editar un grupo, puede editar su descripción y rol.

![users-management](images/usersmanagement10.png){.thumbnail}

### Gestión de los permisos

Además de la función asociada a los grupos de usuarios, puede afinar los privilegios de acceso mediante el IAM de OVHcloud.

Consulte nuestra guía sobre [la gestión de las políticas IAM de OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.