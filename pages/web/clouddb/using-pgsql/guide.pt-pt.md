---
title: Comecar com PostgreSQL
slug: comecar-com-postgresql
excerpt: Utilize as suas bases de dados
section: 'Primeiros passos'
order: 03
---

Deseja utilizar PostgreSQL? Descubra como criar e gerir facilmente as suas bases de dados!


## Generalidades

### Pre-requisitos

- Uma instância CloudDB
- Ter consultado [o guia CloudDB](../comecar-com-clouddb/)

### O que e uma base de dados PostgreSQL ?
PostgreSQL é um sistema de gestão de bases de dados relacionais e de objetos (SGBDRO). Trata-se de um sistema robusto e extensível, capaz de manipular com total fiabilidade grandes volumes de dados. Dispõe igualmente de uma comunidade opensource bastante ativa.


## Ligacao a base de dados


> [!primary]
>
> Há que ter em consideração que esta oferta não dá acesso ao Host, mas sim às bases de dados alojadas. Os comandos SQL genéricos funcionam sem qualquer problema, e os softwares do tipo HeidiSQL ou SQuirreL SQL são perfeitamente compatíveis.
> 

De forma a poder ligar-se à base de dados, assegure-se que:

- Dispõe do endereço da sua instância de base de dados
- Dispõe da porta da sua base de dados
- Dispõe do nome do utilizador da sua base de dados
- Dispõe da password da sua base de dados
- Dispõe do nome da sua base de dados

Todas estas informações estão disponíveis no seu [Espaço Cliente Web](https://www.ovh.com/manager/web/){.external}.

Está igualmente disponível um guia : [CloudDB - primeira utilização](../starting_with_clouddb/guide.pt-pt.md){.ref}


### Ligacao atraves de linha de comandos

```bash
psql --host=servidor --port=port --user=utilizador --password=password nome_da_base
```


### Ligacao atraves de um script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Ligacao atraves de um software (SQuirreL SQL)
- Inicie o SQuirreL SQL e clique em `Aliases`{.action}, e depois em `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Preencha os campos em baixo e valide com o botão `OK`{.action} :
    - **Name**: Escolha um nome
    - **Driver**: Escolha "PostgreSQL"
    - **URL**: Indique o endereço do servidor e a porta sob a forma jdbc:postgresql://server:port/database
    - **User Name**: Indique o nome do utilizador
    - **Password**: Indique a password


![config connection](images/2.PNG){.thumbnail}

- Valide novamente com o botão `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Está atualmente ligado à sua base de dados:


![config connection](images/4.PNG){.thumbnail}


### Ligacao atraves de phppgAdmin
*Em breve disponível num outro guia.*


## Exportar uma base de dados PostgreSQL

### Exportar a minha base de dados atraves de linha de comandos

```bash
pg_dump --host=servidor --port=port --user=utilizadxor --password=password nome_da_base > nome_da_base.sql
```


## Importar uma base de dados PostgreSQL

### Importar a minha base de dados atraves de linha de comandos

```bash
psql --host=servidor --port=port --user=utilizador --password=password nome_da_base < nome_da_base.sql
```

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 