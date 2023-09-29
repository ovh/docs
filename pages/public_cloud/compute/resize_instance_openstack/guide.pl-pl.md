---
title: Zmiana rozmiaru instancji Public Cloud przy użyciu CLI OpenStack
excerpt: "Dowiedz się, jak skalować zasoby instancji w celu zwiększenia aktywności"
updated: 2023-09-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Ze względu na zwiększoną aktywność lub po prostu w celu zaspokojenia nowych potrzeb, instancji może brakować zasobów i nie być w stanie odpowiedzieć na nowe obciążenie. Dzięki usłudze Public Cloud od OVHcloud możesz w kilku krokach zwiększyć zasoby dostępne dla Twojej instancji.

**Dowiedz się, jak zmienić rozmiar instancji Public Cloud za pomocą interfejsu OpenStack CLI.**

> [!primary]
> **Limity:**
>
> - W przypadku klasycznych instancji możliwa jest wyłącznie zmiana rozmiaru instancji na wyższy model (*upscaling*).
> - [Instancja Metal](https://www.ovhcloud.com/pl/public-cloud/metal-instances/) można zmienić tylko na inny model **Metal**.
> - Instancje *Flex* umożliwiają zmianę rozmiaru na wyższy lub niższy model ze względu na pojedynczy zablokowany rozmiar dysku.
>

## Wymagania początkowe

- Utworzenie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#krok-3-tworzenie-instancji) na Twoim koncie OVHcloud
- [Użytkownik OpenStack](/pages/public_cloud/compute/create_and_delete_a_user)
- Przygotuj [środowisko OpenStack dla CLI](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- Zdefiniowano [zmienne środowiskowe OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

## W praktyce

> [!warning]
>
> Operacja ta spowoduje zatrzymanie instancji na czas jej trwania.
>

### Zapisz instancję

W przypadku zmiany rozmiaru instancja jest zatrzymywana na czas trwania operacji. Zalecamy, aby przed wykonaniem tej operacji wykonać kopię zapasową instancji i zatrzymać wszystkie uruchomione procesy. Więcej informacji na temat metod tworzenia kopii zapasowych znajdziesz w przewodniku [dotyczącym](/pages/public_cloud/compute/save_an_instance) tych metod.

### Lista instancji

W pierwszym kroku wyświetl listę instancji, w celu pobrania nazwy instancji, którą chcesz zmienić. W poniższym przykładzie chcemy zmienić rozmiar instancji o nazwie "OVHcloudinstance".

```bash
$ openstack server list
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| ID                                   | Name             | Image      | Flavor |        | Status | Networks                                    | 
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| 19298898-934b-xxxx-xxxx-xxxxxxxxxxxx | testinstance1    | Centos 7     | d2-2 |        | ACTIVE | Ext-Net=111.112.113.9, 2607:5300:xxx:xxxx::ae9                                                       
| 23ce0491-5e29-xxxx-xxxx-xxxxxxxxxxxx | testinstance2    | Ubuntu 23.04 | d2-2 |        | ACTIVE | Ext-Net=111.112.113.61, 2607:5300:xxx:xxxx::c0a                                                          
| 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx | OVHcloudinstance | Debian 12    | b2-7 |        | ACTIVE | Ext-Net=111.112.113.200, 2607:5300:xxx:xxxx::9a3                                  
+--------------------------------------+----------------------------------------------------------------+--------+----------------------------------------------+
```

### Lista modeli <a name="flavorlist"></a>

Teraz należy wyświetlić listę modeli (*flavors*) dostępnych w danym regionie, aby pobrać identyfikator nowego modelu. W naszym przykładzie chcemy zmienić rozmiar naszej instancji na model b2-30 o ID `098889e6-d1fc-4967-baea-19fd97fd83a8`.

```bash
$ openstack flavor list
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                |    RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 009ee05f-9430-4c85-b9f7-66297db22731 | win-hg-7-ssd-flex   |   7000 |   50 |         0 |     2 | True      |
| 01ef1e13-5a85-4c4b-84f4-9e9da85da51d | r2-15               |  15000 |   50 |         0 |     2 | True      |
| 01f4f140-3d51-4d94-ad26-9aa85941dc63 | win-hg-60-ssd-flex  |  60000 |   50 |         0 |    16 | True      |
| 041d0272-4db5-4c13-9861-a4e17c48fd9c | r2-60               |  60000 |  100 |         0 |     4 | True      |
| 0531d26b-e117-4cdb-9e83-c16727f4737e | c2-60               |  60000 |  400 |         0 |    16 | True      |
| 05ebb9db-d6c8-4b7a-bf38-eea519aa5262 | win-r2-120-flex     | 120000 |   50 |         0 |     8 | True      |
| 098889e6-d1fc-4967-baea-19fd97fd83a8 | b2-30               |  30000 |  200 |         0 |     8 | True      |
| 0ec183bd-d014-48ad-a71e-1233c5f5c79b | win-r2-30           |  30000 |   50 |         0 |     2 | True      |
| 1070c9d6-5bc7-45db-bab2-073bff119f22 | r2-30               |  30000 |   50 |         0 |     2 | True      |
| 108e2180-e257-4054-aa23-18b123d06ed8 | win-hg-120-ssd-flex | 120000 |   50 |         0 |    32 | True      |
| 11a77f5f-5cbe-4394-ba85-d4afb2b0bade | eg-30-flex          |  30000 |   50 |         0 |     8 | True      |
| 125a6e9e-7522-463a-a90d-121abaabf21a | win-b2-30-flex      |  30000 |   50 |         0 |     8 | True      |
| 1335874a-7ddd-453b-b655-d9bf044ef5f9 | eg-120-ssd          | 120000 |  800 |         0 |    32 | True      |
| fd80c213-d30f-4e0c-ae9d-ecdcb422fc1b | eg-7-ssd            |   7000 |  100 |         0 |     2 | True      |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

> [!warning]
> Należy pamiętać, że można zmienić rozmiar instancji tylko z jednego modelu Linux na inny model Linux i z jednego modelu Windows na inny model Windows.

### Zmiana rozmiaru instancji

Po pobraniu informacji możesz teraz zmienić rozmiar instancji:

```bash
$  openstack server resize --flavor <FLAVOR-ID> <INSTANCE-NAME>
```

Na przykład, aby zmienić rozmiar instancji "OVHcloudInstance":

```bash
$ openstack server resize --flavor 098889e6-d1fc-4967-baea-19fd97fd83a8 OVHcloudinstance
```

Możesz śledzić proces, często uruchamiając następujące polecenie. Status (*status*) musi być `RESIZE`.

```bash
$ openstack server show OVHcloudinstance
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                              |
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| id                                  | 8f9a08a6-f0fe-xxxx-xxxx-xxxxxxxxxxxx                                                                                                                                                              |
| image                               | Debian 12 (31e40bc4-5b35-4c5f-96ff-37df3660dec0)                                                                                                                                                   |

| key_name                            | OVHcloud                                                                                                                                                                                               |
| name                                | OVHcloudinstance                                                                                                                                                                                     |
| status                              | RESIZE                                                                                                                                                                                             |
| tags                                |                                                                                                                                                                                                    |
| task_state                          | resize_migrating                                                                                                                                                                                   |
| updated                             | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| updated_at                          | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| vm_state                            | active           
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Zmniejszanie instancji

> [!warning]
> Ta opcja jest dostępna tylko dla modeli *Flex*.
>

Jeśli chcesz zmniejszyć swoją instancję, możesz to zrobić, wykonując te same kroki, o których mowa [powyżej](#flavorlist) i używając innego identyfikatora w polu <FLAVOR-ID>.

## Sprawdź również

[Skaluj instancję Public Cloud w Panelu klienta OVHcloud](/pages/public_cloud/compute/resize_instance_manager)

[Skaluj instancję Public Cloud za pomocą interfejsu Horizon](/pages/public_cloud/compute/resize_of_an_instance)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.