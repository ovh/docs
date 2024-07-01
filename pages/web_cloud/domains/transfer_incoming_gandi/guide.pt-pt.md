---
title: 'Transferir um domínio Gandi para a OVHcloud'
excerpt: 'Descubra diferentes informações sobre a transferência de um nome de domínio Gandi para a OVHcloud'
updated: 2024-07-01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A transferência de um nome de domínio Gandi requer um processo específico.

> [!warning]
>
> O [agente de registo](/links/web/domains-what-is-registrar) de um domínio representa a organização/fornecedor acreditado junto do qual o domínio está registado/subscrito por um particular, uma associação ou uma organização. É nesse mesmo agente de registo que renova a subscrição do seu nome de domínio (geralmente uma vez por ano).
>
> Se a OVHcloud já é o agente registador do seu domínio **antes** de iniciar o procedimento que se seguirá, a transferência de entrada de domínio não é o procedimento adequado. O procedimento de transferência de domínio aplica-se *** apenas aos nomes de domínio registados noutro agente de registo que não a OVHcloud.
>
> Para transferir a gestão do seu domínio para outra conta de cliente OVHcloud, o método adequado é uma **mudança de contactos**. O procedimento é descrito em [este guia](/pages/account_and_service_management/account_information/managing_contacts).
> Se também necessitar de alterar o **proprietário** do nome de domínio, deve fazê-lo **antes** de alterar os contactos do nome de domínio. Para isso, siga as instruções descritas na nossa documentação sobre [mudança de proprietário dos nomes de domínio](/pages/web_cloud/domains/trade_domain).
>

**Saiba como transferir um domínio Gandi para a OVHcloud**

> [!warning]
>
> O serviço Gandimail está associado ao seu domínio. Ele deixará de funcionar assim que o domínio for transferido do Gandi. 
>
> Os endereços de e-mail associados a este domínio serão eliminados permanentemente 7 dias depois, **incluindo tudo o que contém**.
>
> Por isso, é essencial que guarde os seus conteúdos antes de iniciar a transferência do nome de domínio.
>

## Requisitos

- O domínio está registado no agente de registo Gandi.
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

### Etapa 1 - Desativar o bloqueio da transferência

> [!warning]
>
> A maioria das extensões propõe uma função de bloqueio contra a transferência, identificável por um estado especial no [Whois](/links/web/domains-whois), chamado "transferProhibited".
>
> Este bloqueio impede transferências não intencionais.
>
> Enquanto o bloqueio estiver ativo, a transferência não é possível.
>

Para desbloquear o domínio na Gandi, siga os passos descritos na [documentação dedicada de Gandi](https://docs.gandi.net/en/domain_names/transfer_out/transfer_lock.html){.external}.

### Etapa 2 - Obter o código de autorização

O código de autorização protege o seu domínio contra transferências não autorizadas e realizadas por terceiros. Este código é necessário para autorizar a transferência do seu domínio para um novo agente registador.

Para obter o código de transferência do seu domínio, siga os passos descritos na [documentação dedicada de Gandi](https://docs.gandi.net/en/domain_names/transfer_out/auth_info.html){.external}.

### Etapa 3 - Iniciar a transferência do seu domínio para a OVHcloud
  
Uma vez obtido o código de autorização, pode proceder à transferência do seu nome de domínio seguindo as etapas do nosso guia "[Transferir o seu nome de domínio para a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

> [!warning]
>
> Dentro de 24 horas após a inicialização da transferência, Gandi enviará um e-mail de notificação para o informar da saída do domínio.
> Este e-mail também pode conter um link que lhe permite aceitar a transferência em substituição de Gandi, o que reduzirá o prazo de reserva.
> O período de reserva corresponde a um período de 5 dias (8 dias para os nomes de domínio geridos pela AFNIC) que permite anular a transferência.
> Decorrido este prazo (5 dias « completos »), a transferência será finalizada automaticamente.
>

## Quer saber mais? <a name="go-further"></a>

[Migrar o seu website e os seus e-mails para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).