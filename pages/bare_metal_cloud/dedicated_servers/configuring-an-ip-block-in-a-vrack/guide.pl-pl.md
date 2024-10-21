---
title: 'Konfiguracja bloku IP w sieci vRack'
excerpt: 'Dowiedz się, jak skonfigurować blok publicznych adresów IP w sieci vRack'
updated: 2023-08-31
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Oprócz prywatnego adresowania IP, [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external} umożliwia kierowanie publicznego ruchu IP przez port vRack Twojego serwera za pomocą bloku publicznych adresów IP.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować blok publicznych adresów IP do zastosowania z rozwiązaniem vRack.**

## Wymagania początkowe

- Rezerwacja bloku publicznych adresów IP na Twoim koncie z minimalną liczbą czterech adresów
- Przygotowanie Twojego zakresu wybranych prywatnych adresów IP
- Posiadanie [serwera kompatybilnego z vRack](https://www.ovh.pl/serwery_dedykowane/){.external}
- Aktywacja usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

> [!primary]
>
> Jako przykład użyjemy bloku IP 46.105.135.96/28 oraz `eth1` dla dodatkowego interfejsu sieciowego dedykowanego sieci vRack.
>
> Dla przykładu, plik konfiguracyjny sieci, do którego się odnosimy, znajduje się w `/etc/network/interfaces`. W zależności od używanego systemu operacyjnego, równoważny plik może znajdować się w innym miejscu. Zawartość pliku może być również inna. Jeśli masz jakiekolwiek trudności, zapoznaj się z oficjalną dokumentacją swojej dystrybucji.

### Dodaj blok IP do vRack

> [!warning]
>
> Gdy blok IP jest dodany do sieci vRack, nie jest już przypisany do fizycznego serwera.
>
> Konfiguracja ta pozwala na skonfigurowanie adresów IP tego samego bloku na kilku serwerach, pod warunkiem że wszystkie te serwery są w tej samej sieci vRack co blok IP. Aby to możliwe, blok IP musi mieć co najmniej 2 adresów IP nadających się do wykorzystania.
>

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) przejdź do sekcji `Bare Metal Cloud`{.action} i kliknij `Network`{.action}. Następnie otwórz menu `vRack`{.action}.

Wybierz z listy usługę vRack, aby wyświetlić listę usług, które chcesz zamówić. Kliknij blok IP, który chcesz dodać do sieci vRack i kliknij przycisk `Dodaj`{.action}.

![vrack](images/addIPblock.png){.thumbnail}

### Konfiguracja adresu IP

W przypadku sieci vRack pierwszy, przedostatni i ostatni adres danego bloku IP są zawsze zarezerwowane odpowiednio dla: adresu sieci, bramy sieciowej i broadcastu sieci. Oznacza to, że pierwszy możliwy do użycia adres jest drugim adresem z bloku, jak pokazano poniżej:

```sh
46.105.135.96   # Zarezerwowany: adres sieci
46.105.135.97   # Pierwszy możliwy do użycia adres IP
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
46.105.135.109   # Ostatni możliwy do użycia adres IP
46.105.135.110   # Zarezerwowany: brama sieci
46.105.135.111   # Zarezerwowany: broadcast sieci
```

Aby skonfigurować pierwszy możliwy do użycia adres IP, edytuj plik konfiguracyjny sieci, jak wskazano poniżej. Użyj maski podsieci **255.255.255.240**.

> [!primary]
>
> Maska podsieci użyta w tym przykładzie jest odpowiednia dla przykładowego bloku IP 46.105.135.96/28. Twoja maska podsieci może różnić się od przykładowej ze względu na wielkość Twojego bloku. Po zakupieniu bloku IP otrzymasz e-mail zawierający informacje o masce podsieci, której należy użyć.
>

```sh
vi /etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```

### Tworzenie nowej tablicy routingu IP

Pakiet “iproute2” umożliwi ręczną konfigurację routingu IP na serwerze.

Połącz się przez SSH z Twoim serwerem i wprowadź następującą komendę, aby pobrać i zainstalować pakiet:

```sh
apt-get install iproute2
```

Następnie utwórz nową trasę IP dla vRack. W tym celu dodaj nową regułę ruchu, modyfikując plik, jak pokazano poniżej:

```sh
/etc/iproute2/rt_tables

# # #
# reserved values
# # #
255	local
254	main
253	default
0	unspec
# # #
# local
# # #
#1	inr.ruhep
1 vrack
```

### Zmodyfikuj plik konfiguracyjny sieci

Na koniec zmodyfikuj plik konfiguracyjny sieci, aby została uwzględniona nowa reguła ruchu, i aby ruch vRack został przekierowany za pomocą adresu bramy sieciowej **46.105.135.110**.

```sh
vi /etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Zrestartuj serwer, aby zastosować wprowadzone zmiany.

## Sprawdź również

[Konfiguracja kilku serwerów dedykowanych w sieci vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server){.external}

[Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack){.external}

[Konfiguracja sieci vRack między Public Cloud a serwerem dedykowanym](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
