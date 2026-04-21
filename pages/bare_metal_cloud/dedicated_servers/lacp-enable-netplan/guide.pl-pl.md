---
title: "Jak skonfigurować agregację łączy za pomocą protokołu LACP w Debianie 12 lub Ubuntu 24.04"
excerpt: "Włącz agregację łączy na serwerze Debian 12 lub Ubuntu 24.04 (Netplan), aby zwiększyć dostępność serwera i poprawić wydajność połączeń sieciowych"
updated: 2026-04-20
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Technologia LACP (Link Aggregation Control Protocol) została zaprojektowana w celu zwiększenia dostępności serwera i poprawy wydajności połączeń sieciowych. Możesz agregować karty sieciowe i zapewnić redundancję łączy sieciowych. Oznacza to, że jeśli jedno łącze przestanie działać, ruch jest automatycznie przekierowywany na inne dostępne łącze. Dostępna przepustowość jest również podwojona dzięki agregacji.

**Niniejszy przewodnik wyjaśnia, jak powiązać interfejsy sieciowe w celu wykorzystania ich do agregacji łączy w Debianie 12 (*lub nowszym*) / Ubuntu 24.04 (konfiguracja Netplan).**

> [!warning]
> Chociaż obrazy Debian 12 (i nowsze) dostarczane przez OVHcloud domyślnie korzystają z Netplan, istnieją dwa wyjątki, w których zamiast tego używany jest `ifupdown` (/etc/network/interfaces):
>
> - **Tryb rescue**: Mimo że jest oparty na Debianie 12, środowisko rescue korzysta z narzędzia `ifupdown`.
> - **Obrazy niestandardowe**: Instalacje Debiana wykonane przy użyciu własnego obrazu mogą nadal używać `ifupdown` do konfiguracji sieci.
>
> Jeśli chcesz skonfigurować agregację łączy w trybie rescue lub na niestandardowym systemie operacyjnym korzystającym z `ifupdown`, zapoznaj się z [tym przewodnikiem](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Wymagania początkowe

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Serwery dedykowane](/links/control-panel/baremetal-dedicated-servers)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Serwery dedykowane`{.action} > Wybierz swój serwer

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## W praktyce

> [!primary]
> Wartości (adresy MAC, adresy IP itp.) pokazane w poniższych konfiguracjach i przykładach są podane przykładowo. Oczywiście musisz zastąpić te wartości własnymi.
>

### Pobieranie adresów MAC

Przejdź do zakładki `Interfejsy sieciowe`{.action} i zanotuj adresy MAC każdego interfejsu (publicznego/prywatnego), które są wyświetlane u dołu menu.

![Panel klienta OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Adres MAC **głównego publicznego** interfejsu to ten, który otrzymuje oferty DHCP, zarówno w systemie operacyjnym serwera, jak i w trybie rescue. Ten interfejs obsługuje łączność publiczną w domyślnej konfiguracji.
>

Teraz, gdy wiesz, które adresy MAC są przypisane do poszczególnych typów (publiczny/prywatny) interfejsów, musisz pobrać nazwy interfejsów.

### Pobieranie nazw interfejsów

> [!primary]
>
> Jeśli utracisz połączenie sieciowe z serwerem, wykonaj kroki opisane w sekcji "**Open KVM**" w [tym przewodniku](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Aby pobrać nazwy interfejsów, wykonaj następujące polecenie:

```bash
ip a
```

> [!primary]
>
> To polecenie wyświetli wiele interfejsów. Jeśli masz trudności z ustaleniem, które z nich są interfejsami fizycznymi, pierwszy interfejs będzie domyślnie miał przypisany publiczny adres IP serwera.
>

Oto przykładowy wynik:

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: ens22f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c6 brd ff:ff:ff:ff:ff:ff
    inet 203.0.113.1/32 metric 100 scope global dynamic ens22f0np0
       valid_lft 71613sec preferred_lft 71613sec
    inet6 2001:db8:1:1b00:203:0:112:0/56 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::a6b2:c3ff:fed4:e5c6/64 scope link
       valid_lft forever preferred_lft forever
3: ens22f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c7 brd ff:ff:ff:ff:ff:ff
4: ens33f0np0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d6 brd ff:ff:ff:ff:ff:ff
5: ens33f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d7 brd ff:ff:ff:ff:ff:ff
```

Po ustaleniu nazw interfejsów możesz skonfigurować agregację interfejsów w systemie operacyjnym.

### Konfiguracja agregacji interfejsów

Wybierz poniżej zakładkę odpowiadającą konfiguracji Twojego serwera:

- **Dwa interfejsy**: serwery Advance z dwoma fizycznymi kartami sieciowymi.
- **Cztery interfejsy - Double LAG**: serwery Scale i High Grade z OLA w trybie **Active - Double LAG** (agregaty publiczny + prywatny). Wymaga to [włączenia OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) w Panelu klienta OVHcloud.
- **Cztery interfejsy - Fully Private**: serwery Scale i High Grade z OLA w trybie **Active - Fully Private** (pojedynczy prywatny agregat dla vRack). Wymaga to [włączenia OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) w Panelu klienta OVHcloud.

> [!tabs]
> Dwa interfejsy
>> Zastąp zawartość pliku `/etc/netplan/50-cloud-init.yaml` następującą konfiguracją:
>>
>> **Statyczny IP**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Cztery interfejsy - Double LAG
>> Ta konfiguracja łączy interfejsy publiczne w `bond0` (z publicznym IP) i interfejsy prywatne w `bond1` (dla vRack).
>>
>> Zastąp zawartość pliku `/etc/netplan/50-cloud-init.yaml` następującą konfiguracją:
>>
>> **Statyczny IP**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main public interface
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Optional: private bond configuration
>>         bond1:
>>             # MAC address of the first private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Cztery interfejsy - Fully Private
>> Ta konfiguracja agreguje wszystkie interfejsy fizyczne w pojedynczy agregat przeznaczony wyłącznie do użytku z vRack. Brak łączności z publicznym adresem IP.
>>
>> > [!warning]
>> >
>> > Po wdrożeniu OLA w trybie Fully Private publiczny adres IP nie jest już dostępny. Upewnij się, że dysponujesz alternatywnym sposobem dostępu (np. przez inny serwer w vRack lub przez KVM/IPMI) przed zastosowaniem tej konfiguracji.
>> >
>>
>> Zastąp zawartość pliku `/etc/netplan/50-cloud-init.yaml` następującą konfiguracją:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # MAC address of the server's main private interface
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > W trybie Fully Private agregat używa adresu MAC **głównego prywatnego** interfejsu. Aby przypisać adres IP do tego agregatu na potrzeby komunikacji vRack, dodaj blok `addresses` pod `bond0` z prywatnym adresem IP vRack.
>> >

### Zastosowanie konfiguracji

> [!primary]
> Polecenie `netplan try` nie może być używane podczas konfiguracji agregatów.

Zastosuj konfigurację za pomocą następującego polecenia:

```bash
sudo netplan apply
```

Uruchomienie interfejsów agregatów może potrwać kilka sekund.

## Sprawdź również

[Konfiguracja OVHcloud Link Aggregation w Panelu klienta](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Dołącz do [grona naszych użytkowników](/links/community).
