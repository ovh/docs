---
title: "Como criar uma instância Public Cloud e conectar-se a ela"
excerpt: "Descubra como configurar instâncias Public Cloud na sua Área de Cliente OVHcloud, assim como os primeiros passos com as suas instâncias"
updated: 2024-08-21
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

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

As instâncias Public Cloud são fáceis de implementar e gerir. No entanto, enquanto membro do ecossistema Public Cloud da OVHcloud, as instâncias oferecem numerosas opções de configuração e podem ser adaptadas a diferentes casos de utilização. As instruções seguintes incluem todas as etapas necessárias (e também as etapas opcionais) para criar uma instância na Área de Cliente OVHcloud e aceder à distância.  
Poderá depois ir mais longe com o seu projeto Public Cloud em função das suas necessidades.

**Este guia explica os primeiros passos com uma instância Public Cloud.**

## Requisitos

- Um [projeto Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud
- Acesso à [Área de Cliente OVHcloud](/links/manager)

## Instruções

> [!primary]
>
> Se ainda não criou nenhum projeto Public Cloud, comece pelo nosso [guia sobre a criação de um projeto](/pages/public_cloud/compute/create_a_public_cloud_project).
>
> **Os detalhes técnicos** importantes relativos ao Public Cloud da OVHcloud estão disponíveis em [esta página](/pages/public_cloud/compute/00-essential-info-to-get-started-on-public-cloud).
>

### Apresentação do conteúdo

- [**1** Criação de chaves SSH](#create-ssh)
- [**2** Importação de chaves SSH](#import-ssh)
- [**3** Preparação para a configuração de rede](#network)
- [**4** Criação da instância](#create-instance)
    - [**4.1** Seleção de um modelo de instância](#model)
    - [**4.2** Seleção de uma região](#region)
    - [**4.3** Seleção de uma imagem](#image)
    - [**4.4** Configuração da instância](#configuration)
    - [**4.5** Configurar a sua rede](#network)
    - [**4.6** Selecione um período de faturação](#billing)
- [**5** Ligação à instância](#connect-instance)
    - [**5.1** Verificação da instalação da instância na Área de Cliente OVHcloud](#verify-status)
    - [**5.2** Primeira ligação numa instância com um SO GNU/Linux instalado](#login-linux)
    - [**5.3** Instâncias Windows](#windows)
        - [**5.3.1** Conclusão da instalação da instância Windows](#windows)
        - [**5.3.2** Ligação remota a partir do Windows](#login-windows)
        - [**5.3.3** Ligação remota a partir de outro SO](#login-other)
    - [**5.4** Acesso consola VNC](#vnc-console)
- [**6** Primeiros passos numa nova instância](#manage-access)
    - [**6.1** Gestão de utilizadores](#user-mgmt)
        - [**6.1.1** Configurar uma palavra-passe para a conta de utilizador atual](#set-password)
        - [**6.1.2** Ativação das ligações remotas através de palavra-passe](#remote-password)
    - [**6.2** Chaves SSH suplementares](#add-keys)


> [!primary]
>
> **Deverá fornecer uma chave SSH pública aquando da criação de instâncias Public Cloud na sua Área de Cliente.** Uma vez criada a instância, poderá configurar o seu acesso remoto de acordo com as suas necessidades.
>
> **Exceção**: a autenticação de início de sessão nas instâncias Windows requer um nome de utilizador e uma palavra-passe, uma vez que o Windows utiliza RDP (**R**emote **D**esktop **P**rotocol).
>

<a name="create-ssh"></a>

### Passo 1: criar um conjunto de chaves SSH

Se já tiver um par de chaves SSH prontas a usar, ignore esta etapa.

O [protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permite uma comunicação cliente-servidor encriptada. Um **par de chaves SSH** é composto por uma chave pública e uma chave privada.

- A **chave pública** é adicionada à sua instância Public Cloud (e pode também ser [armazenada na Área de Cliente OVHcloud](#import-ssh)).
- A **chave privada** está armazenada no seu equipamento local e deve estar protegida contra o acesso não autorizado. Apenas os dispositivos clientes com a chave privada correspondente podem aceder à sua instância. Não é requerida nenhuma palavra-passe para a conta de utilizador para iniciar sessão.

Dispõe de 2 opções para criar e gerir as suas chaves SSH:

- A interface de linha de comandos do seu SO (simples cliente **Open SSH**).
- Software adicional (compatível com o protocolo **Open SSH**) com linha de comandos ou interface gráfica.

A maioria dos sistemas operativos de desktop contemporâneos incluem de forma nativa o cliente **Open SSH** acessível através da aplicação de linha de comandos do sistema (`cmd`, `Powershell`, `Terminal`, etc.). Se não estiver familiarizado com a utilização das chaves SSH como método de autenticação, pode utilizar as instruções de [este manual](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key) para criar o seu par de chaves.

Se utilizar outro software, consulte a documentação do utilizador. As instruções para a solução open source `PuTTY` estão disponíveis em [este guia](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

<a name="import-ssh"></a>

### Etapa 2: Importar as chaves SSH

Pode armazenar as suas chaves SSH públicas na secção `Public Cloud`{.action} da sua [Área de Cliente OVHcloud](/links/manager). Não é obrigatório, mas torna o processo de criação de instâncias mais prático.

> [!primary]
>
> As chaves SSH armazenadas permitem-lhe criar as suas instâncias mais rapidamente na sua Área de Cliente. Para alterar os pares de chaves e adicionar utilizadores depois de criar a instância, consulte o guia [chaves SSH adicionais](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> As chaves SSH públicas adicionadas à sua Área de Cliente OVHcloud estarão disponíveis para os serviços Public Cloud de todas as [regiões](/links/public-cloud/regions-pci). Pode armazenar chaves encriptadas com **RSA**, **ECDSA** e **ED25519**.
>

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Abra o `SSH Keys`{.action} no menu à esquerda em **Project Management**. Clique no botão `Adicionar uma chave SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Na nova janela, introduza um nome para a chave. Preencha o campo `Chave` com a sua cadeia de chave pública, por exemplo, a criada na [etapa 1](#create-ssh). Confirme clicando em `Add`{.action} Adicionar {.action}.

![add key](images/24-addkey.png){.thumbnail}

Agora pode selecionar esta chave na [Etapa 4](#create-instance) para a adicionar a uma nova instância.

<a name="network"></a>

### Etapa 3: Preparar a configuração de rede

Antes de criar a sua instância, recomendamos que estude a forma como a instância será utilizada em termos de ligação em rede.

- Se não precisar de configurar a instância com uma rede privada de momento, poderá aceder à [etapa 4](#create-instance). Pode criar uma instância exposta à Internet pública (ver **Modo Público** [abaixo](#networking-modes).)
- Se a instância estiver ligada a uma nova rede privada (OVHcloud [vRack](/links/network/vrack)), **crie o seu vRack** antes de continuar. Consulte os detalhes no [manual sobre o serviço vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-mode"></a>

/// details | Public Cloud Networking - Modos

**Public Mode**

As instâncias em modo público são expostas à Internet diretamente através de IPv4/IPv6. Os endereços IP não podem ser alterados, mas as instâncias podem ter endereços [Additional IP](/links/network/additional-ip) associados ([incluindo o seu próprio IP](/links/network/byoip)) e podem estar ligados a um [vRack](/links/network/vrack).

**Private Mode**

As instâncias em modo privado só podem ser expostas à Internet através de um serviço [Gateway](/links/public-cloud/gateway) ou [Load Balancer](/links/public-cloud/load-balancer) e endereços [Floating IP](/links/public-cloud/floating-ip).

Para mais informações, consulte os nossos manuais na secção [Public Cloud Network Services](/products/public-cloud-network). O [guia de conceitos](/páginas/public_cloud/public_cloud_network_services/conceitos-01-public-cloud-networking-conceptions) fornece uma introdução ao Public Cloud Networking.

**Local Private Mode**

O modo privado local só se aplica se criar uma instância numa **Local Zone*. As instâncias podem ser expostas à Internet diretamente através de IPv4/IPv6. Apenas as instâncias de uma mesma Área Local podem ser ligadas através de redes privadas. As Local Zones não são compatíveis com [vRack](/links/network/vrack). Neste modo, DHCP fornece automaticamente endereços IP às suas instâncias.

Para saber mais, consulte [página Web das Local Zones](/links/public-cloud/local-zones).

///

<a name="create-instance"></a>

### Etapa 4: Criar a instância

> [!primary]
>
> É obrigatória uma chave SSH pública quando se cria uma instância na Área de Cliente OVHcloud (exceto nas instâncias Windows).
>
> Consulte o [passo 1](#create-ssh) e o [passo 2](#import-ssh) deste manual se não tiver chaves SSH prontas a usar.
>

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Na página **Página Inicial**, clique em `Criar uma instância`{.action}.

![instance creation](images/24-instance-creation01.png){.thumbnail}

<a name="model"></a>

#### Etapa 4.1: Selecione um modelo

Na primeira etapa, selecione um modelo de instância (também chamado "*flavour*") que define os recursos da instância. Clique no separador com o recurso chave para as suas necessidades para encontrar os nossos modelos de instâncias otimizadas.

![instance model](images/24-instance-creation02.png){.thumbnail}

Na secção `Discovery`{.action}, propomos-lhe modelos de instâncias com recursos partilhados a preços vantajosos. Elas são ideais para testar o Public Cloud em geral ou uma aplicação web por exemplo.

Os modelos de instâncias do tipo `Metal`{.action} fornecem recursos físicos dedicados.

> [!primary]
>
> O total dos seus recursos Public Cloud será inicialmente limitado por razões de controlo de custos e de segurança. Pode verificar estas quotas clicando em "Quota and Regions"{.action} na barra de navegação à esquerda em **Project Management**. Consulte [a documentação dedicada](/pages/public_cloud/compute/increasing_public_cloud_quota) para mais informações.
>
> Tenha em atenção que pode **atualizar** a sua instância após a sua criação para dispor de mais recursos disponíveis. No entanto, a mudança para um modelo mais pequeno não é possível com uma instância regular. Consulte a secção seguinte para obter mais informações sobre este assumpto **Passo 4.4**.
>

#### Informações complementares

/// details | Categorias de modelos de instâncias


| Tipo | Recursos garantidos | Notas de utilização |
| :---         |     :---:      |          :--- |
| General Purpose   | ✓     | Servidores de desenvolvimento, aplicações web ou profissionais    |
| Compute Optimized     | ✓       | Codificação de vídeo ou outro cálculo de alta performance      |
| Memory Optimized    | ✓     | Bases de dados, pesquisas e cálculos da memória    |
| GPU     | ✓       | Grande potência de processamento paralelo para aplicações especializadas (renderização, big data, deep learning, etc.)       |
| Discovery    | -       | Alojamento em recursos partilhados para os ambientes de teste e de desenvolvimento      |
| Storage Optimized   | ✓     | Otimizado para transferência de dados para disco    |
| Metal | ✓ | Recursos dedicados com acesso direto aos recursos de computação, armazenamento e rede|

///

/// details | Regiões e Local Zones

**Regiões**

Uma **região** é definida como uma localização no mundo composta por um ou vários datacenters onde os serviços da OVHcloud estão alojados. Pode encontrar mais informações sobre as regiões, a distribuição geográfica e a disponibilidade dos serviços na nossa [página web dedicada](/links/public-cloud/regions-pci) e na nossa [página web sobre as localizações das infraestruturas OVHcloud](/links/infrareg).

**Local Zones**

As Local Zones são uma extensão das **regiões** que aproximam os serviços da OVHcloud de sites específicos, oferecendo uma latência reduzida e performances melhoradas para as aplicações. Pode encontrar mais informações na [página Web das Local Zones](/links/public-cloud/local-zones) e na [documentação das capacidades das Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

<a name="region"></a>

#### Passo 4.2: Selecione uma localização

Escolha uma [região](/links/public-cloud/regions-pci) mais próxima dos seus utilizadores ou clientes. Esta opção pode ser limitada, consoante a escolha do modelo no **etapa 4.1**. Tenha em conta que se selecionar uma **Local Zone** nesta etapa, as limitações de rede serão aplicadas à instância (ver [Etapa 3](#networking-modes)).

Consulte também a [página Web das Locais Zones](/links/public-cloud/local-zones) e a [documentação das capacidades das Locais Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

![seleção de região](images/24-instance-creation03.png){.thumbnail}

<a name="image"></a>

#### Passo 4.3: Selecione uma imagem

Clique no separador à sua escolha e selecione um sistema operativo para a sua instância nos menus suspensos.

![image selection](images/24-instance-creation04.png){.thumbnail}

As imagens disponíveis nesta etapa dependem das escolhas efetuadas nas etapas anteriores, ou seja, da compatibilidade com o modelo de instância e da disponibilidade regional. Por exemplo, se você deseja selecionar um sistema operativo Windows e não houver opções na guia Windows, você deve alterar suas escolhas das etapas anteriores.

> [!primary]
>
> Se selecionar um sistema operativo que exija uma licença paga, estes custos serão automaticamente incluídos na faturação do projeto.
>

Também requer **a adição de uma chave SSH pública** (exceto nas instâncias Windows). Tem 2 opções:

- Utilizar uma chave pública já armazenada na Área de Cliente OVHcloud
- Introduzir diretamente uma chave pública

Clique nas guias abaixo para ver a apresentação da política:


> [!tabs]
> **Utilizar uma chave armazenada**
>>
>> Para adicionar uma chave armazenada na Área de Cliente OVHcloud (consulte [Etapa 2](#import-ssh)), selecione-a na lista.<br><br>
>>![key selection](images/24-instance-creation05.png){.thumbnail}<br>
>>
> **Introduza uma chave**
>>
>> Para adicionar uma chave pública colando a cadeia de chaves, clique no botão `Adicionar chave`{.action}.<br><br>
>>![key selection](images/24-instance-creation06.png){.thumbnail}<br>
>> Introduza um nome para a chave e cadeia de chaves nos respetivos campos. A seguir, clique em `Seguinte`{.action}.<br><br>
>>![key selection](images/24-instance-creation07.png){.thumbnail}<br>
>> Antes de clicar em `Seguinte`{.action}, pode optar por utilizar o botão `Adicionar chave`{.action} para armazenar esta chave na Área de Cliente OVHcloud (ver [etapa 2](#import-ssh) para mais informações).
>>

<a name="configuration"></a>

#### Etapa 4.4: Configure a sua instância

![instance select](images/24-instance-creation08.png){.thumbnail}

Esta etapa oferece várias opções de configuração. Clique nos separadores abaixo para visualizar os detalhes:

> [!tabs]
> **1: Número de instâncias a criar**
>>
>> Pode criar várias instâncias em função das seleções efetuadas nas etapas de criação, mas [os limites de quota de recursos](/pages/public_cloud/compute/increasing_public_cloud_quota) aplicar-se-ão.<br>
>>
> **2: Instância flexível**
>>
>> Se o modelo selecionado for compatível, pode optar por criar uma **instance Flex**. Esta opção permite-lhe fazer a atualização para um modelo mais pequeno (e até mesmo passar para outra categoria de modelo), mas limita a instância a **50GB de armazenamento fixo**, independentemente das outras atualizações ou downgrades.<br>
>>
> **3: Nome da instância**
>>
>> Introduza um nome completo para a sua instância. A referência comercial do modelo de instância é o valor predefinido.<br>
>>
> **4: Script de pós-instalação**
>>
>> É possível adicionar [o seu script](/pages/public_cloud/compute/launching_script_when_creating_instance) neste campo.<br>
>>
> **5: Backup automático das instâncias**
>>
>> Pode ativar o serviço [Backups automatizados](/pages/public_cloud/compute/save_an_instance) selecionando esta opção. Queira consultar as informações tarifárias e os pormenores complementares.
>>

<a name="network"></a>

#### Etapa 4.5: Configure a sua rede

Neste passo, deve aplicar o modo de rede Public Cloud que decidiu, em função das informações do [passo 3](#network) acima. As suas opções dependem de [escolha do local anterior](#region) para a instância (**Região** ou **Local Zone**).

#### Regiões

> [!tabs]
> **Private Mode**
>>
>> A instância pode permanecer inteiramente privada.<br><br>
>>![network type](images/24-instance-creation09.png){.thumbnail}<br>
>> Poderá ligar a instância a uma [rede privada](#networking-modes) e a uma [Floating IP](/links/public-cloud/floating-ip). Não será associado nenhum endereço IP público dedicado.<br><br>
>>![network type](images/24-instance-creation10.png){.thumbnail}<br>
>> Atenção: se clicar em `Criar uma nova rede privada`{.action}, o processo de criação da instância será interrompido e deverá ser reiniciado desde o início.<br>
>>
> **Public Mode**
>>
>> A instância estará exposta à Internet diretamente através de IPv4/IPv6.<br><br>
>>![network type](images/24-instance-creation11.png){.thumbnail}<br>
>> Pode igualmente ligar a instância a uma [rede privada](#networking-modes) (vRack) através do menu pendente.<br>
>> Atenção: se clicar em `Criar uma nova rede privada`{.action}, o processo de criação da instância será interrompido e deverá ser reiniciado desde o início.
>>

Clique em `Seguinte`{.action} para passar à última etapa.

##### Local Zones

Pode optar por associar a instância a uma rede privada, torná-la acessível ao público ou ambas.

![network type](images/24-instance-creation12.png){.thumbnail}

> [!tabs]
> **Public Network**
>>
>> Se selecionar a opção `Rede pública`, a instância será exposta à Internet diretamente através de IPv4/IPv6.<br>
>> Poderá ainda ligar a instância a uma [rede privada](#networking-modes) (não compatível com vRack) se selecionar `Rede privada local compatível com Local Zones` (ver o separador **Local Private Network**).
>>
> **Local Private Network**
>>
>> Selecione a caixa `Rede Privada Local compatível com Local Zones`. Se selecionar **esta opção sem selecionar** `Rede pública`, a instância ficará inteiramente privada, associada a uma [rede privada](#networking-modes) (não compatível com vRack). Escolha uma rede existente na lista através da opção 'Associar uma rede privada existente' ou crie uma nova para a Zona Local escolhendo `Create a local private network` (sem interromper o processo de criação da instância).<br><br>
>>![network type](images/24-instance-creation13.png){.thumbnail}
>> 

Clique em `Seguinte`{.action} para passar à última etapa.

<a name="billing"></a>

#### Etapa 4.6: Selecione um período de faturação

![Modo de faturação](images/24-instance-creation14.png){.thumbnail}

> [!primary]
>
> Tenha em conta que, consoante o modelo de instância escolhido, a faturação **à hora** pode ser a única seleção apresentada. Trata-se de uma limitação temporária e, em breve, estarão disponíveis novas opções de faturação do Public Cloud.
>

> [!tabs]
> **Faturação mensal**
>>
>> A faturação ao mês irá diminuir os custos ao longo do tempo, mas **não pode ser alterada** para uma faturação à hora, após a instância ter sido criada.<br>
>>
> **Faturação à hora**
>>
>> A faturação à hora é a melhor escolha se não definiu claramente a duração do período de utilização. Se decidir conservar a instância para uma utilização a longo prazo, poderá sempre [passar para uma subscrição mensal](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).<br>
>> A instância será faturada enquanto não for **eliminada**, independentemente da utilização real da instância.
>>

Consulte os detalhes na nossa documentação de faturação dedicada:

- [Faturação do Public Cloud](/pages/public_cloud/compute/analyze_billing)
- [FAQ sobre a faturação mensal](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Uma vez terminada a configuração da instância, clique no botão `Criar uma instância`{.action}. O serviço poderá demorar alguns minutos a ser entregue.

<a name="connect-instance"></a>

### Etapa 5: Conectar-se à instância

As instruções desta parte aplicam-se às ligações remotas através dos protocolos **Open SSH** e **RDP** através de uma rede pública (Internet).

Tenha em conta que propomos meios de acesso alternativos (principalmente utilizados para a resolução de problemas) que só estão disponíveis através da sua Área de Cliente OVHcloud:

- [Consola VNC](#vnc-console)
- [Modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Se instalou um SO **OS com aplicação**, consulte o nosso [guia de primeiros passos com as aplicações](/pages/public_cloud/compute/apps_first_steps) bem como a documentação oficial do editor do SO.
>

<a name="verify-status"></a>

#### 5.1 : Verificar o estado da instância na Área de Cliente

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa.

![Área de Cliente](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Selecione `Instances`{.action} na barra de navegação à esquerda em **Compute**. A sua instância está pronta quando o estado está definido em `Ativado` na tabela. Se a instância tiver sido criada recentemente e tiver um estado diferente, clique no botão "Atualizar" junto do filtro de pesquisa.

![page instâncias](images/24-instance-connect01.png){.thumbnail}

Clique no nome da instância neste quadro para abrir o `Dashboard`{.action} no qual pode encontrar todas as informações relativas à instância. Para saber mais sobre as funções disponíveis nesta página, consulte o guia [Gestão das instâncias na Área de Cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Um **utilizador com permissões elevadas (*sudo*) é automaticamente criado** na instância. O nome de utilizador reflete a imagem instalada, por exemplo "ubuntu", "debian", "fedora", etc. Pode verificá-lo no lado direito do `Dashboard`{.action} na secção **Redes**.

![page instâncias](images/24-instance-connect02.png){.thumbnail}

Se o seu [par de chaves SSH está corretamente configurado](#create-ssh), já pode ligar-se à instância com o utilizador pré-configurado e a sua chave SSH. Consulte os parágrafos seguintes para obter instruções mais detalhadas.

> [!primary]
>
> O acesso através da **consola VNC** numa nova instância OS GNU/Linux criada na Área de Cliente deve ser ativado tal como descrito na [secção do manual](#vnc-console).
>
> Este manual não cobre a rede privada para as instâncias. Consulte a nossa documentação [Public Cloud Network Services](/products/public-cloud-network) sobre este assumpto.
>

<a name="login-linux"></a>

#### 5.2: Primeira ligação numa instância sob OS GNU/Linux

> [!primary]
>
> Se receber mensagens de erro sobre as suas **chaves SSH**, verifique se o seu dispositivo local dispõe de uma chave SSH privada corretamente configurada utilizando as informações de [este guia](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key).</br>
> Se continuar a ter problemas, pode substituir o par de chaves utilizando [este manual](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Se criou uma instância sem chave SSH através da [API OVHcloud](/pages/manage_and_operate/api/first-steps) ou da [interface OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), só pode adicionar uma chave SSH à sua instância através do [modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) seguindo as instruções descritas em [este manual](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

Pode aceder à sua instância imediatamente após a sua criação através da interface de linha de comandos da sua estação de trabalho local (`Terminal`, `Command prompt`, `Powershell`, etc.) através do SSH.

```bash
ssh username@IPv4_instance
```

Exemplo:

```bash
ssh ubuntu@203.0.113.101
```

[Em função da sua configuração](#create-ssh), deverá introduzir uma frase secreta que proteja a sua chave privada ou especificar o caminho de acesso ao seu ficheiro de chave. Consulte o nosso [guia das chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#multiplekeys) para informações detalhadas sobre este assumpto.

Se estiver a utilizar outro software cliente SSH, consulte a documentação do utilizador. Está disponível um exemplo de utilização da solução open source `PuTTY` em [este manual](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

Continue com a [etapa 6 abaixo](#manage-access).

<a name="windows"></a>

#### 5.3: Instâncias Windows

##### 5.3.1: Concluir a instalação de uma instância Windows

Depois de verificar que a instância Windows está [instalada](#verify-status), abra o separador `Consola VNC`{.action} no seu [Área de Cliente OVHcloud](/links/manager).

De seguida, terá de finalizar a configuração inicial do seu sistema operativo Windows. Navegue pelos separadores e siga as etapas abaixo:

> [!tabs]
> 1. **Parâmetros regionais**
>>
>> Configure o seu **país/região**, o **idioma preferido do Windows** e a sua **configuração do teclado**. A seguir, clique no botão `Next`{.action} no canto inferior direito.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Palavra-passe de administrador**
>>
>> Defina uma palavra-passe para a sua conta Windows `Administrator` e confirme-a e clique em `Finish`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Ecrã de ligação**
>>
>> O Windows aplicará as suas configurações e, em seguida, exibirá a tela de login. Clique no botão `Send CtrlAltDel`{.action} no canto superior direito para iniciar sessão.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login de administrador**
>>
>> Introduza a palavra-passe `Administrator` que criou no passo anterior e clique no botão `Seta`.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>


<a name="login-windows"></a>

##### 5.3.2: Ligue-se remotamente a partir do Windows

No seu computador Windows local, pode utilizar a aplicação cliente `Remote Desktop Connection` para se ligar à sua instância.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduza o endereço IPv4 da sua instância, depois o seu identificador e a sua passphrase. Normalmente, é apresentada uma mensagem a avisar-lhe para confirmar a ligação devido a um certificado desconhecido. Clique em `Sim`{.action} para iniciar sessão.

> [!primary]
>
> Se encontrar dificuldades com este procedimento, verifique se as ligações remotas (RDP) são permitidas no seu dispositivo, verificando as definições do sistema, as regras da firewall e as possíveis restrições de rede.
>

<a name="login-other"></a>

##### 5.3.3: Ligar-se remotamente a partir de outro SO

As ligações a partir de um sistema operativo de ambiente de trabalho diferente do Windows requerem normalmente um software cliente compatível com o Remote Desktop Protocol (RDP). Alguns ambientes de desktop e sistemas operativos podem ter um cliente nativo integrado.

Independentemente do cliente que utiliza, só precisa do endereço IP da instância e da palavra-passe para que a conta `Administrator` possa conectar-se.

**Exemplo de utilização**

O software livre e open source `Remmina Remote Desktop Client` está disponível para várias distribuições de desktop GNU/Linux. Se não encontrar o Remmina no gestor de software do seu ambiente de trabalho, poderá consultá-lo no [site oficial](https://remmina.org/).

![Linux remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Ligação**
>>
>> Abra o Remmina e certifique-se de que o protocolo de ligação está definido "RDP". Introduza o endereço IPv4 da sua instância Public Cloud e prima `Enter`.<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Autenticação**
>>
>> Se aparecer uma mensagem de aviso de certificado, clique em `Yes`{.action}. Introduza o nome de utilizador e a palavra-passe para o Windows e clique em `OK`{.action} para iniciar sessão.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Parâmetros**
>>
>> Pode encontrar elementos úteis na barra de ferramentas à esquerda. Por exemplo, clique no ícone `Toggle dynamic resolution update`{.action} para melhorar a resolução da janela.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

<a name="vnc-console"></a>

#### 5.4: Acesso consola VNC

A consola VNC permite-lhe ligar-se às suas instâncias mesmo quando não estão disponíveis outros meios de acesso.

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa.

![Área de Cliente](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Selecione `Instances`{.action} na barra de navegação à esquerda em **Compute**. Clique no nome da instância e abra o separador `Consola VNC`{.action}.

![consola vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}


> [!tabs]
> **Instance com um SO GNU/Linux instalado**
>>
>> Uma conta de utilizador **com uma palavra-passe** deve ser configurada na instância para utilizar a consola VNC. Para definir uma palavra-passe para a conta pré-configurada, siga os passos de [secção 6.1.1 abaixo](#set-password).
>>
> **Instância Windows**
>>
>> Ligue-se com as suas credenciais Windows. Com uma sessão ativa, tem acesso imediato. Haverá uma latência notável em relação a uma ligação RDP.
>>

<a name="manage-access"></a>

### Etapa 6: primeiros passos numa nova instância

> [!primary]
>
>**Instâncias Windows**
>
> Não é necessária nenhuma etapa suplementar para as instâncias nas quais esteja instalado um sistema operativo Windows.
>
> Encontre mais informações na secção [Quer saber mais?](#go-further) abaixo.
>

<a name="user-mgmt"></a>

#### 6.1: Gestão dos utilizadores

<a name="set-password"></a>

> [!primary]
>
> Ao configurar as contas de utilizadores e os níveis de autorização numa instância, recomendamos que utilize as informações do nosso [guia da conta de utilizador](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Defina uma palavra-passe para a conta de utilizador atual

Em [ligação à instância](#manage-access), defina uma palavra-passe para o utilizador atual introduzindo o seguinte comando:

```bash
sudo passwd
```

Introduza uma frase secreta, confirme com `Enter` e repita.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**É suficiente para ativar os logins através da [consola VNC](#vnc-console) no seu [Área de Cliente OVHcloud](/links/manager)**. No entanto, as ligações SSH remotas com esta palavra-passe são sempre **desativadas** por predefinição.

<a name="remote-password"></a>

#### 6.1.2: Ativação da ligação remota por palavra-passe (opcional)

> [!warning]
>
> Esta etapa não é necessária e só deve ser executada se tiver um motivo válido para ativar este tipo de acesso; por exemplo, se tiver de se ligar temporariamente à instância a partir de um dispositivo no qual não está armazenada a sua chave SSH privada.
>
> O exemplo a seguir ilustra uma solução temporária numa instância na qual o Ubuntu está instalado. Observe que talvez seja necessário ajustar os controles com base no sistema operativo. Não é recomendado manter esta configuração permanentemente, pois adiciona um risco potencial de segurança ao abrir o sistema aos ataques baseados em SSH.
>

Depois de [aceder à instância](#manage-access), abra o ficheiro de configuração em questão com um editor de texto. Exemplo:

```bash
sudo nano /etc/ssh/sshd_config
```

Modifique a linha `#PasswordAuthentication yes` da seguinte forma:

```console
PasswordAuthentication yes
```

Altere a linha `Include /etc/ssh/sshd_config.d/*.conf` do seguinte modo:

```console
#Include /etc/ssh/sshd_config.d/*.conf
```

Guarde o ficheiro e feche o editor.

Reinicie o serviço SSH com um dos seguintes comandos:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Já pode iniciar sessão em SSH com um nome de utilizador e uma palavra-passe.

Anule essas modificações para voltar à ligação com chave para a instância.

<a name="add-keys"></a>

#### 6.2: Chaves SSH suplementares

Se pretender autorizar mais contas de utilizadores a aceder à instância, o procedimento padrão é o seguinte:

- Criar a conta na instância.
- Criar um novo par de chaves SSH no periférico em questão.
- Adicionar a chave pública à instância.

Consulte o nosso [manual dedicado](/pages/public_cloud/compute/configuring_additional_ssh_keys) para uma explicação pormenorizada destas etapas.

<a name="go-further"></a>

## Quer saber mais?

[Como ativar uma licença Windows para uma instância em modo privado](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Como reinicializar uma palavra-passe de administrador Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestão das instâncias na Área de Cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Como iniciar com OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)

[Como começar com o Horizon](/pages/public_cloud/compute/introducing_horizon)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa [comunidade de utilizadores](/links/community).