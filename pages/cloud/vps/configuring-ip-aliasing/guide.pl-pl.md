---
title: 'Konfiguracja adresu IP w alias'
slug: ip-aliasing-vps
excerpt: 'Dowiedz się, jak dodać adresy IP Failover do konfiguracji VPS'
section: 'Sieć & IP'
---

**Ostatnia aktualizacja z dnia 8 kwietnia 2020 r**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

Alias IP (*IP aliasing* w języku angielskim) to specjalna konfiguracja sieci dla serwerów OVHcloud, która pozwala na przypisanie kilku adresów IP do jednego interfejsu sieciowego.

**Niniejszy przewodnik wyjaśnia, jak dodawać adresy IP Failover do Twojej konfiguracji sieci.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVH nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twoje ręce przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji „Sprawdź również”.
>

## Wymagania początkowe

- jednego [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- adresu IP Failover lub bloku IP Failover (RIPE)
- dostęp administratora (root) przez SSH lub remote desktop (Windows) na serwerze


## W praktyce

> [!primary]
>
Jeśli chcesz korzystać z najnowszej dystrybucji, odpowiednia procedura konfiguracji interfejsu sieciowego może wymagać dostosowań. W przypadku trudności zalecamy zapoznanie się z dokumentacją dotyczącą systemu operacyjnego. 
> 

Oto konfiguracje głównych dystrybucji i systemów operacyjnych.

### Debian 9

#### Etap 1: wyłącz automatyczną konfigurację sieci

Otwórz najpierw następujący plik, jak pokazano poniżej:

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Następnie zmodyfikuj plik, używając następującej konfiguracji. Zapobiegnie to automatycznym modyfikacjom konfiguracji Twojej sieci.

```sh
network: {config: disabled}
```

### Etap 2: zmień plik konfiguracyjny sieci

Otwórz plik konfiguracyjny sieci, aby go zmienić za pomocą następującego polecenia:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Zmodyfikuj plik za pomocą następującej konfiguracji:

> [!primary]
>
Nazwy interfejsów sieciowych w naszych przykładach mogą różnić się od Twoich nazw. Prosimy o dostosowanie nazw interfejsów.
>

```sh
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface ens3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Każdy adres IP Failover wymaga własnej linii w tym pliku. Plik konfiguracyjny Twoich adresów IP Failover musi być nazywany "50-cloud-init.yaml".

#### Etap 1: utworzyć plik konfiguracyjny

Zaloguj się do serwera przez SSH i wprowadź następującą komendę:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Następnie zmodyfikuj plik, używając następującej treści:

```sh
network:
    version: 2
    ethernets:
        twój_interfejs_sieciowy:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: twoja_interfejs_sieciowy
            addresses:
            - votre_ip_failover/32
```

Zapisz i zamknij plik.

Następnie zastosuj konfigurację:

```sh
# netplan apply
# netplan try
```

Powtórz tę procedurę dla każdego adresu IP Failover.

### CentOS i Fedora (25 i wcześniejsze wersje)

#### Etap 1: utworzyć plik źródłowy

Najpierw wykonaj kopię pliku źródłowego, aby móc używać go jako szablonu:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Etap 2: zmień plik źródłowy

Teraz możesz zmienić plik eth0:0, aby zastąpić adres IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Najpierw zastąp nazwę "device", następnie zastąp istniejący adres IP adresem IP Failover, który otrzymałeś:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # W przypadku CentOS kliknij "static"
IPADDR="IP_FAILOVER"
NETMASK="255.255.255.255"
BROADCAST="IP_FAILOVER"
```

#### Etap 3: uruchom ponownie interfejs

Uruchom ponownie interfejs:

```sh
ifup eth0:0
```

### Windows Server 2012/2016

#### Etap 1: sprawdź główną konfigurację IP

Po pierwsze, musimy pobrać informacje dotyczące głównego adresu IP:

![sprawdź główną konfigurację IP](images/image1-1.png){.thumbnail}

#### Etap 2: zmień właściwości IPv4

Należy ręcznie zmienić ustawienia "automatyczne" IP w konfigurację "statyczną":

![zmień konfigurację IP](images/image2.png){.thumbnail}

Teraz możemy zdefiniować informacje IP, które uzyskaliśmy wcześniej:

![zmień konfigurację IP](images/image3-3.png){.thumbnail}

#### Etap 3: dodać adres IP Failover w sekcji "Konfiguracja zaawansowana"

![sekcja konfiguracji zaawansowanej](images/image4-4.png){.thumbnail}

W tym miejscu należy zdefiniować informacje IP Failover i odpowiadającą im maskę podsieci (zwykle maska podsieci to 255.255.255.255).

![Konfiguracja IP Failover](images/image5-5.png){.thumbnail}

#### Etap 4: restart interfejsu sieciowego

Najpierw przeprowadzamy proces wyłączania.

![dezaktywacja sieci](images/image6.png){.thumbnail}

Następnie proces aktywacji.

![aktywacja sieci](images/image7.png){.thumbnail}

#### Etap 5: sprawdzenie nowej konfiguracji sieci

Za pomocą konsoli i polecenia ___ipconfig___ możemy sprawdzić nową konfigurację sieci.

![sprawdź aktualną konfigurację sieci](images/image8-8.png){.thumbnail}


### cPanel (na CentOS 6)

#### Etap 1: utworzyć plik źródłowy

Najpierw wykonaj kopię pliku źródłowego, aby w każdej chwili wrócić do poprzedniego stanu:

```sh
cp /etc/ips /etc/ips.bak
```

#### Etap 2: zmień plik źródłowy

Musisz zmienić plik /etc/ips:

```sh
editor /etc/ips
```

Dodaj adres IP Failover do pliku:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

Następnie dodaj adres IP do /etc/ipaddrpool:

```bash
IP_FAILOVER
```

#### Etap 3: uruchom ponownie interfejs

Uruchom ponownie interfejs:

```sh
/etc/init.d/ipaliases restart
```

### Plesk Onyx 17.x

#### Etap 1: dostęp do zarządzania adresami IP w panelu konfiguracyjnym

Przejdź do sekcji ```Tools & Settings``` >```IP Addresses```:

![dostęp do zarządzania adresami IP](images/pleskip1.png){.thumbnail}

#### Etap 2: dodaj dodatkowe informacje IP

Kliknij przycisk `Add IP Address`{.action}:

![dodaj informacje IP](images/pleskip2-2.png){.thumbnail}

Następnie wprowadź dodatkowe informacje IP do formularza i kliknij `OK`{.action}.

![dodaj informacje IP](images/pleskip3-3.png){.thumbnail}

#### Etap 3: sprawdź aktualną konfigurację IP w panelu konfiguracyjnym Plesk

![aktualna konfiguracja IP](images/pleskip4-4.png){.thumbnail}

### Naprawa

Jeśli nie udaje Ci się nawiązać połączenia między siecią publiczną a adresem IP aliasu i podejrzewasz problem z siecią, uruchom serwer w trybie Rescue i skonfiguruj alias bezpośrednio na serwerze.

W tym celu, po zrestartowaniu serwera w trybie Rescue, wprowadź następującą komendę:

```sh
ifconfig ens3:0 FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP up
```

Zastąp FAILOVER_IP rzeczywistym adresem IP Failover.

Następnie wystarczy wysłać ping do IPFO z zewnątrz. Jeśli to działa, prawdopodobnie oznacza to, że należy usunąć błąd konfiguracji. Jeśli natomiast IP nadal nie działa, poinformuj o tym nasz zespół, wysyłając zgłoszenie z poziomu Panelu [klienta OVHcloud](https://www.ovh.com/manager/dedicated/#/support/tickets/new), aby uzyskać więcej informacji.
 
## Idź dalej

[Włącz tryb Rescue na serwerze VPS](../rescue/)

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
