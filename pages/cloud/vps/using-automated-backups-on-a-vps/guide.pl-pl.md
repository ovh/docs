---
title: 'Korzystanie z automatycznych kopii zapasowych na prywatnym serwerze wirtualnym'
slug: uzywanie-automatyczne-kopie-zapasowe-vps
excerpt: 'Dowiedz się, jak włączyć opcję "Automatyczne kopie zapasowe" w Panelu klienta OVHcloud i korzystać z niej'
section: 'Opcje kopii zapasowych'
order: 2
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia: 01-02-2022**

## Wprowadzenie

Dzięki tej opcji będziesz mieć w Panelu klienta OVHcloud gotowe kopie zapasowe prywatnego serwera wirtualnego (VPS) — wygodnie, bez konieczności łączenia się z serwerem i ręcznego ich tworzenia oraz przywracania. Kolejną korzyścią jest dostęp do kopii zapasowej za pośrednictwem protokołu SSH po jej wcześniejszym zamontowaniu.

**Dowiedz się, jak korzystać z automatycznych kopii zapasowych prywatnego serwera wirtualnego (VPS) OVHcloud.**

> [!primary]
>
Przed zastosowaniem opcji tworzenia kopii zapasowych zalecamy przejrzenie [stron produktów oraz często zadawanych pytań (FAQ)](https://www.ovhcloud.com/pl/vps/options/) w celu porównania cen i uzyskania szczegółowych informacji.
>

## Wymagania początkowe

- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- skonfigurowana [usługa VPS](https://www.ovhcloud.com/pl/vps/) OVHcloud
- dostęp administracyjny (uprawnienia użytkownika root) do prywatnego serwera wirtualnego za pośrednictwem protokołu SSH

## W praktyce

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

### Krok 1: subskrybowanie opcji automatycznych kopii zapasowych

Po wybraniu prywatnego serwera wirtualnego kliknij kartę `Automatyczne kopie zapasowe`{.action} w menu poziomym.

W następnym kroku przeczytaj informację o cenie i kliknij pozycję `Zamów`{.action}. Po przejściu kolejnych kroków procesu zamówienia otrzymasz wiadomość e-mail z potwierdzeniem. Kopie zapasowe będą tworzone codziennie, aż do czasu anulowania tej opcji.

### Krok 2: przywracanie kopii zapasowej z Panelu klienta OVHcloud

Po wybraniu prywatnego serwera wirtualnego kliknij kartę `Automatyczne kopie zapasowe`{.action} w menu poziomym. Dostępnych będzie maksymalnie 7 codziennych kopii zapasowych (15 codzienne kopie zapasowe dla serwerów VPS z poprzednich gam). Kliknij ikonę `...`{.action} obok kopii zapasowej, którą chcesz przywrócić, i wybierz pozycję `Przywrócenie`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Jeśli niedawno zmieniło się Twoje hasło użytkownika administracyjnego (root), w wyświetlonym oknie zaznacz opcję "Modyfikuj hasło administratora przy przywracaniu", aby zachować bieżące hasło, i kliknij pozycję `Potwierdź`{.action}. Po ukończeniu zadania otrzymasz wiadomość e-mail. Czas potrzebny do przywrócenia kopii zapasowej zależy od używanej przestrzeni dyskowej.

> [!alert]
>
W procesie tworzenia automatycznych kopii zapasowych nie są uwzględniane dodatkowe dyski.
>

### Montowanie kopii zapasowej i dostęp do niej

Całkowite zastąpienie istniejącej usługi w wyniku przywrócenia nie jest konieczne. Opcja “Montowanie” umożliwia dostęp do danych kopii zapasowej w celu przywrócenia poszczególnych plików. 

> [!warning]
>OVHcloud oferuje usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tym samym odpowiada za zapewnienie ich prawidłowego działania.
>
>Niniejszy przewodnik zawiera informacje pomocne przy wykonywaniu typowych zadań. Jednak w przypadku wystąpienia problemów zalecamy kontakt z dostawcą danych usług lub wydawcą oprogramowania, ponieważ nie będziemy w stanie udzielić pomocy. Więcej informacji zawiera sekcja “Sprawdź również” tego przewodnika.
>

#### Krok 1: Panel klienta

Kliknij ikonę `...`{.action} obok kopii zapasowej, do której chcesz uzyskać dostęp, i wybierz pozycję `Montowanie`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Po ukończeniu procesu otrzymasz wiadomość e-mail. Teraz możesz się połączyć z prywatnym serwerem wirtualnym i dodać partycję, na której znajduje się kopia zapasowa.

#### protokół SSH

Najpierw połącz się z prywatnym serwerem wirtualnym przy użyciu protokołu SSH.

Aby zweryfikować nazwę nowo przyłączonego urządzenia, użyj następującego polecenia:

```
$ lsblk
```

Przykład danych wyświetlonych po wykonaniu tego polecenia:

```
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0   25G  0 disk 
├─sda1    8:1    0 24.9G  0 part /
├─sda14   8:14   0    4M  0 part 
└─sda15   8:15   0  106M  0 part 
sdb       8:16   0   25G  0 disk 
├─sdb1    8:17   0 24.9G  0 part 
├─sdb14   8:30   0    4M  0 part 
└─sdb15   8:31   0  106M  0 part /boot/efi
```

W tym przykładzie partycja zawierająca system plików kopii zapasowej ma nazwę “sdb1”.
Następnie utwórz katalog dla tej partycji i zdefiniuj go jako punkt montowania:

```
$ mkdir -p /mnt/restore
$ mount /dev/sdb1 /mnt/restore
```

Teraz możesz się przełączyć do tego folderu i uzyskać dostęp do danych kopii zapasowej.

#### Windows

Utwórz połączenie RDP (Remote Desktop) z Twoim serwerem VPS.

Po zalogowaniu kliknij prawym przyciskiem myszy przycisk `Start`{.action} i otwórz `Zarządzanie dyskami`{.action}.

![disk management](images/windowsbackup1.png){.thumbnail}

Podmontowana kopia zapasowa będzie wyglądać jak dysk podstawowy z tą samą przestrzenią dyskową co główny dysk.

![mounted backup](images/windowsbackup2.png){.thumbnail}

Dysk pojawi się jako `Offline`, kliknij prawym przyciskiem myszy na dysku i wybierz `Online`{.action}.

![online backup](images/windowsbackup3.png){.thumbnail}

Następnie zamontowana kopia zapasowa będzie dostępna w `Eksplorator plików`.

![file explorer](images/windowsbackup4.png){.thumbnail}

> [!warning]
> Podczas odmontowywania kopii zapasowej nastąpi restart serwera.
>

### Dobre praktyki w zakresie korzystania z automatycznych kopii zapasowych

Funkcja automatycznych kopii zapasowych opiera się na snapshotach VPS. Zalecamy, aby przed rozpoczęciem korzystania z tej opcji postępować zgodnie z poniższymi instrukcjami.

#### Konfiguracja agenta QEMU na serwerze VPS

Migawki to kopie systemu tworzone w ściśle określonym momencie (“live snapshots”). Aby zapewnić dostępność systemu podczas tworzenia migawki, wykorzystywany jest agent QEMU, który pozwala przygotować system plików do tego procesu.

Wymagany *qemu-guest-agent* nie jest domyślnie zainstalowany na większości dystrybucji. Ponadto, wymogi licencyjne mogą uniemożliwić OVHcloud włączenie go do dostępnych obrazów systemu operacyjnego. Dlatego zalecamy zainstalowanie agenta, jeśli nie jest on aktywowany na Twoim prywatnym serwerze wirtualnym. W tym celu połącz się z VPS przez SSH i postępuj zgodnie z poleceniami dotyczącymi Twojego systemu operacyjnego.

##### **Dystrybucje Debian (Debian, Ubuntu)**

Wprowadź poniższą komendę, aby sprawdzić, czy system został poprawnie skonfigurowany pod kątem tworzenie migawek:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Jeśli wynik jest inny (“No such file or directory”), zainstaluj najnowszy pakiet:

```
$ sudo apt-get update
$ sudo apt-get install qemu-guest-agent
```

Zrestartuj serwer VPS:

```
$ sudo reboot
```

Uruchom usługę, aby upewnić się, że działa:

```
$ sudo service qemu-guest-agent start
```

##### **Dystrybucje Redhat (CentOS, Fedora)**

Wprowadź poniższą komendę, aby sprawdzić, czy system został poprawnie skonfigurowany pod kątem tworzenie migawek:

```
$ file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Jeśli wynik jest inny (“No such file or directory”), zainstaluj i aktywuj agenta:

```
$ sudo yum install qemu-guest-agent
$ sudo chkconfig qemu-guest-agent on
```

Zrestartuj serwer VPS:

```
$ sudo reboot
```

Uruchom agenta i sprawdź, czy działa:

```
$ sudo service qemu-guest-agent start
$ sudo service qemu-guest-agent status
```

##### **Windows**

Możesz zainstalować agenta za pomocą pliku MSI dostępnego na stronie projektu Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Sprawdź, czy usługa działa za pomocą poniższej komendy powershell:

```
PS C:\Users\Administrator> Get-Service QEMU-GA
Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Sprawdź również

[Korzystanie z migawek na prywatnym serwerze wirtualnym](../uzywanie-migawki-vps/)

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
