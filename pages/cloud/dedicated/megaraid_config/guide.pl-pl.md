---
title: Konfiguracja MegaRAID w trybie RAID 0
slug: using-the-maximum-amount-of-disk-space
excerpt: "Dowiedz się, jak skonfigurować dyski Twojego serwera w RAID 0, aby korzystać z jak największej przestrzeni dyskowej do wykorzystania"
section: RAID & dyski
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 08-07-2022**
 
## Wprowadzenie

RAID (Redundant Array of Independent Disks) to zbiór technik, które zmniejszają utratę danych na serwerze poprzez replikację informacji na kilku dyskach.

Domyślny poziom RAID serwerów OVHcloud to RAID 1. Podwaja on ilość zajętą przez Twoje dane, zmniejszając w ten sposób dostępną przestrzeń.

**Dowiedz się, jak skonfigurować dyski Twojego serwera w RAID 0, aby korzystać z maksymalnej dostępnej przestrzeni.**

> [!warning]
> 
> Uwaga: RAID 0 nie zapewnia **tolerancji na awarie** ani **redundancji danych**. Utrata informacji jest bardzo prawdopodobna w przypadku awarii dysku.
> 

## Wymagania początkowe

- Posiadanie serwera [dedykowanego](https://www.ovhcloud.com/pl/bare-metal/){.external} ze sprzętową macierzą RAID
- Dostęp do serwera przez SSH jako administrator (root)

## W praktyce

### Korzystanie z Panelu klienta OVHcloud

W [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wybierz Twój serwer, przechodząc do części `Bare Metal Cloud`{.action}, następnie wybierz `Serwery dedykowane`{.action}. 

Wyszukaj "Najnowszy system operacyjny (OS) zainstalowany przez OVHcloud" w sekcji `Informacje ogólne`{.action} i kliknij `...`{.action} a następnie `Zainstaluj`{.action} nowy system operacyjny ze spersonalizowaną konfiguracją RAID 0.

Wybierz **Zainstaluj z szablonu OVHcloud**, po czym kliknij `Dalej`{.action}.

![MegaRAID](images/server_installation_raid0_1.png){.thumbnail}

Wybierz system operacyjny, który chcesz zainstalować, a następnie kliknij `Dalej`{.action}.

Zaznacz pola **Dostosuj konfigurację RAID** sprzętowego i **Dostosuj konfigurację partycji**, a następnie kliknij `Dalej`{.action}.

![MegaRAID](images/server_installation_raid0_2.png){.thumbnail}

Wybierz "raid0" z rozwijanej listy RAID i kliknij `Dalej`{.action}.

![MegaRAID](images/server_installation_raid0_3.png){.thumbnail}

Skonfiguruj partycje zgodnie z Twoimi potrzebami, po czym kliknij `Dalej`{.action}.

![MegaRAID](images/server_installation_raid0_4.png){.thumbnail}

Na koniec kliknij `Zatwierdź`{.action}.

![MegaRAID](images/server_installation_raid0_5.png){.thumbnail}

Po skonfigurowaniu Twojego serwera sprawdź rozmiar partycji, łącząc się z nim przez SSH i wykonując następujące polecenie:

```sh
df -h
```

### Korzystanie z trybu Rescue

W [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wybierz Twój serwer, przechodząc do części `Bare Metal Cloud`{.action}, następnie wybierz `Serwery dedykowane`{.action}.

Wyszukaj "Boot" w polu **Informacje ogólne** i kliknij `...`{.action} a następnie `Zmień`{.action}, aby zmienić system startowy.

![MegaRAID](images/rescue_mode_raid0_1.png){.thumbnail}

Następnie wybierz `Uruchom w trybie Rescue`{.action} i wybierz `rescue-customer`{.action} z rozwijanej listy.

W polu "Odbieranie danych do logowania do trybu Rescue na adres e-mail:", wpisz inny adres e-mail, jeśli nie chcesz, aby dane do logowania były wysyłane na główny adres Twojego konta OVHcloud.

![MegaRAID](images/rescue_mode_raid0_2.png){.thumbnail}

Kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action} na ekranie, który się wyświetli.

![MegaRAID](images/rescue_mode_raid0_3.png){.thumbnail}

Po zakończeniu modyfikacji kliknij `...`{.action} po prawej stronie "Status" w strefie zatytułowanej **Status usług.** 

Kliknij przycisk `Restart`{.action}, a serwer zrestartuje się w trybie rescue. Operacja ta może zająć kilka minut. 

![MegaRAID](images/server_installation_raid0_6.png){.thumbnail}

Po ponownym uruchomieniu Twojego serwera, połącz się z nim przez SSH za pomocą danych do logowania do trybu Rescue. Dane te zostały wysłane na główny adres e-mail konta lub, w razie potrzeby, na podany wcześniej adres e-mail.

W wierszu poleceń wprowadź następujące polecenia, aby usunąć istniejące parametry RAID. Wszystkie dane RAID zostaną usunięte:

```sh
MegaCli -CfgLdDel -L0 -a0
MegaCli -CfgLdDel -Lall -All
```

Wprowadź następujące polecenie, aby pobrać dane dostępowe do dysków:

```sh
MegaCli -PdList -aALL | egrep "Slot|Device ID"
```

Wprowadź następujące polecenia, aby skonfigurować RAID 0:

```sh
MegaCli -CfgLDAdd -R0[252:0,252:1] -a0
```

W tym przykładzie 252 to identyfikator obudowy dysku.

Po zdefiniowaniu nowego poziomu RAID możesz sprawdzić parametry za pomocą polecenia:

```sh
MegaCli -LDInfo -Lall -a0 | grep -i size
```

## Sprawdź również

[Wymiana dysku bez wyłączania serwera w sprzętową macierz RAID](https://docs.ovh.com/gb/en/dedicated/hotswap-raid-hard/)

[Wymiana dysku bez wyłączania serwera w programowej macierzy RAID](https://docs.ovh.com/pl/dedicated/hotswap-raid-soft/)

[Zarządzanie sprzętową macierzą RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.