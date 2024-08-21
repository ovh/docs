---
title: "Konfiguracja IPv6 na serwerze VPS"
excerpt: "Dowiedz się, jak skonfigurować IPv6 na VPS OVHcloud"
updated: 2024-08-08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

IPv6 to najnowsza wersja *Internet Protocol* (IP). Każdy serwer VPS OVHcloud jest dostarczany z jednym adresem IPv4 oraz adresem IPv6. Domyślnie skonfigurowany jest tylko adres IPv4. Jeśli chcesz skonfigurować IPv6, rób to ręcznie w systemie.

**Dowiedz się, jak skonfigurować IPv6 na serwerze VPS OVHcloud za pomocą kilku metod.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, za które w pełni odpowiadasz - nie mając dostępu do tych maszyn, nie możemy być ich administratorem. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
> 

## Wymagania początkowe

- Posiadanie [serwera VPS OVHcloud](https://www.ovhcloud.com/pl/vps/){.external}.
- Połączenie z serwerem VPS przez SSH (dostęp root) lub przez zdalny pulpit (Windows).
- Posiadanie podstawowej wiedzy w zakresie sieci.
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external} lub [API OVHcloud](https://api.ovh.com/).

## W praktyce

Poniższe sekcje zawierają konfiguracje dla aktualnie oferowanych przez nas dystrybucji oraz dla najpopularniejszych dystrybucji/systemów operacyjnych. Pierwszy etap polega zawsze na połączeniu się z serwerem przez SSH lub sesję połączenia GUI (RDP w przypadku VPS Windows).

> [!warning]
>
> Pamiętaj, że w najnowszych systemach operacyjnych Linux, które proponujemy dla serwerów VPS, adres IPv6 jest skonfigurowany domyślnie. W tym przypadku nie musisz jej konfigurować. Przed wprowadzeniem jakichkolwiek zmian sprawdź plik konfiguracyjny systemu operacyjnego.
>

Konfiguracja IPv6 na Twoim serwerze VPS składa się z kilku etapów. Będziesz regularnie proszony o wprowadzenie poleceń lub spersonalizowanie konfiguracji Twojego serwera. 

Przed rozpoczęciem operacji zapoznaj się z poniższą tabelą zawierającą terminologię, która ułatwi Ci realizację poszczególnych operacji. Poniżej zamieszczamy terminologię, której będziemy używać w tej dokumentacji:

|Nazwa|Opis |Przykład|
|---|---|---|
|YOUR_IPV6|Jest to adres IPv6 przypisany do Twojej usługi|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Jest to prefiks (lub *netmask*) Twojego bloku IPv6, zwykle 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Jest to brama (lub *gateway*) Twojego bloku IPv6|2001:xxxx:xxxxx:xxxx:xxxx:xxxx:xxxx:zzz|

### Etap 1: uzyskanie niezbędnych informacji dotyczących sieci

Pierwszy etap polega na pobraniu adresu IPv6 oraz bramy IPv6 przypisanych do Twojego serwera. Możesz to wykonać jedną z dwóch dostępnych metod. Przejdź w dalszej części przewodnika do tej, której chciałbyś użyć.

- [Uzyskanie niezbędnych informacji dotyczących sieci w Panelu klienta](#viacontrolpanel).
- [Uzyskanie niezbędnych informacji dotyczących sieci za pomocą API](#viaapi).

#### W panelu klienta <a name="viacontrolpanel"></a>

Zaloguj się do [Panelu client OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

Adres IPv6 i brama IPv6 przypisane do Twojego serwera wyświetlają się w sekcji `IP`. Zapisz adres i bramę, po czym przejdź do etapu 2 “[Konfiguracja adresu IPv6](#applyipv6)”.

![configureipv6](images/vps_ipv6_information.png){.thumbnail}

#### Za pośrednictwem API OVHcloud <a name="viaapi"></a>

Przejdź do strony WWW i zaloguj się <https://api.ovh.com/console/> do strony za pomocą identyfikatora OVHcloud. Następnie użyj dwóch podanych poniżej komend API.

Pierwsze umożliwia pobranie adresu IPv6 przypisanego do Twojego serwera.

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips
>

Drugie zapytanie API umożliwia pobranie bramy IPv6 przypisanej do Twojego serwera.

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/ips/{ipAddress}
>

Po pobraniu adresów przejdź do etap 2 "[Zastosuj konfigurację IPv6](#applyipv6)".

### Etap 2: zastosuj konfigurację IPv6 <a name="applyipv6"></a>

Kiedy posiadasz już informacje niezbędne do konfiguracji IPv6, zaloguj się przez SSH do VPS. Więcej informacji na temat SSH znajdziesz w naszym przewodniku “[Wprowadzenie do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction){.external}”.

Istnieje kilka metod konfiguracji IPv6. W zależności od Twojego przypadku przejdź do metody, której chcesz użyć.

- [Konfiguracja nietrwała](#nonpersistent).
- [Konfiguracja trwała dla systemu Debian i pochodnych (Ubuntu, Crunchbang, SteamOS…)](#persistentdebian).
- [Konfiguracja trwała dla systemu Redhat i pochodnych (CentOS, Rocky Linux, Alma Linux…)](#persistentredhat).
- [Konfiguracja trwała dla fedora](#persistentfedora)
- [Konfiguracja trwała dla Windows Server](#persistentwindows).

#### Konfiguracja nietrwała <a name="nonpersistent"></a>

> [!warning]
>
> Utracisz tę konfigurację po zrestartowaniu Twojego serwera VPS (nietrwała konfiguracja). 
> 

Po połączeniu się przez SSH z Twoim serwerem VPS wprowadź następujące polecenia. Pamiętaj o spersonalizowaniu w poleceniach:

- elementów ogólnych (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) przy użyciu uprzednio pobranych informacji;
- interfejsu sieci, jeśli sieć, której używasz nie ma oznaczenia **eth0**.

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Konfiguracja trwała dla systemu Debian i pochodnych (Ubuntu, Crunchbang, SteamOS...) <a name="persistentdebian"></a>

> [!warning]
>
> Zanim zmodyfikujesz plik konfiguracyjny, zawsze utwórz kopię zapasową oryginału w przypadku problemu.
>

Istnieją dwie metody konfiguracji Twojej sieci zgodnie z systemem operacyjnym zainstalowanym na Twoim serwerze:

- **Debian 10 i 11**: użyj [metody bazującej na pliku *interfaces*](#interfaces);

- **Debian 12, Ubuntu 20.04 i późniejszych wersji**: użyć [metody bazującej na funkcji *Netplan*](#netplan).

W niektórych przypadkach może to nie być metoda określona powyżej. Aby się upewnić co do metody, którą należy zastosować, przeprowadź nawigację w systemie. W razie potrzeby odwiedź stronę <https://netplan.io/> internetową.

> [!primary]
>
> Pamiętaj, że dokładne nazwy plików mogą się różnić.
>

##### Konfiguracja plików *interfaces* <a name="interfaces"></a>

Domyślnie pliki konfiguracyjne znajdują się w katalogu`/etc/network/interfaces.d/`

Najczęściej zalecaną metodą jest utworzenie pliku konfiguracyjnego w katalogu `/etc/network/interfaces.d/`.

W naszym przykładzie plik nosi nazwę `51-cloud-init-ipv6`:


```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Dzięki temu możesz w prosty sposób oddzielić konfigurację IPv6 i przywrócić zmiany w przypadku wystąpienia błędu.

Dodaj następujące wiersze do pliku. Zastąp ogólne elementy (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy (jeśli Twój serwer nie używa **eth0**) Twoimi wartościami spersonalizowanymi.

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Oto konkretny przykład:

```console
auto eth0
iface eth0 inet6 static
mtu 1500
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

Następnie zrestartuj usługę sieciową, używając jednego z poniższych poleceń:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

Możesz również dodać powyższą konfigurację do jednego z następujących plików (z uprawnieniami *sudo*), w zależności od generacji systemu operacyjnego zainstalowanego na serwerze:

- plik `/etc/network/interfaces`
- plik `/etc/network/interfaces.d/50-cloud-init.cfg`

Zalecamy zapisanie odpowiedniego pliku konfiguracyjnego. Na przykład wpisz następujące polecenie:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

Będziesz mógł wówczas anulować zmiany za pomocą następujących poleceń:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

##### Konfiguracja przy użyciu Netplan <a name="netplan"></a>

Pliki konfiguracyjne sieci znajdują się w katalogu`/etc/netplan/`. Domyślnie główny plik konfiguracyjny ma nazwę `50-cloud-init.yaml`.

Najlepszym rozwiązaniem jest utworzenie oddzielnego pliku konfiguracyjnego w celu skonfigurowania adresów IPv6 w katalogu`/etc/netplan/`. Dzięki temu możesz w prosty sposób wrócić do zmian w przypadku błędu.

W naszym przykładzie plik nosi nazwę `51-cloud-init-ipv6.yaml`:

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Będziesz mógł wówczas anulować zmiany za pomocą następujących poleceń:

Następnie zmodyfikuj plik `51-cloud-init-ipv6.yaml`, dodając następujące wiersze konfiguracji IPv6. Zastąp elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy (jeśli Twój serwer nie używa **eth0**) określonymi wartościami.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
# If IPV6_PREFIX is 128 then add link route to gateway
#              - to: IPv6_GATEWAY
#                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

Oto konkretny przykład (z prefiksem /128):

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: 2607:5300:201:abcd::1
                scope: link
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> Ważne jest przestrzeganie wyrównania każdego elementu tego pliku, jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Potrzebny jest tylko klawisz spacji.
>

Możesz przetestować konfigurację za pomocą polecenia:

```bash
sudo netplan try
```

Jeśli jest poprawna, zastosuj ją za pomocą następującego polecenia:

```bash
sudo netplan apply
```

#### Konfiguracja trwała dla Red Hat i jego pochodnych (CentOS, Rocky Linux, Alma Linux, itp.) <a name="persistentredhat"></a>

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/sysconfig/network-scripts/`. Zalecamy, aby rozpocząć od zapisania odpowiedniego pliku konfiguracyjnego. Na przykład skopiuj plik `ifcfg-eth0` za pomocą poniższych poleceń. W razie potrzeby zastąp **eth0** rzeczywistym interfejsem.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Będziesz mógł wówczas anulować zmiany za pomocą następujących poleceń:

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Następnie zmodyfikuj plik `ifcfg-eth0`, dodając konfigurację IPv6 Twojego serwera. Zastąp elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) Twoimi wartościami spersonalizowanymi.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Oto konkretny przykład:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

**W systemie CentOS 7 utwórz plik routingu, uzupełniając powyższe kroki:**

- Utwórz plik (z uprawnieniami *sudo*) wskazujący domyślne trasy IPv6:

```bash
sudo touch /etc/sysconfig/network-scripts/route6-eth0
```

- Zmień plik i dodaj poniższe linie. Zastąp elementy ogólne (*IPV6_GATEWAY* i **eth0**, jeśli to konieczne) Twoimi wartościami spersonalizowanymi.

```console
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Oto konkretny przykład:

```console
2607:5300:201:abcd::1 dev eth0
default via 2607:5300:201:abcd::1
```

Następnie zrestartuj Twoją usługę sieciową, aby umożliwić systemowi zastosowanie nowej konfiguracji za pomocą jednego z poniższych poleceń:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Konfiguracja trwała dla Fedora 37 i nowszych wersji <a name="persistentfedora"></a>

Plik konfiguracji sieci znajduje się w katalogu `/etc/NetworkManager/system-connections/`. Zalecamy, aby najpierw wykonać kopię zapasową odpowiedniego pliku konfiguracyjnego. W naszym przykładzie nasz plik nosi nazwę `cloud-init-eth0.nmconnection`, dlatego kopiujemy plik `cloud-init-eth0.nmconnection` przy użyciu następujących poleceń. W razie potrzeby zmień **eth0** na aktualny interfejs.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

Następnie edytujemy plik `cloud-init-eth0.nmconnection`, dodając tylko wiersze dla konfiguracji IPv6 serwera. Zastąp elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) określonymi wartościami.

Jeśli przyjmiemy, że Twój interfejs to **eth0**, konfiguracja powinna wyglądać następująco:

```console
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/IPV6_PREFIX
route1=::/0,IPV6_GATEWAY
```

Pominęliśmy konfigurację IPv4, aby uniknąć pomyłek, ale konfiguracja IPv6 znajduje się w tym samym pliku konfiguracyjnym.

Oto konkretny przykład:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:201:abcd::7c5/128
route1=::/0,2607:5300:201:abcd::1
```

#### Konfiguracja trwała dla Windows Server <a name="persistentwindows"></a>

Domyślnie IPv6 nie jest skonfigurowany na serwerach Windows. Aby go aktywować, otwórz `Panel konfiguracyjny`{.action} i kliknij `Wyświetl stan i zadania sieci`{.action}, a następnie `Zmień parametry karty`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Kliknij `Ethernet`{.action}, aby otworzyć ustawienia i kliknij przycisk `Właściwości`{.action}, aby wyświetlić `Właściwości Ethernet`.

Wybierz `protokół internetowy w wersji 6 (TCP/IPv6)`{.action} i kliknij przycisk `Właściwości`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

W oknie Właściwości IPv6 wybierz `Użyj następującego` adresu IPv6. Wprowadź adresy IP, które pobrałeś na pierwszym etapie.

Możesz również wprowadzić wybrane przez Ciebie rezolucje DNS IPv6, używając `następującego` adresu serwera DNS. Nie jest to obowiązkowe, jeśli resolwery DNS w konfiguracji IPv4 są już funkcjonalne.

Następnie zaznacz kratkę `Zatwierdź parametry, wychodząc` i kliknij przycisk `OK`{.action}, aby zatwierdzić zmiany. Wyświetli się komunikat błędu, jeśli wskazana brama nie znajduje się w tej samej podsieci IPv6 (/128 i /64, na przykład). Możesz pominąć tę wiadomość i przejść do następnego etapu.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### Etap 3: Sprawdź konfigurację i przetestować połączenie.

W celu sprawdzenia, czy konfiguracja działa, istnieje kilka możliwych zamówień, w zależności od systemu operacyjnego.

- **W przypadku systemu GNU/Linux** dwa przykłady interfejsu **eth0** (do dostosowania w razie potrzeby):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2607:5300:201:abcd::7c5/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 2607:5300:201:abcd::7c5/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Aby przetestować połączenie, możesz użyć następującej komendy:

```bash
ping6 proof.ovh.net
```

- **W przypadku systemu Windows** użyj następującej komendy:

```powershell
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::7c5/128
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2607:5300:201:abcd::1
                                       51.xxx.xxx.y
```

Aby przetestować połączenie, możesz użyć następującej komendy:

```powershell
ping6 proof.ovh.net
```

Możesz również przetestować połączenie z innym zdalnym serwerem. Aby operacja ta działała, konieczne jest jednak, aby adres IPv6 był aktywny na zdalnym serwerze.

> [!primary]
>
> Jeśli mimo modyfikacji IPv6 nie działa na Twoim serwerze, możliwe jest (w rzadkich przypadkach) wprowadzenie dodatkowych zmian. W takim przypadku wykonaj następujące operacje:
>
> - W zależności od systemu operacyjnego spróbuj zastąpić prefiks (lub *netmask*) Twojego adresu IP /128 i /64. Będzie to obejmować bramę IPv6 w Twojej podsieci.
>
> - Poza ponownym uruchomieniem usługi sieciowej może zaistnieć konieczność restartu serwera, aby sfinalizować konfigurację IPv6.
> 
> - W systemie Windows sprawdź, czy zapora pozwala na wykonywanie zleceń ICMP dla IPv6.

### Etap 4: Wyłącz zarządzanie siecią Cloud-init (opcjonalnie)

> [!primary]
>
> Etap ten nie ma zastosowania w przypadku systemów bazujących na Windowsie.
>

Cloud-init jest pakietem zainstalowanym domyślnie na instancjach VPS. Jest to framework do uruchomienia skryptu dostarczonego podczas tworzenia serwera lub jego restartu. Dzięki wdrożonej mechanice infrastruktura OpenStack wprowadza skrypty do środowiska cloud-init, a tym samym umożliwia konfigurację serwera.

W zależności od systemu operacyjnego cloud-init będzie zarządzać: siecią, nazwą hosta, plikiem resolv.conf lub automatycznym partycjonowaniem dysku twardego w przypadku aktualizacji.

W przypadku nowszych dystrybucji (takich jak CentOS, Debian 9, Ubuntu 16.x i nowsze) domyślna konfiguracja cloud.init może czasem automatycznie zresetować konfigurację sieci po uruchomieniu serwera.

W niektórych przypadkach zaleca się unikanie resetu poprzez wyłączenie automatycznego zarządzania siecią w usłudze Cloud-init. W tym celu użyj następującego polecenia pozwalającego utworzyć plik `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` zawierający wartość `network:{config: disabled}`:

```bash
sudo echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Zrestartuj serwer, aby operacja została uwzględniona. 
>

Aby powrócić do automatycznego zarządzania siecią za pomocą cloud-init, usuń nowo utworzony plik lub przenieś go do innego katalogu.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.