---
deprecated: true
title: HG Hardzone
excerpt: Ohje suorityskykytestien tekoon HG Hardzone -palvelimelle
slug: hg_hardzone
legacy_guide_number: g1517
---

Erityyppiset RAIDit on jaettu palvelimen ja kahden DASin kesken. RAID hardwarea sekä myös RAID softwarea eri tyyppisillä kiintolevyillä voi testata LSI Megaraid 9271-4i -kortilla.

## RAID hardware LSI Megaraid 9271-4i -kortilla
|Devices|Raid hard composition|Type|
|---|---|---|
|/dev/sda|2 kiintolevyä 120 GB SSD DC S3500 (OS)|Raid 1|
|/dev/sdb|2 kiintolevyä 240 GB SSD DC S3500|Raid 1|
|/dev/sdc|2 kiintolevyä 600 GB SSD DC S3500|Raid 1|
|/dev/sdd|2 kiintolevyä SAS 15K rpm HGST|Raid 1|
|/dev/sde|2 kiintolevyä 900 GB SAS 10K rpm HGST|RAid 1|
|/dev/sdf|2 kiintolevyä 4 TB SAS 7200 rpm HGST|Raid 1|



## Järjestelmä:
Järjestelmä on asennettu /dev/sda-laitteelle.


## RAID hardware LSI Megaraid 9271-4i -kortilla, jossa CacheCade ja FastPath
|Devices|Raid hard composition|Type|
|---|---|---|
|/dev/sdg|2 kiintolevyä 240 GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdh|2 kiintolevyä 600 GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdi|2 kiintolevyä 600 GB SAS 15K rpm HGST|Raid 1 CacheCade|
|/dev/sdj|2 kiintolevyä 900 GB SAS 10K rpm HGST|Raid 1 CacheCade|
|/dev/sdk|2 kiintolevyä 4 TB SAS 7200rpm HGST|Raid 1 CacheCade|



## CacheCade-levy:
CacheCadea varten konfiguroidaan yksi 480 GB SSD DC S3500 -levy.


## RAID Software
|Devices|Raid hard composition|Type|
|---|---|---|
|/dev/md1|2 kiintolevyä 240 GB SSD DC S3500 (/dev/sdl1 , /dev/sdm1)|Raid 1|
|/dev/md2|2 kiintolevyä 600 GB SSD DC S3500 (/dev/sdn1 & /dev/sdo1)|Raid 1|
|/dev/md3|2 kiintolevyä 600 GB SAS (/dev/sdp1 & /dev/sdq1)|Raid 1|
|/dev/md4|2 kiintolevyä 900 GB SAS 10K rpm HGST (/dev/sdr1 & /dev/sds1)|Raid 1|
|/dev/md5|2 kiintolevyä 4 TB SAS 7200rpm HGST (/dev/sdt1, /dev/sdu1))|Raid 1|



Eri RAID-tyyppien suorituskykytestit:

## Lukutesti
Komennolla hdparm mitataan levyn kirjoitusnopeutta:


```
hdparm -Tt /dev/DEVICE
```


DEVICE on testattava laite.

Esimerkki: (testattava laite /dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




## Kirjoitustesti
Komennolla dd mitataan levyn lukunopeutta:


```
dd if=/dev/zero of=/DOSSIER/test.data bs=8k count=128k
```


TIEDOSTO on tiedosto, johon testattavan laitteen osio on liitetty.

Esimerkki: (osio /dev/sda2 liitetään /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
Kaikki RAIDit ovat oletuksena RAID1. Halutessaan käyttäjä voi muuttaa ne RAID0:ksi.

## RAIDin poisto
RAIDin poisto aiheuttaa kaikkien siinä olleiden tietojen menettämisen.


## RAID Softwaren muuttaminen
RAIDin muuttamiseksi se on ensin poistettava ja sitten:


- Hae RAIDin tiedot:


```
mdadm --detail /dev/mdX
```


Esimerkki:


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


- Jokaisen osion tila on muutettava tilaksi "fail", sitten ne poistetaan RAID softwaresta:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Esimerkki:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- RAIDin pysäyttäminen


```
mdadm --manage --stop /dev/mdX[/code

[u]Esimerkki:[/u]

[code]mdadm --manage --stop /dev/md1
```


- Superblockien poistaminen:


```
mdadm --zero-superblock /dev/sdX
```


Esimerkki:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- RAIDin luonti:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ: RAID, jonka käyttäjä luo (sen ei saa olla [enää] olemassa).
--level=: RAID-tyyppi (0, 1).
--raid-devices=: RAIDissa olevien laitteiden määrä.
/dev/sdX1 /dev/sdY1: partitio, josta muodostuu RAID software.

Esimerkki: (/dev/md1 RAID0 osioilla /dev/sdl1 ja /dev/sdm1)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Älä unohda formatoida luotua /dev/mdX ja mountata se ennen kirjoitustestien tekoa

