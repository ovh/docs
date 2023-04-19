---
title: Activar las conexiones SSO de Google Workspace con su cuenta OVHcloud
slug: connect-saml-sso-googleworkspace
excerpt: "Cómo asociar el servicio Google Workspace a su cuenta de OVHcloud a través de SAML 2.0"
section: Uso avanzado
order: 02
updated: 2023-03-30
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 30/03/2023**

## Objetivo

Puede utilizar la autenticación **SSO** (*Single Sign-On*) para conectarse a su cuenta OVHcloud. Para activar estas conexiones, es necesario configurar su cuenta de OVHcloud y sus cuentas de Google Workspace mediante la autenticación SAML (*Security Assertion Markup Language*).

**Esta guía explica cómo asociar una cuenta de OVHcloud a un servicio externo de Google Workspace.**

## Requisitos

- Ser administrador de un servicio Google Workspace
- Disponer de una [cuenta de OVHcloud](https://docs.ovh.com/us/es/customer/crear-cuenta-ovhcloud/)
- Haber iniciado sesión en el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

> [!primary]
>
> Para que un proveedor de servicios (es decir, su cuenta de OVHcloud) pueda establecer una conexión SSO con un proveedor de identidad (es decir, su servicio Google Workspace), lo esencial es establecer una relación de confianza mutua registrando la conexión SSO en ambos servicios.
>

### Registrar OVHcloud en Google Workspace

Su Google Workspace actúa como proveedor de identidad. Las solicitudes de autenticación de su cuenta de OVHcloud solo se aceptarán si primero lo ha declarado como un organismo tercero de confianza.

Esto significa que debe añadirse como `Web and mobile apps`.

Conéctese al panel de administración de [Google Workspace](https://admin.google.com) con su cuenta de administrador.

Acceda a `Apps`{.action} y seleccione `Web and mobile apps`{.action}.

![Añadir una aplicación web o móvil](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Haga clic en `Add app`{.action} y, seguidamente, en `Add custom SAML app`{.action}.

En el paso "App details", añada un nombre para esta conexión. Si no tiene inspiración, **OVHcloud** es un nombre adecuado. Haga clic en `Continue`{.action}.

![Añadir una aplicación SAML, etapa 1](images/google_workspace_web_mobile_add_saml_app_step1.png){.thumbnail}

En la pestaña "Google Identity Provider details", descargue el archivo de metadatos haciendo clic en `Download metadata`{.action} y luego en `Continue`{.action}.

![Añadir una aplicación SAML, paso 2](images/google_workspace_web_mobile_add_saml_app_step2.png){.thumbnail}

En el apartado "Service provider details", complete los campos `ACS URL` y `Entity ID` con los valores de su región: 

 - Región UE: **ACS URL**: `https://www.ovhcloud.com/eu/auth/saml/acs` y **Entity ID**: `https://www.ovhcloud.com/eu/auth/`
 - Región CA: **ACS URL**: `https://www.ovhcloud.com/ca/auth/saml/acs` y **Entity ID**: `https://www.ovhcloud.com/ca/auth/`

Haga clic en `Continue`{.action}.

![Añadir una aplicación SAML, etapa 3](images/google_workspace_web_mobile_add_saml_app_step3.png){.thumbnail}

En el paso "Atribute mapping", añada el siguiente mapping:

- **First Name**: Name
- **Last Name**: Surname
- **Primary email**: E-mail Address

Haga clic en `Finish`{.action}.

![Añadir una aplicación SAML, etapa 4](images/google_workspace_web_mobile_add_saml_app_step4.png){.thumbnail}

Active el acceso a esta aplicación haciendo clic en `OFF for everyone`{.action} en la sección "User Access". Haga clic en `ON for everyone`{.action} y, seguidamente, en el botón `SAVE.`{.action}

![Activar la aplicación para todos los usuarios](images/google_workspace_web_mobile_enable_app1.png){.thumbnail}

![Activar la aplicación para todos los usuarios](images/google_workspace_web_mobile_enable_app2.png){.thumbnail}

> [!primary]
>
> La adición de acceso de una aplicación a los usuarios puede tardar varias horas en aplicarse.
>

El servicio Google Workspace ya confía en OVHcloud como proveedor de servicios. El siguiente paso es comprobar que la cuenta de OVHcloud confíe en su Google Workspace como proveedor de identidad.

### Configurar la confianza de la cuenta de OVHcloud y configurar la conexión

El Google workspace se añadirá como proveedor de identidad de confianza al [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), donde podrá proporcionar los metadatos del proveedor de identidad.

[Conéctese](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y haga clic en su perfil en la parte superior derecha.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Haga clic en su nombre para acceder a la página de gestión de su perfil.

![Información de usuario de OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Abra la pestaña `Gestión de usuarios`{.action}.

![Perfil del menú OVHcloud](images/ovhcloud_profile_menu.png){.thumbnail}

Haga clic en el botón `Conexión SSO`{.action}.

![OVHcloud conexión SSO etapa 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Introduzca los metadatos XML del servicio Google Workspace. Rellene el campo "Nombre de atributo de grupo" con el valor `Group`. Haga clic en `Confirmar`{.action}.

![OVHcloud conexión SSO etapa 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Ahora debe encontrar su Google Workspace como proveedor de identidad, así como los grupos por defecto.

![OVHcloud conexión SSO etapa 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Para más información, haga clic en el enlace situado en "URL del servicio SSO".

![OVHcloud conexión SSO etapa 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

El botón `...`{.action} permite actualizar o eliminar el SSO y consultar los detalles.

![OVHcloud conexión SSO etapa 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Su Google Workspace se considera ahora proveedor de identidad de confianza. No obstante, debe añadir grupos a su cuenta de OVHcloud.

> [!warning]
> Si intenta conectarse por SSO, es probable que aparezca un mensaje de error `Not in valid groups`.
>
> Su cuenta de OVHcloud verifica si el usuario se autentifica pertenece a un grupo existente en la cuenta.
>

Para ello, debe autorizar los grupos que se transmitirán de Google Workspace a OVHcloud. Estos grupos son los mismos que se utilizan para categorizar a sus usuarios.

Para ello, conéctese al panel de administración de [Google Workspace](https://admin.google.com) con su cuenta de administrador

Acceda a `Apps`{.action} y seleccione `Web and mobile apps`{.action}.

![Gestionar las aplicaciones web y móviles](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Haga clic en la línea de la aplicación que haya añadido anteriormente.

![Lista de aplicaciones web y móviles](images/google_workspace_web_mobile_list_app.png){.thumbnail}

Haga clic en `SAML attribute mapping`{.action} para editar el mapping de la información compartida entre Google Workspace y OVHcloud.

![Detalle de la aplicación SAML](images/google_workspace_web_mobile_show_app.png){.thumbnail}

En la categoría "Group membership (optional)", añada todos los grupos que quiera autorizar para conectarse a OVHcloud. En el campo "App attribute", introduzca `Group`.

A continuación, asigne **funciones** a estos grupos de usuarios en OVHcloud. En caso contrario, su cuenta de OVHcloud no sabe lo que el usuario está autorizado a hacer y, por defecto, no tiene permisos.

![Configuración de los grupos de usuarios](images/google_workspace_web_mobile_setup_groups.png){.thumbnail}

En el área de cliente de OVHcloud, haga clic en el botón `Declarar un grupo`{.action} y rellene los siguientes campos:

 - **Nombre de grupo**: nombre del grupo en Google Workspace
 - **Privilegio**: nivel de derecho concedido a este grupo

![Grupos de control de usuarios de Google Workspace](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupos de control de usuarios de Google Workspace](images/ovhcloud_user_management_groups_2.png){.thumbnail}

A continuación, compruebe que el grupo se añade a su cuenta de OVHcloud en la sección "Grupos":

![Grupos de control de usuarios de Google Workspace](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Una vez que se conecte posteriormente con un usuario del grupo **interno**, su cuenta de OVHcloud reconocerá que el usuario tiene el rol "UNPRIVILEGED" especificado por su grupo.

A continuación, podrá desconectarse de su cuenta y reconectarse con su Google Workspace como proveedor de identidad.

### Conexión mediante SSO

En [la página de identificación de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), introduzca su [ID de cliente](https://docs.ovh.com/us/es/customer/crear-cuenta-ovhcloud/#cual-es-mi-id-de-cliente) seguido de **/idp** sin contraseña y haga clic en el botón `Login`{.action} .

![Conexión a la federación OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

A continuación, el sistema le redirigirá a su página de inicio de sesión de Google Workspace. Introduzca un usuario de Google Workspace y haga clic en el botón `Sign in`{.action} .

![OVHcloud Federation login Redirection Google Workspace](images/ovhcloud_federation_login_2.png){.thumbnail}

Ahora está conectado con el mismo ID de cliente, pero a través de su usuario de Google Workspace.

![Federación de la información de los usuarios de OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Más información

[Crear una cuenta de OVHcloud](https://docs.ovh.com/us/es/customer/crear-cuenta-ovhcloud/)

[Proteger mi cuenta de OVHcloud y gestionar mis datos personales](https://docs.ovh.com/us/es/customer/todo-sobre-el-id-de-cliente/)

[Definición y gestión de la contraseña de su cuenta](https://docs.ovh.com/us/es/customer/gestionar-su-contrasena/)

[Proteger su cuenta de OVHcloud con la doble autenticación](https://docs.ovh.com/us/es/customer/proteger-su-cuenta-con-una-2FA/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.