---
title: 'Konfiguracja IPv6 na serwerze VPS'
slug: konfiguracja-ipv6
excerpt: 'Dowiedz się, jak skonfigurować IPv6 na serwerze VPS od OVHcloud'
section: 'Sieć & IP'
order: 1
---

**Ostatnia aktualizacja z dnia 12-03-2020**

## Wprowadzenie

IPv6 to najnowsza wersja *Internet Protocol* (IP). Wszystkie serwery VPS dostarczane są klientom OVHcloud z adresem IPv4 oraz IPv6. Domyślnie skonfigurowany jest tylko adres IPv4. Możesz jednak również skonfigurować IPv6.

**Dowiedz się, jak skonfigurować IPv6 na serwerze VPS od OVHcloud.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, którymi samodzielnie zarządzasz. OVHcloud nie ma dostępu do Twoich serwerów i nie pełni funkcji administratora. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

## Wymagania początkowe

- Posiadanie [serwera VPS OVHcloud](https://www.ovhcloud.com/pl/vps/){.external}
- Zalogowanie się poprzez SSH do Twojego serwera VPS (dostęp root)
- Posiadanie podstawowej wiedzy w zakresie sieci
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, sekcja `Cloud`{.action}

## W praktyce

Konfiguracja IPv6 na Twoim serwerze VPS składa się z kilku etapów. Podczas każdego z nich zostaniesz poproszony o wprowadzenie poleceń lub spersonalizowanie konfiguracji Twojego serwera. 

Przed rozpoczęciem operacji zapoznaj się z poniższą tabelą zawierającą terminologię, której będziemy używać w dalszej części przewodnika:  

|Nazwa|Opis |Przykład|
|---|---|---|
|YOUR_IPV6|Jest to adres IPv6 przypisany do Twojej usługi|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Jest to prefiks (lub *netmask*) Twojego bloku IPv6.  Co do zasady jest to maska /128.|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Jest to brama Twojego bloku IPv6|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### Etap 1: uzyskanie niezbędnych informacji dotyczących sieci

Pierwszy etap polega na pobraniu adresu IPv6 oraz bramy IPv6 przypisanych do Twojego serwera. Możesz to wykonać jedną z dwóch dostępnych metod. Przejdź w dalszej części przewodnika do tej, której chciałbyś użyć:

- [Uzyskanie niezbędnych informacji dotyczących sieci w Panelu klienta](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#za-posrednictwem-panelu-klienta),
- [Uzyskanie niezbędnych informacji dotyczących sieci za pomocą API](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#za-posrednictwem-api-ovhcloud).

#### Za pośrednictwem Panelu klienta

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} > sekcja `Cloud`{.action}. Kliknij `Serwery`{.action} na pasku usług po lewej stronie, po czym wybierz odpowiedni serwer VPS. Następnie przejdź do sekcji `Informacje ogólne`{.action}.

Adres IPv6 i brama IPv6 przypisane do Twojego serwera wyświetlają się w sekcji `IP`. Zapisz adres i bramę, po czym przejdź do etapu 2 [Konfiguracji adresu IPv6](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#etap-2-konfiguracja-adresu-ipv6_1){.external}.

![configureipv6](images/configure-ipv6-step1.png){.thumbnail}

#### Za pośrednictwem API OVHcloud

Przejdź do strony WWW <https://api.ovh.com/console/> i zaloguj się, używając identyfikatora OVHcloud. Następnie użyj dwóch podanych poniżej komend API.

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

Zapisz adres i bramę, po czym przejdź do etapu 2 [Konfiguracji adresu IPv6](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#etap-2-konfiguracja-adresu-ipv6_1){.external}.

### Etap 2: konfiguracja adresu IPv6

Kiedy posiadasz już informacje niezbędne do konfiguracji IPv6, zaloguj się przez SSH do VPS. Więcej informacji na temat SSH znajdziesz w naszym przewodniku [Wprowadzenie do SSH](https://docs.ovh.com/pl/dedicated/ssh-wprowadzenie/){.external}.

Istnieje kilka metod konfiguracji IPv6. W zależności od Twojego przypadku przejdź do metody, której chcesz użyć:

- [Konfiguracja nietrwała](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#konfiguracja-nietrwala),
- [Konfiguracja trwała dla systemu Debian i pochodnych (Ubuntu, Crunchbang, SteamOS…)](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#konfiguracja-trwala-dla-systemu-debian-i-pochodnych-ubuntu-crunchbang-steamos),
- [Konfiguracja trwała dla systemu Redhat i pochodnych (CentOS, ClearOS…)](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#konfiguracja-trwala-dla-systemu-redhat-i-pochodnych-centos-clearos_1),
- [Aplikacja trwała dla Windows Server](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#konfiguracja-trwala-dla-systemu-windows-server).

#### Konfiguracja nietrwała

> [!warning]
>
> Tę konfigurację utracisz po zrestartowaniu Twojego serwera VPS (nietrwała konfiguracja).
> 

Po połączeniu się przez SSH z Twoim serwerem VPS wprowadź następujące polecenia. Pamiętaj o spersonalizowaniu w poleceniach:

- elementów ogólnych (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) przy użyciu uprzednio pobranych informacji;
- interfejsu sieci, jeśli sieć, której używasz nie ma oznaczenia **eth0**.

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Konfiguracja trwała dla systemu Debian i pochodnych (Ubuntu, Crunchbang, SteamOS…)

Istnieją dwie metody konfiguracji Twojej sieci. To, którą wybierzesz zależy od systemu operacyjnego zainstalowanego na Twoim serwerze:

- **Debian 8 i niższe wersje, Ubuntu 16.04 i niższe wersje**: zastosuj metodę bazującą na pliku „interfaces”;

- **Debian 9, Ubuntu 17.04 i późniejsze wersje**: zastosuj metodę bazującą na funkcji „Netplan”.

Możliwe, że w niektórych przypadkach (szczególnie w przypadku Debian 9) należy użyć metody nie wyszczególnionej powyżej. Aby się upewnić co do metody, którą należy zastosować, odszukaj w Twoim systemie, która metoda jest aktywna.  Jeśli potrzebujesz więcej informacji, przejdź do strony <https://netplan.io/>.

> [!warning]
>
> Przed wprowadzeniem jakichkolwiek modyfikacji w pliku konfiguracyjnym wykonaj jego kopię zapasową. W przypadku błędu będziesz mógł bez problemu wrócić do pierwotnej wersji.
> 

Przejdź teraz do metody odpowiedniej dla Twojego przypadku.

- [Konfiguracja pliku „interfaces”](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#konfiguracja-pliku-interfaces)
- [Konfiguracja przy użyciu funkcji Netplan](https://docs.ovh.com/pl/vps/konfiguracja-ipv6/#konfiguracja-przy-uzyciu-funkcji-netplan)

#####  Konfiguracja pliku „interfaces”

W zależności od generacji systemu operacyjnego zainstalowanego na serwerze zmodyfikuj za pomocą uprawnień *sudo*:

- plik `/etc/network/interfaces`;
- albo plik `/etc/network/interfaces.d/50-cloud-init.cfg`.

Zalecamy, abyś przed podjęciem jakichkolwiek działań wykonał kopię zapasową odpowiedniego pliku konfiguracyjnego. Możesz na przykład wprowadzić polecenie:

```bash
cp /etc/network/interfaces /etc/network/interfaces.back
```

Za pomocą poniższych poleceń będziesz mógł cofnąć wprowadzone zmiany:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.back /etc/network/interfaces
```

Kiedy jesteś już gotowy do przeprowadzenia konfiguracji, dodaj następujące wiersze poleceń do pliku konfiguracyjnego. Spersonalizuj ogólne elementy:(*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy , jeśli ten, którego używasz jest oznaczony inaczej niż **eth0**.

```
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Następnie uruchom ponownie usługę sieciową:

```bash
service networking restart
```

#####  Konfiguracja przy użyciu funkcji Netplan

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/netplan/`. Zalecamy, abyś przed podjęciem jakichkolwiek działań wykonał kopię zapasową odpowiedniego pliku konfiguracyjnego. W niniejszym przypadku skopiuj plik `50-cloud-init.yaml`, używając następujących poleceń:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Za pomocą poniższych poleceń będziesz mógł cofnąć wprowadzone zmiany:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Gdy będziesz gotowy do przeprowadzenia konfiguracji, utwórz kopię pliku IPv4, aby wprowadzić w nim odpowiadające Ci zmiany. 

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Następnie edytuj plik `51-cloud-init-ipv6.yaml` w taki sposób, aby zawierał konfigurację IPv6 Twojego serwera. Spersonalizuj ogólne elementy:(*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy , jeśli ten, którego używasz jest oznaczony inaczej niż **eth0**.

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
```

> [!warning]
>
> Bardzo ważne jest, abyś podczas zapisywania Twojego pliku zachował takie samo wyrównanie argumentów, jak jest to pokazane w powyższym przykładzie. Nie używaj tabulatora do tworzenia spacji. Korzystaj wyłącznie z klawisza spacji.
>

Następnie przetestuj Twoją konfigurację za pomocą polecenia:

```bash
netplan try
```

Jeśli konfiguracja jest poprawna, zastosuj ją, używając polecenia:

```bash
netplan apply
```

#### Konfiguracja trwała dla systemu Redhat i pochodnych (CentOS, ClearOS…).

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/sysconfig/network-scripts/`. Zalecamy, abyś przed podjęciem jakichkolwiek działań wykonał kopię zapasową odpowiedniego pliku konfiguracyjnego. Na przykład skopiuj plik `ifcfg-eth0`, używając następujących poleceń. **Spersonalizuj interfejs sieci, jeśli sieć, której używasz jest oznaczona inaczej niż eth0**.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Za pomocą poniższych poleceń będziesz mógł cofnąć wprowadzone zmiany:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Jak tylko będziesz gotowy, edytuj aktualnie używany plik konfiguracyjny i dodaj następujące wiersze poleceń. Pamiętaj, aby spersonalizować elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*).

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Następnie utwórz plik (z uprawnieniami sudo) wskazujący domyślne trasy.

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

Edytuj plik, personalizując poniższe elementy (*IPV6_GATEWAY* oraz interfejs **eth0**, jeśli to konieczne). 

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Po zakończeniu uruchom ponownie usługę sieciową, aby umożliwić systemowi zastosowanie nowej konfiguracji:

```bash
service network restart
```

#### Konfiguracja trwała dla systemu Windows Server

Domyślnie adres IPv6 nie jest skonfigurowany dla Windows Server. Aby go aktywować, otwórz `Panel konfiguracyjny`, kliknij `Wyświetl stan i zarządzanie siecią`{.action}, następnie `Zmodyfikuj parametry karty`{.action}.

![configureipv6](images/configure-ipv6-step2.png){.thumbnail}

Otwórz stan połączenia `Ethernet` i kliknij `Właściwości`{.action}. W nowym oknie ustaw kursor na nazwie `Protocole Internet version 6 (TCP/IPv6)`, aby się podświetliła, następnie kliknij przycisk `Właściwości`{.action}.

![configureipv6](images/configure-ipv6-step3.png){.thumbnail}

Następnie w tym samym oknie zaznacz kratkę „Użyj następującego adresu IPv6”. Uzupełnij poniższe pola informacjami pobranymi na pierwszym etapie. 

Poniżej „Użyj następującego adresu serwera DNS”, możesz wprowadzić do dowolne _resolwery_ DNS IPv6. Dodanie resolwerów może być opcjonalne, jeśli _resolwery _ wymienione w konfiguracji IPv4 już realizują to zadanie. 

Po uzupełnieniu elementów zaznacz kratkę `Zatwierdź ustawienia, zamykając okno`, następnie kliknij przyciski `OK`{.action}, aby zatwierdzić zmiany. Może pojawić się komunikat o błędzie w przypadku gdy wprowadzona brama nie jest w tej samej podsieci IPv6 (na przykład /128 i /64). Jeśli tak się stanie, zignoruj komunikat i przejdź do kolejnego etapu.

![configureipv6](images/configure-ipv6-step4.png){.thumbnail}

### Etap 3: weryfikacja konfiguracji i test połączenia 

Aby sprawdzić, czy konfiguracja działa, można skorzystać z jednego z kilku dostępnych poleceń w zależności od systemu operacyjnego. 

- **W przypadku systemu opartego o Linux** podajemy poniżej dwa przykłady interfejsu **eth0** (w razie potrzeby do dostosowania):

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

W celu przetestowania połączenia, użyj następującego polecenia: 

```bash
ping6 proof.ovh.net
```

- **W przypadku systemu opartego o Windows** użyj następujących poleceń: 

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

W celu przetestowania połączenia, użyj następującego polecenia: 

```
ping6 proof.ovh.net
```

Możesz również przetestować połączenie z innym zdalnym serwerem. Konieczne jest jednak, aby adres IPv6 był aktywny na tym serwerze, żeby operacja przebiegła pomyślnie. 

> [!primary]
>
> Jeśli mimo wykonania powyższych czynności IPv6 nie działa na Twoimi serwerze, możliwe, że w niektórych przypadkach należy przeprowadzić dodatkowe operacje. W razie potrzeby wykorzystaj do tego podane poniżej informacje.
>
> - W zależności od systemu operacyjnego spróbuj zmienić prefiks (lub *netmask*) Twojego adresu IP ze /128 na /64. Umożliwi to włączenie bramy IPv6 do Twojej podsieci.
>
> - Oprócz ponownego uruchomienia usługi sieciowej, konieczne może być ponowne uruchomienie serwera w celu sfinalizowania konfiguracji IPv6.
>

### Etap 4: wyłączenie zarządzania siecią przez cloud-init

> [!primary]
>
> Etap ten nie ma zastosowania w przypadku systemów bazujących na Windowsie.
>

Cloud-init jest pakietem zainstalowanym domyślnie na instancjach VPS. Jest to framework do uruchomienia skryptu dostarczonego podczas tworzenia serwera lub jego restartu. Dzięki wdrożonej mechanice infrastruktura OpenStack wprowadza skrypty do środowiska cloud-init, a tym samym umożliwia konfigurację serwera.

W zależności od systemu operacyjnego cloud-init będzie zarządzać: siecią, nazwą hosta, plikiem resolv.conf lub automatycznym partycjonowaniem dysku twardego w przypadku aktualizacji.

W przypadku nowszych dystrybucji (takich jak CentOS, Debian 9, Ubuntu 16.x i nowsze) domyślna konfiguracja cloud-init pozwala automatycznie przejść do uruchomienia serwera w celu zresetowania konfiguracji sieci.

Aby zachować kontrolę nad ustawieniami, wyłącz automatyczne zarządzanie sieci w **cloud-init**.  W tym celu użyj następującego polecenia pozwalającego utworzyć plik `/etc/cloud/cloud.cfg.d/98-disable-network-config.cf` zawierający wartość `network:{config: disabled}`:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

Po wykonaniu tej czynności ponownie uruchom serwer, aby efekty operacji stały się widoczne. 

Aby powrócić do automatycznego zarządzania siecią za pomocą cloud-init, usuń nowo utworzony plik lub przenieś go do innego katalogu.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.