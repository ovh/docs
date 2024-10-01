---
title: "Jak konfigurować IPv6 w instancji Public Cloud"
excerpt: "Dowiedz się, jak skonfigurować protokół IPv6 w instancji Public Cloud"
updated: 2024-03-05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Internet Protocol version 6 (IPv6) to najnowsza wersja protokołu internetowego (IP – Internet Protocol). Został on zaprojektowany, by rozwiązać od dawna przewidywany problem wyczerpywania się puli adresów IPv4 dzięki wykorzystaniu adresów 128-bitowych zamiast tradycyjnie stosowanych 32-bitowych adresów IPv4.

Każda instancja Public Cloud jest dostarczana z jednym adresem IPv4 i jednym adresem IPv6.

Domyślnie skonfigurowany jest tylko adres IPv4.

**W tym tutorialu dowiesz się, jak skonfigurować adres IPv6 dla instancji Public Cloud.**

> [!primary]
> 
> Aktualnie usługi Floating IP i Gateway nie obsługują IPv6. IPv6 można używać tylko z instancjami w [trybie publicznym](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts#publicmode).
>

## Wymagania początkowe

* Dowolny model instancji Public Cloud.
* Dostęp administracyjny (sudo) przez SSH lub zdalny pulpit (Windows) do Twojego serwera
* Posiadanie podstawowej wiedzy w zakresie sieci informatycznych.
* Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

Poniższe sekcje zawierają konfiguracje aktualnie oferowanych przez nas dystrybucji oraz najczęściej używane dystrybucje/systemy operacyjne. Pierwszy etap polega zawsze na połączeniu się z Twoim serwerem przez SSH lub za pomocą sesji połączenia GUI (RDP w przypadku instancji Windows).

> [!warning]
>
> Należy pamiętać, że w najnowszych wersjach systemów operacyjnych Linux adres IPv6 jest skonfigurowany domyślnie w instancjach Public Cloud. W tym przypadku nie musisz jej konfigurować. Przed wprowadzeniem jakichkolwiek zmian sprawdź plik konfiguracyjny systemu operacyjnego.
>

### Słowniczek

Oto krótki słowniczek terminów stosowanych w tym tutorialu:

|Słowniczek|Opis|
|---|---|
|YOUR_IPV6|Adres IPv6 przypisany do Twojej usługi|
|IPV6_PREFIX|Prefiks Twojego bloku IPv6 (np. 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPV6_GATEWAY|Brama (lub *gateway*) dla bloku IPv6|

### Pobranie danych sieciowych

Zaloguj się do panelu klienta, kliknij menu sekcji `Public Cloud`{.action}, wybierz projekt Public Cloud i kliknij pozycję `Instances`{.action} w menu bocznym po lewej stronie. Następnie kliknij na `...`{.action} obok odpowiadającej instancji i kliknij na `Szczegóły instancji`{.action}.

![public-cloud ipv6](images/pci2022.png){.thumbnail}

Wszystkie niezbędne informacje będą widoczne w sekcji **Sieci**.

![public-cloud ipv6](images/pci2022.1.png){.thumbnail}

### Przykłady konfiguracji stałych

> [!primary] 
> **Przykłady**
> 
>Poniższe przykłady mają jedynie charakter poglądowy.
>
>Twoim obowiązkiem jako administratora usługi jest dostosowanie ich do posiadanej dystrybucji.
>

> [!warning]
>
> Zanim zmodyfikujesz plik konfiguracyjny, zawsze utwórz kopię zapasową oryginału w przypadku problemu.
>

<br>Najpierw połącz się ze swoją instancją przez SSH.

#### W systemie Debian (poza Debian 12)

Domyślnie pliki konfiguracyjne znajdują się w katalogu`/etc/network/interfaces.d/`.

Najlepszą praktyką jest utworzenie oddzielnego pliku konfiguracyjnego w katalogu`/etc/network/interfaces.d/` w celu skonfigurowania IPV6. W naszym przykładzie nasz plik nosi nazwę `51-cloud-init-ipv6`:

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Dzięki temu możesz oddzielić konfigurację IPv6 i w prosty sposób wrócić do zmian w przypadku błędu.

Dodaj następujące wiersze do pliku. Zastąp elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy (jeśli Twój serwer nie używa **eth0**) określonymi wartościami:

```console
iface eth0 inet6 static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Oto konkretny przykład:

```console
iface eth0 inet6 static
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

Następnie zrestartuj usługę sieciową za pomocą jednego z następujących poleceń:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### W systemie Ubuntu i Debian 12

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/netplan/`.

Najlepszą praktyką jest utworzenie oddzielnego pliku konfiguracyjnego w katalogu `/etc/netplan/` w celu skonfigurowania protokołu IPV6. W naszym przykładzie nasz plik nosi nazwę `51-cloud-init-ipv6.yaml`:

```bash
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

Dzięki temu możesz oddzielić konfigurację IPv6 i w prosty sposób wrócić do zmian w przypadku błędu.

Dodaj następujące wiersze do pliku. Zastąp elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) oraz interfejs sieciowy (jeśli Twój serwer nie używa **eth0**) określonymi wartościami:

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

Oto konkretny przykład:

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> Ważne jest przestrzeganie wyrównania każdego elementu tego pliku, jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Potrzebny jest tylko klawisz spacji.
>

Możesz przetestować konfigurację za pomocą polecenia:

```bash
sudo nano netplan try
```

Jeśli jest poprawna, zastosuj ją za pomocą następującego polecenia:

```bash
sudo nano netplan apply
```

#### W systemie RedHat / CentOS / Rocky Linux / Alma Linux

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/sysconfig/network-scripts/`. Zalecamy, abyś przed podjęciem jakichkolwiek działań wykonał kopię zapasową odpowiedniego pliku konfiguracyjnego.

W naszym przykładzie nasz plik nosi nazwę `ifcfg-eth0`, wykonujemy zatem kopię zapasową pliku `ifcfg-eth0` przy użyciu następujących poleceń. W razie potrzeby należy zastąpić **eth0** rzeczywistym interfejsem.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

Będziesz mógł wrócić do wprowadzonych zmian, używając następujących poleceń:

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Następnie edytujemy plik `ifcfg-eth0`, dodając tylko wiersze dla konfiguracji IPv6 serwera. Zastąp elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) według określonych wartości.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Pominęliśmy konfigurację IPv4, aby uniknąć pomyłek, ale konfiguracja IPv6 znajduje się w tym samym pliku konfiguracyjnym.

Oto konkretny przykład:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

Uruchom ponownie usługę sieciową, aby umożliwić systemowi zastosowanie nowej konfiguracji przy użyciu jednego z następujących poleceń:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### W systemie Fedora

Plik konfiguracji sieci znajduje się w katalogu`/etc/NetworkManager/system-connections/`. Zalecamy, abyś przed podjęciem jakichkolwiek działań wykonał kopię zapasową odpowiedniego pliku konfiguracyjnego.

W naszym przykładzie nasz plik nosi nazwę `cloud-init-eth0.nmconnection`, wykonujemy więc kopię pliku `cloud-init-eth0.nmconnection`, używając następujących poleceń. W razie potrzeby należy zastąpić **eth0** rzeczywistym interfejsem.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

Następnie edytujemy plik `cloud-init-eth0.nmconnection`, dodając tylko wiersze dla konfiguracji IPv6 serwera. Zastąp elementy ogólne (*YOUR_IPV6*, *IPV6_PREFIX* i *IPV6_GATEWAY*) według określonych wartości.

```console
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/IPV6_PREFIX
route1=::/0,IPV6_GATEWAY
```

Pominęliśmy konfigurację IPv4, aby uniknąć pomyłek, ale konfiguracja IPv6 znajduje się w tym samym pliku konfiguracyjnym.

Oto konkretny przykład:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:201:abcd::7c5/128
route1=::/0,2607:5300:201:abcd::1
```

Uruchom ponownie interfejs sieciowy za pomocą polecenia:

```bash
sudo systemctl restart NetworkManager
```

#### W systemie Windows

Domyślnie adres IPv6 nie jest skonfigurowany na serwerach Windows. Aby go aktywować, wykonaj następujące kroki:

Przejdź do sekcji `Połączenia sieciowe`{.action} w systemie Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

Następnie kliknij prawym przyciskiem myszy kartę sieciową, aby uzyskać dostęp do `Właściwości`{.action}.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Kliknij `Internet Protocol Version 6 (TCP/IPv6)`{.action} i przycisk `Właściwości`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Teraz wprowadź dane Twojego adresu IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

Po zakończeniu zaznacz kratkę `Zatwierdź parametry na wyjściu` i kliknij przycisk `OK`{.action}, aby zatwierdzić zmiany.

### Diagnostyka

Skonfigurowałeś IPv6, ale nic nie działa? 

Prosta operacja pozwala ustalić, czy usterka jest związana z przeprowadzoną konfiguracją, czy też z siecią OVHcloud.

Najpierw należy [przełączyć instancję na tryb awaryjny rescue-pro](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

Następnie skonfiguruj tymczasowy adres IP w oparciu o poniższe przykładowe polecenia:

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Przetestuj ponownie sieć, np. za pomocą polecenia ping6:

```bash
ping6 ipv6.google.com
```

Jeśli Twoja instancja odpowiada, istnieje duże prawdopodobieństwo, że jeden z etapów konfiguracji początkowej nie został prawidłowo przeprowadzony.

W każdym przypadku warto skontaktować się z działem pomocy technicznej, podając powyższe wyniki powyższych testów, aby uzyskać analizę z naszej strony.

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
