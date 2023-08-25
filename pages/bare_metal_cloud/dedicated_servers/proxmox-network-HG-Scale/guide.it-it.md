---
title: Configurare la rete su Proxmox VE sulle gamme High Grade & SCALE
excerpt: Come configurare la rete su Proxmox VE sulle gamme High Grade & SCALE
updated: 2023-05-11
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>


> [!primary]
>
> Dal 6 ottobre 2022, la nostra soluzione "Failover IP" si chiama [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/). Questo non ha alcun impatto sulla sua funzionalità.
>

## Obiettivo

Sulle gamme High Grade & SCALE, il funzionamento degli Additional IP in modalità bridged (tramite MAC Virtuali) non è possibile. È quindi necessario configurare gli Additional IP in modalità routing o tramite la vRack.

**Questa guida ti mostra come configurare la rete con Proxmox VE.**

## Prerequisiti

- Disporre di un [server dedicato OVHcloud](https://www.ovhcloud.com/it/bare-metal/)
- Disporre di un [Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
>
> Nello Spazio Cliente OVHcloud non è necessario applicare MAC virtuale sugli Additional IP.
>

## Procedura

> [!primary]
>
> Su queste gamme di server, ci sono 4 schede di rete. Le prime due per il pubblico, le ultime due per il privato. Per usufruire di tutta la banda passante, è necessario creare degli aggregati.
>

### Additional IP in modalità routing sulle interfacce di rete pubbliche

Questa configurazione offre prestazioni di banda passante migliori, ma risulta meno flessibile. Con questa configurazione, gli indirizzi Additional IP devono essere associati a un server dedicato. Se disponi di più server di virtualizzazione Proxmox e desideri migrare una VM da un server all'altro, dovrai anche migrare l'indirizzo Additional IP verso il server di destinazione, tramite lo Spazio Cliente OVHcloud o tramite l'API OVHcloud. Per automatizzare questo step scrivi uno script che utilizza le API di OVHcloud.  

#### Schema della configurazione di destinazione

![schema route](images/schema_route2022.png){.thumbnail}

#### Spiegazioni

Proxmox si basa su una distribuzione Debian. In questa guida, la configurazione di rete verrà modificata via SSH e non dall'interfaccia Web.

Bisogna:

- connettersi in SSH su Proxmox;
- creare un aggregato (linux bond)
- creare un bridge;
- autorizzare il forwarding
- autorizzare proxy_arp
- aggiungere le strade.

#### Configura l'hypervisor

Accedi al server Proxmox via SSH:

```bash
ssh root@PUB_IP_DEDICATED_SERVER
# utilizzare l'IP privato configurato sulla vRack
```

Tutto avviene nel file `/etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback
  # Enable IP forwarding
  up echo "1" > /proc/sys/net/ipv4/ip_forward
  # Enable proxy-arp only for public bond
  up echo "1" > /proc/sys/net/ipv4/conf/bond0/proxy_arp

# public interface 1
auto ens33f0
iface ens33f0 inet manual
	bond-master bond0

# public interface 2
auto ens33f1
iface ens33f1 inet manual
	bond-master bond0

# private interface 1
auto ens35f0
iface ens35f0 inet manual

# private interface 2
auto ens35f1
iface ens35f1 inet manual

# LACP aggregate on public interfaces
# configured in static mode on this example
# Has the server's public IP
auto bond0
iface bond0 inet static
    address PUB_IP_DEDICATED_SERVER/24
	gateway PUB_GW
	bond-slaves ens33f0 ens33f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first public interface
	hwaddress AB:CD:EF:12:34:56

#Private
auto bond1
iface bond1 inet static
	bond-slaves ens35f0 ens35f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first private interface
	hwaddress GH:IJ:KL:12:34:56

# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
# By default Proxmox creates vmbr0.
# You can use it or create another one 
auto vmbr0
iface vmbr0 inet dhcp
	# Define a private IP, it should not overlap your existing private networks on the vrack for example 
	address 192.168.0.1/24
	bridge-ports none
	bridge-stp off
	bridge-fd 0
	# Add single additional
	up ip route add A.B.C.D/32 dev vmbr0
	# Add block IP
	up ip route add A.B.C.D/28 dev vmbr0

# Bridge used for private networks on vRack
# The VLAN feature is enabled
auto vmbr1
iface vmbr1 inet manual
        bridge-ports bond1
        bridge-stp off
        bridge-fd 0
        bridge-vlan-aware yes
        bridge-vids 2-4094
```


A questo punto, riavvia i servizi di rete o riavvia il server:

```bash
systemctl restart networking.service
```

Quando riavvii i servizi di rete, i bridges (ad esempio vmbr0) possono essere inattivi. Questo perché Proxmox disconnette ogni VM dai bridges e non le riconnette. Per forzare la riconnessione delle VM ai bridges, puoi riavviare le VM.

#### Esempio di configurazione VM cliente Debian

Contenuto del file `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address ADDITIONAL_IP       # this should match with the IP A.B.C.D/32
    netmask 255.255.255.255
    gateway 192.168.0.1			# this sould match with the private IP set on bridge
```

#### Test e conferma

Le tue macchine virtuali dovrebbero poter raggiungere un servizio pubblico su Internet. Le macchine virtuali possono essere allegate direttamente su Internet tramite l'indirizzo Additional IP. La banda passante disponibile corrisponde alla banda passante disponibile sulle interfacce pubbliche del tuo server e non condizionerà le interfacce private utilizzate per la vRack. Questa banda passante è condivisa con le altre macchine virtuali sullo stesso host che utilizzano un indirizzo Additional IP e l'host Proxmox per l'accesso pubblico.

Per verificare il tuo IP pubblico, dalla VM:

```bash
curl ifconfig.io
ADDITIONAL_IP    				# should return your additional ip
```

### Additional IP via le vRack

Questa configurazione è più flessibile: non è necessario associare un Additional IP a un server ma alla vRack. Questo significa che se una macchina virtuale desidera utilizzare un indirizzo Additional IP, può richiederlo direttamente senza alcuna configurazione aggiuntiva e indipendentemente dall'host su cui è ospitata.

> [!warning]
>
> Questa configurazione è limitata a 600 Mb/s per il traffico in uscita.
>

#### Prerequisiti

* Disporre di un blocco pubblico di indirizzi IP nel proprio account, con almeno quattro indirizzi. Il blocco deve essere puntato verso la vRack.
* Aver selezionato un intervallo di indirizzi IP privati
* Disporre di un [server compatibile con la vRack](https://www.ovhcloud.com/it/bare-metal/){.external}
* Aver attivato un servizio [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
* Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

#### Schema della configurazione di destinazione

![schema vrack](images/schema_vrack2022.png){.thumbnail}

#### Spiegazioni

Vi serve:

* creare un aggregato;
* creare un bridge collegato all’aggregato;

Per prima cosa, aggiungi il tuo blocco pubblico di indirizzi IP alla vRack. accedendo alla sezione `Bare Metal Cloud`{.action} del tuo Spazio Cliente OVHcloud e apri il menu `vRack`{.action}.

Seleziona la tua vRack nella lista per visualizzare la lista dei servizi ammissibili. Clicca sul blocco pubblico di indirizzi IP che vuoi aggiungere alla vRack e poi clicca sul pulsante `Aggiungi`{.action}.

#### Configura un indirizzo IP utilizzabile

Nel caso della vRack, il primo, il penultimo e l'ultimo indirizzo di un determinato blocco IP sono sempre riservati rispettivamente all'indirizzo di rete, al gateway di rete e al *broadcast* di rete. Questo significa che il primo indirizzo utilizzabile è il secondo indirizzo del blocco, come indicato di seguito:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
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
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

Per configurare il primo indirizzo IP utilizzabile, è necessario modificare il file di configurazione di rete come indicato qui di seguito: In questo esempio, utilizziamo la <i>subnet mask </i>**255.255.255.240**.

> [!primary]
>
> La <i>subnet mask</i> utilizzata in questo esempio è adatta al nostro blocco IP, ma può variare in base alla dimensione del blocco. Nel momento in cui acquisti un blocco IP, ricevi un’email con le indicazioni riguardo alla <i>subnet mask</i> da utilizzare.
>

#### Configura l'hypervisor

Tutto avviene nel file `/etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

Ciò che conta è la configurazione `bond1` e `vmbr1`:

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual

# public interface 2
auto ens33f1
iface ens33f1 inet manual

# private interface 1
auto ens35f0
iface ens35f0 inet manual
	bond-master bond1

# private interface 2
auto ens35f1
iface ens35f1 inet manual
	bond-master bond1

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad

auto bond1
# LACP Aggregate on private interfaces
# No IPs on it
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
    bond-miimon 100
	bond-mode 802.3ad


#Private

auto vmbr1
# Bridge connected to bond1 aggregate
# No need for IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

post-up echo 1 > /proc/sys/net/ipv4/ip_forward

```

A questo punto, riavvia i servizi di rete o riavvia il server.

#### Esempio di configurazione VM cliente Debian

Contenuto del file `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
