---
title: "Alojamento web - Ativar um certificado SSL gratuito Let's Encrypt"
excerpt: "Saiba como ativar ou regenerar um certificado SSL gratuito Let's Encrypt no seu alojamento web"
updated: 2024-10-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

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

**Saiba como ativar ou regenerar um certificado SSL gratuito Let's Encrypt no seu alojamento web da OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Encomendar ou dispor de um [alojamento partilhado OVHcloud](/links/web/hosting) no qual já não está instalado nenhum certificado SSL.
- Encomendar ou dispor de um [nome de domínio](/links/web/domains) e dispor de direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.

## Instruções

### 1. Pré-atribuir o futuro certificado SSL Let's Encrypt ao(s) seu(s) domínio(s)/subdomínio(s) <a name="ssl-multisite"></a>

Ao contrário de outros certificados, o [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) pode ser ativado para vários domínios/subdomínios de uma só vez. Isto no limite de **99** domínios ou subdomínios por alojamento web.

Portanto, antes de instalar o certificado SSL Let's Encrypt, deverá preparar todos os nomes de domínios / subdomínios que irão beneficiar deste certificado SSL.

Para isso, efetue as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, clique no separador `Multisite`{.action}.

Aparecerá uma tabela com todos os domínios/subdomínios já declarados em multi-sites no seu alojamento web. A coluna "SSL" indica o estado de ativação do SSL nos domínios/subdomínios declarados em multi-sites.

![manage SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

Nesta coluna, por norma, podem ser apresentados três estados:

|Estado|Descrição|
|---|---| 
|Ativado|Um certificado SSL já foi ativado para esta entrada multisite. Se tal for o caso, [verifique se o certificado SSL é um certificado SSL Let's Encrypt](#check-ssl). Se sim, consulte primeiro o [caso particular](#regenerate-ssl) situado mais abaixo neste guia. Caso contrário, consulte o nosso guia "[Alojamento Web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)" se pretender eliminar o seu certificado SSL atual (gratuito ou pago), e depois substituí-lo por um certificado SSL Let's Encrypt.|
|A gerar / atualizar|Um certificado SSL foi ativado para esta entrada multisite, mas ainda não está tecnicamente ativo. Para isso, deverá [regenerar o certificado SSL Let's Encrypt](#regenerate-ssl) para que inclua os novos nomes de domínio/subdomínios declarados em multi-site e para os quais o estado `A gerar / atualizar` está presente.|
|Desativado|Não foi ativado nenhum certificado SSL para esta entrada multisite. Para o ativar, proceda do seguinte modo:|

> [!primary]
>
> Se ainda não tiver declarado um dos seus domínios/subdomínios no seu alojamento web, consulte os seguintes guias para resolver esta situação:
>
> - [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Ainda no separador `Multisite`{.action} e para pré-atribuir a opção SSL Let's Encrypt num domínio/subdomínio declarado em multi-site no seu alojamento web, efetue as seguintes ações:

1. Na tabela que contém todos os domínios/subdomínios já declarados em multi-sites no seu alojamento web, clique no botão `...`{.action} à direita da linha do nome de domínio/subdomínio em causa.
2. De seguida, clique em `Modificar o domínio`{.action}.
3. Na janela que se abrir, selecione a opção `SSL`{.action} e clique em `Seguinte`{.action}.
4. Na nova janela que aparece, encontrará um resumo da configuração do seu domínio/subdomínio. Clique em `Validar`{.action} para aplicar a alteração solicitada para esta entrada multisite.

Depois de validada a alteração, o estado da entrada multisite correspondente na coluna SSL passará de `Desativado` para `A gerar / atualizar` após alguns segundos. Se tiver outros domínios/subdomínios afetados nas entradas multisites do seu alojamento web, repita o processo as vezes que forem necessárias.

### 2. Ativar um certificado SSL Let's Encrypt <a name="enable-ssl"></a>

Antes de efetuar esta configuração, certifique-se de que a [etapa anterior](#ssl-multisite) foi efetuada corretamente. No separador `Multisite`{.action} do seu alojamento web, pelo menos um domínio/subdomínio deve ter a opção SSL com o estado `Ativado` ou `A gerar / atualizar` para instalar o certificado SSL Let's Encrypt.

> [!warning]
>
> **Antes de prosseguir**, verifique se **todos os domínios e/ou subdomínios** abrangidos pelo seu futuro certificado SSL Let's Encrypt:
>
> - apontam para o endereço IP do seu alojamento web;
> - são declarados em multi-site no seu alojamento web.
>
> Para mais informações, consulte os nossos manuais:
>
> - [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Para ativar o certificado SSL Let's Encrypt, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}.
6. Aceda à caixa chamada `Configuração`.
7. À direita da menção `Certificado SSL`, clique no botão `...`{.action} e, a seguir, em `Encomendar um certificado SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Na janela que surgir, selecione `Certificado gratuito (Let's Encrypt)`{.action} entre a lista das opções possíveis e, a seguir, clique em `Seguinte`{.action} para validar o pedido de ativação do SSL.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

A implementação do certificado SSL Let's Encrypt pode levar várias horas.

<a name="check-ssl"></a>

Para verificar se a instalação foi concluída, execute as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}.
6. Aceda à caixa chamada `Configuração`.

Se tudo estiver terminado, deverá encontrar, abaixo da menção `Certificado SSL`, um valor equivalente ao seguinte: `Sim - LETSENCRYPT - DV`.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

O seu certificado SSL Let's Encrypt já está instalado e ativo. Pode desde já utilizá-lo com o(s) seu(s) novo(s) website(s) passando, por exemplo, pelo(s) seu(s) novo(s) [site(s) web em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

### Caso particular: Regenerar o certificado SSL Let's Encrypt num alojamento web <a name="regenerate-ssl"></a>

Ao utilizar o seu alojamento web, poderá ser necessário adicionar posteriormente domínios/subdomínios em multi-site para os quais terá de ativar a opção SSL.

Embora já tenha ativado um certificado SSL Let's Encrypt para alguns dos seus nomes de domínio/subdomínios, pode sempre adicionar novos (no limite dos **99** nomes de domínio/subdomínios especificados anteriormente neste guia).

Para isso, efetue **por ordem** as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Pré-atribua o certificado SSL Let's Encrypt aos seus novos domínios/subdomínios conforme especificado na [primeira parte](#ssl-multisite) deste manual.
3. Na linha situada no topo da Área de Cliente, clique no separador `Web Cloud`{.action}.
4. Na coluna da esquerda, clique no menu pendente `Alojamentos`{.action}.
5. Selecione o alojamento web em causa.
6. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}.
7. Aceda à caixa chamada `Configuração`.
8. À direita da menção `Certificado SSL`, clique no botão `..`{.action} e, a seguir, em `Gerar / atualizar certificado SSL`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Leia as informações apresentadas na janela que aparece e clique no botão `Validar`{.action}. A seguir, aguarde até que o certificado SSL seja regenerado.

Esta etapa pode levar várias horas.

> [!warning]
>
> Let's Encrypt, a autoridade que fornece o certificado SSL, [limita a cinco o número de regenerações possíveis por semana](https://letsencrypt.org/docs/rate-limits/){.external}. Portanto, esteja atento às diferentes regenerações que possa realizar a curto prazo para não ficar temporariamente bloqueado.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

O seu certificado SSL Let's Encrypt já está regenerado e ativo. Pode desde já utilizá-lo com o(s) seu(s) novo(s) website(s) passando, por exemplo, pelo(s) seu(s) novo(s) [site(s) web em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Quer saber mais?

[Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Alojamento web - alterar o seu website para HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).