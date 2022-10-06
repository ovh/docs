---
title: 'Tryb bridge IP'
slug: network-bridging
excerpt: 'Dowiedz się, jak używać trybu bridge do konfiguracji dostępu do Internetu Twoich wirtualnych maszyn'
section: 'Sieć & IP'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 06-10-2022**

> [!primary]
>
> Od 6 października 2022 nasze rozwiązanie "Failover IP" nazywa się teraz [Additional IP](https://www.ovhcloud.com/pl/network/additional-ip/). Nie ma to żadnego wpływu na funkcje ani na działanie usług.
>

## Wprowadzenie

Do konfiguracji wirtualnych maszyn możesz użyć konfiguracji sieci w trybie bridge. Aby konfiguracja działała w naszej sieci, konieczne jest wprowadzenie kilku zmian.

**Niniejszy przewodnik wyjaśnia, jak używać trybu bridge do konfiguracji dostępu do Internetu dla wirtualnych maszyn.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie serwera dedykowanego z zainstalowanym hypervisorem ([VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox)
- Posiadanie co najmniej jednego adresu [Additional IP](https://www.ovhcloud.com/pl/bare-metal/ip/) podłączonego do serwera
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).
>

## W praktyce

Podstawowe etapy są zawsze takie same, niezależnie od stosowanych systemów:
- utworzenie wirtualnego adresu MAC dla IP migracji;
- ustawienie adresu MAC wirtualnej maszyny (VM) na tym nowym adresie;
- skonfigurować adres IP, maskę sieciową, bramę i drogę do bramy wewnątrz maszyny wirtualnej.

Dla tego przykładu użyjemy następujących wartości w naszych przykładach kodu. Nazwy te muszą zostać zastąpione własnymi wartościami:

- "SERVER_IP": główny adres IP serwera;
- "ADDITIONAL_IP": adres Additional IP;
- "GATEWAY_IP": domyślny adres bramy.

### Przypisz wirtualny adres MAC

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij menu `Bare Metal Cloud`{.action}, a następnie wybierz sekcję `IP`{.action}.

W rozwijanym menu “Service” możesz wybrać tylko adresy Additional IP.

![manage IPs](images/manageIPs.png){.thumbnail}

Kliknij `...`{.action}, a następnie `Dodaj wirtualny adres MAC`{.action}.

![Dodaj wirtualny adres MAC (1)](images/virtual_mac_02_2020.png){.thumbnail}

Wybierz "ovh" z rozwijanej listy "Typ", wpisz nazwę w polu "Nazwa wirtualnej maszyny", a następnie kliknij `Zatwierdź`{.action}.

![Dodaj wirtualny adres MAC (2)](images/addvmac2.png){.thumbnail}

### Określ adres bramy

Aby skonfigurować wirtualne maszyny umożliwiające dostęp do Internetu, musisz znać bramę maszyny hosta, czyli serwera dedykowanego. Adres bramy składa się z pierwszych trzech bajtów głównego adresu IP Twojego serwera. Ostatni bajt to 254. Na przykład, jeśli głównym adresem IP Twojego serwera jest:

- 169.254.10.020

Adres bramy:

- 169.254.10.254

### Przygotowanie hosta

> [!primary]
>
W przypadku wszystkich systemów operacyjnych i dystrybucji skonfiguruj wirtualną maszynę za pomocą wirtualnego adresu MAC utworzonego w  [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
>

#### Proxmox

Po utworzeniu wirtualnej maszyny i jej zakończeniu:

 1. Wybierz wirtualną maszynę;
 2. Otwórz sekcję "Sprzęt";
 3. Wybierz `Urządzenie sieciowe`{.action};
 4. Kliknij przycisk `Zmień`{.action}.

![przekierować do urządzenia sieciowego](images/proxmox_01.png){.thumbnail}

Następnie dodaj adres MAC, który wcześniej utworzyłeś.

![otworzyć urządzenie sieciowe](images/proxmox_02.png){.thumbnail}


Teraz możesz uruchomić wirtualną maszynę i przejść do kolejnych etapów, w zależności od wybranego systemu operacyjnego.

#### VMware ESXi

Po utworzeniu wirtualnej maszyny i po jej wyłączeniu kliknij prawym przyciskiem myszy i kliknij `Zmień parametry`{.action}.

![Menu kontekstowe VM](images/vmware_01.png){.thumbnail}

Przełącz `Netwok Adapter 1`{.action} i zmień wartość z rozwijanego menu `Adres MAC`{.action} w trybie "Manual" i wprowadź wcześniej utworzony adres MAC VMware.

![Zmień parametry](images/vmware_02.png){.thumbnail}

Możesz teraz uruchomić wirtualną maszynę i przejść do kolejnych etapów, w zależności od systemu operacyjnego.

### Konfiguracja wirtualnych maszyn

#### Debian

Zaloguj się do interfejsu systemu (lub *shell*) Twojej wirtualnej maszyny. Po zalogowaniu otwórz plik konfiguracyjny sieci wirtualnej maszyny znajdujący się w `/etc/network/interfaces`.
Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację. Pamiętaj, aby zastąpić nasze zmienne własnymi wartościami:

- Poprzednie dystrybucje:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up route add GATEWAY_IP dev eth0
    post-up route add default gw GATEWAY_IP
    pre-down route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

- Najnowsze dystrybucje:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up ip route add GATEWAY_IP dev eth0
    post-up ip route add default via GATEWAY_IP
    pre-down ip route del GATEWAY_IP dev eth0
    pre-down ip route del default via GATEWAY_IP
```

Zastąp również `eth0`, jeśli system używa przewidywanych nazw interfejsów sieciowych. Nazwy interfejsów sieciowych znajdziesz za pomocą polecenia:

```bash
ls /sys/class/net
```

Zapisz i zamknij plik, a następnie uruchom ponownie wirtualną maszynę.

#### Systemy operacyjne Red Hat oparte na Red Hat (CentOS 6, Scientific Linux, ClearOS, itp.)

Otwórz terminal na swojej wirtualnej maszynie. Po zalogowaniu otwórz plik konfiguracyjny sieci wirtualnej maszyny. Znajduje się on w `/etc/network/interfaces`. Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację. Pamiętaj, aby zastąpić nasze zmienne własnymi wartościami:

```console
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Teraz zapisz i zamknij plik.

Następnie otwórz plik routingu maszyny wirtualnej. Znajduje się on w `/etc/sysconfig/network-scripts/route-eth`. Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację. Pamiętaj, aby zastąpić nasze zmienne własnymi wartościami:

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Zapisz i zamknij plik, a następnie uruchom ponownie wirtualną maszynę.

#### CentOS 7

> [!primary]
> 
> Nazwa karty sieciowej CentOS 7 różni się w zależności od opcji instalacji. Aby skonfigurować wirtualną maszynę, sprawdź nazwę adaptera i użyj jej. Nazwy interfejsów sieciowych można znaleźć za pomocą polecenia `ls /sys/class/net`.
> 

Otwórz terminal na swojej wirtualnej maszynie. Po zalogowaniu otwórz plik konfiguracyjny sieci wirtualnej maszyny, który znajduje się w `/etc/sysconfig/network-scripts/ifcfg-(nazwa interfejsu)`. Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację. Pamiętaj, aby zastąpić nasze zmienne własnymi wartościami:

```console
DEVICE=(interface-name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Zapisz i zamknij plik.

Następnie otwórz plik routingu wirtualnej maszyny, który znajduje się w `/etc/sysconfig/network-scripts/route-(nazwa interfejsu)`. Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację. Pamiętaj, aby zastąpić nasze zmienne własnymi wartościami:

```console
GATEWAY_IP - 169.254.10.254 (nazwa interfejsu)
NETWORK_GW_VM - 255.255.255.0 (wpisz nazwę interfejsu)
default GATEWAY_IP
```

Zapisz i zamknij plik.

Następnie otwórz plik routingu maszyny wirtualnej. Znajduje się on w `/etc/sysconfig/network/resolv.conf`.

```console
nameserver 213.186.33.99
```

Po zarejestrowaniu i zamknięciu pliku uruchom ponownie sieć lub wirtualną maszynę.

#### FreeBSD

Otwórz terminal na swojej wirtualnej maszynie. Po zalogowaniu otwórz plik konfiguracyjny sieci wirtualnej maszyny znajdujący się w katalogu `/etc/rc.conf`. Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację. W tym przykładzie nazwa interfejsu to "em0". W razie potrzeby możesz go zmienić.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Zapisz i zamknij plik. Następnie edytuj plik `/etc/resolv.conf`. Utwórz je, jeśli potrzebujesz.

```console
nameserver 213.186.33.99
```

Zapisz i zamknij plik, a następnie uruchom ponownie wirtualną maszynę.

#### Ubuntu 18.04

Po pierwsze, połącz się przez SSH ze swoją wirtualną maszyną i otwórz plik konfiguracyjny sieci znajdujący się w `/etc/netplan/` za pomocą polecenia. Nasz plik nazywa się "50-cloud-init.yaml".

```bash
# nano /etc/netplan/50-cloud-init.yaml
```

Po otworzeniu pliku zmień go o następujący kod:

```yaml
network:
    ethernets:
        (nom-interface) :
            addresses:
                - ADDITIONAL_IP/32
            nameservers:
                addresses:
                    - 213.186.33.99
                search: []
            optional: true
            routes:
                - to: 0.0.0.0/0
                  via : GATEWAY_IP
                  on-link: true
    Version : 2
```

Po przeprowadzeniu modyfikacji, zapisz i zamknij plik, a następnie wprowadź następującą komendę:

```bash
# netplan try
Warning: Stopping systemd-networkd.service, but it can still be activated by:
  systemd-networkd.socket
Do you want to keep these settings?

Press ENTER before the timeout to accept the new configuration

Changes will revert in 120 seconds
Configuration accepted.
```

#### Windows Server 2012/Hyper-V

Zanim skonfigurujesz wirtualną maszynę, utworzysz wirtualny przełącznik.

Z wiersza poleceń Twojego serwera dedykowanego wprowadź `IPconfig / ALL`{.action} i zapisz nazwę karty sieciowej zawierającej główny adres IP serwera.

W panelu konfiguracyjnym Hyper-V utwórz nowy wirtualny przełącznik i zdefiniuj rodzaj połączenia na `External`{.action}.

Wybierz adapter z adresem IP serwera, a następnie zaznacz `Zezwól systemowi operacyjnemu na współdzielenie tej karty sieciowej`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>Ten etap jest wymagany tylko raz dla serwera Hyper-V. W przypadku wszystkich wirtualnych maszyn konieczne jest zastosowanie przełącznika wirtualnego, aby połączyć wirtualne karty sieciowe wirtualnej maszyny z fizyczną mapą serwera.
> 

Następnie wybierz maszynę wirtualną, do której chcesz dodać Additional IP. Użyj panelu konfiguracyjnego Hyper-V, aby zmienić parametry wirtualnej maszyny i zamknij go.

Następnie uruchom mapę sieci i kliknij `Advanced Features`{.action}, zdefiniuj adres MAC w `Static`{.action} i wprowadź wirtualny adres MAC dla adresu Additional IP. Po wprowadzeniu tych parametrów kliknij `OK`{.action}, aby wprowadzić zmiany.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Następnie uruchom wirtualną maszynę i zaloguj się jako administrator, następnie przejdź do `Control Panel`{.action} i `Network and Sharing Center`{.action}. Kliknij link `Connections: Ethernet`{.action}, następnie kliknij przycisk `Properties`{.action}, aby wyświetlić właściwości Ethernet.

Wybierz protokół `internetowy Wersja 4 (TCP/IPv4)`{.action}, a następnie kliknij przycisk `Properties`{.action}, aby wyświetlić właściwości IPv4.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

W oknie właściwości IPv4 wybierz Use the `following IP address`{.action}. Wprowadź adres Additional IP w polu adresów IP i wprowadź "255.255.255.255" w maskach podsieci.

Następnie wprowadź adres IP bramy Twojego serwera w bramie domyślnej (na przykład adres IP Twojego serwera kończący się 254) i wprowadź "213.186.33.99" w polu `Preferred DNS Server`{.action}.

Kliknij `OK`{.action} i zignoruj komunikat ostrzegawczy dotyczący adresu IP bramy i przypisanego adresu IP, które nie znajdują się w tej samej podsieci.

Na koniec zrestartuj serwer. Wirtualna maszyna musi być podłączona do Internetu za pomocą adresu Additional IP.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

#### Rozwiązywanie problemów

Jeśli nie udaje Ci się nawiązać połączenia między wirtualną maszyną a siecią publiczną i podejrzewasz problem z siecią, zrestartuj serwer w trybie Rescue i skonfiguruj interfejs sieciowy bezpośrednio na hoście.

Po zrestartowaniu serwera w trybie Rescue wprowadź następujące polecenia:

```bash
ip link add name test-bridge link eth0 typ macvlan
ip link set dev test-bridge address MAC_ADDRESS
ip link set test-bridge up
ip addr add ADDITIONAL_IP/32 dev test-bridge
```

Zastąp "MAC_ADDRESS" wirtualnym adresem MAC wygenerowanym w panelu konfiguracyjnym oraz "ADDITIONAL_IP" rzeczywistym Additional IP.

Następnie wykonaj ping na Additional IP z zewnątrz. Jeśli to działa, prawdopodobnie oznacza to, że na maszynie wirtualnej lub hoście wystąpi błąd konfiguracji, który uniemożliwia działanie adresu Additional IP w trybie normalnym. Jeśli zamiast tego IP nadal nie działa, otwórz zgłoszenie do zespołu pomocy w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w celu przeprowadzenia dodatkowego badania.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
