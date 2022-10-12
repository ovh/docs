---
title:  Migrar um Additional IP
excerpt: Saiba como migrar um Additional IP a partir da Área de Cliente ou através das API OVHcloud
slug: ip-fo-move
section: Redes & IP
order: 7
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em “Contribuir” nesta página.
>

**Última atualização: 06/10/2022**

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não tem qualquer impacto nas suas funcionalidades ou no funcionamento dos seus serviços.
>

## Objetivo

Os Additional IP podem ser migrados entre os serviços que utiliza. O interesse é não perder a sua reputação, o seu referenciamento e melhorar a continuidade do serviço das suas aplicações e sistemas.

Esta tecnologia permite-lhe trocar os endereços IP de uma solução para outra em menos de um minuto, praticamente sem qualquer interrupção para os seus utilizadores. Pode ser utilizada durante as migrações de serviços (deslocação dos projetos do ambiente de desenvolvimento para o de produção, por exemplo) ou aquando da migração para um servidor de recurso em caso de falha.

> [!primary]
> Um Additional IP não pode ser migrado de uma zona para outra. Por exemplo, um IP situado no datacenter SBG poderá ser migrado para GRA ou RBX mas não poderá ser migrado para BHS.
>
> A migração só funciona para blocos inteiros, não é possível migrar IPs individuais dentro de um bloco.

**Saiba como migrar um Additional IP a partir da Área de Cliente OVHcloud ou através das API OVHcloud**

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/){.external} na Área de Cliente OVHcloud.
- Dispor de um [endereço Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).
>

> [!warning]
> Se o endereço Additional IP, ou um dos endereços IP do bloco, tem um MAC virtual afetado, o servidor alvo deve suportar a funcionalidade dos MAC virtuais.
> Consulte [este guia](https://docs.ovh.com/pt/dedicated/network-support-virtual-mac/) para saber mais.
>
> Caso contrário, os MAC virtuais devem ser eliminados dos Additional IP antes da deslocação.

## Instruções

> [!primary]
> Quando um bloco IP contendo endereços MAC virtuais únicos é movido entre dois servidores, esses endereços são temporariamente suspensos. Aparecerão no novo servidor uma vez que a mudança esteja completa.
> 
> Por outro lado, os blocos contendo endereços MAC virtuais duplicados não podem ser movidos. Deve primeiro apagar o endereço MAC virtual duplicado no bloco a ser movido.

### Migrar um IP a partir da Área de Cliente OVHcloud

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique no menu `Bare Metal Cloud`{.action} e abra a secção `IP`{.action}.

O menu pendente "Service" permite-lhe selecionar apenas os endereços Additional IP.

Clique no botão `...`{.action} à direita do endereço IP a migrar e, a seguir, em `Migrar o Additional IP`{.action}.

![Área de Cliente](images/manager02.png){.thumbnail}

No menu contextual que aparece, selecione o serviço para o qual mover o endereço IP.

Clique em `Seguinte`{.action} e depois em `Validar`{.action}.

![Área de Cliente](images/manager03.png){.thumbnail}

### Migrar um IP através das API

Aceda à página web das [API OVHcloud](https://api.ovh.com/).

Numa primeira fase, é preferível verificar se o endereço IP pode ser migrado.
<br>Para verificar se o IP pode ser migrado para um dos seus servidores dedicados, utilize a seguinte chamada:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: a referência do servidor dedicado de destino
- `ip`: o endereço Additional IP a migrar

Para migrar o endereço IP, utilize a seguinte chamada:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: a referência do servidor dedicado de destino
- `ip`: o endereço Additional IP a migrar

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.