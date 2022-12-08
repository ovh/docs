---
title: Utilizar o Hosted Private Cloud no seio de um vRack
slug: hosted-private-cloud-vrack
excerpt: Saiba como utilizar o vRack com o seu serviço Hosted Private Cloud
section: Serviços e opções OVHcloud
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 28/03/2022**

## Objetivo

O vRack é a possibilidade de ligar diferentes serviços cloud da OVHcloud entre si, no seio de uma ou várias redes privadas seguras (VLAN).

**Este guia explica como implementar**

## Requisitos

- Ter um serviço [vRack](https://www.ovh.pt/solucoes/vrack/) na sua conta ou encomendar um serviço se necessário.
- Ter contacto com o administrador da infraestrutura [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), para receber dados de acesso.
- Ter um identificador de utilizador ativo [criado na Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### Área de Cliente

Aquando da entrega do seu serviço [Hosted Private Cloud](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/), a parte *datacenter* já está dentro de um vRack. Para aceder à secção vRack, aceda à secção `Bare Metal Cloud`{.action, clique em `Network`{.action}, e em `vRack`{.action}. Selecione o seu vRack na lista para visualizar o conteúdo.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

É possível mover o *datacenter* do seu Hosted Private Cloud para outro vRack clicando no botão `Migrar`{.action}

### Client vSphere

No vSphere, pode encontrar as *VLANs* compatíveis com vRack no switch virtual distribuído (vds), que está situado na pasta **vRack**.

> [!success]
>
> Por predefinição, a OVHcloud disponibiliza-lhe uma infraestrutura com 11 VLANs (VLAN10 a VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

É possível alterar os parâmetros ou criar novos parâmetros de acordo com o guia de [criação da VxLAN](../criacao-vlan-vxlan/).

Poderá de seguida atribuir estas *portgroup* às interfaces de rede das suas máquinas virtuais.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
