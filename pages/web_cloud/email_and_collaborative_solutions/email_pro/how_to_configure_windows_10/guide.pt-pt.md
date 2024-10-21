---
title: 'E-mail Pro - Configure sua conta de e-mail no Correio para Windows'
excerpt: "Saiba como configurar uma conta E-mail Pro na aplicação Correio para Windows"
updated: 2024-10-09
---

## Objetivo

As contas E-mail Pro podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe utilizar o seu endereço de e-mail no dispositivo que preferir.

**Aprenda a configurar uma conta E-mail Pro sobre a aplicação Correio para Windows.**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção deste manual intitulada: "Quer saber mais?"
> 

## Requisitos

- Dispor de uma oferta [E-mail Pro](/links/web/email-pro) .
- Dispor da aplicação Correio instalada no seu dispositivo.
- Ter acesso às credenciais do endereço de e-mail que pretende configurar.

## Instruções

### Fase 1: adicionar a conta

> [!primary]
>
> No nosso exemplo, utilizamos a menção servidor: pro**?**.mail.ovh.net. Deverá substituir o "? " pelo número que designa o servidor do seu serviço E-mail Pro.
> 
> Encontre este número no seu [Área de Cliente OVHcloud](/links/manager) , na rubrica `Web Cloud`{.action} depois `E-mail Pro`{.action}. O nome do servidor é visível no quadro **Ligação** do separador `Information Générale`{.action}.
> 

Uma vez lançada a aplicação Correio no seu dispositivo, a adição de uma conta pode ser efetuada de duas formas diferentes.

- ** No primeiro início da aplicação**: através de uma janela, poderá clicar em `Adicionar uma conta`{.action}.

- **Se uma conta já tiver sido parametrizada**: clique em `Contas`{.action} na barra de menu à esquerda da aplicação e depois em `Adicionar um conta`{.action} no menu que aparece à direita.

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

Na nova janela, clique em `Configuração avançada`{.action} e selecione `Courrier Internet`{.action} como tipo de conta.

Introduza as informações solicitadas:

|Informação| Descrição|
|---|---|
|Endereço de correio | Introduza o endereço de e-mail completo.|
|Nome de utilizador | Indique o endereço de e-mail completo.|
|Password | Introduza a password do endereço de e-mail.|
|Nome da conta | Indique um nome que lhe permita reconhecer esta conta entre outras presentes na sua aplicação Correio.|
Enviar as suas mensagens utilizando este nome | Introduza o nome que aparecerá como remetente quando forem enviados e-mails com este endereço.|
Servidor de correio de entrada | Introduza o servidor "pro**?**.mail.ovh.net:993".|
Tipo de conta | aconselhamos uma utilização em **IMAP4**. No entanto, pode selecionar **POP** (e-mails armazenados localmente na sua aplicação Correio) no menu pendente.|
Servidor de correio de saída | Introduza o servidor "pro**?**.mail.ovh.net:587".|

Certifique-se de que as casas estão marcadas para as seguintes escolhas:

- "O servidor de saída requer a autenticação";
- "Utilizar o mesmo nome de utilizador e palavra-passe para o envio do correio";
- "Exigir o protocolo SSL para o correio de entrada";
- "Exigir o protocolo SSL para o correio de saída".

Depois de preencher as informações, clique em `Se connecter`{.action}. Se estas estiverem corretas, a ligação à conta será concluída.

Pode efetuar um teste de envio para verificar se a conta está corretamente configurada.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

Caso a aplicação lhe solicite para inserir manualmente alguns dados técnicos nas preferências da conta, estes são os valores que deve utilizar para a solução Email Pro:

|Tipo de servidor|Nome do servidor|SSL|Port|
|---|---|---|---|
|Entrando|**?**.mail.ovh.net | Sim | 993|
|De saída|**?**.mail.ovh.net | Sim | 587|

### Fase 2: utilizar o endereço de e-mail

Depois de configurar o endereço de e-mail, só falta utilizá-lo! Pode desde já enviar e receber mensagens.

A OVHcloud também disponibiliza uma aplicação web com [funções colaborativas](/links/web/emails). Este endereço está disponível em [Webmail](/links/web/email). Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

## Quer saber mais?

> [!primary]
>
> Para obter mais informações sobre a configuração de um endereço de e-mail a partir do cliente de e-mail Correio no Windows, consulte [Centro de Ajuda da Microsoft](https://support.microsoft.com/pt-pt/office/configurar-o-e-mail-na-aplica%C3%A7%C3%A3o-correio-7ff79e8b-439b-4b47-8ff9-3f9a33166c60).

[Configurar um endereço de e-mail no serviço MX Plan ou num serviço de alojamento web na aplicação Correio para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)

[Configurar uma conta Exchange na aplicação Correio para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.