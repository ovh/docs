---
title: "E-mail Pro - Configurar um endereço de e-mail no Outlook para Android"
excerpt: "Saiba como configurar uma conta Email Pro no Adroid com a aplicação Microsoft Outlook"
updated: 2025-08-18
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

As contas E-mail Pro podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe utilizar o seu endereço de e-mail a partir do dispositivo que preferir. A aplicação Outlook da Microsoft para Android está disponível gratuitamente a partir da Google Play Store.

**Saiba como configurar uma conta E-mail Pro no Android com a aplicação Microsoft Outlook.**

## Requisitos

- Dispor de uma oferta [E-mail Pro](/links/web/email-pro).
- Ter a aplicação Outlook no seu dispositivo móvel [Android](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=pt).
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.

## Instruções

### Adicionar a conta <a name="add-account"></a>

> [!warning]
>
> Nos nossos exemplos, utilizamos a menção servidor: pro?.mail.ovh.net. Deverá substituir o «?" pelo número que identifica o servidor do seu serviço E-mail Pro.
>
> Encontre este algarismo na sua área de cliente OVHcloud(/links/manager), na rubrica `Web Cloud`{.action} e depois `E-mail Pro`{.action}. O nome do servidor está visível na tabela **Ligação** do separador ‘Informações gerais`{.action}.

- **Ao iniciar pela primeira vez a aplicação** : será apresentado um assistente de configuração, prima 'Adicionar uma conta`{.action}'.

![outlook android email pro](images/outlook-app-android-add01.png){.thumbnail .w-400 .h-600}

- **Se uma conta já tiver sido parametrizada**:
    - Pressione o envelope "&#9993;" na parte superior esquerda do seu ecrã.
    - De seguida, prima o botão `+`{.action} na barra vertical à esquerda.
    - Prima `Adicionar uma conta`{.action}.

![outlook android email pro](images/outlook-app-android-add02.png){.thumbnail .w-400 .h-600}

Siga as etapas de instalação, clicando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Introduza o seu endereço de e-mail e prima `Continuar`{.action}.
>>
>> ![Outlook e-mail pro](images/outlook-app-android-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 2**
>>
>> Selecione o protocolo de receção, **IMAP**(recomendado) ou **POP3**.
>>
>> ![outlook android email pro](images/outlook-app-android-add-step02.png){.thumbnail .w-400 .h-600}
>>
>> [!warning]
>> > 
>> > Se a janela de escolha do protocolo não aparecer, prima o botão `?` no canto superior direito do ecrã e escolha `Mudar de fornecedor de conta`{.action}. Selecione `IMAP`(recomendado) ou `POP3`.<br>
>> ![outlook android email pro](images/outlook-app-android-add-step021.png){.thumbnail .w-400 .h-600}
>>
> **Passo 3 - IMAP**
>>
>> Na seguinte janela, selecione `Configurações avançadas`{.action} e introduza as seguintes informações:
>>
>> - **Endereço de correio eletrónico**
>> - **Nome completo** : introduza o seu endereço de e-mail completo
>> - **Description**
>> - **Servidor de receção de correio eletrónico IMAP**:<br>- **Nome de anfitrião IMAP**: digite pro?.mail.ovh.net (substitua «?» pelo número do seu servidor).<br>- **Port**: 993<br>- **Tipo de segurança**: SSL/TLS<br>- **Nome de utilizador IMAP** : o seu endereço de correio eletrónico completo<br>- **Palavra-passe IMAP** : o do seu endereço de e-mail
>> - **Servidor de correio de saída SMTP**:<br>- **Nome de host SMTP**: introduza pro?.mail.ovh.net (substitua «?» pelo número do seu servidor).<br>- **Porta*: 587<br>- **Tipo de segurança**: STARTTLS<br>- **Nome de utilizador SMTP** : o seu endereço de correio eletrónico completo<br>- **Palavra-passe SMTP** : o do seu endereço de correio eletrónico
>>
>> Para finalizar a configuração, clique no botão "&#10003;".
>>
>> ![outlook android email pro](images/outlook-app-android-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 3 - POP3**
>>
>> Na seguinte janela, selecione `Configurações avançadas`{.action} e introduza as seguintes informações:
>>
>> - **Endereço de correio eletrónico**
>> - **Nome completo** : Introduza o seu endereço de e-mail completo
>> - **Description**
>> - **Servidor de receção de correio eletrónico POP3**:<br>- **Nome de anfitrião POP3** : digite pro?.mail.ovh.net (substitua «?» pelo número do seu servidor).<br>- **Port**: 995<br>- **Tipo de segurança**: SSL/TLS<br>- **Nome de utilizador POP3** : o seu endereço de correio eletrónico completo<br>- **Palavra-passe POP3** : o do seu endereço de e-mail
>> - **Servidor de correio de saída SMTP**:<br>- **Nome de host SMTP**: introduza pro?.mail.ovh.net (substitua «?» pelo número do seu servidor).<br>- **Porta*: 587<br>- **Tipo de segurança**: STARTTLS<br>- **Nome de utilizador SMTP** : o seu endereço de correio eletrónico completo<br>- **Palavra-passe SMTP** : o do seu endereço de correio eletrónico
>>
>> Para finalizar a configuração, clique no botão "&#10003;".
>>
>> ![outlook android email pro](images/outlook-app-android-add-step03-pop-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Se, seguindo os passos de configuração acima, encontrar um problema de envio ou receção, vá para "[Editar definições existentes](#modify-settings)».

### Utilizar o endereço de e-mail

Depois de configurar o endereço de e-mail, já só precisa de o utilizar! Já pode enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Aceda através desta ligação: [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o nosso guia [Consultar a sua conta a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Alterar os parâmetros existentes <a name="modify-settings"></a>

A aplicação Outlook não permite alterar as definições do servidor da sua conta de e-mail.

Se a sua conta de e-mail já estiver configurada e pretender voltar a parametrizá-la, deverá eliminá-la e recriá-la:

1. Pressione o envelope "&#9993;" na parte superior esquerda do seu ecrã.
2. Pressione o ícone de ajuste "&#9965;" na parte inferior da coluna da esquerda.
3. Na secção "Geral", toque em `Contas` para visualizar o conjunto dos endereços de e-mail configurados na aplicação.

![outlook android email pro](images/outlook-app-android-delete-account-01.png){.thumbnail .w-400 .h-600}

- Selecione a conta de correio eletrónico correspondente.
- Prima `Eliminar conta`{.action}.
- Toque em `Eliminar`{.action} à pergunta "Deseja eliminar a conta?".

![outlook android email pro](images/outlook-app-android-delete-account-02.png){.thumbnail .w-400 .h-600}

> [!success]
>
> Após a eliminação da conta de e-mail, siga as instruções da secção "[Adicionar conta](#add-account)" deste manual.

### Lembrete dos parâmetros POP, IMAP e SMTP <a name="popimap-settings"></a>

#### Configurações de receção IMAP e POP

Para a receção dos e-mails, ao escolher o tipo de conta, recomendamos uma utilização em **IMAP**. No entanto, pode selecionar **POP**.

Clique no separador correspondente ao seu protocolo de receção:

> [!tabs]
> **Configuração IMAP**
>>
>> - **Nome de utilizador** : Introduza o endereço de e-mail **completo**
>> - **Palavra-passe** : Insira a palavra-passe do endereço de e-mail
>> - **Servidor (de entrada)**: pro?.mail.ovh.net
>> - **Port** : 993
>> - **Tipo de segurança**: SSL/TLS
>>
> **Configuração POP**
>>
>> - **Nome de utilizador** : Introduza o endereço de e-mail **completo**
>> - **Palavra-passe** : Insira a palavra-passe do endereço de e-mail
>> - **Servidor (de entrada)**: pro?.mail.ovh.net
>> - **Port** : 995
>> - **Tipo de segurança**: SSL/TLS

#### Definições de envio SMTP

Se necessita de inserir manualmente as definições **SMTP** nas preferências da conta para enviar uma mensagem de correio eletrónico, consulte as seguintes definições:

**Configuração SMTP**

- **Nome de utilizador** : Insira o endereço de e-mail **completo*
- **Palavra-passe**: Insira a palavra-passe do endereço de e-mail
- **Servidor (de saída)**: pro?.mail.ovh.net
- **Port** : 587
- **Tipo de segurança**: STARTTLS

> [!primary]
>
> **Alterar a configuração**
>
> Se o seu endereço de e-mail estiver configurado em **IMAP** e pretender alterar esta configuração para **POP**, deve eliminar a conta e recriá-la em **POP**. Consulte o capítulo "[Editar definições existentes](#modify-settings)" deste manual.


## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Outlook no Android, consulte [Central de Ajuda da Microsoft](https://support.microsoft.com/pt-pt/office/configurar-o-e-mail-na-aplicação-outlook-para-android-886db551-8dfa-4fd5-b835-f8e532091872).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).