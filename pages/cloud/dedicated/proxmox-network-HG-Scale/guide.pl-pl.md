---
title: 'Konfiguracja sieci na Proxmox VE w ofercie High Grade & SCALE'
slug: proxmox-network-hg-scale
excerpt: 'Dowiedz się, jak skonfigurować sieć na Proxmox VE w ofercie High Grade & SCALE'
section: 'Poziom zaawansowany'
order: 5
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 28-10-2022**

> [!primary]
>
> Od 6 października 2022 nasze rozwiązanie "Failover IP" nazywa się teraz [Additional IP](https://www.ovhcloud.com/pl/network/additional-ip/). Nie ma to wpływu na jego funkcjonalność ani na działanie Twoich usług.
>

## Wprowadzenie

W ofercie High Grade & SCALE nie jest możliwe działanie adresów Additional IP w trybie bridged (poprzez wirtualne maszyny MAC). Konieczne jest zatem skonfigurowanie Additional IP w trybie routera lub vRack.

**Dowiedz się, jak skonfigurować sieć w programie Proxmox VE.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego OVHcloud](https://www.ovhcloud.com/pl/bare-metal/)
- Posiadanie adresu [Additional IP](https://www.ovhcloud.com/pl/bare-metal/ip/)
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

> [!warning]
>
> W Panelu klienta OVHcloud nie ma konieczności stosowania wirtualnego adresu MAC dla Additional IP.
>

## W praktyce

> [!primary]
>
> W tej gamie serwerów znajdują się 4 karty sieciowe. Pierwsze dwa dla publiczności, dwa dla prywatnego. Aby korzystać z całej przepustowości, należy utworzyć agregaty.
>

### Additional IP w trybie routowane do publicznych interfejsów sieciowych

#### Schemat konfiguracji docelowej

![schemat trasy](images/schema_route2022.png){.thumbnail}

#### Wyjaśnienia

Należy:

* tworzenie agregatu;
* stworzyć mostek;
* zezwolić na forwarding i dodać trasy.

#### Konfiguracja hypervisora

Wszystko odbywa się w pliku `/etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual
	bond-master bond0

# public interface 2
auto ens33f1
iface ens33f1 inet manual
	bond-master bond0

# private interface 1
auto ens35f0
iface ens35f0 inet manual

# private interface 2
auto ens35f1
iface ens35f1 inet manual

auto bond0
# LACP aggregate on public interfaces
# configured in DHCP mode on this example
# Has the server's public IP
iface bond0 inet static
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad
	hwaddress AB:CD:EF:12:34:56

#Private

auto vmbr0
# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
iface vmbr0 inet dhcp
	bridge-ports bond0
	bridge-stp off
	bridge-fd 0
	hwaddress AB:CD:EF:12:34:56
	
post-up echo 1 > /proc/sys/net/ipv4/ip_forward
post-up ip route add A.B.C.D/X dev vmbr0
```

W tym momencie uruchom ponownie usługi sieciowe lub zrestartuj serwer.

#### Przykład konfiguracji VM klient Debian

Zawartość pliku `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address IP_FO
    netmask 255.255.255.255
    gateway 192.168.0.1
```

### Additional IP poprzez vRack

#### Wymagania początkowe

* Rezerwacja bloku publicznych adresów IP na Twoim koncie z minimalną liczbą czterech adresów. Blok musi być skierowany do sieci vRack.
* Przygotowanie Twojego zakresu wybranych prywatnych adresów IP
* Posiadanie [serwera kompatybilnego z vRack](https://www.ovhcloud.com/pl/bare-metal/){.external}
* Aktywacja usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
* Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

#### Schemat konfiguracji docelowej

![schemat vrack](images/schema_vrack2022.png){.thumbnail}

#### Wyjaśnienia

Musisz:

* tworzenie agregatu;
* stworzyć brydż podłączony do agregatu;

Po pierwsze, dodaj blok publicznych adresów IP do sieci vRack. W tym celu przejdź do sekcji `Bare Metal Cloud`{.action} w Panelu klienta OVHcloud i otwórz menu `vRack`{.action}.

Wybierz z listy usługę vRack, aby wyświetlić listę usług, które chcesz zamówić. Kliknij publiczny blok adresów IP, który chcesz dodać do sieci vRack, następnie kliknij przycisk `Dodaj`{.action}.

#### Konfiguracja adresu IP

W przypadku sieci vRack pierwszy, przedostatni i ostatni adres danego bloku IP są zawsze zarezerwowane odpowiednio dla adresu sieci, bramy sieciowej i *broadcastu* sieci. Oznacza to, że pierwszy możliwy do użycia adres jest drugim adresem z bloku, jak pokazano poniżej:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
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
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

Aby skonfigurować pierwszy możliwy do użycia adres IP, edytuj plik konfiguracyjny sieci, jak wskazano poniżej. Użyj maski podsieci **255.255.255.240**.

> [!primary]
>
> Maska podsieci użyta w tym przykładzie jest odpowiednia dla wybranego bloku IP. Twoja maska podsieci może różnić się w zależności od wielkości Twojego bloku. Po zakupieniu bloku IP otrzymasz e-mail wskazujący maskę podsieci, której należy użyć.
>

#### Konfiguracja hypervisora

Wszystko odbywa się w pliku `/etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

Ważna jest konfiguracja `bond` i `vmbr`:

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual

# public interface 2
auto ens33f1
iface ens33f1 inet manual

# private interface 1
auto ens35f0
iface ens35f0 inet manual
	bond-master bond1

# private interface 2
auto ens35f1
iface ens35f1 inet manual
	bond-master bond1

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad

auto bond1
# LACP Aggregate on private interfaces
# No IPs on it
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
    bond-miimon 100
	bond-mode 802.3ad


#Private

auto vmbr1
# Bridge connected to bond1 aggregate
# No need for IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

post-up echo 1 > /proc/sys/net/ipv4/ip_forward

```

W tym momencie uruchom ponownie usługi sieciowe lub zrestartuj serwer.

#### Przykład konfiguracji VM klient Debian

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

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
