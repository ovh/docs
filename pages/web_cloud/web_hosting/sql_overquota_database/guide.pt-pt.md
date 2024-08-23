---
title: "Alojamento web: a minha base de dados está saturada, o que fazer?"
excerpt: "Saiba como agir quando a base de dados está sobrecarregada"
updated: 2023-12-13
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Uma base de dados permite, por exemplo, armazenar informações relativas ao seu website e ao seu funcionamento. Estas informações estão estruturadas para que o seu website aceda facilmente a elas, o que permite uma consulta otimizada e personalizada para os utilizadores/visitantes do seu website. 

Durante a sua utilização, uma base de dados pode adquirir, modificar ou eliminar informações (dados de ligação, dados de utilizadores, dados de visualização, dados necessários ao bom funcionamento do seu website, etc.). 

Em certos casos, a base de dados regista uma quantidade de informações tão elevada que dá origem a uma saturação do espaço de armazenamento que lhe é atribuído. Quando a base de dados está saturada, fala-se de **overquota**.

Este tutorial propõe-lhe as ações a empreender quando a sua base de dados partilhada OVHcloud está próxima da saturação ou já está em **overquota**.

**Saiba como agir quando a base de dados está sobrecarregada.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter um [serviço de alojamento web da OVHcloud](/links/web/hosting) com uma base de dados partilhada da OVHcloud associada.
  
## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

Quando a sua base de dados partilhada da OVHcloud chega a saturação (**overquota**), os nossos robôs avisam-no por e-mail no endereço de e-mail do [contacto "Administrador"](/pages/account_and_service_management/account_information/managing_contacts) da base de dados. 

Um primeiro e-mail é enviado quando a sua base de dados consumiu mais de **80%** da sua capacidade de armazenamento. Um segundo e-mail será enviado quando **90%** desta capacidade de armazenamento for atingida.

Quando a sua base de dados está em **overquota**, receberá um terceiro e-mail de aviso. A sua base de dados muda para "*READ ONLY*" (apenas leitura). Não pode adicionar ou alterar as entradas da sua base de dados, mas esta fica acessível em **leitura** e **supressão**. 

### Etapa 1: identificar a(s) mesa(s) volumosa(s)

Uma base de dados é constituída por uma ou várias **tabelas**, elas próprias constituídas por uma ou várias **linhas** organizadas com a ajuda de **colunas** pré-determinadas.

A primeira etapa consiste em identificar a ou as tabelas volumosas presentes na sua base de dados.

> [!primary]
>
> Todas as seguintes ações descritas neste tutorial serão realizadas a partir de **phpMyAdmin**.
>
> [phpMyAdmin](https://www.phpmyadmin.net/){.external} está disponível em todas as bases de dados partilhadas da OVHcloud.
> Esta aplicação de gestão de base de dados facilita a realização das ações manuais que pode efetuar com a sua base de dados.
>

#### 1.1 - Aceder à base de dados via phpMyAdmin

Recupere as informações de acesso à sua base de dados diretamente no ficheiro de configuração do seu website. Realize esta ação através da **etapa 1** do nosso guia sobre [a alteração da palavra-passe de uma base de dados](/pages/web_cloud/web_hosting/sql_change_password).

Aceda à [Área de Cliente OVHcloud](/links/manager) e selecione `Web Cloud`{.action} na barra de navegação no topo do ecrã. Clique em `Alojamentos`{.action} e escolha o alojamento web associado à sua base de dados partilhada da OVHcloud. Por fim, clique no separador `Bases de dados`{.action}.

Na parte inferior do ecrã será apresentada uma tabela com a lista das bases de dados.

![phpMyAdmin Access](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/go-to-phpmyadmin.png){.thumbnail}

Anote, **para a sua base de dados saturada**, o seu `Nome de utilizador` e o seu `Endereço do servidor` presentes na tabela que lista as suas bases de dados. 

Ainda no separador `Bases de dados`{.action}", clique no botão `...`{.action} à direita da base de dados que está saturada e, a seguir, em `Aceder ao phpMyAdmin`{.action}".

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Introduza as informações de acesso à sua base de dados e depois clique em `Entrada`{.action}.

#### 1.2 - Pesquisar as tabelas mais volumosas

> [!alert]
>
> A partir de agora, intervém diretamente sobre o conteúdo da sua base de dados. As manipulações que realiza no phpMyAdmin podem ter consequências irreversíveis se estas não forem realizadas corretamente.
>
> Certifique-se de que as suas operações são efetuadas. Se tiver alguma dificuldade, recomendamos que recorra a um [fornecedor especializado](/links/partner). A OVHcloud não lhe poderá fornecer assistência relativamente ao conteúdo da sua base de dados.
>

Uma vez ligado, aparecerá a seguinte página:

![phpMyAdmin Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Clique em `"Nome da sua base de dados"`{.action} na coluna da esquerda, depois em `Taille`{.action} no canto superior direito da tabela que aparece:

![phpMyAdmin Tables](/pages/assets/screens/other/web-tools/phpmyadmin/pma-check-size.png){.thumbnail}

As tabelas mais volumosas figuram no topo da tabela. Identifique-as e passe à **etapa 2**.

### Etapa 2 : determinar a utilidade do conteúdo presente na(s) mesa(s) volumosa(s)

Depois de identificar as tabelas volumosas, verifique se o conteúdo é necessário para o funcionamento do seu site.

> [!primary]
>
> Se utilizar um Content Managment System (CMS) como WordPress, Joomla!, PrestaShop ou Drupal, verifique se as suas tabelas volumosas não estão ligadas a um plugin/tema recentemente instalado ou atualizado.
>
> Neste caso, contacte o editor do plugin/tema para que este lhe comunique as ações a realizar no seu CMS.
>
 
Para os outros casos associados aos CMS, recomendamos que contacte diretamente o editor do seu CMS antes de realizar as seguintes ações.

Encontre aqui as ligações para os sites oficiais dos CMS propostos em instalação "**Em apenas um clique**" pela OVHcloud:

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://www.joomla.org){.external}
- [PrestaShop](https://www.prestashop.com/){.external}
- [Drupal](https://drupal.org){.external}

> [!primary]
>
> Se o seu site foi desenvolvido "**manualmente**" por um prestador de serviços especializado, recomendamos que contacte este último para o acompanhar.
>

### Etapa 3 : tomar medidas corretivas

Depois de determinar se o conteúdo das suas tabelas é necessário para o funcionamento do seu site, existem várias opções:

#### Caso n.º 1 - O conteúdo da tabela volumosa é necessário para o bom funcionamento do seu site

Deverá migrar a sua base de dados para uma base de dados mais volumosa.

> [!primary]
>
> Para aumentar o tamanho alocado à sua base de dados, deverá obrigatoriamente criar uma nova base de dados maior e copiar o conteúdo da antiga para a nova. De facto, não é possível aumentar diretamente o tamanho de uma base de dados associada a um alojamento web.
>

Consulte a nossa oferta de bases de dados [Web Cloud Databasess](https://www.ovh.pt/cloud/cloud-databases/) para escolher o seu novo serviço de base de dados. 

Recomendamos esta oferta para bases de dados volumosas.

É possível duplicar o conteúdo da sua base de dados OVHcloud diretamente para outra das suas bases de dados OVHcloud graças a uma funcionalidade presente na sua [Área de Cliente OVHcloud](/links/manager). Para isso, consulte o guia "[Duplicar o conteúdo de uma base de dados noutra](/pages/web_cloud/web_hosting/copy_database)".

No caso de uma migração para uma base de dados externa às ofertas [Start SQL](/links/web/hosting-options-startsql) e [Web Cloud Databases](/links/web/databases), pode migrar manualmente o conteúdo da sua antiga base de dados para uma nova através dos nossos guias:

- [Exportar a sua base de dados existente](/pages/web_cloud/web_hosting/sql_database_export)
- [Primeiros passos com a oferta Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
- [Importar a sua antiga base de dados para o serviço Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

#### Caso n.º 2 - Não é necessária uma parte ou a totalidade do conteúdo da tabela volumosa para o funcionamento do seu site

Antes de efetuar o seguinte, verifique se os dados contidos na tabela volumosa correspondem a elementos que podem ser eliminados a partir do espaço de administração do seu CMS. 

**Exemplos**:

- antigos comentários/posts;
- elementos presentes no menu `Caixote do lixo` do seu CMS;
- dados associados a um antigo tema e/ou plugin.

> [!alert]
>
> O resto deste manual explica-lhe como eliminar dados presentes na sua base de dados. Em caso de dúvida, certifique-se de que está a fazer ou a contactar um [fornecedor especializado](/links/partner).
>

As bases de dados partilhadas da OVHcloud dispõem de vários comandos SQL para agir sobre o seu conteúdo.

No caso de uma overquota ou de uma tabela volumosa, estão disponíveis **três comandos**.

Pode efetuar diretamente estes pedidos a partir da interface **phpMyAdmin**, através do separador `SQL`{.action}:

![phpMyAdmin SQL request](/pages/assets/screens/other/web-tools/phpmyadmin/pma-sql-menu.png){.thumbnail}

- A encomenda **DELETE**: 

Permite eliminar **uma ou várias linhas** de uma determinada tabela. Esta encomenda é útil se uma parte do conteúdo da tabela é necessária para o bom funcionamento do seu website.

**Exemplo**:

```sql
DELETE FROM `table_1` WHERE `id` = 1
```

> Neste exemplo, o comando suprime a ou as linhas da **table_1** cujo valor da coluna **id** é igual a **1**.

- A encomenda **TRUNCATE**: 

Permite eliminar **todas as linhas** de uma determinada tabela.

**Exemplo**:

```sql
TRUNCATE TABLE `table_1`
```

> Neste exemplo, o comando suprime todas as linhas da **table_1** sem exceção.

- A encomenda **DROP**: 

Permite suprimir completamente **uma tabela e o conjunto das linhas que contém**. Este comando não deve ser utilizado se a mesa tiver de continuar a existir.

**Exemplo**:

```sql
DROP TABLE `table_1`
```

> Neste exemplo, o comando suprime a tabela **table_1** e o conjunto das linhas que contém.

## Quer saber mais? <a name="go-further"></a>

[Duplicar o conteúdo de uma base de dados noutra](/pages/web_cloud/web_hosting/copy_database)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 