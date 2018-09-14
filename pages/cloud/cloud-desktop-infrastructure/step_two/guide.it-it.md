---
title: 'Step 2 - Creare template di desktop virtuali (pool)'
slug: creare-template-pool
excerpt: 'Scopri come creare template di pool con VMware Horizon 7.1'
section: Procedura
order: 2
---

**Ultimo aggiornamento: 13/09/2018**

## Obiettivo

Vediamo adesso come utilizzare [Cloud Desktop Infrastructure](https://www.ovh.es/cloud/cloud-desktop/infrastructure/){.external}.

**Questa guida ti mostra come avviare un <i>pool</i> automatico di macchine Linked Clones.**


## Prerequisiti

- Utilizzare un [Sistema Operativo compatibile con Horizon Agent](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external}
- Installare i software da avviare nel <i>pool</i>
- Configurare l’indirizzo della scheda di rete in DHCP
- Associare il template della macchina virtuale (VM) alla rete di destinazione del <i>pool</i> (portgroup o VLAN)
- Aver completato l’installazione di VMware Horizon 7.1
- Aver creato uno snapshot (con la macchina virtuale spenta) che servirà come punto di riferimento invariabile  
- Aver creato un template personalizzato (sysprep) 


## Procedura

### Importare un template di una macchina virtuale (VM)


È possibile creare o importare delle VM, completamente o parzialmente configurate sul Private Cloud associato alla tua infrastruttura VMware Horizon 7.1.

### Associare un template alla rete di destinazione del <i>pool</i>

Affinché i desktop virtuali vengano avviati correttamente e siano raggiungibili per gli utenti, è importante configurare il template delle VM sulla giusta rete virtuale. Questa rete viene comunicata via email dopo l'attivazione (sezione **DHCP Network**) ed è indicata come un `dvportgroup` sull’interfaccia vSphere.

Per associare il template della VM con la rete del <i>pool </i>segui i seguenti passaggi:

- clicca con il tasto destro sulla VM, poi scegli `Edit settings`{.action}
- scegli la periferica corrispondente all’interfaccia di rete
- nella sezione `Network Connection`{.action} seleziona il `Network label`{.action} indicato nell’email che riceverai dopo l'attivazione (sezione **DHCP Network**), come nell’immagine sottostante:

![DHCP Network](images/1200.png){.thumbnail}

Se una rete supplementare, isolata dal resto, si rivela necessaria, è possibile avviare un nuovo punto di accesso con una rete dedicata.


### Installare VMware Horizon 7.1

> [!primary]
>
> I file di installazione di Horizon sono disponibili alla pagina <https://files.horizonaas.com/>
> 

Effettua un doppio click sul file del programma di installazione di Horizon Agent, poi segui il processo di installazione:

- accetta i termini di utilizzo VMware
- seleziona `Install VMware Horizon Agent in ‘desktop mode’`{.action}
- scegli il protocollo IPv4
- seleziona le opzioni di installazione (quelle predefinite sono un buon punto di partenza)
- non attivare l’RDP quando ti viene richiesto
- accetta o modifica la cartella di destinazione
- completa l'installazione.

Se vuoi ottenere maggiori dettagli sull’installazione dell’agent Horizon 7.1 su una macchina virtuale:[ installare Horizon Agent su una macchina virtuale](https://docs.vmware.com/en/VMware-Horizon-7/index.html){.external}


### Creare lo snapshot di riferimento

Al fine di potersi basare su uno stato immutabile della macchina virtuale che funzioni come template per il <i>pool</i>, VMware Horizon utilizza uno snapshot. Le operazioni che si potranno realizzare in seguito sul template non avranno alcun impatto diretto sul contenuto dei desktop virtuali.

- Sull’interfaccia del vSphere client (di cui trovi qui la versione Web), seleziona il template della VM e successivamente il menu `Actions`{.action}. Infine, clicca su `Take snapshot...`{.action}:

![Créer un snapshot](images/1201.png){.thumbnail}

- Assegna un titolo al tuo snapshot (in questo caso, un numero di versione) e una descrizione:

![Titre de snapshot](images/1202.png){.thumbnail}

Adesso che hai creato il template, scopri come [creare un <i>pool</i>](https://docs.ovh.it/cloud-desktop-infrastructure/creare-un-pool/).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.