---
title: "Backup Agent - znane ograniczenia"
excerpt: "Odkryj ograniczenia i wady aplikacji Backup"
updated: 2026-01-28
---

## Wprowadzenie

Przewodnik ten zawiera informacje o znanych ograniczeniach i wadach produktu Backup Agent, które należy znać przed użyciem usługi.

## Znane ograniczenia

### Polityka kopii zapasowych

- Polityka kopii zapasowych jest ograniczona, nie można jej modyfikować.
- Nie można skonfigurować kopii zapasowej tylko dla listy plików lub folderów.
- Nie można zmienić daty i godziny wyzwalania kopii zapasowych (to będzie przedmiotem przyszłej poprawki).

### Dostęp do VSPC

- Użytkownik, którego otrzymujesz, ma uprawnienia tylko do odczytu, nie możesz wprowadzać zmian bezpośrednio w VSPC.

### Vault

- Nie można tworzyć dodatkowych Vault, będą one tworzone automatycznie, aby zapewnić, że dane nie będą hostowane w tym samym centrum danych, w którym znajduje się Twój serwer Bare Metal.
- Nie można zmienić Vault na agencie.

### Ograniczenia systemu operacyjnego

- Listę kompatybilnych systemów operacyjnych dla Veeam Agent można znaleźć [tutaj](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13).

### Kompatybilność z innymi produktami OVHcloud

- Obecnie produkt Backup Agent jest kompatybilny tylko z Serwerami dedykowanymi, nie można używać swojego agenta na innych produktach.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).