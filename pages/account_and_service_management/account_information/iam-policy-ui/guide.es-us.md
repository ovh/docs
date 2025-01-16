---
title: Cómo utilizar las políticas IAM desde el área de cliente
excerpt: Cómo conceder permisos de acceso específicos a los usuarios desde una cuenta de OVHcloud
updated: 2025-01-08
---

## Objetivo

Esta guía explica cómo proporcionar derechos de acceso específicos a los usuarios de una cuenta de OVHcloud.

La gestión de los accesos de OVHcloud se basa en un sistema de gestión de políticas. Es posible escribir diferentes políticas que den acceso a los usuarios a funcionalidades específicas en los productos asociados a una cuenta de OVHcloud.

En detalle, una política contiene:

- Una o varias **identidades** incluidas en esta política. 
    - Pueden ser identificadores de cuenta, de usuario o de grupo de usuarios (como los utilizados en [Federation](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs) - hay disponibles otras guías SSO). 
- Uno o varios **recursos** afectados por esta política. 
    - Un recurso es un producto de OVHcloud al que afectará esta política (un dominio, un servidor Nutanix, un Load Balancer, etc.).
- Una o más **acciones** autorizadas o excluidas por esta política.
    - Las acciones son los derechos específicos afectados por esta política (reinicio de un servidor, creación de una cuenta de correo, baja de una suscripción, etc.)
 
Por ejemplo, podemos crear una política para dar a un usuario llamado John, para un VPS, acceso a la acción «reiniciar».

**Esta guía explica cómo declarar estas políticas desde el área de cliente de OVHcloud y cómo hacer un listado de las identidades, recursos y acciones disponibles para estas políticas.**

![políticas IAM](images/iam_policies.png){.thumbnail}

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/sxCgWYttAVk?si=wZSYwkr-8Xd01kzN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requisitos

- Tener una [cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Saber [gestionar los usuarios de la cuenta](/pages/account_and_service_management/account_information/ovhcloud-users-management)
- Uno o varios productos de OVHcloud asociados a esta cuenta de OVHcloud (Load Balancer, dominio, VPS, etc.)

## En la práctica

### Acceder al menú IAM

Haga clic en el nombre de su cuenta en la esquina superior derecha y, a continuación, vuelva a hacer clic en su nombre en la barra lateral.

![Acceso al menú IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Puede acceder al menú IAM desde la entrada dedicada del área de cliente.

![Acceso al menú IAM](/pages/assets/screens/control_panel/product-selection/right-column/initials/identity-and-access-management-iam.png){.thumbnail}

Si es la primera vez que accede a este menú, aparecerá la siguiente página:

![Acceso al menú IAM](/pages/assets/screens/control_panel/product-selection/right-column/identity-and-access-management-iam/tab-first-access.png){.thumbnail}

Haga clic directamente en [Crear una política](#create-policy) o en [Crear usuarios](#create-users), en función de la acción que desee realizar.

> [!primary]
>
> Haga clic en el botón "Modo avanzado" para ver la lista de todas las políticas de OVHcloud. Estas políticas son creadas automáticamente por OVHcloud para convertir la delegación preexistente de las `NIC Tech` (contacto técnico) y `NIC Admin` (contacto administrador) en la nueva funcionalidad IAM. 
>
> Los clientes no pueden modificar ni eliminar estas directivas.

Si ya ha creado políticas o usuarios, el menú mostrará la lista de todas las políticas en curso creadas en su cuenta de OVHcloud.

![Acceso al menú IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Cada política se muestra con su nombre, el número de identidades asociadas y el número de acciones que contiene.

### Gestión de políticas

<a name="create-policy"></a>

#### Crear una política

Haga clic en el botón `Crear una política`{.action}.

Aparecerá el siguiente formulario:

![Crear una política](images/create_a_policy_01.png){.thumbnail}

- **Nombre de la política** (obligatorio): Nombre que aparecerá en las interfaces. El nombre debe ser único y no debe contener espacios.
- **Identidades** : Seleccione las identidades a las que se refiere esta política. Es posible tener como destino más de un tipo de identidad.
- **Tipos de productos**: seleccione los tipos de producto para definir el ámbito de aplicación de la política. Se pueden incluir uno o varios tipos de producto en la misma política.
- **Recursos**: añada recursos o grupos de recursos para cubrir la política. Los recursos disponibles se filtran por tipo de producto previamente seleccionado.
- **Acciones**.

Hay tres maneras de agregar acciones:

- Activando la opción `Permitir todas las acciones`{.action}

![Crear una política](images/create_a_policy_02.png){.thumbnail}

Al activar esta opción, autoriza todas las acciones relacionadas con los productos seleccionados. Esto incluye todas las acciones existentes, así como las acciones que se añadan en el futuro para estas categorías de productos.

- Seleccionando un grupo de permisos administrados

OVHcloud pone a su disposición grupos de permisos preconfigurados y administrados.
Puede seleccionar uno o varios grupos seleccionándolos de la lista disponible.

![Crear una política](images/create_a_policy_05.png){.thumbnail}

Los detalles del contenido de los grupos de permisos administrados están disponibles en la [documentación asociada](/pages/account_and_service_management/account_information/iam-permission-groups).

Los grupos de acciones administradas se pueden utilizar como complemento de las acciones unitarias.

- Añadiendo manualmente acciones

Si conoce el nombre de la acción, puede agregarla manualmente.

![Crear una política](images/create_a_policy_03.png){.thumbnail}

Puede utilizar una *wildcard* al principio o al final del nombre de la acción con `*`.

Por ejemplo, la adición de `vps:apiovh:ips/*` concederá los siguientes permisos:

- **vps:apiovh:ips/edit**
- **vps:apiovh:ips/delete**
- **vps:apiovh:ips/get**

- Seleccionando acciones de la lista

Se pueden seleccionar acciones de la lista.

![Crear una política](images/create_a_policy_04.png){.thumbnail}

Las acciones disponibles dependen del tipo de recurso y pertenecen a una de las siguientes cinco categorías:

- **Read**: enumera los productos y muestra la información relativa a los mismos (*p. ej., enumera una IP VPS*).
- **Create**: acción que permite crear algo nuevo en un producto (*p. ej., crear un tíquet de soporte*).
- **Delete**: acción que permite eliminar algo de un producto (*p. ej., eliminar una instancia de Public Cloud*).
- **Edit**: acción para modificar un elemento existente en un producto (*p. ej., modificar la ruta TCP de un Load Balancer*).
- **Operate**: aplicar cambios en la infraestructura del producto (*p. ej., reiniciar un servidor dedicado*).

Hay un campo de búsqueda disponible para ayudarle a identificar una acción específica en la lista.

> [!primary]
> Las acciones relacionadas con los productos IP y vRack, así como las acciones relacionadas con el pedido y la facturación, aún no están disponibles en el IAM de OVHcloud.

#### Modificar una política

Para modificar una política existente, haga clic en el botón `...`{.action} a la derecha de la política y luego en `Modificar la política`{.action}.

![Editar una política](images/editing_a_policy.png){.thumbnail}

A continuación, puede modificar el alcance de la política.

#### Eliminar una política

Para eliminar una política existente, haga clic en el botón `...`{.action} a la derecha de la política y luego en `Eliminar la política`{.action}.

Aparecerá una ventana emergente en la que deberá confirmar la eliminación.

<a name="create-users"></a>

### Gestión de identidades

Las identidades disponibles para las políticas se gestionan a través de la pestaña `Identidades`{.action}.

Para más información sobre la gestión de usuarios, consulte la [documentación dedicada](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Gestión de grupos de recursos

Las políticas pueden dirigirse a grupos de recursos (en lugar de dirigirse directamente a los recursos). Estos grupos de recursos pueden montar recursos de diferentes productos, por ejemplo, para configurar un entorno de prueba.

#### Crear un grupo de recursos

Para crear un grupo de recursos, vaya a la ficha dedicada del menú IAM:

![Resource Group](images/resource_groups.png){.thumbnail}

Haga clic en `Crear grupo de recursos`{.action}.

![Resource Group](images/resource_groups_form.png){.thumbnail}

- **Nombre del grupo de recursos**: Nombre que aparecerá en las interfaces. El nombre debe ser único y no debe contener espacios.
- **Tipos de productos**: lista de tipos de producto que se incluyen en este grupo de recursos.
- **Recursos**: Lista de recursos que contendrá el grupo.

#### Editar un grupo de recursos

Para editar un grupo de recursos, haga clic en el nombre del grupo en la lista.

#### Eliminar un grupo de recursos

Para eliminar un grupo de recursos existente, haga clic en el botón `...`{.action} a la derecha del grupo y luego en `Eliminar grupo de recursos`{.action}.

Aparecerá una ventana emergente en la que deberá confirmar la eliminación.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).