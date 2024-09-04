---
title: Cómo crear y utilizar llaves SSH para instancias Public Cloud
excerpt: Cómo crear pares de claves SSH en su dispositivo local y utilizarlos para establecer conexiones seguras a su instancia
updated: 2024-09-02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

El uso del protocolo SSH abre un canal seguro en una red no segura en una arquitectura cliente-servidor, conectando un cliente SSH a un servidor SSH. La creación de un conjunto de claves SSH le permite obtener una clave pública y una clave privada. Puede almacenar la clave pública en un servidor y, a continuación, conectarse a él con un cliente que tenga la clave privada correspondiente. Si las llaves SSH pública y privada coinciden, se conectará sin necesidad de una contraseña.

Este suele ser el método de conexión más seguro y práctico, así como el método por defecto en las instancias de Public Cloud.

**Esta guía explica cómo crear y gestionar llaves SSH en su dispositivo local para conectarse a instancias de Public Cloud.**

## Requisitos

- Un [proyecto Public Cloud](/links/public-cloud/public-cloud) en su cuenta de OVHcloud
- Una aplicación cliente SSH (línea de comandos o GUI)

> [!primary]
> Esta guía no se aplica a las instalaciones estándar de **Windows Server**, ya que se basan en el Protocolo de escritorio remoto (RDP) para las conexiones.
>
> Para más información, consulte nuestra [guía sobre la creación de una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## Procedimiento

Las siguientes instrucciones cubren dos métodos de uso de llaves SSH:

- [Creación de un par de claves **Open SSH** y conexión a un servidor desde el cliente SSH en línea de comandos](#openssh)
- [Creación de un par de claves `PuTTY` y conexión a un servidor desde el cliente SSH `PuTTY`](#useputty)

Puede utilizar ambos métodos simultáneamente, pero tenga en cuenta que `PuTTY` conserva los archivos de clave en un formato específico, lo que los hace incompatibles con los archivos de clave SSH creados con el cliente **Open SSH**.

Esto significa que una clave privada creada con el cliente SSH en línea de comandos deberá ser [convertida al formato `PuTTY` y viceversa](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

<a name="openssh"></a>

#### Creación de un par de llaves SSH en línea de comandos

Abra la aplicación en línea de comandos (`Terminal`) desde un ordenador **Mac** o un dispositivo con un sistema operativo **Linux**.

Asegúrese de que tiene una carpeta denominada `.ssh` en el directorio `$HOME`. Si la carpeta no existe, créela:

```bash
mkdir ~/.ssh
```

En un sistema operativo **Windows** actual, abra el símbolo del sistema escribiendo "cmd" en la barra de búsqueda (o abra `PowerShell` desde el menú).

Acceda al directorio `.ssh` de su usuario **Windows** activo (por defecto: `C:\Users\WindowsUsername.ssh`):

```bash
cd .ssh
```

<a name="createnewkey"></a>

Utilice el siguiente comando para crear una clave RSA de 4096 bits:

```bash
ssh-keygen -b 4096
```

El uso de la opción `-t` con este comando permite especificar otro método de cifrado, por ejemplo:

```bash
ssh-keygen -t ed25519 -a 256
```

La línea de comandos le solicita que guarde la clave recién creada en el archivo estándar:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Puede confirmar con `Enter` para aceptar el nombre de archivo propuesto o introducir otro nombre. Esto es pertinente si se colocan varios pares de claves en el directorio `.ssh`. Para más información, consulte la sección [Gestionar varias llaves SSH](#multiplekeys).  
En este ejemplo se utilizan los nombres de archivo estándar `id_rsa` y `id_rsa.pub`.

Puede proteger su llave SSH con una frase de contraseña (*passphrase*) en el siguiente mensaje. Se recomienda hacerlo por motivos de seguridad.

> [!warning]
>
> El acceso remoto al servidor es tan seguro como el dispositivo cliente que almacena la clave privada. La protección de su dispositivo y de sus archivos contra el acceso no autorizado es, por lo tanto, fundamental al utilizar llaves SSH.
>
> Por comodidad y seguridad, le recomendamos que utilice un gestor de contraseñas en su dispositivo, como la solución `KeePass` de código abierto.
>

Todas las claves SSH deben almacenarse en el directorio `.ssh`. Los archivos de clave pública tendrán el sufijo `.pub` anexado al nombre de archivo.


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

<a name="publickey"></a>

Para ver y exportar su clave pública, utilice el comando `cat` en su archivo de clave `.pub`. Copie esta cadena de clave para [añadirla a una nueva instancia](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) o para [importarla en el área de cliente de OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
> En un terminal **macOS**, puede utilizar los comandos `pbcopy` y `pbpaste` para gestionar las cadenas de teclas más rápidamente. Por ejemplo, utilice este comando para copiar la clave del archivo `id_rsa.pub` en el portapapeles:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

En un sistema operativo **Windows**, abra el archivo con la aplicación `Notepad` desde el Explorador de archivos (haga clic derecho en el archivo y seleccione `Abrir con`) o utilice uno de los siguientes comandos (en `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copie esta cadena de clave para [añadirla a una nueva instancia](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) o para [importarla en el área de cliente de OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

> [!primary]
>
> **Uso del portapapeles**
>
> Cuando trabaje en línea de comandos en **Windows**, haga clic derecho para **pegar** el contenido del portapapeles en la ventana de la línea de comandos. Para **copiar*** una cadena de la ventana de la línea de comandos, resáltela con el ratón y pulse la tecla `Enter`. También puede encontrar estas funciones haciendo clic derecho en la barra de menú.
>

<a name="useputty"></a>

#### Crear un par de llaves SSH con PuTTY

[PuTTY](https://putty.org/){.external} es un cliente SSH de código abierto con interfaz gráfica de usuario, disponible para **Windows** y otros sistemas operativos. Proporciona un programa complementario para crear llaves SSH: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> El objetivo principal de `PuTTY` es gestionar las conexiones SSH de un periférico cliente **Windows** hacia un servidor **GNU/Linux**. `PuTTY` almacena los archivos de claves en un formato específico, lo que los hace incompatibles con los archivos de claves SSH creados con el cliente **Open SSH** incluidos de forma nativa en la mayoría de los sistemas operativos modernos.
>
> Si es necesario y como se ha explicado anteriormente en esta guía, las claves generadas en *línea de comandos* pueden ser [convertidas al formato `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) para utilizarlas con el cliente `PuTTY`. Para un uso más práctico de las llaves SSH, elija una opción y acéptela (llaves privadas **Open SSH** o llaves privadas `PuTTY`).
>

Si aún no está instalado (consulte su lista de aplicaciones o utilice la función de búsqueda), descargue `PuTTY` desde [el sitio oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). El paquete de instalación estándar recomendado ya contiene `PuTTYgen`, pero también está disponible como un archivo independiente en el sitio Web.

Abra `PuTTYgen` y seleccione uno de los algoritmos de cifrado admitidos. En este ejemplo se utiliza RSA. Introduzca 4096 como número de bits en la esquina inferior derecha y haga clic en el botón `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Mueva el cursor del ratón libremente por el área situada debajo de la barra de progreso:

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

La clave está lista cuando la barra de progreso está llena.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Copie esta cadena de clave para [añadirla a una nueva instancia](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) o para [importarla en el área de cliente de OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

Guarde ambas claves como archivos haciendo clic en los botones correspondientes y, a continuación, escriba una frase de contraseña (*passphrase*) para protegerlas.

> [!warning]
>
> El acceso remoto a su instancia es tan seguro como el dispositivo cliente que almacena la clave privada. La protección de su dispositivo y de sus archivos contra el acceso no autorizado es, por lo tanto, fundamental al utilizar llaves SSH.
>
> Por comodidad y seguridad, le recomendamos que utilice un gestor de contraseñas en su dispositivo, como la solución open source `KeePass`.
>

Una de las ventajas de utilizar `PuTTY` es la posibilidad de registrar diferentes conexiones con el nombre de `Sessions`. Para más información, consulte la sección [Gestión de varias llaves SSH en su dispositivo local](#puttykeys).

<a name="multiplekeys"></a>

### Gestión de varias llaves SSH en su dispositivo local

Puede utilizar varios pares de claves SSH para conectarse a diferentes hosts remotos.

> [!primary]
>
> Si utiliza `PuTTY`, vaya a [la sección correspondiente](#puttykeys) a continuación.
>

Como todas las claves deben colocarse en la carpeta `.ssh` de su unidad local, los nombres de archivo deben ser diferentes. Cuando [cree un nuevo par de claves](#createnewkey) y se le pida que proporcione un nombre de archivo, escriba el nombre que desee. Por ejemplo, asócielo al nombre de su instancia.

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Al conectarse al servidor correspondiente, especifique el nombre del archivo de clave, además de los detalles de usuario y servidor:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Ejemplo:

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

Como se ha explicado en secciones anteriores, las mismas instrucciones funcionarán en un cliente **Windows**. Sustituya únicamente `~/` por la ruta de acceso de la carpeta de usuario **Windows**, por defecto `C:\Users\WindowsUsername\`. Por ejemplo: `ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100`.

#### Mediante un archivo «config»

La alternativa a añadir la opción `-i` cada vez consiste en modificar un archivo denominado `config` en la carpeta `~/.ssh` (`\Users\Username\.ssh` para **Windows**). Permite configurar los detalles de las distintas conexiones (nombre de usuario, puerto, archivo de clave, parámetros opcionales, etc.)

Si este archivo existe en `.ssh`, es probable que ya contenga información. En función de su entorno de trabajo, considere crear una copia de seguridad del original.

Ejemplo de contenido de carpeta `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Con el archivo `config`, varias conexiones SSH pueden almacenarse con sus parámetros individuales, además de los valores estándar. El aprovechamiento de todo el potencial de este archivo puede llegar a ser complejo, ya que resulta especialmente útil para usuarios avanzados que gestionan varios servidores de forma regular.

A continuación ofrecemos un ejemplo sencillo de cómo configurar una conexión SSH a una instancia.

Abra el archivo y agregue las siguientes líneas en la parte superior:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

A continuación, podrá conectarse a la instancia con el nombre de alias que haya definido como `Host`:

```bash
ssh ubuntu@instance
```

En el ejemplo anterior sólo se especificaron la IP del servidor y el archivo de clave, pero se pueden agregar más detalles.  
Para configurar una conexión SSH a un segundo servidor con el nombre de usuario "rocky", el puerto SSH modificado "49160" y la clave privada en el archivo "myserver_rsa", extienda el contenido del archivo como se muestra en este ejemplo:

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

A continuación, puede conectarse al servidor introduciendo:

```bash
ssh myserver
```

Puede consultar la [página `man` correspondiente](https://manpages.org/ssh_config/5) para obtener más información.

<a name="puttykeys"></a>

#### Vía PuTTY

`PuTTY` puede guardar las credenciales y los parámetros de una conexión SSH como `Session`. También le permite conectarse a diferentes servidores mediante claves individuales.

Abra `PuTTY` y despliegue la subsección `SSH` en el menú de la izquierda y haga clic en `Auth` y `Credentials`.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Haga clic en el botón `Browse`{.action} y seleccione el archivo de clave privada `PuTTY` (`keyfile.ppk`) en la carpeta donde lo guardó.

El archivo de clave se asocia ahora a la sesión SSH actual. Cambie a `Session` en el menú de la izquierda e introduzca sus claves de conexión al servidor (`username@IPv4_address`).

Escriba un nombre para esta conexión en `Saved Sessions` y haga clic en `Save`{.action} para agregarlo a la lista.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Ya puede hacer clic en este elemento de `Session` y abrir una conexión a su servidor. Para probarlo, haga clic en `Open`{.action}. Si ha protegido el archivo de clave con una frase de contraseña, escríbala en este punto.

#### Añadir claves públicas adicionales a su instancia

Para añadir llaves SSH a otros usuarios que accedan a su instancia, repita los pasos de creación de llaves, pero utilice la carpeta `$HOME` correspondiente o **Windows** `Users` del usuario en cuestión para crear y almacenar las llaves SSH (o ejecutar los comandos en el dispositivo dedicado de esta persona).

Para más información, consulte nuestra [guía dedicada](/pages/public_cloud/compute/configuring_additional_ssh_keys).

<a name="gofurther"></a>

## Más información

[Cómo crear una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Primeros pasos con SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Configuración de claves SSH adicionales en una instancia](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).