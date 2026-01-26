---
title: "Backup Agent - Funcionamento do Vault"
excerpt: "Descubra como funciona o sistema de Vault e a localização dos seus dados de cópia de segurança"
updated: 2026-01-23
---

## Objetivo

Este guia explica-lhe como funciona o sistema de Vault no produto Backup Agent e como os seus dados são localizados e armazenados de acordo com a localização dos seus servidores Bare Metal.

## Requisitos
- Ter encomendado um serviço Backup Agent no momento da encomenda do seu servidor Bare Metal ou posteriormente através do menu `Agente de Backup`{.action} do seu espaço cliente.

## Instruções
### Apresentação do Vault

Um Vault é o seu espaço de armazenamento onde os seus dados de cópia de segurança são enviados em cada cópia de segurança. Os Vaults são criados automaticamente pela OVHcloud para garantir que os seus dados não estejam alojados no mesmo datacenter que o seu servidor Bare Metal.

Isto baseia-se nos nossos buckets Object Storage, que pode encontrar neste [link](/links/public-cloud/object-storage)

Pode encontrar os seus Vaults na sua Área de Cliente, na secção Vaults.
![Backup Agent Vault List](images/01-backup-agent-vault-list.png){.thumbnail}

### Princípio de localização

**Regra importante:** Os dados de cópia de segurança são sempre enviados para um Vault situado num datacenter diferente daquele onde se encontra o seu servidor Bare Metal. Isto garante a resiliência e a segurança dos seus dados.

### Casos de uso

Eis diferentes cenários que ilustram o funcionamento do sistema de Vault:

![Backup Agent Vault Use Cases](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Caso de uso 1: Um servidor Bare Metal em RBX

Se tiver um servidor Bare Metal localizado em **Roubaix (RBX)** e encomendar o Backup Agent:

- O seu servidor Bare Metal com o Backup Agent instalado encontra-se em **RBX**.
- Os seus dados de cópia de segurança são automaticamente enviados para um Vault criado em **Gravelines (GRA)**, denominado **backup-vault-gra1**.
- Isto garante que os seus dados são armazenados num datacenter diferente do seu servidor.

### Caso de uso 2: Dois servidores Bare Metal em RBX e GRA

Se tiver dois servidores Bare Metal, um em **Roubaix (RBX)** e outro em **Gravelines (GRA)**:

- O servidor Bare Metal em **RBX** envia os seus dados para **backup-vault-sbg-1** em **Gravelines**.
- O servidor Bare Metal em **GRA** envia os seus dados para **backup-vault-gra-1** em **Estrasburgo (SBG)**.
- Cada servidor utiliza um Vault num datacenter diferente do seu.

### Caso de uso 3: Três servidores Bare Metal em RBX, GRA e LIM

Se tiver três servidores Bare Metal em diferentes datacenters:

- O servidor em **RBX** envia os seus dados para **backup-vault-gra-1** em **GRA**.
- O servidor em **GRA** envia os seus dados para **backup-vault-sbg-1** em **SBG**.
- O servidor em **Limburg (LIM)** envia os seus dados para **backup-vault-sbg-1** em **SBG**.
- Cada servidor garante que os seus dados são armazenados num datacenter distante.

### Caso de uso 4: Servidor Bare Metal em BHS com NIC EU

Se tiver um servidor Bare Metal em **Beauharnois (BHS)** com uma interface de rede europeia:

- O seu servidor Bare Metal encontra-se em **BHS**.
- Os seus dados de cópia de segurança são enviados para **backup-vault-tor-1** em **Toronto (TOR)**.
- A localização do Vault é determinada com base na configuração de rede do seu servidor.

## Pontos importantes

- Os Vaults são criados automaticamente pela OVHcloud, não pode criá-los manualmente.
- Não pode alterar o Vault de um agente uma vez que este está configurado.
- A localização do Vault é sempre diferente da do seu servidor Bare Metal para garantir a resiliência.
- O nome do Vault segue geralmente a convenção: `backup-vault-<localização>-<número>`.

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).

