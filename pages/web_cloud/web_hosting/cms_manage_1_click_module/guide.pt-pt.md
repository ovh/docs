---
title: "Como gerir o seu módulo em 1 clique?"
excerpt: "Saiba como gerir o módulo 1 clique na Área de Cliente OVHcloud"
updated: 2022-09-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os módulos 1 clique permitem a instalação fácil e rápida de um software on-line de assistência à criação de um website (vulgarmente denominado "CMS"). A OVHcloud propõe-lhe os mais conhecidos: WordPress, PrestaShop, Drupal e Joomla!.

**Saiba como gerir o módulo 1 clique na Área de Cliente OVHcloud.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#go-further)?
>

## Requisitos

- Ter um [serviço de alojamento Web Cloud](/links/web/hosting) que permite a instalação de um módulo 1 clique.
- Ter criado um módulo 1 clique no alojamento (Se ainda não o fez, siga as instruções deste [manual](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Aceder ao seu site

Para aceder à parte pública do seu site após a instalação de um módulo 1 clique, aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Web Cloud`{.action}, `Alojamentos`{.action}, no alojamento em causa e no separador `Módulos "1 clique"`{.action}.

A seguir, clique no botão `...`{.action} à direita da linha relativa ao módulo e, a seguir, em `Aceder ao módulo`{.action}.

> [!primary]
>
> Se o website não for apresentado corretamente após esta operação, consulte os guias OVHcloud relativos aos alojamentos partilhados na secção [Diagnóstico](/products/web-cloud-hosting).
>

### Aceder à interface de administrador

Para aceder à parte do seu site reservada aos administradores, aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Web Cloud`{.action}, `Alojamentos`{.action}, no alojamento em causa e, a seguir, no separador `Módulos "1 clique"`{.action}.

A seguir, clique no botão `...`{.action} à direita da linha relativa ao módulo e, a seguir, em `Aceder à interface de administração do módulo`{.action}.

### Encontrar o identificador de administrador

Clique no separador `Módulos "1 clique"`{.action} a partir da parte `Alojamentos`{.action} da sua Área de Cliente. O identificador administrador do seu módulo aparece na coluna `Nome de utilizador`.

Também pode procurar o e-mail recebido durante a criação do módulo a partir do seu [Área de Cliente OVHcloud](/links/manager): clique no seu nome no canto superior direito do ecrã e, no menu que aparecer, clique em `E-mails de serviço`{.action}.

### Modificar a palavra-passe do seu módulo <a name="password-change"></a>

Pode alterar a palavra-passe do módulo a partir da [Área de Cliente OVHcloud](/links/manager) ou através de uma ligação direta à página de acesso ao espaço de administrador do seu website.
Em ambos os casos, ser-lhe-á enviado um e-mail de reinicialização da password.

> [!primary]
>
> **O que fazer se não tiver recebido o e-mail de reinicialização da password administrador do seu site?**
>
> Na caixa de e-mail em causa, verifique as pastas `Spams`{.action} e `Elementos suprimidos`{.action}.
>
> Pode igualmente encontrar o conjunto dos e-mails enviados pelos nossos serviços a partir do seu [Área de Cliente OVHcloud](/links/manager): clique no seu nome no canto superior direito do seu ecrã e, no menu contextual à direita do ecrã, clique em `E-mails de serviço`{.action}.
>
> **Duração dos vínculos:**
>
> - Depois de receber o e-mail de alteração da password, o link de reinicialização ficará válido durante 48 horas. 
> - Depois de clicar na ligação, esta só é válida durante 30 minutos.
>

> [!warning]
>
> A alteração da palavra-passe de acesso à interface de gestão do seu CMS a partir da Área de Cliente OVHcloud só pode ser efetuada **se forem respeitadas as seguintes condições** :
>
> - O CMS foi instalado com a opção "módulo 1 clique" durante a encomenda do alojamento ou a partir da Área de Cliente OVHcloud.
> O utilizador (nome de utilizador, endereço de e-mail, etc.) não foi modificado através do CMS ou da base de dados.
> A página de acesso à interface de administração do seu CMS não foi alterada. Em particular, o URL de acesso à interface de administração do seu CMS não deve ter sido alterado através do CMS. Não devem ter sido impostas restrições nesta mesma página.
> - O "prefixo" das tabelas presentes na sua base de dados não foi modificado a partir do CMS ou da base de dados diretamente.
>
> Caso contrário, deverá seguir a documentação oficial do CMS que utiliza ou contactar diretamente o editor do CMS.
>

Para alterar a palavra-passe de acesso à interface de administração do seu website **através da Área de Cliente OVHcloud**, clique em `Web Cloud`{.action}, `Alojamentos`{.action}, no alojamento em causa e no separador `Modules "1 clique"`{.action}.

A seguir, clique no botão `...`{.action} à direita da linha relativa ao seu módulo e depois `Alterar palavra-passe`{.action}. Clique em `Validar`{.action}. Receberá dentro de alguns minutos por e-mail um link de reinicialização da sua password.

> [!primary]
>
> Se não pode alterar a palavra-passe de acesso à interface de gestão do seu CMS a partir da Área de Cliente OVHcloud pelas razões indicadas acima, poderá consultar a documentação oficial para os diferentes CMS propostos em instalação nos nossos alojamentos partilhados:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : O editor deste programa não propõe, à data, documentação para alterar a palavra-passe de acesso à interface de administração do Drupal. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, consulte a página oficial [drupal.org](https://www.drupal.org/){.external}.
> - PrestaShop : O editor deste software não propõe, à data, documentação para alterar a palavra-passe de acesso à interface de administração do PrestaShop. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, clique em [aqui](https://www.prestashop.com){.external} para aceder à sua página oficial.
>
Também é possível alterar a palavra-passe de acesso à interface de administração do seu CMS diretamente a partir da sua base de dados.<br>
No entanto, se encontrar dificuldades, recomendamos vivamente que efetue a operação com a documentação proposta pelo editor do seu CMS ou que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.

### Eliminar o módulo

> [!warning]
>
> O backup dos seus dados faz parte das operações essenciais à [segurança dos seus websites](/pages/web_cloud/web_hosting/secure_your_website). Sugerimos que importe regularmente e **antes de eliminar** o backup dos seus dados para um suporte local, como uma pen USB ou um disco rígido externo, de acordo com as instruções deste [manual](/pages/web_cloud/web_hosting/exporter-son-site-web).
>

#### Etapa 1: identificar a base de dados do módulo <a name="step1"></a>

Para eliminar o módulo 1 clique, deve começar por identificar a sua base de dados de forma **segura**. Para isso, aceda à [Área de Cliente OVHcloud](/links/manager). Clique em `Web Cloud`{.action}, `Alojamentos`{.action}, no alojamento em causa e, a seguir, no separador `Bases de dados`{.action}.

Se dispõe de uma única base de dados nesta parte da sua Área de Cliente e não dispõe de soluções [Web Cloud Databases](https://www.ovh.pt/cloud/cloud-databases/), pode considerar que se trata do seu site.

Caso contrário, clique no separador `Multisite`{.action}. Tome nota do nome da `Pasta raiz`: trata-se do diretório no qual se encontram os ficheiros que constituem o seu módulo 1 clique no servidor FTP.

Aceda ao [espaço FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento. Abra a `Pasta raiz` encontrada anteriormente no separador `Multisite`{.action} e procure o ficheiro de configuração do seu módulo:

- Para WordPress : **"wp-config.php"** (o nome da base de dados aparece com a menção **"DB_NAME"**).
- Para Joomla! : **"configuration.php"** (o nome da base de dados aparece com a menção **"public $db"**).
- Para o Drupal: **"settings.php"** (Para encontrá-lo, aceda à pasta **"sites"** e **"default"**. O nome da base de dados aparece sob a menção **"database""**).
- Para PrestaShop : **"parameters.php"** (Para o encontrar, aceda à pasta **"app"** e **"config"**. O nome da base do módulo aparece na rubrica **"database_name"**.

#### Etapa 2: guardar o seu módulo

Para guardar o seu site, siga as instruções deste [guia](/pages/web_cloud/web_hosting/exporter-son-site-web) para recuperar os seus ficheiros no espaço FTP do seu alojamento e a sua base de dados.

#### Etapa 3: eliminar o módulo

> [!alert]
>
> A eliminação do módulo 1 clique e da base de dados irá também resultar **na eliminação de todos os backups**. Os dados eliminados não poderão ser recuperados posteriormente.
>

Para eliminar o módulo 1 clique, aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Web Cloud`{.action}, `Alojamentos`{.action}, no alojamento em causa e em `Módulos "1 clique"`{.action}.

A seguir, clique no botão `...`{.action} à direita da linha que designa o seu módulo e, a seguir, no comando `Eliminar o módulo`{.action}.

> [!warning]
>
> A eliminação do módulo 1 clique **não levará automaticamente à eliminação da base de dados**. Se ativar a instalação de um novo CMS sem eliminar previamente a base de dados do anterior (e o alojamento não permitir a criação automática de uma nova base de dados), aparecerá a mensagem "[Ocorreu um erro aquando do carregamento das informações (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#ocorreu-um-erro-aquando-do-carregamento-das-informacoes-you-need-at-least-one-free-database)" na sua Área de Cliente.
>
> Se dispõe de uma subscrição [Hosting Perso](/links/web/hosting-personal-offer) ou se já criou quatro bases de dados sobre o seu alojamento [Hosting Pro](/links/web/hosting-professional-offer) ou [Hosting Performance](/links/web/hosting-performance-offer), deverá eliminar a base de dados identificada [no passo 1](#step1) **ANTES** de poder criar um novo módulo 1 clique.
>

Para terminar a eliminação do módulo, aceda ao separador `Bases de dados`{.action}, ainda na secção `Web cloud`{.action}, `Alojamentos`{.action} e no alojamento em causa, na [Área de Cliente OVHcloud](/links/manager) e clique em `...`{.action} à direita da linha que designa a base e no botão `Eliminar base de dados`{.action}.

Antes de reiniciar a instalação de um novo módulo, verifique que as tarefas de eliminação solicitadas anteriormente foram finalizadas através do separador `operações em curso`{.action}.

### Boas práticas

Para proteger o seu site, siga as instruções deste [guia](/pages/web_cloud/web_hosting/secure_your_website).

Adicione ferramentas de teste do tipo CAPTCHA aos formulários do seu site.

Não instale no seu site plugins ou templates que não foram recomendados pelas comunidades oficiais do seu CMS: 

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://community.joomla.org/){.external}
- [Drupal](https://www.drupal.org/community){.external}
- [PrestaShop](https://www.prestashop.com/pt){.external}

## Quer saber mais? <a name="go-further"></a>

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).