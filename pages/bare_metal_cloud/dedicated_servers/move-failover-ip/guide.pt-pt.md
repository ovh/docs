---
title:  Migrar um Additional IP
excerpt: Saiba como migrar um Additional IP a partir da Área de Cliente ou através das API OVHcloud
updated: 2025-07-22
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
> Pode atribuir blocos de endereços IP a qualquer serviço compatível numa região.
Os blocos de endereços IP numa região podem ser movidos de um datacenter para outro dentro dessa região, mas não podem ser movidos para fora dessa região.
> 
> Com exceção das 3 regiões eu-west-gra, eu-west-rbx e eu-west-sbg, entre as quais os blocos de endereços IP podem ser deslocados.
>
> A migração só funciona para blocos inteiros, não é possível migrar IPs individuais dentro de um bloco.

**Saiba como migrar um Additional IP a partir da Área de Cliente OVHcloud ou através das API OVHcloud**

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal) na Área de Cliente OVHcloud.
- Dispor de um [endereço Additional IP](/links/network/additional-ip).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

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

### Blocos IP geolocalizados

A geolocalização de um endereço IP é independente da sua região de conexão.

Se encomendar um bloco adicional IP num servidor, mas escolher uma localização diferente (geolocalização) para o bloco IP, este bloco IP não pode ser transferido para outro servidor situado no mesmo país que este bloco. Por exemplo, um bloco adicional IP geolocalizado na Polónia (eu-central-war) e encomendado num servidor situado num datacenter em França (eu-west-gra) não pode ser transferido para um servidor situado num datacenter situado na Polónia (eu-central-war). O bloco IP só pode ser migrado para um servidor elegível situado num datacenter em França.

### Migrar um IP a partir da Área de Cliente OVHcloud

> [!warning]
> Apenas um único bloco de tamanho (/32) poderá ser movido de um servidor dedicado para um VPS.
>

Aceda à [Área de Cliente OVHcloud](/links/manager), clique em `Network`{.action} no menu à esquerda do ecrã e, a seguir, em `Endereços IP Públicos`{.action}.

Clique no separador `Additional IP`{.action}.

![manage IPs](images/manageIPs2024.png){.thumbnail}

Clique no botão `...`{.action} à direita do endereço IP a migrar e, a seguir, em `Mover Additional IP`{.action} ou em `Associar este bloco de IP a outro serviço`{.action}.

![Área de Cliente](images/move_ip.png){.thumbnail}

No menu contextual que aparece, selecione o serviço para o qual mover o endereço IP.

Clique em `Seguinte`{.action} e depois em `Validar`{.action}.

![Área de Cliente](images/moveadditionalIP2.png){.thumbnail}

### Migrar um IP através das API

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

Fale com nossa [comunidade de utilizadores](/links/community).