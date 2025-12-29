---
title: "Alojamento web - Ativar um certificado SSL gratuito Let's Encrypt"
excerpt: "Saiba como ativar um certificado SSL gratuito Let's Encrypt no seu alojamento web"
updated: 2025-12-16
---

## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha "ouvir" claramente os pedidos enviados ou enviados com o seu website.

A OVHcloud propõe vários tipos de certificados SSL nas nossas ofertas de [alojamento partilhado OVHcloud](/links/web/hosting). Estes são apresentados no nosso guia "[Gerir um certificado SSL no seu alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Os certificados SSL são incontornáveis para a segurança do seu website.

Existem três tipos de certificados SSL:

- Domain Validation (DV)
- Organização de validação (OV)
- Extended Validação (EV)

Os níveis de encriptação SSL são idênticos entre estes três tipos de certificados.

A principal diferença reside no nível de controlos que será realizado pela Autoridade de Certificação (AC) que emite o certificado SSL e certifica a sua autenticidade.

A Let's Encrypt é uma autoridade de certificação gratuita, automatizada, aberta e sem fins lucrativos. Encontre mais informações em <https://letsencrypt.org/pt/about/>.

**Saiba como ativar um certificado SSL gratuito Let's Encrypt no seu alojamento web da OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Encomendar ou dispor de um [alojamento partilhado OVHcloud](/links/web/hosting) .
- Encomendar ou dispor de um [nome de domínio](/links/web/domains) e dispor de direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.

> [!primary]
>
> A partir de **06/08/2025**, o certificado SSL Let's Encrypt é automaticamente ativado por predefinição para:
>
> - todos os novos domínios/subdomínios associados a um alojamento web.
> - todas as novas subscrições de um domínio com um novo alojamento web.
>
> O objetivo é poupar tempo na configuração dos serviços. Poderá desativar o certificado SSL Let's Encrypt a partir da sua [Área de Cliente OVHcloud](/links/manager) se pretender instalar outro certificado SSL (Sectigo DV, Sectigo EV ou um certificado SSL personalizado).
> Encontre mais informações no nosso guia "[Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)", parte **Desativar um certificado SSL num alojamento web**.

## Instruções

> [!warning]
>
> **Antes de prosseguir**, certifique-se de que **cada domínio e/ou subdomínio** relacionado com um futuro certificado SSL Let's Encrypt:
>
> - aponta para o endereço IP do seu alojamento web.
> - está declarado num dos sites web da sua alojamento web.
> - ainda não possui um certificado SSL ativo.
>
Para confirmar, consulte os guias abaixo sempre que necessário:
>
> - [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
> - [Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Desativar um certificado SSL num alojamento web**.

### Ativar o certificado SSL Let's Encrypt

Clique nos separadores abaixo para exibir sucessivamente cada um dos **4** passos:

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
>> Quando o conteúdo do separador aparecer, selecione o nome de domínio ou o subdomínio para o qual deseja ativar o certificado SSL gratuito Let's Encrypt (DV), na menção `Ativar o certificado SSL`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Clique, então, no botão `Ativar o certificado SSL Let's Encrypt`{.action}.

A implementação do certificado SSL Let's Encrypt pode levar várias horas.

### Verificar a ativação do certificado SSL gratuito Let's Encrypt (DV)

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
>> Quando o conteúdo do separador aparecer, verifique se cada domínio e/ou subdomínio em causa figura na tabela com o tipo de certificado SSL `Let's Encrypt`.
>>
>> ![Quadro de gestão dos certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

O seu certificado SSL Let's Encrypt já está instalado e ativo. Pode desde já utilizá-lo com o(s) seu(s) novo(s) website(s) passando, por exemplo, pelo(s) seu(s) novo(s) [site(s) web em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Quer saber mais?

[Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Alojamento web - alterar o seu website para HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).