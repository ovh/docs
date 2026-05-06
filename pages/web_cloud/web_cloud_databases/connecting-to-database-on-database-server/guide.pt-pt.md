---
title: "Web Cloud Databases - Ligar-se a uma base de dados"
excerpt: "Saiba como ligar-se a uma base de dados na sua solução Web Cloud Databases"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Pode consultar o conteúdo da sua base de dados através de uma interface. Existem várias formas de se ligar a ela.

**Saiba como ligar-se à sua base de dados no seu servidor de bases de dados.**

## Requisitos

- Uma [instância Web Cloud Databases](/links/web/databases) (incluída numa oferta de [alojamento web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Caminho de navegação:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Selecione o seu serviço de base de dados

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instruções

> [!primary]
>
> As soluções [Web Cloud Databases](/links/web/databases) não dão acesso ao sistema de gestão de bases de dados em si, mas às bases de dados alojadas nesse sistema.
>
> - Não existe um acesso super-utilizador "root".
> - Os comandos SQL genéricos funcionam normalmente e os softwares do tipo HeidiSQL, SQuirreL SQL ou Adminer são plenamente compatíveis.
>

### Ligar-se a uma base de dados MySQL ou MariaDB

> [!primary]
>
> Uma vez que a MariaDB é um fork do MySQL, os comandos são exatamente iguais para estes dois tipos de bases de dados.
>

#### Ligação através do phpMyAdmin OVHcloud

<!-- CP-STEPS-START:mysql-phpmyadmin-ovhcloud -->
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
>> Obtenha as seguintes informações de ligação:
>>
>> - **Servidor (hostname) e porta:** visíveis no separador `Informações gerais`{.action}, secção `Informações da ligação`.
>> - **Nome de utilizador:** visível no separador `Utilizadores e permissões`{.action}.
>> - **Palavra-passe:** a palavra-passe associada ao utilizador. Se não se lembra dela, aceda ao separador `Utilizadores e permissões`{.action}, clique em `...`{.action} à direita do utilizador em causa e, em seguida, em `Alterar palavra-passe`{.action}.
>>
>> > [!warning]
>> >
>> > Se alterar a palavra-passe de um utilizador de base de dados, todas as aplicações/websites que acedam a essa base de dados devem ser atualizados em conformidade.
>>
> **Etapa 3**
>>
>> No separador `Informações gerais`{.action}, localize a secção **Gestão da base de dados** e clique na ligação phpMyAdmin em **Interface do utilizador**.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na página de início de sessão do phpMyAdmin, introduza as informações obtidas no passo 2:
>>
>> ![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}
>>
>> - **Servidor:** introduza o *hostname* seguido do *número da porta*, separados por "**:**" ou por um "**espaço**". Por exemplo: **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**.
>> - **Utilizador:** introduza o *nome de utilizador*.
>> - **Palavra-passe:** introduza a *palavra-passe*.

Se a ligação for bem-sucedida, será apresentada a página seguinte.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **Em caso de erro:**
>
> - O erro #1045 significa que as credenciais estão incorretas. Verifique o nome de utilizador e/ou a palavra-passe.
> - O erro #2005 significa que deve verificar o nome do servidor e se este está a funcionar corretamente.
<!-- CP-STEPS-END:mysql-phpmyadmin-ovhcloud -->

#### Ligação à base de dados fora da Área de Cliente

<!-- CP-STEPS-START:mysql-external-credentials -->
> [!warning]
>
> Se utilizar uma solução "Web Cloud Databases"/"SQL Privado", não se esqueça de autorizar o seu IP com a ajuda do guia sobre a [configuração do seu servidor de bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#gerer-vos-acces).

Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Obtenha as seguintes informações de ligação:
>>
>> - **Servidor (hostname):** visível no separador `Informações gerais`{.action}, secção **"Gestão da base de dados"**, "Hostname" na parte **SQL**.
>> - **Porta:** visível no mesmo local, "Porta" na parte **SQL**.
>> - **Nome de utilizador:** visível no separador `Utilizadores e permissões`{.action}.
>> - **Palavra-passe:** a palavra-passe associada ao utilizador em causa.
>> - **Nome da base de dados:** visível no separador `Bases de dados`{.action}.
<!-- CP-STEPS-END:mysql-external-credentials -->

**Clique no método de ligação pretendido para ver o conteúdo.**

/// details | Ligação através da linha de comandos

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

///

/// details | Ligação através de um script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Ligação através de um programa (SQuirreL SQL)

> [!primary]
>
> Neste exemplo, utilizamos o programa open-source SQuirreL, mas outras interfaces como o HeidiSQL ou o Adminer são plenamente compatíveis.

- Inicie o SQuirreL SQL e clique em `Aliases`{.action} e, em seguida, em `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Preencha os campos abaixo e valide clicando no botão `OK`{.action}:
    - **Name**: Escolha um nome
    - **Driver**: Escolha "MySQL Driver"
    - **URL**: Introduza o endereço do servidor e a porta no formato jdbc:mysql://server:port
    - **User Name**: Introduza o nome de utilizador
    - **Password**: Introduza a palavra-passe

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Valide novamente clicando no botão `Ligar`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Está agora ligado à sua base de dados:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

/// details | Ligação através do phpMyAdmin

Pode utilizar a sua própria interface phpMyAdmin para explorar o conteúdo da base de dados. Para isso, instale o phpMyAdmin no seu próprio servidor ou alojamento web. Durante a instalação, certifique-se de que configura corretamente as informações do servidor de bases de dados e da base de dados pretendida, para que o phpMyAdmin consiga ligar-se.

///

### Ligar-se a uma base de dados PostgreSQL

<!-- CP-STEPS-START:postgresql-external-credentials -->
Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e escolha a solução correspondente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Obtenha as seguintes informações de ligação:
>>
>> - **Servidor (hostname):** visível no separador `Informações gerais`{.action}, secção **"Gestão da base de dados"**, "Hostname" na parte **SQL**.
>> - **Porta:** visível no mesmo local, "Porta" na parte **SQL**.
>> - **Nome de utilizador:** visível no separador `Utilizadores e permissões`{.action}.
>> - **Palavra-passe:** a palavra-passe associada ao utilizador em causa.
>> - **Nome da base de dados:** visível no separador `Bases de dados`{.action}.
<!-- CP-STEPS-END:postgresql-external-credentials -->

**Clique no método de ligação pretendido para ver o conteúdo.**

/// details | Ligação através da linha de comandos

```bash
psql --host=server --port=port --user=user --password=password database_name
```

///

/// details | Ligação através de um script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Ligação através de um programa (SQuirreL SQL)

> [!primary]
>
> Neste exemplo, utilizamos o programa open-source SQuirreL, mas outras interfaces como o HeidiSQL ou o Adminer são plenamente compatíveis.

- Inicie o SQuirreL SQL e clique em `Aliases`{.action} e, em seguida, em `+`{.action}

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Preencha os campos abaixo e valide clicando no botão `OK`{.action}:
    - **Name**: Escolha um nome
    - **Driver**: Escolha "PostgreSQL"
    - **URL**: Introduza o endereço do servidor e a porta no formato jdbc:postgresql://server:port/database
    - **User Name**: Introduza o nome de utilizador
    - **Password**: Introduza a palavra-passe

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Valide novamente clicando no botão `Ligar`{.action}

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Está agora ligado à sua base de dados:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

## Quer saber mais?

[Alojamento web - A minha base de dados está saturada, o que fazer?](/pages/web_cloud/web_hosting/sql_overquota_database)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
