---
title: 'Criar uma zona DNS da OVHcloud para um domínio'
excerpt: 'Saiba como criar uma zona DNS na OVHcloud para o seu domínio através da Área de Cliente'
updated: 2026-03-10
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

A zona **D**omain **N**ame **S**ystem (**DNS**) de um nome de domínio constitui o ficheiro de configuração deste último. É composta por informações técnicas, designadas *registos DNS*. A zona DNS é, de certa forma, como um centro de agulhas.

Para mais explicações, consulte os seguintes guias:

- [Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

Por várias razões, poderá ter de criar uma zona DNS para o seu domínio na OVHcloud.

**Saiba como criar uma zona DNS na OVHcloud para o seu domínio através da Área de Cliente OVHcloud.**

## Requisitos

- Dispor de um nome de domínio.
- O domínio em questão não deve dispor de uma zona DNS (ativa ou não) na OVHcloud ou estar a ser objeto de uma operação ou de um comando em curso na OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Caminho de navegação:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-dns-zone -->

## Instruções

> [!warning]
>
> Pode criar várias zonas DNS (em diferentes fornecedores/fornecedores/alojadores DNS) para um mesmo nome de domínio. No entanto, só pode ter uma zona DNS ativa para o seu domínio. Esta restrição visa evitar *conflitos DNS*.
>
> A ativação/desativação de uma zona DNS é efetuada a partir da declaração dos **servidores DNS** no seu nome de domínio. Pode alterar esta declaração e alterar os **servidores DNS** de um nome de domínio junto: 
>
> - do *agente de registo* onde registou diretamente o seu nome de domínio;
> - do prestador de serviços que o gere, se passar por um prestador de serviços especializado para gerir o seu nome de domínio.
>
> Ao alterar **servidores DNS** de um nome de domínio, está a desativar a configuração da antiga zona DNS aplicada em benefício da configuração da nova zona DNS (presente nos novos **servidores DNS** declarados).
>
> Por isso, antes de alterar os **servidores DNS** declarados ao seu domínio, verifique se a configuração da nova zona DNS corresponde às suas necessidades.
>

### 1 - Criar a zona DNS através da Área de Cliente OVHcloud

<!-- CP-STEPS-START:criar-zona-dns -->
Clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone), depois no botão `Encomendar`{.action}.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na nova página, introduza o domínio (por exemplo: *domínio.tld*) para o qual quer criar uma zona DNS OVHcloud. Aguarde alguns instantes enquanto a ferramenta efetua verificações sobre o domínio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Se uma mensagem indicar que a zona DNS não pode ser criada, verifique se o domínio respeita os requisitos necessários ou contacte a pessoa que o gere. Assim que tudo estiver correto, tente novamente a operação.
>>
> **Etapa 3**
>>
>> Assim que a verificação chegar ao fim, escolha ativar ou não as entradas mínimas para a zona DNS que vai criar. Esta escolha não é definitiva pois poderá sempre [editar os registos da zona DNS](/pages/web_cloud/domains/dns_zone_edit) mais tarde.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Ativar entradas mínimas?|Detalhes|
>> |---|---|
>> |Sim|Selecione esta escolha se deseja personalizar você mesmo a zona DNS.<br>![mínimo-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |Não|Selecione esta escolha se pretende utilizar serviços da OVHcloud como [alojamento web](/links/web/hosting), sendo a zona pré-configurada para este efeito.<br>![no-mínimo-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Uma vez que a sua escolha tenha sido feita, siga as etapas apresentadas na sua Área de Cliente OVHcloud até à criação da zona DNS.
<!-- CP-STEPS-END:criar-zona-dns -->

### 2 - Editar a zona DNS (facultativo)

Uma vez que a zona DNS para o seu domínio está criada, pode editá-la a partir de agora. Esta operação é opcional, mas pode ser necessária se pretender assegurar a continuidade da disponibilidade dos serviços associados a este nome de domínio (como um website e/ou os e-mails).

Para editar esta zona DNS, consulte o nosso guia "[Editar uma zona DNS na OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Se acabou de criar a zona DNS e o domínio ainda não estiver incluído na lista dos serviços, aguarde 15 a 20 minutos e recarregue a página.
>

### 3 - Alterar os servidores DNS do domínio

Quando a zona DNS da OVHcloud estiver pronta para ser utilizada, associe-a ao seu domínio para aplicar a configuração que contém a este último. 

<!-- CP-STEPS-START:encontrar-servidores-dns -->
Assim, deverá recuperar previamente os **servidores DNS** da OVHcloud nos quais a zona DNS da OVHcloud foi criada para o seu domínio.

Para os encontrar, clique nos separadores abaixo para visualizar cada uma das **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Zonas DNS](/links/control-panel/web-dns-zone) e escolha o domínio correspondente.
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
<!-- CP-STEPS-END:encontrar-servidores-dns -->

Depois de recuperar os 2 nomes de servidor DNS, 2 situações são possíveis.

> [!primary]
>
> Relembramos que, antes de alterar os **servidores DNS** declarados ao seu domínio, verifique se a configuração da nova zona DNS corresponde às suas expetativas.

**Clique numa das 2 situações para visualizar o conteúdo.**

/// details | O domínio tem a sua zona DNS ativa na OVHcloud

Consulte [este guia](/pages/web_cloud/domains/dns_server_edit) para verificar ou modificar os servidores DNS declarados para o seu domínio.

///

/// details | O domínio tem a sua zona DNS ativa noutro fornecedor

Neste caso específico, contacte o seu fornecedor DNS indicando que pretende substituir os registos DNS do tipo NS para o seu domínio.

Segue um exemplo de pedido a enviar ao seu fornecedor DNS:

<pre class="bgwhite"><code>
Bom dia,

Para o meu domínio <b>domain.tld</b>, pretendo substituir os servidores DNS atuais pelos seguintes servidores DNS:

 - nsXX.ovh.net.
 - dnsXX.ovh.net.

Com os melhores cumprimentos,
</code></pre>

No exemplo acima, substitua os valores **domain.tld**, **nsXX.ovh.net** e **dnsXX.ovh.net** pelos seus próprios valores.

///

Depois de modificar os servidores DNS do domínio, a propagação das alterações pode demorar até **48 horas**.

> [!success]
>
> Se pretender personalizar os nomes dos servidores DNS associados à zona DNS ativa do seu domínio, consulte o guia "[Personalizar os servidores DNS de um nome de domínio (Glue Records)](/pages/web_cloud/domains/glue_registry)".
>

## Quer saber mais?

[Saber tudo sobre os servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Saber tudo sobre a zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Saber tudo sobre os registos DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar uma zona DNS da OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).
 
Fale com nossa [comunidade de utilizadores](/links/community).