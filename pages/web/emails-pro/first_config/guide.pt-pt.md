---
title: 'Primeiros passos com a solução E-mail Pro'
slug: configuracao-inicial
excerpt: 'Saiba como configurar a solução E-mail Pro'
section: Geral
---

**Última atualização: 31/10/2019**

## Sumário

Adquiriu um serviço E-mail Pro, que lhe permite beneficiar de endereços de e-mail profissionais a preços muito vantajosos para o seu negócio ou atividade.

**Saiba como configurar o serviço E-mail Pro.**

## Requisitos

- Ter o serviço [E-mail Pro]({ovh_www}/emails/email-pro/){.external}.
- Ter recebido o e-mail com a confirmação da instalação do serviço E-mail Pro.
- Dispor de um domínio.
- Aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

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

- **selecionar um domínio da lista**: inclui os domínios geridos pela OVHcloud associados ao seu identificador de cliente;
- **introduzir um domínio não gerido pela OVHcloud**: neste caso, para que o serviço E-mail Pro possa funcionar corretamente, precisa de alterar a configuração no sistema (Zona DNS) do agente que gere o domínio.

Selecione a opção adequada e clique em `Seguinte`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

A nova janela apresenta informações relativas ao tipo de configuração do modo.

- **Se indicou um domínio não gerido pela OVHcloud**, o modo non-authoritative será configurado como predefinido.
- **Se escolheu um domínio gerido pela OVHcloud**, tem de escolher entre as duas opções.

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

**Se escolheu um domínio gerido pela OVHcloud**, a configuração será realizada de forma automática. Para tal, basta selecionar as opções desejadas e clicar em `Seguinte`{.action} para adicionar o domínio.

**Se indicou um domínio não gerido pela OVHcloud**, a configuração será feita no passo seguinte.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

No final do processo, verifique as informações apresentadas e clique em `Confirmar`{.action} para adicionar o domínio.

### 3 - Configurar o domínio

Depois de adicionar o domínio enquanto domínio associado, verifique as configurações através da tabela apresentada.

A coluna `Diagnóstico`{.action} permite-lhe controlar a configuração DNS do domínio. Se apresentar uma etiqueta vermelha, terá de alterar a configuração.

- **Se optou por uma configuração automática quando adicionou o domínio,** poderá demorar algumas horas até ficar visível na Área de Cliente.

- **Se indicou um domínio não gerido pela OVHcloud**, clique na etiqueta vermelha para ver as alterações a realizar. Para um campo CNAME, consulte o manual “[Criar um registo CNAME para associar um domínio](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_adicionar_um_campo_do_tipo_cname/)”. Para um campo MX, consulte o manual “[Adicionar um campo MX à configuração do domínio](https://docs.ovh.com/pt/domains/e-mail-partilhado-manual-de-configuracao-mx-com-zona-dns-ovh/)”. As alterações podem demorar algumas horas até estarem concretizadas. Pode ver o estado do processo na Área de Cliente.

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

As contas foram configuradas e estão prontas a usar. Para tal, a OVHcloud disponibiliza uma aplicação online (*webmail*). Pode aceder através [deste endereço](https://www.ovh.pt/mail/){.external}, preenchendo os dados associados ao endereço de e-mail.

Se desejar associar o seu endereço de e-mail a um software de correio eletrónico ou dispositivo, como um _smartphone_ ou um tablet, [consulte os nossos manuais de configuração](https://docs.ovh.com/pt/emails-pro/). Se pretender obter mais informações sobre os elementos necessários para configurar a sua conta E-mail Pro, consulte as configurações que deverá utilizar:

|Tipo de servidor|Nome do servidor|Tipo de segurança|Porta|
|---|---|---|---|
|Entrada|pro1.mail.ovh.net|SSL/TLS|993|
|Saída|pro1.mail.ovh.net|STARTTLS|587|

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/).