---
title: "Como configurar a agregação de links com LACP em Debian 12 ou Ubuntu 24.04"
excerpt: "Ative a agregação de links no seu servidor Debian 12 ou Ubuntu 24.04 (Netplan) para aumentar a disponibilidade do servidor e melhorar a eficiência das ligações de rede"
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

A tecnologia LACP (Link Aggregation Control Protocol) foi concebida para aumentar a disponibilidade do servidor e melhorar a eficiência das ligações de rede. Pode agregar as placas de rede e tornar as suas ligações de rede redundantes. Desta forma, se uma ligação cair, o tráfego é automaticamente redirecionado para outra ligação disponível. A largura de banda disponível é também duplicada graças à agregação.

**Este guia explica como configurar as interfaces em agregação para as utilizar em Debian 12 (*ou posterior*) / Ubuntu 24.04 (configuração Netplan).**

> [!warning]
> Embora as imagens de Debian 12 (e versões posteriores) fornecidas pela OVHcloud utilizem o Netplan por predefinição, existem duas exceções principais em que é utilizado `ifupdown` (/etc/network/interfaces):
>
> - **Modo rescue**: Embora baseado em Debian 12, o ambiente rescue utiliza a ferramenta `ifupdown`.
> - **Imagens personalizadas**: As instalações de Debian realizadas com a sua própria imagem podem continuar a utilizar `ifupdown` para a configuração de rede.
>
> Se pretender configurar a agregação de links em modo rescue, ou num sistema operativo personalizado que utilize `ifupdown`, consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Requisitos

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Servidores dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Servidores dedicados`{.action} > Selecione o seu servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instruções

> [!primary]
> Os valores (endereços MAC, endereços IP, etc.) que aparecem nas configurações e exemplos seguintes são fornecidos como exemplos. Naturalmente, deve substituí-los pelos seus próprios.
>

### Obtenção dos endereços MAC

Aceda ao separador `Interfaces de rede`{.action} e tome nota dos endereços MAC de cada interface (pública/privada) apresentados na parte inferior do menu.

![Área de Cliente OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Tenha em conta que o endereço MAC da interface **pública principal** é o que recebe as ofertas DHCP, tanto no sistema operativo do servidor como no modo rescue. Esta interface gere a conectividade pública na configuração predefinida.
>

Depois de saber quais os endereços MAC associados a cada tipo de interface (pública/privada), deve obter os nomes das interfaces.

### Obtenção dos nomes das interfaces

> [!primary]
>
> Se perder a ligação de rede ao seu servidor, siga os passos "**Abrir KVM**" de [este guia](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Para obter os nomes das interfaces, execute o seguinte comando:

```bash
ip a
```

> [!primary]
>
> Este comando apresentará várias interfaces. Se tiver dificuldade em determinar quais são as suas interfaces físicas, a primeira interface terá ainda o endereço IP público do servidor atribuído por predefinição.
>

Exemplo de saída:

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

Selecione o separador seguinte que corresponda à configuração do seu servidor:

- **Duas interfaces**: servidores Advance com duas NIC físicas.
- **Quatro interfaces - Double LAG**: servidores Scale e High-Grade com OLA em modo **Active - Double LAG** (agregados público + privado). Requer [ativar OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) na Área de Cliente OVHcloud.
- **Quatro interfaces - Fully Private**: servidores Scale e High-Grade com OLA em modo **Active - Fully Private** (único agregado privado para vRack). Requer [ativar OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) na Área de Cliente OVHcloud.

> [!tabs]
> Duas interfaces
>> Substitua o conteúdo de `/etc/netplan/50-cloud-init.yaml` pelo seguinte:
>>
>> **IP estático**
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
>>             # Endereço MAC da interface pública principal do servidor
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
>>             # Endereço MAC da interface pública principal do servidor
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
>> Esta configuração agrupa as interfaces públicas em `bond0` (com IP público) e as interfaces privadas em `bond1` (para vRack).
>>
>> Substitua o conteúdo de `/etc/netplan/50-cloud-init.yaml` pelo seguinte:
>>
>> **IP estático**
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
>>             # Endereço MAC da interface pública principal do servidor
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
>>         # Opcional: configuração do agregado privado
>>         bond1:
>>             # Endereço MAC da primeira interface privada
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
>>             # Endereço MAC da interface pública principal do servidor
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
>>         # Opcional: configuração do agregado privado
>>         bond1:
>>             # Endereço MAC da primeira interface privada
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
>> Esta configuração agrega todas as interfaces físicas num único agregado exclusivamente para uso com vRack. Não existe conectividade IP pública.
>>
>> > [!warning]
>> >
>> > Após a implementação de OLA em modo Fully Private, o IP público deixa de estar acessível. Certifique-se de que dispõe de um meio alternativo de acesso (por ex., através de outro servidor no vRack ou por KVM/IPMI) antes de aplicar esta configuração.
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
>>             # Endereço MAC da interface privada principal do servidor
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
>> > Em modo Fully Private, o agregado utiliza o endereço MAC da interface **privada principal**. Para atribuir um endereço IP a este agregado para comunicação no vRack, adicione um bloco `addresses` em `bond0` com o seu IP privado de vRack.
>> >

### Aplicação da configuração

> [!primary]
> O comando `netplan try` não pode ser utilizado ao configurar agregados.

Aplique a configuração com o seguinte comando:

```bash
sudo netplan apply
```

Pode demorar alguns segundos até que as interfaces de agregação estejam disponíveis.

## Saiba mais

[Configurar o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Fale com nossa [comunidade de utilizadores](/links/community).
