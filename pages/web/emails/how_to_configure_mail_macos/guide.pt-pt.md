---
title: 'Configurar um endereço de e-mail no Mail do macOS'
slug: email_partilhado_guia_de_configuracao_de_mail_para_mac_-_el_capitan
section: Configuração num computador
order: 03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 13/06/2022**

## Objetivo

As contas MX Plan podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir. A aplicação Mail no macOS está disponível gratuitamente em todos os Mac.

**Saiba como configurar o seu endereço de e-mail MX Plan no Mail do macOS.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção "Quer saber mais?" deste guia.
> 

## Requisitos

- Ter um endereço de e-mail MX Plan (incluído no serviço MX Plan ou num serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/)).
- Ter o software Mail instalado no seu Mac.
- Dispor das credenciais do endereço de e-mail que pretende configurar.
 
## Instruções

### Adicionar a conta

- **No início da aplicação**: um assistente de configuração aparece diretamente e convida-o a escolher o seu tipo de conta.

- **Se uma conta já estiver configurada**: clique em `Mail`{.action} na barra de menu no topo do ecrã e, a seguir, em `Contas`{.action}.

| | |
|---|---|
|![mailmac](images/mail-mac-mxplan01.png){.thumbnail}|Selecione `Outra conta Mail`{.action} e clique em `Conta Mail`{.action}.|
|Introduza na janela "**Adicionar uma conta Mail**" as seguintes informações: <br>- O **Nome** da sua conta de e-mail <br>- O seu **endereço de e-mail** <br>- A **password** do seu endereço de e-mail |![mailmac](images/mail-mac-mxplan02.png){.thumbnail}|
|![mailmac](images/mail-mac-mxplan03.png){.thumbnail}|Na janela seguinte, preencha as informações: <br>- Deixe o seu **endereço de e-mail** já introduzido <br>- Introduza o seu endereço de e-mail completo em **Nome de utilizador** <br>- Deixe a sua **password** já introduzida <br>- Selecione `POP` ou `IMAP`(recomendado) no **Tipo de conta**<br>- Introduza `ssl0.ovh.net` no **Servidor de receção** <br>- Introduza igualmente `ssl0.ovh.net` no **Servidor de envio**<br><br>Para terminar a configuração, clique em `Ligar-se`{.action}|

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que permite aceder ao seu endereço de e-mail a partir de um browser. disponível no endereço <https://www.ovh.com/pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o nosso manual [Utilizar o Outlook Web App com uma conta Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_2016_guia_de_utilizacao_do_outlook_web_app/) ou utilizar o seu endereço de e-mail a partir do [webmail RoundCube](https://docs.ovh.com/pt/emails/webmail_guia_de_utilizacao_do_roundcube/).

### Recuperar um backup do seu endereço de e-mail

Se tiver de efetuar uma operação suscetível de causar a perda dos dados da sua conta de e-mail, sugerimos que efetue uma cópia de segurança da conta de e-mail em questão. Para isso, consulte o parágrafo "**Exportar**" na secção "**Mail para Mac OS**" do nosso manual [Migrar manualmente o seu endereço de e-mail](https://docs.ovh.com/pt/emails/migrar-os-enderecos-email-manualmente/#exportar).

### Modificar os parâmetros existentes

Se a sua conta de e-mail já está configurada e tem de aceder aos parâmetros da conta para os alterar:

- Clique em `Mail`{.action} na barra de menu no topo do ecrã e, a seguir, em `Preferências`{.action}.
- Selecione a conta em causa na coluna da esquerda e clique em `Regulações do servidor`{.action}.

![mailmac](images/mail-mac-mxplan04.png){.thumbnail}

### Informações complementares

No caso de uma configuração em **IMAP**, os valores são os seguintes:

|Tipo de servidor|Nome do servidor|Método de encriptação|Porta|
|---|---|---|---|
|Entrando (IMAP)|pro**?**.mail.ovh.net (a menção **"?"** é substituída pelo número do seu servidor)|SSL/TLS|993|
|Saída (SMTP)|pro**?**.mail.ovh.net (a menção **"?"** é substituída pelo número do seu servidor)|SSL/TLS|465|

No âmbito de uma configuração em **POP**, os valores são os seguintes:

|Tipo de servidor|Nome do servidor|Método de encriptação|Porta|
|---|---|---|---|
|Entrando(POP)|pro**?**.mail.ovh.net (a menção **"?"** é substituída pelo número do seu servidor)|SSL/TLS|995|
|Saída (SMTP)|pro**?**.mail.ovh.net (a menção **"?"** é substituída pelo número do seu servidor)|SSL/TLS|465|

> [!primary]
>
> **Alterar configuração**
>
> Quando configura o seu endereço de e-mail em **IMAP** e deseja alterar a configuração em **POP**, é necessário eliminar a conta de Mail do Mac e recriá-la em **POP** para alterar a configuração.

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
