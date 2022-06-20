---
title: 'Resolver o erro “Site não instalado”'
excerpt: 'Saiba como resolver o erro da página “Site não instalado”'
slug: alojamento_web_erro_de_site_nao_instalado
section: Diagnóstico
order: 4
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 18/05/2021**

## Objetivo

É possível que apareça no seu browser a página de erro **Site não instalado**, nomeadamente aquando da primeira instalação do seu website.

![site-not-installed](images/site-not-installed2021.png){.thumbnail}

**Saiba como identificar e resolver a página de erro "Site não instalado"**

> [!warning]
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#gofurther)?

## Requisitos

- Dispor de uma [oferta de alojamento partilhado](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter também à disposição a gestão da [Zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/) à qual está associado o seu domínio.

## Instruções

A página **Site não instalado** aparece em duas situações:

1. O seu domínio não está presente na parte [Multisite](../multisites-configurar-um-multisite-no-meu-alojamento-web/) do seu alojamento.

2. O seu domínio não está associado ao seu alojamento através da sua `Zona DNS`{.action}.

As etapas seguintes permitem-lhe corrigir o erro `Site não instalado` nestas duas situações.

### Etapa 1: verificar a parte multi-site do seu alojamento

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique em `Web Cloud`{.action} e, a seguir, em `Alojamentos`{.action}.

Selecione o alojamento correspondente na lista e clique no separador `Multisite`{.action}.

|Cenário|Medidas a adotar|
|---|---|
|O nome do seu site aparece na tabela.|Se acabou de adicionar o nome do seu site na parte multisite do seu alojamento, aguarde cerca de 20 minutos e atualize a cache do seu browser. Se a mensagem "Site não instalado" aparecer, passe para o [passo 2](#checkdomainlink).|
|O domínio ou subdomínio associado ao seu site não aparece na tabela.|Adicione o seu domínio ao `Multisite`{.action} seguindo a secção dedicada do guia [Partilhar o alojamento entre vários sites - adicionar um domínio ou subdomínio](../multisites-configurar-um-multisite-no-meu-alojamento-web/#2-adicionar-um-dominio-ou-subdominio).|
|O domínio foi eliminado do multi-site sem nenhuma ação da sua parte.|O seu domínio ou a sua zona DNS podem ser geridos a partir de outra conta. Adicione o seu domínio ao multisite seguindo a secção dedicada do guia [Partilhar o alojamento entre vários sites - adicionar um domínio externo](../multisites-configurar-um-multisite-no-meu-alojamento-web/#etapa-22-adicionar-um-dominio-externo).|

### Etapa 2 : verificar a zona DNS do seu domínio <a name="checkdomainlink"></a>

> [!primary]
>
> Este passo destina-se a verificar que o seu domínio, através da sua `Zona DNS`{.action}, está ligado ao alojamento do seu site.
> Para saber mais sobre a noção de DNS, consulte o nosso guia [Editar uma zona DNS da OVHcloud](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/#compreender-a-nocao-de-dns).

#### 2.1 Identificar o endereço IP do seu alojamento OVHcloud

Para encontrar o endereço IP, clique em `Alojamentos` na  [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e selecione o alojamento em causa.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### 2.2 Verificar o endereço IP registado na zona DNS do seu domínio

Para verificar se o endereço IP do alojamento está na zona DNS ativa do seu domínio,

Para isso, aceda à secção `Nomes de domínio`{.action}, selecione o seu domínio e clique no separador `Zona DNS`{.action}.

|Situações possíveis|Medidas a adotar|
|---|---|
|Na zona DNS, o seu domínio está ligado ao endereço IP do seu alojamento com uma entrada do tipo A (para IPv4) ou AAAA (para IPv6) :<br><br>![zonaDNS_IP2](images/zonedns_ip2.png){.thumbnail}|Isto indica que a configuração do seu domínio está correta.<br><br>Após as últimas modificações nos seus DNS, o seu site será apresentado num prazo máximo de 48 horas.<br><br>Também pode reiniciar os seus dispositivos (PC, smartphone, Internet box, etc.) e esvaziar a cache do seu browser.|
|A zona DNS não inclui nenhuma entrada de tipo A ou AAAA que associe o seu domínio ao endereço IP do seu alojamento. Ou a entrada existente aponta para outro endereço IP.|Adicione uma nova entrada de tipo A ou AAAA ou corrija a entrada existente seguindo [este guia](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).|
|O seu domínio não aparece na secção `Nomes de domínio`{.action} da sua Área de Cliente.<br><br>Ou o separador `Zona DNS`{.action} do seu domínio apresenta-se da seguinte forma :<br><br>![zonedns_ndd_pas_sobre_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Isto significa que o seu domínio não é gerido a partir da Área de Cliente OVHcloud.<br><br>Determine o seu registar através da nossa ferramenta [WHOIS](https://www.ovh.pt/suporte/ferramentas/check_whois.pl) e os servidores DNS aos quais está associado.<br><br>Encontre e modifique a zona DNS em causa em conformidade, de acordo com [este guia](../multisites-configurar-um-multisite-no-meu-alojamento-web/#etapa-22-adicionar-um-dominio-externo).|
|Este aviso aparece no separador Zona `DNS`{.action} :<br><br>![aviso_zonedns_pas_sur_srv_Dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Assim, deverá alterar os servidores DNS do seu domínio de acordo com [este guia](../../domains/partilhado_generalidades_sobre_os_servidores_dns/).|

## Quer saber mais? <a name="gofurther"></a>

[Lista dos endereços IP dos clusters e alojamentos web](../lista-dos-enderecos-ip-dos-clusters-e-alojamentos-web/)

Para obter ajuda na utilização e configuração das suas soluções OVHcloud, consulte as nossas [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
