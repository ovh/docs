--- 
title: Configurar a sua conta Exchange no Mail do macOS
excerpt: Aprenda a configurar a sua conta Exchange no Mail dos macOS El Capitan, Sierra e High Sierra
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

## Objetivo

As contas Exchange podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe utilizar o seu endereço de e-mail a partir do dispositivo que preferir. A aplicação Mail no macOS está disponível gratuitamente em todos os Mac.

**Saiba como configurar o endereço de e-mail Exchange no Mail do macOS.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção « Ir mais longe » deste guia.
>

## Requisitos

- Dispor de um endereço de e-mail [Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/).
- Ter o software Mail instalado no seu Mac.
- Dispor das credenciais relativas ao endereço de e-mail que pretende configurar.

## Na Prática

### Adicionar a conta <a name="addaccount"></a>

> [!primary]
>
> Neste exemplo, utilizamos a menção servidor: ex**?**.mail.ovh.net. Deverá substituir o «? » pelo algarismo que designa o servidor do seu serviço Exchange.
>
> Encontre este algarismo na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/pt/&ovhSubsidiary=pt){.external}, na rubrica `Web Cloud`{.action} e `Microsoft {.action}.
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

Depois de configurar o endereço de e-mail, já só precisa de o utilizar! Já pode enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser. e está disponível no endereço <https://www.ovh.pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, consulte o nosso guia [Consultar a sua conta Exchange a partir da interface OWA](/pages/web_cloud/email_and_colaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ou [Utilizar o seu endereço de e-mail a partir do webmail RoundCube](/pages/web_cloud/email_and_colaborative_solutions/mx_plan/email_roundcube#ou-e-como-se-ligar-se-ao-webmail-roundcube).

### Recuperar uma cópia de segurança do seu endereço de e-mail

Se precisar de realizar uma operação que possa implicar a perda dos dados da sua conta de e-mail, recomendamos que efetue um backup prévio da conta de e-mail em causa. Para isso, consulte o parágrafo « **Exportar** » na parte « **Mail no Mac OS** » do nosso guia [Migrar manualmente o seu endereço de e-mail](/pages/web_cloud/email_and_colaborative_solutions/migrating/manual_email_migration#destination).

### Modificar os parâmetros existentes

Se a sua conta de e-mail já estiver configurada e for necessário aceder às definições da conta para modificá-las:

- Clique em `Mail`{.action} na barra de menu no topo do seu ecrã e, a seguir, clique em `Preferências...`{.action} **ou** `Definições...`{.action} conforme a versão do macOS.
- No separador "Contas" {.action}, selecione a conta correspondente na coluna da esquerda e, a seguir, clique em "Definições do servidor" {.action}.

![mailmac](images/mail-mac-exchange06.png){.thumbnail .w-400 .h-600}

## Vá mais longe

[FAQ e-mails](/pages/web_cloud/email_and_colaborative_solutions/mx_plan/faq-emails)

[Configurar a conta E-mail Pro no Mail do macOS](/pages/web_cloud/email_and_colaborative_solutions/email_pro/how_to_configure_mail_macos)

[Configurar a conta de e-mail MX plan no Mail do macOS](/pages/web_cloud/email_and_colaborative_solutions/mx_plan/how_to_configure_mail_macos)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com>.
