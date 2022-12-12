---
title: Resolver os erros mais frequentes associados às bases de dados 
excerpt: "Diagnosticar os casos mais comuns de erros associados às bases de dados"
slug: erros-frequentes-bases-de-dados
section: Diagnóstico
Order: 04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 09/12/2022**

**Objetivo**

A utilização das suas bases de dados pode dar origem a um certo número de anomalias no seu site ou no seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), bem como na interface [PhpMyAdmin](https://docs.ovh.com/pt/hosting/criar-base-de-dados/#aceder-a-interface-phpmyadmin).

**Descubra como resolver os erros associados às bases de dados sobre os alojamentos partilhados OVHcloud.**

> [!warning]
>
> A OVHcloud disponibiliza-lhe serviços cuja configuração e gestão são da responsabilidade do cliente. O cliente é o único responsável pelo seu bom funcionamento.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#gofurther)?
>

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/) OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Utilizar uma das nossas ofertas de bases de dados [Web Cloud](https://www.ovhcloud.com/pt/web-hosting/options/start-sql/) ou [CloudDB](https://www.ovh.pt/cloud/cloud-databases/).

## Instruções

### "Error establishing a database connection"

#### Verificar os incidentes em curso

Em [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/), verifique primeiro se o seu datacenter, cluster de alojamento ou servidor CloudDB não está afetado por um incidente na infraestrutura OVHcloud.

> [!primary]
>
> Para encontrar estas informações, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), na parte `Web Cloud`{.action}:
>
> - Para encontrar o `Datacenter` do seu alojamento, bem como o seu `Filer` (servidor de ficheiro), escolha os `Alojamentos`{.action} e, a seguir, o alojamento em causa. Encontrará estas informações no separador `Informações gerais`{.action}.
> - Para encontrar o **cluster** de servidores em que se encontra o seu alojamento, clique no separador `FTP-SSH`{.action}. Esta informação aparecerá no nome do seu `Servidor FTP`.
> - Para encontrar o nome do seu servidor **CloudDB**, clique em `Bases de dados`{.action} e, a seguir, na oferta em causa. Encontrará esta informação no separador `Informações gerais`{.action}.
>

#### Verificar os dados de acesso à sua base de dados <a name="config_file"></a>

Ligue-se ao espaço de armazenamento de ficheiros com [FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) ao espaço de armazenamento de ficheiros no seu alojamento e encontre o ficheiro de configuração do seu site (por exemplo, para um site WordPress, trata-se do ficheiro **wp-config.php** situado na pasta que contém o seu site).

> [!warning]
>
> A escolha e a configuração do ficheiro com as informações de ligação à base de dados é inerente ao editor de conteúdo (CMS) em causa e não à OVHcloud.
>
> Recomendamos que contacte o editor do [CMS](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/) utilizado para criar o seu site ou que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) em caso de necessidade. De facto, a OVHcloud não lhe poderá fornecer assistência.
>

De seguida, verifique a correspondência **exata** entre os identificadores de ligação ao [PhpMyAdmin](https://docs.ovh.com/pt/hosting/criar-base-de-dados/#aceder-a-interface-phpmyadmin) e os do ficheiro de configuração do seu site.

Altere, se necessário, a [palavra-passe da sua base de dados](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-base-de-dados/).

#### Exemplo para WordPress

Se o seu website apresentar uma mensagem **"Erro durante a ligação à base de dados"** e que este não é afetado por [incidente](https://web-cloud.status-ovhcloud.com/), ligue-se em [FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) ao seu alojamento e abra o diretório que contém o seu website (por predefinição, trata-se do dossier `www`).

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

No seu [Espaço Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), na parte `Alojamentos`{.action}, clique no separador `Bases de dados`{.action} e verifique a correspondência entre os elementos apresentados e os presentes no ficheiro `wp-config.php`:

- **my_database** deve corresponder ao que é notado no `Nome da base de dados`;
- **my_user** deve corresponder ao que é notado no `Nome do utilizador`;
- **my_password** corresponde à [palavra-passe da sua base de dados](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-base-de-dados/);
- **my_server.mysql.db** deve corresponder ao que é notado no `Endereço do servidor`.

> [!primary]
>
> Se estas manipulações não lhe permitem restabelecer o acesso ao seu website, [salvaguarde a sua base de dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/) e depois [restaure-a numa data anterior](https://docs.ovh.com/pt/hosting/restaurar-importar-base-de-dados/#1-restaurar-uma-cópia de segurança existente) a partir do seu [Espaço Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
>
> Contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) se necessário. De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### Excesso do limite autorizado da base de dados

Recebeu um e-mail dos nossos serviços indicando que a quantidade de dados na sua base de dados ultrapassa o limite autorizado. A sua base de dados passou então a ler sozinha. Isto impede qualquer modificação do seu site.

![mail_overquota](images/mail_overquota.png){.thumbnail}

Três métodos irão permitir-lhe desbloquear a sua base de dados:

#### Método 1: passar a sua subscrição para uma oferta superior

Se dispõe de uma fórmula **Perso** ou **Pro**, aconselhamos-o a passar para a [oferta de alojamento superior](https://www.ovhcloud.com/pt/web-hosting/). Esta alteração de subscrição irá aumentar o tamanho da sua base de dados, o que a irá reabrir automaticamente. Este método é o mais simples e não exige qualquer competência técnica específica.

> [!warning]
>
> O aumento do tamanho da sua base de dados pode estar associado a uma falha no código interno do seu site.
>
> Uma anomalia pode provocar um aumento permanente do tamanho da sua base de dados, caso em que a alteração da oferta de alojamento não será eficaz.
>
> Se verificar um aumento súbito da dimensão da sua base de dados, ou se dispuser de um site do tipo "blog" normalmente pouco consumidor de dados, aconselhamos que contacte imediatamente um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/). Não poderemos dar-lhe apoio nesta matéria.
>

Para efetuar esta alteração, aceda à Área de Cliente OVHcloud (https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e clique em `Alojamentos`{.action} e no alojamento em causa. Clique no botão `...`{.action} na rubrica `Oferta`, à direita do seu ecrã, e depois `alterer d'oferta`{.action}.

Se utiliza uma oferta **Performance**, consulte o [método 2](#methode2).

#### Método 2: migrar os seus dados para uma base superior <a name="methode2"></a>

Também pode migrar os seus dados para uma nova base:

- Encomende, se necessário, uma [base de dados](https://www.ovhcloud.com/pt/web-hosting/options/start-sql/) de tamanho superior e lance a sua [criação](https://docs.ovh.com/pt/hosting/criar-base-de-dados/);
- Efetue uma [exportação dos seus dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/) e depois [importe-os](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/) na nova base de dados;
- Integre os identificadores da nova base de dados no [ficheiro de configuração](#config_file) do seu site.

> [!primary]
>
> Se dispõe de um alojamento **Performance**, pode igualmente [ativar gratuitamente um servidor CloudDB](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/#ativacao-do-seu-servidor-clouddb-incluido-com-o-seu-plano-de-alojamento-web).
>

#### Método 3: eliminar dados desnecessários

Depois de realizar um backup da sua base de dados, aceda à interface [PhpMyAdmin](https://docs.ovh.com/pt/hosting/criar-base-de-dados/#aceder-a-interface-phpmyadmin) para eliminar os dados inúteis graças aos comandos Drop, Delete e Truncate.

De seguida, volte a analisar o cálculo da quota utilizado a partir do separador `Bases de dados`{.action} do alojamento em causa: clique no botão `...`{.action} em causa e depois `Recalcular o limite`{.action}.

> [!warning]
>
> Esta operação requer grandes competências técnicas. Se necessário, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) (https://partner.ovhcloud.com/pt/directory/). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

#### Método 4: otimizar a sua base de dados

Para otimizar a sua base de dados, siga as instruções do nosso guia "[Configurar o seu servidor de bases de dados](https://docs.ovh.com/pt/hosting/configurar-otimizar-servidor-de-bases-de-dados/#otimizar-as-bases-de-dados_1)". De seguida, volte a analisar o cálculo da quota utilizado a partir do separador `Bases de dados`{.action} do seu alojamento, clicando no botão `...`{.action} da base de dados em questão.

> [!warning]
>
> Se os conselhos fornecidos sobre a otimização da sua base de dados não bastam para desbloquear o acesso ao seu website, aconselhamos que contacte a nossa [comunidade](https://community.ovh.com/en/) ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/pt/directory/). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### Capacidade de RAM excedida

A seguinte mensagem na parte `Bases de dados`{.action} do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) indica que o seu servidor [CloudDB](https://www.ovh.pt/cloud/cloud-databases/) consumiu uma quantidade de recursos demasiado importante na infraestrutura OVHcloud:

![quota_exceeding](images/quota_exceeding.png){.thumbnail}

Nesta situação, pode aumentar a [quantidade de memória RAM](https://docs.ovh.com/pt/hosting/configurar-otimizar-servidor-de-bases-de-dados/#acompanhar-a-ram-consumida) disponível a partir da parte `Bases de dados`{.action} do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). No separador `Informações gerais`{.action}, clique no botão `...`{.action} na rubrica `RAM`.

> [!warning]
>
> Para aumentar a RAM, o cloudDB não deve ser ativado através de um alojamento Performance. Se deseja aumentar a quantidade de memória RAM de uma base de dados incluída nas [ofertas performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/){.external}, primeiro tem de a desassociar.
> 
Para desassociar a base de dados, aceda à [Área de Cliente OVHcloud]((https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione `Web Cloud`{.action} na barra de navegação em cima. Clique em `Alojamentos`{.action} e escolha o alojamento web no qual o cloudDB está ativo.
>
Na zona `Configuration`, clique em as o `...`{.action} à direita da entrada da `base de dados privada`, e clique no botão `Desassociar`{.action}.
>

Também pode otimizar a sua base de dados seguindo as instruções do nosso guia "[Configurar o seu servidor de bases de dados](https://docs.ovh.com/pt/hosting/configurar-otimizar-servidor-de-bases-de-dados/#otimizar-as-bases-de-dados_1)".

> [!primary]
>
> Se encontrar dificuldades em diminuir a utilização dos recursos no seu servidor de bases de dados e não pretender aumentá-las, contacte a nossa [comunidade](https://community.ovh.com/en/) ou os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### Erros de importação de bases de dados

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Esta mensagem de erro significa que a base de dados que está a tentar importar contém elementos não autorizados na infraestrutura partilhada da OVHcloud.

Em primeiro lugar, certifique-se de que a sua base de dados está vazia no separador `Bases de dados`{.action} do alojamento em causa (clique no botão `...`{.action} em causa e depois `Recalculer o limite`{.action}).

Caso contrário, [guarde os dados presentes](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/) na sua base de dados e elimine-os antes de voltar a importar os dados.

Também pode selecionar a casa `Limpar a base de dados atual`{.action} imediatamente antes de [lançar a importação](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/#importar-o-seu-proprio-backup-a-partir-da-area-de-cliente):

![database-import-empty](images/database-import-empty.png){.thumbnail}

Contacte, se necessário, a nossa [comunidade](https://community.ovh.com/en/) ou um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) sobre este assumpto. Não poderemos prestar-lhe assistência na correção desta anomalia.

> [!faq]
>
> Que elementos no script de importação da minha base de dados podem causar um erro "#1044 - Access denied for user to database"?

Ter um **"trigger"** no script de importação da sua base de dados não é autorizado nos servidores de alojamento partilhado OVHcloud. Para isso, importe a sua base de dados para um servidor [CloudDB](https://www.ovh.pt/cloud/cloud-databases/).

Além disso, não é autorizado o seguinte pedido:

```mysql
CREATE DATABASE IF NOT EXISTENTE `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```

Substitua-a por:

```mysql
USE `Database-Name`;
```

(`Database-Name`: indique o nome da base de dados indicado no seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

### "MySQL server has gone away"

>
> **« ERROR 2006 : MySQL server has gone away »**
>

Esta mensagem de erro aparece aquando da [importação de uma base de dados](https://docs.ovh.com/pt/hosting/restaurar-importar-base-de-dados/#2-importar-um-backup-local) num servidor [CloudDB](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/). Está ligado, na maior parte dos casos, à quantidade excessiva de dados a importar ou à falta de otimização dos pedidos SQL no script de importação.

Para resolver esta anomalia, pode:

- Aumentar a [quantidade de memória viva (RAM)](https://docs.ovh.com/pt/hosting/configurar-otimizar-servidor-de-bases-de-dados/#acompanhar-a-ram-consumida). Para isso, aceda ao [servidor CloudDB](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/) afetado na rubrica `Bases de dados`{.action} do seu [Espaço Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). A seguir, clique no botão `...`{.action} na parte `RAM`, e `Alterar quantidade de RAM`{.action}.

- Transferir a base de dados para várias operações em vez de uma (para qualquer questão relativa às operações a realizar, contacte a nossa [comunidade](https://community.ovh.com/en/) ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/pt/directory/). De facto, a OVHcloud não lhe poderá fornecer assistência).

- [Otimize a sua base de dados](https://docs.ovh.com/pt/hosting/configurar-otimizar-servidor-de-bases-de-dados/#otimizar-as-bases-de-dados_1) e depois repita as operações de exportação/importação.

### Não é possível aceder ao PhpMyAdmin

#### "Access denied for user"

>
> **« mysqli::real_connect(): (HY000/1045): Acesso denied for user**
>

Esta mensagem de erro pode aparecer no acesso à sua base de dados por [PhpMyAdmin](https://docs.ovh.com/pt/hosting/criar-base-de-dados/#aceder-a-interface-phpmyadmin). Indica que os dados de identificação introduzidos estão errados.

![access_denied_for_user](images/access_denied_for_user.png){.thumbnail}

Nesta situação, [verifique os identificadores introduzidos](https://docs.ovh.com/pt/hosting/conexao-base-de-dados-servidor-bdd/#instrucoes) e altere, se necessário, a [palavra-passe da sua base de dados](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-base-de-dados/).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

O número máximo de ligações ativas para as bases de dados entregues com os alojamentos partilhados ([StartSQL](https://www.ovhcloud.com/pt/web-hosting/options/start-sql/)) é de **30**.

Este número é de **200** para as bases dos servidores [CloudDB](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/). (Este parâmetro pode ser modificado na secção `Configuration`{.action} do seu servidor de base de dados).

Esta mensagem aparece na [ligação ao PhpMyAdmin](https://docs.ovh.com/pt/hosting/criar-base-de-dados/#acaceder-a-interface-phpmyadmin) quando o número máximo de ligações é ultrapassado.

Nesta situação, deverá [otimizar as suas bases de dados](https://docs.ovh.com/pt/hosting/configurar-otimizar-servidor-de-bases-de-dados/#otimizar-as-bases-de-dados_1) de forma a reduzir o número de ligações ativas.

> [!warning]
>
> Para qualquer questão relativa às operações a realizar para reduzir o número de ligações ativas na sua base de dados, contacte a nossa [comunidade](https://community.ovh.com/en/) ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/pt/directory/). De facto, a OVHcloud não lhe poderá fornecer assistência.
>

### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Esta mensagem de erro aparece na [ligação a PhpMyAdmin](https://docs.ovh.com/pt/hosting/conexao-base-de-dados-servidor-bdd/#instrucoes) quando o nome do servidor indicado está incorreto.

![name_or_service_not_known](images/name_or_service_not_known.png){.thumbnail}

Verifique o nome do servidor a inscrever no seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

> [!success]
>
> Se a base de dados à qual deseja aceder aparecer no separador `Bases de dados`{.action} da parte `Alojamentos`{.action} do seu [Espaço Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), o nome a inserir está inscrito na coluna `Endereço do servidor`.
>
> Se pretender ligar-se a uma base de dados num servidor [CloudDB](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/), o nome do servidor a introduzir está inscrito no separador `Informações gerais`{.action}, parte `Informações da ligação`{.action}, `SQL`{.action} e na rubrica `Nome do host`{.action}.
>

## Quer saber mais? <a name="gofurther"></a>

[Primeiros passos com o serviço CloudDB](https://docs.ovh.com/pt/clouddb/comecar-com-clouddb/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.