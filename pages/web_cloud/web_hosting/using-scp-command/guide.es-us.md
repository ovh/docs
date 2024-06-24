---
title: "Web hosting - Copiar archivos con el comando SCP"
excerpt: "Descubra cómoómo utilizar el comando Secure Copy Protocol (SCP) en SSH para copiar archivos desde o hacia su alojamiento web"
updated: 2024-01-30
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El Secure Copy Protocol (SCP) permite copiar datos de forma segura (gracias al protocolo SSH) entre dos dispositivos. De esta forma, puede copiar el contenido:

- presente localmente desde su ordenador hacia un dispositivo remoto;
- desde un dispositivo remoto hasta su ordenador;
- de un servidor a otro (no disponible entre dos alojamientos web de OVHcloud).

Permite copiar un archivo o una carpeta que contiene uno o varios archivos desde un terminal y utilizando un comando Linux.

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Para más información, consulte la sección ["Más información"](#go-further) de esta guía.
>

**Descubra cómo utilizar el comando Secure Copy Protocol (SCP) por SSH para copiar archivos desde o hacia su alojamiento web.**

## Requisitos

- Tener un terminal compatible con los comandos Linux y SSH (por ejemplo, el *terminal* de MacOS o el emulador *Ubuntu* en Windows)
- Familiarizarse con los comandos Linux y SSH
- Tener contratado un plan de [alojamiento web](/links/web/hosting) con acceso por SSH
- Tener acceso al [área de cliente de OVHcloud](/links/manager){.external}

## Procedimiento

Esta guía explica en detalle las funcionalidades disponibles con el comando `scp`. No dude en interactuar con nuestra [comunidad de usuarios](/links/community) si desea profundizar sus conocimientos sobre este pedido.

### Etapa 1 - Obtener los accesos SSH de su alojamiento web

Para más información sobre los accesos SSH de un alojamiento web, consulte nuestra guía "[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)".

### Etapa 2 - Obtener la ruta de acceso completa al espacio de almacenamiento FTP de su alojamiento web<a name="step2"></a>

Abra su terminal y conéctese a su alojamiento web por SSH.

Una vez conectado al alojamiento web por SSH, introduzca el siguiente comando: 

```ssh
cd ..
```

Valide el comando utilizando la tecla `enter`(↲) del teclado e introduzca el siguiente comando:

```ssh
ls
```

Confirme este segundo comando con la tecla `enter`(↲) del teclado.

En su terminal, aparece un resultado similar al que se muestra a continuación:

```ssh
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

En nuestro ejemplo:

- `FTP-login`: nombre de uno de los usuarios FTP (principal o no) de su alojamiento web.
- `/homez.XXX`: *filer* en el que se encuentra su alojamiento web.
- `FTP-main-login`: ruta de acceso directorio del espacio de almacenamiento FTP de su alojamiento web. Este directorio suele denominarse del mismo modo que el usuario FTP principal del alojamiento web.

En nuestro ejemplo, la ruta de acceso completa al espacio de almacenamiento FTP para acceder a la raíz FTP del alojamiento web es la siguiente: `/homez.XXX/FTP-main-login`.

Solo a partir de un directorio equivalente al directorio `FTP-main-login` de nuestro ejemplo podrá utilizar el comando `scp`.

En efecto, cuando se conecta de manera clásica al espacio FTP de un alojamiento web, la conexión se efectúa directamente situándose dentro de la carpeta equivalente a la carpeta `FTP-main-login` de nuestro ejemplo.

Aquí se encuentran, por defecto, la carpeta `www` y el archivo `.ovhconfig` del alojamiento web.

### Etapa 3 - Utilizar el comando scp con el alojamiento web

> [!success]
>
> Todos los comandos siguientes se realizan desde el terminal de su dispositivo/ordenador **en local**. Por lo tanto, no debe estar conectado por SSH en su terminal del alojamiento web.
>
> La ruta de acceso al fichero utilizada con el comando `scp` es relativa al directorio local actual. Para transferir datos a su alojamiento web o desde un alojamiento web a su dispositivo local, asegúrese de ejecutar sus comandos desde el directorio principal local, como se muestra en los ejemplos siguientes.
>

No olvide sustituir toda la siguiente configuración general por su propia configuración:

- `FTP-login`: login FTP de su alojamiento web.
- `ssh.cluster0XX.hosting.ovh.net`: sustituya los `XX` por el número del cluster en el que se encuentre su alojamiento web. Si lo necesita, consulte nuestra guía "[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)" para más información.
- `/homez.XXX/FTP-main-login/`: modifique los `XXX` por el número del *filer* y el `FTP-main-login` por los parámetros recuperados en el [etapa 2](#step2) de esta guía.
- `source_folder`: nombre de la carpeta de origen que se va a copiar o en la que se encuentra el archivo que se va a copiar. *Si el árbol es una sucesión de carpetas anidadas, deberá especificar todos los nombres de las carpetas separados por un `/`*.
- `target_folder`: nombre de la carpeta de destino que recibirá la carpeta o el archivo local que se va a copiar. *Si el árbol es una sucesión de carpetas anidadas, deberá especificar todos los nombres de las carpetas separados por un `/`*.
- `file`: nombre del archivo que se va a copiar con el comando `scp`. No olvide indicar la extensión de este archivo (por ejemplo, *.html*, *.css*, *.php*, *.txt*, etc.).

#### Copiar contenido local en su dispositivo a su alojamiento web

Para copiar un solo archivo local en su alojamiento web, utilice el siguiente comando:

```ssh
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

Para copiar una carpeta local y todo su contenido en el alojamiento web, utilice el siguiente comando:

```ssh
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Copiar contenido de su alojamiento web en su dispositivo local

Para copiar un solo archivo de su alojamiento web en su dispositivo local, utilice el siguiente comando:

```ssh
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

Para copiar una carpeta de su alojamiento web y todo su contenido en su dispositivo local, utilice el siguiente comando:

```ssh
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Copiar el contenido de su alojamiento web de OVHcloud en otro alojamiento web de OVHcloud

Por motivos de seguridad, la infraestructura de alojamiento web de OVHcloud rechaza el pedido `scp` por SSH cuando dos alojamientos web intentan copiar contenido entre ellos.

### Etapa 4 - Asegurarse de que el contenido se ha copiado correctamente

Para comprobar que el contenido local de su ordenador se ha copiado en su alojamiento web, puede [conectarse al espacio de almacenamiento FTP de su alojamiento web](/pages/web_cloud/web_hosting/ftp_connection) y, a continuación, dirigirse al directorio de destino en el que se supone que debe copiarse el contenido.

Para comprobar que el contenido de su alojamiento web se ha copiado localmente en su ordenador, acceda al directorio de destino de su dispositivo o ordenador y compruebe que el contenido que se pretende copiar está presente en dicho directorio.

## Más información <a name="go-further"></a>

[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).