---
title: 'Criar bases de dados e utilizadores no servidor de bases de dados'
excerpt: 'Saiba como criar uma base de dados no servidor de bases de dados.'
updated: 2023-02-15
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Uma base de dados (*database*, «DB» ou «BDD») permite armazenar elementos considerados dinâmicos, tal como comentários ou artigos, por exemplo. Atualmente, estas bases são utilizadas pela maior parte dos sistemas de gestão de conteúdos (*Content Management System* ou CMS), como o WordPress ou Joomla!.

**Saiba como criar uma base de dados no seu servidor de bases de dados.**

## Requisitos

- Dispor de uma [instância Web Cloud Databases](https://www.ovh.pt/cloud/cloud-databases/) {.external} (incluída numa oferta de [alojamento web Performance](/links/web/hosting)
- Ter acesso à Área de Cliente OVHcloud (/links/manager)

## Instruções

### Criar uma base de dados

Aceda à [Área de Cliente OVHcloud](/links/manager){.external}. Clique no separador `Web Cloud` e, a seguir, em `Web Cloud Databases`{.action}. Selecione o nome do seu servidor de bases de dados.

Clique no separador `Bases de dados` e em `Adicionar uma base de dados`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}

Preencha os campos respeitando os critérios indicados. Pode criar diretamente um utilizador ao selecionar a caixa **«Criar um utilizador»**:

- **Nome da base de dados** (obrigatório): nome da futura base de dados.
- **Nome de utilizador** (apenas se opção `Criar um utilizador` foi selecionada): trata-se do utilizador que poderá conectar-se à sua base de dados e efetuar pedidos.
- **Permissões** (apenas se a opção `Criar um utilizador` foi selecionada): trata-se das permissões atribuídas ao utilizador da base de dados. Para uma utilização normal, selecione `Administrador`{.action}. As permissões podem ser redefinidas a qualquer momento.
- **Palavra-passe**/**Confirmar palavra-passe**(apenas se a opção `Criar um utilizador` foi selecionada): escolha uma palavra-passe e clique em confirmar.

Por fim, clique em `Validar`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Criar um utilizador

Para utilizar um servidor de bases de dados OVHcloud, é necessário criar utilizadores com permissões específicas de conexão a uma base de dados. 

Aceda à [Área de Cliente OVHcloud](/links/manager){.external}. Clique no separador `Web Cloud` e, a seguir, em `Web Cloud Databases`{.action}. Selecione o nome do seu servidor de bases de dados.

Clique no separador `Utilizadores e permissões` e, a seguir, em `Adicionar um utilizador`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}

Depois de introduzir um «nome de utilizador» e uma «palavra-passe», clique em `Validar`{.action}. 

### Gerir as permissões dos utilizadores

Para autorizar um utilizador a realizar ações numa base de dados, é necessário atribuir-lhe permissões.

Para gerir as permissões de cada utilizador, aceda à [Área de Cliente OVHcloud](/links/manager){.external}. Clique no separador `Web Cloud` e, a seguir, em `Web Cloud Databases`{.action}. Selecione o nome do seu servidor de bases de dados. Clique no separador `Utilizadores e permissões`.

Clique no botão `...`{.action} à direita do utilizador em questão e, a seguir, em `Gerir as permissões`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}

Na coluna à esquerda encontrará **Base de dados**, a lista das bases de dados presentes no seu servidor.

Segue-se a descrição dos três tipos de permissões possíveis:

- `Administrador` : autorização de consultas do tipo **Select / Insert / Update / Delete / Create / Alter / Drop**.
- `Leitura / Escrita` : autorização de consultas do tipo **Select / Insert / Update / Delete**.
- `Leitura` : autorização de consultas do tipo **Select**.
- `Nenhuma:` : sem permissões nesta base de dados.

> [!primary]
> 
> A segmentação das permissões referidas acima é própria da OVHcloud. Assim, um utilizador com permissões de `Administrador` poderá fazer **DLL** (Data Definition Language) e **DML** (Data Manipulation Language), ao passo que um utilizador com permissões de `Leitura/Escrita` só poderá fazer **DML** (Data Manipulation Language).

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}

#### Eliminar uma base de dados

> [!warning]
>
> Antes de eliminar uma base de dados num servidor de bases de dados, não haverá lugar a
> verificações de conteúdo. Portanto, a base será eliminada
> mesmo que ainda contenha dados. Daí recomendarmos a realização de
> um backup e o seu respetivo descarregamento antes de qualquer operação de eliminação.
> 

Aceda à [Área de Cliente OVHcloud](/links/manager){.external}. Clique no separador `Web Cloud` e, a seguir, em `Web Cloud Databases`{.action}. Selecione o nome do seu servidor de bases de dados.

Para eliminar uma base de dados, aceda ao separador `Bases de dados` e clique no botão `...`{.action} à direita da base em causa. Por fim, clique em `Eliminar a base`{.action}.

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).