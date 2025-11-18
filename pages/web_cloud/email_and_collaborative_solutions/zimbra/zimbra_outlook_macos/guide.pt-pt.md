---
title: "Zimbra Pro - Configurar a sua conta de e-mail através do EWS no Outlook para Mac"
excerpt: "Saiba como configurar o seu endereço de e-mail Zimbra Pro no Outlook para macOS através do protocolo EWS"
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

As contas Zimbra Pro podem ser configuradas num Mac utilizando o protocolo EWS (**E**xchange **W**eb **S**Services). Isto permite-lhe configurar o conjunto das funcionalidades colaborativas do seu endereço de e-mail de uma só vez. A aplicação [Outlook em macOS](https://apps.apple.com/pt/app/microsoft-outlook/id985367838?mt=12) está disponível na App Store da Apple.

**Saiba como configurar o seu endereço de e-mail Zimbra Pro no Outlook para macOS através do protocolo EWS.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. É da sua responsabilidade assegurar o bom funcionamento destes serviços.
>
> Este manual foi concebido para o ajudar a realizar tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [parceiro especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte "[Quer saber mais?](#go-further)" deste guia.

## Requisitos

- Ter um endereço de e-mail [Zimbra Pro](/links/web/emails-zimbra).
- Ter a aplicação [Outlook no macOS](https://apps.apple.com/pt/app/microsoft-outlook/id985367838?mt=12).
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

## Instruções

### Adicionar a conta <a name="add-account"></a>

- **Quando a aplicação Outlook for iniciada pela primeira vez**: é apresentado um assistente de configuração que lhe irá solicitar que introduza o primeiro endereço de correio eletrónico que pretende adicionar.

- **Se uma conta já estiver parametrizada na aplicação Outlook**:
    1. Clique em `Ferramentas`{.action} na barra de menu no topo do seu ecrã.
    2. Clique em `Contas`{.action}.
    3. Na janela "Contas" que se abrir, clique em `+`{.action} no canto inferior esquerdo e, a seguir, clique em `Nova conta`{.action}.

![mail macOS](images/outlook-macos-add-step00.png){.thumbnail .h-500}

Siga as etapas de instalação clicando sucessivamente nos **3** separadores abaixo:

> [!tabs]
> **Etapa 1**
>>
>> Introduza o seu endereço de e-mail abaixo "Endereço de e-mail" e clique em `Continuar`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step01.png){.thumbnail .h-500}
>>
> **Etapa 2**
>>
>> Dois cenários são possíveis:
>>
>> - **Se a janela "IMAP/POP" aparecer**: clique em `Não é uma conta POP/IMAP`{.action} e escolha `Exchange`{.action} a partir da janela "Escolher o fornecedor".
>> - **Se clicar diretamente "Escolher o fornecedor"**, escolha o nome do servidor `Exchange`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step02.png){.thumbnail .h-500}
>>
> **Etapa 3**
>>
>> Verifique e complete as seguintes informações:
>>
>> - **Método**: Escolha `Nome de utilizador e palavra-passe`.
>> - **Endereço de correio eletrónico**: Introduza o seu endereço de correio eletrónico completo.
>> - **DOMÍNIO\Nome de utilizador ou endereço de correio eletrónico**: Introduza o seu endereço de correio eletrónico completo.
>> - **Palavra-passe**: Introduza a palavra-passe associada ao seu endereço de e-mail.
>> - **Servidor**: Introduza "zimbra1.mail.ovh.net".
>>
>> Para finalizar a configuração, toque em `Adicionar uma conta`{.action} e selecione as funcionalidades que deseja explorar no seu Mac.
>>
>> ![mail macos](images/outlook-macos-add-step03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Se, depois de seguir os passos de configuração acima indicados, não enviar ou receber os dados corretos, consulte a secção "[Alterar definições existentes](#modify-settings)" deste manual.

### Utilizar o endereço de e-mail

Depois de configurar um endereço de e-mail, pode começar a utilizá-lo! Já pode enviar e receber mensagens e gerir os calendários e as tarefas.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Pode ligar a [webmail OVHcloud](/links/web/email) com as credenciais do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o guia "[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### Como alterar os parâmetros existentes? <a name="modify-settings"></a>

Para alterar os parâmetros de uma conta de e-mail já configurada, siga as instruções seguintes:

1. Clique em `Ferramentas`{.action} na barra de menu no topo do seu ecrã.
1. Clique em `Contas`{.action}.
1. Selecione sua conta na coluna à esquerda.
1. Clique em `Avançado...`{.action} no canto inferior direito.

![outlook macos](images/outlook-macos-modify-01.png){.thumbnail .h-500}

Consulte os parâmetros para **etapa 3** no capítulo "[Adicionar conta](#add-account)".

### Como eliminar uma conta de e-mail? <a name="delete-account"></a>

1. Clique em `Ferramentas`{.action} na barra de menu no topo do seu ecrã.
1. Clique em `Contas`{.action}.
1. Selecione sua conta na coluna à esquerda.
1. Clique em `-`{.action} no canto inferior esquerdo

![outlook macos](images/outlook-macos-delete-01.png){.thumbnail .h-500}

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Mail no macOS, visite [Centro de Ajuda da Apple](https://support.apple.com/pt-pt/102619).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).