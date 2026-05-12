---
title: "Como alterar a pasta raiz de um website existente?"
excerpt: "Saiba como alterar a pasta raiz declarada para um website já existente no seu alojamento web a partir da Área de Cliente OVHcloud"
updated: 2026-05-04
---

## Objetivo

Pode alojar vários websites na mesma oferta de alojamento web, mesmo que os nomes de domínio não estejam registados na OVHcloud. Além disso, pode associar um ou vários nomes de domínio ou subdomínios a um mesmo website.

Ao utilizar os seus serviços, poderá necessitar de:

- Substituir a totalidade do conteúdo de um website existente, sem o eliminar do seu alojamento web. Tudo isto sem interrupção de acesso e com total transparência para os visitantes do seu website.
- Instalar um [módulo em 1 clique](/pages/web_cloud/web_hosting/cms_install_1_click_modules) ou um [outro CMS](/pages/web_cloud/web_hosting/cms_manual_installation) para substituir o conteúdo de um website existente, sem eliminar o antigo conteúdo do seu alojamento web. Neste caso específico, deverá construir as diferentes páginas do seu novo website através do seu navegador de Internet.
- Reorganizar os nomes das pastas raiz dos seus websites no espaço de armazenamento do seu alojamento web sem cortar o acesso aos seus diferentes websites.

**Saiba como alterar a pasta raiz declarada para um website já existente no seu alojamento web a partir da Área de Cliente OVHcloud.**

> [!primary]
> Este procedimento aplica-se à [nova versão da Área de Cliente OVHcloud](/links/control-panel-ovhcloud), atualmente disponível em beta. Para o seguir, mude para esta interface a partir da sua Área de Cliente habitual.
>
> Se ainda não criou o website em questão no seu alojamento web, consulte **diretamente** [este guia](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Se o seu website tem uma configuração com Git, consulte previamente o nosso guia "[Configurar e utilizar o Git com um alojamento web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)" para eliminar a associação com Git **antes** de prosseguir. A modificação da pasta raiz declarada para um website não está disponível se o seu website estiver configurado com Git. Caso contrário, a alteração da pasta raiz perturbaria a associação com Git.

## Requisitos

- Dispor de uma oferta de [alojamento web OVHcloud](/links/web/hosting-multisite) compatível.
- Dispor de um ou vários [nomes de domínio](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting-sites)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > `Sites`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

> [!warning]
> Este guia apresenta exclusivamente as ações a realizar a partir da sua [Área de Cliente OVHcloud](/links/manager).
>
> Com exceção do caso em que pretenda instalar um módulo em 1 clique para construir o website progressivamente, deverá previamente:
>
> - Criar a nova pasta raiz no [espaço de armazenamento](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web.
> - Colocar a totalidade do novo conteúdo do seu website dentro desta nova pasta.
> - Se o novo conteúdo do seu website funciona com uma base de dados, deverá igualmente [criar uma base de dados](/pages/web_cloud/web_hosting/sql_create_database) e depois [importar o conteúdo relativo a essa base de dados](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
> - Colocar as credenciais de acesso à base de dados no ficheiro que contém as informações de ligação à base de dados. Este ficheiro deve estar já presente na nova pasta raiz.
>
> **Sem estas ações, a apresentação do seu website será interrompida**.
>
> Este guia descreve unicamente o procedimento para modificar, a partir da sua Área de Cliente OVHcloud, a pasta raiz inicialmente definida para o seu website. Esta ação é necessária para que o website apresente o conteúdo da nova pasta, em substituição da anterior.

Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting-sites) e escolha o alojamento web correspondente.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-sites.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![Meus sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-sites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> No quadro que aparece, clique no botão `⁝`{.action} situado à direita do website correspondente e, de seguida, em `Editar site`{.action}.
>>
>> ![Opções do site](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na janela que se abre, no formulário **Pasta raiz**, substitua a antiga pasta raiz pela nova.
>>
>> ![Modificar pasta raiz](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/edit-site-folder.png){.thumbnail}
>>
>> De seguida, clique em `Confirmar`{.action}.
>>

## Quer saber mais?

[Colocar o meu website online](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
