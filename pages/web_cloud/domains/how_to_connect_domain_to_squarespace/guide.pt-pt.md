---
title: "Como ligar um domínio OVHcloud a um alojamento SquareSpace"
excerpt: "Prepare e configure a zona DNS do seu domínio OVHcloud para a ligar a um alojamento SquareSpace"
updated: 2024-05-15
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Tem um nome de domínio na OVHcloud e deseja ligá-lo a um alojamento SquareSpace. Neste guia, encontrará as etapas de preparação e de configuração da sua zona DNS da OVHcloud para permitir a configuração do seu alojamento SquareSpace.

**Saiba como conectar o seu domínio OVHcloud a um alojamento SquareSpace**

> [!warning]
>
> - O suporte SquareSpace não tem acesso aos parâmetros do seu domínio OVHcloud e, por isso, não pode aconselhá-lo sobre as informações que deve fornecer.
>
> - A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.<br><br> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção [Quer saber mais?](#go-further) deste guia.
>

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}.
- Ter um [nome de domínio](/links/web/domains){.external} registado na OVHcloud.
- Dispor das [autorizações adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio a partir da sua [Área de Cliente OVHcloud](/links/manager){.external}.
- Ter um alojamento na SquareSpace.
- Ter acesso à gestão deste alojamento na SquareSpace.

## Instruções

Antes de seguir as duas etapas deste manual, deve familiarizar-se com a configuração de uma zona DNS através do nosso manual "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> A sua zona DNS já se encontra potencialmente pré-configurada ou associada a um alojamento. Vamos ver como identificar cada registo DNS necessário para estabelecer ligação com o seu alojamento SquareSpace. Alguns terão de ser eliminados para evitar entrar em conflito com os registos DNS requeridos nesta configuração. Outros serão simplesmente modificados ou criados. Para uma melhor compreensão, utilizaremos o domínio "**mydomain.ovh**" como exemplo. Substitua-o pelo seu domínio durante a configuração.

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
>> Deverá criar 4 registos do tipo "A" sucessivamente a fim de introduzir os 4 endereços IPv4 relativos ao SquareSpace.
>> Deixe o campo **Subdomínio** vazio e insira o primeiro endereço IPv4 do SquareSpace `198.185.159.144` no campo **Destino**.
>> Clique em `Seguinte`{.action}, valide o seu registo "A", repita a operação para os outros 3 endereços IPv4 `198.185.159.145`; `198.49.23.144`; `198.49.23.145` e passe à etapa 2.
> **Etapa 2**
>> **Registo AAAA**<br><br>
>>  Para identificar os registos "AAAA", clique no menu Filtros na parte superior da tabela de registos DNS e selecione `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Clique no botão `...`{.action} à direita da linha da tabela que corresponde ao seu nome de domínio apenas, sem subdomínio (exemplo: `mydomain.ovh.`), e depois clique em `Eliminar entrada`{.action}.<br>
>> - Se estiver presente um registo para o subdomínio "www" (exemplo: `www.mydomain.ovh.`), elimine-o também para que não entre em conflito com o registo CNAME que vai introduzir no passo 4. Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu nome de domínio com o subdomínio "www" e depois clique em `Eliminar entrada`{.action}.<br>
>> - Se não tiver um registo "AAAA", prossiga para o passo 3.
> **Etapa 3**
>> **Registo TXT**<br><br>
>> Para identificar os registos "TXT" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `TXT`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}<br>
>> - Se existirem registos "TXT" para o nome de domínio específico (exemplo: `mydomain.ovh.`) e para o seu subdomínio em "www" (exemplo: `www.mydomain.ovh.`), deverá eliminá-los para que não entrem em conflito com o registo CNAME que irá introduzir no passo 4. Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu nome de domínio apenas com o subdomínio "www" e depois clique em `Eliminar entrada`{.action}.<br>
> **Etapa 4**
>> **Registo CNAME**<br><br>
>> Para identificar os registos "CNAME" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>> - Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu subdomínio em "www" (exemplo: `mydomain.ovh.`) e depois clique em `Modificar entrada`{.action}.<br>
>> - Se não tiver um registo "CNAME" existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o "Campo de apontamento" CNAME`{.action}.
>> Preencha o campo **Subdomínio** com o valor `www` e introduza `verify.squarespace.com.` no campo **Alvo**.<br>
>> ![cname-entry](images/add-an-entry-to-the-dns-zone-cname-squarespace.png){.thumbnail}
>> Clique em `Seguinte`{.action} e valide o seu registo "CNAME".
>> Adicione o segundo registo CNAME introduzindo `ext-cust.squarespace.com.` no campo **Alvo**.<br>

A zona DNS está configurada para fazer a ligação a um alojamento SquareSpace.

### Ligue o seu domínio ao SquareSpace

As manipulações para esta etapa devem ser realizadas a partir da Área de Gestão do SquareSpace.

> [!primary]
>
> - Pode ligar o seu domínio a um site SquareSpace de teste ou pago. Não pode aceder a um site expirado.
> - Se tiver uma conta de e-mail associada ao seu domínio, pode continuar a utilizá-la depois de o domínio se ligar à SquareSpace. Antes de iniciar sessão, recomendamos que consulte este [manual do SquareSpace](https://support.squarespace.com/hc/pt/articles/217601877-Usando-um-e-mail-de-dom%C3%ADnio-personalizado-que-voc%C3%AA-j%C3%A1-possui-com-o-Squarespace){.external}.
> - Pode utilizar vários domínios personalizados para o seu website. Pode ligar ou guardar tantos quantos quiser.
> - Não é possível conectar um nome de domínio personalizado ao SquareSpace se o nome de domínio incluir a palavra "squarespace" ou "sqsp".

Para começar, siga os passos de ligação descritos no passo 1 deste [guia SquareSpace](https://support.squarespace.com/hc/pt/articles/12880712406797-Como-conectar-um-dom%C3%ADnio-OVHcloud-ao-seu-site-do-Squarespace){.external}.

> [!warning]
>
> Se receber o alerta "This domain is already connected to another Squarespace site" (Este domínio já está ligado a outro site do Squarespace), verifique os outros sites do Squarespace para determinar o site ao qual o domínio está ligado. De seguida, desligue-o deste website.

Para continuar o processo, prossiga na etapa 2 deste [guia SquareSpace](https://support.squarespace.com/hc/pt/articles/12880712406797-Como-conectar-um-dom%C3%ADnio-OVHcloud-ao-seu-site-do-Squarespace){.external}.

Se utiliza uma oferta de e-mail OVHcloud ou pretende subscrever uma das [nossas ofertas de e-mail](/links/web/emails), prepare a sua zona DNS em conformidade. Consulte o nosso guia sobre a "[Configuração de um registo MX](/pages/web_cloud/domains/dns_zone_mx)".

## Quer saber mais? <a name="go-further"></a>

[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para alterar a gestão do seu domínio para outra conta de cliente OVHcloud, siga o guia "[Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts)".
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).