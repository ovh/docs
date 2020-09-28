---
title: 'Probar el rendimiento de Cloud Disk Array'
slug: benchmark-io
excerpt: 'Cómo hacer un benchmark del rendimiento de la solución de almacenamiento Cloud Disk Array'
section: 'Cloud Disk Array'
---

## Requisitos
Antes de comenzar el benchmark, debe estar familiarizado con su entorno. Preste atención a los pequeños detalles, ya que estos pueden hacer que la prueba no sea válida. (por ejemplo, no tiene mucho sentido probar el rendimiento de Cloud Disk Array desde un datacenter diferente, ya que, aunque puede hacerlo, la latencia entre datacenters es demasiado elevada para realizar un benchmark).

También es importante seleccionar las métricas adecuadas. Si tiene previsto usar Cloud Disk Array para alojar bases de datos, es preferible conocer las IOPS que ofrece el almacenamiento utilizando bloques de 8 KB que obtener la tasa de transferencia usando bloques de mayor tamaño. En cambio, si quiere utilizar Hadoop, las necesidades en materia de almacenamiento serán totalmente diferentes.

En esta guía, intentaremos buscar un equilibrio entre las diferentes cargas de trabajo. Vamos a utilizar **Fio**, una conocida herramienta de benchmarking que ofrece diversas opciones configurables para simular la carga de trabajo deseada y proporciona estadísticas detalladas sobre el comportamiento del almacenamiento con carga. Esta herramienta está disponible de forma gratuita en numerosos sistemas operativos.


## Benchmark preliminar
Asegúrese de que el cliente utilizado en el test tiene acceso al Cloud Disk Array. Para comprobarlo, ejecute el siguiente comando:


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

Si obtiene un resultado similar al anterior, ya puede preparar la imagen para el test. Para ello, utilice el siguiente comando:


```bash
rbd -p rbd create --size 1024 --image-format 2 test-image
```

Es posible probar el rendimiento de tres formas distintas:

- utilizando directamente RBD;
- mapeando la imagen hacia el periférico **/dev/rbd**;
- realizando un benchmark en una máquina virtual con una imagen RBD.

En esta guía vamos a emplear el primer método. 

Ejecute Fio como en el siguiente ejemplo:


```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

Al realizar un benchmark en un periférico **/dev/rbd** o en una máquina virtual, hay factores que pueden afectar al rendimiento:

- la caché del sistema operativo, que puede hacer que el sistema parezca muy rápido durante un tiempo y luego se ralentice (para evitarlo, asegúrese de utilizar I/O directas);
- el procesamiento de las solicitudes FLUSH/FUA en la pila de almacenamiento utilizada en los tests;
- el hipervisor o driver (virtio/SCSI) utilizados para la virtualización;
- la temperatura del almacenamiento (es recomendable «calentarlo» antes de ejecutar el benchmark, o bien ejecutar el benchmark varias veces).


## Benchmark real
Según el tamaño del cluster, es posible realizar el benchmark con un mayor número de imágenes o utilizar otros parámetros. En general, puede configurar el número de imágenes, su tamaño, la longitud de la cola de espera, el número de workers Fio, el tipo de carga de trabajo (lectura o escritura, aleatoria o secuencial), la duración del test...


### Lectura/escritura aleatoria mixta con un tamaño de bloque de 4K

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Lecturas secuenciales con un tamaño de bloque de 1M

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=read --bs=1M --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Escrituras aleatorias con un tamaño de bloque de 4K
Este test genera cuatro procesos Fio, cada uno de los cuales escribe en una imagen distinta utilizando dos threads.


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


### Lectura/escritura mixta con bloques de distinto tamaño

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 \
    --bssplit=64k/47:4k/22:16k/12:8k/6:512/5:32k/4:12k/3:256k/1,8k/89:4k/11 \
    --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


## Cómo medir el rendimiento de Cloud Disk Array
En este caso, para medir el rendimiento de Cloud Disk Array, hemos realizado tests en 32 imágenes de 32 GB cada una durante varias horas. Utilizar conjuntos de datos de big data para los tests permite asegurar que el rendimiento se mantendrá a un nivel determinado.