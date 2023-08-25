---
title: "Criação e eliminação de utilizadores OpenStack"
excerpt: Saiba como criar e eliminar um utilizador OpenStack a partir da Área de Cliente OVHcloud
updated: 2022-03-16
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


## Objetivo

O acesso ao Horizon e às API OpenStack efetua-se através de combinações identificadoras/password chamadas "*OpenStack users*". Pode criar tantos utilizadores OpenStack quanto necessário e atribuir-lhes diferentes direitos de acesso.

**Este manual explica-lhe como gerir utilizadores OpenStack a partir da Área de Cliente OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Um projeto [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

> [!primary]
>
> Se o projeto Public Cloud em causa for o **primeiro projeto** criado na sua Área de Cliente, a criação de utilizadores OpenStack só será possível após 7 dias a contar da data de criação do projeto.
>
> Pode solicitar a eliminação desta medida de segurança criando um ticket de assistência na sua Área de Cliente.
>

## Instruções

### Criação de um utilizador OpenStack

Ligue-se à sua Área de Cliente OVHcloud e abra o seu projeto `Public Cloud`{.action}. Clique em `Users & Roles`{.action} no menu à esquerda em "Project management". 

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

Depois de criar o utilizador OpenStack, poderá utilizar as suas credenciais para se ligar [à interface Horizon](/pages/public_cloud/compute/introducing_horizon) clicando na ligação `Horizon`{.action} no menu à esquerda.

### Eliminação do utilizador OpenStack

A eliminação do utilizador OpenStack é efetuada a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Clique em `Users & Roles`{.action} no menu à esquerda em "Project management". 

![public-cloud](images/delete.png){.thumbnail}

Clique em `...`{.action} e selecione `Eliminar`{.action}.

> [!warning]
>
> A eliminação de um utilizador é definitiva e invalidará todos os tokens associados, incluindo os que não tenham expirado.
> 

## Quer saber mais?

[Apresentação do Horizon](/pages/public_cloud/compute/introducing_horizon)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.