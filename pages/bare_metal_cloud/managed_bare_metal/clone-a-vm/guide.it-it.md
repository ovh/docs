---
title: Clonare una VM
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/clone_a_vm'
excerpt: Come copiare una macchina virtuale esistente via vSphere
updated: 2020-11-18
---

**Ultimo aggiornamento: 18/11/2020**

## Obiettivo

La clonazione di una macchina virtuale permette di creare una copia della VM sorgente.

**Questa guida ti mostra come effettuare questa operazione.**

## Prerequisiti

- Disporre di una soluzione [Managed Bare Metal](https://www.ovhcloud.com/it/managed-bare-metal/){.external}
- Disporre di almeno una VM nel cluster
- Avere accesso all’[interfaccia vSphere](/pages/bare_metal_cloud/managed_bare_metal/vsphere-interface)

## Procedura

### Clona la VM

Accedi all’[interfaccia vSphere](/pages/bare_metal_cloud/managed_bare_metal/vsphere-interface) e, nella sezione `Hosts and Clusters`, clicca con il tasto destro sulla VM da clonare e seleziona l’opzione `Clone`{.action} > `Clone to virtual machine...`{.action}. 

![Clonare una VM](images/clonevm01.png){.thumbnail}

Assegna un nome alla nuova macchina virtuale e definiscine la localizzazione.

![Rinominare la VM](images/clonevm02.png){.thumbnail}

### Seleziona la risorsa

Specifica cluster, host, vApp o pool di risorse di questa VM.

![Risorse della VM](images/clonevm03.png){.thumbnail}

### Scegli lo storage

Definisci la localizzazione dello storage (spazio disco) della VM. 

Il formato del disco virtuale è di tipo “Thin Provision”: il disco virtuale sarà quindi creato ma non utilizzerà lo spazio disco realmente impiegato sullo storage, indipendentemente dallo spazio disco precedentemente utilizzato sulla macchina virtuale sorgente.

Per maggiori informazioni sui formati dei dischi VMware, consulta [questa guida](/pages/bare_metal_cloud/managed_bare_metal/choosing-disk-type).

Nella riga `VM Storage Policy` è possibile scegliere la politica di storage predefinita se disponi di datastore, o dell’opzione [VM Encryption](/pages/bare_metal_cloud/managed_bare_metal/vm_encrypt).

![Storage VM](images/clonevm04.png){.thumbnail}

### Configurazione di sistema

Questo step consente di definire la configurazione di rete da applicare alla VM. È possibile scegliere tra due opzioni:

- non selezionare nessuna casella. In questo caso non verranno apportate modifiche alla configurazione di rete della nuova macchina virtuale rispetto a quella sorgente

- selezionare `Customize the virtual machine's hardware`{.action}. In questo caso sarà possibile specificare le nuove configurazioni da applicare alla VM

![Rete della VM](images/clonevm05.png){.thumbnail}

> [!warning]
>
> Se la macchina virtuale non è stata personalizzata, è necessario modificare la configurazione della VM clonata prima di riavviarla per evitare eventuali conflitti di IP/MAC.
>
>In questo caso è sufficiente disabilitare la scheda di rete nei parametri della macchina virtuale, dopo averla clonata e prima di riavviarla.
>
>![Disconnettere la VM](images/clonevm06.png){.thumbnail}
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
