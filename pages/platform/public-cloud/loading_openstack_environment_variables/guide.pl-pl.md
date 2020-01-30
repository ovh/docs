---
title: 'Zmienne środowiskowe OpenStack'
excerpt: 'Zarządzaj środowiskiem OpenStack z linii komend'
slug: zmienne-srodowiskowe-openstack
section: 'Zarządzanie w OpenStack CLI'
---

**Ostatnia aktualizacja z dnia 20-11-2019**

## Wprowadzenie

Pobranie zmiennych środowiskowych OpenStack na Twoje stanowisko umożliwi Ci korzystanie z interfejsu API OpenStack i zastosowanie go do zarządzania infrastrukturą.


## Wymagania początkowe
- Utworzenie użytkownika OpenStack. Informacje na ten temat znajdziesz [w tym przewodniku](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/#tworzenie-konta-uzytkownika-openstack)
- Przygotowanie środowiska do korzystania z OpenStack. Informacje na ten temat znajdziesz w tym przewodniku: [Przygotowanie środowiska do korzystania z API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/)

## W praktyce

### Etap 1: Zgromadzenie zmiennych

Aby zgromadzić zmienne środowiskowe, możesz pobrać utworzony wcześniej plik OpenRC użytkownika OpenStack.

W tym celu przejdź do rubryki `Users & Roles`{.action}, po prawej stronie nazwy użytkownika kliknij symbol `...`{.action} i wybierz pozycję `Pobierz plik RC OpenStack`{.action}.

![openstack-variables](images/pciopenstackvariables1.png){.thumbnail}

Plik OpenRC odpowiada użytkownikowi, a także strefie. Nie można zarządzać kilkoma strefami w jednym pliku.

### Etap 2: Pobranie zmiennych

#### **Linux**

* Otwórz terminal lub zaloguj się na konto użytkownika, który będzie wykonywał wywołania przez API OpenStack.
* Załaduj treść pliku do bieżącego środowiska. Zostanie wyświetlony monit o podanie hasła odpowiedniego użytkownika Horizon.

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

Zgodnie z informacjami podanymi w przewodniku [Dostęp do panelu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/), hasło będzie widoczne tylko raz, podczas jego tworzenia.

Jeśli zapomnisz hasła, konieczne będzie jego ponowne utworzenie.

Jeśli CLI są już zainstalowane, sprawdź, czy działają prawidłowo:

```bash
admin@vpsxxxxxx:~$ nova list
+--------------------------------------+------+--------+------------+-------------+------------------------+
| ID                                   | Name | Status | Task State | Power State | Networks               |
+--------------------------------------+------+--------+------------+-------------+------------------------+
| 2278e269-a529-40cc-9a08-794fda9302d3 | deb8 | ACTIVE | -          | Running     | Ext-Net=xx.xxx.xx.xxx |
+--------------------------------------+------+--------+------------+-------------+------------------------+
```

Hasło użytkownika Horizon można zaszyć w kodzie. W tym celu zastąp element:

```bash
echo "Please enter your OpenStack Password: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
```

elementem:

```bash
#echo "Please enter your OpenStack Password: "
#read -sr OS_PASSWORD_INPUT
export OS_PASSWORD="Hasło użytkownika Horizon"
```

Domyślnie trzeba będzie załadować to środowisko po każdym otwarciu sesji w bieżącym środowisku. Można to zrobić na stałe, dodając źródło openrc.sh do pliku bashrc. Wymaga to ustawienia hasła w pliku.


#### **Windows**

Plik OpenRC nie jest przeznaczony do uruchamiania w systemie Windows.

Masz więc do wyboru dwa sposoby na pobranie zmiennych środowiskowych:

- Dostosować plik, modyfikując niektóre polecenia. Zastąpić element **export** elementem **set**:

```bash
set OS_PASSWORD="Hasło użytkownika Horizon"
```

- Zmienne można pobrać bezpośrednio z parametrów systemowych: Panel konfiguracyjny > System > Zaawansowane parametry systemu > Zmienne środowiskowe:


![public-cloud](images/pciopenstackvariables2.png){.thumbnail}

## Sprawdź również

Informacje na temat korzystania z OpenStack: [Dokumentacja OpenStack](https://docs.openstack.org/train/){.external}

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>