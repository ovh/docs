---
title: 'Gestão de utilizadores'
slug: gestao-utilizadores
excerpt: 'Saiba como adicionar utilizadores a partir da sua conta OVHcloud'
section: Introdução
---

**Última atualização: 20/05/2020**

## Objetivo

A OVHcloud permite-lhe criar utilizadores com permissão de leitura ou escrita na Área de Cliente. Assim, os membros da sua empresa podem ter acesso aos seus serviços OVHcloud. E isto sem que haja necessidade de recorrer a práticas pouco seguras como a partilha de palavras-passe ou de códigos de dupla autenticação.

> [!primary]
>
> A gestão de utilizadores difere da gestão de contactos. Um utilizador terá, no mínimo, acesso de leitura a todas as rubricas da sua Área de Cliente.
>
> Já a gestão de contactos visa delegar a administração completa dos aspetos administrativos, técnicos ou de faturação de um ou vários serviços associados à sua conta OVHcloud. Para mais informações acerca da gestão de contactos, consulte [este guia](../gestao_dos_contactos/).
>

**Este guia explica os diferentes privilégios de que um utilizador pode dispor, bem como o método de criação e de gestão de utilizadores.**

## Requisitos

- Ter uma conta OVHcloud ativa.
- Ter acesso à Área de Cliente.

## Instruções

### Etapa 1: Conhecer os diferentes privilégios dos utilizadores

É possível escolher entre três níveis de privilégio para cada um dos utilizadores.

| Privilégios | Detalhes |
|----------------|----------------------------------------------------------------------------------------------------------------------|
| Nenhum | Dá acesso de leitura na Área de Cliente e em todas as suas rubricas. |
| Utilizador | Dá acesso de escrita na Área de Cliente e em todas as suas rubricas, **com exceção** da gestão de utilizadores. |
| Administrador | Dá acesso de escrita na Área de Cliente e em todas as suas rubricas, **incluindo** a gestão de utilizadores. |

#### Exemplo de gestão de utilizadores

O proprietário da conta xx11111-ovh cria dois utilizadores:

- a utilizadora Jane, que tem o privilégio **Utilizador** e, portanto, uma capacidade de escrita em todas as rubricas da conta, com exceção da gestão de utilizadores;
- o utilizador Martin, que tem o privilégio **Nenhum** e, portanto, só tem uma capacidade de leitura em todas as rubricas da conta.

O proprietário da conta xx11111-ovh dispõe obrigatoriamente do privilégio **Administrador**, pelo que tem uma capacidade de escrita na globalidade da Área de Cliente. Além disso, pode adicionar utilizadores e/ou eliminar utilizadores já existentes.

![users-management](images/umv4.png){.thumbnail}

### Etapa 2: Adicionar um utilizador

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, clique no seu `nome`{.action} (1) e depois nas suas iniciais  (2).
Clique no separador `Gestão de utilizadores`{.action} (3) e, a seguir, em `Adicionar utilizador`{.action} (4).

![users-management](images/hubusers.png){.thumbnail}

Na janela que se abrir, complete os campos obrigatórios. Clique em `Validar`{.action} para criar o utilizador.

![users-management](images/usersmanagement2.png){.thumbnail}

| Campo | Detalhes |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID de utilizador | Introduza, por exemplo, o nome do utilizador ou a sua função. |
| E-mail | Introduza o endereço de e-mail do utilizador. |
| Palavra-passe | Defina a palavra-passe do utilizador. Mais tarde, ele poderá alterar esta palavra-passe. <br>Sugerimos que consulte [o guia sobre a gestão de palavras-passe](../gerir-a-palavra-passe/){.external} antes de a definir. |
| Privilégio | Escolha entre Nenhum, Utilizador e Administrador. |
| Descrição | Pode acrescentar uma descrição do utilizador. Por exemplo, a função que desempenha. |

O utilizador receberá um ID próprio, composto pelo ID digital da conta (indicado no menu «Gestão de utilizadores») e pelo nome de utilizador, com as duas referências separadas por uma barra.

Por exemplo: **1234-567-89/john.smith**.

![users-management](images/usersmanagement3.png){.thumbnail}

O utilizador em causa poderá desde logo aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} por meio desse ID de utilizador. 

Ele poderá igualmente alterar a sua própria palavra-passe e proteger o seu próprio acesso à conta ativando uma medida de dupla autenticação (esta última só será aplicada ao acesso desse utilizador). Para esse efeito, aconselhamos a consulta do [guia respeitante à implementação da dupla autenticação](../proteger-a-sua-conta-com-uma-2FA/){.external}.

### Etapa 3: Gerir os utilizadores

Pode alterar, desativar/ativar ou suprimir um utilizador clicando nas reticências `...`{.action} que surgem à direita.

![users-management](images/usersmanagement4.png){.thumbnail}

A alteração do utilizador permite atualizar o seu endereço de e-mail, os seus privilégios e a sua descrição.

![users-management](images/usersmanagement6.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.