---
title: 'Konfiguracja bloku Additional IP w sieci vRack'
excerpt: 'Ten przewodnik pokazuje, jak skonfigurować blok publicznych adresów IP do użytku z siecią vRack.'
updated: 2026-03-11
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Oprócz prywatnego adresowania IP, sieć [vRack](/links/network/vrack) umożliwia również kierowanie publicznego ruchu IP przez port vRack serwera przy użyciu bloku publicznych adresów IP.

**Ten przewodnik pokazuje, jak skonfigurować blok publicznych adresów IP do użytku z siecią vRack.**

> [!primary]
>
> Sieć vRack obsługuje zarówno publiczny routing IPv4, jak i IPv6 z blokami adresów Additional IP. Instrukcje dotyczące konfiguracji bloków IPv6 można znaleźć w tym przewodniku: "[Konfiguracja bloku IPv6 w sieci vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)".
>

> [!primary]
>
> Ten artykuł skupia się na konfiguracji Additional IP w sieci vRack. Jeśli szukasz wskazówek dotyczących konfiguracji Additional IP razem z głównym IP (na publicznym interfejsie sieciowym), zapoznaj się z następującymi artykułami:
>
> - IPv4:
>     - [Konfiguracja aliasowania IP na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Konfiguracja aliasowania IP na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Konfiguracja IPv6 na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Konfiguracja IPv6 na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Konfiguracja IPv6 na instancji Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Wymagania początkowe

- Publiczny blok adresów IP na koncie, z minimum czterema adresami
- Wybrany zakres prywatnych adresów IP
- [Serwer kompatybilny z vRack](/links/bare-metal/bare-metal)
- Usługa [vRack](/links/network/vrack) aktywowana na koncie
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

> [!warning]
> Ta funkcja może być niedostępna lub ograniczona na [serwerach dedykowanych z linii produktów **Eco**](/links/bare-metal/eco-about).
>
> Więcej informacji znajdziesz na naszej [stronie porównawczej](/links/bare-metal/eco-compare).

## W praktyce

> [!primary]
>
> Dla celów przykładowych będziemy używać bloku IP 46.105.135.96/28 i eth1 dla dodatkowego interfejsu sieciowego, który jest dedykowany sieci vRack.
>
> Również dla celów przykładowych, plik konfiguracji sieci, do którego się odwołujemy, znajduje się w `/etc/network/interfaces`. Odpowiedni plik na Twoim serwerze może znajdować się w innym miejscu, w zależności od systemu operacyjnego. Zawartość pliku może być również inna. W przypadku trudności zapoznaj się z oficjalną dokumentacją swojej dystrybucji.

### Dodanie bloku IP do sieci vRack

> [!warning]
>
> Po dodaniu bloku IP do sieci vRack nie jest on już przypisany do fizycznego serwera.
>
> Ta konfiguracja umożliwia skonfigurowanie adresów IP z tego samego bloku na wielu serwerach, pod warunkiem, że wszystkie te serwery znajdują się w tej samej sieci vRack co blok IP. Blok IP musi mieć co najmniej 2 lub więcej użytecznych adresów IP, aby było to możliwe.
>

W [Panelu klienta OVHcloud](/links/manager) przejdź do sekcji `Sieć`{.action}. Następnie otwórz menu `vRack`{.action}.

Wybierz swój vRack z listy, aby wyświetlić listę kwalifikujących się usług. Kliknij blok IP, który chcesz dodać do sieci vRack, a następnie kliknij przycisk `Dodaj`{.action}.

![vrack](images/addIPblock.png){.thumbnail}

### Zarządzanie publiczną przepustowością IP w sieci vRack

Domyślnie bloki Additional IP kierowane przez sieć vRack korzystają ze standardowej publicznej przepustowości 5 Gbps w Europie/Kanadzie/USA i 100 Mbps w regionach APAC. Szczegółowe informacje o dostępności można znaleźć w opcjach routingu publicznego na naszej [stronie produktu vRack](/links/network/vrack).

Wraz ze wzrostem wymagań infrastrukturalnych użytkownicy mogą potrzebować większej przepustowości do obsługi publicznych usług o dużym natężeniu ruchu, dla których OVHcloud oferuje płatne opcje przepustowości. Należy pamiętać, że opcje przepustowości są stosowane **per vRack i per region**. Ponieważ adresy Additional IP są powiązane z regionem, każda modyfikacja przepustowości wpłynie na wszystkie adresy IP (zarówno IPv4, jak i IPv6) kierowane do konkretnego vRack w tym określonym regionie.

/// details | Podczas procesu zamawiania Additional IP

#### Wybór publicznej przepustowości podczas zamówienia Additional IP

Domyślną publiczną przepustowość można zmienić podczas zamawiania nowego bloku Additional IP z siecią vRack jako backendem.

Aby zamówić nowy blok Additional IP:

- Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
- Otwórz sekcję `Sieć`{.action} na lewym pasku bocznym.
- Wybierz `Publiczne adresy IP`{.action}.
- Kliknij przycisk `Zamów IP`{.action} w pobliżu górnej części strony.
- Wybierz wersję IP, a następnie vRack, do którego chcesz przypisać swój Additional IP.
- Wybierz region, w którym ma znajdować się Twój Additional IP.
- Wybierz publiczną przepustowość, którą chcesz zastosować do swojego vRack dla tego konkretnego regionu.
- Wypełnij pozostałe opcje według potrzeb, a następnie złóż zamówienie.

///

/// details | Ze strony zarządzania vRack

#### Modyfikacja publicznej przepustowości vRack na stronie zarządzania

W przypadku bloków Additional IP już przypisanych do sieci vRack przepustowością można zarządzać bezpośrednio na stronie konfiguracji usługi.

Aby uzyskać dostęp do interfejsu zarządzania:

- Otwórz `Sieć`{.action} na lewym pasku bocznym Panelu klienta.
- Wybierz `Prywatna sieć vRack`{.action}.
- W kolumnie "Public IP & bandwidth" kliknij przycisk `Zarządzaj`{.action} dla odpowiedniego vRack.

Strona zarządzania jest podzielona na dwie zakładki:
- **All attached services**: Na razie przekierowuje do klasycznej strony zarządzania vRack. Wkrótce będzie wyświetlać wszystkie produkty (Serwery, Projekty Cloud itp.) aktualnie powiązane z vRack w nowy sposób.
- **Publiczny routing IP**: Zarządza opcjami publicznego routingu IP Twojego vRack, w tym publiczną przepustowością.

Aby zmodyfikować publiczną przepustowość:

- Przejdź do zakładki `Publiczny routing IP`{.action}.
- Interfejs wyświetla indywidualne okna zarządzania dla każdego regionu (np. `eu-west-par`) powiązanego z vRack, zawierające listę wszystkich adresów IP przypisanych do tego konkretnego regionu.
- W oknie dla odpowiedniego regionu kliknij przycisk `Zmień przepustowość`{.action}.
- Wybierz żądaną opcję przepustowości w panelu, który pojawi się po prawej stronie, a następnie kliknij `Przejdź do zamówienia`{.action}, aby zatwierdzić zamówienie.
- Po dokonaniu płatności wybrana przepustowość powinna być dostępna dla Twojego vRack w wybranym regionie po kilku minutach.

> [!primary]
>
> Opłaty za pierwszy miesiąc są naliczane proporcjonalnie do liczby pozostałych dni, a pełna stawka obowiązuje od następnego cyklu rozliczeniowego.
>

Wybrany upgrade przepustowości zostanie zastosowany do wszystkich adresów IP w tym regionie dla wybranego vRack.

///

### Konfiguracja użytecznego adresu IP

W sieci vRack pierwszy, przedostatni i ostatni adres w dowolnym bloku IP są zawsze zarezerwowane odpowiednio dla adresu sieci, bramki sieciowej i rozgłoszenia sieciowego. Oznacza to, że pierwszy użyteczny adres to drugi adres w bloku, jak pokazano poniżej:

```sh
46.105.135.96   # Zarezerwowany: Adres sieci
46.105.135.97   # Pierwszy użyteczny adres IP
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
46.105.135.109  # Ostatni użyteczny adres IP
46.105.135.110  # Zarezerwowany: Bramka sieciowa
46.105.135.111  # Zarezerwowany: Rozgłoszenie sieciowe
```

Aby skonfigurować pierwszy użyteczny adres IP, należy edytować plik konfiguracji sieci, jak pokazano poniżej. W tym przykładzie musimy użyć maski podsieci *255.255.255.240*.

> [!primary]
>
> Maska podsieci użyta w naszym przykładzie jest odpowiednia dla naszego bloku IP. Twoja maska podsieci może się różnić w zależności od rozmiaru bloku. Po zakupie bloku IP otrzymasz e-mail z informacją, której maski podsieci należy użyć.
>

### Debian/Ubuntu

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```
### Tworzenie nowej tabeli routingu IP

Najpierw musimy pobrać i zainstalować iproute2, czyli pakiet, który umożliwi nam ręczną konfigurację routingu IP na serwerze.

Nawiąż połączenie SSH z serwerem i uruchom następujące polecenie z wiersza poleceń. Spowoduje to pobranie i zainstalowanie iproute2.

```sh
# apt-get install iproute2
```

Następnie musimy utworzyć nową trasę IP dla sieci vRack. Dodamy nową regułę ruchu, modyfikując plik w następujący sposób:

```sh
/etc/iproute2/rt_tables

#
# zarezerwowane wartości
#
255	local
254	main
253	default
0	unspec
#
# lokalne
#
#1	inr.ruhep
1 vrack
```

### Modyfikacja pliku konfiguracji sieci

> [!primary]
>
> Dla celów przykładowych plik konfiguracji sieci, do którego się odwołujemy, znajduje się w /etc/network/interfaces. Odpowiedni plik na Twoim serwerze może znajdować się w innym miejscu, w zależności od systemu operacyjnego.
>

Na koniec musimy zmodyfikować plik konfiguracji sieci, aby uwzględnić nową regułę ruchu i skierować ruch vRack przez adres bramki sieciowej **46.105.135.110**.

```sh
/etc/network/interfaces

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

Teraz uruchom ponownie serwer, aby zastosować zmiany, lub alternatywnie włącz po prostu nowy interfejs sieciowy:

```sh
ip link set eth1 up
```

### CentOS 6/7

#### Tworzenie pliku dla dodatkowego interfejsu sieciowego

Najpierw możemy skopiować i użyć konfiguracji stosowanej dla głównego interfejsu sieciowego i dostosować ją do naszych potrzeb:

```sh
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
```
Następnie otwieramy nowy plik:

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
```
I definiujemy ustawienia IP:
```sh
# Automatycznie utworzone przez cloud-init podczas uruchamiania instancji, nie edytować.
#
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.240
IPADDR=46.105.135.97
ARP=yes
```

### Tworzenie nowej tabeli routingu IP

Następnie musimy utworzyć nową trasę IP dla sieci vRack. Dodamy nową regułę ruchu, modyfikując plik w następujący sposób:

```sh
/etc/iproute2/rt_tables

#
# zarezerwowane wartości
#
255	local
254	main
253	default
0	unspec
#
# lokalne
#
#1	inr.ruhep
1 vrack
```

Następnie utwórz plik potrzebny do zastosowania nowych reguł:
```sh
nano /etc/sysconfig/network-scripts/rule-eth1
```

I wklej następującą zawartość (pamiętaj, aby zastąpić nasze zmienne własnymi wartościami):

```sh
from 46.105.135.96/28 table vrack
to 46.105.135.96/28 table vrack
```

### Modyfikacja pliku konfiguracji sieci

Na koniec musimy zmodyfikować plik konfiguracji sieci, aby uwzględnić nową regułę ruchu i skierować ruch vRack przez adres bramki sieciowej **46.105.135.110**.

Możemy to osiągnąć, edytując następujący plik w celu dodania trwałych i statycznych tras:

```sh
nano /etc/sysconfig/network-scripts/route-eth1
```

Wklej następującą zawartość (pamiętaj, aby zastąpić nasze zmienne własnymi wartościami):

```sh
46.105.135.96/28 dev eth1 table vrack
default via 46.105.135.110 dev eth1 table vrack
```

Teraz uruchom ponownie serwer, aby zastosować zmiany, lub alternatywnie włącz po prostu nowy interfejs sieciowy:

```sh
ip link set eth1 up
```

### Windows Server 2012/2016

#### Krok 1: Sprawdzenie i konfiguracja dodatkowego interfejsu sieciowego

Najpierw musimy uzyskać dostęp do informacji o nowym interfejsie sieciowym:

![sprawdzenie drugiego interfejsu sieciowego](images/win-ip-vrack-1.png){.thumbnail}

Następnie musimy sprawdzić właściwości:

![właściwości drugiego interfejsu sieciowego](images/win-ip-vrack-2.png){.thumbnail}

![właściwości drugiego interfejsu sieciowego](images/win-ip-vrack-3.png){.thumbnail}

#### Krok 2: Konfiguracja IP

Musimy wybrać opcję ```Use the following IP address```:

![konfiguracja ip](images/win-ip-vrack-4.png){.thumbnail}

I możemy w końcu zdefiniować informacje o adresie IP:

![konfiguracja ip](images/win-ip-vrack-5b.png){.thumbnail}

#### Krok 3: Ponowne uruchomienie interfejsu sieciowego

Najpierw wykonujemy proces wyłączania:

![wyłączanie sieci](images/win-ip-vrack-6.png){.thumbnail}

Następnie wykonujemy proces włączania:

![włączanie sieci](images/win-ip-vrack-7.png){.thumbnail}

### Rozwiązywanie problemów

Jeśli nie możesz nawiązać połączenia z maszyny wirtualnej lub serwera z siecią prywatną, wyślij nam ticket z Panelu klienta z następującymi informacjami:

- Źródłowy adres IP i docelowy adres IP
- Ifconfig -a lub ipconfig /all z obu serwerów lub maszyn wirtualnych (konfiguracja interfejsu sieciowego)
- Ping w obu kierunkach
- Arp -a
- Tabela routingu

Dołącz wyniki powyższych poleceń do swojego ticketu.

## Sprawdź również

[Konfiguracja sieci vRack na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Tworzenie wielu sieci VLAN w ramach vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Konfiguracja sieci vRack między usługą Public Cloud a serwerem dedykowanym](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Dołącz do [grona naszych użytkowników](/links/community).
