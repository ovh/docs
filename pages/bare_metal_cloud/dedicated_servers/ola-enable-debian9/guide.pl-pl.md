---
title: "Konfiguracja OVHcloud Link Aggregation na serwerze dedykowanym (Debian)"
excerpt: "Włącz OVHcloud Link Aggregation na serwerze Debian (od Debian 9 do Debian 11)."
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

Technologia OVHcloud Link Aggregation (OLA) została zaprojektowana przez nasze zespoły w celu zwiększenia dostępności serwera oraz podniesienia wydajności połączeń sieciowych. Za pomocą kilku kliknięć możesz połączyć karty sieciowe i sprawić, że Twoje połączenia sieciowe staną się redundantne. Oznacza to, że jeśli jedno połączenie zostanie zerwane, ruch zostanie automatycznie przekierowany do innego dostępnego łącza. Dostępna przepustowość jest również podwajana dzięki agregacji.
Agregacja oparta jest na technologii IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Niniejszy przewodnik wyjaśnia, jak skonfigurować agregację interfejsów do użycia z OLA w Debianie 9–11 (konfiguracja ifupdown).**

> [!warning]
> Niniejszy przewodnik zawiera instrukcje dotyczące konfiguracji agregacji interfejsów sieciowych przy użyciu programu `ifupdown`, którego plik konfiguracyjny znajduje się w katalogu `/etc/network/interfaces`. Ma on również zastosowanie w trybie ratunkowym.
>
> Jeśli konfiguracja sieciowa systemu wykorzystuje `Netplan` (Debian 12 lub nowszy, Ubuntu 24.04), zapoznaj się z [tym przewodnikiem](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).
>

## Wymagania początkowe

- [Konfiguracja OVHcloud Link Aggregation w Panelu klienta OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Serwery dedykowane](/links/control-panel/baremetal-dedicated-servers)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Serwery dedykowane`{.action} > Wybierz serwer

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## W praktyce

> [!primary]
> Wartości (adresy MAC, adresy IP itp.) podane w poniższych konfiguracjach i przykładach służą wyłącznie jako przykłady. Należy oczywiście zastąpić je własnymi wartościami.
>

> [!warning]
>
> Przed włączeniem OLA w Panelu klienta lub za pośrednictwem API należy zainstalować pakiet ifenslave na serwerze. W tym celu użyj następującego polecenia:
>
> ```bash
> apt install ifenslave
> ```
>

### Pobieranie adresów MAC

Przejdź do zakładki `Interfejsy sieciowe`{.action} i zanotuj adresy MAC dla każdego interfejsu (publicznego/prywatnego), które są wyświetlane na dole menu.

![Panel klienta OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Należy pamiętać, że adres MAC interfejsu **głównego publicznego** jest tym, który odbiera oferty DHCP, zarówno w systemie operacyjnym serwera, jak i w trybie ratunkowym. Ten interfejs obsługuje łączność publiczną w domyślnej konfiguracji.
>
> Ponadto adres MAC interfejsu **głównego prywatnego** to ten o najniższej wartości. Na powyższym przykładowym obrazku jest to adres `a1:b2:c3:d4:e5:d6`.
>

Ponieważ konfiguracja kart sieciowych w OLA jest prywatna, nie będziesz mógł połączyć się z serwerem za pomocą SSH. W związku z tym do uzyskania dostępu do serwera użyj narzędzia IPMI.
<br>Kliknij zakładkę `IPMI`{.action} (1).

Następnie kliknij przycisk `Z apletu Java (KVM)`{.action} (2).

### Pobieranie nazw interfejsów

> [!primary]
>
> Jeśli utracisz połączenie sieciowe z serwerem, wykonaj kroki opisane w sekcji "**Otwórz KVM**" z [tego przewodnika](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Aby pobrać nazwy interfejsów, wykonaj następujące polecenie:

```bash
ip a
```

> [!primary]
>
> To polecenie wyświetli wiele interfejsów. Jeśli masz trudności z określeniem, które z nich są Twoimi interfejsami fizycznymi, pierwszemu interfejsowi domyślnie przypisany jest publiczny adres IP serwera.
>

Oto przykład wyniku:

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

- **Dwa interfejsy**: serwery Advance z dwoma fizycznymi kartami NIC.
- **Cztery interfejsy - Double LAG**: serwery Scale i High-Grade z OLA w trybie **Active - Double LAG** (agregaty publiczny + prywatny). Wymaga [włączenia OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) w Panelu klienta OVHcloud.
- **Cztery interfejsy - Fully Private**: serwery Scale i High-Grade z OLA w trybie **Active - Fully Private** (jeden prywatny agregat dla vRack). Wymaga [włączenia OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) w Panelu klienta OVHcloud.

> [!tabs]
> Dwa interfejsy
>> Zastąp zawartość pliku `/etc/network/interfaces` następującymi danymi:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # Adres MAC głównego publicznego interfejsu serwera
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # Adres MAC głównego publicznego interfejsu serwera
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> ///
>>
> Cztery interfejsy - Double LAG
>> Ta konfiguracja łączy publiczne interfejsy w `bond0` (z publicznym IP) i prywatne interfejsy w `bond1` (dla vRack).
>>
>> Zastąp zawartość pliku `/etc/network/interfaces` następującymi danymi:
>>
>> **Statyczny IP**
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # Adres MAC głównego publicznego interfejsu serwera
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Opcjonalnie: konfiguracja prywatnego agregatu
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # Adres MAC głównego prywatnego interfejsu serwera
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # Adres MAC głównego publicznego interfejsu serwera
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Opcjonalnie: konfiguracja prywatnego agregatu
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # Adres MAC głównego prywatnego interfejsu serwera
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> ///
>>
> Cztery interfejsy - Fully Private
>> Ta konfiguracja agreguje wszystkie fizyczne interfejsy w jednym agregacie wyłącznie do użytku z vRack. Brak publicznej łączności IP.
>>
>> > [!warning]
>> >
>> > Po wdrożeniu OLA w trybie Fully Private publiczny adres IP nie jest już dostępny. Upewnij się, że masz alternatywny sposób dostępu (np. przez inny serwer w vRack lub przez KVM/IPMI) przed zastosowaniem tej konfiguracji.
>> >
>>
>> Zastąp zawartość pliku `/etc/network/interfaces` następującymi danymi:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 10.0.0.1/24
>>   # Adres MAC głównego prywatnego interfejsu serwera
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1 ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > W trybie Fully Private agregat używa adresu MAC interfejsu **głównego prywatnego**. Pole `address` powinno być ustawione na Twój prywatny adres IP vRack.
>> >

### Zastosowanie konfiguracji

Zastosuj konfigurację, restartując usługę sieciową:

```bash
systemctl restart networking
```

Restart może trwać kilka sekund, ponieważ tworzony jest interfejs agregatu. Aby sprawdzić, czy agregat działa prawidłowo, wyślij polecenie ping do innego serwera w tym samym vRack. Jeśli działa, wszystko jest gotowe. Jeśli nie, sprawdź konfiguracje lub spróbuj zrestartować serwer.

## Sprawdź również

[Konfiguracja OVHcloud Link Aggregation w Panelu klienta OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 12 lub Ubuntu 24.04 z Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Dołącz do [grona naszych użytkowników](/links/community).
