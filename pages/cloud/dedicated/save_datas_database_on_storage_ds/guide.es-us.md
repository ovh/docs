---
title: 'Guardar copia de seguridad de la información y las bases de datos en un servidor de almacenamiento'
slug: guardar-copia-seguridad-informacion-bases-de-datos-servidor-almacenamiento
excerpt: 'Cómo crear backups de sus datos en cinco sencillos pasos'
section: Tutoriales
---

## Introducción

Sus datos informáticos son activos muy valiosos: su pérdida o alteración podría afectar al desarrollo normal de su actividad. Aunque no es posible eliminar estos riesgos por completo, es aconsejable hacer copias de seguridad al menos una vez al día, preferentemente en un servidor o una solución de almacenamiento distinta de la que alberga la producción.

OVH ofrece una [gama de servidores dedicados](https://www.ovh.es/servidores_dedicados/storage/){.external} específica para operaciones de almacenamiento. Estos servidores disponen de un mínimo de cuatro discos duros, y en ellos es posible realizar el backup de infraestructuras alojadas tanto en OVH como en otro proveedor, en este último caso a través de la red pública de internet.

Esta guía explica cómo configurar un servidor de almacenamiento de OVH para adaptarlo a sus necesidades, cómo crear el árbol de directorios en el que se guardarán las copias de seguridad y, por último, cómo automatizar la copia de seguridad de los datos de dos servidores remotos mediante el protocolo SCP.


## Requisitos

### Conocimientos necesarios

- Administración en Linux.
- Conectarse por SSH. 
- Conectarse a una base de datos. 
- Realizar el backup de una base de datos.
- Instalar una distribución (en esta guía utilizaremos Debian 9.4).

### Hardware y software necesarios

- Un [servidor de almacenamiento](https://www.ovh.es/servidores_dedicados/storage/){.external} de OVH.
- Una infraestructura de producción ([VPS](https://www.ovh.es/vps/){.external}, [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external}, [instancia de Public Cloud](https://www.ovh.es/public-cloud/instancias/){.external}…).
- Conexión SSH configurada entre el servidor de almacenamiento y la infraestructura de producción.
- Una [red privada](https://www.ovh.es/soluciones/vrack/){.external} entre los servidores (recomendado).



## Procedimiento

### 1. Elegir el nivel de RAID adecuado

Los [servidores de almacenamiento](https://www.ovh.es/servidores_dedicados/storage/){.external} de OVH incluyen varios discos duros en su configuración de hardware. Para este tutorial, vamos a utilizar un servidor con RAID por software (o softRAID) y cuatro discos con una capacidad de 6 TB cada uno.

OVH permite elegir entre los siguientes niveles de RAID para configurar el almacenamiento de los datos: 0, 1, 5, 6 y 10. Cada uno de estos niveles presenta ventajas e inconvenientes en cuanto a rendimiento y resiliencia. Con cuatro discos podríamos elegir entre RAID 5, 6 o 10 para almacenar nuestros datos eficazmente (en este caso, RAID 0 y 1 no son adecuados).

A continuación ofrecemos más información sobre estos niveles de RAID.

#### RAID 5

Este RAID reparte los datos en un mínimo de tres discos duros y utiliza un cuarto para reconstruir los demás discos en caso de fallo, almacenando en él la información de paridad. Este disco es el que permite ofrecer tolerancia a fallos. El rendimiento será mejor en lectura, pero no en escritura (debido al bit de paridad).

En nuestro caso, el volumen tiene una capacidad de 18 TB.

#### RAID 6

Se trata de una versión mejorada del RAID 5, con un mínimo de cuatros discos duros. La información de paridad se escribe en dos discos, y no solo en uno, lo cual garantiza una mayor redundancia (tolerancia a fallos de dos discos). El rendimiento de lectura y escritura también se optimiza.

En nuestro caso, el volumen tiene una capacidad de 12 TB.

#### RAID 10

El RAID 10 es el resultado de combinar dos procesos. El primero consiste en «dividir» los datos y almacenarlos en dos discos, consiguiendo así un mayor rendimiento, ya que ambos discos pueden trabajar de forma simultánea. El segundo consiste en duplicar los datos en modo «espejo» en dos discos, logrando así tolerancia a fallos en dos discos de un mismo cluster.

En nuestro caso, el volumen tiene una capacidad de 12 TB.

No existe un modo RAID mejor que otro, ya que cada uno responde a necesidades diferentes. En el ejemplo que describimos en este tutorial, buscamos la máxima tolerancia a fallos de disco, pero conservando un alto rendimiento en lectura y escritura, por lo que el modo RAID 6 se presenta como la opción más adecuada.


### 2. Instalar y configurar el servidor

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e instale el servidor.
 Como indicamos al principio, utilizaremos Debian 9.4. Para más información, consulte nuestra guía [Primeros pasos con un servidor dedicado](https://docs.ovh.com/es/dedicated/primeros-pasos-servidor-dedicado/#instalar-o-reinstalar-el-servidor-dedicado_1){.external}.

Una vez seleccionado el sistema operativo, marque la casilla `Personalizar la configuración de las particiones`{.action} y haga clic en `Siguiente`{.action}.

![Personalizar la configuración de las particiones](images/partition_customization.png){.thumbnail}

Aquí podrá cambiar el tipo de RAID de su **/home** (1) y, si lo desea, aumentar el tamaño de la partición (2).

![Edición de la /home](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> No es posible cambiar el nivel de RAID de **/boot**.
> 

### 3. Crear directorios de destino

Para poder almacenar las copias de seguridad de forma ordenada, es recomendable crear directorios de destino. Para ello, conéctese por SSH al servidor dedicado y consulte los datos de la partición:

```sh
df -h

Filesystem      Size    Used Avail Use% Mounted on
udev            7,8G       0  7,8G   0% /dev
tmpfs           1,6G     51M  1,6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7,9G       0  7,9G   0% /dev/shm
tmpfs           5,0M       0  5,0M   0% /run/lock
tmpfs           7,9G       0  7,9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Utilice el comando `mkdir` para crear el árbol de directorios. En nuestro caso, el servidor recibirá las copias de seguridad de dos servidores web en producción. Crearemos, por lo tanto, dos directorios: **servidor1** y **servidor2**. Cada uno de ellos tendrá un subdirectorio **dump** para las copias de seguridad SQL y un subdirectorio **data** para los datos web.

Utilice el comando `tree` para visualizar el árbol de un directorio. Obtendrá un resultado como el siguiente:

```sh
tree
.
└── backups
    ├── servidor1
    │   ├── data
    │   └── dump
    └── servidor2
        ├── data
        └── dump

7 directories, 0 files
```

### 4. Transferir datos de los servidores remotos al servidor de almacenamiento

El servidor de almacenamiento ya estará listo para recibir las copias de seguridad.

> [!primary]
> 
> Si sus infraestructuras de producción están alojadas en OVH y disponen de nuestra solución de red privada vRack, podrá configurarlas para evitar que sus copias de seguridad pasen por la red pública (internet).
>

Para ello, deberá conectarse por SSH a sus servidores de producción, que a su vez se conectarán al servidor de almacenamiento mediante el protocolo SCP. Es necesario que todos los recursos puedan comunicarse por SSH.

En primer lugar, vamos a realizar una copia de seguridad de la base de datos MySQL, comúnmente llamada *dump*. Para un uso avanzado, consulte la documentación oficial de su base de datos.

```sh
mysql --host=localhost --user=SU_USUARIO --password=SU_CONTRASEÑA mydb
mysqldump --all-databases > dump.sql
```

Una vez configurado el servicio SSH, acceda a sus servidores de producción y ejecute el comando `scp`.

```sh
scp SU_ARCHIVO_DUMP user@IP_ALMACENAMIENTO:/home/backups/servidor1/dump

The authenticity of host 'IP_almacenamiento (IP_almacenamiento)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'IP_almacenamiento' (ECDSA) to the list of known hosts.

user@IP_almacenamiento's password: 
```

> [!primary]
> 
> Si ha cambiado el puerto SSH del servidor de almacenamiento, añada el argumento `-P`.
>

Realice la misma operación para los archivos. El comando `scp` también permite realizar copias de seguridad de carpetas completas.

```sh
scp -r DIRECTORIO_DE_ORIGEN user@IP_ALMACENAMIENTO:/home/backups/servidor1/datas/2018_01_01
```

Existen métodos más eficaces, como **rsync**, disponibles de forma gratuita y con funcionalidades avanzadas, como la reanudación de un envío en caso de fallo.


### 5. Realizar una planificación diaria básica con Cron

Conectarse a diario a cada uno de los servidores para hacer una copia de seguridad es una tarea tediosa. Existen métodos sencillos para automatizar una tarea. Uno de los más utilizados es el programa **Cron**, de Unix, con el que podrá planificar líneas de comandos con una frecuencia por horas, días, meses o incluso años. Cada usuario Unix dispone de su propia lista de tareas planificadas, llamada **crontab**.

Para mayor seguridad, le recomendamos que cree otra cuenta de usuario Unix y le atribuya tareas planificadas.

Para ello, ejecute el siguiente comando:

```sh
crontab -e
```

Añada la siguiente línea para automatizar el envío de su dump SQL cada día del año, por ejemplo a las 2 de la madrugada:

```sh
0 2 * * * scp ARCHIVO_DUMP user@IP_ALMACENAMIENTO:/home/backups/servidor1/dump >/dev/null 2>&1
```

Para más información sobre la sintaxis de una tarea crontab, consulte un sitio web especializado.



## Conclusiones

En este tutorial hemos explicado cómo configurar un servidor de almacenamiento de OVH adaptado a sus necesidades, en el que hemos automatizado de forma básica el backup de los archivos. Esta es una medida importante para proteger su negocio evitando una posible pérdida de datos.

Como ya hemos mencionado anteriormente, existen otras formas, tanto gratuitas como de pago, de optimizar las copias de seguridad. Si sus datos son especialmente sensibles, le recomendamos también que los cifre y que solo utilice redes privadas, como el vRack de OVH, para su transmisión.