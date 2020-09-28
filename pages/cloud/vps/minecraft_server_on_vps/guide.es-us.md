---
title: 'Cómo crear un servidor Minecraft en un VPS o un servidor dedicado'
excerpt: ¡Diseñe su propio servidor y construya su mundo!
slug: minecraft
section: Miscelánea
---

**Última actualización: 22/07/2020**

## Objectivo

Minecraft es un exitoso juego sandbox. Necesita ser alojarse en un servidor si usted desea jugar multijugador.

Usted puede alquilar un servidor Minecraft pre-construido o puede configurarlo usted mismo en un [VPS](https://www.ovh.com/world/es/vps/) o un [servidor dedicado](https://www.ovh.com/world/es/servidores_dedicados/. Esto reducirá los costes y le proporcionará control total sobre su instancia de juego.

En este tutorial, creamos un Minecraft jave Edition en un VPS OVHcloud y probaremos su conectividad.

> [!warning]
>
> OVHcloud proporciona los servicios de los cuales es usted responsable. Nosotros no tenemos acceso a los servidores, como administradores. Por esta razón, no podemos proporcionarle asistencia administrativa. Usted es responsable del software y de la seguridad de su servicio.
>
>Este documento se ofrece como guía. Le invitamos a contactar con su administrador si usted necesita ayuda en la administración de su servidor. No dude en visitar nuestra [community forum] (https://community.ovh.com/en/) {.external} para intercambiar con otros
>

## Requisitos

### Conocimiento

- Conocimiento general sobre como administrar Linux
- Conexión SSH
- Instalación de una distribución Linux( en este caso, Debian 9 o Ubuntu 18.04)

### Debe tener

- [VPS](https://www.ovh.com/world/es/vps/) con 2Gb de RAM mínimo.
- Descargar *minecraft_server.1.16.1.jar* a través de https://www.minecraft.net/en-us/download/server/.

## Instrucciones

### Paso 1: Prepare el servidor

Configuraremos en nuestro servidor VPS para instalar Minecraft. Si es posible reinstale su VPS desde su panel de control (se recomienda Ubuntu o Debian)

Una vez que la distribución esta instalada, conéctese a su VPS con SSH como root usando un terminal. Actualice los paquetes.

```sh
apt update
```

Actualizar el sistema:

```sh
apt full-upgrade
```

Necesitamos instalamos los paquetes que no están presente por defecto. Con el siguiente comando:

```sh
apt install default-jre screen nano wget git
```

Para evitar vulnerabilidades en su sistema, crearemos un usuario llamado « minecraft.» Este usuario ejecutará el proceso minecraft:

```sh
adduser minecraft --disabled-login --disabled-password
```

información adicional será solicitada, únicamente, presione `Enter`{.action} para validar.

El usuario ha sido creado. Por favor tenga en cuenta que no se especificó ninguna contraseña, lo cual es normal. Esta cuenta es únicamente accesible mediante SSH y solo será accesible mediante la cuenta root.

Ahora nos conectaremos al usuario « minecraft »:

```sh
su - minecraft
```

Para completar la configuración del sistema operativo, debemos crear una carpeta llamada 'server'.

```sh
mkdir ~/server && cd ~/server
```

> [!primary]
>
>  Recuerde: El ultimo comando tiene que ser realizado por el usuario « minecraft ».
>

### Paso 2: instala tu servidor Vanilla Minecraft

> [!primary]
>
> Un servidor Vanilla es una instancia sin complementos ni complementos. Experimentarás el juego de la forma en que fue desarrollado por los desarrolladores.
>

Por favor vaya [el sitio web oficial de Minecraft](https://minecraft.net/download/server)  para descargar el fichero. Haga click derecho en 'minecraft_server.1.16.1.jar' para copiar el link.

Ahora que tiene la URL, descárguela en su servidor VPS. Asegúrese de estar ubicado en la carpeta del servidor que creó anteriormente y escriba:

```sh
wget <paste the URL>
```

Antes de iniciar el servidor, debe aceptar el Acuerdo de licencia.

En la misma carpeta, utilice el siguiente comando:

```sh
echo "eula=true" > eula.txt
```

Esta acción creará el archivo `eula.txt` en la raíz de su servidor. Contendrá `eula = true`, lo que significa que acepta los términos y condiciones de Minecraft. Te invitamos a revisar los términos y condiciones en el sitio web oficial de Minecraft.

Su servidor está listo para iniciarse.

Durante el paso 1, instalamos los paquetes screen , que nos da la posibilidad de tener múltiples sesiones del terminal. Iniciaremos Minecraft en una nueva sesión y la lanzaremos en segundo plano. `screen` puede ser muy útil, nos da la posibilidad de lanzar múltiples servidores de Minecraft simultáneamente.

Primero, crearemos un nuevo shell llamado `minecraft1` :

```sh
screen -S minecraft1
```

La ventana de terminal activa cambiará, esto cambia automáticamente a una nueva sesión de shell. Puede crear otros shells si es necesario y  listarlos con el siguiente comando:

```sh
screen -ls
```

Para cambiar de un sheel a otro, puede usar un acceso directo como  `CTRL+a n`{.action}. También puede lograr esto en la línea de comando escribiendo el nombre del `shell`:

```sh
screen -x another_shell
```

Vaya al shell de `minecraft1` que ha creado e inicie el servidor de Minecraft con el siguiente comando:

```sh
java -jar name.of.the.downloaded.file.jar
```

Si desea apagar su servidor, use el comando `stop`.


### Paso 3: Conecte al servidor

Su instancia del servidor ahora está funcional, probemos la conexión. Necesitará descargarse el cliente Minecraft desde esta página web: <https://minecraft.net/>

Instale y lance el cliente Minecraft e inicie sesión.

![Server connection](images/login_minecraft.png){.thumbnail}

En la siguiente captura, en el campo Server name, ponga el nombre de su servidor, En el campo Server Address, establezca la dirección IP de su VPS.

![Server information](images/minecraft_server_login.png){.thumbnail}

Por defecto no se necesita especificar los puertos.

## Conclusión

Su servidor Vanilla Minecraft está ahora instalado en su VPS.

Por favor tenga en cuenta que esta guía de instalación puede también en un [servidor dedicado](https://www.ovh.com/world/es/servidores_dedicados/) {.external}. o en una instancia de [Public cloud de OVHcloud](https://www.ovhcloud.com/es/public-cloud/) {.external}. Con esos servicios, disfrutará de una mejor estabilidad ya tiene hardware dedicado.

Finalmente, para complementos, modificaciones y para personalizar su experiencia de Minecraft, consulte esta documentación oficial https://help.mojang.com/>.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
