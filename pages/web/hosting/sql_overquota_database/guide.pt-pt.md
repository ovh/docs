---
title: "Tutorial - O que fazer quando a minha base de dados está saturada?"
slug: database-overquota
excerpt: "Descubra como agir quando a base de dados está sobrecarregada"
section: 'Bases de dados'
order: 06
---

**Última atualização: 23/01/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Uma base de dados permite, por exemplo, armazenar informações relativas ao seu website e ao seu funcionamento. Estas informações estão estruturadas para que o seu website aceda facilmente a elas, o que permite uma consulta otimizada e personalizada para os utilizadores/visitantes do seu website. 

Durante a sua utilização, uma base de dados pode adquirir, modificar ou eliminar informações (dados de ligação, dados de utilizadores, dados de visualização, dados necessários ao bom funcionamento do seu website, etc.). 

Em certos casos, a base de dados regista uma quantidade de informações tão elevada que dá origem a uma saturação do espaço de armazenamento que lhe é atribuído. Quando a base de dados está saturada, fala-se de **overquota**.

Este tutorial propõe-lhe as ações a empreender quando a sua base de dados partilhada OVHcloud está próxima da saturação ou já está em **overquota**.

**Descubra como agir quando a base de dados está sobrecarregada.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter um [serviço de alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) com uma base de dados partilhada da OVHcloud associada.
  
## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

Quando a sua base de dados partilhada da OVHcloud chega a saturação (**overquota**), os nossos robôs avisam-no por e-mail no endereço de e-mail do [contacto "Administrador"](https://docs.ovh.com/pt/customer/gestao_dos_contactos/) da base de dados. 

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

Obtenha a palavra-passe de acesso à sua base de dados diretamente no ficheiro de configuração do seu website. Para isso, utilize o **etapa 1** do nosso manual sobre [a alteração da palavra-passe de uma base de dados](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-base-de-dados/).

Ligue-se ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione `Web Cloud`{.action} na barra de navegação no topo do ecrã. Clique em `Alojamentos`{.action} e escolha o alojamento web associado à sua base de dados partilhada OVHcloud. Por fim, clique no separador `Bases de dados`{.action}.

![phpMyAdmin Access](images/pma_access.png){.thumbnail}

Ainda no separador `Bases de dados`{.action}, clique no botão `...`{.action} à direita da base de dados que está saturada e depois sur `Acceder a phpMyAdmin`{.action}.

![phpMyAdmin Go Login](images/pma_interface.png){.thumbnail}

Introduza a password de acesso à sua base de dados para além das informações pré-preenchidas e clique em `Executar`{.action}.

#### 1.2 - Pesquisar as tabelas mais volumosas

> [!alert]
>
> A partir de agora, intervém diretamente sobre o conteúdo da sua base de dados. As manipulações que realiza no phpMyAdmin podem ter consequências irreversíveis se estas não forem realizadas corretamente.
>
> Certifique-se de que as suas operações são efetuadas. Se tiver alguma dificuldade, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). A OVHcloud não lhe poderá fornecer assistência relativamente ao conteúdo da sua base de dados.
>

Uma vez ligado, aparecerá a seguinte página:

![phpMyAdmin Login](images/pma_login.png){.thumbnail}

Clique em `"Nome da sua base de dados"`{.action} na coluna da esquerda, depois em `Taille`{.action} no canto superior direito da tabela que aparece:

![phpMyAdmin Tables](images/pma_show_table.png){.thumbnail}

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

Consulte a nossa oferta de bases de dados [Cloud Databases](https://www.ovh.pt/cloud/cloud-databases/) para escolher o seu novo serviço de base de dados. 

Recomendamos esta oferta para bases de dados volumosas.

De seguida, siga os nossos guias para mover o conteúdo da sua antiga base de dados para a nova:

- [Exportar a sua base de dados existente](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/)
- [Primeiros passos com a oferta Cloud Databases](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/)
- [Importar a sua antiga base de dados para o serviço Cloud Databases](https://docs.ovh.com/pt/clouddb/restaurar-importar-base-de-dados/)

#### Caso n.º 2 - Não é necessária uma parte ou a totalidade do conteúdo da tabela volumosa para o funcionamento do seu site

Antes de efetuar o seguinte, verifique se os dados contidos na tabela volumosa correspondem a elementos que podem ser eliminados a partir do espaço de administração do seu CMS. 

**Exemplos**:

- antigos comentários/posts;
- elementos presentes no menu `Caixote do lixo` do seu CMS;
- dados associados a um antigo tema e/ou plugin.

> [!alert]
>
> O resto deste manual explica-lhe como eliminar dados presentes na sua base de dados. Em caso de dúvida, certifique-se de que está a fazer ou a contactar um [fornecedor especializado](https://partner.ovhcloud.com/pt/).
>

As bases de dados partilhadas da OVHcloud dispõem de vários comandos SQL para agir sobre o seu conteúdo.

No caso de uma overquota ou de uma tabela volumosa, estão disponíveis **três comandos**.

Pode efetuar diretamente estes pedidos a partir da interface **phpMyAdmin**, através do separador `SQL`{.action}:

![phpMyAdmin SQL request](images/pma_sql_request.png){.thumbnail}

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

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 