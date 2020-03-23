---
itle: 'Tworzenie i usuwanie użytkownika OpenStack'
slug: tworzenie-i-usuwanie-uzytkownika-openstack
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 06-12-2019**

## Wprowadzenie
Aby korzystać z interfejsów API Horizon lub OpenStack, należy utworzyć użytkownika OpenStack. Dowiedz się, jak utworzyć i usunąć użytkownika.

Nie ma ograniczenia liczby użytkowników OpenStack.


## Wymagania początkowe
Projekt Public Cloud — jeśli to pierwszy projekt, musi być utworzony co najmniej 7 dni wcześniej (w razie potrzeby skontaktuj się z zespołem pomocy technicznej i dowiedz, czy można odblokować projekt wcześniej). To ograniczenie nie dotyczy innych projektów.

## W praktyce

### Tworzenie użytkownika OpenStack
Aby uzyskać dostęp do interfejsu Horizon, przede wszystkim należy utworzyć konto użytkownika OpenStack. Aby to zrobić, zaloguj się do Panelu klienta i przejdź do sekcji `Public Cloud`{.action} w lewym górnym rogu strony. Na następującym ekranie kliknij `przycisk strzałki`{.action} obok nazwy projektu w lewym górnym rogu ekranu.

![Add user](images/select_project.png){.thumbnail}

Na lewym pasku bocznym w sekcji „Zarządzanie projektami” wybierz pozycję `Użytkownicy i role użytkowników`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Kliknij przycisk `Utwórz użytkownika`{.action}, aby wyświetlić następujące okno podręczne.

![Add user](images/adduser.png){.thumbnail}

Opis użytkownika nie jest nazwą użytkownika. To opisowe informacje ułatwiające zapamiętanie, jakiego rodzaju to użytkownik. Następny ekran służy do przyznawania uprawnień użytkownika. Użytkownik uzyska takie uprawnienia, jakie zostaną wskazane przez zaznaczenie ich pól wyboru. Ilustruje to poniższa tabela:

![Permissions](images/permissions.png){.thumbnail}

Po przyznaniu uprawnień kliknij przycisk `Potwierdź`{.action}. Zostanie wtedy wyświetlony następujący ekran:

![User_pw](images/user_pw.png){.thumbnail}

Zapisz hasło, ponieważ jest widoczne tylko w tym momencie i nie można go później odzyskać. Jednak w przypadku utraty hasła zawsze można utworzyć nowe. Wystarczy kliknąć ikonę wielokropka (...) w następującym menu i wybrać polecenie `Generuj hasło:`{.action}

![Generate](images/generatepw.png){.thumbnail}

Po utworzeniu użytkownika te dane logowania umożliwiają zalogowanie się do interfejsu Horizon — przy użyciu przycisku `Horizon`{.action} na lewym pasku bocznym.

### Usuwanie użytkownika OpenStack
Użytkownika OpenStack można usunąć bezpośrednio w Panelu klienta OVHcloud (Chmura → Serwery → Nazwa projektu Public Cloud). W sekcji OpenStack po prawej stronie jest widoczna mała ikona kosza:


![public-cloud](images/delete.png){.thumbnail}

Po prostu kliknij ją, a użytkownik zostanie usunięty w kilka sekund.

> [!alert]
>
> Użytkownik zostaje trwale usunięty i to powoduje unieważnienie wszystkich
> powiązanych tokenów — nawet tych, których ważność jeszcze nie wygasła.
> 

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.