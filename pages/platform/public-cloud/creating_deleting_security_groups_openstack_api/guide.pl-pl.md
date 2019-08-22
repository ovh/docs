---
title: Zarządzanie grupami zabezpieczeń w API OpenStack
slug: zarzadzanie-grupami-zabezpieczen-api-openstack
excerpt: Tworzenie i usuwanie zestawów reguł filtrowania IP
section: Zarządzanie w OpenStack CLI
---

**Ostatnia aktualizacja dnia 2018-03-13**

## Wprowadzenie

Grupy zabezpieczeń to zestawy reguł filtrowania IP, które są stosowane do wszystkich instancji danego projektu [Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external} i definiują dostęp sieciowy do instancji oraz ruch wychodzący z instancji.

Reguły grupy są specyficzne dla projektu - członkowie projektu mogą edytować domyślne reguły dla swojej grupy i dodawać nowe zestawy reguł w ramach projektu.

Wszystkie projekty mają domyślną grupę zabezpieczeń, która jest stosowana do każdej instancji, jeśli ta nie ma zdefiniowanej własnej grupy zabezpieczeń.

W OVH domyślne ustawienia grupy bezpieczeństwa zapewniają zarówno ruch wychodzący jak i przychodzący dla instancji bez ograniczeń. Ustawienie reguł filtrowania pomagają zabezpieczyć instancję i zainstalowane na niej usługi przed atakiem z zewnątrz, jak i przed wykorzystaniem serwera jako pośredniczącego w ataku na inne maszyny.

**W tym przewodniku opisujemy, jak korzystać z podstawowych poleceń API OpenStack służących do zarządzania grupami bezpieczeństwa.**


## Wymagania początkowe

- Dostęp do interfejsu [API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/){.external}
- Załadowane zmienne środowiskowe OpenStack


## W praktyce

Otwórz terminal, a następnie połącz się jako użytkownik OpenStack. Pamiętaj, że każdy projekt posiada indywidualnie utworzonych użytkowników i wymaga załadowania zmiennych środowiskowych dla wybranego regionu, w którym chcesz utworzyć grupę zabezpieczeń.

Pobierz i załaduj plik ze zmiennymi środowiskowymi dla wybranego regionu (w którym, chcesz tworzyć grupę bezpieczeństwa) poleceniem: "source openrc.sh".


### Tworzenie grup zabezpieczeń

Aby utworzyć grupę zabezpieczeń, użyj polecenia "nova secgroup-create", gdzie pierwszy argument (Nom) to nazwa grupy zabezpieczeń, drugi (Description) to opis grupy. Jako potwierdzenie wykonania komendy wyświetli się tabela z danymi:


```sh
root@sartel:~/OpenStack/01-Test# nova secgroup-create Nom Description
+--------------------------------------+------+-------------+
| Id                                   | Name | Description |
+--------------------------------------+------+-------------+
| df97c6e8-xxxx-xxxx-xxxx-xxxxxxxxxxxx | Nom  | Description |
+--------------------------------------+------+-------------+
``` 

### Sprawdzanie istniejących grup zabezpieczeń

Aby zobaczyć istniejące grupy zabezpieczeń, użyj polecenia "nova secgroup-list":

```sh
root@sartel:~/OpenStack/01-Test# nova secgroup-list
+--------------------------------------+---------+-------------+
| Id                                   | Name    | Description |
+--------------------------------------+---------+-------------+
| 052d55b3-xxxx-xxxx-xxxx-xxxxxxxxxxxx | default | default     |
+--------------------------------------+---------+-------------+
```

### Usuwanie grup zabezpieczeń

Aby usunąć grupę zabezpieczeń, użyj polecenia "nova secgroup-delete", a nazwę grupy wpisz jako argument:

```sh
root@sartel:~/OpenStack/01-Test# nova secgroup-delete Nom
+--------------------------------------+------+-------------+
| Id                                   | Name | Description |
+--------------------------------------+------+-------------+
| df97c6e8-xxxx-xxxx-xxxx-xxxxxxxxxxxx | Nom  | Description |
+--------------------------------------+------+-------------+
```


### Tworzenie reguł w grupie

Aby dodać regułę filtrowania do grupy zabezpieczeń użyj polecenia "nova secgroup-add-rule", jako parametry podaj kolejno:

- nazwę grupy (sec-gr_name),
- protokół (ip_protocol),
- port dla ruchu przychodzącego (from_port),
- protokół dla ruchu wychodzącego (to_port),
- adres IP wraz z maską (cidr_address).


```sh
~$ nova secgroup-add-rule sec-gr_name ip_protocol from_port to_port cidr_address
```

na przykład:

```sh
~$ nova secgroup-add-rule GR_1 tcp 22 22 197.255.255.0/24

+-------------+-----------+---------+-----------------+--------------+
| IP Protocol | From Port | To Port | IP Range        | Source Group |
+-------------+-----------+---------+-----------------+--------------+
| tcp         | 22        | 22      | 197.255.255.0/24|              |
+-------------+-----------+---------+-----------------+--------------+

```

Jest bardzo wiele możliwych komend, w tym przewodniku podano tylko podstawowe przykłady. Aby w pełni wykorzystać możliwości interfejsu API OpenStack zapoznaj się z pełną listą poleceń oraz ich składnią na stronie [API OpenStack](https://docs.openstack.org/python-openstackclient/pike/cli/command-list.html){.external}.



## Sprawdź również

[Dostęp do panelu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/){.external}

[Przygotowanie środowiska API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/){.external}

[Zmienne środowiskowe OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/){.external}

[Zmiana hasła dla użytkownika OpenStack](https://docs.ovh.com/pl/public-cloud/zmiana-hasla-horizon/){.external}


Przyłącz się do społeczności naszych użytkowników na <https://community.ovh.com/en/>.