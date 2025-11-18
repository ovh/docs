---
title: "Como fazer evoluir os recursos de um VPS"
excerpt: "Descubra como fazer evoluir a sua RAM, o seu vCPU ou o seu armazenamento a partir da sua Área de Cliente"
updated: 2025-09-08
---

<style> details>summary { color:rgb(33, 153, 232) !important; cursor: pointer; } details>summary::before { content:'\25B6'; padding-right:1ch; } details[open]>summary::before { content:'\25BC'; } </style>

## Objetivo

Os nossos serviços VPS oferecem flexibilidade, fiabilidade e desempenho para uma variedade de necessidades de alojamento. Pode atualizar a sua RAM, vCPU ou armazenamento na [Área de Cliente OVHcloud](/links/manager).

**Saiba como adicionar vCores, memória e armazenamento ao serviço VPS.**

## Requisitos

- Ter um [VPS](/links/bare-metal/vps) na Área de Cliente OVHcloud
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na parte `Servidor privado virtual`{.action}.

> [!primary]
>
> As opções de atualização disponíveis na sua Área de Cliente dependem da gama e do modelo do VPS selecionado. As capturas de ecrã abaixo são fornecidas a título de exemplo e não fazem referência a um cenário concreto de atualização do VPS.

A partir daí, poderá atualizar os seus vCores (`1`), a sua memória (`2`) ou o seu armazenamento (`3`).

![Atualizar os recursos](images/vps_upgrade01.png){.thumbnail}

### 1. Para adicionar **vCores**

No separador **Página inicial** no painel **A sua configuração**, clique em `Adicionar vCores passando para a gama superior`{.action}.

Escolha um novo modelo e clique em `Seguinte`{.action}.

![Atualizar os recursos](images/vps_upgrade02.png){.thumbnail}

Escolha as suas opções de memória e de armazenamento e clique em `Seguinte`{.action}.

![Atualizar os recursos](images/vps_upgrade03.png){.thumbnail}

Aceite (`☑`{.action}) os **termos dos contratos** e clique em `Seguinte`{.action}.

![Atualizar os recursos](images/vps_upgrade04.png){.thumbnail}

Reveja as suas alterações e clique em `Encomendar`{.action}.

![Atualizar os recursos](images/vps_upgrade05.png){.thumbnail}

### 2. Para atualizar a **Memória**

No painel **A sua configuração**, no separador **Página inicial**, clique na quantidade de memória que pretende configurar. As opções disponíveis dependem da gama de VPS que tem atualmente.

Na janela pop-up, clique em `Validar e pagar`{.action} para finalizar a sua encomenda.

![Atualizar os recursos](images/vps_upgrade06.png){.thumbnail}

### 3. Para atualizar o **Armazenamento**

No separador **Página inicial** no painel **A sua configuração**, clique na quantidade de armazenamento que pretende. As opções disponíveis dependem da gama de VPS que tem atualmente.

Na janela pop-up, clique em `Validar e pagar`{.action} para finalizar a sua encomenda.

![Atualizar os recursos](images/vps_upgrade07.png){.thumbnail}

Consulte o nosso manual dedicado para as seguintes etapas: [Como reparticionar um VPS após uma atualização de armazenamento](/pages/bare_metal_cloud/virtual_private_servers/upsize_vps_partition)

## FAQ

/// details | Vou manter o mesmo endereço IP?

Sim, conservará o mesmo endereço IP após a atualização do seu VPS.

///

/// details | Conservarei os meus dados no servidor?

Sim, após uma atualização, conservará os seus dados. Quando atualiza o disco, pode ser necessário ampliar as partições.

///

/// details | O que acontece ao backup/snapshot? Posso utilizá-la no novo VPS?

Sim. Após as atualizações, terá sempre acesso aos seus backups e snapshots.

///

/// details | O que acontece à licença de software no VPS antigo? Posso migrá-la automaticamente para o novo VPS?

Se possui uma licença ativa, esta ficará associada ao VPS. O preço pode mudar com base no contrato de licença ou nos requisitos do fornecedor.  
Se forem feitas alterações na licença, estas serão explicadas antes da atualização do VPS.

///

/// details | O débito muda?

Em certos casos, o débito pode mudar, nomeadamente durante a passagem de um VPS de nível inferior ao superior.

///

/// details | Essa atualização será imediata ou terei tempo de usar as duas ao mesmo tempo (configurar, transferir dados, etc.)?

A atualização ficará efetiva imediatamente, mantendo todos os seus dados. A atualização alocará mais recursos ao seu VPS existente.

///

## Quer saber mais?

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

Fale com a nossa [comunidade de utilizadores](/links/community).
