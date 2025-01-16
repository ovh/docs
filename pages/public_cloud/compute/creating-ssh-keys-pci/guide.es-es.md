---
title: "Cómo crear y utilizar claves de autenticación para las conexiones SSH a las instancias Public Cloud"
excerpt: "Cómo crear pares de claves para OpenSSH en su dispositivo local y utilizarlos para establecer conexiones seguras a su instancia"
updated: 2024-12-09
---

<style>
detalles>summary {
color:rgb(33, 153, 232) !importante;
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

El protocolo SSH permite un canal de comunicación seguro en las redes públicas en una arquitectura cliente-servidor. Se pueden utilizar pares de claves para autenticar estas conexiones SSH entre dos hosts de confianza, como un equipo de escritorio y un servidor remoto.

Un conjunto de claves consta de una clave pública que se puede compartir y una clave privada que permanece secreta. La clave pública, situada en un servidor, permite que cualquier cliente que disponga de la clave privada correspondiente se conecte a él sin tener que introducir una contraseña.

Este método suele ser el mejor equilibrio entre la seguridad y la comodidad y el valor por defecto para las instancias de Public Cloud.

**Esta guía explica cómo crear y gestionar pares de claves de autenticación en su dispositivo local y utilizarlos para conectarse a instancias de Public Cloud.**

## Requisitos

- Un [proyecto Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud
- Una aplicación de conexión remota compatible con el protocolo OpenSSH

> [!primary]
> Esta guía no se aplica a las conexiones a sistemas operativos estándar **Windows Server**, ya que se basan por defecto en el `Remote Desktop Protocol` (RDP).
>
> Para más información, consulte nuestra [guía sobre la creación de una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## Procedimiento

### Creación de pares de claves para las conexiones OpenSSH

En las siguientes instrucciones se explica cómo crear y administrar pares de claves para conexiones remotas con **OpenSSH** desde la **línea de comandos**. La mayoría de los sistemas operativos actuales incluyen esta función sin necesidad de instalar software adicional.

Si prefiere una interfaz gráfica de usuario, puede encontrar numerosas aplicaciones de software para cada tipo de sistema operativo que le permiten conectarse a hosts remotos a través del protocolo OpenSSH.

Por ejemplo, [PuTTY](https://putty.org/) es un cliente SSH de código abierto con muchas funciones útiles. Para más información sobre cómo utilizarlo para conectarse a servidores e instancias de OVHcloud, consulte nuestro tutorial:

- [Cómo usar PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

> [!primary]
>
> Si recibe mensajes de error al intentar iniciar sesión, asegúrese de que está utilizando la configuración y la información de inicio de sesión correctas, y de que el sistema y las aplicaciones instaladas se han actualizado correctamente. Si recibe un mensaje de aviso del tipo `REMOTE HOST IDENTIFICATION HAS CHANGED`, consulte nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
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
> `Ed25519` se considera el más seguro, pero `RSA` es una alternativa válida. Ambos métodos son compatibles con el [área de cliente de OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).

Ejemplos:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

Utilice el símbolo del sistema siguiente para asignar un nombre a la clave recién creada o utilizar el nombre de archivo estándar:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Si confirma con el botón `Enter`{.action} sin introducir ningún nombre, se utilizará el nombre de archivo estándar (`id_rsa` en este ejemplo).

Si planea usar varios pares de claves en el futuro, escriba un nombre de archivo individual para identificar la clave. Para obtener más información, consulte **Gestión de varias claves de autenticación en su dispositivo local**.

En los ejemplos de salida siguientes se seguirán utilizando los nombres de archivo `id_rsa` y `id_rsa.pub` a efectos de ilustración.

Puede proteger su llave SSH con una frase de contraseña en el siguiente indicador. Se recomienda hacerlo por motivos de seguridad.

> [!warning]
>
> El acceso remoto a su instancia es tan seguro como el dispositivo cliente que almacena la clave privada. Por lo tanto, es fundamental proteger el dispositivo y los archivos clave que contiene contra el acceso no autorizado.
>
> Para mayor comodidad y seguridad, almacene las frases de contraseña en un gestor de contraseñas de su puesto de trabajo, como la solución open source **KeePass**.
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

Copie esta cadena de clave para [añadirla a una nueva instancia o importarla en su área de cliente](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> En un terminal **macOS**, puede utilizar los comandos `pbcopy` y `pbpaste` para gestionar las cadenas de claves más rápidamente. Por ejemplo, utilice este comando para copiar la clave del archivo `id_rsa.pub` en el portapapeles:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Gestión de varias claves de autenticación en su dispositivo local

Puede utilizar varios pares de claves SSH para conectarse a diferentes hosts remotos o dispositivos LAN.

Como todos los archivos clave deben colocarse en la carpeta `.ssh` del directorio `home` del usuario, los nombres de archivo deben ser diferentes. Cuando cree un nuevo par de claves y se le pida un nombre de archivo, introduzca un nombre de su elección, por ejemplo el nombre de su instancia.

Ejemplo de salida:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Al conectarse a la instancia correspondiente, especifique el nombre del archivo de clave privada, además de los detalles del usuario y del servidor de conexión:

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

Ejemplo:

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Uso del archivo config

La alternativa a añadir la opción `-i` cada vez es editar un archivo denominado `config` dentro de la carpeta `~/.ssh`. Permite configurar los detalles de las distintas conexiones (nombre de usuario, puerto, archivo de clave, parámetros opcionales, etc.)

Si este archivo existe dentro de `.ssh`, es probable que ya contenga información. En función de su entorno de trabajo, considere la posibilidad de crear una copia de seguridad del original.

Ejemplo de resultado de mostrar el contenido de la carpeta `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

El archivo `config` permite almacenar varias conexiones SSH y sus parámetros individuales, además de los valores estándar. El aprovechamiento de todo el potencial de este archivo puede llegar a ser complejo, ya que resulta especialmente útil para usuarios avanzados que gestionan varios servidores.

A continuación ofrecemos un ejemplo sencillo de cómo configurar una conexión SSH a una instancia.  
Abra el archivo y agregue las siguientes líneas en la parte superior:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Asegúrese de utilizar la dirección IP y el nombre de archivo de clave correctos. La primera línea, que empieza por `Host`, define el nombre de esta conexión (`instance` en este ejemplo).

A continuación, puede conectarse a la instancia sustituyendo la dirección IP de la instancia por el nombre de alias que identifica esta conexión (`Host`):

```bash
ssh username@connection_name
```

Ejemplo:

```bash
ssh ubuntu@instance
```

En el ejemplo anterior sólo se especificaron la IP de la instancia y el archivo de clave, pero se pueden agregar más detalles.  
Para configurar una conexión SSH a un segundo host remoto con el nombre de usuario "rocky", el puerto SSH modificado "49160" y la clave privada en el archivo "myserver_rsa", extienda el contenido del archivo como se muestra en este ejemplo:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

A continuación, puede conectarse al segundo host introduciendo:

```bash
ssh myserver
```

Para obtener más información sobre el archivo `config`, consulte la [página `man` correspondiente](https://manpages.org/ssh_config/5).

///

#### Configuración de pares de claves desde un dispositivo Windows

/// details | Despliegue esta sección

Abra la aplicación `Símbolo del sistema` escribiendo "cmd" en la barra de búsqueda (o abra PowerShell desde el menú `Inicio`{.action}).

Abra el directorio `.ssh` de su cuenta de usuario de Windows actual (ruta predeterminada: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

Utilice el comando `ssh-keygen` para crear un par de claves. La opción `-t` permite especificar el método de cifrado.

> [!primary]
>
> `Ed25519` se considera el más seguro, pero `RSA` es una alternativa válida. Ambos métodos son compatibles con el [área de cliente de OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).

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

Si confirma con la tecla `Enter`{.action} sin introducir un nombre, se utilizará el nombre de archivo estándar (`id_rsa` en este ejemplo).

Si planea usar varios pares de claves en el futuro, escriba un nombre de archivo individual para identificar la clave. Para obtener más información, consulte **Gestión de varias claves de autenticación en su dispositivo local**.

En los ejemplos de salida siguientes se seguirán utilizando los nombres de archivo `id_rsa` y `id_rsa.pub` a efectos de ilustración.

Puede proteger su llave SSH con una frase de contraseña en el siguiente indicador. Se recomienda hacerlo por motivos de seguridad.

> [!warning]
>
> El acceso remoto a su instancia es tan seguro como el dispositivo cliente que almacena la clave privada. Por lo tanto, es fundamental proteger el dispositivo y los archivos clave que contiene contra el acceso no autorizado.
>
> Para mayor comodidad, almacene las frases de contraseña en un gestor de contraseñas de su estación de trabajo, como la solución open source **Keepass**.
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

Puede abrir el archivo de claves mediante un editor de texto (Notepad, Notepad++, etc.). En el Explorador de archivos de Windows, haga clic derecho en el archivo y seleccione `Abrir con`{.action}.

También puede utilizar uno de los siguientes comandos (en el directorio `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copie esta cadena de clave para [añadirla a una nueva instancia o importarla en su área de cliente](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> **Uso del Portapapeles**
>
> Al trabajar desde una línea de comandos **Windows**, puede hacer clic derecho para **pegar** el contenido del Portapapeles en la ventana de la línea de comandos. Para **copiar*** una cadena de la ventana de la línea de comandos, resáltela y pulse `Enter`{.action}. También puede encontrar estas funciones haciendo clic derecho en la barra de menús de la ventana de la línea de comandos.
>

#### Gestión de varias claves de autenticación en su dispositivo local

Puede utilizar varios pares de claves SSH para conectarse a diferentes hosts remotos o dispositivos LAN.

Como todos los archivos clave deben ubicarse en la carpeta `.ssh` del directorio de usuarios de Windows, los nombres de archivo deben ser diferentes. Cuando cree un nuevo par de claves y se le pida un nombre de archivo, introduzca el nombre que desee, por ejemplo, el nombre de la instancia.

Ejemplo de salida:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Al conectarse a la instancia correspondiente, especifique el nombre del archivo de clave privada, además de los detalles del usuario y del servidor de conexión:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Ejemplo:

```bash
ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Uso del archivo config

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

A continuación ofrecemos un ejemplo sencillo de cómo configurar una conexión SSH a una instancia.
Abra el archivo y agregue las siguientes líneas en la parte superior:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Asegúrese de utilizar la dirección IP y el nombre de archivo de clave correctos. La primera línea, que empieza por `Host`, define el nombre de esta conexión (`instance` en este ejemplo).

A continuación, puede conectarse a la instancia sustituyendo la dirección IP de la instancia por el nombre de alias que identifica esta conexión (`Host`):

```bash
ssh username@connection_name
```

Ejemplo:

```bash
ssh ubuntu@instance
```

En el ejemplo anterior sólo se especificaron la IP de la instancia y el archivo de clave privada, pero se pueden agregar más detalles.

Para configurar una conexión SSH a un segundo host remoto con el nombre de usuario "rocky", el puerto SSH modificado "49160" y la clave privada en el archivo "myserver_rsa", extienda el contenido del archivo como se muestra en este ejemplo:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myserver_rsa
```

A continuación, puede conectarse al segundo host introduciendo:

```bash
ssh myserver
```

Para obtener más información sobre el archivo `config`, consulte la [página `man` correspondiente](https://manpages.org/ssh_config/5).

///


### Adición de claves públicas adicionales a una instancia en ejecución

Para añadir claves SSH a otros usuarios que accedan a su instancia, repita los pasos de creación de claves, pero utilice la carpeta `$HOME` correspondiente o el directorio Windows `Users` del usuario en cuestión para crear y almacenar las claves SSH (o ejecutar los comandos en el dispositivo dedicado de esa persona).

Para más información, consulte nuestra [guía específica](/pages/public_cloud/compute/configuring_additional_ssh_keys).

## Más información

[Cómo crear una instancia de Public Cloud y conectarse a ella](/pages/public_cloud/compute/public-cloud-first-steps)

[Cómo empezar con las conexiones SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Cómo configurar llaves SSH adicionales en una instancia](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).