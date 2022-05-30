---
title: Sprawdź system plików na serwerze VPS
excerpt: Dowiedz się, jak wyszukać błędy w systemie plików w trybie rescue
slug: check-file-system-vps
section: Diagnostyka i tryb Rescue
order: 5
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 20/04/2021**

## Wprowadzenie

**Dowiedz się, jak przeprowadzić diagnostykę systemów plików na serwerach VPS OVHcloud za pomocą trybu Rescue.**

> [!warning]
>OVHcloud świadczy usługi, za które jesteś odpowiedzialny w związku z ich konfiguracją i zarządzaniem. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
>
>Jeśli napotkasz trudności z przeprowadzeniem tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług i/lub skontaktuj się z naszą społecznością użytkowników na <https://community.ovh.com/en/>. OVHcloud nie będzie w stanie udzielić Ci wsparcia technicznego w tym zakresie.
>

## Wymagania początkowe

- jednego [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

#### VPS GNU/Linux

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i uruchom restart serwera w trybie rescue. W razie potrzeby zapoznaj się z naszym [przewodnikiem dotyczącym trybu Rescue](../rescue/).

W przypadku starszych gam VPS partycje zostaną automatycznie zamontowane w trybie rescue. Możesz to sprawdzić za pomocą polecenia:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

Poniższy przykład wyniku wyświetla istniejący punkt montowania. Oznacza to, że najpierw należy odmontować partycję:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Jeśli VPS jest nowy, kolumna `MOUNTPOINT` powinna być pusta i możesz pominąć poprzedni etap.

Teraz możesz sprawdzić partycję za pomocą "fsck":

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 kolejki, 849881/6525179 blocks
```

Jeśli wynik jest pusty, zazwyczaj oznacza to, że system plików jest czysty. Możesz jednak wymusić weryfikację:

```bash
$ fsck /dev/sdb1 -f
```

### VPS Windows

Powyższe instrukcje zwykle nie mają zastosowania do serwera VPS z systemem Windows, ponieważ weryfikacja systemu plików nie obsługuje NTFS. Możesz jednak przeprowadzić weryfikację zgodności NTFS na partycjach.

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i uruchom restart serwera w trybie rescue. W razie potrzeby zapoznaj się z naszym [przewodnikiem dotyczącym trybu Rescue](../rescue/).

W przypadku starszych gam VPS partycje zostaną automatycznie zamontowane w trybie rescue. Możesz to sprawdzić za pomocą polecenia:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

Powyższy przykład pokazuje istniejące punkty montowania. Oznacza to, że najpierw należy odmontować partycję:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Jeśli VPS jest nowy, kolumna `MOUNTPOINT` powinna być pusta i możesz pominąć poprzedni etap.

Poniższe polecenie sprawdza spójność partycji i stara się usunąć ewentualne błędy:

```bash
$ ntfsfix /dev/sdb1
```

## Sprawdź również

[Włącz tryb Rescue na serwerze VPS](../rescue/)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
