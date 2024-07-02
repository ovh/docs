---
title: "Gestionar un alojamiento web con Visual Studio Code a través de SFTP"
excerpt: "Administrar un sitio web en un alojamiento web con Visual Studio Code gracias a una extensión SFTP"
updated: 2023-11-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Si tiene contratado un plan de hosting de OVHcloud, puede acceder a un espacio de almacenamiento desde el que podrá administrar su sitio web. Es posible acceder a este espacio de almacenamiento a través del protocolo SFTP. Aunque se puede conectar con un terminal, también se puede usar el entorno de desarrollo integrado (IDE) de Visual Studio Code para administrar las carpetas y archivos del sitio web.

> [!primary]
>
> Si desea administrar su sitio web de forma remota sin utilizar Visual Studio Code, puede instalar el cliente FTP FileZilla. Para más información, consulte nuestra guía "[Utilizar FileZilla con el alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)". Si desea conectarse a su sitio web por SSH, consulte nuestra guía "[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)".
>

**Descubra cómo administrar su sitio web con Visual Studio Code.**
  
## Requisitos

- Tener contratado un plan de hosting de OVHcloud (/links/web/hosting)
- Instalar [Microsoft Visual Studio Code](https://visualstudio.microsoft.com/#vscode-section) en el equipo

## Procedimiento
 
> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Este tutorial le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el [editor del IDE de Visual Studio Code](https://code.visualstudio.com/){.external}. Nosotros no podremos asistirle. Para más información, consulte la sección ["Más información"](#go-further) de este tutorial.
>

### Instalar la extensión SFTP para Visual Studio Code

> [!warning]
>
> En este tutorial hemos elegido la extensión "SFTP/FTP sync" de *Natizyskunk*. Usted puede elegir otra. Sin embargo, tenga en cuenta que una extensión de Visual Studio Code es software que suele crear un desarrollador independiente, que puede detener su desarrollo en cualquier momento.
>

Después de iniciar Visual Studio Code, acceda al menú horizontal situado en la parte superior de la interfaz, haga clic en `View`{.action} y luego en `Extensions`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/view_extensions.png){.thumbnail}

Para realizar la misma acción con el método abreviado de teclado, seleccione:

- `Ctrl + Shift + X` si está en Windows, 
- `Maj + Command + X` si está en macOS.

En la parte superior izquierda de la interfaz, introduzca el nombre de la extensión "SFTP/FTP sync" de *Natizyskunk* y haga clic en `Install`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/extensions.png){.thumbnail}

También puede instalar [la extensión "SFTP/FTP sync"](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp#sftp-sync-extension-for-vs-code) desde el marketplace de Visual Studio.
  
### Inicializar el proyecto localmente

Para sincronizar los archivos de su sitio web presentes en el alojamiento web desde Visual Studio Code, introduzca la ubicación local del proyecto. Para ello, cree una carpeta en la ubicación que desee.

Vuelva a Visual Studio Code en el menú horizontal de la parte superior de la interfaz, haga clic en `View`{.action} y luego en `Command Palette`{.action} para ver el Editor de comandos.

Para realizar la misma acción con el método abreviado de teclado, seleccione:

- `Ctrl + Shift + P` si está en Windows, 
- `Maj + Command + P` si está en macOS.

Introduzca el siguiente comando: `SFTP: Config`.

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_config.png){.thumbnail}

Con este comando, Visual Studio Code creará el archivo de configuración "sftp.json" en la raíz de la carpeta local creada anteriormente. Sin embargo, dado que Visual Studio Code aún no conoce la ubicación local del proyecto, debería aparecer el siguiente mensaje:

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_folder.png){.thumbnail}

Haga clic en `Open Folder`{.action}, diríjase a la ubicación de la carpeta local que desee y haga clic en `Select Folder`{.action} para confirmar.

![hosting](/pages/assets/screens/other/web-tools/vscode/select_folder.png){.thumbnail}

En Visual Studio Code, vuelva a escribir el comando `SFTP: Config`. En Visual Studio Code aparece un archivo de configuración denominado 'sftp.json'.

![hosting](/pages/assets/screens/other/web-tools/vscode/sftp_json_default.png){.thumbnail}

Este archivo se encuentra en la carpeta .vscode, que a su vez se sitúa en la raíz del proyecto local.

### Configurar archivo sftp.json

Antes de trabajar en el proyecto, cárguelo en la carpeta local que creó anteriormente. No obstante, en primer lugar, asegúrese de que el archivo "sftp.json" está correctamente configurado. La información útil puede consultarse en el [área de cliente de OVHcloud](/links/manager). En la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}.

En el archivo "sftp.json", introduzca los valores para las siguientes entradas:

#### name 

Localícelo en las dos ranuras resaltadas en naranja.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hosting_name.png){.thumbnail}

> [!primary]
>
> El valor `name`(nombre) puede personalizarse, por lo que podrá asignarle el que desee. Sin embargo, si configura varios archivos "sftp.json", es preferible tomar como referencia los valores visibles anteriormente por motivos de organización.
>

#### host

En la pestaña `FTP-SSH`{.action}, el nombre de host (`host`) aparece bajo el epígrafe `Servidor FTP y SFTP`{.action}.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hostname.png){.thumbnail}

#### username

Localice el nombre de usuario (`username`) en la columna `Usuario`{.action} de la tabla.

#### remotePath

Encontrará la ruta remota (`remotePath`) en la entrada `Acceso al directorio de la página principal`{.action}. Sin embargo, si hay varios usuarios configurados, la ruta especificada puede ser diferente. En ese caso, sustituya el nombre de usuario que aparece a continuación de `home/` por el de su elección en la lista `Usuario`{.action} de su alojamiento web.

**Ejemplo**: Si su nombre de usuario es "john-smith", obtendrá "home/john-smith"

Por último, no olvide añadir esta línea en el archivo sftp.json : `"openSsh": true`

> [!primary]
>
> Para evitar escribir la contraseña después de cada comando en Visual Studio Code, guárdela en el archivo "sftp.json" agregando la línea: `"password": "<password>"`
>

A continuación se muestra un ejemplo de archivo "sftp.json":

```json

{
    "name": "<name>",
    "host": "<host>",
    "protocol": "sftp",
    "port": 22,
    "username": "myusername",
    "password": "mypassword",
    "remotePath": "/home/myusername",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": true
}

```

Para más información sobre las opciones del archivo "sftp.json", consulte la [documentación del proyecto](https://github.com/Natizyskunk/vscode-sftp/wiki/configuration).

### Descargar el proyecto localmente

Una vez configurado el archivo "sftp.json", descargue el contenido del proyecto para recuperar todas las carpetas y archivos del sitio web. Para ello, vaya a Visual Studio Code e introduzca el siguiente comando: `SFTP: Download Project`.

Visual Studio Code le pide que seleccione la carpeta que desea cargar en el alojamiento web. Introduzca el valor de `name` anteriormente definido en el archivo "sftp.json" .

![hosting](/pages/assets/screens/other/web-tools/vscode/download_project.png){.thumbnail}

Si se le solicita, introduzca la contraseña asociada al usuario indicado en el archivo sftp.json y haga clic en `enter`. Después de la descarga, verá todas las carpetas y archivos del proyecto en el Explorador de archivos, en la columna izquierda de la interfaz de Visual Studio Code.

![hosting](/pages/assets/screens/other/web-tools/vscode/explorer.png){.thumbnail}

> [!primary]
>
> Le recordamos que la configuración correcta del archivo "sftp.json" es fundamental. Si encuentra un error antes de descargar el proyecto, suele deberse a un error de configuración del archivo "sftp.json". Para más información, consulte [FAQ de la extensión](https://github.com/Natizyskunk/vscode-sftp/blob/HEAD/FAQ.md){.external}.
>

### Realizar cambios en los archivos

Ahora que el proyecto se ha descargado localmente en el equipo, puede editar, agregar o eliminar fácilmente archivos en Visual Studio Code.

Si desea que los cambios locales se sincronicen cada vez que guarde un archivo, añada esta línea al archivo "sftp.json": `"uploadOnSave": true`

Para desactivar esta función, pero conservándola en el archivo sftp.json, cambie el valor `true` a `false`.

Hasta ahora solo hemos mencionado los comandos: `SFTP: Config` y `SFTP: Download Project`. Hay otros comandos que puede observar por autocompletado escribiendo `SFTP:` en el editor de comandos.

![hosting](/pages/assets/screens/other/web-tools/vscode/list_commands.png){.thumbnail}

Consulte los comandos [aquí](https://github.com/Natizyskunk/vscode-sftp/wiki/Commands){.external}.

Ahora puede acceder y editar el contenido del alojamiento web a través de Visual Studio Code.
Esta guía explica cómo administrar un proyecto desde Visual Studio Code de forma eficaz. Es adecuado para un primer experimento. Sin embargo, si modifica varios archivos y estos están sincronizados en su alojamiento web, no podrá ver el historial de cambios para poder revertirlos o corregir un error.

## Más información <a name="go-further"></a>

[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)

[Utilizar FileZilla con el alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting). Recuerde que para utilizar el SSH, debe disponer de un [plan de hosting Profesional o Performance](/links/web/hosting).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).