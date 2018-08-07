---
title: Aktualizacja jądra na serwerze dedykowanym
excerpt: Dowiedz się, jak zaktualizować kernel
slug: aktualizacja-jadro-kernel-serwer-dedykowany
section: Poziom zaawansowany
---

**Ostatnia aktualizacja dnia 2018-01-11**

## Wprowadzenie

Dzięki rozwiązaniu OVH masz możliwość aktualizacji jądra (kernela) w systemie Linux za pomocą funkcji *netboot*. Rekomendujemy również aktualizację jądra powiązanego z systemem eksploatacyjnym (OS) na Twoim dysku.

**Z niniejszego przewodnika dowiesz się, jak przeprowadzić aktualizację jądra.**

> [!warning]
>
> OVH oddaje do Twojej dyspozycji serwery, którymi samodzielnie zarządzasz. OVH nie ma dostępu do Twoich serwerów i nie pełni funkcji administratora. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. 
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy.
>

## Wymagania początkowe

- Dostęp root do serwera (SSH).
- Wykonanie kopii zapasowej danych (zgodnie z dokumentacją dotyczącą Twojej dystrybucji).

## W praktyce

### Sprawdzenie wersji jądra

Aby sprawdzić wersję jądra, wpisz następujące polecenie:

```sh
uname -r
```

Przykład:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

W tym przypadku wersja jądra to: *4.09.76-xxxx-std-ipv6-64*\*.

### Aktualizacja jądra 

#### Etap 1: odnalezienie odpowiedniego katalogu

Obraz kernela znajduje się w katalogu:

```sh
cd /boot
```

#### Etap 2: pobranie obrazu kernela

Ponowna kompilacja jądra nie jest konieczna, pobierz wersję bzImage, najlepiej najnowszą. Obrazy znajdziesz pod następującym linkiem: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Jądra są monolityczne, co oznacza, że nie uwzględniają modułów :CEPH, NBD, ZFS...

Możesz to zaobserwować w podanym przykładzie. Dla jądra w wersji: **4.9.118-xxxx-std-ipv6-64**.

Pobierz następujący obraz wraz z poleceniem:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### Etap 3: aktualizacja programu rozruchowego (GRUB)

Zaktualizuj program rozruchowy GRUB, używając następującego polecenia:

```sh
update-grub
```

Pojawi się komunikat:

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Sprawdź obecność następującego pliku (niezbędnego do przeprowadzenia aktualizacji) w Twojej konfiguracji: `06_OVHkernel`. Aby sprawdzić obecność pliku, użyj następującego polecenia:
>
> `ls /etc/grub.d/`
>

#### Etap 4: restart serwera

Zrestartuj serwer, aby wprowadzone modyfikacje zostały uwzględnione:

```sh
reboot
```

### Cofnięcie modyfikacji

W przypadku wykonania nieprawidłowej operacji lub błędu możesz cofnąć wprowadzone zmiany. W tym celu ustaw na serwerze [tryb Rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}. Następnie podmontuj system, używając następujących poleceń:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> W podanym przykładzie root (lub slash `/`) oznaczony jest *md1*. Zwróć uwagę, że nazwa może być inna. Aby zweryfikować nazwę, wpisz następujące polecenie:
>
> `fdisk`lub `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Następnie przejdź do katalogu `/boot` i usuń ostatnio zainstalowane pliki (komenda `rm`). W podanym przypadku musisz wpisać polecenie w następującym formacie:

```sh
rm bzImage-4.14.13-xxxx-std-ipv6-64
```

Konieczna jest ponowna aktualizacja programu rozruchowego:

```sh
update-grub
```

Następnie wyjdź z trybu Rescue, restartując serwer z dysku, i uruchom ponownie serwer, wpisując polecenie:

```sh
reboot
```

### Weryfikacja aktualizacji

Po zakończeniu aktualizacji sprawdź nowo zainstalowaną wersję jądra, wpisując następujące polecenie:

```sh
uname –r
```

> [!primary]
>
> Zapoznaj się z informacjami dotyczącymi podatności Meltdown oraz Spectre na stronie WWW producenta Twojej dystrybucji i upewnij się, czy nowa wersja jądra jest zabezpieczona przed tymi zagrożeniami.
>
> W razie potrzeby możesz również skorzystać z jednego z narzędzi (np. z tego: <https://github.com/speed47/spectre-meltdown-checker>), dzięki któremu dowiesz się, czy jądro jest podatne na atak czy też nie.
>
> **OVH nie może zagwarantować niezawodności narzędzi zewnętrznych. Odpowiedzialność za ich wykorzystanie spoczywa wyłącznie na użytkowniku.**
>

## Sprawdź również

[Tryb Rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}

[Informacje dotyczące podatności Meltdown i Spectre - wersja angielska](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}

[Aktualizacje systemów operacyjnych chroniące przez podatnościami Meltdown i Spectre - wersja angielska](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.