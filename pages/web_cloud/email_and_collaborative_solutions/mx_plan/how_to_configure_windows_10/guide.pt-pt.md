---
title: 'MX Plan / Zimbra Starter - Adicionar uma conta de e-mail no novo Outlook para Windows'
excerpt: "Saiba como configurar seu endereço de e-mail no novo Outlook para Windows"
updated: 2025-09-26
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
</style>

## Objetivo

Os endereços de e-mail das ofertas **MX Plan** e [Zimbra Starter](/links/web/emails-zimbra) podem ser configurados em um cliente de e-mail compatível. Isso permite enviar e receber mensagens do aplicativo de sua escolha.

O **novo Outlook** substitui, desde 1º de janeiro de 2025, o aplicativo **Correio** no Windows. Para mais informações, consulte a página oficial da Microsoft "[Outlook para Windows: O Futuro do Correio, Calendário e Pessoas no Windows 11](https://support.microsoft.com/office/outlook-for-windows-the-future-of-mail-calendar-and-people-on-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)".

**Descubra como configurar seu endereço de e-mail MX Plan no novo Outlook para Windows.**

## Pré-requisitos

- Ter uma solução de e-mail OVHcloud previamente configurada, dentre as seguintes:
    - **MX Plan** oferecido com nossas [ofertas de hospedagem web](/links/web/hosting) ou incluído em um [hospedagem gratuito 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter (apenas).
- Ter a [nova versão do Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) instalada no Windows.
- Possuir as credenciais do endereço de e-mail que deseja configurar.

> [!warning]
>
> Esta documentação se aplica exclusivamente ao **novo Outlook** e não ao "[Outlook clássico](https://support.microsoft.com/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" disponível no pacote Microsoft 365 ou previamente instalado no computador.

/// details | Informações relacionadas ao gerenciamento e configuração dos serviços OVHcloud

OVHcloud fornece serviços cuja configuração, gerenciamento e responsabilidade cabem a você. Portanto, é sua responsabilidade garantir o funcionamento correto.

Fornecemos esta guia para ajudá-lo nas tarefas mais comuns. No entanto, recomendamos que você contate um [parceiro especializado](https://marketplace.ovhcloud.com/c/support-collaboration) e/ou o fornecedor do serviço se encontrar dificuldades. Não estaremos em condições de fornecer assistência. Mais informações na seção "[Quer saber mais?](#go-further)" desta guia.

///

## Instruções

### Adicionar a conta <a name="add-account"></a>

> [!warning]
>
> É necessário selecionar a aba da etapa 3 correspondente à sua localização (**EUROPA** ou **AMÉRICA/ÁSIA-PACÍFICO**) para obter os valores corretos.

> [!tabs]
> **Etapa 1**
>> - Abra o Outlook. Na coluna da esquerda, clique em `Adicionar uma conta`{.action} para iniciar a configuração.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-600}
>>
> **Etapa 2**
>> - Digite seu endereço de e-mail e clique em `Continuar`{.action}.
>> - Digite sua senha e clique no botão `Mostrar mais`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-600}
>>
> **Etapa 3 EUROPA**
>> - Digite os seguintes parâmetros:
>>    - **Servidor IMAP de entrada**: imap.mail.ovh.net **ou** ssl0.ovh.net.
>>    - **Porta**: 993.
>>    - **Tipo de conexão segura**: SSL/TLS.
>>    - **Nome de usuário SMTP**: Digite o endereço de e-mail **completo**.
>>    - **Servidor SMTP de saída**: smtp.mail.ovh.net **ou** ssl0.ovh.net.
>>    - **Porta**: 465.
>>    - **Tipo de conexão segura**: SSL/TLS.
>>    - **Senha**: Não digite nada, a senha digitada anteriormente será usada.
>> - Clique em `Continuar`{.action} para finalizar a configuração.
>>
>> ![outlook](images/configuration-newoutlook-windows-03.png){.thumbnail .w-600}
>>
> **Etapa 3 AMÉRICA/ÁSIA-PACÍFICO**
>> - Digite os seguintes parâmetros:
>>    - **Servidor IMAP de entrada**: imap.mail.ovh.ca.
>>    - **Porta**: 993.
>>    - **Tipo de conexão segura**: SSL/TLS.
>>    - **Nome de usuário SMTP**: Digite o endereço de e-mail **completo**.
>>    - **Servidor SMTP de saída**: smtp.mail.ovh.ca.
>>    - **Porta**: 465.
>>    - **Tipo de conexão segura**: SSL/TLS.
>>    - **Senha**: Não digite nada, a senha digitada anteriormente será usada.
>> - Clique em `Continuar`{.action} para finalizar a configuração.
>>
>> ![outlook](images/configuration-newoutlook-windows-03ca.png){.thumbnail .w-600}

### Utilizar o endereço de e-mail <a name="use-account"></a>

Assim que o endereço de e-mail estiver configurado, você pode usá-lo! Agora pode enviar e receber mensagens.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Para aceder ao Webmail OVHcloud, clique em [este link](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

### Modificar os parâmetros existentes <a name="modify-settings"></a>

O aplicativo Outlook não permite modificar os parâmetros do servidor da sua conta de e-mail.

Se sua conta de e-mail já está configurada e você deseja reconfigurá-la, precisará excluí-la e recriá-la:

- Clique no ícone de configurações `⛭`{.action} na parte inferior da coluna da esquerda.
- Na seção "Suas contas" clique em `Gerenciar`{.action} à direita do endereço de e-mail em questão.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-600}

- Role até o final.
- Clique em `Excluir`{.action} para iniciar a exclusão.
- Determine se deseja excluir apenas neste dispositivo ou em outros dispositivos que usam o Outlook.

![outlook](images/configuration-newoutlook-windows-05.png){.thumbnail .w-600}

> [!success]
>
> Uma vez excluída a conta de e-mail, siga as instruções da seção "[Adicionar a conta](#add-account)" desta documentação.

### Configurações gerais de envio e recebimento <a name="settings-account"></a>

#### Configurações de recebimento IMAP e POP <a name="imap-pop"></a>

Para o recebimento de e-mails, durante a escolha do tipo de conta, recomendamos o uso do **IMAP**. No entanto, você também pode selecionar **POP**.

> [!warning]
>
> É necessário inserir o valor correspondente à sua localização (**EUROPA** ou **AMÉRICA/ÁSIA-PACÍFICO**).

Selecione a aba correspondente ao seu tipo de configuração:

> [!tabs]
> **Configuração IMAP**
>>
>> - **Nome de usuário**: Digite o endereço de e-mail **completo**.
>> - **Senha**: Digite a senha do endereço de e-mail.
>> - **Servidor EUROPA (de entrada)**: imap.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: imap.mail.ovh.ca.
>> - **Porta**: 993.
>> - **Tipo de segurança**: SSL/TLS.
>>
> **Configuração POP**
>>
>> - **Nome de usuário**: Digite o endereço de e-mail **completo**.
>> - **Senha**: Digite a senha do endereço de e-mail.
>> - **Servidor EUROPA (de entrada)**: pop.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (de entrada)**: pop.mail.ovh.ca.
>> - **Porta**: 995.
>> - **Tipo de segurança**: SSL/TLS.

#### Configurações de envio SMTP <a name="smtp"></a>

Para o envio de e-mails, abaixo estão os parâmetros **SMTP** a serem usados:

**Configuração SMTP**

- **Nome de usuário**: Digite o endereço de e-mail **completo**.
- **Senha**: Digite a senha do endereço de e-mail.
- **Servidor EUROPA (de saída)**: smtp.mail.ovh.net **ou** ssl0.ovh.net.
- **Servidor AMÉRICA/ÁSIA-PACÍFICO (de saída)**: smtp.mail.ovh.ca.
- **Porta**: 465.
- **Tipo de segurança**: SSL/TLS.

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para mais informações sobre como configurar um endereço de e-mail no cliente de e-mail Nouvel Outlook para Windows, consulte [o centro de ajuda da Microsoft](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Primeiros passos com a oferta MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).