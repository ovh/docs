---
title: "Backup Agent - Fakturacja"
excerpt: "Fakturacja dla produktu Backup Agent"
updated: 2026-01-09
---

## Wprowadzenie

Strona ta ma na celu wyjaśnienie, jak Backup Agent jest fakturyzowany

## Fakturacja

Produkt wykorzystuje dwa elementy, aby oferować swoje usługi:

- Backup Agent zainstalowany na Twoich serwerach Bare Metal.
- [OVHcloud Object Storage](/links/public-cloud/object-storage).

Nie pobieramy opłat za Backup Agent na Twoich serwerach, czyli możesz wdrożyć go na jednym lub większej liczbie serwerów Bare Metal, a nie będzie to dla Ciebie kosztować niczego.

Jednak zostaniesz rozliczony za każdy GB miesięcznie za użycie OVHcloud Object Storage. Będziesz rozliczony na początku każdego miesiąca za swoje wykorzystanie z poprzedniego miesiąca.

Znajdź cenę za GB miesięcznie na naszej [stronie internetowej](/links/storage/backup-agent).

Możesz użyć pulpitu `Billing`{.action} w Twoim [Panelu klienta OVHcloud](/links/manager), aby wyświetlić aktualne wykorzystanie, a tym samym przewidzieć końcową fakturę na koniec miesiąca.

- Przykład 1: Wdrożyłeś Backup Agent na 3 serwerach Bare Metal, a one wysyłają swoje dane do odpowiednich Vault. Całkowita pojemność zajęta przez Twoje dane kopii zapasowych na serwerach Vault to 600 GB. Będziesz rozliczony na koniec miesiąca za 600 GB.

- Przykład 2: Wdrożyłeś Backup Agent na 10 serwerach Bare Metal, a one wysyłają swoje dane do odpowiednich Vault. Całkowita pojemność zajęta przez Twoje dane kopii zapasowych na serwerach Vault to 600 GB. Po kilku kopiah zapasowych usunąłeś Backup Agent z 4 serwerów, usuwając dane po 14 dniach. Całkowite wykorzystanie Vault spadło do 400 GB. Będziesz rozliczony na koniec miesiąca za 600 GB.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).