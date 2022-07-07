---
title: Como configurar um IP alias
slug: network-ipaliasing
excerpt: Saiba como adicionar endereços IP Failover à configuração de rede
section: Redes & IP
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização no dia 16/09/2021**

## Sumário

O IP aliasing é uma configuração de rede para servidores dedicados que permite associar vários endereços IP à mesma interface de rede.

**Este guia explica como realizar o IP aliasing**

## Requisitos

- Ter um servidor dedicado ([VPS](https://www.ovh.pt/vps/){.external}, [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external} ou [instância Public Cloud](https://www.ovh.pt/public-cloud/instances/){.external}).
- Dispor de um ou vários endereços [IP Failover](https://www.ovh.pt/servidores_dedicados/ip_failover.xml){.external}.
- Estar ligado ao servidor usando o protocolo SSH.

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

## Instruções

O presente guia inclui instruções paras sistemas Linux e para o Windows Server.

### Debian 10/11

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### 2 - Alterar o ficheiro de configuração

Agora altere o ficheiro de configuração usando o seguinte comando:

```sh
editor /etc/network/interfaces.d/50-cloud-init
```

De seguida, adicione uma interface secundária:

```bash
auto eth0:0
iface eth0:0 inet static
address IP_FAILOVER
netmask 255.255.255.255
```

Para garantir que a interface secundária é ativada ao mesmo tempo que a interface `eth0`, adicione esta instrução à configuração de eth0:

```bash
post-up /sbin/ifconfig eth0:0 IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER
pre-down /sbin/ifconfig eth0:0 down
```

Se quiser adicionar dois IP Failover, o ficheiro /etc/network/interfaces.d/50-cloud-init deve ter um conteúdo semelhante a este:

```bash
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address FAILOVER_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address FAILOVER_IP2
netmask 255.255.255.255
```
Ou assim:

```bash
auto eth0
iface eth0 inet dhcp

# IPFO 1
post-up /sbin/ifconfig eth0:0 FAILOVER_IP1 netmask 255.255.255.255 broadcast FAILOVER_IP1
pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 FAILOVER_IP2 netmask 255.255.255.255 broadcast FAILOVER_IP2
pre-down /sbin/ifconfig eth0:1 down
```


#### 3 - Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
/etc/init.d/networking restart
```

### Debian 6/7/8 e «derivações»

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### 2 - Alterar o ficheiro de configuração

Agora altere o ficheiro de configuração usando o seguinte comando:

```sh
editor /etc/network/interfaces
```

De seguida, adicione uma interface secundária: 

```bash
auto eth0:0
iface eth0:0 inet static
address IP_FAILOVER
netmask 255.255.255.255
```

Para garantir que a interface secundária é ativada ao mesmo tempo que a interface `eth0`, adicione esta instrução à configuração de eth0:

```bash
post-up /sbin/ifconfig eth0:0 IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER
pre-down /sbin/ifconfig eth0:0 down
```

Se quiser adicionar dois IP Failover, o ficheiro /etc/network/interfaces deve ter um conteúdo semelhante a este:

```bash
auto eth0
iface eth0 inet static
address SERVER_IP
netmask 255.255.255.0
broadcast xxx.xxx.xxx.255
gateway xxx.xxx.xxx.254

auto eth0:0
iface eth0:0 inet static
address IP_FAILOVER1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address IP_FAILOVER2
netmask 255.255.255.255

Ou assim:

# IPFO 1
post-up /sbin/ifconfig eth0:0 IP_FAILOVER1 netmask 255.255.255.255 broadcast IP_FAILOVER1
pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 IP_FAILOVER2 netmask 255.255.255.255 broadcast IP_FAILOVER2
pre-down /sbin/ifconfig eth0:1 down
```


#### 3 - Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
/etc/init.d/networking restart
```

### Debian 9+, Ubuntu 17+, Fedora 26+ e Arch Linux

Estes sistemas não usam a terminologia eth0, eth1. Como tal, iremos usar o `systemd-network`.

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### 2 - Alterar o ficheiro de configuração

O IP Failover deve ser adicionado ao ficheiro da seguinte forma:

```sh
nano /etc/systemd/network/50-default.network
```

```sh
[Address]
Address=22.33.44.55/32
Label=failover1 # optional
```

O «label» é facultativo. Este serve apenas para ordenar os vários IP Failover.

#### 3 - Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
systemctl restart systemd-networkd
```


### CentOS e Fedora (versão 25 e anteriores)

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder usá-lo como modelo (*template*):

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### 2 - Alterar o ficheiro de configuração

Altere o ficheiro eth0:0 para substituir o IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Substitua o nome do `Device` e, de seguida, o IP existente pelo IP Failover:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # For CentOS use "static"
IPADDR="IP_FAILOVER"
NETMASK="255.255.255.255"
BROADCAST="IP_FAILOVER"
```

#### 3 - Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
ifup eth0:0
```


### Gentoo

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### 2 - Alterar o ficheiro de configuração

Agora, altere o ficheiro para adicionar o IP Failover. Com o Gentoo, o IP alias é adicionado diretamente à interface eth0. Neste caso, não é necessário criar a interface eth0:0 (como no caso do Red Hat ou do CentOS).

> [!warning]
>
> Para garantir o correto funcionamento de algumas configurações OVH, o IP original do servidor e a instrução config_eth0= devem ficar na mesma linha
> 

Depois tem que inserir o IP Failover na linha abaixo da netmask **255.255.255.0** (substitua SERVER_IP pelo IP principal do seu servidor).

```sh
editor /etc/conf.d/net
```

Agora, adicione a seguinte instrução:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" )
```

O ficheiro /etc/conf.d/net deve conter a instrução:


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config_eth0=( "SERVER_IP netmask 255.255.255.0"
"IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" )
routes_eth0=( "default gw SERVER_IP.254" )
```

Para fazer ping ao IP Failover, basta reiniciar a interface de rede.


#### 3 - Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### 2 - Alterar o ficheiro de configuração

Agora, altere o ficheiro /etc/sysconfig/network/ifcfg-ens32 da seguinte forma:

```bash
IPADDR_1=FIP_FAILOVER
NETMASK_1=255.255.255.255
LABEL_1=ens32:0
```


### cPanel

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
cp /etc/ips /etc/ips.bak
```

#### 2 - Alterar o ficheiro de configuração

De seguida, altere o ficheiro /etc/ips da seguinte forma:

```sh
editor /etc/ips
```
Agora adicione o IP Failover:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```
Por fim, acrescente o IP em `/etc/ipaddrpool`:
```bash
IP_FAILOVER
```

#### 3 - Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
/etc/init.d/ipaliases restart
```

### Windows Server

Os servidores Windows costumam usar a configuração de rede DHCP (configuração predefinida). Caso tenha configurado um IP Failover ou alterado a configuração para usar um IP fixo, ignore esta etapa.

Se não, tem que alterar a configuração de rede para usar IP fixo em vez da configuração DHCP.

Abra a linha de comando `cmd`{.action} ou o `powershell`{.action} e introduza este comando:

```sh
ipconfig /all
```

A seguir, irá visualizar a seguinte informação:

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Guarde os dados relativos ao IPv4, à máscara de sub-rede, ao *gateway* predefinido e ao nome da placa de rede.

No nosso exemplo, o IP do servidor é: **94.23.229.151**


Os próximos passos pode ser efetuados através da linha de comandos ou da interface gráfica:

#### Através da linha de comandos (recomendado)

Nos comandos indicados abaixo, deve substituir:

|Comando|Valor|
|---|---|
|NETWORK_ADAPTER| Nome da placa de rede (no nosso exemplo: Local Area Connection)|
|IP_ADDRESS| Endereço IP do servidor (no nosso exemplo: 94.23.229.151)|
|SUBNET_MASK| Máscara de sub-rede (no nosso exemplo: 255.255.255.0)|
|GATEWAY| *Gateway* predefinido (no nosso exemplo: 94.23.229.254)|
|IP_ADDRESS_FAILOVER| Endereço IP Failover que deseja adicionar|

> [!warning]
>
> Atenção: se introduzir informação incorreta, o servidor ficará inacessível. Neste caso, terá de usar o modo Winrescue ou o KVM para corrigir os dados.
> 

Execute as seguintes ações na linha de comandos:

- Passar para IP fixo

```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```

- Definir servidor DNS

```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```
- Adicionar IP failover

```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" IP_ADDRESS_FAILOVER 255.255.255.255
```

O IP failover está a funcionar.


#### Através da interface gráfica

1. Aceda ao menu `Iniciar`{.action} > `Painel de Gestão`{.action} > `Rede e Internet`{.action} > `Centro de Rede e Partilha`{.action} > `Alterar as definições da placa`{.action} (no menu à esquerda).
2. Clique com o botão direito do rato em `Ligação à rede local`{.action}.
3. Clique em `Propriedades`{.action}.
4. Selecione o `Protocolo Internet Versão 4 (TCP/IPv4)`{.action}, e clique em `Propriedades`{.action}.
5. Clique em `Utilizar o seguinte endereço IP `{.action} e introduza o IP principal do servidor, a máscara de sub-rede e o *gateway* predefinido, apresentados após a execução do comando `ipconfig`{.action} (ver exemplo acima). Em servidor DNS preferido, introduza 213.186.33.99.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Atenção: se introduzir informação incorreta, o servidor ficará inacessível. Neste caso, terá de usar o modo Winrescue ou o KVM para corrigir os dados.
> 

Depois, clique em `Avançado`{.action} (nas `Definições TCP/IP`{.action}).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

Na parte `Endereço IP`{.action}, clique em `Adicionar`{.action}:

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Introduza o IP Failover e a máscara de sub-rede **255.255.255.255**.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Clique em `Adicionar`{.action}.

O IP failover está a funcionar.


### FreeBSD

#### 1 - Identificar a interface

Primeiro tem de identificar o nome da interface de rede principal. Execute o comando `ifconfig`{.action} para obter esta informação:

```sh
ifconfig
```

Resultados apresentados:

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500
>>> options=10b
>>> ether 00:24:8c:d7:ba:11
>>> inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255
>>> inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74
>>> media: Ethernet autoselect (100baseTX )
>>> status: active
>>> lo0: flags=8049 metric 0 mtu 16384
>>> options=3
>>> inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2
>>> inet6 ::1 prefixlen 128
>>> inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

No nosso exemplo, o nome da interface é **nfe0**.


#### 2 - Fazer cópia do ficheiro de configuração (<i>source file</i>)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### 3 - Alterar ficheiro de configuração

Altere o ficheiro /etc/rc.conf, usando o seguinte comando:

```sh
editor /etc/rc.conf
```

De seguida, adicione esta linha no final do ficheiro: ifconfig_INTERFACE_alias0=`inet IP_FAIL_OVER netmask 255.255.255.255 broadcast IP_FAIL_OVER`.

Substitua **INTERFACE** e **IP_FAILOVER** pelo nome da interface (indicado no passo 1) e pelo endereço IP Failover. Exemplo:


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### 4 - Reiniciar interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```

### Solaris

#### 1 - Identificar a interface

Primeiro tem de identificar o nome da interface de rede principal. Execute o comando `ifconfig`{.action} para obter esta informação:

```sh
ifconfig -a
```

Resultados apresentados:

```sh
ifconfig -a
>>> lo0: flags=2001000849 mtu 8232 index 1 inet 127.0.0.1 netmask ff000000 e1000g0: flags=1000843 mtu 1500 index 2 inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 ether 0:1c:c0:f2:be:42
```

No nosso exemplo, o nome da interface é **e1000g0**.


#### 2 - Fazer cópia do ficheiro de configuração (<i>source file</i>)

Primeiro, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial.

```sh
editor /etc/hostname.e1000g0:1
```

#### 3 - Alterar ficheiro de configuração

Adicione a seguinte informação ao ficheiro: **IP_FAIL_OVER/32 up**, em que **IP_FAIL_OVER** corresponde ao seu IP failover. Por exemplo:

```bash
188.165.171.40/32 up
```

#### 4 -  Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
svcadm restart svc:/network/physical:default
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.