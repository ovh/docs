---
deprecated: true
title: HG Hardzone
excerpt: In deze handleiding wordt uitgelegd hoe u prestatie-testen kunt uitvoeren op de HG Hardzone server.
slug: hg_hardzone
legacy_guide_number: g1517
---

De verschillende soorten RAID zijn verdeeld tussen de server en twee DAS. U kunt dus de RAID hardware testen met een LSI MegaRAID 9271-4i card, maar ook met de RAID software en mensen met verschillende soorten disks.

## RAID hardware met een LSI Megaraid 9271-4i card
|Devices|Compositie van hardRAID|Type|
|---|---|---|
|/dev/sda|2 x 120 GB SSD DC S3500 disks (voorgeïnstalleerde OS)|RAID 1|
|/dev/sdb|2 x 240 GB SSD DC S3500 disks|RAID 1|
|/dev/sdc|2 x 600 GB SSD DC S3500 disks|RAID 1|
|/dev/sdd|2 x SAS 15K rpm HGST disks|RAID 1|
|/dev/sde|2 x 900 GB SAS 10K rpm HGST disks|RAID 1|
|/dev/sdf|2 x 4 TB SAS 7200rpm HGST disks|RAID 1|



## Systeem:
Het systeem is geïnstalleerd op het /dev/sda apparaat


## RAID hardware met een LSI Megaraid 9271-4i card met CacheCade en FastPath
|Devices|Compositie van RAID|Type|
|---|---|---|
|/dev/sdg|2 x 240 GB SSD DC S3500 disks|RAID 1 FastPath|
|/dev/sdh|2 x 600 GB SSD DC S3500 disks|RAID 1 FastPath|
|/dev/sdi|2 x 600 GB SAS 15K rpm HGST disks|RAID 1 CacheCade|
|/dev/sdj|2 x 900 GB SAS 10K rpm HGST disks|RAID 1 CacheCade|
|/dev/sdk|2 x 4 TB SAS 7200 rpm HGST disks|RAID 1 CacheCade|



## CacheCade disk:
CacheCade: 1 disk van 480 GB SSD DC S3500 is geconfigureerd.


## RAID software
|Devices|Compositie van raid|type|
|---|---|---|
|/dev/md1|2 disks 240 GB SSD DC S3500 (/dev/sdl1 , /dev/sdm1)|Raid 1|
|/dev/md2|2 disks 600 GB SSD DC S3500 (/dev/sdn1 & /dev/sdo1)|Raid 1|
|/dev/md3|2 disks 600 GB SAS (/dev/sdp1 & /dev/sdq1)|Raid 1|
|/dev/md4|2 disks 900 GB SAS 10K rpm HGST (/dev/sdr1 & /dev/sds1)|Raid 1|
|/dev/md5|2 disks 4 TB SAS 7200rpm HGST (/dev/sdt1, /dev/sdu1))|Raid 1|



Om verschillende prestaties van verschillende soorten RAID's te testen

## 'Read'-test
Met het hdparm command kunt u het read level van de disk meten:


```
hdparm -Tt /dev/DEVICE
```


DEVICE als het te testen apparaat.

Voorbeeld: (test van /dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconden= 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconden= 281.19 MB/sec
```




## 'Write'-test
Met het dd command kunt u het disk's write level meten:


```
dd if=/dev/zero of=/DOSSIER/test.data bs=8k count=128k
```


DOSSIER is de map waar de te testen hardware partitie is gemount.

Voorbeeld: (partitie /dev/sda2 gemount in /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
Alle raids zijn standaard in raid 1, u heeft de mogelijkheid deze in raid 0 om te zetten als u dat wenst.

## Verwijdering van een Raid
De verwijdering van een Raid leidt tot de volledige verwijdering van de gegevens die zich in de disk bevinden.


## Wijziging van de raid software
Om de raid te wijzigen, moet deze eerst verwijderd worden, vervolgens: 


- Ophalen van de raid gegevens:


```
mdadm --detail /dev/mdX
```


Voorbeeld:


```
mdadm --detail /dev/md1
/dev/md1:
Versie: 1.2
Creation Time: Fri Jul 4 21:14:12 2014
Raid Level: raid1
Array Size: 234298176 (223.44 GiB 239.92 GB)
Used Dev Size: 234298176 (223.44 GiB 239.92 GB)
Raid Devices: 2
Total Devices: 2
Persistence: Superblock is persistent

Update Time: Fri Jul 11 13:05:01 2014
State: clean
Active Devices: 2
Working Devices: 2
Failed Devices: 0
Spare Devices: 0

Name: ns6427926.ip-5-135-134.eu:1 (local to host ns6427926.ip-5-135-134.eu)
UUID: 299015e1:50b4554c:faf58dbc:74d3c2a4
Events: 20

Number Major Minor RaidDevice State
0 8 177 0 active sync /dev/sdl1
1 8 193 1 active sync /dev/sdm1
```


- Voor elk van deze partities, moet u de status wijzigen naar "fail", en daarna moet het uit de RAID-software worden verwijderd:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Voorbeeld:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- De raid stoppen


```
mdadm --manage --stop /dev/mdX[/code

[u]Voorbeeld:[/u]

[code]mdadm --manage --stop /dev/md1
```


- De superblokken verwijderen:


```
mdadm --zero-superblock /dev/sdX
```


Voorbeeld:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- De raid aanmaken:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ: is het volume van uw raid dat u gaat aanmaken (het moet niet (niet meer) bestaan).
--level=: is het raid type (0,1).
--raid-devices=: is het aantal apparaten in de raid.
/dev/sdX1 /dev/sdY1: partitie bestaand uit de software raid.

Voorbeeld: (/dev/md1 in raid 0 met de partities /dev/sdl1 en /dev/sdm1)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Vergeet niet om de /dev/mdX te formatteren en te mounten om vervolgens Read testen uit te voeren

