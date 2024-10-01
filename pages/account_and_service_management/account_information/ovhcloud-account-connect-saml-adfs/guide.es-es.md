---
title: Activar las conexiones Active Directory Federation Services (AD FS) SSO con su cuenta OVHcloud
excerpt: "Cómo asociar el servicio Active Directory Federation Services (AD FS) a su cuenta de OVHcloud a través de SAML 2.0"
updated: 2024-06-25
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Puede utilizar la autenticación SSO (*Single Sign-On*) **única** para conectarse a su cuenta de OVHcloud. Para activar estas conexiones, su cuenta y sus servicios AD FS (*Active Directory Federation Services*) deben configurarse mediante autenticación SAML (*Security Assertion Markup Language*).

**Esta guía explica cómo asociar una cuenta de OVHcloud a un Active Directory externo.**

## Requisitos

- Los servicios AD FS (Active Directory Federation Services) deben ejecutarse en su servidor
- Disponer de una [cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

> [!primary]
>
> Para que un proveedor de servicios (es decir, su cuenta de OVHcloud) pueda establecer una conexión SSO con un proveedor de identidad (es decir, su servicio AD FS), lo esencial es establecer una relación de confianza mutua.
>

### Creación de confianza AD FS

Su AD FS actúa como proveedor de identidad. Las solicitudes de autenticación de su cuenta de OVHcloud solo se aceptarán si primero lo ha declarado como un organismo tercero de confianza.

En el contexto Active Directory, significa que debe añadirse como `Relying Party Trust`.

En el Gestor de servidores, abra el menú `Tools`{.action} y seleccione `AD FS Management`{.action}.

![Menú Herramientas Windows Server](images/windows_server_tools_menu.png){.thumbnail}

Haga clic en `Relying Party Trusts`{.action}.

![AD FS Menu](images/adfs_menu.png){.thumbnail}

Haga clic en `Add Relying Party Trust...`{.action}.

![Menú de aprobación AD FS](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Seleccione `Claims aware`{.action} y acepte con el botón `Start`{.action}.

![AD FS añadir aprobación - etapa 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Puede introducir manualmente la información sobre el organismo tercero de confianza o importarla desde un archivo de metadatos.

#### Importar los metadatos de OVHcloud SP

Puede obtener el archivo de metadatos adecuado a través de los siguientes enlaces:

- [Metadatos de la región de la UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadatos de la región CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Seleccione `Import data about the relying party from a file`{.action} y seleccione su archivo de metadatos.

Haga clic en el botón `Next`{.action}.

![AD FS - Añadir una aprobación - etapa 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Escriba un nombre para mostrar el organismo tercero de confianza y haga clic en el botón `Next`{.action}.

![AD FS - Añadir una aprobación - etapa 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Haga clic en `Next`{.action} en la ventana de control de acceso.

![AD FS - Añadir una aprobación - etapa 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Haga clic de nuevo en `Next`{.action} para continuar.

![AD FS - Añadir una aprobación - etapa 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Haga clic en el botón `Close`{.action} en la última ventana. La aprobación de OVHcloud como organismo tercero de confianza se ha añadido a su AD FS.

![Aprobación AD FS](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Con OVHcloud añadido como organismo tercero de confianza, ya debería poder conectarse a través de una conexión SSO. Sin embargo, toda la información sobre la identidad del usuario (en términos de "afirmación" SAML) no estará disponible hasta que configure una estrategia para que los campos LDAP Active Directory se ajusten a los atributos de la declaración SAML.
>

#### Atributos LDAP coincidentes a atributos SAML

Haga clic en el registro de OVHcloud en la sección "Relying Party Trusts".

![Mapeo de aprobación AD FS etapa 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Haga clic en `Edit Claim Issuance Policy...`{.action}.

![Mapeo de aprobación AD FS etapa 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Haga clic en el botón `Add Rule...`{.action}.

![Mapeo de aprobación AD FS etapa 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Haga clic en `Next`{.action}.

Introduzca un nombre de regla y establezca la tabla de correspondencias.

Seleccione `Active Directory` como `Atribute store`.

> [!primary]
>
> Los siguientes parámetros se pueden configurar libremente para que el proveedor de servicios pueda leer correctamente los datos LDAP Active Directory. Puede consultar la siguiente imagen, por ejemplo.

Haga clic en el botón `Finish`{.action}.

![Mapeo de aprobación AD FS etapa 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![Mapeo de aprobación AD FS etapa 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Haga clic en el botón `Apply`{.action} y acepte con `OK`{.action}.

![Mapeo de aprobación paso 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Una vez completada la tabla de correspondencias, el servicio AD FS confía en OVHcloud como proveedor de servicios. El siguiente paso es comprobar que la cuenta de OVHcloud confíe en su AD FS como proveedor de identidad.

### Configurar la confianza de la cuenta de OVHcloud y configurar la conexión

El AD FS se añadirá como proveedor de identidad de confianza al [área de cliente de OVHcloud](/links/manager), donde podrá proporcionar los metadatos del proveedor de identidad.

Haga clic en el nombre de su cuenta en la esquina superior derecha y, a continuación, vuelva a hacer clic en su nombre en la barra lateral.

![Acceso al menú IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Puede acceder al menú IAM desde la entrada dedicada del área de cliente.

![Acceso al menú IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

A continuación, haga clic en la pestaña `Identidades`{.action} para acceder a la gestión de los usuarios locales.

![Acceso al menú IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Haga clic en el botón `SSO connection`{.action}.

![OVHcloud conexión SSO etapa 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Introduzca los metadatos XML del servicio AD FS. En este caso, el campo `Nombre de atributo de grupo` es opcional. Haga clic en `Confirmar`{.action}.

Es posible conservar los usuarios locales marcando la casilla `Mantener los usuarios de OVHcloud activos`.

![OVHcloud conexión SSO etapa 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Ahora debe encontrar el AD FS como proveedor de identidad, así como los grupos por defecto.

![OVHcloud conexión SSO etapa 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Para más información, haga clic en el enlace situado bajo la `URL del servicio SSO`.

![OVHcloud conexión SSO etapa 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![OVHcloud conexión SSO etapa 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

El botón `...`{.action} permite actualizar o eliminar el SSO y consultar los detalles.

![OVHcloud conexión SSO etapa 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

Su AD FS se considera ahora proveedor de identidad de confianza. No obstante, debe añadir grupos a su cuenta de OVHcloud.

> [!warning]
> Si intenta conectarse por SSO, es probable que aparezca un mensaje de error `Not in valid groups`.
>
> Su cuenta de OVHcloud verifica si el usuario se autentifica pertenece a un grupo existente en la cuenta.
>

Para solucionarlo, compruebe que la información relativa al atributo "Group" devuelto por el servicio AD FS es correcta.

Considere el de un usuario "John Doe" de su Active Directory, como se muestra en la siguiente imagen.

![Usuario AD FS](images/adfs_user.png){.thumbnail}

Compruebe la tabla de correspondencias en AD FS :

![Mapeo de aprobación de parte de confianza AD FS](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

En este ejemplo, el atributo "Group" devuelto por el Active Directory para el usuario "John Doe" es "title" Esto corresponde al "job title" que es `manager@<my-domain>.com`.

También puede comprobarlo en la declaración SAML:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

Esto significa que debe añadir el grupo `manager@<my-domain>.com` a su cuenta de OVHcloud asignándole un papel. En caso contrario, su cuenta de OVHcloud no sabe lo que el usuario está autorizado a hacer.

Para añadirlo, haga clic en el botón `Declarar un grupo`{.action} e introduzca los siguientes campos:

![Grupos de gestión de usuarios AD FS](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupos de gestión de usuarios AD FS](images/ovhcloud_user_management_groups_2.png){.thumbnail}

A continuación, compruebe que el grupo se ha añadido a su cuenta de OVHcloud en la sección `Grupos`:

![Grupos de gestión de usuarios AD FS](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Una vez que se conecte posteriormente con el usuario Active Directory "John Doe", su cuenta de OVHcloud reconocerá que el usuario tiene el rol `REGULAR`, especificado por su grupo.

Atención: Si otorga el privilegio `Ninguno`, será necesario asignar permisos a este grupo a través de las [políticas IAM](/pages/account_and_service_management/account_information/iam-policy-ui).

A continuación, podrá desconectarse de su cuenta y reconectarse con su AD FS como proveedor de identidad.

### Conexión mediante SSO

En [la página de identificación de OVHcloud](/links/manager), introduzca su [ID de cliente](/pages/account_and_service_management/account_information/ovhcloud-account-creation#cual-es-mi-id-de-cliente) seguido de **/idp** sin contraseña y haga clic en el botón `Login`{.action} .

![Conexión a la federación OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

A continuación, será redirigido a la página de conexión AD FS. Introduzca un login/password de un usuario de su Active Directory LDAP y haga clic en el botón `Sign in`{.action}.

![OVHcloud Federation login Redirection AD FS](images/ovhcloud_federation_login_2.png){.thumbnail}

Ahora está conectado con el mismo ID de cliente, pero a través de su usuario Active Directory y con su SSO AD FS.

![Federación de la información de los usuarios de OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Más información

[Crear una cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[Proteger mi cuenta de OVHcloud y gestionar mis datos personales](/pages/account_and_service_management/account_information/all_about_username)

[Definición y gestión de la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteger su cuenta de OVHcloud con la doble autenticación](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Cómo utilizar las políticas IAM desde el área de cliente](/pages/account_and_service_management/account_information/iam-policy-ui).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
