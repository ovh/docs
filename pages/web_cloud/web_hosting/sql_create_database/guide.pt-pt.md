---
title: "Criar uma base de dados num alojamento web"
excerpt: "Saiba como criar uma base de dados no seu alojamento web OVHcloud"
updated: 2024-05-17
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Uma base de dados (BDD) é utilizada para armazenar elementos dinâmicos (dados de ligação, dados dos utilizadores, dados de visualização, dados necessários ao bom funcionamento do seu website, etc.). Estas bases de dados são utilizadas na maior parte dos sistemas de gestão de conteúdos (CMS) modernos, tais como *WordPress*, *Joomla!*, *Drupal* ou *PrestaShop*.

**Saiba como criar uma base de dados no seu alojamento web OVHcloud**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](/links/web/hosting) que inclua, pelo menos, uma base de dados.
- Dispor de uma base de dados disponível "criação" entre as que estão incluídas na sua oferta de alojamento web. Se necessário, pode adicionar bases de dados [Start SQL](/links/web/hosting-options-startsql) ao seu alojamento web.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager) com as [autorizações necessárias](/pages/account_and_service_management/account_information/managing_contacts) para gerir o seu alojamento web.

## Instruções

### Etapa 1 - Aceder ao separador de gestão das bases de dados de um alojamento web

Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda, escolha o alojamento que pretende criar e clique no separador `Bases de dados`{.action}.

A tabela desta secção contém todas as bases de dados criadas com o seu alojamento web.

![databasecreation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

Na tabela, as bases de dados podem ter vários Status diferentes:

- **Incluída**: indica que a base de dados está incluída na sua oferta de alojamento web. Não implica custos adicionais.</br></br>
- **Opcional** : indica que a base de dados foi subscrita em complemento das bases de dados incluídas com o seu alojamento web. Paga um complemento para dispor desta base de dados suplementar no seu alojamento web.</br></br>
- **Incluída - retirada da venda**: indica que a base de dados incluída será em breve retirada da venda e tornar-se-á obsoleta. </br>Antes de o banco de dados se tornar obsoleto, recomendamos que recupere o seu conteúdo para o colocar numa nova base de dados mais recente (cujo escoamento ainda não está agendado para terminar).</br></br>
- **Opcional - retirada da venda** : indica que a base de dados subscrita em complemento do seu alojamento web ficará em breve retirada da venda e tornar-se-á obsoleta. </br>Antes de o banco de dados se tornar obsoleto, recomendamos que recupere o seu conteúdo para o colocar numa nova base de dados mais recente (cuja venda ainda não está agendada para terminar).

> [!success]
>
> Para duplicar rapidamente o conteúdo de uma base de dados "**Incluída - retirada da venda**" ou "**Opcional - retirada da venda**" numa nova base de dados cuja obsolescência ainda não está programada, consulte o guia "[Duplicar o conteúdo de uma base de dados OVHcloud noutra](/pages/web_cloud/web_hosting/copy_database)".
>

### Etapa 2 - Criar a base de dados

Pode criar uma nova base de dados de duas formas:

- **Se ainda não tiver criado uma base de dados** : clique no botão `Criar uma base de dados`{.action}.

- **Se já tiver criado uma base de dados** : clique no botão `Ações`{.action} e, a seguir, em `Criar uma base de dados`{.action}.

Na nova janela, selecione as seguintes informações:

![database-creation-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-1.png){.thumbnail}

|Informação|Descrição|  
|---|---| 
|**Selecione o tipo de base de dados**|Selecione o tamanho da base de dados. Este tamanho refere-se ao espaço de que a sua base de dados dispõe para o armazenamento de dados.
|**Selecione o motor da base de dados a adicionar**|Selecione o motor que pretende que a base de dados utilize. As bases de dados incluídas no seu [plano de alojamento web da OVHcloud](/links/web/hosting) só estão disponíveis com o motor MySQL.|
|**Selecione a versão da base de dados adicionar**|Selecione a versão utilizada pelo motor da base de dados. Certifique-se de que o seu website é compatível com a versão que escolheu.|

De seguida, clique em `Seguinte`{.action}.

Ser-lhe-á exibida uma nova janela:

![database-creation-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-2.png){.thumbnail}

|Informação|Descrição|
|---|---| 
|**Nome de utilizador**|Introduza um nome de utilizador que ficará associado à sua base de dados (máximo de 6 caracteres, para além do prefixo de utilizador indicado).|
|**Palavra-passe**|Introduza uma palavra-passe para este utilizador seguindo os *critérios* abaixo mencionados.|
|**Confirmação**|Volte a introduzir a palavra-passe para este utilizador.|

> [!primary]
>
> Por razões de segurança, siga as condições necessárias aquando da criação da sua palavra-passe.
>
> Também recomendamos que:
>
> - definir uma palavra-passe diferente para cada um dos seus serviços;
> - criar uma palavra-passe que não contenha informações pessoais (nome, sobrenome, data de nascimento, etc.);
> - renovar a sua palavra-passe regularmente;
> - não manter registos escritos da sua palavra-passe nem enviá-la a outras pessoas (incluindo através do seu endereço de e-mail);
> - não guarde a sua palavra-passe no seu browser, mesmo que o seu browser lhe proponha fazê-lo.
>

> [!warning]
>
> Lembre-se de que, se alterar a palavra-passe de uma base de dados, todas as aplicações que acedam à base de dados deverão ser atualizadas em conformidade.
>

Preencha as informações necessárias e clique em `Seguinte`{.action}.

![database-creation-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-3.png){.thumbnail}

Certifique-se de que todas as informações apresentadas no resumo estão corretas. Se for o caso, clique em `Validar`{.action} para lançar a criação da sua base de dados.

> [!primary]
>
> Quando clicar em `Validar`{.action}, a criação da base de dados pode demorar até **15 minutos**. Recarregue a página web do seu [Área de Cliente OVHcloud](/links/manager) se a base de dados não aparecer automaticamente no quadro que lista as suas bases de dados.
>

Repita este processo as vezes que desejar a fim de criar várias bases de dados (no limite das bases de dados disponíveis na sua solução).

> [!warning]
>
> Depois de validada a criação da base de dados, o nome do utilizador e o nome da base de dados não podem ser alterados.
>

### Etapa 3 - Gerir a sua base de dados <a name="step3"></a>

> [!warning]
>
> Este guia não substitui a assistência de um profissional em desenvolvimento. Recomendamos que, caso de precise de ajuda, recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do software da sua solução. A OVHcloud não poderá fornecer-lhe qualquer assistência a este respeito. Para mais informações, consulte a secção ["Quer saber mais?"](#go-further) deste guia.
>

Agora pode utilizar a sua base de dados. Para isso, precisará das suas informações de início de sessão:

- o *nome de utilizador* e o *palavra-passe* por si definidos,
- o *nome da base de dados* que indicou,
- o *endereço do servidor*.

> [!primary]
>
> Se lhe for pedido e qualquer que seja a base de dados [Start SQL](/links/web/hosting-options-startsql) adicionada ou incluída no seu alojamento web OVHcloud, o número de **port** a utilizar é o **3306**.
>

Estas informações são essenciais para que o seu website possa ligar-se à base de dados.

Se necessário, para recuperar estas informações de ligação, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda, escolha a oferta de alojamento para a qual pretende recuperar as informações de ligação à base de dados e clique no separador `Bases de dados`{.action}.

Consulte a tabela que se apresenta para ver o conjunto das informações de ligação à sua base de dados. Isto exceto para a *palavra-passe*, por motivos de segurança.

> [!warning]
>
> Se já não se lembrar da palavra-passe de início de sessão da base de dados, consulte o guia "[Alterar a palavra-passe da base de dados](/pages/web_cloud/web_hosting/sql_change_password)".
>

Em função do software utilizado, é possível que esta ligação tenha de ser configurada manualmente ou através de uma interface gerida pela interface de configuração (backend) do website. Uma vez que este procedimento diz respeito à configuração do seu website e não ao seu alojamento OVHcloud, recomendamos que consulte os recursos disponíveis online ou que recorra a um [fornecedor especializado](/links/partner).

> [!primary]
>
> As bases de dados associadas ao seu alojamento web só estão acessíveis através de uma aplicação ou de um script diretamente instalado no seu alojamento web ou através da interface phpMyAdmin.
>

#### Aceder à interface phpMyAdmin

A OVHcloud fornece uma ferramenta online para a gestão das bases de dados, "phpMyAdmin". Para encontrar o link de acesso a esta aplicação, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda, escolha a oferta de alojamento para a qual pretende recuperar as informações de ligação à base de dados e clique no separador `Bases de dados`{.action}. No quadro que se abrir, clique no botão `...`{.action} à direita da base de dados em causa e, a seguir, clique em `Aceder ao phpMyAdmin`{.action} no menu pendente.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Introduza as informações de acesso à sua base de dados e depois clique em `Entrada`{.action}.

Caso seja necessário, consulte a [etapa 3](#step3) deste guia para encontrar as informações de ligação à sua base de dados.

#### Utilizar os backups das bases de dados

Para cada base de dados de alojamento web, são criadas snapshots automaticamente todos os dias (até um máximo de 32). Assim, pode restaurar rapidamente uma versão anterior de uma base de dados a partir da sua Área de Cliente OVHcloud.

Para verificar as snapshots disponíveis, bem como a data e a hora de criação, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda, escolha a oferta de alojamento sobre a qual deseja consultar as snapshots disponíveis para a base de dados e, a seguir, clique no separador `Bases de dados`{.action}. Na tabela que vai aparecer, clique no símbolo junto do círculo verde. Pode igualmente descarregar cada backup de uma base de dados a partir desse mesmo local. Encontre mais informações sobre este assumpto no nosso guia "[Obter a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export)".

#### Compreender os problemas mais comuns

**Demasiadas ligações**

As bases de dados de alojamento web são limitadas a 30 ligações simultâneas (variável do sistema *max_connections*). Os pedidos SQL devem, portanto, ser otimizados para evitar este tipo de erros. Se, apesar de tudo, os problemas persistirem, devem ser consideradas medidas alternativas. Por exemplo, pode migrar a sua base de dados numa base de dados [Web Cloud Databases](/links/web/databases) ou ainda realizar uma [atualização da sua oferta de alojamento web](/links/web/hosting-best-web).

**Erros de ligação / "não encontrado"**

Aparece normalmente quando não se utiliza o nome real da base de dados no ficheiro de ligação à base de dados presente no seu website.

A melhor prática consiste em utilizar sempre o nome real da base de dados para os scripts e os ficheiros de configuração, em vez dos endereços IP ou do _localhost_.

**Limite excedido para as bases de dados**

Se uma base de dados de alojamento web ultrapassar o espaço de armazenamento recomendado, passará automaticamente para "Apenas leitura"/"Apenas Seleção". O administrador receberá uma notificação por e-mail.

Depois de a base de dados ter sido otimizada (eliminada), recalcule a sua quota na Área de Cliente OVHcloud para a desbloquear novamente. Encontre mais informações sobre este assumpto no nosso guia "[O que fazer quando a quota de armazenamento da minha base de dados for ultrapassada?](/pages/web_cloud/web_hosting/sql_overquota_database)"

## Quer saber mais? <a name="go-further"></a>

[Alterar a palavra-passe da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_change_password)

[Obter a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export)

[Importar um backup para a base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

[Otimizar as performances do seu website](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).