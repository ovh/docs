---
title: Pierwsze kroki z API OpenStack
excerpt: Dowiedz się, jak zarządzać instancjami za pomocą klienta Python OpenStack
slug: pierwsze_kroki_z_api_nova
legacy_guide_number: g1935
section: Zarządzanie w OpenStack CLI
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 03-11-2022**

## Wprowadzenie

Aby móc zautomatyzować operacje dotyczące usługi Public Cloud, można korzystać z API OpenStack do generowania poszczególnych skryptów. 

> [!primary]
>
> Klient Nova był wcześniej używany do zarządzania instancjami i ich dyskami. Klient ten jest teraz zdeprecjowany, a zamówienia zostały zintegrowane z klientem Python OpenStack.
>

Będziesz mógł na przykład uruchomić tworzenie dodatkowych instancji, gdy Twoje narzędzia monitoringu wykryją wzrost obciążenia, aby uniknąć przeciążenia infrastruktury. Możesz również regularnie programować tworzenie snapshotów.

Niniejszy przewodnik pomoże Ci w korzystaniu z API OpenStack w zarządzaniu instancjami za pomocą klienta Python OpenStack.


## Wymagania początkowe

- [Przygotowanie środowiska do korzystania z API OpenStack](../prepare_the_environment_for_using_the_openstack_api/)
- [Zmienne środowiskowe OpenStack](../set-openstack-environment-variables/)


## W praktyce

Możesz uzyskać listę zamówień, które możesz wykonać, czytając dokumentację klienta:

```bash
admin@server-1:~$ openstack command list
```

Możesz filtrować wyświetlane polecenia, wskazując grupę:

```bash
admin@server-1:~$ openstack command list —group compute
```

Możesz również uzyskać informacje dotyczące zamówienia, dodając `help` przed komendą:

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
> Zapoznaj się z dokumentacją klienta bezpośrednio na [stronie OpenStack](https://docs.openstack.org/python-openstackclient/latest/cli/index.html)
> 

### Operacje podstawowe

#### Dodanie publicznego klucza SSH

W pierwszej kolejności należy dodać publiczny klucz SSH, który pozwoli na logowanie sie na instancje. 

- Wyświetl listę poleceń związanych z kluczami SSH:

```bash
admin@server-1:~$ openstack help | grep keypair         
  keypair create  Create new public or private key for server ssh access
  keypair delete  Delete public or private key(s)
  keypair list    List key fingerprints
  keypair show    Display key details
```

- Dodaj publiczny klucz SSH:

```bash
admin@server-1:~$ openstack keypair create --public-key ~/.ssh/id_rsa.pub SSHKEY
```

- Pobierz listę dostępnych kluczy SSH:

```bash
admin@server-1:~$ openstack keypair list
+---------------+-------------------------------------------------+------+
| Name          | Fingerprint                                     | Type |
+---------------+-------------------------------------------------+------+
| SSHKEY        | 5c:fd:9d:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:3a | ssh  |
+---------------+-------------------------------------------------+------+
```

#### Wyświetl listę modeli instancji

Następnie pobierz ID szablonu, którego chcesz użyć:

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

#### Wyświetl listę dostępnych obrazów

Na koniec pobierz ID obrazu, który będzie używany dla instancji:

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

#### Utworzenie instancji

Dzięki pobraniu wcześniej elementów możesz utworzyć instancję:

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

Po kilku minutach możesz sprawdzić listę istniejących instancji, aby znaleźć nowo utworzoną instancję:


```bash
admin@server-1:~$ openstack server list                                                                 
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
| ID                                   | Name         | Status | Networks                            | Image        | Flavor |
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
| xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx | InstanceTest | ACTIVE | Ext-Net=xxxx:xxxx::xxxx, 51.xx.xx.x | Ubuntu 22.04 | d2-2   |
+--------------------------------------+--------------+--------+-------------------------------------+--------------+--------+
```

#### Usunięcie instancji

Instancję można usunąć za pomocą takiego polecenia:

```bash
admin@server-1:~$ openstack server delete InstanceTest
```

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

