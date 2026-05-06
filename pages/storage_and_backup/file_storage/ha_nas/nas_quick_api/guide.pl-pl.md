---
title: NAS-HA - Pierwsze kroki z API
excerpt: "Dowiedz się, jak rozpocząć korzystanie z usługi NAS-HA przy użyciu API OVHcloud"
updated: 2022-07-20
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Usługa NAS-HA OVHcloud pozwala na zarządzanie przestrzenią dyskową plików dostępną z poziomu sieci. 

**Niniejszy przewodnik wyjaśnia, jak korzystać z usługi NAS-HA przy użyciu interfejsu API OVHcloud.**

## Wymagania początkowe

- Usługa [NAS-HA OVHcloud](/links/storage/nas-ha)
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

### Tworzenie partition

Użyj następującej drogi, aby utworzyć nową partycję:

> [!api]
>
> @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | Wewnętrzna nazwa usługi NAS |
| `partitionDescription` |  | Opis opcjonalny |
| `partitionName` | Yes | Nazwa partition |
| `protocol` | Yes | *NFS*, *CIFS* lub *NFS_CIFS* dla |
| `size` | Yes | Rozmiar partition |

Wybierz `NFS` jako protokół i rozmiar `10` Gigabajtów.

### Dodanie wpisu ACL, aby uzyskać dostęp do partition

> [!warning]
>
> Dostęp nie jest domyślnie udzielany, chyba że jest udzielany za pośrednictwem ACL. Można dodać wyłącznie adresy IP przypisane do Twoich usług OVHcloud.
>

Możesz sprawdzić adresy IP kwalifikujące się do dostępu za pomocą następujących wywołań API:

> [!api]
>
> @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | Wewnętrzna nazwa usługi NAS-HA |
| `partitionName` | Yes | Nazwa partition |

Aby utworzyć nowy wpis ACL umożliwiający logowanie do partition, użyj następującej drogi:

> [!api]
>
> @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | Nazwa wewnętrzna usługi NAS-HA |
| `partitionName` | Yes | Nazwa partition |
| `ip` | Yes | Adres IP lub zakres, w jakim należy udzielić dostępu |
| `type` | Yes | Typ dostępu ACL dla tego wpisu: *readonly* lub *readwrite* |

> [!primary]
>
> Użyj ratingu CIDR dla pul IP, na przykład: 192.0.2.0/24.
>

### Tworzenie ręcznego snapshota

Aby dodać ręczny snapshot, użyj następującej drogi:

> [!api]
>
> @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | Nazwa wewnętrzna usługi NAS-HA |
| `partitionName` | Yes | Nazwa partition |
| `expiration` |  | Fakultatywna data wygaśnięcia, na przykład: 2022-06-24 (ISO 8601) |
| `name` | Yes | Nazwa snapshota |

### Usuwanie partition

Użyj następującej drogi, aby usunąć partycję:

> [!api]
>
> @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | Nazwa wewnętrzna usługi NAS-HA |
| `partitionName` | Yes | Nazwa partition |

## Sprawdź również

[Montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Skonfigurować NAS na serwerze Windows poprzez CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.