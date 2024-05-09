---
title: 'Przygotowanie środowiska do korzystania z API OpenStack'
excerpt: 'Zainstaluj środowisko OpenStack, aby monitorować Twoje instancje za pośrednictwem API'
updated: 2024-01-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Usługami Public Cloud można zarządzać przy użyciu poleceń z konsoli systemowej, po uprzednim pobraniu i zainstalowaniu narzędzi OpenStack.

Dzięki API OpenStack możesz zautomatyzować zarządzanie usługami, tworząc skrypty.

> [!primary]
>
> OpenStack wymaga języka Python >=3.8.
> Ten przewodnik opisuje instalację pakietu `python-openstackclient`, który zawiera wiersz poleceń dla większości projektów OpenStack.
> Projekt Octavia (który zasila `Public Cloud Load Balancer`) nie jest dołączony. W związku z tym należy uruchomić `pip3 install python-octaviaclient` oprócz instrukcji instalacji znajdujących się poniżej.

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

Użyj poniższego polecenia, aby zainstalować klientów OpenStack:

```sh
$ apt install python3-pip python3-venv -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

Po zakończeniu tego etapu zalecamy utworzenie oddzielnego użytkownika zamiast korzystania z użytkownika root.

Aby uzyskać dostęp do narzędzia pomocy, wprowadź następujące polecenie:

```sh
openstack --help
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

Użyj poniższego polecenia, aby zainstalować klientów OpenStack:

```sh
yum install python3-pip -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

Po zakończeniu tego etapu zalecamy utworzenie oddzielnego użytkownika zamiast korzystania z użytkownika root.

Aby uzyskać dostęp do narzędzia pomocy, wprowadź następujące polecenie:

```sh
openstack --help
```

> [!primary]
> 
> Dokumentacja dotycząca API OpenStack dostępna jest [na tej stronie](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Windows

Pobierz i zainstaluj wersję Python 3.12.0. Możesz wybrać automatyczne dodanie języka programowania Python do ścieżki (path), zaznaczając tę opcję w konfiguratorze instalacji:

![Automatyczna instalacja](1_preparation_openstack_environment_windows.png){.thumbnail}

Możesz również przeprowadzić instalację samodzielnie. W tym celu postępuj zgodnie z instrukcjami podanymi poniżej:

#### Etap 1: edytuj zmienne środowiskowe systemu

Wyszukaj parametry zmiennych środowiskowych systemu i przejdź do “Edycja zmiennych środowiskowych systemu”:

![Parametry zmiennych środowiskowych](2_preparation_openstack_environment_windows.png){.thumbnail}

#### Etap 2: edycja parametrów systemu

Przejdź do zakładki `Zaawansowane`{.action} i kliknij `Zmienne środowiskowe`{.action}, aby edytować parametry.

![Parametry wydajności](3_preparation_openstack_environment_windows.png){.thumbnail}

#### Etap 3: skonfiguruj zmienne środowiskowe 

W sekcji “Zmienne systemowe” wybierz “Nowy”, nadaj nazwę “PYTHON_HOME” i dodaj ścieżkę do Python’a.

![Dodanie ścieżki dostępu](4_edit_system_variables.png){.thumbnail}

#### Etap 4: dodanie ścieżki dla zmiennych

Po dodaniu “Python”, edytuj ścieżkę (Path) w zmiennych systemowych i dodaj na końcu ścieżki:

`...;%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### Etap 5: restart systemu Windows

Wprowadzone modyfikacje zostaną uwzględnione po restarcie systemu.

#### Etap 6: instalacja klienta OpenStack

Zaloguj się jako administrator i otwórz program przy użyciu wiersza poleceń (CMD), po czym zainstaluj klienta OpenStack, wprowadzając następujące polecenie:

```sh
pip install python-openstackclient
```

Jeśli operacja została przeprowadzona poprawnie, wyświetli się podsumowanie:

![Automatyczna instalacja](5_preparation_openstack_environment_windows.png){.thumbnail}

Możesz sprawdzić wersję instalacyjną w nowo otwartym oknie CMD (wiersz poleceń), wprowadzając “python-V” z dowolnego miejsca w systemie.

![Weryfikacja](6_preparation_openstack_environment_windows.png){.thumbnail}

### MacOS

Możesz użyć [HomeBrew](https://brew.sh), menedżera pakietów dla MacOS.

Otwórz terminal i wpisz następujące polecenie:

```bash
brew install openstackclient
```

Aby uzyskać dostęp do narzędzi pomocowych, wprowadź następującą komendę:

```sh
openstack --help
```

## Sprawdź również

[Zmienne środowiskowe OpenStack](loading_openstack_environment_variables1.).

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

