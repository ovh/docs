---
title: 'Diagnostyka usterek sprzętowych serwera dedykowanego'
slug: diagnostyka-usterek-sprzetowych-serwera-dedykowanego
excerpt: 'Dowiedz się, jak przeprowadzić diagnostykę uszkodzeń fizycznych serwera dedykowanego'
section: 'Diagnostyka i tryb Rescue'
---

**Ostatnia aktualizacja z dnia 05-08-2018**

## Wprowadzenie


Eksploatacja serwera może z czasem powodować jego fizyczne uszkodzenia, a to z kolei może być przyczyną błędów. Dlatego Twój serwer wyposażony jest w kilka narzędzi diagnostycznych umożliwiających identyfikację uszkodzonych komponentów.

**Dowiedz się, jak przeprowadzić diagnostykę sprzętową serwera dedykowanego.**


## Wymagania początkowe

* Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external}
* Uruchomienie serwera w [trybie Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/){.external}


## W praktyce

### Korzystanie z interfejsu graficznego trybu Rescue

Po ponownym uruchomieniu Twojego serwera w [trybie Rescue](https://docs.ovh.com/pl/dedicated/ovh-rescue/) otrzymasz e-mail zawierający dane dostępowe do usługi. W wiadomości tej otrzymasz również link do interfejsu graficznego trybu Rescue. Będzie on wyglądał analogicznie: *https://IP_serwera:444*.

Po kliknięciu na link zostaniesz przekierowany do interfejsu.

![Interfejs sieciowy](images/rescue-mode-04.png){.thumbnail}


### Wykonanie wszystkich testów sprzętu

W interfejsie możesz kliknąć przycisk `Uruchom wszystkie testy`{.action}, co spowoduje jednoczesne uruchomienie wszystkich dostępnych testów. 

![Uruchom wszystkie testy](images/rescue-mode-042.png){.thumbnail}


### Wykonanie pojedynczych testów sprzętu

W interfejsie możesz wykonać testy:

- procesora lub procesorów;
- połączenia sieciowego;
- pamięci RAM;
- partycji dysku.

Możesz również wyświetlić logi SMART serwera, które zawierają szczegółowe informacje o dysku lub dyskach twardych.

 
#### Procesory

Test procesora polega na sprawdzeniu, czy procesor w Twoim serwerze działa poprawnie. Na prawidłowe przeprowadzenie testu potrzeba około 30 minut.  Jeśli test procesora nie zostanie zakończony pomyślnie lub serwer przestanie odpowiadać podczas testu, oznacza to, że procesor jest uszkodzony.

Aby rozpocząć test, kliknij przycisk, jak pokazano na poniższym obrazku. 

![Test procesora](images/processors.png){.thumbnail}

#### Połączenie z siecią

Test połączenia z siecią pozwala sprawdzić przepustowość wewnętrzną i zewnętrzną. Aby rozpocząć test, kliknij przycisk, jak pokazano na poniższym obrazku. 

![Test sieci](images/network-connection.png){.thumbnail}

#### Pamięć RAM

Test pamięci pozwala sprawdzić integralność modułów RAM w Twoim serwerze. Jeśli podczas testu serwer przestanie odpowiadać lub test nie zakończy się pomyślnie, oznacza to, że jeden lub kilka modułów RAM jest uszkodzonych.

Aby rozpocząć test, kliknij przycisk, jak pokazano na poniższym obrazku. 

![Test pamięci](images/memory.png){.thumbnail}

#### Partycje dysku

Test partycji składa się z testu dostępu do dysku oraz weryfikacji systemu plików. Test dostępu do dysku pozwala sprawdzić, czy system może komunikować się z dyskami twardymi w Twoim serwerze. Do weryfikacji systemu plików służy komenda `fsck -fy`.

> \[!warning]
>
> Przeprowadzenie weryfikacji systemu plików na uszkodzonym dysku twardym może spowodować utratę danych.
>

![Test dysku](images/partitions.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.