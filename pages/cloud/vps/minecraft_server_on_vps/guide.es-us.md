---
title: 'Tutoriales - Cómo crear un servidor Minecraft en un VPS o un servidor dedicado'
excerpt: 'Cómo instalar un servidor Minecraft'
slug: minecraft
section: Tutoriales
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 29/06/2021**

## Objetivo

Minecraft es un videojuego de construcción de éxito mundial. Si desea jugar en modo multijugador, debe alojarse en un servidor.

Puede contratar un servidor Minecraft preconstruido o configurarlo usted mismo en un [VPS](https://www.ovhcloud.com/es/vps/) o en un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/). Esto le permitirá ahorrar recursos y le permitirá controlar completamente su instancia de juego.

**Este tutorial explica cómo lanzar un servidor Minecraft Java Edition en un VPS de OVHcloud y probar su conectividad.**

> [!warning]
>Esta guía explica cómo utilizar una o más soluciones de OVHcloud con herramientas externas y describe las acciones que deben realizarse en un contexto específico. Es posible que necesite adaptar las instrucciones en función de su caso particular.
>
>Si necesita ayuda para aplicar las indicaciones, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/). Para más información, consulte la sección [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta de OVHcloud.
- Haber instalado una distribución GNU/Linux en el servidor.
- Tener acceso de administrador (root) por SSH a su servidor.
- Tener una comprensión básica de la administración GNU/Linux.

## Procedimiento

> [!primary]
> Este tutorial está basado en la versión "1.17" de Minecraft Java Edition y la versión "16.0.1" de OpenJDK.
>

### Paso 1: Preparar el servidor

En primer lugar, configure su VPS para una instalación de Minecraft.
<br>Se recomienda pedir un nuevo VPS o reinstalar uno existente desde su [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), utilizando la última versión disponible de Ubuntu o Debian. Si es necesario, consulte nuestra guía "[Primeros pasos](../primeros-pasos-con-vps/#reinstallvps)". 

Una vez instalado el sistema operativo, conéctese al VPS por SSH como se describe en la guía "[Primeros pasos con un VPS](../primeros-pasos-con-vps/)".

En primer lugar, actualice los paquetes con sus últimas versiones:

```sh
~$ sudo apt update
```

```sh
~$ sudo apt full-upgrade
```

Utilice el siguiente comando para asegurarse de que se han instalado todos los paquetes necesarios:

```sh
~$ sudo apt install screen nano wget git
```

Instale el paquete Java:

```sh
~$ sudo apt install openjdk-16-jdk
```

Para evitar crear vulnerabilidades en su sistema, cree un usuario llamado "minecraft" que ejecute las acciones del servidor:

```sh
~$ sudo adduser minecraft --disabled-login --disabled-password
```

Se le pedirá que facilite varios datos. sólo tiene que pulsar la tecla `Entrar`{.action} para validarlas.

El usuario se creará ahora. Tenga en cuenta que no se ha especificado ninguna contraseña para este usuario. Esto es normal, ya que la cuenta solo está accesible cuando ya está conectada por SSH con su propia cuenta de usuario.

Cambie al nuevo usuario:

```sh
~$ sudo su - minecraft
```

> [!primary]
>
> Los siguientes comandos deben ser ejecutados por el usuario "minecraft".
>

Para finalizar la instalación, cree una carpeta llamada `server`.

```sh
~$ mkdir ~/server && cd ~/server
```

### Paso 2: Instalar el servidor Vanilla Minecraft

> [!primary]
>
> Un servidor "Vanilla" es una instancia sin ningún tipo de complementos o plugins. Experimentarás el juego tal y como lo crearon los desarrolladores.
>

Primero deberá copiar y pegar el enlace de descarga para el programa servidor.
<br>En el [sitio web oficial de Minecraft](https://minecraft.net/download/server){.external}, haga clic derecho en el enlace de descarga y seleccione `Copiar dirección del enlace`{.action}.

![Descarga del servidor](images/download_jar.png){.thumbnail}

En su terminal de línea de comandos, compruebe que siga en la carpeta `servidor` y utilice `wget` para descargar el archivo.
<br>Sustituya `el_enlace_de_descarga` por la URL real que haya copiado anteriormente.

```sh
~/server$ wget lien_de_telecharged
```

Antes de ejecutar el servidor, debe aceptar la licencia del programa (EULA o _End User License Agreement_) para evitar un corte instantáneo. Para ello, introduzca el siguiente comando:

```sh
~/server$ echo "eula=true" > eula.txt
```

En la raíz del servidor, se creará un archivo llamado `eula.txt`, que contendrá la línea `eula=true`. Esto significa que el programa acepta las condiciones de uso de Minecraft.
<br>Le invitamos a consultar las Condiciones Generales en la [web oficial de Minecraft](https://www.minecraft.net/){.external}.

A continuación, el servidor estará listo para ser iniciado.

En el paso 1, instalamos el paquete `screen` que permite abrir varias sesiones del terminal (*shell*). Vamos a iniciar Minecraft en una nueva sesión que puede ejecutarse en segundo plano. El uso de `screen` puede ser muy práctico, ya que permite ejecutar varios servidores Minecraft simultáneamente.

En primer lugar, vamos a crear una nueva `shell` llamada `minecraft1`:

```sh
~/server$ screen -S minecraft1
```

La ventana activa de su terminal cambia, se desplaza automáticamente a una nueva sesión `shell`. Si lo necesita, puede crear otras `shells` y mostrarlas con el siguiente comando:

```sh
~/server$ screen -ls
```

Para desvincularse del `shell` (y mantenerlo en ejecución), pulse `Ctrl`{.action}, luego `a`{.action}, y luego `d`{.action} en su teclado.

Para pasar de un `shell` a otro, utilice el siguiente comando:

```sh
~/server$ screen -x nombre_shell
```

También puede pulsar `Ctrl`{.action}, a continuación `a`{.action} y, a continuación, `n`{.action}, en su teclado.

En el intérprete de órdenes `minecraft1` creado anteriormente, ejecute el servidor Minecraft con el siguiente comando. (Utilice `ls` archivos para comprobar el nombre del archivo en caso de que sea diferente).

```sh
~/server$ java -jar server.jar
```

Para detener el servidor, introduzca el comando `stop`.

### Paso 3: Conectarse al servidor

La instancia de servidor ya está operativa. Para jugar al juego, descargue al cliente Minecraft desde [el sitio web oficial](https://www.minecraft.net/){.external}.

Instale y ejecute el cliente para su sistema operativo y conéctese.

![Conexión al servidor](images/login_minecraft.png){.thumbnail}

En la siguiente pantalla, introduzca el nombre del servidor en el campo `Server Name` y la dirección IP del servidor en el campo `Server Address`.

![Información del servidor](images/minecraft_server_login.png){.thumbnail}

Por defecto, no es necesario introducir ningún puerto.

### Conclusiones

El servidor Vanilla Minecraft ya está instalado en su VPS.

Esta guía de instalación también es válida para un [servidor dedicado de OVHcloud](https://www.ovhcloud.com/es/bare-metal/) o una instancia de [Public Cloud](https://www.ovhcloud.com/es/public-cloud/). Con estas soluciones, también disfrutará de recursos físicos garantizados y estables en cualquier momento del día, ya que el hardware es dedicado.

## Más información <a name="gofurther"></a>

Para añadir add-ons, mods y configurar más finamente su servidor Minecraft, consulte la siguiente documentación oficial: <https://help.mojang.com/>.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.