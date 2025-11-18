---
title: "Como geolocalizar um website num país específico?"
excerpt: "Saiba como localizar o seu website graças aos endereços IP geolocalizados disponíveis nas ofertas de alojamento partilhado OVHcloud"
updated: 2025-08-22
---

## Objetivo

Os motores de busca (Google, Bing, Yahoo, ...) utilizam robôs de indexação e de referenciamento em todos os websites. Referem prioritariamente os sites geolocalizados no país a partir do qual efetua a sua pesquisa.

**Exemplo**: Se lançarmos uma pesquisa através de um motor de pesquisa e estivermos em Inglaterra, os websites geolocalizados em Inglaterra aparecerão mais alto nos resultados da pesquisa do que os outros websites.

Esta geolocalização é baseada no endereço IP do alojamento onde se encontra o seu website.

A opção de geolocalização no seu alojamento pode ser útil para o referenciamento (SEO) se o seu website for principalmente consultado num país diferente daquele onde se situa o seu alojamento partilhado.

**Descubra como geolocalizar o seu website com os nossos endereços IP geolocalizados.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Dispor de um [alojamento partilhado OVHcloud](/links/web/hosting)
- Dispor de um [nome de domínio](/links/web/domains)
  
## Instruções

Para os websites principalmente consultados no estrangeiro e alojados na nossa infraestrutura de alojamento partilhado OVHcloud, propomos uma opção de geolocalização por endereço IP. Permite uma melhor referenciação dos websites no país onde está situado o endereço IP escolhido com a opção.

Para utilizar a opção de geolocalização por IP, clique nas janelas abaixo para visualizar cada uma das etapas **5**.

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
>> Na página que se abrir, clique no separador `Multisite`{.action}.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Na nova página, é apresentada uma tabela com os nomes de domínio associados.
>>
>> ![hosting multisites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain.png){.thumbnail}
>>
>> Clique no botão `...`{.action} situado à direita do seu nome de domínio na tabela. Por fim, clique em `Modificar o domínio`{.action}.
>>
> **Etapa 5**
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