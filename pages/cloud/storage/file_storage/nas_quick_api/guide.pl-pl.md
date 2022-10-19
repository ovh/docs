---
title: NAS-HA - Pierwsze kroki z API
slug: nas/quick-api
excerpt: "Dowiedz się, jak rozpocząć korzystanie z usługi NAS-HA przy użyciu API OVHcloud"
section: NAS
order: 06
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 20-07-2022**

## Wprowadzenie

Usługa NAS-HA OVHcloud pozwala na zarządzanie przestrzenią dyskową plików dostępną z poziomu sieci. 

**Niniejszy przewodnik wyjaśnia, jak korzystać z usługi NAS-HA przy użyciu interfejsu API OVHcloud.**

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

### Tworzenie partition

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
>> >> Nazwa partition
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* lub *NFS_CIFS* dla  
>> >
>> > **size** *
>> >
>> >> Rozmiar partition
>

Wybierz `NFS` jako protokół i rozmiar `10` Gigabajtów.

### Dodanie wpisu ACL, aby uzyskać dostęp do partition

> [!warning]
>
> Dostęp nie jest domyślnie udzielany, chyba że jest udzielany za pośrednictwem ACL. Można dodać wyłącznie adresy IP przypisane do Twoich usług OVHcloud.
>

Możesz sprawdzić adresy IP kwalifikujące się do dostępu za pomocą następujących wywołań API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> Wewnętrzna nazwa usługi NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nazwa partition
>

Aby utworzyć nowy wpis ACL umożliwiający logowanie do partition, użyj następującej drogi:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > **ip** *
>> >
>> >> Adres IP lub zakres, w jakim należy udzielić dostępu
>> >
>> > **type** *
>> >
>> >> Typ dostępu ACL dla tego wpisu: *readonly* lub *readwrite*
>

> [!primary]
>
> Użyj ratingu CIDR dla pul IP, na przykład: 192.0.2.0/24.
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

### Usuwanie partition

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
>> >> Nazwa partition
>

## Sprawdź również

[Montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS](https://docs.ovh.com/pl/storage/file-storage/nas/nfs/)

[Skonfigurować NAS na serwerze Windows poprzez CIFS](https://docs.ovh.com/pl/storage/file-storage/nas/cifs/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.