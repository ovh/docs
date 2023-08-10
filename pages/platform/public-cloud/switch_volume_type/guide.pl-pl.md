---
title: Zmień wolumen Block Storage
excerpt: "Dowiedz się, jak zmienić typ wolumenu block storage przy użyciu technologii Openstack"
updated: 2023-08-08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Celem niniejszego przewodnika jest pokazanie, jak zmienić rodzaj wolumenu Block Storage, z Classic lub High Speed na High Speed gen2.

## Wymagania początkowe

- [Dostęp do interfejsu Horizon](/pages/platform/public-cloud/introducing_horizon)
- Wolumen [Block Storage](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) utworzony w Twoim projekcie [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/)

## W praktyce

W przypadku zmiany typu wolumenu Block Storage na wolumin "High speed gen2", polityka migracji musi zostać zmieniona z `Never` na `On Demand`.

Domyślnie polityka migracji jest ustawiona na `Never`, ponieważ wolumin pozostaje w tym samym klastrze CEPH. W przypadku "High speed gen2" wolumin musi zostać przeniesiony do nowego klastra.

Modyfikacja ta może zostać przeprowadzona za pośrednictwem interfejsu Horizon lub interfejsu wiersza polecenia OpenStack.

### Zarządzanie w interfejsie Horizon

Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/) i upewnij się, że jesteś we właściwej lokalizacji. Można to sprawdzić w lewym górnym rogu. 

![Wybór regionu](images/region2021.png){.thumbnail}

Kliknij menu `Volumes`{.action} po lewej stronie, a następnie `Volumes`{.action}.

Kliknij strzałkę obok pozycji `Edit Volume`{.action} i wybierz pozycję `Change Volume Type`{.action}.

![Wybór opcji](images/selectoption.png){.thumbnail}

W oknie, które się wyświetli kliknij rozwijane menu w obszarze `Type` i wybierz `high-speed-gen-2`{.action}. Następnie kliknij strzałkę rozwijaną w obszarze `Migration Policy` i wybierz `On Demand`{.action}.

Po zakończeniu tych operacji kliknij przycisk `Change Volume Type`{.action}, aby zatwierdzić zmianę.

![Wybór opcji](images/changevolume.png){.thumbnail}

### Z poziomu CLI OpenStack

Przed kontynuowaniem zalecamy zapoznanie się z następującymi przewodnikami:

- [Przygotowanie środowiska dla API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- [Ustawianie zmiennych środowiskowych OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables)

W pierwszym kroku wyświetl typy wolumenów dostępnych w Twoim regionie przy użyciu następującego polecenia:

```bash
#~$ openstack image list
+--------------------------------------+-----------------------------------------------+----------+
| ID                                   | Name                                          | Is Public |
+--------------------------------------+-----------------------------------------------+----------+
| 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True |
| 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True |
| 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True |
----------------------------------------------------------------------------------------------------
```

> [!warning]
> Pamiętaj, że jeśli typ wolumenu "high-speed-gen2" nie pojawia się na liście, oznacza to, że nie jest dostępny w tym regionie.
>

Zmień typ wolumenu za pomocą następującego polecenia:

```bash
$ openstack volume set --type high-speed-gen2 --retype-policy on-demand VOLUME_NAME_OR_ID
```

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.