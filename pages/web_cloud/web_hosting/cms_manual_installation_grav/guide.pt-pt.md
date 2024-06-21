---
title: "Tutorial - Instalar manualmente Grav"
excerpt: "Saiba como instalar o CMS Grav num alojamento web da OVHcloud"
updated: 2024-03-28
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O **CMS** (**C**ontent **M**anagement **S**ystem) Grav permite desenvolver rapidamente sites web. Concebido para uma gestão otimizada do conteúdo através de ficheiros Markdown, o Grav é ideal para criar websites pessoais ou projetos para pequenas empresas, sem comprometer a qualidade ou a personalização.

**Saiba como instalar manualmente o CMS Grav no seu alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting).
- Dispor de um [domínio](/links/web/domains).
Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Preparar a instalação

Para instalar o CMS **Grav** no seu [alojamento web](/links/web/hosting), alguns preparativos são necessários.

Siga o **conjunto de passos** descritos no nosso tutorial de [instalação manual de um CMS](/pages/web_cloud/web_hosting/cms_manual_installation) antes de avançar para o passo seguinte.

### Finalizar a instalação manual

> [!primary]
>
> Antes de continuar a instalação, limpe a cache do browser da Internet para evitar problemas.
>

#### Aceder ao website Grav através do navegador

Introduza o seu domínio na barra de pesquisa do browser.

Se os ficheiros de origem Grav tiverem sido corretamente colocados na pasta raiz, será apresentada a página `your-domain/admin`:

![Grav installation](/pages/assets/screens/other/cms/grav/first_page_config.png){.thumbnail}

Preencha o formulário para criar um utilizador admin e, em seguida, clique em `Create User`{.action} para confirmar.

Uma vez conectado à interface de administração de Grav, comece a personalizar o seu website.

### Personalizar o seu website Grav

Depois de se conectar como administrador ao painel de controle do Grav, vá para várias opções para configurar e personalizar seu site.

#### Configuração geral do website

##### Configuração do sistema

No menu principal de Grav, clique em `Configuration`{.action}, no separador `Site`{.action}, altere o nome do seu website, defina a língua predefinida ou configure vários parâmetros associados ao seu website.

Para melhorar as performances do seu website, ative a cache. Clique no separador `System`{.action} e, a seguir, em `Caching`{.action}. Identifique a linha `Caching`{.action} e assinale `Yes`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/activate_cache.png){.thumbnail}

##### Configuração dos média

No menu principal de Grav, escolha `Configuration`{.action} e, no separador `System`{.action}, clique em `Media`{.action}. Utilize esta página para definir o comportamento dos média do seu website, como imagens, vídeos ou documentos.

#### Gestão do conteúdo

##### Páginas

No menu principal de Grav, clique em `Pages`{.action} para ver a lista de todas as páginas do seu website. Crie novas páginas, modifique as existentes e organize a estrutura do seu website.

Para ver e editar o conteúdo de uma página, clique no nome da página na lista. Por exemplo, clique em `Home`{.action} para alterar o título da página principal do seu website, bem como o seu conteúdo.

![Grav instalação](/pages/assets/screens/other/cms/grav/list_pages.png){.thumbnail}

##### Temas

No menu principal de Grav, clique em `Themes`{.action} para alterar a aparência do seu website. Instale novos temas ou selecione um já instalado como tema ativo.

Para alterar o tema ativo, clique no tema que possui o rótulo "Ative Theme".

![Grav installation](/pages/assets/screens/other/cms/grav/theme_active.png){.thumbnail}

Na página que aparece, personalize o seu tema ativo.

#### Backup e atualização

##### Backup

Fazer o backup do seu website permite restaurá-lo a um estado anterior em caso de mau funcionamento.

No menu principal de Grav, clique em `Tools`{.action}, selecione `Backup Now`{.action} no canto superior direito do ecrã que se abrir e, a seguir, `Download Backup`{.action} para descarregar o backup do seu website para o seu computador. Ao atualizar a página `Backup`, o seu backup será apresentado na lista `Backup History`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/backup_history.png){.thumbnail}

##### Atualização

Atualizar o seu sistema é primordial para a segurança e a performance do seu website. No menu principal de Grav, clique em `Check for Updates`{.action} para descobrir as atualizações disponíveis.

### Conclusão

Acaba de instalar manualmente o CMS Grav no seu alojamento web da OVHcloud. Depois de configurar o seu website, adicionar conteúdo, personalizar o tema e instalar plugins, o seu website Grav está acessível online através do seu nome de domínio.

## Quer saber mais? <a name="go-further"></a>

[Tutorial - Instalar manualmente WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Instalar manualmente Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Instalar manualmente Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Instalar manualmente PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Instalar manualmente Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Instalar manualmente Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Instalar manualmente SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Instalar manualmente um CMS no meu alojamento](/pages/web_cloud/web_hosting/cms_manual_installation)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Fale com nossa [comunidade de utilizadores](/links/community).