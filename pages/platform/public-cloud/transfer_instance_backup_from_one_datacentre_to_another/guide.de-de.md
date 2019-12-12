---
title: 'Backup einer Instanz von einem Rechenzentrum in ein anderes übertragen'
slug: instanz-backup-in-anderes-rechenzentrum-uebertragen
section: 'Über APIs und Befehlszeile'
excerpt: 'Hier erfahren Sie, wie Sie das Backup einer Instanz transferieren und dabei Zustand und Status der Instanz beibehalten.'
---

**Stand 01.07.2019**

## Einleitung

Es kann vorkommen, dass Sie Ihre Public Cloud Instanz von einem Rechenzentrum in ein anderes übertragen möchten − sei es, weil Sie ein neues Rechenzentrum bevorzugen oder von den OVH Labs zur OVH Public Cloud wechseln wollen.

**In dieser Anleitung erfahren Sie, wie Sie das Backup einer Instanz transferieren und dabei Zustand und Status der Instanz beibehalten.**


## Voraussetzungen

* Sie haben eine [Public Cloud Instanz](https://www.ovh.de/public-cloud/instances/){.external} in Ihrem Account erstellt.
* Sie haben Administrator-Zugriff (Root) zu Ihrem Rechenzentrum via SSH.
* Sie haben die Anleitung „[Vorbereitung der Umgebung für die Verwendung der OpenStack API](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/){.external}“ gelesen (empfohlen).

> [!primary]
>
Die Befehle in dieser Anleitung basieren auf dem OpenStack-CLI, im Gegensatz zu `Nova`\- und `Glance`-APIs.
>

## Beschreibung

### Backup erstellen

Stellen Sie zunächst eine SSH-Verbindung zu Ihrem Rechenzentrum her. Führen Sie anschließend den folgenden Befehl aus, um Ihre vorhandenen Instanzen aufzulisten:

```
#root@server:~$ openstack server list

+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```


Führen Sie anschließend den nachstehenden Befehl aus um ein Backup Ihrer Instanz zu erstellen:

```
openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Backup herunterladen

Um die verfügbaren Instanzen aufzulisten, führen Sie folgenden Befehl aus:

```
#root@server:~$ openstack image list
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

Ermitteln Sie nun mithilfe der Liste das erstellte Backup:

```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Führen Sie anschließend folgenden Befehl aus, um das Backup herunterzuladen:

```
#root@server:~$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Backup in ein anderes Rechenzentrum übertragen

Um den Transferprozess zu starten, müssen zuerst neue Umgebungsvariablen geladen werden.

> [!warning]
>
> Wenn Sie Ihr Backup in ein Rechenzentrum innerhalb desselben Projekts übertragen, muss nur die Variable OS_REGION_NAME angepasst werden.
>

```
#root@server:~$ export OS_REGION_NAME=SBG1
```

Wenn Sie Ihr Backup in ein anderes Projekt oder in einen anderen Account übertragen, müssen die zu diesem Account gehörigen Umgebungsvariablen über folgenden Befehl neu geladen werden:

```
#root@server:~$ source openrc.sh
```

Um das Backup in das neue Rechenzentrum zu transferieren, verwenden Sie folgenden Befehl:

```
#root@server:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1

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
| name             | snap_server1                                                                                                                                                                             |
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

### Instanz mithilfe Ihres Backups erstellen

Verwenden Sie die Backup-ID als Image mit folgendem Befehl:

```
#root@server:~$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Weiterführende Informationen

[Transfer a volume backup from one datacentre to another](https://docs.ovh.com/gb/en/public-cloud/transfer_volume_backup_from_one_datacentre_to_another/){.external} (Englisch)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
