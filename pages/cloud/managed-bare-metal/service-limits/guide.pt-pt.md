---
title: Capacidade técnica
slug: capacidades-técnicas
routes:
    canonical: 'https://docs.ovh.com/pt/private-cloud/capacidades-tecnicas/'
excerpt: 'Encontre as capacidades e limitações técnicas das soluções Managed Bare Metal fornecidas pela OVHcloud'
section: FAQ
order: 2
updated: 2020-10-27
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 30 de novembro de 2020**

## Objetivo

**Esta página fornece uma visão de conjunto das funcionalidades e limitações técnicas dos serviços Managed Bare Metal OVHcloud.**

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
| Número máximo. hosts por PCC | Limites de hosts por vCenter | intervalo **Hosts**: 340 hosts, 70 zpools<br>intervalo **Hybrid**: 241 hosts, 120 zpools<br>gama **BigDS**: 76 hosts, 205 zpools |
| Número máximo. de máquinas virtuais pela SDDC | VMs geridas pelo mesmo vCenter | 25 000 |
| Número máximo. de máquinas virtuais por host | VMs alojadas no mesmo host físico | 1024 |
| Número máximo. de endereços IP por PCC | Número máximo. endereços IP públicos que podem ser atribuídos e utilizáveis por vCenter | 1 x /23 |
| vCPUs, memória RAM e disco utilizados por vCenter standard | Recursos afetados ao vCenter (VCSA) | 4 processadores virtuais, 16 GB de RAM, 290 GB de espaço em disco |
| vCPUs, memória RAM e disco utilizados por vROPS | Recursos atribuídos ao vROPS | 4 processadores virtuais, 16 GB de RAM |
| Número máximo. de túneis VPN IPSec | Número máximo. de túneis VPN por edge | 512 compact edge<br>1600 banda larga<br>4096 quad large dge<br>6000 extra - idade |
| Número máximo. do vRack por vDC | Número máximo. de redes privadas por Virtual Data Center (VDC) | 1 |
| Número máximo. de clientes VPN L2 | Número de clientes VPN a ligar | 5 |

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
