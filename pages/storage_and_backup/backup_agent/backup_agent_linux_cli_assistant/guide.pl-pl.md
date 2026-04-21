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

- **`curl`**: program, który **pobiera** plik z adresu internetowego (`https://…`).
- **`sudo`**: "jako administrator" — wymagane do instalowania oprogramowania systemowego.
- **`bash`**: powłoka, która **uruchamia** podany skrypt.

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

### Pobieranie adresów URL instalacji

W Panelu klienta OVHcloud otwórz usługę [Backup Agent](/links/control-panel/baremetal-backup-agent), przejdź do zakładki `Agenci`{.action}, a następnie kliknij przycisk `Pobierz`{.action}. W oknie, które się otworzy, wybierz **Linux**, aby wyświetlić polecenie zawierające oba adresy URL (skrypt i pakiet Linux).

![Pobieranie Backup Agent — polecenia instalacyjne dla systemu Linux](images/01-backup-agent-download-linux-en.png){.thumbnail}

> [!primary]
>
> Skopiuj i wklej każdy adres URL osobno do pliku tekstowego przed połączeniem się przez SSH.
>

### Jedna linia do zainstalowania agenta i asystenta

Korzystając z podanego polecenia, możesz zainstalować agenta i asystenta jednocześnie. Zastąp `SCRIPT_URL` (w 2 miejscach) i `AGENT_PACKAGE_URL` linkami skopiowanymi wcześniej.

```bash
curl -sSL "SCRIPT_URL" | sudo bash -s -- --setup "AGENT_PACKAGE_URL" --script-url "SCRIPT_URL"
```

Przykład:

```bash
curl -sSL "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh" | sudo bash -s -- --setup "https://s3.xxx.xxx.cloud.ovh.net/xxxx/LinuxAgentPackages.vspc_tenant_xxxx.sh?X-Amz-Algorithm=xxx&X-Amz-Credential=xxx&X-Amz-Date=2xxx&X-Amz-Expires=xxx&X-Amz-SignedHeaders=xxx&X-Amz-Signature=xxx" --script-url "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh"
```

### Po udanej instalacji

1. Wyświetlane jest **podsumowanie** przez **15 sekund** (wykonane czynności, rola menu, najważniejsze przypomnienia).
2. Otwiera się ekran **Status agenta**, aby śledzić stan Veeam (`veeamconsoleconfig -s`) z automatycznym odświeżaniem.
3. **Enter** przenosi z powrotem do **menu głównego**.

Aby ponownie otworzyć asystenta:

```bash
sudo ovhbackupagent
```

(Jeśli polecenie nie zostanie znalezione, spróbuj `sudo /usr/local/bin/ovhbackupagent` lub sprawdź, czy `/usr/local/bin` znajduje się w zmiennej `PATH`.)

### Inne przydatne polecenia

| Potrzeba | Przykładowe polecenie |
|--------|---------------------|
| Agenty już zainstalowane, instalacja **tylko** `ovhbackupagent` + menu | `sudo bash ovh-ba-install.sh --setup-local` |
| Pomoc / README w terminalu | `sudo bash ovh-ba-install.sh --readme` |

### Ponowne pobranie skryptu?

Jeśli uruchomisz skrypt **bez argumentów** w terminalu interaktywnym (`sudo bash ovh-ba-install.sh`), wyświetli się krótki ekran **powitalny**, który sprawdzi, czy **`ovhbackupagent`** jest nadal zainstalowany i czy wykryto Backup Agent, a następnie może zaproponować **ponowną instalację samego skrótu**.

## Przykład krok po kroku: pierwsza instalacja

**Scenariusz**: nowy serwer Linux; masz oba adresy URL (skrypt i pakiet Linux) skopiowane z okna **Pobieranie agenta** w Panelu klienta.

1\. Połącz się z serwerem przez SSH za pomocą użytkownika uprawnionego do korzystania z `sudo`.

```bash
ssh <user>@<server-ip-or-hostname>
```

2\. Zastąp `SCRIPT_URL` (w 2 miejscach) i `AGENT_PACKAGE_URL` w poniższym poleceniu swoimi adresami URL, a następnie je uruchom.

```bash
curl -sSL "SCRIPT_URL" | sudo bash -s -- --setup "AGENT_PACKAGE_URL" --script-url "SCRIPT_URL"
```

3\. Przeczytaj wprowadzenie, a następnie naciśnij **Enter**, aby rozpocząć instalację.

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

4\. Poczekaj, aż kroki instalacji Veeam się zakończą; skrypt następnie zainstaluje **`ovhbackupagent`**.

5\. Przeczytaj **podsumowanie** przez 15 sekund, a następnie obserwuj **Status agenta**; **Backup Agent** może pojawić się po kilku minutach (wdrożenie po stronie infrastruktury).

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

6\. Naciśnij **Enter**, aby przejść do menu; użyj **`A`**, aby ponownie wyświetlić status, lub **`D`**, aby uruchomić diagnostykę, jeśli coś nie działa.

## Menu główne

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

| Klawisz | Rola |
|--------|------|
| **A** | Status agenta (automatyczne odświeżanie). |
| **V** | Otwórz interfejs Veeam na serwerze, aby zarządzać kopiami zapasowymi i przywracaniem (gdy Backup Agent jest gotowy). |
| **D** | Podmenu **Diagnostyka**: test VSPC, archiwum wsparcia, analiza logów, wymuszenie zatrzymania zablokowanej kopii zapasowej. |
| **I** | Ponowna instalacja Management Agent z pliku lub adresu URL (zaawansowane). |
| **U** | **Kreator odinstalowania**: odinstalowanie pakietów Veeam + opcjonalne usunięcie **`ovhbackupagent`**. |
| **H** | Wbudowana pomoc / README. |
| **Q** | Wyjście. |

Linia statusu u góry menu wskazuje **OK/KO** dla pakietów **Management** (`veeamma`) i **Backup** (`veeam`, `veeam-libs`) oraz zawiera informację o ostatnim zadaniu kopii zapasowej.

## Rozwiązywanie problemów i diagnostyka

- **`D`**, a następnie **`T`**: test łączności z bramą VSPC.
- **`D`**, a następnie **`B`**: wygenerowanie **archiwum** (logi + informacje systemowe) do wysłania do wsparcia.
- **`D`**, a następnie **`I`**: **analiza** znanych komunikatów w logach (`agent.log`, `veeaminstaller.log` itp.).
- **`D`**, a następnie **`J`**: narzędzie do **wymuszenia zatrzymania** sesji kopii zapasowej (używaj ostrożnie).

Aby uzyskać zaawansowaną diagnostykę, zapoznaj się z naszym [przewodnikiem rozwiązywania problemów z Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting).

## Kreator odinstalowania (klawisz **U**)

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
Możesz je ponownie otworzyć za pomocą:

```bash
sudo ovhbackupagent
```

**Gdzie znajduje się skrypt po zainstalowaniu jako polecenie?**  
Zwykle **`/usr/local/bin/ovhbackupagent`**.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).
