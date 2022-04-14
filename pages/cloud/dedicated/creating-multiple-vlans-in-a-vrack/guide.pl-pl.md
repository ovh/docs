---
title: 'Tworzenie kilku sieci VLAN w prywatnej sieci vRack'
slug: tworzenie-vlan-vrack
excerpt: 'Dowiedz się, jak utworzyć kilka sieci VLAN w prywatnej sieci vRack'
section: vRack
---

**Ostatnia aktualizacja z dnia 24-02-2022**

## Wprowadzenie

[Podstawowa konfiguracja vRack](https://docs.ovh.com/pl/dedicated/konfiguracja-kilku-serwerow-dedykowanych-vrack/){.external} umożliwia utworzenie jednej sieci VLAN. W tej konfiguracji możesz użyć każdego adresu IP tylko jeden raz. Tymczasem dzięki wersji 2.0 konfiguracji vRack możesz utworzyć do 4 000 lokalnych wirtualnych sieci w ramach jednej sieci vRack. Oznacza to, że możesz wykorzystać każdy adres IP do 4 000 razy.

**Niniejszy przewodnik wyjaśnia, jak utworzyć kilka sieci VLAN w prywatnej sieci vRack.**


## Wymagania początkowe

- Posiadanie jednego lub kilku [serwerów dedykowanych](https://www.ovh.pl/serwery_dedykowane/){.external} kompatybilnych z vRack
- Aktywowanie usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
- Dostęp do wybranego zakresu Twoich prywatnych adresów IP
- Połączenie przez SSH z identyfikatorem root (Linux)
- Połączenie z kontem administratora (Windows)
- Ukończona [konfiguracja vRack](https://docs.ovh.com/pl/dedicated/konfiguracja-kilku-serwerow-dedykowanych-vrack/){.external}

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

### Linux

> [!primary]
>
> W poniższym przykładzie użyliśmy **eno2** dla Ubuntu i **eth1** dla Debian jako interfejsu sieciowego, **10** jako tag sieci VLAN i **192.168.0.0/16** jako zakresu adresów IP. 
>
> Wszystkie polecenia należy dostosować do używanej dystrybucji. W przypadku wątpliwości skorzystaj z oficjalnej dokumentacji dotyczącą Twojej dystrybucji.
>

#### Ubuntu 20 i 21

Ten przykład jest oparty na Ubuntu 21.10 (Impish Indri).

W pierwszym kroku należy zainstalować pakiet "VLAN" na Twoim serwerze. W tym celu zastosuj polecenie:

```sh
sudo apt-get install vlan
```

Załaduj moduł jądra(kernel) 8021q:

```sh
sudo su -c 'echo "8021q" >> /etc/modules'
```

Utwórz lub edytuj ten plik konfiguracyjny, aby zapobiec automatycznemu wprowadzaniu zmian w konfiguracji sieci:

```sh
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

I dodaj ten wiersz:

```sh
network: {config: disabled}
```

Pobierz nazwę interfejsu sieciowego i jego adres MAC:

```sh
ip a
```

Tutaj interfejs, który chcemy skonfigurować jest `eno2` z adresem MAC: ` d0:50:99:d6:6b:14.

![ubuntu VLAN](images/vrack3-ubuntu-01.png)

Dodaj konfigurację sieci dla tego interfejsu sieciowego i deklarację sieci VLAN w następującym pliku:

```sh
sudo nano /etc/netplan/50-cloud-init.yaml
```

```yaml
network:
    version: 2
    ethernets:
        eno2:
            match:
                macaddress: d0:50:99:d6:6b:14
        eno1:
            ...
            ...
    vlans:
        vlan10:
            id: 10                      # VLAN ID    
            link: eno2                  # Interface name
            addresses:
            - 192.168.0.14/16
```

Zapisz i zamknij plik, a następnie uruchom następujące polecenia:

```sh
sudo netplan try
sudo netplan apply
```

Aby potwierdzić konfigurację, należy użyć następującego polecenia:

```sh
ip a
```

![ubuntu VLAN](images/vrack3-ubuntu-02.png)

#### Debian

W pierwszym kroku należy zainstalować pakiet “VLAN” na Twoim serwerze. W tym celu zastosuj polecenie:

```sh
sudo apt-get install vlan
```

Następnie utwórz tag VLAN. Tag jest identyfikatorem umożliwiającym rozróżnienie kilku sieci VLAN:

```sh
vconfig add eth1 10

Added vlan with VID == 10 to IF -:eth1:-
```

Teraz określ zakres adresów IP w sieci vRack i oznacz go Twoim identyfikatorem. Możesz to zrobić przy użyciu polecenia:

```sh
ip addr add 192.168.0.0/16 dev eth1.10
```

Na koniec zmodyfikuj konfigurację interfejsu sieciowego, aby uwzględnił tag VLAN. Teraz otwórz plik konfiguracyjny interfejsu sieciowego, po czym edytuj go i zmodyfikuj w następujący sposób:

```sh
sudo /etc/network/interfaces

auto eth1.10
iface eth1.10 inet static
address 192.168.0.50
netmask 255.255.0.0
broadcast 192.168.255.255
```

### Windows

Połącz się z serwerem przez zdalny pulpit i otwórz aplikację “Server Manager”. Wybierz następnie `Local Server`{.action}, po czym kliknij link `Disabled`{.action} obok **NIC Teaming**:

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

W kolejnym kroku utwórz nowy zespół kart sieciowych, zaznaczając interfejs sieciowy i wpisując nazwę zespołu w polu **Team name**. Czynność tę zatwierdź, klikając `OK`{.action}:

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

Następnie podaj tag VLAN. W panelu **Adapters and Interfaces** na ekranie **NIC Teaming**, kliknij prawym przyciskiem myszy interfejs, który właśnie dodałeś do nowego zespołu kart sieciowych, po czym kliknij `Properties`{.action}. Następnie kliknij `Specific VLAN`{.action} i podaj tag:

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Teraz skonfiguruj adres IP VLAN: Kliknij przycisk `Start`{.action} w menu startowym, a następnie kliknij `Control Panel`{.action}:

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Kliknij `Network and Internet`{.action}.

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Kliknij `Network and Sharing Center`{.action}:

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Kliknij `Zmodyfikuj parametry adaptera`{.action} :

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

Następnie kliknij prawym przyciskiem myszy interfejs VLAN, po czym kliknij `Properties`{.action}:

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Kliknij dwa razy `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}.

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

W kolejnym kroku kliknij `Use the following IP address`{.action}. IP address: wprowadź adres IP z Twojego zakresu adresów prywatnych. **Subnet mask**, wprowadź “255.255.0.0”.

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Na koniec kliknij przycisk `OK`{.action}, aby zapisać modyfikacje, po czym zrestartuj serwer.

## Sprawdź również

[Konfiguracja kilku serwerów dedykowanych w sieci vRack](https://docs.ovh.com/pl/dedicated/konfiguracja-kilku-serwerow-dedykowanych-vrack/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.