---
title: "Zmiana serwerów DNS instancji Public Cloud"
excerpt: "Dowiedz się, jak zmienić domyślne serwery DNS instancji Public Cloud"
slug: zmiana_serwerow_dns_instancji
legacy_guide_number: g1985
section: Sieć
order: 4
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 29-10-2021**

## Wprowadzenie

Domyślnie serwerem DNS instancji Public Cloud jest serwer OVHcloud (na przykład 213.186.33.99).<br>
Możesz dodać serwer zapasowy lub zastąpić tę konfigurację Twoją. Serwery DNS są skonfigurowane automatycznie przez serwer DHCP i nie można zmienić konfiguracji DNS edytując plik `resolv.conf`.

**Niniejszy przewodnik wyjaśnia, jak zmienić konfigurację DHCP instancji, aby zmienić serwery DNS.**

> [!warning]
> OVHcloud dostarcza Ci usługi, za które będziesz odpowiedzialny za konfigurację i zarządzanie. W związku z tym należy dopilnować, aby usługi te działały prawidłowo.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub uruchomieniem usługi na serwerze zalecamy skorzystanie z pomocy specjalisty. Więcej informacji znajduje się w sekcji [Sprawdź](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na koncie OVHcloud
- Dostęp administratora (root) do instancji przez SSH lub RDP
- Podstawowa wiedza w zakresie sieci i administracji

## W praktyce

Zaloguj się do instancji przez SSH. Więcej informacji na ten temat znajdziesz w przewodniku "[Logowanie do instancji Public Cloud](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/#connect-to-instance)".

Przejdź do użytkownika root. Jeśli potrzebujesz, skorzystaj z naszego przewodnika, aby [zmienić hasło root](https://docs.ovh.com/pl/public-cloud/dostep_root_i_zdefiniowanie_hasla/).

### Debian / Ubuntu

Edytuj plik `/etc/dhcp/dhclient.conf`, aby skonfigurować wybrane serwery DNS.

W tej sekcji możesz dodawać serwery DNS w dowolny sposób. Użyj wybranego zamówienia i zastąp IP1/IP2 ich adresami IP.

- Aby dodać serwery DNS, które zastąpią serwery skonfigurowane domyślnie, dodaj poniższy wiersz:
  
```console
supersede domain-name-servers IP1, IP2;
```

- Aby dodać serwery DNS, które będą preferowane niż serwery skonfigurowane domyślnie:
    
```console
prepend domain-name-servers IP1, IP2;
```

- Aby dodać serwery DNS, które będą używane tylko w przypadku, gdy domyślna konfiguracja jest niedostępna:
    
```console
append domain-name-servers IP1, IP2;
```

Zapisz zmiany w pliku konfiguracyjnym i zamknij edytor.

Sprawdź, czy konfiguracja została zastosowana przy użyciu polecenia:

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver IP1
nameserver IP2
```

### CentOS/Fedora

Sprawdź aktualną konfigurację za pomocą polecenia `nmcli`:

```bash
nmcli
 
eth0: connected to System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 default
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: non-managed
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

Pobierz nazwę swojego interfejsu publicznego:

```bash
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```

Wyłącz automatyczną zmianę serwerów DNS i dodaj adresy IP (zastąp IP1/IP2) serwerów DNS, które chcesz skonfigurować. (Zastąp `System eth0` wartością rzeczywistą pobraną wcześniej)

```bash
nmcli con mod "System eth0" ipv4.ignore-auto-dns yes
nmcli con mod "System eth0" ipv4.dns "IP1 IP2"
```

Zastosuj konfigurację (Zastąp `System eth0` wartością rzeczywistą pobraną wcześniej)

```bash
nmcli con down "System eth0" && nmcli con up "System eth0"
```

Sprawdź, czy konfiguracja została zastosowana:

```bash
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: IP1 IP2
        interface: eth0
```

### Windows

Zaloguj się do instancji za pomocą sesji zdalnego pulpitu lub konsoli VNC. Więcej informacji na ten temat znajdziesz w przewodniku "[Logowanie do instancji Public Cloud](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/#connect-to-instance)".

Otwórz `Parametry sieci`{.action}.

![zmień serwery dns](images/changednsservers1.png){.thumbnail}

Za pomocą panelu konfiguracyjnego przejdź do konfiguracji IPv4 Twojej publicznej karty sieciowej.

![zmień serwery dns](images/changednsservers2.png){.thumbnail}

Dodaj serwery, których chcesz użyć w zaawansowanych `ustawieniach`{.action}.

![zmień serwery dns](images/changednsservers3.png){.thumbnail}

> [!primary]
>
Polecenie `nslookup` pozwala na sprawdzenie, który serwer DNS jest używany domyślnie.
>

## Sprawdź również <a name="gofurther"></a>

[Utwórz pierwszą instancję Public Cloud i połącz się z nią](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/)

[Logowanie jako użytkownik root i ustawienie hasła](https://docs.ovh.com/pl/public-cloud/dostep_root_i_zdefiniowanie_hasla/)

[Zmiana hostname instancji Public Cloud](https://docs.ovh.com/pl/public-cloud/zmiana_hostname_instancji/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.