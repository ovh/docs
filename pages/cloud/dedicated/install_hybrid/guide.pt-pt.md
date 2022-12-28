---
title: 'Escolher um conjunto de discos para instalar um sistema operativo'
slug: escolher-conjunto-discos-para-instalar-sistema-operativo
excerpt: 'Saiba como escolher um conjunto de discos específico para instalar um sistema operativo'
section: 'RAID e discos'
---

**Última atualização: 29/11/2018**

## Sumário

A OVH oferece a possibilidade de contratar [servidores dedicados](https://www.ovh.pt/servidores_dedicados/){.external} que possuem um conjunto de discos SATA e um conjunto de discos SSD. Estes servidores são conhecidos como **servidores híbridos**.

**Este manual explica como especificar o conjunto de discos em que se deseja instalar o sistema operativo.**


> [!warning]
> 
> A utilização e a gestão dos serviços OVH são da responsabilidade do cliente. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
> 
> Este manual explica como implementar algumas de medidas para tornar o seu sistema mais seguro. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
>

## Requisitos

* Dispor de um [servidor híbrido da OVH](https://www.ovh.pt/servidores_dedicados/){.external}.
* Ter acesso à [API da OVH](https://api.ovh.com/){.external}.
* Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

> [!warning]
>
> Este procedimento só funciona em sistemas Linux (exceto sistemas ESXi e XenServer) e apenas em configurações em SoftRAID, NoRAID o HardRAID (configuração padrão).
> 

## Instruções

### Obter o nome do servidor a partir da API da OVH

Quando estiver ligado em <https://api.ovh.com/console/>, obtenha o nome do servidor através da seguinte API:

> [!api]
>
> @api {GET} /dedicated/server
> 

De seguida, obtenha o nome do servidor híbrido clicando em `Execute`{.action}:

![Serviços disponíveis](images/services-01.png){.thumbnail}

### Obter o diskGroupId

O `diskGroupId` é o elemento que lhe permitirá definir o conjunto de discos no qual será efetuada a instalação do sistema operativo. 

Para o obter, eis a chamada API a realizar:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/hardware
> 

Introduza o nome do servidor obtido anteriormente no campo “**serviceName**” e clique em `Execute`{.action}. Aparecerão as informações sobre o hardware do servidor. Localize o `diskGroupId` em causa na secção `diskGroups`.

O sistema operativo será instalado por predefinição no `diskGroupId` 1.

![Hybrid](images/hybrid-01.png){.thumbnail}

### Lançar a instalação do sistema operativo

Quando tiver obtido o `diskGroupId`, pode passar à última etapa, que consiste em instalar o sistema operativo.

Realize a seguinte chamada de API para obter a lista dos sistemas operativos compatíveis:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/compatibleTemplates
> 

![Modelos compatíveis](images/templates-01.png){.thumbnail}

Registe o nome do modelo correspondente ao sistema operativo que escolheu e faça a seguinte chamada de API:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 

Introduza a referência do servidor no campo **serviceName**, introduza “diskGroupId” (2) no campo **diskGroupId** e, de seguida, introduza o nome do modelo no campo **templateName** (todos os outros campos são facultativos).

Depois de ter especificado todas as opções, clique em `Execute`{.action}:

![Instalação](images/install-01.png){.thumbnail}

O sistema operativo vai ser instalado. Pode verificar o progresso da instalação ao atualizar a página do servidor na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} ou ao realizar a chamada de API seguinte, introduzindo as referências do servidor no campo **serviceName** e clicando em `Execute`{.action}:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/status
> 

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.