---
title: 'Configurar uma conta Exchange no Outlook 2016 para Windows'
slug: configuracao-outlook-2016
excerpt: 'Saiba como configurar uma conta Exchange no Outlook 2016 para Windows'
section: 'Configuração do software cliente de e-mail Exchange'
order: 1
---

**Última atualização: 22/01/2019**

## Sumário

As contas Exchange podem ser usadas com vários softwares de e-mail (desde que sejam compatíveis). Isto permite-lhe usar o seu endereço de e-mail no dispositivo que preferir.

**Saiba como configurar uma conta Exchange no Outlook 2016 para Windows.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVH disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, recomendamos que recorra a um fornecedor especializado e/ou que contacte o editor do serviço se encontrar dificuldades. Não lhe poderemos prestar assistência. Para mais informações, aceda à secção "Quer saber mais?" deste manual.

## Requisitos

- Ter o serviço [Exchange](https://www.ovh.com/pt/emails/){.external}.
- Ter o Microsoft Outlook 2016 instalado no seu dispositivo.
- Dispor das credenciais do endereço de e-mail que pretende configurar.
- O campo SRV da OVH deve estar corretamente configurado na zona DNS do domínio.

> [!primary]
>
> Se utilizar o Outlook 2016 para Mac, consulte o nosso manual [Configurar uma conta Exchange no Outlook 2016 para Mac](../configuracao-outlook-2016-mac/){.external}.
>

## Instruções

### 1 - Adicionar uma conta

Abra a aplicação Outlook no seu dispositivo. Existem duas formas de adicionar uma conta:

- **Se for a primeira vez que utiliza a aplicação**, aparecerá um assistente de configuração que lhe irá solicitar o seu endereço de e-mail.

- **Se já tem uma conta configurada**, clique em `Ficheiro`{.action} e selecione `Adicionar Conta`{.action}.

![Exchange](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Introduza o seu endereço de e-mail e clique em `Opções avançadas`{.action}. De seguida, selecione a caixa `Permitir configurar manualmente a minha conta`{.action} e clique em `Ligar`{.action}. Entre os diferentes tipos de conta, selecione **Exchange**.

Aparecerá uma janela de segurança a solicitar-lhe a **palavra-passe** do endereço de e-mail. Introduza-a, selecione a caixa para a memorizar e clique em `OK`{.action}.

> [!primary]
>
> Se aparecer uma mensagem indicando que o Outlook não pôde configurar a sua conta, é possível que o campo SRV da OVH não esteja corretamente configurado na zona DNS do seu domínio.
>
> Verifique se a configuração do domínio no seu serviço Exchange na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na janela `Domínios associados`{.action} na coluna `Diagnóstico`{.action} da tabela.
>

Se a configuração do domínio estiver correta, aparecerá uma mensagem solicitando-lhe que autorize a ligação para o servidor da OVH. Aceite este pedido para permitir a configuração automática da sua conta Exchange.

Uma vez configurada a conta, pode efetuar um teste de envio para verificar que funciona corretamente.

![Exchange](images/configuration-outlook-2016-windows-exchange-step2.png){.thumbnail}

### 2 - Utilizar o endereço de e-mail

Após a sua configuração, a conta de e-mail está pronta a usar e pode começar a enviar e receber mensagens no seu dispositivo.

A OVH disponibiliza uma aplicação web que tem [funcionalidades de colaboração](https://www.ovh.com/pt/emails/){.external} disponível no endereço <https://www.ovh.com/pt/mail/>. Para aceder, só precisa dos dados de acesso do seu endereço de e-mail.

## Quer saber mais?

[Configurar um endereço de e-mail no Outlook 2016 para Windows](../../emails/configuracao-outlook-2016/){.external}.

[Configurar uma conta Email Pro no Outlook 2016 para Windows](../../emails-pro/configuracao-outlook-2016/){.external}.

Ou fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}