---
title: 'Transferir um domínio Wix para a OVHcloud'
excerpt: 'Descubra diferentes informações sobre a transferência de um nome de domínio Wix para a OVHcloud'
updated: 2024-06-28
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A transferência de um nome de domínio Wix requer um processo específico.

**Saiba como transferir um domínio Wix para a OVHcloud**

> [!warning]
>
> O [agente de registo](/links/web/domains-what-is-registrar) de um domínio representa a organização/fornecedor acreditado junto do qual o domínio está registado/subscrito por um particular, uma associação ou uma organização. É nesse mesmo agente de registo que renova a subscrição do seu nome de domínio (geralmente uma vez por ano).
>
> Se a OVHcloud já é o agente registador do seu domínio **antes** de iniciar o procedimento que se seguirá, a transferência de entrada de domínio não é o procedimento adequado. O procedimento de transferência de domínio aplica-se **apenas** aos nomes de domínio registados noutro agente de registo que não a OVHcloud.
>
> Para transferir a gestão do seu domínio para outra conta de cliente OVHcloud, o método adequado é uma **mudança de contactos**. O procedimento é descrito em [este guia](/pages/account_and_service_management/account_information/managing_contacts).
> Se também necessitar de alterar o **proprietário** do nome de domínio, deve fazê-lo **antes** de alterar os contactos do nome de domínio. Para isso, siga as instruções descritas na nossa documentação sobre [mudança de proprietário dos nomes de domínio](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- O domínio está registado no agente de registo Wix.
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
> Se, para além da transferência do seu domínio, pretender migrar os serviços que lhe estão associados (site, e-mail, etc.), consulte primeiro o guia "[Migrar o site e os serviços associados para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" antes de prosseguir.
> Este guia explica em detalhe como migrar o conjunto dos seus serviços sem interrupções.
>
> Se apenas transferir o domínio sem mudar de serviço, certifique-se de que recupera os servidores DNS ativos para o domínio junto do seu **agente de registo** atual para os introduzir diretamente na etapa 3 do guia "[Transferir domínio para a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".
> Isto evitará que interrompa a associação entre o seu nome de domínio e os seus serviços externos associados.
>

### Desbloquear o nome de domínio e recuperar o código de transferência

Para desbloquear o domínio e obter o código de transferência, siga os passos descritos na [documentação dedicada do Wix](https://support.wix.com/pt/article/transferir-o-seu-dom%C3%ADnio-para-fora-do-wix){.external}.

### Iniciar a transferência do domínio para a OVHcloud

Uma vez obtido o código de autorização, pode proceder à transferência do seu nome de domínio seguindo as etapas do nosso guia "[Transferir o seu nome de domínio para a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)".

## Quer saber mais? <a name="go-further"></a>

[Transferir o seu nome de domínio para a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Migrar o seu website e os seus e-mails para a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).