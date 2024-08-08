---
title: "FAQ Web Hosting"
excerpt: "Encontre aqui as questões mais comuns sobre os alojamentos web da OVHcloud"
updated: 2024-06-27
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Gestão da sua oferta

### Como configurar o meu alojamento?

Para configurar o seu alojamento, comece por aceder à [Área de Cliente OVHcloud](/links/manager). A partir da secção `Alojamentos`, poderá gerir os seus certificados SSL, a versão PHP, a opção CDN, o multi-site, as bases de dados, etc.

**Truques e dicas**: Para o ajudar a configurar o seu alojamento, sugerimos que consulte a rubrica "Primeiros passos", que poderá encontrar [aqui](/products/web-cloud-hosting).

### Como gerir as minhas palavras-passe?

Para gerir as suas palavras-passe, antes de mais tem de aceder à [Área de Cliente OVHcloud](/links/manager). Se tiver esquecido o ID ou a palavra-passe, clique em `Perdeu o identificador ou a palavra-passe?`{.action}, na janela de login. Receberá um e-mail para dar início a um processo de reinicialização.

Também pode consultar o guia [Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password).

Depois de aceder à Área de Cliente:

- Para alterar a palavra-passe do seu espaço FTP, siga as instruções [deste manual](/pages/web_cloud/web_hosting/ftp_change_password).
- Para alterar a palavra-passe da base de dados, siga as instruções [deste manual](/pages/web_cloud/web_hosting/sql_change_password).
- Para alterar a palavra-passe do seu endereço de e-mail MX Plan, siga as instruções [deste manual](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password).

### Como pôr o meu site em linha? 

Para colocar o seu site online, deverá dispor de um [domínio](/links/web/domains) correspondente ao endereço Web a partir do qual o seu site estará acessível (exemplo: *meudominio.com*). Também precisará de um [alojamento](/links/web/hosting) para instalar o seu site.

Para seguir os passos necessários para construir o seu website, consulte esta [página](/links/web/hosting-website) e siga as instruções do guia [Publicar um website no seu alojamento web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**Truques e dicas**: Para o ajudar a criar o seu site, a OVHcloud permite-lhe instalar no seu alojamento um software de assistência à criação de sites (WordPress, PrestaShop, Joomla! e Drupal), graças à funcionalidade [Módulos 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

### Como transferir sem interrupção de serviço o meu website, a minha base de dados, o meu domínio e os meus e-mails para os servidores OVHcloud?

Consulte o guia "[Migrar o seu website e os seus serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" para obter o conjunto das etapas a seguir.

### Como alojar vários sites num alojamento partilhado?

Consulte o guia [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).

### Como mudar de fórmula de alojamento?

Para encomendar a fórmula de alojamento web mais adaptada às suas necessidades, pode consultar as nossas ofertas em [esta página](/links/web/hosting).

Uma vez selecionada a opção, siga as instruções do nosso manual ["Fazer evoluir o seu plano de alojamento web"](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer).

### Como conservar a oferta de e-mail associada ao meu alojamento partilhado aquando de uma rescisão?

Quando rescinde ou elimina o seu alojamento partilhado, a oferta de e-mail que está associada é igualmente rescindida. Para conservar os endereços de e-mail, é necessário desassociar a oferta de e-mail antes que o alojamento seja rescindido.<br>

Para isso, aceda ao separador `Informações gerais`{.action} do alojamento. Na secção **Configuração**, clique no botão `...`{.action} à direita de `Endereços de e-mail`. Clique em `Desassociar a minha opção de e-mail`{.action} e siga as instruções para encomendar uma oferta de e-mail independente que lhe permitirá conservar os seus endereços de e-mail já criados.

### Durante a rescisão de um alojamento partilhado Performance, como conservar a oferta Web Cloud Databases associada?

Os alojamentos partilhados **Performance** incluem uma oferta Web Cloud Databases ativável gratuitamente.
Quando rescinde ou elimina o seu alojamento partilhado **Performance**, a oferta Web Cloud Databases que está associada também é rescindida. Para conservar o seu Web Cloud Databases, terá de o desassociar antes da rescisão do alojamento.<br>

Para isso, clique no separador `Informações gerais`{.action} do seu alojamento. Na secção **Configuração**, clique no botão `...`{.action} à direita de "**Web Cloud Databases**". Clique em `Desassociar`{.action} e siga as instruções para encomendar uma oferta Web Cloud Databases independente, o que lhe permitirá conservar o seu Web Cloud Databases já criado.

### Como aumentar a RAM de uma oferta Web Cloud Databases associada a um alojamento partilhado "Performance"?

Para aumentar a RAM de uma oferta Web Cloud Databases associada a um alojamento partilhado **Performance**, deverá obrigatoriamente e previamente desassociar a oferta Web Cloud Databases do seu alojamento **Performance** para migrar para uma oferta superior.

Para isso, aceda à Área de Cliente OVHcloud (/links/manager). Aceda à secção `Web Cloud`{.action}, no separador `os Alojamentos`{.action}, à esquerda. 

Na página `Informações gerais`{.action}, encontra-se no centro da página uma caixa intitulada `Configuração`{.action}. À direita da menção `Web Cloud Databases`{.action}, clique no botão `...`{.action} depois `Desassociar`{.action}. Escolha a duração da renovação mais curta e prossiga até à validação da encomenda.

Para mais informações, consulte o nosso guia sobre a ["Configuração de uma oferta Web Cloud Databases"](/pages/web_cloud/web_cloud_databases/configure-database-server#modify-ram-web-cloud-db)

**Esta ação é irreversível e a oferta Web Cloud Databases será depois faturada independentemente do seu alojamento web Performance.**

## Diagnóstico

> [!warning]
>
> Se encontrar uma anomalia não listada nesta FAQ, consulte as páginas "*Diagnóstico*" da [nossa documentação](/products/web-cloud-hosting).
>

### O que fazer se o meu site tiver um problema de funcionamento? 

Várias razões podem explicar o mau funcionamento do seu site. Para identificar a causa, comece por verificar que nenhuma das suas subscrições precisa de ser **renovada** ligando-se à sua [Área de Cliente OVHcloud](/links/manager).

Consulte os [eventos em curso na nossa infraestrutura](https://www.status-ovhcloud.com/). Se todos os seus serviços estiverem ativos e não forem afetados por qualquer incidente ou manutenção, sugerimos que realize um diagnóstico mais aprofundado.

### O que fazer se, depois de colocar o meu site online, a página "Site em construção" da OVHcloud ficar apresentada?

![site-en-construction](/pages/assets/screens/other/browsers/errors/site-en-construction.png){.thumbnail}

Aquando da instalação do seu alojamento, a OVHcloud implementa esta página de espera sob a forma de um ficheiro **index.html** contido na pasta `www` do seu servidor FTP.

Este ficheiro é automaticamente desativado durante a criação do seu [módulo 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Se escolheu instalar o seu site [de forma manual](/pages/web_cloud/web_hosting/cms_manual_installation), [ligue-se ao seu espaço FTP](/pages/web_cloud/web_hosting/ftp_connection) para que o possa denominar em **index.html.old**.

### O que fazer se o meu site for apresentado num endereço web do tipo "xxxx.cluster0xx.hosting.ovh.net"?

![cluster url](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

São possíveis dois cenários. Ou o seu site foi criado com este endereço web ou este surgiu após uma modificação.

#### Cenário 1: o seu site foi criado com um endereço web do tipo "xxxx.cluster0xx.hosting.ovh.net"

> [!warning]
>
> A eliminação de uma base de dados, como a de um módulo 1 clique, é definitiva. Implica igualmente a **supressão das cópias de segurança** dos dados em causa. Antes de eliminar o seu site no alojamento OVHcloud, **certifique-se de que é capaz de o recriar da mesma forma**. Caso tenha dúvidas sobre as operações a realizar, contacte o seu Webmaster ou um dos [nossos parceiros](/links/partner).
>

No primeiro caso, depois de realizar todos os backups necessários, elimine o módulo a partir da parte `Alojamentos` da Área de Cliente OVHcloud:

![delete-a-module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/delete-a-module.png){.thumbnail}

De seguida, elimine a base de dados a partir do separador do mesmo nome situado à direita do seu ecrã, na secção `Alojamentos`:

![delete_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-deletion.png){.thumbnail}
 
Reinicie a sua instalação no domínio pretendido, utilizando a funcionalidade [Módulo 1 clique](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

#### Cenário 2: o seu site apresenta-se com um endereço web do tipo "xxxx.cluster0xx.hosting.ovh.net" na sequência de uma modificação

Se o website aparecer com este URL após uma manipulação, volte-o para o estado anterior.

> [!alert]
>
> O restauro do seu alojamento OVHcloud implicará **o restauro do conjunto dos sites** que contém.
>
> Durante o restauro, o conteúdo do seu espaço FTP ou da sua base de dados é substituído por um backup. De seguida, não poderá recuperar os dados presentes no servidor FTP ou os da base de dados antes do restauro.
>

Para restaurar o código fonte do seu site, consulte o nosso manual [Restaurar o espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).

Se o seu site tiver uma base de dados, consulte o nosso manual [Importar um backup para a base de dados de um alojamento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database#restaurar-um-backup-a-partir-da-area-de-cliente).

### O que fazer se o meu webmail-login-interface for redirecionado para o webmail-login-interface OVHcloud?

![webmail-login-interface](/pages/assets/screens/website/webmail/webmail-login-interface.png){.thumbnail}

Esta anomalia indica uma configuração errada dos [servidores DNS](/pages/web_cloud/domains/dns_server_edit) ou da [zona DNS](/pages/web_cloud/domains/dns_zone_edit) associados ao seu domínio.

O caso mais comum é o seguinte: encomendou separadamente o seu nome de domínio e o seu alojamento, pelo que não estão ligados entre si através da sua zona DNS.

Aceda à secção `Nomes de domínio`{.action} da [Área de Cliente OVHcloud](/links/manager). Clique no domínio em questão e, a seguir, no separador `Servidores DNS`{.action}.

De seguida, tome nota dos servidores DNS indicados e aceda ao separador `Zona DNS`{.action}.

Compare os `Alvo` das entradas do tipo `NS` indicadas no separador `Zona DNS`{.action} com os `Servidores DNS` indicados no separador do mesmo nome:

- Se os elementos forem idênticos, substitua o alvo `213.186.33.5` pelo código de quatro números indicado no separador `Informações gerais` com a menção `IPv4` (para mais informações sobre as operações a efetuar, siga as instruções [deste guia](/pages/web_cloud/domains/dns_zone_edit)).

- Se os elementos não forem idênticos mas os `Servidores DNS` indicados no separador do mesmo nome aparecerem na [lista](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP), efetue uma reinicialização de acordo com as instruções [deste manual](/pages/web_cloud/domains/dns_server_edit).

- Se os elementos não forem idênticos e os `Servidores DNS` indicados no separador do mesmo nome não aparecerem [nesta lista](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP), contacte o seu Webmaster ou procure um fornecedor especializado através da página dos [parceiros OVHcloud](/links/partner).

### O que fazer se o meu website apresentar um erro "A página não se redirige corretamente"?

![the-page-isnt-redirecting-properly](/pages/assets/screens/other/browsers/errors/the-page-isnt-redirecting-properly.png){.thumbnail}

> [!alert]
>
> O restauro do seu alojamento OVHcloud levará ao restauro do conjunto dos sites que contém.
>
> Durante o restauro, o conteúdo do seu espaço FTP ou da sua base de dados é substituído por um backup. De seguida, não poderá recuperar os dados presentes no servidor FTP ou os da base de dados imediatamente antes do restauro.
>

Restaure o seu site para o estado anterior :

- Para restaurar o código fonte do seu site, consulte o nosso manual [Restaurar o espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_save_and_backup).

- Se o seu site tiver uma base de dados, consulte o nosso manual [Restaurar um backup da sua base de dados](/pages/web_cloud/web_hosting/sql_importing_mysql_database#restaurar-um-backup-a-partir-da-area-de-cliente).

Se os restauros não lhe permitem restabelecer o acesso ao seu site, contacte o seu Webmaster ou procure um fornecedor especializado no site dos [parceiros OVHcloud](/links/partner).

### O que fazer se o meu website apresentar um erro "503 error Backend fetch failed (Varnish cache)"?

![503_varnish](/pages/assets/screens/other/browsers/errors/http-503-backend-varnish.png){.thumbnail}

Se ativou a [opção CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) do seu alojamento, desative o modo *Manutenção* no seu site WordPress ou PrestaShop.

Se não ativou esta opção nem utilizou o modo *Maintenance*, contacte o seu Webmaster ou procure um fornecedor especializado no site dos [parceiros OVHcloud](/links/partner).

### O que fazer se o meu site apresentar um erro "Your request has been blocked"?

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

Esta mensagem indica que o tipo de pedido HTTP que pretende realizar no seu site é proibido por um período de tempo limitado. Nesta situação, [verifique os logs](/pages/web_cloud/web_hosting/logs_and_statistics) do seu site para determinar quais os pedidos que provocaram este bloqueio.

Para o ajudar a corrigir estas anomalias, contacte o seu Webmaster ou um dos nossos [parceiros](/links/partner).

### O que fazer se o meu site apresentar um erro "Your IP has been baned"?

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

Esta mensagem indica que o endereço IP que utiliza para se ligar ao seu site está bloqueado por um período de tempo limitado. 

Nesta situação, [verifique os logs](/pages/web_cloud/web_hosting/logs_and_statistics) do seu site, para determinar quais os pedidos que provocaram este bloqueio.<br>
Verifique também que o computador não está infetado com vírus.<br>
Por fim, pode contactar um dos nossos parceiros (/links/partner), para que este verifique o código informático do seu site.

### Eu encomendei um domínio com acentos e ele escreve de forma estranha na minha Área de Cliente. O que devo fazer?

![notação_idn](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/idn-notation.png){.thumbnail}

Não tem nada a fazer nesta situação. Mesmo que o seu domínio seja apresentado em [notação internacionalizada (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name){.external} na sua Área de Cliente, funcionará e apresentará-se de forma perfeitamente normal noutro local. O endereço Web do seu site será apresentado conforme solicitado. Os seus endereços de e-mail aparecerão também conforme o seu desejo.

> [!warning]
>
> A utilização de um endereço de e-mail com um domínio IDN num software de correio eletrónico (Outlook, Mail de macOS, etc.) não é recomendada e pode provocar incompatibilidades.
>

## Quer saber mais? <a name="go-further"></a>

[FAQ - E-mails partilhados MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).