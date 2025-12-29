---
title: "Web hosting - Cómo utilizar el acceso SSH"
excerpt: "Descubra cómo conectarse y utilizar el acceso SSH de un alojamiento web de OVHcloud"
updated: 2025-09-08
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

## Objetivo

Los planes de hosting de OVHcloud permiten disponer de un espacio de almacenamiento en el que podrá publicar los archivos de sus sitios web o aplicaciones. Para acceder a este espacio, es necesario tener las claves FTP o SSH.

**Esta guía explica cómo conectarse y utilizar el acceso SSH en un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](/links/web/hosting) con acceso SSH.
- Conectarse al [área de cliente de OVHcloud](/links/manager), en la sección `WebCloud`{.action}.

> [!warning]
> 
> Es posible acceder por SSH a un alojamiento web de OVHcloud desde [el plan Pro](/links/web/hosting-compare).

## Procedimiento

Para conectarse y utilizar el acceso SSH de su alojamiento web, necesitará los siguientes elementos:

- el usuario SSH activo;
- la contraseña asociada al usuario SSH;
- la dirección del servidor SSH de su alojamiento web;
- el puerto de conexión al servidor SSH de su alojamiento web.

### 1 - Asegúrese de que el acceso SSH está activo para el usuario SSH elegido <a name="user-ssh-enablement"></a>

Haga clic en las fichas siguientes para ver cada uno de los **4** pasos.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la nueva página, aparecerá la información relativa al espacio de almacenamiento.
>>
>> En la tabla, localice la columna `SSH` para verificar que el usuario SSH (presente en la columna `Usuario` de la tabla) dispone de un acceso SSH activo. En caso contrario, aparecerá la indicación `Desactivado`.
>>
>> ![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}
>>
>> Si el acceso SSH del usuario en cuestión es `Desactivado`, lleve a cabo los siguientes pasos:
>>
>> - 1: Haga clic en el botón `...`{.action} a la derecha de la línea correspondiente al usuario y luego en `Editar`{.action}.
>> - 2: En la nueva ventana, en la sección `Protocolos de conexión`, seleccione `FTP, SFTP y SSH`{.action} y haga clic en `Siguiente`{.action}.
>> - 3: Revise el resumen del cambio solicitado y haga clic en `Aceptar`{.action}.
>>
>> > Si no tiene la posibilidad de activarlo, asegúrese de que [su plan de hosting de OVHcloud](/links/web/hosting) dispone de acceso SSH.

### 2 - Obtenga la información necesaria para conectarse por SSH <a name="sshlogin"></a>

Haga clic en las fichas siguientes para ver cada uno de los **4** pasos.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la nueva página, descargue los elementos descritos en la siguiente tabla:
>>
>> |Elemento|Descripción|
>> |---|---|
>> |**Dirección del servidor SSH**| Encontrará la mención `Servidor SSH`. Se presenta en la forma `ssh.clusterXXX.hosting.ovh.net` (donde cada uno de los 3 `X` corresponde a un número comprendido entre `0` y `9`).|
>> |**Puerto de conexión al servidor SSH**| Encontrará la mención `Puerto SSH`. Por defecto, el número de puerto SSH es el `22`.|
>> |**Usuario SSH activo**| En la tabla de la parte inferior de la página, puede consultarlo en la columna `Usuario`.<br>Le recordamos que este usuario debe [disponer de acceso SSH activo](#user-ssh-enablement).|
>> |**Contraseña del usuario SSH**| Si ha olvidado la contraseña, haga clic en el botón `...`{.action} situado al final de la línea correspondiente al usuario y seleccione `Cambiar la contraseña`{.action}.|

### 3 - Conéctese por SSH al espacio de almacenamiento de su alojamiento web

Para conectarse por SSH, utilice un terminal para interactuar directamente con su espacio de almacenamiento mediante líneas de comandos.

> [!primary]
>
> Los terminales de comando se instalan por defecto en macOS, Linux y Windows 10. Para un entorno Windows más antiguo, deberá instalar un programa como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) o añadir la funcionalidad OpenSSH.

Existen dos formas de conectarse por SSH a un alojamiento web. 

**Haga clic a continuación en el método de conexión que prefiera para ver las explicaciones.**

/// details | Desde un terminal

> [!warning]
>
> No hay acceso «superusuario» (o «root») por SSH en nuestros planes de hosting.

Una vez abierto el terminal, utilice el siguiente comando sustituyendo los elementos `yourlogin`, `ssh.clusterXXX.hosting.ovh.net` y `22` por los correspondientes a sus claves SSH.

```bash
ssh yourlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

Una vez enviado el comando, deberá introducir la contraseña del usuario SSH.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

///

/// details  Desde un programa

Una vez abierto el programa (PuTTY, por ejemplo), introduzca los datos de conexión SSH. Esta operación no se explica en detalle en esta guía. A continuación le ofrecemos un recordatorio de la información que deberá introducir:

- **Servidor SSH**: indique la dirección del servidor SSH recuperada en la [parte 2](#sshlogin). Según el programa utilizado, la denominación puede ser similar a: «Dirección del servidor», «Nombre del host» o incluso «Host Name».
- **Puerto de conexión**: Introduzca el puerto de conexión SSH recuperado en la [parte 2](#sshlogin).
- **Usuario SSH**: Introduzca el usuario SSH. Según el programa utilizado, la denominación puede asemejarse a: «Nombre de usuario», «Identificador», «Usuario» o incluso «Username».
- **Contraseña del usuario SSH**: Indique la contraseña asociada al usuario SSH.<br><br> Según el programa utilizado, su denominación puede parecerse a la de «Password».

///

Una vez que se haya conectado, vaya al siguiente apartado.

### 4 - Interactúe por SSH con su espacio de almacenamiento <a name="ssh-using"></a>

Para interactuar con su espacio de almacenamiento, debe utilizar comandos. Estos tienen un significado directo del inglés. Si lo necesita, puede consultar la lista que aparece a continuación. Atención: **esta no es exhaustiva**.

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

También puede ejecutar un script utilizando una versión específica de PHP. Por ejemplo, para la versión de PHP 7.1, utilice el siguiente comando. Adapte sus elementos a su caso particular.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Según la versión de PHP que quiera utilizar, es posible que sea necesario modificar el entorno de ejecución por motivos de compatibilidad. Para más información, consulte nuestra guía «[Web hosting - Entorno, versión PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)».

> [!primary]
>
> También es posible copiar archivos y/o carpetas utilizando **S**ecure **C**opy **P**rotocol (**SCP**).
> Este protocolo utiliza el protocolo SSH para duplicar contenido de forma segura entre:
>
> - un equipo/dispositivo local y un servidor remoto
> - dos servidores remotos
>
> Para más información sobre el uso del comando `scp` con nuestros planes de hosting de OVHcloud, consulte nuestra guía «[Web hosting - Copiar archivos con el comando SCP](/pages/web_cloud/web_hosting/using-scp-command)».

## Más información

[Web hosting - Entorno, versión PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).