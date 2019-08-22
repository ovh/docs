---
title: 'Obtener el número de serie de un disco duro'
slug: obtener-numero-de-serie-disco
excerpt: 'Cómo conocer el número de serie de un disco duro para sustituirlo'
section: 'RAID y discos'
---

**Última actualización: 22/05/2019**

## Objetivo

Para minimizar el riesgo de error durante la sustitución de un disco duro, pedimos a nuestros clientes que proporcionen el número de serie del disco que quieran sustituir. En la mayoría de los casos, puede obtenerlo probando los discos duros uno a uno con la herramienta **Smartmontools**.

**Esta guía explica cómo obtener el número de serie de un disco duro.**

## Requisitos

- Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external}.
- Tener acceso al servidor por SSH como administrador (root).
- En servidores Windows, haber instalado la utilidad **sas2ircu** (disponible en el motor de búsqueda de [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}).

## Procedimiento

> [!primary]
>
> Si se trata de un disco NVMe, será necesario poner el servidor en [modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external} y utilizar la herramienta **nvme-cli**, instalada por defecto.
> 

### Obtener el número de serie de un disco (RAID por software)

Para conocer el número de serie de un disco duro con RAID por software, utilice el comando `smartctl`:

```sh
# smartctl -a /dev/sdX | grep Serial Serial Number:    XXXXXXX
```

En este caso, el periférico (por ejemplo, /dev/sda, /dev/sdb...) es detectado por el sistema operativo.

### Obtener el número de serie de un disco NVMe

En los discos NVMe, utilice el comando `nvme list`:

```sh
root@rescue:~# nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

En la respuesta podrá ver el número de serie de los diferentes discos NVMe (en este caso, nvme0 y nvme1).

### Obtener el número de serie de un disco (Windows)

El proceso en Windows es similar al de Linux. Recurriremos a la utilidad **sas2ircu** con los mismos comandos que los utilizados en Linux.

> [!primary]
>
> Para evitar errores, es necesario ejecturar la consola con permisos de administrador.
> 

Para conocer el número de serie de un disco duro con RAID por software, utilice el siguiente comando:

```sh
# .\smartctl -a /dev/sdX Serial Number: 1234567890
```

Si el periférico (/dev/sda, /dev/sdb...) es detectado por el sistema operativo, en la sección de información de la respuesta podrá ver el número de serie.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


### Obtener el número de serie de un disco (RAID por hardware)

Para más información sobre estos comandos y sobre cómo probar los discos duros, consulte nuestra guía [RAID por hardware](https://docs.ovh.com/es/dedicated/raid-hardware/){.external}.


#### Controladora MegaRAID

##### 1. Identificar los conjuntos de RAID

Antes de utilizar el comando `smartctl` para obtener el número de serie de los discos, es necesario saber cuántos conjuntos RAID (o discos virtuales) tiene el servidor.

Puede obtener esta información con el siguiente comando:

```sh
# MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size: 36.321 GB

Adapter 1

Virtual Drive Information: Size: 2.727 TB
```

En este ejemplo, hay dos RAID configurados en el servidor (Adapter 0 y Adapter 1) que deberían estar asociados a /dev/sda y /dev/sdb respectivamente.


##### 2. Obtener información sobre los discos

Utilice el siguiente comando para obtener información sobre los discos físicos:

```sh
# MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

Slot Number: 0
Device Id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 1
Device Id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 2
Device Id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

Slot Number: 3 
Device Id: 6 
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

##### 3. Obtener el número de serie

Una vez disponga del adaptador y del Device Id, deberá utilizarlos para indicar a smartctl qué disco buscar y en qué conjunto de RAID.

El comando debe tener el siguiente formato:

```sh
# smartctl -d megaraid,N -a /dev/sdX | grep Serial Serial Number: 1234567890
```

No olvide sustituir en el comando anterior **N** por el Device Id y **sdX** por el volumen en RAID (**/dev/sda** para el primer RAID, **/dev/sdb** para el segundo RAID, y así sucesivamente).


> [!primary]
>
> En determinadas situaciones, podría obtener la siguiente respuesta:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> 
> En ese caso, deberá sustituir **megaraid** por **sat+megaraid**:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial Serial Number:    1234567890
> ```
>

#### Obtener el número de serie de un disco (controladora RAID LSI)

Las tarjetas controladoras RAID LSI utilizan un módulo llamado **sg-map**, que asocia los periféricos a rutas de tipo /dev/sgX (siendo «X» el número del periférico).

Para determinar qué periférico sg corresponde a cada disco duro, consulte nuestra guía [RAID por hardware](https://docs.ovh.com/es/dedicated/raid-hardware/){.external}.

Una vez que sepa qué periférico sg corresponde al disco duro que quiera analizar, utilice el siguiente comando:

```sh
# smartctl -a /dev/sgX | grep Serial Serial Number:    1234567890
```

No olvide sustituir en el comando anterior **sgX** por **/dev/sg0**, **/dev/sg1**...



## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.