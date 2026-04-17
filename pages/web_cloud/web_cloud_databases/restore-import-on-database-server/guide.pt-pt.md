---
title: 'Restaurar e importar uma base de dados no servidor de bases de dados'
excerpt: 'Saiba como restaurar e importar uma base de dados no servidor Web Cloud Databases a partir da Área de Cliente OVHcloud ou do phpMyAdmin'
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

No seguimento de um erro numa base de dados, deve estar preparado para restaurar um backup ou importar uma base de dados local.

**Saiba como restaurar e importar uma base de dados no servidor de bases de dados.**

## Requisitos

- Dispor de uma [instância Web Cloud Databases](/links/web/databases) (incluída numa oferta de [alojamento web Performance](/links/web/hosting))

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
> As soluções [Web Cloud Databases](/links/web/databases) não dão acesso ao sistema de gestão de bases de dados, mas sim às bases de dados alojadas nele.
>
> - Não há acesso de superutilizador "root".
> - Os comandos SQL genéricos funcionam normalmente, e os programas de tipo HeidiSQL, SQuirreL SQL ou Adminer são plenamente compatíveis.

### Restaurar e importar uma base de dados a partir da Área de Cliente

#### Restaurar um backup existente

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
>> Na coluna **"Backups"**, o algarismo corresponde ao número de backups disponíveis para a sua base de dados.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Exibir os backups`{.action}.
>>
> **Etapa 4**
>>
>> A lista dos backups disponíveis é apresentada. Clique no botão `...`{.action} à direita do backup escolhido e em `Restaurar o backup`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > O restauro implica a substituição do conteúdo da base de dados e, por conseguinte, uma potencial perda de dados. Caso não tenha a certeza do que está a fazer, recomendamos que efetue um backup antes.

#### Importar um backup local

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
>> Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Importar um ficheiro`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}
>>
> **Etapa 4**
>>
>> ***Tem duas possibilidades:***
>>
>> **1 - Importar um novo ficheiro**
>>
>> Clique em **"Importar um novo ficheiro"** e em `Seguinte`{.action}.
>>
>> Introduza um nome para o ficheiro importado, clique em `Percorrer`{.action} para o selecionar, depois em `Enviar`{.action} e, por fim, em `Seguinte`{.action}.
>>
>> > [!warning]
>> >
>> > O ficheiro deve estar no formato ".sql", ".txt" ou ".gz".
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}
>>
>> Se desejar, selecione **"Limpar a base de dados atual"** antes da importação e **"Enviar um e-mail no fim da importação"** para ser informado da conclusão da operação no endereço de e-mail de referência da sua conta OVHcloud. Por fim, clique em `Validar`{.action}.
>>
>> **2 - Utilizar um ficheiro existente**
>>
>> Se já importou um ficheiro anteriormente, poderá escolher a opção **"Importar um ficheiro existente"**.
>>
>> Selecione o ficheiro no menu suspenso e clique em `Seguinte`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}
>>
>> Se desejar, selecione **"Limpar a base de dados atual"** antes da importação e **"Enviar um e-mail no fim da importação"** para ser informado da conclusão da operação no endereço de e-mail de referência da sua conta OVHcloud. Por fim, clique em `Validar`{.action}.

### Importar uma base de dados fora da Área de Cliente

Em certos casos, a RAM disponível no seu servidor de bases de dados não permite realizar a importação desejada fora da Área de Cliente. Nesse caso, recomendamos que utilize a ferramenta OVHcloud disponível na Área de Cliente. Consulte a secção "[Restaurar e importar uma base de dados a partir da Área de Cliente](./#restaurar-e-importar-uma-base-de-dados-a-partir-da-area-de-cliente)" deste guia.

**Clique no método de importação pretendido para visualizar o conteúdo.**

/// details | Importar uma base MySQL ou MariaDB a partir do phpMyAdmin

Para importar a base de dados diretamente a partir do phpMyAdmin, é necessário primeiro conectar-se. Consulte a secção "[Conexão a uma base de dados MySQL ou MariaDB](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#conexao-a-uma-base-de-dados-mysql-ou-mariadb)".

Depois de se ter conectado ao phpMyAdmin, selecione a base de dados clicando no seu nome.

De seguida, clique no separador `Importar`{.action}.

Selecione o ficheiro de backup clicando em `Percorrer`{.action} (o ficheiro não pode ultrapassar os 100 MB).

> [!primary]
>
> Caso exceda os 100 MB, recomendamos que fraccione a base de dados em vários ficheiros e que efetue várias importações a partir do phpMyAdmin.
> A importação de ficheiros que ultrapassem os 100 MB pode ser feita a partir da Área de Cliente seguindo o passo "[Restaurar e importar uma base de dados a partir da Área de Cliente](./#restaurar-e-importar-uma-base-de-dados-a-partir-da-area-de-cliente)".

Deixe as opções predefinidas e clique em `Executar`{.action} para lançar a importação.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

///

/// details | Importar uma base MySQL ou MariaDB a partir da linha de comandos

Esta ação só é possível em [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) a partir de um alojamento partilhado OVHcloud.

```bash
cat nome_da_base.sql | mysql --host=servidor --user=utilizador --port=port --password=password nome_da_base
```

///

/// details | Importar uma base MySQL ou MariaDB a partir de um ficheiro PHP

```php
1. <?php
2. echo "O restauro da sua base está em curso.......<br>";
3. system("cat nome_da_base.sql | mysql --host=servidor --user=utilizador --port=port --password=password nome_da_base");
4. echo "Concluído. A base está instalada neste alojamento.";
5. ?>
```

> [!warning]
>
> - De modo a evitar acessos indesejados a este ficheiro com dados sensíveis, proteja-o seguindo o guia: [Como proteger o acesso a um diretório com palavra-passe?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.

///

/// details | Importar uma base PostgreSQL a partir da linha de comandos

Esta ação só é possível em [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) a partir de um alojamento partilhado OVHcloud em versão estável ou superior.

```bash
psql --host=servidor --port=port --user=utilizador --password=password nome_da_base < nome_da_base.sql
```

///

/// details | Importar uma base PostgreSQL a partir de um ficheiro PHP

```php
1. <?php
2. echo "O restauro da sua base está em curso.......<br>";
3. system("PGPASSWORD=password psql --host=servidor --port=port --user=utilizador --password=password nome_da_base < nome_da_base.sql");
4. echo "Concluído. A base está instalada neste alojamento.";
5. ?>
```

> [!warning]
>
> - De modo a evitar acessos indesejados a este ficheiro com dados sensíveis, proteja-o seguindo o guia: [Como proteger o acesso a um diretório com palavra-passe?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.

///

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
