---
title: "Configure um endereço IPv6 para o seu website"
excerpt: "Saiba como tornar o seu website compatível com um endereço IPv6"
updated: 2025-01-28
---

## Objetivo

A rede Internet funciona desde o início dos anos 90 seguindo a norma IPv4. Esta norma permite fornecer um endereço IP X.X.X.X (ou os "X" são números compreendidos entre 0 e 255) a cada uma das máquinas ligadas à rede Internet (servidores, computadores, smartphones, tablets, etc.). No entanto, esta norma limita em cerca de 4 mil milhões o número de dispositivos ligados à rede Internet, o que em 2022 representava menos de um dispositivo ligado para duas pessoas na Terra.

Na sequência disso, foi introduzido o protocolo **IPv6** para permitir a ligação à rede Internet até 340 milhões de aparelhos. A sua implantação leva algum tempo, uma vez que toda a rede Internet deve integrar esta nova norma. 

Uma vez que os endereços IPv4 estão menos disponíveis, é mais difícil adicionar novas máquinas à rede com a norma IPv4. No entanto, as ligações com um endereço IPv6 só são úteis se, por exemplo, o seu website também estiver disponível com este protocolo. Desta forma, quanto mais sites estiverem disponíveis em IPv6, mais os diferentes atores presentes na rede irão transferir os seus aparelhos/máquinas para este novo protocolo.

Para saber mais, consulte o artigo da [Wikipédia](https://pt.wikipedia.org/wiki/IPv6) sobre o protocolo IPv6.

Os nossos alojamentos web são compatíveis com IPv6 desde 2011. Mas a ativação deste protocolo manteve-se até recentemente como uma opção facultativa de configuração. 

**Saiba como verificar se o seu website é compatível com o protocolo IPv6 e como configurá-lo com um endereço IPv6.**

## Requisitos

- Dispor de um [nome de domínio](/links/web/domains) na sua Área de Cliente OVHcloud.
- Dispor de um [serviço de alojamento web](/links/web/hosting).
- Ter acesso ao seu [Área de Cliente OVHcloud](/links/manager).

## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. Se precisar de ajuda, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste tutorial.
> 

Se o seu site não estiver configurado para funcionar com um endereço IPv6, pode adicionar [o endereço IPv6 do seu alojamento partilhado OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) na zona DNS ativa do seu nome de domínio. O objetivo é permitir aos browsers encontrar um endereço IPv6 associado ao seu website através do seu domínio.

### 1 - Verificar a compatibilidade IPv6 do seu website

Para verificar se o seu website já utiliza um endereço IPv6, utilize o site [ipv6-test.com](https://ipv6-test.com/validate.php). Indicará se o seu website responde a este novo protocolo IP. Caso contrário, continue a ler o nosso guia.

### 2 - recuperar o endereço IPv6 do seu alojamento web

Clique nas janelas abaixo para visualizar cada uma das etapas **3**.

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
>> No marco **Informações gerais**, encontrará **IPv6**.
>>
>> ![IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv6.png){.thumbnail}
>>
>> Copie o endereço IP e continue a ler o guia.

### 3 - configurar a zona DNS ativa do seu domínio

> [!warning]
>
> As nossas opções CDN são atualmente incompatíveis com os endereços IPv6. Se configurar um endereço IPv6 para o seu website, os seus visitantes não irão beneficiar do CDN.
>
> Além disso, a adição, modificação ou supressão de uma entrada DNS na zona DNS ativa de um nome de domínio leva a um atraso de propagação de **4 à 24 horas** para ser plenamente efetivo.
>

Para que o seu browser encontre o endereço IPv6 com o seu domínio, terá de alterar a zona DNS ativa do seu domínio.

Se a zona DNS ativa do seu domínio estiver presente na OVHcloud, utilize os nossos manuais [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit), e [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records) para criar uma entrada DNS do tipo **AAAA**.

Caso contrário, contacte o seu fornecedor DNS indicando o endereço IPv6 anteriormente recuperado.

## Quer saber mais? <a name="go-further"></a>

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community). 