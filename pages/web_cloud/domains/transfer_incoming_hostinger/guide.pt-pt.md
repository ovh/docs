---
title: 'Transferir um domínio Hostinger para a OVHcloud'
excerpt: 'Descubra diferentes informações sobre a transferência de um nome de domínio Hostinger para a OVHcloud'
updated: 2024-07-01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A transferência de um nome de domínio Hostinger requer um processo específico.

**Saiba como transferir um domínio Hostinger para a OVHcloud**

> [!warning]
>
> O [agente de registo](/links/web/domains-what-is-registrar) de um domínio representa a organização/fornecedor acreditado junto do qual o domínio está registado/subscrito por um particular, uma associação ou uma organização. É nesse mesmo agente de registo que renova a subscrição do seu nome de domínio (geralmente uma vez por ano).
>
> Se a OVHcloud já é o agente registador do seu domínio **antes** de iniciar o procedimento que se seguirá, a transferência de entrada de domínio não é o procedimento adequado. O procedimento de transferência de domínio aplica-se *** apenas aos nomes de domínio registados noutro agente de registo que não a OVHcloud.
>
> Para transferir a gestão do seu domínio para outra conta de cliente OVHcloud, o método adequado é uma **mudança de contactos**. O procedimento é descrito em [este guia](/pages/account_and_service_management/account_information/managing_contacts).
> Se também necessitar de alterar o **proprietário** do nome de domínio, deve fazê-lo **antes** de alterar os contactos do nome de domínio. Para isso, siga as instruções descritas na nossa documentação sobre [mudança de proprietário dos nomes de domínio](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- O domínio está registado no agente de registo Hostinger.
- O domínio já existe há mais de 60 dias.
- O domínio não foi transferido ou não mudou de proprietário nos últimos 60 dias.
- O estado do nome de domínio é "OK" ou "Transferível".
- O domínio não expirou e tem uma data de expiração que permite concluir o processo de transferência a tempo (recomendado: superior a 60 dias).

Deve também:

- Poder desbloquear o nome de domínio.
- Possuir o código de transferência ou estar em condições de o recuperar.
- Ter a possibilidade de solicitar a transferência do nome de domínio.
- Ter informado o proprietário do nome de domínio e/ou os seus administradores do pedido de transferência.

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Contudo, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner) e/ou que contacte o seu agente de registo atual. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte [Quer saber mais?](#go-further) deste guia.
>

## Instruções

> [!primary]
>
> A zona DNS ativa de um domínio contém a configuração DNS aplicada ao domínio. É ela que liga o seu nome de domínio aos seus serviços tais como os seus endereços de e-mail ou o seu website.
>
> Se, para além do seu domínio, dispuser também de uma zona DNS ativa no seu agente de registo atual, verifique junto dos seus serviços que a zona DNS aplicada ao seu domínio não será eliminada após a transferência ter sido efetuada.
>
> Alguns agentes de registo eliminam a zona DNS presente nas suas casas assim que a transferência do domínio é concluída. Se for o caso, crie de forma idêntica a sua zona DNS na OVHcloud antes de iniciar as ações ligadas à transferência do seu domínio.
>
> Para isso, consulte os seguintes guias:
>
> - [Criar uma zona DNS na OVHcloud](pages/web_cloud/domains/dns_zone_create)
> - [Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>
> Certifique-se também de que o agente de registo atual não vai fechar outros serviços, como, por exemplo, os endereços de correio eletrónico associados ao domínio.
>

### Desbloquear nome de domínio

> [!primary]
>
> Por razões de segurança, todos os domínios Hostinger estão **bloqueados por predefinição** para evitar transferências não autorizadas.
>
> Por conseguinte, antes de transferir o seu nome de domínio da Hostinger, deve primeiro **desbloqueá-lo**.
> 

Para os nomes de domínio registados na Hostinger, pode gerir o estado de bloqueio do seu nome de domínio abrindo a secção `Domínios`{.action} e selecionando o nome de domínio a transferir.

Siga os passos descritos na [documentação dedicada de Hostinger](https://support.hostinger.com/pt/articles/4791444-como-bloquear-ou-desbloquear-a-transferencia-de-um-dominio){.external}.

### Obter o código EPP ou Auth

Se deseja **transferir** o seu domínio do Hostinger para outro agente registador (como a OVHcloud), o novo agente registador pode pedir um código de autorização (código "EPP" ou "Auth") para verificar se tem o direito de agir sobre o domínio.
Para se familiarizar com a mudança de proprietário de um domínio, consulte este [guia](pages/web_cloud/domains/trade_domain).

> [!warning]
>
> Alguns TLDs têm um processo de transferência especial. Isto é válido nomeadamente para os domínios **.uk** e **.eu**.
>
> Sugerimos que consulte o Hostinger para que tome as medidas adequadas à transferência do seu domínio.
> 

Para obter um código **EPP** ou **Auth** na Hostinger, siga os passos descritos na [documentação dedicada do Hostinger](https://support.hostinger.com/pt/articles/1583203-como-obter-o-codigo-epp-ou-de-autenticacao-para-transferencia-de-dominio-na-hostinger){.external}.

### Iniciar a transferência do domínio para a OVHcloud

Uma vez obtido o código de autorização, pode proceder à transferência do seu nome de domínio seguindo as etapas do nosso guia "[Transferir o seu nome de domínio para a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

## Quer saber mais? <a name="go-further"></a>

[Transferir o seu nome de domínio para a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migrar o seu website e os seus e-mails para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).