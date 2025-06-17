---
title: "Gestão dos utilizadores OpenStack"
excerpt: Descubra como gerir os utilizadores OpenStack na sua Área de Cliente OVHcloud e na interface Horizon
updated: 2025-04-28
---

## Objetivo

O acesso ao Horizon e às API OpenStack efetua-se através de combinações identificadoras/password chamadas "*OpenStack users*". Pode criar tantos utilizadores OpenStack quanto necessário e atribuir-lhes diferentes direitos de acesso.

A partir da interface Horizon, pode definir uma palavra-passe para cada utilizador. Atenção: a alteração da palavra-passe de uma conta de utilizador implica a revogação imediata da palavra-passe anterior.

**Este guia explica como gerir utilizadores OpenStack a partir da Área de Cliente OVHcloud e através da interface Horizon.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Um projeto [Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) na sua conta OVHcloud
- Estar ligado à [Área de Cliente OVHcloud](/links/manager)

## Instruções

### Criação de um utilizador OpenStack

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa. Clique em `Utilizadores & Funções`{.action} no menu à esquerda em **Parâmetros**. 

Clique no botão `Criar um utilizador`{.action}.

![User roles](images/users_roles.png){.thumbnail}

A descrição do utilizador não é o nome de utilizador OpenStack, mas sim uma descrição que deve introduzir para o ajudar a organizar os utilizadores e as suas permissões. Introduza uma descrição e clique em `Seguinte`{.action}.

![Add user](images/adduser.png){.thumbnail}

Agora pode selecionar funções que representam as autorizações que o utilizador irá obter. Para cada quadrícula, o utilizador obterá privilégios de acesso de acordo com o quadro abaixo.

![Permissões](images/permissions.png){.thumbnail}

Clique em `Confirmar`{.action} para criar o utilizador OpenStack. O identificador e a palavra-passe são gerados e apresentados automaticamente na sua Área de Cliente.

![User_pw](images/user_pw.png){.thumbnail}

Queira registar a palavra-passe, apresentada apenas no quadro verde nesse momento, num gestor de palavras-passe. A palavra-passe não poderá ser recuperada posteriormente. No entanto, é sempre possível criar uma nova palavra-passe clicando em `...`{.action} e selecionando `Regenerar uma palavra-passe`{.action}.

![Generate](images/generatepw.png){.thumbnail}

Depois de criar o utilizador OpenStack, poderá utilizar as suas credenciais para se ligar à [interface Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) clicando na ligação `Horizon`{.action} no menu à esquerda.

### Alterar a palavra-passe de um utilizador OpenStack

É possível criar uma palavra-passe OpenStack depois de estar conectado ao [OpenStack Horizon](https://horizon.cloud.ovh.net):

![Conexão ao Horizon](images/1_H_login_window.png){.thumbnail}

O ID do utilizador Horizon encontra-se no canto superior direito da interface Horizon. Clique no seu ID para fazer surgir um menu com as opções disponíveis.
Selecione `Settings`{.action} e depois, à esquerda, `Change password`{.action}:

![Alteração da palavra-passe](images/2_H_pass_change_option.png){.thumbnail}

Introduza a sua palavra-passe atual no primeiro campo e a sua nova palavra-passe nos dois campos seguintes.

> [!primary]
>
> Quando alterar a palavra-passe, tenha em conta algumas recomendações:
>
> - a palavra-passe deve conter pelo menos 8 caracteres;
> - a palavra-passe deve conter no máximo 30 caracteres;
> - a palavra-passe deve conter pelo menos uma letra maiúscula;
> - a palavra-passe deve conter pelo menos uma letra minúscula;
> - a palavra-passe deve conter pelo menos um algarismo;
> - a palavra-passe deve conter apenas algarismos e letras.
>

De seguida, confirme a criação da nova palavra-passe clicando em `Change`{.action}.

![Parametrização da palavra-passe](images/3_H_set_new_passord.png){.thumbnail}

Atenção: a alteração da palavra-passe de uma conta de utilizador implica a anulação imediata dos ID utilizados anteriormente.

### Eliminação do utilizador OpenStack

A eliminação do utilizador OpenStack é efetuada a partir da [Área de Cliente OVHcloud](/links/manager). Clique em `Utilizadores & Funções`{.action} no menu à esquerda em **Parâmetros**. 

![public-cloud](images/delete.png){.thumbnail}

Clique em `...`{.action} e selecione `Eliminar`{.action}.

> [!warning]
>
> A eliminação de um utilizador é definitiva e invalidará todos os tokens associados, incluindo os que não tenham expirado.
> 

## Quer saber mais?

[Apresentação do Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Fale com nossa [comunidade de utilizadores](/links/community).