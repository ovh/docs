---
title: "O que fazer em caso de erro "A sua ligação não é privada"?"
slug: erro-site-não-seguro
excerpt: "Reagir em caso de mensagem de erro relacionado com a segurança do seu site"
section: Diagnóstico
---

**Última atualização: 06/07/2021**
 
## Objetivo <a name="objectif"></a>

Em caso de inacessibilidade do seu site, podem surgir várias mensagens de erro. Os exemplos abaixo indicam que o seu alojamento Web não contém um [certificado SSL](../les-certificats-ssl-sur-les-hebergements-web/) (se o seu site não apresentar uma das anomalias descritas neste guia, consulte a secção "[Quer mais](#aller-plus-loin)?" deste guia): 

Browser | mensagem de erro em questão|
\|-|---|
|Em Chrome:<br>"A sua ligação não é privada" | ![nosecured_crómio](images/notsecured_chrome.png){.thumbnail}\|
No Firefox:<br>"Atenção: risco provável de segurança" | ![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}\|
|No Edge:<br>"A sua ligação não é privada" | ![nosecured_edge](images/notsecured_edge.png){.thumbnail}\|
No Safari:<br>"Esta ligação não é privada" | ![notsecured_safari](images/notsecured_safari.png){.thumbnail}\|

**Saiba como corrigir erros do tipo "A sua ligação não é privada".**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um prestador de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: "Quer [saber mais](#aller-plus-loin)?"
>

## Requisitos

- Ter a gestão dos servidores e da [zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) do seu domínio
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## Instruções

Para resolver esta anomalia, deverá:

1. determinar o alojamento ao qual está ligado o seu nome de domínio, para que possa intervir no bom servidor;
2. criar, ativar ou renovar um [certificado SSL](../les-certificats-ssl-sur-les-hebergements-web/) para o seu domínio no alojamento em causa.

### 1 - verificar o alojamento associado ao seu domínio

#### Verificar o endereço IP do alojamento

As mensagens de erro mencionadas [acima](#objectif) não significam que o seu site está alojado numa das nossas [ofertas Web Cloud](https://www.ovh.com/fr/hebergement-web/). Deve verificar o endereço IP do servidor ao qual está ligado o seu [nome de domínio](https://www.ovh.com/world/domains/).

Para encontrar o endereço IP do seu [alojamento OVHcloud](https://www.ovh.com/fr/hebergement-web/), clique no topo da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) na `Web Cloud`{.action} e, no menu à esquerda, em `Alojamentos`{.action} e escolha o alojamento em causa.

No separador `Informações gerais`{.action}, tome nota do endereço IPV4 e/ou IPV6 do seu alojamento.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### Verificar o endereço IP na zona DNS

De seguida, verifique se o endereço de IP indicado na [Zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) corresponde ao do seu [alojamento Web Cloud](https://www.ovh.com/fr/hebergement-web/).

Clique em `Nomes de domínio`{.action} no canto superior esquerdo da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e selecione o domínio do seu site.

Selecione o separador `Zona DNS`{.action} e anote o destino da entrada de tipo `A` para o seu domínio:

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Efetuar as ações necessárias

|Cenário|Medidas a adotar|
|---|---|
|O endereço IP indicado na zona DNS corresponde ao do seu alojamento partilhado.|Passe para [a etapa 2](#etape2).|
|O endereço IP indicado na zona não é o do seu alojamento nem aparece na [lista dos servidores Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Contacte o seu webmaster ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/fr/) a este respeito.|
|O endereço IP indicado na zona não diz respeito a nenhum alojamento da sua [conta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), mas aparece na [lista dos servidores Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Verifique que não possui um alojamento que possua este endereço IP numa das suas outras [contas OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) se criou vários. Se necessário, contacte o seu webmaster ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/fr/) a este respeito.|
|Este aviso aparece no separador Zona `DNS`{.action}:<br><br>![avertissement_zonedns_pas_sur_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Assim, os servidores DNS do seu domínio devem ser alterados de forma a corresponderem aos incluídos nas entradas do tipo `NS` da zona. Para realizar esta operação, siga as instruções [deste manual](../../domains/generalites-serveurs-dns/).|
|O seu domínio não aparece na parte `Domínios`{.action} do seu ><br>Ou o separador `Zona DNS`{.action} do seu domínio apresenta-se da seguinte forma:<br><br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Isto significa que o seu domínio não é gerido a partir da Área de Cliente OVHcloud.<br><br>Determine o seu registar através da nossa ferramenta ><br>Encontre e modifique a zona DNS em causa em conformidade, seguindo [este guia](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|
|Os `servidores DNS`{.action} não aparecem na forma "ns **?** .ovh.net" ou "DNS **?** .ovh.net" (substituir "**?** " pelo número do servidor DNS em questão).<br><br>Isto significa que a `Zona DNS`{.action} ativa do seu domínio não se encontra no seu ><br>![external-dns-servers](images/external-dns-servers.png){.thumbnail}|Contacte o seu webmaster ou os [parceiros da OVHcloud](https://partner.ovhcloud.com/fr/) a este respeito.|

### Etapa 2: verificar o certificado SSL do seu alojamento <a name="etape2"></a>

No separador `Informações gerais`{.action} do seu alojamento OVHcloud, verifique a parte `Certificado SSL`:

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Cenário 1: o seu alojamento não contém um certificado SSL

Ative um [certificado SSL](https://www.ovh.com/fr/ssl/) no seu alojamento de acordo com as instruções deste [guia](../les-certificats-ssl-sur-les-hebergements-web/).

#### Cenário 2: o certificado SSL do seu alojamento não funciona

Se gerou um **certificado SSL "Let's Encrypt"**, ative a opção SSL no `multi-site`{.action} do seu alojamento, seguindo as instruções deste [manual](../les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite).

Se possuir um **certificado SSL importado** e este não funcionar, contacte o seu fornecedor.

Se encomendou um dos **certificados SSL pagos** do nosso parceiro >Se necessário, contacte o [suporte do SECTIGO](https://sectigo.com/support){.external} sobre este assumpto.

> [!primary]
>
> Para encontrar o conjunto dos e-mails enviados pelos nossos serviços, clique no canto superior direito da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) e, a seguir, em `E-mails de serviço`{.action}:
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Quer saber mais? <a name="aller-plus-loin"></a>

[Gerir um certificado SSL num alojamento web](../les-certificats-ssl-sur-les-hebergements-web/)

[Ativar o HTTPS num website com certificado SSL](../passer-site-internet-https-ssl/)

[Resolver o erro "Site não instalado"](../erreur-site-non-installe/)

[Como diagnosticar uma página branca?](../comment-diagnostiquer-page-blanche/)

[O que fazer em caso de erro 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Resolver os erros mais frequentes associados aos módulos 1 clique](../erreurs-frequentes-modules-en-1-clic/)
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/fr/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/fr/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com>.