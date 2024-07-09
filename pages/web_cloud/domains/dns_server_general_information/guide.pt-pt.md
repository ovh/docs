---
title: "Saber tudo sobre os servidores DNS"
excerpt: "Descubra o papel dos servidores DNS, o que eles contêm e como funcionam com um domínio"
updated: 2024-06-17
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A sigla **DNS**, que significa **D**omain **N**ame **S**ystem, é um conjunto de elementos (servidores DNS, zonas DNS, etc.) que permitem fazer corresponder um domínio a um endereço IP.

**Descubra o papel dos servidores DNS, o que estes contêm e como funcionam com um domínio.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Instruções

### Função dos servidores DNS

Todos os **servidores DNS** formam em conjunto aquilo que chamamos de rede DNS.

Esta rede DNS permite facilitar aos utilizadores o acesso à Internet e aos diferentes serviços que lhe estão associados (websites, serviços de correio eletrónico, etc.).

Eles permitem a utilização de [nomes de domínio](/links/web/domains) para aceder ao seu website preferido sem ser obrigado a reter o endereço IP do servidor onde está alojado este website.

![DNS resolution](/pages/assets/schemas/domains/dns-resolution.png){.thumbnail}

Existem 4 tipos de servidores DNS.

Encontre abaixo uma tabela que apresenta os 4 tipos de servidores DNS e as suas interações. Os exemplos dados na tabela serão realizados a partir de um pedido DNS enviado a partir de um browser para conhecer o endereço IP do website *domain.tld*.

|Tipo de servidor DNS|Descrição|Exemplo|
|---|---|---| 
|Resolvedor DNS (DNS resolver ou DNS recursivo)|Primeiro servidor que recebe o pedido DNS de um cliente (browser da Internet, software de correio eletrónico, etc.). Esta etapa é representada pela etapa **1** do esquema acima. Este servidor faz a gateway entre o cliente e o resto da rede DNS. Ele interroga os outros três tipos de servidores DNS até que recupere o endereço IP, solicitado pela query DNS, junto do servidor DNS de referência. O cliente envia o pedido DNS para obter o endereço IP do domínio *domain.tld*. |O browser envia um pedido DNS para saber o endereço IP do domínio *domain.tld*. Isto permite conhecer o servidor onde está alojado o website associado ao nome de domínio *domain.tld*.|
|Servidor DNS raiz (DNS root)|Contém um diretório para todos os TLDs (nomes de domínio de primeiro nível tais como *.com*, *.net*, *.fr*, etc.). Ele indicará ao resolvedor DNS o endereço do servidor DNS TLD correspondente à extensão presente no pedido DNS solicitado pelo cliente (etapas **2** e **3** do esquema acima).|O resolvedor DNS transmite o pedido DNS que recebeu para *domain.tld* ao servidor DNS de raiz e recebe em resposta o endereço do servidor DNS TLD que gere a extensão *.tld*.|
|Servidores DNS de extensão/nomes de domínio de topo (DNS TLD)|Contém um diretório de nomes de domínio para uma determinada extensão. Ele indicará ao resolvedor DNS o endereço do servidor DNS de referência correspondente ao nome de domínio presente na query DNS solicitada pelo cliente (etapas **4** e **5** do esquema acima).|O resolvedor DNS transmite de seguida o pedido DNS que recebeu para *domain.tld* ao servidor DNS TLD que gere as extensões em *.tld* e recebe em resposta o endereço do servidor DNS de referência que gere a zona DNS do nome de domínio *domain.tld*.|
|Servidores DNS de referência (DNS Authoritative)|Último servidor DNS consultado pelo resolvedor DNS (etapas **6** e **7** do esquema acima). Contém a zona DNS ativa para o nome de domínio presente na query DNS solicitada pelo cliente. Este é o conteúdo deste tipo de servidor DNS que vamos detalhar mais à frente neste manual.|O resolvedor DNS transmite a query DNS que recebeu para *domain.tld* ao servidor DNS de referência que gere a zona DNS do nome de domínio *domain.tld* e recebe em resposta o endereço IP (exemplo 203.0.113.0) do servidor que aloja o site do nome de domínio *domain.tld*.|

Assim que o resolvedor DNS tiver recuperado o endereço IP do servidor procurado através da query DNS solicitada pelo cliente, ele reenvia este endereço IP ao cliente (etapa **8** do esquema acima).

De seguida, o cliente envia outro pedido diretamente para o servidor associado ao endereço IP recuperado graças à resolução DNS (etapa **9** do esquema acima). Isto permite-lhe aceder ou obter os elementos de que necessita para resolver este segundo pedido (etapa **10** no diagrama acima). No nosso exemplo, o cliente (browser) interroga o servidor com o endereço IP 203.0.113.0 para recuperar o conteúdo a apresentar para o website *domain.tld*.

Consulte o nosso guia "[Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)" se precisar de realizar esta ação para um nome de domínio registado na OVHcloud.

### Conteúdo de um servidor DNS (Authoritative)

Um **servidor DNS (Authoritative)** contém um diretório de nomes de domínio que podem ter extensões (TLD) diferentes.

Para cada domínio contido no diretório está associada uma **zona DNS** que contém a configuração DNS a aplicar ao nome do domínio.

Uma zona DNS contém informações técnicas, chamadas *registos DNS*. A zona DNS é como um posto de comando.

> [!success]
>
> - Para mais informações sobre as zonas DNS, consulte o guia "[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".
> - Consulte o nosso guia sobre [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records) para uma melhor compreensão do conjunto.
>

Por este facto, são os **servidores DNS (Authoritative)** que devem ser declarados (junto do agente de registo de um nome de domínio) para utilizar a zona DNS que alojam.

![DNS](/pages/assets/schemas/domains/dns-server.png){.thumbnail}

### Funcionamento de um servidor DNS (Authoritative) com um domínio

#### Declaração dos servidores DNS (Authoritative) junto do agente registador de um domínio

Para que a zona DNS associada a um nome de domínio presente no diretório de um servidor DNS seja ativada, é necessário que esse servidor DNS seja declarado no agente de registo do nome de domínio.

Por precaução, declaramos no mínimo 2 **servidores DNS (Authoritative)** (um servidor DNS primário e um servidor DNS secundário) junto do agente de registo de um nome de domínio. Ambos operam da mesma maneira. No entanto, se um dos dois responder mais rapidamente, será interrogado prioritariamente pelos resolvedores DNS. Se um dos dois não responder ou deixar de responder, o outro servidor DNS estará presente para responder ao pedido DNS.

Por vezes, alguns fornecedores DNS propõem mais de 2 **servidores DNS (Authoritative)** a declarar junto do seu nome de domínio. Neste caso, indique todos os servidores DNS propostos pelo seu fornecedor DNS.

## Quer saber mais?

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information).

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records).

[Alterar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit).

[Alterar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).