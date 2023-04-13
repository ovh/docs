---
title: Konfiguracja programowego lustra (RAID) w systemie Windows
slug: dedicated-servers-mirror-soft-raid-windows
excerpt: "Dowiedz się, jak odbudować konfigurację dysków Twojego serwera po wymianie dysku"
section: RAID & dyski
updated: 2023-03-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 28-03-2023**

## Wprowadzenie

W systemie Windows redundancja danych jest zapewniona przez mirrroring dysku głównego na drugim dysku. Konfiguracja ta jest podobna do konfiguracji w RAID 1, ale dotyczy tylko dwóch dysków.

**Dowiedz się, jak przekonfigurować ponownie lustro dysku w systemie Windows, jeśli ma zostać zrekonstruowane z powodu uszkodzenia lub uszkodzenia dysku.**

## Wymagania początkowe

- Serwer [dedykowany Windows](https://www.ovhcloud.com/pl/bare-metal/) z oprogramowaniem lustrzanym
- Dostęp administracyjny do serwera przez RDP

## W praktyce

Zarządzaj połączeniem RDP (Remote Desktop) z Twoim serwerem.

Po zalogowaniu kliknij prawym przyciskiem myszy przycisk w menu `Start`{.action} i otwórz `Uruchom`{.action}.

![Software mirror Windows](images/raid-soft-windows-01.png){.thumbnail}

Wpisz `cmd` i kliknij `OK`{.action}.

![Software mirror Windows](images/raid-soft-windows-02.png){.thumbnail}

Metoda zależy od typu partycji dysków. Postępuj zgodnie z instrukcjami z [tej sekcji](#mbr) dla **MBR** lub przejdź do następnej [sekcji](#gpt) dla **GPT**. Jeśli nie jesteś tego pewien, wprowadź komendę `diskpart` w wierszu poleceń i wprowadź `list disk`. Sprawdź kolumnę "Gpt" w dostarczonym wyniku.

### Rekonstrukcja lustra (schemat partycji MBR) <a name="mbr"></a>

W wierszu poleceń otwórz DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart wykonuje polecenia bez wysyłania ostrzeżeń lub prośby o potwierdzenie. Wszelkie zmiany wprowadzone w DiskPart są nieodwracalne. Wprowadzanie poleceń po wybraniu nieprawidłowego dysku lub wolumenu może spowodować natychmiastową utratę danych i/lub uniemożliwić uruchomienie systemu. Zalecamy ostrożność i sprawdzanie każdego zamówienia.
>

#### Lista wszystkich dysków i wolumenów

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
  Disk M0   Missing            0 B      0 B   *
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror       447 GB  Failed Rd  System

```

W tym przykładzie `Disk 1` to dysk zapasowy, który został zainstalowany w celu zastąpienia wadliwego `Disk M0`, który wcześniej został [fizycznie usunięty](https://docs.ovh.com/pl/dedicated/wymiana-dysku/).


> [!primary]
>
> Poniższe sekcje kodu podane są wyłącznie jako ilustracja, w zależności od przykładu wyjściowego. Należy dostosować instrukcje do rzeczywistej konfiguracji, zastępując wartości w poleceniach danymi identyfikacyjnymi dysku i wolumenu.
>

#### Usunięcie zastąpionego dysku z konfiguracji

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> break disk M0 nokeep
 
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple       447 GB  Healthy    System
 
DISKPART> select disk m0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---s
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
 
```

#### Uruchomienie zapasowego dysku

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> convert mbr
 
DiskPart successfully converted the selected disk to MBR format.
 
DISKPART> convert dynamic
 
DiskPart successfully converted the selected disk to dynamic format.

```

#### Odtworzenie lustra między pierwszym i drugim dyskiem

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
<===>
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB      0 B   *

``` 

Powtórz ten etap dla każdego istniejącego wolumenu z dysku `Disk 0`, który chcesz umieścić w lustrze na dysku `Disk 1`, używając odpowiedniego litery dysku (np. *d*, *e*, *f*, itp.).

Stan wolumenu będzie `Rebuild` w trakcie procesu, co może zająć kilka godzin w zależności od danych zapisanych na dysku. Możesz sprawdzić status w DiskPart:
 
 
```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
* Volume 0     C   Windows      NTFS   Mirror       447 GB  Rebuild    System

```

Najlepiej nie uruchamiać ponownie serwera, jeśli proces odbudowy nie zostanie zakończony.

### Rekonstrukcja lustra (schemat partycji GPT) <a name="gpt"></a>

W wierszu poleceń otwórz DiskPart:

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart wykonuje polecenia bez wysyłania ostrzeżeń lub prośby o potwierdzenie. Wszelkie zmiany wprowadzone w DiskPart są nieodwracalne. Wprowadzanie poleceń po wybraniu nieprawidłowego dysku lub wolumenu może spowodować natychmiastową utratę danych i/lub uniemożliwić uruchomienie systemu. Zalecamy ostrożność i sprawdzanie każdego zamówienia.
>

#### Lista wszystkich dysków i wolumenów

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
  Disk M0   Missing           0  B      0 B   *   
 
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Failed Rd  Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

W tym przykładzie `Disk 1` to dysk zapasowy, który został zainstalowany w celu zastąpienia wadliwego `Disk M0`, który wcześniej został [fizycznie usunięty](https://docs.ovh.com/pl/dedicated/wymiana-dysku/).

> [!primary]
>
> Poniższe sekcje kodu podane są wyłącznie jako ilustracja, w zależności od przykładu wyjściowego. Należy dostosować instrukcje do rzeczywistej konfiguracji, zastępując wartości w poleceniach danymi identyfikacyjnymi dysku i wolumenu.
>

#### Usunięcie zastąpionego dysku z konfiguracji

```console
DISKPART> select volume c
  
Volume 0 is the selected volume.
  
DISKPART> break disk M0 nokeep
  
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
DISKPART> select disk M0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

#### Uruchomienie zapasowego dysku

Utwórz na nowym dysku domyślne i obowiązkowe partycje, odzwierciedlając istniejące partycje pierwszego dysku:

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> clean
 
DiskPart succeeded in cleaning the disk.
 
DISKPART> convert gpt
 
DiskPart successfully converted the selected disk to GPT format.
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> delete partition override
 
DiskPart successfully deleted the selected partition.
 
DISKPART> create partition efi size=350
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> format quick fs=fat32 label=EFI
 
  100 percent completed
 
DiskPart successfully formatted the volume.
 
DiskPart successfully formatted the volume.
 
DISKPART> assign letter=t
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> create partition msr size=128
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
* Partition 2    Reserved           128 MB   351 MB

```

#### Odtworzenie lustra między pierwszym i drugim dyskiem 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB      0 B   *    *

```

Powtórz ten etap dla każdego istniejącego wolumenu z dysku `Disk 0`, który chcesz umieścić w lustrze na dysku `Disk 1`, używając odpowiedniego litery dysku (np. *d*, *e*, *f*, itp.).

#### Odtworzenie środowiska do inicjalizacji i zdefiniowanie opcji inicjalizacji drugiego dysku

```console
DISKPART> select disk 0
 
Disk 0 is now the selected disk.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
  Partition 2    Dynamic Reserved  1024 KB   351 MB
  Partition 3    Reserved           127 MB   352 MB
  Partition 4    Dynamic Data      1862 GB   479 MB
  Partition 5    Dynamic Data        71 KB  1863 GB
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> assign letter=s
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
* Volume 1     S   EFI          FAT32  Partition    350 MB  Healthy    System
  Volume 2     T   EFI          FAT32  Partition    350 MB  Healthy    Hidden
 
DISKPART> exit
 
Leaving DiskPart...
```

Wróć do wiersza poleceń, skopiuj pliki uruchamiania partycji startowej (EFI) na pierwszy dysk (`Disk 0`) do partycji startowej na drugim dysku (`Disk 1`).

Wpisz 3 poniższe polecenia i wykonaj je za pomocą przycisku `Wpisz`:

```
robocopy s:\ t:\ * /e /copyall /xf BCD.* /xd "System Volume Information"
bcdedit /export t:\EFI\Microsoft\Boot\BCD
bcdedit /store t:\EFI\Microsoft\Boot\BCD /set {bootmgr} device partition=t:
``` 

Włącz następnie DiskPart i wprowadź następujące polecenia:

```console
DISKPART> select volume s
 
Volume 2 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.
 
DISKPART> select volume t
 
Volume 1 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.

```

Stan wolumenu będzie `Rebuild` w trakcie procesu, co może zająć kilka godzin w zależności od danych zapisanych na dysku. Możesz sprawdzić status w DiskPart:


```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    Hidden
  Volume 2         EFI          FAT32  Partition    350 MB  Healthy    System

```

Najlepiej nie uruchamiać ponownie serwera, jeśli proces odbudowy nie zostanie zakończony.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.