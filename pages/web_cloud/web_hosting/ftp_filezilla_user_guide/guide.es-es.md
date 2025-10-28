---
title: "Web hosting - Cómo utilizar FileZilla"
excerpt: "Descubra cómo conectarse al espacio de almacenamiento de un alojamiento web de OVHcloud y gestionar los datos alojados con el programa FileZilla"
updated: 2025-09-12
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
> **Desactivación de la herramienta FTP Explorer/Net2FTP**
>
> Para los alojamientos web, ya no es posible conectarse al espacio de almacenamiento FTP mediante la herramienta en línea FTP Explorer/Net2FTP. Para seguir conectándose por FTP a su alojamiento web, utilice los programas [FileZilla](https://filezilla-project.org/download.php) o [Cyberduck](https://cyberduck.io/).

## Objetivo

FileZilla es un programa gratuito disponible en varios sistemas operativos (Windows, macOS, etc.).

Permite subir archivos o su sitio web [conectándose al espacio de almacenamiento](/pages/web_cloud/web_hosting/ftp_connection) de su alojamiento web.

**Descubra cómo conectarse al espacio de almacenamiento de un alojamiento web de OVHcloud y gestionar los datos alojados con el programa FileZilla.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Tener contratado un [plan de hosting](/links/web/hosting).
- Haber instalado FileZilla en su ordenador. Está disponible de forma gratuita en la página [filezilla-project.org](https://filezilla-project.org/download.php).

## Presentación de la interfaz <a name="interface"></a>

/// details | Haga clic aquí para ver el contenido de esta sección.

![FileZilla-interface](/pages/assets/screens/other/web-tools/filezilla/main-interface.png){.thumbnail}

- La parte superior **del recuadro** permite una conexión rápida al alojamiento, introduciendo el nombre del **host**, el nombre de **usuario**, la **contraseña** asociada y el número de **puerto** utilizado.
- **zona 1**: Información sobre el historial de operaciones, la conexión al espacio FTP, las transferencias de archivos, los errores, etc. Para más información, consulte la [documentación oficial de FileZilla](https://filezilla-project.org/).
- **zona 2**: Árbol de directorios/archivos locales en su ordenador.
- **zona 3**: Árbol de directorios/archivos remotos cuando se conecta al alojamiento.
- **zone 4**: Lista de carpetas/archivos en el directorio seleccionado localmente en su ordenador.
- **zona 5**: Lista de carpetas/archivos remotos en el directorio seleccionado en su alojamiento.
- **zona 6**: Lista de las operaciones de transferencia en curso, en espera o en error entre su ordenador y su alojamiento.

///

## Procedimiento

### 1 - Obtener la información de conexión al espacio de almacenamiento del alojamiento web <a name="part-1"></a>

Realice las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
3. En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}.
4. En la nueva página, aparecerá la información relativa al espacio de almacenamiento. Descubra los siguientes elementos:
    - El `Servidor FTP y SFTP` representado con el siguiente formato: `ftp.clusterXXX.hosting.ovh.net` (donde cada uno de los 3 `X` corresponde a un número comprendido entre `0` y `9`).
    - Uno de los usuarios presentes en la columna `Usuario` de la tabla situada en la parte inferior de la página. Si lo desea, puede utilizar el `Usuario principal`.
    - El número del `Puerto FTP` o el número del `Puerto SFTP` en función del protocolo de conexión que quiera utilizar para conectarse a su espacio de almacenamiento.

> [!primary]
>
> Por motivos de seguridad, la contraseña de un usuario no aparece en la pestaña `FTP - SSH`{.action}. Si ha olvidado la contraseña, consulte [esta guía](/pages/web_cloud/web_hosting/ftp_change_password) para modificarla.

### 2 - Conectarse al espacio de almacenamiento de su alojamiento gracias a FileZilla

Existen dos protocolos de transferencia de archivos para conectarse:

- **F**ile **T**ransfer **P**rotocol (**FTP**).
- **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**).

> [!primary]
>
> Siempre que sea posible, le recomendamos que utilice el protocolo **SFTP** para conectarse a su espacio de almacenamiento con FileZilla.
>
> El protocolo **SFTP** cifra los intercambios de datos entre su dispositivo y su alojamiento web. Sin embargo, si tiene restricciones de uso, como la segmentación de usuarios o carpetas, deberá utilizar el protocolo **FTP**.

**Haga clic en el protocolo de conexión que desee para ver las explicaciones.**

/// details | Conectarse por SFTP al espacio de almacenamiento de un alojamiento web con FileZilla. <a name="sftp"></a>

El **SFTP** utiliza, al igual que el SSH, el puerto 22 por defecto en lugar del puerto 21. Si utiliza un plan de hosting Cloud Web, deberá utilizar el puerto que aparece en su [área de cliente de OVHcloud](/links/manager). El puerto 22 está desactivado por seguridad en SSH y SFTP para los alojamientos Cloud Web.

> [!success]
>
> SFTP puede activarse gratuitamente en todos los planes de hosting de OVHcloud (excepto en los antiguos planes 60free y demo1g).
>

**Comprobar la activación del protocolo SFTP**

Para ello, vuelva a la pestaña `FTP-SSH`{.action} de su [área de cliente de OVHcloud](/links/manager), tal y como se indica en la [primera parte](#part-1) de esta guía.

En la tabla que aparece en la parte inferior de la página, localice la columna `SFTP` para comprobar que el usuario (presente en la columna `Usuario` de la tabla) dispone de un acceso SFTP activo. En caso contrario, aparecerá la indicación `Desactivado`.

Si el acceso SFTP del usuario correspondiente es `Desactivado`, lleve a cabo los siguientes pasos:

- Para los planes Personal, marque la casilla situada a la izquierda de la mención `Desactivado` en la tabla.

- Para los planes Profesional y Performance:

    - 1: Haga clic en el botón `...`{.action} a la derecha de la línea correspondiente al usuario y luego en `Editar`{.action}.
    - 2: En la nueva ventana, en la sección `Protocolos de conexión`, seleccione la opción `FTP y SFTP`{.action} y haga clic en `Siguiente`{.action}.
    - 3: Compruebe el resumen del cambio solicitado y haga clic en `Aceptar`{.action}.

**Conectarse por SFTP con FileZilla**

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Complete la información en la Barra de conexión rápida siguiendo la siguiente tabla:

|Información que debe introducir|Detalles|
|---|---|
|Host| Dirección del servidor que permite acceder al espacio de almacenamiento de su alojamiento web.<br> Normalmente tiene la siguiente forma: `ftp.clusterXXX.hosting.ovh.net` (los `XXX` representan el número del cluster en el que se encuentra su alojamiento web).|
|Usuario|Identificador que le permite acceder al espacio de almacenamiento de su alojamiento.|
|Contraseña|Contraseña asociada al usuario.|
|Puerto|Introduzca el número del puerto SFTP recuperado anteriormente en la [primera parte](#part-1) de esta guía para una conexión SFTP.|

Una vez que haya introducido todo correctamente en el cuadro **1** de la imagen de abajo, haga clic en `Conexión rápida`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Se abrirá un cuadro de diálogo (ver la imagen a continuación) para certificar la conexión con el host al que se va a conectar. Al estar conectado a un host de OVHcloud, puede marcar la casilla *Confiar siempre en ese host y añadir esta clave a la caché* para que el software no se lo pida de nuevo en el futuro.

![hosting](/pages/assets/screens/other/web-tools/filezilla/unknown-host-key-message.png){.thumbnail}

///

/// details | Conectarse por FTP al espacio de almacenamiento de un alojamiento web con FileZilla.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Complete la información en la Barra de conexión rápida siguiendo la siguiente tabla:

|Información que debe introducir|Detalles|
|---|---|
|Host| Dirección del servidor que permite acceder al espacio de almacenamiento de su alojamiento web.<br> Normalmente tiene la siguiente forma: `ftp.clusterXXX.hosting.ovh.net` (los `XXX` representan el número del cluster en el que se encuentra su alojamiento web).|
|Usuario|Identificador que le permite acceder al espacio de almacenamiento de su alojamiento.|
|Contraseña|Contraseña asociada al usuario.|
|Puerto|Normalmente, el software lo completa automáticamente. De lo contrario, introduzca el puerto 21 para una conexión FTP.|

Una vez que haya introducido todo correctamente en el cuadro **1** de la imagen de abajo, haga clic en `Conexión rápida`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Si la conexión se ha realizado correctamente, se le notificará a través del estado indicado en el recuadro **2** de la imagen anterior. Puede consultar los directorios/carpetas y archivos que ya tiene en su alojamiento (recuadro **3**).

///

#### Errores de conexión

**Haga clic en el error que ha encontrado para ver la solución.**

/// details | Authentication failed - Could not connect to server 

El siguiente mensaje indica un error de identificación durante la conexión por FTP o SFTP al alojamiento compartido:

![hosting](/pages/assets/screens/other/web-tools/filezilla/authentification-failed-could-not-connect-server.png){.thumbnail}

Este tipo de mensaje se genera por un error en el par Login/Contraseña.

Compruebe sus claves para asegurarse de que no se ha introducido ningún error. Si lo necesita, puede [cambiar la contraseña del acceso FTP](/pages/web_cloud/web_hosting/ftp_change_password) de su alojamiento web directamente en el [área de cliente de OVHcloud](/links/manager).

///

/// details | Connection timed out after 20 seconds of inactivity - Could not connect to server

En el siguiente caso, el error se genera con un nombre de host incorrecto:

![hosting](/pages/assets/screens/other/web-tools/filezilla/connection-timed-out-after-20s.png){.thumbnail}

Compruebe que la contraseña del host se corresponde con el nombre del host que haya indicado en el [área de cliente de OVHcloud](/links/manager).

///

### 3 - Transferencia de archivos

Para transferir sus archivos por (S)FTP, puede seleccionarlos y arrastrarlos y soltarlos desde la ventana izquierda *(ordenador)* a la derecha *(alojamiento)* (**áreas 4 y 5** descritas en la sección de este tutorial sobre [la interfaz](#interface) de FileZilla).

Seleccione el directorio de destino en la ventana derecha.

Una vez realizada esta acción, los archivos se pondrán automáticamente en espera para ser depositados en el servidor.

![hosting](/pages/assets/screens/other/web-tools/filezilla/drag-drop-en.png){.thumbnail}

### 4 - Otras funcionalidades de FileZilla

**Haga clic en los títulos de abajo para ver sus respectivos contenidos.**

/// details | Vista de la cola de espera

Hay disponible una vista de la cola (**zona 6** descrita en la sección de este tutorial sobre [la interfaz](#interface) de FileZilla).

En esta zona se encuentran:

- los archivos pendientes de ser depositados en el servidor remoto que aún estén en la cola de espera;
- los archivos en los que no se ha podido transferir;
- los archivos para los que se ha realizado la transferencia en el alojamiento remoto.

![hosting](/pages/assets/screens/other/web-tools/filezilla/waiting-list-view.png){.thumbnail}

///

/// details | Menú contextual del servidor

Haga clic derecho en uno de los archivos del **área 5** (descrito en la sección de este tutorial sobre [la interfaz](#interface) de FileZilla).

Aparecerá un menú contextual con varias opciones:

- Descargar: Descarga el archivo en la carpeta local abierta.
- Añadir los archivos a la cola de espera: Añade el archivo a la cola de espera, que le permite, por ejemplo, retrasar la descarga de los datos.
- Mostrar/Editar: Permite ver o editar directamente un archivo del alojamiento. Sin embargo, es necesario tener un programa capaz de leer el archivo instalado en su equipo.
- Crear una carpeta: Permite crear una nueva carpeta directamente en el alojamiento remoto.
- Actualizar: Actualiza la visualización de los datos para mostrar correctamente los diferentes archivos.
- Eliminar: Le permite borrar el archivo seleccionado.
- Renombrar: Le permite renombrar el archivo seleccionado.
- Copiar la(s) dirección(s) al portapapeles: Permite copiar automáticamente el vínculo directo al archivo seleccionado. Ejemplo de URL que puede generarse: `ftp://loginftp@ftp.clusterXXX.hosting.ovh.net/www/my_folder1/my_file.jpg`.
- Permisos de archivo: Le permite cambiar los permisos de los archivos (Chmod).

![hosting](/pages/assets/screens/other/web-tools/filezilla/contextual-menu-server.png){.thumbnail}

///

/// details | Permisos de acceso (Chmod) a archivos y carpetas

Haga clic derecho en uno de los archivos del servidor y seleccione `Permisos de archivo...`{.action}.

Puede modificar los permisos de acceso (Chmod) de sus archivos y carpetas presentes en el alojamiento.

Por lo general, es más fácil manejar los permisos de Chmod con el valor numérico `XXX` (compuesto por 3 dígitos que pueden ir de 0 a 7). El grupo de permisos puede entonces ir desde `000` (sin derechos) hasta `777` (todos los derechos).

> [!alert]
>
> Atención: No es recomendable asignar los permisos Chmod 000 a sus carpetas o archivos. ya no podrá (al menos por FTP) gestionar este elemento (incluso como administrador FTP).
>
> Lo mismo sucede con los permisos Chmod 777, ya que, a diferencia del Chmod 000, todo el mundo puede actuar sobre el directorio o el archivo, lo que conlleva un fallo de seguridad considerable para los datos alojados.
>

El primero de los tres dígitos `XXX` que definen el Chmod corresponde a los derechos del propietario/administrador, el segundo a los derechos de grupo (raramente utilizado y generalmente igual a 0) y el tercero a los visitantes de su sitio web en su alojamiento.

Por defecto, le recomendamos que no sobrepase los permisos Chmod **705** para las carpetas y los permisos de Chmod **604** para los archivos.

Cuanto más alto sea el número, mayor será el número de permisos.

![hosting](/pages/assets/screens/other/web-tools/filezilla/change-file-attributes.png){.thumbnail}

Introduzca los permisos que desee asignar. El valor Chmod se actualizará automáticamente.

Puede marcar la casilla "Seguridad en las subcarpetas".

Esto modificará los permisos de la carpeta en cuestión, así como los archivos y carpetas que puedan estar presentes en ella.

///

/// details | Reapertura del sitio

> [!primary]
>
> Independientemente de su acción, su alojamiento puede desactivarse debido a la detección de archivos maliciosos o no autorizados en su alojamiento por nuestros sistemas de seguridad.
>
> En ese caso, deberá [proteger sus soluciones](/pages/web_cloud/web_hosting/diagnostic_403_forbidden#step-2) corrigiendo los fallos de seguridad indicados en la notificación de bloqueo recibida por correo electrónico.
>

A continuación, haga clic en `Servidor`{.action} y seleccione `Introducir un comando personalizado`{.action} (también puede llamarse `Introduzca un comando FTP`{.action}).

Introduzca el siguiente comando:

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> Este comando no funciona en SFTP.
>

![hosting](/pages/assets/screens/other/web-tools/filezilla/site-chmod-705-command.png){.thumbnail}

Si ha obtenido el error `550 would not change perms on /. not such file or directory`, utilice el siguiente comando:

```bash
SITE CHMOD 705 .
```

> [!primary]
>
> Para comprobar que la reapertura es efectiva, pruebe su sitio web desde un navegador de internet al cabo de unos minutos.
>

> [!warning]
>
> Pruebe la pantalla después de 3 horas máximo.<br>
> De hecho, nuestros robots pasan cada tres horas como mínimo para comprobar los cambios de estado.<br>
> En función del momento en que se realice la operación anterior, la restauración de la visualización del sitio web podrá ser más o menos rápida.<br>
> Si el plazo de 3 horas ha expirado y su sitio web todavía no está en línea, compruebe que el pedido se haya entregado correctamente repitiendo la operación.<br>
> Si todavía no funciona, contacte con el soporte.
> 

///

/// details | Transferencia de archivos binarios

Para archivos binarios, como archivos de tipo **CGI**, puede ser interesante elegir cómo se realizará la transferencia.

Para cambiar el tipo de transferencia, seleccione `Transferencia`{.action} en el menú principal y luego `Tipo de transferencia`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/transfert-binary-files.png){.thumbnail}

///

/// details | Comparación de directorios

![hosting](/pages/assets/screens/other/web-tools/filezilla/comparison-tool.png){.thumbnail}

La opción de comparación de archivos muestra colores en los **cuadros 4** y **5** (presentados en la sección de este tutorial sobre [la interfaz](#interface) de FileZilla). Esta opción permite destacar las diferencias entre los archivos y carpetas locales y los del servidor. 

Pulse con el botón derecho del ratón sobre el icono para cambiar el modo de comparación. A continuación, podrá activar o desactivar la opción, así como:

- comparar el tamaño de los archivos;
- comparar la fecha y hora;
- ocultar los archivos idénticos.

**Significado de los colores:**

- Amarillo: El archivo sólo existe en un lado.
- Verde: El archivo es más reciente que el archivo sin color del otro lado.
- Rojo: Los tamaños de los archivos son diferentes.

///

## Más información <a name="go-further"></a>

A continuación puede consultar nuestra guía para [resolver los errores recurrentes durante el uso de un programa FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems).

En términos más generales, consulte [todas nuestras guías relativas a los alojamientos compartidos](/products/web-cloud-hosting).

No dude en consultar la [página oficial de FileZilla](https://filezilla-project.org/).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).