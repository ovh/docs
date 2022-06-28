---
title: 'Restaurar e importar uma base de dados no servidor de bases de dados'
slug: restaurar-importar-base-de-dados
excerpt: 'Saiba como restaurar e importar uma base de dados'
section: 'Configuração'
order: 5
---

**Última atualização: 03/02/2022**

## Objetivo

No seguimento de um erro numa base de dados, deve estar preparado para restaurar um backup ou então para importar uma base de dados local. 

**Saiba como restaurar e importar uma base de dados no servidor de bases de dados.**

## Requisitos

- Dispor de uma [instância CloudDB](https://www.ovh.com/pt/cloud/cloud-databases/) {.external} (incluída numa oferta de [alojamento web performance](https://www.ovhcloud.com/pt/web-hosting/)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

> [!primary]
>
> Tenha em atenção que os serviços [Cloud Databases](https://www.ovh.pt/cloud-databases/){.external} não dão acesso ao host, mas sim às bases de dados alojadas neste último. 
> <br> - Não há um acesso superutilizador «root». 
> <br> - Os comandos SQL genéricos funcionam normalmente, e os programas de tipo HeidiSQL, SQuirreL SQL e Adminer são plenamente compatíveis.
> 

### Restaurar e importar uma base de dados a partir da Área de Cliente

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Clique no separador `Web Cloud` e, a seguir, em `Base de dados`{.action}. Selecione o nome do seu servidor de bases de dados. Clique no separador `Bases de dados`.

Ao nível da coluna **«Backups»**, o algarismo corresponde ao número de salvaguardas disponíveis para a sua base de dados.

#### 1. Restaurar um backup existente

Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Exibir os backups`{.action}.

Quando surgir a lista dos backups, clique no botão `...`{.action} à direita do backup escolhido e em `Restaurar o backup`{.action}.

![clouddb](images/private-sql-restore01.png){.thumbnail}

> [!warning]
>
> O restauro implica a supressão do conteúdo da base de dados e, por conseguinte, uma potencial perda de dados. Caso não tenha a certeza do que está a fazer, sugerimos que efetue um backup antes.
> 

#### 2. Importar um backup local

Clique no botão `...`{.action} à direita da base de dados e, a seguir, em `Importar um ficheiro`{.action}.

![clouddb](images/private-sql-import01.png){.thumbnail}

***Tem duas possibilidades ao seu dispor:***

#####  2.1\. Importar um novo ficheiro

Clique em **«Importar um novo ficheiro»** e em `Seguinte`{.action}.

Introduza um nome para o ficheiro importado. Clique em `Percorrer`{.action} para o selecionar, em `Enviar`{.action} e, por fim, em `Seguinte`{.action}.

> [!warning]
>
> O ficheiro deve estar no formato ".sql", ".txt" ou ".gz".
> 

![clouddb](images/private-sql-import02.png){.thumbnail}

Se desejar, selecione as opções **«Limpar a base de dados atual»** antes da importação e **«Enviar um e-mail no fim da importação** para ser informado da conclusão da operação no endereço de e-mail de referência da sua conta OVHcloud. Por fim, clique em `Validar`{.action}.

##### 2.2\. Utilizar um ficheiro existente

Se já importou um ficheiro anteriormente, poderá escolher a opção **«Importar um ficheiro existente»**.

Selecione o ficheiro no menu suspenso e clique em `Seguinte`{.action}.

![clouddb](images/private-sql-import03.png){.thumbnail}

Se desejar, selecione as opções **«Limpar a base de dados atual»** antes da importação e **«Enviar um e-mail no fim da importação** para ser informado da conclusão da operação no endereço de e-mail de referência da sua conta OVHcloud. Por fim, clique em `Validar`{.action}.

### Importação de bases de dados MySQL ou MariaDB fora da Área de Cliente

Em certos casos, a RAM disponível no seu servidor de bases de dados não permite realizar a importação desejada fora da Área de Cliente. Se isso lhe acontecer, recomendamos que utilize a ferramenta OVHcloud disponível na Área de Cliente. Consulte a secção [«Restaurar e importar uma base de dados a partir da Área de Cliente»](./#restaurar-e-importar-uma-base-de-dados-a-partir-da-area-de-cliente){.external} deste guia.


#### Importar uma base MySQL ou MariaDB a partir do phpMyAdmin

Para importar uma base de dados diretamente a partir do phpMyAdmin, antes de mais tem de se conectar a ela. Consulte a secção [«Conexão a uma base de dados MySQL ou MariaDB»](https://docs.ovh.com/pt/clouddb/conexao-base-de-dados-servidor-bdd/#conexao-a-uma-base-de-dados-mysql-ou-mariadb){.external}.

Depois de se ter conectado ao phpMyAdmin, clique no nome da base de dados.

De seguida, clique no separador `Importar`{.action}.

Selecione o ficheiro de backup clicando em `Percorrer`{.action} (atenção: o ficheiro não pode ultrapassar os 100 MB).

> [!primary]
>
> Caso exceda os 100 MB, recomendamos que fracione a base de dados em vários ficheiros e que efetue uma série de importações a partir do phpMyAdmin.<br>
> A importação de ficheiros que ultrapassem os 100 MB pode ser feita a partir da Área de Cliente. Para isso, consulte o guia [«Restaurar e importar uma base de dados a partir da Área de Cliente»](./#restaurar-e-importar-uma-base-de-dados-a-partir-da-area-de-cliente). 

Deixe as opções predefinidas e clique em `Executar`{.action} para lançar a importação.

![clouddb](images/private-sql-import04.png){.thumbnail}

#### Importar uma base MySQL ou MariaDB a partir da linha de comandos

Esta ação só é possível em [SSH](https://docs.ovh.com/pt/hosting/partilhado_o_ssh_nos_alojamentos_partilhados/){.external} a partir de um alojamento partilhado OVHcloud.

```bash
cat nome_da_base.sql | mysql --host=servidor --user=utilizador --port=port --password=password nome_da_base
```
#### Importar uma base MySQL ou MariaDB a partir de um script PHP

```php
1. <?php
2. echo "O restauro da sua base está em curso.......<br>";
3. system("cat nome_da_base.sql | mysql --host=servidor --user=utilizador --port=port --password=password nome_da_base");
4. echo "Concluído. A base está instalada neste alojamento.";
5. ?>
```

> [!warning]
>
> - De modo a evitar acessos indesejados a este ficheiro com dados sensíveis, proteja-o recorrendo ao guia [«O SSH nos alojamentos partilhados».](https://docs.ovh.com/gb/en/hosting/how_to_password_protect_a_directory_on_your_website/){.external}
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.
>

### Importação de bases de dados PostgreSQL fora da Área de Cliente

Em certos casos, é possível que a RAM disponível no seu servidor de bases de dados não permita realizar a importação desejada. Se isso lhe acontecer, recomendamos que utilize a ferramenta OVHcloud disponível na Área de Cliente. Consulte a secção [«Restaurar e importar uma base de dados a partir da Área de Cliente»](./#restaurar-e-importar-uma-base-de-dados-a-partir-da-area-de-cliente){.external} deste guia.

#### Importar uma base PostgreSQL a partir da linha de comandos

Esta ação só é possível em [SSH](../partilhado_o_ssh_nos_alojamentos_partilhados/){.external} a partir de um alojamento partilhado OVHcloud em versão estável ou superior.

```bash
psql --host=servidor --port=port --user=utilizadorr --password=password nome_da_base < nome_da_base.sql
```

#### Importar uma base PostgreSQL a partir de um script PHP

```php
1. <?php
2. echo "O restauro da sua base está em curso.......<br>";
3. system("PGPASSWORD=palavra-passe psql --host=servidor --port=port --user=utilizador --password=password nome_da_base < nome_da_base.sql");
4. echo "Concluído. A base está instalada neste alojamento.";
5. ?>
```

> [!warning]
>
> - De modo a evitar acessos indesejados a este ficheiro com dados sensíveis, proteja-o recorrendo ao guia [«O SSH nos alojamentos partilhados».](https://docs.ovh.com/gb/en/hosting/how_to_password_protect_a_directory_on_your_website/){.external}
> - Esta operação só é possível a partir de um alojamento partilhado OVHcloud.
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.

