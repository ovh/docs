---
title: 'Configuração do vRack Public Cloud com a ajuda da OpenStack CLI'
excerpt: 'Saiba como ativar e gerir um serviço vRack Public Cloud com a ajuda do OpenStack CLI'
updated: 2025-01-13
---

## Objetivo

O [vRack](/links/network/vrack) é uma rede privada que lhe permite configurar o direcionamento entre vários servidores dedicados OVHcloud. Mas permite-lhe também adicionar [instâncias Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) à sua rede privada a fim de criar uma infraestrutura de recursos físicos e virtuais.

**Este guia tem como objetivo acompanhá-lo na configuração das suas instâncias Public Cloud graças ao OpenStack CLI**

## Requisitos

- Dispor de um [projeto Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- Ter acesso à [Área de Cliente OVHcloud](/links/manager)
- Um [utilizador OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (opcional)
- Conhecimentos básicos de rede

Antes de começar, certifique-se de que lê estes guias para configurar corretamente o seu ambiente OpenStack:

- [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- [Carregar as variáveis de ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables).

## Instruções

### Apresentação do conteúdo

- [Etapa 1: Ativar e gerir um vRack](#activating-vrack)
    - [A partir da Área de Cliente OVHcloud](#control-panel)
    - [A partir das APIv6 OVHcloud](#ovhcloud-api)
- [Etapa 2: Criar uma rede privada no vRack](#private-network)
- [Etapa 3: Integrar uma instância no vRack](#instance-vrack)
    - [Em caso de nova instância](#new-instance)
    - [Caso de uma instância existente](#existing-instance)
- [Eliminação de uma interface privada](#detach-interface)

## Instruções

<a name="activating-vrack"></a>

### Etapa 1: Ativar e gerir um vRack

> [!warning]
> Uma vez que o vRack é uma infraestrutura gerida ao nível da OVHcloud, só poderá administrá-lo através da Área de Cliente OVHcloud e da APIv6 OVHcloud.
>

<a name="control-panel"></a>

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

<a name="ovhcloud-api"></a>

#### A partir das APIv6 OVHcloud

Para ativar e gerir um vRack a partir das APIv6 OVHcloud, clique [aqui](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), para consultar o guia específico deste método.

### Etapa 2: Criar uma rede privada no vRack


É necessário criar uma rede privada com uma rede local virtual (VLAN) para que as instâncias ligadas ao vRack possam comunicar entre si.

Na oferta Public Cloud, pode criar até 4000 VLAN dentro de um único vRack. Isto significa que pode utilizar cada endereço IP privado até 4000 vezes.
Por exemplo, o IP 192.168.0.10 da VLAN 2 é diferente do IP 192.168.0.10 da VLAN 42.

Pode ser útil para segmentar o seu vRack entre várias redes virtuais.

Para criar a mesma rede privada, é preciso criar 2 objetos OpenStack: network e subnet.

No exemplo seguinte, especificamos o `VLAN_ID` para o qual queremos que a rede faça parte através de `--provider-network-type` e `--provider-segment`.

Pode eliminar estes parâmetros. Nesse caso, será utilizado um `VLAN_ID` disponível.

```bash 
openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.0.0.0/16
```

<a name="instance-vrack"></a>

### Etapa 3: Integrar uma instância no vRack

Existem duas situações:

- A instância ainda não existe.
- A instância já existe e deve adicioná-la ao vRack.

<a name="new-instance"></a>

#### Em caso de nova instância

**Recuperação das informações necessárias**

Identificação das redes públicas e privadas:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

ou

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Deve anotar os ID das redes que lhe interessam:
><br> - ExtNet para ter um IP público
><br> - O da ou das VLAN necessárias para a sua configuração
>

Tenha em atenção as seguintes informações, como indicado no [guia de utilização da API Nova](/pages/public_cloud/compute/starting_with_nova):

- ID ou nome da chave SSH OpenStack
- ID do tipo de instância (flavor)
- ID da imagem pretendida (Sistema operativo, snapshot, etc.)

**Implementação da instância**

Com os elementos recuperados anteriormente, é possível criar uma instância ao incluí-la diretamente no vRack:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Exemplo:

```bash
nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

ou

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Exemplo :

```bash
openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

Tem a possibilidade de definir o endereço IP da instância da sua interface vRack ao nível de OpenStack.

Para isso, pode adicionar um simples argumento na função "--nic":

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Exemplo:

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

**Verificação da instância**

Depois de alguns instantes, pode verificar-se a lista das instâncias existentes a fim de encontrar o servidor criado:

```bash
openstack server list
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| ID                                   |       Name          | Status | Networks                                         |     Image Name     |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Name of instance]  | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  | [Name-of-instance] |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
```

```bash
nova list
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| ID                                   | Name               | Status | Task State | Power State | Networks                                         |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Name of instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
```

<a name="existing-instance"></a>

#### Caso de uma instância existente

**Recuperação das informações necessárias**

Identificação das suas instâncias:

```bash
openstack server list
 
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

ou

```bash
nova list
 
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```

Identificação das redes públicas e privadas:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

ou

```bash
nova net-list
 
+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Deve anotar os ID das redes que lhe interessam:
><br> - ExtNet para ter um IP público
><br> - O da ou das VLAN necessárias para a sua configuração
>

**Adição de uma interface privada**

Para associar uma nova interface, pode efetuar o seguinte comando:

```bash
nova interface-attach --net-id <ID-VLAN> <ID-instance>
```

Por exemplo:

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

Pode verificar que a ação foi corretamente tomada em conta:

```bash
nova show <ID instance>
 
+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| ExtNet network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                     | => o seu IP público
| myVLAN-42 network                   | 192.168.0.x                                               | => o seu IP Privado
[...]
```

ou

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MyVLAN-42=192.168.0.x   | => o seu IP público; o seu IP Privado                                                                    
[...]
```

<a name="remove-network"></a>

### Eliminação de uma interface

> [!warning]
> A eliminação de uma interface é definitiva.
>
> Se eliminar a interface "Ext-Net" (IP público), este endereço será libertado e reposto em circulação. Por isso, não poderia reatribuir-se a ela.
><br>Esta ação só deve ser realizada se pretender isolar o seu servidor no vRack (interface "Ext-Net") ou retirá-lo de uma VLAN.
>

Para desassociar uma interface, terá de identificar primeiro a porta Neutron que foi criada.

Para isso, pode utilizar os seguintes comandos:

```bash
neutron porta-list
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

Depois de identificar a porta a eliminar, pode efetuar o seguinte comando:

```bash
nova interface-detach <ID_instance> <port_id>
```

Por exemplo:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Quer saber mais?

[Configuração do vRack Public Cloud a partir das APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN).

[Servidores dedicados - Criar várias VLAN no vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com nossa [comunidade de utilizadores](/links/community).