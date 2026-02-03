---
title: "MX Plan / Zimbra Starter - Configurar o seu endereço de e-mail no Outlook clássico para Windows"
excerpt: "Descubra como configurar o seu endereço de e-mail MX Plan no Outlook clássico para Windows"
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

Os endereços de e-mail das ofertas **MX Plan** e [Zimbra Starter](/links/web/emails-zimbra) podem ser configurados em um cliente de e-mail compatível. Isso permite enviar e receber mensagens do aplicativo de sua escolha.

**Saiba como configurar o endereço de e-mail MX Plan no Outlook para Windows.**

## Requisitos

- Ter uma solução de e-mail OVHcloud previamente configurada, dentre as seguintes:
    - **MX Plan** oferecido com nossas [ofertas de alojamento web](/links/web/hosting) ou incluído em um [alojamento gratuito 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter (apenas).
- Ter a [nova versão do Outlook](https://support.microsoft.com/pt-pt/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) instalada no Windows.
- Possuir as credenciais do endereço de e-mail que deseja configurar.

/// details | Informações relativas à gestão e configuração dos serviços OVHcloud

A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.

Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção "[Quer saber mais?](#go-further)" deste guia.

///

> [!primary]
>
> Se utilizar o Outlook para Mac, consulte o nosso manual "[Configurar um endereço de e-mail no Outlook para Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)".
>

## Instruções

> [!warning]
>
> Esta documentação aplica-se apenas ao **Outlook clássico** disponível na suite Microsoft 365. Se utilizar o novo Outlook, consulte o nosso guia "[MX Plan / Zimbra Starter - Adicionar uma conta de e-mail no novo Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)".
>
> Para instalar o Outlook clássico no seu computador Windows, descarregue-o a partir da página Microsoft "[Instalar ou reinstalar o Outlook clássico num PC Windows](https://support.microsoft.com/pt-pt/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e instale-o.
>
> Após a instalação, para distinguir as duas versões quando estiverem instaladas, escreva "Outlook" na barra de pesquisa do Windows. Poderá então constatar a diferença como abaixo.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Adicionar a conta <a name="add-account"></a>

> [!primary]
>
> Não sabe se deve configurar a sua conta de e-mail em **POP** ou **IMAP**?
>
> Antes de prosseguir, consulte a secção "[POP ou IMAP. Qual é a diferença?](#popimap)" deste guia.
>
> Nas configurações seguintes, verá a possibilidade de inserir 2 nomes de hosts diferentes para o mesmo servidor (entrada ou saída). Estes valores referem-se exatamente ao mesmo servidor e foram implementados para facilitar a introdução e evitar a confusão entre os protocolos POP, IMAP e SMTP que utilizam portas diferentes.

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ficheiro`{.action} e selecione `Adicionar Conta`{.action}.

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

Para configurar o seu endereço de e-mail, siga as etapas clicando nos separadores abaixo.

> [!warning]
>
> É necessário preencher corretamente o valor correspondente à sua localização (**EUROPA** ou **AMÉRICA / ÁSIA-PACÍFICO**).

Para configurar o seu endereço de e-mail, clique nos separadores abaixo para seguir os passos.

> [!tabs]
> **Passo 1**
>>
>> - A partir da janela **Adicionar uma conta**, selecione `Configuração manual ou tipos de servidores adicionais`{.action}.
>> - Clique em `Seguinte`{.action} para continuar.
>> - Selecione `POP ou IMAP`{.action}.
>> - Clique em `Seguinte`{.action} para continuar.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-500}
>>
> **Passo 2**
>>
>> Introduza as informações de ligação à sua conta **(1)**:
>>
>> Informações do utilizador <br>
>> **O seu nome**: defina um nome de exibição.<br>
>> **Endereço de correio**: introduza o seu endereço de e-mail completo.<br>
>>
>> Informações do servidor <br>
>> - **Tipo de conta**: selecione IMAP<br>
>> - **Servidor de correio entrante**: <br>
>>      - **EUROPA**: imap.mail.ovh.net **ou** ssl0.ovh.net <br>
>>      - **AMÉRICA/ÁSIA-PACÍFICO**: imap.mail.ovh.ca <br>
>> - **Servidor de correio saínte (SMTP)**: <br>
>>      - **EUROPA**: smtp.mail.ovh.net **ou** ssl0.ovh.net <br>
>>      - **AMÉRICA/ÁSIA-PACÍFICO**: smtp.mail.ovh.ca <br>
>>
>> Informações de ligação <br>
>> **Nome de utilizador**: introduza o seu endereço de e-mail completo.<br>
>> **Palavra-passe**: introduza a palavra-passe associada ao seu endereço de e-mail.<br>
>>
>> Clique em `Definições adicionais...`{.action} **(2)** e passe ao passo seguinte
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-500}
>>
> **Passo 3**
>>
>> A partir do separador `Servidor saínte`, marque `O meu servidor saínte (SMTP) requer autenticação`{.action} e deixe `Utilizar as mesmas definições que o meu servidor de correio entrante`{.action} selecionado.
>>
>> A partir do separador `Definições avançadas`:
>>
>> - **Servidor entrante (IMAP)**: 993
>> - **Utilizar o tipo de ligação encriptada seguinte**: SSL/TLS
>> - **Servidor de correio saínte (SMTP)**: 465
>> - **Utilizar o tipo de ligação encriptada seguinte**: SSL/TLS
>>
>> Clique em `OK`{.action} para validar as informações. Clique em `Seguinte`{.action} para iniciar a configuração da conta.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-500}
>>
> **Passo 4**
>>
>> Clique em `Seguinte`{.action} para iniciar a configuração da conta. Se os parâmetros forem validados, obterá a janela abaixo.
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-500}
>>

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que permite aceder ao seu endereço de e-mail a partir de um browser. O Webmail OVHcloud está acessível [aqui](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, não hesite em consultar o nosso guia [Consultar a sua conta Exchange a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Recuperar um backup do seu endereço de e-mail

Se tiver de efetuar uma operação suscetível de causar a perda dos dados da sua conta de e-mail, sugerimos que efetue uma cópia de segurança da conta de e-mail em questão. Para isso, consulte o manual "**Exportar do Windows**" no manual "[Migrar o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-a-partir-do-windows)".

### Modificar os parâmetros existentes

Se a sua conta de e-mail já está configurada e tem de aceder aos parâmetros da conta para os alterar:

- Vá a `Ficheiro`{.action} a partir da barra de menu no topo do seu ecrã.
- Selecione a conta a modificar no menu pendente **(1)**.
- Clique em `Definições da conta`{.action} **(2)** em baixo.
- Clique em `Definições da conta...`{.action} **(3)** para aceder à janela de definições.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

- A janela de definições das contas aparece, selecione a conta de e-mail em questão e clique em `Modificar...`{.action}.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Definições gerais de envio e receção <a name="settings-account"></a>

#### Definições de receção IMAP e POP <a name="imap-pop"></a>

Para a receção de e-mails, ao escolher o tipo de conta, recomendamos a utilização em **IMAP**. Pode, no entanto, selecionar **POP**.

> [!warning]
>
> É necessário preencher corretamente o valor correspondente à sua localização (**EUROPA** ou **AMÉRICA / ÁSIA-PACÍFICO**).

Selecione o separador correspondente ao seu tipo de configuração:

> [!tabs]
> **Configuração IMAP**
>>
>> - **Nome de utilizador**: introduza o endereço de e-mail **completo**.
>> - **Palavra-passe**: introduza a palavra-passe do endereço de e-mail.
>> - **Servidor EUROPA (entrante)**: imap.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (entrante)**: imap.mail.ovh.ca.
>> - **Porto**: 993.
>> - **Tipo de segurança**: SSL/TLS.
>>
> **Configuração POP**
>>
>> - **Nome de utilizador**: introduza o endereço de e-mail **completo**.
>> - **Palavra-passe**: introduza a palavra-passe do endereço de e-mail.
>> - **Servidor EUROPA (entrante)**: pop.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (entrante)**: pop.mail.ovh.ca.
>> - **Porto**: 995.
>> - **Tipo de segurança**: SSL/TLS.

#### Definições de envio SMTP <a name="smtp"></a>

Para o envio de e-mails, encontre abaixo as definições **SMTP** a utilizar:

**Configuração SMTP**

- **Nome de utilizador**: introduza o endereço de e-mail **completo**.
- **Palavra-passe**: introduza a palavra-passe do endereço de e-mail.
- **Servidor EUROPA (saínte)**: smtp.mail.ovh.net **ou** ssl0.ovh.net.
- **Servidor AMÉRICA/ÁSIA-PACÍFICO (saínte)**: smtp.mail.ovh.ca.
- **Porto**: 465.
- **Tipo de segurança**: SSL/TLS.

### POP ou IMAP, qual é a diferença? <a name="popimap"></a>

Quando configura manualmente o endereço de e-mail, o cliente de e-mail pergunta se pretende utilizar o protocolo **POP** (**P**ost **O**ffice **P**rotocol) ou **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). Para que se compreenda corretamente, é preciso situar a função dos protocolos POP e IMAP na configuração do seu endereço de e-mail.

Quando configurar o cliente de correio eletrónico, terá de introduzir as informações do **servidor de entrada** para receber as mensagens e o **servidor de envio** para enviar as mensagens. Para enviar os e-mails, não há escolha, é o protocolo **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) que é utilizado. Para a receção, poderá escolher entre **POP** ou **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Para compreender a diferença entre a utilização do protocolo POP e IMAP, vamos detalhar os elementos que compõem o tratamento dos seus e-mails em receção:

1. **O seu dispositivo**: um computador, um smartphone ou um tablet. É o vosso suporte de consulta.
2. **O seu cliente de e-mail**: aplicação dedicada à gestão dos seus e-mails. A sua escolha determinará o nível de ergonomia e de funcionalidades que terá de consultar os seus e-mails.
3. **O protocolo de receção**: escolha que determina a forma de verificar os e-mails no seu dispositivo. A sua escolha afeta os outros dispositivos que acedem à mesma conta de e-mail.
    - **IMAP**: O cliente de e-mail interroga o servidor de e-mail e transfere os e-mails para o seu dispositivo. Quando consulta uma mensagem de correio eletrónico não lida, o servidor marca-a como "lido". Os outros dispositivos configurados em IMAP poderão constatar este estado e consultar este e-mail enquanto não tiver sido eliminado num dos dispositivos.
    - **POP**: O cliente de e-mail interroga o servidor de e-mail e transfere os e-mails para o seu dispositivo. Por predefinição, uma vez o e-mail transferido para o seu dispositivo, a mensagem é eliminada do servidor. Por isso, os outros dispositivos ligados a este endereço de e-mail não poderão consultar este e-mail.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Esta descrição é uma síntese, e representa o funcionamento padrão destes dois protocolos. É possível configurar o POP para que os e-mails não sejam eliminados quando recolhe os seus e-mails. O nosso objetivo é descrever o funcionamento nativo destes dois protocolos.

## Quer saber mais? <a name="go-further"></a>

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir da aplicação Outlook no macOS, consulte o [Centro de Ajuda da Microsoft](https://support.microsoft.com/pt-pt/office/adicionar-uma-conta-de-correio-em-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurar uma conta Email Pro no Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Configurar uma conta Exchange no Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Fale com a nossa [comunidade de utilizadores](/links/community).