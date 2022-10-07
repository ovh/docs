---
title: 'Konfiguracja sieci na ESXi w ofercie High Grade & SCALE'
slug: esxi-network-hg-scale
excerpt: 'Dowiedz się, jak skonfigurować sieć na ESXi w ofercie High Grade & SCALE'
section: 'Poziom zaawansowany'
order: 6
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 09-05-2022**

## Wprowadzenie

W ofercie High Grade & SCALE nie jest możliwe działanie adresów Additional IP w trybie *bridged* (za pomocą wirtualnych adresów MAC). Konieczne jest zatem skonfigurowanie Additional IP w trybie routera lub vRack.

> [!primary]
>
> Do tej pory dokumentacja obejmuje jedynie rozwiązanie dostępne w sieci vRack.
>

**Dowiedz się, jak skonfigurować sieć pod ESXi.**

## Wymagania początkowe

* Rezerwacja bloku publicznych adresów IP na Twoim koncie z minimalną liczbą czterech adresów. Blok musi być skierowany do sieci vRack.
* Przygotowanie Twojego zakresu wybranych prywatnych adresów IP
* Posiadanie [serwera dedykowanego kompatybilnego z vRack](https://www.ovhcloud.com/pl/bare-metal/){.external}.
* Aktywacja usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
* Dostęp do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

> [!warning]
>
> W tej gamie serwerów znajdują się 4 karty sieciowe. Aby korzystać z całej przepustowości, należy utworzyć agregaty. Nasza dokumentacja jest oparta na danych zagregowanych kart.
>
> **Jednak ESXi nie obsługuje natywnie LACP.**
> Brak będzie zatem możliwości uzyskania redundancji. Nie będzie również możliwe wykorzystanie całej przepustowości kart sieciowych Twojego serwera.
>

> [!warning]
>
> Znana wada jest obecnie widoczna w graficznym interfejsie użytkownika ESXi. Wykonanie tych etapów w interfejsie spowoduje niefunkcjonalną konfigurację. Konieczne jest zastosowanie tej konfiguracji przy użyciu interfejsu wiersza poleceń przez SSH.
>

### Additional IP w sieci vRack

Po pierwsze, dodaj blok publicznych adresów IP do sieci vRack. W tym celu przejdź do sekcji `Bare Metal Cloud`{.action} w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i otwórz menu `vRack`{.action}.

Wybierz z listy usługę vRack, aby wyświetlić listę usług, które chcesz zamówić. Kliknij publiczny blok adresów IP, który chcesz dodać do sieci vRack, następnie kliknij przycisk `Dodaj`{.action}.

#### Konfiguracja początkowa

![schemat esxi](images/schema_esxi_A01_2022.png){.thumbnail}

W tym przykładzie:

* interfejsy publiczne to `vmnic2` i `vmnic3`;
* prywatne interfejsy są na `vmnic0` i `vmnic1`.

Pierwszy vSwitch istnieje, ale zawiera tylko jeden interfejs `vmnic2`.

> [!primary]
>
> Sprawdź, czy Twoja konfiguracja jest podobna. Informacje na temat publicznych lub prywatnych interfejsów MAC są dostępne w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) lub poprzez API OVHcloud.
>

#### Wyjaśnienia

Teraz musisz:

* tworzenie agregatu dla publicznej sieci vSwitch;
* utworzyć vSwitch dla vRack;
* utworzenie grupy portów;
* tworzenie wirtualnych maszyn przy użyciu nowej grupy portów jako interfejsu sieciowego.

#### Konfiguracja ESXi

> [!primary]
>
> Operacje należy wykonać w trybie sterowania (shell), a nie w interfejsie graficznym ESXi (GUI).
>

##### **Tworzenie agregatu w trybie LACP dla vSwitch z interfejsami publicznymi**

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Wynik:

![schemat esxi](images/schema_esxi_A02_2022.png){.thumbnail}

##### **Tworzenie vSwitch i agregatu dla vRack w ramach prywatnych interfejsów**

```bash
[root@localhost:~] esxcli network vswitch standard add --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic0 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic1 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vRackvSwitch
[root@localhost:~] 
```

Wynik:

![schemat esxi](images/schema_esxi_A03_2022.png){.thumbnail}

##### **Konfiguracja VM**

Wirtualne maszyny muszą posiadać w interfejsie sieciowym nową grupę portów `portgroupvRackvSwitch`.

![schemat esxi](images/schema_esxi_A04_2022.png){.thumbnail}

##### **Utworzenie grupy portów dla nowego vSwitch "vRackvSwitch"**

```bash
[root@localhost:~] esxcli network vswitch standard portgroup add --portgroup-name=portgroupvRackvSwitch --vswitch-name=vRackvSwitch
```

#### Konfiguracja adresu IP

W przypadku sieci vRack pierwsze i dwa ostatnie adresy danego bloku IP są zawsze zarezerwowane odpowiednio dla adresu sieci, bramy i adresu *broadcastu*. Oznacza to, że pierwszy możliwy do użycia adres jest drugim adresem z bloku, jak pokazano poniżej:

```sh
46.105.135.96 # Zarezerwowany: adres sieci
46.105.135.97 # Pierwszy możliwy do użycia adres
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109 # Ostatni możliwy do użycia adres
46.105.135.110 # Zarezerwowany: brama sieci
46.105.135.111 # Zarezerwowany: adres broadcastu sieci
```

Aby skonfigurować pierwszy możliwy do użycia adres IP, edytuj plik konfiguracyjny sieci, jak wskazano poniżej. Użyj maski podsieci **255.255.255.240**.

> [!primary]
>
> Maska podsieci użyta w tym przykładzie jest odpowiednia dla wybranego bloku IP. Twoja maska podsieci może różnić się w zależności od wielkości Twojego bloku. Po zakupieniu bloku IP otrzymasz e-mail wskazujący maskę podsieci, której należy użyć.
>

#### Przykład konfiguracji klienckiej VM w systemie Debian

Zawartość pliku `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
