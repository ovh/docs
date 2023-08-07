---
title: "Współdzielenie obrazów między projektami Public Cloud"
excerpt: "Dowiedz się, jak współdzielić obrazy między projektami Public Cloud za pomocą OpenStack"
updated: 2023-08-07
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Czasami może być konieczne współdzielenie obrazu [Instance Backup](/pages/platform/public-cloud/save_an_instance) lub obrazu [Volume Backup](/pages/platform/public-cloud/volume-backup) między kilkoma projektami Public Cloud.

Dzięki technologii OpenStack możesz współdzielić obrazy między kilkoma projektami, nawet jeśli nie należą one do tego samego konta.
Funkcjonalność ta oferuje wiele możliwości, ale wiąże się również z pewnym ryzykiem. Ważne jest zatem poznanie ich zasad.

Na przykład, jeśli chcesz udostępnić obraz z projektu A dla projektu B (na tym samym lub innym koncie), obowiązują następujące reguły:

- Obraz pozostaje fizycznie przypisany do projektu A. Projekt B ma tylko "uprawnienie dostępu" do tego obrazu.
- Jeśli Projekt A usunie dostęp do obrazu (usunie ACL, usunie obraz, usunie projekt z niezapłaconych faktur itp.), instancje uruchomione z tego obrazu w projekcie B mogą przestać działać z powodu problemów z migracją lub rekonstrukcją.

Dlatego ważne jest, aby pamiętać o tym przed rozpoczęciem konfiguracji.
Więcej informacji znajdziesz w oficjalnej [dokumentacji OpenStack](https://docs.openstack.org/image-guide/share-images.html){.external}.

**Z tego przewodnika dowiesz się, jak współdzielić obrazy między jednym lub kilkoma projektami przy jednoczesnym zachowaniu konfiguracji i statusu obrazu.**

## Wymagania początkowe

Przed wykonaniem tych kroków, należy najpierw zapoznać się z treścią przewodnika:

- [Przygotowanie środowiska dla API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)

Będziesz również potrzebował:

- Posiadanie [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na koncie OVHcloud;
- [Utworzenie użytkownika OpenStack](/pages/platform/public-cloud/create_and_delete_a_user)

> [!primary]
>
> Niniejszy przewodnik odnosi się do korzystania z [klienta wiersza poleceń OpenStack](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

## W praktyce

### Udostępnij obraz

Najpierw wprowadź następującą komendę, aby wyświetlić istniejące obrazy:

```bash
$ openstack image list --private
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```

> [!warning]
> 
> Aby obraz był udostępniany, najpierw należy ustawić go jako współdzieloną widoczność (*shared visibility*).
>

```bash
$ openstack image set --shared <Image_UUID>
```

### Dodaj projekt do obrazu

Następnym krokiem jest dodanie identyfikatora UUID innego projektu jako elementu członkowskiego obrazu. W poniższym przykładzie dodajemy UUID dla « Projektu B ».

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

Następnie sprawdź wniosek dotyczący projektu B:


```bash
$ openstack image member list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```


Jeśli zlecenie udostępnienia jest w statusie `pending`, musisz je zaakceptować:

```bash
$ openstack image set --accept 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | eff99684d8294dbe8c2d4dd7407073f1 | accepted |
+--------------------------------------+----------------------------------+----------+
```

Po zaakceptowaniu żądania udostępniania upewnij się, że widzisz obrazek i masz do niego dostęp:

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

### Sprawdzanie członków obrazu

```bash
$ openstack image member list 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                      | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                      | accepted |
+--------------------------------------+----------------------------------+----------+
```

### Usuń członka z obrazu lub anuluj udostępnianie obrazu

```bash
$ openstack image remove project <image> <UUID_Project_To_Delete>
```

## Sprawdź również

[Przeniesienie kopii zapasowej instancji do innego centrum danych](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.