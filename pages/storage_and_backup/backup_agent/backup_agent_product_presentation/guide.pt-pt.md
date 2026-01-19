---
title: "Backup Agent - Apresentação da oferta"
excerpt: "Apresentação das funcionalidades e vantagens do produto Backup Agent"
updated: 2026-01-09
---

## Objetivo

Este guia vai ajudá-lo a compreender o funcionamento do produto Backup Agent e suas vantagens para os seus serviços Bare Metal.

## Apresentação do produto

O produto Backup Agent permite fazer backup dos seus servidores Bare Metal utilizando um agente que, de acordo com uma política de backup que escolher, enviará os dados do seu servidor para um ponto de armazenamento externo.

O produto Backup Agent baseia-se em dois produtos do editor de software Veeam:

- A Veeam Service Provider Console (VSPC).
- O Veeam Agent.

A VSPC permite repassar as políticas de backup aos agentes registrados nela, e permite fornecer as informações de armazenamento e as credenciais a cada agente no início do seu backup.

Uma vez que o agente obtenha as informações, ele envia diretamente os dados para o ponto de armazenamento, sem nunca passar pela infraestrutura VSPC.

O esquema de princípio é o seguinte:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Deve ser notado que:

- A infraestrutura VSPC está hospedada nos datacenters OVHcloud e não envia dados para os servidores da Veeam.
- Os pontos de armazenamento são buckets [OVHcloud Object Storage](/links/public-cloud/object-storage) que estão hospedados nos datacenters OVHcloud.

Vários pontos fortes estão presentes nesta oferta:

- Primeira política de backup automático com 14 dias de retenção.
- Possibilidade de passar para 30 dias de retenção.
- 14 dias de imutabilidade nos nossos buckets.
- O período dos backups automáticos é entre 22h00 e 06h00 (fuso horário CET para a Europa - fuso horário EST para o Canadá e a Ásia).
- Criptografia gerenciada pela OVHcloud do armazenamento que aloja os seus dados de backup.
- Envio direto dos dados de backup para o bucket sem fazer cópia na nossa infraestrutura.
- O ponto de armazenamento está sempre distante da localização do seu servidor Bare Metal (se estiver em Roubaix, o seu ponto de armazenamento será em Gravelines).

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).