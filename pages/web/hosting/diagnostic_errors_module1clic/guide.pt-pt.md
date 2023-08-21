---
title: Resolver os erros mais frequentes associados aos módulos 1 clique
excerpt: Diagnosticar os casos mais comuns de erros associados à criação de módulos 1 clique
updated: 2023-08-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A criação de um [Módulo 1 clique](/pages/web/hosting/cms_install_1_click_modules) em modo simples ou avançado pode causar várias anomalias.

**Descubra como diagnosticar os casos mais comuns de erros associados à criação de módulos 1 clique**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#gofurther)?
>

## Requisitos

- Ter um serviço de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) compatível.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter usado a funcionalidade [Módulo 1 clique](/pages/web/hosting/cms_install_1_click_modules) para criar um novo site.

## Instruções

> [!primary]
>
> Indicamos aqui os erros mais comuns. Se encontrar outra anomalia, consulte a nossa [FAQ nos alojamentos Web](/pages/web/hosting/faq-web_hosting).
>

### "Ocorreu um erro aquando do carregamento das informações. (You need at least one free database)"

![1freeDB](images/1freeDB.png){.thumbnail}

Se esta mensagem aparece quando lança a instalação do seu módulo, é que não é possível criar uma nova base de dados no seu alojamento.

#### Solução n°1: alterar a oferta de alojamento

> [!primary]
>
> Veja a comparação das nossas diferentes [ofertas de alojamento](https://www.ovhcloud.com/pt/web-hosting/).
>

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique em `Web Cloud`{.action} e, a seguir, em `Alojamentos`{.action}. Escolha o alojamento em causa e clique em `Mudar de oferta` na parte `Subscrição` - `Oferta`:

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

As ofertas [Alojamento Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/) e [Alojamento Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/) permitem-lhe criar até três módulos em 1 clique suplementares. As ofertas **Alojamento Performance** permitem-lhe também ativar gratuitamente um [servidor Web Cloud Databases](https://www.ovh.pt/cloud/cloud-databases/).

#### Solução n°2: eliminar uma base de dados não utilizada <a name="delete-database"></a>

> [!warning]
>
> A operação de eliminação de uma base de dados é definitiva. Além disso, implica a supressão das salvaguardas da base em causa. Caso tenha dúvidas sobre as operações a realizar, contacte o webmaster ou um dos nossos [parceiros](https://partner.ovhcloud.com/pl/directory/).
>

Para eliminar uma base de dados, na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique em `Web Cloud`{.action}, depois em `Alojamentos`{.action} e, por fim, em `Bases de dados`{.action}. Elimine a base de dados desejada:

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Solução n°3: encomendar novas bases de dados

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique em `Web Cloud`{.action} e, a seguir, em `Alojamentos`{.action}. Em `Bases de dados`{.action}, clique em `Ações`{.action}:

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Encontre o comparativo das nossas diferentes [ofertas de bases de dados](https://www.ovhcloud.com/pt/web-hosting/options/start-sql/)
>

#### Solução n°4: instalar o módulo numa base de dados já utilizada

Para instalar o módulo numa base de dados já utilizada, deverá utilizar o [modo avançado](/pages/web/hosting/cms_install_1_click_modules#instalacao-avancada) de instalação de um novo **Módulo 1 clique**.

Para encontrar as credenciais da sua base de dados, consulte a nossa [guia](/pages/web/hosting/cms_install_1_click_modules#configurar-o-modulo).

### "O diretório de instalação não está vazio"

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Depois de lançar a criação do módulo, recebeu um e-mail indicando que a pasta de instalação do módulo não está vazia.

Esta mensagem significa que a Pasta **raiz** a que está associado o seu domínio contém um ou vários ficheiros ou pastas.

Para associar o seu domínio a outro diretório, clique em `Modificar o domínio`{.action} no separador `Multisite`{.action} e indique o nome de um novo **Pasta raiz** (será automaticamente criado um diretório vazio no seu alojamento).

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

Pode também ligar-se ao seu alojamento via [FTP](/pages/web/hosting/ftp_connection) e, depois, eliminar ou mover o conteúdo da pasta após o backup.

### "Either no configuration (ovhConfig or runtime), or the current configuration is not valid (please, double check the module's requirement) (as a reminder, the global configuration is used for module)."

Esta mensagem indica que o ficheiro ".ovhconfig" é inexistente ou inválido para poder instalar o seu "módulo em 1 clique". Este ficheiro contém a versão de PHP e o ambiente de execução aplicados ao seu alojamento web.

Recomenda-se a utilização da versão de PHP mais recente possível. **Antes** de alterar a configuração do ficheiro ".ovhconfig", se dispõe de outros websites no seu alojamento web, certifique-se de que estes são compatíveis com a nova versão de PHP e/ou o novo ambiente de execução que vai aplicar no seu alojamento web.

Para verificar esta configuração, consulte os nossos manuais sobre:

- [Alterar a configuração do alojamento web](/pages/web/hosting/ovhconfig_modify_system_runtime)
- [Configurar o ficheiro .ovhconfig do alojamento web](/pages/web/hosting/ovhconfig_configuration)

### "Ocorreu um erro durante o carregamento das informações (There is not enough space on your hosting (you need at least xxx MB))"

![not_enough_space](images/not_enough_space.png){.thumbnail}

Esta mensagem indica que o[espaço de armazenamento](/pages/web/hosting/ftp_connection) do seu alojamento tem um volume de dados demasiado elevado. Deve eliminar ou deslocar um novo [módulo 1 clique](/pages/web/hosting/cms_install_1_click_modules).

Neste caso, [ligue-se em FTP](/pages/web/hosting/ftp_connection) ao seu alojamento, [salvaguarde localmente](/pages/web/hosting/ftp_filezilla_user_guide#transferencia-de-ficheiros) os seus dados e elimine os ficheiros que não são necessários para o funcionamento do seu site.

> [!primary]
>
> Para qualquer questão relativa aos dados a eliminar para reduzir a quantidade de dados no seu alojamento, contacte a nossa [comunidade de utilizadores](https://community.ovh.com/en/) ou os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).<br>
> Não poderemos prestar-lhe assistência nesta matéria.
>

### "Não é possível aceder à base de dados" <a name="delete-module"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Depois de lançar a instalação do módulo em modo avançado, recebeu um e-mail indicando que o seu módulo não pode ligar-se à base de dados indicada. 

Por isso, deve verificar os dados de acesso à sua base de dados. Para as encontrar, consulte a nossa [guia](/pages/web/hosting/cms_install_1_click_modules#configurar-o-modulo).

De seguida, elimine o módulo através do separador `Módulos 1 clique`{.action}:

![delete_a_module](images/delete_a_module.png){.thumbnail}

De seguida, execute a instalação de um novo módulo.

### "You have insufficient rights on this database."

![insufficient_rights](images/insufficient_rights.png){.thumbnail}

A sua base de dados não pode ser alterada uma vez que a quantidade de dados que contém excede o limite autorizado. Esta mensagem aparece durante a instalação de um módulo em [modo avançado](/pages/web/hosting/cms_install_1_click_modules#instalacao-avancada).

Nesta situação, instale o seu módulo passando pelo [modo "simples"](/pages/web/hosting/cms_install_1_click_modules#instalacao-simples) ou escolha outra base de dados aquando da sua instalação em modo avançado. Se necessário, encomende uma oferta de bases de dados (https://www.ovhcloud.com/pt/web-hosting/options/start-sql/) complementar.

Se não dispõe de outras bases de dados e não deseja encomendar uma oferta complementar, [importe localmente uma cópia da sua base de dados](/pages/web/hosting/sql_database_export#instrucoes) e elimine os dados inúteis.

> [!warning]
>
> **Eliminar elementos na sua base de dados pode causar um corte no seu site**
>
> Para mais informações, contacte a nossa [comunidade](https://community.ovh.com/en/) ou os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).<br>
> Não poderemos prestar-lhe assistência nesta matéria.
>

### "Can't connect to database 'test' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)"

![cant_connect](images/cant_connect.png){.thumbnail}

Iniciou a instalação de um módulo 1 clique em [modo avançado](/pages/web/hosting/cms_install_1_click_modules#instalacao-avancada) numa base de dados situada num [servidor Web Cloud Databases](/pages/web/clouddb/starting_with_clouddb). Recebeu esta mensagem de erro por e-mail. Isto significa que o utilizador notado durante a instalação não possui direitos suficientes sobre a base de dados ou que os identificadores indicados são incorretos.


Verifique também as suas credenciais ao [ligar diretamente](/pages/web/clouddb/connecting-to-database-on-database-server#instrucoes) ao seu servidor de bases de dados e, de seguida, execute novamente a instalação do seu módulo.

### Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'

![cant_connect_server](images/cant_connect_server.png){.thumbnail}

Iniciou a instalação de um módulo 1 clique em [modo avançado](/pages/web/hosting/cms_install_1_click_modules#instalacao-avancada) numa base de dados situada num [servidor Web Cloud Databases](/pages/web/clouddb/starting_with_clouddb). Recebeu esta mensagem de erro por e-mail. Isto significa que o nome do servidor de bases de dados que indicou está incorreto.

Clique na parte `Web cloud`{.action} do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), depois no separador `Bases de dados`{.action}.

A seguir, clique na oferta em causa: o nome do servidor a utilizar é indicado sob a menção `Nome do host` na sub-parte `SQL` de `Informações da ligação`.

### O seu domínio não é proposto durante a criação do módulo

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Clique no separador `Multisite`{.action} e, em seguida, efetue as seguintes verificações:

|Cenário|Medidas a adotar|
|---|---|
|O domínio ou subdomínio associado ao site que pretende criar não aparece na `Multisite`{.action}.|Adicione o seu domínio seguindo [estas indicações](/pages/web/hosting/multisites_configure_multisite#2-adicionar-um-dominio-ou-subdominio).|
|O domínio foi eliminado do multi-site sem nenhuma ação da sua parte.|Se o seu domínio ou a sua [Zona DNS](/pages/web/domains/dns_zone_edit#compreender-a-nocao-de-dns) não são geridos a partir da sua conta OVHcloud, adicione o seu domínio ao `Multisite`{.action} seguindo [este guia](/pages/web/hosting/multisites_configure_multisite#etapa-22-adicionar-um-dominio-externo).|

### O seu módulo é apresentado num endereço web do tipo "xxxx.cluster0xx.hosting.ovh.net"

![url-cluster](images/url-cluster.png){.thumbnail}

Depois de realizar todos os backups necessários, [elimine o módulo](#delete-module) e a sua [base de dados](#delete-database). Depois, execute a sua instalação no nome de domínio pretendido.

### O seu antigo site continua a aparecer

Esta anomalia pode ter várias causas: 

- Efetuou recentemente uma alteração na sua zona ou nos seus servidores [DNS](/pages/web/domains/dns_zone_edit#compreender-a-nocao-de-dns) ou uma [transferência de nome de domínio](/pages/web/domains/transfer_incoming_generic_domain). Aguarde até que estas operações estejam finalizadas (48 horas para as alterações nos seus DNS). Também pode reiniciar os seus dispositivos (PC, smartphone, box, etc.) e esvaziar a cache do seu browser.

- O seu domínio está sempre associado ao seu antigo alojamento. Neste caso, altere a sua [Zona DNS](/pages/web/domains/dns_zone_edit#editar-a-zona-dns-da-ovhcloud-do-seu-dominio) ou os seus [Servidores DNS](/pages/web/domains/dns_server_general_information#modificar-os-servidores-dns) ou contacte o seu antigo fornecedor de serviços.

### A palavra-passe "Administrador" de acesso ao "back-office" do seu módulo 1 clique deixou de funcionar <a name="adminpassword"></a>

Se a sua palavra-passe de acesso à interface de gestão do CMS for rejeitada, consulte o parágrafo "Alterar a palavra-passe do módulo" do nosso manual [sobre a gestão do módulo 1 clique](/pages/web/hosting/cms_manage_1_click_module#password-change).

## Quer saber mais? <a name="gofurther"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
