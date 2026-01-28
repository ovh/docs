---
title: "Backup Agent - Restrições conhecidas"
excerpt: "Descubra as restrições e limitações do produto Backup Agent"
updated: 2026-01-28
---

## Objetivo

Este guia detalha as restrições e limitações conhecidas do produto Backup Agent que deverá conhecer antes de utilizar o serviço.

## Restrições conhecidas

### Política de cópias de segurança

- A política de cópia de segurança é restrita, não é possível modificá-la.
- Não é possível configurar uma cópia de segurança apenas com uma lista de ficheiros ou pastas.
- Não é possível modificar a data e hora de ativação das cópias de segurança (isto será objeto de uma melhoria futura).

### Acesso VSPC

- O utilizador que recebe é apenas de leitura, não é possível efetuar modificações diretamente na VSPC.

### Vault

- Não é possível criar vaults adicionais, estes serão criados automaticamente para garantir que os seus dados não sejam alojados no mesmo datacenter onde o seu servidor Bare Metal está presente.
- Não é possível alterar o vault num agente.

### Limitações dos SO

- Pode encontrar a lista de SO compatíveis para o Veeam Agent no [seguinte endereço](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13).

### Compatibilidade com outros produtos OVHcloud

- Atualmente, o produto Backup Agent apenas é compatível com os Servidores dedicados, não é possível utilizar o seu agente em outros produtos.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).