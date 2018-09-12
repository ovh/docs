---
title: 'Configurar o seu e-mail num iPhone ou num iPad'
slug: mail_partilhado_guia_configuracao_iphone_ios_91
excerpt: 'Aprenda a configurar um endereço de e-mail MX Plan num iPhone ou num iPad'
section: Apple
---

**Última atualização no dia 14/05/2018**

## Sumário

Os endereços de e-mail do serviço MX Plan podem ser configurados num software ou numa aplicação de e-mail compatíveis. Isto permite-lhe enviar e receber e-mails no dispositivo que preferir.

**Aprenda a configurar um endereço de e-mail MX Plan num iPhone ou num iPad.**

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído no serviço MX Plan ou num serviço de [web hosting OVH](https://www.ovh.pt/alojamento-partilhado/){.external}.
- Ter a aplicação Mail instalada no seu dispositivo Mac.
- Ter acesso aos dados associados ao endereço de e-mail que pretende configurar.

> [!primary]
>
> Este guia é válido para a versão iOS 7 e posteriores.
>

## Instruções

A configuração pode ser efetuada de duas formas:

- **com alguns cliques, através da ferramenta Apple Devices**: aceda a <https://autodiscover.mail.ovh.net/AppleDevices/> e siga as instruções de configuração;

- **siga o assistente de configuração do seu dispositivo**.

A partir de agora, o guia só irá abordar a configuração da aplicação Mail.

### 1 - Adicionar uma conta

No ecrã principal do dispositivo, aceda a `Definições`{.action}. Segundo a versão do iOS, pode acrescentar uma conta de duas formas:

- **para iOS 7, 8, 9 e 10**: aceda a `Mail > Contas`{.action}, depois a `Adicionar conta`{.action}. A seguir selecione `Outra`{.action}, depois `Adicionar conta de e-mail`{.action};

- **para iOS 11**: aceda a `Contas e palavras-passe`{.action}, depois a `Adicionar conta`{.action}. A seguir selecione `Outra`{.action}, depois `Adicionar conta de e-mail`{.action}.

![E-mail Pro](images/configuration-mail-ios-step1.png){.thumbnail}

Insira as informações relativa à conta:

|Informação|Descrição|
|---|---|
|Nome|Insira o nome do remente apresentado nos e-mails enviados.|
|endereço de e-mail|Insira o endereço de e-mail completo.|
|Palavra-passe|Insira a palavra-passe do e-mail.|
|Descrição|Insira um nome que lhe permita reconhecer esta conta entre as outras presentes na aplicação Mail.|

Carregue em `Seguinte`{.action} e introduza as informações pedidas:

|Informação|Descrição| 
|---|---| 
|IMAP ou POP|Aconselhamos uma utilização em **IMAP** (selecionado por defeito). No entanto, pode selecionar a opção **POP** (e-mails armazenados localmente na aplicação Mail) no menu.|
|Host name (receção)|Introduza o servidor ssl0.ovh.net.|
|Nome de utilizador (receção)|Insira o endereço de e-mail completo.|
|Palavra-passe (receção)|Insira a palavra-passe do e-mail.|  
|Host name (envio)|Introduza o servidor ssl0.ovh.net.|
|Nome de utilizador (envio)|Insira o endereço de e-mail completo.|
|Palavra-passe (envio)|Insira a palavra-passe do e-mail.| 

Carregue em `Seguinte`{.action}. Se os dados inseridos estiverem corretos, ligação será estabelecida sem problemas.

![E-mail Pro](images/configuration-mail-ios-step2.png){.thumbnail}

No momento da seleção das aplicações, certifique-se de que a opção `Correio`{.action} está selecionada. Só assim a aplicação poderá usar esta conta de e-mail. A seguir clique em `Terminado`{.action}.

Faça um teste de envio para confirmar se a configuração foi bem-sucedida.

Precisa de inserir os dados de forma manual nas preferências da conta? A tabela abaixo tem os dados necessários para configurar a conta de forma correta:

- **para uma configuração em IMAP**

|Tipo de Servidor|Nome do servidor|SSL|Porta|
|---|---|---|---|
|Receção|ssl0.ovh.net|Sim|993|
|Envio|ssl0.ovh.net|Sim|465|

- **para uma configuração em POP**

|Tipo de Servidor|Nome do servidor|SSL|Porta|
|---|---|---|---|
|Receção|ssl0.ovh.net|Sim|995|
|Envio|ssl0.ovh.net|Sim|465|

### 2 - Usar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar! Já pode enviar e receber mensagens no seu dispositivo.

A OVH também disponibiliza uma aplicação que pode usar para aceder ao seu e-mail diretamente a partir do browser, disponível no endereço <https://www.ovh.pt/mail/>. Para aceder, só precisa dos dados de acesso relativos ao seu endereço de e-mail.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>