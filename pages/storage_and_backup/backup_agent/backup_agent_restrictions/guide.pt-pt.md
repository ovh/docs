---
title: "Backup Agent - Restrições conhecidas"
excerpt: "Descubra as restrições e limitações do produto Backup Agent"
updated: 2026-01-23
---

## Objetivo

Este guia detalha as restrições e limitações conhecidas do produto Backup Agent que deve conhecer antes de utilizar o serviço.

## Restrições conhecidas

### Política de cópia de segurança

- A política de cópia de segurança está restrita, não pode modificá-la.
- Não pode configurar uma cópia de segurança apenas numa lista de ficheiros ou pastas.
- Não pode modificar a data e hora de ativação das cópias de segurança (isto é considerado como uma melhoria no futuro).

### Acesso VSPC

- O utilizador que recebe é só de leitura, não pode fazer modificações diretamente na VSPC.

### Vault

- Não pode criar vaults adicionais, serão criados automaticamente para garantir que os seus dados não estejam alojados no mesmo datacenter onde se encontra o seu servidor Bare Metal.
- Não pode alterar o vault de um agente.

### Limitações de OS

- Pode encontrar a lista de sistemas operativos compatíveis para o agente Veeam aqui <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=1>

### Compatibilidade com outros produtos OVHcloud

- Atualmente, o produto Backup Agent é compatível apenas com os Servidores Dedicados, não pode usar o seu agente noutros produtos.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).

