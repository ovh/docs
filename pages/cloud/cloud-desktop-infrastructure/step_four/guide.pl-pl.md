---
title: Etap 4 - udostępnianie pulpitów użytkownikom
slug: udostepnianie-pulpitu
excerpt: Dowiesz się, jak dodawać użytkowników do Twoich wirtualnych pulpitów
section: Wdrożenie
order: 4
---

**Ostatnia aktualizacja dnia 2018-03-19**

## Wprowadzenie

Po [utworzeniu puli](https://docs.ovh.com/pl/cloud-desktop-infrastructure/jak-utworzyc-pule/){.external} możesz nadać użytkownikom uprawnienia dostępu do poszczególnych pulpitów.

**Niniejszy przewodnik wyjaśnia, jak dodawać użytkowników.**


## Wymagania początkowe

- Utworzenie kont użytkowników w Active Directory, jeśli wcześniej [została utworzona relacja zaufania](https://docs.ovh.com/fr/cloud-desktop-infrastructure/approval-ad/){.external} lub utworzenie kont użytkowników w [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Dostęp do interfejsu VMware Horizon 7.1.


## W praktyce

### Zarządzanie użytkownikami

W momencie uruchomienia platformy CDI (Cloud Desktop Infrastructure) utworzonych zostaje 10 użytkowników o nazwach *vdiXX*, gdzie XX oznacza kolejny numer użytkownika. Dane dostępowe wysyłane są w e-mailu informującym o udostępnieniu platformy.

Poniżej znajdziesz opis tworzenia nowych użytkowników: [Tworzenie użytkowników](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-users/){.external}


## Udostępnienie wirtualnych pulpitów użytkownikom

Operacje wykonywane są w VMware Horizon 7.1. W zakładce `Entitlements`{.action} możesz dodać użytkowników do puli i nadać im uprawnienia do dostępu do wirtualnych pulpitów.

- Kliknij `Add Entitlement`{.action}, aby otworzyć menu.

![Add Entitlement](images/1200.png){.thumbnail}

- Wyszukaj i zaznacz użytkownika lub użytkowników, których chcesz dodać do puli, następnie zatwierdź. 

![Wybór użytkownika](images/1201.png){.thumbnail}


Użytkownicy dołączeni do puli mogą teraz [logować się i pracować na wirtualnych pulpitach](https://docs.ovh.com/pl/cloud-desktop-infrastructure/logowanie-wirtualny-pulpit/){.external}.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.