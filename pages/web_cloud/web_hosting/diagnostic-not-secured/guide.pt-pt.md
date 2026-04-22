---
title: "O que fazer em caso de erro 'Sua conexão não é particular'?"
excerpt: "Reagir em caso de mensagem de erro relacionado com a segurança do seu site"
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

## Objetivo <a name="objective"></a>

Em caso de inacessibilidade do seu site, podem surgir várias mensagens de erro. Os exemplos abaixo indicam que o seu alojamento web não contém [certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (se o seu site não apresentar uma das anomalias descritas neste guia, consulte a secção "[Quer saber mais?](#go-further)"):

|Browser|Mensagem de erro em questão|
|-|---|
|Chrome:<br>"Sua conexão não é particular"|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Aviso: Potencial risco de segurança à frente"|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge:<br>"Sua conexão não é privada"|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari:<br>"Esta ligação não é segura"|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Descubra como resolver os erros do tipo "Sua conexão não é particular".**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: "[Quer saber mais?](#go-further)".
>

## Requisitos

- Ter a gestão dos [servidores DNS](/pages/web_cloud/domains/dns_server_general_information) e da [zona DNS](/pages/web_cloud/domains/dns_zone_general_information) do seu domínio

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

Para resolver esta anomalia, deverá:

1. determinar o alojamento ao qual está ligado o seu nome de domínio, para que possa intervir no bom servidor;
2. criar, ativar ou renovar um [certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) para o seu nome de domínio no alojamento em causa.

### 1 - Verificar o alojamento associado ao seu domínio

#### Verificar o endereço IP do alojamento

<!-- CP-STEPS-START:check-hosting-ip -->
As mensagens de erro mencionadas [acima](#objective) não significam necessariamente que o seu site está alojado numa das nossas [ofertas Web Cloud](/links/web/hosting). Por isso, verifique o endereço IP do servidor ao qual está ligado o seu [nome de domínio](/links/web/domains).

Para encontrar o endereço IP do seu [alojamento OVHcloud](/links/web/hosting), clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Página de alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No quadro **Informações gerais**, encontrará as referências **IPv4** e **IPv6**.
>>
>> ![Endereços IPv4 e IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Anote o endereço IPv4 e/ou IPv6 e continue lendo o guia.
<!-- CP-STEPS-END:check-hosting-ip -->

#### Verificar o endereço IP na zona DNS

<!-- CP-STEPS-START:check-dns-zone-ip -->
Agora tem de verificar que o endereço IP indicado na [zona DNS](/pages/web_cloud/domains/dns_zone_edit) corresponde ao do seu [alojamento Web Cloud](/links/web/hosting).

Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio em causa.
>>
>> ![Página de zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Anote o destino do registo de tipo `A` para o seu domínio:
>>
>> ![Destino do registo A na zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}
<!-- CP-STEPS-END:check-dns-zone-ip -->

#### Efetuar as ações necessárias

**Clique no cenário correspondente à sua situação para ver o conteúdo.**

/// details | O endereço IP corresponde ao do seu alojamento partilhado

O endereço IP indicado na [zona DNS](/pages/web_cloud/domains/dns_zone_edit) corresponde ao do seu alojamento partilhado. Passe para a [parte 2](#step2).

///

/// details | O endereço IP não diz respeito a nenhum alojamento da sua conta, mas aparece na lista dos servidores Web Cloud

O endereço IP indicado na zona não diz respeito a nenhum alojamento da sua [conta OVHcloud](/links/manager), mas aparece na [lista dos servidores Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Verifique que não possui um alojamento com este endereço IP numa das suas outras [contas OVHcloud](/links/manager), caso tenha criado vários. Se necessário, contacte o seu webmaster ou os [parceiros OVHcloud](/links/partner) a este respeito.

///

/// details | O endereço IP não é o do seu alojamento nem aparece na lista dos servidores Web Cloud

O endereço IP indicado na zona não é o do seu alojamento nem aparece na [lista dos servidores Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Contacte o seu webmaster ou os [parceiros OVHcloud](/links/partner) a este respeito.

///

/// details | O seu domínio utiliza outros servidores DNS OVHcloud (ns?.ovh.net / dns?.ovh.net)

Acima da zona DNS apresentada na Área de Cliente OVHcloud, uma mensagem indica que o seu domínio utiliza outros servidores [DNS](/pages/web_cloud/domains/dns_zone_edit), que aparecem na forma "ns **?** .ovh.net" ou "dns **?** .ovh.net" (substitua "**?**" pelo número do servidor DNS em causa):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modifique os servidores DNS do seu domínio, de modo a que correspondam aos inscritos nas entradas de tipo `NS` da zona. Para efetuar esta operação, siga as instruções do [presente guia](/pages/web_cloud/domains/dns_server_edit).

///

/// details | O seu domínio utiliza servidores DNS externos (não OVHcloud)

Acima da zona DNS apresentada na Área de Cliente OVHcloud, uma mensagem indica que o seu domínio utiliza outros servidores [DNS](/pages/web_cloud/domains/dns_zone_edit) e estes não aparecem na forma "ns **?** .ovh.net" ou "dns **?** .ovh.net":

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

Contacte o seu webmaster ou os [parceiros OVHcloud](/links/partner) a este respeito.

///

/// details | O seu nome de domínio não aparece na Área de Cliente OVHcloud

O seu nome de domínio não aparece na página [Nomes de domínio](/links/control-panel/web-domains) da Área de Cliente OVHcloud.

Isto significa que o seu domínio não é gerido a partir da sua [Área de Cliente OVHcloud](/links/manager).

Verifique que o domínio não é gerido a partir de uma das suas outras [contas OVHcloud](/links/manager), se tiver criado várias.

Pode igualmente determinar o seu bureau de registo e os servidores DNS aos quais está ligado através da nossa ferramenta [WHOIS](/links/web/domains-whois).

Se necessário, contacte o seu webmaster ou os [parceiros OVHcloud](/links/partner).

///

### 2 - Verificar o certificado SSL do alojamento <a name="step2"></a>

<!-- CP-STEPS-START:check-ssl-certificate -->
Clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e escolha o alojamento web correspondente.
>>
>> ![Página de alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No separador `Informações gerais`{.action}, verifique a parte `Certificado SSL`:
>>
>> ![Certificado SSL no separador de informações gerais](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}
<!-- CP-STEPS-END:check-ssl-certificate -->

#### Cenário 1: o seu alojamento não contém um certificado SSL

Ative um [certificado SSL](/links/web/hosting-options-ssl) no seu alojamento, seguindo as instruções deste [guia](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Cenário 2: o certificado SSL do seu alojamento não funciona

Se gerou um **certificado SSL "Let's Encrypt"**, ative a opção SSL do seu alojamento seguindo as instruções [deste guia](/pages/web_cloud/web_hosting/ssl_on_webhosting).

Se dispõe de um **certificado SSL importado** e este não funcionar, contacte o seu fornecedor.

Se encomendou um dos **certificados SSL pagos** do nosso parceiro [SECTIGO](https://sectigo.com/), verifique se recebeu um e-mail que lhe propõe a sua renovação.
<br>Se necessário, contacte o [suporte de SECTIGO](https://sectigo.com/support) a este respeito.

> [!primary]
>
> Para encontrar o conjunto dos e-mails enviados pelos nossos serviços, aceda à página [As minhas comunicações](/links/control-panel/account-messages).

## Quer saber mais? <a name="go-further"></a>

[Gerir um certificado SSL num alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Ativar o HTTPS num website com certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Resolver o erro "Site não instalado"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[O que fazer em caso de erro 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolver os erros mais frequentes associados aos módulos 1 clique](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
