---
title: "Backup Agent - Rozwiązywanie problemów"
excerpt: "Dowiedz się, jak rozwiązać potencjalne problemy związane z Aplikacją Backup"
updated: 2026-02-09
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>


## Wprowadzenie

Poniżej znajduje się lista potencjalnych problemów, które mogą wystąpić w przypadku korzystania z produktu Aplikacja Backup, oraz sposobów ich rozwiązania.

## Wymagania początkowe

- Co najmniej jeden serwer Bare Metal z zainstalowaną Aplikacją Backup. Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Jak skonfigurować pierwsze kopie zapasowe](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)".

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Lista możliwych problemów

/// details | Moja Aplikacja Backup nie może się połączyć z Twoim serwerem.

Upewnij się, że zapora pozwala Ci komunikować się z naszym serwerem `vspc-cgw1.prod01.eu-west-rbx.Backup.ovhcloud.com` (137.74.125.230) w Europie za pomocą portu TCP i UDP 6180.

Upewnij się, że inne usługi nie korzystają z portów, które mogą konfliktować się z Twoim serwerem.

Znajdziesz dzienniki swojego agenta w folderze: `C:\ProgramData\Veeam\` lub `/var/logs`.

///

/// details | Twój serwer nie może zainstalować Aplikacji Backup na moim serwerze.

Aplikacja Backup obsługuje dystrybucje Windows i jądra native Linux. Jeśli wprowadziłeś zmiany w swoim jądrze, musisz upewnić się, że masz odpowiednie pakiety do zainstalowania agenta. Możesz znaleźć listę wymaganych parametrów tutaj: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

///

/// details | Mój agent nie może wykonać kopii zapasowej. Otrzymuję błąd: "Nie można wykonać kopii zapasowej. Nie znaleziono modułu blksnap ani veeamsnap."

Aplikacja obsługuje dystrybucje Windows i native jądra Linux. Jeśli wprowadziłeś zmiany w swoim jądrze, musisz upewnić się, że masz odpowiednie pakiety do zainstalowania agenta. Możesz znaleźć listę wymaganych parametrów tutaj: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>

Najpierw potrzebujesz nagłówków jądra Linux, a następnie możesz spróbować zainstalować lub przekonfigurować swój pakiet veeamsnap, veeamblksnap lub blksnap, w zależności od Twojego systemu operacyjnego.

///

/// details | Mój agent nie może wykonać kopii zapasowej. Otrzymuję błąd: `POSIX: Nie można utworzyć ani otworzyć pliku [/.veeamsnapstorage/veeamsnapstore`

Aby wykonać kopię zapasową, Veeam tworzy migawki, które dodatkowo zapisują dane, które zostaną zapisane w kopii zapasowej. Ta migawka nazywa się "veeamsnapstorage".

Aby rozwiązać problem, możesz zwiększyć rozmiar migawki za pomocą pliku `/etc/veeam/veeam.ini`:

```bash
[blksnap]
 
# Minimalny dozwolony rozmiar magazynu różnic w sektorach
diffStorageMinimum = 2097152
```

Zastąp wartość żądaną liczbą sektorów, zamieniając najpierw żądaną wielkość z gigabajtów na bajty, a następnie dzieląc tę liczbę bajtów przez 512.<br>
Na przykład: Dla wielkości 3 GB (3 221 225 472 bajtów) wartość do podania to 6 291 456 (3 221 225 472 / 512).

Następnie uruchom ponownie usługę veeamservice.

///

/// details | Nie mogę uruchomić ręcznej kopii zapasowej.

[Skontaktuj się z obsługą OVHcloud](/links/support-contact), aby przeprowadzić analizę. Upewnij się, że dostarczysz dzienniki i zrzuty ekranu.

///

/// details | Moja kopia zapasowa jest w błędzie, jak mogę zobaczyć problem?

Jeśli Twoja kopia zapasowa jest w błędzie, możesz zdiagnozować problem bezpośrednio z agenta. Kliknij na kartę odpowiadającą Twojemu systemowi operacyjnemu:

> [!tabs]
> Windows
>>
>> Aby zobaczyć szczegóły błędu kopii zapasowej w systemie Windows:
>>
>> 1. Otwórz aplikację "Veeam Agent" na swoim serwerze Bare Metal.
>> 2. W głównym interfejsie zobaczysz status swoich kopii zapasowych.
>> 3. Kliknij na kopię zapasową w błędzie, aby zobaczyć szczegóły błędu.
>> 4. Sprawdź sekcję **History** lub **Last Session**, aby zobaczyć szczegółowe komunikaty o błędach.
>>
>> Interfejs wyświetli precyzyjne informacje o przyczynie błędu, co pozwoli Ci szybko zidentyfikować problem.
>
> Linux
>>
>> Aby zobaczyć szczegóły błędu kopii zapasowej w systemie Linux, możesz użyć interfejsu użytkownika:
>>
>> 1\. Połącz się ze swoim serwerem Bare Metal przez SSH.
>> 2\. Uruchom interfejs Veeam, wpisując następujące polecenie:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. W interfejsie przejdź do sekcji kopii zapasowych, aby zobaczyć status swoich zadań.
>> 4\. Wybierz kopię zapasową w błędzie, aby wyświetlić szczegóły błędu.
>>
>> Możesz również sprawdzić dzienniki bezpośrednio przez wiersz poleceń:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> To polecenie wyświetli listę sesji kopii zapasowych wraz z ich statusem i szczegółami ewentualnych błędów.

///

/// details | Użycie mojego magazynu nie zostało zaktualizowane po usunięciu agenta.

Trzymamy Twoje dane przez 14 dni po usunięciu agenta, użycie magazynu zostanie zaktualizowane po 14 dniach i usunięciu danych.

///

/// details | Chcę zmienić hasło do logowania się do Veeam Service Provider Console (VSPC).

Hasła można zmienić, korzystając z linku "Zapomniałeś hasła?", który jest dostępny w konsoli VSPC.

![Reset password 1](images/reset_password_1.png){.thumbnail}

![Reset password 2](images/reset_password_2.png){.thumbnail}

///

/// details | Ponownie zainstalowałem swój serwer. Jak zainstalować ponownie Aplikację Backup?

Musisz pobrać agenta ze swojego [Panelu klienta OVHcloud](/links/manager) i zainstalować go na swoim nowym systemie operacyjnym.

///

## Znajdowanie i eksportowanie dzienników

Aby rozwiązać problemy z Aplikacją Backup, często konieczne jest przeglądanie i eksportowanie dzienników produktu. Kliknij na kartę odpowiadającą Twojemu systemowi operacyjnemu:

> [!tabs]
> Windows
>>
>> **Lokalizowanie dzienników**
>>
>> Dzienniki Veeam Agent dla systemu Windows są przechowywane w następującym katalogu:
>>
>> ```
>> C:\ProgramData\Veeam\Endpoint\Logs
>> ```
>>
>> **Eksportowanie dzienników**
>>
>> Aby wyeksportować dzienniki w systemie Windows, możesz użyć interfejsu graficznego Veeam Agent:
>>
>> 1. Otwórz aplikację "Veeam Agent" na swoim serwerze.
>> 2. Przejdź do menu **Help** > **Export Logs**.
>> 3. Wybierz katalog docelowy dla archiwum dzienników.
>> 4. Kliknij **Export**, aby wygenerować archiwum.
>>
>> Archiwum zostanie utworzone w formacie `.zip` i będzie zawierać wszystkie dzienniki i pliki konfiguracyjne niezbędne do diagnozy.
>>
>> Więcej informacji można znaleźć w artykule [Veeam KB2404](https://www.veeam.com/kb2404).
>
> Linux
>>
>> **Lokalizowanie dzienników**
>>
>> Dzienniki Veeam Agent dla systemu Linux są przechowywane w następującym katalogu:
>>
>> ```bash
>> /var/log/veeam/
>> ```
>>
>> Możesz również sprawdzić dzienniki usługi Veeam:
>>
>> ```bash
>> /var/log/veeam/veeamservice.log
>> ```
>>
>> **Eksportowanie dzienników**
>>
>> Aby wyeksportować dzienniki w systemie Linux, masz dwie opcje:
>>
>> 1\. Przez wiersz poleceń
>>
>> Użyj następującego polecenia, aby wyeksportować dzienniki. Archiwum zostanie zapisane w bieżącym katalogu roboczym:
>>
>> ```bash
>> sudo veeamconfig grabLogs
>> ```
>>
>> 2\. Przez panel sterowania
>>
>> Jeśli masz dostęp do interfejsu graficznego, możesz wyeksportować dzienniki przez panel sterowania Veeam Agent, określając katalog docelowy.
>>
>> Archiwum zostanie utworzone w formacie `.tar.gz` i będzie zawierać wszystkie dzienniki i pliki konfiguracyjne niezbędne do diagnozy.
>>
>> Więcej informacji można znaleźć w [dokumentacji Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/logs_export.html?ver=13).

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).