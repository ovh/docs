---
title: "Jak korzystać z automatycznych kopii zapasowych na serwerze VPS"
excerpt: "Dowiedz się, jak korzystać z opcji zautomatyzowany backup zapasowych z poziomu Panelu klienta OVHcloud do zabezpieczania danych"
updated: 2025-10-17
---

<style>
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.grid-gallery img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>

## Wprowadzenie

Opcja zautomatyzowany backup zapasowych dla serwerów VPS pozwala na udostępnienie pełnej kopii zapasowej systemu w Panelu klienta OVHcloud bez konieczności łączenia się z serwerem w celu ich ręcznego utworzenia i przywrócenia. Kolejną korzyścią jest możliwość zdalnego dostępu do plików kopii zapasowej przy jej wcześniejszym zamontowaniu.

**Dowiedz się, jak utworzyć zautomatyzowany backup zapasową VPS od OVHcloud.**

> [!primary]
> Przed zastosowaniem opcji tworzenia kopii zapasowych zalecamy przejrzenie [stron produktów oraz często zadawanych pytań (FAQ)](/links/bare-metal/vps-options) w celu porównania cen i uzyskania szczegółowych informacji.
>

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Serwer [Prywatne serwery wirtualne](/links/bare-metal/vps) z poziomu Twojego konta OVHcloud.
- Dostęp administracyjny (uprawnienia użytkownika root) do prywatnego serwera wirtualnego za pośrednictwem protokołu SSH.

> [!warning]
> Funkcja ta nie jest aktualnie dostępna dla prywatnych serwerów wirtualnych w [Local Zones](/links/bare-metal/vps-lz).
>

## W praktyce

### Omówienie zawartości

- [Jak zmienić ofertę na zautomatyzowany backup Premium](#premium)
- [Skonfiguruj godzinę kopii zapasowej](#time)
- [Jak przywrócić kopię zapasową z poziomu Panelu klienta OVHcloud](#restore)
- [Montowanie kopii zapasowej i dostęp do niej](#mount)
    - [Za Pomocą Secure Shell](#shell)
    - [Za Pomocą Systemu Windows](#windows)
- [Dobre praktyki dotyczące korzystania ze zautomatyzowany backup zapasowych](#bestpractice)
    - [Konfiguracja agenta QEMU na serwerze VPS](#qemu)
        - [Dystrybucje Debian](#deb)
        - [Dystrybucje Redhat](#red)
        - [Windows](#win)


W przypadku zamówienia VPS codzienna automatyczna kopia zapasowa jest zawarta w cenie. Ta opcja kopii zapasowych pozwala na:

- Montowanie i przywracanie dziennej kopii zapasowej.
- Określ godzinę dnia, w którym kopia zapasowa zostanie utworzona.

Aby uzyskać większą elastyczność w zakresie kopii zapasowych, możesz włączyć opcję zautomatyzowany backup Premium.

<a name="premium"></a>

### Jak subskrybować zautomatyzowany backup Premium

Opcja zautomatyzowany backup Premium tworzy kopię zapasową Twojego VPS co 24 godziny w wyznaczonym czasie.  
Będziesz miał dostęp do wszystkich dziennych kopii zapasowych z ostatnich 7 dni. Po utworzeniu 7 kopii zapasowych, każda nowa kopia zastąpi najstarszą.

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), otwórz sekcję `Bare Metal Cloud`{.action}, wybierz `Prywatne serwery wirtualne`{.action} a następnie kliknij nazwę swojego VPS.

Kliknij kartę `Zautomatyzowany backup`{.action} w poziomym menu.

Kliknij link `Wła̧cz zautomatyzowany backup premium`{.action} (dla usług zamówionych od 7 sierpnia 2025) lub przycisk `Włącz zautomatyzowany backup`{.action}.

<div class="grid-gallery">
  <img src="/images/backup_vps2025.png" alt="autobackup vps2025">
  <img src="/images/backup_vps_leg.png" alt="autobackup vps">
</div>

W następnym kroku przeczytaj informację o cenie i kliknij pozycję `Zamów`{.action}. Po przejściu kolejnych kroków procesu zamówienia otrzymasz wiadomość e-mail z potwierdzeniem.

<a name="time"></a>

### Skonfiguruj godzinę kopii zapasowej

Możesz zmienić godzinę wykonywania kopii zapasowej.

Po wybraniu prywatnego serwera wirtualnego kliknij kartę `Zautomatyzowany backup`{.action} w menu poziomym.

Kliknij `...`{.action} nad tabelą, a następnie `Edytuj`{.action}.

![autobusami](images/backup_vps_time01.png){.thumbnail}

W oknie, które się wyświetla zmień czas dnia (standard czasu UTC 24 godziny). Kliknij na `Zatwierdź`{.action}.

![autobusami](images/backup_vps_time02.png){.thumbnail}

> [!primary]
>
> Po zatwierdzeniu w Panelu klienta zmiana zostanie wykonana w ciągu 24-48 godzin.
>

<a name="restore"></a>

### Jak przywrócić kopię zapasową z poziomu Panelu klienta OVHcloud

Po wybraniu prywatnego serwera wirtualnego kliknij kartę `Zautomatyzowany backup`{.action} w menu poziomym.  
Kliknij ikonę `...`{.action} obok kopii zapasowej, którą chcesz przywrócić, i wybierz pozycję `Przywrócenie`{.action}.

![autobackupvps](images/backup_vps_step1.png){.thumbnail}

Jeśli niedawno zmieniło się Twoje hasło użytkownika administracyjnego (*root*), w wyświetlonym oknie zaznacz opcję "Modyfikuj hasło administratora przy przywracaniu", aby zachować bieżące hasło, i kliknij pozycję `Potwierdź`{.action}. Po ukończeniu zadania otrzymasz wiadomość e-mail. Czas potrzebny do przywrócenia kopii zapasowej zależy od używanej przestrzeni dyskowej.

> [!alert]
> W procesie tworzenia zautomatyzowanego backupu zapasowych nie są uwzględniane dodatkowe dyski.
>

<a name="mount"></a>

### Montowanie kopii zapasowej i dostęp do niej

Całkowite zastąpienie istniejącej usługi w wyniku przywrócenia nie jest konieczne. Opcja "Montowanie" umożliwia dostęp do danych kopii zapasowej w celu przywrócenia poszczególnych plików. 

> [!warning]
>
> OVHcloud oferuje usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tym samym odpowiada za zapewnienie ich prawidłowego działania.
>
> Ten przewodnik zawiera informacje pomocne przy wykonywaniu typowych zadań. W przypadku trudności zalecamy skorzystanie z pomocy [specjalisty](/links/partner) lub kontakt z [społecznością OVHcloud](/links/community). Więcej informacji zawiera sekcja [Sprawdź również](#go-further) tego przewodnika.
>

Po wybraniu prywatnego serwera wirtualnego kliknij zakładkę `Zautomatyzowany backup`{.action} w menu poziomym.
Kliknij ikonę `...`{.action} obok kopii zapasowej, do której chcesz uzyskać dostęp, i wybierz pozycję `Montowanie`{.action}.

![autobackupvps](images/backup_vps_step2.png){.thumbnail}

Gdy korzystasz z tej opcji, utworzona zostaje kopia zapasowa w trybie odczytu i zapisu. Oryginalna kopia zapasowa pozostaje dostępna dla przyszłych przywróceń.

Po ukończeniu procesu otrzymasz wiadomość e-mail. Teraz możesz się połączyć z prywatnym serwerem wirtualnym i dodać partycję, na której znajduje się kopia zapasowa.

<a name="shell"></a>

#### Za Pomocą Secure Shell

Najpierw połącz się z prywatnym serwerem wirtualnym przy użyciu protokołu SSH.

Aby zweryfikować nazwę nowo przyłączonego urządzenia, użyj następującego polecenia:

```bash
lsblk
```

Przykład danych wyświetlonych po wykonaniu tego polecenia:

```console
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

W tym przykładzie partycja zawierająca system plików kopii zapasowej ma nazwę "sdb1".
Następnie utwórz katalog dla tej partycji i zdefiniuj go jako punkt montowania:

```bash
sudo mkdir -p /mnt/restore
sudo mount /dev/sdb1 /mnt/restore
```

Teraz możesz się przełączyć do tego folderu i uzyskać dostęp do danych kopii zapasowej.

Pamiętaj, aby odmontować automatyczną kopię zapasową po zakończeniu korzystania z niej. Kliknij przycisk `Odmontuj backup`{.action} w zakładce `Zautomatyzowany backup`{.action}, następnie zatwierdź w oknie, które się wyświetli.

![unmount](images/backup_vps_unmount.png){.thumbnail}

<a name="windows"></a>

#### Za Pomocą Systemu Windows

Utwórz połączenie RDP (Remote Desktop) z Twoim serwerem VPS.

Po zalogowaniu kliknij prawym przyciskiem myszy przycisk `Start`{.action} i otwórz `Zarządzanie dyskami`{.action}.

![disk management](images/windowsbackup1.png){.thumbnail}

Podmontowana kopia zapasowa będzie wyglądać jak dysk podstawowy z tą samą przestrzenią dyskową co główny dysk.

![mounted backup](images/windowsbackup2.png){.thumbnail}

Dysk pojawi się jako `Offline`, kliknij prawym przyciskiem myszy na dysku i wybierz `Online`{.action}.

![online backup](images/windowsbackup3.png){.thumbnail}

Następnie zamontowana kopia zapasowa będzie dostępna w `Eksplorator plików`.

![file explorer](images/windowsbackup4.png){.thumbnail}

Pamiętaj, aby odmontować automatyczną kopię zapasową po zakończeniu korzystania z niej. Kliknij przycisk `Odmontuj backup`{.action} w zakładce `Zautomatyzowany backup`{.action}, następnie zatwierdź w oknie, które się wyświetli.

![unmount](images/backup_vps_unmount.png){.thumbnail}

> [!warning]
>
> Podczas odmontowywania kopii zapasowej nastąpi restart serwera.
>

<a name="bestpractice"></a>

### Dobre praktyki w zakresie korzystania z automatycznych kopii zapasowych

Funkcja zautomatyzowany backup zapasowych opiera się na snapshotach VPS. Zalecamy, aby przed rozpoczęciem korzystania z tej opcji postępować zgodnie z poniższymi instrukcjami.

<a name="qemu"></a>

#### Konfiguracja agenta QEMU na serwerze VPS

Migawki to kopie systemu tworzone w ściśle określonym momencie (“live snapshots”). Aby zapewnić dostępność systemu podczas tworzenia migawki, wykorzystywany jest agent QEMU, który pozwala przygotować system plików do tego procesu.

Agent "**qemu-guest-agent**" nie è installato di default sulla maggior parte delle distribuzioni. Ponadto, wymogi licencyjne mogą uniemożliwić OVHcloud włączenie go do dostępnych obrazów systemu operacyjnego. Dlatego zalecamy zainstalowanie agenta, jeśli nie jest on aktywowany na Twoim prywatnym serwerze wirtualnym. W tym celu połącz się z VPS przez SSH i postępuj zgodnie z poleceniami dotyczącymi Twojego systemu operacyjnego.

<a name="deb"></a>

##### **Dystrybucje Debian (Debian, Ubuntu)**

Wprowadź poniższą komendę, aby sprawdzić, czy system został poprawnie skonfigurowany pod kątem tworzenie migawek:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
```

Oczekiwany wynik:

```console
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Jeśli dane wyjściowe są różne, na przykład "Brak takiego pliku lub katalogu", zainstaluj najnowszą wersję pakietu:

```bash
sudo apt-get update
sudo apt-get install qemu-guest-agent
```

Zrestartuj serwer VPS:

```bash
sudo reboot
```

Uruchom usługę, aby upewnić się, że działa:

```bash
sudo service qemu-guest-agent start
```

<a name="red"></a>

##### **Dystrybucje Redhat (CentOS, Fedora)**

Wprowadź poniższą komendę, aby sprawdzić, czy system został poprawnie skonfigurowany pod kątem tworzenie migawek:

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
```

Oczekiwany wynik:

```console
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Jeśli dane wyjściowe są różne, na przykład "Brak takiego pliku lub katalogu", zainstaluj najnowszą wersję pakietu:

```bash
sudo yum install qemu-guest-agent
sudo chkconfig qemu-guest-agent on
```

Zrestartuj serwer VPS:

```bash
sudo reboot
```

Uruchom agenta i sprawdź, czy działa:

```bash
sudo service qemu-guest-agent start
sudo service qemu-guest-agent status
```

<a name="win"></a>

##### **Windows**

Możesz zainstalować agenta za pomocą pliku MSI dostępnego na stronie projektu Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Sprawdź, czy usługa działa za pomocą poniższej komendy powershell:

```console
PS C:\Users\Administrator> Get-Service QEMU-GA
Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

<a name="go-further"></a>

## Sprawdź również

[Korzystanie z migawek na prywatnym serwerze wirtualnym](/pages/bare_metal_cloud/virtual_private_servers/using-snapshots-on-a-vps)

Dołącz do [grona naszych użytkowników](/links/community).