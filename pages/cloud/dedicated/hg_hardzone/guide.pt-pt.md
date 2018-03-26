---
title: HG Hardzone
excerpt: Este guia explica como poderá realizar testes ao rendimento do servidor HG Hardzone.
slug: hg_hardzone
legacy_guide_number: g1517
---

Os diferentes tipos de raid são repartidos entre o servidor e duas DAS, poderá testar o raid hardware como uma placa Lsi Megaraid 9271-4i mas também raid software e com diferentes tipos de discos.

## Raid hardware com uma placa Lsi Megaraid 9271-4i
|Devices|Composição do raid hard|Type|
|---|---|---|
|/dev/sda|2 discos 120GB SSD DC S3500 (OS instalado)|Raid 1|
|/dev/sdb|2 discos 240GB SSD DC S3500|Raid 1|
|/dev/sdc|2 discos 600GB SSD DC S3500|Raid 1|
|/dev/sdd|2 discos SAS 15K rpm HGST|Raid 1|
|/dev/sde|2 discos 900GB SAS 10K rpm HGST|RAid 1|
|/dev/sdf|2 discos 4TB SAS 7200rpm HGST|Raid 1|



## Sistema:
O sistema é instalado no decide /dev/sda


## Raid hardware com uma placa Lsi Megaraid 9271-4i com CacheCade e FastPath
|Devices|Composição do raid|Type|
|---|---|---|
|/dev/sdg|2 discos 240GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdh|2 discos 600GB SSD DC S3500|Raid 1 FastPath|
|/dev/sdi|2 discos 600GB SAS 15K rpm HGST|Raid 1 CacheCade|
|/dev/sdj|2 discos 900GB SAS 10K rpm HGST|Raid 1 CacheCade|
|/dev/sdk|2 discos 4TB SAS 7200rpm HGST|Raid 1 CacheCade|



## Disco cachecade:
Para o cachecade: é configurado 1 disco de 480GB SSD DC S3500.


## Raid Software
|Devices|Composição do raid|type|
|---|---|---|
|/dev/md1|2 discos 240GB SSD DC S3500 (/dev/sdl1 , /dev/sdm1)|Raid 1|
|/dev/md2|2 discos 600GB SSD DC S3500 (/dev/sdn1 & /dev/sdo1)|Raid 1|
|/dev/md3|2 discos 600GB SAS (/dev/sdp1 & /dev/sdq1)|Raid 1|
|/dev/md4|2 discos 900GB SAS 10K rpm HGST (/dev/sdr1 & /dev/sds1)|Raid 1|
|/dev/md5|2 discos 4TB SAS 7200rpm HGST (/dev/sdt1, /dev/sdu1))|Raid 1|



Para testar as diferentes performances dos diferentes tipos de raid:

## Teste de leitura
O comando hdparm permite medir a taxa de leitura nos discos:


```
hdparm -Tt /dev/DEVICE
```


DEVICE é o "device" (disco) a testar.

Exemplo: (device a testar /dev/sda)


```
hdparm -Tt /dev/sda

/dev/sda:
Timing cached reads: 24358 MB in 2.00 seconds = 12191.84 MB/sec
Timing buffered disk reads: 844 MB in 3.00 seconds = 281.19 MB/sec
```




## Teste de escrita
O comando dd permite medir a taxa de escrita no disco:


```
dd if=/dev/zero of=/DOSSIER/test.data bs=8k count=128k
```


DOSSIER é a pasta onde está montada a partição do device a testar.

Exemplo: (partição /dev/sda2 montado em /home)


```
dd if=/dev/zero of=/home/test.data bs=8k count=128k
131072+0 records in
131072+0 records out
1073741824 bytes (1.1 GB) copied, 0.702882 s, 1.5 GB/s
```




## 
Todos os raids estão, de forma padrão, em raid 1 e poderá modificá-lo para raid 0 se assim o desejar.

## Eliminação de um raid
A eliminação de um raid leva à completa perda dos dados presentes nos discos.


## Modificação de raid software
Para modificar o raid, deve eliminá-lo em primeiro lugar, e depois_


- Obter as informações do raid:


```
mdadm --detail /dev/mdX
```


Exemplo:


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


- Para cada uma dessas partições deve passar o estado para "fail" e depois remove-os do RAID Software:


```
mdadm --manage /dev/md0 --fail /dev/sdX
```


Exemplo:


```
mdadm --manage /dev/md1 --fail /dev/sdl1
mdadm --manage /dev/md1 --fail /dev/sdm1
```


- Parar o raid


```
mdadm --manage --stop /dev/mdX[/code

[u]Exemplo:[/u]

[code]mdadm --manage --stop /dev/md1
```


- Eliminar os superbloc:


```
mdadm --zero-superblock /dev/sdX
```


Exemplo:


```
mdadm --zero-superblock /dev/sdl1
mdadm --zero-superblock /dev/sdm1
```


- Criar o raid:


```
mdadm --create /dev/mdZ --level=L --assume-clean --raid-devices=N /dev/sdX1 /dev/sdY1
```


/dev/mdZ : é o volume do seu raid que vai criar (não deve ainda existir).
--level=: é o tipo de raid (0,1).
--raid-devices=: é o número de devices no raid.
/dev/sdX1 /dev/sdY1: partição que compõe o raid software.

Exempl : (/dev/md1 em raid 0 com as partições /dev/sdl1 e /dev/sdm1)


```
mdadm --create /dev/md1 --level=0 --assume-clean --raid-devices=2 /dev/sdl1 /dev/sdm1
```



Não se esqueça de formatar o /dev/mdX criado e de o montar para de seguida efetuar os testes de escrita

