---
title: "Activar las conexiones Okta SSO con su cuenta OVHcloud"
excerpt: "Esta guía explica cómo asociar el servicio Okta a su cuenta de OVHcloud a través de SAML 2.0"
updated: 2024-06-25
---

## Objetivo

Puede utilizar la autenticación SSO (*Single Sign-On*) para conectarse a su cuenta OVHcloud. Para activar estas conexiones, su cuenta y sus cuentas de Okta deben configurarse utilizando SAML (*Security Assertion Markup Language*).

**Esta guía explica cómo asociar una cuenta de OVHcloud a un servicio Okta externo.**

## Requisitos

- Ser administrador de un servicio Okta
- Disponer de una [cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Tienes acceso a tu [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)

## Procedimiento

> [!primary]
>
> Para que un proveedor de servicios (por ejemplo, su cuenta de OVHcloud) establezca una conexión SSO con un proveedor de identidad (por ejemplo, su servicio Okta), lo esencial es establecer una relación de confianza mutua registrando la conexión SSO en ambos servicios.
>

### Registrar OVHcloud en Okta

Su servicio Okta funciona como proveedor de identidad. Las solicitudes de autenticación de su cuenta de OVHcloud solo se aceptarán si lo ha declarado previamente como un organismo tercero de confianza.

Esto significa que se debe añadir como `Applications`.

Conéctese al panel de administración de Okta con su cuenta de administrador.

Acceda a `Applications`{.action} y seleccione de nuevo `Applications`{.action}.

![Añadir una aplicación SAML, etapa 1](images/OKTA_add_application_step1.png){.thumbnail}

Haga clic en `Create App Integration`{.action} y seleccione `SAML 2.0`{.action}.

![Añadir una aplicación SAML, paso 2](images/OKTA_add_application_step2.png){.thumbnail}

En el paso "General Settings", añada un nombre para esta aplicación, por ejemplo **OVHcloud**, y un logo si lo desea. Haga clic en `Next`{.action}.

![Añadir una aplicación SAML, etapa 3](images/OKTA_add_application_step3.png){.thumbnail}

En el paso Configure SAML, complete los campos `Single sign-on URL` y `Audience URI` con los valores de su región: 

- Región UE: **Single sign-on URL**: `https://www.ovhcloud.com/eu/auth/saml/acs` y **Audience URI**: `https://www.ovhcloud.com/eu/auth/`
- Región CA: **Single sign-on URL**: `https://www.ovhcloud.com/ca/auth/saml/acs` y **Audience URI**: `https://www.ovhcloud.com/ca/auth/`

![Añadir una aplicación SAML, etapa 4](images/OKTA_add_application_step4.png){.thumbnail}

Establezca a continuación los `Atribute Statements`:

- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` y **Value**: `user.login`
- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` y **Value**: `user.email`
- **Name**: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` y **Value**: `user.displayName`

Establezca los `Group Attribute Statements`:

- **Name**: `groups` y **Filter**: `Matches regex:.*` (Adapte el filtro si desea ser más preciso)

Haga clic en `Next`{.action}.

![Añadir una aplicación SAML, etapa 5](images/OKTA_add_application_step5.png){.thumbnail}

En el paso "Feedback", seleccione la opción en función y haga clic en `Finish`{.action}.

Abra la aplicación, acceda a la pestaña `Assignments`{.action} y asigne usuarios o grupos a la aplicación.

![Afectar a usuarios](images/OKTA_add_user.png){.thumbnail}

Antes de pasar a la siguiente sección, vaya a la pestaña `Sign On`{.action}, acceda a **Metadata URL** y guarde el archivo XML proporcionado.

![Obtener los metadatos](images/OKTA_retrieve_metadata.png){.thumbnail}

Su servicio Okta ya confía en OVHcloud como proveedor de servicios. El siguiente paso es comprobar que la cuenta de OVHcloud confíe en su Okta como proveedor de identidad.

### Guardar Okta en la cuenta de OVHcloud y configurar la conexión

Para añadir a Okta como proveedor de identidad de confianza, debe proporcionar los metadatos del proveedor de identidad desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

Haga clic en el nombre de su cuenta en la esquina superior derecha y, a continuación, vuelva a hacer clic en su nombre en la barra lateral.

![Acceso al menú IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Puede acceder al menú IAM desde la entrada dedicada del área de cliente.

![Acceso al menú IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

A continuación, haga clic en la pestaña `Identidades`{.action} para acceder a la gestión de los usuarios locales.

![Acceso al menú IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Haga clic en el botón `Conexión SSO`{.action}.

![Conexión SSO OVHcloud etapa 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Introduzca los metadatos XML de su servicio Okta. Rellene el campo "Nombre de atributo de usuario" con el valor `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` y el campo "Nombre de atributo de grupo" con el valor `Group`. Haga clic en `Confirmar`{.action}.

Es posible conservar los usuarios locales marcando la casilla `Mantener los usuarios de OVHcloud activos`.

![Conexión SSO OVHcloud etapa 2](images/ovhcloud_add_federation.png){.thumbnail}

Ahora debe encontrar su Okta como proveedor de identidad, así como los grupos predeterminados.

![Conexión SSO OVHcloud etapa 3](images/ovhcloud_add_federation_success.png){.thumbnail}

Para más información, haga clic en el enlace "URL del servicio SSO".

![Conexión SSO OVHcloud etapa 4](images/ovhcloud_idp_details.png){.thumbnail}

El botón `..`{.action} permite actualizar o eliminar el SSO y consultar los detalles.

![Conexión SSO OVHcloud etapa 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Su servicio Okta se considera ahora un proveedor de identidad de confianza. No obstante, debe añadir grupos a su cuenta de OVHcloud.

> [!warning]
> Si intenta conectarse por SSO, es probable que aparezca un mensaje de error `Not in valid groups`.
>
> Su cuenta de OVHcloud verifica si el usuario se autentifica pertenece a un grupo existente en la cuenta.
>

Ahora debe asignar **roles** a los grupos de usuarios Okta de OVHcloud. En caso contrario, su cuenta de OVHcloud no sabe lo que el usuario está autorizado a hacer y, por defecto, no tiene permisos.

En el área de cliente, haga clic en el botón `Declarar un grupo`{.action} y complete los campos.

- **Group name** : Nombre del grupo en Okta
- **Role**: Nivel de los derechos concedidos a este grupo

![Grupos de gestión de usuarios Okta](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupos de gestión de usuarios Okta](images/ovhcloud_user_management_groups_2.png){.thumbnail}

A continuación, compruebe que el grupo se añade a su cuenta de OVHcloud en la sección "Grupos":

![Grupos de gestión de usuarios Okta](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Cuando se conecte posteriormente con un usuario del grupo **Intern**, su cuenta de OVHcloud reconocerá que el usuario tiene el rol "UNPRIVILEGED" especificado por su grupo.

Atención: Si otorga el privilegio `Ninguno`, será necesario asignar permisos a este grupo a través de las [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

A continuación, podrá desconectarse de su cuenta y reconectarse con su Okta como proveedor de identidad.

### Conexión mediante SSO

En [la página de identificación de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), introduzca su [identificador](/pages/account_and_service_management/account_information/ovhcloud-account-creation#cual-es-mi-id-de-cliente) seguido de **/idp** sin contraseña y haga clic en el botón `Conexión`{.action}.

![Conexión a la federación OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

A continuación, será redirigido a su página de conexión a Okta. Introduzca el usuario y la contraseña de un usuario de su Okta y haga clic en el botón `Sign in`{.action} .

![OVHcloud Federation login Redirection Okta](images/OKTA_login.png){.thumbnail}

Ahora está conectado con el mismo ID de cliente, pero a través de su usuario Okta.

![OVHcloud User Info Federation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Más información

[Creación de una cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Proteger mi cuenta de OVHcloud y gestionar mis datos personales](/pages/account_and_service_management/account_information/all_about_username)

[Configuración y gestión de la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteger su cuenta de OVHcloud con la doble autenticación](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Cómo utilizar las políticas IAM desde el área de cliente](/pages/account_and_service_management/account_information/iam-policy-ui).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.