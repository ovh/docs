---
title: "Alojamento web - Nova gestão dos certificados SSL"
excerpt: "Saiba como gerir um certificado SSL no alojamento web da OVHcloud graças à nossa nova interface de gestão"
updated: 2025-10-01
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Os certificados Secure Socket Layer (SSL) permitem encriptar as trocas efetuadas a partir do seu website ou para o seu website. Isto evita que uma pessoa ou um robô malicioso venha "ouvir" claramente os pedidos enviados a partir do seu website.

A OVHcloud oferece vários tipos de certificados SSL nas nossas ofertas de [alojamento partilhado OVHcloud](/links/web/hosting). Consulte este manual para saber mais. Os certificados SSL são incontornáveis para a segurança do seu website.

Existem três tipos de certificados SSL:

- Domain Validation (DV).
- Organization validation (OV).
- Extended Validation (EV).

Os níveis de encriptação SSL são iguais entre os três tipos de certificado.

A principal diferença reside no nível de verificações que será realizado pela Autoridade de Certificação (AC) que emite o certificado SSL e atesta a sua autenticidade.

É indispensável dispor de um certificado SSL para que o website esteja acessível em HTTPS.

**Saiba como gerir um certificado SSL no alojamento web da OVHcloud graças à nossa nova interface de gestão.**

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Dispor de um [alojamento web da OVHcloud](/links/web/hosting).
- Ter registado, pelo menos, um [nome de domínio](/links/web/domains).

> [!warning]
>
> **Antes de continuar**, certifique-se de que cada **nome de domínio e/ou subdomínio** associado ao seu futuro certificado SSL:
>
> - Pointe para o endereço IP do seu alojamento web.
> - É declarado em multi-site no seu alojamento web.
>
> Em caso de dúvida, consulte os manuais abaixo:
>
> - [Partilhar o alojamento entre vários sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Lista dos endereços IP dos clusters e alojamentos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

## Instruções

### Aceder à gestão dos certificados SSL a partir do seu alojamento web

> [!primary]
>
> **Informações sobre a migração para a nova interface de gestão de certificados SSL:**
>
> O resto deste guia destina-se aos clientes cujos serviços de alojamento web já foram migrados para a nova interface de gestão dos certificados SSL.
> Para detetar se esta migração foi efetuada, aceda ao seu alojamento web na Área de Cliente OVHcloud e verifique a presença do separador `Certificados SSL`.
> Se o separador `Certificados SSL` estiver ausente, o seu serviço ainda não migrou para a nova interface de gestão. Neste caso, consulte diretamente [este manual](/pages/web_cloud/web_hosting/ssl_on_webhosting) para gerir o seu certificado SSL.
>
> Por razões técnicas, nem todos os serviços de alojamento web de todos os nossos clientes podem ser migrados de uma só vez. Esta migração é, por isso, repartida durante algumas semanas e é realizada de forma automática, sem qualquer incidência no funcionamento dos seus serviços de alojamento web, e sem qualquer intervenção ou ação necessária da sua parte.
>
> A prazo, todos os serviços de alojamento web funcionarão com a nova interface de gestão dos certificados SSL.

Para aceder à gestão dos certificados SSL a partir do seu alojamento web, clique nos separadores abaixo para exibir sucessivamente cada um dos **3** passos:

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

Nesta localização, poderá gerir integralmente os seus certificados SSL para todos os nomes de domínio e subdomínios associados ao seu alojamento web.

### Ativar um certificado SSL num alojamento web <a name="ssl-enable"></a>

A OVHcloud oferece 4 soluções para ativar ou instalar um certificado SSL num alojamento web.

**Clique no certificado SSL à sua escolha para ver as explicações.**

/// details | Ativar o certificado SSL gratuito Let's Encrypt (DV)

O certificado SSL gratuito Let's Encrypt (DV) pode incluir até **99** nomes de domínio e subdomínios declarados num alojamento web.

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

> [!success]
>
> Um certificado SSL Let's Encrypt é automaticamente gerado para cada nome de domínio e subdomínio recentemente declarado em multi-site no seu alojamento web. Para se certificar, verifique se o seu nome de domínio e/ou subdomínio aparece na tabela presente na parte inferior da página `Certificados SSL`{.action}.

///

/// details | Ativar o certificado SSL Sectigo pago (DV)

O certificado SSL pago Sectigo (DV) é válido para um único nome de domínio e o seu subdomínio em "www" (por exemplo: `domain.tld` e `www.domain.tld`) ou **apenas** um subdomínio (por exemplo: `sub.domain.tld`).

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

///

/// details | Ativar o certificado SSL pago Sectigo (EV)

O certificado SSL pago Sectigo (EV) é válido para um único nome de domínio e o seu subdomínio em "www" (por exemplo: `domain.tld` e `www.domain.tld`) ou **apenas** um subdomínio (por exemplo: `sub.domain.tld`).

> [!warning]
>
> O certificado SSL Sectigo pago (EV) tem condições de elegibilidade específicas:
>
> - Encomendar ou dispor de um [nome de domínio](/links/web/domains) e dispor dos direitos exclusivos sobre a sua utilização. O domínio não deve estar associado a um certificado SSL.
> - ser uma organização (empresa, agência governamental, etc.) registada num registo oficial.
> - Ter a autorização da sua organização para encomendar um certificado SSL Sectigo EV.
> - estar em condições de justificar com exatidão as informações e os dados relativos à sua organização.
>
> Para verificar se é elegível para a subscrição de um certificado SSL Sectigo EV, aceda a [este link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.

Clique nos separadores abaixo para exibir sucessivamente cada um dos **6** passos:

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
>> Na nova janela que se abrir, selecione o domínio ou subdomínio em causa através do menu pendente e clique em `Validar`{.action} para ser reencaminhado para a nota de encomenda do seu certificado SSL Sectigo EV.
>>
>> ![SSL Sectigo Seleção do domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Etapa 6**
>>
Selecione o **Certificado SSL Sectigo EV** uma vez chegado o túnel de encomenda e prossiga a encomenda.
>>
>> Insira com exatidão as informações solicitadas por **Sectigo** antes que lhe seja emitido o certificado SSL Sectigo EV. 
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Clique em `Continuer`{.action} depois de **todos os elementos** estarem corretamente inseridos.

> [!alert]
>
> Uma vez validada a encomenda, o pedido de certificado SSL Sectigo EV é enviado à autoridade de certificação **Sectigo**.
>
> Certifique-se imperativamente de que é elegível para a subscrição de um certificado SSL Sectigo EV **antes de pagar o certificado**.
>
> Com efeito, não será possível qualquer reembolso do SSL Sectigo EV, **mesmo que o processo de verificação junto do Sectigo não seja bem sucedido**.

///

/// details | Instalar um certificado SSL personalizado

Esta solução permite-lhe instalar o seu próprio certificado SSL para o seu nome de domínio, se nenhuma das 3 soluções precedentes corresponde às suas necessidades e se deseja utilizar um certificado SSL de que já dispõe.

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
>> Quando o conteúdo do separador aparecer, clique no botão `Importação do seu próprio certificado SSL`{.action}.
>>
>> ![SSL personalizado](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Aparecerá a seguinte janela com 3 formulários a preencher:
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Copiar conteúdo do seu certificado (apenas RSA)`{.action}: introduza o conteúdo do ficheiro **certificate.crt** emitido pelo seu fornecedor SSL, incluindo os termos `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (ou seus equivalentes). A encriptação RSA é a encriptação standard para os certificados SSL.
>> - `Copiar o conteúdo da sua chave privada (não encriptada)`{.action}: introduza o conteúdo do ficheiro **private.key** fornecido pelo seu fornecedor SSL, incluindo os termos `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----` (ou os seus equivalentes). Se *não encriptada* significa que a chave privada não necessita de estar protegida com uma palavra-passe ou frase. Caso contrário, a instalação do certificado falhará.
>> - `Copiar o conteúdo da sua cadeia de certificados`{.action}: introduza o conteúdo do ficheiro **ca_bundle.crt** emitido pelo seu fornecedor SSL, incluindo os termos `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` (ou seus equivalentes).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Depois de preencher os 3 formulários, clique em `Validar`{.action} para terminar a importação do certificado SSL personalizado para o seu alojamento web.

> [!success]
>
> Para encontrar os elementos a introduzir nos 3 campos, consulte apenas as etapas **1** e **2** do nosso guia "[Alojamento web - Instalar um certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom)".

///

### Desativar um certificado SSL num alojamento web <a name="delete-ssl"></a>

> [!warning]
>
> **Antes de prosseguir**, certifique-se de que a eliminação do certificado SSL não irá afetar a disponibilidade dos seus websites. Se isso acontecer, os seus utilizadores irão encontrar um erro de segurança ao tentar aceder ao seu website através de HTTPS.

Como esta verificação é inerente aos parâmetros do(s) seu(s) website(s), recomendamos que contacte um prestador de serviços especializado se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica.

Para eliminar o certificado SSL instalado no alojamento web, clique nos separadores abaixo para exibir sucessivamente cada um dos **5** passos:

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

Esta ficará efetiva dentro de algumas horas, no máximo.

> [!warning]
>
> A eliminação de um certificado SSL pago **Sectigo** (DV ou EV) é definitiva, mesmo que o certificado ainda não tenha expirado. Não poderá ser efetuado qualquer reembolso proporcional ao tempo restante. Se pretender reinstalar um certificado SSL **Sectigo** (DV ou EV), deverá obrigatoriamente realizar uma nova encomenda e pagar a integralidade do novo certificado SSL subscrito.

## Quer saber mais? <a name="go-further"></a>

[Alojamento web - Passar o seu website em HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Erros comuns associados à segurança do seu website com SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure)
 
Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).