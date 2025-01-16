---
title: 'Configuración del vRack Public Cloud con OpenStack CLI'
excerpt: 'Cómo activar y gestionar un vRack Public Cloud utilizando OpenStack CLI'
updated: 2025-01-13
---

## Objetivo

El [vRack](/links/network/vrack) OVHcloud es una solución de red privada que permite configurar el direccionamiento entre varios servidores dedicados de OVHcloud. Al mismo tiempo, le permite agregar [instancias de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) a su red privada para crear una infraestructura de recursos físicos y virtuales.

**Esta guía explica cómo configurar las instancias de Public Cloud con OpenStack CLI**

## Requisitos

- Tener un [proyecto de Public Cloud.](/pages/public_cloud/compute/create_a_public_cloud_project)
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Haber [creado un usuario de OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (opcional).
- Conocimientos básicos de redes.

Antes de empezar, asegúrese de leer estas guías para configurar correctamente su entorno OpenStack:

- [Preparar el entorno para utilizar la API de OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- [Cargar las variables de entorno necesarias para OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables).


## Procedimiento

### Presentación del contenido

- [Etapa 1: Activar y gestionar un vRack](#activating-vrack)
    - [Desde el área de cliente de OVHcloud](#control-panel)
    - [Desde la APIv6 de OVHcloud](#ovhcloud-api)
- [Etapa 2: Crear una red privada en el vRack](#private-network)
- [Etapa 3: Integrar una instancia en el vRack](#instance-vrack)
    - [Caso de una nueva instancia](#new-instance)
    - [Caso de una instancia ya existente](#existing-instance)
- [Eliminación de una interfaz privada](#detach-interface)


<a name="activating-vrack"></a>

### Etapa 1: Activar y gestionar un vRack

> [!warning]
> El vRack es una infraestructura gestionada a nivel de OVHcloud, por lo que solo podrá administrarla desde el área de cliente de OVHcloud y las APIv6 de OVHcloud.
>

<a name="control-panel"></a>

#### Desde el área de cliente de OVHcloud

> [!primary]
> No se aplicará a los proyectos recién creados que se entreguen automáticamente con un vRack. Para ver el vRack una vez creado el proyecto, acceda al menú `Bare Metal Cloud`{.action} y haga clic en `Network`{.action} en la pestaña de la izquierda. Haga clic en `Red privada vRack`{.action} para ver el vRack(s).
>

Si tiene un proyecto más antiguo y no tiene un vRack, debe contratar uno. Este producto es gratuito y solo tarda unos minutos en estar disponible.

Vaya al menú `Bare Metal Cloud`{.action} y haga clic en el botón `Contratar`{.action}. En este menú, haga clic en la opción `vRack`{.action}.

![Contratar el vRack](images/ordering_vrack_2024.png){.thumbnail}

Será redirigido a otra página para validar el pedido. La operación tardará unos minutos.

Una vez activado el servicio, puede consultarlo en el área de cliente, en la sección `Bare Metal Cloud`{.action} > `Network`{.action} > `Red privada vRack`{.action}. Bajo la denominación «pn-xxxxx».

En la lista de servicios compatibles, seleccione el proyecto que quiera añadir al vRack y haga clic en el botón `Añadir`{.action}.

![agregar proyecto](images/addprojectvrack.png){.thumbnail}

<a name="ovhcloud-api"></a>

#### Desde la APIv6 de OVHcloud

Para activar y gestionar un vRack desde la APIv6 de OVHcloud, haga clic [aquí](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), para consultar la guía específica sobre este método.

<a name="private-network"></a>

### Etapa 2: Crear una red privada en el vRack

Es necesario crear una red privada con una red de área local virtual (VLAN) para que las instancias conectadas al vRack puedan comunicarse entre sí.

En la solución Public Cloud, puede crear hasta 4000 VLAN en un único vRack. Esto significa que puede utilizar cada dirección IP privada hasta 4000 veces.
Así, por ejemplo, la IP 192.168.0.10 de la VLAN 2 es diferente de la IP 192.168.0.10 de la VLAN 42.

Esto puede ser útil para segmentar el vRack entre varias redes virtuales.


Para crear la misma red privada, es necesario crear 2 objetos OpenStack: network y subnet.

En el siguiente ejemplo, especificamos el `VLAN_ID` en el que queremos que la red sea parte a través de `--provider-network-type` y `--provider-segment`.

Puede borrar estos parámetros. En ese caso, se utilizará un `VLAN_ID` disponible.

```bash 
openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.0.0.0/16
```

<a name="instance-vrack"></a>

### Etapa 3: Integrar una instancia en el vRack

Puede darse dos situaciones:

- La instancia aún no existe.
- La instancia ya existe y debe añadirla al vRack.

<a name="new-instance"></a>

#### Caso de una nueva instancia

**Obtención de la información necesaria**

Identificación de las redes públicas y privadas:

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

o

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
> Deberá indicar los ID de red correspondientes:
><br> - Ext-Net para tener una IP pública
><br> - El del o de las VLAN necesarias para su configuración
>

Recuerde también lo siguiente, tal y como se indica en la [guía de uso de la API Nova](/pages/public_cloud/compute/starting_with_nova) (EN):

- ID o nombre de la llave SSH OpenStack
- ID del tipo de instancia (flavor)
- ID de la imagen deseada (sistema operativo, snapshot, etc.)

**Despliegue de la instancia**

Con los elementos recuperados anteriormente, es posible crear una instancia incluyéndola directamente en el vRack:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Ejemplo:

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

o

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Ejemplo:

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

Puede definir la dirección IP de la instancia de su interfaz vRack a nivel de OpenStack.

Para ello, puede añadir un simple argumento a la función "—nic":

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Por ejemplo:

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

**Verificación de la instancia**

A continuación, compruebe que la lista de instancias existentes es correcta para encontrar el servidor creado:

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

#### Caso de una instancia ya existente

**Recuperando la información necesaria**

Identificación de las instancias:

```bash
openstack server list
 
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

o

```bash
nova list
 
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```

Identificación de las redes públicas y privadas:

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

o

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
> Deberá indicar los ID de red correspondientes:
><br> - Ext-Net para tener una IP pública
><br> - El del o de las VLAN necesarias para su configuración
>

**Añadir una interfaz privada**

Para asociar una nueva interfaz, puede realizar el siguiente comando:

```bash
nova interface-attach --net-id <ID-VLAN> <ID-instance>
```

por ejemplo,

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

Compruebe que la acción se ha realizado correctamente:

```bash
nova show <ID-instancia>
 
+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => su IP pública
| MyVLAN-42 network                    | 192.168.0.x                                              | => su IP privada
[...]
```

o

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MyVLAN-42=192.168.0.x   | => su IP pública ; su IP privada                                                                     
[...]
```

<a name="detach-interface"></a>

### Eliminación de una interfaz privada

> [!warning]
> La eliminación de una interfaz es definitiva.
>
> En caso de que elimine la interfaz "Ext-Net" (IP pública), esta dirección se liberará y volverá a estar en circulación. Así que no se podría reasignar.
><br>Esta operación solo es necesaria si desea aislar su servidor en el vRack (interfaz "Ext-Net") o sacarlo de una VLAN.
>

Para desvincular una interfaz, es necesario identificar en primer lugar el puerto Neutron que se habrá creado.

Para ello, utilice los siguientes comandos:

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

o

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

Una vez identificado el puerto a eliminar, puede ejecutar el siguiente comando:

```bash
nova interface-detach <ID_instance> <port_id>
```

por ejemplo,

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Más información

[Configuración del vRack Public Cloud desde las APIv6 de OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN).

[Servidores dedicados - Crear varias VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).