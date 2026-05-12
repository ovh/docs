---
title: "Alojamento web - Alterar um nome de domínio já associado a um alojamento"
excerpt: "Saiba como alterar as configurações de associação de um domínio/subdomínio já declarado na sua oferta de alojamento web"
updated: 2026-05-04
---

## Objetivo

Ao utilizar o seu alojamento web ou ao atualizar o seu website, poderá ter de alterar as definições do seu domínio ou subdomínio já associado ao seu alojamento web.

> [!primary]
>
> Este guia explica unicamente como alterar um domínio ou um subdomínio já declarado num alojamento web da OVHcloud.
>
> - Para associar um novo nome de domínio ou subdomínio ao seu site web no seu alojamento web, consulte o nosso guia "[Como associar um nome de domínio a um site web existente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Para adicionar um novo site web ao seu alojamento web, consulte o nosso guia "[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

**Saiba como alterar as definições de associação de um domínio/subdomínio já registado na sua oferta de alojamento web.**

## Requisitos

- Ter um plano [de alojamento web OVHcloud](/links/web/hosting).
- Dispor de um ou vários [nomes de domínio](/links/web/domains).
- Dispor de direitos suficientes sobre o conjunto dos serviços em causa. Encontre mais informações no nosso guia "[Como gerir os contactos (gestores) dos serviços OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

> [!warning]
>
> A modificação das configurações de associação de um domínio ou de um subdomínio pode, em caso de má manipulação, levar a uma interrupção do acesso aos seus serviços (o seu website). Se não tiver a certeza quanto às alterações a realizar, não hesite em contactar um fornecedor especializado

Para modificar os parâmetros de associação de um nome de domínio ou subdomínio já declarado na sua oferta de alojamento web, clique nos separadores abaixo para visualizar cada uma das **4** etapas.

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
>> Na tabela que surge, clique no botão `>`{.action} à esquerda do nome do site relevante para visualizar os nomes de domínio e subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante e, depois, em `Modificar o domínio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> A seguinte janela aparece: 
>>
>> ![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}
>>
>> Na continuação deste guia, encontrará uma descrição de cada um dos parâmetros disponíveis na janela acima. Após a leitura das diferentes descrições presentes na secção "[Descrição dos parâmetros modificáveis](#step1)" e após as suas modificações, clique no botão `Seguinte`{.action} no canto inferior direito da janela, depois passe para a [parte 2](#step2).

### 1 - Descrição dos parâmetros alteráveis <a name="step1"></a>

> [!primary]
>
> Os campos `Domínio`{.action} e `Pasta raiz`{.action} não são modificáveis, pois trata-se de parâmetros relativos ao site web no seu alojamento web.
>
> - Para associar um novo nome de domínio ou subdomínio a um site web no seu alojamento web, consulte o nosso guia "[Como associar um nome de domínio a um site web existente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Para alterar a pasta raiz do seu site, consulte o nosso guia "[Como alterar a pasta raiz de um site existente?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

#### A opção "Ativar o CDN"

Para poder utilizar esta opção, deve ter previamente subscrito uma oferta CDN da OVHcloud ou dispor de um serviço de alojamento web Performance.

Selecione/desmarque esta caixa de verificação para ativar/desativar a opção CDN para o seu nome de domínio ou subdomínio.

Encontre mais informações sobre as opções/ofertas CDN disponíveis na nossa documentação dedicada "[Guia de utilização do acelerador CDN num alojamento web](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

#### A opção "IP do país"

Esta opção é utilizada principalmente para os websites cujo público-alvo esteja situado no estrangeiro. Isto permite um melhor referenciamento SEO do website no país escolhido.

Encontre mais informações sobre esta opção na nossa documentação dedicada "[Geolocalizar o seu website num país específico](/pages/web_cloud/web_hosting/multisites_geolocation)".

#### A opção "Ativar a firewall"

Esta opção permite filtrar os pedidos recebidos para proteger o seu alojamento web contra os ataques mais comuns.

Encontre mais informações sobre esta opção na nossa documentação dedicada "[Partilhado: ativação da firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

#### A opção "Logs separados"

Selecione/desmarque esta opção unicamente se deseja separar os logs do seu nome de domínio dos outros nomes de domínios declarados em paralelo no seu alojamento web.

Para saber mais sobre esta opção, consulte a nossa [página sobre estatísticas detalhadas](/links/web/hosting-traffic-analysis).

Depois de efetuar as alterações, clique no botão `Seguinte`{.action} no canto inferior direito da janela para passar a [parte 2](#step2).

### 2 - Resumo das alterações <a name="step2"></a>

Após ter clicado no botão `Seguinte`{.action}, encontrará um resumo dos parâmetros que está prestes a aplicar ao seu domínio:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Se o conjunto dos parâmetros estiver configurado de acordo com os seus desejos, clique no botão `Validar`{.action}.

Dependendo das opções selecionadas, as alterações podem levar de alguns minutos ou algumas horas para serem aplicadas.

Se, para as opções **CDN**, **IP do país** e **logs separados**, as modificações não forem aplicadas após 24 horas, consulte os respetivos manuais (e páginas) indicados para o conjunto das opções descritas na [parte 1](#step1), a fim de verificar que todas as condições exigidas foram corretamente respeitadas e realizadas.

## Quer saber mais?

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gerir um certificado SSL num alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Guia de utilização do acelerador CDN num alojamento web](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolocalizar o seu website num país específico](/pages/web_cloud/web_hosting/multisites_geolocation).

[Partilhado: ativação da firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).
