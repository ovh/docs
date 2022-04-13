---
title: 'Reset hasła Windows'
slug: zresetuj-haso-windows
excerpt: Przewodnik dotyczący resetowania hasła w systemie Windows
section: Diagnostyka i tryb Rescue
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 26-11-2020**

## Wprowadzenie

Możliwe, że musisz zresetować hasło na serwerze VPS z systemem Windows. Niniejszy przewodnik pozwoli Ci w prosty sposób zresetować hasło i przywrócić połączenie z Twoim serwerem VPS.

## Wymagania początkowe

- VPS musi być w trybie Rescue (aby uzyskać więcej informacji, sprawdź [Aktywacja trybu Rescue na serwerze VPS](../rescue)).

## W praktyce

Zaloguj się na serwerze VPS poprzez VNC w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) za pomocą identyfikatora logowania otrzymanego e-mailem.

Wpisz następujące polecenia, aby zamontować zdalny system plików:

```sh
ntfsfix /dev/sdb2
mount -t ntfs-3g /dev/sdb2 /mnt
```

Rozpocznij procedurę odzyskiwania hasła:

```sh
cd /mnt/Windows/System32/config
chntpw -l SAM
```

Zobaczycie listę użytkowników. Zapoznaj się z kontem administratora (lub kontem, którego hasło należy zresetować). W tym przykładzie użyjemy konta `Administrator`. Pamiętaj, że zamówienia są wrażliwe na łamanie.

```sh
chntpw -u Administrator SAM
```

Kliknij `Jedno`{.action} i `Wejście`{.action}, aby usunąć hasło. Naciśnij `q`{.action}, aby opuścić wiersz poleceń zmiany hasła. Następnie naciśnij `y`{.action}, aby zapisać zmiany.

Możesz teraz wyjąć serwer VPS z trybu Rescue. (więcej informacji znajdziesz w przewodniku [Aktywacja trybu Rescue na serwerze VPS](../rescue))

Przy kolejnym logowaniu nie będziesz musiał wpisywać hasła do sesji, której hasło zostało zmienione.

> [!warning]
>
> Pozostawienie konta administratora (lub każdego konta z dużymi uprawnieniami) przy użyciu hasła jest niezwykle ryzykowne. Aby zresetować hasło, zaloguj się natychmiast do instalacji systemu Windows.
> 

Po zalogowaniu się do sesji kliknij `CTRL`{.action} + `ALT`{.action} + `DELETE`{.action}, a następnie kliknij przycisk `Zmień hasło`{.action}. Jeśli korzystasz z VNC, kliknij przycisk w prawym górnym rogu zatytułowany `Send CtrlAltDel`{.action}.

Pozostaw puste pole `Stare hasło` i wpisz nowe hasło dwa razy. Upewnij się, czy Twoje hasło jest identyczne.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
