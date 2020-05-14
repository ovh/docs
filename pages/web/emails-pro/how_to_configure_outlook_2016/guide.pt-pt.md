---
title: 'Configurar uma conta Email Pro no Outlook 2016 para Windows'
slug: configuracao-outlook-2016
excerpt: 'Saiba como configurar uma conta Email Pro no Outlook 2016 para Windows'
section: 'Configuração do software cliente de e-mail'
order: 1
---

**Última atualização: 23/03/2020**

## Sumário

As contas Email Pro podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir.

**Saiba como configurar uma conta Email Pro no Outlook 2016 para Windows.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, recomendamos que recorra a um fornecedor especializado e/ou que contacte o editor do serviço se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção “Quer saber mais?” deste manual.

## Requisitos

- Ter o serviço [E-mail Pro](https://www.ovh.pt/emails/email-pro/){.external}.
- Ter o Microsoft Outlook 2016 instalado no seu dispositivo.
- Dispor das credenciais do endereço de e-mail que pretende configurar.

> [!primary]
>
> Se utilizar o Outlook 2016 para Mac, consulte o nosso manual [Configurar uma conta Email Pro no Outlook 2016 para Mac](../configuracao-outlook-2016-mac/){.external}.
>

## Instruções

### 1 - Adicionar uma conta

> [!primary]
>
> Neste manual, utilizamos a menção do servidor: pro**X**.mail.ovh.net. Deverá substituir o "X" pelo número que designa o servidor do seu serviço E-mail Pro.
>
> Pode encontrar esse número na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Web`{.action} e, a seguir, em `E-mail Pro`{.action} na coluna à esquerda. O nome do servidor está visível na secção Ligação do separador `Informações gerais`{.action}.
> 

Abra a aplicação Outlook no seu dispositivo. Existem duas formas de adicionar uma conta:

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ficheiro`{.action} e selecione `Adicionar Conta`{.action}.

![emailpro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Introduza o seu endereço de e-mail e clique em `Opções avançadas`{.action}. De seguida, selecione a caixa `Permitir configurar manualmente a minha conta`{.action} e clique em `Ligar`{.action}. Entre os diferentes tipos de conta, selecione **IMAP**.

![emailpro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Depois, introduza a informação solicitada.

- **Correio de entrada**

|Informação|Descrição|
|---|---|
|Servidor|Introduza o servidor pro**X**.mail.ovh.net|
|Porta|Introduza a porta **993**.|
|Método de encriptação|Selecione **SSL/TLS**.|
|Autenticação|Não selecione a caixa “Requer início de sessão utilizando autenticação de palavra-passe segura (SPA)”.|

- **Correio de saída**

|Informação|Descrição|
|---|---|
|Servidor|Introduza o servidor pro**X**.mail.ovh.net|
|Porta|Introduza a porta **587**.|
|Método de encriptação|Selecione **STARTTLS**.|
|Autenticação|Não selecione a caixa “Requer início de sessão utilizando autenticação de palavra-passe segura (SPA)”.|

Depois de inserir os dados, clique em `Seguinte`{.action} e introduza a **palavra-passe** do endereço de e-mail. Se os dados inseridos estiverem corretos, a ligação será estabelecida sem problemas.

Se quiser, pode efetuar um teste de envio para verificar se a conta está corretamente configurada.

![emailpro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Caso a aplicação lhe solicite para inserir manualmente alguns dados técnicos nas preferências da conta, estes são os valores que deve utilizar para a solução Email Pro:

|Tipo de servidor|Nome do servidor|Método de encriptação|Porta|
|---|---|---|---|
|Entrada|pro**X**.mail.ovh.net|SSL/TLS|993|
|Saída|pro**X**.mail.ovh.net|STARTTLS|587|

### 2 - Utilizar o endereço de e-mail

Após a sua configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud disponibiliza uma aplicação web que tem [funcionalidades de colaboração](https://www.ovh.com/pt/emails/){.external} e está disponível no endereço <https://www.ovh.pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

## Quer saber mais?

[Configurar um endereço de e-mail no Outlook 2016 para Windows](../../emails/configuracao-outlook-2016/){.external}.

[Configurar uma conta Exchange no Outlook 2016 para Windows](../../microsoft-collaborative-solutions/configuracao-outlook-2016/){.external}.

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}