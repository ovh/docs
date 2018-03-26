---
title: Instalacja Real Time Monitoring (RTM)
slug: instalacja-rtm
excerpt: Sprawdź, jak zainstalować Real Time Monitoring w systemie Linux lub Windows.
section: Diagnostyka i tryb Rescue
---

**Ostatnia aktualizacja dnia 2018-01-15**

## Wprowadzenie

Narzędzie Real Time Monitoring (RTM) umożliwia częściowe monitorowanie serwera i jego aktywności. W Panelu klienta można monitorować: wykorzystanie procesora (CPU), pamięci (RAM), otwartych portów itd. Aby informacje te były dostępne, niezbędna jest instalacja pakietu RTM.

**Niniejszy przewodnik objaśnia jak zainstalować RTM w systemie Windows lub Linux**

## Wymagania początkowe

- połączenie przez SSH (lub interfejs graficzny) z serwerem Linux (dostęp *root*).
- połączenie z pulpitem zdalnym na serwerze Windows (dostęp *administrator*).
- połączenie z [Panelem klienta OVH](https://www.ovh.com/auth){.external}.

## W praktyce

Po zainstalowaniu narzędzia RTM możesz monitorować serwer z poziomu Panelu klienta, w części `Dedykowane`{.action}. Na stronie głównej serwera wyświetlą się informacje o monitorowaniu w `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png)

> [!primary]
>
> Zdarza się, że pomimo zainstalowania RTM-u, zapora sieciowa uniemożliwia monitorowanie infrastruktury. Należy pamiętać o otwarciu w monitoringu IP dostępu dla serwera. Szczegóły znajdziesz [tutaj](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/){.external}.
> 

### Instalowanie RTM w systemie Linux

Po połączeniu z serwerem protokołem SSH należy wpisać następujące polecenie:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh | sh install_rtm.sh
```

### Instalowanie RTM w systemie Windows

Po połączeniu z pulpitem zdalnym należy:

- jeśli RTM nie był nigdy wcześniej instalowany, zainstalować ActivePerl. Można pobrać go pod linkiem: <http://www.activestate.com/activeperl/> ;
- pobirać i zainstalować najnowszą wersję RTM tutaj: <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/> ;
- kliknąć plik prawym przyciskiem, a następnie kliknąć `Wykonaj jako administrator`{.action}.


## Sprawdź również

[Monitoring IP OVH](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.

