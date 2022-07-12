---
title: "O que fazer em caso de erro « Sua conexão não é particular »?"
excerpt: "Reagir em caso de mensagem de erro relacionado com a segurança do seu site"
slug: erro-site-nao-seguro
section: Diagnóstico
order: 3
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em « Contribuir » nesta página.
>

**Última atualização: 08/07/2021**
 
## Objetivo <a name="objective"></a>

Em caso de inacessibilidade do seu site, podem surgir várias mensagens de erro. Os exemplos abaixo indicam que o seu alojamento Web não contém [certificado SSL](../os-certificados-ssl-nos-alojamentos-web/) (se o seu site não apresentar uma das anomalias descritas neste guia, consulte a secção « [Quer saber mais?](#gofurther) »): 

|Browser|Mensagem de erro em questão|
|-|---|
|Chrome:<br>« Sua conexão não é particular »|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}|
|Firefox:<br>« Aviso: Potencial risco de segurança à frente »|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}|
|Edge:<br>« Sua conexão não é privada »|![notsecured_edge](images/notsecured_edge.png){.thumbnail}|
|Safari:<br>« Esta ligação não é segura »|![notsecured_safari](images/notsecured_safari.png){.thumbnail}|

**Descubra como resolver os erros do tipo « Sua conexão não é particular ».**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: « [Quer saber mais?](#gofurther) ».
>

## Requisitos

- Ter a gestão dos servidores e da [Zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/#compreender-a-nocao-de-dns) do seu nome de domínio
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

## Instruções

Para resolver esta anomalia, deverá:

1. determinar o alojamento ao qual está ligado o seu nome de domínio, para que possa intervir no bom servidor;
2. criar, ativar ou renovar um [certificado SSL](../os-certificados-ssl-nos-alojamentos-web/) para o seu nome de domínio no alojamento em causa.

### Etapa 1: verificar o alojamento associado ao seu domínio

#### Verificar o endereço IP do alojamento

As mensagens de erro mencionadas [acima](#objective) não significam necessariamente que o seu site está alojado numa das nossas [ofertas Web Cloud](https://www.ovhcloud.com/pt/web-hosting/). Por isso, verifique o endereço IP do servidor ao qual está ligado o seu [nome de domínio](https://www.ovhcloud.com/pt/domains/).

Para encontrar o endereço IP do seu [alojamento OVHcloud](https://www.ovhcloud.com/pt/web-hosting/), clique no topo do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) nos `Web Cloud`{.action} e, nos `Alojamentos`{.action} e escolha o alojamento em causa.

No separador `Informações gerais`{.action}, tome nota do endereço IPV4 e/ou IPV6 do seu alojamento.

![hosting-general-informaces](images/hosting-general-informations.png){.thumbnail}

#### Verificar o endereço IP na zona DNS

Agora tem de verificar que o endereço IP indicado na [Zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/#compreender-a-nocao-de-dns) corresponde ao do seu [alojamento Web Cloud](https://www.ovhcloud.com/pt/web-hosting/).

Clique em `Noms de domínio`{.action} do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione o nome de domínio do seu site.

Selecione o separador `Zone DNS`{.action} e tome nota do destino do tipo `A` para o seu domínio:

![zone-ip](images/zone-dns-ip.png){.thumbnail}

#### Efetuar as ações necessárias

|Cenário|Ação|
|---|---|
|O endereço IP indicado na [Zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/) corresponde ao do seu alojamento partilhado.|Passe para [Etapa 2](#step2).|
|O endereço IP indicado na zona não diz respeito a nenhum alojamento do seu [conta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), mas aparece na [lista dos servidores Web Cloud](../lista-dos-enderecos-ip-dos-clusters-e-alojamentos-web/).|Verifique que não possui um alojamento que possua este endereço IP num dos seus outros [contas OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), caso tenha criado vários. Se necessário, contacte o seu webmaster ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/pt/) a este respeito.|
|O endereço IP indicado na zona não é o do seu alojamento nem aparece na [lista dos servidores Web Cloud](../lista-dos-enderecos-ip-dos-clusters-e-alojamentos-web/).|Contacte o seu webmaster ou os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/) a este respeito.|
|No separador `Zona DNS`{.action}, uma mensagem indica que o seu domínio utiliza outros servidores [DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/#compreender-a-nocao-de-dns), que aparecem na forma « ns **?** .ovh.net » ou « dns **?** .ovh.net » (substitua « **?** » pelo número do servidor DNS em causa):<br><br>![warning_other_ovh_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}|Modifique os servidores DNS do seu domínio, de modo a que correspondam aos inscritos nas entradas de tipo `NS` da zona. Para efetuar esta operação, siga as instruções do [presente guia](../../domains/partilhado_generalidades_sobre_os_servidores_dns/#aceder-a-gestao-dos-servidores-dns-da-ovhcloud).|
|No separador `Zona DNS`{.action}, uma mensagem indica que o seu domínio utiliza outros servidores [DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/#compreender-a-nocao-de-dns) e estes não aparecem na forma « ns **?** .ovh.net » ou « dns **?** .ovh.net »:<br><br>![warning_external_dn_srv](images/warning_external_dns_srv.png){.thumbnail}|Contacte o seu webmaster ou os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/) a este respeito.|
|`Noms de domínio`{.action} do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).<br><br>Ou o separador `Zona DNS`{.action} do seu domínio aparece da seguinte forma:<br><br>![zonedns_ndd_non_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Isto significa que o seu domínio não é gerido a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).<br><br>Verifique que o domínio não é gerido a partir de uma das suas outras [contas OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), se tiver criado vários.<br><br>Pode igualmente determinar o seu escritório de's registo e os servidores DNS aos quais está ligado através da nossa ferramenta [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>Se necessário, contacte o seu webmaster ou os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).|

### Etapa 2: verificar o certificado SSL do alojamento <a name="step2"></a>

No separador `Informações gerais`{.action} do seu alojamento OVHcloud, verifique a parte `Certificado SSL`:

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Cenário 1: o seu alojamento não contém um certificado SSL

Ative um [certificado SSL](https://www.ovhcloud.com/pt/web-hosting/options/ssl/) no seu alojamento, seguindo as instruções deste [guia](../os-certificados-ssl-nos-alojamentos-web/).

#### Cenário 2: o certificado SSL do seu alojamento não funciona

Se gerou um **certificado SSL « Let's Encrypt »**, ative a opção SSL no `Multisite`{.action} do seu alojamento seguindo as instruções deste [guia](../os-certificados-ssl-nos-alojamentos-web/#ativar-um-certificado-ssl-num-multisite).

Se dispõe de um **certificado SSL importado** e este não funcionar, contacte o seu fornecedor.

Se encomendou um dos **certificados SSL pagos** do nosso parceiro [SECTIGO](https://sectigo.com/){.external}, verifique se recebeu um e-mail que lhe propõe a sua renovação.
<br>Se necessário, contacte o [suporte de SECTIGO](https://sectigo.com/support){.external} a este respeito.

> [!primary]
>
> Para encontrar o conjunto dos e-mails enviados pelos nossos serviços, clique no canto superior direito do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), depois em `E-mails de serviço`{.action}:
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Quer saber mais? <a name="gofurther"></a>

[Gerir um certificado SSL num alojamento web](../os-certificados-ssl-nos-alojamentos-web/)

[Ativar o HTTPS num website com certificado SSL](../ativar-https-website-certificado-ssl/)

[Resolver o erro “Site não instalado”](../alojamento_web_erro_de_site_nao_instalado/)

[O que fazer em caso de erro 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Resolver os erros mais frequentes associados aos módulos 1 clique](../erros-frequentes-modulos-em-1-clique/)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes ofertas de suporte (https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.