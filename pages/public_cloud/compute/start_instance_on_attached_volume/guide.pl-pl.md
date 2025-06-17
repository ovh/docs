---
title: 'Jak uruchomić instancję Public Cloud na woluminie bootowalnym'
excerpt: 'Dowiedz się, jak uruchomić instancję na woluminie startowym'
updated: 2025-02-26
---

## Wprowadzenie

Instancje Public Cloud są dostarczane z dyskiem skopiowanym z obrazu systemu (Debian 12, Windows Server, etc.). Możliwe jest również użycie dodatkowych wolumenów - dysków stałych, które pozwolą na przechowywanie danych.

Możesz również wdrożyć system operacyjny z wolumenu i na wolumin. W ten sposób instancja Public Cloud zostanie uruchomiona w tym woluminie, a nie na oryginalnym dysku.

**Niniejszy przewodnik wyjaśnia, jak uruchomić instancję na podłączonym wolumenie.**

![public-cloud](images/3704.png){.thumbnail}

> [!success]
>
> OpenStack pozwala na uruchomienie z wolumenu.
> Chodzi o to, aby wolumin był bootowalny i aby można było uruchomić instancję z tego woluminu.
> Zmiany spowodują usunięcie oryginalnego dysku, gdy nowy wolumin przejmie jego funkcje.
> Funkcje opisane w tym przewodniku eliminują potrzebę dostępu do oryginalnego dysku i dzięki temu wykorzystują wolumin.

> [!warning]
>
> W aktualnej wersji OpenStack tryb rescue-pro nie jest dostępny na instancji uruchomionej z poziomu wolumenu bootowalnego.
>

## Wymagania początkowe

- [Dostęp do interfejsu Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)
- [Pobieranie zmiennych środowiskowych OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)


## Instrukcje

### Tworzenie wolumenu rozruchowego z obrazu.

> [!tabs]
> **Horizon**
>> Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/).
>>
>> Wybierz odpowiedni region z menu rozwijanego w lewym górnym rogu.
>>
>> W karcie Projekt otwórz zakładkę `Volumes`{.action} i kliknij kategorię `Volumes`{.action}.
>>
>> Kliknij `Create Volume`{.action}.
>>
>> ![public-cloud](images/create-a-volume-2.png){.thumbnail width="800"}
>>
>> W wyświetlonym oknie dialogowym wprowadź lub wybierz następujące wartości:
>>
>> | Informacje | Opis |
>> | ---  | ---  |
>> | Volume Name | Określ nazwę woluminu |
>> | Descriptiom | Opcjonalnie, podaj krótki opis wolumenu |
>> | Wolumen Źródłowy | Wybierz opcję `Image`.<br><br> ![public-cloud](images/create-a-volume-3.png){.thumbnail} |
>> | Use image as a source | Możesz wybrać obraz z listy.<br><br> ![public-cloud](images/create-a-volume-4.png){.thumbnail} |
>> | Type | W zależności od typu wolumenu, którego chcesz użyć |
>> | Size (GB) | Rozmiar wolumenu w gigabajtach (GiB) |
>> | Availability Zone | nova <br><br> ![public-cloud](images/create-a-volume-5.png){.thumbnail} |
>>
>> Kliknij `Create Volume`{.action}.
>>
>> Wolumen będzie w stanie *`creating`*, a następnie *`downloading`* zanim będzie dostępny.
>>
>> ![public-cloud](images/create-a-volume-8.png){.thumbnail width="800"}
>>
>> Jak widać na poniższym obrazku lub po kliknięciu na nazwę wolumenu, jest on ustawiony jako bootowalny (*bootable*).
>>
>> ![public-cloud](images/create-a-volume-9.png){.thumbnail width="800"}
>>
> **Klient OpenStack**
>> Wolumin rozruchowy można utworzyć na podstawie istniejącego obrazu, woluminu lub snapshota woluminu. Ta procedura pokazuje, jak utworzyć wolumen z obrazu i użyć go do uruchomienia instancji.
>>
>> ```console
>> $ openstack image list
>> ```
>>
>> > [!primary]
>> >
>> > Zapisz identyfikator lub nazwę obrazu, którego chcesz użyć.
>>
>> Utwórz bootowalny wolumen 10 GB o wysokiej prędkości nazwany **volume_ubuntu** z obrazu Ubuntu 24.04:
>>
>> Możesz zainstalować obraz na woluminie, używając argumentu `--image`:
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
>> W tym poleceniu, **2c2e28dc-9124-49c3-b92d-7f00bd83ac86** to Ubuntu ID 24.04.
>>
>> > [!primary]
>> >
>> > Cinder sprawia, że wolumin jest bootowalny po przekazaniu parametru `--image`.
>>

### Uruchom instancję korzystając z wolumenu bootowalnego

> [!tabs]
> **Horizon**
>> Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/).
>>
>> Wybierz odpowiedni region z menu rozwijanego w lewym górnym rogu.
>>
>> W karcie Projekt otwórz zakładkę `Compute`{.action} i kliknij `Instances`{.action} kategorii.
>>
>> Kliknij na `Launch Instance`{.action}.
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-1.png){.thumbnail width="800"}
>>
>> W oknie dialogowym `Launch Instance` uzupełnij wymagane informacje. Więcej szczegółów znajdziesz w przewodniku [Tworzenie instancji w interfejsie Horizon](/pages/public_cloud/compute/create_instance_in_horizon).
>>
>> W zakładce `Source` wybierz "Volume" w polu `Select Boot Source`.
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-3.png){.thumbnail}
>>
>> Pojawi się nowe pole wyboru objętości. Z listy można wybrać utworzony wcześniej wolumen.
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-4.png){.thumbnail}
>>
>> Kliknij na `Launch Instance`{.action}.
>>
>> Instancja będzie w stanie `build`, a następnie w stanie `Block Device Mapping`, zanim stanie się dostępna.
>>
>> Instancja w końcu będzie miała przypisany wolumen.
>>
>> ![public-cloud](images/create-an-instance-with-a-bootable-volume-9.png){.thumbnail width="800"}
>>
> **Klient OpenStack**
>> Utwórz instancję, określając wolumin bootowalny **volume_ubuntu** jako urządzenie startowe.
>>
>> ```console
>> openstack server create --volume volume_ubuntu --flavor d2-2 --key-name publickey --nic net-id=Ext-Net InstanceTest
>> ```
>>
>> Wyświetl woluminy, aby upewnić się, że stan zmienił się na *in-use* i że wolumin prawidłowo raportuje przyłączenie:
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
>> Wyświetl woluminy przypisane do instancji **InstanceTest**:
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
>> > Możesz również utworzyć instancję, używając wybranego obrazu i żądając zachowania "boot from volume".
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
>> W powyższym poleceniu `b680f0aa-8eb8-4ac8-b008-2a90bb71af4f` jest identyfikatorem obrazu Debiana 12.
>>
>> - Wyświetl woluminy:
>>
>> Wyświetl listę woluminów, aby upewnić się, że stan zmienił się na *in-use* i że wolumin poprawnie zgłasza dołączenie.
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
>> Wyświetl wolumin na serwerze, aby upewnić się, że jest prawidłowo podłączony.
>>
>> ```console
>> $ openstack server volume list InstanceTest2
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> | ID | Device | Server ID | Volume ID | Tag |
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> | d7611318-fd7b-4b6a-8a7a-8d368049f747 | /dev/sda | 5d97c190-f2e3-4af4-a010-6fa7bffbf88b | d7611318-fd7b-4b6a-8a7a-8d368049f747 | None |
>> +--------------------------------------+----------+--------------------------------------+--------------------------------------+------+
>> ```

## Sprawdź również

Przyłącz się do [społeczności użytkowników](/links/community).