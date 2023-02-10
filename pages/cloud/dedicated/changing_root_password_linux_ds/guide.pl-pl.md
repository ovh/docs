---
title: 'Zmiana hasła root na serwerze dedykowanym'
slug: zmiana-hasla-root-na-serwerze-dedykowanym-linux
excerpt: 'Dowiedz się, jak zmienić hasło root do serwera dedykowanego'
section: 'Diagnostyka i tryb Rescue'
updated: 2021-02-16
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Ostatnia aktualizacja z dnia 16-02-2021**

## Wprowadzenie

Może zaistnieć konieczność zmiany hasła root (lub hasła użytkownika admin/sudo) do systemu operacyjnego GNU/Linux.
<br>Możliwe są dwa scenariusze:

- Możesz nadal logować się przez SSH
- Nie możesz logować się przez SSH, ponieważ straciłeś hasło

**Dowiedz się, jak zmienić hasło administratora w zależności od początkowej sytuacji.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/){.external}
- Posiadanie danych do logowania otrzymanych w e-mailu po zainstalowaniu (jeśli są one nadal prawidłowe)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} (aby korzystać z trybu Rescue)

> [!warning]
>OVHcloud świadczy usługi, za które jesteś odpowiedzialny w związku z ich konfiguracją i zarządzaniem. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
>
>Niniejszy przewodnik ma na celu pomoc w wykonywaniu bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze zalecamy kontakt z wyspecjalizowanym dostawcą usług.
>

## W praktyce

### Zmiana hasła, jeśli nadal masz dostęp (użytkownik sudo lub root)

Zaloguj się do serwera przez SSH. Przejdź na użytkownika root, jeśli konieczne:

```
~$ sudo su -
~#
```

Aby zmienić hasło dla aktualnego użytkownika, wprowadź `passwd`. Następnie wpisz dwa razy nowe hasło, jak pokazano poniżej:

```
~# passwd

New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Pamiętaj, że w dystrybucji GNU/Linux znaki hasła **nie** wyświetlają się w trakcie ich wpisywania.
>

### Zmień hasło, jeśli je utraciłeś

#### Etap 1: identyfikacja partycji systemu

Po ponownym uruchomieniu serwera w [trybie Rescue](../ovh-rescue/) zidentyfikuj partycję systemu. W tym celu wprowadź następującą komendę:

```
# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

W powyższym przykładzie partycja systemowa to /dev/hda1.

> [!primary]
>
> Jeśli Twój serwer posiada konfigurację RAID, zamontuj wolumin RAID:
>
> - z programową macierzą RAID Twoja partycja główna będzie `/dev/mdX`;
> - ze sprzętową macierzą RAID, Twoja główna partycja będzie `/dev/sdX`.
>

#### Etap 2: montowanie partycji systemu

Po zidentyfikowaniu partycji systemu możesz ją zamontować przy użyciu polecenia:

```
# mount /dev/hda1 /mnt/
```

#### Etap 3: modyfikacja partycji root

Domyślnie partycja systemu jest zablokowana do edycji. Aby uzyskać dostęp do zapisu, otwórz go za pomocą polecenia:

```
# chroot /mnt
```

#### Etap 4: zmień hasło root

Ostatni etap polega na zmianie hasła za pomocą polecenia:

```
# passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Po wykonaniu tego etapu, zmień tryb uruchamiania Twojego serwera, aby `Uruchomić dysk twardy`{.action} i zrestartować go. Twoje hasło root zostało zmienione.

## Sprawdź również

[Uruchamianie i korzystanie z trybu Rescue](../ovh-rescue/)

[Zabezpieczanie serwera dedykowanego](../porady-zabezpieczanie-serwera-dedykowanego/)

[Zmiana hasła administratora na serwerze dedykowanym z systemem Windows](../zmiana-hasla-admin-windows/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.