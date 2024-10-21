---
title: Zmiana hasła administratora na serwerze Windows
excerpt: "Dowiedz się, jak zresetować hasło do konta administratora Windows na serwerze VPS lub instancji Public Cloud w trybie Rescue OVHcloud"
updated: 2023-10-12
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Podczas instalacji lub reinstalacji systemu operacyjnego Windows Server użytkownik otrzymuje hasło administratora (konto *Administrator*).

Jeśli utracisz hasło administratora, możesz je zresetować przy użyciu trybu Rescue OVHcloud.

**Dowiedz się, jak zresetować hasło do konta administratora systemu operacyjnego Windows Server w trybie Rescue OVHcloud.**

## Wymagania początkowe

- Posiadanie na koncie OVHcloud serwera [VPS](https://www.ovhcloud.com/pl/vps/) lub [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/)
- Zalogowanie do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

### Etap 1: restart serwera w trybie rescue

Tryb ratunkowy musi być włączony, aby można było zmienić hasło administratora.

Zapoznaj się z przewodnikiem dotyczącym usługi, aby uruchomić ją ponownie w trybie Rescue:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instancja Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Etap 2: montowanie partycji systemu

Połącz się ze swoim serwerem przez SSH. (W razie potrzeby skorzystaj z naszego [przewodnika wprowadzającego SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).)

Połączenie z serwerem można również otworzyć za pomocą [KVM (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) lub [konsoli VNC (instancja Public Cloud)](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#accessvnc).

Aby zainstalować system plików Windows, wpisz następujące polecenia:

```bash
ntfsfix /dev/sdb2
```

```bash
mount -t ntfs-3g /dev/sdb2 /mnt
```

### Etap 3: usunięcie aktualnego hasła

W tym kroku plik *SAM* jest modyfikowany za pomocą narzędzia w trybie ratunkowym. Wyświetl użytkowników systemu Windows za pomocą tego polecenia:

```bash
chntpw -l /mnt/Windows/System32/config/SAM
```

```text
| RID -|---------- Username ------------| Admin? |- Lock? --|
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

W tym przykładzie wyjściowym `Administrator` jest lokalnym kontem administratora. Rozpocznij procedurę resetowania przy użyciu następującego polecenia. (Użyj `admin`, jeśli `Administrator` nie istnieje.)

```bash
chntpw -u Administrator /mnt/Windows/System32/config/SAM
```

```text
RID     : 0500 [01f4]
Username: Administrator
fullname:
comment : Built-in account for administering the computer/domain
homedir :

00000220 = Administrators (which has 1 members)

Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |

Failed login count: 47034, while max tries is: 0
Total  login count: 5

- - - - User Edit Menu:
 1 - Clear (blank) user password
 2 - Unlock and enable user account [probably locked now]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Wpisz "1" i naciśnij klawisz Enter. (Najpierw użyj opcji 2, jeśli obok "Wyłączony" znajduje się znak "X".)

```text
Select: [q] > 1
Password cleared!
```

Wpisz "q" i naciśnij klawisz "Enter", aby zamknąć narzędzie. Po wyświetleniu monitu wpisz "y" i naciśnij klawisz Enter.

```text
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  </mnt/Windows/System32/config/SAM>
Write hive files? (y/n) [n] : y
 0  </mnt/Windows/System32/config/SAM> - OK
```

### Etap 4: restart serwera

Możesz teraz zamknąć tryb Rescue i zrestartować serwer. Jeśli tak, skorzystaj z przewodnika dla Twojej usługi:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instancja Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Etap 5: zdefiniowanie nowego hasła (KVM / VNC)

> [!warning]
>
> Nie pomijaj tego kroku. Niechronione konto administratora stanowi poważne zagrożenie bezpieczeństwa.
>

Połącz się z serwerem i wprowadź `cmd` na pasku wyszukiwania, aby otworzyć wiersz poleceń.

Ustaw hasło dla bieżącego użytkownika ("Administrator"):

```powershell
net user Administrator *
```

![administratorów](images/adminpw_win.png){.thumbnail}

Możesz teraz zalogować się jako "Administrator" przy użyciu nowego hasła.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
