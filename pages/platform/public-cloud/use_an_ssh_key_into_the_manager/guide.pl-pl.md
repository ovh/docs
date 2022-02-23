---
title: 'Zarządzanie kluczami SSH w usłudze Public Cloud'
excerpt: 'Uproszczenie logowania, komunikacja z serwerem w uwierzytelniony i zaszyfrowany sposób.'
slug: zarzazdzanie-kluczami-SSH-w-public-cloud
section: 'Zarządzanie w Panelu klienta OVH'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja: 10-02-2022**

## Wprowadzenie

SSH to protokół umożliwiający dostęp do serwera oraz uwierzytelnioną i zaszyfrowaną komunikację z nim.

**Dowiedz się, jak korzystać z kluczy SSH w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Utworzenie [projektu Public Cloud](https://docs.ovh.com/pl/public-cloud/utworz_projekt_public_cloud/) w Panelu klienta
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Posiadanie [klucz SSH](../public-cloud-pierwsze-kroki/)


> [!primary]
>
Jeśli chcesz zapisać klucz SSH w Panelu klienta OVHcloud, zalecamy użycie szyfrowania RSA lub ECDSA. ED25519 nie jest aktualnie obsługiwany.
>

Klucz SSH można dodać w interfejsie Public Cloud na dwa sposoby:

- Pierwsza, bardziej bezpośrednia metoda polega na dodaniu klucza podczas tworzenia instancji.
- Druga metoda polega na dodaniu klucza z menedżera kluczy SSH.

### Tworzenie instancji

Aby utworzyć instancję, w interfejsie klienta Public Cloud kliknij pozycję `Utwórz instancję`{.action} w menu `Instances`{.action} znajduje się w sekcji **Compute** menu z lewej strony.

![Add a server](images/compute.png){.thumbnail}

Podczas tworzenia instancji (w kroku 3) zostanie wyświetlone pytanie o klucz SSH.

![Add a server](images/selectkey.png){.thumbnail}

Jeśli już masz klucze, po prostu wybierz jeden z nich.

Jeśli chcesz dodać klucz, kliknij przycisk `Dodaj klucz`{.action}. W polu „Nazwa klucza SSH” wpisz nazwę klucza i następnie wklej klucz w polu „Klucz SSH”. Aby ukończyć proces, kliknij przycisk `Dodaj klucz`{.action}.

![Add a key](images/addkey.png){.thumbnail}

### Korzystając z narzędzia zarządzania kluczami

Po wybraniu pozycji „Klucze SSH” z lewego menu projektu zostanie wyświetlona karta „Klucze SSH”.

![Add a key](images/addkeymenu.png){.thumbnail}

Kliknij przycisk `Dodaj klucz`{.action}, a następnie — po wpisaniu nazwy i wklejeniu klucza w polu — kliknij przycisk `Dodaj ten klucz`{.action}.

![Add a key](images/addkeymenu1.png){.thumbnail}

Klucz będzie dostępny do użycia podczas [tworzenia następnej instancji w chmurze](../rozpoczecie_pracy_z_instancja_public_cloud/){.external}.
      
## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.