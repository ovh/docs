---
title: 'Modifica i server DNS della tua istanza'
excerpt: 'Come modificare i server DNS di default di un’istanza Public Cloud'
slug: modifica_i_server_dns_della_tua_istanza
legacy_guide_number: g1985
---

**Ultimo aggiornamento: 18/11/2019**

## Obiettivo

Il server DNS configurato sulle tue istanze è, di default, quello di OVH ( 213.186.33.99 ). Se vuoi modificarlo o aggiungerne un altro, ricordati che non puoi farlo semplicemente modificando il file resolv.conf, perché i server DNS sono assegnati automaticamente tramite server DHCP.

Questa guida ti mostra la procedura da seguire per modificare la configurazione DHCP e i server della tua istanza. Dopodiché potrai modificare i server DNS delle tue istanze.


## Prerequisiti
- Disporre di un’istanza Public Cloud

## Procedura

### Per Debian / Ubuntu

- Accedi all’istanza via SSH Puoi consultare la guida [Connettersi a un’istanza Public Cloud](https://docs.ovh.com/it/public-cloud/prima-connessione/){.external}
- Accedi come utente amministratore Puoi consultare la guida [Accedere come utente root e impostare una password](https://docs.ovh.com/it/public-cloud/imposta_una_password_amministratore/){.external}

> [!success]
>
> Puoi consultare il file resolve.conf per verificare quale server DNS è configurato:
> 
> cat /etc/resolv.conf
> 
> 
> domain openstacklocal
> search openstacklocal
> nameserver 213.186.33.99
>

- Modifica il file /etc/dhcp/dhclient.conf con i server DNS che ti interessano.
Sono disponibili due opzioni di configurazione: 

Aggiungere un server DNS oltre a quello fornito di default:
  
```
supersede domain-name-servers 127.0.0.1
```

Aggiungere un server DNS per sostituire quello fornito di default
    
```
prepend domain-name-servers 127.0.0.1
```
 
- Verifica che la configurazione sia stata applicata correttamente: (potrebbe richiedere diversi minuti):

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### Con CentOS / Fedora

- Accedi all’istanza via SSH Puoi consultare la guida [Connettersi a un’istanza Public Cloud](https://docs.ovh.com/it/public-cloud/prima-connessione/){.external}
- Accedi come utente amministratore Puoi consultare la guida [Accedere come utente root e impostare una password](https://docs.ovh.com/it/public-cloud/imposta_una_password_amministratore/){.external}
- Verifica la configurazione eseguendo il comando nmcli:

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
 
Io: non-gestito
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```
- Ritrova il nome dell’interfaccia pubblica della tua macchina:

```
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```
- Disattiva la modifica dei DNS automatici e inserisci i DNS che ti interessano:

```
nmcli con mod "Nome dell’interfaccia" ipv4.ignore-auto-dns yes
nmcli con mod "Nome dell’interfaccia" ipv4.dns "127.0.0.1 213.186.33.99"
```
- Applica la configurazione:

```
nmcli con down "Nome dell’interfaccia" && nmcli con up "Nome dell’interfaccia"
```
- Verifica che la configurazione sia stata applicata correttamente:

```
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

### Per Windows

- Connettiti in remoto o tramite la console VNC Puoi consultare la guida [Connettersi a un’istanza Public Cloud](https://docs.ovh.com/it/public-cloud/prima-connessione/){.external}

- Accedi alla configurazione Network

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Quindi accedi alla configurazione IPv4 della scheda di rete pubblica

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Aggiungi i server DNS che vuoi utilizzare:

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
In powershell, il comando nslookup consente di verificare quale server DNS è utilizzato di default.
>

## Per saperne di più

[Connettersi a un’istanza Public Cloud](https://docs.ovh.com/it/public-cloud/prima-connessione/){.external}

[Poter accedere come utente root e impostare la password associata](https://docs.ovh.com/it/public-cloud/imposta_una_password_amministratore/){.external}

[Modificare l’hostname di un’istanza Public Cloud](https://docs.ovh.com/it/public-cloud/modifica_lhostname_della_tua_istanza/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>