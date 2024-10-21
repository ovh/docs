---
title: "Alojamento web - Ativar um certificado SSL Sectigo DV"
excerpt: "Saiba como ativar um certificado SSL Sectigo DV no seu alojamento Web OVHcloud"
updated: 2024-10-21
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir do seu website ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha « ouvir » claramente os pedidos emitidos a partir do seu website.

A OVHcloud oferece vários tipos de certificados SSL nas ofertas de [alojamento partilhado OVHcloud](/links/web/hosting). São apresentados no nosso guia "[Alojamento Web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Os certificados SSL são incontornáveis para a segurança do seu website.

Existem três tipos de certificados SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Os níveis de encriptação SSL são iguais entre os três tipos de certificado.

A principal diferença reside no nível de verificações que será realizado pela Autoridade de Certificação (AC) que emite o certificado SSL e atesta a sua autenticidade.

Para os alojamentos partilhados OVHcloud, a autoridade de certificação que emite os certificados SSL DV é [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Uma vez que a encomenda do certificado foi realizada e transmitida ao nosso fornecedor de certificados/autoridade de certificação Sectigo, **não é possível qualquer reembolso da encomenda**.
>

**Saiba como ativar um certificado SSL Sectigo DV no alojamento web da OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Encomendar ou dispor de um [alojamento partilhado OVHcloud](/links/web/hosting) no qual já não está instalado nenhum certificado SSL.
- Encomendar ou dispor de um [nome de domínio](/links/web/domains) e dispor de direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.

## Instruções

> [!warning]
>
> Os certificados SSL Sectigo DV propostos na OVHcloud só são válidos para um dos dois casos seguintes no seu alojamento web:
>
> - um único domínio + o seu subdomínio em "www" (exemplo: `domain.tld` e `www.domain.tld`);
> - um único subdomínio (exemplo: `sub.domain.tld`).
>
> Isto significa que se tiver outros domínios/subdomínios declarados em multi-site no seu alojamento web, estes não poderão beneficiar de um certificado SSL.
>
> Só é possível instalar um certificado SSL por alojamento web.
>
> Se necessitar de ativar um certificado SSL para vários domínios/subdomínios declarados no seu alojamento web, favoreça a instalação de um [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) ou instale o seu próprio [certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

**Antes de encomendar o certificado SSL Sectigo DV no seu alojamento web**, verifique se **o nome de domínio/subdomínio** relacionado com o seu certificado SSL:

- aponta para o endereço IP do seu alojamento web;
- está declarado em multi-site no seu alojamento web.

> [!primary]
>
> Se pretender subscrever a um certificado SSL Sectigo DV para um domínio (exemplo: `domain.tld`), verifique se o seu subdomínio em "www" (exemplo: `www.domain.tld`) aponta também para o endereço IP do seu alojamento web e está corretamente declarado em multi-site.
>
> Sim, se for necessário e se encomendar o certificado SSL Sectigo DV sem ter de se certificar, deverá realizar uma correção a posteriori. Deverá eliminar o certificado SSL Sectigo DV anteriormente subscrito **sem ser reembolsado** e, a seguir, encomendar um novo certificado SSL Sectigo DV. O objetivo é que o novo certificado SSL Sectigo DV englobe o seu domínio `domain.tld` e o seu subdomínio em "www" `www.domain.tld`.
>
> Lembrete: se subscrever a um certificado SSL Sectigo DV diretamente para um subdomínio (exemplo: `sub.domain.tld`), não é afetado por esta situação.

Verifique também o seguinte:

- A caixa `SSL` não deve ser selecionada durante a adição multisite do nome de domínio/subdomínio afetado pelo seu certificado SSL Sectigo DV.
- O estado `A gerar / atualizar` ou `Ativado` não deve estar presente para o nome de domínio/subdomínio afetado pelo seu certificado SSL Sectigo DV.

Se necessário, consulte os nossos manuais para saber como:

- [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
- [Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
- [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Encomendar o certificado SSL Sectigo DV

Para encomendar o certificado SSL Sectigo DV, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}.
6. Aceda à caixa chamada `Configuração`.
7. À direita da menção `Certificado SSL`, clique no botão `...`{.action} e, a seguir, em `Encomendar um certificado SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Na janela que surgir, selecione `Certificado pago`{.action} entre a lista das opções possíveis.

De seguida, selecione o domínio/subdomínio em causa na lista pendente apresentada e clique em `Seguinte`{.action}.

Na nova janela que se abrir, clique em `Validar`{.action} para ser reencaminhado para a nota de encomenda do seu certificado SSL Sectigo DV.

Continue a encomenda até que o pagamento seja efetuado para validar o pedido de criação do certificado SSL Sectigo DV para o seu domínio/subdomínio no seu alojamento web.

> [!alert]
>
> Após a encomenda validada, o pedido de certificado SSL Sectigo DV é enviado à autoridade de certificação Sectigo.
>
> Não é possível qualquer reembolso do SSL Sectigo DV.

A instalação do certificado SSL Sectigo DV pode levar até **24** horas.

### Verificar a ativação do certificado SSL Sectigo DV

Para verificar se a instalação foi concluída, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}.
6. Aceda à caixa chamada `Configuração`.

Se tudo estiver terminado, deverá encontrar, abaixo da menção `Certificado SSL`, um valor equivalente ao seguinte: `Sim - SECTIGO - DV`.

![SSL Sectigo DV certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-dv-enable.png){.thumbnail}

O seu certificado SSL Sectigo DV já está instalado e ativo. Pode desde já utilizá-lo com o seu website passando, por exemplo, pelo seu [website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Quer saber mais? <a name="go-further"></a>

[Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Alojamento web - alterar o seu website para HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).