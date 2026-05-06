---
title: "Creare più VLAN nella vRack su un server dedicato"
excerpt: "Crea e gestisci più VLAN nella tua vRack OVHcloud per segmentare il traffico di rete tra server dedicati."
updated: 2026-02-20
---

## Obiettivo

La [configurazione standard della vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server) consente di creare soltanto una VLAN. Questo significa che è possibile utilizzare ogni indirizzo IP un'unica volta. Tuttavia, con la versione 2.0 della vRack si possono creare fino a 4.000 reti locali virtuali nella stessa vRack. In questo modo, è possibile utilizzare ciascun indirizzo IP fino a 4.000 volte.

**Questa guida ti mostra come creare due o più VLAN nella stessa vRack.**

## Prerequisiti

* Un servizio [vRack](/links/network/vrack) attivo nel tuo account
* Due o più [server compatibili con la vRack](/links/bare-metal/bare-metal)
* Accesso amministrativo (sudo) al server tramite SSH (Linux) o RDP (Windows)
* Accesso allo [Spazio Cliente OVHcloud](/links/manager)
* Il range di indirizzi IP privati scelto
* Aver completato la [guida di configurazione della vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about).
>
> Per maggiori informazioni, consulta la nostra [pagina di confronto](/links/bare-metal/eco-compare).

## Procedura

### Linux

> [!primary]
>
> A titolo di esempio, utilizzeremo **eno2** come interfaccia di rete, **10** e **11** come tag VLAN e **192.168.0.0/16** e **10.0.0.0/16** come range di indirizzi IP privati.
>
> È necessario adattare tutti i comandi in base alla distribuzione utilizzata. In caso di dubbi, consulta la documentazione ufficiale della tua distribuzione.
>

> [!tabs]
> **Debian 11**
>>
>> Per prima cosa, stabilisci una connessione SSH al tuo server ed esegui i seguenti comandi dalla riga di comando per installare il pacchetto VLAN sul tuo server:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Successivamente, carica il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Esegui il seguente comando per assicurarti che i moduli siano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Successivamente, recupera i nomi delle tue interfacce e identifica l'interfaccia privata:
>>
>> ```sh
>> ip a
>> ```
>>
>> Successivamente, crea un tag VLAN. Il tag funge da identificatore, permettendoti di distinguere tra diverse VLAN:
>>
>> ```sh
>> sudo ip link add link <parent-interface> name <vlan-identifier> type vlan id <ID>
>> ```
>>
>> **In questo esempio:**
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> Utilizza lo stesso comando per ogni tag VLAN che desideri aggiungere.
>>
>> Successivamente, dichiara il range di indirizzi IP privati all'interno della vRack e taggalo con l'identificatore utilizzando il seguente comando:
>>
>> ```sh
>> sudo ip addr add 192.168.0.10/16 dev eno2.10
>> ```
>>
>> Modifica la configurazione dell'interfaccia di rete per incorporare il tag VLAN. Apri il file di configurazione dell'interfaccia di rete e aggiungi le seguenti voci:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eno2.10
>> iface eno2.10 inet static
>> address 192.168.0.10
>> netmask 255.255.0.0
>> broadcast 192.168.255.255
>> vlan-raw-device eno2
>> ```
>>
>> Per più VLAN configurate, la tua configurazione di rete dovrebbe apparire così:
>>
>> ![debian VLAN](images/multiple_vlan_debian.png){.thumbnail}
>>
> **Ubuntu e Debian 12+**
>>
>> Questi comandi sono stati eseguiti su Ubuntu 24.04 (Noble Numbat).
>>
>> Per prima cosa, stabilisci una connessione SSH al tuo server ed esegui i seguenti comandi dalla riga di comando per installare il pacchetto VLAN sul tuo server:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> Successivamente, carica il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Esegui il seguente comando per assicurarti che i moduli siano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Crea o modifica il file di configurazione `cloud.cfg` per impedire modifiche automatiche alla configurazione di rete:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Aggiungi la seguente riga:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Recupera il nome dell'interfaccia di rete e il suo indirizzo MAC:
>>
>> ```sh
>> ip a
>> ```
>>
>> Qui l'interfaccia che vogliamo configurare è `eno2` con indirizzo MAC: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-01.png){.thumbnail}
>>
>> Aggiungi la configurazione di rete per questa interfaccia di rete e le informazioni VLAN nel seguente file, assicurandoti che sia posizionata direttamente sotto la riga `version: 2`. Sostituisci i valori con i tuoi:
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
>>             match:
>>                 macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                      # VLAN ID
>>             link: eno2                  # Nome dell'interfaccia
>>             addresses:
>>             - 192.168.0.10/16
>>     ethernets:
>>         eno1:
>>             ...
>>             ...
>> ```
>>
>> Per più VLAN configurate, la tua configurazione di rete dovrebbe apparire così:
>>
>> ![ubuntu VLAN](images/multiple_vlan_ubuntu.png){.thumbnail}
>>
>> Salva e chiudi il file, quindi esegui il seguente comando:
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> Utilizza il seguente comando per assicurarti che la configurazione sia stata applicata correttamente:
>>
>> ```sh
>> ip a
>> ```
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-02.png){.thumbnail}
>>
> **AlmaLinux e Rocky Linux (8/9)**
>>
>> Prima di iniziare, stabilisci una connessione SSH al tuo server ed esegui il seguente comando per caricare il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Successivamente, esegui il seguente comando per assicurarti che i moduli siano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Recupera i nomi delle interfacce e identifica l'interfaccia privata:
>>
>> ```sh
>> ip a
>> ```
>>
>> Successivamente, crea un file di configurazione per la sotto-interfaccia VLAN nel file di configurazione di rete principale.
>>
>> In questo esempio, il file è denominato `ifcfg-eno2.10`, dove eno2 si riferisce all'interfaccia di rete privata e `10` all'ID VLAN.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eno2.10
>> ```
>>
>> Aggiungi le seguenti voci al file di configurazione, assicurandoti di sostituire i valori con i tuoi:
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.10
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> Salva e chiudi il file.
>>
>> Per più VLAN configurate, dovresti creare un nuovo file per ogni identificatore VLAN:
>>
>> ![alma VLAN](images/multiple_vlan_alma.png){.thumbnail}
>>
>> Riavvia l'interfaccia di rete:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux e Rocky Linux (10)**
>>
>> La configurazione seguente è basata su Fedora 43.
>>
>> Prima di iniziare, stabilisci una connessione SSH al tuo server ed esegui il seguente comando per caricare il modulo kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Per verificare che il modulo sia caricato:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Esegui il seguente comando per assicurarti che i moduli siano caricati permanentemente all'avvio:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Per ottenere il nome dell'interfaccia di rete privata:
>>
>> ```sh
>> ip a
>> ```
>>
>> In questo esempio, l'interfaccia è chiamata `eno2`. Dobbiamo creare una sotto-interfaccia VLAN prima di assegnare un indirizzo IP privato ad essa.
>>
>> Utilizza il seguente comando per creare l'interfaccia VLAN:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Sostituisci `vlan-name` con il nome della sotto-interfaccia VLAN, `parent-interface` con il nome dell'interfaccia privata e `vlan-id` con l'ID VLAN.
>>
>> **In questo esempio:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> Assegna un indirizzo IP privato alla sotto-interfaccia VLAN:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **In questo esempio:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.10/16 ipv4.method manual
>> ```
>>
>> Successivamente, attiva la sotto-interfaccia VLAN:
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
>> Utilizza gli stessi comandi per ogni interfaccia VLAN che desideri aggiungere.
>>
>> Una volta completato, viene creato un file di configurazione per l'interfaccia VLAN. Questo file si trova in `/etc/NetworkManager/system-connections/` e segue il formato di denominazione `vlan-name.nmconnection`.
>>
>> Per più VLAN, verranno creati più file di configurazione:
>>
>> - Panoramica:
>>
>> ![config](images/multiple_vlan_fedora.png){.thumbnail}
>>
>> ![config](images/multiple_vlan_fedora_1.png){.thumbnail}
>>

### Windows

Connettiti al tuo server tramite desktop remoto e apri l'applicazione Server Manager. Seleziona `Server locale`{.action} e clicca sul link `Disabilitato`{.action} accanto a **Gruppo NIC**:

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

Clicca con il tasto destro sull'interfaccia di rete e seleziona `Aggiungi al nuovo team`{.action}.

![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}

Nella nuova finestra, crea un nuovo team digitando il nome del team nel campo **Nome team**. Al termine dell'operazione clicca su `OK`{.action} per confermare.

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

Poi specifica il tag della VLAN. Nel pannello **SCHEDE E INTERFACE** della schermata **Gruppo NIC**, vai alla scheda `Interface gruppo`{.action} e clicca con il tasto destro del mouse sull'interfaccia che hai appena aggiunto al nuovo team e infine clicca su `Proprietà`{.action}. A questo punto, seleziona `VLAN specifica`{.action} e inserisci il tag:

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Adesso non resta che configurare l'indirizzo IP della VLAN. Clicca sul pulsante `Start`{.action} e poi su `Pannello di controllo`{.action}.

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Poi clicca su `Rete e Internet`{.action}.

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Clicca su `Centro connessioni di rete e condivisione`{.action}.

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Poi clicca su `Modifica impostazioni scheda`{.action}.

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

Di seguito, clicca con il tasto destro sull'interfaccia VLAN e poi clicca su `Proprietà`{.action}.

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Nel nostro esempio, `Ethernet 2` è l'interfaccia utilizzata per la vRack. ma è possibile che la scheda di rete vRack utilizzi un'interfaccia diversa. Utilizza un'interfaccia che non possiede l'indirizzo IP principale del server o che utilizza un indirizzo IP auto-attribuito.

Fai doppio click su `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

Clicca su `Utilizza il seguente indirizzo IP`{.action}: in **Indirizzo IP** inserisci un indirizzo IP del tuo intervallo e in **maschera di sottorete** inserisci 255.255.0.0

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Infine clicca sul pulsante `OK`{.action} per salvare le modifiche e concludi l'operazione riavviando il server.

## Per saperne di più

[Configurare due o più server dedicati nella vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

Contatta la nostra [Community di utenti](/links/community).