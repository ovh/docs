---
deprecated: true
title: HG Hardzone
excerpt: HG Hardzone galingumo tikrinimo instrukcijos
slug: hg_hardzone
legacy_guide_number: g1517
---

Serveryje ir DAS naudojami skirtingi RAID tipai, tačiau galite tikrinti RAID su Lsi Megaraid 9271-4i plokštėmis ir programinį RAID, taip pat kai skirtingi diskai.

## HW Raid su Lsi Megaraid 9271-4i plokšte
|Devices|Raid hard composition|Type|
|---|---|---|
|/dev/sda|2 discs 120GB SSD DC S3500 (OS)|Raid 1|
|/dev/sdb|2 discs 240GB SSD DC S3500|Raid 1|
|/dev/sdc|2 discs 600GB SSD DC S3500|Raid 1|
|/dev/sdd|2 discs SAS 15K rpm HGST|Raid 1|
|/dev/sde|2 discs 900GB SAS 10K rpm HGST|RAid 1|
|/dev/sdf|2 discs 4TB SAS 7200rpm HGST|Raid 1|



## Sistema:
Sistema įdiegta į /dev/sda


## HW Raid su Lsi Megaraid 9271-4i plokšte ir CacheCade bei FastPath
|Devices|Raid hard composition|Type|
|---|---|---|
|/dev/sdg|2 discs 240GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdh|2 discs 600GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdi|2 discs 600GB SAS 15K rpm HGST|Raid 1 CacheCade|
|/dev/sdj|2 discs 900GB SAS 10K rpm HGST|Raid 1 CacheCade|
|/dev/sdk|2 discs 4TB SAS 7200rpm HGST|Raid 1 CacheCade|



## Cachecade diskas:
Cachecade: sukonfigūruotas vienas 480GB SSD DC S3500 diskas.


## Software Raid
|Devices|Raid hard composition|Type|
|---|---|---|
|/dev/md1|2 discs 240GB SSD DC S3500 (/dev/sdl1 , /dev/sdm1)|Raid 1|
|/dev/md2|2 discs 600GB SSD DC S3500 (/dev/sdn1 & /dev/sdo1)|Raid 1|
|/dev/md3|2 discs 600GB SAS (/dev/sdp1 & /dev/sdq1)|Raid 1|
|/dev/md4|2 discs 900GB SAS 10K rpm HGST (/dev/sdr1 & /dev/sds1)|Raid 1|
|/dev/md5|2 discs 4TB SAS 7200rpm HGST (/dev/sdt1, /dev/sdu1))|Raid 1|



Skirtingų RAID tipų našumo tikrinimas:

## Skaitymo tikrinimas
Komanda hdparm atliks skaitymo iš disko testą:


```
hdparm -Tt /dev/DEVICE
```


DEVICE - tai diskas, kurį tikrinsite.

Pavyzdys: (tikrinsime /dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




## Rašymo tikrinimas
Komanda dd atliks rašymo į diską tikrinimą:


```
dd if=/dev/zero of=/KATALOGAS/test.data bs=8k count=128k
```


KATALOGAS - tai katalogas, kuriame prijungtas (mounted) tikrinamo įtaiso skirsnis.

Pavyzdys: (skirsnis /dev/sda2 prijungtas prie katalogo /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
Pagal nutylėjimą, visi RAID yra 1 lygio (RAID-1). Jeigu pageidaujate, galite jį pakeisti į RAID-0.

## RAID Trynimas
Dėmesio: ištrynus RAID, visi masyve esantys duomenys bus prarasti neatkuriamai.


## Software RAID keitimas
Norint keisti RAID, pirmiausiai reikia jį ištrinti. Po to:


- Nuskaitykite RAID informaciją:


```
mdadm --detail /dev/mdX
```


Pavyzdys:


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


- Kiekvieną skirsnį reikia perjungti į "fail" būseną, po to juos pašalinti iš software RAID masyvo:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Pavyzdys:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- Sustabdykite RAID


```
mdadm --manage --stop /dev/mdX[/code

[u]Pavyzdys:[/u]

[code]mdadm --manage --stop /dev/md1
```


- Ištrinkite superblock:


```
mdadm --zero-superblock /dev/sdX
```


Pavyzdys:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- Sukurkite RAID:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ: RAID skirsnis, kurį sukursite (tokio neturi būti, t.y. negali kartotis).
--level=: RAID tipas (0,1).
--raid-devices=: įrenginių, esančių RAID, skaičius.
/dev/sdX1 /dev/sdY1: skirsniai, sudarantys Software RAID masyvą.

Pavyzdys: (/dev/md1 su RAID-0, kuriamas iš /dev/sdl1 ir /dev/sdm1 skirsnių)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Nepamirškite suformatuoti ir prijungti naujai sukurto RAID skirsnio /dev/mdX, kad galėtumėte atlikti testus.

