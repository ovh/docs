---
title: "Utilizza Hyper-V con indirizzi IP Failover su una vRack"
excerpt: "Scopri come configurare una macchina virtuale con IP Failover e Hyper-V su una vRack"
slug: ipfo-vrack-hyperv
section: vRack 
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 26/04/2021**

## Obiettivo

Segui il processo di installazione di Hyper-V, l'associazione di uno switch virtuale e la configurazione di una macchina virtuale per funzionare con gli IP Failover su una vRack.

**Questa guida ti mostra come configurare una macchina virtuale con IP Failover e Hyper-V su una vRack.**

## Prerequisiti

- Un server dedicato (compatibile con [vRack](https://www.ovh.it/soluzioni/vrack/)) su cui Windows Server è installato.
- Un'immagine ISO per il sistema operativo che verrà installato sulla tua macchina virtuale (CentOS 7 sarà utilizzato come esempio in questa guida).
- Una vRack consegnata sul tuo account OVHcloud.
- Blocco IP di 4 o più indirizzi IP
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

Questa guida ti mostra come utilizzare Windows Server, connetterti tramite desktop remoto e aver già assegnato il tuo server dedicato e il tuo blocco IP a una vRack. Per maggiori informazioni sugli step da 1 a 4, consulta la nostra guida: [Configurare diversi server dedicati nella vRack](../configurare-server-dedicati-vrack/).

### Installazione Hyper-V

Il primo step consiste nell'installare Hyper-V.

Nell'interfaccia di gestione dei server, clicca su `Add roles and features`{.action}

![Installing hyper-v](images/add-roles-features.png){.thumbnail}

Nell'assistente, clicca su `Next`{.action} per passare alla pagina successiva.

![Installing hyper-v](images/add-roles-features-2.png){.thumbnail}

Verifica che l'opzione "Role-Based or feature-based installazione" sia selezionata e clicca su `Next`{.action}.

![Installing hyper-v](images/add-roles-features-3.png){.thumbnail}

Verifica che l'opzione "Select a server from the server pool" sia selezionata, così come il server su cui lavori nella lista qui sotto. Clicca su `Next`{.action}.

![Installing hyper-v](images/add-roles-features-4.png){.thumbnail}

Nella lista delle role, seleziona "Hyper-V" e clicca su `Next`{.action}.

![Installing hyper-v](images/add-roles-features-5.png){.thumbnail}

Nella pagina successiva ("Features") clicca su `Next`{.action}.

![Installing hyper-v](images/add-roles-features-9.png){.thumbnail}

Identifica la connessione di rete del tuo server che vuoi utilizzare per lo switch virtuale.

Per identificarlo, apri un Command Prompt o PowerShell ed esegui il comando `ipconfig /all`.

Nel nostro esempio, `Ethernet 2` è l'interfaccia utilizzata per la vRack. ma è possibile che la scheda di rete vRack utilizzi un'interfaccia diversa. Utilizza un'interfaccia che non possiede l'indirizzo IP principale del server o che utilizza un indirizzo IP auto-attribuito (169.254.x.x).

![check-interface](images/ipconfig.png){.thumbnail}

Una volta disponibili, torna alla finestra `Add Roles and Features Wizard`{.action} e clicca su `Next`{.action}.

![Installing hyper-v](images/add-roles-features-6.png){.thumbnail}

Seleziona l'adattatore per la vRack che hai identificato nel Command Prompt o PowerShell e clicca su `Next`{.action}.

![Installing hyper-v](images/add-roles-features-7.png){.thumbnail}

Le due pagine successive ti permettono di scegliere le opzioni di migrazione e di storage. Puoi configurarli come preferisci.

Una volta raggiunta la pagina di conferma, seleziona la voce "Restart the destination server automatically if required", clicca su `Yes`{.action} e poi su `Install`{.action}.

![Installing hyper-v](images/add-roles-features-8.png){.thumbnail}

A questo punto Hyper-V si installerà e il server dovrebbe riavviare.

### Creare e configurare una macchina virtuale

Una volta riavviato il server, accedi e apri l'Hyper-V Manager.

Seleziona il tuo server a sinistra, clicca su `New`{.action} e seleziona "Virtual Machine".

![creare-vm](images/create-vm.png){.thumbnail}

In "New Virtual Machine Wizard", configura la macchina virtuale come vuoi. Quando accedi allo step "Configura Networking", seleziona lo switch virtuale. Una volta selezionato il Clicca su `Next`{.action} per continuare.

![creare-vm](images/create-vm-2.png){.thumbnail}

Una volta raggiunta la sezione "Installation Opzioni", aggiungi l'immagine ISO per il sistema operativo che stai per installare. Clicca su `Next`{.action} per continuare

![creare-vm](images/create-vm-3.png){.thumbnail}

Quando accedi alla pagina "Summary", verifica che le impostazioni dello switch virtuale e del sistema operativo siano corrette, poi clicca su `Finish`{.action}.

![creare-vm](images/create-vm-4.png){.thumbnail}

### Installa il Sistema Operativo e configura l'IP

Avvia la macchina virtuale. L'installazione del sistema operativo deve iniziare automaticamente. In caso contrario, visualizzi questo messaggio di errore:

> "The unsigned image's hash is not allowed (DB)"

In questo caso, disattiva il "Secure Boot".

Spenga la macchina virtuale e clicca su `Settings`{.action}.

![disable-secure-boot](images/disable-secure-boot.png){.thumbnail}

Clicca su `Security`{.action}, seleziona "Enable Secure Boot" e poi clicca su `Apply`{.action}.

![disable-secure-boot](images/disable-secure-boot-2.png){.thumbnail}

Riavvia la macchina virtuale una volta terminata.

Configura il sistema operativo come preferisci.

Per i parametri di rete, sarà necessario definire un indirizzo IP statico.

Nel nostro esempio, il blocco IP assegnato alla vRack è 192.xxx.xxx.80/29. Ecco la ripartizione del blocco:

<br>
192.xxx.xxx.80 - Indirizzo di rete (riservato - non utilizzabile)<br>
192.xxx.xxx.81 - Primo indirizzo IP utilizzabile<br>
192.xxx.xxx.82<br>
192.xxx.xxx.83<br>
192.xxx.xxx.84<br>
192.xxx.xxx.85 - Ultimo indirizzo IP utilizzabile<br>
192.xxx.xxx.86 - Gateway predefinito (riservato)<br>
192.xxx.xxx.87 - Indirizzo di broadcast (riservato)<br>
<br>

Nel nostro esempio utilizzeremo 192.xxx.xxx.81. La configurazione deve presentarsi come segue:

<br>
Address: 192.168.xxx.81<br>
Subnet Mask: 255.255.255.248<br>
Gateway: 192.xxx.xxx.86<br>
DNS: 213.186.33.99 (È possibile aggiungere un altro DNS se lo desideri)<br>
<br>

Una volta installato il sistema operativo Dovrebbe già essere connesso.

L'esempio che segue mostra come visualizzare il file `ifcfg-eth0`.

![configurato](images/configured.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
