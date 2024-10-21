---
title: 'Konfiguracja vRack dla Public Cloud'
excerpt: 'Dowiedz się, jak skonfigurować usługę vRack dla instancji Public Cloud'
updated: 2023-03-03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Usługa [vRack](https://www.ovh.pl/rozwiazania/vrack/) to prywatna sieć, która umożliwia klientom kierowanie ruchu między serwerami dedykowanymi OVHcloud i innymi usługami OVHcloud. Umożliwia on również dodawanie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) do sieci prywatnej w celu utworzenia infrastruktury zasobów fizycznych i wirtualnych.

**Dowiedz się, jak skonfigurować instancje Public Cloud w ramach sieci vRack.**

## Wymagania początkowe

- [projekt Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) na koncie OVHcloud
- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- [użytkownika OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (opcjonalnie)
- podstawowa wiedza w zakresie sieci komputerowych

## Interfejsy

Tworzenie sieci vRack lub dodawanie instancji do sieci odbywa się przy użyciu Panelu klienta, APIv6 OVHcloud, API OpenStack, interfejsu Horizon lub Terraform.

W zależności od profilu technicznego i Twoich potrzeb, do Ciebie należy wybór interfejsu lub metody. Poniższe instrukcje opisują niezbędne etapy dla każdej opcji.

**W pierwszym kroku poniżej zamieszczono krótki opis możliwych operacji zgodnie z wybraną metodą/interfejsem.**

### Panel klienta OVHcloud

[Panel klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) jest w pełni wizualnym interfejsem idealnie nadającym się do zarządzania tylko jedną siecią VLAN. Zakres prywatnych adresów IP nie będzie spersonalizowany. Będzie on dostępny w formacie 10.x.x.x/16.

Sieć VLAN zostanie wdrożona domyślnie we wszystkich strefach. Będziesz mógł włączyć bramy lub nie.

Płatności za usługi możesz również zarządzać w Panelu klienta.

### Interfejs Horizon

Interfejs [Horizon](https://horizon.cloud.ovh.net/auth/login/) (niezależny od OVHcloud) jest oryginalną implementacją dashboardu OpenStack, który udostępnia interfejs użytkownika www dla usług OpenStack, w tym Nova, Swift, Keystone, itp.

Ten wielofunkcyjny interfejs techniczny pozwala na zarządzanie prawie wszystkimi operacjami OpenStack. Jest to jeden z niezbędnych interfejsów, jeśli potrzebujesz zarządzać więcej niż dwoma sieciami VLAN, dodawać prywatne interfejsy sieciowe do instancji, zarządzać obrazami dostosowanymi do Twoich potrzeb, itp.

Zapoznaj się z następującą [instrukcją](/pages/public_cloud/compute/introducing_horizon), aby zapoznać się z Horizon.

> [!primary]
> Horizon działa w danej strefie. Dlatego też należy pamiętać o wyborze logicznej (geograficznej) strefy roboczej w lewym górnym rogu interfejsu (GRA5, SBG3, BHS1 itd.).
>

### APIv6 OVHcloud

Każde działanie podejmowane w Panelu klienta OVHcloud można wywołać za pomocą interfejsu [APIv6 OVHcloud](https://api.ovh.com/). Oferuje on nawet więcej możliwości niż interfejs graficzny.

Interfejs API jest mniej wizualny niż Panel klienta OVHcloud, ale pozwala na wykonanie dużej liczby operacji. Możesz zarządzać i dostosowywać VLAN, dodawać interfejsy do instancji lub tworzyć wysoko spersonalizowane serwery.

Możesz po prostu uzyskać do niej dostęp z [naszej strony internetowej](https://api.ovh.com/), ale również wykorzystać go do tworzenia skryptów PHP lub Python. Dzięki temu możesz swobodnie automatyzować podstawowe zadania za pomocą skryptów, zoptymalizować własne funkcje i wiele więcej.

Przed użyciem niektórych wywołań API może być konieczne pobranie różnych informacji, ponieważ wymagane jest wprowadzenie określonych danych.

Zobacz przewodnik [Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps), aby rozpocząć korzystanie z interfejsu APIv6 OVHcloud.

### API OpenStack

Usługami Public Cloud można zarządzać za pomocą wierszy poleceń Linux lub Windows po pobraniu i zainstalowaniu narzędzi OpenStack.

Aby skorzystać z tej możliwości, konieczna jest odpowiednia wiedza z zakresu systemu Linux lub Windows. Korzystaj jednak z całej mocy OpenStack.

W zależności od warstwy, którą chcesz zarządzać, użyj klienta **Nova** (Compute), **Neutron** (sieć), **Glance** (obraz) lub **Swift** (object storage). Najnowszy dodatek do tego asortymentu, klient OpenStack, umożliwia bezpośrednie zarządzanie prawie wszystkimi warstwami OpenStack.

Dzięki API OpenStack możesz również w prosty sposób zautomatyzować zarządzanie usługami za pomocą skryptów.

Aby uzyskać więcej informacji na temat korzystania z API OpenStack, zapoznaj się z następującymi przewodnikami:

- [Przygotowanie środowiska do korzystania z API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Zmienne środowiskowe OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

Następnie, w razie potrzeby, będziesz mógł korzystać z API dedykowanych dla OpenStack:

- Nova (compute)
- Glance (obraz)
- Cinder (obraz)
- Neutron (sieć)

> [!primary]
> W niektórych przypadkach korzystanie z interfejsów API OpenStack będzie łatwiejsze, a w innych łatwiejsze, Nova, Neutron, itp.
>
> Ponadto w API OpenStack może brakować niektórych funkcji w zależności od wersji klienta i systemu operacyjnego.
Niniejszy przewodnik prezentuje najprostsze i najbardziej intuicyjne opcje.
Możesz zapoznać się z [oficjalną dokumentacją OpenStack](https://docs.openstack.org/){.external}, jeśli chcesz dowiedzieć się więcej o jej używaniu.
>

### Terraform

Terraform umożliwia również zarządzanie infrastrukturą OVHcloud.

W tym celu należy wybrać właściwego dostawcę terraform i zasobów. Więcej informacji zawiera przewodnik [używanie Terraform z OVHcloud (EN)](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

## W praktyce

### Etap 1: Aktywacja i zarządzanie usługą vRack <a name="activation"></a>

Usługa vRack jest darmowa. Może zostać dostarczona w ciągu kilku minut. Aby utworzyć usługę vRack, należy najpierw wygenerować i zatwierdzić formularz zamówienia.

Po aktywacji usługi jest ona dostępna w Panelu klienta w sekcji `Bare Metal Cloud`{.action} "pn-xxxxxx".

#### W Panelu klienta OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud.

![wybór projektu](images/vrack2021-05.png){.thumbnail}

Kliknij pozycję `Private Network`{.action} na lewym pasku nawigacyjnym.

![Prywatne sieci](images/vrack2021-02.png){.thumbnail}

Kliknij na przycisk. `W pierwszym kroku utwórz vRack.`{.action}. W kolejnym kroku możesz utworzyć nowy vRack lub skorzystać z już istniejącego. W poniższym przykładzie przedstawiamy nową usługę vRack. Po dokonaniu wyboru, kliknij przycisk `Utwórz`{.action}.

![Utworzenie vRack](images/vrack3.png){.thumbnail}

Aby kontynuować konfigurację vRack, przejdź do sekcji [Tworzenie sieci VLAN w Panelu klienta](./#tworzenie-sieci-vlan-w-panelu-klienta-ovhcloud) niniejszego przewodnika.

#### Za pomocą APIv6 OVHcloud

Aby włączyć i zarządzać usługą vRack za pomocą interfejsu APIv6 OVHcloud, zapoznaj się z [tą częścią](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), odpowiedniego przewodnika.

### Etap 2: Tworzenie sieci prywatnej w ramach usługi vRack

Konieczne jest utworzenie sieci prywatnej, aby podłączone instancje mogły komunikować się między sobą.

Dzięki usłudze Public Cloud możesz utworzyć aż do 4 000 sieci VLAN w ramach jednej usługi vRack. Dzięki temu każdy prywatny adres IP może być wykorzystany maksymalnie 4 000 razy.
Na przykład adres 192.168.0.10 sieci VLAN 2 różni się od adresu IP 192.168.0.10 sieci VLAN 42.
Rozwiązanie to może być przydatne do segmentacji usługi vRack na kilka wirtualnych sieci.

W Panelu klienta OVHcloud możesz przypisać wybraną sieć VLAN, ale nie możesz spersonalizować zakresu adresów IP. Usługa vRack zostanie włączona we wszystkich strefach.

Za pomocą interfejsu APIv6 OVHcloud możesz spersonalizować wszystkie parametry: zakres adresów IP (np. 10.0.0.0/16), strefa wdrażania, DHCP, brama itd.

> [!primary]
> Na serwerach dedykowanych używasz domyślnie sieci VLAN 0. Infrastruktura OpenStack wymaga podania identyfikatora VLAN bezpośrednio na poziomie infrastruktury.
>
> W przeciwieństwie do serwerów dedykowanych nie trzeba oznaczać sieci VLAN bezpośrednio na instancji Public Cloud.
>
> Więcej informacji na ten temat zawiera przewodnik [Tworzenie kilku sieci VLAN w prywatnej sieci vRack.](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

> [!warning]
> Usługą vRack zarządzamy na poziomie infrastruktury OVHcloud. Oznacza to, że administrowanie usługą odbywa się wyłącznie w Panelu klienta i przez APIv6.
>
> Ponieważ usługa OpenStack nie jest zlokalizowana na tym samym poziomie, nie będzie możliwe personalizacja sieci VLAN za pośrednictwem interfejsu Horizon ani przez API OpenStack.
>

#### Tworzenie sieci prywatnej w Panelu klienta OVHcloud

Po utworzeniu sieci vRack przejdź do sekcji `Private Network`{.action}. 

![Tworzenie sieci VLAN](images/vrack2022-03.png){.thumbnail}

Kliknij przycisk `Utwórz prywatną sieć`{.action}. Na następnej stronie można dostosować wiele ustawień.

W etapie 1 wybierz region, w którym chcesz utworzyć prywatną sieć.

![select region](images/vrack5-2022.png){.thumbnail}

Na następnym etapie otrzymasz kilka opcji:

![tworzenie network](images/vrack6-2022.png){.thumbnail}

**Utwórz Gateway i połącz się z prywatną siecią**

Wybierz tę opcję, jeśli chcesz utworzyć instancje wyłącznie z siecią prywatną. Więcej informacji znajdziesz w przewodnikach: [Creating a private network with Gateway (EN)](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) i [Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps#krok-3-tworzenie-instancji).

> [!warning]
> Jeśli opcja jest szara, oznacza to, że jest niezgodna z wybranym regionem. Więcej informacji znajduje się na stronie internetowej [dostępność produktów Public Cloud dla każdego regionu](https://www.ovhcloud.com/pl/public-cloud/regions-availability/).
>

**Opcje sieciowe warstwy 2**

Jeśli zostanie wybrana opcja `Wybierz ID sieci VLAN` sieci VLAN, trzeba będzie wybrać numer VLAN ID z zakresu od 2 do 4 000.

Jeśli nie zaznaczysz tej kratki, system przydzieli losowy numer VLAN.

Jeśli chcesz ustawić numer VLAN na 0, musisz przejść przez [API OVHcloud](#vlansetup).

Pamiętaj, że jeśli posiadasz istniejącą sieć prywatną z VLAN ID 0, opcja ta będzie domyślnie zaznaczona i szara.

Jeśli potrzebujesz komunikacji z serwerami dedykowanymi w tej sieci VLAN, zapoznaj się z przewodnikiem [Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

**Opcje dystrybucji adresów DHCP**

Domyślny zakres DHCP to 10.0.0.0/16. Aby zmienić ten zakres IP, przeprowadź konfigurację za pośrednictwem interfejsu APIv6 OVHcloud.

Po dokonaniu wyboru kliknij `Utwórz`{.action}, aby rozpocząć proces.

> [!primary]
> Utworzenie prywatnej sieci może zająć kilka minut.
>

#### Tworzenie sieci prywatnej za pomocą interfejsu APIv6 OVHcloud <a name="vlansetup"></a>

Aby utworzyć sieć VLAN przy użyciu interfejsu APIv6 OVHcloud, zapoznaj się z [tą sekcją](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-3-creating-a-vlan-in-the-vrack) (EN), odpowiedniego przewodnika.

#### Tworzenie prywatnej sieci za pomocą interfejsu CLI OpenStack

Aby utworzyć tę samą prywatną sieć, musimy utworzyć 2 obiektów OpenStack: network and subnet (sieć i podsieć).

W poniższym przykładzie określamy `VLAN_ID`, do którego chcemy, aby sieć była częścią poprzez `--provider-network-type` i `--provider-segment`.

Możesz usunąć te parametry. W tym przypadku należy użyć dostępnego `VLAN_ID`.

```bash 
openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.0.0.0/16
```

### Tworzenie prywatnej sieci przy użyciu Terraform

Należy skorzystać z usług dostawcy openstack. Przykład kompletnego skryptu terraform możesz pobrać w [to repozytorium](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).

Specyficzną częścią procesu integracji rozwiązania vRack jest parametr `value_specs`.

```python
resource "openstack_networking_network_v2" "tf_network" {
  name = "tf_network"
  admin_state_up = "true"
  value_specs = {
    "provider:network_type" = "vrack"
    "provider:segmentation_id" = var.vlan_id
  }
}
resource "openstack_networking_subnet_v2" "tf_subnet"{
  name = "tf_subnet"
  network_id = openstack_networking_network_v2.tf_network.id
  cidr = "10.0.0.0/16"
  enable_dhcp = true
}
```

### Etap 3: Integracja instancji z usługą vRack

Możliwe są dwa scenariusze:

- Instancja, która ma zostać zintegrowana, jeszcze nie istnieje.
- Istniejąca instancja musi zostać dodana do sieci vRack.

#### W przypadku nowej instancji

##### **W Panelu klienta OVHcloud**

Jeśli potrzebujesz pomocy, zapoznaj się z tym przewodnikiem: [Tworzenie instancji](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) Podczas tworzenia instancji w etapie 5 możesz wybrać tryb sieci, a następnie prywatną sieć, do której chcesz zintegrować instancję.

![przypisz nową instancję](images/network-selection.png){.thumbnail}

> [!warning]
> W Panelu klienta OVHcloud będzie można podłączyć instancję **tylko do jednej** sieci vRack.
> Aby dodać kilka interfejsów, przejdź przez API OpenStack lub Horizon.
>

##### **Za pomocą APIv6 OVHcloud**

Przejdź do [tej sekcji](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-4-integrating-an-instance-into-the-vrack) (EN), odpowiedniego przewodnika.

##### **Za pomocą API OpenStack**

Jeśli jeszcze tego nie zrobiłeś, to aby użyć API OpenStack, zastanów się nad przygotowaniem środowiska pracy zgodnie z [pierwszą częścią tego przewodnika](./#api-openstack).

Aby utworzyć instancję bezpośrednio w sieci vRack, należy wykonać następujące czynności.

###### Pobieranie wymaganych informacji

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

###### Uruchomienie instancji

Przy użyciu uprzednio pobranych elementów można utworzyć instancję, w tym bezpośrednio w sieci vRack:

```bash
nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]

Przykład:
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

Przykład:
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

W tym celu możesz dodać jeden argument do funkcji "—nic":

`--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`

Przykład:

`--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`

###### Weryfikacja instancji

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

#### W przypadku istniejącej instancji

Panel klienta OVHcloud umożliwia przypisanie instancji do jednej lub kilku prywatnych sieci, ale nie oferuje zaawansowanej konfiguracji interfejsu sieciowego. Aby jeszcze bardziej spersonalizować infrastrukturę, należy zarządzać nią za pośrednictwem interfejsu APIv6 OVHcloud, API OpenStack lub Horizon.

Operacja, którą należy przeprowadzić, polega na dodaniu do Twojego serwera nowego interfejsu sieciowego, obok interfejsu już istniejącego.

Na przykład, jeśli masz interfejs publiczny *eth0*, dodasz interfejs *eth1*.

> [!warning]
> Konfiguracja nowego interfejsu rzadko przebiega automatycznie.
> W tym celu ustaw statyczny adres IP lub skonfiguruj usługę DHCP, w zależności od infrastruktury.
>

##### **W Panelu klienta OVHcloud** 

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud.

Kliknij pozycję `Instances`{.action} na lewym pasku nawigacyjnym, a następnie kliknij pozycję `...`{.action} z prawej strony instancji. Wybierz opcję `Informacje o instancji`{.action} wystąpienia.

![wystąpienie szczegółowe](images/vrack2021.png){.thumbnail}

Spowoduje to otwarcie pulpitu nawigacyjnego instancji. Kliknij przycisk `...`{.action} po prawej stronie "Prywatne sieci", a następnie na `Przypisz sieć`{.action}.

![przypisz sieć](images/vrack2021-01.png){.thumbnail}

W wyświetlonym oknie wybierz sieci prywatne, które chcesz połączyć z instancją, a następnie kliknij przycisk `Przypisz`{.action}.

![przypisz sieć](images/vrack9.png){.thumbnail}

##### **Zarządzanie interfejsami sieciowymi za pomocą interfejsu APIv6 OVHcloud**

Przejdź do [tej sekcji](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#in-case-of-an-existing-instance) (EN), odpowiedniego przewodnika.

##### **Zarządzanie interfejsami sieciowymi za pomocą OpenStack Horizon**

Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}, przy użyciu metody określonej w [pierwszej części niniejszego przewodnika](./#interfejs-horizon).

Wybierz właściwą strefę roboczą.

![connection Horizon](images/horizon1.png){.thumbnail}

Wybierz polecenie `Compute`, a następnie polecenie `Instances`.

![Instancje obliczeniowe Horizon](images/horizon2.png){.thumbnail}

###### Dodawanie prywatnego interfejsu

Aby dodać interfejs, kliknij strzałkę w kolumnie "Actions" w celu uzyskania dostępu do możliwych akcji dla instancji. Wybierz opcję `Attach Interface`{.action}.

![Horizon Attach Interface](images/horizon3.png){.thumbnail}

Wybierz interfejs i zatwierdź.

![Horizon Attach Interface](images/horizon4.png){.thumbnail}

> [!primary]
> Twoja instancja OVHcloud będzie miała nowy interfejs sieciowy oprócz interfejsu publicznego (Ext-Net).
><br>W podsumowaniu instancji wyświetlony zostanie prywatny adres IP automatycznie przypisany do Twojego interfejsu.
><br>Do klienta należy poprawna konfiguracja interfejsu przez DHCP lub użycie odpowiednich adresów IP w statycznej konfiguracji IP.
>

###### Usuwanie prywatnego interfejsu

> [!warning]
> Usunięcie interfejsu jest operacją nieodwracalną.
>
> Jeśli usuniesz interfejs "Ext-Net" (publiczny adres IP), adres ten zostanie ponownie udostępniony. Nie można tego po prostu przypisać ponownie.
><br>Czynność ta jest niezbędna, jeśli chcesz odizolować Twój serwer od sieci vRack (interfejs Ext-Net) lub usunąć go z sieci VLAN.
>

Aby usunąć interfejs, kliknij strzałkę w kolumnie "Actions" w celu uzyskania dostępu do możliwych akcji dla instancji. Wybierz opcję `Detach Interface`{.action}.

![Interfejs odłączania Horizon](images/horizon5.png){.thumbnail}

Wybierz interfejs i zatwierdź.

![Interfejs odłączania Horizon](images/horizon6.png){.thumbnail}

##### **Zarządzanie interfejsami sieciowymi za pomocą API OpenStack**

Jeśli jeszcze tego nie zrobiłeś, to aby użyć API OpenStack, zastanów się nad przygotowaniem środowiska pracy zgodnie z [pierwszą częścią tego przewodnika](./#api-openstack).

Aby zintegrować istniejącą instancję z siecią vRack, należy wykonać następujące czynności.

###### Pobieranie wymaganych informacji

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

###### Dodawanie prywatnego interfejsu

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

###### Usuwanie prywatnego interfejsu

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

[Konfiguracja vRack dla Public Cloud przy użyciu interfejsu APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN)

[Serwery dedykowane - Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.