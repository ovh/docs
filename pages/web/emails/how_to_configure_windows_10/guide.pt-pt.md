---
title: 'Configurar um endereço de e-mail no Correio para Windows 10'
slug: mail-configuration-windows-10
excerpt: "Saiba como configurar um endereço de e-mail MX Plan sobre a aplicação Correio para Windows"
section: 'Configuração num computador'
order: 06
---


**Última atualização: 21/03/2018**

## Objetivo

Os endereços de e-mail do serviço MX Plan podem ser configurados num software de e-mail compatível. Isto permite-lhe enviar e receber as suas mensagens a partir da aplicação que preferir.

**Saiba como configurar o seu endereço de e-mail MX Plan sobre a aplicação Correio para Windows.**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: "Quer saber mais?"
> 

## Requisitos

- Dispor de um endereço de e-mail MX Plan (incluído no serviço MX Plan ou num serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/)).
- Dispor da aplicação Correio instalada no seu dispositivo.
- Dispor das credenciais do endereço de e-mail que pretende configurar.

## Instruções

### Fase 1: adicionar a conta

Uma vez lançada a aplicação Correio no seu dispositivo, a adição de uma conta pode ser efetuada de duas formas diferentes.

- ** No primeiro início da aplicação**: através de uma janela, poderá clicar em `Adicionar uma conta`{.action}.

- **Se uma conta já tiver sido parametrizada**: clique em `Contas`{.action} na barra de menu à esquerda da aplicação e depois em `Adicionar um conta`{.action} no menu que aparece à direita.

![mxplan](images/configuration-mail-windows-step1.png){.thumbnail}

Na nova janela, clique em `Configuração avançada`{.action} e selecione `Courrier Internet`{.action} como tipo de conta.

Introduza as informações solicitadas:

|Informação| Descrição|
|---|---|
|Endereço de correio | Introduza o endereço de e-mail completo.|
|Nome de utilizador | Indique o endereço de e-mail completo.|
|Password | Introduza a password do endereço de e-mail.|
|Nome da conta | Especifique o nome que lhe permite reconhecer esta conta entre outras presentes na sua aplicação Correio.|
Enviar mensagens utilizando este nome | Introduza o nome que aparecerá no campo de envio quando forem enviados e-mails com este endereço.|
Servidor de correio de entrada | Introduza o servidor "ssl0.ovh.net:993".|
Tipo de conta | recomendamos uma utilização em **IMAP4**. No entanto, pode selecionar **POP** (e-mail armazenado localmente na aplicação Mail) no menu pendente.|
Servidor de correio de saída | Introduza o servidor "ssl0.ovh.net:465".|

Certifique-se de que as casas estão marcadas para as seguintes escolhas:

- "O servidor de saída requer a autenticação";
- "Utilizar o mesmo nome de utilizador e palavra-passe para o envio do correio";
- "Exigir o protocolo SSL para o correio de entrada";
- "Exigir o protocolo SSL para o correio de saída".

Depois de preencher as informações, clique em `Se connecter`{.action}. Se os dados inseridos estiverem corretos, a ligação será estabelecida sem problemas.

Pode efetuar um teste de envio para verificar se a conta está corretamente configurada.

![mxplan](images/configuration-mail-windows-step2.png){.thumbnail}

Se precisar de inserir manualmente alguns dados técnicos nas preferências da conta, estes são os valores que deve utilizar na oferta MX Plan:

- **Para uma configuração em IMAP4**

|Tipo de servidor|Nome do servidor|SSL|Port|
|---|---|---|---|
|Entrando| ssl0.ovh.net | Sim | 993|
|De saída| ssl0.ovh.net | Sim | 465|

- **Para uma configuração em POP**

|Tipo de servidor|Nome do servidor|SSL|Port|
|---|---|---|---|
|Entrando| ssl0.ovh.net | Sim | 995|
|De saída| ssl0.ovh.net | Sim | 465|

### Fase 2: utilizar o endereço de e-mail

Depois de configurar o endereço de e-mail, só falta utilizá-lo! Pode desde já enviar e receber mensagens.

A OVHcloud oferece uma aplicação web que permite aceder ao seu endereço de e-mail a partir do seu browser acessível no endereço <https://www.ovhcloud.com/pt/mail/>. Para aceder, só precisa dos dados de acesso relativos ao seu endereço de e-mail.
 
## Quer saber mais?

[Configurar uma conta E-mail Pro na aplicação Correio para Windows](https://docs.ovh.com/pt/emails-pro/mail-configuration-windows-10/)

[Configurar uma conta Exchange na aplicação Correio para Windows](https://docs.ovh.com/pt/microsoft-collaborative-solutions/mail-configuration-windows-10/)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.