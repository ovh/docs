---
title: Host de substituição
excerpt: Descubra o mecanismo de substituição de um host
updated: 2026-05-12
---

## Objetivo

A OVHcloud garante nos seus contratos a substituição de um host inacessível.

**Este manual explica o funcionamento desta substituição.**

## Requisitos

- Dispor de uma oferta [Hosted Private Cloud](/links/hosted-private-cloud/vmware).

## Instruções

### Entrega de um host de substituição

Para garantir a continuidade de serviço em caso de avaria de um dos hosts, a OVHcloud disponibiliza automaticamente na infraestrutura um host de substituição gratuito.

Assim que este host for entregue, receberá um e-mail indicando-lhe todas as informações sobre este host, assim como o seu endereço IP que lhe permite encontrá-lo facilmente na sua interface vSphere.

Por predefinição, o serviço [HA (High Availability)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability) de VMware é ativado no seu cluster. Se o tiver deixado ativo, as suas máquinas virtuais irão reiniciar automaticamente. Se o serviço [DRS (Distributed Resource Scheduler)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) for ativado e configurado em modo "Inteiramente automatizado", a repartição da carga nos hosts do seu cluster será igualmente efetuada de forma automática.

> [!warning]
> 
> Se um leitor CD/DVD ainda estiver montado ou ligado numa VM, o serviço HA não a poderá reiniciar no host de substituição. Recomenda-se ter sempre o leitor CD/DVD em periférico cliente.
>

### O que fazer depois de receber o host de substituição

Recomendamos que nos devolva o host original para que lhe possamos aplicar uma série de testes após esse incidente (para evitar eventuais novas avarias). Assim, poderá conservar o host de substituição. Para isso, pode consultar o manual [Eliminar um servidor host](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_host).

> [!warning]
> 
> Em caso de não devolução de um dos dois hosts (original ou de substituição) no prazo de 7 dias, o host de substituição será faturado à hora a partir do 8.º dia.
>

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).
