---
title: 'Modo bridge IP'
slug: network-bridging
excerpt: 'Saiba como utilizar o modo bridge para configurar o acesso à Internet das suas máquinas virtuais'
section: 'Redes & IP'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22-12-2022**

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não afeta as suas funcionalidades.
>

## Objetivo

A ligação em rede em modo bridge pode ser utilizada para configurar as suas máquinas virtuais. São necessárias algumas modificações para que a configuração funcione na nossa rede.

**Este manual explica-lhe como utilizar o modo bridge para configurar o acesso à Internet para as suas máquinas virtuais.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Dispor de um servidor dedicado com um hipervisor instalado ([VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, por exemplo).
- Beneficiar de, pelo menos, um endereço [Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/) ligado ao servidor.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

## Instruções

As etapas de base são sempre as mesmas, independentemente dos sistemas utilizados:
- criação de um endereço MAC virtual para um endereço IP de migração;
- ajustar o endereço MAC da máquina virtual (VM) a este novo endereço;
- configurar o endereço IP, a máscara de rede, a gateway e a estrada para a gateway no interior da máquina virtual.

Para este exemplo, utilizaremos os seguintes valores nos nossos exemplos de códigos. Estas deverão ser substituídas pelos seus próprios valores:

- "SERVER_IP": o endereço IP principal do seu servidor;
- "ADDITIONAL_IP": o seu endereço Additional IP;
- "GATEWAY_IP": o endereço predefinido da gateway.

### Atribuir um endereço MAC virtual

Aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique no menu `Bare Metal Cloud`{.action} e depois na secção `IP`{.action}.

Clique no separador `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Clique nas `...`{.action} e, a seguir, em `Adicionar um endereço MAC virtual`{.action}.

![Adicionar um MAC virtual (1)](images/addvmac.png){.thumbnail}

Selecione "ovh" na lista pendente "Tipo", introduza um nome no campo "Nome da máquina virtual" e clique em `Validar`{.action}.

![Adicionar um MAC virtual (2)](images/addvmac2.png){.thumbnail}

### Determinar o endereço da gateway

Para configurar as suas máquinas virtuais para o acesso à Internet, deve conhecer a gateway da sua máquina host, ou seja, o seu servidor dedicado. O endereço da gateway é constituído pelos três primeiros bytes do endereço IP principal do seu servidor, sendo o último byte de 254. Por exemplo, se o endereço IP principal do seu servidor for:

- 169.254.10.020

O seu endereço de gateway será então:

- 169.254.10.254

### Preparar o host

> [!primary]
>
Para todos os sistemas operativos e distribuições, deve configurar a sua máquina virtual com o endereço MAC virtual criado na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
>

#### Proxmox

Depois de ter criado a máquina virtual e quando esta ainda estiver desligada:

 1. Selecione a máquina virtual;
 2. Abra a secção "Equipamento";
 3. Selecione `Periférico de rede`{.action};
 4. Clique no botão `Alterar`{.action}.

![navegar até ao periférico de rede](images/proxmox_01.png){.thumbnail}

A seguir, adicione o endereço MAC que criou anteriormente.

![abrir um periférico de rede](images/proxmox_02.png){.thumbnail}

Pode desde já iniciar a sua máquina virtual e passar às etapas seguintes, em função do sistema operativo escolhido.

#### VMware ESXi

Depois de criar a máquina virtual e quando estiver fora de tensão, clique com o botão direito do rato sobre a máquina e clique em `Alterar os parâmetros`{.action}.

![Menu contextual VM](images/vmware_01.png){.thumbnail}

Implemente o `Netwok Adapter 1`{.action} e altere o valor no menu pendente `Endereço MAC`{.action} em modo "Manual" e introduza o endereço MAC VMware criado anteriormente.

![Modificar as configurações](images/vmware_02.png){.thumbnail}

Pode desde já iniciar a sua máquina virtual e passar às etapas seguintes, em função do seu sistema operativo.

### Configurar as máquinas virtuais

#### Debian

Ligue-se à interface de sistema (ou *shell*) da sua máquina virtual. Uma vez ligado, abra o ficheiro de configuração de rede da máquina virtual, situado em/`etc/network/interfaces`.
Altere o ficheiro para que este reflita a configuração abaixo. Não se esqueça de substituir as nossas variáveis pelos seus próprios valores:

- Distribuições antigas:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up rodoviário add GATEWAY_IP dev eth0
    post-up rodoviário add default gw GATEWAY_IP
    pre-down route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

- Distribuições recentes:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up ip rodoviário add GATEWAY_IP dev eth0
    post-up ip rodoviário add default via GATEWAY_IP
    pre-down ip route del GATEWAY_IP dev eth0
    pre-down ip route del default via GATEWAY_IP
```

Substitua também `eth0` se o seu sistema utilizar nomes de interface de rede previsíveis. Para encontrar os nomes de interface de rede, execute o seguinte comando:

```bash
ls /sys/class/net
```

Registe e feche o ficheiro e reinicie a máquina virtual.

#### Sistemas operativos Red Hat baseados em Red Hat (CentOS 6, Scientific Linux, ClearOS, etc.)

Abra um terminal na sua máquina virtual. Uma vez ligado, abra o ficheiro de configuração de rede da máquina virtual. Este encontra-se situado em `/etc/network/interfaces`. Altere o ficheiro para que este reflita a configuração abaixo. Não se esqueça de substituir as nossas variáveis pelos seus próprios valores:

```console
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Agora, registe e feche o ficheiro.

De seguida, abra o ficheiro de roteamento da máquina virtual. Este encontra-se em `/etc/sysconfig/network-scripts/rodoviário-eth0`. Altere o ficheiro para que este reflita a configuração abaixo. Não se esqueça de substituir as nossas variáveis pelos seus próprios valores:

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Registe e feche o ficheiro e reinicie a máquina virtual.

#### CentOS 7

> [!primary]
> 
> No caso do CentOS 7, o nome da placa de rede varia em função das opções de instalação. Deverá verificar o nome do adaptador e utilizá-lo para configurar a sua máquina virtual. Pode encontrar os nomes de interface de rede com o comando `ls /sys/class/net`.
> 

Abra um terminal na sua máquina virtual. Uma vez ligado, abra o ficheiro de configuração de rede da máquina virtual, que se encontra em `/etc/sysconfig/network-scripts/ifcfg-(nome da interface)`. Altere o ficheiro para que este reflita a configuração abaixo. Não se esqueça de substituir as nossas variáveis pelos seus próprios valores:

```console
DEVICE=(interface-name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Guarde e feche o ficheiro.

De seguida, abra o ficheiro de roteamento da máquina virtual, que se encontra em `/etc/sysconfig/network-scripts/rodoviário-(nome-da-interface)`. Altere o ficheiro para que este reflita a configuração abaixo. Não se esqueça de substituir as nossas variáveis pelos seus próprios valores:

```console
GATEWAY_IP - 169.254.10.254 (nome-interface)
NETWORK_GW_VM - 255.255.255.0 (insira o nome da interface)
default GATEWAY_IP
```

Registe e feche o ficheiro.

De seguida, abra o ficheiro de roteamento da máquina virtual. Este endereço encontra-se em `/etc/sysconfig/network/resolv.conf`.

```console
nameserver 213.186.33.99
```

Depois de guardar e fechar o ficheiro, reinicie a sua rede ou máquina virtual.

#### FreeBSD

Abra um terminal na sua máquina virtual. Uma vez ligado, abra o ficheiro de configuração de rede da máquina virtual, situado na pasta `/etc/rc.conf`. Altere o ficheiro para que este reflita a configuração abaixo. Neste exemplo, o nome da interface é "em0". Pode alterá-lo se necessário.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_rodoviário="net1 net2"
rodoviário_net1="-net GATEWAY_IP/32 -interface em0"
rodoviário_net2="default GATEWAY_IP"
```

Registe e feche o ficheiro. De seguida, edite o ficheiro `/etc/resolv.conf`. Crie-o se necessário.

```console
nameserver 213.186.33.99
```

Registe e feche o ficheiro e reinicie a máquina virtual.

#### Ubuntu 18.04

Em primeiro lugar, estabeleça uma ligação SSH à sua máquina virtual e abra o ficheiro de configuração de rede situado em `/etc/netplan/` através do comando seguinte. Para efeitos de demonstração, o nosso ficheiro chama-se "50-cloud-init.yaml".

```bash
# nano /etc/netplan/50-cloud-init.yaml
```

Depois de abrir o ficheiro, altere-o com o seguinte código:

```yaml
network:
    ethernets:
        (nome da interface):
            addresses:
                - ADDITIONAL_IP/32
            nameservers:
                addresses:
                    - 213.186.33.99
                search: [1]
            Opcional: true
            routes:
                - to: 0.0.0.0/0
                  via: GATEWAY_IP
                  on-link: true
    Version : 2
```

Depois de realizar as modificações, registe e feche o ficheiro e execute o seguinte comando:

```bash
# netplan try
Warning: Stopping systemd-networkd.service, but it can still be activated by:
  systemd-networkd.socket
Do you want to keep these settings?

Press ENTER before the timeout to accept the new configuration

Changes will revert in 120 seconds
Configuration accepted.
```

#### Windows Server 2012/Hyper-V

Antes de configurar a sua máquina virtual, deverá criar um comutador virtual.

A partir da linha de comandos do seu servidor dedicado, execute `IPconfig/ALL`{.action} e anote o nome da placa de rede que contém o endereço IP principal do servidor.

No painel de configuração Hyper-V, crie um novo comutador virtual e defina o tipo de ligação no `External`{.action}.

Selecione o adaptador com o endereço IP do servidor e selecione `Autorizar o sistema operativo a partilhar esta placa de rede`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>Este passo só é necessário uma vez para um servidor Hyper-V. Para todas as máquinas virtuais, é necessário um comutador virtual para ligar as placas de rede virtuais da máquina virtual à placa física do servidor.
> 

De seguida, selecione a máquina virtual à qual deseja adicionar o Additional IP. Utilize o painel de configuração Hyper-V para modificar os parâmetros da máquina virtual e feche-o.

De seguida, implemente a placa de rede e clique em `Advanced Features`{.action}, defina o endereço MAC em `Static`{.action} e introduza o endereço MAC virtual para o endereço Additional IP. Depois de introduzir estes parâmetros, clique em `OK`{.action} para aplicar as modificações.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

De seguida, execute a máquina virtual e ligue-se enquanto administrador, depois aceda ao `Control Panel`{.action} e `Network and Sharing Center`{.action}. Clique na ligação `Connections: Ethernet`{.action} e clique no botão `Properties`{.action} para mostrar as propriedades Ethernet.

Selecione `Internet Protocol Version 4 (TCP/IPv4)`{.action} e clique no botão `Properties`{.action} para apresentar as propriedades IPv4.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

Na janela de propriedades do IPv4, selecione `Use the following IP address`{.action}. Introduza o endereço Additional IP no campo de endereços IP e introduza "255.255.255.255" na máscara de sub-rede.

De seguida, introduza o endereço IP da gateway do servidor na gateway predefinida (por exemplo, terminando o IP do servidor com 254) e introduza "213.186.33.99" no campo `Preferred DNS Server`{.action}.

Clique em `OK`{.action} e ignore a mensagem de aviso relativa ao endereço IP da gateway e ao endereço IP atribuído que não figuram na mesma sub-rede.

Por fim, reinicie o servidor. A máquina virtual deve então estar ligada à Internet através do endereço Additional IP.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

#### Resolução das deficiências

Se não conseguir estabelecer uma ligação entre a sua máquina virtual e a rede pública e suspeitar de um problema de rede, reinicie o servidor em modo rescue e configure a interface de rede gateway diretamente no host.

Para isso, uma vez que reinicie o seu servidor em modo rescue, insira os seguintes comandos:

```bash
ip link add name test-bridge link eth0 type macvlan
ip link set dev test-bridge address MAC_ADDRESS
ip link set test-bridge up
ip addr add ADDITIONAL_IP/32 dev test-bridge
```

Substitua "MAC_ADDRESS" pelo endereço MAC virtual gerado no painel de configuração e "ADDITIONAL_IP" pelo Additional IP real.

Depois, basta fazer um ping ao Additional IP a partir do exterior. Se isto funcionar, isto provavelmente significa que existe um erro de configuração na máquina virtual ou no host que impede o Additional IP de funcionar em modo normal. Se, pelo contrário, o IP ainda não funcionar, abra um ticket à equipa de assistência através da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} para uma investigação complementar.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
