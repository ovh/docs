---
title: 'Configuração do vRack Public Cloud'
excerpt: 'Saiba como configurar o vRack para as instâncias de Public Cloud'
updated: 2024-12-23
---

## Objetivo

O [vRack](/links/network/vrack) é uma rede privada que lhe permite configurar o direcionamento entre vários servidores dedicados OVHcloud. Mas permite-lhe também adicionar [instâncias Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) à sua rede privada a fim de criar uma infraestrutura de recursos físicos e virtuais.

**Este guia explica como configurar instâncias de Public Cloud no seu vRack.**

## Requisitos

- Dispor de um [projeto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)
- um [utilizador OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (opcional)
- Conhecimentos básicos de rede

## Apresentação das interfaces

Quer seja para criar o seu vRack ou adicionar uma instância dentro desta rede, poderá ser levada a utilizar a Área de Cliente OVHcloud, a APIv6 OVHcloud, a API OpenStack ou a interface Horizon ou a Terraform.

Em função do seu perfil técnico e das suas necessidades, terá de escolher qual a interface ou método a utilizar. Assim, para cada ação, iremos propor-lhe as diferentes abordagens possíveis.

**Eis uma descrição rápida das ações possíveis segundo o método/interface escolhida:**

### Área de Cliente OVHcloud

A [Área de Cliente OVHcloud](/links/manager) é uma interface inteiramente e unicamente visual, o que faz dela uma interface ideal para a gestão de várias VLANs. Terá igualmente a possibilidade de personalizar o intervalo de IP privado que, por defeito, é 10.x.x.x/16.

As VLAN serão implementadas de forma padrão em todas as zonas. Apenas terá a possibilidade de ativar ou não as gateways.

Também poderá gerir a faturação dos seus serviços através da Área de Cliente OVHcloud.

### Interface Horizon

Interface visual independente da OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} é a implementação inicial do painel de controlo da OpenStack, que fornece uma interface de utilizador web aos serviços OpenStack, incluindo Nova, Swift, Keystone, etc.

Esta interface completa e técnica permite-lhe gerir a quase totalidade das ações OpenStack. Esta será uma das interfaces necessárias se deseja gerir mais de duas VLAN, adicionar interfaces de rede privadas às suas instâncias, gerir imagens personalizadas, etc..

Consulte o guia: [Criar um acesso à interface Horizon](/pages/public_cloud/compute/introducing_horizon) para se familiarizar com o Horizon.

> [!primary]
> Uma vez que o Horizon funciona por zona, pense bem em escolher a sua zona geográfica de trabalho no topo à esquerda da sua interface (GRA5, SBG3, BHS1, etc.)
>

### APIv6 OVHcloud

Cada ação que efetuar na Área de Cliente OVHcloud recorre às [APIv6 OVHcloud](https://api.ovh.com/).
Pode mesmo ir mais longe nas API do que na sua Área de Cliente.

A interface é menos visual que a Área de Cliente OVHcloud, mas permitir-lhe-á realizar um grande número de ações. Desta forma, poderá gerir e personalizar as suas VLAN, adicionar interfaces às suas instâncias ou ainda criar servidores altamente personalizados.

Por vezes, será necessário recuperar várias informações antes da utilização de uma API específica.

Pode simplesmente aceder às API a partir da [nossa página web](https://api.ovh.com/), mas também criar os seus scripts PHP ou Python para as contactar.

Assim, poderá automatizar livremente as tarefas de base através de scripts, otimizar as suas próprias funções, etc.

Consulte o guia [Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps), para se familiarizar com a utilização das APIv6 OVHcloud.

### API OpenStack

É possível administrar os serviços Public Cloud com a ajuda de linhas de comando Linux ou Windows, após o descarregamento e a instalação das ferramentas OpenStack.

Este método requer bons conhecimentos Linux ou Windows para os beneficiar, mas permite usufruir de toda a potência do OpenStack por este meio.

Conforme a camada que deseja gerir, deverá utilizar o cliente **Nova** (Compute), **Neutron** (network), **Glance** (Image) ou ainda **Swift** (Object Storage). O último nascido da família, o cliente OpenStack, permite-lhe gerir diretamente a quase totalidade das camadas OpenStack.

Graças à API OpenStack, pode também automatizar facilmente esta gestão através dos seus scripts.

Para se familiarizar com a API OpenStack, consulte os seguintes guias:

- [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

Poderá, em função das suas necessidades, utilizar as API dedicadas ao OpenStack:

- Nova (compute)
- Glance (imagem)
- Cinder (imagem)
- Neutron (rede)

> [!primary]
> Em alguns casos, será mais simples utilizar as API OpenStack e noutros, as API Nova, Neutron, etc.
>
> Da mesma forma, algumas funcionalidades podem estar ausentes da API OpenStack de acordo com a versão do seu cliente e do seu sistema operativo.
No âmbito deste manual, foi escolhido propor-lhe as alternativas mais simples e mais intuitivas.
Pode consultar a [documentação oficial do OpenStack](https://docs.openstack.org/){.external} a qualquer momento, se pretender ir mais longe na sua utilização.
>

Para mais informações, consulte este guia: [Configuração do vRack Public Cloud com a ajuda do OpenStack CLI](/pages/public_cloud/public_cloud_network_services/getting-started-09-creating-vrack-with-openstack).

### Terraform

O Terraform permite igualmente gerir as infraestruturas da OVHcloud.

Para isso, deve escolher o bom fornecedor e o bom recurso Terraform. Encontre mais informações no nosso [guia de utilização do Terraform (EN)](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

## Instruções

### Etapa 1: Ativar e gerir um vRack <a name="activation"></a>

#### A partir da Área de Cliente OVHcloud

> [!primary]
> Isto não se aplica aos projetos recém-criados que são agora entregues automaticamente com um vRack. Para visualizar o vRack após a criação do projeto, aceda ao menu `Bare Metal Cloud`{.action} e clique em `Network`{.action} no separador à esquerda. Clique em `Rede privada vRack`{.action} para consultar o(s) vRack(s).
>

Se tem um projeto mais antigo e não possui vRack, deve encomendar um. Este produto é gratuito e a ativação é realizada em poucos minutos.

Aceda ao menu `Bare Metal Cloud`{.action} e clique no botão `Encomendar`{.action}. Neste menu, clique na opção `vRack`{.action}.

![Encomendar o vrack](images/ordering_vrack_2024.png){.thumbnail}

Será redirecionado para outra página para validar a encomenda, a operação demorará alguns minutos.

Depois de ativado, o serviço será apresentado na Área de Cliente, na secção `Bare Metal Cloud`{.action} > `Network`{.action} > `Rede Privada vRack`{.action}. Sob a designação « pn-xxxxx ».

Na lista dos serviços elegíveis, selecione o projeto que deseja adicionar ao vRack e clique no botão `Adicionar`{.action}.

![Adicionar o projeto](images/addprojectvrack.png){.thumbnail}

Para continuar a configuração do vRack a partir da Área de Cliente OVHcloud, prossiga a leitura deste guia a partir de [Criar uma VLAN no vRack a partir da Área de Cliente OVHcloud](./#criar-uma-rede-privada-a-partir-da-area-de-cliente-ovhcloud).

#### A partir das APIv6 OVHcloud

Para ativar e gerir um vRack a partir das APIv6 OVHcloud, clique [aqui](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), para consultar o guia específico deste método.

### Etapa 2: Criar uma rede privada no vRack

É necessário criar uma rede privada com uma rede local virtual (VLAN) para que as instâncias ligadas ao vRack possam comunicar entre si.

Na oferta Public Cloud, pode criar até 4000 VLAN dentro de um único vRack. Isto significa que pode utilizar cada endereço IP privado até 4000 vezes.
Por exemplo, o IP 192.168.0.10 da VLAN 2 é diferente do IP 192.168.0.10 da VLAN 42.

Pode ser útil para segmentar o seu vRack entre várias redes virtuais.

A partir da Área de Cliente OVHcloud, poderá afetar a VLAN à sua escolha, mas não poderá personalizar a gama IP. O vRack estará ativo em todas as zonas.

A partir das APIv6 OVHcloud, poderá personalizar o conjunto dos parâmetros: intervalo IP (10.0.0.0/16, por exemplo), zona de implementação, DHCP, Gateway, etc.

> [!primary]
> Nos servidores dedicados, por predefinição, está na VLAN 0. O funcionamento da infraestrutura OpenStack significa que deverá especificar o número da sua VLAN diretamente ao nível da infraestrutura.
>
> Contrariamente aos servidores dedicados, não é necessário « tagar » a VLAN diretamente numa instância Public Cloud. 
>
> Para mais informações sobre a gestão das VLAN do vRack dos servidores dedicados, pode consultar este guia: [Criar várias VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

> [!warning]
> Uma vez que o vRack é uma infraestrutura gerida ao nível da OVHcloud, só poderá administrá-lo através da Área de Cliente OVHcloud e da APIv6 OVHcloud.
>
> Uma vez que o OpenStack não está situado no mesmo nível da infraestrutura, não poderá personalizar as VLAN através da interface Horizon ou das API OpenStack.
>

#### Criar uma rede privada a partir da Área de Cliente OVHcloud

Uma vez o vRack criado, o passo seguinte consiste em criar uma rede privada.

No separador Public Cloud, clique em `Private Network`{.action} no menu à esquerda em **Network**.

![VLAN criação](images/vrack2022-03.png){.thumbnail}

Clique agora em `Criar uma rede privada`{.action}. A página seguinte permite-lhe personalizar vários parâmetros.

Na etapa 1, selecione a região na qual deseja criar a rede privada.

![select region](images/vrack5-2024.png){.thumbnail}

Na etapa seguinte, são-lhe apresentadas várias opções:

![create network](images/vrack6-2022.png){.thumbnail}

No campo **Nome da rede privada**, defina um nome para a sua rede privada.

**Crie um Gateway e ligue-se à rede privada**

Selecione esta opção se pretende criar instâncias apenas com uma rede privada. Para mais informações, consulte os seguintes guias: [Creating a private network with Gateway (EN)](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) e [Criação e conexão a uma primeira instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

> [!warning]
> Se a opção for "cinzenta", isto significa que é incompatível com a região selecionada. Para mais informações, consulte a nossa página sobre a [disponibilidade dos produtos Public Cloud para cada região](/links/public-cloud/regions-pci).
>

**Opções de rede do layer 2**

Se selecionar a opção `Definir um ID de VLAN`, deverá escolher um número de VLAN compreendido entre 0 e 4000.

Se não seleccionar esta caixa, o sistema atribuirá um número de VLAN aleatório.

Caso seja necessário fazer comunicar servidores dedicados OVHcloud com VLAN taggado, consulte o seguinte guia: [Criar várias VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

**Opções de distribuição dos endereços DHCP**

O intervalo DHCP padrão é 10.0.0.0/16. Você pode usar outra praia privada de sua escolha.

Depois de fazer as suas escolhas, clique em `Criar`{.action} para lançar o processo.

> [!primary]
> A criação da rede privada pode levar alguns minutos.
>

#### Criar uma rede privada a partir da APIv6 OVHcloud <a name="vlansetup"></a>

Para criar uma VLAN a partir da APIv6 OVHcloud, clique [aqui](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-3-creating-a-vlan-in-the-vrack) (EN), para consultar o guia específico deste método.

#### Criar uma rede privada via Terraform

No Terraform, é preciso utilizar o provider openstack. Pode descarregar um exemplo de script terraform completo em [este depósito](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).

A parte específica da OVHcloud para a integração do vRack é o parâmetro `value_specs`.

```python
resource "openstack_networking_network_v2" "tf_network" {
  name = "tf_network"
  admin_state_up = "true"
  value_specs = {
    "provider:network_type"    = "vrack"
    "provider:segmentation_id" = var.vlan_id
  }
}
resource "openstack_networking_subnet_v2" "tf_subnet"{
  name       = "tf_subnet"
  network_id = openstack_networking_network_v2.tf_network.id
  cidr       = "10.0.0.0/16"
  enable_dhcp       = true
}
```

### Etapa 3: Integrar uma instância no vRack

Existem duas situações:

- A instância ainda não existe.
- A instância já existe e deve adicioná-la ao vRack.

**Em caso de nova instância**

#### A partir da Área de Cliente OVHcloud

Consulte o guia: [Criar uma instância a partir da Área de Cliente](/pages/public_cloud/compute/public-cloud-first-steps). Ao criar uma instância, poderá especificar, na etapa 5, pode escolher um modo de rede e depois uma rede privada na qual possa integrar a sua instância.

![attach new instance](images/network-selection.png){.thumbnail}

> [!warning]
> Ao criar uma nova instância, só poderá ligar a sua instância a um vRack a partir da Área de Cliente OVHcloud.
> Para adicionar várias interfaces diferentes, deverá passar pelas API OpenStack ou interface Horizon.
>

#### A partir da APIv6 OVHcloud

Clique [aqui](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-4-integrating-an-instance-into-the-vrack) (EN), para consultar o guia específico deste método.

**Caso de uma instância existente**

A Área de Cliente OVHcloud permite associar uma instância a uma ou várias redes privadas, mas não oferece uma configuração avançada das interfaces de rede. Se deseja personalizar mais estas, terá de as gerir quer a partir das APIv6 OVHcloud, quer através das API OpenStack ou através do Horizon.

A ação consistirá em simplesmente adicionar uma nova interface de rede ao seu servidor, para além da existente.

Assim, por exemplo, se tiver uma interface pública *eth0*, terá ainda uma interface *eth1*.

> [!warning]
> A configuração desta nova interface raramente é automática.
> Será necessário configurá-la em DHCP ou IP Fixo consoante a sua infraestrutura.
>

#### A partir da Área de Cliente OVHcloud** 

Aceda à [Área de Cliente OVHcloud](/links/manager), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em questão no canto superior esquerdo.

Clique em `Instances`{.action} no menu lateral esquerdo. A seguir, clique no botão `...`{.action} à direita da instância em causa e, a seguir, em `Dados da instância`{.action}.

![de](images/vrack2021.png){.thumbnail}

Isso abrirá o painel de instâncias. Clique em `...`{.action} à direita de "Rede(s) privada(s)" e, a seguir, em `Associar uma rede`{.action}.

![associar rede](images/vrack2021-01.png){.thumbnail}

Na pop-up que aparecer, selecione a ou as redes privadas a associar à sua instância e clique em `Associar`{.action}.

![associar rede](images/vrack9.png){.thumbnail}

#### Gestão das interfaces de rede a partir da APIv6 OVHcloud

Clique [aqui](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#in-case-of-an-existing-instance) (EN), para consultar o guia específico deste método.

#### Gestão das interfaces de rede a partir do OpenStack Horizon

Ligue-se à interface [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} de acordo com o método indicado na [primeira parte deste guia](./#interface-horizon).

Ligue-se bem à sua zona de trabalho:

![ligação Horizon](images/horizon1.png){.thumbnail}

Selecione `Compute` e, em seguida, `Instances` no menu.

![Horizon compute instâncias](images/horizon2.png){.thumbnail}

**Adição de uma interface privada**

Para adicionar uma interface, na coluna "Actions", clique na seta que permite aceder às ações possíveis na instância. A seguir, clique em `Attach Interface`{.action}:

![Horizon attach interface](images/horizon3.png){.thumbnail}

Selecione a sua interface e valide:

![Horizon attach interface](images/horizon4.png){.thumbnail}

> [!primary]
> Sua instância de OVHcloud terá uma nova interface de rede além da interface pública (Ext-Net).
><br>No resumo da instância, poderá ver o endereço IP privado atribuído automaticamente à sua interface.
><br>É sua responsabilidade configurar corretamente a interface por meio de DHCP ou usando os endereços IP adequados por meio de uma configuração de IP estático.
>

**Eliminação de uma interface privada**

> [!warning]
> A eliminação de uma interface é definitiva.
>
>Se eliminar a interface "Ext-Net" (IP público), este endereço será libertado e reposto em circulação. Por isso, não poderia reatribuir-se a ela.
><br>Esta ação só deve ser realizada se pretender isolar o seu servidor no vRack (interface "Ext-Net") ou retirá-lo de uma VLAN.
>

Para eliminar uma interface, na coluna "Actions", clique na seta que permite aceder às ações possíveis na instância. A seguir, clique em `Detach Interface`{.action}:

![Horizon detach interface](images/horizon5.png){.thumbnail}

Selecione a interface a eliminar e valide:

![Horizon detach interface](images/horizon6.png){.thumbnail}

## Quer saber mais?

[Configuração do vRack Public Cloud a partir das APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN)

[Servidores dedicados - Criar várias VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa [comunidade de utilizadores](/links/community).