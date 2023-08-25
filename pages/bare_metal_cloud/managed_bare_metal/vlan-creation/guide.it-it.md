---
title: Creazione di VLAN
excerpt: Come creare VLAN (vRack)
updated: 2020-11-18
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>


## Obiettivo

Su un'infrastruttura Managed Bare Metal, disporrete di 11 VLAN fornite con la vRack.

**Questa guida ti mostra la creazione di VLAN aggiuntive**

## Prerequisiti

- Avere accesso al client vSphere Web (HTML5)

## Procedura

### Crea VLAN

Nelle offerte Managed Bare Metal, disporrete di due switch virtuali distribuiti (vDS). 

Questi *vDS* comportano diverse *porteGroup*, ognuna delle quali è utile.

Il primo vDS dispone di un solo tipo di *portaGroup*, il VMnetwork che permette di comunicare verso Internet.

Il secondo vDS dispone anche di un solo tipo di *portaGroup*, delle VLAN che permettono di isolare comunicazioni private all'interno del Managed Bare Metal e tra i diversi servizi OVHcloud compatibili con la vRack (server dedicato, Public Cloud...). 

Su questo switch, vengono create 11 VLAN (da VLAN10 a VLAN20). Dando il diritto di `amministratore` sull' `Accesso al V(x)LAN` nella gestione [degli utenti del tuo Spazio Cliente](/pages/bare_metal_cloud/managed_bare_metal/manager-ovhcloud#utenti), potrai creare VLAN supplementari.

Per prima cosa accedi alla vista di `network` del tuo client vSphere. Implementa la cartella **vrack**, clicca con il tasto destro sul **dVS** che termina con *-vrack* e infine clicca su `New Distributed Port Group `{.action}.

![vRack](images/07network.png){.thumbnail}

![New Distributed Port Group](images/08network1.png){.thumbnail}

Il prossimo step è nominare il tuo **PortGroup**:

![nominare portgroup](images/09network2.png){.thumbnail}

Configura i parametri consigliati da OVHcloud:

- **Port Binding**: Statistiche (Prenotazione e assegnazione della porta a una macchina virtuale)
- **Port allocation**: Elastic (Permette di ampliare a caldo il numero di porte)
- **Number of ports**: 24
- **VLAN type**: VLAN (Gli altri sono [PVLAN](https://kb.vmware.com/s/article/1010691){.external} e Trunk)
- **VLAN ID**: 21 (L'ID può essere configurato da 1 a 4096)
- Seleziona l'opzione *Customize default policies configuration*.

![configurazione portgroup](images/10network3.png){.thumbnail}

Hai 3 parametri di sicurezza che possono essere attivati in base alle tue necessità: 

- *Promiscuous mode* (Elimina qualsiasi filtro di ricezione che l'adattatore virtuale può effettuare affinché il sistema operativo invitato riceva tutto il traffico osservato sulla rete)
- *MAC address changes* (Incide sul traffico che una macchina virtuale riceve). Quando l'opzione è definita su **Accept**, ESXi accetta le richieste di modifica dell'indirizzo MAC effettivo in un indirizzo diverso dall'indirizzo MAC iniziale.)
- *Forged transmits* (Influisce sul traffico trasmesso a partire da una macchina virtuale. Quando l'opzione è definita su **Accept**, ESXi confronta gli indirizzi MAC sorgente ed effettivo).

> [!primary]
>
> L'utilizzo più frequente di questi 3 parametri è il CARP, utilizzato in particolare su **pfSense**.
> 

![parametri di sicurezza](images/11network4.png){.thumbnail}

Lasciamo il [traffico](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-CF01515C-8525-4424-92B5-A982489BACE2.html){.external} disattivato

![lisciatura del traffico](images/12network5.png){.thumbnail}

A livello di Load Balancing, seleziona *Route Based on IP hash*, che è il metodo migliore in termini di ridondanza e distribuzione.

> [!warning]
>
> Attenzione: a livello della configurazione dell'ordine di trasferimento, è necessario inserire la connessione `lag1` in *Active* (connessione tra rete virtuale e rete fisica), altrimenti non sarà possibile alcuna comunicazione tra gli host.
>

![load balancing](images/13network6.png){.thumbnail}

Il `Netflow` è disattivato (report di attività sui flussi di traffico)

![netflow](images/14network7.png){.thumbnail}

Lasciate il valore `Block All Ports` a "No".

![finalizzazione portgroup](images/15network9.png){.thumbnail}

Riceverai un riepilogo delle modifiche apportate. Clicca su `Finish`{.action} per confermare la creazione

![finalizzazione portgroup](images/16network10.png){.thumbnail}

In questa sezione si rileva che la **VLAN21** è disponibile e funzionante.

![vlan creata](images/17network11.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
