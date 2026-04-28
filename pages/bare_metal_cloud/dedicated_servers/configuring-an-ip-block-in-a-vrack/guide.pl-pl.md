---
title: "Konfiguracja bloku IP w sieci vRack na serwerze dedykowanym"
excerpt: "Skonfiguruj publiczny blok adresów IP do użytku z prywatną siecią OVHcloud vRack na serwerach dedykowanych."
updated: 2026-04-03
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

<!-- CP-NAV-START:network-vrack -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [vRack](/links/control-panel/network-vrack)
- **Ścieżka nawigacji:** `Network`{.action} > `Prywatna sieć vRack`{.action}

---
<!-- CP-NAV-END:network-vrack -->

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

Wybierz swój vRack z listy, aby wyświetlić listę kwalifikujących się usług. Kliknij blok IP, który chcesz dodać do sieci vRack, a następnie kliknij przycisk `Dodaj`{.action}.

![Dodanie bloku IP do sieci vRack](images/addIPblock.png){.thumbnail}

### Zarządzanie publiczną przepustowością IP w sieci vRack

Domyślnie bloki Additional IP kierowane przez sieć vRack korzystają ze standardowej publicznej przepustowości 5 Gbps w Europie/Kanadzie/USA i 100 Mbps w regionach APAC. Szczegółowe informacje o dostępności można znaleźć w opcjach routingu publicznego na naszej [stronie produktu vRack](/links/network/vrack).

Wraz ze wzrostem wymagań infrastrukturalnych użytkownicy mogą potrzebować większej przepustowości do obsługi publicznych usług o dużym natężeniu ruchu, dla których OVHcloud oferuje płatne opcje przepustowości. Należy pamiętać, że opcje przepustowości są stosowane **per vRack i per region**. Ponieważ adresy Additional IP są powiązane z regionem, każda modyfikacja przepustowości wpłynie na wszystkie adresy IP (zarówno IPv4, jak i IPv6) kierowane do konkretnego vRack w tym określonym regionie.

/// details | Podczas procesu zamawiania Additional IP

#### Wybór publicznej przepustowości podczas zamówienia Additional IP

Domyślną publiczną przepustowość można zmienić podczas zamawiania nowego bloku Additional IP z siecią vRack jako backendem.

Aby zamówić nowy blok Additional IP:

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

### Pobieranie pakietu `iproute2`

Przed rozpoczęciem pobierz i zainstaluj **iproute2** — pakiet umożliwiający ręczną konfigurację routingu IP. Pakiet ten może być już dostępny na Twoim serwerze — jeśli tak, przejdź do następnego kroku.

Nawiąż połączenie SSH z serwerem i uruchom następujące polecenie, aby pobrać i zainstalować iproute2:

```sh
sudo apt-get install iproute2
```

**Fedora**

```sh
sudo dnf install iproute
```

#### Konfiguracje GNU/Linux

> [!tabs]
> **Debian 11**
>>
>> **Konfiguracja Additional IP**
>>
>> Otwórz plik konfiguracji sieci znajdujący się w `/etc/network/interfaces.d` za pomocą wybranego edytora tekstu. Tutaj plik nazywa się `50-cloud-init`.
>>
>> ```sh
>> /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> ```
>>
>> **Tworzenie nowej tabeli routingu IP**
>>
>> Następnie utwórz nową trasę IP dla sieci vRack. Dodaj nową regułę ruchu, modyfikując plik w następujący sposób:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> **Modyfikacja pliku konfiguracji sieci**
>>
>> > [!primary]
>> >
>> > Dla celów przykładowych plik konfiguracji sieci, do którego się odwołujemy, znajduje się w /etc/network/interfaces. Odpowiedni plik na Twoim serwerze może znajdować się w innym miejscu, w zależności od systemu operacyjnego.
>> >
>>
>> Na koniec zmodyfikuj plik konfiguracji sieci, aby uwzględnić nową regułę ruchu i skierować ruch vRack przez adres bramki sieciowej **46.105.135.110**.
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> post-up ip route add 46.105.135.96/28 dev eth1 table vrack
>> post-up ip route add default via 46.105.135.110 dev eth1 table vrack
>> post-up ip rule add from 46.105.135.96/28 table vrack
>> post-up ip rule add to 46.105.135.96/28 table vrack
>> ```
>>
>> Uruchom ponownie serwer, aby zastosować zmiany, lub włącz po prostu nowy interfejs sieciowy:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **CentOS, AlmaLinux i Rocky Linux (8/9)**
>>
>> **Tworzenie pliku dla dodatkowego interfejsu sieciowego**
>>
>> Skopiuj konfigurację głównego interfejsu sieciowego i dostosuj ją do swoich potrzeb:
>>
>> ```sh
>> sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Następnie otwórz nowy plik:
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> - Zdefiniuj ustawienia IP:
>>
>> ```sh
>> # Created by cloud-init on instance boot automatically, do not edit.
>> #
>> DEVICE=eth1
>> BOOTPROTO=static
>> ONBOOT=yes
>> USERCTL=no
>> IPV6INIT=no
>> PEERDNS=yes
>> TYPE=Ethernet
>> NETMASK=255.255.255.240
>> IPADDR=46.105.135.97
>> ARP=yes
>> ```
>>
>> **Tworzenie nowej tabeli routingu IP**
>>
>> Następnie utwórz nową trasę IP dla sieci vRack. Dodaj nową regułę ruchu, modyfikując plik w następujący sposób:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> Następnie utwórz plik potrzebny do zastosowania nowych reguł:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/rule-eth1
>> ```
>>
>> Wklej następującą zawartość (pamiętaj, aby zastąpić zmienne własnymi wartościami):
>>
>> ```sh
>> from 46.105.135.96/28 table vrack
>> to 46.105.135.96/28 table vrack
>> ```
>>
>> **Modyfikacja pliku konfiguracji sieci**
>>
>> Na koniec zmodyfikuj plik konfiguracji sieci, aby uwzględnić nową regułę ruchu i skierować ruch vRack przez adres bramki sieciowej **46.105.135.110**.
>>
>> Edytuj następujący plik, aby dodać trwałe i statyczne trasy:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/route-eth1
>> ```
>>
>> Wklej następującą zawartość (pamiętaj, aby zastąpić zmienne własnymi wartościami):
>>
>> ```sh
>> 46.105.135.96/28 dev eth1 table vrack
>> default via 46.105.135.110 dev eth1 table vrack
>> ```
>>
>> Uruchom ponownie serwer, aby zastosować zmiany, lub włącz po prostu nowy interfejs sieciowy:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **Ubuntu i Debian 12+**
>>
>> - Konfiguracja Additional IP
>>
>> Otwórz plik konfiguracji sieci znajdujący się w `/etc/netplan` za pomocą wybranego edytora tekstu. Tutaj plik nazywa się `50-cloud-init.yaml`.
>>
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> - Zdefiniuj ustawienia IP za pomocą następujących zmiennych:
>>
>> ```sh
>> NETWORK_INTERFACE:
>> dhcp4: false
>> addresses:
>> - ADDITIONAL_IP/PREFIX
>> routes:
>> - to: NETWORK_IP/PREFIX
>>   via: GATEWAY_IP
>> ```
>>
>> **Przykład**
>>
>> ```sh
>> eno2:
>> dhcp4: false
>> addresses:
>> - 46.105.135.97/28
>> routes:
>> - to: 46.105.135.96/28
>>   via: 46.105.135.110
>> ```
>>
>> Zastosuj konfigurację za pomocą następującego polecenia:
>>
>> ```bash
>> sudo netplan apply
>> ```
>> 
> **Fedora, AlmaLinux i Rocky Linux (10)**
>>
>> Najpierw sprawdź, czy interfejs vRack ma status `connected` lub `connecting`. W naszym przykładzie interfejs nazywa się `eno2`.
>>
>> ```sh
>> nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet   connecting (getting IP configuration)               vRack
>> ```
>>
>> Następnie pobierz nazwę pliku konfiguracyjnego znajdującego się w `/etc/NetworkManager/system-connections`. Tutaj plik nazywa się `vRack.nmconnection`.
>>
>> ```sh
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> cloud-init-eno1.nmconnection vRack.nmconnection
>> ```
>>
>> Skonfiguruj Additional IP za pomocą handlera `nmcli`. Zastąp `vRack` i inne parametry własnymi wartościami.
>>
>> - Dodaj IP
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.address 46.105.135.96/28
>> ```
>>
>> - Dodaj bramkę
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.gateway 46.105.135.110
>> ```
>>
>> - Zmień konfigurację z **auto** na **manual**:
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.method manual
>> ```
>>
>> - Ustaw konfigurację jako trwałą
>>
>> ```sh
>> sudo nmcli con mod 'vRack' connection.autoconnect true
>> ```
>>
>> **Tworzenie nowej tabeli routingu IP**
>>
>> Następnie utwórz nową trasę IP dla sieci vRack. Dodaj nową regułę ruchu (`1 vrack`), modyfikując plik w następujący sposób:
>>
>>
>> ```sh
>> sudo nano /usr/share/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> - Dodaj trasę
>>
>> ```sh
>> sudo ip route add <network_ip>/<prefix> via <gateway> dev <interface>
>> ```
>>
>> W naszym przykładzie
>>
>> ```sh
>> sudo ip route add 46.105.135.96/28 via 46.105.135.110 dev eno2
>> ```
>>
>> Uruchom ponownie sieć za pomocą następującego polecenia:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>


### Windows Server

#### Krok 1: Sprawdzenie i konfiguracja dodatkowego interfejsu sieciowego

Sprawdź informacje o nowym interfejsie sieciowym:

![sprawdzenie dodatkowego interfejsu sieciowego](images/win-ip-vrack-1.png){.thumbnail}

Sprawdź następnie właściwości:

![właściwości dodatkowego interfejsu sieciowego](images/win-ip-vrack-2.png){.thumbnail}

![właściwości dodatkowego interfejsu sieciowego](images/win-ip-vrack-3.png){.thumbnail}

#### Krok 2: Konfiguracja IP

Wybierz opcję `Use the following IP address`{.action}:

![Wybór opcji Użyj następującego adresu IP](images/win-ip-vrack-4.png){.thumbnail}

Zdefiniuj informacje o adresie IP:

![Pola adresu IP i maski podsieci wypełnione dla vRack](images/win-ip-vrack-5b.png){.thumbnail}

#### Krok 3: Ponowne uruchomienie interfejsu sieciowego

Najpierw wyłącz interfejs.

![wyłączanie sieci](images/win-ip-vrack-6.png){.thumbnail}

Następnie włącz go ponownie.

![włączanie sieci](images/win-ip-vrack-7.png){.thumbnail}

### Rozwiązywanie problemów

Jeśli nie możesz nawiązać połączenia z maszyny wirtualnej lub serwera z siecią prywatną, utwórz zgłoszenie w Panelu klienta, podając następujące informacje:

- Źródłowy adres IP i docelowy adres IP
- Wynik polecenia `ifconfig -a` lub `ipconfig /all` z obu serwerów lub maszyn wirtualnych (konfiguracja interfejsu sieciowego)
- Ping w obu kierunkach
- Wynik polecenia `arp -a`
- Tabela routingu

Dołącz powyższe wyniki do swojego zgłoszenia.

## Sprawdź również

[Konfiguracja sieci vRack na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Tworzenie wielu sieci VLAN w ramach vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Konfiguracja sieci vRack między usługą Public Cloud a serwerem dedykowanym](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

- [Jak zmienić strefę ogłaszania bloku IP w vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_change_zone_announce)
Dołącz do [grona naszych użytkowników](/links/community).
