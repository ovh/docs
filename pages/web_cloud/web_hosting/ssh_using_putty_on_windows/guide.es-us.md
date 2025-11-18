---
title: Cómo utilizar PuTTY para conexiones SSH y autenticación
excerpt: Cómo acceder a su servidor cloud o a su alojamiento web y gestionar las llaves SSH con el cliente SSH PuTTY
updated: 2024-11-11
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

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) es un cliente SSH de código abierto con una interfaz gráfica de usuario. Ha sido desarrollado para Windows, pero también está disponible para otros sistemas operativos e incluye funcionalidades útiles, como la gestión de llaves SSH.

**Este tutorial explica cómo utilizar PuTTY para proteger las conexiones al servicio de OVHcloud mediante el protocolo SSH.**

## Requisitos

- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) instalado en el dispositivo local
- Conocimientos básicos del [protocolo SSH y de su uso](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)
- Estar conectado al [área de cliente de OVHcloud](/links/manager)

> [!warning]
> OVHcloud ofrece servicios cuya configuración y gestión son responsabilidad suya. Este tutorial explica cómo utilizar las soluciones de OVHcloud con herramientas externas. Es posible que tenga que adaptar algunas instrucciones específicas para el sistema operativo de su estación de trabajo local o servidor.
>
> Le recomendamos que, si necesita ayuda, contacte con un [proveedor de servicios especializado](/links/partner) o [nuestra comunidad](/links/community).
>

## Procedimiento

### Presentación del contenido

- [Instalando PuTTY](#installation)
- [Conexiones SSH con nombre de usuario y contraseña](#sshconnect1)
    - [Hosting](#webhosting)
    - [Servidor dedicado o VPS](#cloudserver)
- [Conexiones SSH con nombre de usuario y autenticación por llave SSH](#sshconnect2)
    - [Creación de llaves SSH con PuTTY](#puttygen)
    - [Transferencia de las llaves SSH públicas hacia su servidor](#transferkeys)
    - [Conectarse al servidor](#puttykeys)
    - [Gestión de claves SSH privadas en un dispositivo local (PuTTY authentication agent)](#pageant)
- [Uso de las sesiones de inicio de sesión de PuTTY](#sessions)
- [Ejemplo de uso: Cómo utilizar las herramientas PuTTY para configurar conexiones seguras a los servidores de OVHcloud (VPS, servidor dedicado, instancia Public Cloud)](#example)

<a name="installation"></a>

### Instalación de PuTTY

Descargue la última versión del cliente PuTTY desde el [sitio web oficial](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) e instálela en su sistema (o descomprima los archivos ejecutables). Las versiones portadas de PuTTY también pueden estar disponibles a través de su gestor de paquetes o [homebrew](https://brew.sh/).

El paquete de instalación estándar recomendado incluye varias aplicaciones que mejoran la funcionalidad de PuTTY, incluidas las transferencias de archivos (`psftp`, `pscp`, no incluidas en este tutorial) y la administración de claves SSH (`PuTTYgen`, `Pageant`, que se requiere para las partes correspondientes que aparecen a continuación).

> [!primary]
> Las instrucciones siguientes están basadas en un sistema operativo Windows. Las características del software PuTTY deben ser similares en todos los sistemas operativos. Sin embargo, si no utiliza PuTTY en un equipo con Windows, puede que necesite consultar la documentación del sistema operativo o las [FAQ oficiales](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html) y la [documentación](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html) de PuTTY.
>

> [!success]
> Es posible tener abiertas varias instancias de PuTTY y sus herramientas auxiliares al mismo tiempo. Por ejemplo, puede abrir una ventana para seguir los pasos de la guía de aprendizaje y otra para probar las conexiones.
>

<a name="sshconnect1"></a>

### Conexiones SSH con PuTTY - Nombre de usuario y contraseña

Esta sección explica cómo conectarse por primera vez por SSH a los siguientes servicios de OVHcloud:

- [Espacio de almacenamiento FTP de un alojamiento web compatible SSH](/links/web/hosting-compare)
- [Servidor dedicado](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

<a name="webhosting"></a>

#### Alojamiento web

Necesitará el nombre de cluster de su alojamiento web que encontrará en su [área de cliente de OVHcloud](/links/manager), así como el nombre de usuario FTP y la contraseña. Consulte [la guía correspondiente](/pages/web_cloud/web_hosting/ftp_connection) si necesita más información sobre este método de acceso.

/// details | Conexión a un alojamiento web

Abra PuTTY e introduzca las claves FTP de su alojamiento en los campos previstos a tal efecto.

- `Host Name (or IP address)`: **ftp_username@hosting_cluster_name** (ejemplo: **yourlogin@ssh.cluster042.hosting.ovh.net**)
- `Port`: 22

![putty](/pages/assets/screens/other/web-tools/putty/putty1.png){.thumbnail}

Pulse `Abrir`{.action}.

La primera vez que se conecte, aparecerá el mensaje «PuTTY Security Alert», que le advierte de los posibles riesgos. Generalmente, esto no resulta molesto si se conecta a un host de confianza (como el almacenamiento FTP de un alojamiento web).  
Haga clic en `Accept`{.action} para continuar. Si selecciona `Connect Once`{.action}, la huella del alojamiento web no se guardará en la caché y la ventana de alerta aparecerá la próxima vez que se conecte. Para más información, consulte nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Se abrirá la ventana de la línea de comandos (terminal PuTTY) y se le solicitará que introduzca la contraseña de inicio de sesión.

Introduzca la contraseña que ha [asignado a este usuario](/pages/web_cloud/web_hosting/ftp_connection). Puede pegar la cadena de contraseña en esta ventana haciendo clic derecho.

Tenga en cuenta que **una petición de contraseña no mostrará las entradas de teclado** en un terminal PuTTY. Ejemplo de salida:

```console
Using username "yourlogin".
yourlogin@ssh.cluster042.hosting.ovh.net's password:
```

```console
Welcome to OVH
yourlogin@ssh.cluster042.hosting.ovh.net (php/7.3/production/stable) ~ $ 
```

Consulte nuestra guía [Acceso SSH para los alojamientos web de OVHcloud](/pages/web_cloud/web_hosting/ssh_on_webhosting) para conocer las acciones posibles en el espacio de almacenamiento FTP de su alojamiento web.

PuTTY puede guardar las credenciales y la configuración de una conexión SSH como una "sesión". Esto le permite conectarse a hosts conocidos o dispositivos de LAN sin escribir la información respectiva cada vez. Obtenga información acerca de cómo usar las sesiones de PuTTY en la [sección siguiente](#sessions).

///

<a name="cloudserver"></a>

#### Servidor dedicado o VPS

Necesitará la dirección IP de su servidor que encontrará en su [área de cliente de OVHcloud](/links/manager), así como el nombre de la cuenta de usuario que desea utilizar para esta sesión de conexión. Si desea más información sobre este tema, consulte nuestras guías Primeros pasos:

- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Servidor dedicado de la gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

/// details | Cómo conectarse a un host remoto

Abra PuTTY e introduzca las claves de conexión en los campos correspondientes.

- `Host Name (or IP address)`: **username@IPv4_server** (ejemplo: **ubuntu@203.0.113.101**)
- `Port`: 22 (a menos que haya cambiado el número de puerto SSH de su servidor)

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

Haga clic en el botón `Open`{.action}.

La primera vez que se conecte, aparecerá la ventana "PuTTY Security Alert", en la que se le advertirá de los posibles riesgos. Por lo general, esto no es un problema, siempre que se conecte a un host de confianza (como su propio servidor seguro).  
Haga clic en `Accept`{.action} para continuar. Si selecciona `Connect Once`{.action}, la huella digital del servidor no se guardará en la caché y la alerta volverá a aparecer la próxima vez que se conecte. Para más información, consulte nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Se abrirá la ventana de la línea de comandos (PuTTY terminal) y se le solicitará que introduzca la contraseña de la cuenta de usuario. Puede pegar la cadena de contraseña en esta ventana haciendo clic derecho.

Tenga en cuenta que **una petición de contraseña no mostrará las entradas de teclado** en un terminal PuTTY. Ejemplo de salida:

```console
Using username "ubuntu".
ubuntu@203.0.113.101's password:
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Para más información sobre las conexiones SSH, consulte nuestra guía de [introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

PuTTY puede guardar la configuración de una conexión SSH como "sesión". Esto le permite conectarse a hosts remotos o dispositivos de red locales conocidos sin introducir la información respectiva cada vez. Esta guía explica cómo utilizar **PuTTY sessions** en la [sección correspondiente de este tutorial](#sessions).

///

<a name="sshconnect2"></a>

### Conexiones SSH con PuTTY - Nombre de usuario y clave de autenticación (archivos de claves SSH)

Esta parte del tutorial explica cómo utilizar SSH con PuTTY **autenticación de pares de claves** para conectarse a los siguientes servicios de OVHcloud:

- [Instance Public Cloud](/links/public-cloud/public-cloud)
- [Servidor dedicado](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

Necesitará la dirección IP de su servidor que encontrará en su [área de cliente de OVHcloud](/links/manager), así como el nombre de la cuenta de usuario que desea utilizar para esta sesión de conexión. Si desea más información sobre este tema, consulte nuestras guías Primeros pasos:

- [Instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)
- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Servidor dedicado de la gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)


> [!primary]
>
> PuTTY almacena los archivos de claves en un formato específico que los hace incompatibles con los archivos de claves SSH creados con el cliente **OpenSSH**. Si desea utilizar una **clave privada** creada previamente con el cliente SSH en línea de comandos (por ejemplo, para un [servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) o una [instancia Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)), deberá [convertirla al formato PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).
>

<a name="puttygen"></a>

#### Crear llaves SSH (PuTTY key generator)

Este paso requiere el **PuTTY key generator** (PuTTYgen).

/// details | Cómo crear llaves SSH con PuTTYgen

##### Paso 1: Crear un par de claves

Abra la aplicación PuTTYgen y seleccione el algoritmo de cifrado. Este ejemplo utiliza **RSA**. Introduzca "4096" en el campo `Number of bits in a generated key:` en la parte inferior.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen1.png){.thumbnail}

Pulse el botón `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen2.png){.thumbnail}

Aparecerá una barra de progreso. Mueva el puntero del ratón por el área debajo de la barra de progreso hasta que PuTTYgen tenga suficientes datos aleatorios para empezar a generar la clave.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen.gif){.thumbnail}

Ahora dispone de un **par de claves** compuesto de dos elementos:

- **Public key**: Cadena de clave que se almacenará en los hosts remotos a los que se desea conectar.
- **Private key**: cadena de clave que permanece en el dispositivo local desde el que se conecta a uno o varios hosts remotos.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen3.png){.thumbnail}

Si lo desea, puede modificar el campo `Comment` con su propia descripción. Las herramientas de PuTTY mostrarán este valor cuando utilice la clave.

##### Paso 2: Guardar la clave privada

Introduzca una frase de contraseña para proteger su archivo de clave privada en los campos `Key passphrase` y `Confirm`. El mejor enfoque es utilizar un gestor de contraseñas para crear y almacenar una contraseña compuesta de varias palabras (passphrase).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen4.png){.thumbnail}

Haga clic en el botón `Save private key`{.action} Seleccione una carpeta para los archivos de claves o cree una nueva, por ejemplo, denominada `putty_key_files`.  
Introduzca un nombre para el archivo y guárdelo. Ahora debería tener un nuevo archivo **private key** con la extensión `ppk` (*PuTTY private key*) en su carpeta.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen5.png){.thumbnail}

> [!warning]
>
> El acceso a los servidores remotos es tan seguro como el dispositivo cliente que almacena la clave privada. Por lo tanto, es fundamental proteger el dispositivo y los archivos clave que contiene contra el acceso no autorizado.
>
> Para mayor comodidad, almacene las frases de contraseña en un gestor de contraseñas en su dispositivo, como la solución open source **KeePass**, y utilice la herramienta [Pageant](#pageant) para las conexiones basadas en claves.
>

El botón `Save public key`{.action} de la interfaz de PuTTYgen convertirá la cadena **public key** al formato "SSH-2 standard format" y creará un archivo que contiene esta cadena. Sin embargo, las cadenas de clave de este formato no son relevantes para este tutorial.

##### Paso 3: Preparar la clave pública

El siguiente paso consiste en almacenar la **clave pública** en el host remoto al que desea conectarse. El formato de la cadena de claves tal y como aparece en la ventana PuTTYgen en `Public key for pasting into OpenSSH authorized_keys file` es compatible con OpenSSH. Necesitará la cadena de clave exacta en una sola línea.

> [!primary]
> No es necesario almacenar la clave pública como fichero, ya que siempre se puede recuperar del fichero **private key**. Para ello, abra PuTTYgen y haga clic en el botón `Load`{.action}. Seleccione su archivo de clave `ppk` e introduzca su frase de contraseña para abrirlo.
>
> También puede copiar la cadena de clave pública y pegarla en un archivo de texto sin formato (sin interrumpir la cadena de clave con saltos de línea).
>

Para continuar con [paso siguiente](#transferkeys), asegúrese de resaltar **toda la cadena de clave** y cópiela.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///

<a name="transferkeys"></a>

#### Transferencia de las llaves SSH públicas hacia su servidor

Las acciones de este paso dependen del tipo de servicio que utilice y de si va a instalar un nuevo sistema operativo o a agregar la clave a un sistema que esté utilizando.

/// details | Cómo añadir una llave SSH pública al instalar o reinstalar un SO (área de cliente de OVHcloud)

Haga clic en la pestaña de su servicio:

> [!tabs]
> **Instancia Public Cloud**
>>
>> Resalte y copie **toda la cadena de clave pública** que haya [creado en el paso anterior](#puttygen) desde la ventana de PuTTYgen (abra primero el **archivo de clave privada** correspondiente si es necesario). A continuación, utilícela como se indica en la sección correspondiente de nuestra [guía sobre la creación de una instancia de Public Cloud en el área de cliente de OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **Servidor dedicado**
>>
>> Resalte y copie **toda la cadena de clave pública** que haya [creado en el paso anterior](#puttygen) desde la ventana de PuTTYgen (abra primero el **archivo de clave privada** correspondiente si es necesario). Introduzca la dirección en el campo correspondiente durante la instalación. Para más información, consulte nuestra [guía de introducción a un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **VPS**
>>
>> Resalte y copie **toda la cadena de clave pública** que haya [creado en el paso anterior](#puttygen) desde la ventana de PuTTYgen (abra primero el **archivo de clave privada** correspondiente si es necesario). Introduzca la dirección en el campo correspondiente durante la instalación. Para más información, consulte nuestra guía de inicio con un VPS(/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)..
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>

///

**Cómo añadir una llave SSH pública a un SO en ejecución**

Seleccione el tipo de servicio:

/// details | Instancia Public Cloud

Resalte y copie **toda la cadena de clave pública** que haya [creado en el paso anterior](#puttygen) desde la ventana de PuTTYgen (abra primero el **archivo de clave privada** correspondiente si es necesario). Siga las instrucciones de la guía correspondiente:

- [Cómo configurar llaves SSH adicionales en una instancia](/pages/public_cloud/compute/configuring_additional_ssh_keys)
- [Cómo sustituir un par de claves SSH en una instancia Public Cloud](/pages/public_cloud/compute/replacing_lost_ssh_key)

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///


/// details | Servidor dedicado o VPS

[Conéctese a su servidor](#cloudserver) con la cuenta de usuario correspondiente. Cree la carpeta `.ssh` (si no existe):

```bash
mkdir ~/.ssh
```

Para almacenar la clave para el usuario actual, abra (o cree) el archivo `authorized_keys` con su editor de texto preferido (`nano` se utiliza en este ejemplo):

```bash
nano ~/.ssh/authorized_keys
```

Resalte y copie **toda la cadena de clave pública** que haya [creado en el paso anterior](#puttygen) desde la ventana de PuTTYgen (abra primero el **archivo de clave privada** correspondiente si es necesario).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

Pegue **cadena de clave pública completa** en este archivo. Asegúrese de que la cadena de clave esté siempre ininterrumpida, sin saltos de línea.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen7.png){.thumbnail}

Guarde el archivo y salga del editor. Reinicie el servidor (`sudo reboot`) o reinicie únicamente el servicio OpenSSH con uno de los siguientes comandos (el comando adecuado puede variar en función del sistema operativo):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Salga de la sesión PuTTY actual:

```bash
logout
```

Para comprobar que la clave está correctamente configurada, conéctese al servidor siguiendo los [pasos que se describen a continuación](#puttykeys).

///

<a name="puttykeys"></a>

#### Conexión al servidor

Para conectarse a un host remoto (instancia de Public Cloud, servidor dedicado o VPS), debe tener [creado el par de claves](#puttygen) y [añadido la cadena de clave pública a su servidor](#transferkeys).

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 1\. Abra PuTTY.<br> 2\. Expanda el nodo `SSH` en `Connection` en el árbol `Category`.<br> 3\. Expanda el nodo `Auth`.<br> 4\. Haga clic en `Credentials` para ver los parámetros correspondientes.<br> 5\. Pulse el botón `Browse`{.action}.<br> 6\. Seleccione el archivo de clave privada (`keyfile.ppk`) en la carpeta en la que lo guardó. |

Vuelva a `Session` en el menú de la izquierda. Introduzca las claves de conexión en los campos correspondientes.

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

- `Host Name (or IP address)`: **username@IPv4_server** (ejemplo: **ubuntu@203.0.113.101**)
- `Port`: 22 (a menos que haya cambiado el número de puerto SSH de su servidor)

Haga clic en el botón `Open`{.action}. El terminal PuTTY le pedirá la contraseña del archivo de clave. Puede pegar la cadena de contraseña en esta ventana haciendo clic derecho.

Tenga en cuenta que **una petición de contraseña no mostrará las entradas de teclado** en un terminal PuTTY. Ejemplo de salida:

```console
Using username "ubuntu".
Authenticating with public key "rsa-key-example"
Passphrase for key "rsa-key-example":
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Para un enfoque más práctico, aprenda a asociar un archivo de clave (mediante Pageant) y [guardar esta conexión](#sessions) en las siguientes secciones.

<a name="pageant"></a>

#### Gestión de llaves SSH en un dispositivo local con Pageant (PuTTY authentication agent)

Si ha seguido las instrucciones anteriores, puede acceder al host remoto mediante la autenticación de claves. Aunque la conexión en sí no requiere contraseña, PuTTY siempre solicitará la contraseña del archivo de clave privada correspondiente.

![pageant](/pages/assets/screens/other/web-tools/putty/pterminal.png){.thumbnail}

El uso de Page permite conexiones más rápidas de dos maneras:

- No es necesario seleccionar el archivo de clave privada para cada conexión en PuTTY.
- Debe escribir la frase de contraseña para el archivo de clave privada sólo una vez, cuando el archivo de clave está abierto por el pagador.

Abra la aplicación Pageant [en su puesto de trabajo](#installation). La ventana de la llave paginadora no se abre automáticamente, por lo que debe (doble) hacer clic en su icono en la barra de tareas (bandeja del sistema o *system tray* en Windows).

![pageant](/pages/assets/screens/other/web-tools/putty/systray.png){.thumbnail}

Se abrirá la **Pageant Key List**. Haga clic en el botón `Add Key`{.action} y seleccione el archivo de clave privada (`keyfile.ppk`) en la carpeta donde lo haya guardado.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant1.png){.thumbnail}

Escriba la frase de contraseña para este archivo de clave. La clave está ahora en la lista y PuTTY la usará mientras se esté ejecutando Pageant.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant2.png){.thumbnail}

Aunque cierre esta ventana, Page seguirá ejecutándose en segundo plano. Funciona siempre que el icono esté presente en la barra de tareas.

Si también guarda la conexión como una sesión en PuTTY, como se describe en la sección siguiente, podrá abrir conexiones remotas en solo unos clics.

<a name="sessionskeys"></a>

### Uso de sesiones de inicio de sesión PuTTY

PuTTY puede almacenar la configuración para diferentes conexiones como sesiones, lo que le permite establecer una conexión más rápida con el host remoto (alojamiento web, servidor, instancia, dispositivo de red local).

Seleccione el método de conexión adecuado:

/// details | Inicio de sesión con nombre de usuario y contraseña

Para almacenar una [sesión de inicio de sesión basada en contraseña](#sshconnect1), lleve a cabo las siguientes acciones:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions1.png){.thumbnail} |
|---|
| 1\. Abra PuTTY.<br> 2\. Introduzca la información de conexión en el campo `Host Name (or IP address)`: **username@IPv4_server** (ejemplo: **ubuntu@203.0.113.101**)<br> 3\. Si es necesario, modifique el número de puerto SSH en el campo situado bajo `Port`.<br> 4\. Escriba un nombre para esta conexión en el campo en `Saved Sessions`.<br> 5\. Haga clic en el botón `Save`{.action}. |

Para abrir una conexión guardada anteriormente, lleve a cabo los siguientes pasos:

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail} |
|---|
| 1\. Abra PuTTY.<br> 2\. Haga doble clic en la sesión deseada en la lista de la sección `Saved Sessions` o selecciónela y haga clic en el botón `Open`{.action}. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions3.png){.thumbnail} |
|---|
| En la ventana del terminal PuTTY, introduzca la contraseña de usuario del host remoto. |

///

<a name="sessionskeys"></a>

/// details | Inicio de sesión con nombre de usuario y claves de autenticación

Para almacenar una [sesión de inicio de sesión basada en claves](#puttykeys), lleve a cabo las siguientes acciones:

| ![putty](/pages/assets/screens/other/web-tools/putty/sessions4.png){.thumbnail} |
|---|
| 1\. Abra PuTTY.<br> 2\. Introduzca la información de conexión en el campo `Host Name (or IP address)`: **username@IPv4_server** (ejemplo: **ubuntu@203.0.113.101**)<br> 3\. Si lo desea, edite el número de puerto SSH en el campo situado bajo `Port`. |

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 4\. Expanda el nodo `SSH` en `Connection` en el árbol `Category`.<br> 5\. Expanda el nodo `Auth` en el árbol `Category`.<br> 6\. Haga clic en `Credentials` para ver los parámetros correspondientes.<br> 7\. Pulse el botón `Browse`{.action}.<br> 8\. Vaya a la carpeta en la que se almacenan los archivos de clave privada.<br> 9\. Abra el archivo de clave correspondiente. |

| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions5.png){.thumbnail} |
|---|
| 10\. Vuelva a la categoría de configuración `Session` en el menú de la izquierda.<br> 11\. Introduzca un nombre para esta conexión en el campo en `Saved Sessions`.<br> 12\. Haga clic en el botón `Save`{.action}. |

<a name="qconnect"></a>

Ahora puede abrir rápidamente cualquier conexión basada en una clave previamente guardada desde la ventana PuTTY o a través de Pageant:

| **PuTTY** | **Pageant** |
|---|---|
| ![sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail}<br> 1\. Abra PuTTY.<br> 2\. Haga doble clic en la sesión deseada en la lista en `Saved Sessions`. |![pageant](/pages/assets/screens/other/web-tools/putty/pageant3.png){.thumbnail}<br> 1\. Haga clic derecho en el icono de pagador de la barra de tareas.<br> 2\. Haga clic en la sesión deseada en el submenú `Saved Sessions`. |

///

Para cambiar la configuración de una sesión, selecciónela en la lista y haga clic en el botón `Load`{.action}.

<a name="example"></a>

### Ejemplo de uso: Cómo utilizar las herramientas PuTTY para configurar conexiones seguras a los servidores de OVHcloud

Este tutorial se puede aplicar a diferentes escenarios y tipos de conexiones.

Siga estos pasos en orden para configurar las conexiones para que se abran en pocos clics:

- Paso 1: [Instalar paquete PuTTY](#installation)
- Paso 2: [Crear un par de claves en PuTTYgen](#puttygen)
- Paso 3: [Añadir la clave pública al host remoto](#transferkeys)
- Paso 4: [Añadir la clave privada en Pageant](#pageant)
- Paso 5: [Guardar la conexión como sesión en PuTTY](#sessions)
- Paso 6: [Conectarse al host remoto mediante la sesión registrada correspondiente](#qconnect)

## Más información

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Cómo crear llaves SSH con OpenSSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Cómo crear llaves SSH con OpenSSH para instancias Public Cloud](/pages/public_cloud/compute/creating-ssh-keys-pci)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).