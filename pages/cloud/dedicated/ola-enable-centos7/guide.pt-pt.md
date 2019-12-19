---
title: 'Como configurar a NIC para o OVHcloud Link Aggregation em CentOS 7'
slug: ola-centos7
excerpt: 'Ative o OVHcloud Link Aggregation no seu servidor com CentOS 7'
section: 'Uso avançado'
---

**Última atualização: 07/11/2019**

## Sumário

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e aumentar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível. Neste manual, explicaremos como ligar as suas NIC para as utilizar para o OLA em CentOS 7.

## Requisitos

[Como configurar a NIC para o OVHcloud Link Aggregation na Área de Cliente OVHcloud](https://docs.ovh.com/pt/dedicated/ola-manager){.external}

## Instruções

A configuração private-private disponível no OLA para as nossas NIC não permite aceder ao servidor em SSH. Para aceder ao servidor, é necessário utilizar a ferramenta IPMI. Para o fazer, inicie sessão na [Área de Cliente](https://www.ovh.com/manager/){.external}, selecione o servidor que pretende configurar no menu à esquerda e clique no separador **IPMI.**

![remote_kvm](images/remote_kvm.png){.thumbnail}

Em seguida, clique no botão **A partir de applet java (KVM)**. Um programa JNLP será descarregado. Abra-o para entrar no IPMI e inicie a sua sessão usando credenciais válidas para o servidor.

Por predefinição, com um modelo OVHcloud, as NIC são designadas *eth0* e *eth1*. Se não estiver a utilizar um modelo OVHcloud, pode encontrar os nomes das suas interfaces através do seguinte comando:

```bash
ip a
```

> [!primary]
>
> Este comando irá produzir várias "interfaces". Se tiver dificuldade em determinar quais são as suas NIC físicas, a primeira interface ainda terá o endereço IP público do servidor anexado por predefinição.
>

Assim que tivermos determinado os nomes das nossas duas NIC, configuraremos a ligação entre as NIC no sistema operativo. O primeiro passo consiste em criar uma interface de ligação. Para isso, crie o seguinte ficheiro de configuração num editor de texto à sua escolha:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-bond0
```

Um ficheiro de texto vazio aparecerá. Para configurar a interface de ligação, introduza o seguinte no ficheiro de texto:

```bash
DEVICE=bond0
TYPE=Bond
NAME=bond0
BOOTPROTO=none
ONBOOT=yes
BONDING_MASTER=yes
IPADDR=10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS="mode=802.3ad miimon=100"
```

> [!primary]
>
> Pode usar qualquer endereço IP privado e subrede que desejar usar.
>

Guarde e feche o ficheiro assim que tiver confirmado que a informação está correta. A seguir, é necessário configurar ambas as interfaces físicas. Por predefinição, num servidor da OVHcloud, apenas *eth0* terá um ficheiro de configuração. Abra-o através do seguinte comando:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

Por predefinição, o ficheiro aparecerá da seguinte forma:

```bash
DEVICE=eth0
BOOTPROTO=static
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=yes
GATEWAY=203.0.113.254
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> Os endereços IP serão diferentes para cada servidor.
>

Iremos alterar o ficheiro para aparecer como segue:

```bash
DEVICE=eth0
BOOTPROTO=static
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=yes
#GATEWAY=203.0.113.254
#IPV6INIT=yes
#IPV6_AUTOCONF=no
#IPV6ADDR=2001:0db8:0000:0001::/64
TYPE=Ethernet
HWADDR=00:53:00:00:00:00
MASTER=bond0
SLAVE=yes
```

> [!primary]
>
> O endereço de hardware (endereço MAC) da NIC pode ser encontrado usando o comando *ip a*, que foi utilizado anteriormente. Será o número junto de "link/ether" na saída.
>

O *#* à frente de uma linha significa que o servidor irá ignorar esta linha ao ler o ficheiro. Assim, vamos ignorar estas linhas por completo quando criarmos o nosso ficheiro de interface para *eth1*. Iremos criar o ficheiro de configuração *eth1* usando o seguinte comando:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Desta vez, o ficheiro estará em branco, por isso adicione o seguinte conteúdo ao ficheiro:

```bash
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
HWADDR=00:53:00:00:00:01
MASTER=bond0
SLAVE=yes
```

Finalmente, será preciso reiniciar o daemon de rede usando o seguinte comando:

```bash
systemctl restart network
```

Para verificar se a ligação está a funcionar, faça um teste de ping noutro servidor da mesma rede vRack. Se funcionar, está tudo pronto. Caso contrário, volte a verificar as suas configurações ou tente reiniciar o servidor.

## Conclusão

A OVHcloud oferece aos seus clientes a liberdade e a flexibilidade para impulsionar o seu hardware da maneira que melhor se adapta às suas necessidades. Depois de ler este manual, deverá poder configurar o OVHcloud Link Aggregation (OLA) em CentOS 7 para usar as NIC (Network Interface Cards) como interfaces privadas ligadas.
