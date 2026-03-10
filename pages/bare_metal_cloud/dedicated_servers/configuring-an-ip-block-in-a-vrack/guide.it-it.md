---
title: 'Configurare un blocco Additional IP in un vRack'
excerpt: 'Scopri come configurare un blocco di indirizzi IP pubblici nel vRack.'
updated: 2026-03-11
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

## Obiettivo

Oltre all'indirizzamento IP privato, il [vRack](/links/network/vrack) consente anche di instradare il traffico IP pubblico attraverso la porta vRack del server utilizzando un blocco di indirizzi IP pubblici.

**Questa guida mostra come configurare un blocco di indirizzi IP pubblici per l'utilizzo con il vRack.**

> [!primary]
>
> Il vRack supporta sia il routing pubblico IPv4 che IPv6 con blocchi di indirizzi Additional IP. Le istruzioni su come configurare i blocchi IPv6 sono disponibili in questa guida: "[Configurare un blocco IPv6 in un vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)".
>

> [!primary]
>
> Questo articolo è incentrato sulla configurazione di Additional IP su una rete vRack. Se si cercano indicazioni sulla configurazione di Additional IP insieme all'IP primario (sull'interfaccia di rete pubblica), consultare i seguenti articoli:
>
> - IPv4:
>     - [Configurare l'IP aliasing sui server dedicati](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configurare l'IP aliasing su un VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Configurare IPv6 sui server dedicati](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configurare IPv6 su un VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configurare IPv6 su un'istanza Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Prerequisiti

- Un blocco pubblico di indirizzi IP nel proprio account, con un minimo di quattro indirizzi
- L'intervallo di indirizzi IP privati scelto
- Un [server compatibile con vRack](/links/bare-metal/bare-metal)
- Un servizio [vRack](/links/network/vrack) attivato nel proprio account
- Accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
> Questa funzionalità potrebbe non essere disponibile o potrebbe essere limitata sui [server dedicati della linea di prodotti **Eco**](/links/bare-metal/eco-about).
>
> Per ulteriori informazioni, visitare la nostra [pagina di confronto](/links/bare-metal/eco-compare).

## Procedura

> [!primary]
>
> A titolo di esempio utilizzeremo un blocco IP di 46.105.135.96/28 ed eth1 per l'interfaccia di rete secondaria, dedicata al vRack.
>
> Sempre a titolo di esempio, il file di configurazione di rete a cui facciamo riferimento si trova in `/etc/network/interfaces`. Il file equivalente sul server potrebbe trovarsi altrove, a seconda del sistema operativo. Il contenuto del file potrebbe essere diverso. In caso di difficoltà, fare riferimento alla documentazione ufficiale della propria distribuzione.

### Aggiungere il blocco IP al vRack

> [!warning]
>
> Una volta aggiunto un blocco IP al vRack, non è più collegato a un server fisico.
>
> Questa configurazione consente di configurare gli IP dello stesso blocco su più server, a condizione che tutti questi server si trovino nello stesso vRack del blocco IP. Il blocco IP deve avere almeno 2 IP utilizzabili o più affinché ciò sia possibile.
>

Nello [Spazio Cliente OVHcloud](/links/manager), accedere alla sezione `Network`{.action}. Aprire quindi il menu `vRack`{.action}.

Selezionare il proprio vRack dall'elenco per visualizzare l'elenco dei servizi idonei. Cliccare sul blocco IP da aggiungere al vRack e poi sul pulsante `Aggiungi`{.action}.

![vrack](images/addIPblock.png){.thumbnail}

### Gestire la larghezza di banda IP pubblica nel vRack

Per impostazione predefinita, i blocchi Additional IP instradati tramite un vRack beneficiano di una larghezza di banda pubblica standard di 5 Gbps in Europa e Nord America, o di 100 Mbps nelle regioni APAC. Per ulteriori dettagli sulle opzioni disponibili, fare riferimento alle opzioni di routing pubblico sulla nostra [pagina del prodotto vRack](/links/network/vrack).

Per rispondere alle crescenti esigenze delle infrastrutture e ai requisiti dei servizi ad alto traffico, OVHcloud propone ora ai propri clienti opzioni di larghezza di banda a pagamento. Si noti che queste opzioni si applicano **per vRack e per regione**. Poiché gli indirizzi Additional IP sono collegati a una regione precisa, qualsiasi modifica della larghezza di banda influirà sull'insieme degli indirizzi (IPv4 e IPv6) instradati verso quel vRack nella regione corrispondente.

/// details | Durante il processo di ordine di Additional IP

#### Scelta della larghezza di banda pubblica durante il processo di ordine

È possibile modificare la larghezza di banda predefinita al momento di ordinare un nuovo blocco Additional IP, non appena viene selezionata una rete vRack come servizio backend.

Per ordinare un nuovo blocco Additional IP:

- Accedere allo [Spazio Cliente OVHcloud](/links/manager).
- Nella barra laterale sinistra, accedere alla sezione `Network`{.action}.
- Selezionare `Indirizzi IP pubblici`{.action}.
- Cliccare sul pulsante `Ordina IP`{.action} in cima alla pagina.
- Scegliere la versione IP, quindi il vRack a cui sarà associato l'Additional IP.
- Selezionare la regione del proprio Additional IP.
- Scegliere la larghezza di banda pubblica da applicare al proprio vRack per quella regione.
- Configurare le altre opzioni secondo le proprie esigenze e, successivamente, finalizzare l'ordine.

///

/// details | Dalla pagina di gestione del vRack

#### Modifica della larghezza di banda pubblica dalla pagina di gestione

Per i blocchi Additional IP già collegati a un vRack, la larghezza di banda viene gestita direttamente dalla pagina di configurazione del servizio.

Per accedere all'interfaccia di gestione:

- Nella barra laterale sinistra del Pannello di controllo, aprire `Network`{.action}.
- Selezionare `Rete privata vRack`{.action}.
- Nella colonna "Indirizzo IP pubblico e larghezza di banda", cliccare sul pulsante `Gestisci`{.action} corrispondente al vRack desiderato.

L'interfaccia di gestione si divide in due schede:
- **All attached services**: Attualmente reindirizza alla pagina di gestione classica del vRack. Prossimamente, questa scheda elencherà in modo ottimizzato tutti i prodotti (server, progetti Cloud, ecc.) collegati al vRack.
- **Connettività IP pubblica**: Consente di gestire le opzioni di routing pubblico del proprio vRack, inclusa la larghezza di banda.

Per modificare la larghezza di banda:

- Andare alla scheda `Connettività IP pubblica`{.action}.
- L'interfaccia mostra finestre di gestione per regione (ad es. `eu-west-par`) associate al vRack, con la lista degli IP associati.
- Nel riquadro della regione corrispondente, cliccare su `Modifica larghezza di banda`{.action}.
- Selezionare l'opzione desiderata nel pannello di destra, quindi cliccare su `Ordina`{.action} per convalidare.
- Una volta effettuato il pagamento, la nuova larghezza di banda sarà attiva sul proprio vRack nella regione scelta dopo alcuni minuti.

> [!primary]
>
> Il primo mese sottoscritto viene fatturato in modo proporzionale ai giorni rimanenti. La tariffa completa verrà applicata nel ciclo di fatturazione successivo.
>

L'aumento di larghezza di banda si applicherà a tutti gli indirizzi IP di quella regione per il vRack selezionato.

///

### Configurare un indirizzo IP utilizzabile

Per i fini del vRack, il primo, il penultimo e l'ultimo indirizzo in qualsiasi blocco IP sono sempre riservati rispettivamente per l'indirizzo di rete, il gateway di rete e il broadcast di rete. Ciò significa che il primo indirizzo utilizzabile è il secondo indirizzo nel blocco, come mostrato di seguito:

```sh
46.105.135.96   # Riservato: Indirizzo di rete
46.105.135.97   # Primo IP utilizzabile
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109  # Ultimo IP utilizzabile
46.105.135.110  # Riservato: Gateway di rete
46.105.135.111  # Riservato: Broadcast di rete
```

Per configurare il primo indirizzo IP utilizzabile, è necessario modificare il file di configurazione di rete, come mostrato di seguito. In questo esempio, è necessario utilizzare una subnet mask di *255.255.255.240*.

> [!primary]
>
> La subnet mask utilizzata nel nostro esempio è appropriata per il nostro blocco IP. La subnet mask potrebbe variare a seconda della dimensione del blocco. Quando si acquista il blocco IP, si riceverà un'e-mail che indicherà quale subnet mask utilizzare.
>

### Debian/Ubuntu

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```
### Creare una nuova tabella di routing IP

Per prima cosa, è necessario scaricare e installare iproute2, un pacchetto che ci permetterà di configurare manualmente il routing IP sul server.

Stabilire una connessione SSH al server ed eseguire il seguente comando dalla riga di comando. Questo scaricherà e installerà iproute2.

```sh
# apt-get install iproute2
```

Successivamente, è necessario creare una nuova route IP per il vRack. Aggiungeremo una nuova regola di traffico modificando il file, come mostrato di seguito:

```sh
/etc/iproute2/rt_tables

#
# valori riservati
#
255	local
254	main
253	default
0	unspec
#
# locale
#
#1	inr.ruhep
1 vrack
```

### Modificare il file di configurazione di rete

> [!primary]
>
> A titolo di esempio, il file di configurazione di rete a cui facciamo riferimento si trova in /etc/network/interfaces. Il file equivalente sul server potrebbe trovarsi altrove, a seconda del sistema operativo.
>

Infine, è necessario modificare il file di configurazione di rete per tenere conto della nuova regola di traffico e instradare il traffico del vRack attraverso l'indirizzo del gateway di rete **46.105.135.110**.

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Riavviare il server per applicare le modifiche oppure abilitare semplicemente la nuova interfaccia di rete:

```sh
ip link set eth1 up
```

### CentOS 6/7

#### Creare il file per l'interfaccia di rete secondaria

Per prima cosa, è possibile copiare e utilizzare la configurazione utilizzata per l'interfaccia di rete primaria e adattarla alle proprie esigenze:

```sh
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
```
Poi accediamo al nuovo file:

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
```
E definiamo le impostazioni IP:
```sh
# Creato automaticamente da cloud-init all'avvio dell'istanza, non modificare.
#
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.240
IPADDR=46.105.135.97
ARP=yes
```

### Creare una nuova tabella di routing IP

Successivamente, è necessario creare una nuova route IP per il vRack. Aggiungeremo una nuova regola di traffico modificando il file, come mostrato di seguito:

```sh
/etc/iproute2/rt_tables

#
# valori riservati
#
255	local
254	main
253	default
0	unspec
#
# locale
#
#1	inr.ruhep
1 vrack
```

Successivamente, creare il file necessario per applicare le nuove regole:
```sh
nano /etc/sysconfig/network-scripts/rule-eth1
```

E incollare il seguente contenuto (ricordare di sostituire le variabili con i propri valori):

```sh
from 46.105.135.96/28 table vrack
to 46.105.135.96/28 table vrack
```

### Modificare il file di configurazione di rete

Infine, è necessario modificare il file di configurazione di rete per tenere conto della nuova regola di traffico e instradare il traffico del vRack attraverso l'indirizzo del gateway di rete **46.105.135.110**.

È possibile farlo modificando il seguente file per aggiungere route persistenti e statiche:

```sh
nano /etc/sysconfig/network-scripts/route-eth1
```

Incollare il seguente contenuto (ricordare di sostituire le variabili con i propri valori):

```sh
46.105.135.96/28 dev eth1 table vrack
default via 46.105.135.110 dev eth1 table vrack
```

Riavviare il server per applicare le modifiche oppure abilitare semplicemente la nuova interfaccia di rete:

```sh
ip link set eth1 up
```

### Windows Server 2012/2016

#### Step 1: Verifica e configurazione dell'interfaccia di rete secondaria

Per prima cosa dobbiamo accedere alle informazioni della nuova interfaccia di rete:

![verificare la seconda interfaccia di rete](images/win-ip-vrack-1.png){.thumbnail}

Poi dobbiamo verificare le proprietà:

![proprietà della seconda interfaccia di rete](images/win-ip-vrack-2.png){.thumbnail}

![proprietà della seconda interfaccia di rete](images/win-ip-vrack-3.png){.thumbnail}

#### Step 2: Configurazione IP

Dobbiamo selezionare l'opzione ```Use the following IP address```:

![configurazione ip](images/win-ip-vrack-4.png){.thumbnail}

E infine possiamo definire le informazioni IP:

![configurazione ip](images/win-ip-vrack-5b.png){.thumbnail}

#### Step 3: Riavvio dell'interfaccia di rete

Prima eseguiamo il processo di disabilitazione:

![disabilitazione rete](images/win-ip-vrack-6.png){.thumbnail}

Poi eseguiamo il processo di abilitazione:

![abilitazione rete](images/win-ip-vrack-7.png){.thumbnail}

### Risoluzione dei problemi

Se non si riesce a stabilire una connessione dalla propria VM o server alla rete privata, inviare un ticket dal proprio pannello di controllo con le seguenti informazioni:

- IP sorgente e IP destinazione
- Ifconfig -a o ipconfig /all da entrambi i server o VM (configurazione dell'interfaccia di rete)
- Ping in entrambe le direzioni
- Arp -a
- Tabella di routing

Si prega di includere i risultati di cui sopra nel ticket.

## Per saperne di più

[Configurare il vRack sui server dedicati](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Creare più VLAN in un vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Configurare il vRack tra il Public Cloud e un server dedicato](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Contatta la nostra [Community di utenti](/links/community).
