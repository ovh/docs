---
title: Testaa levyjen nopeus
excerpt: Testaa levyjen nopeus
slug: testaa_levyjen_nopeus
legacy_guide_number: g1956
---


## 
Haluat luultavasti testata levyjen nopeutta vertaillessa eri levyjen suorituskykyä, tai jos haluat vain tarkistaa onko nopeus oikein.

Tämän ohjeen menettelyä seuraamalla voit testata, levyn kokonaisnopeuden per sekunti (IOPS), oli kyseessä sitten instanssien levyt tai lisälevyt.


## Vaatimukset

- Instanssi
- Yksi ylimääräinen levy




## Asennus
Käytettävä komento ei ole saatavilla oletuksena, vaan se täytyy ensin asentaa:


```
root@serveur:~$ apt-get install fio
```




## Testi
Tällä komennolla voit testata levysi:


```
root@serveur:~$ fio --name=rand-write --ioengine=libaio --iodepth=32 --rw=randwrite --invalidate=1 --bsrange=4k:4k,4k:4k --size=512m --runtime=120 --time_based --do_verify=1 --direct=1 --group_reporting --numjobs=1
```


Varoitus
Muuttujat --numjobs on adaptoitava instanssisi prosessoriyksiköiden (CPU) mukaan.

Lisäksi on mahdollista löytää lista muuttujista ja niiden toiminnoista suoraan [fion oppaasta](https://github.com/axboe/fio/blob/master/HOWTO).
Lisälevyn suorituskyvyn testaamiseksi, täytyy ajaa seuraava komento levyn asentamiseksi:


```
root@serveur:~$ cd /mnt/disk
```




## Analyysi
Kun komento on ajettu, saat vastaavanlaisen tuloksen kuin alla:


```
fio-2.1.11
Starting 1 process
test: Laying out IO file(s) (1 file(s) / 1024MB)
Jobs: 1 (f=1): [w(1)] [40.9% done] [0KB/3580KB/0KB /s] [0/895/0 iops] [eta 02m:55s]
test: (groupid=0, jobs=1): err= 0: pid=12376: Thu Oct 29 14:46:37 2015
write: io=428032KB, bw=3566.2KB/s, iops=891, runt=120031msec
slat (usec): min=4, max=4640, avg=22.57, stdev=62.14
clat (usec): min=299, max=181699, avg=34778.45, stdev=7857.92
lat (usec): min=324, max=181769, avg=34801.55, stdev=7843.84
clat percentiles (usec):
| 1.00th=[ 708], 5.00th=[30848], 10.00th=[33536], 20.00th=[34560],
| 30.00th=[35072], 40.00th=[35072], 50.00th=[35072], 60.00th=[35584],
| 70.00th=[36096], 80.00th=[36608], 90.00th=[37632], 95.00th=[39680],
| 99.00th=[47360], 99.50th=[51968], 99.90th=[125440], 99.95th=[146432],
| 99.99th=[181248]
bw (KB /s): min= 2646, max= 4232, per=100.00%, avg=3567.77, stdev=136.56
lat (usec) : 500=0.23%, 750=1.26%, 1000=1.22%
lat (msec) : 2=0.37%, 4=0.03%, 10=0.01%, 20=0.11%, 50=96.05%
lat (msec) : 100=0.58%, 250=0.14%
cpu : usr=0.34%, sys=1.80%, ctx=9281, majf=0, minf=8
IO depths : 1=0.1%, 2=0.1%, 4=0.1%, 8=0.1%, 16=0.1%, 32=100.0%, >=64=0.0%
submit : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.0%, 64=0.0%, >=64=0.0%
complete : 0=0.0%, 4=100.0%, 8=0.0%, 16=0.0%, 32=0.1%, 64=0.0%, >=64=0.0%
issued : total=r=0/w=107008/d=0, short=r=0/w=0/d=0
latency : target=0, window=0, percentile=100.00%, depth=32

Run status group 0 (all jobs):
WRITE: io=428032KB, aggrb=3566KB/s, minb=3566KB/s, maxb=3566KB/s, mint=120031msec, maxt=120031msec

Disk stats (read/write):
vda: ios=0/300294, merge=0/1455, ticks=0/7431952, in_queue=7433124, util=99.05%
```



Meitä kiinnostava tieto vastaa riviltä kuusi löytyvää IOPS:ää:


```
write: io=428032KB, bw=3566.2KB/s, iops=891, runt=120031msec
```


Tässä tapauksessa voidaan nähdä, että levyn suorituskyky on arviolta 891 iops.


## 
[Paluu Cloud-tuotteiden ohjeiden hakemistoon]({legacy}1785)

