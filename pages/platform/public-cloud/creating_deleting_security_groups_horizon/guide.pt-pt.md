---
title: 'Criar e eliminar um grupo de segurança no Horizon'
excerpt: 'Saiba como criar ou eliminar um grupo de segurança através do Horizon'
slug: criar-eliminar-grupo-seguranca-no-horizon
section: 'A partir da interface Horizon'
---

**Última atualização: 05/06/2018**


## Sumário

Os grupos de segurança são conjuntos de regras de filtragem dos endereços IP e das portas que se aplicam a todas as instâncias de um dado projeto e que definem o acesso da rede à instância. As regras do grupo são específicas a um projeto. Os seus membros podem editar as regras padrão para o grupo e adicionar novos conjuntos de regras.

Todos os projetos dispõem de um grupo de segurança de forma padrão, utilizado para cada instância que não tem outro grupo de segurança definido. Na OVH, os parâmetros padrão do grupo de segurança autorizam tanto o tráfego de saída quanto o tráfego de entrada da instância.

**Este guia explica como criar e eliminar um grupo de segurança através da interface Horizon.**

## Requisitos

- Aceder à [interface Horizon](https://docs.ovh.com/pt/public-cloud/criar_um_acesso_a_interface_horizon/){.external}.


## Instruções

Antes de mais, conecte-se à interface [Horizon](https://horizon.cloud.ovh.net/){.external} e a seguir, no menu na parte de cima do ecrã, escolha a região na qual deseja criar um grupo de segurança:

![Escolha de região](images/1_H_sec_groups_region_choosing.png){.thumbnail}

O grupo de segurança é criado na região selecionada. Se um grupo de segurança tem de ser utilizado em várias regiões, deve defini-lo para cada uma delas.


Clique em `Network`{.action}e, depois, em `Security Groups`{.action}:

![Grupos de segurança](images/2_H_crete_sec_group.png){.thumbnail}

Para criar um grupo de segurança, clique em `+ Create Security Group`{.action}. De seguida, dê um nome ao grupo e atribua-lhe uma descrição (opcional):

![Criação de grupos de segurança](images/3_H_new_sec_gr_name.png){.thumbnail}

Então valide clicando em `Create Security Group`{.action}.

Para eliminar um grupo de segurança, selecione-o e clique em `Delete Security Groups`{.action}.


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.