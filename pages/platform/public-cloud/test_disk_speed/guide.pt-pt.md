---
title: Testar a velocidade dos discos
excerpt: Testar a velocidade dos discos
slug: testar_a_velocidade_dos_discos
legacy_guide_number: g1956
section: Armazenamento
updated: 2022-01-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 04/01/2022**

## Objetivo

Quer seja para comparar as performances entre os diferentes discos, quer seja para verificar que tudo está a funcionar corretamente, poderá necessitar de verificar a velocidade de acesso aos discos.

**Este guia explica-lhe o procedimento a seguir para testar o número de operações de entrada/saída por segundo (IOPS) que os seus disco são capazes de atingir, quer seja nos discos das instâncias, quer seja nos discos adicionais.**


## Requisitos

- Dispor de uma [instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external}.
- Dispor de um acesso administrativo (root) a esta instância através de SSH (unicamente para Linux).

## Instruções

### Instalação do comando de teste

O comando de que precisa para verificar a velocidade do seu disco chama-se `fio`. Não está presente por predefinição no seu servidor.

Para instalar `fio`, estabeleça uma ligação SSH à sua instância e execute o seguinte comando:


```
root@server:~$ apt-get install fio
```

### Teste a velocidade do seu disco

O comando a ter em conta para efetuar o teste ao disco é o seguinte:

```
root@server:~$ fio --name=rand-write --ioengine=libaio --iodepth=32 --rw=randwrite --fsync=32 --invalidate=1 --bsrange=4k:4k,4k:4k --size=512m --runtime=120 --time_based --do_verify=1 --direct=1 --group_reporting --numjobs=1
```

> [!primary]
>
> É necessário adaptar o argumento --numjobs em função do número de CPUs que a sua instância dispõe.
>
> Além disso, é possível encontrar a lista dos argumentos e as suas funções diretamente no [manual do fio](https://github.com/axboe/fio/blob/master/HOWTO.rst).
>

Para testar as performances de um disco adicional será necessário colocar-lhe num dos pontos de montagem.


```
root@server:~$ cd /mnt/disk
```

### Analisar os dados

Devido à execução deste comando obteremos um resultado semelhante ao seguinte:


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


A informação que nos interessa corresponde aos IOPS que poderemos encontrar na linha 6 do resultado:

```
write: io=428032KB, bw=3566.2KB/s, iops=891, runt=120031msec
```

É possível verificar no presente caso que as performances de disco correspondem aproximadamente a 891 iops.


## Quer saber mais?

[Criar e configurar um disco suplementar numa instância](https://docs.ovh.com/pt/public-cloud/criar_e_configurar_um_disco_suplementar_numa_instancia/)
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
