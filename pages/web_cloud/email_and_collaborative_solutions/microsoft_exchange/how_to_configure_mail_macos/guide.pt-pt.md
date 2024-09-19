---
title: Exchange - Configurar uma conta de e-mail no Mail do macOS
excerpt: Aprenda a configurar a sua conta Exchange no Mail do macOS
updated: 2024-04-16
---

<style>
.w-400 {
max-width:400px!important;
}
.h-600 {
max-height:600px!important;
}
</style>

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As contas Exchange podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir. A aplicação Mail no macOS está disponível gratuitamente em todos os Mac.

**Saiba como configurar o seu endereço de e-mail Exchange no Mail do macOS.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](/links/manager) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção "Quer saber mais?" deste guia.
> 

## Requisitos

- Dispor de um endereço de e-mail [Exchange](/links/web/emails-hosted-exchange).
- Ter o software Mail instalado no seu Mac.
- Dispor das credenciais do endereço de e-mail que pretende configurar.
 
## Instruções

### Adicionar a conta

> [!primary]
>
> Neste exemplo, utilizamos a menção servidor: ex**?**.mail.ovh.net. Deverá substituir o «? » pelo algarismo que designa o servidor do seu serviço Exchange.
>
> Encontre este algarismo na sua [Área de Cliente OVHcloud](/links/manager), na rubrica `Web Cloud`{.action} e `Microsoft {.action}.
> Clique em `Exchange`{.action} e, de seguida, na plataforma Exchange desejada. O nome do servidor está visível na tabela **Ligação** do separador ‘Informações gerais`{.action}.
>

- **Quando a aplicação** é iniciada pela primeira vez: é apresentado um assistente de configuração que lhe solicita que selecione o tipo de conta pretendido.

- **Se já tem uma conta parametrizada** : clique em `Mail`{.action} na barra de menu no topo do ecrã e, a seguir, em `Contas`{.action}.

> [!tabs]
> **Etapa 1**
>>> Selecione `Exchange`{.action}<br><br>
>>>![mailmac](images/mail-mac-exchange01.png){.thumbnail .w-400 .h-600}
>>>
> **Etapa 2**
>>> Introduza o **Nome** da sua conta de e-mail e o **Endereço de e-mail**, e depois clique em `Iniciar sessão`{.action} <br><br>
>>>![mailmac](images/mail-mac-exchange02.png){.thumbnail .w-400 .h-600}
>>>
> **Etapa 3**
>>> Na Próxima Janela, Clique Em Configuração Manual`{.action} : <br><br>- Defina O **Nome** Que Aparecerá Na Interface De Navegação <br>- Deixe o seu **endereço de e-mail**<br>- Deixe a sua **Palavra-passe** já introduzida <br><br>Para finalizar a configuração, clique em 'Iniciar Sessão' {.action} <br><br>
>>>![mailmac](images/mail-mac-exchange03.png){.thumbnail .w-400 .h-600}
>>>
> **Etapa 4**
>>> Introduza: <br><br>- Endereço de e-mail: Deixe o seu endereço de e-mail completo<br>- Nome de utilizador: deixe o seu endereço de e-mail completo <br>- Palavra-passe: deixe o seu **palavra-passe**<br> - URL interno: **ex?.mail.ovh.net** (substitua o **** por [número do seu servidor Exchange](#addaccount)<br>- URL externo: **ex?.mail.ovh.net*** (substitua o **?** por [número do seu servidor Exchange](#addaccount)<br>>)
>>>
>>> [!warning]
>> > >
>> > É normal que a mensagem seja apresentada a vermelho « **Não é possível verificar o nome de conta ou a palavra-passe** » quando a janela é apresentada pela primeira vez. No entanto, se esta mensagem persistir após a validação, as informações introduzidas estão incorretas.<br><br>
>>>
>>>![mailmac](images/mail-mac-exchange04.png){.thumbnail .w-400 .h-600}
>>>
> **Etapa 5**
>>> Além dos seus e-mails, pode selecionar outras funcionalidades Exchange que deseja gerir a partir do seu Mac. <br><br>![mailmac](images/mail-mac-exchange05.png){.thumbnail .w-400 .h-600}

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que permite aceder ao seu endereço de e-mail a partir de um browser. disponível no endereço [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o nosso manual [Utilizar o Outlook Web App com uma conta Exchange](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Recuperar um backup do seu endereço de e-mail

Se tiver de efetuar uma operação suscetível de causar a perda dos dados da sua conta de e-mail, sugerimos que efetue uma cópia de segurança da conta de e-mail em questão. Para isso, consulte o parágrafo "**Exportar**" na secção "**Mail para Mac OS**" do nosso manual [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar).

### Modificar os parâmetros existentes

Se a sua conta de e-mail já está configurada e tem de aceder aos parâmetros da conta para os alterar:

- Clique em `Mail`{.action} na barra de menu no topo do seu ecrã e, a seguir, clique em `Preferências...`{.action} **ou** `Definições...`{.action} conforme a versão do macOS.
- No separador "Contas" {.action}, selecione a conta correspondente na coluna da esquerda e, a seguir, clique em "Definições do servidor" {.action}.

![mailmac](images/mail-mac-exchange05.png){.thumbnail}

## Quer saber mais?

[FAQ e-mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Configurar a conta E-mail Pro no Mail do macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[Configurar a conta de e-mail MX plan no Mail do macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
