---
title: "E-Mail Pro - Configurar sua conta de E-Mail Pro no novo Outlook para Windows"
excerpt: "Saiba como configurar sua conta de E-Mail Pro no novo Outlook para Windows"
updated: 2025-09-02
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

Os endereços de e-mail da oferta [E-Mail Pro](/links/web/email-pro) podem ser configurados em um cliente de e-mail compatível. Isso permite enviar e receber mensagens do aplicativo de sua escolha.

O **novo Outlook** substitui, a partir de 1 de janeiro de 2025, o aplicativo **E-mail** no Windows. Para mais informações, consulte a página oficial da Microsoft "[Outlook para Windows: O Futuro do Correio, Calendário e Pessoas no Windows 11](https://support.microsoft.com/office/outlook-pour-windows-l-avenir-du-courrier-du-calendrier-et-des-personnes-sur-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)".

**Saiba como configurar sua conta de E-Mail Pro no novo Outlook para Windows.**

## Requisitos

- Disponha de um endereço [E-Mail Pro](/links/web/email-pro).
- Disponha do [novo Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) para Windows.
- Possua as credenciais do endereço de e-mail que deseja configurar.

> [!warning]
>
> Esta documentação se aplica exclusivamente ao **novo Outlook** e não ao "[Outlook clássico](https://support.microsoft.com/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)", disponível no pacote Microsoft 365 ou instalado anteriormente no seu computador.

/// details | Informações sobre o gerenciamento e configuração dos serviços da OVHcloud

A OVHcloud fornece serviços que você é responsável por configurar, gerenciar e operar. Portanto, cabe a você garantir seu funcionamento adequado.

Fornecemos este guia para ajudá-lo nas tarefas mais comuns. No entanto, recomendamos contatar um [parceiro especializado](/links/partner) e/ou o fornecedor do serviço se encontrar dificuldades. Não estaremos aptos a fornecer assistência adicional. Mais informações na seção "[Quer saber mais?](#go-further)" deste guia.

///

## Instruções

### Adicionar a conta <a name="add-account"></a>

> [!warning]
>
> Neste exemplo, utilizamos a menção servidor: pro?.mail.ovh.net. Deverá substituir o "?" pelo número que identifica o servidor do seu serviço E-mail Pro.
>
> 1. Aceda à [Área de Cliente OVHcloud](/links/manager).
> 1. Aceda à secção `Web Cloud`{.action}.
> 1. Clique em `Email Pro`{.action}.
> 1. Selecione a plataforma em causa.
> 1. O nome do servidor está visível na tabela **Ligação** do separador `Informações gerais`{.action}.
>

> [!tabs]
> **Etapa 1**
>> - Abra o Outlook. No menu lateral esquerdo, clique em `Adicionar uma conta`{.action} para iniciar a configuração.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-400}
>>
> **Etapa 2**
>> - Digite seu endereço de e-mail e clique em `Continuar`{.action}.
>> - Digite sua senha e clique no botão `Mostrar mais`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-400}
>>
> **Etapa 3**
>> - Digite os seguintes parâmetros:
>>    - **Servidor IMAP de entrada**: pro?.mail.ovh.net
>>    - **Porta**: 993
>>    - **Tipo de conexão segura**: SSL/TLS
>>    - **Nome de usuário SMTP**: O endereço de e-mail que está adicionando.
>>    - **Servidor SMTP de saída**: pro?.mail.ovh.net
>>    - **Porta**: 587
>>    - **Tipo de conexão segura**: STARTTLS
>>    - **Senha**: Não digite nada, a senha digitada anteriormente será usada.
>> - Clique em `Continuar`{.action} para concluir a configuração.
>>
>> ![outlook](images/configuration-newoutlook-windows-emp-03.png){.thumbnail .w-400}

### Usar o endereço de e-mail <a name="use-account"></a>

Assim que o endereço de e-mail estiver configurado, você pode usá-lo! Agora pode enviar e receber mensagens.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. Para aceder ao Webmail OVHcloud, clique em [este link](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

### Modificar as configurações existentes <a name="modify-settings"></a>

O aplicativo Outlook não permite modificar os parâmetros do servidor para sua conta de e-mail.

Se a sua conta de e-mail já estiver configurada e pretender alterar as suas configurações, deverá eliminá-la e recriá-la:

- Clique no ícone de configurações `⛭`{.action} na parte inferior do menu lateral esquerdo.
- Na seção "Suas contas", clique em `Gerenciar`{.action} à direita do endereço de e-mail em questão.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-400}

- Role até o final da página.
- Clique em `Excluir`{.action} para iniciar a exclusão.
- Escolha se deseja excluir a conta apenas deste dispositivo ou também de outros dispositivos que usam o Outlook.

![outlook](images/configuration-newoutlook-windows-emp-05.png){.thumbnail .w-400}

> [!success]
>
> Após excluir a conta de e-mail, siga as instruções na seção "[Adicionar a conta](#add-account)" desta documentação.

### Configurações gerais de envio e recebimento <a name="settings-account"></a>

#### Configurações IMAP e POP para recebimento <a name="imap-pop"></a>

Para o recebimento de e-mails, recomendamos o uso do **IMAP**. No entanto, você também pode selecionar **POP**.

Selecione a guia correspondente ao tipo de configuração:

> [!tabs]
> **Configuração IMAP**
>>
>> - **Nome de usuário**: Digite o **endereço de e-mail completo**.
>> - **Senha**: Digite a senha do endereço de e-mail.
>> - **Servidor de entrada**: pro?.mail.ovh.net (substitua "?" pelo número do seu servidor).
>> - **Porta**: 993.
>> - **Tipo de conexão segura**: SSL/TLS.
>>
> **Configuração POP**
>>
>> - **Nome de usuário**: Digite o **endereço de e-mail completo**.
>> - **Senha**: Digite a senha do endereço de e-mail.
>> - **Servidor de entrada**: pro?.mail.ovh.net (substitua "?" pelo número do seu servidor).
>> - **Porta**: 995.
>> - **Tipo de conexão segura**: SSL/TLS.

#### Configurações SMTP para envio <a name="smtp"></a>

Para o envio de e-mails, utilize os seguintes parâmetros **SMTP**:

**Configuração SMTP**

- **Nome de usuário**: Digite o **endereço de e-mail completo**.
- **Senha**: Digite a senha do endereço de e-mail.
- **Servidor de saída**: pro?.mail.ovh.net (substitua "?" pelo número do seu servidor).
- **Porta**: 587.
- **Tipo de conexão segura**: STARTTLS.

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para mais informações sobre como configurar um endereço de e-mail no cliente do novo Outlook para Windows, consulte [o centro de ajuda da Microsoft](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Primeiros passos com a solução E-Mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).