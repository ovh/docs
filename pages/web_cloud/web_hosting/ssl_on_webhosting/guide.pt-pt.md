---
title: "Alojamento web - Gerir um certificado SSL"
excerpt: "Saiba como gerir um certificado SSL no alojamento web da OVHcloud"
updated: 2025-12-16
---

## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir do seu website ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha "ouvir" claramente os pedidos enviados a partir do seu website.

A OVHcloud oferece vários tipos de certificados SSL nas nossas ofertas de [alojamento partilhado OVHcloud](/links/web/hosting). Consulte este manual para saber mais. Os certificados SSL são incontornáveis para a segurança do seu website.

Existem três tipos de certificados SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Os níveis de encriptação SSL são iguais entre os três tipos de certificado.

A principal diferença reside no nível de verificações que será realizado pela Autoridade de Certificação (AC) que emite o certificado SSL e atesta a sua autenticidade.

Dispor de um certificado SSL para o seu website é incontornável para o utilizar em HTTPS.

**Saiba como gerir um certificado SSL no alojamento web da OVHcloud.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Dispor de um [alojamento web da OVHcloud](/links/web/hosting).
- Ter registado, pelo menos, um [nome de domínio](/links/web/domains).

## Instruções

> [!warning]
>
> **Antes de continuar**, verifique se **o nome ou os nomes de domínio e/ou subdomínios** relacionados com o seu ou os seus futuros certificados SSL:
>
> - aponta/apontam para o endereço IP do seu alojamento web.
> - está/estão registado(s) em um dos sites do seu alojamento web.
> - não dispõe/dispõem já de um certificado SSL ativo.
>
> Para se certificar disso, consulte os guias abaixo sempre que necessário:
>
> - [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Alojamento web - Lista dos endereços IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
> - [Alojamento web - Gerir um certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Desativar um certificado SSL num alojamento web**.

### Ativar um certificado SSL num alojamento web <a name="ssl-enable"></a>

A OVHcloud oferece 4 soluções para ativar/instalar um certificado SSL num alojamento web. Cada uma destas soluções encontra-se documentada.

Encontre aqui os 4 links para os nossos guias dedicados a estas 4 soluções:

- [Alojamento web - Ativar um certificado SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt): Certificado gratuito disponível nos nossos alojamentos web.
- [Alojamento web - Ativar um certificado SSL Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv): Certificado válido para um único nome de domínio + o seu subdomínio em « www » (por exemplo: `domain.tld` e `www.domain.tld`) ou *** apenas um subdomínio (por exemplo: `sub.domain.tld`).
- [Alojamento web - Ativar um certificado SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev): Certificado válido para um único nome de domínio + o seu subdomínio em « www » (por exemplo: `domain.tld` e `www.domain.tld`) ou **unicamente** um subdomínio (por exemplo: `sub.domain.tld`).
- [Alojamento web - Instalar um certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom): Se dispõe do seu próprio certificado SSL ou que nenhuma das 3 soluções precedentes corresponde às suas necessidades.

### Eliminar um certificado SSL num alojamento web <a name="delete-ssl"></a>

> [!warning]
>
> A eliminação de um certificado SSL pago **Sectigo** (DV ou EV) é definitiva, mesmo que o certificado ainda não tenha expirado. Não poderá ser efetuado qualquer reembolso proporcional ao tempo restante. Se pretender reinstalar um certificado SSL **Sectigo** (DV ou EV), deverá obrigatoriamente realizar uma nova encomenda e pagar a integralidade do novo certificado SSL subscrito.
>
> Além disso, se deseja desativar definitivamente um certificado SSL do seu alojamento web, certifique-se de que **antes de prosseguir** que a desativação definitiva do certificado SSL não tornará os seus websites inacessíveis. Se isso acontecer, os seus utilizadores irão encontrar um erro de segurança ao tentar aceder ao seu website em "HTTPS".
>
> Uma vez que esta verificação depende das definições do(s) website(s), recomendamos que contacte um [fornecedor de serviços especializado](/links/partner) se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica.

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
>> Na tabela que se abrir na parte inferior da nova página, clique no botão `⁝`{.action}, situado à direita da linha correspondente ao domínio em questão, e clique em `Desativar o certificado SSL`{.action}.
>>
>> ![Desativar SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Na janela que se abrir, confirme a desativação clicando em `Validar`{.action}.
>>
>> ![Eliminar SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

A desativação do certificado SSL ficará efetiva dentro de algumas horas, no máximo.

### Corrigir os erros frequentemente encontrados nos certificados SSL dos alojamentos web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Esta mensagem indica que já é proprietário de um certificado SSL. Por isso, não é necessário ativar um novo certificado SSL no alojamento web.

Se o certificado SSL instalado no alojamento web não for aquele que pretende utilizar, pode [desativar o seu certificado SSL](#delete-ssl) atual, e depois [ativar um novo certificado SSL](#ssl-enable) no alojamento web.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Existem três casos que podem explicar esta notificação.

- 1 : O nome de domínio associado ao seu website aponta para o endereço IP do CDN do seu alojamento web, sem nenhuma opção CDN ativa no seu alojamento web:

Para resolver esta situação, através da zona DNS ativa do seu domínio, atribua o endereço IP do alojamento web sem CDN ao seu domínio.
Para obter o endereço IP do alojamento web, consulte o guia "[Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar a zona DNS ativa do seu domínio, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 2 : O nome de domínio associado ao seu website não aponta para o endereço IP do seu alojamento web:

Para resolver esta situação, através da zona DNS ativa do seu domínio, atribua o endereço IP do alojamento web ao seu domínio.
Se ativou uma opção CDN no seu alojamento web, pode igualmente utilizar o endereço IP do alojamento web com CDN.
Para obter o endereço IP do alojamento web, consulte o guia "[Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar a zona DNS ativa do seu domínio, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

#### Encomendou o SSL Sectigo EV juntamente com o seu alojamento web, mas o certificado ainda não está ativo e o alojamento web não está a funcionar corretamente

Esta situação está ligada aos passos que deve realizar a fim de ativar o SSL EV no seu alojamento web.

Se necessário, consulte o guia "[Alojamento web - Ativar um certificado SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)" para resolver esta situação.

> [!primary]
>
> Se o certificado SSL EV não estiver totalmente ativo, a encomenda nunca será encerrada e nunca irá gerar uma fatura. Por este motivo, o serviço de alojamento web não funciona corretamente.

#### Após a expiração do Certificado SSL Sectigo (DV ou EV), encontrará o erro "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Este erro ocorre sempre que o Certificado SSL Sectigo (ativado diretamente a partir do alojamento web) expira e o endereço IP do alojamento web muda. Como tal, deve apontar o seu domínio para o endereço IP correto (registo do tipo A), diretamente a partir da zona DNS ativa do seu domínio.

Para obter o endereço IP do alojamento web, consulte o guia "[Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar a zona DNS ativa do seu domínio, consulte o guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

#### O certificado SSL está ativo no seu alojamento web, mas encontrará a mensagem "Your connection is not private" no seu website

Esta mensagem é apresentada nos seguintes casos:

- 1: A regra de reencaminhamento para o seu URL em "HTTPS" está mal configurada ou não existe no ficheiro ".htaccess":

Para corrigir isto, consulte o nosso tutorial "[Reescrever o URL de acesso ao meu site graças ao mod_rewrite através do ficheiro .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" ou recorra a um [fornecedor especializado](/links/partner) se encontrar dificuldades.

- 2 : Alguns elementos da página web não são corretamente reencaminhados para elementos encriptados em "HTTPS":

Para corrigir isto, deve certificar-se de que o conjunto do seu website está encriptado com o protocolo "HTTPS".
Se necessário, consulte o nosso tutorial "[Alojamento web - Passar o seu website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)" ou recorra a um [fornecedor especializado](/links/partner) se encontrar dificuldades.

> [!success]
>
> Os elementos da página web podem ser vistos diretamente a partir das informações SSL do browser, consultando os *detalhes do certificado*.

## Quer saber mais?

[Alojamento web - Passar o seu website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).