---
title: 'Primeiros passos com um servidor dedicado'
slug: primeiros-passos-servidor-dedicado
excerpt: 'Saiba como utilizar o seu novo servidor dedicado'
section: Introdução
---

**Última atualização: 2 de abril de 2020**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Um servidor dedicado é um servidor físico situado num dos nossos datacenters. Contrariamente às soluções de alojamento web (descritas como "partilhadas"), que são geridas tecnicamente pela OVHcloud, o cliente é inteiramente responsável pela administração do seu servidor dedicado.

**Saiba como utilizar o seu novo servidor dedicado.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> A OVHcloud oferece-lhe serviços que são da sua responsabilidade. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
>

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/){.external}.
- Estar conectado em SSH (acesso root) em Linux ou enquanto administrador em Windows.
- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager).

## Instruções

Quando o seu servidor dedicado estiver configurado pela primeira vez, pode selecionar o sistema operativo a instalar.

### Instalação ou reinstalação do servidor dedicado

Pode facilmente reinstalar o seu servidor e escolher outro modelo de sistema operativo na sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). No separador `Informações gerais`{.action}, clique em `...`{.action} junto ao `Sistema (OS)` e, a seguir, em `Instalar`{.action}.

![Botão Reinstalar](images/reinstalling-your-server-00.png){.thumbnail}

No ecrã seguinte, selecione `Instalar a partir de um template OVH`{.action} (para utilizar um dos nossos modelos de instalação) ou `Instalar um dos seus templates`{.action} (para utilizar o seu) e, a seguir, clique em `Seguinte`{.action}.

![Seleção do modelo](images/reinstalling-your-server-02.png){.thumbnail}

Selecione o sistema operativo a instalar e clique em `Seguinte`{.action}".

![Seleção operacional](images/reinstalling-your-server-03.png){.thumbnail}

Se tiver de alterar o esquema de particionamento do seu sistema operativo, selecione a opção "Personalizar a configuração das partições" e clique em `Seguinte`{.action}.

![Personalizar a configuração da partição](images/SSH_02.png){.thumbnail}

Depois de finalizar os ajustamentos, clique em `Seguinte`{.action} para aceder à página de resumo.

### Adicionar uma chave SSH (facultativo)

Se instalar um sistema operativo Linux, pode adicionar a sua chave SSH à última etapa do processo de instalação.

![Personalizar a configuração da partição](images/SSH_03.png){.thumbnail}

Se uma chave SSH já estiver registada, ela aparecerá no menu pendente nas `Chaves SSH` em baixo. Caso contrário, terá de adicionar um na secção "Serviços".

Para isso, abra a barra lateral ao clicar no canto superior direito e utilize o atalho `Produtos e serviços`{.action}.

![Personalizar a configuração da partição](images/SSH_13.png){.thumbnail}

Em "Os meus serviços", passe para o separador `Chaves SSH`{.action} e clique em `Adicionar uma chave SSH`{.action}.

![Personalizar a configuração da partição](images/SSH_14.png){.thumbnail}

Como se trata de instalar um servidor dedicado (ou um VPS), selecione "Dedicado" no menu pendente.

Na nova janela, introduza um ID (nome da sua escolha) e a própria chave (do tipo RSA, ECDSA ou Ed25519) nos campos correspondentes.

![Personalizar a configuração da partição](images/SSH_12.png){.thumbnail}

Para obter uma explicação detalhada sobre a criação das chaves SSH, consulte [este guia](https://docs.ovh.com/pt/public-cloud/criacao-de-chaves-ssh/).


> [!primary]
>
> Certos sistemas operativos ou plataformas, como o Plesk e o Windows, requerem a aquisição de uma licença antes da instalação. Pode adquirir esta [licença junto da OVHcloud](https://www.ovhcloud.com/pt/bare-metal/os/) ou junto de um revendedor. De seguida, deverá integrá-la manualmente, através do próprio sistema operativo ou através da Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Pode gerir as suas licenças no Painel de configuração da secção `Bare Metal Cloud`{.action} sob `Licenças`{.action}. Nesta secção, pode também encomendar licenças (através do botão `Encomendar`{.action} à esquerda) ou adicionar a sua própria licença de servidor SQL ou Windows SPLA (através do botão `Adicionar uma licença SPLA`{.action} à esquerda).
>

### Ligação ao seu servidor

#### Linux

Uma vez terminada a instalação, receberá um e-mail com a sua palavra-passe de acesso root. O acesso root permite que se ligue ao servidor via SSH, que é um protocolo de comunicação segura. Pode aceder ao servidor através de um terminal de comando (Linux ou MAC) ou através de um software de terceiros em Windows (por exemplo: PuTTy).

Depois de abrir o terminal, introduza o comando seguinte para se ligar ao servidor, substituindo o texto depois do símbolo @ pelas informações necessárias (endereço IP ou nome de referência do servidor). O nome de referência do servidor começará sempre por *ns*.

**Exemplo com um endereço IP**

```sh
ssh root@IPv4_do_servidor
```

**Exemplo que utiliza uma referência de servidor**

```sh
ssh root@nome_de_referência_do_servidor
```

#### Windows

Uma vez terminada a instalação, receberá um e-mail com a sua palavra-passe de acesso administrador (root). Deve utilizar estas informações de identificação para se ligar ao servidor através de RDP (**R**emote **D**esktop **P**rotocol). Uma vez ligado, o Windows irá guiá-lo durante a instalação inicial.


### Segurança do seu servidor dedicado

Como explicado acima, o cliente é o administrador do seu servidor dedicado. Por esse motivo, é responsável pelos dados e pela segurança da sua máquina. No entanto, os seguintes conselhos vão ajudá-lo a protegê-la:

* mantenha o sistema operativo atualizado;
* mantenha o software atualizado;
* substitua a porta SSH predefinida (porta 22) por outra porta;
* altere a sua palavra-passe root;
* crie um novo utilizador de sistema com um acesso restrito para uma utilização diária.

Para mais informações, consulte [este manual](../proteger-um-servidor-dedicado/){.external}.

### Configuração de rede

#### Modo bridge IP

O modo bridge é a ação realizada por um equipamento para criar uma rede global a partir de duas redes de comunicação ou mais, ou a partir de dois segmentos de rede ou mais. O modo bridge é diferente do roteamento, que permite que as redes comuniquem de forma independente, mantendo-se separadas.

Trata-se de uma configuração frequentemente utilizada no contexto da virtualização, para permitir que cada máquina virtual tenha o seu próprio endereço IP público.

Para mais informações, consulte o nosso guia: [Modo bridge IP](https://docs.ovh.com/gb/en/dedicated/network-bridging/){.external}.

#### Modo Alias IP

O modo alias IP associa dois endereços IP ou mais a uma interface de rede. Isto permite que o seu servidor estabeleça várias ligações a uma rede, cada uma delas com um objetivo diferente.

Para obter instruções detalhadas sobre a configuração do alias IP, consulte o guia [Configurar o endereço IP em alias](../network-ipaliasing/).

#### Configuração IPv6

Todos os servidores dedicados da OVHcloud incluem um bloco /64 IPv6. Para utilizar os endereços deste bloco, deve efetuar alterações na configuração da rede. Consulte o nosso guia: [Configurar IPv6 num servidor dedicado](../rede-ipv6/).


### Reparação

A OVHcloud implementa todos os seus servidores dedicados com uma consola IPMI (Intelligent Platform Management Interface), que é executada no seu browser ou a partir de uma applet Java, e permite-lhe aceder diretamente ao seu servidor, mesmo que não tenha uma ligação de rede. Isto permite resolver os problemas que possam ter provocado a desconexão do seu servidor..

Para mais informações, consulte o nosso guia: [Utilização do IPMI para servidores dedicados](../usar-ipmi-servidores-dedicados/).

### Modo rescue

Em caso de problema com o seu servidor, a primeira etapa de reparação consiste em reiniciar o seu servidor em modo rescue. Para ativar o modo rescue, aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager) e aceda à página do seu servidor. No menu `Informações gerais`, clique em `...`{.action} e em `Alterar`{.action} para modificar o modo de arranque.

![Modificar a seleção de arranque](images/rescue-mode-01.png){.thumbnail}

No ecrã seguinte, selecione `Fazer boot em rescue`{.action} e selecione `rescue64-pro`{.action} no menu pendente. Introduza o seu endereço de e-mail no campo de texto e clique em `Seguinte`{.action}. Se deixar o campo do e-mail vazio, o endereço de e-mail associado à sua conta OVHcloud é utilizado de forma padrão.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Confirme as suas opções no ecrã seguinte e, em seguida, reinicie o seu servidor para aplicar as modificações.

![Confirmação e reinicialização](images/rescue-mode-02.png){.thumbnail}

O seu servidor vai ser reiniciado em modo rescue e receberá as informações de identificação para se ligar através do endereço de e-mail que indicou. Para sair do modo rescue, basta modificar de novo o netboot para o colocar em `Fazer boot no disco rígido`{.action} e depois reiniciar o seu servidor.

Para saber mais sobre a utilização do modo rescue para resolver problemas com o seu servidor, consulte o nosso manual sobre o [modo rescue](../rescue_mode/).


#### Diagnóstico material

Os testes materiais disponíveis em modo rescue podem ajudá-lo a diagnosticar as avarias materiais suscetíveis de causar problemas no seu servidor.

Depois de aceder à interface Web do modo rescue, poderá realizar testes aos seguintes componentes materiais:

* RAM
* Discos rígidos
* RAID
* Processador
* Ligação de rede

#### Interface Web do modo rescue

![Interface Web](images/rescue-mode-04.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
