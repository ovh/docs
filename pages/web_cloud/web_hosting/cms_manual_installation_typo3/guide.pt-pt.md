---
title: "Tutorial - Instalar manualmente o Typo3"
excerpt: "Saiba como instalar manualmente o seu CMS Typo3"
updated: 2024-03-28
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O sistema **CMS** (**C**ontent **M**anagement **S**ystem) Typo3 oferece a capacidade de desenvolver, para qualquer empresa, sites complexos e evolutivos, de sites institucionais a plataformas de e-commerce. Com uma forte comunidade de programadores e uma vasta gama de extensões, o TYPO3 oferece ferramentas potentes para personalizar e alargar o seu site de acordo com as suas necessidades específicas.

**Saiba como instalar manualmente o CMS Typo3 no seu alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](/links/web/hosting) que inclua, pelo menos, uma base de dados.
- Dispor de um [domínio](/links/web/domains).
Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Preparar a instalação

Para instalar o CMS **Typo3** no seu [alojamento web](/links/web/hosting), alguns preparativos são necessários.

Siga o **conjunto de passos** descritos no nosso tutorial de [instalação manual de um CMS](/pages/web_cloud/web_hosting/cms_manual_installation) antes de avançar para o passo seguinte.

### Finalizar a instalação manual

> [!primary]
>
> Antes de continuar a instalação, limpe a cache do browser da Internet para evitar problemas.
>

#### Aceder ao website Typo3 através do browser

Introduza o seu domínio na barra de pesquisa do browser.

Se os ficheiros de origem do Typo3 tiverem sido colocados corretamente na pasta raiz, será apresentada a seguinte página:

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_one.png){.thumbnail}

Como indicado, crie um ficheiro vazio chamado `FIRST_INSTALL` no diretório onde depositou os seus ficheiros e pastas Typo3. Volte para o seu browser e atualize a página. Se ocorrerem erros, aparecerá a tela abaixo, com a descrição dos erros.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_2_error.png){.thumbnail}

Resolva os erros ou clique em `Continue with errors`{.action}.

A segunda etapa da instalação será exibida.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_2.png){.thumbnail}

Introduza as informações relativas ao seu SGBD e depois clique em `Continue`{.action}.

A terceira etapa da instalação é exibida.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_3.png){.thumbnail}

Selecione o nome da base de dados que pretende utilizar para o seu website ou [crie uma nova base de dados](/pages/web_cloud/web_hosting/sql_create_database) e, em seguida, clique em `Continue`{.action}.

A quarta etapa da instalação será exibida.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_4.png){.thumbnail}

Introduza o nome do seu website, assim como as informações relativas ao seu utilizador admin.

A quinta e última etapa da instalação é exibida.

![Typo3 installation](/pages/assets/screens/other/cms/typo3/install_step_5.png){.thumbnail}

Leia as informações exibidas na tela e escolha a opção correta:

- `Create empty starting page`: Selecione esta opção para criar uma página padrão para o seu site. Após a validação desta etapa, introduza o seu domínio no browser para aceder ao seu website Typo3.
- `Take me straight to the backend`: escolha esta opção para ser reencaminhado para o dashboard do seu website Typo3. Através deste dashboard, deverá criar você mesmo as suas páginas web, alimentando o seu conteúdo e muito mais. Encontre mais informações na [documentação oficial do Typo3](https://docs.typo3.org/Home/GettingStarted.html){.external}.

Clique em `Open the TYPO3 Backend`{.action} para confirmar a opção que acabou de escolher.

### Conclusão

Acaba de instalar manualmente o CMS Typo3 no seu alojamento web da OVHcloud. Depois de configurar o seu website, adicionar conteúdo, personalizar o tema e instalar plugins, o seu website Typo3 fica acessível online através do seu nome de domínio.

## Quer saber mais? <a name="go-further"></a>

[Tutorial - Instalar manualmente o WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Instalar manualmente o Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Instalar manualmente o Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Instalar manualmente o PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Instalar manualmente o Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Instalar manualmente o Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Instalar manualmente o SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Instalar manualmente um CMS no meu alojamento](/pages/web_cloud/web_hosting/cms_manual_installation)

[Criar uma base de dados num alojamento web](/pages/web_cloud/web_hosting/sql_create_database)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Fale com nossa [comunidade de utilizadores](/links/community).