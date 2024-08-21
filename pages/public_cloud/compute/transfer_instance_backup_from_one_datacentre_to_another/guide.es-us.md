---
title: Descargar y transferir la copia de seguridad de una instancia de una región de OpenStack a otra
excerpt: Cómo descargar y transferir una copia de seguridad de una instancia de una región de OpenStack a otra conservando la configuración y el estado de la instancia
updated: 2023-09-25
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Es posible que tenga que mover su [instancia Public Cloud](https://www.ovhcloud.com/es/public-cloud/) de una región de OpenStack a otra. O bien porque prefiere migrar a una nueva región de OpenStack disponible, o bien porque quiere migrar de OVHcloud Labs a Public Cloud.

**Esta guía explica cómo transferir una copia de seguridad de una instancia de una región de OpenStack a otra conservando la configuración y el estado de la instancia.**

## Requisitos

Para realizar la transferencia, necesitará un entorno con:

- CLI OpenStack. Consulte nuestra guía «[Cómo preparar el entorno para utilizar la API de OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)».
- Conectividad a la API OpenStack de OVHcloud.
- Espacio de almacenamiento disponible correspondiente al tamaño del disco de la instancia (para el almacenamiento de backup temporal).

Este entorno se utilizará como «jump host» para transferir la copia de seguridad de una región a otra. Este entorno puede ser una instancia alojada en OVHcloud o en su máquina local.

También necesitará una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud.

## Procedimiento

### Crear un backup

```bash
$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID | Name | Status | Networks | Image Name |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```

A continuación, ejecute el siguiente comando para crear una copia de seguridad de su instancia:

```bash 
$ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Descargar el backup

A continuación, ejecute este comando para enumerar las instancias disponibles:

```bash
$ openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID | Name | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | active |
| 3ff877dc-1a62-43e7-9655-daff37a0c355 | NVIDIA GPU Cloud (NGC) | active |
| a14a7c1e-3ac5-4a61-9d36-1abc4ab4d5e8 | Centos 7 | active |
| f720a16e-543b-42e5-af45-cc188ad2dd34 | Debian 8 - GitLab | active |
| d282e7aa-332c-4dc7-90a9-d49641fa7a95 | CoreOS Stable | active |
| 2519f0fb-18cc-4915-9227-7754292b9713 | Ubuntu 16.04 | active |
| b15789f8-2e2f-4f6c-935d-817567319627 | Windows Server 2012 R2 Standard - UEFI | active |
| ed2f327f-dbae-4f9e-9754-c677a1b76fa3 | Ubuntu 14.04 | active |
| 9c9b3772-5320-414a-90bf-60307ff60436 | Debian 8 - Docker | active |
```

Identifique ahora la copia de seguridad de la instancia en la lista:

```text
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Por último, ejecute este comando para descargar la copia de seguridad en el host de enrutamiento:

```bash
$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

<a name="transfer"></a>

### Transferir el backup a otra región de OpenStack

Para iniciar la transferencia, deberá cargar en primer lugar nuevas variables de entorno.

> [!warning]
>
> Si transfiere su copia de seguridad a una región de OpenStack dentro del mismo proyecto, deberá cambiar la variable `OS_REGION_NAME`.
>

```bash
$ export OS_REGION_NAME=SBG1
```

Si transfiere su copia de seguridad a otro proyecto o cuenta, deberá recargar las variables de entorno asociadas a dicha cuenta utilizando el siguiente comando:

```bash
$ source openrc.sh
```

Para transferir la copia de seguridad a la nueva región de OpenStack, utilice este comando:

```bash
$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1
```

```text
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field | Value |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum | 82cb7d57ec7278818bba0afcf802f0fb |
| container_format | bare |
| created_at | 2019-03-22T14:26:22Z |
| disk_format | qcow2 |
| file | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file |
| id | 0a3f5901-2314-438a-a7af-ae984dcbce5c |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_server1 |
| owner | 4e03fd164d504aa3aa03938f0bf4ed90 |
| properties | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected | False |
| schema | /v2/schemas/image |
| size | 3004956672 |
| status | active |
| tags | |
| updated_at | 2019-03-22T14:41:05Z |
| virtual_size | None |
| visibility | private |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Crear una instancia a partir del backup

Para crear una instancia a partir de su copia de seguridad, utilice el ID de copia de seguridad como imagen con este comando:

```bash
$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.