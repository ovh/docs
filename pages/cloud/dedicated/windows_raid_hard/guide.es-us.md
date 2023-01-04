---
title: 'Crear una partición de Windows en un servidor con RAID de hardware'
excerpt: 'Esta guía explicará los pasos necesarios para crear una partición de Windows en un servidor con RAID de hardware.'
slug: windows-raid-hard
section: RAID y discos
---

**Última actualización: 24/07/2018**

# Objectivo

Cuando instala Windows en un servidor con una configuración RAID de hardware, la partición RAID deberá construirse manualmente.

**Esta guía explicará los pasos necesarios para crear una partición de Windows en un servidor con RAID de hardware.**

## Requisitos

- un [servidor dedicado](https://www.ovh.com/world/es/servidores_dedicados/ {.external} con Windows instalado y una tarjeta RAID de hardware (LSI MegaRaid)
- al menos dos discos idénticos
- acceso al [panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}

## Procedimiento

>[!warning]
>
>Seguir los pasos de esta guía requerirá que elimine y reconstruya el volumen RAID existente. Esto significa que todos los datos existentes se perderán. Asegúrese de hacer una copia de seguridad de sus datos de antemano. Esta guía es para usuarios experimentados.
>

### Listar los volúmenes RAID existentes

Primero, debemos enumerar los volúmenes RAID existentes para poder eliminarlos. Para hacer esto, usaremos el siguiente comando: `MegaCli -LDInfo -Lall -aAll`{.action}.

```sh
# root@rescue:~# MegaCli -LDInfo -Lall -aAll
 
Adapter 0 -- Virtual Drive Information:
Virtual Drive: 0 (Target Id: 0)

Name                 :
RAID Level           : Primary-5, Secondary-0, RAID Level Qualifier-3
Size                 : 3.637 TB
Sector Size          : 512
Is VD emulated       : No
Parity Size          : 1.818 TB
State                : Optimal
Strip Size           : 256 KB
Number Of Drives     : 3
Span Depth           : 1
Default Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy    : Disk's Default
Encryption Type      : None
Bad Blocks Exist     : No
PI type              : No PI
 
Is VD Cached: No
 
Exit Code: 0x00
```
Podemos ver en los resultados anteriores que actualmente solo tenemos un volumen RAID en el servidor, y que el servidor tiene la **Virtual Drive** `0`.

### Eliminar el RAID

Ahora podemos romper el RAID existente y luego crear nuestro nuevo RAID.

Para hacer esto, usaremos el siguiente comando. Tendremos que usar el número de **Virtual Drive** que se encuentra en el paso anterior.

`MegaCli -CfgLDDel -Lx -a0`{.action}

x es el número de la **Virtual Drive**.

Ejemplo:

```sh
# root@rescue:~# MegaCli -CfgLDDel -L0 -a0
 
Adapter 0: Deleted Virtual Drive-0(target id-0)
 
Exit Code: 0x00
```

>[!primary]
>
>Si su servidor ya tiene más de un RAID, repita la operación con cada número de **Virtual Drive**
>

### Encuentra las ID de discoc

Ahora recuperaremos la **ID del gabinete** y el **SlotID*** de los discos en el servidor para crear nuestro nuevo RAID.

Para hacer esto, usaremos el siguiente comando: `MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"`{.action}.

Ejemplo:

```sh
# root@rescue:~# MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"
Adapter #0
Enclosure Device ID: 252
Slot Number: 0
Enclosure Device ID: 252
Slot Number: 1
Enclosure Device ID: 252
Slot Number: 2
```

Podemos ver que tenemos tres discos. La **ID de gabinete** y las **ID de ranura** son 252:0, 252 1 y 252:2 respectivamente.

### Crea el nuevo RAID

Primero, crearemos el primer RAID que se utilizará para nuestro sistema operativo.

Utilizaremos el siguiente comando: `MegaCli -CfgLdAdd -rX [EncID: SlotID, EncID: SlotID, ...] -szYYYYY -a0`{.action}.

`X` es el nivel RAID deseado (0, 1, 5 o 6).

`EncID` es el ID del gabinete del disco encontrado en el paso anterior.

`SlotID` son los SlotID del disco encontrado en el paso anterior.

`YYYYY` es el tamaño de nuestro primer disco virtual especificado en MB.

En nuestro ejemplo, crearemos un volumen RAID-5 en nuestros tres discos, con 200 GB para nuestro sistema operativo.

> [!primary]
>
>Es recomendable crear un volumen con un poco más de espacio que el tamaño mínimo requerido. Esto es para garantizar que el sistema tenga espacio para actualizaciones e instalaciones.
>

```sh
# root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -sz204800 -a0
 
Adapter 0: Created VD 0
 
Adapter 0: Configured the Adapter!!
 
Exit Code: 0x00 
```

Aquí, nuestro primer RAID ha sido creado. Ahora solo tenemos que asignar el resto del espacio disponible.

Por lo tanto, crearemos un segundo RAID mediante el siguiente comando: `MegaCli -CfgLdAdd -rX [EncID: SlotID, EncID: SlotID, ...] -a0`{.action}.

`X` es el nivel RAID deseado (0, 1, 5 o 6).

`EncID` es el ID del gabinete del disco encontrado en el paso anterior.

`SlotID` son los SlotID del disco encontrado en el paso anterior.

Ejemplo:

```sh
# root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -a0
 
Adapter 0: Created VD 1
 
Adapter 0: Configured the Adapter!!
 
Exit Code: 0x00 
```

Está hecho. Ahora todo lo que tenemos que hacer es verificar nuestro RAID.
 
### Verifique la creación del RAID

Utilizaremos el primer comando en esta guía, que enumera los volúmenes RAID: `MegaCli -LDInfo -Lall -aALL`{.action}.

Ejemplo:

```sh
root@rescue:~# MegaCli -LDInfo -Lall -aAll

Adapter 0 -- Virtual Drive Information:
Virtual Drive: 0 (Target Id: 0)

Name                 :
RAID Level           : Primary-5, Secondary-0, RAID Level Qualifier-3
Size                 : 200.195 GB
Sector Size          : 512
Is VD emulated       : No
Parity Size          : 100.097 GB
State                : Optimal
Strip Size           : 256 KB
Number Of Drives     : 3
Span Depth           : 1
Default Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy    : Disk's Default
Encryption Type      : None
Bad Blocks Exist     : No
PI type              : No PI
 
Is VD Cached: No

Virtual Drive: 1 (Target Id: 1)

Name                 :
RAID Level           : Primary-5, Secondary-0, RAID Level Qualifier-3
Size                 : 3.441 TB
Sector Size          : 512
Is VD emulated       : No
Parity Size          : 1.720 TB
State                : Optimal
Strip Size           : 256 KB
Number Of Drives     : 3
Span Depth           : 1
Default Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Current Cache Policy : WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy    : Disk's Default
Encryption Type      : None
Bad Blocks Exist     : No
PI type              : No PI
 
Is VD Cached: No
 
Exit Code: 0x00
```
También podemos usar el comando `fdisk -l`{.action} para ver nuestros dos volúmenes RAID.

```sh
# root@rescue:~# fdisk -l
 
Disk /dev/sda: 200.2 GiB, 214958080000 bytes, 419840000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
 
Disk /dev/sdb: 3.5 TiB, 3784730214400 bytes, 7392051200 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

### Instalación de Windows desde el Panel de control OVHcloud

Finalmente, vaya al Panel de control de OVHcloud para continuar con la instalación de Windows en su servidor.

Deberá marcar la casilla `Personalizar configuración de partición`{.action} y cambiar el esquema de partición actual a uno que especifique el disco **C**, con un tamaño máximo de 200 GB.

Una vez que el sistema esté instalado, inicie sesión en su sistema Windows y abra la utilidad `Administración de discos`{.action}, y luego particione el segundo disco virtual (correspondiente a nuestro segundo RAID, que se muestra como "no asignado") en el formato GPT .


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
