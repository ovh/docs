---
title: "Backup Agent - Procedimento de eliminação"
excerpt: "Descubra como eliminar um agente, um vault ou um tenant Backup Agent"
updated: 2026-02-03
---

## Objetivo

Este guia explica-lhe como eliminar diferentes elementos do seu serviço Backup Agent: os agentes, os vaults e os tenants.

## Requisitos

- Ter um serviço Backup Agent ativo.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Instruções

### Eliminar um agente

> [!primary]
>
> **Comportamento consoante a utilização do agente :**
>
> - **Se o agente não foi utilizado para transferir dados** : Pode ser eliminado imediatamente. Será desativado em primeiro lugar, depois eliminado.
> - **Se dados foram transferidos** : Aplicamos uma suspensão do agente em estado « Desativado » durante 14 dias, tempo necessário para que os dados imutáveis possam ser eliminados.

> [!warning]
>
> Uma vez o seu agente suspenso, não pode criar um novo agente no mesmo servidor, terá de esperar que o primeiro agente seja eliminado.

Dirija-se à secção `Agentes`{.action} e clique no botão de eliminação para o agente em questão.

Confirme a eliminação do agente na janela que aparece.

![Backup Agent Delete Agent](images/01-backup-agent-delete-agent.png){.thumbnail}

### Eliminar um vault

> [!warning]
>
> Um vault não pode ser eliminado se contiver dados. Se pretender eliminar um vault, terá de [contactar o suporte](/links/support-contact), que realizará verificações consigo antes de iniciar a eliminação.

Dirija-se à secção `Vaults`{.action} e clique no botão de eliminação para o vault em questão.

Confirme a eliminação na janela que aparece.

![Backup Agent Delete Vault](images/01-backup-agent-delete-vault.png){.thumbnail}

### Eliminar um tenant

> [!warning]
>
> Por enquanto, um tenant não pode ser eliminado de forma autónoma. Se pretender eliminar um tenant, terá de [contactar o suporte](/links/support-contact). Vamos tratar do seu pedido.

Selecione o seu tenant e clique no botão de eliminação.

Confirme a eliminação na janela que aparece.

![Backup Agent Delete Tenant](images/01-backup-agent-delete-tenant.png){.thumbnail}

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).