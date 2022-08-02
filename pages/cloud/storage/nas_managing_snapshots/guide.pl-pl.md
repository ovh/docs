---
title: NAS-HA - Zarządzanie snapshotami przez API
slug: nas/nas-snapshots-api
excerpt: "Dowiedz się, jak zarządzać snapshotami NAS-HA przy użyciu API OVHcloud"
section: NAS
order: 09
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 20-07-2022**

## Wprowadzenie

NAS-HA OVHcloud umożliwia tworzenie i zarządzanie wolumenami plików dostępnymi z sieci. 

**Niniejszy przewodnik wyjaśnia, jak zarządzać snapshotami partycji NAS-HA przy użyciu interfejsu API OVHcloud.**

## Wymagania początkowe

- Usługa [NAS-HA OVHcloud](https://www.ovh.pl/nas/)
- Zapoznaj się z naszym przewodnikiem Pierwsze kroki z [API OVHcloud](../../api/first-steps-with-ovh-api/), aby zapoznać się z APIv6 OVHcloud

## W praktyce

> [!primary]
> Przejdź na [stronę FAQ NAS-HA](../faq-nas/), aby uzyskać szczegółowe informacje dotyczące funkcji snapshot.
>

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

Snapshot danych wykonywany jest automatycznie co godzinę i zapisywany jest na NAS-HA. Możesz aktywować inne strategie snapshotów, które będą wykonywać snapshoty o określonej częstotliwości.

### Pobierz automatyczne planowanie kopii zapasowych snapshot

Aby wyświetlić aktywne automatyczne planowanie snapshota, użyj następującej drogi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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

### Dodanie zakresu automatycznego snapshota

Aby utworzyć dodatkowe automatyczne snapshoty o wybranej częstotliwości, użyj następującej drogi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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
>> > **snapshotType** *
>> >
>> >> Częstotliwość wykonywania snapshota: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Pobieranie informacji o automatycznych snapshotach

Aby uzyskać szczegółowe informacje dotyczące automatycznego snapshota, użyj następującej drogi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> Częstotliwość kopii zapasowych: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Usunięcie automatycznego zakresu snapshota

Użyj następującej drogi, aby usunąć częstotliwość automatycznego snapshota:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> Częstotliwość kopii zapasowych: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

Snapshoty NAS-HA (spersonalizowane snapshoty) można również wykonywać w następujących miejscach.

### Lista spersonalizowanych snapshotów

Użyj następującej drogi, aby pobrać istniejące spersonalizowane snapshoty:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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

### Tworzenie ręcznego snapshota

Aby dodać ręczny snapshot, użyj następującej drogi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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
>> >> Nazwa partition
>> >
>> > **expiration**
>> >
>> >> Fakultatywna data wygaśnięcia, na przykład: 2022-06-24 (ISO 8601)
>> >
>> > **name** *
>> >
>> >> Nazwa snapshota
>

### Pobieranie informacji ze spersonalizowanego snapshota

Aby wyświetlić szczegóły spersonalizowanego snapshota, użyj następującej drogi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
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
>> > **name** *
>> >
>> >> Nazwa snapshota
>

### Usuwanie spersonalizowanego snapshota

Użyj następującej drogi, aby usunąć spersonalizowany snapshot:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name} 
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
>> > **name** *
>> >
>> >> Nazwa snapshota
>

##### **Przywracanie snapshotów**

API nie pozwala na przywrócenie wykonanych snapshotów. Snapshoty są przechowywane w trybie tylko do odczytu na partycji.

Aby uzyskać dostęp do snapshotów z punktu montowania, należy uzyskać dostęp do katalogu `.zfs/snapshot` partycji.

Na przykład w usłudze, której ID to `zpool-123456`, z partycją o nazwie `partition1` i której utworzyłeś snapshot o nazwie `snapshot01`. Możesz odnaleźć snapshot, wprowadzając następujące polecenie:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Aby przywrócić snapshot, skopiuj go ze ścieżki dostępu pliku `.zfs` do nowego katalogu, w którym chcesz przywrócić snapshot. Możesz używać narzędzia takiego jak rsync, które pozwala na przywrócenie danych.

Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.


## Sprawdź również

[Montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS](../nas-nfs/)

[Skonfigurować NAS na serwerze Windows poprzez CIFS](../nas-cifs/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.