---
title: 'Usuwanie serwera hosta'
slug: usuwanie-serwera-hosta
excerpt: 'Dowiedz się, jak usunąć serwer hosta z infrastruktury Private Cloud'
legacy_guide_number: '1442308'
section: 'Funkcjonalności OVH'
---

**Ostatnia aktualizacja z dnia 24-07-2020**

## Wprowadzenie

W niektórych przypadkach może zaistnieć potrzeba usunięcia serwera hosta z Twojego klastra, np. jeśli jest nieużywany i chcesz go zwrócić lub jeśli chcesz zacząć korzystać z wyższej gamy serwerów. 

**Niniejszy przewodnik wyjaśnia, jak usunąć w bezpieczny sposób hosta z Twojej infrastruktury Private Cloud.**

## Wymagania początkowe

* Posiadanie oferty [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}
* Dostęp do interfejsu zarządzania vSphere


## W praktyce

Usunięcie hosta składa się z dwóch etapów: przełączenie serwera w tryb konserwacji i usunięcie serwera.

### Włączenie trybu konserwacji

Po zalogowaniu się do klienta vSphere przejdź do listy Twoich serwerów hostów i klastrów. Wybierz odpowiedni host, klikając prawym przyciskiem myszy, następnie wybierz `Maintenance Mode`{.action} i `Enter Maintenance Mode`{.action}. Jeśli wirtualne maszyny działają na tym serwerze, zostaną automatycznie zarejestrowane na innym serwerze hosta w Twoim klastrze (przy włączonych trybach HA i DRS).

![Włączenie trybu konserwacja](images/removehost01.png){.thumbnail}

Włączenie trybu konserwacji wymaga dodatkowego potwierdzenia. Zapoznaj się z komunikatem i potwierdź operację.

![Potwierdzenie trybu konserwacji](images/removehost02.png){.thumbnail}


Możesz monitorować postęp uruchamiania trybu konserwacji w sekcji `Recent Tasks`.

![Monitoring trybu konserwacji](images/removehost03.png){.thumbnail}


### Usunięcie serwera hosta

Serwer hosta znajduje się teraz w trybie konserwacji. Kliknij prawym przyciskiem myszy, po czym wybierz `OVHcloud`{.action}, a następnie `Remove this host`{.action}

![Usuń serwer hosta](images/removehost04.png){.thumbnail}

W oknie, które się pojawi potwierdź usunięcie za pomocą przycisku `Next`{.action}.

![Potwierdzenie usunięcia hosta](images/removehost05.png){.thumbnail}

Żądanie usunięcia hosta jest w tym momencie przetwarzane.

![Potwierdzenie usunięcia hosta](images/removehost06.png){.thumbnail}

Możesz monitorować postęp usuwania serwera hosta w sekcji `Recent Tasks`.

![Zadanie monitorowania usunięcia hosta](images/removehost07.png){.thumbnail}

W ciągu kilku minut serwer hosta zostanie usunięty i nie będzie już widoczny. 

> [!primary]
>
> Jeśli w międzyczasie jakiekolwiek katalogi lub pliki zostaną dodane do lokalnej pamięci masowej serwera hosta, usunięcie zostanie zablokowane z powodu błędu. Jedynie podstawowe katalogi oraz pliki vSwap nie blokują tej operacji.
> 


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
