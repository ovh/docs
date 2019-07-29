---
title: 'Speicher-Benchmark durchführen'
slug: ceph-io-benchmarking
excerpt: 'Hier erfahren Sie, wie Sie die Leistung Ihres Cloud Disk Arrays testen.'
section: 'Storage und Backup'
---

**Stand 16.07.2019**

## Vor den Benchmark-Tests
Lernen Sie zunächst Ihre Umgebung genau kennen. Selbst kleine übersehene Details können Ihre Benchmark verfälschen. Es hat beispielsweise keinen Zweck, die Performance Ihres Cloud Disk Arrays von einem anderen Rechenzentrum aus zu testen. Die Latenzzeiten zwischen den Rechenzentren sind viel zu hoch für einen solchen Test.

Zudem ist es sehr wichtig, dass Sie die für Ihren Fall erforderlichen Kennzahlen auswählen. Wenn Sie die Leistung einer Datenbank testen möchten, dann ist ein IOPS-Wert (Ein-/Ausgabe-Operationen pro Sekunde) von 8 KiB pro Block möglicherweise wichtiger als die Gesamtbandbreite mit hohem I/O-Durchsatz. Wenn Sie Hadoop verwenden möchten, haben Sie wiederum völlig andere Speicheranforderungen.

In unserem Beispiel versuchen wir, ein Gleichgewicht zwischen den verschiedenen Workloads zu finden. Wir verwenden **Fio** − ein sehr beliebtes I/O-Performance-Benchmarking-Tool. Fio bietet zahlreiche anpassbare Optionen, um die gewünschten Workloads zu simulieren. Das Tool liefert außerdem detaillierte Statistiken zum Speicherverhalten unter Belastung und ist für eine große Auswahl an Betriebssystemen kostenlos verfügbar.

**In dieser Anleitung erfahren Sie, wie Sie eine Benchmark für Ihr Cloud Disk Array ausführen.**

## Vorab-Benchmark
Vergewissern Sie sich, dass der für den Test verwendete Client Zugriff auf Ihr Cloud Disk Array hat. Dies überprüfen Sie mit folgendem Befehl:

```bash
$ ceph -s
cluster 3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 health HEALTH_OK
 monmap e1: 3 mons at {mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.x:6789/0,mon-02-3eb69d65-fec7-4e00 5-91c0-7fe07b6fed1a=10..a.b.y:6789/0,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a=10.a.b.z:6 789/0}
        election epoch 50, quorum 0,1,2 mon-01-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-02-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a,mon-03-3eb69d65-fec7-4e05-91c0-7fe07b6fed1a
 osdmap e52: 3 osds: 3 up, 3 in
  pgmap v2709: 64 pgs, 1 pool, 83255 MB data, 1300 kobjects
        261 GB used, 16401 GB / 16662 GB avail
              64 active+clean
```

Wenn Sie ein ähnliches Ergebnis erhalten haben, können Sie das Image für den Test mit folgendem Befehl vorbereiten:


```bash
rbd -p rbd create --size 1024 --image-format 2 test-image
```

Um die Performance zu testen, haben Sie drei Möglichkeiten:

- direkt über RBD
- das Image einem `/dev/rbd`-Device zuordnen („rbd map“)
- eine Benchmark in einer virtuellen Maschine ausführen, die auf einem RBD-Image läuft

Für die erste Methode verwenden Sie Fio wie folgt:

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

Wird eine Benchmark über ein `/dev/rbd`-Device oder in einer virtuellen Maschine ausgeführt, können bestimmte Faktoren die Performance beeinträchtigen:

- der Cache des Betriebssystems: Er kann den Eindruck erwecken, dass Ihr System eine Zeit lang sehr schnell ist und dann langsamer wird. Verwenden Sie direkte I/O-Operationen, um dies zu vermeiden.
- die Bearbeitung von FLUSH/FUA-Anfragen im für die Tests verwendeten Stapelspeicher
- der für die Visualisierung verwendete Hypervisor und/oder Treiber (virtio/scsi)
- Nicht ausgelasteter Speicher: Machen Sie ein „Warm-up“ für Ihren Speicher bevor Sie eine Benchmark starten oder mehrere Male ausführen.


## Eigentliche Benchmark

Je nach Größe Ihres Clusters können Sie eine größere Anzahl an Images testen oder unterschiedliche Parameter verwenden. In der Regel können Sie die Anzahl der Images, ihre Größe sowie die der Warteschlange, die Anzahl der *FIO-Workers*, den Workloadtyp (Lesen/Schreiben/zufällig/sequentiell), die Testdauer etc. ändern.


### Gemischtes zufälliges Lesen/Schreiben mit 4 K Blockgröße

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Sequentielles Lesen mit 1 M Blockgröße

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=read --bs=1M --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Zufälliges Schreiben mit 4 K Blockgröße
Dieser Test generiert vier Fio-Prozesse, von denen jeder über zwei Threads auf ein anderes Image geschrieben wird.


```bash
fio —runtime=600 —time_based —group_reporting \
    --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image-1 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-2 --ioengine=rbd --pool=rbd --rbdname=test-image-2 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-3 --ioengine=rbd --pool=rbd --rbdname=test-image-3 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --name=test-4 --ioengine=rbd --pool=rbd --rbdname=test-image-4 --numjobs=2 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32
```


### Gemischtes Lesen/Schreiben mit unterschiedlichen Blockgrößen

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 \
    --bssplit=64k/47:4k/22:16k/12:8k/6:512/5:32k/4:12k/3:256k/1,8k/89:4k/11 \
    --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.