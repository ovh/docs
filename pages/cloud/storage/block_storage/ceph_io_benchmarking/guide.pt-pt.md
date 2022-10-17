---
title: 'Avaliar o desempenho do armazenamento Benchmarking'
slug: ceph-io-benchmarking
excerpt: 'Como avaliar os desempenhos da solução Cloud Disk Array'
section: 'Cloud Disk Array'
---

**Última atualização: 09/08/2019
**
## Requisitos
Antes de começar os testes de avaliação de um serviço, deve estar familiarizado com o seu ambiente. Preste atenção aos pequenos detalhes, pois podem invalidar o benchmark. Por exemplo, não faz sentido testar os desempenhos do seu Cloud Disk Array de um datacenter diferente, pois, a latência entre datacenters é demasiado elevada para realizar essa avaliação.

Também é importante selecionar as métricas adequadas. Se quiser analisar uma base de dados, o número total de entradas e de saídas por segundo (IOPS) disponíveis de 8 KiB por bloco será provavelmente superior à largura de banda total com grandes E/S. Se quiser utilizar o Hadoop, as necessidades em matéria de armazenamento serão completamente diferentes.

Neste manual, tentaremos encontrar um equilíbrio entre as diferentes cargas de trabalho. Utilizaremos Fio, uma ferramenta de benchmarking muito conhecida, que oferece várias opções ajustáveis para simular a carga de trabalha desejada e proporciona estatísticas detalhadas sobre o comportamento do armazenamento com carga, e que está disponível gratuitamente em vários sistemas operativos.

**Este manual explica-lhe como avaliar o seu Cloud Disk Array.**

## Primeiro benchmark
Certifique-se de que o cliente utilizado no teste tem acesso ao Cloud Disk Array. Para verificar isto, execute o seguinte comando:


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

Se obteve um resultado semelhante ao anterior, pode começar a preparar a imagem para o teste. Para isso, utilize o seguinte comando:


```bash
rbd -p rbd create --size 1024 --image-format 2 test-image
```

É possível analisar o desempenho do armazenamento de três formas diferentes:

- através de RBD;
- mapeando a imagem para o periférico \`dev/rbd\`;
- executando um benchmark numa máquina virtual lançada numa imagem RBD

O primeiro método executa Fio como no seguinte exemplo:


```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randwrite --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```

Ao executar um benchmark num periférico \`dev/rb\` ou numa máquina virtual, existem fatores que podem afetar os desempenhos:

- a cache do sistema operativo: pode dar a impressão que o sistema é muito rápido durante algum tempo, mas depois abranda. Para evitar isso, utilize I/O diretas;
- o processamento de pedidos FLUSH/FUA no pacote de armazenamento utilizada nos testes;
- o hipervisor ou driver (virtio/SCSI) utilizados para a virtualização;
- uso do armazenamento: é recomendado “aquecer” o armazenamento antes de lançar o benchmark, ou executá-lo várias vezes.


## Benchmark real
Em função do tamanho do cluster, é possível realizar o benchmark num número maior de imagens ou utilizar diferentes parâmetros. Geralmente, é possível alterar o número de imagens, o seu tamanho, a duração da fila de espera, o número de <i>workers Fio</i>, o tipo de carga de trabalho (leitura, escrita, aleatório, sequencial), a duração do teste, etc.


### Leitura/escrita aleatória mista com um tamanho de bloco de 4K

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 --bs=4k --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Leituras sequenciais com um tamanho de bloco de 1M

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=read --bs=1M --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


### Escritas aleatórias com um tamanho de bloco de 4K
Este teste gera quatro processos Fio, cada um dos quais escreve numa imagem distinta utilizando dois threads.


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


### Leitura/escrita mista com blocos de diferentes tamanhos

```bash
fio --name=test-1 --ioengine=rbd --pool=rbd --rbdname=test-image --numjobs=1 \
    --rw=randrw --rwmixread=40 \
    --bssplit=64k/47:4k/22:16k/12:8k/6:512/5:32k/4:12k/3:256k/1,8k/89:4k/11 \
    --iodepth=32 --fsync=32 \
    --runtime=600 --time_based --group_reporting
```


## Medir o desempenho do Cloud Disk Array
Para medir o desempenho do Cloud Disk Array, realizamos testes em 32 imagens (cada uma com um tamanho de 32 GB), durante várias horas. A utilização de conjuntos de big data durante os testes permite garantir que o desempenho se mantém a um determinado nível.