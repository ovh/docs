---
title: 'Primeiros passos com um servidor dedicado'
slug: primeiros-passos-servidor-dedicado
excerpt: 'Saiba como utilizar o seu novo servidor dedicado'
section: Introdução
---

**Última atualização: 23/08/2018**

## Sumário

Um servidor dedicado é um servidor físico situado num dos nossos datacenters. Contrariamente às soluções de alojamento web (descritas como “mutualizadas”) que são geridas tecnicamente pela OVH, o cliente é inteiramente responsável pela administração do seu servidor dedicado.

**Saiba como utilizar o seu novo servidor dedicado.**

> [!warning]
>
> A utilização e a gestão dos serviços OVH são da responsabilidade do cliente. Como não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
> 
> Este manual fornece as instruções necessárias para usar as funcionalidades básicas de um servidor. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”
>


## Requisitos

* Ter um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external}, visível na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Dedicado`{.action} e depois em `Servidores Dedicados`{.action}.


## Instruções

### Ligar-se ao servidor

#### Linux

Quando o servidor dedicado é configurado pela primeira vez, receberá um e-mail com a palavra-passe e com os dados de acesso root. O acesso root permite que se ligue ao servidor via SSH, que é um protocolo de comunicação segura. Pode aceder ao servidor através de um terminal de comando (Linux ou Mac) ou via um programa em Windows (por exemplo: PuTTy).

Uma vez aberto o terminal, introduza o comando seguinte para se ligar ao servidor, substituindo o texto após o símbolo @ pelas informações necessárias (endereço IP ou nome de referência do servidor). O nome de referência do servidor começará sempre por **ns**.

- Exemplo com um endereço IP:

```sh
ssh root@IPv4_do_servidor
```

- Exemplo com uma referência de servidor:

```sh
ssh root@nome_de_referência_do_servidor
```

#### Windows

Quando o servidor dedicado é configurado pela primeira vez, receberá um e-mail com a palavra-passe para o acesso de administrador. Deverá utilizar estas informações de identificação para se ligar ao servidor através do *Remote Desktop Protocol* (RDP). Uma vez ligado, o Windows irá guiá-lo na configuração inicial.

### Instalação ou reinstalação do servidor dedicado

Aceda à página do servidor na [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}; a seguir, em `Informações gerais`, clique em `...`{.action} e em `Reinstalar`{.action} na secção `Sistema (OS)`.

![Botão Reinstalar](images/reinstalling-your-server-01.png){.thumbnail}

No ecrã seguinte, selecione `Instalar a partir de um template OVH`{.action} (para utilizar um dos nossos templates de instalação) ou `Instalar a partir dos seus templates`{.action} (para utilizar um seu), e a seguir clique em `Seguinte`{.action}.

![Seleção de modelos](images/reinstalling-your-server-02.png){.thumbnail}

Selecione o sistema operativo que deseja instalar e clique em `Seguinte`{.action}.

![Seleção de funcionamento](images/reinstalling-your-server-03.png){.thumbnail}

Siga as restantes instruções no ecrã e, em seguida, clique em `Confirmar`{.action} para prosseguir com a instalação.


> [!primary]
>
> Alguns sistemas operativos ou plataformas, como o Plesk e o Windows, requerem a compra de uma licença antes da sua instalação. Pode adquiri-la por intermédio da OVH na [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Dedicado`{.action}, depois em `Licenças`{.action}, ou então junto de um revendedor. De seguida, deverá integrá-la manualmente através do próprio sistema operativo ou por meio da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. 
> 


### Proteger o seu servidor dedicado

Como explicado acima, o cliente é o administrador do seu servidor dedicado. Por esse motivo, é responsável pelos dados e pela segurança da sua máquina. No entanto, os seguintes conselhos vão ajudá-lo a protegê-la:

* mantenha o sistema operativo atualizado;
* mantenha o software atualizado;
* substitua a porta SSH predefinida (porta 22) por outra porta;
* altere a sua palavra-passe root;
* crie um novo utilizador de sistema com um acesso restrito para uma utilização diária.

Para mais informações, consulte [este manual](https://docs.ovh.com/pt/dedicated/proteger-um-servidor-dedicado/){.external}.


### Configurar uma rede

#### Modo bridge IP

O modo bridge é a ação realizada por um equipamento para criar uma rede global a partir de duas redes de comunicação ou mais, ou a partir de dois segmentos de rede ou mais.

Trata-se de uma configuração frequentemente utilizada no contexto da virtualização, para permitir que cada máquina virtual tenha o seu próprio endereço IP público.

Para mais informações, consulte o manual sobre o [Modo bridge IP](https://docs.ovh.com/gb/en/dedicated/network-bridging/){.external} (versão inglesa).

#### Modo alias IP

O modo alias IP associa dois endereços IP ou mais a uma interface de rede. Isto permite que o seu servidor estabeleça várias ligações a uma rede, cada uma delas com um objetivo diferente.

Para obter instruções pormenorizadas acerca da configuração do alias IP, consulte [este manual](https://docs.ovh.com/pt/dedicated/network-ipaliasing/){.external}.

#### Configuração do IPv6

Todos os servidores dedicados da OVH incluem um bloco /64 de IPv6. Para utilizar os endereços deste bloco, tem de fazer determinadas modificações na configuração de rede. Consulte o manual: [Configuração de IPv6](https://docs.ovh.com/gb/en/dedicated/network-ipv6/){.external} (versão inglesa).


### Resolver problemas de configuração através do IPMI

A OVH instala em todos os seus servidores dedicados uma consola IPMI (Intelligent Platform Management Interface), que é executada no navegador ou a partir de uma applet Java e que permite que o cliente se ligue diretamente ao seu servidor, mesmo que não tenha uma ligação à rede. Isto permite resolver os problemas que possam ter causado a interrupção da ligação ao servidor.

Para mais informações, consulte o manual sobre [Como utilizar o IPMI com servidores dedicados](https://docs.ovh.com/pt/dedicated/usar-ipmi-servidores-dedicados/){.external}.


### Modo rescue

Se houver um problema com o servidor, o primeiro passo para o resolver é a reinicialização do servidor em modo rescue. Para o ativar, ligue-se à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e entre na página do servidor. A seguir, clique em `Estado do servidor`{.action}, em `Informações gerais`{.action} e em `Boot`{.action}. Clique no botão `Alterar`{.action} para alterar o modo de arranque.

![Alterar a seleção de arranque](images/rescue-mode-01.png){.thumbnail}

No ecrã seguinte, selecione a opção `Fazer boot em modo rescue`{.action} e selecione `rescue64-pro`{.action} no menu pendente. Insira o seu endereço de e-mail no campo de texto e, em seguida, clique em `Seguinte`{.action}.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Confirme as suas opções no ecrã seguinte e, em seguida, reinicie o seu servidor para aplicar as modificações.

![Confirmação e reinicialização](images/rescue-mode-02.png){.thumbnail}

O seu servidor irá ser reiniciado em modo rescue e receberá as informações de identificação para se poder conectar com o endereço de e-mail que indicou. Para sair do modo rescue, basta alterar o modo de arranque para inicializar no disco rígido e, em seguida, reiniciar o servidor.

Para saber mais sobre a forma como pode utilizar o modo rescue para resolver problemas relacionados com o servidor, consulte o manual sobre o [modo rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external}.


#### Diagnóstico material (hardware)

Os testes materiais (hardware) disponíveis no modo rescue podem ajudá-lo a diagnosticar problemas físicos suscetíveis de causar o mau funcionamento do seu servidor.

Depois de estabelecer a ligação na interface web do modo rescue, poderá realizar testes aos seguintes componentes materiais:

* RAM;
* discos rígidos;
* conjunto RAID;
* processador;
* ligação à rede.

#### Interface web do modo rescue

![A interface web](images/rescue-mode-04.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}.