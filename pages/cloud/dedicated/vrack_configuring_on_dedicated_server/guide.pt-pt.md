---
title: 'Configurar vários servidores dedicados no vRack'
slug: configurar-varios-servidores-dedicados-no-vrack
excerpt: 'Aprenda a configurar vários servidores dedicados graças ao vRack'
section: vRack
---

**Última atualização no dia 16/05/2018**

## Sumário

A tecnologia vRack (rack virtual) permite agrupar vários servidores (consultar requisitos, mais abaixo), independentemente do seu número e da sua localização física nos nossos datacenters, e conectá-los a um switch virtual dentro da mesma rede privada. Os seus servidores podem comunicar entre si de forma privada e segura no âmbito de uma VLAN dedicada.

**Aprenda a configurar vários servidores dedicados graças ao vRack.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Ter um [vRack](https://www.ovh.pt/solucoes/vrack/){.external}.
- Ter à disposição vários (pelo menos dois) [servidores compatíveis com vRack](https://www.ovh.pt/servidores_dedicados/){.external}.
- Estar conectado via SSH (ou através da interface gráfica do utilizador) no servidor Linux (acesso root).
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Preparar o intervalo de endereços IP privados que escolheu.


## Instruções

### Adicionar os servidores ao vRack

1. Quando tiver adicionado o vRack à sua conta, vá à secção `Cloud`{.action} da sua [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
2. A seguir, selecione o menu `vRack`{.action} na coluna da esquerda.
3. Escolha o seu vRack na lista apresentada.
4. Na lista dos serviços elegíveis, selecione os servidores que deseja adicionar ao vRack. Depois clique no botão `Adicionar`{.action}.

![Escolha do vRack](images/vrack_selection.png){.thumbnail}

### Configurar as interfaces de rede

A título de exemplo, utilizaremos um intervalo de endereços IP internos de *192.168.0.0/16*.

Também vamos empregar os nomes **eth1** e **eno4** para a interface de rede secundária. Os seus servidores podem utilizar uma convenção de nomenclatura diferente. Sugerimos que o verifique utilizando os comandos indicados abaixo.

Para listar as interfaces de rede, o comando a utilizar é o seguinte:

```sh
ifconfig -a | grep eth | awk '{print $ 1}'
```

A primeira interface da lista diz respeito à sua conexão de rede principal. Pode verificar a que está ativa utilizando o comando que se segue:

```sh
ifconfig eth1 up
```

```sh
ethtool eth1 | grep "Link detected"
```

Se o comando apresentar `Link detected : no`, trata-se da interface de rede a utilizar para a sua configuração do vRack, depois de ter executado este comando:

```sh
ifconfig eth1 down
```

#### CentOS 6 e 7

Abra o ficheiro de configuração da interface de rede com o comando a seguir:

```sh
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Carregue na tecla `I` do teclado para passar para o modo de inserção.

Configure a interface de rede secundária da seguinte forma:

```sh
DEVICE=eth1
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

No exemplo acima, pode optar por utilizar qualquer gama privada de endereços IPv4 e atribuir qualquer endereço situado nesse intervalo.

1. Carregue na tecla `ESC`.
2. Carregue na tecla `SHIFT` e na tecla *dois pontos* para abrir o editor.
3. Introduza `wq`.
4. Carregue na tecla `Enter`.
5. Reinicie o seu servidor.
6. Repita todos os passos para os outros servidores e atribua-lhes um endereço IP único pertencente ao seu intervalo interno. Depois disto, os seus servidores poderão comunicar entre si na rede privada.


#### Debian 7 e 8

Abra o ficheiro de configuração da interface de rede com o comando a seguir:

```sh
nano /etc/network/interfaces
```

Configure a interface de rede secundária da seguinte forma:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

No exemplo acima, pode optar por utilizar qualquer gama privada de endereços IPv4 e atribuir qualquer endereço situado nesse intervalo.


1. `CTRL + X` para sair do ficheiro de configuração de rede.
2. Carregue na tecla `Y` para gravar as alterações. Depois carregue em `Enter`.
3. Reinicie o seu servidor.
4. Repita todos os passos para os outros servidores e atribua-lhes um endereço IP único pertencente ao seu intervalo interno. Depois disto, os seus servidores poderão comunicar entre si na rede privada.


#### Debian 9

Abra o ficheiro de configuração da interface de rede com o comando a seguir:

```sh
nano /etc/network/interfaces
```

Configure a interface de rede secundária da seguinte forma:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

No exemplo acima, pode optar por utilizar qualquer gama privada de endereços IPv4 e atribuir qualquer endereço situado nesse intervalo.

1. `CTRL + X` para sair do ficheiro de configuração de rede.
2. Carregue na tecla `Y` para gravar as alterações. Depois carregue em `Enter`.
3. Reinicie o seu servidor.
4. Repita todos os passos para os outros servidores e atribua-lhes um endereço IP único pertencente ao seu intervalo interno. Depois disto, os seus servidores poderão comunicar entre si na rede privada.


#### Ubuntu Server 16

Abra o ficheiro de configuração da interface de rede com o comando a seguir:

```sh
vi /etc/network/interfaces
```

Carregue na tecla `I` do teclado para passar para o modo de inserção.

Configure a interface de rede secundária da seguinte forma:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

No exemplo acima, pode optar por utilizar qualquer gama privada de endereços IPv4 e atribuir qualquer endereço situado nesse intervalo.

1. Carregue na tecla `ESC`.
2. Carregue na tecla `SHIFT` e na tecla *dois pontos* para abrir o editor.
3. Introduza `wq`.
4. Carregue na tecla `Enter`.
5. Reinicie o seu servidor.
6. Repita todos os passos para os outros servidores e atribua-lhes um endereço IP único pertencente ao seu intervalo interno. Depois disto, os seus servidores poderão comunicar entre si na rede privada.


#### Ubuntu Server 17

Abra o ficheiro de configuração da interface de rede com o comando a seguir:

```sh
nano /etc/network/interfaces
```

Configure a interface de rede secundária da seguinte forma:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

No exemplo acima, pode optar por utilizar qualquer gama privada de endereços IPv4 e atribuir qualquer endereço situado nesse intervalo.

1. `CTRL + X` para sair do ficheiro de configuração de rede.
2. Carregue na tecla `Y` para gravar as alterações. Depois carregue em `Enter`.
3. Reinicie o seu servidor.
4. Repita os passos 1 a 5 para os outros servidores e atribua-lhes um endereço IP único pertencente ao seu intervalo interno. Depois disto, os seus servidores poderão comunicar entre si na rede privada.


#### Windows

A título de exemplo, utilizaremos o intervalo de endereços IP internos de *192.168.0.0/16*.

Eis os passos a seguir:

- Conecte-se ao servidor Windows através da Área de Trabalho remota.
- Clique em `Start`{.action}.
- Clique em `Control Panel`{.action}.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

- Clique em `Network and Internet`{.action}.

![Network and Internet](images/windows_network_and_internet.png){.thumbnail}

- Clique em `Network and Internet`{.action}.

![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}

- Clique em `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

- Faça um clique com o botão direito do rato por cima da interface de rede secundária.

- Clique em `Properties`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

- Faça dois cliques em `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IPv4)](images/windows_ipv4.png){.thumbnail}

- Clique em `Use the following IP address`:

    - para `IP address`\: introduza um endereço IP do seu intervalo interno;
    - para `Subnet mask`\: introduza 255.255.0.0.

![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}

-  Clique em `OK`{.action} para gravar as alterações.
- Reinicie o seu servidor.
- Repita todos os passos para os outros servidores e atribua-lhes um endereço IP único pertencente ao seu intervalo interno. Depois disto, os seus servidores poderão comunicar entre si na rede privada.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.