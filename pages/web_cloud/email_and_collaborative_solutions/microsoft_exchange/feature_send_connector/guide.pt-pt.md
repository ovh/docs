---
title: Configurar um conector de envio na sua plataforma Private ou Trusted Exchange
excerpt: Saiba como adicionar um conector de envio SMTP à sua plataforma Exchange OVHcloud
updated: 2023-11-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objetivo

Adicionar um conector de envio SMTP à sua plataforma Exchange permite, para um ou vários endereços de e-mail Exchange, enviar e-mails passando por um servidor de envio externo à sua plataforma Exchange. Por exemplo, pode ser utilizado como parte de uma campanha de envio massivo de e-mail ou pode ainda ser utilizado como antisspam externo. Apenas os endereços de e-mail associados ao conector de envio o utilizarão.

**Saiba como configurar um conector de envio na sua plataforma Private Exchange.**

**Exemplo**

O endereço de e-mail **newsletter@mydomain.ovh** está associado ao conector de envio (Send Connector) configurado na plataforma Exchange. O endereço **contact@mydomain.ovh** não está anexado ao conector de envio.

![send connector](images/send-connector01.png){.thumbnail}

Eis o contexto do diagrama acima:

- **contact@mydomain.ovh** envia um e-mail para o endereço **mary.johnson@guias.ovh**: trata-se de um envio clássico, pois o connector de envio não foi associado ao endereço **contact@mydomain.ovh**. **mary.johnson@guias.ovh** recebe, portanto, o e-mail proveniente do servidor de envio da plataforma Exchange (*Outgoing mail server*).
- **newsletter@mydomain.ovh** envia um e-mail para o endereço **john.smith@guias.ovh** : **newsletter@mydomain.ovh** foi ligado ao conector de envio, **john.smith@guias.ovh** receberá o e-mail a partir do servidor de envio do conector (*Send Connector*) parametrizado na plataforma Exchange.

## Requisitos

- Ter subscrito uma plataforma [Private Exchange OVHcloud](/links/web/emails-private-exchange) ou [Trusted Exchange OVHcloud](https://www.ovhcloud.com/pt/enterprise/products/trusted-exchange/).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter acesso às [API da OVHcloud](https://api.ovh.com/).
- Ter os parâmetros necessários para configurar o conector de envio. Aproxime-se do prestador que lhe entrega o serviço.

## Instruções

Um conector de envio é implementado em 3 etapas.

- [1. Adicionar o conector de envio à sua plataforma](#addconnector): Introduza os parâmetros do conector de envio que o seu prestador lhe transmitiu.
- [2. Configurar um endereço de e-mail num conector de envio](#addaddress): Associa o conector de envio a um ou vários endereços de e-mail para que eles enviem através deste conector aquando de um envio
- [3. Verificar se o seu endereço de e-mail utiliza o conector de envio](#checkheader) : enviar a partir de um endereço de e-mail configurado com um conector e recuperar o cabeçalho do e-mail a partir do endereço de e-mail recebido para verificar se o e-mail foi corretamente passado através do conector de envio.

Neste guia, encontrará também outras operações úteis relativas aos conectores de envio.

- [Remover um conector de envio associado a um endereço de e-mail](#removeaddress)
- [Definir um conector de envio como servidor de envio predefinido](#defaultconnector)
- [Listas de outras chamadas API relacionadas com os conectores de envio](#apilist)

### Adicionar um conector de envio à sua plataforma Exchange <a name="addconnector"></a>

> [!warning]
>
> A adição de um conector de envio é reservada e está prevista para as ofertas [Private Exchange OVHcloud](/links/web/emails-private-exchange) e [Trusted Exchange OVHcloud](https://www.ovhcloud.com/pt/enterprise/products/trusted-exchange/). Se ativar um conector de envio numa oferta Exchange OVHcloud que não as mencionadas anteriormente, poderá ver a oferta desativada a qualquer momento pelos nossos administradores, por razões de segurança.

Antes de começar, precisará das seguintes informações: Devem ser fornecidas pelo prestador que emite o conector de envio.

- o endereço do servidor de envio (SMTP)
- a porta utilizada para o envio (exemplo: 587)
- o nome de utilizador associado (por exemplo, um endereço de e-mail) , **pode ser opcional em função do seu conector de envio**.
- a palavra-passe associada ao nome de utilizador, **pode ser opcional consoante o seu conector de envio**.

De seguida, aceda às API da OVHcloud com os seus dados de acesso. Não hesite em consultar o nosso guia [Primeiros passos com as API OVHcloud ](pages/manage_and_operate/api/first-steps).

Para adicionar um conector de envio à sua plataforma Exchange, utilize a seguinte chamada API.

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `exchangeService` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `displayName` : nome de apresentação do conector de envio.
- `maxSendSize` : tamanho máximo, em MB, de um e-mail aquando de um envio (100MB máximo e predefinição se não colocar nada).
- `password` : palavra-passe associada ao utilizador do connector de envio.
- `port` - a porta utilizada pelo envio.
- `requireTLS` : utilizar o protocolo de segurança TLS ao enviar.
- `smartHost`: endereço do conector de envio (SMTP).
- `smartHostAuthMechanism`: mecanismo de autenticação utilizado para o conector de envio.
- `user` : utilizador associado ao connector de envio.

Obtém este tipo de resultado:

``` console
{
    todoDate: "2023-09-25T14:06:02+02:00"
    id: 113924189
    finishDate: null
    function: "addSendConnector"
    status: "todo"
}
```

Depois de criar o conector de envio, utilize a seguinte chamada API para recuperar o seu ID (identificador).

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `exchangeService` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».

Obtém este tipo de resultado:

``` console
[
    29
]
```

Pode encontrar os detalhes do seu conector de envio utilizando esta API: <a name="idconnector"></a>

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- `organizationName` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `id` : introduza a ID do seu conector de envio, que é um número na etapa anterior.
- `exchangeService` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».

Obtém este tipo de resultado:

``` console
{
    smartHost: "smtp-relay.exemplo.com"
    displayName: "testconnector"
    state: "ok"
    maxSendSize: 100
    smartHostAuthMechanism: "basicAuthRequireTLS"
    port: 587
    lastUpdateDate: null
    creationDate: "2023-09-25T14:06:02+02:00"
    taskPendingId: 0
    id: 29
    requireTLS: true
}
```

### Configurar um endereço de e-mail para utilizar um conector de envio <a name="addaddress"></a>

Para poder enviar e-mails através de um conector de envio, é necessário associá-lo a um ou vários endereços de e-mail.

Utilizar a chamada API de configuração de uma conta Exchange para adicionar o ID do seu conector de envio para um endereço de e-mail:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `primaryEmailAddress` : introduza um dos endereços de e-mail da plataforma Exchange, à qual pretende associar o conector de envio.
- `exchangeService` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `Account` : É aqui que as informações relativas ao endereço de e-mail são introduzidas. **Vamos apenas nos interessar pela linha relativa ao conector de envio**.
    - `sendConnectorId` : introduza a ID do seu conector de envio, que é um número [na etapa anterior](#idconnector).
    - Selecione a caixa de verificação `deleteVirus` (se já estiver selecionada) para não obter erros durante a execução da chamada API

Obtém o seguinte resultado:

``` console
{
    null
}
```

### Testar o seu conector de envio <a name="checkheader"></a>

Se a sua configuração estiver em conformidade com as informações transmitidas pelo fornecedor do conector de envio, o seu endereço de e-mail enviará os seus e-mails através deste conector de envio. Não há nenhuma manipulação particular a fazer para o envio, basta enviar a partir da(s) morada(s) de e-mail associada(s) ao conector de envio.

Para testar o seu envio, envie um e-mail a partir de um endereço que está ligado ao conector de envio para um endereço de teste que terá escolhido e que poderá consultar. Uma vez enviado o e-mail de teste, ligue-se ao endereço de destino e observe o cabeçalho do e-mail para verificar se o envio foi bem feito através do conector de envio. Se necessário, consulte o guia [Obter o cabeçalho de um e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Exemplo de cabeçalho**

o endereço de e-mail **newsletter@mydomain.ovh** envia um e-mail para **john.smith@guias.ovh**. O endereço de e-mail **newsletter@mydomain.ovh** foi associado ao conector de envio. O connector de envio a para um nome de domínio **sender-id.exemplo.com**

Eis um exemplo de cabeçalho de um e-mail enviado a partir de um Private Exchange que utiliza um conector de envio, no contexto acima:

<robert@hisdomain.ovh>

<pre class="bgwhite"><code>Return-Path: &lt;bounces-249164590-newsletter=mydomain.ovh@sender-id.exemplo.com>
Delivered-To: john.smith@guias.ovh
Received: from localhost (HELO queue) (127.0.0.1)
    by localhost with SMTP; 28 Feb 2023 09:51:02 +0200
Received: from unknown (HELO output28.mail.ovh.net) (192.168.11.93)
    by 192.168.1.2 with AES256-GCM-SHA384 encrypted SMTP; 28 Feb 2023 09:51:02 +0200
Received: from vr45.mail.ovh.net (unknown [10.101.8.45])
    by out28.mail.ovh.net (Postfix) with ESMTP id 4PQqLG4KHRzRxRQZj
    for &lt;john.smith@guias.ovh>; Tue, 28 Feb 2023 07:51:02 +0000 (UTC)
Received: from in31.mail.ovh.net (unknown [10.101.4.31])
    by vr45.mail.ovh.net (Postfix) with ESMTP id 4PQqLF6ZBMz37ZHNP
    for &lt;john.smith@guias.ovh>; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=11.22.333.44; helo=sender-id.exemplo.com; envelope-from=bounces-249164590-newsletter=mydomain.ovh@sender-id.exemplo.com; receiver=john.smith@guias.ovh
Authentication-Results: in31.mail.ovh.net;
    dkim=pass (1024-bit key; unprotected) header.d=smtp.exemplo.com header.i=@smtp.exemplo.com header.b="HDetLEPl";
    dkim-atps=neutral
Received: from sender-id.exemplo.com (sender-id.exemplo.com [11.22.333.44])
    by in31.mail.ovh.net (Postfix) with ESMTPS id 4PQsPF43SEm78WdxQ
    for &lt;john.smith@guias.ovh>; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=smtp.exemplo.com;
    q=dns/txt; s=mail; bh=gZnUUk4TldsnAE7L+M9zwjuOeOmD6FwV4Yyq99XN2a0=;
    h=from:subject:date:to:mime-version:content-type:list-unsubscribe:x-csa-complaints:list-unsubscribe-post;
    b=HDiySKAl0J78ByyGlPjCVc+zvEv/DP9NkfUdso8DkB5z1Lig4rfbqCLnD6SE6wh7sjsZMsae0gk
    Muy0Uur0tw2nWq/WI94O4grD/KAWWC+jo2w/1+0ol1VCQN2+zQEhM+HJj4pcnn+MfU/RrXLkXfDV
    BLfqJiRcWJCQ3fy3Gag=
Received: by smtp-relay.smtp.exemplo.com with ESMTP id 12185513-794a-4762-b3ee-a4044d30975e; Tue Feb 28 2023 07:51:00 GMT+000
X-Mailin-EID: MjAxMTY0NTkwfm5vLXJlcGx5QHRlc3QtbXV0dS5jb21%2BPDE2N2U1NdkfOTQ3MzQ1YWFiNzY3NWY3ZMJkMWUzZGJkQHRlYW1qZXJlbS5vdmg%2B25ead5LmQuc2XGVP Yi5jb20%3D
To: &lt;john.smith@guias.ovh>
Date: Tue, 28 Feb 2023 07:50:56 +0000
Subject: Teste SBR 3 (SIB)
Message-Id: &lt;12185193-354a-4762-b3ee-a40484d30975e@smtp-relay.smtp.example.com>
Origin-messageId: &lt;167e568a947345aab7675f7fbd1e3dbd@mydomain.ovh>
Thread-Index: AQHZS0ljK1OFDltwD80S81Qo68wiBIQ===
Accept-Language: fr-FR, en-US
Content-Language: fr-FR
X-MS-Has-Attach:
X-MS-TNEF-Correlator:
x-mclm-sbr-processed: true
MIME-Version: 1.0
X-sib-id: 8dUZE2ztHUSpKwRy5O0fOawZARq-Dh8BNrytyOAwG9i3ybk5nxMfOvwZLeo778wLsYKejwcxuIEci6PKSzh3d4X7w126g-32syWTSQKRPQZTyxdXonPcl3lqm3pXkNolGdGdGdGd4GBF HY38OoEF7aXWMGvRsJtNlvsy1sEx8vGFOpxg_3cK
X-CSA-Complaints: csa-complaints@eco.de
From: &lt;newsletter@mydomain.ovh>
</code></pre>

### Remover um conector de envio associado a um endereço de e-mail <a name="removeaddress"></a>

Para remover um conector de envio associado a uma conta da plataforma Exchange, utilize a chamada API de configuração da conta Exchange em causa para alterar a ID do seu conector de envio através da ID do servidor de envio da sua plataforma Exchange :

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `primaryEmailAddress` : introduza um dos endereços de e-mail da sua plataforma Exchange, na qual deseja desassociar o conector de envio.
- `exchangeService` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `Account` : complete aqui as informações relativas ao endereço de e-mail introduzido na caixa « primaryEmailAddress ». Vamos apenas nos interessar pelas linhas relativas ao conector de envio.
    - `sendConnectorId` : introduza « 0 » para definir o ID do servidor de envio da plataforma Exchange.
    - Selecione a caixa de verificação `deleteVirus` (se já não estiver selecionada) para evitar erros.

Obtém o seguinte resultado:

``` console
{
    null
}
```

### Definir um conector de envio como servidor de envio predefinido <a name="defaultconnector"></a>

É possível ligar automaticamente um connector de envio sempre que adicionar uma conta Exchange à sua plataforma. Desta forma, todas as contas que forem adicionadas passarão por predefinição pelo conector de envio que definiu.

Para isso, utilize a seguinte chamada API:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR

- `organizationName` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `exchangeService` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma « private-zz111111-1 » ou « dedicated-zz111111-1 ».
- `domainName` : introduza o nome de domínio que terá o connector de envio.
- `sbrDefault `: deixe em branco.
- `sendConnectorIdDefault` : introduza a ID do seu conector de envio, que é um número [nesta etapa](#idconnector).

Obtém o seguinte resultado:

``` console
{
    null
}
```

> [!warning]
>
> Para redefinir o servidor de envio predefinido da plataforma Exchange, introduza « 0 » na caixa `sendConnectorIdDefault`.

### Listas de outras chamadas API relacionadas com os conectores de envio <a name="apilist"></a>

- Recuperar os conectores de envio já criados num serviço Exchange:

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- Eliminar um conector de envio existente:

> [!api]
>
> @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Obter os detalhes de um conector de envio existente:

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Editar um conector de envio existente:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Alterar o método de autenticação de um conector de envio existente:

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication

## Saiba mais

[Editar uma zona DNS](/pages/web_cloud/domains/dns_zone_edit)

[Adicionar um domínio ao serviço Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
