---
title: 'Primeiros passos com a solução E-mail Pro'
excerpt: 'Saiba como configurar o serviço E-mail Pro.'
updated: 2024-01-29
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

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

- **selecionar um domínio da lista** : só aparecem os domínios que pode gerir a partir da Área de Cliente. Se o domínio estiver registado na OVHcloud mas não aparecer na Área de Cliente, deverá adicioná-lo com a opção « introduzir um domínio não gerido pela sua conta OVHcloud»
- **introduzir um domínio não gerido pela sua conta OVHcloud** : escolha esta opção se o domínio em causa estiver registado na OVHcloud, mas for configurável a partir de outra Área de Cliente OVHcloud, **ou** se o domínio estiver registado noutro agente de registo. Para que o serviço E-mail Pro possa funcionar corretamente, deverá poder alterar a configuração do domínio (a sua zona DNS).

Selecione a opção adequada e clique em `Seguinte`{.action}.

![emailpro](emailpro-01.png){.thumbnail}

A nova janela apresenta informações relativas à configuração dos modos.

![emailpro](emailpro-02.png){.thumbnail}

- **Se indicou um domínio não gerido pela OVHcloud**, o modo non-authoritative será configurado como predefinido.

- **Se escolheu um domínio gerido pela OVHcloud**, tem de escolher entre as duas opções.
    - **Autoritário**: Para usar o seu domínio, basta que o E-mail Pro seja a única solução de e-mail que utiliza. Ele não permite o uso de outra solução de e-mail com o seu serviço.
    - **Não autoritário**: Para usar o seu domínio com a solução E-mail Pro e **outro serviço de mensagens**.

> **Compreender os modos autoritário e não autoritário**
>
> - Quando um e-mail é transmitido para a sua plataforma E-mail Pro (*Inbound mail server Email Pro*) em modo **autoritário**, isso significa que todos os endereços de e-mail do seu nome de domínio estão unicamente alojados nesta plataforma. <br> <br> Por exemplo, se enviarmos um e-mail para o endereço « *mary.johnson@mydomain.ovh* », o servidor E-mail Pro « *Inbound mail server Email Pro* » devolve uma mensagem de falha ao remetente, pois esse endereço não existe no servidor E-mail Pro « *Inbound mail server Email Pro* ».
> - Quando um e-mail é transmitido para a sua plataforma de e-mail E-mail Pro (*Inbound mail server Email Pro*) em modo **não autoritário**, isso significa que os endereços de e-mail do seu domínio são repartidos entre a sua plataforma de e-mail principal (*Inbound mail server Email Pro*) e outro serviço de e-mail (*Inbound mail server MXplan*). <br> <br> Por exemplo, se enviarmos um e-mail para o endereço « *mary.johnson@mydomain.ovh* », o servidor E-mail Pro *Inbound mail server Email Pro* transmitirá o e-mail ao servidor MXplan « *Inbound mail server MXplan* » para que este último o possa entregar.
>
> ![Add Domain](authoritative-mode.png){.thumbnail}
>

> [!warning]
>
> Se receber a mensagem « **authoritative domain detected** » ao adicionar o seu domínio à sua plataforma de e-mail, isso significa que esse domínio é declarado em modo **autoritário** noutra plataforma de e-mail. Para que as duas plataformas possam coexistir, deverá alterá-las para o modo **não autoritário**.

Se optar pelo modo **não autoritário** e utilizar um serviço:

- **E-mail OVHcloud (Exchange ou MXplan)**, introduza diretamente como servidor de e-mail de destino « *mx1.mail.ovh.net* » ( funciona da mesma forma com *mx.mail.ovh.net*, *mx2.mail.ovh.net*, *mx3.mail.ovh.net*, *mx4.mail.ovh.net* ).
- **E-mail externo à OVHcloud (oferta de e-mail concorrente, servidor de e-mail privado)**. Introduza na caixa servidor de e-mail de destino o nome do host do servidor de entrada deste serviço externo, certificando-se de que este autoriza os pedidos de e-mail provenientes do seu serviço E-mail Pro

A escolha do modo não é definitiva e pode ser alterada a partir da Área de Cliente OVHcloud.

Clique em `Seguinte`{.action} para adicionar o domínio.

**Se escolheu um domínio gerido pela OVHcloud**, a configuração pode ser realizada de forma automática. Para isso, basta selecionar as opções desejadas e clicar em `Seguinte`{.action} para adicionar o domínio.

![emailpro](emailpro-03.png){.thumbnail}

- **SRV** : registo DNS que permite a configuração automática do programa de mensagens quando introduz o seu endereço de e-mail.
- **MX** : registo DNS dos servidores de e-mail necessário à receção dos e-mails no domínio em causa.
- **DKIM** : Implementação de uma assinatura digital encriptada para proteger as trocas de e-mails. Consulte o nosso guia « [Configurar um registo DKIM ](dns_zone_dkim1.)» para mais informações.

**Se escolheu um domínio não gerido pela OVHcloud**, siga a etapa 3.

No final do processo, verifique as informações apresentadas e clique em `Confirmar`{.action} para adicionar o domínio.

### 3 - Configurar o domínio

Depois de adicionar o domínio enquanto domínio associado, verifique as configurações através da tabela apresentada.

A coluna `Diagnóstico`{.action} permite-lhe controlar a configuração DNS do domínio. Se apresentar uma etiqueta vermelha, terá de alterar a configuração. Dispõe de duas possibilidades:

- **Configuração automática quando adiciona um domínio OVHcloud** : se acabou de realizar a alteração, a visualização na [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} pode levar algumas horas.

- **Configuração manual para um domínio não gerido pela OVHcloud** : clique na etiqueta vermelha para ver as alterações a realizar.
    - *Para um registo CNAME*, consulte o nosso guia « [Criar um registo CNAME ao adicionar um domínio associado](exchange_dns_cname1.) ».
    - *Para um registo MX*, consulte o nosso guia « [Adicionar um campo MX à configuração do seu domínio](dns_zone_mx1.) ».
    - *Para um registo SRV*, complete a sua zona DNS com a ajuda das informações fornecidas quando clicar na etiqueta vermelha. Pode consultar o guia « [Editar uma zona DNS da OVHcloud](dns_zone_edit1.) » para adicionar este registo.
    - *Para um registo SPF*, complete a sua zona DNS com a ajuda das informações fornecidas quando clicar na etiqueta. Pode consultar o guia « [Configurar um registo SPF](dns_zone_spf1.) » para adicionar este registo.
    *Para um registo DKIM*, complete a sua zona DNS com a ajuda das informações fornecidas quando clicar na etiqueta. Pode consultar o guia « [Configurar um registo DKIM](dns_zone_dkim1.) » para adicionar este registo.

![emailpro](emailpro-04.png){.thumbnail}

### 4 - Configurar as contas E-mail Pro

Para configurar os endereços de e-mail, aceda a `Contas de e-mail`{.action}. Na tabela, as contas contratadas apresentam o seguinte formato: “*@configureme.me*”.

Para as configurar, clique no botão `...`{.action} e, a seguir, em `Alterar`{.action}.

![emailpro](emailpro-05.png){.thumbnail}

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


### 5 - Usar o serviço de e-mail

As contas foram configuradas e estão prontas a usar. Para isso, a OVHcloud disponibiliza uma aplicação online (uma *webapp*). Esta última encontra-se no endereço <https://www.ovhcloud.com/pt/mail/>, onde deve introduzir os dados de acesso à sua conta.

Se desejar associar o seu endereço de e-mail a um software de correio eletrónico ou a um dispositivo, como um smartphone ou tablet, [consulte os nossos manuais de configuração](web-cloud-email-collaborative-solutions-email-pro1.). Se pretender obter mais informações sobre os elementos necessários para configurar a sua conta E-mail Pro, consulte as configurações que deverá utilizar:

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

[Utilizar o Outlook Web App com uma conta de e-mail](email_owa1.)

[Criar regras inbox no OWA](creating-inbox-rules-in-owa-mx-plan1.)

[Adicionar um alias à sua conta de e-mail](feature_redirections1.)

[Criar assinaturas automáticas](feature_footers1.)

[Gerir a faturação das contas E-mail Pro](manage_billing_emailpro1.)

[Gerir a política de segurança de um serviço de e-mail](security-policy1.)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.