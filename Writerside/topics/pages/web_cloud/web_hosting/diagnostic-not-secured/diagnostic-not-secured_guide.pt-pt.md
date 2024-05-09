---
title: "O que fazer em caso de erro « Sua conexão não é particular »?"
excerpt: "Reagir em caso de mensagem de erro relacionado com a segurança do seu site"
updated: 2021-07-08
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em « Contribuir » nesta página.
>

## Objetivo <a name="objective"></a>

Em caso de inacessibilidade do seu site, podem surgir várias mensagens de erro. Os exemplos abaixo indicam que o seu alojamento Web não contém [certificado SSL](ssl_on_webhosting1.) (se o seu site não apresentar uma das anomalias descritas neste guia, consulte a secção « [Quer saber mais?](diagnostic-not-secured_#go-further.) »): 

|Browser|Mensagem de erro em questão|
|-|---|
|Chrome:<br>« Sua conexão não é particular »|![notsecured_chrome](notsecured-chrome.png){.thumbnail}|
|Firefox:<br>« Aviso: Potencial risco de segurança à frente »|![notsecured_firefox](notsecured-firefox.png){.thumbnail}|
|Edge:<br>« Sua conexão não é privada »|![notsecured_edge](notsecured-edge.png){.thumbnail}|
|Safari:<br>« Esta ligação não é segura »|![notsecured_safari](notsecured-safari.png){.thumbnail}|

**Descubra como resolver os erros do tipo « Sua conexão não é particular ».**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](partner.) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: « [Quer saber mais?](diagnostic-not-secured_#go-further.) ».
>

## Requisitos

- Ter a gestão dos servidores e da [Zona DNS](dns_zone_edit#compreender-a-nocao-de-dns.) do seu nome de domínio
- Ter acesso à [Área de Cliente OVHcloud](manager.)

## Instruções

Para resolver esta anomalia, deverá:

1. determinar o alojamento ao qual está ligado o seu nome de domínio, para que possa intervir no bom servidor;
2. criar, ativar ou renovar um [certificado SSL](ssl_on_webhosting1.) para o seu nome de domínio no alojamento em causa.

### Etapa 1: verificar o alojamento associado ao seu domínio

#### Verificar o endereço IP do alojamento

As mensagens de erro mencionadas [acima](#objective.) não significam necessariamente que o seu site está alojado numa das nossas [ofertas Web Cloud](hosting.). Por isso, verifique o endereço IP do servidor ao qual está ligado o seu [nome de domínio](domains.).

Para encontrar o endereço IP do seu [alojamento OVHcloud](hosting.), clique no topo do seu [Área de Cliente OVHcloud](manager.) nos `Web Cloud`{.action} e, nos `Alojamentos`{.action} e escolha o alojamento em causa.

No separador `Informações gerais`{.action}, tome nota do endereço IPV4 e/ou IPV6 do seu alojamento.

![hosting-general-informaces](find-ipv4-and-ipv6.png){.thumbnail}

#### Verificar o endereço IP na zona DNS

Agora tem de verificar que o endereço IP indicado na [Zona DNS](dns_zone_edit#compreender-a-nocao-de-dns.) corresponde ao do seu [alojamento Web Cloud](hosting.).

Clique em `Noms de domínio`{.action} do seu [Área de Cliente OVHcloud](manager.) e selecione o nome de domínio do seu site.

Selecione o separador `Zone DNS`{.action} e tome nota do destino do tipo `A` para o seu domínio:

![zone-ip](dashboard-entry-a.png){.thumbnail}

#### Efetuar as ações necessárias

|Cenário|Ação|
|---|---|
|O endereço IP indicado na [Zona DNS](dns_zone_edit1.) corresponde ao do seu alojamento partilhado.|Passe para [Etapa 2](diagnostic-not-secured_#step2.).|
|O endereço IP indicado na zona não diz respeito a nenhum alojamento do seu [conta OVHcloud](manager.), mas aparece na [lista dos servidores Web Cloud](clusters_and_shared_hosting_IP1.).|Verifique que não possui um alojamento que possua este endereço IP num dos seus outros [contas OVHcloud](manager.), caso tenha criado vários. Se necessário, contacte o seu webmaster ou os [parceiros da OVHcloud](partner.) a este respeito.|
|O endereço IP indicado na zona não é o do seu alojamento nem aparece na [lista dos servidores Web Cloud](clusters_and_shared_hosting_IP1.).|Contacte o seu webmaster ou os [parceiros OVHcloud](partner.) a este respeito.|
|No separador `Zona DNS`{.action}, uma mensagem indica que o seu domínio utiliza outros servidores [DNS](dns_zone_edit#compreender-a-nocao-de-dns.), que aparecem na forma « ns **?** .ovh.net » ou « dns **?** .ovh.net » (substitua « **?** » pelo número do servidor DNS em causa):<br><br>![warning_other_ovh_srv](message-other-ovh-dns-servers.png){.thumbnail}|Modifique os servidores DNS do seu domínio, de modo a que correspondam aos inscritos nas entradas de tipo `NS` da zona. Para efetuar esta operação, siga as instruções do [presente guia](dns_server_general_information#aceder-a-gestao-dos-servidores-dns-da-ovhcloud.).|
|No separador `Zona DNS`{.action}, uma mensagem indica que o seu domínio utiliza outros servidores [DNS](dns_zone_edit#compreender-a-nocao-de-dns.) e estes não aparecem na forma « ns **?** .ovh.net » ou « dns **?** .ovh.net »:<br><br>![warning_external_dn_srv](message-external-dns-servers.png){.thumbnail}|Contacte o seu webmaster ou os [parceiros OVHcloud](partner.) a este respeito.|
|`Noms de domínio`{.action} do seu [Área de Cliente OVHcloud](manager.).<br><br>Ou o separador `Zona DNS`{.action} do seu domínio aparece da seguinte forma:<br><br>![zonedns_ndd_non_sur_lec2](zone-without-domain-top-of-the-page.png){.thumbnail}|Isto significa que o seu domínio não é gerido a partir do seu [Área de Cliente OVHcloud](manager.).<br><br>Verifique que o domínio não é gerido a partir de uma das suas outras [contas OVHcloud](manager.), se tiver criado vários.<br><br>Pode igualmente determinar o seu escritório de's registo e os servidores DNS aos quais está ligado através da nossa ferramenta [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>Se necessário, contacte o seu webmaster ou os [parceiros OVHcloud](partner.).|

### Etapa 2: verificar o certificado SSL do alojamento <a name="step2"></a>

No separador `Informações gerais`{.action} do seu alojamento OVHcloud, verifique a parte `Certificado SSL`:

![ssl-certificate-in-general-tab](no-ssl-certificate.png){.thumbnail}

#### Cenário 1: o seu alojamento não contém um certificado SSL

Ative um [certificado SSL](hosting-options-ssl.) no seu alojamento, seguindo as instruções deste [guia](ssl_on_webhosting1.).

#### Cenário 2: o certificado SSL do seu alojamento não funciona

Se gerou um **certificado SSL « Let's Encrypt »**, ative a opção SSL no `Multisite`{.action} do seu alojamento seguindo as instruções deste [guia](ssl_on_webhosting#ativar-um-certificado-ssl-num-multisite.).

Se dispõe de um **certificado SSL importado** e este não funcionar, contacte o seu fornecedor.

Se encomendou um dos **certificados SSL pagos** do nosso parceiro [SECTIGO](https://sectigo.com/){.external}, verifique se recebeu um e-mail que lhe propõe a sua renovação.
<br>Se necessário, contacte o [suporte de SECTIGO](https://sectigo.com/support){.external} a este respeito.

> [!primary]
>
> Para encontrar o conjunto dos e-mails enviados pelos nossos serviços, clique no canto superior direito do seu [Área de Cliente OVHcloud](manager.), depois em `E-mails de serviço`{.action}:
>
>![right-menu-email-button](right-menu-email-button.png){.thumbnail}
>

## Quer saber mais? <a name="go-further"></a>

[Gerir um certificado SSL num alojamento web](ssl_on_webhosting1.)

[Ativar o HTTPS num website com certificado SSL](ssl-activate-https-website1.)

[Resolver o erro “Site não instalado”](multisites_website_not_installed1.)

[O que fazer em caso de erro 500 Internal Server Error?](diagnostic_fix_500_internal_server_error1.)

[Resolver os erros mais frequentes associados aos módulos 1 clique](diagnostic_errors_module1clic1.)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](partner.).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes ofertas de suporte (/links/support).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.