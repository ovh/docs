---
title: 'Atribuir um endereço MAC virtual a um Additional IP'
excerpt: 'Saiba como criar um endereço MAC virtual e como associá-lo a um Additional IP'
updated: 2024-12-13
---

## Sumário

A OVHcloud permite-lhe associar um endereço MAC virtual a um endereço de IP, de modo a poder instalar máquinas virtuais com uma configuração bridge no seu servidor.

**Este manual explica como criar um endereço MAC virtual e como associá-lo a um Additional IP.**

## Requisitos

- Dispor de um [servidor dedicado](/links/bare-metal/bare-metal).
- Dispor de um [endereço de Additional IP](/links/network/additional-ip) ou de um bloco de Additional IP (RIPE).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)  ou à [API OVHcloud](/links/api).
- O seu servidor deve suportar os MAC virtuais. Consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac) para saber mais.

> [!warning]
> - Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](/links/bare-metal/eco-about). Para mais informações, consulte o nosso [comparativo](/links/bare-metal/eco-compare).
>
> - Os servidores Advance de terceira geração (equipados com processadores EPYC 4004 Series) suportam 32 vMACs diferentes.
>
> - Esta funcionalidade estará disponível nas gamas Scale e High Grade durante o ano de 2025.

> [!primary]
> Se não está familiarizado com a utilização da API OVHcloud, consulte o nosso guia [Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps).

## Instruções

### Atribuir um endereço MAC

> [!warning]
>
> Se um bloco IP foi migrado para o vRack, já não é atribuído a um servidor físico. Já não é possível atribuir um MAC virtual a um IP.
>

#### Através da Área de Cliente OVHcloud

Depois de aceder à [Área de Cliente OVHcloud](/links/manager), clique no menu `Bare Metal Cloud`{.action} e abra a secção `IP`{.action}.

Clique no separador `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

De seguida, localize na lista o endereço de Additional IP (ou o bloco) e clique no botão `...`{.action} para exibir a lista de opções.

![IP](images/addvmac.png){.thumbnail}

Quando aparecer a caixa de diálogo “Adicionar um MAC virtual”, selecione um tipo no menu pendente, introduza o nome da máquina virtual e clique em `Confirmar`{.action}.

> [!primary]
>
> **Tipo**: trata-se do tipo de endereço MAC virtual (“VMware” será um endereço MAC feito para o sistema VMware ESXi, ao passo que “ovh” servirá para todos os outros tipos de sistemas de virtualização).
>
> **Nome da máquina virtual**: trata-se do nome desejado para o endereço MAC virtual, para depois se encontrar mais facilmente o par IP/MAC.
>

![IP](images/addvmac2.png){.thumbnail}

> [!primary]
>
> Não se esqueça de atribuir o endereço MAC virtual criado durante a configuração da máquina virtual.
> 

#### Através da API OVHcloud

Utilize a seguinte chamada API:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### Eliminar um endereço MAC

> [!warning]
>
> A eliminação de um endereço MAC é definitiva: não será possível recuperá-lo.
> 

#### Através da Área de Cliente OVHcloud

Para eliminar um endereço MAC virtual associado a um Additional IP, aceda à [Área de Cliente](/links/manager), clique no menu `Bare Metal Cloud`{.action} e abra a secção `IP`{.action}. Escolha o servidor em causa, de modo a aparecer o Additional IP (ou o bloco de IP) a ele associado.

Para concluir, clique no botão `...`{.action} à direita e em `Eliminar um MAC virtual`{.action}.

#### Através da API OVHcloud

Utilize a seguinte chamada API:

> [!api]
>
> @api {v1} /dedicated/server DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## FAQ

- **O que acontece se mover um bloco com vMACs num servidor Advance de terceira geração (equipado com um processador EPYC 4004 Series) que já possua 32 vMACs?**

O bloco não será deslocado.

Exemplo: se tentar migrar um bloco de 4 endereços IP com vMACs diferentes ligados a um servidor que já tenha 30 vMACs, o bloco não será deslocado, pois o total de vMACs seria superior aos 32 vMACs autorizados.

## Quer saber mais?

Fale com nossa [comunidade de utilizadores](/links/community).