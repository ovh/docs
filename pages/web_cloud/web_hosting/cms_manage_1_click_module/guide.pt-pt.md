---
title: "Como gerir o seu módulo em 1 clique?"
excerpt: "Saiba como gerir o módulo 1 clique na Área de Cliente OVHcloud"
updated: 2026-05-04
---

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

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### Aceder ao seu site

<!-- CP-STEPS-START:access-module -->
Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o seu alojamento web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clique no separador `Módulos "1 clique"`{.action}.
>>
> **Etapa 2**
>>
>> Clique no botão `...`{.action} à direita da linha relativa ao módulo e, a seguir, em `Aceder ao módulo`{.action}.
>>
<!-- CP-STEPS-END:access-module -->

> [!primary]
>
> Se o website não for apresentado corretamente após esta operação, consulte os guias OVHcloud relativos aos alojamentos partilhados na secção [Diagnóstico](/products/web-cloud-hosting).
>

### Aceder à interface de administrador

<!-- CP-STEPS-START:access-admin-interface -->
Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o seu alojamento web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clique no separador `Módulos "1 clique"`{.action}.
>>
> **Etapa 2**
>>
>> Clique no botão `...`{.action} à direita da linha relativa ao módulo e, a seguir, em `Aceder à interface de administração do módulo`{.action}.
>>
<!-- CP-STEPS-END:access-admin-interface -->

### Encontrar o identificador de administrador

<!-- CP-STEPS-START:find-admin-login -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o seu alojamento web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Módulos "1 clique"`{.action}. O identificador administrador do seu módulo aparece na coluna `Nome de utilizador`.
>>
> **Etapa 3**
>>
>> Também pode procurar o e-mail recebido durante a criação do módulo. Na sua [Área de Cliente OVHcloud](/links/manager), clique no seu nome no canto superior direito do ecrã e, no menu que aparecer, clique em `E-mails de serviço`{.action}.
>>
<!-- CP-STEPS-END:find-admin-login -->

### Modificar a palavra-passe do seu módulo <a name="password-change"></a>

> [!primary]
>
> Poderá consultar a documentação oficial para os diferentes CMS propostos em instalação nos nossos alojamentos partilhados:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : O editor deste programa não propõe, à data, documentação para alterar a palavra-passe de acesso à interface de administração do Drupal. Sugerimos que contacte diretamente o editor sobre este assunto. Para mais informações, consulte a página oficial [drupal.org](https://www.drupal.org/).
> - PrestaShop : O editor deste software não propõe, à data, documentação para alterar a palavra-passe de acesso à interface de administração do PrestaShop. Sugerimos que contacte diretamente o editor sobre este assunto. Para mais informações, consulte a [página oficial do PrestaShop](https://www.prestashop.com).
>
Também pode alterar a palavra-passe de acesso à interface de administração do seu CMS diretamente a partir da sua base de dados.

No entanto, se encontrar dificuldades, recomendamos vivamente que efetue a operação com a documentação proposta pelo editor do seu CMS ou que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.

### Eliminar o módulo

> [!warning]
>
> O backup dos seus dados faz parte das operações essenciais à [segurança dos seus websites](/pages/web_cloud/web_hosting/secure_your_website). Sugerimos que importe regularmente e **antes de eliminar** o backup dos seus dados para um suporte local, como uma pen USB ou um disco rígido externo, de acordo com as instruções do nosso guia "[Exportar o seu website](/pages/web_cloud/web_hosting/exporter-son-site-web)".
>

#### 1 - Identificar a base de dados do módulo <a name="step1"></a>

Para eliminar o módulo 1 clique, deve começar por identificar a sua base de dados de forma **segura**.

<!-- CP-STEPS-START:find-db-password -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o seu alojamento web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clique no separador `Bases de dados`{.action}.
>>
> **Etapa 2**
>>
>> Se dispõe de uma única base de dados nesta parte da sua Área de Cliente e não dispõe de soluções [Web Cloud Databases](/links/web/databases), pode considerar que se trata do seu site.
>>
> **Etapa 3**
>>
>> Caso contrário, dirija-se ao separador `Meus sites`{.action}. Registe o nome da `Pasta raiz` presente na linha do site em questão: trata-se do diretório onde se encontram os ficheiros que constituem o seu módulo 1 clique no servidor FTP.
>>
<!-- CP-STEPS-END:find-db-password -->

Aceda ao [espaço FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento. Abra a `Pasta raiz` encontrada anteriormente no separador `Meus sites`{.action} e procure o ficheiro de configuração do seu módulo:

- Para WordPress : **"wp-config.php"** (o nome da base de dados aparece com a menção **"DB_NAME"**).
- Para Joomla! : **"configuration.php"** (o nome da base de dados aparece com a menção **"public $db"**).
- Para o Drupal: **"settings.php"** (Para encontrá-lo, aceda à pasta **"sites"** e **"default"**. O nome da base de dados aparece sob a menção **"database"**).
- Para PrestaShop : **"parameters.php"** (Para o encontrar, aceda à pasta **"app"** e **"config"**. O nome da base do módulo aparece na rubrica **"database_name"**).

#### 2 - Guardar o seu módulo

Para guardar o seu site, siga as instruções do nosso guia "[Exportar o seu website](/pages/web_cloud/web_hosting/exporter-son-site-web)" para recuperar os seus ficheiros no espaço FTP do seu alojamento e a sua base de dados.

#### 3 - Eliminar o módulo

> [!alert]
>
> A eliminação do módulo 1 clique e da base de dados irá também resultar **na eliminação de todos os backups**. Os dados eliminados não poderão ser recuperados posteriormente.
>

<!-- CP-STEPS-START:delete-module -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o seu alojamento web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no separador `Módulos "1 clique"`{.action}.
>>
> **Etapa 3**
>>
>> Clique no botão `...`{.action} à direita da linha que designa o seu módulo e, a seguir, no comando `Eliminar o módulo`{.action}.
>>
>> > [!success]
>> > Não encontra o botão `Eliminar o módulo`{.action}? Ou deseja apenas eliminar ficheiros do seu módulo?
>> >
>> > Consulte os nossos manuais:
>> >
>> > - [Aceder ao espaço de armazenamento FTP do alojamento web](/pages/web_cloud/web_hosting/ftp_connection).
>> > - [Tutorial - Utilizar o FileZilla com o seu alojamento OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
>> >
>> > <iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/LHpsuvyNFtQ?si=4655K8lQQpkE2YNG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>> >
>>
<!-- CP-STEPS-END:delete-module -->

> [!warning]
>
> A eliminação do módulo 1 clique **não levará automaticamente à eliminação da base de dados**. Se ativar a instalação de um novo CMS sem eliminar previamente a base de dados do anterior (e o alojamento não permitir a criação automática de uma nova base de dados), aparecerá a mensagem "[Ocorreu um erro aquando do carregamento das informações (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#ocorreu-um-erro-aquando-do-carregamento-das-informacoes-you-need-at-least-one-free-database)" na sua Área de Cliente.
>
> Se dispõe de uma subscrição [Hosting Perso](/links/web/hosting-personal-offer) ou se já criou quatro bases de dados sobre o seu alojamento [Hosting Pro](/links/web/hosting-professional-offer) ou [Hosting Performance](/links/web/hosting-performance-offer), deverá eliminar a base de dados identificada [no passo 1](#step1) **ANTES** de poder criar um novo módulo 1 clique.
>

<!-- CP-STEPS-START:delete-database -->
Para terminar a eliminação do módulo, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o seu alojamento web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clique no separador `Bases de dados`{.action}.
>>
> **Etapa 2**
>>
>> Clique em `...`{.action} à direita da linha que designa a base de dados e no botão `Eliminar base de dados`{.action}.
>>
> **Etapa 3**
>>
>> Antes de reiniciar a instalação de um novo módulo, verifique que as tarefas de eliminação solicitadas anteriormente foram finalizadas através do separador `Operações em curso`{.action}.
>>
<!-- CP-STEPS-END:delete-database -->

### Boas práticas

Para proteger o seu site, siga as instruções do nosso guia "[Como proteger o seu website?](/pages/web_cloud/web_hosting/secure_your_website)".

Adicione ferramentas de teste do tipo CAPTCHA aos formulários do seu site.

Não instale no seu site plugins ou templates que não foram recomendados pelas comunidades oficiais do seu CMS: 

- [WordPress](https://wordpress.org/)
- [Joomla!](https://community.joomla.org/)
- [Drupal](https://www.drupal.org/community)
- [PrestaShop](https://www.prestashop.com/pt)

## Quer saber mais? <a name="go-further"></a>

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
