---
title: "Configurar um registo MX para a gestão dos e-mails"
excerpt: Saiba como configurar um registo MX no seu nome de domínio da OVHcloud
updated: 2026-03-27
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objetivo

O registo MX permite associar um nome de domínio ao servidor da sua plataforma de e-mail. É indispensável para que o serviço de e-mail do remetente possa atingir o do destinatário.

**Saiba como configurar um registo MX para o seu nome de domínio na OVHcloud.**

## Requisitos

- O nome de domínio em questão deve utilizar a configuração da OVHcloud (ou seja, os servidores DNS da OVHcloud).
- Dispor de uma oferta MX Plan (incluída na oferta de [alojamento web](/links/web/hosting), no [alojamento gratuito 100M](/links/web/domains-free-hosting) ou na oferta MX Plan encomendada separadamente), uma das nossas [ofertas de e-mail OVHcloud](/links/web/emails), ou um serviço de e-mail externo.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Caminho de navegação:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-dns-zone -->

> [!primary]
>
> - Se o nome de domínio não usar os servidores DNS da OVHcloud, os registos MX deverão ser alterados a partir da interface do agente responsável pela gestão da configuração do seu nome de domínio.
>
> - Se o seu nome de domínio estiver registado na OVHcloud, pode verificar se este utiliza a nossa configuração. Para isso e se necessário, consulte o nosso guia « [Alterar os servidores DNS de um nome de domínio OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

## Instruções

### Compreender a função dos registos MX

O registo MX (**M**ail e**X**change) é um tipo de registo DNS que determina quais servidores de e-mail de receção estão associados ao seu nome de domínio.

Para compreender o seu funcionamento, vamos utilizar um exemplo:

- O endereço **sender@otherdomain.ovh** envia um e-mail para **contact@mydomain.ovh**.
- O servidor de envio de e-mail (**Outgoing mail server**) consulta a zona DNS do nome de domínio **mydomain.ovh** e lê os registos **MX**.
- O e-mail é transmitido para o URL do registo **MX** lido.
- O e-mail é enviado para o destino **mx0.mail.ovh.net**, precedido do valor **0**. Este valor corresponde à prioridade: o valor mais baixo é consultado em primeiro lugar e o mais alto em último. Isto significa que a presença de vários registos MX permite compensar a falta de resposta do servidor designado pelo registo com a prioridade mais baixa, passando para os servidores seguintes por ordem de prioridade.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail .w-600}

Pode configurar vários registos MX para o mesmo nome de domínio. É então necessário definir um número de prioridade para cada um deles. Os registos MX são pesquisados por ordem crescente, dos números mais baixos aos mais altos, até que o servidor de receção responda.

> [!warning]
>
> De forma geral, **alterar os registos MX na zona DNS do nome de domínio é uma operação delicada**: uma manipulação incorreta pode impossibilitar a receção de e-mails nos seus endereços. Por isso, sugerimos que tenha atenção durante a realização desta operação.
> Em caso de dúvida, sugerimos que recorra a um [fornecedor especializado](/links/partner).

### Valores da configuração MX da OVHcloud <a name="mxovhcloud"></a>

Consulte abaixo a configuração MX da OVHcloud que deve utilizar nas soluções MX Plan (só ou incluída numa oferta de [alojamento web da OVHcloud](/links/web/hosting)), [E-mail Pro](/links/web/email-pro), [Exchange](/links/web/emails-exchange) e [Zimbra](/links/web/zimbra). Os nossos servidores de e-mail dispõem de um antisspam e antivírus integrado.

Estes valores são comuns a todas estas ofertas, à exceção de [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) e Dedicated Exchange.

|Domínio|TTL|Tipo de registo|Prioridade|Destino|
|---|---|---|---|---|
|*deixar em branco*|3600|MX|1|mx0.mail.ovh.net.|
|*deixar em branco*|3600|MX|5|mx1.mail.ovh.net.|
|*deixar em branco*|3600|MX|50|mx2.mail.ovh.net.|
|*deixar em branco*|3600|MX|100|mx3.mail.ovh.net.|
|*deixar em branco*|3600|MX|200|mx4.mail.ovh.net.|

Estes registos MX devem ser configurados na zona DNS do seu nome de domínio.

<!-- CP-STEPS-START:configure-mx-record -->
### Configurar um registo MX numa zona DNS da OVHcloud

Clique nos separadores abaixo para ver sucessivamente cada uma das **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> A tabela apresenta a configuração da OVHcloud do seu nome de domínio. Cada linha corresponde a um registo DNS.
>>
>> Verifique se já existem registos MX selecionando o tipo **MX** na lista de filtragem situada acima da tabela e, em seguida, valide.
>>
>> ![Registo MX DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail .w-600}
>>
> **Etapa 3**
>>
>> - Se já existirem registos MX e pretender alterá-los, clique no botão `...`{.action} à direita de cada linha da tabela e, em seguida, em `Modificar entrada`{.action}.
>> - Se não existir nenhum registo MX, clique no botão `Adicionar uma entrada`{.action} à direita da tabela e selecione `MX`{.action}.
>>
> **Etapa 4**
>>
>> Introduza as informações necessárias em função da solução de e-mail selecionada.
>>
>> **Se dispõe de uma solução de e-mail OVHcloud**, consulte as informações fornecidas na etapa « [Conhecer a configuração MX da OVHcloud](#mxovhcloud) ».
>>
>> ![Registo MX DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail .w-600}
>>
> **Etapa 5**
>>
>> Conclua os passos e clique em `Validar`{.action}.

**Se possuir outra solução de e-mail**, consulte as informações comunicadas pelo seu fornecedor de serviço de e-mail.

> [!primary]
>
> A propagação das alterações efetuadas pode demorar entre 4 e 24 horas.
<!-- CP-STEPS-END:configure-mx-record -->

## Quer saber mais? <a name="go-further"></a>

[Alterar os servidores DNS de um nome de domínio OVH.](/pages/web_cloud/domains/dns_server_general_information)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Melhorar a segurança dos e-mails através do registo SPF](/pages/web_cloud/domains/dns_zone_spf)

[Melhorar a segurança dos e-mails através do registo DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender beneficiar de uma assistência ao uso e à configuração das suas soluções OVHcloud, sugerimos que consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).