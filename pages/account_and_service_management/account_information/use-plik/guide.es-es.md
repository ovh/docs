---
title: 'Compartir archivos con la herramienta Plik'
excerpt: "Descubra cómo usar la herramienta Plik para enviar archivos a otras personas"
updated: 2022-02-14
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>


## Objetivo

La herramienta online [Plik](https://plik.ovhcloud.com) permite compartir archivos entre diferentes personas, ofreciendo opciones para proteger el acceso a estos archivos.

**Esta guía explica cómo utilizar la herramienta Plik online para compartir archivos.**

## Requisitos

- Disponer de una [cuenta de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## Procedimiento

### Conexión API

Acceda primero a la página <https://plik.ovhcloud.com>.

Para descargar archivos, debe estar autenticado. Haga clic en `Login with OVH`{.action}.

![login](images/plik-login-EU.png)

Conéctese a su cuenta de OVHcloud, lo que le permitirá acceder a la API de OVHcloud a través de la herramienta Plik.<br>
Introduzca sus claves de acceso y haga clic en el botón `Log in`{.action} para continuar.

![API](images/api-login-EU.png)

> [!primary]
>
> Si ha activado la [doble autenticación](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) en su cuenta, deberá introducir el código proporcionado por el método de autenticación que haya establecido en su cuenta. 

### Descargar archivos

Una vez que se haya conectado, haga clic en la palabra `Plik`{.action} en la esquina superior izquierda para acceder al menú de añadir archivos.

Haga clic en `Add files`{.action} y seleccione el archivo que quiera añadir o arrastre los archivos.

> [!primary]
>
> El tamaño de los archivos está limitado a 10 GB.
>

![Add files - opciones](images/plik-add-files-options.png)

Existen diversas opciones para configurar sus transferencias:

- `Destruct after the first download` - Esta opción eliminará el archivo descargado después de la primera descarga.
- `Streaming` - El archivo no se guardará en el servidor. En lugar de ello, la descarga de archivos comienza cuando el usuario remoto inicia la descarga.
- `Removable` - Permite a los usuarios finales eliminar el archivo descargado.
- `Password` - Proteja su transferencia imponiendo un identificador y una contraseña que el usuario remoto deberá introducir.
- `Comments` - Añada comentarios a su descarga. El lenguaje *markdown* está permitido.
- `Files will be automatically removed in` - Elija el número de días (30 máximo), horas o minutos hasta que se eliminen automáticamente los archivos descargados.

> [!primary]
>
> Cuando se protege el sistema de transferencia a distancia con una contraseña, el nombre de usuario predeterminado es "plik".
>

Una vez que haya añadido los archivos y seleccionado las opciones, haga clic en el botón `Upload`{.action} verde del lado izquierdo. Esto abrirá una nueva página con sus archivos adjuntos.

![upload file](images/plik-upload-EU.png)

Las opciones de descarga están disponibles.

### Descargar archivos

En la página de descarga, puede consultar las nuevas opciones:

- `Zip archive` - Desplaza todos los archivos que haya descargado a una carpeta comprimida.
- `Add files` - Le permite añadir otros archivos.
- `Delete` - Elimina todos los archivos descargados previamente.

También puede eliminar archivos uno a uno haciendo clic en el botón `X`{.action} situado a la derecha de cada archivo.

![download file](images/plik-download-EU.png)

Para que otras personas puedan descargar sus archivos, introdúzcalos en el archivo individual que se encuentra bajo el nombre del archivo.<br>
También puede enlazarlos a todos los archivos de la sesión compartiéndoles la URL en la barra de direcciones de su navegador.<br>
También puede utilizar el código QR compartido situado a la izquierda. Si ha descargado varios archivos, el código QR le permitirá descargar todos los archivos.

### Opciones de la cuenta

Haga clic en su identificador en la parte superior derecha para acceder a las opciones de la cuenta.

![download file](images/account-options.png)

Desde este menú podrá desconectarse, generar tokens para utilizar la herramienta Plik en la línea de órdenes, eliminar cada transferencia (a través del botón `Remove`{.action} situado a la derecha de cada transferencia) o eliminarlos todos (a través del botón `DELETE UPLOADS`{.action}).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
