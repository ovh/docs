---
title: Zarządzanie snapshotami instancji w horizon
excerpt: Jak zarządzać snapshotami instancji w interfejsie Horizon.
slug: zarzadzanie_snapshotami_instancji_w_interfejsie_horizon
legacy_guide_number: g1770
section: Zarządzanie w interfejsie Horizon
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 02/02/2022**

## Wprowadzenie
W trakcie swojej działalności prawdopodobnie będziesz wykonywać kopie zapasowe danych, konfiguracji i całych instancji. 
Możliwe jest tworzenie zrzutów instancji, które będą mogły zostać wykorzystane do przywracania wcześniejszej konfiguracji lub do tworzenia dokładnej kopii instancji. 


**Dowiedz się, jak zarządzać snapshotami w interfejsie OpenStack Horizon.**

## Wymagania początkowe

- Utworzenie [instancji Public Cloud](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/#krok-3-tworzenie-instancji) na Twoim koncie OVHcloud
- [Dostęp do interfejsu Horizon](../tworzenie_dostepu_do_interfejsu_horizon/)

## W praktyce

### Tworzenie snapshota

Zaloguj się do interfejsu Horizon i upewnij się, czy jesteś w odpowiednim regionie. I możecie to sprawdzić w lewym górnym rogu. 

![Wybór regionu](images/region2021.png){.thumbnail}

Kliknij menu `Compute`{.action} po lewej stronie, a następnie kliknij `Instances`{.action}. Następnie kliknij `Create Snapshot`{.action} w wierszu odpowiedniej instancji.

![Tworzenie kopii zapasowej snapshot](images/createsnapshot.png){.thumbnail}

W oknie, które się wyświetla wprowadź wymagane informacje:

* Snapshot Name: zdefiniuj nazwę snapshota i kliknij `Create Snapshot`{.action}.

![Tworzenie kopii zapasowej snapshot](images/createsnapshot2.png){.thumbnail}

Snapshot zostanie wyświetlony w sekcji `Images`{.action}. Dlatego zalecamy nadawanie każdej kopii zapasowej snapshota odpowiedniej nazwy.

### Usunięcie snapshota

W interfejsie horizon kliknij menu `Compute`{.action} po lewej stronie, a następnie kliknij `Image`{.action}.

Następnie kliknij rozwijaną strzałkę obok snapshota, który chcesz usunąć i kliknij `Delete Image`{.action}. Potwierdź usunięcie snapshota.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>


