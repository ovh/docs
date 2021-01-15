---
title: 'Uruchomienie testu obciążeniowego infrastruktury'
slug: tryb-resilience
excerpt: 'Dowiedz się, jak uruchomić tryb Resilience i przeprowadzić test obciążenia infrastruktury'
legacy_guide_number: '7766742'
section: 'Funkcjonalności OVHcloud'
---

**Ostatnia aktualizacja z dnia 26-10-2018**

## Wprowadzenie

Tryb Resilience jest opracowanym przez OVH narzędziem, które symuluje awarię jednego z Twoich hostów (_serwerów_), umożliwiają przeprowadzenie testu obciążeniowego infrastruktury. Dzięki temu możesz sprawdzić, czy system typu *High Availability (HA)* i *Fault Tolerance (FT)* działa poprawnie w Twoim klastrze, **który wdrażasz**.

**Niniejszy przewodnik wyjaśnia, jak uruchomić tryb Resilience i przeprowadzić test obciążenia infrastruktury.**

## Wymagania początkowe

* Posiadanie oferty [Private Cloud](https://www.ovh.pl/private-cloud/){.external}
* Dostęp do interfejsu zarządzania vSphere



## W praktyce

Na wstępie sprawdź, czy spełnione są następujące warunki: 

- serwer-host musi być skonfigurowany w klastrze;
- opcja *High Availability* (HA) musi być aktywowana;
- inny serwer host w klastrze musi być dostępny i działać prawidłowo.

> [!warning]
>
> Ten test należy wykonywać w **środowisku testowym**. Nie przeprowadzaj tego typu operacji w **środowisku produkcyjnym**.
> 


### Uruchomienie testu obciążeniowego infrastruktury

Po zalogowaniu się do klienta vSphere przejdź do listy Twoich serwerów hostów i klastra. Wybierz odpowiedni serwer host, klikając prawym przyciskiem myszy. Następnie kliknij `OVH Private Cloud`{.action} i `Resilience`{.action}.

![Uruchomienie testu obciążeniowego poprzez kliknięcie hosta prawym przyciskiem myszy](images/resilience_01.png){.thumbnail}

Po sprawdzeniu, czy wszystkie wymagania początkowe są spełnione, kliknij przycisk `Dalej`{.action}.

![Weryfikacja wymagań początkowych i zatwierdzenie](images/resilience_02.png){.thumbnail}

Przed uruchomieniem testu konieczne jest zatwierdzenie warunków korzystania z usługi. Po zaznaczeniu kratki `I accept the terms of the failure simulation agreement`{.action} kliknij przycisk `Next`{.action}.

![Zatwierdzenie warunków korzystania z usługi](images/resilience_03.png){.thumbnail}

Polecenie uruchomienia testu obciążeniowego jest w toku.

![Aktywacja testu obciążeniowego infrastruktury w toku](images/resilience_04.png){.thumbnail}

W ciągu kilku minut serwer host stanie się niedostępny.

![Host niedostępny](images/resilience_05.png){.thumbnail}


### Zakończenie testu obciążeniowego infrastruktury

Aby zakończyć symulację awarii, kliknij ponownie tryb Resilience.

![Zakończenie symulacji](images/resilience_06.png){.thumbnail}

Polecenie zakończenia testu obciążenia infrastruktury.

![Koniec testu obciążeniowego infrastruktury w toku](images/resilience_07.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.