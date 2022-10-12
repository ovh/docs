---
title: Enterprise File Storage - Zarządzanie wolumenami
slug: netapp/volumes
excerpt: Dowiedz się, jak tworzyć wolumeny OVHcloud Enterprise File Storage i zarządzać nimi za pomocą API OVHcloud
section: Enterprise File Storage
order: 3
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 27-10-2021**

## Wprowadzenie

W niniejszym przewodniku dowiesz się, jak zarządzać wolumenami w ramach oferty OVHcloud Enterprise File Storage.

**Dowiesz się, jak pobrać istniejące wolumeny, jak również ich punkt montowania, utworzyć nowy wolumen lub usunąć istniejący wolumen z poziomu API OVHcloud.**

## Wymagania początkowe

- Posiadanie oferty OVHcloud Enterprise File Storage
- Dostęp do strony [API OVHcloud](https://api.ovh.com/)

## Podstawowe

Wolumen to stały system plików współdzielonych dostępny w trybie odczytu i/lub zapisu.

Może również zawierać nazwę i opis (opcjonalnie).

> [!warning]
>
> Domyślnie dostęp do nowo utworzonego wolumenu jest ograniczony. Aby umożliwić dostęp, należy utworzyć ACL.
>

## W praktyce

Wszystkie trasy API wykorzystywane w tym przewodniku są dostępne w sekcji */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Podczas korzystania z API wszystkie pola oznaczone gwiazdką (\*) są obowiązkowe.
>

### Wyświetl wolumeny

Aby wyświetlić wolumeny usługi, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> ID usługi
>> >
>

Zastąp `serviceName` ID Twojej usługi.

### Pobierz informacje o woluminie

Aby pobrać informacje dotyczące wolumenu, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}
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
>

Zamień `serviceName` na ID usługi i `shareId` na ID wolumenu.

### Utwórz wolumen

Aby utworzyć nowy wolumen, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp{serviceNme}/share
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> ID usługi
>> >
>

Zastąp `serviceName` ID Twojej usługi.

Wybierz protokół `NFS` dla nowego wolumenu (własność `protokołu`) oraz jego rozmiar (własność `size`).
Możesz również podać nazwę i opis z `name` i `opis`.

### Wyświetl punkty montowania wolumenu

Aby poznać ścieżkę montowania wolumenu, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp{serviceName}/share/{shareId}/accessPath
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
>

Zamień `serviceName` na ID usługi i `shareId` na ID wolumenu.

Odwrócone ścieżki montowania mogą być używane do zamontowania wolumenu.

Polecenie montowania będzie inne, w zależności od protokołu wybranego dla wolumenu.  

> [!primary]
>
> Instrukcje montażu NFS znajdziesz w przewodniku [Montowanie usługi NAS przy użyciu protokołu NFS](https://docs.ovh.com/pl/storage/nas-nfs/).
> Pamiętaj, że odzyskana ścieżka montowania zastępuje IP_NAS/NFS_PATH w tym przewodniku.
>  

### Usuń wolumen

Aby usunąć wolumen, użyj następującej drogi API:  

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}
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
>

Zamień `serviceName` na ID usługi i `shareId` na ID wolumenu do usunięcia.

## Sprawdź również

[Pierwsze kroki z API OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/)

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
