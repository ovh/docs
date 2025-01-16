---
title: "MX Plan - Configurar a sua conta de e-mail no Outlook para Android"
excerpt: "Descubra como configurar o seu endereço de e-mail MX Plan na aplicação móvel Outlook para Android"
updated: 2024-11-26
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objetivo

As contas MX Plan podem ser configuradas em diferentes softwares de e-mail compatíveis. Isto permite-lhe utilizar o seu endereço de e-mail a partir do dispositivo que preferir. A aplicação Outlook da Microsoft para Android está disponível gratuitamente a partir da Google Play Store.

**Saiba como configurar o endereço de e-mail MX Plan na aplicação móvel Outlook para Android**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [parceiro especializado](https://marketplace.ovhcloud.com/c/support-collaboration) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção "Quer saber mais?" deste guia.

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído na oferta MX Plan ou numa oferta de [alojamento web da OVHcloud](/links/web/hosting)).
- Ter a aplicação Outlook no seu dispositivo móvel [Android](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=pt).
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

## Instruções

### Adicionar a conta <a name="add-account"></a>

- **Ao iniciar pela primeira vez a aplicação** : será apresentado um assistente de configuração, prima `Adicionar uma conta`{.action}.

![outlook android](images/outlook-app-android-add01.png){.thumbnail .w-400 .h-600}

- **Se uma conta já tiver sido parametrizada**:
    - Pressione o envelope " &#9993; " na parte superior esquerda do seu ecrã.
    - De seguida, prima o botão `+`{.action} na barra vertical à esquerda.
    - Prima `Adicionar uma conta`{.action}.

![outlook android](images/outlook-app-android-add02.png){.thumbnail .w-400 .h-600}

Siga as etapas de instalação, clicando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Introduza o seu endereço de e-mail e prima `Continuar`{.action}.
>>
>> ![outlook android](images/outlook-app-android-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 2**
>>
>> Selecione o protocolo de receção, **IMAP**(recomendado) ou **POP3**.
>>
>> ![outlook android](images/outlook-app-android-add-step02.png){.thumbnail .w-400 .h-600}
>>
>> > [!warning]
>> >
>> > Se a janela de escolha do protocolo não aparecer, prima o botão `?` no canto superior direito do ecrã e escolha `Mudar de fornecedor de conta`{.action}. Selecione `IMAP`(recomendado) ou `POP3`.<br>
>> > ![outlook android](images/outlook-app-android-add-step021.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 3 - IMAP**
>>
>> Na seguinte janela, selecione `Configurações avançadas`{.action} e introduza as seguintes informações:
>>
>> - **Endereço de correio eletrónico**
>> - **Nome completo** : introduza o seu endereço de e-mail completo
>> - **Descrição**
>> - **Servidor de receção de correio IMAP**:<br>- **Nome do host IMAP**: para a **EUROPE**, introduza `imap.mail.ovh.net` ou `ssl0.ovh.net`. Para a **AMÉRICA/ÁSIA**, introduza `imap.mail.ovh.ca`<br>- **Port**: 993<br>- **Tipo de segurança**: SSL/TLS<br>- **Nome de utilizador IMAP**: o seu endereço de correio eletrónico completo<br>- **Palavra-passe IMAP** : o do seu endereço de correio eletrónico
>> - **Servidor de receção de correio SMTP**:<br>- **Nome do host SMTP**: para a **EUROPE**, introduza `smtp.mail.ovh.net` ou `ssl0.ovh.net` . Para a **AMÉRICA/ÁSIA**, introduza `smtp.mail.ovh.ca`<br>- **Port**: 465<br>- **Tipo de segurança**: SSL/TLS<br>- **Nome de utilizador SMTP**: o seu endereço de correio eletrónico completo<br>- **Palavra-passe SMTP** : o do seu endereço de correio eletrónico
>>
>> Para finalizar a configuração, clique no botão " &#10003; "
>>
>> ![outlook android](images/outlook-app-android-add-step03-imap-eu.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 3 - POP3**
>>
>> Na seguinte janela, selecione `Configurações avançadas`{.action} e introduza as seguintes informações:
>>
>> - **Endereço de correio eletrónico**
>> - **Nome completo** : Introduza o seu endereço de e-mail completo
>> - **Descrição**
>> - **Servidor de receção de correio POP3**:<br>- **Nome do host POP3**: para a **EUROPE**, introduza `pop.mail.ovh.net` ou `ssl0.ovh.net` . Para a **AMÉRICA/ÁSIA** introduza `pop.mail.ovh.ca`<br>- **Port**: 995<br>- **Tipo de segurança**: SSL/TLS<br>- **Nome de utilizador POP3** : o seu endereço de correio eletrónico completo<br>- **Palavra-passe POP3** : o do seu endereço de correio eletrónico
>> - **Servidor de receção de correio eletrónico SMTP**:<br>- **Nome do sistema anfitrião SMTP**: para a **EUROPE**, introduza `smtp.mail.ovh.net` ou `ssl0.ovh.net`. Para a **AMÉRICA/ÁSIA**, introduza `smtp.mail.ovh.ca`<br>- **Port**: 465<br>- **Tipo de segurança**: SSL/TLS<br>- **Nome de utilizador SMTP**: o seu endereço de correio eletrónico completo<br>- **Palavra-passe SMTP** : o do seu endereço de correio eletrónico
>>
>> Para finalizar a configuração, clique no botão " &#10003; "
>>
>> ![outlook android](images/outlook-app-android-add-step03-pop-eu.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Se, seguindo os passos de configuração acima, encontrar um problema de envio ou receção, vá para " [Editar definições existentes](#modify-settings)".

### Utilizar o endereço de e-mail

Depois de configurar o endereço de e-mail, já só precisa de o utilizar! Já pode enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Aceda através desta ligação: [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte os nossos manuais [Consultar a sua conta a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ou [Utilizar o seu endereço de e-mail a partir do webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

### Alterar os parâmetros existentes <a name="modify-settings"></a>

A aplicação Outlook não permite alterar as definições do servidor da sua conta de e-mail.

Se a sua conta de e-mail já estiver configurada e pretender voltar a parametrizá-la, deverá eliminá-la e recriá-la:

1. Pressione o envelope " &#9993; " na parte superior esquerda do seu ecrã.
2. Pressione o ícone de ajuste " &#9965; " na parte inferior da coluna da esquerda.
3. Na secção " Geral " pressione `Contas` para visualizar todos os endereços de e-mail configurados na aplicação.

![outlook android](images/outlook-app-android-delete-account-01.png){.thumbnail .w-400 .h-600}

- Selecione a conta de correio eletrónico correspondente.
- Prima `Eliminar conta`{.action}.
- Toque em `Eliminar`{.action} à pergunta " Deseja eliminar a conta? ".

![outlook android](images/outlook-app-android-delete-account-02.png){.thumbnail .w-400 .h-600}

> [!success]
>
> Após a eliminação da conta de correio eletrónico, siga as instruções da secção " [Adicionar conta](#add-account) " neste manual.

### Lembrete dos parâmetros POP, IMAP e SMTP <a name="popimap-settings"></a>

#### Configurações de receção IMAP e POP

Para a receção dos e-mails, ao escolher o tipo de conta, recomendamos uma utilização em **IMAP**. No entanto, pode selecionar **POP**.

> [!warning]
>
> É necessário anotar o valor correspondente à sua localização (**EUROPE** ou **AMÉRICA/ÁSIA-PACÍFICO**)

Siga as etapas de instalação, clicando nos separadores abaixo:

> [!tabs]
> **Configuração IMAP**
>>
>> - **Nome de utilizador** : Introduza o endereço de e-mail **completo**
>> - **Palavra-passe** : Insira a palavra-passe do endereço de e-mail
>> - **Servidor Europe (de entrada)**: imap.mail.ovh.net **ou** ssl0.ovh.net
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: imap.mail.ovh.ca
>> - **Port** : 993
>> - **Tipo de segurança**: SSL/TLS
>>
> **Configuração POP**
>>
>> - **Nome de utilizador** : Introduza o endereço de e-mail **completo**
>> - **Palavra-passe** : Insira a palavra-passe do endereço de e-mail
>> - **Servidor Europe (de entrada)**: pop.mail.ovh.net **ou** ssl0.ovh.net
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: pop.mail.ovh.ca
>> - **Port** : 995
>> - **Tipo de segurança**: SSL/TLS

#### Definições de envio SMTP

Se necessita de inserir manualmente as definições **SMTP** nas preferências da conta para enviar uma mensagem de correio eletrónico, consulte as seguintes definições:

**Configuração SMTP**

- **Nome de utilizador** : Insira o endereço de e-mail **completo**
- **Palavra-passe**: Insira a palavra-passe do endereço de e-mail
- **Servidor Europe (de entrada)**: pop.mail.ovh.net **ou** ssl0.ovh.net
- **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: pop.mail.ovh.ca
- **Port** : 995
- **Tipo de segurança**: SSL/TLS

> [!primary]
>
> **Alterar a configuração**
>
> Se o seu endereço de e-mail estiver configurado em **IMAP** e pretender alterar esta configuração para **POP**, deve eliminar a conta e recriá-la em **POP**. Consulte o capítulo " [Editar definições existentes](#modify-settings) " deste manual.

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Outlook no Android, consulte [o Centro de Ajuda da Microsoft](https://support.microsoft.com/pt-pt/office/config-le-courriel-%C3%A9lectronique-%C3%A0-l-aide-de-l-application-outlook-para-android-886db551-8dfa-4fd5-b835-f8e532091872).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).