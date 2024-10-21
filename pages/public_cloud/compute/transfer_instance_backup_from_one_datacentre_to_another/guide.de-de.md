---
title: Backup einer Instanz von einer OpenStack-Region in eine andere übertragen
excerpt: Erfahren Sie hier, wie Sie ein Instanz-Backup von einer OpenStack-Region in eine andere verschieben und dabei die Konfiguration und den Zustand der Instanz beibehalten
updated: 2023-09-25
---

## Ziel

Möglicherweise müssen Sie Ihre [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) von einer OpenStack-Region in eine andere verschieben; etwa weil Sie in einer neuen OpenStack-Region operieren möchten, oder weil Sie von OVHcloud Labs in die Public Cloud migrieren möchten.

**Diese Anleitung erklärt, wie Sie ein Instanz-Backup von einer OpenStack-Region in eine andere übertragen und dabei die Konfiguration und den Zustand der Instanz beibehalten.**

## Voraussetzungen

Um den Transfer durchzuführen benötigen Sie eine Umgebung mit:

- [OpenStack CLI](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- Anbindung an die OpenStack API von OVHcloud.
- Verfügbarer Speicherplatz entsprechend der Größe der Instanz-Disk (für temporären Backup-Speicher).

Diese Umgebung wird als "Jump Host" verwendet, um das Backup von einer Region in eine andere zu übertragen. Bei dieser Umgebung kann es sich um eine bei OVHcloud oder auf Ihrem lokalen System gehostete Instanz handeln.

Sie benötigen auch eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) in Ihrem OVHcloud Account.

## In der praktischen Anwendung

### Backup erstellen

```bash
$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID | Name | Status | Networks | Image Name |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```

Führen Sie anschließend folgenden Befehl aus, um ein Backup Ihrer Instanz zu erstellen:

```bash 
$ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Backup herunterladen

Um die verfügbaren Instanzen aufzulisten, führen Sie folgenden Befehl aus:

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

Ermitteln Sie nun mithilfe der Liste das erstellte Backup:

```text
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Führen Sie abschließend folgenden Befehl aus, um das Backup auf den Jump Host zu laden:

```bash
$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

<a name="transfer"></a>

### Backup in eine andere OpenStack-Region übertragen

Um den Transferprozess zu starten, müssen zuerst neue Umgebungsvariablen geladen werden.

> [!warning]
>
> Wenn Sie Ihr Backup innerhalb desselben Projekts in eine OpenStack-Region übertragen, müssen Sie die Variable `OS_REGION_NAME` ändern.
>

```bash
$ export OS_REGION_NAME=SBG1
```

Wenn Sie Ihr Backup in ein anderes Projekt oder in einen anderen Account übertragen, müssen die zu diesem Account gehörigen Umgebungsvariablen über folgenden Befehl neu geladen werden:

```bash
$ source openrc.sh
```

Um das Backup in die neue OpenStack-Region zu transferieren, verwenden Sie folgenden Befehl:

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

### Instanz mithilfe Ihres Backups erstellen

Um eine Instanz aus Ihrem Backup zu erstellen, verwenden Sie die Backup-ID als Image mit folgendem Befehl:

```bash
$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.