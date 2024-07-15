---
title: 'Konfigurowanie adresu IPv6 na serwerach dedykowanych'
excerpt: 'Dowiedz się, jak skonfigurować adresy IPv6 w infrastrukturze OVHcloud'
updated: 2024-03-05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

IPv6 (Internet Protocol version 6) jest najnowszą wersją protokołu internetowego (IP, ang. Internet Protocol). Umożliwia rozwiązanie problemów z wyczerpywaniem się dostępnych adresów swojego poprzednika, protokołu IPv4, ponieważ korzysta z adresów 128-bitowych zamiast 32-bitowych. Os servidores das gamas High Grade, Scale e Advance (desde julho de 2024) são entregues com um bloco /56 IPv6. Já os antigos servidores são entregues com um bloco /64 IPv6. Um servidor entregue com um bloco /56 IPv6 permite dispor de até 18 quintilhões de endereços IP.

**Dowiedz się, jak skonfigurować adresy IPv6 na serwerze na podstawie różnych przykładów.**

> [!warning]
> OVHcloud oferuje usługi, ale to użytkownik ponosi odpowiedzialność za zarządzanie nimi oraz ich konfigurację. Tym samym odpowiada za zapewnienie ich prawidłowego działania.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz jakiekolwiek trudności lub wątpliwości związane z administrowaniem, użytkowaniem lub dbaniem o bezpieczeństwo serwera, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/). Więcej informacji znajduje się w sekcji "Sprawdź również".
>

## Wymagania początkowe

- [Serwer dedykowany](https://www.ovhcloud.com/pl/bare-metal/) w ramach konta OVHcloud.
- Wszystkie informacje o protokole IPv6 (prefiks, brama itd.).
- Podstawowa wiedza z zakresu [protokołu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) i sieci.

> [!warning]
> Serwery Kimsufi są dostarczane z jednym blokiem IPv6 (/128). IPv6 zostanie automatycznie skonfigurowane podczas instalacji systemu operacyjnego.
>

## W praktyce

Poniższe sekcje zawierają konfiguracje aktualnie oferowanych przez nas dystrybucji oraz najczęściej używane dystrybucje/systemy operacyjne. Pierwszy etap polega zawsze na połączeniu się z Twoim serwerem przez SSH lub za pomocą sesji połączenia GUI (RDP w przypadku serwera Windows).

W przypadku serwerów dedykowanych pierwszy adres IPv6 deklarowany jest jako 2607:5300:xxxx:xxxx:::/64. Na przykład, jeśli przypisaliśmy do Twojego serwera zakres adresów IPv6: `2607:5300:abcd:efgh::/64`, pierwszym adresem IPv6 jest: `2607:5300:abcd:efgh::/64`.

Pierwszy adres IPv6 jest domyślnie skonfigurowany w większości najnowszych dystrybucji Linux, które proponujemy do instalacji, więc brama jest już zawarta w pliku konfiguracyjnym. W większości przypadków nie trzeba dodawać go ręcznie.

Przed rozpoczęciem operacji zapoznaj się z poniższą tabelą zawierającą terminologię, która ułatwi Ci realizację poszczególnych operacji. Odnosi się on do terminów, których będziemy używać w tej dokumentacji:

|Termin|Opis|Przykład|
|---|---|---|
|YOUR_IPV6|Jest to adres IPv6 bloku IPv6 przypisanego do Twojego serwera|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Jest to prefiks (lub *netmask*) Twojego bloku IPv6, zwykle 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Jest to brama (lub *gateway*) Twojego bloku IPv6|2607:5300:xxxx:ff:ff:ff:ff lub fe80::1|

W naszych przykładach użyjemy edytora tekstu `nano`. Oczywiście możesz użyć dowolnego edytora tekstu.

### Brama domyślna (Gateway)

Pierwszy etap polega na pobraniu bramy (gateway) IPv6 przypisanej do Twojego serwera. Możesz to wykonać jedną z dwóch dostępnych metod. Przejdź w dalszej części przewodnika do tej, której chciałbyś użyć.

- [Uzyskaj informacje o sieci w Panelu klienta](#viacontrolpanel).
- [Uzyskaj informacje o sieci za pośrednictwem API](#viaapi).

### W Panelu klienta <a name="viacontrolpanel"></a>

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w sekcji `Serwer dedykowany`{.action}.

Brama IPv6 przypisana do Twojego serwera jest wyświetlana w sekcji `Sieć` w zakładce `Informacje ogólne`{.action}. Po skopiowaniu przejdź do etapu 2 « [Zastosuj konfigurację adresu IPv6](#applyipv6) ».

![configureipv6](images/ipv6_information.png){.thumbnail}

### Poprzez API OVHcloud <a name="viaapi"></a>

Innym sposobem pobierania informacji dotyczących sieci jest [korzystanie z API OVHcloud](/pages/manage_and_operate/api/first-steps).

Wykonaj następujące wywołanie API, wskazując wewnętrzną nazwę serwera (przykład: `ns3956771.ip-169-254-10.eu`)

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network

Pamiętaj, że "0" głowicy można usunąć w bramie IPv6.

Przykład:

IPv6_GATEWAY: `2607:5300:60:62FF:00FF:00FF:00FF` można również zapisać jako `2607:5300:60:62FF:FF:FF:FF`.

> [!warning]
> 
> Zanim zmodyfikujesz plik konfiguracyjny, zawsze utwórz kopię zapasową oryginału, aby móc powrócić w przypadku problemu. 
> 


### Debian i systemy operacyjne oparte na Debianie (z wyjątkiem Debiana 12)

Poniższy przykład konfiguracji opiera się na dystrybucji Debian 11 (Bullseye).

> [!warning]
>
> Przed wykonaniem poniższych kroków zalecamy wyłączenie narzędzi autoconf IPv6 i anonsowania routera, aby zapobiec wystąpieniu znanych problemów. W tym celu należy dodać następujące wiersze do pliku `sysctl.conf`, który znajduje się w katalogu /etc/sysctl.conf:
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Po dodaniu wierszy można zastosować te reguły, wykonując następujące polecenie: `sudo sysctl -p`.
> 

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

```sh
ssh user@serverIP
```

#### Krok 2: Tworzenie kopii zapasowej

Plik konfiguracyjny sieci serwera znajduje się w `/etc/network/interfaces.d`. Przed kontynuowaniem utwórz kopię zapasową pliku za pomocą jednego z poniższych poleceń:

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### Krok 3: Modyfikowanie pliku konfiguracji sieci

Nie należy modyfikować istniejących linii w pliku konfiguracyjnym. Dodaj linie dla konfiguracji IPv6, zastępując `YOUR_IPv6` i `IPv6_PREFIX` własnymi wartościami. W tym przykładzie interfejs sieciowy nazywa się `eth0`. Interfejs serwera może być inny.

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address YOUR_IPv6
    netmask IPv6_PREFIX

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Debian 10**

```consile
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 64

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```

Dodatkowe adresy IPv6 mogą być dodane za pomocą następujących linii w pliku konfiguracyjnym: `up ip -6 addr add ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`, `up ip -6 addr add ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`, itd.

Aby upewnić się, że protokół IPv6 jest włączony lub wyłączony, gdy interfejs eth0 jest włączony lub wyłączony, należy dodać następujący wiersz do konfiguracji:

`down ip -6 addr del ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`<br>
`down ip -6 addr del ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`

**Przykład konfiguracji:**.

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Dodawanie dodatkowych adresów IPv6:


```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64
    up ip -6 addr add 2607:5300:adce:f2cd::2/64 dev eth0
    up ip -6 addr add 2607:5300:adce:f2cd::3/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::2/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::3/64 dev eth0

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Krok 4: Zapisz plik i zastosuj zmiany

Zapisz zmiany wprowadzone w pliku, a następnie uruchom ponownie sieć lub serwer, aby zastosować zmiany.

```sh
sudo /etc/init.d/networking restart
```

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```sh
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

Jeśli nie możesz wysłać polecenia ping na ten adres IPv6, sprawdź konfigurację i spróbuj ponownie. Upewnij się też, że komputer, z którego przeprowadzasz test, jest połączony za pośrednictwem protokołu IPv6. Jeśli połączenie wciąż nie działa, sprawdź konfigurację w [trybie ratunkowym (rescue)](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Fedora 38 i późniejsze wersje

Fedora używa teraz plików kluczy (*keyfiles*).
Fedora wcześniej używała profili sieciowych przechowywanych przez NetworkManager w formacie ifcfg w katalogu `/etc/sysconfig/network-scripts/`.<br>
Ponieważ ifcfg jest obecnie przestarzały, NetworkManager nie tworzy już domyślnie nowych profili w tym formacie. Plik konfiguracyjny można teraz znaleźć w `/etc/NetworkManager/system-connections/`.

W tym przykładzie nasz plik nosi nazwę `cloud-init-eno1.nmconnection`.

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

```sh
ssh user@serverIP
```

#### Krok 2: Utwórz kopię zapasową

> [!primary]
> 
> Zwróć uwagę, że nazwa pliku sieciowego w naszym przykładzie może różnić się od Twojej. Zastąp ją nazwą swojego pliku.
>

Pierwszą rzeczą do zrobienia jest wykonanie kopii pliku źródłowego, aby móc do niego wrócić w dowolnym momencie:


```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

#### Krok 3: Modyfikowanie pliku konfiguracji sieci

Zmodyfikuj plik, dodając następujące linie, nie zmieniając niczego w oryginalnym pliku. Zastąp elementy ogólne (tj. `YOUR_IPV6` i `IPv6_PREFIX`) własnymi wartościami. Pominęliśmy również konfigurację IPv4, aby uniknąć nieporozumień, ale konfiguracja IPv6 jest wykonywana w tym samym pliku konfiguracyjnym.

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=YOUR_IPV6/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Jeśli konieczne jest skonfigurowanie większej liczby adresów IPv6, konfiguracja powinna wyglądać następująco:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=ADDITIONAL_IPV6_1/IPv6_PREFIX
address3=ADDITIONAL_IPV6_2/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Przykład konfiguracji:**.

```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

Następnie modyfikujemy plik:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Dodawanie dodatkowych adresów IPv6:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
address3=2607:5300:adce:f2cd::2/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### Krok 4: Zapisz plik i zastosuj zmiany

Zapisz zmiany wprowadzone w pliku, a następnie uruchom ponownie sieć lub serwer, aby zastosować zmiany.

```sh
sudo systemctl restart NetworkManager
```

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```sh
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

Jeśli nie możesz wysłać polecenia ping na ten adres IPv6, sprawdź konfigurację i spróbuj ponownie. Upewnij się też, że komputer, z którego przeprowadzasz test, jest połączony za pośrednictwem protokołu IPv6. Jeśli połączenie wciąż nie działa, sprawdź konfigurację w [trybie ratunkowym (rescue)](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).


### Debian 12, Ubuntu 20.04 i późniejsze wersje

Poniższa przykładowa konfiguracja jest oparta na Ubuntu 22.04 (Jammy Jellyfish).

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/netplan/`. Domyślnie główny plik konfiguracyjny nosi nazwę `50-cloud-init.yaml`.

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

```sh
ssh user@serverIP
```

#### Krok 2: Tworzenie pliku konfiguracji sieci

Najlepszym podejściem jest utworzenie oddzielnego pliku konfiguracyjnego z rozszerzeniem .yaml do konfiguracji adresów IPv6 w katalogu `/etc/netplan/`. W ten sposób można łatwo przywrócić zmiany w przypadku wystąpienia błędu.

W naszym przykładzie nasz plik nosi nazwę `51-cloud-init-ipv6.yaml`:

```sh
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

#### Krok 3: Modyfikacja pliku konfiguracji sieci

Korzystając z edytora tekstu, edytuj plik `51-cloud-init-ipv6.yaml`, dodając następujące linie do pliku, jak pokazano w poniższym przykładzie.

Zastąp elementy ogólne (tj. `YOUR_IPV6` i `IPV6_PREFIX`) oraz interfejs sieciowy (jeśli twój serwer nie używa **eno3**) własnymi wartościami.

```yaml
network:
    version: 2
    ethernets:
         eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPV6_PREFIX
```

Jeśli konieczne jest skonfigurowanie kilku adresów IPv6, konfiguracja powinna wyglądać następująco:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
              - ADDITIONAL_IPV6_1/IPv6_PREFIX
              - ADDITIONAL_IPV6_2/IPv6_PREFIX
```

> [!warning]
>
> Ważne jest przestrzeganie wyrównania każdego elementu tego pliku, jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Potrzebny jest tylko klawisz spacji. 
>

**Przykład konfiguracji:**

```sh
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Następnie modyfikujemy:

```yaml
network:
    version: 2
    ethernets:
          eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
```

Dla kilku adresów IPV6:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
              - 2607:5300:adce:f2cd::2/64
              - 2607:5300:adce:f2cd::3/64
```

#### Krok 4: Przetestuj i zastosuj konfigurację

Konfigurację można przetestować za pomocą następującego polecenia:

```sh
sudo netplan try
```

Jeśli jest poprawna, zastosuj ją za pomocą następującego polecenia:

```sh
sudo netplan apply
```

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```sh
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

Jeśli nie możesz wysłać polecenia ping na ten adres IPv6, sprawdź konfigurację i spróbuj ponownie. Upewnij się też, że komputer, z którego przeprowadzasz test, jest połączony za pośrednictwem protokołu IPv6. Jeśli połączenie wciąż nie działa, sprawdź konfigurację w [trybie ratunkowym (rescue)](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### CentOS 7, Alma Linux (8 i 9) i Rocky Linux (8 i 9)

Poniższa przykładowa konfiguracja oparta jest na systemie CentOS 7.

Plik konfiguracji sieci znajduje się w katalogu `/etc/sysconfig/network-scripts`. W naszym przykładzie nosi on nazwę `ifcfg-eth0`.

#### Krok 1: połączenie z serwerem przy użyciu protokołu SSH

```sh
ssh user@serverIP
```

#### Krok 2: Utwórz kopię zapasową

> [!primary]
> 
> Należy pamiętać, że nazwa pliku sieciowego w naszym przykładzie może różnić się od twojej. Dostosuj ją do swojej nazwy pliku.
>

Przede wszystkim wykonaj kopię pliku konfiguracyjnego, aby móc do niego wrócić w dowolnym momencie:

```sh
sudo cp -r /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

#### Krok 3: Modyfikacja pliku konfiguracyjnego sieci

W otwartym pliku konfiguracyjnym dodaj następujące wiersze, jeśli ich brakuje. Zastąp elementy ogólne (tj. `YOUR_IPv6`, `IPV6_GATEWAY` i `IPV6_PREFIX`) swoimi konkretnymi wartościami. Pominęliśmy konfigurację IPv4, aby uniknąć nieporozumień, ale konfiguracja IPv6 jest wykonywana w tym samym pliku konfiguracyjnym.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

W przypadku systemów Alma Linux i Rocky linux zawartość pliku konfiguracyjnego może różnić się od przedstawionej powyżej, w którym to przypadku wystarczy dodać brakujące elementy. Nie zastępuj niczego w oryginalnym pliku.

Jeśli potrzebujesz więcej adresów IPv6 na komputerze, dodaj je w wierszu `IPV6ADDR_SECONDARIES`, rozdzielając spacją.


```console
IPV6ADDR_SECONDARIES="ADDITIONAL_IPV6_1/IPV6_PREFIX ADDITIONAL_IPV6_2/IPV6_PREFIX etc..."
```

**Przykład konfiguracji:**

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

Następnie modyfikujemy plik konfiguracyjny:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::/64
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
```

Dla kilku adresów IPV6:


```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
IPV6ADDR_SECONDARIES="2607:5300:adce:f2cd::1/64 2607:5300:adce:f2cd::2/64"
```

#### Krok 4: Zapisz plik i zastosuj zmiany

Zapisz zmiany w pliku, a następnie uruchom ponownie sieć za pomocą jednego z poniższych poleceń:

```sh
sudo systemctl restart network
```

**Dla Alma Linux i Rocky Linux**

```sh
sudo systemctl restart NetworkManager
```

Można również ponownie uruchomić serwer, aby zastosować zmiany.

#### Krok 5: testowanie łączności IPv6

Łączność IPv6 można przetestować, wykonując poniższe polecenia:

```sh
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

Jeśli nie możesz wysłać polecenia ping na ten adres IPv6, sprawdź konfigurację i spróbuj ponownie. Upewnij się też, że komputer, z którego przeprowadzasz test, jest połączony za pośrednictwem protokołu IPv6. Jeśli połączenie wciąż nie działa, sprawdź konfigurację w [trybie ratunkowym (rescue)](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Windows Server 2016 i nowsze wersje

#### Krok 1: połączenie z serwerem przy użyciu protokołu RDP

Więcej informacji zawiera [ten przewodnik](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

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

Wprowadź konfigurację IPv6 (`Adres IPv6` i `Default Gateway`), zaznacz kratkę `Zatwierdź parametry wychodząc` i kliknij przycisk `OK`{.action}, aby zatwierdzić zmiany.

![Properties](images/ipv6_configuration.png){.thumbnail}

### Diagnoza

Skonfigurowałeś IPv6, ale nic nie działa? 

Istnieje prosta procedura pozwalająca określić, czy błąd występuje w konfiguracji, czy w sieci OVHcloud.

Najpierw [przełącz serwer w tryb ratunkowy](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Następnie użyj następujących poleceń, aby skonfigurować IPv6 w trybie niepersystentnym, zastępując "YOUR_IPV6", "IPV6_PREFIX" i "IPV6_GATEWAY" własnymi informacjami:

```sh
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Przetestuj swoją sieć ponownie, używając na przykład ping6:

```sh
ping6 ipv6.google.com
```

Jeśli serwer odpowiada, prawdopodobnie jeden z kroków w początkowej konfiguracji nie był rygorystycznie przestrzegany.

W każdym przypadku nie wahaj się [skontaktować się z naszym zespołem pomocy technicznej](https://help.ovhcloud.com/csm?id=csm_get_help), aby poprosić o sprawdzenie konfiguracji. Będziesz musiał podać:

- Nazwa i wersja systemu operacyjnego używanego na serwerze.
- Nazwa pliku konfiguracji sieci i katalog, w którym się on znajduje. 
- Treść tego pliku.

## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
