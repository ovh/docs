---
title: 'Primeiros passos com a solução E-mail Pro'
excerpt: 'Saiba como configurar o serviço E-mail Pro.'
updated: 2020-04-09
---

**Última atualização: 24/04/2020**

## Sumário

Adquiriu um serviço E-mail Pro, que lhe permite beneficiar de endereços de e-mail profissionais a preços muito vantajosos para o seu negócio ou atividade.

**Saiba como configurar o serviço E-mail Pro.**

## Requisitos

- Ter o serviço [E-mail Pro](https://www.ovhcloud.com/pt/emails/email-pro/){.external}.
- Ter recebido o e-mail com a confirmação da instalação do serviço E-mail Pro.
- Dispor de um domínio.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### 1 - Aceder à interface de gestão do serviço

Depois de ativado, o serviço E-mail Pro pode ser gerido a partir da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.Para isso, clique em `E-mail Pro`{.action} e selecione o nome do serviço.

> [!primary]
>
> Na Área de Cliente, o nome de um serviço E-mail Pro é composto por: *emailpro-*, uma parte do identificador de cliente e um algarismo (1 para o primeiro serviço E-mail Pro instalado, 2 para o segundo, etc.).
>

### 2 - Adicionar o domínio

Depois de contratar o serviço E-mail Pro, surge uma janela na Área de Cliente para `Adicionar domínio`{.action}. Se isso não acontecer, clique em `Domínios associados`{.action} e, depois, em `Adicionar domínio`{.action}.

Pode escolher entre duas alternativas:

- **selecionar um domínio da lista**\: só aparecem os domínios que pode gerir a partir da Área de Cliente OVHcloud.
- **introduzir um domínio não gerido pela sua conta OVHcloud**\: neste caso, para que o serviço E-mail Pro possa funcionar corretamente, precisa de alterar a configuração no sistema (Zona DNS) do agente que gere o domínio.

Selecione a opção adequada e clique em `Seguinte`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

A nova janela apresenta informações relativas ao tipo de configuração do modo.

- **Se indicou um domínio não gerido pela OVHcloud**, o modo non-authoritative será configurado como predefinido.
- **Se indicou um domínio gerido pela OVHcloud**, terá de escolher um de dois modos.

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

**Se escolheu um domínio gerido pela OVHcloud**, a configuração pode ser realizada de forma automática. Para isso, basta selecionar as opções desejadas e clicar em `Seguinte`{.action} para adicionar o domínio.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

- **SRV**: registo DNS que permite a configuração automática do programa de mensagens quando introduz o seu endereço de e-mail.
- **MX**: registo DNS dos servidores de e-mail necessário à receção dos e-mails no domínio em causa.

**Se escolheu um domínio não gerido pela OVHcloud**, siga a etapa 3.

No final do processo, verifique as informações apresentadas e clique em `Confirmar`{.action} para adicionar o domínio.

### 3 - Configurar o domínio

Depois de adicionar o domínio enquanto domínio associado, verifique as configurações através da tabela apresentada.

A coluna `Diagnóstico`{.action} permite-lhe controlar a configuração DNS do domínio. Se apresentar uma etiqueta vermelha, terá de alterar a configuração. Dispõe de duas possibilidades:

- **Configuração automática quando adiciona um domínio OVHcloud**: se acabou de realizar a alteração, a visualização na [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} pode levar algumas horas.

- **Configuração manual para um domínio não gerido pela OVHcloud**: clique na etiqueta vermelha para ver as alterações a realizar.

 *Para um registo CNAME*, recorra ao guia [«Criar um registo CNAME para associar um domínio»](/pages/web/microsoft-collaborative-solutions/exchange_dns_cname). 
<br> *Para um registo MX*, recorra ao guia [«Adicionar um campo MX à configuração do domínio»](/pages/web/domains/dns_zone_mx). 
<br> *Para um registo SRV*, informe qual é a sua zona DNS recorrendo às informações apresentadas quando clica na etiqueta vermelha. Para adicionar este registo, recorra ao guia [« Editar uma zona DNS da OVHcloud »](/pages/web/domains/dns_zone_edit).

![emailpro](images/first_config_email_pro_configure_domain_update.png){.thumbnail}

### 4 - Configurar as contas E-mail Pro

Para configurar os endereços de e-mail, aceda a `Contas de e-mail`{.action}. Na tabela, as contas contratadas apresentam o seguinte formato: “*@configureme.me*”.

Para as configurar, clique no botão `...`{.action} e, a seguir, em `Alterar`{.action}.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Introduza os dados solicitados.

|Campo|Descrição|
|---|---|
|Conta de e-mail|Introduza um nome para o seu endereço de e-mail (por exemplo, nome.apelido) e escolha o domínio na lista.|
|Nome|Introduza um nome.|
|Sobrenome|Introduza um sobrenome.|
|Nome a mostrar|Insira o nome do remetente apresentado nos e-mails enviados.|
|Palavra-passe e confirmação|Defina uma palavra-passe forte, composta por um mínimo de 8 caracteres e compreendendo pelo menos uma maiúscula, uma minúscula e um algarismo.| 

Depois, clique em `Seguinte`{.action}. Verifique as informações apresentadas e clique em `Confirmar`{.action} para dar início à configuração da conta.

> [!primary]
>
> Repita este passo sempre que necessário, de acordo com o número de contas disponíveis. Se precisar de mais contas, clique em `Encomendar contas`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### 5 - Usar o serviço de e-mail

As contas foram configuradas e estão prontas a usar. Para isso, a OVHcloud disponibiliza uma aplicação online (uma *webapp*). Esta última encontra-se no endereço [https://www.ovh.pt/mail](https://www.ovh.pt/mail/){.external}, onde deve introduzir os dados de acesso à sua conta.

Se desejar associar o seu endereço de e-mail a um software de correio eletrónico ou a um dispositivo, como um smartphone ou tablet, [consulte os nossos manuais de configuração](/products/web-cloud-email-collaborative-solutions-email-pro). Se pretender obter mais informações sobre os elementos necessários para configurar a sua conta E-mail Pro, consulte as configurações que deverá utilizar:

|Tipo de servidor|Nome do servidor|Tipo de segurança|Porta|
|---|---|---|---|
|De entrada|pro**?**.mail.ovh.net|SSL/TLS|993|
|De saída|pro**?**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> No nosso exemplo, utilizamos a referência servidor: pro**?**.mail.ovh.net. Deve substituir o «?» pelo algarismo que designa o servidor do seu serviço E-mail Pro.
> 
> Encontre esse algarismo na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na rubrica `Web Cloud`{.action}, em `E-mail Pro`{.action}. O servidor é visível na secção **Ligação** do separador `Informações gerais`{.action}.
> 

## Quer saber mais?

[Utilizar o Outlook Web App com uma conta de e-mail](/pages/web/emails/email_owa)

[Criar regras inbox no OWA](/pages/web/emails/creating-inbox-rules-in-owa-mx-plan)

[Adicionar um alias à sua conta de e-mail](/pages/web/emails/feature_redirections)

[Criar assinaturas automáticas](/pages/web/microsoft-collaborative-solutions/feature_footers)

[Gerir a faturação das contas E-mail Pro](/pages/web/emails-pro/manage_billing_emailpro)

[Gerir a política de segurança de um serviço de e-mail](/pages/web/emails/security-policy)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.