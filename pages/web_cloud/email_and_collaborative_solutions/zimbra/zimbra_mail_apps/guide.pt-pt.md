---
title: "Zimbra - Configurar a sua conta de e-mail num software de mensagens"
excerpt: "Escolha o método de configuração adequado à sua oferta Zimbra Starter ou Pro e ao seu software de mensagens"
updated: 2026-05-04
---

## Objetivo

Com a oferta Zimbra, a OVHcloud propõe-lhe uma plataforma de mensagens colaborativa open source com todas as funcionalidades necessárias para uma utilização profissional. Este guia ajuda-o a escolher o método de configuração adequado à sua oferta Zimbra e ao seu software de mensagens.

**Descubra qual o método a escolher para configurar a sua conta de e-mail Zimbra no software de mensagens da sua preferência.**

## Requisitos

- Ter subscrito uma conta de e-mail numa das nossas [soluções Zimbra](/links/web/emails-zimbra) (**Zimbra Starter** ou **Zimbra Pro**).
- Ter instalado um software de mensagens no dispositivo da sua escolha.
- Possuir os dados de acesso do endereço de e-mail a configurar.

<!-- CP-NAV-START:web-zimbra -->
---

### Acesso à área de cliente OVHcloud

- **Link direto:** [Zimbra](/links/control-panel/web-zimbra)
- **Para aceder aos seus serviços:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## Instruções

### Identificar a sua oferta Zimbra <a name="identifier-offre"></a>

O método de configuração a utilizar depende da sua oferta Zimbra. As duas ofertas não suportam os mesmos protocolos.

| Oferta | Protocolos suportados | Funcionalidades sincronizadas |
|---|---|---|
| **Zimbra Starter** | IMAP, POP, SMTP | Apenas e-mails |
| **Zimbra Pro** | IMAP, POP, SMTP, **ActiveSync**, **EWS** | E-mails, calendário, contactos, tarefas |

> [!primary]
>
> Para identificar a sua oferta, inicie sessão na sua [área de cliente OVHcloud](/links/manager) e aceda à secção `Web Cloud`{.action} e, em seguida, a `Zimbra Mail`{.action}. No separador `Contas de email`{.action}, a oferta é indicada na coluna **Plano** de cada conta.

### Configurar uma conta Zimbra Pro <a name="config-zimbra-pro"></a>

> [!success]
>
> Para tirar pleno partido das funcionalidades colaborativas do Zimbra Pro (sincronização do calendário, dos contactos e das tarefas), utilize os protocolos **ActiveSync** ou **EWS** através dos guias dedicados abaixo. A configuração IMAP/POP continua disponível, mas apenas sincroniza os e-mails.

Clique no separador correspondente ao tipo de dispositivo que utiliza:

> [!tabs]
> **Computador Windows**
>>
>> - [Outlook clássico via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_windows)
>>
> **Computador Apple Mac**
>>
>> - [Mail via EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_macos)
>> - [Outlook via EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_macos)
>>
> **iPhone ou iPad**
>>
>> - [Mail via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_app_ios)
>> - [Outlook via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_ios)
>>
> **Smartphone ou tablet Android**
>>
>> - [Gmail via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_gmail_app_android)
>> - [Outlook via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_android)
>>

### Configurar uma conta Zimbra Starter (ou uma conta Zimbra Pro em IMAP/POP) <a name="mail-config"></a>

Para a oferta **Zimbra Starter**, ou caso prefira uma configuração IMAP/POP para a sua conta **Zimbra Pro**, utilize os guias abaixo.

> [!primary]
>
> Os guias abaixo são partilhados com a oferta MX Plan, uma vez que os parâmetros IMAP/POP/SMTP são estritamente idênticos para as duas ofertas. É por essa razão que os links incluem a menção "MX Plan" no respetivo título.

Clique no separador correspondente ao tipo de dispositivo que utiliza:

> [!tabs]
> **Computador Windows**
>>
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Correio para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Computador Apple Mac**
>>
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone ou iPad**
>>
>> - [Mail para iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone ou tablet Android**
>>
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interface web**
>>
>> - [Interface online do Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Utilizar a aplicação móvel Zimbra <a name="config-zimbra-app"></a>

Compatível com as ofertas **Zimbra Starter** e **Zimbra Pro**, a aplicação móvel Zimbra (Android e iOS) permite aceder à sua conta através do protocolo nativo do Zimbra.

- [Configurar a aplicação móvel Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

### Parâmetros IMAP, POP e SMTP de referência <a name="popimap-settings"></a>

Se o seu software de mensagens necessitar de uma configuração manual, utilize os parâmetros seguintes.

#### Servidores de receção

Para a receção dos e-mails, recomendamos o protocolo **IMAP**. O protocolo **POP** continua disponível. Clique no separador correspondente ao protocolo da sua escolha:

> [!tabs]
> **IMAP (recomendado)**
>>
>> - **Nome de utilizador**: endereço de e-mail **completo**
>> - **Palavra-passe**: palavra-passe do endereço de e-mail
>> - **Servidor EUROPA (entrada)**: `imap.mail.ovh.net` **ou** `ssl0.ovh.net`
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (entrada)**: `imap.mail.ovh.ca`
>> - **Porta**: 993
>> - **Tipo de segurança**: SSL/TLS
>>
> **POP**
>>
>> - **Nome de utilizador**: endereço de e-mail **completo**
>> - **Palavra-passe**: palavra-passe do endereço de e-mail
>> - **Servidor EUROPA (entrada)**: `pop.mail.ovh.net` **ou** `ssl0.ovh.net`
>> - **Servidor AMÉRICA/ÁSIA-PACÍFICO (entrada)**: `pop.mail.ovh.ca`
>> - **Porta**: 995
>> - **Tipo de segurança**: SSL/TLS
>>

#### Servidor de envio

Para o envio dos e-mails, utilize os parâmetros **SMTP** seguintes:

- **Nome de utilizador**: endereço de e-mail **completo**
- **Palavra-passe**: palavra-passe do endereço de e-mail
- **Servidor EUROPA (saída)**: `smtp.mail.ovh.net` **ou** `ssl0.ovh.net`
- **Servidor AMÉRICA/ÁSIA-PACÍFICO (saída)**: `smtp.mail.ovh.ca`
- **Porta**: 465
- **Tipo de segurança**: SSL/TLS

## Quer saber mais? <a name="go-further"></a>

[Primeiros passos com a oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar a aplicação móvel Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

[Utilizar o webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre a solução Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Caso pretenda beneficiar de assistência na utilização e configuração das suas soluções OVHcloud, sugerimos que consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
