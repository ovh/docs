---
title: "Criar várias VLAN na vRack num servidor dedicado"
excerpt: "Crie e faça a gestão de várias VLAN na sua vRack OVHcloud para segmentar o tráfego de rede entre servidores dedicados."
updated: 2026-02-20
---

## Objetivo

A [configuração standard do vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server) permite-lhe criar uma única VLAN. Isto significa que só pode utilizar um endereço de IP de cada vez. No entanto, com a versão 2.0 da configuração do vRack, pode criar até 4000 redes locais virtuais num único vRack. Assim, só pode utilizar cada endereço de IP até 4000 vezes.

**Este manual explica-lhe como criar várias VLAN no vRack.**

## Requisitos

- Ter um ou vários [servidores dedicados](/links/bare-metal/bare-metal) compatíveis com o vRack.
- Ter ativado um serviço [vRack](/links/network/vrack).
- Ter acesso ao intervalo de endereços de IP privados escolhidos.
- Acesso administrativo (sudo) ao seu servidor via SSH (Linux) ou RDP (Windows).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).
- Ter finalizado a [configuração do vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para mais informações, consulte o nosso [comparativo](/links/bare-metal/eco-compare).

## Instruções

### Linux

> [!primary]
>
> Como exemplo, utilizaremos **eno2** como interface de rede, **10** e **11** como etiquetas VLAN e **192.168.0.0/16** e **10.0.0.0/16** como intervalos de endereços de IP privados.
>
> Todos os comandos devem ser adaptados em função da distribuição utilizada. Não hesite em consultar a documentação oficial da sua distribuição em caso de dúvidas.
>

> [!tabs]
> **Debian 11**
>>
>> Primeiro, deve estabelecer uma ligação SSH ao seu servidor e executar os seguintes comandos a partir da linha de comandos para instalar o pacote VLAN no seu servidor:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> De seguida, carregue o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> De seguida, recupere os nomes das suas interfaces e identifique a interface privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> Em seguida, crie uma etiqueta VLAN. A etiqueta serve de identificador, permitindo-lhe distinguir várias VLAN:
>>
>> ```sh
>> sudo ip link add link <parent-interface> name <vlan-identifier> type vlan id <ID>
>> ```
>>
>> **Neste exemplo:**
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> Utilize o mesmo comando para cada etiqueta VLAN que pretende adicionar.
>>
>> Em seguida, declare o intervalo de endereços de IP privado no vRack e identifique-o com o identificador utilizando o seguinte comando:
>>
>> ```sh
>> sudo ip addr add 192.168.0.10/16 dev eno2.10
>> ```
>>
>> Altere a configuração da sua interface de rede para incorporar a etiqueta VLAN. Abra o ficheiro de configuração da interface de rede e adicione as seguintes entradas:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eno2.10
>> iface eno2.10 inet static
>> address 192.168.0.10
>> netmask 255.255.0.0
>> broadcast 192.168.255.255
>> vlan-raw-device eno2
>> ```
>>
>> Para várias VLAN configuradas, a sua configuração de rede deve ser semelhante a esta:
>>
>> ![debian VLAN](images/multiple_vlan_debian.png){.thumbnail}
>>
> **Ubuntu e Debian 12+**
>>
>> Estes comandos foram executados com Ubuntu 24.04 (Noble Numbat).
>>
>> Primeiro, deve estabelecer uma ligação SSH ao seu servidor e executar os seguintes comandos a partir da linha de comandos para instalar o pacote VLAN no seu servidor:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> De seguida, carregue o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Crie ou edite o ficheiro de configuração `cloud.cfg` para evitar que as alterações na configuração de rede sejam efetuadas automaticamente:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Adicione a seguinte linha:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Obter o nome da interface de rede e o seu endereço MAC:
>>
>> ```sh
>> ip a
>> ```
>>
>> Aqui a interface que queremos configurar é `eno2` com um endereço MAC: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-01.png){.thumbnail}
>>
>> Adicione a configuração de rede para esta interface de rede e as informações VLAN no seguinte ficheiro, certificando-se de que está colocado diretamente abaixo da linha `version: 2`. Substitua os valores pelos seus próprios:
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno2:
>>             match:
>>                 macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                      # VLAN ID
>>             link: eno2                  # Interface name
>>             addresses:
>>             - 192.168.0.10/16
>>     ethernets:
>>         eno1:
>>             ...
>>             ...
>> ```
>>
>> Para várias VLAN configuradas, a sua configuração de rede deve ser semelhante a esta:
>>
>> ![ubuntu VLAN](images/multiple_vlan_ubuntu.png){.thumbnail}
>>
>> Guarde e feche o ficheiro e, em seguida, execute o seguinte comando:
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> Utilize o seguinte comando para se certificar de que a configuração foi corretamente aplicada:
>>
>> ```sh
>> ip a
>> ```
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-02.png){.thumbnail}
>>
> **AlmaLinux e Rocky Linux (8/9)**
>>
>> Antes de começar, estabeleça uma ligação SSH ao seu servidor e execute o seguinte comando para carregar o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Em seguida, execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Recupere os nomes das interfaces e identifique a interface privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> Em seguida, crie um ficheiro de configuração de subinterface para a VLAN no ficheiro de configuração de rede principal.
>>
>> Neste exemplo, o ficheiro é denominado `ifcfg-eno2.10`, onde eno2 refere-se à interface de rede privada e `10` ao VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eno2.10
>> ```
>>
>> Adicione as seguintes entradas ao ficheiro de configuração, certificando-se de substituir os valores pelos seus próprios:
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.10
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> Guarde e feche o ficheiro.
>>
>> Para várias VLAN configuradas, deve criar um novo ficheiro para cada identificador VLAN:
>>
>> ![alma VLAN](images/multiple_vlan_alma.png){.thumbnail}
>>
>> Reinicie a interface de rede:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux e Rocky Linux (10)**
>>
>> A configuração abaixo é baseada em Fedora 43.
>>
>> Antes de começar, estabeleça uma ligação SSH ao seu servidor e execute o seguinte comando para carregar o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Para obter o nome da interface de rede privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> Neste exemplo, a interface chama-se `eno2`. Precisamos de criar uma subinterface VLAN antes de atribuir um endereço IP privado a ela.
>>
>> Utilize o seguinte comando para criar a interface VLAN:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Substitua `vlan-name` pelo nome da subinterface VLAN, `parent-interface` pelo nome da interface privada e `vlan-id` pelo ID VLAN.
>>
>> **Neste exemplo:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> Atribua um endereço IP privado à subinterface VLAN:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **Neste exemplo:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.10/16 ipv4.method manual
>> ```
>>
>> Em seguida, ative a subinterface VLAN:
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> **Neste exemplo:**
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> Utilize os mesmos comandos para cada interface VLAN que pretende adicionar.
>>
>> Uma vez concluído, é criado um ficheiro de configuração para a interface VLAN. Este ficheiro encontra-se em `/etc/NetworkManager/system-connections/` e segue o formato de nomenclatura `vlan-name.nmconnection`.
>>
>> Para várias VLAN, serão criados vários ficheiros de configuração:
>>
>> - Visão geral:
>>
>> ![config](images/multiple_vlan_fedora.png){.thumbnail}
>>
>> ![config](images/multiple_vlan_fedora_1.png){.thumbnail}
>>

### Windows

Ligue-se ao seu servidor através do ambiente de trabalho remoto e abra a aplicação "Gestor de Servidor". De seguida, selecione a opção `Servidor Local`{.action} e clique em `Desativado`{.action} junto de **Agregação de NICs**:

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

Em seguida, clique com o botão direito do rato na interface de rede e selecione `Adicionar à Nova Equipa`{.action}.

![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}

Na janela que aparece, crie uma nova equipa escrevendo um nome de equipa no campo **Nome da equipa**. Clique em `OK`{.action} para terminar:

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

Em seguida, deve indicar a etiqueta da VLAN. No painel "**ADAPTADORES E INTERFACES**" do ecrã "**Agregação de NICs**", vá para o separador `Interfaces de Equipa`{.action} e clique com o botão direito do rato na interface que acabou de adicionar à nova equipa e clique em `Propriedades`{.action}. Depois, clique em `VLAN específica`{.action} e indique a etiqueta:

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Agora, é necessário configurar o endereço de IP da VLAN. Clique no botão `Start`{.action} do menu inicial e, em seguida, em `Painel de Controlo`{.action}:

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Clique em `Rede e Internet`{.action}:

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Clique em `Centro de Rede e Partilha`{.action}:

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Clique em `Alterar definições de placa`{.action}:

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

Depois, clique com o botão direito do rato na interface VLAN e, em seguida, em `Propriedades`{.action}:

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Note que, no nosso exemplo, o `Ethernet 2` é a interface utilizada para o vRack. No entanto, é possível que a placa de rede vRack utilize uma interface diferente. Utilize uma interface que não possui o endereço IP principal do servidor ou que utiliza um endereço IP autoatribuído.

Clique duas vezes em `Internet Protocol Version 4 (TCP/IPv4)`{.action}:

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

No passo seguinte, clique em `Utilizar o seguinte endereço IP`{.action}. Em "**Endereço IP**": introduza um endereço de IP do seu intervalo interno. Em "**Máscara de sub-rede**": introduza "255.255.0.0".

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Finalmente, clique no botão `OK`{.action} para guardar as alterações e reinicie o servidor.

## Quer saber mais?

[Configurar vários servidores dedicados no vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

Junte-se à nossa [comunidade de utilizadores](/links/community).