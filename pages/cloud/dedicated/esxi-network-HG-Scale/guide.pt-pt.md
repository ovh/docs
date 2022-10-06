---
title: 'Configurar a rede em ESXi nas gamas High Grade & SCALE'
slug: esxi-network-hg-scale
excerpt: 'Saiba como configurar a rede ESXi nas gamas High Grade & SCALE.'
section: 'Utilização avançada'
order: 7
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 09/05/2022**

## Objetivo

Nas gamas High Grade & SCALE, o funcionamento dos Additional IP em modo *bridged* (através de MAC virtuais) não é possível. Por isso, é necessário configurar os Additional IP em modo roteado ou através do vRack.

> [!primary]
>
> Até à data, a documentação apenas cobre a solução através do vRack.
>

**Saiba como configurar a rede no ESXi.**

## Requisitos

* Ter reservado um bloco público de endereços IP na sua conta, com um mínimo de quatro endereços. O bloco deve ser apontado para o vRack.
* Ter acesso ao intervalo de endereços de IP privados escolhidos.
* Dispor de um [servidor dedicado compatível com o vRack](https://www.ovhcloud.com/pt/bare-metal/){.external}.
* Ter ativado um serviço [vRack](https://www.ovh.pt/solucoes/vrack/){.external}.
* Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

> [!warning]
>
> Nessas gamas de servidores, há 4 placas de rede. Para beneficiar de toda a largura de banda, devem ser criados agregados. A nossa documentação baseia-se nestes agregados de placas de rede.
>
> **Em contrapartida, o ESXi não suporta nativamente o LACP.**
> Não haverá redundância. A totalidade da largura de banda das placas de rede do seu servidor também não poderá ser explorada.
>

> [!warning]
>
> Um defeito conhecido está presente na interface gráfica ESXi do utilizador. Assim, a execução destas etapas nesta interface resultaria numa configuração não funcional. É absolutamente necessário aplicar esta configuração utilizando a interface de linha de comando em SSH.
>

### Additional IP através do vRack

Primeiro, adicione o seu bloco público de endereços IP ao vRack. Para isso, aceda à secção `Bare Metal Cloud`{.action} da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e abra o menu `vRack`{.action}.

Selecione o seu vRack na lista para apresentar a lista dos serviços elegíveis. Clique no bloco público de endereços IP que deseja adicionar ao vRack e, a seguir, clique no botão `Adicionar`{.action}.

#### Configuração de origem

![esquema esxi](images/schema_esxi_A01_2022.png){.thumbnail}

Neste exemplo:

* as interfaces públicas são `vmnic2` e `vmnic3`;
* as interfaces privadas estão na `vmnic0` e `vmnic1`.

Um primeiro vSwitch existe mas inclui apenas uma interface `vmnic2`.

> [!primary]
>
> Verifique que a sua configuração é semelhante. Dispõe das informações relativas aos MAC e interfaces públicas ou privadas na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) ou através da API OVHcloud.
>

#### Explicações

Agora deve:

* criar o agregado sobre o vSwitch público;
* criar o vSwitch para o vRack;
* criar um grupo de portos;
* criar as VMs utilizando o novo grupo de portas como interface de rede.

#### Configurar ESXi

> [!primary]
>
> As manipulações devem ser realizadas em modo de comando (shell) e não a partir da interface gráfica (GUI) do ESXi.
>

##### **Criação do agregado em modo LACP no vSwitch que tem interfaces públicas**

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Resultado:

![esquema esxi](images/schema_esxi_A02_2022.png){.thumbnail}

##### **Criação do vSwitch e do agregado para o vRack nas interfaces privadas**

```bash
[root@localhost:~] esxcli network vswitch standard add --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic0 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic1 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vRackvSwitch
[root@localhost:~] 
```

Resultado:

![esquema esxi](images/schema_esxi_A03_2022.png){.thumbnail}

##### **Configuração da VM**

As VM devem ter na interface de rede o novo grupo de portas portgroupv `portgroupvRackvSwitch`.

![esquema esxi](images/schema_esxi_A04_2022.png){.thumbnail}

##### **Criação de um grupo de portos para o novo vSwitch "vRackvSwitch"**

```bash
[root@localhost:~] esxcli network vswitch standard portgroup add --portgroup-name=portgroupvRackvSwitch --vswitch-name=vRackvSwitch
```

#### Configurar um endereço IP utilizável

No caso do vRack, o primeiro e os dois últimos endereços de um determinado bloco de IP são sempre reservados, respetivamente, para o endereço da rede, a gateway e o endereço de *broadcast*. Isto significa que o primeiro endereço utilizável é o segundo endereço do bloco, como indicado a seguir:

```sh
46.105.135.96 # Reservado: endereço da rede
46.105.135.97 # Primeiro endereço utilizável
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109 # Último endereço utilizável
46.105.135.110 # Reservado: gateway da rede
46.105.135.111 # Reservado: endereço de broadcast de rede
```

Para configurar o primeiro endereço IP utilizável, é preciso editar o ficheiro de configuração de rede, como indicado abaixo. Neste exemplo, utilize uma máscara de sub-rede **255.255.255.240**.

> [!primary]
>
> A máscara de sub-rede utilizada neste exemplo adequa-se ao nosso bloco de endereços IP. A sua máscara de sub-rede pode diferir em função da dimensão do bloco. Quando comprar o seu bloco de endereços IP, receberá um e-mail com a máscara de sub-rede que deve utilizar.
>

#### Exemplo de configuração de uma VM cliente sob Debian

Conteúdo do ficheiro `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Saiba mais

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>
