---
title: 'Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w CentOS 7'
slug: ola-centos7
excerpt: 'Dowiedz się, jak włączyć OVHcloud Link Aggregation na serwerze CentOS'
section: 'Poziom zaawansowany'
---

**Ostatnia aktualizacja z dnia 02-12-2019**

## Wprowadzenie

Technologia OVHcloud Link Aggregation (OLA) została przez nas zaprojektowana w celu zwiększenia dostępności serwera oraz podniesienia wydajności połączeń sieciowych. Możesz w prosty sposób przeprowadzić agregację kart sieciowych, dzięki czemu Twoje połączenia sieciowe staną się redundantne. Jeśli jedno połączenie zostanie zerwane, ruch zostanie automatycznie przekierowany do innego dostępnego łącza. 

**Ten przewodnik wyjaśnia, jak powiązać karty sieciowe i wykorzystać je do OLA w CentOS 7.**

## Wymagania początkowe

- [Konfiguracja karty sieciowej dla OVHcloud Link Aggregation w Panelu klienta](https://docs.ovh.com/pl/dedicated/ola-manager){.external}

## W praktyce

Ponieważ konfiguracja kart sieciowych w OLA jest prywatna, nie będziesz mógł połączyć się z serwerem za pomocą SSH. W związku z tym do uzyskania dostępu do serwera użyj narzędzia IPMI. Zaloguj się do [Panelu klienta](https://www.ovh.com/manager/){.external}. Następnie na pasku bocznym po lewej stronie wybierz serwer, który chcesz skonfigurować i kliknij zakładkę **IPMI**.

![remote_kvm](images/remote_kvm.png){.thumbnail}

Teraz kliknij przycisk **Z apletu Java (KVM)**. Zostanie pobrany program JNLP. Otwórz program, aby skorzystać z połączenia IPMI. Zaloguj się, używając aktualnych danych do logowania do serwera.

Po zastosowaniu szablonu systemu operacyjnego dostarczanego przez OVHcloud interfejsy sieciowe będą miały domyślnie nazwy *eth0* i *eth1*. Jeśli nie używasz szablonu OVHcloud, odszukaj nazwy Twoich interfejsów, używając następującego polecenia:

```bash
ip a
```

> [!primary]
>
> Wprowadzenie tego polecenie spowoduje wywołanie wielu „interfejsów”. Jeśli masz problem z ustaleniem, które z nich są Twoimi fizycznymi interfejsami sieciowymi, do pierwszego interfejsu nadal będzie domyślnie przypisany publiczny adres IP serwera.
>

Kiedy ustalisz nazwy dwóch interfejsów, powiąż je w systemie operacyjnym. W pierwszym kroku utwórz powiązanie interfejsów. Utwórz plik interfejsu w dowolnym edytorze tekstowym za pomocą następującego polecenia:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-bond0
```

Spowoduje to otwarcie pustego pliku tekstowego. Aby skonfigurować powiązanie, w dolnej części pliku tekstowego umieść poniższe elementy:

```bash
DEVICE=bond0
TYPE=Bond
NAME=bond0
BOOTPROTO=none
ONBOOT=yes
BONDING_MASTER=yes
IPADDR=10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS="mode=802.3ad miimon=100"
```

> [!primary]
>
> Możesz użyć dowolnego prywatnego adresu IP oraz wybranej podsieci.
>

Sprawdź poprawność konfiguracji, po czym zapisz i zamknij plik. Następnie skonfiguruj obydwa fizyczne interfejsy. Na serwerze OVHcloud tylko *eth0* będzie posiadał plik konfiguracyjny. Otwórz plik, używając następującego polecenia:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

Domyślnie pojawi się następujący zapis:

```bash
DEVICE=eth0
BOOTPROTO=static
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=yes
GATEWAY=203.0.113.254
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> Adres IP będzie inny dla każdego serwera.
>

Zmień plik tak, aby pojawił się w następujący zapis:

```bash
DEVICE=eth0
BOOTPROTO=static
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=yes
#GATEWAY=203.0.113.254
#IPV6INIT=yes
#IPV6_AUTOCONF=no
#IPV6ADDR=2001:0db8:0000:0001::/64
TYPE=Ethernet
HWADDR=00:53:00:00:00:00
MASTER=bond0
SLAVE=yes
```

> [!primary]
>
> Adres sprzętowy (adres MAC) karty sieciowej odszukaj za pomocą polecenia *ip a*, którego użyłeś wcześniej.  Będzie to liczba widoczna obok "link/ether".
>

*#* na początku linii oznacza, że serwer zignoruje tę linię podczas odczytu pliku. Zatem podczas tworzenia pliku interfejsu dla *eth1* linie te zostaną całkowicie zignorowane. Utwórz klik konfiguracyjny *eth1* za pomocą następującego polecenia:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Tym razem plik będzie pusty, więc dodaj do niego następującą zawartość:

```bash
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
HWADDR=00:53:00:00:00:01
MASTER=bond0
SLAVE=yes
```

Na koniec zrestartuj usługę network daemon za pomocą następującego polecenia:

```bash
systemctl restart network
```

Aby sprawdzić, czy powiązanie działa, podłącz inny serwer do tego samego vRacka. Jeśli wszystko działa poprawnie, ustawienie jest prawidłowe. W przeciwnym razie sprawdź dokładnie Twoje konfiguracje lub spróbuj zrestartować serwer.

## Podsumowanie

OVHcloud zapewnia klientom swobodę i elastyczność wykorzystania sprzętu w sposób najlepiej odpowiadający ich potrzebom. Po przeczytaniu tego przewodnika będziesz potrafił skonfigurować OVHcloud Link Aggregation (OLA) w CentOS 7 w celu wykorzystania obu kart sieciowych jako powiązanych interfejsów prywatnych. 

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.