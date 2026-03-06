---
title: "Obter o cabeçalho e o ficheiro .eml de um e-mail"
excerpt: "Saiba como obter o cabeçalho de um e-mail ou extrair um ficheiro .eml a partir do seu cliente de e-mail, webmail ou aplicação externa"
updated: 2026-03-06
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

O cabeçalho de um e-mail permite traçar o caminho percorrido pelo e-mail na rede, do remetente ao destinatário.<br>
Permite identificar um e-mail malicioso ou detetar um atraso na receção.

Cada e-mail recebido possui um cabeçalho (*header*) que não é apresentado por defeito quando consulta o seu e-mail. No entanto, pode recuperá-lo no seu cliente de e-mail ou no seu webmail.

Também pode extrair o e-mail na sua totalidade sob a forma de ficheiro `.eml`. Este ficheiro pode ser-lhe solicitado para analisar um e-mail malicioso que recebeu.<br>
Para recuperar um ficheiro `.eml`, consulte a secção [webmail](#webmail).

**Saiba como obter o cabeçalho de um e-mail e extrair um ficheiro .eml a partir do seu cliente de e-mail.**

## Requisitos

- Dispor de um endereço de e-mail numa das nossas [soluções de e-mail OVHcloud](/links/web/emails) ou numa solução externa.
- Ter acesso ao endereço de e-mail através do seu webmail ou de um software de e-mail.

## Instruções

### Compreender o conteúdo de um cabeçalho

O cabeçalho é composto por vários elementos que indicam o percurso do e-mail, hierarquizados de forma anticronológica, e por informações suplementares.<br>
Encontra abaixo uma lista não exaustiva dos elementos que podem compor um cabeçalho, bem como o seu significado.

- O campo `Received` está presente no cabeçalho a cada passagem do e-mail por um servidor de envio (SMTP). Geralmente encontra-se o nome de host do servidor com o seu endereço IP e a data. Os campos `Received` são classificados da passagem mais recente à mais antiga:
<pre class="bgwhite"><code>
Received: from MX Plan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Aqui o e-mail foi transmitido do servidor MX Plan7.mail.ovh.net para o servidor mo3005.mail-out.ovh.net a 30 de junho de 2021 às 13:12:40 (fuso horário UTC)*

- O campo `Return-Path` corresponde ao endereço de retorno quando o envio da mensagem falhou. O endereço de retorno é geralmente o do remetente.
<pre class="bgwhite"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- O campo `From` indica o endereço do remetente do e-mail e o seu nome de apresentação.
<pre class="bgwhite"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- O campo `To` indica o endereço do destinatário do e-mail e o seu nome de apresentação.
<pre class="bgwhite"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- O campo `Subject` indica o assunto do e-mail.
<pre class="bgwhite"><code>
Subject: Hello my friend
</code></pre>

- O campo `Message-ID` indica o identificador único do e-mail e termina com o nome do servidor de envio (depois da "@").
<pre class="bgwhite"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- O campo `Received-SPF` apresenta o resultado do controlo [SPF](/pages/web_cloud/domains/dns_zone_spf) efetuado sobre o nome de domínio do remetente. O argumento `client-ip` permite obter o endereço IP do servidor que enviou o e-mail.
<pre class="bgwhite"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh
</code></pre>

- Os campos `X-` são campos personalizados que complementam os campos standard. São implementados pelos servidores através dos quais os e-mails transitam.
<pre class="bgwhite"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE:
</code></pre>

### Obter um cabeçalho num software de e-mail

#### Microsoft Outlook

##### **Obter o cabeçalho**

Existem duas versões do Outlook para Windows: **Outlook clássico** e o **Novo Outlook**. Para identificar a sua versão, escreva "Outlook" na barra de pesquisa do Windows. Se a menção "(clássico)" aparecer, está a utilizar o Outlook clássico. Caso contrário, trata-se do Novo Outlook.

![Outlook Windows - identificar a versão](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Outlook clássico:**

1. Faça duplo clique no e-mail para o abrir numa janela separada.
2. Na nova janela, clique em `Ficheiro`{.action} no canto superior esquerdo.
3. Selecione `Informações`{.action} à esquerda e clique em `Propriedades`{.action}.
4. O cabeçalho completo do e-mail aparece no quadro inferior. Selecione o texto na íntegra e copie-o para um ficheiro.

![Cabeçalho completo no Outlook](images/classic-outlook-01.png){.thumbnail}

**Novo Outlook:**

1. Abra o e-mail que pretende.
2. Faça **clique com o botão direito** no e-mail.
3. Selecione `Ver`{.action} e depois `Ver detalhes da mensagem`{.action}.
4. O cabeçalho completo do e-mail aparece no painel de detalhes da mensagem. Selecione o texto na íntegra e copie-o para um ficheiro.

![Cabeçalho completo no Outlook](images/new-outlook-01.png){.thumbnail}

##### **Obter o ficheiro .eml**

**Outlook clássico:**

1. Selecione o e-mail na sua caixa de entrada (não o abra).
2. Clique em `Ficheiro`{.action} na barra de menus.
3. Clique em `Guardar como`{.action}.
4. No menu pendente "Guardar com o tipo", selecione **Formato de Mensagem do Outlook - Unicode (.msg)**. Escolha uma localização no seu computador (por exemplo, o Ambiente de Trabalho) e clique em `Guardar`{.action}.

Também pode **arrastar e largar** o e-mail da sua caixa de entrada diretamente para o Ambiente de Trabalho. Isto cria um ficheiro `.msg` que pode anexar ao seu relatório.

![Guardar msg no Outlook](images/classic-outlook-02.png){.thumbnail}

**Novo Outlook:**

1. Na lista de mensagens, faça **clique com o botão direito** no e-mail.
2. Selecione `Guardar como`{.action} e depois `Guardar como ficheiro EML`{.action}.
3. Escolha uma localização no seu computador e clique em `Guardar`{.action}.

![Guardar um ficheiro EML no Novo Outlook](images/new-outlook-02.png){.thumbnail}

#### Mozilla Thunderbird

##### **Obter o cabeçalho**

1. Selecione o e-mail que pretende.
2. Prima simultaneamente as teclas `Ctrl` \+ `U` (`Cmd` \+ `U` no macOS).
3. O cabeçalho completo do e-mail aparece numa janela separada. Selecione o texto na íntegra e copie-o para um ficheiro.

![Cabeçalho completo no Thunderbird](images/thunderbird-01.png){.thumbnail}

##### **Obter o ficheiro .eml**

1. Selecione o e-mail que pretende.
2. Prima simultaneamente as teclas `Ctrl` \+ `S` (`Cmd` \+ `S` no macOS).
3. O ficheiro é guardado por defeito no formato `.eml`.

#### Mail do macOS

##### **Obter o cabeçalho**

1. Selecione o e-mail que pretende.
2. Prima simultaneamente as teclas `Cmd` \+ `Shift` \+ `H`.
3. O cabeçalho completo do e-mail aparece. Selecione o texto a cinzento e copie-o para um ficheiro.

![Cabeçalho completo no Mail do macOS](images/mailmacos-01.png){.thumbnail}

##### **Obter o ficheiro .eml**

1. Selecione o e-mail que pretende.
2. Prima simultaneamente as teclas `Cmd` \+ `S`. O ficheiro `.eml` é criado automaticamente. Selecione o formato `Fonte da mensagem em bruto`.
3. Escolha uma localização no seu computador e clique em `Guardar`{.action}.

![Guardar um eml a partir do Mail do macOS](images/mailmacos-02.png){.thumbnail}

### Obter um cabeçalho num webmail <a name="webmail"></a>

#### Roundcube

##### **Obter o cabeçalho**

1. Selecione o e-mail que pretende.
2. Clique no botão `... Mais`{.action} e depois em `< > Ver código-fonte`{.action}.
3. Abre-se uma nova janela com o cabeçalho completo do e-mail. Selecione o texto na íntegra e copie-o para um ficheiro.

![Ver código-fonte no Roundcube](images/roundcube01.png){.thumbnail}

##### **Obter o ficheiro .eml**

1. Selecione o e-mail que pretende.
2. Clique no botão `... Mais`{.action} e depois em `Transferir (.eml)`{.action}.

![Transferir ficheiro eml no Roundcube](images/roundcube02.png){.thumbnail}

#### Outlook Web App (OWA) <a name="owa"></a>

##### **Obter o cabeçalho**

1. Selecione o e-mail cujo cabeçalho deseja visualizar.
2. Clique **na seta** à direita de `Responder a todos`{.action} e depois em `Ver detalhes da mensagem`{.action}.
3. Abre-se uma nova janela com o cabeçalho completo do e-mail, o que lhe permite transferi-lo.

![Detalhes da mensagem no OWA](images/owa01.png){.thumbnail}

Consulte também o nosso tutorial em vídeo:

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Obter o ficheiro .eml**

1. Clique em `(+) Novo`{.action} para criar um novo e-mail.
2. Selecione o e-mail que deseja extrair e arraste-o para o conteúdo da nova mensagem.
3. Clique na seta para baixo junto ao anexo gerado e depois em `Transferir`{.action} para guardar o ficheiro no seu computador.

![Extrair um ficheiro eml a partir do OWA](images/owa02.gif){.thumbnail}

#### Zimbra

##### **Obter o cabeçalho**

1. Selecione o e-mail que pretende.
2. Clique em `Mais`{.action} na barra de ações e selecione `Mostrar original`{.action}.
3. Abre-se uma nova janela com o cabeçalho completo e o conteúdo bruto do e-mail.

![Detalhes da mensagem no Zimbra](images/zimbra-01.png){.thumbnail}

##### **Obter o ficheiro .eml**

1. Selecione o e-mail que pretende.
2. Clique em `Mais`{.action} na barra de ações e selecione `Mostrar original`{.action}.
3. Na janela que se abre, utilize o atalho `Ctrl` \+ `S` (ou `Cmd` \+ `S` no macOS) para guardar a página como ficheiro `.eml`.

### Obter um cabeçalho noutro cliente de e-mail

#### Gmail

##### **Obter o cabeçalho**

1. Selecione o e-mail em causa.
2. Clique nos 3 pontos verticais à direita e em `Mostrar mensagem original`{.action}.
3. Abre-se uma nova janela com o cabeçalho completo do e-mail.

![Mostrar a origem da mensagem no Gmail](images/gmail01.png){.thumbnail}

##### **Obter o ficheiro .eml**

1. Selecione o e-mail em causa.
2. Clique nos 3 pontos verticais à direita e selecione `Transferir mensagem`{.action}.

#### Outlook.com

Para obter o cabeçalho ou extrair o ficheiro `.eml` a partir da interface webmail &#60;Outlook.com&#62;, consulte a secção [Outlook Web App](#owa) deste guia.

## Quer saber mais?

[FAQ e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Fale com a nossa [comunidade de utilizadores](/links/community).
