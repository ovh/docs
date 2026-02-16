---
title: "Backup Agent - Apresentação da oferta"
excerpt: "Apresentação das funcionalidades e vantagens do produto Backup Agent"
updated: 2026-01-28
---

## Objetivo

Este guia ajudá-lo-á a compreender o funcionamento do produto Backup Agent e as suas vantagens para os seus serviços Bare Metal.

## Apresentação do produto

O produto Backup Agent permite fazer cópias de segurança dos seus servidores Bare Metal, utilizando um agente que, de acordo com uma política de cópia de segurança que escolher, enviará os dados do seu servidor para um ponto de armazenamento externo.

O produto Backup Agent baseia-se em dois produtos do editor de software Veeam:

- A Veeam Service Provider Console (VSPC).
- O Veeam Agent.

O Veeam Agent é um software criado pela Veeam, que se instala no seu sistema operativo sob Linux e Windows, e permite-lhe fazer cópias de segurança do seu sistema.

A VSPC permite aplicar as políticas de cópia de segurança aos agentes registados, e permite fornecer as informações de armazenamento e as credenciais a cada agente no início da sua cópia de segurança.
Descubra como navegar na VSPC através [deste guia](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation).

Quando encomenda o produto, recebe um e-mail a confirmar a entrega do serviço, bem como as credenciais de acesso ao seu inquilino na VSPC. Esta conta é de leitura apenas e dar-lhe-á acesso a visualizações das suas cópias de segurança e dos seus agentes.

Assim que o agente obtém as informações, envia diretamente os dados para o ponto de armazenamento, sem nunca passar pela infraestrutura VSPC.

## Pontos importantes

Vários pontos fortes estão presentes nesta oferta:

- Primeira política de cópia de segurança automática com 14 dias de retenção.
- Possibilidade de passar para 30 dias de retenção.
- A política faz uma cópia de segurança completa do seu servidor.
- 14 dias de imutabilidade nos nossos buckets.
- O período das cópias de segurança automáticas é entre as 22h00 e as 06h00 (fuso horário CET para a Europa - fuso horário EST para o Canadá e a Ásia).
- Encriptação gerida pela OVHcloud do armazenamento onde são armazenados os seus dados de cópia de segurança.
- Envio direto dos dados de cópia de segurança para o bucket sem colocar uma cópia na nossa infraestrutura.
- O ponto de armazenamento está sempre localizado à distância da localização do seu servidor Bare Metal (se estiver em Roubaix, o seu ponto de armazenamento será em Gravelines).

Também é importante ter em mente que:

- A política de cópia de segurança é restrita, não pode modificá-la.
- Não pode configurar uma cópia de segurança unicamente com uma lista de ficheiros ou pastas.
- Não pode modificar a data e a hora dos gatilhos de cópia de segurança (isso será objeto de uma melhoria futura).

## A infraestrutura

O esquema de princípio é o seguinte:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

É importante notar que:

- A infraestrutura VSPC está alojada nos datacenters da OVHcloud e não envia dados para os servidores da Veeam.
- O armazenamento baseia-se na tecnologia [OVHcloud Object Storage](/links/public-cloud/object-storage) que está alojada nos datacenters da OVHcloud.

Na sua entrega, recebe:

- Um Backup Tenant, normalmente nomeado `Backup-tenant-xxxx`, que é um contentor virtual que permite agrupar todos os seus serviços de cópia de segurança.
- Um VSPC Tenant, normalmente nomeado `vspc-tenant-xxxx`, que é a sua "empresa" na VSPC, permitindo aceder aos seus dashboards e ligar os seus agentes.
- Um Vault, normalmente nomeado `Backup-vault-xxxx`, que é o seu espaço de armazenamento onde os seus dados de cópia de segurança são enviados a cada cópia de segurança.

Convidamo-lo a ler os nossos outros guias para descobrir o produto.

## Anti-affinidade

As cópias de segurança são realizadas offsite, através da configuração Vault por defeito, com um ponto de armazenamento localizado numa zona geograficamente distinta da do servidor Bare Metal. Este mecanismo de anti-affinidade reforça a resiliência dos dados de cópia de segurança.

Mapeamento das zonas de cópia de segurança:

| Localização Bare Metal | Vault Affinity |
| ----------------------- | -------------- |
| BHS                     | TOR            |
| SGP                     | SYD            |
| MUM                     | SGP            |
| SYD                     | SGP            |
| RBX                     | GRA            |
| GRA                     | SBG            |
| LIM                     | SBG            |
| PAR                     | RBX            |
| ERI                     | LIM            |
| WAR                     | LIM            |
| SBG                     | RBX            |
| TOR                     | BHS            |

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).