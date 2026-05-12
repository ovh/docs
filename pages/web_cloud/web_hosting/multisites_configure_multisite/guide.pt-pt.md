---
title: 'Partilhar o alojamento entre vários sites'
excerpt: 'Saiba como alojar diferentes websites no seu alojamento web'
updated: 2026-05-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Pode hospedar vários websites numa mesma oferta de alojamento web, mesmo que os nomes de domínio não estejam registados na OVHcloud.

Quer adicionar um novo website ao seu alojamento web?

**Saiba como hospedar diferentes websites na sua oferta de alojamento web.**

> [!primary]
> Se já criou o website em questão no seu alojamento web e pretende associar-lhe um novo nome de domínio ou subdomínio, consulte **directamente** [este guia](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Requisitos

- Ter um [serviço de alojamento web OVHcloud](/links/web/hosting-multisite) compatível.
- Dispor de um ou vários [domínios](/links/web/domains).
- Poder alterar a configuração dos seus nomes de domínio (a [zona DNS](/pages/web_cloud/domains/dns_zone_edit)).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### 1 - Adicionar um website à sua oferta de alojamento web

**Clique num dos títulos abaixo para ver as explicações.**

<a name="add-domain-ovhcloud"></a>

/// details | Adicionar um website com um nome de domínio gerido a partir da sua Área de cliente OVHcloud

Esta secção aplica-se apenas se o nome de domínio (e/ou a sua zona DNS activa) com o qual pretende criar o seu website se encontra **na sua Área de cliente OVHcloud**.

Clique nos separadores abaixo para visualizar cada uma das **7** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Acima e à esquerda da tabela que aparece, clique no botão `Adicionar um site`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque a opção `Associar um domínio OVHcloud existente`{.action} e clique em `Continuar`{.action}.
>>
>> No campo **Nome do site - obrigatório**, insira o nome que pretende utilizar para o seu website. Este nome será visível apenas no separador `Meus sites`{.action} do seu alojamento web.
>>
>> Em seguida, seleccione o nome de domínio a associar no menu suspenso **Nome de domínio - obrigatório** que aparece em baixo.
>>
>> > [!primary]
>> > Para adicionar um subdomínio, seleccione primeiro o nome de domínio na lista (por exemplo: domain.tld). Marque depois a caixa `Criar um subdomínio`{.action}. Aparecerá um campo de introdução para preencher o subdomínio (por exemplo: **sub**.domain.tld).
>> >
>> > **Caso particular**: Os subdomínios em `www` (por exemplo: **www**.domain.tld) são automaticamente adicionados em complemento ao nome de domínio. Por isso, não é necessário especificar este subdomínio particular no campo de introdução.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Por defeito, a **pasta raiz** do seu website é criada automaticamente ao adicionar o website ao seu alojamento web. Esta mesma **pasta raiz** também é gerada no espaço de armazenamento do seu alojamento web (acessível via FTP, SFTP ou SSH, consoante a sua oferta).
>> >
>> > Se pretender personalizar o nome da **pasta raiz**, nomeadamente se o conteúdo do seu website já estiver presente numa pasta específica do seu espaço de armazenamento, pode defini-lo ao activar o botão `Configuração avançada`{.action}.
>>
>> Se pretender personalizar o nome da pasta raiz ou utilizar uma das **opções avançadas** disponíveis, active o botão `Configuração avançada`{.action} e passe para a **etapa 6**. Caso contrário, continue directamente para a **etapa 7**.
>>
> **Etapa 5**
>>
>> > [!primary]
>> >
>> > Esta etapa é **opcional**. Destina-se apenas aos clientes que pretendem personalizar a pasta raiz e/ou activar algumas funcionalidades disponíveis através do botão `Configuração avançada`{.action}.
>> >
>> > **Todas estas funcionalidades podem ser activadas posteriormente, uma vez que o nome de domínio foi adicionado ao seu website.** Para isso, consulte directamente [este guia](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Para personalizar o nome da pasta raiz que será associada ao seu website e que conterá os seus ficheiros, insira o nome pretendido no campo **pasta raiz**.
>>
>> Abaixo, encontra uma descrição das outras opções. Consoante a sua [oferta de alojamento web](/links/web/hosting), alguns elementos entre as opções apresentadas abaixo não poderão ser seleccionados.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opção|Descrição|
>> |---|---|
>> |IP do país|Permite beneficiar de um endereço IP geolocalizado (escolha entre uma lista de países) para o nome de domínio seleccionado.<br> Saiba mais com [esta página](/links/web/hosting-options).|
>> |Firewall|Permite activar um firewall (filtragem e análise das requisições) no nome de domínio seleccionado.<br> Saiba mais com [esta página](/links/web/hosting-options).|
>> |CDN|Permite activar o CDN (cache dos elementos estáticos do seu website, como as imagens) no nome de domínio seleccionado.<br> Saiba mais com [a nossa página CDN](/links/web/hosting-options-cdn).<br> Ao activar o SSL e o CDN, também beneficiará do protocolo **HTTP/2** (este protocolo está activado por defeito no nosso datacenter de Gravelines).|
>>
>> Uma vez activado o botão `Configuração avançada`{.action}, pode também escolher o modo de configuração DNS do seu nome de domínio:
>>
>> - **Para uma configuração DNS automática**, deixe seleccionada a caixa `Configuração automática (Recomendado)`{.action}.
>> - **Para uma configuração DNS manual**, marque a caixa `Configuração manual`{.action}. Para efectuar depois a configuração da sua zona DNS, consulte os seguintes guias:
>>     - [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
> **Etapa 6**
>>
>> A OVHcloud disponibiliza os módulos WordPress, Joomla!, PrestaShop e Drupal. Estes permitem dispor de uma estrutura de website pronta a utilizar, instalada automaticamente na pasta raiz configurada anteriormente. Para saber mais, consulte a nossa documentação "[Instalar o seu website com um 'módulo 1 clique' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> Se pretender instalar um módulo em 1 clique, seleccione o módulo pretendido em baixo da página, em seguida, passe para a etapa seguinte.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Ao contrário, se pretender instalar manualmente o seu website, recupere os seus ficheiros e carregue-os na pasta raiz apropriada no espaço de armazenamento do seu alojamento web. Para saber mais, consulte a nossa documentação "[Publicar um site num alojamento web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>>
> **Etapa 7**
>>
>> Verifique que todas as informações introduzidas anteriormente estão correctas, em seguida, clique em `Continuar`{.action} para finalizar a adição do seu nome de domínio ou subdomínio ao seu website.
>>
>> Esta adição pode demorar até uma hora.
>>
>> Se não seleccionou a opção `Configuração manual`{.action} na secção `Configuração avançada`{.action}, a configuração DNS será realizada automaticamente se a zona DNS activa do seu nome de domínio for gerida na sua Área de cliente OVHcloud.
>>
>> No caso contrário, consulte os seguintes guias para configurar manualmente a sua zona DNS:
>>
>> - [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > A modificação da configuração DNS do seu nome de domínio exige um período de propagação que pode atingir 24 horas antes de estar plenamente efectiva.

///

/// details | Adicionar um website com nome de domínio não gerido a partir da sua Área de cliente OVHcloud

Esta secção aplica-se apenas se pretender adicionar um website com um nome de domínio que não está presente no seu conta OVHcloud. Pode tratar-se de um nome de domínio presente noutra conta OVHcloud ou registado por outro fornecedor.

Clique nos separadores abaixo para visualizar cada uma das **7** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Acima e à esquerda da tabela que aparece, clique no botão `Adicionar um sítio`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque a opção `Associar um domínio externo`{.action} e clique em `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> No campo **Nome do site - obrigatório**, insira o nome que pretende utilizar para o seu website. Este nome será visível apenas no separador `Meus sites`{.action} do seu alojamento web.
>>
>> Introduza depois o nome de domínio (por exemplo: domain.tld) ou o subdomínio (por exemplo: **sub**.domain.tld) a associar no campo **Nome de domínio - obrigatório** que aparece em baixo.
>>
>> > [!success]
>> >
>> > **Caso particular**: Os subdomínios em `www` (por exemplo: **www**.domain.tld) são automaticamente adicionados em complemento ao nome de domínio. Por isso, não é necessário especificar este subdomínio particular no campo de introdução.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Por defeito, a **pasta raiz** do seu website é criada automaticamente ao adicionar o website ao seu alojamento web. Esta mesma **pasta raiz** também é gerada no espaço de armazenamento do seu alojamento web (acessível via FTP, SFTP ou SSH, consoante a sua oferta).
>>
>> Para personalizar o nome da pasta raiz que será associada ao seu website e que conterá os seus ficheiros, insira o nome pretendido no campo **Pasta raiz**. Se não pretender personalizá-lo, deixe o campo vazio.
>>
>> Uma vez preenchidas as informações, clique no botão `Continuar`{.action}.
>>
> **Etapa 6**
>>
>> > [!primary]
>> >
>> > Ao contrário dos nomes de domínio geridos diretamente a partir do seu Área de cliente OVHcloud, as **opções avançadas** não estão diretamente disponíveis ao adicionar um site web com um nome de domínio ou subdomínio não gerido a partir do seu conta OVHcloud.
>> >
>> > No entanto, **todas estas funcionalidades podem ser ativadas ou modificadas posteriormente, uma vez que o nome de domínio ou subdomínio externo tenha sido adicionado ao seu site web.** Para isso, consulte diretamente [este guia](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> A adição de um site web com um nome de domínio externo à OVHcloud exige uma validação adicional obrigatória. Isso permite-nos assegurar que a adição do nome de domínio externo é legítima. Um aviso solicitar-lhe-á, por isso, a modificação da configuração DNS do nome de domínio.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Registe os elementos apresentados, depois clique no botão `Continuar`{.action}. A partir desse momento, o nome de domínio será adicionado temporariamente, enquanto pode modificar a sua configuração DNS.
>>
>> > [!warning]
>> >
>> > Deve efetuar estas modificações **rapidamente** para que o seu nome de domínio seja corretamente associado ao seu site web. Sem esta ação, a adição do seu nome de domínio será cancelada e o seu site web recentemente criado não será acessível.
>> >
>> > As entradas DNS do tipo **A** e **TXT** devem obrigatoriamente ser colocadas na zona DNS ativa do seu nome de domínio para que este seja associado ao seu site web. Apenas as entradas DNS do tipo **AAAA** são opcionais.
>> >
>> > Note que se pretender associar `sub.domain.tld`, deverá criar a entrada TXT `ovhcontrol.domain.tld` e não a entrada `ovhcontrol.sub.domain.tld`.
>> >
>> > Para encontrar a zona DNS ativa do seu nome de domínio, localize os [servidores DNS](/pages/web_cloud/domains/dns_server_edit) aos quais este está ligado. Deverá validar apenas o nome de domínio com o campo **TXT**, e não todos os seus subdomínios.
>>
> **Passo 8**
>>
>> A OVHcloud dispõe dos módulos WordPress, Joomla!, PrestaShop e Drupal. Estes permitem dispor de uma estrutura de site web pronta a utilizar, instalada automaticamente na pasta raiz configurada anteriormente. Para saber mais, consulte a nossa documentação "[“Módulos 1 clique: como instalar um CMS para criar um site”](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> Se pretender instalar um módulo em 1 clique, selecione o módulo desejado em baixo da página, depois clique em `Continuar`{.action} para finalizar a solicitação de adição do seu site web ao seu alojamento web.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Ao contrário, se pretender instalar manualmente o seu site web, recupere os seus ficheiros e carregue-os na pasta raiz apropriada no espaço de armazenamento do seu alojamento web. Para saber mais, consulte a nossa documentação "[“Publicar um site num alojamento web”](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".

///

/// details | Adicionar um site web com um novo nome de domínio que ainda não foi registado

Esta parte aplica-se apenas se pretender adicionar um site web com um nome de domínio que ainda não foi registado, quer seja na OVHcloud ou em outro registo. Em outras palavras, refere-se aos nomes de domínio que ainda não foram subscritos.

Clique nos separadores abaixo para visualizar cada uma das **7** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Acima e à esquerda da tabela que aparece, clique no botão `Adicionar um sítio`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque a opção `Encomendar um novo nome de domínio`{.action} e clique em `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
>>
> **Etapa 5**
>>
>> É então redirecionado para a nossa página comercial de subscrição de um nome de domínio. Escolha o seu novo nome de domínio com base nas disponibilidades do mercado. Segue-se depois as instruções do túnel de encomenda até à validação do bono de encomenda. Isto sem subscrever um novo alojamento web em complemento.
>>
>> Uma vez que a sua encomenda seja paga e validada, aguarde alguns instantes, enquanto é processada.
>>
>> > [!primary]
>> >
>> > Uma vez que o seu nome de domínio apareça no seu Área de cliente OVHcloud, siga a parte "[Adicionar um nome de domínio gerido a partir do seu Área de cliente OVHcloud](#add-domain-ovhcloud)" deste guia para adicionar o seu site web ao seu alojamento web.

///

### 2 - Colocar o seu site web online <a name="site-online"></a>

Uma vez que o site web tenha sido declarado com o seu nome de domínio no seu alojamento web, pode colocar online o conteúdo do seu site web. Lembre-se de que deve realizar esta operação na **pasta raiz** que definiu ao adicionar o site web no seu Área de cliente OVHcloud.

> [!primary]
>
> Se pretender adicionar vários sites web, repita as ações descritas neste guia.
>
> Recomendamos que tenha cuidado com o número de sites web presentes no seu alojamento web. Quanto maior for este número, mais recursos são solicitados ao seu alojamento web. [A página das nossas ofertas de alojamento web](/links/web/hosting) indica o número recomendado de sites web que pode acolher no seu alojamento web.

## Quer saber mais?

[Módulos 1 clique: como instalar um CMS para criar um site](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Publicar um site num alojamento web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
