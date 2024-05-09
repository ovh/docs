---
title: "Przenoszenie kopii zapasowej wolumenu z jednego regionu OpenStack do innego"
excerpt: "Dowiedz się, jak przenieść kopię zapasową wolumenu z jednego regionu OpenStack do innego"
updated: 2024-01-11
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Może zaistnieć potrzeba przeniesienia dodatkowych wolumenów z jednego regionu OpenStack do innego, ponieważ jest dostępny nowy region lub chcesz przenieść z [OVHcloud Labs](https://labs.ovh.com/){.external} do [Public Cloud](https://www.ovh.com/pl/public-cloud){.external}.

**Dowiedz się, jak przenieść kopię zapasową wolumenu z jednego regionu OpenStack do innego.**

## Wymagania

Do przeniesienia będziesz potrzebował środowiska z:

- CLI OpenStack. Zapoznaj się z przewodnikiem "[Jak przygotować środowisko do korzystania z API OpenStack](prepare_the_environment_for_using_the_openstack_api1.)".
- Łączność z API OVHcloud OpenStack.
- Dostępnego miejsca do magazynowania odpowiadającego rozmiarowi dysku woluminu (dla tymczasowego magazynu kopii zapasowych).

Środowisko to będzie używane jako "jump host" do przenoszenia kopii zapasowej z jednego regionu do innego. Środowisko to może być instancją hostowaną w OVHcloud lub na Twojej maszynie lokalnej.

## W praktyce

### Utwórz kopię zapasową

```sh
$ openstack volume list
+--------------------------------------+--------------+--------+------+----------------------------------+
| ID                                   | Display Name | Status | Size | Attached to                      |
+--------------------------------------+--------------+--------+------+----------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume       | in-use |   10 | Attached to Server 1 on /dev/sdb |
+--------------------------------------+--------------+--------+------+----------------------------------+
```

Jeśli wolumin jest podłączony do instancji, przed utworzeniem kopii zapasowej należy go odłączyć.

Użyj poniższego polecenia, aby pobrać ID instancji:

```sh
$ openstack server list
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
| ID                                   | Name      | Status | Networks                                       | Image    | Flavor |
+--------------------------------------+-----------+--------+--------------------------------------------------------------------+
| a8b6b51-4413-4d1a-8113-9597d804b07e  | Server 1  | ACTIVE | Ext-Net=155.55.55.155, 2607:5300:23x:5000::8d5 | Centos 7 | b2-7   |
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
```

Następnie wprowadź poniższą komendę, aby odmontować wolumin z jego instancji:

```sh 
$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Teraz utwórz obrazkową kopię zapasową, używając następującego polecenia:

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

### Pobierz kopię zapasową

Aby wyświetlić dostępne obrazy, wprowadź następującą komendę:

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

Wyszukaj następnie kopię zapasową na liście:

```sh
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
| ID                                   | Name        | disk_format |container_format|           | Status |
+--------------------------------------+---------------------------+----------------+-----------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2       | bare           | 319356928 | active |
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
```

Następnie wprowadź następującą komendę, aby pobrać kopię zapasową:

```sh 
$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Przeniesienie kopii zapasowej do innego regionu Openstack

Aby rozpocząć proces transferu, należy najpierw załadować nowe zmienne środowiskowe.

> [!warning]
>
Jeśli przenosisz Twoją kopię zapasową do regionu Openstack w tym samym projekcie, zmień zmienną OS_REGION_NAME.
>

```sh 
$ export OS_REGION_NAME=SBG1
```

Jeśli przenosisz kopię zapasową instancji do innego projektu lub na inne konto, pobierz ponownie zmienne środowiskowe powiązane z tym kontem, używając następującej komendy:

```sh
$ source openrc.sh
```

Aby przenieść kopię zapasową do nowego regionu Openstack, użyj poniższego polecenia:

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

### Utwórz wolumen z kopii zapasowej

Użyj identyfikatora kopii zapasowej jako obrazu za pomocą następującego polecenia:

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

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.