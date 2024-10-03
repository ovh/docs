---
title: Como ligar um domínio OVHcloud a um Google Site
excerpt: Prepare e configure a zona DNS do seu domínio OVHcloud para a ligar a um Google Site
updated: 2024-10-03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Se possui um nome de domínio na OVHcloud, deseja ligá-lo a um Google Site. Neste guia, encontrará as etapas de preparação e de configuração da sua zona DNS da OVHcloud para permitir a configuração do seu Google Site.

**Saiba como ligar o seu domínio OVHcloud a um Google Site**

> [!warning]
>
> - O suporte Google Site não tem acesso aos parâmetros do seu nome de domínio OVHcloud e não pode, por isso, aconselhá-lo sobre as informações que deverá fornecer.
>
> - A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.<br><br> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção [Quer saber mais](#gofurther)? deste guia.
>

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter um [nome de domínio](/links/web/domains) registado na OVHcloud.
- Dispor das [autorizações adequadas para gerir](/pages/account_and_service_management/account_information/managing_contacts) o nome de domínio a partir da sua [Área de Cliente OVHcloud](/links/manager).
- Ter um alojamento na GoDaddy.
- Dispor de um Google Site e ser o seu proprietário.

## Instruções

Antes de seguir as duas etapas deste manual, deve familiarizar-se com a configuração de uma zona DNS através do nosso manual "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> A sua zona DNS já se encontra potencialmente pré-configurada ou associada a um alojamento. Vamos ver como identificar cada registo DNS necessário para estabelecer a ligação com o seu Google Site. Alguns terão de ser eliminados para evitar entrar em conflito com os registos DNS requeridos nesta configuração. Outros serão simplesmente modificados ou criados. Para uma melhor compreensão, utilizaremos o domínio "**mydomain.ovh**" como exemplo. Substitua-o pelo seu domínio durante a configuração.

### 1. Configurar o seu Google Site

> [!warning]
>
> Apenas o proprietário de um Google Site pode ligá-lo a um nome de domínio. Se necessário, saiba como [alterar o proprietário do Google Site](https://support.google.com/sites/answer/97934).

Quando utilizar um Google Site com um domínio OVHcloud, prepare primeiro o seu alojamento seguindo as instruções da secção **Configurar um domínio personalizado** a partir de [**esta página do suporte Google**](https://support.google.com/sites/answer/9068867?hl=pt#zippy=).

### 2. Configurar os registos DNS na sua conta OVHcloud

Aceda à [Área de Cliente OVHcloud](/links/manager){.external}, secção `Web Cloud`{.action}. Clique em `Nomes de domínio`{.action} e escolha o domínio em causa. De seguida, clique no separador `Zona DNS`{.action}.

Aparecerá uma tabela com a lista de todos os registos DNS do nome de domínio selecionado.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Cada registo DNS pode ser alterado clicando no botão `...`{.action} à direita da linha da tabela em causa e, a seguir, clicando em `Modificar entrada`{.action}.

Siga as etapas em ordem nas seguintes guias:

> [!tabs]
> **Etapa 1**
>> **Registo A**<br><br>
>> Para identificar os registos "A" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione `A`.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Clique no botão `...`{.action} à direita da linha da tabela que corresponde ao seu nome de domínio apenas, sem subdomínio (exemplo: `mydomain.ovh.`), e depois clique em `Modificar entrada`{.action}.<br>
>> - Se estiver presente um registo para o subdomínio "www" (exemplo: `www.mydomain.ovh.`), elimine-o para que não entre em conflito com o registo CNAME que vai introduzir no etapa 4. Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu subdomínio em "www" e, a seguir, clique em `Eliminar entrada`{.action}.<br>
>> - Se não possui um registo "A" existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o "Campo de apontamento" `A`{.action}<br><br>
>> Crie 4 registos do tipo "A" sucessivamente para introduzir os 4 endereços IPv4 relativos ao Google Site.
>> Deixe o campo **Subdomínio** vazio e insira o primeiro endereço IPv4 do Google Site `216.239.32.21` no campo **Destino**.
>> Clique em `Seguinte`{.action} e valide o seu registo "A". Repita a operação para os outros três endereços IPv4 `216.239.34.21`, `216.239.36.21` e `216.239.38.21`, depois passe à etapa 2. Os valores destes endereços IP podem ser alterados. Verifique na documentação oficial [o valor dos registos A](https://support.google.com/a/answer/2579934?hl=pt&ref_topic=2721296&sjid=10373374977980680534-EU).
>>
> **Etapa 2**
>> **Registo AAAA**<br><br>
>> Para identificar os registos "AAAA" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione "AAAA".
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu nome de domínio apenas, sem subdomínio (exemplo: `mydomain.ovh.`), e depois clique em `Eliminar entrada`{.action}.<br>
>> - Se estiver presente um registo para o subdomínio "www" (exemplo: `www.mydomain.ovh.`), elimine-o também para que não entre em conflito com o registo CNAME que vai introduzir no etapa 4. Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu subdomínio em "www" e, a seguir, clique em `Eliminar entrada`{.action}.<br>
>> - Se não tiver um registo "AAAA", prossiga para o etapa 3.
>>
> **Etapa 3**
>> **Registo TXT**<br><br>
>> Para identificar os registos "TXT" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione "TXT`".
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Se existirem registos "TXT" para o domínio específico (exemplo: `mydomain.ovh.`) e para o seu subdomínio em "www" (exemplo: `www.mydomain.ovh.`), elimine-os para que não entrem em conflito com o registo CNAME que vai indicar no etapa 4. Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu subdomínio em "www" e, a seguir, clique em `Eliminar entrada`{.action}.<br>
>> - É necessário criar um registo do tipo "TXT". Clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o "Campo" apontador `TXT`{.action}.
>> Preencha os campos **Subdomínio** e **Destino** com as informações presentes na página "[Valores dos registos TXT](https://support.google.com/a/answer/2716802?hl=pt&ref_topic=2716886&sjid=3052810298579211755-EU)" da documentação oficial. Normalmente, o valor do campo **Subdomínio** está vazio, e o campo **Destino** é do tipo `google-site-verification=XXXXXXXXXXXX`.<br>
>> Clique em `Seguinte`{.action} para validar o seu registo "TXT" e passe à etapa 4.
>>
> **Etapa 4**
>> **Registo CNAME**<br><br>
>> Para identificar os registos "CNAME" existentes, clique no menu Filtros na parte superior da tabela de registos DNS e selecione "CNAME`".
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Clique no botão `...`{.action} à direita da linha da tabela correspondente ao seu subdomínio em "www" (exemplo: `www.mydomain.ovh.`) e depois clique em `Modificar entrada`{.action}.<br>
>> - Se não tiver um registo "CNAME" existente, clique no botão `Adicionar uma entrada`{.action} no canto superior direito do ecrã e selecione o "Campo de apontamento" CNAME`{.action}.
>>
>> Preencha o campo **Subdomínio** com o valor `www` e introduza `ghs.googlehosted.com.` no campo **Destino**. Uma vez que estes valores têm de ser alterados, verifique-os na página "[Valores dos registos CNAME](https://support.google.com/a/answer/112038?sjid=3052810298579211755-EU)" da documentação oficial<br>
>> Clique em `Seguinte`{.action} para validar o seu registo "CNAME".

A zona DNS está configurada para fazer a ligação a um Google Site.

> [!primary]
>
> A verificação do seu domínio pode levar até 48 horas.

Se utiliza uma oferta de e-mail da OVHcloud ou pretende subscrever uma das [nossas ofertas de e-mail](/links/web/emails), deverá também preparar a sua zona DNS em conformidade. Consulte o nosso manual sobre a [configuração de um registo MX](/pages/web_cloud/domains/dns_zone_mx).

## Quer saber mais? <a name="go-further"></a>

[Modificar os servidores DNS de um domínio OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Criar uma zona DNS da OVHcloud para um domínio](/pages/web_cloud/domains/dns_zone_create)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para alterar a gestão do seu domínio para outra conta de cliente OVHcloud, siga o guia "[Gerir os contactos dos seus serviços](/pages/account_and_service_management/account_information/managing_contacts)".

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).