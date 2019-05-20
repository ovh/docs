---
title: 'Criar um acesso à interface Horizon'
slug: criar_um_acesso_a_interface_horizon
legacy_guide_number: 1773
excerpt: 'Saiba como aceder à interface Horizon'
section: 'A partir da interface Horizon'
order: 1
---

**Última atualização: 20/06/2018**

## Sumário

O Horizon é a interface gráfica de gestão do OpenStack. Certas funções de gestão só estão disponíveis a partir desta interface.

**Este guia ensina-o a aceder a ela.**


## Requisitos

- Ter criado um projeto Public Cloud.


## Instruções

### Criar um utilizador OpenStack.

Para aceder ao Horizon, é preciso, antes de mais, criar um utilizador OpenStack. Para isso, na Área de Cliente, clique em `Cloud`{.action}, a seguir em `Servidores`{.action} e selecione o projeto em causa. Clique no separador `OpenStack`{.action} na coluna da esquerda:

![Adicionar utilizador](images/1_H_add_user.png){.thumbnail}

Clique em `Adicionar um utilizador`{.action} e escolha uma descrição de utilizador. O ID e a palavra-passe serão gerados automaticamente. Quando a operação for concluída, surgirá uma mensagem de confirmação da criação da conta.

A palavra-passe ficará visível na Área de Cliente até à atualização da página. Pode conservá-la para a utilizar novamente numa conexão ulterior. Também é possível gerar uma nova palavra-passe se clicar no pictograma de atualização que figura ao lado da palavra-passe atual:

![Menu projeto](images/2_H_user_manage.png){.thumbnail}

### Conectar-se ao OpenStack Horizon

Para ver o menu, clique no pictograma que representa três pontos na extremidade da linha `...`{.action}. A seguir, clique em `Abrir Openstack Horizon`{.action}. Surgirá então a página de conexão do [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}. Para se conectar, introduza o seu ID  (`User Name`) e a sua palavra-passe.

![Menu projeto](images/3_H_open_menu.png){.thumbnail}

![Ecrã de conexão](images/4_H_login_window.png){.thumbnail}

Uma vez conectado, surgirá a interface OpenStack Horizon:

![Interface Horizon](images/5_H_view.png){.thumbnail}


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.