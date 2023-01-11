---
title: 'Configuração do vRack Public Cloud'
excerpt: 'Saiba como configurar o vRack para as instâncias de Public Cloud'
slug: public-cloud-vrack
section: Introdução
order: 07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


**Última atualização: 02/11/2022**

## Objetivo

O [vRack](https://www.ovh.pt/solucoes/vrack/) é uma rede privada que lhe permite configurar o direcionamento entre vários servidores dedicados OVHcloud. Mas permite-lhe também adicionar [instâncias Public Cloud](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/) à sua rede privada a fim de criar uma infraestrutura de recursos físicos e virtuais.

**Este guia explica como configurar instâncias de Public Cloud no seu vRack.**

## Requisitos

- Dispor de um [projeto Public Cloud](https://docs.ovh.com/pt/public-cloud/criar_seu_primeiro_projeto_public_cloud/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
- um [utilizador OpenStack](https://docs.ovh.com/pt/public-cloud/criar-e-eliminar-um-utilizador-openstack/) (opcional)
- Conhecimentos básicos de rede

## Apresentação das interfaces

Quer seja para criar o seu vRack ou adicionar uma instância dentro desta rede, poderá ser levada a utilizar a Área de Cliente OVHcloud, a APIv6 OVHcloud, a API OpenStack ou a interface Horizon.

Em função do seu perfil técnico e das suas necessidades, terá de escolher qual a interface ou método a utilizar. Assim, para cada ação, iremos propor-lhe as diferentes abordagens possíveis.

**Eis uma descrição rápida das ações possíveis segundo o método/interface escolhida:**

### Área de Cliente OVHcloud

A [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) é uma interface completa e unicamente visual, o que a torna uma interface ideal se tiver apenas uma VLAN a gerir. Não poderá personalizar o intervalo de endereços IP privados que será apenas em 10.x.x.x/16.

As VLAN serão implementadas de forma padrão em todas as zonas. Apenas terá a possibilidade de ativar ou não as gateways.

Também poderá gerir a faturação dos seus serviços através da Área de Cliente OVHcloud.

### Interface Horizon

Interface visual independente da OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} é a implementação inicial do painel de controlo da OpenStack, que fornece uma interface de utilizador web aos serviços OpenStack, incluindo Nova, Swift, Keystone, etc...

Esta interface completa e técnica permite-lhe gerir a quase totalidade das ações OpenStack. Esta será uma das interfaces necessárias se deseja gerir mais de duas VLAN, adicionar interfaces de rede privadas às suas instâncias, gerir imagens personalizadas, etc..

Consulte o guia: [Criar um acesso à interface Horizon](https://docs.ovh.com/pt/public-cloud/horizon/) para se familiarizar com o Horizon.

> [!primary]
> Uma vez que o Horizon funciona por zona, pense bem em escolher a sua zona geográfica de trabalho no topo à esquerda da sua interface (GRA5, SBG3, BHS1, etc...)
>

### APIv6 OVHcloud

Cada ação que efetuar na Área de Cliente OVHcloud recorre às [APIv6 OVHcloud](https://api.ovh.com/).
Pode mesmo ir mais longe nas API do que na sua Área de Cliente.

A interface é menos visual que a Área de Cliente OVHcloud, mas permitir-lhe-á realizar um grande número de ações. Desta forma, poderá gerir e personalizar as suas VLAN, adicionar interfaces às suas instâncias ou ainda criar servidores altamente personalizados.

Por vezes, será necessário recuperar várias informações antes da utilização de uma API específica.

Pode simplesmente aceder às API a partir da [nossa página web](https://api.ovh.com/), mas também criar os seus scripts PHP ou Python para as contactar.

Assim, poderá automatizar livremente as tarefas de base através de scripts, otimizar as suas próprias funções, etc.

Consulte o guia [Primeiros passos com as API OVHcloud](https://docs.ovh.com/pt/api/first-steps-with-ovh-api/), para se familiarizar com a utilização das APIv6 OVHcloud.

### API OpenStack

É possível administrar os serviços Public Cloud com a ajuda de linhas de comando Linux ou Windows, após o descarregamento e a instalação das ferramentas OpenStack.

Este método requer bons conhecimentos Linux ou Windows para os beneficiar, mas permite usufruir de toda a potência do OpenStack por este meio.

Conforme a camada que deseja gerir, deverá utilizar o cliente **Nova** (Compute), **Neutron** (network), **Glance** (Image) ou ainda **Swift** (Object Storage). O último nascido da família, o cliente OpenStack, permite-lhe gerir diretamente a quase totalidade das camadas OpenStack.

Graças à API OpenStack, pode também automatizar facilmente esta gestão através dos seus scripts.

Para se familiarizar com a API OpenStack, consulte os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/set-openstack-environment-variables/)

Poderá, em função das suas necessidades, utilizar as API dedicadas ao OpenStack:

- Nova (compute)
- Glance (imagem)
- Cinder (imagem)
- Neutron (rede)

> [!primary]
>Em alguns casos, será mais simples utilizar as API OpenStack e noutros, as API Nova, Neutron, etc...
>
> Da mesma forma, algumas funcionalidades podem estar ausentes da API OpenStack de acordo com a versão do seu cliente e do seu sistema operativo.
No âmbito deste manual, foi escolhido propor-lhe as alternativas mais simples e mais intuitivas.
Pode consultar a [documentação oficial do OpenStack](https://docs.openstack.org/){.external} a qualquer momento, se pretender ir mais longe na sua utilização.
>

## Instruções

### Etapa 1: Ativar e gerir um vRack <a name="activation"></a>

Antes de mais, deve criar um vRack.

Este produto é gratuito e a disponibilização demora apenas alguns minutos. No entanto, requer a criação e a validação de uma nota de encomenda.

Uma vez o vRack ativado, este serviço será identificado como "pn-xxxxx".

#### A partir da Área de Cliente OVHcloud

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud à sua escolha no canto superior esquerdo.

![seleção do projeto](images/vrack2021-05.png){.thumbnail}

Clique em `Private Network`{.action} no menu lateral à esquerda. 

![Private Network](images/vrack2021-02.png){.thumbnail}

Clique no botão `Para começar, crie um vRack`{.action}. Deverá escolher criar um novo vRack ou utilizar um vRack existente. No nosso exemplo, vamos criar um novo vRack. Depois de escolher, clique em `Criar`{.action}.

![vRack creation](images/vrack3.png){.thumbnail}

Para continuar a configuração do vRack a partir da Área de Cliente OVHcloud, prossiga a leitura deste guia a partir de [Criar uma VLAN no vRack a partir da Área de Cliente OVHcloud](./#criar-uma-vlan-a-partir-da-area-de-cliente-ovhcloud).

#### A partir das APIv6 OVHcloud

Para ativar e gerir um vRack a partir das APIv6 OVHcloud, clique [aqui](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#step-1-activating-and-managing-a-vrack) (EN), para consultar o guia específico deste método.

### Etapa 2: Criar uma VLAN no vRack

É necessário criar uma VLAN (ou rede local virtual) para que as instâncias ligadas ao vRack possam comunicar entre si.

Na oferta Public Cloud, pode criar até 4000 VLAN dentro de um único vRack. Isto significa que pode utilizar cada endereço IP privado até 4000 vezes.
Por exemplo, o IP 192.168.0.10 da VLAN 2 é diferente do IP 192.168.0.10 da VLAN 42.

Pode ser útil para segmentar o seu vRack entre várias redes virtuais.

A partir da Área de Cliente OVHcloud, poderá afetar a VLAN à sua escolha, mas não poderá personalizar a gama IP. O vRack estará ativo em todas as zonas.

A partir das APIv6 OVHcloud, poderá personalizar o conjunto dos parâmetros: intervalo IP (10.0.0.0/16, por exemplo), zona de implementação, DHCP, Gateway, etc...

> [!primary]
> Nos servidores dedicados, por predefinição, está na VLAN 0. O funcionamento da infraestrutura OpenStack significa que deverá especificar o número da sua VLAN diretamente ao nível da infraestrutura.
>
> Contrariamente aos servidores dedicados, não é necessário « tagar » a VLAN diretamente numa instância Public Cloud. 
>
> Para mais informações sobre a gestão das VLAN do vRack dos servidores dedicados, pode consultar este guia: [Criar várias VLAN no vRack](https://docs.ovh.com/pt/dedicated/criar-vlan-vrack/).

> [!warning]
> Uma vez que o vRack é uma infraestrutura gerida ao nível da OVHcloud, só poderá administrá-lo através da Área de Cliente OVHcloud e da APIv6 OVHcloud.
>
> Uma vez que o OpenStack não está situado no mesmo nível da infraestrutura, não poderá personalizar as VLAN através da interface Horizon ou das API OpenStack.
>

#### Criar uma VLAN a partir da Área de Cliente OVHcloud

Depois de criar o vRack, clique novamente em `Private Network`{.action} no menu lateral à esquerda. 

![VLAN criação](images/vrack2021-03.png){.thumbnail}

Clique agora em `Criar uma rede privada`{.action}. A página seguinte permite-lhe personalizar vários parâmetros.

![add private network](images/vrack5.png){.thumbnail}

Se selecionar a opção `Definir um ID de VLAN`, deverá escolher um número de VLAN compreendido entre 2 e 4000.

Se não selecionar a opção `Definir um ID de VLAN`, ficará por defeito na VLAN 0.

Caso seja necessário fazer comunicar servidores dedicados OVHcloud com VLAN taggado, consulte o seguinte guia: [Criar várias VLAN no vRack](https://docs.ovh.com/pt/dedicated/criar-vlan-vrack/).

O intervalo DHCP predefinido está em 10.0.0.0/16. Para alterar este intervalo IP, deverá obrigatoriamente passar pelas APIv6 OVHcloud.

Valide as diferentes regiões pretendidas, introduza um nome para a sua rede privada e clique em `Criar`{.action} para iniciar a sua criação. 

> [!primary]
> A criação da rede privada pode levar alguns minutos.
>

#### Criar uma VLAN a partir da APIv6 OVHcloud

Para criar uma VLAN a partir da APIv6 OVHcloud, clique [aqui](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#step-3-creating-a-vlan-in-the-vrack_1) (EN), para consultar o guia específico deste método.

### Etapa 3: Integrar uma instância no vRack

Existem duas situações:

- A instância ainda não existe.
- A instância já existe e deve adicioná-la ao vRack.

#### Em caso de nova instância

##### **A partir da Área de Cliente OVHcloud**

Consulte o guia: [Criar uma instância a partir da Área de Cliente](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#create-instance). Ao criar uma instância, poderá especificar, na etapa 4, uma rede privada na qual poderá integrar a sua instância. Escolha, no menu pendente apresentado, o seu vRack criado anteriormente.

![attach new instance](images/vrack6.png){.thumbnail}

> [!warning]
> Ao criar uma nova instância, só poderá ligar a sua instância a um vRack a partir da Área de Cliente OVHcloud.
> Para adicionar várias interfaces diferentes, deverá passar pelas API OpenStack ou interface Horizon.
>

##### **A partir da APIv6 OVHcloud**

Clique [aqui](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#step-4-integrating-an-instance-into-the-vrack_1) (EN), para consultar o guia específico deste método.

##### **A partir da API OpenStack**

Para utilizar a API OpenStack, se ainda não o fez, deverá preparar o seu ambiente de trabalho conforme indicado na [primeira parte deste manual](./#api-openstack).

Assim, para criar uma instância diretamente no vRack, deverá proceder desta forma.

###### Recuperação das informações necessárias

Identificação das redes públicas e privadas:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

ou

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Deve anotar os ID das redes que lhe interessam:
><br> - ExtNet para ter um IP público
><br> - O da ou das VLAN necessárias para a sua configuração
>

Tenha em atenção as seguintes informações, como indicado no [guia de utilização da API Nova](https://docs.ovh.com/gb/en/public-cloud/starting-with-nova-api/):

- ID ou nome da chave SSH OpenStack
- ID do tipo de instância (flavor)
- ID da imagem pretendida (Sistema operativo, snapshot, etc...)

###### Implementação da instância

Com os elementos recuperados anteriormente, é possível criar uma instância ao incluí-la diretamente no vRack:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]

Exemplo:
nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```
ou

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]

Ex :
openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

Tem a possibilidade de definir o endereço IP da instância da sua interface vRack ao nível de OpenStack.

Para isso, pode adicionar um simples argumento na função "—nic":

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Exemplo:

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

###### Verificação da instância

Depois de alguns instantes, pode verificar-se a lista das instâncias existentes a fim de encontrar o servidor criado:

```bash
openstack server list
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| ID                                   |       Name          | Status | Networks                                         |     Image Name     |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Name of instance]  | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  | [Name-of-instance] |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
```


```bash
nova list
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| ID                                   | Name               | Status | Task State | Power State | Networks                                         |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Name of instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
```


#### Caso de uma instância existente

A Área de Cliente OVHcloud permite associar uma instância a uma ou várias redes privadas, mas não oferece uma configuração avançada das interfaces de rede. Se deseja personalizar mais estas, terá de as gerir quer a partir das APIv6 OVHcloud, quer através das API OpenStack ou através do Horizon.

A ação consistirá em simplesmente adicionar uma nova interface de rede ao seu servidor, para além da existente.

Assim, por exemplo, se tiver uma interface pública *eth0*, terá ainda uma interface *eth1*.

> [!warning]
> A configuração desta nova interface raramente é automática.
> Será necessário configurá-la em DHCP ou IP Fixo consoante a sua infraestrutura.
>


##### **A partir da Área de Cliente OVHcloud** 

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em questão no canto superior esquerdo.

Clique em `Instances`{.action} no menu lateral esquerdo. A seguir, clique no botão `...`{.action} à direita da instância em causa e, a seguir, em `Dados da instância`{.action}.

![de](images/vrack2021.png){.thumbnail}

Isso abrirá o painel de instâncias. Clique em `...`{.action} à direita de "Rede(s) privada(s)" e, a seguir, em `Associar uma rede`{.action}.

![associar rede](images/vrack2021-01.png){.thumbnail}

Na pop-up que aparecer, selecione a ou as redes privadas a associar à sua instância e clique em `Associar`{.action}.

![associar rede](images/vrack9.png){.thumbnail}

##### **Gestão das interfaces de rede a partir da APIv6 OVHcloud**

Clique [aqui](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/#in-case-of-an-existing-instance_1) (EN), para consultar o guia específico deste método.

##### **Gestão das interfaces de rede a partir do OpenStack Horizon**

Ligue-se à interface [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} de acordo com o método indicado na [primeira parte deste guia](./#interface-horizon).

Ligue-se bem à sua zona de trabalho:

![ligação Horizon](images/horizon1.png){.thumbnail}

Selecione `Compute` e, em seguida, `Instances` no menu.

![Horizon compute instâncias](images/horizon2.png){.thumbnail}

###### Adição de uma interface privada

Para adicionar uma interface, na coluna "Actions", clique na seta que permite aceder às ações possíveis na instância. A seguir, clique em `Attach Interface`{.action}:

![Horizon attach interface](images/horizon3.png){.thumbnail}

Selecione a sua interface e valide:

![Horizon attach interface](images/horizon4.png){.thumbnail}

> [!primary]
> Sua instância de OVHcloud terá uma nova interface de rede além da interface pública (Ext-Net).
><br>No resumo da instância, poderá ver o endereço IP privado atribuído automaticamente à sua interface.
><br>É sua responsabilidade configurar corretamente a interface por meio de DHCP ou usando os endereços IP adequados por meio de uma configuração de IP estático.
>

###### Eliminação de uma interface privada

> [!warning]
> A eliminação de uma interface é definitiva.
>
>Se eliminar a interface "Ext-Net" (IP público), este endereço será libertado e reposto em circulação. Por isso, não poderia reatribuir-se a ela.
><br>Esta ação só deve ser realizada se pretender isolar o seu servidor no vRack (interface "Ext-Net") ou retirá-lo de uma VLAN.
>

Para eliminar uma interface, na coluna "Actions", clique na seta que permite aceder às ações possíveis na instância. A seguir, clique em `Detach Interface`{.action}:

![Horizon detach interface](images/horizon5.png){.thumbnail}

Selecione a interface a eliminar e valide:

![Horizon detach interface](images/horizon6.png){.thumbnail}

##### **Gestão das interfaces de rede a partir da API OpenStack**

Para utilizar a API OpenStack, se ainda não o fez, deverá preparar o seu ambiente de trabalho conforme indicado na [primeira parte deste manual](./#api-openstack).

Assim, para integrar uma instância existente no vRack, deverá proceder desta forma.

###### Recuperação das informações necessárias

Identificação das suas instâncias:

```bash
openstack server list
 
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

ou

```bash
nova list
 
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```

Identificação das redes públicas e privadas:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

ou

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Deve anotar os ID das redes que lhe interessam:
><br> - ExtNet para ter um IP público
><br> - O da ou das VLAN necessárias para a sua configuração
>

###### Adição de uma interface privada

Para associar uma nova interface, pode efetuar o seguinte comando:

```bash
nova interface-attach --net-id <ID-VLAN> <ID-instance>
```

Por exemplo:

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

Pode verificar que a ação foi corretamente tomada em conta:

```bash
nova show <ID instance>
 
+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| ExtNet network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                     | => o seu IP público
| myVLAN-42 network                   | 192.168.0.x                                               | => o seu IP Privado
[...]
```

ou

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MyVLAN-42=192.168.0.x   | => o seu IP público; o seu IP Privado                                                                    
[...]
```

###### Eliminação de uma interface

> [!warning]
> A eliminação de uma interface é definitiva.
>
>Se eliminar a interface "Ext-Net" (IP público), este endereço será libertado e reposto em circulação. Por isso, não poderia reatribuir-se a ela.
><br>Esta ação só deve ser realizada se pretender isolar o seu servidor no vRack (interface "Ext-Net") ou retirá-lo de uma VLAN.
>

Para desassociar uma interface, terá de identificar primeiro a porta Neutron que foi criada.

Para isso, pode utilizar os seguintes comandos:

```bash
neutron porta-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

ou

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Depois de identificar a porta a eliminar, pode efetuar o seguinte comando:

```bash
nova interface-detach <ID_instance> <port_id>
```

Por exemplo:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Quer saber mais?

[Configuração do vRack Public Cloud a partir das APIv6 OVHcloud](https://docs.ovh.com/gb/en/publiccloud/network-services/public-cloud-vrack-apiv6/) (EN)

[Servidores dedicados - Criar várias VLAN no vRack](https://docs.ovh.com/pt/dedicated/criar-vlan-vrack/)

Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.