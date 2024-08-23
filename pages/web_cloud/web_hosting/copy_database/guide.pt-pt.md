---
title: "Duplicar o conteúdo de uma base de dados em outra"
excerpt: "Saiba como copiar o conteúdo de uma base de dados OVHcloud para outra base de dados OVHcloud"
updated: 2023-11-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A sua base de dados é um elemento central na construção do seu website dinâmico. Durante o ciclo de vida do seu website, e por razões práticas ou técnicas, pode ter de copiar o conteúdo da sua base de dados para outra das suas bases de dados [start SQL](/links/web/hosting-options-startsql) ou [Web Cloud Databases](/links/web/databases).

**Saiba como copiar o conteúdo de uma base de dados OVHcloud para outra base de dados OVHcloud.**

> [!primary]
>
> Com esta funcionalidade, as bases de dados não são movidas, mas sim copiadas. De facto, a base de dados original não é eliminada automaticamente, ao contrário de um processo de migração. Apenas o conteúdo da base de dados de origem é duplicado para ser copiado para a base de dados de destino.
>

## Requisitos

- Dispor de ofertas de bases de dados [start SQL](/links/web/hosting-options-startsql) e/ou [Web Cloud Databases](/links/web/databases). As duas bases de dados em causa devem ser previamente criadas para poderem utilizar a ferramenta de duplicação.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)
- Dispor de direitos suficientes sobre o conjunto dos serviços de base de dados em causa. Encontre mais informações no nosso guia [Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts).

## Instruções

Antes de começar, certifique-se de que:

- O seu **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL, etc.) é o mesmo para as suas duas bases de dados (origem e destino).
- A versão do seu DBMS é a mesma para as suas duas bases de dados (origem e destino). Embora a cópia possa funcionar com versões diferentes, é aconselhável usar as mesmas versões.
- O conteúdo da base de dados de origem não deve exceder a dimensão da base de dados de destino.

### Identificar a minha base de dados de origem

Esta funcionalidade está disponível para cópia: 

- de uma base de dados [Start SQL](/links/web/hosting-options-startsql) (incluída em alguns dos nossos [alojamentos web](/links/web/hosting) ou [encomendada em separado](/links/web/hosting-options-startsql));
- de uma base de dados presente num servidor [Web Cloud Databases](/links/web/databases) (incluída nos nossos [alojamentos Performance](/links/web/hosting-performance-offer) ou [encomendada em separado](/links/web/databases)). 

Dependendo da sua situação, o caminho para aceder à base de dados de origem é diferente.

#### Base de dados Start SQL

Na sua [Área de Cliente OVHcloud](/links/manager), selecione `Web Cloud`{.action} no menu no topo da interface. Na coluna da esquerda, aceda ao separador `Alojamentos`{.action} e clique no alojamento web onde se encontra a base de dados de origem cujo conteúdo deve ser copiado.

![Lista dos alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/web-hosting-selection.png){.thumbnail}

Ao clicar no separador `Bases de dados`{.action}, será apresentada uma lista das suas bases de dados Start SQL.

![Lista das BDD Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}

#### Web Cloud Databases

Na sua [Área de Cliente OVHcloud](/links/manager), selecione `Web Cloud`{.action} no menu no topo da interface. Na coluna da esquerda, aceda ao separador `Web Cloud Databases`{.action} e selecione o servidor Web Cloud Databases onde se encontra a base de dados de origem cujo conteúdo deve ser copiado.

![Lista dos servidores WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/wcdb-server-selection.png){.thumbnail}

Ao clicar no separador `Bases de dados`{.action}, será apresentada uma lista das bases de dados presentes no servidor Web Cloud Databases.

![Lista das BDDs WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}

### Copiar o conteúdo de uma base de dados

Ainda no separador `Bases de dados`{.action}, e qualquer que seja a sua oferta, clique no botão `...`{.action} à direita da linha correspondente à base de dados cujo conteúdo pretende copiar e, a seguir, selecione `Copiar a base de dados`{.action}".

![CTA_copiar_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}

Aparecerá uma janela a fim de identificar a base de dados de destino.

![Interface copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}

Se você não tiver um banco de dados de destino e nos mostrar a captura de tela abaixo, clique no link presente para comprar um novo banco de dados:

![Lista das BDDs WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-link-to-buy-db.png){.thumbnail}

Poderá escolher entre comprar uma oferta "[start SQL](/links/web/hosting-options-startsql)" ou um servidor de bases de dados "[Web Cloud Databases](/links/web/databases)".

> [!primary]
>
> Quando adquire uma nova base de dados, esta não é ativada de forma predefinida. Não se esqueça de a ativar. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
> 
> - Para uma base de dados "Shared SQL": siga o nosso guia "[Criar uma base de dados no alojamento web](/pages/web_cloud/web_hosting/sql_create_database)";
> - Para uma base de dados que estará presente num servidor "Web Cloud Databases": siga o nosso guia "[Criar uma base de dados num servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>

Se você já tiver um banco de dados de destino, escolha primeiro o tipo:

- `Copiar para uma base de dados`{.action}: se deseja copiar o conteúdo da sua base de dados fonte para uma base de dados **Start SQL** (destino).
- `Copiar para um Web Cloud Databases`{.action}: se deseja copiar o conteúdo da sua base de dados source para uma base de dados **Web Cloud Databases** (destino).

#### Escolha 1 - Copiar para uma base de dados Start SQL

Acaba de selecionar `Copiar para uma base de dados`{.action}. Aparecem duas listas suspensas. Clique na primeira e selecione o alojamento web em que se encontra a sua base de dados Start SQL de destino. Depois de selecionar o alojamento web, clique na segunda lista pendente para escolher a base de dados Start SQL de destino.

Clique em `Seguinte`{.action}. Surge a seguinte mensagem de confirmação:

![Mensagem de confirmação copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Se não pretender substituir a base de dados de destino escolhida, clique em `Anterior`{.action} para alterar a sua escolha ou em `Cancelar`{.action} para cancelar tudo. Caso contrário, clique em `Validar`{.action} para confirmar a duplicação do conteúdo da base de dados de origem para a base de dados de destino.

Surge a seguinte mensagem de confirmação:

![Mensagem de sucesso BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-copied-successfull.png){.thumbnail}

A cópia da base de dados pode demorar alguns minutos. Para verificar se a cópia foi registada, aceda ao separador `Operações em curso`{.action}. Na tabela, é apresentada uma nova linha para a cópia com um estado "planeado". Quando a operação for concluída, a linha desaparecerá.

![Tarefas em curso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

#### Escolha 2 - Copiar para uma base de dados presente num servidor Web Cloud Databases

Acaba de selecionar `Copiar para um Web Cloud Databases`{.action}. Aparecem duas listas suspensas. Clique na primeira e selecione o serviço Web Cloud Databases em que se encontra a base de dados de destino. Uma vez selecionada a oferta Web Cloud Databases, clique na segunda lista pendente para escolher a base de dados de destino presente no servidor Web Cloud Databases.

Clique em `Seguinte`{.action}. Surge a seguinte mensagem de confirmação:

![Mensagem de confirmação copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Se não pretender substituir a base de dados de destino escolhida, clique em `Anterior`{.action} para alterar a sua escolha ou em `Cancelar`{.action} para cancelar tudo. Caso contrário, clique em `Validar`{.action} para confirmar a duplicação do conteúdo da base de dados de origem para a base de dados de destino.

A cópia da base de dados pode demorar alguns minutos. Para verificar se a cópia foi registada, aceda ao separador `Operações em curso`{.action}. Na tabela, é apresentada uma nova linha para a cópia com um estado "planeado". Quando a operação for concluída, a linha desaparecerá.

![Tarefas em curso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

### Configurar o seu website com a sua nova base de dados

Depois de efetuar a cópia da base de dados de origem, deverá realizar uma última ação se pretender utilizar a nova base de dados.

No separador `Operações em curso`{.action}, certifique-se de que a cópia foi concluída (a linha correspondente à sua cópia desapareceu).

Para ligar a nova base de dados ao seu website, edite o ficheiro de configuração do seu **C**ontent **M**anagement **S**ystem (**CMS**) e introduza as informações de ligação da nova base de dados.

> [!warning]
>
> Antes de o alterar, recomendamos que efetue uma cópia do ficheiro de configuração do seu website. Este é o seguro de poder substituir a nova versão do ficheiro com a antiga em caso de falha de configuração.

Por exemplo, se utilizar o WordPress, terá de modificar o ficheiro de configuração *wp-config.php* presente na raiz da pasta do seu WordPress, no espaço de armazenamento (FTP) do seu alojamento, e atualizar os seguintes campos:

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

Para obter mais informações ou se utilizar outro CMS, consulte o nosso guia [Alterar a palavra-passe da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> A cópia da sua base de dados não é uma migração. A base de dados original continua a existir até que a elimine. Assim, poderá sempre reconfigurar o seu website com a sua antiga base de dados.
>

### Casos de utilização

Durante o processo de cópia do conteúdo da base de dados, poderá encontrar dificuldades.

#### Não aparece nenhuma base de dados na lista

Esta notificação significa que dispõe de apenas uma base de dados ativa. Para copiar a base de dados de origem, é também necessário um banco de dados de destino ativo. Para isso, pode:

- Configurar uma nova base de dados disponível no seu alojamento web;
- Configurar uma nova base de dados no seu servidor [Web Cloud Databases](/links/web/databases);
- Encomendar uma oferta "[start SQL](/links/web/hosting-options-startsql)" ou um servidor de bases de dados "[Web Cloud Databases](/links/web/databases)"

#### Já tem uma ação em curso

Esta mensagem significa que uma tarefa já está em curso na base de dados. Aceda ao separador `Operações em curso`{.action} e verifique que tem uma operação já em curso. Se for o caso, aguarde até que a operação esteja concluída para recomeçar a cópia da base de dados, se necessário.

#### A base de dados de destino não contém espaço suficiente

A sua base de dados de destino não contém espaço suficiente. Pode usufruir de duas soluções:

- Encomendar uma nova base de dados [start SQL](/links/web/hosting-options-startsql) com mais espaço.
- Se possui um servidor [Web Cloud Databases](/links/web/databases), Mude para uma oferta Web Cloud Databases que dispõe de mais espaço de armazenamento.

#### As bases de dados de origem e de destino são incompatíveis

Esta notificação significa que o **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) da sua base de dados de origem não é o mesmo que o DBMS da sua base de dados de destino.

Por exemplo, este erro pode ocorrer quando utiliza MySQL para a sua base de dados source e PostgreSQL para a sua base de dados de destino.

## Quer saber mais?

[Aceder à Área de Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Fazer cópia de segurança e exportar uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurar e importar uma base de dados no servidor de bases de dados](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Obter a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export)

[Importar um backup para a base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).