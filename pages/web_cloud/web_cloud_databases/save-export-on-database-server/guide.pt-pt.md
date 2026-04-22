---
title: 'Backup e exportação de uma base de dados no servidor de bases de dados'
excerpt: 'Saiba como fazer o backup e a exportação de uma base de dados no servidor Web Cloud Databases a partir da Área de Cliente OVHcloud ou do phpMyAdmin'
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

A sua base de dados pode conter um grande volume de informações essenciais para o seu site. Por isso, é fundamental poder salvaguardá-la ou exportá-la.

**Saiba como salvaguardar e exportar uma base de dados a partir do seu servidor de bases de dados.**

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

> [!primary]
>
> As soluções [Web Cloud Databases](/links/web/databases) não dão acesso ao sistema de gestão de bases de dados, mas às bases de dados alojadas nesse sistema.
>
> - Não existe acesso de superutilizador "root".
> - Os comandos SQL genéricos funcionam normalmente e softwares como HeidiSQL, SQuirreL SQL ou Adminer são totalmente compatíveis.
>

### Salvaguardar e exportar uma base de dados a partir da Área de Cliente

> [!primary]
>
> - São realizados backups automáticos uma vez por dia
> em todas as bases de dados.
> - Os backups automáticos e manuais são conservados durante 30 dias.
> Após este prazo, serão automaticamente eliminados.

#### Realizar um backup manual

<!-- CP-STEPS-START:save-manual -->
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
>> Na coluna **Backups**, o número corresponde ao número de backups disponíveis para a sua base de dados.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Fazer backup agora`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}
<!-- CP-STEPS-END:save-manual -->

#### Exportar um backup

<!-- CP-STEPS-START:export-backup -->
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
>> Na coluna **Backups**, o número corresponde ao número de backups disponíveis para a sua base de dados.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Exibir os backups`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Surge a lista dos backups disponíveis. Clique no botão `...`{.action} à direita do backup pretendido e, a seguir, em `Descarregar o backup`{.action}.
<!-- CP-STEPS-END:export-backup -->

### Salvaguardar e exportar uma base de dados fora da Área de Cliente

Se a RAM disponível no servidor não permitir realizar a exportação desejada, utilize a ferramenta OVHcloud na Área de Cliente, que utiliza recursos externos à sua solução. Consulte a secção "[Salvaguardar e exportar uma base de dados a partir da Área de Cliente](./#salvaguardar-e-exportar-uma-base-de-dados-a-partir-da-area-de-cliente)" deste guia.

**Clique no método de exportação pretendido para visualizar o conteúdo.**

/// details | Exportar uma base de dados MySQL ou MariaDB a partir do phpMyAdmin OVHcloud

Para exportar a sua base de dados diretamente a partir do phpMyAdmin, é necessário conectar-se primeiro. Para tal, consulte o guia "[Conexão a uma base de dados](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)".

Depois de se conectar ao phpMyAdmin, clique no nome da base de dados que deseja exportar e, a seguir, no separador `Exportar`{.action} no topo.

Existem dois modos de exportação. Se não tem necessidades específicas, recomendamos o modo **rápido** no formato **SQL**.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

///

/// details | Exportar uma base de dados MySQL ou MariaDB a partir da linha de comandos

```bash
mysqldump --host=servidor --user=utilizador --port=port --password=password nome_da_base > nome_da_base.sql
```

///

/// details | Exportar uma base de dados MySQL ou MariaDB a partir de um script PHP

```php
1. <?php echo "O backup da sua base de dados está em curso.......";
2. system("mysqldump --host=servidor --user=utilizador --port=port --password=password nome_da_base > nome_da_base.sql");
3. echo "Concluído. Pode obter a base de dados por FTP.";
4. ?>
```

> [!warning]
>
> - Para evitar que terceiros acedam a este ficheiro com dados sensíveis, proteja o acesso utilizando o guia: [Proteger o acesso a um diretório com .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.

///

/// details | Exportar uma base de dados PostgreSQL a partir da linha de comandos

```bash
pg_dump --host=servidor --port=port --user=utilizador --password=password nome_da_base > nome_da_base.sql
```

///

/// details | Exportar uma base de dados PostgreSQL a partir de um script PHP

```php
1. <?php echo "O backup da sua base de dados está em curso.......";
2. system("PGPASSWORD=password pg_dump --host=servidor --port=port --user=utilizador --password=password nome_da_base > nome_da_base.sql");
3. echo "Concluído. Pode obter a base de dados por FTP.";
4. ?>
```

> [!warning]
>
> - Para evitar que terceiros acedam a este ficheiro com dados sensíveis, proteja o acesso utilizando o guia: [Proteger o acesso a um diretório com .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.

///

## Quer saber mais?

[Salvaguardar e exportar uma base de dados a partir da Área de Cliente](./#salvaguardar-e-exportar-uma-base-de-dados-a-partir-da-area-de-cliente)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
