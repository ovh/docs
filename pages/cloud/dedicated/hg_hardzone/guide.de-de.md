---
title: HG Hardzone
excerpt: Anleitung zur Durchführung von Performance-Tests für den HG Hardzone Server
slug: hg_hardzone
legacy_guide_number: g1517
section: 'RAID & Festplatten'
---

Die verschiedenen RAID-Typen sind auf den Server und zwei DAS-Module verteilt. Sie können also sowohl Hardware-RAIDs mit einer LSI Megaraid 9271-4i Karte als auch Software-RAIDs mit verschiedenen Festplattentypen testen.

## Hardware-RAID mit einer LSI Megaraid 9271-4i Karte
|Devices|Zusammensetzung des Hardware-RAID|Type|
|---|---|---|
|/dev/sda|2 Festplatten mit 120 GB: SSD DC S3500 (Betriebssystem)|Raid 1|
|/dev/sdb|2 Festplatten mit 240 GB: SSD DC S3500|Raid 1|
|/dev/sdc|2 Festplatten mit 600 GB: SSD DC S3500|Raid 1|
|/dev/sdd|2 Festplatten mit 600 GB: SAS 15K rpm HGST|Raid 1|
|/dev/sde|2 Festplatten mit 900 GB: SAS 10K rpm HGST|RAid 1|
|/dev/sdf|2 Festplatten mit 4 TB: SAS 7200 rpm HGST|Raid 1|



## Betriebssystem:
Das Betriebssystem ist auf dem Device /dev/sda installiert.


## Hardware-RAID mit einer LSI Megaraid 9271-4i Karte mit CacheCade und FastPath
|Devices|Zusammensetzung des Hardware-RAID|Type|
|---|---|---|
|/dev/sdg|2 Festplatten mit 240 GB: SSD DC S3500|Raid 1 FastPath|
|/dev/sdh|2 Festplatten mit 600 GB: SSD DC S3500|Raid 1 FastPath|
|/dev/sdi|2 Festplatten mit 600 GB: SAS 15K rpm HGST|Raid 1 CacheCade|
|/dev/sdj|2 Festplatten mit 900 GB: SAS 10K rpm HGST|Raid 1 CacheCade|
|/dev/sdk|2 Festplatten mit 4 TB: SAS 7200 rpm HGST|Raid 1 CacheCade|



## CacheCade Festplatte:
Eine 480 GB SSD DC S3500 ist für CacheCade konfiguriert.


## Software-RAID
|Devices|Zusammensetzung des Software-RAID|type|
|---|---|---|
|/dev/md1|2 Festplatten mit 240 GB: SSD DC S3500 (/dev/sdl1 & /dev/sdm1)|Raid 1|
|/dev/md2|2 Festplatten mit 600 GB: SSD DC S3500 (/dev/sdn1 & /dev/sdo1)|Raid 1|
|/dev/md3|2 Festplatten mit 600 GB: SAS (/dev/sdp1 & /dev/sdq1)|Raid 1|
|/dev/md4|2 Festplatten mit 900 GB: SAS 10K rpm HGST (/dev/sdr1 & /dev/sds1)|Raid 1|
|/dev/md5|2 Festplatten mit 4 TB: SAS 7200 rpm HGST (/dev/sdt1 & /dev/sdu1))|Raid 1|



Um die Performance der verschiedenen RAID-Typen zu testen gehen Sie wie folgt vor:

## Leserate
Mit dem Befehl hdparm können Sie die Geschwindigkeit der Festplattenverbünde beim Lesen messen:


```
hdparm -Tt /dev/DEVICE
```


DEVICE ist das zu testende Device.

Beispiel: (Test von /dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




## Schreibrate
Mit dem Befehl dd können Sie die Geschwindigkeit der Festplattenverbünde beim Schreiben messen:


```
dd if=/dev/zero of=/ORDNER/test.data bs=8k count=128k
```


ORDNER ist der Ordner, in dem die zu testende Partition des Devices gemountet ist.

Beispiel: (Partition /dev/sda2 gemountet in /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
Standardmäßig sind alle RAID Verbünde im RAID 1 Modus, Sie können diese auf RAID 0 umstellen, wenn Sie möchten.

## Löschung eines RAID Verbunds
Die Löschung eines RAID Verbunds zieht die vollständige Löschung sämtlicher darin befindlicher Daten nach sich.


## Änderung eines Software-RAID
Um den RAID zu ändern, muss dieser zuerst gelöscht werden. Anschließend:


- Abruf der RAID-Informationen:


```
mdadm --detail /dev/mdX
```


Beispiel:


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


- Für jede dieser Partitionen muss der Status auf "fail" gesetzt werden, und danach müssen sie aus dem Software-RAID entfernt werden:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Beispiel:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- Das RAID anhalten:


```
mdadm --manage --stop /dev/mdX[/code

[u]Beispiel:[/u]

[code]mdadm --manage --stop /dev/md1
```


- Die Superblocks löschen:


```
mdadm --zero-superblock /dev/sdX
```


Beispiel:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- Das RAID erstellen:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ: ist das Volume des RAID, das Sie erstellen werden (dieses darf nicht bzw. nicht mehr existieren).
--level=: ist der RAID-Typ (0,1).
--raid-devices=: ist die Anzahl der Devices im RAID.
/dev/sdX1 /dev/sdY1: das Software RAID bildende Partition.

Beispiel: (/dev/md1 im RAID 0 mit den Partitionen /dev/sdl1 und /dev/sdm1)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Denken Sie daran, das erstellte /dev/mdX zu formatieren und zu mounten, bevor Sie die Lesetests durchführen.

