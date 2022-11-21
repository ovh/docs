---
title: 'Przygotowanie środowiska do korzystania z API OpenStack'
excerpt: 'Zainstaluj środowisko OpenStack, aby monitorować Twoje instancje za pośrednictwem API'
slug: przygotowanie_srodowiska_dla_api_openstack
section: Zarządzanie w OpenStack CLI
---

**Ostatnia aktualizacja z dnia 30/03/2022**

## Wprowadzenie

Usługami Public Cloud można zarządzać przy użyciu poleceń z konsoli systemowej, po uprzednim pobraniu i zainstalowaniu narzędzi OpenStack.

Dzięki API OpenStack możesz zautomatyzować zarządzanie usługami, tworząc skrypty. Klient Nova OpenStack umożliwia zarządzanie instancjami i przestrzenią dyskową. Klient Glance OpenStack oferuje możliwość zarządzania obrazami i kopiami zapasowymi. Klient Swift natomiast pozwala zarządzać przestrzenią Object Storage.

**Dowiedz się, jak zainstalować narzędzia OpenStack.**

## Wymagania początkowe

- Posiadanie dostępu **root** do środowiska, które chcesz skonfigurować 

## W praktyce

### Debian

Otwórz terminal lub połącz się przez SSH ze środowiskiem, które chcesz przygotować.

Zaktualizuj cache pakietów, używając polecenia `apt update`: 

```sh
apt update
```

Użyj poniższego polecenia, aby zainstalować klientów OpenStack, Nova (aplikacja obliczeniowa) i Swift:

```sh
apt install python3-pip -y
pip3 install --upgrade pip
pip3 install python-openstackclient python-novaclient python-swiftclient
```

Po zakończeniu tego etapu zalecamy utworzenie oddzielnego użytkownika zamiast korzystania z użytkownika root.

Aby uzyskać dostęp do narzędzia pomocy, wprowadź następujące polecenie:

```sh
openstack --help
nova help
```

> [!primary]
> 
> Dokumentacja dotycząca API OpenStack dostępna jest [na tej stronie](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### CentOS

Otwórz terminal lub połącz się przez SSH ze środowiskiem, które chcesz przygotować.

Zaktualizuj cache pakietów, używając polecenia apt-get update: 

```sh
yum update
```

Użyj poniższego polecenia, aby zainstalować klientów OpenStack, Nova (aplikacja obliczeniowa) i Swift:

```sh
apt install python3-pip -y
pip3 install --upgrade pip
pip3 install python-openstackclient python-novaclient python-swiftclient
```

Po zakończeniu tego etapu zalecamy utworzenie oddzielnego użytkownika zamiast korzystania z użytkownika root.

Aby uzyskać dostęp do narzędzia pomocy, wprowadź następujące polecenie:

```sh
openstack --help
nova help
```

> [!primary]
> 
> Dokumentacja dotycząca API OpenStack dostępna jest [na tej stronie](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Windows

Pobierz i zainstaluj wersję Python 2.7.14. Możesz wybrać automatyczne dodanie języka programowania Python do ścieżki (path), zaznaczając tę opcję w konfiguratorze instalacji:

![Automatyczna instalacja](images/1_preparation_openstack_environment_windows.png){.thumbnail}

Możesz również przeprowadzić instalację samodzielnie. W tym celu postępuj zgodnie z instrukcjami podanymi poniżej:

#### Etap 1: edytuj zmienne środowiskowe systemu

Wyszukaj parametry zmiennych środowiskowych systemu i przejdź do “Edycja zmiennych środowiskowych systemu”:

![Parametry zmiennych środowiskowych](images/2_preparation_openstack_environment_windows.png){.thumbnail}

#### Etap 2: edycja parametrów systemu

Przejdź do zakładki `Zaawansowane`{.action} i kliknij `Zmienne środowiskowe`{.action}, aby edytować parametry.

![Parametry wydajności](images/3_preparation_openstack_environment_windows.png){.thumbnail}

#### Etap 3: skonfiguruj zmienne środowiskowe 

W sekcji “Zmienne systemowe” wybierz “Nowy”, nadaj nazwę “PYTHON_HOME” i dodaj ścieżkę do Python’a. Domyślnie będzie wyglądała ona następująco: « C:\\Python27 ».

![Dodanie ścieżki dostępu](images/4_edit_system_variables.png){.thumbnail}

#### Etap 4: dodanie ścieżki dla zmiennych

Po dodaniu “Python”, edytuj ścieżkę (Path) w zmiennych systemowych i dodaj na końcu ścieżki:

`...;%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### Etap 5: restart systemu Windows

Wprowadzone modyfikacje zostaną uwzględnione po restarcie systemu.

#### Etap 6: instalacja klienta OpenStack

Zaloguj się jako administrator i otwórz program przy użyciu wiersza poleceń (CMD), po czym zainstaluj klienta OpenStack, wprowadzając następujące polecenie:

```sh
# pip install python-openstackclient
```

Jeśli operacja została przeprowadzona poprawnie, wyświetli się podsumowanie:

![Automatyczna instalacja](images/5_preparation_openstack_environment_windows.png){.thumbnail}

Możesz sprawdzić wersję instalacyjną w nowo otwartym oknie CMD (wiersz poleceń), wprowadzając “python-V” z dowolnego miejsca w systemie.

![Weryfikacja](images/6_preparation_openstack_environment_windows.png){.thumbnail}

### MacOS

Możesz użyć [HomeBrew](https://brew.sh), menedżera pakietów dla MacOS.

Otwórz terminal i wpisz następujące polecenie:

```bash
brew install openstackclient
```

Użyj poniższych poleceń, aby zainstalować klienta Nova (aplikacja obliczeniowa) i Swift:

Python2 :

```sh
pip install python-novaclient
pip install python-swiftclient
```

Python3 :

```sh
pip3 install python-novaclient
pip3 install python-swiftclient
```

Aby uzyskać dostęp do narzędzi pomocowych, wprowadź następującą komendę:

```sh
openstack --help
nova help
```

## Sprawdź również

[Zmienne środowiskowe OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/).

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

