---
title: 'Backup e exportação de uma base de dados no servidor de bases de dados'
slug: backup-exportacao-base-de-dados
excerpt: 'Saiba como fazer o backup e a exportação de uma base de dados'
section: 'Configuração'
order: 04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/06/2022**

## Objetivo

A sua base de dados pode conter um grande volume de informações essenciais ao seu site. Por isso, é essencial que possa salvaguardá-la ou exportá-la.

**Saiba como salvaguardar e exportar uma base de dados a partir do seu servidor de bases de dados.**

## Requisitos

- Dispor de uma [instância CloudDB](https://www.ovh.com/pt/cloud/cloud-databases/) {.external} (incluída numa oferta de [alojamento web Performance](https://www.ovhcloud.com/pt/web-hosting/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

> [!primary]
>
> Pamiętaj, że rozwiązania [CloudDB](https://www.ovh.pl/cloud/cloud-databases/){.external} nie dają dostępu do systemu zarządzania bazami danych, ale do baz danych na nim hostowanych.
> <br> - Pamiętaj, że nie ma dostępu "root".
> <br> - Ogólne polecenia SQL działają normalnie, a oprogramowanie takie jak HeidiSQL, SQuirreL lub Adminer jest w pełni kompatybilne.
>

### Salvaguardar e exportar uma base de dados a partir da Área de Cliente

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Clique no separador `Web Cloud` e, a seguir, em `Base de dados`{.action}. Selecione o nome do seu servidor de bases de dados. Clique no separador `Bases de dados`.

Ao nível da coluna **«Backups»**, o algarismo corresponde ao número de salvaguardas disponíveis para a sua base de dados.

> [!primary]
>
> - São realizados backups automáticos uma vez por dia
> em todas as bases de dados.
> - Os backups automáticos e manuais são conservados durante 30 dias.
> Passado este prazo, serão automaticamente eliminados.

#### 1. Fazer um backup manual 

Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Fazer backup agora`{.action}.

![clouddb](images/private-sql-save01.png){.thumbnail}

#### 2. Exportar um backup

Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Exibir os backups`{.action}.

![clouddb](images/private-sql-dl01.png){.thumbnail}

Quando surgir a lista dos backups, clique no botão `...`{.action} à direita do backup escolhido e em `Descarregar o backup`{.action} para o obter.

Salvaguardar e exportar uma base de dados fora da Área de Cliente

#### 1. Exportação de bases de dados MySQL ou MariaDB

 Em certos casos, é possível que a RAM disponível no seu servidor de bases de dados não permita realizar a exportação desejada. Se isso lhe acontecer, recomendamos que utilize a ferramenta OVHcloud disponível na Área de Cliente. Essa ferramenta permitirá a utilização de recursos externos ao serviço para que realize a operação. Consulte a secção [«Salvaguardar e exportar uma base de dados a partir da Área de Cliente»](./#salvaguardar-e-exportar-uma-base-de-dados-a-partir-da-area-de-cliente){.external} deste guia.

##### 1.1\. Exportar uma base MySQL ou MariaDB a partir do phpMyAdmin OVHcloud 

Para exportar uma base de dados diretamente a partir do phpMyAdmin, antes de mais tem de se conectar a ela. Se necessário, consulte o guia [«Conexão a uma base de dados do servidor de bases de dados»](../conexao-base-de-dados-servidor-bdd/){.external}.

Depois de se conectar ao phpMyAdmin, clique no nome da base de dados que deseja exportar e, de seguida, clique no separador `Exportar`{.action} ao alto.

Há dois modos de exportação. Se não tem necessidades específicas, sugerimos que utilize o modo **rápido** no formato **SQL**.

![clouddb](images/private-sql-export01.png){.thumbnail}

##### 1.2\. Exportar uma base MySQL ou MariaDB a partir da linha de comandos

```bash
mysqldump --host=servidor --user=utilizador --port=port --password=password nome_da_base > nome_da_base.sql
```

##### 1.3\. Exportar uma base MySQL ou MariaDB a partir de um script PHP

```php
1. <?php echo "O backup da sua base está em curso.......";
2. system("mysqldump --host=servidor --user=utilizador --port=port --password=password nome_da_base > nome_da_base.sql");
3. echo "Concluído. Pode obter a base por FTP";
4. ?>
```

> [!warning]
>
> - De modo a evitar acessos indesejados a este ficheiro com dados sensíveis, proteja-o recorrendo ao guia [Using .htaccess to password protect a directory on your website](https://docs.ovh.com/pt/hosting/partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao/){.external}.
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.
>

#### 2. Exportação e importação de bases de dados PostgreSQL fora da Área de Cliente

 Em certos casos, é possível que a RAM disponível no seu servidor de bases de dados não permita realizar a exportação desejada. Se isso lhe acontecer, recomendamos que utilize a ferramenta OVHcloud disponível na Área de Cliente. Essa ferramenta permitirá a utilização de recursos externos ao serviço para que realize a operação. Consulte a secção [«Salvaguardar e exportar uma base de dados a partir da Área de Cliente»](./#salvaguardar-e-exportar-uma-base-de-dados-a-partir-da-area-de-cliente){.external} deste guia.
 
##### 2.1\. Exportar uma base PostgreSQL a partir da linha de comandos

```bash
pg_dump --host=servidor --port=port --user=utilizador --password=password nome_da_base > nome_da_base.sql
```

##### 2.2\. Exportar uma base PostgreSQL a partir de um script PHP

```php
1. <?php echo "O backup da sua base está em curso.......";
2. system("PGPASSWORD=palavra_passe pg_dump --host=servidor --port=port --user=utilizador --password=password nome_da_base > nome_da_base.sql");
3. echo "Concluído. Pode obter a base por FTP";
4. ?>
```

> [!warning]
>
> - De modo a evitar acessos indesejados a este ficheiro com dados sensíveis, proteja-o recorrendo ao guia [Using .htaccess to password protect a directory on your website](https://docs.ovh.com/pt/hosting/partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao/){.external}.
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
