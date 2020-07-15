---
title: 'Copiar datos de un servidor a otro utilizando rsync'
slug: copiar-datos-servidor-rsync
excerpt: 'Cómo copiar fácilmente los datos de un servidor a otro mediante rsync'
section: Tutoriales
---

## Introducción

Para realizar un backup o migrar sus datos, necesitará copiarlos o transferirlos de un servidor a otro. 

Rsync (de *remote syncronization*) es un software libre de sincronización de archivos, distribuido bajo la licencia GNU GPL, capaz de realizar una sincronización unidireccional, es decir, de copiar los archivos desde el servidor de origen hasta el servidor de destino. 

**Este tutorial explica cómo copiar los datos de un servidor a otro utilizando rsync.**

> [!warning]
>
Este tutorial explica cómo utilizar una solución de OVHcloud con herramientas externas en un contexto concreto. Deberá adaptar las indicaciones a su caso particular. Si necesita ayuda, le recomendamos que contacte con un proveedor especializado o que comparta sus dudas con nuestra comunidad en <https://community.ovh.com/en/>. Nosotros no podremos asistirle.
>

## Requisitos


### Conocimientos necesarios

* Administración en Linux.
* Saber instalar nuevos paquetes. 
* Saber conectarse por SSH.


### Hardware y software necesarios

* Tener al menos dos servidores dedicados de OVHcloud con la distribución GNU/Linux.
* Tener acceso root a la máquina de origen.
* Tener acceso por SSH a la máquina de destino. 

## Procedimiento


### 1. Instalar rsync

El servidor de origen utilizado en este tutorial funciona en Debian 9.4. Esta distribución dispone de rsync en sus repositorios de forma nativa, por lo que es posible instalar rsync directamente sin necesidad de completarlos.

Para ello, conéctese a la máquina de origen por SSH como superusuario (o root) e instale rsync con el siguiente comando:

```sh
apt-get update && apt-get install rsync
```

### 2. Realizar la transferencia


#### Si no quiere excluir ningún directorio de la copia

Rsync permite copiar en otra máquina todos los directorios, subdirectorios y archivos incluidos en la ruta indicada.

Para ello, la estructura general del comando tendrá el siguiente formato: `rsync -av source/ destination/`.  

Debido a que rsync utiliza el protocolo SSH para conectarse a la máquina de destino, es necesario indicar las claves necesarias. Por lo tanto, el comando debe completarse del siguiente modo: `rsync -av *YourLocalFolder*/ login@server:/*DestinationFolder*/`

Además, si ha cambiado el puerto SSH por otro distinto del puerto 22, será necesario indicar el número de puerto que debe utilizarse para establecer la conexión SSH añadiendo al comando ` -e 'ssh -p X'` (donde «X» es el puerto SSH utilizado).

Así pues, el comando para copiar los datos de un servidor a otro mediante rsync será el siguiente:

```sh
rsync -av -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
```

> [!primary]
>
> Por defecto, no habrá ningún indicador que permita realizar un seguimiento del progreso de la copia.
> Para poder consultar fácilmente (mediante estadísticas detalladas expresadas en MB, GB, etc.) y en tiempo real el progreso de la transferencia, se recomienda añadir al comando el argumento `-P --stats --human-readable`, que quedará del siguiente modo:
>
> ```sh
> rsync -av -P --stats --human-readable -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
> ```


#### Si quiere excluir algún directorio de la copia

Aunque rsync permite transferir todos los directorios de una máquina, existe la posibilidad de que usted desee excluir ciertos directorios o subdirectorios de la copia, en cuyo caso deberá indicar su nombre.

De manera general, se recomienda excluir de la transferencia la caché y los archivos de sistema temporales presentes en el servidor de origen para así evitar conflictos en el servidor de destino. 

A continuación se indican algunos de los directorios que podrían contener este tipo de archivos en un servidor basado en una distribución GNU/Linux: 

* /dev/*
* /proc/* 
* /sys/*
* /tmp/*
* /run/*
* /media/*
* /lost+found
 
Una vez que haya elaborado la lista de los directorios o subdirectorios que desea excluir, el argumento `--exclude` permite indicar a rsync que debe ignorar esos directorios al realizar la copia. 
 
Este argumento debe colocarse al final del comando, repitiéndolo tantas veces como directorios o subdirectorios quiera excluir. Así pues, la estructura general del comando será la siguiente: `rsync --exclude="Folder_Name" --exclude="Other_Folder_name" source/ destination/`.

> [!primary]
>
Tenga en cuenta que es necesario indicar la ubicación relativa del directorio, ya que rsync no admite rutas absolutas. Por lo tanto, si uno de los directorios que quiere excluir se encuentra en **/home/user/test** y usted está situado en **/test**, deberá  indicar `--exclude="test"` (ruta relativa) y no `--exclude="/home/user/test"` (ruta absoluta).
>


Teniendo en cuenta esto último, el comando de transferencia quedará del siguiente modo:
 	
```sh
rsync -av -P --stats --human-readable -e 'ssh -p X' --exclude="Folder_Name" --exclude="Other_Folder_name" YourLocalFolder/ login@server:/DestinationFolder/
```

## Conclusiones

En este tutorial hemos explicado cómo copiar los datos de un servidor a otro utilizando rsync.

Para más información, interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
