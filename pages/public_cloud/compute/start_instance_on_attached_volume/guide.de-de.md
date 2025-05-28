---
title: Starten einer Public Cloud Instanz von einem bootfähigen Volume
excerpt: Erfahren Sie hier, wie Sie eine Instanz von einem bootfähigen Volume starten
updated: 2025-02-26
---

## Ziel

Public Cloud Instanzen werden mit einer Disk geliefert, die von einem System-Image kopiert wurde (Debian 12, Windows Server, etc.). Es können auch zusätzliche Volumes verwendet werden, also persistente Disks, auf denen Daten gespeichert werden können.

Sie können auch ein Betriebssystem von einem Volume aus oder auf einem Volume bereitstellen. Die Public Cloud Instanz startet dann von diesem Volume statt der ursprünglichen Disk.

**Diese Anleitung erklärt, wie Sie eine Instanz von einem angeschlossenen Volume starten.**

![public-cloud](images/3704.png){.thumbnail}

> [!success]
>
> OpenStack erlaubt es, nativ von einem Volume zu booten.  
> Dabei wird das Volume bootfähig gemacht und die Instanz von diesem Volume gestartet.  
> Diese Änderungen führen dazu, dass die Instanz-Disk nicht mehr angezeigt wird, wenn das neue Volume den Betrieb übernimmt.  
> Die nachfolgend beschriebenen Funktionen machen den Zugriff auf die Instanz-Disk obsolet und nutzen somit das Volume.

> [!warning]
>
> Für die aktuelle Version von OpenStack mit einem bootfähigen Volume ist die OVHcloud Rescue-Distribution, wie Sie für eine Instanz verwendbar ist, nicht verfügbar.
>

## Voraussetzungen

- Sie haben Zugang zum [Horizon-Interface](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon). 
- Sie haben [OpenStack Umgebungsvariablen](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables) eingerichtet.

## In der praktischen Anwendung

### Erstellen eines Boot-Volumes von einem Image

> [!tabs]
> **Horizon**
>> Loggen Sie sich ins [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) ein.
>>
>> Wählen Sie oben links die korrekte Region aus.
>>
>> Öffnen Sie im Tab Project `Volumes`{.action} und klicken Sie auf die Kategorie `Volumes`{.action}.
>>
>> Klicken Sie auf `Create Volume`{.action}.
>>
>> ![public-cloud](images/create-a-volume-2.png){.thumbnail width="800"}
>>
>> Geben Sie im angezeigten Dialogfeld die folgenden Werte ein bzw. wählen Sie diese aus:
>>
>> | Information | Beschreibung |
>> | --- | --- |
>> | Volume Name | Geben Sie einen Namen für das Volume ein. |
>> | Description | Optional, eine kurze Beschreibung des Volumes. |
>> | Volume Source | Wählen Sie die Option `Image`.<br><br> ![public-cloud](images/create-a-volume-3.png){.thumbnail} |
>> | Use image as a source | Sie können das Image aus der Liste auswählen.<br><br> ![public-cloud](images/create-a-volume-4.png){.thumbnail} |
>> | Type | Abhängig vom Typ des zu verwendenden Volumes. |
>> | Size (GB) | Volumegröße in Gigabyte (GB). |
>> | Availability Zone | nova <br><br> ![public-cloud](images/create-a-volume-5.png){.thumbnail} |
>>
>> Klicken Sie auf `Create Volume`{.action}.
>>
>> Das Volume befindet sich im Status `creating` und dann im Status `downloading`, bevor es verfügbar ist.
>>
>> ![public-cloud](images/create-a-volume-8.png){.thumbnail width="800"}
>>
>> Wie in der Abbildung unten oder durch Klicken auf den Namen des Volumes dargestellt, wird es als bootfähig (*bootable*) definiert.
>>
>> ![public-cloud](images/create-a-volume-9.png){.thumbnail width="800"}
>>
> **OpenStack-Client**
>> Sie können ein Startvolume aus einem vorhandenen Image, Volume oder Volume-Snapshot erstellen. Im folgenden Beispiel-Verfahren wird gezeigt, wie Sie ein Volume aus einem Image erstellen und das Volume zum Starten einer Instanz verwenden.
>>
>> ```console
>> $ openstack image list
>> ```
>> > [!primary]
>> >
>> > Notieren Sie sich die ID oder den Namen des Image, das Sie verwenden möchten.
>>
>> Erstellen Sie ein bootfähiges Volume mit hoher Geschwindigkeit und einer Speicherkapazität von 10 GB mit dem Namen **volume_ubuntu** aus einem Ubuntu 24.04 Image.
>>
>> Sie können ein Image auf einem Volume mit dem Parameter `--image` installieren:
>>
>> ```console
>> $ openstack volume create --type high-speed --image 2c2e28dc-9124-49c3-b92d-7f00bd83ac86 --size 10 volume_ubuntu
>> +---------------------+--------------------------------------+
>> | Field | Value |
>> +---------------------+--------------------------------------+
>> | attachments | [] |
>> | availability_zone | nova |
>> | bootable | false |
>> | consistencygroup_id | None |
>> | created_at | 2025-02-06T17:04:34.000000 |
>> | description | None |
>> | encrypted | False |
>> | id | d7611318-fd7b-4b6a-8a7a-8d368049f747 |
>> | multiattach | False |
>> | name | volume_ubuntu |
>> | properties | |
>> | replication_status | None |
>> | size | 20 |
>> | snapshot_id | None |
>> | source_volid | None |
>> | status | creating |
>> | type | high-speed |
>> | updated_at | None |
>> | user_id | 1a67934f87ef481d9cb617a913bfa8bb |
>> +---------------------+--------------------------------------+
>> ```
>>
>> In diesem Befehl ist **2c2e28dc-9124-49c3-b92d-7f00bd83ac86** die Image ID für Ubuntu 24.04.
>>
>> > [!primary]
>> >
>> > Cinder macht ein Volume bootfähig, wenn der Parameter `--image` übergeben wird.
>>

### Eine Instanz mit einem bootfähigen Volume starten

> [!tabs]
> **Horizon**
>> Loggen Sie sich ins [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/).
>>
>> Wählen Sie oben links die korrekte Region aus.
>>
>> Öffnen Sie im Tab Projekt `Compute`{.action} und klicken Sie auf die Kategorie `Instances`{.action}.
>>
>> Klicken Sie auf `Launch Instance`{.action}.
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-1.png){.thumbnail width="800"}
>>
>> Geben Sie im Dialogfeld `Launch Instance` die erforderlichen Details ein. Weitere Informationen finden Sie in der Anleitung [Instanz über das Horizon-Interface erstellen](/pages/public_cloud/compute/create_instance_in_horizon).
>>
>> Wählen Sie im Tab "Source" im Feld `Select Boot Source` die Option "Volume".
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-3.png){.thumbnail}
>>
>> Ein neues Volume-Auswahlfeld wird angezeigt. Sie können das zuvor erstellte Volume aus der Liste auswählen.
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-4.png){.thumbnail}
>>
>> Klicken Sie auf `Launch Instance`{.action}.
>>
>> Die Instanz befindet sich im Status `build` und dann im Status `Block Device Mapping`, bevor sie verfügbar ist.
>>
>> Die Instanz wird zuletzt mit dem Volume verbunden.
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-9.png){.thumbnail width="800"}
>>
> **OpenStack-Client**
>> Erstellen einer Instanz mit dem bootfähigen Volume **volume_ubuntu** als Bootgerät:
>>
>> ```console
>> openstack server create --volume volume_ubuntu --flavor d2-2 --key-name publickey --nic net-id=Ext-Net InstanceTest
>> ```
>>
>> Volumes auflisten, um sicherzustellen, dass sich der Status zu *in-use* geändert hat und dass das Volume korrekt angeschlossen wird:
>>
>> ```console
>> $ openstack volume list
>> +--------------------------------------+---------------+--------+------+--------------------------------------+
>> | ID | Name | Status | Size | Attached to |
>> +--------------------------------------+---------------+--------+------+--------------------------------------+
>> | d7611318-fd7b-4b6a-8a7a-8d368049f747 | volume_ubuntu | in-use | 10 | Attached to InstanceTest on /dev/sda |
>> +--------------------------------------+---------------+--------+------+--------------------------------------+
>> ```
>>
>> Mit der Instanz **InstanceTest** verbundene Volumes auflisten:
>>
>> ```console
>> $ openstack server volume list InstanceTest
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> | ID | Device | Server ID | Volume ID | Tag |
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> | d7611318-fd7b-4b6a-8a7a-8d368049f747 | /dev/sda | 5d97c190-f2e3-4af4-a010-6fa7bffbf88b | d7611318-fd7b-4b6a-8a7a-8d368049f747 | None |
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Sie können auch eine Instanz erstellen, indem Sie das Image und den Parameter "boot from volume" übergeben.
>>
>> ```console
>> $ openstack server create --flavor d2-2 --key-name publickey --nic net-id=Ext-Net --image b680f0aa-8eb8-4ac8-b008-2a90bb71af4f --boot-from-volume 10 InstanceTest2
>> +-----------------------------+---------------------------------------------+
>> | Field | Value |
>> +-----------------------------+---------------------------------------------+
>> | OS-DCF:diskConfig | MANUAL |
>> | OS-EXT-AZ:availability_zone | |
>> | OS-EXT-STS:power_state | NOSTATE |
>> | OS-EXT-STS:task_state | scheduling |
>> | OS-EXT-STS:vm_state | building |
>> | OS-SRV-USG:launched_at | None |
>> | OS-SRV-USG:terminated_at | None |
>> | accessIPv4 | |
>> | accessIPv6 | |
>> | addresses | |
>> | adminPass | dP4e4iY3eWWC |
>> | config_drive | |
>> | created | 2025-02-06T17:20:06Z |
>> | flavor | d2-2 (dc3fe9e7-e374-4ad8-b200-fa3bdf45069f) |
>> | hostId | |
>> | id | a4632249-e1b4-4047-be1c-87f8b0328f7c |
>> | image | N/A (booted from volume) |
>> | key_name | publickey |
>> | name | InstanceTest2 |
>> | progress | 0 |
>> | project_id | d7fb756ae2c24b1cb8630ec7f56ee4a8 |
>> | properties | |
>> | security_groups | name='default' |
>> | status | BUILD |
>> | updated | 2025-02-06T17:20:06Z |
>> | user_id | 1a67934f87ef481d9cb617a913bfa8bb |
>> | volumes_attached | |
>> +-----------------------------+---------------------------------------------+
>> ```
>>
>> Im obigen Befehl ist `b680f0aa-8eb8-4ac8-b008-2a90bb71af4f` die Image ID für Debian 12.
>>
>> - Volumes auflisten:
>>
>> Alle Volumes auflisten, um sicherzustellen, dass der Status zu *in-use* geändert wurde und dass das Volume den Anschluss korrekt signalisiert:
>>
>> ```console
>> $ openstack volume list
>> +--------------------------------------+---------------+--------+------+----------------------------------------+
>> | ID | Name | Status | Size | Attached to |
>> +--------------------------------------+---------------+--------+------+----------------------------------------+
>> | 27f8332d-8bfd-4515-b0a8-18667ae50ff8 | | in-use | 10 | Attached to InstanceTest2 on /dev/sda |
>> | d7611318-fd7b-4b6a-8a7a-8d368049f747 | volume_ubuntu | in-use | 10 | Attached to InstanceTest on /dev/sda |
>> +--------------------------------------+---------------+--------+------+----------------------------------------+
>> ```
>>
>> Anzeigen des Volume auf dem Server, um sicherzustellen, dass es ordnungsgemäß angeschlossen ist:
>>
>> ```console
>> $ openstack server volume list InstanceTest2
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> | ID | Device | Server ID | Volume ID | Tag |
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> | d7611318-fd7b-4b6a-8a7a-8d368049f747 | /dev/sda | 5d97c190-f2e3-4af4-a010-6fa7bffbf88b | d7611318-fd7b-4b6a-8a7a-8d368049f747 | None |
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> ```

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.
