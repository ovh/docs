---
title: "Configurar a vRack entre o Public Cloud e um servidor dedicado"
excerpt: "Configure uma rede privada entre uma instância Public Cloud da OVHcloud e um servidor dedicado através da vRack."
updated: 2026-02-20
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

O [vRack](/links/network/vrack) da OVHcloud é uma rede privada que lhe permite configurar o direcionamento entre dois ou mais [servidores dedicados](/links/bare-metal/bare-metal) da OVHcloud. Além disso, permite-lhe também adicionar [instâncias Public Cloud](/links/public-cloud/compute) à sua rede privada para criar uma infraestrutura de recursos físicos e virtuais.

**Este manual explica-lhe como configurar uma rede privada entre uma [instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) e um [servidor dedicado](/links/bare-metal/bare-metal).**

## Requisitos

* Ter criado uma [instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)
* Ter ativado um serviço [vRack](/links/network/vrack)
* Dispor de um [servidor dedicado](/links/bare-metal/bare-metal) compatível com o vRack
* Um intervalo de endereços IP privados à sua escolha
* Os dois serviços devem estar no mesmo vRack.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Caminho de navegação:** `Public Cloud`{.action} > Selecione o seu projeto

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para mais informações, consulte o nosso [comparativo](/links/bare-metal/eco-compare).

## Instruções

### Adicionar um projeto Public Cloud ao vRack

> [!primary]
> Esta opção não se aplica a projetos recém-criados que são automaticamente entregues com um vRack. Assim que o projeto for criado, pode visualizar o vRack abrindo o menu `Network`{.action} na barra lateral à esquerda e selecionando `Rede privada vRack`{.action}.
>
> Pode igualmente retirar o projeto do vRack que lhe foi atribuído e associá-lo a outro vRack se o desejar, em especial se já tinha um vRack existente com o(s) seu(s) servidor(es) dedicado(s).

Na lista dos serviços elegíveis, selecione o projeto que deseja adicionar ao vRack e, a seguir, clique no botão `Adicionar`{.action}.

![Adicionar um projeto ao vRack](images/addprojectvrack.png){.thumbnail}


### Integrar uma instância no vRack

> [!primary]
> Este guia concentra-se numa configuração simples de vRack entre uma instância Public Cloud e um servidor dedicado.
> Se configurou as suas instâncias com um modo de implementação como zonas locais ou multi AZ, tenha em atenção que as zonas locais não suportam o vRack por enquanto.
> Além disso, o **vRack** é uma rede L2 global e não suporta a resiliência ao nível de "zona" ou "região".
>

Existem duas situações:

- A instância ainda não existe.
- A instância já existe e deve adicioná-la ao vRack.

#### Caso de uma nova instância

Se precisar de ajuda, consulte o guia: [Criar uma instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps). Ao criar uma instância, poderá especificar, na etapa 5, uma rede privada na qual poderá integrar a sua instância.

#### Caso de uma instância já existente

Assim que o seu projeto estiver ligado a um vRack, pode criar uma rede privada e associá-la a instâncias existentes.

No separador `Public Cloud`{.action}, clique em `Private Network`{.action} no menu à esquerda em **Network**.

Clique no botão `Adicionar uma rede privada`{.action}.

![create private network](images/vrack2022-03.png){.thumbnail}

A página seguinte permite personalizar várias definições.

Selecione a região na qual pretende colocar a rede privada. Certifique-se de que se encontra na mesma região que a instância existente.

![select região](images/vrack2024-01.png){.thumbnail}

Para que os dois serviços possam comunicar entre si, devem ser « marcados » com o mesmo **VLAN ID**.

Pode configurá-lo na etapa seguinte.

![configure network](images/configure_private_network.png){.thumbnail}

Esta etapa oferece várias opções de configuração. Para as necessidades deste guia, vamos concentrar-nos nos elementos necessários. Clique nos separadores abaixo para visualizar os detalhes:

> [!tabs]
> **Nome da rede privada**
>>
>> Introduza um nome para a sua rede privada.<br>
>>
> **Opções de rede do layer 2**
>>
>> Por predefinição, o VLAN ID dos servidores dedicados é **0**. Para utilizar este VLAN ID para uma instância, será necessário marcar a rede privada com a VLAN **0** também.
>> Selecione a caixa **Set a VLAN ID** e selecione VLAN ID **0**.
>>
>> Se não selecionar esta opção, o sistema atribuirá um número de ID de VLAN aleatório à sua rede privada.
>>
> **Utilização de um VLAN ID diferente**
>>
>> Se não pretende utilizar o VLAN ID **0**, pode selecionar um ID diferente entre 1 e 4000. Neste caso:
>>
>> - Aquando da configuração do vRack no servidor dedicado, este VLAN ID deve ser incluído no(s) ficheiro(s) de configuração de rede.
>>
>> > [!primary]
>> > É possível utilizar o mesmo VLAN ID para várias redes privadas, mas isso exige uma gestão cuidadosa dos endereços IP privados. A utilização da alocação de pool DHCP sem sobreposição pode ser uma forma de gerir esta problemática.
>> >
>>
>> > [!primary]
>> > Ao contrário dos servidores dedicados (quando se utiliza um VLAN ID diferente de 0), não é necessário incluir diretamente o VLAN ID no ficheiro de configuração de rede da instância Public Cloud depois de ter sido configurado na Área de Cliente OVHcloud.
>> >
>>
>> Exemplo: se a rede privada da sua instância estiver etiquetada com a VLAN 2, este VLAN ID deve ser incluído apenas na configuração de rede do servidor dedicado. Para mais informações, consulte o seguinte guia: [Criar várias VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
> **Opções de distribuição dos endereços DHCP**
>>
>> Pode conservar o intervalo de IP privado por predefinição ou utilizar outro.
>>
>> Selecione "Ativar DHCP para esta rede privada" para atribuir e configurar automaticamente o endereço IP privado na instância. Terá apenas de configurar as interfaces de rede do servidor dedicado.
>>
>> Quando esta opção não está selecionada, é necessária uma configuração manual tanto na instância Public Cloud como no servidor dedicado.
>>
>> **Opções de Gateway de rede**
>>
>> Certifique-se de que ambas as opções estão desmarcadas.
>>

Uma vez terminada a configuração, clique em `Configure a sua rede privada`{.action}. Esta operação pode levar alguns minutos.

No painel de controlo da instância correspondente, localize a secção "Redes" e clique no botão `...`{.action} ao lado de "Redes privadas". Selecione `Associar uma rede`{.action}.

![attach network](images/vrack2021-01.png){.thumbnail}

Na janela que aparecer, selecione a(s) rede(s) privada(s) a associar à sua instância e clique em `Associar`{.action}.

![attach network](images/attach_network.png){.thumbnail}

### Configurar as interfaces de rede

> [!primary]
> Se escolheu a opção que permite configurar a rede privada na sua instância utilizando DHCP, só precisa de configurar as interfaces de rede no servidor dedicado.
>

#### Configuração em caso de utilização do VLAN ID 0 por predefinição

Antes de começar, ligue-se ao servidor através de SSH e liste as suas interfaces de rede com o seguinte comando:

```bash
ip a
```

Para os servidores dedicados, localize a linha que começa por ```link ether``` e verifique que esta interface corresponde à interface **Privada** listada no separador `Interfaces de rede`{.action} do painel de controlo do servidor.

Utilize este nome de interface para substituir `NETWORK_INTERFACE` nas configurações abaixo (exemplo: `eth1`).

A título de exemplo, utilizaremos o intervalo de endereços IP `192.168.0.0/16` (**máscara de sub-rede**: `255.255.0.0`).

> [!tabs]
> **Debian 11**
>>
>> Utilizando um editor de texto à sua escolha, abra o ficheiro de configuração de rede localizado em `/etc/network/interfaces.d` para edição. Aqui, o ficheiro chama-se `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Adicione as seguintes linhas à configuração existente, substitua `NETWORK_INTERFACE`, `IP_ADDRESS` e `NETMASK` pelos seus próprios valores:
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>>```
>>
>> **Exemplo:**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Guarde as alterações no ficheiro de configuração e saia do editor.
>>
>> Reinicie o serviço de rede para aplicar a configuração:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu e Debian 12+**
>>
>> Utilizando um editor de texto à sua escolha, abra o ficheiro de configuração de rede localizado em `/etc/netplan/` para edição. Aqui, o ficheiro chama-se `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Adicione as seguintes linhas à configuração existente após a linha `version: 2`. Substitua `NETWORK_INTERFACE` e `IP_ADDRESS/PREFIX` pelos seus próprios valores.
>>
>> ```yaml
>>    ethernets:
>>        NETWORK_INTERFACE:
>>            dhcp4: false
>>            addresses:
>>              - IP_ADDRESS/PREFIX
>> ```
>>
>> **Exemplo:**
>>
>> ![netplan config](images/netplan_configuration.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > É importante respeitar o alinhamento de cada elemento nos ficheiros `yaml` como representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento. Apenas a tecla de espaço é necessária.
>> >
>>
>> Guarde as alterações no ficheiro de configuração e saia do editor.
>>
>> Aplique a configuração:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
> **AlmaLinux e Rocky Linux (8/9)**
>>
>> Depois de ter identificado a sua interface de rede privada, utilize o seguinte comando para criar um ficheiro de configuração de rede.
>>
>> Substitua `NETWORK_INTERFACE` pelo nome da sua interface privada.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Por exemplo, se a interface privada se chama `eth1`, temos o seguinte:
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> De seguida, utilize um editor de texto à sua escolha para editar este ficheiro.
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Adicione estas linhas, substituindo `NETWORK_INTERFACE`, `IP_ADDRESS` e `NETMASK` pelos seus próprios valores:
>>
>> ```console
>> DEVICE=NETWORK_INTERFACE
>> BOOTPROTO=static
>> IPADDR=IP_ADDRESS
>> NETMASK=NETMASK
>> ONBOOT=yes
>> TYPE=Ethernet
>> ```
>>
>> **Exemplo:**
>>
>> ![centos config](images/centos_alma_configuration.png){.thumbnail}
>>
>> Guarde as alterações no ficheiro de configuração e saia do editor.
>>
>> Reinicie o serviço de rede para aplicar as alterações:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux e Rocky Linux (10)**
>>
>> Depois de ter identificado o nome da sua interface privada, execute o seguinte comando para verificar se está ligada. No nosso exemplo, a nossa interface chama-se `eno2`:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet  disconnected            --
>> ```
>>
>> Se o `STATE` do `DEVICE` aparecer como `disconnected`, deve ser ligado antes de configurar o IP.
>>
>> Ao adicionar uma ligação **ethernet**, temos de criar um perfil de configuração que depois atribuímos a um dispositivo.
>>
>> Execute o seguinte comando, substituindo `INTERFACE_NAME` e `CONNECTION_NAME` pelos seus próprios valores.
>>
>> No nosso exemplo, nomeámos o nosso perfil de configuração como `private-interface`.
>>
>> ```bash
>> nmcli connection add type ethernet con-name CONNECTION_NAME ifname INTERFACE_NAME
>> ```
>>
>> **Exemplo:**
>>
>> ```bash
>> nmcli connection add type ethernet con-name private-interface ifname eno2
>> ```
>>
>> Verifique se a interface foi ligada corretamente:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> eno2             ethernet  connected               private-interface
>> lo               loopback  connected (externally)  lo
>> ```
>>
>> Uma vez feito isto, será criado um novo ficheiro de configuração chamado *xxxxxxxxxx.nmconnection* na pasta `/etc/NetworkManager/system-connections`.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> Pode então editar este ficheiro utilizando o gestor `nmcli`, substituindo `IP_ADDRESS`, `PREFIX` e `CONNECTION_NAME` pelos seus próprios valores.
>>
>> - Adicione o seu IP:
>>
>> ```bash
>> nmcli connection modify CONNECTION_NAME IPv4.address IP_ADDRESS/PREFIX
>> ```
>>
>> **Exemplo:**
>>
>> ```bash
>> nmcli connection modify private-interface IPv4.address 192.168.0.1/16
>> ```
>>
>> - Altere a configuração de **auto** para **manual**:
>>
>> ```bash
>> sudo nmcli connection modify CONNECTION_NAME IPv4.method manual
>> ```
>>
>> **Exemplo:**
>>
>> ```bash
>> sudo nmcli connection modify private-interface IPv4.method manual
>> ```
>>
>> - Torne a configuração persistente:
>>
>> ```bash
>> sudo nmcli con mod CONNECTION_NAME connection.autoconnect true
>> ```
>>
>> **Exemplo:**
>>
>> ```bash
>> sudo nmcli con mod private-interface connection.autoconnect true
>> ```
>>
>> Reinicie a rede com o seguinte comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Configuração Windows**
>>
>> Ligue-se ao seu servidor Windows através do ambiente de trabalho remoto e aceda ao **Painel de Controlo**.
>>
>> ![Windows Control Panel](images/windows_control_panel.png){.thumbnail}
>>
>> Clique em `Rede e Internet`{.action}.
>>
>> ![Rede e Internet](images/windows_network_and_internet.png){.thumbnail}
>>
>> Abra `Centro de Rede e Partilha`{.action}.
>>
>> ![Centro de Rede e Partilha](images/windows_network_and_sharing_centre.png){.thumbnail}
>>
>> Clique em `Alterar definições do adaptador`{.action}.
>>
>> ![Alterar definições do adaptador](images/windows_change_adapter_settings.png){.thumbnail}
>>
>> Clique com o botão direito do rato na interface de rede secundária e, em seguida, clique em `Propriedades`{.action}.
>>
>> Note que, no nosso exemplo, `Ethernet 2` é a interface utilizada para o vRack. No entanto, é possível que a NIC do vRack seja uma interface diferente na sua configuração. A interface correta a selecionar será a que não tem o endereço IP principal do servidor ou que tem um IP atribuído automaticamente.
>>
>> ![Windows Properties](images/windows_properties_button.png){.thumbnail}
>>
>> Faça duplo clique em `Protocolo IP Versão 4 (TCP/IPv4)`{.action}.
>>
>> ![Protocolo IP Versão 4](images/windows_ipv4.png){.thumbnail}
>>
>> Clique em **Utilizar o seguinte endereço IP**. Introduza qualquer **endereço IP** do seu intervalo privado e a **máscara de sub-rede** apropriada (`255.255.0.0` neste exemplo) nos campos correspondentes.
>>
>> ![Utilizar o seguinte endereço IP](images/windows_use_following_ip_address.png){.thumbnail}
>>
>> Clique em `OK`{.action} para guardar as alterações e reinicie o servidor para as aplicar.

/// details | **Configuração em caso de utilização de um identificador VLAN diferente**

Neste exemplo, vamos utilizar **10** como identificador (tag) VLAN e **192.168.0.0/16** como intervalo de endereços IP privados.

> [!tabs]
> **Debian 11**
>>
>> A configuração abaixo baseia-se em Debian 11 (Bullseye).
>>
>> - Antes de começar, estabeleça uma ligação SSH ao seu servidor e execute os seguintes comandos para instalar o pacote VLAN:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - De seguida, carregue o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Obtenha os nomes das interfaces e identifique a interface privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> Neste exemplo, a interface de rede privada é identificada como `eno2`.
>>
>> - De seguida, crie uma subinterface VLAN para a interface de rede (configuração não persistente) e atribua (marque) o VLAN ID. Neste exemplo, o VLAN ID é 10.
>>
>> Substitua os valores pelos seus próprios.
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> - De seguida, atribua um endereço IP privado à subinterface VLAN recém-criada:
>>
>> ```sh
>> sudo ip addr add 192.168.0.14/16 dev eno2.10
>> ```
>>
>> - De seguida, ative a interface privada e a subinterface VLAN:
>>
>> ```sh
>> sudo ip link set dev eno2 up
>> sudo ip link set dev eno2.10 up
>> ```
>>
>> - Para tornar a configuração persistente, adicione as seguintes entradas ao ficheiro de configuração:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> ```console
>> auto eno2.10
>> iface eno2.10 inet static
>>    address 192.168.0.14
>>    netmask 255.255.0.0
>>    broadcast 192.168.255.255
>>    vlan-raw-device eno2
>> ```
>>
>> - Vista geral:
>>
>> ![config](images/config_debian.png){.thumbnail}
>>
>> - Reinicie a rede para aplicar as alterações:
>>
>> ```sh
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu e Debian 12+**
>>
>> A configuração abaixo baseia-se em Ubuntu 24.04 (Noble Numbat).
>>
>> - Antes de começar, estabeleça uma ligação SSH ao seu servidor e execute o seguinte comando para instalar o pacote VLAN:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - De seguida, carregue o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Crie ou edite o ficheiro de configuração `cloud.cfg` para impedir alterações automáticas à configuração de rede:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> - Adicione esta linha:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Guarde e feche o ficheiro.
>>
>> - Para obter o nome da interface de rede e o seu endereço MAC:
>>
>> ```sh
>> ip a
>> ```
>>
>> - Aqui, a interface que queremos configurar é `eno2` com endereço MAC: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/ubuntu_ip_a.png){.thumbnail}
>>
>> - Adicione a configuração de rede para esta interface e a declaração VLAN ao ficheiro de configuração, certificando-se de que é colocada diretamente abaixo da linha `version: 2`. Substitua os valores pelos seus próprios:
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
>>              match:
>>                macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                          # VLAN ID
>>             link: eno2                  # Nome da interface
>>             addresses:
>>             - 192.168.0.14/16
>> ```
>>
>> - Vista geral:
>>
>> ![config](images/config_ubuntu.png){.thumbnail}
>>
>> - Guarde e feche o ficheiro, depois execute o seguinte comando:
>>
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> - Se receber a seguinte mensagem:
>>
>> ```console
>> WARNING:root:Cannot call Open vSwitch: ovsdb-server.service is not running.
>> ```
>>
>> - Pode resolver isto instalando o seguinte pacote:
>>
>> ```sh
>> sudo apt install openvswitch-switch
>> ```
>>
>> - Verifique se a configuração foi aplicada corretamente:
>>
>> ```sh
>> ip a
>> ```
>>
> **AlmaLinux e Rocky Linux (8/9)**
>>
>> A configuração abaixo baseia-se em Almalinux 9.
>>
>> - Antes de começar, estabeleça uma ligação SSH ao seu servidor e execute o seguinte comando para carregar o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Obtenha os nomes das interfaces e identifique a interface privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> Neste exemplo, a interface privada é `eno2`.
>>
>> - De seguida, crie um ficheiro de configuração de subinterface para o VLAN no ficheiro de configuração de rede principal. Neste exemplo, o ficheiro chama-se `ifcfg-eno2.10`, aqui eno2 refere-se à interface de rede privada e `10` ao VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts-ifcfg-eno2.10
>> ```
>>
>> - Adicione as seguintes entradas ao ficheiro de configuração. Substitua os valores pelos seus próprios.
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.14
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> - Guarde e feche o ficheiro.
>>
>> - Vista geral:
>>
>> ![config](images/config_alma.png){.thumbnail}
>>
>> - Reinicie a interface de rede:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux & Rocky Linux (10)**
>>
>> A configuração abaixo baseia-se em Fedora 43.
>>
>> - Antes de começar, estabeleça uma ligação SSH ao seu servidor e execute o seguinte comando para carregar o módulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar se o módulo está carregado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Execute o seguinte comando para garantir que os módulos são carregados permanentemente no arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Para obter o nome da interface de rede:
>>
>> ```sh
>> ip a
>> ```
>>
>> Neste exemplo, a interface chama-se `eno2`. Precisamos de criar uma subinterface VLAN antes de atribuir um endereço IP privado à mesma.
>>
>> - Utilize o seguinte comando para criar a interface VLAN:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Substitua `vlan-name` pelo nome da subinterface VLAN, `parent-interface` pelo nome da interface privada e `vlan-id` pelo VLAN ID.
>>
>> **Neste exemplo:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> - Atribua um endereço IP privado à subinterface VLAN:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **Neste exemplo:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.14/16 ipv4.method manual
>> ```
>>
>> - De seguida, ative a subinterface VLAN:
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
>> Os passos acima criam um ficheiro de configuração para a interface VLAN. Este ficheiro está localizado em `/etc/NetworkManager/system-connections/` e segue o formato de nomenclatura `vlan-name.nmconnection`.
>>
>> Neste exemplo, o ficheiro chama-se `eno2.10.nmconnection`.
>>
>> - Vista geral:
>>
>> ![config](images/fedora_file_name.png){.thumbnail}
>>
>> ![config](images/config_fedora.png){.thumbnail}
>>
> **Windows**
>>
>> Ligue-se ao seu servidor através do ambiente de trabalho remoto e abra a aplicação "Gestor de Servidor". De seguida, selecione a opção `Servidor Local`{.action} e clique em `Desativado`{.action} junto de **Agregação de NICs**.
>>
>> ![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}
>>
>> Em seguida, clique com o botão direito do rato na interface de rede e selecione `Adicionar à Nova Equipa`{.action}.
>>
>> ![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}
>>
>> Na janela que aparece, crie uma nova equipa escrevendo um nome de equipa no campo **Nome da equipa**. Clique em `OK`{.action} para terminar.
>>
>> ![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}
>>
>> Em seguida, deve indicar a etiqueta da VLAN. No painel "**ADAPTADORES E INTERFACES**" do ecrã "**Agregação de NICs**", vá para o separador `Interfaces de Equipa`{.action} e clique com o botão direito do rato na interface que acabou de adicionar à nova equipa e clique em `Propriedades`{.action}. Depois, clique em `VLAN específica`{.action} e indique a etiqueta.
>>
>> ![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}
>>
>> Agora, é necessário configurar o endereço de IP da VLAN. Clique no botão `Start`{.action} do menu inicial e, em seguida, em `Painel de Controlo`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}
>>
>> Clique em `Rede e Internet`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}
>>
>> Clique em `Centro de Rede e Partilha`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}
>>
>> Clique em `Alterar definições de placa`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}
>>
>> Depois, clique com o botão direito do rato na interface VLAN e, em seguida, em `Propriedades`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}
>>
>> Note que, no nosso exemplo, o `Ethernet 2` é a interface utilizada para o vRack. No entanto, é possível que a placa de rede vRack utilize uma interface diferente. Utilize uma interface que não possui o endereço IP principal do servidor ou que utiliza um endereço IP autoatribuído.
>>
>> Clique duas vezes em `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}
>>
>> No passo seguinte, clique em `Utilizar o seguinte endereço IP`{.action}. Em "**Endereço IP**": introduza um endereço de IP do seu intervalo interno. Em "**Máscara de sub-rede**": introduza "255.255.0.0".
>>
>> ![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}
>>
>> Finalmente, clique no botão `OK`{.action} para guardar as alterações e reinicie o servidor.
>>

///

## Quer saber mais?

[Criar várias VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Junte-se à nossa [comunidade de utilizadores](/links/community).
