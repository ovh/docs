---
title: Uruchamianie i korzystanie z trybu Rescue na serwerze VPS
slug: rescue
excerpt: Jak włączyć i korzystać z trybu Rescue na serwerze VPS
section: Diagnostyka i tryb Rescue
---

**Ostatnia aktualizacja z dnia 02-05-2022**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Tryb Rescue jest narzędziem dla Twojego serwera VPS. Dzięki temu możesz uruchomić serwer z tymczasowego systemu operacyjnego. W ten sposób będziesz mógł zdiagnozować i rozwiązać problemy związane z głównym systemem operacyjnym. 

Za pomocą trybu Rescue możesz:

  - zmienić hasło root;
  - diagnozowanie problemów z siecią;
  - naprawić uszkodzony system operacyjny;
  - poprawienie nieprawidłowej konfiguracji zapory;
  - testuj wydajność dysku.

Wykonanie weryfikacji w trybie Rescue pomoże Ci również ustalić, czy problem jest związany z oprogramowaniem lub sprzętem. Zalecamy, abyś zrobił to przed skontaktowaniem się z naszymi zespołami wsparcia.

> [!warning]
>
> Jeśli posiadasz usługi produkcyjne na serwerze VPS, tryb Rescue je wyłącza, dopóki maszyna nie zostanie zrestartowana do trybu normalnego.
> 

**Niniejszy przewodnik wyjaśnia, jak włączyć i korzystać z trybu Rescue na Twoim serwerze VPS.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Posiadanie [serwera VPS OVHcloud](https://www.ovhcloud.com/pl/vps/){.external} już skonfigurowanego

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, za które w pełni odpowiadasz - nie mając dostępu do tych maszyn, nie możemy być ich administratorem. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również” niniejszego przewodnika.
> 

## W praktyce

### Aktywacja trybu Rescue

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

#### W ofercie VPS

W zakładce `Strona główna`{.action} kliknij przycisk `...`{.action} obok "Boot" w obszarze **Twój VPS**.

![konfiguracja trybu Rescue](images/rescue_new.png){.thumbnail}

Wybierz `Zrestartuj w trybie Rescue`{.action} w menu.

#### Z poprzednią ofertą VPS

W zakładce `Strona główna`{.action} kliknij link skrócony zatytułowany `Uruchom ponownie w trybie Rescue`{.action}.

![konfiguracja trybu Rescue](images/rescue_legacy.png){.thumbnail}

Pojawi się okno, kliknij `Zatwierdź`{.action}, aby uruchomić restart w trybie rescue.

### Korzystanie z trybu Rescue

Po uruchomieniu restartu pasek postępu wskazuje postęp zadania. Może to potrwać kilka minut.

> [!primary]
>
> Otrzymasz automatyczny e-mail z danymi do logowania przez SSH, aby uzyskać dostęp do trybu Rescue. Zaczekaj na otrzymanie e-maila przed podjęciem jakichkolwiek dalszych kroków. E-mail ten jest również dostępny w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Aby odnaleźć Twoje konto, kliknij nazwę powiązaną z Twoim identyfikatorem OVHcloud na pasku menu w prawym górnym rogu i wybierz pozycję `E-maile usługi`{.action}.
>

Zaloguj się do serwera za pomocą wiersza poleceń lub narzędzia SSH, używając wygenerowanego hasła root dla trybu Rescue.

Przykład:

```bash
ssh root@your_server_IP
root@your_server_password:
```

> [!warning]
> 
> Twój klient SSH prawdopodobnie zablokuje połączenie przede wszystkim ze względu na niekompatybilność odcisku ECDSA. Jest to normalne, ponieważ tryb Rescue korzysta z własnego tymczasowego serwera SSH.
>
> Aby obejść ten problem, możesz skomentować odcisk palca Twojego zwykłego systemu dodając `#` przed jego linią w pliku *known_hosts*. Pamiętaj, aby usunąć ten znak przed restartem serwera w trybie normalnym.
>
Większość modyfikacji wprowadzonych na Twoim serwerze przez SSH w trybie Rescue wymaga zamontowania partycji. Tryb ten posiada własny system plików tymczasowych. W związku z tym modyfikacje wprowadzane do systemu plików w trybie Rescue zostaną utracone w trakcie restartu serwera w trybie zwykłym.

Po zalogowaniu sprawdź dostępne dyski za pomocą polecenia:

```bash
[RESCUE] root@vps-111111d:~ $ lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 2.5G 0 disk
└─sda1 8:1 0 2.5G 0 part /
sdb 8:16 0 80G 0 disk
└─sdb1 8:17 0 80G 0 part
```

Następnie zamontuj partycję:

```bash
[RESCUE] root@vps-111111d:~ $ mount /dev/sdb1 /mnt
```

Twoje dane będą teraz dostępne z katalogu `/mnt`.

Po zakończeniu operacji w trybie Rescue uruchom ponownie serwer VPS w trybie "normalnym" w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

## Sprawdź również

[Zmiana hasła root na serwerze VPS](../root-password/)

[Wprowadzenie do protokołów SSH](../../dedicated/ssh-wprowadzenie/)

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
