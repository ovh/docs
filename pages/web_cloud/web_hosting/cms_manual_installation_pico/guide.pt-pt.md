---
title: "Tutorial - Instalar manualmente o Pico"
excerpt: "Saiba como instalar manualmente o seu CMS Pico"
updated: 2024-03-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A partir de **CMS** (**C**ontent **M**anagement **S**ystem), o Pico permite a criação rápida de websites. Concebido para criar e gerir facilmente conteúdos graças aos ficheiros Markdown, o Pico é ideal para criar websites pessoais, portefólios ou projetos de pequenas empresas.

**Saiba como instalar manualmente o CMS Pico no seu alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web OVHcloud](/links/web/hosting).
- Dispor de um [domínio](/links/web/domains).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

### Preparar a instalação

Para instalar o CMS **Pico** no seu [alojamento web](/links/web/hosting), são necessários alguns preparativos.

Siga o **conjunto de passos** descritos no nosso tutorial de [instalação manual de um CMS](/pages/web_cloud/web_hosting/cms_manual_installation) antes de avançar para o passo seguinte.

### Finalizar a instalação manual

> [!primary]
>
> Antes de continuar a instalação, limpe a cache do browser da Internet para evitar erros.
>

#### Aceder ao website Pico através do browser

Introduza o seu domínio na barra de pesquisa do browser.

Se os arquivos de origem do Pico foram colocados corretamente em sua pasta raiz, a seguinte página será exibida:

![Pico installation](/pages/assets/screens/other/cms/pico/welcome_page.png){.thumbnail}

Pico é um CMS baseado em ficheiros, o que significa que toda a configuração e criação de conteúdos são feitas diretamente alterando os ficheiros no servidor. Estes são os passos a seguir para configurar e personalizar o seu website Pico.

#### Compreender a estrutura das pastas do Pico

Após a instalação, você encontrará várias pastas e arquivos no diretório principal do Pico. Os mais importantes são:

- `content/` : contém os ficheiros Markdown do seu conteúdo
- `config/`: contém o ficheiro de configuração `config.yml` de Pico
- `themes/`: contém os temas do seu website
- `assets/`: contém recursos estáticos como imagens, folhas de estilo CSS, scripts JavaScript, etc.
- `plugins/`: contém os plugins que deseja utilizar

#### Configuração de base

**1. Configurar o website** : abra o ficheiro `config/config.yml` com um editor de texto. Configure aqui os parâmetros de base do seu website, como o título, a descrição, o URL ou os temas.

**2. Alterar o título e a descrição do seu website** : procure as linhas para `site_title:` e `site_description:` no ficheiro `config/config.yml` para atualizar o título e a descrição do seu website.

**3. Alterar o título e a descrição do seu website** : se tiver um nome de domínio específico, procure a linha para `base_url:` no ficheiro `config/config.yml` para atualizar o nome de domínio do seu website. Caso contrário, deixe o valor predefinido `~`.

#### Adicionar conteúdo

**1. Criar páginas** : para adicionar uma nova página ao seu website, crie um novo ficheiro Markdown (.md) na pasta `content/`. O nome do ficheiro irá determinar o URL da página. Por exemplo, "about.md`" estará acessível a http://yourdomain.tld/about.

**2. Escrever conteúdo** : abra o ficheiro Markdown com um editor de texto e comece a escrever o seu conteúdo. Utilize a sintaxe Markdown para formatar o texto, criar links, inserir imagens, etc. Por exemplo, se pretender editar a página principal (home) do seu website, abra o ficheiro `index.md` e insira o conteúdo à sua escolha.

**3. Verificar conteúdo** : os ficheiros Markdown devem ter um cabeçalho YAML válido. Se o cabeçalho estiver faltando ou mal formatado, Pico pode não reconhecê-lo como uma página válida. Um exemplo de um cabeçalho YAML válido é:

```bash
---
title: About
---
Your content here
```

#### Personalizar o tema

**1. Selecionar um tema** : O Pico está instalado com um tema predefinido, mas pode descarregar outros temas a partir do [site oficial do Pico](https://picocms.org/themes/) ou criar o seu.

**2. Alterar o tema** : para alterar o tema, atualize a secção `theme:` no ficheiro `config/config.yml` com o nome da pasta do tema que deseja utilizar.

**3. Personalizar o tema** : pode modificar os ficheiros do tema em `themes/yourtheme/` para personalizar a aparência do seu website. Isso pode incluir a edição de arquivos HTML Twig, CSS, e JavaScript.

#### Adicionar plugins

Pico permite expandir as suas funcionalidades com plugins.

**1. Encontrar plugins** : consulte [site oficial do Pico](https://picocms.org/plugins/) para aceder à lista dos plugins disponíveis.

**2. Instalar um plugin** : transfira o plugin e coloque-o na pasta `plugins/` da sua instalação Pico.

**3. Configurar o plugin** : alguns plugins requerem uma configuração suplementar em `config/config.yml`. Siga as instruções fornecidas com o plugin.

### Conclusão

Acaba de instalar manualmente o CMS Pico no seu alojamento web da OVHcloud. Depois de configurar o seu website, adicionar conteúdo, personalizar o tema e instalar plugins, o seu website Pico está acessível online através do seu nome de domínio.

## Quer saber mais? <a name="go-further"></a>

[Tutorial - Instalar manualmente o WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Instalar manualmente o Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Instalar manualmente o Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Instalar manualmente o PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Instalar manualmente o Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Instalar manualmente o Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Instalar manualmente o SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Instalar manualmente um CMS no meu alojamento](/pages/web_cloud/web_hosting/cms_manual_installation)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Fale com nossa [comunidade de utilizadores](/links/community).