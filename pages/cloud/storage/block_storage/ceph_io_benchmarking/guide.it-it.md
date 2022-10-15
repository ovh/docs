---
title: 'Eseguire test di Storage Benchmarking'
slug: ceph-io-benchmarking
excerpt: 'Come verificare le reali prestazioni del servizio Cloud Disk Array'
section: 'Cloud Disk Array'
---

**Ultimo aggiornamento: 05/08/2019**

## Prima di iniziare
Prima di procedere alla misurazione delle performance di un servizio è importante conoscere l’ambiente utilizzato, perché trascurare anche piccoli dettagli potrebbe rendere il risultato del benchmark non affidabile.

Ad esempio, è inutile testare le performance di Cloud Disk Array da un datacenter differente: durante il funzionamento le latenze tra datacenter sono troppo elevate per una valutazione di questo tipo.

È fondamentale anche selezionare le metriche adeguate alle specifiche situazioni. Per l’analisi di un database, il numero totale di I/O al secondo (IOPS) effettuati su blocchi da 8 KB sarà probabilmente più rilevante della banda passante totale con blocchi di dimensioni superiori. Se si prevede di utilizzare Hadoop, inoltre, le esigenze in termini di storage varieranno notevolmente.

Nel nostro esempio proveremo a trovare un equilibrio tra diversi carichi di lavoro con l’aiuto di Fio, uno degli strumenti di benchmarking più comuni che fornisce numerose opzioni per simulare il carico di lavoro voluto e restituisce statistiche dettagliate del comportamento dello storage sotto carico. Questo tool è disponibile gratuitamente su numerosi sistemi operativi.


## Primo benchmark
Per prima cosa, assicurati che il client utilizzato per il test possa accedere al Cloud Disk Array. Questa verifica è possibile tramite il comando:


```bash
$ ceph -s
cluster 3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 health HEALTH_OK
 monmap e1: 3 mons at {mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.x:6789/0,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10..a.b.y:6789/0,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.z:6789/0}
        election epoch 50, quorum 0,1,2 mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 osdmap e52: 3 osds: 3 up, 3 in
  pgmap v2709: 64 pgs, 1 pools, 83255 MB data, 1300 kobjects
        261 GB used, 16401 GB / 16662 GB avail
              64 active+clean
```

Se il risultato ottenuto è simile a quello incluso qui sopra, è possibile iniziare a preparare l’immagine per il test utilizzando questo comando: 


```bash
rbd -p rbd create --size 1024 --image-format 2 test-image
```

Per testare le prestazioni sono disponibili 3 opzioni:

- utilizzare RBD
- associare l’immagine alla periferica `/dev/rbd`
- eseguire il benchmark su una macchina virtuale avviata con un’immagine RBD

Il primo metodo esegue Fio in questo modo:


```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

Eseguendo un benchmark su una periferica `/dev/rbd` o una macchina virtuale interna, alcuni fattori possono influire sulle prestazioni:

- la cache del sistema operativo. Il sistema può infatti sembrare molto rapido inizialmente e poi subire un rallentamento.  Per evitarlo è necessario utilizzare I/O diretti
- l’elaborazione delle richieste FLUSH/FUA nello stack dello storage utilizzato per i test
- l’hypervisor o il driver (virtio/scsi) utilizzato per la virtualizzazione
- “riscaldare” lo storage prima di avviare o eseguire più volte un benchmark


## Benchmark reale
In base alla dimensione del cluster, è possibile testare un numero più o meno elevato di immagini e utilizzare differenti parametri. In genere è possibile modificare il numero di immagini e la loro dimensione, la lunghezza della coda di attesa, il numero di <i>worker Fio</i>, il tipo di carico di lavoro (lettura/scrittura/casuale/sequenziale), la durata del test, ecc...


### Lettura/scrittura casuale mista con blocchi da 4 KB

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Letture sequenziali con blocchi da 1 MB

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=read --bs=1M --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Scritture casuali con blocchi da 4.000 tr/min
Questo test genera quattro processi Fio, ognuno dei quali utilizza 2 thread per scrivere su un’immagine distinta 


```bash
fio --runtime=600 --time_based --group_reporting \
    --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image-1 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-2 --ioengine=rbd --pool=rbd --rbdname=test-image-2 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-3 --ioengine=rbd --pool=rbd --rbdname=test-image-3 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-4 --ioengine=rbd --pool=rbd --rbdname=test-image-4 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32
```


### Lettura/scrittura mista con blocchi di diverse dimensioni

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 \
    --bssplit=64k/47:4k/22:16k/12:8k/6:512/5:32k/4:12k/3:256k/1,8k/89:4k/11 \
    --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


## Misurare le prestazioni di Cloud Disk Array
Per calcolare le performance del servizio Cloud Disk Array, effettueremo test su 32 immagini da 32 GB ciascuna per qualche ora. L’utilizzo di grossi volumi di dati durante i test garantisce il mantenimento delle prestazioni al livello stabilito.