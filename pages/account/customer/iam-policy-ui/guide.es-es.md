---
title: Cómo utilizar las políticas IAM desde el área de cliente
excerpt: Cómo conceder permisos de acceso específicos a los usuarios desde una cuenta de OVHcloud
updated: 2023-07-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

> [!warning]
>
> Esta funcionalidad está actualmente en versión beta. Para más información, consulte <https://labs.ovhcloud.com/en/>.
>

## Objetivo

Esta guía explica cómo proporcionar derechos de acceso específicos a los usuarios de una cuenta de OVHcloud.

La gestión de los accesos de OVHcloud se basa en un sistema de gestión de políticas. Es posible escribir diferentes políticas que den acceso a los usuarios a funcionalidades específicas en los productos asociados a una cuenta de OVHcloud.

En detalle, una política contiene:

- Una o varias **identidades** incluidas en esta política. 
    - Pueden ser identificadores de cuenta, de usuario o de grupo de usuarios (como los utilizados en [Federation](/pages/account/customer/ovhcloud-account-connect-saml-adfs) - hay disponibles otras guías SSO). 
- Uno o varios **recursos** afectados por esta política. 
    - Un recurso es un producto de OVHcloud al que afectará esta política (un dominio, un servidor Nutanix, un Load Balancer, etc.).
- Una o más **acciones** autorizadas o excluidas por esta política.
    - Las acciones son los derechos específicos afectados por esta política (reinicio de un servidor, creación de una cuenta de correo, baja de una suscripción, etc.)
 
Por ejemplo, podemos crear una política para dar a un usuario llamado John, para un VPS, acceso a la acción «reiniciar».

**Esta guía explica cómo declarar estas políticas desde el área de cliente de OVHcloud y cómo hacer un listado de las identidades, recursos y acciones disponibles para estas políticas.**

![políticas IAM](images/iam_policies.png){.thumbnail}

## Requisitos

- Tener una [cuenta de OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- Saber [gestionar los usuarios de la cuenta](/pages/account/customer/ovhcloud-users-management)
- Uno o varios productos de OVHcloud asociados a esta cuenta de OVHcloud (Load Balancer, dominio, VPS, etc.)

## En la práctica

### Acceder al menú IAM

Haga clic en el nombre de su cuenta en la esquina superior derecha y, a continuación, vuelva a hacer clic en su nombre en la barra lateral.

![Acceso al menú IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Puede acceder al menú IAM desde la entrada dedicada del área de cliente.

![Acceso al menú IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

El menú muestra una lista de todas las directivas actuales creadas en su cuenta.

![Acceso al menú IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Cada política se muestra con su nombre, el número de identidades asociadas y el número de acciones que contiene.

> [!primary]
>
> Haga clic en el botón «Modo avanzado» para ver la lista de todas las políticas de OVHcloud. Estas políticas son creadas automáticamente por OVHcloud para convertir la delegación preexistente de las `NIC Tech` (contacto técnico) y `NIC Admin` (contacto administrador) en la nueva funcionalidad IAM. 
>
> Los clientes no pueden modificar ni eliminar estas directivas.

### Gestión de políticas

#### Crear una política

Haga clic en el botón `Crear una política`{.action}.

Aparecerá el siguiente formulario:

![Crear una política](images/create_a_policy_01.png){.thumbnail}

- **Nombre de la política** (obligatorio): Nombre que aparecerá en las interfaces. El nombre debe ser único y no debe contener espacios.
- **Tipos de productos**: seleccione los tipos de producto para definir el ámbito de aplicación de la política. Se pueden incluir uno o varios tipos de producto en la misma política.
- **Recursos**: añada recursos o grupos de recursos para cubrir la política. Los recursos disponibles se filtran por tipo de producto previamente seleccionado.
- **Acciones**.

Hay tres maneras de agregar acciones:

- Activando la opción `Permitir todas las acciones`{.action}

![Crear una política](images/create_a_policy_02.png){.thumbnail}

Al activar esta opción, autoriza todas las acciones relacionadas con los productos seleccionados. Esto incluye todas las acciones existentes, así como las acciones que se añadan en el futuro para estas categorías de productos.

- Añadiendo manualmente acciones

Si conoce el nombre de la acción, puede agregarla manualmente.

![Crear una política](images/create_a_policy_03.png){.thumbnail}

Puede utilizar una *wildcard* al principio o al final del nombre de la acción con `*`.

Por ejemplo, la adición de `vps:apiovh:ips/*` concederá los siguientes permisos:

vps:apiovh:ips/edit <br>
vps:apiovh:ips/delete <br>
vps:apiovh:ips/get <br>

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

#### Modificar una política

Para modificar una política existente, haga clic en el botón `...`{.action} a la derecha de la política y luego en `Modificar la política`{.action}.

![Editar una política](images/editing_a_policy.png){.thumbnail}

A continuación, puede modificar el alcance de la política.

#### Eliminar una política

Para eliminar una política existente, haga clic en el botón `...`{.action} a la derecha de la política y luego en `Eliminar la política`{.action}.

Aparecerá una ventana emergente en la que deberá confirmar la eliminación.

### Asociar una identidad a una política

Para vincular una identidad a una política, haga clic en el botón `...`{.action} a la derecha de la política y luego en `Gestionar las identidades asociadas`{.action}.

![Editar una política](images/editing_a_policy.png){.thumbnail}

Esto le permitirá agregar y quitar los usuarios o grupos a los que se aplicará la directiva.

![Vincular identidad](images/link_identity_to_policy.png){.thumbnail}

### Gestión de identidades

Las identidades disponibles para las políticas se gestionan a través de la pestaña `Gestión de los usuarios`{.action}, en el menú `Mi cuenta`{.action}.

La pestaña `Identidades`{.action} del menú IAM le redirige a este menú.

Para más información sobre la gestión de usuarios, consulte la [documentación dedicada](/pages/account/customer/ovhcloud-users-management).

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

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
