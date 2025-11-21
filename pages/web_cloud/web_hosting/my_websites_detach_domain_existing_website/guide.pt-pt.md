---
title: "Como desassociar um nome de domínio de um site web existente"
excerpt: "Descubra como desassociar um nome de domínio ou subdomínio de um site web já existente no seu alojamento web"
updated: 2025-11-27
---

## Objetivo

Pode alojar vários sites web na mesma oferta de alojamento web, mesmo que os nomes de domínio não estejam registados na OVHcloud. Além disso, pode associar um ou vários nomes de domínio ou subdomínios ao mesmo site web.

Já não deseja utilizar um nome de domínio ou subdomínio para o seu site web? 
Deseja associar o seu nome de domínio ou subdomínio a outro site web num dos seus alojamentos web? 
Tem de alterar a pasta raiz associada ao seu site web e criar um novo site web no seu alojamento web para isso?

**Descubra como desassociar um nome de domínio ou subdomínio de um site web já existente no seu alojamento web.**

## Requisitos

- Dispor de uma oferta de [alojamento web OVHcloud](/links/web/hosting-multisite) compatível.
- Dispor de um ou vários [nomes de domínio](/links/web/domains).
- Poder modificar a configuração dos seus nomes de domínio a partir das [zonas DNS](/pages/web_cloud/domains/dns_zone_edit).
- Estar ligado à sua [área de cliente OVHcloud](/links/manager), parte `Web Cloud`{.action}.

## Instruções

> [!warning]
>
> Desassociar um nome de domínio ou subdomínio de um site web no seu alojamento web é uma operação sensível. De facto, após esta operação, o seu site web já não será acessível na Internet com o seu nome de domínio e/ou subdomínio.

Clique nas janelas abaixo para visualizar cada uma das **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Alojamentos`{.action} e escolha o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na página que se abrir, clique no separador `Meus sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na tabela que surge, clique no botão `>`{.action} à esquerda do nome do site relevante para visualizar os nomes de domínio ou subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante e, depois, em `Desassociar o domínio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 5**
>>
>> A nova janela que se abre pede-lhe para confirmar a desassociação do nome de domínio ou subdomínio.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Consoante a sua escolha, marque ou não a caixa `Configuração automática (recomendada)`{.action}, depois clique em `Validar`{.action} para confirmar a sua escolha.
>>
>> > ![!warning]
>> >
>> > **Caso particular: Associou Git ao seu site web e apenas um nome de domínio está associado ao site web**
>> >
>> > Se for esse o caso, encontrará a seguinte janela:
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Como o aviso indica, terá de [eliminar a sua associação Git](/pages/web_cloud/web_hosting/git_integration_webhosting) primeiro, **antes** de desassociar o seu nome de domínio.

### Caso particular: Desassociação de um nome de domínio ou subdomínio para o utilizar com outro site web

- Se desejar adicionar o seu nome de domínio ou subdomínio a outro site web existente num alojamento web, consulte [este guia](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Se desejar criar um novo site web num alojamento web com o seu nome de domínio ou subdomínio recentemente desassociado, consulte [este guia](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).