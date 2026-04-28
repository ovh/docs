---
title: "Ligar um nome de domínio OVHcloud ao SquareSpace"
excerpt: "Prepare e configure a zona DNS do seu nome de domínio OVHcloud para a ligar a um alojamento SquareSpace"
updated: 2026-03-18
---

## Objetivo

É titular de um nome de domínio na OVHcloud e pretende ligá-lo a um alojamento SquareSpace. Este guia explica como preparar e configurar a sua zona DNS OVHcloud para o seu alojamento SquareSpace.

**Saiba como ligar o seu nome de domínio OVHcloud a um alojamento SquareSpace**

> [!warning]
>
> - O suporte SquareSpace não tem acesso aos parâmetros do seu nome de domínio OVHcloud e não pode, por isso, aconselhá-lo sobre as informações que deverá fornecer.
>
> - A OVHcloud disponibiliza-lhe serviços cuja configuração, gestão e responsabilidade é da sua competência. Assim, deverá certificar-se de que estes funcionam corretamente.<br><br> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção [Quer saber mais?](#go-further) deste guia.
>

## Requisitos

- Ter um [nome de domínio](/links/web/domains) registado na OVHcloud.
- Dispor das [autorizações adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio.
- Ter um alojamento na SquareSpace.
- Ter acesso à gestão deste alojamento na SquareSpace.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Para aceder aos seus serviços:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-dns-zone -->

## Instruções

Antes de seguir as etapas deste guia, aconselhamos que se familiarize com a configuração de uma zona DNS através do nosso guia "[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> A sua zona DNS já se encontra potencialmente pré-configurada ou associada a um alojamento. Vamos ver como identificar cada registo DNS necessário para estabelecer a ligação com o seu alojamento SquareSpace. Alguns terão de ser eliminados para evitar entrar em conflito com os registos DNS requeridos nesta configuração. Outros serão simplesmente modificados ou criados. Para uma melhor compreensão, utilizaremos o nome de domínio "**mydomain.ovh**" como exemplo. Substitua-o pelo seu nome de domínio durante a configuração.

### Configurar os registos DNS na sua conta OVHcloud

<!-- CP-STEPS-START:configure-dns-records -->
Clique nos separadores abaixo para visualizar sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o nome de domínio correspondente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> A tabela apresentada lista o conjunto dos registos DNS do nome de domínio selecionado.
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
>> **2 - Eliminação:** elimine todos os registos "A" existentes para o subdomínio "www". Se existirem mais de 4 registos "A" para o nome de domínio apenas, elimine os registos excedentários para conservar apenas 4. Para cada registo a eliminar, clique no botão `...`{.action} à direita da linha correspondente e depois em `Eliminar a entrada`{.action}.
>>
>> **3 - Modificação:** modifique cada registo "A" conservado para o nome de domínio apenas clicando no botão `...`{.action} e depois em `Alterar a entrada`{.action}. Substitua o destino por um dos 4 endereços IPv4 do SquareSpace (um endereço diferente por registo):
>>
>> - `198.185.159.144`
>> - `198.185.159.145`
>> - `198.49.23.144`
>> - `198.49.23.145`
>>
>> Clique em `Seguinte`{.action} e valide.
>>
>> **4 - Adição:** se existirem menos de 4 registos "A", crie os registos em falta. Clique em `Adicionar uma entrada`{.action} no canto superior direito, selecione o campo de apontamento `A`{.action}, deixe o campo **Subdomínio** vazio e introduza no campo **Destino** cada endereço IPv4 ainda não atribuído. Clique em `Seguinte`{.action} e valide.
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
>> **Eliminação dos registos TXT**
>>
>> **1 - Identificação:** filtre os registos DNS selecionando o tipo `TXT` no menu de filtros situado no canto superior direito da tabela.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Identifique os registos "TXT" existentes para o seu nome de domínio apenas (exemplo: `mydomain.ovh.`) e para o subdomínio "www" (exemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminação:** elimine todos os registos "TXT" identificados (nome de domínio apenas e subdomínio "www") para evitar um conflito com os novos registos DNS. Para cada registo, clique no botão `...`{.action} à direita da linha correspondente e depois em `Eliminar a entrada`{.action}.
>>
>> Se não existir nenhum registo "TXT", passe à etapa 5.
>>
> **Etapa 5**
>>
>> **Configuração dos registos CNAME**
>>
>> **1 - Identificação:** filtre os registos DNS selecionando o tipo `CNAME` no menu de filtros situado no canto superior direito da tabela.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Identifique os registos "CNAME" existentes para o subdomínio "www" (exemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminação:** se existirem vários registos "CNAME" para o subdomínio "www", elimine-os todos exceto um. Para cada registo a eliminar, clique no botão `...`{.action} à direita da linha correspondente e depois em `Eliminar a entrada`{.action}.
>>
>> **3 - Modificação:** se existir um registo "CNAME" para o subdomínio "www", clique no botão `...`{.action} e depois em `Alterar a entrada`{.action}. Substitua apenas o **Destino** por `ext-cust.squarespace.com.`. Clique em `Seguinte`{.action} e valide.
>>
>> Se não existir nenhum registo "CNAME" para o subdomínio "www", clique em `Adicionar uma entrada`{.action} no canto superior direito, selecione o campo de apontamento `CNAME`{.action}, introduza `www` no campo **Subdomínio** e `ext-cust.squarespace.com.` no campo **Destino**. Clique em `Seguinte`{.action} e valide.
>>
>> **4 - Adição:** crie um registo CNAME de verificação introduzindo o seu `código único obtido no SquareSpace` no campo **Subdomínio** e `verify.squarespace.com.` no campo **Destino**. Clique em `Seguinte`{.action} e valide.
<!-- CP-STEPS-END:configure-dns-records -->

A zona DNS está agora configurada para apontar para o seu alojamento SquareSpace.

### Ligar o seu nome de domínio ao SquareSpace

As operações seguintes devem ser realizadas a partir do espaço de gestão SquareSpace.

> [!primary]
>
> - Pode ligar o seu nome de domínio a um site SquareSpace de teste ou pago. Não pode ligá-lo a um site expirado.
> - Se tiver uma conta de e-mail associada ao seu nome de domínio, pode continuar a utilizá-la depois de o nome de domínio ser ligado ao SquareSpace. Antes de ligar o seu nome de domínio, recomendamos que consulte este [guia SquareSpace](https://support.squarespace.com/hc/pt/articles/217601877-Usando-um-e-mail-de-dom%C3%ADnio-personalizado-que-voc%C3%AA-j%C3%A1-possui-com-o-Squarespace).
> - Pode utilizar vários nomes de domínio personalizados para o seu website. Pode ligar ou registar tantos quantos desejar.
> - Não é possível ligar um nome de domínio personalizado ao SquareSpace se o nome de domínio incluir a palavra "squarespace" ou "sqsp".

Para começar, siga as etapas de ligação descritas na etapa 1 deste [guia SquareSpace](https://support.squarespace.com/hc/pt/articles/12880712406797-Como-conectar-um-dom%C3%ADnio-OVHcloud-ao-seu-site-do-Squarespace).

> [!warning]
>
> Se receber o alerta "This domain is already connected to another Squarespace site" (Este domínio já está ligado a outro site Squarespace), verifique os seus outros sites Squarespace para determinar a que site o nome de domínio está ligado. De seguida, desligue-o desse website.

Prossiga para a etapa 2 deste [guia SquareSpace](https://support.squarespace.com/hc/pt/articles/12880712406797-Como-conectar-um-dom%C3%ADnio-OVHcloud-ao-seu-site-do-Squarespace).

Se utiliza uma oferta de e-mail OVHcloud ou pretende subscrever uma das [nossas ofertas de e-mail](/links/web/emails), prepare a sua zona DNS em conformidade. Consulte o nosso guia sobre a "[Configuração de um registo MX](/pages/web_cloud/domains/dns_zone_mx)".

## Quer saber mais? <a name="go-further"></a>

[Modificar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Criar uma zona DNS OVHcloud para um nome de domínio](/pages/web_cloud/domains/dns_zone_create)

[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para alterar a gestão do seu nome de domínio para outra conta de cliente OVHcloud, siga o guia "[Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts)".

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
