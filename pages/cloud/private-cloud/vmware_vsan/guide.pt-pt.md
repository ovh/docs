---
title: 'Implementar a hiperconvergência VMware com o vSAN'
slug: vmware-vsan
excerpt: 'Saiba como aproveitar a potência da hiperconvergência nas máquinas virtuais com vSAN'
section: 'Funcionalidades VMware vSphere'
---

**Última atualização: 10/01/2019**

## Sumário

Este manual explica os conceitos e os pormenores da implementação do VMware vSAN no Private Cloud.

**Saiba como aproveitar a potência da hiperconvergência nas máquinas virtuais com vSAN.**

## Requisitos

* Dispor do serviço [Private Cloud](https://www.ovh.com/pt/private-cloud/){.external}.
* Ter adicionado, pelo menos, três hosts vSAN.
* Ter acesso à interface de gestão vSphere.

## Instruções

### vSAN: conceitos essenciais

#### O que é o vSAN?

O vSAN é uma solução de armazenamento de objetos disponibilizada pelo VMware. Permite agregar um conjunto de discos situados diretamente nos hosts VMware e apresentá-los como um datastore único. Este tipo de arquitetura, que utiliza conjuntamente as capacidades de processamento e de armazenamento num conjunto de hosts físicos, também é conhecido como **arquitetura hiperconvergente**. Como este datastore é uma construção virtual gerida pelo programa vSAN, também se aplica o termo “Software Defined Storage”, ou SDS. Uma das vantagens do vSAN é o facto de estar completamente integrado no vSphere e de ser gerido diretamente a partir do vCenter.

#### O que é o armazenamento de objetos?

Um dos pontos mais importantes a compreender é o de que o datastore do vSAN é um sistema de armazenamento de objetos. As máquinas virtuais alojadas neste datastore são compostas por diferentes objetos, ao passo que num armazenamento “tradicional” as VM são constituídas por ficheiros alojados num LUN. A proteção destes objetos é simples: através da sua replicação em vários hosts do cluster (sendo que, habitualmente, é o nível de RAID dos discos que assegura este tipo de proteção).

Uma VM é constituída pelos seguintes objetos:
* Os ficheiros básicos da VM (VMX, nvram, logs, snapshots da memória, etc.), também chamados VM Home;
* Os discos virtuais (VMDK);
* O Swap,
* Os snapshots dos discos.

Os elementos que constituem um objeto chamam-se componentes. Por exemplo, se o objeto for replicado em dois hosts, é constituído por dois componentes. O número de componentes associados a um objeto vai permitir definir o nível de resiliência dos dados.

#### Proteção de dados

De modo a assegurar a proteção dos dados em caso de falha material (hosts, discos, etc.), é necessário definir os níveis de redundância esperados. Para isso, o vSAN oferece dois mecanismos complementares.

##### Failure To Tolerate (FTT)

O primeiro nível de redundância refere-se ao número de falhas que o cluster vSAN deve poder suportar, quer seja a perda de um disco, de um host ou da rede. Este valor é chamado *Failure To Tolerate*, ou FTT, e pode ir de 0 (nenhuma redundância) a 3 (o nível máximo). De acordo com o nível “n” esperado, o vSAN irá criar vários componentes e distribuí-los por cada um dos hosts. Assim, em caso de erro, as máquinas virtuais continuam a estar acessíveis. Quanto mais elevado for o nível de redundância, mais aumenta o número de hosts necessários:

* FTT=1:  mínimo de 3 hosts
* FTT=2:  mínimo de 5 hosts
* FTT=3:  mínimo de 7 hosts

> [!warning]
>
> Se configurar um nível de FTT para 0, os dados em causa não terão nenhuma redundância. Isto implica um risco de indisponibilidade das VM correspondentes.
>

##### Failure Tolerance Method (FTM)

Além do número de falhas toleradas, o vSAN oferece a escolha entre dois métodos de proteção de dados: o mirroring e o erasure coding. Estes mecanismos funcionam de forma análoga à dos clusters RAID utilizados pelos controladores dos discos rígidos, mas aplicam-se diretamente aos objetos e, portanto, aos componentes.

* Mirroring (RAID 1): trata-se do nível padrão, cada objeto é escrito simultaneamente em dois hosts diferentes (em espelho).
* Erasure Coding + FTT=1 (RAID 5): cada objeto se divide em três componentes e é calculado um quarto componente de paridade. Permite encontrar os dados em falta no caso de se perder um dos componentes. Assim, para se escrever quatro componentes, são precisos quatro hosts.
* Erasure Coding + FTT=2 (RAID 6): cada objeto se divide em quatro componentes de dados e dois componentes de paridade, que permitem recalcular dois fragmentos perdidos. Neste caso, para se escrever seis componentes em locais diferentes e assegurar a redundância, são precisos seis hosts.

Estes diferentes parâmetros vão definir o número de componentes que constituem um objeto e, consequentemente, o número mínimo de hosts e o número de falhas (hosts, discos, etc.) toleradas sem que ocorra perda de acesso aos dados.

|         | | Configuração dos objetos em função de FTT e FTM| | |
|------------------------|----------------------------------|------------------------|------------------------|------------------------|
| Failure Tolerance Method (FTM)   | Failure To Tolerate (FTT) | RAID equivalente  | Número mínimo de hosts | Número de falhas tolerado |
| Mirroring | 1 | RAID 1 | 3 | 1 |
| Mirroring | 2 | RAID 1 | 5 | 2 |
| Mirroring | 3 | RAID 1 | 7 | 3 |
| Mirroring | 1 | RAID 5 | 4 | 1 |
| Mirroring | 2 | RAID 6 | 6 | 2 |

> [!primary]
>
> No caso do erasure coding, os níveis de proteção RAID 5 e 6 impõem, respetivamente, um FTT de 1 ou 2\. Os outros valores (0 ou 3) não são compatíveis.
>

#### Consumo de espaço em disco

A utilização dos mecanismos de redundância induz logicamente um consumo de espaço acrescido, pelo que é necessário encontrar um equilíbrio. O ponto forte do vSAN é o facto de permitir a escolha das políticas de redundância por VM, e não globalmente, ao nível do datastore. Desta forma, podemos dispor de políticas diferenciadas em função dos tipos de ambiente.

|         | Excesso de consumo devido à redundância | | |
|------------------------|----------------------------------|------------------------|------------------------|
| Nível de proteção   | RAID 1 | RAID 5 | RAID 6 |
| 3 hosts FTT=1          | x 2    | - | - |
| 4 hosts FTT=1          | x 2    | x 1,33 | - |
| 5 hosts FTT=1          | x 2    | x 1,33 | - |
| 6 hosts FTT=2          | x 2    | - | x 1,5 |

> [!warning]
>
> Por razões de desempenho e resiliência, o VMware recomenda que não se ultrapasse os 70% de capacidade de um datastore vSAN.
>

#### Espaço líquido útil para os dados do utilizador

Para ilustrar o ponto anterior, apresentamos de seguida uma estimativa conservadora do espaço disponível para os dados em diferentes configurações PCC vSAN 256 ou 512, tendo em conta o limite de 70% recomendado pela VMware.

| Nº de hosts vSAN 256  | FTT  | Capacidade do host (TB)  | Espaço total  | 	Espaço útil com política RAID 1 (TB)  | Espaço útil com política RAID 5 (TB)  | Espaço útil com política RAID 6 (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 4  | 12  | 4,2  | n/a  | n/a  |
| 4  | 1  | 4  | 16  | 5,6  | 8,4  | n/a  |
| 5  | 1  | 4  | 20  | 7,0  | 10,5  | n/a  |
| 6  | 1  | 4  | 24  | 8,4  | 12,6  | n/a  |
| 6  | 2  | 4  | 24  | n/a  | n/a  | 11,1  |

| Nº de hosts vSAN 512  | FTT  | Capacidade do host (TB)  | Espaço total  | 	Espaço útil com política RAID 1 (TB)  | Espaço útil com política RAID 5 (TB)  | Espaço útil com política RAID 6 (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 8  | 24  | 8,4  | n/a  | n/a  |
| 4  | 1  | 8  | 32  | 11,2  | 16,8  | n/a  |
| 5  | 1  | 8  | 40  | 14,0  | 21,0  | n/a  |
| 6  | 1  | 8  | 48  | 16,8  | 25,2  | n/a  |
| 6  | 2  | 8  | 48  | n/a  | n/a  | 22,2  |

> [!primary]
>
> Estes números baseiam-se na premissa de que **100% das VM** utilizam a mesma política de armazenamento.
> Não têm em conta os aumentos ligados a uma desduplicação ou a uma compressão (que flutuam muitíssimo em função da natureza dos dados armazenados).
> Portanto, trata-se de uma estimativa extremamente conservadora da volumetria.
>

#### Os grupos de discos (ou *disk groups*)

Os discos físicos presentes nos hosts são agrupados no seio de um grupo de discos. Este constitui a unidade básica de gestão por vSAN e é composto por um disco de cache SSD (obrigatório) e por até sete discos de armazenamento (as configurações da OVH utilizam apenas discos SSD NVMe, de modo a oferecer o melhor desempenho). Cada host que participa no vSAN deve dispor, no mínimo, de um grupo de discos e de um máximo de cinco.

Ao criar-se um *disk group*, juntam-se discos de cache à pool de armazenamento, o que permite aumentar o espaço de cache e o desempenho global.

Em contrapartida, uma vez que tudo é escrito no volume de cache, um problema no disco de cache de um host invalida automaticamente os discos de armazenamento do *disk group* em questão. Se o host dispõe de um único *disk group*, este deixa de estar disponível para o vSAN até à substituição do disco com problemas.

A operação de atribuição dos discos de cache e de armazenamento a um *disk group* chama-se **reclamação** ou **claiming** e ocorre durante a inicialização do vSAN.

##### O *witness*

Existe um objeto particular chamado *witness*. A sua função é permitir resolver um problema de partição no cluster. Uma partição ocorre quando certos membros do cluster deixam de poder comunicar ou quando um host está isolado.

No caso de uma política RAID 1 em que as duas cópias de um objeto se encontram numa partição diferente e são modificadas em simultâneo, já não é possível saber onde estão os dados de referência. É aqui que o *witness *entra em ação: trata-se de um ficheiro de pequena dimensão (2 MB) com apenas metadados e que permite decidir que cópia serve de referência. No caso de um cluster de três hosts e de uma política RAID 1, dois hosts receberão uma cópia dos dados e o terceiro receberá o *witness *que contém informações acerca dos objetos de dados. Num cenário de partição ou de isolamento, o host que continuar a ter acesso ao *witness *vai prosseguir a sua atividade em modo degradado. Quando o problema for resolvido, o host isolado é ressincronizado com os dados mais recentes.

O *witness *só é utilizado na política RAID 1, visto que em RAID 5 ou 6 os dados e a sua
paridade são distribuídos por todos os hosts, pois o seu número é suficiente para evitar qualquer ambiguidade num cenário de isolamento de um host.

##### Visualização dos objetos

Para visualizar o estado dos objetos, consulte as propriedades do cluster. Para isso, clique no separador “Monitor” e na rubrica “vSAN”.

A seguir, clique em “Virtual Objects”.

![](images/vsan_21.png){.thumbnail}

Poderá ver três tipos de objetos vSAN:

* VM home
* Disco rígido 
* Ficheiro de swap RAM (ficheiro vswp)

Se clicar num objeto, poderá ver como está armazenado no cluster. Também poderá ver os diferentes componentes que constituem o objeto.

![](images/vsan_22.png){.thumbnail}

Para ilustrar os outros tipos de objetos, vamos criar um snapshot da VM:

![](images/vsan_23.png){.thumbnail}

Vemos que foi adicionado um novo objeto snapshot a cada um dos objetos “hard disk”.

#### Máximos de vSAN

##### vSAN 6.6

* 5 *disk groups* por host
* 9000 componentes por host vSAN
* 35 discos de armazenamento por host
* 64 hosts por cluster vSAN
* 1 único datastore vSAN por cluster
* 6000 máquinas virtuais por cluster
* 12 *stripes *por objeto
* Tolerância de perda de host: 3
* Dimensão máxima do disco virtual: 62 TB

#### Limitações do vSAN

##### vSAN 6.6

Não são compatíveis as seguintes funções do vSphere:
  * RDM, VMFS, partição de diagnóstico
  * Raw Device Mapping (RDM)
  * Storage I/O control
  * Reserva de volume SCSI

### Ativar o vSAN

> [!warning]
>
> No vSphere 6.5, as operações relativas ao vSAN só estão disponíveis na versão Flash (Flex) do vSphere Web Client, e não na interface HMTL 5.
>

#### Desativação do modo de alta disponibilidade (vSphere HA)

O vSAN baseia-se nas funcionalidades de alta disponibilidade do cluster. Mas, antes de qualquer operação, é preciso que este modo seja desativado.

Para isso, consulte as propriedades do cluster no qual o vSAN deve ser ativado, na rubrica “vSphere Availability”, e desmarque a caixa correspondente.

![](images/vsan_01.png){.thumbnail}

#### Configuração do vSAN

Este manual refere-se às funcionalidades essenciais do vSAN. Assim, utilizaremos as opções padrão, perfeitamente adaptadas a este tipo de utilização:

![](images/vsan_03.png){.thumbnail}

As únicas opções que iremos ativar são a desduplicação e a compressão. Estas vão permitir otimizar o armazenamento dos dados, limitando-se a armazenar uma única vez os dados que se repetem.

O processo só é possível graças ao uso de discos flash de elevado desempenho, em substituição dos discos mecânicos tradicionais.

![](images/vsan_04.png){.thumbnail}

As placas de rede relativas ao tráfego vSAN são sugeridas de forma automática.

A seguir, clique em  `Next`{.action} para selecionar os discos a utilizar para o armazenamento do vSAN. Se se tratar de uma primeira ativação, os discos são detetados automaticamente.

![](images/vsan_05.png){.thumbnail}

> [!primary]
>
> Se já executou o vSAN anteriormente e os discos já foram inicializados, não precisa de os selecionar outra vez.  O ecrã de seleção aparecerá vazio, mas vai permitir-lhe passar à etapa seguinte.
>
> ![](images/vsan_06.png){.thumbnail}
>

O último ecrã permite-lhe verificar se os parâmetros estão corretos antes de lançar a inicialização do processo.

![](images/vsan_07.png){.thumbnail}

A ativação do vSAN pode levar alguns minutos. Quando esta for concluída, pode consultar as informações de configuração clicando no separador “vSAN”.

![](images/vsan_08.png){.thumbnail}

> [!warning]
>
> É importante que reative a função de alta disponibilidade do cluster.
>

### Desativar o VSAN

> [!warning]
>
> No vSphere 6.5, as operações relativas ao vSAN só estão disponíveis na versão Flash do vSphere Web Client, e não na interface HMTL 5.
>

#### Evacuar o datastore

Com a ajuda de um Storage vMotion, deve evacuar todas as máquinas virtuais existentes no datastore vSAN, ou suprimir aquelas que já não sirvam.

Clique no separador “Datastore” e verifique se não há nenhuma máquina virtual no datastore vSAN.

![](images/vsan_09.png){.thumbnail}

#### Eliminação dos grupos de discos

Se deseja eliminar todas as informações de configuração vSAN dos seus discos, pode apagar o grupo de discos criado pelo vSAN durante a ativação.

Basta clicar no separador “vSAN” nas propriedades do cluster, na rubrica “Disk Management”.

![](images/vsan_11.png){.thumbnail}

Para cada um dos hosts, selecione o grupo de discos em causa e clique no ícone de eliminação que se encontra logo por cima.

A seguir é-lhe solicitada uma confirmação.

![](images/vsan_12.png){.thumbnail}

As duas primeiras opções são úteis se deseja retirar um host do cluster sem afetar o funcionamento do datastore vSAN.

Uma vez que vai eliminar a totalidade do datastore, não é necessário migrar os dados. Assim, pode selecionar a última opção “No data evacuation”.

A eliminação vai levar alguns instantes.

Por fim, basta repetir a operação em cada um dos nós do cluster, até à eliminação total do grupo de discos.

![](images/vsan_13.png){.thumbnail}

Se aparecerem mensagens de erro relativamente à integridade do grupo de discos, pode ignorá-las.

#### Desativação da alta disponibilidade

Tal como para a ativação, tem de desativar a alta disponibilidade ao nível do cluster antes de parar o vSAN. Para isso, aceda às propriedades do cluster, rubrica “vSphere Availability”, e desmarque a caixa “Turn ON vSphere HA”.

![](images/vsan_14.png){.thumbnail}

#### Desativação do vSAN

Quando a alta disponibilidade estiver desativada, já pode parar o vSAN.

Ainda nas propriedades do cluster, clique no botão “Modify”.

![](images/vsan_16.png){.thumbnail}

A seguir, desmarque a caixa “Turn ON vSAN”.

![](images/vsan_17.png){.thumbnail}

Por fim, confirme o pedido que vai aparecer.

![](images/vsan_18.png){.thumbnail}

> [!primary]
>
> Se a alta disponibilidade não foi corretamente desativada, uma mensagem de erro vai assinalá-lo:
>
> ![](images/vsan_19_FR.png){.thumbnail}
>

Quando a operação for concluída, aparecerá uma mensagem de confirmação:

![](images/vsan_20.png){.thumbnail}

> [!warning]
>
> Caso seja necessário, é preciso reativar as funções de alta disponibilidade após esta manipulação se o cluster continuar a alojar máquinas virtuais armazenadas em datastores externos.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}