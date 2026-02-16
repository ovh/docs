---
title: Configurar um Additional IP
excerpt: "Saiba como adicionar endereços Additional IP à configuração da sua instância"
updated: 2025-12-17
---

> [!primary]
> Este artigo diz respeito à configuração de endereços Additional IPv4 numa interface pública. Também pode configurar endereços IPv6 nas suas instâncias Public Cloud utilizando [este manual](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>
> Tenha em conta que os endereços Additional IP podem igualmente ser configurados num vRack (rede privada), o que permite a interligação numa vasta gama de serviços OVHcloud, oferecendo uma maior flexibilidade.
>
> Encontrará mais informações sobre a configuração dos endereços Additional IP num vRack para uma utilização com as instâncias Public Cloud nos seguintes guias:
>
> - [Configurar um bloco IP num vRack numa instância Public Cloud (EN)](/pages/public_cloud/public_cloud_network_services/configuration-06-configure-ip-block-vrack-to-instance).
> - [Configurar um bloco IPv6 num vRack (EN)](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Objetivo

Poderá ter de configurar endereços Additional IP nas suas instâncias, por exemplo se aloja um grande número de websites na sua instância ou se aloja projetos internacionais. Os endereços Additional IP OVHcloud permitem-lhe associar vários endereços IP a uma única interface de rede.

**Este guia explica como adicionar endereços Additional IP à sua configuração de rede.**

> [!warning]
> A OVHcloud fornece-lhe serviços pelos quais é responsável em termos de configuração e gestão. Assim, é responsável pelo seu bom funcionamento.
>
> Este guia foi concebido para o ajudar o mais possível nas tarefas mais comuns. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação dos serviços num servidor, recomendamos que contacte um fornecedor especializado.
>

## Requisitos

- uma [instância Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud
- um [endereço Additional IP](/links/bare-metal/ip) ou um bloco Additional IP
- um acesso administrador (sudo) através de SSH ou GUI à sua instância
- conhecimentos básicos sobre as redes e a sua administração

> [!warning]
> Esta funcionalidade não está atualmente disponível para as instâncias Metal.
>

## Instruções

Este guia contém as configurações das distribuições/sistemas operativos mais frequentemente utilizados. A primeira etapa consiste sempre em ligar-se à sua instância através de SSH ou através de uma sessão de ligação à interface gráfica de utilizador (VNC para uma instância Windows). Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações elevadas (administrador/sudo).

> [!primary]
>
No que diz respeito às diferentes versões de distribuições, tenha em conta que o procedimento adequado para configurar a sua interface de rede, bem como os nomes de ficheiros, podem ter sido alterados. Se encontrar dificuldades, recomendamos que consulte a documentação relativa ao seu sistema operativo.
>

**Queira tomar nota da seguinte terminologia que será utilizada nos exemplos de código e as instruções detalhadas neste guia:**

|Termo|Descrição|Exemplos|
|---|---|---|
|ADDITIONAL_IP|Endereço Additional IP atribuído ao seu serviço|169.254.10.254|
|NETWORK_INTERFACE|Nome da interface de rede|*eth0*, *ens3*|
|ID|ID do alias IP, começando por *0* (em função do número de endereços IP suplementares a configurar)|*0*, *1*|

> [!primary]
>
> A configuração de um endereço Additional IP numa instância Public Cloud não requer gateway nem máscara de sub-rede.
>

> [!success]
> Selecione a guia correspondente ao seu sistema operacional.

> [!tabs]
> **Debian 11**
>> Debian 11
>>
>> **Etapa 1: desativar a configuração automática da rede**
>>
>> Abra o caminho de acesso ao seguinte ficheiro com um editor de texto:
>>
>> ```bash
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Introduza a linha seguinte e registe e saia do editor.
>>
>> ```bash
>> network: {config: disabled}
>> ```
>>
>> A criação deste ficheiro de configuração impede a execução automática das modificações efetuadas na configuração da sua rede.
>>
>> **Etapa 2: alterar o ficheiro de configuração de rede**
>>
>> Para verificar o nome da interface de rede, utilize o seguinte comando:
>>
>> ```bash
>> ip a
>> ```
>>
>> Abra o ficheiro de configuração de rede para o modificar através do seguinte comando:
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Adicione as seguintes linhas:
>>
>> ```bash
>> auto NETWORK_INTERFACE:ID
>> iface NETWORK_INTERFACE:ID do inet static
>> address ADDITIONAL_IP
>> netmask 255.255.255.255
>> ```
>>
>> **Etapa 3: reiniciar a interface**
>>
>> Execute as alterações através do seguinte comando:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Debian 12+, Ubuntu 22.04+**
>> Debian 12, Ubuntu 22.04 e versões posteriores
>>
>> O ficheiro de configuração dos seus endereços Additional IP encontra-se em `/etc/netplan/`. 
>> Neste exemplo, chama-se "50-cloud-init.yaml". Antes de efetuar alterações, verifique o nome do ficheiro real nesta pasta. Cada endereço Additional IP necessita da sua própria linha no ficheiro.
>>
>> **Etapa 1: desativar a configuração automática da rede**
>>
>> Abra o caminho de acesso ao seguinte ficheiro com um editor de texto:
>>
>> ```bash
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Introduza a linha seguinte e registe e saia do editor.
>>
>> ```bash
>> network: {config: disabled}
>> ```
>>
>> A criação deste ficheiro de configuração impede a execução automática das modificações efetuadas na configuração da sua rede.
>>
>> **Etapa 2: modificar o ficheiro de configuração**
>>
>> Para verificar o nome da interface de rede, utilize o seguinte comando:
>>
>> ```bash
>> ip a
>> ```
>>
>> Abra o ficheiro de configuração de rede para o modificar através do seguinte comando:
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Não altere as linhas existentes no ficheiro. Adicione o seu endereço Additional IP seguindo o exemplo abaixo:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         NETWORK_INTERFACE:
>>             dhcp4: true
>>             match:
>>                 macaddress: fa:xx:xx:xx:xx:63
>>             set-name: NETWORK_INTERFACE
>>             addresses:
>>             - ADDITIONAL_IP/32
>> ```
>>
>> > [!warning]
>> >
>> > É importante respeitar o alinhamento de cada elemento deste ficheiro tal como representado no exemplo acima. Não utilize a tecla de tabulação para criar o seu espaçamento.
>> >
>>
>> Registe e feche o ficheiro.
>>
>> **Etapa 3: aplicar a nova configuração de rede**
>>
>> Pode testar a sua configuração através do seguinte comando:
>>
>> ```bash
>> sudo netplan try
>> ```
>>
>> Se a configuração estiver correta, execute-a através do seguinte comando:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
>> Repita este procedimento para cada endereço Additional IP.
>>
> **AlmaLinux (8/9) / Rocky Linux (8/9) / CloudLinux (8/9)**
>> AlmaLinux (8/9) / Rocky Linux (8/9) / CloudLinux (8/9)
>>
>> **Etapa 1: alterar o ficheiro de configuração de rede**
>>
>> Para verificar o nome da interface de rede, utilize o seguinte comando:
>>
>> ```bash
>> ip a
>> ```
>>
>> Abra o ficheiro de configuração de rede para o modificar:
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
>> ```
>>
>> A seguir, adicione estas linhas:
>>
>> ```bash
>> DEVICE=NETWORK_INTERFACE:ID
>> BOOTPROTO=static
>> IPADDR=ADDITIONAL_IP
>> NETMASK=255.255.255.255
>> BROADCAST=ADDITIONAL_IP
>> ONBOOT=yes
>> ```
>>
>> **Etapa 2: reiniciar a interface**
>>
>> Execute as alterações através do seguinte comando:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Fedora / AlmaLinux (10) / Rocky Linux (10)**
>> Fedora, AlmaLinux 10 & Rocky Linux 10
>>
>> Estes sistemas utilizam ficheiros de chaves. O NetworkManager armazenou anteriormente perfis de rede em formato ifcfg neste diretório: `/etc/sysconfig/network-scripts/`. No entanto, o formato ifcfg agora é desaconselhado. Por predefinição, o NetworkManager não cria perfis neste formato. O ficheiro de configuração encontra-se agora em `/etc/NetworkManager/system-connections/`.
>>
>> **Etapa 1: editar o ficheiro de configuração**
>>
>> [!primary]
>> > Atenção: o nome do ficheiro de rede no nosso exemplo pode ser diferente do seu. Adapte os comandos ao seu nome de ficheiro.
>> >
>>
>> ```bash
>> sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
>> ```
>>
>> Não altere as linhas existentes no ficheiro de configuração. Adicione o seu Additional IP ao ficheiro da seguinte forma, substituindo o `ADDITIONAL_IP/32` pelos seus próprios valores:
>>
>> ```console
>> [ipv4]
>> method=auto
>> may-fail=false
>> address1=ADDITIONAL_IP/32
>> ```
>>
>> Se tem dois Additional IP a configurar, a configuração deverá ser a seguinte:
>>
>> ```console
>> [ipv4]
>> method=auto
>> may-fail=false
>> address1=ADDITIONAL_IP1/32
>> address2=ADDITIONAL_IP2/32
>> ```
>>
>> **Etapa 2: reiniciar a interface**
>>
>> Deverá reiniciar a sua interface:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Plesk**
>> Plesk
>>
>> **Etapa 1: aceder à gestão de IP do Plesk**
>>
>> No painel de configuração Plesk, selecione `Tools & Settings`{.action} na barra lateral esquerda.
>>
>> ![acesso à gestão dos endereços IP](images/pleskip1.png){.thumbnail}
>>
>> Clique em `IP Endereço`{.action} em **Tools & Settings**.
>>
>> **Etapa 2: adicionar informações IP suplementares**
>>
>> Nesta secção, clique no botão `Add IP Address`{.action}.
>>
>> ![adicionar informações IP](images/pleskip2-2.png){.thumbnail}
>>
>> Introduza o seu endereço Additional IP sob a forma `xxx.xxx.xxx.xxx/32` no campo "IP address and subnet mask", e clique em `OK`{.action}.
>>
>> ![adicionar informações IP](images/pleskip3-3.png){.thumbnail}
>>
>> **Etapa 3: verificar a configuração IP atual**
>>
>> Na secção "Endereços IP", verifique se o endereço Additional IP foi adicionado corretamente.
>>
>> ![configuração IP atual](images/pleskip4-4.png){.thumbnail}
>>
> **Windows Server**
>> Windows Server
>>
>> No espaço Public Cloud, abra `Instances`{.action} no menu à esquerda e clique no nome da sua instância. Aceda ao separador `Console VNC`{.action}.
>>
>> **Etapa 1: verificar a configuração de rede**
>>
>> Clique com o botão `Menu Iniciar`{.action} e abra a `Executar`{.action}.
>>
>> Introduza `cmd` e clique em `OK`{.action} para abrir a aplicação de linha de comando.
>>
>> ![cmdprompt](images/pci_win07.png){.thumbnail}
>>
>> Para obter a configuração IP atual, insira o `ipconfig` na encomenda.
>>
>> ![verificar a configuração IP principal](images/image1-1.png){.thumbnail}
>>
>> **Etapa 2: modificar as propriedades IPv4**
>>
>> Agora deve modificar as propriedades IP para uma configuração estática.
>>
>> Abra os parâmetros do adaptador no Painel de configuração Windows e abra as `Propriedades`{.action} do `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![alterar a configuração IP](images/image2.png){.thumbnail}
>>
>> Na janela Propriedades IPv4, selecione `Utilizar o seguinte`{.action} endereço IP. Introduza o endereço IP que recuperou na primeira etapa e clique em `Avançado`{.action}.
>>
>> **Etapa 3: adicionar o endereço Additional IP nos Parâmetros TCP/IP avançados**
>>
>> Na nova janela, clique em `Adicionar...`{.action} em "Endereços IP". Introduza o seu endereço Additional IP e a máscara de sub-rede (255.255.255.255).
>>
>> ![secção de configuração avançada](images/image4-4.png){.thumbnail}
>>
>> Confirme ao clicar em `Adicionar`{.action}.
>>
>> ![Configuração da migração IP](images/image5-5.png){.thumbnail}
>>
>> **Etapa 4: reiniciar a interface de rede**
>>
>> De volta ao painel de configuração (`Ligações de rede`{.action}), clique com o botão direito do rato na sua interface de rede e selecione `Desativar`{.action}.
>>
>> ![desativação da rede](images/image6.png){.thumbnail}
>>
>> Para a reiniciar, clique com o botão direito e selecione a opção `Ativar`{.action}.
>>
>> ![ativação da rede](images/image7.png){.thumbnail}
>>
>> **Etapa 5: verificar a nova configuração de rede**
>>
>> Abra a linha de comandos (cmd) e introduza o `ipconfig`. A configuração deve agora incluir o novo endereço Additional IP.
>>
>> ![verificar a configuração de rede atual](images/image8-8.png){.thumbnail}
>>

### Diagnóstico

Em primeiro lugar, reinicie a sua instância com a ajuda do sistema operativo da instância ou da [Área de Cliente OVHcloud](/links/manager). Se ainda não consegue estabelecer uma ligação entre a rede pública e o seu Additional IP e suspeitar de um problema de rede, deve reiniciar a instância em [modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode). De seguida, pode configurar o endereço Additional IP diretamente na instância.

Uma vez ligado em modo rescue através de SSH, insira o seguinte comando:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Para testar a ligação, basta enviar um ping ao seu endereço Additional IP a partir do exterior. Se ele responder em modo de rescue, isso provavelmente significa que existe um erro de configuração. No entanto, se o IP ainda não funcionar, queira informar as nossas equipas de suporte criando um ticket de assistência a partir da sua [Área de Cliente OVHcloud](/links/manager).

## Quer saber mais?

[Importar um Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-import)

[Migrar um Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-migrate)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).