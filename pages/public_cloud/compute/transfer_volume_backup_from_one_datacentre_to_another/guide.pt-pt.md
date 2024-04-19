---
title: "Transferir o backup de um volume de uma região OpenStack para outra"
excerpt: "Descubra como transferir um backup de volume de uma região OpenStack para outra"
updated: 2024-01-11
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Poderá ter de migrar volumes adicionais de uma região OpenStack para outra, quer seja porque uma nova região está disponível, quer seja porque deseja migrar de [OVHcloud Labs](https://labs.ovh.com/){.external} para [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/compute/){.external}.

**Descubra como transferir um backup de volume de uma região do OpenStack para outra..**

## Requisitos

- CLI OpenStack. Consulte o nosso guia « [Como preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api) ».
- A Conectividade às API OVHcloud OpenStack.
- Do espaço de armazenamento disponível correspondente ao tamanho do disco do volume (para o armazenamento de backup temporário).

Este ambiente será utilizado como « jump host » para transferir a cópia de segurança de uma região para outra. Este ambiente pode ser uma instância alojada na OVHcloud ou na sua máquina local.

## Instruções

### Criação de um backup

```sh
openstack volume list
+--------------------------------------+--------------+--------+------+------------------------------------+
| ID                                   | Display Name | Status | Size | Attached to                        |
+--------------------------------------+--------------+--------+------+------------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume       | in-use |   10 | Attached to Server 1 on /dev/sdb   |
+--------------------------------------+--------------+--------+------+------------------------------------+
```

Se o volume estiver associado a uma instância, deve em primeiro lugar desassociá-lo antes de criar o backup.

Utilizar o comando abaixo para recuperar o ID da instância:

```sh
$ openstack server list
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
| ID                                   | Name      | Status | Networks                                       | Image    | Flavor |
+--------------------------------------+-----------+--------+--------------------------------------------------------------------+
| a8b6b51-4413-4d1a-8113-9597d804b07e  | Server 1  | ACTIVE | Ext-Net=155.55.55.155, 2607:5300:23x:5000::8d5 | Centos 7 | b2-7   |
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
```

De seguida, execute o comando abaixo para desmontar o volume a partir da instância:

```sh
$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Agora, crie um backup sob a forma de imagem através deste comando:

```sh
$ openstack image create --disk-format qcow2 --container-format bare --volume 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 snap_volume
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

### Descarregar o backup

Execute o seguinte comando para listar as imagens disponíveis:

```sh
$ openstack image list
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

De seguida, identifique o backup na lista:

```sh
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
| ID                                   | Name        | disk_format |container_format|           | Status |
+--------------------------------------+---------------------------+----------------+-----------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2       | bare           | 319356928 | active |
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
```

Por fim, execute este comando para descarregar o backup:

```sh
$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Transferir a cópia de segurança para outra região OpenStack

Para lançar o processo de transferência, deverá começar por carregar novas variáveis de ambiente.

> [!warning]
>
Se transferir a sua cópia de segurança para uma região OpenStack no mesmo projeto, deverá alterar a variável OS_REGION_NAME.
>

```sh
export OS_REGION_NAME=SBG1
```

Se transferir o seu backup para outro projeto ou conta, deverá recarregar as variáveis de ambiente associadas a esta conta através do seguinte comando:

```sh
$ source openrc.sh
```

Para transferir a cópia de segurança para a nova região OpenStack, utilize o comando abaixo:

```sh
$ openstack image create --disk-format qcow2 --container-format bare --file snap_volume.qcow snap-volume
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

### Crie um volume a partir do seu backup

Utilize o ID da backup como imagem com o seguinte comando:

```sh
$ openstack volume create --type classic --image aa2a39c6-433c-4e94-995a-a12c4398d457 --size 10 volume_from_snap
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

## Quer saber mais?

[Transferir a cópia de segurança de uma instância de uma região OpenStack para outra](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another){.external}.
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.