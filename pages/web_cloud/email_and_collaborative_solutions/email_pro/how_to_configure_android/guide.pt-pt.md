---
title: "E-mail Pro - Configurar um endereço de e-mail no Gmail para Android"
excerpt: "Aprenda a configurar uma conta E-mail Pro no Android, através da aplicação Gmail"
updated: 2024-03-15
---

<style>
.w-400 {
max-width:400px!important;
}
.h-600 {
max-height:600px!important;
}
</style>

## Objetivo

Os endereços de e-mail do serviço E-mail Pro podem ser configurados em vários softwares de e-mail compatíveis. Isto permite-lhe enviar e receber e-mails no dispositivo que preferir. Encontre neste guia as etapas de configuração de um endereço de e-mail E-mail Pro a partir da aplicação Gmail presente nos dispositivos Android.

**Saiba como configurar uma conta E-mail Pro no Android através da aplicação Gmail.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção « Ir mais longe » deste guia.

## Requisitos

- Ter um plano [E-mail Pro](/links/web/email-pro).
- Ter a aplicação Gmail no seu dispositivo. Pode instalá-la a partir da Google Play Store.
- Dispor de credenciais relativas ao endereço de e-mail que pretende configurar.

> [!primary]
>
> Esta documentação foi feita a partir de um dispositivo que utiliza a versão 13 do Android.

## Na Prática

### Como adicionar a sua conta de e-mail

> [!primary]
>
> Nos nossos exemplos, utilizamos a menção servidor: pro**?**.mail.ovh.net. Deverá substituir o «? » pelo número que identifica o servidor do seu serviço E-mail Pro.
>
> Encontre este algarismo na sua [Área de Cliente OVHcloud](/links/manager), na rubrica `Web Cloud`{.action} e `E-mail Pro`{.action}. O nome do servidor está visível na tabela **Ligação** do separador ‘Informações gerais`{.action}.
>

No ecrã inicial do seu dispositivo, aceda à aplicação `Gmail`{.action}.

![emailpro](images/emailpro-android-00.png){.thumbnail .w-400}

A adição de uma conta será diferente **se nenhuma conta estiver parametrizada** ou **se uma conta já estiver parametrizada**. Selecione o separador correspondente a qualquer uma das 2 situações listadas:

> [!tabs]
> **Primeira configuração**
>>
>> Selecione `Adicionar um endereço de e-mail`{.action}<br><br>![emailpro](images/android-first.png){.thumbnail .h-600}
>>
> **Configuração existente**
>>
>> 1. Vá para o menu situado no canto superior esquerdo do ecrã<br><br>
>> 2. Selecione `Parâmetros`{.action}<br><br>
>> 3. Selecione `Adicionar uma conta`{.action}<br><br>![emailpro](images/android-existing.png){thumbnail .h-600}

Siga as etapas sucessivas de configuração, navegando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>> No menu dos tipos de contas de e-mail, selecione `Outro`{.action}.<br><br>>
>> ![emailpro](images/emailpro-android-01.png){.thumbnail .h-600}
>>
> **Etapa 2**
>> Introduza o seu endereço de correio eletrónico.<br><br>
>> ![emailpro](images/emailpro-android-02.png){.thumbnail .h-600}
>>
> **Etapa 3**
>> Selecione o protocolo de receção de e-mail. Aconselhamos que selecione `Pessoal (IMAP)`{.action}<br><br>Encontre [mais pormenores sobre os protocolos POP e IMAP](#popimap) no final deste guia para compreender as suas diferenças.<br><br>
>> ![emailpro](images/emailpro-android-03.png){.thumbnail .h-600}
>>
> **Etapa 4**
>> Introduza a palavra-passe do seu endereço de e-mail.<br><br>
>> ![emailpro](images/emailpro-android-04.png){.thumbnail .h-600}
>>
> **Etapa 5**
>> Complete as « **Configurações de servidor de entrada** »<br><br>- **Nome de utilizador**: O seu endereço de correio eletrónico completo<br>- **Palavra-passe**: A palavra-passe do seu endereço de correio eletrónico<br>- **Servidor**: Introduza **pro**?*.mail.ovh.net** (substitua bem «***?**» pelo número do seu servidor). <br><br>
>> ![emailpro](images/emailpro-android-05.png){.thumbnail .h-600}
>>
> **Fase 6**
>> Complete as « **Configurações do servidor de saída** »<br><br>- **Nome de utilizador**: O seu endereço de correio eletrónico completo<br>- **Palavra-passe**: A palavra-passe do seu endereço de correio eletrónico<br>- **Servidor SMTP**: Introduza **pro**?*.mail.ovh.net** (substitua bem «**?**» pelo número do seu servidor). <br><br>
>> ![emailpro](images/emailpro-android-06.png){.thumbnail .h-600}
>>
> **Etapa 7**
>> Escolha a frequência com que pretende que os seus e-mails fiquem sincronizados.<br><br>
>>![emailpro](images/emailpro-android-07.png){.thumbnail .h-600}
>>
> **Etapa 8**
>> Determine o nome a ser apresentado do seu endereço de e-mail na aplicação Gmail e prima a tecla "Seguinte" {.action}.<br><br>
>> ![emailpro](images/emailpro-android-08.png){.thumbnail .h-600}
>>

Depois de configurar o endereço de e-mail, já só precisa de o utilizar ! Pode desde já enviar e receber mensagens a partir da sua aplicação Gmail.

> [!success]
>
> A OVHcloud disponibiliza uma aplicação web que pode utilizar para aceder ao seu e-mail diretamente a partir do browser da Web: [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

### Definições POP, IMAP e SMTP

Para a receção dos e-mails, ao escolher o tipo de conta, recomendamos uma utilização em **IMAP**. No entanto, pode selecionar **POP**. Para compreender o funcionamento respetivo, consulte a nossa secção ["POP ou IMAP, qual é a diferença?"](#popimap)

- **Para uma configuração em POP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail|
|Servidor|pro***?*.mail.ovh.net (substitua bem «**?**» pelo número do seu servidor)|
|Porta|995|
|Tipo de segurança|SSL/TLS|

- **Para uma configuração em IMAP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail|
|Servidor|pro***?*.mail.ovh.net (substitua bem «**?**» pelo número do seu servidor)|
|Porta|993|
|Tipo de segurança|SSL/TLS|

Se necessitar de inserir manualmente as definições **SMTP** nas preferências da conta para enviar uma mensagem de correio eletrónico, poderá encontrar abaixo as definições que deve utilizar:

- **Configuração SMTP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Introduza a palavra-passe do endereço de e-mail|
|Servidor|pro***?*.mail.ovh.net (substitua bem «**?**» pelo número do seu servidor)|
|Porta|587|
|Tipo de segurança|STARTTLS|

### POP ou IMAP, qual é a diferença ? <a name="popimap"></a>

Quando configura manualmente o seu endereço de e-mail, o seu cliente de e-mail pergunta se deseja utilizar o protocolo **POP** (**P**ost **O**ffice **P**rotocol) ou **IMAP**(**I**Internet **M**sage **A**cess **P**rotocol). Para que conste, é necessário situar a posição dos protocolos POP e IMAP na configuração do seu endereço de e-mail.

Enquanto configurar o cliente de correio eletrónico, deve introduzir as informações do **servidor de entrada** para receber correio eletrónico e **servidor de saída** para enviar correio eletrónico. Para enviar os e-mails, não há escolha, é utilizado o protocolo **SMTP** (**S**imple **M**ail **T**transfer **P**rotocol). Para a receção, poderá escolher entre **POP** ou **IMAP**.

![emailpro](images/popimap-01.png){.thumbnail}

Para compreender a diferença entre a utilização do protocolo POP e IMAP, vamos detalhar os elementos que compõem o tratamento dos seus e-mails em receção:

1. **O seu dispositivo** : um computador, um smartphone ou um tablet. É o vosso suporte de consulta.

2. **O seu cliente de e-mail** : software ou aplicação dedicados à gestão dos seus e-mails. A sua escolha determinará o nível de ergonomia e de funcionalidades que terá de consultar os seus e-mails.

3. **O protocolo de receção** : escolha que determina a forma de consultar os e-mails no seu dispositivo. A sua escolha afeta os outros dispositivos que acedem à mesma conta de e-mail.
        - **IMAP** : o cliente de correio eletrónico interroga o servidor de correio eletrónico e transfere o correio eletrónico para o dispositivo. Quando consulta uma mensagem de correio eletrónico não lida, o servidor marca-a como « ou ». Os outros dispositivos configurados em IMAP poderão constatar este estado e consultar este e-mail enquanto não tiver sido eliminado num dos dispositivos.
        - **POP** : o seu cliente de correio eletrónico interroga o servidor de correio eletrónico e transfere os e-mails para o seu dispositivo. Por predefinição, uma vez o e-mail transferido para o seu dispositivo, a mensagem é eliminada do servidor. Por isso, os outros dispositivos ligados a este endereço de e-mail não poderão consultar este e-mail.

![emailpro](images/popimap-02.png){.thumbnail}

> [!primary]
>
> Esta descrição é uma síntese, e representa o funcionamento padrão destes dois protocolos. É possível configurar o POP para que os e-mails não sejam eliminados quando recolhe os seus e-mails. O objetivo é descrever o funcionamento nativo destes dois protocolos e evitar manipulações suplementares para responder às suas necessidades.

## Vá mais longe

[MX Plan - Configurar um endereço de e-mail no Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).

[Exchange - Configurar um endereço de e-mail no Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com](https://community.ovh.com).