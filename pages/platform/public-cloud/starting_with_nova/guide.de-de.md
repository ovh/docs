---
title: Mit der OpenStack-API starten
slug: getting-started-openstack-api
excerpt: Erfahren Sie, wie Sie Ihre Instanzen mithilfe des OpenStack Python-Clients verwalten.
section: Verwaltung via OpenStack
order: 3
---

**Letzte Aktualisierung am 03.11.2022**

## Ziel

Um Ihre Operationen in der Public Cloud zu automatisieren, können Sie die OpenStack-APIs verwenden, um verschiedene Skripte zu erstellen. 

> [!primary]
>
> Der Nova Client wurde zuvor für die Verwaltung Ihrer Instanzen und deren Festplatten verwendet. Dieser Kunde wurde nun abgewertet und die Bestellungen wurden in den OpenStack-Python-Client integriert.
>

Sie können zum Beispiel die Erstellung zusätzlicher Instanzen starten, wenn Ihre Monitoring-Tools Lastspitzen erkennen, um eine Überlastung Ihrer Infrastruktur zu vermeiden. Die Erstellung von Snapshots kann auch regelmäßig programmiert werden.

Diese Anleitung hilft Ihnen dabei, die OpenStack-APIs zu verwenden, um Ihre Instanzen mithilfe des OpenStack-Python-Clients zu verwalten.

## Voraussetzungen

- [Umgebung für die Verwendung der OpenStack API vorbereiten](../preparer-lenvironnement-pour-utiliser-lapi-openstack/)
- [Die OpenStack Umgebungsvariablen laden](../charger-les-variables-denvironnement-openstack/)


## In der praktischen Anwendung

Sie erhalten die Liste der Bestellungen, die Sie in der Kundendokumentation erhalten können:

```bash
admin@server-1:~$ openstack command list
```

Sie können die angezeigten Befehle filtern, indem Sie die Gruppe angeben: 

```bash
admin@server-1:~$ openstack command list --group compute
```

Sie können auch Informationen zu einer Bestellung erhalten, indem Sie vor dieser Bestellung `help` hinzufügen:

```bash
admin@server-1:~$ openstack help flavor list 

usage: openstack flavor list [-h] [-f {csv,json,table,value,yaml}] [-c COLUMN]
                             [--quote {all,minimal,none,nonnumeric}] [--noindent]
                             [--max-width <integer>] [--fit-width] [--print-empty]
                             [--sort-column SORT_COLUMN]
                             [--sort-ascending | --sort-descending] [--public | --private | --all]
                             [--min-disk <min-disk>] [--min-ram <min-ram>] [--long]
                             [--marker <flavor-id>] [--limit <num-flavors>]

List flavors ...
```

> [!success]
>
> Die Dokumentation des Kunden finden Sie direkt auf der [OpenStack-Seite](https://docs.openstack.org/python-openstackclient/latest/cli/index.html)
> 

### Grundlegende Operationen

#### Hinzufügen eines öffentlichen SSH-Schlüssels

Zunächst muss ein öffentlicher SSH-Schlüssel hinzugefügt werden, damit Sie sich mit den Instanzen verbinden können.

- Bestellungen für SSH-Schlüssel auflisten:

```bash
admin@server-1:~$ openstack help | grep keypair         
  keypair create  Create new public or private key for server ssh access
  keypair delete  Delete public or private key(s)
  keypair list    List key fingerprints
  keypair show    Display key details

```

- Öffentlichen SSH-Schlüssel hinzufügen:

```bash
admin@server-1:~$ openstack keypair create --public-key ~/.ssh/id_rsa.pub SSHKEY
```

- Verfügbare SSH-Schlüssel auflisten:

```bash
admin@server-1:~$ openstack keypair list
+---------------+-------------------------------------------------+------+
| Name          | Fingerprint                                     | Type |
+---------------+-------------------------------------------------+------+
| SSHKEY        | 5c:fd:9d:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:3a | ssh  |
+---------------+-------------------------------------------------+------+
```

#### Die Instanz-Modelle auflisten

Die ID des gewünschten Modells muss dann abgerufen werden:

```bash
admin@server-1:~$ openstack flavor list
+--------------------------------------+-----------------+--------+------+-----------+-------+-----------+
| ID                                   | Name            |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+-----------------+--------+------+-----------+-------+-----------+
| 0062dad0-f93c-4d7d-bde7-6add4ad6baaa | win-b2-15-flex  |  15000 |   50 |         0 |     4 | True      |
| 022f8ac5-b6a7-4365-9db8-c69775d67a2d | t2-180          | 180000 |   50 |         0 |    60 | True      |
| 07124b62-dd6d-4bf2-80d7-d9ea3c923cf3 | i1-180          | 180000 |   50 |         0 |    32 | True      |
| 0cb50da2-cd4d-4a14-8a22-bbc59d94c814 | c2-120-flex     | 120000 |   50 |         0 |    32 | True      |
| 0d338e52-cfba-4e32-914e-c2ea19d2a9df | d2-4            |   4000 |   50 |         0 |     2 | True      |
| 0dbcff05-2da0-40a6-87dc-96a1e98d9ffc | b2-30           |  30000 |  200 |         0 |     8 | True      |
| 11530c24-bc02-48c3-b272-802791795176 | i1-45           |  45000 |   50 |         0 |     8 | True      |
| 11fc4ed3-5198-4043-b093-063787a144e1 | c2-7            |   7000 |   50 |         0 |     2 | True      |
| 13d9146d-f519-4f8b-b87c-245d76bd21b0 | b2-120-flex     | 120000 |   50 |         0 |    32 | True      |
| ...                                  | ...             | ...    | ..   | ...       |       | ...       |
+--------------------------------------+-----------------+--------+------+-----------+-------+-----------+
```

#### Die verfügbaren Images auflisten

Um den Vorgang abzuschließen, rufen Sie einfach die ID des Images ab, das für die Instanz verwendet wird:

```bash
admin@server-1:~$ openstack image list 
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 8990fbbb-bd7e-4c57-8b19-a162e12c5195 | AlmaLinux 8                                   | active |
| f1d2e56e-faec-4fd4-8493-dcf4c4201b40 | AlmaLinux 8 - UEFI                            | active |
| a243240a-ca1f-4a53-a3bd-30c4f96b241f | AlmaLinux 8 - cPanel                          | active |
| 1be04371-252f-48be-81fb-1cb89ea55778 | AlmaLinux 9                                   | active |
| df89529f-8b4f-4534-9ddc-0092e30bcc97 | AlmaLinux 9 - UEFI                            | active |
| 81c5ebbc-04fd-40f8-83aa-9b2bae8769f2 | Centos 7                                      | active |
| b753f820-37cd-437a-b301-3423caf27637 | Centos 7 - Analytics - Ambari pre-warmed      | active |
| 81ddd059-41b0-493e-a1e2-a278139b7bbb | Centos 7 - Analytics - Base image             | active |
| ...                                  | ...                                           | ...    |
+--------------------------------------+-----------------------------------------------+--------+
```

#### Instanz erstellen

Mit den zuvor abgerufenen Elementen können Sie eine Instanz erstellen:

```bash
admin@server-1:~$ openstack server create --key-name SSHKEY --flavor d2-2 --image "Ubuntu 22.04" InstanceTest
+-----------------------------+-----------------------------------------------------+
| Field                       | Value                                               |
+-----------------------------+-----------------------------------------------------+
| OS-DCF:diskConfig           | MANUAL                                              |
| OS-EXT-AZ:availability_zone |                                                     |
| OS-EXT-STS:power_state      | NOSTATE                                             |
| OS-EXT-STS:task_state       | scheduling                                          |
| OS-EXT-STS:vm_state         | building                                            |
| OS-SRV-USG:launched_at      | None                                                |
| OS-SRV-USG:terminated_at    | None                                                |
| accessIPv4                  |                                                     |
| accessIPv6                  |                                                     |
| addresses                   |                                                     |
| adminPass                   | xxxxxxxxxxxx                                        |
| config_drive                |                                                     |
| created                     | 2022-10-13T19:05:54Z                                |
| flavor                      | d2-2 (14c5fa3f-fdad-45c4-9cd1-14dd99c341ee)         |
| hostId                      |                                                     |
| id                          | xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                |
| image                       | Ubuntu 22.04 (0ea24976-fb6c-46ef-acb5-0cb88b0493aa) |
| key_name                    | SSHKEY                                              |
| name                        | InstanceTest                                        |
| progress                    | 0                                                   |
| project_id                  | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    |
| properties                  |                                                     |
| security_groups             | name='default'                                      |
| status                      | BUILD                                               |
| updated                     | 2022-10-13T19:05:55Z                                |
| user_id                     | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    |
| volumes_attached            |                                                     |
+-----------------------------+-----------------------------------------------------+
```

Nach einigen Augenblicken kann die Liste der existierenden Instanzen überprüft werden, um die neu erstellte Instanz wiederzufinden:

```bash
admin@server-1:~$ openstack server list                                                                 
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
| ID                                   | Name         | Status | Networks                            | Image        | Flavor |
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
| xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx | InstanceTest | ACTIVE | Ext-Net=xxxx:xxxx::xxxx, 51.xx.xx.x | Ubuntu 22.04 | d2-2   |
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
```

#### Löschen einer Instanz

Sie können eine Instanz mit folgendem Befehl löschen:

```bash
admin@server-1:~$ openstack server delete InstanceTest
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.