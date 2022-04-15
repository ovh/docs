---
title: Pierwsze kroki z zarządzaniem wolumenami w API Openstack
slug: pierwsze-wolumeny-api-openstack
legacy_guide_number: 2071
section: Zarządzanie w OpenStack CLI
order: 6
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 19-05-2021**

## Wprowadzenie

Aby zautomatyzować Twoje operacje w infrastrukturze Public Cloud, możesz użyć interfejsu API OpenStack do tworzenia różnych skryptów.
<br>Możesz na przykład utworzyć nowy wolumen typu "wysoka wydajność" i przypisać go do instancji Public Cloud.

**Niniejszy przewodnik pomoże Ci w korzystaniu z API OpenStack w zarządzaniu wolumenami za pomocą klienta Python OpenStack.**

## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](../przygotowanie_srodowiska_dla_api_openstack/) poprzez instalację Python-cinderclient oraz python-novaclient
- [Pobranie zmiennych środowiskowych OpenStack](../zmienne-srodowiskowe-openstack/)

## W praktyce

### Dokumentacja Cinder

Możesz otrzymać listę możliwych zamówień, czytając dokumentację klienta OpenStack:

```bash
admin@server-1:~$ openstack help
```

Oto lista głównych zamówień:

|Zamówienie|Opis|
|---|---|
|wolumen create|Stwórz nowy wolumen|
|objętość|Usuń wolumen|
|wolumen|Lista wolumenów|
|wolumen snapshot create|Stwórz snapshot wolumenu|

Możesz również uzyskać informacje dotyczące konkretnego zamówienia, dodając `help` przed nim:

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
> Możesz również zapoznać się z dokumentacją klienta Openstack bezpośrednio na [stronie OpenStack](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Operacje podstawowe

#### Utwórz wolumen o wysokiej wydajności

- Wyświetl rodzaje wolumenów:

```bash
admin@server-1:~$ openstack volume type list
+--------------------------------------+------------+-----------+
| ID                                   | Name       | Is Public |
+--------------------------------------+------------+-----------+
| e9551830-6362-4bf8-92e5-391829456b03 | classic    | True      |
| 6fc8e512-3cac-4f39-b9a8-af098d710506 | high-speed | True      |
+--------------------------------------+------------+-----------+
```

- Utwórz wolumen typu high-speed 10GB o nazwie Volume1:

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

Możesz zainstalować obraz na woluminie za pomocą argumentu `--image`:

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

Gdzie **be66762f-b849-43e1-b57c-005d9fe2808** odpowiada ID obrazu Debiana 10.

#### Przypisz wolumen do instancji

- Wyświetl dodatkowe wolumeny:

```bash
admin@serveur-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-------------+
| ID                                   | Name          | Status    | Size | Attached to |
+--------------------------------------+---------------+-----------+------+-------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |             |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | available |   10 |             |
+--------------------------------------+---------------+-----------+------+-------------+
```

> [!primary]
>
> Większość poniższych poleceń wymaga podania identyfikatora wolumenu zamiast jego nazwy.
>

- Montowanie wolumenu na instancji z klientem Openstack:

```bash
admin@serveur-1:~$ openstack server add volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Sprawdź, czy wolumen do instancji jest prawidłowo przypisany do klienta OpenStack:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| ID                                   | Name          | Status    | Size | Attached to                             |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |                                         |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | in-use    |   10 | Attached to cli-playground on /dev/sdb  |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
```

#### Usuwanie wolumenu

- Odłącz wolumen od instancji:

```bash
admin@server-1:~$ openstack server remove volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Usuń wolumen:

```bash
admin@server-1:~$ openstack volume delete f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
