---
title: 'Konfiguracja kilku serwerów dedykowanych w sieci vRack'
excerpt: 'Dowiedz się, jak połączyć kilka serwerów w ramach rozwiązania vRack'
updated: 2025-04-28
---

## Wprowadzenie

vRack (wirtualna szafa) OVHcloud pozwala na wirtualne zebranie kilku serwerów (bez względu na ich liczbę i ich fizyczną lokalizację w naszych centrach danych) i na ich podłączenie do wirtualnego switcha w ramach tej samej prywatnej sieci. Dzięki temu Twoje serwery mogą komunikować się między sobą w ramach prywatnej i zabezpieczonej sieci VLAN.

**Dowiedz się, jak skonfigurować vRack na kilku serwerach dedykowanych.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Wymagania początkowe

- Usługa [vRack](/links/network/vrack) włączona na Twoim koncie
- Kilka [serwerów dedykowanych](/links/bare-metal/bare-metal) (kompatybilnych z vRack)
- Dostęp administratora (sudo) do serwera przez SSH lub RDP
- Dostęp do [Panelu klienta OVHcloud](/links/manager)
- Zakresu prywatnych adresów IP

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).

## W praktyce

### Etap 1: zamów vRack

Zaloguj się do Panelu klienta OVHcloud i kliknij przycisk `Dodaj usługę`{.action} (ikonka koszyka) w lewym menu. Użyj filtra na górze strony lub przewiń w dół, aby znaleźć usługę `vRack`{.action}.

![Zamów usługę vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}

Kliknij na zakładkę `vRack`{.action}, aby zostać przekierowanym na stronę, na której możesz zatwierdzić zamówienie. Aktywacja usługi vRack na Twoim koncie zajmie kilka minut.

### Etap 2: dodaj serwery do usługi vRack

Po aktywacji usługi vRack na Twoim koncie kliknij `Network`{.action} w menu po lewej stronie ekranu, a następnie `Prywatna sieć vRack`{.action}.

Wybierz z listy usługę vRack, aby wyświetlić listę usług, które chcesz zamówić. Kliknij każdy z serwerów, które chcesz dodać do sieci vRack, następnie kliknij przycisk `Dodaj`{.action}.

![Wybór szafy vRack](images/vrack_selection.png){.thumbnail}

### Etap 3: konfiguracja interfejsów sieciowych

Kolejne etapy obejmują konfigurację najpopularniejszych ostatnio używanych dystrybucji/systemów operacyjnych. Pierwszy etap polega zawsze na [logowaniu się do serwera](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) przez SSH lub przez sesję RDP (dla systemu Windows). Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z dużymi uprawnieniami (Administrator/sudo).

> [!primary]
>
Jeśli chodzi o poszczególne dystrybucje, należy pamiętać, że procedura konfiguracji interfejsu sieciowego oraz nazwy plików mogą ulec zmianie. Jeśli masz trudności, zalecamy zapoznanie się z podręcznikami i bazami wiedzy odpowiednich wersji systemu operacyjnego.
>
Na przykład poniższe szczegóły konfiguracji będą miały adres IP `192.168.0.0/16` (**Maska podsieci**: `255.255.0.0`).
>
Możesz korzystać z dowolnego zakresu prywatnych adresów IP i dowolnych adresów w tym zakresie.
>

#### Identyfikacja interfejsu vRack <a name="vrack-interface"></a>

Nazwy interfejsów sieciowych serwerów nie zawsze są takie same.

Najlepszym sposobem, aby sprawdzić poprawny interfejs dla usługi vRack jest sprawdzenie karty `Interfejsy sieciowe`{.action} Twojego serwera w Twoim [Panelu klienta OVHcloud](/links/manager). W dolnej tabeli kliknij adres MAC, który jest również **Nazwa** interfejsu **Prywatnego**.

![Interface vRack](images/private_interface.png){.thumbnail}

Po zalogowaniu się do serwera przez SSH możesz wyświetlić Twoje interfejsy sieciowe za pomocą polecenia:

```bash
ip a
```

W wierszu, który rozpoczyna się od ```link ether```, możesz sprawdzić, czy interfejs ten odpowiada interfejsowi **prywatnemu** podanemu w [Panelu client OVHcloud](/links/manager). Użyj tej nazwy interfejsu, aby zastąpić `NETWORK_INTERFACE` w poniższych konfiguracjach (na przykład: `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

#### Konfiguracja GNU/Linux

> [!tabs]
> **Debian (z wyłączeniem Debiana 12)**.
>>
>> W edytorze tekstu otwórz plik konfiguracyjny sieci znajdujący się w `/etc/network/interfaces.d`, aby go zmienić. Tutaj plik nazywa się `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Dodaj następujące wiersze do istniejącej konfiguracji, zmień `NETWORK_INTERFACE`, `IP_ADDRESS` oraz `NETMASK` na własne wartości:
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>>```
>>
>> **Przykład:**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Zapisz zmiany w pliku konfiguracyjnym i zamknij edytor.
>>
>> Zrestartuj usługę sieciową, aby zastosować konfigurację:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
>> Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.
>>
> **Ubuntu & Debian 12**
>>
>> Aby edytować plik, otwórz plik konfiguracyjny sieci w katalogu `/etc/netplan/` przy użyciu wybranego edytora tekstu. Plik nosi nazwę `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Dodaj następujące linie do istniejącej konfiguracji po linii `version: 2`. Zastąp `NETWORK_INTERFACE` oraz `IP_ADDRESS/PREFIX` własnymi wartościami.
>>
>> ```yaml
>>    ethernets:
>>        NETWORK_INTERFACE:
>>            dhcp4: false
>>            addresses:
>>              - IP_ADDRESS/PREFIX
>> ```
>>
>> **Przykład:**
>>
>> ![netplan config](images/netplan_configuration.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Ważne jest, aby zachować wyrównanie każdego elementu w plikach `yaml` jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Należy używać tylko klawisza spacji.
>> >
>>
>> Zapisz zmiany w pliku konfiguracyjnym i zamknij edytor.
>>
>> Zastosuj konfigurację:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
>> Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.
>>
> **CentOS, AlmaLinux i RockyLinux**
>>
>> Po zidentyfikowaniu interfejsu sieci prywatnej utwórz następujący plik konfiguracyjny sieci, używając wybranego edytora tekstu. Zastąp `NETWORK_INTERFACE` swoją własną wartością.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Dodaj następujące wiersze do istniejącej konfiguracji, zmień `NETWORK_INTERFACE`, `IP_ADDRESS` oraz `NETMASK` na własne wartości:
>>
>> ```console
>> DEVICE=NETWORK_INTERFACE
>> BOOTPROTO=static
>> IPADDR=IP_ADDRESS
>> NETMASK=NETMASK
>> ONBOOT=yes
>> TYPE=Ethernet
>> ```
>>
>> **Przykład:**
>>
>> ![centos config](images/centos_alma_configuration.png){.thumbnail}
>>
>> Zapisz zmiany w pliku konfiguracyjnym i zamknij edytor.
>>
>> Zrestartuj usługę sieciową, aby wprowadzić zmiany:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
>> W systemie **CentOS 8,  AlmaLinux i RockyLinux** należy użyć tego polecenia:
>>
>> ```bash
>> sudo systemctl restart NetworkManager.service
>> ```
>>
>> Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.
>>
> **Fedora**
>>
>> Po określeniu nazwy interfejsu prywatnego (zgodnie z wyjaśnieniami [tutaj](#vrack-interface)), wprowadź następujące polecenie, aby upewnić się, że interfejs jest poprawnie podłączony. W naszym przykładzie nasz interfejs nosi nazwę `eno2`:
>>
>> ```bash 
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet  disconnected            --
>> ```
>>
>> Jeśli `STATE` dla `DEVICE` wyświetla się jako `disconnected`, należy podłączyć go przed skonfigurowaniem IP.
>>
>> Podczas dodawania połączenia **ethernet** musimy utworzyć profil konfiguracji, który następnie przypiszemy do urządzenia.
>>
>> Wprowadź następującą komendę, zastępując polecenia `INTERFACE_NAME` oraz `CONNECTION_NAME` Twoimi wartościami.
>>
>> W naszym przykładzie nazwaliśmy nasz profil konfiguracji `private-interface`.
>>
>> ```bash
>> nmcli connection add type ethernet con-name CONNECTION_NAME ifname INTERFACE_NAME
>> ```
>>
>> **Przykład:**
>>
>> ```bash
>> nmcli connection add type ethernet con-name private-interface ifname eno2
>> ```
>>
>> - Upewnij się, że interfejs został prawidłowo podłączony:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> eno2             ethernet  connected               private-interface
>> lo               loopback  connected (externally)  lo              
>> ```
>>
>> W wyniku tej operacji nowy plik konfiguracyjny o nazwie *xxxxxxxxxx.nmconnection* zostanie utworzony w folderze`/etc/NetworkManager/system-connections`.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> Możesz edytować ten plik za pomocą managera `nmcli`, zastępując `IP_ADDRESS`, `PREFIX` oraz `CONNECTION_NAME` własnymi wartościami.
>>
>> - Dodaj IP:
>>
>> ```bash
>> nmcli connection modify CONNECTION_NAME IPv4.address IP_ADDRESS/PREFIX
>> ```
>>
>> **Przykład:**
>>
>> ```bash
>> nmcli connection modify private-interface IPv4.address 192.168.0.1/16
>> ```
>>
>> - Zmień konfigurację z **auto** na **manual**:
>>
>> ```bash
>> sudo nmcli connection modify CONNECTION_NAME IPv4.method manual
>> ```
>>
>> **Przykład:**
>>
>> ```bash
>> sudo nmcli connection modify private-interface IPv4.method manual
>> ```
>>
>> - Utrwal konfigurację:
>>
>> ```bash
>> sudo nmcli con mod CONNECTION_NAME connection.autoconnect true
>> ```
>>
>> **Przykład:**
>>
>> ```bash
>> sudo nmcli con mod private-interface connection.autoconnect true
>> ```
>>
>> - Zrestartuj sieć za pomocą polecenia:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>

#### Konfiguracja Windows

Na przykład następujące konfiguracje będą korzystać z zakresu adresów IP `192.168.0.0/16` (**maska podsieci**: `255.255.0.0`).

Zaloguj się do serwera Windows przez zdalny pulpit i przejdź do **Panelu konfiguracyjnego**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Kliknij `Network and Internet`{.action}.

![Sieć i Internet](images/windows_network_and_internet.png){.thumbnail}

Otwórz `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}

Kliknij `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

Kliknij prawym przyciskiem myszy w interfejsie sieci secondary, a następnie kliknij `Properties`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

W naszym przykładzie `Ethernet 2` to interfejs używany w sieci vRack. Możliwe jest jednak, że karta sieciowa vRack używa innego interfejsu. Korzystaj z interfejsu, który nie posiada głównego adresu IP serwera lub który używa przypisanego do siebie adresu IP.

Kliknij dwukrotnie `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4](images/windows_ipv4.png){.thumbnail}

Kliknij **Użyj następującego** adresu IP. W odpowiednim polu wpisz dowolny adres **IP** z Twojego zakresu prywatnego oraz odpowiednią **maskę** podsieci (`255.255.0.0` w tym przykładzie).

![Użyj następującego adresu IP](images/windows_use_following_ip_address.png){.thumbnail}

Kliknij `OK`{.action}, aby zapisać zmiany, po czym zrestartuj serwer, aby je zastosować.

Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.

## Sprawdź również

[Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Dołącz do [grona naszych użytkowników](/links/community).