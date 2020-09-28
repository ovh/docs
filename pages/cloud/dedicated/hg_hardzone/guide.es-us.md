---
title: HG Hardzone
excerpt: Esta guía explica cómo realizar pruebas de rendimiento en el servidor HG Hardzone
slug: hg_hardzone
section: Miscelánea
---

Los distintos tipos de RAID están repartidos entre el propio servidor y dos DAS. Esto le permite probar diferentes RAID por hardware con una tarjeta LSI MegaRAID 9271-4i y también RAID por software, todo ello con distintos tipos de discos.

## RAID por hardware con tarjeta LSI MegaRAID 9271-4i
|Device|Composición del RAID|Tipo|
|---|---|---|
|/dev/sda|2 discos 120 GB SSD DC S3500 (donde está instalado el SO)|RAID 1|
|/dev/sdb|2 discos 240 GB SSD DC S3500|RAID 1|
|/dev/sdc|2 discos 600 GB SSD DC S3500|RAID 1|
|/dev/sdd|2 discos SAS 15000 rpm HGST|RAID 1|
|/dev/sde|2 discos 900 GB SAS 10000 rpm HGST|RAID 1|
|/dev/sdf|2 discos 4 TB SAS 7200 rpm HGST|RAID 1|



### Sistema:
El sistema está instalado en el disco /dev/sda.


## RAID por hardware con una tarjeta LSI MegaRAID 9271-4i con CacheCade y FastPath
|Device|Composición del RAID|Tipo|
|---|---|---|
|/dev/sdg|2 discos 240 GB SSD DC S3500|RAID 1 FastPath|
|/dev/sdh|2 discos 600 Gb SSD DC S3500|RAID 1 FastPath|
|/dev/sdi|2 discos 600 GB SAS 15K rpm HGST|RAID 1 CacheCade|
|/dev/sdj|2 discos 900 GB SAS 10K rpm HGST|RAID 1 CacheCade|
|/dev/sdk|2 discos 4 TB SAS 7200rpm HGST|RAID 1 CacheCade|



### Disco CacheCade:
1 disco de 480 GB SSD DC S3500 está configurado.


## RAID por software
|Device|Composición del RAID|Tipo|
|---|---|---|
|/dev/md1|2 discos 240 GB SSD DC S3500 (/dev/sdl1 y /dev/sdm1)|RAID 1|
|/dev/md2|2 discos 600 GB SSD DC S3500 (/dev/sdn1 y /dev/sdo1)|RAID 1|
|/dev/md3|2 discos 600 GB SAS (/dev/sdp1 y /dev/sdq1)|RAID 1|
|/dev/md4|2 discos 900 GB SAS 10000 rpm HGST (/dev/sdr1 y /dev/sds1)|RAID 1|
|/dev/md5|2 discos 4 TB SAS 7200 rpm HGST (/dev/sdt1 y /dev/sdu1))|RAID 1|


## Prueba de rendimiento de los distintos tipos de RAID


### Test de lectura
El comando hdparm permite medir el porcentaje de lectura en disco:


```
hdparm -Tt /dev/DISCO
```


Sustituya DISCO por el disco que quiera probar.

Ejemplo de prueba del disco /dev/sda:


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




### Test de escritura
El comando dd permite medir el porcentaje de escritura en el disco:


```
dd if=/dev/zero of=/CARPETA/test.data bs=8k count=128k
```


Sustituya CARPETA por la carpeta en la que esté montada la partición del disco que quiera probar.

Ejemplo de prueba de la partición /dev/sda2 montada en /home:


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```


Todos los RAID están por defecto en RAID 1, pero si lo desea puede configurarlos en RAID 0.

## Eliminación de un RAID
La eliminación de un RAID provoca la pérdida completa de los datos que contiene.


## Cambio de un RAID por software
Para cambiar el RAID, es necesario eliminarlo en primer lugar. 

A continuación, es necesario recuperar la información del RAID:


```
mdadm --detail /dev/mdX
```


Ejemplo:


```
mdadm --detail /dev/md1
/dev/md1:
Version : 1.2
Creation Time : Fri Jul 4 21:14:12 2014
Raid Level : raid1
Array Size : 234298176 (223.44 GiB 239.92 GB)
Used Dev Size : 234298176 (223.44 GiB 239.92 GB)
Raid Devices : 2
Total Devices : 2
Persistence : Superblock is persistent

Update Time : Fri Jul 11 13:05:01 2014
State : clean 
Active Devices : 2
Working Devices : 2
Failed Devices : 0
Spare Devices : 0

Name : ns6427926.ip-5-135-134.eu:1 (local to host ns6427926.ip-5-135-134.eu)
UUID : 299015e1:50b4554c:faf58dbc:74d3c2a4
Events : 20

Number Major Minor RaidDevice State
0 8 177 0 active sync /dev/sdl1
1 8 193 1 active sync /dev/sdm1
```


Para cada una de estas particiones, hay que cambiar el estado a «fail» y luego eliminarlas del RAID por software:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Ejemplo:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


Detener el RAID:


```
mdadm --manage --stop /dev/mdX[/code

Ejemplo:

[code]mdadm --manage --stop /dev/md1
```


Borrar los superbloques:


```
mdadm --zero-superblock /dev/sdX
```


Ejemplo:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


Crear el RAID:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


En el código anterior:

- /dev/mdZ es el volumen del RAID que va a crear (no debe existir).
- --level= es el tipo de RAID (0, 1).
- --raid-devices= es el número de discos que forman el RAID.
- /dev/sdX1 /dev/sdY1 partición que compone el RAID por software.


Ejemplo (/dev/md1 en RAID 0 con las particiones /dev/sdl1 y /dev/sdm1):


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```


No olvide formatear el /dev/mdX creado y montarlo para a continuación realizar pruebas de escritura.

