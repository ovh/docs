---
title: Cloud Archive Swift - Zarzadzaj swoimi archiwami za pomoca interfejsu Swift (Cyberduck)
excerpt: Przewodnik ten pokazuje, jak zarzadzac usuga Public Cloud Archive.
updated: 2021-06-18
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 18-06-2021**

## Wprowadzenie

Object Storage to rozwiązanie do przechowywania danych zarządzane głównie przez API OpenStack.

Jeśli nie chcesz zarządzać przestrzenią dyskową za pomocą linii poleceń, możesz korzystać z graficznego interfejsu opartego na API OpenStack. Cyberduck to program Swift.

W Internecie można odnaleźć inne interfejsy. Konfiguracja jest podobna do tej przedstawionej w tym przewodniku.

**Przewodnik ten wyjaśnia, jak skonfigurować program Cyberduck, aby zarządzać usługą Object Storage za pomocą graficznego interfejsu opartego na API Openstack.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## Wymagania początkowe

- Pobierz i zainstaluj [Cyberduck](https://cyberduck.io/).
- Posiadanie identyfikatorów użytkowników (*OS_USERNAME*) i projektów (*OS_PROJECT_NAME* lub *OS_ANT_NAME*), które można uzyskać, pobierając plik "OpenRC" z menu [Users and Roles](/pages/public_cloud/compute/loading_openstack_environment_variables#etap-1-zgromadzenie-zmiennych) w Twoim [Panelu klienta Public Cloud OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Posiadanie hasła użytkownika OpenStack

Jeśli nie znasz hasła użytkownika OpenStack, możesz je zmienić zgodnie z [tym przewodnikiem](/pages/public_cloud/compute/change_openstack_user_password_in_horizon).

## W praktyce

**Niniejszy przewodnik został zaktualizowany na podstawie wersji 7.9.2 Cyberduck dla MacOS.**

> [!primary]
>
> W zależności od źródła pobrania pliku OpenRC (w interfejsie Horizon lub w Panelu klienta OVHcloud) Twój identyfikator projektu może zostać nazwany *OS_PROJECT_NAME* lub *OS_ANT_NAME*.
>

W Cyberduck połącz się z OpenStack Swift (Keystone 3).

![pca-cyberduck](images/login.png){.thumbnail}

Wpisz następujące informacje:

- Serwer: auth.cloud.ovh.net
- Project:Domain:Username: OS_PROJECT_NAME:default:OS_USERNAME
- Hasło: hasło użytkownika OpenStack

Kliknij `Połącz`{.action}. Po zalogowaniu będziesz miał dostęp do drzewa swoich folderów i plików.

![pca-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> W przypadku problemów z logowaniem możesz pobrać profil połączenia Cyberduck dla OpenStack Swift (Keystone 3) i otworzyć go za pomocą Cyberduck.
> <br><br>Kliknij prawym przyciskiem myszy <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>tutaj i kliknij "Zapisz cel łącza jako"</a>, aby pobrać profil.
>

## Sprawdź również

[Dokumentacja Cyberduck](https://trac.cyberduck.io/wiki/help/en){.external}

[Pierwsze kroki z API Swift](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
