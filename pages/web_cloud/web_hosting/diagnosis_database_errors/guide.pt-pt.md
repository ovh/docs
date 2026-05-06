---
title: "Resolver os erros mais frequentes associados às bases de dados"
excerpt: "Diagnosticar os casos mais comuns de erros associados às bases de dados"
updated: 2026-03-31
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

A utilização das suas bases de dados pode dar origem a um certo número de anomalias no seu site ou na sua [Área de Cliente OVHcloud](/links/manager), bem como na interface [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database).

**Descubra como resolver os erros associados às bases de dados nos alojamentos partilhados OVHcloud.**

> [!warning]
>
> A OVHcloud disponibiliza-lhe serviços cuja configuração e gestão são da responsabilidade do cliente. O cliente é o único responsável pelo seu bom funcionamento.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#go-further)?
>

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting).
- Utilizar uma das nossas ofertas de bases de dados [Web Cloud](/links/web/hosting-options-startsql) ou [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### "Error establishing a database connection"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Verificar os incidentes em curso

Verifique, em primeiro lugar, na página [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) se o seu datacenter, o seu cluster de alojamento web, o seu servidor Web Cloud Databases ou a sua base de dados não estão afetados por um incidente na infraestrutura OVHcloud.

**Clique na informação que procura para ver o conteúdo.**

<!-- CP-STEPS-START:find-datacenter -->
/// details | Encontrar o datacenter do seu alojamento web

Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em questão.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador `Informações gerais`{.action}, localize o `Datacenter`.

///
<!-- CP-STEPS-END:find-datacenter -->

/// details | Encontrar o cluster e o filer do seu alojamento web

Consulte o nosso guia "[Conhecer o cluster e o filer do seu alojamento web](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer)".

///

<!-- CP-STEPS-START:find-wcdb-server-name -->
/// details | Encontrar o nome do servidor Web Cloud Databases

Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e selecione o serviço em questão.
>>
>> ![Seleção de um servidor Web Cloud Databases na Área de Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Localize o `Nome do host` na secção `SQL` de `Informações da ligação`.

///
<!-- CP-STEPS-END:find-wcdb-server-name -->

/// details | Encontrar o servidor da sua base de dados de alojamento web

Consulte o nosso guia "[Encontrar o servidor da sua base de dados](/pages/web_cloud/web_hosting/sql_find_server)".

///

#### Verificar os dados de acesso à sua base de dados <a name="config_file"></a>

Ligue-se ao espaço de armazenamento de ficheiros com [FTP](/pages/web_cloud/web_hosting/ftp_connection) no seu alojamento e encontre o ficheiro de configuração do seu site (por exemplo, para um site WordPress, trata-se do ficheiro **wp-config.php** situado na pasta que contém o seu site).

> [!warning]
>
> A escolha e a configuração do ficheiro com as informações de ligação à base de dados é inerente ao editor de conteúdo (CMS) em causa e não à OVHcloud.
>
> Recomendamos que contacte o editor do [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizado para criar o seu site ou que recorra a um [fornecedor especializado](/links/partner) em caso de necessidade. A OVHcloud não lhe poderá fornecer assistência.
>

De seguida, verifique a correspondência **exata** entre os identificadores de ligação ao [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#aceder-a-interface-phpmyadmin) e os do ficheiro de configuração do seu site.

Altere, se necessário, a [palavra-passe da sua base de dados](/pages/web_cloud/web_hosting/sql_change_password).

#### Exemplo para WordPress

Se o seu website apresentar uma mensagem **"Erro durante a ligação à base de dados"** e que este não é afetado por um [incidente](https://web-cloud.status-ovhcloud.com/), ligue-se em [FTP](/pages/web_cloud/web_hosting/ftp_connection) ao seu alojamento e abra o diretório que contém o seu website (por predefinição, trata-se do dossier `www`).

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

<!-- CP-STEPS-START:check-wp-db-credentials -->
Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em questão.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action} e verifique a correspondência entre os elementos apresentados e os presentes no ficheiro `wp-config.php`:
>>
>> - **my_database** deve corresponder ao que é indicado em `Nome da base de dados`;
>> - **my_user** deve corresponder ao que é indicado em `Nome do utilizador`;
>> - **my_password** corresponde à [palavra-passe da sua base de dados](/pages/web_cloud/web_hosting/sql_change_password);
>> - **my_server.mysql.db** deve corresponder ao que é indicado em `Endereço do servidor`.
<!-- CP-STEPS-END:check-wp-db-credentials -->

> [!primary]
>
> Se estas manipulações não lhe permitem restabelecer o acesso ao seu website, [salvaguarde a sua base de dados](/pages/web_cloud/web_hosting/sql_database_export) e depois [restaure-a numa data anterior](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server) a partir da sua [Área de Cliente OVHcloud](/links/manager).
>
> Contacte um [fornecedor especializado](/links/partner) se necessário. A OVHcloud não lhe poderá fornecer assistência.
>

### Excesso do limite autorizado da base de dados

Recebeu um e-mail dos nossos serviços indicando que a quantidade de dados na sua base de dados ultrapassa o limite autorizado. A sua base de dados passou então para modo de leitura. Isto impede qualquer modificação do seu site.

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

<!-- CP-STEPS-START:upgrade-plan -->
Para efetuar esta alteração, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em questão.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no botão `...`{.action} na rubrica `Plano`, à direita do seu ecrã.
>>
> **Etapa 3**
>>
>> Clique em `Mudar de oferta`{.action}.
<!-- CP-STEPS-END:upgrade-plan -->

Se utiliza uma oferta **Performance**, consulte o [método 2](#methode2).

#### Método 2: migrar os seus dados para uma base superior <a name="methode2"></a>

Também pode migrar os seus dados para uma nova base:

- Encomende, se necessário, uma [base de dados](/links/web/hosting-options-startsql) de tamanho superior e lance a sua [criação](/pages/web_cloud/web_hosting/sql_create_database).
- [Duplique o conteúdo da antiga base de dados](/pages/web_cloud/web_hosting/copy_database) na nova **ou** efetue uma [exportação dos seus dados](/pages/web_cloud/web_hosting/sql_database_export) e depois [importe-os](/pages/web_cloud/web_hosting/sql_importing_mysql_database) na nova base de dados.
- Integre os identificadores da nova base de dados no [ficheiro de configuração](#config_file) do seu site.

> [!primary]
>
> Se dispõe de um alojamento **Performance**, pode igualmente [ativar gratuitamente um servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Método 3: eliminar dados desnecessários

Depois de realizar um [backup da sua base de dados](/pages/web_cloud/web_hosting/sql_database_export), aceda à interface [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#aceder-a-interface-phpmyadmin) para eliminar os dados inúteis graças aos comandos Drop, Delete e Truncate.

<!-- CP-STEPS-START:recalculate-quota-method3 -->
Para recalcular o limite, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em questão.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action} e, a seguir, no botão `...`{.action} junto à base de dados em questão.
>>
> **Etapa 3**
>>
>> Clique em `Recalcular o limite`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method3 -->

> [!warning]
>
> Esta operação requer grandes competências técnicas. Se necessário, recomendamos que recorra a um [prestador de serviços especializado](/links/partner). A OVHcloud não lhe poderá fornecer assistência.
>

#### Método 4: otimizar a sua base de dados

Para otimizar a sua base de dados, siga as instruções do nosso guia "[Configurar o seu servidor de bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados)".

<!-- CP-STEPS-START:recalculate-quota-method4 -->
Para recalcular o limite, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em questão.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action} e, a seguir, no botão `...`{.action} junto à base de dados em questão.
>>
> **Etapa 3**
>>
>> Clique em `Recalcular o limite`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method4 -->

> [!warning]
>
> Se os conselhos fornecidos sobre a otimização da sua base de dados não bastam para desbloquear o acesso ao seu website, aconselhamos que contacte a nossa [comunidade](/links/community) ou os [parceiros da OVHcloud](/links/partner). A OVHcloud não lhe poderá fornecer assistência.
>

### Capacidade de RAM excedida (Web Cloud Databases apenas)

A seguinte mensagem indica que o seu servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) consumiu uma quantidade de recursos demasiado importante na infraestrutura OVHcloud:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

<!-- CP-STEPS-START:increase-ram-wcdb -->
Para aumentar a [quantidade de memória RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#acompanhar-a-ram-consumida), clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e selecione o serviço em questão.
>>
>> ![Seleção de um servidor Web Cloud Databases na Área de Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador `Informações gerais`{.action}, localize a rubrica `RAM`.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} na rubrica `RAM` e, a seguir, em `Alterar quantidade de RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-wcdb -->

> [!warning]
>
> Para aumentar a RAM, o Web Cloud Databases não deve ser ativado através de um alojamento Performance. Se deseja aumentar a quantidade de memória RAM de uma base de dados incluída nas [ofertas performance](/links/web/hosting-performance-offer), primeiro tem de a desassociar.
>
> Para desassociar a base de dados, consulte o nosso guia "[Desassociar um Web Cloud Databases do seu alojamento web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>

Também pode otimizar a sua base de dados seguindo as instruções do nosso guia "[Configurar o seu servidor de bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados)".

> [!primary]
>
> Se encontrar dificuldades em diminuir a utilização dos recursos no seu servidor de bases de dados e não pretender aumentá-las, contacte a nossa [comunidade](/links/community) ou os [parceiros OVHcloud](/links/partner). A OVHcloud não lhe poderá fornecer assistência.
>

### Erros de importação de bases de dados

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Esta mensagem de erro significa que a base de dados que está a tentar importar contém elementos não autorizados na infraestrutura partilhada da OVHcloud.

<!-- CP-STEPS-START:check-db-empty-before-import -->
Em primeiro lugar, certifique-se de que a sua base de dados está vazia. Para isso, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em questão.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action} e, a seguir, no botão `...`{.action} junto à base de dados em questão e em `Recalcular o limite`{.action}.
>>
> **Etapa 3**
>>
>> Se a base de dados não estiver vazia, [guarde os dados presentes](/pages/web_cloud/web_hosting/sql_database_export) e elimine-os antes de voltar a importar.
>>
>> Também pode selecionar a opção `Limpar a base de dados atual`{.action} imediatamente antes de [lançar a importação](/pages/web_cloud/web_hosting/sql_importing_mysql_database#importar-o-seu-proprio-backup-a-partir-da-area-de-cliente):
>>
>> ![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}
<!-- CP-STEPS-END:check-db-empty-before-import -->

Contacte, se necessário, a nossa [comunidade](/links/community) ou um [fornecedor especializado](/links/partner). Não poderemos prestar-lhe assistência na correção desta anomalia.

> [!primary]
>
> **Que elementos no script de importação da minha base de dados podem causar um erro "#1044 - Access denied for user to database"?**

Ter um **"trigger"** no script de importação da sua base de dados não é autorizado nos servidores de alojamento partilhado OVHcloud. Para isso, importe a sua base de dados para um servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Além disso, não é autorizado o seguinte pedido:

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
```

Substitua-o por:

```sql
USE `Database-Name`;
```

(`Database-Name`: indique o nome da base de dados indicado na sua [Área de Cliente OVHcloud](/links/manager))

#### "MySQL server has gone away"

>
> **"ERROR 2006 : MySQL server has gone away"**
>

Esta mensagem de erro aparece aquando da [importação de uma base de dados](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#2-importar-um-backup-local) num servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Está ligado, na maior parte dos casos, à quantidade excessiva de dados a importar ou à falta de otimização dos pedidos SQL no script de importação.

<!-- CP-STEPS-START:increase-ram-for-import -->
Para resolver esta anomalia, pode:

- Aumentar a [quantidade de memória viva (RAM)](/pages/web_cloud/web_cloud_databases/configure-database-server#acompanhar-a-ram-consumida). Para isso, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e selecione o serviço em questão.
>>
>> ![Seleção de um servidor Web Cloud Databases na Área de Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador `Informações gerais`{.action}, localize a rubrica `RAM`.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} na rubrica `RAM` e, a seguir, em `Alterar quantidade de RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-for-import -->

- Transferir a base de dados para várias operações em vez de uma (para qualquer questão relativa às operações a realizar, contacte a nossa [comunidade](/links/community) ou os [parceiros da OVHcloud](/links/partner). A OVHcloud não lhe poderá fornecer assistência).

- [Otimize a sua base de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados) e depois repita as operações de exportação/importação.

### Não é possível aceder ao phpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Esta mensagem de erro pode aparecer no acesso à sua base de dados por [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#aceder-a-interface-phpmyadmin). Indica que os dados de identificação introduzidos estão errados.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

Nesta situação, [verifique os identificadores introduzidos](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#instrucoes) e altere, se necessário, a [palavra-passe da sua base de dados](/pages/web_cloud/web_hosting/sql_change_password).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

O número máximo de ligações ativas para as bases de dados entregues com os alojamentos partilhados ([StartSQL](/links/web/hosting-options-startsql)) é de **30**.

Este número é de **200** para as bases dos servidores [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (Este parâmetro pode ser modificado na secção `Configuração`{.action} do seu servidor de base de dados).

Esta mensagem aparece na [ligação ao phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#aceder-a-interface-phpmyadmin) quando o número máximo de ligações é ultrapassado.

Nesta situação, deverá [otimizar as suas bases de dados](/pages/web_cloud/web_cloud_databases/configure-database-server#otimizar-as-bases-de-dados) de forma a reduzir o número de ligações ativas.

> [!warning]
>
> Para qualquer questão relativa às operações a realizar para reduzir o número de ligações ativas na sua base de dados, contacte a nossa [comunidade](/links/community) ou os [parceiros da OVHcloud](/links/partner). A OVHcloud não lhe poderá fornecer assistência.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Esta mensagem de erro aparece na [ligação ao phpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#instrucoes) quando o nome do servidor indicado está incorreto.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Verifique o nome do servidor correspondente.

**Clique na situação correspondente para ver o conteúdo.**

<!-- CP-STEPS-START:find-server-name-hosting -->
/// details | Base de dados num alojamento web

Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em questão.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Bases de dados`{.action}. O nome do servidor a introduzir está inscrito na coluna `Endereço do servidor`.

///
<!-- CP-STEPS-END:find-server-name-hosting -->

<!-- CP-STEPS-START:find-server-name-wcdb -->
/// details | Base de dados num servidor Web Cloud Databases

Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Web Cloud Databases](/links/control-panel/web-cloud-databases) e selecione o serviço em questão.
>>
>> ![Seleção de um servidor Web Cloud Databases na Área de Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador `Informações gerais`{.action}, o nome do servidor a introduzir está inscrito na secção `Informações da ligação`, parte `SQL`, rubrica `Nome do host`.

///
<!-- CP-STEPS-END:find-server-name-wcdb -->

### Não é possível estabelecer ligação a uma base de dados Cloud Databases

Dispor de um servidor [Web Cloud Databases](/products/web-cloud-clouddb) permite-lhe [ligar às suas bases de dados](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) a partir do seu computador ou de um servidor externo à infraestrutura da OVHcloud.

Se esta ligação se revelar impossível, comece por verificar que [autorizou o seu endereço IP público](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) a ligar-se ao servidor de bases de dados.

Se esta operação tiver sido realizada com sucesso, contacte o seu Fornecedor de Serviços Internet (ISP) ou os [parceiros da OVHcloud](/links/partner). Nesta situação, não poderemos fornecer-lhe assistência.

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com o serviço Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Fale com a nossa [comunidade de utilizadores](/links/community).
