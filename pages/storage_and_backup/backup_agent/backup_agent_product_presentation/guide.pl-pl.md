---
title: "Backup Agent - Przegląd produktu"
excerpt: "Omówienie funkcji i zalet produktu Backup Agent"
updated: 2026-01-23
---

## Wprowadzenie

Przewodnik ten pomoże Ci zrozumieć, jak działa Backup Agent i jakie są jego zalety dla usług Bare Metal.

## Przedstawienie produktu

Produkt Backup Agent umożliwia Ci wykonanie kopii zapasowych serwerów Bare Metal przy użyciu agenta, który zgodnie z wybraną przez Ciebie zasadą kopii zapasowych, wysyła dane serwera do zewnętrznego punktu przechowywania.

Produkt Backup Agent opiera się na dwóch produktach wydawcy oprogramowania Veeam:

- Konsoli dostępnego dla dostawców usług Veeam (VSPC).
- Veeam Agent.

Veeam Agent to oprogramowanie stworzone przez Veeam, które instaluje się w Twoim systemie operacyjnym w systemach Linux i Windows, i umożliwia tworzenie kopii zapasowych Twojego systemu.

VSPC umożliwia przekazanie zasad kopii zapasowych agentom przechowywanym na nich i umożliwia przekazanie każdemu agentowi informacji o punkcie przechowywania i poświadczeniach podczas uruchamiania kopii zapasowej.
Oto [przewodnik](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation), który wyjaśnia, jak nawigować w VSPC.

Po zamówieniu produktu otrzymasz e-mail potwierdzający dostawę z poświadczeniami umożliwiającymi połączenie z Twoim tenantem w VSPC. To konto jest tylko do odczytu i umożliwia dostęp do wizualizacji, aby zobaczyć Twoje kopie zapasowe i agentów.

Po otrzymaniu informacji agent wysyła dane bezpośrednio do punktu przechowywania, bez przechodzenia nigdy przez infrastrukturę VSPC.

Podstawowy diagram wygląda następująco:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Zwróć uwagę, że:

- Infrastruktura VSPC jest hostowana w centrach danych OVHcloud i nie wysyła danych do serwerów Veeam.
- Punkty przechowywania to [OVHcloud Object Storage](/links/public-cloud/object-storage) buckety, które są hostowane w centrach danych OVHcloud.

Istnieje kilka kluczowych zalet tej usługi:

- Pierwsza automatyczna zasada kopii zapasowej z 14-dniowym okresem przechowywania.
- Możliwość zwiększenia do 30 dni przechowywania.
- Zasada wykonuje pełną kopię zapasową Twojego serwera.
- 14 dni niezmienności naszych buckety.
- Okres automatycznych kopii zapasowych to od 22:00 do 6:00 (strefa czasowa CET dla Europy - strefa czasowa EST dla Kanady i Azji).
- Szyfrowanie zarządzane przez OVHcloud punktu przechowywania danych kopii zapasowych.
- Natychmiastowe przesyłanie danych kopii zapasowych do buckety bez umieszczania kopii na naszej infrastrukturze.
- Punkt przechowywania zawsze oddalony od lokalizacji Twojego serwera Bare Metal (jeśli jesteś w Roubaix, Twój punkt przechowywania będzie w Gravelines).

Ważne jest również, aby pamiętać, że:

- Zasada kopii zapasowej jest ograniczona, nie możesz jej modyfikować.
- Nie możesz skonfigurować kopii zapasowej tylko dla listy plików lub folderów.
- Nie możesz modyfikować daty i godziny wyzwalania kopii zapasowych (jest to uważane za ulepszenie w przyszłości).

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).