---
title: "Configurar OVHcloud Link Aggregation num servidor dedicado (Debian)"
excerpt: "Ative o OVHcloud Link Aggregation no seu servidor Debian (de Debian 9 a Debian 11)."
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

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e aumentar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível. A largura de banda disponível é também duplicada graças à agregação.
A agregação baseia-se na tecnologia IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Este guia explica como configurar as suas interfaces em agregação para as utilizar com OLA em Debian 9 a 11 (configuração ifupdown).**

> [!warning]
> Este guia fornece instruções para configurar a agregação de interfaces de rede especificamente com `ifupdown`, cujo ficheiro de configuração é `/etc/network/interfaces`. Também é aplicável ao modo de recuperação.
>
> Se a configuração de rede do seu sistema utiliza `Netplan` (Debian 12 ou mais recente, Ubuntu 24.04), consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).
>

## Requisitos

- [Configurar o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Servidores dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Servidores dedicados`{.action} > Selecione o seu servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instruções

> [!primary]
> Os valores (endereços MAC, endereços IP, etc.) indicados nas configurações e exemplos abaixo são fornecidos a título de exemplo. Naturalmente, deve substituí-los pelos seus próprios valores.
>

> [!warning]
>
> Será necessário instalar o pacote ifenslave no servidor antes de ativar o OLA na Área de Cliente ou API da OVHcloud. Para isso, utilize o seguinte comando:
>
> ```bash
> apt install ifenslave
> ```
>

### Obtenção dos endereços MAC

Vá ao separador `Interfaces de rede`{.action} e tome nota dos endereços MAC de cada interface (pública/privada) que são apresentados na parte inferior do menu.

![Área de Cliente OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> O endereço MAC da interface **pública principal** é o que recebe as ofertas DHCP, tanto no sistema operativo do servidor como no modo de recuperação. Esta interface gere a conectividade pública na configuração predefinida.
>
> Além disso, o endereço MAC da interface **privada principal** é o de valor mais baixo. Na imagem de exemplo acima, este é o endereço `a1:b2:c3:d4:e5:d6`.
>

A configuração private-private disponível no OLA para as nossas NIC não permite aceder ao servidor em SSH. Para aceder ao servidor, é necessário utilizar a ferramenta IPMI.
<br>Clique no separador `IPMI`{.action} (1).

Em seguida, clique no botão `A partir de applet java (KVM)`{.action} (2).

### Obtenção dos nomes das interfaces

> [!primary]
>
> Se perder a ligação de rede ao servidor, siga os passos "**Abrir KVM**" de [este guia](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Para obter os nomes das interfaces, execute o seguinte comando:

```bash
ip a
```

> [!primary]
>
> Este comando irá produzir várias interfaces. Se tiver dificuldade em determinar quais são as suas interfaces físicas, a primeira interface ainda terá o endereço IP público do servidor associado por predefinição.
>

Aqui tem um exemplo de saída:

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

Após determinar os nomes das suas interfaces, pode configurar a agregação de interfaces no sistema operativo.

### Configuração da agregação de interfaces

Selecione o separador seguinte que corresponde à configuração do seu servidor:

- **Duas interfaces**: servidores Advance com duas NIC físicas.
- **Quatro interfaces - Double LAG**: servidores Scale e High-Grade com OLA no modo **Active - Double LAG** (agregados público + privado). Requer a [ativação do OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) na Área de Cliente OVHcloud.
- **Quatro interfaces - Fully Private**: servidores Scale e High-Grade com OLA no modo **Active - Fully Private** (único agregado privado para vRack). Requer a [ativação do OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) na Área de Cliente OVHcloud.

> [!tabs]
> Duas interfaces
>> Substitua o conteúdo de `/etc/network/interfaces` pelo seguinte:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # Endereço MAC da interface pública principal do servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # Endereço MAC da interface pública principal do servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> ///
>>
> Quatro interfaces - Double LAG
>> Esta configuração agrupa as interfaces públicas em `bond0` (com IP público) e as interfaces privadas em `bond1` (para vRack).
>>
>> Substitua o conteúdo de `/etc/network/interfaces` pelo seguinte:
>>
>> **IP estático**
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # Endereço MAC da interface pública principal do servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Opcional: configuração do agregado privado
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # Endereço MAC da interface privada principal do servidor
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # Endereço MAC da interface pública principal do servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Opcional: configuração do agregado privado
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # Endereço MAC da interface privada principal do servidor
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> ///
>>
> Quatro interfaces - Fully Private
>> Esta configuração agrega todas as interfaces físicas num único agregado exclusivamente para utilização com vRack. Não há conectividade IP pública.
>>
>> > [!warning]
>> >
>> > Após a implementação do OLA em modo Fully Private, o IP público deixa de estar acessível. Certifique-se de que dispõe de um meio alternativo de acesso (por exemplo, através de outro servidor no vRack ou via KVM/IPMI) antes de aplicar esta configuração.
>> >
>>
>> Substitua o conteúdo de `/etc/network/interfaces` pelo seguinte:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 10.0.0.1/24
>>   # Endereço MAC da interface privada principal do servidor
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1 ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > No modo Fully Private, o agregado utiliza o endereço MAC da interface **privada principal**. O campo `address` deve ser definido com o seu endereço IP privado de vRack.
>> >

### Aplicação da configuração

Aplique a configuração reiniciando o serviço de rede:

```bash
systemctl restart networking
```

Este reinício pode levar vários segundos, uma vez que está a construir a interface de agregação. Para testar se o agregado está a funcionar, faça um ping noutro servidor da mesma rede vRack. Se funcionar, está tudo pronto. Caso contrário, volte a verificar as suas configurações ou tente reiniciar o servidor.

## Saiba mais

[Configurar o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 12 ou Ubuntu 24.04 com Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Como configurar a NIC para o OVHcloud Link Aggregation em SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Fale com nossa [comunidade de utilizadores](/links/community).
