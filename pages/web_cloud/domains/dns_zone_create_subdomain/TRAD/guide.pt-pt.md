---
title: "Criar uma zona DNS OVHcloud para um subdomínio"
excerpt: "Descubra como criar uma zona DNS na OVHcloud para um subdomínio de um nome de domínio através do seu espaço cliente"
updated: 2025-04-28
---

## Objetivo

Quer criar uma zona DNS para um subdomínio?

A zona **D**omain **N**ame **S**ystem (**DNS**) de um nome de domínio constitui o seu ficheiro de configuração. É composta por informações técnicas, designadas *registos DNS*. A zona DNS atua como um centro de encaminhamento.

Para mais explicações, consulte os nossos guias abaixo:

- [Tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

Geralmente, os registos DNS de um subdomínio configuram-se diretamente a partir da zona DNS ativa do nome de domínio do qual depende.
No entanto, também é possível criar uma zona DNS específica para um subdomínio.

Por diversas razões, pode vir a ter de criar uma zona DNS para um subdomínio na OVHcloud.
Este terá então a sua própria zona para configurar os seus registos DNS.

> [!success]
>
> Para recordar :
>
> - Um nome de domínio tem geralmente esta forma: **domínio.tld**. Por exemplo: ovhcloud.com.
> - Um subdomínio tem geralmente esta forma: **subdomínio.domínio.tld**. Por exemplo: help.ovhcloud.com.
>
> Por defeito, um subdomínio depende de um nome de domínio para funcionar.
> Concretamente, não poderá utilizar o subdomínio **subdomínio.domínio.tld** se não tiver acesso à gestão do nome de domínio **domínio.tld**.
>
> Se quiser criar uma zona DNS para um nome de domínio, consulte diretamente [este guia](/pages/web_cloud/domains/dns_zone_create).

**Descubra como criar uma zona DNS na OVHcloud para um subdomínio de um nome de domínio através do seu espaço cliente OVHcloud.**

## Requisitos

- Dispor do nome de domínio do qual o subdomínio escolhido vai depender.
- O subdomínio em questão não deve já dispor de uma zona DNS (ativa ou não) na OVHcloud ou estar sujeito a uma operação ou a uma encomenda em curso na OVHcloud.
- Estar ligado ao seu [espaço cliente OVHcloud](/links/manager).

## Instruções

### 1 - Criar a zona DNS através do espaço cliente OVHcloud

> **Passo 2**
>>
>> Clique no menu `Zonas DNS`{.action}, depois no botão `Comprar`{.action}.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na página que aparece, indique o subdomínio (por exemplo: *subdomínio.domínio.tld*) para o qual quer criar uma zona DNS OVHcloud. Aguarde alguns instantes enquanto a ferramenta efetua verificações sobre o subdomínio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Se uma mensagem indicar que a zona DNS não pode ser criada, verifique se o subdomínio respeita os requisitos necessários ou contacte a pessoa que o gere. Assim que tudo estiver correto, tente novamente a operação.
>>
> **Passo 4**
>>
>> Uma vez a verificação terminada, escolha ativar ou não as entradas mínimas para a zona DNS que vai criar. Esta escolha não é definitiva, poderá sempre [editar os registos da zona DNS](/pages/web_cloud/domains/dns_zone_edit) posteriormente.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Ativar as entradas mínimas?|Detalhes|
>> |---|---|
>> |Sim|Selecione **Sim** se quiser personalizar a zona DNS por si mesmo posteriormente.<br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |Não|Selecione **Não** se planeia utilizar serviços OVHcloud como um [alojamento web](/links/web/hosting), pois a zona DNS será automaticamente pré-configurada para estes serviços.<br>![no-minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Uma vez que a sua escolha tenha sido feita, siga as etapas apresentadas no seu espaço cliente OVHcloud até à criação da zona DNS.

### 2 - Editar a zona DNS (opcional)

A zona DNS do seu subdomínio está agora criada, pode editá-la imediatamente. Esta operação é opcional, mas pode revelar-se necessária se quiser garantir a continuidade da disponibilidade dos serviços ligados a este subdomínio (como um site web e/ou correios eletrónicos).

Para editar esta zona DNS, consulte o nosso guia « [Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!primary]
>
> Se acabou de criar a zona DNS e o subdomínio ainda não aparece na lista dos seus serviços (na parte `Web Cloud`{.action} do espaço cliente OVHcloud e depois na secção `Zonas DNS`{.action}), aguarde 15 a 20 minutos e recarregue a página.

### 3 - Declarar os servidores DNS na zona DNS ativa do nome de domínio do qual o subdomínio escolhido depende

A ativação de uma zona DNS para um subdomínio difere daquela de um nome de domínio, pois um subdomínio depende obrigatoriamente de um nome de domínio para funcionar.

Deve primeiro recuperar os nomes dos **servidores DNS** OVHcloud associados à zona DNS criada para o seu subdomínio.

Para os encontrar, clique nos separadores abaixo para visualizar sucessivamente cada uma das **3** etapas.

**Passo 2**
>>
>> Clique no menu `Zonas DNS`{.action}, depois selecione o subdomínio em questão.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passo 3**
>>
>> No quadro presente na página que aparece, localize as 2 colunas **Tipo** e **Destino**.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Procure as 2 linhas do tipo **NS** e recupere as 2 valores presentes na coluna **Destino**.
>> Os nomes dos servidores DNS devem ter uma das 3 formas seguintes :
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` ou, `nsXXX.ovh.net` e `dnsXXX.ovh.net` (onde cada `X` representa um número entre **0** e **9**).
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` ou, `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (onde cada `X` representa um número entre **0** e **9**).
>> - `ns200.anycast.me` e `dns200.anycast.me` (se subscreveu a opção [DNS anycast](/links/web/domains-Opções)).

Uma vez os 2 nomes de servidor DNS recuperados, 2 situações são possíveis :

**Clique numa das 2 situações para visualizar o conteúdo.**

/// details | O nome de domínio do qual o seu subdomínio depende tem a sua zona DNS ativa na OVHcloud

Clique nos separadores abaixo para visualizar sucessivamente cada uma das **5** etapas.

> **Passo 3**
>>
>> À direita ou abaixo do quadro, clique em `Adicionar uma entrada`{.action}.
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Passo 4**
>>
>> Na janela que se abre, selecione o registo DNS do tipo `NS`{.action}, depois clique em `Seguinte`{.action}
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Passo 5**
>>
>> Indique depois no campo `Subdomínio *` o subdomínio em questão (por exemplo: `sub` para o subdomínio `sub.domínio.tld`), e no campo `Destino *`, um dos 2 servidores DNS anteriormente recuperados (por exemplo: `nsXX.ovh.net`).
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Clique finalmente em `Seguinte`{.action}.
>>
>> Verifique o resumo, depois clique em `Validar`{.action}.
>>
>> **Repita todas as etapas para o segundo servidor DNS.**
>>
>> Se necessário, consulte também o nosso guia « [Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

/// details | O nome de domínio do qual o seu subdomínio depende tem a sua zona DNS ativa noutra fornecedora

Neste caso específico, contacte o seu fornecedor DNS informando-o que pretende adicionar 2 registos DNS do tipo NS para o seu subdomínio. 

Aqui está um exemplo de pedido a formular junto do seu fornecedor DNS :

<pre class="bgwhite"><code>
Olá,

Quero adicionar na zona DNS ativa do nome de domínio <b>domínio.tld</b> os seguintes registos DNS do tipo NS para o meu subdomínio <b>subdomínio.domínio.tld</b> :

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Para ativar uma zona DNS específica para o meu subdomínio <b>subdomínio.domínio.tld</b>.

Atenciosamente,
</code></pre>

No exemplo acima, substitua os valores **domínio.tld**, **subdomínio.domínio.tld**, **nsXX.ovh.net** e **dnsXX.ovh.net** pelos seus próprios valores.

///

> [!warning]
>
> **O ponto de atenção seguinte não se aplica aos 2 registos DNS do tipo NS que acabou de adicionar.** 
>
> Se houver outros registos DNS presentes na zona DNS ativa do nome de domínio do qual o seu subdomínio depende :
>
> 1. Não se esqueça de os duplicar na zona DNS criada para o seu subdomínio.
> 2. Uma vez duplicados, remova-os da zona DNS ativa do seu nome de domínio.
>
> De fato, poderia haver um conflito na resolução DNS.

Após a modificação da zona DNS do nome de domínio do qual o seu subdomínio depende, a propagação das modificações pode demorar até **48 horas**.

## Quer saber mais?

[Tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar uma zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)