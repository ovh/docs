---
title: Zarządzanie snapshotami instancji w horizon
excerpt: Jak zarządzać snapshotami instancji w interfejsie Horizon.
updated: 2022-01-31
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie
W trakcie swojej działalności prawdopodobnie będziesz wykonywać kopie zapasowe danych, konfiguracji i całych instancji. 
Możliwe jest tworzenie zrzutów instancji, które będą mogły zostać wykorzystane do przywracania wcześniejszej konfiguracji lub do tworzenia dokładnej kopii instancji. 

**Dowiedz się, jak zarządzać snapshotami w interfejsie OpenStack Horizon.**

## Wymagania początkowe

- Utworzenie [instancji Public Cloud](public-cloud-first-steps#krok-3-tworzenie-instancji.) na Twoim koncie OVHcloud
- [Dostęp do interfejsu Horizon](introducing_horizon1.)

## W praktyce

### Tworzenie snapshota

Zaloguj się do interfejsu Horizon i upewnij się, czy jesteś w odpowiednim regionie. I możecie to sprawdzić w lewym górnym rogu. 

![Wybór regionu](managing_snapshots_in_horizon_images_region2021.png){.thumbnail}

Kliknij menu `Compute`{.action} po lewej stronie, a następnie kliknij `Instances`{.action}. Następnie kliknij `Create Snapshot`{.action} w wierszu odpowiedniej instancji.

![Tworzenie kopii zapasowej snapshot](createsnapshot.png){.thumbnail}

W oknie, które się wyświetla wprowadź wymagane informacje:

* Snapshot Name: zdefiniuj nazwę snapshota i kliknij `Create Snapshot`{.action}.

![Tworzenie kopii zapasowej snapshot](createsnapshot2.png){.thumbnail}

Snapshot zostanie wyświetlony w sekcji `Images`{.action}. Dlatego zalecamy nadawanie każdej kopii zapasowej snapshota odpowiedniej nazwy.

### Usunięcie snapshota

W interfejsie horizon kliknij menu `Compute`{.action} po lewej stronie, a następnie kliknij `Image`{.action}.

Następnie kliknij rozwijaną strzałkę obok snapshota, który chcesz usunąć i kliknij `Delete Image`{.action}. Potwierdź usunięcie snapshota.

![public-cloud](deletesnapshot.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

