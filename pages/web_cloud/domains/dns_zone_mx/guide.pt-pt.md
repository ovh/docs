---
title: "Configurar um registo MX para a gestão dos e-mails"
excerpt: Saiba como configurar um registo MX no seu domínio da OVHcloud
updated: 2024-02-29
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O registo MX permite associar um domínio ao servidor da sua plataforma de e-mail. É indispensável para que o serviço de e-mail do remetente possa atingir o do destinatário.

**Saiba como configurar um registo MX para o seu domínio na OVHcloud.**

## Requisitos

- Ter acesso à gestão da zona DNS do domínio na [Área de Cliente OVHcloud](/links/manager).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- O domínio em questão deve utilizar a configuração da OVHcloud (ou seja, os servidores DNS da OVHcloud).
- Dispor de uma oferta MX Plan (incluída na oferta de [alojamento web](/links/web/hosting), no [alojamento gratuito 100M](/links/web/domains-free-hosting) ou na oferta MX Plan encomendada separadamente), uma das nossas [ofertas de e-mail OVHcloud](/links/web/emails), ou um serviço de e-mail externo.

> [!primary]
>
> - Se o domínio não usar os servidores DNS da OVHcloud, os registos MX deverão ser alterados a partir da interface do agente responsável pela gestão da configuração do seu domínio.
>
> - Se o seu domínio for gerido pela OVHcloud, pode verificar se este último utiliza a nossa configuração OVHcloud a partir da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/pt/&ovhSubsidiary=pt). Uma vez posicionado no domínio em causa, no separador `Informações gerais`{.action}, na parte `Servidores DNS`{.action}, se a menção `Ativo` estiver presente « **servidores DNS** », utiliza bem os servidores DNS da OVHcloud.
>
> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/dns-servers-enabled.png){.thumbnail}

## Instruções

### Compreender a função dos registos MX

Os registos MX (**M**ail e**X**change) permitem associar o seu domínio aos servidores de e-mail de receção associados ao seu serviço de e-mail. Vamos citar um exemplo.

Quando o endereço **sender@otherdomain.ovh** envia um e-mail para **contact@mydomain.ovh**, o servidor de envio de e-mail (**Outgoing mail server**) vai:
- **(1)** consultar a zona DNS do nome de domínio **mydomain.ovh** e ler os registos **MX**.
- **(2)** reencaminhar o e-mail para o URL do registo **MX** lido.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail}

O e-mail será enviado para o destino **mx0.mail.ovh.net**, precedido do valor **0**. Esse valor é chamado de prioridade. O valor mais baixo é inquirido em primeiro lugar e o mais alto em último. Isto significa que vários registos irão compensar a falta de resposta do registo MX com a prioridade mais baixa.

Pode configurar vários registos MX para o mesmo domínio. É então necessário definir um número de prioridade para cada um deles. Os registos MX são pesquisados por ordem crescente, dos números mais baixos aos mais altos, até que o servidor de receção responda.

> [!warning]
>
> De forma geral, **alterar os registos MX na zona DNS do domínio é uma operação delicada** : uma manipulação incorreta pode impossibilitar a receção de e-mails nos seus endereços. Por isso, sugerimos que tenha atenção durante a realização desta operação.
> Em caso de dúvida, sugerimos que recorra a um [fornecedor especializado](/links/partner).

### Valores da configuração MX da OVHcloud <a name="mxovhcloud"></a>

Consulte abaixo a configuração MX da OVHcloud que deve utilizar nas soluções MX Plan (só ou incluída numa oferta de [alojamento web da OVHcloud](/links/web/hosting)), [E-mail Pro](/links/web/email-pro) e [Exchange](/links/web/emails). Os nossos servidores de e-mail dispõem de um antisspam e antivírus integrado.

Estes valores são comuns a todas estas ofertas, à exceção de [Private Exchange](/pages/web_cloud/email_and_colaborative_solutions/microsoft_exchange/exchange_starting_private) e Dedicated Exchange.

|Domínio|TTL|Tipo de registo|Prioridade|Destino|
|---|---|---|---|---|
|*deixar em branco*|3600|MX|1|mx0.mail.ovh.net.|
|*deixar em branco*|3600|MX|5|mx1.mail.ovh.net.|
|*deixar em branco*|3600|MX|50|mx2.mail.ovh.net.|
|*deixar em branco*|3600|MX|100|mx3.mail.ovh.net.|
|*deixar em branco*|3600|MX|200|mx4.mail.ovh.net.|

Estes registos MX devem ser configurados na zona DNS do seu domínio.

### Configurar um registo MX numa zona DNS da OVHcloud

Para criar ou alterar os registos MX na configuração da OVHcloud do seu domínio, aceda à [Área de Cliente OVHcloud](/links/manager). Aceda à secção `Nomes de domínio`{.action}, clique no domínio que pretende e aceda ao separador `Zona DNS`{.action}.

A tabela apresenta a configuração da OVHcloud do seu domínio. Cada linha corresponde a um registo DNS.

Antes de mais, verifique se já existem registos MX na configuração DNS da OVHcloud do seu domínio. Para tal, recorra à lista de filtragem situada por cima da tabela da sua zona DNS.<br>
Selecione o tipo **MX** e valide para apresentar apenas as entradas DNS MX da sua zona DNS. Use a captura de ecrã abaixo.

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail}

- Se já existirem e pretender alterá-los, clique no botão `...`{.action} à direita de cada linha da tabela em causa e, a seguir, em `Alterar entrada`{.action}.
- Se não existir nenhum registo MX presente, clique no botão `Adicionar uma entrada`{.action} à direita da tabela e selecione `MX`{.action}. Introduza as informações necessárias em função da solução de e-mail selecionada:

**Se dispõe de uma solução de e-mail OVHcloud**, consulte as informações fornecidas na etapa "[Conhecer a configuração MX da OVHcloud](#mxovhcloud)".

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail}

Conclua os passos e clique em `Validar`{.action}.

**Se possuir outra solução de e-mail**, consulte as informações comunicadas pelo seu fornecedor de serviço de e-mail.

> [!primary]
>
> A propagação das alterações efetuadas pode demorar entre 4 e 24 horas.
>

## Saiba mais

[Alterar os servidores DNS de um nome de domínio OVH.](/pages/web_cloud/domains/dns_server_general_information)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Melhorar a segurança dos e-mails através do registo SPF](/pages/web_cloud/domains/dns_zone_spf)

[Melhorar a segurança dos e-mails através do registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender beneficiar de uma assistência ao uso e à configuração das suas soluções OVHcloud, sugerimos que consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).