---
title: 'Atribuir um endereço MAC virtual a um IP Fail-over'
slug: network-virtual-mac
excerpt: 'Saiba como criar um endereço MAC virtual e como associá-lo a um IP Fail-over'
section: 'Redes & IP'
---

**Última atualização: 16/12/2021**

## Sumário

A OVHcloud permite-lhe associar um endereço MAC virtual a um endereço de IP, de modo a poder instalar máquinas virtuais com uma configuração bridge no seu servidor.

**Este manual explica como criar um endereço MAC virtual e como associá-lo a um IP Fail-over.**


## Requisitos

- Dispor de um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external}.
- Dispor de um [endereço de IP Fail-over](https://www.ovh.pt/servidores_dedicados/ip_failover.xml){.external} ou de um bloco de IP Fail-over (RIPE).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- O seu servidor deve suportar os MAC virtuais. Consulte [este guia](https://docs.ovh.com/pt/dedicated/network-support-virtual-mac/) para saber mais.

## Instruções

### Atribuir um endereço MAC

Depois de aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique no menu `Bare Metal Cloud`{.action} e abra a secção `IP`{.action}.

De seguida, localize na lista o endereço de IP Fail-over (ou o bloco) e clique no botão `...`{.action} para exibir a lista de opções.

![IPFO](images/addvmac.png){.thumbnail}

Quando aparecer a caixa de diálogo “Adicionar um MAC virtual”, selecione um tipo no menu pendente, introduza o nome da máquina virtual e clique em `Confirmar`{.action}.

> [!primary]
>
> **Tipo**: trata-se do tipo de endereço MAC virtual (“VMware” será um endereço MAC feito para o sistema VMware ESXi, ao passo que “ovh” servirá para todos os outros tipos de sistemas de virtualização).
>
> **Nome da máquina virtual**: trata-se do nome desejado para o endereço MAC virtual, para depois se encontrar mais facilmente o par IP/MAC.
>

![IPFO](images/addvmac2.png){.thumbnail}


> [!primary]
>
> Não se esqueça de atribuir o endereço MAC virtual criado durante a configuração da máquina virtual.
> 

### Eliminar um endereço MAC

> [!warning]
>
> A eliminação de um endereço MAC é definitiva: não será possível recuperá-lo.
> 

Para eliminar um endereço MAC virtual associado a um IP Fail-over, aceda à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique no menu `Bare Metal Cloud`{.action} e abra a secção `IP`{.action}. Escolha o servidor em causa, de modo a aparecer o IP Fail-over (ou o bloco de IP) a ele associado.

Para concluir, clique no botão `...`{.action} à direita e em `Eliminar um MAC virtual`{.action}.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.