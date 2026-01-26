---
title: "Backup Agent - Jak skonfigurować pierwsze kopie zapasowe"
excerpt: "Jak skonfigurować pierwsze kopie zapasowe na serwerze Bare Metal za pomocą produktu Backup Agent"
updated: 2026-01-23
---

## Wprowadzenie

Zamówiłeś właśnie rozwiązanie Backup Agent dla swojego serwera Bare Metal, odkryj, jak skonfigurować pierwsze kopie zapasowe.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager). 
- Zamówiony Backup Agent jednocześnie z Twoim serwerem Bare Metal, lub później za pomocą menu `Agent kopii zapasowej`{.action} w Panelu klienta OVHcloud.
- Musisz mieć uruchomiony i skonfigurowany system operacyjny na swoim serwerze Bare Metal.

## W praktyce

Jeśli chcesz uzyskać więcej informacji o działaniu produktu Backup Agent, zapoznaj się z naszym przewodnikiem "[Backup Agent - Prezentacja produktu](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation)", aby uzyskać więcej informacji.

Aby utworzyć kopię zapasową dla Twojego serwera, należy:
* Dodać Twój serwer do Backup Agent.
* Pobrać agenta.
* Zainstalować agenta na Twoim serwerze.

Po zainstalowaniu agenta otrzyma on zasadę kopii zapasowych i umożliwi wykonanie kopii zapasowych.

Po wykonaniu wszystkich tych kroków zostanie wykonana Twoja pierwsza kopia zapasowa.

## Dodaj swój serwer do Backup Agent

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz `Agent kopii zapasowej`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Kliknij swój vspc-tenant w sekcji `Usługi`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Przejdź do sekcji `Agenci`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

> [!primary]
>
> Powinieneś znaleźć serwer Bare Metal, który wybrałeś w zamówieniu, w tabeli ze statusem "not_installed". To jest normalne, musisz tylko zainstalować agenta na swoim serwerze.
>

Kliknij przycisk `Pobierz`{.action} u góry tabeli wyświetlającej listę Twoich agentów.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Wybierz swój system operacyjny i wybierz opcję pobrania pliku instalacyjnego lub jedno z poleceń, aby go pobrać.

![Backup Agent Download Windows](images/01-backup-agent-download-windows-en.png){.thumbnail}

Aby zainstalować agenta na swoim serwerze Bare Metal, wykonaj poniższe kroki zgodnie z Twoim systemem operacyjnym:

> [!tabs]
> ### Windows
>>
>> Po pobraniu pliku instalacyjnego na serwerze Bare Metal możesz uruchomić go i postępować zgodnie z procedurą oprogramowania:

![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}

![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}

![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}

![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}

![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}

Po skonfigurowaniu zobaczysz, jak Twój agent łączy się z naszą infrastrukturą, aby powrócić do zasad kopii zapasowych:

![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}

![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}

Na koniec, po zakończeniu, zobaczysz skonfigurowanego agenta kopii zapasowych na swoim serwerze Bare Metal:

![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}

>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> ### Linux
>> Wybierz swój system operacyjny i wybierz opcję pobrania pliku instalacyjnego lub jedno z poleceń, aby go pobrać.
>>
>> ![Backup Agent Download Linux](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Po zainstalowaniu pliku na serwerze Bare Metal przejdź do jego katalogu i uruchom go w następujący sposób:

```bash
sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
```

Po zakończeniu instalacji możesz sprawdzić jej stan za pomocą poniższego polecenia:

>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <UTILISATEUR>
>> ```
>> 
>> Możesz zobaczyć, że jeden element nie jest jeszcze zainstalowany:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> To jest całkowicie normalne, zastosujemy konfigurację, która umożliwia wdrożenie Backup Agent z zasadą kopii zapasowych.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).