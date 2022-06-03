---
title: 'Konfiguracja sieci w systemie Windows Server z Hyper-V w ofercie High Grade & SCALE'
slug: hyperv-network-hg-scale
excerpt: 'Dowiedz się, jak skonfigurować sieć w systemie Windows Server z Hyper-V w ofercie High Grade & SCALE'
section: 'Poziom zaawansowany'
order: 5
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 15-11-2021**

## Wprowadzenie

W ofercie High Grade & SCALE nie jest możliwe działanie adresów IP Failover w trybie *bridged* (za pomocą wirtualnych adresów MAC). Konieczne jest zatem skonfigurowanie IP Failover w trybie routera lub vRack.

**Dowiedz się, jak skonfigurować sieć w systemie Windows Server przy użyciu Hyper-V.**

## Wymagania początkowe

* Posiadanie [serwera dedykowanego OVHcloud](https://www.ovhcloud.com/pl/bare-metal/)
* Posiadanie adresu [IP Failover](https://www.ovhcloud.com/pl/bare-metal/ip/)
* Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

> [!warning]
>
> W Panelu klienta OVHcloud nie ma konieczności stosowania wirtualnego adresu MAC dla IP Failover.
>

## W praktyce

> [!primary]
>
> W tej gamie serwerów znajdują się 4 karty sieciowe. Pierwsze dwa dla publiczności, dwa dla prywatnego. Aby korzystać z całej przepustowości, należy utworzyć agregaty.
>

### IP Failover w trybie routera w publicznych interfejsach sieciowych

#### Wyjaśnienia

Musisz:

- skonfigurować NIC Teaming;
- zainstalować role Hyper-V i RRAS;
- skonfigurować RRAS, aby działać jako router.

#### Identyfikacja interfejsów i konfiguracja NIC Teaming

Otwórz Windows Powershell i wprowadź komendę `Get-NetAdapter`:

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

W tym przykładzie:

- interfejs publiczny to `Ethernet 3` i `Ethernet 4`;
- Prywatne interfejsy to `Ethernet` i `Ethernet 2`.

> [!primary]
>
> Sprawdź, czy Twoja konfiguracja jest podobna. Informacje na temat publicznych lub prywatnych interfejsów MAC są dostępne w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) lub poprzez API OVHcloud.
>

Przejdź do Panelu klienta Server, przejdź do `Local Server`{.action} i kliknij `Disabled`{.action} obok "NIC Teaming".

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Na następnej stronie kliknij prawym przyciskiem myszy jeden z uprzednio zidentyfikowanych interfejsów publicznych, a następnie kliknij `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Nadaj nazwę swojej usłudze *teaming*, a następnie dodaj drugi interfejs do *teaming*. Następnie otwórz dodatkowe właściwości, zdefiniuj "Teaming Mode" na "LACP" i kliknij `OK`{.action}.

#### Konfiguracja statycznego adresu IP

Aby uniknąć utraty połączenia podczas restartu, musimy statycznie skonfigurować IP na *teaming*.

Naciśnij `Windows Key` + `R`, aby otworzyć okno Run. Wprowadź `ncpa.cpl` i kliknij `OK`{.action}. Otworzy to Twoje okno "Połączenia sieciowe".

![Status IP](images/static_ip_1.png){.thumbnail}

Kliknij prawym przyciskiem myszy na *teaming*, który utworzyłeś i kliknij `Properties`{.action}.

![Status IP](images/static_ip_2.png){.thumbnail}

Kliknij dwukrotnie `Internet Protocol Version 4(TCP/IPv4)`{.action}.

![Status IP](images/static_ip_3.png){.thumbnail}

Wybierz `Use the following IP address and insert your IP address`.

Maska podsieci i brama domyślna to: 255.255.255.255 i 100.64.0.1 (jak pokazano poniżej).

Dla serwerów DNS możesz wybrać własne. W naszym przykładzie używamy 213.186.33.99 i 8.8.8.8.

Po wpisaniu adresów kliknij `OK`{.action}, aby zamknąć okno i ponownie kliknij `OK`{.action}, aby zamknąć okno właściwości adaptera.

![Status IP](images/static_ip_4.png){.thumbnail}

#### Dodaj role Hyper-V i RRAS

W serwerze Manager wybierz `Dashboard`{.action} i kliknij `Add roles and features`{.action}.

![Instalacja](images/install_roles_1.png){.thumbnail}

Postępuj zgodnie z instrukcjami, aż do sekcji "Server Roles". Następnie wybierz `Hyper-v` i `Remote Access`.

![Instalacja](images/install_roles_2.png){.thumbnail}

Następnie przejdź do sekcji "Virtual Switches" w sekcji "Hyper-V" i wybierz Twój *NIC teaming* utworzony wcześniej.

![Instalacja](images/install_roles_3.png){.thumbnail}

Następnie przejdź do sekcji "Role Services" "Remote Access" i wybierz `Routing`.

![Instalacja](images/install_roles_4.png){.thumbnail}

W sekcji "Confirmation" wybierz `Restart the destination server automatically if required` i kliknij na `Install`{.action}.

#### Konfiguracja Routing and Remote Access

Otwórz nową aplikację "Routing and Remote Access", kliknij prawym przyciskiem myszy serwer i kliknij `Configuration and Enable Routing and Remote Access`{.action}.

![Konfiguracja RRAS](images/configure_rras_1.png){.thumbnail}

Wybierz `Custom konfiguracji` i kliknij `Next`{.action}.

![Konfiguracja RRAS](images/configure_rras_2.png){.thumbnail}

Następnie wybierz `LAN Routing` i kliknij `Next`{.action}.

![Konfiguracja RRAS](images/configure_rras_3.png){.thumbnail}

Następnie w oknie, które się wyświetli kliknij `Finish`{.action}, a następnie `Start Service`{.action}.

![Konfiguracja RRAS](images/configure_rras_4.png){.thumbnail}

#### Określenie głównych i dodatkowych statycznych adresów IP w interfejsie Hyper-V

Teraz musimy przenieść konfigurację IP do interfejsu Hyper-V.

Naciśnij `Windows Key` + `R`, aby otworzyć okno Run. Wprowadź `ncpa.cpl` i kliknij `OK`{.action}. Otworzy to Twoje okno "Połączenia sieciowe".

![Status IP](images/static_ip_1.png){.thumbnail}

Kliknij prawym przyciskiem myszy kartę vEthernet i kliknij `Properties`{.action}.

![Status IP](images/static_ip_5.png){.thumbnail}

Kliknij dwukrotnie `Internet Protocol Version 4(TCP/IPv4)`{.action}.

![Status IP](images/static_ip_3.png){.thumbnail}

Wybierz `Use the following IP address` i wprowadź adres IP.

Maska podsieci i brama domyślna to: 255.255.255.255 i 100.64.0.1 (jak pokazano poniżej).

Dla serwerów DNS możesz wybrać własne. W naszym przykładzie używamy 213.186.33.99 i 8.8.8.8.

![Status IP](images/static_ip_4.png){.thumbnail}

Następnie kliknij przycisk `Advanced...` i w nowym oknie kliknij `Add...`{.action} pod adresami IP.

Dodaj adres IP oraz maskę podsieci przypisaną do Twojego IP Failover i kliknij `Add`{.action}

![Status IP](images/static_ip_6.png){.thumbnail}

Po wpisaniu wszystkich adresów kliknij `OK`{.action}, aby zamknąć zaawansowane okno, ponownie kliknij `OK`{.action}, aby zamknąć ustawienia TCP/IPv4, a następnie ponownie kliknij `OK`{.action}, aby zamknąć okno właściwości karty.

> [!warning]
>
> Ten etap może spowodować utratę połączenia. Jeśli tak się stanie, zaloguj się za pomocą [IPMI](https://docs.ovh.com/pl/dedicated/uzywanie-ipmi-serwery-dedykowane/) i zmodyfikuj ponownie konfigurację. Zauważcie, że domyślny mostek powrócił do stanu pustego. Dodaj gateway 100.64.0.1.
>

#### Dodaj statyczną trasę

Otwórz wiersz poleceń jako administrator i wprowadź komendę `drogową print interface`:

```console
C:\Users\admin>route print interface
===========================================================================
Interface List
 22...0c 42 a1 dd 37 b2 ......Hyper-V Virtual Ethernet Adapter
 10...04 3f 72 d5 c3 38 ......Mellanox ConnectX-5 Adapter
  7...04 3f 72 d5 c3 39 ......Mellanox ConnectX-5 Adapter #2
  1...........................Software Loopback Interface 1
===========================================================================
```

W naszym przykładzie widać, że karta Hyper-V posiada ID 22.<br>
Zapoznaj się z kartą Hyper-V, a następnie wprowadź komendę `route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 si 22` (zastąp IP i ID interfejsu przez otrzymaną).<br>
Powinniście otrzymać wynik "OK! ".

```console
PS C:\Users\admin> route add -p 192.xxx.xxx.16 mask 255.255.255.255 0.0.0.0 if 22
 OK!
```

Po utworzeniu i skonfigurowaniu Twoja wirtualna maszyna musi mieć dostęp do Internetu.

#### Przykład konfiguracji VM klienta na Ubuntu

Zawartość pliku `/etc/netplan/ip.yaml`:

```bash
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 192.xxx.xxx.16
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 100.64.0.1
                                  on-link: true
```

### IP Failover w sieci vRack

#### Wymagania początkowe

- Rezerwacja bloku publicznych adresów IP na Twoim koncie z minimalną liczbą czterech adresów
- Przygotowanie Twojego zakresu wybranych prywatnych adresów IP
- Posiadanie [serwera kompatybilnego z vRack](https://www.ovhcloud.com/pl/bare-metal/){.external}
- Aktywacja usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
- Dostęp do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

#### Wyjaśnienia

Musisz:

* tworzenie agregatu;
* stworzyć brydż podłączony do agregatu;

#### Identyfikacja interfejsów i konfiguracja NIC Teaming

Otwórz Windows Powershell i uruchom komendę `Get-NetAdapter`

```powershell
PS C:\Windows\system32> Get-NetAdapter

Name                      InterfaceDescription                    ifIndex Status       MacAddress             LinkSpeed
----                      --------------------                    ------- ------       ----------             ---------
Ethernet                  Mellanox ConnectX-5 Adapter                   9 Up           04-3F-72-D5-C3-38        25 Gbps
Ethernet 4                Mellanox ConnectX-5 Adapter #4                7 Up           0C-42-A1-DD-37-B3        25 Gbps
Ethernet 2                Mellanox ConnectX-5 Adapter #2                6 Up           04-3F-72-D5-C3-39        25 Gbps
Ethernet 3                Mellanox ConnectX-5 Adapter #3                4 Up           0C-42-A1-DD-37-B2        25 Gbps
```

W tym przykładzie:

- interfejs publiczny to `Ethernet 3` and `Ethernet 4`;
- Prywatne interfejsy to `Ethernet` i `Ethernet 2`.

> [!primary]
>
> Sprawdź, czy Twoja konfiguracja jest podobna. Informacje na temat publicznych lub prywatnych interfejsów MAC są dostępne w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) lub poprzez API OVHcloud.
>

Przejdź do Panelu klienta Server, przejdź do `Local Server`{.action} i kliknij `Disabled`{.action} obok "NIC Teaming".

![NIC Teaming](images/nic_teaming_1.png){.thumbnail}

Na następnej stronie kliknij prawym przyciskiem myszy jeden z wcześniej zidentyfikowanych interfejsów prywatnych, a następnie kliknij `Add to New Team`{.action}.

![NIC Teaming](images/nic_teaming_2.png){.thumbnail}

Nadaj nazwę swojej usłudze *teaming*, a następnie dodaj drugi interfejs do *teaming*. Następnie otwórz dodatkowe właściwości, zdefiniuj "Teaming Mode" na "LACP" i kliknij `OK`{.action}.

#### Utwórz wirtualny przełącznik w Hyper-V

Będziemy musieli utworzyć wirtualny switch, który połączy nasze wirtualne maszyny z *teaming*, który stworzyliśmy.

Po pierwsze, otwórz Menadżer Hyper-V i kliknij `Virtual Switch Manager`{.action}.

![Create v-switch](images/create_vswitch_1.png){.thumbnail}

Na tej stronie upewnij się, że wybrałeś opcję "External" i kliknij `Create Virtual Switch`{.action}.

![Create v-switch](images/create_vswitch_2.png){.thumbnail}

Nadaj nazwę przełącznikowi, wybierz nowy adapter *teaming*, kliknij `Apply`{.action}, a następnie `OK`{.action}.

![Create v-switch](images/create_vswitch_3.png){.thumbnail}

Jesteś teraz gotowy do utworzenia VM i skonfigurowania sieci dla niej.

#### Konfiguracja adresu IP

W przypadku sieci vRack pierwszy, przedostatni i ostatni adres danego bloku IP są zawsze zarezerwowane odpowiednio dla adresu sieci, bramy sieciowej i *broadcastu* sieci. Oznacza to, że pierwszy możliwy do użycia adres jest drugim adresem z bloku, jak pokazano poniżej:

```sh
46.105.135.96   # Zarezerwowany: adres sieci
46.105.135.97   # Pierwszy możliwy do użycia adres IP
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109   # Ostatni możliwy do użycia adres IP
46.105.135.110   # Zarezerwowany: brama sieciowa
46.105.135.111   # Zarezerwowany: broadcast sieci
```

Aby skonfigurować pierwszy możliwy do użycia adres IP, edytuj plik konfiguracyjny sieci, jak wskazano poniżej. Użyj maski podsieci **255.255.255.240**.

> [!primary]
>
> Maska podsieci użyta w tym przykładzie jest odpowiednia dla wybranego bloku IP. Twoja maska podsieci może różnić się w zależności od wielkości Twojego bloku. Po zakupieniu bloku IP otrzymasz e-mail wskazujący maskę podsieci, której należy użyć.
>

#### Przykład konfiguracji klienckiej VM Ubuntu

Zawartość pliku `/etc/netplan/vrack.yaml`:

```bash
network:
        version: 2
        ethernets:
                eth0:
                        dhcp4: no
                        addresses:
                                - 46.105.135.97/28
                        nameservers:
                                addresses:
                                        - 213.186.33.99
                                        - 8.8.8.8
                        routes:
                                - to: 0.0.0.0/0
                                  via: 46.105.135.110
                                  on-link: true
```

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
