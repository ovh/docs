---
title: Cómo crear y utilizar claves de autenticación para las conexiones SSH a los servidores de OVHcloud
excerpt: Cómo crear pares de claves para OpenSSH en su dispositivo local y cómo utilizarlos para establecer conexiones seguras a su servidor dedicado o VPS
updated: 2025-01-06
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

El protocolo SSH permite establecer un canal de comunicación seguro en las redes públicas en una arquitectura cliente-servidor. Se pueden utilizar pares de claves para autenticar estas conexiones SSH entre dos hosts de confianza, como un equipo de escritorio y un servidor remoto.

Un conjunto de claves consta de una clave pública que se puede compartir y una clave privada que permanece secreta. La clave pública, situada en un servidor, permite que cualquier cliente que disponga de la clave privada correspondiente se conecte a él sin tener que introducir una contraseña.

Este método de comunicación suele ser el mejor equilibrio entre la seguridad y la comodidad.

**Obtenga información acerca de cómo crear y administrar pares de claves de autenticación en su dispositivo local y usarlos para conectarse a servidores remotos.**

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal) o un [VPS](/links/bare-metal/vps) en su cuenta de OVHcloud
- Una aplicación de conexión remota compatible con el protocolo OpenSSH

> [!primary]
> Esta guía no se aplica a las conexiones a sistemas operativos estándar **Windows Server**, ya que se basan por defecto en el Protocolo de escritorio remoto (RDP). Sin embargo, las conexiones SSH se utilizan para el modo de rescate de OVHcloud.
>
> Para más información, consulte la sección [Más información](#gofurther) de esta guía.
>

## Procedimiento

<a name="getstarted"></a>

No olvide consultar nuestras guías Primeros pasos:

- para un [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server);
- para un [servidor dedicado de la gama Eco](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco);
- para un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Creación de pares de claves para las conexiones OpenSSH

Las siguientes instrucciones explican cómo crear y administrar pares de claves para conexiones remotas con **OpenSSH** en **línea de comandos**. La mayoría de los sistemas operativos actuales incluyen esta función sin necesidad de instalar software adicional.

Si prefiere una interfaz gráfica de usuario, existen numerosas aplicaciones de software para cada tipo de sistema operativo que le permiten conectarse a hosts remotos a través del protocolo OpenSSH.

Por ejemplo, [PuTTY](https://putty.org/) es un cliente SSH de código abierto con muchas funciones útiles. Para más información sobre cómo utilizarlo para conectarse a los servidores de OVHcloud, consulte nuestro tutorial:

- [Cómo usar PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

> [!primary]
>
> Si recibe mensajes de error al intentar iniciar sesión, asegúrese de que la configuración y la información de inicio de sesión que utiliza son correctas y de que tanto el sistema como las aplicaciones instaladas se actualizan correctamente. Si recibe un mensaje de aviso del tipo `REMOTE HOST IDENTIFICATION HAS CHANGED`, consulte nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### Configuración de pares de claves desde una distribución GNU/Linux o macOS

/// details | Despliegue esta sección

Abra la aplicación de línea de comandos (`Terminal`) en el dispositivo local.

Asegúrese de que tiene una carpeta denominada `.ssh` en el directorio `$HOME`. Si la carpeta no existe, créela:

```bash
mkdir ~/.ssh
```

Utilice el comando `ssh-keygen` para crear un par de claves. La opción `-t` permite especificar el método de cifrado.

> [!primary]
>
> `Ed25519` se considera el método más seguro, pero `RSA` es una alternativa válida. Ambas son compatibles con el área de cliente de OVHcloud si desea [almacenar las claves públicas en su cuenta de cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

Ejemplos:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

En el siguiente símbolo del sistema se le solicitará que asigne un nombre a la clave recién creada o que utilice el nombre de archivo estándar:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Si confirma con `Entrada`{.action} sin escribir un nombre, se utilizará el nombre de archivo estándar (`id_rsa` en este ejemplo).

Si planea usar varios pares de claves en el futuro, escriba un nombre de archivo individual para identificar la clave. Para más información, consulte **Gestionar varias claves de autenticación en su dispositivo local**.

En los ejemplos de salida siguientes se seguirán utilizando los nombres de archivo `id_rsa` y `id_rsa.pub` a efectos de ilustración.

Puede proteger su llave SSH con una frase de contraseña en el siguiente indicador. Se recomienda hacerlo por motivos de seguridad.

> [!warning]
>
> Al utilizar claves de autenticación, el acceso remoto al servidor es tan seguro como el dispositivo cliente que almacena la clave privada. Por lo tanto, es importante proteger el dispositivo y los archivos clave que contiene contra el acceso no autorizado.
>
> Para mayor comodidad y seguridad, almacene las frases de contraseña en un gestor de contraseñas en su dispositivo, como la solución open source **KeePass**.
>

Todas las claves SSH se almacenan en el directorio por defecto `.ssh`. Los archivos de clave pública tendrán `.pub` anexado al nombre de archivo.

```console
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

Para ver y exportar su clave pública, utilice el comando `cat` en su archivo de clave `.pub` o ábralo con un editor de texto.

```bash
cat ~/.ssh/id_rsa.pub
```

```console
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

Copie esta cadena de clave para [añadirla a un nuevo servidor](#getstarted) o para [importarla al área de cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> En un terminal **macOS**, puede utilizar los comandos `pbcopy` y `pbpaste` para gestionar las cadenas de claves más rápidamente. Por ejemplo, utilice este comando para copiar la clave del archivo `id_rsa.pub` en el portapapeles:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Gestionar varias claves de autenticación en su dispositivo local

Puede utilizar varios pares de claves SSH para conectarse a diferentes hosts remotos o dispositivos LAN.

Como todos los ficheros clave deben colocarse en la carpeta `.ssh` del directorio `home` del usuario, los nombres de los ficheros deben ser diferentes. Cuando cree un nuevo par de claves y se le pida un nombre de archivo, escriba el nombre que desee, por ejemplo, el nombre del servidor.

Ejemplo de salida:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Al conectar con el servidor correspondiente, especifique el nombre del archivo de clave privada, además de los detalles del usuario y del servidor de conexión:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Ejemplo:

```bash
ssh -i ~/.ssh/myServer_rsa ubuntu@203.0.113.100
```

##### Uso del archivo "config"

La alternativa a añadir la opción `-i` cada vez es editar un archivo denominado `config` dentro de la carpeta `~/.ssh`. Permite configurar los detalles de las distintas conexiones (nombre de usuario, puerto, archivo de clave, parámetros opcionales, etc.)

Si este archivo existe dentro de `.ssh`, es probable que ya contenga información. En función de su entorno de trabajo, considere la posibilidad de crear una copia de seguridad del original.

Ejemplo de salida de la lista de contenido de la carpeta `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

El archivo `config` permite almacenar varias conexiones SSH y sus parámetros individuales, además de los valores estándar. El aprovechamiento de todo el potencial de este archivo puede llegar a ser complejo, ya que resulta especialmente útil para usuarios experimentados que gestionan varios servidores.

A continuación ofrecemos un ejemplo sencillo de cómo configurar una conexión SSH a un servidor.  
Abra el archivo y agregue las siguientes líneas en la parte superior:


```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Asegúrese de utilizar la dirección IP y el nombre de archivo de clave correctos. La primera línea, que empieza por `Host`, define el nombre de esta conexión (`dedicated_server` en este ejemplo).

A continuación, puede conectarse al servidor sustituyendo la dirección IP del servidor por el nombre de alias que identifica esta conexión (`Host`):

```bash
ssh username@connection_name
```

Ejemplo:

```bash
ssh ubuntu@dedicated_server
```

En el ejemplo anterior sólo se especificaron la IP de la instancia y el archivo de clave, pero se pueden agregar más detalles.  
Para configurar una conexión SSH a un segundo host remoto con el nombre de usuario "rocky", el puerto SSH modificado "49160" y la clave privada en el archivo "myVPS_rsa", extienda el contenido del archivo como se muestra en este ejemplo:


```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myVPS_rsa
```

A continuación, puede conectarse al segundo host introduciendo:

```bash
ssh vps
```

Para obtener más información sobre el archivo `config`, consulte la [página `man` correspondiente](https://manpages.org/ssh_config/5).

///


#### Cómo configurar pares de claves en un dispositivo Windows

/// details | Despliegue esta sección

Abra la aplicación Símbolo del sistema escribiendo "cmd" en la barra de búsqueda (o abra PowerShell desde el menú "Inicio").

Abra el directorio `.ssh` de su cuenta de usuario de Windows actual (ruta predeterminada: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

Utilice el comando `ssh-keygen` para crear un par de claves. La opción `-t` permite especificar el método de cifrado.

> [!primary]
>
> `Ed25519` se considera el método más seguro, pero `RSA` es una alternativa válida. Ambas son compatibles con el área de cliente de OVHcloud si desea [almacenar las claves públicas en su cuenta de cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

Ejemplos:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

En el siguiente símbolo del sistema se le solicitará que asigne un nombre a la clave recién creada o que utilice el nombre de archivo estándar:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa):
```

Si confirma con la tecla `Intro`{.action} sin introducir un nombre, se utilizará el nombre de archivo estándar (`id_rsa` en este ejemplo).

Si planea usar varios pares de claves en el futuro, escriba un nombre de archivo individual para identificar la clave. Para más información, consulte **Gestionar varias claves de autenticación en su dispositivo local**.

En los ejemplos de salida siguientes se seguirán utilizando los nombres de archivo `id_rsa` y `id_rsa.pub` a efectos de ilustración.

Puede proteger su llave SSH con una frase de contraseña en el siguiente indicador. Se recomienda hacerlo por motivos de seguridad.

> [!warning]
>
> Al utilizar claves de autenticación, el acceso remoto al servidor es tan seguro como el dispositivo cliente que almacena la clave privada. Por lo tanto, es importante proteger el dispositivo y los archivos clave que contiene contra el acceso no autorizado.
>
> Para mayor comodidad y seguridad, almacene las frases de contraseña en un gestor de contraseñas de su puesto de trabajo, como la solución open source **KeePass**.
>

Todas las claves SSH se almacenan en el directorio por defecto `.ssh`. Los archivos de clave pública tendrán `.pub` anexado al nombre de archivo.

```console
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

Puede abrir el archivo de teclas con un editor de texto (Notepad, Notepad++, etc.). En el Explorador de archivos de Windows, haga clic derecho en el archivo y seleccione "Abrir con".  
También puede utilizar uno de los siguientes comandos (en el directorio `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copie esta cadena de clave para [añadirla a un nuevo servidor](#getstarted) o para [importarla al área de cliente](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> **Uso del Portapapeles**
>
> Al trabajar desde una línea de comandos **Windows**, haga clic con el botón secundario del mouse para **pegar** el contenido del Portapapeles en la ventana de la línea de comandos. Para **copiar*** una cadena de la ventana de la línea de comandos, resáltela y pulse `Intro`{.action}. También puede encontrar estas funciones haciendo clic derecho en la barra de menús de la ventana de la línea de comandos.
>

#### Administrar varias claves de autenticación en su dispositivo local

Puede utilizar varios pares de claves SSH para conectarse a diferentes hosts remotos o dispositivos LAN.

Como todos los archivos clave deben ubicarse en la carpeta `.ssh` del directorio de usuarios de Windows, los nombres de archivo deben ser diferentes. Cuando cree un nuevo par de claves y se le pida un nombre de archivo, escriba el nombre que desee, por ejemplo, el nombre del servidor.

Ejemplo de salida:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Al conectar con el servidor correspondiente, especifique el nombre del archivo de clave privada, además de los detalles del usuario y del servidor de conexión:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Ejemplo:

```bash
ssh -i C:\Users\Username\.ssh/myServer_rsa ubuntu@203.0.113.100
```

##### Uso del archivo "config"

La alternativa a añadir la opción `-i` cada vez es editar un archivo denominado `config` dentro de la carpeta `C:\Users\Username\.ssh`. Permite configurar los detalles de las distintas conexiones (nombre de usuario, puerto, archivo de clave, parámetros opcionales, etc.)

Si este archivo existe dentro de `.ssh`, es probable que ya contenga información. En función de su entorno de trabajo, considere la posibilidad de crear una copia de seguridad del original.

Ejemplo de salida de la lista de contenido de la carpeta `.ssh`:

```bash
C:\Users\Username\.ssh>dir /B
```

```console
config
id_rsa
id_rsa.pub
known_hosts    
known_hosts.old
```

El archivo `config` permite almacenar varias conexiones SSH y sus parámetros individuales, además de los valores estándar. El aprovechamiento de todo el potencial de este archivo puede llegar a ser complejo, ya que resulta especialmente útil para usuarios experimentados que gestionan varios servidores.

A continuación ofrecemos un ejemplo sencillo de cómo configurar una conexión SSH a un servidor.  
Abra el archivo y agregue las siguientes líneas en la parte superior:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Asegúrese de utilizar la dirección IP y el nombre de archivo de clave correctos. La primera línea, que empieza por `Host`, define el nombre de esta conexión (`dedicated_server` en este ejemplo).

A continuación, conéctese al servidor sustituyendo la dirección IP del servidor por el nombre de alias que identifica esta conexión (`Host`):

```bash
ssh username@connection_name
```

Ejemplo:

```bash
ssh ubuntu@dedicated_server
```

En el ejemplo anterior sólo se especificaron la IP de la instancia y el archivo de clave, pero se pueden agregar más detalles.  
Para configurar una conexión SSH a un segundo host remoto con el nombre de usuario "rocky", el puerto SSH modificado "49160" y la clave privada en el archivo "myVPS_rsa", extienda el contenido del archivo como se muestra en este ejemplo:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myVPS_rsa
```

A continuación, puede conectarse al segundo host introduciendo:

```bash
ssh vps
```

Para obtener más información sobre el archivo `config`, consulte la [página `man` correspondiente](https://manpages.org/ssh_config/5).

///


#### Añadir claves públicas adicionales al servidor

Para añadir una autenticación de clave para otros usuarios que accedan al servidor, cree un nuevo par de claves, pero utilice la carpeta `$HOME` correspondiente o **Windows** `Users` del usuario en cuestión para almacenar las claves de autenticación (o ejecutar los comandos en el dispositivo dedicado de esa persona).
A continuación, añada la nueva cadena de clave pública al servidor en el archivo `authorized_keys` como se ha descrito anteriormente.

#### Eliminación de las claves públicas del servidor

Abra el archivo `authorized_keys` en su servidor como se ha descrito anteriormente y elimine la cadena de clave que corresponde a la cuenta de usuario a la que se ha denegado el acceso.

<a name="gofurther"></a>

## Más información

[Introducción al protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Modo de rescate en servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Modo de rescate en VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).