---
title: 'Tryb bridge IP'
excerpt: 'Dowiedz się, jak używać trybu bridge do konfiguracji dostępu do Internetu Twoich wirtualnych maszyn'
updated: 2024-10-10
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

> [!primary]
>
> Od 6 października 2022 nasze rozwiązanie "Failover IP" nazywa się teraz [Additional IP](/links/network/additional-ip). To nie ma wpływu na jego funkcje.
>

## Wprowadzenie

Do konfiguracji wirtualnych maszyn możesz użyć konfiguracji sieci w trybie bridge. Aby konfiguracja działała w naszej sieci, konieczne jest wprowadzenie kilku zmian.

**Niniejszy przewodnik wyjaśnia, jak używać trybu bridge do konfiguracji dostępu do Internetu dla wirtualnych maszyn.**

## Wymagania początkowe

- Posiadanie serwera dedykowanego z zainstalowanym hypervisorem ([VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox)
- Posiadanie co najmniej jednego adresu [Additional IP](/links/network/additional-ip) podłączonego do serwera
- Dostęp do [Panelu klienta OVHcloud](/links/manager) lub do [API OVHcloud](/pages/manage_and_operate/api/first-steps)

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).
>
> Niniejszy przewodnik nie ma zastosowania do serwerów z oferty [Scale](https://www.ovhcloud.com/pl/bare-metal/scale/) i [High Grade](https://www.ovhcloud.com/pl/bare-metal/high-grade/). To samo dotyczy serwerów Advance z procesorami AMD Epyc 4K i 8K wprowadzonymi na rynek od lipca 2024.
>
> Zapoznaj się z następującymi przewodnikami: [Konfiguracja sieci na ESXi w ofercie High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/esxi-network-HG-Scale), [Konfiguracja sieci na Proxmox VE w ofercie High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/proxmox-network-HG-Scale) i [Konfiguracja sieci w systemie Windows Server z Hyper-V w ofercie High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/hyperv-network-HG-Scale).

## W praktyce

Podstawowe etapy są zawsze takie same, niezależnie od stosowanych systemów:

- utworzenie wirtualnego adresu MAC dla [Additional IP](/links/network/additional-ip);
- ustawienie adresu MAC wirtualnej maszyny (VM) na tym nowym adresie;
- skonfigurować **adres IP**, **maskę sieciową**, **bramę** i **drogę do bramy** wewnątrz maszyny wirtualnej.

Dla tego przykładu użyjemy następujących wartości w naszych przykładach kodu. Nazwy te muszą zostać zastąpione własnymi wartościami:

- "SERVER_IP": główny adres IP serwera;
- "ADDITIONAL_IP": adres Additional IP;
- "GATEWAY_IP": domyślny adres bramy.

### Przypisz wirtualny adres MAC

> [!warning]
> W przypadku bloku IP, wirtualne adresy MAC są tworzone dla każdego indywidualnego adresu IP w bloku.

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), kliknij menu `Bare Metal Cloud`{.action}, a następnie wybierz sekcję `Network`{.action}. Następnie kliknij przycisk `IP`{.action}.

Kliknij na zakładkę `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Kliknij `...`{.action}, a następnie `Dodaj wirtualny adres MAC`{.action}.

![Dodaj wirtualny adres MAC (1)](images/addvmac.png){.thumbnail}

Wybierz "ovh" z rozwijanej listy "Typ", wpisz nazwę w polu "Nazwa wirtualnej maszyny", a następnie kliknij `Zatwierdź`{.action}.

![Dodaj wirtualny adres MAC (2)](images/addvmac2.png){.thumbnail}

Po kilku sekundach wirtualny adres MAC pojawi się w kolumnie "Wirtualny MAC" w wierszu Additional IP address. Ten wirtualny adres MAC będzie wymagany podczas konfigurowania maszyny wirtualnej na hoście.

### Określ adres bramy (gateway) <a name="determinegateway"></a>

Aby skonfigurować wirtualne maszyny umożliwiające dostęp do Internetu, musisz znać bramę maszyny hosta, czyli serwera dedykowanego.

Adres bramy możesz również pobrać z poziomu [Panelu klienta](#viacontrolpanel) lub [API OVHcloud](#viaapi).

#### W panelu klienta <a name="viacontrolpanel"></a>

Zaloguj się do [Panelu client OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Serwery dedykowane`{.action}.

Adres bramy IPv4 przypisany do Twojego serwera wyświetla się w sekcji `Sieć` w zakładce `Informacje ogólne`{.action}. Po skopiowaniu ustawień kontynuuj konfigurację.

![gateway](images/ipv4_information.png){.thumbnail}

#### Za pośrednictwem API OVHcloud <a name="viaapi"></a>

Na [stronie API OVHcloud](https://eu.api.ovh.com/console/) kliknij na `Login`{.action} w prawym górnym rogu. Na następnej stronie wpisz Twój identyfikator klienta OVHcloud.

Wykonaj następujące wywołanie API, wskazując wewnętrzną nazwę serwera (przykład: `ns3956771.ip-169-254-10.eu`):

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

### Przygotowanie hosta

> [!primary]
>
> W przypadku wszystkich systemów operacyjnych i dystrybucji skonfiguruj wirtualną maszynę za pomocą wirtualnego adresu MAC utworzonego w  [Panelu klienta OVHcloud](/links/manager).
>

#### Proxmox

> [!warning]
>
> Poniższe instrukcje dotyczą utworzonej wcześniej maszyny wirtualnej z zainstalowanym systemem operacyjnym. Jeśli nie posiadasz wirtualnej maszyny, sprawdź opcje na stronie [Qemu/KVM Virtual Machine](https://pve.proxmox.com/wiki/Qemu/KVM_Virtual_Machines){.external} firmy Proxmox.
>

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

> [!warning]
>
> Hypervisor ESXi nie jest już wspierany przez OVHcloud. Więcej informacji na temat [tej strony dedykowanej](/pages/bare_metal_cloud/dedicated_servers/esxi-end-of-support).
>

> [!warning]
>
> Poniższe instrukcje dotyczą utworzonej wcześniej maszyny wirtualnej z zainstalowanym systemem operacyjnym. Jeśli nie posiadasz wirtualnej maszyny, zapoznaj się z przewodnikiem [Tworzenie maszyny wirtualnej w kliencie hosta VMware](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID--F968-4983-A230-.html){.external} na stronie VMware.
>

Po utworzeniu wirtualnej maszyny i po jej wyłączeniu kliknij prawym przyciskiem myszy i kliknij `Zmień parametry`{.action}.

![Menu kontekstowe VM](images/vmware_01.png){.thumbnail}

Przełącz `Network Adapter 1`{.action} i zmień wartość z rozwijanego menu `Adres MAC`{.action} w trybie "Manual" i wprowadź wcześniej utworzony adres MAC VMware.

![Zmień parametry](images/vmware_02.png){.thumbnail}

Możesz teraz uruchomić wirtualną maszynę i przejść do kolejnych etapów, w zależności od systemu operacyjnego.

### Konfiguracja wirtualnych maszyn <a name="configurationsteps"></a>

> [!warning]
>
> Pamiętaj, że poniższe przykłady sugerują, że jesteś zalogowany jako użytkownik z ograniczonymi uprawnieniami, stąd użycie *sudo* przed każdym poleceniem. Jeśli jesteś zalogowany jako *root*, nie musisz tego robić.
>

#### Debian

Domyślnie plik konfiguracji sieci maszyny wirtualnej znajduje się w katalogu `/etc/network/interfaces`.

Po zalogowaniu się do powłoki maszyny wirtualnej wprowadź następującą komendę, aby zidentyfikować interfejs:

```bash
ip a
```

Następnie wykonaj kopię pliku konfiguracyjnego, aby w każdej chwili móc wrócić do poprzedniej wersji:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

W przypadku błędu będziesz mógł wrócić za pomocą poniższych poleceń:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację, zmień `INTERFACE_NAME`, `ADDITIONAL_IP` oraz `GATEWAY_IP` na własne wartości.

```bash
sudo nano /etc/network/interfaces
```

```console
auto lo
iface lo inet loopback

# The primary network interface
auto INTERFACE_NAME
iface INTERFACE_NAME inet static
address ADDITIONAL_IP
netmask 255.255.255.255
gateway GATEWAY_IP
```

**Przykład**

```console
auto lo
iface lo inet loopback

# The primary network interface
auto ens192
iface ens192 inet static
address 192.0.2.1
netmask 255.255.255.255
gateway 203.0.113.254
```

Zapisz i zamknij plik.<br>
Następnie edytuj lub utwórz plik '/etc/resolv.conf`:

```bash
sudo nano /etc/resolv.conf
```

Dodaj następujący wiersz:

```console
nameserver 213.186.33.99
```

Zapisz i zamknij plik.<br>
Przełącz teraz interfejs sieciowy do trybu online. W tym celu wprowadź następujące polecenie (zastąp `ens192` własnymi wartościami):

```bash
sudo ip link set ens192 up
```

Następnie zrestartuj usługę sieciową za pomocą polecenia:

```bash
sudo systemctl restart networking
```

Aby sprawdzić, czy wirtualna maszyna jest w pełni podłączona do Internetu, użyj następującego polecenia:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Jeśli otrzymasz odpowiedź, oznacza to, że adres Additional IP został poprawnie skonfigurowany. Jeśli tak się nie stanie, zrestartuj maszynę wirtualną i ponownie wprowadź polecenie ping.

#### Systemy operacyjne Red Hat oparte na Red Hat (CentOS, Rocky Linux 8/9, Alma Linux 8/9, etc.)

Domyślnie plik konfiguracji sieci maszyny wirtualnej znajduje się w katalogu `/etc/sysconfig/network-scripts/`.

Po zalogowaniu się do powłoki maszyny wirtualnej wprowadź następującą komendę, aby zidentyfikować interfejs:

```bash
ip a
```

Następnie wykonaj kopię pliku konfiguracyjnego, aby w każdej chwili móc wrócić do poprzedniej wersji:

```bash
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

W przypadku błędu będziesz mógł wrócić za pomocą poniższych poleceń:

```bash
sudo rm -f etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0.bak etc/sysconfig/network-scripts/ifcfg-eth0
```

Następnie możesz edytować ten plik za pomocą managera `nmcli`, zastąpić `ADDITIONAL_IP` i `GATEWAY_IP`własnymi wartościami.

Dodaj adres IP:

```bash
sudo nmcli connection modify interface_name IPv4.address ADDITIONAL_IP/32
```

Dodaj Gateway:

```bash
udo nmcli connection modify interface_name IPv4.gateway GATEWAY_IP
```

Dodaj serwer DNS:

```bash
sudo nmcli connection modify interface_name IPv4.dns 213.186.33.99
```

Zmień konfigurację ręczną:

```bash
podręcznik sudo nmcli connection modify interface_name IPv4.method
```

Uruchom ponownie sieć za pomocą polecenia:

```bash
sudo nmcli device down interface_name;nmcli device up interface_name
```

Aby sprawdzić, czy wirtualna maszyna jest w pełni podłączona do Internetu, użyj następującego polecenia:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Jeśli otrzymasz odpowiedź, oznacza to, że adres Additional IP został poprawnie skonfigurowany. Jeśli tak się nie stanie, zrestartuj maszynę wirtualną i ponownie wprowadź polecenie ping.

Aby uzyskać więcej informacji na temat `nmcli`, zobacz [ta strona](https://docs.redhat.com/pl/documentation/red_hat_enterprise_linux/7/html/networking_guide/sec-using_the_networkmanager_command_line_tool_nmcli).

#### FreeBSD

Domyślnie plik konfiguracji sieci maszyny wirtualnej znajduje się w katalogu `/etc/rc.conf`.

Po zalogowaniu się do powłoki maszyny wirtualnej wprowadź następującą komendę, aby zidentyfikować interfejs:

```bash
ifconfig
```

Następnie wykonaj kopię pliku konfiguracyjnego, aby w każdej chwili móc wrócić do poprzedniej wersji:

```bash
sudo cp /etc/rc.conf /etc/rc.conf.bak
```

W przypadku błędu będziesz mógł wrócić za pomocą poniższych poleceń:

```bash
sudo rm -f /etc/rc.conf
sudo cp /etc/rc.conf.bak /etc/rc.conf
```

Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację, zmień `ADDITIONAL_IP` i `GATEWAY_IP` na własne wartości. W tym przykładzie nazwa interfejsu to `em0`. Zastąp tę wartość, jeśli nie ma zastosowania.

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

Aby sprawdzić, czy wirtualna maszyna jest w pełni podłączona do Internetu, użyj następującego polecenia:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Jeśli otrzymasz odpowiedź, oznacza to, że adres Additional IP został poprawnie skonfigurowany. Jeśli tak się nie stanie, zrestartuj maszynę wirtualną i ponownie wprowadź polecenie ping.

#### Ubuntu

Najpierw wyłącz cloud-init:

```bash
touch /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

> [!warning]
>
> Jeśli chcesz skonfigurować Twoją wirtualną maszynę przy użyciu cloud-init, sprawdź stronę [ta strona](https://cloud-init.io/)
>

Dodaj tę linię do pliku `99-disable-network-config.cfg`:

```bash
network: {config: disabled}
```

Następnie utwórz plik konfiguracyjny sieci w `/etc/netplan/` za pomocą następującego polecenia:

```bash
touch /etc/netplan/00-installer-config.yaml
```

Następnie zastosuj te uprawnienia na `/etc/netplan`:

```bash
cd /etc/netplan
sudo chmod 600 *.yaml
```

Wprowadź następującą komendę, aby zidentyfikować interfejs:

```bash
ip addr
```

Następnie utwórz kopię pliku konfiguracyjnego, aby w każdej chwili móc wrócić do poprzedniej wersji:

```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak
```

W przypadku błędu będziesz mógł wrócić za pomocą poniższych poleceń:

```bash
sudo rm -f /etc/netplan/00-installer-config.yaml
sudo cp /etc/netplan/00-installer-config.yaml.bak /etc/netplan/00-installer-config.yaml
```

Następnie otwórz plik konfiguracyjny sieci znajdujący się w `/etc/netplan/` za pomocą następującego polecenia:

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

Zmodyfikuj plik, aby odzwierciedlał poniższą konfigurację, zmień `INTERFACE-NAME`, `ADDITIONAL_IP` oraz `GATEWAY_IP` na własne wartości.

```yaml
network:
  ethernets:
    INTERFACE-NAME:
      dhcp4: true
      addresses:
          - ADDITIONAL_IP/32
      nameservers:
          addresses:
              - 213.186.33.99   
      routes:
           - to: 0.0.0.0/0
             via: GATEWAY_IP
             on-link: true
  version: 2
```

**Przykład**

```yaml
network:
  ethernets:
    ens18:
      dhcp4: true
      addresses:
          - 192.0.2.1/32
      nameservers:
          addresses:
              - 213.186.33.99
      routes:
           - to: 0.0.0.0/0
             via: 203.0.113.254
             on-link: true
  version: 2
```

Zapisz i zamknij plik. Możesz przetestować konfigurację za pomocą polecenia:

```bash
sudo netplan try
```

Jeśli jest poprawna, zastosuj ją za pomocą polecenia:

```bash
sudo netplan apply
```

Aby sprawdzić, czy wirtualna maszyna jest w pełni podłączona do Internetu, użyj następującego polecenia:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Jeśli otrzymasz odpowiedź, oznacza to, że adres Additional IP został poprawnie skonfigurowany. Jeśli tak się nie stanie, zrestartuj maszynę wirtualną i ponownie wprowadź polecenie ping.

#### Windows Server/Hyper-V

Przed skonfigurowaniem maszyny wirtualnej należy utworzyć przełącznik wirtualny.

Wprowadź następującą komendę z poziomu wiersza poleceń serwera dedykowanego i zanotuj nazwę karty sieciowej, która zawiera główny adres IP serwera:

```powershell
ipconfig /all
```

W panelu konfiguracyjnym Hyper-V utwórz nowy wirtualny przełącznik i zdefiniuj rodzaj połączenia na `External`{.action}.

Wybierz adapter z adresem IP serwera, a następnie zaznacz `Zezwól systemowi operacyjnemu na współdzielenie tej karty sieciowej`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
> Ten etap jest wymagany tylko raz dla serwera Hyper-V. W przypadku wszystkich wirtualnych maszyn konieczne jest zastosowanie przełącznika wirtualnego, aby połączyć wirtualne karty sieciowe wirtualnej maszyny z fizyczną mapą serwera.
> 

Następnie wybierz maszynę wirtualną, do której chcesz dodać Additional IP. Użyj panelu konfiguracyjnego Hyper-V, aby zmienić parametry wirtualnej maszyny i zamknij go.

Następnie uruchom mapę sieci i kliknij `Advanced Features`{.action}, zdefiniuj adres MAC w `Static`{.action} i wprowadź wirtualny adres MAC dla adresu Additional IP. Po wprowadzeniu tych parametrów kliknij `OK`{.action}, aby wprowadzić zmiany.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Następnie uruchom wirtualną maszynę i zaloguj się jako administrator, następnie przejdź do `Control Panel`{.action} i `Network and Sharing Center`{.action}. Kliknij link `Connections: Ethernet`{.action}, następnie kliknij przycisk `Properties`{.action}, aby wyświetlić właściwości Ethernet.

Wybierz protokół `Internet Protocol Version 4 (TCP/IPv4)`{.action}, a następnie kliknij przycisk `Properties`{.action}, aby wyświetlić właściwości IPv4.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

W oknie właściwości IPv4 wybierz `Use the following IP address`{.action}. Wprowadź adres Additional IP w polu adresów IP i wprowadź "255.255.255.255" w maskach podsieci.

Następnie wprowadź adres IP bramy Twojego serwera w bramie domyślnej (na przykład adres IP Twojego serwera kończący się 254) i wprowadź "213.186.33.99" w polu `Preferred DNS Server`{.action}.

Kliknij `OK`{.action} i zignoruj komunikat ostrzegawczy dotyczący adresu IP bramy i przypisanego adresu IP, które nie znajdują się w tej samej podsieci.

Na koniec zrestartuj serwer. Wirtualna maszyna musi być podłączona do Internetu za pomocą adresu Additional IP.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

#### Rozwiązywanie problemów

Jeśli nie udaje Ci się nawiązać połączenia między wirtualną maszyną a siecią publiczną i podejrzewasz problem z siecią, zrestartuj serwer w trybie Rescue i skonfiguruj interfejs sieciowy bezpośrednio na hoście.

Po zrestartowaniu serwera w trybie Rescue wprowadź następujące polecenia:

```bash
ip link add name test-bridge link eth0 type macvlan
ip link set dev test-bridge address MAC_ADDRESS
ip link set test-bridge up
ip addr add ADDITIONAL_IP/32 dev test-bridge
```

Zastąp "MAC_ADDRESS" wirtualnym adresem MAC wygenerowanym w panelu konfiguracyjnym oraz "ADDITIONAL_IP" rzeczywistym Additional IP.

Następnie wykonaj ping na Additional IP z zewnątrz. Jeśli to działa, prawdopodobnie oznacza to, że na maszynie wirtualnej lub hoście wystąpi błąd konfiguracji, który uniemożliwia działanie adresu Additional IP w trybie normalnym. Jeśli natomiast adres IP nadal nie działa, otwórz zgłoszenie w [Centrum pomocy](https://help.ovhcloud.com/csm?id=csm_cases_requests).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
