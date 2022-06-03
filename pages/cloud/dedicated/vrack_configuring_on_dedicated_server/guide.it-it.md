---
title: 'Configurare due o più server dedicati nella vRack'
slug: configurare-server-dedicati-vrack
excerpt: 'Scopri come configurare due o più server dedicati nella vRack'
section: vRack
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 02/05/2022**

## Obiettivo

La vRack (rack virtuale) OVHcloud permette di unire virtualmente diversi server (indipendentemente dal loro numero e dalla loro localizzazione fisica nei nostri datacenter) e di connetterli a uno switch virtuale all'interno della stessa rete privata. In questo modo i server possono comunicare in modo privato e sicuro tra loro, all'interno di una VLAN dedicata.

**Questa guida ti mostra come configurare la vRack su diversi server dedicati.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prerequisiti

- Un servizio [vRack](https://www.ovh.it/soluzioni/vrack/) attivato nel tuo account
- Diversi [server dedicati](https://www.ovhcloud.com/it/bare-metal/) (compatibili con la vRack)
- Avere accesso amministratore (root) al server via SSH o RDP
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Aver selezionato una gamma di indirizzi IP privati

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

### Step 1: ordina la vRack

Accedi alla sezione `Bare Metal Cloud`{.action} nel tuo Spazio Cliente OVHcloud e clicca sul pulsante `Ordina`{.action}. Nel menu, clicca sull’opzione `vRack`{.action}.

![Ordina la vRack](images/orderingvrack.png){.thumbnail}

Verrai reindirizzato verso un'altra pagina per confermare l'ordine. L'operazione richiederà alcuni minuti.

### Step 2: aggiungi i tuoi server alla vRack

Una volta attivata la vRack, accedi alla sezione `Bare Metal Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Network`{.action} e apri il menu `vRack`{.action}.

Seleziona la tua vRack nella lista per visualizzare la lista dei servizi ammissibili. Clicca su ciascun server che vuoi aggiungere alla vRack e poi clicca sul pulsante `Aggiungi`{.action}.

![Choix du vRack](images/vrack_selection.png){.thumbnail}

### Step 3: configurazione delle interfacce di rete

Gli step successivi contengono le configurazioni delle distribuzioni/sistemi operativi più comunemente utilizzati. Il primo step consiste sempre nell'[connetterti al tuo server](https://docs.ovh.com/it/dedicated/iniziare-a-utilizzare-server-dedicato/) in SSH o in sessione RDP (per Windows). Gli esempi che seguono presuppongono che tu sia connesso come utente con elevate autorizzazioni (Administratore/Sudo).

> [!primary]
>
Per le diverse distribuzioni, ti ricordiamo che la procedura da seguire per configurare la tua interfaccia di rete e i nomi di file possono essere stati modificati. In caso di difficoltà o dubbi, ti consigliamo di consultare i manuali e i database delle rispettive versioni del sistema operativo.
>
Ad esempio, i dettagli della configurazione qui sotto avranno l'indirizzo IP `192.168.0.0/16` (**Maschera di sottorete**: `255.255.0.0`).
>
Puoi utilizzare qualsiasi gamma di IP privati di tua scelta e qualsiasi indirizzo in questa gamma.
>

#### Configurazioni GNU/Linux

I nomi delle interfacce di rete dei tuoi server non sono sempre gli stessi. Nei seguenti esempi, sostituisci NETWORK_INTERFACE con il nome di interfaccia appropriato.

Per verificare la corretta interfaccia della vRack è necessario verificare la scheda `Interfacce di rete`{.action} del server nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Nella tabella in basso, indica l'indirizzo MAC, che è anche il **Nome** dell'interfaccia **Privata**.

![Interfaccia vRack](images/private_interface.png){.thumbnail}

Una volta effettuato l'accesso al server via SSH, è possibile visualizzare le interfacce di rete utilizzando il seguente comando:

```bash
ip a
```

Sulla linea che inizia con ```link ether```, verifica che questa interfaccia corrisponda all'interfaccia **Private** inserita nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Utilizza questo nome di interfaccia per sostituire `NETWORK_INTERFACE` nelle configurazioni seguenti (esempio: `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

##### **Debian**

In un editor di testo, apri il file di configurazione di rete all'indirizzo `/etc/network/interfaces.d` per modificarlo. Il file si chiama `50-cloud-init`.

```bash
editor /etc/network/interfaces.d/50-cloud-init
```

Aggiungi queste righe:

```console
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE inet static
address 192.168.0.1
netmask 255.255.0.0
```

Salva le modifiche nel file di configurazione e lascia l'editor.

Riavvia il servizio di rete per applicare la configurazione:

```bash
systemctl restart networking
```

Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.

##### **Ubuntu**

Utilizza il editor di testo scelto per aprire il file di configurazione di rete all'interno `/etc/netplan/`per modificarlo. Il file si chiama `50-cloud-init.yaml`.

```bash
editor /etc/netplan/50-cloud-init.yaml
```

Aggiungi la configurazione IP alla configurazione esistente dopo la linea `ethernet`:

```yaml
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: no
            addresses:
              - 192.168.0.1/16
```

> [!warning]
>
> È importante rispettare l'allineamento di ciascun elemento nei file `yaml`, come indicato nell'esempio di cui sopra. Non utilizzare il tasto di tabulazione per creare la tua spaziatura. Deve essere utilizzato solo il tasto spazio.
>

Salva le modifiche nel file di configurazione e lascia l'editor.

Applica la configurazione:

```bash
netplan apply
```

Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.

##### **CentOS**

Con l'editor di testo scelto, apri il file `/etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE`.

```bash
editor /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
```

Aggiungi queste linee:

```console
DEVICE=NETWORK_INTERFACE
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Salva le modifiche nel file di configurazione e lascia l'editor.

Riavvia il servizio di rete per applicare le modifiche:

```bash
systemctl restart networking
```

Con **CentOS 8**, esegui questo comando:

```bash
systemctl restart NetworkManager.service
```

Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.

#### Configurazione Windows

Ad esempio, queste configurazioni utilizzeranno la classe di indirizzi IP di `192.168.0.0/16` (**Maschera di sottorete**: `255.255.0.0`).

Accedi al tuo server Windows tramite desktop remoto e vai nel **Pannello di configurazione**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Poi clicca su `Rete e Internet`{.action}.

![Rete e Internet](images/windows_network_and_internet.png){.thumbnail}

Ouvrez `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}

Clicca su `Modifica impostazioni scheda`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

Clicca con il tasto destro sull'interfaccia di rete secondaria e poi clicca su `Proprietà`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Clicca su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

Clicca su **Utilizza questo indirizzo IP**. Inserisci qualsiasi indirizzo **IP** della tua gamma privata e la **maschera di sottorete** appropriata (`255.255.0.0` in questo esempio) nel campo corrispondente.

![Utilizza questo indirizzo IP](images/windows_use_following_ip_address.png){.thumbnail}

Clicca su `OK`{.action} per salvare le modifiche e poi riavvia il server per applicarle.

Ripeti questa procedura per gli altri server e attribuisci a ciascuno di essi un indirizzo IP non utilizzato a partire dalla tua gamma privata. Da questo momento, i tuoi server potranno comunicare tra loro sulla rete privata.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.