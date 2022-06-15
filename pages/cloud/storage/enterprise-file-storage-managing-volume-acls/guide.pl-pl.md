---
title: Enterprise File Storage - Zarządzanie ACL wolumenu
slug: netapp-volume-acl
excerpt: Dowiedz się, jak zarządzać ACL wolumenu Enterprise File Storage przy użyciu API OVHcloud
section: Enterprise File Storage
order: 4
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 27-10-2021**

## Wprowadzenie

W tym przewodniku dowiesz się, jak zarządzać ACL wolumenu w ofercie OVHcloud Enterprise File Storage.

**Dowiesz się, jak pobrać listy ACL (Access Control) woluminu, utworzyć nowy ACL i usunąć istniejący ACL z poziomu API OVHcloud.**

## Wymagania początkowe

- Posiadanie oferty OVHcloud Enterprise File Storage z wolumenem
- Dostęp do strony [API OVHcloud](https://api.ovh.com/)

## Podstawowe

ACL pozwalają na autoryzację lub ograniczenie dostępu do wolumenu.

> [!warning]
>
> Domyślnie dostęp do nowo utworzonego wolumenu jest ograniczony. Aby umożliwić dostęp, należy utworzyć ACL.
>

Za pomocą ACL możesz zezwolić adresowi IP lub zakresowi adresów IP na dostęp do wolumenu.

## W praktyce

Wszystkie trasy API wykorzystywane w tym przewodniku są dostępne w sekcji */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Podczas korzystania z API wszystkie pola oznaczone gwiazdką (\*) są obowiązkowe.
>

### Wyświetl listę ACL

Wszystkie istniejące ACL o pojemności można odzyskać za pomocą następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>>
>> >> ID usługi
>>
>> > **shareId** *
>>
>> >> ID woluminu
>

Zamień `serviceName` na ID usługi i `shareId` na ID wolumenu.

Podczas korzystania z tego wywołania API dla nowego wolumenu nie należy przekierowywać ACL domyślnie.

### Zezwalaj na dostęp do wolumenu przy użyciu ACL

Aby utworzyć nowy ACL, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>>
>> >> ID usługi
>>
>> > **shareId** *
>>
>> >> ID woluminu
>>
>> > **NetAppShareACLRule** *
>>
>> >> **accessLevel** *
>> >>
>> >> > Poziom dostępu ACL Może być **rw** (odczyt i zapis) lub **ro** (tylko odczyt).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Adres IP lub zakres adresów IP z ratingiem CIDR.
>

Zamień `serviceName` na ID usługi i `shareId` na ID wolumenu.

Wybierz poziom dostępu, który chcesz autoryzować: albo `ro` (tylko odczyt) lub `rw` (odczyt i zapis).

Zastąp `accessTo` adresem IP, z którego chcesz autoryzować połączenia.

### Usuń ACL

Usunięcie ACL uniemożliwia dalszy dostęp z adresów IP, które wskazuje.

Aby usunąć ACL, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>>
>> >> ID usługi
>>
>> > **shareId** *
>>
>> >> ID woluminu
>>
>> > **aclRuleId** *
>>
>> >> ID ACL
>

Zamień `serviceName` na ID usługi i `shareId` na ID wolumenu.

Możesz uzyskać `aclRuleId` na podstawie odpowiedzi uzyskanej podczas tworzenia ACL lub poprzez odczyt istniejących ACL wolumenu.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
