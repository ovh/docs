---
title: "Alojamento web - Ativar o alojamento gratuito 100M"
excerpt: "Saiba como ativar o alojamento gratuito 100M"
updated: 2024-12-06
---

## Objetivo

Com o [Alojamento gratuito 100M](/links/web/domains-free-hosting), a OVHcloud oferece-lhe um alojamento Web de 100MB e uma conta de e-mail com 5 GB de armazenamento.
Este guia explica como pode ativar o alojamento gratuito 100M no seu [domínio](/links/web/domains).

> [!warning]
>
> Este alojamento gratuito de 100MB é adequado para uma simples página Web de apresentação, e **não inclui uma base de dados**.
> Também é necessário que não precise de vários endereços de e-mail do tipo "MX plan". 
> Se pretender implementar um website com várias páginas e que requer uma base de dados, como um CMS (WordPress, Joomla!, PrestaShop, Drupal, etc.), sugerimos que encomende diretamente uma das [nossas ofertas de alojamento Web](/links/web/hosting) a partir do nosso website ou do seu [Área de Cliente OVHcloud](/links/manager).
>

**Saiba como ativar o Alojamento gratuito 100M**

## Requisitos

- Dispor de um [nome de domínio](/links/web/domains) no seu [Área de Cliente OVHcloud](/links/manager), desassociado de qualquer alojamento Web e sem nenhum [MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) associado.
- Ter acesso ao seu [Área de Cliente OVHcloud](/links/manager).

> [!primary]
>
> O alojamento gratuito 100M é **unicamente** disponível para os nossos clientes na Europa.

## Instruções

Para ativar o alojamento gratuito 100M, clique nos separadores abaixo para visualizar cada um dos **4** passos.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à [Área de Cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action}.
>>
>> ![enable 100m](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Clique no menu pendente `Nomes de domínios`{.action} e escolha o domínio em causa.
>>
>> ![enable 100m](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 3**
>>
>> No menu **Informações gerais**, encontrará **Alojamento web e e-mail gratuito**. À direita, clique no botão `...`{.action} e, a seguir, em `Ativar`{.action}.
>>
>> ![enable 100m](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/enable-100m.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparecerá a janela de ativação. A secção **1** faz menção ao serviço e ao seu custo. Clique em `Seguinte`{.action}. Na secção **2**, escolha as alterações a fazer à sua zona DNS:
>>
>> ![activate100m](/pages/assets/screens/control_panel/product-selection/web-cloud/order/order-100m-step-2.png){.thumbnail}
>>
>> | Escolha                                       	| Descrição                                                                                                               								|
>> |--------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
>> | Entrada DNS A                         	| O domínio ficará associado ao endereço IP do alojamento gratuito 100M.                                               								|
>> | Entrada DNS MX 	| Os servidores de e-mail (`mx1.mail.ovh.net`, `mx2.mail.ovh.net`, `mx3.mail.ovh.net`, etc.) da OVHcloud serão aplicados no domínio. 	|
>>
>> > [!warning]
>> >
>> > Se assinalar uma ou ambas as casas `Entrada DNS A` e `Entrada DNS MX`, ou ambas, isto irá eliminar a configuração inicialmente configurada na zona DNS do seu domínio.
>> > Escolha as duas caixas para configurar automaticamente o seu nome de domínio com o alojamento gratuito 100M e o serviço de e-mail incluído.
>> >
>> > Se a zona DNS não for gerida na [Área de Cliente OVHcloud](/links/manager), deverá efetuar as modificações manualmente na sua zona DNS externa.
>> >
>> > Para mais informações, consulte o nosso guia sobre [a edição de uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>> >
>>
>> A secção **3** recorda-lhe o preço da oferta. 
>>
>> Na secção **4**, deverá ler os contratos e validar a encomenda.

> [!primary]
>
> Se o seu projeto for migrado rapidamente para um alojamento que disponha de uma base de dados, de um espaço de armazenamento maior ou de mais endereços de e-mail, poderá migrar diretamente e unicamente do Alojamento gratuito 100M para uma oferta de alojamento **Perso** a partir do seu [Área de Cliente OVHcloud](/links/manager).
>
> Migração para a oferta **Pro** ou **Performance** necessita de passar previamente da oferta alojamento gratuito 100M à oferta **Perso**.
>
> Também pode optar por eliminar a oferta gratuita tendo o cuidado de recuperar previamente os seus dados de alojamento e o conteúdo do seu endereço de e-mail.
>
> Para mais informações, consulte as nossas [ofertas de alojamento](/links/web/hosting).

Depois de validar a encomenda, receberá um e-mail com as informações de [ligação FTP](/pages/web_cloud/web_hosting/ftp_connection) ao seu **alojamento gratuito 100M**.

Consulte o guia de [criação de uma conta E-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation) para beneficiar do endereço de e-mail incluído com o seu **alojamento gratuito 100M**.

## Quer saber mais?

[Aceder ao espaço de armazenamento do alojamento web](/pages/web_cloud/web_hosting/ftp_connection)

[Criar um endereço de e-mail com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)

[Gerir um certificado SSL num alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).