---
title: Erste Schritte mit der Volume-Verwaltung über die OpenStack API
slug: api-openstack-volumes
section: OpenStack
order: 7
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 19.05.2021**

## Ziel

Um Ihre Operationen für die Public Cloud zu automatisieren, können Sie die OpenStack API für die Erstellung verschiedener Skripte verwenden.
<br>Sie können zum Beispiel ein neues Hochleistungsvolume erstellen, um es an eine Public Cloud Instanz anzuhängen.

**Diese Anleitung erklärt, wie Sie die OpenStack API nutzen, um Ihre Volumes mit dem Python-Client zu verwalten.**

## Voraussetzungen

- [Vorbereitung der Umgebung für die Verwendung der OpenStack API](../prepare_the_environment_for_using_the_openstack_api/) durch Installation des *python-cinderclient* und des *python-novaclient*
- [Laden der OpenStack Umgebungsvariablen](../set-openstack-environment-variables/)

## In der praktischen Anwendung

### Cinder Dokumentation

Alle existierenden Befehle können Sie der Dokumentation zum Client entnehmen:

```bash
admin@server-1:~$ openstack help
```

Hier die wichtigsten Befehle im Überblick:

|Befehl|Beschreibung|
|---|---|
|volume create|Neues Volume erstellen|
|volume delete|Volume löschen|
|list volume|Volumes auflisten|
|volume snapshot create|Snaspshot eines Volumes erstellen|

Sie können die Erklärung zu einem speziellen Swift-Befehl aufrufen, indem Sie "help" einfügen:

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
> Sie können auch die Dokumentation zum OpenStack-Client auf der [OpenStack-Webseite](https://docs.openstack.org/python-openstackclient/latest/){.external} einsehen.
>


### Einfache Operationen

#### Volume vom Typ "high speed" erstellen

- Die Volume-Typen auflisten:

```bash
admin@server-1:~$ openstack volume type list
+--------------------------------------+------------+-----------+
| ID                                   | Name       | is Public |
+--------------------------------------+------------+-----------+
| e9551830-6362-4bf8-92e5-391829456b03 | classic    | True      |
| 6fc8e512-3cac-4f39-b9a8-af098d710506 | high speed | True      |
+--------------------------------------+------------+-----------+
```

- High-Speed-Volume namens **volume1** mit 10 GB erstellen:

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

Sie können ein Image mit dem Argument `--image` auf einem Volume installieren:

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

Hierbei ist **be66762f-b849-43e1-b57c-005d9fe28088** die Image-ID für "Debian 10".

#### Volume einer Instanz zuordnen

- Zusätzliche Volumes auflisten:

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
> Für die meisten der nachfolgenden Befehle muss die Volume-ID statt des Namens angegeben werden.
>

- Volume mit dem OpenStack-Client auf einer Instanz mounten:

```bash
admin@server-1: openstack server add volume 46aec29f-fe50-4562-b3f9-2e6665a7270a f75db60b-4179-b-8-3ca-4-e9e e faf ef
```

- Überprüfen Sie mit dem OpenStack-Client, ob das Volume korrekt an die Instanz angehängt wurde:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| ID                                   | Name          | Status    | Size | Attached to                             |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |                                         |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | in-use    |   10 | Attached to cli-playground on /dev/sdb  |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
```

#### Löschung eines Volumes

- Volume von der Instanz trennen:

```bash
admin@server-1:~$ openstack server remove volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Volume löschen:

```bash
admin@server-1:~$ openstack volume delete f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
