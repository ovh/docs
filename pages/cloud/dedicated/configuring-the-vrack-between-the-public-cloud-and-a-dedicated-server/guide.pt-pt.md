---
title: 'Configurar o vRack entre o Public Cloud e um servidor dedicado'
slug: configurar-vrack-entre-pci-servidor-dedicado
excerpt: 'Saiba como configurar uma rede privada entre uma instância Public Cloud e um servidor dedicado'
section: vRack
---

**Última atualização: 08/11/2018**

## Sumário

O [vRack](https://www.ovh.pt/solucoes/vrack/){.external} é uma rede privada que lhe permite configurar o direcionamento entre dois ou mais [servidores dedicados](https://www.ovh.pt/servidores_dedicados/){.external} da OVH. Além disso, permite-lhe também adicionar [instâncias Public Cloud](https://www.ovh.pt/public-cloud/instances/){.external} à sua rede privada para criar uma infraestrutura de recursos físicos e virtuais.

**Este manual explica-lhe como configurar uma rede privada entre uma instância Public Cloud e um servidor dedicado.**


## Requisitos

- Ter ativado um serviço [vRack](https://www.ovh.pt/solucoes/vrack/){.external}.
- Dispor de um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external} compatível com o vRack.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso ao intervalo escolhido de endereços de IP privados.


## Instruções

### Criar um projeto Public Cloud

Depois de aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique no menu `Cloud`{.action} e, em seguida, em `Encomendar`{.action}.

![Criar um projeto](images/pci-project-01.png){.thumbnail}

No menu `Encomendar`, clique em `Projeto Cloud`{.action}.

![Criar um projeto](images/pci-project-02.png){.thumbnail}

Indique um nome para o seu projeto, selecione um método de pagamento e clique em `Ativar a minha conta Cloud`{.action}.

![Criar um projeto](images/pci-project-03.png){.thumbnail}

Depois de configurar o seu projeto, deverá ativar as redes privadas. Clique no botão `Ativar as redes privadas`{.action} na página do projeto.

![Ativar o vRack](images/pci-vrack-01.png){.thumbnail}

Em seguida, selecione a opção `Existente`{.action} e escolha o seu vRack no menu pendente.

![Ativar o vRack](images/pci-vrack-02.png){.thumbnail}


### Criar uma instância Public Cloud

Na página do projeto, clique em `Ações`{.action}.

![Criar uma instância](images/pci-01.png){.thumbnail}

No menu pendente, clique na opção `Adicionar servidor`{.action}.

![Criar uma instância](images/pci-02.png){.thumbnail}

Clique no botão `Opções avançadas`{.action}.

![Criar uma instância](images/pci-03.png){.thumbnail}

A seguir, clique no menu pendente em **Associar à rede privada** e selecione o vRack. Depois, clique em `Continuar`{.action} para voltar ao ecrã anterior.

![Criar uma instância](images/pci-04.png){.thumbnail}

Finalmente, selecione as suas opções de instalação e clique no botão `Iniciar agora`{.action}.

![Criar uma instância](images/pci-05.png){.thumbnail}


### Configurar as interfaces de rede

Para configurar as interfaces de rede entre a instância Public Cloud que acabou de criar e o seu servidor dedicado, pode consultar diretamente o manual intitulado “[Configurar vários servidores dedicados no vRack](https://docs.ovh.com/pt/dedicated/configurar-varios-servidores-dedicados-no-vrack/){.external}”.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}