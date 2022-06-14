---
title: Comecar com MySQL e MariaDB
slug: comecar-com-mysql-e-mariadb
excerpt: Utilize as suas bases de dados
section: 'Primeiros passos'
order: 02
---

Deseja utilizar MySQL ou MariaDB? Descubra como criar e gerir facilmente as suas bases de dados!


## Generalidades

### Pre-requisitos

- Uma instância CloudDB
- Ter consultado [o guia CloudDB](../comecar-com-clouddb/).

### O que e uma base de dados MYSQL?
O MYSQL é um sistema de gestão de bases de dados relacionais desenvolvido para performances elevadas em escrita, ao contrário de outros sistemas.

Este motor é Open Source, e a sua case mãe é nada mais nada menos que a Oracle.


### O que e uma base de dados MariaDB ?
A MariaDB é uma derivação (fork) do sistema de gestão de bases de dados MySQL.

Este motor é 100% compatível, e é mais "livre" que o seu irmão mais velho MySQL. Todos os bugs e roadmaps estão acessíveis gratuitamente, ao contrário da versão da Oracle. Além disso, o motor de armazenamento InnoDB é substituído pela XtraDB e outras otimizações que prometem ganhos de performances.


## Ligacao a base de dados


> [!primary]
>
> Há que ter em consideração que esta oferta não dá acesso ao Host, mas sim às bases de dados alojadas. Os comandos SQL genéricos funcionam sem qualquer problema, e os softwares do tipo HeidiSQL ou SQuirreL SQL são perfeitamente compatíveis.
> 



> [!primary]
>
> MariaDB sendo um derivado do MySQL, os diferentes comandos são exatamente os mesmos para estes 2 tipos de bases de dados.
> 

De forma a poder ligar-se à base de dados, assegure-se que:

- Dispõe do endereço da sua instância de base de dados
- Dispõe da porta da sua base de dados
- Dispõe do nome do utilizador da sua base de dados
- Dispõe da password da sua base de dados
- Dispõe do nome da sua base de dados

Todas estas informações estão disponíveis no seu [Espaço Cliente Web](https://www.ovh.com/manager/web/){.external}.

Temos á sua disposição um guia que será útil: [CloudDB - primeira utilização](../starting_with_clouddb/guide.pt-pt.md){.ref}


### Ligacao atraves de linha de comandos

```bash
mysql --host=servidor --user=utilizador --port=port --password=password nome_da_base
```


### Ligacao em script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Ligacao a partir de um software (SQuirreL SQL)
- Inicie o SQuirreL SQL e clique em `Aliases`{.action}, e depois em `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Preencha os campos em baixo e valide com o botão `OK`{.action} :
    - **Name**: Escolha um nome
    - **Driver**: Escolha "MySQL Driver"
    - **URL**: Indique o endereço do servidor e a porta sob a forma jdbc:mysql://server:port
    - **User Name**: Indique o nome do utilizador
    - **Password**: Indique a password


![config connection](images/2.PNG){.thumbnail}

- Valide novamente com o botão `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Está atualmente ligado à sua base de dados:


![config connection](images/4.PNG){.thumbnail}


### Ligacao atraves do phpMyAdmin
- Em breve disponível num outro guia.*


## Exportar uma base de dados MySQL ou MariaDB

### Exportar a minha base de dados atraves de linha de comandos

```bash
mysqldump --host=serveur --user=utilizador --port=port --password=password nom_da_base > nome_da_base.sql
```


## Importar uma base de dados MySQL ou MariaDB

### Importar a minha base de dados atraves de linha de comandos

```bash
cat nome_da_base.sql | mysql --host=servidor --user=utilizador --port=port --password=password nome_da_base
```
