---
title: 'Como atribuir uma tag a um servidor Bare Metal'
excerpt: "Descubra como criar e modificar tags para cada servidor dedicado a partir da Área de Cliente OVHcloud"
updated: 2025-07-01
---

## Objetivo

As tags são etiquetas atribuídas aos seus recursos, o que lhe permite organizá-las e geri-las de forma mais eficaz.

Cada tag é composta por duas partes:

- **Chave**: Representa um atributo ou uma categoria.
- **O valor**: Corresponde à informação associada a esta chave.

Por exemplo, pode categorizar os seus recursos por site, por serviço ou ainda por nível de segurança. A utilização das tags pode facilitar a pesquisa, a organização dos seus recursos, a gestão dos custos associados ou ainda a aplicação de estratégias com a granularidade desejada.

**Este guia explica como criar, atribuir e eliminar tags para cada servidor dedicado a partir da Área de Cliente OVHcloud.**

## Requisitos

- Dispor de um [servidor dedicado](/links/bare-metal/bare-metal).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Atribuir uma tag a um servidor dedicado a partir da Área de Cliente

Para atribuir uma tag a um servidor:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Bare Metal Cloud`{.action}.
1. Clique em `Servidores dedicados`{.action} e selecione o seu servidor na lista.

Por predefinição, será redirecionado para o separador `Informações gerais`{.action}.

![Informações gerais](images/general_information.png){.thumbnail}

Na caixa **Tags**, clique em `Adicionar uma tag`{.action}.

![Adicionar uma tag](images/add_a_tag.png){.thumbnail}

Será automaticamente orientado para o separador `Tags`.

Clique no botão `Atribuir uma tag`{.action}.

![Tags - lista em branco](images/tag_list_empty.png){.thumbnail}

Na janela que aparece, clique no campo `Chave`{.action} para abrir o menu pendente e selecione a chave desejada.

![Atribuir uma tag - chave](images/assign_tag.png){.thumbnail}

De seguida, clique no campo `Valor`{.action} e selecione o valor adequado no menu pendente.

![Atribuir uma tag - valor](images/assign_tag_populated.png){.thumbnail}

> [!warning]
>
> **Se pretender utilizar uma chave ou um valor que ainda não exista**, pode criá-la introduzindo-a e clicando em `Adicionar este-texto`{.action}, onde "este-texto" corresponde ao texto que introduziu.
>

Por fim, clique no botão `Adicionar`{.action} para criar a tag e, a seguir, no botão `Atribuir`{.action} na parte inferior direita da janela.

![Tag adicionado](images/tag_added.png){.thumbnail}

Uma mensagem de confirmação será exibida em verde, acima da lista de tags aplicadas ao servidor escolhido.

![Tags - lista com exemplo](images/tag_list_with_example.png){.thumbnail}

### Eliminar uma tag num servidor dedicado

Para encontrar a lista das tags atribuídas ao seu servidor:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
1. Aceda à secção `Bare Metal Cloud`{.action}.
1. Clique em `Servidores dedicados`{.action} e selecione o seu servidor na lista.
1. Aceda ao separador `Tags`{.action}.

Clique no botão `...`{.action}, à direita da etiqueta que pretende eliminar do seu servidor.
A seguir, clique em `Anular atribuição`{.action}.

![Eliminar uma tag da lista](images/tag_list_remove.png){.thumbnail}

Ser-lhe-á exibida uma janela de confirmação. Clique no botão `Confirmar`{.action} para anular a atribuição da tag.

![Confirmar a eliminação da tag](images/remove_tag.png){.thumbnail}

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).