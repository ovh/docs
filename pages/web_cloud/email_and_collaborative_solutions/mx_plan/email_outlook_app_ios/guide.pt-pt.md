---
title: "MX Plan - Configurar a sua conta de e-mail no Outlook para iOS"
excerpt: "Saiba como configurar o seu endereço de e-mail MX Plan na aplicação móvel Outlook para iOS"
updated: 2025-02-10
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

As contas MX Plan podem ser configuradas em diferentes softwares de e-mail compatíveis. Isto permite-lhe utilizar o seu endereço de e-mail a partir do dispositivo que preferir. A aplicação Outlook da Microsoft para iOS está disponível gratuitamente a partir da App Store da Apple.

**Saiba como configurar o endereço de e-mail MX Plan na aplicação móvel Outlook para iOS**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [parceiro especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção "[Quer saber mais?](#go-further)" deste guia.

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído na oferta MX Plan ou numa oferta de [alojamento web da OVHcloud](/links/web/hosting)).
- Ter a aplicação Outlook no seu dispositivo móvel [iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

## Instruções

### Adicionar a conta <a name="add-account"></a>

- **Ao iniciar pela primeira vez a aplicação** : será apresentado um assistente de configuração, prima `Adicionar uma conta`{.action}.

![outlook ios](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Se uma conta já tiver sido parametrizada**:
    1. Pressione o círculo contendo as iniciais da conta de e-mail visualizada ou o ícone de casa "&#8962;" na parte superior esquerda da sua tela.
    2. Pressione a engrenagem "&#9881;" na parte inferior esquerda da sua tela.
    3. De seguida, clique em `Contas`{.action} no menu **Definições**.
    4. Prima `Adicionar uma conta`{.action}.
    5. Toque em `Conta de e-mail`{.action}.

![outlook ios](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Siga as etapas de instalação, clicando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Introduza o seu endereço de e-mail e clique em `Adicionar uma conta`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 2**
>>
>> Tem duas possibilidades:
>>
>> - Se estiver "**IMAP**" no topo da página, prossiga para a etapa 3.
>> - Se a janela de configuração da conta apresentar "**Exchange**" na parte superior, prima o botão `?` no canto superior direito do ecrã **(1)** e, em seguida, selecione `Alterar fornecedor de conta`{.action} **(2)**. De seguida, selecione `IMAP` **(3)** e passe para a etapa 3.
>>
>> ![outlook ios](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 3**
>>
>> Na seguinte janela, selecione `Configurações avançadas`{.action} e introduza as seguintes informações:
>>
>> - **Endereço de correio eletrónico**
>> - **Nome completo** : introduza o seu endereço de e-mail completo
>> - **Description**
>> - **Servidor de receção de correio IMAP**:<br>- **Nome do host IMAP**: para a **EUROPE**, introduza `imap.mail.ovh.net` ou `ssl0.ovh.net`. Para a **AMÉRICA/ÁSIA**, introduza `imap.mail.ovh.ca`<br>- **Port IMAP**: 993<br>- **Nome de utilizador IMAP** : o seu endereço de correio eletrónico completo<br>- **Palavra-passe IMAP** : o do seu endereço de correio eletrónico<br>- **Segurança da porta**: SSL
>> - **Servidor de receção de correio eletrónico SMTP**:<br>- **Nome do sistema anfitrião SMTP**: para a **EUROPE**, introduza `smtp.mail.ovh.net` ou `ssl0.ovh.net`. Para a **AMÉRICA/ÁSIA**, introduza `smtp.mail.ovh.ca`<br>- **Porta SMTP**: 465<br>- **Nome de utilizador SMTP**: O seu endereço de correio eletrónico <br>- **Palavra-passe SMTP** : o do seu endereço de correio eletrónico<br>- **Segurança da porta**: SSL
>>
>> Para finalizar a configuração, prima `Connection`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step03-imap-eu.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Se, seguindo os passos de configuração acima, encontrar um problema de envio ou receção, vá para "[Editar definições existentes](#modify-settings)".

### Utilizar o endereço de e-mail

Depois de configurar o endereço de e-mail, já só precisa de o utilizar! Já pode enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Aceda através desta ligação: [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização e em função do webmail associado à sua oferta, consulte os nossos manuais:

- [Consultar a sua conta a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)
- [Utilizar o endereço de e-mail a partir do webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)
- [Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Alterar os parâmetros existentes <a name="modify-settings"></a>

1. Pressione o círculo contendo as iniciais da conta de e-mail visualizada ou o ícone de casa "&#8962;" na parte superior esquerda da sua tela.
2. Pressione a engrenagem "&#9881;" na parte inferior esquerda da sua tela.
3. De seguida, clique em `Contas`{.action} no menu **Definições**.
4. Selecione a conta correspondente.
5. Toque em `Alterar as informações de ligação`{.action}.

![outlook ios](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

Consulte as definições para **no passo 3** no capítulo [Adicionar conta](#add-account).

### Eliminar uma conta de e-mail <a name="delete"></a>

1. Pressione o círculo contendo as iniciais da conta de e-mail visualizada ou o ícone de casa "&#8962;" na parte superior esquerda da sua tela.
2. Pressione a engrenagem "&#9881;" na parte inferior esquerda da sua tela.
3. De seguida, clique em `Contas`{.action} no menu **Definições**.
4. Selecione a conta correspondente.
5. Prima a tecla `Eliminação da conta`{.action}.

![outlook ios](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

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

- **Nome de utilizador** : Insira o endereço de e-mail **completo*
- **Palavra-passe**: Insira a palavra-passe do endereço de e-mail
- **Servidor Europe (de entrada)**: pop.mail.ovh.net **ou** ssl0.ovh.net
- **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: pop.mail.ovh.ca
- **Port** : 465
- **Tipo de segurança**: SSL/TLS

> [!primary]
>
> **Alterar a configuração**
>
> Se o seu endereço de e-mail estiver configurado em **IMAP** e pretender alterar esta configuração para **POP**, deve eliminar a conta e recriá-la em **POP**. Consulte o capítulo "[Editar definições existentes](#modify-settings)" deste manual.

## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).