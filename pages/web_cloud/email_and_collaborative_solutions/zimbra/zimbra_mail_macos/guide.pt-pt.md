---
title: "Zimbra Pro - Configurar a sua conta de e-mail via EWS no Mail no Mac"
excerpt: "Saiba como configurar o seu endereço de e-mail Zimbra Pro na aplicação Mail no Mac através do protocolo EWS"
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

As contas Zimbra Pro podem ser configuradas num macOS utilizando o protocolo EWS (**E**xchange **W**eb **S**Services). Isto permite-lhe configurar o conjunto das funcionalidades colaborativas do seu endereço de e-mail de uma só vez. A aplicação Mail está disponível de forma nativa no macOS.

**Saiba como configurar o endereço de e-mail Zimbra Pro na aplicação Mail no Mac através do protocolo EWS.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. É da sua responsabilidade assegurar o bom funcionamento destes serviços.
>
> Este manual foi concebido para o ajudar a realizar tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [parceiro especializado](https://marketplace.ovhcloud.com/c/support-collaboration) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte "[Quer saber mais?](#go-further)" deste guia.

## Requisitos

- Ter um endereço de e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Ter a aplicação Mail no seu Mac.
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

## Instruções

### Adicionar a conta <a name="add-account"></a>

- **Quando iniciar pela primeira vez a aplicação Mail**, irá visualizar um assistente de configuração que lhe irá pedir para selecionar a conta pretendida.

- **Se uma conta já estiver parametrizada na aplicação Mail**:
    - Clique em `Mail`{.action} na barra de menu no topo do seu ecrã.
    - Clique em `Contas`{.action}.
    - Na janela "Contas Internet" que é apresentada, clique em `Adicionar uma conta`{.action}

![mail macOS](images/mail-macos-add-step00.png){.thumbnail .h-500}

Siga as etapas de instalação clicando sucessivamente nos **3** separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> - Selecione `Microsoft Exchange`{.action}.
>> - Defina um **nome** e introduza o seu **endereço de e-mail**.
>> - A seguir, clique em `Ligar`{.action}.
>>
>> ![mail macos](images/mail-macos-add-step01.png){.thumbnail .h-500}
>>
> **Etapa 2**
>>
>> - Escolha `Configurar manualmente`{.action} a partir da janela que irá aparecer.
>> - De seguida, introduza a **palavra-passe** do seu endereço de e-mail para complementar as informações já introduzidas.
>>
>> ![mail macos](images/mail-macos-add-step02.png){.thumbnail .h-500}
>>
> **Etapa 3**
>>
>> Verifique e complete as seguintes informações:
>>
>> - **Endereço de correio eletrónico**: Introduza o endereço de correio eletrónico completo.
>> - **Nome de utilizador**: Introduza o seu endereço de e-mail completo.
>> - **Palavra-passe**: Insira a palavra-passe associada ao seu endereço de e-mail.
>> - **URL interno**: Introduza "zimbra1.mail.ovh.net".
>> - **URL externo**: Introduza "zimbra1.mail.ovh.net".
>>
>> Para finalizar a configuração, toque em `Ligar-se`{.action} e selecione as funcionalidades que pretende explorar no seu Mac.
>>
>> ![mail macos](images/mail-macos-add-step04.png){.thumbnail .h-500}
>>
>> > [!warning]
>> >
>> > É normal que a mensagem seja apresentada a vermelho "**Não é possível verificar o nome de conta ou a palavra-passe**" quando a janela é apresentada pela primeira vez. No entanto, se esta mensagem persistir após a validação, isto significa que as informações introduzidas estão erradas.

> [!warning]
>
> Se, depois de seguir os passos de configuração acima indicados, não enviar ou receber os dados corretos, consulte a secção "[Alterar definições existentes](#modify-settings)" deste manual.

### Utilizar o endereço de e-mail

Depois de configurar um endereço de e-mail, pode começar a utilizá-lo! Já pode enviar e receber mensagens e gerir os calendários e as tarefas.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Pode ligar a [webmail OVHcloud](/links/web/email) com as credenciais do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o guia "[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Como alterar os parâmetros existentes? <a name="modify-settings"></a>

A aplicação Mail no Mac não permite alterar as configurações de servidor de uma conta de e-mail Exchange.

Se a sua conta de e-mail já estiver configurada e pretender alterar as suas definições, deve eliminá-la e recriá-la.

Para eliminar uma conta de e-mail Exchange, siga as instruções seguintes:

1. Clique em `Mail`{.action} na barra de menu no topo do seu ecrã.
1. Clique em `Contas`{.action} e selecione a conta de e-mail em causa.
1. Prima `Eliminar conta`{.action}.

![mail macos](images/mail-macos-modify-delete-01.png){.thumbnail .h-500}

> [!success]
>
> Após a eliminação da conta de correio eletrónico, siga os passos de instalação descritos no "[Adicionar a conta](#add-account)" deste manual.

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Mail no macOS, visite [Centro de Ajuda da Apple](https://support.apple.com/pt-pt/102619).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).