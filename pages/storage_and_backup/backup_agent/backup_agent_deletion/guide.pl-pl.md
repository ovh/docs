---
title: "Aplikacja Backup - Procedura usuwania"
excerpt: "Dowiedz się, jak usunąć agenta, skarbonkę lub dzierżawcę aplikacji Backup"
updated: 2026-01-03
---

## Wprowadzenie

W tym przewodniku wyjaśniono, jak usunąć różne elementy Twojej usługi Backup Agent: agentów, skarbonek i dzierżawców.

## Wymagania początkowe

- Aktywna usługa Backup Agent.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## W praktyce

### Usunięcie agenta

> [!primary]
>
> **Zachowanie w zależności od użycia agenta:**
>
> - **Jeśli agent nie był używany do przesyłania danych** : Można go usunąć natychmiast. Najpierw zostanie wyłączony, a następnie usunięty.
> - **Jeśli dane zostały przesłane** : Zastosowana zostanie 14-dniowa zawiesina agenta w stanie "Wyłączony", pozwalając na usunięcie danych niemutowalnych.

> [!warning]
>
> Po zawieszeniu agenta nie możesz już utworzyć nowego agenta na tym samym serwerze. Musisz poczekać, aż pierwszy agent zostanie usunięty.

Przejdź do sekcji `Agenci`{.action} i kliknij przycisk usuwania dla odpowiedniego agenta.

Potwierdź usunięcie agenta w oknie, które się pojawi.

![Backup Agent Usuwanie agenta](images/01-backup-agent-delete-agent.png){.thumbnail}

### Usunięcie skarbonek

> [!warning]
>
> Skarbonkę nie można usunąć, jeśli zawiera dane. Jeśli chcesz usunąć skarbonkę, musisz [skontaktować się z obsługą](/links/support-contact), która przeprowadzi z Tobą sprawdzenia przed uruchomieniem usunięcia.

Przejdź do sekcji `Skarbonki`{.action} i kliknij przycisk usuwania dla odpowiedniej skarbonki.

Potwierdź usunięcie w oknie, które się pojawi.

![Backup Agent Usuwanie skarbonki](images/01-backup-agent-delete-vault.png){.thumbnail}

### Usunięcie dzierżawcy

> [!warning]
>
> Obecnie dzierżawcę nie można usunąć samodzielnie. Jeśli chcesz usunąć dzierżawcę, musisz [skontaktować się z obsługą](/links/support-contact). Przetworzymy Twoją prośbę.

Wybierz swojego dzierżawcę i kliknij przycisk usuwania.

Potwierdź usunięcie w oknie, które się pojawi.

![Backup Agent Usuwanie dzierżawcy](images/01-backup-agent-delete-tenant.png){.thumbnail}

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).