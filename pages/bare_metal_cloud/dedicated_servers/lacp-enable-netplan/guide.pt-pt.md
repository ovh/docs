---
title: "Como configurar a agregação de links com LACP em Debian 12 ou Ubuntu 24.04"
excerpt: "Ative a agregação de links no seu servidor Debian 12 ou Ubuntu 24.04 (Netplan) para aumentar a disponibilidade do servidor e melhorar a eficiência das suas ligações de rede"
updated: 2026-04-20
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
</style>

## Objetivo

A tecnologia LACP (Link Aggregation Control Protocol) foi concebida para aumentar a disponibilidade do seu servidor e melhorar a eficiência das suas ligações de rede. Pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que, se uma ligação falhar, o tráfego é automaticamente redirecionado para outra ligação disponível. A largura de banda disponível é igualmente duplicada graças à agregação.

**Este guia explica como associar as suas interfaces para as utilizar na agregação de links em Debian 12 (*ou mais recente*) / Ubuntu 24.04 (configuração Netplan).**

> [!warning]
> Embora as imagens Debian 12 (ou mais recentes) disponibilizadas pela OVHcloud utilizem o `Netplan` por predefinição, existem duas exceções importantes em que o `ifupdown` (/etc/network/interfaces) é utilizado:
>
> - **Modo rescue**: Embora baseado no Debian 12, o ambiente rescue utiliza o utilitário `ifupdown`.
> - **Imagens personalizadas**: As instalações Debian realizadas a partir da sua própria imagem podem continuar a utilizar o `ifupdown` para a configuração de rede.
>
> Se pretende configurar a agregação de links em modo rescue, ou num sistema operativo personalizado que utiliza o `ifupdown`, consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Requisitos

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acesso à área de cliente OVHcloud

- **Link direto:** [Servidores dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Para aceder aos seus serviços:** `Bare Metal Cloud`{.action} > `Servidores dedicados`{.action} > Selecione o seu servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instruções

> [!primary]
> Os valores (endereços MAC, endereços IP, etc.) apresentados nas configurações e exemplos abaixo são fornecidos a título de exemplo. Deve substituir esses valores pelos seus.
>

### Obtenção dos endereços MAC

Clique no separador `Network Interfaces`{.action} e tome nota dos endereços MAC de cada interface (pública/privada) que são apresentados na parte inferior do menu.

![Área de cliente OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Tenha em atenção que o endereço MAC da interface **pública principal** é o que recebe as ofertas DHCP, tanto no sistema operativo do servidor como em modo rescue. Esta interface gere a conectividade pública na configuração predefinida.
>

Agora que sabe quais os endereços MAC associados a cada tipo (público/privado) de interface, deve obter os nomes das interfaces.

### Obtenção dos nomes das interfaces

> [!primary]
>
> Se perder a ligação de rede ao seu servidor, siga os passos "**Open KVM**" [deste guia](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Para obter os nomes das interfaces, execute o seguinte comando:

```bash
ip a
```

> [!primary]
>
> Este comando apresentará várias interfaces. Se tiver dificuldade em determinar quais são as suas interfaces físicas, a primeira interface terá por predefinição o endereço IP público do servidor associado.
>

Exemplo de resultado:

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: ens22f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c6 brd ff:ff:ff:ff:ff:ff
    inet 203.0.113.1/32 metric 100 scope global dynamic ens22f0np0
       valid_lft 71613sec preferred_lft 71613sec
    inet6 2001:db8:1:1b00:203:0:112:0/56 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::a6b2:c3ff:fed4:e5c6/64 scope link
       valid_lft forever preferred_lft forever
3: ens22f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c7 brd ff:ff:ff:ff:ff:ff
4: ens33f0np0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d6 brd ff:ff:ff:ff:ff:ff
5: ens33f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d7 brd ff:ff:ff:ff:ff:ff
```

Depois de determinar os nomes das suas interfaces, pode configurar a agregação de interfaces no sistema operativo.

### Configuração da agregação de interfaces

Selecione o separador abaixo que corresponde à configuração do seu servidor:

- **Duas interfaces**: servidores Advance com duas placas de rede físicas.
- **Quatro interfaces - Double LAG**: servidores Scale e High Grade com OLA em modo **Active - Double LAG** (agregados público + privado). É necessário [ativar o OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) na área de cliente OVHcloud.
- **Quatro interfaces - Fully Private**: servidores Scale e High Grade com OLA em modo **Active - Fully Private** (agregado privado único para o vRack). É necessário [ativar o OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) na área de cliente OVHcloud.

> [!tabs]
> Duas interfaces
>> Substitua o conteúdo de `/etc/netplan/50-cloud-init.yaml` pelo seguinte:
>>
>> **IP fixo**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Quatro interfaces - Double LAG
>> Esta configuração associa as interfaces públicas em `bond0` (com o IP público) e as interfaces privadas em `bond1` (para o vRack).
>>
>> Substitua o conteúdo de `/etc/netplan/50-cloud-init.yaml` pelo seguinte:
>>
>> **IP fixo**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Quatro interfaces - Fully Private
>> Esta configuração agrega todas as interfaces físicas num único agregado para utilização exclusiva com o vRack. Não existe conectividade IP pública.
>>
>> > [!warning]
>> >
>> > Após a implementação do OLA em modo Fully Private, o IP público deixa de estar acessível. Certifique-se de que dispõe de um meio de acesso alternativo (por exemplo, através de outro servidor no vRack, ou via KVM/IPMI) antes de aplicar esta configuração.
>> >
>>
>> Substitua o conteúdo de `/etc/netplan/50-cloud-init.yaml` pelo seguinte:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > Em modo Fully Private, o agregado utiliza o endereço MAC da interface **privada principal**. Para atribuir um endereço IP a este agregado para a comunicação vRack, adicione um bloco `addresses` em `bond0` com o seu IP privado vRack.
>> >

### Aplicação da configuração

> [!primary]
> O comando `netplan try` não pode ser utilizado na configuração de agregados.

Aplique a configuração com o seguinte comando:

```bash
sudo netplan apply
```

Poderão ser necessários alguns segundos até que os agregados fiquem operacionais.

## Quer saber mais?

[Configuração do OVHcloud Link Aggregation na área de cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Fale com a nossa [comunidade de utilizadores](/links/community).
