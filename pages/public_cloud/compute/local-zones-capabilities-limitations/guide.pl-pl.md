---
title: Local Zone Compute - Funkcje, możliwości i ograniczenia
excerpt: Poznaj aktualne funkcje, możliwości i ograniczenia instancji Local Zones
updated: 2026-01-16
---

## Wprowadzenie

Instancje Local Zones są rozszerzeniem [regionów](/links/public-cloud/regions-pci), które przybliżają usługi OVHcloud do konkretnych lokalizacji. Dzięki temu zapewniają krótszy czas odpowiedzi i większą wydajność aplikacji.

Instancje Local Zones są strategicznie rozmieszczone w pobliżu obszarów o wysokim zapotrzebowaniu użytkowników. Ich głównym celem jest zminimalizowanie czasu potrzebnego na transfer danych między użytkownikiem a chmurą, aby usługi były szybsze i bardziej reaktywne oraz aby spełnić wymagania stawiane przez Data residency.

Więcej informacji znajdziesz na naszej [stronie poświęconej instancjom Local Zone](/links/public-cloud/local-zones).

**Poznaj funkcje oraz aktualne i przyszłe możliwości instancji Local Zones.**

## Dostępne funkcje

| Public Cloud Services | Produkt                    | Dostępność w Local Zone | Ograniczenia |
| --------------------- | -------------------------- | ------------------------ | ----------- |
| Compute               | Instancje                  | Tak | Akcja "zawieszania (shelve)" nie jest obsługiwana w Local Zones |
|                       | Instancje Metalowe         | Nie | |
|                       | GPU                        | Nie | |
|                       | Backup Instancji           | Tak | |
|                       | Distant Backup             | Nie | |
|                       | Workflow Management dla kopii zapasowych  | Tak | |
|                       | Obrazy Linux                | Tak | |
|                       | Obrazy Windows             | Nie | |
|                       | Importuj własny obraz      | Tak | Maksymalny rozmiar obrazu to 25 GB |
| Sieć                  | Load Balancer              | Nie | |
|                       | Gateway                    | Nie | |
|                       | Floating IP                | Nie | |
|                       | Additional IP              | Nie | |
|                       | Prywatna Sieć z vRack      | Nie | Local Zones nie są kompatybilne z vRack. Prywatne sieci są ograniczone tylko do tej samej Local Zone. DHCP jest obsługiwany na prywatnych sieciach lokalnych. |
| Przechowywanie danych | Object Storage             | Tak | 1. Nie obsługiwane są zasady użytkownika. wszystkie klucze dostępowe w ramach projektu mogą uzyskiwać dostęp do wszystkich kubełków we wszystkich Local Zones. <br> 2. Obsługiwana jest tylko klasa Standard Storage. <br> 3. Funkcje S3<sup>1</sup> nie są obsługiwane: tagi S3, Legal Hold, SSE-OMK, replikacja S3, logowanie dostępu serwera. |
|                       | Block Storage              | Tak | Brak obsługi szyfrowania. Klasyczne woluminy nie mogą być wielokrotnie dołączone. Klasyczne woluminy ograniczone do 250 IOPS (vs 500 IOPS w regionach 1AZ i 3AZ). Maksymalny rozmiar 4 TB (vs 12 TB). |
|                       | File Storage               | Nie | |
| Kontener              | Managed Kubernetes Service      | Nie | |
|                       | Managed Rancher Service  | Nie | |
|                       | Managed Private Registry | Nie | |
| DBaas                 | DBaas                      | Nie | |
|                       | Analytics            | Nie | |
| AI                    | AI                         | Nie | |

## Możliwości i ograniczenia

Wszystkie funkcje instancji, których nie ma na liście, takie jak restart (reboot) instancji lub obsługa Object Storage, będą dostępne w ciągu najbliższych miesięcy. Naszym celem jest obsługa wszystkich funkcji już obsługiwanych w regionach globalnych.

### Serwer SMTP

Instancje Local Zones nie mogą łączyć się z serwerami SMTP.

## Sprawdź również

- [Object Storage - Local Zones specifications](/pages/storage_and_backup/object_storage/s3_local_zones_limitations) (EN)

Prosimy o przesyłanie pytań, sugestii i sugestii dotyczących ulepszenia usługi:

- Na serwerze [Discord OVHcloud](https://discord.gg/ovhcloud)

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.