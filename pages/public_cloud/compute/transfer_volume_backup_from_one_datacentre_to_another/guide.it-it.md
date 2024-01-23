---
title: "Trasferire il backup di un volume da una Region OpenStack ad un'altra"
excerpt: "Scopri come trasferire un backup di volume da una Region OpenStack ad un’altra"
updated: 2024-01-11
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

In alcuni casi potrebbe essere necessario spostare volumi aggiuntivi da una Region OpenStack a un'altra, perché è disponibile una nuova Region o perché si desidera migrare da [OVHcloud Labs](https://labs.ovh.com/){.external} al [Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external}.

**Questa guida ti mostra come migrare un backup di un volume da una Region OpenStack ad un'altra.**

## Prerequisiti

- CLI OpenStack. Consulta la nostra guida "[Come preparare l’ambiente per utilizzare l’API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)".
- Connettività con le API OVHcloud OpenStack.
- Spazio di storage disponibile corrispondente alla dimensione del disco del volume (per lo storage di backup temporaneo).

Questo ambiente verrà utilizzato come "jump host" per trasferire il backup da una regione all'altra. L’ambiente può essere costituito da un’istanza ospitata in OVHcloud o sulla macchina locale.

## Procedura

### Crea un backup

```sh
$ openstack volume list 
+--------------------------------------+--------------+--------+------+----------------------------------+
| ID                                   | Display Name | Status | Size | Attached to                      |
+--------------------------------------+--------------+--------+------+----------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume       | in-use |   10 | Attached to Server 1 on /dev/sdb |
+--------------------------------------+--------------+--------+------+----------------------------------+
```

Se il volume è associato a un’istanza, è necessario scollegarlo prima di creare il backup.

Utilizza il comando qui sotto per recuperare l’ID dell’istanza:

```sh
$ openstack server list
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
| ID                                   | Name      | Status | Networks                                       | Image    | Flavor |
+--------------------------------------+-----------+--------+--------------------------------------------------------------------+
| a8b6b51-4413-4d1a-8113-9597d804b07e  | Server 1  | ACTIVE | Ext-Net=155.55.55.155, 2607:5300:23x:5000::8d5 | Centos 7 | b2-7   |
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
```

Eseguire quindi il comando seguente per smontare il volume dalla sua istanza:

```sh
$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Crea un backup sotto forma di immagine utilizzando questo comando:

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

### Gestisci i tuoi backup

Per visualizzare le immagini disponibili, esegui questo comando:

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

Identifica il backup nella lista:

```sh
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
| ID                                   | Name        | disk_format |container_format|           | Status |
+--------------------------------------+---------------------------+----------------+-----------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2       | bare           | 319356928 | active |
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
```

Esegui questo comando per scaricare il backup:

```sh 
$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Trasferisci il backup in un'altra Region Openstack

Prima di avviare il processo di trasferimento è necessario impostare le nuove variabili d’ambiente.

> [!warning]
>
Se si trasferisce il backup in una regione Openstack dello stesso progetto, è sufficiente modificare la variabile OS_REGION_NAME.
>

```sh 
$ export OS_REGION_NAME=SBG1
```

Per migrare il backup verso un altro progetto o account, è necessario ricaricare le variabili d'ambiente associate a questo account utilizzando il seguente comando:

```sh
$ source openrc.sh
```

Per trasferire il backup nella nuova Region Openstack, esegui il comando:

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

### Crea un volume a partire dal tuo backup

Per effettuare questa operazione, esegui il seguente comando utilizzando l’identificativo dell’immagine del backup:

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

## Per saperne di più

[Trasferire il backup di un’istanza da una Region OpenStack ad un’altra ](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another){.external}.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
