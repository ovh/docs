---
title: 'Subir o descargar datos en un servidor dedicado por SFTP'
slug: subir-y-descargar-datos-por-sftp
excerpt: 'Cómo transferir datos desde un servidor dedicado hacia un ordenador personal y viceversa'
section: Tutoriales
---

## Introducción

Si necesita migrar sus datos, es posible que tenga que descargarlos desde su servidor dedicado para a continuación guardarlos en otra máquina. Existen diferentes formas de realizar esta operación. Una de ellas es el protocolo SFTP (Secure File Transfert Protocol), que permite transferir archivos de forma sencilla y rápida mediante una conexión SSH segura.

**Este tutorial explica cómo subir o descargar datos en un servidor dedicado por SFTP.**

> [!warning]
>
En este tutorial explicamos cómo utilizar una o más soluciones de OVH con herramientas externas en un contexto concreto. Deberá adaptar las indicaciones a su caso particular. Si necesita ayuda, le recomendamos que contacte con un proveedor especializado o que comparta sus dudas con nuestra comunidad en <https://community.ovh.com/en/>. Nosotros no podremos asistirle.
>


## Requisitos


### Conocimientos necesarios

* Administración en Linux.
* Poder conectarse por SSH.
* Poder instalar una distribución (en esta guía utilizaremos Debian 9.4).


### Hardware y software necesarios

* Tener al menos un servidor dedicado de OVH.
* Tener un cliente SFTP (en este tutorial utilizaremos [FileZilla](https://filezilla-project.org/){.external}).


## Procedimiento


### Descargar los datos

Los servidores instalados con un sistema Linux disponen por defecto de acceso SSH a través del puerto 22.

El protocolo SFTP (Secure File Transfert Protocol) permite transferir archivos mediante una conexión SSH segura. En esta guía explicaremos cómo utilizar este protocolo en dos casos concretos: cuando es posible acceder al servidor y cuando el servidor está en modo «rescue» o de rescate.


#### Cuando es posible acceder al servidor

En FileZilla, introduzca su IP en el campo `Servidor`{.action}. A continuación, introduzca su nombre de usuario root y la contraseña. En el campo `Puerto`{.action}, introduzca el número **22** (o el del servicio SSH si lo ha modificado).

Se establecerá la conexión y el árbol de directorios aparecerá en el panel «**Sitio remoto**».

 
![Sitio remoto SFTP](images/sftp_ds_01.png)
 

Para guardar datos en su ordenador personal, puede arrastrarlos desde el panel derecho («**Sitio remoto**») hasta el panel izquierdo («**Sitio local**»). En el ejemplo de la imagen, los datos están en el directorio «**/home/data**», presente en el panel derecho («**Sitio remoto**»).

El progreso de la transferencia se muestra en el panel inferior.

 
![Progreso de la transferencia SFTP](images/sftp_ds_02.png)


#### Cuando el servidor está en modo «rescue» o de rescate 

En modo de rescate, es necesario montar primero la partición. Para ello, siga los pasos que se describen en la guía [Activar y utilizar el modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/).

Una vez montada la partición, vuelva a conectarse al puerto **22** con su cliente SFTP (en este caso FileZilla).


> [!primary]
>
> Las claves de acceso se envían por correo electrónico al poner el servidor en modo de rescate.
>


Si ha realizado correctamente el punto de montaje, los datos se encontrarán en el directorio «**/mnt**» (en nuestro ejemplo, «**/mnt/data/**»).

![Sitio remoto SFTP modo rescate](images/sftp_ds_03.png)

 
### Subir datos al servidor

Para subir datos al servidor, el procedimiento es el mismo: conéctese por SFTP al puerto **22** con su usuario root y siga los pasos que se indican más arriba.

Una vez que se haya conectado al servidor en el que quiera subir datos, podrá arrastrar los archivos. Sin embargo, en esta ocasión deberá hacerlo desde el panel izquierdo («**Sitio local**») hasta el panel derecho («**Sitio remoto**») para transferir los datos de su ordenador personal al servidor.


## Más información

Para más información, interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.