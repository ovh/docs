---
title: "Como criar uma instância Public Cloud e conectar-se a ela"
excerpt: "Descubra como configurar instâncias Public Cloud na sua área de cliente OVHcloud, assim como os primeiros passos com as suas instâncias"
updated: 2026-02-24
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

## Objetivo

As instâncias Public Cloud são fáceis de implementar e gerir. No entanto, enquanto membro do ecossistema Public Cloud da OVHcloud, as instâncias oferecem numerosas opções de configuração e podem ser adaptadas a diferentes casos de utilização. As instruções seguintes incluem todas as etapas necessárias (e também as etapas opcionais) para criar uma instância na área de cliente OVHcloud e aceder à distância.
Poderá depois ir mais longe com o seu projeto Public Cloud em função das suas necessidades.

**Este guia explica os primeiros passos com uma instância Public Cloud.**


## Requisitos

- Um [projeto Public Cloud](/links/public-cloud/public-cloud) na sua conta OVHcloud

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Caminho de navegação:** `Public Cloud`{.action} > Selecione o seu projeto

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!success]
> Tire partido de preços reduzidos comprometendo-se com um período de 1 a 36 meses nos seus recursos Public Cloud. Mais informações na nossa página [Savings Plans](/links/public-cloud/savings-plan).

## Instruções

> [!primary]
>
> Se ainda não criou nenhum projeto Public Cloud, comece pelo nosso [guia sobre a criação de um projeto](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
>
> **Os detalhes técnicos** importantes relativos ao Public Cloud da OVHcloud estão disponíveis em [esta página](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud).
>

### Apresentação do conteúdo

- [Objetivo](#objetivo)
- [Requisitos](#requisitos)
- [Instruções](#instrucoes)
  - [Apresentação do conteúdo](#apresentacao-do-conteudo)
  - [Etapa 1: criar um conjunto de chaves SSH](#etapa-1-criar-um-conjunto-de-chaves-ssh)
  - [Etapa 2: Importar as chaves SSH](#etapa-2-importar-as-chaves-ssh)
  - [Etapa 3: preparar a configuração de rede](#etapa-3-preparar-a-configuracao-de-rede)
  - [Etapa 4: criar a instância](#etapa-4-criar-a-instancia)
    - [Etapa 4.1: Nome da instância](#etapa-41-nome-da-instancia)
    - [Etapa 4.2: Selecione uma localização](#etapa-42-selecione-uma-localizacao)
    - [Etapa 4.3: Selecione um modelo](#etapa-43-selecione-um-modelo)
      - [Informações complementares](#informacoes-complementares)
    - [Etapa 4.4: Selecione uma imagem](#etapa-44-selecione-uma-imagem)
    - [Etapa 4.5: Selecione uma chave SSH (não aplicável às instâncias Windows)](#etapa-45-selecione-uma-chave-ssh-nao-aplicavel-as-instancias-windows)
    - [Etapa 4.6: Configure os parâmetros de backup](#etapa-46-configure-os-parametros-de-backup)
    - [Etapa 4.7: Configure a rede](#etapa-47-configure-a-rede)
    - [Etapa 4.8: Selecione um período de faturação](#etapa-48-selecione-um-periodo-de-faturacao)
    - [Etapa 4.9: Configure os parâmetros avançados](#etapa-49-configure-os-parametros-avancados)
      - [Instância flexível](#instancia-flexivel)
      - [Script de pós-instalação](#script-de-pos-instalacao)
    - [Etapa 4.10: Finalização da instância](#etapa-410-finalizacao-da-instancia)
  - [Etapa 5: Conectar-se à instância](#etapa-5-conectar-se-a-instancia)
    - [5.1: Verificar o estado da instância na área de cliente](#51-verificar-o-estado-da-instancia-na-area-de-cliente)
    - [5.2: Primeira ligação numa instância com OS GNU/Linux](#52-primeira-ligacao-numa-instancia-com-os-gnulinux)
    - [5.3: Instâncias Windows](#53-instancias-windows)
      - [5.3.1: Concluir a instalação de uma instância Windows](#531-concluir-a-instalacao-de-uma-instancia-windows)
      - [5.3.2: Ligue-se remotamente a partir do Windows](#532-ligue-se-remotamente-a-partir-do-windows)
      - [5.3.3: Ligar-se remotamente a partir de outro SO](#533-ligar-se-remotamente-a-partir-de-outro-so)
    - [5.4: Acesso consola VNC](#54-acesso-consola-vnc)
  - [Etapa 6: Primeiros passos numa nova instância](#etapa-6-primeiros-passos-numa-nova-instancia)
    - [6.1: Gestão de utilizadores](#61-gestao-de-utilizadores)
      - [6.1.1: Defina uma palavra-passe para a conta de utilizador atual](#611-defina-uma-palavra-passe-para-a-conta-de-utilizador-atual)
      - [6.1.2: Ativação da ligação remota por palavra-passe (opcional)](#612-ativacao-da-ligacao-remota-por-palavra-passe-opcional)
    - [6.2: Chaves SSH suplementares](#62-chaves-ssh-suplementares)
- [Quer saber mais?](#quer-saber-mais)

> [!primary]
>
> **Deverá fornecer uma chave SSH pública aquando da criação de instâncias Public Cloud na sua área de cliente.** Uma vez criada a instância, poderá configurar o seu acesso remoto de acordo com as suas necessidades.
>
> **Exceção**: a autenticação de início de sessão nas instâncias Windows requer um nome de utilizador e uma palavra-passe, uma vez que o Windows utiliza RDP (**R**emote **D**esktop **P**rotocol).
>

### Etapa 1: criar um conjunto de chaves SSH

Se já tiver um par de chaves SSH pronto a utilizar, pode ignorar esta etapa.

O [protocolo SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permite uma comunicação cliente-servidor encriptada. Um **par de chaves SSH** é composto por uma chave pública e uma chave privada.

- A **chave pública** é adicionada à sua instância Public Cloud (e pode também ser [armazenada na sua área de cliente OVHcloud](#etapa-2-importar-as-chaves-ssh)).
- A **chave privada** está armazenada no seu equipamento local e deve estar protegida contra o acesso não autorizado. Apenas os dispositivos clientes com a chave privada correspondente podem aceder à sua instância. Não é requerida nenhuma palavra-passe para a conta de utilizador para iniciar sessão.

Dispõe de 2 opções para criar e gerir as suas chaves SSH:

- A interface de linha de comandos do seu SO (simples cliente **OpenSSH**).
- Software adicional (compatível com o protocolo **OpenSSH**) com linha de comandos ou interface gráfica.

A maioria dos sistemas operativos de desktop contemporâneos incluem de forma nativa o cliente **OpenSSH** acessível através da aplicação de linha de comandos do sistema (`cmd`, `Powershell`, `Terminal`, etc.). Se não estiver familiarizado com a utilização das chaves SSH como método de autenticação, pode utilizar as instruções de [este guia](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) para criar o seu par de chaves.

Se utilizar outro software, consulte a documentação do utilizador. As instruções para a solução open source `PuTTY` estão disponíveis em [este guia](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

### Etapa 2: Importar as chaves SSH

Pode armazenar as suas chaves SSH públicas na secção `Public Cloud`{.action} da sua [área de cliente OVHcloud](/links/manager). Não é obrigatório, mas torna o processo de criação de instâncias mais prático.

> [!primary]
>
> As chaves SSH armazenadas permitem-lhe criar as suas instâncias mais rapidamente na sua área de cliente. Para alterar os pares de chaves e adicionar utilizadores depois de criar a instância, consulte o guia [chaves SSH adicionais](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> As chaves SSH públicas adicionadas à sua área de cliente OVHcloud estarão disponíveis para os serviços Public Cloud de todas as [regiões](/links/public-cloud/regions-pci). Pode armazenar chaves encriptadas com **RSA**, **ECDSA** e **ED25519**.
>

Abra `Chaves SSH`{.action} no menu à esquerda em **Parâmetros**. Clique no botão `Adicionar chave SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Na nova janela, introduza um nome para a chave. Preencha o campo `Chave` com a sua cadeia de chave pública, por exemplo, a criada na [etapa 1](#etapa-1-criar-um-conjunto-de-chaves-ssh). Confirme clicando em `Adicionar`{.action}.

![add key](images/24-addkey.png){.thumbnail}

Agora pode selecionar esta chave na [Etapa 4](#etapa-4-criar-a-instancia) para a adicionar a uma nova instância.

### Etapa 3: preparar a configuração de rede

Antes de criar a sua instância, recomendamos que estude a forma como a instância será utilizada em termos de ligação em rede.

- Se não precisar de configurar a instância com uma rede privada de momento, poderá aceder à [etapa 4](#etapa-4-criar-a-instancia). Pode criar uma instância exposta à Internet pública (ver **Modo Público** [abaixo](#networking-modes).)
- Se a instância tiver de ser ligada a uma nova rede privada (OVHcloud [vRack](/links/network/vrack)), tenha em conta que o vRack é criado automaticamente aquando da criação do seu projeto Public Cloud. Não é portanto necessária nenhuma ação prévia. Para mais informações, consulte o [guia sobre o vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modos

**Modo Público**

As instâncias em modo público são expostas à Internet diretamente através de IPv4/IPv6. Os endereços IP não podem ser alterados, mas as instâncias podem ter endereços [Additional IP](/links/network/additional-ip) associados ([incluindo o seu próprio IP](/links/network/byoip)) e podem estar ligadas a um [vRack](/links/network/vrack).

**Modo Privado**

As instâncias em modo privado só podem ser expostas à Internet através de um serviço [Gateway](/links/public-cloud/gateway) ou [Load Balancer](/links/public-cloud/load-balancer) e endereços [Floating IP](/links/public-cloud/floating-ip).

Para mais informações, consulte os nossos guias na secção [Public Cloud Network Services](/products/public-cloud-network). O [guia de conceitos](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) fornece uma introdução ao Public Cloud Networking.

**Modo Privado Local**

O modo privado local só se aplica se criar uma instância numa **Local Zone**. As instâncias podem ser expostas à Internet diretamente através de IPv4/IPv6. Apenas as instâncias de uma mesma Local Zone podem ser ligadas através de redes privadas. As Local Zones não são compatíveis com o [vRack](/links/network/vrack). Neste modo, DHCP fornece automaticamente endereços IP às suas instâncias.

Para saber mais, consulte a [página Web das Local Zones](/links/public-cloud/local-zones).

///

### Etapa 4: criar a instância

> [!primary]
>
> É obrigatória uma chave SSH pública aquando da criação de uma instância na área de cliente OVHcloud (exceto nas instâncias Windows).
>
> Consulte a [etapa 1](#etapa-1-criar-um-conjunto-de-chaves-ssh) e a [etapa 2](#etapa-2-importar-as-chaves-ssh) deste guia se não tiver chaves SSH prontas a utilizar.
>

Na página **Página Inicial**, clique em `Criar uma instância`{.action}.

#### Etapa 4.1: Nome da instância

Introduza um nome completo para a sua instância. A referência comercial do modelo de instância é o valor predefinido. Se necessário, pode também adicionar a região e a data para facilitar a identificação e a gestão das suas instâncias.

#### Etapa 4.2: Selecione uma localização

Selecione uma [localização](/links/public-cloud/regions-pci) mais próxima dos seus utilizadores ou clientes. Tenha em conta que se selecionar uma **Local Zone** nesta etapa, as limitações de rede serão aplicadas à instância (ver [Etapa 3](#networking-modes)).

Consulte também as informações da nossa [página Web das Local Zones](/links/public-cloud/local-zones) e da [documentação das capacidades das Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

A escolha da região determina o modo de implementação da sua instância (1-AZ, 3-AZ ou Local Zones). Para compreender as diferenças em termos de resiliência, disponibilidade e arquitetura, consulte o nosso guia [Comparação e resiliência dos modos de implementação – Compreender as regiões 3-AZ / 1-AZ / Local Zones](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).

#### Etapa 4.3: Selecione um modelo

Nesta etapa, escolherá o modelo de instância (também chamado flavour), que determina os recursos alocados à sua instância: processador, memória e capacidades associadas. Abra a lista pendente `Modelo da instância`, selecione o tipo de modelo mais adaptado ao seu caso de utilização para aceder à nossa gama de instâncias otimizadas.

O tipo de modelo `Discovery` reúne instâncias com recursos partilhados, propostas a preços competitivos. São particularmente adequadas para descobrir o Public Cloud OVHcloud, realizar testes ou alojar cargas de trabalho ligeiras como aplicações web.

Os modelos `Metal Instances` oferecem recursos físicos inteiramente dedicados, garantindo desempenhos constantes e um isolamento máximo para os workloads mais exigentes.

> [!primary]
>
> O total dos seus recursos Public Cloud será inicialmente limitado por razões de controlo de custos e de segurança. Pode verificar estas quotas clicando em `Quota e Regiões`{.action} na barra de navegação à esquerda em **Parâmetros**. Consulte [a documentação dedicada](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) para mais informações.
>
> Tenha em atenção que pode **atualizar** a sua instância após a sua criação para dispor de mais recursos disponíveis. No entanto, a mudança para um modelo mais pequeno não é possível com uma instância regular. Consulte a **etapa 4.9** abaixo para mais informações sobre este assunto.
>

##### Informações complementares

/// details | Categorias de modelos de instâncias

| Tipo | Recursos garantidos | Notas de utilização |
| :---         |     :---:      |          :--- |
| Best Sellers   | ✓     | Modelos mais utilizados.    |
| General Purpose   | ✓     | Servidores de desenvolvimento, aplicações web ou profissionais    |
| Compute Optimized     | ✓       | Codificação de vídeo ou outro cálculo de alta performance      |
| Memory Optimized    | ✓     | Bases de dados, análises e cálculos em memória    |
| Storage Optimized   | ✓     | Otimizado para transferência de dados para disco    |
| Discovery    | -       | Alojamento em recursos partilhados para os ambientes de teste e de desenvolvimento      |
| Cloud GPU     | ✓       | Potência de processamento massivamente paralelo para aplicações especializadas (renderização, big data, deep learning, etc.)       |
| Metal Instances | ✓ | Recursos dedicados com acesso direto aos recursos de computação, armazenamento e rede|

///

/// details | Regiões e Local Zones

**Regiões**

Uma **região** é definida como uma localização no mundo composta por um ou vários datacenters onde os serviços da OVHcloud estão alojados. Pode encontrar mais informações sobre as regiões, a distribuição geográfica e a disponibilidade dos serviços na nossa [página Web dedicada](/links/public-cloud/regions-pci) e na nossa [página Web sobre as localizações das infraestruturas OVHcloud](/links/infrareg).

**Local Zones**

As Local Zones são uma extensão das **regiões** que aproximam os serviços da OVHcloud de sites específicos, oferecendo uma latência reduzida e desempenhos melhorados para as aplicações. Pode encontrar mais informações na [página Web das Local Zones](/links/public-cloud/local-zones) e na [documentação das capacidades das Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

#### Etapa 4.4: Selecione uma imagem

Abra a lista pendente `Tipo de distribuição`, selecione a categoria correspondente à sua necessidade e escolha o sistema operativo a implementar na sua instância através do menu pendente `Versão da imagem`.

As imagens disponíveis nesta etapa dependem das escolhas efetuadas nas etapas anteriores, ou seja, da compatibilidade com o modelo de instância e da disponibilidade regional. Por exemplo, se deseja selecionar um sistema operativo Windows e não existem opções no separador Windows, deve alterar as suas escolhas das etapas anteriores.

> [!primary]
>
> Se selecionar um sistema operativo que exija uma licença paga, estes custos serão automaticamente incluídos na faturação do projeto.
>

#### Etapa 4.5: Selecione uma chave SSH (não aplicável às instâncias Windows)

Com exceção das instâncias Windows, a configuração da sua instância requer também **a adição de uma chave SSH pública**. Tem duas opções:

- Utilizar uma chave pública já armazenada na área de cliente OVHcloud
- Introduzir diretamente uma chave pública

Clique nos separadores abaixo para visualizar a apresentação:

> [!tabs]
> **Utilizar uma chave armazenada**
>>
>> Para adicionar uma chave armazenada na sua área de cliente OVHcloud (consulte [Etapa 2](#etapa-2-importar-as-chaves-ssh)), selecione-a na lista.
>>
> **Introduzir diretamente uma chave**
>>
>> Para adicionar uma chave pública colando a cadeia de chaves, clique no botão `Criar uma nova chave SSH`{.action}.
>>
>> Introduza um nome para a chave e a cadeia de chaves nos respetivos campos. A seguir, clique em `Validar a chave`{.action}.
>>


#### Etapa 4.6: Configure os parâmetros de backup

Os [backups automatizados](/pages/public_cloud/compute/save_an_instance) são ativados por predefinição. Consulte as informações tarifárias e os detalhes complementares antes de prosseguir.

Em seguida, selecione o tipo de rotação, ou seja, o número máximo de backups conservados em histórico: 7 ou 14 dias.

#### Etapa 4.7: Configure a rede

Nesta etapa, vai configurar a rede da sua instância.

**Rede privada**

Pode ligar a sua instância a uma [rede privada](#networking-modes) e atribuir-lhe um endereço [Floating IP](/links/public-cloud/floating-ip).

Ao clicar em `Criar uma rede privada`{.action}, pode criar uma diretamente:

- Dar um nome à rede
- **Escolher o VLAN ID:** identificador que permite interligar vários serviços e recursos dentro de uma mesma rede privada, através de um número de segmentação de rede comum
- **Definir o CIDR:** intervalo de endereços IP da rede
- **Ativar o DHCP selecionando a caixa correspondente, se necessário:** ative esta opção se pretender uma atribuição automática dos endereços IP

> [!primary]
>
> A instância pode permanecer inteiramente privada se não lhe atribuir um IP público.
>

**Gateway**

Pode ativar a opção para atribuir uma gateway à sua rede. Por predefinição, a gateway é de tamanho S, mas poderá ajustar o seu tamanho posteriormente nos parâmetros.

**Atribuir conectividade pública**

Pode ativar ou desativar esta funcionalidade em função das suas necessidades. Se optar por ativá-la, duas opções estão disponíveis:

- **Basic Public IP:** um endereço IP público temporário, que não persiste para além da duração de vida da instância. Note que a utilização de um Basic Public IP não é compatível com uma gateway.
- **Floating IP:** pode criar um novo Floating IP ou reutilizar um endereço existente, permitindo um IP público persistente e desassociável da instância.

#### Etapa 4.8: Selecione um período de faturação

> [!primary]
>
> Tenha em conta que, consoante o modelo de instância escolhido, a faturação **à hora** pode ser a única seleção apresentada. Trata-se de uma limitação temporária e, em breve, estarão disponíveis novas opções de faturação do Public Cloud.
>

> [!tabs]
> **Faturação mensal**
>>
>> A faturação mensal irá reduzir os custos ao longo do tempo, mas **não pode ser alterada** para uma faturação à hora, após a instância ter sido criada.
>>
> **Faturação à hora**
>>
>> A faturação à hora é a melhor escolha se não definiu claramente a duração do período de utilização. Se decidir conservar a instância para uma utilização a longo prazo, poderá sempre [passar para uma subscrição mensal](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).
>>
>> A instância será faturada enquanto não for **eliminada**, independentemente da utilização real da instância.
>>

Consulte a nossa documentação de faturação dedicada:

- [Faturação do Public Cloud](/pages/public_cloud/public_cloud_cross_functional/analyze_billing)
- [FAQ sobre a faturação mensal](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Uma vez terminada a configuração da instância, poderá optar por clicar no botão `Iniciar a minha instância`{.action} ou configurar os parâmetros avançados (ver abaixo). O fornecimento do seu serviço pode demorar alguns minutos.

#### Etapa 4.9: Configure os parâmetros avançados

##### Instância flexível

Uma instância Flex é uma instância com um único disco de 50 GB, concebida para oferecer um processo de criação e restauro de snapshots mais rápido.

Permite redimensionar a instância para modelos superiores ou inferiores, mantendo um espaço de armazenamento fixo. Os modelos clássicos autorizam apenas um redimensionamento para modelos superiores.

##### Script de pós-instalação

Pode adicionar [o seu script de pós-instalação](/pages/public_cloud/compute/launching_script_when_creating_instance) neste campo.

#### Etapa 4.10: Finalização da instância

No lado direito do ecrã, encontra-se o resumo da sua configuração. Nesta secção, poderá configurar o número de instâncias a criar. Pode criar várias instâncias em função das seleções efetuadas nas etapas de criação, mas [os limites de quota de recursos](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) serão aplicados.

Uma vez terminada a configuração da instância, clique no botão `Iniciar a minha instância`{.action}. O fornecimento do seu serviço pode demorar alguns minutos.

### Etapa 5: Conectar-se à instância

As instruções desta parte dizem respeito às ligações remotas através dos protocolos **OpenSSH** e **RDP** via uma rede pública (Internet).

Tenha em conta que propomos meios de acesso alternativos (principalmente utilizados para resolução de problemas) que só estão disponíveis através da sua área de cliente OVHcloud:

- [Consola VNC](#54-acesso-consola-vnc)
- [Modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Se instalou um **SO com aplicação**, consulte o nosso [guia de primeiros passos com as aplicações](/pages/public_cloud/compute/apps_first_steps) bem como a documentação oficial do editor do SO.
>

#### 5.1: Verificar o estado da instância na área de cliente

Selecione `Instâncias`{.action} na barra de navegação à esquerda em **Compute**. A sua instância está pronta quando o estado está definido em `Ativado` na tabela. Se a instância tiver sido criada recentemente e tiver um estado diferente, clique no botão "Atualizar" junto do filtro de pesquisa.

![page instâncias](images/24-instance-connect01.png){.thumbnail}

Clique no nome da instância nesta tabela para abrir o `Dashboard`{.action} no qual pode encontrar todas as informações relativas à instância. Para saber mais sobre as funções disponíveis nesta página, consulte o guia [Gestão das instâncias na área de cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Um **utilizador com permissões elevadas (*sudo*) é automaticamente criado** na instância. O nome de utilizador reflete a imagem instalada, por exemplo "ubuntu", "debian", "fedora", etc. Pode verificá-lo no lado direito do `Dashboard`{.action} na secção **Redes**.

![page instâncias](images/24-instance-connect02.png){.thumbnail}

Se o seu [par de chaves SSH estiver corretamente configurado](#etapa-1-criar-um-conjunto-de-chaves-ssh), pode agora ligar-se à instância com o utilizador pré-configurado e a sua chave SSH. Consulte os parágrafos seguintes para obter instruções mais detalhadas.

> [!primary]
>
> O acesso através da **consola VNC** numa nova instância OS GNU/Linux criada na área de cliente deve ser primeiro ativado tal como descrito na [secção do guia abaixo](#54-acesso-consola-vnc).
>
> Este guia não cobre a rede privada para as instâncias. Consulte a nossa documentação [Public Cloud Network Services](/products/public-cloud-network) sobre este assunto.
>

#### 5.2: Primeira ligação numa instância com OS GNU/Linux

> [!primary]
>
> Se receber mensagens de erro sobre as suas **chaves SSH**, verifique se o seu dispositivo local dispõe de uma chave SSH privada corretamente configurada utilizando as informações de [este guia](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).<br>
> Se continuar a ter problemas, pode substituir o par de chaves utilizando [este guia](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Se criou uma instância sem chave SSH através da [API OVHcloud](/pages/manage_and_operate/api/first-steps) ou da [interface OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), só pode adicionar uma chave SSH à sua instância através do [modo rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) seguindo as instruções descritas em [este guia](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

Pode aceder à sua instância imediatamente após a sua criação através da interface de linha de comandos da sua estação de trabalho local (`Terminal`, `Command prompt`, `Powershell`, etc.) via SSH.

```bash
ssh username@IPv4_instance
```

Exemplo:

```bash
ssh ubuntu@203.0.113.101
```

[Em função da sua configuração](#etapa-1-criar-um-conjunto-de-chaves-ssh), deverá introduzir uma frase secreta que proteja a sua chave privada ou especificar o caminho de acesso ao seu ficheiro de chave. Consulte o nosso [guia das chaves SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) para informações detalhadas sobre este assunto.

Se estiver a utilizar outro software cliente SSH, consulte a documentação do utilizador. Está disponível um exemplo de utilização da solução open source `PuTTY` em [este guia](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

Continue com a [etapa 6 abaixo](#etapa-6-primeiros-passos-numa-nova-instancia).

#### 5.3: Instâncias Windows

##### 5.3.1: Concluir a instalação de uma instância Windows

Depois de verificar que a instância Windows está [instalada](#51-verificar-o-estado-da-instancia-na-area-de-cliente), abra o separador `Consola VNC`{.action} na sua [área de cliente OVHcloud](/links/manager).

De seguida, terá de finalizar a configuração inicial do seu sistema operativo Windows. Navegue pelos separadores e siga as etapas abaixo:

> [!tabs]
> 1. **Parâmetros regionais**
>>
>> Configure o seu **país/região**, o **idioma preferido do Windows** e a sua **configuração do teclado**. A seguir, clique no botão `Seguinte`{.action} no canto inferior direito.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Palavra-passe de administrador**
>>
>> Defina uma palavra-passe para a sua conta Windows `Administrator` e confirme-a e clique em `Terminar`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Ecrã de ligação**
>>
>> O Windows aplicará as suas definições e, em seguida, apresentará o ecrã de ligação. Clique no botão `Send CtrlAltDel`{.action} no canto superior direito para iniciar sessão.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login de administrador**
>>
>> Introduza a palavra-passe `Administrator` que criou na etapa anterior e clique no botão "Seta".<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### 5.3.2: Ligue-se remotamente a partir do Windows

No seu computador Windows local, pode utilizar a aplicação cliente `Remote Desktop Connection` para se ligar à sua instância.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduza o endereço IPv4 da sua instância, depois o seu identificador e a sua passphrase. Normalmente, é apresentada uma mensagem de aviso a pedir-lhe para confirmar a ligação devido a um certificado desconhecido. Clique em `Sim`{.action} para se ligar.

> [!primary]
>
> Se encontrar dificuldades com este procedimento, verifique se as ligações remotas (RDP) são permitidas no seu dispositivo, verificando as definições do sistema, as regras da firewall e as possíveis restrições de rede.
>

##### 5.3.3: Ligar-se remotamente a partir de outro SO

As ligações a partir de um sistema operativo de desktop diferente do Windows requerem normalmente um software cliente compatível com o `Remote Desktop Protocol` (RDP). Alguns ambientes de desktop e sistemas operativos podem ter um cliente nativo integrado.

Independentemente do cliente que utiliza, só precisa do endereço IP da instância e da palavra-passe para que a conta `Administrator` possa conectar-se.

**Exemplo de utilização**

O software livre e open source `Remmina Remote Desktop Client` está disponível para várias distribuições de desktop GNU/Linux. Se não encontrar o Remmina no gestor de software do seu ambiente de trabalho, poderá obtê-lo no [site oficial](https://remmina.org/).

![linux remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Ligação**
>>
>> Abra o Remmina e certifique-se de que o protocolo de ligação está definido como "RDP". Introduza o endereço IPv4 da sua instância Public Cloud e prima "Enter".<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Autenticação**
>>
>> Se aparecer uma mensagem de aviso de certificado, clique em `Yes`{.action}. Introduza o nome de utilizador e a palavra-passe para o Windows e clique em `OK`{.action} para estabelecer a ligação.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Parâmetros**
>>
>> Pode encontrar elementos úteis na barra de ferramentas à esquerda. Por exemplo, clique no ícone `Toggle dynamic resolution update`{.action} para melhorar a resolução da janela.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

#### 5.4: Acesso consola VNC

A consola VNC permite-lhe ligar-se às suas instâncias mesmo quando não estão disponíveis outros meios de acesso.

Selecione `Instâncias`{.action} na barra de navegação à esquerda em **Compute**. Clique no nome da instância e abra o separador `Consola VNC`{.action}.

![consola vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Instância com um SO GNU/Linux instalado**
>>
>> Uma conta de utilizador **com uma palavra-passe** deve ser configurada na instância para utilizar a consola VNC. Para definir uma palavra-passe para a conta pré-configurada, siga os passos da [secção 6.1.1 abaixo](#611-defina-uma-palavra-passe-para-a-conta-de-utilizador-atual).
>>
> **Instância Windows**
>>
>> Ligue-se com as suas credenciais Windows. Com uma sessão ativa, tem acesso imediato. Haverá uma latência notável em relação a uma ligação RDP.
>>

### Etapa 6: Primeiros passos numa nova instância

> [!primary]
>
> **Instâncias Windows**
>
> Não é necessária nenhuma etapa suplementar para as instâncias nas quais esteja instalado um sistema operativo Windows.
>
> Encontre mais informações na secção [Quer saber mais?](#quer-saber-mais) abaixo.
>

#### 6.1: Gestão de utilizadores

> [!primary]
>
> Ao configurar as contas de utilizadores e os níveis de autorização numa instância, recomendamos que utilize as informações do nosso [guia da conta de utilizador](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1: Defina uma palavra-passe para a conta de utilizador atual

Ao [ligar-se à instância](#etapa-6-primeiros-passos-numa-nova-instancia), defina uma palavra-passe para o utilizador atual introduzindo o seguinte comando:

```bash
sudo passwd
```

Introduza uma frase secreta, confirme com `Enter` e repita.

```console
New password:
Retype new password:
passwd: password updated successfully
```

**É suficiente para ativar os logins através da [consola VNC](#54-acesso-consola-vnc) na sua [área de cliente OVHcloud](/links/manager)**. No entanto, as ligações SSH remotas com esta palavra-passe são sempre **desativadas** por predefinição.

##### 6.1.2: Ativação da ligação remota por palavra-passe (opcional)

> [!warning]
>
> Esta etapa não é necessária e só deve ser executada se tiver um motivo válido para ativar este tipo de acesso; por exemplo, se tiver de se ligar temporariamente à instância a partir de um dispositivo no qual não está armazenada a sua chave SSH privada.
>
> O exemplo seguinte ilustra uma solução temporária numa instância na qual o Ubuntu está instalado. Tenha em conta que poderá ser necessário ajustar os comandos em função do seu sistema operativo. Não é recomendado manter esta configuração permanentemente, pois adiciona um risco potencial de segurança ao abrir o sistema aos ataques baseados em SSH.
>

Depois de [aceder à instância](#etapa-6-primeiros-passos-numa-nova-instancia), abra o ficheiro de configuração em questão com um editor de texto. Exemplo:

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

Anule estas modificações para voltar à ligação com chave para a instância.

#### 6.2: Chaves SSH suplementares

Se pretender autorizar mais contas de utilizadores a aceder à instância, o procedimento padrão é o seguinte:

- Criar a conta na instância.
- Criar um novo par de chaves SSH no periférico em questão.
- Adicionar a chave pública à instância.

Consulte o nosso [guia dedicado](/pages/public_cloud/compute/configuring_additional_ssh_keys) para uma explicação pormenorizada destas etapas.

## Quer saber mais?

[Como ativar uma licença Windows para uma instância em modo privado](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Como reinicializar uma palavra-passe de administrador Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestão das instâncias na área de cliente](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Como começar com o OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

[Como começar com o Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa [comunidade de utilizadores](/links/community).
