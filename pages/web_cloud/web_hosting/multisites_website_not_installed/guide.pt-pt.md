---
title: 'Resolver o erro “Site não instalado”'
excerpt: 'Saiba como resolver o erro da página “Site não instalado”'
updated: 2025-08-25
---

> [!success]
> Participe no nosso inquérito e ajude-nos a melhorar este guia!<br>
> Não hesite em partilhar connosco as suas opiniões e ideias.<br>
> [Aceda ao inquérito.](https://s.elq.fr/ovhext/B4nKjrd)

## Objetivo

É possível que apareça no browser a página de erro “**Site não instalado**”, nomeadamente durante a primeira instalação do seu website.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Saiba como identificar e resolver a página de erro "Site não instalado"**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção "[Quer saber mais?](#go-further)" deste guia.

## Requisitos

- Dispor de um serviço [de alojamento partilhado](/links/web/hosting)
- Dispor igualmente da gestão da [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) à qual está associada o seu domínio.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

A página “**Site não instalado**” é apresentada por dois motivos:

- 1: [O seu domínio ou subdomínio não foi corretamente declarado no seu alojamento web](#check-multisites).
- 2: [O seu domínio não aponta para o endereço IP da sua oferta de alojamento web.](#check-dns-domain)

Os passos seguintes irão permitir-lhe corrigir o erro `Site não instalado` nestes dois casos.

### 1 - Verifique a declaração do seu domínio ou subdomínio no seu alojamento web <a name="check-multisites"></a>

Clique nas guias abaixo para exibir sucessivamente cada uma das **4** etapas.

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
>> Na nova página que é apresentada, aparece uma tabela.
>>
>> ![Multisite interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}
>>
>> |Cenários|Ações a realizar|
>> |---|---|
>> |O nome de domínio ou o subdomínio associado ao seu website **aparece** na tabela « multisite ».|Se acabou de adicionar o seu nome de domínio ou o seu subdomínio na parte `Multisite`{.action} do seu alojamento web, aguarde cerca de **vinte minutos** e atualize a cache do seu browser. Se a mensagem « Site não instalado » aparecer, vá para [parte 2](#check-dns-domain).|
>> |O domínio ou o subdomínio associado ao seu website **não aparece** na tabela « multisite ».|Adicione o seu domínio ou subdomínio à secção `Multisite`{.action} seguindo a secção dedicada do guia « [Partilhar o alojamento entre vários sites - adicionar um domínio ou um subdomínio](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».|
>> |O domínio ou subdomínio **foi eliminado** do quadro « multisite » sem qualquer ação da sua parte.|O seu domínio ou a sua zona DNS podem ser geridos a partir de outra conta. Adicione o seu domínio ou subdomínio à parte `Multisite`{.action} . Para tal, clique na secção dedicada do guia « [Partilhar o alojamento entre vários sites - adicionar um domínio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».|

### 2 - Verifique o apontamento de IP na zona DNS ativa do seu domínio <a name="check-dns-domain"></a>

Este passo consiste em verificar se o seu domínio ou subdomínio aponta corretamente para o endereço IP do seu alojamento web, a partir da sua zona DNS ativa.

> [!primary]
>
> Para saber mais sobre a noção de DNS, consulte as seguintes páginas:
>
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit);
> - [Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create);
> - [Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit).

#### 2\.1 Identificar o endereço IP do seu alojamento web da OVHcloud

Clique nos separadores abaixo para visualizar cada um dos **3** passos.

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
>> No marco **Informações gerais**, encontrará **IPv4**.
>>
>> ![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copie o endereço IPv4 e continue a ler o guia.

Pode também consultar o endereço IP associado ao seu alojamento web no nosso guia « [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ».

#### 2\.2 Verifique o endereço IP anotado na zona DNS ativa do seu domínio

A seguir, deve verificar se o endereço IP do alojamento web está indicado na zona DNS ativa do domínio.

> [!primary]
>
> Antes de prosseguir, a partir do momento em que ocorre uma modificação na **zona DNS** ativa de um domínio, poderá ser necessário um prazo de propagação de **4 a 24 horas** para atualizar as informações sobre a rede DNS.
>
> Se modificar diretamente os **servidores DNS** associados ao seu domínio, este prazo pode ir até **48 horas**, no máximo.

Para isso, clique nos separadores abaixo para apresentar cada um dos **4** passos.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu `Zonas DNS`{.action} e escolha o domínio em causa.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> [!primary]
>> >
>> Se o domínio não aparecer na lista que aparece, significa que a zona DNS não está a ser gerida a partir da Área de Cliente OVHcloud.<br>
>> > Determine o « agente de registo » e os servidores DNS aos quais está associado através da nossa ferramenta [WHOIS](/links/web/domains-whois).<br>
>> > Encontre e modifique a zona DNS em causa de acordo com a rubrica dedicada do guia « [Partilhar o alojamento entre vários sites - adicionar um domínio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».
>>
> **Etapa 3**
>>
>> A tabela que aparece apresenta para cada linha um registo DNS associado ao seu domínio na OVHcloud. Esta opção permite filtrar o conteúdo da tabela por tipo de registo ou por nome de domínio.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> [!primary]
>> >
>> > Se o separador `Zona DNS`{.action} do seu domínio aparecer da seguinte forma:<br><br> ![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>> >
>> > Isto significa que o domínio não é gerido a partir da Área de Cliente OVHcloud.<br> Determine o « agente de registo » e os servidores DNS associados ao domínio através da nossa ferramenta [WHOIS](/links/web/domains-whois).<br> Encontre e modifique a zona DNS correspondente seguindo a secção dedicada do guia « [Partilhar o alojamento entre vários sites - adicionar um domínio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».
>>
>> Vá para a etapa 4 para visualizar os diferentes cenários possíveis e as ações a realizar.
>>
> **Etapa 4**
>>
>> |Cenários possíveis|Ação a ser realizada|
>> |---|---|
>> |Na zona DNS ativa, o seu domínio ou subdomínio aponta para o endereço IP do seu alojamento web com um registo de tipo A (para um endereço IPv4) ou AAAA (para um endereço IPv6).<br><br>![zoneDNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Isto indica que a configuração do seu domínio está correta.<br>Aguarde o tempo para a propagação DNS recente alteração.<br><br>Reinicie os seus dispositivos (PC, smartphone, box, etc.) e esvazie a cache do seu browser. A antiga configuração do domínio pode ainda ser conservada em cache, o que pode atrasar a apresentação da atualização.|
>> |A zona DNS ativa não contém registos do tipo A ou AAAA que liguem o seu domínio ou subdomínio ao endereço IP do seu alojamento web.|Adicione o novo registo DNS do tipo A ou AAAA ou corrija o registo existente seguindo [este manual](/pages/web_cloud/domains/dns_zone_edit).|
>> |O registo DNS de tipo A ou AAAA existente na zona DNS para o seu domínio ou subdomínio aponta para um endereço IP diferente do do seu alojamento web.|Adicione o novo registo DNS de tipo A ou AAAA ou corrija o registo existente seguindo [este manual](/pages/web_cloud/domains/dns_zone_edit).|
>> |Este aviso aparece no separador `Zona DNS`{.action}:<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Modifique os servidores DNS do seu domínio de acordo com o nosso guia « [Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit) »|.

## Quer saber mais? <a name="go-further"></a>

[Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Criar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).