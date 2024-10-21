---
title: 'Zmiana hasła administratora na serwerze dedykowanym z systemem Windows'
excerpt: 'Dowiedz się, jak zmienić hasło administratora na serwerze dedykowanym z systemem Windows'
updated: 2024-06-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Podczas instalacji lub reinstalacji systemu operacyjnego Windows otrzymujesz hasło administratora. Rekomendujemy jego zmianę zgodnie z instrukcją zawartą w przewodniku o bezpieczeństwie [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server). Jeśli utraciłeś hasło administratora, zresetuj je w trybie Rescue.

**Niniejszy przewodnik ułatwi Ci przeprowadzenie przez cały proces zmiany hasła administratora Twojego serwera poprzez konfiguracje trybu Rescue dostępne dla systemu operacyjnego Windows.**

> [!warning]
>
> Ten przewodnik nie dotyczy uruchamiania w trybie rescue o nazwie `Windows Customer Rescue System`.
>
> Sprawdź [ten przewodnik](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows), gdy w Panelu klienta OVHcloud jest używana opcja `Windows Customer Rescue System (Windows2022-based)`.
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal){.external} z zainstalowanym systemem Windows
- Dostęp do [panelu klienta OVHcloud](/links/manager){.external}.

## W praktyce

Kolejne etapy opisują proces zmiany lokalnego hasła administratora w trybie Rescue OVHcloud (oparty na Linuxie), który jest dostępny w każdej chwili. Jeśli wolisz korzystać z systemu Windows PE (WinRescue), zapoznaj się z metodą dedykowaną [na końcu tego przewodnika](./#reset-hasla-administratora-za-pomoca-winrescue). 

### Etap 1: restart serwera w trybie rescue

System musi zostać uruchomiony w trybie Rescue, zanim będzie można zmienić hasło administratora.

Więcej informacji o trybie Rescue znajdziesz w [tym przewodniku](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Etap 2: montowanie partycji systemu

Zaloguj się do serwera przez SSH. Jeśli potrzebujesz pomocy, zapoznaj się z przewodnikiem dotyczącym >systemu Windows, partycje będą zatytułowane "Microsoft LDM data".

```bash
fdisk -l
```

```text
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 54A5B25A-75B9-4355-9185-8CD958DCF32A
 
Device          Start        End    Sectors  Size Type
/dev/sda1        2048     718847     716800  350M EFI System
/dev/sda2      718848     720895       2048    1M Microsoft LDM metadata
/dev/sda3      720896     980991     260096  127M Microsoft reserved
/dev/sda4      980992 3907028991 3906048000  1.8T Microsoft LDM data
/dev/sda5  3907028992 3907029134        143 71.5K Microsoft LDM data
```

W tym przykładzie "sda4" oznacza partycję systemu, określoną przez jej rozmiar. Na ogół istnieje również druga partycja lustrzana, która w tym przypadku nosi nazwę "/dev/sdb**X**". W większości przypadków serwer będzie miał kilka dysków z identycznymi schematami partycji. W przypadku procesu resetowania hasła ważne jest tylko to pierwsze. 

Teraz zamontuj tę partycję:

```bash
mount /dev/sda4 /mnt
```

Sprawdź punkt montowania:

```bash
lsblk
```

```text
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sdb      8:16   0  1.8T  0 disk
├─sdb4   8:20   0  1.8T  0 part
├─sdb2   8:18   0    1M  0 part
├─sdb5   8:21   0 71.5K  0 part
├─sdb3   8:19   0  127M  0 part
└─sdb1   8:17   0  350M  0 part
sda      8:0    0  1.8T  0 disk
├─sda4   8:4    0  1.8T  0 part /mnt
├─sda2   8:2    0    1M  0 part
├─sda5   8:5    0 71.5K  0 part
├─sda3   8:3    0  127M  0 part
└─sda1   8:1    0  350M  0 part
```

W powyższym przykładzie operacja powiodła się. Jeśli instalacja nie powiodła się, prawdopodobnie otrzymasz komunikat błędu podobny do tego: 

```text
The disk contains an unclean file system (0, 0).
Metadata kept in Windows cache, refused to mount.
Failed to mount '/dev/sda4': Operation not permitted
The NTFS partition is in an unsafe state. Please resume and shutdown
Windows fully (no hibernation or fast restarting), or mount the volume
read-only with the 'ro' mount option.
```

W takim przypadku użyj następującego polecenia i spróbuj ponownie zamontować partycję.

```bash
ntfsfix /dev/sda4
```

```bash
mount /dev/sda4 /mnt
```

### Etap 3: usuń aktualne hasło

Etap ten polega na manipulowaniu plikiem *SAM* przy użyciu narzędzia pozwalającego usunąć hasło użytkownika administratora. Dostęp do właściwego katalogu i katalogu użytkowników Windows:

```bash
cd /mnt/Windows/System32/config
/mnt/Windows/System32/config#
```


```bash
chntpw -l SAM
```

```text
chntpw version 140201, (c) Petter N Hagen
Hive <SAM> name (from header): <\SystemRoot\System32\Config\SAM>
ROOT KEY at offset: 0x001020 * Subkey indexing type is: 686c <lh>
File size 65536 [10000] bytes, containing 8 pages (+ 1 headerpage)
Used for data: 359/39024 blocks/bytes, unused: 33/18064 blocks/bytes.

| RID -|---------- Username ------------| Admin? |- Lock? --|
| 03e8 | admin                          | ADMIN  | dis/lock |
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

Jeśli polecenie nie działa, najpierw zainstaluj narzędzie: `apt install chntpw`.

Usuń hasło użytkownika administratora za pomocą następującego polecenia. (Wybierz "Administrator", jeśli "admin" nie istnieje.)

```bash
chntpw -u admin SAM
```

```text
chntpw version 140201, (c) Petter N Hagen
Hive <SAM> name (from header): <\SystemRoot\System32\Config\SAM>
ROOT KEY at offset: 0x001020 * Subkey indexing type is: 686c <lh>
File size 65536 [10000] bytes, containing 8 pages (+ 1 headerpage)
Used for data: 361/39344 blocks/bytes, unused: 35/13648 blocks/bytes.
 
================= USER EDIT ====================
 
RID     : 1000 [03e8]a
Username: admin
fullname:
comment :
homedir :
 
00000221 = Users (which has 3 members)
00000220 = Administrators (which has 2 members)
 
Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |
 
Failed login count: 0, while max tries is: 0
Total  login count: 5
 
- - - - User Edit Menu:
 1 - Clear (blank) user password
(2 - Unlock and enable user account) [seems unlocked already]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Wpisz "1" i naciśnij Enter. (Należy najpierw skorzystać z opcji 2, jeśli przed "Disabled" pojawi się "X").

```text
Select: [q] > 1
Password cleared!
================= USER EDIT ====================
 
RID     : 1000 [03e8]
Username: admin
fullname:
comment :
homedir :
 
00000221 = Users (which has 3 members)
00000220 = Administrators (which has 2 members)
 
Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |
 
Failed login count: 0, while max tries is: 0
Total  login count: 5
** No NT MD4 hash found. This user probably has a BLANK password!
** No LANMAN hash found either. Try login with no password!
 
- - - - User Edit Menu:
 1 - Clear (blank) user password
(2 - Unlock and enable user account) [seems unlocked already]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Wpisz "q" i naciśnij Enter, aby opuścić narzędzie. Wpisz "y", gdy zostaniesz zaproszony i naciśnij Enter.

```text
Select: [q] > q
 
Hives that have changed:
 # Name
 0  <SAM>
Write hive files? (y/n) [n]: tam
 0  <SAM> - OK
```

### Etap 4: restart serwera 

Zacznij od zastąpienia netbootu **Uruchom z dysku twardego** w Panelu [klienta OVHcloud](/links/manager) (patrz [Etap 1](./#etap-1-restart-serwera-w-trybie-rescue)). 

Wróć do wiersza poleceń, odmontuj partycję i zrestartuj serwer, używając następujących poleceń:

```bash
cd
```

```bash
umount /mnt
```

```bash
reboot
```

```text
Broadcast message from root@rescue.ovh.net on pts/0 (Wed 2020-05-27 11:28:53 CEST):

System is going down for reboot NOW!
```

### Etap 5: zdefiniowanie nowego hasła (IPMI)

W [Panelu klienta OVHcloud](/links/manager) przejdź do zakładki `IPMI`{.action}, aby otworzyć sesję KVM.

![IPMI](images/adminpw_win_03.png){.thumbnail}

#### Etap 5.1: dla najnowszej wersji systemu Windows

Interfejs logowania powinien wyświetlać komunikat informujący o wygaśnięciu hasła.

![pwreset](images/adminpw_win_04.png){.thumbnail}

Nowe hasło użytkownika admin musi zostać wprowadzone dwa razy. Jednak pole potwierdzenia nie jest jeszcze widoczne, co oznacza, że należy zostawić pierwsze pole puste, wpisać nowe hasło w drugim polu, a następnie użyć przycisku tabulacji (“ ↹ ”) klawiatury (wirtualnej), aby przejść do trzeciego pola (“Potwierdź hasło”).
<br>Wpisz ponownie hasło i kliknij strzałkę, aby je zarejestrować.

![enterpw](images/adminpw_win_05.png){.thumbnail}

Kliknij `OK`{.action} i zostaniesz zalogowany.

![adminlogin](images/adminpw_win_06.png){.thumbnail}

#### Etap 5.2: dla poprzedniej wersji systemu Windows

Otworzy się okno wiersza poleceń (cmd), gdy sesja KVM jest utworzona.

Zdefiniuj hasło dla aktualnego użytkownika ("Administrator"):

```powershell
net user Administrator *
```

![administratorpw](images/adminpw_win_07.png){.thumbnail}

> [!primary]
>
Zalecamy używanie wirtualnej klawiatury podczas wprowadzania haseł w tym interfejsie.
>

### Reset hasła administratora za pomocą WinRescue

#### Etap 1: restart serwera w trybie rescue

System musi zostać uruchomiony w trybie Rescue (WinRescue), zanim będzie można zmienić hasło administratora.

Więcej informacji o trybie Rescue znajdziesz w [tym przewodniku](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

#### Etap 2: usuń aktualne hasło

W [Panelu klienta OVHcloud](/links/manager) przejdź do zakładki `IPMI`{.action}, aby otworzyć sesję KVM.

![IPMI](images/adminpw_win_03.png){.thumbnail}

Aby zresetować hasła, narzędzie NTPWEdit jest niezbędne. Po zalogowaniu się przez KVM otwórz przeglądarkę i pobierz ją z oficjalnej [strony](http://www.cdslow.org.ru/en/ntpwedit/) internetowej. 

Przeglądaj do katalogu, w którym znajduje się pobrany plik ZIP i pobierz zawartość. Następnie otwórz plik *ntpwedit64*, aby rozpocząć działanie aplikacji.

![ntpwedit](images/adminpw_win_09.png){.thumbnail}

W tym interfejsie możesz manipulować plikiem *SAM*, aby usunąć hasło użytkownika administratora. Domyślna ścieżka dostępu do katalogu *WINDOWS* jest wstępnie wypełniona. Otwórz plik, aby wyświetlić listę użytkowników, klikając przycisk `Otwórz`{.action}.

Użytkownik będzie albo "admin" albo "Administrator", w zależności od wersji systemu Windows. Jeśli oba są obecne, wybierz "admin". Następnie kliknij `Zmień hasło`{.action}.

![ntpwedit](images/adminpw_win_10.png){.thumbnail}

W oknie, które się wyświetli zostaw puste pola i kliknij `OK`{.action}. Zakończ, klikając `Zapisz zmiany`{.action}, a następnie `Opuść`{.action}.

Serwer musi zostać zrestartowany.

#### Etap 3: zrestartuj serwer 

Zacznij od zastąpienia netbootu **Uruchom z dysku twardego** w Panelu [klienta OVHcloud](/links/manager) (patrz [Etap 1](./#etap-1-restart-serwera-w-trybie-rescue)).

W oknie KVM wybierz opcję zatrzymania `Wykonaj restart`{.action} za pomocą przycisku Windows "Uruchom" w lewym dolnym rogu.

Przejdź do opisu operacji [5: zdefiniować nowe hasło (IPMI)](./#etap-5-zdefiniowanie-nowego-hasla-ipmi).

## Sprawdź również

[Uruchamianie i korzystanie z trybu Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Korzystanie z IPMI dla serwerów dedykowanych](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
