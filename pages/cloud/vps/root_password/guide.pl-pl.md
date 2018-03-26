---
title: Zmiana hasła root na serwerze VPS
slug: root-password
excerpt: Sprawdź, jak zmienić hasło root
section: Diagnostyka i tryb Rescue
---

**Ostatnia aktualizacja dnia 2018-02-21**

## Wprowadzenie

Podczas instalacji lub reinstalacji dystrybucji otrzymasz hasło dla użytkownika root, z którym można zarządzać serwerem. Rekomendujemy jego zmianę zgodnie z instrukcją zawartą w [przewodniku o bezpieczeństwie](https://docs.ovh.com/pl/vps/porady-zabezpieczenie-vps/){.external}. Możesz również zmienić hasło w sytuacji, gdy utraciłeś wcześniejsze . Ten przewodnik zwiera opis obydwu tych przypadków.
Sprawdź, jak zmienić hasło dostępowe root na serwerze VPS.

## Wymagania początkowe

- Dostęp SSH do VPS  (dostęp root).
- [Restart serwera VPS w trybie Rescue](https://docs.ovh.com/pl/vps/rescue/){.external}.


## W praktyce

### Zmiana hasła z dostępem root

Jeśli posiadasz aktualne hasło, postępuj zgodnie z następującą procedurą. Połącz się z serwerem i wpisz komendę:

```sh
passwd
```

Wpisz nowe hasło i potwierdź je. Otrzymasz komunikat:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> W przypadku dystrybucji Linux wprowadzone przez Ciebie hasło **nie będzie widoczne**.
> 

### Zmiana hasła po utracie wcześniejszego hasła

#### Etap 1: Sprawdzenie punktu montowania

Montowanie na serwerach VPS 2016 jest wykonywane automatycznie. Należy więc sprawdzić, gdzie zamontowana jest partycja. W tym celu skorzystaj z jednego z dwóch poleceń:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

W powyższym przykładzie widać, że partycja systemowa jest zamontowana na **/mnt/vdb1**.


#### Etap 2: Uprawnienia CHROOT

Teraz należy zmienić katalog systemowy, aby zmiany zostały wykonane w systemie. Możesz to wykonać za pomocą polecenia `chroot`. Postępuj zgodnie z poniższą procedurą:

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Za pomocą polecenia `ls -l` sprawdź zawartość katalogu systemowego:

```sh
root@rescue-pro:/# ls -l
```

#### Etap 3: zmiana hasła root

Zmień hasło za pomocą polecenia `passwd`:

```sh
passwd
```
```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Następnie zrestartuj Twój VPS z dysku w Panelu klienta.

## Sprawdź również

[Wprowadzenie do protokołów SSH](https://docs.ovh.com/pl/dedicated/ssh-wprowadzenie/){.external}

[Uruchamianie trybu Rescue na serwerze VPS](https://docs.ovh.com/pl/vps/rescue/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.