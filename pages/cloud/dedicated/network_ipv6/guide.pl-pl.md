---
title: 'Konfigurowanie adresu IPv6 na serwerach dedykowanych'
slug: siec-ipv6
excerpt: 'Dowiedz się, jak skonfigurować adresy IPv6 w infrastrukturze OVHcloud'
section: 'Sieć & IP'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja: 29-06-2022**

## Wprowadzenie

IPv6 (Internet Protocol version 6) jest najnowszą wersją protokołu internetowego (IP, ang. Internet Protocol). Umożliwia rozwiązanie problemów z wyczerpywaniem się dostępnych adresów swojego poprzednika, protokołu IPv4, ponieważ korzysta z adresów 128-bitowych zamiast 32-bitowych. Każdy serwer dedykowany OVHcloud ma blok adresów IPv6 /64. Oznacza to, że użytkownik ma do dyspozycji 18 trylionów adresów IP.

**Dowiedz się, jak skonfigurować adresy IPv6 na serwerze na podstawie różnych przykładów.**

> [!warning]
>OVHcloud oferuje usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tym samym odpowiada za zapewnienie ich prawidłowego działania.
>
>Niniejszy przewodnik zawiera informacje pomocne przy wykonywaniu typowych zadań. Jednak w przypadku wystąpienia problemów zalecamy kontakt z dostawcą danych usług lub wydawcą oprogramowania, ponieważ nie będziemy w stanie udzielić pomocy. Więcej informacji zawiera sekcja “Sprawdź również” tego przewodnika.
>

## Wymagania początkowe

- [Serwer dedykowany](https://www.ovhcloud.com/pl/bare-metal/) w ramach konta OVHcloud.
- Wszystkie informacje o protokole IPv6 (prefiks, brama itd.).
- Podstawowa wiedza z zakresu [protokołu SSH](../ssh-wprowadzenie/) i sieci.

> [!warning]
> Serwery Kimsufi są dostarczane z jednym blokiem IPv6 (/128). IPv6 zostanie automatycznie skonfigurowane podczas instalacji systemu operacyjnego.
>

## W praktyce

Jeśli instalujesz serwer przy użyciu udostępnionego przez OVHcloud szablonu systemu operacyjnego Linux, zauważysz gotowy, już skonfigurowany pierwszy (główny) adres IPv6.

Jeśli chcesz skonfigurować kilka adresów IPv6 na Twoim serwerze (lub jeśli chcesz z niego korzystać na wirtualnej maszynie), musisz mieć skonfigurowany adres IP Failover z vMAC. W przeciwnym razie nie będziemy mogli przekierować adresu IPv6 przez routery/switche.

> [!primary]
>
> Domyślną bramą Twojego bloku adresów IPv6 (IPv6_GATEWAY) jest zawsze xxxx.xxxx.xxxx.xxFF:FF:FF:FF:FF. Pamiętaj, że w IPv6 możesz usunąć "0" głowy, aby uniknąć błędów podczas określania mostka.
>
> Na przykład:
> 
> - Adres IPv6 serwera to 2607:5300:60:62ac::/64 lub 2607:5300:60:62ac:0000:0000:0000:0000/64. Dlatego bramą IPv6_GATEWAY jest 2607:5300:60:62FF:FF:FF:FF:FF.
> - Adres IPv6 serwera to 2001:41D0:1:46e::/64 lub 2001:41D0:0001:046e:0000:0000:0000:0000/64. Dlatego bramą IPv6_GATEWAY jest 2001:41D0:1:4FF:FF:FF:FF:FF.
>
> Najbezpieczniejszym sposobem pobierania informacji o sieci na Twoim serwerze jest korzystanie z [API OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/). Wykonaj następujące wywołanie API, wskazując wewnętrzną nazwę serwera (przykład: `ns3956771.ip-169-254-10.eu`):
>


> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/network

> [!warning]
> 
> Zanim zmodyfikujesz plik konfiguracyjny, zawsze utwórz kopię zapasową oryginału, aby móc powrócić w przypadku problemu. 
> 

### Systemy operacyjne Debian i oparte na dystrybucji Debian

> [!warning]
>
> Przed wykonaniem poniższych kroków zalecamy wyłączenie narzędzi autoconf IPv6 i anonsowania routera, aby zapobiec wystąpieniu znanych problemów. W tym celu należy dodać następujące wiersze do pliku `sysctl.conf`, który znajduje się w katalogu /etc/sysctl.conf:
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Po dodaniu wierszy można zastosować te reguły, wykonując następujące polecenie: `sh sysctl -p`.
> 

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

[Więcej informacji zawiera ten przewodnik](../pierwsze-kroki-z-serwerem-dedykowanym/).

#### Krok 2: otwarcie pliku konfiguracji sieci dla serwera

Plik konfiguracji sieci Twojego serwera znajduje się w katalogu `/etc/network/interfaces` lub `/etc/network/interfaces.d`. Znajdź plik i otwórz go do edycji przy użyciu wiersza polecenia. Najpierw warto utworzyć kopię zapasową.

#### Krok 3: wprowadzenie zmian w pliku konfiguracji sieci

Wprowadź zmiany w pliku, aby wyglądał podobnie do poniższego przykładu. W tym przykładzie interfejs sieciowy ma nazwę `eth0`. Interfejs na Twoim serwerze może być inny.

```console
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 128

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```
Dodatkowe adresy IPv6 można dodać przez wiersze `up /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64` w pliku.

#### Krok 4: zapisanie pliku i zastosowanie zmian

Zapisz zmiany w pliku, a następnie uruchom ponownie sieć lub restartuj serwer w celu zastosowania zmian.

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```bash
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```


Jeśli nie możesz wysłać polecenia ping na ten adres IPv6, sprawdź konfigurację i spróbuj ponownie. Upewnij się też, że komputer, z którego przeprowadzasz test, jest połączony za pośrednictwem protokołu IPv6. Jeśli połączenie wciąż nie działa, sprawdź konfigurację w [trybie ratunkowym (rescue)](../ovh-rescue/).

### System Fedora 26 i nowszy

> [!warning]
>
> Przykład przygotowano przy użyciu systemu CentOS 7.0. W przypadku innych dystrybucji opartych na systemie Redhat wyniki mogą się różnić.
>

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

Więcej informacji zawiera [ten przewodnik](../pierwsze-kroki-z-serwerem-dedykowanym/).


#### Krok 2: otwarcie pliku konfiguracji sieci dla serwera

Plik konfiguracji sieci Twojego serwera znajduje się w katalogu `/etc/sysconfig/network-scripts/ifcfg-eth0`. Znajdź plik i otwórz go do edycji przy użyciu wiersza polecenia.

#### Krok 3: wprowadzenie zmian w pliku konfiguracji sieci

Wprowadź zmiany w pliku, aby wyglądał podobnie do poniższego przykładu. W tym przykładzie interfejs sieciowy ma nazwę eth0. Interfejs na Twoim serwerze może być inny. Pominęliśmy też konfigurację adresu IPv4 Failover, aby uniknąć pomyłek, ale konfigurację adresu IPv6 przygotowuje się w tym samym pliku.

```console
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=YOUR_IPv6/64
IPV6ADDR_SECONDARIES=YOUR_2nd_IPv6/64 YOUR_3rd_IPv6/64
IPV6_DEFAULTGW=IPv6_GATEWAY
```
Jeśli potrzebujesz więcej adresów IPv6 na komputerze, dodaj je w wierszu `IPV6ADDR_SECONDARIES`, rozdzielając spacją.

#### Krok 4: zapisanie pliku i zastosowanie zmian

Zapisz zmiany w pliku, a następnie uruchom ponownie sieć lub restartuj serwer w celu zastosowania zmian.

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```bash
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Jeśli nie możesz wysłać polecenia ping na ten adres IPv6, sprawdź konfigurację i spróbuj ponownie. Upewnij się też, że komputer, z którego przeprowadzasz test, jest połączony za pośrednictwem protokołu IPv6. Jeśli połączenie wciąż nie działa, sprawdź konfigurację w [trybie ratunkowym (rescue)](../ovh-rescue/).

### FreeBSD

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

Więcej informacji zawiera [ten przewodnik](../pierwsze-kroki-z-serwerem-dedykowanym/).


#### Krok 2: otwarcie pliku konfiguracji sieci dla serwera

Plik konfiguracji sieci Twojego serwera znajduje się w katalogu `/etc/rc.conf`. Znajdź plik i otwórz go do edycji przy użyciu wiersza polecenia.

#### Krok 3: wprowadzenie zmian w pliku konfiguracji sieci

Wprowadź zmiany w pliku, aby wyglądał podobnie do poniższego przykładu. W tym przykładzie interfejs sieciowy ma nazwę em0. Interfejs na Twoim serwerze może być inny.

```console
IPv6_activate_all_interfaces="YES" 
IPv6_defaultrouter="IPv6_GATEWAY" 
ifconfig_em0_IPv6="inet6 IPv6_Address prefixlen 64"
ifconfig_em0_alias0="inet6 IPv6_Address_2 prefixlen 64"
ifconfig_em0_alias1="inet6 IPv6_Address_3 prefixlen 64"
```

#### Krok 4: zapisanie pliku i restart serwera

Zapisz zmiany w pliku, a następnie uruchom ponownie sieć lub restartuj serwer w celu zastosowania zmian.

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```bash
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Jeśli nie możesz wysłać polecenia ping na ten adres IPv6, sprawdź konfigurację i spróbuj ponownie. Upewnij się też, że komputer, z którego przeprowadzasz test, jest połączony za pośrednictwem protokołu IPv6. Jeśli połączenie wciąż nie działa, sprawdź konfigurację w [trybie ratunkowym (rescue)](../ovh-rescue/).

### Ubuntu 18.04 i 20.04

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

Więcej informacji zawiera [ten przewodnik](../pierwsze-kroki-z-serwerem-dedykowanym/).

#### Krok 2: otwarcie pliku konfiguracji sieci dla serwera

Otwórz plik konfiguracyjny sieci, plik znajdujący się w `/etc/netplan`. Do celów demonstracyjnych nasz plik nazywa się '50-cloud-init.yaml'.

#### Krok 3: wprowadzenie zmian w pliku konfiguracji sieci

Za pomocą edytora tekstu zmodyfikuj plik '50-cloud-init.yaml', dodając następujące wiersze do odpowiednich sekcji, jak pokazano w poniższym przykładzie.

Zastąp elementy ogólne (YOUR_IPV6, IPV6_PREFIX i IPV6_GATEWAY) oraz interfejs sieciowy (jeśli Twój serwer nie używa enp1s0) Twoimi wartościami specyficznymi.

```yaml
network:
    version: 2
    ethernets:
        enp1s0:
            dhcp4: true
            match:
                macaddress: 00:04:0p:8b:c6:30
            set-name: enp1s0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            gateway6: IPv6_GATEWAY
            routes:
                - to: IPv6_GATEWAY
                  scope: link
```

### Ubuntu 21.10 i 22.04

Plik konfiguracyjny musi wyglądać jak poniższy przykład:

```yaml
network:
    version: 2
    ethernets:
        enp1s0:
            dhcp4: true
            match:
                macaddress: 00:04:0p:8b:c6:30
            set-name: enp1s0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
                - to: ::/0
                  via: IPv6_GATEWAY
                - to: IPv6_GATEWAY
                  scope: link
```

> [!warning]
>
> Ważne jest przestrzeganie wyrównania każdego elementu tego pliku, jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Potrzebny jest tylko klawisz spacji. 
>

#### Krok 4: Przetestuj i stosuj konfigurację

Możesz przetestować konfigurację, wpisując następujące polecenie:

```bash
netplan try
```

Jeśli jest poprawna, zastosuj ją za pomocą następującego polecenia:

```bash
netplan apply
```

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```bash
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### Windows Server 2012

#### Krok 1: połączenie z serwerem przy użyciu protokołu RDP

Więcej informacji zawiera [ten przewodnik](../pierwsze-kroki-z-serwerem-dedykowanym/).


#### Krok 2: otwarcie konfiguracji sieci dla serwera

Najpierw prawym przyciskiem myszy kliknij ikonę sieci w obszarze powiadomień, aby przejść do `Centrum sieci i udostępniania`{.action}.

![Network and Sharing Center](images/ipv6_network_sharing_center.png){.thumbnail}

Kliknij pozycję `Zmień ustawienia karty sieciowej`{.action}.

![Change adapter settings](images/ipv6_change_adapter_settings.png){.thumbnail}

Kliknij kartę sieciową prawym przyciskiem myszy, a następnie kliknij pozycję `Właściwości`{.action}.

![Network Adapter Properties](images/ipv6_network_adapter_properties.png){.thumbnail}

Wybierz pozycję `Protokół internetowy w wersji 6 (TCP/IPv6)`{.action}, a następnie kliknij przycisk `Właściwości`{.action}.

![Properties](images/ipv6_properties.png){.thumbnail}

#### Krok 3: wprowadzenie zmian w konfiguracji sieci 

Wprowadź konfigurację protokołu IPv6 (w polach `Adres IPv6` i `Brama domyślna`), a następnie kliknij przycisk `OK`{.action}.

![Properties](images/ipv6_configuration.png){.thumbnail}

### Rozwiązywanie problemów

Jeśli po testach wciąż występują problemy z połączeniem, utwórz zgłoszenie do zespołu pomocy technicznej i poproś o przejrzenie Twoich konfiguracji. Podaj następujące informacje:

- Nazwa i wersja systemu operacyjnego używanego na serwerze.
- Nazwa pliku konfiguracji sieci i katalog, w którym się on znajduje. 
- Treść tego pliku.


## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
