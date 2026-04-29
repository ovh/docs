---
title: "Tworzenie wielu sieci VLAN w sieci vRack na serwerze dedykowanym"
excerpt: "Twórz i zarządzaj wieloma sieciami VLAN w sieci OVHcloud vRack, aby segmentować ruch sieciowy między serwerami dedykowanymi."
updated: 2026-02-20
---

## Wprowadzenie

[Podstawowa konfiguracja vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server) umożliwia utworzenie jednej sieci VLAN. W tej konfiguracji możesz użyć każdego adresu IP tylko jeden raz. Tymczasem dzięki wersji 2.0 konfiguracji vRack możesz utworzyć do 4 000 lokalnych wirtualnych sieci w ramach jednej sieci vRack. Oznacza to, że możesz wykorzystać każdy adres IP do 4 000 razy.

**Niniejszy przewodnik wyjaśnia, jak utworzyć kilka sieci VLAN w prywatnej sieci vRack.**

## Wymagania początkowe

- Aktywna usługa [vRack](/links/network/vrack) na Twoim koncie
- Co najmniej dwa [serwery dedykowane kompatybilne z vRack](/links/bare-metal/bare-metal)
- Dostęp administracyjny (sudo) do serwera przez SSH (Linux) lub RDP (Windows)
- Dostęp do [Panelu klienta OVHcloud](/links/manager)
- Dostęp do wybranego zakresu Twoich prywatnych adresów IP
- Ukończona [konfiguracja vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).

## W praktyce

### Linux

> [!primary]
>
> W poniższym przykładzie użyliśmy **eno2** jako interfejsu sieciowego, **10** i **11** jako tagów sieci VLAN oraz **192.168.0.0/16** i **10.0.0.0/16** jako zakresów adresów IP.
>
> Wszystkie polecenia należy dostosować do używanej dystrybucji. W przypadku wątpliwości skorzystaj z oficjalnej dokumentacji dotyczącą Twojej dystrybucji.
>

> [!tabs]
> **Debian 11**
>>
>> Najpierw nawiąż połączenie SSH z serwerem i uruchom następujące polecenia z wiersza poleceń, aby zainstalować pakiet VLAN na serwerze:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Następnie załaduj moduł jądra 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Aby sprawdzić, czy moduł został załadowany:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Uruchom następujące polecenie, aby moduły były ładowane automatycznie przy starcie systemu:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Następnie pobierz nazwy interfejsów i zidentyfikuj interfejs prywatny:
>>
>> ```sh
>> ip a
>> ```
>>
>> Następnie utwórz tag VLAN. Tag jest identyfikatorem umożliwiającym rozróżnienie kilku sieci VLAN:
>>
>> ```sh
>> sudo ip link add link <parent-interface> name <vlan-identifier> type vlan id <ID>
>> ```
>>
>> **W tym przykładzie:**
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> Użyj tego samego polecenia dla każdego tagu VLAN, który chcesz dodać.
>>
>> Następnie określ zakres adresów IP w sieci vRack i oznacz go identyfikatorem, używając następującego polecenia:
>>
>> ```sh
>> sudo ip addr add 192.168.0.10/16 dev eno2.10
>> ```
>>
>> Zmodyfikuj konfigurację interfejsu sieciowego, aby uwzględnić tag VLAN. Otwórz plik konfiguracyjny interfejsu sieciowego i dodaj następujące wpisy:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eno2.10
>> iface eno2.10 inet static
>> address 192.168.0.10
>> netmask 255.255.0.0
>> broadcast 192.168.255.255
>> vlan-raw-device eno2
>> ```
>>
>> W przypadku kilku skonfigurowanych sieci VLAN Twoja konfiguracja sieciowa powinna wyglądać następująco:
>>
>> ![debian VLAN](images/multiple_vlan_debian.png){.thumbnail}
>>
> **Ubuntu i Debian 12+**
>>
>> Te polecenia zostały wykonane w Ubuntu 24.04 (Noble Numbat).
>>
>> Najpierw nawiąż połączenie SSH z serwerem i uruchom następujące polecenia z wiersza poleceń, aby zainstalować pakiet VLAN na serwerze:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Następnie załaduj moduł jądra 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Aby sprawdzić, czy moduł został załadowany:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Uruchom następujące polecenie, aby moduły były ładowane automatycznie przy starcie systemu:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Utwórz lub edytuj plik konfiguracyjny `cloud.cfg`, aby zapobiec automatycznym zmianom w konfiguracji sieci:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Dodaj następującą linię:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Pobierz nazwę interfejsu sieciowego i jego adres MAC:
>>
>> ```sh
>> ip a
>> ```
>>
>> Tutaj interfejs, który chcemy skonfigurować to `eno2` z adresem MAC: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-01.png){.thumbnail}
>>
>> Dodaj konfigurację sieci dla tego interfejsu sieciowego i informacje o VLAN w następującym pliku, upewniając się, że zostały umieszczone bezpośrednio pod linią `version: 2`. Zastąp wartości własnymi:
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno2:
>>             match:
>>                 macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                      # VLAN ID
>>             link: eno2                  # Nazwa interfejsu
>>             addresses:
>>             - 192.168.0.10/16
>>     ethernets:
>>         eno1:
>>             ...
>>             ...
>> ```
>>
>> W przypadku kilku skonfigurowanych sieci VLAN Twoja konfiguracja sieciowa powinna wyglądać następująco:
>>
>> ![ubuntu VLAN](images/multiple_vlan_ubuntu.png){.thumbnail}
>>
>> Zapisz i zamknij plik, a następnie uruchom następujące polecenie:
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> Użyj następującego polecenia, aby upewnić się, że konfiguracja została poprawnie zastosowana:
>>
>> ```sh
>> ip a
>> ```
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-02.png){.thumbnail}
>>
> **AlmaLinux i Rocky Linux (8/9)**
>>
>> Przed rozpoczęciem nawiąż połączenie SSH z serwerem i uruchom następujące polecenie, aby załadować moduł jądra 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Aby sprawdzić, czy moduł został załadowany:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Następnie uruchom następujące polecenie, aby moduły były ładowane automatycznie przy starcie systemu:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Pobierz nazwy interfejsów i zidentyfikuj interfejs prywatny:
>>
>> ```sh
>> ip a
>> ```
>>
>> Następnie utwórz plik konfiguracyjny podinterfejsu dla VLAN w głównym pliku konfiguracyjnym sieci.
>>
>> W tym przykładzie plik nosi nazwę `ifcfg-eno2.10`, gdzie eno2 odnosi się do prywatnego interfejsu sieciowego, a `10` to identyfikator VLAN.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eno2.10
>> ```
>>
>> Dodaj następujące wpisy do pliku konfiguracyjnego, zastępując wartości własnymi:
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.10
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> Zapisz i zamknij plik.
>>
>> W przypadku kilku skonfigurowanych sieci VLAN powinieneś utworzyć nowy plik dla każdego identyfikatora VLAN:
>>
>> ![alma VLAN](images/multiple_vlan_alma.png){.thumbnail}
>>
>> Uruchom ponownie interfejs sieciowy:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux i Rocky Linux (10)**
>>
>> Poniższa konfiguracja jest oparta na Fedora 43.
>>
>> Przed rozpoczęciem nawiąż połączenie SSH z serwerem i uruchom następujące polecenie, aby załadować moduł jądra 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Aby sprawdzić, czy moduł został załadowany:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Uruchom następujące polecenie, aby moduły były ładowane automatycznie przy starcie systemu:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Aby uzyskać nazwę prywatnego interfejsu sieciowego:
>>
>> ```sh
>> ip a
>> ```
>>
>> W tym przykładzie interfejs nazywa się `eno2`. Musimy utworzyć podinterfejs VLAN przed przypisaniem do niego prywatnego adresu IP.
>>
>> Użyj następującego polecenia, aby utworzyć interfejs VLAN:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Zastąp `vlan-name` nazwą podinterfejsu VLAN, `parent-interface` nazwą interfejsu prywatnego, a `vlan-id` identyfikatorem VLAN.
>>
>> **W tym przykładzie:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> Przypisz prywatny adres IP do podinterfejsu VLAN:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **W tym przykładzie:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.10/16 ipv4.method manual
>> ```
>>
>> Następnie uruchom podinterfejs VLAN:
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> **W tym przykładzie:**
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> Użyj tych samych poleceń dla każdego interfejsu VLAN, który chcesz dodać.
>>
>> Po zakończeniu zostanie utworzony plik konfiguracyjny dla interfejsu VLAN. Plik ten znajduje się w `/etc/NetworkManager/system-connections/` i ma format nazwy `vlan-name.nmconnection`.
>>
>> W przypadku kilku sieci VLAN zostanie utworzonych wiele plików konfiguracyjnych:
>>
>> - Przegląd:
>>
>> ![config](images/multiple_vlan_fedora.png){.thumbnail}
>>
>> ![config](images/multiple_vlan_fedora_1.png){.thumbnail}
>>

### Windows

Połącz się z serwerem przez zdalny pulpit i otwórz aplikację "Server Manager". Wybierz następnie `Server lokalny`{.action}, po czym kliknij link `Wyłączone`{.action} obok **Tworzenie zespołu kart interfejsu sieciowego**:

![Menedżer serwera z wyłączonym NIC Teaming](images/vrack2-windows-01.png){.thumbnail}

Następnie kliknij prawym przyciskiem myszy interfejs sieciowy i wybierz `Dodaj do nowego zespołu`{.action}.

![Menu kontekstowe dodawania interfejsu do nowego zespołu](images/vrack2-windows-02.0.png){.thumbnail}

W oknie, które się wyświetli, utwórz nowy zespół, wpisując nazwę zespołu w polu **Nazwa zespołu**. Po zakończeniu zatwierdź przyciskiem `OK`{.action}.

![Okno nowego zespołu z nazwą i przyciskiem OK](images/vrack2-windows-02.png){.thumbnail}

Następnie podaj tag VLAN. W panelu **KARTY I INTERFEJSY** na ekranie **Tworzenie zespołu kart interfejsu sieciowego**, przejdź do zakładki `Interfejsy zespołów`{.action} i kliknij prawym przyciskiem myszy interfejs, który właśnie dodałeś do nowego zespołu kart sieciowych, po czym kliknij `Właściwości`{.action}. Następnie kliknij `Określona sieć VLAN`{.action} i podaj tag:

![Właściwości interfejsu NIC Teaming ze znacznikiem VLAN](images/vrack2-windows-03.png){.thumbnail}

Teraz skonfiguruj adres IP VLAN: Kliknij przycisk `Start`{.action} w menu startowym, a następnie kliknij `Panel sterowania`{.action}:

![Menu Start Windows z opcją Panel sterowania](images/vrack2-windows-04.png){.thumbnail}

Kliknij `Sieć i Internet`{.action}.

![Panel sterowania z kategorią Sieć i Internet](images/vrack2-windows-05.png){.thumbnail}

Kliknij `Centrum sieci i udostępniania`{.action}:

![Centrum sieci i udostępniania w Windows](images/vrack2-windows-06.png){.thumbnail}

Kliknij `Zmień ustawienia karty sieciowej`{.action}:

![Zmiana ustawień karty w Centrum sieci i udostępniania](images/vrack2-windows-07.png){.thumbnail}

Następnie kliknij prawym przyciskiem myszy interfejs VLAN, po czym kliknij `Właściwości`{.action}:

![Menu kontekstowe interfejsu VLAN z opcją Właściwości](images/vrack2-windows-08.png){.thumbnail}

W naszym przykładzie `Ethernet 2` to interfejs używany w sieci vRack. Możliwe jest jednak, że karta sieciowa vRack używa innego interfejsu. Korzystaj z interfejsu, który nie posiada głównego adresu IP serwera lub który używa przypisanego do siebie adresu IP.

Kliknij dwa razy `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Właściwości karty z zaznaczonym protokołem IPv4](images/vrack2-windows-09.png){.thumbnail}

W kolejnym kroku kliknij `Uźyj następującego adresu IP`{.action}. **Adres IP**: wprowadź adres IP z Twojego zakresu adresów prywatnych. **Maska podsieci**, wprowadź "255.255.0.0".

![Ustawienia IPv4 z adresem IP i maską podsieci VLAN](images/vrack2-windows-10.png){.thumbnail}

Na koniec kliknij przycisk `OK`{.action}, aby zapisać modyfikacje, po czym zrestartuj serwer.

## Sprawdź również

[Konfiguracja kilku serwerów dedykowanych w sieci vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

- [Konfiguracja vRack między Public Cloud a serwerem dedykowanym](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)
Dołącz do [grona naszych użytkowników](/links/community).