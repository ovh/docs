---
title: Aktualizacja systemu operacyjnego
slug: upgrade-os
excerpt: 'Dowiedz się, jak zaktualizować system operacyjny pod koniec życia'
section: 'Tutoriale'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 09-07-2021**

## Wprowadzenie

Tutorial przedstawia kroki, jakie należy podjąć, aby zaktualizować system operacyjny pod koniec życia do nowej wersji.

> [!alert]
> Ostrzeżenie: podobnie jak w przypadku każdej istotnej aktualizacji systemu operacyjnego, istnieje ryzyko awarii, utraty danych lub awarii konfiguracji oprogramowania.
> Dlatego przed postępuniem zgodnie z instrukcjami, OVHcloud zdecydowanie zaleca, aby [zapisać Twoją instancję](../kopia_zapasowa_instancji/) i wykonać szczegółowe testy aplikacji, aby upewnić się, że działają one na nowej wersji systemu operacyjnego.
>

> [!primary]
> Aby uniknąć problemów wymienionych powyżej, zalecamy zainstalowanie nowej instancji z nowym systemem operacyjnym, do którego chcesz przeprowadzać aktualizację, a następnie migrację danych.
> Konieczne może okazać się zbadanie różnic w aplikacji, ale system operacyjny prawdopodobnie będzie bardziej stabilny.
>

## Wymagania początkowe

- Dostęp [root do serwera](../dostep_root_i_zdefiniowanie_hasla/)
- Wykonanie [kopii zapasowej instancji](../kopia_zapasowa_instancji/)

## W praktyce

### Debian

Przed aktualizacją głównej wersji systemu operacyjnego, upewnij się, że aktualizujesz najnowsze wersje wszystkich pakietów zainstalowanych w jego aktualnej wersji:

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get full-upgrade
```

> [!alert]
> Kolejny etap jest opcjonalny.
> Należy jednak dokładnie zbadać pakiety, które nie są już potrzebne w systemie. W przeciwnym razie następujące polecenie może uszkodzić system. 
>

```bash
$ sudo apt-get --purge autoremove
```

Niektóre aktualizacje mogą wymagać restartu, należy najpierw zrestartować przed rozpoczęciem aktualizacji:

```bash
$ sudo systemctl reboot
```

Po ponownym uruchomieniu zaktualizuj katalog /etc/apt/sources.list, aby wybrać kolejną wersję (w tym przykładzie przenosimy się z Buster na Bullseye):

```bash
$ sudo cp -v /etc/apt/sources.list /root/
$ sudo cp -rv /etc/apt/sources.list.d/ /root/
$ sudo sed -i 's/buster/bullseye/g' /etc/apt/sources.list
$ sudo sed -i 's/bullseye\/updates/bullseye-security/g' /etc/apt/sources.list
```

Teraz, kiedy kolejna wersja jest skierowana, możesz przejść do aktualizacji i do restartu końcowego:

> [!primary]
> Okna kontekstowe mogą zachęcić Cię do ponownego uruchomienia Twoich usług. Proszę odpowiedzieć twierdząco.
>

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get full-upgrade
$ sudo systemctl reboot
```

Sprawdź, czy aktualizacja działa:

```bash
$ uname -r
$ lsb_release -a
```

### Ubuntu

Przed aktualizacją głównej wersji systemu operacyjnego, upewnij się, że aktualizujesz najnowsze wersje wszystkich pakietów zainstalowanych w jego aktualnej wersji:

```sh
$ sudo apt-get update
```

Następnie zaktualizuj pakiety zainstalowane w najnowszych wersjach:

```sh
$ sudo apt-get upgrade -y
```

Po zakończeniu tej operacji wykonaj *dist-upgrade*, który uruchomi inne aktualizacje, które mogą być konieczne:

```sh
$ sudo apt-get dist-upgrade -y
```

Aktualizacja wersji wyższej może zostać wykonana. Ubuntu dostarcza teraz narzędzie o nazwie *do-release-upgrade*, które sprawia, że aktualizacja jest bezpieczniejsza i łatwiejsza. Rozpocznij aktualizację za pomocą tego polecenia:

```sh
$ sudo do-release-upgrade
```

Postępuj zgodnie z instrukcjami podanymi w tym czasie. polegają one na potwierdzeniu, że chcesz kontynuować aktualizację.

Uwagi:

- Narzędzie może poprosić o ponowne uruchomienie serwera przed przeprowadzeniem aktualizacji. Aby to zrobić, po prostu wpisz "reboot" (restart) i naciśnij Enter.
- Otrzymasz powiadomienie, że wykonywanie tej operacji przez połączenie SSH nie jest zalecane. Ponieważ nie ma fizycznego dostępu do serwera, połączenie przez SSH jest głównym sposobem dostępu do serwera.
Ubuntu uruchomi nową usługę SSH na innym porcie, abyś mógł zachować inny dostęp w przypadku awarii. Ponadto, jeśli nie masz już dostępu przez SSH, możesz zawsze uzyskać dostęp do serwera za pomocą konsoli.
- Podczas aktualizacji może być konieczne potwierdzenie usunięcia pakietów, które nie są już obsługiwane. Zanim przejdziesz dalej, upewnij się, że nie ma to żadnego wpływu na Twoje aplikacje.

Po zakończeniu aktualizacji serwer uruchomi się ponownie i stracisz połączenie, aż uruchomi się ponownie.
Po kilku minutach powinieneś być w stanie się zalogować i widzieć wiadomość podobną do tej poniżej (wersja będzie następna dostępna w porównaniu do poprzedniej wersji):

```sh
$ Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 4.15.0-147-generic x86_64)
```

> [!primary]
> Podczas aktualizacji systemu operacyjnego zamiast jego reinstalacji nowa wersja systemu operacyjnego nie jest wskazana w panelu klienta / API OVHcloud ani w interfejsie API Horizon / OpenStack.
>

Sprawdź, czy Twoje aplikacje działają zgodnie z planem. W przypadku problemu zalecamy [przywrócenie kopii zapasowej](../tworzenie_przywracanie_serwera_wirtualnego_na_podstawie_kopii_zapasowej/) przed aktualizacją.

### Fedora

Przed rozpoczęciem aktualizacji głównej wersji systemu operacyjnego upewnij się, że aktualizujesz najnowsze wersje wszystkich pakietów zainstalowanych w jego obecnej wersji. Wprowadź to polecenie:

```sh
$ sudo dnf upgrade —refresh
```

Następnie zrestartuj serwer:

```sh
$ reboot
```

Po zrestartowaniu serwera zainstaluj pakiet aktualizacji:

```sh
$ sudo dnf install dnf-plugin-system-upgrade
```

Po wybraniu odpowiedniego pakietu możesz przeprowadzić aktualizację. Aktualizacje systemu są urzędowo obsługiwane i testowane tylko w maksymalnie 2 wersjach (np. od 32 do 34).
W tym przykładzie z Fedory 32 na 33:

```sh
$ sudo dnf system-upgrade download --releasever=33
$ sudo dnf system-upgrade reboot
```

Po pobraniu wersji i uruchomieniu procesu aktualizacji serwer uruchomi się ponownie, aby zakończyć aktualizację.
<br>Może upłynąć trochę czasu zanim będziesz mógł ponownie połączyć się z serwerem, ponieważ aktualizacja wymaga czasu.

Sprawdź, czy Twoje aplikacje działają zgodnie z planem. W przypadku problemu zalecamy [przywrócenie kopii zapasowej](../tworzenie_przywracanie_serwera_wirtualnego_na_podstawie_kopii_zapasowej/) przed aktualizacją.

> [!primary]
> Jeśli napotkasz trudności, możesz znaleźć odpowiedzi na Twoje pytania na stronie internetowej [Fedora Docs](https://docs.fedoraproject.org/en-US/quick-docs/dnf-system-upgrade/){.external}.
>

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
