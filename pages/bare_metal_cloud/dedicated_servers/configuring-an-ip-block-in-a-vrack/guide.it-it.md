---
title: "Configurare un blocco IP nella vRack su un server dedicato"
excerpt: "Configura un blocco di indirizzi IP pubblici per la rete privata vRack OVHcloud tra i tuoi server dedicati."
updated: 2026-04-03
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

<!-- CP-NAV-START:network-vrack -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [vRack](/links/control-panel/network-vrack)
- **Percorso di navigazione:** `Network`{.action} > `Rete privata vRack`{.action}

---
<!-- CP-NAV-END:network-vrack -->

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

Selezionare il proprio vRack dall'elenco per visualizzare l'elenco dei servizi idonei. Cliccare sul blocco IP da aggiungere al vRack e poi sul pulsante `Aggiungi`{.action}.

![Aggiunta di un blocco IP al vRack](images/addIPblock.png){.thumbnail}

### Gestire la larghezza di banda IP pubblica nel vRack

Per impostazione predefinita, i blocchi Additional IP instradati tramite un vRack beneficiano di una larghezza di banda pubblica standard di 5 Gbps in Europa e Nord America, o di 100 Mbps nelle regioni APAC. Per ulteriori dettagli sulle opzioni disponibili, fare riferimento alle opzioni di routing pubblico sulla nostra [pagina del prodotto vRack](/links/network/vrack).

Per rispondere alle crescenti esigenze delle infrastrutture e ai requisiti dei servizi ad alto traffico, OVHcloud propone ora ai propri clienti opzioni di larghezza di banda a pagamento. Si noti che queste opzioni si applicano **per vRack e per regione**. Poiché gli indirizzi Additional IP sono collegati a una regione precisa, qualsiasi modifica della larghezza di banda influirà sull'insieme degli indirizzi (IPv4 e IPv6) instradati verso quel vRack nella regione corrispondente.

/// details | Durante il processo di ordine di Additional IP

#### Scelta della larghezza di banda pubblica durante il processo di ordine

È possibile modificare la larghezza di banda predefinita al momento di ordinare un nuovo blocco Additional IP, non appena viene selezionata una rete vRack come servizio backend.

Per ordinare un nuovo blocco Additional IP:

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

### Scaricare il pacchetto `iproute2`

Prima di iniziare, scaricare e installare **iproute2**, un pacchetto che consente di configurare manualmente il routing IP. Questo pacchetto potrebbe essere già disponibile sul server — in tal caso, passare al passaggio successivo.

Stabilire una connessione SSH al server ed eseguire il seguente comando per scaricare e installare iproute2:

```sh
sudo apt-get install iproute2
```

**Fedora**

```sh
sudo dnf install iproute
```

#### Configurazioni GNU/Linux

> [!tabs]
> **Debian 11**
>>
>> **Configurare l'Additional IP**
>>
>> Aprire il file di configurazione di rete situato in `/etc/network/interfaces.d` con un editor di testo a scelta. Qui il file si chiama `50-cloud-init`.
>>
>> ```sh
>> /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> ```
>>
>> **Creare una nuova tabella di routing IP**
>>
>> Successivamente, creare una nuova route IP per il vRack. Aggiungere una nuova regola di traffico modificando il file come mostrato di seguito:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> **Modificare il file di configurazione di rete**
>>
>> > [!primary]
>> >
>> > A titolo di esempio, il file di configurazione di rete a cui facciamo riferimento si trova in /etc/network/interfaces. Il file equivalente sul server potrebbe trovarsi altrove, a seconda del sistema operativo.
>> >
>>
>> Infine, modificare il file di configurazione di rete per tenere conto della nuova regola di traffico e instradare il traffico del vRack attraverso l'indirizzo del gateway di rete **46.105.135.110**.
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> post-up ip route add 46.105.135.96/28 dev eth1 table vrack
>> post-up ip route add default via 46.105.135.110 dev eth1 table vrack
>> post-up ip rule add from 46.105.135.96/28 table vrack
>> post-up ip rule add to 46.105.135.96/28 table vrack
>> ```
>>
>> Riavviare il server per applicare le modifiche oppure abilitare semplicemente la nuova interfaccia di rete:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **CentOS, AlmaLinux e Rocky Linux (8/9)**
>>
>> **Creare il file per l'interfaccia di rete secondaria**
>>
>> Copiare la configurazione dell'interfaccia di rete primaria e adattarla alle proprie esigenze:
>>
>> ```sh
>> sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Aprire poi il nuovo file:
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> - Definire le impostazioni IP:
>>
>> ```sh
>> # Created by cloud-init on instance boot automatically, do not edit.
>> #
>> DEVICE=eth1
>> BOOTPROTO=static
>> ONBOOT=yes
>> USERCTL=no
>> IPV6INIT=no
>> PEERDNS=yes
>> TYPE=Ethernet
>> NETMASK=255.255.255.240
>> IPADDR=46.105.135.97
>> ARP=yes
>> ```
>>
>> **Creare una nuova tabella di routing IP**
>>
>> Successivamente, creare una nuova route IP per il vRack. Aggiungere una nuova regola di traffico modificando il file come mostrato di seguito:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> Creare poi il file necessario per applicare le nuove regole:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/rule-eth1
>> ```
>>
>> Incollare il seguente contenuto (ricordare di sostituire le variabili con i propri valori):
>>
>> ```sh
>> from 46.105.135.96/28 table vrack
>> to 46.105.135.96/28 table vrack
>> ```
>>
>> **Modificare il file di configurazione di rete**
>>
>> Infine, modificare il file di configurazione di rete per tenere conto della nuova regola di traffico e instradare il traffico del vRack attraverso l'indirizzo del gateway di rete **46.105.135.110**.
>>
>> Modificare il seguente file per aggiungere route persistenti e statiche:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/route-eth1
>> ```
>>
>> Incollare il seguente contenuto (ricordare di sostituire le variabili con i propri valori):
>>
>> ```sh
>> 46.105.135.96/28 dev eth1 table vrack
>> default via 46.105.135.110 dev eth1 table vrack
>> ```
>>
>> Riavviare il server per applicare le modifiche oppure abilitare semplicemente la nuova interfaccia di rete:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **Ubuntu e Debian 12+**
>>
>> - Configurare l'Additional IP
>>
>> Aprire il file di configurazione di rete situato in `/etc/netplan` con un editor di testo a scelta. Qui il file si chiama `50-cloud-init.yaml`.
>>
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> - Definire le impostazioni IP con le seguenti variabili:
>>
>> ```sh
>> NETWORK_INTERFACE:
>> dhcp4: false
>> addresses:
>> - ADDITIONAL_IP/PREFIX
>> routes:
>> - to: NETWORK_IP/PREFIX
>>   via: GATEWAY_IP
>> ```
>>
>> **Esempio**
>>
>> ```sh
>> eno2:
>> dhcp4: false
>> addresses:
>> - 46.105.135.97/28
>> routes:
>> - to: 46.105.135.96/28
>>   via: 46.105.135.110
>> ```
>>
>> Applicare la configurazione con il seguente comando:
>>
>> ```bash
>> sudo netplan apply
>> ```
>> 
> **Fedora, AlmaLinux e Rocky Linux (10)**
>>
>> Per prima cosa, verificare che l'interfaccia vRack sia nello stato `connected` o `connecting`. Nel nostro esempio, l'interfaccia si chiama `eno2`.
>>
>> ```sh
>> nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet   connecting (getting IP configuration)               vRack
>> ```
>>
>> Successivamente, ottenere il nome del file di configurazione situato in `/etc/NetworkManager/system-connections`. Qui il file si chiama `vRack.nmconnection`.
>>
>> ```sh
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> cloud-init-eno1.nmconnection vRack.nmconnection
>> ```
>>
>> Configurare l'Additional IP tramite il gestore `nmcli`. Sostituire `vRack` e gli altri parametri con i propri valori.
>>
>> - Aggiungere l'IP
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.address 46.105.135.96/28
>> ```
>>
>> - Aggiungere il gateway
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.gateway 46.105.135.110
>> ```
>>
>> - Cambiare la configurazione da **auto** a **manual**:
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.method manual
>> ```
>>
>> - Rendere la configurazione persistente
>>
>> ```sh
>> sudo nmcli con mod 'vRack' connection.autoconnect true
>> ```
>>
>> **Creare una nuova tabella di routing IP**
>>
>> Successivamente, creare una nuova route IP per il vRack. Aggiungere una nuova regola di traffico (`1 vrack`) modificando il file come mostrato di seguito:
>>
>>
>> ```sh
>> sudo nano /usr/share/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> - Aggiungere la route
>>
>> ```sh
>> sudo ip route add <network_ip>/<prefix> via <gateway> dev <interface>
>> ```
>>
>> Nel nostro esempio
>>
>> ```sh
>> sudo ip route add 46.105.135.96/28 via 46.105.135.110 dev eno2
>> ```
>>
>> Riavviare la rete con il seguente comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>


### Windows Server

#### Step 1: Verifica e configurazione dell'interfaccia di rete secondaria

Verificare le informazioni della nuova interfaccia di rete:

![verifica dell'interfaccia di rete secondaria](images/win-ip-vrack-1.png){.thumbnail}

Verificare poi le proprietà:

![proprietà dell'interfaccia di rete secondaria](images/win-ip-vrack-2.png){.thumbnail}

![proprietà dell'interfaccia di rete secondaria](images/win-ip-vrack-3.png){.thumbnail}

#### Step 2: Configurazione IP

Selezionare l'opzione `Use the following IP address`{.action}:

![configurazione IP](images/win-ip-vrack-4.png){.thumbnail}

Definire le informazioni IP:

![configurazione IP](images/win-ip-vrack-5b.png){.thumbnail}

#### Step 3: Riavvio dell'interfaccia di rete

Per prima cosa, disabilitare l'interfaccia.

![disabilitazione rete](images/win-ip-vrack-6.png){.thumbnail}

Poi abilitarla.

![abilitazione rete](images/win-ip-vrack-7.png){.thumbnail}

### Risoluzione dei problemi

Se non si riesce a stabilire una connessione dalla propria VM o server alla rete privata, aprire un ticket di supporto dal proprio Spazio Cliente con le seguenti informazioni:

- IP sorgente e IP destinazione
- Risultato di `ifconfig -a` o `ipconfig /all` da entrambi i server o VM (configurazione dell'interfaccia di rete)
- Ping in entrambe le direzioni
- Risultato di `arp -a`
- Tabella di routing

Includere i risultati sopra indicati nel ticket.

## Per saperne di più

[Configurare il vRack sui server dedicati](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Creare più VLAN in un vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Configurare il vRack tra il Public Cloud e un server dedicato](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Contatta la nostra [Community di utenti](/links/community).
