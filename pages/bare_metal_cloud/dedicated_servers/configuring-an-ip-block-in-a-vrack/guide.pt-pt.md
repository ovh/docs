---
title: "Configurar um bloco IP na vRack num servidor dedicado"
excerpt: "Configure um bloco de endereços IP públicos para a rede privada vRack OVHcloud entre os seus servidores dedicados."
updated: 2026-04-03
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

Para além do endereçamento IP privado, o [vRack](/links/network/vrack) permite também encaminhar o tráfego IP público através da porta vRack do servidor utilizando um bloco de endereços IP públicos.

**Este guia mostra como configurar um bloco de endereços IP públicos para utilização com o vRack.**

> [!primary]
>
> O vRack suporta tanto o routing público IPv4 como IPv6 com blocos de endereços Additional IP. Pode encontrar as instruções sobre como configurar blocos IPv6 neste guia: "[Configurar um bloco IPv6 num vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)".
>

> [!primary]
>
> Este artigo foca-se na configuração de Additional IP numa rede vRack. Se procura orientações sobre a configuração de Additional IP em conjunto com o IP principal (na interface de rede pública), consulte os seguintes artigos:
>
> - IPv4:
>     - [Configurar o IP aliasing em servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configurar o IP aliasing num VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Configurar o IPv6 em servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configurar o IPv6 num VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configurar o IPv6 numa instância Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Requisitos

- Um bloco público de endereços IP na sua conta, com um mínimo de quatro endereços
- O intervalo de endereços IP privados escolhido
- Um [servidor compatível com vRack](/links/bare-metal/bare-metal)
- Um serviço [vRack](/links/network/vrack) ativado na sua conta

<!-- CP-NAV-START:network-vrack -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [vRack](/links/control-panel/network-vrack)
- **Caminho de navegação:** `Network`{.action} > `Rede privada vRack`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> Esta funcionalidade pode não estar disponível ou pode estar limitada nos [servidores dedicados da linha de produtos **Eco**](/links/bare-metal/eco-about).
>
> Visite a nossa [página de comparação](/links/bare-metal/eco-compare) para mais informações.

## Instruções

> [!primary]
>
> A título de exemplo, utilizaremos um bloco IP de 46.105.135.96/28 e eth1 para a interface de rede secundária, dedicada ao vRack.
>
> Também a título de exemplo, o ficheiro de configuração de rede ao qual nos referimos encontra-se em `/etc/network/interfaces`. O ficheiro equivalente no seu servidor pode estar noutro local, dependendo do sistema operativo. O conteúdo do ficheiro também pode ser diferente. Se tiver dificuldades, consulte a documentação oficial da sua distribuição.

### Adicionar o bloco IP ao vRack

> [!warning]
>
> Assim que um bloco IP é adicionado ao vRack, deixa de estar associado a um servidor físico.
>
> Esta configuração permite-lhe configurar IPs do mesmo bloco em vários servidores, desde que todos esses servidores estejam no mesmo vRack que o bloco IP. O bloco IP deve ter pelo menos 2 IPs utilizáveis ou mais para que isso seja possível.
>

Selecione o seu vRack na lista para exibir a lista de serviços elegíveis. Clique no bloco IP que deseja adicionar ao vRack e clique no botão `Adicionar`{.action}.

![Adicionar um bloco IP ao vRack](images/addIPblock.png){.thumbnail}

### Gerir a largura de banda IP pública no vRack

Por predefinição, os blocos Additional IP encaminhados através de um vRack beneficiam de uma largura de banda pública padrão de 5 Gbps na Europa e na América do Norte, ou de 100 Mbps nas regiões APAC. Para mais detalhes sobre as opções disponíveis, consulte as opções de routing público na nossa [página do produto vRack](/links/network/vrack).

Para responder às crescentes necessidades das infraestruturas e aos requisitos dos serviços de alto tráfego, a OVHcloud oferece agora aos seus clientes opções de largura de banda pagas. Tenha em atenção que estas opções se aplicam **por vRack e por região**. Uma vez que os endereços Additional IP estão associados a uma região precisa, qualquer modificação da largura de banda afetará o conjunto dos endereços (IPv4 e IPv6) encaminhados para esse vRack na região correspondente.

/// details | Durante o processo de encomenda de Additional IP

#### Escolha da largura de banda pública durante o processo de encomenda

É possível modificar a largura de banda predefinida no momento de encomendar um novo bloco Additional IP, desde que seja selecionada uma rede vRack como serviço backend.

Para encomendar um novo bloco Additional IP:

- Na barra lateral esquerda, aceda à secção `Network`{.action}.
- Selecione `Endereços IP públicos`{.action}.
- Clique no botão `Encomendar IPs`{.action} no topo da página.
- Escolha a versão IP e, em seguida, o vRack ao qual o Additional IP será associado.
- Selecione a região do seu Additional IP.
- Escolha a largura de banda pública a aplicar ao seu vRack para essa região.
- Configure as outras opções de acordo com as suas necessidades e, em seguida, finalize a encomenda.

///

/// details | A partir da página de gestão do vRack

#### Modificação da largura de banda pública a partir da página de gestão

Para os blocos Additional IP já associados a um vRack, a largura de banda é gerida diretamente a partir da página de configuração do serviço.

Para aceder à interface de gestão:

- Na coluna "Endereço IP público e largura de banda", clique no botão `Gerir`{.action} correspondente ao vRack pretendido.

A interface de gestão divide-se em dois separadores:

- **All attached services**: Atualmente redireciona para a página clássica de gestão do vRack. Em breve, este separador listará de forma otimizada todos os produtos (servidores, projetos Cloud, etc.) associados ao vRack.
- **Conectividade IP pública**: Permite gerir as opções de routing público do seu vRack, incluindo a largura de banda.

Para modificar a largura de banda:

- Vá ao separador `Conectividade IP pública`{.action}.
- A interface apresenta janelas de gestão por região (por exemplo, `eu-west-par`) associadas ao vRack, com a lista dos IPs associados.
- No bloco da região correspondente, clique em `Modificar largura de banda`{.action}.
- Selecione a opção pretendida no painel da direita e, em seguida, clique em `Encomendar`{.action} para validar.
- Após o pagamento, a nova largura de banda estará ativa no seu vRack na região escolhida após alguns minutos.

> [!primary]
>
> O primeiro mês subscrito é faturado de forma proporcional aos dias restantes. A tarifa completa será aplicada no próximo ciclo de faturação.
>

O aumento de largura de banda será aplicado a todos os endereços IP dessa região para o vRack selecionado.

///

### Configurar um endereço IP utilizável

Para fins do vRack, o primeiro, o penúltimo e o último endereço em qualquer bloco IP são sempre reservados para o endereço de rede, o gateway de rede e o broadcast de rede, respetivamente. Isto significa que o primeiro endereço utilizável é o segundo endereço no bloco, como se mostra abaixo:

```sh
46.105.135.96   # Reservado: Endereço de rede
46.105.135.97   # Primeiro IP utilizável
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
46.105.135.109  # Último IP utilizável
46.105.135.110  # Reservado: Gateway de rede
46.105.135.111  # Reservado: Broadcast de rede
```

Para configurar o primeiro endereço IP utilizável, é necessário editar o ficheiro de configuração de rede, como se mostra abaixo. Neste exemplo, precisamos de utilizar uma máscara de sub-rede de *255.255.255.240*.

> [!primary]
>
> A máscara de sub-rede utilizada no nosso exemplo é adequada para o nosso bloco IP. A sua máscara de sub-rede pode variar consoante o tamanho do seu bloco. Quando adquirir o seu bloco IP, receberá um e-mail que lhe indicará qual a máscara de sub-rede a utilizar.
>

### Descarregar o pacote `iproute2`

Antes de começar, descarregue e instale o **iproute2**, um pacote que permite configurar manualmente o routing IP. Este pacote pode já estar disponível no seu servidor — nesse caso, avance para o passo seguinte.

Estabeleça uma ligação SSH ao servidor e execute o seguinte comando para descarregar e instalar o iproute2:

```sh
sudo apt-get install iproute2
```

**Fedora**

```sh
sudo dnf install iproute
```

#### Configurações GNU/Linux

> [!tabs]
> **Debian 11**
>>
>> **Configurar o Additional IP**
>>
>> Abra o ficheiro de configuração de rede situado em `/etc/network/interfaces.d` com um editor de texto à sua escolha. Aqui, o ficheiro chama-se `50-cloud-init`.
>>
>> ```sh
>> /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> ```
>>
>> **Criar uma nova tabela de routing IP**
>>
>> Em seguida, crie uma nova rota IP para o vRack. Adicione uma nova regra de tráfego modificando o ficheiro como indicado abaixo:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> **Modificar o ficheiro de configuração de rede**
>>
>> > [!primary]
>> >
>> > A título de exemplo, o ficheiro de configuração de rede ao qual nos referimos encontra-se em /etc/network/interfaces. O ficheiro equivalente no seu servidor pode estar noutro local, dependendo do sistema operativo.
>> >
>>
>> Por último, modifique o ficheiro de configuração de rede para ter em conta a nova regra de tráfego e encaminhar o tráfego do vRack através do endereço do gateway de rede **46.105.135.110**.
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> post-up ip route add 46.105.135.96/28 dev eth1 table vrack
>> post-up ip route add default via 46.105.135.110 dev eth1 table vrack
>> post-up ip rule add from 46.105.135.96/28 table vrack
>> post-up ip rule add to 46.105.135.96/28 table vrack
>> ```
>>
>> Reinicie o servidor para aplicar as alterações ou ative simplesmente a nova interface de rede:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **CentOS, AlmaLinux e Rocky Linux (8/9)**
>>
>> **Criar o ficheiro para a interface de rede secundária**
>>
>> Copie a configuração da interface de rede primária e ajuste-a de acordo com as suas necessidades:
>>
>> ```sh
>> sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Em seguida, abra o novo ficheiro:
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> - Defina as configurações de IP:
>>
>> ```sh
>> # Created by cloud-init on instance boot automatically, do not edit.
>> #
>> DEVICE=eth1
>> BOOTPROTO=static
>> ONBOOT=yes
>> USERCTL=no
>> IPV6INIT=no
>> PEERDNS=yes
>> TYPE=Ethernet
>> NETMASK=255.255.255.240
>> IPADDR=46.105.135.97
>> ARP=yes
>> ```
>>
>> **Criar uma nova tabela de routing IP**
>>
>> Em seguida, crie uma nova rota IP para o vRack. Adicione uma nova regra de tráfego modificando o ficheiro como indicado abaixo:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> Em seguida, crie o ficheiro necessário para aplicar as novas regras:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/rule-eth1
>> ```
>>
>> Cole o seguinte conteúdo (lembre-se de substituir as variáveis pelos seus próprios valores):
>>
>> ```sh
>> from 46.105.135.96/28 table vrack
>> to 46.105.135.96/28 table vrack
>> ```
>>
>> **Modificar o ficheiro de configuração de rede**
>>
>> Por último, modifique o ficheiro de configuração de rede para ter em conta a nova regra de tráfego e encaminhar o tráfego do vRack através do endereço do gateway de rede **46.105.135.110**.
>>
>> Edite o seguinte ficheiro para adicionar rotas persistentes e estáticas:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/route-eth1
>> ```
>>
>> Cole o seguinte conteúdo (lembre-se de substituir as variáveis pelos seus próprios valores):
>>
>> ```sh
>> 46.105.135.96/28 dev eth1 table vrack
>> default via 46.105.135.110 dev eth1 table vrack
>> ```
>>
>> Reinicie o servidor para aplicar as alterações ou ative simplesmente a nova interface de rede:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **Ubuntu e Debian 12+**
>>
>> - Configurar o Additional IP
>>
>> Abra o ficheiro de configuração de rede situado em `/etc/netplan` com um editor de texto à sua escolha. Aqui, o ficheiro chama-se `50-cloud-init.yaml`.
>>
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> - Defina as configurações de IP com as seguintes variáveis:
>>
>> ```sh
>> NETWORK_INTERFACE:
>> dhcp4: false
>> addresses:
>> - ADDITIONAL_IP/PREFIX
>> routes:
>> - to: NETWORK_IP/PREFIX
>>   via: GATEWAY_IP
>> ```
>>
>> **Exemplo**
>>
>> ```sh
>> eno2:
>> dhcp4: false
>> addresses:
>> - 46.105.135.97/28
>> routes:
>> - to: 46.105.135.96/28
>>   via: 46.105.135.110
>> ```
>>
>> Aplique a configuração com o seguinte comando:
>>
>> ```bash
>> sudo netplan apply
>> ```
>> 
> **Fedora, AlmaLinux e Rocky Linux (10)**
>>
>> Em primeiro lugar, verifique que a sua interface vRack está no estado `connected` ou `connecting`. No nosso exemplo, a interface chama-se `eno2`.
>>
>> ```sh
>> nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet   connecting (getting IP configuration)               vRack
>> ```
>>
>> Em seguida, obtenha o nome do ficheiro de configuração situado em `/etc/NetworkManager/system-connections`. Aqui, o ficheiro chama-se `vRack.nmconnection`.
>>
>> ```sh
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> cloud-init-eno1.nmconnection vRack.nmconnection
>> ```
>>
>> Configure o seu Additional IP através do gestor `nmcli`. Substitua `vRack` e os outros parâmetros pelos seus próprios valores.
>>
>> - Adicionar o IP
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.address 46.105.135.96/28
>> ```
>>
>> - Adicionar o gateway
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.gateway 46.105.135.110
>> ```
>>
>> - Alterar a configuração de **auto** para **manual**:
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.method manual
>> ```
>>
>> - Tornar a configuração persistente
>>
>> ```sh
>> sudo nmcli con mod 'vRack' connection.autoconnect true
>> ```
>>
>> **Criar uma nova tabela de routing IP**
>>
>> Em seguida, crie uma nova rota IP para o vRack. Adicione uma nova regra de tráfego (`1 vrack`) modificando o ficheiro como indicado abaixo:
>>
>>
>> ```sh
>> sudo nano /usr/share/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> - Adicionar a rota
>>
>> ```sh
>> sudo ip route add <network_ip>/<prefix> via <gateway> dev <interface>
>> ```
>>
>> No nosso exemplo
>>
>> ```sh
>> sudo ip route add 46.105.135.96/28 via 46.105.135.110 dev eno2
>> ```
>>
>> Reinicie a rede com o seguinte comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>


### Windows Server

#### Passo 1: Verificar e configurar a interface de rede secundária

Verifique as informações da nova interface de rede:

![verificação da interface de rede secundária](images/win-ip-vrack-1.png){.thumbnail}

Em seguida, verifique as propriedades:

![propriedades da interface de rede secundária](images/win-ip-vrack-2.png){.thumbnail}

![propriedades da interface de rede secundária](images/win-ip-vrack-3.png){.thumbnail}

#### Passo 2: Configuração de IP

Selecione a opção `Use the following IP address`{.action}:

![configuração de IP](images/win-ip-vrack-4.png){.thumbnail}

Defina as informações de IP:

![configuração de IP](images/win-ip-vrack-5b.png){.thumbnail}

#### Passo 3: Reiniciar a interface de rede

Em primeiro lugar, desative a interface.

![desativação da rede](images/win-ip-vrack-6.png){.thumbnail}

Em seguida, ative-a.

![ativação da rede](images/win-ip-vrack-7.png){.thumbnail}

### Resolução de problemas

Se não conseguir estabelecer uma ligação a partir da sua VM ou servidor para a rede privada, abra um ticket de suporte a partir da sua Área de Cliente com as seguintes informações:

- IP de origem e IP de destino
- Resultado de `ifconfig -a` ou `ipconfig /all` de ambos os servidores ou VMs (configuração da interface de rede)
- Ping em ambas as direções
- Resultado de `arp -a`
- Tabela de routing

Inclua os resultados acima no seu ticket.

## Quer saber mais?

[Configurar o vRack nos servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Criar múltiplas VLANs num vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Configurar o vRack entre o Public Cloud e um servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Fale com a nossa [comunidade de utilizadores](/links/community).
