---
title: "Konfiguracja OVHcloud Link Aggregation na serwerze dedykowanym (SLES 15)"
excerpt: "Włącz OVHcloud Link Aggregation na serwerze dedykowanym SLES 15."
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

**Niniejszy przewodnik wyjaśnia, jak skonfigurować interfejsy do agregacji w celu korzystania z OLA w SLES 15.**

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

Ponieważ konfiguracja kart sieciowych w OLA jest prywatna, nie będziesz mógł połączyć się z serwerem za pomocą SSH. W związku z tym do uzyskania dostępu do serwera użyj narzędzia IPMI.

Kliknij zakładkę `IPMI`{.action} (1), a następnie kliknij przycisk `Z apletu Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Zostanie pobrany plik JNLP. Uruchom oprogramowanie, aby uzyskać dostęp do IPMI. Zaloguj się, używając danych identyfikacyjnych przypisanych do serwera.

Domyślnie podczas korzystania z szablonu OVHcloud karty sieciowe będą nazywane *eth0* i *eth1*. Jeśli nie używasz szablonu OVHcloud, możesz sprawdzić nazwy interfejsów za pomocą następującego polecenia:

```bash
ip a
```

> [!primary]
> Wartości (adresy MAC, adresy IP itp.) podane w poniższych konfiguracjach i przykładach służą wyłącznie jako przykłady. Należy oczywiście zastąpić je własnymi wartościami.
>

### Pobieranie adresów MAC

Przejdź do zakładki `Interfejsy sieciowe`{.action} i zanotuj adresy MAC dla każdego interfejsu (publicznego/prywatnego), które są wyświetlane na dole menu.

![Panel klienta OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Należy pamiętać, że adres MAC interfejsu **głównego publicznego** jest tym, który odbiera oferty DHCP, zarówno w systemie operacyjnym serwera, jak i w trybie ratunkowym. Ten interfejs obsługuje łączność publiczną w domyślnej konfiguracji.
>
> Ponadto adres MAC interfejsu **głównego prywatnego** to ten o najniższej wartości. Na powyższym przykładowym obrazku jest to adres `a1:b2:c3:d4:e5:d6`.
>

Teraz, gdy wiesz, jakie adresy MAC są przypisane do każdego typu interfejsu (publiczny/prywatny), musisz pobrać nazwy interfejsów.

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
>> Utwórz plik konfiguracyjny agregatu `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **Statyczny IP**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Następnie skonfiguruj każdy fizyczny interfejs. Edytuj `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Utwórz `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Pliki konfiguracyjne fizycznych interfejsów pozostają takie same jak powyżej.
>>
>> ///
>>
> Cztery interfejsy - Double LAG
>> Ta konfiguracja łączy publiczne interfejsy w `bond0` (z publicznym IP) i prywatne interfejsy w `bond1` (dla vRack).
>>
>> Utwórz plik konfiguracyjny publicznego agregatu `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **Statyczny IP**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Utwórz plik konfiguracyjny prywatnego agregatu `/etc/sysconfig/network/ifcfg-bond1`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens33f0np0'
>> BONDING_SLAVE_1='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Następnie skonfiguruj każdy fizyczny interfejs. Edytuj `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Utwórz `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Utwórz `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Utwórz `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> /// details | DHCP (tylko bond0)
>>
>> W przypadku publicznego agregatu użyj DHCP:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Prywatny agregat (`ifcfg-bond1`) i wszystkie pliki konfiguracyjne fizycznych interfejsów pozostają takie same jak powyżej.
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
>> Utwórz plik konfiguracyjny agregatu `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_SLAVE_2='ens33f0np0'
>> BONDING_SLAVE_3='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Następnie skonfiguruj każdy fizyczny interfejs. Edytuj `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Utwórz `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Utwórz `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Utwórz `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> > [!primary]
>> >
>> > W trybie Fully Private agregat używa adresu MAC interfejsu **głównego prywatnego**. Pole `IPADDR` powinno być ustawione na Twój prywatny adres IP vRack.
>> >

### Zastosowanie konfiguracji

Zastosuj konfigurację, przeładowując wszystkie interfejsy za pomocą wicked:

```bash
wicked ifreload all
```

Restart może trwać kilka sekund, ponieważ tworzony jest interfejs agregatu. Aby sprawdzić, czy agregat działa prawidłowo, wyślij polecenie ping do innego serwera w tym samym vRack. Jeśli działa, wszystko jest gotowe. Jeśli nie, sprawdź konfiguracje lub spróbuj zrestartować serwer.

Możesz również sprawdzić ustawienia agregatu za pomocą następującego polecenia:

```bash
cat /proc/net/bonding/bond0
```

## Sprawdź również

[Konfiguracja OVHcloud Link Aggregation w Panelu klienta OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 12 lub Ubuntu 24.04 z Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9–11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Dołącz do [grona naszych użytkowników](/links/community).
