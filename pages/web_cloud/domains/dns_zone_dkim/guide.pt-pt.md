---
title: "Melhorar a segurança dos e-mails através do registo DKIM"
excerpt: "Saiba como configurar um registo DKIM no seu domínio e na sua plataforma de e-mail OVHcloud"
updated: 2024-07-05
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

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O registo DKIM (**D**omain**K**eys **I**dentified **M**ail) permite assinar os e-mails para evitar a usurpação de identidade. Esta assinatura baseia-se no princípio da triagem combinada com uma criptografia assimétrica.

**Saiba como usar o DKIM e como configurá-lo para o seu serviço de e-mail.**

## Requisitos

- Ter acesso à secção de gestão do domínio na [Área de Cliente OVHcloud](/links/manager) ou na Área de Cliente, caso esteja registado fora da OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter subscrito uma das ofertas de e-mail:
    - "E-mails" (MX Plan) OVHcloud. Esta última está disponível através de uma [oferta de alojamento Web Cloud](/links/web/hosting), um [alojamento gratuito 100M](/links/web/domains-free-hosting) ou uma oferta MX Plan encomendada separadamente.
    - [Exchange](/links/web/emails-hosted-exchange) ou [Private Exchange](/links/web/emails-hosted-exchange).
    - [E-mail Pro](/links/web/email-pro).
    - Uma oferta de e-mail fora da OVHcloud que dispõe do DKIM.

> [!warning]
>
> Se o domínio não usar os servidores DNS da OVHcloud, a alteração DKIM deverá ser efetuada através da interface do agente responsável pela configuração do domínio.
>
> Se o domínio for gerido pela OVHcloud, verifique se este utiliza a nossa configuração OVHcloud na [Área de Cliente](/links/manager) a partir do separador `Zona DNS`{.action}, depois de selecionado o domínio.
>

## Instruções

**Índice**

- [Como funciona o DKIM?](#how-dkim-work)
    - [A picadura](#hash)
    - [A encriptação assimétrica](#encrypt)
    - [Como é que a picadura e a encriptação assimétrica são utilizadas para o DKIM?](#encrypt-and-hash)
    - [Porque é que precisamos de configurar os servidores DNS?](#dns-and-dkim)
    - [Exemplo de um e-mail enviado utilizando o DKIM](#example)
    - [O que é um seletor DKIM?](#selector)
- [Configurar o DKIM automaticamente para um serviço de e-mail Exchange ou E-mail Pro da OVHcloud](#auto-dkim)
- [Configurar o DKIM manualmente para um serviço de e-mail Exchange ou E-mail Pro da OVHcloud](#internal-dkim)
    - [Configuração completa do DKIM](#firststep)
        - [Para E-mails (MX Plan)](#confemail)
        - [Para Exchange](#confex)
        - [Para o E-mail Pro](#confemp)
    - [Os diferentes estados do DKIM](#status)
    - [Ativar ou alterar um seletor DKIM](#enable-switch)
    - [Desativar e eliminar o DKIM](#disable-delete)
- [Configurar DKIM para uma oferta de e-mail fora da sua conta OVHcloud](#external-dkim)
    - [Registo DKIM](#dkim-record)
    - [Registo TXT](#txt-record)
    - [Registo CNAME](#cname-record)
- [Testar o seu DKIM](#test-dkim)
- [Casos práticos](#usecases)
    - [Como alterar o par de chaves DKIM?](#2selectors)
    - [Porque é que o ícone DKIM aparece a vermelho na Área de Cliente?](#reddkim)
    - [A partir da interface API OVHcloud, como compreender o estado do DKIM que não funciona?](#api-error)

### Como funciona o DKIM? <a name="how-dkim-work"></a>

Para compreender bem porque é que o DKIM permite proteger as suas trocas de e-mails, é necessário compreender como funciona. O DKIM recorre à "**picadura**" e à "**encriptação assimétrica**" para criar uma assinatura segura. A **plataforma de e-mail** e a **Zona DNS** do seu domínio irão ajudar a transmitir as informações do DKIM aos seus destinatários.

#### A picadura <a name="hash"></a>

O princípio de uma **função de picadura** é gerar uma **assinatura** (também designada "pegada") a partir de um dado de entrada. O seu interesse é criar à saída uma sequência de caracteres fixa, independentemente da quantidade de dados à entrada. 

No diagrama seguinte, pode constatar que a saída (Output) será sempre composta por 32 caracteres, utilizando um algoritmo de picadagem MD5 (**M**essage **D**igest **5**), enquanto o texto de entrada (Input) pode variar em tamanho. A menor variação no caráter do dado de entrada altera completamente a trituração à saída, o que torna a assinatura à saída imprevisível e infalsificável. No exemplo abaixo, o valor de entrada (Input) passou para o algoritmo de trituração MD5 e apresenta à saída (Output) o seu valor de trituração.

![hash](/pages/assets/schemas/emails/dns-dkim-hash01.png){.thumbnail}

A função de triagem é útil quando deseja verificar a integridade de uma mensagem. Com efeito, dois dados que podem ser de aparência muito próximas apresentam um valor de picadura completamente diferente com um comprimento de caracteres igual à saída, qualquer que seja o comprimento de entrada.

#### A encriptação assimétrica <a name="encrypt"></a>

A **encriptação**, como o seu nome indica, tem como objetivo encriptar os dados que lhe são dados. É "**assimétrica**" porque a chave de encriptação não é a mesma que a chave de decifrar, ao contrário de uma encriptação simétrica que vai usar a mesma chave para encriptar e decifrar.

Na encriptação assimétrica, utilizamos uma **chave pública** e uma **chave privada**. A chave pública é visível e utilizável por todos. A chave privada só é utilizada por proprietário e não é visível de todos. 

Existem duas utilizações da encriptação assimétrica:

- **O dado de entrada é encriptado com a chave pública e decifrado por quem possui a chave privada**. Por exemplo, deseja que um terceiro lhe transmita dados de forma segura. Transmite a sua chave pública sem se preocupar que alguém a recupere, este terceiro encriptará os seus dados com a sua chave pública. Os números só poderão ser decifrados pelo proprietário da chave privada.

![hash](/pages/assets/schemas/emails/dns-dkim-crypto01.png){.thumbnail}

- **O dado de entrada é encriptado pelo proprietário da chave privada e decifrado pela chave pública**. Esta utilização aplica-se para autenticar uma troca de dados. Por exemplo, os seus destinatários pretendem assegurar-se de que é o autor da mensagem que lhes transmite. Nesse caso, irá encriptar a sua mensagem com a sua chave privada. Esta mensagem só poderá ser decifrada através da chave pública que transmitir a todos, o que garante aos seus destinatários a autenticidade da sua mensagem. De facto, uma mensagem decifrada pela chave pública só pode provir do proprietário da chave privada.

![hash](/pages/assets/schemas/emails/dns-dkim-crypto02.png){.thumbnail}

#### Como é que a picadura e a encriptação assimétrica são utilizadas para o DKIM? <a name="encrypt-and-hash"></a>

A partir da plataforma de e-mail, o DKIM vai utilizar a trituração para criar uma assinatura a partir de certos elementos [do cabeçalho do e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers) e do corpo do e-mail (conteúdo do e-mail).

A assinatura é depois encriptada com a chave privada utilizando a encriptação assimétrica.

#### Porque é que precisamos de configurar os servidores DNS? <a name="dns-and-dkim"></a>

Para que o destinatário possa verificar a assinatura DKIM do remetente, precisará dos parâmetros DKIM e, sobretudo, da chave pública para a decifrar. A [zona DNS](/pages/web_cloud/domains/dns_zone_general_information) de um nome de domínio é pública, pelo que é acrescentado um registo DNS para transmitir a chave pública e os parâmetros DKIM ao destinatário.

#### O que é um seletor DKIM <a name="selector"></a>

Quando ativa o DKIM, este funciona com um par de chave pública / chave privada. É possível atribuir vários pares de chaves ao seu domínio, no quadro de uma rotação, por exemplo. Com efeito, quando muda de par de chaves, o antigo par deve permanecer ativo enquanto o conjunto dos e-mails que enviou com a antiga chave não encontrar falha na verificação do DKIM no servidor de receção.

Para que este princípio de rotação funcione, vamos utilizar o que chamamos os **seletores DKIM**. Um seletor DKIM inclui um par de chave privada/chave pública. É visível sob a forma de um canal de caráter na assinatura DKIM de um e-mail pelo argumento `s=`. Esta assinatura é visível [no cabeçalho do e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Exemplo de uma parte de assinatura DKIM**

<pre class="bgwhite"><code>DKIM-Signature: v=1; a=rsa-sha256; d=mydomain.ovh; s=ovhex123456-selector1; c=relaxed/relaxed; t=1681877341; 
</code></pre>

O valor do seletor é aqui `s=ovhex123456-seletor1`.

#### Exemplo de um e-mail enviado utilizando o DKIM <a name="example"></a>

Quando envia um e-mail a partir de **contact@mydomain.ovh**, é adicionada uma assinatura encriptada com a ajuda de uma chave privada (private key) no cabeçalho do e-mail.

![email](/pages/assets/schemas/emails/dns-dkim-send.gif){.thumbnail}

O destinatário **recipient@otherdomain.ovh** poderá decifrar esta assinatura com a chave pública (Public key) visível na zona DNS de **mydomain.ovh**. A assinatura é criada a partir do conteúdo do e-mail enviado. Isto significa que, se o e-mail for modificado durante o trânsito, a assinatura não corresponderá ao conteúdo, provocando assim o fracasso da verificação DKIM no servidor destinatário.

![email](/pages/assets/schemas/emails/dns-dkim-receive.gif){.thumbnail}

### Configurar o DKIM automaticamente para um serviço de e-mail Exchange ou E-mail Pro da OVHcloud <a name="auto-dkim"></a>

> [!primary]
>
> Se dispõe de uma oferta "E-mails" (MX Plan) incluída com um [alojamento Web Cloud](/links/web/hosting), um [alojamento gratuito 100M](/links/web/domains-free-hosting) ou encomendada separadamente, passe à etapa "[Configurar o DKIM manualmente para um serviço de e-mail OVHcloud](#internal-dkim)".

A configuração automática do DKIM está acessível às ofertas de e-mail [Exchange](/links/web/emails) e [E-mail Pro](/links/web/email-pro).

Por predefinição, o DKIM não é ativado quando adiciona um domínio à sua plataforma. Deve então lançar o processo de configuração automática através da Área de Cliente.

Clique no separador seguinte da sua oferta.

> [!tabs]
> **Exchange**
>>
>> A partir da sua [Área de Cliente OVHcloud](/links/manager), no separador `Web Cloud`{.action}, clique em `Microsoft`{.action} e, a seguir, em `Exchange`{.action}. Clique no nome do serviço Exchange em questão. Por fim, aceda ao separador `Domínios associados`{.action}.
>>
>> À direita do domínio em causa, pode verificar que a etiqueta `DKIM` é cinzenta.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto01.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> A partir da sua [Área de Cliente OVHcloud](/links/manager), no separador `Web Cloud`{.action}, clique em `E-mails Pro`{.action} e, a seguir, no nome do serviço E-mail Pro em causa. Por fim, aceda ao separador `Domínios associados`{.action}.
>>
>> À direita do domínio em causa, pode verificar que a etiqueta `DKIM` é cinzenta.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto01.png){.thumbnail}

Para ativar o DKIM, basta clicar na etiqueta `DKIM` cinzento e, a seguir, em `Validar`{.action} a partir da janela de ativação apresentada.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto02.png){.thumbnail}

A ativação automática do DKIM dura entre 30 minutos e 24 horas, no máximo. Para verificar se o seu DKIM está funcional, basta voltar ao separador `Domínios associados`{.action} da sua plataforma de e-mail e certificar-se de que a etiqueta `DKIM` ficou verde.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto03.png){.thumbnail}

Se a etiqueta `DKIM` for vermelha após 24 horas, consulte a secção "[Porque é que o DKIM não está funcional e aparece a vermelho na Área de Cliente?](#reddkim)" deste guia.

### Configurar o DKIM manualmente para um serviço de e-mail Exchange ou E-mail Pro da OVHcloud <a name="internal-dkim"></a>

Para uma plataforma Exchange ou E-mail Pro, deve primeiro recuperar a referência da sua plataforma para configurar o seu DKIM.

Clique no separador abaixo correspondente à sua oferta.

> [!tabs]
> **Exchange**
>>
>> Na [Área de Cliente OVHcloud](/links/manager), no separador `Web Cloud`{.action}, clique em `Microsoft`{.action} e, a seguir, em `Exchange`{.action}. Finalmente, clique no nome do serviço Exchange em questão. Por predefinição, o nome da plataforma corresponde à sua referência ou esta será visível sob o nome que lhe atribuiu (ver imagem abaixo).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/general-information/dns-dkim-platform-exchange.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> Na Área de [Cliente OVHcloud](/links/manager), no separador `Web Cloud`{.action}, clique em `E-mails Pro`{.action} e, a seguir, no nome do serviço E-mail Pro em causa. Por predefinição, o nome da plataforma corresponde à sua referência ou esta será visível sob o nome que lhe atribuiu (ver imagem abaixo).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/email-pro/general-information/dns-dkim-platform-emailpro.png){.thumbnail}

Certifique-se também de que o domínio que pretende utilizar para os seus e-mails está ativo na rubrica `Domínios associados`{.action}.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dns-dkim-domain.png){.thumbnail}

#### Configuração completa do DKIM <a name="firststep"></a>

Para configurar o DKIM, aceda ao website <https://api.ovh.com/console/>através do botão `Login`{.action} no canto superior direito e introduza as suas credenciais OVHcloud.

> Apoie-se no nosso guia "[Descubra como utilizar as API OVHcloud](/pages/manage_and_operate/api/first-steps)" se nunca utilizou as API.

Aceda à secção `/email/domain/` (ofertas E-mails (MXplan)), `/email/exchange` (ofertas Exchange) ou `/email/pro` (oferta E-mail Pro) das API e introduza "dkim" na caixa `Filter` para apresentar apenas as API relativas ao DKIM.

Clique no separador da sua oferta:

> [!tabs]
> **E-mails (MX Plan)**
>>
>> ![email](/pages/assets/screens/api/get-email-domain-domain-dkim.png){.thumbnail}
>>
> **Exchange**
>>
>> ![email](/pages/assets/screens/api/get-email-exchange-organizationname-service-exchangeservice-domain-domainname-dkim.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> ![email](/pages/assets/screens/api/get-email-pro-service-domain-domainname-dkim.png){.thumbnail}
>>

##### **Para E-mails (MX Plan)** <a name="confemail"></a>

Siga os **5 passos** clicando sucessivamente em cada um dos 5 separadores seguintes:

> [!tabs]
> **1. Ativar o DKIM no seu domínio**
>> Para ativar o DKIM no seu domínio, utilize a seguinte chamada API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/enable
>>
>> - `domain` : introduza o nome de domínio associado ao seu serviço E-mail no qual deseja ativar o DKIM.
>>
>> Clique em `TRY`{.action} para iniciar a ativação.<br>
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> {
>>  "domain": "mydomain.ovh",
>>  "id": 123455789,
>>  "function": "domain/enableDKIM",
>>  "status": "todo"
>> }
>> ```
>>
>> Deverá obter o mesmo resultado que no exemplo acima com a menção `"status": "todo"` indicando que o DKIM vai ser instalado.
>>
> **2. Verificar o estado da operação DKIM**
>> Depois de iniciar o processo de ativação do DKIM, siga o estado da instalação para se certificar de que a instalação termina ou para recuperar os registos DNS se a sua zona DNS for gerida fora da Área de Cliente OVHcloud.<br>
>>.
>> <br>
>> Para isso, utilize a seguinte chamada API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>> >
>>
>> - `domain`: introduza o nome de domínio associado ao seu serviço E-mail.<br>
>> <br>
>> Clique em `TRY`{.action} para visualizar o resultado.<br>
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> {
>>  "activeSelector": null,
>>  "autoconfig": true,
>>  "selectors": [
>>    {
>>      "selectorName": "ovhmo3456789-selector2",
>>      "status": "set",
>>      "cname": "ovhmo3456789-selector2._domainkey.mydomain.ovh CNAME ovhmo3456789-selector2._domainkey.123402.aj.dkim.mail.ovh.net."
>>    },
>>    {
>>      "selectorName": "ovhmo3456789-selector1",
>>      "cname": "ovhmo3456789-selector1._domainkey.mydomain.ovh CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net.",
>>      "status": "set"
>>    }
>>  ],
>>  "status": "modifying"
>> }
>> ```
>>
>> No exemplo acima, a última linha de estado `"status": "modifying"` significa que a configuração está em curso. Aguarde cerca de **10 minutos** e repita a chamada API.
>>
>> - se o valor for `"status": "enabled"`, a sua configuração está terminada e funcional.
>> - se o valor for `"status": "disabled"`, a sua configuração deve ser completada manualmente, passe à etapa seguinte.
>>
> **3. Obter o registo DNS**
>> Deve configurar manualmente a zona DNS do seu domínio **nos seguintes casos**:
>>
>> - o seu serviço E-mail está associado a um domínio que é gerido numa outra conta de cliente OVHcloud;
>> - o seu serviço de E-mail está associado a um domínio que é gerido noutro agente de registo.
>>
>> Para configurar a sua zona DNS, deve recuperar os valores do registo DNS **dos dois seletores**. Para isso, utilize o resultado da chamada API da etapa anterior:
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>> >
>>
>> - `domain` : introduza o nome de domínio associado ao seu serviço E-mail.
>>
>> Clique em `TRY`{.action} para visualizar o resultado.
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> {
>>  "activeSelector": null,
>>  "status": "disabled",
>>  "autoconfig": false,
>>  "selectors": [
>>    {
>>      "cname": "ovhmo3456789-selector1._domainkey.mydomain.ovh CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net."
>>      "status": "toSet",
>>      "selectorName": "ovhmo4287928-selector1"
>>    },
>>    {
>>      "selectorName": "ovhmo4287928-selector2",
>>      "cname": "ovhmo3456789-selector2._domainkey.mydomain.ovh CNAME ovhmo3456789-selector2._domainkey.123402.aj.dkim.mail.ovh.net.",
>>      "status": "toSet"
>>    }
>>  ]
>> }
>> ```
>>
>> Os valores `"status": "toSet"` e `"status": "disabled"` significam que os registos CNAME devem ser configurados. Guarde os 2 valores `cname` num ficheiro de texto e passe à etapa seguinte.
>>
> **4. Configurar o registo DNS**
>> A partir de [Área de Cliente OVHcloud](/links/manager), na qual está alojado o nome de domínio do seu serviço de e-mail, no separador `Web Cloud`.{.action}, clique em `Domínios`.{.action} na coluna da esquerda e selecione o domínio em causa.<br>
>> Aceda ao separador `Zona DNS`.{.action} e clique em `Adicionar uma entrada`.{.action} na janela que irá aparecer. Escolha "CNAME" e complete de acordo com os valores que obteve.
>>
>> Decompõe-se os valores do exemplo na etapa "**3. Obter o registo DNS**":
>>
>> - `ovhmo3456789-seletor1._domainkey.mydomain.ovh` corresponde ao subdomínio do registo CNAME. Apenas se guarda `ovhmo3456789-selector1._domainkey` porque o `.mydomain.ovh` já está pré-preenchido. <br>
>> - `ovhmo3456789-seletor1._domainkey.123403.aj.dkim.mail.ovh.net.` corresponde ao destino do registo. Deve conservar-se o ponto no final para apontar o valor.<br>
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api022.png){.thumbnail}
>>
>> Depois de inserir os valores, clique em `Seguinte`{.action} e em `Validar`{.action}.
>>
>> > [!primary]
>> >
>> > **Repita este processo para o segundo seletor.**
>>
>> Se configurar a sua zona DNS numa interface de terceiros fora da OVHcloud, o registo CNAME deve ter a seguinte forma:
>>
>> ```console
>> ovhmo3456789-selector1._domainkey IN CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Lembre-se de que a alteração de uma zona DNS está sujeita a um tempo de propagação. É geralmente curto, mas pode durar até 24 horas.
>>
> **5. Ativação do DKIM**
>>
>> Após a propagação da sua configuração DNS, utilize novamente a seguinte chamada API para ativar o DKIM:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/enable
>>
>> - `domain` : introduza o nome de domínio associado ao seu serviço de e-mail no qual deseja ativar o DKIM.
>>
>> Clique em `TRY`{.action} para iniciar a ativação.<br>
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> {
>>  "selectors": [
>>    {
>>      "selectorName": "ovhmo3465680-selector2",
>>      "cname": "ovhmo3456789-selector2._domainkey.mydomain.ovh CNAME ovhmo3456789-selector2._domainkey.123402.aj.dkim.mail.ovh.net.",
>>      "status": "set"
>>    },
>>    {
>>      "status": "set",
>>      "cname": "ovhmo3456789-selector1._domainkey.mydomain.ovh CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net."
>>      "selectorName": "ovhmo3465680-selector1"
>>    }
>>  ],
>>  "activeSelector": "ovhmo3465680-selector1",
>>  "autoconfig": true,
>>  "status": "enabled"
>> }
>> ```
>>
>> - Se verificar os valores `"status": "set"` nos 2 seletores, isso significa que eles estão bem configurados.
>> - Se verificar os valores `"status": "toSet"` nos 2 seletores, isso significa que as suas alterações DNS não são visíveis. Retomar no separador "**4. Configurar o registo DNS**".
>> - Se verificar os valores `"status": "toFix"` nos 2 seletores, isso significa que os registos CNAME foram detetados na zona DNS do seu domínio, mas que os valores estão incorretos. Retomar no separador "**4. Configurar o registo DNS**".
>>
>> > [!success]
>> >
>> > Realizou agora todas as operações para ativar o DKIM. Para verificar se o servidor está ativo, verifique o estado retornando ao separador da etapa "**2. Verificar o estado da operação DKIM**" para verificar que o valor `status:` está em `enabled`. Se este for o caso, o seu DKIM está ativo.
>>

##### **Para Exchange** <a name="confex"></a>

Siga os **5 passos** abaixo ao clicar em cada separador.

> [!tabs]
> **1. Lista dos seletores**
>> Antes de criar um dos seletores para o seu nome de domínio, deve recuperar o nome que lhe é atribuído automaticamente pela plataforma Exchange.<br>
>> <br>
>> Para isso, utilize a seguinte chamada API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
>> >
>> <br>
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1". <br>
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1". <br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange na qual deseja ativar o DKIM. <br>
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> "ovhex123456-selector1"
>> "ovhex123456-selector2"
>> ```
>>
> **2. Criar um selecionador**
>> Agora vai criar um seletor, gerar o seu par de chaves e o registo DNS associado ao nome de domínio.<br>
>> <br>
>> Para isso, utilize a seguinte chamada API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>> >
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange na qual deseja ativar o DKIM.
>> - `selectorName` : introduza o nome de um seletor que registou na etapa anterior (exemplo: "ovhex123456-selector1"). <br>
>>
>> Clique em `Execute`{.action} para lançar a criação do seletor.<br>
>> 
>> > [!primary]
>> >
>> > Aconselhamos que efetue esta operação duas vezes para cada um dos seletores anteriormente listados. O segundo seletor permitirá que você faça uma mudança de par de chaves quando for necessário. Sugerimos que consulte o nosso caso de utilização "[Como alterar o par de chaves DKIM](#2selectors)" quando pretender migrar para o segundo seletor.
>> <br>
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> status: "todo",
>> function: "addExchangeDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>>
> **3. Recuperar o registo DNS**
>> Deve configurar manualmente a zona DNS do seu domínio **nos seguintes** casos:
>>
>> - a sua plataforma Exchange está associada a um nome de domínio gerido noutra conta de cliente OVHcloud;<br>
>> - a sua plataforma Exchange está associada a um nome de domínio gerido noutro agente de registo;<br>
>>
>> Para configurar a zona DNS, deve recuperar os valores do registo DNS **para cada seletor se tiver criado dois**. Para isso, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".
>> - `selectorName` : introduza o nome do seletor que criou na etapa anterior.
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange na qual deseja configurar o DKIM.
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> targetRecord: "ovhex123456-selector1._domainkey.1675.ac.dkim.mail.ovh.net"
>> recordType: "CNAME"
>> header: "from;to;subject;date"
>> taskPendingId: 108712689
>> status: "waitingRecord"
>> cnameIsValid: false
>> lastUpdate: "1970-01-01T00:00:00+01:00"
>> customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"
>> selectorName: "ovhex1234565-selector1"
>> ```
>>
>> Obtenha os valores `customerRecord` e `targetRecord` em um arquivo de texto. Vá para a próxima fase.
>>
>> > [!primary]
>> >
>> > É possível que o `status:` quer em `todo`, isto não afeta a configuração da sua zona DNS.
>>
> **4. Configurar o registo DNS**
>> Do [espaço cliente OVHcloud](/links/manager) onde o nome do domínio do seu Plataforma Exchange, na guia `Web Cloud`{.action}, clique em `Nomes de domínio`{.action} na coluna da esquerda e selecione o nome de domínio relevante.<br>
>> Dirija-se ao separador `Zona DNS`{.action} e clique em `Adicionar uma entrada`{.action} na janela que se abrir. Escolha o `CNAME` e introduza-o em função dos valores que tiver registado.<br>
>>
>> Se considerarmos os valores do exemplo na etapa "**3. Recuperar o registo DNS**":
>>
>> - `customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"` corresponde ao subdomínio do registro CNAME. Apenas mantemos `ovhex123456-selector1._domainkey` porque o `.mydomain.ovh` já está pré-preenchido. <br>
>> - `targetRecord: "ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` corresponde ao destino do registo. Adicionamos um ponto no final para pontuar o valor. Este endereço é `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api02.png){.thumbnail} <br>
>> 
>> Depois de inserir os valores, clique em `Seguinte`{.action} e `Validar`{.action}.
>>
>> **Repita este processo para o segundo seletor, se o tiver criado.**<br>
>>
>> Se configurar a zona DNS numa interface de terceiros fora da OVHcloud, o seu registo CNAME deve ter a seguinte forma:
>>
>> ```console
>> ovhex123456-selector1._domainkey IN CNAME ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Lembre-se de que uma alteração numa zona DNS está sujeita a um atraso de propagação. É geralmente curto, mas pode demorar até 24 horas.
>>
> **5. Ativação do DKIM**
>> > [!warning]
>> >
>> > Na secção [**Os diferentes estados do DKIM**](#dkim-status) deste manual, verifique se o valor `status:` está bem em `ready` antes de poder ativar o DKIM.
>>
>> Para ativar o DKIM, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".
>> - `selectorName` : introduza o nome do seletor que criou.
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange na qual deseja ativar o DKIM.
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableExchangeDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Já realizou todas as operações para ativar o DKIM. Para assegurar que o servidor está ativo, consulte a secção [**"Os diferentes estados do DKIM"**](#dkim-status) deste guia para verificar que o valor `status:` está bem em `inProduction`. Se for o caso, o seu DKIM está ativo.<br><br> **Se tiver criado dois seletores**, o segundo seletor deverá estar em `status: "ready"`.
>>

##### **Para o E-mail Pro** <a name="confemp"></a>

Siga os **5 passos** abaixo ao clicar em cada separador.

> [!tabs]
> **1. Lista dos seletores**
>> Antes de criar um dos seletores para o seu nome de domínio, deve recuperar o nome que lhe é atribuído automaticamente pela plataforma E-mail Pro.<br>
>> <br>
>> Para isso, utilize a seguinte chamada API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim
>> >
>> <br>
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1". <br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma E-mail Pro na qual deseja ativar o DKIM. <br>
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> "ovhemp123456-selector1"
>> "ovhemp123456-selector2"
>> ```
>>
> **2.Criar um selecionador**
>> Agora vai criar um seletor, gerar o seu par de chaves e o registo DNS associado ao nome de domínio.<br>
>>
>> > [!primary]
>> >
>> > Aconselhamos que efetue esta operação duas vezes para cada um dos seletores anteriormente listados. O segundo seletor permitirá que você faça uma mudança de par de chaves quando for necessário. Sugerimos que consulte o nosso caso de utilização "[Como alterar o par de chaves DKIM](#2selectors)".
>> <br>
>> Para isso, utilize a seguinte chamada API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim
>> >
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1". <br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma E-mail Pro na qual deseja ativar o DKIM.
>> - `selectorName` : introduza o nome de um seletor que identificou na etapa anterior. (exemplo: "ovhemp123456-selector1") <br>
>>
>> Clique em `Execute`{.action} para lançar a criação do seletor.<br>
>>
>> > [!primary]
>> >
>> > Aconselhamos que efetue esta operação duas vezes para cada um dos seletores anteriormente listados. O segundo seletor permitirá que você faça uma mudança de par de chaves quando for necessário. Sugerimos que consulte o nosso caso de utilização "[Como alterar o par de chaves DKIM](#2selectors)" quando pretender migrar para o segundo seletor.
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> status: "todo",
>> function: "addDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>>
> **3. Recuperar o registo DNS**
>> Deve configurar manualmente a zona DNS do seu domínio **nos seguintes** casos:
>>
>> - a sua plataforma E-mail Pro está associada a um domínio gerido noutra conta de cliente OVHcloud;<br>
>> - a sua plataforma E-mail Pro está associada a um domínio gerido noutro agente de registo;<br>
>>
>> Para configurar a zona DNS, deve recuperar os valores do registo DNS **para cada seletor se tiver criado dois**. Para isso, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1".
>> - `selectorName` : introduza o nome do seletor que criou na etapa anterior.
>> - `domainName` : introduza o domínio associado à sua plataforma E-mail Proe na qual deseja configurar o DKIM.
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> targetRecord: "ovhemp123456-selector1._domainkey.1675.ac.dkim.mail.ovh.net"
>> recordType: "CNAME"
>> header: "from;to;subject;date"
>> taskPendingId: 108712689
>> status: "waitingRecord"
>> cnameIsValid: false
>> lastUpdate: "1970-01-01T00:00:00+01:00"
>> customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"
>> selectorName: "ovhemp1234565-selector1"
>> ```
>>
>> Obtenha os valores `customerRecord` e `targetRecord` em um arquivo de texto. Vá para a próxima fase.
>>
>> > [!primary]
>> >
>> > É possível que o `status:` quer em `todo`, isto não afeta a configuração da sua zona DNS.
>>
> **4. Configurar o registo DNS**
>> A partir da [área cliente OVHcloud](/links/manager) onde o nome do domínio do seu Plataforma E-mail Pro, na guia `Web Cloud`{.action}, clique em `Nomes de domínio`{.action} na coluna da esquerda e selecione o nome de domínio relevante.<br>
>> Dirija-se ao separador `Zona DNS`{.action} e clique em `Adicionar uma entrada`{.action} na janela que se abrir. Escolha o `CNAME` e introduza-o em função dos valores que tiver registado.<br>
>>
>> Se considerarmos os valores do exemplo na etapa "**3. Recuperar o registo DNS**":
>>
>> - `customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"` corresponde ao subdomínio do registro CNAME. Apenas mantemos `ovhemp123456-selector1._domainkey` porque o `.mydomain.ovh` já está pré-preenchido. <br>
>> - `targetRecord: "ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` corresponde ao destino do registo. Adicionamos um ponto no final para pontuar o valor. Este endereço é `ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api02.png){.thumbnail} <br>
>>
>> Depois de inserir os valores, clique em `Seguinte`{.action} e `Validar`{.action}.<br>
>>
>> **Repita este processo para o segundo seletor, se o tiver criado.**<br>
>>
>> Se configurar a zona DNS numa interface de terceiros fora da OVHcloud, o seu registo CNAME deve ter a seguinte forma:
>>
>> ```console
>> ovhemp123456-selector1._domainkey IN CNAME ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Lembre-se de que uma alteração numa zona DNS está sujeita a um atraso de propagação. É geralmente curto, mas pode demorar até 24 horas.
>>
> **5. Ativação do DKIM**
>> > [!warning]
>> >
>> > Na secção [**Os diferentes estados do DKIM**](#dkim-status) deste manual, verifique se o valor `status:` está bem em `ready` antes de poder ativar o DKIM.
>>
>> Para ativar o DKIM, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1".
>> - `selectorName` : introduza o nome do seletor que criou.
>> - `domainName` : introduza o nome de domínio associado à sua plataforma E-mail Pro na qual deseja ativar o DKIM.
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Já realizou todas as operações para ativar o DKIM. Para assegurar que o servidor está ativo, consulte a secção [**"Os diferentes estados do DKIM"**](#dkim-status) deste guia para verificar que o valor `status:` está bem em `inProduction`. Se for o caso, o seu DKIM está ativo.
>>

#### Os diferentes estados do DKIM <a name="dkim-status"></a>

Selecione a oferta de e-mail em questão nos separadores seguintes:

> [!tabs]
> **E-mail (MX Plan)**
>> Quando efetuar as operações no DKIM da sua plataforma Email, utilize a chamada API abaixo para verificar o estado atual do DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>>
>> - `domain` : introduza o nome de domínio associado ao seu serviço E-mail no qual o DKIM deve estar presente.
>>
>> De seguida, verifique o valor `status:` geral no resultado:
>>
>> - `disabled`: o DKIM está desativado, ainda não foi configurado ou foi desativado pela API. <br>
>> - `modifying` : a configuração do DKIM está em curso, é necessário aguardar até ao fim do processo.<br>
>> - `toConfigure`: a configuração do DKIM está aguardando os parâmetros DNS do domínio. Os registos DNS devem ser preenchidos manualmente na zona do domínio. Para isso, clique em [etapa 4 de "a configuração completa do DKIM" for E-mails (MX Plan)](#confemail).<br>
>> - `enabled`: o DKIM está configurado e funcional.<br>
>> - `error`: O processo de instalação encontrou um erro. Sugerimos que abra um [ticket junto do suporte](https://help.ovhcloud.com/csm?id=csm_get_help) especificando o domínio em causa.<br>
>>
>> Ao nível dos seletores também tem 3 estados possíveis:
>>
>> - `set`: o seletor está bem configurado e ativo.
>> - `toSet`: o seletor não está configurado na zona DNS do domínio. Pressione [etapa 4 "configuração completa do DKIM" for E-mails (MX Plan)](#confemail).
>> - `toFix`: o seletor foi corretamente configurado na zona DNS do domínio, mas os valores estão incorretos. Pressione [etapa 4 "configuração completa do DKIM" for E-mails (MX Plan)](#confemail).
>>
> **Exchange**
>> Aquando das suas operações no DKIM da sua plataforma Exchange, utilize a chamada API abaixo para verificar o estado atual do DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1". <br>
>> - `selectorName` : introduza o nome do seletor que criou. <br>
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1". <br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange na qual o DKIM deve estar presente. <br>
>>
>> Verifique o valor `status:` no resultado:
>>
>> - `todo` : a tarefa foi iniciada, vai começar. <br>
>> - `WaitingRecord` : os registos DNS estão a aguardar configuração ou a ser validados na zona DNS do domínio. É efetuada uma verificação automática regular para verificar se o registo DNS está presente e corretamente introduzido.
>> - `ready` : os registos DNS estão presentes na zona. O DKIM pode agora ser ativado. <br>
>> - `inProduction` : o DKIM está bem configurado e ativado, pelo que está plenamente operacional. <br>
>> - `disabling` : o DKIM está em curso de desativação. <br>
>> - `deleting` : o DKIM está a ser eliminado. <br>
>>
>> Se encontrar o seguinte erro ao lançar a chamada API, isso significa que o seletor não existe ou foi eliminado. É preciso criá-lo.
>>
>> ```console
>> Not Found (404)
>> { "mensagem": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```
>>
> **E-mail Pro**
>> Aquando das suas operações no DKIM da sua plataforma E-mail Pro, utilize a chamada API abaixo para verificar o estado atual do DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1". <br>
>> - `selectorName` : introduza o nome do selecionador que criou. <br>
>> - `domainName` : introduza o domínio associado à sua plataforma E-mail Pro na qual o DKIM deve estar presente. <br>
>>
>> Verifique o valor `status:` no resultado:
>>
>> - `todo` : a tarefa foi iniciada, vai começar. <br>
>> - `WaitingRecord` : os registos DNS estão a aguardar configuração ou a ser validados na zona DNS do domínio. É efetuada uma verificação automática regular para verificar se o registo DNS está presente e corretamente introduzido. <br>
>> - `ready` : os registos DNS estão presentes na zona. O DKIM pode agora ser ativado. <br>
>> - `inProduction` : o DKIM está bem configurado e ativado, pelo que está plenamente operacional. <br>
>> - `disabling` : o DKIM está em curso de desativação. <br>
>> - `deleting` : o DKIM está a ser eliminado. <br>
>>
>> Se encontrar o seguinte erro ao lançar a chamada API, isso significa que o seletor não existe ou foi eliminado. É preciso criá-lo.
>>
>> ```console
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```
>>

#### Ativar ou alterar um seletor DKIM <a name="enable-switch"></a>

> [!warning]
>
> O seletor DKIM deve estar no estado `ready` antes de poder ser ativado.

Selecione a oferta de e-mail em questão nos separadores seguintes:

> [!tabs]
> **Exchange**
>> Para ativar o DKIM num seletor, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".<br>
>> - `selectorName` : introduza o nome de um selecionador existente.<br>
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1".<br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange na qual deseja ativar o DKIM.<br>
>>
> **E-mail Pro**
>> Para ativar o DKIM num seletor, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{Name}/dkim/{selectorName}/enable
>> >
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1". <br>
>> - `selectorName` : introduza o nome do selecionador que criou.<br>
>> - `domainName` : introduza o domínio associado à sua plataforma E-mail Pro na qual o DKIM deve estar presente.<br>
>>

> [!primary]
>
> Aquando de uma rotação de seletor DKIM, pode diretamente ativar o segundo seletor que criou para o migrar, conservando o primeiro seletor que ficará ativo enquanto todos os e-mails emitidos com este último forem bem analisados pelo destinatário.

#### Desativar e eliminar o DKIM <a name="enable-switch"></a>

> [!warning]
>
> **Para as ofertas Exchange e E-mail Pro** <br>
>
> O seletor DKIM deve estar no estado `in Production` ou `ready` antes de poder ser desativado.

Selecione a oferta de e-mail em questão nos separadores seguintes:

> [!tabs]
> **E-mail (MX Plan)**
>> Se deseja desativar o DKIM sem eliminar os seletores e o seu par de chaves, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/disable
>> <br>
>>
>> - `domain` : introduza o nome de domínio associado ao seu serviço E-mail no qual o DKIM deve estar presente. <br>
>>
>> *Exemplo de resultado:*
>>
>> ```console
>> {
>>  "domain": "guidesteam.ovh",
>>  "id": 174219594,
>>  "function": "domain/disableDKIM",
>>  "status": "todo"
>> }
>> ```
>>
> **Exchange**
>> Se deseja desativar o DKIM sem eliminar o seletor e o seu par de chaves, utilize a seguinte chamada API:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1". <br>
>> - `selectorName` : introduza o nome do seletor que deseja desativar. <br>
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1". <br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange. <br>
>>
>> Se deseja eliminar o seletor DKIM e o seu par de chaves, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou ">>private-zz11111-1". <br>
>> - `selectorName` : introduza o nome do seletor que deseja eliminar. <br>
>> - `exchangeService` : introduza o nome da sua plataforma Exchange na forma "hosted-zz111111-1" ou "private-zz11111-1". <br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma Exchange. <br>
>>
> **E-mail Pro**
>> Se deseja desativar o DKIM sem eliminar o seletor e o seu par de chaves, utilize a seguinte chamada API:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1". <br>
>> - `selectorName` : introduza o nome do seletor que deseja desativar. <br>
>> - `domainName` : introduza o domínio associado à sua plataforma E-mail Pro. <br>
>>
>> Se deseja eliminar o seletor DKIM e o seu par de chaves, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro DELETE /email/pro/{service}/domain/{Name}/dkim/{selectorName}
>> >
>>
>> - `service` : introduza o nome da sua plataforma E-mail Pro sob a forma "emailpro-zz111111-1". <br>
>> - `selectorName` : introduza o nome do seletor que deseja eliminar. <br>
>> - `domainName` : introduza o domínio associado à sua plataforma E-mail Pro. <br>
>>

### Configurar o DKIM para uma oferta de e-mail fora da sua conta OVHcloud <a name="external-dkim"></a>

Se pretender configurar a zona DNS para adicionar um registo DKIM à sua oferta, siga as instruções abaixo.

Na Área [de Cliente OVHcloud](/links/manager), clique no separador `Web Cloud`{.action} e, a seguir, em `Nomes de domínio`{.action}, na coluna da esquerda, e selecione o domínio em questão.

Clique no separador `Zona DNS`{.action} e em `Adicionar uma entrada`{.action}. Existem 3 formas de adicionar um registo para configurar o DKIM na sua zona DNS:

- [um registo DKIM](#dkim-record) : configuração que permite visualizar o conjunto dos parâmetros de um registo DKIM.
- [um registo TXT](#txt-record) : registo a utilizar quando o conjunto dos parâmetros DKIM lhe tiver sido fornecido.
- [um registo CNAME](#cname-record) : registo utilizado para uma oferta de e-mail OVHcloud ou um servidor de e-mail Microsoft.

#### Registo DKIM <a name="dkim-record"></a>

Este registo é designado DKIM na interface, mas na verdade é um registo TXT de saída. O registo DKIM tem por objetivo facilitar a leitura dos diferentes elementos de configuração do DKIM, apresentando-os sob a forma de casas independentes.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-add.png){.thumbnail}

- **Subdomínio** : introduza o nome do seletor DKIM e adicione `._domainkey` em sufixo, o seu nome de domínio será adicionado automaticamente no final do processo.

*exemplo:*

```console
  selector-name._domainkey.mydomain.ovh.
```

- **Versão (v=)** : serve para indicar a versão do DKIM. Recomenda-se a sua utilização e o seu valor predefinido é `DKIM1`.<br>
Se especificado, esta etiqueta deve ser colocada em primeiro lugar no registo e deve ser igual a "DKIM1" (sem as aspas). Os registos que comecem com uma tag "v=" com outro valor devem ser ignorados.

- **Granularidade (g=)** : permite especificar a parte "local-part" de um endereço de e-mail, ou seja, a parte situada antes de "@".<br>
Permite especificar o endereço de e-mail ou os endereços de e-mail que estão autorizados a assinar uma mensagem eletrónica com a chave DKIM do seletor.<br>
O valor predefinido de "g=" é "\*", o que significa que todos os endereços de e-mail estão autorizados a utilizar a chave de assinatura DKIM.<br>
Ao indicar um valor específico para "g=", pode limitar-se a utilização da chave a uma parte local de um endereço de e-mail específico ou a um intervalo de endereços de e-mail específicos, utilizando caracteres genéricos (por exemplo: "\*-group").

- **Algoritmo (hash) (h=)** : permite especificar os algoritmos de triagem utilizados para assinar os cabeçalhos de e-mail. Esta baliza permite definir uma lista de algoritmos de picadura que serão utilizados para gerar uma assinatura DKIM para uma determinada mensagem.

- **Tipo de chave (k=)** : especificar o algoritmo de assinatura utilizado para assinar as mensagens eletrónicas saídas. Permite aos destinatários saber como a mensagem foi assinada e qual o método utilizado para verificar a sua autenticidade.<br>
Os valores possíveis para a tag "k=" incluem "rsa" para o algoritmo de assinatura RSA e "ed25519" para o algoritmo de assinatura Ed25519. A escolha do algoritmo depende da política de segurança do remetente e da tomada a cargo pelo destinatário.

- **Notas (n=)** : serve para incluir notas de interesse para os administradores que gerem o sistema de chaves DKIM.<br>
Estas notas podem ser úteis por razões de documentação ou para ajudar os administradores a compreender ou a gerir o funcionamento da DKIM. As notas incluídas em n= não são interpretadas pelos programas nem afetam o funcionamento do DKIM.

- **Chave pública (base64) (p=)** : utilizada para introduzir os dados de chave pública DKIM, que são codificados na base64.<br>
Esta etiqueta é obrigatória na assinatura DKIM e permite aos destinatários da assinatura recuperar a chave pública necessária para verificar a autenticidade da mensagem assinada.

- **Revogar a chave pública** : se uma chave pública DKIM tiver sido revogada (por exemplo, em caso de comprometimento da chave privada), deve ser utilizado um valor vazio para a etiqueta "p=", indicando que esta chave pública deixou de ser válida. Os destinatários devem, então, enviar um erro para qualquer assinatura DKIM que faça referência a uma chave revogada.

- **Tipo de serviço (s=)**c: A localização "s=" (Service Type) é opcional e não está presente por predefinição. Permite especificar o(s) tipo(s) de serviços aos quais se aplica este registo DKIM.<br>
Os tipos de serviços são definidos utilizando uma lista de palavras-chave separadas por dois pontos ":".<br>
O destinatário deve ignorar este registo se o tipo de serviço adequado não estiver registado.<br>
A baliza "s=" destina-se a restringir a utilização das chaves para outros fins, no caso de a utilização do DKIM ser definida para outros serviços no futuro.<br>
Os tipos de serviços atualmente definidos são "\*" (todos os tipos de serviços), "e-mail" (correio eletrónico).

- **Modo de teste (t=y)** : permite aos proprietários do domínio testar a implementação do DKIM sem correr o risco de ver as mensagens rejeitadas ou marcadas como SPAM se a verificação de assinatura DKIM falhar.<br>
Quando se utiliza a flag "t=y", o destinatário não deve tratar de forma diferente as mensagens assinadas em modo de teste e as mensagens não assinadas. No entanto, o destinatário pode seguir o resultado do método de teste para ajudar os signatários.

- **Subdomínios (t=s)** : permite restringir a utilização da assinatura DKIM apenas ao nome de domínio (por exemplo: @mydomain.ovh) ou permitir o envio a partir do nome de domínio e dos seus subdomínios (por exemplo: @mydomain.ovh, @test.mydomain.ovh, @other.mydomain.ovh, etc.).

#### Registo TXT <a name="txt-record"></a>

Trata-se do tipo de registo nativo utilizado para configurar o DKIM na zona DNS do seu domínio. É necessário dominar bem a sintaxe para completá-la.

Este tipo de configuração DKIM é aconselhado quando as informações a introduzir lhe foram comunicadas pelo fornecedor do serviço de e-mail.

Para compreender a composição do registo DKIM, consulte a secção anterior deste manual intitulada "[Registo DKIM](#dkim-record)".

**Exemplo de um registo DKIM**

- subdomínio:

```console
selector-name._domainkey.mydomain.ovh.
```

- alvo:

```console
v=DKIM1;t=s;p= MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA77VDAIfyhjtoF0DIE5V7 rev1EKk4L0nxdBpD5O/jPrM4KP0kukeuB6IMpVplkkq52MSDeRcjoO50h0DmwZOr RUkyGjQwOnAh0VhY3fqkuwBYftEX7vWo8C2E1ylzimABkwPpSL62jZ1DheoXcil9 1M35wWBKtlYdXVedKjCQKOEnwTo+0hdNe38rU9NMgq6nbTIMjDntvxoVI+yF3kcx q/VpAY8BIYbcAXkVFvUyfUBABnnKpf0SfblsfcLW0Koy/FRxPDFOvnjNxXeOxMFR UI6K6PaW2WvtbJG2v+gHLY5M4tB0+/FNJU9emZfkPOk3DmRhZ8ENi7+oZa2ivUDj OQIDAQAB
```

#### Registo CNAME <a name="cname-record"></a>

O registo CNAME é um alias. Isto significa que o valor-alvo remete para um URL que fornecerá ele próprio o registo DKIM ao servidor que interrogará o registo CNAME. Este tipo de registo CNAME para configurar o DKIM é frequente no quadro da utilização de um servidor de e-mail Microsoft.

Tem exatamente o tipo de registo utilizado para ativar o DKIM num nome de domínio declarado para uma oferta Exchange OVHcloud. Este procedimento permite ao seu fornecedor de soluções de e-mail gerir por si a segurança e a atualização do DKIM. Este processo permite ao seu fornecedor de soluções de e-mail gerir a segurança e a atualização do DKIM para si.

### Testar o seu DKIM <a name="test-dkim"></a>

Aconselhamos que envie um e-mail a partir de uma conta da sua plataforma Exchange para um endereço de e-mail que verifique a assinatura DKIM aquando da receção.

Pode consultar o cabeçalho do e-mail recebido:

<pre class="bgwhite"><code>ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: &lt;test-dkim@mydomain.ovh&gt;
</code></pre>

Para obter o cabeçalho de um e-mail, consulte o nosso manual "[Obter o cabeçalho de um e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers)".

### Casos de utilização <a name="usecases"></a>

#### Como e porquê alterar o par de chaves DKIM? <a name="2selectors"></a>

> [!warning]
>
> Esta questão só é aplicável às ofertas Exchange e E-mail Pro.

Quando ativar pela primeira vez o DKIM no seu serviço de e-mail, é possível criar 2 seletores, cada um contendo um par de chaves. O segundo seletor serve de sucessor ao que está em curso de utilização.

Para evitar tentativas de desencriptação da chave DKIM, é aconselhável alterar regularmente o par de chaves. Para isso, certifique-se de que configurou corretamente os seus 2 seletores, verificando que o primeiro está em status `inProduction`e o segundo em status `ready`. Você pode verificar este status consultando a secção "[Os vários estados do DKIM](#dkim-status)".

Clique no separador seguinte da sua oferta.

> [!tabs]
> **Exchange**
>> Para migrar para o segundo seletor, utilize a seguinte chamada API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>>
>> - `organizationName` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma "hosted-zz111111-1" ou "private-zz111111-1". <br>
>> - `seletorName` : introduza o nome do seletor no qual pretende migrar. <br>
>> - `exchangeService` : introduza o nome da sua plataforma Exchange que se apresenta sob a forma "hosted-zz111111-1" ou "private-zz111111-1". <br>
>> - `domainName`: introduza o nome de domínio associado à sua plataforma Exchange. <br>
>>
> **E-mail Pro**
>> Para migrar para o segundo seletor, utilize a seguinte chamada API:
>>
>> > [!api]
>> > 
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> > 
>>
>> - `service`: introduza o nome da sua plataforma E-mail Pro que se apresenta sob a forma "emailpro-zz111111-1". <br>
>> - `seletorName` : introduza o nome do seletor no qual pretende migrar. <br>
>> - `domainName` : introduza o nome de domínio associado à sua plataforma E-mail Pro na qual o DKIM deve estar presente.<br>
>>

Depois de passar para o novo seletor, mantenha o antigo durante 7 dias antes de o eliminar e de criar um novo.

#### Porque é que o DKIM não está funcional e aparece a vermelho na Área de Cliente? <a name="reddkim"></a>

> [!warning]
>
> Esta questão só é aplicável às ofertas Exchange e E-mail Pro.

Poderá verificar que os seus e-mails não estão assinados pelo DKIM, apesar da sua ativação ou da sua parametrização. Em primeiro lugar, aceda à Área de Cliente para verificar o estado do DKIM.

Clique no separador abaixo correspondente à sua oferta para verificar o estado do DKIM na sua plataforma de e-mail.

> [!tabs]
> **Exchange**
>>
>> A partir da sua [Área de Cliente OVHcloud](/links/manager), no separador `Web Cloud`{.action}, clique em `Microsoft`{.action} e depois em `Exchange`{.action}. Por fim, clique no nome do serviço Exchange em questão.<br><br> Na rubrica `Domínios associados`{.action}, verifique a cor do ícone `DKIM` à direita do domínio em questão (ver a imagem abaixo).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/red-dkim.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> A partir da sua [Área de Cliente OVHcloud](/links/manager), no separador `Web Cloud`{.action}, clique em `E-mails Pro`{.action} e, a seguir, no nome do serviço E-mail Pro em causa.<br><br> Na rubrica `Domínios associados`{.action}, verifique a cor do ícone `DKIM` à direita do domínio em causa (ver imagem abaixo).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/red-dkim.png){.thumbnail}

Eis os 4 estados que têm por resultado o ícone DKIM a vermelho na sua Área de Cliente. Clique no separador correspondente ao seu código de erro:

> [!tabs]
> **501**
>>
>> "**Only one dkim seletor has been initialized**"<br><br>
>> Apenas um seletor DKIM está presente na sua configuração. Para nos permitir mudar para uma nova chave, quando necessário, é necessário configurar os 2 seletores fornecidos pelo serviço.<br><br>
>> Para corrigir este erro :
>>
>> - Verifique o estado dos seletores DKIM para identificar o que deve ser configurado. Para isso, consulte a secção "[Os diferentes estados do DKIM](#dkim-status)" deste guia.
>> - Depois de identificar o seletor a configurar, siga as etapas da secção "[Configuração completa do DKIM](#firststep)" neste guia, de acordo com a sua oferta (Exchange ou E-mail Pro), aplicando-a apenas ao seletor em questão.
>> Aguarde até 24 horas após a configuração do seletor.
>>
> **502**
>>
>> "**One DKIM configuration task is in error**"<br><br>
>> Ocorreu um erro aquando da configuração do DKIM. Se a sua configuração ainda estiver nesse estado, após 24 horas, convidamo-lo a abrir um [ticket junto do suporte](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
> **503**
>>
>> "**CNAME record is wrong**"<br><br>
>> O valor do registo CNAME necessário para a configuração do DKIM não foi introduzido corretamente. Deve configurar corretamente a zona DNS do nome de domínio associado.
>> Para configurar a zona DNS, recupere os valores do registo CNAME que se apresenta :
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-503.png){.thumbnail}
>>
>> Usando o exemplo da captura acima, o domínio é "**mydomain.ovh**" e é necessário configurar o seletor "**2**". Aqui, é preciso adicionar um registo CNAME que tem por subdomínio o valor `ovhex1234567-selector2.domainkey.mydomain.ovh` e como alvo `ovhex1234567-selector2.domainkey.7890.dkim.mail.ovh.net`.<br><br>
>> Depois de configurar a sua zona DNS, aguarde o tempo da propagação DNS (24h no máximo)
>>
> **504**
>>
>> "**One CNAME record is missing**"<br><br>
>> Falta o valor do registo CNAME necessário para a configuração do DKIM. Deve configurar a zona DNS do nome de domínio associado.
>> Para configurar a zona DNS, recupere os valores do registo CNAME que se apresenta :
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-503.png){.thumbnail}
>>
>> Usando o exemplo da captura acima, o domínio é "**mydomain.ovh**" e é necessário configurar o seletor "**2**". Aqui, é preciso adicionar um registo CNAME que tem por subdomínio o valor `ovhex1234567-seletor2.domainkey.mydomain.ovh` e como alvo `ovhex1234567-selector2.domainkey.890123.dkim.mail.ovh.net`.<br><br>
>> Depois de configurar a sua zona DNS, aguarde o tempo da propagação DNS (24h no máximo)
>>

#### A partir da interface API OVHcloud, como compreender o estado do DKIM que não funciona? <a name="api-error"></a>

Se utilizar as API da OVHcloud para configurar o seu DKIM e este não estiver funcional, consulte a secção "[Os diferentes estados do DKIM](#dkim-status)" deste guia para identificar o estado dos seus seletores.

Abaixo irá encontrar os estados que podem bloquear o funcionamento do seu DKIM e a solução adequada a cada situação.

> [!tabs]
> **Exchange e E-mail Pro**
>> - `WaitingRecord`: os registos DNS estão a aguardar uma configuração ou em curso de validação na zona DNS do domínio. É efetuada uma verificação automática regular para verificar se o registo DNS está presente e corretamente indicado. Consoante a sua oferta, siga a **etapa 5** na secção "[Configuração completa do DKIM](#firststep)" para configurar corretamente a zona DNS do domínio em questão.
>> - `ready`: os registos DNS estão presentes na zona. O DKIM pode agora ser ativado. Basta que ative o seletor recorrendo à secção "[Ativar ou alterar um seletor DKIM](#enable-switch)".
>> - `deleting`: o DKIM está em curso de eliminação. Após a eliminação, deverá seguir a secção "[Configuração completa do DKIM](#firststep)".
>> - `disabling`: o DKIM está em curso de desativação. Após esta operação, poderá ativar o seletor recorrendo à secção "[Ativar ou alterar um seletor DKIM](#enable-switch)".
>> - `todo`: a tarefa foi inicializada e deverá iniciar-se. Acima das 24 horas, se o seletor ainda estiver nesse estado, convidamo-lo a abrir um [ticket junto do suporte](https://help.ovhcloud.com/csm?id=csm_get_help) especificando o número do seletor em causa.
> **E-mails (MX Plan)**
>> - `disabled`: O DKIM está desativado, ainda não foi configurado ou foi desativado pela API. <br>
>> - `modifying`: A configuração do DKIM está em curso, é necessário aguardar até ao fim do processo.<br>
>> - `toConfigure`: A configuração do DKIM está aguardando os parâmetros DNS do domínio. Os registos DNS devem ser preenchidos manualmente na zona do domínio. Para isso, clique na etapa "[Configuração completa do DKIM](#confemail)" deste guia. <br>
>> - `error`: O processo de instalação encontrou um erro. Sugerimos que abra um [ticket junto do suporte](https://help.ovhcloud.com/csm?id=csm_get_help) especificando o domínio em causa.
>>
>> Ao nível dos seletores também possui 2 estados relativos a um erro:
>>
>> - `toSet`: o seletor não está configurado na zona DNS do domínio. Pressione [etapa 4 "configuração completa do DKIM" for E-mails (MX Plan)](#confemail).
>> - `toFix`: o seletor foi corretamente configurado na zona DNS do domínio, mas os valores estão incorretos. Pressione [etapa 4 "configuração completa do DKIM" for E-mails (MX Plan)](#confemail).

## Saiba mais

Fale com nossa [comunidade de utilizadores](/links/community).