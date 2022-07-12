---
title: 'Configurar um endereço de e-mail no Outlook para macOS'
slug: configuracao-outlook-2016-mac
excerpt: 'Saiba como configurar um endereço de e-mail MX Plan no Outlook 2016 para Mac'
section: Configuração num computador
order: 02
---

**Última atualização: 22/01/2019**

## Sumário

Os endereços de e-mail do serviço MX Plan podem ser configurados num software de e-mail compatível. Isto permite-lhe enviar e receber e-mails na aplicação que preferir.

**Saiba como configurar um endereço de e-mail MX Plan no Outlook 2016 para Mac.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, recomendamos que recorra a um fornecedor especializado e/ou que contacte o editor do serviço se encontrar dificuldades. Não lhe poderemos prestar assistência. Para mais informações, aceda à secção "Quer saber mais?" deste manual.

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído no serviço MX Plan ou num serviço de [alojamento da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}).
- Ter a aplicação Microsoft Outlook instalada no seu dispositivo Mac.
- Ter acesso às credenciais do endereço de e-mail que pretende configurar.

> [!primary]
>
> Se utilizar o Outlook 2016 para Windows, consulte o nosso manual [Configurar um endereço de e-mail no Outlook 2016 para Windows](../configuracao-outlook-2016/){.external}.
>

## Instruções

### 1 - Adicionar uma conta

Abra a aplicação Outlook no seu dispositivo. Existem duas formas de adicionar uma conta:

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ferramentas`{.action} na barra superior e selecione `Contas`{.action}. Na nova janela, clique no botão `+`{.action} situado no canto inferior esquerdo e, a seguir, selecione a opção `Nova Conta`{.action}.

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Introduza o seu endereço de e-mail e clique em `Continuar`{.action}. Selecione o tipo `IMAP/POP`{.action} e introduza a informação solicitada.

|Informação|Descrição|
|---|---|
|Tipo de conta|Aconselhamos uma utilização em **IMAP** (opção predefinida). No entanto, também pode selecionar a opção **POP** (e-mails armazenados localmente na aplicação Outlook) no menu pendente.|
|Endereço de e-mail|Insira um nome que lhe permita reconhecer esta conta entre as outras presentes na aplicação Outlook.|
|Nome de utilizador|Insira o endereço de e-mail completo.|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail.|
|Servidor de entrada|Introduza o servidor **ssl0.ovh.net**. Deixe a caixa **Utilizar SSL para ligar (recomendado)** selecionada.|
|Porta de entrada|Introduza a porta **993**.|
|Servidor de saída|Introduza o servidor **ssl0.ovh.net**. Deixe a caixa **Utilizar SSL para ligar (recomendado)** selecionada.|
|Porta de saída|Introduza a porta **465**.|

Concluída esta etapa, clique no botão `Adicionar conta`{.action}. Se os dados estiverem corretos, a aplicação ligar-se-á à conta.

Se quiser, pode efetuar um teste de envio para verificar se a conta está corretamente configurada.

![mxplan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Caso a aplicação lhe solicite para inserir manualmente alguns dados técnicos nas preferências da conta, estes são os valores que deve utilizar para a solução MX Plan:

- **Configuração em IMAP**

|Tipo de servidor|Nome do servidor|SSL|Porta|
|---|---|---|---|
|Entrada|ssl0.ovh.net|Sim|993|
|Saída|ssl0.ovh.net|Sim|465|

- **Configuração em POP**

|Tipo de servidor|Nome do servidor|SSL|Porta|
|---|---|---|---|
|Entrada|ssl0.ovh.net|Sim|995|
|Saída|ssl0.ovh.net|Sim|465|

### 2 - Utilizar o endereço de e-mail

Após a sua configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser, disponível no endereço <https://www.ovh.com/pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

## Quer saber mais?

[Configurar uma conta Email Pro no Outlook 2016 para Mac](../../emails-pro/configuracao-outlook-2016-mac/){.external}.

[Configurar uma conta Exchange no Outlook 2016 para Mac](../../microsoft-collaborative-solutions/configuracao-outlook-2016-mac/){.external}.

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}