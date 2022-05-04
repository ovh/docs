---
title: 'Konfiguracja kilku serwerów dedykowanych w sieci vRack'
slug: konfiguracja-kilku-serwerow-dedykowanych-vrack
excerpt: 'Dowiedz się, jak połączyć kilka serwerów w ramach rozwiązania vRack'
section: vRack
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja dnia 02-05-2022**

## Wprowadzenie

vRack (wirtualna szafa) OVHcloud pozwala na wirtualne zebranie kilku serwerów (bez względu na ich liczbę i ich fizyczną lokalizację w naszych centrach danych) i na ich podłączenie do wirtualnego switcha w ramach tej samej prywatnej sieci. Dzięki temu Twoje serwery mogą komunikować się między sobą w ramach prywatnej i zabezpieczonej sieci VLAN.

**Dowiedz się, jak skonfigurować vRack na kilku serwerach dedykowanych.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Wymagania początkowe

- Usługa [vRack](https://www.ovh.pl/rozwiazania/vrack/) włączona na Twoim koncie
- Kilka [serwerów dedykowanych](https://www.ovhcloud.com/pl/bare-metal/) (kompatybilnych z vRack)
- Dostęp administratora (root) do serwera przez SSH lub RDP
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Zakresu prywatnych adresów IP

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

### Etap 1: zamów vRack

Po zalogowaniu się do Panelu klienta OVHcloud przejdź do menu `Bare Metal Cloud`{.action} i kliknij przycisk `Zamów`{.action}. W tym menu kliknij `vRack`{.action}.

![Zamów vrack](images/orderingvrack.png){.thumbnail}

Zostaniesz przekierowany na inną stronę, aby zatwierdzić zamówienie. Operacja zajmie kilka minut.

### Etap 2: dodaj serwery do usługi vRack

Po aktywacji usługi vRack na Twoim koncie przejdź do sekcji `Bare Metal Cloud`{.action} w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), kliknij przycisk `Network`{.action} i otwórz menu `vRack`{.action}.

Wybierz z listy usługę vRack, aby wyświetlić listę usług, które chcesz zamówić. Kliknij każdy z serwerów, które chcesz dodać do sieci vRack, następnie kliknij przycisk `Dodaj`{.action}.

![Wybór szafy vRack](images/vrack_selection.png){.thumbnail}

### Etap 3: konfiguracja interfejsów sieciowych

Kolejne etapy obejmują konfigurację najpopularniejszych ostatnio używanych dystrybucji/systemów operacyjnych. Pierwszy etap polega zawsze na [logowaniu się do serwera](https://docs.ovh.com/pl/dedicated/pierwsze-kroki-z-serwerem-dedykowanym/) przez SSH lub przez sesję RDP (dla systemu Windows). Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z dużymi uprawnieniami (Administrator/sudo).

> [!primary]
>
Jeśli chodzi o poszczególne dystrybucje, należy pamiętać, że procedura konfiguracji interfejsu sieciowego oraz nazwy plików mogą ulec zmianie. Jeśli masz trudności, zalecamy zapoznanie się z podręcznikami i bazami wiedzy odpowiednich wersji systemu operacyjnego.
>
Na przykład poniższe szczegóły konfiguracji będą miały adres IP `192.168.0.0/16` (**Maska podsieci**: `255.255.0.0`).
>
Możesz korzystać z dowolnego zakresu prywatnych adresów IP i dowolnych adresów w tym zakresie.
>

#### Konfiguracja GNU/Linux

Nazwy interfejsów sieciowych serwerów nie zawsze są takie same. W poniższych przykładach zastąp NETWORK_INTERFACE odpowiednią nazwą interfejsu.

Najlepszym sposobem, aby sprawdzić poprawny interfejs dla usługi vRack jest sprawdzenie karty `Interfejsy sieciowe`{.action} Twojego serwera w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W dolnej tabeli kliknij adres MAC, który jest również **Nazwa** interfejsu **Prywatnego**.

![Interface vRack](images/private_interface.png){.thumbnail}

Po zalogowaniu się do serwera przez SSH możesz wyświetlić Twoje interfejsy sieciowe za pomocą polecenia:

```bash
ip a
```

W wierszu, który rozpoczyna się od ```link ether```, możesz sprawdzić, czy interfejs ten odpowiada interfejsowi **prywatnemu** podanemu w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Użyj tej nazwy interfejsu, aby zastąpić `NETWORK_INTERFACE` w poniższych konfiguracjach (na przykład: `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

##### **Debian**

W edytorze tekstu otwórz plik konfiguracyjny sieci znajdujący się w `/etc/network/interfaces.d`, aby go zmienić. Tutaj plik nazywa się `50-cloud-init`.

```bash
editor /etc/network/interfaces.d/50-cloud-init
```

Dodaj następujące wiersze:

```console
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE inet static
address 192.168.0.1
netmask 255.255.0.0
```

Zapisz zmiany w pliku konfiguracyjnym i zamknij edytor.

Zrestartuj usługę sieciową, aby zastosować konfigurację:

```bash
systemctl restart networking
```

Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.

##### **Ubuntu**

Aby go edytować, otwórz plik konfiguracyjny sieci w `/etc/netplan/`. Ten plik nazywa się `50-cloud-init.yaml`.

```bash
editor /etc/netplan/50-cloud-init.yaml
```

Dodaj konfigurację IP do istniejącej konfiguracji po linii `ethernets`:

```yaml
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: no
            addresses:
              - 192.168.0.1/16
```

> [!warning]
>
> Ważne jest, aby zachować wyrównanie każdego elementu w plikach `yaml` jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Należy używać tylko klawisza spacji.
>

Zapisz zmiany w pliku konfiguracyjnym i zamknij edytor.

Zastosuj konfigurację:

```bash
netplan apply
```

Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.

##### **CentOS**

Za pomocą wybranego edytora tekstu otwórz plik `/etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE`.

```bash
editor /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
```

Dodaj te linie:

```console
DEVICE=NETWORK_INTERFACE
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Zapisz zmiany w pliku konfiguracyjnym i zamknij edytor.

Zrestartuj usługę sieciową, aby wprowadzić zmiany:

```bash
systemctl restart networking
```

W systemie **CentOS 8** należy użyć tego polecenia:

```bash
systemctl restart NetworkManager.service
```

Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.

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

Kliknij prawym przyciskiem myszy w interfejsie sieci secondary, a następnie kliknij `Właściwości`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Kliknij dwukrotnie `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4](images/windows_ipv4.png){.thumbnail}

Kliknij **Użyj następującego** adresu IP. W odpowiednim polu wpisz dowolny adres **IP** z Twojego zakresu prywatnego oraz odpowiednią **maskę** podsieci (`255.255.0.00` w tym przykładzie).

![Użyj następującego adresu IP](images/windows_use_following_ip_address.png){.thumbnail}

Kliknij `OK`{.action}, aby zapisać zmiany, po czym zrestartuj serwer, aby je zastosować.

Powtórz tę procedurę dla innych serwerów i przypisz każdemu z nich nieużywany adres IP z Twojego zakresu prywatnego. Twoje serwery będą mogły komunikować się między sobą w sieci prywatnej.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.