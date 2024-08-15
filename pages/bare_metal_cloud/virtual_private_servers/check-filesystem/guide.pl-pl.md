---
title: Sprawdź system plików na serwerze VPS
excerpt: Dowiedz się, jak wyszukać błędy w systemie plików w trybie rescue
updated: 2023-09-20
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

**Dowiedz się, jak przeprowadzić diagnostykę systemów plików na serwerach VPS OVHcloud za pomocą trybu Rescue.**

> [!warning]
>OVHcloud świadczy usługi, za które jesteś odpowiedzialny w związku z ich konfiguracją i zarządzaniem. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
>
>Jeśli napotkasz trudności z przeprowadzeniem tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług i/lub skontaktuj się z naszą społecznością użytkowników na <https://community.ovh.com/en/>. OVHcloud nie będzie w stanie udzielić Ci wsparcia technicznego w tym zakresie.
>

## Wymagania początkowe

- jednego [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

### VPS GNU/Linux

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i uruchom restart serwera w trybie rescue. W razie potrzeby zapoznaj się z naszym [przewodnikiem dotyczącym trybu Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Następnie możesz sprawdzić konfigurację dysków:

```bash
lsblk
```

Partycja odpowiadająca trybowi Rescue (`sda1` w tym przykładzie) jest zamontowana w katalogu `/` .Dysk VPS ma nazwę `sdb` i nie może mieć punktu montowania.

Przykład:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part  
```

Jeśli Twój wynik wygląda podobnie do powyższego przykładu, a kolumna `MOUNTPOINT` jest pusta w odpowiednim wierszu (`sdb1`), możesz przejść do [następnego etapu](#fscheck).

Jeśli jednak Twój wynik wskazuje, że partycja VPS ma punkt montowania, najpierw należy ją odmontować.

Przykład:

```console
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

W powyższym przykładzie wyjściowym partycja `sdb1` jest zamontowana w `/mnt/`. W celu sprawdzenia partycji nie należy jej zamontować.

W celu odmontowania partycji należy użyć następującego polecenia:

```bash
umount /dev/partition_name
```

W tym przykładzie konfiguracji, polecenie to będzie:

```bash
umount /dev/sdb1
```

<a name="fscheck"></a>

Teraz możesz sprawdzić partycję za pomocą "fsck":

```bash
fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 kolejki, 849881/6525179 blocks
```

Jeśli wynik jest pusty, zazwyczaj oznacza to, że system plików jest czysty. Możesz jednak wymusić weryfikację:

```bash
fsck /dev/sdb1 -f
```

### VPS Windows

Powyższe instrukcje zwykle nie mają zastosowania do serwera VPS z systemem Windows, ponieważ weryfikacja systemu plików nie obsługuje NTFS. Możesz jednak przeprowadzić weryfikację zgodności NTFS na partycjach.

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i uruchom restart serwera w trybie rescue. W razie potrzeby zapoznaj się z naszym [przewodnikiem dotyczącym trybu Rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Następnie możesz sprawdzić konfigurację dysków:

```bash
lsblk
```

Partycja odpowiadająca trybowi Rescue (`sda1` w tym przykładzie) jest zamontowana w katalogu `/`. Dysk VPS ma nazwę `sdb` i nie może mieć punktu montowania.

Przykład:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part 
├─sdb2   8:18   0 99.7G  0 part 
```

Jeśli Twój wynik wygląda podobnie do powyższego przykładu, a kolumna `MOUNTPOINT` jest pusta w odpowiednim wierszu, możesz przejść do [następnego etapu](#fscheckwin).

Jeśli jednak Twój wynik wskazuje, że partycja VPS ma punkt montowania, najpierw należy ją odmontować.

Przykład:

```console
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

W powyższym przykładzie wyjściowym odpowiednia partycja `sdb2` jest zamontowana w `/mnt/`. W celu sprawdzenia partycji nie należy jej zamontować.

W celu odmontowania partycji należy użyć następującego polecenia:

```bash
umount /dev/partition_name
```

W tym przykładzie konfiguracji, polecenie to będzie:

```bash
umount /dev/sdb2
```

<a name="fscheckwin"></a>

Poniższe polecenie sprawdza spójność partycji i stara się usunąć ewentualne błędy:

```bash
ntfsfix /dev/partition_name
```

W tym przykładzie konfiguracji, polecenie to będzie:

```bash
ntfsfix /dev/sdb2
```

## Sprawdź również

[Włącz tryb Rescue na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
