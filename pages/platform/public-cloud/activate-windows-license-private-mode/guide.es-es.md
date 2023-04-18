---
title: Activar una licencia Windows para una instancia en modo privado
excerpt: 'Cómo activar una licencia Windows en una instancia en modo privado'
updated: 2023-01-25
---

**Última actualización: 02/02/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

A diferencia de las instancias Windows creadas en la red pública, las instancias Windows creadas con el modo de red privada (vRack) no tienen sus licencias Windows automáticamente activadas.
En ese caso, deberá activar la licencia manualmente para poder acceder a todos los servicios Windows.

**Esta guía explica cómo configurar la interfaz pública de las instancias de Public Cloud en el vRack.**

## Requisitos

- Un [proyecto de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- [Haber creado un usuario de OpenStack](/pages/platform/public-cloud/create_and_delete_a_user)

Le recomendamos que consulte la guía "[Acceder a Horizon](/pages/platform/public-cloud/introducing_horizon)" para familiarizarse con Horizon.

## Procedimiento

### Asociar un puerto público "Ext-Net" a una instancia

#### Desde la interfaz Horizon

Conéctese a la interfaz [Horizon](https://horizon.cloud.ovh.net/auth/login/) utilizando el método que se indica en la [primera parte de esta guía](/pages/platform/network-services/getting-started-07-creating-vrack#interfaz-horizon).

Conéctese a su zona de trabajo:

![region](images/horizon1.png){.thumbnail}

Acceda a `Compute`{.action} y seleccione `Instances`{.action}:

![procesamiento y instancia](images/horizon2.png){.thumbnail}

Para añadir una interfaz, en la columna "Actions", haga clic en la flecha que le permitirá acceder a las acciones que pueda realizar en la instancia. Haga clic en `Attach Interface`{.action}:

![attach interface](images/horizon3.png){.thumbnail}

Seleccione la interfaz y acepte:

![interfaz select](images/attachinterfacehorizon.png){.thumbnail}

#### Desde la API de OpenStack

Antes de continuar, se recomienda consultar estas guías:

- [Preparar el entorno para utilizar la API de OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api).
- [Cargar las variables de entorno necesarias para OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables).

En primer lugar, recopile toda la información necesaria:

- **Identificación de las instancias**

```bash
openstack server list
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| ID                                   | Name              | Status | Networks                                                            | Image                                  | Flavor   |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| f095ad19-5c0a-4ef5-8e01-b3590bc9c6f1 | MyInstance        | ACTIVE |                                                                     | Windows Server 2016 Standard (Desktop) | win-b2-7 |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
```


- **Identificación de las redes públicas y privadas**

```bash
openstack network list
-----------------------------------------------------------------------------------------+
| ID                                   | Name              | Subnets                                                                                                                                                                                                                                                                  |
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1ca87837-7860-47a3-8916-c9c516841bf2 | Ext-Net-Baremetal | 1db089a7-1bd9-449f-8e3b-4ea61e666320, 4a614403-b8aa-4291-bd59-0cb2c81c4deb                                                                                                                                                                                               |
| 7394fc68-0f77-40d7-a274-388e7e75d82c | vlan 0            | f3fb67dc-7419-49da-b26c-7f64c480eb63                                                                                                                                                                                                                                     |
| 7a0e67da-70f3-48ed-a6e7-5ec265916211 | private-net       | 57d9faac-f01c-43a2-8866-d9b1dd02cb9e, 5cb270a9-3795-4286-96fe-f3bfa3a328e5                                                                                                                                                                                               |
| b2c02fdc-ffdf-40f6-9722-533bd7058c06 | Ext-Net           | 0f11270c-1113-4d4f-98de-eba83445d962, 1a6c6b72-88e9-4e94-ac8b-61e6dbc4792c, 22e2d853-1b86-48f3-8596-9d12c7693dc7, 4aa6cac1-d5cd-4e25-b14b-7573aeabcab1, 7d6352a6-dbed-4628-a029-fcc3986ae7d6, 9f989c4b-c441-4678-b395-e082c300356e, b072b17b-ef1d-4881-98c7-e0d6a1c3dcea|
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Con los elementos recuperados anteriormente, puede crear un puerto público llamado "Ext-Net" en la subnet "Ext-Net" y asociarlo a la instancia:

```bash
openstack port create --network b2c02fdc-ffdf-40f6-9722-533bd7058c06 Ext-Net
+-------------------------+----------------------------------------------------------------------------------------+
| Field                   | Value                                                                                  |
+-------------------------+----------------------------------------------------------------------------------------+
| admin_state_up          | UP                                                                                     |
| allowed_address_pairs   |                                                                                        |
| binding_host_id         | None                                                                                   |
| binding_profile         | None                                                                                   |
| binding_vif_details     | None                                                                                   |
| binding_vif_type        | None                                                                                   |
| binding_vnic_type       | normal                                                                                 |
| created_at              | 2023-01-20T10:12:17Z                                                                   |
| data_plane_status       | None                                                                                   |
| description             |                                                                                        |
| device_id               |                                                                                        |
| device_owner            |                                                                                        |
| device_profile          | None                                                                                   |
| dns_assignment          | None                                                                                   |
| dns_domain              | None                                                                                   |
| dns_name                | None                                                                                   |
| extra_dhcp_opts         |                                                                                        |
| fixed_ips               | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1' |
|                         | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'           |
| id                      | ed34add5-aa76-4aab-97af-815724d76e2c                                                   |
| ip_allocation           | immediate                                                                              |
| mac_address             | fa:16:3e:68:35:9c                                                                      |
| name                    | Ext-Net                                                                                |
| network_id              | b2c02fdc-ffdf-40f6-9722-533bd7058c06                                                   |
| numa_affinity_policy    | None                                                                                   |
| port_security_enabled   | True                                                                                   |
| project_id              | 2098640de5e547289e3740b09e725ecc                                                       |
| propagate_uplink_status | None                                                                                   |
| qos_network_policy_id   | None                                                                                   |
| qos_policy_id           | None                                                                                   |
| resource_request        | None                                                                                   |
| revision_number         | 2                                                                                      |
| security_group_ids      | 9f60804a-0ecf-4738-a4d8-30a6bb0d20c2                                                   |
| status                  | DOWN                                                                                   |
| tags                    |                                                                                        |
| tenant_id               | 2098640de5e547289e3740b09e725ecc                                                       |
| trunk_details           | None                                                                                   |
| updated_at              | 2023-01-20T10:12:18Z                                                                   |
+-------------------------+----------------------------------------------------------------------------------------+
```

Descargue el UUID del puerto Ext-Net:

```bash
openstack port list --name Ext-Net
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ID                                   | Name    | MAC Address       | Fixed IP Addresses                                                                    | Status |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ed34add5-aa76-4aab-97af-815724d76e2c | Ext-Net | fa:16:3e:68:35:9c | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1'| DOWN   |
|                                      |         |                   | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'          |        |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
```

Asocie el puerto a la instancia:

```bash
openstack server add port <server_id> <port_id>
```

#### Activar su sistema Windows

Para activar su sistema Windows, debe pasar por Powershell.

Una vez que se haya conectado a la instancia Windows, haga clic en el menú `Iniciar`{.action} y seleccione el icono del `Windows PowerShell`{.action}.

Introduzca el siguiente comando:

```bash
slmgr.vbs -ato
```

![activación de llave windows](images/windowsactivation1.png){.thumbnail}

La licencia Windows se activará durante 180 días.

Será necesario repetir esta operación cada 180 días.

> [!primary]
>
> Mientras tanto, si quiere aislar su instancia de la red pública, puede desactivar el puerto público creado a través de Horizon o la API de OpenStack.
> También puede desactivar directamente el puerto de red a través de Windows.
>

Para comprobar el estado y la fecha de expiración de la licencia, utilice el siguiente comando:

```bash
slmgr.vbs -dli
```

![activación de llave windows](images/windowsactivation2.png){.thumbnail}

## Más información

[Averigua cómo cambiar la clave de activación de Windows Server](/pages/cloud/dedicated/windows_key).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.