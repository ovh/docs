---
title: 'Aktywacja licencji Windows dla instancji w trybie prywatnym'
excerpt: 'Dowiedz się, jak aktywować licencję Windows na instancji w trybie prywatnym'
updated: 2023-01-25
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 02-02-2023**

## Wprowadzenie

W przeciwieństwie do instancji Windows utworzonych w sieci publicznej, instancje Windows utworzone w trybie prywatnej sieci (vRack) nie mają automatycznie włączonych licencji Windows.
W tym przypadku należy aktywować licencję ręcznie, aby uzyskać dostęp do wszystkich usług Windows.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować publiczny interfejs instancji Public Cloud w ramach usługi vRack.**

## Wymagania początkowe

- Posiadanie [projektu Public Cloud](/pages/platform/public-cloud/create_a_public_cloud_project)
- Dostęp do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- [Utworzenie użytkownika OpenStack](/pages/platform/public-cloud/create_and_delete_a_user)

Zalecamy zapoznanie się z przewodnikiem  "[Dostęp do interfejsu Horizon](/pages/platform/public-cloud/introducing_horizon)" w celu zapoznania się z programem Horizon.

## W praktyce

### Przypisz publiczny port "Ext-Net" do instancji

#### W interfejsie Horizon

Zaloguj się do interfejsu [Horizon](https://horizon.cloud.ovh.net/auth/login/), postępując zgodnie z instrukcjami zawartymi w [pierwszej części tego przewodnika](/pages/platform/network-services/getting-started-07-creating-vrack#interfejs-horizon).

Zaloguj się do Twojego obszaru pracy:

![region](images/horizon1.png){.thumbnail}

Następnie przejdź do `Compute`{.action}, następnie `Instances`{.action}:

![compute i instance](images/horizon2.png){.thumbnail}

Aby dodać interfejs, w kolumnie "Actions" kliknij strzałkę umożliwiającą dostęp do operacji, które można wykonać na instancji. Następnie kliknij `Attach Interface`{.action}:

![interfejs](images/horizon3.png){.thumbnail}

Wybierz interfejs i zatwierdź:

![interfejs select](images/attachinterfacehorizon.png){.thumbnail}

#### Z poziomu API OpenStack

Przed kontynuowaniem prac zalecamy zapoznanie się z następującymi przewodnikami:

- [Przygotowanie środowiska do korzystania z API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api).
- [Zmienne środowiskowe OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables).

Najpierw należy zgromadzić wszystkie niezbędne informacje:

- **Identyfikacja twoich instancji**

```bash
openstack server list
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| ID                                   | Name              | Status | Networks                                                            | Image                                  | Flavor   |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
| f095ad19-5c0a-4ef5-8e01-b3590bc9c6f1 | MyInstance        | ACTIVE |                                                                     | Windows Server 2016 Standard (Desktop) | win-b2-7 |
+--------------------------------------+-------------------+--------+---------------------------------------------------------------------+----------------------------------------+----------+
```


- **Identyfikacja sieci publicznych i prywatnych**

```bash
openstack network list
-----------------------------------------------------------------------------------------+
| ID                                   | Name              | Subnets                                                                                                                                                                                                                                                                  |
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1ca87837-7860-47a3-8916-c9c516841bf2 | Ext-Net-Baremetal | 1db089a7-1bd9-449f-8e3b-4ea61e666320, 4a614403-b8aa-4291-bd59-0cb2c81c4deb                                                                                                                                                                                               |
| 7394fc68-0f77-40d7-a274-388e7e75d82c | vlan 0            | f3fb67dc-7419-49da-b26c-7f64c480eb63                                                                                                                                                                                                                                     |
| 7a0e67da-70f3-48ed-a6e7-5ec265916211 | private-net       | 57d9faac-f01c-43a2-8866-d9b1dd02cb9e, 5cb270a9-3795-4286-96fe-f3bfa3a328e5                                                                                                                                                                                               |
| b2c02fdc-ffdf-40f6-9722-533bd7058c06 | Ext-Net           | 0f11270c-1113-4d4f-98de-eba83445d962, 1a6c6b72-88e9-4e94-ac8b-61e6dbc4792c, 22e2d853-1b86-48f3-8596-9d12c7693dc7, 4aa6cac1-d5cd-4e25-b14b-7573aeabcab1, 7d6352a6-dbed-4628-a029-fcc3986ae7d6, 9f989c4b-c441-4678-b395-e082c300356e, b072b17b-ef1d-4881-98c7-e0d6a1c3dcea|
+--------------------------------------+-------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Dzięki pobraniu wcześniej elementów możesz utworzyć publiczny port o nazwie "Ext-Net" w subnet "Ext-Net" i przypisać go do instancji:

```bash
openstack port create --network b2c02fdc-ffdf-40f6-9722-533bd7058c06 Ext-Net
+-------------------------+----------------------------------------------------------------------------------------+
| Field                   | Value                                                                                  |
+-------------------------+----------------------------------------------------------------------------------------+
| admin_state_up          | UP                                                                                     |
| allowed_address_pairs   |                                                                                        |
| binding_host_id         | None                                                                                   |
| binding_profile         | None                                                                                   |
| binding_vif_details     | None                                                                                   |
| binding_vif_type        | None                                                                                   |
| binding_vnic_type       | normal                                                                                 |
| created_at              | 2023-01-20T10:12:17Z                                                                   |
| data_plane_status       | None                                                                                   |
| description             |                                                                                        |
| device_id               |                                                                                        |
| device_owner            |                                                                                        |
| device_profile          | None                                                                                   |
| dns_assignment          | None                                                                                   |
| dns_domain              | None                                                                                   |
| dns_name                | None                                                                                   |
| extra_dhcp_opts         |                                                                                        |
| fixed_ips               | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1' |
|                         | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'           |
| id                      | ed34add5-aa76-4aab-97af-815724d76e2c                                                   |
| ip_allocation           | immediate                                                                              |
| mac_address             | fa:16:3e:68:35:9c                                                                      |
| name                    | Ext-Net                                                                                |
| network_id              | b2c02fdc-ffdf-40f6-9722-533bd7058c06                                                   |
| numa_affinity_policy    | None                                                                                   |
| port_security_enabled   | True                                                                                   |
| project_id              | 2098640de5e547289e3740b09e725ecc                                                       |
| propagate_uplink_status | None                                                                                   |
| qos_network_policy_id   | None                                                                                   |
| qos_policy_id           | None                                                                                   |
| resource_request        | None                                                                                   |
| revision_number         | 2                                                                                      |
| security_group_ids      | 9f60804a-0ecf-4738-a4d8-30a6bb0d20c2                                                   |
| status                  | DOWN                                                                                   |
| tags                    |                                                                                        |
| tenant_id               | 2098640de5e547289e3740b09e725ecc                                                       |
| trunk_details           | None                                                                                   |
| updated_at              | 2023-01-20T10:12:18Z                                                                   |
+-------------------------+----------------------------------------------------------------------------------------+
```

Pobierz UUID portu "Ext-Net":

```bash
openstack port list --name Ext-Net
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ID                                   | Name    | MAC Address       | Fixed IP Addresses                                                                    | Status |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
| ed34add5-aa76-4aab-97af-815724d76e2c | Ext-Net | fa:16:3e:68:35:9c | ip_address='2001:41d0:304:400::128f', subnet_id='4aa6cac1-d5cd-4e25-b14b-7573aeabcab1'| DOWN   |
|                                      |         |                   | ip_address='57.128.42.227', subnet_id='22e2d853-1b86-48f3-8596-9d12c7693dc7'          |        |
+--------------------------------------+---------+-------------------+---------------------------------------------------------------------------------------+--------+
```

Przypisz port do instancji:

```bash
openstack server add port <server_id> <port_id>
```

#### Włącz system Windows

Aby włączyć system Windows, należy skorzystać z opcji Powershell.

Po zalogowaniu się do instancji Windows kliknij menu `Start`{.action}, a następnie ikonę `Windows PowerShell`{.action}.

Wpisz następujące polecenie:

```bash
slmgr.vbs -ato
```

![aktywacja klucza windows](images/windowsactivation1.png){.thumbnail}

Licencja Windows zostanie włączona na 180 dni.

Należy powtarzać tę operację co 180 dni.

> [!primary]
>
> W międzyczasie, jeśli chcesz odizolować instancję od sieci publicznej, możesz wyłączyć utworzony publiczny port za pośrednictwem interfejsu Horizon lub API OpenStack.
> Możesz również bezpośrednio wyłączyć port sieciowy przez system Windows.
>

Aby sprawdzić status licencji i datę jej wygaśnięcia, wpisz następujące polecenie:

```bash
slmgr.vbs -dli
```

![aktywacja klucza windows](images/windowsactivation2.png){.thumbnail}

## Sprawdź również

[Dowiedz się, jak naprawić klucz aktywacyjny systemu Windows Server](/pages/cloud/dedicated/windows_key).

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.