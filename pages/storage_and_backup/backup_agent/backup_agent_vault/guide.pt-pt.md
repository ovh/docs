---
title: "Backup Agent - Funcionamento do Vault"
excerpt: "Descubra como funciona o sistema de Vault e a localização dos seus dados de backup"
updated: 2026-01-28
---

## Objetivo

Este guia explica como funciona o sistema de Vault no produto Backup Agent e como os seus dados são localizados e armazenados de acordo com a localização dos seus servidores Bare Metal.

## Requisitos

- Ter adquirido um serviço Backup Agent no momento da compra do seu servidor Bare Metal ou posteriormente através do menu `Backup Agent`{.action} no seu espaço cliente.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Instruções

### Apresentação do Vault

Um Vault é o seu espaço de armazenamento onde os seus dados de backup são enviados a cada backup. Os Vaults são criados automaticamente pela OVHcloud para garantir que os seus dados não sejam alojados no mesmo datacenter que o seu servidor Bare Metal.

Isto baseia-se nos nossos buckets Object Storage, que pode encontrar [aqui](/links/public-cloud/object-storage).

Para encontrar os seus Vaults, clique [neste link](/links/control-panel/baremetal-backup-agent) para aceder à secção `Backup Agent`{.action} e, de seguida, clique no separador `Vaults`{.action}.

![Lista de Vaults do Backup Agent](images/01-backup-agent-vault-list.png){.thumbnail}

### Princípio da localização

**Regra importante :** Os dados de backup são sempre enviados para um Vault localizado num datacenter diferente do datacenter onde se encontra o seu servidor Bare Metal. Isto garante a resiliência e a segurança dos seus dados.

### Casos de utilização

Aqui estão diferentes cenários que ilustram o funcionamento do sistema de Vault :

![Casos de utilização do Vault do Backup Agent](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Caso de utilização 1: Um servidor Bare Metal em RBX

Se tiver um servidor Bare Metal localizado em **Roubaix (RBX)** e adquirir o Backup Agent :

- O seu servidor Bare Metal com o Backup Agent instalado encontra-se em **RBX**.
- Os seus dados de backup são automaticamente enviados para um Vault criado em **Gravelines (GRA)**, denominado **backup-vault-gra1**.
- Isto garante que os seus dados são armazenados num datacenter diferente do datacenter do seu servidor.

### Caso de utilização 2: Dois servidores Bare Metal em RBX e GRA

Se tiver dois servidores Bare Metal, um em **Roubaix (RBX)** e outro em **Gravelines (GRA)** :

- O servidor Bare Metal em **RBX** envia os seus dados para **backup-vault-sbg-1** em **Gravelines**.
- O servidor Bare Metal em **GRA** envia os seus dados para **backup-vault-gra-1** em **Strasbourg (SBG)**.
- Cada servidor utiliza um Vault localizado num datacenter diferente do seu.

### Caso de utilização 3: Três servidores Bare Metal em RBX, GRA e LIM

Se tiver três servidores Bare Metal localizados em diferentes datacenters :

- O servidor em **RBX** envia os seus dados para **backup-vault-gra-1** em **GRA**.
- O servidor em **GRA** envia os seus dados para **backup-vault-sbg-1** em **SBG**.
- O servidor em **Limburg (LIM)** envia os seus dados para **backup-vault-sbg-1** em **SBG**.
- Cada servidor garante que os seus dados são armazenados num datacenter distante.

### Caso de utilização 4: Servidor Bare Metal em BHS com NIC EU

Se tiver um servidor Bare Metal em **Beauharnois (BHS)** com uma interface de rede europeia :

- O seu servidor Bare Metal encontra-se em **BHS**.
- Os seus dados de backup são enviados para **backup-vault-tor-1** em **Toronto (TOR)**.
- A localização do Vault é determinada com base na configuração de rede do seu servidor.

## Pontos importantes

- Os Vaults são criados automaticamente pela OVHcloud, não é possível criá-los manualmente.
- Não é possível alterar o Vault de um agente após a sua configuração.
- A localização do Vault é sempre diferente da localização do seu servidor Bare Metal para garantir a resiliência.
- O nome do Vault segue normalmente a convenção: `backup-vault-<location>-<number>`.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).