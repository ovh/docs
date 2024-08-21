---
title: "Utilizar SSH en un web hosting"
excerpt: "Descubra cómo conectarse y utilizar el acceso SSH en un alojamiento web de OVHcloud"
updated: 2024-01-30
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Los planes de hosting de OVHcloud permiten disponer de un espacio de almacenamiento en el que publicar los archivos de sus sitios web o aplicaciones. Para acceder a este espacio de almacenamiento, es necesario tener un usuario FTP o SSH y las contraseñas asociadas.

**Esta guía explica cómo conectarse y utilizar el acceso SSH en un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](/links/web/hosting) con acceso SSH.
- Disponer de las claves necesarias para conectarse por SSH al espacio de almacenamiento.
- Conectarse al [área de cliente de OVHcloud](/links/manager){.external}, en la sección `WebCloud`{.action}.

> [!warning]
> 
> Es posible acceder por SSH a un alojamiento web de OVHcloud desde [el plan Pro](/links/web/hosting-compare).

## Procedimiento

### 1\. Comprobar que el acceso SSH está activo <a name="sshcheck"></a>

En primer lugar, conéctese al [área de cliente de OVHcloud](/links/manager) en la sección `Web Cloud`{.action} y haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}. Se mostrará la información relativa a su espacio de almacenamiento. 

En la columna «SSH» podrá consultar si el usuario SSH (o «Login SSH») dispone de un acceso SSH activo. En caso de que no esté activado, aparecerá la mención «Desactivado».

![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}

Para activarlo, haga clic en el botón `(...)`{.action} situado al final de la línea correspondiente al usuario y seleccione `Editar`{.action}. Aparecerá una ventana en la que podrá activar el acceso SSH. Si no tiene la opción de activarlo, asegúrese de que su [plan de hosting de OVHcloud](/links/web/hosting) dispone de un acceso SSH.

### 2\. Obtener los datos de conexión <a name="sshlogin"></a>

Para conectarse por SSH a su espacio de almacenamiento, consulte la pestaña `FTP - SSH`{.action}:

- **Usuario SSH activo**: Puede consultarlo en la columna "**Usuario**" de la tabla. Le recordamos que este usuario debe [disponer de un acceso SSH activo](#sshcheck).
- **Contraseña del usuario SSH**: Si ha olvidado su contraseña, podrá modificarla haciendo clic en el botón  `...`{.action} > `Cambiar la contraseña`{.action}.
- **Dirección del servidor SSH**: Introduzca la indicación "**Servidor SSH**".
- **Puerto de conexión al servidor SSH**: Introduzca la indicación "**Puerto SSH**".

### 3\. Conectarse por SSH al espacio de almacenamiento

Para conectarse por SSH, utilice un terminal de línea de comandos. De este modo podrá interactuar directamente con el espacio de almacenamiento. 

> [!primary]
>
> En MacOS, Linux y Windows 10, esta herramienta está instalada por defecto. Si tiene un entorno Windows más antiguo, deberá instalar un programa como PuTTY o añadir la funcionalidad OpenSSH.

Existen dos formas de conectarse según el método que utilice:

#### 3.1\. Desde un terminal

> [!warning]
> En nuestros planes de hosting, no hay acceso «root» o superusuario por SSH.

Una vez abierto el terminal, utilice el siguiente comando, sustituyendo los elementos "yurlogin", "ssh.cluster000.hosting.ovh.net" y "22" por los correspondientes a sus identificadores SSH. 

```bash
ssh yourlogin@ssh.cluster000.hosting.ovh.net -p 22
```

Después de ejecutar el comando, el sistema le pedirá que introduzca la contraseña del usuario SSH. Una vez conectado, vaya al siguiente paso: [Interactuar por SSH con su espacio de almacenamiento](./#4-interactuar-por-ssh-con-su-espacio-de-almacenamiento).

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

#### 3.2\. Desde un software

Una vez abierto el programa (PuTTY, por ejemplo), introduzca las claves de conexión. Tenga en cuenta que el procedimiento será diferente en función del programa que utilice. A continuación le ofrecemos, a modo de recordatorio, la información que deberá introducir:

- **Servidor SSH**: Indique la dirección del servidor SSH que anotó en el [paso 2](#sshlogin). Según el programa utilizado, puede denominarse «Dirección del servidor», «Nombre del host» o incluso «Host Name».
- **Puerto de conexión**: Introduzca el puerto de conexión que anotó en el [paso 2](#sshlogin).
- **Login SSH**: Introduzca el usuario SSH. Según el programa utilizado, puede denominarse «Nombre de usuario», «Identificador», «Login» o incluso «Username».
- **Contraseña del usuario SSH**: Es la contraseña asociada al usuario SSH. Según el programa utilizado, puede denominarse «contraseña» o «password».

Una vez conectado, vaya al siguiente paso.

### 4\. Interactuar por SSH con su espacio de almacenamiento

Para interactuar con su espacio de almacenamiento, deberá utilizar una serie de comandos (cada uno tiene un significado directo procedente del inglés). Incluimos a continuación la lista de comandos necesarios. **Tenga en cuenta que esta lista no es exhaustiva**.

|Comando|Significado en inglés|Descripción| 
|---|---|---|
|pwd|Print working directory|Muestra el directorio de trabajo actual.| 
|cd `arg`|Change directory|Permite cambiar el directorio de trabajo por el indicado en lugar de `arg`.|
|cd `..`|Change directory|Permite cambiar el directorio de trabajo, subiendo un nivel en el árbol de directorios.|
|cd|Change directory|Si no especifica ningún argumento, le permite reposicionarse en la raíz de su espacio de almacenamiento (home).|
|ls|List|Permite desplegar el contenido del directorio de trabajo. Puede añadir atributos para modificar la vista del resultado del comando (como `ls -ulhG`).| 
|chmod `droit` `arg`|Change mode|Permite cambiar los permisos del archivo o del directorio mencionado como argumento `arg`.| 
|mkdir `arg`|Make directory|Permite crear un repertorio con el nombre del argumento `arg`.| 
|touch `arg`|Touch|Permite crear un archivo vacío, si todavía no existe, con el nombre mencionado como argumento `arg`.|
|rm `arg`|Remove|Permite eliminar el archivo mencionado como argumento `arg`.| 
|rm -r `arg`|Remove|Permite eliminar el repertorio mencionado como argumento `arg`, así como todo el contenido de manera recursiva.| 
|mv `arg1` `arg2`|Move|Permite renombrar o desplazar un elemento (especificado como `arg1`) en una nueva localización (especificada como `arg2`).| 

A través del comando, también podrá lanzar un script utilizando una versión específica de PHP. Por ejemplo, para la versión de PHP 7.1, utilice el siguiente comando adaptando los elementos a su caso particular:

```sh
/usr/local/php7.1/bin/php myscript.php
```

Según la versión de PHP que utilice, es posible que tenga que modificar el entorno de ejecución por motivos de compatibilidad. Para más información, consulte nuestra documentación "[Web hosting : entorno, versión PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

> [!primary]
>
> También es posible copiar archivos y/o carpetas utilizando **S**ecure **C**opy **P**rotocol (**SCP**).
> Este protocolo utiliza el protocolo SSH para duplicar contenido de forma segura entre:
> 
> - un equipo/dispositivo local a un servidor remoto
> - un servidor remoto y un equipo/dispositivo local
> - dos servidores remotos
>
> Para más información sobre el uso del comando `scp` con nuestros planes de hosting de OVHcloud, consulte nuestra guía "[Web hosting - Copiar archivos con el comando SCP](/pages/web_cloud/web_hosting/using-scp-command)"
>

## Más información

[Web hosting : entorno, versión PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).