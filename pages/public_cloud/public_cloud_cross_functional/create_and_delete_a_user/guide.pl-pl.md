---
title: "Zarządzanie użytkownikami OpenStack"
excerpt: Dowiedz się, jak zarządzać użytkownikami OpenStack w Panelu klienta OVHcloud i interfejsie Horizon
updated: 2025-04-28
---

## Wprowadzenie

Dostęp do interfejsu Horizon i API OpenStack odbywa się za pośrednictwem kombinacji identyfikatora i hasła zwanych "*OpenStack users*". Możesz utworzyć tylu użytkowników OpenStack, ilu potrzebujesz i przyznać im różne prawa dostępu.

W interfejsie Horizon możesz zdefiniować hasło dla każdego użytkownika. Uwaga, zmiana hasła do konta użytkownika skutkuje natychmiastowym odwołaniem poprzedniego hasła.

**Niniejszy przewodnik wyjaśnia, jak zarządzać użytkownikami OpenStack w Panelu klienta OVHcloud i w interfejsie Horizon.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/NC69nrb6QlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wymagania początkowe

- Projekt [Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) na Twoim koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](/links/manager)

## W praktyce

### Tworzenie użytkownika OpenStack

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. W menu po lewej stronie kliknij `Użytkownicy i role`{.action} w rubryce **Ustawienia**. 

Kliknij przycisk `Utwórz użytkownika`{.action}.

![User roles](images/users_roles.png){.thumbnail}

Opis użytkownika to nie nazwa użytkownika OpenStack, ale opis, który należy wpisać, aby pomóc Ci w organizacji użytkowników i ich praw. Wprowadź opis i kliknij `Dalej`{.action}.

![Add user](images/adduser.png){.thumbnail}

Możesz teraz wybrać role, które reprezentują uprawnienia, które uzyska użytkownik. W przypadku każdego zaznaczonego kratka użytkownik uzyska uprawnienia dostępu zgodnie z poniższą tabelą.

![Uprawnienia](images/permissions.png){.thumbnail}

Kliknij na `Zatwierdź`{.action}, aby utworzyć użytkownika OpenStack. Identyfikator klienta i hasło są automatycznie generowane i wyświetlane w Panelu klienta.

![User_pw](images/user_pw.png){.thumbnail}

Upewnij się, czy hasło jest zapisywane tylko w tym momencie w zielonej ramce w menedżerze haseł. Hasło nie może zostać później pobrane. Możesz jednak utworzyć nowe hasło, klikając `...`{.action} i wybierając `Odnów hasło`{.action}.

![Generate](images/generatepw.png){.thumbnail}

Po utworzeniu użytkownika OpenStack będziesz mógł użyć jego danych identyfikacyjnych, aby zalogować się [do interfejsu Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) klikając link `Horizon`{.action} w menu po lewej stronie.

### Zmiana hasła użytkownika OpenStack

Utworzenie hasła OpenStack możliwe jest po zalogowaniu do interfejsu [OpenStack Horizon](https://horizon.cloud.ovh.net):

![Logowanie do interfejsu Horizon](images/1_H_login_window.png){.thumbnail}

Identyfikator użytkownika Horizon wyświetla się w prawym górnym rogu w interfejsie Horizon. Kliknij Twój identyfikator, aby wyświetlić menu z dostępnymi opcjami.
Wybierz `Settings`{.action}, a następnie po lewej stronie `Change password`{.action}:

![Zmiana hasła](images/2_H_pass_change_option.png){.thumbnail}

W pierwszym polu wpisz aktualne hasło, a w dwóch kolejnych polach wpisz nowe hasło.

> [!primary]
>
> Zmieniając hasło, upewnij się, że zostały spełnione następujące kryteria:
>
> - hasło musi zawierać minimum 8 znaków;
> - hasło może zawierać maksymalnie 30 znaków;
> - hasło musi zawierać co najmniej jedną wielką literę;
> - hasło musi zawierać co najmniej jedną małą literę;
> - hasło musi zawierać co najmniej jedną cyfrę;
> - hasło powinno zawierać tylko cyfry i litery.
>

Na koniec zatwierdź nowe hasło, klikając `Change`{.action}.

![Parametryzacja hasła](images/3_H_set_new_passord.png){.thumbnail}

Pamiętaj, że zmiana hasła do konta użytkownika skutkuje natychmiastowym odwołaniem poprzedniego hasła.

### Usuwanie użytkownika OpenStack

Użytkownik OpenStack zostaje usunięty [Panelu client OVHcloud](/links/manager). W menu po lewej stronie kliknij `Użytkownicy i role`{.action} w rubryce **Ustawienia**. 

![public-cloud](images/delete.png){.thumbnail}

Kliknij `...`{.action} i wybierz `Usuń`{.action}.

> [!warning]
>
> Usunięcie użytkownika jest definitywne i spowoduje unieważnienie wszystkich przypisanych tokenów, w tym tych, których data wygaśnięcia nie została jeszcze przekroczona.
> 

## Sprawdź również

[Prezentacja Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Dołącz do [grona naszych użytkowników](/links/community).
