---
title: 'Zmienne środowiskowe OpenStack'
excerpt: 'Zarządzaj środowiskiem OpenStack z linii komend'
updated: 2023-11-29
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Pobranie zmiennych środowiskowych OpenStack na Twoje stanowisko umożliwi Ci korzystanie z interfejsu API OpenStack i zastosowanie go do zarządzania infrastrukturą.

## Wymagania początkowe

- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Utworzenie użytkownika OpenStack. Informacje na ten temat znajdziesz [w tym przewodniku](create_and_delete_a_user1.).
- Przygotowanie środowiska do korzystania z OpenStack. Informacje na ten temat znajdziesz w tym przewodniku: [Przygotowanie środowiska do korzystania z API OpenStack](prepare_the_environment_for_using_the_openstack_api1.).

## W praktyce

### Etap 1: Zgromadzenie zmiennych

Aby zgromadzić zmienne środowiskowe, możesz pobrać utworzony wcześniej plik OpenRC użytkownika OpenStack.

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do sekcji `Public Cloud`{.action} i wybierz Twój projekt Public Cloud na górze po lewej stronie.
<br> W rubryce `Project Management` kliknij `Users & Roles`{.action}, po prawej stronie nazwy użytkownika kliknij symbol `...`{.action} i wybierz pozycję `Pobierz plik RC OpenStack`{.action}.

![openstack-variables](pciopenstackvariables1e.png){.thumbnail}

Plik OpenRC odpowiada użytkownikowi, a także strefie. Nie można zarządzać kilkoma strefami w jednym pliku.

### Etap 2: Pobranie zmiennych

#### **Linux**

* Otwórz terminal lub zaloguj się na konto użytkownika, który będzie wykonywał wywołania przez API OpenStack.
* Załaduj treść pliku do bieżącego środowiska. Zostanie wyświetlony monit o podanie hasła odpowiedniego użytkownika Horizon.

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

Jak wskazano w [tym przewodniku](create_and_delete_a_user1.), hasło jest widoczne tylko raz, podczas jego tworzenia.

Jeśli zapomnisz hasła, konieczne będzie jego ponowne utworzenie.

Jeśli CLI są już zainstalowane, sprawdź, czy działają prawidłowo:

```bash
(env)$ openstack server list
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| ID                                   | Name       | Status | Networks                                      | Image     | Flavor |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| 8d7c67c0-38e1-4091-88d5-c14844c1f455 | b2-7-gra11 | ACTIVE | Ext-Net=2001:xxxx:xxx:xxx::xxxx, xx.xxx.xx.xx | Debian 12 | b2-7   |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
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

![public-cloud](pciopenstackvariables2.png){.thumbnail}

## Sprawdź również

Informacje na temat korzystania z OpenStack: [Dokumentacja OpenStack](https://docs.openstack.org/){.external}

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.