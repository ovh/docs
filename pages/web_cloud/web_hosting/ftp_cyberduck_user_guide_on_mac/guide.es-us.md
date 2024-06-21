---
title: "Tutorial - Utilizar Cyberduck con mi alojamiento web"
excerpt: "Cómo utilizar la aplicación Cyberduck para conectarse a un alojamiento web de OVHcloud"
updated: 2024-02-26
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Cyberduck, disponible en macOS y Windows, es una aplicación open source de transferencia de archivos. Le permite conectarse al espacio de almacenamiento FTP de su alojamiento web (en protocolo FTP o SFTP).

Para descargar Cyberduck, acceda al [sitio web oficial](https://cyberduck.io/) de la aplicación.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/logo.png){.thumbnail}

> [!primary]
>
> - Cyberduck es una aplicación disponible en macOS y Windows. Debido a que la interfaz y las funciones de Cyberduck son relativamente similares en ambos sistemas operativos, el tutorial se ha realizado en una máquina Windows.
> - Esta guía ha sido elaborada con una versión gratuita de la aplicación en versión 8.7.2 descargada desde el [sitio web oficial](https://cyberduck.io/).
>

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, le recomendamos que, si necesita ayuda, contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección [Más información](#go-further) de esta guía.
>

## Requisitos

- Tener contratado un plan de hosting [web hosting](/links/web/hosting){.external}.
- Haber descargado e instalado la aplicación Cyberduck en su ordenador.

## Procedimiento

### Interfaz

Al iniciar la aplicación, se muestra la siguiente interfaz.

- La parte superior, rodeada de naranja, corresponde a la barra de herramientas. Le permite establecer una conexión con su espacio de alojamiento, navegar por la estructura de carpetas y archivos, consultar el historial de sus acciones y muchas otras acciones.
- Debajo está el contenido que desea ver. Por ejemplo, si hace clic en el icono `History`{.action}, aparecerá una lista de las acciones.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/start-page.png){.thumbnail}

### Personalizar la visualización de Cyberduck

Puede personalizar la visualización de Cyberduck para que sea más eficaz y personal.

En el menú principal, en la parte superior de la interfaz, haga clic en `View`{.action} y luego en `Customize Toolbar...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-toolbar.png){.thumbnail}

En la nueva ventana, arrastre los elementos que desee a la barra de herramientas. Por ejemplo, si desea agregar un icono de `Download`{.action} a la barra de herramientas, arrastre el icono de `Download`{.action} a la barra de herramientas. Para confirmar los cambios, haga clic en `Done`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-display.png){.thumbnail}

### Utilizar Cyberduck

#### Conexión SFTP

> [!warning]
>
> Por motivos de seguridad, no se recomienda conectarse por FTP. La mayoría de los sistemas operativos ahora prohíben la posibilidad de conectarse por FTP. por lo que le recomendamos que se conecte por SFTP.
>

Para conectarse a su espacio de alojamiento web, siga los pasos que se indican a continuación:

**1.** En la barra de herramientas, haga clic en `Open Connection`{.action}

**2.** En el menú desplegable (marco naranja de la imagen), seleccione `SFTP (SSH File Transfert Protocol)`{.action}

**3.** Introduzca los datos de conexión a su espacio FTP:

- Servidor (servidor)
- Username (Nombre de usuario)
- Password (Contraseña)
- Puerto (22)

![hosting](/pages/assets/screens/other/web-tools/cyberduck/sftp-connection.png){.thumbnail}

> [!success]
>
> - Puede guardar su contraseña en Cyberduck marcando `Add to keychain`{.action}. Si no marca la casilla, deberá introducir la contraseña para volver a conectarse a su espacio de alojamiento web.
> - Si no conoce todos sus datos FTP (servidor, identificadores, etc.), consulte la guía "[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)".
> 

La primera vez que se conecte a su espacio de alojamiento web, aparecerá una ventana con el título `Modified fingerprint`{.action}. Marque la casilla `Always`{.action} y acepte. Esto le permitirá certificar definitivamente el host de conexión (OVHcloud).

> [!success]
>
> - Le recomendamos que guarde sus datos de conexión mediante un marcador. Esto le permitirá guardar en la memoria cierta información de conexión.
> - Consulte esta sección de la guía: [Qué es un marcador?](#signet)
> 

#### Errores de conexión

Es posible que se haya producido un error al intentar conectarse a su espacio de alojamiento web. Estos son los 2 errores más frecuentes que puede encontrar.

- `Connection failed (<server-SFTP>) - DNS lookup for <server> failed`

En la mayoría de los casos, este error está relacionado con las claves que ha introducido y que probablemente sean incorrectas. Por lo tanto, debe comprobar la información de conexión que haya introducido.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/open-session-failed.png){.thumbnail}

> [!success]
>
> - Si no conoce todos sus datos FTP (servidor, identificadores, etc.), consulte la guía "[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)".
> 

- `Connection failed (<server-SFTP>) - Operation timed out`

Este mensaje también va acompañado de la mención `Operation timed out`. Este mensaje suele indicar que no se puede acceder al host o que éste es incorrecto. Debe comprobar la información de conexión que ha introducido.

Este error también puede deberse a un firewall o a una red local que bloquea el puerto 21 o 22 que se utiliza para conectarse al servidor. En ese caso, debe comprobar su configuración personal.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/connection-failed.png){.thumbnail}

> [!primary]
>
> - Le recordamos que el host de conexión para su espacio de alojamiento es `ftp.cluster0XX.hosting.ovh.net` (sustituya los `XXX` por su número de cluster).
> - Si lo necesita, consulte la guía "[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)".
>

<a name="signet"></a>

### ¿Qué es un marcador?

Para facilitar el acceso a su espacio de alojamiento web, le recomendamos que utilice los marcadores. Le permiten pre-registrar sus datos de conexión, evitando que los introduzca cada vez que se conecte.

Para añadir:

1. Conéctese al espacio FRP de su alojamiento web.
2. En la parte superior de la interfaz, en la barra de herramientas, haga clic en la pestaña `Bookmarks`{.action} (cuadro naranja en la imagen siguiente).
3. En la parte inferior izquierda de la ventana, haga clic en el icono `+`{.action} para añadir un nuevo marcador.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/add-signet.png){.thumbnail}

Aparecerá una ventana con la información de inicio de sesión y una nueva línea en la lista de marcadores. La próxima vez que inicie Cyberduck, podrá hacer doble clic en el marcador para conectarse más rápidamente.

### Transferir archivos

La transferencia de archivos le permite subir su sitio web a su espacio de alojamiento web. Por defecto, deberá subir sus ficheros al directorio (carpeta) `www`. Puede transferir sus archivos a través de varios métodos.

#### Mediante arrastrar

Para realizar la transferencia de sus archivos, seleccione y arrastre desde la ventana de la carpeta local (sus archivos en su máquina) a la ventana de Cyberduck (espacio de almacenamiento FTP de su alojamiento web). Una vez realizada esta acción, los archivos se colocarán automáticamente en cola para su envío al servidor. Se abrirá una ventana.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/drag-drop-transfert-file.png){.thumbnail}

#### A través del menú principal

En el menú de Cyberduck, haga clic en `File`{.action} y luego en `Upload...`{.action}. Seleccione los archivos que quiera transferir al servidor y haga clic en `Upload`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files.png){.thumbnail}

### Ver las transferencias en curso

Puede consultar el historial de transferencias realizadas al espacio de almacenamiento FTP de su alojamiento web. Así podrá encontrar:

- los archivos pendientes de subir al servidor remoto (todavía presentes en la cola o en proceso de envío);
- los archivos para los que no se ha podido realizar la transferencia;
- los archivos para los que la transferencia se ha realizado correctamente en el alojamiento web remoto.

Existen dos formas de visualizar esta ventana:

- automáticamente cuando se inicia una transferencia;
- haciendo clic en `Window`{.action} (en el menú principal) y luego en `Transfers`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

### Acciones posibles en un archivo o carpeta

Haga doble clic en un archivo o carpeta para:

- Leer la información de un archivo o carpeta y modificar sus permisos (CHMOD).
- Editar el archivo con la aplicación que elija.
- Cambiar el nombre del archivo o carpeta.
- Eliminar el archivo o la carpeta.
- Descargar los elementos seleccionados.
- Crear una nueva carpeta o archivo.

La lista anterior no es exhaustiva. Si lo necesita, visite el [sitio web oficial](https://cyberduck.io/) de Cyberduck.

### Información útil

#### Derechos de archivos y carpetas

Puede modificar los permisos (CHMOD) de sus archivos y carpetas presentes en el alojamiento web.

Estos últimos se reparten en 3 familias:

- Owner (Propietario)
- Group (Group)
- Others (Otros)

Haga doble clic en un archivo o carpeta y seleccione `Info`{.action}. Se abrirá la siguiente ventana:

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

Haga clic en la pestaña `Permissions`{.action} y realice los cambios deseados:

- UNIX Permissions: este valor define los derechos de las 3 familias (Propietario, grupo y otros).
- Marque las casillas deseadas: el valor se actualizará automáticamente para los permisos UNIX.

#### Reapertura del sitio web

Puede reabrir su sitio web utilizando un comando personalizado.

En la mayoría de los casos, esta operación se realiza tras un cierre por seguridad del espacio de almacenamiento FTP de un alojamiento web por parte de OVHcloud tras un ataque de pirateo informático.

En el menú de Cyberduck, haga clic en `Go`{.action} y seleccione `Send command...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/send-ftp-command.png){.thumbnail}

En la nueva ventana, introduzca el comando `CHMOD 705 /` y haga clic en `Send`{.action} para ejecutar el comando. En confirmación, el mensaje `200 Permissions changed on /` debería aparecer en el recuadro de abajo.

Para comprobar que la reapertura es efectiva, inicie sesión en su sitio web desde un navegador web.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/site-chmod-705-command.png){.thumbnail}

> [!warning]
>
> - Este comando no funciona en SFTP. Para ello, utilice una conexión FTP.
> - Recuerde que debe probar la pantalla después de un máximo de 3 horas. De hecho, nuestros robots pasan cada 3 horas comprobando los cambios de estado. En función del momento en el que se realice la operación, podrá restaurar el sitio web más o menos rápidamente.
> - Si el plazo de 3 horas ha expirado y su sitio web todavía no está en línea, contacte con el soporte de OVHcloud.
>

## Más información <a name="go-further"></a>

[Tutorial - Utilizar FileZilla con el alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).