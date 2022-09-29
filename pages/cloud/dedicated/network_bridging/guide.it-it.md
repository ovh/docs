---
title: 'Modalità bridge IP'
slug: network-bridging
excerpt: Come configurare l'accesso a Internet delle macchine virtuali utilizzando la modalità bridge
section: 'Rete e IP'
---

**Ultimo aggiornamento: 21/12/2020**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

La connessione di rete in modalità bridge può essere utilizzata per configurare le tue macchine virtuali. Per il corretto funzionamento della configurazione sulla nostra rete sono necessarie alcune modifiche.

**Questa guida ti mostra come utilizzare la modalità bridge per configurare l'accesso a Internet per le tue macchine virtuali.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prerequisiti

- Disporre di un server dedicato con un hypervisor installato (ad esempio [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox)
- Disporre di almeno un indirizzo [Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/) connesso al server
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).
>

## Procedura

Gli step di base sono sempre gli stessi, indipendentemente dai sistemi utilizzati:
- creazione di un indirizzo MAC virtuale per un indirizzo IP di trasferimento
- regolare l'indirizzo MAC della macchina virtuale (VM) su questo nuovo indirizzo
- configurare l'indirizzo IP, la maschera di rete, il gateway e la strada verso il gateway all'interno della macchina virtuale.

Per questo esempio, nei nostri esempi di codice utilizzeremo i seguenti valori: che dovranno essere sostituiti dai tuoi valori:

- "SERVER_IP": indirizzo IP principale del tuo server
- "ADDITIONAL_IP": il tuo indirizzo Additional IP
- "GATEWAY_IP": l'indirizzo del vostro gateway predefinito.

### Assegna un indirizzo MAC virtuale

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca sul menu `Bare Metal Cloud`{.action} e apri il menu `IP`{.action}.

Il menu a tendina “Service” ti permette di selezionare solo gli Additional IP.

![manage IPs](images/manageIPs.png){.thumbnail}

Clicca sui tre puntini `..`{.action}. e poi su `Aggiungi un indirizzo MAC virtuale`{.action}.

![Aggiungi un MAC virtuale (1)](images/virtual_mac_02_2020.png){.thumbnail}

Seleziona "ovh" nel menu a tendina "Tipo", inserisci un nome nel campo "Nome della macchina virtuale" e clicca su `Conferma`{.action}.

![Aggiungi un MAC virtuale (2)](images/addvmac2.png){.thumbnail}

### Determinare l'indirizzo del gateway

Per configurare le tue macchine virtuali per l'accesso a Internet, devi conoscere il gateway della tua macchina host, cioè il tuo server dedicato. L'indirizzo del gateway è composto dai primi tre byte dell'indirizzo IP principale del tuo server, l'ultimo byte è di 254. Ad esempio, se l'indirizzo IP principale del tuo server è:

- 169.254.10.020

L'indirizzo del gateway sarà:

- 169.254.10.254

### Prepara l'host

> [!primary]
>
Per tutti i sistemi operativi e le distribuzioni, è necessario configurare la propria macchina virtuale con l'indirizzo MAC virtuale creato nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.
>

#### Proxmox

Dopo aver creato la macchina virtuale e quando è ancora spenta:

 1. Seleziona la macchina virtuale
 2. Apri la sezione "Hardware"
 3. Seleziona `Rete`{.action} Periferica
 4. Clicca sul pulsante `Modifica`{.action}.

![navigare fino alla periferica di rete](images/proxmox_01.png){.thumbnail}

In seguito aggiungi l'indirizzo MAC che hai creato precedentemente.

![aprire una periferica di rete](images/proxmox_02.png){.thumbnail}


A questo punto puoi avviare la tua macchina virtuale e passare agli step successivi, in base al sistema operativo scelto.

#### VMware ESXi
Una volta creata la macchina virtuale e disattivata, clicca con il tasto destro sul pulsante `Modifica le impostazioni`{.action}.

![Menu contestuale VM](images/vmware_01.png){.thumbnail}

Imposta `Netwok Adapter 1`{.action} e modifica il valore nel menu a tendina `Indirizzo MAC`{.action} in modalità "Manuel" e inserisci l'indirizzo MAC VMware creato precedentemente.

![Modifica le impostazioni](images/vmware_02.png){.thumbnail}

A questo punto puoi avviare la tua macchina virtuale e passare agli step successivi, secondo il tuo sistema operativo.

### Configura le macchine virtuali

#### Debian

Accedi all'interfaccia di sistema (o *shell*) della tua macchina virtuale. Una volta connesso, apri il file di configurazione di rete della macchina virtuale, situato in `/etc/network/interfaces`.
Modifica il file in modo che rispecchi la configurazione qui sotto. Ricordati di sostituire le variabili con i tuoi valori:

- Distribuzioni vecchie:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up route add GATEWAY_IP dev eth0
    post-up route add default gw GATEWAY_IP
    pre-down route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

- Distribuzioni recenti:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up ip route add GATEWAY_IP dev eth0
    post-up ip route add default via GATEWAY_IP
    pre-down ip route del GATEWAY_IP dev eth0
    pre-down ip route del default via GATEWAY_IP
```

Sostituisci anche `eth0` se il tuo sistema utilizza nomi di interfaccia di rete prevedibili. Per trovare i nomi di interfaccia di rete, esegui questo comando:

```bash
ls /sys/class/net
```

Salva e chiudi il file e riavvia la macchina virtuale.

#### Sistemi operativi Red Hat basati su Red Hat (CentOS 6, Scientific Linux, ClearOS, ecc...)

Apri un terminale sulla tua macchina virtuale. Una volta connesso, apri il file di configurazione di rete della macchina virtuale. che si trova in `/etc/network/interfaces`. Modifica il file in modo che rispecchi la configurazione qui sotto. Ricordati di sostituire le variabili con i tuoi valori:

```console
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Ora, registra e chiudi il file.

In seguito apri il file di routing della macchina virtuale. che si trova in `/etc/sysconfig/network-scripts/route-eth0`. Modifica il file in modo che rispecchi la configurazione qui sotto. Ricordati di sostituire le variabili con i tuoi valori:

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Salva e chiudi il file e riavvia la macchina virtuale.

#### CentOS 7

> [!primary]
> 
> Per CentOS 7 il nome della scheda di rete varia in base alle opzioni di installazione. Dovrai verificare il nome dell'adattatore e utilizzarlo per configurare la tua macchina virtuale. Puoi trovare i nomi di interfaccia di rete con il comando `ls /sys/class/net`.
> 

Apri un terminale sulla tua macchina virtuale. Una volta connesso, apri il file di configurazione di rete della macchina virtuale, che si trova in `/etc/sysconfig/network-scripts/ifcfg-(nome dell'interfaccia)`. Modifica il file in modo che rispecchi la configurazione qui sotto. Ricordati di sostituire le variabili con i tuoi valori:

```console
DEVICE=(interfaccia-name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Salva e chiudi il file

Apri il file di routing della macchina virtuale, che si trova in `/etc/sysconfig/network-scripts/route-(nome dell'interfaccia)`. Modifica il file in modo che rispecchi la configurazione qui sotto. Ricordati di sostituire le variabili con i tuoi valori:

```console
GATEWAY_IP - 169.254.10.254 (nome-interfaccia)
NETWORK_GW_VM - 255.255.255.0 (inserisci il nome dell'interfaccia)
default GATEWAY_IP
```

Salva e chiudi il file.

In seguito apri il file di routing della macchina virtuale. Il sito è disponibile all’indirizzo `/etc/sysconfig/network/resolv.conf`.

```console
nameserver 213.186.33.99
```

Dopo aver salvato e chiuso il file, riavvia la tua rete o la tua macchina virtuale.

#### FreeBSD

Apri un terminale sulla tua macchina virtuale. Una volta connesso, apri il file di configurazione di rete della macchina virtuale, che si trova nella cartella `/etc/rc.conf`. Modifica il file in modo che rispecchi la configurazione qui sotto. In questo esempio, il nome dell'interfaccia è "em0". Se necessario, è possibile modificarlo.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_route="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Salva e chiudi il file. In seguito, modifica il file `/etc/resolv.conf`. Crealo se necessario.

```console
nameserver 213.186.33.99
```

Salva e chiudi il file e riavvia la macchina virtuale.

#### Ubuntu 18.04

Per prima cosa connetti SSH alla tua macchina virtuale e apri il file di configurazione di rete situato in `/etc/netplan/`utilizzando il comando seguente. Per dimostrarlo, il nostro file si chiama "50-cloud-init.yaml".

```bash
# nano /etc/netplan/50-cloud-init.yaml
```

Una volta avviato il file, modifica con questo codice:

```yaml
network:
    ethernets:
        (nome dell'interfaccia):
            addresses:
                - ADDITIONAL_IP/32
            nameservers:
                addresses:
                    - 213.186.33.99
                search: []
            optional: true
            strade:
                - to: 0.0.0.0/0
                  via: GATEWAY_IP
                  on-link: true
    Versione: 2
```

Dopo aver effettuato le modifiche, salva e chiudi il file ed esegui il comando:

```bash
# netplan try
Warning: Stopping systemd-networkd.service, but it can still be activated by:
  systemd-networkd.socket
Do you want to keep these settings?

Press ENTER before the timeout to accept the new configuration

Changes will revert in 120 secondi
Configurazione accetted.
```

#### Windows Server 2012/Hyper-V

Prima di configurare la tua macchina virtuale, è necessario creare un commutatore virtuale.

A partire dalla riga di comando del tuo server dedicato, esegui `IPconfig/ALL`{.action} e annota il nome della scheda di rete contenente l'indirizzo IP principale del server.

Nel pannello di configurazione Hyper-V, crea un nuovo commutatore virtuale e definisci il tipo di connessione su `External`{.action}.

Seleziona l'adattatore con l'indirizzo IP del server e spunta `Autorizza il sistema operativo a condividere questa scheda di rete`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>Questo step è necessario una sola volta per un server Hyper-V. Per tutte le macchine virtuali è necessario un interruttore virtuale per collegare le schede di rete virtuali della macchina virtuale alla scheda fisica del server.
> 

In seguito, seleziona la macchina virtuale alla quale vuoi aggiungere l'Additional IP. Utilizza il pannello di configurazione Hyper-V per modificare le impostazioni della macchina virtuale e chiudilo.

In seguito, utilizza la scheda di rete e clicca su `Advanced Features`{.action}, definisci l'indirizzo MAC su `Static`{.action} e inserisci l'indirizzo MAC virtuale per l'indirizzo Additional IP. Una volta inserite queste impostazioni, clicca su `OK`{.action} per applicare le modifiche.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

In seguito avvia la macchina virtuale e accedi come amministratore, poi accedi a `Control Panel`{.action} e `Network and Sharing Center`{.action}. Clicca sul link `Connections: Ethernet`{.action}, clicca sul pulsante `Properties`{.action} per visualizzare le proprietà Ethernet.

Seleziona `Internet Protocol Version 4 (TCP/IPv4)`{.action} e clicca sul pulsante `Properties`{.action} per visualizzare le proprietà IPv4.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

Nella finestra delle proprietà dell'IPv4 seleziona `Use the following IP address`{.action}. Inserisci l'indirizzo Additional IP nel campo indirizzi IP e inserisci "255.255.255.255" nella maschera di sottorete.

In seguito, inserisci l'indirizzo IP del gateway del tuo server in gateway predefinito (ad esempio, l'IP del tuo server termina con 254) e inserisci "213.186.33.99" nel campo `Preferred DNS Server`{.action}.

Clicca su `OK`{.action} e ignora il messaggio di avviso relativo all'indirizzo IP del gateway e all'indirizzo IP assegnato che non figurano nella stessa sottorete.

Riavvia il server La macchina virtuale deve essere collegata a Internet utilizzando l'indirizzo Additional IP.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

#### Risoluzione dei difetti

Se non riesci a stabilire una connessione tra la tua macchina virtuale e la rete pubblica e riscontri un problema di rete, riavvia il server in modalità Rescue e configura l'interfaccia di rete gateway direttamente sull'host.

Una volta riavviato il server in Rescue mode, esegui questi comandi:

```bash
ip link add name test-bridge link eth0 type macvlan
ip link set dev test-bridge address MAC_ADDRESS
ip link set test-bridge up
ip addr add ADDITIONAL_IP/32 dev test-bridge
```

Sostituisci "MAC_ADDRESS" con l'indirizzo MAC virtuale generato nel pannello di configurazione e "ADDITIONAL_IP" con l'Additional IP reale.

In seguito, è sufficiente effettuare un ping sul tuo Additional IP dall'esterno. Se funziona, significa probabilmente che sulla macchina virtuale o sull'host si è verificato un errore di configurazione che impedisce all'Additional IP di funzionare in modalità normale. Se invece l'IP non funziona ancora, apri un ticket al team di assistenza tramite il tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} per ulteriori indagini.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
