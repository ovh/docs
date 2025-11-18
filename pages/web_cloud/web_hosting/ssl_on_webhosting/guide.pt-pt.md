---
title: "Alojamento web - Gerir um certificado SSL"
excerpt: "Saiba como gerir um certificado SSL no alojamento web da OVHcloud"
updated: 2025-06-16
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
> **Antes de continuar**, verifique se **o(s) domínio(s) e/ou subdomínio(s)** em causa no seu futuro certificado SSL:
>
> - apontado(a) para o endereço IP do seu alojamento web;
> - está(ão) declarado(s) em multi-site no seu alojamento web.
>
> Para mais informações, consulte os nossos manuais:
>
> - [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ;
> - [Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) ;
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Ativar um certificado SSL num alojamento web <a name="ssl-enable"></a>

A OVHcloud oferece 4 soluções para ativar/instalar um certificado SSL num alojamento web. Cada uma destas soluções encontra-se documentada.

Encontre aqui os 4 links para os nossos guias dedicados a estas 4 soluções:

- [Ativar o certificado SSL gratuito Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt): certificado que pode incluir até **99** nomes de domínios/subdomínios declarados num alojamento web.
- [Ativar o certificado SSL pago Sectigo (DV)](/pages/web_cloud/web_hosting/ssl_dv): certificado válido para um único nome de domínio + o seu subdomínio em "www" (exemplo: `domain.tld` e `www.domain.tld`) ou **unicamente** um subdomínio (exemplo: `sub.domain.tld`).
- [Ativar o certificado SSL pago Sectigo (EV)](/pages/web_cloud/web_hosting/ssl_ev): certificado válido para um único nome de domínio + o seu subdomínio em "www" (exemplo: `domain.tld` e `www.domain.tld`) ou **unicamente** um subdomínio (exemplo: `sub.domain.tld`).
- [Instalar um certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom): se dispõe do seu próprio certificado SSL ou que nenhuma das 3 soluções precedentes corresponde às suas necessidades.

> [!primary]
>
> Só é possível instalar um certificado SSL por alojamento web (entre as 4 soluções supracitadas).
>
> Se necessitar de ativar um certificado SSL para vários domínios/subdomínios declarados no seu alojamento web, favoreça a instalação de um [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) ou instale o seu próprio [certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

### Eliminar um certificado SSL num alojamento web <a name="delete-ssl"></a>

> [!warning]
>
> Se deseja eliminar um certificado SSL do alojamento web e **antes de prosseguir**, certifique-se de que a eliminação do certificado SSL não irá afetar a disponibilidade dos seus websites. Se isso acontecer, os seus utilizadores irão encontrar um erro de segurança ao tentar aceder ao seu website em "HTTPS".

Como esta verificação é inerente aos parâmetros do(s) seu(s) website(s), recomendamos que contacte um prestador de serviços especializado se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica.

> [!primary]
>
> **Informações sobre a migração para a nova interface de gestão de certificados SSL:**
>
> O resto deste guia destina-se aos clientes cujos serviços de alojamento web ainda não migraram para a nova interface de gestão dos certificados SSL.
> Para detetar se esta migração foi efetuada, aceda ao seu alojamento web na Área de Cliente OVHcloud e verifique a presença do separador `Certificados SSL`.
> Se estiver presente o separador `Certificados SSL`, o seu serviço já migrou para a nova interface de gestão. Neste caso, consulte diretamente [este manual](/pages/web_cloud/web_hosting/ssl_management) para gerir o seu certificado SSL.
>
> Por razões técnicas, nem todos os serviços de alojamento web de todos os nossos clientes podem ser migrados de uma só vez. Esta migração é, por isso, repartida durante algumas semanas e é realizada de forma automática, sem qualquer incidência no funcionamento dos seus serviços de alojamento web, e sem qualquer intervenção ou ação necessária da sua parte.
>
> A prazo, todos os serviços de alojamento web funcionarão com a nova interface de gestão dos certificados SSL.

Para eliminar o certificado SSL instalado no alojamento web, efetue as seguintes ações:

1. Aceda à [Área de Cliente OVHcloud](/links/manager).
2. Clique no separador `Web Cloud`{.action}.
3. Na coluna da esquerda, clique no menu `Alojamentos`{.action}.
4. Selecione o alojamento web em causa.
5. Na página que vai aparecer, permaneça no separador `Informações gerais`{.action}.
6. Aceda à caixa chamada `Configuração`.
7. À direita da menção `Certificado SSL`, clique no botão `...`{.action} e, a seguir, em `Eliminar o certificado SSL`{.action}.
8. Na janela que se abrir, clique em `Validar`{.action} para confirmar a eliminação do certificado SSL.

![Delete SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

Esta ficará efetiva dentro de algumas horas, no máximo.

> [!warning]
>
> A eliminação de um certificado SSL pago **Sectigo** (DV ou EV) é definitiva, mesmo que o certificado ainda não tenha expirado. Não poderá ser efetuado qualquer reembolso proporcional ao tempo restante. Se pretender reinstalar um certificado SSL **Sectigo** (DV ou EV), deverá obrigatoriamente realizar uma nova encomenda e pagar a integralidade do novo certificado SSL subscrito.
>

### Corrigir os erros frequentemente encontrados nos certificados SSL dos alojamentos web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Esta mensagem indica que já é proprietário de um certificado SSL. Por isso, não é necessário ativar um novo certificado SSL no alojamento web.

- 1: Se o certificado SSL instalado no seu alojamento web for um certificado SSL gratuito Let's Encrypt, consulte o nosso manual sobre o certificado SSL [Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt) para prosseguir as suas ações.

- 2 : Se o certificado SSL instalado no alojamento web não for o certificado que pretende utilizar, pode [eliminar o seu certificado SSL](#delete-ssl) atual, e depois [ativar um novo certificado SSL](#ssl-enable) no alojamento web.

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

- 3 : Nenhum dos nomes de domínios presentes no separador "multi-site" dispõe de uma opção SSL "ativa" :

Para resolver a situação, ative o certificado SSL para o(s) nome(s) de domínio. Se necessário, consulte a secção "[Ativar um certificado SSL](#ssl-enable)" deste manual para continuar as suas ações.

#### Encomendou o SSL Sectigo EV juntamente com o seu alojamento web, mas o certificado ainda não está ativo e o alojamento web não está a funcionar corretamente

Esta situação está ligada aos passos que deve realizar a fim de ativar o SSL EV no seu alojamento web.

Se necessário, consulte o guia "[Alojamento web - Ativar um certificado SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)" para resolver esta situação.

> [!primary]
>
> Se o certificado SSL EV não estiver totalmente ativo, a encomenda nunca será encerrada e nunca irá gerar uma fatura. Por este motivo, o serviço de alojamento web não funciona corretamente.
>

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
>

## Quer saber mais?

[Alojamento web - Passar o seu website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).