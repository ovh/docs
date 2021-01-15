---
title: 'Dodawanie zasobów w systemie godzinowym'
slug: dodawanie-zasobow-w-systemie-godzinowym
excerpt: 'Dowiedz się, jak dodawać zasoby płatne w systemie godzinowym'
legacy_guide_number: '7766721'
section: 'Funkcjonalności OVHcloud'
---

**Ostatnia aktualizacja z dnia 15-12-2020**

## Wprowadzenie

Oferta [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external} umożliwia dodawanie zasobów płatnych w systemie godzinowym.

**Niniejszy przewodnik wyjaśnia, jak dodać zasób w systemie godzinowym za pomocą interfejsu vSphere Hosted Private Cloud.**

## Wymagania początkowe

* Posiadanie oferty [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}
* [Przydzielenie użytkownikowi uprawnienia "Dodawanie zasobów"](../zmiana-uprawnien-uzytkownika/){.external} w wybranym centrum danych, korzystając z [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}
* Połączenie z klientem vSphere


## W praktyce

### Wybierz zasób

Aby uzyskać dostęp do interfejsu umożliwiającego dodawanie zasobów płatnych w systemie godzinowym, wybierz datacenter, a następnie kliknij zakładkę `Configure`{.action}.

![Dodanie hosta](images/addhost_01.png){.thumbnail}

W poniższym przykładzie dodamy host płatny w systemie godzinowym. Po dokonaniu wyboru modelu hosta, kliknij przycisk `Next`{.action}. Pamiętaj, że aby dodać datastore wystarczy zaznaczyć zakładkę `Add storage`{.action}.

![Dodanie hosta](images/addhost_03.png){.thumbnail}


### Zatwierdzenie zamówienia

Aby zatwierdzić i sfinalizować zamówienie, kliknij ponownie przycisk `Next`{.action}.

![zamówienia](images/addhost_04.png){.thumbnail}

### Kontynuacja instalacji

Kiedy Twoje zamówienie jest zatwierdzone, możesz kontynuować proces dodawania zasobu.

![instalacji](images/addhost_06.png){.thumbnail}

W interfejsie vSphere pojawi się zadanie związane z tą operacją. Pozwoli ono doprowadzić do końca proces dodania zasobu.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
