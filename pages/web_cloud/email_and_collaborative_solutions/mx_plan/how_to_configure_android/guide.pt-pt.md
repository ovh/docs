---
title: "MX Plan - Configurar um endereço de e-mail no Gmail para Android"
excerpt: "Aprenda a configurar um endereço de e-mail MX Plan no Android através da aplicação Gmail"
updated: 2023-12-15
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os endereços de e-mail do serviço MX Plan podem ser configurados em diferentes programas de e-mail compatíveis. Isto permite-lhe enviar e receber e-mails no dispositivo que preferir. Neste guia, vamos detalhar o processo de configuração de um endereço de e-mail MX Plan a partir da aplicação Gmail presente nos dispositivos Android.

**Saiba como configurar um endereço de e-mail MX Plan no Android através da aplicação Gmail.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído na oferta MX Plan ou numa oferta de [alojamento web da OVHcloud](/links/web/hosting)).
- Ter a aplicação Gmail no seu dispositivo. Se ainda não estiver presente, pode instalá-la a partir da Google Play Store.
- Ter acesso às credenciais do endereço de e-mail que pretende configurar.

> [!primary]
>
> Esta documentação foi feita a partir de um dispositivo que utiliza a versão 13 do Android.
>

## Instruções

### Como adicionar a sua conta de e-mail

No ecrã principal do dispositivo, aceda à aplicação `Gmail`{.action}.

![mxplan](images/mxplan-android-00.png){.thumbnail .w-400}

A adição de uma conta efetua-se de forma diferente **se nenhuma conta estiver configurada** ou **se uma conta já estiver configurada**. Selecione o separador correspondente a qualquer uma das 2 situações listadas:

> [!tabs]
> **Primeira configuração**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-first.png){.thumbnail}|Selecione `Adicionar um endereço de e-mail`{.action}|
>>
> **Configuração existente**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-existing.png){.thumbnail}|1. Vá para o menu localizado na parte superior esquerda da tela<br><br>2.Selecione `Definições`{.action}<br><br>3.Selecione `Adicionar uma conta`{.action}|
>>

Siga as etapas sucessivas de configuração, navegando nos separadores abaixo:

> [!tabs]
> **Etapa 1**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-01.png){.thumbnail}|A partir do menu Tipo de conta de correio eletrónico, selecione `Outro`{.action}.|
>>
> **Etapa 2**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-02.png){.thumbnail}|Introduza o endereço de correio eletrónico.|
>>
> **Etapa 3**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-03.png){.thumbnail}|Selecione o protocolo de receção de correio eletrónico. É aconselhável selecionar `Pessoal (IMAP)`{.action}<br><br>Encontre [mais detalhes sobre os protocolos POP e IMAP](#popimap) no final deste guia para compreender as suas diferenças.|
>>
> **Etapa 4**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-04.png){.thumbnail}|Introduza a palavra-passe do seu endereço de e-mail. |
>>
> **Etapa 5**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-05.png){.thumbnail}|Preencha as « **Definições do servidor de entrada**»<br><br>- **Nome de utilizador**: O seu endereço de e-mail completo<br>- **Palavra-passe**: A password do seu endereço de e-mail<br>- **Servidor**: introduza **ssl0.ovh.net** |
>>
> **Etapa 6**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-06.png){.thumbnail}|Preencha as « **Definições do servidor de envio**»<br><br>- **Nome de utilizador**: O seu endereço de e-mail completo<br>- **Palavra-passe**: A password do seu endereço de e-mail<br>- **Servidor SMTP**: introduza **ssl0.ovh.net** |
>>
> **Etapa 7**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-07.png){.thumbnail}|Escolha a frequência da sincronização dos seus e-mails de acordo com as suas preferências.|
>>
> **Etapa 8**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-08.png){.thumbnail}|Defina o nome para apresentar o seu endereço de e-mail na aplicação Gmail e prima `Seguinte`{.action}|
>>

Após a configuração, a conta de e-mail está pronta a usar Pode desde já enviar e receber mensagens a partir da sua aplicação Gmail.

> [!success]
>
> A OVHcloud disponibiliza uma aplicação web que pode utilizar para aceder ao seu e-mail diretamente a partir de um browser, no endereço [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

### Parâmetros POP, IMAP e SMTP

Para a receção dos e-mails, ao escolher o tipo de conta, recomendamos uma utilização em **IMAP**. No entanto, pode selecionar **POP**. Para compreender o seu funcionamento respetivo, consulte a nossa secção [« POP ou IMAP, qual é a diferença ? »](#popimap)

- **Configuração em POP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail|
|Servidor|ssl0.ovh.net|
|Porta|995|
|Tipo de segurança|SSL/TLS|

- **Configuração em IMAP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail|
|Servidor|ssl0.ovh.net|
|Porta|993|
|Tipo de segurança|SSL/TLS|

Se necessitar de inserir manualmente as definições de **SMTP** nas preferências da conta para enviar uma mensagem de correio eletrónico, poderá encontrar em seguida as definições a utilizar:

- **Configuração SMTP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail|
|Servidor|ssl0.ovh.net|
|Porta|465|
|Tipo de segurança|SSL/TLS|

### POP ou IMAP, qual é a diferença? <a name="popimap"></a>

Quando configura manualmente o endereço de e-mail, o cliente de e-mail pergunta se pretende utilizar o protocolo **POP** (**P**ost **O**ffice **P**rotocol) ou **IMAP** (**I**nternet **M**essage **A**ccess **P**rotocol). Para que conste, é necessário situar a posição dos protocolos POP e IMAP na configuração do seu endereço de e-mail.

Quando configurar o cliente de correio eletrónico, terá de introduzir as informações do **servidor de entrada** para receber as mensagens e o **servidor de envio** para enviar as mensagens. Para enviar os e-mails, não há escolha, é o protocolo **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) que é utilizado. Para a receção, poderá escolher entre **POP** ou **IMAP**.

![mxplan](images/mxplan-android-popimap-01.png){.thumbnail}

Para compreender a diferença entre a utilização do protocolo POP e IMAP, vamos decompor os elementos que compõem o tratamento dos seus e-mails em receção:

1. **O seu dispositivo**: um computador, um smartphone ou um tablet. É o vosso suporte de consulta.

2. **O seu cliente de e-mail** : software ou aplicação dedicados() à gestão dos seus e-mails. A sua escolha determinará o nível de ergonomia e de funcionalidades que terá de consultar os seus e-mails.

3. **O protocolo de receção** : escolha que determina a forma de verificar os e-mails no seu dispositivo. A sua escolha afeta os outros dispositivos que acedem à mesma conta de e-mail.
    - **IMAP**: O cliente de e-mail interroga o servidor de e-mail e transfere os e-mails para o seu dispositivo. Quando consulta uma mensagem de correio eletrónico não lida, o servidor marca-a como « ou ». Os outros dispositivos configurados em IMAP poderão constatar este estado e consultar este e-mail enquanto não tiver sido eliminado num dos dispositivos.
    - **POP**: O seu cliente de e-mail interroga o servidor de e-mail e vai descarregar os e-mails para o seu dispositivo. Por predefinição, uma vez o e-mail transferido para o seu dispositivo, a mensagem é eliminada do servidor. Por isso, os outros dispositivos ligados a este endereço de e-mail não poderão consultar este e-mail.

![mxplan](images/mxplan-android-popimap-02.png){.thumbnail}

> [!primary]
>
> Esta descrição é uma síntese, e representa o funcionamento padrão destes dois protocolos. É possível configurar o POP para que os e-mails não sejam eliminados quando recolhe os seus e-mails. O objetivo aqui é descrever o funcionamento nativo destes dois protocolos e evitar manipulações suplementares de forma a corresponder às suas necessidades.

## Quer saber mais?

[Configurar a sua conta E-mail Pro no Android através da aplicação Gmail](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).

[Configurar a sua conta Exchange no Android através da aplicação Gmail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.