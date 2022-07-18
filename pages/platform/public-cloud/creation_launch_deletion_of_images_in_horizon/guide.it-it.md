---
title: 'Crea, carica ed elimina immagini con Horizon'
excerpt: 'Crea, carica ed elimina immagini con Horizon'
slug: crea_carica_ed_elimina_immagini_con_horizon
legacy_guide_number: g1784
section: Gestione da Horizon
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 30/12/2021**
  
## Obiettivo

Se vuoi aggiungere immagini personalizzate, puoi utilizzare l'interfaccia OpenStack Horizon.
In questo modo è possibile, ad esempio, importare le immagini delle macchine virtuali precedenti verso il Public Cloud, a condizione che il loro formato sia compatibile.

**Questa guida ti mostra come creare, caricare ed eliminare immagini nell'interfaccia Horizon da cui gestire i tuoi servizi OVHcloud.**


## Prerequisiti

- [Crea un utente per accedere a Horizon](https://docs.ovh.com/it/public-cloud/horizon/)
- Accedi al menu Immagini dell'interfaccia OpenStack Horizon

![public-cloud](images/horizon_menu.png){.thumbnail}


## Gestione delle immagini

- - Di default, se non viene creata alcuna immagine, visualizzi la lista delle immagini pubbliche predefinite:

![public-cloud](images/horizon_images.png){.thumbnail}

- A questo punto puoi caricare un'immagine da un URL o crearne una personale cliccando sul pulsante `Create Image`{.action}, che apre questo menu:

![public-cloud](images/horizon_create_image.png){.thumbnail}

Ci sono vari campi da completare, alcuni obbligatori (*) e altri facoltativi:

- Image name (Nome dell'immagine) (*)
- Image description (Descrizione dell'immagine)
- Image file (File Immagine) (Invio dalla tua posta in locale)
- Image format (Formato dell'immagine)(*):

|||
|---|---|
|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|QEMU Emulator|
|RAW|Raw Disk Image|
|VDI|VirtualBox format|
|VHD|Microsoft format|
|VMDK|VMware format|

- Architecture (Architettura): x86_64
- Spazio disco minimo (in GB): se non specificato, il valore di default è 0.
- RAM minima (in MB): se non specificato, il valore di default è 0.


Puoi definire anche se l'immagine sarà pubblica e se la sua eliminazione sarà protetta.
Una volta confermati questi parametri, l'immagine va in lista d'attesa per la creazione:

![public-cloud](images/horizon_image_saving.png){.thumbnail}

Clicca sul nome dell'immagine per visualizzarne i dettagli:

![public-cloud](images/horizon_image_details.png){.thumbnail}

Dalla colonna **Actions** è possibile:

- caricare l'immagine selezionata per creare un'istanza, in questo caso si apre questo menu:

![public-cloud](images/horizon_launch_image.png){.thumbnail}

- modificare i dettagli dell'immagine (solo per le immagini che hai creato)

- eliminare l'immagine (solo per le immagini che hai creato), in questo caso viene richiesta una conferma:

![public-cloud](images/horizon_delete_image.png){.thumbnail}

## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
