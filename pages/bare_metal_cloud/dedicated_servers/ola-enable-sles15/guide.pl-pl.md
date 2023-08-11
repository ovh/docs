---
title: "Jak skonfigurować identyfikator klienta do celów agregacji linków OVHcloud w SLES 15"
excerpt: 'Włącz Link Aggregation na serwerze SLES 15'
updated: 2023-03-07
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

**Ostatnia aktualizacja z dnia 07-03-2023**

## Wprowadzenie

Technologia OVHcloud Link Aggregation (OLA) została zaprojektowana przez nasze zespoły w celu zwiększenia dostępności serwera i wydajności połączeń sieciowych. Za pomocą kilku kliknięć możesz łączyć karty sieciowe i redundantować połączenia sieciowe. Oznacza to, że w przypadku awarii połączenia ruch jest automatycznie przekierowywany do innego dostępnego połączenia.

**Dowiedz się, jak połączyć Twoje identyfikatory klienta (Network Interface Controller) i korzystać z nich w ramach usługi OLA na SLES 15.**

## Wymagania początkowe

- [Skonfigurowanie identyfikatora klienta dla funkcji OVHcloud Link Aggregation w Panelu klienta](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

Ze względu na prywatną konfigurację OLA dla naszych identyfikatorów klienta nie można połączyć się z serwerem za pomocą SSH. Aby uzyskać dostęp do serwera, użyj narzędzia IPMI.

W tym celu zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do zakładki `Bare Metal Cloud`{.action}. Wybierz serwer z listy w sekcji `Serwery dedykowane`{.action}.

Następnie kliknij zakładkę `IPMI`{.action} (1), a następnie przycisk `Z poziomu apletu Java (KVM)`{.action} (2).

![restart kvm](images/remote_kvm2022.png){.thumbnail}

Pobierz program JNLP. Uruchom oprogramowanie, aby uzyskać dostęp do IPMI. Zaloguj się, używając danych identyfikacyjnych przypisanych do serwera.

Domyślnie nazwy identyfikatorów klienta będą znane jako *eth* i *eth*. Jeśli nie używasz szablonu OVHcloud, możesz odnaleźć nazwy interfejsów, używając następującej komendy:

```bash
ip a
```

> [!primary]
>
> To polecenie zwróci kilka "interfejsów". Jeśli masz trudności z identyfikacją fizycznych identyfikatorów klienta, pierwszy interfejs zawsze będzie miał publiczny adres IP serwera przypisanego domyślnie.
>

Po zidentyfikowaniu nazw dwóch identyfikatorów klienta należy utworzyć identyfikator klienta lub powiązanie z systemem operacyjnym. W tym celu utwórz plik interfejsów w wybranym przez Ciebie edytorze tekstu za pomocą polecenia:

```bash
vi /etc/sysconfig/network/ifcfg-bond0
```

Otworzy to pusty plik tekstowy. Aby skonfigurować interfejs agregacji, wstaw następujące wiersze w pliku tekstowym:

```bash
STARTMODE='onboot'
BOOTPROTO='static'
IPADDR='10.0.0.1/24'
BONDING_MASTER='yes'
BONDING_SLAVE_0='eth1'
BONDING_SLAVE_1='eth2'
BONDING_MODULE_OPTS='mode=802.3ad miimon=100 xmit_hash_policy=layer3+4'
```

> [!primary]
>
> Możesz korzystać z dowolnego adresu IP i prywatnej podsieci.
> Jeśli Twój serwer ma więcej niż 2 interfejsów sieciowych, możesz je dodać do konfiguracji, dodając numer parametru `BONDING_SLAVE_`, na przykład `BONDING_SLAVE_2='eth3'`.
>

Zapisz i wyjdź z pliku po potwierdzeniu, że informacje są poprawne.  Teraz skonfiguruj dwa fizyczne interfejsy. Domyślnie dla serwera OVHcloud tylko *eth* będzie miał plik konfiguracyjny. Otwórz plik za pomocą polecenia:

```bash
vi /etc/sysconfig/network/ifcfg-eth1
```

Domyślnie plik będzie wyświetlał następujący tekst:

```bash
# Created by cloud-init on instance boot automatically, do not edit.
#
BOOTPROTO=dhcp4
IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE=auto
```

> [!warning]
>
> Adresy IP będą różne dla każdego serwera.
>

Musisz zmienić ten plik, aby wyświetlał następujący tekst:

```bash
BOOTPROTO='none'
#IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE='hotplug'
```

> [!primary]
>
> Adres sprzętowy (adres MAC) identyfikatora klienta można odnaleźć za pomocą polecenia `ip a` wcześniej. Będzie to numer obok `link/ether` wyświetlanego wyniku.
>

*#* przed linią wskazuje, że serwer zignoruje tę linię podczas odczytu pliku. Oznacza to, że linie te nie będą brane pod uwagę podczas tworzenia pliku interfejsu dla *eth*.

Utwórz plik konfiguracyjny *eth2* za pomocą polecenia:

```bash
vi /etc/sysconfig/network/ifcfg-eth2
```

Tym razem plik będzie pusty. Dodaj następującą zawartość:

```bash
BOOTPROTO='none'
STARTMODE='hotplug'
LLADDR=0c:42:a1:a7:29:c2
```

Na koniec uruchom ponownie usługę sieciową, wprowadzając następujące polecenie:

```bash
wicked ifreload all
```

Aby sprawdzić, czy agregacja ta działa, wykonaj ping do innego serwera w tej samej sieci vRack. Jeśli to działa, proces konfiguracji został zakończony. Jeśli tak się nie stanie, sprawdź swoje konfiguracje lub spróbuj zrestartować serwer.

Możesz również sprawdzić parametry używane w interfejsie ifcfg-bond0 za pomocą polecenia:

```bash
/proc/net/bonding/bond0
```

## Sprawdź również

[Konfiguracja agregacji linków OLA w Panelu klienta](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).

[Jak skonfigurować identyfikator klienta do agregacji linków OVHcloud z systemem Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

[Jak skonfigurować identyfikator klienta do agregacji linków OVHcloud z systemem CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7).

[Jak skonfigurować identyfikator klienta do agregacji linków OVHcloud w systemie Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
