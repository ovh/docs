---
title: Enterprise File Storage - Pierwsze kroki z API
excerpt: Pierwsze kroki z Twoją usługą Enterprise File Storage przy użyciu API OVHcloud
updated: 2021-10-27
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

W tym przewodniku szybko uruchamiania dowiesz się, jak rozpocząć korzystanie z usługi Enterprise File Storage.

**Dowiesz się, jak pobrać informacje dotyczące Twojej oferty i utworzyć pierwszy wolumen za pomocą API OVHcloud.**

## Wymagania początkowe

- Posiadanie oferty OVHcloud Enterprise File Storage
- Dostęp do strony [API OVHcloud](https://api.ovh.com/)
- Umiejętność [montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

## Podstawowe

Oferta OVHcloud Enterprise File Storage pozwala na tworzenie wolumenów i na zarządzanie udostępnianiem plików w sieci.

Możesz wybrać rozmiar wolumenów, zarządzać dostępami za pomocą ACL lub tworzyć snapshoty (natychmiastowa kopia wolumenu).

## W praktyce

Wszystkie API wykorzystywane w tym przewodniku są dostępne w sekcji */storage*: <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Podczas korzystania z API wszystkie pola oznaczone gwiazdką (\*) są obowiązkowe.
>

### Pobranie danych z usługi

Wszystkie Twoje aktywne usługi mogą zostać odzyskane przy użyciu następującej drogi API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp
>

### Utwórz nowy wolumen

Wolumen to jednostka magazynowa o rozmiarze i protokole.

Aby utworzyć wolumen, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage POST /storage/netapp/{serviceName}/share
>> >
>>
>
> Ustawienia:
>
>> > **serviceName** *
>> >
>> >> ID usługi
>> >
>> > **NetAppShare** *
>> >
>> >> **description**
>> >>
>> >> > Opis objętości
>> >>
>> >> **name**
>> >>
>> >> > Nazwa wolumenu
>> >>
>> >> **protocole** *
>> >>
>> >> > Protokół używany przez wolumen
>> >>
>> >> **size**
>> >>
>> >> > Rozmiar wolumenu
>

Wybierz protokół `NFS` i rozmiar `10` gigabajtów.

### Dodaj ACL do wolumenu

ACL pozwalają na udzielenie lub odmowę dostępu do wolumenu.

> [!warning]
>
> Domyślne zachowanie polega na odmowie dostępu do nowego wolumenu.
>

Po utworzeniu wolumenu utwórz nowy ACL, aby uzyskać do niego dostęp.

Aby utworzyć nowy ACL, który pozwoli Ci łączyć się z wolumenem, użyj następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/acl
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
>> > **NetAppShareACLRule** *
>> >
>> >> **accessLevel** *
>> >>
>> >> > Poziom dostępu ACL Może być **rw** (odczyt i zapis) lub **ro** (tylko odczyt).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Adres IP lub zakres adresów IP z ratingiem CIDR.
>

> [!primary]
>
> Korzystając z ratingu CIDR możesz zezwolić na dostęp do wolumenu z zakresu adresów IP X.X.X.X/X.
> Na przykład: 192.0.2.0/24
>

### Zamontuj wolumen

Sprawdź status utworzenia ACL przy użyciu następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
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
>> > **aclRuleId** *
>> >
>> >> ID ACL
>

Zastąp `aclRuleId` identyfikatorem ACL utworzonym dla wolumenu.

> [!primary]
>
> Status ACL musi być `active`.
>

Po aktywacji ACL pobierz ścieżki dostępu wolumenu za pomocą następującego API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/accessPath
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

Zostanie wyświetlona jedna lub więcej ścieżek dostępu dla wolumenu.

Teraz możesz zamontować wolumen za pomocą polecenia:

```sh
mount -t nfs accessPath
```

> [!primary]
>
> Jeśli używasz Linuksa, należy zainstalować pakiet `nfs-utils`.
>

Po zamontowaniu wolumenu możesz przechowywać pliki.

### Usuwanie wolumenu

Możesz usunąć wolumen za pomocą następującej drogi API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {v1} /storage DELETE /storage/netapp/{serviceName}/share/{shareId}
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

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
