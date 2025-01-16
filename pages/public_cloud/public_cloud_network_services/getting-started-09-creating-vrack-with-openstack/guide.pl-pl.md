---
title: 'Konfiguracja usługi vRack Public Cloud przy użyciu OpenStack CLI'
excerpt: 'Dowiedz się, jak aktywować Public Cloud vRack i zarządzać nim przy użyciu OpenStack CLI'
updated: 2025-01-13
---

## Wprowadzenie

Usługa [vRack](/links/network/vrack) to prywatna sieć, która umożliwia klientom kierowanie ruchu między serwerami dedykowanymi OVHcloud i innymi usługami OVHcloud. Umożliwia on również dodawanie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) do sieci prywatnej w celu utworzenia infrastruktury zasobów fizycznych i wirtualnych.

**Ten przewodnik ułatwi Ci konfigurację instancji Public Cloud za pomocą OpenStack CLI**

## Wymagania początkowe

- [projekt Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) na koncie OVHcloud
- dostęp do [Panelu klienta OVHcloud](/links/manager)
- [użytkownika OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (opcjonalnie)
- podstawowa wiedza w zakresie sieci komputerowych

Zanim zaczniesz, zapoznaj się z tymi przewodnikami, aby poprawnie skonfigurować środowisko OpenStack:

- [Przygotowanie środowiska do korzystania z API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).
- [Zmienne środowiskowe OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables).

## W praktyce

### Prezentacja zawartości

- [Etap 1: Aktywacja i zarządzanie usługą vRack](#activating-vrack)
    - [W Panelu klienta OVHcloud](#control-panel)
    - [Za pomocą APIv6 OVHcloud](#ovhcloud-api)
- [Etap 2: Tworzenie sieci prywatnej w ramach usługi vRack](#private-network)
- [Etap 3: Integracja instancji z usługą vRack](#instance-vrack)
    - [W przypadku nowej instancji](#new-instance)
    - [W przypadku istniejącej instancji](#existing-instance)
- [Usuwanie prywatnego interfejsu](#detach-interface)


<a name="activating-vrack"></a>

### Etap 1: Aktywacja i zarządzanie usługą vRack

> [!warning]
> Usługą vRack zarządzamy na poziomie infrastruktury OVHcloud. Oznacza to, że administrowanie usługą odbywa się wyłącznie w Panelu klienta i przez APIv6.
>


<a name="control-panel"></a>

#### W Panelu klienta OVHcloud

> [!primary]
> Nie dotyczy to nowo utworzonych projektów, które są teraz automatycznie dostarczane z siecią vRack. Aby wyświetlić sieć vRack po utworzeniu projektu, przejdź do menu `Bare Metal Cloud`{.action} i kliknij `Network`{.action} w zakładce po lewej stronie. Kliknij opcję `Prywatna sieć vRack`{.action}, aby wyświetlić sieć(e) vRack(s).
>

Jeśli posiadasz starszy projekt, ale nie posiadasz usługi vRack, musisz zamówić usługę. Ten produkt jest bezpłatny, a jego udostępnienie zajmuje tylko kilka minut.

Przejdź do menu `Bare Metal Cloud`{.action} i kliknij przycisk `Zamów`{.action}. Z tego menu wybierz opcję `vRack`{.action}.

![Zamów opcję vrack](images/ordering_vrack_2024.png){.thumbnail}

Zostaniesz przekierowany na inną stronę, aby zatwierdzić zamówienie. Operacja potrwa kilka minut.

Po uaktywnieniu usługi odnajdziesz ją w Panelu klienta w sekcji `Bare Metal Cloud`{.action} > `Network`{.action} > `Prywatna sieć vRack`{.action}. Pod nazwą "pn-xxxxxx".

Na liście dostępnych usług zaznacz projekt, który chcesz dodać do szafy vRack i kliknij na przycisk `Dodaj`{.action}.

![Dodaj projekt](images/addprojectvrack.png){.thumbnail}

<a name="ovhcloud-api"></a>

#### Za pomocą APIv6 OVHcloud

Aby włączyć i zarządzać usługą vRack za pomocą interfejsu APIv6 OVHcloud, zapoznaj się z [tą częścią](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), odpowiedniego przewodnika.

<a name="private-network"></a>

### Etap 2: Tworzenie sieci prywatnej w ramach usługi vRack

Należy utworzyć prywatną sieć z lokalną siecią wirtualną (VLAN), aby instancje podłączone do sieci vRack mogły komunikować się między sobą.

Dzięki usłudze Public Cloud możesz utworzyć aż do 4 000 sieci VLAN w ramach jednej usługi vRack. Dzięki temu każdy prywatny adres IP może być wykorzystany maksymalnie 4 000 razy.
Na przykład adres 192.168.0.10 sieci VLAN 2 różni się od adresu IP 192.168.0.10 sieci VLAN 42.
Rozwiązanie to może być przydatne do segmentacji usługi vRack na kilka wirtualnych sieci.

Aby utworzyć tę samą prywatną sieć, musimy utworzyć 2 obiektów OpenStack: network and subnet (sieć i podsieć).

W poniższym przykładzie określamy `VLAN_ID`, do którego chcemy, aby sieć była częścią poprzez `--provider-network-type` i `--provider-segment`.

Możesz usunąć te parametry. W tym przypadku należy użyć dostępnego `VLAN_ID`.

```bash 
openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.0.0.0/16
```

<a name="instance-vrack"></a>

### Etap 3: Integracja instancji z usługą vRack

Możliwe są dwa scenariusze:

- Instancja, która ma zostać zintegrowana, jeszcze nie istnieje.
- Istniejąca instancja musi zostać dodana do sieci vRack.

<a name="new-instance"></a>

#### W przypadku nowej instancji

**Pobieranie wymaganych informacji**

Sieci publiczne i prywatne:

```bash
openstack network list

+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
```

lub

```bash
nova net-list

+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Zapoznaj się z interesującymi Cię identyfikatorami sieci:
><br> - Ext-Net dla publicznego adresu IP
><br> - VLAN(s) niezbędny(e) do Twojej konfiguracji
>

Należy również zwrócić uwagę na następujące informacje, jak wskazano w [Podręcznik użytkownika API Nova](/pages/public_cloud/compute/starting_with_nova):

- Identyfikator lub nazwa klucza SSH OpenStack
- Identyfikator typu instancji (flavor)
- ID obrazu (system operacyjny, snapshot, itp).

**Uruchomienie instancji**

Przy użyciu uprzednio pobranych elementów można utworzyć instancję, w tym bezpośrednio w sieci vRack:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Przykład:

```bash
nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

lub

```bash
openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
```

Przykład:

```bash
openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance

+--------------------------------------+------------------------------------------------------+
| Property                             | Value                                                |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig                    | MANUAL                                               |
| OS-EXT-AZ:availability_zone          |                                                      |
| OS-EXT-STS:power_state               | 0                                                    |
| OS-EXT-STS:task_state                | scheduling                                           |
| OS-EXT-STS:vm_state                  | building                                             |
| OS-SRV-USG:launched_at               | -                                                    |
| OS-SRV-USG:terminated_at             | -                                                    |
| accessIPv4                           |                                                      |
| accessIPv6                           |                                                      |
| adminPass                            | xxxxxxxxxxxx                                         |
| config_drive                         |                                                      |
| created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
| hostId                               |                                                      |
| id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
| image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
| key_name                             | [Name of key]                                        |
| metadata                             | {}                                                   |
| name                                 | [Name of instance]                                   |
| os-extended-volumes:volumes_attached | []                                                   |
| progress                             | 0                                                    |
| security_groups                      | default                                              |
| status                               | BUILD                                                |
| tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
| updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
| user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
+--------------------------------------+------------------------------------------------------+
```

Adres IP instancji vRack możesz ustawić na poziomie OpenStack.

W tym celu możesz dodać jeden argument do funkcji "--nic":

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Przykład:

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

**Weryfikacja instancji**

Po chwili możesz sprawdzić listę istniejących instancji, aby odnaleźć utworzony serwer:

```bash
openstack server list
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| ID                                   |       Name          | Status | Networks                                         |     Image Name     |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Name of instance]  | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  | [Name-of-instance] |
+--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
```

```bash
nova list
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| ID                                   | Name               | Status | Task State | Power State | Networks                                         |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
| xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Name of instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  |
+--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
```

<a name="existing-instance"></a>

#### W przypadku istniejącej instancji

**Pobieranie wymaganych informacji**

Zidentyfikuj swoje instancje:

```bash
openstack server list

+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| ID                                   | Name         | Status | Networks                                                               | Image Name |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
+--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
```

lub

```bash
nova list

+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
+--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
```

Sieci publiczne i prywatne:

```bash
openstack network list

+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

lub

```bash
nova net-list

+--------------------------------------+------------+------+
| ID                                   | Label      | CIDR |
+--------------------------------------+------------+------+
| 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | None |
+--------------------------------------+------------+------+
```

> [!primary]
> Zapoznaj się z interesującymi Cię identyfikatorami sieci:
><br> - Ext-Net dla publicznego adresu IP
><br> - VLAN(s) niezbędny(e) do Twojej konfiguracji
>

**Dodawanie prywatnego interfejsu**

Aby dołączyć nowy interfejs, wykonaj następujące polecenie:

```bash
nova interface-attach --net-id <ID-VLAN> <ID-instance>
```

Przykład:

```bash
nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
```

Możesz sprawdzić, czy operacja została wykonana:

```bash
nova show <ID-instance>

+--------------------------------------+----------------------------------------------------------+
| Property                             | Value                                                    |
+--------------------------------------+----------------------------------------------------------+
| Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    |  => twoje publiczne IP
| MyVLAN-42 network                    | 192.168.0.x                                              | => twoje prywatne IP
[...]
nova show <wystąpienie identyfikatora>
```

lub

```bash
openstack server show <ID-instance>
+--------------------------------------+-------------------------------------------------------------------------+
| Field                                | Value                                                                   |
+--------------------------------------+-------------------------------------------------------------------------+
[...]
| addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MyVLAN-42=192.168.0.x   | => publiczny adres IP; prywatne adres IP                                                                   
[...]
```

<a name="detach-interface"></a>

### Usuwanie prywatnego interfejsu

> [!warning]
> Usunięcie interfejsu jest operacją nieodwracalną.
>
> Jeśli usuniesz interfejs "Ext-Net" (publiczny adres IP), adres ten zostanie ponownie udostępniony. Nie można tego po prostu przypisać ponownie.
><br>Czynność ta jest niezbędna, jeśli chcesz odizolować Twój serwer od sieci vRack (interfejs Ext-Net) lub usunąć go z sieci VLAN.
>

Aby odłączyć interfejs, najpierw trzeba zidentyfikować utworzony port Neutron.

Możesz to zrobić za pomocą następujących poleceń:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

lub

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Po zidentyfikowaniu portu, który ma zostać usunięty, wykonaj następujące polecenie:

```bash
nova interface-detach <ID_instance> <port_id>
```

Przykład:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

## Sprawdź również

[Konfiguracja vRack dla Public Cloud przy użyciu interfejsu APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN).

[Serwery dedykowane - Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).