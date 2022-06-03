---
title: Wyświetl logi bootu w KVM
slug: wyswietlanie-bootlog-w-kvm
excerpt: 'Dowiedz się, jak zdiagnozować serwer VPS, sprawdzając logi startowe (boot logs)'
section: Diagnostyka i tryb Rescue
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 05-07-2021**

## Wprowadzenie

Jeśli Twój serwer VPS nie odpowiada, powinieneś mieć dostęp do niego za pośrednictwem [KVM](../kvm_na_serwerach_vps/) w Panelu klienta. Najszybszym sposobem, aby zdiagnozować problem jest sprawdzenie logów startowych serwera (boot logi). Jednak konfiguracja GRUB musi zostać zmieniona, aby wyświetliły się te logi. 

> [!primary]
>
> Pamiętaj, że w niektórych środowiskach KVM nie dostarczy Ci żadnych użytecznych informacji, ponieważ sekwencja uruchamiania pojawia się w porcie szeregowym, w którym GRUB jest skonfigurowany w trybie ciszy.
>

**Niniejszy przewodnik wyjaśnia, jak aktywować logi boot, które mogą pomóc Ci rozwiązać problem serwera VPS.**

> [!warning]
> OVHcloud świadczy usługi, za które jesteś odpowiedzialny w związku z ich konfiguracją i zarządzaniem. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
>
>Jeśli napotkasz trudności z przeprowadzeniem tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług i/lub skontaktuj się z naszą społecznością użytkowników na <https://community.ovh.com/en/>. OVHcloud nie będzie w stanie udzielić Ci wsparcia technicznego w tym zakresie.
>

## Wymagania początkowe

- posiadanie serwera [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!warning]
>
> Zmiany te zmienią konfigurację GRUB. Przed przystąpieniem do modyfikacji, OVHcloud nie może ponosić odpowiedzialności za uszkodzenie lub utratę danych.
>

Jeśli nadal masz dostęp do serwera VPS przez SSH, możesz przejść [do etapu szóstego](#step6).

### Etap 1: zrestartuj serwer VPS w trybie Rescue

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i uruchom restart serwera w trybie rescue. W razie potrzeby zapoznaj się z naszym [przewodnikiem dotyczącym trybu Rescue](../rescue/).

### Etap 2: przeprowadzić wstępną weryfikację

W przypadku starszych gam VPS partycje zostaną automatycznie zamontowane w trybie rescue. Do weryfikacji i identyfikacji lokalizacji montowania partycji możesz użyć następujących poleceń:

#### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

#### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

Powyższy przykład pokazuje, że partycja systemowa jest zamontowana na **/mnt/sdb**. (Dysk główny to **sdb**. Dysk rescue to **sda**, a **sda1** to główna partycja w trybie rescue zamontowana na **/**).

Jeśli Twój VPS należy do [**bieżącej gamy VPS**](https://www.ovhcloud.com/pl/vps/), nie zostanie wykonany automatyczny montaż, a kolumna "MOUNTPOINT" powinna być pusta. W tym przypadku przejdź do [etapu czwartego](#step4).

### Etap 3: odmontuj partycję (tylko dla starszych gam VPS)

Na serwerze VPS należącym do poprzednich gam znajdujących się w trybie Rescue, główny dysk jest już zamontowany. W związku z tym należy go najpierw zdemontować przed przeniesieniem go do etapu 4:

```sh
~$ umount /dev/sdb1
```

### Etap 4: zamontować partycję z odpowiednimi parametrami <a name="step4"></a>

Jeśli Twój VPS należy do [**bieżącej gamy VPS**](https://www.ovhcloud.com/pl/vps/), sprawdź najpierw, czy folder montowania jest utworzony:

```sh
~$ mkdir -p /mnt/sdb1
```

Wprowadź następujące polecenia, aby zamontować partycję z odpowiednimi parametrami:

```sh
~$ mount /dev/sdb1 /mnt/sdb1
~$ mount -t proc none /mnt/sdb1/proc
~$ mount -o bind /dev /mnt/sdb1/dev
~$ mount -t sysfs none /mnt/sdb1/sys/
```

Partycja systemu jest teraz zamontowana do użycia z poleceniem `chroot`, w celu wykonywania operacji, które wymagają dostępu do katalogów `sys`, `dev` i `proc`.

### Etap 5: użyć polecenia CHROOT do konfiguracji plików systemowych

Teraz musisz mieć dostęp do plików GRUB systemu i je zmienić. W tym celu użyj polecenia `chroot`:

```sh
~$ chroot /mnt/sdb1
```

Od tej pory wszystkie wprowadzone przez Ciebie polecenia będą stosowane na serwerze VPS zamiast tymczasowego środowiska w trybie Rescue.

### Etap 6: zmień konfigurację GRUB <a name="step6"></a>

#### **Debian 8 lub wyższe i Ubuntu 18 lub wyższe**

Utwórz kopię zapasową pliku konfiguracyjnego:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Aby uzyskać dostęp do logów boot za pomocą konsoli KVM, upewnij się, że w pliku `/etc/default/grub` dysponujesz następującą wartością:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

Jeśli ta linia jest brakująca lub inna, zmodyfikuj plik za pomocą edytora i zapisz go.

Następnie użyj następującego polecenia, aby ponownie wygenerować plik konfiguracyjny GRUB (zmiany zostaną zapisane w kolejnym restarcie):

```sh
~$ update-grub
```

#### **CentOS 7 lub wyższy (grub2)**

Utwórz kopię zapasową pliku konfiguracyjnego:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Aby uzyskać dostęp do logów boot za pomocą konsoli KVM, upewnij się, że w pliku `/etc/default/grub` dysponujesz następującymi wartościami:

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Jeśli te linie są brakujące lub inne, zmodyfikuj plik za pomocą edytora i zapisz go.

Następnie użyj następującego polecenia, aby ponownie wygenerować plik konfiguracyjny GRUB (wartości zostaną zapisane do kolejnego restartu):

```sh
~$ grub2-mkconfig -o "$(readlink /etc/grub.cfg)"
```

Po przeprowadzeniu modyfikacji uruchom ponownie Twój VPS w trybie "normalnym" w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Logi boot muszą się teraz pojawić podczas korzystania z [konsoli KVM](../kvm_na_serwerach_vps/).

## Sprawdź również

[Używanie konsoli KVM z VPS](../kvm_na_serwerach_vps/)

[Włącz tryb Rescue na serwerze VPS](../rescue/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
