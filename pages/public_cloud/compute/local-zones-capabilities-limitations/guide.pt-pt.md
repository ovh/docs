---
title: Local Zone Compute - Funcionalidades, capacidades e limites
excerpt: Descubra as funcionalidades, capacidades e limites atuais das instâncias Local Zones
updated: 2026-01-16
---

## Objetivo

As instâncias Local Zones são uma extensão das [regiões](/links/public-cloud/regions-pci) que aproximam os serviços da OVHcloud de locais específicos, oferecendo uma latência reduzida e performances melhoradas para as aplicações.

As instâncias Local Zones estão estrategicamente colocadas perto das zonas de forte procura dos utilizadores. O seu objetivo principal é o de minimizar o tempo necessário à transferência dos dados entre o utilizador e a cloud, a fim de tornar os serviços mais rápidos e mais reativos e responder às exigências da Data Residency.

Encontre mais informações na nossa [página dedicada às instâncias Local Zone](/links/public-cloud/local-zones).

**Descubra as funcionalidades e as capacidades atuais e futuras das instâncias Local Zones.**

## Funcionalidades disponíveis

| Serviços Public Cloud | Produto                    | Disponibilidade na Local Zone | Limitações |
| --------------------- | -------------------------- | ----------------------------- | ----------- |
| Compute               | Instâncias                 | Sim | A ação "suspender (shelve)" não é suportada nas Local Zones |
|                       | Instâncias Metal           | Não | |
|                       | GPU                        | Não | |
|                       | Backup de Instâncias       | Sim | |
|                       | Backup Distantes           | Não | |
|                       | Workflow Management para backups | Sim | |
|                       | Imagem Linux               | Sim | |
|                       | Imagens Windows            | Não | |
|                       | Importe a sua própria imagem | Sim | Tamanho máximo da imagem limitado a 25 GB |
| Network               | Load Balancer              | Não | |
|                       | Gateway                    | Não | |
|                       | Floating IP               | Não | |
|                       | Additional IP               | Não | |
|                       | Rede Privada com vRack     | Não | As Local Zones não são compatíveis com vRack. As redes privadas estão limitadas à mesma Local Zone apenas. O DHCP é suportado nas redes privadas das Local Zones. |
| Armazenamento         | Object Storage             | Sim | 1. Políticas de utilizador não suportadas. todas as chaves de acesso dentro de um projeto podem aceder a todos os baldees em todas as Local Zones. <br> 2. Apenas a classe de armazenamento Standard é suportada. <br> 3. Características S3<sup>1</sup> não suportadas: etiquetas S3, Legal Hold, SSE-OMK, replicação S3, registo de acesso ao servidor. |
|                       | Block Storage     | Sim | Sem suporte de encriptação. Volumes clássicos não podem ser multi-anexados. Volumes clássicos limitados a 250 IOPS (vs 500 IOPS nas regiões 1AZ e 3AZ). Tamanho máximo 4 TB (vs 12 TB). |
|                       | File Storage | Não | |
| Container.            | Managed Kubernetes Service | Não | |
|                       | Managed Rancher Service  | Não | |
|                       | Managed Private Registry | Não | |
| DBaas                 | DBaas                      | Não | |
|                       | Analytics                    | Não | |
| IA                    | IA                         | Não | |

## Capacidades e limitações

Todas as funcionalidades das instâncias que não estão listadas aqui, como o reboot das instâncias, o suporte de Object Storage estarão disponíveis nos próximos meses. O nosso objetivo consiste em apoiar todas as funcionalidades já suportadas nas regiões globais.

### Servidor SMTP

As instâncias Local Zones não podem contactar servidores SMTP.

## Quer saber mais? 

- [Object Storage - Local Zones specifications](/pages/storage_and_backup/object_storage/s3_local_zones_limitations) (EN)

Fale connosco sobre as suas questões, opiniões e sugestões para melhorar o serviço:

- No [servidor Discord OVHcloud](https://discord.gg/ovhcloud)

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.