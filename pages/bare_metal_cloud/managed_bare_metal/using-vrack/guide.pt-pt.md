---
title: Utilizar o Managed Bare Metal no seio de um vRack
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack'
excerpt: Saiba como utilizar o vRack com o seu serviço Managed Bare Metal
updated: 2020-11-23
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

O vRack é a possibilidade de ligar diferentes serviços cloud da OVHcloud entre si, no seio de uma ou várias redes privadas seguras (VLAN).

**Este guia explica como implementar**

## Instruções

### Área de Cliente

Aquando da entrega do seu serviço [Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/), a parte *datacenter* já está dentro de um vRack.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

É possível mover o *datacenter* do seu Managed Bare Metal para outro vRack clicando no botão `Migrar`{.action}

### Client vSphere

No vSphere, pode encontrar as *VLANs* compatíveis com vRack no switch virtual distribuído (vds), que está situado na pasta **vRack**.

> [!success]
>
> Por predefinição, a OVHcloud disponibiliza-lhe uma infraestrutura com 11 VLANs (VLAN10 a VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

É possível alterar os parâmetros ou criar novos parâmetros de acordo com o guia de [criação da VLAN](/pages/bare_metal_cloud/managed_bare_metal/vlan-creation).

Poderá de seguida atribuir estas *portgroup* às interfaces de rede das suas máquinas virtuais.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
