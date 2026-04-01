---
title: "O que fazer se o meu site está inacessível?"
excerpt: "Diagnóstico das causas da inacessibilidade do seu site"
updated: 2026-03-31
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
- Estar atualizado em [pagamentos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [renovações](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dos serviços associados (nome de domínio e alojamento web).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### 1 - Verificar a validade do seu domínio

> [!warning]
>
> A renovação das suas ofertas é da sua inteira responsabilidade.<br>
> A OVHcloud, enquanto alojador, tem a obrigação de eliminar definitivamente os serviços (domínios, alojamentos, e-mails, etc.) que não foram renovados a tempo, bem como o conjunto dos dados que contêm.
>
> Assim, recomendamos vivamente que ative a [renovação automática](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#instrucoes) em todas as subscrições da OVHcloud.
>

Para verificar a validade da assinatura relativa ao seu domínio, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [As minhas ofertas e serviços](/links/control-panel/billing-services).
>>
> **Etapa 2**
>>
>> Renove o domínio se necessário através do botão `...`{.action} e `Renovar o serviço`{.action}.
>>
>> ![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Uma vez terminada a renovação, o seu website estará disponível num prazo máximo de 48 horas.

### 2 - Verificar os servidores DNS

Para verificar a validade dos seus [servidores DNS](/pages/web_cloud/domains/dns_server_edit), aceda à página [Nomes de domínio](/links/control-panel/web-domains), e selecione o domínio correspondente.

**Clique no cenário correspondente à sua situação para visualizar o conteúdo.**

/// details | Cenário 1 - Nenhuma anomalia nos servidores DNS

Para verificar os servidores DNS declarados, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains), e selecione o domínio correspondente.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Verifique os servidores indicados no separador `Servidores DNS`{.action}:
>>
>> ![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se forem idênticos aos alvos das entradas do tipo `NS` na **Zona DNS**, consulte a [parte 3](#step3):
>>
>> ![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

///

/// details | Cenário 2 - Aparecer um aviso sobre a zona DNS

Um aviso no separador **Zona DNS** indica que os servidores DNS utilizados pelo seu domínio não estão indicados na sua zona. Aqui, podem ocorrer dois cenários:

- Na frase "Utiliza atualmente os seguintes servidores DNS:", os servidores indicados são do tipo "ns **?** .ovh.net" e "dns **?** .ovh.net" (substituir "**?**" por qualquer número):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Altere os servidores DNS de acordo com as instruções [deste manual](/pages/web_cloud/domains/dns_server_edit), para que sejam idênticos aos alvos das entradas do tipo `NS` na **Zona DNS**.

O seu website estará disponível num prazo máximo de 48 horas.

- Na frase "Utiliza atualmente os seguintes servidores DNS:", os servidores indicados não são do tipo "ns **?** .ovh.net" e "dns **?** .ovh.net".

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> Nesta situação, contacte o alojador da sua Zona DNS, o seu webmaster ou os [parceiros OVHcloud](/links/partner) antes de qualquer manipulação.
>
> É possível que os servidores DNS utilizados pelo seu domínio estejam funcionais e que o problema de acesso ao seu site esteja associado a uma entrada inexistente ou errada na [zona DNS](/pages/web_cloud/domains/dns_zone_general_information). Se alterar os servidores DNS nesta situação, os seus endereços de e-mail ou outras aplicações online poderão ficar indisponíveis.

///

/// details | Cenário 3 - Nenhuma entrada do tipo NS aparece na zona DNS

A **Zona DNS** do seu domínio não contém nenhuma entrada do tipo `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone), e selecione o domínio correspondente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Efetue um backup da zona atual ao clicar no botão `Editar em modo de texto`{.action}:
>>
>> ![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}
>>
>> Copie/cole o conteúdo da sua **Zona DNS** num documento em texto. Registe este documento localmente.
>>
> **Etapa 3**
>>
>> Clique em `Reiniciar zona DNS`{.action} e selecione `Não, mas desejo reiniciar a minha zona DNS.`{.action}.
>>
>> Indique os seus servidores de e-mail e de alojamento e clique em `Confirmar`{.action}.
>>
>> ![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
> **Etapa 4**
>>
>> O seu website estará disponível num prazo máximo de 24 horas.

///

### 3 - Verificar a zona DNS <a name="step3"></a>

Nesta etapa, vai encontrar o endereço IP do seu alojamento e adicioná-lo à sua **Zona DNS**.

Se o seu site não está alojado na infraestrutura da OVHcloud ou é gerido por outro fornecedor, contacte o serviço de suporte em causa.

Se o seu site está alojado numa das nossas [planos de alojamento web](/links/web/hosting), clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No marco **Informações gerais**, encontrará as referências **IPv4** e **IPv6**.
>>
>> ![IPv4-IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copie o endereço IPv4 e/ou IPv6 do seu domínio.

De seguida, aceda à [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) do seu domínio alterando ou criando uma ou mais entradas de tipo `A`.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

O seu website estará disponível num prazo máximo de 24 horas.

## Quer saber mais? <a name="go-further"></a>

[Resolver o erro "Site não instalado"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[O que fazer em caso de erro 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
