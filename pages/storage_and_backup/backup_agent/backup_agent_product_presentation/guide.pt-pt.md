---
title: "Backup Agent - Apresentação da oferta"
excerpt: "Apresentação das funcionalidades e vantagens do produto Backup Agent"
updated: 2026-01-23
---

## Objetivo

Este guia vai ajudá-lo a compreender o funcionamento do produto Backup Agent e suas vantagens para os seus serviços Bare Metal.

## Apresentação do produto

O produto Backup Agent permite fazer backup dos seus servidores Bare Metal utilizando um agente que, de acordo com uma política de backup que escolher, enviará os dados do seu servidor para um ponto de armazenamento externo.

O produto Backup Agent baseia-se em dois produtos do editor de software Veeam:

- A Veeam Service Provider Console (VSPC).
- O Veeam Agent.

O Veeam Agent é um software criado pela Veeam, que se instala no seu sistema operativo em Linux e Windows, e permite fazer cópias de segurança do seu sistema.

A VSPC permite repassar as políticas de backup aos agentes registrados nela, e permite fornecer as informações de armazenamento e as credenciais a cada agente no início do seu backup.
Aqui está o [guia](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation) que explica como navegar na VSPC.

Quando encomendar o produto, receberá um e-mail a confirmar a entrega com credenciais que permitem ligar-se ao seu tenant na VSPC. Esta conta é só de leitura e permite aceder a visualizações para ver as suas cópias de segurança e os seus agentes.

Uma vez que o agente obtenha as informações, ele envia diretamente os dados para o ponto de armazenamento, sem nunca passar pela infraestrutura VSPC.

O esquema de princípio é o seguinte:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Deve ser notado que:

- A infraestrutura VSPC está hospedada nos datacenters OVHcloud e não envia dados para os servidores da Veeam.
- Os pontos de armazenamento são buckets [OVHcloud Object Storage](/links/public-cloud/object-storage) que estão hospedados nos datacenters OVHcloud.

Vários pontos fortes estão presentes nesta oferta:

- Primeira política de backup automático com 14 dias de retenção.
- Possibilidade de passar para 30 dias de retenção.
- A política faz uma cópia de segurança completa do seu servidor.
- 14 dias de imutabilidade nos nossos buckets.
- O período dos backups automáticos é entre 22h00 e 06h00 (fuso horário CET para a Europa - fuso horário EST para o Canadá e a Ásia).
- Criptografia gerenciada pela OVHcloud do armazenamento que aloja os seus dados de backup.
- Envio direto dos dados de backup para o bucket sem fazer cópia na nossa infraestrutura.
- O ponto de armazenamento está sempre distante da localização do seu servidor Bare Metal (se estiver em Roubaix, o seu ponto de armazenamento será em Gravelines).

É também importante ter em mente que:

- A política de cópia de segurança está restrita, não pode modificá-la.
- Não pode configurar uma cópia de segurança apenas numa lista de ficheiros ou pastas.
- Não pode modificar a data e hora de ativação das cópias de segurança (isto é considerado como uma melhoria no futuro).

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).