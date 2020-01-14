---
title: 'Criar um acesso à interface Horizon'
slug: criar_um_acesso_a_interface_horizon
legacy_guide_number: 1773
excerpt: 'Saiba como aceder à interface Horizon'
section: 'A partir da interface Horizon'
order: 1
---

**Última atualização a 14 de Novembro de 2019**

## Sumário

Horizon é a interface gráfica de gestão para o OpenStack. Certas funções de gestão apenas estão disponíveis a partir desta interface.

**Este guia explica como aceder à interface Horizon.**


## Requisitos

- um projeto Public Cloud ativado
- acesso à [Área de Cliente OVH](https://ovh.com/auth/?action=gotomanager){.external}

## Instruções

### Como criar uma conta de utilizador OpenStack

Antes de mais, para aceder à interface Horizon, é necessário criar uma conta de utilizador OpenStack. Para isso, faça login na sua Área de Cliente e vá para a secção `Public Cloud`{.action} no canto superior esquerdo da página. No ecrã seguinte, clique na `seta `{.action}ao lado do nome do seu projeto no canto superior esquerdo do ecrã.

![Add user](images/select_project.png){.thumbnail}

Debaixo de "Project management" na barra lateral esquerda, selecione `Users & Roles user`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Clique em `Create User`{.action} para gerar o pop-up seguinte.

![Add user](images/adduser.png){.thumbnail}

A descrição do utilizador não é o nome de utilizador. É apenas um descritivo para o ajudar a recordar de que tipo de utilizador se trata. O ecrã seguinte permite-lhe conceder permissões de utilizador. Para cada caixa de permissões que você marcar, o utilizador terá os privilégios correspondentes, como se pode ver na seguinte tabela:

![Permissions](images/permissions.png){.thumbnail}

Clique no botão `Confirm`{.action} quando terminar, e será apresentado o seguinte ecrã:

![User_pw](images/user_pw.png){.thumbnail}

Certifique-se de que guarda a sua senha agora, pois este é o único momento em que a poderá recuperar. No entanto, se a perder pode sempre criar uma senha nova: clique nas reticências (...) no menu seguinte e selecione  `Generate a password:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Uma vez criado o seu utilizador, pode usar estas credenciais para iniciar uma sessão na interface Horizon utilizando o botão `Horizon `{.action} na barra lateral esquerda.

### Como Fazer Login no OpenStack Horizon

Para abrir o menu, clique no ícone com 3 pontos no final da linha (`...`{.action}). Em seguida, clique no link `Open OpenStack Horizon`{.action}. A página de login do [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} será apresentada. Para fazer login, digite o seu `Nome de Utilizador` e senha.

![Project menu](images/3_H_open_menu.png){.thumbnail}

![Login screen](images/4_H_login_window.png){.thumbnail}

Depois de fazer login, irá aparecer a interface OpenStack Horizon:

![Horizon interface](images/5_H_view.png){.thumbnail}


## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.