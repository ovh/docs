---
title: Activar las conexiones SSO con su cuenta OVHcloud
slug: conect-saml-sso
excerpt: "Cómo asociar el servicio ADFS a su cuenta de OVHcloud a través de SAML 2.0"
section: Uso avanzado
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 13/10/2022**

## Objetivo

Puede utilizar la autenticación SSO (*Single Sign-On*) **única** para conectarse a su cuenta de OVHcloud. Para activar estas conexiones, su cuenta y sus servicios ADFS (*Active Directory Federation Services*) deben configurarse mediante autenticación SAML (*Security Assertion Markup Language*).

**Esta guía explica cómo asociar una cuenta de OVHcloud a un Active Directory externo.**

## Requisitos

- Los servicios ADFS (Active Directory Federation Services) deben ejecutarse en su servidor
- Disponer de una [cuenta de OVHcloud](https://docs.ovh.com/us/es/customer/crear-cuenta-ovhcloud/)
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

> [!primary]
>
> Para que un proveedor de servicios (es decir, su cuenta de OVHcloud) pueda establecer una conexión SSO con un proveedor de identidad (es decir, su servicio ADFS), lo esencial es establecer una relación de confianza mutua.
>

### Creación de confianza ADFS

Su ADFS actúa como proveedor de identidad. Las solicitudes de autenticación de su cuenta de OVHcloud solo se aceptarán si primero lo ha declarado como un organismo tercero de confianza.

En el contexto Active Directory, significa que debe añadirse como `Relying Party Trust`.

En el Gestor de servidores, abra el menú `Tools`{.action} y seleccione `AD FS Management`{.action}.

![Menú Herramientas Windows Server](images/windows_server_tools_menu.png){.thumbnail}

Haga clic en `Relying Party Trusts`{.action}.

![ADFS Menu](images/adfs_menu.png){.thumbnail}

Haga clic en `Add Relying Party Trust...`{.action}.

![Menú de aprobación ADFS](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Seleccione `Claims aware`{.action} y acepte con el botón `Start`{.action}.

![ADFS añadir aprobación - etapa 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Puede introducir manualmente la información sobre el organismo tercero de confianza o importarla desde un archivo de metadatos.

#### Importar los metadatos de OVHcloud SP

Puede obtener el archivo de metadatos adecuado a través de los siguientes enlaces:

- [Metadatos de la región de la UE](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadatos de la región CA](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Seleccione `Import data about the relying party from a file`{.action} y seleccione su archivo de metadatos.

Haga clic en el botón `Next`{.action} .

![ADFS - Añadir una aprobación - etapa 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Escriba un nombre para mostrar el organismo tercero de confianza y haga clic en el botón `Next`{.action}.

![ADFS - Añadir una aprobación - etapa 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Haga clic en `Next`{.action} en la ventana de control de acceso.

![ADFS - Añadir una aprobación - etapa 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Haga clic de nuevo en `Next`{.action} para continuar.

![ADFS - Añadir una aprobación - etapa 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Haga clic en el botón `Close`{.action} en la última ventana. La aprobación de OVHcloud como organismo tercero de confianza se ha añadido a su ADFS.

![Aprobación ADFS](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Con OVHcloud añadido como organismo tercero de confianza, ya debería poder conectarse a través de una conexión SSO. Sin embargo, toda la información sobre la identidad del usuario (en términos de "afirmación" SAML) no estará disponible hasta que configure una estrategia para que los campos LDAP Active Directory se ajusten a los atributos de la declaración SAML.
>

#### Atributos LDAP coincidentes a atributos SAML

Haga clic en el registro de OVHcloud en la sección "Relying Party Trusts".

![Mapeo de aprobación ADFS etapa 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Haga clic en `Edit Claim Issuance Policy...`{.action}.

![Mapeo de aprobación ADFS etapa 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Haga clic en el botón `Add Rule...`{.action}.

![Mapeo de aprobación ADFS etapa 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Haga clic en `Next`{.action}.

Introduzca un nombre de regla y establezca la tabla de correspondencias.

Seleccione `Active Directory` como `Atribute store`.

> [!primary]
>
> Los siguientes parámetros se pueden configurar libremente para que el proveedor de servicios pueda leer correctamente los datos LDAP Active Directory. Puede consultar la siguiente imagen, por ejemplo.

Haga clic en el botón `Finish`{.action}.

![Mapeo de aprobación ADFS etapa 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![Mapeo de aprobación ADFS etapa 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Haga clic en el botón `Apply`{.action} y acepte con `OK`{.action}.

![Mapeo de aprobación paso 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Una vez completada la tabla de correspondencias, el servicio ADFS confía en OVHcloud como proveedor de servicios. El siguiente paso es comprobar que la cuenta de OVHcloud confíe en su ADFS como proveedor de identidad.

### Configurar la confianza de la cuenta de OVHcloud y configurar la conexión

El ADFS se añadirá como proveedor de identidad de confianza al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), donde podrá proporcionar los metadatos del proveedor de identidad.

[Conéctese](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y haga clic en su perfil en la parte superior derecha.

![Top menu OVHcloud](images/ovhcloud_top_menu.png){.thumbnail}

Haga clic en su nombre para acceder a la página de gestión de su perfil.

![Información de usuario de OVHcloud](images/ovhcloud_user_infos.png){.thumbnail}

Abra la pestaña `Gestión de usuarios`{.action}.

![Perfil del menú OVHcloud](images/ovhcloud_profile_menu.png){.thumbnail}

Haga clic en el botón `Login SSO`{.action}.

![OVHcloud conexión SSO etapa 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Introduzca los metadatos XML del servicio ADFS. En este caso, el campo `Nombre de atributo de grupo` es opcional. Haga clic en `Confirmar`{.action}.

![OVHcloud conexión SSO etapa 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Ahora debe encontrar el ADFS como proveedor de identidad, así como los grupos por defecto.

![OVHcloud conexión SSO etapa 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Para más información, haga clic en el enlace situado bajo la `URL del servicio SSO`.

![OVHcloud conexión SSO etapa 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![OVHcloud conexión SSO etapa 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

El botón `...`{.action} permite actualizar o eliminar el SSO y consultar los detalles.

![OVHcloud conexión SSO etapa 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

Su ADFS se considera ahora proveedor de identidad de confianza. No obstante, debe añadir grupos a su cuenta de OVHcloud.

> [!warning]
> Si intenta conectarse por SSO, es probable que aparezca un mensaje de error `Not in valid groups`.
>
> Su cuenta de OVHcloud verifica si el usuario se autentifica pertenece a un grupo existente en la cuenta.
>

Para solucionarlo, compruebe que la información relativa al atributo "Group" devuelto por el servicio ADFS es correcta.

Considere el de un usuario "John Doe" de su Active Directory, como se muestra en la siguiente imagen.

![Usuario ADFS](images/adfs_user.png){.thumbnail}

Compruebe la tabla de correspondencias en ADFS :

![Mapeo de aprobación de parte de confianza ADFS](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

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

![Grupos de gestión de usuarios ADFS](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Grupos de gestión de usuarios ADFS](images/ovhcloud_user_management_groups_2.png){.thumbnail}

A continuación, compruebe que el grupo se ha añadido a su cuenta de OVHcloud en la sección `Grupos` :

![Grupos de gestión de usuarios ADFS](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Una vez que se conecte posteriormente con el usuario Active Directory "John Doe", su cuenta de OVHcloud reconocerá que el usuario tiene el rol "REGULAR", especificado por su grupo.

A continuación, podrá desconectarse de su cuenta y reconectarse con su ADFS como proveedor de identidad.

### Conexión mediante SSO

En [la página de identificación de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), introduzca su [ID de cliente](https://docs.ovh.com/us/es/customer/crear-cuenta-ovhcloud/#cual-es-mi-id-de-cliente) seguido de **/idp** sin contraseña y haga clic en el botón `Login`{.action} .

![Conexión a la federación OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

A continuación, será redirigido a la página de conexión ADFS. Introduzca un login/password de un usuario de su Active Directory LDAP y haga clic en el botón `Sign in`{.action}.

![OVHcloud Federation login Redirection ADFS](images/ovhcloud_federation_login_2.png){.thumbnail}

Ahora está conectado con el mismo ID de cliente, pero a través de su usuario Active Directory y con su SSO ADFS.

![Federación de la información de los usuarios de OVHcloud](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Más información

[Crear una cuenta de OVHcloud](https://docs.ovh.com/us/es/customer/crear-cuenta-ovhcloud/)

[Proteger mi cuenta de OVHcloud y gestionar mis datos personales](https://docs.ovh.com/us/es/customer/todo-sobre-el-id-de-cliente/)

[Definición y gestión de la contraseña de su cuenta](https://docs.ovh.com/us/es/customer/gestionar-su-contrasena/)

[Proteger su cuenta de OVHcloud con la doble autenticación](https://docs.ovh.com/us/es/customer/proteger-su-cuenta-con-una-2FA/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
