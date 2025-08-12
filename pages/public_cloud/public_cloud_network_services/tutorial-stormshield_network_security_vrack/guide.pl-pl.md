---
title: 'Zabezpieczenie infrastruktury OVHcloud za pomocą Stormshield Network Security'
excerpt: 'Dowiedz się, jak zabezpieczyć Twoją infrastrukturę OVHcloud dzięki rozwiązaniu Stormshield Network Security wdrożonemu w Public Cloud'
updated: 2025-05-29
---

## Wprowadzenie

W dzisiejszym, nieustannie zmieniającym się krajobrazie cyfrowym, zabezpieczenie infrastruktury chmurowej stało się priorytetem dla firm każdej wielkości. Ponieważ firmy w coraz większym stopniu polegają na rozwiązaniach chmurowych w swojej działalności, zapewnienie ochrony wrażliwych danych i zachowanie integralności sieci jest krytycznym zadaniem. Stormshield SNS EVA (Stormshield Elastic Virtual Appliance) to kompleksowe rozwiązanie bezpieczeństwa zaprojektowane w celu ochrony środowisk chmurowych przed wieloma zagrożeniami.

Niniejszy przewodnik zawiera instrukcje krok po kroku dotyczące wdrażania i konfigurowania SNS EVA w Public Cloud OVHcloud za pomocą usługi vRack i publicznego routingu IP, obejmujące kluczowe funkcje, takie jak zapory sieciowe, VPN IPSec i VPN SSL/TLS. Postępując zgodnie z naszym przewodnikiem, zwiększasz bezpieczeństwo Twojej infrastruktury Public Cloud i zapewnisz bezpieczeństwo Twoich operacji.

**Ten przewodnik wyjaśnia, jak zabezpieczyć Twoją infrastrukturę OVHcloud za pomocą Stormshield Network Security wdrożonego w Public Cloud.**

> [!warning]
> Ten tutorial wyjaśnia, jak korzystać z rozwiązań OVHcloud wraz z zewnętrznymi narzędziami i opisuje działania, jakie należy wykonać w konkretnym kontekście. Może być konieczne dostosowanie instrukcji do Twojego przypadku.
>
> W przypadku trudności w stosowaniu się do tych instrukcji zalecamy skontaktowanie się z [wyspecjalizowanym usługodawcą](/links/partner) i/lub omówienie problemu z naszą społecznością. Więcej informacji zawiera sekcja [Sprawdź również](#gofurther) w tym tutorialu.
>

## Wymagania początkowe

- Jeden [projekt Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) na Twoim koncie OVHcloud.
- Dostęp do [panelu klienta OVHcloud](/links/manager).
- [użytkownik OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (opcjonalnie).
- Podstawowa znajomość sieci.
- Konto Stormshield utworzone w [witrynie Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm).
- Upewnić się, że vRack jest włączony i skonfigurowany w taki sposób, aby umożliwić bezpieczną komunikację między komponentami infrastruktury.
- Blok adresów [Additional IP](/links/network/additional-ip) (/29) umożliwiający failover i konfigurację wysokiej dostępności.
- Licencja Stormshield Elastic Virtual Appliance BYOL (**B**ring **Y**our **O**wn **L**icence) uzyskana od [zewnętrznych partnerów lub resellerów](https://www.stormshield.com/partner/partner-finder/), którą należy dostarczyć podczas instalacji i konfiguracji.

## W praktyce

Oprócz instalacji i konfiguracji Stormshield Network Security, ten tutorial prezentuje różne przypadki użycia w zależności od Twoich potrzeb:

- [Instalacja i konfiguracja Stormshield Network Security w Twoim środowisku Public Cloud](#step1)
- [Przykład zastosowania 1: skonfiguruj Stormshield Network Security do użycia jako brama](#step2)
- [Przykład zastosowania 2: konfiguracja NAT (**N**etwork **A**ddress **T**ranslation) w celu uzyskania dostępu do prywatnej usługi HTTP z zewnątrz](#step3)
- [Przykład zastosowania 3: tunel IPsec (site-to-site)](#step4)
- [Przykład zastosowania 4: VPN SSL/TLS (klient-strona)](#step5)

### Instalacja i konfiguracja Stormshield Network Security w Twoim środowisku Public Cloud <a name="step1"></a>

> [!primary]
> W tym tutorialu instalacja i konfiguracja Stormshield SNS EVA odbywa się głównie za pomocą wiersza poleceń. Otwórz terminal, aby wykonać instrukcje.
>
> Pamiętaj, że wszystkie sekcje dotyczące "Wysokiej dostępności" lub "Stormshield-2" są opcjonalne, podobnie jak korzystanie z sieci vRack z Additional IP. Zostały one dołączone, aby pokazać, jak skonfigurować system z dwoma instancjami w trybie aktywnym/pasywnym, aby zapewnić wysoką dostępność. W minimalnej wersji może również działać z jedną instancją, jeśli to wystarczy do Twoich potrzeb.

> [!primary]
> W tym scenariuszu wykorzystamy dwie wirtualne maszyny skonfigurowane jako urządzenie zabezpieczające, aby osiągnąć wysoką dostępność (**H**igh **A**vailability lub HA), a także dodatkową wirtualną maszynę do administrowania urządzeniem zabezpieczającym i zarządzania nim. Konfiguracja ta gwarantuje ochronę przed awariami i ciągłą dostępność usługi. Więcej przykładów i szczegółowych wskazówek dotyczących opcji skalowalności można znaleźć w [dokumentacji Stormshield](https://documentation.stormshield.eu/HOME/Content/Website_Topics/Root-HomePage-EN.htm).

#### Konfiguracja usługi vRack

Na tym etapie konfigurujemy usługę vRack - prywatną sieć wirtualną dostarczaną przez OVHcloud. Funkcja vRack pozwala na połączenie kilku instancji lub serwerów w ramach środowiska Public Cloud, dzięki czemu sieć jest odizolowana, a komunikacja pozostaje bezpieczna. Po dodaniu Twojego projektu Public Cloud i bloku Additional IP do tej samej sieci vRack możesz zapewnić bezpieczną komunikację instancji SNS EVA, zachowując jednocześnie pełną kontrolę nad zarządzaniem adresami IP. Prywatna sieć vRack umożliwia również zabezpieczenie serwerów Bare Metal Cloud lub wirtualnych maszyn Private Cloud za pomocą urządzeń bezpieczeństwa wdrożonych w chmurze publicznej.

**Dodaj Twój projekt Public Cloud i blok Additional IP do tej samej sieci vRack.**

Przykładowo, blok IP to `147.135.161.152/29`.<br>
Używamy pierwszego adresu IP `147.135.161.153` dla pierwszej instancji SNS EVA i tymczasowo używamy drugiego adresu IP `147.135.161.154` dla drugiego SNS EVA.<br>
Adres bramy to `147.135.161.158`.

Więcej informacji zawiera przewodnik "[Konfiguracja bloku IP w sieci vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)".

Poniżej przedstawiamy architekturę, którą zamierzamy wprowadzić.

![SNS EVA vrack](images/stormshield-ha-vrack.png){.thumbnail}

#### Skonfiguruj sieć OpenStack

Utwórz prywatną sieć dla zewnętrznych interfejsów SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 0 --disable-port-security stormshield-ext
```

```bash
openstack subnet create --network stormshield-ext --subnet-range 192.168.1.0/29 --dhcp stormshield-ext
```

Utwórz prywatną sieć dla wewnętrznych interfejsów SNS EVA:

```bash
openstack network create --provider-network-type vrack --provider-segment 200 --disable-port-security stormshield-vlan200
```

```bash
openstack subnet create --network stormshield-vlan200 --subnet-range 10.200.0.0/16 --dhcp --dns-nameserver <dns_address_ip> stormshield-vlan200
```

Utwórz prywatną sieć dla interfejsów SNS EVA HA (**H**igh **A**vailability):

```bash
openstack network create --provider-network-type vrack --provider-segment 199 --disable-port-security stormshield-ha
```

```bash
openstack subnet create --network stormshield-ha --subnet-range 192.168.2.0/29 --dhcp --gateway none stormshield-ha
```

#### Wdrażanie instancji SNS EVA

Przejdź do sekcji `download` na [oficjalnej stronie Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/PAYG_Deployment_Guide/Downloading_installation_file.htm). Zaloguj się do konta Stormshield i postępuj zgodnie z instrukcjami, aby pobrać obraz Stormshield OpenStack.

Przejdź do katalogu, do którego załadowałeś obraz SNS EVA OpenStack i zaimportujesz obraz (w tym tutorialu używamy obrazu `utm-SNS-EVA-4.8.3-openstack.qcow2`):

```bash
openstack image create --disk-format raw --container-format bare --file ./utm-SNS-EVA-4.8.3-openstack.qcow2 stormshield-SNS-EVA-4.8.3
```

Utwórz instancje SNS EVA (w tym przykładzie nazwaliśmy je `stormshield-1` i `stormshield-2`):

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-1
```

```bash
openstack server create --flavor b3-32 --image stormshield-SNS-EVA-4.8.3 --network stormshield-ext --network stormshield-vlan200 --network stormshield-ha stormshield-2
```

> [!primary]
> W celu zwiększenia wydajności zalecamy użycie wymienionych wersji maszyn wirtualnych dla określonych typów licencji SNS EVA:
>
> - EVA1: B3-8 / B3-16
> - EVA2: B3-16 / B3-32
> - EVA3: B3-32 / B3-64
> - EVA4: B3-64 / B3-128
> - EVAU: B3-128 / B3-256
>

#### Konfiguracja instancji SNS EVA

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. W menu po lewej stronie kliknij `Instancje`{.action} w zakładce **Compute**, następnie odnajdź Twoje dwie instancje SNS EVA.

Uzyskaj dostęp do konsoli VNC dla obu instancji SNS EVA i skonfiguruj układ klawiatury oraz hasło.

Skonfiguruj domyślną bramę w pierwszym serwerze SNS EVA za pomocą bramy bloku IP:

```console
vi /usr/Firewall/ConfigFiles/object

[Host]
Firewall_out_router=147.135.161.158,resolve=static
...
```

Skonfiguruj zewnętrzny interfejs sieciowy na pierwszym serwerze SNS EVA z pierwszym możliwym do użycia adresem IP naszego bloku IP oraz wewnętrznym interfejsem sieciowym o adresie IP `10.200.0.1`:

```console
vi /usr/Firewall/ConfigFiles/network

...
[ethernet0]
...
Address=147.135.161.153
Mask=255.255.255.248

[ethernet1]
...
Address=10.200.0.1
Mask=255.255.0.0
...
```

Zastosuj nową konfigurację sieci:

```bash
ennetwork
```

Skonfiguruj drugi SNS EVA, ale z drugim adresem IP `147.135.161.154` naszego bloku IP dla interfejsu zewnętrznego zamiast `147.135.161.153`.

Dodaj inną licencję do obu instancji SNS EVA, postępując zgodnie z [oficjalną dokumentacją](https://documentation.stormshield.eu/SNS/v4/en/Content/Installation_and_first_time_configuration/Firewall_license_installation.htm).

Utwórz regułę zapory podobną do tej w obu usługach SNS EVA w graficznym interfejsie sieciowym:

![SNS EVA vrack](images/ha-filter.png){.thumbnail}

Na pierwszym serwerze SNS EVA utwórz grupę zapór sieciowych (`Configuration` > `System` > `High Availability`). W odniesieniu do adresu IP sprawdź, który adres IP został przypisany do interfejsu HA przez DHCP OpenStack.

![SNS EVA vrack](images/ha-1.png){.thumbnail}

![SNS EVA vrack](images/ha-2.png){.thumbnail}

Po zakończeniu konfiguracji HA na pierwszym serwerze SNS EVA dołącz do grupy zapory sieciowej na drugim:

![SNS EVA vrack](images/ha-3.png){.thumbnail}

![SNS EVA vrack](images/ha-4.png){.thumbnail}

Drugi zewnętrzny interfejs SNS EVA będzie odtąd korzystał z tego samego adresu IP co pierwszy. W związku z tym adres IP `147.135.161.154` może być od tej pory wykorzystywany do innych celów.

Jeśli wszystko jest skonfigurowane poprawnie, po ponownym uruchomieniu drugiego SNS EVA, powinieneś zobaczyć coś podobnego we wskaźnikach integralności linku HA:

![SNS EVA vrack](images/ha-5.png){.thumbnail}

#### Konfiguracja i zabezpieczenie zarządzania usługą SNS EVA

> [!tabs]
> **Etap 1**
>>
>> Odzyskaj publiczny adres IP:
>>
>> ```console
>> curl ipinfo.io/ip
>> <adresse_ip>
>> ```
>>
> **Etap 2**
>>
>> Utwórz obiekt hosta dla publicznego adresu IP:
>>
>>![SNS EVA vrack](images/configure-management-1.png){.thumbnail}
>>
> **Etap 3**
>>
>> Ogranicz dostęp do graficznego interfejsu użytkownika do publicznego adresu IP i włącz SSH:
>>
>> ![SNS EVA vrack](images/configure-management-2.png){.thumbnail}
>>
> **Etap 4**
>>
>> Ogranicz dostęp SSH do publicznego adresu IP:
>>
>> ![SNS EVA vrack](images/configure-management-3.png){.thumbnail}

#### Ponowna synchronizacja konfiguracji HA

Synchronizacja między dwoma instancjami SNS EVA jest niezbędna, aby zapewnić aktualność obu zapór przy tej samej konfiguracji. Można to zrobić za pomocą wiersza poleceń SSH lub bezpośrednio w graficznym interfejsie użytkownika (GUI).

> [!primary]
> W tym przykładzie używamy wiersza poleceń SSH. Jeśli chcesz skorzystać z graficznego interfejsu użytkownika do synchronizacji, zapoznaj się z sekcją "Ekran wysokiej dostępności" w [dokumentacji Stormshield SNS EVA](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/High_Availability/High_availability_screen.htm), aby poznać szczegółowe etapy.

Na tym etapie obie instancje SNS EVA nie muszą być synchronizowane, ponieważ skonfigurowaliśmy dużą liczbę parametrów w pierwszej instancji, o której druga instancja nie wie.

Zaloguj się do aktywnej instancji SNS EVA przez SSH:

```bash
ssh admin@<adresse_ip>
```

Synchronizuj dwa SNS EVA:

```bash
hasync
```

Operacja ta jest konieczna przy każdej aktualizacji konfiguracji.

### Konfiguracje przypadków użycia

Po wdrożeniu firewalla SNS EVA można go używać w kilku zaawansowanych scenariuszach bezpieczeństwa, takich jak VPN IPsec, VPN SSL/TLS, bramy sieciowe (IN lub OUT), jak opisano poniżej.
Dzięki prywatnej sieci vRack wymienione sieci VLAN mogą być również używane poza środowiskiem Public Cloud: w przypadku produktów Bare Metal lub Private Cloud.

#### Przykład zastosowania nr 1: skonfiguruj Stormshield Network Security do użytku jako bramę <a name="step2"></a>

W tym przykładzie wirtualna zapora będzie działać jako bezpieczna brama dla prywatnych instancji (lub innego serwera) w ramach danej sieci vRack. Ten typ ruchu może być filtrowany przy użyciu adresów URL na zaporze.

![SNS EVA vrack](images/stormshield-gateway.png){.thumbnail}

- Utwórz obiekt sieciowy dla , postępując zgodnie z [tą częścią oficjalnej dokumentacji Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm).

- [Utwórz nową regułę filtrowania](https://documentation.stormshield.com/SNS/v4/en/Content/HowTo_-_IPSec_VPN_-_Authentication_by_certificate/Setup-Main-Site-30-Creating-Filtering-policy.htm) podobną do tej, aby umożliwić ruch z wychodzący:

![SNS EVA vrack](images/gateway-2.png){.thumbnail}

- [Utwórz podobną regułę NAT](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Filtering_and_NAT/NAT_tab.htm):

![SNS EVA vrack](images/gateway-3.png){.thumbnail}

Synchronizuj dwie instancje HA SNS EVA:

```bash
ssh admin@<adresse_ip>
hasync
```

##### Sprawdzanie, czy instancja może dotrzeć do Internetu z poziomu

[Importuj publiczny klucz SSH](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/keypair.html):

```bash
openstack keypair create --public-key ~/.ssh/id_rsa.pub <name>
```

Utwórz instancję na :

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network stormshield-vlan200 --key-name <name> ubuntu-webserver
```

Zaloguj się do instancji SNS EVA przez SSH:

```bash
ssh -A admin@<ip_instance>
```

Z instancji SNS EVA połącz się z serwerem www Ubuntu za pomocą SSH. Sprawdź, który adres IP został przypisany do instancji serwera WWW Ubuntu przez DHCP OpenStack:

```bash
ssh ubuntu@<adresse_ip>
```

Sprawdź, czy możesz wejść na publiczną stronę WWW:

```bash
curl -I https://www.ovh.com/manager/
HTTP/2 200
```

#### Przykłady zastosowania nr 2: konfiguruj NAT (**N**etwork **A**ddress **T**ranslation), aby uzyskać dostęp do prywatnej usługi HTTP z zewnątrz <a name="step3"></a>

W tym przykładzie Internet musi być w stanie dotrzeć do prywatnego serwera www zainstalowanego na . Celem tej konfiguracji jest ochrona serwera sieci Web przed zaporą sieciową.

![SNS EVA vrack](images/stormshield-nat-http.png){.thumbnail}

> [!tabs]
> **Etap 1**
>>
>> Zainstaluj Nginx w instancji ubuntu-webserver:
>>
>> ```bash
>> sudo apt-get update
>> sudo apt-get install -y nginx
>> ```
>>
> **Etap 2**
>>
>> Utwórz obiekt hosta dla instancji ubuntu-webserver:
>>
>>![SNS EVA vrack](images/nat-1.png){.thumbnail}
>>
> **Etap 3**
>>
>> Utwórz regułę NAT podobną do tej:
>>
>> ![SNS EVA vrack](images/nat-2.png){.thumbnail}
>>
> **Etap 4**
>>
>> Utwórz regułę filtrowania podobną do tej:
>>
>> ![SNS EVA vrack](images/nat-3.png){.thumbnail}
>>

Sprawdź stronę www z zewnątrz:

```bash
curl -I http://<adresse_ip>
HTTP/1.1 200 OK
```

Synchronizuj dwie instancje HA SNS EVA:

```bash
ssh admin@<adresse_ip>
hasync
```

#### Przykłady zastosowania nr 3: tunel IPsec (od strony do strony) <a name="step4"></a>

W tym przykładzie tunel IPsec jest skonfigurowany tak, aby łączył dwa różne regiony PCI: SBG7 (sieć VLAN200) i GRA11 (sieć VLAN201), ale każda z tych lokalizacji może być lokalizacją zdalną, taką jak biuro lub centrum danych.

![SNS EVA vrack](images/stormshield-ipsec.png){.thumbnail}

Powtórz wszystkie kroki w innym regionie, używając sieci VLAN 201 zamiast VLAN 200 i różnych zakresów adresów IP dla podsieci Stormshield-ext i Stormshield-ha.;

#### **Skonfiguruj pierwszą stronę**

- [Dodaj obiekt hosta](https://documentation.stormshield.eu/SNS/v4/en/Content/Stormshield_Network_SSO_Agent_Linux/Configure_Firewall_Objects.htm) dla zdalnego serwera SNS EVA i dodaj obiekt sieciowy dla zdalnej sieci prywatnej .

- [Utwórz standardowy tunel typu site-to-site](https://documentation.stormshield.eu/SNS/v4/fr/Content/User_Configuration_Manual_SNS_v4/IPSec_VPN/Encryption_policy-Tunnels_tab-Site_to_Site-Creating.htm).

> [!tabs]
> **Etap 1**
>>
>> Dodaj lokalną sieć prywatną i zdalną sieć prywatną:
>>
>>![SNS EVA vrack](images/ipsec-3.png){.thumbnail}
>>
> **Etap 2**
>>
>> Utwórz bramę zdalną:
>>
>>![SNS EVA vrack](images/ipsec-4.png){.thumbnail}
>>
> **Etap 3**
>>
>> Wybierz klucz wstępny:
>>
>>![SNS EVA vrack](images/ipsec-5.png){.thumbnail}
>>
> **Etap 4**
>>
>> Utwórz i włącz tunel:
>>
>>![SNS EVA vrack](images/ipsec-7.png){.thumbnail}
>>
> **Etap 5**
>>
>> Dodaj taką regułę filtrowania, aby zezwalać na ruch przez tunel:
>>
>>![SNS EVA vrack](images/ipsec-8.png){.thumbnail}
>>

Synchronizuj dwie instancje HA SNS EVA:

```bash
ssh admin@<adresse_ip>
hasync
```

##### **Konfiguracja drugiej strony**

Do exactly the same as for the first site, but use VLAN200 for the remote private network and the appropriate IP address for the OVH_REMOTE_FW.

##### **Testuj tunel VPN IPsec**

Z pierwszej instancji prywatnego serwera www strony:

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address>(<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=15.2 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=14.0 ms
```

Z drugiej instancji prywatnego serwera www strony:

```console
ssh -A admin@<ip_address>
ssh ubuntu@<ip_address>
ping <ip_address>
PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=16.9 ms
64 bytes from <ip_address>: icmp_seq=3 ttl=64 time=16.4 ms
```

##### Przykłady zastosowania nr 4: VPN SSL/TLS (klient-strona) <a name="step5"></a>

W tym przykładzie zdalny klient OpenVPN połączy się z siecią prywatną wewnątrz VLAN200.

![SNS EVA vrack](images/stormshield-ssl-vpn.png){.thumbnail}

##### **Konfiguracja katalogu LDAP**

- [Utwórz wewnętrzny katalog LDAP](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/Directory_configuration/Creating_an_internal_LDAP.htm), aby zarządzać użytkownikami VPN.

W scenariuszu produkcji ten protokół LDAP/AD musi być zdalny, a nie lokalny.

![SNS EVA vrack](images/ssl-vpn-1.png){.thumbnail}

- Utwórz katalog użytkowników:

![SNS EVA vrack](images/ssl-vpn-2.png){.thumbnail}

- Dodaj użytkownika do katalogu lokalnego:

![SNS EVA vrack](images/ssl-vpn-3.png){.thumbnail}

- Wybierz hasło dla nowego użytkownika:

![SNS EVA vrack](images/ssl-vpn-4.png){.thumbnail}

##### **Konfiguracja obiektów sieci VPN**

Utwórz dwa obiekty sieciowe dla klienta VPN SSL.

Sieć klienta UDP:

![SNS EVA vrack](images/ssl-vpn-5.png){.thumbnail}

Sieć klienta TCP:

![SNS EVA vrack](images/ssl-vpn-6.png){.thumbnail}

##### **Konfiguracja serwera VPN SSL**

Skonfiguruj serwer VPN SSL:

![SNS EVA vrack](images/ssl-vpn-7.png){.thumbnail}

##### **Zarządzanie uprawnieniami użytkowników**

Dodaj do swojego użytkownika uprawnienie do korzystania z serwera VPN SSL (`Configuration` > `Users` > `Access privileges` > `Detailed Access` > `Add`)

Wyszukaj użytkownika:

![SNS EVA vrack](images/ssl-vpn-8.png){.thumbnail}

Zezwalaj na VPN SSL:

![SNS EVA vrack](images/ssl-vpn-9.png){.thumbnail}

##### **Konfiguracja reguł filtrowania**

Dodaj taką regułę filtrowania, aby umożliwić klientowi VPN dostęp do :

![SNS EVA vrack](images/ssl-vpn-10.png){.thumbnail}

##### **Synchronizacja instancji SNS**

Synchronizuj dwie instancje HA SNS EVA:

```bash
ssh admin@<ip_address>
hasync
```

##### **Przetestuj VPN SSL/TLS**

> [!primary]
> Aby przetestować połączenie SSL/TLS, użyj dowolnego urządzenia, na którym zainstalowany jest OpenVPN. Przykład ten obejmuje test klienta OpenVPN na instancji OpenStack w innym regionie.
>
> W tym przykładzie korzystamy z klienta OpenVPN, ale możesz również użyć [wersji pakietu Stormshield](https://vpn.stormshield.eu/).

Pobierz plik konfiguracyjny VPN (`Configuration` > `VPN` > `SSL VPN` > `Advanced configuration` > `Export the configuration file`).

Utwórz publiczną instancję klienta OpenVPN w wybranym regionie:

```bash
openstack server create --flavor b2-7 --image "Ubuntu 22.04" --network Ext-Net --key-name sguyenne ubuntu-vpn-client
```

Sprawdź adres IP przypisany do wystąpienia i skopiuj do niego plik konfiguracyjny:

```bash
scp ~/Download/openvpn_mobile_client.ovpn ubuntu@<ip_address>:~
```

Zaloguj się do instancji:

```bash
ssh ubuntu@<ip_address>
```

Zainstaluj klienta OpenVPN:

```bash
sudo apt-get update
sudo apt-get install -y openvpn
```

Zaloguj się do VPN:

```bash
sudo openvpn --config openvpn_mobile_client.ovpn 
Enter Auth Username: address@stormshield.ovh
🔐 Enter Auth Password: ******************
```

Test ping prywatnej instancji serwera www:

```console
ssh ubuntu@<ip_address>
ping <ip_address>

PING <ip_address> (<ip_address>) 56(84) bytes of data.
64 bytes from <ip_address>: icmp_seq=1 ttl=64 time=14.1 ms
64 bytes from <ip_address>: icmp_seq=2 ttl=64 time=13.1 ms
```

## Idź dalej <a name="gofurther"></a>

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).