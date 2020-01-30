---
title: 'Zmiana serwerów DNS instancji'
excerpt: 'Zmiana domyślnych serwerów DNS instancji Public Cloud'
slug: zmiana_serwerow_dns_instancji
legacy_guide_number: g1985
section: Tutoriale
---

**Ostatnia aktualizacja z dnia 18-11-2019**

## Wprowadzenie

Domyślnie serwerem DNS instancji będzie serwer OVH (213.186.33.99). Jeśli chcesz, możesz go zmienić lub dodać inny. Jednak serwery DNS są skonfigurowane automatycznie dzięki serwerowi DHCP i nie można ich zmienić, edytując po prostu plik resolv.conf.

Z tego przewodnika dowiesz się, jak zmienić konfigurację DHCP swojej instancji. Następnie będzie można zmienić serwery DNS instancji.


## Wymagania początkowe
- Posiadanie instancji Public Cloud.

## W praktyce

### Debian / Ubuntu

- Zaloguj się do instancji w SSH. Informacje na ten temat znajdziesz w przewodniku [Logowanie do instancji Public Cloud](https://docs.ovh.com/gb/en/public-cloud/first-login/){.external}.
- Zaloguj się jako użytkownik root. Informacje na ten temat znajdziesz w przewodniku [Logowanie jako użytkownik root i ustawienie hasła](https://docs.ovh.com/pl/public-cloud/dostep_root_i_zdefiniowanie_hasla/){.external}.

> [!success]
>
> Można odczytać plik resolv.conf, aby sprawdzić serwer DNS instancji:
> 
> cat /etc/resolv.conf
> 
> 
> domain openstacklocal
> search openstacklocal
> nameserver 213.186.33.99
>

- Edytuj plik /etc/dhcp/dhclient.conf przy użyciu żądanych serwerów DNS.
W przypadku tej konfiguracji są dwie możliwości:

Chcesz dodać serwer DNS obok tego, który dostarczamy domyślnie:
  
```
supersede domain-name-servers 127.0.0.1;
```

Chcesz dodać serwer DNS, aby zastąpić ten, który dostarczamy domyślnie:
    
```
prepend domain-name-servers 127.0.0.1;
```
 
- Sprawdź, czy konfiguracja została zastosowana (może to potrwać kilka minut):

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### CentOS / Fedora

- Zaloguj się do instancji w SSH. Informacje na ten temat znajdziesz w przewodniku [Logowanie do instancji Public Cloud](https://docs.ovh.com/gb/en/public-cloud/first-login/){.external}.
- Zaloguj się jako użytkownik root. Informacje na ten temat znajdziesz w przewodniku [Logowanie jako użytkownik root i ustawienie hasła](https://docs.ovh.com/pl/public-cloud/dostep_root_i_zdefiniowanie_hasla/){.external}.
- Sprawdź bieżącą konfigurację za pomocą polecenia nmcli:

```
nmcli
 
eth0: connecté to System eth0
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
 
lo: non-géré
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```
- Znajdź nazwę swojego interfejsu publicznego:

```
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```
- Wyłącz modyfikację automatycznych DNS i wprowadź żądane DNS:

```
nmcli con mod "Nazwa interfejsu" ipv4.ignore-auto-dns yes
nmcli con mod "Nazwa interfejsu" ipv4.dns "127.0.0.1 213.186.33.99"
```
- Zastosuj konfigurację:

```
nmcli con down "Nazwa interfejsu" && nmcli con up "Nazwa interfejsu"
```
- Sprawdź, czy konfiguracja została zastosowana:

```
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

### Windows

- Zaloguj się przez zdalny pulpit lub konsolę VNC. Informacje na ten temat znajdziesz w przewodniku [Logowanie do instancji Public Cloud](https://docs.ovh.com/gb/en/public-cloud/first-login/){.external}.

- Przejdź do konfiguracji Network.

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Następnie przejdź do konfiguracji IPv4 publicznej karty sieciowej.

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Dodaj serwery DNS, których chcesz użyć:

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
Polecenie nslookup pozwala sprawdzić w programie PowerShell, który serwer DNS jest używany domyślnie.
>

## Sprawdź również

[Logowanie do instancji Public Cloud](https://docs.ovh.com/gb/en/public-cloud/first-login/){.external}.

[Logowanie jako użytkownik root i ustawienie hasła](https://docs.ovh.com/pl/public-cloud/dostep_root_i_zdefiniowanie_hasla/){.external}.

[Zmiana nazwy hosta instancji Public Cloud](https://docs.ovh.com/pl/public-cloud/zmiana_hostname_instancji/){.external}.

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>