---
deprecated: true
title: HG Hardzone
excerpt: Jak provádět zátěžové testy na serverech HG Hardzone.
slug: hg_hardzone
legacy_guide_number: g1517
---

Různé typy RAID jsou rozděleny mezi serverem a dvěma systémy DAS. Můžete tedy testovat hardRAID s LSI MegaRAID 9271-4i kartou, ale můžete také testovat softRAID a hardRAID s různými typy disků.

## HardRAID s LSI MegaRAID 9271-4i card
|Zařízení|Složení hardRAID|Typ|
|---|---|---|
|/dev/sda|2 x 120 GB SSD DC S3500 disky (předinstalovaný OS)|RAID 1|
|/dev/sdb|2 x 240 GB SSD DC S3500 disky|RAID 1|
|/dev/sdc|2 x 600 GB SSD DC S3500 disky|RAID 1|
|/dev/sdd|2 x SAS 15K rpm HGST disky|RAID 1|
|/dev/sde|2 x 900 GB SAS 10K rpm HGST disky|RAID 1|
|/dev/sdf|2 x 4 TB SAS 7200 rpm HGST disky|RAID 1|



## Systém:
Systém je instalován na zařízení /dev/sda


## HardRAID s LSI Megaraid 9271-4i kartou s CacheCade a FastPath
|Zařízení|Složení hardRAID|Typ|
|---|---|---|
|/dev/sdg|2 x 240 GB SSD DC S3500 disky|RAID 1 FastPath|
|/dev/sdh|2 x 600 GB SSD DC S3500 disky|RAID 1 FastPath|
|/dev/sdi|2 x 600 GB SAS 15K rpm HGST disky|RAID 1 CacheCade|
|/dev/sdj|2 x 900 GB SAS 10K rpm HGST disky|RAID 1 CacheCade|
|/dev/sdk|2 x 4 TB SAS 7200 rpm HGST disky|RAID 1 CacheCade|



## CacheCade disk:
Pro CacheCade: 1 x 480 GB SSD DC S3500 je disk nastavený.


## SoftRAID
|Zařízení|Složení hardRAID|Typ|
|---|---|---|
|/dev/md1|2 x 240 GB SSD DC S3500 disky (/dev/sdl1, /dev/sdm1)|RAID 1|
|/dev/md2|2 x 600 GB SSD DC S3500 disky (/dev/sdn1 & /dev/sdo1)|RAID 1|
|/dev/md3|2 x 600 GB SAS disky (/dev/sdp1 & /dev/sdq1)|RAID 1|
|/dev/md4|2 x 900 GB SAS 10K rpm HGST disky (/dev/sdr1 & /dev/sds1)|RAID 1|
|/dev/md5|2 x 4 TB SAS 7200 rpm HGST disky (/dev/sdt1, /dev/sdu1))|RAID 1|



Pro otestování výkonu různých typů RAID:

## Test čtení
Příkaz hdparm umožňuje změřit úroveň čtení disku:


```
hdparm -Tt /dev/DEVICE
```


DEVICE je zařízení pro testování.

Příklad: (zařízení k otestování /dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




## Test zápisu
Příkaz dd umožňuje změřit úroveň zápisu na disk:


```
dd if=/dev/zero of=/DOSSIER/test.data bs=8k count=128k
```


FOLDER je adresář, kam je připojen diskový oddíl k otestování.

Příklad: (diskový oddíl /dev/sda2 je připojen na /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
Všechny RAID přichází implicitně s nastavením RAID 1. Můžete u nich ale provést upgrade na RAID 2.

## Vymazání RAID
Všechna data z disku budou při vymazání RAID odstraněna.


## Změna softRAID
Pro změnu RAID, ho budete nejdříve muset vymazat. Poté:


- Získáte informace o RAID:


```
mdadm --detail /dev/mdX
```


Příklad:


```
mdadm --detail /dev/md1
/dev/md1:
Version: 1.2
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


- Musíte změnit stav každého diskového oddílu na "fail", nežli je odstraníte ze softRAID:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Příklad:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- Zastavení RAID


```
mdadm --manage --stop /dev/mdX[/code

[u]Příklad:[/u]

[code]mdadm --manage --stop /dev/md1
```


- Odebrání superblock:


```
mdadm --zero-superblock /dev/sdX
```


Příklad:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- Nastavení RAID:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ: the RAID volume that you're going to set up (it must not/no longer be present).
--level=: the RAID type (0,1).
--raid-devices=: the number of devices in the RAID system.
/dev/sdX1 /dev/sdY1: the partition(s) in software RAID.

Příklad: (/dev/md1 in RAID 0 with /dev/sdl1 and /dev/sdm1 partitions)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Nezapomeňte zformátovat diskový oddíl /dev/mdX a připojit ho před provedením testů zápisu.

