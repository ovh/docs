---
title: "Aplikacja Backup - Połączenie z VSPC"
excerpt: "Dowiedz się, jak połączyć się z Veeam Service Provider Console, aby wyświetlić swoje kopie zapasowe i agenty"
updated: 2026-01-28
---

## Wprowadzenie

Ten przewodnik wyjaśnia, jak połączyć się z Veeam Service Provider Console (VSPC), aby wyświetlić swoje kopie zapasowe, agenty i sprawdzić raporty zadań Backup.

## Wymagania początkowe

- Musisz otrzymać poświadczenia do połączenia z VSPC e-mailem po zamówieniu usługi Backup Agent.
- Kompatybilny z przeglądarka internetowa.

## W praktyce

### Dostęp do VSPC

Przejdź do adresu URL VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

### Logowanie

Zaloguj się przy użyciu poświadczeń dostarczonych Ci e-mailem. Format logowania jest zazwyczaj `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Jeśli nie masz już swoich poświadczeń, możesz je ponownie wygenerować, [skontaktowując się z obsługą](/links/support-contact).

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> To konto jest tylko do odczytu i umożliwia dostęp do wizualizacji Twoich kopii zapasowych i agentów.

### Wyświetlanie zadań kopii zapasowych

Po zalogowaniu kliknij `Backup Jobs`{.action} w lewym menu.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Wyświetlanie udanych zadań

Kliknij `Successful Jobs`{.action} dla swojego tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Wyświetlanie punktów przywracania

Możesz wyświetlić dostępne punkty przywracania dla swoich kopii zapasowych.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Dostęp do zarządzanych agentów

Aby zobaczyć listę zainstalowanych agentów, przejdź do `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Wyświetlanie raportów

Przejdź do sekcji `Reports`{.action}, aby wyświetlić swoje raporty Backup.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Otwarcie ostatniego raportu

Otwórz ostatni dostępny raport, aby wyświetlić szczegóły Twoich najnowszych kopii zapasowych.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Wyświetlanie najnowszych alarmów

Możesz wyświetlić najnowsze alerty dotyczące swoich agentów i kopii zapasowych w sekcji `Alarm Management`{.action}.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).