---
title: Übertragen von Volume-Backups von einer OpenStack-Region in eine andere
excerpt: Erfahren Sie hier, wie Sie das Backup eines Volumes von einer OpenStack-Region in eine andere verschieben können
updated: 2024-01-11
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Es kann vorkommen, dass Sie zusätzliche Volumes von einer OpenStack-Region in eine andere verschieben müssen; etwa weil Sie in einer neuen OpenStack-Region operieren möchten, oder weil Sie von [OVHcloud Labs](https://labs.ovh.com/) in die [Public Cloud](https://www.ovh.com/de/public-cloud/instances/) migrieren möchten.

**Diese Anleitung erklärt, wie Sie ein Volume-Backup von einer OpenStack-Region in eine andere übertragen.**

## Voraussetzungen

Um den Transfer durchzuführen benötigen Sie eine Umgebung mit:

- [OpenStack CLI](prepare_the_environment_for_using_the_openstack_api1.).
- Anbindung an die OpenStack API von OVHcloud.
- Verfügbarer Speicherplatz entsprechend der Größe der Volume-Disk (für temporären Backup-Speicher).

Diese Umgebung wird als "Jump Host" verwendet, um das Backup von einer Region in eine andere zu übertragen. Bei dieser Umgebung kann es sich um eine bei OVHcloud oder auf Ihrem lokalen System gehostete Instanz handeln.

## In der praktischen Anwendung

### Backup erstellen

```sh
$ openstack volume list 
+--------------------------------------+--------------+--------+------+----------------------------------+
| ID                                   | Display Name | Status | Size | Attached to                      |
+--------------------------------------+--------------+--------+------+----------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume       | in-use |   10 | Attached to Server 1 on /dev/sdb |
+--------------------------------------+--------------+--------+------+----------------------------------+
```

Wenn das Volume mit einer Instanz verbunden ist, muss es zuerst getrennt werden, bevor das Backup erstellt werden kann.

Verwenden Sie den folgenden Befehl, um die Instanz-ID abzurufen:

```sh
$ openstack server list
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
| ID                                   | Name      | Status | Networks                                       | Image    | Flavor |
+--------------------------------------+-----------+--------+--------------------------------------------------------------------+
| a8b6b51-4413-4d1a-8113-9597d804b07e  | Server 1  | ACTIVE | Ext-Net=155.55.55.155, 2607:5300:23x:5000::8d5 | Centos 7 | b2-7   |
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
```

Führen Sie dann den folgenden Befehl aus, um das Volume von seiner Instanz aus zu mounten:

```sh 
$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Erstellen Sie nun mit folgendem Befehl ein Backup als Image:

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

### Laden Sie das Backup herunter

Führen Sie den folgenden Befehl aus, um die verfügbaren Images aufzulisten:

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

Identifizieren Sie das Backup in der Liste:

```sh
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
| ID                                   | Name        | disk_format |container_format|           | Status |
+--------------------------------------+---------------------------+----------------+-----------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2       | bare           | 319356928 | active |
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
```

Verwenden Sie diesen Befehl, um das Backup herunterzuladen:

```sh 
$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Backup in eine andere OpenStack-Region übertragen

Um den Transferprozess zu starten, müssen Sie zunächst neue Umgebungsvariablen laden.

> [!warning]
>
Wenn Sie Ihr Backup in eine OpenStack-Region innerhalb desselben Projekts verschieben, müssen Sie die Variable `OS_REGION_NAME` ändern.
>

```sh 
$ export OS_REGION_NAME=SBG1
```

Wenn Sie Ihr Backup auf ein anderes Projekt oder oder in einen anderen Account verschieben, müssen Sie die mit diesem Account verbundenen Umgebungsvariablen mit dem folgenden Befehl neu laden:

```sh
$ source openrc.sh
```

Um das Backup in die neue OpenStack-Region zu übertragen, verwenden Sie diesen Befehl:

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

### Erstellen Sie ein Volume aus Ihrem Backup

Verwenden Sie die Backup-ID als Image mit dem folgenden Befehl:

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

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
