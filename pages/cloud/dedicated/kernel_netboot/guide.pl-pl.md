---
title: Uruchom serwer z kernela OVHcloud
slug: kernel-netboot
excerpt: Poniżej znajdziesz kroki, które należy wykonać, aby uruchomić serwer z sieci z kernela OVHcloud.
section: Poziom zaawansowany
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 25-02-2022**

## Wprowadzenie

Netboot to usługa oferowana za darmo przez OVHcloud, która pozwala na uruchomienie serwera dedykowanego OVHcloud na uprzednio skompilowanym kernelu. Po skonfigurowaniu serwera, serwer automatycznie ładuje jądro z sieci. Nie masz nic innego do skonfigurowania. Dzięki tej metodzie możesz również szybko zaktualizować kernel, ponieważ OVHcloud compile najnowszą wersję jądra, która jest już dostępna w Netboot.

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/)
- Dostęp [do Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

### Uruchom serwer z trybu Network

> [!primary]
>
> Ta część jest przeznaczona dla serwerów z systemem Linux. Dla Windows, FreeBSD i wirtualizacji możliwe są tylko tryby uruchamiania na dysku twardym lub w trybie rescue.
>

Zaloguj się do Twojego [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer na `Serwery Dedykowane`{.action}.

Wyszukaj "Boot" w sekcji **Informacje ogólne** i kliknij `...`{.action} a następnie `Zmień`{.action}. 

![Netboot](images/netboot_2022.png){.thumbnail}

Wybierz `Uruchom z sieci (Netboot).`{.action}.

![Netboot](images/netboot_005.png){.thumbnail}

Wybierz dostępne jądro (kernel), następnie wprowadź root Device (partycję, na której znajduje się partycja główna serwera).

Aby określić Root Device Twojego serwera, sprawdź plik /etc/fstab Twojego serwera.

Przez SSH:

```sh
cat /etc/fstab

/dev/sda1 / ext3 errors=remount-ro 0 1
/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2
/dev/sda3 swap swap defaults 0 0
  proc /proc proc defaults 0 0
sysfs /sys sysfs defaults 0 0
shm /dev/shm tmpfs nodev,nosuid,noexec 0 0
```

W naszym przykładzie Root Device to /dev/sda1.

Kliknij `Dalej`{.action} i `Zatwierdź`{.action}.

Po zakończeniu modyfikacji kliknij `...`{.action} po prawej stronie "Status" w strefie zatytułowanej **Stan usług.** Kliknij `Restart`{.action}, aby aktywować netboot.

![Netboot](images/netboot_004.png){.thumbnail}

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
