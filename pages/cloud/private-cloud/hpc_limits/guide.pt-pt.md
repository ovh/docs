---
title: Capacidade técnica
slug: capacidades-tecnicas
excerpt: 'Encontre as capacidades e limitações técnicas das soluções Hosted Private Cloud fornecidas pela OVHcloud'
section: FAQ
order: 2
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 01/02/2023**

## Objetivo

**Esta página fornece uma visão de conjunto das funcionalidades e limitações técnicas dos serviços Hosted Private Cloud da OVHcloud.**

## Capacidade e limitações conhecidas

| Elemento | Descrição | Valor |
|:-----:|:-----:|:----------:|
| Número máximo. de PCC por ID de cliente | Número de vCenter ou de packs por organização | Nenhum limite |
| Número de PCC associados | Ligação do vCenters (Enhanced Link Mode) | 0 (não autorizado) |
| Número min. hosts por PCC (SLA) | Número de hosts por vCenter para a manutenção do contrato de nível de serviço | 2 |
| Número min. hosts por PCC (sem SLA) | Número mínimo de hosts a utilizar com o vCenter sem contrato de nível de serviço | 0 |
| Número máximo. de hosts por cluster | Hosts por cluster | 64 |
| Número máximo. de clusters por vDC | Número de clusters no mesmo datacenter virtual | Nenhum limite |
| Número máximo. de vDC por PCC | O número de datacenters virtuais (vDC) que os clientes podem adicionar por vCenter | 400 |
| Número máximo. hosts por PCC | Limites de hosts por vCenter | 231 hosts, 110 zpools |
| Número máximo. de máquinas virtuais pela SDDC | VMs geridas pelo mesmo vCenter | 25 000 |
| Número máximo. de máquinas virtuais por host | VMs alojadas no mesmo host físico | 1024 |
| Número máximo. de endereços IP por PCC | Número máximo. endereços IP públicos que podem ser atribuídos e utilizáveis por vCenter | 1 x /23 |
| vCPUs, memória RAM e disco utilizados por vCenter standard | Recursos afetados ao vCenter (VCSA) | 4 processadores virtuais, 16 GB de RAM, 290 GB de espaço em disco |
| vCPUs, memória RAM e disco utilizados por NSX standard | Recursos atribuídos ao Manager e ao Controller NSX | 4 CPU virtuais, 4 GB de RAM, 60 GB de espaço em disco<br>4 CPU virtuais, 2 GB de RAM, 28 GB de espaço em disco |
| vCPUs, memória RAM e disco utilizados por vROPS | Recursos atribuídos ao vROPS | 4 processadores virtuais, 16 GB de RAM |
| Número máximo. de edge nós | Número máximo. de periféricos edge a implementar por NSX | 2000 |
| Número máximo. de túneis VPN IPSec | Número máximo. de túneis VPN por edge | 512 compact edge<br>1600 banda larga<br>4096 quad large dge<br>6000 extra - idade |
| Número máximo. do vRack por vDC | Número máximo. de redes privadas por Virtual Data Center (VDC) | 1 |
| Número máximo. de clientes VPN L2 | Número de clientes VPN a ligar | 5 |
| Número máximo. de endereços IP autorizados | Número de endereços IP autorizados a ligar-se à sua infraestrutura VMware | 2048 |

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
