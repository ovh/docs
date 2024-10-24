---
title: 'MX Plan - Configure sua conta de e-mail no Mail para macOS'
excerpt: Saiba como configurar o endereço de e-mail MX Plan no Mail do macOS
updated: 2024-10-22
---

## Objetivo

As contas MX Plan podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir. A aplicação Mail no macOS está disponível gratuitamente em todos os Mac.

**Saiba como configurar o seu endereço de e-mail MX Plan no Mail do macOS.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção "Quer saber mais?" deste guia.

## Requisitos

- Ter um endereço de e-mail MX Plan (incluído no serviço MX Plan ou num serviço de [alojamento web da OVHcloud](/links/web/hosting)).
- Ter o software Mail instalado no seu Mac.
- Dispor das credenciais do endereço de e-mail que pretende configurar.

## Instruções

### Adicionar a conta

- **No início da aplicação**: um assistente de configuração aparece diretamente e convida-o a escolher o seu tipo de conta.

- **Se uma conta já estiver configurada**: clique em `Mail`{.action} na barra de menu no topo do ecrã e, a seguir, em `Contas`{.action}.

Siga as etapas de instalação, clicando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Selecione `Outra conta de Mail`{.action} e clique em `Conta de Mail`{.action}.<br><br>
>> ![mailmac](images/mail-mac-email01.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 2**
>>
>> Na janela "**Adicionar conta de e-mail**", introduza as seguintes informações: <br><br>
>> - Um **Nome** para a sua conta de e-mail
>> - O seu **Endereço de e-mail**
>> - A **Palavra-passe** do seu endereço de e-mail<br>
>> ![mailmac](images/mail-mac-email02.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 3**
>>
>> Introduza as seguintes informações na janela:
>>
>> - **Endereço de correio eletrónico**
>> - **Nome de utilizador**: Introduza o seu endereço de correio eletrónico completo
>> - **Palavra-passe**
>> - **Tipo de conta** : Selecione `IMAP` (recomendado) ou `POP`
>> - **Servidor de receção**:<br>- **EUROPE**: Introduza `imap.mail.ovh.net` ou `ssl0.ovh.net`<br>- **AMÉRICA/ÁSIA**: Introduza `imap.mail.ovh.ca`
>> - **Servidor de envio**:<br>- **EUROPE**: Introduza `smtp.mail.ovh.net` ou `ssl0.ovh.net`<br>- **AMÉRICA/ÁSIA** : Introduza `smtp.mail.ovh.ca`
>>
>> Para finalizar a configuração, clique em `Ligar`{.action}
>>
>> > [!warning]
>> >
>> > É normal que a mensagem seja apresentada a vermelho "**Não é possível verificar o nome de conta ou a palavra-passe**" quando a janela é apresentada pela primeira vez. No entanto, se esta mensagem persistir após a validação, as informações introduzidas estão incorretas.<br><br>
>>
>> ![mailmac](images/mail-mac-email03.png){.thumbnail .w-400 .h-600}

> [!warning]
>
> Se, seguindo os passos de configuração abaixo, encontrar um problema de envio ou receção, vá para [Alterar definições existentes](#modify-settings)

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que permite aceder ao seu endereço de e-mail a partir de um browser. disponível no endereço [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o nosso manual [Utilizar o Outlook Web App com uma conta Exchange](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ou utilizar o seu endereço de e-mail a partir do [webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

### Recuperar um backup do seu endereço de e-mail

Se tiver de efetuar uma operação suscetível de causar a perda dos dados da sua conta de e-mail, sugerimos que efetue uma cópia de segurança da conta de e-mail em questão. Para isso, consulte o parágrafo "**Exportar**" na secção "**Mail para Mac OS**" do nosso manual [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar).

### Alterar os parâmetros existentes <a name="modify-settings"></a>

Se a sua conta de e-mail já estiver configurada e for necessário aceder às definições da conta para modificá-las:

- Clique em `Mail`{.action} na barra de menu no topo do seu ecrã e, a seguir, clique em `Preferências`{.action}.
- Selecione a conta correspondente na coluna da esquerda e, a seguir, clique em `Definições do servidor`{.action}.
- Na secção `Servidor de receção (POP)` ou `Servidor de receção (IMAP)`, introduza o seu endereço de e-mail completo na caixa `Nome de utilizador`{.action}, bem como o `Palavra-passe`{.action} associado na caixa prevista para esse efeito.
- Na secção `Servidor de envio (SMTP)`, introduza o seu endereço de e-mail completo na caixa `Nome de utilizador`{.action}, bem como a `Palavra-passe`{.action} associada na caixa prevista para esse efeito.
- Desmarque as caixas de verificação `Gerir automaticamente as configurações de ligação`{.action} para fazer aparecer os parâmetros de `Porta`{.action} e `Autenticação`{.action}.
- Certifique-se de que as caixas `Utilizar TLS/SSL`{.action} estão selecionadas.
- Nos menus suspensos `Autenticação`{.action}, verifique se `Palavra-passe` foi selecionada.
- Para as caixas `Nome do host`{.action} e `Porta`{.action}, consulte os valores da rubrica "[Lembrança dos parâmetros POP, IMAP e SMTP](#popimap-settings)". **Verifique se o tipo de servidor (IMAP, POP e SMTP) corresponde à sua região (Europa ou Ásia-Pacífico)**.

Para finalizar a configuração, clique em `Guardar`{.action}.

![mailmac](images/mail-mac-email04.png){.thumbnail .w-400 .h-600}

> [!primary]
>
> **Alterar a configuração**
>
> Se o seu endereço de e-mail estiver configurado em **IMAP** e pretender alterar esta configuração para **POP**, deve eliminar a conta no Mail do MacOS e recriá-la em **POP**.

### Lembrete dos parâmetros POP, IMAP e SMTP <a name="popimap-settings"></a>

Para a receção dos e-mails, ao escolher o tipo de conta, recomendamos uma utilização em **IMAP**. No entanto, pode selecionar **POP**.

> [!warning]
>
> É necessário anotar o valor correspondente à sua localização (**EUROPE** ou **AMÉRICA/ÁSIA-PACÍFICO**)

- **Para uma configuração em POP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail|
|Servidor **EUROPE** (entrada)|pop.mail.ovh.net **ou** ssl0.ovh.net|
|Servidor **AMÉRICA/ÁSIA-PACÍFICO** (entrada)|pop.mail.ovh.ca|
|Porta|995|
|Tipo de segurança|SSL/TLS|

- **Para uma configuração em IMAP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo*|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail|
|Servidor **EUROPA** (entrada)|imap.mail.ovh.net **ou** ssl0.ovh.net|
|Servidor **AMÉRICA/ÁSIA-PACÍFICO** (entrada)|imap.mail.ovh.ca|
|Porta|993|
|Tipo de segurança|SSL/TLS|

Se necessita de inserir manualmente as definições **SMTP** nas preferências da conta para enviar uma mensagem de correio eletrónico, consulte as seguintes definições:

- **Configuração SMTP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo*|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail|
|Servidor **EUROPA** (de saída)|smtp.mail.ovh.net **ou** ssl0.ovh.net|
|Servidor **AMÉRICA/ÁSIA-PACÍFICO** (de saída)|smtp.mail.ovh.ca|
|Porta|465|
|Tipo de segurança|SSL/TLS|

> [!primary]
>
> **Alterar a configuração**
>
> Se o seu endereço de e-mail estiver configurado em **IMAP** e pretender alterar esta configuração para **POP**, deve eliminar a conta no Mail do MacOS e recriá-la em **POP**.

### O que fazer se não conseguir receber/enviar os meus e-mails?

- Se verificar que o ícone apresentado na captura de ecrã abaixo aparece, a ligação é de desconexão à rede. Verifique se a ligação à Internet está a funcionar corretamente.

![mailmac](images/mail-mac-disconnect.png){.thumbnail .w-400 .h-600}

- Se verificar que o ícone apresentado na captura de ecrã abaixo aparece, a sincronização não será bem sucedida. Verifique as definições de configuração da sua conta de e-mail na secção [Editar definições existentes](#modify-settings).

![mailmac](images/mail-mac-fail.png){.thumbnail .w-400 .h-600}

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Mail no macOS, consulte [Centro de Ajuda da Apple](https://support.apple.com/pt-pt/guide/mail/mail35803/mac).

[MX Plan - Configurar a sua conta de e-mail no Mail para iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)

[E-mail Pro - Configurar a sua conta de e-mail no Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)<br>
[E-mail Pro - Configurar a sua conta de e-mail no Mail para o iPhone e o iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios)

[Exchange - Configurar a sua conta de e-mail no Mail do macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios)<br>
[Exchange - Configurar a sua conta de e-mail no Mail para o iPhone e o iPad](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos/guide.pt-pt.md)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).