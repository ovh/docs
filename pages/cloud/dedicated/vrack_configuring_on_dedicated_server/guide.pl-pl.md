---
title: 'Konfiguracja kilku serwerów dedykowanych w sieci vRack'
slug: konfiguracja-kilku-serwerow-dedykowanych-vrack
excerpt: 'Dowiedz się, jak połączyć kilka serwerów w ramach rozwiązania vRack'
section: vRack
---

**Ostatnia aktualizacja dnia 2018-04-09**

## Wprowadzenie

Technologia vRack (szafa wirtualna) umożliwia zgrupowanie dowolnej liczby serwerów (bez względu na ich fizyczną lokalizację w naszych centrach danych) i ich podłączenie do wirtualnego przełącznika w ramach tej samej prywatnej sieci. Serwery komunikują się między sobą w sposób bezpieczny w ramach prywatnej dedykowanej sieci VLAN.

**Dowiedz się, jak połączyć dwa lub więcej serwerów dedykowanych siecią vRack.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
- Posiadanie co najmniej dwóch [serwerów kompatybilnych z siecią vRack](https://www.ovh.pl/serwery_dedykowane/){.external}
- Połączenie przez SSH (lub przez interfejs użytkownika) z Twoim serwerem Linux (dostęp root)
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Zakresu prywatnych adresów IP

## W praktyce

### Dodanie serwerów do sieci vRack

1. Po dodaniu rozwiązania vRack do Twojego konta przejdź do sekcji `Cloud`{.action} w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
2. Następnie wybierz menu `vRack`{.action} z listy po lewej stronie.
3. Wybierz vRack, do którego chcesz dodać serwery.
4. Na liście dostępnych usług zaznacz serwery, które chcesz dodać do szafy vRack, następnie kliknij na przycisk `Dodaj`{.action}.

![Wybór szafy vRack](images/vrack_selection.png){.thumbnail}

### Konfiguracja interfejsów sieciowych

W tym przykładzie używamy bloku prywatnych adresów IP *192.168.0.0/16*.

Ponadto użyjemy nazw **eth1** i **eno4** dla dodatkowego interfejsu sieciowego. Serwery mogą używać innej nomenklatury w odniesieniu do nazw interfejsów. Sprawdź, jakie nazewnictwo jest używane, wprowadzając podane poniżej komendy.

W celu wyświetlenia interfejsów sieciowych należy użyć następującej komendy:

```sh
ifconfig -a | grep eth | awk '{print $ 1}'
```

Pierwszy interfejs z listy dotyczy Twojego połączenia z siecią główną. Możesz sprawdzić, który interfejs jest aktywny, używając komendy:

```sh
ifconfig eth1 up
```

```sh
ethtool eth1 | grep "Link detected"
```

Jeśli komenda zwróci odpowiedź `Link detected: no`, mamy do czynienia z interfejsem sieciowym, którego należy użyć do konfiguracji vRack po wprowadzeniu poniższej komendy: 

```sh
ifconfig eth1 down
```

#### CentOS 6 i 7

Otwórz plik konfiguracyjny interfejsu sieciowego za pomocą komendy:

```sh
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Wciśnij przycisk `I` na klawiaturze, aby włączyć tryb „insert” programu vi.

Skonfiguruj dodatkowy interfejs sieciowy w następujący sposób:

```sh
DEVICE=eth1
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Poniższy przykład obrazuje, w jaki sposób możesz wybrać dowolny zakres prywatnych adresów IP i dowolny adres z tego zakresu.

1. Wciśnij przycisk `ESC`.
2. Wciśnij przycisk `SHIFT` oraz przycisk *dwukropek*, aby otworzyć edytor. 
3. Wprowadź `wq`.
4. Wciśnij przycik `Enter`.
5. Zrestartuj serwer.
6. Powtórz wszystkie kroki na innych serwerach i przypisz do nich unikalny adres IP z Twojego zakresu adresów prywatnych. Po tej operacji Twoje serwery będą mogły komunikować się między sobą w ramach prywatnej sieci.

#### Debian 7

Otwórz plik konfiguracyjny interfejsu sieciowego za pomocą komendy:

```sh
nano /etc/network/interfaces
```

Skonfiguruj dodatkowy interfejs sieciowy w następujący sposób:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Poniższy przykład obrazuje, w jaki sposób możesz wybrać dowolny zakres prywatnych adresów IP i dowolny adres z tego zakresu.

1. Wciśnij `CTRL + X`, aby zamknąć plik konfiguracyjny sieci. 
2. Wciśnij przycisk `Y`, aby zapisać wprowadzone modyfikacje, a następnie `Enter`.
3. Zrestartuj serwer.
4. Powtórz wszystkie kroki na innych serwerach i przypisz do nich unikalny adres IP z Twojego zakresu adresów prywatnych. Po tej operacji Twoje serwery będą mogły komunikować się między sobą w ramach prywatnej sieci.

#### Debian 9

Otwórz plik konfiguracyjny interfejsu sieciowego za pomocą komendy:

```sh
nano /etc/network/interfaces
```

Skonfiguruj dodatkowy interfejs sieciowy w następujący sposób:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Poniższy przykład obrazuje, w jaki sposób możesz wybrać dowolny zakres prywatnych adresów IP i dowolny adres z tego zakresu.

1. Wciśnij `CTRL + X`, aby zamknąć plik konfiguracyjny sieci. 
2. Wciśnij przycisk `Y`, aby zapisać wprowadzone modyfikacje, a następnie `Enter`.
3. Zrestartuj serwer.
4. Powtórz wszystkie kroki na innych serwerach i przypisz do nich unikalny adres IP z Twojego zakresu adresów prywatnych. Po tej operacji Twoje serwery będą mogły komunikować się między sobą w ramach prywatnej sieci.

#### Ubuntu Server 16

Otwórz plik konfiguracyjny interfejsu sieciowego za pomocą komendy:

```sh
vi /etc/network/interfaces
```

Wciśnij przycisk `I` na klawiaturze, aby włączyć tryb „insert” programu vi.

Skonfiguruj dodatkowy interfejs sieciowy w następujący sposób:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Poniższy przykład obrazuje, w jaki sposób możesz wybrać dowolny zakres prywatnych adresów IP i dowolny adres z tego zakresu.

1. Wciśnij przycisk `ESC`.
2. Wciśnij przycisk `SHIFT` oraz przycisk *dwukropek*, aby otworzyć edytor. 
3. Wprowadź `wq`.
4. Wciśnij przycik `Enter`.
5. Zrestartuj serwer.
6. Powtórz wszystkie kroki na innych serwerach i przypisz do nich unikalny adres IP z Twojego zakresu adresów prywatnych. Po tej operacji Twoje serwery będą mogły komunikować się między sobą w ramach prywatnej sieci.

#### Ubuntu Server 17

Otwórz plik konfiguracyjny interfejsu sieciowego za pomocą komendy:

```sh
nano /etc/network/interfaces
```

Skonfiguruj dodatkowy interfejs sieciowy w następujący sposób:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Poniższy przykład obrazuje, w jaki sposób możesz wybrać dowolny zakres prywatnych adresów IP i dowolny adres z tego zakresu.

1. Wciśnij `CTRL + X`, aby zamknąć plik konfiguracyjny sieci. 
2. Wciśnij przycisk `Y`, aby zapisać wprowadzone modyfikacje, a następnie `Enter`.
3. Zrestartuj serwer.
4. Powtórz kroki od 1 do 5 na innych serwerach i przypisz do nich unikalny adres IP z Twojego zakresu adresów prywatnych. Po tej operacji Twoje serwery będą mogły komunikować się między sobą w ramach prywatnej sieci.

#### Windows

OVH używa zakresu prywatnych adresów IP od *192.168.0.0/16*.

Wykonaj następujące czynności:

- Zaloguj się do Twojego serwera Windows przez zdalny pulpit.
- Kliknij przycisk `Start`{.action}.
- Kliknij `Control Panel`{.action}.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

- Kliknij `Network and Internet`{.action}.

![Network and Internet](images/windows_network_and_internet.png){.thumbnail}

- Kliknij `Network and Sharing Centre`{.action}.

![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}

- Kliknij `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

- Prawym przyciskiem myszy kliknij w interfejs dodatkowej sieci.

- Kliknij `Properties`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

- Kliknij dwa razy w `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

- Kliknij `Use the following IP address`:

    - `IP address`: wprowadź adres IP z Twojego zakresu adresów prywatnych;
    - `Subnet mask`: wprowadź 255.255.0.0.

![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}

- Kliknij `OK`{.action}, aby zapisać wprowadzone modyfikacje.
- Zrestartuj serwer.
- Powtórz wszystkie kroki na innych serwerach i przypisz do nich unikalny adres IP z Twojego zakresu adresów prywatnych. Po tej operacji Twoje serwery będą mogły komunikować się między sobą w ramach prywatnej sieci.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.