---
title: "Módulos 1 clique: como instalar um CMS para criar um site"
slug: partilhado_guias_dos_modulos_dos_alojamentos_partilhados
excerpt: Saiba como instalar um CMS com os módulos 1 clique da OVH
section: CMS
order: 01
---

**Última atualização: 03/02/2022**

## Sumário

Os Módulos 1 clique permitem instalar um CMS, uma ferramenta para criar um site de forma fácil e rápida, e que dispensa conhecimentos de código web ou de programação. Cada módulo permite instalar um dos Sistemas de Gestão de Conteúdos (*Content Management Systems* / CMS) mais populares do mercado: WordPress, PrestaShop, Drupal e Joomla!.

**Este guia explica como instalar um CMS usando os nossos Módulos 1 clique.**

## Requisitos

- Dispor de um serviço de [alojamento web](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth//).
- Aceder à secção multisite e adicionar o domínio (ou subdomínio) que ficará associado ao seu site.
- O diretório (pasta) onde o módulo será instalado tem que estar vazio.

## Instruções

### Selecionar o CMS mais adequado

Um CMS (Content Management System) é uma interface que permite criar e editar um site de forma muito simples. Com um CMS, toda a gente pode criar e gerir um site. Cada CMS tem vantagens ou funcionalidades diferentes, adequadas às necessidades de cada tipo de site (e.g. blogue, loja online, site normal). Com um CMS pode criar um site personalizado. Basta escolher um dos temas (designs) disponíveis, e adicionar texto, imagens....

A OVHcloud disponibiliza 4 CMS que podem ser instalados com os módulos 1 clique. Antes de avançar com esta operação, escolha o CMS. De seguida, siga as instruções indicadas neste manual. Se precisar de ajuda, consulte [a nossa página de comparação entre CMS](https://www.ovhcloud.com/pt/web-hosting/uc-cms-comparison/).

Para usar um CMS não incluído nos Módulos 1 clique, deverá instalá-lo manualmente. Este CMS terá que ser compatível com as características da sua oferta (e.g. versão PHP). Veja as várias ofertas [aqui](https://www.ovhcloud.com/pt/web-hosting/)).

![Logo CMS](images/CMS_logo.png){.thumbnail}

### Aceder à área de gestão dos Módulos 1 clique

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione a opção `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e selecione o plano correspondente. De seguida, clique em `Módulos 1 clique`{.action}.

Nesta página, pode consultar, gerir e instalar vários Módulos 1 clique.

![Acesso à secção Módulos 1 clique](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Adicionar um módulo

Para instalar um módulo, clique no botão `Adicionar um módulo`{.action}.

Irá visualizar uma janela onde poderá escolher o CMS e o domínio ao qual deseja associar o seu site:

![Escolher módulo](images/add_a_module.png){.thumbnail}

Se não encontrar o domínio desejado na lista, clique no separador `Multisite`{.action} e adicione o domínio. De seguida, tente novamente adicionar o módulo.

Se tiver dúvidas, pode consultar o guia (em francês) [Como usar meu alojamento web com vários sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external} (versão PT disponível em breve).

Depois de selecionar o domínio, selecione a instalação simples ou a instalação avançada:

- Na instalação simples (opção predefinida), o sistema OVHcloud instala o CMS e envia um e-mail com os dados para aceder e gerir o módulo. Esta é a forma mais simples e mais rápida para instalar um módulo.
- Já a instalação avançada permite configurar vários aspetos da instalação do CMS. Nesta opção deverá introduzir alguns dados associados ao funcionamento do CMS e da base de dados (e.g. seleção da base de dados, localização, informações de ligação, pasta de instalação, idioma, ID de cliente do administrador)

#### Instalação simples

Para realizar esta instalação, certifique-se que a `Instalação em modo avançado`{.action} não está selecionada. De seguida, clique no botão `Instalar`{.action}.

> [!warning]
>
> O sucesso da instalação depende de algumas condições: a pasta de instalação do módulo tem que estar vazia; e tem que ter uma base de dados disponível (nota: cada oferta de alojamento permite criar um certo número de base de dados. As bases de dados extra são pagas à parte. O modo simples cria uma base de dados de forma automatica. 
> 

![Instalação simples](images/choose_installation.png){.thumbnail}

Uma vez concluída a instalação, receberá um e-mail com as informações necessárias para aceder à interface de administrador do CMS. Aceda a esta para personalizar o seu site.

#### Instalação avançada

Para realizar esta instalação, certifique-se que a `Instalação em modo avançado`{.action} está selecionada. De seguida, clique no botão `Seguinte`{.action}:

![Instalação avançada](images/advanced_installation.png){.thumbnail}

##### Escolher a base de dados

Agora tem que preencher a informação relativa à base de dados. Existem várias possibilidades:

- a base de dados já está criada no seu alojamento: selecione uma das bases de dados indicadas na lista e introduza as informações solicitadas;
- a base de dados não está criada no seu alojamento: siga as instruções para a criar uma base de dados. Introduza a informação solicitada atrás;
- a base de dados foi criada na instância CloudDB: selecione-a `Base de dados externa ao seu alojamento web`{.action} e introduza as informações solicitadas. A instância e o alojamento web devem estar alojadas no mesmo datacenter;
- a base de dados foi criada noutro alojamento Web OVHcloud : selecione-a `Base de dados externa ao seu alojamento web`{.action} e introduza as informações solicitadas. A base de dados e o alojamento web devem estar alojados no mesmo datacenter;

Concluída esta etapa, clique no botão `Seguinte`{.action}.

> [!warning]
>
> Se as informações estiverem incorretas, a instalação não poderá ser concluída. Irá receber essa informação por e-mail. Para evitar esta falha, sugerimos que teste a ligação à sua base de dados antes da instalação.
> 

![Base de dados para instalação avançada](images/advanced_installation_database.png){.thumbnail}

##### Configurar o módulo

Para configurar módulo, deve fornecer várias informações.

- **Nome ou e-mail do administrador:** corresponde ao «nome de utilizador» (username) usado para aceder à interface de gestão do CMS.
- **Palavra-passe:** palavra-passe usada para aceder à interface de gestão do CMS.
- **Domínio:** domínio ao qual deseja associar o seu site.
Em caso de dúvida, consulte o guia (em francês) [Como usar o meu alojamento web com vários sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) (versão PT disponível em breve).
- **Idioma:** língua de funcionamento do CMS.
- **Caminho da instalação:** esta informação é preenchida automaticamente após a seleção do domínio. O caminho da instalação pode ser completado adicionando sub-diretórios. (sub-pastas).

Depois de introduzida a informação, clique no botão `Seguinte`{.action}:

> [!warning]
>
> Para que a instalação possa ser concluída, a pasta da instalação tem que estar vazia.
> 

![Configuração do módulo para instalação avançada](images/advanced_installation_configuration.png){.thumbnail}

##### Confirmar a instalação

No último passo da instalação avançada, deve verificar as informações apresentadas, e clicar em`Confirmar`{.action}:

![Confirmação da instalação em modo avançado](images/advanced_installation_summary.png){.thumbnail}

### Personalizar o meu site

No final, é enviado um e-mail para confirmar a instalação do módulo CMS, com o link e os dados para aceder à interface de gestão do CMS. Aceda à área de gestão do site e escolha o tema (design) preferido. Já pode começar publicar conteúdos.

Se precisar de ajuda para usar as funcionalidades de gestão do seu site, aceda ao portal do CMS. Aí poderá encontrar toda a informação útil ao desenvolvimento do seu projeto.

|CMS|Manuais em inglês|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](http://doc.prestashop.com/display/PS17/Getting+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Quer saber mais? Clique nos links abaixo

[Escolher um CMS para criar um *site*](https://www.ovhcloud.com/pt/web-hosting/uc-cms-comparison/){.external}.

[Como usar o meu alojamento com vários sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external} (versão PT disponível em breve).

[Gestão de uma base de dados a partir de um alojamento partilhado](https://docs.ovh.com/pt/hosting/gestao-de-uma-base-de-dados-a-partir-de-um-alojamento-partilhado-ovh/){.external}

Veja a nossa [oferta CloudDB](https://www.ovh.pt/cloud/cloud-databases/){.external}

Fale com a nossa comunidade de utilizadores: [https://community.ovh.com/en/](https://community.ovh.com/en/).
