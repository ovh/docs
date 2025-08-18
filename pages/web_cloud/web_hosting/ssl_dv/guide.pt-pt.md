---
title: "Alojamento web - Ativar um certificado SSL Sectigo DV"
excerpt: "Saiba como ativar um certificado SSL Sectigo DV no seu alojamento Web OVHcloud"
updated: 2025-06-16
---

## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir do seu website ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha « ouvir » claramente os pedidos emitidos a partir do seu website.

A OVHcloud oferece vários tipos de certificados SSL nas ofertas de [alojamento partilhado OVHcloud](/links/web/hosting). São apresentados no nosso guia "[Alojamento Web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Os certificados SSL são incontornáveis para a segurança do seu website.

Existem três tipos de certificados SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Os níveis de encriptação SSL são iguais entre os três tipos de certificado.

A principal diferença reside no nível de verificações que será realizado pela Autoridade de Certificação (AC) que emite o certificado SSL e atesta a sua autenticidade.

Para os alojamentos partilhados OVHcloud, a autoridade de certificação que emite os certificados SSL DV é [Sectigo](https://sectigostore.com).

> [!warning]
>
> Uma vez que a encomenda do certificado foi realizada e transmitida ao nosso fornecedor de certificados/autoridade de certificação Sectigo, **não é possível qualquer reembolso da encomenda**.
>

**Saiba como ativar um certificado SSL Sectigo DV no alojamento web da OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Encomendar ou dispor de um [alojamento partilhado OVHcloud](/links/web/hosting).
- Encomendar ou dispor de um [nome de domínio](/links/web/domains) e dispor de direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.

## Instruções

> [!warning]
>
> Os certificados SSL Sectigo DV propostos na OVHcloud só são válidos para um dos dois casos seguintes no seu alojamento web:
>
> - Um único domínio + o seu subdomínio em "www" (exemplo: `domain.tld` e `www.domain.tld`).
> - Um único subdomínio (exemplo: `sub.domain.tld`).
>
> Se o alojamento web declarar outros domínios ou subdomínios e pretender igualmente atribuir-lhes um certificado SSL, pode executar um dos seguintes procedimentos:
>
> - [Ativar um certificado SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) (se já não for o caso por predefinição).
> - Ativar um ou vários outros certificados SSL pagos ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) ou [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Instalar o seu próprio certificado SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Antes de encomendar o certificado SSL Sectigo DV no seu alojamento web**, verifique se **o nome de domínio/subdomínio** relacionado com o seu certificado SSL:

- aponta para o endereço IP do seu alojamento web.
- está declarado em multi-site no seu alojamento web.
- ainda não possui um certificado SSL ativo.

> [!primary]
>
> Se pretender subscrever um certificado SSL Sectigo DV para um domínio (por exemplo: `domain.tld`), verifique se o seu subdomínio em « www » (por exemplo: `www.domain.tld`) aponta também para o endereço IP do seu alojamento web e é corretamente declarado em multi-site.
>
> Sim, se for necessário e se encomendar o certificado SSL Sectigo DV sem ter de se certificar, deverá realizar uma correção a posteriori. Deverá eliminar o certificado SSL Sectigo DV anteriormente subscrito **sem ser reembolsado** e, a seguir, encomendar um novo certificado SSL Sectigo DV. O objetivo é que o novo certificado SSL Sectigo DV englobe o seu domínio `domain.tld` e o seu subdomínio em "www" `www.domain.tld`.
>
> Lembrete: se subscrever a um certificado SSL Sectigo DV diretamente para um subdomínio (exemplo: `sub.domain.tld`), não é afetado por esta situação.

Para confirmar, consulte os guias abaixo sempre que necessário:

- [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Desativar um certificado SSL num alojamento web**.

### Encomendar o certificado SSL Sectigo DV

Clique nos separadores abaixo para exibir sucessivamente cada um dos **5** passos:

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
>> Na página que se abrir, clique no separador `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Quando o conteúdo do separador aparecer, clique no botão `Encomendar um certificado SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Na nova janela que se abrir, selecione o domínio ou subdomínio em causa através do menu pendente e clique em `Validar`{.action} para ser reencaminhado para a nota de encomenda do seu certificado SSL Sectigo DV.
>>
>> ![SSL Sectigo Seleção do domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Continue a encomenda até o pagamento para validar o pedido de criação do certificado SSL Sectigo DV para o seu domínio e/ou subdomínio no seu alojamento web.

> [!alert]
>
> Após a encomenda validada, o pedido de certificado SSL Sectigo DV é enviado à autoridade de certificação Sectigo.
>
> Não é possível qualquer reembolso do SSL Sectigo DV.

A instalação do certificado SSL Sectigo DV pode levar até **24** horas.

### Verificar a ativação do certificado SSL Sectigo DV

Para verificar se a instalação está completa, clique nos separadores abaixo para visualizar cada um dos **4** passos:

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
>> Na página que se abrir, clique no separador `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Quando o conteúdo do separador aparecer, verifique se cada domínio e/ou subdomínio em causa aparece na tabela com o tipo de certificado SSL `Sectigo`.
>>
>> ![Quadro de gestão dos certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

O seu certificado SSL Sectigo DV já está instalado e ativo. Pode desde já utilizá-lo com o seu website passando, por exemplo, pelo seu [website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Quer saber mais? <a name="go-further"></a>

[Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Alojamento web - alterar o seu website para HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).