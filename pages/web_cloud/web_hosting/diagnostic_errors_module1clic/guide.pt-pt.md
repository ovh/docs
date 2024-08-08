---
title: "Resolver os erros mais frequentes associados aos módulos 1 clique"
excerpt: "Saiba como diagnosticar os casos mais comuns de erros associados à criação de módulos 1 clique"
updated: 2024-03-12
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os "[módulos em 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" permitem criar rapidamente o seu website. Esta tecnologia permite criar o seu website utilizando as **C**ontent **M**anagement **S**ystem (**CMS**) mais conhecidas, como *Wordpress*, *Joomla!*, *Drupal* ou *PrestaShop*.
No entanto, se a configuração destes últimos não for realizada corretamente, a instalação do "módulo 1 clique" pode falhar e/ou provocar avarias.

**Saiba como diagnosticar os casos mais comuns de erros relacionados com a criação de "módulo 1 clique"**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção "[Quer saber mais?](#go-further)" deste guia.
>

## Requisitos

- Ter um serviço de [alojamento web](/links/web/hosting) compatível.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter utilizado a funcionalidade "[Módulo em 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" para criar um novo website.

## Instruções

> [!primary]
>
> Aqui, poderá encontrar os erros mais habituais. Se encontrar uma situação diferente das apresentadas, consulte a nossa [FAQ sobre os alojamentos web](/pages/web_cloud/web_hosting/faq-web_hosting).
>

### O seu domínio não está disponível durante a criação do "módulo 1 clique"

![domainenotproposed](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/domain-unavailable.png){.thumbnail}

Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda e, em seguida, selecione o alojamento web afetado pela instalação. Na página que se abrir, clique no separador `Multisite`{.action} e efetue as seguintes verificações:

|Cenário|Solução|
|---|---| 
|O domínio ou subdomínio associado ao website que pretende criar não aparece na tabela presente no separador `Multisite`{.action}.|Adicione o seu domínio seguindo [estas indicações](/pages/web_cloud/web_hosting/multisites_configure_multisite).|
|O domínio foi eliminado do multisite sem qualquer ação da sua parte.|Se o seu domínio ou a sua [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) não forem geridos a partir da sua conta OVHcloud, adicione o seu domínio a partir do separador `Multisite`{.action} seguindo [este manual](/pages/web_cloud/web_hosting/multisites_configure_multisite).|

### "Ocorreu um erro aquando do carregamento das informações (You need at least one free database)"

![No databases available](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-no-db-available.png){.thumbnail}

Esta mensagem é apresentada quando inicia a instalação do "módulo 1 clique" quando não tem ou deixou de ter a possibilidade de criar uma nova base de dados associada ao seu alojamento web.

#### Solução n°1: encomendar uma nova base de dados

Se já não tiver bases de dados incluídas com o seu alojamento web, pode encomendar uma nova [base de dados Start SQL](/links/web/hosting-options-startsql) associando-a ao seu alojamento web atual. De seguida, poderá reiniciar a instalação do "módulo 1 clique em". Se precisar de mais espaço de armazenamento (superior a 1 GB), recomendamos que utilize o nosso serviço [Web Cloud Databases](/links/web/databases).

Na sua [Área de Cliente OVHcloud](/links/manager), aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda e, em seguida, selecione o alojamento web afetado pela adição de uma base de dados suplementar. Na página que se abrir, clique no separador `Bases de dados`{.action} e, a seguir, em `Ações`{.action} para encomendar uma base de dados suplementar:

![order_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/order-a-db.png){.thumbnail}

Uma vez concluído, poderá instalar um novo "módulo com 1 clique".

> [!primary]
>
> Nota: não hesite em consultar previamente as nossas ofertas de bases de dados unitárias [start-SQL](/links/web/hosting-options-startsql), bem como a nossa oferta [Web Cloud Databases](/links/web/databases).
>

#### Solução n°2: modificar a sua oferta de alojamento web

> [!primary]
>
> Encontre a comparação das nossas diferentes [ofertas de alojamento](/links/web/hosting).
>

Na sua [Área de Cliente OVHcloud](/links/manager), clique em `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página que aparece na parte `Subscrição` - `Oferta`, clique no botão `...`{.action} `Mudar de oferta`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

As ofertas [Pro](/links/web/hosting-professional-offer) e [Performance](/links/web/hosting-performance-offer) permitem-lhe criar até três "módulos 1 clique" suplementares com uma base de dados independente para cada um deles. As ofertas **Performance** permitem-lhe também ativar gratuitamente um servidor [Web Cloud Databases](/links/web/databases).

Uma vez concluído, poderá instalar um novo "módulo com 1 clique".

#### Solução n°3: eliminar uma base de dados não utilizada <a name="delete-the-database"></a>

> [!warning]
>
> A eliminação de uma base de dados é definitiva. Esta operação levará igualmente à eliminação dos backups da base de dados em causa. Em caso de dúvida, contacte o seu webmaster ou um dos nossos [parceiros](/links/partner).
>

Para eliminar uma base de dados a partir da [Área de Cliente OVHcloud](/links/manager), aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda e, em seguida, selecione o alojamento web correspondente.

Na página que se abrir, clique no separador `Bases de dados`{.action}. Na tabela que aparecer, clique no botão `...`{.action} à direita da linha correspondente ao banco de dados que pretende eliminar e, a seguir, em `Eliminar base de dados`{.action} :

![delete_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-deletion.png){.thumbnail}

Uma vez concluído, poderá instalar um novo "módulo com 1 clique".

#### Solução n°4: instalar o seu "módulo 1 clique" numa base de dados já utilizada

Para instalar o seu "módulo 1 clique" numa base de dados já existente, deverá utilizar a funcionalidade de instalação em [modo avançado](/pages/web_cloud/web_hosting/cms_install_1_click_modules) de um novo "módulo 1 clique".

Para encontrar os identificadores da sua base de dados, consulte o nosso guia [Instalar o seu website com um "módulo 1 clique" (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Se possui um servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), pode criar uma base de dados do tamanho da sua escolha, no limite do espaço de disco alocado.

Uma vez concluído, poderá instalar um novo "módulo com 1 clique".

> [!primary]
>
> Neste caso, poderá guardar os dados de um único website utilizando um [script PHP ou um comando SSH](/pages/web_cloud/web_hosting/sql_database_export).
>
> Para qualquer questão sobre as manipulações a realizar, contacte a [comunidade OVHcloud](/links/community) ou um dos nossos [parceiros](/links/partner).<br>
> Não poderemos proporcionar-lhe assistência técnica.
>

### O "módulo 1 clique" será apresentado num endereço web do tipo "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Depois de realizar todos os backups necessários, [elimine o seu "módulo em 1 clique"](#delete-the-module), depois a sua [base de dados](#delete-the-database). De seguida, repita a instalação do seu "módulo em 1 clique" no nome de domínio desejado.

### "A pasta de instalação não está vazia"

![folder_not_empty](/pages/assets/screens/email-sending-to-customer/webhosting/folder-not-empty.png){.thumbnail}

Depois de iniciar a criação do seu "módulo 1 clique", receberá um e-mail a indicar que o diretório de instalação do seu "módulo 1 clique" não está vazio.

Esta mensagem significa que a **Pasta raiz** associada ao seu domínio já contém um ou mais ficheiros ou pastas.

Para associar o seu domínio a outro diretório, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda e, em seguida, selecione o alojamento web correspondente. Na página que se abrir, clique no separador "Multi-site"{.action}. Na tabela que aparecer, clique no botão `...`{.action} à direita da linha correspondente ao seu nome de domínio e, a seguir, clique em `Modificar o domínio`{.action}. Por fim, indique o nome de um novo **Pasta raiz** (será automaticamente criado um diretório vazio no seu alojamento web).

![modify_root_folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain.png){.thumbnail}

Também pode ligar-se ao seu alojamento web através do protocolo [FTP](/pages/web_cloud/web_hosting/ftp_connection), e eliminar o conteúdo da pasta. Depois de o ter guardado localmente ou depois de o ter esvaziado ao mover todo o seu conteúdo para outro diretório FTP.

### "Either no configuration (ovhConfig or runtime), or the current configuration is not valid (please, double check the module's requirement) (as a reminder, the global configuration is used for module)."

Esta mensagem indica que o ficheiro ".ovhconfig" é inexistente ou inválido para poder instalar o seu "módulo em 1 clique". Este ficheiro contém a versão de PHP e o ambiente de execução aplicados ao seu alojamento web.

Recomenda-se a utilização da versão de PHP mais recente possível. **Antes** de alterar a configuração do ficheiro ".ovhconfig", se dispõe de outros websites no seu alojamento web, certifique-se de que estes são compatíveis com a nova versão de PHP e/ou o novo ambiente de execução que vai aplicar no seu alojamento web.

Para verificar esta configuração, consulte o guia "[Alterar a configuração do alojamento web](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

### "Ocorreu um erro aquando do carregamento das informações (There is not enough space on your hosting (you need at least xxx MB))"

![not_enough_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-not-enough-ftp-space.png){.thumbnail}

Esta mensagem indica que o [espaço de armazenamento FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web comporta um volume de dados demasiado elevado. 

#### Solução n°1: eliminar dados para libertar espaço de armazenamento FTP

Neste caso, elimine (ou mova) os seus dados para instalar um novo "[módulo 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

Nesta situação, [ligue-se em FTP](/pages/web_cloud/web_hosting/ftp_connection) ao seu alojamento web, [efetue uma cópia de segurança localmente](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) aos seus dados e elimine os ficheiros que não são necessários para o funcionamento do seu website.

> [!primary]
>
> Para qualquer questão relativa à eliminação de dados para reduzir a quantidade de dados no seu alojamento web, contacte a nossa [comunidade de utilizadores](/links/community) ou os [parceiros OVHcloud](/links/partner).<br>
> O suporte OVHcloud não pode prestar assistência.
>

#### Solução n°2: modificar a sua oferta de alojamento web

> [!primary]
>
> Encontre a comparação das nossas diferentes [ofertas de alojamento web](/links/web/hosting).
>

Na sua [Área de Cliente OVHcloud](/links/manager), aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o alojamento web em causa. Na página que aparece na parte `Subscrição` - `Oferta`, clique no botão `...`{.action} `Mudar de oferta`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

As ofertas [Pro](/links/web/hosting-professional-offer) e [Performance](/links/web/hosting-performance-offer) permitem-lhe criar até três "módulos 1 clique" suplementares com uma base de dados independente para cada um deles. As ofertas **Performance** permitem-lhe também ativar gratuitamente um servidor [Web Cloud Databases](/links/web/databases).

### "Não é possível estabelecer ligação à base de dados" <a name="delete-the-module"></a>

![wrong_id_database](/pages/assets/screens/email-sending-to-customer/databases/db-connection-failed.png){.thumbnail}

Depois de iniciar a instalação do seu "módulo 1 clique" em modo avançado, terá recebido um e-mail a indicar que o seu "módulo 1 clique" não pode ligar-se à base de dados indicada.

Desta forma, deve verificar as credenciais da base de dados. Para os encontrar, consulte este [guia](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Elimine o seu "módulo em 1 clique". Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} na coluna da esquerda e, em seguida, selecione o alojamento web correspondente. Na página que se abrir, clique no separador `Módulo "1 clique"`{.action}. Na tabela que aparecer, clique no botão `...`{.action} à direita da linha correspondente ao seu nome de domínio e, a seguir, clique em `Eliminar o módulo`{.action}.

![delete_a_module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/delete-a-module-2.png){.thumbnail}

> [!warning]
>
> **Eliminar itens na base de dados pode causar uma interrupção do website.**
>
> Certifique-se de que só elimina a instalação que acabou de iniciar. Para isso, verifique se se trata do diretório em causa na coluna `Path` (Caminho ).
>

A seguir, repita a instalação de um novo "módulo em 1 clique".

### "You have insufficient rights on this database."

![insufficient_rights](/pages/assets/screens/email-sending-to-customer/databases/db-insufficient-rights.png){.thumbnail}

Esta mensagem só é apresentada quando instalar um "de módulo 1 clique" em **modo avançado**. A sua base de dados já não pode ser alterada, pois a quantidade de dados nela contida ultrapassa o limite autorizado. Neste caso, a base de dados será bloqueada em modo só de leitura.

Neste caso, instale o seu "módulo 1 clique" passando pelo [modo "simples"](/pages/web_cloud/web_hosting/cms_install_1_click_modules) ou escolha outra base de dados aquando da sua instalação em modo avançado. Se necessário, encomende um serviço [oferta de bases de dados](/links/web/hosting-options-startsql) complementar.

Se não possuir outras bases de dados e não pretender encomendar uma oferta complementar, [importar localmente uma cópia da sua base de dados](/pages/web_cloud/web_hosting/sql_database_export), elimine os dados desnecessários.

> [!warning]
>
> **Eliminar itens na base de dados pode causar uma interrupção do website.**
>
> Para qualquer pergunta complementar, contacte a nossa [comunidade de utilizadores](/links/community) ou os [parceiros OVHcloud](/links/partner).<br>
> Não poderemos proporcionar-lhe assistência técnica.
>

### "Can't connect to database 'xxxxxxxx' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)"

![cant_connect](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-access-denied.png){.thumbnail}

Iniciou a instalação de um "módulo 1 clique" em [modo avançado](/pages/web_cloud/web_hosting/cms_install_1_click_modules) numa base de dados situada num servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Recebeu esta mensagem de erro por e-mail. Significa que o utilizador indicado durante a instalação não tem direitos suficientes na base de dados ou que as informações de início de sessão estão incorretas.

Nessa situação, modifique primeiro os [direitos do utilizador](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) em causa, de forma a que disponha dos direitos **Administrador** ou em **Leitura/escrita** na base de dados.

Verifique igualmente os seus identificadores [ligando-se diretamente](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) ao seu servidor de bases de dados e, em seguida, repita a instalação do seu "módulo em 1 clique".

### "Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'"

![cant_connect_server](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-server.png){.thumbnail}

Iniciou a instalação de um "módulo 1 clique" em [modo avançado](/pages/web_cloud/web_hosting/cms_install_1_click_modules) numa base de dados situada num servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Recebeu esta mensagem de erro por e-mail. Isto significa que o nome do servidor de bases de dados especificado está incorreto.

Para encontrar o nome do servidor de bases de dados, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}. Clique em `Web Cloud Databases`{.action} na coluna à esquerda e selecione o servidor de bases de dados em causa.

Na página que aparece, o nome do servidor a utilizar é indicado no quadro `Informações da ligação`, na subparte `SQL`, sob a menção `Nome do host`.

### O seu antigo website continua a ser apresentado

No separador `Módulos " 1 clique"` do alojamento web que contém o seu website, quando clicar na ligação do seu website na coluna `Caminho`, será aberto um novo separador com o seu website. O nome de domínio associado à sua instalação é apresentado no endereço do browser. Por exemplo, se o seu nome de domínio for "domain.tld", é possível que apareça outro domínio ou que apareça uma página padrão da OVHcloud.

Esta disfunção pode ter várias causas:

- Verifique que o domínio que está a consultar ("domain.tld") é aquele com o qual acabou de instalar o "módulo 1 clique".

- Se alterou recentemente a [zona DNS ativa](/pages/web_cloud/domains/dns_zone_edit)/[servidores DNS](/pages/web_cloud/domains/dns_server_edit) do seu domínio ou uma [transferência de domínio](/pages/web_cloud/domains/transfer_incoming_generic_domain). Aguarde até que estas operações estejam finalizadas (4-24 horas para uma modificação na zona DNS e 24-48 horas para uma modificação dos servidores DNS). Não se esqueça também de reiniciar os seus dispositivos (PC, smartphone, box, etc.) e esvaziar a cache do seu browser.

- O seu domínio está sempre ligado ao seu antigo alojamento web. Nesse caso, altere a [zona DNS ativa](/pages/web_cloud/domains/dns_zone_edit) associada ao seu domínio ou aos seus [servidores DNS](/pages/web_cloud/domains/dns_server_edit). Se a zona DNS ativa do seu domínio não for gerida na OVHcloud, contacte o seu fornecedor DNS.

### A palavra-passe "Administrador" de acesso a "a interface de administração" do seu módulo 1 clique não funciona <a name="adminpassword"></a>

Em caso de rejeição da sua palavra-passe atual de acesso à interface de administração do seu **C**ontent **M**anagement **S**ystem (**CMS**), consulte o parágrafo "Alterar a palavra-passe do seu módulo" da nossa documentação sobre [gestão do seu módulo 1 clique](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

### O prefixo das tabelas da base de dados já está a ser utilizado na base de dados

Este erro só é aplicável a instalações com "módulos 1 clique" em *modo avançado*.

Informará por e-mail que, aquando da tentativa de instalação do "módulo 1 clique", indicou um prefixo de tabelas já utilizado na base de dados anteriormente selecionada para instalar o seu "módulo em 1 clique". A instalação será, então, cancelada. 

Repita a instalação com outro prefixo de tabelas ou outra base de dados para corrigir a situação.

### Os DNS do domínio não apontam para um alojamento web da OVHcloud

Este erro informa-o de que as entradas DNS do nome de domínio utilizado para o seu website não apontam para um alojamento web da OVHcloud. No entanto, não é possível instalar um "módulo 1 clique" num domínio que não aponta para um alojamento OVHcloud.
Para resolver esta situação, deve editar a sua zona DNS. Para saber mais sobre os endereços IP a indicar, consulte o guia [Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_cloud_databases/configure-database-server). De seguida, deverá [editar a zona DNS](/pages/web_cloud/domains/dns_zone_edit).
Se a sua zona DNS não estiver alojada na OVHcloud, contacte o seu fornecedor de zona DNS para efetuar as ações necessárias.

Quando terminar, reinicie a instalação de um novo "módulo com 1 clique".

### A sua base de dados necessita de estar em versão "X", ora esta está atualmente em versão "Y"

Esta mensagem de correio eletrónico informa-o de que a versão da base de dados é demasiado antiga para instalar o "módulo 1 clique". 

Neste mesmo e-mail, encontrará a versão na qual a sua base de dados se deve encontrar. Tem ao seu dispor três possibilidades:

- Atualização do **S**istema de **G**estão de **B**ase de **D**ados (SGBD tais como MySQL, PostgreSQL, MariaDB, etc.) numa versão mais recente.
- Instalação de uma nova base de dados associada ao seu alojamento web. Isto garante que o SGDB e a versão são compatíveis com o "módulo 1 clique" desejado.
- Se possui um servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), verifique se o seu servidor utiliza o SGBD correto e a versão correta e, em seguida, crie a base de dados à sua escolha.

Quando terminar, reinicie a instalação de um novo "módulo com 1 clique".

## Quer saber mais? <a name="go-further"></a>

[Instalar o site com os módulos 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Problemas recorrentes durante a utilização de um programa FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).