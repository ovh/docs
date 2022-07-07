---
title: 'Konfiguracja IPv6 na serwerze VPS'
slug: konfiguracja-ipv6
excerpt: 'Dowiedz się, jak skonfigurować IPv6 na VPS OVHcloud'
section: 'Sieć & IP'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 18-01-2021**

## Wprowadzenie

IPv6 to najnowsza wersja *Internet Protocol* (IP). Każdy serwer VPS OVHcloud jest dostarczany z jednym adresem IPv4 oraz adresem IPv6. Domyślnie skonfigurowany jest tylko adres IPv4. Jeśli chcesz skonfigurować IPv6, rób to ręcznie w systemie.

**Dowiedz się, jak skonfigurować IPv6 na serwerze VPS OVHcloud za pomocą kilku metod.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, za które w pełni odpowiadasz - nie mając dostępu do tych maszyn, nie możemy być ich administratorem. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
> 

## Wymagania początkowe

- Posiadanie [serwera VPS OVHcloud](https://www.ovhcloud.com/pl/vps/){.external}.
- Połączenie z serwerem VPS przez SSH (dostęp root) lub przez zdalny pulpit (Windows)
- Posiadanie podstawowej wiedzy w zakresie sieci
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} lub [API OVHcloud](https://api.ovh.com/console/).

## W praktyce

> [!primary]
>
> Konfiguracje widoczne w tym przewodniku są podane, ponieważ mogą się one różnić w zależności od systemu operacyjnego, którego używasz na serwerze VPS.
> 

Konfiguracja IPv6 na Twoim serwerze VPS składa się z kilku etapów. Będziesz regularnie proszony o wprowadzenie poleceń lub spersonalizowanie konfiguracji Twojego serwera. 

Przed rozpoczęciem operacji zapoznaj się z poniższą tabelą zawierającą terminologię, która ułatwi Ci realizację poszczególnych operacji. Poniżej zamieszczamy terminologię, której będziemy używać w tej dokumentacji:

|Nazwa|Opis |Przykład|
|---|---|---|
|YOUR_IPV6|Jest to adres IPv6 przypisany do Twojej usługi|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Jest to prefiks (lub *netmask*) Twojego bloku IPv6, zwykle 128|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Jest to brama Twojego bloku IPv6|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Etap 1: uzyskanie niezbędnych informacji dotyczących sieci

Pierwszy etap polega na pobraniu adresu IPv6 oraz bramy IPv6 przypisanych do Twojego serwera. Możesz to wykonać jedną z dwóch dostępnych metod. Przejdź w dalszej części przewodnika do tej, której chciałbyś użyć.

- [Uzyskanie niezbędnych informacji dotyczących sieci w Panelu klienta](#viacontrolpanel).
- [Uzyskanie niezbędnych informacji dotyczących sieci za pomocą API](#viaapi).

#### W panelu klienta <a name="viacontrolpanel"></a>

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w części `Prywatny serwer wirtualny`{.action}.

Adres IPv6 i brama IPv6 przypisane do Twojego serwera wyświetlają się w sekcji `IP`. Zapisz adres i bramę, po czym przejdź do etapu 2 “[Konfiguracja adresu IPv6](#applyipv6)”.

![configureipv6](images/configure-ipv6-step1.png){.thumbnail}

#### Za pośrednictwem API OVHcloud <a name="viaapi"></a>

Przejdź do strony WWW i zaloguj się <https://api.ovh.com/console/> do strony za pomocą identyfikatora OVHcloud. Następnie użyj dwóch podanych poniżej komend API.

Pierwsze umożliwia pobranie adresu IPv6 przypisanego do Twojego serwera.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips
>

Drugie zapytanie API umożliwia pobranie bramy IPv6 przypisanej do Twojego serwera.

> [!api]
>
> @api {GET} /vps/{serviceName}/ips/{ipAddress}
>

Po pobraniu adresów przejdź do etapu 2 "[Zastosuj konfigurację IPv6](#applyipv6)".

### Etap 2: zastosuj konfigurację IPv6 <a name="applyipv6"></a>

Kiedy posiadasz już informacje niezbędne do konfiguracji IPv6, zaloguj się przez SSH do VPS. Więcej informacji na temat SSH znajdziesz w naszym przewodniku “[Wprowadzenie do SSH](../../dedicated/ssh-wprowadzenie/){.external}”.

Istnieje kilka metod konfiguracji IPv6. W zależności od Twojego przypadku przejdź do metody, której chcesz użyć.

- [Konfiguracja nietrwała](#nonpersistent).
- [Konfiguracja trwała dla systemu Debian i pochodnych (Ubuntu, Crunchbang, SteamOS…)](#persistentdebian).
- [Konfiguracja trwała dla systemu Redhat i pochodnych (CentOS, ClearOS…)](#persistentredhat).
- [Aplikacja trwała dla Windows Server](#persistentwindows).

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

- **Debian 11 i niższe, Ubuntu 16.04 i niższe**: użyj [metody bazującej na pliku *interfaces*](#interfaces);

- **Ubuntu 17.04 i późniejszych wersji**: skorzystaj z [metody bazującej na funkcji *Netplan*](#netplan).

W niektórych przypadkach może to nie być metoda określona powyżej. Aby się upewnić co do metody, którą należy zastosować, przeprowadź nawigację w systemie.  W razie potrzeby odwiedź stronę <https://netplan.io/> internetową.

> [!primary]
>
> Pamiętaj, że dokładne nazwy plików mogą się różnić.
>

##### Konfiguracja plików *interfaces* <a name="interfaces"></a>

Najczęściej zalecaną metodą jest utworzenie pliku konfiguracyjnego w katalogu `/etc/network/interfaces.d/`:

```bash
nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Dzięki temu możesz w prosty sposób oddzielić konfigurację IPv6 i przywrócić zmiany w przypadku wystąpienia błędu.

Dodaj następujące wiersze do pliku. Zastąp ogólne elementy (np. *YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy (jeśli Twój serwer nie używa **eth0**) Twoimi wartościami spersonalizowanymi.

```
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

Następnie zrestartuj usługę sieciową, używając jednego z poniższych poleceń:

```bash
service networking restart
```

```bash
systemctl restart networking
```

Możesz również dodać powyższą konfigurację do jednego z następujących plików (z uprawnieniami *sudo*), w zależności od generacji systemu operacyjnego zainstalowanego na serwerze:

- plik `/etc/network/interfaces`
- le fichier `/etc/network/interfaces.d/50-cloud-init.cfg`

Zalecamy zapisanie odpowiedniego pliku konfiguracyjnego. Na przykład wpisz następujące polecenie:

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Będziesz mógł wówczas anulować zmiany za pomocą następujących poleceń:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.back /etc/network/interfaces
```

##### Konfiguracja przy użyciu Netplan <a name="netplan"></a>

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/netplan/`. Zalecamy, aby rozpocząć od zapisania odpowiedniego pliku konfiguracyjnego. W tym przypadku skopiuj plik `50-cloud-init.yaml` za pomocą następujących poleceń:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Będziesz mógł wówczas anulować zmiany za pomocą następujących poleceń:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Zanim go zmodyfikujesz, utwórz kopię pliku konfiguracyjnego IPv6:

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Następnie zmodyfikuj plik `51-cloud-init-ipv6.yaml`, dodając konfigurację IPv6 Twojego serwera. Zastąp ogólne elementy (np. *YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy (jeśli Twój serwer nie używa **eth0**) Twoimi wartościami spersonalizowanymi.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
            routes:
              - to: "IPv6_GATEWAY"
                scope: link
```

> [!warning]
>
> Ważne jest przestrzeganie wyrównania każdego elementu tego pliku, jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Potrzebny jest tylko klawisz spacji.
>

Możesz przetestować konfigurację za pomocą polecenia:

```bash
netplan try
```

Jeśli jest poprawna, zastosuj ją za pomocą następującego polecenia:

```bash
netplan apply
```

#### Konfiguracja trwała dla Red Hat i jego pochodnych (CentOS, ClearOS, itp.) <a name="persistentredhat"></a>

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/sysconfig/network-scripts/`. Zalecamy, aby rozpocząć od zapisania odpowiedniego pliku konfiguracyjnego. Na przykład skopiuj plik `ifcfg-eth0` za pomocą poniższych poleceń. W razie potrzeby zastąp **eth0** rzeczywistym interfejsem.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Będziesz mógł wówczas anulować zmiany za pomocą następujących poleceń:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Następnie zmodyfikuj plik `ifcfg-eth0`, dodając konfigurację IPv6 Twojego serwera. Zastąp elementy ogólne (tj. *YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) Twoimi wartościami spersonalizowanymi.

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

**W systemie CentOS 7 utwórz plik routingu, uzupełniając powyższe kroki:**

- Utwórz plik (z uprawnieniami *sudo*) wskazujący domyślne trasy IPv6:

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

- Zmień plik i dodaj poniższe linie. Zastąp elementy ogólne (*IPV6_GATEWAY* i **eth0**, jeśli to konieczne) Twoimi wartościami spersonalizowanymi.

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Następnie zrestartuj Twoją usługę sieciową, aby umożliwić systemowi zastosowanie nowej konfiguracji za pomocą jednego z poniższych poleceń:

```bash
service networking restart
```

```bash
systemctl restart networking
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
    inet6 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Aby przetestować połączenie, możesz użyć następującej komendy:

```bash
ping6 proof.ovh.net
```

- **W przypadku systemu Windows** użyj następującej komendy:

```
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2001:xxxx:xxxx:xxxx::zzzz
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2001:xxxx:xxxx:xxxx::y
                                       51.xxx.xxx.y
```

Aby przetestować połączenie, możesz użyć następującej komendy:

```
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
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Zrestartuj serwer, aby operacja została uwzględniona. 
>

Aby powrócić do automatycznego zarządzania siecią za pomocą cloud-init, usuń nowo utworzony plik lub przenieś go do innego katalogu.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.