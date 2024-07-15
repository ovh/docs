---
title: "O que fazer se o meu site está inacessível?"
excerpt: "Diagnóstico das causas da inacessibilidade do seu site"
updated: 2022-08-02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Vários feedbacks de erro podem aparecer no seu navegador em caso de inacessibilidade do seu site. Os exemplos abaixo indicam uma configuração errada dos seus [servidores DNS](/pages/web_cloud/domains/dns_server_edit), a sua [zona DNS](/pages/web_cloud/domains/dns_zone_edit) ou um domínio suspenso (se o seu site não apresentar uma das mensagens de erro descritas aqui, consulte a secção [Quer saber mais?](#go-further)):

|Browser|Mensagem de Erro|
|-|---|
|Chrome:<br>"Não é possível acessar esse site"|![cantbereached_chrome](/pages/assets/screens/other/browsers/errors/cant-be-reached-chrome.png){.thumbnail}|
|Firefox:<br>"Hum. Estamos a ter problemas em encontrar esse site."|![cantbereached_firefox](/pages/assets/screens/other/browsers/errors/cant-be-reached-firefox.png){.thumbnail}|
|Edge:<br>"Hum… Não consigo chegar a esta página"|![cantbereached_edge](/pages/assets/screens/other/browsers/errors/cant-be-reached-edge.png){.thumbnail}|
|Safari:<br>"O Safari não pode encontrar o servidor"|![cantbereached_safari](/pages/assets/screens/other/browsers/errors/cant-be-reached-safari.png){.thumbnail}|

**Saiba como corrigir erros do tipo "Não é possível acessar esse site"**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further).
>

## Requisitos

- Ter a gestão dos servidores e da [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) do seu domínio.
- Estar ligado à [Área de Cliente OVHcloud](/links/manager).
- Estar atualizado em [pagamentos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [renovações](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dos serviços associados (nome de domínio e alojamento web).

## Instruções

### Etapa 1: verificar a validade do seu domínio

> [!warning]
>
> A renovação das suas ofertas é da sua inteira responsabilidade.<br>
> A OVHcloud, enquanto alojador, tem a obrigação de eliminar definitivamente os serviços (domínios, alojamentos, e-mails, etc.) que não foram renovados a tempo, bem como o conjunto dos dados que contêm.
>
> Assim, recomendamos vivamente que ative a [renovação automática](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#instrucoes) em todas as subscrições da OVHcloud.
>

Para verificar a validade da assinatura relativa ao seu domínio, clique no seu nome (no canto superior direito do seu [Área de Cliente OVHcloud](/links/manager)) no menu contextual e, a seguir, em `Produtos e serviços`{.action}.

![control-panel](/pages/assets/screens/control_panel/product-selection/right-column/right-menu-product-and-services.png){.thumbnail}|

Renove o domínio se necessário através do botão `...`{.action} à direita do ecrã e `Renovar o serviço`{.action}.

![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}

Uma vez terminada a renovação da sua oferta, o seu website estará disponível num prazo máximo de 48 horas.

### Etapa 2: verificar os servidores DNS

Para verificar a validade dos seus [servidores DNS](/pages/web_cloud/domains/dns_server_edit), na [Área de Cliente OVHcloud](/links/manager) clique em `Nomes de domínio`{.action} e, a seguir, no domínio do seu site.

#### Cenário 1: nenhuma anomalia nos servidores DNS

Verifique os servidores indicados no separador `Servidores DNS`{.action}:

![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}

Se forem idênticos aos alvos das entradas do tipo `NS` na `Zona DNS`{.action}, consulte o [Etapa 3](#step3):

![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

#### Cenário 2: Aparecer um aviso sobre a zona DNS

Um aviso no separador `Zona DNS`{.action} indica que os servidores DNS utilizados pelo seu domínio não estão indicados na sua zona. Aqui, podem ocorrer dois cenários:

- Na frase "Utiliza atualmente os seguintes servidores DNS:", os servidores indicados são do tipo "ns **?** .ovh.net" e "dns **?** .ovh.net" (substituir "**?**" por qualquer número):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Altere os servidores DNS de acordo com as instruções [deste manual](/pages/web_cloud/domains/dns_server_edit), para que sejam idênticos aos alvos das entradas do tipo `NS` na `Zona DNS`{.action}.

O seu website estará disponível num prazo máximo de 48 horas.

- Na frase "Utiliza atualmente os seguintes servidores DNS:", os servidores indicados não são do tipo "ns **?** .ovh.net" e "dns **?** .ovh.net".

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> Nesta situação, contacte o alojador da sua Zona DNS, o seu webmaster ou os [parceiros OVHcloud](/links/partner) antes de qualquer manipulação.
>
> É possível que os servidores DNS utilizados pelo seu domínio estejam funcionais e que o problema de acesso ao seu site esteja associado a uma entrada inexistente ou errada na [zona DNS](/pages/web_cloud/domains/dns_zone_general_information). Se alterar os servidores DNS nesta situação, os seus endereços de e-mail ou outras aplicações online poderão ficar indisponíveis.
>

#### Cenário 3: nenhuma entrada do tipo NS aparece na zona DNS

A `Zona DNS`{.action} do seu domínio não contém nenhuma entrada do tipo `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Efetue um backup da zona atual ao clicar no botão `Editar em modo de texto`{.action} à direita do seu ecrã:

![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}

De seguida, copie/cole o conteúdo da sua `Zona DNS`{.action} num documento em texto. Registe este documento localmente.

De seguida, clique em `Reiniciar zona DNS`{.action} e selecione `Não, mas desejo reiniciar a minha zona DNS.`{.action}, indique os seus servidores de e-mail e de alojamento e clique em `Validar`{.action}.

![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}

O seu website estará disponível num prazo máximo de 24 horas.

### Etapa 3: verificar a zona DNS <a name="step3"></a>

Nesta etapa, vai encontrar o endereço IP do seu alojamento e adicioná-lo à sua `Zona DNS`{.action}.

Se o seu site não está alojado na infraestrutura da OVHcloud ou é gerido por outro fornecedor, contacte o serviço de suporte em causa.

Se o seu site está alojado numa das nossas [ofertas Web Cloud](/links/web/hosting), clique no separador `Alojamentos`{.action} à esquerda do seu ecrã e, a seguir, na oferta em causa.

No separador `Informações gerais`{.action}, copie o endereço IPV4 e/ou IPV6 do seu domínio.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

De seguida, aceda à [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) do seu domínio alterando ou criando uma ou mais entradas de tipo `A`.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

O seu website estará disponível num prazo máximo de 24 horas.

## Quer saber mais? <a name="go-further"></a>

[Resolver o erro “Site não instalado”](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[O que fazer em caso de erro 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).