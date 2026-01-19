---
title: "Aplikacja Backup - Rozwiązywanie problemów"
excerpt: "Dowiedz się, jak rozwiązać potencjalne problemy związane z Aplikacją Backup"
updated: 2026-01-09
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

Zastąp wartość w bajtach pożądaną liczbą GB (GB podzielone przez 512, dla 3 GB musisz wpisać 3221225472 / 512 = 6 291 456)

Następnie uruchom ponownie usługę veeamservice.

///

/// details | Nie mogę uruchomić ręcznej kopii zapasowej.

[Skontaktuj się z obsługą OVHcloud](/links/support), aby przeprowadzić analizę. Upewnij się, że dostarczysz dzienniki i zrzuty ekranu.

///

/// details | Użycie mojego magazynu nie zostało zaktualizowane po usunięciu agenta.

Trzymamy Twoje dane przez 14 dni po usunięciu agenta, użycie magazynu zostanie zaktualizowane po 14 dniach i usunięciu danych.

///

/// details | Odinstalowałem swoją aplikację Veeam. Jak ją ponownie zainstalować?

[Skontaktuj się z obsługą OVHcloud](/links/support), aby pomóc Ci zainstalować ponownie agenta.

///

/// details | Ponownie zainstalowałem swój serwer. Jak zainstalować ponownie Aplikację Backup?

Musisz usunąć swojego agenta w sekcji Agentów swojego vspc-tenant, a następnie pobrać i zainstalować agenta na swoim nowym systemie operacyjnym.

///

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).