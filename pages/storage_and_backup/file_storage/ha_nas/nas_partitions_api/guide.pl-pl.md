---
title: NAS-HA - Zarządzanie partycjami przez API
excerpt: "Dowiedz się, jak zarządzać partycjami NAS-HA przy użyciu API OVHcloud"
updated: 2022-07-20
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Usługa NAS-HA OVHcloud pozwala na zarządzanie przestrzenią dyskową plików dostępną z poziomu sieci.

**Niniejszy przewodnik wyjaśnia, jak zarządzać partycjami usługi NAS-HA za pomocą interfejsu API OVHcloud.**

## Wymagania początkowe

- Usługa [NAS-HA OVHcloud](https://www.ovh.pl/nas/)
- Zapoznaj się z naszym przewodnikiem Pierwsze kroki z [API OVHcloud](/pages/manage_and_operate/api/first-steps), aby zapoznać się z APIv6 OVHcloud

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
> @api {v1} /dedicated/nasha GET /dedicated/nasha
>

### Lista wszystkich partycji

Użyj następującej drogi, aby pobrać partycje usługi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition
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
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}
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
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/use
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
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition
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
>> > @api {v1} /dedicated/nasha PUT /dedicated/nasha/{serviceName}/partition/{partitionName}
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
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/options
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
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partionName}/options
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
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
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

[Montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Skonfigurować NAS na serwerze Windows poprzez CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.