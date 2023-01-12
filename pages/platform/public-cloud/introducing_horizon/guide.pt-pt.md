---
title: Apresentação do Horizon
excerpt: Descubra as principais secções da interface Horizon
slug: horizon
section: Gestão a partir do Horizon
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 16/03/2022**

## Objetivo

A interface Horizon, que foi originalmente proposta com OpenStack, foi adaptada pela OVHcloud de forma a oferecer funcionalidades complementares às disponíveis na Área de Cliente OVHcloud.

**Descubra as principais secções da interface Horizon.**

## Requisitos

- Um [projeto Public Cloud](https://docs.ovh.com/pt/public-cloud/create_a_public_cloud_project/) na sua conta OVHcloud.
- Um utilizador [OpenStack](../criar-e-eliminar-um-utilizador-openstack/) criado no seu projeto.

## Instruções

### Conectar-se ao OpenStack Horizon

Abra a página de ligação ao [Horizon](https://horizon.cloud.ovh.net/auth/login/) e introduza os [identificadores OpenStack](../criar-e-eliminar-um-utilizador-openstack/) previamente criados, e clique em `Connect`{.action}.

Pode também clicar no `Horizon`{.action} no menu à esquerda em "Management Interfaces" após ter aberto o seu projeto `Public Cloud`{.action} na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

### Seleção da região do centro de dados

Ao contrário da Área de Cliente OVHcloud, o Horizon separa os seus serviços em função da sua região. Pode escolher a região a partir do menu no canto superior esquerdo:

![public-cloud](images/region2021.png){.thumbnail}

### Menu do lado esquerdo

Este menu permite que você navegue rapidamente pelo projeto e seus vários recursos.

![public-cloud](images/leftmenu2021.png){.thumbnail}

### Menu lateral esquerdo

Este menu permite-lhe navegar rapidamente no projeto e nas diferentes funcionalidades associadas.

![public-cloud](images/leftmenu2021.png){.thumbnail}

#### Compute

##### **Vista geral (*Overview*)**

- **Resumo das quotas (*Limit Summary*)**

O Horizon oferece uma síntese das quotas, o que lhe permite ver os recursos ocupados e disponíveis para os seus projetos:

![public-cloud](images/quotas2021.png){.thumbnail}

- **Resumo da utilização (*Usage Summary*)**

De seguida, surge um resumo da utilização das instâncias do seu projeto. O período de pesquisa é personalizável de modo a limitar este resumo a um período de tempo desejado.

![public-cloud](images/usagesummary2021.png){.thumbnail}

- **Modo de utilização (*Usage*)**

Está igualmente disponível um resumo das suas "utilizações". Trata-se de um resumo dos diferentes serviços associados ao projeto, como por exemplo a lista das instâncias.

![public-cloud](images/usage2021.png){.thumbnail}

O resumo pode ser descarregado em formato CSV, o que permite extrair as informações para que as possa analisar por outras ferramentas. Para isso, basta clicar em `Download CSV Summary`{.action}.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Esta página permite listar e administrar as instâncias. É aqui, por exemplo, que é possível criar novas instâncias, pausá-las, aceder à consola da instância e muito mais.

- **Images**

Liste e administre, através deste menu, as imagens, ou seja, os templates e snapshots associados ao seu projeto.

- **Key Pairs**

Pode aqui listar e criar as suas chaves SSH para a ligação às suas instâncias.

##### **Volumes**

Este menu permite-lhe listar e administrar os volumes, assim como os backups e snapshots de volume.

![volume](images/volumes2021.png){.thumbnail}

##### **Network**

Liste e administre aqui as suas redes assim como os diferentes grupos de segurança. 

![network](images/network2021.png){.thumbnail}

##### **Orchestration**

Este menu permite-lhe orquestrar várias aplicações cloud compostas.<br>
Para mais informações queira consultar a [documentação OpenStack](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orquestração](images/orchestration2021.png){.thumbnail}

#### Identity

Este menu permite listar as informações sobre os seus projetos.

### Menu utilizador

No canto superior direito da interface Horizon, um menu de utilizador permite-lhe nomeadamente: 

- Alterar os parâmetros de visualização da interface.
- Descarregar um ficheiro « OpenRC » com os seus dados de utilizador.
- Desligar-se da interface Horizon.

![public-cloud](images/username2021.png){.thumbnail}

## Quer saber mais?

[Familiarizar-se com a interface Public Cloud](https://docs.ovh.com/pt/public-cloud/interface-public-cloud/)
 
Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.