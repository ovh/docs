---
title: Como configurar um IP alias
excerpt: Descubra como adicionar endereços Additional IP à configuração de rede
updated: 2024-03-25
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](/links/network/additional-ip). Isto não afeta as suas funcionalidades.
>

## Objetivo

O IP aliasing é uma configuração de rede para servidores dedicados que permite associar vários endereços IP à mesma interface de rede.

**Este guia explica como realizar o IP aliasing**

> [!warning]
>
> A OVHcloud oferece-lhe serviços pelos quais é responsável. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar dificuldades ou dúvidas relativamente à administração, à utilização ou à segurança de um servidor, deverá contactar um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/). Mais informações na secção « Ir mais longe » deste guia.
>

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal){.external}.
- Dispor de um ou vários endereços [Additional IP](/links/network/additional-ip){.external}.
- Estar ligado ao servidor usando o protocolo SSH.

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

## Instruções

As secções seguintes contêm as configurações das distribuições que disponibilizamos atualmente e as distribuições/sistemas operativos mais utilizados. O primeiro passo consiste sempre em estabelecer a ligação ao servidor em SSH ou através de uma sessão de ligação GUI (RDP para um servidor Windows).

> [!primary]
>
> Se pretender utilizar uma distribuição recente, poderá ser necessário fazer adaptações para configurar a sua interface de rede. Se encontrar dificuldades, recomendamos que consulte a documentação relativa ao seu sistema operativo.
>

**Tenha em atenção a seguinte terminologia que será utilizada nos exemplos de código e nas instruções das secções do guia abaixo:**

|Termo|Descrição|Exemplos|
|---|---|---|
|ADDITIONAL_IP|Endereço IP adicional atribuído ao seu serviço|203.0.113.1|
|NETWORK_INTERFACE|Nome da interface de rede|*eth0*, *ens3*|
|ID|ID do alias IP, que começa por *0* (em função do número de IP suplementares a configurar)|*0*, *1*|

Nos exemplos abaixo, utilizaremos o editor de texto `nano`. Para alguns sistemas operativos, primeiro é necessário instalá-lo antes de o utilizar. Se for o caso, ser-lhe-á pedido que o faça. Pode, claro, utilizar o editor de texto que preferir.

### Debian 10/11

Por predefinição, o ficheiro de configuração está situado em `/etc/network/interfaces.d/`. Recomendamos começar por realizar uma cópia de segurança do ficheiro de configuração correspondente.

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

No nosso exemplo, o nosso ficheiro chama-se `50-cloud-init`, pelo que copiamos o ficheiro `50-cloud-init` utilizando o seguinte comando:

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

Em caso de erro, poderá então reverter a operação através dos seguintes comandos:

```bash
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### 2 - Editar o ficheiro de configuração

> [!primary]
>
> Os nomes das interfaces de rede indicados neste manual podem ser diferentes dos seus. Adapte as operações em conformidade.
>

Já pode modificar o ficheiro de configuração:


```sh
sudo nano /etc/network/interfaces.d/50-cloud-init
```

De seguida, deverá adicionar uma interface virtual ou um alias ethernet. No nosso exemplo, a nossa interface chama-se `eth0`, pelo que o nosso alias é `eth0:0`. Faça isso para cada endereço Additional IP que deseja configurar.

Não modifique as linhas existentes no ficheiro de configuração. Adicione simplesmente o seu Additional IP ao ficheiro como indicado abaixo, substituindo `ADDITIONAL_IP/32` assim como a interface virtual (se o seu servidor não utilizar **eth0:0**) pelos seus próprios valores:

```console
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Também pode configurar o seu Additional IP adicionando as seguintes linhas ao ficheiro de configuração:

```console
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

Com a configuração acima, a interface virtual é ativada ou desativada sempre que a interface `eth0` é ativada ou desativada.

Se tem dois Additional IP a configurar, o ficheiro `/etc/network/interfaces.d/50-cloud-init` deve ter o seguinte formato:

```console
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
netmask 255.255.255.255
```

Ou assim:

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```

**Exemplo de configuração:**

```console
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address 203.0.113.1
netmask 255.255.255.255
```

Ou:

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 203.0.113.1 netmask 255.255.255.255 broadcast 203.0.113.1
pre-down /sbin/ifconfig eth0:0 down
```

#### 3 - Reiniciar a interface de rede

Agora, execute este comando para reiniciar a interface:

```sh
sudo /etc/init.d/networking restart
```

### Fedora 38 e versões posteriores

Fedora utiliza agora ficheiros chave (*keyfiles*).
Fedora utilizava anteriormente perfis de rede armazenados pela NetworkManager no formato ifcfg no diretório `/etc/sysconfig/network-scripts/`.<br>
Uma vez que o ifcfg se encontra agora em imparidade, NetworkManager não cria de forma padrão os novos perfis neste formato. O ficheiro de configuração encontra-se agora no `/etc/NetworkManager/system-connections/`.

#### 1 - Fazer cópia do ficheiro de configuração (*source file*)

> [!primary]
>
> Tenha em atenção que o nome do ficheiro de rede no nosso exemplo pode ser diferente do seu. Adapte os exemplos com o nome apropriado.
>

Recomendamos começar por realizar uma cópia de segurança do ficheiro de configuração correspondente. No nosso exemplo, o nosso ficheiro de configuração chama-se `cloud-init-eno1.nmconnection`:

```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

Em caso de erro, poderá então reverter a operação através dos seguintes comandos:

```sh
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### 2 - Editar o ficheiro de configuração

> [!primary]
> Tenha em conta que o nome do ficheiro de rede no nosso exemplo pode ser diferente do seu. Adapte os comandos ao seu nome de ficheiro.
>

Para obter o nome da interface de rede para editar o ficheiro de rede adequado, pode executar um dos seguintes comandos:

```sh
ip a
```

```sh
nmcli connection show
```

Não altere as linhas existentes no ficheiro de configuração. Adicione o seu Additional IP ao ficheiro da seguinte forma, substituindo `ADDITIONAL_IP/32` pelos seus próprios valores:

```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Se tem dois endereços Additional IP a configurar, o ficheiro de configuração deverá ser o seguinte:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Exemplo de configuração:**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.1/32
```

#### 3 - Reiniciar a interface

Agora, reinicie a sua interface:

```sh
sudo systemctl restart NetworkManager
```

### Debian 12, Ubuntu 20.04 e versões seguintes

Por padrão, os arquivos de configuração estão localizados no diretório `/etc/netplan`.

A melhor abordagem é criar um ficheiro de configuração separado para configurar os endereços Additional IP. Isto permite um retrocesso fácil em caso de erro.

#### 1 - Determinar a interface

```sh
ip a
```

Anote o nome da interface (a interface na qual está configurado o endereço IP principal do servidor).

#### 2 - Criar o ficheiro de configuração

De seguida, crie um ficheiro de configuração com uma extensão `.yaml`. No nosso exemplo, o nosso ficheiro chama-se `51-cloud-init.yaml`.

```sh
sudo nano /etc/netplan/50-cloud-init.yaml
```

De seguida, edite o ficheiro com o conteúdo abaixo, substituindo `INTERFACE_NAME` e `ADDITIONAL_IP` pelos seus próprios valores:

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

Se tiver dois endereços Additional IP a configurar, o ficheiro de configuração deve ter o seguinte formato:


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
> É importante respeitar o alinhamento de cada elemento deste ficheiro, tal como é representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento. Apenas é necessário tecla de espaço.
>

**Exemplo de configuração:**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.1/32         
```

Guarde e feche o ficheiro. Pode testar a configuração com o seguinte comando:

```sh
sudo netplan try
```

#### 3 - Aplicar a alteração

De seguida, execute os seguintes comandos para aplicar a configuração:

```sh
sudo netplan apply
```

> [!primary]
> Quando utilizar o comando `netplan try`, é possível que o sistema envie uma mensagem de aviso tal como `Permissions for /etc/netplan/xx-cloud-init.yaml are too open. Netplan configuration should NOT be access by others`. Isso simplesmente significa que o arquivo não tem permissões restritivas. Isto não afeta a configuração do seu Additional IP. Para mais informações sobre as permissões dos ficheiros, consulte a [documentação oficial do ubuntu](https://help.ubuntu.com/community/FilePermissions){.external}.
>

### CentOS, AlmaLinux (8 & 9), Rocky Linux (8 & 9)


O ficheiro de configuração principal encontra-se em `/etc/sysconfig/network-scripts/`. No nosso exemplo, é chamado `ifcfg-eth0`. Antes de fazer alterações, verifique o nome real do arquivo nessa pasta.

Para cada Additional IP a configurar, criamos um ficheiro de configuração separado com os seguintes parâmetros: `ifcfg-NETWORK_INTERFACE:ID`. Onde "NETWORK_INTERFACE" representa a interface física e "ID" é a interface de rede virtual ou o alias ethernet que começa por um valor de 0. Por exemplo, para a nossa interface chamada `eth0`, o primeiro alias é `eth0:0`, o segundo alias é `eth0:1`, etc...

#### 1 - Determinar a interface

```sh
ip a
```

Anote o nome da interface (aquela em que o endereço IP principal do seu servidor está configurado).

#### 2 - Criar o ficheiro de configuração


Comece por criar o ficheiro de configuração. Substitua `NETWORK_INTERFACE:ID` pelos seus próprios valores.

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

De seguida, modifique o ficheiro com o conteúdo abaixo, substituindo `NETWORK_INTERFACE:ID` e `ADDITIONAL_IP` pelos seus próprios valores:

```console
DEVICE=NETWORK_INTERFACE:ID
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
```

**Exemplo de configuração:**

```console
DEVICE=eth0:0
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=203.0.113.1
NETMASK=255.255.255.255
BROADCAST=203.0.113.1
```

#### 3 - Reiniciar a interface alias

De seguida, reinicie a sua interface alias. Substitua `eth0:0` pelos seus próprios valores:

```sh
ifup eth0:0
```

#### Para AlmaLinux e Rocky Linux

Execute este comando para reiniciar a interface:

```sh
sudo systemctl restart NetworkManager
```

### cPanel

#### 1 - Aceder à secção gestão IP da WHM

Na Área de Cliente WHM, clique em `IP Functions`{.action} e selecione `Add a New IP Address`{.action} no menu à esquerda.

![Adicionar um novo endereço IP](images/Cpanel-1.png){.thumbnail}

#### 2 - Adicionar as informações dos Adicionais IP

Insira o seu endereço Additional IP sob a forma "xxx.xxx.xxx.xxx" no campo "New IP or IP range to add".

Selecione `255.255.255.255` como máscara de sub-rede e clique em `Submit`{.action}.

![indicar novas informações sobre o novo endereço IP](images/Cpanel-2024.png){.thumbnail}

> [!warning]
>
> Atenção: se tiver vários endereços IP a configurar num bloco e os adicionar ao mesmo tempo, o sistema WHM irá obrigar-lo a utilizar a máscara de sub-rede `255.255.255.0`.Não é recomendado que utilize esta configuração, deve adicionar cada IP individualmente para utilizar a máscara de sub-rede apropriada `255.255.255.255`.
>

#### 3 - Verificar a configuração IP atual

De volta para a secção `IP Functions`{.action}, clique em `Show or Delete Current IPs`{.action} para verificar que o endereço Additional IP foi corretamente adicionado.

![check configurgured IP](images/Cpanel-2024-1.png){.thumbnail}

### Windows Server

Os servidores Windows costumam usar a configuração de rede DHCP (configuração predefinida). Caso tenha configurado um Additional IP ou alterado a configuração para usar um IP fixo, ignore esta etapa.

Se não, tem que alterar a configuração de rede para usar IP fixo em vez da configuração DHCP.

Abra a linha de comando `cmd`{.action} ou o `powershell`{.action} e introduza este comando:

```powershell
ipconfig
```

A seguir, irá visualizar a seguinte informação:

![Result of "ipconfig" command](images/ipconfig.png){.thumbnail}

Guarde os dados relativos ao IPv4, à máscara de sub-rede, ao *gateway* predefinido e ao nome da placa de rede.

No nosso exemplo, o IP do servidor é: **192.0.2.28**

Os próximos passos pode ser efetuados através da linha de comandos ou da interface gráfica:

#### Através da linha de comandos (recomendado)

Nos comandos indicados abaixo, deve substituir:

|Comando|Valor|
|---|---|
|NETWORK_ADAPTER| Nome da placa de rede (no nosso exemplo: Local Area Connection)|
|IP_ADDRESS| Endereço IP do servidor (no nosso exemplo: 192.0.2.28)|
|SUBNET_MASK| Máscara de sub-rede (no nosso exemplo: 255.255.255.0)|
|GATEWAY| *Gateway* predefinido (no nosso exemplo: 192.0.2.254)|
|ADDITIONAL_IP| Endereço Additional IP que deseja adicionar|

> [!warning]
>
> Atenção: se introduzir informação incorreta, o servidor ficará inacessível. Neste caso, terá de usar o modo Winrescue ou o KVM para corrigir os dados.
> 

Execute as seguintes ações na linha de comandos:

- Passar para IP fixo

```powershell
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```

- Definir servidor DNS

```powershell
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```
- Adicionar Additional IP

```powershell
netsh interface ipv4 add address "NETWORK_ADAPTER" ADDITIONAL_IP 255.255.255.255
```

O Additional IP está a funcionar.

#### Através da interface gráfica

1. Aceda ao menu `Start`{.action} > `Control Panel`{.action} > `Network and Internet`{.action} > `Network and Sharing Centre`{.action} > `Change Adapter Settings`{.action} (no menu à esquerda).
2. Clique com o botão direito do rato na sua ligação de rede, no nosso exemplo `Ethernet 2`{.action}.
3. Clique em `Properties`{.action}.
4. Selecione o `Internet Protocol Version 4 (TCP/IPv4)`{.action}, e clique em `Properties`{.action}.
5. Clique em `Use the following IP address`{.action} e introduza o IP principal do servidor, a máscara de sub-rede e o *gateway* predefinido, apresentados após a execução do comando `ipconfig`{.action} (ver exemplo acima). Em `Preferred DNS Server`, introduza 213.186.33.99.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

> [!warning]
>
> Atenção: se introduzir informação incorreta, o servidor ficará inacessível. Será obrigado a efetuar as correções em modo [WinRescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode#windows) ou através do [KVM](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
> 

Depois, clique em `Advanced`{.action} (nas `TCP/IP Settings`{.action}).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/configure-main-ip-1.png){.thumbnail}

Na parte `IP Address`{.action}, clique em `Add`{.action}:

![Advanced TCP/IPv4 Settings](images/add-additional-ip.png){.thumbnail}

Introduza o Additional IP e a máscara de sub-rede **255.255.255.255**. Em seguida, clique em `Add`{.action}.

![TCP/IP Address](images/configure-additional-ip.png){.thumbnail}

Clique em `OK`{.action} para validar a sua configuração.

O seu Additional IP está agora funcional, pode verificar a configuração com o seguinte comando:

```powershell
ipconfig
```

Terá um resultado semelhante ao seguinte exemplo:

![Final configuration](images/final-ip-configuration.png){.thumbnail}


### Plesk

#### Etapa 1: aceder à gestão de IP do Plesk

No painel de configuração Plesk, selecione `Tools & Settings`{.action} na barra lateral esquerda.

![acesso à gestão dos endereços IP](images/pleskip1.png){.thumbnail}

Clique em `IP Addresses`{.action} em **Tools & Settings**.

#### Etapa 2: adicionar informações IP suplementares

Nesta secção, clique no botão `Add IP Address`{.action}.

![adicionar informações IP](images/Plesk-2024.png){.thumbnail}

Introduza o seu endereço Additional IP sob a forma `xxx.xxx.xxx.xxx/32` no campo "IP address and subnet mask", e clique em `OK`{.action}.

![adicionar informações IP](images/Plesk-2024-1.png){.thumbnail}

#### Etapa 3: verificar a configuração IP atual

Na secção "IP Addresses", verifique se o endereço Additional IP foi adicionado corretamente.

![configuração IP atual](images/Plesk-2024-2.png){.thumbnail}


### Resolução das deficiências

Se não conseguir estabelecer uma ligação entre a rede pública e o seu alias IP e suspeitar de um problema de rede, reinicie o servidor em [modo rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) e configure o alias diretamente no servidor.

Para isso, execute o seguinte comando depois de reiniciar o servidor em modo rescue:

```sh
ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Onde irá substituir "ADDITIONAL_IP" pelo verdadeiro Additional IP.

De seguida,efetuar um ping a partir do seu Additional IP para o exterior. Se isso funcionar, provavelmente significa que há um erro de configuração que precisa ser corrigido. Se, pelo contrário, o endereço IP não funcionar, abra um ticket junto da equipa de assistência através do [Centro de Ajuda da OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help){.external} com as seguintes informações:

- O nome e a versão do sistema operativo que utiliza no seu servidor.
- Nome e diretório do ficheiro de configuração de rede.
- O conteúdo deste ficheiro.

## Quer saber mais?

[Modo bridge IP](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.