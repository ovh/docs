---
title: Zmiana rozmiaru systemu plików na FreeBSD 12
slug: zmiana-systemu-plików-freebsd-12
excerpt: Dowiedz się, jak zmienić rozmiar systemu plików instancji Public Cloud lub VPS na FreeBSD 12
section: Tutoriale
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 27-10-2020**

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak zmienić rozmiar systemu plików po zainstalowaniu go lub zmienić jego rozmiar w systemie FreeBSD 12. Pozwoli to systemowi na korzystanie z całej przestrzeni dyskowej.

## Wymagania początkowe

 * Posiadanie instancji z FreeBSD 12 w Twoim projekcie [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) lub [VPS](https://www.ovhcloud.com/pl/vps/) z FreeBSD 12
 * Instalacja lub zmiana  [rozmiaru instancji/VPS](../zmiana_rozmiaru_instancji/)

> [!primary]
>
> W tym tutorialu stosowana jest instancja r2-15. Instrukcje są ważne dla serwera VPS lub instancji Public Cloud. Początkowo system plików ma `5 GB`. Po zakończeniu tego procesu będzie miał `50 GB`.
>

## W praktyce

Aby zwiększyć rozmiar systemu plików, najpierw należy naprawić partycje.

Zaloguj się do instancji i sprawdź stan partycji:

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40 1024 1 freebsd-boot (512K)
      1064 984 - free - (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952 2008 - free - (1.0M)
```

Tutaj widzicie, że system plików jest uszkodzony. Stan ten jest normalny, ponieważ wynika z instalacji obrazu na instancji lub z jego zmiany rozmiaru. Musimy to naprawić:

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

Powtarzając pierwsze polecenie, możesz stwierdzić, że system plików został naprawiony:

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40 1024 1 freebsd-boot (512K)
       1064 984 - free - (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952 94619608 - free - (45G)
```

Teraz możesz zmienić rozmiar partycji `freebsd-zfs`. W tym celu użyj komendy:

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> Może się zdarzyć, że numer partycji jest inny, aby znaleźć prawidłowy numer, sprawdź kolumnę `vtbd00` i numer przed linią `freebsd-zfs`.
>

Teraz zmieniłeś rozmiar systemu plików. ZFS jest skonfigurowany tak, aby rozszerzać się automatycznie. Aby sprawdzić, wprowadź następującą komendę:

```
freebsd@freebsd:~ % zpool list
NAME    SIZE  ALLOC   FREE  CKPOINT  EXPANDSZ   FRAG    CAP  DEDUP  HEALTH  ALTROOT
zroot 49.5G 854M 48.7G - 0% 1% 1.00x ONLINE -
```

Zauważcie, że w tym przykładzie zroot `zrobił` teraz `50 GB`. ZFS jest więc rozszerzony.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
