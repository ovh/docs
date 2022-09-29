---
title: 'Konfiguracja adresu Additional IP jako aliasu'
slug: network-ip-alias
excerpt: 'Dowiedz się, jak dodać kilka adresów Additional IP do interfejsu'
section: 'Sieć & IP'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja dnia 2021-09-16**

## Wprowadzenie

Alias IP (po angielsku IP aliasing) to specjalna konfiguracja sieci serwera dedykowanego, która umożliwia przypisanie wielu adresów IP do jednego interfejsu sieciowego.

**Z tego przewodnika dowiesz się, jak przeprowadzić taką konfigurację.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external}, [serwera VPS](https://www.ovh.pl/vps/){.external} lub instancji [Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external}.
- Dysponowanie jednym lub kilkoma adresami Additional IP.
- Zalogowanie się poprzez SSH do serwera (dostęp root).

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce
Poniżej przedstawiamy konfigurację dla dystrybucji bazowych.

### Debian 10/11

#### Krok 1: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Krok 2: modyfikacja pliku konfiguracyjnego

Teraz można zmodyfikować plik konfiguracyjny:

```sh
editor /etc/network/interfaces.d/50-cloud-init
```

Następnie dodaj alias interfejsu:

```bash
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

W celu upewnienia się, że alias interfejsu jest aktywowany równolegle do interfejsu `eth0`, dodaj następujący wiersz do konfiguracji eth0:

```bash
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

Jeśli masz do skonfigurowania dwa adresy Additional IP, plik /etc/network/interfaces.d/50-cloud-init musi wyglądać w taki sposób:

```bash
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

```bash
auto eth0
iface eth0 inet dhcp

# IPFO 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```


#### Krok 3: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
/etc/init.d/networking restart
```

### Debian 6/7/8 i pochodne

#### Krok 1: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### Krok 2: modyfikacja pliku konfiguracyjnego

Teraz można zmodyfikować plik konfiguracyjny:

```sh
editor /etc/network/interfaces
```

Następnie dodaj alias interfejsu:

```bash
auto eth0:0
iface eth0:0 inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

W celu upewnienia się, że alias interfejsu jest aktywowany równolegle do interfejsu `eth0`, dodaj następujący wiersz do konfiguracji eth0:

```bash
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP
pre-down /sbin/ifconfig eth0:0 down
```

Jeśli masz do skonfigurowania dwa adresy Additional IP, plik /etc/network/interfaces musi wyglądać w taki sposób:

```bash
auto eth0
iface eth0 inet static
address SERVER_IP
netmask 255.255.255.0
broadcast xxx.xxx.xxx.255
gateway xxx.xxx.xxx.254

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

```
# IPFO 1
post-up /sbin/ifconfig eth0:0 ADDITIONAL_IP1 netmask 255.255.255.255 broadcast ADDITIONAL_IP1
pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 ADDITIONAL_IP2 netmask 255.255.255.255 broadcast ADDITIONAL_IP2
pre-down /sbin/ifconfig eth0:1 down
```


#### Krok 3: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
/etc/init.d/networking restart
```

### Debian 9+, Ubuntu 17+, Fedora 26+ i Arch Linux

W tych dystrybucjach przypisywanie interfejsom nazw eth0, eth1 itd. zostało zlikwidowane, dlatego od tej pory będziemy używać w sposób bardziej ogólny `systemd-network`.

#### Krok 1: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### Krok 2: modyfikacja pliku konfiguracyjnego

Teraz do pliku konfiguracyjnego można dodać adres Additional IP w następujący sposób:

```sh
nano /etc/systemd/network/50-default.network
```
```sh
[Address]
Address=22.33.44.55/32
Label=failover1 # optional
```

Label nie jest obowiązkowy, służy do sortowania poszczególnych adresów Additional IP.

#### Krok 3: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
systemctl restart systemd-networkd
```


### CentOS i Fedora (25 i wcześniejsze)

#### Krok 1: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc wykorzystać go jako szablon:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Krok 2: modyfikacja pliku konfiguracyjny

Teraz można zmodyfikować plik eth0:0 w celu zastąpienia adresu IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Najpierw należy zastąpić nazwę `Device`, a następnie istniejący adres IP na otrzymany adres Additional IP:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # For CentOS use "static"
IPADDR="ADDITIONAL_IP"
NETMASK="255.255.255.255"
BROADCAST="ADDITIONAL_IP"
```

#### Krok 3: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
ifup eth0:0
```


### Gentoo

#### Krok 1: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### Krok 2: modyfikacja pliku konfiguracyjnego

Teraz należy edytować plik w celu dodania do niego adresu Additional IP. W Gentoo alias dodaje się bezpośrednio w interfejsie eth0. Nie tworzymy interfejsu eth0:0, jak w przypadku Red Hat czy CentOS.

> [!warning]
>
> Domyślny adres IP serwera musi pozostać wraz z config_eth0= w tym samym wierszu. Ma to na celu zapewnienie poprawnego działania pewnych operacji właściwych dla OVH.
> 

Wystarczy więc powrócić do wiersza pod netmask **255.255.255.0** i dodać tam adres Additional IP (SERVER_IP należy zastąpić głównym adresem IP Twojego serwera).

```sh
editor /etc/conf.d/net
```

Musisz dodać to:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "ADDITIONAL_IP netmask 255.255.255.255 brd ADDITIONAL_IP" )
```

Plik /etc/conf.d/net musi zawierać poniższe dane:


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config_eth0=( "SERVER_IP netmask 255.255.255.0"
"ADDITIONAL_IP netmask 255.255.255.255 brd ADDITIONAL_IP" )
routes_eth0=( "default gw SERVER_IP.254" )
```

Aby móc wykonać `ping` na adresie Additional IP, trzeba po prostu zrestartować interfejs sieciowy.


#### Krok 3: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### Krok 1: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### Krok 2: modyfikacja pliku konfiguracyjnego

Następnie należy edytować plik /etc/sysconfig/network/ifcfg-ens32 w poniższy sposób:

```bash
IPADDR_1=ADDITIONAL_IP
NETMASK_1=255.255.255.255
LABEL_1=ens32:0
```


### cPanel

#### Krok 1: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
cp /etc/ips /etc/ips.bak
```

#### Krok 2: modyfikacja pliku konfiguracyjnego

Następnie należy edytować plik /etc/ips:

```sh
editor /etc/ips
```
Następnie dodać do pliku adres Additional IP:

```bash
ADDITIONAL_IP:255.255.255.255:ADDITIONAL_IP
```
Potem dodać adres IP w ``
/etc/ipaddrpool`:

```bash
ADDITIONAL_IP
```

#### Krok 3: restart usługi

Pozostaje tylko zrestartować interfejs:

```sh
/etc/init.d/ipaliases restart
```

### Windows Server

Serwery pod Windows często wykorzystują DHCP w konfiguracji sieci. Jeśli masz już skonfigurowany adres Additional IP lub zmieniłeś konfigurację na stały adres IP, przejdź od razu do kolejnego kroku.

Jeśli nie, musisz najpierw zmienić konfigurację sieci z DHCP na stały adres IP.

Otwórz wiersz poleceń `cmd`{.action} lub `powershell`{.action}, a następnie wpisz poniższe polecenie:

```sh
ipconfig /all
```

W rezultacie pojawi się na przykład to:

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Spisz następnie Twój adres IPv4, maskę podsieci, bramę domyślną oraz nazwę karty sieciowej.

Adres IP serwera w naszym przypadku to: **94.23.229.151**


Kolejne kroki możesz przeprowadzić poprzez wiersz poleceń albo poprzez interfejs graficzny:

#### W wierszu poleceń (zalecane)

W poniższych poleceniach należy zastąpić:

|Polecenie|Wartość|
|---|---|
|NETWORK_ADAPTER| Nazwa karty sieciowej (w naszym przypadku: Local Area Connection)|
|IP_ADDRESS| Adres IP serwera (w naszym przypadku: 94.23.229.151)|
|SUBNET_MASK| Maska podsieci (w naszym przypadku: 255.255.255.0)|
|GATEWAY| Brama domyślna (w naszym przypadku: 94.23.229.254)|
|ADDITIONAL_IP| Adres Additional IP, który chcesz dodać|

> [!warning]
>
> Uwaga! Jeśli wprowadzisz błędne parametry, serwer przestanie być dostępny. Wówczas trzeba będzie dokonać poprawek w trybie Winrescue lub poprzez KVM.
> 

W wierszu poleceń:

1. Zmiana ustawień na stały adres IP

```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2. Zdefiniowanie serwera DNS

```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```
3. Dodanie adresu Additional IP

```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" ADDITIONAL_IP 255.255.255.255
```

Od tej pory Twój adres Additional IP będzie działać.


#### Przez interfejs graficzny

1. Przejdź do menu `Uruchom`{.action} > `Panel sterowania`{.action} > `Sieć i Internet`{.action} > `Centrum sieci i udostępniania`{.action} > `Zmień ustawienia karty sieciowej`{.action} (w lewym menu).
2. Kliknij prawym przyciskiem myszy `Połączenie lokalne`{.action}.
3. Kliknij `Właściwości`{.action}.
4. Wybierz `Protokół internetowy w wersji 4 (TCP/IPv4)`{.action}, a następnie kliknij `Właściwości`{.action}.
5. Kliknij `Użyj następującego adresu IP`{.action} i wprowadź dane adresu głównego Twojego serwera, maski podsieci i bramy domyślnej uzyskane powyżej po wpisaniu polecenia `ipconfig`{.action}. (Jako preferowany serwer DNS wpisz 213.186.33.99.)

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Uwaga! Jeśli wprowadzisz błędne parametry, serwer przestanie być dostępny. Wówczas trzeba będzie dokonać poprawek w trybie Winrescue lub poprzez KVM.
> 

Następnie kliknij `Zaawansowane`{.action} (ciągle w `Ustawieniach TCP/IP`{.action}.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

W sekcji `Adres IP`{.action} kliknij `Dodaj`{.action} :

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Następnie wprowadź adres Additional IP oraz maskę podsieci **255.255.255.255**.

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Kliknij `Dodaj`{.action}.

Od tej pory Twój adres Additional IP będzie działać.


### FreeBSD

#### Krok 1: określenie interfejsu

Ustal nazwę głównego interfejsu sieci. W tym celu możesz użyć polecenia `ifconfig`{.action}:

```sh
ifconfig
```

W rezultacie pojawi się:

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500
>>> options=10b
>>> ether 00:24:8c:d7:ba:11
>>> inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255
>>> inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74
>>> media: Ethernet autoselect (100baseTX )
>>> status: active
>>> lo0: flags=8049 metric 0 mtu 16384
>>> options=3
>>> inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2
>>> inet6 ::1 prefixlen 128
>>> inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

W naszym przypadku nazwą interfejsu jest **nfe0**.


#### Krok 2: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### Krok 3: modyfikacja pliku konfiguracyjnego

Edytuj plik /etc/rc.conf:

```sh
editor /etc/rc.conf
```

Następnie dopisz ten wiersz na końcu pliku ifconfig_INTERFACE_alias0=`inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP`.

Zastąp **INTERFACE** i **ADDITIONAL_IP** odpowiednio nazwą interfejsu (określoną w pierwszym kroku) oraz Twoim adresem Additional IP. Oto przykład:


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### Krok 4: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```

### Solaris

#### Krok 1: określenie interfejsu

Ustal nazwę głównego interfejsu sieci. W tym celu możesz użyć polecenia `ifconfig`{.action}:

```sh
ifconfig -a
```

W rezultacie pojawi się:

```sh
ifconfig -a
>>> lo0: flags=2001000849 mtu 8232 index 1 inet 127.0.0.1 netmask ff000000 e1000g0: flags=1000843 mtu 1500 index 2 inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 ether 0:1c:c0:f2:be:42
```

W naszym przypadku nazwą interfejsu jest więc **e1000g0**.


#### Krok 2: utworzenie pliku konfiguracyjnego

Przede wszystkim należy sporządzić kopię pliku konfiguracyjnego, aby móc go przywrócić w dowolnym momencie:

```sh
editor /etc/hostname.e1000g0:1
```

#### Krok 3: modyfikacja pliku konfiguracyjnego

W tym pliku wpisz: **ADDITIONAL_IP/32 up**, gdzie **ADDITIONAL_IP** odpowiada Twojemu adresowi Additional IP. Na przykład:

```bash
188.165.171.40/32 up
```

#### Krok 4: restart interfejsu

Pozostaje tylko zrestartować interfejs:

```sh
svcadm restart svc:/network/physical:default
```

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.