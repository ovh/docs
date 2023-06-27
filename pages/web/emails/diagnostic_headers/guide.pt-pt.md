---
title: "Obter o cabeçalho de um e-mail"
legacy_guide_number: 1365
excerpt: 'Saiba como obter um cabeçalho de e-mail no seu cliente de e-mail'
updated: 2021-11-19
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #fff; 
   color: #000;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.90em;
   color: #000;
 }
 .small {
     font-size: 0.90em;
 }
</style>

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 19/11/2021**

## Objetivo

Um cabeçalho de e-mail tem como função traçar o caminho percorrido por este e-mail na rede, do remetente ao destinatário.<br>
Permite, nomeadamente, identificar um e-mail malicioso ou detetar um atraso na receção.

Cada e-mail recebido tem um cabeçalho (*header*) que não aparece de forma padrão quando consulta o seu e-mail. No entanto, pode recuperá-lo no seu cliente de e-mail ou webmail.

Também pode extrair o e-mail na sua totalidade sob a forma de ficheiro `.eml`. Este ficheiro pode ser-lhe pedido para analisar um e-mail malicioso que recebeu.<br>
Para recuperar um ficheiro `.eml`, consulte a secção [Webmail](#webmail).

**Saiba como obter um cabeçalho de e-mail no seu cliente de e-mail.**

## Requisitos

- Dispor de um endereço de e-mail numa das nossas [soluções de e-mail OVHcloud](https://www.ovhcloud.com/pt/emails/) ou numa solução externa.
- Ter acesso ao endereço de e-mail através do seu webmail ou de um software de correio eletrónico.

## Instruções

### Compreender o conteúdo de um cabeçalho

O cabeçalho é composto por vários elementos que indicam o percurso do e-mail. É composto por elementos hierarquizados de forma cronológica, desde os mais recentes até aos mais antigos, e por informações suplementares.<br>
Apresentamos a seguir uma lista não exaustiva dos elementos que podem compor um cabeçalho, bem como o seu significado. 

- O campo `Received` está presente no cabeçalho a cada passagem do e-mail num servidor de envio (SMTP). Geralmente, o nome do host do servidor é encontrado com o seu endereço IP e a data. Os campos `Received` são classificados da passagem mais recente à passagem mais antiga num servidor:
<pre class="console"><code>
Received: from mxplan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Aqui, o e-mail foi enviado do servidor mxplan7.mail.ovh.net para o servidor mo3005.mail-out.ovh.net a 30 de junho de 2021 às 13h12:40 (Fuseau Horaire UTC)*

- O campo `Return-Path` corresponde ao endereço de retorno quando o envio da mensagem falhou. o endereço de retorno é geralmente aquele que realizou o envio.
<pre class="console"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- O campo `From` designa o endereço do remetente do e-mail e o seu nome de apresentação.
<pre class="console"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- O campo `To` designa o endereço do destinatário do e-mail e o seu nome de apresentação.
<pre class="console"><code>
To: Robert &lt;robert@hisdomain.ovh&gt; 
</code></pre>

- O campo `Subject` designa o objeto do e-mail.
<pre class="console"><code>
Subject: Hello my friend
</code></pre>

- O campo `Message-ID` designa o identificador único do e-mail e termina com o nome do servidor de envio (depois de "@"). 
<pre class="console"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- O campo `Received-SPF` apresenta o resultado do controlo [SPF](/pages/web/domains/dns_zone_spf) efetuado no nome de domínio do remetente. O argumento `cliente-ip` permite consultar o endereço de IP do servidor que serviu para enviar o e-mail. 
<pre class="console"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; cliente-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh 

</code></pre>

- Os campos `X-` são campos personalizados, servem de complemento aos campos standard. São implementados pelos servidores em que os e-mails transitam.

<pre class="console"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE: 

</code></pre>

### Obter um cabeçalho num software de e-mail

#### Microsoft Outlook 

Para ler o cabeçalho, abra o e-mail à sua escolha numa janela separada, ao clicar duas vezes no mesmo.

Na nova janela, clique em `Ficheiro`{.action} no canto superior direito.

![emails](images/outlook01.png){.thumbnail}

De seguida, selecione `Informações`{.action} à esquerda e clique em `Propriedades`{.action}.

![emails](images/outlook02.png){.thumbnail}

O cabeçalho completo do e-mail aparece na casa inferior. Pode selecionar o conjunto do texto e copiá-lo para um ficheiro.

![emails](images/outlook03.png){.thumbnail}

#### Mozilla Thunderbird

Para mostrar o cabeçalho, selecione o e-mail à sua escolha e prima simultaneamente os teclados `Ctrl` + `U`.

![emails](images/thunderbird01.png){.thumbnail}

O cabeçalho completo do e-mail aparece numa janela separada, pode selecionar o conjunto do texto e copiá-lo para um ficheiro.

#### Mail de macOS

Para mostrar o cabeçalho, selecione o e-mail à sua escolha, aceda à `Apresentação`{.action} na barra de menu superior e, a seguir, na `Mensagem`{.action} e clique em `Todos os cabeçalhos`.

![emails](images/mailmac01.png){.thumbnail}

O cabeçalho completo do e-mail aparece numa janela separada. Pode selecionar o conjunto do texto e copiá-lo para um ficheiro.

### Obter um cabeçalho num webmail <a name="webmail"></a>

#### Roundcube

##### **Obter o cabeçalho**

Para apresentar o cabeçalho, selecione o e-mail que preferir. Clique no botão `.. Mais`{.action} e depois `< > Ver a fonte`{.action}.

![emails](images/roundcube01.png){.thumbnail}

Abre-se uma nova janela com o cabeçalho completo do e-mail. Pode selecionar o conjunto do texto e copiá-lo para um ficheiro.

##### **Obter o ficheiro .eml**

Para descarregar o ficheiro `.eml`, selecione o e-mail à sua escolha. Clique no botão `.. Mais`{.action} e depois em `Transferir (.eml)`{.action}.

![emails](images/roundcube02.png){.thumbnail}

#### Outlook Web Application (OWA) <a name="owa"></a>

##### **Obter o cabeçalho**

Selecione o e-mail cujo cabeçalho deseja apresentar. Clique **na seta** à direita de `Responder a todos`{.action} e em `Apresentar os detalhes da mensagem`{.action}. Abre-se uma nova janela com o cabeçalho completo do e-mail, o que lhe permite descarregá-lo.

![emails](images/owa01.png){.thumbnail}

Consulte também o nosso tutorial em vídeo:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UeNdpFwdXm0?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Obter o ficheiro .eml**

Para descarregar o ficheiro `.eml`, clique em `(+) Novo`{.action} para criar um novo e-mail. 

Selecione o e-mail que deseja extrair e clique no conteúdo da nova mensagem. 

Clique na seta virada para baixo junto ao anexo que acabou de gerar e, a seguir, em `Transferir`{.action} o ficheiro para a sua máquina.

![emails](images/owa02.gif){.thumbnail}

### Obter um cabeçalho noutro cliente de e-mail

#### Gmail (versão em inglês)

Para obter o cabeçalho, selecione o e-mail em causa e clique nos 3 pontos verticais à direita e, a seguir, em `Mostrar a fonte da mensagem`{.action}. Abre-se uma nova janela com o cabeçalho completo do e-mail, o que lhe permite também carregá-lo no formato `.eml`.

![emails](images/gmail01.png){.thumbnail}

#### Outlook.com (versão em francês)

Para apresentar o cabeçalho na interface webmail <Outlook.com>, consulte a secção [Outlook Web Application](#owa) deste guia.

## Saiba mais

[FAQ E-mail](/pages/web/emails/faq-emails)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
