---
title: 'Gestão de utilizadores'
excerpt: 'Saiba como adicionar utilizadores a partir da sua conta OVHcloud'
updated: 2023-07-19
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A OVHcloud permite-lhe criar utilizadores com permissão de leitura ou escrita na Área de Cliente. Assim, os membros da sua empresa podem ter acesso aos seus serviços OVHcloud. E isto sem que haja necessidade de recorrer a práticas pouco seguras como a partilha de palavras-passe ou de códigos de dupla autenticação.

> [!primary]
>
> A gestão dos utilizadores é diferente da gestão dos contactos. Um utilizador terá acesso a todas as secções da Área de Cliente em função do nível de direitos que lhe é concedido.
>
> Já a gestão de contactos visa delegar a administração completa dos aspetos administrativos, técnicos ou de faturação de um ou vários serviços associados à sua conta OVHcloud. Para mais informações acerca da gestão de contactos, consulte [este guia](/pages/account/customer/managing_contacts).
>

**Este guia explica os diferentes privilégios de que um utilizador pode dispor, bem como o método de criação e de gestão de utilizadores.**

## Requisitos

- Ter uma conta OVHcloud ativa.
- Ter acesso à Área de Cliente.

## Instruções

### Gestão dos utilizadores

#### Adicionar um utilizador

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique no seu `nome`{.action} (1) e depois nas suas iniciais  (2).
Clique no separador `Gestão de utilizadores`{.action} (3) e, a seguir, em `Adicionar utilizador`{.action} (4).

![users-management](images/hubusers.png){.thumbnail}

Na janela que se abrir, complete os campos obrigatórios. Clique em `Validar`{.action} para criar o utilizador.

![users-management](images/usersmanagement2.png){.thumbnail}

| Campo | Detalhes |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID de utilizador | Introduza, por exemplo, o nome do utilizador ou a sua função. |
| E-mail | Introduza o endereço de e-mail do utilizador. |
| Palavra-passe | Defina a palavra-passe do utilizador. Mais tarde, ele poderá alterar esta palavra-passe. <br>Sugerimos que consulte [o guia sobre a gestão de palavras-passe](/pages/account/customer/manage-ovh-password){.external} antes de a definir. |
| Grupo | Escolha um dos grupos disponíveis |
| Descrição | Pode acrescentar uma descrição do utilizador. Por exemplo, a função que desempenha. |

O utilizador receberá um ID próprio, composto pelo ID digital da conta (indicado no menu «Gestão de utilizadores») e pelo nome de utilizador, com as duas referências separadas por uma barra.

Por exemplo: **1234-567-89/johnsmith**.

![users-management](images/usersmanagement3.png){.thumbnail}

O utilizador em causa poderá desde logo aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} por meio desse ID de utilizador. 

Ele poderá igualmente alterar a sua própria palavra-passe e proteger o seu próprio acesso à conta ativando uma medida de dupla autenticação (esta última só será aplicada ao acesso desse utilizador). Para esse efeito, aconselhamos a consulta do [guia respeitante à implementação da dupla autenticação](/pages/account/customer/secure-ovhcloud-account-with-2fa){.external}.

#### Gerir os utilizadores

Pode alterar, desativar/ativar ou suprimir um utilizador clicando nas reticências `...`{.action} que surgem à direita.

![users-management](images/usersmanagement4.png){.thumbnail}

A alteração do utilizador permite atualizar o seu endereço de e-mail, os seus privilégios e a sua descrição.

![users-management](images/usersmanagement6.png){.thumbnail}

### Gestão dos grupos

#### Adicionar um grupo

No separador `Gestão dos utilizadores`{.action}, clique em `Declarar um grupo`{.action}.

![users-management](images/usersmanagement7.png){.thumbnail}

Aparecerá uma janela e deverá preencher os campos necessários. Clique em `Validar`{.action} para criar o utilizador.

![users-management](images/usersmanagement8.png){.thumbnail}

Os grupos atribuem um nível de privilégio por defeito aos utilizadores que contêm, em função do papel que escolhe:

| Papel | Detalhes |
|------------------|----------------------------------------------------------------------------------------------------------------------|
| Nenhuma | Não dá acesso à Área de Cliente OVHcloud se não for implementada uma política IAM. |
| Leitura Sozinha | Dá acesso de leitura à Área de Cliente OVHcloud e a todas as suas secções. |
| Administração restrita | Dá acesso de escrita à Área de Cliente OVHcloud e a todas as suas secções, **à exceção** da gestão de** utilizadores. |
| Administrador | Dá acesso de escrita à Área de Cliente OVHcloud e a todas as suas secções, **incluindo** a gestão dos utilizadores. |

#### Gerir os grupos

Pode atualizar ou eliminar um grupo ao clicar no botão `...`{.action} à direita do nome do grupo.

![users-management](images/usersmanagement9.png){.thumbnail}

Quando alterar um grupo, pode modificar a sua descrição e o seu papel.

![users-management](images/usersmanagement10.png){.thumbnail}

### Gestão de permissões

Além do papel associado aos grupos de utilizadores, pode melhorar os privilégios de acesso ao IAM OVHcloud.

Consulte o nosso guia sobre [gestão das políticas IAM da OVHcloud](/pages/account/customer/iam-policy-ui).

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.