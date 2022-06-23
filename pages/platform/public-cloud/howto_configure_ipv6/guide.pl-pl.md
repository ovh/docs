---
title: 'Jak konfigurować IPv6 w instancji Public Cloud'
slug: konfiguracja-ipv6
excerpt: 'Tutorial konfiguracji protokołu IPv6 w instancji Public Cloud'
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja z dnia 21-06-2022**

## Wprowadzenie

Internet Protocol version 6 (IPv6) to najnowsza wersja protokołu internetowego (IP – Internet Protocol). Został on zaprojektowany, by rozwiązać od dawna przewidywany problem wyczerpywania się puli adresów IPv4 dzięki wykorzystaniu adresów 128-bitowych zamiast tradycyjnie stosowanych 32-bitowych adresów IPv4.

Każda instancja Public Cloud jest dostarczana z jednym adresem IPv4 i jednym adresem IPv6.

Domyślnie skonfigurowany jest tylko adres IPv4.

W tym tutorialu dowiesz się, jak skonfigurować adres IPv6 dla instancji Public Cloud.

## Wymagania początkowe

* Dowolny model instancji Public Cloud.
* Dostęp administracyjny (root) przez SSH lub zdalny pulpit (Windows) do Twojego serwera
* Posiadanie podstawowej wiedzy w zakresie sieci informatycznych.
* Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Słowniczek

Oto krótki słowniczek terminów stosowanych w tym tutorialu:

|Słowniczek|Opis|
|---|---|
|YOUR_IPV6|Adres IPv6 przypisany do Twojej usługi|
|IPv6_PREFIX|Prefiks Twojego bloku IPv6 (np. 2607:5300:60:62ac::/128 -> netmask = 128)|
|IPv6_GATEWAY|Brama sieciowa Twojego bloku IPv6|


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

#### W systemie Debian

Zakładając, że Twój interfejs sieciowy to eth0, należy dodać konfigurację wyglądającą mniej więcej w ten sposób:

Plik do edycji (z uprawnieniami su): `/etc/network/interfaces`

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
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```

#### W systemie Ubuntu

Pliki konfiguracyjne sieci znajdują się w katalogu `/etc/netplan/`. Po pierwsze, utwórz kopię pliku konfiguracyjnego IPv6:

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

Dzięki temu możesz w prosty sposób oddzielić konfigurację IPv6 i anulować zmiany w przypadku wystąpienia błędu.

Zakładając, że Twój interfejs sieciowy to eth0, należy dodać konfigurację wyglądającą mniej więcej w ten sposób:

Plik do edycji (z uprawnieniami su): `/etc/netplan/51-cloud-init-ipv6.yaml`

```yaml
network:
    ethernets:
        eth0:
            dhcp6: false
            match:
                macaddress: fb:17:3r:39:56:75
            set-name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
            routes:
              - to: "IPv6_GATEWAY"
                scope: link
    version: 2
```

> [!warning]
>
> Ważne jest przestrzeganie wyrównania każdego elementu tego pliku, jak pokazano w powyższym przykładzie. Nie używaj przycisku tabulacji do tworzenia odstępów. Potrzebny jest tylko klawisz spacji.
>

Możesz przetestować konfigurację za pomocą polecenia:

```bash
netplan try
```

Jeśli jest poprawna, zastosuj ją za pomocą następującego polecenia:

```bash
netplan apply
```

#### W systemie RedHat / CentOS

Zakładając, że Twój interfejs to eth0, konfiguracja powinna wyglądać mniej więcej tak:

Plik do edycji (z uprawnieniami sudo): `/etc/sysconfig/network-scripts/ifcfg-eth0`

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Oto konkretny przykład:

```console
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

#### W systemie Windows

Przejdź do sekcji `Połączenia sieciowe`{.action} w systemie Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

Następnie kliknij prawym przyciskiem kartę sieciową, by przejść do jej `Właściwości`{.action}.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Kliknij `IPv6`{.action}, a następnie `Właściwości`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Teraz wprowadź dane Twojego adresu IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

## Diagnostyka

Skonfigurowałeś IPv6, ale nic nie działa? 

Prosta operacja pozwala ustalić, czy usterka jest związana z przeprowadzoną konfiguracją, czy też z siecią OVHcloud.

Najpierw należy [przełączyć instancję na tryb awaryjny rescue-pro](https://docs.ovh.com/pl/public-cloud/przelaczenie_instancji_w_tryb_rescue/).

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

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>