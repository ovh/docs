---
title: "Zimbra Pro - Configurar a sua conta de e-mail através do AtiveSync no Outlook para iOS"
excerpt: "Saiba como configurar o seu endereço de e-mail Zimbra Pro na aplicação móvel Outlook para iOS através do protocolo AtiveSync"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Objetivo

> [!primary]
> Este guia destina-se aos clientes que possuem um serviço de e-mail [Zimbra Pro](/links/web/emails-zimbra). Este serviço estará disponível em beta a partir de julho de 2025.

As contas Zimbra Pro podem ser configuradas num iPhone utilizando o protocolo AtiveSync. Isto permite-lhe configurar o conjunto das funcionalidades colaborativas do seu endereço de e-mail de uma só vez. A aplicação Outlook da Microsoft para iOS está disponível gratuitamente a partir da App Store da Apple.

**Saiba como configurar o seu endereço de e-mail Zimbra Pro na aplicação móvel Outlook para iOS através do protocolo AtiveSync.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. É da sua responsabilidade assegurar o bom funcionamento destes serviços.
>
> Este manual foi concebido para o ajudar a realizar tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [parceiro especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte "[Quer saber mais?](#go-further)" deste guia.

## Requisitos

- Ter um endereço de e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Ter a aplicação [Outlook para iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

## Instruções

### Adicionar a conta <a name="add-account"></a>

- **Ao iniciar pela primeira vez a aplicação Outlook**, é apresentado um assistente de configuração:
    - Prima `Adicionar uma conta`{.action}.

  ![outlook ios](images/outlook-app-ios-add-01.png){.thumbnail .h-500}

- **Se uma conta já estiver parametrizada na aplicação Outlook**:
    1. Toque no círculo que contém as iniciais da conta de e-mail visitada ou no ícone de casa (`⌂`{.action}) na parte superior esquerda do ecrã.
    2. Pressione a engrenagem (`⛭`{.action}) na parte inferior esquerda do seu ecrã.
    3. De seguida, clique em `Contas`{.action} no menu **Definições**.
    4. Prima `Adicionar uma conta`{.action}.
    5. Toque em `Conta de e-mail`{.action}.

  ![outlook ios](images/outlook-app-ios-add-02.png){.thumbnail .h-500}

Siga as etapas de instalação clicando sucessivamente nos **3** separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Introduza o seu endereço de e-mail e clique em `Adicionar uma conta`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-01.png){.thumbnail .h-500}
>>
> **Etapa 2**
>>
>> Dois cenários são possíveis:
>>
>> - Se a entrada "**IMAP**" estiver presente no topo da página: prima o botão `?` no canto superior direito do ecrã **(1)** e escolha `Mudar de fornecedor de conta`{.action} **(2)**. De seguida, selecione `Exchange` **(3)** e passe para a etapa 3.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-02.png){.thumbnail .h-500}
>>
>> - Se pretender selecionar o tipo de conta, selecione a opção `Exchange`.
>>
> **Etapa 3**
>>
>> Na seguinte janela, selecione `Configurações avançadas`{.action} e introduza as seguintes informações:
>>
>> - **Endereço de correio eletrónico**: Introduza o endereço de correio eletrónico completo.
>> - **Palavra-passe**: Introduza a palavra-passe associada ao seu endereço de e-mail.
>> - **Description**: Insira um nome que permita identificar esta conta entre as outras contas de e-mail registadas no Outlook.
>> - **Servidor**: introduza "zimbra1.mail.ovh.net".
>> - **Domínio**: Deixe este campo em branco.
>> - **Nome de utilizador**: Introduza o seu endereço de e-mail completo.
>>
>> Para finalizar a configuração, prima `Connection`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Se, depois de seguir os passos de configuração acima indicados, não enviar ou receber os dados corretos, consulte a secção "[Alterar definições existentes](#modify-settings)" deste manual.

### Utilizar o endereço de e-mail

Depois de configurar um endereço de e-mail, pode começar a utilizá-lo! Já pode enviar e receber mensagens e gerir os calendários e as tarefas.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Pode ligar a [webmail OVHcloud](/links/web/email) com as credenciais do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o guia "[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Como alterar os parâmetros existentes? <a name="modify-settings"></a>

1. Clique no círculo que contém as iniciais da conta de e-mail visitada ou o ícone de casa (`⌂`{.action}) na parte superior esquerda do ecrã.
1. Pressione a engrenagem (`⛭`{.action}) na parte inferior esquerda do seu ecrã.
1. De seguida, clique em `Contas`{.action} no menu **Definições**.
1. Selecione a conta correspondente.
1. Toque em `Alterar as informações de ligação`{.action}.

![outlook ios](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}

Consulte os parâmetros para **etapa 3** no capítulo "[Adicionar conta](#add-account)".

### Como eliminar uma conta de e-mail? <a name="delete-account"></a>

1. Clique no círculo que contém as iniciais da conta de e-mail visitada ou o ícone de casa (`⌂`{.action}) na parte superior esquerda do ecrã.
1. Pressione a engrenagem (`⛭`{.action}) na parte inferior esquerda do seu ecrã.
1. De seguida, clique em `Contas`{.action} no menu **Definições**.
1. Selecione a conta correspondente.
1. Prima a tecla `Eliminação da conta`{.action}.

![outlook ios](images/outlook-app-ios-delete-01.png){.thumbnail .h-500}


## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Outlook para iOS, consulte o [Centro de Ajuda da Microsoft](https://support.microsoft.com/pt-pt/office/configurer-l-application-outlook-pour-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).