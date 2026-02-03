---
title: 'Email Pro - Configurar uma conta de e-mail no Outlook clássico para Windows'
excerpt: 'Saiba como configurar a sua conta E-mail Pro no Outlook clássico para Windows'
updated: 2026-01-09
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
.h-500 {
  max-width:500px !important;
}
</style>

## Objetivo

As contas Email Pro podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir.

**Saiba como configurar um endereço de e-mail Pro no Outlook ou em versões posteriores do Windows.**

## Requisitos

- Ter uma conta de e-mail [E-mail Pro](/links/web/email-pro).
- Ter a aplicação [Outlook clássico](https://support.microsoft.com/pt-pt/office/instalar-ou-reinstalar-o-outlook-cl%C3%A1ssico-num-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) no Windows.
- Dispor das credenciais do endereço de e-mail que pretende configurar.

/// details | Informações relativas à gestão e configuração dos serviços OVHcloud

A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.

Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção "[Quer saber mais?](#go-further)" deste guia.

///

## Instruções

> [!warning]
>
> Esta documentação aplica-se apenas ao **Outlook clássico** disponível na suite Microsoft 365. Se estiver a utilizar o novo Outlook, consulte o nosso guia "[E-mail Pro - Configurar sua conta de E-Mail Pro no novo Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10)".
>
> Para instalar o Outlook clássico no seu computador Windows, descarregue-o a partir da página Microsoft "[Instalar ou reinstalar o Outlook clássico num PC Windows](https://support.microsoft.com/pt-pt/office/instalar-ou-reinstalar-o-outlook-cl%C3%A1ssico-num-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e instale-o.
>
> Uma vez terminada a instalação, para distinguir as duas versões quando estiverem instaladas, escreva "Outlook" na barra de pesquisa do Windows. Poderá então constatar a diferença como abaixo.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Adicionar a conta <a name="add-account"></a>

> [!primary]
>
> No nosso exemplo, utilizamos a menção servidor: pro?.mail.ovh.net. Deverá substituir o "?" pelo número que designa o servidor do seu serviço E-mail Pro.
>
> 1. Inicie sessão no seu [Área de Cliente OVHcloud](/links/manager).
> 1. Dirija-se à parte `Web Cloud`{.action}.
> 1. Clique em `Email Pro`{.action}.
> 1. Selecione a plataforma em questão.
> 1. O nome do servidor está visível no quadro **Ligação** do separador `Informações gerais`{.action}.

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ficheiro`{.action} e selecione `Adicionar Conta`{.action}.

![Outlook](images/config-outlook-emailpro01.png){.thumbnail .h-500}

Para configurar o seu endereço de correio eletrónico, siga os passos clicando nos separadores abaixo.

> **Passo 1**
>>
>> - A partir da janela **Adicionar uma conta**, selecione `Configuração manual ou tipos de servidores adicionais`{.action}.
>> - Clique em `Seguinte`{.action} para continuar.
>> - Selecione `POP ou IMAP`{.action}.
>> - Clique em `Seguinte`{.action} para continuar.
>>
>> ![Outlook](images/config-outlook-emailpro02.png){.thumbnail .h-500}
>>
> **Passo 2**
>>
>> Introduza as informações de conexão à sua conta **(1)**:
>>
>> Informações sobre o utilizador <br>
>> **O seu nome**: defina um nome de exibição.<br>
>> **Morada de correio**: introduza o seu endereço de e-mail completa.<br>
>>
>> Informações sobre o servidor <br>
>> **Tipo de conta**: selecione IMAP.<br>
>> **Servidor de correio entrante**: pro?.mail.ovh.net (a menção **"?"** deve ser substituída pelo número do seu servidor).<br>
>> **Servidor de correio de saída (SMTP)**: pro?.mail.ovh.net (a menção **"?"** deve ser substituída pelo número do seu servidor).<br>
>>
>> Informações de conexão <br>
>> **Nome de utilizador**: Introduza o seu endereço de e-mail completa.<br>
>> **Palavra-passe**: Introduza a palavra-passe associada ao seu endereço de e-mail.<br>
>>
>> Clique em `Definições adicionais...`{.action} **(2)** e passe para o passo seguinte
>>
>> ![Outlook](images/config-outlook-emailpro03.png){.thumbnail .h-500}
>>
> **Passo 3**
>>
>> A partir do separador `Servidor de saída`, marque `O meu servidor de saída (SMTP) requer autenticação`{.action} e deixe `Utilizar os mesmos parâmetros que o meu servidor de correio entrante`{.action} selecionado.
>>
>> A partir do separador `Definições avançadas`:
>>
>> - **Servidor de entrada (IMAP)**: 993
>> - **Utilizar o seguinte tipo de conexão encriptada**: SSL/TLS
>> - **Servidor de correio de saída (SMTP)**: 587
>> - **Utilizar o seguinte tipo de conexão encriptada**: STARTTLS
>>
>> Clique em `OK`{.action} para validar as informações. Clique em `Seguinte`{.action} para iniciar a configuração da conta.
>>
>> ![Outlook](images/config-outlook-emailpro04.png){.thumbnail .h-500}
>>
> **Passo 4**
>>
>> Clique em `Seguinte`{.action} para iniciar a configuração da conta. Se os parâmetros forem validados, obterá a janela abaixo.
>>
>> ![Outlook](images/config-outlook-emailpro05.png){.thumbnail .h-500}
>>

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que permite aceder ao seu endereço de e-mail a partir de um browser. O Webmail OVHcloud está acessível [aqui](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, não hesite em consultar o nosso guia "[Consultar a sua conta Exchange a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

### Recuperar um backup do seu endereço de e-mail

Se tiver de efetuar uma operação suscetível de causar a perda dos dados da sua conta de e-mail, sugerimos que efetue uma cópia de segurança da conta de e-mail em questão. Para isso, consulte o manual "**Exportar do Windows**" no manual "[Migrar o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-a-partir-do-windows)".

### Modificar os parâmetros existentes

Se a sua conta de e-mail já está configurada e tem de aceder aos parâmetros da conta para os alterar:

- Vá a `Ficheiro`{.action} a partir da barra de menu no topo do seu ecrã.
- Selecione a conta a modificar no menu suspenso **(1)**.
- Clique em `Definições da conta`{.action} **(2)** em baixo.
- Clique em `Definições da conta...`{.action} **(3)** para aceder à janela de definições.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail .h-500}

- A janela de definições das contas aparece, selecione a conta de e-mail em questão e clique em `Modificar...`{.action}.

![Outlook](images/config-outlook-emailpro07.png){.thumbnail .h-500}

Para configurar a sua conta, siga as instruções a partir do **passo 2** na secção [Adicionar a conta](#add-account) deste guia.

### Definições gerais de envio e receção <a name="settings-account"></a>

#### Definições de receção IMAP e POP <a name="imap-pop"></a>

Para a receção dos e-mails, ao escolher o tipo de conta, aconselhamos a utilização em **IMAP**. Pode no entanto selecionar **POP**.

Selecione o separador correspondente ao seu tipo de configuração:

> [!tabs]
> **Configuração IMAP**
>>
>> - **Nome de utilizador**: preencha o endereço de e-mail **completa**.
>> - **Palavra-passe**: preencha a palavra-passe do endereço de e-mail.
>> - **Servidor de entrada**: pro?.mail.ovh.net (substitua bem o "?" pelo número do seu servidor).
>> - **Porto**: 993.
>> - **Tipo de segurança**: SSL/TLS.
>>
> **Configuração POP**
>>
>> - **Nome de utilizador**: preencha o endereço de e-mail **completa**.
>> - **Palavra-passe**: preencha a palavra-passe do endereço de e-mail.
>> - **Servidor de entrada**: pro?.mail.ovh.net (substitua bem o "?" pelo número do seu servidor).
>> - **Porto**: 995.
>> - **Tipo de segurança**: SSL/TLS.

#### Definições de envio SMTP <a name="smtp"></a>

Para o envio dos e-mails, encontre abaixo as definições **SMTP** a utilizar:

**Configuração SMTP**

- **Nome de utilizador**: preencha o endereço de e-mail **completa**.
- **Palavra-passe**: preencha a palavra-passe do endereço de e-mail.
- **Servidor de saída**: pro?.mail.ovh.net (substitua bem o "?" pelo número do seu servidor).
- **Porto**: 587.
- **Tipo de segurança**: STARTTLS.

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Outlook no macOS, consulte [Central de Ajuda da Microsoft](https://support.microsoft.com/pt-pt/office/adicionar-uma-conta-de-correio-em-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurar um endereço de e-mail no Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Configurar uma conta Exchange no Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Fale com nossa [comunidade de utilizadores](/links/community).