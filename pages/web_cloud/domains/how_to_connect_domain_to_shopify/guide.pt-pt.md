---
title: "Como ligar um domínio OVHcloud a um alojamento Shopify"
excerpt: "Prepare e configure a zona DNS do seu domínio OVHcloud para a ligar a um alojamento Shopify"
updated: 2024-04-17
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Tem um nome de domínio na OVHcloud e deseja ligá-lo a um alojamento Shopify. Neste guia, encontrará as etapas de preparação e de configuração da sua zona DNS da OVHcloud para permitir a configuração do seu alojamento Shopify.

**Saiba como conectar o seu domínio OVHcloud a um alojamento Shopify**

> [!warning]
>
> - O suporte Shopify não tem acesso aos parâmetros do seu domínio OVHcloud e, por isso, não pode aconselhá-lo sobre as informações que deve fornecer.
>
> - A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.<br><br> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção [Quer saber mais?](#go-further) deste guia.
>

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}.
- Ter um [nome de domínio](/links/web/domains){.external} registado na OVHcloud.
- Dispor das [autorizações adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio a partir da sua [Área de Cliente OVHcloud](/links/manager){.external}.
- Ter um alojamento na Shopify.
- Ter acesso à gestão deste alojamento na Shopify.

## Instruções

Antes de seguir as duas etapas deste manual, deve familiarizar-se com a configuração de uma zona DNS através do nosso manual "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> A sua zona DNS já se encontra potencialmente pré-configurada ou associada a um alojamento. Vamos ver como identificar cada registo DNS necessário para estabelecer ligação com o seu alojamento Shopify. Alguns terão de ser eliminados para evitar entrar em conflito com os registos DNS requeridos nesta configuração. Outros serão simplesmente modificados ou criados. Para uma melhor compreensão, utilizaremos o domínio "**mydomain.ovh**" como exemplo. Substitua-o pelo seu domínio durante a configuração.

### Configurar os registos DNS na sua conta OVHcloud

Aceda à [Área de Cliente OVHcloud](/links/manager){.external}, secção `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

Aparecerá uma tabela com a lista de todos os registos DNS do nome de domínio selecionado.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Cada registo DNS pode ser alterado clicando no botão `...`{.action} à direita da linha da tabela em causa e, a seguir, clicando em `Modificar entrada`{.action}.

Siga as etapas em ordem nas seguintes guias:

> [!tabs]
> **Etapa 1**
>> **Registo A**<br><br>
>> Para identificar os registos "A" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `A`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}<br>
>> - Clique no botão `...`{.action} à direita da linha da tabela que corresponde ao seu nome de domínio apenas, sem um subdomínio (exemplo: `mydomain.ovh.`), e depois clique em `Modificar entrada`{.action}.<br>
>> - Se existir um registo para o subdomínio "www." (exemplo: `www.mydomain.ovh.`), deverá eliminá-lo para que não entre em conflito com o registo CNAME que vai introduzir no etapa 4. Clique no botão `...`{.action} à direita da linha correspondente ao seu nome de domínio apenas com o subdomínio "www." e clique em `Eliminar entrada`{.action}.<br>
>> - Se não possui um registo "A" existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o "Campo de apontamento" `A`{.action}<br><br>
>> Deixe o campo **Subdomínio** em branco e insira o endereço IPv4 do Shopify `23.227.38.65` no campo de **Alvo**.
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/field-a.png){.thumbnail}<br><br>
>> Clique em `Seguinte`{.action}, valide o seu registo "A" e passe à etapa 2.
> **Etapa 2**
>> **Registo AAAA**<br><br>
>>  Para identificar os registos "AAAA", clique no menu Filtros na parte superior da tabela de registos DNS e selecione `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu nome de domínio apenas sem um subdomínio (exemplo: `mydomain.ovh.`) e, em seguida, clique em `Modificar entrada`{.action}.<br>
>> - Se existir um registo para o subdomínio "www." (exemplo: `www.mydomain.ovh.`), deverá eliminá-lo para que não entre em conflito com o registo CNAME que vai introduzir no etapa 4. Clique no botão `...`{.action} à direita da linha correspondente ao seu nome de domínio apenas com o subdomínio "www." e clique em `Eliminar entrada`{.action}.<br>
>> - Se não possui um registo "AAAA" existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o "Campo de apontamento" `AAAA`{.action}<br><br>
>> Deixe o campo **Subdomínio** vazio e insira o endereço IPv6 do Shopify `2620:0127:f00f:5::` no campo de **Alvo**.
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/field-aaaa.png){.thumbnail}<br><br>
>> Clique em `Seguinte`{.action}, valide o registo "AAAA" e passe à etapa 3.
> **Etapa 3**
>> **Registo TXT**<br><br>
>>  Para identificar os registos "TXT" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `TXT`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}<br>
>> - Se existirem registos "TXT" apenas para o nome de domínio (exemplo: `mydomain.ovh.`) e para o seu subdomínio em "www." (exemplo: `www.mydomain.ovh.`), deve eliminá-los para que não entrem em conflito com o registo CNAME que vai introduzir no etapa 4. Clique no botão `...`{.action} à direita da linha correspondente ao seu nome de domínio apenas com o subdomínio "www." e clique em `Eliminar entrada`{.action}.<br>
> **Etapa 4**
>> **Registo CNAME**<br><br>
>>  Para identificar os registos "CNAME" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>> - Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu subdomínio em "www." (exemplo: `mydomain.ovh.`) e depois clique em `Modificar entrada`{.action}.<br>
>> - Se não possui um registo "CNAME" existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do seu ecrã e selecione o "Campo de apontamento" `CNAME`{.action}.
>> Preencha o campo **Subdomínio** com o valor `www` e introduza `shops.myshopify.com.` no campo **Alvo**.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/field-cname-shopify.png){.thumbnail}<br><br>
>> Clique em `Seguinte`{.action} e valide o seu registo "CNAME".

A zona DNS está agora configurada para fazer a ligação a um alojamento Shopify.

### Ligar o seu domínio ao Shopify

As manipulações para esta etapa devem ser realizadas a partir da Área de Gestão do Shopify. Sugerimos que vá diretamente à etapa 2 do guia no site da Shopify, clicando [**nesta ligação**](https://help.shopify.com/en/manual/domains/add-a-domain/connecting-domains/connect-domain-manual){.external}.

> [!primary]
>
> A verificação do seu domínio pode levar até 48 horas.

Se utiliza uma oferta de e-mail da OVHcloud ou pretende subscrever uma das [nossas ofertas de e-mail](/links/web/emails), deverá também preparar a sua zona DNS em conformidade. Consulte o nosso manual sobre a [configuração de um registo MX](/pages/web_cloud/domains/dns_zone_mx).

## Quer saber mais? <a name="go-further"></a>

[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para alterar a gestão do seu domínio para outra conta de cliente OVHcloud, siga o guia "[Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts)".
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).