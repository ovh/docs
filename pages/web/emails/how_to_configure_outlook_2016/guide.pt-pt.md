---
title: 'Configurar um endereço de e-mail no Outlook 2016 para Windows'
slug: configuracao-outlook-2016
excerpt: 'Saiba como configurar um endereço de e-mail MX Plan no Outlook 2016 para Windows'
section: Outlook
order: 1
---

**Última atualização: 22/01/2019**

## Sumário

Os endereços de e-mail do serviço MX Plan podem ser configurados num software de e-mail compatível. Isto permite-lhe enviar e receber e-mails na aplicação que preferir.

**Saiba como configurar um endereço de e-mail MX Plan no Outlook 2016 para Windows.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVH disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, recomendamos que recorra a um fornecedor especializado e/ou que contacte o editor do serviço se encontrar dificuldades. Não lhe poderemos prestar assistência. Para mais informações, aceda à secção "Quer saber mais?" deste manual.

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído no serviço MX Plan ou num serviço de [alojamento da OVH](https://www.ovh.pt/alojamento-partilhado/){.external}).
- Ter o Microsoft Outlook 2016 instalado no seu dispositivo.
- Dispor das credenciais do endereço de e-mail que pretende configurar.

> [!primary]
>
> Se utilizar o Outlook 2016 para Mac, consulte o nosso manual [Configurar um endereço de e-mail no Outlook 2016 para Mac](../configuracao-outlook-2016-mac/){.external}.
>

## Instruções

### 1 - Adicionar uma conta

Abra a aplicação Outlook no seu dispositivo. Existem duas formas de adicionar uma conta:

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ficheiro`{.action} e selecione `Adicionar Conta`{.action}.

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Introduza o seu endereço de e-mail e clique em `Opções avançadas`{.action}. De seguida, selecione a caixa `Permitir configurar manualmente a minha conta`{.action} e clique em `Ligar`{.action}.

Entre os diferentes tipos de conta, selecione **IMAP** e **POP**. Aconselhamos uma utilização em **IMAP**. No entanto, pode selecionar **POP** para o armazenamento local dos e-mails no Outlook.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Depois, introduza a informação solicitada.

- **Correio de entrada**

|Informação|Descrição|
|---|---|
|Servidor|Introduza o servidor **ssl0.ovh.net**.|
|Porta|Introduza a porta **993**.|
|Método de encriptação|Selecione **SSL/TLS**.|
|Autenticação|Não selecione a caixa “Requer início de sessão utilizando autenticação de palavra-passe segura (SPA)”.|

- **Correio de saída**

|Informação|Descrição|
|---|---|
|Servidor|Introduza o servidor **ssl0.ovh.net**.|
|Porta|Introduza a porta **465**.|
|Método de encriptação|Selecione **SSL/TLS**.|
|Autenticação|Não selecione a caixa “Requer início de sessão utilizando autenticação de palavra-passe segura (SPA)”.|

Depois de inserir os dados, clique em `Seguinte`{.action} e introduza a **palavra-passe** do endereço de e-mail. Se os dados inseridos estiverem corretos, a ligação será estabelecida sem problemas.

Se quiser, pode efetuar um teste de envio para verificar se a conta está corretamente configurada.

![mxplan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Caso a aplicação lhe solicite para inserir manualmente alguns dados técnicos nas preferências da conta, estes são os valores que deve utilizar para a solução Email Pro:

- **Configuração em IMAP**

|Tipo de servidor|Nome do servidor|Método de encriptação|Porta|
|---|---|---|---|
|Entrada|ssl0.ovh.net|SSL/TLS|993|
|Saída|ssl0.ovh.net|SSL/TLS|465|

- **Configuração em POP**

|Tipo de servidor|Nome do servidor|Método de encriptação|Porta|
|---|---|---|---|
|Entrada|ssl0.ovh.net|SSL/TLS|995|
|Saída|ssl0.ovh.net|SSL/TLS|465|

### 2 - Utilizar o endereço de e-mail

Após a sua configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVH também disponibiliza uma aplicação web que pode usar para aceder ao seu e-mail diretamente a partir do browser, disponível no endereço <https://www.ovh.com/pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

## Quer saber mais?

[Configurar uma conta Email Pro no Outlook 2016 para Windows](../../emails-pro/configuracao-outlook-2016/){.external}.

[Configurar uma conta Exchange no Outlook 2016 para Windows](../../microsoft-collaborative-solutions/configuracao-outlook-2016/){.external}.

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}