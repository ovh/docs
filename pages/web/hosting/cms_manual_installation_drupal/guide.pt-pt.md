---
title: "Tutorial - Instalar manualmente Drupal"
excerpt: "Descubra como instalar manualmente o seu CMS Drupal"
updated: 2023-04-07
---

**Última atualização: 07/04/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>
  
## Objetivo

Aqui, poderá encontrar todos os elementos para instalar manualmente o CMS (Content Management System) Drupal em apenas alguns passos.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/) ou [editor do CMS Drupal](https://www.drupal.org/support){.external}. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste tutorial.
>

> [!success]
>
> Para instalar o Drupal **automaticamente** a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), consulte o nosso manual sobre a [instalação de um módulo "num clique"](/pages/web/hosting/cms_install_1_click_modules).
>
> Para instalar **manualmente um outro CMS** (WordPress, Joomla!, PrestaShop), consulte o nosso manual sobre a [instalação manual de um CMS](/pages/web/hosting/cms_manual_installation).
>

**Descubra como instalar manualmente o seu CMS Drupal**
  
## Requisitos

- Ter um plano de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) que contenha, pelo menos, uma base de dados.
- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}
  
## Instruções

### Etapa 1 - preparar a instalação <a name="step1"></a>

Para instalar o CMS **Drupal** na sua oferta de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/), são necessários alguns preparativos.

Siga os **passos indicados** no nosso manual sobre a [instalação manual de um CMS](/pages/web/hosting/cms_manual_installation) antes de avançar com o passo 2 abaixo.

### Etapa 2 - finalizar a instalação manual <a name="step2"></a>

> [!success]
>
> Antes de continuar a instalação, esvazie a cache do seu browser para evitar qualquer erro.
>

#### 2.1 - Aceder ao seu site Drupal através do seu browser

Introduza o seu domínio na barra de pesquisa do seu browser.

Se os ficheiros de origem do Drupal foram corretamente colocados na sua pasta raiz, a página de seleção da língua para o Drupal aparece:

![Drupal instalação step 1](images/Drupal-install-language-1.png){.thumbnail}

Selecione a língua do site e clique em `Save and Continue`{.action}.

#### 2.2 - Escolher o tipo de instalação

O Drupal oferece vários níveis de instalação:

- uma versão standard (recomendada), 
- uma versão mínima
- uma versão de apresentação 

![Drupal instalação step 2](images/Drupal-install-profil-2.png){.thumbnail}

Recomendamos que efetue uma instalação **Standard**. A seguir, clique em `Save and Continue`{.action}.

#### 2.3 - Associar o seu Drupal e a sua base de dados

Insira as informações solicitadas relativas à base de dados:

![Drupal instalação step 3](images/Drupal-install-db-config-3.png){.thumbnail}

Tenha consigo os dados de acesso à sua base de dados (se necessário, consulte **a etapa 1.4** do guia sobre a [instalação manual de um CMS](/pages/web/hosting/cms_manual_installation)).

- *Database type*: selecione o tipo de base de dados das opções disponíveis.

- *Database name*: este nome foi definido durante a criação da base de dados na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

- *Database username*: é idêntico ao nome da base de dados se utiliza uma base de dados incluída no seu alojamento web. Para as bases de dados criadas num serviço Web Cloud Databases, consulte as informações indicadas **etapa 1.4** do tutorial para a [instalação manual de um CMS](/pages/web/hosting/cms_manual_installation).

- *Database password*: definiu-o durante a criação da sua base de dados. É possível que a tenha modificado entretanto.

Clique em `Advanced Options`{.action} para descobrir o resto do menu.

- *Host*: indique o nome do servidor da base de dados, presente no e-mail de instalação ou na Área de Cliente OVHcloud. 

> [!primary]
> 
> - O nome do servidor de uma base de dados incluída no serviço de alojamento web tem esta forma: `NameOfYourDatabase.mysql.db`. 
>
> - O nome do servidor de uma base de dados Web Cloud Databases começa pelo seu identificador de cliente OVHcloud e tem a seguinte forma: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa00000"** corresponde ao seu identificador OVHcloud sem o **"-ovh"** e os **"X"** devem ser substituídos pelo resto da referência do seu serviço Web Cloud Databases.
>

- *Número de porta*: se utiliza uma base de dados incluída com o seu alojamento OVHcloud, deixe-o de forma padrão **3306**. Se utiliza um serviço *Web Cloud Databases*, consulte o **etapa 1.4** do tutorial para a [instalação manual de um CMS](/pages/web/hosting/cms_manual_installation) para obter o número de porta correto.

- *Table name prefix*: se a instalação for efetuada com uma nova base de dados, insira o "prefixo" à sua escolha. Se utilizar uma base de dados já utilizada por outro website, consulte o **etapa 1.4** do tutorial para a [instalação manual de um CMS](/pages/web/hosting/cms_manual_installation) para não introduzir um "prefixo" de tabela já utilizado na sua base de dados.

Clique em `Save and Continue`{.action}.

Se tudo foi feito corretamente, a instalação do Drupal é iniciada:

![Drupal instalação step 4](images/Drupal-install-4.png){.thumbnail}

#### 2.4 - Configurar as informações do site e o acesso "Administrador"

Uma vez terminado o passo anterior, aparecerá a seguinte página:

![Drupal instalação step 5-1](images/Drupal-install-configure-site-5-1.png){.thumbnail}

Introduza os elementos solicitados:

- *Site name*: : introduza o nome do seu futuro site Drupal.

- *Site email address*: introduza um endereço de e-mail válido que será utilizado pelo seu site Drupal.

- *Username*: defina um nome de utilizador para se ligar ao seu espaço de administração Drupal (Back Office).

- *Password* e *Confirm password*: defina a password que será associada ao seu nome de utilizador para aceder ao seu *Back Office* Drupal.

De seguida, clique no final da página:

![Drupal instalação step 5-1](images/Drupal-install-configure-site-5-2.png){.thumbnail}

- *Email address*: introduza o seu endereço de e-mail. Idealmente, introduza o mesmo endereço que o escolhido acima no formulário *Endereço de e-mail do site*.

- *Default country*: escolha o país onde o seu site será o mais consultado.

- *Default time zone*: selecione o fuso horário predefinido para o seu website.

Clique em `Save and Continue`{.action}.

Se tudo correr bem, aparecerá a seguinte página:

![Drupal instalação step 6](images/Drupal-install-ending-6.png){.thumbnail}

> [!success]
>
> A instalação do Drupal está terminada. Agora pode iniciar a criação do conteúdo do seu site Drupal!
>
  
## Quer saber mais? <a name="go-further"></a>

[Site oficial Drupal](https://www.drupal.org/){.external}
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).
 
Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.