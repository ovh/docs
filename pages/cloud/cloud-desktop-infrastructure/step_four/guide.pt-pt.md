---
title: 'Passo 4 - Atribuir ambientes de trabalho virtuais aos utilizadores'
slug: atribuicao-desk
excerpt: 'Saiba como adicionar utilizadores aos diferentes ambientes de trabalho virtuais'
section: Preparação
order: 4
---

**Última atualização: 05/06/2018**

## Sumário

Agora que a [pool está criada - EN](https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/how-to-create-pool/){.external}, pode autorizar vários utilizadores nos diferentes ambientes de trabalho virtuais.

**Este guia explica como adicionar utilizadores.**


## Requisitos

- Ter criado utilizadores no Active Directory se [foi criada uma relação de aprovação - EN](https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/approval-ad/){.external}; ou ter criado os utilizadores na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) {.external}.
- Estar conectado à interface VMware Horizon 7.1.



## Instruções

### Gerir os utilizadores

Quando obtém a plataforma, são criados dez utilizadores genéricos (vdiXX, em que XX representa um número). As informações sobre a conexão são indicadas no e-mail que recebe quando o serviço é entregue.

A criação de novos utilizadores encontra-se explicada neste guia: [Criação de utilizadores - FR](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-users/){.external}


## Atribuir ambientes de trabalho virtuais

As operações ocorrem no VMware Horizon 7.1. No separador `Entitlements`{.action} da pool, pode associar utilizadores a esta última de modo a dar-lhes acesso aos ambientes de trabalho.

- Clique em `Add Entitlement`{.action} para abrir o menu de contexto.

![Add Entitlement](images/1200.png){.thumbnail}

- Procure e selecione o(s) utilizador(res) a associar; depois valide.

![Seleção do utilizador](images/1201.png){.thumbnail}


Os utilizadores associados a uma pool passam a poder  [conectar-se e utilizar os ambientes de trabalho virtuais - EN](https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/desktop-login/){.external}.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.