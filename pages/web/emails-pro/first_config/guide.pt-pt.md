---
title: 'Como configurar o serviço E-mail Pro'
slug: configuracao-inicial
excerpt: 'Saiba como configurar o serviço E-mail Pro'
section: Geral
---

**Última atualização: 28/11/2018**

## Sumário

Adquiriu um serviço E-mail Pro, que lhe permite beneficiar de endereços de e-mail profissionais a preços muito vantajosos para o seu negócio ou atividade.

**Saiba como configurar o serviço E-mail Pro.**

## Requisitos

- Ter o serviço [E-mail Pro](https://www.ovh.pt/emails/email-pro/){.external}.
- Ter recebido o e-mail com a confirmação da instalação do serviço E-mail Pro.
- Dispor de um domínio.
- Aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### 1 - Aceder à interface de gestão do serviço

Depois de ativado, o serviço E-mail Pro pode ser gerido a partir da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}.

Para tal, clique em `E-mail Pro`{.action} no menu à esquerda e selecione o nome do serviço.

> [!primary]
>
> Na Área de Cliente, o nome de um serviço E-mail Pro é composto por: *emailpro-*, uma parte do identificador de cliente e um algarismo (1 para o primeiro serviço E-mail Pro instalado, 2 para o segundo, etc.).
>

### 2 - Adicionar o domínio

Depois de contratar o serviço E-mail Pro, surge uma janela na Área de Cliente para `Adicionar domínio`{.action}. Se isso não acontecer, clique em `Domínios associados`{.action} e, depois, em `Adicionar domínio`{.action}.

Deverá escolher uma das seguintes opções:

- **selecionar um domínio da lista**: inclui os domínios geridos pela OVH associados ao seu identificador de cliente;
- **introduzir um domínio não gerido pela OVH**: neste caso, para que o serviço E-mail Pro possa funcionar corretamente, precisa de alterar a configuração no sistema (Zona DNS) do agente que gere o domínio.

Selecione a opção adequada e clique em `Seguinte`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

A nova janela apresenta informações relativas ao tipo de configuração do modo.

- **Se indicou um domínio não gerido pela OVH**, o modo non-authoritative será configurado como predefinido.
- **Se escolheu um domínio gerido pela OVH**, tem de escolher entre as duas opções.

|Modo|Descrição|
|---|---|
|Authoritative|Para usar o seu domínio apenas com o serviço E-mail Pro. Esta opção não permite o uso de outro serviço de e-mail com o E-mail Pro.|
|Non-Authoritative|Para usar o seu domínio com a solução E-mail Pro e outro serviço de correio eletrónico.| 

> [!primary]
>
> A escolha do tipo de configuração não é definitiva. Esta pode ser alterada a qualquer momento na Área de Cliente.
>

Clique em `Seguinte`{.action} para adicionar o domínio.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Se escolheu um domínio gerido pela OVH**, a configuração será realizada de forma automática. Para tal, basta selecionar as opções desejadas e clicar em `Seguinte`{.action} para adicionar o domínio.

**Se indicou um domínio não gerido pela OVH**, a configuração será feita no passo seguinte.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

No final do processo, verifique as informações apresentadas e clique em `Confirmar`{.action} para adicionar o domínio.

### 3 - Configurar o domínio

Depois de adicionar o domínio enquanto domínio associado, verifique as configurações através da tabela apresentada.

A coluna `Diagnóstico`{.action} permite-lhe controlar a configuração dos campos MX do domínio. Se apresentar uma etiqueta vermelha, terá de alterar a configuração.

- **Se optou por uma configuração automática quando adicionou o domínio,** poderá demorar algumas horas até ficar visível na Área de Cliente.
- **Se indicou um domínio não gerido pela OVH**, clique na etiqueta vermelha para ver as alterações a realizar. As alterações podem demorar algumas horas até estarem concretizadas. Pode ver o estado do processo na Área de Cliente.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### 4 - Configurar as contas E-mail Pro

Para configurar os endereços de e-mail, aceda a `Contas de e-mail`{.action}. Na tabela, as contas contratadas apresentam o seguinte formato: “*@configureme.me*”.

Para as configurar, clique no ícone em forma de lápis.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Introduza os dados solicitados.

|Campo|Descrição|
|---|---|
|Conta de e-mail|Introduza um nome para o seu endereço de e-mail (por exemplo, nome.apelido) e escolha o domínio na lista.|
|Nome|Introduza um nome.|
|Apelido|Introduza um apelido.|
|Nome a mostrar|Insira o nome do remetente apresentado nos e-mails enviados.|
|Palavra-passe e confirmação|Indique uma palavra-passe, e introduza-a novamente para confirmar.| 

Depois, clique em `Seguinte`{.action}. Verifique as informações apresentadas e clique em `Confirmar`{.action} para dar início à configuração da conta.

> [!primary]
>
> Repita este passo sempre que necessário, de acordo com o número de contas disponíveis. Se precisar de mais contas, clique em `Encomendar contas`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### 5 - Usar o serviço de e-mail

As contas foram configuradas e estão prontas a usar. Para tal, a OVH disponibiliza uma aplicação online. Pode aceder através do endereço <https://pro1.mail.ovh.net> e deverá preencher os dados associados ao endereço de e-mail.

Se desejar associar o seu endereço de e-mail a um software de correio eletrónico ou dispositivo, como um _smartphone_ ou um tablet, consulte a página: <https://docs.ovh.com/pt/emails-pro/>. Se pretender obter mais informações sobre os elementos necessários para configurar a sua conta E-mail Pro, consulte as configurações que deverá utilizar:

|Tipo de servidor|Nome do servidor|Tipo de segurança|Porta|
|---|---|---|---|
|Receção|pro1.mail.ovh.net|SSL/TLS|993|
|Envio|pro1.mail.ovh.net|STARTTLS|587|

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}.