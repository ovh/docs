---
title: 'Transferir la copia de seguridad de un volumen de un datacenter a otro'
excerpt: "Cómo transferir una copia de seguridad de un volumen entre diferentes centros de datos"
updated: 2024-01-09
---

## Objetivo

Es posible que necesite mover volúmenes adicionales de un datacenter a otro, bien porque haya un nuevo datacenter disponible, bien porque quiera migrar de [OVHcloud Labs](https://labs.ovh.com/){.external} al [Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/){.external}.

**Descubra cómo transferir una copia de seguridad de un volumen de un datacenter a otro.**

## Requisitos

* Tener una [instancia de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/){.external} en su cuenta de OVHcloud.
* Tener acceso de administrador (root) a su datacenter por SSH.
* Lea la guía « [Preparar el entorno para utilizar la API de OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api){.external} » (recomendado).

> [!primary]
>
Los comandos de esta guía están basados en la CLI de OpenStack.
>

## Procedimiento

### Crear una copia de seguridad

Conéctese por SSH a su datacenter y ejecute el siguiente comando para consultar los volúmenes existentes:

```sh
root@server:~$ openstack volume list
+--------------------------------------+--------------+--------+------+----------------------------------+
| ID                                   | Display Name | Status | Size | Attached to                      |
+--------------------------------------+--------------+--------+------+----------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume       | in-use |   10 | Attached to Server 1 on /dev/sdb |
+--------------------------------------+--------------+--------+------+----------------------------------+
```

A continuación, ejecute el siguiente comando para desmontar el volumen desde su instancia:

```sh 
root@server:~$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Ahora cree una copia de seguridad como imagen con el siguiente comando:

```sh
root@server:~$ openstack image create --disk-format qcow2 --container-format bare --volume 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 snap_volume 
+---------------------+------------------------------------------------------+
|       Property      |                         Value                        |
+---------------------+------------------------------------------------------+
|   container_format  |                          bare                        |
|     disk_format     |                         qcow2                        |
| display_description |                                                      |
|          id         |           673b0ad9-1fca-485c-ae2b-8ee271b71dc7       |
|       image_id      |           8625f87e-8248-4e62-a0ce-a89c7bd1a9be       |
|      image_name     |                      snap_volume                     |
|         size        |                          10                          |
|        status       |                       uploading                      |
|      updated_at     |               2015-10-21T08:33:34.000000             |
|     volume_type     |                      [..........]                    |
+---------------------+------------------------------------------------------+
```

### Descargar la copia de seguridad

Ejecute el siguiente comando para enumerar las imágenes disponibles:

```sh
root@server:~$ openstack image list 
+--------------------------------------+--------------------------------+--------+
| ID                                   | Name                           | Status |
+--------------------------------------+--------------------------------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                    | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7                       | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8                       | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19                      | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20                      | active |
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                    | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04                   | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04                   | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2         | active |
+--------------------------------------+--------------------------------+--------+
```

Identifique la copia de seguridad en la lista:

```sh
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
| ID                                   | Name        | disk_format |container_format|           | Status |
+--------------------------------------+---------------------------+----------------+-----------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2       | bare           | 319356928 | active |
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
```

Por último, ejecute este comando para descargar la copia de seguridad:

```sh 
root@server:~$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```


### Transferir el backup a otro datacenter

Para iniciar el proceso de transferencia, primero debe cargar nuevas variables de entorno.

> [!warning]
>
Si va a transferir el backup a un datacenter del mismo proyecto, solo tiene que modificar la variable OS_REGION_NAME.
>

```sh 
root@server:~$ export OS_REGION_NAME=SBG1
```

Si transfiere su copia de seguridad a otro proyecto o cuenta, debe volver a cargar las variables de entorno vinculadas a esta cuenta mediante el siguiente comando:

```sh
root@server:~$ source openrc.sh
```

Para transferir el backup al nuevo datacenter, utilice el siguiente comando:

```sh 
root@server:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_volume.qcow snap-volume 
+------------------+------------------------------------------------------+
| Field            | Value                                                |
+------------------+------------------------------------------------------+
| checksum         | None                                                 |
| container_format | bare                                                 |
| created_at       | 2019-03-22T15:26:04Z                                 |
| disk_format      | qcow2                                                |
| file             | /v2/images/783136d3-365a-49c6-9024-1e2f9c2db51a/file |
| id               | aa2a39c6-433c-4e94-995a-a12c4398d457                 |
| min_disk         | 0                                                    |
| min_ram          | 0                                                    |
| name             | snap_volume                                          |
| owner            | b3e26xxxxxxxxxxxxxxxxxxx12b0ba29                     |
| properties       | locations='[]'                                       |
| protected        | False                                                |
| schema           | /v2/schemas/image                                    |
| size             | None                                                 |
| status           | queued                                               |
| tags             |                                                      |
| updated_at       | 2019-03-22T15:26:04Z                                 |
| virtual_size     | None                                                 |
| visibility       | private                                              |
+------------------+------------------------------------------------------+
```

### Crear un volumen a partir de la copia de seguridad

Utilice el ID de copia de seguridad como imagen con el siguiente comando:

```sh
root@server:~$ openstack volume create --type classic --image aa2a39c6-433c-4e94-995a-a12c4398d457 --size 10 volume_from_snap
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2019-03-22T15:39:39.880479           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 938b13c9-414e-45b5-b0fc-cfea743f54e1 |
| multiattach         | False                                |
| name                | volume_from_snap                     |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | classic                              |
| updated_at          | None                                 |
| user_id             | f63a1d2f27df455bb306bb79b0f2e2aa     |
+---------------------+--------------------------------------+
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.