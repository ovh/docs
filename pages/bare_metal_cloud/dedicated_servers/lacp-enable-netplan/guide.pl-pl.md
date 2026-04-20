---
title: "Jak skonfigurować agregację łączy za pomocą protokołu LACP w Debianie 12 lub Ubuntu 24.04"
excerpt: "Aktywuj agregację łączy na serwerze Debian 12 lub Ubuntu 24.04 (Netplan), aby zwiększyć dostępność serwera i wydajność połączeń sieciowych"
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

Technologia LACP (Link Aggregation Control Protocol) jest zaprojektowana w celu zwiększenia dostępności serwera i poprawy wydajności połączeń sieciowych. Możesz agregować karty sieciowe i zapewnić redundancję linków sieciowych. Oznacza to, że jeśli jedno łącze ulegnie awarii, ruch zostanie automatycznie przekierowany do innego dostępnego łącza. Dostępna przepustowość jest również podwajana dzięki agregacji.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować interfejsy w agregacji w celu ich wykorzystania w Debianie 12 (*lub nowszym*) / Ubuntu 24.04 (konfiguracja Netplan).**

> [!warning]
> Chociaż obrazy Debian 12 (i nowszych wersji) dostarczane przez OVHcloud domyślnie używają Netplan, istnieją dwa kluczowe wyjątki, w których zamiast tego używany jest `ifupdown` (/etc/network/interfaces):
>
> - **Tryb Rescue**: Chociaż oparty na Debianie 12, środowisko rescue korzysta z narzędzia `ifupdown`.
> - **Niestandardowe obrazy**: Instalacje Debiana wykonane przy użyciu własnego obrazu mogą nadal używać `ifupdown` do konfiguracji sieci.
>
> Jeśli chcesz skonfigurować agregację łączy w trybie rescue lub w niestandardowym systemie operacyjnym korzystającym z `ifupdown`, zapoznaj się z [tym przewodnikiem](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Wymagania początkowe

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Serwery dedykowane](/links/control-panel/baremetal-dedicated-servers)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Serwery dedykowane`{.action} > Wybierz serwer

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## W praktyce

> [!primary]
> Wartości (adresy MAC, adresy IP itp.) widoczne w poniższych konfiguracjach i przykładach służą wyłącznie jako przykłady. Należy zastąpić je własnymi wartościami.
>

### Pobieranie adresów MAC

Przejdź do zakładki `Interfejsy sieciowe`{.action} i zanotuj adresy MAC każdego interfejsu (publicznego/prywatnego) wyświetlane w dolnej części menu.

![Panel klienta OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Należy pamiętać, że adres MAC interfejsu **głównego publicznego** jest tym, który odbiera oferty DHCP, zarówno w systemie operacyjnym serwera, jak i w trybie rescue. Ten interfejs obsługuje łączność publiczną w domyślnej konfiguracji.
>

Po ustaleniu, które adresy MAC są powiązane z każdym typem interfejsu (publicznym/prywatnym), należy pobrać nazwy interfejsów.

### Pobieranie nazw interfejsów

> [!primary]
>
> Jeśli utracisz połączenie sieciowe z serwerem, postępuj zgodnie z krokami "**Otwórz KVM**" z [tego przewodnika](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Aby pobrać nazwy interfejsów, wykonaj następujące polecenie:

```bash
ip a
```

> [!primary]
>
> To polecenie wyświetli wiele interfejsów. Jeśli masz trudności z określeniem, które z nich są Twoimi interfejsami fizycznymi, do pierwszego interfejsu będzie nadal domyślnie przypisany publiczny adres IP serwera.
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

Wybierz poniższą zakładkę odpowiadającą konfiguracji serwera:

- **Dwa interfejsy**: serwery Advance z dwiema fizycznymi kartami sieciowymi.
- **Cztery interfejsy - Double LAG**: serwery Scale i High-Grade z OLA w trybie **Active - Double LAG** (agregaty publiczny + prywatny). Wymaga [aktywacji OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) w Panelu klienta OVHcloud.
- **Cztery interfejsy - Fully Private**: serwery Scale i High-Grade z OLA w trybie **Active - Fully Private** (pojedynczy agregat prywatny dla vRack). Wymaga [aktywacji OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) w Panelu klienta OVHcloud.

> [!tabs]
> Dwa interfejsy
>> Zastąp zawartość pliku `/etc/netplan/50-cloud-init.yaml` następującą:
>>
>> **Statyczny adres IP**
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
>>             # Adres MAC głównego publicznego interfejsu serwera
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
>>             # Adres MAC głównego publicznego interfejsu serwera
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
>> Ta konfiguracja grupuje interfejsy publiczne w `bond0` (z publicznym adresem IP) i interfejsy prywatne w `bond1` (dla vRack).
>>
>> Zastąp zawartość pliku `/etc/netplan/50-cloud-init.yaml` następującą:
>>
>> **Statyczny adres IP**
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
>>             # Adres MAC głównego publicznego interfejsu serwera
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
>>         # Opcjonalnie: konfiguracja prywatnego agregatu
>>         bond1:
>>             # Adres MAC pierwszego prywatnego interfejsu
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
>>             # Adres MAC głównego publicznego interfejsu serwera
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
>>         # Opcjonalnie: konfiguracja prywatnego agregatu
>>         bond1:
>>             # Adres MAC pierwszego prywatnego interfejsu
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
>> Ta konfiguracja agreguje wszystkie interfejsy fizyczne w jeden agregat przeznaczony wyłącznie do użytku z vRack. Brak publicznej łączności IP.
>>
>> > [!warning]
>> >
>> > Po wdrożeniu OLA w trybie Fully Private publiczny adres IP przestaje być dostępny. Przed zastosowaniem tej konfiguracji upewnij się, że dysponujesz alternatywnym środkiem dostępu (np. za pośrednictwem innego serwera w sieci vRack lub przez KVM/IPMI).
>> >
>>
>> Zastąp zawartość pliku `/etc/netplan/50-cloud-init.yaml` następującą:
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
>>             # Adres MAC głównego prywatnego interfejsu serwera
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
>> > W trybie Fully Private agregat używa adresu MAC **głównego prywatnego** interfejsu. Aby przypisać adres IP do tego agregatu do komunikacji w sieci vRack, dodaj blok `addresses` pod `bond0` z prywatnym adresem IP vRack.
>> >

### Zastosowanie konfiguracji

> [!primary]
> Polecenie `netplan try` nie może być używane podczas konfigurowania agregatów.

Zastosuj konfigurację za pomocą następującego polecenia:

```bash
sudo netplan apply
```

Uruchomienie interfejsów agregatu może potrwać kilka sekund.

## Sprawdź również

[Konfiguracja OVHcloud Link Aggregation w Panelu klienta OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Dołącz do [grona naszych użytkowników](/links/community).
