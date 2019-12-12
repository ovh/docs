---
title: 'Przeniesienie kopii zapasowej instancji do innego centrum danych'
excerpt: 'Dowiedz się, jak przenieść instancję zachowując jej stan i konfigurację'
slug: przenoszenie_kopii_zapasowych_pomiedzy_centrami_danych
section: 'Z poziomu wiersza poleceń '
---

**Ostatnia aktualizacja z dnia 01-07-2019**

## Wprowadzenie

Możesz przenieść instancję Public Cloud między centrami danych, gdy preferujesz inne centrum lub chcesz zamienić wersję usługi OVH Labs na Public Cloud.

**Dowiedz się, jak przenieść instancję, zachowując jej stan i konfigurację.**


## Wymagania początkowe

* Utworzenie [instancji Public Cloud](https://www.ovh.pl/public-cloud/compute/){.external} na Twoim koncie OVH
* Dostęp administratora (root) do centrum danych przez SSH
* Przeczytanie przewodnika [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/){.external} (zalecane)

> [!primary]
>
Komendy zawarte w tym przewodniku opierają się na CLI OpenStack w odróżnieniu od API `Nova` i `Glance`.
>

## W praktyce

### Tworzenie kopii zapasowej

W pierwszym kroku połącz się przez SSH z Twoim centrum danych. Następnie wprowadź następującą komendę, aby wyświetlić istniejące instancje:

```
3#root@server:~$ openstack server list

+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```


Wprowadź następującą komendę, aby utworzyć kopię zapasową Twojej instancji:

```
openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Pobieranie kopii zapasowej

Wprowadź następującą komendę, aby wyświetlić dostępne instancje:

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

Wyszukaj teraz kopię zapasową na liście:

```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Na koniec, wprowadź następującą komendę, aby pobrać kopię zapasową:

```
#root@server:~$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Przeniesienie kopii zapasowej do innego centrum danych

Aby uruchomić proces przeniesienia kopii zapasowej, najpierw pobierz nowe zmienne środowiskowe.

> [!warning]
>
> Jeśli przenosisz Twoją kopię zapasową do centrum danych w tym samym projekcie, zmień zmienną OS_REGION_NAME.
>

```
#root@server:~$ export OS_REGION_NAME=SBG1
```

Jeśli przenosisz kopię zapasową instancji do innego projektu lub na inne konto, pobierz ponownie zmiennie środowiskowe powiązane z tym kontem, używając następującej komendy:

```
#root@serveur:~$ source openrc.sh
```

Aby przenieść kopię zapasową do innego centrum danych, wprowadź poniższą komendę:

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

### Tworzenie instancji z kopii zapasowej

Użyj ID kopii zapasowej jako obrazu, wprowadzając poniższą komendę:

```
#root@server:~$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Sprawdź również

[Przeniesienie kopii zapasowej wolumenu do innego centrum danych](../transfer_volume_backup_from_one_datacentre_to_another/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.


