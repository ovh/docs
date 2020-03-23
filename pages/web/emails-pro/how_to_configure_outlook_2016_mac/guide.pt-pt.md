---
title: 'Configurar uma conta Email Pro no Outlook 2016 para Mac'
slug: configuracao-outlook-2016-mac
excerpt: 'Saiba como configurar uma conta Email Pro no Outlook 2016 para Mac'
section: 'Configuração do software cliente de e-mail'
order: 2
---

**Última atualização: 23/03/2020**

## Sumário

As contas Email Pro podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir.

**Saiba como configurar uma conta Email Pro no Outlook 2016 para Mac.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, recomendamos que recorra a um fornecedor especializado e/ou que contacte o editor do serviço se encontrar dificuldades. Não lhe poderemos prestar assistência. Para mais informações, aceda à secção "Quer saber mais?" deste manual.

## Requisitos

- Ter o serviço [Email Pro](https://www.ovh.pt/emails/email-pro/){.external}.
- Ter a aplicação Microsoft Outlook instalada no seu dispositivo Mac.
- Ter acesso às credenciais do endereço de e-mail que pretende configurar.

> [!primary]
>
> Se utilizar o Outlook 2016 para Windows, consulte o nosso manual [Configurar um endereço de e-mail no Outlook 2016 para Windows](../configuracao-outlook-2016/){.external}.
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

- **Se já tem uma conta configurada**, clique em `Ferramentas`{.action} na barra de menu superior e selecione `Contas`{.action}. Na nova janela, clique no botão `+`{.action} situado no canto inferior esquerdo e, a seguir, selecione a opção `Nova Conta`{.action}.

![emailpro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Introduza o seu endereço de e-mail e clique em `Continuar`{.action}. Selecione o tipo `IMAP/POP`{.action} e introduza a informação solicitada.

|Informação|Descrição|
|---|---|
|Tipo de conta|Recomendamos que utilize **IMAP** (opção predefinida).|
|Endereço de e-mail|Insira um nome que lhe permita reconhecer esta conta entre as outras presentes na aplicação Outlook.|
|Nome de utilizador|Insira o endereço de e-mail completo.|
|Palavra-passe|Insira a palavra-passe do endereço de e-mail.|
|Servidor de entrada|Introduza o servidor pro**X**.mail.ovh.net. Deixe a caixa **Utilizar SSL para ligar (recomendado)** selecionada.|
|Porta de entrada|Introduza a porta **993**.|
|Servidor de saída|Introduza o servidor pro**X**.mail.ovh.net. Deixe a caixa **Utilizar SSL para ligar (recomendado)** selecionada.|
|Porta de saída|Introduza a porta **587**.|

Concluída esta etapa, clique no botão `Adicionar conta`{.action}. Se os dados estiverem corretos, a aplicação ligar-se-á à conta.

Se quiser, pode efetuar um teste de envio para verificar se a conta está corretamente configurada.

![emailpro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Caso a aplicação lhe solicite para inserir manualmente alguns dados técnicos nas preferências da conta, estes são os valores que deve utilizar para a solução Email Pro:

|Tipo de servidor|Nome do servidor|SSL|Porta|
|---|---|---|---|
|Entrada|pro**X**.mail.ovh.net|Sim|993|
|Saída|pro**X**.mail.ovh.net|Sim|587|

### 2 - Utilizar o endereço de e-mail

Após a sua configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVH também disponibiliza uma aplicação web que tem [funcionalidades de colaboração](https://www.ovh.com/pt/emails/){.external} e está disponível no endereço <https://www.ovh.pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

## Quer saber mais?

[Configurar um endereço de e-mail no Outlook 2016 para Mac ](../../emails/configuracao-outlook-2016-mac/){.external}.

[Configurar uma conta Exchange no Outlook 2016 para Mac](../../microsoft-collaborative-solutions/configuracao-outlook-2016-mac/){.external}.

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.