---
title: "Alojamentos web - FAQ"
excerpt: "Encontre as principais questões colocadas sobre os alojamentos web da OVHcloud"
updated: 2025-08-01
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

**Clique nas perguntas abaixo para ver as explicações.**

## Gestão da sua oferta

/// details | Como configurar o meu alojamento web?

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.

Poderá gerir os seus certificados SSL, a versão PHP aplicada ao seu alojamento web, a opção CDN, os eventuais multi-sites, as bases de dados, etc.

> [!success]
>
> Para o ajudar a configurar o seu alojamento web, não hesite em consultar os tópicos "*Primeiros passos*" e "*Configurar o alojamento web Perso, Pro ou Performance*" de [esta página](/products/web-cloud-hosting).

///

/// details | Esqueci-me da palavra-passe de acesso à conta do meu alojamento web. O que fazer?

Se se esquecer do seu identificador de cliente OVHcloud ou da palavra-passe associada a este identificador, siga estas etapas:

1. Aceda à [interface de ligação à Área de Cliente OVHcloud](/links/manager).
2. Clique no link `ID de utilizador ou palavra-passe esquecida?`{.action} presente na janela de início de sessão.
3. Especifique o seu identificador de cliente OVHcloud (por exemplo: **aa00000-ovh**) ou o endereço de e-mail de contacto associado ao seu identificador de cliente OVHcloud.
4. De seguida, clique no botão `Enviar`{.action}.

O procedimento de reinicialização será, então, enviado para o seu endereço de e-mail de contacto.

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password)".

///

/// details | Como gerir a palavra-passe do espaço de armazenamento FTP do alojamento web?

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que vai aparecer, clique no separador `FTP - SSH`{.action}.

Poderá alterar a palavra-passe FTP do seu alojamento web.

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Alterar a palavra-passe de um utilizador FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

///

/// details | Como alterar a palavra-passe da minha base de dados associada ao meu alojamento web?

> [!warning]
>
> Se alterar a palavra-passe de uma base de dados utilizada por um dos seus websites, atualize-a igualmente no ficheiro de configuração do website em causa. Sem esta atualização, o seu website será desligado da sua base de dados e não funcionará.

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, clique no separador `Bases de dados`{.action}.

Poderá alterar as palavras-passe das bases de dados associadas ao seu alojamento web.

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Alterar a palavra-passe da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_change_password)".

///

/// details | Como alterar a palavra-passe de um endereço de e-mail associado ao meu alojamento web?

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `E-mails`{.action} (ou no menu `MX Plan`{.action} se utilizar a versão beta da Área de Cliente OVHcloud) e escolha o domínio em causa.
3. Na página que se abrir, clique no separador `E-mails`{.action}.
4. Na tabela que aparecer, clique no botão `...`{.action} à direita do endereço de e-mail em causa e, a seguir, clique em `Alterar palavra-passe`{.action}.

Poderá alterar a palavra-passe do endereço de e-mail (observe a política de palavras-passe indicada na janela de introdução).

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Alterar a palavra-passe de um endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)".
>
> Se estiver a utilizar um programa de mensagens (Outlook, Mail para macOS, Thunderbird, etc.), atualize a palavra-passe para o seu endereço de e-mail quando este lhe for solicitado pelo programa de mensagens, quer seja aberto ou sincronizado.
>
> Se tiver mais perguntas sobre a solução de e-mail *MX Plan*, consulte o nosso [FAQ - E-mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

///

/// details | Como colocar o meu website online?

Para publicar o seu website, deve primeiro dispor dos seguintes elementos:

- Um [nome de domínio](/links/web/domains) que corresponderá ao endereço Web a partir do qual o seu website será acessível através de um browser (por exemplo: *domain.tld*). Este domínio deve também estar associado ao seu alojamento web para poder ver o website.
- Um [alojamento web](/links/web/hosting) no qual pode instalar o seu website.

Aqui estão os principais passos a seguir:

1. Defina o seu projeto (site "chave na mão" (CMS) instalado manualmente ou graças aos módulos 1 clique da OVHcloud / site criado por si ou por um prestador de serviços / etc.).
2. Colocar os ficheiros do site online no espaço de armazenamento FTP do seu alojamento web.
3. Associe o website a uma base de dados (se o website utilizar uma base de dados).
4. Aceda ao seu website.

> [!success]
>
> Para mais informações sobre como publicar um site num alojamento web, consulte o guia detalhado "[Publicar um site num alojamento web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>
> Se optar por instalar um CMS (WordPress, Joomla!, PrestaShop, Drupal) com a nossa solução "Módulos 1 clique", consulte o guia detalhado "[Instalar o seu website com um Módulos "1 clique" (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>
> Se o seu website já existe noutro fornecedor e se pretender migrá-lo para a OVHcloud, consulte o guia detalhado "[Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
>
> Para o ajudar a configurar o seu alojamento web, pode utilizar todos os [guias relativos às nossas soluções de alojamento web](/products/web-cloud-hosting).

///

/// details | Como transferir, sem interrupção de serviço, o meu website, a minha base de dados, o meu nome de domínio e os meus e-mails para a OVHcloud?

Aqui estão os principais passos a seguir:

1. Encomendar o alojamento e os endereços de e-mail na OVHcloud.
2. Criar e pré-configurar uma zona DNS para o seu domínio na OVHcloud.
3. Recuperar um backup completo do seu site web.
4. Importar o backup do seu website para a sua oferta de alojamento OVHcloud.
5. Recriar os mesmos endereços de e-mail na OVHcloud.
6. Declarar os servidores de e-mail OVHcloud na zona DNS ativa do seu domínio.
7. Transferir o conteúdo dos seus antigos endereços de e-mail para os novos endereços na OVHcloud.
8. Reconfigurar os seus softwares de e-mail.
9. Substituir os servidores DNS ativos do seu domínio pelos da OVHcloud.
10. Transferir um domínio para a OVHcloud.

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

///

/// details | Como alojar vários websites num mesmo alojamento web?

Se o seu [alojamento web](/links/web/hosting) é compatível, siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que vai aparecer, clique no separador `Multisite`{.action}.

Poderá gerir os nomes de domínio/subdomínios declarados em multi-site no seu alojamento web.

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

///

/// details | Como apresentar o meu website com um URL em "HTTPS"?

Para que o seu website esteja acessível com um URL em "HTTPS" (exemplo: `https://domain.tld`), são necessários dois pré-requisitos:

- Deve dispor de um certificado SSL ativo para o seu nome de domínio (ou instalado no seu alojamento web).
- No código-fonte do seu website, este deve forçar a reescrita dos URLs em "HTTPS".

A OVHcloud disponibiliza vários [certificados SSL](/links/web/hosting-options) nos alojamentos web.

Para ativar um certificado SSL no alojamento web do seu website, efetue os seguintes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, na caixa **Configuração**, clique no botão `...`{.action} à direita da menção **Certificado SSL** e, a seguir, em `Encomendar um certificado SSL`{.action}.
4. Escolha o certificado que deseja entre a [lista dos certificados disponíveis](/pages/web_cloud/web_hosting/ssl_on_webhosting), depois continue até à finalização da nota de encomenda.

> [!success]
>
> Encontre todos os detalhes nos seguintes guias:
>
> - [Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).
> - [Alojamento web - Ativar um certificado SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt).
> - [Alojamento web - Ativar um certificado SSL Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv).
> - [Alojamento web - Ativar um certificado SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev).
> - [Alojamento web - Instalar um certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

Depois de o certificado SSL da sua escolha ser instalado e implementado na OVHcloud, verifique se o código-fonte do seu website reescreve corretamente os URLs de acesso ao seu website em "HTTPS". Se tiver problemas com isso, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).

///

/// details | Como alterar a forma de alojamento web?

Para encomendar o alojamento web mais adaptado às suas necessidades, consulte as nossas ofertas [nesta página](/links/web/hosting).

> [!primary]
>
> Dependendo do seu plano de alojamento web atual, algumas ofertas podem não lhe ser propostas. Consulte o nosso guia "[Fazer evoluir a sua oferta de alojamento web](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)" para mais informações sobre o assumpto.

Depois de fazer a escolha, siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, na caixa **Subscrição**, clique no botão `...`{.action} à direita da menção `Plano` e, a seguir, em `Mudar de oferta`{.action}.
4. De seguida, selecione a nova subscrição e a respetiva duração. Valide os contratos correspondentes e depois clique em `Enviar`{.action}.

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Fazer evoluir a sua oferta de alojamento web](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

///

/// details | Após o cancelamento, como conservar a oferta de e-mail associada ao meu alojamento web?

Quando rescindir ou eliminar o seu alojamento web, a oferta de e-mail que lhe está associada será igualmente rescindida. Para conservar os seus endereços de e-mail, é preciso desassociar a oferta de e-mail **antes** da rescisão do alojamento web em causa.

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, na caixa **Configuração**, clique no botão `...`{.action} à direita da menção `Endereços de e-mail` e, a seguir, em `Desassociar a minha opção de e-mail`{.action}.
4. Siga as instruções para encomendar uma oferta de e-mail independente que lhe permitirá conservar os seus endereços de e-mail já criados.

///

/// details | Quando rescindir um alojamento web "Performance", como conservar a oferta "Web Cloud Databases" associada?

Os alojamentos web **Performance** incluem uma oferta Web Cloud Databases ativável gratuitamente.<br>
Quando rescindir ou eliminar o seu alojamento web **Performance**, a oferta Web Cloud Databases eventualmente associada será igualmente rescindida. Para conservar a sua solução Web Cloud Databases, deverá desassociá-la **antes** da rescisão do alojamento.

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, na caixa **Configuração**, clique no botão `...`{.action} à direita da menção `Web Cloud Databases` e, a seguir, em `Desassociar`{.action}.
4. Siga as instruções para encomendar uma oferta Web Cloud Databases independente para conservar a sua solução Web Cloud Databases já criada.

**Esta ação é irreversível e a oferta Web Cloud Databases será faturada independentemente do seu alojamento web Performance.**

///

/// details | Como aumentar a RAM de uma oferta "Web Cloud Databases" associada a um alojamento web "Performance"?

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Web Cloud Databases`{.action} e escolha a solução Web Cloud Databases correspondente.
3. Na página que se abrir, na caixa **Informações gerais**, clique no botão `...`{.action} à direita da menção `RAM` e, a seguir, em `Alterar quantidade de RAM`{.action}.
4. Siga as instruções para encomendar a quantidade de RAM desejada e prossiga até à validação da encomenda.

> [!success]
>
> Consulte também, se necessário, a secção "*Editar a oferta Web Cloud Databases*" do guia "[Configuração de uma oferta Web Cloud Databases](/pages/web_cloud/web_cloud_databases/configure-database-server)".

///

## Diagnóstico

> [!success]
>
> Se encontrar um problema não mencionado nesta FAQ, consulte a secção "*Diagnóstico*" dos nossos [guias sobre soluções de alojamento web](/products/web-cloud-hosting).

/// details | O que fazer se o meu website tiver um problema?

Existem várias razões que podem explicar um problema de funcionamento do seu website.<br>
Para identificar a causa, comece por verificar que nenhuma das suas subscrições necessita de ser **renovada**.

Siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Na página que se abrir, clique no seu nome no canto superior direito e selecione `As minhas ofertas e serviços`{.action}.

> [!success]
>
> Encontre todos os pormenores no nosso guia "[Como renovar os meus serviços OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

De seguida, consulte os [eventos em curso na nossa infraestrutura](https://www.status-ovhcloud.com/).

Se todos os seus serviços se encontrarem ativos e não forem afetados por qualquer incidente ou manutenção, realize um diagnóstico mais aprofundado.

> [!success]
>
> Consulte a secção "*Diagnóstico*" dos nossos [guias sobre as soluções de alojamento web](/products/web-cloud-hosting).

///

/// details | O que fazer se a página "Site em construção" da OVHcloud continuar a ser apresentada depois de o meu site estar online?

![site-en-construction](/pages/assets/screens/other/browsers/errors/site-en-construction.png){.thumbnail}

Ao instalar o seu alojamento web, a OVHcloud implementa esta página de espera sob a forma de um ficheiro **index.html** contido na pasta `www` presente no espaço de armazenamento FTP do seu alojamento web.

Existem dois casos possíveis:

- Se instalou um [Módulos "1 clique"](/pages/web_cloud/web_hosting/cms_install_1_click_modules): este ficheiro é automaticamente eliminado pelos nossos robôs de instalação.
- Se instalou o seu website manualmente, siga os passos abaixo:
    - Ligue-se ao [espaço de armazenamento FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web.
    - Depois de aceder ao espaço de armazenamento FTP, aceda ao diretório `www`.
    - Renomear o ficheiro **index.html** em **index.html.old**. Esta operação irá desativar a página após alguns minutos.

> [!success]
>
> Encontre mais detalhes nos seguintes guias:
>
> - [Aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection).
> - [Alterar a palavra-passe de um utilizador FTP](/pages/web_cloud/web_hosting/ftp_change_password).
> - [Tutorial - Utilizar o FileZilla com o seu alojamento OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
> - [Tutorial - Utilizar o Cyberduck com o meu alojamento web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac).

///

/// details | Após a criação, o meu website será apresentado com um endereço do tipo "xxxxx.clusterXXX.hosting.ovh.net". O que devo fazer?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

O seu website foi criado com um [Módulos "1 clique"](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizando, no momento da instalação, o endereço web predefinido do seu alojamento web "xxxxx.clusterXXX.hosting.ovh.net".

Será necessário eliminar o módulo 1 clique e voltar a instalá-lo.

> [!warning]
>
> A eliminação de um [Módulos "1 clique"](/pages/web_cloud/web_hosting/cms_install_1_click_modules), tal como a de uma base de dados, é definitiva. Implica igualmente a **eliminação dos backups** dos dados em causa. Antes de eliminar o seu website no alojamento web, **certifique-se de que consegue criar o seu site da mesma forma**. Se tiver dúvidas sobre as ações a executar, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).
>
> Consulte também os guias detalhados, se necessário:
>
> - [Restaurar o espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Recuperar a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export).

**Apenas** Depois de realizar todos os backups necessários, elimine o seu [Módulos "1 clique"](/pages/web_cloud/web_hosting/cms_install_1_click_modules) através das seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, clique no separador `Módulos "1 clique"`{.action}.
4. Na tabela que aparecer, clique no botão `...`{.action} à direita na linha do *Módulos "1 clique"* em causa e, a seguir, em `Eliminar o módulo`{.action}.

A eliminação do *módulo "1 clique"* pode demorar **vários minutos**.

De seguida, elimine a base de dados associada, executando as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, clique no separador `Bases de dados`{.action}.
4. Na tabela que aparecer, clique no botão `...`{.action} à direita na linha da base de dados em causa e, a seguir, em `Eliminar base de dados`{.action}.

A eliminação da base de dados associada pode demorar **vários minutos**.

Uma vez terminadas as eliminações, realize uma nova instalação do seu *Módulos "1 clique"*, zelando por selecionar o nome de domínio desejado.

> [!success]
>
> Encontre todos os detalhes no nosso guia "[Instalar o seu website com um 'módulo 1 clique' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

///

/// details | No seguimento de uma alteração, o meu Web site será apresentado com um endereço do tipo "xxxxx.clusterXXX.hosting.ovh.net". O que devo fazer?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

O seu website é apresentado com o endereço web predefinido do seu alojamento web do tipo "xxxxx.clusterXXX.hosting.ovh.net" após uma alteração do seu [Módulos "1 clique"](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Se o seu website apresentar este URL após uma operação, a solução mais rápida será restaurá-lo para um estado anterior onde funcionasse corretamente.

> [!alert]
>
> O restauro de um alojamento web implica o restauro de **todos os websites** que o mesmo contém.
>
> Aquando de um restauro, o conteúdo do seu espaço de armazenamento FTP, ou do da sua base de dados, é substituído de forma irreversível por um backup. Os dados presentes **antes do lançamento da restauração** no espaço de armazenamento FTP ou na base de dados a restaurar serão substituídos e perdidos permanentemente. Se necessário, certifique-se de que tem de efetuar previamente uma cópia de segurança deste conteúdo. Se tiver dúvidas sobre as ações a executar, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).
>
> Consulte também os guias detalhados, se necessário:
>
> - [Restaurar o espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Recuperar a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export).

Para restaurar o código-fonte do seu website, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que vai aparecer, clique no separador `FTP - SSH`{.action}.
4. Na nova página que aparece, clique no botão `Restaurar um backup`{.action}.
5. Na janela que aparece, escolha a data do backup que pretende restaurar e prossiga até que o restauro seja iniciado.

O restauro do espaço de armazenamento FTP pode demorar **vários minutos**.

Para restaurar um backup da sua base de dados, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, clique no separador `Bases de dados`{.action}.
4. Na tabela que aparecer, clique no botão `...`{.action} situado à direita na linha da base de dados em causa e, a seguir, em `Restaurar um backup`{.action}.
5. Na nova página que vai aparecer, escolha a cópia de segurança que pretende restaurar (**idealmente a que corresponde à data escolhida para o restauro do código-fonte do seu website (ver acima)**).
6. Depois de escolher o backup, clique no botão `...`{.action} à direita do backup a restaurar e, a seguir, em `Restaurar backup`{.action}.

O restauro de uma base de dados pode demorar **vários minutos**.

> [!success]
>
> Encontre todos os detalhes nos seguintes guias:
>
> - [Alojamento Web - Restaurar o espaço de armazenamento FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Restaurar um backup da sua base de dados](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

///

/// details | O meu website reencaminha para a interface de ligação ao Webmail OVHcloud. O que devo fazer?

![webmail-login-interface](/pages/assets/screens/website/webmail/webmail-login-interface.png){.thumbnail}

Esta situação indica uma configuração errada ao nível dos [servidores DNS](/pages/web_cloud/domains/dns_server_edit) ou da [zona DNS](/pages/web_cloud/domains/dns_zone_edit) associados ao seu domínio.

O caso mais comum é o seguinte: encomendou separadamente o seu nome de domínio e o seu alojamento web. Como tal, estes não são automaticamente ligados através da zona DNS do seu domínio.

Para corrigir isto, siga estes passos:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Nomes de domínio`{.action} e escolha o domínio em causa.
3. Na página que vai aparecer, clique no separador `Servidores DNS`{.action}.
4. De seguida, anote os nomes dos servidores DNS indicados e aceda ao separador `Zona DNS`{.action} (à direita do separador `Servidores DNS`{.action}).
5. Na tabela (que representa a zona DNS do nome de domínio) que aparece, compare os `Alvos` das entradas do tipo `NS` presentes na zona DNS com os nomes dos servidores DNS recuperados anteriormente. Podem ocorrer três situações. Clique nas guias abaixo para exibir sucessivamente cada um dos **3** casos.

> [!tabs]
> **Caso n°1**
>>
>> Os `Alvos` (servidores DNS) das entradas do tipo `NS` declaradas na zona DNS do nome de domínio **são iguais** às recuperadas no separador `Servidores DNS`{.action}.
>>
>> Neste caso, significa que o seu nome de domínio (ou o seu subdomínio em *www*) aponta para o endereço IP do nosso servidor de reencaminhamento (213.186.33.5).
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>> 2. Clique no menu `Nomes de domínio`{.action} (ou no menu `Zonas DNS`{.action}, se utilizar a versão beta da Área de Cliente OVHcloud) e escolha o domínio em causa.
>> 3. Na página que se abrir, clique no separador `Zona DNS`{.action}.
>> 4. Na tabela que aparece (representando a zona DNS do seu domínio), identifique a entrada do tipo `A` cujo `Alvo` é o endereço IP `213.186.33.5`.
>> 5. Clique no botão `...`{.action} à direita da linha e, a seguir, em `Modificar entrada`{.action}.
>> 6. Na janela que se abrir, substitua, no compo `Alvo *`, o endereço IP `213.186.33.5` pelo endereço IP do alojamento web onde se encontra o seu website.
>>
>> > [!success]
>> >
>> > Se necessário, consulte também os seguintes guias detalhados:
>> >
>> > - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>> > - [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>>
> **Caso n°2**
>>
>> Os `Alvos` (servidores DNS) das entradas do tipo `NS` declaradas na zona DNS do nome de domínio **não são idênticos** às que são obtidas no separador `Servidores DNS`{.action}. No entanto, os `Alvos` (servidores DNS) assumem uma das seguintes formas:
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` **ou** `nsXXX.ovh.net` e `dnsXXX.ovh.net` (em que cada `X` designa um algarismo compreendido entre **0** e **9**);
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` **ou** `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (em que cada `X` designa um algarismo compreendido entre **0** e **9**);
>> - `ns200.anycast.me` e `dns200.anycast.me` (se subscreveu a opção [DNS anycast](/links/web/domains-options)).
>>
>> > [!primary]
>> >
>> > Se um dos seus servidores DNS declarados no separador `Servidores DNS`{.action} tiver a seguinte forma: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXXXX.ovh.net` ou `vpsXXXXXX.ovh.ca` (em que cada `X` designa um algarismo compreendido entre **0** e **9**), consulte diretamente o **Caso n°3**.
>> > Trata-se de nomes de servidores DNS fornecidos pela OVHcloud que permitem unicamente aos nossos clientes alojar a sua configuração DNS diretamente nos seus próprios servidores (Servidores dedicados, VPS, etc.).
>>
>> Neste caso, isto significa que o seu domínio não utiliza os servidores DNS corretos da OVHcloud para aplicar a configuração da zona DNS presente no separador `Zona DNS`{.action}.
>>
>> Para corrigir isto, siga estes passos:
>>
>> 1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>> 2. Clique no menu `Nomes de domínio`{.action} e escolha o domínio em causa.
>> 3. Na página que se abrir, clique no separador `Servidores DNS`{.action}.
>> 4. Na nova página que aparece, clique no botão `Modificar os servidores DNS`{.action}.
>> 5. Na página que se abrir, selecione `Utilizar os DNS predefinidos da OVHcloud`{.action} e clique no botão `Aplicar configuração`{.action}.
>>
>> A propagação da atualização dos servidores DNS aplicados a um domínio pode levar até **48** horas.
>>
>> > [!success]
>> >
>> > Encontre todos os pormenores no nosso guia "[Modificar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
> **Caso n°3**
>>
>> Os `Alvos` (servidores DNS) das entradas do tipo `NS` declaradas na zona DNS do nome de domínio **não são idênticos** às que são obtidas no separador `Servidores DNS`{.action}. Além disso, os nomes dos servidores DNS recuperados no separador `Servidores DNS`{.action} não têm nenhuma das formas descritas no **Caso n°2**, com exceção das seguintes formas: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXXXX.ovh.net` ou `vpsXXXXXX.ovh.ca` (em que cada `X` designa um algarismo compreendido entre **0** e **9**).
>>
>> Neste caso, isto significa que a zona DNS ativa aplicada ao seu domínio não é gerida pela OVHcloud diretamente. Contacte o seu Webmaster, o seu fornecedor de nome de domínio, o seu fornecedor de DNS ou um dos nossos [parceiros](/links/partner).

///

/// details | O que fazer se o meu website apresentar um erro "A página não é redirecionada corretamente"?

![the-page-isnt-redirecting-properly](/pages/assets/screens/other/browsers/errors/the-page-isnt-redirecting-properly.png){.thumbnail}

Neste caso, a solução mais rápida será restaurá-lo para um estado anterior em que tenha funcionado corretamente.

> [!alert]
>
> O restauro de um alojamento web implica o restauro de todos os websites** que o mesmo contém.
>
> Aquando de um restauro, o conteúdo do seu espaço de armazenamento FTP, ou do da sua base de dados, é substituído de forma irreversível por um backup. Os dados presentes **antes do lançamento da restauração** no espaço de armazenamento FTP ou na base de dados a restaurar serão substituídos e perdidos permanentemente. Por isso, certifique-se de que tem de obter previamente uma cópia de segurança deste conteúdo. Se tiver dúvidas sobre as ações a executar, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).
>
> Consulte também estes guias detalhados:
>
> - [Restaurar o espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Recuperar a cópia de segurança da base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_database_export).

Para restaurar o código-fonte do seu website, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que vai aparecer, clique no separador `FTP - SSH`{.action}.
4. Na nova página que aparece, clique no botão `Restaurar um backup`{.action}.
5. Na janela que aparece, escolha a data do backup que pretende restaurar e prossiga até que o restauro seja iniciado.

O restauro do espaço de armazenamento FTP pode demorar **vários minutos**.

Para restaurar um backup da sua base de dados, siga estas etapas:

1. Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
2. Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
3. Na página que se abrir, clique no separador `Bases de dados`{.action}.
4. Na tabela que aparecer, clique no botão `...`{.action} situado à direita na linha da base de dados em causa e, a seguir, em `Restaurar um backup`{.action}.
5. Na nova página que vai aparecer, escolha a cópia de segurança que pretende restaurar (**idealmente a que corresponde à data escolhida para o restauro do código-fonte do seu website (ver acima)**).
6. Depois de escolher o backup, clique no botão `...`{.action} à direita do backup a restaurar e, a seguir, em `Restaurar backup`{.action}.

O restauro de uma base de dados pode demorar **vários minutos**.

> [!success]
>
> Encontre todos os detalhes nos seguintes guias:
>
> - [Restaurar o espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Importar um backup para a base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

Se o restauro não permitir restabelecer o acesso ao seu website, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).

///

/// details | O que fazer se o meu website apresentar um erro "503 error Backend fetch failed (Varnish cache)"?

![503_varnish](/pages/assets/screens/other/browsers/errors/http-503-backend-varnish.png){.thumbnail}

Se ativou a [opção CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) do seu alojamento web, desative o modo *Manutenção* no seu site WordPress ou PrestaShop.

Se não ativou esta opção nem utilizou o modo *Manutenção*, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).

De facto, este erro também pode aparecer em caso de pedido HTTP que chegue ao *timeout* no seu website.

> [!success]
>
> Consulte também os guias detalhados, se necessário:
>
> - [Acelerar o meu website utilizando o CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
> - [Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

///

/// details | O que fazer se o meu website apresentar um erro "Your request has been blocked"?

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

A página "Your request has been blocked" pode ser apresentada por vários motivos (lista não exaustiva):

- O pedido é efetuado a partir de um browser Internet (Firefox, Chrome, Safari, Edge, etc.) não atualizado.
- Um grande número de pedidos, semelhantes ou não, são efetuados num prazo extremamente curto.
- O pedido tenta executar ações não autorizadas na infraestrutura partilhada onde se encontra o seu alojamento web.

Nesta situação, são necessárias várias ações:

- Verifique se o seu browser da Internet está atualizado.
- Recupere o URL chamado (por exemplo: `https://www.domain.tld`), bem como todas as informações presentes na página "Your request has been blocked" (`IP address`, `Date` e `Request ID`).
- Transmita os elementos recuperados ao suporte através da criação de um [ticket de assistência](https://help.ovhcloud.com/csm?id=csm_get_help).

Se tiver dúvidas sobre as ações a executar, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).

> [!success]
>
Consulte também o nosso guia detalhado: [O que acontece se a página "Your request has been blocked" aparecer?](/pages/web_cloud/web_hosting/diagnostic_request_blocked).

///

/// details | O que devo fazer se o meu website apresentar um erro "Your IP has been banned"?

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

A página "Your IP has been banned" pode ser apresentada por vários motivos (lista não exaustiva):

- Um grande número de pedidos, semelhantes ou não, são efetuados num prazo extremamente curto a partir do mesmo endereço IP.
- As consultas efetuadas a partir do endereço IP em questão são suspeitas.

Nesta situação, são necessárias várias ações:

- Recupere o URL chamado (por exemplo: `https://www.domain.tld`), bem como todas as informações presentes na página "Your IP has been banned" (`IP address`, `Date` e `Request ID`).
- Transmita os elementos recuperados ao suporte através da criação de um [ticket de assistência](https://help.ovhcloud.com/csm?id=csm_get_help).

Se tiver dúvidas sobre as ações a executar, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).

> [!success]
>
> Consulte também o nosso guia detalhado: [O que acontece se a página "Your IP has been banned" aparecer?](/pages/web_cloud/web_hosting/diagnostic_ip_banned).

///

/// details | Eu encomendei um domínio com acentos e ele escreve de forma estranha na minha Área de Cliente. O que devo fazer?

![notação_idn](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/idn-notation.png){.thumbnail}

Não tem nada a fazer nesta situação. Mesmo que o seu domínio seja apresentado em [notação internacionalizada (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name) na sua Área de Cliente, funcionará e apresentará-se de forma perfeitamente normal noutro local. O endereço Web do seu site será apresentado conforme solicitado. Os seus endereços de e-mail aparecerão também conforme o seu desejo.

> [!alert]
>
> É desaconselhado utilizar um endereço de e-mail com um nome de domínio IDN (Internationalized Domain Name) a partir de um cliente de e-mail (Outlook, Mail de macOS, etc.). Alguns clientes de correio eletrónico não interpretam nomes de domínio com caracteres acentuados, o que bloqueia a transmissão de correio eletrónico. Um remetente que lhe envie um e-mail receberá uma mensagem automática indicando que o seu endereço de e-mail não existe.
>
> **Recomenda-se a reserva do mesmo domínio sem acentos, em complemento do seu nome de domínio com caracteres acentuados, a fim de evitar incompatibilidades na troca de e-mails.**
>

///

## Quer saber mais? <a name="go-further"></a>

[FAQ - E-mails partilhados MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).