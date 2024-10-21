---
title: 'Configurar um endereço de IP alias'
excerpt: 'Saiba como adicionar endereços Additional IP à sua configuração VPS'
updated: 2024-04-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não afeta as suas funcionalidades.
>

## Objetivo

O alias de IP (*IP aliasing* em inglês) é uma configuração especial da rede para os seus servidores OVHcloud, que lhe permite associar vários endereços IP numa única interface de rede.

**Este guia explica como adicionar endereços Additional IP à sua configuração de rede.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços que são da sua responsabilidade. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou tiver dúvidas relativamente à administração, à utilização ou à segurança de um servidor, deverá contactar um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/). Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
>

## Requisitos

- Ter uma oferta [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- Dispor de um [endereço Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/)
- Ter um acesso administrador (sudo) via SSH ou GUI no seu servidor
- Ter conhecimentos básicos sobre as redes e a sua administração

## Instruções

Este guia contém as configurações das distribuições/sistemas operativos mais frequentemente utilizados. A primeira etapa consiste sempre em ligar-se ao seu servidor através de SSH ou através de uma sessão de ligação à interface gráfica de utilizador (RDP para um VPS Windows). Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações elevadas (Administrador/Sudo).

> [!primary]
>
No que diz respeito às diferentes versões de distribuições, tenha em conta que o procedimento adequado para configurar a sua interface de rede, bem como os nomes de ficheiros, podem ter sido alterados. Se encontrar dificuldades, recomendamos que consulte a documentação relativa ao seu sistema operativo.
>

**Queira tomar nota da seguinte terminologia que será utilizada nos exemplos de código e as instruções detalhadas neste guia:**

|Termo|Descrição|Exemplos|
|---|---|---|
|ADDITIONAL_IP|Endereço IP de Additional IP atribuído ao seu serviço|203.0.113.0|
|NETWORK_INTERFACE|Nome da interface de rede|*eth0*, *ens3*|
|ID|ID do alias IP, começando por *0* (em função do número de endereços IP suplementares a configurar)|*0*, *1*|

### Debian 10/11

#### Etapa 1: desativar a configuração automática da rede

Abra o caminho de acesso ao seguinte ficheiro com um editor de texto:

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Introduza a linha seguinte e registe e saia do editor.

```console
network: {config: disabled}
```

A criação deste ficheiro de configuração impede a execução automática das modificações efetuadas na configuração da sua rede.

#### Etapa 2: criar um backup

Por predefinição, o ficheiro de configuração está localizado no caminho `etc/network/interfaces.d`.

No nosso exemplo, o nosso ficheiro chama-se `50-cloud-init`, pelo que fazemos uma cópia do ficheiro `50-cloud-init` utilizando o seguinte comando:

```bash
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

Em caso de erro, poderá voltar às modificações utilizando os comandos abaixo :

```bash
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### Etapa 3: alterar o ficheiro de configuração de rede

Para verificar o nome da interface de rede, utilize o seguinte comando:

```bash
ip a
```

Abra o ficheiro de configuração de rede para o modificar através do seguinte comando:

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Para configurar o seu endereço Additional IP, adicione uma interface virtual ou um alias Ethernet à sua interface de rede. No nosso exemplo, a nossa interface chama-se `eth0`, pelo que o nosso primeiro alias é `eth0:0`. Faça isso para cada endereço Additional IP que deseja configurar.

Não altere as linhas existentes no ficheiro de configuração. Adicione apenas o seu endereço Additional IP ao ficheiro da seguinte forma, substituindo `NETWORK_INTERFACE`, `ID` e `ADDITIONAL_IP` pelos seus próprios valores:

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Se configurar mais do que um endereço Additional IP, o ficheiro de configuração deve ter o seguinte formato:

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP1
address ADDITIONAL_IP2
netmask 255.255.255.255
```

#### Etapa 4: reiniciar a interface

Execute as alterações através do seguinte comando:

```bash
sudo systemctl restart networking
```

### Debian 12, Ubuntu 20.04 e posteriores

O ficheiro de configuração dos seus endereços Additional IP encontra-se no ficheiro `/etc/netplan/`. Neste exemplo, chama-se `50-cloud-init.yaml`.

A melhor prática consiste em criar um ficheiro de configuração distinto para definir os endereços Additional IP. Desta forma, poderá facilmente reverter as alterações em caso de erro.

#### Etapa 1: criar o ficheiro de configuração de rede

No nosso exemplo, o nosso ficheiro chama-se `51-cloud-init.yaml`:

```bash
sudo touch /etc/netplan/51-cloud-init.yaml
```

#### Etapa 2: modificar o ficheiro de configuração

Para verificar o nome da interface de rede, utilize o seguinte comando:

```bash
ip a
```

Abra o ficheiro de configuração de rede para o modificar através do seguinte comando:

```bash
sudo nano /etc/netplan/51-cloud-init.yaml
```

Edite o ficheiro com o conteúdo abaixo, substituindo `INTERFACE_NAME` e `ADDITIONAL_IP` pelos seus próprios valores:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP/32
```

Se tiver mais do que um endereço Additional IP a configurar, o ficheiro de configuração deve ter o seguinte formato:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP1/32
           - ADDITIONAL_IP2/32
```

> [!warning]
>
> É importante respeitar o alinhamento de cada elemento deste ficheiro tal como representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento.
>

**Exemplo**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.0/32
```

Registe e feche o ficheiro.

#### Etapa 3: aplicar a nova configuração de rede

Pode testar a sua configuração através do seguinte comando:

```bash
sudo netplan try
```

Se a configuração estiver correta, execute-a através do seguinte comando:

```bash
sudo netplan apply
```

Repita este procedimento para cada endereço Additional IP.

### CentOS 7, AlmaLinux (8 & 9), Rocky Linux (8 & 9)

O ficheiro de configuração principal está situado na pasta `/etc/sysconfig/network-scripts/`. Neste exemplo, é chamado `ifcfg-eth0`. Antes de fazer qualquer alteração, verifique o nome real do arquivo nessa pasta.

Para cada endereço Additional IP a configurar, crie um ficheiro de configuração separado com os seguintes parâmetros: `ifcfg-NETWORK_INTERFACE:ID`. Onde "NETWORK_INTERFACE" representa a interface física, "ID" representa a interface de rede virtual ou o alias ethernet que começa por um valor de 0. Por exemplo, para a nossa interface chamada `eth0` o primeiro alias é `eth0:0`, o segundo alias é `eth0:1`, etc.

#### Etapa 1: determinar a interface

Verifique o nome da sua interface de rede através do seguinte comando:

```bash
ip a
```

#### Etapa 2: criar o ficheiro de configuração

Em primeiro lugar, crie o ficheiro de configuração. Substitua `NETWORK_INTERFACE:ID` pelos seus próprios valores.

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

De seguida, edite o ficheiro com o conteúdo abaixo, substituindo `NETWORK_INTERFACE:ID` e `ADDITIONAL_IP` pelos seus próprios valores:

```console
DEVICE=NETWORK_INTERFACE:ID
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
```

**Exemplo**

```console
DEVICE=eth0:0
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=203.0.113.0
NETMASK=255.255.255.255
BROADCAST=203.0.113.0
```

#### Etapa 3: reiniciar a interface

```bash
sudo systemctl restart network
```

#### Para AlmaLinux e Rocky Linux

```bash
sudo systemctl restart NetworkManager
```

### Fedora 37 e versões posteriores

O Fedora utiliza agora ficheiros-chave. Antes, o NetworkManager armazenava os perfis de rede em formato ifcfg nesse diretório: `/etc/sysconfig/network-scripts/`. No entanto, o formato ifcfg tornou-se obsoleto. Por predefinição, o NetworkManager não cria novos perfis neste formato. O ficheiro de configuração encontra-se agora em `/etc/NetworkManager/system-connections/`.

#### Etapa 1: criar um backup

No nosso exemplo, o nosso ficheiro chama-se `cloud-init-eno1.nmconnection`, pelo que fazemos uma cópia do ficheiro `cloud-init-eno1.nmconnection` utilizando o seguinte comando:

```bash
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

Em caso de erro, poderá voltar às modificações utilizando os comandos abaixo :

```bash
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### Etapa 2: alterar o ficheiro de configuração

> [!primary]
> Tenha em conta que o nome do ficheiro de rede no nosso exemplo pode ser diferente do seu. Adapte os comandos ao seu nome de ficheiro.
>

```bash
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Não altere as linhas existentes no ficheiro de configuração. Adicione o seu Additional IP ao ficheiro da seguinte forma, substituindo `ADDITIONAL_IP/32` pelos seus próprios valores:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Se tiver dois endereços Additional IP a configurar, a configuração deve ser semelhante a esta:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Exemplo**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.0/32
```

#### Etapa 3: reiniciar a interface

```bash
sudo systemctl restart NetworkManager
```

### cPanel

#### Etapa 1: aceder à secção de gestão dos IP do WHM

Na Área de Cliente WHM, clique em `IP Functions`{.action} e selecione `Add a New IP Address`{.action} no menu à esquerda.

![Add new IP](images/cpanel-alma-1.png){.thumbnail}

#### Etapa 2: adicionar as informações dos Additional IP

Introduza o seu endereço Additional IP na forma "xxx.xxx.xxx.xxx" no campo "New IP or IP range to add".

Selecione `255.255.255.255` como máscara de sub-rede e clique em `Submit`{.action}.

![enter new IP information](images/cpanel-alma-2.png){.thumbnail}

> [!warning]
>
> Atenção: se tiver vários IP a configurar num mesmo bloco e os adicionar todos ao mesmo tempo, o sistema WHM obriga-o a utilizar a máscara de sub-rede `255.255.255.0`. Não é recomendado utilizar esta configuração, é preciso adicionar cada IP individualmente para poder utilizar a máscara de sub-rede apropriada `255.255.255.255`.
>

#### Etapa 3: verificar a configuração IP atual

De volta à secção `IP Functions`{.action}, clique em `Show or Delete Current IP Addresses`{.action} para verificar se o endereço Additional IP foi corretamente adicionado.

![check configured IP](images/cpanel-alma-3.png){.thumbnail}

### Plesk

#### Etapa 1: aceder à gestão do IP do Plesk

No painel de configuração Plesk, selecione `Tools & Settings`{.action} na barra lateral esquerda.

![acces to the ip addresses management](images/pleskip1.png){.thumbnail}

Clique em `IP Addresses`{.action} em **Tools & Settings**.

#### Etapa 2: adicionar as informações dos Additional IP

Nesta secção, clique no botão `Add IP Address`{.action}.

![add ip information](images/Plesk-2024-vps.png){.thumbnail}

Introduza o seu endereço Additional IP sob a forma `xxx.xxx.xxx.xxx/32` no campo "IP address and subnet mask" e, em seguida, clique em `OK`{.action}.

![add ip information](images/Plesk-additional-ip.png){.thumbnail}

#### Etapa 3: verificar a configuração IP atual

Na secção "IP Addresses", verifique se o endereço Additional IP foi adicionado com êxito.

![current IP configuration](images/plesk-final-configuration.png){.thumbnail}

### Windows Server

#### Etapa 1: verificar a configuração de rede

Clique com o botão `Start Menu`{.action} e abra a `Run`{.action}.

Introduza `cmd` e clique em `OK`{.action} para abrir a aplicação de linha de comando.

![cmdprompt](images/vps_win07.png){.thumbnail}

Para obter a configuração IP atual, insira o `ipconfig` na encomenda.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . : openstacklocal
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

#### Etapa 2: modificar as propriedades IPv4

1. Aceda ao menu `Start`{.action} e depois ao `Control Panel`{.action}, `Network and Internet`{.action}, `Network and Sharing Centre`{.action} e `Change Adapter Settings`{.action} na barra à esquerda.
2. Clique com o botão direito do rato em `Ethernet`{.action}
3. Clique em `Properties`{.action}
4. Selecione `Internet Protocol Version 4 (TCP/IPv4)`{.action} e clique em `Properties`{.action};
5. Clique em `Use the following IP address`{.action} e digite o IP principal do seu servidor, a máscara de sub-rede e o gateway padrão obtidos com o comando `ipconfig`{.action} acima. Na caixa "Preferred DNS Server", digite `213.186.33.99`.

![change the ip configuration](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Atenção: se introduzir informação incorreta, o servidor ficará inacessível. Será obrigado a efetuar as correções através do KVM.
>

#### Etapa 3: adicionar o endereço Additional IP nos Parâmetros TCP/IP avançados

Na nova janela, clique em `Add...`{.action} em "IP addresses". Introduza o seu endereço Additional IP e a máscara de sub-rede (255.255.255.255).

![advance configuration section](images/configure-additional-ip.png){.thumbnail}

Confirme ao clicar em `Add`{.action}.

![Additional IP configuration](images/additional-ip-config.png){.thumbnail}

Uma vez concluído, clique em `OK`{.action} para aplicar a configuração.

![Additional IP configuration](images/final-configuration.png){.thumbnail}

A ligação ao seu servidor será interrompida durante alguns segundos.

#### Etapa 4: verificar a nova configuração de rede

Abra a linha de comandos (cmd) e introduza o `ipconfig`. A configuração deve agora incluir o novo endereço Additional IP.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   IPv4 Address. . . . . . . . . . . : 203.0.113.0
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

### Diagnóstico

Em primeiro lugar, reinicie o seu servidor através da linha de comando ou da interface de utilizador. Se ainda não consegue estabelecer uma ligação entre a rede pública e o seu endereço IP de alias e suspeitar de um problema de rede, deve reiniciar o servidor em [modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue). De seguida, pode configurar o endereço Additional IP diretamente no servidor.

Uma vez ligado ao servidor por SSH, insira o seguinte comando:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Para testar a ligação, basta enviar um ping ao seu endereço Additional IP a partir do exterior. Se ele responder em modo de rescue, isso provavelmente significa que existe um erro de configuração. No entanto, se o IP ainda não funcionar, queira informar as nossas equipas de suporte criando um [ticket de assistência a partir](https://help.ovhcloud.com/csm?id=csm_get_help).
 
## Quer saber mais?

[Ativar o modo rescue num VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.