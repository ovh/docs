---
title: "Instalar o seu website com um 'módulo 1 clique' (CMS)"
excerpt: "Descubra como instalar o seu website através dos nossos 'módulos 1 clique'"
updated: 2023-03-30
---

**Última atualização: 30/03/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os "módulos 1 clique" permitem a instalação fácil e rápida de um website (sem competências técnicas requeridas). Os "módulos 1 clique" são, na realidade, **C**ontent **M**anagement **S**ystem **(CMS)**. Desta forma, a OVHcloud propõe a instalação dos CMS mais conhecidos: *WordPress*, *Joomla!*, *Drupal* e *PrestaShop*.

**Descubra como instalar o seu site através dos nossos "módulos 1 clique".**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Dispor de um serviço de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) que inclua pelo menos uma base de dados.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Utilizar [uma versão de PHP compatível](/pages/web_cloud/web_hosting/php_configure_php_on_your_web_hosting_2014) no seu alojamento web.
- Ter [configurado corretamente o seu ficheiro .ovhconfig](/pages/web_cloud/web_hosting/ovhconfig_configuration).
- O diretório (pasta raiz) onde será instalado o seu "módulo 1 clique" deve estar vazio ou atualmente inexistente.
- O domínio (com subdomínio se desejar) que será utilizado no seu website deve ser declarado como [Multi-site](/pages/web_cloud/web_hosting/multisites_configure_multisite) no seu alojamento web da OVHcloud.

## Instruções

### Etapa 1 - escolher corretamente o seu CMS

Um CMS permite conceber um website através de uma interface de fácil utilização. Existem vários tipos de CMS, alguns dos quais são pré-concebidos para realizar um site de E-commerce, outros para criar um site, um blogue, etc. Poderá assim beneficiar de uma estrutura de site pronta a ser usada e personalizável (tema, extensões, textos, etc.) à sua escolha.

De todos os CMS, a OVHcloud propõe 4 em instalação automática com os seus "módulos 1 clique". 

Ao utilizar esta solução, deverá escolher entre os 4 CMS citados acima. Caso já tenha escolhido esta opção, continue a ler as diferentes etapas deste guia. Caso contrário, consulte o nosso [comparativo dos CMS](https://www.ovhcloud.com/pt/web-hosting/uc-cms-comparison/) para fazer a sua escolha.

Se deseja instalar um CMS indisponível através dos nossos "módulos 1 clique", pode instalá-lo manualmente no seu alojamento. Isto sob reserva de que este CMS seja compatível com as nossas ofertas de[alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).

![Logo CMS](images/CMS_logo.png){.thumbnail}

### Etapa 2 - aceder à gestão dos "módulos em 1 clique"

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione `Web Cloud`{.action}. Clique em `Alojamentos`{.action}, selecione a oferta de alojamento em que deseja instalar um "módulo em 1 clique" e clique no separador `Modulos "1 clique"`{.action}.

Aqui, encontrará os eventuais "módulos 1 clique" já instalados. Poderá gerir os seus "módulos 1 clique" e instalar novos módulos.

![Acesso à secção Módulos 1 clique](images/access_to_the_1_click_modules_section.png){.thumbnail}


### Etapa 3 - adicionar um "módulo em 1 clique"

No separador `Modulos "1 clique"`{.action} do seu alojamento, clique no botão `Adicionar um módulo`{.action} para adicionar um novo "módulo em 1 clique".

Na nova janela, selecione o CMS desejado e selecione o domínio com o qual deseja instalar o seu website:

![Escolher módulo](images/add_a_module.png){.thumbnail}

Se o seu domínio não está na lista, aceda ao separador `Multisite`{.action} para o adicionar. Consulte o nosso manual [Como partilhar o meu alojamento web com vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite), se necessário.

Depois de adicionar o domínio corretamente, tente novamente adicionar um "módulo 1 clique".

Uma vez selecionado o CMS, selecione uma instalação **rápida** ou **avançada**:

- Instalação **rápida** (selecionada por predefinição): A OVHcloud realiza a instalação do CMS e comunica-lhe as suas credenciais para o administrar por e-mail no seu endereço de contacto OVHcloud. Esta é a forma mais fácil e mais rápida de instalar um "módulo 1 clique".
- Instalação **avançada**: permite-lhe personalizar a configuração a aplicar para a instalação do CMS. Deverá introduzir todas as informações necessárias ao bom funcionamento do CMS: 
    - informações de ligação à sua base de dados (servidor, nome de utilizador, porta, password, etc.)
    - caminho de instalação no espaço de armazenamento FTP do seu alojamento
    - língua do CMS
    - identificadores de administrador (nome de administrador, palavra-passe, endereço de e-mail, etc.)

#### Instalação rápida de um "módulo em 1 clique"

Escolha o nome de domínio do seu CMS, controle o diretório alvo que aparece automaticamente após a escolha do nome de domínio e verifique que a casa `Instalação em modo avançado`{.action}. não está selecionada. Por fim, clique no botão `Instalar`{.action}.

> [!warning]
>
> A pasta de instalação do seu "módulo 1 clique" deve estar vazia e deve dispor de, pelo menos, uma base de dados disponível em criação no seu alojamento web da OVHcloud para que a instalação seja efetuada.
>
> Para uma instalação rápida, não crie a base de dados antes, o robô de instalação encarregar-se-á disso.
>

![Instalação rapida](images/choose_installation.png){.thumbnail}

Uma vez terminada a instalação, receberá um e-mail com as informações de ligação à interface de administrador (*back office*) do seu CMS. Ligue-se a esta para personalizar o seu website.

#### Instalação avançada

Para realizar esta instalação, certifica-se que a `Instalação em modo avançado`{.action} selecion ada. De seguida, clique no botão `Seguinte`{.action}:

![Instalação avançada](images/advanced_installation.png){.thumbnail}

##### Escolher a base de dados

Insira as informações de ligação à sua base de dados.

![Base de dados para instalação avançada](images/advanced_installation_database.png){.thumbnail}

-Existem várias possibilidades:

- A base de dados já está criada no seu alojamento web: selecione-a no menu pendente `Selecione uma base de dados`{.action} e introduza as informações solicitadas.
- A base de dados ainda não está criada no seu alojamento web: [crie a sua base de dados incluída com o seu alojamento](/pages/web_cloud/web_hosting/sql_create_database), de seguida, volte ao menu desvio `Selecione uma base de dados`{.action} e depois complete as informações pedidas.
- A base de dados está [criada na instância Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server): no menu pendente `Selecione uma base de dados`{.action}, selecione a `Base de dados externa ap seu alojamento web`{.action} e introduza as informações solicitadas. A instância e o alojamento web devem estar alojados no mesmo datacenter.
- A base de dados é criada noutro alojamento Web da OVHcloud: no menu pendente `Selecione uma base de dados`{.action}, selecione a `Base de dados externa ap seu alojamento web`{.action} e introduza as informações solicitadas. A base de dados e o alojamento web devem estar alojados no mesmo datacenter.

As restantes informações solicitadas para a base de dados são as seguintes:

- *Endereço do servidor*: indique o nome do servidor da base de dados, presente no e-mail de instalação ou na Área de Cliente OVHcloud. 

> [!primary]
> 
> - O nome do servidor de uma base de dados incluída no serviço de alojamento web tem esta forma: `NameOfYourDatabase.mysql.db`. 
>
> - O nome do servidor de uma base de dados Web Cloud Databases começa pelo seu identificador de cliente OVHcloud e tem a seguinte forma: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` onde os **"X"** devem ser substituídos pela referência do seu serviço Web Cloud Databases.
>

- *Nome da base de dados* : este nome foi definido durante a criação da base de dados na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

- *Porta*: coloque sistematicamente o número **3306** (porta predefinida) para uma base de dados incluída no seu alojamento web. Para uma base presente numa instância Web Cloud Databases, consulte [este guia](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *Nome do utilizador*: é idêntico ao nome da base de dados se utiliza uma base de dados incluída no seu alojamento web.
Para as bases de dados criadas numa oferta Web Cloud Databases, consulte as informações indicadas no [presente guia](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *Palavra-passe*: foi-lhe enviado por e-mail aquando da criação da base de dados. É possível que a tenha modificado entretanto.

Depois de preencher as informações, clique no botão `Seguinte`{.action}.

> [!warning]
>
> Se as informações que indica estiverem incorretas, a instalação não chegará ao seu termo. Para evitar esta falha, sugerimos que teste a ligação à sua base de dados.
> 
> Para obter as credenciais de acesso à base de dados incluída no alojamento web, consulte [este guia](/pages/web_cloud/web_hosting/sql_create_database).
>
> Para obter os dados de acesso à sua base de dados criada numa instância Web Cloud Databases, consulte [este guia](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

##### Configurar o módulo

Introduza as seguintes informações para a configuração do módulo:

- *nome ou e-mail do administrador:* identificador que irá utilizar para aceder à interface de gestão do seu CMS (Back Office).
- *palavra-passe:* palavra-passe usada para aceder à interface de gestão do CMS.
- *domínio:* domínio com o qual deseja instalar o seu CMS. Se necessário, consulte o nosso manual [Como partilhar o meu alojamento web com vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- *Linguagem:* língua na qual o CMS será instalado.
- *caminho de instalação:* este é automaticamente indicado ao selecionar o domínio. Pode completá-lo introduzindo sub-diretórios (para os utilizadores mais experientes).

Depois de preencher estas informações, clique no botão `Seguinte`{.action}:

> [!warning]
>
> O processo final indicado no caminho de instalação indicado deve ser obrigatória e inteiramente vazio para que a instalação chegue a bom porto.
>

![Configuração do módulo para instalação avançada](images/advanced_installation_configuration.png){.thumbnail}

##### Confirmar a instalação

Verifique as informações apresentadas e clique em `Confirmar`{.action} se tudo estiver em ordem:

![Confirmação da instalação em modo avançado](images/advanced_installation_summary.png){.thumbnail}

### Etapa 4 - personalizar o meu site

A instalação pode demorar cerca de dez minutos.

Uma vez terminado, receberá um e-mail a confirmar a instalação do CMS. Por favor, aceda à interface de gestão do CMS. Assim, poderá alterar o tema do seu website e publicar os seus primeiros conteúdos.

> [!warning]
>
> O suporte da OVHcloud não efetua acompanhamento sobre a utilização dos CMS. Propomos-as apenas em instalação **em 1 clique**.
>

Para mais informações, contacte o editor do CMS que instalou. Encontrará junto deste último documentação para o acompanhar no seu projeto.

|CMS|Manuais em inglês|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Quer saber mais?

[Escolher um CMS para criar um *site*](https://www.ovhcloud.com/pt/web-hosting/uc-cms-comparison/){.external}.

[Como usar o meu alojamento com vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external} (versão PT disponível em breve).

[Gestão de uma base de dados a partir de um alojamento partilhado](/pages/web_cloud/web_hosting/sql_create_database){.external}

Veja a nossa [oferta Web Cloud Databases](https://www.ovh.pt/cloud/cloud-databases/){.external}

[Gerir o CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Desinstalar o seu CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module#etapa-3-eliminar-o-modulo)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 
