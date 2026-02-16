---
title: 'Configuração do vRack Public Cloud'
excerpt: 'Saiba como configurar o vRack para as instâncias de Public Cloud'
updated: 2025-12-23
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

O [vRack](/links/network/vrack) é uma rede privada que lhe permite configurar o endereçamento entre vários Servidores dedicados OVHcloud. Mas também lhe permite adicionar [instâncias Public Cloud](/links/public-cloud/compute) à sua rede privada para criar uma infraestrutura de recursos físicos e virtuais.

**Este guia tem como objetivo acompanhá-lo na configuração das suas instâncias Public Cloud no seu vRack.**

## Requisitos

- Ter um [projeto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)
- Estar ligado ao seu [Área de Cliente OVHcloud](/links/manager)
- Ter [criado um utilizador OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (opcional)
- Conhecimentos básicos de redes

## Apresentação das interfaces

Seja para criar o seu vRack ou adicionar uma instância a esta rede, poderá utilizar o Área de Cliente OVHcloud, as APIv6 OVHcloud, as API OpenStack, a interface Horizon ou o Terraform.

Consoante o seu perfil técnico e necessidades, terá de escolher qual a interface ou método a utilizar. Assim, para cada ação, apresentamos-lhe as diferentes abordagens possíveis.

**Aqui está uma descrição rápida das ações possíveis consoante o método/interface escolhido:** <a name="horizon"></a>

/// details | Área de Cliente OVHcloud

[O Área de Cliente OVHcloud](/links/manager) é uma interface totalmente e exclusivamente visual, o que a torna uma interface ideal para a gestão de vários VLAN. Também terá a possibilidade de personalizar a faixa de IP privado, que por defeito é 10.1.0.0/16.

Os VLAN serão implantados na região selecionada. Também terá a possibilidade de ativar ou não as gateways, ativar as distribuições DHCP, etc.

Também poderá gerir a faturação dos seus serviços através do seu Área de Cliente OVHcloud.

///

/// details | Interface Horizon

Interface visual independente da OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/) é a implementação original do painel de controlo do OpenStack, que fornece uma interface web aos serviços OpenStack, incluindo Nova, Swift, Keystone, etc.

Esta interface completa e técnica permite-lhe gerir a quase totalidade das ações OpenStack. Esta será uma das interfaces necessárias se quiser gerir mais de dois VLAN, adicionar interfaces de rede privadas às suas instâncias, gerir imagens personalizadas, etc.

Consulte o guia "[Apresentação de Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)" para se familiarizar com o Horizon.

> [!primary]
> O Horizon funciona por zonas, por isso, lembre-se de escolher a sua zona geográfica de trabalho no canto superior esquerdo da sua interface (GRA5, SBG3, BHS1, etc.)
>

///

/// details | APIv6 OVHcloud

Toda a ação que realiza no Área de Cliente OVHcloud recorre às [APIv6 OVHcloud](/links/api). 
Pode até ir mais longe nas APIs do que no seu espaço cliente.

A interface é menos visual do que o Área de Cliente OVHcloud, mas permitirá realizar um grande número de ações. Poderá gerir e personalizar os seus VLAN, adicionar interfaces às suas instâncias ou criar servidores altamente personalizados.

Por vezes, será necessário recuperar várias informações antes de utilizar uma API específica.

Pode aceder facilmente às APIs a partir [da nossa página web](/links/api), mas também criar os seus scripts PHP ou Python para os chamar.

Assim, será possível automatizar livremente as tarefas básicas através de scripts, otimizar as suas próprias funções, etc.

Consulte o guia "[Primeiros passos com as APIs OVHcloud](/pages/manage_and_operate/api/first-steps)" para se familiarizar com a utilização das APIv6 OVHcloud.

///

/// details | API OpenStack

É possível administrar os serviços Public Cloud através de comandos Linux ou Windows, após o download e instalação das ferramentas OpenStack.

Este método exige bons conhecimentos de Linux ou Windows para o utilizar, mas permite aproveitar toda a potência do OpenStack através deste meio.

Consoante a camada que deseja gerir, deverá utilizar o cliente Nova (Compute), Neutron (rede), Glance (Imagem) ou ainda Swift (Object Storage). O mais recente da família, o cliente OpenStack, permite-lhe gerir diretamente a quase totalidade das camadas OpenStack.

Através da API OpenStack, também pode facilmente automatizar esta gestão através dos seus scripts.

Para se familiarizar com a API OpenStack, consulte primeiro os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Poderá, consoante a sua necessidade, utilizar as APIs dedicadas ao OpenStack:

- Nova (Compute)
- Glance (imagem)
- Cinder (imagem)
- Neutron (rede)

> [!primary]
> Em alguns casos, será mais simples utilizar as APIs OpenStack e, em outros, as APIs Nova, Neutron, etc.
>
> Da mesma forma, algumas funcionalidades podem estar ausentes da API OpenStack consoante a versão do seu cliente e do seu sistema operativo.
> No âmbito deste guia, optou-se por lhe apresentar as alternativas mais simples e intuitivas.
> Pode consultar a qualquer momento a [documentação oficial do OpenStack](https://docs.openstack.org/fr/) se desejar ir mais longe na sua utilização.
>

///

/// details | CLI OpenStack

Pode gerir os seus serviços Public Cloud e o seu vRack OVHcloud diretamente a partir do seu terminal Linux ou Windows através da CLI OpenStack.

Esta interface permite gerir todas as camadas OpenStack:

- Nova: instâncias (Compute)
- Neutron: redes
- Glance: imagens
- Cinder: volumes

A CLI centraliza estas funcionalidades e pode ser integrada nos seus scripts para automatizar as suas tarefas.

Antes de começar, consulte os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

> [!primary]
>
> A CLI OpenStack é prática para gerir o seu vRack, no entanto algumas funções podem variar consoante a versão do cliente ou do sistema operativo. Consulte a [documentação oficial do OpenStack](https://docs.openstack.org/fr/).
>

///

/// details | Terraform

O Terraform também permite gerir as infraestruturas da OVHcloud.

Para isso, terá de escolher o fornecedor e o recurso Terraform adequados. Encontre mais informações no nosso [guia de utilização do Terraform](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

///

## Instruções

### Passo 1: Ativar e gerir um vRack <a name="activation"></a>

> [!warning]
>
> O vRack é gerido ao nível da infraestrutura OVHcloud, o que significa que só o pode administrar a partir do seu espaço cliente e das APIv6 OVHcloud.
>

> [!tabs]
> A partir da Área de Cliente OVHcloud
>> > [!primary]
>> >
>> > Esta etapa não se aplica aos projetos recentemente criados, que são automaticamente fornecidos com um vRack. Para visualizar o vRack uma vez criado o projeto, aceda à secção `Network`{.action} e clique em `Rede privada vRack`{.action} para ver o(s) vRack(s).
>> >
>>
>> Se tiver um projeto mais antigo e não tiver um vRack, terá de encomendar um. Este produto é gratuito e a disponibilização demora apenas alguns minutos.
>>
>> No menu localizado à esquerda do ecrã, clique no botão `Adicionar um serviço`{.action} (ícone de cesta de compras). Utilize o filtro no topo da página ou desça para encontrar o serviço `vRack`{.action}.
>>
>> ![Encomendar o vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}
>>
>> Será redirecionado para outra página para validar a encomenda, a operação demorará alguns minutos.
>>
>> Uma vez o serviço ativo, encontrará-o no seu espaço cliente na secção `Network`{.action} > `Rede privada vRack`{.action}, sob a designação "pn-xxxxxx".
>>
>> Clique no seu vRack, selecione o projeto que deseja adicionar na lista dos serviços elegíveis e clique no botão `Adicionar`{.action}.
>>
>> ![adicionar o projeto](images/addprojectvrack.png){.thumbnail}
>>
>> Para continuar a configuração do vRack a partir da Área de Cliente OVHcloud, continue a ler este guia a partir do [passo 2: Criar uma rede privada no vRack](#create-pn-in-vrack), separador **A partir da Área de Cliente OVHcloud**.
>>
> A partir das APIv6 OVHcloud
>>
>> **Passo 1: Ativar e gerir um vRack**
>>
>> Conecte-se às APIv6 OVHcloud seguindo o guia "[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)".
>>
>> Uma vez autenticado, siga as etapas descritas em baixo:
>>
>> **Criação do cesto**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart
>> >
>>
>> > [!primary]
>> >
>> > Este pedido vai criar um identificador para o seu "cesto". Poderá adicionar tantos artigos quanto quiser antes de o validar.
>> >
>> > Neste caso, a encomenda de um vRack é gratuita. Recupere o número do seu cesto (cartId), será indispensável para a continuação.
>> >
>>
>> **Recuperação das informações necessárias à encomenda do vRack**
>>
>> > [!api]
>> >
>> > @api {v1} /order GET /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Este pedido vai permitir-lhe recuperar todas as informações necessárias à encomenda do vRack. Copie os seguintes elementos:
>> >
>> > *cartId*, *duration*, *planCode*, e *pricingMode*.
>> >
>>
>> **Adição do vRack ao cesto**
>> 
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Este pedido vai permitir-lhe adicionar o vRack ao cesto, adicionando todas as informações necessárias à encomenda.
>> >
>> > No caso do vRack, daria por exemplo:
>> >
>> > cartId: [identificador do seu cesto]
>> >
>> > duration: "P1M"
>> >
>> > planCode: "vrack"
>> >
>> > pricingMode: "default"
>> >
>> > quantity: 1
>> >
>>
>> Uma vez que tenha validado a encomenda, obterá um número de artigo ("itemId"). Mantenha esta informação, será útil se desejar efetuar alterações antes da validação do cesto.
>>
>> **Validação do cesto**
>>
>> Uma vez que tenha colocado todos os artigos no seu cesto, terá de o validar:
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/checkout
>> >
>>
>> > [!primary]
>> >
>> > Este pedido vai validar o cesto e vai criar um bon de encomenda (orderId). Mantenha esta informação, será necessária para a validação da encomenda.
>> >
>>
>> **Validação da encomenda final**
>>
>> Para validar a encomenda, tem duas possibilidades:
>>
>> - Passar pela URL visível quando o cesto é validado.  
>> Exemplo de URL: https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx
>>
>> - Validar pelo seguinte pedido:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/order/{orderId}/payWithRegisteredPaymentMean
>> >
>>
>> > [!primary]
>> >
>> > Mesmo que se trate de um bon de encomenda a 0 €, é necessário simular um pagamento do bon de encomenda (orderId). O seu bon de encomenda será então validado e o seu processamento começará.
>> >
>>
>> Uma vez que o bon de encomenda gratuito é validado, pode ser necessário um período de alguns minutos para que o vRack fique ativo.
>>
>> **Passo 2: Adicionar o seu projeto Public Cloud ao vRack**
>>
>> Uma vez que o vRack está ativo, terá de integrar o(s) seu(s) projeto(s) Public Cloud ao vRack.
>>
>> Conecte-se às APIv6 OVHcloud seguindo o guia "[Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps)".
>>
>> No caso em que o identificador do projeto Public Cloud não é conhecido, as seguintes chamadas permitirão que o encontre.
>>
>> **Identificação do projeto**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Este pedido permite recuperar a lista dos projetos.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Este pedido permite identificar o projeto através do campo "description".
>> >
>>
>> **Adição do projeto ao vRack**
>>
>> Uma vez que o identificador do projeto e o nome do vRack são conhecidos, a sua associação faz-se através do seguinte pedido:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack POST /vrack/{serviceName}/cloudProject
>> >
>>
>> Preencha os campos do pedido com as informações recolhidas anteriormente:
>>
>> - **serviceName**: nome do vRack sob a forma "pn-xxxxxx".  
>> - **project**: identificador do projeto Public Cloud, sob a forma de uma cadeia de 32 caracteres.
>>
>> > [!primary]
>> >
>> > Este pedido inicializa a associação do projeto ao vRack, é necessário depois recuperar o identificador da tarefa para verificar o seu avanço.
>> >
>>
>> **Verificação do avanço da tarefa de adição**
>>
>> Pode consultar a evolução da adição do projeto ao vRack através deste pedido:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack GET /vrack/{serviceName}/cloudProject/{project}
>> >
>>
>> > [!primary]
>> >
>> > Este pedido é facultativo e permite apenas verificar o estado da tarefa. Uma vez que esta esteja terminada, pode passar para a etapa seguinte.
>> >
>>
 
### Passo 2: Criar uma rede privada no vRack <a name="create-pn-in-vrack"></a>

É necessário criar uma rede privada com uma rede local virtual (VLAN) para que as instâncias ligadas ao vRack possam comunicar entre si.

Na oferta Public Cloud, pode criar até 4 000 VLAN num único vRack. Isso significa que pode utilizar cada endereço IP privado até 4 000 vezes.
Assim, por exemplo, o IP 192.168.0.10 da VLAN 2 é diferente do IP 192.168.0.10 da VLAN 42.

Isso pode ser útil para segmentar o seu vRack entre vários redes virtuais.

A partir da Área de Cliente OVHcloud e das APIv6 OVHcloud, poderá personalizar todos os parâmetros: modo e região de implementação, nome e ID da VLAN, intervalo de endereços IP privados (por exemplo, 10.0.0.0/16), DHCP e Gateway.

> [!primary]
> Nos Servidores dedicados, por defeito, está na VLAN 0. O funcionamento da infraestrutura OpenStack faz com que tenha de especificar o número da sua VLAN diretamente ao nível da infraestrutura.
>
> Ao contrário dos Servidores dedicados, não é necessário "tagguar" a VLAN diretamente numa instância Public Cloud.
>
> Para mais informações sobre a gestão das VLAN do vRack dos Servidores dedicados, consulte este guia: [Criar múltiplas VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

> [!warning]
> O vRack sendo uma infraestrutura gerida ao nível da OVHcloud, só o poderá administrar através da Área de Cliente OVHcloud e das APIv6 OVHcloud.
>
> A OpenStack não estando situada ao mesmo nível da infraestrutura, não poderá personalizar as VLAN através da interface Horizon ou das API OpenStack.
>

> [!tabs]
> A partir da Área de Cliente OVHcloud
>> Após a criação do seu vRack, o próximo passo é criar uma rede privada.
>>
>> No separador `Public cloud`{.action}, clique em `Private Network`{.action} no menu à esquerda em **Network**.
>>
>> ![Criação de VLAN](images/vrack2022-03.png){.thumbnail}
>>
>> Clique agora em `Criar uma rede privada`{.action}. A página seguinte permitirá personalizar vários parâmetros.
>>
>> Para começar, selecione um modo de implantação e a região onde pretende criar a rede privada.
>>
>> ![seleccionar região](images/vrack5-2024.png){.thumbnail}
>>
>> Na etapa seguinte, são apresentadas-lhe várias opções:
>>
>> ![criar rede](images/vrack6-2022.png){.thumbnail}
>>
>> No campo **Nome da rede privada**, defina um nome para a sua rede privada.
>>
>> **Opções de rede do layer 2**
>>
>> Se marcar a caixa `Definir um ID de VLAN`{.action}, terá de escolher um número de VLAN entre 0 e 4000.
>>
>> Se não marcar esta caixa, o sistema atribuirá um número de VLAN aleatório.
>>
>> No caso em que precise de comunicar Servidores dedicados OVHcloud com VLAN taggueados, consulte o seguinte guia: [Criar vários VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
>> **Opções de distribuição de endereços DHCP**
>>
>> A faixa DHCP por defeito é 10.1.0.0/16. Pode utilizar outra faixa privada à sua escolha ou desativar o DHCP para esta rede privada.
>>
>> **Opções de gateway de rede**
>>
>> - **Anunciar o primeiro endereço de um CIDR dado como gateway predefinido (DHCP opção 3)**: Quando esta opção está ativa, o servidor DHCP anuncia o primeiro endereço do CIDR como gateway predefinido para as máquinas ligadas à rede.
>> - **Atribuir um Gateway e ligar-se à rede privada**: Selecione esta opção se tiver a intenção de criar instâncias com rede privada apenas. Para mais informações, convidamo-lo a consultar os seguintes guias: [Criar uma rede privada com uma Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) e [Criar uma primeira instância Public Cloud e ligar-se a ela](/pages/public_cloud/Compute/public-cloud-first-steps).
>>
>> > [!warning]
>> >
>> > Se a segunda opção estiver cinzenta, isso significa que é incompatível com a região selecionada. Para mais informações, consulte a nossa página sobre [disponibilidade dos produtos Public Cloud para cada região](/links/public-cloud/regions-pci).
>> >
>>
>> Após tomar as suas decisões, clique em `Configure a sua rede privada`{.action} para iniciar o processo.
>>
>> > [!primary]
>> >
>> > A criação da rede privada pode demorar vários minutos.
>> >
>>
> A partir das APIv6 OVHcloud <a name="vlansetup"></a>
>>
>> Após se ligar à [APIv6 OVHcloud](/links/api), execute os seguintes comandos por ordem.
>>
>> **Passo 1 - Recolha das informações necessárias:**
>>
>> **Projeto Public Cloud**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Este chamada permite obter a lista dos projetos.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Este chamada permite identificar o projeto através do campo "description".
>> >
>>
>> **vRack afetado**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/vrack
>> >
>>
>> > [!primary]
>> >
>> > No campo serviceName, indique o identificador do seu projeto. Mantenha a informação relativa ao identificador do vRack na forma "pn-xxxxx".
>> >
>>
>> **Passo 2 - Criação da rede privada:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Preencha os campos com as informações obtidas anteriormente:
>> >
>> > - **serviceName**: ID do projeto.
>> > - **name**: o nome que pretende dar ao VLAN.
>> >
>> > Pode deixar o campo "Region" vazio para que seja ativado para todas as regiões.
>> >
>> > O identificador do VLAN (vlanId) é necessário se pretender criar um VLAN específico.
>> >
>>
>> A criação demora alguns instantes.
>>
>> Para verificar as informações dos seus VLAN, pode utilizar o seguinte chamada:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Este chamada permite obter o networkId. Este apresentar-se-á da seguinte forma: nome-vrack_vlanId.
>> >
>> > Por exemplo, para o VLAN 42: pn-xxxxxx_42.
>> >
>>
>> **Passo 3 - Criação da sub-rede:**
>>
>> Por defeito, se não adicionar nenhuma sub-rede, a faixa IP utilizada é a seguinte:
>>
>> ```
>> 10.1.0.0/16
>> ```
>>
>> Se pretender gerir as atribuições IP por si, terá de criar uma sub-rede.
>>
>> Para isso, uma vez criado o VLAN, terá de criar a sub-rede para cada zona afetada através do seguinte chamada:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
>> >
>>
>> Pode preencher os campos da seguinte forma:
>>
>> |Campo|Descrição| 
>> |---|---| 
>> |serviceName|Identificador do seu projeto.|
>> |networkId|Identificador da sua rede obtido nas chamadas anteriores. Por exemplo: pn-xxxxxx_42 para o VLAN 42.|
>> |dhcp|Caixa marcada para ativação / desmarcada para desativação do DHCP no VLAN.|
>> |end|Último endereço da sub-rede da região. Por exemplo: 192.168.1.50.|
>> |network|Bloco IP da sub-rede. Por exemplo: 192.168.1.0/24.|
>> |region|Exemplo: SBG3.|
>> |start|Primeiro endereço da sub-rede para esta região. Por exemplo: 192.168.1.15.|
>>
>> > [!primary]
>> >
>> > Esta é a etapa de criação da sub-rede por região. Pode ativar ou não a atribuição de endereços IP privados de forma dinâmica através do DHCP.
>> >
>> > Terá de efetuar a mesma operação para cada zona onde estão as suas instâncias.
>> >
>>
>> > [!warning]
>> >
>> > Preste atenção a separar bem os seus pools de endereços IP para as diferentes regiões. Por exemplo:
>> >
>> > - De 192.168.0.2 a 192.168.0.254 para SBG1.
>> > - De 192.168.1.2 a 192.168.1.254 para GRA1.
>> >
>>
> A partir do Terraform
>>
>> No Terraform, é necessário utilizar o provider OpenStack. Pode transferir um exemplo de script terraform completo neste [repositório GitHub](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).
>>
>> A parte específica da OVHcloud para a integração vRack é o parâmetro `value_specs`.
>>
>> ```python
>> resource "openstack_networking_network_v2" "tf_network" {
>>   name = "tf_network"
>>   admin_state_up = "true"
>>   value_specs = {
>>     "provider:network_type"    = "vrack"
>>     "provider:segmentation_id" = var.vlan_id
>>   }
>> }
>> resource "openstack_networking_subnet_v2" "tf_subnet"{
>>   name       = "tf_subnet"
>>   network_id = openstack_networking_network_v2.tf_network.id
>>   cidr       = "10.1.0.0/16"
>>   enable_dhcp       = true
>> }
>> ```
>>
> A partir da CLI OpenStack
>> No seguinte exemplo, especificamos o `VLAN_ID` ao qual pretendemos que a rede pertença através de `--provider-network-type` e `--provider-segment`.
>>
>> Pode remover estes parâmetros. Nesse caso, será utilizado um `VLAN_ID` disponível.
>>
>> ```bash 
>> openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
>> openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.1.0.0/16
>> ```
>> 

### Etapa 3: Integrar uma instância no vRack

Duas situações podem ocorrer:

- A instância ainda não existe.
- A instância já existe e tem de a adicionar ao vRack.

/// details | **Caso de uma nova instância**

> [!tabs]
> A partir da Área de Cliente OVHcloud
>> Consulte o guia "[Criar uma instância a partir do espaço cliente](/pages/public_cloud/Compute/public-cloud-first-steps)". Durante a criação de uma instância, pode escolher na etapa 5, um modo de rede e, em seguida, uma rede privada à qual integrar a sua instância.
>>
>> ![anexar nova instância](images/network-selection.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Ao criar uma nova instância, só poderá ligar a instância a **um único** vRack a partir da Área de Cliente OVHcloud.
>> >
>> > Para adicionar várias interfaces diferentes, terá de utilizar as APIs OpenStack ou Horizon.
>> >
>>
> A partir das APIv6 OVHcloud
>> Uma vez ligado à [APIv6 OVHcloud](/links/api), execute os seguintes comandos por ordem.
>>
>> **Passo 1 - Recolha das informações necessárias**
>>
>> **Recolha do identificador do projeto:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Recolha do networkID da rede pública (EXT-NET)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Recolha do networkID da rede privada (interface vRack criada anteriormente)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > O identificador obtido tem a forma: "pn-xxxxx_yy" onde yy é o número do VLAN.
>> >
>>
>> **Recolha do identificador do tipo de instância escolhido (flavorId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/flavor
>> >
>>
>> > [!primary]
>> >
>> > Pode limitar a lista indicando a zona de criação da sua instância.
>> >
>>
>> **Recolha do identificador da imagem escolhida (imageId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/image
>> >
>>
>> > [!primary]
>> >
>> > Pode limitar a lista indicando a zona de criação da sua instância.
>> >
>>
>> **Recolha do identificador da sua chave SSH OpenStack (sshKeyId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/sshkey
>> >
>>
>> Se ainda não adicionou uma chave SSH ao seu espaço cliente, pode fazê-lo através da seguinte função API:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/sshkey
>> >
>>
>> **Passo 2 - Implementação da instância**
>>
>> Uma vez reunidos todos os elementos necessários à implementação, pode utilizar o seguinte chamada:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance
>> >
>>
>> Terá de preencher, no mínimo, os seguintes campos:
>>
>> |Campo|Descrição| 
>> |---|---| 
>> |serviceName|Identificador do projeto Public Cloud.|
>> |flavorId|Identificador do tipo de instância (por exemplo: D2-2, B2-7, WIN-R2-15, etc.).|
>> |imageId|Identificador da imagem de implementação (por exemplo: Debian 9, Centos 7, etc.).|
>> |name|Nome que dá à sua instância.|
>> |networks|Na parte "networkId", indique o identificador da rede pública (ext-net) ou o da sua VLAN (pn-xxxxxx_yy). Pode clicar no botão "+" para adicionar outras redes.|
>> |region|Regiões de implementação da instância (por exemplo: GRA5).|
>> |sshKeyId|Identificador da sua chave SSH OpenStack.|
>>
>> Uma vez feita a chamada, se todas as informações estiverem corretamente preenchidas, a instância vai ser criada com uma ou várias interfaces de rede.
>>
>> > [!warning]
>> >
>> > Consoante os sistemas operativos, terá de configurar manualmente as suas interfaces de rede privadas para que sejam reconhecidas.<br>
>> > Como OpenStack não é capaz de priorizar a interface pública em relação à interface vRack, pode acontecer que esta última passe a ser a rota por defeito.<br>
>> > A consequência direta é que a instância não é acessível a partir de um IP público.<br>
>> > Um ou vários reinícios da instância a partir do espaço cliente podem resolver a situação.<br>
>> > Outra solução consiste em ligar-se à instância em SSH através de outro dos seus servidores presentes na mesma rede privada. Também pode corrigir a configuração de rede da instância através do modo Rescue.
>> >
>>
> A partir da CLI OpenStack
>> **Recolha das informações necessárias**
>>
>> Identificação das redes públicas e privadas:
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MeuVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MeuVLAN_0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> ou
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MeuVLAN-42 | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MeuVLAN_0  | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Terá de anotar os IDs das redes que o interessam:
>> >
>> > - Ext-Net para ter um IP público.
>> > - O(s) do(s) VLAN(s) necessários à sua configuração.
>> >
>>
>> Anote também as seguintes informações, como indicado no [guia de utilização da API Nova](/pages/public_cloud/Compute/starting_with_nova):
>>
>> - ID ou nome da chave SSH OpenStack.
>> - ID do tipo de instância (flavor).
>> - ID da imagem desejada (Sistema operativo, snapshot, etc.).
>>
>> **Implementação da instância**
>>
>> Com os elementos recuperados anteriormente, é possível criar uma instância incluindo-a diretamente no vRack:
>>
>> ```bash
>> nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Por exemplo:
>>
>> ```bash
>> nova boot --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>> 
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nome da chave]                                      |
>> | metadata                             | {}                                                   |
>> | name                                 | [Nome da sua instância]                              |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> ou
>>
>> ```bash
>> openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Por exemplo:
>>
>> ```bash
>> openstack server create --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nome da chave]                                      |
>> | metadata                             | {}                                                   |
>> | name                                 | [Nome da sua instância]                              |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> Pode definir o endereço IP da sua interface vRack no nível do OpenStack.
>>
>> Para isso, pode adicionar um simples argumento na função "--nic":
>>
>> `--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`
>>
>> Por exemplo:
>>
>> `--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`
>>
>> **Verificação da instância**
>>
>> Após alguns instantes, pode verificar a lista das instâncias existentes para encontrar o servidor criado:
>>
>> ```bash
>> openstack server list
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> | ID                                   |       Name          | Status | Networks                                         |     Image Name      |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Nome da instância] | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] | [Nome da instância] |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+---------------------+
>> ```
>>
>> ```bash
>> nova list
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> | ID                                   | Name                | Status | Task State | Power State | Networks                                         |
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Nome da instância] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] |
>> +--------------------------------------+---------------------+--------+------------+-------------+--------------------------------------------------+
>> ```
>>

///

/// details | **Caso de uma instância já existente**

A Área de Cliente OVHcloud permite ligar uma instância a uma ou várias redes privadas, mas não oferece uma configuração avançada das interfaces de rede. Se pretender personalizar estas, terá de as gerir, quer através das APIv6 OVHcloud, quer através das API OpenStack ou através do Horizon.

A ação consistirá apenas em adicionar uma nova interface de rede ao seu servidor, para além da existente.

Assim, por exemplo, se tiver uma interface pública *eth0*, terá também uma interface *eth1*.

> [!warning]
> A configuração desta nova interface raramente é automática. Terá, por isso, de a configurar em DHCP ou com IP fixo, consoante a sua infraestrutura.
>

> [!tabs]
> A partir da Área de Cliente OVHcloud
>> Inicie sessão na sua [Área de Cliente OVHcloud](/links/manager), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud relevante no canto superior esquerdo.
>>
>> Clique em seguida em `Instâncias`{.action} no menu lateral esquerdo. Clique depois no botão `⁝`{.action} à direita da instância relevante e em seguida em `Detalhes da instância`{.action}.
>>
>> ![detalhe instância](images/instance_details.png){.thumbnail}
>>
>> O painel de gestão da sua instância é então apresentado. Clique no botão `⁝`{.action} à direita de "Redes privadas" e em seguida em `Associar uma rede`{.action}.
>>
>> ![ligar rede](images/vrack2021-01.png){.thumbnail}
>>
>> Na janela pop-up que aparece, selecione a(s) rede(s) privada(s) a ligar à sua instância e clique em `Confirmar`{.action}.
>>
>> ![ligar rede](images/vrack9.png){.thumbnail}
>>
> A partir das APIv6 OVHcloud
>> A ação consistirá apenas em adicionar uma nova interface de rede ao seu servidor, para além da existente.
>>
>> Assim, por exemplo, se o servidor dispõe de uma interface pública eth0, uma interface adicional eth1 será adicionada.
>>
>> > [!primary]
>> >
>> > A configuração desta nova interface raramente é automática.<br>
>> > Terá, por isso, de a configurar em DHCP ou com IP fixo, consoante a sua infraestrutura.
>> >
>>
>> **Os passos seguintes descrevem como gerir as interfaces de rede das suas instâncias.**
>>
>> **Passo 1 - Recolha das informações necessárias**
>>
>> **Recolha do identificador do projeto:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Recolha do identificador da instância:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/instance
>> >
>>
>> **Recolha do networkID da rede pública (EXT-NET):**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Recolha do networkID da rede privada (interface vRack criada anteriormente):**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > O identificador obtido tem a forma: "pn-xxxxx_yy" onde yy é o número do VLAN.
>> >
>>
>> **Passo 2 - Adição de uma interface à sua instância**
>>
>> Uma vez recolhida toda a informação necessária, pode utilizar o seguinte pedido:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance/{instanceId}/interface
>> >
>>
>> Terá de preencher, no mínimo, os seguintes campos:
>>
>> |Campo|Descrição| 
>> |---|---| 
>> |serviceName|Identificador do projeto Public Cloud relevante.|
>> |instanceId|Identificador da instância relevante.|
>> |networkId|Indique o identificador da rede pública (ext-net) ou o do seu VLAN (pn-xxxxxx_yy).|
>> |ip|Definir um IP específico (funciona apenas para interfaces privadas).|
>>
>> Uma vez feito o pedido, se todas as informações estiverem corretamente preenchidas, uma nova interface será adicionada à sua instância.
>>
>> > [!primary]
>> >
>> > A sua instância OVHcloud dispõe, portanto, de uma nova interface de rede, para além da interface pública (Ext-net).<br>
>> > Poderá ver, no resumo da instância, o endereço IP privado atribuído automaticamente à sua interface.<br>
>> > Será da sua responsabilidade utilizá-lo, configurando a sua interface através do DHCP ou utilizando os seus próprios IPs através de uma configuração em IP estático.
>> >
>>
>> **Passo 3 - Desligar uma interface da sua instância**
>>
>> > [!warning]
>> >
>> > Desligar uma interface de rede leva à sua eliminação imediata.
>> >
>> > No entanto, é importante notar que se desligar a interface "Ext-Net" (IP público), este endereço será libertado e posto à disposição. Não será, portanto, possível reatribuí-lo.<br>
>> > Esta ação só deve ser realizada se pretender isolar o seu servidor no vRack (rede privada) ou, inversamente, removê-lo de um ou vários VLAN.
>> >
>>
>> Uma vez recolhida toda a informação necessária, pode utilizar o seguinte pedido para eliminar uma interface:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>> >
>>
>> Terá de preencher, no mínimo, os seguintes campos:
>>
>> |Campo|Descrição| 
>> |---|---| 
>> |serviceName|Identificador do projeto Public Cloud relevante.|
>> |instanceId|Identificador da instância relevante.|
>> |networkId|Indique o identificador da rede pública (ext-net) ou o do seu VLAN (pn-xxxxxx_yy).|
>>
> A partir do OpenStack Horizon
>> Inicie sessão na interface [Horizon](https://horizon.cloud.ovh.net/auth/login/) seguindo o método indicado na [primeira parte deste guia](#horizon).
>>
>> Inicie sessão na sua área de trabalho:
>>
>> ![ligação Horizon](images/horizon1.png){.thumbnail}
>>
>> Dirija-se depois para `Compute`, seguido de `Instances`:
>>
>> ![Horizon Compute instances](images/horizon2.png){.thumbnail}
>>
>> **Adição de uma interface de rede privada**
>>
>> Para adicionar uma interface, na coluna `Actions`, clique na seta que permite aceder às ações possíveis sobre a instância. Clique então em `Attach Interface`{.action}:
>>
>> ![Horizon attach interface](images/horizon3.png){.thumbnail}
>>
>> Selecione a sua interface e valide:
>>
>> ![Horizon attach interface](images/horizon4.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > A sua instância OVHcloud dispõe, portanto, de uma nova interface de rede, para além da interface pública (Ext-net).<br>
>> > Poderá ver, no resumo da instância, o endereço IP privado atribuído automaticamente à sua interface.<br>
>> > Será da sua responsabilidade utilizá-lo, configurando a sua interface através do DHCP ou utilizando os seus próprios IPs através de uma configuração em IP estático.
>> >
>>
>> **Desligar uma interface de rede**
>>
>> > [!warning]
>> >
>> > Desligar uma interface de rede leva à sua eliminação imediata.
>> >
>> > No entanto, é importante notar que se desligar a interface "Ext-Net" (IP público), este endereço será libertado e posto à disposição. Não será, portanto, possível reatribuí-lo.<br>
>> > Esta ação só deve ser realizada se pretender isolar o seu servidor no vRack (rede privada) ou, inversamente, removê-lo de um ou vários VLAN.
>> >
>>
>> Para desligar uma interface de rede privada, na coluna `Actions`, clique na seta que permite aceder às ações possíveis sobre a instância. Clique então em `Detach Interface`{.action}:
>>
>> ![Horizon detach interface](images/horizon5.png){.thumbnail}
>>
>> Selecione a interface a eliminar e valide:
>>
>> ![Horizon detach interface](images/horizon6.png){.thumbnail}
>>
> A partir da CLI OpenStack
>> **Recolha das informações necessárias**
>>
>> Identificação das suas instâncias:
>>
>> ```bash
>> openstack server list
>>
>> +--------------------------------------+-----------------+--------+------------------------------------------------------------------------+------------+
>> | ID                                   | Name            | Status | Networks                                                               | Image Name |
>> +--------------------------------------+-----------------+--------+------------------------------------------------------------------------+------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Minha-instância | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MonVrack=192.168.0.124 | Debian 9   |
>> +--------------------------------------+-----------------+--------+------------------------------------------------------------------------+------------+
>> ```
>>
>> ou
>>
>> ```bash
>> nova list
>> 
>> +--------------------------------------+-----------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | ID                                   | Name            | Status | Task State | Power State | Networks                                                             |
>> +--------------------------------------+-----------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Minha-instância | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MonVrack=192.168.0.124 |
>> +--------------------------------------+-----------------+--------+------------+-------------+----------------------------------------------------------------------+
>> ```
>>
>> Identificação das redes públicas e privadas:
>>
>> ```bash
>> openstack network list
>>  
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MeuVLAN-42 | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MeuVLAN-0  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> ou
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MeuVLAN-42 | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MeuVLAN-0  | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Terá de anotar os IDs das redes que o interessam:
>> >
>> > - Ext-Net para ter um IP público.
>> > - O(s) do(s) VLAN necessário(s) à sua configuração.
>> >
>>
>> **Adição de uma interface de rede privada**
>>
>> Para ligar uma nova interface, pode executar o seguinte comando:
>>
>> ```bash
>> nova interface-attach --net-id <ID-VLAN> <ID-instance>
>> ```
>>
>> Por exemplo:
>>
>> ```bash
>> nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
>> ```
>>
>> Pode verificar que a ação foi bem-sucedida:
>>
>> ```bash
>> nova show <ID-instance>
>> 
>> +--------------------------------------+----------------------------------------------------------+
>> | Property                             | Value                                                    |
>> +--------------------------------------+----------------------------------------------------------+
>> | Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => seu IP público
>> | MeuVLAN-42 network                   | 192.168.0.x                                              | => seu IP privado
>> [...]
>> ```
>>
>> ou
>>
>> ```bash
>> openstack server show <ID-instance>
>> +--------------------------------------+-------------------------------------------------------------------------+
>> | Field                                | Value                                                                   |
>> +--------------------------------------+-------------------------------------------------------------------------+
>> [...]
>> | addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MeuVLAN-42=192.168.0.x  | => seu IP público ; seu IP privado
>> [...]
>> ```
>>

### Desligar uma interface de rede

> [!warning]
> Desligar uma interface de rede leva à sua eliminação imediata.
>
> No entanto, é importante notar que se desligar a interface "Ext-Net" (IP público), este endereço será libertado e posto à disposição. Não será, portanto, possível reatribuí-lo.<br>
> Esta ação só deve ser realizada se pretender isolar o seu servidor no vRack (rede privada) ou, inversamente, removê-lo de um ou vários VLAN.
>

Para desligar uma interface de rede, terá, em primeiro lugar, de identificar o port Neutron que foi criado.

Para isso, pode utilizar os seguintes comandos:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

ou

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Uma vez identificado o porto a eliminar, pode executar o seguinte comando:

```bash
nova interface-detach <ID_instance> <port_id>
```

Por exemplo:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

///

## Quer saber mais?

[Servidores dedicados - Criar vários VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Se precisar de formação ou de assistência técnica para a implementação das nossas soluções, contacte o seu comercial ou clique [aqui](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto aos nossos especialistas da equipa Professional Services.

Fale com a nossa [comunidade de utilizadores](/links/community).