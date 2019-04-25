---
title: 'Installare un template OVF Windows e SQL Server'
slug: installazione-template-ovh
excerpt: 'Scopri come installare un template OVF Windows e SQL Server'
section: 'Servizi e opzioni OVH'
---

**Ultimo aggiornamento: 11/07/2018**

## Obiettivo

OVH propone dei template Windows e SQL server (nel modello OVF) che puoi installare direttamente dal tuo client vSphere (versione 5. e 6.) e dal client Web (Flash e HTML5 su versione 6.5).

**Questa guida ti spiega dove trovare i file immagine e come procedere all’installazione.**

> [!primary]
> 
> Per trovare le tariffe delle immagini proposte da OVH, visita la pagina [Immagini e Licenze](https://www.ovh.it/private-cloud/opzioni/immagini-licenze.xml){.external}.
>

## Prerequisiti

- Avere accesso al client Vsphere o al client Web a seconda della versione utilizzata
- [Avere attivato le licenze di Windows](https://docs.ovh.com/it/private-cloud/spazio-cliente-private-cloud-ovh/#licenze-windows){.external} dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (scheda `Licenza Windows`{.action} del datacenter) 


## Procedura

### Recupera l’URL del template OVF

Da un browser, vai alla home del tuo Private Cloud e clicca su `OVH Template`{.action}.

![Nome della foto](images/gatewayssl.png){.thumbnail}

Nella pagina `OVH Templates`{.action} puoi accedere ai template Windows e SQL disponibili. 

Una volta scelto il template, appare una finestra con i link utili per l'installazione in base alla tua versione di vSphere.

![Nome della foto](images/copylink.png){.thumbnail}


### Installa il template OVF

Una volta connesso al client Web vSphere, vai alla pagina `Host and Clusters`{.action}, clicca con il tasto destro sul tuo datacenter e successivamente su `Deploy OVH Template..`{.action}.

![Nome della foto](images/selectdeploy.png){.thumbnail}

Non appena visualizzi il menu contestuale, puoi iniziare a personalizzare l’installazione. Nel primo step, è necessario aggiungere il link che hai recuperato in precedenza:

![Nome della foto](images/puturl.png){.thumbnail}

Lo step successivo ti permette di scegliere il datacenter:

![Nome della foto](images/selectdatacenter.png){.thumbnail}

In seguito scegli il cluster nel quale verrà installata la macchina virtuale:

![Nome della foto](images/selectcluster.png){.thumbnail}

Trovi tutti i dettagli del template e, in particolare, la password predefinita. Per motivi di sicurezza, è importante cambiarla al momento dalla prima connessione:

![Nome della foto](images/detailstemplate.png){.thumbnail}

Scegli il datastore nel quale verrà archiviata la macchina virtuale, così come il formato del disco: 

![Nome della foto](images/selectdatastore.png){.thumbnail}

Scegli la rete da utilizzare.

![Nome della foto](images/selectnetwork.png){.thumbnail}

Ora che l’operazione è quasi terminata, puoi visualizzare un riepilogo della configurazione:

![Nome della foto](images/resume.png){.thumbnail}

Dopo aver cliccato su `Finish`{.action}, viene creato un task per poter seguire l’installazione:

![Nome della foto](images/startdeploy.png){.thumbnail}

Una volta terminata l’installazione, puoi chiudere la finestra.

Puoi ritrovare nel tuo inventario la macchina virtuale appena installata. 

![Nome della foto](images/inventory.png){.thumbnail}


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.