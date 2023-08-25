---
title: 'Configurar a rede em Proxmox VE nas gamas High Grade & SCALE'
excerpt: 'Saiba como configurar a rede em Proxmox VE nas gamas High Grade & SCALE.'
updated: 2023-05-11
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>


> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não afeta as suas funcionalidades.
>

## Objetivo

Nas gamas High Grade & SCALE, o funcionamento dos Additional IP em modo bridged (através de MAC virtuais) não é possível. Por isso, é necessário configurar os Additional IP em modo roteado ou através do vRack.

**Saiba como configurar a rede em Proxmox VE.**

## Requisitos

- Dispor de um [servidor dedicado OVHcloud](https://www.ovhcloud.com/pt/bare-metal/)
- Dispor de [Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/)
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)

> [!warning]
>
> Nenhum MAC virtual deve ser aplicado aos Additional IP na Área de Cliente OVHcloud.
>

## Instruções

> [!primary]
>
> Nessas gamas de servidores, há 4 placas de rede. As duas primeiras para o público, as duas últimas para o privado. Para beneficiar do conjunto da largura de banda, devem ser criados agregados.
>

### Additional IP em modo roteado nas interfaces de rede públicas

Esta configuração oferece melhores performances em termos de largura de banda, mas é menos flexível. Com esta configuração, os endereços Additional devem estar ligados a um servidor dedicado. Se dispõe de vários servidores de virtualização Proxmox e deseja migrar uma VM de um servidor para outro, deverá também migrar o endereço Additional IP para o servidor de destino, através da Área de Cliente OVHcloud ou através da API OVHcloud. Pode automatizar esta etapa escrevendo um script que utiliza as API da OVHcloud.  

#### Esquema da configuração alvo

![esquema rodoviário](images/schema_route2022.png){.thumbnail}

#### Explicações

O Proxmox é baseado numa distribuição Debian. Neste guia, a configuração de rede será modificada através de SSH e não através da interface web.

É preciso:

- conectar-se em SSH em Proxmox;
- criar um agregado (linux bond);
- criar um bridge;
- autorizar o forwarding;
- autorizar o proxy_arp;
- adicionar estradas.

#### Configurar o hypervisor

Ligue-se ao servidor Proxmox através de SSH:

```bash
ssh root@PUB_IP_DEDICATED_SERVER
# pode também utilizar o IP privado configurado no vRack
```

Tudo se passa no ficheiro `/etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback
  # Enable IP forwarding
  up echo "1" > /proc/sys/net/ipv4/ip_forward
  # Enable proxy-arp only for public bond
  up echo "1" > /proc/sys/net/ipv4/conf/bond0/proxy_arp

# public interface 1
auto ens33f0
iface ens33f0 inet manual
	bond-master bond0

# public interface 2
auto ens33f1
iface ens33f1 inet manual
	bond-master bond0

# private interface 1
auto ens35f0
iface ens35f0 inet manual

# private interface 2
auto ens35f1
iface ens35f1 inet manual

# LACP aggregate on public interfaces
# configured in static mode on this example
# Has the server's public IP
auto bond0
iface bond0 inet static
    address PUB_IP_DEDICATED_SERVER/24
	gateway PUB_GW
	bond-slaves ens33f0 ens33f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first public interface
	hwaddress AB:CD:EF:12:34:56

#Private
auto bond1
iface bond1 inet static
	bond-slaves ens35f0 ens35f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first private interface
	hwaddress GH:IJ:KL:12:34:56

# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
# By default Proxmox creates vmbr0.
# You can use it or create another one 
auto vmbr0
iface vmbr0 inet dhcp
	# Define a private IP, it should not overlap your existing private networks on the vrack for example 
	address 192.168.0.1/24
	bridge-ports none
	bridge-stp off
	bridge-fd 0
	# Add single additional
	up ip route add A.B.C.D/32 dev vmbr0
	# Add block IP
	up ip route add A.B.C.D/28 dev vmbr0

# Bridge used for private networks on vRack
# The VLAN feature is enabled
auto vmbr1
iface vmbr1 inet manual
        bridge-ports bond1
        bridge-stp off
        bridge-fd 0
        bridge-vlan-aware yes
        bridge-vids 2-4094
```

Nesta fase, execute novamente os serviços de rede ou reinicie o servidor:

```bash
systemctl restart networking.service
```

Quando reinicia os serviços de rede, os flanges (vmbr0, por exemplo) podem estar no estado inativo. Isto deve-se ao facto de que o Proxmox desliga cada VM das luzes e não as liga de novo. Para forçar a ligação das VMs aos bridges, pode reiniciar as VMs.

#### Exemplo de configuração VM cliente Debian

Conteúdo do ficheiro `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address ADDITIONAL_IP       # this should match with the IP A.B.C.D/32
    netmask 255.255.255.255
    gateway 192.168.0.1			# this sould match with the private IP set on bridge
```

#### Teste e validação

A partir de agora, as suas máquinas virtuais deverão poder associar um serviço público à Internet. Além disso, as suas máquinas virtuais podem também ser anexadas diretamente na Internet através do endereço Additional IP. A largura de banda disponível corresponde à largura de banda disponível nas interfaces públicas do seu servidor e não afetará as interfaces privadas utilizadas para o vRack. Esta largura de banda é partilhada com as outras máquinas virtuais no mesmo host que utilizam um endereço Additional IP e o host Proxmox para o acesso público.

Para verificar o seu IP público, a partir da VM:

```bash
curl ifconfig.io
ADDITIONAL_IP    				# should return your additional ip
```

### Additional IP através do vRack

Esta configuração é mais flexível, não precisa de associar um IP adicional a um servidor mas ao vRack. Isto significa que se uma máquina virtual deseja utilizar um endereço Additional IP, pode solicitá-lo diretamente sem nenhuma configuração suplementar e independentemente do host no qual está alojada.

> [!warning]
>
> Esta configuração está limitada a 600 Mb/s para o tráfego de saída.
>

#### Requisitos

* Ter reservado um bloco público de endereços IP na sua conta, com um mínimo de quatro endereços. O bloco deve ser apontado para o vRack.
* Ter acesso ao intervalo de endereços de IP privados escolhidos.
* Dispor de um [servidor compatível com o vRack](https://www.ovhcloud.com/pt/bare-metal/){.external}.
* Ter ativado um serviço [vRack](https://www.ovh.pt/solucoes/vrack/){.external}.
* Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

#### Esquema da configuração alvo

![esquema vrack](images/schema_vrack2022.png){.thumbnail}

#### Explicações

Tem de:

* criar um agregado;
* criar um bridge ligado ao agregado;

Em primeiro lugar, adicione o seu bloco público de endereços IP ao vRack. Para isso, aceda à secção `Bare Metal Cloud`{.action} da Área de Cliente OVHcloud e abra o menu `vRack`{.action}.

Selecione o seu vRack na lista para apresentar a lista dos serviços elegíveis. Clique no bloco público de endereços IP que deseja adicionar ao vRack e, a seguir, no botão `Adicionar`{.action}.

#### Configurar um endereço IP utilizável

No caso do vRack, o primeiro, o penúltimo e o último endereço de um determinado bloco de IP são sempre reservados, respetivamente, ao endereço de rede, ao gateway de rede e ao *broadcast* da rede. Isto significa que o primeiro endereço utilizável é o segundo endereço do bloco, como indicado a seguir:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
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
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

Para configurar o primeiro endereço IP utilizável, é preciso editar o ficheiro de configuração de rede, como indicado abaixo. Neste exemplo, utilize uma máscara de sub-rede **255.255.255.240**.

> [!primary]
>
> A máscara de sub-rede utilizada neste exemplo adequa-se ao nosso bloco de endereços IP. A sua máscara de sub-rede pode diferir em função da dimensão do bloco. Quando comprar o seu bloco de endereços IP, receberá um e-mail com a máscara de sub-rede que deve utilizar.
>

#### Configurar o hypervisor

Tudo se passa no ficheiro `/etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

O que conta aqui é a configuração `bond1` e `vmbr1`:

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual

# public interface 2
auto ens33f1
iface ens33f1 inet manual

# private interface 1
auto ens35f0
iface ens35f0 inet manual
	bond-master bond1

# private interface 2
auto ens35f1
iface ens35f1 inet manual
	bond-master bond1

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad

auto bond1
# LACP Aggregate on private interfaces
# No IPs on it
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
    bond-miimon 100
	bond-mode 802.3ad


#Private

auto vmbr1
# Bridge connected to bond1 aggregate
# No need for IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

post-up echo 1 > /proc/sys/net/ipv4/ip_forward

```

Agora, execute os serviços de rede ou reinicie o servidor.

#### Exemplo de configuração VM cliente Debian

Conteúdo do ficheiro `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```


## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
