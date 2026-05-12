---
title: 'Criar bases de dados e utilizadores no servidor de bases de dados'
excerpt: 'Saiba como criar uma base de dados no servidor de bases de dados'
updated: 2026-03-24
---

## Objetivo

Uma base de dados (DB) permite armazenar elementos ditos dinâmicos, como comentários ou artigos, por exemplo. Estas bases de dados são atualmente utilizadas pela quase totalidade dos sistemas de gestão de conteúdos (CMS) como o WordPress ou o Joomla!.

**Saiba como criar uma base de dados no servidor de bases de dados e dar acesso aos utilizadores.**

## Requisitos

- Dispor de uma [instância Web Cloud Databases](/links/web/databases) (incluída numa oferta de [alojamento web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Caminho de navegação:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Selecione o seu serviço de base de dados

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instruções

### Criar uma base de dados


Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action}.
>>
> **Etapa 3**
>>
>> Clique em `Criar base de dados`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > A criação de esquemas PostgreSQL não está atualmente disponível nos servidores Web Cloud Databases.
>>
> **Etapa 4**
>>
>> Preencha os campos de acordo com os critérios indicados. Pode criar diretamente um utilizador selecionando a opção **"Criar um utilizador"**:
>>
>> - **Nome da base de dados** (obrigatório): é o nome da sua futura base de dados.
>> - **Nome de utilizador** (apenas se a opção `Criar um utilizador` estiver selecionada): o utilizador que poderá conectar-se à base de dados e efetuar consultas.
>> - **Permissões** (apenas se a opção `Criar um utilizador` estiver selecionada): as permissões associadas ao utilizador na base de dados. Para uma utilização padrão, selecione `Administrador`{.action}. As permissões podem ser alteradas posteriormente.
>> - **Palavra-passe**/**Confirmar a palavra-passe** (apenas se a opção `Criar um utilizador` estiver selecionada): selecione uma palavra-passe e confirme-a.
>>
>> Clique em `Validar`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}


### Criar um utilizador

Para utilizar um servidor de bases de dados OVHcloud, crie utilizadores com permissões específicas de ligação a uma base de dados.


Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Utilizadores e permissões`{.action}.
>>
> **Etapa 3**
>>
>> Clique em `Adicionar utilizador`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Introduza um "nome de utilizador" e uma "palavra-passe" e clique em `Validar`{.action}.


### Gerir as permissões dos utilizadores

Para permitir que um utilizador efetue ações numa base de dados, é necessário atribuir-lhe permissões.


Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Utilizadores e permissões`{.action}.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita do utilizador correspondente e depois em `Gerir permissões`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na coluna da esquerda **Base de dados**, encontrará a lista das bases de dados do seu servidor.
>>
>> Estão disponíveis 3 tipos de permissões:
>>
>> - `Administrador`: autorização das consultas do tipo **Select / Insert / Update / Delete / Create / Alter / Drop**.
>> - `Leitura / Escrita`: autorização das consultas do tipo **Select / Insert / Update / Delete**.
>> - `Leitura`: autorização das consultas do tipo **Select**.
>> - `Nenhum`: nenhuma permissão na base de dados.
>>
>> > [!primary]
>> >
>> > A distribuição das permissões acima mencionadas é específica da OVHcloud. Assim, um utilizador com permissões de `Administrador` poderá utilizar **DDL** (Data Definition Language) e **DML** (Data Manipulation Language), enquanto um utilizador com permissões de `Leitura / Escrita` apenas poderá utilizar **DML** (Data Manipulation Language).
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}


### Eliminar uma base de dados

> [!warning]
>
> Antes de eliminar uma base de dados num servidor de bases de dados, não é
> efetuada qualquer verificação do conteúdo da base de dados. Esta será eliminada
> mesmo que ainda contenha dados. Por isso, recomenda-se a criação de
> uma cópia de segurança e o seu download antes de qualquer eliminação.
>


Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action}.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita da base de dados correspondente e depois em `Eliminar base de dados`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}


## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
