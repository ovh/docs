---
title: "Conexão à base de dados do servidor de bases de dados"
excerpt: "Saiba como se conectar a uma base de dados"
updated: 2023-10-31
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Se desejar, pode consultar o conteúdo da sua base de dados através de uma interface. Para isso, tem ao seu dispor várias formas de conexão.

**Saiba como se conectar a uma base de dados no servidor de bases de dados.**

## Requisitos

- Dispor de uma [instância Web Cloud Databases](/links/web/databases) (incluída numa oferta de [alojamento web Performance](/links/web/hosting).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

> [!primary]
>
> Note que as ofertas [Web Cloud Databases](/links/web/databases) não dão acesso ao sistema de gestão de base de dados, mas às bases de dados alojadas nesse sistema.
> <br> - Não existe um acesso super-utilizador "root".
> <br> - Os comandos SQL genéricos funcionam normalmente e os softwares do tipo HeidiSQL, SQuirreL SQL ou Adminer são plenamente compatíveis.
>

### Conexão a uma base de dados MySQL ou MariaDB 

> [!primary]
>
> Como as MariaDB derivam das MySQL, os diferentes comandos são exatamente iguais para estes dois tipos de bases de dados.
> 

####  Pelo phpMyAdmin OVHcloud 

Aceda à [Área de Cliente OVHcloud](/links/manager){.external} e aceda à secção `Web Cloud`. Clique no separador `Web Cloud Databases`{.action} na coluna à esquerda e selecione o nome do servidor de bases de dados.

No separador `Informações gerais`, encontrará a ligação de acesso ao phpMyAdmin no quadro **"Gestão da base de dados"** sob a menção "Interface do utilizador".

![sql-privado](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}

Será conduzido à página de conexão do phpMyAdmin.

![sql-privado](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}

Introduza os seguintes elementos para se ligar à sua base de dados:

- **Servidor:** Indique o *nome do host* do seu servidor de bases de dados, seguido do *número da porta*. O *número da porta* deve ser separado do *nome do host* por um "**espaço**" ou por "**:**". Por exemplo, se o *nome do host* for **aaXXXXX-XXX.eu.clouddb.ovh.net** e o *número da porta* for **12345**, deverá introduzir-se **aaXXXXXXX-XXX.eu.clouddb.ovh.net:12345** ou **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**. Para encontrar o *nome do host* e o *número da porta* do seu servidor Web Cloud Databases, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e aceda à secção `Web Cloud`. Clique no separador `Web Cloud Databases`{.action} na coluna à esquerda e selecione o nome do servidor de bases de dados. Na página `Informações gerais`, aparecerá o *nome do host* e o *número da porta* na caixa `Informações da ligação`.

- **Utilizador:** indique o *nome de utilizador* do servidor de bases de dados. Para encontrar o *nome de utilizador* da sua base de dados, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e aceda à secção `Web Cloud`. Clique no separador `Web Cloud Databases`{.action} na coluna à esquerda e selecione o nome do servidor de bases de dados. Na página que se abrir, clique no separador `Utilizadores e permissões`{.action}. Encontrará uma tabela com o conjunto dos utilizadores criados no seu serviço Web Cloud Databases.

- **Palavra-passe:** indique a *palavra-passe* associada ao *nome de utilizador* em questão. Se já não se lembra da *palavra-passe* associada ao seu *nome de utilizador*, aceda à [Área de Cliente OVHcloud](/links/manager){.external} e aceda à secção `Web Cloud`. Clique no separador `Web Cloud Databases`{.action} na coluna à esquerda e selecione o nome do servidor de bases de dados. Na página que se abrir, clique no separador `Utilizadores e permissões`{.action}. Clique no botão `...`{.action} situado à direita de *o utilizador* em causa para `Alterar palavra-passe`{.action}.

> [!warning]
>
> Se alterar a palavra-passe de utilizador de uma base de dados, todas as aplicações/websites que acedam a essa base de dados deverão ser atualizadas em conformidade.
>

Se a conexão for bem-sucedida, acederá à página seguinte do phpMyAdmin.

![sql-privado](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **Em caso de erro**
> <br> - Erro #1045, isso significa que a identificação não está correta. Verifique o nome de utilizador e/ou a palavra-passe.
> <br> - Erro #2005, verifique o nome do servidor e se ele está funcional.

#### Conexão à base de dados fora da Área de Cliente

> [!warning]
>
> Se utiliza uma oferta "Web Cloud Databases"/"SQL Privado", não se esqueça de autorizar o seu IP com a ajuda do guia sobre a [configuração do seu servidor de base de dados](/pages/web_cloud/web_cloud_databases/configure-database-server).
>

Para se conectar à base de dados, certifique-se de que tem à mão as seguintes informações:

- **Servidor**: o nome do host do servidor está visível no separador `Informações gerais` do servidor de bases de dados, no quadro **«Gestão da base de dados»**, sob a menção «Host» da secção **SQL**.
- **Utilizador**: o nome do utilizador criado no separador `Utilizadores e permissões` do servidor de bases de dados.
- **Palavra-passe**: a palavra-passe associada ao utilizador em causa.
- **Porta**: a porta está visível no separador `Informações gerais` do servidor de bases de dados, no quadro **«Gestão da base de dados»**, sob a menção «Porta» da secção **SQL**.
- **Nome da base de dados**: as bases de dados estão listadas no separador `Bases de dados` do servidor de bases de dados.

##### 1. Conexão através da linha de comandos

```bash
mysql --host=servidor --user=utilizador --port=port --password=password nome_da_base
```

##### 2. Conexão através de um script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

##### 3. Conexão através de um programa (SQuirreL SQL)

> [!primary]
>
> Neste exemplo, vamos utilizar o programa open-source SQquirreL, mas há outras interfaces plenamente compatíveis (por exemplo: HeidiSQL ou Adminer).  

- Lance o SQuirreL. Clique em `Aliases`{.action} e, a seguir, em `+`{.action}.

![lançar SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Preencha os campos abaixo e valide clicando no botão `OK`{.action}:
    - **Name**: Escolha um nome.
    - **Driver**: Escolha «MySQL Driver».
    - **URL**: Indique o endereço do servidor e a porta sob a forma: «jdbc:mysql://server:port».
    - **User Name**: Indique o nome de utilizador.
    - **Password**: Indique a palavra-passe.

![config conexao](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Torne a validar clicando no botão `Connect`{.action}.

![valid conexao](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Já está conectado à base de dados:

![config conexao](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

##### 4. Conexão pelo phpMyAdmin

Pode utilizar a sua própria interface phpMyAdmin para explorar o conteúdo da base de dados. Para isso, instale o phpMyAdmin no servidor ou no alojamento web. Durante a instalação, configure adequadamente as informações do servidor de bases de dados e da base de dados desejada, para que o phpMyAdmin consiga proceder à conexão.

### Conexão a uma base de dados PostgreSQL 

Para se conectar à base de dados, certifique-se de que tem à mão as seguintes informações:

- **Servidor**: o nome do host do servidor está visível no separador `Informações gerais` do servidor de bases de dados, no quadro **«Gestão da base de dados»**, sob a menção «Host» da secção **SQL**.
- **Utilizador**: o nome do utilizador criado no separador `Utilizadores e permissões` do servidor de bases de dados.
- **Palavra-passe**: a palavra-passe associada ao utilizador em causa.
- **Porta**: a porta está visível no separador `Informações gerais` do servidor de bases de dados, no quadro **«Gestão da base de dados»**, sob a menção «Porta» da secção **SQL**.
- **Nome da base de dados**: as bases de dados estão listadas no separador `Bases de dados` do servidor de bases de dados.

#### Conexão através da linha de comandos

```bash
psql --host=servidor --port=port --user=utilizador --password=password nome_da_base
```

#### Conexão através de um script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Conexão através de um programa (SQuirreL SQL)

> [!primary]
>
> Neste exemplo, vamos utilizar o programa open-source SQquirreL, mas há outras interfaces plenamente compatíveis (por exemplo: HeidiSQL ou Adminer). 

- Lance o SQuirreL. Clique em `Aliases`{.action} e, a seguir, em `+`{.action}.

![lançar SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Preencha os campos abaixo e valide clicando no botão `OK`{.action}:
    - **Name**: Escolha um nome.
    - **Driver**: Escolha «PostgreSQL».
    - **URL**: Indique o endereço do servidor e a porta sob a forma: «jdbc:postgresql://server:port/database».
    - **User Name**: Indique o nome de utilizador.
    - **Password**: Indique a palavra-passe.

![config conexao](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Torne a validar clicando no botão `Connect`{.action}.

![valid conexao](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Já está conectado à base de dados:

![config conexao](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 