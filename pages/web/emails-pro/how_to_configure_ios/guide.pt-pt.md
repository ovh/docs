---
title: 'Configurar uma conta E-mail Pro num iPhone ou num iPad'
slug: configuracao-iphone
excerpt: "Aprenda a configurar uma conta E-mail Pro num iPhone ou num iPad através da aplicação Mail"
section: 'Configuração do software cliente de e-mail'
order: 1
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 21/05/2020**

## Objetivo

As contas Email Pro podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir.

**Aprenda a configurar a sua conta E-mail Pro num iPhone ou num iPad através da aplicação Mail.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este guia explica como implementar algumas medidas para otimizar a performance e a segurança do seu sistema. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
>

## Requisitos

- Ter uma [conta E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external}.
- Ter a aplicação Mail instalada no seu dispositivo iOS.
- Ter acesso às credenciais do endereço de e-mail que pretende configurar.

## Instruções

### 1 - Adicionar a conta

> [!primary]
>
> No nosso exemplo, utilizamos a menção servidor: pro**?**.mail.ovh.net. Deverá substituir o "? " pelo número que designa o servidor do seu serviço E-mail Pro.
>
> Encontre este número na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na rubrica `Web Cloud`{.action} e, a seguir, `E-mail Pro`{.action}. O servidor é visível na secção **Ligação** do separador `Informações gerais`{.action}.
>

No ecrã principal do seu dispositivo, aceda a `Regulações`{.action} (ícone de roda dentada). A adição de uma conta efetua-se de diferentes formas consoante a sua versão do iOS:

- **Para iOS 7, 8, 9 e 10**: aceda a `Mail, Contacts, Calendário`{.action} e depois a `Adicionar uma conta`{.action}. A seguir selecione `Outra`{.action}, depois `Adicionar uma conta de e-mail`{.action}. Passe em seguida à etapa 5 da tabela seguinte.

- **Para iOS 11**: carregue em `Contas e palavras-passe`{.action} e depois em `Adicionar uma conta`{.action}. A seguir selecione `Outra`{.action}, depois `Adicionar uma conta de e-mail`{.action}. Passe em seguida à etapa 5 da tabela seguinte.

- **Para as versões atuais**: siga as instruções da tabela abaixo.

| | |
|---|---|
|![Exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. Em `Regulações`, aceda ao `Mail`. <br><br> 2. Carregue em `Contas`.<br><br> 3. Carregue em `Adicionar uma conta`.<br><br> 4. Escolha `Outro` no fundo.|
|5. Carregue em `Adicionar uma conta de e-mail`.<br><br>6. Introduza o seu **nome**, o seu endereço de **e-mail**, a sua **password** e uma **descrição** da sua conta.<br><br>7. Carregue em `Seguinte`.|![Exchange](images/configuration-mailpro-ios-step02.png){.thumbnail}|
|![Exchange](images/configuration-mailpro-ios-step03.png){.thumbnail}|8. Selecione o tipo de servidor de receção `IMAP` (recomendado) ou `POP`.<br><br>Nas secções `SERVIDOR DE RECEÇÃO` e `SERVIDOR DE ENVIO`, introduza: <br>- o nome do host **pro?.mail.ovh.net** ( substitua o **?** pelo número do servidor do seu E-mail Pro) <br>- o seu **endereço de e-mail completo** no nome de utilizador <br>- a palavra-passe do seu endereço de e-mail|

No final da configuração, certifique-se de que a opção `Mail`{.action} está selecionada. Para que a aplicação possa utilizar esta conta, clique em `Guardar`{.action}.

Se quiser, pode efetuar um teste de envio para verificar se a conta está corretamente configurada.

Caso a aplicação lhe solicite para inserir manualmente alguns dados técnicos nas preferências da conta, estes são os valores que deve utilizar para a solução Email Pro:

|Tipo de servidor|Nome do servidor|SSL|Porta|
|---|---|---|---|
|De entrada|pro**?**.mail.ovh.net|Sim|993|
|De saída|pro**?**.mail.ovh.net|Sim|587|

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web com [funcionalidades de colaboração](https://www.ovhcloud.com/pt/emails/){.external} acessível em <https://www.ovh.pt/mail/>. Para aceder, só precisa dos dados de acesso relativos ao seu endereço de e-mail.

> [!primary]
>
> Em caso de dificuldade de receção ou de envio de e-mails, consulte a nossa [FAQ sobre os serviços de e-mail da OVHcloud](https://docs.ovh.com/pt/emails/faq-emails/).
>

## Quer saber mais?

[Configurar o seu endereço de e-mail no serviço MX Plan ou num serviço de hosting web num iPhone ou num iPad](https://docs.ovh.com/pt/emails/mail_partilhado_guia_configuracao_iphone_ios_91/){.external}.

[Configurar uma conta Exchange num iPhone ou num iPad](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_configuracao_automatica_em_ios_iphone_-_ipad/){.external}.

[FAQ: e-mails](https://docs.ovh.com/pt/emails/faq-emails/)

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
