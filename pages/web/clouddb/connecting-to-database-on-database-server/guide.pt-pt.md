---
title: 'Conexão à base de dados do servidor de bases de dados'
slug: conexao-base-de-dados-servidor-bdd
excerpt: 'Saiba como se conectar a uma base de dados'
section: Configuração
order: 3
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 29/06/2022**

## Objetivo

Se desejar, pode consultar o conteúdo da sua base de dados através de uma interface. Para isso, tem ao seu dispor várias formas de conexão.

**Saiba como se conectar a uma base de dados no servidor de bases de dados.**

## Requisitos

- Dispor de uma [instância CloudDB](https://www.ovh.com/pt/cloud/cloud-databases/) (incluída numa oferta de [alojamento web Performance](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

> [!primary]
>
> Note que as ofertas [CloudDB](https://www.ovh.com/pt/cloud/cloud-databases/) não dão acesso ao sistema de gestão de base de dados, mas às bases de dados alojadas nesse sistema.
> <br> - Não existe um acesso super-utilizador "root".
> <br> - Os comandos SQL genéricos funcionam normalmente e os softwares do tipo HeidiSQL, SQuirreL SQL ou Adminer são plenamente compatíveis.
>

### Conexão a uma base de dados MySQL ou MariaDB 

> [!primary]
>
> Como as MariaDB derivam das MySQL, os diferentes comandos são exatamente iguais para estes dois tipos de bases de dados.
> 

####  Pelo phpMyAdmin OVHcloud 

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Clique no separador `Web Cloud` e, a seguir, em `Base de dados`{.action}. Selecione o nome do seu servidor de bases de dados.

No separador `Informações gerais`, vai encontrar o link de acesso no quadro **«Gestão da base de dados»** sob a menção «Interface do utilizador».

![sql-privado](images/private-sql-phpma01.png){.thumbnail}

Será conduzido à página de conexão do phpMyAdmin.

![sql-privado](images/private-sql-phpma02.png){.thumbnail}

- **Servidor**: indique o host do servidor, visível no separador `Informações gerais`, no quadro **«Gestão da base de dados»** sob a menção «Host» da secção **SQL**.
- **Utilizador**: indique o utilizador criado no separador `Utilizadores e permissões` do servidor de bases de dados.
- **Palavra-pase**: indique a palavra-passe associada ao utilizador em causa.
- **Porta**: indique a porta mencionada no separador `Informações gerais`, no quadro **«Gestão da base de dados»** sob a menção «Porta» da secção **SQL**.

Se a conexão for bem-sucedida, acederá à página seguinte do phpMyAdmin.

![sql-privado](images/private-sql-phpma03.png){.thumbnail}


> [!warning]
>
> **Em caso de erro #1045**
> <br> - Erro #1045, isso significa que a identificação não está correta. Verifique o nome de utilizador e/ou a palavra-passe.
> <br> - Erro #2005, verifique o nome do servidor e se ele está funcional.

#### Conexão à base de dados fora da Área de Cliente

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

![lançar SQuirreL SQL](images/1.png){.thumbnail}

- Preencha os campos abaixo e valide clicando no botão `OK`{.action}:
    - **Name**: Escolha um nome.
    - **Driver**: Escolha «MySQL Driver».
    - **URL**: Indique o endereço do servidor e a porta sob a forma: «jdbc:mysql://server:port».
    - **User Name**: Indique o nome de utilizador.
    - **Password**: Indique a palavra-passe.

![config conexao](images/2.png){.thumbnail}

- Torne a validar clicando no botão `Connect`{.action}.

![valid conexao](images/3.png){.thumbnail}

Já está conectado à base de dados:

![config conexao](images/4.PNG){.thumbnail}

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

![lançar SQuirreL SQL](images/1.png){.thumbnail}

- Preencha os campos abaixo e valide clicando no botão `OK`{.action}:
    - **Name**: Escolha um nome.
    - **Driver**: Escolha «PostgreSQL».
    - **URL**: Indique o endereço do servidor e a porta sob a forma: «jdbc:postgresql://server:port/database».
    - **User Name**: Indique o nome de utilizador.
    - **Password**: Indique a palavra-passe.

![config conexao](images/2.png){.thumbnail}

- Torne a validar clicando no botão `Connect`{.action}.

![valid conexao](images/3.png){.thumbnail}

Já está conectado à base de dados:

![config conexao](images/4.PNG){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

