---
title: "Utilizar Hyper-V com endereços IP Failover num vRack"
excerpt: "Descubra como configurar uma máquina virtual com IP Failover e Hyper-V num vRack"
slug: ipfo-vrack-hyperv
section: vRack 
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 26/04/2021**

## Objetivo

Siga o processo de instalação do Hyper-V, a associação de um switch virtual e a configuração de uma máquina virtual para funcionar com os IP Failover num vRack.

**Saiba como configurar uma máquina virtual com IP Failover e Hyper-V num vRack.**

## Requisitos

- Um servidor dedicado (compatível com [vRack](https://www.ovh.pt/solucoes/vrack/)) no qual Windows Server está instalado.
- Uma imagem ISO para o sistema operacional que será instalado na sua máquina virtual (o CentOS 7 será utilizado como exemplo neste guia).
- Um vRack entregue na sua conta OVHcloud.
- Um Bloco IP de 4 endereços IP ou mais.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

> [!warning]
> Esta funcionalidade pode estar indisponível ou limitada nos [servidores dedicados **Eco**](https://eco.ovhcloud.com/pt/about/).
>
> Para mais informações, consulte o nosso [comparativo](https://eco.ovhcloud.com/pt/compare/).

## Instruções

Este guia supõe que já instalou o Windows Server, que está ligado através do ambiente de trabalho remoto e que já afetou o seu servidor dedicado e o seu bloco IP a um vRack. Para mais informações sobre estes passos, consulte os passos 1 a 4 do nosso manual: [Configurar vários servidores dedicados no vRack](../configurar-varios-servidores-dedicados-no-vrack/).

### Instalação do Hyper-V

O primeiro passo consiste em instalar Hyper-V.

No gestor dos servidores, clique em `Add roles and feature`{.action}

![Installing hyper-v](images/add-roles-features.png){.thumbnail}

No Assistente, clique em `Next`{.action} para passar à página seguinte.

![Installing hyper-v](images/add-roles-features-2.png){.thumbnail}

Verifique que a opção "Role-Based or feature-based instalation" foi selecionada e clique em `Next`{.action}.

![Installing hyper-v](images/add-roles-features-3.png){.thumbnail}

Verifique que a opção "Select a server from the server pool" foi selecionada, assim como o servidor em que trabalha, na lista em baixo. A seguir, clique em `Next`{.action}.

![Installing hyper-v](images/add-roles-features-4.png){.thumbnail}

Na lista dos papéis, selecione "Hyper-V" e clique em `Next`{.action}.

![Installing hyper-v](images/add-roles-features-5.png){.thumbnail}

Na página seguinte ("Featuras"), clique em `Next`{.action}.

![Installing hyper-v](images/add-roles-features-9.png){.thumbnail}

Identifique a ligação de rede do seu servidor que deseja utilizar para o switch virtual.

Para o identificar, abra uma Encomenda Prompt ou PowerShell e execute o comando `ipconfig/all`.

Note que, no nosso exemplo, o `Ethernet 2` é a interface utilizada para o vRack. No entanto, é possível que a placa de rede vRack utilize uma interface diferente. Utilize uma interface que não possui o endereço IP principal do servidor ou que utiliza um endereço IP autoatribuído (169.254.x.x).

![check-interface](images/ipconfig.png){.thumbnail}

Quando estas informações estiverem disponíveis, volte à janela `Add Roles and Feature Wizard`{.action} e clique em `Next`{.action}.

![Installing hyper-v](images/add-roles-features-6.png){.thumbnail}

Selecione o adaptador para o vRack que identificou no Comando Prompt ou PowerShell e clique em `Next`{.action}.

![Installing hyper-v](images/add-roles-features-7.png){.thumbnail}

As duas páginas seguintes permitem-lhe escolher as opções de migração e de armazenamento. Pode configurá-los como desejar.

Depois de atingir a página de confirmação, selecione a caixa "Restart the destination server automatically if required", clique em `Yes`{.action} e depois em `Install`{.action}.

![Installing hyper-v](images/add-roles-features-8.png){.thumbnail}

Hyper-V vai agora instalar-se e o servidor deverá reiniciar.

### Criar e configurar uma máquina virtual

Depois de reiniciar o servidor, ligue-se e abra o Hyper-V Manager.

Selecione o seu servidor à esquerda, clique em `New`{.action} and selecione "Virtual Machine".

![create-vm](images/create-vm.png){.thumbnail}

Em "New Virtual Machine Wizard", pode configurar a máquina virtual como desejar. Ao aceder à etapa "Configure Networking", certifique-se de que seleciona o switch virtual. Depois de selecionado, clique em `Next`{.action} para continuar.

![create-vm](images/create-vm-2.png){.thumbnail}

Depois de atingir a secção "Instalação Opções", certifique-se de que adiciona a imagem ISO ao sistema operativo que vai instalar. Clique em `Next`{.action} para continuar.

![create-vm](images/create-vm-3.png){.thumbnail}

Ao aceder à página "Summary", verifique se os parâmetros do switch virtual e do sistema operativo estão corretos e clique em `Finish`{.action}.

![create-vm](images/create-vm-4.png){.thumbnail}

### Instalar o SO e configurar o IP

Inicie a máquina virtual. A instalação do sistema operativo deve arrancar automaticamente. Se não for o caso, aparecerá a seguinte mensagem de erro:

> "The unsigned image's hash is not allowed (DB)"

Neste caso, deve desativar o "Secure Boot".

Desligue a máquina virtual e clique em `Settings`{.action}.

![desable-secure-boot](images/disable-secure-boot.png){.thumbnail}

Clique em `Security`{.action}, desselecione "Enable Secure Boot" e, a seguir, clique em `Apply`{.action}.

![desable-secure-boot](images/disable-secure-boot-2.png){.thumbnail}

Uma vez terminado, reinicie a máquina virtual.

Configure o sistema operativo como desejar.

Para os parâmetros de rede, será necessário definir um endereço IP estático.

No nosso exemplo, o bloco IP atribuído ao vRack é 192.xxx.xxx.80/29. Eis a repartição do bloco:

<br>
192.xxx.xxx.80 - Endereço de rede (Reservado - Inutilizável)<br>
192.xxx.xxx.81 - Primeiro endereço IP utilizável<br>
192.xxx.xxx.82<br>
192.xxx.xxx.83<br>
192.xxx.xxx.84<br>
192.xxx.xxx.85 - Último endereço IP utilizável<br>
192.xxx.xxx.86 - Gateway predefinido (Reservado - Inutilizável)<br>
192.xxx.xxx.87 - Endereço de broadcast (Reservado - Inutilizável)<br>
<br>

No nosso exemplo, vamos utilizar 192.xxx.xxx.81. A configuração deve apresentar-se da seguinte forma:

<br>
Endereço: 192.168.xxx.81<br>
Subnet Mask: 255.255.255.248<br>
Gateway: 192.xxx.xxx.86<br>
DNS: 213.186.33.99 (pode introduzir outro DNS, se desejar)<br>
<br>

Depois de instalar o sistema operativo. Já deveria estar ligado.

O exemplo abaixo mostra como deve aparecer o ficheiro `ifcfg-eth0`.

![configured](images/configured.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
