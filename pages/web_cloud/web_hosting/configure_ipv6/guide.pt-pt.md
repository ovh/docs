---
title: "Configure um endereço IPv6 para o seu website"
excerpt: "Descubra como tornar o seu website compatível com um endereço IPv6"
updated: 2023-02-10
---

**Última atualização: 10/02/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A rede Internet funciona desde o início dos anos 90 seguindo a norma IPv4. Esta norma permite fornecer um endereço IP X.X.X.X (ou os "X" são números compreendidos entre 0 e 255) a cada uma das máquinas ligadas à rede Internet (servidores, computadores, smartphones, tablets, etc.). No entanto, esta norma limita em cerca de 4 mil milhões o número de dispositivos ligados à rede Internet, o que em 2022 representava menos de um dispositivo ligado para duas pessoas na Terra.

Na sequência disso, foi introduzido o protocolo **IPv6** para permitir a ligação à rede Internet até 340 milhões de aparelhos. A sua implantação leva algum tempo, uma vez que toda a rede Internet deve integrar esta nova norma. 

Uma vez que os endereços IPv4 estão menos disponíveis, é mais difícil adicionar novas máquinas à rede com a norma IPv4. No entanto, as ligações com um endereço IPv6 só são úteis se, por exemplo, o seu website também estiver disponível com este protocolo. Desta forma, quanto mais sites estiverem disponíveis em IPv6, mais os diferentes atores presentes na rede irão transferir os seus aparelhos/máquinas para este novo protocolo.

Para saber mais, consulte o artigo da [Wikipédia](https://pt.wikipedia.org/wiki/IPv6){.external} sobre o protocolo IPv6.

Os nossos alojamentos web são compatíveis com IPv6 desde 2011. Mas a ativação deste protocolo manteve-se até recentemente como uma opção facultativa de configuração. 

**Descubra como verificar se o seu website é compatível com o protocolo IPv6 e como configurá-lo com um endereço IPv6.**

## Requisitos

- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/){.external} na sua Área de Cliente OVHcloud.
- Dispor de um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Ter acesso ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste tutorial.
> 

Se o seu site não estiver configurado para funcionar com um endereço IPv6, pode adicionar [o endereço IPv6 do seu alojamento partilhado OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) na zona DNS ativa do seu nome de domínio. O objetivo é permitir aos browsers encontrar um endereço IPv6 associado ao seu website através do seu domínio.

### Verificar a compatibilidade IPv6 do seu website

Para verificar se o seu website já utiliza um endereço IPv6, utilize o site [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Indicará se o seu website responde a este novo protocolo IP. Caso contrário, continue a ler o nosso guia.

### Etapa 1: recuperar o endereço IPv6 do seu alojamento web

Ligue-se ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Na parte `Web Cloud`{.action}, clique em `Alojamentos`{.action}, selecione o nome do alojamento em causa e aceda ao separador `Informações gerais`{.action}.

No quadro **IPv6**, copie a entrada e passe ao passo seguinte.

![IPv6](images/ipv6_01.png){.thumbnail}

### Etapa 2: configurar a zona DNS ativa do seu domínio

> [!warning]
>
> As nossas opções CDN são atualmente incompatíveis com os endereços IPv6. Se configurar um endereço IPv6 para o seu website, os seus visitantes não irão beneficiar do CDN.
>
> Além disso, a adição, modificação ou supressão de uma entrada DNS na zona DNS ativa de um nome de domínio leva a um atraso de propagação de **4 à 24 horas** para ser plenamente efetivo.
>

Para que o seu browser encontre o endereço IPv6 com o seu nome de domínio, modifique a zona DNS ativa do seu domínio. Utilize o nosso guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit#editar-a-zona-dns-da-ovhcloud-do-seu-dominio)" para criar uma entrada DNS do tipo **AAAA**.

Na parte `Web Cloud`{.action}, clique nos `Nomes de domínio`{.action}. Escolha o seu nome de domínio e aceda ao separador `Zona DNS`{.action}. Clique no botão `Para Adicionar uma entrada`{.action} à direita da tabela. 

Introduza o endereço IPv6 previamente copiado utilizando o tipo de registo **AAAA**.

![IPv6](images/ipv6_02.png){.thumbnail}

## Quer saber mais? <a name="go-further"></a>

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit#editar-a-zona-dns-da-ovhcloud-do-seu-dominio)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 