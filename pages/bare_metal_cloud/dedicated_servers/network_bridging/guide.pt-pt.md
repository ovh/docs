---
title: 'Modo bridge IP'
excerpt: 'Saiba como utilizar o modo bridge para configurar o acesso à Internet das suas máquinas virtuais'
updated: 2024-07-15
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](/links/network/additional-ip). Isto não afeta as suas funcionalidades.
>

## Objetivo

A ligação em rede em modo bridge pode ser utilizada para configurar as suas máquinas virtuais. São necessárias algumas modificações para que a configuração funcione na nossa rede.

**Este manual explica-lhe como utilizar o modo bridge para configurar o acesso à Internet para as suas máquinas virtuais.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Dispor de um servidor dedicado com um hipervisor instalado ([VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, por exemplo).
- Beneficiar de, pelo menos, um endereço [Additional IP](/links/network/additional-ip) ligado ao servidor.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para mais informações, consulte o nosso [comparativo](/links/bare-metal/eco-compare).
>
> O presente guia não é aplicável aos servidores das gamas [Scale](https://www.ovhcloud.com/pt/bare-metal/scale/) e [High Grade](https://www.ovhcloud.com/pt/bare-metal/high-grade/). O mesmo acontece para a gama de servidores Advance que dispõem de CPU AMD Epyc 4K e 8K lançados desde julho de 2024.
>
> Consulte antes os seguintes guias: [Configurar a rede em ESXi nas gamas High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/esxi-network-HG-Scale), [Configurar a rede em Proxmox VE nas gamas High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/proxmox-network-HG-Scale) e [Configurar a rede em Windows Server com Hyper-V nas gamas High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/hyperv-network-HG-Scale).

## Instruções

As etapas de base são sempre as mesmas, independentemente dos sistemas utilizados:

- criação de um endereço MAC virtual para um endereço IP de migração;
- ajustar o endereço MAC da máquina virtual (VM) a este novo endereço;
- configurar o **endereço IP**, **a máscara de rede**, **a gateway** e **a estrada para a gateway** no interior da máquina virtual.

Para este exemplo, utilizaremos os seguintes valores nos nossos exemplos de códigos. Estas deverão ser substituídas pelos seus próprios valores:

- "SERVER_IP": o endereço IP principal do seu servidor;
- "ADDITIONAL_IP": o seu endereço Additional IP;
- "GATEWAY_IP": o endereço predefinido da gateway.

### Atribuir um endereço MAC virtual

Aceda à [Área de Cliente OVHcloud](/links/manager), clique no menu `Bare Metal Cloud`{.action} e depois na secção `Network`{.action}. De seguida, clique em `IP`{.action}.

Clique no separador `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Clique nas `...`{.action} e, a seguir, em `Adicionar um endereço MAC virtual`{.action}.

![Adicionar um MAC virtual (1)](images/addvmac.png){.thumbnail}

Selecione "ovh" na lista pendente "Tipo", introduza um nome no campo "Nome da máquina virtual" e clique em `Validar`{.action}.

![Adicionar um MAC virtual (2)](images/addvmac2.png){.thumbnail}

Após alguns segundos, um endereço MAC virtual aparecerá na coluna "MAC virtual" da linha de endereço Additional IP. Esse endereço MAC virtual será necessário ao configurar sua VM no host.

### Determinar o endereço da gateway <a name="determinegateway"></a>

Para configurar as suas máquinas virtuais para o acesso à Internet, deve conhecer a gateway da sua máquina host, ou seja, o seu servidor dedicado. O endereço da gateway é constituído pelos três primeiros bytes do endereço IP principal do seu servidor, sendo o último byte de 254. Por exemplo, se o endereço IP principal do seu servidor for:

- 203.0.113.1

O seu endereço de gateway será então:

- 203.0.113.**254**


Também pode obter o gateway através da [sua área de cliente](#viacontrolpanel) ou da [API OVHcloud](#viaapi)


#### Através da Área de Cliente <a name="viacontrolpanel"></a>

Ligue-se à sua [Área de Cliente OVHcloud](/links/manager), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na secção `Servidores dedicados`{.action}.

A gateway IPv4 atribuída ao seu servidor é apresentada na secção `Rede` do separador `Informações gerais`{.action}. Depois de copiar, continue a aplicar a configuração.

![gateway](images/ipv4_information.png){.thumbnail}


#### Através das API OVHcloud <a name="viaapi"></a>

Na [página API da OVHcloud](https://api.ovh.com/), clique no canto superior direito em `Login`{.action}. Na página seguinte, introduza o seu identificador de cliente OVHcloud.

Execute a seguinte chamada API, indicando o nome interno do servidor (exemplo: `ns3956771.ip-169-254-10.eu`):
>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

### Preparar o host

> [!primary]
>
Para todos os sistemas operativos e distribuições, deve configurar a sua máquina virtual com o endereço MAC virtual criado na sua [Área de Cliente OVHcloud](/links/manager).
>

#### Proxmox

> [!warning]
>
> As seguintes instruções aplicam-se a uma máquina virtual criada anteriormente com um sistema operativo já instalado. Se não criou nenhuma VM, consulte as opções na página [Qemu/KVM Virtual Machine](https://pve.proxmox.com/wiki/Qemu/KVM_Virtual_Machines){.external} (EN) de Proxmox.
>

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

> [!warning]
>
> As seguintes instruções aplicam-se a uma máquina virtual criada anteriormente com um sistema operativo já instalado. Se não criou nenhuma VM, consulte o guia [Criar uma máquina virtual no cliente host VMware](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-77AB6625-F968-4983-A230-A020C0A70326.html){.external} (EN) na página VMware.
>

Depois de criar a máquina virtual e quando estiver fora de tensão, clique com o botão direito do rato sobre a máquina e clique em `Alterar os parâmetros`{.action}.

![Menu contextual VM](images/vmware_01.png){.thumbnail}

Implemente o `Network Adapter 1`{.action} e altere o valor no menu pendente `Endereço MAC`{.action} em modo "Manual" e introduza o endereço MAC VMware criado anteriormente.

![Modificar as configurações](images/vmware_02.png){.thumbnail}

Pode desde já iniciar a sua máquina virtual e passar às etapas seguintes, em função do seu sistema operativo.

### Configurar as máquinas virtuais <a name="configurationsteps"></a>

> [!warning]
>
> Tenha em conta que os exemplos seguintes assumem que está ligado enquanto utilizador com privilégios limitados, pelo que deve utilizar o *sudo* antes de cada comando. Se iniciou sessão como *root*, não precisa de o fazer.
>

#### Debian

Por predefinição, o ficheiro de configuração de rede da VM está situado em `/etc/network/interfaces`.

Uma vez ligado ao shell da sua máquina virtual, execute o comando seguinte para identificar o nome da sua interface:

```bash
ls /sys/class/net
```

De seguida, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

Em caso de erro, poderá reverter a operação através dos seguintes comandos:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

Modifique o ficheiro para que reflita a configuração abaixo, substitua `INTERFACE_NAME`, `ADDITIONAL_IP` e `GATEWAY_IP` pelos seus próprios valores.

```bash
sudo nano /etc/network/interfaces
```

```console
auto lo
iface lo inet loopback

# The primary network interface
auto INTERFACE_NAME
iface INTERFACE_NAME inet static
address ADDITIONAL_IP
netmask 255.255.255.255
gateway GATEWAY_IP
```

**Exemplo**

```console
auto lo
iface lo inet loopback

# The primary network interface
auto ens192
iface ens192 inet static
address 192.0.2.1
netmask 255.255.255.255
gateway 203.0.113.254
```

Guarde e feche o ficheiro.<br>
De seguida, edite ou crie o ficheiro `/etc/resolv.conf` :

```bash
sudo nano /etc/resolv.conf
```

Adicione a seguinte linha:

```console
nameserver 213.186.33.99
```

Guarde e feche o ficheiro.<br>
Deverá agora pôr a sua interface de rede online. Para isso, introduza o seguinte comando (substitua `ens192` pelos seus próprios valores):

```bash
sudo ip link set ens192 up
```

Por fim, reinicie o seu serviço de rede através do seguinte comando:

```bash
sudo systemctl restart networking
```

Para verificar se a máquina virtual está totalmente ligada à Internet, utilize o seguinte comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se receber uma resposta, significa que o Additional IP foi corretamente configurado. Se não for o caso, reinicie a sua máquina virtual e repita o comando ping.

#### Sistemas operativos Red Hat baseados em Red Hat (CentOS, Rocky Linux 8, Alma Linux 8, etc.)

Por predefinição, o ficheiro de configuração de rede da VM encontra-se em `/etc/sysconfig/network-scripts/`. A título de demonstração, o nosso ficheiro chama-se `ifcfg-eth0`:

Uma vez ligado ao shell da sua máquina virtual, execute o comando seguinte para identificar o nome da sua interface:

```bash
ls /sys/class/net
```

De seguida, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial:

```bash
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

Em caso de erro, poderá reverter a operação através dos seguintes comandos:

```bash
sudo rm -f etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0.bak etc/sysconfig/network-scripts/ifcfg-eth0
```

Modifique o ficheiro para que reflita a configuração abaixo, substitua `ADDITIONAL_IP`, `GATEWAY_IP` e `MY:VI:RT:UA:LM:AC` pelos seus próprios valores. Além disso, as definições « BOOTPROTO », « ONBOOT » e « DNS » devem ser ajustadas (ou adicionadas, se faltarem). Não é necessário editar outras linhas.

```bash
sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

```console
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=eth0
UUID=120ae2c6-4aa6-xxxx-xxxx-xxxxxxxxxx
DEVICE=eth0
ONBOOT=yes
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
HWADDR=MY:VI:RT:UA:LM:AC
DNS=213.186.33.99
```

Guarde e feche o ficheiro.<br>
A seguir, crie um novo ficheiro, `route-(interface_name)`, no diretório `/etc/sysconfig/network-scripts/` e defina as seguintes rotas predefinidas para a interface através do gateway definido na [etapa 2](#determinegateway).


No nosso exemplo, o nosso ficheiro chama-se `route-eth0` (substitua `eth0` pelos seus próprios valores):

```bash
sudo vi /etc/sysconfig/network-scripts/route-eth0
```

Modifique o ficheiro para que reflita a configuração abaixo, substitua `GATEWAY_IP` pelo seu próprio valor.

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Guarde e feche o ficheiro.

Reinicie a sua rede utilizando o seguinte comando:

```bash
sudo systemctl restart network
```

Para verificar se a máquina virtual está totalmente ligada à Internet, utilize o seguinte comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se receber uma resposta, significa que o Additional IP foi corretamente configurado. Se não for o caso, reinicie a sua máquina virtual e repita o comando ping.


#### Rocky Linux 9 e Alma Linux 9

Nas versões anteriores de Rocky Linux e Alma Linux, os perfis de rede eram armazenados no formato ifcfg neste diretório: `/etc/sysconfig/network-scripts/`. No entanto, o ifcfg foi desaconselhado e substituído por *keyfiles*. O ficheiro de configuração passa a estar localizado no diretório: `/etc/NetworkManager/system-connections/`.

Uma vez ligado ao shell da sua máquina virtual, execute o comando seguinte para identificar o nome da sua interface:

```bash
ls /sys/class/net
```

De seguida, faça uma cópia do ficheiro de configuração para poder reverter o sistema para o estado inicial a qualquer momento.

A título de exemplo, o nosso ficheiro chama-se `ens18-nmconnection`:

```bash
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection /etc/NetworkManager/system-connections/ens18-nmconnection.bak
```

Em caso de erro, poderá reverter a operação através dos seguintes comandos:

```bash
sudo rm -f /etc/NetworkManager/system-connections/ens18-nmconnection
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection.bak /etc/NetworkManager/system-connections/ens18-nmconnection
```

Modifique o ficheiro para que reflita a configuração abaixo, substitua `ADDITIONAL_IP` e `GATEWAY_IP` pelos seus próprios valores. Neste exemplo, o nome da interface é `ens18`. Substitua este valor se não for aplicável.

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
gateway=GATEWAY_IP
```

Guarde e feche o ficheiro.<br>
Reinicie a sua interface de rede com o seguinte comando:

```bash
sudo systemctl restart NetworkManager
```

Para verificar se a máquina virtual está totalmente ligada à Internet, utilize o seguinte comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se receber uma resposta, significa que o Additional IP foi corretamente configurado. Se não for o caso, reinicie a sua máquina virtual e repita o comando ping.

#### FreeBSD

Por predefinição, o ficheiro de configuração de rede da VM está localizado em `/etc/rc.conf`.

Uma vez ligado ao shell da sua máquina virtual, execute o comando seguinte para identificar o nome da sua interface:

```bash
ls /sys/class/net
```

De seguida, faça uma cópia do ficheiro de configuração para, se necessário, poder reverter o sistema para o estado inicial:

```bash
sudo cp /etc/rc.conf /etc/rc.conf.bak
```

Em caso de erro, poderá reverter a operação através dos seguintes comandos:

```bash
sudo rm -f /etc/rc.conf
sudo cp /etc/rc.conf.bak /etc/rc.conf
```


Modifique o ficheiro para que reflita a configuração abaixo, substitua `ADDITIONAL_IP` e `GATEWAY_IP` pelos seus próprios valores. Neste exemplo, o nome da interface é `em0`. Substitua este valor se não for aplicável.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Registe e feche o ficheiro. De seguida, edite o ficheiro `/etc/resolv.conf`. Crie-o se necessário.

```console
nameserver 213.186.33.99
```

Registe e feche o ficheiro e reinicie a máquina virtual.

Para verificar se a máquina virtual está totalmente ligada à Internet, utilize o seguinte comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se receber uma resposta, significa que o Additional IP foi corretamente configurado. Se não for o caso, reinicie a sua máquina virtual e repita o comando ping.

#### Ubuntu

Por predefinição, o ficheiro de configuração da rede encontra-se na pasta `/etc/netplan/`.

Em primeiro lugar, aceda à consola para se ligar à sua máquina virtual e execute o comando seguinte para identificar o nome da sua interface:

```bash
ip addr
```

De seguida, faça uma cópia do ficheiro de configuração para que possa voltar atrás a qualquer momento. Como demonstração, o nosso ficheiro é chamado `00-installer-config.yaml`:

```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak
```

Em caso de erro, poderá reverter a operação através dos seguintes comandos:

```bash
sudo rm -f /etc/netplan/00-installer-config.yaml
sudo cp /etc/netplan/00-installer-config.yaml.bak /etc/netplan/00-installer-config.yaml
```

A seguir, abra o ficheiro de configuração de rede situado em `/etc/netplan/` com o seguinte comando:

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

Depois de abrir o ficheiro para modificação, altere-o com o código seguinte, substituindo `INTERFACE-NAME`, `ADDITIONAL_IP` e `GATEWAY_IP` pelos seus próprios valores.

```yaml
network:
  ethernets:
    INTERFACE-NAME:
      dhcp4: true
      addresses:
          - ADDITIONAL_IP/32
      nameservers:
          addresses:
              - 213.186.33.99   
      routes:
           - to: 0.0.0.0/0
             via: GATEWAY_IP
             on-link: true
  version: 2
```

**Exemplo**

```yaml
network:
  ethernets:
    ens18:
      dhcp4: true
      addresses:
          - 192.0.2.1/32
      nameservers:
          addresses:
              - 213.186.33.99
      routes:
           - to: 0.0.0.0/0
             via: 203.0.113.254
             on-link: true
  version: 2
```

Guarde e feche o ficheiro. Pode testar a configuração com o seguinte comando:

```bash
sudo netplan try
```

Se estiver correta, aplique-a com o seguinte comando:

```bash
sudo netplan apply
```

Para verificar se a máquina virtual está totalmente ligada à Internet, utilize o seguinte comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se receber uma resposta, significa que o Additional IP foi corretamente configurado. Se não for o caso, reinicie a sua máquina virtual e repita o comando ping.

#### Windows Server/Hyper-V

Antes de configurar a sua máquina virtual, deverá criar um comutador virtual.

A partir da linha de comandos para o seu servidor dedicado, execute o seguinte comando e anote o nome da placa de rede que contém o endereço IP principal do servidor:

```powershell
ipconfig /all
```

No painel de configuração Hyper-V, crie um novo comutador virtual e defina o tipo de ligação no `External`{.action}.

Selecione o adaptador com o endereço IP do servidor e selecione `Autorizar o sistema operativo a partilhar esta placa de rede`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
> Este passo só é necessário uma vez para um servidor Hyper-V. Para todas as máquinas virtuais, é necessário um comutador virtual para ligar as placas de rede virtuais da máquina virtual à placa física do servidor.
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

Depois, basta fazer um ping ao Additional IP a partir do exterior. Se isto funcionar, isto provavelmente significa que existe um erro de configuração na máquina virtual ou no host que impede o Additional IP de funcionar em modo normal. Se, pelo contrário, o IP não funcionar, queira abrir um ticket de assistência através do [centro de ajuda](https://help.ovhcloud.com/csm?id=csm_cases_requests).

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
