---
title: "Resolver os erros mais frequentes associados às bases de dados" 
excerpt: "Diagnosticar os casos mais comuns de erros associados às bases de dados"
updated: 2024-09-26
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Objetivo**

A utilização das suas bases de dados pode dar origem a um certo número de anomalias no seu site ou no seu [Área de Cliente OVHcloud](/links/manager), bem como na interface [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database).

**Descubra como resolver os erros associados às bases de dados sobre os alojamentos partilhados OVHcloud.**

> [!warning]
>
> A OVHcloud disponibiliza-lhe serviços cuja configuração e gestão são da responsabilidade do cliente. O cliente é o único responsável pelo seu bom funcionamento.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#go-further)?
>

## Requisitos

- Ter um [serviço de alojamento web](/links/web/hosting) OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Utilizar uma das nossas ofertas de bases de dados [Web Cloud](/links/web/hosting-options-startsql) ou [Web Cloud Databases](https://www.ovh.pt/cloud/cloud-databases/).

## Instruções

### "Error establishing a database connection"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Verificar os incidentes em curso

Em [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/), verifique primeiro se o seu datacenter, cluster de alojamento ou servidor Web Cloud Databases não está afetado por um incidente na infraestrutura OVHcloud.

> [!primary]
>
> Para encontrar estas informações, aceda à [Área de Cliente OVHcloud](/links/manager), na parte `Web Cloud`{.action}:
>
> - Para encontrar o `Datacenter` do seu alojamento, bem como o seu `Filer` (servidor de ficheiro), escolha os `Alojamentos`{.action} e, a seguir, o alojamento em causa. Encontrará estas informações no separador `Informações gerais`{.action}.
> - Para encontrar o **cluster** de servidores em que se encontra o seu alojamento, clique no separador `FTP-SSH`{.action}. Esta informação aparecerá no nome do seu `Servidor FTP`.
> - Para encontrar o nome do seu servidor **Web Cloud Databases**, clique em `Web Cloud Databases`{.action} e, a seguir, na oferta em causa. Encontrará esta informação no separador `Informações gerais`{.action}.
>

#### Verificar os dados de acesso à sua base de dados <a name="config_file"></a>

Ligue-se ao espaço de armazenamento de ficheiros com [FTP](/pages/web_cloud/web_hosting/ftp_connection) ao espaço de armazenamento de ficheiros no seu alojamento e encontre o ficheiro de configuração do seu site (por exemplo, para um site WordPress, trata-se do ficheiro **wp-config.php** situado na pasta que contém o seu site).

> [!warning]
>
> A escolha e a configuração do ficheiro com as informações de ligação à base de dados é inerente ao editor de conteúdo (CMS) em causa e não à OVHcloud.
>
> Recomendamos que contacte o editor do [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizado para criar o seu site ou que recorra a um [fornecedor especializado](/links/partner) em caso de necessidade. De facto, a OVHcloud não lhe poderá fornecer assistência.
>

De seguida, verifique a correspondência **exata** entre os identificadores de ligação ao [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#aceder-a-interface-phpmyadmin) e os do ficheiro de configuração do seu site.

Altere, se necessário, a [palavra-passe da sua base de dados](/pages/web_cloud/web_hosting/sql_change_password).

#### Exemplo para WordPress

Se o seu website apresentar uma mensagem **"Erro durante a ligação à base de dados"** e que este não é afetado por [incidente](https://web-cloud.status-ovhcloud.com/), ligue-se em [FTP](/pages/web_cloud/web_hosting/ftp_connection) ao seu alojamento e abra o diretório que contém o seu website (por predefinição, trata-se do dossier `www`).

Se se tratar de um site WordPress, abra o ficheiro `wp-config.php`.

```php
define('DB_NAME', 'my_database');

/** MySQL database username */
define('DB_USER', 'my_user');

/** MySQL database password */
define('DB_PASSWORD', 'my_password');

/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

No seu [Espaço Cliente OVHcloud](/links/manager), na parte `Alojamentos`{.action}, clique no separador `Bases de dados`{.action} e verifique a correspondência entre os elementos apresentados e os presentes no ficheiro `wp-config.php`:

- **my_database** deve corresponder ao que é notado no `Nome da base de dados`;
- **my_user** deve corresponder ao que é notado no `Nome do utilizador`;
- **my_password** corresponde à [palavra-passe da sua base de dados](/pages/web_cloud/web_hosting/sql_change_password);
- **my_server.mysql.db** deve corresponder ao que é notado no `Endereço do servidor`.

> [!primary]
>
> Se estas manipulações não lhe permitem restabelecer o acesso ao seu website, [salvaguarde a sua base de dados](/pages/web_cloud/web_hosting/sql_database_export) e depois [restaure-a numa data anterior](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server) a partir do seu [Espaço Cliente OVHcloud](/links/manager).
>
> Contacte um [fornecedor especializado](/links/partner) se necessário. De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### Excesso do limite autorizado da base de dados

Recebeu um e-mail dos nossos serviços indicando que a quantidade de dados na sua base de dados ultrapassa o limite autorizado. A sua base de dados passou então a ler sozinha. Isto impede qualquer modificação do seu site.

![database-overquota-notification-email](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

Três métodos irão permitir-lhe desbloquear a sua base de dados:

#### Método 1: passar a sua subscrição para uma oferta superior

Se dispõe de uma fórmula **Starter** ou **Perso**, aconselhamos-o a passar para a [oferta de alojamento superior](/links/web/hosting). Esta alteração de subscrição irá aumentar o tamanho da sua base de dados, o que a irá reabrir automaticamente. Este método é o mais simples e não exige qualquer competência técnica específica.

> [!warning]
>
> O aumento do tamanho da sua base de dados pode estar associado a uma falha no código interno do seu site.
>
> Uma anomalia pode provocar um aumento permanente do tamanho da sua base de dados, caso em que a alteração da oferta de alojamento não será eficaz.
>
> Se verificar um aumento súbito da dimensão da sua base de dados, ou se dispuser de um site do tipo "blog" normalmente pouco consumidor de dados, aconselhamos que contacte imediatamente um [fornecedor especializado](/links/partner). Não poderemos dar-lhe apoio nesta matéria.
>

Para efetuar esta alteração, aceda à Área de Cliente OVHcloud (/links/manager) e clique em `Alojamentos`{.action} e no alojamento em causa. Clique no botão `...`{.action} na rubrica `Oferta`, à direita do seu ecrã, e depois `alterer d'oferta`{.action}.

Se utiliza uma oferta **Performance**, consulte o [método 2](#methode2).

#### Método 2: migrar os seus dados para uma base superior <a name="methode2"></a>

Também pode migrar os seus dados para uma nova base:

- Encomende, se necessário, uma [base de dados](/links/web/hosting-options-startsql) de tamanho superior e lance a sua [criação](/pages/web_cloud/web_hosting/sql_create_database);
- [Duplique o conteúdo da antiga base de dados](/pages/web_cloud/web_hosting/copy_database) na nova **ou** efetue uma [exportação dos seus dados](/pages/web_cloud/web_hosting/sql_database_export) e depois [importe-os](/pages/web_cloud/web_hosting/sql_importing_mysql_database) na nova base de dados;
- Integre os identificadores da nova base de dados no [ficheiro de configuração](#config_file) do seu site.

> [!primary]
>
> Se dispõe de um alojamento **Performance**, pode igualmente [ativar gratuitamente um servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Método 3: eliminar dados desnecessários

Depois de realizar um backup da sua base de dados, aceda à interface [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#aceder-a-interface-phpmyadmin) para eliminar os dados inúteis graças aos comandos Drop, Delete e Truncate.

De seguida, volte a analisar o cálculo da quota utilizado a partir do separador `Bases de dados`{.action} do alojamento em causa: clique no botão `...`{.action} em causa e depois `Recalcular o limite`{.action}.

> [!warning]
>
> Esta operação requer grandes competências técnicas. Se necessário, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) (/links/partner). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

#### Método 4: otimizar a sua base de dados

Para otimizar a sua base de dados, siga as instruções do nosso guia "[Configurar o seu servidor de bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados)". De seguida, volte a analisar o cálculo da quota utilizado a partir do separador `Bases de dados`{.action} do seu alojamento, clicando no botão `...`{.action} da base de dados em questão.

> [!warning]
>
> Se os conselhos fornecidos sobre a otimização da sua base de dados não bastam para desbloquear o acesso ao seu website, aconselhamos que contacte a nossa [comunidade](/links/community) ou os [parceiros da OVHcloud](/links/partner). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### Capacidade de RAM excedida (Web Cloud Databases apenas)

A seguinte mensagem na parte `Web Cloud Databases`{.action} do seu [Área de Cliente OVHcloud](/links/manager) indica que o seu servidor [Web Cloud Databases](https://www.ovh.pt/cloud/cloud-databases/) consumiu uma quantidade de recursos demasiado importante na infraestrutura OVHcloud:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

Nesta situação, pode aumentar a [quantidade de memória RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#acompanhar-a-ram-consumida) disponível a partir da parte `Web Cloud Databases`{.action} do seu [Área de Cliente OVHcloud](/links/manager). No separador `Informações gerais`{.action}, clique no botão `...`{.action} na rubrica `RAM`.

> [!warning]
>
> Para aumentar a RAM, o Web Cloud Databases não deve ser ativado através de um alojamento Performance. Se deseja aumentar a quantidade de memória RAM de uma base de dados incluída nas [ofertas performance](/links/web/hosting-performance-offer){.external}, primeiro tem de a desassociar.
> 
> Para desassociar a base de dados, aceda à [Área de Cliente OVHcloud](/links/manager) e selecione `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e escolha o alojamento web no qual o Web Cloud Databases está ativo.
>
> Na zona `Configuration`, clique em as o `...`{.action} à direita da menção `Web Cloud Databases`, e clique no botão `Desassociar`{.action}.
>

Também pode otimizar a sua base de dados seguindo as instruções do nosso guia "[Configurar o seu servidor de bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados)".

> [!primary]
>
> Se encontrar dificuldades em diminuir a utilização dos recursos no seu servidor de bases de dados e não pretender aumentá-las, contacte a nossa [comunidade](/links/community) ou os [parceiros OVHcloud](/links/partner). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### Erros de importação de bases de dados

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Esta mensagem de erro significa que a base de dados que está a tentar importar contém elementos não autorizados na infraestrutura partilhada da OVHcloud.

Em primeiro lugar, certifique-se de que a sua base de dados está vazia no separador `Bases de dados`{.action} do alojamento em causa (clique no botão `...`{.action} em causa e depois `Recalculer o limite`{.action}).

Caso contrário, [guarde os dados presentes](/pages/web_cloud/web_hosting/sql_database_export) na sua base de dados e elimine-os antes de voltar a importar os dados.

Também pode selecionar a casa `Limpar a base de dados atual`{.action} imediatamente antes de [lançar a importação](/pages/web_cloud/web_hosting/sql_importing_mysql_database#importar-o-seu-proprio-backup-a-partir-da-area-de-cliente):

![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}

Contacte, se necessário, a nossa [comunidade](/links/community) ou um [fornecedor especializado](/links/partner) sobre este assumpto. Não poderemos prestar-lhe assistência na correção desta anomalia.

> [!faq]
>
> Que elementos no script de importação da minha base de dados podem causar um erro "#1044 - Access denied for user to database"?

Ter um **"trigger"** no script de importação da sua base de dados não é autorizado nos servidores de alojamento partilhado OVHcloud. Para isso, importe a sua base de dados para um servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Além disso, não é autorizado o seguinte pedido:

```sql
CREATE DATABASE IF NOT EXISTENTE `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```

Substitua-a por:

```sql
USE `Database-Name`;
```

(`Database-Name`: indique o nome da base de dados indicado no seu [Área de Cliente OVHcloud](/links/manager)

### "MySQL server has gone away"

>
> **« ERROR 2006 : MySQL server has gone away »**
>

Esta mensagem de erro aparece aquando da [importação de uma base de dados](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#2-importar-um-backup-local) num servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Está ligado, na maior parte dos casos, à quantidade excessiva de dados a importar ou à falta de otimização dos pedidos SQL no script de importação.

Para resolver esta anomalia, pode:

- Aumentar a [quantidade de memória viva (RAM)](/pages/web_cloud/web_cloud_databases/configure-database-server#acompanhar-a-ram-consumida). Para isso, aceda ao servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) afetado na rubrica `Bases de dados`{.action} do seu [Área de Cliente OVHcloud](/links/manager). A seguir, clique no botão `...`{.action} na parte `RAM`, e `Alterar quantidade de RAM`{.action}.

- Transferir a base de dados para várias operações em vez de uma (para qualquer questão relativa às operações a realizar, contacte a nossa [comunidade](/links/community) ou os [parceiros da OVHcloud](/links/partner). De facto, a OVHcloud não lhe poderá fornecer assistência).

- [Otimize a sua base de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados) e depois repita as operações de exportação/importação.

### Não é possível aceder ao PhpMyAdmin

#### "Access denied for user"

>
> **« mysqli::real_connect(): (HY000/1045): Acesso denied for user**
>

Esta mensagem de erro pode aparecer no acesso à sua base de dados por [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#aceder-a-interface-phpmyadmin). Indica que os dados de identificação introduzidos estão errados.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

Nesta situação, [verifique os identificadores introduzidos](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#instrucoes) e altere, se necessário, a [palavra-passe da sua base de dados](/pages/web_cloud/web_hosting/sql_change_password).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

O número máximo de ligações ativas para as bases de dados entregues com os alojamentos partilhados ([StartSQL](/links/web/hosting-options-startsql)) é de **30**.

Este número é de **200** para as bases dos servidores [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (Este parâmetro pode ser modificado na secção `Configuration`{.action} do seu servidor de base de dados).

Esta mensagem aparece na [ligação ao PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acaceder-a-interface-phpmyadmin) quando o número máximo de ligações é ultrapassado.

Nesta situação, deverá [otimizar as suas bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados) de forma a reduzir o número de ligações ativas.

> [!warning]
>
> Para qualquer questão relativa às operações a realizar para reduzir o número de ligações ativas na sua base de dados, contacte a nossa [comunidade](/links/community) ou os [parceiros da OVHcloud](/links/partner). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Esta mensagem de erro aparece na [ligação a PhpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#instrucoes) quando o nome do servidor indicado está incorreto.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Verifique o nome do servidor a inscrever no seu [Área de Cliente OVHcloud](/links/manager).

> [!success]
>
> Se a base de dados à qual deseja aceder aparecer no separador `Bases de dados`{.action} da parte `Alojamentos`{.action} do seu [Espaço Cliente OVHcloud](/links/manager), o nome a inserir está inscrito na coluna `Endereço do servidor`.
>
> Se pretender ligar-se a uma base de dados num servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), o nome do servidor a introduzir está inscrito no separador `Informações gerais`{.action}, parte `Informações da ligação`{.action}, `SQL`{.action} e na rubrica `Nome do host`{.action}.
>

### Não é possível estabelecer ligação a uma base de dados Cloud Databases

Dispor de um servidor [Web Cloud Databases](/products/web-cloud-clouddb) permite-lhe [ligar às suas bases de dados](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) a partir do seu computador ou de um servidor externo à infraestrutura da OVHcloud.

Se esta ligação se revelar impossível, comece por verificar que autorizou [o seu endereço IP público](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) a ligar-se ao servidor de bases de dados.

Se esta operação tiver sido realizada com sucesso, contacte o seu Fornecedor de Serviços Internet (ISP) ou [parceiros da OVHcloud](/links/partner). Nesta situação, não poderemos fornecer-lhe assistência.

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com o serviço Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Fale com nossa [comunidade de utilizadores](/links/community).