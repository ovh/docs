---
title: Cambiar la contraseña de usuario
routes:
    canonical: 'https://help.ovhcloud.com/csm/es-es-vmware-change-user-password?id=kb_article_view&sysparm_article=KB0045346'
excerpt: Cómo modificar la contraseña de usuario del cliente vSphere desde el área de cliente de OVHcloud
updated: 2020-11-18
---

**Última actualización: 18/11/2020**
 
## Objetivo

Es posible gestionar los permisos y contraseñas de los usuarios del cliente vSphere directamente desde el área de cliente de OVHcloud.

**Esta guía explica cómo modificar la contraseña de usuario del cliente vSphere.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Haber creado una cuenta de usuario desde el área de cliente de OVHcloud. Para más información, consulte [esta guía](/pages/bare_metal_cloud/managed_bare_metal/manager-ovhcloud#usuarios)

## Procedimiento

### Cambiar la contraseña

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, acceda al menú `Servidores`{.action} y, en la sección `Managed Bare Metal`{.action}, seleccione su servidor en la lista. A continuación, haga clic en la pestaña `Usuarios` (4).

![acceso área de cliente](images/userpassword1.png){.thumbnail}

Haga clic en el botón `(...)`{.action} situado al final de la línea correspondiente al usuario y seleccione `Cambiar la contraseña`{.action}.

![cambiar la contraseña](images/userpassword2.png){.thumbnail}

Introduzca la nueva contraseña y confírmela.

![cambiar la contraseña](images/userpassword3.png){.thumbnail}

> [!primary]
> Si no introduce ninguna contraseña, se generará una contraseña de forma aleatoria, que será enviada por correo electrónico a la dirección asociada al usuario.
> 


> [!warning]
>
>Para evitar poner en riesgo la seguridad de su infraestructura, le recomendamos que tenga en cuenta las siguientes buenas prácticas de seguridad:
>
> - la contraseña debe tener al menos 8 caracteres;
> - la contraseña debe incluir al menos tres tipos de caracteres diferentes;
> - la contraseña no debe ser una palabra que esté en el diccionario;
> - la contraseña no debe incluir datos personales;
> - no utilice la misma contraseña para varias cuentas;
> - guarde sus contraseñas en un gestor de contraseñas;
> - cambie su contraseña cada tres meses;
> - utilice una contraseña diferente a las anteriores.
>

## Más información

[Cambiar los permisos de un usuario](/pages/bare_metal_cloud/managed_bare_metal/change-user-rights)

[Establecer y gestionar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
