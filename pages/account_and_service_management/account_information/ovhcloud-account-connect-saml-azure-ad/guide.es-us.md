---
title: Activar las conexiones SSO de Entra ID con su cuenta OVHcloud
excerpt: "Esta guía explica cómo asociar su Entra ID (antes Azure Active Directory) a su cuenta de OVHcloud utilizando SAML 2.0"
updated: 2024-07-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Puede utilizar la autenticación **SSO** (*Single Sign-On*) para conectarse a su cuenta OVHcloud. Para activar estas conexiones, su cuenta y su Entra ID (antes Azure Active Directory) deben configurarse utilizando SAML (*Security Assertion Markup Language*).

**Esta guía explica cómo asociar una cuenta de OVHcloud a un Entra ID externo.**

## Requisitos

- Tener acceso a las funciones de **administrador de aplicaciones** y **administrador de usuarios** de un servicio Entra ID
- Disponer de una [cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)

## Procedimiento

> [!primary]
>
> Para que un proveedor de servicios (por ejemplo, su cuenta de OVHcloud) establezca una conexión SSO con un proveedor de identidad (por ejemplo, su Entra ID), debe establecer una relación de confianza mutua registrando la conexión SSO en ambos servicios.
>

### Usuarios y grupos Entra ID

Su Entra ID actúa como proveedor de identidad. Las solicitudes de autenticación de su cuenta de OVHcloud solo se aceptarán si primero la ha declarado como un tercero de confianza.

Concentrémonos un momento en las identidades del proveedor de identidad.

#### Usuarios Entra ID

En primer lugar, acceda al panel de control Entra ID.

![Cuadro de mando Entra ID](images/azure_ad_dashboard.png){.thumbnail}

En el menú de la izquierda, haga clic en `Users`{.action}.

![Usuario del menú Entra ID](images/azure_ad_menu_user.png){.thumbnail}

Cree tantos usuarios como desee y/o verifique a sus usuarios haciendo clic en él.

Para este ejemplo, se usará el usuario **John Smith**.

![Usuario Entra ID](images/azure_ad_user.png){.thumbnail}

Cuando se realiza la autenticación SSO, la identidad de **John Smith** la proporciona Entra ID a la cuenta de OVHcloud. Sin embargo, esta identidad debe contener al menos un grupo. Si no existe ningún grupo, a continuación se muestra cómo crear uno para agregar a **John Smith**.

#### Grupos Entra ID

En el menú de la izquierda, haga clic en `Groups`{.action}.

![Grupos de menús Entra ID](images/azure_ad_menu_groups.png){.thumbnail}

En el menú superior, haga clic en `New group`{.action} e introduzca toda la información necesaria.

Para este ejemplo, se utilizará el grupo **manager@ovhcloudsaml**.

![Entra ID Group etapa 1](images/azure_ad_group_1.png){.thumbnail}

Haga clic en el botón `Create`{.action} para ver toda la información sobre este grupo.

![Entra ID Group etapa 2](images/azure_ad_group_2.png){.thumbnail}

Ahora, los usuarios que se utilizarán para la autenticación SSO deben añadirse a un grupo.

En este ejemplo, asociemos al usuario **John Smith** con el grupo **manager@ovhcloudsaml**.

En la interfaz del grupo seleccionado, haga clic en `Members`{.action} en el menú de la izquierda y seleccione `Add members`{.action} en el menú superior.

![Entra ID Group User Assignment paso 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Seleccione el usuario que desea añadir a este grupo y haga clic en el botón `Select`{.action}.

![Entra ID Group User Assignment paso 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Ahora el usuario está asignado al grupo.

Para realizar autenticaciones SSO, debe crear una aplicación Entra ID.

La autenticación única debe configurarse en esta aplicación.

### Aplicaciones Entra ID

En primer lugar, cree una aplicación si todavía no existe.

#### Crear una aplicación Entra ID

En el menú de la izquierda, haga clic en `Enterprise applications`{.action}.

![Aplicaciones de menú Entra ID](images/azure_ad_menu_applications.png){.thumbnail}

Haga clic en `New application`{.action} en el menú superior.

![Aplicaciones Entra ID étape 1](images/azure_ad_applications_1.png){.thumbnail}

Haga clic en `Create your own application`{.action} en el menú superior.

![Aplicaciones Entra ID étape 2](images/azure_ad_applications_2.png){.thumbnail}

Seleccione `Non-gallery`{.action} en el menú de la izquierda y haga clic en el botón `Create`{.action}.

![Aplicaciones Entra ID étape 3](images/azure_ad_applications_3.png){.thumbnail}

Se mostrarán los detalles de la aplicación.

![Aplicaciones Entra ID étape 4](images/azure_ad_applications_4.png){.thumbnail}

Se ha creado la aplicación Entra ID. Los usuarios que deseen realizar autenticaciones SSO a través de esta aplicación deben añadirse.

#### Application Entra ID - Uso de usuarios

> [!primary]
>
> Para que un usuario realice la autenticación SSO a partir de una aplicación Entra ID, debe añadirse a esta aplicación. Cómo añadir un usuario a una aplicación Entra ID
>
> Sin embargo, si dispone de **Entra ID Premium**, es mejor añadir un grupo de usuarios que usuarios.
>

En el menú de la izquierda, haga clic en `Users and groups`{.action} y seleccione `Add user/group`{.action}.

A continuación, haga clic en la sección `Usuarios`{.action}, seleccione el usuario que desea añadir a la aplicación y haga clic en el botón `Select`{.action}.

![Entra ID User Asignación paso 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Entra ID Application User Assignage 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

La aplicación está creada, el usuario está asignado, solo tiene que implementar el SSO a través de SAML.

#### Entra ID application SSO

Vuelva a la vista de conjunto utilizando el botón `Overview`{.action} en el menú de la izquierda y haga clic en la sección `Set up single sign on`{.action}.

![Entra ID SSO paso 1](images/azure_ad_sso_1.png){.thumbnail}

Haga clic en la sección `SAML`{.action} .

![Entra ID SSO paso 2](images/azure_ad_sso_2.png){.thumbnail}

Haga clic en `Upload metadata file`{.action} en el menú superior.

![Entra ID SSO paso 3](images/azure_ad_sso_3.png){.thumbnail}

Haga clic en el icono del botón `Select a file`{.action}, seleccione el archivo de metadatos OVHcloud Service Provider y haga clic en el botón `Add`{.action}.

Puede obtener el archivo de metadatos adecuado a través de los siguientes enlaces:

- [Metadatos de la región de la UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadatos de la región CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Descargue el archivo de metadatos, que más tarde necesitará.

![Entra ID SSO paso 5](images/azure_ad_sso_5.png){.thumbnail}

Se mostrará la configuración SAML.

![Entra ID SSO paso 6](images/azure_ad_sso_6.png){.thumbnail}

En la sección `Attributes & Claims`{.action}, haga clic en el botón `Edit`{.action}.

![Entra ID SSO paso 9](images/azure_ad_sso_9.png){.thumbnail}

Añada el atributo UPN (User Principal Name) a la información de SAML para informar a OVHcloud del correo electrónico del usuario. Este paso es indispensable.

Haga clic en `Add a new claim`{.action} en el menú superior.

En el campo `Name`{.action}, introduzca el valor `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn`.

En el campo `Source attribute`{.action}, introduzca `user.mail`{.action}.

Su interfaz debería ser bastante similar a la siguiente captura de pantalla:

![Entra ID SSO entrada de UPN](images/azure_ad_sso_9bis.png){.thumbnail}

Haga clic en `Save`{.action}

Declare ahora el atributo utilizado para el grupo del usuario.

Haga clic en `Add a group claim`{.action} en el menú superior.

![Entra ID SSO etapa 10](images/azure_ad_sso_10.png){.thumbnail}

Seleccione `Security groups`{.action} y **Group ID** en `Source attribute`{.action} y haga clic en el botón `Save`{.action}.

![Entra ID SSO etapa 11](images/azure_ad_sso_11.png){.thumbnail}

La reivindicación de **groups** debe aparecer ahora en la lista.

Copie y guarde el valor del **Claim name** en algún lugar (por ejemplo, un bloc de notas), pero más adelante lo necesitará.

![Entra ID SSO etapa 12](images/azure_ad_sso_12.png){.thumbnail}

En la sección `SAML certificates`{.action}, copie el valor del campo `App Federation Metadata Url`{.action}.

Utilice este enlace para descargar el archivo de metadatos de la aplicación Entra ID para utilizarlo posteriormente en la cuenta de OVHcloud.

![Entra ID SSO paso 8](images/azure_ad_sso_8.png){.thumbnail}

### Crear la confianza de una cuenta de OVHcloud y configurar la conexión

La adición de su aplicación Entra ID como proveedor de identidad aprobado se realiza en [el área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), donde puede proporcionar los metadatos del proveedor de identidad.

#### Creación de confianza en OVHcloud

Haga clic en el nombre de su cuenta en la esquina superior derecha y, a continuación, vuelva a hacer clic en su nombre en la barra lateral.

![Acceso al menú IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Puede acceder al menú IAM desde la entrada dedicada del área de cliente.

![Acceso al menú IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

A continuación, haga clic en la pestaña `Identidades`{.action} para acceder a la gestión de los usuarios locales.

![Acceso al menú IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Haga clic en el botón `Conexión SSO`{.action}.

![OVHcloud connect SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Rellene el campo **Nombre de Atributo de Usuario** con el nombre de reclamación de la aplicación de identificación inicial **upn** y en el campo **Nombre de Atributo de Grupo** con el valor del nombre de reclamación de **groups** guardado antes.

Rellene los metadatos XML de su aplicación Entra ID desde el archivo guardado anteriormente.

Es posible conservar los usuarios locales marcando la casilla `Mantener los usuarios de OVHcloud activos`.

Haga clic en `Aceptar`{.action}.

![Ovhcloud SSO step 1](images/ovhcloud_sso_1.png){.thumbnail}

La adición de su aplicación Entra ID como proveedor de identidad ya está establecida, pero debe añadir grupos a su cuenta de OVHcloud.

> [!warning]
> Si intenta conectarse por SSO, es probable que aparezca un mensaje de error `Not in valid groups`.
>
> Su cuenta de OVHcloud verifica si el usuario autentificado pertenece a un grupo existente en la cuenta.
>

Para solucionar el problema, compruebe el atributo "Group" devuelto por la aplicación Entra ID: el campo **Object Id**.

#### Declaración de los grupos OVHcloud

![Entra ID Group etapa 2](images/azure_ad_group_2.png){.thumbnail}

Para añadirlo, haga clic en el botón `Declarar un grupo`{.action}.

![Grupos de gestión de usuarios de Ovhcloud etapa 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Complete los campos y haga clic en el botón `Aceptar`{.action}.

![Grupos de gestión de usuarios del paso 2 de Ovhcloud](images/ovhcloud_sso_menu_2.png){.thumbnail}

El grupo creado debe aparecer en la lista.

![Grupos de gestión de usuarios Ovhcloud etapa 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

Atención: Si otorga el privilegio `Ninguno`, será necesario asignar permisos a este grupo a través de las [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

### Conexión mediante SSO

En [la página de identificación de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), introduzca su [ID de cliente](/pages/account_and_service_management/account_information/ovhcloud-account-creation#cual-es-mi-id-de-cliente) seguido de **/idp** sin contraseña y haga clic en el botón `Login`{.action} .

![Ovhcloud SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

A continuación, será redirigido a la página de conexión a su aplicación Entra ID. Seleccione `Use another account`{.action}.

![Entra ID Login paso 1](images/azure_ad_login_1.png){.thumbnail}

Introduzca el mensaje de correo electrónico del usuario de la aplicación Entra ID y haga clic en el botón `Next`{.action}.

![Entra ID Login paso 2](images/azure_ad_login_2.png){.thumbnail}

Introduzca la contraseña del usuario de la aplicación Entra ID y haga clic en el botón `Sign In`{.action}.

![Entra ID Login paso 3](images/azure_ad_login_3.png){.thumbnail}

Ahora está conectado con el mismo ID de cliente, pero a través de su usuario de Entra ID.

![Ovhcloud SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}

Si su correo electrónico no aparece por debajo de `Connected via SSO`, significa que no ha configurado correctamente el atributo **UPN** y que una parte de las funcionalidades no funcionará.

## Más información

[Crear una cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Proteger mi cuenta de OVHcloud y gestionar mis datos personales](/pages/account_and_service_management/account_information/all_about_username)

[Definición y gestión de la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteger su cuenta de OVHcloud con la doble autenticación](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Cómo utilizar las políticas IAM desde el área de cliente](/pages/account_and_service_management/account_information/iam-policy-ui).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
