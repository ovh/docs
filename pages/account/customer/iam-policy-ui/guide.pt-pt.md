---
title: Como utilizar as políticas IAM a partir do seu Espaço Cliente
excerpt: Descubra como dar direitos de acesso específicos aos utilizadores a partir de uma conta OVHcloud
updated: 2023-07-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

> [!warning]
>
> Esta funcionalidade está atualmente em versão beta. Encontre mais informações em <https://labs.ovhcloud.com/en/>.
>

## Objetivo

Este guia explica-lhe como fornecer direitos de acesso específicos aos utilizadores de uma conta OVHcloud.

A gestão dos acessos da OVHcloud baseia-se num sistema de gestão das políticas. É possível escrever diferentes políticas que dão acesso aos utilizadores a funcionalidades específicas relativas aos produtos associados a uma conta OVHcloud.

Em pormenor, uma política inclui:

- Uma ou mais **identidades** visadas por esta política. 
    - Podem ser identificadores de contas, utilizadores ou grupos de utilizadores (por exemplo, os utilizados em [Federation](/pages/account/customer/ovhcloud-account-connect-saml-adfs) - ou outros guias SSO disponíveis). 
- Uma ou mais **recursos** abrangidos por esta política. 
    - Um recurso é um produto da OVHcloud que será afetado por esta política (um nome de domínio, um servidor Nutanix, um Load Balancer, etc.).
- Uma ou mais **ações** autorizadas ou excluídas por esta política.
    - As ações são os direitos específicos afetados por esta política (reinicialização de um servidor, criação de uma conta de e-mail, rescisão de uma assinatura, etc.)
 
Por exemplo, podemos criar uma política para dar a um utilizador chamado John, para um VPS, o acesso à ação "reiniciar".

**Este guia explica em detalhe como declarar estas políticas com a ajuda da Área de Cliente OVHcloud e como listar as identidades, recursos e ações disponíveis para estas.**

![políticas IAM](images/iam_policies.png){.thumbnail}

## Requisitos

- Dispor de uma [conta OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- Saber [gerir os utilizadores da conta](/pages/account/customer/ovhcloud-users-management)
- Um ou vários produtos OVHcloud associados a esta conta OVHcloud (Load Balancer, nome de domínio, VPS, etc.)

## Instruções

### Aceder ao menu IAM

Clique no nome da sua conta no canto superior direito e, de novo, no seu nome na barra lateral.

![Acesso ao menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Pode aceder ao menu IAM através da entrada dedicada no seu Espaço Cliente.

![Acesso ao menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

O menu apresenta a lista de todas as políticas em curso criadas na sua conta.

![Acesso ao menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Cada política é apresentada com o seu nome, o número de identidades e o número de ações que contém.

> [!primary]
>
> Clicar no botão "Modo avançado" permite apresentar a lista de todas as políticas da OVHcloud. Estas políticas são automaticamente criadas pela OVHcloud para converter a delegação preexistente dos `NIC Tech` (contacto técnico) e `NIC Admin` (contacto administrador) na nova funcionalidade IAM. 
>
> Os clientes não podem alterar ou eliminar estas políticas.

### Gestão das políticas

#### Criar uma política

Clique no botão `Criar uma política`{.action}.

É apresentado o seguinte formulário:

![Criar uma política](images/create_a_policy_01.png){.thumbnail}

- **Nome da política** (obrigatório): trata-se do nome que aparecerá nas interfaces. O nome deve ser único e não deve conter qualquer espaço.
- **Tipos de produtos**: selecione os tipos de produtos para definir o âmbito de aplicação da política. Um ou mais tipos de produto podem ser incluídos na mesma política.
- **Recursos**: adicione recursos ou grupos de recursos a serem cobertos pela política. Os recursos disponíveis são filtrados por tipo de produto previamente selecionado.
- **Ações**.

Existem 3 formas de adicionar ações:

- Ao ativar a opção `Autorizar todas as ações`{.action}

![Criar uma política](images/create_a_policy_02.png){.thumbnail}

Ao ativar esta opção, estará a autorizar todas as ações relacionadas com os produtos selecionados. Isto inclui todas as ações existentes, bem como as ações futuras acrescentadas a estas categorias de produtos.

- Adicionando manualmente ações

Se conhece o nome da ação, pode adicioná-la manualmente.

![Criar uma política](images/create_a_policy_03.png){.thumbnail}

Pode utilizar um *wildcard* no início ou no fim do nome da ação com `*`.

Por exemplo, a adição de `vps:apiovh:ips/*` irá conceder os seguintes direitos:

vps:apiovh:ips/edit <br>
vps:apiovh:ips/delete <br>
vps:apiovh:ips/get <br>

- Selecionando ações da lista

As ações podem ser selecionadas na lista.

![Criar uma política](images/create_a_policy_04.png){.thumbnail}

As ações disponíveis dependem do tipo de recursos e pertencem a uma das cinco categorias seguintes:

- **Read**: identifica os produtos e apresenta as informações que lhes dizem respeito (*ex: listar um IP VPS*).
- **Create**: ação que permite criar algo sobre um produto (*ex: criar um ticket de suporte*).
- **Delete**: ação que permite eliminar algo de um produto (*ex: eliminar uma instância Public Cloud*).
- **Edit**: ação para alterar um elemento existente num produto (*ex: modificar a rota TCP de um Load Balancer*).
- **Operate**: aplicar alterações às infraestruturas relacionadas com o produto (*ex: reiniciar um servidor dedicado*).

Está disponível um campo de pesquisa para o ajudar a identificar uma ação específica na lista.

#### Alterar uma política

Para alterar uma política existente, clique no botão `...`{.action} à direita da política, e depois `Alterar a política`{.action}.

![Modificar uma política](images/editing_a_policy.png){.thumbnail}

A seguir, poderá alterar o âmbito da política.

#### Eliminar uma política

Para eliminar uma política existente, clique no botão `...`{.action} à direita da política, e por `Eliminar a política`{.action}.

Uma janela contextual irá pedir-lhe que confirme a eliminação.

### Associar uma identidade a uma política

Para associar uma identidade a uma política, clique no botão `...`{.action} à direita da política, e depois `Gerir as identidades associadas`{.action}.

![Modificar uma política](images/editing_a_policy.png){.thumbnail}

Isto permitir-lhe-á adicionar e eliminar utilizadores ou grupos aos quais a política deve ser aplicada.

![Associar uma identidade](images/link_identity_to_policy.png){.thumbnail}

### Gestão das identidades

As identidades disponíveis para as políticas são geridas através do separador `Gestāo de utilizadores`{.action}, no menu `A minha conta`{.action.

O separador `Identitaded`{.action} do menu IAM reencaminha para este menu.

Encontre os detalhes da gestão dos utilizadores na [documentação dedicada](/pages/account/customer/ovhcloud-users-management).

### Gestão dos grupos de recursos

As políticas podem visar grupos de recursos (em vez de visarem diretamente recursos). Estes grupos de recursos podem juntar recursos de diferentes produtos, por exemplo para configurar um ambiente de teste.

#### Criar um grupo de recursos

Para criar um grupo de recursos, aceda ao separador dedicado do menu IAM:

![Resource Group](images/resource_groups.png){.thumbnail}

Clique em `Criar o grupo de recursos`{.action}.

![Resource Group](images/resource_groups_form.png){.thumbnail}

- **Nome do grupo de recursos**: trata-se do nome que aparecerá nas interfaces. O nome deve ser único e não deve conter qualquer espaço.
- **Tipos de produtos**: lista dos tipos de produtos abrangidos por esse grupo de recursos.
- **Recursos**: lista dos recursos que o grupo conterá.

#### Modificar um grupo de recursos

Para alterar um grupo de recursos, clique no seu nome na lista.

#### Eliminar um grupo de recursos

Para eliminar um grupo de recursos existente, clique no botão `...`{.action} à direita do grupo, depois por `Eliminar o grupo de recursos`{.action.

Uma janela contextual irá pedir-lhe que confirme a eliminação.

## Quer saber mais?

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
