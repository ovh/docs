---
title: Enterprise File Storage - Conceitos de performance
excerpt: "Descubra os conceitos relacionados com o aprovisionamento, o acompanhamento e o teste de desempenho da solução Enterprise File Storage"
updated: 2025-09-12
---

## Objetivo

Descubra os conceitos relacionados com o aprovisionamento, o acompanhamento e o teste de desempenho da solução [Enterprise File Storage](/links/storage/enterprise-file-storage).

## Instruções

### Acompanhamento das performances

A noção de "nível de serviço" é um elemento importante da oferta Enterprise File Storage. Define os níveis de desempenho alcançáveis para cada serviço provisionado. O desempenho de um sistema de ficheiros é geralmente definido por vários elementos:

- O débito.
- IOPS (ou número de operações de entrada-saída por segundo).
- O tamanho do bloco.
- O modelo de acesso sequencial ou aleatório.

Atualmente, o Enterprise File Storage fornece e garante objetivos de desempenho de **64 MB/s por To e 4000 IOPS por To**. As capacidades provisionadas dos serviços têm assim um impacto direto sobre as performances disponíveis para o seu serviço.

Esta informação é importante quando desenvolve a sua arquitetura de armazenamento. Vejamos três exemplos:

- **Exemplo n°1**: a sua aplicação necessita de um débito teórico de cerca de **430 MB/s**. Para isso, deve aprovisionar pelo menos **7 TB** de armazenamento. Com efeito, um cálculo rápido (**430/64 = 6,72**) permite estimar a capacidade mínima necessária para atingir este caudal.

- **Exemplo n°2**: a sua infraestrutura requer **4500 IOPS** e um volume de dados de **1 TB**. Para isso, é necessário aprovisionar **2 TB** para obter os **4500 IOPS necessários**. Mais especificamente neste caso, beneficiará de **8000 IOPS** sobre a capacidade provisionada. Trata-se de aprovisionar o seu serviço de forma a assegurar o nível de desempenho desejado.

- **Exemplo n°3**: a sua aplicação não requer performance particular, mas um volume de armazenamento superior a **60 TB**. Neste caso, é preferível orientar-se para o serviço de armazenamento [NAS-HA](/links/storage/nas-ha), mais económico e que permite atingir capacidades superiores a 58 TB por serviço.

### volumes e qualidade de serviços (QoS)

Relembramos que um volume é uma partição do serviço (também chamada "pool" ou "pool de capacidade"). Aquando da sua encomenda, aprovisionará uma capacidade para o seu serviço. Uma vez o serviço entregue, será obrigado a criar os seus volumes ao colocar à disposição uma quota que vai de 100GB a 29TB por volume.

Encontre aqui a hierarquia de um serviço de armazenamento Enterprise File Storage:

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png){.thumbnail}

Enterprise File Storage ainda não permite a modificação da QoS de forma manual. A QoS é definida ao nível do serviço (pool).

### Como maximizar as performances do seu sistema de ficheiros

Para maximizar o desempenho da sua Enterprise File Storage, é importante ter em conta alguns elementos:

- Não se esqueça de reservar a sua Enterprise File Storage no mesmo datacenter que as suas cargas de trabalho. As latências entre os datacenters podem ser elevadas e afetar as performances globais da sua aplicação.
- Para uma maior fiabilidade e uma largura de banda otimizada, favoreça os servidores das últimas gerações pois dispõem das novas interfaces de rede.
- Identifique a largura de banda pública disponível nos servidores clientes, de forma a garantir a compatibilidade com as performances provisionadas e assim maximizar os débitos.

### Teste de desempenho

Para realizar os seus próprios testes de desempenho e para o familiarizar com os níveis de serviço do Enterprise File Storage, recomendamos a utilização de ferramentas como [FIO](https://github.com/axboe/fio), uma ferramenta de avaliação muito popular. Fornece numerosas opções ajustáveis para simular a carga de trabalho desejada e fornece estatísticas detalhadas sobre o comportamento do armazenamento sob carga. Também está disponível gratuitamente numa vasta gama de sistemas operativos.

É importante testar as performances da sua Enterprise File Storage no mesmo datacenter que as suas cargas de trabalho. As latências entre os datacenters são demasiado elevadas durante o funcionamento normal para que tal avaliação seja pertinente.

Antes de iniciar o teste, verifique se o cliente utilizado para este benchmark tem acesso ao seu serviço Enterprise File Storage e a um volume de teste. Se ainda não o fez, pode seguir o guia de [gestão a partir da Área de Cliente OVHcloud](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_control_panel).

#### Banco de teste

A ferramenta [FIO](https://github.com/axboe/fio) permite-lhe testar vários cenários e modificar vários parâmetros de teste:

- O número de imagens.
- O tamanho das imagens.
- O tamanho do bloco.
- O duração do teste.
- O número de FIO workers.
- O modelo de acesso (leitura/escrita/sequencial/aleatório), etc.

Encontre aqui alguns exemplos de comandos fio que permitem validar que o número de IOPS máximo (4000) ou a largura de banda máxima (64MB/s) podem ser alcançados para um serviço EFS de 1TB:

**Random read - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=8k -size=1G -time_based -runtime=60 -name=test1 -directory=/share-nfs
```
**Random write - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=8k -size=1G -time_based -runtime=60 -name=test2 -directory=/share-nfs
```
**Random read - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randread -bs=64k -size=1G -time_based -runtime=60 -name=test3 -directory=/share-nfs
```
**Random write - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=randwrite -bs=64k -size=1G -time_based -runtime=60 -name=test4 -directory=/share-nfs
```
**Sequential read - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=read -bs=8k -size=1G -time_based -runtime=60 -name=test5 -directory=/share-nfs
```
**Sequential write - IOPS max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=write -bs=8k -size=1G -time_based -runtime=60 -name=test6 -directory=/share-nfs
```
**Sequential Read - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=read -bs=64k -size=1G -time_based -runtime=60 -name=test7 -directory=/share-nfs
```
**Sequential write - Bandwidth max**
```
fio -numjobs=1 -iodepth=128 -direct=1 -ioengine=libaio -sync=1 -rw=write -bs=64k -size=1G -time_based -runtime=60 -name=test8 -directory=/share-nfs
```

Encontre mais informações sobre [a documentação do FIO](https://fio.readthedocs.io/en/latest/index.html).

**Também pode utilizar outras ferramentas open-source, como:**

- [nfsiostat](https://man7.org/linux/man-pages/man8/nfsiostat.8.html)
- [NFStest](https://wiki.linux-nfs.org/wiki/index.php/NFStest)
- [nfstrace](https://github.com/epam/nfstrace)

## Quer saber mais?

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores no Discord: <https://discord.gg/ovhcloud>
