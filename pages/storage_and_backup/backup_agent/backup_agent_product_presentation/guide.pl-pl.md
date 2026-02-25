---
title: "Backup Agent - Omówienie produktu"
excerpt: "Omówienie funkcji i korzyści z wykorzystania produktu Backup Agent"
updated: 2026-01-28
---

## Wprowadzenie

Przewodnik ten pomoże Ci zrozumieć, jak działa Backup Agent i jakie korzyści oferuje dla usług Bare Metal.

## Prezentacja produktu

Produkt Backup Agent umożliwia wykonanie kopii zapasowych Twoich serwerów Bare Metal przy użyciu agenta, który, zgodnie z wybraną przez Ciebie zasadą kopii zapasowych, przesyła dane serwera do zewnętrznego punktu przechowywania.

Produkt Backup Agent opiera się na dwóch produktach wydawcy oprogramowania Veeam:

- Konsoli dostawcy usług Veeam (VSPC)
- Veeam Agent

Veeam Agent to oprogramowanie stworzone przez Veeam, które instaluje się na Twoim systemie operacyjnym na Linuxie i Windowsie i umożliwia wykonanie kopii zapasowej Twojego systemu.

VSPC umożliwia przesyłanie zasad kopii zapasowych do agentów przechowywanych w nim oraz umożliwia przekazanie każdemu agentowi informacji o przechowywaniu i danych uwierzytelniania podczas uruchamiania kopii zapasowej.
Dowiedz się, jak przeglądać interfejs VSPC, korzystając z [tego przewodnika](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation).

Po zamówieniu produktu otrzymasz e-mail potwierdzający dostarczenie usługi oraz dane logowania do Twojego konta w VSPC. To konto jest tylko do odczytu i umożliwia dostęp do widoków Twoich kopii zapasowych i agentów.

Po otrzymaniu przez agenta informacji, dane są wysyłane bezpośrednio do punktu przechowywania, bez przechodzenia nigdy przez infrastrukturę VSPC.

## Kluczowe aspekty

Istnieje kilka kluczowych zalet tej oferty:

- Pierwsza automatyczna zasada kopii zapasowych z 14-dniowym okresem przechowywania.
- Możliwość zwiększenia do 30 dni przechowywania.
- Zasada wykonuje pełną kopię zapasową Twojego serwera.
- 14 dni niezmienności na naszych kubełkach.
- Okres automatycznych kopii zapasowych to od 22:00 do 6:00 (strefa czasowa CET dla Europy - strefa czasowa EST dla Kanady i Azji).
- Szyfrowanie zarządzane przez OVHcloud przechowywania danych kopii zapasowych.
- Przesyłanie danych kopii zapasowych do kubełka w czasie rzeczywistym bez umieszczania kopii na naszej infrastrukturze.
- Punkt przechowywania zawsze oddalony od lokalizacji Twojego serwera Bare Metal (jeśli jesteś w Roubaix, Twój punkt przechowywania będzie w Gravelines).

Warto również pamiętać, że:

- Zasada kopii zapasowych jest ograniczona, nie możesz jej modyfikować.
- Nie możesz skonfigurować kopii zapasowej wyłącznie na liście plików lub folderów.
- Nie możesz zmienić daty i godziny wyzwalania kopii zapasowych (to uznane zostało za poprawkę w przyszłości).

## Infrastruktura

Podstawowy diagram wygląda następująco:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Zwróć uwagę, że:

- Infrastruktura VSPC znajduje się w centrach danych OVHcloud i nie przesyła danych do serwerów Veeam.
- Przechowywanie opiera się na technologii [OVHcloud Object Storage](/links/public-cloud/object-storage), która znajduje się w centrach danych OVHcloud.

Po dostarczeniu otrzymujesz:

- Wirtualny kontener kopii zapasowych, zazwyczaj nazwany `Backup-tenant-xxxx`, który może być używany do grupowania wszystkich Twoich usług kopii zapasowych.
- Wirtualny kontener VSPC, zazwyczaj nazwany `vspc-tenant-xxxx`, który jest Twoją „firmą” w VSPC, umożliwia dostęp do Twoich pulpitów i łączy Twoje agenty.
- Vault, zazwyczaj nazwany `Backup-vault-xxxx`, który jest Twoim miejscem przechowywania, gdzie dane kopii zapasowej są wysyłane z każdą kopią zapasową.

Zalecamy przeczytanie naszych innych przewodników, aby dowiedzieć się więcej o produkcie.

## Antyafinity

Kopie zapasowe są wykonywane poza lokalizacją, za pomocą domyślnej konfiguracji Vault, z lokalizacją magazynu w geograficznie oddzielnym miejscu od serwera Bare Metal. Ten mechanizm antyafinity zwiększa odporność danych kopii zapasowych.

Mapowanie obszarów kopii zapasowych:

| Lokalizacja Bare Metal | Vault Affinity |
| ----------------------- | -------------- |
| BHS                     | TOR            |
| SGP                     | SYD            |
| MUM                     | SGP            |
| SYD                     | SGP            |
| RBX                     | GRA            |
| GRA                     | SBG            |
| LIM                     | SBG            |
| PAR                     | RBX            |
| ERI                     | LIM            |
| WAR                     | LIM            |
| SBG                     | RBX            |
| TOR                     | BHS            |

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).