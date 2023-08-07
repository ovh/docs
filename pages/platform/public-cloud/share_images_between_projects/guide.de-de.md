---
title: Image zwischen Public Cloud Projekten teilen
excerpt: Erfahren Sie hier, wie Sie ein Image mit OpenStack zwischen Public Cloud Projekten teilen können
updated: 2023-08-07
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Es kann vorkommen, dass Sie ein Image eines [Instanz Backups](/pages/platform/public-cloud/save_an_instance) oder ein Image eines [Volume Backups](/pages/platform/public-cloud/volume-backup) für mehrere Public Cloud Projekte freigeben müssen.

Mit OpenStack können Sie ein Image für mehrere Projekte freigeben, auch wenn diese nicht zum selben Account gehören.
Diese Funktion bietet viele Möglichkeiten, birgt aber auch Risiken. Es ist also wichtig, die Prinzipien zu verstehen.

Wenn Sie z.B. ein Image aus Projekt A für Projekt B freigeben möchten (unter demselben oder einem anderen Account), gelten die folgenden Regeln:

- Das Image bleibt physisch an Projekt A angehängt. Das Projekt B verfügt nur über eine Zugriffsberechtigung (*access authorization*) für dieses Image.
- Wenn Projekt A den Zugriff auf das Image unterdrückt (Löschen der ACL, Löschen des Images, Löschen des Projekts aufgrund ausstehender Zahlungen, etc.), funktionieren Instanzen, die von diesem Image aus in Projekt B ausgeführt werden, möglicherweise wegen Problemen bei Migration oder Rebuild nicht mehr.

Daher ist es wichtig, diese Punkte in Betracht zu ziehen, bevor Sie diese Konfigurationen anwenden.
Weitere Informationen finden Sie in der offiziellen [OpenStack Dokumentation](https://docs.openstack.org/image-guide/share-images.html){.external}.

**Diese Anleitung erklärt, wie Sie ein Image für ein anderes Projekt freigeben und dabei die Image-Konfiguration und den Image-Status beibehalten.**

## Voraussetzungen

- Sie sind mit der Vorgehensweise zur [Vorbereitung der Umgebung für die Verwendung der OpenStack API](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api) vertraut (empfohlen).
- Sie haben eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) in Ihrem Account erstellt.
- Sie haben einen [OpenStack User erstellt](/pages/platform/public-cloud/create_and_delete_a_user).

> [!primary]
>
> Diese Anleitung bezieht sich auf die Verwendung des [OpenStack Client](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

## In der praktischen Anwendung

### Image freigeben

Führen Sie zunächst den folgenden Befehl aus, um die vorhandenen Images aufzulisten:

```bash
$ openstack image list --private
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```

> [!warning]
> 
> Um es teilen zu können, muss ein Image zunächst auf geteilte Sichtbarkeit (*shared visibility*) eingestellt werden.
>

```bash
$ openstack image set --shared <Image_UUID>
```

### Hinzufügen eines Projekts zu einem Image

Im nächsten Schritt fügen Sie die UUID eines anderen Projekts als Member des Image hinzu. In unserem Beispiel unten fügen wir die UUID von Projekt B hinzu.

```bash
$ openstack image add project 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B>
+------------+--------------------------------------+
| Field      | Value                                |
+------------+--------------------------------------+
| created_at | 2020-01-27T13:26:52Z                 |
| image_id   | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| member_id  | <UUID_Project_B>                      |
| schema     | /v2/schemas/member                   |
| status     | pending                              |
| updated_at | 2020-01-30T15:18:00Z                 |
+------------+--------------------------------------+
```

Überprüfen Sie danach die Anfrage für Projekt B:


```bash
$ openstack image member list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```


Wenn sich die Freigabeanforderung im Status `pending` befindet, müssen Sie sie akzeptieren:

```bash
$ openstack image set --accept 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | eff99684d8294dbe8c2d4dd7407073f1 | accepted |
+--------------------------------------+----------------------------------+----------+
```

Nachdem Sie die Freigabeanfrage akzeptiert haben, überprüfen Sie, ob Sie das Image sehen und darauf zugreifen können:

```bash
$ openstack image show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                  |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 1b19c9e5bdd36b9010de0164dd8b245e                                                                                                                                                       |
| container_format | bare                                                                                                                                                                                   |
| created_at       | 2018-05-08T15:38:50Z                                                                                                                                                                   |
| disk_format      | raw                                                                                                                                                                                    |
| file             | /v2/images/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba/file                                                                                                                                   |
| id               | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba                                                                                                                                                   |
| min_disk         | 0                                                                                                                                                                                      |
| min_ram          | 0                                                                                                                                                                                      |
| name             | pfsense                                                                                                                                                                                |
| owner            | 35c9ee22e5c84c1097a5652b0abcbab3                                                                                                                                                       |
| properties       | direct_url='swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', locations='[{'url': 'swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', 'metadata': {}}]' |
| protected        | False                                                                                                                                                                                  |
| schema           | /v2/schemas/image                                                                                                                                                                      |
| size             | 10737418240                                                                                                                                                                            |
| status           | active                                                                                                                                                                                 |
| tags             |                                                                                                                                                                                        |
| updated_at       | 2018-05-08T15:53:57Z                                                                                                                                                                   |
| virtual_size     | None                                                                                                                                                                                   |
| visibility       | private                                                                                                                                                                                |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Überprüfen der Member des Image

```bash
$ openstack image member list 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                      | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                      | accepted |
+--------------------------------------+----------------------------------+----------+
```

### Entfernen eines Members aus einem Image oder Aufheben der Freigabe eines Images

```bash
$ openstack image remove project <image> <UUID_Project_To_Delete>
```

## Weiterführende Informationen

[Backup einer Instanz von einem Rechenzentrum in ein anderes übertragen](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
