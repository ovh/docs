---
title: 'Sustituir un disco en caliente en un servidor con RAID por software'
slug: hotswap-raid-soft
excerpt: 'Cómo sustituir un disco sin interrupción del servicio en un servidor con RAID por software'
section: 'RAID y discos'
---

**Última actualización: 05/04/2019**

## Objetivo

En los servidores Alta Gama compatibles, es posible sustituir un disco dañado en caliente.

**Esta guía explica qué pasos debe seguir para sustituir en caliente un disco de un servidor con RAID por software.**

## Requisitos

- Tener contratado un servidor [mHG, HG o BHG](https://www.ovh.es/servidores_dedicados/hg/){.external}.
- Tener RAID por software (con tarjeta LSI).
- Tener acceso por SSH (Linux) o RDP (Windows).
- Haber instalado la utilidad sas2ircu (disponible en la web de [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}).

## Procedimiento

### En Linux

#### 1. Identificar el disco dañado

En esta guía partiremos del supuesto de que el cliente ha recibido una alerta indicándole que el disco **/dev/sdb** falla e invitándole a proceder a su sustitución en caliente. **No olvide adaptar los comandos indicados en esta guía a su caso particular.**

En primer lugar, compruebe el **serial number** (número de serie) del disco dañado.

```sh
root@ns3054662:/home# smartctl -a /dev/sdb
>>> smartctl 6.4 2014-10-07 r4002 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)
>>> Copyright (C) 2002-14, Bruce Allen, Christian Franke, www.smartmontools.org

>>> === START OF INFORMATION SECTION ===
>>> Vendor:               HGST
>>> Product:              HUS726040ALS210
>>> Revision:             A907
>>> Compliance:           SPC-4
>>> User Capacity:        4,000,787,030,016 bytes [4.00 TB]
>>> Logical block size:   512 bytes
>>> LB provisioning type: unreported, LBPME=0, LBPRZ=0
>>> Rotation Rate:        7200 rpm
>>> Form Factor:          3.5 inches
>>> Logical Unit id:      0x5000cca25d3155bc
>>> Serial number:        K4GW439B
>>> Device type:          disk
>>> Transport protocol:   SAS (SPL-3)
>>> Local Time is:        Mon Nov 21 14:23:43 2016 CET
>>> SMART support is:     Available - device has SMART capability.
>>> SMART support is:     Enabled
>>> Temperature Warning:  Enabled

>>> === START OF READ SMART DATA SECTION ===
>>> SMART Health Status: OK

>>> Current Drive Temperature:     34 C
>>> Drive Trip Temperature:        85 C

>>> Manufactured in week 44 of year 2016
>>> Specified cycle count over device lifetime:  50000
>>> Accumulated start-stop cycles:  9
>>> Specified load-unload count over device lifetime:  600000
>>> Accumulated load-unload cycles:  14
>>> Elements in grown defect list: 0

>>> Vendor (Seagate) cache information
>>> Blocks sent to initiator = 2305525022720

>>> Error counter log:
>>>        Errors Corrected by           Total   Correction     Gigabytes    Total
>>>            ECC          rereads/    errors   algorithm      processed    uncorrected
>>>        fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors
>>> read:          0        572         0       22548         77          4.725         5580
>>> write:         0        0         0         19548       196         17.344          2569

>>> Non-medium error count:        0

>>> SMART Self-test log
>>> Num  Test              Status                 segment  LifeTime  LBA_first_err [SK ASC ASQ]
>>>  Description                              number   (hours)
>>> # 1  Background short  Completed                   -       6                 - [-   -    -]
>>> # 2  Background short  Completed                   -       4                 - [-   -    -]
>>> # 3  Background short  Completed                   -       4                 - [-   -    -]
>>> # 4  Background short  Completed                   -       4                 - [-   -    -]
>>> # 5  Background short  Completed                   -       1                 - [-   -    -]

>>> Long (extended) Self Test duration: 34237 seconds [570.6 minutes]
```

En la respuesta al comando anterior puede comprobar lo siguiente: 

- el disco **sdb** está fuera de servicio debido a que presenta errores no corregidos (*uncorrected errors*);
- su serial number se corresponde con el de la alerta recibida (enviada desde el datacenter o a través de cualquier otra herramienta de monitorización).

Para obtener solamente el serial number, utilice el siguiente comando:

```sh
root@ns3054662:/home# smartctl -a /dev/sdb | grep Serial
>>> Serial number:        K4GW439B
```

#### 2. Conocer la posición del disco

A continuación, identifique el **slot** y el **enclosure** del disco dañado. Para ello, utilice la herramienta **sas2ircu**, previamente instalada en el servidor.

En primer lugar, compruebe que los discos están conectados a través de una tarjeta LSI.

```sh
root@ns3054662:/home# lspci | grep -i LSI
>>> 81:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

Si ese es el caso, identifique el ID de dicha tarjeta LSI.

```sh
root@ns3054662:/home# ./sas2ircu list
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.


>>>          Adapter      Vendor  Device                       SubSys  SubSys
>>>  Index    Type          ID      ID    Pci Address          Ven ID  Dev ID
>>>  -----  ------------  ------  ------  -----------------    ------  ------
>>>      0     SAS2004     1000h    70h   00h:81h:00h:00h      1000h   3010h
>>> SAS2IRCU: Utility Completed Successfully.
```

El **index** (índice) corresponde al ID. En el ejemplo, el index, y por tanto, el ID de la tarjeta es 0.

Con esta información podrá obtener el slot y el enclosure del disco dañado a través de su serial number.

```sh
root@ns3054662:/home# ./sas2ircu 0 display | grep -B 7 -A 2 K4GW439B
>>> Device is a Hard disk
>>>   Enclosure                               : 1
>>>   Slot                                    : 3
>>>   State                                   : Available (AVL)
>>>   Manufacturer                            : HGST
>>>   Model Number                            : HUS726040ALS210
>>>   Firmware Revision                       : A907
>>>   Serial No                               : K4GW439B
>>>   Protocol                                : SAS
>>>   Drive Type                              : SAS_HDD
```

Este comando permite consultar la información del disco, cuyo serial number es el K4GW439B.

En nuestro ejemplo, hemos obtenido el enclosure (que aquí corresponde a 1) y el slot (en este caso, 3).

#### 3. Encender el led del disco

Una vez que disponga de los datos que se indican en los pasos anteriores, encienda el led del disco que deba ser sustituido con el comando `./sas2ircu 0 locate Enc:Slot on` (no olvide sustituir «Enc» y «Slot» por el enclosure y el slot previamente obtenidos):

```sh
root@ns3054662:/home# ./sas2ircu 0 locate 1:3 on
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.

>>> SAS2IRCU: LOCATE Command completed successfully.
>>> SAS2IRCU: Command LOCATE Completed Successfully.
>>> SAS2IRCU: Utility Completed Successfully.
```

Puede desactivar el parpadeo del disco sustituyendo `on` por `off` en el comando anterior.

#### 4. Sacar el disco dañado del RAID

Si todavía no lo está, ponga el disco dañado en **faulty**. A continuación, compruebe el estado del RAID.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1]
>>>       3885385728 blocks super 1.2 [2/2] [UU]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[1] sda1[0]
>>>       20971456 blocks [2/2] [UU]

>>> unused devices: <none>
```

En nuestro ejemplo, el disco dañado forma parte de «md1» y «md2» («sdb1» y «sdb2»). Así pues, pondremos en faulty «sdb1» y «sdb2» de «md1» y «md2» respectivamente.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --set-faulty /dev/sdb1
>>> mdadm: set /dev/sdb1 faulty in /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --set-faulty /dev/sdb2
>>> mdadm: set /dev/sdb2 faulty in /dev/md2
```

Una vez completada esta operación, vuelva a comprobar el estado del RAID.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1](F)
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[2](F) sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

Como podemos ver arriba, «sdb1» y «sdb2» ya están en faulty (**F**), así que ya puede proceder a sacar el disco del RAID.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --remove /dev/sdb1
>>> mdadm: hot removed /dev/sdb1 from /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --remove /dev/sdb2
>>> mdadm: hot removed /dev/sdb2 from /dev/md2
```

Por último, compruebe que el disco ya no esté presente.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0]
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

El disco dañado ya puede ser sustituido por un técnico del datacenter. Una vez realizada la intervención, solo tendrá que resincronizar el RAID. Para ello, consulte la guía [RAID por software](https://docs.ovh.com/es/dedicated/raid-software/){.external}.

### En Windows

#### 1. Identificar el disco dañado

En esta guía partiremos del supuesto de que el cliente ha recibido una alerta indicándole que el disco **/dev/sdb** falla e invitándole a proceder a su sustitución en caliente. **No olvide adaptar los comandos indicados en esta guía a su caso particular.**

> [!primary]
>
> Es importante abrir el terminal como administrador para evitar errores.
> 

En primer lugar, compruebe el **serial number** (número de serie) del disco dañado. **En la siguiente captura, el almacenamiento en realidad no está fuera de servicio.**

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}

En la respuesta al comando anterior puede comprobar lo siguiente: 

- el disco **sdb** está fuera de servicio debido a que presenta errores no corregidos (*uncorrected errors*);
- su serial number se corresponde con el de la alerta recibida (enviada desde el datacenter o a través de cualquier otra herramienta de monitorización).

#### 2. Conocer la posición del disco

A continuación, identifique el **slot** y el **enclosure** del disco dañado. Para ello, utilice la herramienta **sas2ircu**, previamente instalada en el servidor.

Identifique el ID de la tarjeta LSI.

![id_lsi_windows](images/id_lsi_windows.png){.thumbnail}

En el ejemplo, el **index** (índice) y, por tanto, el ID de la tarjeta es 0.

Con esta información podrá obtener el **slot** y el **enclosure** del disco dañado a través de su serial number.

![select-string](images/select-string.png){.thumbnail}

El comando anterior permite consultar la información del disco, cuyo serial number es el K4G187WB.

En nuestro ejemplo, hemos obtenido el enclosure (que aquí corresponde a 1) y el slot (en este caso, 1).

#### 3. Encender el led del disco

Una vez que disponga de los datos que se indican en los pasos anteriores, encienda el led del disco que deba ser sustituido con el comando `.\sas2ircu 0 locate Enc:Slot on` (no olvide sustituir «Enc» y «Slot» por el enclosure y el slot previamente obtenidos):

![locate](images/locate.png){.thumbnail}

Puede desactivar el parpadeo del disco sustituyendo `on` por `off` en el comando anterior.

#### 4. Sacar el disco dañado del RAID

Esta operación puede realizarse desde la utilidad **Administración de discos** del servidor Windows.

A continuación, el disco dañado ya podrá ser sustituido por un técnico del datacenter. Una vez realizada la intervención, solo tendrá que resincronizar el RAID. Para ello, consulte la guía [RAID por software](https://docs.ovh.com/es/dedicated/raid-software/){.external}.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.