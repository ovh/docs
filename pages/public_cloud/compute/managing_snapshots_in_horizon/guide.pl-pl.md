---
title: Zarządzanie snapshotami instancji w horizon
excerpt: Jak zarządzać snapshotami instancji w interfejsie Horizon.
updated: 2024-09-06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

W trakcie swojej działalności prawdopodobnie będziesz wykonywać kopie zapasowe danych, konfiguracji i całych instancji. 
Możliwe jest tworzenie zrzutów instancji, które będą mogły zostać wykorzystane do przywracania wcześniejszej konfiguracji lub do tworzenia dokładnej kopii instancji. 

**Dowiedz się, jak zarządzać snapshotami w interfejsie OpenStack Horizon.**

## Wymagania początkowe

- Utworzenie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) na Twoim koncie OVHcloud
- [Dostęp do interfejsu Horizon](/pages/public_cloud/compute/introducing_horizon)

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

### Przywracanie snapshota

Możesz przywrócić snapshot, tworząc z niego nową instancję.

W interfejsie Horizon kliknij menu `Compute`{.action} po lewej stronie, a następnie `Images`{.action}.

Kliknij `Launch`{.action} obok wybranego snapshota.

![restore snapshot](images/restoresnapshot.png){.thumbnail}

W oknie podręcznym musi być zaznaczona pewna liczba opcji, aby zakończyć przywracanie snapshota.

> [!tabs]
> **Details**
>>
>> **Nazwa instancji (*Instance name*):** Wpisz wybraną nazwę instancji.<br>
>> **Count:** Wybierz liczbę instancji, które chcesz uruchomić z kopii zapasowej snapshot.<br><br>
>>![Snapshot](images/restoresnapshot1.png){.thumbnail}<br>
>>
> **Flavor**
>>
>> Wybierz odpowiedni *flavor*. Upewnij się, że wybierasz wersję z zasobami równymi lub większymi niż rozmiar obrazu (snapshot).<br><br>
>>![network](images/restoresnapshot2.png){.thumbnail}<br>
>>
> **Sieć (*Network*)**
>>
>> Wybierz sieć publiczną (Ext-Net), którą chcesz przypisać do instancji.<br><br>
>>![network](images/restoresnapshot3.png){.thumbnail}<br>
>>
> **Keypair**
>>
>> Wybierz (3), utwórz (1) lub zaimportuj (2) parę kluczy.<br><br>
>>![network](images/restoresnapshot4.png){.thumbnail}<br>
>>

Następnie kliknij `Launch Instance`{.action}, aby rozpocząć tworzenie instancji.

### Usunięcie snapshota

W interfejsie horizon kliknij menu `Compute`{.action} po lewej stronie, a następnie kliknij `Image`{.action}.

Następnie kliknij rozwijaną strzałkę obok snapshota, który chcesz usunąć i kliknij `Delete Image`{.action}. Potwierdź usunięcie snapshota.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

