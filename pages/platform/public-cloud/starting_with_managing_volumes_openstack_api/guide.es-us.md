---
title: Empezar con la gestión de volúmenes en la API OpenStack
slug: empezar-con-volúmenes-api-openstack
legacy_guide_number: 2071
section: OpenStack
order: 8
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 19/05/2021**

## Objetivo

Para automatizar las operaciones en el Public Cloud, es posible utilizar las API OpenStack para generar diferentes scripts.
<br>Por ejemplo, podrá crear un nuevo volumen de "alto rendimiento" para asociarlo a una instancia de Public Cloud.

**Esta guía explica cómo utilizar las API de OpenStack para gestionar sus volúmenes con ayuda del cliente de OpenStack.**

## Requisitos

- [Preparar el entorno para utilizar la API OpenStack](../prepare_the_environment_for_using_the_openstack_api/) instalando python-cinderclient y python-novaclient
- [Cargar las variables de entorno OpenStack](../set-openstack-environment-variables/)

## Procedimiento

### Documentation Cinder

Para consultar la documentación del cliente OpenStack, puede consultar la lista de posibles comandos:

```bash
admin@server-1:~$ openstack help
```

Estos son los comandos principales:

|Comando|Descripción|
|---|---|
|volumen create|Crea un nuevo volumen|
|volumen delete|Eliminar un volumen|
|volumen list|Lista los volúmenes|
|volumen snapshot create|Crea un snapshot de un volumen|

También puede consultar la información relativa a un pedido específico añadiendo `help` delante de este:

```bash
admin@server-1:~$ openstack help volume snapshot create
usage: openstack volume snapshot create [-h] [-f {json,shell,table,value,yaml}] [-c COLUMN] [--noindent] [--prefix PREFIX] [--max-width <integer>] [--fit-width] [--print-empty] [--volume <volume>] [--description <description>] [--force] [--property <key=value>]
                                        [--remote-source <key=value>]
                                        <snapshot-name>

Create new volume snapshot

positional arguments:
  <snapshot-name>       Name of the new snapshot

optional arguments:
  -h, --help            show this help message and exit
  --volume <volume>     Volume to snapshot (name or ID) (default is <snapshot-name>)
  --description <description>
                        Description of the snapshot
  --force               Create a snapshot attached to an instance. Default is False
```

> [!primary]
>
> También puede consultar la documentación del cliente de OpenStack directamente en [el sitio web de OpenStack](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

### Operaciones básicas

#### Crear un volumen de altas prestaciones

- Listar los tipos de volúmenes:

```bash
admin@server-1:~$ openstack volume type list
+--------------------------------------+------------+-----------+
| ID                                   | Name       | Is Public |
+--------------------------------------+------------+-----------+
| e9551830-6362-4bf8-92e5-391829456b03 | classic    | True      |
| 6fc8e512-3cac-4f39-b9a8-af098d710506 | high-speed | True      |
+--------------------------------------+------------+-----------+
```

- Crear el volumen de 10GB de tipo high-speed llamado volumen1:

``` bash
admin@server-1:~$ openstack volume create --type high-speed --size 10 volume1

+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:16:28.658308           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 |
| multiattach         | False                                |
| name                | volume1                              |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Se puede instalar una imagen en un volumen utilizando el argumento `--image`:

```bash
admin@server-1:~$ openstack volume create --type high-speed --image be66762f-b849-43e1-b57c-005d9fe28088 --size 20 volume_debian
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:26:38.887508           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 442d9dff-7df5-41b2-95e9-fa8ac5f4784a |
| multiattach         | False                                |
| name                | volume_debian                        |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 20                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Donde **be66762f-b849-43e1-b57c-005d9fe28088** corresponde al ID de la imagen Debian 10.

#### Asociar un volumen a una instancia

- Listar los volúmenes adicionales:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-------------+
| ID                                   | Name          | Status    | Size | Attached to |
+--------------------------------------+---------------+-----------+------+-------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |             |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | available |   10 |             |
+--------------------------------------+---------------+-----------+------+-------------+
```

> [!primary]
>
> En la mayoría de los comandos siguientes deberá indicar el ID del volumen en lugar de su nombre.
>

- Montar el volumen en una instancia con el cliente OpenStack:

```bash
admin@server-1:~$ openstack server add volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Comprobar que el volumen esté asociado correctamente a la instancia con el cliente OpenStack:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| ID                                   | Name          | Status    | Size | Attached to                             |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |                                         |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | in-use    |   10 | Attached to cli-playground on /dev/sdb  |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
```

#### Eliminación de un volumen

- Desvincular el volumen de la instancia:

```bash
admin@server-1:~$ openstack server remove volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Eliminar el volumen:

```bash
admin@server-1:~$ openstack volume delete f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
