---
title: "Backup Agent - Połączenie z VSPC"
excerpt: "Dowiedz się, jak połączyć się z Veeam Service Provider Console, aby wyświetlić swoje kopie zapasowe i agenty"
updated: 2026-01-23
---

## Wprowadzenie

Ten przewodnik wyjaśnia, jak połączyć się z Veeam Service Provider Console (VSPC), aby wyświetlić swoje kopie zapasowe, agenty i sprawdzić raporty zadań kopii zapasowej.

## Wymagania początkowe

- Otrzymanie danych logowania do VSPC pocztą elektroniczną po zamówieniu usługi Backup Agent.
- Posiadanie kompatybilnej przeglądarki internetowej.

## W praktyce

### Dostęp do VSPC

Przejdź do adresu URL VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Navigate VSPC](images/01-backup-agent-navigate-vspc.png){.thumbnail}

### Logowanie

Zaloguj się używając danych logowania, które zostały Ci dostarczone pocztą elektroniczną. Format loginu to zazwyczaj `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Jeśli nie masz już swoich danych logowania, możesz je wygenerować ponownie, kontaktując wsparcie.

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> To konto jest tylko do odczytu i pozwala na dostęp do wizualizacji w celu wyświetlenia kopii zapasowych i agentów.

### Wyświetlanie zadań kopii zapasowej

Po zalogowaniu kliknij na `Backup Jobs`{.action} w menu po lewej stronie.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Wyświetlanie pomyślnych zadań

Kliknij na `Successful Jobs`{.action} dla Twojego najemcy.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Wyświetlanie punktów przywracania

Możesz wyświetlić dostępne punkty przywracania dla swoich kopii zapasowych.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Dostęp do zarządzanych agentów

Aby zobaczyć listę zainstalowanych agentów, przejdź do `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Wyświetlanie raportów

Przejdź do sekcji `Reports`{.action}, aby wyświetlić raporty kopii zapasowych.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Otwieranie ostatniego raportu

Otwórz ostatni dostępny raport, aby wyświetlić szczegóły najnowszych kopii zapasowych.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Wyświetlanie najnowszych alarmów

Możesz wyświetlić najnowsze alarmy dotyczące swoich agentów i kopii zapasowych w sekcji "Alarm Management".

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).

