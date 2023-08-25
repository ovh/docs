---
title: Creare uno Snapshot
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creer_un_snapshot'
excerpt: Ripristina lo stato precedente delle tue VM tramite gli Snapshot
updated: 2020-11-18
---


## Obiettivo 

È possibile effettuare lo Snapshot di una macchina virtuale. Dopodiché, è possibile ripristinare tutte le macchine virtuali sullo Snapshot più recente o eliminare lo Snapshot.

**Questa guida ti mostra la procedura per effettuare uno Snapshot.**

## Prerequisiti

- Disporre di un servizio [Managed Bare Metal](https://www.ovhcloud.com/it/managed-bare-metal/){.external} attivo.
- Essere connesso al client vSphere HTML

## Procedura

Gli Snapshot sono utili quando è necessario tornare più volte allo stesso stato, senza creare molteplici macchine virtuali. Con gli Snapshot, è possibile creare posizioni di ripristino. 

Inoltre è possibile preservare lo stato di base di una VM prima di farla migrare verso un altro tipo di funzionamento. 

Nonostante gli Snapshot forniscano un’immagine “istantanea” del disco, ti consigliamo di rimuovere regolarmente gli Snapshot presenti. Infatti, se disponi di un gran numero di Snapshot, questi occuperanno molto spazio su disco, penalizzando la VM in termini di performance.

> [!primary]
> 
> Ti sconsigliamo di utilizzare gli Snapshot come metodo di salvataggio della macchina virtuale.
> 

Lo Snapshot  ti permette di catturare all’istante lo stato della tua VM. Questo Snapshot include (in base alle tue scelte):

- Lo stato di tutti i dischi della macchina virtuale.
- Il contenuto della memoria della macchina virtuale.

> [!warning]
> 
> Non è possibile modificare la dimensione di un disco nel momento in cui si effettua uno Snapshot su una VM.
> 

### Effettua uno Snapshot

Fai clic con il tasto destro sulla tua VM, seleziona `Snapshots e infine `Effettua uno Snapshot`{.action}:

![creare snapshot](images/snapshot01.png){.thumbnail}

Ora è necessario indicare il nome che intendi attribuire a questo Snapshot, la sua descrizione, e se vuoi che anche la memoria della VM sia inclusa nello Snapshot.

Hai la possibilità di effettuare uno Snapshot con o senza la RAM utilizzata dalla VM. Se vuoi integrare la RAM allo Snapshot, i tempi di esecuzione della procedura si allungheranno, ma questo ti permetterà di non dover effettuare un reboot durante il ripristino dello Snapshot. 

In caso contrario, dato che la RAM non è salvata, l’operazione sarà più rapida, ma sarà necessario effettuare un reboot della VM in caso di ripristino. 

![configurare snapshot](images/snapshot02.png){.thumbnail}

### Gestisci gli Snapshot

Tutti gli Snapshot di una VM sono disponibili nel Gestore di Snapshot. Per farlo, clicca con il tasto destro sulla VM, seleziona`Snapshot`{.action} e infine `Gestire gli Snapshot`{.action}:

![gestire snapshot](images/snapshot03.png){.thumbnail}

### Elimina uno Snapshot

Nel gestore degli Snapshot, seleziona lo Snapshot da eliminare e clicca su `Elimina`{.action}.

È possibile eliminare tutti gli Snapshot della VM in una sola azione, cliccando su `Elimina tutto`{.action}.

### Ripristina uno Snapshot

Nel gestore degli Snapshot, seleziona lo Snapshot da ripristinare e clicca su `Ripristina`{.action}

### Consolida gli Snapshot

La presenza di dischi ridondanti può compromettere le performance della macchine virtuali.

Il consolidamento degli Snapshot è utile quando i dischi degli Snapshot non riescono a comprimersi dopo un’azione di rimozione. Dopo il consolidamento, i dischi ridondanti vengono rimossi e questo migliora le performance delle macchine virtuali e consente di risparmiare spazio di storage.

Per effettuare un consolidamento, clicca con il tasto destro sulla VM, seleziona `Snapshot` e infine clicca su `Consolida`{.action}

![consolidate snapshots](images/consolidate.png){.thumbnail}

Per maggiori informazioni, consulta [la documentazione di VMware](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-2F4A6D8B-33FF-4C6B-9B02-C984D151F0D5.html){.external}.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
