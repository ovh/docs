---
title: 'HG Hardzone'
excerpt: 'Instrukcja dotycząca wykonania testów wydajności na serwerze HG Hardzone'
slug: hg_hardzone
section: Inne
legacy_guide_number: g1517
---

Miedzy serwerem i dwoma DASami są rozdzielone różne typy konfiguracji raid. Będziesz więc mógł przetestować raid hardware z kartą Lsi Megaraid 9271-4i i raid software oraz konfigurację z różnymi typami dysków.

## Raid hardware z kartą Lsi Megaraid 9271-4i
|Urządzenie|Konfiguracja raid hard|Typ|
|---|---|---|
|/dev/sda|2 dyski 120GB SSD DC S3500 (z zainstalowanym OS)|Raid 1|
|/dev/sdb|2 dyski 240GB  SSD DC S3500|Raid 1|
|/dev/sdc|2 dyski 600GB SSD DC S3500|Raid 1|
|/dev/sdd|2 dyski SAS 15K rpm HGST|Raid 1|
|/dev/sde|2 dyski 900GB SAS 10K rpm HGST|RAid 1|
|/dev/sdf|2 dyski 4TB SAS 7200rpm HGST|Raid 1|



## System:
System jest zainstalowany na /dev/sda.


## Raid hardware z kartą Lsi Megaraid 9271-4i z CacheCade i FastPath
|Urządzenie|Konfiguracja raid|Typ|
|---|---|---|
|/dev/sdg|2 dyski 240GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdh|2 dyski 600GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdi|2 dyski 600GB SAS 15K rpm HGST|Raid 1 CacheCade|
|/dev/sdj|2 dyski 900GB SAS 10K rpm HGST|Raid 1 CacheCade|
|/dev/sdk|2 dyski 4TB SAS 7200rpm HGST|Raid 1 CacheCade|



## Dysk cachecade:
W przypadku cachecade: jest skonfigurowany 1 dysk 480GB SSD DC S3500.


## Raid Software
|Urządzenie|Konfiguracja raid|typ|
|---|---|---|
|/dev/md1|2 dyski 240GB SSD DC S3500 (/dev/sdl1 , /dev/sdm1)|Raid 1|
|/dev/md2|2 dyski 600GB SSD DC S3500 (/dev/sdn1 & /dev/sdo1)|Raid 1|
|/dev/md3|2 dyski 600GB SAS (/dev/sdp1 & /dev/sdq1)|Raid 1|
|/dev/md4|2 dyski 900GB SAS 10K rpm HGST (/dev/sdr1 & /dev/sds1)|Raid 1|
|/dev/md5|2 dyski 4TB SAS 7200rpm HGST (/dev/sdt1, /dev/sdu1))|Raid 1|



Test wydajności różnych typów raid:

## Test odczytu
Polecenie hdparm pozwala na określenie wskaźnika odczytu na dysku:


```
hdparm -Tt /dev/DEVICE
```


DEVICE to urządzenie do przetestowania.

Przykład: (urządzenie do przetestowania /dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




## Test zapisu
Polecenie dd pozwala na określenie wskaźnika zapisu na dysku:


```
dd if=/dev/zero of=/DOSSIER/test.data bs=8k count=128k
```


DOSSIER to katalog, w którym zamontowana jest partycja urządzenia do przetestowania.

Przykład: (partycja /dev/sda2 zamontowana w /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
Domyślnie raid ma konfigurację raid 1. Możesz zmienić konfiguracje na raid 0.

## Usunięcie raidu
Usunięcie raidu wiąże się z utratą wszystkich danych zapisanych na dysku.


## Modyfikacja raid software
Aby zmodyfikować raid, należy go najpierw usunąć. Następnie:


- Uzyskać informacje dotyczące raidu:


```
mdadm --detail /dev/mdX
```


Przykład:


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


- Dla każdej z tych partycji należy zmienić status na "fail" i usunąć z RAID software:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Przykład :


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- Zatrzymanie raidu


```
mdadm --manage --stop /dev/mdX[/code

[u]Przykład:[/u]

[code]mdadm --manage --stop /dev/md1
```


- Usunięcie superbloku::


```
mdadm --zero-superblock /dev/sdX
```


Przykład:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- Utworzenie raidu:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ : to wolumin dla raidu, który chcesz utworzyć (nie może istnieć).
--level= : to typ raidu (0,1).
--raid-devices= : to liczba urządzeń w raidzie.
/dev/sdX1 /dev/sdY1 : partycja wchodząca w skład raid software.

Przykład: (/dev/md1 w raid 0 z partycjami /dev/sdl1 i /dev/sdm1)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Nie zapomnij o sformatowaniu utworzonego /dev/mdX i jego zamontowaniu, aby wykonać testy zapisu.

