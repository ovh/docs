---
title: "Como geolocalizar um website num país específico?"
excerpt: "Saiba como localizar o seu website graças aos endereços IP geolocalizados disponíveis nas ofertas de alojamento partilhado OVHcloud"
updated: 2026-05-04
---

## Objetivo

Os motores de busca (Google, Bing, Yahoo, ...) utilizam robôs de indexação e de referenciamento em todos os websites. Referem prioritariamente os sites geolocalizados no país a partir do qual efetua a sua pesquisa.

**Exemplo**: Se lançarmos uma pesquisa através de um motor de pesquisa e estivermos em Inglaterra, os websites geolocalizados em Inglaterra aparecerão mais alto nos resultados da pesquisa do que os outros websites.

Esta geolocalização é baseada no endereço IP do alojamento onde se encontra o seu website.

A opção de geolocalização no seu alojamento pode ser útil para o referenciamento (SEO) se o seu website for principalmente consultado num país diferente daquele onde se situa o seu alojamento partilhado.

**Descubra como geolocalizar o seu website com os nossos endereços IP geolocalizados.**

## Requisitos

- Dispor de um [alojamento partilhado OVHcloud](/links/web/hosting)
- Dispor de um [nome de domínio](/links/web/domains)
  

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

Para os websites principalmente consultados no estrangeiro e alojados na nossa infraestrutura de alojamento partilhado OVHcloud, propomos uma opção de geolocalização por endereço IP. Permite uma melhor referenciação dos websites no país onde está situado o endereço IP escolhido com a opção.

Para utilizar a opção de geolocalização por IP, clique nos separadores abaixo para visualizar cada uma das **4** etapas.

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
>> Na tabela que surge, clique no botão `>`{.action} à esquerda do nome do site relevante para visualizar os nomes de domínio ou subdomínios associados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Em seguida, clique no botão `⁝`{.action} à direita do nome de domínio ou subdomínio relevante e, depois, em `Modificar o domínio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na nova janela, selecione a opção `IP do país`{.action} para fazer aparecer o menu pendente.
>>
>> ![geolocation option](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/country-ip-selection.png){.thumbnail}
>>
>> Escolha o endereço IP do país para o qual deseja geolocalizar o seu site, entre os 12 países propostos: *República Checa, Finlândia, França, Alemanha, Irlanda, Itália, Lituânia, Países Baixos, Polónia, Portugal, Espanha e Reino Unido*.
>>
>> Clique em `Seguinte`{.action} e depois em `Validar`{.action} a partir da janela recapitulativa.

> [!primary]
>
> Após ter realizado as etapas acima e se a zona DNS ativa do seu domínio for inteiramente gerida na sua [Área de Cliente OVHcloud](/links/manager), a entrada do tipo A na zona DNS do seu domínio será automaticamente alterada. Para verificar se o endereço IP foi atualizado, consulte o nosso manual sobre a [criação de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>
> Caso contrário, deverá efetuar a modificação manualmente junto do fornecedor que gere a zona DNS ativa do seu domínio. Encontre [aqui](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) a documentação que identifica todos os endereços IP da nossa infraestrutura de alojamento partilhado OVHcloud.
>
> Em ambos os casos, será necessário um prazo de propagação de **4 a 24 horas** após a modificação para que esta seja plenamente efetiva e visível na Internet.
>

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).
