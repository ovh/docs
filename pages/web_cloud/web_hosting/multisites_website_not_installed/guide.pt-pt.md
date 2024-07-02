---
title: 'Resolver o erro “Site não instalado”'
excerpt: 'Saiba como resolver o erro da página “Site não instalado”'
updated: 2023-11-24
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

É possível que apareça no browser a página de erro **Site não instalado**, nomeadamente durante a primeira instalação do seu website.

![website not installed](images/site-not-installed.png){.thumbnail}

**Saiba como identificar e resolver a página de erro "Site não instalado"**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Mais informações na secção "[Quer saber mais?](#go-further)" deste guia.

## Requisitos

- Dispor de um serviço [de alojamento partilhado](/links/web/hosting)
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)
- Dispor igualmente da gestão da [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) à qual está associada o seu domínio.

## Instruções

A página **Site não instalado** é apresentada por dois motivos:

- 1: [O seu domínio ou subdomínio não foi corretamente declarado no seu alojamento web](#check-multisites).

- 2: [O seu domínio não aponta para o endereço IP da sua oferta de alojamento web.](#check-dns-domain)

Os passos seguintes irão permitir-lhe corrigir o erro `Site não instalado` nestes dois casos.

### Passo 1 - Verifique a declaração do seu domínio ou subdomínio no seu alojamento web <a name="check-multisites"></a>

Na [Área de Cliente OVHcloud](/links/manager), aceda à secção `Web Cloud`{.action} no topo da página e clique no separador `Alojamentos`{.action} na coluna da esquerda.

Selecione o alojamento web em causa na lista e, em seguida, clique no separador `Multisite`{.action}.

|Cenário|Ação a ser realizada|
|---|---| 
|O nome de domínio ou o subdomínio associado ao seu website aparece na tabela "multisite".|Se acabou de adicionar o nome de domínio/subdomínio na parte `Multisite`{.action} do seu alojamento web, aguarde um **vinte minutos** e atualize a cache do seu browser. Se a mensagem "Site não instalado" aparecer, vá para [etapa 2](#check-dns-domain).|
|O domínio ou o subdomínio associado ao seu website não aparece na tabela "multisite".|Adicione o seu domínio/subdomínio à secção `Multisite`{.action} seguindo a secção dedicada do guia "[Partilhar o alojamento entre vários sites - adicionar um domínio ou um subdomínio](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
|O domínio ou subdomínio foi eliminado da tabela "multisite" sem qualquer ação da sua parte.|O seu domínio ou a sua zona DNS podem ter sido geridos a partir de outra conta. Adicione o seu domínio/subdomínio à parte `Multisite`{.action}, seguindo a secção dedicada do guia "[Partilhar o alojamento entre vários sites - adicionar um domínio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|

### Etapa 2 - Verificar o apontamento IP na zona DNS ativa do seu domínio <a name="check-dns-domain"></a>

Este passo consiste em verificar se o seu domínio ou subdomínio aponta corretamente para o endereço IP do seu alojamento web, a partir da sua zona DNS ativa.

> [!primary]
>
> Para saber mais sobre a noção de DNS, consulte as seguintes páginas:
> 
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Criar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)
>

#### 2\.1 Identificar o endereço IP do seu alojamento web da OVHcloud

Para encontrar o endereço IP do seu alojamento web, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action} situado no topo da página. Clique no separador `Alojamentos`{.action} na coluna da esquerda e, em seguida, selecione o alojamento web em causa na lista.

Poderá consultar o endereço `IPv4` na caixa `Informações gerais`{.action}.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

Pode também consultar o endereço IP associado ao seu alojamento web no nosso guia "[Lista dos endereços IP associados aos alojamentos web da OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Verifique o endereço IP anotado na zona DNS ativa do seu domínio

A seguir, deve verificar se o endereço IP do alojamento web está indicado na zona DNS ativa do domínio.

> [!primary]
>
> Antes de prosseguir, a partir do momento em que ocorre uma modificação na **zona DNS** ativa de um domínio, poderá ser necessário um prazo de propagação de **4 a 24 horas** para atualizar as informações sobre a rede DNS.
>
> Se modificar diretamente os **servidores DNS** associados ao seu domínio, este prazo pode ir até **48 horas**, no máximo.
>

Para isso, aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}, no topo da página. Aceda à secção `Nomes de domínio`{.action}, selecione o seu domínio e aceda ao separador `Zona DNS`{.action}.

Aparece uma tabela com os diferentes registos DNS.

|Cenários possíveis|Ação a ser realizada|
|---|---| 
|Na zona DNS ativa, o seu domínio/subdomínio aponta para o endereço IP do seu alojamento web com um registo de tipo A (para um IPv4) ou AAAA (para um IPv6).<br><br>![zona DNS_IP2](images/dashboard-entry-a.png){.thumbnail} Isto indica que a configuração do seu domínio está correta.<br><br><br> Aguarde o tempo necessário para a propagação DNS, caso a alteração tenha ocorrido recentemente.<br><br><br> Lembre-se de reiniciar os seus dispositivos (PC, smartphone box, cache, etc.) e esvazar o navegador da Internet. A configuração do domínio pode ser guardada em cache, o que pode tornar a apresentação da atualização mais lenta.
A zona DNS ativa não contém registos do tipo A ou AAAA que associem o seu domínio/subdomínio ao endereço IP do seu alojamento web. Ou o registo existente está a apontar para outro endereço IP.|Adicione o novo registo do tipo A ou AAAA ou corrija o registo existente seguindo [este manual](/pages/web_cloud/domains/dns_zone_edit)|
|O seu domínio não aparece na parte `Nomes de domínio`{.action}} da sua Área de Cliente OVHcloud.<br><br>Ou o separador `Zona DNS`{.action} do seu nome de domínio aparece da seguinte forma:<br><br>![zonedns_ndd_no_lec2](images/zone-without-domain-top-of-the-page.png){.thumbnail}|Isto significa que o seu nome de domínio não é gerido a partir da Área de Cliente OVHcloud.<br><br>Determine o seu "registar" através da nossa ferramenta [WHOIS](/links/web/domains-whois) e os servidores DNS aos quais está associado. <br><br>Encontre e modifique a zona DNS em causa de acordo com a secção dedicada do guia "[Partilhar o alojamento entre vários sites - adicionar um domínio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
|Este aviso aparece no separador `Zona DNS`{.action}:<br><br>![aviso_zondns_não_em_srv_dns](images/message-other-ovh-dns-servers.png){.thumbnail}|Desta forma, deverá alterar os servidores DNS do seu domínio em conformidade, seguindo o nosso guia "[Modificar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)."|

## Quer saber mais? <a name="go-further"></a>

[Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Criar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).