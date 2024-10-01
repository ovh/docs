---
title: 'Dodawanie zasobów w systemie godzinowym'
excerpt: 'Dowiedz się, jak dodawać zasoby płatne w systemie godzinowym'
updated: 2020-12-15
---

## Wprowadzenie

Oferta [Managed Bare Metal](https://www.ovhcloud.com/pl/managed-bare-metal/){.external} umożliwia dodawanie zasobów płatnych w systemie godzinowym.

**Niniejszy przewodnik wyjaśnia, jak dodać zasób w systemie godzinowym za pomocą interfejsu vSphere Managed Bare Metal.**

## Wymagania początkowe

* Posiadanie oferty [Managed Bare Metal](https://www.ovhcloud.com/pl/managed-bare-metal/){.external}
* [Przydzielenie użytkownikowi uprawnienia "Dodawanie zasobów"](/pages/bare_metal_cloud/managed_bare_metal/change-user-rights){.external} w wybranym centrum danych, korzystając z [Panelu klienta](/links/manager){.external}
* Połączenie z klientem vSphere

## W praktyce

### Wybierz zasób

Aby uzyskać dostęp do interfejsu umożliwiającego dodawanie zasobów płatnych w systemie godzinowym, wybierz datacenter, a następnie kliknij zakładkę `Configure`{.action}.

![Dodanie hosta](images/addhost_ess_01.png){.thumbnail}

W poniższym przykładzie dodamy host płatny w systemie godzinowym. Po dokonaniu wyboru modelu hosta, kliknij przycisk `Next`{.action}. Pamiętaj, że aby dodać datastore wystarczy zaznaczyć zakładkę `Add storage`{.action}.

![Dodanie hosta](images/addhost_ess_02.png){.thumbnail}

### Zatwierdzenie zamówienia

Aby zatwierdzić i sfinalizować zamówienie, kliknij ponownie przycisk `Next`{.action}.

![zamówienia](images/addhost_ess_03.png){.thumbnail}

### Kontynuacja instalacji

Kiedy Twoje zamówienie jest zatwierdzone, możesz kontynuować proces dodawania zasobu.

![instalacji](images/addhost_ess_04.png){.thumbnail}

W interfejsie vSphere pojawi się zadanie związane z tą operacją. Pozwoli ono doprowadzić do końca proces dodania zasobu.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
