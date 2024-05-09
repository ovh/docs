---
title: "Sharepoint : sincronizar los datos en el ordenador"
excerpt: Cómo guardar una copia de seguridad de los datos de su SharePoint de OVHcloud en su ordenador
updated: 2023-09-21
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Si desea recuperar o migrar los datos de su plataforma de SharePoint de OVHcloud, esta guía explica los etapas necesarios para extraer todos los datos al almacenamiento local de su ordenador.

**Esta guía explica cómo realizar una copia de seguridad de los datos de su SharePoint de OVHcloud en su ordenador.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Tener una [solución SharePoint de OVHcloud](https://www.ovhcloud.com/es-es/collaborative-tools/sharepoint/)
- Tener un equipo que utilice el sistema operativo Microsoft Windows para realizar los etapas de migración.

## Procedimiento

Esta guía se divide en 4 etapas:

- [Etapa 1 - Instalar OneDrive para la Empresa](#installonedrive.): OneDrive para la Empresa le permitirá transferir los datos de Sharepoint a su equipo
- [Etapa 2 - Preparar la migración desde el área de cliente de OVHcloud](#controlpanelconfig.): configure su plataforma Sharepoint designando una única cuenta de administrador que podrá transferir el contenido de OneDrive de cada cuenta Sharepoint.
- [Etapa 3 - Iniciar la migración desde la interfaz de Sharepoint](#migrationignition.): inicie sesión en la cuenta designada en el etapa 2 para transferir el contenido a su ordenador.
- [Etapa 4 - Migrar el contenido de otras cuentas de Sharepoint](#migrationother.): sigue el proceso para ver y sincronizar el espacio de OneDrive de cada cuenta en la plataforma de Sharepoint.

### Etapa 1 - Instalar OneDrive para la Empresa <a name="installonedrive"></a>

Para migrar los datos de su servicio SharePoint de OVHcloud, debe utilizar la aplicación OneDrive para la Empresa, cuyo nombre técnico es «Groove.exe».

Para instalarlo, siga estas instrucciones:

1. Descargue el archivo ISO desde el enlace <https://download.mail.ovh.net/sharepoint/onedrive.iso>
2. Desde su ordenador, haga clic derecho en el archivo `onedrive.iso`, abra sus `Propiedades`{.action}, marque la casilla de verificación `Desbloquear`{.action}, haga clic en `Aplicar`{.action} y, a continuación, en `Aceptar`{.action}.
3. Haga doble clic en `onedrive.iso` para abrirlo.
4. Haga doble clic en el archivo `setup.bat` para iniciar la instalación.
5. Espere unos minutos, **espere a que se cierre la ventana** para que la instalación se complete.

> [!warning]
>
> Si el archivo `setup.bat` no se inicia correctamente (en el etapa 4), puede copiar el contenido del archivo `onedrive.iso` en una carpeta del escritorio del equipo e intentar de nuevo el etapa 4.

![sharepoint](sharepoint-eol-00.gif){.thumbnail}

> [!primary]
>
> Si este método no funciona en el equipo, puede instalar OneDrive para la Empresa siguiendo [el procedimiento oficial de Microsoft](https://learn.microsoft.com/sharepoint/install-previous-sync-app#install-groove-exe-with-office-2016).

### Etapa 2 - Preparar la migración desde el área de cliente de OVHcloud <a name="controlpanelconfig"></a>

Para acceder a todos los espacios de OneDrive del servicio de SharePoint, debe quitar el derecho de administrador de todos los usuarios desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

Acceda a la sección `Web Cloud`{.action} del área de cliente. Haga clic en `Microsoft`{.action}, luego en `SharePoint`{.action} y seleccione la plataforma SharePoint correspondiente.

En la pestaña `Usuarios`{.action}, acceda a la gestión de cuentas Sharepoint de su plataforma. Para cada cuenta, haga clic en el botón `...`{.action} a la derecha y luego en `Quitar permisos de administrador`{.action}.

![sharepoint](sharepoint-eol-01.png){.thumbnail}

Una vez que haya retirado el derecho de administrador para todas las cuentas de Sharepoint, solo tendrá que designar una cuenta para que tenga acceso a todos los espacios de OneDrive de la plataforma.

Active el derecho de administrador en la cuenta que haya designado.

En la pestaña `Usuarios`{.action} de su plataforma SharePoint, haga clic en el botón `...`{.action} a la derecha de la cuenta designada y luego en `Activar los permisos de administrador`{.action}.

![sharepoint](sharepoint-eol-02.png){.thumbnail}

Ahora puede sincronizar todos los espacios de OneDrive de su plataforma de SharePoint con esta cuenta.

### Etapa 3 - Iniciar la migración desde la interfaz de Sharepoint <a name="migrationignition"></a>

Acceda a la interfaz en línea del servicio SharePoint. La URL de acceso se encuentra en el área de cliente de OVHcloud, en la pestaña `Información general`{.action}, bajo el epígrafe `URL de consulta`.

![sharepoint](sharepoint-eol-03.png){.thumbnail}

Inicie sesión con las credenciales del usuario que tiene permisos de administrador.

![sharepoint](sharepoint-eol-04.png){.thumbnail}

Para ir a la sección de OneDrive, haga clic en el icono de la parte superior izquierda de la interfaz de Sharepoint y, a continuación, haga clic en el icono de `OneDrive`{.action}.

![sharepoint](sharepoint-eol-05.png){.thumbnail}

Para sincronizar el contenido de OneDrive con el equipo, haz clic en el botón `Sync`{.action} y, a continuación, en `Sync Now`{.action}.

![sharepoint](sharepoint-eol-06.png){.thumbnail}

Se abrirá una ventana en la que podrá abrir el vínculo **grvopen**. Para autorizarlo, marque la opción "Always allow **https://myServiceAddress.spX.ovh.net** to open **grvopen** links" y haga clic en `Open link`{.action}.

![sharepoint](sharepoint-eol-07.png){.thumbnail}

Introduzca las claves de la cuenta de administrador de Sharepoint. Utilice el usuario con permisos de administrador (configurado en [el etapa 2](#controlpanelconfig.)).

![sharepoint](sharepoint-eol-08.png){.thumbnail}

Haga clic en `Sync Now`{.action}.

![sharepoint](sharepoint-eol-09.png){.thumbnail}

Seleccione la plantilla de biblioteca «**Form Templates**» en la ventana "Select the library you want to sync". A continuación, haga clic en `Sync selected`{.action}.

![sharepoint](sharepoint-eol-10.png){.thumbnail}

Una vez completada la sincronización en el equipo, sólo se transferirán al equipo los datos de la cuenta de SharePoint a la que ha iniciado sesión.

**Para transferir el contenido de OneDrive de cada cuenta de la plataforma de SharePoint, siga el etapa 4 a continuación.**

### Etapa 4 - Migrar el contenido de otras cuentas de Sharepoint <a name="migrationother"></a>

Para tener acceso al OneDrive de otros usuarios de tu plataforma y sincronizar los datos asociados, debes cambiar la URL de acceso (desde tu explorador) cuando inicies sesión en OneDrive de la cuenta de administrador.

Para ello, en la URL que se muestra, sustituya la «sección» (correspondiente al usuario) que se encuentra entre las partes `/personal/` y `/Documentos/`.

- **Ejemplo 1**: Para un usuario **user@domain.name**, sustituya los caracteres « **@**» y «.**.**» por « **_** ». El resultado es «user_domain_name». Por lo tanto, el enlace tendrá el siguiente aspecto:

![sharepoint](sharepoint-eol-11.png){.thumbnail}

- **Ejemplo 2**: para un usuario **john.smith@example.com**, obtendrá «john_smith_example_com». El enlace tendrá el siguiente aspecto:

![sharepoint](sharepoint-eol-12.png){.thumbnail}

> [!warning]
>
> Las direcciones URL anteriores solo se proporcionan a modo de ejemplo. Asegúrese de utilizar la URL generada por su plataforma de SharePoint.

Puede sincronizar las siguientes cuentas repitiendo este etapa.

## Más información

[Activar y gestionar su SharePoint OVHcloud](sharepoint_manage1.)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).
Si necesita ayuda sobre el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras diferentes [ofertas de soporte](https://www.ovhcloud.com/es-es/support-levels/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.