---
title: 'Konfiguracja adresu Additional IP jako aliasu'
excerpt: 'Dowiedz się, jak dodać kilka adresów Additional IP do interfejsu'
updated: 2024-03-25
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

> [!primary]
>
> Od 6 października 2022 nasze rozwiązanie "Failover IP" nazywa się teraz [Additional IP](https://www.ovhcloud.com/pl/network/additional-ip/). To nie ma wpływu na jego funkcje.
>

## Wprowadzenie

Alias IP (po angielsku IP aliasing) to specjalna konfiguracja sieci serwera dedykowanego, która umożliwia przypisanie wielu adresów IP do jednego interfejsu sieciowego.

**Z tego przewodnika dowiesz się, jak przeprowadzić taką konfigurację.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które to Ty przejmujesz odpowiedzialność. Firma OVHcloud nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Dlatego to do Ciebie należy codzienne zarządzanie oprogramowaniem i dbanie o bezpieczeństwo.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz jakiekolwiek trudności lub wątpliwości związane z administrowaniem, użytkowaniem lub dbaniem o bezpieczeństwo serwera, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Więcej informacji znajduje się w sekcji "Sprawdź również".
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal){.external}.
- Dysponowanie jednym lub kilkoma adresami Additional IP.
- Zalogowanie się poprzez SSH do serwera (dostęp *sudo*).

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

Poniższe sekcje zawierają konfiguracje aktualnie oferowanych przez nas dystrybucji oraz najczęściej używane dystrybucje/systemy operacyjne. Pierwszy etap polega zawsze na połączeniu się z Twoim serwerem przez SSH lub za pomocą sesji połączenia GUI (RDP w przypadku serwera Windows).

> [!primary]
>
> Jeśli chcesz korzystać z najnowszej dystrybucji, odpowiednia procedura konfiguracji interfejsu sieciowego może wymagać pewnych dostosowań. W przypadku trudności zalecamy zapoznanie się z dokumentacją dotyczącą systemu operacyjnego.
>

**Prosimy o zapoznanie się z następującą terminologią, która będzie używana w przykładach kodu i instrukcjach zawartych w poniższych sekcjach przewodnika:**

|Termin|Opis|Przykłady|
|---|---|---|
|ADDITIONAL_IP|Dodatkowy adres IP przypisany do Twojej usługi|203.0.113.1|
|NETWORK_INTERFACE|Nazwa interfejsu sieciowego|*eth0*, *ens3*|
|ID|Identyfikator aliasu IP, rozpoczynający się od *0* (w zależności od liczby dodatkowych adresów IP do skonfigurowania)|*0*, *1*|

W poniższych przykładach użyjemy edytora tekstu `nano`. W przypadku niektórych systemów operacyjnych należy zainstalować go przed użyciem. Jeśli tak będzie, zostaniesz poproszony o jego wykonanie. Możesz użyć dowolnego edytora tekstu.

### Debian 10/11

Domyślnie plik konfiguracyjny znajduje się w katalogu`/etc/network/interfaces.d/`. Zaleca się, aby najpierw wykonać kopię zapasową odpowiedniego pliku konfiguracyjnego.

#### Krok 1: tworzenie kopii zapasowej

W naszym przykładzie nasz plik nosi nazwę `50-cloud-init`, dlatego kopiujemy plik `50-cloud-init` za pomocą następującego polecenia:

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

W przypadku błędu będziesz mógł wrócić do poprzedniej wersji za pomocą poniższych poleceń:

```sh
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### Krok 2: modyfikacja pliku konfiguracyjnego

> [!primary]
>
> Nazwy interfejsów sieciowych podane w tym przewodniku mogą różnić się od Twoich. Prosimy o odpowiednie dostosowanie sposobu postępowania.
>

Teraz można zmodyfikować plik konfiguracyjny:

```sh
sudo nano /etc/network/interfaces.d/50-cloud-
```

Następnie dodaj wirtualny interfejs lub alias ethernet. W naszym przykładzie nasz interfejs nosi nazwę `eth0`, więc nasz alias to `eth0:0`. Zrób to dla każdego adresu Additional IP, który chcesz skonfigurować.

Nie zmieniaj istniejących linii w pliku konfiguracyjnym, dodaj Additional IP do pliku, jak pokazano poniżej, zastępując `ADDITIONAL_IP/32` oraz wirtualny interfejs (jeśli Twój serwer nie używa **eth0:0**) własnymi wartościami:

```console
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Możesz również skonfigurować Additional IP, dodając następujące wiersze poleceń w pliku konfiguracyjnym:

```console
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

W przypadku powyższej konfiguracji wirtualny interfejs jest aktywowany lub dezaktywowany za każdym razem, gdy interfejs `eth0` jest włączony lub wyłączony.

Jeśli masz do skonfigurowania dwa adresy Additional IP, plik `/etc/network/interfaces.d/50-cloud-init` musi wyglądać w taki sposób:

```console
auto eth0
iface eth0 inet dhcp

auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address ADDITIONAL_IP2
netmask 255.255.255.255
```

Lub tak:

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IP 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```

**Przykład konfiguracji:**

```console
auto eth0:0
iface eth0:0 inet static
address 203.0.113.1
netmask 255.255.255.255
```

Lub:

```console
auto eth0
iface eth0 inet dhcp

# IP 1
post-up /sbin/ifconfig eth0:0 203.0.113.1 netmask 255.255.255.255 broadcast 203.0.113.1
pre-down /sbin/ifconfig eth0:0 down
```

#### Krok 3: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
sudo /etc/init.d/networking restart
```

### Fedora 38 i kolejne wersje

Fedora korzysta teraz z kluczowych plików (*keyfiles*).
Fedora korzystała wcześniej z profili sieci przechowywanych przez NetworkManager w formacie ifcfg w katalogu `/etc/sysconfig/network-scripts/`.<br>
NetworkManager nie tworzy już domyślnie nowych profili w tym formacie. Plik konfiguracyjny znajduje się w `/etc/NetworkManager/system-connections/`.

#### Krok 1: tworzenie kopii zapasowej

> [!primary]
>
> Pamiętaj, że nazwa pliku sieciowego w naszym przykładzie może różnić się od Twojej. Dostosuj przykłady pod odpowiednią nazwą.
>

Zaleca się, aby najpierw wykonać kopię zapasową odpowiedniego pliku konfiguracyjnego. W poniższym przykładzie nasz plik konfiguracyjny nosi nazwę `cloud-init-eno1.nmconnection`:


```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

W przypadku błędu będziesz mógł wrócić do poprzedniej wersji za pomocą poniższych poleceń:

```sh
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### Krok 2: modyfikacja pliku konfiguracyjny

> [!primary]
> Pamiętaj, że nazwa pliku sieciowego w naszym przykładzie może się różnić od Twojej. Dostosuj polecenia do nazwy pliku.
>

Aby uzyskać nazwę interfejsu sieciowego umożliwiającą edytowanie odpowiedniego pliku sieciowego, możesz wykonać jedną z następujących czynności:

```sh
ip a
```

```sh
nmcli connection show
```

Nie zmieniaj istniejących wierszy w pliku konfiguracyjnym, dodaj Additional IP w następującym pliku, zastępując `ADDITIONAL_IP/32` własnymi wartościami:

```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Jeśli masz dwa dodatkowe adresy Additional IP do skonfigurowania, plik konfiguracyjny powinien wyglądać następująco:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Przykład konfiguracji:**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.1/32
```

#### Krok 3: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
sudo systemctl restart NetworkManager
```

### Debian 12, Ubuntu 20.04 i kolejne wersje

Domyślnie pliki konfiguracyjne znajdują się w katalogu`/etc/netplan`.

Najlepszym rozwiązaniem jest utworzenie oddzielnego pliku konfiguracyjnego do konfiguracji adresów Additional IP. Ułatwia to powrót do poprzedniej wersji w przypadku błędu.

#### Krok 1: określenie interfejsu

```sh
ip a
```

Zanotuj nazwę interfejsu (interfejsu, na którym skonfigurowany jest główny adres IP Twojego serwera).

#### Krok 2: modyfikacja pliku konfiguracyjnego

Następnie utwórz plik konfiguracyjny z rozszerzeniem`.yaml`. W naszym przykładzie nasz plik nosi nazwę `51-cloud-init.yaml`.

```sh
sudo nano /etc/netplan/51-cloud-init.yaml
```

Następnie edytuj plik, zastępując polecenia `INTERFACE_NAME` i `ADDITIONAL_IP` własnymi wartościami:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP/32
```

Jeśli chcesz skonfigurować dwa adresy Additional IP, plik konfiguracyjny powinien wyglądać następująco:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP1/32
           - ADDITIONAL_IP2/32
```


> [!warning]
>
> Pamiętaj, aby zachować wyrównanie każdego elementu w tym pliku, tak jak zostało to pokazane w powyższym przykładzie. Nie należy używać klawisza Tab do tworzenia odstępów. Wymagany jest tylko klawisz spacji.
>

**Przykład konfiguracji:**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.1/32         
```

Zapisz i zamknij plik. Możesz przetestować konfigurację za pomocą polecenia:

```sh
sudo netplan try
```

#### Krok 3: konfiguracja usługi

Jeśli jest poprawna, zastosuj ją za pomocą polecenia:

```sh
sudo netplan apply
```

> [!primary]
> Używając polecenia `netplan try`, system może zwrócić komunikat ostrzegawczy, taki jak `Permissions for /etc/netplan/xx-cloud-init.yaml are too open. Netplan configuration should NOT be accessible by others`. Oznacza to po prostu, że plik nie ma ograniczonych uprawnień. Nie ma to wpływu na konfigurację Additional IP. Aby uzyskać więcej informacji na temat uprawnień do plików, zobacz [oficjalną dokumentację Ubuntu](https://help.ubuntu.com/community/FilePermissions){.external}.
>

### CentOS, AlmaLinux (8 & 9), Rocky Linux (8 & 9)

łówny plik konfiguracyjny znajduje się w `/etc/sysconfig/network-scripts/`. W naszym przykładzie nazywa się `ifcfg-eth0`. Przed wprowadzeniem zmian sprawdź rzeczywistą nazwę pliku w tym folderze.

Dla każdego dodatkowego adresu IP, który ma zostać skonfigurowany, tworzymy oddzielny plik konfiguracyjny z następującymi parametrami: `ifcfg-NETWORK_INTERFACE:ID`. Gdzie `NETWORK_INTERFACE` reprezentuje interfejs fizyczny, a `ID` jest wirtualnym interfejsem sieciowym lub aliasem ethernetowym rozpoczynającym się od wartości 0. Na przykład w przypadku interfejsu o nazwie `eth0` pierwszy alias to `eth0:0`, drugi alias to `eth0:1`, etc...

#### Krok 1: określenie interfejsu

```sh
ip a 
```

Zanotuj nazwę interfejsu (interfejsu, w którym skonfigurowany jest główny adres IP Twojego serwera).

#### Krok 2: modyfikacja pliku konfiguracyjny

Zacznij od utworzenia pliku konfiguracyjnego. Zastąp `NETWORK_INTERFACE:ID` własnymi wartościami.

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

Następnie zmodyfikuj plik, zastępując `NETWORK_INTERFACE:ID` oraz `ADDITIONAL_IP` własnymi wartościami:

```console
DEVICE=NETWORK_INTERFACE:ID
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
```

**Przykład konfiguracji:**

```console
DEVICE=eth0:0
ONBOOT=yes
BOOTPROTO=none # For CentOS use "static"
IPADDR=203.0.113.1
NETMASK=255.255.255.255
BROADCAST=203.0.113.1
```

#### Krok 3: restart interfejsu alias

Następnie zrestartuj swój interfejs. Zastąp `eth0:0` własnymi wartościami:

```sh
ifup eth0:0
```

#### Dla AlmaLinux i Rocky Linux

```sh
sudo systemctl restart NetworkManager
```

### cPanel

#### Kror 1: dostęp do sekcji Zarządzanie IP WHM

W Panelu klienta WHM kliknij `IP Functions`{.action} i wybierz `Add a New IP Address`{.action} z menu po lewej stronie.

![Dodaj nowy adres IP](images/Cpanel-1.png){.thumbnail}

#### Kror 2: dodaj informacje dotyczące Additional IP

Wpisz swój adres IP additional w formie "xxx.xxx.xxx.xxx" w polu "New IP or IP range to add".

Wybierz `255.255.255.255` jako maskę podsieci, po czym kliknij `Submit`{.action}.

![wprowadź nowe informacje dotyczące nowego adresu IP](images/Cpanel-2024.png){.thumbnail}

> [!warning]
>
> Uwaga: Jeśli masz kilka adresów IP, które chcesz skonfigurować na tym samym bloku i jednocześnie je dodajesz, system WHM zmusi cię do użycia maski podsieci `255.255.255.0`. Nie zaleca się korzystania z tej konfiguracji, aby każdy adres IP był dodany oddzielnie, aby móc używać odpowiedniej maski podsieci `255.255.255.255`.
>

#### Kror 3: Sprawdź aktualną konfigurację IP

W sekcji `IP Functions`{.action} kliknij `Show or Delete Current IP Addresses`{.action}, aby sprawdzić, czy adres Additional IP został poprawnie dodany.

![check configured IP](images/Cpanel-2024-1.png){.thumbnail}

### Windows Server

Serwery pod Windows często wykorzystują DHCP w konfiguracji sieci. Jeśli masz już skonfigurowany adres Additional IP lub zmieniłeś konfigurację na stały adres IP, przejdź od razu do kolejnego kroku.

Jeśli nie, musisz najpierw zmienić konfigurację sieci z DHCP na stały adres IP.

Otwórz wiersz poleceń `cmd`{.action} lub `powershell`{.action}, a następnie wpisz poniższe polecenie:

```powershell
ipconfig
```

W rezultacie pojawi się na przykład to:

![Result of "ipconfig" command](images/ipconfig.png){.thumbnail}

Spisz następnie Twój adres IPv4, maskę podsieci, bramę domyślną oraz nazwę karty sieciowej.

Adres IP serwera w naszym przypadku to: **192.0.2.28**

Kolejne kroki możesz przeprowadzić poprzez wiersz poleceń albo poprzez interfejs graficzny:

#### W wierszu poleceń (zalecane)

W poniższych poleceniach należy zastąpić:

|Polecenie|Wartość|
|---|---|
|NETWORK_ADAPTER| Nazwa karty sieciowej (w naszym przypadku: Ethernet 2)|
|IP_ADDRESS| Adres IP serwera (w naszym przypadku: 192.0.2.28)|
|SUBNET_MASK| Maska podsieci (w naszym przypadku: 255.255.255.0)|
|GATEWAY| Brama domyślna (w naszym przypadku: 192.0.2.254)|
|ADDITIONAL_IP| Adres Additional IP, który chcesz dodać|

> [!warning]
>
> Uwaga! Jeśli wprowadzisz błędne parametry, serwer przestanie być dostępny. Wówczas trzeba będzie dokonać poprawek w trybie Winrescue lub poprzez KVM.
> 

W wierszu poleceń:

1\. Zmiana ustawień na stały adres IP

```powershell
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2\. Zdefiniowanie serwera DNS

```powershell
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```
3\. Dodanie adresu Additional IP

```powershell
netsh interface ipv4 add address "NETWORK_ADAPTER" ADDITIONAL_IP 255.255.255.255
```

Od tej pory Twój adres Additional IP będzie działać.

#### Przez interfejs graficzny

1. Przejdź do menu `Start`{.action} > `Control Panel`{.action} > `Network and Internet`{.action} > `Network and Sharing Centre`{.action} > `Change Adapter Settings`{.action} (w lewym menu).
2. Kliknij prawym przyciskiem myszy połączenie sieciowe w naszym przykładzie `Ethernet 2`{.action}.
3. Kliknij `Properties`{.action}.
4. Wybierz `Internet Protocol Version 4 (TCP/IPv4)`{.action}, a następnie kliknij `Properties`{.action}.
5. Kliknij `Use the following IP address`{.action} i wprowadź dane adresu głównego Twojego serwera, maski podsieci i bramy domyślnej uzyskane powyżej po wpisaniu polecenia `ipconfig`{.action}. (W polu `Preferred DNS Server` wpisz 213.186.33.99.)

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Uwaga! Jeśli wprowadzisz błędne parametry, serwer przestanie być dostępny. Wówczas trzeba będzie dokonać poprawek w trybie [Winrescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode#windows) lub poprzez [IPMI](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
> 

Następnie kliknij `Advanced`{.action} ciągle w `TCP/IP Settings`{.action}.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/configure-main-ip-1.png){.thumbnail}

W sekcji `IP Address`{.action} kliknij `Add`{.action}:

![Advanced TCP/IPv4 Settings](images/add-additional-ip.png){.thumbnail}

Następnie wprowadź adres Additional IP oraz maskę podsieci **255.255.255.255**. Następnie kliknij przycisk `Add`{.action}.

![Advanced TCP/IPv4 Settings](images/configure-additional-ip.png){.thumbnail}

Kliknij przycisk `OK`{.action}, aby zatwierdzić konfigurację.

Twój Additional IP działa. Możesz sprawdzić konfigurację za pomocą polecenia:

```powershell
ipconfig
```

Daje to wynik podobny do poniższego przykładu:

![Final configuration](images/final-ip-configuration.png){.thumbnail}

### Plesk

#### Etap 1: dostęp do interfejsu zarządzania adresami IP Plesk

W panelu konfiguracyjnym Plesk wybierz `Tools & Settings`{.action} na pasku bocznym po lewej stronie.

![dostęp do zarządzania adresami IP](images/pleskip1.png){.thumbnail}

Kliknij `IP Addresses`{.action} w **Tools & Settings**.

#### Etap 2: dodaj dodatkowe informacje IP

W tej sekcji kliknij przycisk `Add IP Address`{.action}.

![dodaj informacje IP](images/Plesk-2024.png){.thumbnail}

Wprowadź adres Additional IP w formie `xxx.xxx.xxx.xxx/32` w polu "IP address and subnet mask", a następnie kliknij `OK`{.action}.

![dodaj informacje IP](images/Plesk-2024-1.png){.thumbnail}

#### Etap 3: sprawdź aktualną konfigurację IP

W sekcji "IP Addresses" sprawdź, czy adres Additional IP został poprawnie dodany.

![aktualna konfiguracja IP](images/Plesk-2024-2.png){.thumbnail}

#### Rozwiązywanie problemów

Jeśli nie udaje Ci się nawiązać połączenia między siecią publiczną a Twoim aliasem IP i podejrzewasz problem z siecią, zrestartuj serwer w [trybie Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) i skonfiguruj alias bezpośrednio na serwerze.

W tym celu, po zrestartowaniu serwera w trybie Rescue, uruchom następujące polecenie:

```bash
ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Gdzie zastąpisz "ADDITIONAL_IP" prawdziwym Additional IP.

Następnie wystarczy skierować ping z Additional IP na zewnątrz. Jeśli to działa, prawdopodobnie oznacza to, że błąd konfiguracji wymaga naprawy. Jeśli adres IP nadal nie działa, otwórz zgłoszenie dla zespołu pomocy technicznej w [Centrum pomocy OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help){.external}, podając następujące informacje:

- Nazwa i wersja systemu operacyjnego, którego używasz na Twoim serwerze.
- Nazwa i katalog pliku konfiguracji sieci.
- Zawartość tego pliku.

## Sprawdź również

[Tryb bridge IP](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>