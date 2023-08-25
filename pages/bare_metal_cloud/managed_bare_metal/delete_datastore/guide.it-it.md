---
title: 'Rimuovere un datastore'
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_datastore'
excerpt: 'Come eliminare un datastore da un Managed Bare Metal'
legacy_guide_number: '7766789'
updated: 2020-11-18
---


## Obiettivo

In certi casi può essere utile rimuovere un datastore dal cluster, ad esempio per eseguire una sostituzione o per effettuare un upgrade a una nuova versione.

**Questa guida ti mostra come rimuovere in modo sicuro un datastore da un’infrastruttura Managed Bare Metal.**


## Prerequisiti

* Disporre di una soluzione [Managed Bare Metal](https://www.ovhcloud.com/it/managed-bare-metal/){.external}
* Avere accesso all’interfaccia di gestione vSphere


## Procedura

> [!warning]
>
> Ti ricordiamo che non è possibile rimuovere i **due datastore da 300 GB o 1,2 TB** inclusi in un pack. Inoltre, per motivi di sicurezza, non è consentito rimuovere un datastore contenente macchine virtuali (nella finestra di conferma troverai l’elenco delle VM allocate nel datastore).
> 


Per eseguire la rimozione di un datastore, clicca con il tasto destro del mouse sulla risorsa da rimuovere, seleziona `OVHcloud`{.action} e poi `Remove storage`{.action}.

![Scelta del datastore](images/removedatastore01.png){.thumbnail}

Nella nuova finestra, conferma di voler rimuovere il datastore cliccando su `Next`{.action}. 

![Conferma della rimozione](images/removedatastore02.png){.thumbnail}

La richiesta di rimozione è stata inviata.

![Rimozione confermata](images/removedatastore03.png){.thumbnail}

È possibile seguire lo stato di avanzamento della rimozione del datastore nella sezione <b>Recent Tasks</b>.

![Attività di controllo della rimozione](images/removedatastore04.png){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
