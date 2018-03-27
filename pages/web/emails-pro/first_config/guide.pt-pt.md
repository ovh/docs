---
title: 'Como configurar o serviço E-mail Pro'
slug: configuracao-inicial
excerpt: 'Saiba como configurar o serviço E-mail Pro'
section: Geral
---

**Última atualização: 23/03/2018**

## Sumário

 A solução E-mail Pro permite beneficiar de endereços de e-mail profissionais a preços muito vantajosos para o seu negócio ou atividade.

**Aprenda a configurar o serviço E-mail Pro.**

## Requisitos

- Ter o serviço [E-mail Pro](https://www.ovh.pt/emails/email-pro/){.external}.
- Ter recebido o e-mail com a confirmação da instalação do serviço E-mail Pro.
- Dispor de um domínio.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### 1 - Aceder à interface de gestão do serviço

Depois de ativado, o serviço E-mail Pro pode ser gerido a partir da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}.

Para tal, clique em `E-mail Pro`{.action} no menu à esquerda e selecione o nome do serviço.

> [!primary]
>
> Na Área de Cliente, o nome de um serviço E-mail Pro é composto por: *emailpro-*, uma parte do identificador de cliente e um algarismo (1 para o primeiro serviço E-mail Pro instalado, 2 para o segundo, etc.).
>

### 2 - Adicionar o domínio

Depois de contratar o serviço E-mail Pro, surge uma janela na Área de Cliente para `Adicionar um domínio`{.action}. Se isso não acontecer, clique em `Domínios associados`{.action} e em `Adicionar um domínio`{.action}.

Depois escolha uma das seguintes opções:

- **selecionar um domínio da lista**: inclui os domínios geridos pela OVH associados ao seu identificador de cliente;
- **introduzir um domínio não gerido pela OVH**: neste caso, para que o serviço E-mail Pro possa funcionar corretamente, precisa de alterar a configuração no sistema (Zona DNS) do agente que gere o domínio.

Selecione a opção adequada e clique em `Seguinte`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

A nova janela apresenta informações relativas ao tipo de configuração do domínio.

- **Se indicou um domínio não gerido pela OVH**, o modo non-authoritative será configurado como predefinido.
- **Se escolheu um domínio gerido pela OVH**, tem duas opções à escolha.

|Modalidade|Descrição|
|---|---|
|Authoritative|Para usar o seu domínio apenas com o serviço E-mail Pro. Esta opção não permite o uso de outro serviço de e-mail com a solução E-mail Pro.|
|Non-Authoritative|Para usar o seu domínio com a solução E-mail Pro e outro serviço de correio eletrónico.| 

> [!primary]
>
> A escolha do tipo de configuração não é definitiva. Esta pode ser alterada a qualquer momento na Área de Cliente.
>

Clique em `Seguinte`{.action} para adicionar o domínio.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Se escolheu um domínio gerido pela OVH**, a configuração será realizada de forma automática. Para tal, basta selecionar as opções desejadas e clicar em `Seguinte`{.action} para adicionar o domínio.

**Se indicou um domínio não gerido pela OVH**, a configuração será feita no passo seguinte («Configurar domínio»).

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

No final do processo, verifique as informações apresentadas e clique em `Confirmar`{.action} para adicionar o domínio.

### 3 - Configurar o domínio

Quando o domínio adicionado estiver associado ao serviço, verifique se a configuração do mesmo está correta. Para tal, consulte a tabela apresentada em «Domínios associados».

A coluna `Diagnóstico`{.action} indica se a configuração do domínio está correta ou não. Se apresentar uma etiqueta vermelha, terá de alterar a configuração.

- **A configuração automática ** pode demorar algumas horas até estar concretizada. Pode ver o estado do processo na Área de Cliente.
- **Se indicou um domínio não gerido pela OVH**, clique na etiqueta vermelha para ver as alterações a realizar. As alterações podem demorar algumas horas até estarem concretizadas. Pode ver o estado do processo na Área de Cliente.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### 4 - Configurar as contas E-mail Pro

Para configurar os endereços de e-mail, aceda a `Contas de e-mail`{.action}. Na tabela, as contas contratadas apresentam o seguinte formato: «*@configureme.me*».

Para configurar as contas, clique no ícone em forma de lápis.

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

As contas foram configuradas e estão prontas a usar. Para tal, aceda à aplicação web disponível em: [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external} e insira os dados de acesso da sua conta.

Se quiser, também pode configurar o seu endereço de e-mail num software (cliente) de correio eletrónico para receber e enviar mensagens através do computador, smartphone ou tablet. Para saber como, consulte esta página: [https://docs.ovh.com/pt/emails-pro/](https://docs.ovh.com/pt/emails-pro/){.external}.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.