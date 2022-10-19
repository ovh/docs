---
title: NAS-HA - Zarządzanie partycjami przez API
slug: nas/partitions-api
excerpt: "Dowiedz się, jak zarządzać partycjami NAS-HA przy użyciu API OVHcloud"
section: NAS
order: 08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 20-07-2022**

## Wprowadzenie

Usługa NAS-HA OVHcloud pozwala na zarządzanie przestrzenią dyskową plików dostępną z poziomu sieci.

**Niniejszy przewodnik wyjaśnia, jak zarządzać partycjami usługi NAS-HA za pomocą interfejsu API OVHcloud.**

## Wymagania początkowe

- Usługa [NAS-HA OVHcloud](https://www.ovh.pl/nas/)
- Zapoznaj się z naszym przewodnikiem Pierwsze kroki z [API OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/), aby zapoznać się z APIv6 OVHcloud

## W praktyce

Wszystkie drogi API w tym przewodniku są dostępne w sekcji */dedicated/nasha*: <https://api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> Podczas korzystania z API wszystkie pola oznaczone gwiazdką (\*) są obowiązkowe.
>

### Pobranie informacji o usłudze

Wszystkie Twoje aktywne usługi można odzyskać przy użyciu następującej drogi:

> [!api]
>
> @api {GET} /dedicated/nasha
>

### Lista wszystkich partycji

Użyj następującej drogi, aby pobrać partycje usługi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Wewnętrzna nazwa usługi NAS
>

### Ustalenie właściwości partycji

Aby wyświetlić szczegóły partycji, użyj następującej drogi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Nazwa wewnętrzna usługi NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partycji
>

### Odzyskiwanie statystyk partycji

Użyj następującej drogi, aby pobrać informacje dotyczące korzystania z partycji:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/use
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Nazwa wewnętrzna usługi NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partycji
>> >
>> > **type** *
>> >
>> >> Rodzaj statystyki do pobrania: *size*, *used* lub *usedbysnapshots*
>

### Tworzenie partycji

Użyj następującej drogi, aby utworzyć nową partycję:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Wewnętrzna nazwa usługi NAS
>> >
>> > **partitionDescription** 
>> >
>> >> Opis opcjonalny
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partycji
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* lub *NFS_CIFS* dla 
>> >
>> > **size** *
>> >
>> >> Rozmiar partycji
>

Wybierz `NFS` jako protokół i rozmiar `10` Gigabajtów.

### Zmień właściwości partycji

Użyj następującej drogi, aby zmienić partycję:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {PUT} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Wewnętrzna nazwa usługi NAS
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partycji
>> >
>> > **partitionDescription**
>> >
>> >> Nowy opis
>> >
>> > **size**
>> >
>> >> Nowy rozmiar partycji
>

### Pobierz parametry ZFS dla partycji

Użyj następującej drogi, aby pobrać ustawienia ZFS:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Wewnętrzna nazwa usługi NAS
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partycji
>

### Zmiana parametrów ZFS partycji

> [!warning]
>
> Wszystkie ustawienia ZFS są zoptymalizowane. Nie zaleca się zmiany tych parametrów.
>

Użyj następującej drogi, aby zmienić ustawienia ZFS:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partionName}/options
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Wewnętrzna nazwa usługi NAS
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partycji
>> >
>> > **atime**
>> >
>> >> Parametr aktualizacji czasu dostępu: *on* (default) lub *off*
>> >
>> > **recordsize**
>> >
>> >> Maksymalny rozmiar bloku: *131072* (domyślnie), *16384*, *32768*, *4096*, *6536* lub *8129*
>> >
>> > **sync**
>> >
>> >> Parametr synchronizacji pliku: *always*, *disabled* lub *standard* (wartość domyślna)
>

### Usuwanie partycji

Użyj następującej drogi, aby usunąć partycję:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Nazwa wewnętrzna usługi NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partycji
>

## Sprawdź również

[Montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS](https://docs.ovh.com/pl/storage/file-storage/nas/nfs/)

[Skonfigurować NAS na serwerze Windows poprzez CIFS](https://docs.ovh.com/pl/storage/file-storage/nas/cifs/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.