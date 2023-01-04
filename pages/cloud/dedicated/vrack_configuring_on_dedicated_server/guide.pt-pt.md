---
title: 'Configurar vários servidores dedicados no vRack'
slug: configurar-varios-servidores-dedicados-no-vrack
excerpt: 'Aprenda a configurar vários servidores dedicados graças ao vRack'
section: vRack
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização no dia 02/05/2022**

## Objetivo

O vRack (rack virtual) da OVHcloud permite agrupar virtualmente vários servidores (independentemente do seu número e da sua localização física nos nossos datacenters) e ligá-los a um switch virtual dentro da mesma rede privada. Desta forma, os seus servidores podem comunicar de forma privada e segura entre eles, no seio de uma VLAN dedicada.

**Saiba como configurar o vRack em vários servidores dedicados.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Um serviço [vRack](https://www.ovh.pt/solucoes/vrack/) ativado na sua conta
- Vários [servidores dedicados](https://www.ovhcloud.com/pt/bare-metal/) (compatíveis com vRack)
- Dispor de um acesso de administrador (root) ao servidor através de SSH ou RDP
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Preparar o intervalo de endereços IP privados que escolheu

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

## Instruções

### Etapa 1: encomendar o vrack

Une fois connecté à votre espace client OVHcloud, rendez-vous dans le menu `Bare Metal Cloud`{.action} et cliquez sur le bouton `Commander`{.action}. Sous ce menu, cliquez sur `vRack`{.action}.

### Etapa 2: adicionar os seus servidores ao vRack

Depois de ativar o vRack na sua conta, aceda à secção `Bare Metal Cloud`{.action} da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), clique em `Network`{.action} e abra o menu `vRack`{.action}.

Selecione o seu vRack na lista para apresentar a lista dos serviços elegíveis. Clique em cada um dos servidores que deseja adicionar ao vRack e, a seguir, em `Adicionar`{.action}.

![Escolha do vRack](images/vrack_selection.png){.thumbnail}

### Etapa 3: configuração das suas interfaces de rede

As etapas seguintes contêm as configurações das distribuições/sistemas operativos recentes mais frequentemente utilizadas. A primeira etapa consiste sempre em [ligar-se ao seu servidor](https://docs.ovh.com/pt/dedicated/primeiros-passos-servidor-dedicado/) em SSH ou em sessão RDP (para Windows). Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações elevadas (Administrador/sudo).

> [!primary]
>
Relativamente às diferentes distribuições, saiba que o procedimento a seguir para configurar a sua interface de rede, bem como os nomes de ficheiros, podem ter sofrido alterações. Se encontrar dificuldades, recomendamos que consulte os manuais e as bases de conhecimentos das respetivas versões do sistema operativo.
>
Por exemplo, os detalhes de configuração abaixo terão o endereço IP `192.168.0.0/16` (**Máscara de sub-rede**: `255.255.0.0`).
>
Pode utilizar qualquer intervalo de IP privados à sua escolha e qualquer endereço nesta praia.
>

#### Configurações GNU/Linux

Os nomes das interfaces de rede dos seus servidores nem sempre são os mesmos. Nos exemplos abaixo, substitua NETWORK_INTERFACE pelo nome de interface adequado.

A melhor forma de verificar a interface correta para o vRack é verificar o separador `Interfaces de rede`{.action} do seu servidor na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Na tabela abaixo, tome nota do endereço MAC, que é também o **nome** da interface **Privada**.

![Interface vRack](images/private_interface.png){.thumbnail}

Depois de aceder ao servidor através de SSH, pode listar as suas interfaces de rede com o seguinte comando:

```bash
ip a
```

Na linha que começa por ```link ether```, pode verificar que esta interface corresponde à interface **Private** indicada na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Utilize este nome de interface para substituir `NETWORK_INTERFACE` nas configurações abaixo (exemplo: `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

##### **Debian**

Num editor de texto, abra o ficheiro de configuração de rede situado em `/etc/network/interfaces.d` para o alterar. Aqui, o ficheiro chama-se `50-cloud-init`.

```bash
editor /etc/network/interfaces.d/50-cloud-init
```

Adicione as seguintes linhas:

```console
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE
address 192.168.0.1
netmask 255.255.0.0
```

Registe as suas modificações no ficheiro de configuração e saia do editor.

Reinicie o serviço de rede para aplicar a configuração:

```bash
systemctl restart networking
```

Repita este procedimento para os seus outros servidores e atribua a cada um deles um endereço IP não utilizado a partir do seu intervalo privado. A partir daí, os seus servidores poderão comunicar entre si na rede privada.

##### **Ubuntu**

Com a ajuda do editor de texto à sua escolha, abra o ficheiro de configuração de rede que se encontra em `/etc/netplan/` para o editar. Aqui, o ficheiro chama-se `50-cloud-init.yaml`.

```bash
editor /etc/netplan/50-cloud-init.yaml
```

Adicione a configuração IP à configuração existente após a linha `ethernets`:

```yaml
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: no
            addresses:
              - 192.168.0.1/16
```

> [!warning]
>
> É importante respeitar o alinhamento de cada elemento nos ficheiros `yaml`, como representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento. Só deve ser utilizada a tecla de espaço.
>

Registe as suas modificações no ficheiro de configuração e saia do editor.

Aplicar a configuração:

```bash
netplan apply
```

Repita este procedimento para os seus outros servidores e atribua a cada um deles um endereço IP não utilizado a partir do seu intervalo privado. A partir daí, os seus servidores poderão comunicar entre si na rede privada.

##### **CentOS**

Com a ajuda do editor de texto à sua escolha, abra o ficheiro `/etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE`.

```bash
editor /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
```

Adicionar estas linhas:

```console
DEVICE=NETWORK_INTERFACE
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Registe as suas modificações no ficheiro de configuração e saia do editor.

Reinicie o serviço de rede para aplicar as modificações:

```bash
systemctl restart networking
```

Em **CentOS 8**, utilize este comando:

```bash
systemctl restart NetworkManager.service
```

Repita este procedimento para os seus outros servidores e atribua a cada um deles um endereço IP não utilizado a partir do seu intervalo privado. A partir daí, os seus servidores poderão comunicar entre si na rede privada.

#### Configuração Windows

A título de exemplo, as seguintes configurações utilizarão o intervalo de endereços IP de `192.168.0.0/16` (**Máscara de sub-rede**: `255.255.0.0`).

Ligue-se ao seu servidor Windows através do ambiente de trabalho remoto e entre no **Painel de configuração**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Clique em `Network and Internet`{.action}.

![Rede e Internet](images/windows_network_and_internet.png){.thumbnail}

Abra `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}

Clique em `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

clique com o botão direito do rato na interface de rede secundária e clique em `Propriedades`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Clique duas vezes em `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IPv4)](images/windows_ipv4.png){.thumbnail}

Clique em **Utilizar o seguinte** endereço de IP. Introduza qualquer endereço **IP** da sua praia privada e a **máscara** de sub-rede adequada (`255.255.0.0` neste exemplo) no campo correspondente.

![Utilizar o seguinte endereço IP](images/windows_use_following_ip_address.png){.thumbnail}

Clique em `OK`{.action} para guardar as modificações e reinicie o seu servidor para as aplicar.

Repita este procedimento para os seus outros servidores e atribua a cada um deles um endereço IP não utilizado a partir do seu intervalo privado. A partir daí, os seus servidores poderão comunicar entre si na rede privada.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.