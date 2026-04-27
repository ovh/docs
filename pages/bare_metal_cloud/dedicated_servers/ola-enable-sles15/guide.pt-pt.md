---
title: "Configurar OVHcloud Link Aggregation num servidor dedicado (SLES 15)"
excerpt: "Ative o OVHcloud Link Aggregation no seu servidor dedicado SLES 15."
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

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e melhorar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível. A largura de banda disponível é também duplicada graças à agregação.
A agregação baseia-se na tecnologia IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Este guia explica como configurar as suas interfaces em agregação para as utilizar com OLA no SLES 15.**

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

A configuração private-private disponível no OLA para as nossas NIC não permite aceder ao servidor em SSH. Para aceder ao servidor, é necessário utilizar a ferramenta IPMI.

Clique no separador `IPMI`{.action} (1) e, em seguida, no botão `A partir de applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Um programa JNLP será descarregado. Execute o software para aceder ao IPMI. Ligue-se utilizando as informações de identificação associadas ao servidor.

Por predefinição, ao utilizar um modelo OVHcloud, os NIC serão designados por *eth0* e *eth1*. Se não utilizar um modelo OVHcloud, pode encontrar os nomes das suas interfaces com o seguinte comando:

```bash
ip a
```

> [!primary]
> Os valores (endereços MAC, endereços IP, etc.) indicados nas configurações e exemplos abaixo são fornecidos a título de exemplo. Naturalmente, deve substituí-los pelos seus próprios valores.
>

### Obtenção dos endereços MAC

Vá ao separador `Interfaces de rede`{.action} e tome nota dos endereços MAC de cada interface (pública/privada) que são apresentados na parte inferior do menu.

![Área de Cliente OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> O endereço MAC da interface **pública principal** é o que recebe as ofertas DHCP, tanto no sistema operativo do servidor como no modo de recuperação. Esta interface gere a conectividade pública na configuração predefinida.
>
> Além disso, o endereço MAC da interface **privada principal** é o de valor mais baixo. Na imagem de exemplo acima, este é o endereço `a1:b2:c3:d4:e5:d6`.
>

Agora que sabe quais os endereços MAC associados a cada tipo de interface (pública/privada), deve obter os nomes das interfaces.

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
>> Crie o ficheiro de configuração do agregado `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **IP estático**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configure cada interface física. Edite `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Crie `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Os ficheiros de configuração das interfaces físicas permanecem iguais ao descrito acima.
>>
>> ///
>>
> Quatro interfaces - Double LAG
>> Esta configuração agrupa as interfaces públicas em `bond0` (com IP público) e as interfaces privadas em `bond1` (para vRack).
>>
>> Crie o ficheiro de configuração do agregado público `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **IP estático**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Crie o ficheiro de configuração do agregado privado `/etc/sysconfig/network/ifcfg-bond1`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens33f0np0'
>> BONDING_SLAVE_1='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configure cada interface física. Edite `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Crie `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Crie `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Crie `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> /// details | DHCP (apenas bond0)
>>
>> Para o agregado público, utilize DHCP:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> O agregado privado (`ifcfg-bond1`) e todos os ficheiros de configuração das interfaces físicas permanecem iguais ao descrito acima.
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
>> Crie o ficheiro de configuração do agregado `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_SLAVE_2='ens33f0np0'
>> BONDING_SLAVE_3='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configure cada interface física. Edite `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Crie `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Crie `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Crie `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> > [!primary]
>> >
>> > No modo Fully Private, o agregado utiliza o endereço MAC da interface **privada principal**. O campo `IPADDR` deve ser definido com o seu endereço IP privado de vRack.
>> >

### Aplicação da configuração

Aplique a configuração recarregando todas as interfaces com wicked:

```bash
wicked ifreload all
```

Este reinício pode levar vários segundos, uma vez que está a construir a interface de agregação. Para testar se o agregado está a funcionar, faça um ping noutro servidor da mesma rede vRack. Se funcionar, está tudo pronto. Caso contrário, volte a verificar as suas configurações ou tente reiniciar o servidor.

Pode também verificar as definições do agregado com o seguinte comando:

```bash
cat /proc/net/bonding/bond0
```

## Saiba mais

[Configurar o OVHcloud Link Aggregation na Área de Cliente OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 12 ou Ubuntu 24.04 com Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9 a 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Fale com nossa [comunidade de utilizadores](/links/community).
