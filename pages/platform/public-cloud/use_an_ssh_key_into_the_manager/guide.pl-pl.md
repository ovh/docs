---
title: 'Zarządzanie kluczami SSH w usłudze Public Cloud'
excerpt: 'Uproszczenie logowania, komunikacja z serwerem w uwierzytelniony i zaszyfrowany sposób.'
slug: zarzazdzanie-kluczami-SSH-w-public-cloud
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 04-12-2019**

## Wprowadzenie
SSH to protokół umożliwiający dostęp do serwera oraz uwierzytelnioną i zaszyfrowaną komunikację z nim.

Klucz SSH można dodać w interfejsie Public Cloud na dwa sposoby:

- Pierwsza, bardziej bezpośrednia metoda polega na dodaniu klucza podczas tworzenia instancji.
- Druga metoda polega na dodaniu klucza z menedżera kluczy SSH.

### Wymagania początkowe

- [klucz SSH](../howto_create_an_ssh_key/guide.en-gb.md){.ref}


## Tworzenie instancji
Aby utworzyć instancję, w interfejsie klienta Public Cloud kliknij pozycję `Utwórz instancję`{.action} w menu Instancje w sekcji `Środowisko obliczeniowe`{.action} (po lewej stronie).

![Add a server](images/compute.png){.thumbnail}

Podczas tworzenia instancji (w kroku 3) zostanie wyświetlone pytanie o klucz SSH.

![Add a server](images/selectkey.png){.thumbnail}

Jeśli już masz klucze, po prostu wybierz jeden z nich.

Jeśli chcesz dodać klucz, kliknij przycisk `Dodaj klucz`{.action}. W polu „Nazwa klucza SSH” wpisz nazwę klucza i następnie wklej klucz w polu „Klucz SSH”. Aby ukończyć proces, kliknij przycisk `Dodaj klucz`{.action}.

![Add a key](images/addkey.png){.thumbnail}

## Korzystając z narzędzia zarządzania kluczami

Po wybraniu pozycji „Klucze SSH” z lewego menu projektu zostanie wyświetlona karta „Klucze SSH”.

![Add a key](images/addkeymenu.png){.thumbnail}

Kliknij przycisk `Dodaj klucz`{.action}, a następnie — po wpisaniu nazwy i wklejeniu klucza w polu — kliknij przycisk `Dodaj ten klucz`{.action}.

![Add a key](images/addkeymenu1.png){.thumbnail}

Klucz będzie dostępny do użycia podczas [tworzenia następnej instancji w chmurze](../first_steps_start_my_first_server_within_3_minutes/guide.en-gb.md){.ref}.
      