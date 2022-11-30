---
title: 'Configurar um endereço de IP alias'
slug: ip-aliasing-vps
excerpt: 'Saiba como adicionar endereços Additional IP à sua configuração VPS'
section: 'Rede e IP'
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 06/10/2022**

> [!primary]
>
> A partir de 6 de outubro de 2022, a nossa solução "Failover IP" passou a designar-se [Additional IP](https://www.ovhcloud.com/pt/network/additional-ip/). Isto não afeta as suas funcionalidades nem o funcionamento dos seus serviços.
>

## Objetivo

O alias de IP (*IP aliasing* em inglês) é uma configuração especial da rede para os seus servidores OVHcloud, que lhe permite associar vários endereços IP numa única interface de rede.

**Este guia explica como adicionar endereços Additional IP à sua configuração de rede.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços que são da sua responsabilidade. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
>

## Requisitos

- um [VPS](https://www.ovhcloud.com/pt/vps/) na sua conta OVHcloud
- um [endereço Additional IP](https://www.ovhcloud.com/pt/bare-metal/ip/) ou um bloco Additional IP
- um acesso administrador (root) via SSH ou GUI no seu servidor
- conhecimentos básicos sobre as redes e a sua administração


## Instruções

Este guia contém as configurações das distribuições/sistemas operativos mais frequentemente utilizados. A primeira etapa consiste sempre em ligar-se ao seu servidor através de SSH ou através de uma sessão de ligação à interface gráfica de utilizador (RDP para um VPS Windows). Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações elevadas (Administrador/Sudo).

> [!primary]
>
No que diz respeito às diferentes versões de distribuições, tenha em conta que o procedimento adequado para configurar a sua interface de rede, bem como os nomes de ficheiros, podem ter sido alterados. Se encontrar dificuldades, recomendamos que consulte a documentação relativa ao seu sistema operativo.
>

**Queira tomar nota da seguinte terminologia que será utilizada nos exemplos de código e as instruções detalhadas neste guia:**

|Termo|Descrição|Exemplos|
|---|---|---|
|ADDITIONAL_IP|Endereço IP de Additional IP atribuído ao seu serviço|169.254.10.254|
|NETWORK_INTERFACE|Nome da interface de rede|*eth0*, *ens3*|
|ID|ID do alias IP, começando por *0* (em função do número de endereços IP suplementares a configurar)|*0*, *1*|

### Debian 10/11

#### Etapa 1: desativar a configuração automática da rede

Abra o caminho de acesso ao seguinte ficheiro com um editor de texto:

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Introduza a linha seguinte e registe e saia do editor.

```bash
network: {config: disabled}
```

A criação deste ficheiro de configuração impede a execução automática das modificações efetuadas na configuração da sua rede.

#### Etapa 2: alterar o ficheiro de configuração de rede

Para verificar o nome da interface de rede, utilize o seguinte comando:

```bash
ip a
```

Abra o ficheiro de configuração de rede para o modificar através do seguinte comando:

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Adicione as seguintes linhas:

```bash
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID do inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

#### Etapa 3: reiniciar a interface

Execute as alterações através do seguinte comando:

```bash
sudo systemctl restart networking
```

### Ubuntu 20.04

O ficheiro de configuração dos seus endereços Additional IP encontra-se em `/etc/netplan/`. Neste exemplo, chama-se "50-cloud-init.yaml". Antes de efetuar alterações, verifique o nome do ficheiro real nesta pasta. Cada endereço Additional IP necessita da sua própria linha no ficheiro.

#### Etapa 1: desativar a configuração automática da rede

Abra o caminho de acesso ao seguinte ficheiro com um editor de texto:

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Introduza a linha seguinte e registe e saia do editor.

```bash
network: {config: disabled}
```

A criação deste ficheiro de configuração impede a execução automática das modificações efetuadas na configuração da sua rede.

#### Etapa 2: modificar o ficheiro de configuração

Para verificar o nome da interface de rede, utilize o seguinte comando:

```bash
ip a
```

Abra o ficheiro de configuração de rede para o modificar através do seguinte comando:

```bash
sudo nano /etc/netplan/50-cloud-init.yaml
```

Não altere as linhas existentes no ficheiro de configuração. Adicione o seu endereço Additional IP adicionando um segundo bloco de configuração para a interface pública, como no exemplo seguinte:

```yaml
network:
    version: 2
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: NETWORK_INTERFACE            
        NETWORK_INTERFACE:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: NETWORK_INTERFACE
            addresses:
            - ADDITIONAL_IP/32
```

> [!warning]
>
> É importante respeitar o alinhamento de cada elemento deste ficheiro tal como representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento.
>

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

### Windows Server 2016

#### Etapa 1: verificar a configuração de rede

Clique com o botão `Menu Iniciar`{.action} e abra a `Executar`{.action}.

Introduza `cmd` e clique em `OK`{.action} para abrir a aplicação de linha de comando.

![cmdprompt](images/vps_win07.png){.thumbnail}

Para obter a configuração IP atual, insira o `ipconfig` na encomenda.

![verificar a configuração IP principal](images/image1-1.png){.thumbnail}

#### Etapa 2: modificar as propriedades IPv4

Agora deve modificar as propriedades IP para uma configuração estática.

Abra os parâmetros do adaptador no Painel de configuração Windows e abra as `Propriedades`{.action} do `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![alterar a configuração IP](images/image2.png){.thumbnail}

Na janela Propriedades IPv4, selecione `Utilizar o seguinte`{.action} endereço IP. Introduza o endereço IP que recuperou na primeira etapa e clique em `Avançado`{.action}.

#### Etapa 3: adicionar o endereço Additional IP nos Parâmetros TCP/IP avançados

Na nova janela, clique em `Adicionar...`{.action} em "Endereços IP". Introduza o seu endereço Additional IP e a máscara de sub-rede (255.255.255.255).

![secção de configuração avançada](images/image4-4.png){.thumbnail}

Confirme ao clicar em `Adicionar`{.action}.

![Configuração da migração IP](images/image5-5.png){.thumbnail}

#### Etapa 4: reiniciar a interface de rede

De volta ao painel de configuração (`Ligações de rede`{.action}), clique com o botão direito do rato na sua interface de rede e selecione `Desativar`{.action}.

![desativação da rede](images/image6.png){.thumbnail}

Para a reiniciar, clique com o botão direito e selecione a opção `Ativar`{.action}.

![ativação da rede](images/image7.png){.thumbnail}

#### Etapa 5: verificar a nova configuração de rede

Abra a linha de comandos (cmd) e introduza o `ipconfig`. A configuração deve agora incluir o novo endereço Additional IP.

![verificar a configuração de rede atual](images/image8-8.png){.thumbnail}

### cPanel (CentOS 7) / derivados Red Hat

#### Etapa 1: alterar o ficheiro de configuração de rede

Para verificar o nome da interface de rede, utilize o seguinte comando:

```bash
ip a
```

Abra o ficheiro de configuração de rede para o modificar:

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

A seguir, adicione estas linhas:

```bash
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
ONBOOT=yes
```

#### Etapa 2: reiniciar a interface

Execute as alterações através do seguinte comando:

```bash
sudo systemctl restart networking
```

### Plesk

#### Etapa 1: aceder à gestão de IP do Plesk

No painel de configuração Plesk, selecione `Tools & Settings`{.action} na barra lateral esquerda.

![acesso à gestão dos endereços IP](images/pleskip1.png){.thumbnail}

Clique em `IP Endereço`{.action} em **Tools & Settings**.

#### Etapa 2: adicionar informações IP suplementares

Nesta secção, clique no botão `Add IP Address`{.action}.

![adicionar informações IP](images/pleskip2-2.png){.thumbnail}

Introduza o seu endereço IP Additional IP sob a forma `xxx.xxx.xxx.xxx/32` no campo "IP address and subnet mask", e clique em `OK`{.action}.

![adicionar informações IP](images/pleskip3-3.png){.thumbnail}

#### Etapa 3: verificar a configuração IP atual

Na secção "Endereços IP", verifique se o endereço Additional IP foi adicionado corretamente.

![configuração IP atual](images/pleskip4-4.png){.thumbnail}

### Diagnóstico

Em primeiro lugar, reinicie o seu servidor através da linha de comando ou da interface de utilizador. Se ainda não consegue estabelecer uma ligação entre a rede pública e o seu endereço IP de alias e suspeitar de um problema de rede, deve reiniciar o servidor em [modo rescue](../rescue/). De seguida, pode configurar o endereço Additional IP diretamente no servidor.

Uma vez ligado ao servidor por SSH, insira o seguinte comando:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Para testar a ligação, basta enviar um ping ao seu endereço Additional IP a partir do exterior. Se ele responder em modo de rescue, isso provavelmente significa que existe um erro de configuração. No entanto, se o IP ainda não funcionar, queira informar as nossas equipas de suporte criando um ticket de assistência a partir da sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
 
## Quer saber mais?

[Ativar o modo rescue num VPS](../rescue/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
