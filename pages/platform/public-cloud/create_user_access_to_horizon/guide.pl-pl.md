---
title: 'Dostęp do panelu Horizon'
slug: tworzenie_dostepu_do_interfejsu_horizon
excerpt: 'Aktywacja dostępu do panelu Horizon'
section: 'Zarządzanie w interfejsie Horizon'
order: 1
---

**Ostatnia aktualizacja: 14 listopada 2019**

## Wprowadzenie

Horizon to interfejs graficzny do zarządzania oprogramowaniem OpenStack. Niektóre funkcje są dostępne tylko przy użyciu tego interfejsu.

**Ten przewodnik zawiera informacje o uzyskiwaniu dostępu do interfejsu Horizon.**


## Wymagania początkowe

- aktywny projekt Public Cloud
- dostęp do [Panelu klienta OVHcloud](https://ovh.com/auth/?action=gotomanager){.external}

## W praktyce

### Tworzenie konta użytkownika OpenStack

Aby uzyskać dostęp do interfejsu Horizon, przede wszystkim należy utworzyć konto użytkownika OpenStack. Aby to zrobić, zaloguj się do Panelu klienta i przejdź do sekcji `Public Cloud`{.action} w lewym górnym rogu strony. Na następującym ekranie kliknij `przycisk strzałki`{.action} obok nazwy projektu w lewym górnym rogu ekranu.

![Add user](images/select_project.png){.thumbnail}

Na lewym pasku bocznym w sekcji „Zarządzanie projektami” wybierz pozycję `Użytkownicy i role użytkowników`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Kliknij przycisk `Utwórz użytkownika`{.action}, aby wyświetlić następujące okno podręczne.

![Add user](images/adduser.png){.thumbnail}

Opis użytkownika nie jest nazwą użytkownika. To opisowe informacje ułatwiające zapamiętanie, jakiego rodzaju to użytkownik. Następny ekran służy do przyznawania uprawnień użytkownika. Użytkownik uzyska takie uprawnienia, jakie zostaną wskazane przez znaczenie ich pól wyboru. Ilustruje to poniższa tabela:

![Permissions](images/permissions.png){.thumbnail}

Po przyznaniu uprawnień kliknij przycisk `Potwierdź`{.action}. Zostanie wtedy wyświetlony następujący ekran:

![User_pw](images/user_pw.png){.thumbnail}

Zapisz hasło, ponieważ jest widoczne tylko w tym momencie i nie można go później odzyskać. Jednak w przypadku utraty hasła zawsze można utworzyć nowe. Wystarczy kliknąć ikonę wielokropka (...) w następującym menu i wybrać polecenie `Generuj hasło:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Po utworzeniu użytkownika te dane logowania umożliwiają zalogowanie się do interfejsu Horizon — przy użyciu przycisku `Horizon`{.action} na lewym panelu bocznym.

### Logowanie do OpenStack Horizon

Aby otworzyć menu, kliknij ikonę z trzema kropkami na końcu wiersza (`...`{.action}). Następnie kliknij link `Otwórz OpenStack Horizon`{.action}. Zostanie wyświetlona strona logowania [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}. Aby się zalogować, wpisz `nazwę użytkownika` i hasło.

![Project menu](images/3_H_open_menu.png){.thumbnail}

![Login screen](images/4_H_login_window.png){.thumbnail}

Po zalogowaniu zostanie wyświetlony interfejs OpenStack Horizon:

![Horizon interface](images/5_H_view.png){.thumbnail}


## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.