---
title: Enterprise File Storage - Zarządzanie snapshotami wolumenu
slug: netapp/volume-snapshots
excerpt: Dowiedz się, jak zarządzać snapshotami wolumenu Enterprise File Storage przy użyciu interfejsu API OVHcloud
section: Enterprise File Storage
order: 5
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 27-10-2021**

## Wprowadzenie

W tym przewodniku dowiesz się, jak zarządzać snapshotami wolumenów w ramach oferty OVHcloud Enterprise File Storage.

**Dowiesz się, jak pobrać istniejące snapshoty, utworzyć nowy snapshot, pobrać szczegółowe informacje dotyczące snapshota i usunąć snapshot korzystając z API OVHcloud.**

## Wymagania początkowe

- Posiadanie oferty OVHcloud Enterprise File Storage z wolumenem
- Dostęp do strony [API OVHcloud](https://api.ovh.com/)

## Podstawowe

Snapshot wolumenu jest kopią wolumenu w danej chwili i tylko do odczytu.

Snapshoty są tworzone z poziomu wolumenu operacyjnego.

> [!warning]
>
> Snapshoty są powiązane z wolumenem i nie mogą istnieć bez niego.
>

## W praktyce

Wszystkie API wykorzystywane w tym przewodniku są dostępne w sekcji */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Podczas korzystania z API wszystkie pola oznaczone gwiazdką (\*) są obowiązkowe.
>

### Wyświetl listę snapshotów

Wszystkie istniejące snapshoty wolumenu można pobrać za pomocą następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>>
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> ID usługi
>> >
>> > **shareId** *
>> >
>> >> ID woluminu
>

Zamień `serviceName` na ID usługi i `shareId` na ID wolumenu.

Domyślnie nie musisz zwracać kopii zapasowej snapshot do nowego wolumenu.

### Utwórz snapshot z wolumenu

Aby utworzyć snapshot, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> ID usługi
>> >
>> > **shareId** *
>> >
>> >> ID woluminu
>> >
>> > **NetAppShareSnapshot**
>> >
>> >> **description**
>> >>
>> >> > Opis snapshota
>> >>
>> >> **name**
>> >>
>> >> > Nazwa kopii zapasowej snapshot
>

Zamień `serviceName` na ID Twojej usługi i `shareId` na ID wolumenu.

Parametry `name` i `opis` snapshota są opcjonalne.

### Pobierz informacje dotyczące snapshota

Aby uzyskać informacje dotyczące snapshota, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> ID usługi
>> >
>> > **shareId** *
>> >
>> >> ID woluminu
>> >
>> > **snapshotId** *
>> >
>> >> ID snapshota
>

Zamień `serviceName` na ID Twojej usługi, `shareId` na ID wolumenu i `snapshotId` na ID snapshota.

### Usuwanie migawki

Aby usunąć snapshot, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> ID usługi
>> >
>> > **shareId** *
>> >
>> >> ID woluminu
>> >
>> > **snapshotId**
>> >
>> >> ID snapshota
>

Zastąp `serviceName` ID Twojej usługi, `shareId` ID wolumenu i `snapshotId` ID migawki, którą chcesz usunąć.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
