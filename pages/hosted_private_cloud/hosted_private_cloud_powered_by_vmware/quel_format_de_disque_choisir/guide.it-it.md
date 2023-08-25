---
title: Scegliere il formato del disco
excerpt: Come scegliere tra i diversi tipi di dischi VMware
legacy_guide_number: '1441955'
updated: 2022-02-02
---


## Obiettivo

VMware propone 3 diverse tipologie di disco per le macchine virtuali.

**Questa guida ti mostra le differenze tra i formati disponibili.**

## Procedura

### Thin provisioning

Il *Thin provisioning* è un tipo di disco che utilizza esclusivamente lo spazio necessario sul datastore e che aumenta in base alle necessità.

In questo modo è possibile assegnare un disco da 1 TB che sarà riconosciuto come 1 TB dal sistema operativo della VM ma occuperà sul datastore solo lo spazio utilizzato dal *guest OS* (ad esempio 20 GB). 

Questo significa che a un datastore da 1,2 TB può essere assegnata una capacità di 50 TB (50 VM da 1 TB) che occuperà solo 1 TB (nel nostro esempio, 20 GB occupati/VM).

> [!warning]
>
> In questa situazione è importante tenere sotto controllo le scritture delle macchine virtuali, per non aumentare in modo significativo lo spazio occupato dai diversi dischi delle VM e riempire così il datastore.
> Un datastore pieno impedirebbe infatti nuove operazioni di scrittura e potrebbe potenzialmente causare l’arresto delle VM.
>

Lo spazio occupato non può essere liberato. 

Ad esempio, se si occupano 40 GB su un <i>thin disk </i>da 100 GB e si cancellano 20 GB di dati nella VM, lo spazio occupato sul datastore continuerà a essere di 40 GB e lo spazio assegnato di 100 GB.

### Thick provisioning Eager zero

Il *Thick provisioning Eager zero* è un tipo di disco che occupa tutto lo spazio assegnato sul datastore. 

Una VM con 100 GB assegnati in *thick* occuperà 100 GB di spazio sul datastore.

Il disco della VM viene riempito di zeri al momento della creazione sul volume VMFS.

### Thick provisioning Lazy zero

Il *Thick provisioning Lazy zero* è un tipo di disco che occupa tutto lo spazio assegnato sul datastore.

Una VM con 100 GB assegnati in *thick* occuperà 100 GB di spazio sul datastore.

Lo spazio assegnato è riservato al disco della VM, ma gli zero vengono scritti nel momento in cui la VM ha bisogno dello spazio disco.

### Esempio

Ecco un esempio di riepilogo per una VM da 100 GB con *guest OS* da 40 GB:

|Tipo di disco|Spazio assegnato|Block zeroed|Spazio occupato|
|---|---|---|---|
|Eager Zero|Alla creazione della VM|Alla creazione della VM|100 GB|
|Lazy Zero|Alla creazione della VM|Alla prima scrittura del blocco|100 GB|
|Thin|Alla prima scrittura del blocco|Alla prima scrittura del blocco|40 GB|

### Formati di disco in OVHcloud

In un'infrastruttura Hosted Private Cloud è possibile utilizzare solo la *Thin provisioning*,

I 3 tipi di formato sono disponibili sugli storage vSAN.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
