---
title: 'Transferir el backup de una instancia entre datacenters'
slug: transferir-backup-de-instancia-entre-datacenters
section: 'En línea de comandos'
excerpt: 'Cómo transferir un backup de un datacenter a otro conservando la configuración y el estado de la instancia'
---

**Última actualización: 29/03/2019**

## Objetivo

Es posible que necesite transferir una instancia de Public Cloud de un datacenter a otro, bien porque quiera alojar el servicio en un nuevo centro de datos, o bien porque quiera migrar de OVH Labs a la solución Public Cloud.

**Esta guía explica cómo transferir el backup de una instancia de un datacenter a otro conservando la configuración y el estado de la instancia.**


## Requisitos

* Haber creado una [instancia de Public Cloud](https://www.ovh.es/public-cloud/compute/){.external} desde su cuenta de cliente.
* Tener acceso de administrador (root) a su datacenter a través de SSH.
* Haber leído la guía [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/){.external} (recomendado).

> [!primary]
>
Los comandos de esta guía están basados en la CLI de OpenStack, no en las API de Nova o Glance.
>

## Procedimiento

### Crear un backup

En primer lugar, conéctese a su datacenter por SSH. A continuación, ejecute el siguiente comando para mostrar la lista de las instancias existentes:

```
#root@server:~$ openstack server list

+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1  | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```


Ejecute el siguiente comando para crear un backup de la instancia:

```
openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Descargar el backup

Ejecute el siguiente comando para consultar las instancias disponibles:

```
#root@server:~$ openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | bkp_server1                                   | active |
| 3ff877dc-1a62-43e7-9655-daff37a0c355 | NVIDIA GPU Cloud (NGC)                        | active |
| a14a7c1e-3ac5-4a61-9d36-1abc4ab4d5e8 | Centos 7                                      | active |
| f720a16e-543b-42e5-af45-cc188ad2dd34 | Debian 8 - GitLab                             | active |
| d282e7aa-332c-4dc7-90a9-d49641fa7a95 | CoreOS Stable                                 | active |
| 2519f0fb-18cc-4915-9227-7754292b9713 | Ubuntu 16.04                                  | active |
| b15789f8-2e2f-4f6c-935d-817567319627 | Windows Server 2012 R2 Standard - UEFI        | active |
| ed2f327f-dbae-4f9e-9754-c677a1b76fa3 | Ubuntu 14.04                                  | active |
| 9c9b3772-5320-414a-90bf-60307ff60436 | Debian 8 - Docker                             | active |
+--------------------------------------+-----------------------------------------------+--------+
```

Identifique el backup en la lista:

```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | bkp_server1 | qcow2 | bare | 1598029824 | active |
```

Por último, ejecute el siguiente comando para descargar el backup:

```
#root@server:~$ openstack image save --file bkp_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Transferir el backup a otro datacenter

Para iniciar la transferencia, deberá cargar en primer lugar nuevas variables de entorno.

> [!warning]
>
> Si desea transferir el backup a un datacenter perteneciente al mismo proyecto, solo tiene que modificar la variable OS_REGION_NAME.
>

```
#root@server:~$ export OS_REGION_NAME=SBG1
```

Para transferir el backup a otro proyecto o cuenta, deberá volver a cargar las variables de entorno asociadas a esta última cuenta utilizando el siguiente comando:

```
#root@server:~$ source openrc.sh
```

Ejecute el siguiente comando para transferir el backup al nuevo datacenter:

```
#root@server:~$ openstack image create --disk-format qcow2 --container-format bare --file bkp_server1.qcow bkp_server1

+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                     |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 82cb7d57ec7278818bba0afcf802f0fb                                                                                                                                                          |
| container_format | bare                                                                                                                                                                                      |
| created_at       | 2019-03-22T14:26:22Z                                                                                                                                                                      |
| disk_format      | qcow2                                                                                                                                                                                     |
| file             | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file                                                                                                                                      |
| id               | 0a3f5901-2314-438a-a7af-ae984dcbce5c                                                                                                                                                    |
| min_disk         | 0                                                                                                                                                                                         |
| min_ram          | 0                                                                                                                                                                                         |
| name             | bkp_server1                                                                                                                                                                             |
| owner            | 4e03fd164d504aa3aa03938f0bf4ed90                                                                                                                                                          |
| properties       | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected        | False                                                                                                                                                                                     |
| schema           | /v2/schemas/image                                                                                                                                                                         |
| size             | 3004956672                                                                                                                                                                                |
| status           | active                                                                                                                                                                                    |
| tags             |                                                                                                                                                                                           |
| updated_at       | 2019-03-22T14:41:05Z                                                                                                                                                                      |
| virtual_size     | None                                                                                                                                                                                      |
| visibility       | private                                                                                                                                                                                   |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Crear una instancia a partir del backup

Para crear la instancia a partir del backup, ejecute el siguiente comando utilizando el ID del backup como imagen:

```
#root@server:~$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_bkp
```

## Más información

[Transferir el backup de un volumen entre datacenters](https://docs.ovh.com/gb/en/public-cloud/transfer_volume_backup_from_one_datacentre_to_another/){.external} (en inglés)

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.