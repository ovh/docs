---
title: 'Modalità bridge IP'
excerpt: Come configurare l'accesso a Internet delle macchine virtuali utilizzando la modalità bridge
updated: 2024-07-15
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

> [!primary]
>
> Dal 6 ottobre 2022, la nostra soluzione "Failover IP" si chiama [Additional IP](/links/network/additional-ip). Questo non ha alcun impatto sulla sua funzionalità.
>

## Obiettivo

La connessione di rete in modalità bridge può essere utilizzata per configurare le tue macchine virtuali. Per il corretto funzionamento della configurazione sulla nostra rete sono necessarie alcune modifiche.

**Questa guida ti mostra come utilizzare la modalità bridge per configurare l'accesso a Internet per le tue macchine virtuali.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prerequisiti

- Disporre di un server dedicato con un hypervisor installato (ad esempio [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox)
- Disporre di almeno un indirizzo [Additional IP](/links/network/additional-ip) connesso al server
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about).
>
> Per maggiori informazioni, consulta la nostra [a confronto](/links/bare-metal/eco-compare).
>
> Questa guida non si applica ai server di gamma [Scale](https://www.ovhcloud.com/it/bare-metal/scale/) e [High Grade](https://www.ovhcloud.com/it/bare-metal/high-grade/). Lo stesso vale per la gamma di server Advance con le cpu AMD Epyc 4K e 8K lanciate a partire dal luglio 2024.
>
> Consulta le guide seguenti: [Configurare la rete su ESXi sulle gamme High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/esxi-network-HG-Scale), [Configurare la rete su Proxmox VE sulle gamme High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/proxmox-network-HG-Scale) e [Configurare la rete su Windows Server con Hyper-V sulle gamme High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/hyperv-network-HG-Scale).

## Procedura

Gli step di base sono sempre gli stessi, indipendentemente dai sistemi utilizzati:

- creazione di un indirizzo MAC virtuale per un indirizzo IP di trasferimento
- regolare l'indirizzo MAC della macchina virtuale (VM) su questo nuovo indirizzo
- configurare **l'indirizzo IP**, **la maschera di rete**, **il gateway** e **la strada verso il gateway** all'interno della macchina virtuale.

Per questo esempio, nei nostri esempi di codice utilizzeremo i seguenti valori: che dovranno essere sostituiti dai tuoi valori:

- "SERVER_IP": indirizzo IP principale del tuo server
- "ADDITIONAL_IP": il tuo indirizzo Additional IP
- "GATEWAY_IP": l'indirizzo del vostro gateway predefinito.

### Assegna un indirizzo MAC virtuale

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca sul menu `Bare Metal Cloud`{.action} e apri il menu `Network`{.action}. Clicca su `IP`{.action}.

Clicca sulla scheda `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Clicca sui tre puntini `...`{.action} e poi su `Aggiungi un indirizzo MAC virtuale`{.action}.

![Aggiungi un MAC virtuale (1)](images/addvmac.png){.thumbnail}

Seleziona "ovh" nel menu a tendina "Tipo", inserisci un nome nel campo "Nome della macchina virtuale" e clicca su `Conferma`{.action}.

![Aggiungi un MAC virtuale (2)](images/addvmac2.png){.thumbnail}

Dopo qualche secondo, nella colonna "MAC virtuale" della riga indirizzo Additional IP aggiuntivo apparirà un indirizzo MAC virtuale. Questo indirizzo MAC virtuale sarà necessario per la configurazione della macchina virtuale sull'host.

### Determinare l'indirizzo del gateway <a name="determinegateway"></a>

Per configurare le tue macchine virtuali per l'accesso a Internet, devi conoscere il gateway della tua macchina host, cioè il tuo server dedicato. L'indirizzo del gateway è composto dai primi tre byte dell'indirizzo IP principale del tuo server, l'ultimo byte è di 254. Ad esempio, se l'indirizzo IP principale del tuo server è:

- 203.0.113.1

L'indirizzo del gateway sarà:

- 203.0.113.**254**

È inoltre possibile recuperare l’indirizzo del gateway tramite [il tuo Spazio Cliente OVHcloud](#viacontrolpanel) o l’[API OVHcloud](#viaapi).

#### Dallo Spazio Cliente OVHcloud <a name="viacontrolpanel"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Bare Metal Cloud`{.action} e seleziona il tuo server nella sezione `Server dedicati`{.action}.

L’indirizzo gateway IPv4 assegnato al tuo server è visualizzato nella sezione `Rete` della scheda `Informazioni generali`{.action}. Una volta effettuata la copia, prosegui con l’applicazione della configurazione.

![gateway](images/ipv4_information.png){.thumbnail}

#### Tramite le API OVHcloud <a name="viaapi"></a>

Nella [pagina API OVHcloud](https://eu.api.ovh.com/console/), clicca in alto a destra su `Login`{.action}. Nella pagina successiva, inserisci il tuo identificativo cliente OVHcloud.

Eseguire la chiamata API seguente, indicando il nome interno del server (esempio: `ns3956771.ip-169-254-10.eu`):

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

### Prepara l'host

> [!primary]
>
Per tutti i sistemi operativi e le distribuzioni, è necessario configurare la propria macchina virtuale con l'indirizzo MAC virtuale creato nello [Spazio Cliente OVHcloud](/links/manager).
>

#### Proxmox

> [!warning]
>
> Le istruzioni seguenti sono valide per le macchine virtuali create in precedenza con un sistema operativo preinstallato. Se non hai creato delle VM, consulta le opzioni disponibili alla pagina [Qemu/KVM Virtual Machine](https://pve.proxmox.com/wiki/Qemu/KVM_Virtual_Machines){.external} (EN) di Proxmox.
>

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

> [!warning]
>
> Le istruzioni seguenti sono valide per le macchine virtuali create in precedenza con un sistema operativo preinstallato. Se non hai creato una VM, consulta la guida [Creare una macchina virtuale nel client host VMware](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-77AB6625-F968-4983-A230-A020C0A70326.html){.external} (EN) sulla pagina VMware.
>


Una volta creata la macchina virtuale e disattivata, clicca con il tasto destro sul pulsante `Modifica le impostazioni`{.action}.

![Menu contestuale VM](images/vmware_01.png){.thumbnail}

Imposta `Network Adapter 1`{.action} e modifica il valore nel menu a tendina `Indirizzo MAC`{.action} in modalità "Manuel" e inserisci l'indirizzo MAC VMware creato precedentemente.

![Modifica le impostazioni](images/vmware_02.png){.thumbnail}

A questo punto puoi avviare la tua macchina virtuale e passare agli step successivi, secondo il tuo sistema operativo.

### Configura le macchine virtuali <a name="configurationsteps"></a>

#### Debian

> [!warning]
>
> Si noti che gli esempi seguenti presuppongono che l'utente abbia effettuato l'accesso con privilegi limitati, da cui l'utilizzo di *sudo* prima di ogni ordine. Se sei connesso come *root*, non è necessario farlo.
>

Di default, il file di configurazione di rete della macchina virtuale si trova in `/etc/network/interfaces`.

Una volta connesso alla shell della macchina virtuale, esegui questo comando per identificare il nome dell’interfaccia:

```bash
ls /sys/class/net
```

Esegui una copia del file di configurazione per poter ripristinare la versione precedente se necessario:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

In caso di errore, puoi annullare l’operazione eseguendo questi comandi:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

Modifica il file in modo che rifletta la configurazione riportata di seguito, sostituisci `INTERFACE_NAME`, `ADDITIONAL_IP` e `GATEWAY_IP` con i tuoi valori.

```bash
sudo nano /etc/network/interfaces
```

```console
auto lo
iface lo inet loopback

# The primary network interface
auto INTERFACE_NAME
iface INTERFACE_NAME inet static
address ADDITIONAL_IP
netmask 255.255.255.255
gateway GATEWAY_IP
```

**Esempio**

```console
auto lo
iface lo inet loopback

# The primary network interface
auto ens192
iface ens192 inet static
address 192.0.2.1
netmask 255.255.255.255
gateway 203.0.113.254
```

Salvare e chiudere il file.<br>
Successivamente, modifica o crea il file `/etc/resolv.conf`:

```bash
sudo nano /etc/resolv.conf
```

Aggiungi questa riga:

```console
nameserver 213.186.33.99
```

Salvare e chiudere il file.<br>
A questo punto, è necessario mettere online l’interfaccia di rete. Per farlo, inserisci questo comando (sostituisci `ens192` con i tuoi valori):

```bash
sudo ip link set ens192 up
```

Riavvia il servizio di rete eseguendo il comando:

```bash
sudo systemctl restart networking
```

Per verificare che la macchina virtuale sia completamente connessa a Internet, esegui il comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se ricevi una risposta, significa che l’Additional IP è stato configurato correttamente. In caso contrario, riavvia la macchina virtuale e riavvia il ping.

#### Sistemi operativi Red Hat e basati su Red Hat (CentOS, Rocky Linux 8, Alma Linux 8, ecc.)

Di default, il file di configurazione di rete della macchina virtuale si trova in `/etc/sysconfig/network-scripts/`. A titolo dimostrativo, il nostro file si chiama `ifcfg-eth0`:

Una volta connesso alla shell della macchina virtuale, esegui questo comando per identificare il nome dell’interfaccia:

```bash
ls /sys/class/net
```

Esegui una copia del file di configurazione per poter ripristinare la versione precedente se necessario:

```bash
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

In caso di errore, puoi annullare l’operazione eseguendo questi comandi:

```bash
sudo rm -f etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0.bak etc/sysconfig/network-scripts/ifcfg-eth0
```

Modificare il file in modo che rifletta la configurazione seguente, sostituire `ADDITIONAL_IP`, `GATEWAY_IP` e `MY:VI:RT:UA:LM:AC` con i propri valori. Inoltre, è necessario modificare i parametri BOOTPROTO, ONBOOT e DNS (o aggiungerli se mancanti). Non è necessario modificare altre righe.

```bash
sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

```console
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=eth0
UUID=120ae2c6-4aa6-xxxx-xxxx-xxxxxxxxxx
DEVICE=eth0
ONBOOT=yes
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
HWADDR=MY:VI:RT:UA:LM:AC
DNS=213.186.33.99
```

Salvare e chiudere il file.<br>
Creare quindi un nuovo file, `route-(interface_name)`, nella directory `/etc/sysconfig/network-scripts/` e impostare i seguenti percorsi predefiniti per l'interfaccia utilizzando il gateway definito nel [passo 2](#determinegateway).

Nel nostro esempio, il nostro file si chiama `route-eth0` (sostituisci `eth0` con i tuoi valori):

```bash
sudo vi /etc/sysconfig/network-scripts/route-eth0
```

Modifica il file in modo che rifletta la configurazione riportata di seguito, sostituisci `GATEWAY_IP` con il tuo valore.

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Salvare e chiudere il file.

Riavvia la rete eseguendo il comando:

Per verificare che la macchina virtuale sia completamente connessa a Internet, esegui il comando:

```bash
sudo systemctl restart network
```

Per verificare che la macchina virtuale sia completamente connessa a Internet, esegui il comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se ricevi una risposta, significa che l’Additional IP è stato configurato correttamente. In caso contrario, riavvia la macchina virtuale e riavvia il ping.

#### Rocky Linux 9 e Alma Linux 9

Nelle versioni precedenti di Rocky Linux e Alma Linux, i profili di rete erano archiviati in formato ifcfg in questa directory: `/etc/sysconfig/network-scripts/`. Tuttavia, il formato ifcfg non è più consigliato ed è stato modificato in keyfiles. Il file di configurazione si trova nella directory `/etc/NetworkManager/system-connections/`.

Una volta connesso alla shell della macchina virtuale, esegui questo comando per identificare il nome dell’interfaccia:

```bash
ls /sys/class/net
```

Esegui una copia del file di configurazione per poter ripristinare la versione precedente se necessario.

Ad esempio, il nostro file si chiama `ens18-nmconnection`:

```bash
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection /etc/NetworkManager/system-connections/ens18-nmconnection.bak
```

In caso di errore, puoi annullare l’operazione eseguendo questi comandi:


```bash
sudo rm -f /etc/NetworkManager/system-connections/ens18-nmconnection
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection.bak /etc/NetworkManager/system-connections/ens18-nmconnection
```

Modificare il file in modo che rifletta la configurazione riportata di seguito, sostituire `ADDITIONAL_IP` e `GATEWAY_IP` con i propri valori. In questo esempio, il nome dell’interfaccia è `ens18`. Sostituire questo valore se non è applicabile.

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
gateway=GATEWAY_IP
```

Salvare e chiudere il file.<br>
Riavvia l’interfaccia di rete con questo comando:

```bash
sudo systemctl restart NetworkManager
```

Per verificare che la macchina virtuale sia completamente connessa a Internet, esegui il comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se ricevi una risposta, significa che l’Additional IP è stato configurato correttamente. In caso contrario, riavvia la macchina virtuale e riavvia il ping.


#### FreeBSD

Per impostazione predefinita, il file di configurazione di rete della macchina virtuale si trova in `/etc/rc.conf`.

Una volta connesso alla shell della macchina virtuale, esegui questo comando per identificare il nome dell’interfaccia:

```bash
ls /sys/class/net
```

Esegui una copia del file di configurazione per poter ripristinare la versione precedente se necessario:

```bash
sudo cp /etc/rc.conf /etc/rc.conf.bak
```

In caso di errore, puoi annullare l’operazione eseguendo questi comandi:

```bash
sudo rm -f /etc/rc.conf
sudo cp /etc/rc.conf.bak /etc/rc.conf
```

Modificare il file in modo che rifletta la configurazione riportata di seguito, sostituire `ADDITIONAL_IP` e `GATEWAY_IP` con i propri valori. In questo esempio, il nome dell’interfaccia è `em0`. Sostituire questo valore se non è applicabile.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Salva e chiudi il file. In seguito, modifica il file `/etc/resolv.conf`. Crealo se necessario.

```console
nameserver 213.186.33.99
```

Salva e chiudi il file e riavvia la macchina virtuale.

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se ricevi una risposta, significa che l’Additional IP è stato configurato correttamente. In caso contrario, riavvia la macchina virtuale e riavvia il ping.

#### Ubuntu

Accedi alla console per accedere alla macchina virtuale ed esegui questo comando per identificare il nome dell’interfaccia:

```bash
ip addr
```

Copiare quindi il file di configurazione per poter ripristinare la versione precedente in qualsiasi momento. A titolo dimostrativo, il nostro file si chiama `00-installer-config.yaml`:

```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak
```

In caso di errore, puoi annullare l’operazione eseguendo questi comandi:

```bash
sudo rm -f /etc/netplan/00-installer-config.yaml
sudo cp /etc/netplan/00-installer-config.yaml.bak /etc/netplan/00-installer-config.yaml
```

Apri il file di configurazione di rete in `/etc/netplan/` con il comando:

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

Una volta aperto il file per la modifica, modificalo con il codice seguente, sostituendo `INTERFACE-NAME`, `ADDITIONAL_IP` e `GATEWAY_IP` con i tuoi valori.

```yaml
network:
  ethernets:
    INTERFACE-NAME:
      dhcp4: true
      addresses:
          - ADDITIONAL_IP/32
      nameservers:
          addresses:
              - 213.186.33.99   
      routes:
           - to: 0.0.0.0/0
             via: GATEWAY_IP
             on-link: true
  version: 2
```

**Esempio**

```yaml
network:
  ethernets:
    ens18:
      dhcp4: true
      addresses:
          - 192.0.2.1/32
      nameservers:
          addresses:
              - 213.186.33.99
      routes:
           - to: 0.0.0.0/0
             via: 203.0.113.254
             on-link: true
  version: 2
```

Salvare e chiudere il file. Per testare la configurazione esegui questo comando:

```bash
sudo netplan try
```

Se è corretta, applicala utilizzando il comando seguente:

```bash
sudo netplan apply
```

Per verificare che la macchina virtuale sia completamente connessa a Internet, esegui il comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Se ricevi una risposta, significa che l’Additional IP è stato configurato correttamente. In caso contrario, riavvia la macchina virtuale e riavvia il ping.

#### Windows Server/Hyper-V

Prima di configurare la tua macchina virtuale, è necessario creare un commutatore virtuale.

A partire dalla riga di comando del tuo server dedicato, esegui `IPconfig/ALL`{.action} e annota il nome della scheda di rete contenente l'indirizzo IP principale del server.

Nel pannello di configurazione Hyper-V, crea un nuovo commutatore virtuale e definisci il tipo di connessione su `External`{.action}.

Seleziona l'adattatore con l'indirizzo IP del server e spunta `Autorizza il sistema operativo a condividere questa scheda di rete`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
> Questo step è necessario una sola volta per un server Hyper-V. Per tutte le macchine virtuali è necessario un interruttore virtuale per collegare le schede di rete virtuali della macchina virtuale alla scheda fisica del server.
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

In seguito, è sufficiente effettuare un ping sul tuo Additional IP dall'esterno. Se funziona, significa probabilmente che sulla macchina virtuale o sull'host si è verificato un errore di configurazione che impedisce all'Additional IP di funzionare in modalità normale.  Se, al contrario, l'IP non funziona ancora, apri un ticket di assistenza tramite il [centro assistenza](https://help.ovhcloud.com/csm?id=csm_cases_requests).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
