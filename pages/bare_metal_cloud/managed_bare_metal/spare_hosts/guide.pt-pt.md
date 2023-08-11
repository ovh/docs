---
title: Host de substituição
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/spare_hosts'
excerpt: Descubra o mecanismo de substituição de um host
updated: 2020-11-18
---
**Última atualização: 18/11/2020**

## Requisitos

- Dispor de uma oferta [Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/){.external}.

## Sumário

A OVHcloud garante nos seus contratos a substituição de um host inacessível.

**Este manual explica o funcionamento desta substituição.**

## Entrega de um host de substituição

Para garantir a continuidade de serviço em caso de avaria de um dos hosts, a OVHcloud disponibiliza automaticamente na infraestrutura um host de substituição gratuito. 

Assim que este host for entregue, receberá um e-mail indicando-lhe todas as informações sobre este host, assim como o seu endereço IP que lhe permite encontrá-lo facilmente na sua interface vSphere.

Por predefinição, o serviço HA ([High Availability](/pages/bare_metal_cloud/managed_bare_metal/vmware_ha_high_availability)) de VMware é ativado no seu cluster. Se o tiver deixado ativo, as suas máquinas virtuais irão reiniciar automaticamente. Se o serviço DRS (Distributed Ressources Scheduler) for ativado e configurado em modo “fully automated”, a repartição da carga nos hosts do seu cluster será igualmente efetuada de forma automática.

> [!warning]
> 
> Se um leitor CD/DVD ainda estiver montado ou ligado numa VM, o serviço HA não a poderá reiniciar no host de substituição. Recomenda-se ter sempre o leitor CD/DVD em periférico cliente.
>

## O que fazer depois de receber o host de substituição

Uma vez o host original novamente funcional (depois de reparado), poderá devolver um dos dois hosts (host de substituição ou host original).

Recomendamos que nos devolva o host original para que lhe possamos aplicar uma série de testes após esse incidente (para evitar eventuais novas avarias). Assim, poderá conservar o host de substituição. Para isso, pode consultar o manual [Eliminar um servidor host](/pages/bare_metal_cloud/managed_bare_metal/delete_host)

A OVHcloud poderá recuperar automaticamente o host original assim que este for retirado.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

