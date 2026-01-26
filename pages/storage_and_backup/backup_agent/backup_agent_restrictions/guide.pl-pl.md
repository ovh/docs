---
title: "Backup Agent - Znane ograniczenia"
excerpt: "Odkryj ograniczenia i limity produktu Backup Agent"
updated: 2026-01-23
---

## Wprowadzenie

Ten przewodnik szczegółowo opisuje znane ograniczenia i limity produktu Backup Agent, które powinieneś znać przed użyciem usługi.

## Znane ograniczenia

### Zasada kopii zapasowej

- Zasada kopii zapasowej jest ograniczona, nie możesz jej modyfikować.
- Nie możesz skonfigurować kopii zapasowej tylko dla listy plików lub folderów.
- Nie możesz modyfikować daty i godziny wyzwalania kopii zapasowych (jest to uważane za ulepszenie w przyszłości).

### Dostęp VSPC

- Użytkownik, którego otrzymujesz, jest tylko do odczytu, nie możesz wprowadzać zmian bezpośrednio w VSPC.

### Vault

- Nie możesz tworzyć dodatkowych vault, będą one tworzone automatycznie, aby zapewnić, że Twoje dane nie są hostowane w tym samym centrum danych, w którym znajduje się Twój serwer Bare Metal.
- Nie możesz zmienić vault agenta.

### Ograniczenia OS

- Możesz znaleźć listę kompatybilnych systemów operacyjnych dla agenta Veeam tutaj <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=1>

### Zgodność z innymi produktami OVHcloud

- Obecnie produkt Backup Agent jest kompatybilny tylko z Serwerami Dedykowanymi, nie możesz używać swojego agenta na innych produktach.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).

