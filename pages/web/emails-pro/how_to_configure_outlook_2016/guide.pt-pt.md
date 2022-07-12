---
title: 'Configurar uma conta Email Pro no Outlook para Windows'
slug: configuracao-outlook-2016
excerpt: 'Saiba como configurar uma conta Email Pro no Outlook para Windows'
section: 'Configuração do software cliente de e-mail'
order: 1
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 05/07/2021**

## Objetivo

As contas Email Pro podem ser configuradas em vários softwares de e-mail compatíveis. Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir.

**Saiba como configurar um endereço de e-mail Pro no Outlook ou em versões posteriores do Windows.**
 

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
> 

## Requisitos

- Ter uma conta de e-mail [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external}.
- Dispor de um programa Microsoft Outlook ou posterior.
- Dispor das credenciais do endereço de e-mail que pretende configurar.

## Instruções

### Adicionar a conta

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ficheiro`{.action} e selecione `Adicionar Conta`{.action}.

- Introduza o seu endereço de e-mail e clique em `Opções avançadas`{.action}. De seguida, selecione a caixa `Permitir configurar manualmente a minha conta`{.action} e clique em `Ligar`{.action}. 

![Outlook](images/config-outlook-emailpro01.png){.thumbnail}

> [!primary]
>
> No nosso exemplo, utilizamos a menção servidor: pro**?**.mail.ovh.net. Deverá substituir o "? " pelo número que designa o servidor do seu serviço E-mail Pro.
>
> Encontre este número na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na rubrica `Web Cloud`{.action} e, a seguir, `E-mail Pro`{.action}. O servidor é visível na secção **Ligação** do separador `Informações gerais`{.action}.
>

| | |
|---|---|
|![Outlook](images/config-outlook-emailpro02.png){.thumbnail}|Entre os diferentes tipos de conta, selecione IMAP e POP. <br>Recomendamos uma utilização em IMAP.|
|Introduza a password do seu endereço de e-mail e clique em `Seguinte`{.action}. |![Outlook](images/config-outlook-emailpro03.png){.thumbnail}|
|![Outlook](images/config-outlook-emailpro04.png){.thumbnail}|Se o Outlook não conseguir configurar automaticamente o seu endereço, esta janela será apresentada. <br>Clique em `Modificar os parâmetros da conta`{.action} |
|Introduza no **Correio de entrada**: <br>- o servidor **pro**?**.mail.ovh.net** (substitua "**?**" pelo número do seu servidor) <br>- Porta **993**<br>- Método de encriptação **SSL/TLS**<br><br>Introduza no **Correio de saída**: <br>- o servidor **pro**?**.mail.ovh.net** (substitua "**?**" pelo número do seu servidor)<br>- Porta **587**<br>- Método de encriptação **STARTTLS**<br><br>Clique em `Seguinte`{.action} para validar. |![Outlook](images/config-outlook-emailpro05.png){.thumbnail}|


No âmbito de uma configuração em **POP**, os valores são os seguintes:

|Tipo de servidor|Nome do servidor|Método de encriptação|Porta|
|---|---|---|---|
|De entrada|pro**?**.mail.ovh.net (a menção **"?"** é substituída pelo número do seu servidor)|SSL/TLS|995|
|De saída|pro**?**.mail.ovh.net (a menção **"?"** é substituída pelo número do seu servidor)|STARTTLS|587|

### Utilizar o endereço de e-mail

Após a configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVHcloud também disponibiliza uma aplicação web que permite aceder ao seu endereço de e-mail a partir de um browser. disponível no endereço <https://www.ovh.pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail. Para qualquer questão relativa à sua utilização, não hesite em consultar o nosso guia [Consultar a sua conta Exchange a partir da interface OWA](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_2016_guia_de_utilizacao_do_outlook_web_app/).

### Recuperar um backup do seu endereço de e-mail

Se tiver de efetuar uma operação suscetível de causar a perda dos dados da sua conta de e-mail, sugerimos que efetue uma cópia de segurança da conta de e-mail em questão. Para isso, consulte o manual "**Exportar do Windows**" no manual [Migrar o seu endereço de e-mail](https://docs.ovh.com/pt/emails/migrar-os-enderecos-email-manualmente/#exportar-a-partir-do-windows).

### Modificar os parâmetros existentes

Se a sua conta de e-mail já está configurada e tem de aceder aos parâmetros da conta para os alterar:

- Aceda ao `Ficheiro`{.action} a partir da barra de menu na parte superior do ecrã e selecione a conta a alterar no menu pendente **(1)**.
- Clique em `Parâmetros da conta`{.action}**(2)**.
- Clique em `Parâmetros do servidor`{.action}**(3)** para aceder à janela de configuração.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail}

A janela está dividida em duas partes, **Correio de entrada** e **Correio de saída**. Clique em qualquer uma para as poder alterar.

> [!primary]
>
> No nosso exemplo, utilizamos a menção servidor: pro**?**.mail.ovh.net. Deverá substituir o "? " pelo número que designa o servidor do seu serviço E-mail Pro.
>
> Encontre este número na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na rubrica `Web Cloud`{.action} e, a seguir, `E-mail Pro`{.action}. O servidor é visível na secção **Ligação** do separador `Informações gerais`{.action}.
>

![Outlook](images/config-outlook-emailpro07.png){.thumbnail}


## Quer saber mais?

[Configurar um endereço de e-mail no Outlook 2016 para Windows](https://docs.ovh.com/pt/emails/configuracao-outlook-2016/){.external} (versão em inglês).

[Configurar uma conta Exchange no Outlook 2016 para Windows](https://docs.ovh.com/pt/microsoft-collaborative-solutions/configuracao-outlook-2016/){.external} (versão em inglês).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
