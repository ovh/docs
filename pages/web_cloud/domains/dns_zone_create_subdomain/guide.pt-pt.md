---
title: "Criar uma zona DNS OVHcloud para um subdomínio"
excerpt: "Saiba como criar uma zona DNS na OVHcloud para o subdomínio de um nome de domínio através do seu Área de Cliente"
updated: 2026-02-19
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
pre {
    font-size: 14px !important;
}
pre.bgwhite {
    background-color: #fff !important;
    color: #000 !important;
    font-family: monospace !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
}
pre.bgwhite code {
    background-color: #fff !important;
    border: solid 0px transparent !important;
    font-family: monospace !important;
    font-size: 0.90em !important;
    color: #000 !important;
}
.small {
   font-size: 0.90em !important;
}
</style>

## Objetivo

Quer criar uma zona DNS para um subdomínio?

A zona **D**omain **N**ame **S**ystem (**DNS**) de um nome de domínio constitui o ficheiro de configuração deste último. É composta por informações técnicas, designadas *registos DNS*. A zona DNS atua como um centro de encaminhamento.

Para mais explicações, consulte os nossos guias abaixo:

- [Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

Geralmente, os registos DNS de um subdomínio configuram-se diretamente a partir da zona DNS ativa do nome de domínio do qual depende.
No entanto, também é possível criar uma zona DNS específica para um subdomínio.

Por diversas razões, pode ser necessário criar uma zona DNS para um subdomínio na OVHcloud.
Este terá então a sua própria zona para configurar os seus registos DNS.

> [!success]
>
> Para recordar:
>
> - Um nome de domínio tem geralmente esta forma: **domain.tld**. Por exemplo: ovhcloud.com.
> - Um subdomínio tem geralmente esta forma: **sub.domain.tld**. Por exemplo: help.ovhcloud.com.
>
> Por defeito, um subdomínio depende de um nome de domínio para funcionar.
> Concretamente, não poderá utilizar o subdomínio **sub.domain.tld** se não tiver acesso à gestão do nome de domínio **domain.tld**.
>
> Se quiser criar uma zona DNS para um nome de domínio, consulte diretamente [este guia](/pages/web_cloud/domains/dns_zone_create).

**Saiba como criar uma zona DNS na OVHcloud para um subdomínio de um nome de domínio através do seu Área de Cliente OVHcloud.**

## Requisitos

- Dispor do nome de domínio do qual o subdomínio escolhido vai depender.
- O subdomínio correspondente não deve já dispor de uma zona DNS (ativa ou não) na OVHcloud ou estar sujeito a uma operação ou a uma encomenda em curso na OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Caminho de navegação:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-dns-zone -->

## Instruções

### 1 - Criar a zona DNS através do Área de Cliente OVHcloud

<!-- CP-STEPS-START:create-dns-zone -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone), depois no botão `Encomendar`{.action}.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na nova página, introduza o subdomínio (por exemplo: *sub.domain.tld*) para o qual quer criar uma zona DNS OVHcloud. Aguarde alguns instantes enquanto a ferramenta efetua verificações sobre o subdomínio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Se uma mensagem indicar que a zona DNS não pode ser criada, verifique se o subdomínio respeita os requisitos necessários ou contacte a pessoa que a gere. Assim que tudo estiver correto, tente novamente a operação.
>>
> **Etapa 3**
>>
>> Assim que a verificação chegar ao fim, escolha ativar ou não as entradas mínimas para a zona DNS que vai criar. Esta escolha não é definitiva pois poderá sempre [editar os registos da zona DNS](/pages/web_cloud/domains/dns_zone_edit) mais tarde.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Ativar entradas mínimas?|Detalhes|
>> |---|---|
>> |Sim|Selecione esta escolha se deseja personalizar você mesmo a zona DNS.<br>![mínimo-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}
>> |Não|Selecione esta escolha se pretende utilizar serviços da OVHcloud como [alojamento web](/links/web/hosting), sendo a zona pré-configurada para este efeito.<br>![no-mínimo-dentro-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Uma vez que a sua escolha tenha sido feita, siga as etapas apresentadas no seu Área de Cliente OVHcloud até à criação da zona DNS.
<!-- CP-STEPS-END:create-dns-zone -->

### 2 - Editar a zona DNS (opcional)

A zona DNS do seu subdomínio está agora criada, pode editá-la imediatamente. Esta operação é opcional, mas pode revelar-se necessária se quiser garantir a continuidade da disponibilidade dos serviços ligados a este subdomínio (como um site web e/ou e-mails).

Para editar esta zona DNS, consulte o nosso guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Se acabou de criar a zona DNS e o subdomínio ainda não aparece na lista dos seus serviços, aguarde 15 a 20 minutos e recarregue a página.

### 3 - Declarar os servidores DNS na zona DNS ativa do nome de domínio do qual o subdomínio escolhido depende

A ativação de uma zona DNS para um subdomínio difere daquela de um nome de domínio, pois um subdomínio depende obrigatoriamente de um nome de domínio para funcionar.

Deve primeiro recuperar os nomes dos **servidores DNS** OVHcloud associados à zona DNS criada para o seu subdomínio.

<!-- CP-STEPS-START:find-dns-servers -->
Para os encontrar, clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o subdomínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> No quadro presente na página que aparece, localize as 2 colunas **Tipo** e **Alvo**.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Procure as 2 linhas do tipo **NS** e recupere os 2 valores presentes na coluna **Alvo**.
>> Os nomes dos servidores DNS devem ter uma das 3 formas seguintes:
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` ou, `nsXXX.ovh.net` e `dnsXXX.ovh.net` (onde cada `X` representa um número entre **0** e **9**).
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` ou, `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (onde cada `X` representa um número entre **0** e **9**).
>> - `ns200.anycast.me` e `dns200.anycast.me` (se subscreveu a opção [DNS anycast](/links/web/domains-options)).
<!-- CP-STEPS-END:find-dns-servers -->

Uma vez os 2 nomes de servidor DNS recuperados, 2 situações são possíveis:

**Clique numa das 2 situações para visualizar o conteúdo.**

/// details | O nome de domínio do qual o seu subdomínio depende tem a sua zona DNS ativa na OVHcloud

<!-- CP-STEPS-START:add-ns-ovhcloud-zone -->
Clique nos separadores abaixo para visualizar cada uma das **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o subdomínio correspondente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> À direita ou abaixo do quadro, clique em `Adicionar uma entrada`{.action}.
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na janela que se abre, selecione o registo DNS do tipo `NS`{.action}, depois clique em `Seguinte`{.action}
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Indique depois no campo `Subdomínio *` o subdomínio correspondente (por exemplo: `sub` para o subdomínio `sub.domain.tld`), e no campo `Alvo *`, um dos 2 servidores DNS anteriormente recuperados (por exemplo: `nsXX.ovh.net`).
>>
>> ![zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Clique finalmente em `Seguinte`{.action}.
>>
>> Verifique o resumo, depois clique em `Validar`{.action}.
>>
>> **Repita todas as etapas para o segundo servidor DNS.**
>>
>> Se necessário, consulte também o nosso guia "[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
<!-- CP-STEPS-END:add-ns-ovhcloud-zone -->

///

/// details | O nome de domínio do qual o seu subdomínio depende tem a sua zona DNS ativa noutra fornecedora

Neste caso específico, contacte o seu fornecedor DNS informando-o que pretende adicionar 2 registos DNS do tipo NS para o seu subdomínio. 

Aqui está um exemplo de pedido a formular junto do seu fornecedor DNS:

<pre class="bgwhite"><code>
Olá,

Quero adicionar na zona DNS ativa do nome de domínio <b>domain.tld</b> os seguintes registos DNS do tipo NS para o meu subdomínio <b>sub.domain.tld</b>:

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Para ativar uma zona DNS específica para o meu subdomínio <b>sub.domain.tld</b>.

Atenciosamente,
</code></pre>

No exemplo acima, substitua os valores **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** e **dnsXX.ovh.net** pelos seus próprios valores.

///

> [!warning]
>
> **O ponto de atenção seguinte não se aplica aos 2 registos DNS do tipo NS que acabou de adicionar.** 
>
> Se houver outros registos DNS presentes na zona DNS ativa do nome de domínio do qual o seu subdomínio depende:
>
> 1. Não se esqueça de os duplicar na zona DNS criada para o seu subdomínio.
> 2. Uma vez duplicados, remova-os da zona DNS ativa do seu nome de domínio.
>
> De facto, poderia haver um conflito na resolução DNS.

Após a modificação da zona DNS do nome de domínio do qual o seu subdomínio depende, a propagação das modificações pode demorar até **48 horas**.

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com a nossa [comunidade de utilizadores](/links/community).