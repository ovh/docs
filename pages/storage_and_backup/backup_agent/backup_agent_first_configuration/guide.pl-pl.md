---
title: "Backup Agent - Jak skonfigurować pierwsze kopie zapasowe"
excerpt: "Jak skonfigurować pierwsze kopie zapasowe na serwerze Bare Metal za pomocą produktu Backup Agent"
updated: 2026-01-09
---

## Wprowadzenie

Zamówiłeś właśnie rozwiązanie Backup Agent dla swojego serwera Bare Metal, odkryj, jak skonfigurować pierwsze kopie zapasowe.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager). 
- Zamówiony Backup Agent jednocześnie z Twoim serwerem Bare Metal, lub później za pomocą menu `Agent kopii zapasowej`{.action} w Panelu klienta OVHcloud.
- Musisz mieć uruchomiony i skonfigurowany system operacyjny na swoim serwerze Bare Metal.

## W praktyce

Aby skonfigurować pierwsze kopie zapasowe, musisz zainstalować agenta na swoim serwerze Bare Metal.

Funkcjonowanie wygląda następująco:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail} 

Po zainstalowaniu agenta otrzyma on zasadę kopii zapasowych i umożliwi wykonanie kopii zapasowych.

Aby zainstalować agenta na swoim serwerze Bare Metal, wykonaj poniższe kroki zgodnie z Twoim systemem operacyjnym:

### Windows

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz `Agent kopii zapasowej`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Kliknij swój vspc-tenant w sekcji `Usługi`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Przejdź do sekcji `Agenci`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Kliknij przycisk `Pobierz`{.action} u góry tabeli wyświetlającej listę Twoich agentów.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Wybierz swój system operacyjny i wybierz opcję pobrania pliku instalacyjnego lub jedno z poleceń, aby go pobrać.

![Backup Agent Step 13](images/01-backup-agent-step13.png){.thumbnail}

Po pobraniu pliku instalacyjnego na serwerze Bare Metal możesz uruchomić go i postępować zgodnie z procedurą oprogramowania:

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

![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}

Domyślnie kopie zapasowe są uruchamiane między godziną 22:00 a 6:00, ale możesz ręcznie uruchomić kopię zapasową, klikając przycisk `Backup Now`{.action}.

### Linux

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz `Agent kopii zapasowej`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Kliknij swój vspc-tenant w sekcji `Usługi`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Przejdź do sekcji `Agenci`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Kliknij przycisk `Pobierz`{.action} u góry tabeli wyświetlającej listę Twoich agentów.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Wybierz swój system operacyjny i wybierz opcję pobrania pliku instalacyjnego lub jedno z poleceń, aby go pobrać.

![Backup Agent Step 14](images/01-backup-agent-step14.png){.thumbnail}

Po zainstalowaniu pliku na serwerze Bare Metal przejdź do jego katalogu i uruchom go w następujący sposób:

```bash
sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
```

Po zakończeniu instalacji możesz sprawdzić jej stan za pomocą poniższego polecenia:

```bash
sudo veeamconsoleconfig -s

Management agent
    Connection state       : Connected
    Cloud gateway          : <OVHDOMAIN>:6180
    Connection account     : <UTILISATEUR>
```

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).