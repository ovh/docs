---
title: "Backup Agent - Asystent CLI dla systemu Linux"
excerpt: "Dowiedz się, jak korzystać ze skryptu ovh-ba-install.sh udostępnianego przez OVHcloud w celu instalacji i zarządzania agentem kopii zapasowych Veeam na serwerze Linux"
updated: 2026-04-21
---

## Wprowadzenie

**Ten przewodnik wyjaśnia, jak korzystać ze skryptu `ovh-ba-install.sh` udostępnianego przez OVHcloud w celu instalacji i zarządzania agentem kopii zapasowych Veeam na serwerze Linux.**

Dowiesz się, jak pobrać adresy URL instalacji, uruchomić instalację jednym poleceniem, korzystać z menu asystenta CLI oraz używać narzędzi diagnostycznych.

## Wymagania początkowe

- Aktywna usługa Backup Agent.

<!-- CP-NAV-START:baremetal-backup-agent -->

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

<!-- CP-NAV-END:baremetal-backup-agent -->

### Na serwerze

| Element | Szczegóły |
|--------|--------|
| **System operacyjny** | Linux **kompatybilny** z Veeam Agent for Linux (sprawdź [wymagania systemowe Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13) i [ograniczenia Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_restrictions)). |
| **Uprawnienia** | Dostęp **administratora**: polecenia instalacyjne zazwyczaj wymagają użycia **`sudo`**. |
| **Sieć** | Serwer musi mieć możliwość **pobrania** skryptu i pakietu agenta (HTTPS) oraz **połączenia** się z bramą kopii zapasowych VSPC (Veeam Service Provider Console) zgodnie z zasadami Twojej oferty. |
| **Terminal** | Sesja **SSH** lub konsola serwera, interaktywna do obsługi menu. |

### Podstawowe pojęcia

| Polecenie | Rola |
|---------|------|
| **`curl`** | Program, który **pobiera** plik z adresu internetowego (`https://…`). |
| **`sudo`** | "Jako administrator" — wymagane do instalowania oprogramowania systemowego. |
| **`bash`** | Powłoka, która **uruchamia** podany skrypt. |

## W praktyce

### Przegląd skryptu ovh-ba-install.sh

Skrypt **`ovh-ba-install.sh`** to **asystent wiersza poleceń**, który umożliwia:

- **Instalację** agenta zarządzania Veeam (**Management Agent**) przy użyciu adresu URL pakietu z Panelu klienta;
- **Instalację** globalnego polecenia **`ovhbackupagent`** na serwerze, dzięki czemu możesz otworzyć to samo menu w dowolnym momencie (`sudo ovhbackupagent`);
- **Wyświetlanie** menu tekstowego: status agenta, interfejs Veeam, diagnostyka, pomoc;
- **Diagnozowanie** problemów (połączenie z infrastrukturą, logi, archiwum dla wsparcia);
- **Odinstalowanie** pakietów Veeam oraz, opcjonalnie, skrótu **`ovhbackupagent`** (**Kreator odinstalowania**).

> [!warning]
>
> Skrypt **upraszcza instalację i codzienne monitorowanie** na serwerze; nie zastępuje konfigurowania kopii zapasowych w interfejsie Veeam Agent. **Anulowanie usługi** odbywa się w **Panelu klienta OVHcloud**, a nie za pomocą tego skryptu.
>

### Instalacja

#### Krok 1 — Pobranie adresów URL instalacji

W Panelu klienta OVHcloud otwórz usługę [Backup Agent](/links/control-panel/baremetal-backup-agent), przejdź do zakładki `Agents`{.action}, a następnie kliknij przycisk `Pobierz`{.action}. W oknie, które się otworzy, wybierz **Linux**, aby wyświetlić polecenie zawierające oba adresy URL (skrypt i pakiet Linux).

![Pobieranie Backup Agent — polecenia instalacyjne dla systemu Linux](images/01-backup-agent-download-linux-en.png){.thumbnail}

> [!primary]
>
> Skopiuj i wklej każdy adres URL osobno do pliku tekstowego przed połączeniem się przez SSH.
>

#### Krok 2 — Połączenie z serwerem

Połącz się z serwerem przez SSH za pomocą użytkownika uprawnionego do korzystania z `sudo`.

```bash
ssh <user>@<server-ip-or-hostname>
```

#### Krok 3 — Uruchomienie instalacji

Zastąp `SCRIPT_URL` (w 2 miejscach) i `AGENT_PACKAGE_URL` w poniższym poleceniu swoimi adresami URL, a następnie je uruchom.

```bash
curl -sSL "SCRIPT_URL" | sudo bash -s -- --setup "AGENT_PACKAGE_URL" --script-url "SCRIPT_URL"
```

Przykład:

```bash
curl -sSL "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh" | sudo bash -s -- --setup "https://s3.xxx.xxx.cloud.ovh.net/xxxx/LinuxAgentPackages.vspc_tenant_xxxx.sh?X-Amz-Algorithm=xxx&X-Amz-Credential=xxx&X-Amz-Date=2xxx&X-Amz-Expires=xxx&X-Amz-SignedHeaders=xxx&X-Amz-Signature=xxx" --script-url "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh"
```

#### Krok 4 — Ekran powitalny

Przeczytaj wprowadzenie, a następnie naciśnij **Enter**, aby rozpocząć instalację.

```console
 ▗▄▖ ▗▖  ▗▖▗▖ ▗▖ ▗▄▄▖▗▖    ▗▄▖ ▗▖ ▗▖▗▄▄▄     ▗▖  ▗▖    ▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖ ▗▄▖ ▗▖  ▗▖
▐▌ ▐▌▐▌  ▐▌▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █     ▝▚▞▘     ▐▌  ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▛▚▞▜▌
▐▌ ▐▌▐▌  ▐▌▐▛▀▜▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █      ▐▌      ▐▌  ▐▌▐▛▀▀▘▐▛▀▀▘▐▛▀▜▌▐▌  ▐▌
▝▚▄▞▘ ▝▚▞▘ ▐▌ ▐▌▝▚▄▄▖▐▙▄▄▖▝▚▄▞▘▝▚▄▞▘▐▙▄▄▀    ▗▞▘▝▚▖     ▝▚▞▘ ▐▙▄▄▖▐▙▄▄▖▐▌ ▐▌▐▌  ▐▌




      Backup Agent — CLI Assistant
  ─────────────────────────────────────

  Backup Agent — guided first-time setup

This setup will, in order:
  1) Install the **Veeam Management Agent** from the link you were given.
  2) Install the **ovhbackupagent** command on this server (under /usr/local/bin).
     That command is your permanent shortcut to this menu — you will not need
     to download this script again for everyday use.
  3) Show an installation summary, wait 15 seconds, then open **Agent status** to follow Backup Agent deployment.

The Veeam Backup Agent itself is deployed by our infrastructure after the
Management Agent connects; that step can take a few minutes.

Press Enter to start the installation, or Ctrl+C to cancel...
```

#### Krok 5 — Instalacja w toku

Poczekaj, aż kroki instalacji Veeam się zakończą; skrypt następnie zainstaluje polecenie **`ovhbackupagent`**.

#### Krok 6 — Podsumowanie i status agenta

Przeczytaj **podsumowanie** wyświetlane przez **15 sekund**, a następnie obserwuj ekran **Status agenta**. **Backup Agent** może pojawić się po kilku minutach (wdrożenie po stronie infrastruktury).

```console
Installation summary

[OK] The Management Agent was installed successfully.
[OK] The **ovhbackupagent** command is now available (example: sudo ovhbackupagent).

[Info] The **Backup Agent** will be deployed shortly by our infrastructure (often within a few minutes).
Next, the **Agent status** screen opens so you can follow **`veeamconsoleconfig -s`** until the Backup Agent appears.

Main menu - reminder (available again after Agent status)

**A** - Agent status: Management / Backup Agent state (this screen refreshes every few seconds).
**V** - Open the Veeam UI on the server (once the Backup Agent is installed).
**D** - Diagnostics: VSPC connectivity test, support bundle, log issue analyzer, force-stop stuck jobs.
**I** - Install or reinstall a Management Agent package from a file or URL (advanced).
**U** - Uninstall Veeam agent packages from this server (with confirmations).
**H** - Help and README.
**Q** - Exit the assistant.

[Info] Waiting 15 seconds, then opening Agent status...
```

Po 15 sekundach ekran **Status agenta** otwiera się automatycznie:

```console
Agent status (veeamconsoleconfig -s)

[Info] Retrieving Veeam status (up to 45s right after install)...
Management agent
    Connection state       : Connected
    Cloud gateway          : vspc-cgw1.prod01.eu-west-rbx.backup.ovhcloud.com:6180
    Connection account     : vspc-tenant-604276/vspc-tenant-cc1-604276
Backup agent
    Version                : 13.0.1.404
    Driver version         : 13.0.1.404
    Status                 : Running

Your agents are running well.

Auto-refresh in 5s... Press Enter to return to menu.
```

Naciśnij **Enter**, aby przejść do **menu głównego**.

### Ponowne otwarcie asystenta

Aby ponownie otworzyć asystenta później:

```bash
sudo ovhbackupagent
```

Jeśli polecenie nie zostanie znalezione, spróbuj `sudo /usr/local/bin/ovhbackupagent` lub sprawdź, czy `/usr/local/bin` znajduje się w zmiennej `PATH`.

### Menu główne

```console
 ▗▄▖ ▗▖  ▗▖▗▖ ▗▖ ▗▄▄▖▗▖    ▗▄▖ ▗▖ ▗▖▗▄▄▄     ▗▖  ▗▖    ▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖ ▗▄▖ ▗▖  ▗▖
▐▌ ▐▌▐▌  ▐▌▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █     ▝▚▞▘     ▐▌  ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▛▚▞▜▌
▐▌ ▐▌▐▌  ▐▌▐▛▀▜▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █      ▐▌      ▐▌  ▐▌▐▛▀▀▘▐▛▀▀▘▐▛▀▜▌▐▌  ▐▌
▝▚▄▞▘ ▝▚▞▘ ▐▌ ▐▌▝▚▄▄▖▐▙▄▄▖▝▚▄▞▘▝▚▄▞▘▐▙▄▄▀    ▗▞▘▝▚▖     ▝▚▞▘ ▐▙▄▄▖▐▙▄▄▖▐▌ ▐▌▐▌  ▐▌




      Backup Agent — CLI Assistant
  ─────────────────────────────────────

  ┌──────────────────────────────────────────────────────────────────────────┐
     Management Agent:   OK     Backup Agent:   OK     Last backup:  N/A 
  └──────────────────────────────────────────────────────────────────────────┘

  A  Agent status (veeamconsoleconfig -s)
  V  Open Veeam interface (veeam command)
  D  Diagnostic (test connection, support bundle, issue analyzer, job force stop)
  I  Install Management Agent (only if you want to reinstall it)
  U  Uninstall Wizard
  H  Help / README
  Q  Quit

  Your choice (A/V/D/I/U/H/Q):
```

Linia statusu u góry menu wskazuje **OK/KO** dla pakietów **Management** (`veeamma`) i **Backup** (`veeam`, `veeam-libs`) oraz zawiera informację o ostatnim zadaniu kopii zapasowej.

| Klawisz | Akcja |
|--------|------|
| **A** | Status agenta (automatyczne odświeżanie). |
| **V** | Otwórz interfejs Veeam na serwerze, aby zarządzać kopiami zapasowymi i przywracaniem (gdy Backup Agent jest gotowy). |
| **D** | Podmenu **Diagnostyka**: test VSPC, archiwum wsparcia, analiza logów, wymuszenie zatrzymania zablokowanej kopii zapasowej. |
| **I** | Ponowna instalacja Management Agent z pliku lub adresu URL (zaawansowane). |
| **U** | **Kreator odinstalowania**: odinstalowanie pakietów Veeam + opcjonalne usunięcie **`ovhbackupagent`**. |
| **H** | Wbudowana pomoc / README. |
| **Q** | Wyjście. |

### Rozwiązywanie problemów i diagnostyka

| Klawisze | Akcja |
|------|--------|
| **`D`**, a następnie **`T`** | Test łączności z bramą VSPC. |
| **`D`**, a następnie **`B`** | Wygenerowanie **archiwum** (logi + informacje systemowe) do wysłania do wsparcia. |
| **`D`**, a następnie **`I`** | **Analiza** znanych komunikatów w logach (`agent.log`, `veeaminstaller.log` itp.). |
| **`D`**, a następnie **`J`** | Narzędzie do **wymuszenia zatrzymania** sesji kopii zapasowej (używaj ostrożnie). |

Aby uzyskać zaawansowaną diagnostykę, zapoznaj się z naszym [przewodnikiem rozwiązywania problemów z Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting).

### Kreator odinstalowania (klawisz **U**)

- Usuwa agenta zgodnie z rodziną systemu operacyjnego (**yum/dnf**, **zypper**, **apt-get**).
- Opcjonalny monit o usunięcie **`/usr/local/bin/ovhbackupagent`** i powiązanego README.

> [!warning]
>
> Odinstalowanie agentów **nie anuluje** subskrypcji Backup Agent. Usługa pozostaje aktywna w OVHcloud do momentu jej anulowania w **Panelu klienta**. Agenty można **zainstalować ponownie** później z poziomu interfejsu kopii zapasowych.
>

## FAQ

**Czy mogę uruchomić skrypt bez `sudo`?**  
Nie: wymagane są operacje na poziomie systemowym, które potrzebują uprawnień administratora (`sudo`).

**Menu zamyka się natychmiast po instalacji przez potok — co zrobić?**  
Otwórz je ponownie za pomocą `sudo ovhbackupagent`.

**Gdzie znajduje się skrypt po zainstalowaniu jako polecenie?**  
Zwykle **`/usr/local/bin/ovhbackupagent`**.

**Agenty są już zainstalowane, jak zainstalować tylko asystenta?**  
Użyj `sudo bash ovh-ba-install.sh --setup-local`.

**Pobrałem skrypt ponownie, co się stanie, jeśli uruchomię go bez argumentów?**  
Wyświetli się krótki ekran powitalny, który sprawdzi, czy **`ovhbackupagent`** jest nadal zainstalowany i czy wykryto Backup Agent, a następnie może zaproponować ponowną instalację samego skrótu.

**Jak wyświetlić wbudowaną pomoc?**  
Użyj `sudo bash ovh-ba-install.sh --readme`.

## Sprawdź również

Po uruchomieniu agentów skonfiguruj kopie zapasowe za pomocą interfejsu Veeam Agent na serwerze (klawisz **`V`** w asystencie).

- [Konfiguracja pierwszej kopii zapasowej](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)
- [Zarządzanie kopiami zapasowymi i przywracaniem](/pages/storage_and_backup/backup_agent/backup_agent_backup_restore)
- [Przewodnik rozwiązywania problemów](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting)

Dołącz do [grona naszych użytkowników](/links/community).
