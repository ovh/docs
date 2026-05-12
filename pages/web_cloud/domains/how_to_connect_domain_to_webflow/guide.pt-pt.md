---
title: "Ligar um nome de domínio OVHcloud ao Webflow"
excerpt: Prepare e configure a zona DNS do seu nome de domínio OVHcloud para a ligar a um alojamento Webflow
updated: 2026-03-18
---

## Objetivo

É titular de um nome de domínio na OVHcloud e pretende ligá-lo a um alojamento Webflow. Este guia explica como preparar e configurar a sua zona DNS OVHcloud para o seu alojamento Webflow.

**Saiba como ligar o seu nome de domínio OVHcloud a um alojamento Webflow**

> [!warning]
>
> - O suporte Webflow não tem acesso aos parâmetros do seu nome de domínio OVHcloud e não pode, por isso, aconselhá-lo sobre as informações que deverá fornecer.
> - A OVHcloud disponibiliza-lhe serviços cuja configuração, gestão e responsabilidade é da sua competência. Assim, deverá certificar-se de que estes funcionam corretamente.<br><br> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção [Quer saber mais?](#go-further) deste guia.
>

## Requisitos

- Ter um [nome de domínio](/links/web/domains) registado na OVHcloud.
- Dispor das [autorizações adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio.
- Ter um alojamento na Webflow.
- Ter acesso à gestão deste alojamento na Webflow.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Para aceder aos seus serviços:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-dns-zone -->

## Instruções

Antes de seguir as etapas deste guia, aconselhamos que consulte o nosso guia "[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> A sua zona DNS já se encontra potencialmente pré-configurada ou associada a um alojamento. Vamos ver como identificar cada registo DNS necessário para estabelecer a ligação com o seu alojamento Webflow. Alguns terão de ser eliminados para evitar entrar em conflito com os registos DNS requeridos nesta configuração. Outros serão simplesmente modificados ou criados. Para uma melhor compreensão, utilizaremos o nome de domínio "**mydomain.ovh**" como exemplo. Substitua-o pelo seu nome de domínio durante a configuração.

### 1. Configurar o seu alojamento Webflow

Prepare primeiro o seu alojamento Webflow seguindo as instruções da secção **How to connect your custom domain** a partir de [**esta página da documentação Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain).

### 2. Configurar os registos DNS na sua conta OVHcloud

> [!warning]
>
> Antes de avançar:
>
> - Abra um separador em paralelo no seu browser.
> - Abra [**esta página da documentação Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export).
> - Posicione-se na secção "**How to set your DNS records**" da documentação Webflow.<br>
> As instruções seguintes ajudá-lo-ão a configurar com maior facilidade a sua zona DNS OVHcloud.

Clique nos separadores abaixo para visualizar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o nome de domínio correspondente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> A tabela lista os registos DNS do nome de domínio selecionado.
>>
> **Etapa 2**
>>
>> **Configuração dos registos A**
>>
>> **1 - Identificação:** filtre os registos DNS selecionando o tipo `A` no menu de filtros situado no canto superior direito da tabela.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Identifique os registos "A" existentes para o seu nome de domínio apenas (exemplo: `mydomain.ovh.`) e para o subdomínio "www" (exemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminação:** elimine todos os registos "A" existentes para o subdomínio "www". Se existirem mais de 2 registos "A" para o nome de domínio apenas, elimine os registos excedentários para conservar apenas 2. Para cada registo a eliminar, clique no botão `...`{.action} à direita da linha correspondente e depois em `Eliminar a entrada`{.action}.
>>
>> **3 - Modificação:** modifique cada registo "A" conservado para o nome de domínio apenas clicando no botão `...`{.action} e depois em `Alterar a entrada`{.action}. Substitua o destino por um dos 2 endereços IPv4 do Webflow (um endereço diferente por registo):
>>
>> - `75.2.70.75`
>> - `99.83.190.102`
>>
>> Clique em `Seguinte`{.action} e valide.
>>
>> **4 - Adição:** se existirem menos de 2 registos "A", crie os registos em falta. Clique em `Adicionar uma entrada`{.action} no canto superior direito, selecione o campo de apontamento `A`{.action}, deixe o campo **Subdomínio** vazio e introduza no campo **Destino** cada endereço IPv4 ainda não atribuído. Clique em `Seguinte`{.action} e valide.
>>
>> Passe de seguida à etapa 3.
>>
> **Etapa 3**
>>
>> **Eliminação dos registos AAAA**
>>
>> **1 - Identificação:** filtre os registos DNS selecionando o tipo `AAAA` no menu de filtros situado no canto superior direito da tabela.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Identifique os registos "AAAA" existentes para o seu nome de domínio apenas (exemplo: `mydomain.ovh.`) e para o subdomínio "www" (exemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminação:** elimine todos os registos "AAAA" identificados (nome de domínio apenas e subdomínio "www") para evitar um conflito com os novos registos DNS. Para cada registo, clique no botão `...`{.action} à direita da linha correspondente e depois em `Eliminar a entrada`{.action}.
>>
>> Se não existir nenhum registo "AAAA", passe à etapa 4.
>>
> **Etapa 4**
>>
>> **Configuração do registo TXT**
>>
>> **1 - Identificação:** filtre os registos DNS selecionando o tipo `TXT` no menu de filtros situado no canto superior direito da tabela.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Identifique os registos "TXT" existentes para o seu nome de domínio apenas (exemplo: `mydomain.ovh.`) e para o subdomínio "www" (exemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminação:** elimine todos os registos "TXT" identificados (nome de domínio apenas e subdomínio "www") para evitar um conflito com os novos registos DNS. Para cada registo, clique no botão `...`{.action} à direita da linha correspondente e depois em `Eliminar a entrada`{.action}.
>>
>> **3 - Adição:** crie um registo TXT de verificação. Clique em `Adicionar uma entrada`{.action} no canto superior direito, selecione o campo de apontamento `TXT`{.action}, introduza `_webflow` no campo **Subdomínio** e no campo **Destino** o valor do tipo `one-time-verification=XXXXXXXX` presente na secção `Site settings > Publishing tab > Production`{.action} da sua conta Webflow. Clique em `Seguinte`{.action} e valide.
>>
>> Passe de seguida à etapa 5.
>>
> **Etapa 5**
>>
>> **Configuração do registo CNAME**
>>
>> **1 - Identificação:** filtre os registos DNS selecionando o tipo `CNAME` no menu de filtros situado no canto superior direito da tabela.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Identifique os registos "CNAME" existentes para o subdomínio "www" (exemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminação:** se existirem vários registos "CNAME" para o subdomínio "www", elimine-os todos exceto um. Para cada registo a eliminar, clique no botão `...`{.action} à direita da linha correspondente e depois em `Eliminar a entrada`{.action}.
>>
>> **3 - Modificação:** se existir um registo "CNAME" para o subdomínio "www", clique no botão `...`{.action} e depois em `Alterar a entrada`{.action}. Substitua apenas o **Destino** por `proxy-ssl.webflow.com.`. Clique em `Seguinte`{.action} e valide.
>>
>> Se não existir nenhum registo "CNAME" para o subdomínio "www", clique em `Adicionar uma entrada`{.action} no canto superior direito, selecione o campo de apontamento `CNAME`{.action}, introduza `www` no campo **Subdomínio** e `proxy-ssl.webflow.com.` no campo **Destino**. Clique em `Seguinte`{.action} e valide.

A zona DNS está agora configurada para apontar para o seu alojamento Webflow.

> [!primary]
>
> A verificação do seu nome de domínio pode levar até 48 horas.

Se utiliza uma oferta de e-mail OVHcloud ou pretende subscrever uma das [nossas ofertas de e-mail](/links/web/emails), deverá também preparar a sua zona DNS em conformidade. Consulte o nosso guia sobre a [configuração de um registo MX](/pages/web_cloud/domains/dns_zone_mx).

## Quer saber mais? <a name="go-further"></a>

[Modificar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Criar uma zona DNS OVHcloud para um nome de domínio](/pages/web_cloud/domains/dns_zone_create)

[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para alterar a gestão do seu nome de domínio para outra conta de cliente OVHcloud, siga o guia "[Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts)".

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
