---
title: 'Configurare due o più server dedicati nella vRack'
excerpt: 'Scopri come configurare due o più server dedicati nella vRack'
updated: 2025-04-28
---

## Obiettivo

La vRack (rack virtuale) OVHcloud permette di unire virtualmente diversi server (indipendentemente dal loro numero e dalla loro localizzazione fisica nei nostri datacenter) e di connetterli a uno switch virtuale all'interno della stessa rete privata. In questo modo i server possono comunicare in modo privato e sicuro tra loro, all'interno di una VLAN dedicata.

**Questa guida ti mostra come configurare la vRack su diversi server dedicati.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prerequisiti

- Un servizio [vRack](/links/network/vrack) attivato nel tuo account
- Diversi [server dedicati](/links/bare-metal/bare-metal) (compatibili con la vRack)
- Avere accesso amministratore (sudo) al server via SSH o RDP
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Aver selezionato una gamma di indirizzi IP privati

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about).
>
> Per maggiori informazioni, consulta la nostra [a confronto](/links/bare-metal/eco-compare).

## Procedura

### Step 1: ordina la vRack

Accedi allo Spazio Cliente OVHcloud e clicca sul pulsante `Aggiungi un servizio`{.action} (icona del carrello) nel menu a sinistra. Utilizza il filtro in cima alla pagina o scorri verso il basso per trovare il servizio `vRack`{.action}.

![Ordina vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}

Clicca sulla casella `vRack`{.action} per essere reindirizzato alla pagina in cui confermare l’ordine. L’installazione della vRack sul tuo account richiede alcuni minuti.

### Step 2: aggiungi i tuoi server alla vRack

Una volta attivata la vRack, clicca su `Network`{.action} nel menu a sinistra e poi su `Rete Privata vRack`{.action}.

Seleziona la tua vRack nella lista per visualizzare la lista dei servizi ammissibili. Clicca su ciascun server che vuoi aggiungere alla vRack e poi clicca sul pulsante `Aggiungi`{.action}.

![Choix du vRack](images/vrack_selection.png){.thumbnail}

### Step 3: configurazione delle interfacce di rete

Gli step successivi contengono le configurazioni delle distribuzioni/sistemi operativi più comunemente utilizzati. Il primo step consiste sempre nel [connetterti al tuo server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) in SSH o in sessione RDP (per Windows). Gli esempi che seguono presuppongono che tu sia connesso come utente con elevate autorizzazioni (Administratore/Sudo).

> [!primary]
>
Per le diverse distribuzioni, ti ricordiamo che la procedura da seguire per configurare la tua interfaccia di rete e i nomi di file possono essere stati modificati. In caso di difficoltà o dubbi, ti consigliamo di consultare i manuali e i database delle rispettive versioni del sistema operativo.
>
Ad esempio, i dettagli della configurazione qui sotto avranno l'indirizzo IP `192.168.0.0/16` (**Maschera di sottorete**: `255.255.0.0`).
>
Puoi utilizzare qualsiasi gamma di IP privati di tua scelta e qualsiasi indirizzo in questa gamma.
>

#### Identificazione dell'interfaccia vRack <a name="vrack-interface"></a>

I nomi delle interfacce di rete dei tuoi server non sono sempre gli stessi.

Per verificare la corretta interfaccia della vRack è necessario verificare la scheda `Interfacce di rete`{.action} del server nello [Spazio Cliente OVHcloud](/links/manager). Nella tabella in basso, indica l'indirizzo MAC, che è anche il **Nome** dell'interfaccia **Privata**.

![Interfaccia vRack](images/private_interface.png){.thumbnail}

Una volta effettuato l'accesso al server via SSH, è possibile visualizzare le interfacce di rete utilizzando il seguente comando:

```bash
ip a
```

Sulla linea che inizia con ```link ether```, verifica che questa interfaccia corrisponda all'interfaccia **Private** inserita nel tuo [Spazio Cliente OVHcloud](/links/manager). Utilizza questo nome di interfaccia per sostituire `NETWORK_INTERFACE` nelle configurazioni seguenti (esempio: `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

#### Configurazioni GNU/Linux

> [!tabs]
> **Debian (esclusa Debian 12)**
>>
>> In un editor di testo, apri il file di configurazione di rete all'indirizzo `/etc/network/interfaces.d` per modificarlo. Il file si chiama `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Aggiungere le righe seguenti alla configurazione esistente dopo la riga `version: 2`. Sostituisci `NETWORK_INTERFACE` e `IP_ADDRESS/PREFIX` con i tuoi valori.
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
>> Salva le modifiche nel file di configurazione e lascia l'editor.
>>
>> Riavvia il servizio di rete per applicare la configurazione:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
>> Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.
>>
> **Ubuntu & Debian 12**
>> Utilizza il editor di testo scelto per aprire il file di configurazione di rete all'interno `/etc/netplan/`per modificarlo. Il file si chiama `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Aggiungere le righe seguenti alla configurazione esistente dopo la riga `version: 2`. Sostituisci `NETWORK_INTERFACE` e `IP_ADDRESS/PREFIX` con i tuoi valori.
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
>>
>> > [!warning]
>> >
>> > È importante rispettare l'allineamento di ciascun elemento nei file `yaml`, come indicato nell'esempio di cui sopra. Non utilizzare il tasto di tabulazione per creare la tua spaziatura. Deve essere utilizzato solo il tasto spazio.
>> >
>>
>> Salva le modifiche nel file di configurazione e lascia l'editor.
>>
>> Applica la configurazione:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
>> Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.
>>
> **CentOS, AlmaLinux e RockyLinux**
>>
>> Dopo aver identificato l'interfaccia di rete privata, utilizzare l'editor di testo desiderato per creare il seguente file di configurazione di rete. Sostituisci `NETWORK_INTERFACE` con il tuo valore.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Aggiungi queste righe alla configurazione esistente, sostituisci `NETWORK_INTERFACE`, `IP_ADDRESS` e `NETMASK` con i tuoi valori:
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
>> Salva le modifiche nel file di configurazione e lascia l'editor.
>>
>> Riavvia il servizio di rete per applicare le modifiche:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
>> Con **CentOS 8, AlmaLinux e RockyLinux**, esegui questo comando:
>>
>> ```bash
>> systemctl restart NetworkManager.service
>> ```
>>
>> Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.
>>
> **Fedora**
>>
>> Una volta identificato il nome dell’interfaccia privata (come spiegato [qui](#vrack-interface)), esegui il comando seguente per verificare che sia connessa. Nel nostro esempio, la nostra interfaccia è chiamata `eno2`:
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
>> Se il `STATE` del `DEVICE` appare come `disconnected`, è necessario connetterlo prima di configurare l’IP.
>>
>> Quando si aggiunge una connessione **ethernet**, è necessario creare un profilo di configurazione da assegnare a un dispositivo.
>>
>> Eseguire il comando seguente, sostituendo `INTERFACE_NAME` e `CONNECTION_NAME` con i propri valori.
>>
>> Nel nostro esempio, abbiamo nominato il nostro profilo di configurazione `private-interface`.
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
>> - Verifica che l’interfaccia sia stata connessa correttamente:
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
>> A questo punto, nella cartella `/etc/NetworkManager/system-connections` verrà creato un nuovo file di configurazione denominato *xxxxxxxxxx.nmconnection*.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> A questo punto, è possibile modificare il file utilizzando il gestore `nmcli`, sostituendo `IP_ADDRESS`, `PREFIX` e `CONNECTION_NAME` con i propri valori.
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
>> - Modifica la configurazione da **auto** a **manual**:
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
>> - Rendi persistente la configurazione:
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
>> - Riavvia la tua rete con questo comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```

#### Configurazione Windows

Ad esempio, queste configurazioni utilizzeranno la classe di indirizzi IP di `192.168.0.0/16` (**Maschera di sottorete**: `255.255.0.0`).

Accedi al tuo server Windows tramite desktop remoto e vai nel **Pannello di configurazione**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Poi clicca su `Network and Internet`{.action}.

![Rete e Internet](images/windows_network_and_internet.png){.thumbnail}

Ouvrez `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}

Clicca su `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

Clicca con il tasto destro sull'interfaccia di rete secondaria e poi clicca su `Properties`{.action}.

Nel nostro esempio, `Ethernet 2` è l'interfaccia utilizzata per la vRack. ma è possibile che la scheda di rete vRack utilizzi un'interfaccia diversa. Utilizza un'interfaccia che non possiede l'indirizzo IP principale del server o che utilizza un indirizzo IP auto-attribuito.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Clicca su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

Clicca su **Utilizza questo indirizzo IP**. Inserisci qualsiasi indirizzo **IP** della tua gamma privata e la **maschera di sottorete** appropriata (`255.255.0.0` in questo esempio) nel campo corrispondente.

![Utilizza questo indirizzo IP](images/windows_use_following_ip_address.png){.thumbnail}

Clicca su `OK`{.action} per salvare le modifiche e poi riavvia il server per applicarle.

Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.

## Per saperne di più

[Creare due o più VLAN nella vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Contatta la nostra [Community di utenti](/links/community).