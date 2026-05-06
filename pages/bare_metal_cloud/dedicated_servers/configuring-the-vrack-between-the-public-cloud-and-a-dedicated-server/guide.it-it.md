---
title: "Configurare la vRack tra Public Cloud e un server dedicato"
excerpt: "Configura una rete privata tra un'istanza Public Cloud OVHcloud e un server dedicato tramite la vRack."
updated: 2026-02-20
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

La [vRack](/links/network/vrack) OVHcloud è una rete privata che permette di configurare l'indirizzamento tra due o più [Server dedicati](/links/bare-metal/bare-metal) OVHcloud. ma permette anche di aggiungere [istanze Public Cloud](/links/public-cloud/compute) alla rete privata per creare un'infrastruttura di risorse fisiche e virtuali.

**Questa guida ti mostra come configurare una rete privata tra un'[istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) e un [Server dedicato](/links/bare-metal/bare-metal).**

## Prerequisiti

* Aver creato un'[istanza Public Cloud OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps)
* Aver attivato un servizio [vRack](/links/network/vrack)
* Disporre di un [server dedicato](/links/bare-metal/bare-metal) compatibile con la vRack
* Una gamma di indirizzi IP privati di tua scelta
* Entrambi i servizi devono trovarsi nella stessa vRack.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Percorso di navigazione:** `Public Cloud`{.action} > Seleziona il tuo project

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!warning]
> Questa funzionalità potrebbe non essere disponibile o essere limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about).
>
> Consulta la nostra [pagina comparativa](/links/bare-metal/eco-compare) per maggiori informazioni.

## Procedura

### Aggiungere un progetto Public Cloud alla vRack

> [!primary]
> Questo non si applica ai progetti appena creati che vengono consegnati automaticamente con una vRack. Una volta creato il progetto, è possibile visualizzare la vRack aprendo il menu `Network`{.action} nella barra laterale sinistra e selezionando `Rete privata vRack`{.action}.
>
> È inoltre possibile rimuovere il progetto dalla vRack assegnata e collegarlo ad un'altra vRack se lo si desidera, in particolare se si disponeva già di una vRack esistente con il proprio server o i propri server dedicati.

Nella lista dei servizi compatibili, seleziona il progetto che vuoi aggiungere alla vRack, poi clicca sul pulsante `Aggiungi`{.action}.

![aggiungere un progetto alla vrack](images/addprojectvrack.png){.thumbnail}

### Integrare un'istanza nella vRack

> [!primary]
> Questa guida si concentra su una configurazione semplice di vRack tra un'istanza Public Cloud e un server dedicato.
> Se hai configurato le tue istanze con una modalità di deployment come zone locali o multi AZ, tieni presente che le zone locali non supportano ancora la vRack.
> Inoltre, la **vRack** è una rete L2 globale e non supporta la resilienza a livello di "zona" o "regione".
>

Le potrebbero presentarsi due situazioni:

- L'istanza non esiste ancora.
- L'istanza esiste già e sarà necessario aggiungerla alla vRack.

#### Caso di una nuova istanza

Per maggiori informazioni, consulta la guida [Creare un'istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps). Durante la creazione di un'istanza, è possibile scegliere, allo Step 5, una modalità di rete, seguita da una rete privata in cui integrare l'istanza.

#### Caso di un'istanza esistente

Una volta che il progetto è collegato a una vRack, è possibile creare una rete privata e collegarla a istanze esistenti.

Nella scheda `Public Cloud`{.action}, clicca su `Private Network`{.action} nel menu di sinistra sotto **Network**.

Clicca sul pulsante `Aggiungi una rete privata`{.action}.

![create private network](images/vrack2022-03.png){.thumbnail}

Nella pagina successiva è possibile personalizzare diverse impostazioni.

Seleziona la Region in cui vuoi inserire la rete privata. Assicurati che sia nella stessa regione dell'istanza esistente.

![select region](images/vrack2024-01.png){.thumbnail}

Per poter comunicare tra loro, i due servizi devono essere "taggati" con lo stesso **VLAN ID**.

Questo può essere configurato allo Step successivo.

![configure network](images/configure_private_network.png){.thumbnail}

Questo step offre diverse opzioni di configurazione. Ai fini di questa guida, ci concentreremo sugli elementi necessari. Fare clic sulle schede seguenti per visualizzare i dettagli:

> [!tabs]
> **Nome della rete privata**
>>
>> Immettere un nome per la rete privata.
>>
> **Opzioni di rete del layer 2**
>>
>> Di default, il VLAN ID dei server dedicati è **0**. Per utilizzare questo VLAN ID per un'istanza, è necessario contrassegnare la rete privata con la VLAN **0** anche.
>> Selezionare la casella **Set a VLAN ID** e selezionare VLAN ID **0**.
>>
>> Se non si seleziona la casella, il sistema assegnerà un numero di identificazione VLAN casuale alla rete privata.
>>
> **Utilizzo di un VLAN ID diverso**
>>
>> Se non si intende utilizzare l'ID VLAN **0**, è possibile selezionare un ID diverso compreso tra 1 e 4000. In questo caso:
>>
>> - Durante la configurazione della vRack sul server dedicato, questa VLAN ID deve essere inclusa nel file o nei file di configurazione di rete.
>>
>> > [!primary]
>> > È possibile utilizzare lo stesso VLAN ID per più reti private; tuttavia, ciò richiede una gestione attenta degli IP privati. L'utilizzo di un pool DHCP non sovrapposto può essere un modo per gestire questo problema.
>> >
>>
>> > [!primary]
>> > A differenza dei server dedicati (quando si utilizza un VLAN ID diverso da 0), non è necessario includere direttamente il VLAN ID nel file di configurazione di rete dell'istanza Public Cloud una volta che è stato definito nello Spazio Cliente OVHcloud.
>> >
>>
>> Esempio: se la rete privata dell'istanza è "taggata" con il VLAN 2, questo VLAN ID deve essere incluso solo nella configurazione di rete del server dedicato. Per maggiori informazioni, consulta la guida seguente: [Creare diverse VLAN nella vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
> **Opzioni di distribuzione degli indirizzi DHCP**
>>
>> È possibile mantenere la classe IP privata di default o utilizzarne un'altra.
>>
>> Selezionare "Attiva DHCP per questa rete privata" per assegnare e configurare automaticamente l'indirizzo IP privato sull'istanza. Sarà quindi necessario configurare solo le interfacce di rete del server dedicato.
>>
>> Quando questa opzione non è selezionata, è necessaria una configurazione manuale sia sull'istanza Public Cloud che sul server dedicato.
>>
>> **Opzioni Gateway di rete**
>>
>> Assicurati che entrambe le opzioni siano deselezionate.
>>

Una volta terminata la configurazione, clicca su `Configurare la tua rete privata`{.action}. Questa operazione potrebbe richiedere alcuni minuti.

Nella dashboard dell'istanza corrispondente, individua la sezione "Reti" e clicca sul pulsante `...`{.action} accanto a "Reti private". Seleziona `Associa una rete`{.action}.

![attach network](images/vrack2021-01.png){.thumbnail}

Nella nuova finestra, seleziona le reti private da associare all'istanza e clicca su `Associa`{.action}.

![attach network](images/attach_network.png){.thumbnail}

### Configura le interfacce di rete

> [!primary]
> Se hai scelto l'opzione per configurare la rete privata sulla tua istanza utilizzando DHCP, devi solo configurare le interfacce di rete sul server dedicato.
>

#### Configurazione quando si utilizza il VLAN ID predefinito 0

Prima di iniziare, collegati al tuo server via SSH ed elenca le tue interfacce di rete con il seguente comando:

```bash
ip a
```

Per i server dedicati, individua la linea che inizia con ```link ether``` e verifica che questa interfaccia corrisponda all'interfaccia **Privata** elencata nella scheda `Interfacce di rete`{.action} della dashboard del tuo server.

Utilizza questo nome di interfaccia per sostituire `NETWORK_INTERFACE` nelle configurazioni seguenti (esempio: `eth1`).

A titolo di esempio, utilizzeremo l'intervallo di indirizzi IP `192.168.0.0/16` (**Subnet mask**: `255.255.0.0`).

> [!tabs]
> **Debian 11**
>>
>> Utilizzando un editor di testo di tua scelta, apri il file di configurazione di rete situato in `/etc/network/interfaces.d` per modificarlo. Qui il file è chiamato `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Aggiungi le seguenti righe alla configurazione esistente, sostituisci `NETWORK_INTERFACE`, `IP_ADDRESS` e `NETMASK` con i tuoi valori:
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>>```
>>
>> **Esempio:**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Salva le modifiche nel file di configurazione ed esci dall'editor.
>>
>> Riavvia il servizio di rete per applicare la configurazione:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu e Debian 12+**
>>
>> Utilizzando un editor di testo di tua scelta, apri il file di configurazione di rete situato in `/etc/netplan/` per modificarlo. Qui il file è chiamato `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Aggiungi le seguenti righe alla configurazione esistente dopo la riga `version: 2`. Sostituisci `NETWORK_INTERFACE` e `IP_ADDRESS/PREFIX` con i tuoi valori.
>>
>> ```yaml
>>    ethernets:
>>        NETWORK_INTERFACE:
>>            dhcp4: false
>>            addresses:
>>              - IP_ADDRESS/PREFIX
>> ```
>>
>> **Esempio:**
>>
>> ![netplan config](images/netplan_configuration.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > È importante rispettare l'allineamento di ogni elemento nei file `yaml` come rappresentato nell'esempio sopra. Non utilizzare il tasto tab per creare lo spazio. È necessario utilizzare solo il tasto spazio.
>> >
>>
>> Salva le modifiche nel file di configurazione ed esci dall'editor.
>>
>> Applica la configurazione:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
> **AlmaLinux e Rocky Linux (8/9)**
>>
>> Una volta identificata l'interfaccia di rete privata, utilizza il seguente comando per creare un file di configurazione di rete.
>>
>> Sostituisci `NETWORK_INTERFACE` con il nome della tua interfaccia privata.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Ad esempio, se l'interfaccia privata è denominata `eth1`, abbiamo quanto segue:
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Successivamente, utilizza un editor di testo di tua scelta per modificare questo file.
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Aggiungi queste righe, sostituendo `NETWORK_INTERFACE`, `IP_ADDRESS` e `NETMASK` con i tuoi valori:
>>
>> ```console
>> DEVICE=NETWORK_INTERFACE
>> BOOTPROTO=static
>> IPADDR=IP_ADDRESS
>> NETMASK=NETMASK
>> ONBOOT=yes
>> TYPE=Ethernet
>> ```
>>
>> **Esempio:**
>>
>> ![centos config](images/centos_alma_configuration.png){.thumbnail}
>>
>> Salva le modifiche nel file di configurazione ed esci dall'editor.
>>
>> Riavvia il servizio di rete per applicare le modifiche:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux e Rocky Linux (10)**
>>
>> Una volta identificato il nome dell'interfaccia privata, esegui il seguente comando per verificare che sia connessa. Nel nostro esempio, la nostra interfaccia è chiamata `eno2`:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet  disconnected            --
>> ```
>>
>> Se lo `STATE` del `DEVICE` appare come `disconnected`, deve essere connesso prima di configurare l'IP.
>>
>> Quando si aggiunge una connessione **ethernet**, dobbiamo creare un profilo di configurazione che assegniamo poi a un dispositivo.
>>
>> Esegui il seguente comando, sostituendo `INTERFACE_NAME` e `CONNECTION_NAME` con i tuoi valori.
>>
>> Nel nostro esempio, abbiamo chiamato il nostro profilo di configurazione `private-interface`.
>>
>> ```bash
>> nmcli connection add type ethernet con-name CONNECTION_NAME ifname INTERFACE_NAME
>> ```
>>
>> **Esempio:**
>>
>> ```bash
>> nmcli connection add type ethernet con-name private-interface ifname eno2
>> ```
>>
>> Verifica che l'interfaccia sia stata connessa correttamente:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> eno2             ethernet  connected               private-interface
>> lo               loopback  connected (externally)  lo
>> ```
>>
>> Una volta fatto questo, un nuovo file di configurazione denominato *xxxxxxxxxx.nmconnection* verrà creato nella cartella `/etc/NetworkManager/system-connections`.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> È quindi possibile modificare questo file utilizzando il gestore `nmcli`, sostituendo `IP_ADDRESS`, `PREFIX` e `CONNECTION_NAME` con i propri valori.
>>
>> - Aggiungi il tuo IP:
>>
>> ```bash
>> nmcli connection modify CONNECTION_NAME IPv4.address IP_ADDRESS/PREFIX
>> ```
>>
>> **Esempio:**
>>
>> ```bash
>> nmcli connection modify private-interface IPv4.address 192.168.0.1/16
>> ```
>>
>> - Cambia la configurazione da **auto** a **manual**:
>>
>> ```bash
>> sudo nmcli connection modify CONNECTION_NAME IPv4.method manual
>> ```
>>
>> **Esempio:**
>>
>> ```bash
>> sudo nmcli connection modify private-interface IPv4.method manual
>> ```
>>
>> - Rendi la configurazione persistente:
>>
>> ```bash
>> sudo nmcli con mod CONNECTION_NAME connection.autoconnect true
>> ```
>>
>> **Esempio:**
>>
>> ```bash
>> sudo nmcli con mod private-interface connection.autoconnect true
>> ```
>>
>> Riavvia la rete con il seguente comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Configurazione Windows**
>>
>> Accedi al tuo server Windows tramite desktop remoto e vai al **Pannello di controllo**.
>>
>> ![Windows Control Panel](images/windows_control_panel.png){.thumbnail}
>>
>> Clicca su `Rete e Internet`{.action}.
>>
>> ![Network and Internet](images/windows_network_and_internet.png){.thumbnail}
>>
>> Apri `Centro connessioni di rete e condivisione`{.action}.
>>
>> ![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}
>>
>> Clicca su `Modifica impostazioni scheda`{.action}.
>>
>> ![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}
>>
>> Fai clic con il tasto destro sull'interfaccia di rete secondaria e quindi clicca su `Proprietà`{.action}.
>>
>> Nota che nel nostro esempio `Ethernet 2` è l'interfaccia utilizzata per la vRack. Tuttavia, è possibile che la scheda di rete vRack sia un'interfaccia diversa nella tua configurazione. Quella corretta da selezionare sarà l'interfaccia che non ha l'indirizzo IP principale del server o ha un IP auto-assegnato.
>>
>> ![Windows Properties](images/windows_properties_button.png){.thumbnail}
>>
>> Fai doppio clic su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Internet Protocol Version 4](images/windows_ipv4.png){.thumbnail}
>>
>> Clicca su **Utilizza il seguente indirizzo IP**. Inserisci un **indirizzo IP** qualsiasi dal tuo intervallo privato e la **Subnet mask** appropriata (`255.255.0.0` in questo esempio) nei campi corrispondenti.
>>
>> ![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}
>>
>> Clicca su `OK`{.action} per salvare le modifiche e riavvia il server per applicarle.

/// details | **Configurazione quando si utilizza un VLAN ID diverso**

In questo esempio, utilizzeremo **10** come VLAN ID (tag) e **192.168.0.0/16** come intervallo di indirizzi IP privati.

> [!tabs]
> **Debian 11**
>>
>> La configurazione seguente è basata su Debian 11 (Bullseye).
>>
>> - Prima di iniziare, stabilisci una connessione SSH al tuo server ed esegui i seguenti comandi per installare il pacchetto VLAN:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - Successivamente, carica il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Esegui il seguente comando per assicurarti che i moduli vengano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Recupera i nomi delle interfacce e identifica l'interfaccia privata:
>>
>> ```sh
>> ip a
>> ```
>>
>> In questo esempio, l'interfaccia di rete privata è identificata come `eno2`.
>>
>> - Successivamente, crea una sotto-interfaccia VLAN per l'interfaccia di rete (configurazione non persistente) e assegna (tagga) il VLAN ID. In questo esempio, il VLAN ID è 10.
>>
>> Sostituisci i valori con i tuoi.
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> - Successivamente, assegna un indirizzo IP privato alla sotto-interfaccia VLAN appena creata:
>>
>> ```sh
>> sudo ip addr add 192.168.0.14/16 dev eno2.10
>> ```
>>
>> - Successivamente, attiva l'interfaccia privata e la sotto-interfaccia VLAN:
>>
>> ```sh
>> sudo ip link set dev eno2 up
>> sudo ip link set dev eno2.10 up
>> ```
>>
>> - Per rendere la configurazione persistente, aggiungi le seguenti voci al file di configurazione:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> ```console
>> auto eno2.10
>> iface eno2.10 inet static
>>    address 192.168.0.14
>>    netmask 255.255.0.0
>>    broadcast 192.168.255.255
>>    vlan-raw-device eno2
>> ```
>>
>> - Panoramica:
>>
>> ![config](images/config_debian.png){.thumbnail}
>>
>> - Riavvia la rete per applicare le modifiche:
>>
>> ```sh
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu e Debian 12+**
>>
>> La configurazione seguente è basata su Ubuntu 24.04 (Noble Numbat).
>>
>> - Prima di iniziare, stabilisci una connessione SSH al tuo server ed esegui il seguente comando per installare il pacchetto VLAN:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - Successivamente, carica il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Esegui il seguente comando per assicurarti che i moduli vengano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Crea o modifica il file di configurazione `cloud.cfg` per impedire modifiche automatiche alla configurazione di rete:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> - Aggiungi questa riga:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Salva e chiudi il file.
>>
>> - Per ottenere il nome dell'interfaccia di rete e il suo indirizzo MAC:
>>
>> ```sh
>> ip a
>> ```
>>
>> - Qui, l'interfaccia che vogliamo configurare è `eno2` con indirizzo MAC: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/ubuntu_ip_a.png){.thumbnail}
>>
>> - Aggiungi la configurazione di rete per questa interfaccia e la dichiarazione VLAN al file di configurazione, assicurandoti di posizionarla direttamente sotto la riga `version: 2`. Sostituisci i valori con i tuoi:
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno2:
>>              match:
>>                macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                          # VLAN ID
>>             link: eno2                  # Nome interfaccia
>>             addresses:
>>             - 192.168.0.14/16
>> ```
>>
>> - Panoramica:
>>
>> ![config](images/config_ubuntu.png){.thumbnail}
>>
>> - Salva e chiudi il file, quindi esegui il seguente comando:
>>
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> - Se ricevi il seguente messaggio:
>>
>> ```console
>> WARNING:root:Cannot call Open vSwitch: ovsdb-server.service is not running.
>> ```
>>
>> - Puoi risolverlo installando il seguente pacchetto:
>>
>> ```sh
>> sudo apt install openvswitch-switch
>> ```
>>
>> - Verifica che la configurazione sia stata applicata correttamente:
>>
>> ```sh
>> ip a
>> ```
>>
> **AlmaLinux e Rocky Linux (8/9)**
>>
>> La configurazione seguente è basata su Almalinux 9.
>>
>> - Prima di iniziare, stabilisci una connessione SSH al tuo server ed esegui il seguente comando per caricare il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Esegui il seguente comando per assicurarti che i moduli vengano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Recupera i nomi delle interfacce e identifica l'interfaccia privata:
>>
>> ```sh
>> ip a
>> ```
>>
>> In questo esempio, l'interfaccia privata è `eno2`.
>>
>> - Successivamente, crea un file di configurazione della sotto-interfaccia per la VLAN nel file di configurazione di rete principale. In questo esempio, il file è denominato `ifcfg-eno2.10`, qui eno2 si riferisce all'interfaccia di rete privata e `10` al VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts-ifcfg-eno2.10
>> ```
>>
>> - Aggiungi le seguenti voci al file di configurazione. Sostituisci i valori con i tuoi.
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.14
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> - Salva ed esci dal file.
>>
>> - Panoramica:
>>
>> ![config](images/config_alma.png){.thumbnail}
>>
>> - Riavvia l'interfaccia di rete:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux e Rocky Linux (10)**
>>
>> La configurazione seguente è basata su Fedora 43.
>>
>> - Prima di iniziare, stabilisci una connessione SSH al tuo server ed esegui il seguente comando per caricare il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Esegui il seguente comando per assicurarti che i moduli vengano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Per ottenere il nome dell'interfaccia di rete:
>>
>> ```sh
>> ip a
>> ```
>>
>> In questo esempio, l'interfaccia è chiamata `eno2`. Dovremo creare una sotto-interfaccia VLAN prima di assegnare un indirizzo IP privato ad essa.
>>
>> - Utilizza il seguente comando per creare l'interfaccia VLAN:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Sostituisci `vlan-name` con il nome della sotto-interfaccia VLAN, `parent-interface` con il nome dell'interfaccia privata e `vlan-id` con il VLAN ID.
>>
>> **In questo esempio:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> - Assegna un indirizzo IP privato alla sotto-interfaccia VLAN:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **In questo esempio:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.14/16 ipv4.method manual
>> ```
>>
>> - Successivamente, attiva la sotto-interfaccia VLAN:
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> **In questo esempio:**
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> I passaggi precedenti creano un file di configurazione per l'interfaccia VLAN. Questo file si trova in `/etc/NetworkManager/system-connections/` e segue il formato di denominazione `vlan-name.nmconnection`.
>>
>> In questo esempio, il file è chiamato `eno2.10.nmconnection`.
>>
>> - Panoramica:
>>
>> ![config](images/fedora_file_name.png){.thumbnail}
>>
>> ![config](images/config_fedora.png){.thumbnail}
>>
> **Windows**
>>
>> Connettiti al tuo server tramite desktop remoto e apri l'applicazione Server Manager. Seleziona `Server locale`{.action} e clicca sul link `Disabilitato`{.action} accanto a **Gruppo NIC**.
>>
>> ![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}
>>
>> Clicca con il tasto destro sull'interfaccia di rete e seleziona `Aggiungi al nuovo team`{.action}.
>>
>> ![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}
>>
>> Nella nuova finestra, crea un nuovo team digitando il nome del team nel campo **Nome team**. Al termine dell'operazione clicca su `OK`{.action} per confermare.
>>
>> ![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}
>>
>> Poi specifica il tag della VLAN. Nel pannello **SCHEDE E INTERFACE** della schermata **Gruppo NIC**, vai alla scheda `Interface gruppo`{.action} e clicca con il tasto destro del mouse sull'interfaccia che hai appena aggiunto al nuovo team e infine clicca su `Proprietà`{.action}. A questo punto, seleziona `VLAN specifica`{.action} e inserisci il tag.
>>
>> ![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}
>>
>> Adesso non resta che configurare l'indirizzo IP della VLAN. Clicca sul pulsante `Start`{.action} e poi su `Pannello di controllo`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}
>>
>> Poi clicca su `Rete e Internet`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}
>>
>> Clicca su `Centro connessioni di rete e condivisione`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}
>>
>> Poi clicca su `Modifica impostazioni scheda`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}
>>
>> Di seguito, clicca con il tasto destro sull'interfaccia VLAN e poi clicca su `Proprietà`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}
>>
>> Nel nostro esempio, `Ethernet 2` è l'interfaccia utilizzata per la vRack. ma è possibile che la scheda di rete vRack utilizzi un'interfaccia diversa. Utilizza un'interfaccia che non possiede l'indirizzo IP principale del server o che utilizza un indirizzo IP auto-attribuito.
>>
>> Fai doppio click su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}
>>
>> Clicca su `Utilizza il seguente indirizzo IP`{.action}: in **Indirizzo IP** inserisci un indirizzo IP del tuo intervallo e in **maschera di sottorete** inserisci 255.255.0.0.
>>
>> ![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}
>>
>> Infine clicca sul pulsante `OK`{.action} per salvare le modifiche e concludi l'operazione riavviando il server.

///

## Per saperne di più

[Creare due o più VLAN nella vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Contatta la nostra [Community di utenti](/links/community).
