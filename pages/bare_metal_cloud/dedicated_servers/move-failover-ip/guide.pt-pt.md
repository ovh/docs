---
title: "Deslocar um Additional IP num servidor dedicado"
excerpt: "Desloque um endereço Additional IP entre servidores dedicados através da área de cliente OVHcloud ou da API"
updated: 2026-01-21
---

> [!primary]
> Este artigo diz respeito à deslocação de endereços Additional IPv4, que é limitado por [restrições regionais](#limitations).
>
> A configuração do Additional IP num vRack (rede privada) contorna estas restrições regionais ao perder a dependência de uma única região, facilitando ao mesmo tempo a interligação numa vasta gama de serviços OVHcloud.
>
> Saiba como configurar o Additional IP num vRack com os nossos manuais para [IPv4](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) e [IPv6](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Objetivo

Os Additional IP podem ser migrados entre os serviços que utiliza. O interesse é não perder a sua reputação, o seu referenciamento e melhorar a continuidade do serviço das suas aplicações e sistemas.

Esta tecnologia permite-lhe trocar os endereços IP de uma solução para outra em menos de um minuto, praticamente sem qualquer interrupção para os seus utilizadores. Pode ser utilizada durante as migrações de serviços (deslocação dos projetos do ambiente de desenvolvimento para o de produção, por exemplo) ou aquando da migração para um servidor de recurso em caso de falha.

> [!primary]
> Pode atribuir blocos de endereços IP a qualquer serviço compatível numa região. Os blocos de endereços IP numa região podem ser movidos de um datacenter para outro dentro dessa região, mas não podem ser movidos para fora dessa região.
> 
> Com exceção das 3 regiões eu-west-gra, eu-west-rbx e eu-west-sbg, entre as quais os blocos de endereços IP podem ser deslocados.
>
> Uma região é uma área geográfica composta por um ou mais centros de dados.
>
> A migração só funciona para blocos inteiros, não é possível migrar IPs individuais dentro de um bloco.
>

**Descubra como transferir um Additional IP a partir da sua área de cliente OVHcloud ou através das APIs OVHcloud. Descubra também como transferir um Additional IP de uma conta So you Start para uma conta OVHcloud.**

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal) na Área de Cliente OVHcloud.
- Dispor de um [endereço Additional IP](/links/network/additional-ip).

<!-- CP-NAV-START:network-public-ip -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public IP](/links/control-panel/network-public-ip)
- **Caminho de navegação:** `Network`{.action} > `Endereços IP Públicos`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para mais informações, consulte o nosso [comparativo](/links/bare-metal/eco-compare).
>

> [!warning]
> Se o endereço Additional IP, ou um dos endereços IP do bloco, tem um MAC virtual afetado, o servidor alvo deve suportar a funcionalidade dos MAC virtuais.
> Consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac) para saber mais.
>
> Caso contrário, os MAC virtuais devem ser eliminados dos Additional IP antes da deslocação.

## Instruções

> [!primary]
> Quando um bloco IP contendo endereços MAC virtuais únicos é movido entre dois servidores, esses endereços são temporariamente suspensos. Aparecerão no novo servidor uma vez que a mudança esteja completa.
> 
> Por outro lado, os blocos contendo endereços MAC virtuais duplicados não podem ser movidos. Deve primeiro apagar o endereço MAC virtual duplicado no bloco a ser movido.
>
> Se um bloco IP for movido/adicionado ao vRack, ele não estará mais vinculado a um servidor físico. Nesse caso, todos os endereços MAC virtuais serão perdidos durante a transferência.
>

### Blocos IP geolocalizados

A geolocalização de um endereço IP é independente da sua região de conexão.

Se encomendar um bloco adicional IP num servidor, mas escolher uma localização diferente (geolocalização) para o bloco IP, este bloco IP não pode ser transferido para outro servidor situado no mesmo país que este bloco. Por exemplo, um bloco adicional IP geolocalizado na Polónia (eu-central-war) e encomendado num servidor situado num datacenter em França (eu-west-gra) não pode ser transferido para um servidor situado num datacenter situado na Polónia (eu-central-war). O bloco IP só pode ser migrado para um servidor elegível situado num datacenter em França.

### Migrar um Additional IP a partir da Área de Cliente OVHcloud

> [!warning]
> Apenas um único bloco de tamanho (/32) poderá ser movido de um servidor dedicado para um VPS.
>

Pode utilizar o menu suspenso em **Os meus endereços IP públicos e serviços associados** e selecionar `Todos os Additional IP`{.action} para filtrar os seus serviços, ou digitar diretamente o endereço IP desejado na barra de pesquisa.

![Área de Cliente](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/manage_additional_ips_new.png){.thumbnail}

Clique no botão `⁝`{.action} à direita do endereço IP a ser movido e, em seguida, em `Mover Additional IP`{.action}.

![Menu contextual para deslocar um Additional IP](images/move_ip_1_new.png){.thumbnail}

No menu contextual que aparece, selecione o serviço para o qual deseja mover o endereço IP.

Clique em `Seguinte`{.action} e depois em `Confirmar`{.action}.

![Selecionar o serviço de destino para o Additional IP](images/move_ip_2_new.png){.thumbnail}

> [!warning]
> Tenha em atenção que, para alguns produtos, os endereços IP (ou blocos) devem primeiro ser movidos para um **Parking IP** (um local de armazenamento temporário), antes de poderem ser movidos para o produto desejado.
>
> Para mover blocos IP para uma rede vRack específica, utilize **a interface de gestão vRack**, à qual pode aceder clicando em `Network`{.action} no menu à esquerda do ecrã e, em seguida, em `Rede privada vRack`{.action}.
>

### Migrar um Additional IP através das API

Aceda à página web das [API OVHcloud](/links/api).

Numa primeira fase, é preferível verificar se o endereço IP pode ser migrado.
<br>Para verificar se o IP pode ser migrado para um dos seus servidores dedicados, utilize a seguinte chamada:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: a referência do servidor dedicado de destino
- `ip`: o endereço Additional IP a migrar

Para migrar o endereço IP, utilize a seguinte chamada:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: a referência do servidor dedicado de destino
- `ip`: o endereço Additional IP a migrar

### Migrar um Additional IP de uma conta So you Start para uma conta OVHcloud

Para migrar um Additional IP de uma conta SYS para uma conta OVHcloud, deve ter em conta vários elementos:

- A migração de um Additional IP implica custos de instalação. O endereço IP não será migrado se a fatura permanecer por pagar.
- Não é possível migrar um Additional IP de uma conta OVHcloud para uma conta So you Start.
- Certifique-se de que o servidor para o qual está a migrar o endereço IP se encontra na mesma região compatível que este. Consulte a secção «Restrições» abaixo.

Para começar, inicie sessão na sua conta So you Start e clique em `IP`{.action} no painel principal.

![Secção IP So you Start no painel de controlo](images/sys-ip-section.png){.thumbnail}

Clique no botão de definições (em forma de engrenagem `⚙`{.action}) ao lado do endereço IP correspondente e selecione `Migrar o IP FO`{.action}.

![Opção Deslocar o IP failover no menu So you Start](images/move-ip-sys.png){.thumbnail}

Selecione `Migrar para um serviço OVH`{.action}, introduza o seu ID de cliente OVHcloud e clique em `Seguinte`{.action}.

![Selecionar Deslocar para um serviço OVH e introduzir o NIC handle](images/move-to-ovh.png){.thumbnail}

Isso irá gerar um código (token). Guarde-o.

![Código token gerado para a transferência de IP](images/token-id.png){.thumbnail}

Em seguida, [inicie sessão na sua conta OVHcloud](/links/manager), clique em `Network`{.action} no menu à esquerda do ecrã e, a seguir, em `Endereços IP Públicos`{.action}.

Clique no botão de definições (em forma de engrenagem `⚙`{.action}) à direita e selecione `Importar os meus endereços IP da SyS para a OVHcloud`{.action}.

![Opção Importar endereços IP de SyS para OVHcloud](images/import-ip-to-ovh.png){.thumbnail}

Aparecerá uma janela pop-up. Introduza o endereço Additional IP (ou o bloco) e o código recuperado na conta So you Start no campo `Token`. Em seguida, clique em `Seguinte`{.action}.

![Introduzir o Additional IP e o token para a importação](images/Step-1.png){.thumbnail}

Selecione o servidor de destino e clique em `Seguinte`{.action}. Se o servidor dedicado for compatível com o endereço IP, será exibida uma mensagem verde. Caso contrário, receberá uma mensagem de erro.

![Selecionar o servidor de destino com verificação de compatibilidade](images/Step-2.png){.thumbnail}<br>
![Mensagem de confirmação de compatibilidade do servidor](images/Step-2.1.png){.thumbnail}

Na janela seguinte, a duração é selecionada automaticamente e os custos são exibidos. Clique em `Seguinte`{.action} para continuar.

![Resumo da duração e dos custos para a transferência de IP](images/Step-3.png){.thumbnail}

Marque a caixa `Aceitar os contratos`{.action} para aceitar os termos de utilização após os ter lido. Em seguida, clique em `Seguinte`{.action}.

![Caixa de aceitação dos contratos para a transferência de IP](images/Step-4.png){.thumbnail}

Anote o resumo do pedido e clique em `Confirmar`{.action} para validá-lo.

![Resumo e confirmação da encomenda para a transferência de IP](images/Step-5.png){.thumbnail}

Será redirecionado para uma nova página para efetuar o pagamento.

Após o pagamento, o seu IP adicional será transferido para a sua conta OVHcloud e associado ao servidor selecionado. Este processo pode demorar algum tempo.

### Restrições <a name="limitations"></a>

Tenha em conta que existem certas limitações aquando da migração de um bloco de endereços IP. A tabela abaixo mostra a compatibilidade entre as regiões.

Para mais informações, consulte a nossa lista de [regiões disponíveis](/links/network/additional-ip).

| Nome da Região | eu-west-par | eu-west-gra | eu-west-rbx | eu-west-sbg | eu-west-lim | eu-central-war | eu-west-eri | ca-east-bhs | ca-east-tor | ap-southeast-sgp | ap-southeast-syd |
|----------------|-------------|-------------|-------------|-------------|-------------|----------------|-------------|-------------|-------------|-------------|-------------|
| eu-west-par    |      ✅        |      ❌       |     ❌        |     ❌        |      ❌       |      ❌          |       ❌       |       ❌      |     ❌      | ❌      |     ❌      |
| eu-west-gra    |       ❌      |       ✅       |      ✅       |      ✅      |       ❌       |       ❌         |       ❌        |     ❌        |    ❌        | ❌      |     ❌      |
| eu-west-sbg    |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-rbx |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-lim    |        ❌       |      ❌       |      ❌       |     ❌        |     ✅       |      ❌         |      ❌        |     ❌        |     ❌       | ❌      |     ❌      |
| eu-central-war |      ❌       |      ❌       |     ❌       |      ❌       |      ❌        |       ✅         |       ❌       |       ❌       |       ❌        | ❌      |     ❌      |
| eu-west-eri    |         ❌      |       ❌      |        ❌     |       ❌     |      ❌       |       ❌         |     ✅        |      ❌         |      ❌       | ❌      |     ❌      |
| ca-east-bhs    |     ❌        |      ❌       |    ❌         |        ❌    |        ❌       |      ❌          |       ❌      |     ✅        |      ❌       | ❌      |     ❌      |
| ca-east-tor    |    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ✅     | ❌      |     ❌      |
| ap-southeast-sgp|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ✅       |     ❌      |
| ap-southeast-syd|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ❌      |     ✅       |

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).