---
title: "MX Plan - Configurar um endereço de e-mail no Outlook para Windows"
excerpt: "Saiba como configurar um endereço de e-mail MX Plan no Outlook para Windows"
updated: 2024-02-16
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As contas MX Plan podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir.

**Saiba como configurar o endereço de e-mail MX Plan no Outlook para Windows.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
> 

## Requisitos

- Ter um endereço de e-mail MX Plan (incluído no serviço MX Plan ou num serviço de [alojamento web da OVHcloud](/links/web/hosting)).
- Dispor de um programa Microsoft Outlook ou posterior.
- Dispor das credenciais do endereço de e-mail que pretende configurar.

> [!primary]
>
> Se utilizar o Outlook para Mac, consulte o nosso manual [Configurar um endereço de e-mail no Outlook para Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>

## Instruções

> [!alert]
>
> Antes de iniciar a configuração com este guia, certifique-se de que a bandeira no canto superior direito desta página corresponde ao seu país ou região, uma vez que os parâmetros dependem da sua localização.

### Adicionar a conta

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ficheiro`{.action} e selecione `Adicionar Conta`{.action}.

- Introduza o seu endereço de e-mail e clique em `Opções avançadas`{.action}. De seguida, selecione a caixa `Permitir configurar manualmente a minha conta`{.action} e clique em `Ligar`{.action}. 

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

> [!primary]
>
> Não sabe se deve configurar a sua conta de e-mail em **POP** ou **IMAP**?
>
> Antes de prosseguir, consulte a secção « [POP ou IMAP. Qual é a diferença?](#popimap) » deste guia.
>
> Nas configurações seguintes, verá a possibilidade de inserir 2 nomes de hosts diferentes para o mesmo servidor (entrada ou saída). Estes valores referem-se exatamente ao mesmo servidor e foram implementados para facilitar a introdução e evitar a confusão entre os protocolos POP, IMAP e SMTP que utilizam portas diferentes.

Para configurar o seu endereço de e-mail, clique nos separadores abaixo para seguir os passos.

> [!tabs]
> **Etapa 1**
>> Entre os diferentes tipos de conta, escolha entre IMAP e POP. <br>Aconselhamos uma utilização em IMAP.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-600}
>>
> **Etapa 2**
>> Introduza a palavra-passe do seu endereço de e-mail e clique em `Seguinte`{.action}.
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-600}
>>
> **Etapa 3**
>> Se não for possível configurar o endereço automaticamente no Outlook, será exibida esta janela. Clique em `Editar definições da conta`{.action}. Em função da sua escolha (**POP** ou **IMAP**), passe à etapa 4 correspondente.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-600}
>>
> **4 - IMAP**
>> Se escolheu IMAP, insira os parâmetros a seguir. Se tiver escolhido o POP, clique no separador « **Passo 4 - POP** ».<br>
>> Em **Correio a Receber**, introduza:<br>- O servidor **imap.mail.ovh.net** ou **ssl0.ovh.net** <br>- Porta **993**<br>- Método de encriptação **SSL/TLS**<br><br>Em **E-mail de saída**, introduza:<br>- O servidor **smtp.mail.ovh.net** ou **ssl0.ovh.net** <br>- Porta **465**<br>- Método de encriptação **SSL/TLS**<br><br>Clique em `Seguinte`{.action} para validar.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-600}
>>
> **Passo 4 - POP**
>> Em **Correio a Receber**, introduza:<br>- O servidor **pop.mail.ovh.net** ou **ssl0.ovh.net** <br>- Porta **995**<br>- Método de encriptação **SSL/TLS**<br><br>Em **E-mail de saída**, introduza:<br>- O servidor **smtp.mail.ovh.net** ou **ssl0.ovh.net** <br>- Porta **465**<br>- Método de encriptação **SSL/TLS**<br><br>Clique em `Seguinte`{.action} para validar.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05-pop.png){.thumbnail .h-600}

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que permite aceder ao seu endereço de e-mail a partir de um browser. disponível no endereço [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, não hesite em consultar o nosso guia [Consultar a sua conta Exchange a partir da interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Recuperar um backup do seu endereço de e-mail

Se tiver de efetuar uma operação suscetível de causar a perda dos dados da sua conta de e-mail, sugerimos que efetue uma cópia de segurança da conta de e-mail em questão. Para isso, consulte o manual "**Exportar do Windows**" no manual [Migrar o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-a-partir-do-windows).

### Modificar os parâmetros existentes

Se a sua conta de e-mail já está configurada e tem de aceder aos parâmetros da conta para os alterar:

- Aceda ao `Ficheiro`{.action} a partir da barra de menu na parte superior do ecrã e selecione a conta a alterar no menu pendente **(1)**.
- Clique em `Parâmetros da conta`{.action}**(2)**.
- Clique em `Parâmetros do servidor`{.action}**(3)** para aceder à janela de configuração.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

A janela está dividida em duas partes, **Correio de entrada** e **Correio de saída**. Clique em qualquer uma para as poder alterar.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Lembrete dos parâmetros POP, IMAP e SMTP <a name="popimap-settings"></a>

Para a receção dos e-mails, ao escolher o tipo de conta, recomendamos uma utilização em **IMAP**. No entanto, pode selecionar **POP**. Para compreender o funcionamento respetivo, consulte a secção « [POP ou IMAP, qual é a diferença?](#popimap) ».

- **Configuração em POP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail|
|Servidor (entrada)|pop.mail.ovh.net **ou** ssl0.ovh.net|
|Porta|995|
|Tipo de segurança|SSL/TLS|

- **Configuração em IMAP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail|
|Servidor (entrada)|imap.mail.ovh.net **ou** ssl0.ovh.net|
|Porta|993|
|Tipo de segurança|SSL/TLS|

Se necessitar de inserir manualmente as definições de **SMTP** nas preferências da conta para enviar uma mensagem de correio eletrónico, poderá encontrar em seguida as definições a utilizar:

- **Configuração SMTP**

|Informação|Descrição|
|---|---|
|Nome de utilizador|Introduza o endereço de e-mail **completo**|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail|
|Servidor (de saída)|smtp.mail.ovh.net **ou** ssl0.ovh.net|
|Porta|465|
|Tipo de segurança|SSL/TLS|

### POP ou IMAP, qual é a diferença? <a name="popimap"></a>

Quando configura manualmente o endereço de e-mail, o cliente de e-mail pergunta se pretende utilizar o protocolo **POP** (**P**ost **O**ffice **P**rotocol) ou **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). Para que se compreenda corretamente, é preciso situar a função dos protocolos POP e IMAP na configuração do seu endereço de e-mail.

Quando configurar o cliente de correio eletrónico, terá de introduzir as informações do **servidor de entrada** para receber as mensagens e o **servidor de envio** para enviar as mensagens. Para enviar os e-mails, não há escolha, é o protocolo **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) que é utilizado. Para a receção, poderá escolher entre **POP** ou **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Para compreender a diferença entre a utilização do protocolo POP e IMAP, vamos detalhar os elementos que compõem o tratamento dos seus e-mails em receção:

1. **O seu dispositivo**: um computador, um smartphone ou um tablet. É o vosso suporte de consulta.
2. **O seu cliente de e-mail** : aplicação dedicada à gestão dos seus e-mails. A sua escolha determinará o nível de ergonomia e de funcionalidades que terá de consultar os seus e-mails.
3. **O protocolo de receção** : escolha que determina a forma de verificar os e-mails no seu dispositivo. A sua escolha afeta os outros dispositivos que acedem à mesma conta de e-mail.
    - **IMAP**: O cliente de e-mail interroga o servidor de e-mail e transfere os e-mails para o seu dispositivo. Quando consulta uma mensagem de correio eletrónico não lida, o servidor marca-a como "lido". Os outros dispositivos configurados em IMAP poderão constatar este estado e consultar este e-mail enquanto não tiver sido eliminado num dos dispositivos.
    - **POP**: O cliente de e-mail interroga o servidor de e-mail e transfere os e-mails para o seu dispositivo. Por predefinição, uma vez o e-mail transferido para o seu dispositivo, a mensagem é eliminada do servidor. Por isso, os outros dispositivos ligados a este endereço de e-mail não poderão consultar este e-mail.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Esta descrição é uma síntese, e representa o funcionamento padrão destes dois protocolos. É possível configurar o POP para que os e-mails não sejam eliminados quando recolhe os seus e-mails. O nosso objetivo é descrever o funcionamento nativo destes dois protocolos.

## Quer saber mais?

[Configurar uma conta Email Pro no Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Configurar uma conta Exchange no Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
