---
title: 'Cómo conectarse a hubiC sin utilizar la web o la aplicación'
slug: conectarse-hubic-sin-aplicacion
excerpt: 'Cómo conectarse a un cluster hubiC de tres formas diferentes'
section: hubiC
---

## Introducción 

El servicio hubiC está basado en clusters de almacenamiento OpenStack Swift. Esto hace que sea posible acceder de distintas maneras. OVH recomienda utilizar el sitio web [www.hubic.com](http://www.hubic.com/){.external} para conectarse, aunque también pueden utilizarse otras herramientas.

**Este tutorial explica cómo conectarse a hubiC de tres formas: Cyberduck (cliente Swift), Mountain Duck (disco en red) o un montaje SVFS.**

> [!warning]
> Este tutorial explica cómo utilizar una solución de OVH con herramientas externas en un contexto concreto. Tenga en cuenta que puede ser necesario adaptar las indicaciones a su caso particular. 
>
> Si necesita ayuda, le recomendamos que contacte con un proveedor especializado o que comparta sus dudas con nuestra comunidad en <https://community.ovh.com/en>. Nosotros no podremos asistirle. 
>

## Requisitos

### Conocimientos necesarios

- Instalar una aplicación en su equipo local (para las soluciones Cyberduck y Mountain Duck).
- Utilizar el terminal (para el montaje SVFS).

### Hardware y software necesarios

- Una cuenta de hubiC activa. 
- Un ordenador con sistema operativo Windows, macOS o GNU/Linux.
- Conexión a internet.
- Una licencia válida, en caso de que utilice software propietario de pago (p. ej.: Mountain Duck).


## Procedimiento 


### Elegir el mejor método de conexión

Según su sistema operativo y sus conocimientos técnicos, hay métodos de conexión más adecuados que otros. 

- Si quiere utilizar una solución para Windows o macOS que pueda configurar usted mismo, consulte el apartado de este tutorial [Conectarse a hubiC mediante Cyberduck](./#conectarse-a-hubic-mediante-cyberduck), en el que explicamos cómo conectarse a un cluster hubiC utilizando ese cliente Swift.  

- Si prefiere utilizar una solución «todo en uno» para Windows o macOS, fácil de configurar y a través de un disco en red, consulte el apartado de este tutorial [Conectarse a hubiC utilizando Mountain Duck](./#conectarse-a-hubic-utilizando-mountain-duck), en el que explicamos cómo conectarse a un cluster hubiC mediante ese programa de pago.

- Si utiliza una distribución GNU/Linux, consulte el apartado [Conectarse a hubiC por SVFS](./#conectarse-a-un-cluster-hubiC-por-svfs), en el que explicamos cómo conectarse a un cluster hubiC a través de un montaje SVFS.


## Conectarse a hubiC mediante Cyberduck

Puede conectarse a un cluster hubiC utilizando un cliente Swift. En esta guía, utilizaremos Cyberduck, disponible para Windows y macOS. 


### 1. Descargar e instalar Cyberduck

Descargue la última versión de Cyberduck para su sistema operativo (Windows o macOS) en [este enlace](https://cyberduck.io/download/){.external}. 

Esta aplicación es gratuita y puede utilizarse sin restricciones. Una vez que haya instalado el programa, ejecútelo para comprobar que la operación se haya realizado correctamente y, a continuación, **ciérrelo**.


### 2. Obtener los datos de autenticación 

Es necesario disponer de un perfil de conexión concreto para poder conectarse a hubiC mediante Cyberduck.

Puede descargar dicho perfil en forma de archivo haciendo clic [aquí](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Abra el archivo. Cyberduck se iniciará, y se abrirá una ventana de configuración.


### 3. Autorizar a Cyberduck a conectarse a la cuenta de hubiC

En la ventana de configuración, introduzca la dirección de correo electrónico asociada a su cuenta de hubiC en el campo «**Email**» y cierre la ventana.

![Introducir la dirección de correo electrónico](images/hubic_cyberduck_02.png){.thumbnail}

En la aplicación Cyberduck, haga doble clic en el icono con forma de disco duro situado junto a su dirección de correo electrónico. 

Se abrirá una página en su navegador. Introduzca sus claves de conexión a hubiC y haga clic en el botón `Accept`{.action}. Esto permite autorizar a Cyberduck para que se conecte a hubiC.

![Auth](images/hubic_cyberduck_03.png){.thumbnail}

A continuación, se mostrará un código de autorización, necesario para confirmar el acceso.

![Código de autorización](images/hubic_cyberduck_04.png){.thumbnail}

Copie dicho código, péguelo en la ventana de Cyberduck, en el campo «**Authorization code**», y haga clic en `Registrarse`{.action}. 

![Código de autorización OAuth](images/oauth.png){.thumbnail}

La ventana se cerrará automáticamente y Cyberduck se conectará a su cuenta de hubiC.

### 4. Conectarse a la cuenta de hubiC mediante Cyberduck

A partir de ahora, podrá utilizar Cyberduck para conectarse a su espacio de hubiC haciendo doble clic en el icono con forma de disco duro.

![Login](images/hubic_cyberduck_05.png){.thumbnail}

Desde ahí, puede consultar sus archivos y carpetas. 

![Archivos y carpetas de hubiC](images/hubic_cyberduck_06.png){.thumbnail}

Haga clic derecho sobre un archivo o carpeta para ver las acciones que es posible realizar. Por ejemplo, `Descargar`{.action} permite descargar el archivo o carpeta seleccionado y `Borrar`{.action} permite eliminarlo.

> [!warning]
> 
> Nunca elimine los elementos «**Default**» o «**Default_segments**». Esa acción podría inhabilitar su cuenta de hubiC o perder los datos almacenados.
>

## Conectarse a hubiC utilizando Mountain Duck

Mountain Duck es un programa, disponible para Windows y macOS, que permite conectarse fácilmente a servicios de almacenamiento de datos como hubiC. Estos servicios aparecen en su equipo local como discos de red, y puede utilizarlos como tales. 

> [!primary]
>
> Mountain Duck es una aplicación de pago. Dispone de una versión de prueba, pero esta **no permite establecer conexiones de más de diez minutos**.

### 1. Descargar e instalar Mountain Duck

Descargue la última versión de Mountain Duck para su sistema operativo en [este enlace](https://mountainduck.io/){.external}. Ejecute la instalación e introduzca la clave de registro que haya recibido al adquirir la licencia.

### 2. Obtener los datos de autenticación 

Es necesario disponer de un perfil de conexión concreto para poder conectarse a hubiC utilizando Mountain Duck.

Puede descargar dicho perfil en forma de archivo haciendo clic [aquí](https://svn.cyberduck.io/trunk/profiles/hubiC.cyberduckprofile){.external}.

Abra el archivo. Una vez abierto, hubiC debería aparecer en la lista de servicios compatibles.

### 3. Abrir hubiC como disco duro en red

Compruebe que Mountain Duck funciona correctamente. A continuación, haga clic derecho en el icono de la aplicación situado en la barra de tareas.

![Barra de tareas](images/hubic_mountainduck_01.png){.thumbnail}

Se abrirá una ventana de configuración. Seleccione `hubiC (OVH)`{.action} en el menú desplegable.

![Barra de tareas](images/hubic_mountainduck_02.png){.thumbnail}

Se abrirá una nueva ventana en la que deberá introducir la dirección de correo electrónico asociada a su cuenta de hubiC en el campo **«Email**». A continuación, haga clic en el botón `Connect`{.action}.

### 4. Autorizar a Mountain Duck a conectarse a la cuenta de hubiC

Se abrirá una página en su navegador. Introduzca sus claves de conexión a hubiC y haga clic en el botón `Accept`{.action}. Esto permite autorizar a Mountain Duck para que se conecte a hubiC.

![Auth](images/hubic_cyberduck_03.png){.thumbnail}

A continuación, se abrirá una nueva página con un código de autorización, necesario para confirmar el acceso.

![Código de autorización](images/hubic_cyberduck_04.png){.thumbnail}

Copie dicho código y péguelo en la ventana de Mountain Duck.

![Autorización](images/hubic_mountainduck_03.png){.thumbnail}

A continuación, podrá ver su espacio de hubiC en las ubicaciones de red de su ordenador.

![Dispositivo en red](images/hubic_mountainduck_04.png){.thumbnail}

## Conectarse a hubiC por SVFS

Si utiliza un ordenador con una distribución GNU/Linux (en este caso utilizaremos Debian), puede acceder a su espacio de hubiC a través de un punto de montaje SVFS (Swift Virtual File System). Para más información sobre SVFS, consulte la [página del proyecto en GitHub](https://github.com/ovh/svfs).

### 1. Instalar SVFS

Abra el terminal y descargue el paquete SVFS compatible con hubiC utilizando el siguiente comando:

```sh
wget https://github.com/ovh/svfs/releases/download/v0.9.1/svfs_0.9.1_amd64.deb
```

Instale el paquete con el siguiente comando:

```sh
dpkg -i svfs_0.9.1_amd64.deb
```

Durante la instalación, pueden producirse errores de dependencias. La mayoría de ellos pueden corregirse utilizando el siguiente comando (en Debian y derivados):

```sh
apt --fix-broken install
```

A continuación podrá volver a ejecutar la instalación (ya no debería aparecer ningún fallo).

### 2. Configurar el punto de montaje

Conéctese a [hubic.com](https://hubic.com). Haga clic en `Mi cuenta`{.action} > `Desarrolladores`{.action} > `Añadir una aplicación`{.action}. Asigne un nombre a la aplicación y, en el campo «**Dominio de redirección**», introduzca `http://localhost/`.

![Aplicación](images/hubic_svfs_01.png){.thumbnail}

A la derecha de la aplicación creada, haga clic en `Detalles`{.action}. Necesitará la información de los campos «**Client ID**» y «**Client secret**».

![Client secret](images/client_secret.png){.thumbnail}

De nuevo en el terminal, introduzca el siguiente comando:

```ssh
hubic-application
```

Indique la información solicitada:

| Campo              | Descripción               |
|---------------------------|----------------------------------------|
| Application redirect URL  | http://localhost/                      |
| Application Client ID     | El ID de cliente obtenido anteriormente.      |
| Application Client Secret | El secreto de cliente obtenido anteriormente. |

A continuación, introduzca los siguientes elementos (sustituyendo «email_hubic» y «contraseña_hubic» por el email y la contraseña de su cuenta de hubiC, así como «xxxxxxxx» por los valores correspondientes):

```
1. Setting scope ... OK ~> Email: email_hubic ~> Password: contraseña_hubic
2. Granting access ... OK
3. Getting refresh token ... OK == Sus opciones de montaje == ~> hubic_auth=xxxxxxxx ~> hubic_token=xxxxxxxx
```

### 3. Crear el punto de montaje

Una vez introducidos estos datos, ya puede crear un punto de montaje SVFS utilizando los elementos obtenidos anteriormente (no olvide sustituir los parámetros por el valor correspondiente):

```
# sudo mount -t svfs hubic <punto_montaje> -o hubic_auth=<autenticación_hubic>,hubic_token=<token_hubic>,container=default
```

## Conclusiones

Ya puede acceder a su espacio de almacenamiento hubiC sin utilizar la aplicación oficial o el sitio web www.hubic.com. 

Tenga en cuenta que el acceso a sus datos a través de [www.hubic.com](http://www.hubic.com){.external} sigue siendo el método recomendado. Más allá de este tutorial, OVH no puede ayudarle a realizar las operaciones que aquí se describen.