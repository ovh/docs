---
title: "Backup Agent - Zarządzanie kopiami zapasowymi i przywracaniem danych"
excerpt: "Dowiedz się, jak tworzyć kopie zapasowe i przywracać dane na serwerach Bare Metal za pomocą Backup Agent"
updated: 2026-01-30
---

## Wprowadzenie

Dowiedz się, jak tworzyć kopie zapasowe i przywracać dane na serwerach Bare Metal za pomocą Backup Agent.

> [!primary] 
> Więcej informacji o produkcie Backup Agent można znaleźć na [tej stronie](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).
>

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Serwer Bare Metal z zainstalowanym Backup Agent. Zapoznaj się z naszym przewodnikiem "[Jak skonfigurować pierwszą kopię zapasową](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)", aby uzyskać więcej informacji.

## W praktyce

### Kopia zapasowa

Masz dwie opcje tworzenia kopii zapasowych: automatyczna kopia zapasowa i ręczna kopia zapasowa.

#### Automatyczna kopia zapasowa

Automatyczna kopia zapasowa jest uwzględniona w polityce kopii zapasowych, którą stosujemy do Backup Agent.

Ta kopia zapasowa wykona pełną kopię zapasową serwera, która zostanie wysłana do zdalnego punktu przechowywania.

> [!warning]
>
> Uruchomi się między godziną 22:00 a 6:00 (strefa czasowa CET dla Europy - strefa czasowa EST dla Kanady i Azji).

> [!primary]
>
> Nie możesz zmienić ani wyłączyć tej automatycznej kopii zapasowej.
> W tej chwili nie możesz zmienić polityki, która tworzy kopie zapasowe całego serwera. Pracujemy nad ulepszeniem tej konfiguracji w przyszłości.

Możesz sprawdzić sukces tej kopii zapasowej za pomocą:

- Codziennego raportu o kopii zapasowej.
- Deski rozdzielczej "Backup Jobs" w konsoli Veeam Service Provider.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Ręczna kopia zapasowa

Jeśli to konieczne, możesz uruchomić ręczną kopię zapasową.

Będzie to również pełna kopia zapasowa serwera i zawsze zostanie wysłana do zdalnego punktu przechowywania.

Aby utworzyć ręczną kopię zapasową, kliknij na kartę odpowiadającą Twojemu systemowi operacyjnemu:

> [!tabs]
> Windows
>>
>> Otwórz aplikację "Veeam Agent" na swoim serwerze Bare Metal:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Kliknij przycisk `Backup Now`{.action}, aby uruchomić kopię zapasową:
>>
>> ![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}
>
> Linux
>>
>> Aby uruchomić ręczną kopię zapasową w systemie Linux, możesz użyć wiersza poleceń.
>>
>> Połącz się z serwerem Bare Metal przez SSH i wykonaj następujące polecenie, aby wyświetlić listę zadań kopii zapasowej:
>>
>> ```bash
>> sudo veeamconfig job list
>> ```
>>
>> Aby uruchomić ręczną kopię zapasową, użyj następującego polecenia, zastępując `<nazwa_zadania>` nazwą zadania kopii zapasowej:
>>
>> ```bash
>> sudo veeamconfig job start <nazwa_zadania>
>> ```
>>
>> Jeśli chcesz uruchomić wszystkie zadania kopii zapasowej, użyj:
>>
>> ```bash
>> sudo veeamconfig job start --all
>> ```
>>
>> Możesz śledzić postęp kopii zapasowej, przeglądając aktywne sesje:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Możesz również uzyskać dostęp do interfejsu do interakcji z produktem, wpisując to polecenie:
>>
>> ```bash
>> sudo veeam
>> ```

### Przywracanie danych

Jeśli potrzebujesz przywrócić dane, masz dwie opcje:

- Za pomocą kreatora przywracania plików.
- Za pomocą ISO Veeam Bare Metal Recovery.

#### Kreator przywracania plików

Aby przywrócić pliki i foldery, kliknij na kartę odpowiadającą Twojemu systemowi operacyjnemu:

> [!tabs]
> Windows
>>
>> Otwórz aplikację "Veeam Agent" na swoim serwerze Bare Metal:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Przejdź do menu i wybierz `Restore File`{.action}:
>>
>> ![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}
>>
>> Wybierz żądany punkt przywracania w kreatorze:
>>
>> ![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}
>>
>> Następnie potwierdź:
>>
>> ![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}
>>
>> Na koniec wyszukaj swój plik i wybierz opcję:
>>
>> ![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}
>>
>> - Przywracanie - Nadpisanie: Pozwala przywrócić plik, nadpisując ten obecnie znajdujący się na serwerze.
>> - Przywracanie - Zachowanie: Pozwala przywrócić plik, zachowując ten obecnie znajdujący się na serwerze.
>> - Kopiowanie do: Pozwala skopiować plik do lokalizacji na Twoim serwerze.
>> - Eksploracja: Pozwala eksplorować kopię zapasową.
>> - Właściwości: Pozwala wyświetlić właściwości pliku.
>>
>> Uruchomienie przywracania spowoduje wyświetlenie końcowego okna, które pokaże transfer:
>>
>> ![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}
>
> Linux
>>
>> Aby przywrócić pliki i foldery w systemie Linux, masz dwie opcje: przez interfejs graficzny lub przez wiersz poleceń.
>>
>> #### Przez interfejs graficzny
>>
>> 1. Połącz się ze swoim serwerem Bare Metal przez SSH.
>> 2. Uruchom interfejs Veeam, wpisując następujące polecenie:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3. W interfejsie wybierz opcję przywracania plików.
>> 4. Wybierz kopię zapasową i żądany punkt przywracania.
>> 5. Przejrzyj kopię zapasową, aby znaleźć pliki lub foldery do przywrócenia.
>> 6. Wybierz pliki i wybierz akcję przywracania:
>>    - Przywróć do oryginalnej lokalizacji
>>    - Kopiuj do nowej lokalizacji
>>    - Przeglądaj kopię zapasową
>>
>> #### Przez wiersz poleceń
>>
>> Aby przywrócić pliki przez wiersz poleceń, musisz najpierw zamontować kopię zapasową:
>>
>> 1. Wyświetl listę dostępnych kopii zapasowych:
>>
>> ```bash
>> sudo veeamconfig backup list
>> ```
>>
>> 2. Wyświetl listę punktów przywracania kopii zapasowej:
>>
>> ```bash
>> sudo veeamconfig restore list --backup <nazwa_kopii>
>> ```
>>
>> 3. Zamontuj punkt przywracania:
>>
>> ```bash
>> sudo veeamconfig mount --backup <nazwa_kopii> --restorepoint <nazwa_punktu>
>> ```
>>
>> 4. Po zamontowaniu możesz uzyskać dostęp do plików przez punkt montowania (zwykle w `/mnt/veeam/`).
>>
>> 5. Skopiuj żądane pliki z punktu montowania do ich miejsca docelowego.
>>
>> 6. Po zakończeniu przywracania odmontuj kopię zapasową:
>>
>> ```bash
>> sudo veeamconfig unmount --backup <nazwa_kopii>
>> ```
>>
>> Więcej informacji można znaleźć w [dokumentacji Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_gui.html?ver=13) i [dokumentacji dotyczącej przywracania z wiersza poleceń](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_cmd.html?ver=13).

#### Veeam Baremetal Recovery ISO

Baremetal Recovery to funkcja Veeam, która polega na utworzeniu niestandardowego ISO z wyprzedzeniem, który może być następnie używany do uruchomienia systemu i przywrócenia go z kopii zapasowej przechowywanej na innym serwerze.

Zapoznaj się z tym przewodnikiem, aby uzyskać więcej informacji: [Backup Agent - Bare Metal recovery with Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Będziesz musiał dostosować serwer i poświadczenia, aby dopasować je do tych, które dostarczyliśmy.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).